import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { hallApi, uploadApi } from '@/lib/api'
import { toast } from 'sonner'
import { ArrowLeft, Loader2, Plus, Trash2, Upload, Globe } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'th', name: 'ภาษาไทย' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Bahasa Melayu' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ar', name: 'العربية' },
  { code: 'ru', name: 'Русский' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
]

const TAGS_OPTIONS = ['Slot', 'Live Casino', 'Sports', 'Lottery', 'Fishing', 'Poker', 'Arcade', 'Crash']

export default function HallFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'basic' | 'screenshots' | 'translations'>('basic')

  // 基础数据
  const [form, setForm] = useState({
    name: '', slug: '', subtitle: '', description: '',
    cover_url: '', demo_url: '', cta_type: 'demo',
    is_featured: 0, sort_order: 0, status: 1,
    tags: [] as string[],
  })

  // 截图
  const [screenshots, setScreenshots] = useState<any[]>([])
  const [newScreenshotUrl, setNewScreenshotUrl] = useState('')

  // 翻译
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [activeLang, setActiveLang] = useState('zh')

  // 图片上传状态
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (isEdit) {
      setLoading(true)
      hallApi.detail(Number(id))
        .then(res => {
          if (res.data.code === 200) {
            const hall = res.data.data
            setForm({
              name: hall.name || '',
              slug: hall.slug || '',
              subtitle: hall.subtitle || '',
              description: hall.description || '',
              cover_url: hall.cover_url || '',
              demo_url: hall.demo_url || '',
              cta_type: hall.cta_type || 'demo',
              is_featured: hall.is_featured || 0,
              sort_order: hall.sort_order || 0,
              status: hall.status ?? 1,
              tags: Array.isArray(hall.tags) ? hall.tags : [],
            })
            setScreenshots(hall.screenshots || [])
            // 处理翻译
            const transMap: Record<string, any> = {}
            ;(hall.translations || []).forEach((t: any) => {
              transMap[t.lang] = t
            })
            setTranslations(transMap)
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
      const res = await uploadApi.image(file, 'halls')
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

  const handleTagToggle = (tag: string) => {
    setForm(f => ({
      ...f,
      tags: f.tags.includes(tag)
        ? f.tags.filter(t => t !== tag)
        : [...f.tags, tag],
    }))
  }

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error('大厅名称不能为空')
      return
    }
    setSaving(true)
    try {
      let res
      if (isEdit) {
        res = await hallApi.update(Number(id), form)
      } else {
        res = await hallApi.create(form)
      }
      if (res.data.code === 200) {
        toast.success(isEdit ? '更新成功' : '创建成功')
        if (!isEdit) {
          navigate(`/halls/${res.data.data.id}/edit`)
        }
      } else {
        toast.error(res.data.msg || '保存失败')
      }
    } catch {
      toast.error('保存失败')
    } finally {
      setSaving(false)
    }
  }

  const handleAddScreenshot = async () => {
    if (!newScreenshotUrl.trim()) {
      toast.error('请输入截图 URL')
      return
    }
    if (!isEdit) {
      toast.error('请先保存大厅基础信息')
      return
    }
    try {
      const res = await hallApi.addScreenshot(Number(id), newScreenshotUrl.trim())
      if (res.data.code === 200) {
        toast.success('截图添加成功')
        setNewScreenshotUrl('')
        // 刷新截图列表
        const detailRes = await hallApi.detail(Number(id))
        if (detailRes.data.code === 200) {
          setScreenshots(detailRes.data.data.screenshots || [])
        }
      }
    } catch {
      toast.error('添加失败')
    }
  }

  const handleDeleteScreenshot = async (sid: number) => {
    try {
      await hallApi.deleteScreenshot(Number(id), sid)
      setScreenshots(s => s.filter(ss => ss.id !== sid))
      toast.success('截图删除成功')
    } catch {
      toast.error('删除失败')
    }
  }

  const handleSaveTranslations = async () => {
    if (!isEdit) {
      toast.error('请先保存大厅基础信息')
      return
    }
    const transArray = Object.entries(translations).map(([lang, t]) => ({
      lang,
      name: t.name || '',
      subtitle: t.subtitle || '',
      description: t.description || '',
    }))
    try {
      const res = await hallApi.saveTranslations(Number(id), transArray)
      if (res.data.code === 200) {
        toast.success('翻译保存成功')
      } else {
        toast.error(res.data.msg || '保存失败')
      }
    } catch {
      toast.error('保存失败')
    }
  }

  const updateTranslation = (lang: string, field: string, value: string) => {
    setTranslations(prev => ({
      ...prev,
      [lang]: { ...(prev[lang] || {}), lang, [field]: value },
    }))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="max-w-3xl space-y-4">
      {/* 顶部 */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/halls')}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">{isEdit ? '编辑大厅' : '添加大厅'}</h2>
      </div>

      {/* 标签页 */}
      <div className="flex gap-1 border-b border-border">
        {[
          { key: 'basic', label: '基础信息' },
          { key: 'screenshots', label: '截图管理' },
          { key: 'translations', label: '多语言翻译' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab.key
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 基础信息 */}
      {activeTab === 'basic' && (
        <div className="bg-card rounded-xl border border-border p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">大厅名称 <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="如：King Kong's Jungle"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Slug（URL 标识）</label>
              <input
                type="text"
                value={form.slug}
                onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                placeholder="自动生成，可手动修改"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">副标题</label>
            <input
              type="text"
              value={form.subtitle}
              onChange={e => setForm(f => ({ ...f, subtitle: e.target.value }))}
              placeholder="简短描述，显示在大厅卡片上"
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">详细描述</label>
            <textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              placeholder="大厅详情页的描述文案"
              rows={4}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background resize-none"
            />
          </div>

          {/* 封面图 */}
          <div>
            <label className="block text-sm font-medium mb-1.5">封面图</label>
            <div className="flex gap-3 items-start">
              {form.cover_url && (
                <img
                  src={form.cover_url}
                  alt="封面"
                  className="w-20 h-20 rounded-lg object-cover border border-border"
                />
              )}
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={form.cover_url}
                  onChange={e => setForm(f => ({ ...f, cover_url: e.target.value }))}
                  placeholder="图片 URL，或点击右侧上传"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
                />
                <label className="inline-flex items-center gap-2 text-sm text-primary cursor-pointer hover:underline">
                  <Upload className="w-4 h-4" />
                  {uploading ? '上传中...' : '上传图片'}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCoverUpload}
                    disabled={uploading}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* 标签 */}
          <div>
            <label className="block text-sm font-medium mb-1.5">游戏类型标签</label>
            <div className="flex flex-wrap gap-2">
              {TAGS_OPTIONS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                    form.tags.includes(tag)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:border-primary'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">演示链接</label>
              <input
                type="text"
                value={form.demo_url}
                onChange={e => setForm(f => ({ ...f, demo_url: e.target.value }))}
                placeholder="https://..."
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">CTA 按钮类型</label>
              <select
                value={form.cta_type}
                onChange={e => setForm(f => ({ ...f, cta_type: e.target.value }))}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              >
                <option value="demo">Demo 演示</option>
                <option value="coming_soon">即将上线</option>
                <option value="no_demo">无演示</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">排序权重</label>
              <input
                type="number"
                value={form.sort_order}
                onChange={e => setForm(f => ({ ...f, sort_order: Number(e.target.value) }))}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">是否推荐</label>
              <select
                value={form.is_featured}
                onChange={e => setForm(f => ({ ...f, is_featured: Number(e.target.value) }))}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              >
                <option value={0}>否</option>
                <option value={1}>是</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">状态</label>
              <select
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: Number(e.target.value) }))}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              >
                <option value={1}>上线</option>
                <option value={0}>下线</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {saving ? '保存中...' : '保存'}
            </button>
          </div>
        </div>
      )}

      {/* 截图管理 */}
      {activeTab === 'screenshots' && (
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          {!isEdit && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-700">
              请先保存大厅基础信息后，再添加截图。
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="text"
              value={newScreenshotUrl}
              onChange={e => setNewScreenshotUrl(e.target.value)}
              placeholder="输入截图 URL"
              className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
            />
            <button
              onClick={handleAddScreenshot}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              添加
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {screenshots.map(ss => (
              <div key={ss.id} className="relative group">
                <img
                  src={ss.url}
                  alt=""
                  className="w-full aspect-video object-cover rounded-lg border border-border"
                />
                <button
                  onClick={() => handleDeleteScreenshot(ss.id)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
            {screenshots.length === 0 && (
              <div className="col-span-3 py-12 text-center text-muted-foreground text-sm">
                暂无截图，请添加
              </div>
            )}
          </div>
        </div>
      )}

      {/* 多语言翻译 */}
      {activeTab === 'translations' && (
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          {!isEdit && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-700">
              请先保存大厅基础信息后，再编辑翻译。
            </div>
          )}

          <div className="flex gap-1 flex-wrap">
            {LANGUAGES.filter(l => l.code !== 'en').map(lang => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  activeLang === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <Globe className="w-3 h-3" />
                {lang.name}
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">名称（{activeLang}）</label>
              <input
                type="text"
                value={translations[activeLang]?.name || ''}
                onChange={e => updateTranslation(activeLang, 'name', e.target.value)}
                placeholder="翻译后的大厅名称"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">副标题（{activeLang}）</label>
              <input
                type="text"
                value={translations[activeLang]?.subtitle || ''}
                onChange={e => updateTranslation(activeLang, 'subtitle', e.target.value)}
                placeholder="翻译后的副标题"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">描述（{activeLang}）</label>
              <textarea
                value={translations[activeLang]?.description || ''}
                onChange={e => updateTranslation(activeLang, 'description', e.target.value)}
                placeholder="翻译后的描述"
                rows={4}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSaveTranslations}
              disabled={!isEdit}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors"
            >
              保存翻译
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
