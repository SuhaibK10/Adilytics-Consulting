import Image from "next/image";
import { CLIENTS } from "@/lib/content";
import { SectionHeading, Em } from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/Icons";

// Current engagements: logo panel up top, then what the brand does and a link to it.
export function Clients() {
  return (
    <section id="clients" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Clients"
        title={
          <>
            Brands we are building with <Em>right now.</Em>
          </>
        }
        intro="Consumer brands we are currently helping grow."
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {CLIENTS.map((c, i) => (
          <li key={c.name} data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/55 transition-all duration-500 ease-calm hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_60px_-34px_rgb(0_0_0/0.3)]"
            >
              <div className="grid aspect-[16/7] place-items-center border-b border-line bg-paper-2/70">
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  sizes={`${c.logoWidth}px`}
                  style={{ width: c.logoWidth }}
                  className="h-auto max-w-[62%]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="eyebrow">{c.category}</p>
                <h3 className="mt-3 text-[1.35rem] font-medium tracking-[-0.02em]">{c.name}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{c.body}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm text-accent-strong">
                  {c.url.replace(/^https?:\/\/(www\.)?/, "")}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
