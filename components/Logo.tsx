import { BRAND } from "@/lib/site";

// Placeholder mark until the identity is designed: one source node branching out to three.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="var(--accent)" />
      <path d="M8 14h4.5m0 0L19.5 8.5M12.5 14h7m-7 0 7 5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9" />
      <circle cx="8" cy="14" r="2.2" fill="white" />
      <circle cx="19.5" cy="8.5" r="1.6" fill="white" />
      <circle cx="19.5" cy="14" r="1.6" fill="white" />
      <circle cx="19.5" cy="19.5" r="1.6" fill="white" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="size-7" />
      <span className="text-[1.05rem] font-medium tracking-tight">{BRAND.name}</span>
    </span>
  );
}
