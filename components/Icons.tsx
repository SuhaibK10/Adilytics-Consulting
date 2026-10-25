import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const Cross = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 7l10 10M17 7 7 17" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg {...base} strokeWidth={1.5} {...p}>
    <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.3 18.6Z" />
    <path d="M9.2 8.6c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.6.4-1.5.6-2.6.2a8.3 8.3 0 0 1-4.6-4.6c-.4-1.1-.2-2 .2-2.6Z" />
  </svg>
);

// Line icons for the gifting occasions
export function OccasionIcon({ name, ...p }: IconProps & { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    festive: (
      <>
        <path d="M12 3c1.6 2 2.4 3.6 2.4 5a2.4 2.4 0 0 1-4.8 0c0-1.4.8-3 2.4-5Z" />
        <path d="M6 14c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1c0 2.8-2.7 5-6 5s-6-2.2-6-5v-1Z" />
      </>
    ),
    onboarding: (
      <>
        <path d="M3.5 8.5 12 4l8.5 4.5v7L12 20l-8.5-4.5v-7Z" />
        <path d="M3.5 8.5 12 13l8.5-4.5M12 13v7" />
      </>
    ),
    client: (
      <>
        <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
        <path d="M2.5 9h19M12 9v11M12 9c-1.5-3-5-4-5.5-2S9.5 9 12 9Zm0 0c1.5-3 5-4 5.5-2S14.5 9 12 9Z" />
      </>
    ),
    channel: (
      <>
        <path d="M4 10h16l-1.2-4.5H5.2L4 10Z" />
        <path d="M5 10v9.5h14V10M9.5 19.5v-5h5v5" />
      </>
    ),
    recognition: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" />
      </>
    ),
    events: (
      <>
        <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3.5v4M16 3.5v4" />
      </>
    ),
  };
  return (
    <svg {...base} width={22} height={22} {...p}>
      {paths[name]}
    </svg>
  );
}
