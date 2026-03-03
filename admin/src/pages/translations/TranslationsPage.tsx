import { useEffect, useState } from 'react'
import { translationApi } from '@/lib/api'
import { toast } from 'sonner'
import { Loader2, Save, Search, Globe } from 'lucide-react'

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

export default function TranslationsPage() {
  const [activeLang, setActiveLang] = useState('zh')
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [keyword, setKeyword] = useState('')

  const fetchTranslations = (lang: string) => {
    setLoading(true)
    translationApi.getAll(lang)
      .then(res => {
        if (res.data.code === 200) {
          setTranslations(res.data.data || {})
        }
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchTranslations(activeLang) }, [activeLang])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await translationApi.batchSave(activeLang, translations)
      if (res.data.code === 200) {
        toast.success('翻译保存成功')
      } else {
        toast.error(res.data.msg || '保存失败')
      }
    } catch {
      toast.error('保存失败')
    } finally {
      setSaving(false)
    }
  }

  const filteredEntries = Object.entries(translations).filter(([key, value]) =>
    !keyword || key.toLowerCase().includes(keyword.toLowerCase()) || value.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {/* 语言选择 */}
      <div className="flex gap-1 flex-wrap">
        {LANGUAGES.map(lang => (
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

      {/* 工具栏 */}
      <div className="flex items-center justify-between gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索翻译键或内容..."
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <button
          onClick={handleSave}
          disabled={saving || loading}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? '保存中...' : '保存翻译'}
        </button>
      </div>

      {/* 翻译表格 */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium w-1/3">翻译键</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">翻译内容（{LANGUAGES.find(l => l.code === activeLang)?.name}）</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="px-4 py-12 text-center text-muted-foreground">
                      {keyword ? '没有匹配的翻译键' : '暂无翻译数据'}
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map(([key, value]) => (
                    <tr key={key} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                      <td className="px-4 py-2.5">
                        <code className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground font-mono">{key}</code>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={value || ''}
                          onChange={e => setTranslations(prev => ({ ...prev, [key]: e.target.value }))}
                          className="w-full border border-transparent rounded px-2 py-1 text-sm focus:outline-none focus:border-border focus:ring-1 focus:ring-ring bg-transparent hover:bg-muted/30 transition-colors"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        共 {Object.keys(translations).length} 个翻译键 · 当前语言：{LANGUAGES.find(l => l.code === activeLang)?.name}
      </p>
    </div>
  )
}
