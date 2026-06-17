export const metadata = { title: "Methodology" };

export default function MethodologyPage() {
  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10 max-w-4xl">
          <span className="section-eyebrow section-eyebrow-light">Methodology</span>
          <h1 className="section-headline section-headline-light">
            How the valuations are built.
          </h1>
          <p className="section-sub text-white/60">
            Every report combines Valuatum's structured financial data with a
            standardised valuation framework, applied automatically and explained in
            full.
          </p>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell mx-auto max-w-3xl">
          <div className="space-y-5">
            <Block n="01" title="Data foundation">
              For companies in our dataset we use official financial statements,
              normalised into a comparable five-year series. For imported companies we
              extract the same figures from the statements you upload.
            </Block>
            <Block n="02" title="Discounted cash flow">
              We build an explicit forecast from historical performance, derive a
              WACC-based discount rate, and add a terminal value. The main assumptions
              are printed in the report.
            </Block>
            <Block n="03" title="Market comparables">
              The company is benchmarked against relevant peers on revenue, EBITDA and
              earnings multiples, producing a market-implied range alongside the DCF.
            </Block>
            <Block n="04" title="Reverse valuation">
              The model is inverted to show what the implied valuation requires the
              business to deliver.
            </Block>
            <Block n="05" title="Scenarios and risk">
              Bull, base and bear cases isolate the drivers that matter most, while the
              risk assessment scores liquidity, leverage, concentration and going-concern
              signals.
            </Block>
            <Block n="06" title="Conclusion">
              The report lands on a defensible valuation range with the reasoning behind
              it.
            </Block>
          </div>

          <p className="mt-10 rounded-[24px] border border-line bg-white p-6 text-sm font-light leading-7 text-ink-700/70">
            Reports are generated for informational purposes only and do not constitute
            investment advice or a recommendation to buy or sell any security.
          </p>
        </div>
      </section>
    </>
  );
}

function Block({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="report-card p-7">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600">{n}</p>
      <h2 className="mt-3 text-2xl font-light text-ink-900">{title}</h2>
      <p className="mt-3 text-sm font-light leading-7 text-ink-700/70">{children}</p>
    </section>
  );
}
