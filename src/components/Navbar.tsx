"use client";

import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-emerald-400">Wildman</span> Labs
        </div>

        {/* Only render wallet UI on client to avoid SSR mismatch */}
        {mounted ? (
          <WalletMultiButton className="!bg-emerald-500 hover:!bg-emerald-400 !text-black !rounded-xl !px-4 !py-2 !border-0" />
        ) : (
          <div className="h-10 w-36 rounded-xl border border-white/10" />
        )}
      </div>
    </header>
  );
}