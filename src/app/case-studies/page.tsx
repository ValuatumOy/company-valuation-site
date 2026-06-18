import Link from "next/link";

export const metadata = {
  title: "Case studies",
  description:
    "Example valuation workflows showing how private company valuation reports can be used in different situations.",
};

const NEXT_CASES = [
  "How a succession-planning company valuation was built",
  "How a buyer screened a private acquisition target",
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow section-eyebrow-light">Case studies</span>
            <h1 className="section-headline section-headline-light">
              How a software company valuation was built.
            </h1>
            <p className="section-sub text-white/60">
              A practical example of how the report turns financial statements, market
              multiples and DCF assumptions into a defensible valuation range.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_360px]">
          <article className="max-w-3xl">
            <span className="section-eyebrow">Example workflow</span>
            <h2 className="text-4xl font-light leading-tight tracking-normal text-ink-900">
              From recurring revenue to valuation range.
            </h2>
            <p className="mt-6 text-lg font-light leading-8 text-ink-700/70">
              The company is a private B2B software business with steady recurring
              revenue, positive EBITDA and a narrow vertical market. The user wants a
              fast but structured view before deeper diligence.
            </p>

            <div className="mt-10 divide-y divide-line border-y border-line">
              <CaseStep
                n="01"
                title="Normalise the financials"
                body="The report starts by organising five years of revenue, EBITDA, working capital and balance sheet figures into a clean trend view."
              />
              <CaseStep
                n="02"
                title="Frame the market reference"
                body="Listed software and vertical SaaS peers provide a first market-multiple range, with a clear note that public-company multiples are only a context point."
              />
              <CaseStep
                n="03"
                title="Build the DCF case"
                body="Growth, margin, reinvestment and discount-rate assumptions are converted into base, bear and bull scenarios so the valuation is not a single unexplained number."
              />
              <CaseStep
                n="04"
                title="Explain the range"
                body="The final report compares DCF, market multiples and risk signals, then presents a valuation range with the main drivers a buyer or owner should challenge."
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="report-card p-7">
              <span className="section-eyebrow">Used for</span>
              <ul className="space-y-4 text-sm font-light leading-7 text-ink-700/70">
                <li>Pre-diligence buyer screening</li>
                <li>Founder valuation preparation</li>
                <li>Board discussion before a financing or sale process</li>
              </ul>
              <div className="mt-7 rounded-2xl border border-brand-200 bg-brand-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand-700">
                  Output
                </p>
                <p className="mt-2 text-sm font-light leading-7 text-ink-700/70">
                  A PDF report with financial trends, valuation methods, scenarios,
                  risks and a final defensible range.
                </p>
              </div>
              <Link href="/sample-report" className="primary-button mt-6 w-full">
                View sample report
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell border-y border-line bg-surface-muted">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <span className="section-eyebrow">Coming next</span>
            <h2 className="section-headline">More case studies can be added here.</h2>
            <p className="section-sub">
              The section is ready for additional scenarios once the content is agreed.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line md:grid-cols-2">
            {NEXT_CASES.map((title) => (
              <div key={title} className="bg-white p-7">
                <p className="text-sm font-semibold text-ink-900">{title}</p>
                <p className="mt-3 text-sm font-light leading-7 text-ink-700/60">
                  Draft placeholder for a future case study.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel py-16 text-center text-white">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <h2 className="mx-auto max-w-3xl text-4xl font-light leading-tight tracking-normal">
            Apply the same structure to your company.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#search" className="primary-button">
              Search a company
            </Link>
            <Link href="/valuation-calculator" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
              Try calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CaseStep({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="grid gap-5 py-7 sm:grid-cols-[56px_1fr]">
      <span className="grid h-12 w-12 place-items-center rounded-full border border-brand-200 bg-brand-50 text-sm font-semibold text-brand-700">
        {n}
      </span>
      <div>
        <h3 className="text-xl font-normal text-ink-900">{title}</h3>
        <p className="mt-2 text-sm font-light leading-7 text-ink-700/70">{body}</p>
      </div>
    </div>
  );
}
