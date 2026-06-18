import Link from "next/link";
import { SECTOR_RANGES, WISDOM_PEERS } from "@/lib/marketMultiples";

export const metadata = {
  title: "Market multiples",
  description:
    "Review indicative listed-company peer data used to frame private company valuation ranges.",
};

export default function MarketMultiplesPage() {
  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow section-eyebrow-light">Market multiples</span>
            <h1 className="section-headline section-headline-light">
              Listed-company signals for private-company context.
            </h1>
            <p className="section-sub text-white/60">
              Public peers are not perfect matches for private companies, but they help
              frame a useful first valuation range when the limitations are clear.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <span className="section-eyebrow">Current prototype ranges</span>
            <h2 className="section-headline">Sector ranges used by the calculator.</h2>
            <p className="section-sub">
              These ranges are intentionally broad. They are designed for orientation
              before the full report applies company-specific analysis.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line lg:grid-cols-4">
            {SECTOR_RANGES.map((s) => (
              <div key={s.key} className="bg-white p-6">
                <p className="text-sm font-semibold text-ink-900">{s.label}</p>
                <p className="mt-2 min-h-16 text-sm font-light leading-7 text-ink-700/60">
                  {s.description}
                </p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ink-700/40">
                    EV / EBITDA
                  </p>
                  <p className="mt-2 text-3xl font-light tracking-normal text-ink-900">
                    {s.evEbitdaLow}x - {s.evEbitdaHigh}x
                  </p>
                </div>
                <p className="mt-3 text-xs text-ink-700/45">
                  Revenue reference: {s.revenueLow}x - {s.revenueHigh}x
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-line bg-surface-muted">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <span className="section-eyebrow">Wisdom peer snapshot</span>
            <h2 className="section-headline">Example listed peers behind the thinking.</h2>
            <p className="section-sub">
              The first peer set uses Wisdom consensus snapshots and latest quotes
              retrieved for a narrow Nordic-listed universe. Figures are shown in EURm
              except share prices.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[24px] border border-line bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <Th>Company</Th>
                  <Th>Sector</Th>
                  <Th>Price</Th>
                  <Th>2026 sales</Th>
                  <Th>2026 EBITDA</Th>
                  <Th>EBITDA margin</Th>
                  <Th>Updated</Th>
                </tr>
              </thead>
              <tbody>
                {WISDOM_PEERS.map((p) => (
                  <tr key={p.ticker} className="border-t border-line">
                    <Td>
                      <span className="font-semibold text-ink-900">{p.company}</span>
                      <span className="mt-1 block text-xs text-ink-700/45">{p.ticker}</span>
                    </Td>
                    <Td>{p.sector}</Td>
                    <Td>{p.price}</Td>
                    <Td>{p.sales2026.toFixed(1)}</Td>
                    <Td>{p.ebitda2026.toFixed(1)}</Td>
                    <Td>{p.ebitdaMargin.toFixed(1)}%</Td>
                    <Td>{p.updated}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 max-w-3xl text-xs font-light leading-6 text-ink-700/55">
            Public-company multiples can overstate private-company values because listed
            companies often have better liquidity, scale, disclosure and access to
            capital. The full report adjusts the market lens with DCF, financial quality
            and risk analysis.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="section-eyebrow">Use the ranges</span>
            <h2 className="text-3xl font-light tracking-normal text-ink-900">
              Try the calculator, then order the full report.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/valuation-calculator" className="primary-button">
              Open calculator
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

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-5 py-4 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white/55">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-5 py-4 text-ink-700/70">{children}</td>;
}
