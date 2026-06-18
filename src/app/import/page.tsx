import { ImportRoutes } from "@/components/ImportRoutes";

export const metadata = { title: "Import statements and get a report" };

export default async function ImportPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;
  const companyName = name?.trim() || "your company";

  return (
    <>
      <section className="dark-panel py-16 text-center text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <span className="section-eyebrow section-eyebrow-light">Import and generate</span>
          <h1 className="section-headline section-headline-light">
            Not in our dataset? Two ways to get the report.
          </h1>
          <p className="section-sub mx-auto text-white/60">
            Upload five years of statements yourself, or let us fetch the official
            financials via CreditSafe. Either way we generate the full valuation report
            for {companyName}.
          </p>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="section-eyebrow">How it works</span>
            <div className="mt-8 space-y-5">
              <Step n="01" title="Choose your route">
                If you have the financial statement PDFs, upload them yourself. If you
                don't, we fetch the official statements from CreditSafe for you.
              </Step>
              <Step n="02" title="Pay securely">
                Payment is handled by Stripe and no account is required. The price covers
                parsing the statements and generating the report.
              </Step>
              <Step n="03" title="Add the statements">
                Upload five years of statements right after payment, or — with the
                fetch option — simply wait while we retrieve them.
              </Step>
              <Step n="04" title="We parse and generate">
                We extract the figures and build the same analyst-grade report you would
                get for a company already in our dataset, then email the PDF.
              </Step>
              <Step n="05" title="Optionally share your data">
                When you upload statements yourself, you can allow reuse of the figures
                and save €50 while helping expand the catalogue.
              </Step>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <ImportRoutes companyName={companyName} />
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
