"use client";

import { useState, type FormEvent } from "react";
import { BUDGETS, OCCASIONS } from "@/lib/content";
import { BRAND, whatsappLink } from "@/lib/site";
import { WhatsApp } from "@/components/Icons";

const FIELD =
  "mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

// No backend yet: the brief is composed into a WhatsApp message, which is how most of these orders start anyway.
export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const line = (label: string, key: string) => (f.get(key) ? `${label}: ${f.get(key)}` : null);
    const message = [
      `Hi ${BRAND.name}, we'd like a quote for corporate gifts.`,
      "",
      line("Name", "name"),
      line("Company", "company"),
      line("Occasion", "occasion"),
      line("Quantity", "quantity"),
      line("Budget per gift", "budget"),
      line("Delivery to", "cities"),
      line("Needed by", "date"),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm text-ink-soft">
        Your name
        <input name="name" required autoComplete="name" className={FIELD} />
      </label>
      <label className="text-sm text-ink-soft">
        Company
        <input name="company" required autoComplete="organization" className={FIELD} />
      </label>
      <label className="text-sm text-ink-soft">
        Occasion
        <select name="occasion" className={FIELD} defaultValue={OCCASIONS[0].title}>
          {OCCASIONS.map((o) => (
            <option key={o.title}>{o.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label className="text-sm text-ink-soft">
        Number of gifts
        <input name="quantity" type="number" min={1} inputMode="numeric" placeholder="e.g. 250" className={FIELD} />
      </label>
      <label className="text-sm text-ink-soft">
        Budget per gift
        <select name="budget" className={FIELD} defaultValue={BUDGETS[1]}>
          {BUDGETS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className="text-sm text-ink-soft">
        Needed by
        <input name="date" type="date" className={FIELD} />
      </label>
      <label className="text-sm text-ink-soft sm:col-span-2">
        Delivery cities
        <input name="cities" placeholder="e.g. Delhi office, plus 40 home addresses across India" className={FIELD} />
      </label>

      <div className="flex flex-col items-start gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-mute">{sent ? "WhatsApp opened with your brief. Send it and we will reply with options." : "Opens WhatsApp with your brief filled in."}</p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
        >
          <WhatsApp className="size-4.5" /> Request a quote
        </button>
      </div>
    </form>
  );
}
