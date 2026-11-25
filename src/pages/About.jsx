import { band } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';

export default function About() {
  const { t } = usePrefs();
  return (
    <div className="wrap pt-16 sm:pt-24">
      <p className="label m-0 mb-5">{t('since')}</p>
      <h1 className="section-title">{t('about_heading')}</h1>
      <p className="mt-5 mb-0 font-ka font-light text-lg tracking-[0.1em] text-muted" lang="ka">{band.nameKa}</p>

      <figure className="relative mt-10 mb-0">
        <img
          src={band.photo}
          alt={t('photo_alt')}
          className="block w-full max-h-[38rem] object-cover grayscale-[40%] contrast-110 bg-wall-2 border border-rule"
          loading="lazy"
        />
        <figcaption
          lang="en"
          className="pointer-events-none absolute inset-x-0 top-0 px-6 pt-6 pb-16 sm:px-10 sm:pt-10 bg-gradient-to-b from-black/75 via-black/35 to-transparent"
        >
          <blockquote className="m-0 max-w-[30em] text-white italic font-light text-lg sm:text-2xl leading-snug tracking-[0.02em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            “Listen to them — the children of the night. What music they make!”
          </blockquote>
        </figcaption>
      </figure>

      <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr] md:gap-24">
        <div className="max-w-[36em]">
          <p className="lead mt-0">{t('bio_1')}</p>
          <p className="text-[1.375rem] font-light leading-[1.5] text-muted">{t('bio_2')}</p>
        </div>

        <div>
          <h2 className="label m-0">{t('tags')}</h2>
          <ul className="list-none p-0 mt-4 mb-10 text-[1.25rem] italic text-muted">
            {band.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>

          <h2 className="label m-0">{t('elsewhere')}</h2>
          <ul className="mono list-none p-0 mt-4 mb-0 text-[0.8125rem] uppercase tracking-[0.16em]">
            {band.links.map((l) => (
              <li key={l.id} className="py-1">
                <a href={l.href} target="_blank" rel="noreferrer" className="text-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
