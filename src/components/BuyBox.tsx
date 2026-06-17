"use client";

import { useMemo, useState } from "react";
import { eur, PRICES, type ReportKind } from "@/lib/pricing";

interface BuyBoxProps {
  kind: ReportKind;
  companyId?: string;
  companyName: string;
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
    <aside className="report-card shadow-[0_16px_48px_rgba(7,23,47,0.08)]">
      <div className="bg-ink-900 p-6 text-white">
        <p className="text-sm font-light text-white/60">
          {kind === "import" ? "Import + report" : "Valuation report"}
        </p>
        <h2 className="mt-1 text-2xl font-light tracking-normal">{companyName}</h2>
        <div className="mt-4 flex items-end gap-2">
          {share && <span className="pb-1 text-sm text-white/40 line-through">{eur(base)}</span>}
          <span className="text-5xl font-light leading-none tracking-normal">{eur(total)}</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm font-light leading-7 text-ink-700/70">
          {kind === "import"
            ? `Pay first, then upload five years of statements for ${companyName}. No registration required.`
            : `Full AI valuation report for ${companyName}, generated after checkout.`}
        </p>

        <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-line bg-surface-muted p-4 transition hover:border-brand-300">
          <input
            type="checkbox"
            checked={share}
            onChange={(e) => setShare(e.target.checked)}
            className="mt-1 h-4 w-4 accent-brand-600"
          />
          <span className="text-sm">
            <span className="font-semibold text-ink-900">
              Reuse this company's figures and save {eur(PRICES.shareDiscount)}
            </span>
            <span className="mt-1 block font-light leading-6 text-ink-700/60">
              We add the company to the catalogue. Only financial statement figures are
              stored.
            </span>
          </span>
        </label>

        <button
          onClick={checkout}
          disabled={loading}
          className="primary-button mt-5 w-full disabled:pointer-events-none disabled:opacity-60"
        >
          {loading ? "Redirecting..." : `Pay ${eur(total)} and continue`}
        </button>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-700/50">
          <LockIcon /> Secure checkout via Stripe. No account needed.
        </p>
      </div>
    </aside>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
