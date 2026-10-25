import Link from "next/link";
import { EXPERIENCE_AT, HERO_WORDS } from "@/lib/content";
import { ExpansionInput } from "@/components/home/ExpansionInput";
import { HeroPanel } from "@/components/home/HeroPanel";
import { ArrowRight } from "@/components/Icons";

const CYCLE = 2.6; // seconds each phrase stays on screen

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-14 sm:pt-20">
      {/* Soft accent glow and ripples behind the headline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 size-[44rem] rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-70 blur-2xl" />
        <div className="rings absolute inset-0 text-accent" />
      </div>

      <div className="container-x text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3.5 py-1.5 backdrop-blur" data-reveal>
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="eyebrow text-ink-soft!">21+ years of distribution in India</span>
        </p>

        <h1 className="mx-auto mt-7 max-w-4xl text-[2.35rem] font-medium leading-[1.06] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.4rem]">
          <span className="block">The partner consumer brands use to</span>
          <span className="sr-only">{HERO_WORDS.join(" ")}</span>
          <span
            aria-hidden
            className="rotator mt-1 pb-2 font-serif text-[1.12em] font-normal italic tracking-[-0.01em] text-accent"
            style={{ ["--cycle" as string]: `${CYCLE * HERO_WORDS.length}s` }}
          >
            {HERO_WORDS.map((w, i) => (
              <span key={w} style={{ ["--delay" as string]: `${i * CYCLE}s` }}>
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft text-pretty" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
          Strategy and hands-on execution for sales, distribution and corporate gifting. Led by an operator who has built it on the ground, from Jaipur kiranas to national retail chains.
        </p>

        <div className="mt-8" data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
          <ExpansionInput />
          <Link href="#how-we-work" className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
            See how we work <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-line pt-6" data-reveal style={{ ["--reveal-delay" as string]: "280ms" }}>
          <p className="eyebrow">Experience built at</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[1.05rem] font-medium tracking-tight text-ink/45">
            {EXPERIENCE_AT.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <HeroPanel />
    </section>
  );
}
