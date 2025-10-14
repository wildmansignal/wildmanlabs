"use client";

import Navbar from "@/components/Navbar";
import JupiterSwap from "@/components/JupiterSwap";
import CopyField from "@/components/CopyField";
import ExplorerLinks from "@/components/ExplorerLinks";
import ChartEmbed from "@/components/ChartEmbed";
import { EGO } from "@/config/ego";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-14">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            The <span className="text-emerald-400">Wildman</span> Internet Lab
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            We merge memes, code, and consciousness. Genesis token:{" "}
            <span className="font-semibold">$EGO</span>. This is an artistic,
            community experiment. No promises. Stay wild.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Inline Jupiter Swap modal */}
            <JupiterSwap buttonLabel="Buy $EGO" />
            <a
              href="#learn"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:border-white/40"
            >
              How it works
            </a>
          </div>

          {/* CONTRACT + CHART SECTION */}
          <div id="buy" className="mt-12 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <CopyField label="Contract (Mint)" value={EGO.MINT} />
              <div className="flex items-end gap-3">
                <JupiterSwap buttonLabel="Buy $EGO" />
                {EGO.MINT && (
                  <a
                    href={`https://jup.ag/swap/SOL-${EGO.MINT}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/20 px-4 py-2 font-semibold hover:border-white/40"
                  >
                    Open on jup.ag ↗
                  </a>
                )}
              </div>
            </div>

            <ExplorerLinks />
            <ChartEmbed />
          </div>
        </div>
      </section>

      {/* LEARN SECTION */}
      <section id="learn" className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">How to buy</h2>
          <ol className="mt-4 grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-white/10 p-4">
              <div className="text-emerald-400 font-semibold">1. Get a wallet</div>
              <p className="text-zinc-300">
                Install Phantom or Solflare and fund it with SOL.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 p-4">
              <div className="text-emerald-400 font-semibold">2. Connect</div>
              <p className="text-zinc-300">
                Click “Select Wallet” in the top right and approve.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 p-4">
              <div className="text-emerald-400 font-semibold">3. Swap</div>
              <p className="text-zinc-300">
                Use the green “Buy $EGO” button above to swap SOL → $EGO instantly.
              </p>
            </li>
          </ol>

          <div className="mt-10 text-sm text-zinc-400">
            <p>
              <strong>Disclaimer:</strong> This project is an artistic and
              community experiment. It is not financial advice. Tokens carry
              risk. Only use official links.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}