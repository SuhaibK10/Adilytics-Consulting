// The accent panel under the hero: line-art warehouse and kirana store joined by a moving route,
// with an illustrative "expansion plan" card floating over it (Urumi's phone-mockup moment).

const PLAN = [
  { city: "Indore", status: "Live", progress: 0.92 },
  { city: "Bhopal", status: "Appointing", progress: 0.58 },
  { city: "Jabalpur", status: "Next", progress: 0.22 },
];

export function HeroPanel() {
  return (
    <div className="container-x mt-14 sm:mt-16" data-reveal style={{ ["--reveal-delay" as string]: "320ms" }}>
      <div className="relative overflow-hidden rounded-[2rem] bg-accent px-4 pb-8 pt-8 text-white sm:px-10 sm:pb-12 sm:pt-12">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgb(255_255_255/0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgb(0_0_0/0.28),transparent_60%)]" />
          <div className="rings absolute inset-0 text-white" />
        </div>

        <LineArt />

        <div className="relative mx-auto max-w-md rounded-3xl bg-paper p-5 text-ink shadow-[0_30px_80px_-30px_rgb(0_0_0/0.55)] sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
              <span className="size-1.5 rounded-full bg-accent" /> Expansion plan
            </p>
            <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-mute">
              Example
            </span>
          </div>
          <p className="mt-3 text-lg font-medium tracking-tight">Snack brand · Madhya Pradesh</p>
          <p className="text-sm text-ink-mute">From one city online to three cities on shelves</p>

          <ul className="mt-5 space-y-3.5">
            {PLAN.map((row) => (
              <li key={row.city}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{row.city}</span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-mute">{row.status}</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper-2">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${row.progress * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-4">
            {[
              ["Distributors", "6 of 8"],
              ["Outlets live", "1,240"],
              ["Secondary", "+18% m/m"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.6875rem] text-ink-mute">{k}</dt>
                <dd className="mt-0.5 text-[0.95rem] font-medium tracking-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="relative mt-5 text-center font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/60">
          Illustrative example · every plan is built from your own numbers
        </p>
      </div>
    </div>
  );
}

// Warehouse and truck on the left, kirana store on the right, a dashed route between them.
function LineArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1100 300"
      preserveAspectRatio="xMidYMax meet"
      className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[78%] w-full text-white/55 md:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ground */}
      <path d="M20 284h1060" opacity="0.6" />

      {/* warehouse */}
      <path d="M40 284V150l85-48 85 48v134" />
      <path d="M40 150h170" opacity="0.5" />
      <path d="M78 284v-82h94v82" />
      {[214, 226, 238, 250, 262, 274].map((y) => (
        <path key={y} d={`M78 ${y}h94`} opacity="0.45" />
      ))}
      <path d="M110 128h30v12h-30z" opacity="0.7" />

      {/* truck */}
      <g>
        <path d="M232 268v-58h92v58" />
        <path d="M324 228h26l18 20v20h-44" />
        <path d="M334 232h14l12 14h-26z" opacity="0.6" />
        <circle cx="256" cy="272" r="11" />
        <circle cx="344" cy="272" r="11" />
        <path d="M244 230h56M244 244h40" opacity="0.45" />
      </g>

      {/* route */}
      <path d="M380 262C520 262 560 200 690 214S800 262 860 262" strokeDasharray="2 10" className="dash-drift" opacity="0.9" />
      <circle cx="380" cy="262" r="4" fill="currentColor" stroke="none" />
      <circle cx="860" cy="262" r="4" fill="currentColor" stroke="none" />

      {/* kirana store */}
      <path d="M880 284V170h190v114" />
      <path d="M870 170l14-30h182l14 30z" />
      {[902, 934, 966, 998, 1030].map((x) => (
        <path key={x} d={`M${x} 140l-6 30`} opacity="0.5" />
      ))}
      <path d="M900 284v-70h70v70" />
      <path d="M985 200h65v84h-65z" opacity="0.8" />
      <path d="M985 228h65M985 256h65" opacity="0.5" />
      {[992, 1006, 1020, 1034].map((x) => (
        <path key={`a${x}`} d={`M${x} 216v-8h8v8M${x} 244v-8h8v8M${x} 272v-8h8v8`} opacity="0.6" />
      ))}
      <path d="M900 236h70" opacity="0.5" />
      <path d="M940 160h40" opacity="0.6" />
    </svg>
  );
}
