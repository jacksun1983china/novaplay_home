import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Search,
} from "lucide-react";

interface FaqItem {
  question_en: string;
  question_zh: string;
  answer_en: string;
  answer_zh: string;
  category: string;
}

const faqData: FaqItem[] = [
  {
    category: "general",
    question_en: "What is NovaPlay?",
    question_zh: "NovaPlay 是什么？",
    answer_en: "NovaPlay is a premium gaming platform developer specializing in turnkey casino solutions, game lobby development, and custom game integration. We provide end-to-end services from platform setup to ongoing technical support.",
    answer_zh: "NovaPlay 是一家专业的游戏平台开发商，专注于包网解决方案、游戏大厅开发和定制游戏集成。我们提供从平台搭建到持续技术支持的端到端服务。",
  },
  {
    category: "general",
    question_en: "Which regions do you serve?",
    question_zh: "你们服务哪些地区？",
    answer_en: "We serve clients globally with a strong focus on Southeast Asia, Latin America, South Asia, and emerging markets. Our platform supports 15+ languages to reach players worldwide.",
    answer_zh: "我们服务全球客户，重点覆盖东南亚、拉丁美洲、南亚和新兴市场。我们的平台支持15+种语言，触达全球玩家。",
  },
  {
    category: "general",
    question_en: "How long has NovaPlay been in the industry?",
    question_zh: "NovaPlay 在行业中有多久的经验？",
    answer_en: "Our team has over 8 years of experience in the iGaming industry, having successfully delivered 50+ platform projects and integrated 200+ game titles from major providers.",
    answer_zh: "我们的团队在iGaming行业拥有超过8年的经验，已成功交付50+个平台项目，集成了来自主流供应商的200+款游戏。",
  },
  {
    category: "platform",
    question_en: "What is the Turnkey Platform?",
    question_zh: "什么是包网平台？",
    answer_en: "Our Turnkey Platform is a ready-to-launch casino solution that includes a fully functional gaming lobby, payment integration, player management, and analytics dashboard. You can go live in as little as one day.",
    answer_zh: "我们的包网平台是一个即开即用的在线娱乐解决方案，包含完整功能的游戏大厅、支付集成、玩家管理和数据分析仪表盘。最快一天即可上线。",
  },
  {
    category: "platform",
    question_en: "What is the difference between Shared and VIP Dedicated Edition?",
    question_zh: "共享版和VIP独立版有什么区别？",
    answer_en: "The Shared Edition runs on shared infrastructure with configuration-level customization (theme, logo, language), ideal for quick launches. The VIP Dedicated Edition provides a dedicated server, code-level deep customization, and priority support — perfect for operators who need full control.",
    answer_zh: "共享版运行在共享基础设施上，支持配置级定制（主题、Logo、语言），适合快速上线。VIP独立版提供独立服务器、代码级深度定制和优先支持，适合需要完全掌控的运营商。",
  },
  {
    category: "platform",
    question_en: "How many games are available on the platform?",
    question_zh: "平台上有多少款游戏？",
    answer_en: "We offer 200+ premium game titles across categories including Slots, Fish Games, Live Casino, and Card Games. All games are from top-tier providers and are regularly updated.",
    answer_zh: "我们提供200+款优质游戏，涵盖老虎机、捕鱼游戏、真人娱乐和棋牌游戏等类别。所有游戏均来自顶级供应商，并定期更新。",
  },
  {
    category: "platform",
    question_en: "Can I add my own games to the platform?",
    question_zh: "我可以在平台上添加自己的游戏吗？",
    answer_en: "Yes! We support custom game integration through our flexible API. Whether you have your own games or want to integrate third-party providers, our team can help you set it up.",
    answer_zh: "可以！我们通过灵活的API支持自定义游戏集成。无论您有自己的游戏还是想集成第三方供应商，我们的团队都可以帮您完成。",
  },
  {
    category: "payment",
    question_en: "What payment methods are supported?",
    question_zh: "支持哪些支付方式？",
    answer_en: "We support a wide range of payment methods including bank transfers, e-wallets (GCash, GrabPay, TrueMoney, etc.), cryptocurrency (USDT, BTC, ETH), and local payment channels across Southeast Asia and LATAM.",
    answer_zh: "我们支持多种支付方式，包括银行转账、电子钱包（GCash、GrabPay、TrueMoney等）、加密货币（USDT、BTC、ETH）以及东南亚和拉美地区的本地支付通道。",
  },
  {
    category: "payment",
    question_en: "How is the GGR revenue share calculated?",
    question_zh: "GGR分成是如何计算的？",
    answer_en: "GGR (Gross Gaming Revenue) is calculated as total bets minus total payouts. The revenue share percentage depends on your plan — Shared Edition is 25%-40% and VIP Dedicated Edition is 15%-25%. Detailed reports are provided monthly.",
    answer_zh: "GGR（毛游戏收入）= 总投注额 - 总派彩额。分成比例取决于您的方案 — 共享版为25%-40%，VIP独立版为15%-25%。每月提供详细报表。",
  },
  {
    category: "payment",
    question_en: "When and how do I receive my revenue?",
    question_zh: "我什么时候以及如何收到收入？",
    answer_en: "Revenue settlements are processed monthly. You can receive payments via bank transfer, cryptocurrency, or other agreed-upon methods. Detailed revenue reports are available in your admin dashboard.",
    answer_zh: "收入结算按月进行。您可以通过银行转账、加密货币或其他约定方式收款。详细的收入报表可在管理后台查看。",
  },
  {
    category: "technical",
    question_en: "What technology stack does the platform use?",
    question_zh: "平台使用什么技术栈？",
    answer_en: "Our platform is built with modern technologies: React + TypeScript frontend, PHP (ThinkPHP) backend, MySQL database, Nginx web server, with Redis caching and WebSocket for real-time features.",
    answer_zh: "我们的平台采用现代技术栈：React + TypeScript 前端、PHP (ThinkPHP) 后端、MySQL 数据库、Nginx 服务器，配合 Redis 缓存和 WebSocket 实现实时功能。",
  },
  {
    category: "technical",
    question_en: "Is the platform mobile-friendly?",
    question_zh: "平台是否支持移动端？",
    answer_en: "Absolutely. Our platform is fully responsive and optimized for all devices — desktop, tablet, and mobile. We also support PWA (Progressive Web App) for an app-like experience without app store downloads.",
    answer_zh: "当然。我们的平台完全响应式设计，针对所有设备优化 — 桌面、平板和手机。我们还支持PWA（渐进式Web应用），无需应用商店下载即可获得类App体验。",
  },
  {
    category: "technical",
    question_en: "How do you handle security and DDoS protection?",
    question_zh: "你们如何处理安全和DDoS防护？",
    answer_en: "We implement enterprise-grade security including SSL/TLS encryption, Cloudflare DDoS protection, WAF (Web Application Firewall), regular security audits, and real-time monitoring with automated alerts.",
    answer_zh: "我们实施企业级安全措施，包括SSL/TLS加密、Cloudflare DDoS防护、WAF（Web应用防火墙）、定期安全审计以及带自动告警的实时监控。",
  },
  {
    category: "partnership",
    question_en: "What partnership models do you offer?",
    question_zh: "你们提供哪些合作模式？",
    answer_en: "We offer three main partnership models: 1) White Label — full turnkey solution under your brand; 2) Revenue Share — profit-sharing model with lower upfront costs; 3) Custom Development — bespoke platform built to your exact specifications.",
    answer_zh: "我们提供三种主要合作模式：1) 白标方案 — 以您的品牌运营的完整包网解决方案；2) 收入分成 — 较低前期成本的利润分享模式；3) 定制开发 — 按您的精确需求定制平台。",
  },
  {
    category: "partnership",
    question_en: "How do I get started?",
    question_zh: "如何开始合作？",
    answer_en: "Simply contact us via Telegram (@youmegames) or email (novaplaygaming888@gmail.com). Our team will schedule a consultation to understand your needs, recommend the best plan, and guide you through the entire setup process.",
    answer_zh: "只需通过 Telegram（@youmegames）或邮件（novaplaygaming888@gmail.com）联系我们。我们的团队将安排咨询，了解您的需求，推荐最佳方案，并指导您完成整个搭建流程。",
  },
  {
    category: "partnership",
    question_en: "Do you provide ongoing support after launch?",
    question_zh: "上线后你们提供持续支持吗？",
    answer_en: "Yes, all plans include ongoing technical support. Shared Edition includes ticket-based support with 48h response time. VIP Dedicated Edition includes a dedicated account manager with 24h response time via Telegram.",
    answer_zh: "是的，所有方案都包含持续技术支持。共享版包含工单支持，48小时响应。VIP独立版包含专属客户经理，通过Telegram 24小时响应。",
  },
];

