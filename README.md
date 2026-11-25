# Psychonaut 4 — website

React 19 + Vite + Tailwind CSS v4 + React Router 7. UI in English, Georgian and Russian; dark and light theme.
Design: Figma "Psychonaut 4 — Website" (https://www.figma.com/design/9mA5dtk9FFiD24QvzBYa8k).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

- `src/data/band.js` — all band content (releases, tracklists, line-up, links, Bandcamp ids). Edit here to add a release or a member photo.
- `src/i18n/dictionary.js` — interface copy in en / ka / ru.
- `src/pages/` — Home, Releases, Release (one per album, with the official Bandcamp player), About.
- `src/components/` — Header, Footer, MemberCard, Bandcamp player.
- `src/index.css` — design tokens from Figma (colours, fonts, buttons).

Content source: psychonaut4.bandcamp.com (line-up: Wikipedia). Audio plays through Bandcamp's embedded player; cover art loads from Bandcamp's image CDN.

## Deploying

The site uses real URLs (`/releases/of-mourning`), so the host must send unknown paths to `index.html`.
`public/_redirects` already does this on Netlify and `vercel.json` on Vercel; on nginx use `try_files $uri /index.html`.
