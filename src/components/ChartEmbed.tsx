import { EGO } from "@/config/ego";

export default function ChartEmbed() {
  if (!EGO.DEXSCREENER_PAIR) {
    return (
      <p className="mt-4 text-zinc-400">
        Add <code>DEXSCREENER_PAIR</code> in <code>src/config/ego.ts</code> to display the live chart.
      </p>
    );
  }
  const url = `https://dexscreener.com/solana/${EGO.DEXSCREENER_PAIR}?embed=1&theme=dark`;
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
      <iframe src={url} title="$EGO chart" className="h-[600px] w-full" style={{ border: 0 }} />
    </div>
  );
}