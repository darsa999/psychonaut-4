import { Link } from 'react-router';
import { usePrefs } from '../i18n/PrefsContext';

export default function NotFound() {
  const { t } = usePrefs();
  return (
    <div className="wrap pt-20 sm:pt-28">
      <p className="lead mt-0 mb-6">{t('not_found')}</p>
      <Link to="/releases" className="btn">{t('all_releases')}</Link>
    </div>
  );
}
