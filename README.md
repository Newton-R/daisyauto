# Daisy Auto Sales

A Next.js (App Router + TypeScript + Tailwind) site for a used car dealership
that also runs a repair shop.

## Design system

- **Colors:** paper `#F7F8FA`, surface `#FFFFFF`, ink `#12161C`, steel `#5B6472`,
  hairline `#DDE1E6`, navy `#1E3A5F` (brand), signal blue `#2F6FED` (CTA accent)
- **Type:** Space Grotesk (headlines), Inter (body), IBM Plex Mono (prices,
  mileage, stock numbers — car specs treated as data)
- **Signature element:** the "window sticker" card (`components/WindowSticker.tsx`)
  — a perforated-edge, mono-spec card styled after a dealership's window sticker.
  Used for inventory listings and echoed in the hero.

## Pages

- `/` — Home (hero, stats, featured inventory, services teaser)
- `/inventory` — Full vehicle inventory
- `/services` — Maintenance / Repair / Diagnostics pricing
- `/about` — Dealership story
- `/contact` — Contact info + inquiry form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

- Vehicles and services live in `lib/data.ts` — no CMS, just edit the arrays.
- Business info (phone, address, hours) is currently hardcoded in
  `components/Navbar.tsx`, `components/Footer.tsx`, and `app/contact/page.tsx`.
  Search for `(405) 555-1234` and the address to swap in your real details.
- The contact form (`app/contact/ContactForm.tsx`) is UI-only right now — it
  just shows a success state on submit. Wire the `handleSubmit` function up to
  an email service (e.g. Resend, which you've used before) or an API route to
  actually send messages.

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel:

```bash
npx vercel
```
