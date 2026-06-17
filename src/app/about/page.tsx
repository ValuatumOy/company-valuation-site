import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10 max-w-4xl">
          <span className="section-eyebrow section-eyebrow-light">About Valuatum</span>
          <h1 className="section-headline section-headline-light">
            Built by analysts, since 2000.
          </h1>
          <p className="section-sub text-white/60">
            Valuatum has provided equity analysis tooling and data to banks, asset
            managers and advisors for over two decades.
          </p>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[1fr_360px]">
          <article className="report-card p-8">
            <div className="space-y-6 text-base font-light leading-8 text-ink-700/70">
              <p>
                This site brings that valuation engine to private companies as instant,
                self-serve reports.
              </p>
              <p>
                Most valuation tools stop at a dashboard of metrics. Ours is
                report-first: it builds the investment case, DCF, comparables, reverse
                valuation, scenarios and risk into a single document.
              </p>
              <p>
                For Finnish companies we already hold many financial statements, so a
                report can be one search and one payment away. For everything else, the
                import flow lets you bring your own statements with payment first and no
                registration.
              </p>
              <p>
                This is the modern successor to{" "}
                <a href="https://company-valuation.com" className="font-semibold text-brand-600 hover:underline">
                  company-valuation.com
                </a>
                , focused on AI-generated private company valuation reports.
              </p>
            </div>

            <Link href="/#search" className="primary-button mt-10">
              Value a company
            </Link>
          </article>

          <aside className="rounded-[24px] bg-ink-900 p-8 text-white">
            <p className="section-eyebrow section-eyebrow-light mb-5">Experience</p>
            <div className="space-y-6">
              <Metric value="2000" label="Founded in Helsinki" />
              <Metric value="25+" label="Years of analysis tooling" />
              <Metric value="SaaS" label="Financial modelling delivery" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
      <div className="text-4xl font-light tracking-normal">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-white/40">
        {label}
      </div>
    </div>
  );
}
