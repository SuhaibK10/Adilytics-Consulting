import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ACCENTS, BRAND, SHOW_ACCENT_SWITCHER } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AccentSwitcher } from "@/components/layout/AccentSwitcher";
import { RevealObserver } from "@/components/RevealObserver";

// Self-hosted (Google Fonts' latin variable files) so the type never depends on reaching fonts.googleapis.com
const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic-latin.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

// Runs before first paint: flags that JS is on (enables reveal animations) and applies an accent
// chosen via ?accent= or earlier in this tab, so the page never flashes the default colour.
const BOOT = `(function(){var d=document.documentElement;d.classList.add("js");try{var a=new URLSearchParams(location.search).get("accent")||sessionStorage.getItem("accent");if(a&&/^(${ACCENTS.map((a) => a.id).join("|")})$/.test(a)){d.setAttribute("data-accent",a);sessionStorage.setItem("accent",a)}}catch(e){}})()`;

export const metadata: Metadata = {
  // Link previews need absolute image URLs. Vercel supplies the production domain; local builds use localhost.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
  ),
  title: {
    default: `${BRAND.name} · Sales, Distribution & Corporate Gifting`,
    template: `%s · ${BRAND.name}`,
  },
  description: BRAND.description,
  // Pitch preview: keep it out of search indexes until the brand name is final.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${BRAND.name} · Sales, Distribution & Corporate Gifting`,
    description: BRAND.description,
    type: "website",
    locale: "en_IN",
    siteName: BRAND.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        {SHOW_ACCENT_SWITCHER && <AccentSwitcher />}
      </body>
    </html>
  );
}