const categories = ["all", "general", "platform", "payment", "technical", "partnership"];

export default function FaqPage() {
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isZh = language === "zh";

  useEffect(() => {
    document.title = isZh ? "常见问题 | NovaPlay" : "FAQ | NovaPlay";
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [isZh]);

  const categoryLabels: Record<string, string> = {
    all: t.faq_cat_all,
    general: t.faq_cat_general,
    platform: t.faq_cat_platform,
    payment: t.faq_cat_payment,
    technical: t.faq_cat_technical,
    partnership: t.faq_cat_partnership,
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchCategory = activeCategory === "all" || faq.category === activeCategory;
    if (!searchQuery.trim()) return matchCategory;
    const q = searchQuery.toLowerCase();
    const question = isZh ? faq.question_zh : faq.question_en;
    const answer = isZh ? faq.answer_zh : faq.answer_en;
    return matchCategory && (question.toLowerCase().includes(q) || answer.toLowerCase().includes(q));
  });

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
          {t.faq_back}
        </button>
      </div>

      {/* Hero Section */}
      <div className={`relative py-14 md:py-20 text-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.14 82 / 0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.faq_label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: "italic", fontWeight: 800 }}>
            {isZh ? "常见" : "Frequently Asked"}{" "}
            <span style={{ background: "linear-gradient(135deg, #F5D76E 0%, #C9A227 50%, #F5D76E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {isZh ? "问题" : "Questions"}
            </span>
          </h1>
          <div className="mx-auto mb-6" style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #C9A227, transparent)" }} />
          <p className="text-foreground/55 text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.faq_desc}
          </p>
        </div>
      </div>

      {/* Search + Category Filter */}
      <div className={`container mx-auto px-4 mb-10 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A227]/60" />
          <input
            type="text"
            placeholder={isZh ? "搜索问题..." : "Search questions..."}
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null); }}
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm text-white/80 placeholder-white/30 border border-[#C9A227]/20 focus:border-[#C9A227]/60 focus:outline-none transition-colors duration-200"
            style={{ background: "oklch(0.11 0.008 60)", fontFamily: "'Rajdhani', sans-serif" }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${activeCategory === cat ? "text-[#0a0a0a] font-semibold" : "text-foreground/50 border border-[#C9A227]/15 hover:border-[#C9A227]/40 hover:text-[#F5D76E]"}`}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                ...(activeCategory === cat ? { background: "linear-gradient(135deg, #C9A227, #F5D76E)" } : { background: "transparent" }),
              }}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className={`container mx-auto px-4 pb-16 max-w-3xl transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-20 text-white/30" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            <HelpCircle size={48} className="mx-auto mb-4 opacity-30" />
            {t.faq_no_results}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#C9A227]/40" : "border-[#C9A227]/10 hover:border-[#C9A227]/25"}`}
                  style={{ background: "oklch(0.10 0.007 60)" }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-white text-sm font-medium pr-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem" }}>
                      {isZh ? faq.question_zh : faq.question_en}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#C9A227] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className={`transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 pb-5">
                      <div className="w-full h-px mb-4" style={{ background: "linear-gradient(90deg, #C9A227/20, transparent)" }} />
                      <p className="text-foreground/55 text-sm leading-relaxed" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {isZh ? faq.answer_zh : faq.answer_en}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className={`relative py-16 md:py-20 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.14 82 / 0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
            {t.faq_cta_title}
          </h2>
          <p className="text-foreground/50 text-base max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {t.faq_cta_desc}
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
            {t.faq_cta_btn}
            <ChevronRight size={16} className="inline ml-1" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
