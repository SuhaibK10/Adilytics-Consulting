import Image from "next/image";
import { SOURCE_LOGOS, TRACK_RECORD } from "@/lib/content";
import { SectionHeading, Em } from "@/components/SectionHeading";

// Stat-first cards (Tano's pattern, in a calmer key): the number leads, the context follows.
export function TrackRecord() {
  return (
    <section id="track-record" className="border-y border-line bg-paper-2/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Track record"
          title={
            <>
              Numbers from the field, <Em>not from slides.</Em>
            </>
          }
          intro="Our team has built sales and distribution for Samsung, Coca-Cola, Spice and Swiss Military, from a single sales beat in Jaipur to national retail chains."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACK_RECORD.map((item, i) => (
            <li
              key={item.value + item.label}
              className="flex flex-col rounded-3xl border border-line bg-paper p-6 sm:p-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
            >
              <p className="text-[2.75rem] font-medium leading-none tracking-[-0.045em] text-accent sm:text-[3.25rem]">{item.value}</p>
              <p className="mt-4 text-[0.98rem] leading-snug text-ink">{item.label}</p>
              <div className="mt-auto pt-6">
                <div className="flex h-14 items-center border-t border-dashed border-line pt-4">
                  {SOURCE_LOGOS[item.source] ? (
                    <Image src={SOURCE_LOGOS[item.source].src} alt={item.source} style={{ height: SOURCE_LOGOS[item.source].height, width: "auto" }} />
                  ) : (
                    <span className="text-[0.95rem] font-medium tracking-tight text-ink">{item.source}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ink-mute">Figures are from roles our team has held at these companies. Logos are their owners&rsquo; trademarks and do not imply endorsement.</p>
      </div>
    </section>
  );
}
