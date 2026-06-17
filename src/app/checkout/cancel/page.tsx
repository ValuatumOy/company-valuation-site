import Link from "next/link";

export const metadata = { title: "Checkout cancelled" };

export default function CancelPage() {
  return (
    <section className="dark-panel grid min-h-[calc(100svh-72px)] place-items-center px-[var(--page-x)] py-16 text-white">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div className="report-card relative z-10 max-w-xl p-9 text-center">
        <h1 className="text-3xl font-light text-ink-900">Checkout cancelled</h1>
        <p className="mt-4 text-sm font-light leading-7 text-ink-700/70">
          No payment was taken. You can pick up where you left off whenever you are
          ready.
        </p>
        <Link href="/#search" className="primary-button mt-8">
          Back to search
        </Link>
      </div>
    </section>
  );
}
