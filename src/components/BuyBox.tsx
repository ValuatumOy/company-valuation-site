"use client";

import { useMemo, useState } from "react";
import { eur, PRICES, type ReportKind } from "@/lib/pricing";

interface BuyBoxProps {
  kind: ReportKind;
  companyId?: string;
  companyName: string;
  /** Force the share toggle on by default (e.g. /import?share=1). */
  defaultShare?: boolean;
}

export function BuyBox({ kind, companyId, companyName, defaultShare = false }: BuyBoxProps) {
  const [share, setShare] = useState(defaultShare || kind === "import");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const base = kind === "import" ? PRICES.importReport : PRICES.existingReport;
  const total = useMemo(
    () => Math.max(0, base - (share ? PRICES.shareDiscount : 0)),
    [base, share],
  );

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, companyId, companyName, shareData: share }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Could not start checkout. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-ink-900/5">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink-700/70">
          {kind === "import" ? "Import + report" : "Valuation report"}
        </span>
        <div className="text-right">
          {share && (
            <span className="mr-2 text-sm text-ink-700/40 line-through">{eur(base)}</span>
          )}
          <span className="text-3xl font-bold text-ink-900">{eur(total)}</span>
        </div>
      </div>

      <p className="mt-2 text-sm text-ink-700/70">
        {kind === "import"
          ? `Pay first, then upload five years of statements for ${companyName}. No registration required.`
          : `Full AI valuation report for ${companyName}, generated instantly.`}
      </p>

      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-surface-muted p-4">
        <input
          type="checkbox"
          checked={share}
          onChange={(e) => setShare(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-brand-600"
        />
        <span className="text-sm">
          <span className="font-medium text-ink-900">
            Let us reuse this company&apos;s figures — save {eur(PRICES.shareDiscount)}
          </span>
          <span className="mt-0.5 block text-ink-700/60">
            We add the company to our catalogue so it can be valued again. Only the
            financial statement figures are stored.
          </span>
        </span>
      </label>

      <button
        onClick={checkout}
        disabled={loading}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
      >
        {loading ? "Redirecting…" : `Pay ${eur(total)} & continue`}
      </button>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-700/50">
        <LockIcon /> Secure checkout via Stripe · No account needed
      </p>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
