import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LOGO_URL } from "@/lib/data";
import { useSiteData } from "@/contexts/SiteDataContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocation } from "wouter";

export default function Navbar() {
  const { t: l } = useLanguage(),
    [r, u] = useState(!1),
    [m, f] = useState(!1);
  const { config } = useSiteData();
  const logoUrl = config?.logo_url || LOGO_URL;
  const h = [
      {
        label: l.nav_home,
        href: "#hero",
      },
      {
        label: l.nav_showcase,
        href: "#showcase",
      },
      {
        label: l.nav_about,
        href: "#about",
      },
      {
        label: l.nav_partnership,
        href: "#partnership",
      },
      {
        label: l.nav_customdev,
        href: "#custom",
      },
      {
        label: l.nav_contact,
        href: "#contact",
      },
    ];
  useEffect(() => {
    const y = () => u(window.scrollY > 50);
    return (
      window.addEventListener("scroll", y),
      () => window.removeEventListener("scroll", y)
    );
  }, []);
  const _ = y => {
    f(!1);
    const w = document.querySelector(y);
    w &&
      w.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${r ? "nav-blur" : "bg-transparent"}`}
    >
      {
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {
            <a
              href="#hero"
              onClick={y => {
                (y.preventDefault(), _("#hero"));
              }}
              className="flex items-center gap-3 group"
            >
              {
                <img
                  src={logoUrl}
                  alt="NovaPlay Logo"
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-125"
                />
              }
            </a>
          }
          {
            <ul className="hidden lg:flex items-center gap-6">
              {h.map(y => (
                <li>
                  {
                    <button
                      onClick={() => _(y.href)}
                      className="text-sm font-medium text-foreground/70 hover:text-[#F5D76E] transition-colors duration-300 relative group"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {y.label}
                      {
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#C9A227] to-[#F5D76E] group-hover:w-full transition-all duration-300" />
                      }
                    </button>
                  }
                </li>
              ))}
            </ul>
          }
          {
            <div className="hidden lg:flex items-center gap-3">
              {<LanguageSwitcher />}
              {
                <button
                  onClick={() => _("#contact")}
                  className="btn-gold text-sm"
                >
                  {l.nav_partner_btn}
                </button>
              }
            </div>
          }
          {
            <div className="lg:hidden flex items-center gap-2">
              {<LanguageSwitcher />}
              {
                <button
                  className="flex flex-col gap-1.5 p-2"
                  onClick={() => f(!m)}
                  aria-label="Toggle menu"
                >
                  {
                    <span
                      className={`block w-6 h-0.5 bg-[#F5D76E] transition-all duration-300 ${m ? "rotate-45 translate-y-2" : ""}`}
                    />
                  }
                  {
                    <span
                      className={`block w-6 h-0.5 bg-[#F5D76E] transition-all duration-300 ${m ? "opacity-0" : ""}`}
                    />
                  }
                  {
                    <span
                      className={`block w-6 h-0.5 bg-[#F5D76E] transition-all duration-300 ${m ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                  }
                </button>
              }
            </div>
          }
        </div>
      }
      {
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden nav-blur ${m ? "max-h-96 py-4" : "max-h-0"}`}
        >
          {
            <ul className="flex flex-col gap-1 px-4">
              {h.map(y => (
                <li>
                  {
                    <button
                      onClick={() => _(y.href)}
                      className="w-full text-left py-3 px-4 text-sm text-foreground/80 hover:text-[#F5D76E] hover:bg-white/5 rounded-md transition-all duration-200"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                      }}
                    >
                      {y.label}
                    </button>
                  }
                </li>
              ))}
              {
                <li className="pt-2">
                  {
                    <button
                      onClick={() => _("#contact")}
                      className="w-full btn-gold text-sm"
                    >
                      {l.nav_partner_btn}
                    </button>
                  }
                </li>
              }
            </ul>
          }
        </div>
      }
    </nav>
  );
}
