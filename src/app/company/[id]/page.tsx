import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompany } from "@/lib/companies";
import { BuyBox } from "@/components/BuyBox";

export const dynamic = "force-dynamic";

function fmtEur(n?: number) {
  if (!n) return "-";
  return `${new Intl.NumberFormat("en-IE", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n)} EUR`;
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
    <>
      <section className="dark-panel py-12 text-white md:py-16">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <Link href="/reports" className="text-sm text-white/50 transition hover:text-white">
            Back to reports
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <h1 className="text-[2.35rem] font-light leading-[1.12] tracking-normal md:text-[4rem]">
              {company.name}
            </h1>
            {company.hasFinancials ? (
              <span className="rounded bg-brand-500/20 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-brand-200">
                Financials on file
              </span>
            ) : (
              <span className="rounded bg-white/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white/60">
                Import required
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <dl className="grid overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-4">
              <Fact label="Business ID" value={company.businessId} />
              <Fact label="Location" value={company.city} />
              <Fact label="Industry" value={company.industry} />
              <Fact label="Revenue" value={fmtEur(company.latestRevenueEur)} />
            </dl>

            <div className="report-card mt-10 p-8">
              <span className="section-eyebrow">Report contents</span>
              <h2 className="text-3xl font-light leading-tight text-ink-900">
                What you will receive
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-light leading-7 text-ink-700/70">
                A structured PDF valuation report for {company.name}, modelled as a
                full analytical memo rather than a metrics dashboard.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 rounded-2xl border border-line bg-surface-muted px-4 py-3 text-sm text-ink-900"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            {company.hasFinancials ? (
              <BuyBox kind="existing" companyId={company.id} companyName={company.name} />
            ) : (
              <div className="space-y-5">
                <div className="rounded-[24px] border border-brand-200 bg-brand-50 p-5 text-sm font-light leading-7 text-ink-700/70">
                  We do not hold financial statements for {company.name} yet. Buy the
                  import report and upload five years of statements right after payment.
                </div>
                <BuyBox kind="import" companyId={company.id} companyName={company.name} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-5">
      <dt className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ink-700/40">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-semibold text-ink-900">{value}</dd>
    </div>
  );
}

const FEATURES = [
  "Company snapshot and business overview",
  "Five-year normalised financials",
  "DCF valuation with full assumptions",
  "Trading comparables and peer multiples",
  "Reverse valuation",
  "Scenario analysis",
  "Risk assessment and scoring",
  "Defensible valuation range",
];
