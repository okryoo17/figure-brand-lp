# VIMO — Athletes, Articulated

A new collectible-figure brand built by Circular House Inc (Tokyo) and Francisco Rodriguez (US). Posable practice tools, carryable charms, collectible characters — snowboard first, every sport next.

## Live

- 🌐 **https://vimo-co.vercel.app/en** — English
- 🇯🇵 **https://vimo-co.vercel.app/ja** — Japanese
- 🎯 **https://vimo-co.vercel.app/en/launch** — Pre-launch teaser

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (`@theme` based design tokens)
- **next-intl 4** (i18n, ja/en, `localePrefix: "always"`)
- **framer-motion 12** (staggered reveals)
- **next/font/google** — Instrument Serif / Bricolage Grotesque / Geist Mono / Shippori Mincho B1

## Run locally

```bash
npm install
npm run dev
# http://localhost:3000/en
# http://localhost:3000/ja
```

## Deploy

Vercel — push to `main` triggers auto-deploy. Manual: `vercel --prod --yes`.

## Operating company

Circular House Inc (東京). All contracts and product issuance under this entity.
