// Source: psychonaut4.bandcamp.com (fetched Nov 2026).
// Everything here is taken from the band's Bandcamp pages. Fields Bandcamp
// does not publish (line-up, full credits, some durations) are left out on purpose.

const BC = 'https://psychonaut4.bandcamp.com';
const img = (id, size = 10) => `https://f4.bcbits.com/img/a${id}_${size}.jpg`;

export const band = {
  name: 'Psychonaut 4',
  nameKa: 'ფსიქონავტი 4',
  city: 'Tbilisi, Georgia',
  founded: 2010,
  tags: ['depressive rock', 'post suicidal black metal', 'atmospheric black metal', 'Tbilisi'],
  photo: 'https://f4.bcbits.com/img/0044788818_10.jpg',
  links: [
    { id: 'bandcamp', label: 'Bandcamp', href: BC },
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/pages/Psychonaut-4/130368643662027' },
    { id: 'vk', label: 'VK', href: 'http://vk.com/club56932266' },
  ],
  discographyBundle: {
    href: BC,
    releases: 17,
    price: '€67.90',
  },
};

/**
 * Current line-up (source: Wikipedia, Nov 2026 — not published on Bandcamp).
 * `roles` are dictionary keys. Add a `photo` URL (or an import from src/assets) to replace the initial.
 */
export const members = [
  { name: 'Irakli Kirkitadze', roles: ['role_vocals'], photo: null },
  { name: 'Drifter', roles: ['role_guitar', 'role_drums'], photo: null },
  { name: 'S.D. Ramirez', roles: ['role_guitar'], photo: null },
  { name: 'Giorgi Kordzakhia', roles: ['role_guitar'], photo: null },
  { name: 'Alex Menabde', roles: ['role_bass'], photo: null },
];

/**
 * Releases, newest first.
 * `bcId` is the Bandcamp item id used by the embedded player.
 * `tracks` is null when Bandcamp's page did not give a complete list —
 * the embedded player shows the full tracklist in that case.
 */
export const releases = [
  {
    slug: 'of-mourning',
    title: '...of Mourning',
    type: 'album',
    released: '2024-10-25',
    bcId: 1499857194,
    cover: img('0142061171'),
    url: `${BC}/album/of-mourning`,
    price: '€10',
    label: 'Immortal Frost Productions',
    tracks: [
      ['Ghele', '1:40'],
      ['Mzeo Amodi', '8:14'],
      ['Fiqrebi Mtsukhrisa', '7:54'],
      ['Vai Me', '7:53'],
      ['Sizmrebshi', '8:24'],
      ['Dzilis Tsameba', '7:21'],
    ],
    noteKey: 'note_of_mourning',
  },
  {
    slug: 'scrapes-from-the-past',
    title: 'Scrapes From The Past',
    type: 'compilation',
    released: '2023-05-14',
    bcId: 803856529,
    cover: img('2162955594'),
    url: `${BC}/album/scrapes-from-the-past`,
    price: '€10',
    tracks: [
      ['Serial Lier', '6:21'],
      ['Nackskott', '2:54'],
      ["My Despair Can't Be Explained", '8:13'],
      ['Wor(l)d of Pain and Hate', '5:18'],
      ['I Wanna Be Your Dog', '5:08'],
      ['თბილისო (The City That Loves You)', '5:44'],
      ['Bad Morning! (Злого утра!)', '7:31'],
      ['Not a Love Song', '5:54'],
      ['I Measure Time in Milliliters', '6:18'],
      ['In Good Movies Hero Always Dies', '3:19'],
      ['Hero in (Герой Н)', '5:11'],
      ['Out Of Mind (С ума)', '4:42'],
      ['Sterile Nails and Thunderbowels', '6:34'],
      ['The Sun Is Still Out Of Sight (ისევ არა ჩანს მზე)', '4:56'],
    ],
    noteKey: 'note_scrapes',
  },
  {
    slug: 'beautyfall',
    title: 'Beautyfall / სულდაცემა',
    type: 'album',
    released: '2020-10-30',
    bcId: 26645072,
    cover: img('3095641267'),
    url: `${BC}/album/beautyfall-2`,
    tracks: [
      ['მარტო მებრძოლი ველზე / One Man’s War'],
      ['თბილისური ტრაგედია / Tbilisian Tragedy'],
      ['... და შენ როგორ ხარ / ...And How Are You'],
      ['Sana Sana Sana - Cura Cura Cura'],
      ['#შენახვადამოხმარება / #tostoreandtouse'],
      ['ის სევდა, ისევ და / And Sorrow, Again'],
      ['მტ(ვ)ერი / Dust, The Enemy'],
      ['Sterile Nails And Thunderbowels (Silencer cover, bonus)'],
    ],
  },
  {
    slug: 'neurasthenia',
    title: 'Neurasthenia',
    type: 'album',
    released: '2016-10-07',
    bcId: 4051114810,
    cover: img('0523503756'),
    url: `${BC}/album/neurasthenia`,
    tracks: [
      ['Prologue'],
      ['Death is a Form of Art'],
      ['Sweet Decadance'],
      ['Total Leaning To Madness'],
      ['Bad t.RIP'],
      ['Song Written in Paris'],
      ['Sleeping Pills Suck'],
      ['Hangover'],
      ['Too Late to Call an Ambulance'],
      ['Thoughts of Death'],
    ],
  },
  {
    slug: 'dipsomania',
    title: 'Dipsomania',
    type: 'album',
    released: '2015-04-23',
    bcId: 1338661622,
    cover: img('0933446680'),
    url: `${BC}/album/dipsomania`,
    label: 'Talheim Records',
    tracks: null,
  },
  {
    slug: 'have-a-nice-trip',
    title: 'Have a Nice Trip',
    type: 'album',
    released: '2012-08-11',
    bcId: 2137491455,
    cover: img('0543611718'),
    url: `${BC}/album/have-a-nice-trip`,
    label: 'Depressive Illusions Records, Der neue Weg Productions',
    tracks: null,
    noteKey: 'note_hant',
  },
];

/** Older singles, splits and demos that live only on Bandcamp for now. */
export const moreOnBandcamp = [
  ['So Much for Suicide', `${BC}/track/so-much-for-suicide`],
  ['Children of the Night', `${BC}/album/children-of-the-night`],
  ['Hero in (Герой Н)', `${BC}/track/hero-in`],
  ['Sana-sana-sana – Cura-cura-cura', `${BC}/track/sana-sana-sana-cura-cura-cura`],
  ['Tbilisian Tragedy', `${BC}/track/tbilisian-tragedy`],
  ['Urban Negativism', `${BC}/album/urban-negativism`],
  ['Cheerful Depression Hovert', `${BC}/album/psychonaut-4-cheerful-depression-hovert`],
  ['Free Portion ov Madness I', `${BC}/album/free-portion-ov-madness-i`],
  ['The Great Depression I', `${BC}/album/the-great-depression-i`],
  ['Tired Numb Still Alive', `${BC}/album/tired-numb-still-alive`],
  ['40', `${BC}/album/40`],
];

export const getRelease = (slug) => releases.find((r) => r.slug === slug);

export const embedSrc = (bcId, { tracklist = true, dark = true } = {}) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${bcId}/size=large/bgcol=${dark ? '0a0a0b' : 'e9e4da'}/linkcol=${dark ? 'c83a2e' : '9e1f1f'}/tracklist=${tracklist}/artwork=none/transparent=true/`;
