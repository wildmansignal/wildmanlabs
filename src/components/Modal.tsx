// src/components/Modal.tsx
"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="text-sm font-semibold">{title}</div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 px-2 py-1 text-sm hover:border-white/30"
          >
            ✕
          </button>
        </div>
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
}