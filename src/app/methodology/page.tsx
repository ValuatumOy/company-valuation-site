export const metadata = { title: "Methodology" };

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        Methodology
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        How the valuations are built
      </h1>
      <p className="mt-4 text-lg text-ink-700/70">
        Every report combines Valuatum&apos;s structured financial data with a
        standardised valuation framework — the same logic professional analysts have
        used in our tools since 2000, applied automatically and explained in full.
      </p>

      <div className="mt-12 space-y-10">
        <Block title="1. Data foundation">
          For companies in our dataset we use official Finnish financial statements,
          normalised into a comparable five-year series. For imported companies we
          extract the same figures from the statements you upload. Either way the report
          shows the underlying numbers, so nothing is a black box.
        </Block>
        <Block title="2. Discounted cash flow">
          We build an explicit forecast from historical performance, derive a
          WACC-based discount rate, and add a terminal value. Every assumption — growth,
          margins, capital intensity, discount rate — is printed in the report so it can
          be challenged.
        </Block>
        <Block title="3. Market comparables">
          The company is benchmarked against relevant listed and private peers on
          revenue, EBITDA and earnings multiples, producing a market-implied range that
          sits alongside the DCF.
        </Block>
        <Block title="4. Reverse valuation">
          We invert the model to show what the implied valuation actually requires the
          business to deliver — a sanity check on whether the number is realistic.
        </Block>
        <Block title="5. Scenarios & risk">
          Bull, base and bear cases isolate the drivers that matter most, and a
          structured risk assessment scores liquidity, leverage, concentration and
          going-concern signals.
        </Block>
        <Block title="6. Conclusion">
          The report lands on a single defensible valuation range with the reasoning
          behind it — the investment case, not just a dashboard of metrics.
        </Block>
      </div>

      <p className="mt-12 rounded-xl border border-line bg-surface-muted p-5 text-sm text-ink-700/70">
        Reports are generated for informational purposes only and do not constitute
        investment advice or a recommendation to buy or sell any security.
      </p>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink-900">{title}</h2>
      <p className="mt-3 text-ink-700/70">{children}</p>
    </section>
  );
}
