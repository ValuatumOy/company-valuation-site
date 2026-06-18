import Link from "next/link";
import { ValuationCalculator } from "@/components/ValuationCalculator";

export const metadata = {
  title: "Indicative valuation calculator",
  description:
    "Estimate a rough private company valuation range using sector multiples before ordering a full AI valuation report.",
};

export default function ValuationCalculatorPage() {
  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow section-eyebrow-light">Valuation calculator</span>
            <h1 className="section-headline section-headline-light">
              Get a rough valuation range before the full report.
            </h1>
            <p className="section-sub text-white/60">
              Enter a few headline figures and compare the business against indicative
              listed-company market multiples. The result is a starting point, not a
              final valuation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell">
          <ValuationCalculator />
        </div>
      </section>

      <section className="border-t border-line bg-white py-16">
        <div className="container-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="section-eyebrow">Next step</span>
            <h2 className="text-3xl font-light tracking-normal text-ink-900">
              Turn the rough range into a structured valuation case.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#search" className="primary-button">
              Search a company
            </Link>
            <Link href="/sample-report" className="outline-button">
              View sample report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
