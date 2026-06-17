import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        Built by analysts, since 2000
      </h1>
      <p className="mt-5 text-lg text-ink-700/70">
        Valuatum has provided equity analysis tooling and data to banks, asset managers
        and advisors for over two decades. This site brings that same valuation engine
        to private companies — as instant, self-serve reports.
      </p>
      <div className="mt-10 space-y-6 text-ink-700/80">
        <p>
          Most valuation tools stop at a dashboard of metrics. Ours is report-first: it
          builds the investment case — DCF, comparables, reverse valuation, scenarios
          and risk — into a single document an analyst would stand behind.
        </p>
        <p>
          For Finnish companies we already hold the financial statements, so a full
          report is one search and one payment away. For everything else, our production
          import pipeline at{" "}
          <a href="https://valuation.valuatum.com/" className="font-medium text-brand-600 hover:underline">
            valuation.valuatum.com
          </a>{" "}
          lets you bring your own statements — here, with payment first and no
          registration.
        </p>
        <p>
          This is the modern successor to{" "}
          <a href="https://company-valuation.com" className="font-medium text-brand-600 hover:underline">
            company-valuation.com
          </a>
          , focused on AI-generated private company valuation reports.
        </p>
      </div>

      <Link
        href="/#search"
        className="mt-10 inline-flex rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
      >
        Value a company
      </Link>
    </div>
  );
}
