"use client";

import { useState, type FormEvent } from "react";
import { BRAND, whatsappLink } from "@/lib/site";
import { ArrowRight } from "@/components/Icons";

// Urumi-style input CTA: name a city, and WhatsApp opens with the brief already written.
export function ExpansionInput() {
  const [city, setCity] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const where = city.trim();
    const message = where
      ? `Hi ${BRAND.name}, we want to start selling in ${where}. Can we talk about an expansion plan?`
      : `Hi ${BRAND.name}, we'd like to talk about growing our distribution.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto flex w-full max-w-md items-center gap-1.5 rounded-full border border-line bg-white/70 p-1.5 shadow-[0_12px_40px_-18px_rgb(0_0_0/0.22)] backdrop-blur"
    >
      <label htmlFor="expansion-city" className="sr-only">
        Which city do you want to sell in next?
      </label>
      <input
        id="expansion-city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Next city? e.g. Indore"
        autoComplete="address-level2"
        className="min-w-0 flex-1 bg-transparent pl-4 text-[0.95rem] text-ink placeholder:text-ink-mute focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[0.84rem] font-medium text-white transition-colors hover:bg-accent-strong sm:px-5"
      >
        <span className="sm:hidden">Get a plan</span>
        <span className="hidden sm:inline">Get my expansion plan</span>
        <ArrowRight className="size-3.5" />
      </button>
    </form>
  );
}
