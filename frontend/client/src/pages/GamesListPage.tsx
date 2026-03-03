import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "wouter";
import { gameCategoryStyles } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, LayoutGrid, ArrowLeft, RotateCcw } from "lucide-react";

export default function GamesListPage() {
  const [, l] = useLocation(),
    { t: r } = useLanguage(),
    [u, m] = useState("All"),
    [f, h] = useState(""),
    [_, y] = useState(!1);
  const { games: allGames } = useSiteData();
  useEffect(() => {
    window.scrollTo(0, 0);
    const S = setTimeout(() => y(!0), 50);
    return () => clearTimeout(S);
  }, []);
  const w = [
      {
        label: r.games_cat_all,
        value: "All",
      },
      {
        label: r.games_cat_slot,
        value: "Slot",
      },
      {
        label: r.games_cat_fish,
        value: "Fish",
      },
      {
        label: r.games_cat_casino,
        value: "Casino",
      },
      {
        label: r.games_cat_card,
        value: "CardGames",
      },
    ],
    x = allGames.filter(S => {
      const g = u === "All" || S.category === u,
        N =
          f === "" ||
          S.name.toLowerCase().includes(f.toLowerCase()) ||
          S.category.toLowerCase().includes(f.toLowerCase());
      return g && N;
    });
  return (
    <div
      className="min-h-screen"
      style={{
        background: "oklch(0.08 0.006 60)",
      }}
    >
      {
        <div
          className="relative pt-28 pb-12 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.12 0.018 60) 0%, oklch(0.08 0.006 60) 100%)",
          }}
        >
          {
            <button
              onClick={() => l("/")}
              className="absolute left-6 top-8 flex items-center gap-2 text-[#C9A227]/70 hover:text-[#C9A227] transition-colors duration-200 text-sm font-semibold"
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
              {r.games_back}
            </button>
          }
          {
            <div className="flex justify-center mb-6">
              {
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
              }
            </div>
          }
          {
            <p
              className="text-[#C9A227] text-xs tracking-[0.3em] uppercase mb-3"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {r.games_library_label}
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
              {r.games_list_title.split(" ").slice(0, -1).join(" ")}{" "}
              {
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #F5D76E 0%, #C9A227 50%, #A67C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {r.games_list_title.split(" ").slice(-1)[0]}
                </span>
              }
            </h1>
          }
          {
            <p
              className="text-white/50 text-base max-w-xl mx-auto px-4"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {r.games_list_desc}
            </p>
          }
          {
            <div className="flex justify-center mt-6">
              {
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
              }
            </div>
          }
        </div>
      }
      {
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {
            <div className="flex justify-center mb-8">
              {
                <div className="relative w-full max-w-md">
                  {
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A227]/50"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {<circle cx="11" cy="11" r="8" />}
                      {<path d="m21 21-4.35-4.35" />}
                    </svg>
                  }
                  {
                    <input
                      type="text"
                      placeholder={r.games_search_ph}
                      value={f}
                      onChange={S => h(S.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all duration-200 focus:border-[#C9A227]/60"
                      style={{
                        background: "oklch(0.13 0.01 60)",
                        border: "1px solid oklch(0.72 0.14 82 / 0.2)",
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    />
                  }
                </div>
              }
            </div>
          }
          {
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {w.map(S => (
                <button
                  onClick={() => m(S.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${u === S.value ? "bg-[#C9A227] border-[#C9A227] text-black shadow-[0_0_20px_oklch(0.72_0.14_82/0.4)]" : "bg-transparent border-[#C9A227]/25 text-white/60 hover:border-[#C9A227]/60 hover:text-white/90"}`}
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  {S.label}
                  {
                    <span
                      className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${u === S.value ? "bg-black/20 text-black" : "bg-white/10 text-white/40"}`}
                    >
                      {S.value === "All"
                        ? allGames.length
                        : allGames.filter(g => g.category === S.value).length}
                    </span>
                  }
                </button>
              ))}
            </div>
          }
          {
            <p
              className="text-white/30 text-sm mb-6 text-center"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {r.games_showing} {x.length}
            </p>
          }
          {x.length === 0 ? (
            <div
              className="text-center py-20 text-white/30"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {r.games_no_results}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {x.map((S, g) => (
                <div
                  className={`fade-in-up ${_ ? "visible" : ""}`}
                  style={{
                    transitionDelay: `${(g % 12) * 0.05}s`,
                  }}
                  onClick={() => l(`/games/${S.slug}`)}
                >
                  {
                    <div
                      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#C9A227]/12 hover:border-[#C9A227]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_oklch(0.72_0.14_82/0.2)] cursor-pointer"
                      style={{
                        background: "oklch(0.11 0.008 60)",
                      }}
                    >
                      {
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
                              src={S.iconUrl}
                              alt={S.name}
                              className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-105"
                              loading="lazy"
                            />
                          }
                        </div>
                      }
                      {
                        <p
                          className="text-white/85 text-xs text-center leading-tight group-hover:text-[#F5D76E] transition-colors duration-200 w-full truncate"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {S.name}
                        </p>
                      }
                      {
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${gameCategoryStyles[S.category] ?? "text-white/50 border-white/20 bg-white/5"}`}
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {S.category === "CardGames"
                            ? r.games_cat_card
                            : S.category === "Fish"
                              ? r.games_cat_fish
                              : S.category === "Casino"
                                ? r.games_cat_casino
                                : S.category}
                        </span>
                      }
                    </div>
                  }
                </div>
              ))}
            </div>
          )}
        </div>
      }
      {<div className="h-20" />}
    </div>
  );
}
