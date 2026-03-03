import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, type Language } from "./translations";

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧", nativeName: "English" },
  { code: "zh", label: "Chinese", flag: "🇨🇳", nativeName: "中文" },
  { code: "pt", label: "Portuguese", flag: "🇧🇷", nativeName: "Português" },
  { code: "my", label: "Burmese", flag: "🇲🇲", nativeName: "မြန်မာဘာသာ" },
  { code: "th", label: "Thai", flag: "🇹🇭", nativeName: "ภาษาไทย" },
  { code: "ms", label: "Malay", flag: "🇲🇾", nativeName: "Bahasa Melayu" },
  {
    code: "id",
    label: "Indonesian",
    flag: "🇮🇩",
    nativeName: "Bahasa Indonesia",
  },
  { code: "fr", label: "French", flag: "🇫🇷", nativeName: "Français" },
  { code: "es", label: "Spanish", flag: "🇪🇸", nativeName: "Español" },
  { code: "hi", label: "Hindi", flag: "🇮🇳", nativeName: "हिन्दी" },
  { code: "vi", label: "Vietnamese", flag: "🇻🇳", nativeName: "Tiếng Việt" },
  { code: "ru", label: "Russian", flag: "🇷🇺", nativeName: "Русский" },
  { code: "ko", label: "Korean", flag: "🇰🇷", nativeName: "한국어" },
  { code: "ja", label: "Japanese", flag: "🇯🇵", nativeName: "日本語" },
  { code: "ar", label: "Arabic", flag: "🇸🇦", nativeName: "العربية" },
] as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
