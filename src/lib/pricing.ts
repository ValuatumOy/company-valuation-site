// Central pricing config. All amounts in EUR cents.
// Override via env so finance/ops can tune prices without code changes.

export const PRICES = {
  existingReport: Number(process.env.PRICE_EXISTING_REPORT ?? 10000), // €100.00 — data already on file
  importReport: Number(process.env.PRICE_IMPORT_REPORT ?? 15000), // €150.00 — user imports statements, no data sharing
  shareDiscount: Number(process.env.PRICE_SHARE_DISCOUNT ?? 5000), // €50.00 off (import + share = €100, same as on-file)
  creditsafeReport: Number(process.env.PRICE_CREDITSAFE_REPORT ?? 20000), // €200.00 — we retrieve the statements
} as const;

// "existing"  -> we already hold the financial statements
// "import"    -> user uploads five years of PDF statements
// "creditsafe"-> user has no statements; we fetch them from CreditSafe / provider
export type ReportKind = "existing" | "import" | "creditsafe";

export function eur(cents: number): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

export interface PriceQuote {
  kind: ReportKind;
  shareData: boolean;
  base: number;
  discount: number;
  total: number;
}

export function quote(kind: ReportKind, shareData: boolean): PriceQuote {
  const base =
    kind === "creditsafe"
      ? PRICES.creditsafeReport
      : kind === "import"
        ? PRICES.importReport
        : PRICES.existingReport;
  // The data-sharing discount only applies to statements the user imports.
  const discount = kind === "import" && shareData ? PRICES.shareDiscount : 0;
  return {
    kind,
    shareData,
    base,
    discount,
    total: Math.max(0, base - discount),
  };
}
