import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gameApi } from '@/lib/api'
import { toast } from 'sonner'
import { Plus, Pencil, Trash2, Eye, EyeOff, Search, Star } from 'lucide-react'

const CATEGORIES = ['Slot', 'Live Casino', 'Sports', 'Lottery', 'Fishing', 'Poker', 'Arcade', 'Crash']

export default function GamesPage() {
  const navigate = useNavigate()
  const [games, setGames] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')

  const fetchGames = () => {
    setLoading(true)
    gameApi.list({ page, limit: 20, keyword, status, category })
      .then(res => {
        if (res.data.code === 200) {
          setGames(res.data.data.list)
          setTotal(res.data.data.total)
        }
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchGames() }, [page, keyword, status, category])

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除该游戏吗？')) return
    try {
      const res = await gameApi.delete(id)
      if (res.data.code === 200) {
        toast.success('删除成功')
        fetchGames()
      }
    } catch {
      toast.error('删除失败')
    }
  }

  const handleToggleStatus = async (game: any) => {
    const newStatus = game.status === 1 ? 0 : 1
    try {
      const res = await gameApi.update(game.id, { status: newStatus })
      if (res.data.code === 200) {
        toast.success(newStatus === 1 ? '已上线' : '已下线')
        fetchGames()
      }
    } catch {
      toast.error('操作失败')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-wrap flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索游戏名称..."
              value={keyword}
              onChange={e => { setKeyword(e.target.value); setPage(1) }}
              className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-ring w-48"
            />
          </div>
          <select
            value={category}
            onChange={e => { setCategory(e.target.value); setPage(1) }}
            className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="">全部分类</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            value={status}
            onChange={e => { setStatus(e.target.value); setPage(1) }}
            className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="">全部状态</option>
            <option value="1">上线</option>
            <option value="0">下线</option>
          </select>
        </div>
        <button
          onClick={() => navigate('/games/create')}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          添加游戏
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">游戏</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden sm:table-cell">分类</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden md:table-cell">排序</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">状态</th>
                <th className="text-right px-4 py-3 text-muted-foreground font-medium">操作</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-4 py-3" colSpan={5}>
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : games.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">暂无数据</td>
                </tr>
              ) : (
                games.map(game => (
                  <tr key={game.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {game.cover_url ? (
                          <img src={game.cover_url} alt={game.name} className="w-10 h-10 rounded-lg object-cover shrink-0 bg-muted" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            <span className="text-muted-foreground text-xs">无图</span>
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-foreground">{game.name}</span>
                            {game.is_featured === 1 && <Star className="w-3 h-3 text-amber-500 fill-amber-500" />}
                          </div>
                          <span className="text-muted-foreground text-xs">{game.slug}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{game.category}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">{game.sort_order}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${game.status === 1 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${game.status === 1 ? 'bg-green-500' : 'bg-red-500'}`} />
                        {game.status === 1 ? '上线' : '下线'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 justify-end">
                        <button onClick={() => handleToggleStatus(game)} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                          {game.status === 1 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button onClick={() => navigate(`/games/${game.id}/edit`)} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-blue-600">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(game.id)} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {total > 20 && (
          <div className="px-4 py-3 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">共 {total} 条</span>
            <div className="flex gap-2">
              <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 text-sm border border-border rounded-lg disabled:opacity-40 hover:bg-muted transition-colors">上一页</button>
              <button disabled={page * 20 >= total} onClick={() => setPage(p => p + 1)} className="px-3 py-1 text-sm border border-border rounded-lg disabled:opacity-40 hover:bg-muted transition-colors">下一页</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
