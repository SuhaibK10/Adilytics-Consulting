import { MAP_H, MAP_W, NETWORK } from "@/lib/network";
import { SectionHeading } from "@/components/SectionHeading";

const { hub, stockists, distributors, trunk, branches, outlets } = NETWORK;

const TIERS = [
  { value: "1", label: "Brand warehouse" },
  { value: String(stockists.length), label: "Super stockists" },
  { value: String(distributors.length), label: "Distributors" },
  { value: "10,000+", label: "Retail outlets" },
];

// The one dark moment on the page: goods moving from a warehouse out to every layer of the trade.
export function DistributionMap() {
  return (
    <section className="container-x py-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-night px-5 py-14 text-white sm:px-10 sm:py-20 lg:px-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-[58%] top-[18%] size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] blur-2xl" />
          <div className="grain absolute inset-0" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="How a product reaches India"
              title={
                <>
                  One warehouse.{" "}
                  <em className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-accent-bright">Ten thousand shelves.</em>
                </>
              }
              intro="Distribution in India runs in layers: super stockists, distributors, then the kiranas, chemists and modern trade stores where people actually buy. We design every layer, appoint the right partners, then keep stock moving."
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8" data-reveal>
              {TIERS.map((t, i) => (
                <div key={t.label}>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                    {String(i + 1).padStart(2, "0")} · {t.label}
                  </dt>
                  <dd className="mt-1.5 text-3xl font-medium tracking-[-0.03em]">{t.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative" data-reveal style={{ ["--reveal-delay" as string]: "150ms" }}>
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="mx-auto w-full max-w-[34rem]"
              role="img"
              aria-label="Illustration of a distribution network across India: a central warehouse in Delhi feeding super stockists in major cities, which feed distributors in smaller cities and thousands of retail outlets."
            >
              {/* outlets */}
              <g fill="white">
                {outlets.map((o, i) => (
                  <circle key={i} cx={o.x.toFixed(1)} cy={o.y.toFixed(1)} r="1" opacity={(o.o * 0.7).toFixed(2)} />
                ))}
              </g>

              {/* routes */}
              <g fill="none" strokeLinecap="round">
                {branches.map((r, i) => (
                  <path key={`b${i}`} d={r.d} stroke="white" strokeOpacity="0.12" strokeWidth="0.8" />
                ))}
                {trunk.map((r, i) => (
                  <path key={`t${i}`} d={r.d} stroke="var(--accent-bright)" strokeOpacity="0.35" strokeWidth="1.1" />
                ))}
                {branches.map((r, i) => (
                  <path
                    key={`bf${i}`}
                    d={r.d}
                    pathLength={1}
                    className="route-flow"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                    style={{ ["--dur" as string]: `${r.dur.toFixed(2)}s`, ["--delay" as string]: `${r.delay.toFixed(2)}s` }}
                  />
                ))}
                {trunk.map((r, i) => (
                  <path
                    key={`tf${i}`}
                    d={r.d}
                    pathLength={1}
                    className="route-flow"
                    stroke="var(--accent-bright)"
                    strokeWidth="3"
                    style={{ ["--dur" as string]: `${r.dur.toFixed(2)}s`, ["--delay" as string]: `${r.delay.toFixed(2)}s` }}
                  />
                ))}
              </g>

              {/* distributors */}
              <g fill="white" fillOpacity="0.75">
                {distributors.map((d) => (
                  <circle key={d.name} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r="2" />
                ))}
              </g>

              {/* super stockists */}
              {stockists.map((s) => (
                <g key={s.name}>
                  <circle cx={s.x.toFixed(1)} cy={s.y.toFixed(1)} r="4.5" fill="var(--night)" stroke="var(--accent-bright)" strokeWidth="1.5" />
                  <text
                    x={(s.labelLeft ? s.x - 9 : s.x + 9).toFixed(1)}
                    y={(s.y + 3).toFixed(1)}
                    textAnchor={s.labelLeft ? "end" : "start"}
                    fill="white"
                    fillOpacity="0.6"
                    fontSize="9.5"
                    letterSpacing="1.2"
                    className="font-mono uppercase"
                  >
                    {s.name}
                  </text>
                </g>
              ))}

              {/* hub */}
              <circle cx={hub.x} cy={hub.y} r="7" fill="var(--accent-bright)" className="node-pulse" />
              <circle cx={hub.x} cy={hub.y} r="7" fill="var(--accent-bright)" stroke="white" strokeWidth="2" />
              <text x={hub.x + 13} y={hub.y - 8} fill="white" fontSize="10.5" letterSpacing="1.2" className="font-mono uppercase">
                Warehouse · {hub.name}
              </text>
            </svg>
            <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/40">
              Illustrative network · cities plotted at real coordinates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
