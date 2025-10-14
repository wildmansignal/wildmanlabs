// src/components/JupiterSwap.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import Modal from "@/components/Modal";
import { EGO } from "@/config/ego";

export default function JupiterSwap({
  buttonLabel = "Buy $EGO",
}: {
  buttonLabel?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);

  // Build a robust swap URL (works even if their “Plugin” SDK changes)
  const swapUrl = useMemo(() => {
    const base = "https://jup.ag/swap";
    const params = new URLSearchParams({
      inputMint: "So11111111111111111111111111111111111111112", // SOL
      outputMint: EGO.MINT || "",
      // Optional goodies:
      // slippageBps: "100", // 1%
      // feeBps: "0",
      // exactIn: "true",
      // theme: "dark",
    });
    return `${base}/?${params.toString()}`;
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400"
      >
        {buttonLabel}
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="$EGO – Swap">
        <div className="p-4">
          {/* Only render iframe on client to avoid hydration mismatch */}
          {mounted ? (
            <iframe
              src={swapUrl}
              title="Jupiter Swap"
              className="h-[680px] w-full rounded-xl"
              style={{ border: 0 }}
              allow="clipboard-read; clipboard-write; web-share; accelerometer; autoplay; gyroscope; payment"
            />
          ) : (
            <div className="h-[680px] w-full rounded-xl border border-white/10" />
          )}

          {/* Fallback link just in case */}
          <div className="mt-3 text-right">
            <a
              href={swapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-400 underline hover:text-zinc-200"
            >
              Open on jup.ag ↗
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}