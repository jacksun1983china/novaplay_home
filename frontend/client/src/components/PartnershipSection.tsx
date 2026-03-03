import React, { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Handshake,
  TrendingUp,
  Users,
  ChartColumn,
  Award,
  CircleCheck,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function PartnershipSection() {
  const { t: l } = useLanguage(),
    { ref: r, visible: u } = useIntersectionObserver(),
    { ref: m, visible: f } = useIntersectionObserver(),
    { ref: h, visible: _ } = useIntersectionObserver(),
    y = [
      {
        icon: Handshake,
        title: l.partner_model1_title,
        subtitle: l.partner_step1,
        desc: l.partner_model1_desc,
        features: [
          l.partner_step1,
          l.partner_step2,
          l.partner_step3,
          l.partner_step4,
        ],
        highlight: !0,
      },
      {
        icon: TrendingUp,
        title: l.partner_model2_title,
        subtitle: l.partner_step2,
        desc: l.partner_model2_desc,
        features: [
          l.partner_step1,
          l.partner_step2,
          l.partner_step3,
          l.partner_step5,
        ],
        highlight: !1,
      },
      {
        icon: Users,
        title: l.partner_model3_title,
        subtitle: l.partner_step3,
        desc: l.partner_model3_desc,
        features: [
          l.partner_step1,
          l.partner_step2,
          l.partner_step4,
          l.partner_step5,
        ],
        highlight: !1,
      },
    ],
    w = [
      {
        step: "01",
        title: l.partner_step1,
        desc: l.partner_model1_desc,
      },
      {
        step: "02",
        title: l.partner_step2,
        desc: l.partner_model2_desc,
      },
      {
        step: "03",
        title: l.partner_step3,
        desc: l.partner_model3_desc,
      },
      {
        step: "04",
        title: l.partner_step4,
        desc: l.partner_model1_desc,
      },
      {
        step: "05",
        title: l.partner_step5,
        desc: l.partner_model2_desc,
      },
    ];
  return (
    <section
      id="partnership"
      className="py-12 md:py-16 relative overflow-hidden"
    >
      {
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.07 0.005 60) 0%, oklch(0.09 0.007 60) 100%)",
          }}
        />
      }
      {
        <div
          className="absolute right-0 top-0 w-96 h-96 opacity-5"
          style={{
            background:
              "radial-gradient(circle at right top, #C9A227 0%, transparent 70%)",
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
                  {l.partner_label}
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
                  {l.partner_title}
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
                  {l.partner_desc}
                </p>
              }
            </div>
          }
          {
            <div
              ref={m}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            >
              {y.map((x, S) => {
                const Icon = x.icon;
                return (
                  <div
                    className={`fade-in-up stagger-${S + 1} ${f ? "visible" : ""} relative`}
                  >
                    {
                      <div
                        className={`h-full rounded-2xl p-8 border transition-all duration-350 hover:-translate-y-2 ${x.highlight ? "border-[#C9A227]/60 bg-gradient-to-b from-[#C9A227]/10 to-[#C9A227]/5 shadow-[0_0_40px_oklch(0.72_0.14_82/0.15)]" : "border-[#C9A227]/15 hover:border-[#C9A227]/40"}`}
                        style={{
                          background: x.highlight
                            ? void 0
                            : "oklch(0.11 0.008 60)",
                        }}
                      >
                        {x.highlight && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            {
                              <span
                                className="px-4 py-1 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#C9A227] to-[#F5D76E]"
                                style={{
                                  fontFamily: "'Rajdhani', sans-serif",
                                  letterSpacing: "0.1em",
                                }}
                              >
                                RECOMMENDED
                              </span>
                            }
                          </div>
                        )}
                        {
                          <div className="w-14 h-14 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center mb-5">
                            {<Icon size={26} className="text-[#F5D76E]" />}
                          </div>
                        }
                        {
                          <h3
                            className="text-white font-bold text-xl mb-2"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontStyle: "italic",
                              fontWeight: 800,
                            }}
                          >
                            {x.title}
                          </h3>
                        }
                        {
                          <p
                            className="text-foreground/60 text-sm leading-relaxed mb-6"
                            style={{
                              fontFamily: "'Rajdhani', sans-serif",
                              fontSize: "0.95rem",
                            }}
                          >
                            {x.desc}
                          </p>
                        }
                        {
                          <ul className="space-y-2.5">
                            {x.features.map((N, T) => (
                              <li className="flex items-start gap-2.5">
                                {
                                  <CircleCheck
                                    size={16}
                                    className="text-[#C9A227] mt-0.5 flex-shrink-0"
                                  />
                                }
                                {
                                  <span
                                    className="text-foreground/70 text-sm"
                                    style={{
                                      fontFamily: "'Rajdhani', sans-serif",
                                      fontSize: "0.95rem",
                                    }}
                                  >
                                    {N}
                                  </span>
                                }
                              </li>
                            ))}
                          </ul>
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
                <h3
                  className={`text-center text-2xl md:text-3xl font-bold text-white mb-10 fade-in-up ${_ ? "visible" : ""}`}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontStyle: "italic",
                    fontWeight: 800,
                  }}
                >
                  {l.partner_process_title}
                </h3>
              }
              {
                <div className="relative">
                  {
                    <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
                  }
                  {
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                      {w.map((x, S) => (
                        <div
                          className={`fade-in-up stagger-${S + 1} ${_ ? "visible" : ""} text-center`}
                        >
                          {
                            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#C9A227]/50 bg-[#C9A227]/10 mb-4 mx-auto">
                              {
                                <span
                                  className="text-[#F5D76E] font-bold text-lg"
                                  style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                  }}
                                >
                                  {x.step}
                                </span>
                              }
                            </div>
                          }
                          {
                            <h4
                              className="text-white font-semibold text-base mb-2"
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontStyle: "italic",
                                fontWeight: 800,
                                fontSize: "0.9rem",
                              }}
                            >
                              {x.title}
                            </h4>
                          }
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </div>
          }
          {
            <div className="text-center mt-10">
              {
                <button
                  onClick={() => {
                    const x = document.querySelector("#contact");
                    x &&
                      x.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="btn-gold text-base px-10 py-3"
                >
                  {l.partner_cta}
                </button>
              }
            </div>
          }
        </div>
      }
    </section>
  );
}
