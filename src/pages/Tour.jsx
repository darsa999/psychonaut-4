import { useState } from 'react';
import { followLinks, getPastByYear, getUpcoming } from '../data/tour';
import { usePrefs } from '../i18n/PrefsContext';

function ShowRow({ show, past }) {
  const { t, formatDate } = usePrefs();
  const times = [show.doors && `${t('tour_doors')} ${show.doors}`, show.startTime && `${t('tour_start')} ${show.startTime}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <li className="grid gap-2 sm:grid-cols-[13rem_1fr_auto] sm:items-baseline sm:gap-8 py-6 border-t border-rule">
      <time dateTime={show.date} className="meta">{formatDate(show.date)}</time>
      <div>
        <p className="m-0 text-2xl sm:text-[2rem] font-medium leading-tight">
          {show.city}, <span className="text-muted">{show.country}</span>
        </p>
        <p className="meta mt-2 mb-0 normal-case">
          {[show.event, show.venue].filter(Boolean).join(' — ')}
          {show.tour && <span className="block mt-1 text-accent">{show.tour}</span>}
          {!past && times && <span className="block mt-1">{times}</span>}
        </p>
      </div>
      <div className="sm:text-right">
        {past ? (
          <span className="meta">{t('tour_played')}</span>
        ) : show.ticketUrl ? (
          <a href={show.ticketUrl} target="_blank" rel="noreferrer" className="btn !py-3 !px-6">
            {t('tour_tickets')}
          </a>
        ) : (
          <span className="meta">{t('tour_tba')}</span>
        )}
      </div>
    </li>
  );
}

export default function Tour() {
  const { t } = usePrefs();
  const upcoming = getUpcoming();
  const pastByYear = getPastByYear();
  const [showPast, setShowPast] = useState(upcoming.length === 0);

  return (
    <div className="wrap pt-16 sm:pt-24 pb-24">
      <p className="label m-0 mb-5">{t('tour_label')}</p>
      <h1 className="section-title">{t('tour_title')}</h1>

      {upcoming.length > 0 ? (
        <ul className="list-none p-0 m-0 mt-14 border-b border-rule">
          {upcoming.map((s) => <ShowRow key={s.id} show={s} />)}
        </ul>
      ) : (
        <div className="mt-14 border border-rule p-8 sm:p-12">
          <p className="text-[2rem] font-medium leading-tight m-0">{t('tour_none_title')}</p>
          <p className="lead text-muted mt-3 mb-8">{t('tour_none_lead')}</p>
          <ul className="list-none p-0 m-0 flex flex-wrap gap-x-8 gap-y-3">
            {followLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} target="_blank" rel="noreferrer" className="mono text-sm text-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <section className="mt-24" aria-labelledby="past-title">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="past-title" className="text-[2.25rem] font-medium leading-tight m-0">{t('tour_past')}</h2>
          <button
            type="button"
            onClick={() => setShowPast((v) => !v)}
            aria-expanded={showPast}
            aria-controls="past-shows"
            className="meta cursor-pointer bg-transparent border-0 p-1 hover:text-fg transition-colors"
          >
            {showPast ? t('tour_hide') : t('tour_show')}
          </button>
        </div>

        {showPast && (
          <div id="past-shows">
            {pastByYear.map(([year, list]) => (
              <div key={year} className="mt-12">
                <h3 className="label m-0 mb-4">{year}</h3>
                <ul className="list-none p-0 m-0 border-b border-rule">
                  {list.map((s) => <ShowRow key={s.id} show={s} past />)}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
