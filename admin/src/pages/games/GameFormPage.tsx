import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { gameApi, uploadApi } from '@/lib/api'
import { toast } from 'sonner'
import { ArrowLeft, Loader2, Upload } from 'lucide-react'

const CATEGORIES = ['Slot', 'Live Casino', 'Sports', 'Lottery', 'Fishing', 'Poker', 'Arcade', 'Crash']

export default function GameFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const [form, setForm] = useState({
    name: '', slug: '', category: 'Slot', cover_url: '',
    description: '', is_featured: 0, sort_order: 0, status: 1,
  })

  useEffect(() => {
    if (isEdit) {
      setLoading(true)
      gameApi.detail(Number(id))
        .then(res => {
          if (res.data.code === 200) {
            const g = res.data.data
            setForm({
              name: g.name || '', slug: g.slug || '',
              category: g.category || 'Slot', cover_url: g.cover_url || '',
              description: g.description || '', is_featured: g.is_featured || 0,
              sort_order: g.sort_order || 0, status: g.status ?? 1,
            })
          }
        })
        .finally(() => setLoading(false))
    }
  }, [id])

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const res = await uploadApi.image(file, 'games')
      if (res.data.code === 200) {
        setForm(f => ({ ...f, cover_url: res.data.data.url }))
        toast.success('封面图上传成功')
      } else {
        toast.error(res.data.msg || '上传失败')
      }
    } catch {
      toast.error('上传失败')
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    if (!form.name.trim()) { toast.error('游戏名称不能为空'); return }
    setSaving(true)
    try {
      let res
      if (isEdit) {
        res = await gameApi.update(Number(id), form)
      } else {
        res = await gameApi.create(form)
      }
      if (res.data.code === 200) {
        toast.success(isEdit ? '更新成功' : '创建成功')
        navigate('/games')
      } else {
        toast.error(res.data.msg || '保存失败')
      }
    } catch {
      toast.error('保存失败')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>
  }

  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/games')} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">{isEdit ? '编辑游戏' : '添加游戏'}</h2>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">游戏名称 <span className="text-red-500">*</span></label>
            <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="如：Fortune Tiger" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Slug</label>
            <input type="text" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
              placeholder="自动生成" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">游戏分类</label>
          <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">封面图</label>
          <div className="flex gap-3 items-start">
            {form.cover_url && (
              <img src={form.cover_url} alt="封面" className="w-20 h-20 rounded-lg object-cover border border-border" />
            )}
            <div className="flex-1 space-y-2">
              <input type="text" value={form.cover_url} onChange={e => setForm(f => ({ ...f, cover_url: e.target.value }))}
                placeholder="图片 URL" className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
              <label className="inline-flex items-center gap-2 text-sm text-primary cursor-pointer hover:underline">
                <Upload className="w-4 h-4" />
                {uploading ? '上传中...' : '上传图片'}
                <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} disabled={uploading} />
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">描述</label>
          <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            placeholder="游戏描述" rows={3} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background resize-none" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">排序</label>
            <input type="number" value={form.sort_order} onChange={e => setForm(f => ({ ...f, sort_order: Number(e.target.value) }))}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">推荐</label>
            <select value={form.is_featured} onChange={e => setForm(f => ({ ...f, is_featured: Number(e.target.value) }))}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background">
              <option value={0}>否</option>
              <option value={1}>是</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">状态</label>
            <select value={form.status} onChange={e => setForm(f => ({ ...f, status: Number(e.target.value) }))}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background">
              <option value={1}>上线</option>
              <option value={0}>下线</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button onClick={handleSave} disabled={saving}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors">
            {saving && <Loader2 className="w-4 h-4 animate-spin" />}
            {saving ? '保存中...' : '保存'}
          </button>
        </div>
      </div>
    </div>
  )
}
