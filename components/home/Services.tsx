import Link from "next/link";
import { SERVICES } from "@/lib/content";
import { SectionHeading, Em } from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";

export function Services() {
  return (
    <section id="services" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything between your warehouse and <Em>the customer&rsquo;s hand.</Em>
          </>
        }
        intro="Six practices, one team. Most brands start with one and add the rest as they grow."
      />

      <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const gifting = Boolean(s.href);
          const card = (
            <div
              className={`group flex h-full flex-col rounded-3xl border p-6 transition-all duration-500 ease-calm hover:-translate-y-1 sm:p-7 ${
                gifting
                  ? "border-accent/25 bg-accent-soft hover:shadow-[0_24px_60px_-30px_var(--accent)]"
                  : "border-line bg-white/55 hover:border-ink/15 hover:shadow-[0_24px_60px_-34px_rgb(0_0_0/0.3)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.14em] text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
                {gifting && (
                  <span className="inline-flex items-center gap-1 text-[0.8rem] text-accent-strong">
                    Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </div>
              <h3 className="mt-8 text-[1.35rem] font-medium tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {s.points.map((p) => (
                  <li key={p} className="rounded-full border border-line bg-paper/80 px-2.5 py-1 text-[0.75rem] text-ink-soft">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          );
          return (
            <li
              key={s.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
            >
              {s.href ? (
                <Link href={s.href} className="block h-full">
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
