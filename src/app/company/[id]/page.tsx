import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompany } from "@/lib/companies";
import { BuyBox } from "@/components/BuyBox";

export const dynamic = "force-dynamic";

function fmtEur(n?: number) {
  if (!n) return "—";
  return new Intl.NumberFormat("en-IE", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n) + " €";
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = await getCompany(id);
  if (!company) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link href="/" className="text-sm text-ink-700/60 hover:text-brand-600">
        ← Back to search
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Left: company overview + report preview */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-ink-900">
              {company.name}
            </h1>
            {company.hasFinancials ? (
              <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-500">
                Financials on file
              </span>
            ) : (
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                Import required
              </span>
            )}
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            <Fact label="Business ID" value={company.businessId} />
            <Fact label="Location" value={company.city} />
            <Fact label="Industry" value={company.industry} />
            <Fact label="Revenue (latest)" value={fmtEur(company.latestRevenueEur)} />
          </dl>

          <h2 className="mt-10 text-lg font-semibold text-ink-900">
            What you&apos;ll receive
          </h2>
          <p className="mt-2 text-sm text-ink-700/70">
            A structured PDF valuation report for {company.name}, including:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Company snapshot & business overview",
              "Five-year normalised financials",
              "DCF valuation with full assumptions",
              "Trading comparables & peer multiples",
              "Reverse valuation",
              "Scenario analysis (bull / base / bear)",
              "Risk assessment & scoring",
              "Defensible valuation range",
            ].map((f) => (
              <li
                key={f}
                className="flex gap-2.5 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-700"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: sticky buy box */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {company.hasFinancials ? (
            <BuyBox kind="existing" companyId={company.id} companyName={company.name} />
          ) : (
            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-300 bg-brand-50 p-5 text-sm text-brand-700">
                We don&apos;t hold financial statements for {company.name} yet. Buy the
                import report and you can upload five years of statements right after
                payment.
              </div>
              <BuyBox kind="import" companyId={company.id} companyName={company.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface p-4">
      <dt className="text-xs uppercase tracking-wide text-ink-700/50">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-ink-900">{value}</dd>
    </div>
  );
}
