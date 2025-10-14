import ScamNotice from "@/components/ScamNotice";
import { EGO } from "@/config/ego";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <ScamNotice />
        <div className="text-sm text-zinc-400">
          <div>© {new Date().getFullYear()} Wildman Labs. All rights reserved.</div>
          <div className="mt-2">
            Official:{" "}
            <a className="hover:underline" href={EGO.LINKS.WEBSITE}>Website</a> ·{" "}
            <a className="hover:underline" href={EGO.LINKS.X}>X</a> ·{" "}
            <a className="hover:underline" href={EGO.LINKS.DISCORD}>Discord</a> ·{" "}
            <a className="hover:underline" href={EGO.LINKS.TELEGRAM}>Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}