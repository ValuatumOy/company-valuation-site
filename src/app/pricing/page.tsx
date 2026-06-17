import { PricingCards } from "@/components/Pricing";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Simple, per-report pricing
        </h1>
        <p className="mt-4 text-ink-700/70">
          No subscription, no seats. Pay only for the reports you need. Prices in EUR,
          VAT shown at checkout where applicable.
        </p>
      </div>

      <div className="mt-12">
        <PricingCards />
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-xl font-semibold text-ink-900">Pricing FAQ</h2>
        <dl className="mt-6 space-y-6">
          <Item q="Why is the import report more expensive?">
            The €15 import price covers parsing five years of financial statements from
            your PDFs before the report can be generated. When we already hold the data,
            there&apos;s nothing to import, so the report is €10.
          </Item>
          <Item q="How does the data-sharing discount work?">
            If you let us reuse a company&apos;s figures, we take €5 off and add the
            company to our catalogue so it can be valued again later. Only the financial
            statement figures are stored.
          </Item>
          <Item q="Do I need an account?">
            No. Payment is handled by Stripe and the report (or the upload step, for
            imports) is delivered without registration.
          </Item>
        </dl>
      </div>
    </div>
  );
}

function Item({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <dt className="font-semibold text-ink-900">{q}</dt>
      <dd className="mt-2 text-sm text-ink-700/70">{children}</dd>
    </div>
  );
}
