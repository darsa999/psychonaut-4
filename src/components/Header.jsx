import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { usePrefs } from '../i18n/PrefsContext';
import { LANGS } from '../i18n/dictionary';
import LanguageMenu from './LanguageMenu';
import { releases } from '../data/band';

const NAV = [
  { to: '/releases', key: 'nav_releases' },
  { to: '/discography', key: 'nav_discography' },
  { to: '/tour', key: 'nav_tour' },
  { to: '/merch', key: 'nav_merch' },
  { to: '/about', key: 'nav_about' },
];

const desktopLink = ({ isActive }) =>
  `mono text-xs uppercase tracking-[0.18em] no-underline py-1 border-b transition-colors ${
    isActive ? 'border-current text-fg' : 'border-transparent text-muted hover:text-fg'
  }`;

const mobileLink = ({ isActive }) =>
  `block py-4 text-[2rem] font-medium leading-tight no-underline border-b border-rule ${
    isActive ? 'text-fg' : 'text-muted hover:text-fg'
  }`;

function ThemeButton({ withLabel = false }) {
  const { t, theme, toggleTheme } = usePrefs();
  const label = theme === 'dark' ? t('theme_light') : t('theme_dark');
  const Icon = theme === 'dark' ? Sun : Moon;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={withLabel ? undefined : label}
      title={withLabel ? undefined : label}
      className="narrow inline-flex items-center gap-2 text-muted hover:text-fg transition-colors cursor-pointer p-1"
    >
      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
      {withLabel && <span className="text-[1.0625rem]">{label}</span>}
    </button>
  );
}

export default function Header() {
  const { t, language, setLanguage } = usePrefs();
  const { pathname } = useLocation();
  // The menu remembers which page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;

  // While the mobile menu is open: Escape closes it and the page behind doesn't scroll.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenOn(null);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="relative z-20 border-b border-rule">
      <div className="wrap py-6 flex items-center justify-between gap-8">
        <Link to="/" className="gothic no-underline text-[1.875rem] leading-none">
          Psychonaut 4
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav aria-label="Main" className="flex gap-10">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={desktopLink}>
                {t(n.key)}
              </NavLink>
            ))}
          </nav>
          <LanguageMenu />
          <ThemeButton />
          <Link to={`/releases/${releases[0].slug}`} className="btn !py-3 !px-6">
            {t('listen_short')}
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="md:hidden -mr-1 p-1 text-fg cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t('menu_close') : t('menu_open')}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile panel: navigation, language and theme together */}
      {open && (
        <div id="mobile-menu" className="md:hidden fixed inset-x-0 top-[5.25rem] bottom-0 z-20 bg-wall overflow-y-auto">
          <div className="px-5 pb-10">
            <nav aria-label="Main">
              <ul className="list-none m-0 p-0 border-t border-rule">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <NavLink to={n.to} className={mobileLink} onClick={() => setOpenOn(null)}>
                      {t(n.key)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <fieldset className="mt-8 border-0 p-0 m-0">
              <legend className="label mb-3">{t('lang_label')}</legend>
              <div className="flex gap-2">
                {LANGS.map((l) => {
                  const active = l.id === language;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      lang={l.id}
                      aria-pressed={active}
                      onClick={() => setLanguage(l.id)}
                      className={`mono flex-1 py-2.5 text-sm border cursor-pointer transition-colors ${
                        active ? 'border-fg text-fg' : 'border-rule text-muted hover:text-fg'
                      }`}
                    >
                      {l.name}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-8">
              <ThemeButton withLabel />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
