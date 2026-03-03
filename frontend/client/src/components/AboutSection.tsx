import React, { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LOGO_URL } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Shield, Zap, Globe, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const { t: l } = useLanguage(),
    { ref: r, visible: u } = useIntersectionObserver(),
    { ref: m, visible: f } = useIntersectionObserver();
  const { config } = useSiteData();
  const logoUrl = config?.logo_url || LOGO_URL;
  const h = [
      {
        icon: Shield,
        title: l.about_feat1_title,
        desc: l.about_feat1_desc,
      },
      {
        icon: Zap,
        title: l.about_feat2_title,
        desc: l.about_feat2_desc,
      },
      {
        icon: Globe,
        title: l.about_feat3_title,
        desc: l.about_feat3_desc,
      },
      {
        icon: Award,
        title: l.about_feat4_title,
        desc: l.about_feat4_desc,
      },
    ];
  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden">
      {
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.07 0.005 60) 0%, oklch(0.10 0.008 60) 50%, oklch(0.07 0.005 60) 100%)",
          }}
        />
      }
      {
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #C9A227 0%, transparent 70%)",
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
                  {l.about_label}
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
                  {l.about_title}
                </h2>
              }
              {<div className="gold-divider max-w-xs mx-auto" />}
            </div>
          }
          {
            <div
              ref={m}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10 fade-in-up ${f ? "visible" : ""}`}
            >
              {
                <div className="relative flex justify-center lg:justify-start">
                  {
                    <div className="relative">
                      {
                        <div
                          className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
                          style={{
                            background:
                              "radial-gradient(circle, #C9A227 0%, transparent 70%)",
                            transform: "scale(1.2)",
                          }}
                        />
                      }
                      {
                        <div
                          className="relative rounded-2xl p-8 md:p-12 flex items-center justify-center gold-border-glow"
                          style={{
                            background: "oklch(0.11 0.008 60)",
                          }}
                        >
                          {
                            <img
                              src={logoUrl}
                              alt="NovaPlay"
                              className="w-48 md:w-64 h-auto object-contain"
                            />
                          }
                        </div>
                      }
                      {
                        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A227]/60" />
                      }
                      {
                        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9A227]/60" />
                      }
                    </div>
                  }
                </div>
              }
              {
                <div>
                  {
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                      }}
                    >
                      {l.about_story_title}
                      {<br />}
                      {
                        <span className="text-gold-gradient">
                          {l.about_desc}
                        </span>
                      }
                    </h3>
                  }
                  {
                    <div
                      className="space-y-4 text-foreground/65 leading-relaxed text-base"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: "1.05rem",
                      }}
                    >
                      {<p>{l.about_story_p1}</p>}
                      {<p>{l.about_story_p2}</p>}
                    </div>
                  }
                </div>
              }
            </div>
          }
          {
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {h.map((_, y) => {
                const Icon = _.icon;
                return (
                  <div
                    className={`fade-in-up stagger-${y + 1} ${f ? "visible" : ""} group`}
                  >
                    {
                      <div
                        className="h-full rounded-xl p-6 border border-[#C9A227]/15 hover:border-[#C9A227]/40 transition-all duration-350 hover:bg-[#C9A227]/5"
                        style={{
                          background: "oklch(0.11 0.008 60)",
                        }}
                      >
                        {
                          <div className="w-12 h-12 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center mb-4 group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                            {<Icon size={22} className="text-[#F5D76E]" />}
                          </div>
                        }
                        {
                          <h4
                            className="text-white font-bold text-lg mb-2"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontStyle: "italic",
                              fontWeight: 800,
                            }}
                          >
                            {_.title}
                          </h4>
                        }
                        {
                          <p
                            className="text-foreground/55 text-sm leading-relaxed"
                            style={{
                              fontFamily: "'Rajdhani', sans-serif",
                              fontSize: "0.95rem",
                            }}
                          >
                            {_.desc}
                          </p>
                        }
                      </div>
                    }
                  </div>
                );
              })}
            </div>
          }
        </div>
      }
    </section>
  );
}
