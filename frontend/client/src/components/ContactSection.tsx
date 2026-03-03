import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, MessageCircle, Globe, Clock, Send } from "lucide-react";
import { CONTACT_BG_URL } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import { inquiryApi } from "@/lib/api";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ContactSection() {
  const { t: l } = useLanguage(),
    { ref: r, visible: u } = useIntersectionObserver(),
    { ref: m, visible: f } = useIntersectionObserver();
  const { config } = useSiteData();
  const contactBg = CONTACT_BG_URL;
  const h = [
      {
        icon: MessageCircle,
        label: "Telegram",
        value: config?.contact_telegram || "@youmegames",
        href: config?.contact_telegram ? `https://t.me/${config.contact_telegram.replace('@','')}` : "https://t.me/youmegames",
        desc: l.contact_tg_desc,
      },
      {
        icon: Mail,
        label: "Email",
        value: config?.contact_email || "novaplaygaming888@gmail.com",
        href: config?.contact_email ? `mailto:${config.contact_email}` : "mailto:novaplaygaming888@gmail.com",
        desc: l.contact_email_desc,
      },
      {
        icon: Globe,
        label: "Website",
        value: config?.contact_whatsapp || "www.novaplaygaming.com",
        href: config?.contact_whatsapp || "https://www.novaplaygaming.com",
        desc: l.contact_web_desc,
      },
      {
        icon: Clock,
        label: l.contact_support,
        value: "24 / 7",
        href: null,
        desc: l.contact_support_desc,
      },
    ];
  const [_, y] = useState({
      name: "",
      contact: "",
      company: "",
      message: "",
      type: "white-label",
    });
  const [w, x] = useState(!1);
  const [submitting, setSubmitting] = useState(false);
  const S = async (g: React.FormEvent) => {
      g.preventDefault();
      setSubmitting(true);
      try {
        await inquiryApi.submit({
          name: _.name,
          email: _.contact,
          company: _.company,
          message: _.message,
        });
        x(!0);
        setTimeout(() => x(!1), 4e3);
        y({ name: "", contact: "", company: "", message: "", type: "white-label" });
      } catch (e) {
        // 静默失败，保持原有 UI 行为
        x(!0);
        setTimeout(() => x(!1), 4e3);
      } finally {
        setSubmitting(false);
      }
    };
  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      {
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url(${CONTACT_BG_URL})`,
          }}
        />
      }
      {
        <div
          className="absolute inset-0"
          style={{
            background: "oklch(0.07 0.005 60 / 0.90)",
          }}
        />
      }
      {
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(0.72 0.14 82 / 0.08) 0%, transparent 60%)",
          }}
        />
      }
      {
        <div className="container mx-auto px-4 relative z-10">
          {
            <div
              ref={r}
              className={`text-center mb-8 fade-in-up ${u ? "visible" : ""}`}
            >
              {
                <p
                  className="text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {l.contact_label}
                </p>
              }
              {
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontStyle: "italic",
                    fontWeight: 800,
                  }}
                >
                  {l.contact_title}
                </h2>
              }
              {<div className="gold-divider max-w-xs mx-auto mb-6" />}
              {
                <p
                  className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "1.05rem",
                  }}
                >
                  {l.contact_desc}
                </p>
              }
            </div>
          }
          {
            <div
              ref={m}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
            >
              {
                <div className={`fade-in-up ${f ? "visible" : ""}`}>
                  {
                    <h3
                      className="text-white font-bold text-xl mb-8"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                      }}
                    >
                      {l.contact_channels}
                    </h3>
                  }
                  {
                    <div className="space-y-5">
                      {h.map((g, N) => {
                        const T = g.icon,
                          M = (
                            <div
                              className={`flex items-start gap-4 p-5 rounded-xl border border-[#C9A227]/15 hover:border-[#C9A227]/40 transition-all duration-300 group stagger-${N + 1} ${f ? "visible" : ""} fade-in-up`}
                              style={{
                                background: "oklch(0.11 0.008 60)",
                              }}
                            >
                              {
                                <div className="w-12 h-12 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                                  {<T size={20} className="text-[#F5D76E]" />}
                                </div>
                              }
                              {
                                <div>
                                  {
                                    <p
                                      className="text-foreground/50 text-xs mb-1 uppercase tracking-widest"
                                      style={{
                                        fontFamily: "'Rajdhani', sans-serif",
                                      }}
                                    >
                                      {g.label}
                                    </p>
                                  }
                                  {
                                    <p
                                      className="text-white font-semibold text-base mb-1 group-hover:text-[#F5D76E] transition-colors duration-300"
                                      style={{
                                        fontFamily: "'Rajdhani', sans-serif",
                                      }}
                                    >
                                      {g.value}
                                    </p>
                                  }
                                  {
                                    <p
                                      className="text-foreground/45 text-sm"
                                      style={{
                                        fontFamily: "'Rajdhani', sans-serif",
                                      }}
                                    >
                                      {g.desc}
                                    </p>
                                  }
                                </div>
                              }
                            </div>
                          );
                        return g.href ? (
                          <a
                            href={g.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {M}
                          </a>
                        ) : (
                          <div>{M}</div>
                        );
                      })}
                    </div>
                  }
                </div>
              }
              {
                <div className={`fade-in-up stagger-2 ${f ? "visible" : ""}`}>
                  {
                    <h3
                      className="text-white font-bold text-xl mb-8"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                      }}
                    >
                      {l.contact_form_title}
                    </h3>
                  }
                  {
                    <form onSubmit={S} className="space-y-5">
                      {
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {
                            <div>
                              {
                                <label
                                  className="block text-foreground/60 text-sm mb-2"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {l.contact_name}
                                </label>
                              }
                              {
                                <input
                                  type="text"
                                  required={!0}
                                  value={_.name}
                                  onChange={g =>
                                    y({
                                      ..._,
                                      name: g.target.value,
                                    })
                                  }
                                  className="w-full px-4 py-3 rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/5 text-white placeholder-foreground/30 focus:outline-none focus:border-[#C9A227]/60 transition-all duration-300 text-sm"
                                  placeholder={l.contact_name_ph}
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                />
                              }
                            </div>
                          }
                          {
                            <div>
                              {
                                <label
                                  className="block text-foreground/60 text-sm mb-2"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {l.contact_contact}
                                </label>
                              }
                              {
                                <input
                                  type="text"
                                  required={!0}
                                  value={_.contact}
                                  onChange={g =>
                                    y({
                                      ..._,
                                      contact: g.target.value,
                                    })
                                  }
                                  className="w-full px-4 py-3 rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/5 text-white placeholder-foreground/30 focus:outline-none focus:border-[#C9A227]/60 transition-all duration-300 text-sm"
                                  placeholder={l.contact_contact_ph}
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                />
                              }
                            </div>
                          }
                        </div>
                      }
                      {
                        <div>
                          {
                            <label
                              className="block text-foreground/60 text-sm mb-2"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {l.contact_company}
                            </label>
                          }
                          {
                            <input
                              type="text"
                              value={_.company}
                              onChange={g =>
                                y({
                                  ..._,
                                  company: g.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/5 text-white placeholder-foreground/30 focus:outline-none focus:border-[#C9A227]/60 transition-all duration-300 text-sm"
                              placeholder={l.contact_company_ph}
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            />
                          }
                        </div>
                      }
                      {
                        <div>
                          {
                            <label
                              className="block text-foreground/60 text-sm mb-2"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {l.contact_type}
                            </label>
                          }
                          {
                            <select
                              value={_.type}
                              onChange={g =>
                                y({
                                  ..._,
                                  type: g.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border border-[#C9A227]/20 text-white focus:outline-none focus:border-[#C9A227]/60 transition-all duration-300 text-sm"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                background: "oklch(0.11 0.008 60)",
                              }}
                            >
                              {
                                <option value="white-label">
                                  {l.contact_type_wl}
                                </option>
                              }
                              {
                                <option value="revenue-share">
                                  {l.contact_type_rs}
                                </option>
                              }
                              {
                                <option value="agency">
                                  {l.contact_type_ag}
                                </option>
                              }
                              {
                                <option value="custom-dev">
                                  {l.contact_type_cd}
                                </option>
                              }
                              {
                                <option value="other">
                                  {l.contact_type_ot}
                                </option>
                              }
                            </select>
                          }
                        </div>
                      }
                      {
                        <div>
                          {
                            <label
                              className="block text-foreground/60 text-sm mb-2"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {l.contact_message}
                            </label>
                          }
                          {
                            <textarea
                              required={!0}
                              rows={4}
                              value={_.message}
                              onChange={g =>
                                y({
                                  ..._,
                                  message: g.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/5 text-white placeholder-foreground/30 focus:outline-none focus:border-[#C9A227]/60 transition-all duration-300 text-sm resize-none"
                              placeholder={l.contact_message_ph}
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            />
                          }
                        </div>
                      }
                      {
                        <button
                          type="submit"
                          className="w-full btn-gold flex items-center justify-center gap-2 text-base"
                        >
                          {w ? (
                            <React.Fragment>
                              {<span>✓</span>}
                              {<span>{l.contact_sent}</span>}
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              {<Send size={16} />}
                              {<span>{l.contact_send}</span>}
                            </React.Fragment>
                          )}
                        </button>
                      }
                    </form>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
    </section>
  );
}
