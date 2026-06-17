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

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function submitSearch() {
    const q = query.trim();
    if (results[0]) {
      router.push(`/company/${results[0].id}`);
      return;
    }

    if (q) {
      router.push(`/import?name=${encodeURIComponent(q)}`);
      return;
    }

    router.push("/reports");
  }

  return (
    <div ref={boxRef} className="search-shell relative">
      <div className="flex min-h-[4rem] items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-2xl shadow-ink-950/20 backdrop-blur-md transition focus-within:border-brand-300 focus-within:bg-white/15 focus-within:ring-4 focus-within:ring-brand-400/15">
        <SearchIcon />
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length && setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitSearch();
          }}
          placeholder="Search company name or business ID..."
          className="min-w-0 flex-1 bg-transparent py-3 text-base font-light text-white outline-none placeholder:text-white/40"
          aria-label="Search companies"
        />
        {loading ? (
          <Spinner />
        ) : (
          <button
            type="button"
            onClick={submitSearch}
            className="hidden rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:inline-flex"
          >
            Search
          </button>
        )}
      </div>

      {open && (
        <div className="absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-white text-ink-900 shadow-2xl shadow-ink-950/20">
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-auto py-1">
              {results.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => router.push(`/company/${c.id}`)}
                    className="flex w-full items-center justify-between gap-4 border-b border-line/70 px-4 py-3 text-left transition last:border-b-0 hover:bg-surface-muted"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink-900">
                        {c.name}
                      </span>
                      <span className="block truncate text-xs text-ink-700/60">
                        {c.businessId} - {c.city} - {c.industry}
                      </span>
                    </span>
                    {c.hasFinancials ? (
                      <span className="shrink-0 rounded bg-brand-50 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-brand-600">
                        Ready
                      </span>
                    ) : (
                      <span className="shrink-0 rounded bg-surface-muted px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink-700/60">
                        Import
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            searched &&
            !loading && (
              <div className="px-5 py-5">
                <p className="text-sm font-semibold text-ink-900">
                  No match in our dataset for "{query}".
                </p>
                <p className="mt-1 text-sm font-light leading-6 text-ink-700/65">
                  Import five years of financial statements and we will generate the
                  same full valuation report.
                </p>
                <button
                  onClick={() => router.push(`/import?name=${encodeURIComponent(query)}`)}
                  className="primary-button mt-4"
                >
                  Import statements
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
      className="shrink-0 text-white/48"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="m20 20-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-5 w-5 shrink-0 animate-spin text-brand-300" viewBox="0 0 24 24">
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
