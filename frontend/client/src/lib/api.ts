import axios from 'axios'

// 前台 API 基础 URL，从环境变量读取
// 开发时设置 VITE_API_BASE_URL=http://localhost:8080/api
// 生产时设置 VITE_API_BASE_URL=https://api.novaplaygaming.com/api
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://8080-ilzf9lcbrv3u7s6pubyod-6d19d16e.us2.manus.computer/api'

// 静态资源基础 URL（去掉 /api 后缀）
export const STATIC_BASE_URL = BASE_URL.replace(/\/api$/, '')

/**
 * 将相对路径转为完整 URL
 * 例如：/uploads/halls/youme-lightning.jpg -> https://8080-.../uploads/halls/youme-lightning.jpg
 * 如果已经是完整 URL（http/https 开头），则直接返回
 */
export function getImageUrl(path: string | null | undefined): string {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return STATIC_BASE_URL + path
}

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
})

export default api

// ============================================================
// 前台 API 方法封装
// ============================================================

// 站点配置（Hero、统计数字、联系方式等）
export const configApi = {
  getAll: () => api.get('/config'),
}

// 大厅列表与详情
export const hallApi = {
  list: (params?: { page?: number; limit?: number; keyword?: string }) =>
    api.get('/halls', { params }),
  detail: (slug: string) => api.get(`/halls/${slug}`),
  featured: () => api.get('/halls/featured'),
}

// 游戏列表与详情
export const gameApi = {
  list: (params?: { page?: number; limit?: number; category?: string; keyword?: string }) =>
    api.get('/games', { params }),
  detail: (slug: string) => api.get(`/games/${slug}`),
  featured: () => api.get('/games/featured'),
}

// 合作模式
export const partnershipApi = {
  list: () => api.get('/partnerships'),
}

// 开发服务
export const serviceApi = {
  list: () => api.get('/services'),
}

// 多语言翻译
export const translationApi = {
  getByLang: (lang: string) => api.get(`/translations/${lang}`),
}

// 提交询盘
export const inquiryApi = {
  submit: (data: {
    name: string
    email: string
    company?: string
    telegram?: string
    budget?: string
    message: string
  }) => api.post('/inquiries', data),
}
