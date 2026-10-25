import { BRAND, CONTACT } from "@/lib/site";
import { Em } from "@/components/SectionHeading";
import { BookingCalendar } from "@/components/BookingCalendar";

type Props = {
  title?: React.ReactNode;
  body?: string;
  topic?: string; // preselected on the booking form
};

const FIRST_NAME = BRAND.founder.split(" ")[0];

// Every page ends here, so "Book a call" links anywhere on the site can point at #book.
export function ClosingCTA({
  title = (
    <>
      Ready for your <Em>next market?</Em>
    </>
  ),
  body = `Pick a time below. You will speak to ${FIRST_NAME} directly, not a sales team.`,
  topic,
}: Props) {
  return (
    <section id="book" className="container-x pt-24 sm:pt-32">
      <div className="relative mx-auto max-w-3xl text-center" data-reveal>
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-60 blur-2xl" />
        <h2 className="text-[2.4rem] font-medium leading-[1.05] tracking-[-0.035em] text-balance sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-[1.02rem] leading-relaxed text-balance text-ink-soft">{body}</p>
      </div>
      <div className="mx-auto mt-12 max-w-5xl" data-reveal>
        <BookingCalendar topic={topic} />
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute">
        <span className="size-1.5 rounded-full bg-accent" /> Based in {CONTACT.location.split(",")[0]} · working across India
      </p>
    </section>
  );
}
