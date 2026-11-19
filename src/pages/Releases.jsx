import { Link } from 'react-router';
import { band, releases, moreOnBandcamp } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';
import ReleaseType from '../components/ReleaseType';

export default function Releases() {
  const { t, formatDate } = usePrefs();

  return (
    <div className="wrap pt-16 sm:pt-24">
      <p className="label m-0 mb-5">{t('music_label')}</p>
      <h1 className="section-title">{t('releases_title')}</h1>
      <p className="lead text-muted mt-6 mb-14">{t('releases_lead')}</p>

      <ul className="list-none p-0 m-0 border-b border-rule">
        {releases.map((r) => (
          <li key={r.slug}>
            <Link to={`/releases/${r.slug}`} className="release-row">
              <span className="text-[2rem] sm:text-[3rem] leading-none font-light italic text-muted tabular-nums">
                {r.released.slice(0, 4)}
              </span>
              <img
                src={r.cover.replace('_10.jpg', '_2.jpg')}
                alt=""
                loading="lazy"
                width="350"
                height="350"
                className="cover"
              />
              <span>
                <span className="release-row-title block text-2xl sm:text-[2rem] font-medium leading-tight transition-colors">{r.title}</span>
                <span className="meta block mt-2">
                  <ReleaseType type={r.type} />, {formatDate(r.released)}
                </span>
              </span>
              <span className="meta hidden sm:block">
                {r.tracks ? `${r.tracks.length} ${t('tracks').toLowerCase()}` : ''}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16" aria-labelledby="more-title">
        <div>
          <h2 id="more-title" className="text-[2.25rem] font-medium leading-tight m-0">{t('more_title')}</h2>
          <p className="text-muted mt-2 mb-0">{t('more_lead')}</p>
        </div>
        <div>
          <ul className="list-none p-0 m-0 columns-1 sm:columns-2 gap-10">
            {moreOnBandcamp.map(([title, href]) => (
              <li key={href} className="py-1.5 text-[1.25rem] italic break-inside-avoid">
                <a href={href} target="_blank" rel="noreferrer" className="text-link">{title}</a>
              </li>
            ))}
          </ul>
          <p className="mt-10 mb-4">
            {t('bundle', { n: band.discographyBundle.releases, p: band.discographyBundle.price })}
          </p>
          <a href={band.discographyBundle.href} target="_blank" rel="noreferrer" className="btn-primary">
            {t('get_bundle')}
          </a>
        </div>
      </section>
    </div>
  );
}
