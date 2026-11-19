import { embedSrc } from '../data/band';
import { usePrefs } from '../i18n/PrefsContext';

/** Official Bandcamp embed — real audio, streamed from Bandcamp. */
export default function BandcampPlayer({ release }) {
  const { t, theme } = usePrefs();
  const rows = release.tracks?.length ?? 11;
  const height = Math.min(120 + rows * 33, 620);

  return (
    <iframe
      key={theme}
      title={`${t('player_title')}: ${release.title}`}
      src={embedSrc(release.bcId, { dark: theme === 'dark' })}
      style={{ border: 0, width: '100%', height }}
      loading="lazy"
      seamless
    />
  );
}
