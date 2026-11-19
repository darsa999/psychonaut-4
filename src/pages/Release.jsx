import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { getRelease } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';
import BandcampPlayer from '../components/BandcampPlayer';
import ReleaseType from '../components/ReleaseType';
import NotFound from './NotFound';

export default function Release() {
  const { slug } = useParams();
  const { t, formatDate } = usePrefs();
  const r = getRelease(slug);
  if (!r) return <NotFound />;

  return (
    <article className="wrap pt-10 sm:pt-16">
      <Link to="/releases" className="mono text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 text-muted hover:text-fg no-underline">
        <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
        {t('back')}
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-24">
        <div>
          <img src={r.cover} alt={`${r.title} — cover`} width="1200" height="1200" className="cover" />
        </div>

        <div>
          <p className="label m-0 mb-5"><ReleaseType type={r.type} /></p>
          <h1 className="m-0 text-[3rem] sm:text-[5rem] font-medium leading-[0.95]">{r.title}</h1>
          <dl className="mono mt-7 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[0.8125rem] uppercase tracking-[0.06em]">
            <dt className="text-muted">{t('released_on')}</dt>
            <dd className="m-0">{formatDate(r.released)}</dd>
            <dt className="text-muted">{t('format')}</dt>
            <dd className="m-0"><ReleaseType type={r.type} /></dd>
            {r.label && (
              <>
                <dt className="text-muted">{t('label')}</dt>
                <dd className="m-0">{r.label}</dd>
              </>
            )}
          </dl>

          {r.noteKey && <p className="lead mt-6 mb-0">{t(r.noteKey)}</p>}

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={r.url} target="_blank" rel="noreferrer" className="btn-primary">{t('buy')}</a>
            {r.price && <span className="meta">{t('from')} {r.price}</span>}
          </div>

          <div className="mt-10">
            <BandcampPlayer release={r} />
          </div>

          <h2 className="label mt-14 mb-4">{t('tracks')}</h2>
          {r.tracks ? (
            <ol className="tracklist">
              {r.tracks.map(([name, dur]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className="dur">{dur ?? ''}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-muted m-0">{t('tracks_in_player')}</p>
          )}
        </div>
      </div>
    </article>
  );
}
