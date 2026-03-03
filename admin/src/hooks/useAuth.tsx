import React, { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '@/lib/api'

interface AdminInfo {
  id: number
  username: string
  last_login?: number
}

interface AuthContextType {
  admin: AdminInfo | null
  token: string | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<AdminInfo | null>(null)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('novaplay_admin_token')
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem('novaplay_admin_token')
    if (storedToken) {
      authApi.profile()
        .then((res) => {
          if (res.data.code === 200) {
            setAdmin(res.data.data)
          } else {
            localStorage.removeItem('novaplay_admin_token')
            setToken(null)
          }
        })
        .catch(() => {
          localStorage.removeItem('novaplay_admin_token')
          setToken(null)
        })
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [])

  const login = async (username: string, password: string) => {
    const res = await authApi.login(username, password)
    if (res.data.code === 200) {
      const { token: newToken, admin: adminInfo } = res.data.data
      localStorage.setItem('novaplay_admin_token', newToken)
      setToken(newToken)
      setAdmin(adminInfo)
    } else {
      throw new Error(res.data.msg || '登录失败')
    }
  }

  const logout = () => {
    authApi.logout().catch(() => {})
    localStorage.removeItem('novaplay_admin_token')
    setToken(null)
    setAdmin(null)
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider value={{ admin, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
