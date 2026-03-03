import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { hallApi } from '@/lib/api'
import { toast } from 'sonner'
import { Plus, Pencil, Trash2, Eye, EyeOff, Search, Star } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function HallsPage() {
  const navigate = useNavigate()
  const [halls, setHalls] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState('')
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const fetchHalls = () => {
    setLoading(true)
    hallApi.list({ page, limit: 20, keyword, status })
      .then(res => {
        if (res.data.code === 200) {
          setHalls(res.data.data.list)
          setTotal(res.data.data.total)
        }
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchHalls() }, [page, keyword, status])

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除该大厅吗？此操作不可恢复。')) return
    try {
      const res = await hallApi.delete(id)
      if (res.data.code === 200) {
        toast.success('删除成功')
        fetchHalls()
      } else {
        toast.error(res.data.msg || '删除失败')
      }
    } catch {
      toast.error('删除失败')
    }
  }

  const handleToggleStatus = async (hall: any) => {
    const newStatus = hall.status === 1 ? 0 : 1
    try {
      const res = await hallApi.update(hall.id, { status: newStatus })
      if (res.data.code === 200) {
        toast.success(newStatus === 1 ? '已上线' : '已下线')
        fetchHalls()
      }
    } catch {
      toast.error('操作失败')
    }
  }

  return (
    <div className="space-y-4">
      {/* 工具栏 */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索大厅名称..."
              value={keyword}
              onChange={e => { setKeyword(e.target.value); setPage(1) }}
              className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
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
          onClick={() => navigate('/halls/create')}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          添加大厅
        </button>
      </div>

      {/* 表格 */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">大厅</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden sm:table-cell">标签</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden md:table-cell">排序</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">状态</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden lg:table-cell">创建时间</th>
                <th className="text-right px-4 py-3 text-muted-foreground font-medium">操作</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-4 py-3" colSpan={6}>
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : halls.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                    暂无数据
                  </td>
                </tr>
              ) : (
                halls.map(hall => (
                  <tr key={hall.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {hall.cover_url ? (
                          <img
                            src={hall.cover_url}
                            alt={hall.name}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 bg-muted"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            <span className="text-muted-foreground text-xs">无图</span>
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-foreground">{hall.name}</span>
                            {hall.is_featured === 1 && (
                              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                            )}
                          </div>
                          <span className="text-muted-foreground text-xs">{hall.slug}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {(Array.isArray(hall.tags) ? hall.tags : []).slice(0, 3).map((tag: string) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">
                      {hall.sort_order}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${
                        hall.status === 1
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${hall.status === 1 ? 'bg-green-500' : 'bg-red-500'}`} />
                        {hall.status === 1 ? '上线' : '下线'}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-muted-foreground text-xs">
                      {formatDate(hall.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 justify-end">
                        <button
                          onClick={() => handleToggleStatus(hall)}
                          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                          title={hall.status === 1 ? '下线' : '上线'}
                        >
                          {hall.status === 1 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => navigate(`/halls/${hall.id}/edit`)}
                          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-blue-600"
                          title="编辑"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(hall.id)}
                          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-red-600"
                          title="删除"
                        >
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

        {/* 分页 */}
        {total > 20 && (
          <div className="px-4 py-3 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">共 {total} 条</span>
            <div className="flex gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage(p => p - 1)}
                className="px-3 py-1 text-sm border border-border rounded-lg disabled:opacity-40 hover:bg-muted transition-colors"
              >
                上一页
              </button>
              <button
                disabled={page * 20 >= total}
                onClick={() => setPage(p => p + 1)}
                className="px-3 py-1 text-sm border border-border rounded-lg disabled:opacity-40 hover:bg-muted transition-colors"
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
