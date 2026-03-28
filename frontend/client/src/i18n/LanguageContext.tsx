import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, type Language } from "./translations";

export const languages = [
  { code: "en", label: "English", flagCode: "gb", nativeName: "English" },
  { code: "zh", label: "Chinese", flagCode: "cn", nativeName: "中文" },
  { code: "pt", label: "Portuguese", flagCode: "br", nativeName: "Português" },
  { code: "my", label: "Burmese", flagCode: "mm", nativeName: "မြန်မာဘာသာ" },
  { code: "th", label: "Thai", flagCode: "th", nativeName: "ภาษาไทย" },
  { code: "ms", label: "Malay", flagCode: "my", nativeName: "Bahasa Melayu" },
  { code: "id", label: "Indonesian", flagCode: "id", nativeName: "Bahasa Indonesia" },
  { code: "fr", label: "French", flagCode: "fr", nativeName: "Français" },
  { code: "es", label: "Spanish", flagCode: "es", nativeName: "Español" },
  { code: "hi", label: "Hindi", flagCode: "in", nativeName: "हिन्दी" },
  { code: "vi", label: "Vietnamese", flagCode: "vn", nativeName: "Tiếng Việt" },
  { code: "ru", label: "Russian", flagCode: "ru", nativeName: "Русский" },
  { code: "ko", label: "Korean", flagCode: "kr", nativeName: "한국어" },
  { code: "ja", label: "Japanese", flagCode: "jp", nativeName: "日本語" },
  { code: "ar", label: "Arabic", flagCode: "sa", nativeName: "العربية" },
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
