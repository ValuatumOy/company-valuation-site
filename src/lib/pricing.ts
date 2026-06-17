// Central pricing config. All amounts in EUR cents.
// Override via env so finance/ops can tune prices without code changes.

export const PRICES = {
  existingReport: Number(process.env.PRICE_EXISTING_REPORT ?? 1000), // €10.00
  importReport: Number(process.env.PRICE_IMPORT_REPORT ?? 1500), // €15.00
  shareDiscount: Number(process.env.PRICE_SHARE_DISCOUNT ?? 500), // €5.00 off (import+share = €10)
} as const;

export type ReportKind = "existing" | "import";

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
  const base = kind === "import" ? PRICES.importReport : PRICES.existingReport;
  const discount = shareData ? PRICES.shareDiscount : 0;
  return {
    kind,
    shareData,
    base,
    discount,
    total: Math.max(0, base - discount),
  };
}
