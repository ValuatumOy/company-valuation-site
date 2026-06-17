import Link from "next/link";

export const metadata = { title: "Payment successful" };

export default function SuccessPage() {
  return (
    <section className="dark-panel grid min-h-[calc(100svh-72px)] place-items-center px-[var(--page-x)] py-16 text-white">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div className="report-card relative z-10 max-w-xl p-9 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
          <CheckIcon />
        </div>
        <h1 className="mt-6 text-3xl font-light text-ink-900">Payment received</h1>
        <p className="mt-4 text-sm font-light leading-7 text-ink-700/70">
          Your valuation report is being generated. We will email the finished PDF to
          the address on your Stripe receipt. No account needed.
        </p>
        <Link href="/" className="primary-button mt-8">
          Value another company
        </Link>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
