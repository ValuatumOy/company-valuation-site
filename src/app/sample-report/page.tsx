import Image from "next/image";
import Link from "next/link";

const REPORT_URL = "/sample-reports/athlos-ai-valuation-report.pdf";
const PAGES = Array.from(
  { length: 22 },
  (_, i) => `/sample-reports/athlos-pages/page-${String(i + 1).padStart(2, "0")}.png`,
);

export const metadata = {
  title: "Sample valuation report",
  description:
    "View a sample AI valuation report before buying a private company valuation report.",
};

export default function SampleReportPage() {
  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow section-eyebrow-light">Sample report</span>
            <h1 className="section-headline section-headline-light">
              See the report format before checkout.
            </h1>
            <p className="section-sub text-white/60">
              This draft Athlos Oy report shows the structure, level of detail and
              analytical flow. The final commercial report template may still change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={REPORT_URL} className="primary-button" target="_blank" rel="noreferrer">
                Open PDF
              </a>
              <Link href="/#search" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
                Get a report
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-12 md:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="report-card p-7">
              <span className="section-eyebrow">Included sections</span>
              <ul className="space-y-3 text-sm font-light leading-7 text-ink-700/70">
                <li>Company snapshot and financial history</li>
                <li>Key ratios and profitability trends</li>
                <li>DCF valuation and assumptions</li>
                <li>Peer comparison and market multiples</li>
                <li>Reverse valuation, scenarios and risks</li>
                <li>Final valuation range and conclusion</li>
              </ul>
              <p className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-xs font-medium leading-6 text-brand-700">
                Draft sample only. Use it to inspect the report experience before
                ordering a live company report.
              </p>
              <a href={REPORT_URL} className="outline-button mt-6 w-full" target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </div>
          </aside>

          <div className="rounded-[24px] border border-line bg-ink-900 p-3 shadow-[0_20px_60px_rgba(7,23,47,0.14)] md:p-5">
            <div className="h-[78svh] min-h-[560px] snap-y snap-mandatory overflow-y-auto rounded-[18px] bg-surface-muted p-4 md:p-6">
              <div className="space-y-6">
                {PAGES.map((src, index) => (
                  <figure
                    key={src}
                    className="flex h-[calc(78svh-3rem)] min-h-[500px] snap-start snap-always flex-col items-center justify-center gap-3"
                  >
                    <div className="flex max-h-full max-w-full justify-center">
                      <Image
                        src={src}
                        alt={`Athlos Oy sample valuation report page ${index + 1}`}
                        width={1190}
                        height={1684}
                        sizes="(min-width: 1280px) 720px, (min-width: 1024px) calc(100vw - 460px), calc(100vw - 4rem)"
                        className="max-h-[calc(78svh-5.5rem)] w-auto max-w-full rounded-sm bg-white shadow-[0_16px_42px_rgba(7,23,47,0.18)] ring-1 ring-line"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                    <figcaption className="text-xs font-medium text-ink-700/45">
                      Page {index + 1} / {PAGES.length}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
