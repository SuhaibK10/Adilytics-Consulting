// Site-wide constants. "Adilytics" is the working brand name: change BRAND.name and it updates everywhere.
// Contact details are blank until the client confirms them; links fall back gracefully while they are.
export const BRAND = {
  name: "Adilytics",
  legalName: "Adilytics",
  founder: "Adil Ali Khan",
  description:
    "Sales, distribution and corporate gifting partner for consumer brands in India. Strategy and hands-on execution, led by an operator with 21+ years on the ground.",
};

export const CONTACT = {
  // Digits only with country code, e.g. "919876543210". Empty opens WhatsApp's contact picker instead.
  whatsappNumber: "",
  email: "",
  location: "New Delhi, India",
};

export function whatsappLink(message: string) {
  const base = CONTACT.whatsappNumber ? `https://wa.me/${CONTACT.whatsappNumber}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Empty CONTACT.email still opens a draft, just without the recipient filled in.
export function emailLink(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Call booking calendar. Times are IST. Days use JavaScript numbering: 0 = Sunday, 6 = Saturday.
export const BOOKING = {
  days: [6, 0],
  times: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"],
  minutes: 30,
  weeksAhead: 6,
  minNoticeHours: 12, // slots sooner than this are hidden
};

export const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#how-we-work", label: "How we work" },
  { href: "/#track-record", label: "Track record" },
  { href: "/#founder", label: "Founder" },
] as const;

export const ACCENTS = [
  { id: "forest", label: "Forest", swatch: "oklch(0.43 0.075 165)" },
  { id: "indigo", label: "Indigo", swatch: "oklch(0.42 0.13 272)" },
  { id: "terracotta", label: "Terracotta", swatch: "oklch(0.54 0.135 42)" },
] as const;

export type AccentId = (typeof ACCENTS)[number]["id"];

// Pitch phase only: the floating picker for comparing accent colours on real pages. Set false once one is chosen.
export const SHOW_ACCENT_SWITCHER = true;
