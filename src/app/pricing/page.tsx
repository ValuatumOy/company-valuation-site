import { PricingCards } from "@/components/Pricing";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <section className="dark-panel py-16 text-center text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <span className="section-eyebrow section-eyebrow-light">Pricing</span>
          <h1 className="section-headline section-headline-light">
            Simple, per-report pricing.
          </h1>
          <p className="section-sub mx-auto text-white/60">
            No subscription, no seats. Pay only for the report you need — from €100.
            Prices are shown in EUR, with VAT handled at checkout where applicable.
          </p>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <PricingCards />
        </div>
      </section>

      <section className="section-shell border-t border-line bg-surface-muted">
        <div className="container-shell mx-auto max-w-3xl">
          <span className="section-eyebrow">Pricing FAQ</span>
          <h2 className="section-headline">Common pricing questions.</h2>
          <dl className="mt-10 space-y-4">
            <Item q="Which price applies to me?">
              €100 if we already hold the company's statements. If we don't: €150 when
              you upload the statements yourself, or €100 if you let us reuse the figures.
              €200 if you have no statements and we fetch them for you via CreditSafe.
            </Item>
            <Item q="Why is the import report more than the on-file report?">
              The import price covers parsing five years of financial statements from
              your PDFs before the report can be generated. When we already hold the
              data, there is nothing to import — so it costs less.
            </Item>
            <Item q="How does the data-sharing discount work?">
              If you let us reuse an imported company's figures, we take €50 off and add
              the company to the catalogue so it can be valued again later. Only the
              financial statement figures are stored — bringing the import down to €100.
            </Item>
            <Item q="What is the €200 CreditSafe option?">
              If you don't have the financial statements at all, we retrieve the official
              figures from CreditSafe on your behalf and generate the report. The price
              covers the data we purchase from the provider — you upload nothing.
            </Item>
            <Item q="Do I need an account?">
              No. Payment is handled by Stripe and the report, or the upload step for
              imports, is delivered without registration.
            </Item>
          </dl>
        </div>
      </section>
    </>
  );
}

function Item({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="report-card p-6">
      <dt className="text-base font-semibold text-ink-900">{q}</dt>
      <dd className="mt-2 text-sm font-light leading-7 text-ink-700/70">{children}</dd>
    </div>
  );
}
