// Live dates. Sources: setlist.fm (main), cross-checked with Songkick, Bandsintown and Last.fm — collected Nov 2026.
// As of 23 Nov 2026 the band has no upcoming shows announced.
//
// To add a show, put it in `shows`; the Tour page splits upcoming / past by date on its own.
// verified: true  → confirmed on setlist.fm
// verified: false → only on aggregator sites; double-check before relying on it (hidden on the page).

export const TOURS = {
  italy2026: 'Mourning Through Italy 2026',
  latam2026: 'Mourning Over Latin American Tour 2026',
};

export const followLinks = [
  { id: 'bandsintown', label: 'Bandsintown', href: 'https://www.bandsintown.com/a/1555376-psychonaut-4' },
  { id: 'songkick', label: 'Songkick', href: 'https://www.songkick.com/artists/9619049-psychonaut-4' },
  { id: 'setlistfm', label: 'setlist.fm', href: 'https://www.setlist.fm/setlists/psychonaut-4-1bde7dc0.html' },
];

export const shows = [
  // ── 2026 ──────────────────────────────────────────────
  { id: '2026-08-13-poti', date: '2026-08-13', city: 'Poti', country: 'Georgia', countryCode: 'GE', venue: 'Golden Lake', event: 'Lions of Rock 2026', type: 'festival', tour: null, ticketUrl: null, verified: true },
  { id: '2026-07-26-tolmin', date: '2026-07-26', city: 'Tolmin', country: 'Slovenia', countryCode: 'SI', venue: 'Festival Grounds', event: 'Tolminator Metal Fest 2026', type: 'festival', tour: null, startTime: '17:25', ticketUrl: null, verified: true },

  { id: '2026-05-16-bari', date: '2026-05-16', city: 'Bari', country: 'Italy', countryCode: 'IT', venue: 'Nevermind Club', event: 'Waves of Doom Fest 2026', type: 'festival', tour: TOURS.italy2026, ticketUrl: null, verified: true },
  { id: '2026-05-15-pescara', date: '2026-05-15', city: 'Pescara', country: 'Italy', countryCode: 'IT', venue: 'Scumm', event: null, type: 'club', tour: TOURS.italy2026, ticketUrl: null, verified: true },
  { id: '2026-05-14-rome', date: '2026-05-14', city: 'Rome', country: 'Italy', countryCode: 'IT', venue: 'Traffic Live Club', event: null, type: 'club', tour: TOURS.italy2026, ticketUrl: null, verified: true },
  { id: '2026-05-13-verona', date: '2026-05-13', city: 'San Giovanni Lupatoto', country: 'Italy', countryCode: 'IT', venue: 'Damage Inc', event: null, type: 'club', tour: TOURS.italy2026, doors: '19:30', ticketUrl: null, verified: true },
  { id: '2026-05-12-turin', date: '2026-05-12', city: 'Turin', country: 'Italy', countryCode: 'IT', venue: 'El Barrio', event: null, type: 'club', tour: TOURS.italy2026, doors: '20:00', startTime: '21:00', ticketUrl: null, verified: true,
    setlist: ['Fiqrebi Mtsukhrisa', 'Serial Lier', 'Personal Forest', 'Sana-sana-sana - Cura-cura-cura', 'Tbilisian Tragedy', 'Too Late to Call an Ambulance', 'Sweet Decadance'] },
  { id: '2026-05-11-aarburg', date: '2026-05-11', city: 'Aarburg', country: 'Switzerland', countryCode: 'CH', venue: 'Musigburg', event: null, type: 'club', tour: TOURS.italy2026, ticketUrl: null, verified: true },

  { id: '2026-04-25-tbilisi', date: '2026-04-25', city: 'Tbilisi', country: 'Georgia', countryCode: 'GE', venue: 'Junkyard', event: 'Kall plays Lifelover', type: 'club', tour: null, ticketUrl: null, verified: false },
  { id: '2026-04-11-bochum', date: '2026-04-11', city: 'Bochum', country: 'Germany', countryCode: 'DE', venue: 'Matrix', event: null, type: 'club', tour: null, ticketUrl: null, verified: false },
  { id: '2026-04-10-lichtenfels', date: '2026-04-10', city: 'Lichtenfels', country: 'Germany', countryCode: 'DE', venue: 'Stadthalle Lichtenfels', event: 'Ragnarök Festival 2026', type: 'festival', tour: null, startTime: '23:30', ticketUrl: null, verified: true },

  { id: '2026-03-07-denain', date: '2026-03-07', city: 'Denain', country: 'France', countryCode: 'FR', venue: 'Théâtre Municipal', event: 'In Theatrum Denonium 2026', type: 'festival', tour: null, doors: '17:00', ticketUrl: null, verified: true },

  { id: '2026-02-13-saopaulo', date: '2026-02-13', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', venue: 'Jai Club', event: null, type: 'club', tour: TOURS.latam2026, ticketUrl: null, verified: true },
  { id: '2026-02-12-buenosaires', date: '2026-02-12', city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', venue: 'Uniclub', event: null, type: 'club', tour: TOURS.latam2026, doors: '19:00', startTime: '21:15', ticketUrl: null, verified: true },
  { id: '2026-02-11-santiago', date: '2026-02-11', city: 'Santiago', country: 'Chile', countryCode: 'CL', venue: 'Spot Freedom', event: null, type: 'club', tour: TOURS.latam2026, ticketUrl: null, verified: true },
  { id: '2026-02-09-lima', date: '2026-02-09', city: 'Lima', country: 'Peru', countryCode: 'PE', venue: 'Teatro Kantaro', event: null, type: 'club', tour: TOURS.latam2026, doors: '19:00', startTime: '22:30', ticketUrl: null, verified: true },
  { id: '2026-02-07-bogota', date: '2026-02-07', city: 'Bogotá', country: 'Colombia', countryCode: 'CO', venue: 'Relevent Music Hall', event: null, type: 'club', tour: TOURS.latam2026, ticketUrl: null, verified: true },
  { id: '2026-02-06-mexicocity', date: '2026-02-06', city: 'Mexico City', country: 'Mexico', countryCode: 'MX', venue: 'Circo Volador', event: null, type: 'club', tour: TOURS.latam2026, doors: '19:30', startTime: '20:30', ticketUrl: null, verified: true },

  // ── 2025 ──────────────────────────────────────────────
  { id: '2025-10-25-almaty', date: '2025-10-25', city: 'Almaty', country: 'Kazakhstan', countryCode: 'KZ', venue: 'Zhest’', event: null, type: 'club', tour: null, doors: '19:00', startTime: '20:05', ticketUrl: null, verified: true },
  { id: '2025-10-05-glasgow', date: '2025-10-05', city: 'Glasgow', country: 'United Kingdom', countryCode: 'GB', venue: 'Ivory Blacks', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-10-04-northallerton', date: '2025-10-04', city: 'Northallerton', country: 'United Kingdom', countryCode: 'GB', venue: 'Pealie’s Barn', event: 'Call of the Crow 2025', type: 'festival', tour: null, ticketUrl: null, verified: true },
  { id: '2025-10-03-bristol', date: '2025-10-03', city: 'Bristol', country: 'United Kingdom', countryCode: 'GB', venue: 'Strange Brew', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-10-02-london', date: '2025-10-02', city: 'London', country: 'United Kingdom', countryCode: 'GB', venue: 'Oslo Hackney', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-03-11-ankara', date: '2025-03-11', city: 'Ankara', country: 'Turkey', countryCode: 'TR', venue: '6:45 KK', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-03-09-istanbul', date: '2025-03-09', city: 'Istanbul', country: 'Turkey', countryCode: 'TR', venue: 'IF Performance Hall Beşiktaş', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-01-31-erfurt', date: '2025-01-31', city: 'Erfurt', country: 'Germany', countryCode: 'DE', venue: 'From Hell', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-01-30-prague', date: '2025-01-30', city: 'Prague', country: 'Czechia', countryCode: 'CZ', venue: 'Storm Club', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-01-29-wroclaw', date: '2025-01-29', city: 'Wrocław', country: 'Poland', countryCode: 'PL', venue: 'Liverpool', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-01-21-vienna', date: '2025-01-21', city: 'Vienna', country: 'Austria', countryCode: 'AT', venue: 'Viper Room', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-01-20-ljubljana', date: '2025-01-20', city: 'Ljubljana', country: 'Slovenia', countryCode: 'SI', venue: 'Orto Bar', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
  { id: '2025-01-19-bologna', date: '2025-01-19', city: 'Bologna', country: 'Italy', countryCode: 'IT', venue: 'Alchemica Music Club', event: null, type: 'club', tour: null, ticketUrl: null, verified: true },
];

const todayIso = () => new Date().toISOString().slice(0, 10);
const confirmed = shows.filter((s) => s.verified);

export const getUpcoming = () =>
  confirmed.filter((s) => s.date >= todayIso()).sort((a, b) => a.date.localeCompare(b.date));

export const getPastByYear = () => {
  const past = confirmed.filter((s) => s.date < todayIso()).sort((a, b) => b.date.localeCompare(a.date));
  const byYear = {};
  for (const s of past) (byYear[s.date.slice(0, 4)] ||= []).push(s);
  return Object.entries(byYear).sort(([a], [b]) => b.localeCompare(a));
};
