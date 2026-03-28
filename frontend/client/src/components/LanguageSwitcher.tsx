import React, { useState, useEffect, useRef } from "react";
import { useLanguage, languages } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSwitcher() {
  const { language: l, setLanguage: r } = useLanguage(),
    [u, m] = useState(!1),
    f = useRef<HTMLDivElement>(null),
    h = languages.find(y => y.code === l);
  useEffect(() => {
    function y(w) {
      f.current && !f.current.contains(w.target) && m(!1);
    }
    return (
      document.addEventListener("mousedown", y),
      () => document.removeEventListener("mousedown", y)
    );
  }, []);
  function _(y) {
    (r(y), m(!1));
  }
  return (
    <div
      ref={f}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {
        <button
          onClick={() => m(y => !y)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 10px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(212,175,55,0.35)",
            borderRadius: "6px",
            cursor: "pointer",
            color: "#f0e0a0",
            fontSize: "13px",
            fontFamily: "inherit",
            transition: "background 0.2s, border-color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={y => {
            ((y.currentTarget.style.background = "rgba(212,175,55,0.15)"),
              (y.currentTarget.style.borderColor = "rgba(212,175,55,0.7)"));
          }}
          onMouseLeave={y => {
            ((y.currentTarget.style.background = "rgba(255,255,255,0.07)"),
              (y.currentTarget.style.borderColor = "rgba(212,175,55,0.35)"));
          }}
        >
          {
            <span
              className={`fi fi-${h?.flagCode}`}
              style={{
                fontSize: "16px",
                lineHeight: 1,
              }}
            />
          }
          {<span>{h?.nativeName}</span>}
          {
            <ChevronDown
              size={12}
              style={{
                transition: "transform 0.2s",
                transform: u ? "rotate(180deg)" : "rotate(0deg)",
                opacity: 0.7,
              }}
            />
          }
        </button>
      }
      {u && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            minWidth: "170px",
            background: "rgba(10,8,20,0.97)",
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: "8px",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.1)",
            zIndex: 9999,
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {languages.map(y => {
            const w = y.code === l;
            return (
              <button
                onClick={() => _(y.code)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "9px 14px",
                  background: w ? "rgba(212,175,55,0.15)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: w ? "#d4af37" : "#c8b89a",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  textAlign: "left",
                  transition: "background 0.15s, color 0.15s",
                  borderLeft: w ? "2px solid #d4af37" : "2px solid transparent",
                }}
                onMouseEnter={x => {
                  w ||
                    ((x.currentTarget.style.background =
                      "rgba(212,175,55,0.08)"),
                    (x.currentTarget.style.color = "#e8d080"));
                }}
                onMouseLeave={x => {
                  w ||
                    ((x.currentTarget.style.background = "transparent"),
                    (x.currentTarget.style.color = "#c8b89a"));
                }}
              >
                {
                  <span
                    className={`fi fi-${y.flagCode}`}
                    style={{
                      fontSize: "18px",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  />
                }
                {
                  <span
                    style={{
                      flex: 1,
                    }}
                  >
                    {y.nativeName}
                  </span>
                }
                {w && (
                  <span
                    style={{
                      color: "#d4af37",
                      fontSize: "11px",
                      opacity: 0.8,
                    }}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
