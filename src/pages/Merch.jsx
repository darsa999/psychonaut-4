import { useState } from 'react';
import { merch, merchStore, merchCheckedOn } from '../data/merch';
import { usePrefs } from '../i18n/PrefsContext';

const price = (eur, lang) =>
  new Intl.NumberFormat(lang === 'ka' ? 'ka-GE' : lang === 'ru' ? 'ru-RU' : 'en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: eur % 1 ? 2 : 0,
  }).format(eur);

function MerchCard({ item }) {
  const { t, language } = usePrefs();
  return (
    <li className={item.soldOut ? 'opacity-55' : ''}>
      <a href={item.url} target="_blank" rel="noreferrer" className="group block no-underline">
        <div className="relative">
          <img
            src={item.image}
            alt={`Psychonaut 4 — ${item.name} (${t(`merch_kind_${item.kind}`)})`}
            loading="lazy"
            width="700"
            height="700"
            className="cover w-full aspect-square object-cover"
          />
          {item.soldOut && (
            <span className="mono absolute top-3 left-3 text-[0.6875rem] uppercase tracking-[0.18em] bg-wall-2 border border-rule px-2 py-1">
              {t('merch_sold_out')}
            </span>
          )}
        </div>
        <p className="meta mt-4 mb-1">{t(`merch_kind_${item.kind}`)}</p>
        <p className="m-0 text-[1.5rem] font-medium leading-tight transition-colors group-hover:text-accent">
          {item.name}
        </p>
        {!item.soldOut && (
          <p className="meta mt-2 mb-0 normal-case">
            <span className="text-fg">{price(item.price, language)}</span>
            {item.left != null && item.left <= 25 && (
              <span className="text-accent"> · {t('merch_left', { n: item.left })}</span>
            )}
          </p>
        )}
      </a>
    </li>
  );
}

export default function Merch() {
  const { t, formatDate } = usePrefs();
  const available = merch.filter((m) => !m.soldOut);
  const soldOut = merch.filter((m) => m.soldOut);
  const [showSold, setShowSold] = useState(false);

  return (
    <div className="wrap pt-16 sm:pt-24 pb-24">
      <p className="label m-0 mb-5">{t('merch_label')}</p>
      <h1 className="section-title">{t('merch_title')}</h1>
      <p className="lead text-muted mt-6 mb-0">{t('merch_lead')}</p>

      <ul className="list-none p-0 m-0 mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {available.map((m) => <MerchCard key={m.id} item={m} />)}
      </ul>

      <section className="mt-24" aria-labelledby="sold-title">
        <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-8">
          <h2 id="sold-title" className="text-[2.25rem] font-medium leading-tight m-0">{t('merch_sold_title')}</h2>
          <button
            type="button"
            onClick={() => setShowSold((v) => !v)}
            aria-expanded={showSold}
            aria-controls="sold-items"
            className="meta cursor-pointer bg-transparent border-0 p-1 hover:text-fg transition-colors"
          >
            {showSold ? t('tour_hide') : t('tour_show')}
          </button>
        </div>
        {showSold && (
          <ul id="sold-items" className="list-none p-0 m-0 mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {soldOut.map((m) => <MerchCard key={m.id} item={m} />)}
          </ul>
        )}
      </section>

      <div className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a href={merchStore} target="_blank" rel="noreferrer" className="btn-primary">{t('merch_store')}</a>
        <span className="meta normal-case">{t('merch_note', { d: formatDate(merchCheckedOn) })}</span>
      </div>
    </div>
  );
}
