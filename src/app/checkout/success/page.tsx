import Link from "next/link";

export const metadata = { title: "Payment successful" };

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-500/10 text-accent-500">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900">
        Payment received
      </h1>
      <p className="mt-3 text-ink-700/70">
        Your valuation report is being generated. We&apos;ll email the finished PDF to
        the address on your Stripe receipt — usually within a few minutes. No account
        needed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
      >
        Value another company
      </Link>
    </div>
  );
}
