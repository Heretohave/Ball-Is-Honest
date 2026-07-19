# Ball Is Honest

Golf coaching website — free & premium video lessons, a technique book, and private lessons. Bilingual: English and Slovak (`/en`, `/sk`).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Hosted on Vercel, connected to this GitHub repo for automatic deploys
- Domain: ballishonest.com (registered via Namecheap)

## Getting started locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000 — you'll be redirected to `/en` or `/sk` based on browser language.

## Project structure

- `src/app/[locale]/` — pages, one per language via the `locale` route segment (`en` | `sk`)
- `src/i18n/dictionaries.ts` — all UI text, per language
- `src/components/` — homepage sections (Hero, VideoLessons, PremiumTeaser, BookSection, PrivateLessons)
- `src/middleware.ts` — redirects `/` to the visitor's preferred language

## Still to do (placeholders in the code, marked with TODO)

- Replace placeholder YouTube video IDs in `src/components/VideoLessons.tsx` with real lesson links
- Wire up real Google sign-in (NextAuth.js) and gate premium content behind it
- Connect Stripe for PDF book sales, and add the real Amazon KDP link
- Add a real book cover image in `public/`
- Add a booking flow (e.g. Cal.com embed) for private lessons

## Deploying

Push to `main` — Vercel auto-deploys every commit once the project is imported there.
