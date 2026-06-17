import Link from "next/link";
import { PRICES, eur } from "@/lib/pricing";

export function PricingCards() {
  return (
    <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-3">
      <Card
        name="Existing report"
        price={eur(PRICES.existingReport)}
        tagline="Financials already available"
        description="Instant report generation from Valuatum's structured dataset. Full PDF, no account required."
        features={[
          "DCF, comparables and risk",
          "Five-year financial history",
          "Reverse valuation logic",
          "Delivered after checkout",
        ]}
        cta={{ href: "/#search", label: "Search a company" }}
      />
      <Card
        name="Import report"
        price={eur(PRICES.importReport)}
        tagline="Bring five years of statements"
        description="Upload official PDF statements after payment and receive the same analyst-style report."
        features={[
          "Secure upload step",
          "Statement parsing included",
          "Same valuation framework",
          "No registration needed",
        ]}
        cta={{ href: "/import", label: "Start an import" }}
        featured
      />
      <Card
        name="Import + share"
        price={eur(PRICES.importReport - PRICES.shareDiscount)}
        tagline="Share reusable figures"
        description="Let Valuatum add the figures to the catalogue and save on the imported report."
        features={[
          `${eur(PRICES.shareDiscount)} discount`,
          "Company joins catalogue",
          "Only figures are stored",
          "Same full report",
        ]}
        cta={{ href: "/import?share=1", label: "Import and save" }}
      />
    </div>
  );
}

function Card({
  name,
  price,
  tagline,
  description,
  features,
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  cta: { href: string; label: string };
  featured?: boolean;
}) {
  return (
    <div
      className={`report-card relative flex flex-col p-8 ${
        featured ? "border-brand-500 shadow-[0_0_0_1px_rgba(47,127,232,0.55),0_12px_40px_rgba(47,127,232,0.13)]" : ""
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-0 rounded-b bg-brand-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white">
          Popular
        </span>
      )}
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700/50">
        {name}
      </p>
      <div className="mt-5 flex items-end gap-2">
        <span className="text-5xl font-light leading-none tracking-normal text-ink-900">
          {price}
        </span>
      </div>
      <p className="mt-2 text-xs text-ink-700/50">{tagline}</p>
      <p className="mt-5 text-sm font-light leading-7 text-ink-700/65">{description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink-900">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={cta.href} className={featured ? "primary-button mt-8 w-full" : "outline-button mt-8 w-full"}>
        {cta.label}
      </Link>
    </div>
  );
}
