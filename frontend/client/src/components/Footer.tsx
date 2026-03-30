import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LOGO_URL } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import { useLocation } from "wouter";

export default function Footer() {
  const { t: l } = useLanguage();
  const { config } = useSiteData();
  const logoUrl = config?.logo_url || LOGO_URL;
  const [location, setLocation] = useLocation();
  const r = [
      {
        label: l.nav_home,
        href: "#hero",
        type: "anchor" as const,
      },
      {
        label: l.nav_showcase,
        href: "#showcase",
        type: "anchor" as const,
      },
      {
        label: l.nav_about,
        href: "#about",
        type: "anchor" as const,
      },
      {
        label: l.nav_partnership,
        href: "#partnership",
        type: "anchor" as const,
      },
      {
        label: l.nav_customdev,
        href: "#custom",
        type: "anchor" as const,
      },
      {
        label: l.nav_turnkey,
        href: "/turnkey",
        type: "route" as const,
      },
      {
        label: l.nav_faq,
        href: "/faq",
        type: "route" as const,
      },
      {
        label: l.nav_contact,
        href: "#contact",
        type: "anchor" as const,
      },
    ];
  const handleNav = (item: { href: string; type: string }) => {
    if (item.type === "route") {
      setLocation(item.href);
      window.scrollTo(0, 0);
    } else {
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const el = document.querySelector(item.href);
          el && el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.querySelector(item.href);
        el && el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer
      className="relative border-t border-[#C9A227]/15"
      style={{
        background: "oklch(0.05 0.004 60)",
      }}
    >
      {
        <div className="container mx-auto px-4 py-12">
          {
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {
                <div>
                  {
                    <img
                      src={logoUrl}
                      alt="NovaPlay"
                      className="h-10 w-auto object-contain mb-4"
                    />
                  }
                  {
                    <p
                      className="text-foreground/45 text-sm leading-relaxed max-w-xs"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: "0.95rem",
                      }}
                    >
                      {l.footer_desc}
                    </p>
                  }
                </div>
              }
              {
                <div>
                  {
                    <h4
                      className="text-[#C9A227] text-sm font-semibold mb-4 tracking-widest uppercase"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    >
                      {l.footer_quick}
                    </h4>
                  }
                  {
                    <ul className="space-y-2">
                      {r.map((m, i) => (
                        <li key={i}>
                          {
                            <button
                              onClick={() => handleNav(m)}
                              className="text-foreground/50 hover:text-[#F5D76E] text-sm transition-colors duration-200"
                              style={{
                                fontFamily: "'Rajdhani', sans-serif",
                              }}
                            >
                              {m.label}
                            </button>
                          }
                        </li>
                      ))}
                    </ul>
                  }
                </div>
              }
              {
                <div>
                  {
                    <h4
                      className="text-[#C9A227] text-sm font-semibold mb-4 tracking-widest uppercase"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    >
                      {l.nav_contact}
                    </h4>
                  }
                  {
                    <div
                      className="space-y-2 text-foreground/50 text-sm"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    >
                      {<p>Telegram: @youmegames / @sophiamiller999</p>}
                      {<p>Email: novaplaygaming999@gmail.com</p>}
                      {<p>{l.contact_support}: 24 / 7</p>}
                    </div>
                  }
                </div>
              }
            </div>
          }
          {<div className="gold-divider mb-6" />}
          {
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {
                <p
                  className="text-foreground/30 text-xs"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  © 2025 NovaPlay. {l.footer_rights}
                </p>
              }
              {
                <p
                  className="text-foreground/25 text-xs"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {l.footer_desc}
                </p>
              }
            </div>
          }
        </div>
      }
    </footer>
  );
}
