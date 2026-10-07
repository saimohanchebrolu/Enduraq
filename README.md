# Enduraq Technologies — Corporate Website

A multi-page Next.js (App Router) website for Enduraq Technologies, a Microsoft
modern workplace IT services company. Built with TypeScript, Tailwind CSS,
Framer Motion and lucide-react, matching the visual language of the provided
reference screenshot (dark navy hero, blue/violet accents, rounded cards).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — pages (App Router): home, `/services`, `/services/[slug]`,
  `/solutions`, `/solutions/[slug]`, `/industries`, `/about`, `/resources`,
  `/contact`, `/privacy`, `/terms`, plus `sitemap.ts` and `robots.ts`.
- `components/` — shared, reusable UI: Header, Footer, Hero, PageHero,
  ServiceCard, SolutionCard, StatCard, CTA, ProcessTimeline,
  TechnologyMarquee, MobileMenu, QuoteModal, AssessmentModal, ContactForm,
  WhatsAppButton, BackToTop, CookieConsent.
- `lib/site.ts` — **single configuration file** for company name, tagline,
  contact details, social links and navigation. Update this file to rebrand
  the entire site.
- `lib/services.ts` / `lib/solutions.ts` — content for the 8 services and 8
  solutions, each driving both the listing pages and the individual detail
  pages via one reusable template.

## Images

All photography currently points to royalty-free Unsplash URLs (configured
in `next.config.js` under `images.remotePatterns`) so the project runs
immediately. Swap these for your own licensed photography before launch —
just replace the `image` fields in `lib/services.ts` / `lib/solutions.ts` and
the `src` values in `Hero.tsx`, `PageHero` usages, and `app/page.tsx`.

## Notes / placeholders

- Contact details, address and statistics in `lib/site.ts` are placeholders —
  update with real company information.
- The contact form, Get a Quote modal and Free Assessment modal post to
  `/api/contact` (a Cloudflare Pages Function in `functions/api/contact.ts`),
  which emails the submission to info@enduraq.in over SMTP. See
  `EMAIL_SETUP.md` for the one-time Cloudflare setup.
- The map on the Contact page is a placeholder — embed Google Maps or your
  preferred provider.
- Replace `/public` favicon assets with your real logo/favicon.
- Legal copy on `/privacy` and `/terms` is placeholder text and should be
  reviewed by counsel before publishing.
