// Source: Immortal Frost Productions Bandcamp store — the band's label and official merch seller
// (immortalfrostproductions1.bandcamp.com). Checked 25 Nov 2026.
// Prices and stock change often: the "Buy" link always goes to the live store page.

const STORE = 'https://immortalfrostproductions1.bandcamp.com/merch';
const img = (id) => `https://f4.bcbits.com/img/${id}_36.jpg`;

export const merchStore = STORE;
export const merchCheckedOn = '2026-11-25';

/**
 * `kind` is a dictionary key suffix (merch_kind_*).
 * `price` in EUR, null when sold out. `left` = copies remaining when the store shows it.
 */
export const merch = [
  { id: 'dzilis-tsameba', name: 'Dzilis Tsameba', kind: 'shirt', price: 27.5, soldOut: false, left: null, edition: 200, image: img('0048689372'), url: `${STORE}/psychonaut-4-dzilis-tsameba-shirt` },
  { id: 'sizmrebshi', name: 'Sizmrebshi', kind: 'shirt', price: 27.5, soldOut: false, left: 20, edition: 300, image: img('0044695905'), url: `${STORE}/psychonaut-4-sizmrebshi-t-shirt` },
  { id: 'fiqrebi-mtsukhrisa', name: 'Fiqrebi Mtsukhrisa', kind: 'shirt', price: 27.5, soldOut: false, left: 20, edition: 300, image: img('0044695860'), url: `${STORE}/psychonaut-4-fiqrebi-mtsukhrisa-t-shirt` },
  { id: 'georgian-dsbm-tank', name: 'Georgian DSBM', kind: 'tank', price: 27.5, soldOut: false, left: 18, edition: 300, image: img('0044695933'), url: `${STORE}/psychonaut-4-georgian-dsbm-tanktop` },
  { id: '15-years-hoodie', name: '15 Years of Georgian DSBM', kind: 'hoodie', price: 65, soldOut: false, left: null, edition: 200, image: img('0048689398'), url: `${STORE}/psychonaut-4-15-years-of-georgian-dsbm-zipper-hoodie` },
  { id: 'of-mourning-alt-hoodie', name: '...Of Mourning (Alternative Design)', kind: 'hoodie', price: 65, soldOut: false, left: 1, edition: 200, image: img('0039483980'), url: `${STORE}/psychonaut-4-of-mourning-alternative-design-hoodie` },
  { id: 'logo-beanie', name: 'Logo', kind: 'beanie', price: 22.5, soldOut: false, left: 25, edition: 200, image: img('0048689350'), url: `${STORE}/psychonaut-4-logo-ski-beanie-hat` },

  { id: 'mzeo-amodi', name: 'Mzeo Amodi', kind: 'shirt', price: null, soldOut: true, image: img('0039483938'), url: `${STORE}/psychonaut-4-mzeo-amodi-t-shirt` },
  { id: 'vai-me', name: 'Vai Me', kind: 'shirt', price: null, soldOut: true, image: img('0039483912'), url: `${STORE}/psychonaut-4-vai-me-t-shirt` },
  { id: 'of-mourning-alt-shirt', name: '...Of Mourning (Alternative Design)', kind: 'shirt', price: null, soldOut: true, image: img('0039483959'), url: `${STORE}/psychonaut-4-of-mourning-alternative-design-t-shirt` },
  { id: 'of-mourning-shirt', name: '…Of Mourning', kind: 'shirt', price: null, soldOut: true, image: img('0036912474'), url: `${STORE}/psychonaut-4-of-mourning-t-shirt` },
  { id: 'logo-band-shirt', name: 'Logo / Band', kind: 'shirt', price: null, soldOut: true, image: img('0036912547'), url: `${STORE}/psychonaut-4-logo-band-t-shirt` },
  { id: 'heart-eye-shirt', name: 'Heart Eye', kind: 'shirt', price: null, soldOut: true, image: img('0036912529'), url: `${STORE}/psychonaut-4-heart-eye-t-shirt` },
  { id: 'grandmother-shirt', name: 'Grandmother', kind: 'shirt', price: null, soldOut: true, image: img('0036912500'), url: `${STORE}/psychonaut-4-grandmother-t-shirt` },
];
