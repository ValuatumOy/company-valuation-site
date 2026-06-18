# Valuatum Reports — AI valuation reports for private companies

Modern marketing + commerce site for selling **AI-generated valuation reports** of
private companies. Successor to `company-valuation.com`, visually in the spirit of
[aiequityreports.com](https://www.aiequityreports.com/) but targeted at private
company valuations.

## What it does

- **Global company search** — search any company by name or business ID.
- **Three purchase paths:**
  - Company is in our dataset → buy an **existing report for €100**, generated instantly.
  - Not in our dataset, but the user has PDFs → **import five years of statements for €150**; pay first, then upload PDFs (no registration), and we generate the report.
  - No PDFs available → choose the **€200 data retrieval route**, where we retrieve the official financials via CreditSafe or another provider.
- **Data-sharing discount** — let us reuse a company's figures for **€50 off** (import+share = €100); the company is added to our catalogue automatically.
- **Stripe Checkout** — no account required; the report (or upload step) is delivered
  after payment.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Stripe** for payments

## Getting started

```bash
npm install
cp .env.example .env        # fill in Stripe keys (optional for demo mode)
npm run dev                 # http://localhost:3000
```

Without a `STRIPE_SECRET_KEY`, checkout runs in **demo mode**: it skips Stripe and
sends you straight to the post-payment step so the whole flow is clickable.

## Project structure

```
src/
  app/
    page.tsx                  Landing page (hero, search, how-it-works, pricing, CTA)
    reports/                  Browse reports
    company/[id]/             Company detail + buy box
    import/                   Import landing (pay first)
    import/upload/            Post-payment PDF upload step
    pricing/ methodology/ faq/ about/ legal/[doc]/
    checkout/success|cancel/
    api/
      search/                 GET company search
      checkout/               POST -> Stripe Checkout Session (demo fallback)
      import/                 POST uploaded statements
  components/                 Navbar, Footer, SearchBar, BuyBox, UploadForm, Pricing
  lib/
    companies.ts              Data access layer (mock dataset OR Valuatum API)
    pricing.ts                Central pricing config (env-overridable, EUR cents)
    stripe.ts                 Stripe client + site URL helper
```

## Wiring to real data

The data layer in `src/lib/companies.ts` uses a **bundled sample of Finnish companies**
by default. Set `VALUATUM_DATA_API_URL` (and optionally `VALUATUM_DATA_API_KEY`) to
proxy the real Valuatum backend instead — it expects:

- `GET {base}/companies/search?q=&limit=` → `Company[]`
- `GET {base}/companies/{id}` → `Company`

## Production TODO before launch

- [ ] Connect `companies.ts` to the real Valuatum company/financials API.
- [ ] Add a Stripe **webhook** (`/api/stripe/webhook`) to trigger report generation on
      `checkout.session.completed` (more reliable than the success redirect).
- [ ] Forward `/api/import` uploads to the existing pipeline at
      `valuation.valuatum.com` and email the finished PDF to the receipt address.
- [ ] Replace placeholder legal copy in `app/legal/[doc]` with reviewed terms/privacy.
- [ ] Configure VAT handling in Stripe (`automatic_tax`) for EU B2C sales.

## Pricing config

All prices live in `src/lib/pricing.ts` and are overridable via env (EUR cents):

| Env                     | Default | Meaning                              |
| ----------------------- | ------- | ------------------------------------ |
| `PRICE_EXISTING_REPORT` | `10000` | €100 — we already hold the financials |
| `PRICE_IMPORT_REPORT`   | `15000` | €150 — user imports 5y statements     |
| `PRICE_SHARE_DISCOUNT`  | `5000`  | €50 off for sharing data (→ €100)     |
| `PRICE_CREDITSAFE_REPORT` | `20000` | €200 — we retrieve the financials     |
