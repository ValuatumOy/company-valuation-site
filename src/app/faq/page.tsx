export const metadata = { title: "FAQ" };

const FAQ = [
  {
    q: "Which companies can I get a report for?",
    a: "Any company. If we already hold its financial statements, the report is generated after checkout. If not, you can import five years of statements and generate the same report.",
  },
  {
    q: "Do I need to register?",
    a: "No. Payment is handled by Stripe and the report, or the secure upload step for imports, is delivered without creating an account.",
  },
  {
    q: "How does the import flow work?",
    a: "You pay first, then land on a secure upload page where you add five years of financial statements as PDFs. We parse the figures and generate the report.",
  },
  {
    q: "What is the data-sharing discount?",
    a: "If you allow us to reuse an imported company's figures, we reduce the price and add the company to the catalogue so it can be valued again later.",
  },
  {
    q: "Where does the data come from?",
    a: "From official financial statements for companies in our dataset, or from the statements you upload for imports. The underlying numbers are shown in every report.",
  },
  {
    q: "Is this investment advice?",
    a: "No. Reports are generated for informational purposes only and do not constitute investment advice or a recommendation to buy or sell any security.",
  },
  {
    q: "How accurate are the valuations?",
    a: "Valuations are model-based estimates with assumptions disclosed. They are useful as a structured starting point, not a guarantee of price.",
  },
  {
    q: "What format is the report?",
    a: "A structured PDF covering the company snapshot, five-year financials, DCF, comparables, reverse valuation, scenarios, risk and final valuation range.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="dark-panel py-16 text-center text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10">
          <span className="section-eyebrow section-eyebrow-light">Frequently asked</span>
          <h1 className="section-headline section-headline-light">
            Common questions answered.
          </h1>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell mx-auto max-w-3xl">
          <dl className="divide-y divide-line border-y border-line">
            {FAQ.map((item) => (
              <div key={item.q} className="py-7">
                <dt className="text-lg font-normal text-ink-900">{item.q}</dt>
                <dd className="mt-3 text-sm font-light leading-7 text-ink-700/70">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
