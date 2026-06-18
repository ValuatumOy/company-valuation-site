export const metadata = { title: "FAQ" };

const FAQ = [
  {
    q: "Can I see an example before buying?",
    a: "Yes. The sample report page shows a draft Athlos Oy AI valuation report so you can inspect the structure, sections and level of detail before checkout.",
  },
  {
    q: "What is the valuation calculator?",
    a: "It is a free orientation tool. You enter headline figures such as revenue, EBITDA margin, sector and net debt, and it gives a rough market-multiple valuation range.",
  },
  {
    q: "How accurate is the calculator range?",
    a: "It is deliberately approximate. The calculator is useful for scale and orientation, but it does not replace the full report, which reviews financial statements, assumptions, risks, DCF and comparable companies in more detail.",
  },
  {
    q: "Where do the market multiples come from?",
    a: "The prototype multiples page uses listed-company peer signals and Wisdom consensus snapshots as context. Listed peers are not perfect private-company comparables, so the ranges are broad and adjusted conservatively.",
  },
  {
    q: "Which companies can I get a report for?",
    a: "Any company. If we already hold its financial statements, the report is generated after checkout. If not, you can import five years of statements yourself, or if you do not have them, let us fetch the official figures via CreditSafe.",
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
    q: "What if I do not have the statements?",
    a: "Choose the CreditSafe option. We retrieve the official financials from the provider on your behalf for EUR 200 and generate the report automatically. There is nothing for you to upload.",
  },
  {
    q: "What does a report cost?",
    a: "EUR 100 when we already hold the statements, EUR 150 when you import your own, EUR 100 if you share the imported figures, and EUR 200 if we fetch the data for you via CreditSafe.",
  },
  {
    q: "What is the data-sharing discount?",
    a: "If you allow us to reuse an imported company's figures, we take EUR 50 off and add the company to the catalogue so it can be valued again later, bringing the import down to EUR 100.",
  },
  {
    q: "Where does the data come from?",
    a: "From official financial statements for companies in our dataset, from the statements you upload for imports, or from provider retrieval when you choose the fetch route. The underlying numbers are shown in every report.",
  },
  {
    q: "Is this investment advice?",
    a: "No. Reports and calculator outputs are generated for informational purposes only and do not constitute investment advice or a recommendation to buy or sell any security.",
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
          <p className="section-sub mx-auto text-white/60">
            The short version: you can preview the output, test a rough range and choose
            the data route that fits what you have.
          </p>
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
