import Link from "next/link";
import { OCCASIONS } from "@/lib/content";
import { BRAND, whatsappLink } from "@/lib/site";
import { Em } from "@/components/SectionHeading";
import { ArrowRight, OccasionIcon } from "@/components/Icons";

// The warmer, product-led side of the brand, introduced on the homepage.
export function GiftingTeaser() {
  return (
    <section className="container-x py-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-accent-soft px-5 py-14 sm:px-10 sm:py-16 lg:px-14">
        <div aria-hidden className="rings absolute inset-0 text-accent" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <p className="eyebrow flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" /> Corporate gifting
            </p>
            <h2 className="mt-4 text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-balance sm:text-[2.75rem]">
              Gifts people keep, <Em>from people who know brands.</Em>
            </h2>
            <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-ink-soft">
              We source from the consumer brands we work with every day, brand every piece for you and deliver across India. One partner for growth and for gifting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/corporate-gifting"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Explore corporate gifting <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappLink(`Hi ${BRAND.name}, please share your corporate gifting catalogue.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/70 px-5 py-3 text-sm text-ink transition-colors hover:border-ink/30"
              >
                Request the catalogue
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            {OCCASIONS.slice(0, 4).map((o) => (
              <li key={o.title} className="rounded-2xl border border-line bg-paper/85 p-5">
                <OccasionIcon name={o.icon} className="text-accent" />
                <p className="mt-6 font-medium tracking-tight">{o.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
