import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { configApi, hallApi, gameApi, partnershipApi, serviceApi, getImageUrl } from "@/lib/api";
import {
  games as staticGames,
  halls as staticHalls,
  LOGO_URL,
  HERO_BG_URL,
  CONTACT_BG_URL,
  SECTION_DIVIDER_URL,
  hallTranslations as staticHallTranslations,
} from "@/lib/data";

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

// ============================================================
// 默认静态配置（当 API 不可用时使用）
// ============================================================
const defaultConfig: SiteConfig = {
  hero_title: "NovaPlay Gaming",
  hero_subtitle: "Premium Gaming Platform Developer",
  hero_description: "We deliver high-quality game lobby solutions, custom development, and global partnership services for the online gaming industry.",
  hero_bg_url: HERO_BG_URL,
  logo_url: LOGO_URL,
  stat_projects: "200+",
  stat_experience: "10+",
  stat_partners: "50+",
  stat_satisfaction: "99%",
  contact_telegram: "novaplaygaming",
  contact_email: "business@novaplaygaming.com",
  contact_whatsapp: "+1234567890",
  contact_wechat: "novaplaygaming",
  site_title: "NovaPlay - Premium Gaming Platform Developer",
  site_description: "NovaPlay — Premium gaming platform developer delivering high-quality game lobby solutions, custom development, and global partnership services.",
  section_divider_url: SECTION_DIVIDER_URL,
  contact_bg_url: CONTACT_BG_URL,
};

// 默认合作模式数据
const defaultPartnerships: Partnership[] = [
  {
    id: 1,
    type_key: "api",
    title: "API Integration",
    subtitle: "Seamless Game Integration",
    description: "Integrate our game library into your existing platform via our robust API. Get access to 200+ games with a single integration.",
    icon_url: "",
    is_recommended: 1,
    steps: ["Sign Agreement", "Get API Keys", "Integrate SDK", "Testing", "Go Live"],
    sort_order: 1,
  },
  {
    id: 2,
    type_key: "whitelabel",
    title: "White Label Solution",
    subtitle: "Your Brand, Our Technology",
    description: "Launch your own branded gaming platform powered by our technology. Full customization of UI, games, and features.",
    icon_url: "",
    steps: ["Consultation", "Customization", "Branding", "Deployment", "Support"],
    sort_order: 2,
  },
  {
    id: 3,
    type_key: "turnkey",
    title: "Turnkey Platform",
    subtitle: "Complete Gaming Solution",
    description: "Get a fully operational gaming platform with everything included — games, payment, CRM, and 24/7 support.",
    icon_url: "",
    steps: ["Planning", "Development", "Integration", "Launch", "Ongoing Support"],
    sort_order: 3,
  },
];

// 默认开发服务数据
const defaultServices: Service[] = [
  {
    id: 1,
    icon: "gamepad",
    title: "Game Development",
    description: "Custom slot, fish, and casino game development with stunning graphics and engaging gameplay mechanics.",
    icon_url: "",
    sort_order: 1,
  },
  {
    id: 2,
    icon: "layout",
    title: "Platform Development",
    description: "Full-featured gaming platform development including lobby, wallet, CRM, and back-office systems.",
    icon_url: "",
    sort_order: 2,
  },
  {
    id: 3,
    icon: "globe",
    title: "Localization",
    description: "Multi-language and multi-currency support for global market expansion across Asia, Africa, and Americas.",
    icon_url: "",
    sort_order: 3,
  },
  {
    id: 4,
    icon: "shield",
    title: "Security & Compliance",
    description: "Enterprise-grade security, anti-fraud systems, and regulatory compliance for licensed operations.",
    icon_url: "",
    sort_order: 4,
  },
];

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

    let apiSuccess = false;

    try {
      const [configRes, hallsRes, gamesRes, partnershipsRes, servicesRes] =
        await Promise.allSettled([
          configApi.getAll(),
          hallApi.list({ limit: 100 }),
          gameApi.list({ limit: 100 }),
          partnershipApi.list(),
          serviceApi.list(),
        ]);

      // Config
      if (configRes.status === "fulfilled" && configRes.value.data.code === 200) {
        setConfig(transformConfig(configRes.value.data.data));
        apiSuccess = true;
      }

      // Halls
      if (hallsRes.status === "fulfilled" && hallsRes.value.data.code === 200) {
        const data = hallsRes.value.data.data;
        const rawList: any[] = Array.isArray(data) ? data : data?.list || [];
        rawList.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
        const hallList: Hall[] = rawList.map(transformHall);
        if (hallList.length > 0) {
          setHalls(hallList);
          apiSuccess = true;
          const translations: Record<string, any> = {};
          hallList.forEach((h) => {
            if (h.translations) {
              translations[h.slug] = h.translations;
            }
          });
          setHallTranslations(translations);
        }
      }

      // Games
      if (gamesRes.status === "fulfilled" && gamesRes.value.data.code === 200) {
        const data = gamesRes.value.data.data;
        const rawList: any[] = Array.isArray(data) ? data : data?.list || [];
        rawList.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
        const gameList = rawList.map(transformGame);
        if (gameList.length > 0) {
          setGames(gameList);
          apiSuccess = true;
        }
      }

      // Partnerships
      if (
        partnershipsRes.status === "fulfilled" &&
        partnershipsRes.value.data.code === 200
      ) {
        const data = partnershipsRes.value.data.data;
        const rawList: any[] = Array.isArray(data) ? data : data?.list || [];
        if (rawList.length > 0) {
          setPartnerships(rawList.map(transformPartnership));
        }
      }

      // Services
      if (
        servicesRes.status === "fulfilled" &&
        servicesRes.value.data.code === 200
      ) {
        const data = servicesRes.value.data.data;
        const list = Array.isArray(data) ? data : data?.list || [];
        if (list.length > 0) {
          setServices(list);
        }
      }
    } catch (e) {
      console.warn("API request failed, using static fallback data");
    }

    // ============================================================
    // Fallback: 如果 API 没有返回有效数据，使用 data.ts 中的静态数据
    // ============================================================
    setConfig((prev) => prev || defaultConfig);
    setHalls((prev) => prev.length > 0 ? prev : (staticHalls as unknown as Hall[]));
    setGames((prev) => prev.length > 0 ? prev : (staticGames as unknown as Game[]));
    setPartnerships((prev) => prev.length > 0 ? prev : defaultPartnerships);
    setServices((prev) => prev.length > 0 ? prev : defaultServices);
    setHallTranslations((prev) =>
      Object.keys(prev).length > 0 ? prev : staticHallTranslations
    );

    if (!apiSuccess) {
      setError(null); // 使用静态数据时不显示错误
    }

    setLoading(false);
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
