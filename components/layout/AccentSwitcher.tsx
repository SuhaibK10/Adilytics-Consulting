"use client";

import { useEffect, useState } from "react";
import { ACCENTS, type AccentId } from "@/lib/site";

// Pitch-phase helper: flips --accent live and keeps ?accent= in the URL so a link shares the same colour.
export function AccentSwitcher() {
  const [current, setCurrent] = useState<AccentId>("forest");

  useEffect(() => {
    const fromBoot = document.documentElement.getAttribute("data-accent") as AccentId | null;
    if (fromBoot) setCurrent(fromBoot);
  }, []);

  function pick(id: AccentId) {
    setCurrent(id);
    const root = document.documentElement;
    if (id === "forest") root.removeAttribute("data-accent");
    else root.setAttribute("data-accent", id);
    try {
      sessionStorage.setItem("accent", id);
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("accent", id);
    window.history.replaceState(null, "", url);
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 rounded-full border border-line bg-paper/85 py-1.5 pl-3 pr-1.5 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.25)] backdrop-blur-xl">
      <span className="eyebrow mr-1 text-[0.625rem]!">Accent</span>
      {ACCENTS.map((a) => (
        <button
          key={a.id}
          type="button"
          onClick={() => pick(a.id)}
          className={`size-6 rounded-full transition-transform hover:scale-110 ${current === a.id ? "ring-2 ring-ink/70 ring-offset-2 ring-offset-paper" : ""}`}
          style={{ background: a.swatch }}
          aria-label={`Use ${a.label} accent`}
          aria-pressed={current === a.id}
          title={a.label}
        />
      ))}
    </div>
  );
}
