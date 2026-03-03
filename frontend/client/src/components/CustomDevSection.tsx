import React, { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Palette,
  CodeXml,
  Smartphone,
  Server,
  Lock,
  ChartColumn,
} from "lucide-react";
import { SECTION_DIVIDER_URL, techStack } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function CustomDevSection() {
  const { t: l } = useLanguage(),
    { ref: r, visible: u } = useIntersectionObserver(),
    { ref: m, visible: f } = useIntersectionObserver(),
    { ref: h, visible: _ } = useIntersectionObserver();
  const { services } = useSiteData();
  const y = [
      {
        icon: Palette,
        title: l.custom_s3_title,
        desc: l.custom_s3_desc,
      },
      {
        icon: CodeXml,
        title: l.custom_s2_title,
        desc: l.custom_s2_desc,
      },
      {
        icon: Smartphone,
        title: l.custom_s1_title,
        desc: l.custom_s1_desc,
      },
      {
        icon: Server,
        title: l.custom_s5_title,
        desc: l.custom_s5_desc,
      },
      {
        icon: ChartColumn,
        title: l.custom_s4_title,
        desc: l.custom_s4_desc,
      },
      {
        icon: Lock,
        title: l.custom_s6_title,
        desc: l.custom_s6_desc,
      },
    ];
  return (
    <section id="custom" className="py-12 md:py-16 relative overflow-hidden">
      {
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${SECTION_DIVIDER_URL})`,
          }}
        />
      }
      {
        <div
          className="absolute inset-0"
          style={{
            background: "oklch(0.07 0.005 60 / 0.92)",
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
                  {l.custom_label}
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
                  {l.custom_title}
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
                  {l.custom_desc}
                </p>
              }
            </div>
          }
          {
            <div
              ref={m}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
            >
              {y.map((w, x) => {
                const S = w.icon;
                return (
                  <div
                    className={`fade-in-up stagger-${x + 1} ${f ? "visible" : ""} group`}
                  >
                    {
                      <div
                        className="h-full rounded-xl p-6 border border-[#C9A227]/15 hover:border-[#C9A227]/40 transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_10px_40px_oklch(0.72_0.14_82/0.1)]"
                        style={{
                          background: "oklch(0.11 0.008 60)",
                        }}
                      >
                        {
                          <div className="flex items-start gap-4">
                            {
                              <div className="w-12 h-12 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                                {<S size={22} className="text-[#F5D76E]" />}
                              </div>
                            }
                            {
                              <div>
                                {
                                  <h3
                                    className="text-white font-bold text-lg mb-2"
                                    style={{
                                      fontFamily:
                                        "'Barlow Condensed', sans-serif",
                                      fontStyle: "italic",
                                      fontWeight: 800,
                                      fontSize: "1rem",
                                    }}
                                  >
                                    {w.title}
                                  </h3>
                                }
                                {
                                  <p
                                    className="text-foreground/55 text-sm leading-relaxed"
                                    style={{
                                      fontFamily: "'Rajdhani', sans-serif",
                                      fontSize: "0.95rem",
                                    }}
                                  >
                                    {w.desc}
                                  </p>
                                }
                              </div>
                            }
                          </div>
                        }
                      </div>
                    }
                  </div>
                );
              })}
            </div>
          }
          {
            <div ref={h}>
              {
                <div className={`fade-in-up ${_ ? "visible" : ""}`}>
                  {
                    <div
                      className="rounded-2xl p-8 md:p-10 border border-[#C9A227]/20"
                      style={{
                        background: "oklch(0.11 0.008 60)",
                      }}
                    >
                      {
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                          {
                            <div className="flex-1">
                              {
                                <h3
                                  className="text-white font-bold text-2xl mb-2"
                                  style={{
                                    fontFamily:
                                      "'Barlow Condensed', sans-serif",
                                    fontStyle: "italic",
                                    fontWeight: 800,
                                  }}
                                >
                                  {l.custom_tech_title}
                                </h3>
                              }
                              {
                                <p
                                  className="text-foreground/55 text-sm"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: "0.95rem",
                                  }}
                                >
                                  {l.custom_timeline_desc}
                                </p>
                              }
                            </div>
                          }
                          {
                            <button
                              onClick={() => {
                                const w = document.querySelector("#contact");
                                w &&
                                  w.scrollIntoView({
                                    behavior: "smooth",
                                  });
                              }}
                              className="btn-gold flex-shrink-0"
                            >
                              {l.custom_cta}
                            </button>
                          }
                        </div>
                      }
                      {
                        <div className="flex flex-wrap gap-3">
                          {(services.length > 0 ? services.map((s: any) => s.title) : techStack).map((w: any) => (
                            <span
                              className="px-4 py-2 rounded-lg border border-[#C9A227]/25 text-[#F5D76E] text-sm font-medium bg-[#C9A227]/5 hover:bg-[#C9A227]/15 hover:border-[#C9A227]/50 transition-all duration-200"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {w}
                            </span>
                          ))}
                        </div>
                      }
                      {
                        <div className="mt-8 pt-8 border-t border-[#C9A227]/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
                          {[
                            {
                              label: l.custom_timeline_title,
                              value: "4 – 8 Weeks",
                            },
                            {
                              label:
                                l.custom_timeline_desc.slice(0, 20) + "...",
                              value: "8 – 16 Weeks",
                            },
                            {
                              label: l.contact_support,
                              value: "12 Months",
                            },
                          ].map((w, x) => (
                            <div className="text-center">
                              {
                                <div
                                  className="text-2xl font-bold text-gold-gradient mb-1"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {w.value}
                                </div>
                              }
                              {
                                <div
                                  className="text-foreground/50 text-sm"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {w.label}
                                </div>
                              }
                            </div>
                          ))}
                        </div>
                      }
                    </div>
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
