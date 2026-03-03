import axios from 'axios'

// API 基础 URL，从环境变量读取
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://8080-ilzf9lcbrv3u7s6pubyod-6d19d16e.us2.manus.computer/admin'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器：自动附加 JWT Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('novaplay_admin_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器：统一处理错误
api.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.code === 401) {
      localStorage.removeItem('novaplay_admin_token')
      window.location.href = '/login'
    }
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('novaplay_admin_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api

// ============================================================
// API 方法封装
// ============================================================

// 认证
export const authApi = {
  login: (username: string, password: string) =>
    api.post('/login', { username, password }),
  logout: () => api.post('/logout'),
  profile: () => api.get('/profile'),
}

// 仪表盘
export const dashboardApi = {
  stats: () => api.get('/dashboard'),
}

// 站点配置
export const configApi = {
  getAll: () => api.get('/config'),
  update: (data: Record<string, any>) => api.put('/config', data),
}

// 大厅管理
export const hallApi = {
  list: (params?: any) => api.get('/halls', { params }),
  detail: (id: number) => api.get(`/halls/${id}`),
  create: (data: any) => api.post('/halls', data),
  update: (id: number, data: any) => api.put(`/halls/${id}`, data),
  delete: (id: number) => api.delete(`/halls/${id}`),
  sort: (id: number, sortOrder: number) =>
    api.post(`/halls/${id}/sort`, { sort_order: sortOrder }),
  addScreenshot: (id: number, url: string, sortOrder = 0) =>
    api.post(`/halls/${id}/screenshots`, { url, sort_order: sortOrder }),
  deleteScreenshot: (id: number, sid: number) =>
    api.delete(`/halls/${id}/screenshots/${sid}`),
  getTranslations: (id: number) => api.get(`/halls/${id}/translations`),
  saveTranslations: (id: number, translations: any[]) =>
    api.post(`/halls/${id}/translations`, { translations }),
}

// 游戏管理
export const gameApi = {
  list: (params?: any) => api.get('/games', { params }),
  detail: (id: number) => api.get(`/games/${id}`),
  create: (data: any) => api.post('/games', data),
  update: (id: number, data: any) => api.put(`/games/${id}`, data),
  delete: (id: number) => api.delete(`/games/${id}`),
}

// 合作模式
export const partnershipApi = {
  list: () => api.get('/partnerships'),
  create: (data: any) => api.post('/partnerships', data),
  update: (id: number, data: any) => api.put(`/partnerships/${id}`, data),
  delete: (id: number) => api.delete(`/partnerships/${id}`),
}

// 自定义开发服务
export const serviceApi = {
  list: () => api.get('/services'),
  create: (data: any) => api.post('/services', data),
  update: (id: number, data: any) => api.put(`/services/${id}`, data),
  delete: (id: number) => api.delete(`/services/${id}`),
}

// 多语言翻译
export const translationApi = {
  getAll: (lang?: string) => api.get('/translations', { params: { lang } }),
  batchSave: (lang: string, translations: Record<string, string>) =>
    api.post('/translations/batch', { lang, translations }),
}

// 询盘管理
export const inquiryApi = {
  list: (params?: any) => api.get('/inquiries', { params }),
  markRead: (id: number) => api.put(`/inquiries/${id}/read`),
  delete: (id: number) => api.delete(`/inquiries/${id}`),
}

// 图片上传
export const uploadApi = {
  image: (file: File, dir = 'common') => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('dir', dir)
    return api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}
