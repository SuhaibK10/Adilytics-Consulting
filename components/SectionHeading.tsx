import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light" }: Props) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} data-reveal>
      <p className={`eyebrow flex items-center gap-2 ${center ? "justify-center" : ""} ${tone === "dark" ? "text-white/55!" : ""}`}>
        <span className={`size-1.5 rounded-full ${tone === "dark" ? "bg-accent-bright" : "bg-accent"}`} />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-balance sm:text-[2.75rem]">{title}</h2>
      {intro && (
        <p className={`mt-4 text-[1.02rem] leading-relaxed text-pretty ${tone === "dark" ? "text-white/65" : "text-ink-soft"}`}>{intro}</p>
      )}
    </div>
  );
}

// Italic serif accent inside headings
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-accent">{children}</em>;
}
