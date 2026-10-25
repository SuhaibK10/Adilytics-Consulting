import type { Metadata } from "next";
import { BUDGETS, GIFTING_REASONS, GIFTING_STEPS, OCCASIONS } from "@/lib/content";
import { BRAND, whatsappLink } from "@/lib/site";
import { SectionHeading, Em } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/gifting/QuoteForm";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ArrowRight, OccasionIcon } from "@/components/Icons";

const DESCRIPTION = `Corporate and B2B gifting from ${BRAND.name}: festive hampers, onboarding kits, client gifts and dealer rewards, branded for you and delivered across India.`;

export const metadata: Metadata = {
  title: "Corporate Gifting",
  description: DESCRIPTION,
  openGraph: { title: `Corporate Gifting · ${BRAND.name}`, description: DESCRIPTION, url: "/corporate-gifting" },
};

export default function CorporateGiftingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-32 size-[40rem] rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-60 blur-2xl" />
          <div className="rings absolute inset-0 text-accent" />
        </div>
        <div className="container-x text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3.5 py-1.5 backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="eyebrow text-ink-soft!">Corporate &amp; B2B gifting</span>
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl text-[2.35rem] font-medium leading-[1.06] tracking-[-0.035em] text-balance sm:text-6xl">
            Gifts people keep, <Em>ordered the way procurement likes.</Em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft" data-reveal>
            Festive hampers, onboarding kits, client gifts and dealer rewards. Curated from brands we know, branded for you, delivered across India with one point of contact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong">
              Request a quote <ArrowRight className="size-4" />
            </a>
            <a
              href={whatsappLink(`Hi ${BRAND.name}, please share your corporate gifting catalogue.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-5 py-3 text-sm text-ink transition-colors hover:border-ink/30"
            >
              Get the catalogue on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="container-x py-16 sm:py-20">
        <SectionHeading eyebrow="Occasions" title={<>A gift for every moment <Em>that matters.</Em></>} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((o, i) => {
            const highlight = o.icon === "channel";
            return (
              <li
                key={o.title}
                className={`rounded-3xl border p-6 sm:p-7 ${highlight ? "border-accent/25 bg-accent-soft" : "border-line bg-white/55"}`}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
              >
                <span className={`grid size-11 place-items-center rounded-2xl ${highlight ? "bg-accent text-white" : "bg-accent-soft text-accent"}`}>
                  <OccasionIcon name={o.icon} />
                </span>
                <h3 className="mt-6 text-lg font-medium tracking-tight">{o.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{o.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Budgets */}
      <section className="container-x py-6">
        <div className="rounded-[2rem] border border-line bg-paper-2/60 p-6 sm:p-10" data-reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Budget per gift</p>
              <p className="mt-2 text-2xl font-medium tracking-[-0.02em]">Curated options at every price point.</p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {BUDGETS.map((b) => (
                <li key={b} className="rounded-full border border-line bg-paper px-4 py-2.5 text-center text-sm font-medium tracking-tight">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading eyebrow="Why order with us" title={<>Not a gift shop. <Em>A sourcing partner.</Em></>} />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {GIFTING_REASONS.map((r, i) => (
            <li key={r.title} className="rounded-3xl border border-line bg-white/55 p-6 sm:p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
              <span className="font-mono text-xs tracking-[0.14em] text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{r.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* How ordering works + quote form */}
      <section id="quote" className="container-x py-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-night p-6 text-white sm:p-10" data-reveal>
            <p className="eyebrow text-white/55!">How ordering works</p>
            <ol className="mt-8 space-y-7">
              {GIFTING_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 font-mono text-[0.7rem] text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium tracking-tight">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] border border-line bg-white/60 p-6 sm:p-10" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="eyebrow">Request a quote</p>
            <p className="mb-6 mt-2 text-2xl font-medium tracking-[-0.02em]">Tell us what you need.</p>
            <QuoteForm />
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            Planning gifts for <Em>this season?</Em>
          </>
        }
        body="Talk through the occasion, numbers and deadline on a short call, and we will come back with options worth choosing from."
        topic="Corporate & B2B gifting"
      />
    </>
  );
}
