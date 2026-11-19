import { Link } from 'react-router';
import { band } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';

export default function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="relative z-10 mt-24 border-t border-rule">
      <div className="wrap flex flex-col gap-14 pt-20 sm:pt-24 pb-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link to="/" className="gothic no-underline text-[3.5rem] sm:text-[6rem] leading-none">
              Psychonaut 4
            </Link>
            <span lang="ka" className="font-ka font-light text-base tracking-[0.1em] text-muted">
              {band.nameKa} · თბილისი
            </span>
          </div>
          <ul className="mono list-none m-0 p-0 flex flex-col gap-3.5 text-[0.8125rem] uppercase tracking-[0.16em] sm:items-end">
            {band.links.map((l) => (
              <li key={l.id}>
                <a href={l.href} target="_blank" rel="noreferrer" className="no-underline hover:text-accent transition-colors">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="m-0 flex items-start sm:items-center gap-5 border border-rule px-6 sm:px-7 py-6 text-xl italic leading-[1.4] opacity-90">
          <span className="mt-2.5 sm:mt-0 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {t('care_note')}
        </p>

        <div className="meta flex flex-col sm:flex-row gap-3 sm:justify-between border-t border-rule pt-8 !text-[0.6875rem]">
          <span>{t('footer')}</span>
          <span>{band.city}, {band.founded}</span>
        </div>
      </div>
    </footer>
  );
}
