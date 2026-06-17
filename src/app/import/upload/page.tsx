import Link from "next/link";
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
    <>
      <section className="dark-panel py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10 max-w-3xl">
          <span className="section-eyebrow section-eyebrow-light">Upload statements</span>
          <h1 className="section-headline section-headline-light">
            Upload five years of financial statements.
          </h1>
          <p className="section-sub text-white/60">
            Add the official annual financial statements as PDF files. We parse the
            figures and generate your valuation report.
          </p>
        </div>
      </section>

      <section className="section-shell bg-surface-muted">
        <div className="container-shell mx-auto max-w-3xl">
          <div className="mb-8 rounded-[24px] border border-brand-200 bg-brand-50 px-5 py-4 text-sm font-medium text-brand-700">
            Payment received. No account needed.
          </div>

          {!paid && (
            <p className="mb-8 rounded-[24px] border border-amber-300 bg-amber-50 p-5 text-sm text-amber-800">
              We could not confirm a payment for this session. If you reached this page
              by mistake, please start from the{" "}
              <Link href="/import" className="font-semibold underline">
                import page
              </Link>
              .
            </p>
          )}

          <UploadForm sessionId={session_id ?? null} />
        </div>
      </section>
    </>
  );
}
