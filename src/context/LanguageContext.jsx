import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../lib/i18n';

const LanguageContext = createContext(null);

const getPath = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'pt';
    } catch {
      return 'pt';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', language);
    } catch {
      // ignore
    }
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => getPath(translations[language], key) ?? getPath(translations.pt, key) ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
