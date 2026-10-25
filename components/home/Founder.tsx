import Image from "next/image";
import founderPhoto from "@/public/founder.jpg";
import { CAREER } from "@/lib/content";
import { BRAND } from "@/lib/site";
import { SectionHeading, Em } from "@/components/SectionHeading";

export function Founder() {
  return (
    <section id="founder" className="container-x py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div data-reveal>
          {/* The photo is only 229px, so it sits as a round portrait; a sharper one could fill the panel */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-accent">
            <div aria-hidden className="rings absolute inset-0 text-white" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(255_255_255/0.25),transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center pb-20">
              <Image
                src={founderPhoto}
                alt={BRAND.founder}
                sizes="14rem"
                placeholder="blur"
                className="size-56 rounded-full object-cover shadow-2xl ring-4 ring-white/85"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-paper/90 p-4 backdrop-blur">
              <p className="font-medium tracking-tight">{BRAND.founder}</p>
              <p className="text-sm text-ink-mute">Founder · New Delhi</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Founder"
            title={
              <>
                Twenty-one years <Em>on the ground.</Em>
              </>
            }
            intro={`${BRAND.founder} has built sales and distribution across India for two decades: managing 9 distributors and 3,100 outlets for Coca-Cola in Jaipur, running ₹45 Cr a month for Samsung in Mumbai, running Spice's modern trade business with Walmart and Reliance, and serving as Vice President at Swiss Military. ${BRAND.name} puts that experience to work for brands ready to grow beyond their first channel.`}
          />

          <ol className="mt-10 border-t border-line" data-reveal>
            {CAREER.map((c) => (
              <li key={c.year + c.org} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[5rem_1fr_auto]">
                <span className="font-mono text-sm text-ink-mute">{c.year}</span>
                <span className="font-medium tracking-tight">{c.role}</span>
                <span className="col-start-2 text-sm text-ink-soft sm:col-start-auto">{c.org}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft">
            <span className="size-1.5 rounded-full bg-accent" /> IIM Lucknow
          </p>
        </div>
      </div>
    </section>
  );
}
