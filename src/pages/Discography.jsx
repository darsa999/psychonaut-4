import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ExternalLink } from 'lucide-react';
import data from '../data/discography.json';
import { getRelease } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';

const FILTERS = ['all', 'album', 'compilation', 'split', 'single', 'demo'];

// Newest first, grouped by year: [[year, releases[]], ...]
const groupByYear = (list) => {
  const map = new Map();
  [...list]
    .sort((a, b) => b.released.localeCompare(a.released))
    .forEach((r) => {
      const y = r.released.slice(0, 4);
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(r);
    });
  return [...map.entries()];
};

function ReleaseRow({ release }) {
  const { t, formatDate } = usePrefs();
  const [open, setOpen] = useState(false);
  const page = getRelease(release.id); // has its own page in /releases?
  const panelId = `tracks-${release.id}`;

  return (
    <li className="border-t border-rule">
      <div className="grid gap-2 sm:grid-cols-[13rem_1fr_auto] sm:items-baseline sm:gap-8 py-6">
        <time dateTime={release.released} className="meta">{formatDate(release.released)}</time>

        <div>
          <p className="m-0 text-2xl sm:text-[2rem] font-medium leading-tight">
            {page ? (
              <Link to={`/releases/${page.slug}`} className="no-underline hover:text-accent transition-colors">
                {release.title}
              </Link>
            ) : (
              release.title
            )}
          </p>
          <p className="meta mt-2 mb-0">
            {t(`type_${release.type}`)} · {release.tracks.length === 1
              ? t('disco_one_track')
              : `${release.tracks.length} ${t('tracks').toLowerCase()}`}
            {release.note && <span className="block mt-1 normal-case">{release.note}</span>}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end">
          {release.url && (
            <a href={release.url} target="_blank" rel="noreferrer" className="meta text-link inline-flex items-center gap-1.5">
              {t('disco_lyrics')}
              <ExternalLink size={12} strokeWidth={1.5} aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="meta cursor-pointer bg-transparent border-0 p-1 inline-flex items-center gap-1.5 hover:text-fg transition-colors"
          >
            {t('tracks')}
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              aria-hidden="true"
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <ol id={panelId} className="tracklist mb-8 sm:ml-[15rem]">
          {release.tracks.map((tr) => (
            <li key={tr.n}>
              <span>{tr.title}</span>
              <span className="dur">{tr.duration ?? ''}</span>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

export default function Discography() {
  const { t } = usePrefs();
  const [filter, setFilter] = useState('all');

  const byYear = useMemo(
    () => groupByYear(filter === 'all' ? data.releases : data.releases.filter((r) => r.type === filter)),
    [filter],
  );
  const total = data.releases.reduce((n, r) => n + r.tracks.length, 0);

  return (
    <div className="wrap pt-16 sm:pt-24 pb-24">
      <p className="label m-0 mb-5">{t('music_label')}</p>
      <h1 className="section-title">{t('disco_title')}</h1>
      <p className="lead text-muted mt-6 mb-0">
        {t('disco_lead', { r: data.releases.length, n: total })}
      </p>

      <div role="group" aria-label={t('disco_filter')} className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`mono text-xs uppercase tracking-[0.18em] bg-transparent border-0 border-b py-1 px-0 cursor-pointer transition-colors ${
              filter === f ? 'border-current text-fg' : 'border-transparent text-muted hover:text-fg'
            }`}
          >
            {f === 'all' ? t('disco_all') : t(`type_${f}`)}
          </button>
        ))}
      </div>

      {byYear.map(([year, list]) => (
        <section key={year} className="mt-12" aria-labelledby={`y-${year}`}>
          <h2 id={`y-${year}`} className="label m-0 mb-4">{year}</h2>
          <ul className="list-none p-0 m-0 border-b border-rule">
            {list.map((r) => <ReleaseRow key={r.id} release={r} />)}
          </ul>
        </section>
      ))}

      <p className="meta mt-16 mb-0 normal-case">{t('disco_lyrics_note')}</p>
    </div>
  );
}
