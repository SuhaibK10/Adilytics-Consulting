import { BRAND, CONTACT, whatsappLink } from "@/lib/site";
import { Em } from "@/components/SectionHeading";
import { WhatsApp } from "@/components/Icons";

type Props = {
  title?: React.ReactNode;
  body?: string;
  message?: string;
};

const FIRST_NAME = BRAND.founder.split(" ")[0];

export function ClosingCTA({
  title = (
    <>
      Ready for your <Em>next market?</Em>
    </>
  ),
  body = `Tell us where you are and where you want to be. You will speak to ${FIRST_NAME} directly, not a sales team.`,
  message = `Hi ${BRAND.name}, I'd like to talk about growing our brand.`,
}: Props) {
  return (
    <section className="container-x pt-24 sm:pt-32">
      <div className="relative mx-auto max-w-3xl text-center" data-reveal>
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-60 blur-2xl" />
        <h2 className="text-[2.4rem] font-medium leading-[1.05] tracking-[-0.035em] text-balance sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">{body}</p>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_var(--accent)] transition-colors hover:bg-accent-strong"
        >
          <WhatsApp className="size-5" /> Talk to {FIRST_NAME} on WhatsApp
        </a>
        <p className="mt-6 flex items-center justify-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
          <span className="size-1.5 rounded-full bg-accent" /> Based in {CONTACT.location.split(",")[0]} · working across India
        </p>
      </div>
    </section>
  );
}
