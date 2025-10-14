import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://wildmanlabs.xyz";

export const metadata: Metadata = {
  title: "Wildman Labs — Meme, Code & Consciousness",
  description:
    "Wildman Labs merges memes, code, and consciousness. Genesis token: $EGO.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Wildman Labs — Meme, Code & Consciousness",
    description: "Genesis token: $EGO. Artistic community experiment.",
    url: SITE_URL,
    siteName: "Wildman Labs",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildman Labs — Meme, Code & Consciousness",
    description: "Genesis token: $EGO. Artistic community experiment.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100">
        <Providers>
          <Analytics />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}