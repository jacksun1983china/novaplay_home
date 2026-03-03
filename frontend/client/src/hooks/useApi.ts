import { useState, useEffect, useRef } from "react";

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * 通用 API 数据获取 hook
 * 支持缓存（sessionStorage），避免重复请求
 */
export function useApi<T>(
  fetcher: () => Promise<{ data: { code: number; data: T } }>,
  cacheKey?: string,
  deps: any[] = []
): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    // 检查缓存
    if (cacheKey) {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        try {
          setState({ data: JSON.parse(cached), loading: false, error: null });
          return;
        } catch {
          sessionStorage.removeItem(cacheKey);
        }
      }
    }

    setState((s) => ({ ...s, loading: true, error: null }));

    fetcher()
      .then((res) => {
        if (!mounted.current) return;
        if (res.data.code === 200) {
          const result = res.data.data;
          if (cacheKey) {
            sessionStorage.setItem(cacheKey, JSON.stringify(result));
          }
          setState({ data: result, loading: false, error: null });
        } else {
          setState({ data: null, loading: false, error: "加载失败" });
        }
      })
      .catch(() => {
        if (!mounted.current) return;
        setState({ data: null, loading: false, error: "网络错误" });
      });

    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
