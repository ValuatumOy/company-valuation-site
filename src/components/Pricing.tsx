import Link from "next/link";
import { PRICES, eur, quote } from "@/lib/pricing";

export function PricingCards() {
  return (
    <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-3">
      <Card
        name="Data on file"
        price={eur(PRICES.existingReport)}
        tagline="We already hold the statements"
        description="The company is in our dataset, so the report is generated instantly after checkout. No upload needed."
        features={[
          "Instant generation",
          "Five-year financial history",
          "DCF, comparables and risk",
          "No account required",
        ]}
        cta={{ href: "/#search", label: "Search a company" }}
      />
      <Card
        name="Import your statements"
        price={eur(PRICES.importReport)}
        note={`${eur(quote("import", true).total)} if you let us reuse the figures`}
        tagline="You have the PDF statements"
        description="Upload five years of official statements after payment and receive the same analyst-style report."
        features={[
          "Secure upload step",
          "Statement parsing included",
          `Save ${eur(PRICES.shareDiscount)} by sharing data`,
          "Same valuation framework",
        ]}
        cta={{ href: "/import", label: "Start an import" }}
        featured
      />
      <Card
        name="We fetch the data"
        price={eur(PRICES.creditsafeReport)}
        tagline="No statements at hand"
        description="Don't have the statements? We retrieve the official financials via CreditSafe and generate the report for you."
        features={[
          "We source the statements",
          "Nothing to upload",
          "Same full report",
          "No account required",
        ]}
        cta={{ href: "/import", label: "Get the data fetched" }}
      />
    </div>
  );
}

function Card({
  name,
  price,
  note,
  tagline,
  description,
  features,
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  note?: string;
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
          Most flexible
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
      {note && <p className="mt-2 text-xs font-medium text-brand-600">{note}</p>}
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
