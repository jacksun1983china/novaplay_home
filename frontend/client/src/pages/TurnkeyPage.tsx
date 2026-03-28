import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Rocket,
  Shield,
  Globe,
  Palette,
  Server,
  Headphones,
  Zap,
  BarChart3,
  Users,
  ArrowLeft,
  Check,
  ChevronRight,
  Star,
  Clock,
  MessageSquare,
  Settings,
} from "lucide-react";

const features = [
  { icon: Rocket, key: "rapid_deploy", color: "#F5D76E" },
  { icon: Globe, key: "multi_lang", color: "#C9A227" },
  { icon: Shield, key: "secure", color: "#F5D76E" },
  { icon: Palette, key: "custom_brand", color: "#C9A227" },
  { icon: BarChart3, key: "analytics", color: "#F5D76E" },
  { icon: Headphones, key: "support_24_7", color: "#C9A227" },
];

const featureData: Record<string, { en: string; zh: string; icon_label_en: string; icon_label_zh: string }> = {
  rapid_deploy: { en: "One-click deployment with Nginx + SSL + Database auto-configured. Go live in minutes, not weeks.", zh: "一键部署 Nginx + SSL + 数据库自动配置，分钟级上线，无需数周等待。", icon_label_en: "Rapid Deployment", icon_label_zh: "极速部署" },
  multi_lang: { en: "Built-in multi-language support covering 15+ languages. Reach players across Southeast Asia, LATAM, and beyond.", zh: "内置15+语言支持，覆盖东南亚、拉美等全球市场。", icon_label_en: "Multi-Language", icon_label_zh: "多语言支持" },
  secure: { en: "Enterprise-grade security with DDoS protection, SSL encryption, and real-time monitoring.", zh: "企业级安全防护，DDoS防护、SSL加密、实时监控。", icon_label_en: "Enterprise Security", icon_label_zh: "企业级安全" },
  custom_brand: { en: "Full brand customization — your logo, colors, themes, and domain. Make it truly yours.", zh: "完全品牌定制 — 您的Logo、配色、主题和域名，打造专属平台。", icon_label_en: "Brand Customization", icon_label_zh: "品牌定制" },
  analytics: { en: "Comprehensive GGR statistics, revenue reports, and player analytics dashboard.", zh: "全面的GGR统计、收入报表和玩家分析仪表盘。", icon_label_en: "Analytics & Reports", icon_label_zh: "数据分析" },
  support_24_7: { en: "Dedicated technical support team available around the clock via Telegram.", zh: "专属技术支持团队，7×24小时Telegram在线响应。", icon_label_en: "24/7 Support", icon_label_zh: "全天候支持" },
};

const sharedPlan = {
  name_en: "Shared Edition",
  name_zh: "共享版",
  setup_fee: "$3,000 - $8,000",
  monthly_fee: "$500 - $1,500",
  ggr_share: "25% - 40%",
  customization_en: "Configuration-level (Theme / Logo / Language)",
  customization_zh: "配置级（主题/Logo/语言）",
  server_en: "Shared",
  server_zh: "共享",
  support_en: "Ticket, 48h Response",
  support_zh: "工单，48h响应",
  highlighted: false,
};

const vipPlan = {
  name_en: "VIP Dedicated Edition",
  name_zh: "VIP 独立版",
  setup_fee: "$15,000 - $50,000",
  monthly_fee: "$2,000 - $5,000",
  ggr_share: "15% - 25%",
  customization_en: "Code-level, Deep Customization",
  customization_zh: "可改代码，深度定制",
  server_en: "Dedicated Server",
  server_zh: "独立服务器",
  support_en: "Dedicated Contact, 24h Response",
  support_zh: "专属对接，24h响应",
  highlighted: true,
};

const processSteps = [
  { icon: MessageSquare, label_en: "Consultation", label_zh: "需求沟通", desc_en: "Discuss your requirements and choose the right plan.", desc_zh: "沟通您的需求，选择合适的方案。" },
  { icon: Settings, label_en: "Configuration", label_zh: "平台配置", desc_en: "Configure your brand, domain, games, and payment channels.", desc_zh: "配置您的品牌、域名、游戏和支付通道。" },
  { icon: Server, label_en: "Deployment", label_zh: "部署上线", desc_en: "One-click deployment with full environment setup.", desc_zh: "一键部署，完整环境自动搭建。" },
  { icon: Rocket, label_en: "Go Live", label_zh: "正式运营", desc_en: "Your platform is live. Start acquiring players and generating revenue.", desc_zh: "平台正式上线，开始获客和盈利。" },
];

