import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { usePrefs } from '../i18n/PrefsContext';
import { LANGS } from '../i18n/dictionary';

/** Desktop language picker: a small dropdown listing each language by its own name. */
export default function LanguageMenu() {
  const { t, language, setLanguage } = usePrefs();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const current = LANGS.find((l) => l.id === language) ?? LANGS[0];

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (id) => {
    setLanguage(id);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="lang-menu"
        aria-label={`${t('lang_label')}: ${current.name}`}
        onClick={() => setOpen((v) => !v)}
        className="narrow flex items-center gap-1 px-2 py-1 text-[0.9375rem] text-muted hover:text-fg cursor-pointer transition-colors"
      >
        <span lang={current.id}>{current.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.75}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          id="lang-menu"
          className="absolute right-0 top-full mt-2 min-w-[10rem] list-none m-0 p-1 bg-wall-2 border border-rule shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] z-30"
        >
          {LANGS.map((l) => {
            const active = l.id === language;
            return (
              <li key={l.id}>
                <button
                  type="button"
                  lang={l.id}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => choose(l.id)}
                  className={`w-full flex items-center justify-between gap-4 px-3 py-2 text-left text-[0.9375rem] cursor-pointer transition-colors hover:bg-wall ${
                    active ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {l.name}
                  {active && <Check size={14} strokeWidth={2} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
