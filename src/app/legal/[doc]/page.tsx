import { notFound } from "next/navigation";

const DOCS: Record<string, { title: string; body: string[] }> = {
  terms: {
    title: "Terms of Service",
    body: [
      "These terms govern your use of the Valuatum Reports website and the purchase of valuation reports. By buying a report you agree to them.",
      "Reports are sold on a per-report basis. Payment is processed by Stripe. Once a report has been generated and delivered, the sale is final, except where required otherwise by applicable consumer law.",
      "Reports are generated for informational purposes only and do not constitute investment advice, an offer, or a recommendation to buy or sell any security.",
      "This is placeholder legal copy. Replace it with terms reviewed by Valuatum's legal counsel before launch.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    body: [
      "We process the minimum data needed to deliver your report: your payment details handled by Stripe, the receipt email used to send the finished PDF, and for imports the financial statements you upload.",
      "If you choose the data-sharing option, the financial statement figures of the imported company are retained and added to our catalogue. You can request their removal.",
      "We do not require account registration to purchase a report.",
      "This is placeholder legal copy. Replace it with a GDPR-compliant policy reviewed by Valuatum's legal counsel before launch.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    body: [
      "Valuation reports are model-based estimates produced from available financial statements using a standardised framework. All key assumptions are disclosed in each report.",
      "Nothing on this site or in any report constitutes investment, legal, tax or accounting advice. Valuations are not a guarantee of price or value and should not be relied upon as the sole basis for any decision.",
      "This is placeholder legal copy. Replace it with a disclaimer reviewed by Valuatum's legal counsel before launch.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(DOCS).map((doc) => ({ doc }));
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const { doc } = await params;
  const content = DOCS[doc];
  if (!content) notFound();

  return (
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10 max-w-3xl">
          <span className="section-eyebrow section-eyebrow-light">Legal</span>
          <h1 className="section-headline section-headline-light">{content.title}</h1>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <article className="container-shell mx-auto max-w-3xl">
          <div className="report-card space-y-5 p-8 text-base font-light leading-8 text-ink-700/70">
            {content.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
