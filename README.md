# Duda Medeiros — Model Portfolio

A premium, editorial, fully responsive model portfolio landing page.
Built with **Vite + React + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install     # install dependencies
npm run dev     # local dev server (http://localhost:5173)
npm run build   # production build → /dist
npm run preview # preview the production build locally
```

## Editing content

Everything you'll normally want to change lives in **one file**:

```
src/data/portfolio.js
```

There you can update:

- **Measurements** — the bilingual profile card
- **Contact links** — `whatsapp`, `email`, `instagram`
  (replace the `[INSERT_WHATSAPP_LINK]` / `[INSERT_EMAIL]` placeholders)
- **Image paths** — which file appears in each section
- **Video reel** — Google Drive file IDs, or self-hosted MP4 paths

## Swapping in the high-resolution photos

The site ships with web-optimized photos extracted from the briefing PDF.
To replace any of them with a higher-resolution original from your Google
Drive, simply **overwrite the file at the same path** in `public/images/`,
keeping the same filename. No code changes needed.

| Section | File in `public/images/` | Drive briefing reference |
|---|---|---|
| Hero (cover) | `hero.jpg` | image_49 — black tailoring + sunglasses |
| Digital — front | `digital-front.jpg` | image_58 |
| Digital — profile | `digital-profile.jpg` | image_57 |
| Digital — relaxed | `digital-relaxed.jpg` | image_56 |
| Runway (bridal) | `runway.jpg` | image_69 |
| Editorial detail (veil) | `editorial-detail.jpg` | image_70 |
| Commercial — jacket & tie | `commercial-fashion.jpg` | image_64 |
| E-commerce — bag & boots | `ecommerce.jpg` | image_73 |

## Video reel

The reel section embeds two clips from Google Drive. For the embeds to show
publicly, each video must be shared as **"Anyone with the link → Viewer"** in
Drive. Alternatively, drop MP4 files into `public/videos/` and edit the `reel`
entries in `src/data/portfolio.js` to `{ type: 'file', src: '/videos/clip.mp4' }`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and publishes the site automatically on every push to `main`.

One-time setup:

1. Push this project to `git@github.com:JacksonWolff/dudamedeiros.git`.
2. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. For the custom domain: **Settings → Pages → Custom domain →** enter
   `dudamedeiros.com.br` (the `public/CNAME` file already sets this on build).
4. At your DNS provider, point the domain at GitHub Pages:
   - Four `A` records for the apex `dudamedeiros.com.br` → `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (optional) a `CNAME` record for `www` → `jacksonwolff.github.io`
5. Enable **Enforce HTTPS** once the certificate is issued.

After the first push, the **Actions** tab shows the build; once green, the
site is live.
