import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dictionary, LANGS } from './dictionary';

const PrefsContext = createContext(null);

const KA_MONTHS = [
  'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
  'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი',
];

const read = (key, fallback, allowed) => {
  try {
    const v = localStorage.getItem(key);
    return allowed.includes(v) ? v : fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — keep it in memory */
  }
};

export function PrefsProvider({ children }) {
  const [language, setLanguage] = useState(() => read('p4_language', 'en', LANGS.map((l) => l.id)));
  const [theme, setTheme] = useState(() => read('p4_theme', 'dark', ['dark', 'light']));

  useEffect(() => {
    write('p4_language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    write('p4_theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const t = useCallback(
    (key, vars) => {
      let s = dictionary[language]?.[key] ?? dictionary.en[key] ?? key;
      if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, v);
      return s;
    },
    [language],
  );

  const locale = LANGS.find((l) => l.id === language)?.locale ?? 'en-GB';
  const formatDate = useCallback(
    (iso) => {
      const d = new Date(`${iso}T12:00:00`);
      // Some browsers ship without Georgian locale data, so Georgian is formatted by hand.
      if (language === 'ka') return `${d.getDate()} ${KA_MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
      return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
    },
    [language, locale],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () => setTheme((p) => (p === 'dark' ? 'light' : 'dark')),
      t,
      formatDate,
    }),
    [language, theme, t, formatDate],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error('usePrefs must be used inside <PrefsProvider>');
  return ctx;
}
