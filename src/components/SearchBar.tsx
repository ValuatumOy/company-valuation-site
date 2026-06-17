"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Company } from "@/lib/companies";

export function SearchBar({ autoFocus = false }: { autoFocus?: boolean }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Debounced search against /api/search
  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setSearched(false);
      return;
    }
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = (await res.json()) as { companies: Company[] };
        setResults(data.companies ?? []);
        setSearched(true);
        setOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 220);
    return () => clearTimeout(t);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={boxRef} className="relative w-full max-w-2xl">
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg shadow-ink-900/5 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15">
        <SearchIcon />
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length && setOpen(true)}
          placeholder="Search any company by name or business ID…"
          className="w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-700/40"
          aria-label="Search companies"
        />
        {loading && <Spinner />}
      </div>

      {open && (
        <div className="absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink-900/10">
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-auto py-1">
              {results.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => router.push(`/company/${c.id}`)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition hover:bg-surface-muted"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-ink-900">
                        {c.name}
                      </span>
                      <span className="block truncate text-xs text-ink-700/60">
                        {c.businessId} · {c.city} · {c.industry}
                      </span>
                    </span>
                    {c.hasFinancials ? (
                      <span className="shrink-0 rounded-full bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-500">
                        Report ready
                      </span>
                    ) : (
                      <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                        Import needed
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            searched &&
            !loading && (
              <div className="px-4 py-5">
                <p className="text-sm font-medium text-ink-900">
                  No match in our dataset for “{query}”.
                </p>
                <p className="mt-1 text-sm text-ink-700/70">
                  No problem — you can import five years of financial statements and
                  we&apos;ll generate the report.
                </p>
                <button
                  onClick={() => router.push(`/import?name=${encodeURIComponent(query)}`)}
                  className="mt-3 inline-flex rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Import statements &amp; get report — €15
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-ink-700/40"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-5 w-5 shrink-0 animate-spin text-brand-500" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
      />
    </svg>
  );
}
