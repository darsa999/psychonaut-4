import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { band, members, releases } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';
import ReleaseType from '../components/ReleaseType';
import MemberCard from '../components/MemberCard';

export default function Home() {
  const { t, formatDate } = usePrefs();
  const reduce = useReducedMotion();
  const latest = releases[0];
  const albums = releases.filter((r) => r.type === 'album').length;

  const stats = [
    [String(band.founded), t('stat_formed')],
    [String(albums), t('stat_albums')],
    [String(band.discographyBundle.releases), t('stat_releases')],
    ['3', t('stat_languages')],
  ];

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] },
        };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap relative">
          <div className="pointer-events-none absolute inset-y-0 left-[clamp(1.25rem,8.3vw,7.5rem)] w-px bg-fg/[0.06]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-[clamp(1.25rem,8.3vw,7.5rem)] w-px bg-fg/[0.06]" aria-hidden="true" />

          <div className="flex flex-col items-center gap-6 sm:gap-7 pt-24 sm:pt-40 pb-24 sm:pb-36 text-center">
            <motion.p className="label m-0" {...rise(0)}>{t('since')}</motion.p>
            <motion.h1
              id="hero-title"
              className="gothic m-0 whitespace-nowrap text-[clamp(3.25rem,13vw,11.875rem)] leading-none"
              {...rise(0.1)}
            >
              {band.name}
            </motion.h1>
            <motion.p className="m-0 text-[1.875rem] sm:text-[2.5rem] font-light italic leading-tight" {...rise(0.2)}>
              {t('hero_tagline')}
            </motion.p>
            <motion.p lang="ka" className="m-0 font-ka font-light text-lg tracking-[0.1em] text-muted" {...rise(0.25)}>
              {band.nameKa} · თბილისი
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4 pt-5" {...rise(0.35)}>
              <Link to={`/releases/${latest.slug}`} className="btn-primary">
                {t('cta_latest', { title: latest.title })}
              </Link>
              <Link to="/releases" className="btn">{t('all_releases')}</Link>
            </motion.div>
          </div>

          <ul className="mono list-none m-0 p-0 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-3 border-t border-rule py-7 text-xs uppercase tracking-[0.22em] text-muted">
            {band.tags.map((tag, i) => (
              <li key={tag} className="contents">
                <span>{tag}</span>
                {i < band.tags.length - 1 && <span className="text-accent" aria-hidden="true">✕</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Latest release */}
      <section className="bg-wall-2" aria-labelledby="latest-title">
        <div className="wrap grid items-center gap-14 py-20 sm:py-[7.5rem] lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-24">
          <Link to={`/releases/${latest.slug}`} className="block">
            <img
              src={latest.cover}
              alt={`${latest.title} — cover`}
              width="1200"
              height="1200"
              className="cover"
            />
          </Link>

          <div className="flex flex-col gap-6">
            <p className="label m-0">{t('latest_album')}</p>
            <h2 id="latest-title" className="m-0 text-[3.5rem] sm:text-[5.5rem] font-medium leading-[0.95]">
              {latest.title}
            </h2>
            <p className="meta m-0 !text-[0.8125rem]">
              {t('released_on')} {formatDate(latest.released)}
              {latest.label ? ` · ${latest.label}` : ''}
            </p>
            {latest.noteKey && (
              <p className="m-0 max-w-[36rem] text-[1.625rem] font-light leading-[1.3]">{t(latest.noteKey)}</p>
            )}
            <ol className="tracklist mt-2">
              {latest.tracks.map(([name, dur]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className="dur">{dur ?? ''}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to={`/releases/${latest.slug}`} className="btn-primary">{t('listen')}</Link>
              <a href={latest.url} target="_blank" rel="noreferrer" className="btn">{t('buy')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about-title">
        <div className="wrap flex flex-col gap-16 sm:gap-20 py-20 sm:py-[7.5rem]">
          <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,640px)] lg:justify-between lg:gap-24">
            <div className="flex flex-col gap-6">
              <p className="label m-0">{t('nav_about')}</p>
              <h2 id="about-title" className="section-title max-w-[8em]">{t('about_heading')}</h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="m-0 text-[1.375rem] font-light leading-[1.45] opacity-90">{t('bio_1')}</p>
              <p className="m-0 text-[1.375rem] font-light leading-[1.45] opacity-90">{t('bio_2')}</p>
              <Link to="/about" className="text-link mono text-xs uppercase tracking-[0.18em] self-start">
                {t('more_about')} →
              </Link>
            </div>
          </div>

          <dl className="m-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="flex flex-col-reverse gap-3 border-t border-accent pt-7">
                <dt className="meta max-w-[15rem]">{l}</dt>
                <dd className="m-0 text-[4.5rem] font-light leading-none">{n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Discography */}
      <section className="bg-wall-2" aria-labelledby="disco-title">
        <div className="wrap flex flex-col gap-14 sm:gap-16 py-20 sm:py-[7.5rem]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-5">
              <p className="label m-0">{t('music_label')}</p>
              <h2 id="disco-title" className="section-title">{t('discography')}</h2>
            </div>
            <span className="text-[2rem] font-light italic text-muted">
              {releases.at(-1).released.slice(0, 4)} — {latest.released.slice(0, 4)}
            </span>
          </div>

          <ul className="list-none m-0 p-0 grid gap-x-6 gap-y-14 grid-cols-2 lg:grid-cols-4">
            {releases.map((r) => (
              <li key={r.slug}>
                <Link to={`/releases/${r.slug}`} className="group flex flex-col gap-4 no-underline">
                  <img
                    src={r.cover.replace('_10.jpg', '_5.jpg')}
                    alt=""
                    loading="lazy"
                    width="700"
                    height="700"
                    className="cover grayscale-[35%] transition-[filter] duration-300 group-hover:grayscale-0"
                  />
                  <span className="text-[1.375rem] sm:text-[1.75rem] font-medium leading-tight transition-colors group-hover:text-accent">
                    {r.title}
                  </span>
                  <span className="meta">
                    {r.released.slice(0, 4)} · <ReleaseType type={r.type} />
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href={band.discographyBundle.href}
                target="_blank"
                rel="noreferrer"
                className="flex aspect-square flex-col justify-end gap-4 bg-blood p-6 sm:p-7 text-on-blood no-underline transition-colors hover:bg-[#c83a2e]"
              >
                <span className="text-[1.625rem] sm:text-[2.125rem] font-light italic leading-[1.05]">
                  {t('bandcamp_tile')}
                </span>
                <span className="mono text-xs font-medium uppercase tracking-[0.22em]">Bandcamp →</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Band */}
      <section aria-labelledby="band-title">
        <div className="wrap flex flex-col gap-14 sm:gap-16 py-20 sm:py-[7.5rem]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-5">
              <p className="label m-0">{t('lineup_label')}</p>
              <h2 id="band-title" className="section-title">{t('band_title')}</h2>
            </div>
            <span className="text-[1.375rem] sm:text-[1.625rem] font-light italic text-muted">{t('band_founded')}</span>
          </div>
          <ul className="list-none m-0 p-0 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {members.map((m) => (
              <li key={m.name}>
                <MemberCard member={m} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
