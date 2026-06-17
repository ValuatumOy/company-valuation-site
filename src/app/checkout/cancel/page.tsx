import Link from "next/link";

export const metadata = { title: "Checkout cancelled" };

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900">
        Checkout cancelled
      </h1>
      <p className="mt-3 text-ink-700/70">
        No payment was taken. You can pick up where you left off whenever you&apos;re
        ready.
      </p>
      <Link
        href="/#search"
        className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
      >
        Back to search
      </Link>
    </div>
  );
}
