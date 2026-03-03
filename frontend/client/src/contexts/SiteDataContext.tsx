import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { configApi, hallApi, gameApi, partnershipApi, serviceApi, getImageUrl } from "@/lib/api";

// ============================================================
// 类型定义（与后端 API 响应对齐）
// ============================================================

export interface SiteConfig {
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_bg_url: string;
  logo_url: string;
  stat_projects: string;
  stat_experience: string;
  stat_partners: string;
  stat_satisfaction: string;
  contact_telegram: string;
  contact_email: string;
  contact_whatsapp: string;
  contact_wechat: string;
  site_title: string;
  site_description: string;
  // 扩展字段（来自 np_site_config 的 key-value 格式）
  [key: string]: any;
}

export interface Hall {
  id: number;
  slug: string;
  name: string;
  tagline: string;       // 前端字段名（对应后端 subtitle）
  subtitle?: string;     // 后端原始字段
  description: string;
  image: string;         // 前端字段名（对应后端 cover_url，已转为完整 URL）
  cover_url?: string;    // 后端原始字段
  screenshots: string[];
  url: string;
  tags: string[];
  ctaType?: "coming_soon" | "no_demo";
  comingSoon?: boolean;
  features: string[];
  translations?: Record<string, any>;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  iconUrl: string;       // 前端字段名（对应后端 cover_url，已转为完整 URL）
  cover_url?: string;    // 后端原始字段
  category: string;
  description: string;
  features: string[];
  screenshots: string[];
  url: string;
}

export interface Partnership {
  id: number;
  type_key?: string;
  title: string;
  subtitle: string;
  description: string;
  icon_url: string;
  is_recommended?: number;
  steps?: string[];
  sort_order: number;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  icon_url: string;
  sort_order: number;
}

interface SiteDataContextType {
  config: SiteConfig | null;
  halls: Hall[];
  games: Game[];
  partnerships: Partnership[];
  services: Service[];
  hallTranslations: Record<string, any>;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const SiteDataContext = createContext<SiteDataContextType>({
  config: null,
  halls: [],
  games: [],
  partnerships: [],
  services: [],
  hallTranslations: {},
  loading: true,
  error: null,
  refresh: () => {},
});

// ============================================================
// 数据转换函数：将后端字段映射为前端字段，并处理图片路径
// ============================================================

/**
 * 转换大厅数据：cover_url -> image（完整 URL），subtitle -> tagline
 */
function transformHall(raw: any): Hall {
  return {
    ...raw,
    // 字段映射
    tagline: raw.subtitle || raw.tagline || '',
    image: getImageUrl(raw.cover_url || raw.image || ''),
    // screenshots 可能是对象数组，提取 url 字段
    screenshots: Array.isArray(raw.screenshots)
      ? raw.screenshots.map((s: any) =>
          typeof s === 'string' ? getImageUrl(s) : getImageUrl(s?.url || s?.screenshot_url || '')
        )
      : [],
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    features: Array.isArray(raw.features) ? raw.features : [],
    url: raw.demo_url || raw.url || '',
    comingSoon: raw.cta_type === 'coming_soon',
  };
}

/**
 * 转换游戏数据：cover_url -> iconUrl（完整 URL）
 */
function transformGame(raw: any): Game {
  return {
    ...raw,
    iconUrl: getImageUrl(raw.cover_url || raw.iconUrl || raw.icon_url || ''),
    features: Array.isArray(raw.features) ? raw.features : [],
    screenshots: Array.isArray(raw.screenshots)
      ? raw.screenshots.map((s: any) =>
          typeof s === 'string' ? getImageUrl(s) : getImageUrl(s?.url || '')
        )
      : [],
    url: raw.url || '',
  };
}

/**
 * 转换站点配置：将 key-value 数组或对象转为扁平对象，并处理图片路径
 */
function transformConfig(raw: any): SiteConfig {
  // 后端可能返回 key-value 数组格式 [{cfg_key, cfg_value}] 或已经是扁平对象
  let flat: Record<string, any> = {};
  if (Array.isArray(raw)) {
    raw.forEach((item: any) => {
      if (item.cfg_key) flat[item.cfg_key] = item.cfg_value;
      else if (item.key) flat[item.key] = item.value;
    });
  } else if (typeof raw === 'object' && raw !== null) {
    flat = { ...raw };
  }

  // 处理图片路径
  if (flat.logo_url) flat.logo_url = getImageUrl(flat.logo_url);
  if (flat.hero_bg_url) flat.hero_bg_url = getImageUrl(flat.hero_bg_url);

  return flat as SiteConfig;
}

/**
 * 转换合作模式数据
 */
function transformPartnership(raw: any): Partnership {
  return {
    ...raw,
    steps: Array.isArray(raw.steps)
      ? raw.steps
      : (typeof raw.steps === 'string' ? JSON.parse(raw.steps || '[]') : []),
  };
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [halls, setHalls] = useState<Hall[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [partnerships, setPartnerships] = useState<Partnership[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [hallTranslations, setHallTranslations] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [configRes, hallsRes, gamesRes, partnershipsRes, servicesRes] =
        await Promise.allSettled([
          configApi.getAll(),
          hallApi.list({ limit: 100 }),
          gameApi.list({ limit: 100 }),
          partnershipApi.list(),
          serviceApi.list(),
        ]);

      if (configRes.status === "fulfilled" && configRes.value.data.code === 200) {
        setConfig(transformConfig(configRes.value.data.data));
      }

      if (hallsRes.status === "fulfilled" && hallsRes.value.data.code === 200) {
        const data = hallsRes.value.data.data;
        const rawList: any[] = Array.isArray(data) ? data : data?.list || [];
        // 按 sort_order 升序排列
        rawList.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
        const hallList: Hall[] = rawList.map(transformHall);
        setHalls(hallList);
        // 从 halls 数据中提取 translations 字段，构建 hallTranslations 映射
        const translations: Record<string, any> = {};
        hallList.forEach((h) => {
          if (h.translations) {
            translations[h.slug] = h.translations;
          }
        });
        setHallTranslations(translations);
      }

      if (gamesRes.status === "fulfilled" && gamesRes.value.data.code === 200) {
        const data = gamesRes.value.data.data;
        const rawList: any[] = Array.isArray(data) ? data : data?.list || [];
        // 按 sort_order 升序排列
        rawList.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
        setGames(rawList.map(transformGame));
      }

      if (
        partnershipsRes.status === "fulfilled" &&
        partnershipsRes.value.data.code === 200
      ) {
        const data = partnershipsRes.value.data.data;
        const rawList: any[] = Array.isArray(data) ? data : data?.list || [];
        setPartnerships(rawList.map(transformPartnership));
      }

      if (
        servicesRes.status === "fulfilled" &&
        servicesRes.value.data.code === 200
      ) {
        const data = servicesRes.value.data.data;
        setServices(Array.isArray(data) ? data : data?.list || []);
      }
    } catch (e) {
      setError("数据加载失败，请刷新重试");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  return (
    <SiteDataContext.Provider
      value={{
        config,
        halls,
        games,
        partnerships,
        services,
        hallTranslations,
        loading,
        error,
        refresh: loadAll,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
