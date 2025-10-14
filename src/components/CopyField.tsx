"use client";
import { useState } from "react";

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const canCopy = Boolean(value);
  return (
    <div className="w-full">
      <div className="mb-1 text-xs uppercase tracking-wide text-zinc-400">{label}</div>
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 p-2">
        <code className="flex-1 overflow-x-auto whitespace-nowrap text-sm">{value || "—"}</code>
        <button
          onClick={async () => {
            if (!canCopy) return;
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="rounded-lg border border-white/10 px-3 py-1 text-sm hover:border-white/30 disabled:opacity-40"
          disabled={!canCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}