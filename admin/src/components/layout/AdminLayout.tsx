import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import {
  LayoutDashboard, Building2, Gamepad2, Settings, MessageSquare,
  Languages, LogOut, ChevronRight, Handshake, Wrench, Menu, X
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard',    icon: LayoutDashboard, label: '仪表盘' },
  { to: '/halls',        icon: Building2,       label: '大厅管理' },
  { to: '/games',        icon: Gamepad2,        label: '游戏管理' },
  { to: '/config',       icon: Settings,        label: '站点配置' },
  { to: '/partnerships', icon: Handshake,       label: '合作模式' },
  { to: '/services',     icon: Wrench,          label: '开发服务' },
  { to: '/translations', icon: Languages,       label: '多语言翻译' },
  { to: '/inquiries',    icon: MessageSquare,   label: '询盘管理' },
]

export default function AdminLayout() {
  const { admin, logout } = useAuth()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentTitle = navItems.find(item =>
    location.pathname.startsWith(item.to)
  )?.label || '管理后台'

  return (
    <div className="min-h-screen flex bg-background">
      {/* 移动端遮罩 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 侧边栏 */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-60 bg-sidebar flex flex-col z-50 transition-transform duration-200",
        "lg:translate-x-0 lg:static lg:z-auto",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-5 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Gamepad2 className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sidebar-foreground font-semibold text-sm leading-none">NovaPlay</p>
            <p className="text-sidebar-foreground/50 text-xs mt-0.5">管理后台</p>
          </div>
          <button
            className="ml-auto lg:hidden text-sidebar-foreground/60 hover:text-sidebar-foreground"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 导航 */}
        <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-sidebar-primary/20 text-sidebar-primary font-medium"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="flex-1">{label}</span>
              <ChevronRight className="w-3 h-3 opacity-40" />
            </NavLink>
          ))}
        </nav>

        {/* 用户信息 */}
        <div className="p-3 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-sidebar-primary/30 flex items-center justify-center">
              <span className="text-sidebar-primary text-sm font-semibold">
                {admin?.username?.[0]?.toUpperCase() || 'A'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sidebar-foreground text-sm font-medium truncate">
                {admin?.username || 'Admin'}
              </p>
              <p className="text-sidebar-foreground/40 text-xs">超级管理员</p>
            </div>
            <button
              onClick={logout}
              className="text-sidebar-foreground/40 hover:text-red-400 transition-colors"
              title="退出登录"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 顶部栏 */}
        <header className="h-16 bg-card border-b border-border flex items-center gap-4 px-6 shrink-0">
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-base font-semibold text-foreground">{currentTitle}</h1>
        </header>

        {/* 页面内容 */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
