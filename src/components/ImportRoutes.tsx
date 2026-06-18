"use client";

import { useState } from "react";
import { BuyBox } from "@/components/BuyBox";
import { eur, quote } from "@/lib/pricing";

type Route = "import" | "creditsafe";

const importLow = eur(quote("import", true).total); // €100 with sharing
const importHigh = eur(quote("import", false).total); // €150 without
const creditsafe = eur(quote("creditsafe", false).total); // €200

/**
 * Decision step shown when a company is not in our dataset. The user picks
 * whether they have the financial statement PDFs themselves, or wants us to
 * retrieve them via CreditSafe — then the matching BuyBox is shown.
 */
export function ImportRoutes({ companyName }: { companyName: string }) {
  const [route, setRoute] = useState<Route>("import");
  const selectedLabel =
    route === "import"
      ? "You will pay first, then upload the statements."
      : "You will pay first, then we retrieve the financials for you.";

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold text-ink-900">
          Do you have the financial statements?
        </p>
        <div className="mt-3 grid gap-3">
          <RouteOption
            active={route === "import"}
            onClick={() => setRoute("import")}
            title="Yes — I have the PDF statements"
            desc="Upload five years of statements after payment."
            price={`${importLow}–${importHigh}`}
          />
          <RouteOption
            active={route === "creditsafe"}
            onClick={() => setRoute("creditsafe")}
            title="No — please fetch them for me"
            desc="We retrieve the official financials via CreditSafe. Nothing to upload."
            price={creditsafe}
          />
        </div>
      </div>

      <p className="rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-xs font-medium leading-6 text-brand-700">
        {selectedLabel}
      </p>

      <BuyBox key={route} kind={route} companyName={companyName} />
    </div>
  );
}

function RouteOption({
  active,
  onClick,
  title,
  desc,
  price,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition ${
        active
          ? "border-brand-500 bg-brand-50 shadow-[0_0_0_1px_rgba(47,127,232,0.4)]"
          : "border-line bg-white hover:border-brand-300"
      }`}
    >
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
          active ? "border-brand-500 bg-brand-500 text-white" : "border-line text-transparent"
        }`}
        aria-hidden="true"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-sm font-semibold text-ink-900">{title}</span>
          <span className="shrink-0 text-sm font-semibold text-brand-600">{price}</span>
        </span>
        <span className="mt-1 block text-xs font-light leading-6 text-ink-700/60">{desc}</span>
      </span>
    </button>
  );
}
