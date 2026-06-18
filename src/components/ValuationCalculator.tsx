"use client";

import { useMemo, useState } from "react";
import { SECTOR_RANGES, getSector, type SectorKey } from "@/lib/marketMultiples";

function fmt(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function ValuationCalculator() {
  const [sector, setSector] = useState<SectorKey>("software");
  const [revenue, setRevenue] = useState(5_000_000);
  const [ebitdaMargin, setEbitdaMargin] = useState(16);
  const [netDebt, setNetDebt] = useState(500_000);

  const result = useMemo(() => {
    const s = getSector(sector);
    const ebitda = Math.max(0, revenue * (ebitdaMargin / 100));
    const evLow = ebitda * s.evEbitdaLow;
    const evBase = ebitda * s.evEbitdaBase;
    const evHigh = ebitda * s.evEbitdaHigh;
    return {
      sector: s,
      ebitda,
      evLow,
      evBase,
      evHigh,
      equityLow: Math.max(0, evLow - netDebt),
      equityBase: Math.max(0, evBase - netDebt),
      equityHigh: Math.max(0, evHigh - netDebt),
    };
  }, [sector, revenue, ebitdaMargin, netDebt]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="report-card p-6 md:p-8">
        <span className="section-eyebrow">Inputs</span>
        <div className="space-y-6">
          <label className="block">
            <span className="text-sm font-semibold text-ink-900">Sector</span>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value as SectorKey)}
              className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15"
            >
              {SECTOR_RANGES.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>

          <NumberField
            label="Revenue"
            value={revenue}
            min={0}
            step={250000}
            suffix="EUR"
            onChange={setRevenue}
          />
          <NumberField
            label="EBITDA margin"
            value={ebitdaMargin}
            min={0}
            max={60}
            step={1}
            suffix="%"
            onChange={setEbitdaMargin}
          />
          <NumberField
            label="Net debt"
            value={netDebt}
            min={-5000000}
            step={100000}
            suffix="EUR"
            onChange={setNetDebt}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-line bg-white">
        <div className="bg-ink-900 p-7 text-white">
          <p className="text-sm font-light text-white/55">Indicative equity value</p>
          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="text-4xl font-light leading-none tracking-normal md:text-5xl">
              {fmt(result.equityLow)} - {fmt(result.equityHigh)}
            </span>
          </div>
          <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/60">
            Based on {result.sector.evEbitdaLow}x-{result.sector.evEbitdaHigh}x
            EBITDA for {result.sector.label.toLowerCase()}.
          </p>
        </div>

        <div className="grid gap-px bg-line md:grid-cols-3">
          <Metric label="EBITDA" value={fmt(result.ebitda)} />
          <Metric label="Enterprise value" value={`${fmt(result.evLow)} - ${fmt(result.evHigh)}`} />
          <Metric label="Base case equity" value={fmt(result.equityBase)} />
        </div>

        <div className="p-7">
          <h2 className="text-2xl font-light tracking-normal text-ink-900">
            What this range does and does not say
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Note title="Good for orientation">
              This is a quick market-multiple lens. It can help a user understand scale
              before ordering a full report.
            </Note>
            <Note title="Not a final valuation">
              It ignores company-specific risk, working capital, DCF assumptions, peer
              quality and financial statement detail.
            </Note>
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max?: number;
  step: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-ink-900">{label}</span>
        <span className="text-sm font-medium text-brand-600">
          {suffix === "%" ? `${value}%` : fmt(value)}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max ?? 30_000_000}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-brand-500"
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-5">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ink-700/40">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-ink-900">{value}</p>
    </div>
  );
}

function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-brand-300 pt-4">
      <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm font-light leading-7 text-ink-700/65">{children}</p>
    </div>
  );
}
