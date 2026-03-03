import { useEffect, useState } from 'react'
import { configApi, uploadApi } from '@/lib/api'
import { toast } from 'sonner'
import { Loader2, Upload, Save } from 'lucide-react'

interface Config {
  hero_title: string
  hero_subtitle: string
  hero_description: string
  hero_bg_url: string
  logo_url: string
  stat_projects: string
  stat_experience: string
  stat_partners: string
  stat_satisfaction: string
  contact_telegram: string
  contact_email: string
  contact_whatsapp: string
  contact_wechat: string
  site_title: string
  site_description: string
}

const defaultConfig: Config = {
  hero_title: '', hero_subtitle: '', hero_description: '',
  hero_bg_url: '', logo_url: '',
  stat_projects: '200+', stat_experience: '12+',
  stat_partners: '300+', stat_satisfaction: '99%',
  contact_telegram: '', contact_email: '',
  contact_whatsapp: '', contact_wechat: '',
  site_title: 'NovaPlay', site_description: '',
}

export default function ConfigPage() {
  const [config, setConfig] = useState<Config>(defaultConfig)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'hero' | 'stats' | 'contact' | 'seo'>('hero')

  useEffect(() => {
    configApi.getAll()
      .then(res => {
        if (res.data.code === 200 && res.data.data) {
          setConfig({ ...defaultConfig, ...res.data.data })
        }
      })
      .finally(() => setLoading(false))
  }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: keyof Config) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(field)
    try {
      const res = await uploadApi.image(file, 'config')
      if (res.data.code === 200) {
        setConfig(c => ({ ...c, [field]: res.data.data.url }))
        toast.success('上传成功')
      } else {
        toast.error(res.data.msg || '上传失败')
      }
    } catch {
      toast.error('上传失败')
    } finally {
      setUploading(null)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await configApi.update(config)
      if (res.data.code === 200) {
        toast.success('配置保存成功')
      } else {
        toast.error(res.data.msg || '保存失败')
      }
    } catch {
      toast.error('保存失败')
    } finally {
      setSaving(false)
    }
  }

  const Field = ({ label, field, placeholder, type = 'text' }: {
    label: string, field: keyof Config, placeholder?: string, type?: string
  }) => (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        value={config[field]}
        onChange={e => setConfig(c => ({ ...c, [field]: e.target.value }))}
        placeholder={placeholder}
        className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
      />
    </div>
  )

  const ImageField = ({ label, field }: { label: string, field: keyof Config }) => (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <div className="flex gap-3 items-start">
        {config[field] && (
          <img src={config[field] as string} alt={label}
            className="w-20 h-14 rounded-lg object-cover border border-border shrink-0" />
        )}
        <div className="flex-1 space-y-2">
          <input
            type="text"
            value={config[field] as string}
            onChange={e => setConfig(c => ({ ...c, [field]: e.target.value }))}
            placeholder="图片 URL"
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background"
          />
          <label className="inline-flex items-center gap-2 text-sm text-primary cursor-pointer hover:underline">
            <Upload className="w-4 h-4" />
            {uploading === field ? '上传中...' : '上传图片'}
            <input type="file" accept="image/*" className="hidden"
              onChange={e => handleUpload(e, field)} disabled={uploading === field} />
          </label>
        </div>
      </div>
    </div>
  )

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>
  }

  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex gap-1 border-b border-border">
        {[
          { key: 'hero', label: 'Hero 区域' },
          { key: 'stats', label: '统计数字' },
          { key: 'contact', label: '联系方式' },
          { key: 'seo', label: 'SEO 设置' },
        ].map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab.key ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border p-6 space-y-5">
        {activeTab === 'hero' && (
          <>
            <Field label="主标题（英文）" field="hero_title" placeholder="Craft the Ultimate Gaming Experience" />
            <Field label="副标题（标语）" field="hero_subtitle" placeholder="PREMIUM GAMING PLATFORM DEVELOPER" />
            <div>
              <label className="block text-sm font-medium mb-1.5">描述文案</label>
              <textarea value={config.hero_description}
                onChange={e => setConfig(c => ({ ...c, hero_description: e.target.value }))}
                placeholder="Specializing in high-quality game lobby platform development..."
                rows={3} className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background resize-none" />
            </div>
            <ImageField label="Hero 背景图" field="hero_bg_url" />
            <ImageField label="Logo 图片" field="logo_url" />
          </>
        )}

        {activeTab === 'stats' && (
          <>
            <p className="text-sm text-muted-foreground">这些数字显示在 Hero 区域底部。</p>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Premium Projects" field="stat_projects" placeholder="200+" />
              <Field label="Years Experience" field="stat_experience" placeholder="12+" />
              <Field label="Global Partners" field="stat_partners" placeholder="300+" />
              <Field label="Client Satisfaction" field="stat_satisfaction" placeholder="99%" />
            </div>
          </>
        )}

        {activeTab === 'contact' && (
          <>
            <Field label="Telegram" field="contact_telegram" placeholder="@novaplay" />
            <Field label="Email" field="contact_email" placeholder="contact@novaplaygaming.com" type="email" />
            <Field label="WhatsApp" field="contact_whatsapp" placeholder="+1234567890" />
            <Field label="WeChat" field="contact_wechat" placeholder="微信号" />
          </>
        )}

        {activeTab === 'seo' && (
          <>
            <Field label="网站标题" field="site_title" placeholder="NovaPlay - Premium Gaming Platform Developer" />
            <div>
              <label className="block text-sm font-medium mb-1.5">网站描述</label>
              <textarea value={config.site_description}
                onChange={e => setConfig(c => ({ ...c, site_description: e.target.value }))}
                placeholder="SEO 描述文案" rows={3}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring bg-background resize-none" />
            </div>
          </>
        )}

        <div className="flex justify-end pt-2">
          <button onClick={handleSave} disabled={saving}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? '保存中...' : '保存配置'}
          </button>
        </div>
      </div>
    </div>
  )
}
