import { UploadForm } from "@/components/UploadForm";

export const metadata = { title: "Upload your financial statements" };

export default async function UploadPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; demo?: string }>;
}) {
  const { session_id, demo } = await searchParams;
  const paid = Boolean(session_id || demo);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <div className="rounded-2xl border border-accent-500/30 bg-accent-500/5 px-5 py-3 text-sm font-medium text-accent-500">
        ✓ Payment received — no account needed. Upload your statements below.
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-ink-900">
        Upload five years of financial statements
      </h1>
      <p className="mt-3 text-ink-700/70">
        Add the official annual financial statements (tilinpäätös) for the last five
        years as PDF files. We parse the income statement, balance sheet and cash flow,
        then generate your valuation report.
      </p>

      {!paid && (
        <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          We couldn&apos;t confirm a payment for this session. If you reached this page
          by mistake, please start from the{" "}
          <a href="/import" className="font-medium underline">
            import page
          </a>
          .
        </p>
      )}

      <div className="mt-8">
        <UploadForm sessionId={session_id ?? null} />
      </div>
    </div>
  );
}
