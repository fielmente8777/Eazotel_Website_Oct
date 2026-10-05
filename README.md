# Eazotel website (React)

Marketing homepage for [Eazotel](https://eazotel.com), built with **React 19 + Vite 8**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Structure

- `src/App.jsx` – page composition
- `src/components/Header.jsx` – nav, logo sprite, mobile menu
- `src/components/Hero.jsx` – hero with live inbox feed, client logo marquee, channel flow diagram
- `src/components/Platform.jsx` – guest-journey stepper and the 8 product modules
- `src/components/Interactive.jsx` – Fielmente service cards, industries, reviews carousel, OTA commission calculator, phone copy
- `src/components/Sections.jsx` – static sections (process, results, who, pricing, partners, FAQ, CTA, footer)
- `src/components/Icon.jsx` – Lucide icons, scene photos, HTML mock renderer
- `src/data.js` – all copy and mock data (figures are illustrative)
- `public/img`, `public/logos` – photography and logos (WebP)

## Deploy

Vercel auto-detects Vite: build command `npm run build`, output `dist/`. Every push to `main` deploys.
