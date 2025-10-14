import { EGO } from "@/config/ego";

export default function ExplorerLinks() {
  const mint = EGO.MINT;
  const solscan = mint ? `https://solscan.io/token/${mint}` : "";
  const birdeye = EGO.BIRDEYE_TOKEN ? `https://birdeye.so/token/${EGO.BIRDEYE_TOKEN}?chain=solana` : "";

  return (
    <div className="flex flex-wrap gap-3">
      {solscan && (
        <a
          className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:border-white/40"
          href={solscan}
          target="_blank"
          rel="noreferrer"
        >
          View on Solscan ↗
        </a>
      )}
      {birdeye && (
        <a
          className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:border-white/40"
          href={birdeye}
          target="_blank"
          rel="noreferrer"
        >
          View on Birdeye ↗
        </a>
      )}
    </div>
  );
}