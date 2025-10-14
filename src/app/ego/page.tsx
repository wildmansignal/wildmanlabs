import Navbar from "@/components/Navbar";
import BuyEgo from "@/components/BuyEgo";
import CopyField from "@/components/CopyField";
import { EGO } from "@/config/ego";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$EGO — Wildman Labs",
  description:
    "The $EGO genesis token by Wildman Labs. Artistic, community experiment. No promises.",
  openGraph: {
    title: "$EGO — Wildman Labs",
    description:
      "The $EGO genesis token by Wildman Labs. Artistic, community experiment. No promises.",
    type: "website",
  },
};

export default function EgoPage() {
  const jupSwapUrl = `https://jup.ag/swap/SOL-${EGO.MINT}`;
  const dexscreenerUrl = EGO.DEXSCREENER_PAIR
    ? `https://dexscreener.com/solana/${EGO.DEXSCREENER_PAIR}?embed=1&theme=dark`
    : "";
  const birdeyeUrl = EGO.BIRDEYE_TOKEN
    ? `https://birdeye.so/token/${EGO.BIRDEYE_TOKEN}?chain=solana`
    : "";

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-emerald-400">$EGO</span> — The Genesis Meme
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            A playful social experiment in ego death. Artistic, community-driven,
            and permissionless. No financial promises. Stay wild.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <CopyField label="Contract (Mint)" value={EGO.MINT} />
            <div className="flex items-end gap-3">
              <a
                href={jupSwapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400"
              >
                Open Swap
              </a>
              {birdeyeUrl && (
                <a
                  href={birdeyeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 font-semibold hover:border-white/40"
                >
                  Birdeye
                </a>
              )}
            </div>
          </div>

          {/* Inline buy widget (button or future plugin embed) */}
          <div className="mt-8">
            <BuyEgo />
          </div>
        </div>
      </section>

      {/* Chart */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Live Chart</h2>
          {dexscreenerUrl ? (
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={dexscreenerUrl}
                className="h-[600px] w-full"
                style={{ border: 0 }}
                title="$EGO chart"
              />
            </div>
          ) : (
            <p className="mt-4 text-zinc-400">
              Add <code>DEXSCREENER_PAIR</code> in <code>src/config/ego.ts</code> to display the live chart.
            </p>
          )}
        </div>
      </section>

      {/* How to buy */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">How to buy</h2>
          <ol className="mt-4 grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-white/10 p-4">
              <div className="font-semibold text-emerald-400">1. Get a wallet</div>
              <p className="text-zinc-300">Install Phantom or Solflare. Fund with SOL.</p>
            </li>
            <li className="rounded-2xl border border-white/10 p-4">
              <div className="font-semibold text-emerald-400">2. Verify links</div>
              <p className="text-zinc-300">
                Always use this page. Double-check the contract address above.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 p-4">
              <div className="font-semibold text-emerald-400">3. Swap</div>
              <p className="text-zinc-300">
                Use the button or your preferred DEX to swap SOL → $EGO.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Official links + proofs */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Official Links & Proofs</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 p-4">
              <div className="font-semibold">Links</div>
              <ul className="mt-2 list-inside list-disc text-zinc-300">
                <li><a className="hover:underline" href={EGO.LINKS.WEBSITE}>Website</a></li>
                <li><a className="hover:underline" href={EGO.LINKS.X}>Twitter / X</a></li>
                <li><a className="hover:underline" href={EGO.LINKS.DISCORD}>Discord</a></li>
                <li><a className="hover:underline" href={EGO.LINKS.TELEGRAM}>Telegram</a></li>
                <li><a className="hover:underline" href={EGO.LINKS.RAYDIUM}>Raydium</a></li>
              </ul>
            </li>

            <li className="rounded-xl border border-white/10 p-4">
              <div className="font-semibold">On-chain Proofs</div>
              <ul className="mt-2 list-inside list-disc text-zinc-300">
                <li>LP Lock tx: <span className="opacity-60">add link post-launch</span></li>
                <li>Mint authority revoke tx: <span className="opacity-60">add link post-launch</span></li>
                <li>Treasury wallet: <span className="opacity-60">add address post-launch</span></li>
              </ul>
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
            <strong>Scam warning:</strong> We never DM first. We never ask you to send funds. 
            Always verify the mint address on this page. This is an artistic/community experiment, not financial advice.
          </div>
        </div>
      </section>
    </main>
  );
}