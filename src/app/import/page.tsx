import { BuyBox } from "@/components/BuyBox";

export const metadata = { title: "Import statements and get a report" };

export default async function ImportPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; share?: string }>;
}) {
  const { name, share } = await searchParams;
  const companyName = name?.trim() || "your company";

  return (
    <>
      <section className="dark-panel py-16 text-center text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <span className="section-eyebrow section-eyebrow-light">Import and generate</span>
          <h1 className="section-headline section-headline-light">
            Not in our dataset? Bring the numbers.
          </h1>
          <p className="section-sub mx-auto text-white/60">
            Pay for the import report, then upload five years of financial statements
            as PDFs. We generate the full valuation report for {companyName}.
          </p>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="section-eyebrow">How importing works</span>
            <div className="mt-8 space-y-5">
              <Step n="01" title="Pay the import price">
                The price covers parsing your statements and generating the report.
                Payment is handled by Stripe and no account is required.
              </Step>
              <Step n="02" title="Upload five years of statements">
                Right after payment you land on a secure upload page. Add the official
                financial statements for the last five years.
              </Step>
              <Step n="03" title="We parse and generate">
                We extract the figures and build the same analyst-grade report you would
                get for a company already in our dataset.
              </Step>
              <Step n="04" title="Optionally share your data">
                Allow reuse of the figures and receive the data-sharing discount while
                helping expand the catalogue.
              </Step>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <BuyBox kind="import" companyName={companyName} defaultShare={share === "1"} />
          </div>
        </div>
      </section>
    </>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="report-card flex gap-5 p-6">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-200 bg-brand-50 text-sm font-semibold text-brand-700">
        {n}
      </span>
      <div>
        <h3 className="text-lg font-normal text-ink-900">{title}</h3>
        <p className="mt-2 text-sm font-light leading-7 text-ink-700/70">{children}</p>
      </div>
    </div>
  );
}
