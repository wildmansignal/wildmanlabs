// src/components/BuyEgo.tsx
export default function BuyEgo() {
  const EGO_MINT = "<YOUR_EGO_MINT>"; // replace when ready
  const jupiterSwapUrl = `https://jup.ag/swap/SOL-${EGO_MINT}`; // robust fallback

  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-black/40">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-lg font-semibold">$EGO swap</div>
          <p className="text-sm text-zinc-400">Swap SOL → $EGO via Jupiter.</p>
        </div>
        <a
          href={jupiterSwapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400"
        >
          Open Swap
        </a>
      </div>

      {/* Optional: keep an iframe area ready for when you switch to the new Plugin embed */}
      {/* <iframe src={NEW_PLUGIN_URL} className="mt-4 h-[680px] w-full rounded-xl border-0" /> */}
    </div>
  );
}