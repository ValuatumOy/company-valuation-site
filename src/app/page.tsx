import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { PricingCards } from "@/components/Pricing";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section id="search" className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="glow absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Analyst-grade reports · Built by Valuatum since 2000
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              AI valuation reports for{" "}
              <span className="bg-gradient-to-r from-brand-300 to-accent-400 bg-clip-text text-transparent">
                any private company
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-brand-100/80">
              Search any company. If we hold the financials, your full valuation
              report is one click away. If not, import five years of statements and
              we&apos;ll generate it. DCF, comparables, reverse valuation and risk —
              from €10.
            </p>

            <div className="mt-9 flex justify-center">
              <SearchBar />
            </div>
            <p className="mt-3 text-sm text-brand-100/60">
              Try “Rovio”, “Supercell”, “Wolt” — or any business ID.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Logos / trust strip */}
      <section className="border-b border-line bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-700/50">
            The same valuation engine trusted across Nordic equity research
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="How it works"
          title="From company name to full report in minutes"
          subtitle="No registration required. Pay first, then receive your report — or import and generate."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <StepCard
            n={1}
            title="Search any company"
            body="Look up any company by name or business ID. We tell you instantly whether the financials are already in our dataset."
          />
          <StepCard
            n={2}
            title="Buy — or import"
            body="If we hold the data, buy the report for €10. If not, import five years of statements for €15 and we build it from your numbers."
          />
          <StepCard
            n={3}
            title="Get your report"
            body="An analyst-grade PDF valuation: DCF, multiples, reverse valuation, scenarios and risk — delivered in minutes, no account needed."
          />
        </div>
      </section>

      {/* ------------------------------------------------------- Two paths card */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Two ways in"
            title="We have the data, or you bring it"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <PathCard
              tag="Already in our dataset"
              tagClass="bg-accent-500/10 text-accent-500"
              title="Buy an existing report"
              price="€10"
              body="Thousands of Finnish companies already have financial statements in our system. Search, confirm, pay — the report generates instantly."
              points={[
                "Instant generation from verified filings",
                "No upload, no waiting",
                "Five-year financial history included",
              ]}
              cta={{ href: "#search", label: "Search a company" }}
            />
            <PathCard
              tag="Not in our dataset yet"
              tagClass="bg-brand-50 text-brand-600"
              title="Import &amp; generate"
              price="€15"
              body="Drop in five years of financial statements as PDFs. We import them after payment — no registration — and generate the same full report."
              points={[
                "Pay first, then import — no account needed",
                "Share your data for €2 off and help expand the catalogue",
                "Same analyst-grade output as existing reports",
              ]}
              cta={{ href: "/import", label: "Start an import" }}
              featured
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Report contents */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="What's inside"
          title="Everything an analyst would put in the memo"
          subtitle="Each report is a structured PDF — the investment case, not just a data dump."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {REPORT_SECTIONS.map((s) => (
            <div key={s.title} className="bg-surface p-6">
              <h3 className="font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-700/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------- Pricing */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, per-report pricing"
            subtitle="No subscription. Pay for the report you need."
          />
          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Final CTA */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="glow absolute inset-x-0 -top-20 h-[360px]" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Value a private company in the next five minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100/80">
            Search the company. Pay. Get the report. That&apos;s it.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="#search"
              className="rounded-full bg-white px-6 py-3 font-semibold text-ink-900 transition hover:bg-brand-50"
            >
              Search a company
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* --------------------------------------------------------------- primitives */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-ink-700/70">{subtitle}</p>}
    </div>
  );
}

function StepCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 font-bold text-white">
        {n}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm text-ink-700/70">{body}</p>
    </div>
  );
}

function PathCard({
  tag,
  tagClass,
  title,
  price,
  body,
  points,
  cta,
  featured = false,
}: {
  tag: string;
  tagClass: string;
  title: string;
  price: string;
  body: string;
  points: string[];
  cta: { href: string; label: string };
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-surface p-8 ${
        featured ? "border-brand-300 ring-1 ring-brand-300" : "border-line"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagClass}`}>
          {tag}
        </span>
        <span className="text-2xl font-bold text-ink-900">{price}</span>
      </div>
      <h3
        className="mt-5 text-xl font-semibold text-ink-900"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="mt-2 text-sm text-ink-700/70">{body}</p>
      <ul className="mt-5 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm text-ink-700">
            <Check />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`mt-7 inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          featured
            ? "bg-brand-600 text-white hover:bg-brand-700"
            : "border border-line text-ink-900 hover:border-brand-300 hover:text-brand-600"
        }`}
      >
        {cta.label}
      </Link>
    </div>
  );
}

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-accent-500"
    >
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    title: "Key metrics & ratios",
    body: "Growth, margins, returns, leverage and working-capital efficiency with trend commentary.",
  },
  {
    title: "DCF valuation",
    body: "Explicit forecast, WACC build-up and terminal value, with the full assumption set shown.",
  },
  {
    title: "Comparables",
    body: "Trading multiples against relevant listed and private peers, mapped to a valuation range.",
  },
  {
    title: "Reverse valuation",
    body: "What the implied price requires the business to deliver — the expectations baked into the number.",
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
