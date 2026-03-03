import { useEffect, useState } from 'react'
import { dashboardApi } from '@/lib/api'
import { Building2, Gamepad2, MessageSquare, TrendingUp, Eye, EyeOff } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface Stats {
  halls_total: number
  halls_online: number
  games_total: number
  games_online: number
  inquiries_total: number
  inquiries_unread: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dashboardApi.stats()
      .then(res => {
        if (res.data.code === 200) setStats(res.data.data)
      })
      .finally(() => setLoading(false))
  }, [])

  const cards = stats ? [
    {
      label: '大厅总数',
      value: stats.halls_total,
      sub: `${stats.halls_online} 个上线中`,
      icon: Building2,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: '游戏总数',
      value: stats.games_total,
      sub: `${stats.games_online} 个上线中`,
      icon: Gamepad2,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      label: '询盘总数',
      value: stats.inquiries_total,
      sub: `${stats.inquiries_unread} 条未读`,
      icon: MessageSquare,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ] : []

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">欢迎回来</h2>
        <p className="text-muted-foreground text-sm mt-1">
          {formatDate(Math.floor(Date.now() / 1000))} · NovaPlay 管理后台
        </p>
      </div>

      {/* 统计卡片 */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-card rounded-xl border border-border p-5 animate-pulse">
              <div className="h-4 bg-muted rounded w-20 mb-3" />
              <div className="h-8 bg-muted rounded w-16 mb-2" />
              <div className="h-3 bg-muted rounded w-24" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map(card => (
            <div key={card.label} className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{card.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{card.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{card.sub}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 快捷操作 */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-medium text-foreground mb-4">快捷操作</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: '添加大厅', href: '/halls/create', icon: Building2, color: 'text-blue-600 bg-blue-50' },
            { label: '添加游戏', href: '/games/create', icon: Gamepad2, color: 'text-purple-600 bg-purple-50' },
            { label: '查看询盘', href: '/inquiries', icon: MessageSquare, color: 'text-amber-600 bg-amber-50' },
            { label: '站点配置', href: '/config', icon: TrendingUp, color: 'text-green-600 bg-green-50' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-sm text-foreground font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
