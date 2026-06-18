import Link from "next/link";
import { featuredCompanies } from "@/lib/companies";
import { SearchBar } from "@/components/SearchBar";

export const metadata = { title: "Browse reports" };
export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  const companies = await featuredCompanies(12);

  return (
    <>
      <section
        className="dark-panel relative z-20 py-16 text-white md:py-20"
        style={{ overflow: "visible" }}
      >
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <div className="max-w-2xl">
            <span className="section-eyebrow section-eyebrow-light">Reports</span>
            <h1 className="section-headline section-headline-light">
              Browse valuation reports.
            </h1>
            <p className="section-sub text-white/60">
              Search any company to check availability, or pick one of the examples
              below. Ready reports already have financials on file.
            </p>
          </div>
          <div className="mt-10">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="section-shell relative z-0 bg-surface-muted">
        <div className="container-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <Link key={c.id} href={`/company/${c.id}`} className="report-card group flex flex-col">
                <div className="report-thumb">
                  <span className="absolute left-4 top-4 rounded bg-white/10 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
                    {c.hasFinancials ? "Ready" : "Import"}
                  </span>
                  <div className="report-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600">
                    {c.city}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900 transition group-hover:text-brand-600">
                    {c.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm font-light leading-7 text-ink-700/60">
                    {c.industry}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    {c.hasFinancials ? (
                      <span className="rounded bg-brand-50 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-brand-700">
                        Report ready
                      </span>
                    ) : (
                      <span className="rounded bg-surface-muted px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink-700/60">
                        Import needed
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:gap-3">
                      View <ArrowIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
