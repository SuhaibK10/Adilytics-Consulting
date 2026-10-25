import Link from "next/link";
import { BRAND, CONTACT, NAV, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-x grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{BRAND.description}</p>
        </div>

        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/corporate-gifting" className="text-ink-soft hover:text-ink">
                Corporate Gifting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Talk to us</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#book" className="text-ink-soft hover:text-ink">
                Book a call
              </a>
            </li>
            <li>
              <a href={whatsappLink(`Hi ${BRAND.name}, I'd like to talk.`)} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                WhatsApp
              </a>
            </li>
            {CONTACT.email && (
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-ink-soft hover:text-ink">
                  {CONTACT.email}
                </a>
              </li>
            )}
            <li className="text-ink-mute">{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-mute sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
        </p>
        <p className="font-mono uppercase tracking-[0.14em]">Website by Weblicate</p>
      </div>
    </footer>
  );
}
