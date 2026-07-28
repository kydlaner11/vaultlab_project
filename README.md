# Vaultlab

Marketing site built with Next.js (App Router), Tailwind CSS, and Framer Motion. Global font is Plus Jakarta Sans, loaded via `next/font`.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```
src/
  app/                 Route files only: layout, page, sitemap, robots, OG image
  components/
    layout/            Navbar, Footer — shared chrome
    sections/           One file per homepage section (Hero, About, Portfolio, ...)
    ui/                 Small reusable primitives (Button, InfiniteSlider)
  config/site.ts        Single source of truth for site name, description, nav links, SEO copy
  data/                 Content arrays consumed by sections (services, portfolio, partners, ...)
  lib/                  Framework-agnostic helpers (motion variants, cn())
```

To edit page copy or lists (services, portfolio items, nav links, etc.), change the relevant file
under `src/data/` or `src/config/site.ts` — the section components render that data and shouldn't
need to change for content updates.

To add a new homepage section: create a component in `src/components/sections/`, add its data (if
any) under `src/data/`, then import and place it in `src/app/page.tsx`.

## SEO

- Metadata (title template, description, Open Graph, Twitter card, canonical) is defined once in
  `src/app/layout.tsx` from `src/config/site.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are generated from the same config.
- `src/app/opengraph-image.tsx` generates the social share image at build time.
- Update `siteConfig.url` in `src/config/site.ts` to the real production domain before deploying.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
