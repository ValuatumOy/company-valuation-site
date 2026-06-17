import Link from "next/link";
import { featuredCompanies } from "@/lib/companies";
import { SearchBar } from "@/components/SearchBar";

export const metadata = { title: "Browse reports" };
export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  const companies = await featuredCompanies(12);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Browse valuation reports
        </h1>
        <p className="mt-3 text-ink-700/70">
          Search any company to check availability, or pick one of the examples below.
          Companies marked “Report ready” already have financials on file.
        </p>
      </div>

      <div className="mt-8">
        <SearchBar />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((c) => (
          <Link
            key={c.id}
            href={`/company/${c.id}`}
            className="group rounded-2xl border border-line bg-surface p-6 transition hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-ink-900 group-hover:text-brand-600">
                {c.name}
              </h3>
              {c.hasFinancials ? (
                <span className="shrink-0 rounded-full bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-500">
                  Ready
                </span>
              ) : (
                <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                  Import
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-ink-700/60">
              {c.city} · {c.industry}
            </p>
            <p className="mt-4 text-sm font-medium text-brand-600">
              View report →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
