import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "wouter";
import { gameCategoryStyles } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, LayoutGrid, ArrowLeft, ExternalLink } from "lucide-react";

function HallCard({
  hall: l,
  index: r,
  onClick: u,
  viewDetailsLabel: m,
  comingSoonLabel: f,
}) {
  const [h, _] = useState(!1);
  return (
    useEffect(() => {
      const y = setTimeout(() => _(!0), r * 60);
      return () => clearTimeout(y);
    }, [r]),
    (
      <div
        className={`transition-all duration-500 ${h ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {
          <div
            className="group cursor-pointer rounded-2xl overflow-hidden border border-[#C9A227]/12 hover:border-[#C9A227]/50 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_oklch(0.72_0.14_82/0.18)]"
            style={{
              background: "oklch(0.10 0.007 60)",
            }}
            onClick={u}
            role="button"
            tabIndex={0}
            onKeyDown={y => y.key === "Enter" && u()}
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
                        className="text-[#F5D76E] text-lg font-bold tracking-widest uppercase"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontStyle: "italic",
                          fontWeight: 800,
                        }}
                      >
                        {f}
                      </span>
                    }
                  </div>
                )}
                {
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-3">
                    {
                      <div
                        className="flex items-center gap-2 text-[#F5D76E] text-xs font-semibold"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                        }}
                      >
                        {<ExternalLink size={13} />}
                        {m}
                      </div>
                    }
                  </div>
                }
              </div>
            }
            {
              <div className="p-4">
                {
                  <h3
                    className="text-white font-bold text-base mb-1 group-hover:text-[#F5D76E] transition-colors duration-300 truncate"
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
                    className="text-white/45 text-xs mb-3 line-clamp-2 leading-relaxed"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    {l.tagline}
                  </p>
                }
                {
                  <div className="flex flex-wrap gap-1.5">
                    {l.tags.slice(0, 3).map(y => (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#C9A227]/12 text-[#F5D76E]/80 border border-[#C9A227]/20"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                        }}
                      >
                        {y}
                      </span>
                    ))}
                    {l.tags.length > 3 && (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/30 border border-white/10"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                        }}
                      >
                        +{l.tags.length - 3}
                      </span>
                    )}
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>
    )
  );
}
export default function HallsPage() {
  const [, l] = useLocation(),
    { t: r } = useLanguage(),
    [u, m] = useState(""),
    [f, h] = useState(!1);
  const { halls } = useSiteData();
  useEffect(() => {
    window.scrollTo(0, 0);
    const y = setTimeout(() => h(!0), 50);
    return () => clearTimeout(y);
  }, []);
  const _ = halls.filter(
    y =>
      u === "" ||
      y.name.toLowerCase().includes(u.toLowerCase()) ||
      y.tags.some(w => w.toLowerCase().includes(u.toLowerCase()))
  );
  return (
    <div
      className="min-h-screen"
      style={{
        background: "oklch(0.07 0.005 60)",
      }}
    >
      {
        <div
          className="sticky top-0 z-50 border-b border-[#C9A227]/15 backdrop-blur-md"
          style={{
            background: "oklch(0.07 0.005 60 / 0.9)",
          }}
        >
          {
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              {
                <button
                  onClick={() => l("/")}
                  className="flex items-center gap-2 text-[#C9A227] hover:text-[#F5D76E] transition-colors duration-200 text-sm font-semibold"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {<ArrowLeft size={16} />}
                  {r.halls_back}
                </button>
              }
              {
                <span
                  className="text-white/60 text-sm"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {r.halls_page_title}
                </span>
              }
              {<div className="w-24" />}{" "}
            </div>
          }
        </div>
      }
      {
        <div
          className={`relative py-14 md:py-20 text-center transition-all duration-700 ${f ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.14 82 / 0.07) 0%, transparent 70%)",
              }}
            />
          }
          {
            <div className="relative z-10 container mx-auto px-4">
              {
                <p
                  className="text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {r.halls_label}
                </p>
              }
              {
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontStyle: "italic",
                    fontWeight: 800,
                  }}
                >
                  {r.halls_title.split(" ").slice(0, -1).join(" ")}{" "}
                  {
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, #F5D76E 0%, #C9A227 50%, #F5D76E 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {r.halls_title.split(" ").slice(-1)[0]}
                    </span>
                  }
                </h1>
              }
              {
                <div
                  className="mx-auto mb-6"
                  style={{
                    width: "80px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, #C9A227, transparent)",
                  }}
                />
              }
              {
                <p
                  className="text-foreground/55 text-base md:text-lg max-w-2xl mx-auto"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {r.halls_desc}
                </p>
              }
            </div>
          }
        </div>
      }
      {
        <div
          className={`container mx-auto px-4 mb-10 transition-all duration-700 delay-100 ${f ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {
            <div className="relative max-w-md mx-auto mb-6">
              {
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A227]/60"
                />
              }
              {
                <input
                  type="text"
                  placeholder={r.halls_search_ph}
                  value={u}
                  onChange={y => m(y.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm text-white/80 placeholder-white/30 border border-[#C9A227]/20 focus:border-[#C9A227]/60 focus:outline-none transition-colors duration-200"
                  style={{
                    background: "oklch(0.11 0.008 60)",
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                />
              }
            </div>
          }
        </div>
      }
      {
        <div
          className={`container mx-auto px-4 pb-20 transition-all duration-700 delay-200 ${f ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {_.length === 0 ? (
            <div
              className="text-center py-20 text-white/30"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {r.halls_no_results}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {_.map((y, w) => (
                <HallCard
                  hall={y}
                  index={w}
                  onClick={() => l(`/halls/${y.slug}`)}
                  viewDetailsLabel={r.halls_view_details}
                  comingSoonLabel={r.halls_coming_soon}
                />
              ))}
            </div>
          )}
          {
            <p
              className="text-center text-white/25 text-xs mt-10"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {r.halls_showing} {_.length} {r.halls_of} {halls.length}{" "}
              {r.halls_platforms}
            </p>
          }
        </div>
      }
    </div>
  );
}
