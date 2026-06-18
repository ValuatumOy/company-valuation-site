import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { PricingCards } from "@/components/Pricing";

export default function HomePage() {
  return (
    <>
      <section id="search" className="dark-panel grid min-h-[calc(100svh-168px)] place-items-center text-white">
        <div className="absolute inset-0 bg-grid" aria-hidden="true" />
        <svg className="hero-chart" aria-hidden="true" viewBox="0 0 600 300" fill="none" preserveAspectRatio="none">
          <polyline
            points="0,240 60,220 120,205 180,178 240,160 300,118 360,100 420,78 480,60 540,42 600,20"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-300"
          />
          <polyline
            points="0,270 60,260 120,252 180,238 240,220 300,190 360,170 420,150 480,128 540,110 600,90"
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeWidth="1.5"
            className="text-brand-200"
          />
        </svg>

        <div className="container-shell relative z-10 py-20 text-center md:py-28">
          <div className="mx-auto max-w-[900px] animate-fade-up">
            <span className="pill-label">Private company valuation</span>
            <h1 className="mx-auto mt-8 max-w-[22rem] text-[2.35rem] font-light leading-[1.12] tracking-normal text-white md:max-w-[900px] md:text-[4.75rem]">
              AI valuation reports for any private company.
            </h1>
            <p className="mx-auto mt-6 max-w-xs text-base font-light leading-7 text-white/60 md:max-w-[680px] md:text-lg md:leading-8">
              Search a company and buy a ready report, import your own statements, or let
              us fetch the data for you. Each PDF includes DCF, comparables, reverse
              valuation, scenarios, risk assessment and a defensible valuation range.
            </p>

            <div className="mx-auto mt-10 flex w-full justify-center">
              <SearchBar />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xs text-white/50 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <TrustText>Report-ready companies</TrustText>
              <TrustText>PDF delivery</TrustText>
              <TrustText>No account required</TrustText>
              <TrustText>Built by Valuatum since 2000</TrustText>
            </div>

            <Link
              href="/reports"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
            >
              View available reports
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-5">
        <div className="container-shell flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
          <TrustBarItem label="Structured valuation framework" />
          <TrustBarItem label="Five-year financial history" />
          <TrustBarItem label="Secure Stripe checkout" />
          <TrustBarItem label="Import flow for missing companies" />
        </div>
      </section>

      <section className="section-shell border-b border-line bg-white">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <span className="section-eyebrow">Before you buy</span>
            <h2 className="section-headline">Inspect the output and test the range.</h2>
            <p className="section-sub">
              Use the free tools to understand the report format, the rough valuation
              scale and the market data behind the first estimate.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line md:grid-cols-3">
            <ToolLink
              href="/sample-report"
              label="01"
              title="Sample report"
              body="Open a draft Athlos Oy valuation report and inspect the PDF structure before checkout."
            />
            <ToolLink
              href="/valuation-calculator"
              label="02"
              title="Valuation calculator"
              body="Enter revenue, margin and net debt to see a rough market-multiple valuation range."
            />
            <ToolLink
              href="/market-multiples"
              label="03"
              title="Market multiples"
              body="Review the listed-company peer signals used to frame the calculator ranges."
            />
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="section-eyebrow">Report examples</span>
            <h2 className="section-headline">Choose the fastest route to a valuation.</h2>
            <p className="section-sub mx-auto">
              The product flow mirrors the source site: start with search, inspect the
              report route, then unlock or import the report.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SAMPLE_CARDS.map((card) => (
              <ReportSample key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">What is in the report</span>
            <h2 className="section-headline">A structured valuation case, not a data dump.</h2>
            <p className="section-sub">
              Each report is built around the sections an analyst would expect in a
              memo, with assumptions and conclusions shown clearly.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[24px] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {REPORT_SECTIONS.map((s) => (
              <div key={s.title} className="bg-white p-8 transition hover:bg-brand-50/60">
                <div className="mb-5 grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <MiniIcon />
                </div>
                <h3 className="text-sm font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm font-light leading-7 text-ink-700/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="dark-panel section-shell text-white">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="section-eyebrow section-eyebrow-light">How it works</span>
            <h2 className="section-headline section-headline-light">
              From company name to full report in minutes.
            </h2>
          </div>

          <div className="relative grid gap-10 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[18%] right-[18%] top-8 hidden h-px bg-gradient-to-r from-brand-500/20 via-brand-300/60 to-brand-500/20 md:block" />
            <Step n="01" title="Search any company">
              Look up a company by name or business ID and see instantly whether the
              financials are already available.
            </Step>
            <Step n="02" title="Buy, import or fetch">
              Buy a ready report; or, if the company is not in the catalogue, import five
              years of statements yourself — or let us fetch them via CreditSafe.
            </Step>
            <Step n="03" title="Receive the PDF">
              Get the analyst-style valuation report with full sections, assumptions and
              the final valuation range.
            </Step>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-line bg-brand-50/60">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Three ways in</span>
            <h2 className="section-headline">We have it, you bring it, or we fetch it.</h2>
            <p className="section-sub">
              Whichever route fits your data, the output is the same full report. Pick the
              one that matches what you have on hand.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Pillar title="On file — €100">
                Generated instantly from Valuatum's stored statements when the company is
                already covered.
              </Pillar>
              <Pillar title="Import — €150">
                Built from PDF statements you upload after payment. €100 if you share the
                figures.
              </Pillar>
              <Pillar title="We fetch — €200">
                No statements? We retrieve the official figures via CreditSafe and generate
                the report.
              </Pillar>
            </div>
          </div>
          <ReportMockup />
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-eyebrow">Case studies</span>
            <h2 className="section-headline">How a software company valuation was built.</h2>
            <p className="section-sub">
              See how the report moves from normalised financials to market multiples,
              DCF scenarios, risk signals and a final valuation range.
            </p>
            <Link href="/case-studies" className="primary-button mt-8">
              Read the case study
            </Link>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-line bg-line">
            <CasePreviewRow label="01" title="Normalise financials" value="5y history" />
            <CasePreviewRow label="02" title="Frame market reference" value="EV / EBITDA" />
            <CasePreviewRow label="03" title="Build scenarios" value="Bear / base / bull" />
            <CasePreviewRow label="04" title="Explain the range" value="Conclusion" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="section-headline">Simple, per-report pricing.</h2>
            <p className="section-sub mx-auto">
              No subscription. Pay for the company report you need.
            </p>
          </div>
          <PricingCards />
        </div>
      </section>

      <section className="section-shell border-t border-line bg-surface-muted">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Built on financial data</span>
            <h2 className="section-headline">Real methodology. Known limitations.</h2>
            <p className="section-sub">
              Valuatum has delivered financial analysis software since 2000. The AI
              handles structure and scale; the valuation framework comes from that
              analytical background.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Pillar title="Transparent assumptions">
                Growth, margin, discount rate and terminal value assumptions are shown in
                the report.
              </Pillar>
              <Pillar title="Not investment advice">
                Reports are informational materials, designed as a structured starting
                point for your own analysis.
              </Pillar>
            </div>
          </div>
          <div className="rounded-[24px] bg-ink-900 p-10 text-white">
            <p className="section-eyebrow section-eyebrow-light mb-6">About Valuatum</p>
            <p className="text-2xl font-light leading-10 text-white/88">
              Built by analysts, for analysts, since 2000.
            </p>
            <p className="mt-6 text-sm font-light leading-7 text-white/60">
              Valuatum has served credit institutions, stockbrokers, investment banks and
              asset managers for over 25 years. This product brings that expertise to
              self-serve private company valuation reports.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <Metric value="2000" label="Founded" />
              <Metric value="25+" label="Years" />
              <Metric value="PDF" label="Reports" />
            </div>
          </div>
        </div>
      </section>

      <section className="dark-panel section-shell text-center text-white">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <h2 className="mx-auto max-w-3xl text-[2.25rem] font-light leading-[1.15] tracking-normal md:text-[4rem]">
            Value a private company in the next five minutes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/60">
            Search the company, pay securely and receive the report route that matches
            your data availability.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="#search" className="primary-button">
              Search a company
            </Link>
            <Link href="/import" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
              Import statements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustText({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </span>
  );
}

function TrustBarItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-ink-700/50">
      <CheckCircle />
      {label}
    </span>
  );
}

function ToolLink({
  href,
  label,
  title,
  body,
}: {
  href: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <Link href={href} className="group bg-white p-8 transition hover:bg-brand-50/60">
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">
        {label}
      </span>
      <h3 className="mt-5 text-xl font-normal text-ink-900 transition group-hover:text-brand-600">
        {title}
      </h3>
      <p className="mt-3 text-sm font-light leading-7 text-ink-700/60">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:gap-3">
        Open <ArrowIcon />
      </span>
    </Link>
  );
}

function ReportSample({
  label,
  title,
  desc,
  tags,
  href,
}: {
  label: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link href={href} className="report-card group flex flex-col">
      <div className="report-thumb">
        <span className="absolute left-4 top-4 rounded bg-white/10 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
          {label}
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
          Valuation report
        </p>
        <h3 className="mt-2 text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm font-light leading-7 text-ink-700/60">{desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-brand-50 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-brand-700">
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:gap-3">
          Open flow <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="relative text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-brand-300/30 bg-brand-500/10 text-xl font-light text-brand-200">
        {n}
      </div>
      <h3 className="mt-6 text-lg font-medium text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-xs text-sm font-light leading-7 text-white/60">
        {children}
      </p>
    </div>
  );
}

function Pillar({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-brand-300 pt-5">
      <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm font-light leading-7 text-ink-700/60">{children}</p>
    </div>
  );
}

function CasePreviewRow({
  label,
  title,
  value,
}: {
  label: string;
  title: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b border-line bg-white p-5 last:border-b-0">
      <span className="font-mono text-xs font-semibold text-brand-600">{label}</span>
      <span className="text-sm font-semibold text-ink-900">{title}</span>
      <span className="text-right text-xs font-medium text-ink-700/45">{value}</span>
    </div>
  );
}

function ReportMockup() {
  return (
    <div className="report-card shadow-[0_20px_60px_rgba(7,23,47,0.12)]">
      <div className="flex items-center gap-3 bg-ink-900 p-6 text-white">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/20 text-brand-200">
          <MiniIcon />
        </div>
        <div>
          <p className="text-sm font-semibold">AI Valuation Report</p>
          <p className="text-xs text-white/50">Private company framework</p>
        </div>
        <span className="ml-auto rounded bg-brand-500/20 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-brand-200">
          Preview
        </span>
      </div>
      <div className="p-6">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <MockMetric value="5y" label="History" />
          <MockMetric value="DCF" label="Model" />
          <MockMetric value="3x" label="Scenarios" />
          <MockMetric value="PDF" label="Output" />
        </div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-600">
          Value drivers
        </p>
        <MockBar label="Base operations" value="52%" width="52%" />
        <MockBar label="Growth case" value="31%" width="31%" />
        <MockBar label="Risk discount" value="17%" width="17%" muted />
        <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm font-light leading-6 text-ink-700/70">
          The full PDF explains assumptions, valuation range and risks section by
          section.
        </div>
      </div>
    </div>
  );
}

function MockMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-surface-muted p-3">
      <div className="text-lg font-semibold text-ink-900">{value}</div>
      <div className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink-700/40">
        {label}
      </div>
    </div>
  );
}

function MockBar({
  label,
  value,
  width,
  muted = false,
}: {
  label: string;
  value: string;
  width: string;
  muted?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="w-32 text-xs text-ink-700/70">{label}</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
        <span
          className={`block h-full rounded-full ${muted ? "bg-line" : "bg-brand-500"}`}
          style={{ width }}
        />
      </span>
      <span className="w-10 text-right text-xs text-ink-700/50">{value}</span>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-light text-white">{value}</div>
      <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/40">
        {label}
      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-brand-500" aria-hidden="true">
      <circle cx="7" cy="7" r="5.8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.5 7.1 6.2 8.8 9.7 5.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MiniIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2.5" y="2.5" width="13" height="13" rx="2" />
      <path d="M6 9h6M6 12h4M6 6h6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SAMPLE_CARDS = [
  {
    label: "Ready",
    title: "Buy an existing report",
    desc: "When the statements are already in the dataset, the valuation report can be generated after checkout.",
    tags: ["Instant", "Dataset", "PDF"],
    href: "/reports",
  },
  {
    label: "Import",
    title: "Upload missing financials",
    desc: "If the company is not covered yet, bring five years of statements and the same report is generated from your files.",
    tags: ["Upload", "Parsing", "No account"],
    href: "/import",
  },
  {
    label: "Fetch",
    title: "We fetch the data for you",
    desc: "No statements at hand? We retrieve the official financials via CreditSafe and generate the same full report.",
    tags: ["CreditSafe", "No upload", "PDF"],
    href: "/import",
  },
];

const REPORT_SECTIONS = [
  {
    title: "Company snapshot",
    body: "Business ID, industry, location, headcount and a plain-English overview of what the company does.",
  },
  {
    title: "Five-year financials",
    body: "Income statement, balance sheet and cash flow normalised into a comparable five-year series.",
  },
  {
    title: "Key metrics and ratios",
    body: "Growth, margins, returns, leverage and working-capital efficiency with trend commentary.",
  },
  {
    title: "DCF valuation",
    body: "Explicit forecast, WACC build-up and terminal value, with the full assumption set shown.",
  },
  {
    title: "Comparables",
    body: "Trading multiples against relevant peers, mapped to a valuation range.",
  },
  {
    title: "Reverse valuation",
    body: "What the implied price requires the business to deliver, and whether those expectations are realistic.",
  },
  {
    title: "Scenario analysis",
    body: "Bull, base and bear cases with the drivers that move the valuation most.",
  },
  {
    title: "Risk assessment",
    body: "Liquidity, concentration, leverage and going-concern signals, scored and explained.",
  },
  {
    title: "Valuation conclusion",
    body: "A single defensible value range with the reasoning an analyst would stand behind.",
  },
];
