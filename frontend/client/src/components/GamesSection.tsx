import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "wouter";
import { gameCategoryStyles } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import { ArrowRight } from "lucide-react";

function GameCard({ game: l, index: r, parentVisible: u, onNavigate: m }) {
  return (
    <div
      className={`fade-in-up ${u ? "visible" : ""}`}
      style={{
        transitionDelay: `${(r % 8) * 0.07}s`,
      }}
      onClick={() => m(l.slug)}
    >
      {
        <div
          className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#C9A227]/12 hover:border-[#C9A227]/50 transition-all duration-350 hover:-translate-y-2 hover:shadow-[0_12px_40px_oklch(0.72_0.14_82/0.2)] cursor-pointer"
          style={{
            background: "oklch(0.11 0.008 60)",
          }}
        >
          {
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, oklch(0.72 0.14 82 / 0.08) 0%, transparent 70%)",
              }}
            />
          }
          {
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/20">
              {
                <img
                  src={l.iconUrl}
                  alt={l.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                  loading="lazy"
                />
              }
              {
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                  style={{
                    boxShadow: "inset 0 0 20px oklch(0.72 0.14 82 / 0.15)",
                  }}
                />
              }
            </div>
          }
          {
            <p
              className="text-white/85 text-xs font-semibold text-center leading-tight group-hover:text-[#F5D76E] transition-colors duration-300 w-full truncate"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              {l.name}
            </p>
          }
          {
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold tracking-wider ${gameCategoryStyles[l.category] ?? gameCategoryStyles.Slot}`}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {l.category === "CardGames" ? "Card Games" : l.category}
            </span>
          }
        </div>
      }
    </div>
  );
}
export default function GamesSection() {
  const { t: l } = useLanguage(),
    [, r] = useLocation(),
    u = useRef(null),
    m = useRef(null),
    [f, h] = useState(!1),
    [_, y] = useState(!1);
  const { games } = useSiteData();
  return (
    useEffect(() => {
      const w = new IntersectionObserver(
          ([S]) => {
            S.isIntersecting && (h(!0), w.disconnect());
          },
          {
            threshold: 0.2,
          }
        ),
        x = new IntersectionObserver(
          ([S]) => {
            S.isIntersecting && (y(!0), x.disconnect());
          },
          {
            threshold: 0.05,
          }
        );
      return (
        u.current && w.observe(u.current),
        m.current && x.observe(m.current),
        () => {
          (w.disconnect(), x.disconnect());
        }
      );
    }, []),
    (
      <section id="games" className="py-10 md:py-14 relative overflow-hidden">
        {
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.07 0.005 60) 0%, oklch(0.09 0.007 60) 50%, oklch(0.07 0.005 60) 100%)",
            }}
          />
        }
        {
          <div
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.04] blur-3xl"
            style={{
              background: "#C9A227",
            }}
          />
        }
        {
          <div
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.04] blur-3xl"
            style={{
              background: "#C9A227",
            }}
          />
        }
        {
          <div className="container mx-auto px-4 relative z-10">
            {
              <div
                ref={u}
                className={`text-center mb-14 fade-in-up ${f ? "visible" : ""}`}
              >
                {
                  <p
                    className="text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    {l.games_label}
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
                    {l.games_title}
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
                    {l.games_desc}
                  </p>
                }
              </div>
            }
            {
              <div
                ref={m}
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5"
              >
                {games.map((w: any, x: number) => (
                  <GameCard
                    game={w}
                    index={x}
                    parentVisible={_}
                    onNavigate={S => r(`/games/${S}`)}
                  />
                ))}
              </div>
            }
            {
              <div
                className={`text-center mt-12 fade-in-up ${_ ? "visible stagger-8" : ""}`}
              >
                {
                  <p
                    className="text-foreground/40 text-sm mb-5"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    {l.games_note}
                  </p>
                }
                {
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {
                      <button
                        onClick={() => r("/games")}
                        className="btn-gold flex items-center gap-2"
                      >
                        {l.games_view_all}
                        {
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            {<path d="M5 12h14M14 5l7 7-7 7" />}
                          </svg>
                        }
                      </button>
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
                        className="px-6 py-3 rounded-xl border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-200 font-bold text-sm"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {l.games_contact}
                      </button>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }
      </section>
    )
  );
}
