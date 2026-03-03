import { useEffect, useState } from 'react'
import { serviceApi, uploadApi } from '@/lib/api'
import { toast } from 'sonner'
import { Plus, Pencil, Trash2, Loader2, Upload, X } from 'lucide-react'

export default function ServicesPage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<any | null>(null)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const fetch = () => {
    setLoading(true)
    serviceApi.list()
      .then(res => { if (res.data.code === 200) setItems(res.data.data) })
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetch() }, [])

  const openCreate = () => setEditing({ title: '', description: '', icon_url: '', sort_order: 0, status: 1 })
  const openEdit = (item: any) => setEditing({ ...item })

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const res = await uploadApi.image(file, 'services')
      if (res.data.code === 200) {
        setEditing((p: any) => ({ ...p, icon_url: res.data.data.url }))
        toast.success('上传成功')
      }
    } catch { toast.error('上传失败') }
    finally { setUploading(false) }
  }

  const handleSave = async () => {
    if (!editing.title?.trim()) { toast.error('标题不能为空'); return }
    setSaving(true)
    try {
      let res
      if (editing.id) {
        res = await serviceApi.update(editing.id, editing)
      } else {
        res = await serviceApi.create(editing)
      }
      if (res.data.code === 200) {
        toast.success(editing.id ? '更新成功' : '创建成功')
        setEditing(null)
        fetch()
      } else {
        toast.error(res.data.msg || '保存失败')
      }
    } catch { toast.error('保存失败') }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('确定删除？')) return
    try {
      const res = await serviceApi.delete(id)
      if (res.data.code === 200) { toast.success('删除成功'); fetch() }
    } catch { toast.error('删除失败') }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button onClick={openCreate}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> 添加服务项目
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-card rounded-xl border border-border p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  {item.icon_url && <img src={item.icon_url} alt="" className="w-10 h-10 rounded-lg object-cover" />}
                  <p className="font-semibold text-foreground">{item.title}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-blue-600 transition-colors"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 1 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {item.status === 1 ? '上线' : '下线'}
              </span>
            </div>
          ))}
          {items.length === 0 && <div className="col-span-3 py-12 text-center text-muted-foreground">暂无数据</div>}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl border border-border w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{editing.id ? '编辑服务项目' : '添加服务项目'}</h3>
              <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">标题 *</label>
                <input type="text" value={editing.title || ''} onChange={e => setEditing((p: any) => ({ ...p, title: e.target.value }))}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">描述</label>
                <textarea value={editing.description || ''} onChange={e => setEditing((p: any) => ({ ...p, description: e.target.value }))}
                  rows={3} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">图标</label>
                <div className="flex gap-2 items-center">
                  {editing.icon_url && <img src={editing.icon_url} alt="" className="w-10 h-10 rounded-lg object-cover border border-border" />}
                  <input type="text" value={editing.icon_url || ''} onChange={e => setEditing((p: any) => ({ ...p, icon_url: e.target.value }))}
                    placeholder="图标 URL" className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
                  <label className="cursor-pointer text-primary hover:underline text-sm flex items-center gap-1">
                    <Upload className="w-4 h-4" />
                    <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">排序</label>
                  <input type="number" value={editing.sort_order || 0} onChange={e => setEditing((p: any) => ({ ...p, sort_order: Number(e.target.value) }))}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">状态</label>
                  <select value={editing.status ?? 1} onChange={e => setEditing((p: any) => ({ ...p, status: Number(e.target.value) }))}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background">
                    <option value={1}>上线</option>
                    <option value={0}>下线</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditing(null)} className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-colors">取消</button>
              <button onClick={handleSave} disabled={saving}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors">
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                {saving ? '保存中...' : '保存'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
