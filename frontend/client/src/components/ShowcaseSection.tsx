import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "wouter";
import { useSiteData } from "@/contexts/SiteDataContext";
import { ExternalLink, ArrowRight } from "lucide-react";

function RelatedGameCard({ game: l, index: r }) {
  const u = useRef(null),
    [m, f] = useState(!1),
    [, h] = useLocation();
  useEffect(() => {
    const y = new IntersectionObserver(
      ([w]) => {
        w.isIntersecting && (f(!0), y.disconnect());
      },
      {
        threshold: 0.1,
      }
    );
    return (u.current && y.observe(u.current), () => y.disconnect());
  }, []);
  const _ = () => {
    h(`/halls/${l.slug}`);
  };
  return (
    <div
      ref={u}
      className={`fade-in-up stagger-${Math.min(r + 1, 8)} ${m ? "visible" : ""}`}
    >
      {
        <div
          className="game-card group"
          onClick={_}
          role="button"
          tabIndex={0}
          onKeyDown={y => y.key === "Enter" && _()}
          aria-label={`View ${l.name}`}
        >
          {
            <div
              className="relative w-full"
              style={{
                paddingBottom: "56.25%",
              }}
            >
              {
                <img
                  src={l.image}
                  alt={l.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              }
              {l.comingSoon && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                  {
                    <span
                      className="text-[#F5D76E] text-xl font-bold tracking-widest uppercase"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                      }}
                    >
                      Coming Soon
                    </span>
                  }
                </div>
              )}
              {
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-20 flex flex-col justify-end p-4">
                  {
                    <div className="flex items-center justify-between">
                      {
                        <div>
                          {
                            <h3
                              className="text-white font-bold text-base md:text-lg leading-tight mb-1"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontStyle: "italic",
                                fontWeight: 800,
                              }}
                            >
                              {l.name}
                            </h3>
                          }
                          {
                            <p
                              className="text-foreground/70 text-xs md:text-sm"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {l.tagline}
                            </p>
                          }
                        </div>
                      }
                      {
                        <div className="ml-3 flex-shrink-0">
                          {
                            <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/60 flex items-center justify-center group-hover:bg-[#C9A227]/40 transition-colors duration-300">
                              {
                                <ExternalLink
                                  size={16}
                                  className="text-[#F5D76E]"
                                />
                              }
                            </div>
                          }
                        </div>
                      }
                    </div>
                  }
                  {
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {l.tags.map(y => (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full bg-[#C9A227]/20 text-[#F5D76E] border border-[#C9A227]/30"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                          }}
                        >
                          {y}
                        </span>
                      ))}
                    </div>
                  }
                </div>
              }
              {
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-350 flex items-end p-3">
                  {
                    <span
                      className="text-white/90 text-sm font-semibold"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                      }}
                    >
                      {l.name}
                    </span>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  );
}
export default function ShowcaseSection() {
  const { t: l } = useLanguage(),
    [, r] = useLocation(),
    u = useRef(null),
    [m, f] = useState(!1);
  const { halls } = useSiteData();
  const featuredHalls = halls.slice(0, 8);
  return (
    useEffect(() => {
      const h = new IntersectionObserver(
        ([_]) => {
          _.isIntersecting && (f(!0), h.disconnect());
        },
        {
          threshold: 0.2,
        }
      );
      return (u.current && h.observe(u.current), () => h.disconnect());
    }, []),
    (
      <section id="showcase" className="py-12 md:py-16 relative">
        {
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.72 0.14 82 / 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, oklch(0.72 0.14 82 / 0.05) 0%, transparent 50%)`,
            }}
          />
        }
        {
          <div className="container mx-auto px-4 relative z-10">
            {
              <div
                ref={u}
                className={`text-center mb-8 fade-in-up ${m ? "visible" : ""}`}
              >
                {
                  <p
                    className="text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    {l.showcase_label}
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
                    {l.showcase_title}
                  </h2>
                }
                {<div className="gold-divider max-w-xs mx-auto mb-6" />}
                {
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {
                      <p
                        className="text-foreground/60 text-base md:text-lg max-w-2xl leading-relaxed"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                        }}
                      >
                        {l.showcase_desc}
                      </p>
                    }
                    {
                      <button
                        onClick={() => r("/halls")}
                        className="flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#C9A227]/50 text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227] transition-all duration-200 text-sm font-semibold"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {l.showcase_view_all}
                        {<ArrowRight size={14} />}
                      </button>
                    }
                  </div>
                }
              </div>
            }
            {
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {featuredHalls.map((h: any, _: number) => (
                  <RelatedGameCard game={h} index={_} />
                ))}
              </div>
            }
            {
              <div
                className={`text-center mt-10 fade-in-up ${m ? "visible stagger-8" : ""}`}
              >
                {
                  <p
                    className="text-foreground/50 text-sm mb-4"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    {l.showcase_note}
                  </p>
                }
                {
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {
                      <button
                        onClick={() => {
                          const h = document.querySelector("#contact");
                          h &&
                            h.scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                        className="btn-gold"
                      >
                        {l.showcase_request}
                      </button>
                    }
                    {
                      <button
                        onClick={() => r("/halls")}
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A227]/40 text-[#C9A227]/80 hover:text-[#F5D76E] hover:border-[#C9A227]/70 transition-all duration-200 text-sm font-semibold"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {<ArrowRight size={14} />}
                        {l.showcase_browse}
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
