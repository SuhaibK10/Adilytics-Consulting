import { STEPS } from "@/lib/content";
import { BRAND, whatsappLink } from "@/lib/site";
import { SectionHeading, Em } from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";

export function HowWeWork() {
  return (
    <section id="how-we-work" className="container-x py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Audit. Build. <Em>Scale.</Em>
              </>
            }
            intro="A fixed plan with clear timings, not an open-ended retainer. You always know what happens this month and what it should deliver."
          />
          <a
            href={whatsappLink(`Hi ${BRAND.name}, we'd like to start with a distribution audit.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            data-reveal
          >
            Start with an audit <ArrowRight className="size-4" />
          </a>
        </div>

        <ol className="relative space-y-4">
          <span aria-hidden className="absolute bottom-10 left-[2.15rem] top-10 hidden w-px bg-line sm:block" />
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-5 rounded-3xl border border-line bg-white/55 p-6 sm:gap-7 sm:p-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{step.title}</h3>
                  <span className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                    {step.timing}
                  </span>
                </div>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
