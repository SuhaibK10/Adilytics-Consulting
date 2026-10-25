"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, BRAND } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { ArrowRight, Cross, Menu } from "@/components/Icons";

// Floating pill nav. On phones the links fold into a panel under the pill.
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  // Every page ends with the booking calendar (ClosingCTA)
  const bookCall = "#book";

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-6xl rounded-full border border-line/80 bg-paper/75 shadow-[0_1px_0_rgb(255_255_255/0.6)_inset,0_8px_30px_-12px_rgb(0_0_0/0.12)] backdrop-blur-xl">
        <nav className="flex h-14 items-center justify-between gap-4 pl-4 pr-2 sm:pl-5" aria-label="Main">
          <Link href="/" aria-label={`${BRAND.name} home`}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-7 text-[0.84rem] text-ink-soft lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/corporate-gifting"
              className={`hidden items-center gap-1.5 rounded-full border px-4 py-2 text-[0.84rem] transition-colors md:inline-flex ${
                pathname === "/corporate-gifting"
                  ? "border-accent/40 bg-accent-soft text-accent-strong"
                  : "border-line bg-white/50 text-ink hover:border-accent/40 hover:text-accent-strong"
              }`}
            >
              Corporate Gifting <ArrowRight className="size-3.5" />
            </Link>
            <a
              href={bookCall}
              className="hidden rounded-full bg-accent px-4.5 py-2 text-[0.84rem] font-medium text-white transition-colors hover:bg-accent-strong sm:inline-flex"
            >
              Book a call
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full text-ink hover:bg-paper-2 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Cross /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-paper/95 p-2 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.25)] backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-[0.95rem] hover:bg-paper-2">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/corporate-gifting" className="flex items-center justify-between rounded-2xl px-4 py-3 text-[0.95rem] text-accent-strong hover:bg-paper-2">
                Corporate Gifting <ArrowRight className="size-4" />
              </Link>
            </li>
          </ul>
          <a
            href={bookCall}
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-2xl bg-accent px-4 py-3 text-center text-[0.95rem] font-medium text-white sm:hidden"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
