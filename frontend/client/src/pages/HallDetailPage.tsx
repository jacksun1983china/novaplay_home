import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation, useParams } from "wouter";
import { useSiteData } from "@/contexts/SiteDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Zap,
} from "lucide-react";

function RelatedHalls({
  currentSlug: l,
  onNavigate: r,
  morePlatformsLabel: u,
  viewAllLabel: m,
}) {
  const { halls } = useSiteData();
  const f = halls.filter((h: any) => h.slug !== l).slice(0, 4);
  return (
    <div className="mt-16">
      {
        <div className="flex items-center justify-between mb-6">
          {
            <h2
              className="text-white text-xl font-bold"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontStyle: "italic",
                fontWeight: 800,
              }}
            >
              {u}
            </h2>
          }
          {
            <button
              onClick={() => {
                (window.history.pushState({}, "", "/halls"),
                  window.dispatchEvent(new PopStateEvent("popstate")));
              }}
              className="flex items-center gap-1.5 text-[#C9A227] hover:text-[#F5D76E] text-xs font-semibold transition-colors"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              {<LayoutGrid size={13} />}
              {m}
            </button>
          }
        </div>
      }
      {
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {f.map(h => (
            <div
              className="group cursor-pointer rounded-xl overflow-hidden border border-[#C9A227]/10 hover:border-[#C9A227]/40 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.10 0.007 60)",
              }}
              onClick={() => r(h.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={_ => _.key === "Enter" && r(h.slug)}
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
                      src={h.image}
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      loading="lazy"
                    />
                  }
                </div>
              }
              {
                <div className="p-3">
                  {
                    <p
                      className="text-white/80 text-xs font-semibold truncate group-hover:text-[#F5D76E] transition-colors"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                      }}
                    >
                      {h.name}
                    </p>
                  }
                </div>
              }
            </div>
          ))}
        </div>
      }
    </div>
  );
}
export default function HallDetailPage() {
  const l = useParams(),
    [, r] = useLocation(),
    { t: u, language: m } = useLanguage();
  const { halls, hallTranslations } = useSiteData();
  const findHallBySlug = (slug: string) => halls.find((h: any) => h.slug === slug) || null;
  const f = findHallBySlug(l.slug ?? "");
  const [h, _] = useState(0);
  const y = f
      ? (hallTranslations[f.slug]?.[m] ?? hallTranslations[f.slug]?.en)
      : null;
  const [w, x] = useState(!1);
  if (
    (useEffect(() => {
      window.scrollTo(0, 0);
      const M = setTimeout(() => x(!0), 50);
      return () => clearTimeout(M);
    }, [l.slug]),
    !f)
  )
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{
          background: "oklch(0.07 0.005 60)",
        }}
      >
        {
          <p
            className="text-white/50 text-lg"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            {u.hall_not_found}
          </p>
        }
        {
          <button
            onClick={() => r("/halls")}
            className="flex items-center gap-2 text-[#C9A227] hover:text-[#F5D76E] text-sm font-semibold transition-colors"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            {<ArrowLeft size={16} />} {u.hall_back_all}
          </button>
        }
      </div>
    );
  const S = f.screenshots.length > 0 ? f.screenshots : [f.image],
    g = () => _(M => (M - 1 + S.length) % S.length),
    N = () => _(M => (M + 1) % S.length),
    T = () => {
      f.url.startsWith("#")
        ? (r("/"),
          setTimeout(() => {
            const M = document.querySelector(f.url);
            M &&
              M.scrollIntoView({
                behavior: "smooth",
              });
          }, 300))
        : window.open(f.url, "_blank", "noopener,noreferrer");
    };
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
            background: "oklch(0.07 0.005 60 / 0.92)",
          }}
        >
          {
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              {
                <button
                  onClick={() => r("/halls")}
                  className="flex items-center gap-2 text-[#C9A227] hover:text-[#F5D76E] transition-colors duration-200 text-sm font-semibold"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {<ArrowLeft size={16} />}
                  {u.hall_all_halls}
                </button>
              }
              {
                <span
                  className="text-white/50 text-sm truncate max-w-[200px] md:max-w-none"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {y?.name ?? f.name}
                </span>
              }
              {!f.ctaType && (
                <button
                  onClick={T}
                  className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_oklch(0.72_0.14_82/0.5)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #F5D76E 0%, #C9A227 100%)",
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {<ExternalLink size={14} />}
                  {u.hall_enter_game}
                </button>
              )}
              {f.ctaType === "coming_soon" && (
                <span
                  className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold opacity-50 border border-white/20 text-white/50"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {u.hall_coming_soon_label}
                </span>
              )}
              {f.ctaType === "no_demo" && (
                <span
                  className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold opacity-60 border border-amber-500/30 text-amber-400/70"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {u.hall_no_demo}
                </span>
              )}
            </div>
          }
        </div>
      }
      {
        <div
          className={`transition-all duration-700 ${w ? "opacity-100" : "opacity-0"}`}
        >
          {
            <div className="container mx-auto px-4 py-10 md:py-14">
              {
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                  {
                    <div className="lg:col-span-3">
                      {
                        <div
                          className="relative w-full rounded-2xl overflow-hidden border border-[#C9A227]/20 shadow-[0_0_40px_oklch(0.72_0.14_82/0.12)]"
                          style={{
                            paddingBottom: "56.25%",
                          }}
                        >
                          {S.map((M, U) => (
                            <img
                              src={M}
                              alt={`${f.name} screenshot ${U + 1}`}
                              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${U === h ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                            />
                          ))}
                          {f.comingSoon && (
                            <div className="absolute inset-0 bg-black/65 flex items-center justify-center z-10">
                              {
                                <span
                                  className="text-[#F5D76E] text-2xl font-bold tracking-widest uppercase"
                                  style={{
                                    fontFamily:
                                      "'Barlow Condensed', sans-serif",
                                    fontStyle: "italic",
                                    fontWeight: 800,
                                  }}
                                >
                                  {u.halls_coming_soon}
                                </span>
                              }
                            </div>
                          )}
                          {S.length > 1 && (
                            <React.Fragment>
                              {
                                <button
                                  onClick={g}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#C9A227]/30 hover:border-[#C9A227]/60 transition-all duration-200"
                                >
                                  {<ChevronLeft size={18} />}
                                </button>
                              }
                              {
                                <button
                                  onClick={N}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#C9A227]/30 hover:border-[#C9A227]/60 transition-all duration-200"
                                >
                                  {<ChevronRight size={18} />}
                                </button>
                              }
                            </React.Fragment>
                          )}
                          {S.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                              {S.map((M, U) => (
                                <button
                                  onClick={() => _(U)}
                                  className={`rounded-full transition-all duration-300 ${U === h ? "w-5 h-1.5 bg-[#C9A227]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      }
                      {S.length > 1 && (
                        <div className="flex gap-3 mt-4">
                          {S.map((M, U) => (
                            <button
                              onClick={() => _(U)}
                              className={`flex-1 rounded-xl overflow-hidden border-2 transition-all duration-200 ${U === h ? "border-[#C9A227] shadow-[0_0_12px_oklch(0.72_0.14_82/0.4)]" : "border-transparent opacity-50 hover:opacity-80"}`}
                              style={{
                                paddingBottom: "calc(56.25% / 3)",
                                position: "relative",
                                minHeight: "60px",
                              }}
                            >
                              {
                                <img
                                  src={M}
                                  alt={`Thumbnail ${U + 1}`}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              }
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  }
                  {
                    <div className="lg:col-span-2 flex flex-col gap-6">
                      {
                        <div className="flex flex-wrap gap-2">
                          {f.tags.map(M => (
                            <span
                              className="text-xs px-3 py-1 rounded-full bg-[#C9A227]/12 text-[#F5D76E]/90 border border-[#C9A227]/25"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {M}
                            </span>
                          ))}
                        </div>
                      }
                      {
                        <div>
                          {
                            <h1
                              className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontStyle: "italic",
                                fontWeight: 800,
                              }}
                            >
                              {y?.name ?? f.name}
                            </h1>
                          }
                          {
                            <p
                              className="text-[#C9A227]/80 text-sm"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                letterSpacing: "0.06em",
                              }}
                            >
                              {y?.tagline ?? f.tagline}
                            </p>
                          }
                        </div>
                      }
                      {
                        <div
                          style={{
                            height: "1px",
                            background:
                              "linear-gradient(90deg, #C9A227/40, transparent)",
                            opacity: 0.4,
                          }}
                        />
                      }
                      {
                        <p
                          className="text-white/60 text-sm leading-relaxed"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: "0.95rem",
                          }}
                        >
                          {y?.description ?? f.description}
                        </p>
                      }
                      {
                        <div>
                          {
                            <h3
                              className="text-[#C9A227] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {u.hall_platform_features}
                            </h3>
                          }
                          {
                            <ul className="grid grid-cols-1 gap-2">
                              {(y?.features ?? f.features).map((M, U) => (
                                <li
                                  className="flex items-start gap-2.5 text-white/65 text-sm"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {
                                    <Zap
                                      size={13}
                                      className="text-[#C9A227] mt-0.5 flex-shrink-0"
                                    />
                                  }
                                  {M}
                                </li>
                              ))}
                            </ul>
                          }
                        </div>
                      }
                      {
                        <div className="mt-auto pt-4">
                          {!f.ctaType && (
                            <React.Fragment>
                              {
                                <button
                                  onClick={T}
                                  className="w-full py-4 rounded-2xl text-base font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 text-black hover:scale-[1.02] hover:shadow-[0_0_30px_oklch(0.72_0.14_82/0.6)] active:scale-[0.98]"
                                  style={{
                                    background:
                                      "linear-gradient(135deg, #F5D76E 0%, #C9A227 50%, #F5D76E 100%)",
                                    fontFamily:
                                      "'Barlow Condensed', sans-serif",
                                    fontStyle: "italic",
                                    fontWeight: 800,
                                    boxShadow:
                                      "0 4px 20px oklch(0.72 0.14 82 / 0.3)",
                                  }}
                                >
                                  {<ExternalLink size={18} />}
                                  {u.hall_enter_game}
                                </button>
                              }
                              {
                                <p
                                  className="text-center text-white/25 text-xs mt-3"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {u.hall_redirect_note}
                                </p>
                              }
                            </React.Fragment>
                          )}
                          {f.ctaType === "coming_soon" && (
                            <div
                              className="w-full py-4 rounded-2xl text-base font-bold tracking-widest uppercase flex items-center justify-center opacity-50 border border-white/15 text-white/40"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontStyle: "italic",
                                fontWeight: 800,
                              }}
                            >
                              {u.hall_coming_soon_label}
                            </div>
                          )}
                          {f.ctaType === "no_demo" && (
                            <div
                              className="w-full py-4 rounded-2xl text-sm font-semibold flex items-center justify-center text-center border border-amber-500/30 text-amber-400/80 leading-snug px-4"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {u.hall_no_demo}
                            </div>
                          )}
                        </div>
                      }
                      {
                        <div
                          className="rounded-xl p-4 border border-[#C9A227]/15 flex items-start gap-3"
                          style={{
                            background: "oklch(0.10 0.007 60)",
                          }}
                        >
                          {
                            <Star
                              size={16}
                              className="text-[#C9A227] mt-0.5 flex-shrink-0"
                            />
                          }
                          {
                            <div>
                              {
                                <p
                                  className="text-white/70 text-xs leading-relaxed"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {u.hall_interested}{" "}
                                  {
                                    <button
                                      onClick={() => {
                                        (r("/"),
                                          setTimeout(() => {
                                            const M =
                                              document.querySelector(
                                                "#contact"
                                              );
                                            M &&
                                              M.scrollIntoView({
                                                behavior: "smooth",
                                              });
                                          }, 300));
                                      }}
                                      className="text-[#C9A227] hover:text-[#F5D76E] underline underline-offset-2 transition-colors"
                                    >
                                      {u.hall_contact_us}
                                    </button>
                                  }{" "}
                                  {u.hall_custom_dev}
                                </p>
                              }
                            </div>
                          }
                        </div>
                      }
                    </div>
                  }
                </div>
              }
              {
                <RelatedHalls
                  currentSlug={f.slug}
                  onNavigate={M => r(`/halls/${M}`)}
                  morePlatformsLabel={u.hall_more_platforms}
                  viewAllLabel={u.hall_view_all}
                />
              }
            </div>
          }
        </div>
      }
    </div>
  );
}
