import { usePrefs } from '../i18n/PrefsContext';

export default function ReleaseType({ type }) {
  const { t } = usePrefs();
  return t(type === 'compilation' ? 'type_compilation' : 'type_album');
}
