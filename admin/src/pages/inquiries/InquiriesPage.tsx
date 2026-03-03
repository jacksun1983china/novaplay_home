import { useEffect, useState } from 'react'
import { inquiryApi } from '@/lib/api'
import { toast } from 'sonner'
import { Mail, MailOpen, Trash2, Search, ExternalLink } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [isRead, setIsRead] = useState('')
  const [selected, setSelected] = useState<any | null>(null)

  const fetchInquiries = () => {
    setLoading(true)
    inquiryApi.list({ page, limit: 20, keyword, is_read: isRead || undefined })
      .then(res => {
        if (res.data.code === 200) {
          setInquiries(res.data.data.list)
          setTotal(res.data.data.total)
        }
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchInquiries() }, [page, keyword, isRead])

  const handleRead = async (inquiry: any) => {
    if (inquiry.is_read === 1) {
      setSelected(inquiry)
      return
    }
    try {
      await inquiryApi.markRead(inquiry.id)
      setInquiries(list => list.map(i => i.id === inquiry.id ? { ...i, is_read: 1 } : i))
      setSelected({ ...inquiry, is_read: 1 })
    } catch {
      setSelected(inquiry)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除该询盘吗？')) return
    try {
      const res = await inquiryApi.delete(id)
      if (res.data.code === 200) {
        toast.success('删除成功')
        setSelected(null)
        fetchInquiries()
      }
    } catch {
      toast.error('删除失败')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="搜索姓名/邮箱..." value={keyword}
            onChange={e => { setKeyword(e.target.value); setPage(1) }}
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-ring" />
        </div>
        <select value={isRead} onChange={e => { setIsRead(e.target.value); setPage(1) }}
          className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-ring">
          <option value="">全部</option>
          <option value="0">未读</option>
          <option value="1">已读</option>
        </select>
      </div>

      <div className="flex gap-4">
        {/* 列表 */}
        <div className="flex-1 bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">发件人</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden sm:table-cell">公司</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden md:table-cell">时间</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">状态</th>
                  <th className="text-right px-4 py-3 text-muted-foreground font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-4 py-3" colSpan={5}><div className="h-4 bg-muted rounded animate-pulse" /></td>
                    </tr>
                  ))
                ) : inquiries.length === 0 ? (
                  <tr><td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">暂无询盘</td></tr>
                ) : (
                  inquiries.map(inquiry => (
                    <tr key={inquiry.id}
                      onClick={() => handleRead(inquiry)}
                      className={`border-b border-border last:border-0 cursor-pointer transition-colors ${
                        selected?.id === inquiry.id ? 'bg-primary/5' : 'hover:bg-muted/20'
                      }`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {inquiry.is_read === 0 && (
                            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                          )}
                          <div>
                            <p className={`font-medium ${inquiry.is_read === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {inquiry.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell text-muted-foreground">{inquiry.company || '-'}</td>
                      <td className="px-4 py-3 hidden md:table-cell text-muted-foreground text-xs">{formatDate(inquiry.created_at)}</td>
                      <td className="px-4 py-3">
                        {inquiry.is_read === 1
                          ? <span className="text-xs text-muted-foreground flex items-center gap-1"><MailOpen className="w-3 h-3" />已读</span>
                          : <span className="text-xs text-blue-600 flex items-center gap-1"><Mail className="w-3 h-3" />未读</span>
                        }
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end">
                          <button onClick={e => { e.stopPropagation(); handleDelete(inquiry.id) }}
                            className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-red-600">
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
                <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 text-sm border border-border rounded-lg disabled:opacity-40 hover:bg-muted">上一页</button>
                <button disabled={page * 20 >= total} onClick={() => setPage(p => p + 1)} className="px-3 py-1 text-sm border border-border rounded-lg disabled:opacity-40 hover:bg-muted">下一页</button>
              </div>
            </div>
          )}
        </div>

        {/* 详情面板 */}
        {selected && (
          <div className="w-80 bg-card rounded-xl border border-border p-5 space-y-4 shrink-0 self-start">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">询盘详情</h3>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-lg leading-none">×</button>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground text-xs mb-0.5">姓名</p>
                <p className="font-medium">{selected.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-0.5">邮箱</p>
                <a href={`mailto:${selected.email}`} className="text-primary hover:underline flex items-center gap-1">
                  {selected.email} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              {selected.company && (
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">公司</p>
                  <p>{selected.company}</p>
                </div>
              )}
              {selected.telegram && (
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">Telegram</p>
                  <p>{selected.telegram}</p>
                </div>
              )}
              {selected.budget && (
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">预算</p>
                  <p>{selected.budget}</p>
                </div>
              )}
              <div>
                <p className="text-muted-foreground text-xs mb-0.5">需求内容</p>
                <p className="whitespace-pre-wrap text-foreground">{selected.message}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-0.5">提交时间</p>
                <p>{formatDate(selected.created_at)}</p>
              </div>
            </div>
            <button onClick={() => handleDelete(selected.id)}
              className="w-full flex items-center justify-center gap-2 text-sm text-red-600 border border-red-200 rounded-lg py-2 hover:bg-red-50 transition-colors">
              <Trash2 className="w-4 h-4" />
              删除此询盘
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
