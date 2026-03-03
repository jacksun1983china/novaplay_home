import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation, useParams } from "wouter";
import { gameCategoryStyles } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Star,
  Zap,
  Shield,
  TriangleAlert,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function GameDetailPage() {
  const l = useParams(),
    [, r] = useLocation(),
    { t: u } = useLanguage(),
    [m, f] = useState(0),
    [h, _] = useState(!1);
  const { games: allGames } = useSiteData();
  const y = allGames.find((x: any) => x.slug === l.slug);
  if (
    (useEffect(() => {
      window.scrollTo(0, 0);
      const x = setTimeout(() => _(!0), 50);
      return () => clearTimeout(x);
    }, [l.slug]),
    !y)
  )
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-white"
        style={{
          background: "oklch(0.08 0.006 60)",
        }}
      >
        {
          <p
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontStyle: "italic",
            }}
          >
            {u.game_not_found}
          </p>
        }
        {
          <button
            onClick={() => r("/games")}
            className="text-[#C9A227] hover:underline"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            {u.game_back_games}
          </button>
        }
      </div>
    );
  const w = x =>
    x === "CardGames"
      ? u.games_cat_card
      : x === "Fish"
        ? u.games_cat_fish
        : x === "Casino"
          ? u.games_cat_casino
          : x === "Slot"
            ? u.games_cat_slot
            : x;
  return (
    <div
      className="min-h-screen"
      style={{
        background: "oklch(0.08 0.006 60)",
      }}
    >
      {
        <div
          className="sticky top-0 z-50 flex items-center gap-3 px-6 py-4 border-b border-[#C9A227]/10"
          style={{
            background: "oklch(0.10 0.01 60 / 0.95)",
            backdropFilter: "blur(12px)",
          }}
        >
          {
            <button
              onClick={() => r("/games")}
              className="flex items-center gap-2 text-[#C9A227]/70 hover:text-[#C9A227] transition-colors duration-200 text-sm font-semibold"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  {<path d="M19 12H5M5 12l7 7M5 12l7-7" />}
                </svg>
              }
              {u.game_all_games}
            </button>
          }
          {<span className="text-white/20">/</span>}
          {
            <span
              className="text-white/60 text-sm truncate"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {y.name}
            </span>
          }
        </div>
      }
      {
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.13 0.018 60) 0%, oklch(0.08 0.006 60) 100%)",
          }}
        >
          {
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.72 0.14 82 / 0.07) 0%, transparent 70%)",
              }}
            />
          }
          {
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
              {
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {
                    <div
                      className={`flex-shrink-0 w-full lg:w-72 fade-in-up ${h ? "visible" : ""}`}
                      style={{
                        transitionDelay: "0s",
                      }}
                    >
                      {
                        <div className="relative w-full max-w-[220px] mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden border border-[#C9A227]/20 shadow-[0_0_40px_oklch(0.72_0.14_82/0.15)] mb-6">
                          {
                            <img
                              src={y.iconUrl}
                              alt={y.name}
                              className="w-full h-full object-cover"
                            />
                          }
                        </div>
                      }
                      {
                        <div className="flex items-center gap-2 mb-4">
                          {
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full border ${gameCategoryStyles[y.category] ?? "text-white/50 border-white/20 bg-white/5"}`}
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                letterSpacing: "0.08em",
                              }}
                            >
                              {w(y.category)}
                            </span>
                          }
                        </div>
                      }
                      {
                        <h1
                          className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontStyle: "italic",
                            fontWeight: 800,
                          }}
                        >
                          {y.name}
                        </h1>
                      }
                      {
                        <p
                          className="text-white/55 text-sm leading-relaxed mb-6"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                          }}
                        >
                          {y.description}
                        </p>
                      }
                      {
                        <div className="space-y-2 mb-8">
                          {y.features.map((x, S) => (
                            <div className="flex items-center gap-2">
                              {
                                <div
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{
                                    background: "#C9A227",
                                  }}
                                />
                              }
                              {
                                <span
                                  className="text-white/65 text-sm"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {x}
                                </span>
                              }
                            </div>
                          ))}
                        </div>
                      }
                      {
                        <a
                          href={y.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-black text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.72_0.14_82/0.5)] hover:-translate-y-0.5 active:translate-y-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #F5D76E 0%, #C9A227 50%, #A67C00 100%)",
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontStyle: "italic",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background:
                                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                                backgroundSize: "200% 100%",
                                animation: "shimmer 1.5s infinite",
                              }}
                            />
                          }
                          {
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              {<path d="M8 5v14l11-7z" />}
                            </svg>
                          }
                          {u.game_enter}
                          {
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              {
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              }
                              {<polyline points="15 3 21 3 21 9" />}
                              {<line x1="10" y1="14" x2="21" y2="3" />}
                            </svg>
                          }
                        </a>
                      }
                      {
                        <p
                          className="text-white/25 text-xs text-center mt-3"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                          }}
                        >
                          {u.game_opens_new}
                        </p>
                      }
                    </div>
                  }
                  {
                    <div
                      className={`flex-1 w-full fade-in-up ${h ? "visible" : ""}`}
                      style={{
                        transitionDelay: "0.1s",
                      }}
                    >
                      {
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#C9A227]/15 shadow-[0_8px_40px_rgba(0,0,0,0.5)] mb-4">
                          {
                            <img
                              src={y.screenshots[m]}
                              alt={`${y.name} screenshot ${m + 1}`}
                              className="w-full h-full object-cover transition-opacity duration-300"
                            />
                          }
                          {
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                background:
                                  "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                              }}
                            />
                          }
                          {
                            <div
                              className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs text-white/70"
                              style={{
                                background: "rgba(0,0,0,0.5)",
                                fontFamily: "'Rajdhani', sans-serif",
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              {m + 1} / {y.screenshots.length}
                            </div>
                          }
                        </div>
                      }
                      {
                        <div className="flex gap-3">
                          {y.screenshots.map((x, S) => (
                            <button
                              onClick={() => f(S)}
                              className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-200 ${S === m ? "border-[#C9A227] shadow-[0_0_16px_oklch(0.72_0.14_82/0.4)]" : "border-transparent opacity-50 hover:opacity-80"}`}
                            >
                              {
                                <img
                                  src={x}
                                  alt={`Thumbnail ${S + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              }
                            </button>
                          ))}
                        </div>
                      }
                      {
                        <div className="flex items-center justify-between mt-4">
                          {
                            <button
                              onClick={() =>
                                f(x =>
                                  x === 0 ? y.screenshots.length - 1 : x - 1
                                )
                              }
                              className="flex items-center gap-2 text-[#C9A227]/60 hover:text-[#C9A227] transition-colors duration-200 text-sm font-semibold"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                >
                                  {<path d="M19 12H5M5 12l7 7M5 12l7-7" />}
                                </svg>
                              }
                              {u.game_previous}
                            </button>
                          }
                          {
                            <div className="flex gap-1.5">
                              {y.screenshots.map((x, S) => (
                                <button
                                  onClick={() => f(S)}
                                  className={`w-2 h-2 rounded-full transition-all duration-200 ${S === m ? "bg-[#C9A227] w-5" : "bg-white/20 hover:bg-white/40"}`}
                                />
                              ))}
                            </div>
                          }
                          {
                            <button
                              onClick={() =>
                                f(x =>
                                  x === y.screenshots.length - 1 ? 0 : x + 1
                                )
                              }
                              className="flex items-center gap-2 text-[#C9A227]/60 hover:text-[#C9A227] transition-colors duration-200 text-sm font-semibold"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {u.game_next}
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
      {
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {
            <h2
              className="text-3xl font-bold text-white mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontStyle: "italic",
                fontWeight: 800,
              }}
            >
              {u.game_more_games}{" "}
              {
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #F5D76E 0%, #C9A227 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {w(y.category)}
                </span>
              }
            </h2>
          }
          {
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {(allGames as any[])
                .filter(x => x.category === y.category && x.slug !== y.slug)
                .slice(0, 6)
                .map(x => (
                  <div
                    onClick={() => r(`/games/${x.slug}`)}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-[#C9A227]/10 hover:border-[#C9A227]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{
                      background: "oklch(0.11 0.008 60)",
                    }}
                  >
                    {
                      <div className="w-full aspect-square rounded-lg overflow-hidden">
                        {
                          <img
                            src={x.iconUrl}
                            alt={x.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        }
                      </div>
                    }
                    {
                      <p
                        className="text-white/70 text-xs text-center group-hover:text-[#F5D76E] transition-colors duration-200 w-full truncate"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {x.name}
                      </p>
                    }
                  </div>
                ))}
            </div>
          }
          {
            <div className="flex justify-center mt-10">
              {
                <button
                  onClick={() => r("/games")}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-200 font-bold text-sm"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {<path d="M19 12H5M5 12l7 7M5 12l7-7" />}
                    </svg>
                  }
                  {u.game_view_all}
                </button>
              }
            </div>
          }
        </div>
      }
      {<div className="h-10" />}
    </div>
  );
}
