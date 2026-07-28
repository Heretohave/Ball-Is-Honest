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

Google sign-in needs credentials in `.env.local` — see "Google sign-in setup" below. Without them, clicking "Sign in with Google" will show an error page.

## Project structure

- `src/app/[locale]/` — pages, one per language via the `locale` route segment (`en` | `sk`)
- `src/app/api/auth/[...nextauth]/` — NextAuth.js route handler (Google provider)
- `src/lib/auth.ts` — NextAuth configuration
- `src/i18n/dictionaries.ts` — all UI text, per language
- `src/components/` — homepage sections (Hero, AboutTeaser, VideoLessons, PremiumTeaser, BookSection, PrivateLessons) plus the `About` page, and `GoogleAuthButton` (sign-in/out UI)
- `src/middleware.ts` — redirects `/` to the visitor's preferred language

## Google sign-in setup

The site uses [NextAuth.js](https://next-auth.js.org/) with Google as the only provider. The header and Premium section both use it — sign in shows your name/avatar and a sign-out link; there's no premium content gating yet, this just makes the login flow itself real.

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → create or select a project.
2. **APIs & Services → OAuth consent screen** — set it up (External, add your email as a test user while unpublished).
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID** → Application type: **Web application**.
4. Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (local dev)
   - `https://www.ballishonest.com/api/auth/callback/google` (production)
5. Copy the generated **Client ID** and **Client secret**.
6. Local dev: paste them into `.env.local` (already created, gitignored, has a generated `NEXTAUTH_SECRET`).
7. Production: in Vercel → Project → Settings → Environment Variables, add `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET` (generate a separate one with `openssl rand -base64 32`), and `NEXTAUTH_URL=https://www.ballishonest.com`. Redeploy after adding them.

`.env.example` documents the required keys without secrets.

## Still to do (placeholders in the code, marked with TODO)

- Replace placeholder video cards in `src/components/VideoLessons.tsx` with real YouTube lesson links
- Fill in real Google OAuth credentials (see above) and, once there's real premium content, gate it behind `useSession()`
- Connect Stripe for PDF book sales, and add the real Amazon KDP link once the book ships
- Add a booking flow (e.g. Cal.com embed) for private lessons
- Native-speaker review of the Slovak About copy (flagged with TODO comments in `dictionaries.ts`)

## Deploying

Push to `main` — Vercel auto-deploys every commit once the project is imported there.
