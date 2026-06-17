export const metadata = { title: "FAQ" };

const FAQ = [
  {
    q: "Which companies can I get a report for?",
    a: "Any company. If we already hold its financial statements (many Finnish companies are in our dataset), the report is generated instantly for €10. If not, you can import five years of statements for €15 and we generate the same report.",
  },
  {
    q: "Do I need to register?",
    a: "No. Payment is handled by Stripe and the report — or, for imports, the secure upload step — is delivered without creating an account.",
  },
  {
    q: "How does the import flow work?",
    a: "You pay first, then land on a secure upload page where you drop in five years of financial statements as PDFs. We parse the figures and generate the report. The same import engine already runs in production at valuation.valuatum.com behind login; here payment comes first and no registration is needed.",
  },
  {
    q: "What's the data-sharing discount?",
    a: "If you allow us to reuse an imported company's figures, we take €2 off and add the company to our catalogue so it can be valued again later. Only the financial statement figures are stored.",
  },
  {
    q: "Where does the data come from?",
    a: "From official Finnish financial statements for companies in our dataset, or from the statements you upload for imports. The underlying numbers are shown in every report.",
  },
  {
    q: "Is this investment advice?",
    a: "No. Reports are generated for informational purposes only and do not constitute investment advice or a recommendation to buy or sell any security.",
  },
  {
    q: "How accurate are the valuations?",
    a: "Valuations are model-based estimates with all assumptions disclosed. They reflect a standardised framework applied to the available financials — useful as a structured starting point, not a guarantee of price.",
  },
  {
    q: "What format is the report?",
    a: "A structured PDF covering the company snapshot, five-year financials, DCF, comparables, reverse valuation, scenarios, risk and a final valuation range.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        Frequently asked questions
      </h1>
      <dl className="mt-10 divide-y divide-line border-y border-line">
        {FAQ.map((item) => (
          <div key={item.q} className="py-6">
            <dt className="font-semibold text-ink-900">{item.q}</dt>
            <dd className="mt-2 text-ink-700/70">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
