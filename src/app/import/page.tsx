import { BuyBox } from "@/components/BuyBox";

export const metadata = { title: "Import statements & get a report" };

export default async function ImportPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; share?: string }>;
}) {
  const { name, share } = await searchParams;
  const companyName = name?.trim() || "your company";

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Import &amp; generate
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Not in our dataset? Bring the numbers.
        </h1>
        <p className="mt-4 text-ink-700/70">
          Pay for the import report and you&apos;ll go straight to a secure upload step
          — no registration. Drop in five years of financial statements as PDFs and we
          generate the full valuation report for {companyName}.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="text-lg font-semibold text-ink-900">How importing works</h2>
          <ol className="mt-5 space-y-5">
            <Step n={1} title="Pay the import price">
              €15 covers parsing your statements and generating the report. Payment is
              handled by Stripe — no account required.
            </Step>
            <Step n={2} title="Upload five years of statements">
              Right after payment you land on a secure upload page. Add the official
              financial statements (PDF) for the last five years.
            </Step>
            <Step n={3} title="We parse & generate">
              We extract the figures and build the same analyst-grade report you&apos;d
              get for a company already in our dataset.
            </Step>
            <Step n={4} title="Optionally share your data">
              Allow us to reuse the figures and get €2 off — the company is added to our
              catalogue so it can be valued again later.
            </Step>
          </ol>

          <p className="mt-8 rounded-xl border border-line bg-surface-muted p-4 text-sm text-ink-700/70">
            The import capability already runs in production behind login at{" "}
            <a
              href="https://valuation.valuatum.com/"
              className="font-medium text-brand-600 hover:underline"
            >
              valuation.valuatum.com
            </a>
            . Here it&apos;s reordered so payment comes first and no registration is
            needed.
          </p>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <BuyBox
            kind="import"
            companyName={companyName}
            defaultShare={share === "1"}
          />
        </div>
      </div>
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-sm font-bold text-white">
        {n}
      </span>
      <div>
        <h3 className="font-semibold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm text-ink-700/70">{children}</p>
      </div>
    </li>
  );
}
