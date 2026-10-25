import { COMPARISON, type Cell } from "@/lib/content";
import { BRAND } from "@/lib/site";
import { SectionHeading, Em } from "@/components/SectionHeading";
import { Check, Cross } from "@/components/Icons";

function Value({ cell, ours }: { cell: Cell; ours: boolean }) {
  if (cell === true)
    return (
      <span className={`inline-grid size-6 place-items-center rounded-full ${ours ? "bg-accent text-white" : "bg-paper-2 text-ink"}`}>
        <Check className="size-3.5" />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (cell === false)
    return (
      <span className="inline-grid size-6 place-items-center rounded-full text-ink-mute">
        <Cross className="size-3.5" />
        <span className="sr-only">No</span>
      </span>
    );
  return <span>{cell}</span>;
}

// "Us vs the alternatives" table: the choice founders are actually weighing.
export function Comparison() {
  const columns = [BRAND.name, ...COMPARISON.columns];
  return (
    <section className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Why brands choose us"
        title={
          <>
            Senior experience, <Em>without the overhead.</Em>
          </>
        }
        intro="Most growing brands weigh the same options. Here is how they compare."
      />

      {/* Phones: one card per question, so nothing scrolls sideways */}
      <div className="mt-12 grid gap-3 md:hidden">
        {COMPARISON.rows.map((row, r) => (
          <div
            key={row.label}
            className="rounded-3xl border border-line bg-white/55 p-5"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${(r % 2) * 80}ms` }}
          >
            <p className="eyebrow">{row.label}</p>
            <dl className="mt-3 divide-y divide-line text-[0.92rem]">
              {row.cells.map((cell, i) => {
                const inline = typeof cell === "boolean";
                return (
                  <div
                    key={i}
                    className={`py-2.5 ${inline ? "flex items-center justify-between gap-4" : ""} ${i === 0 ? "-mx-3 rounded-2xl border-0 bg-accent-soft px-3" : ""}`}
                  >
                    <dt className={`text-[0.8rem] ${i === 0 ? "font-medium text-accent-strong" : "text-ink-mute"}`}>{columns[i]}</dt>
                    <dd className={`leading-snug ${inline ? "" : "mt-0.5"} ${i === 0 ? "font-medium text-ink" : "text-ink-soft"}`}>
                      <Value cell={cell} ours={i === 0} />
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-12 hidden overflow-hidden rounded-3xl border border-line bg-white/55 md:block" data-reveal>
        <table className="w-full border-collapse text-left text-[0.92rem]">
          <thead>
            <tr>
              <th scope="col" className="w-[20%] p-5 font-normal">
                <span className="sr-only">Criteria</span>
              </th>
              {columns.map((c, i) => (
                <th
                  key={c}
                  scope="col"
                  className={`w-[20%] p-5 align-bottom font-medium tracking-tight ${i === 0 ? "rounded-t-2xl bg-accent text-white" : "text-ink-soft"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map((row, r) => (
              <tr key={row.label} className="border-t border-line">
                <th scope="row" className="p-5 font-mono text-[0.6875rem] font-normal uppercase tracking-[0.12em] text-ink-mute">
                  {row.label}
                </th>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`p-5 align-top leading-snug ${
                      i === 0 ? `bg-accent-soft font-medium text-ink ${r === COMPARISON.rows.length - 1 ? "rounded-b-2xl" : ""}` : "text-ink-soft"
                    }`}
                  >
                    <Value cell={cell} ours={i === 0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