export default function TurnkeyPage() {
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();
  const [loaded, setLoaded] = useState(false);
  const isZh = language === "zh";

  useEffect(() => {
    document.title = isZh ? "包网平台 | NovaPlay" : "Turnkey Platform | NovaPlay";
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [isZh]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 md:pt-28">
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 text-[#C9A227]/70 hover:text-[#F5D76E] text-sm transition-colors duration-200"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          <ArrowLeft size={16} />
          {t.turnkey_back}
        </button>
      </div>

      {/* Hero Section */}
      <div className={`relative py-14 md:py-20 text-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.14 82 / 0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.turnkey_label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: "italic", fontWeight: 800 }}>
            {isZh ? "一分钟" : "Launch Your Casino"}{" "}
            <span style={{ background: "linear-gradient(135deg, #F5D76E 0%, #C9A227 50%, #F5D76E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {isZh ? "快速建站" : "in Minutes"}
            </span>
          </h1>
          <div className="mx-auto mb-6" style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #C9A227, transparent)" }} />
          <p className="text-foreground/55 text-base md:text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.turnkey_desc}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className={`container mx-auto px-4 pb-16 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="text-center mb-12">
          <p className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.turnkey_features_label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
            {t.turnkey_features_title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const data = featureData[f.key];
            return (
              <div
                key={f.key}
                className="group rounded-2xl p-6 border border-[#C9A227]/12 hover:border-[#C9A227]/40 transition-all duration-350 hover:-translate-y-1"
                style={{ background: "oklch(0.10 0.007 60)", animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${f.color}20, ${f.color}10)` }}>
                  <f.icon size={24} style={{ color: f.color }} />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {isZh ? data.icon_label_zh : data.icon_label_en}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {isZh ? data.zh : data.en}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className={`relative py-16 md:py-20 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.72 0.14 82 / 0.04) 0%, transparent 70%)" }} />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {t.turnkey_plans_label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
              {t.turnkey_plans_title}
            </h2>
            <p className="text-foreground/50 text-base max-w-2xl mx-auto" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {t.turnkey_plans_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[sharedPlan, vipPlan].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-350 hover:-translate-y-1 ${plan.highlighted ? "border-[#C9A227]/60 shadow-[0_0_40px_oklch(0.72_0.14_82/0.12)]" : "border-[#C9A227]/15"}`}
                style={{ background: "oklch(0.10 0.007 60)" }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #C9A227, #F5D76E, #C9A227)" }} />
                )}
                {plan.highlighted && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "linear-gradient(135deg, #C9A227, #F5D76E)", color: "#0a0a0a", fontFamily: "'Rajdhani', sans-serif" }}>
                      <Star size={12} /> {t.turnkey_recommended}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {isZh ? plan.name_zh : plan.name_en}
                  </h3>

                  <div className="space-y-4">
                    {/* Setup Fee */}
                    <div className="flex justify-between items-center py-3 border-b border-[#C9A227]/10">
                      <span className="text-foreground/50 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{t.turnkey_setup_fee}</span>
                      <span className="text-[#F5D76E] font-semibold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{plan.setup_fee}</span>
                    </div>
                    {/* Monthly Fee */}
                    <div className="flex justify-between items-center py-3 border-b border-[#C9A227]/10">
                      <span className="text-foreground/50 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{t.turnkey_monthly_fee}</span>
                      <span className="text-[#F5D76E] font-semibold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{plan.monthly_fee}</span>
                    </div>
                    {/* GGR Share */}
                    <div className="flex justify-between items-center py-3 border-b border-[#C9A227]/10">
                      <span className="text-foreground/50 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{t.turnkey_ggr_share}</span>
                      <span className="text-[#F5D76E] font-semibold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{plan.ggr_share}</span>
                    </div>
                    {/* Customization */}
                    <div className="flex justify-between items-center py-3 border-b border-[#C9A227]/10">
                      <span className="text-foreground/50 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{t.turnkey_customization}</span>
                      <span className="text-white/80 text-sm text-right max-w-[180px]" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{isZh ? plan.customization_zh : plan.customization_en}</span>
                    </div>
                    {/* Server */}
                    <div className="flex justify-between items-center py-3 border-b border-[#C9A227]/10">
                      <span className="text-foreground/50 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{t.turnkey_server}</span>
                      <span className="text-white/80 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{isZh ? plan.server_zh : plan.server_en}</span>
                    </div>
                    {/* Support */}
                    <div className="flex justify-between items-center py-3">
                      <span className="text-foreground/50 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{t.turnkey_support}</span>
                      <span className="text-white/80 text-sm text-right max-w-[180px]" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{isZh ? plan.support_zh : plan.support_en}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setLocation("/");
                      setTimeout(() => {
                        const el = document.querySelector("#contact");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    className={`w-full mt-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${plan.highlighted ? "btn-gold" : "border border-[#C9A227]/30 text-[#F5D76E] hover:bg-[#C9A227]/10"}`}
                    style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {plan.highlighted ? t.turnkey_get_started : t.turnkey_contact_sales}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className={`container mx-auto px-4 py-16 md:py-20 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="text-center mb-12">
          <p className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.turnkey_process_label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
            {t.turnkey_process_title}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, i) => (
            <div key={i} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#C9A227]/40" style={{ background: "oklch(0.12 0.01 60)" }}>
                  <step.icon size={20} className="text-[#F5D76E]" />
                </div>
                {i < processSteps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(180deg, #C9A227/40, transparent)" }} />
                )}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#C9A227]/50 text-xs font-mono">0{i + 1}</span>
                  <h3 className="text-white text-lg font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {isZh ? step.label_zh : step.label_en}
                  </h3>
                </div>
                <p className="text-foreground/45 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {isZh ? step.desc_zh : step.desc_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`relative py-16 md:py-20 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.14 82 / 0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
            {t.turnkey_cta_title}
          </h2>
          <p className="text-foreground/50 text-base max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.turnkey_cta_desc}
          </p>
          <button
            onClick={() => {
              setLocation("/");
              setTimeout(() => {
                const el = document.querySelector("#contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            className="btn-gold text-sm px-10 py-3"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.08em" }}
          >
            {t.turnkey_cta_btn}
            <ChevronRight size={16} className="inline ml-1" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
