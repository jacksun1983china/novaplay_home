import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSiteData } from "@/contexts/SiteDataContext";
import { HERO_BG_URL, LOGO_URL } from "@/lib/data";

export default function HeroSection() {
  const { t: l } = useLanguage();
  const { config } = useSiteData();
  const heroBg = config?.hero_bg_url || HERO_BG_URL;
  const logoUrl = config?.logo_url || LOGO_URL;
  const r = [
      {
        value: config?.stat_projects || "200+",
        label: l.hero_stat_projects,
      },
      {
        value: config?.stat_experience || "12+",
        label: l.hero_stat_experience,
      },
      {
        value: config?.stat_partners || "300+",
        label: l.hero_stat_partners,
      },
      {
        value: config?.stat_satisfaction || "99%",
        label: l.hero_stat_satisfaction,
      },
    ],
    u = () => {
      const f = document.querySelector("#showcase");
      f &&
        f.scrollIntoView({
          behavior: "smooth",
        });
    },
    m = () => {
      const f = document.querySelector("#contact");
      f &&
        f.scrollIntoView({
          behavior: "smooth",
        });
    };
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-10"
    >
      {
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
      }
      {
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      }
      {
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      }
      {
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({
            length: 20,
          }).map((f, h) => (
            <div
              className="absolute rounded-full bg-[#F5D76E]"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 30}%`,
                opacity: Math.random() * 0.6 + 0.2,
                animation: `float-up ${4 + Math.random() * 6}s ${Math.random() * 5}s infinite linear`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            />
          ))}
        </div>
      }
      {
        <div className="relative z-10 container mx-auto px-4 text-center">
          {
            <div className="animate-hero-text flex justify-center mb-8">
              {
                <img
                  src={logoUrl}
                  alt="NovaPlay"
                  className="h-24 md:h-36 lg:h-44 w-auto object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(201,162,39,0.5))",
                  }}
                />
              }
            </div>
          }
          {
            <p
              className="animate-hero-text-delay text-lg md:text-xl lg:text-2xl text-foreground/70 mb-4"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.3em",
              }}
            >
              {l.hero_subtitle.toUpperCase()}
            </p>
          }
          {
            <h1
              className="animate-hero-text-delay text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontStyle: "italic",
                fontWeight: 800,
              }}
            >
              {<span className="text-white">{l.hero_title1} </span>}
              {<span className="animate-shimmer">{l.hero_title2}</span>}
            </h1>
          }
          {
            <p
              className="animate-hero-text-delay-2 text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {l.hero_desc}
            </p>
          }
          {
            <div className="animate-hero-text-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {
                <button onClick={u} className="btn-gold text-base px-8 py-3">
                  {l.hero_btn_projects}
                </button>
              }
              {
                <button
                  onClick={m}
                  className="px-8 py-3 rounded-md border border-[#C9A227]/40 text-[#F5D76E] font-semibold text-base hover:bg-[#C9A227]/10 hover:border-[#C9A227]/80 transition-all duration-300"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontStyle: "italic",
                    fontWeight: 800,
                  }}
                >
                  {l.hero_btn_contact}
                </button>
              }
            </div>
          }
          {
            <div className="animate-hero-text-delay-2 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pb-8">
              {r.map(f => (
                <div className="text-center">
                  {
                    <div
                      className="text-3xl md:text-4xl font-bold text-gold-gradient mb-1"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    >
                      {f.value}
                    </div>
                  }
                  {
                    <div
                      className="text-sm text-foreground/50"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {f.label}
                    </div>
                  }
                </div>
              ))}
            </div>
          }
        </div>
      }
    </section>
  );
}
