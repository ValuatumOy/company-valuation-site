import Link from "next/link";
import { PRICES, eur } from "@/lib/pricing";

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card
        name="Existing report"
        price={eur(PRICES.existingReport)}
        tagline="We already hold the financials"
        features={[
          "Instant generation from our dataset",
          "Full DCF, comparables & risk",
          "Five-year financial history",
          "PDF delivery — no account needed",
        ]}
        cta={{ href: "/#search", label: "Search a company" }}
      />
      <Card
        name="Import report"
        price={eur(PRICES.importReport)}
        tagline="Bring five years of statements"
        features={[
          "Pay first, then import — no registration",
          "We parse your PDF statements",
          "Same full report as existing",
          "Typically ready within minutes",
        ]}
        cta={{ href: "/import", label: "Start an import" }}
        featured
      />
      <Card
        name="Import + share"
        price={eur(PRICES.importReport - PRICES.shareDiscount)}
        tagline="Let us reuse your data"
        features={[
          `${eur(PRICES.shareDiscount)} off the import price`,
          "Your company joins our catalogue",
          "Helps others value the company too",
          "Same full report, lower price",
        ]}
        cta={{ href: "/import?share=1", label: "Import & save" }}
      />
    </div>
  );
}

function Card({
  name,
  price,
  tagline,
  features,
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: { href: string; label: string };
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-surface p-8 ${
        featured
          ? "border-brand-300 shadow-xl shadow-brand-600/10 ring-1 ring-brand-300"
          : "border-line"
      }`}
    >
      {featured && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-ink-900">{name}</h3>
      <p className="mt-1 text-sm text-ink-700/60">{tagline}</p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-ink-900">{price}</span>
        <span className="text-sm text-ink-700/60">/ report</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-ink-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
              <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`mt-7 inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          featured
            ? "bg-brand-600 text-white hover:bg-brand-700"
            : "border border-line text-ink-900 hover:border-brand-300 hover:text-brand-600"
        }`}
      >
        {cta.label}
      </Link>
    </div>
  );
}
