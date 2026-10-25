// Page copy and data. Track record figures come from the founder's LinkedIn (shared 2026-10-25);
// confirm each with him before launch.

export const HERO_WORDS = ["get on more shelves.", "enter new cities.", "build real distribution.", "win corporate orders."];

export const EXPERIENCE_AT = ["Samsung", "Coca-Cola", "Reliance", "Spice", "Swiss Military", "Meizu"];

export type Service = {
  title: string;
  body: string;
  points: string[];
  href?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Distribution & channel setup",
    body: "The route from your warehouse to the shelf: super stockists, distributors and the retailers they actually reach. We find, appoint and onboard partners on terms that keep them selling you.",
    points: ["Channel design", "Distributor appointment", "Margins & credit terms"],
  },
  {
    title: "Market expansion & business development",
    body: "New cities and states, entered in the right order. We analyse each market, size the opportunity, set schemes that work for distributors and retailers, then open doors on the ground.",
    points: ["Market analysis", "City sequencing", "Launch schemes"],
  },
  {
    title: "Modern trade & quick commerce",
    body: "Large format retail handled end to end: vendor registration, listings, margins, promotions and in-store visibility. Quick commerce runs alongside general trade, so your channels support each other instead of fighting on price.",
    points: ["Chain vendor onboarding", "Q-commerce listings", "Channel price discipline"],
  },
  {
    title: "Sales teams & in-store promoters",
    body: "Hire and lead the field team, set beats and targets, and run in-store promoter programmes that turn shelf space into sales. A distributor management system shows secondary and tertiary sales, not just what you billed.",
    points: ["Team structure & incentives", "ISD programmes", "DMS rollout"],
  },
  {
    title: "Brand, pricing & profitability",
    body: "Brand positioning and trade marketing that sell through, a product mix built for each channel, and selling prices managed so growth adds margin, not just volume. Monthly forecasts keep stock and targets in step.",
    points: ["Product mix", "ASP management", "Sales forecasting"],
  },
  {
    title: "Corporate & B2B gifting",
    body: "Curated gifts for employees, clients and channel partners, sourced from brands we know, branded for you and delivered across India.",
    points: ["Festive gifting", "Onboarding kits", "Dealer rewards"],
    href: "/corporate-gifting",
  },
];

export const STEPS = [
  {
    title: "Audit",
    timing: "Weeks 1-2",
    body: "We study your numbers, channels, pricing and partners, ride along with your field team and walk the market. You get a clear plan: which cities, which channels, which partners, in what order.",
  },
  {
    title: "Build",
    timing: "Months 1-3",
    body: "We appoint distributors, set schemes and margins, hire and train the team, and put reporting in place. Hands-on, in the market, not from a deck.",
  },
  {
    title: "Scale",
    timing: "Ongoing",
    body: "Monthly reviews of primary, secondary and tertiary sales. We fix what is slowing down, and open the next market once the current one is working.",
  },
];

export const TRACK_RECORD = [
  { value: "₹45 Cr", label: "monthly business run across Mumbai and Thane", source: "Samsung India" },
  { value: "3,100", label: "outlets covered through 9 distributors in Jaipur", source: "Hindustan Coca-Cola" },
  { value: "15 days", label: "to set up a service network across Mumbai", source: "Reach Mobiletech" },
  { value: "130", label: "in-store promoters, alongside a 110-person field sales force", source: "Samsung India" },
  { value: "2 months", label: "to appoint distributors and clear pending trade issues across Mumbai, Goa, Maharashtra and MP", source: "Reach Mobiletech" },
  { value: "13", label: "regional distributors managed across Mumbai and Goa", source: "Samsung India" },
];

export type Cell = string | boolean;

// The first cell of each row is us; `columns` lists the alternatives that follow it.
export const COMPARISON: { columns: string[]; rows: { label: string; cells: Cell[] }[] } = {
  columns: ["Full-time sales head", "Large consulting firm", "Distribution platform"],
  rows: [
    { label: "Time to start", cells: ["This month", "3 to 6 months to hire", "Weeks of scoping", "Fast, in their cities"] },
    { label: "Who does the work", cells: ["A 21-year operator, hands-on", "One person, learning your category", "Mostly junior analysts", "Their team, their priorities"] },
    { label: "You own the distributor network", cells: [true, true, "Advice only", false] },
    { label: "How you pay", cells: ["Fixed monthly fee", "Senior salary plus ESOPs", "Premium project fees", "A cut of every sale"] },
    { label: "Corporate gifting as a channel", cells: [true, false, false, false] },
  ],
};

export const CAREER = [
  { year: "2022", role: "Vice President", org: "Swiss Military" },
  { year: "2017", role: "Consultant to consumer brands", org: "Electronics, luggage, batteries" },
  { year: "2015", role: "DGM Sales, West India", org: "Reach Mobiletech" },
  { year: "2013", role: "Senior Manager, Channel Sales & Modern Trade", org: "Spice Retail" },
  { year: "2008", role: "Area Business Manager", org: "Samsung India" },
  { year: "2006", role: "Sales", org: "Reliance Communications" },
  { year: "2004", role: "Sales Officer", org: "Hindustan Coca-Cola" },
];

export const OCCASIONS = [
  { icon: "festive", title: "Festive gifting", body: "Diwali, Eid, Christmas and New Year hampers for teams and clients." },
  { icon: "onboarding", title: "Onboarding kits", body: "Welcome boxes that make day one feel considered, shipped to homes or offices." },
  { icon: "client", title: "Client & partner gifts", body: "Premium, branded gifts for the people who keep your business running." },
  { icon: "channel", title: "Dealer & channel rewards", body: "Scheme rewards that move distributors and retailers. Our home ground." },
  { icon: "recognition", title: "Rewards & recognition", body: "Milestones, awards and long-service gifts with a personal note." },
  { icon: "events", title: "Events & conferences", body: "Delegate kits and speaker gifts, delivered to the venue on time." },
] as const;

export const BUDGETS = ["Under ₹500", "₹500 to ₹1,500", "₹1,500 to ₹5,000", "₹5,000 and above"];

export const GIFTING_REASONS = [
  {
    title: "Sourced from brands we know",
    body: "We work with consumer brands every day, so the catalogue goes beyond the usual mugs and diaries: new Indian brands, curated and quality-checked.",
  },
  {
    title: "Branded and packed for you",
    body: "Logo printing, custom sleeves and boxes, personal notes. Every gift looks like it came from you, not from a vendor.",
  },
  {
    title: "Built for procurement",
    body: "One point of contact, clear quotes, GST invoices and tracked delivery to one office or many addresses.",
  },
];

export const GIFTING_STEPS = [
  { title: "Share the brief", body: "Occasion, quantity, budget per gift, cities and deadline." },
  { title: "Get a curated shortlist", body: "Options that fit the brief, with samples on request." },
  { title: "Branding & packing", body: "Your logo, packaging and notes, approved before production." },
  { title: "Delivered", body: "Dispatched with tracking, invoiced with GST." },
];
