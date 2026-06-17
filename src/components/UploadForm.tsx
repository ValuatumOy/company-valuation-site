"use client";

import { useRef, useState } from "react";

export function UploadForm({ sessionId }: { sessionId: string | null }) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    const pdfs = Array.from(list).filter((f) => f.type === "application/pdf");
    setFiles((prev) => [...prev, ...pdfs].slice(0, 8));
  }

  function removeFile(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function submit() {
    if (!files.length) return;
    setSubmitting(true);
    const form = new FormData();
    if (sessionId) form.append("sessionId", sessionId);
    files.forEach((f) => form.append("statements", f));
    try {
      const res = await fetch("/api/import", { method: "POST", body: form });
      if (res.ok) setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent-500/10 text-accent-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-ink-900">
          Statements received
        </h2>
        <p className="mt-2 text-sm text-ink-700/70">
          We&apos;re parsing your {files.length} file(s) and generating the report. You
          can close this page — we&apos;ll email the finished PDF to your Stripe receipt
          address.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition ${
          dragging
            ? "border-brand-500 bg-brand-50"
            : "border-line bg-surface-muted hover:border-brand-300"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-brand-500">
          <path d="M12 16V4m0 0 4 4m-4-4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="mt-3 font-medium text-ink-900">
          Drag &amp; drop PDF statements, or click to browse
        </p>
        <p className="mt-1 text-sm text-ink-700/60">
          Up to 8 PDF files · last five financial years
        </p>
      </div>

      {files.length > 0 && (
        <ul className="mt-5 space-y-2">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="flex items-center justify-between rounded-xl border border-line bg-surface px-4 py-3"
            >
              <span className="min-w-0 truncate text-sm font-medium text-ink-900">
                {f.name}
                <span className="ml-2 text-xs text-ink-700/50">
                  {(f.size / 1024).toFixed(0)} KB
                </span>
              </span>
              <button
                onClick={() => removeFile(i)}
                className="text-sm text-ink-700/50 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={submit}
        disabled={!files.length || submitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
      >
        {submitting ? "Uploading…" : `Generate report from ${files.length || ""} statement(s)`}
      </button>
    </div>
  );
}
