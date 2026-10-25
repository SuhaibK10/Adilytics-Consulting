// Illustrative distribution network for the map section. Cities sit at their real coordinates;
// no country outline is drawn, so the shape of India comes from the cities themselves.

type City = { name: string; lat: number; lon: number; labelLeft?: boolean };

const HUB: City = { name: "Delhi", lat: 28.61, lon: 77.21 };

const SUPER_STOCKISTS: City[] = [
  { name: "Mumbai", lat: 19.08, lon: 72.88, labelLeft: true },
  { name: "Kolkata", lat: 22.57, lon: 88.36 },
  { name: "Bengaluru", lat: 12.97, lon: 77.59, labelLeft: true },
  { name: "Chennai", lat: 13.08, lon: 80.27 },
  { name: "Hyderabad", lat: 17.39, lon: 78.49 },
  { name: "Ahmedabad", lat: 23.02, lon: 72.57, labelLeft: true },
  { name: "Lucknow", lat: 26.85, lon: 80.95 },
  { name: "Guwahati", lat: 26.14, lon: 91.74 },
];

const DISTRIBUTORS: City[] = [
  { name: "Leh", lat: 34.15, lon: 77.58 },
  { name: "Srinagar", lat: 34.08, lon: 74.8 },
  { name: "Jammu", lat: 32.73, lon: 74.86 },
  { name: "Amritsar", lat: 31.63, lon: 74.87 },
  { name: "Ludhiana", lat: 30.9, lon: 75.85 },
  { name: "Shimla", lat: 31.1, lon: 77.17 },
  { name: "Chandigarh", lat: 30.73, lon: 76.78 },
  { name: "Dehradun", lat: 30.32, lon: 78.03 },
  { name: "Meerut", lat: 28.98, lon: 77.71 },
  { name: "Bareilly", lat: 28.37, lon: 79.43 },
  { name: "Bikaner", lat: 28.02, lon: 73.31 },
  { name: "Agra", lat: 27.18, lon: 78.01 },
  { name: "Aligarh", lat: 27.88, lon: 78.08 },
  { name: "Jaipur", lat: 26.91, lon: 75.79 },
  { name: "Jodhpur", lat: 26.24, lon: 73.02 },
  { name: "Ajmer", lat: 26.45, lon: 74.64 },
  { name: "Gwalior", lat: 26.22, lon: 78.18 },
  { name: "Kanpur", lat: 26.45, lon: 80.33 },
  { name: "Gorakhpur", lat: 26.76, lon: 83.37 },
  { name: "Kota", lat: 25.18, lon: 75.83 },
  { name: "Udaipur", lat: 24.58, lon: 73.71 },
  { name: "Prayagraj", lat: 25.43, lon: 81.85 },
  { name: "Varanasi", lat: 25.32, lon: 82.97 },
  { name: "Patna", lat: 25.59, lon: 85.14 },
  { name: "Siliguri", lat: 26.73, lon: 88.4 },
  { name: "Dibrugarh", lat: 27.47, lon: 94.91 },
  { name: "Shillong", lat: 25.57, lon: 91.88 },
  { name: "Silchar", lat: 24.83, lon: 92.78 },
  { name: "Imphal", lat: 24.82, lon: 93.94 },
  { name: "Agartala", lat: 23.83, lon: 91.28 },
  { name: "Ranchi", lat: 23.34, lon: 85.31 },
  { name: "Dhanbad", lat: 23.8, lon: 86.43 },
  { name: "Durgapur", lat: 23.52, lon: 87.31 },
  { name: "Bhubaneswar", lat: 20.3, lon: 85.82 },
  { name: "Sambalpur", lat: 21.47, lon: 83.97 },
  { name: "Rajkot", lat: 22.3, lon: 70.8 },
  { name: "Surat", lat: 21.17, lon: 72.83 },
  { name: "Indore", lat: 22.72, lon: 75.86 },
  { name: "Bhopal", lat: 23.26, lon: 77.41 },
  { name: "Jabalpur", lat: 23.18, lon: 79.95 },
  { name: "Raipur", lat: 21.25, lon: 81.63 },
  { name: "Bilaspur", lat: 22.08, lon: 82.15 },
  { name: "Nagpur", lat: 21.15, lon: 79.09 },
  { name: "Nashik", lat: 20.0, lon: 73.79 },
  { name: "Aurangabad", lat: 19.88, lon: 75.34 },
  { name: "Pune", lat: 18.52, lon: 73.86 },
  { name: "Solapur", lat: 17.66, lon: 75.91 },
  { name: "Kolhapur", lat: 16.7, lon: 74.24 },
  { name: "Goa", lat: 15.49, lon: 73.83 },
  { name: "Belagavi", lat: 15.85, lon: 74.5 },
  { name: "Hubballi", lat: 15.36, lon: 75.12 },
  { name: "Visakhapatnam", lat: 17.69, lon: 83.22 },
  { name: "Vijayawada", lat: 16.51, lon: 80.65 },
  { name: "Tirupati", lat: 13.63, lon: 79.42 },
  { name: "Mangaluru", lat: 12.91, lon: 74.86 },
  { name: "Mysuru", lat: 12.3, lon: 76.64 },
  { name: "Salem", lat: 11.66, lon: 78.15 },
  { name: "Kozhikode", lat: 11.26, lon: 75.78 },
  { name: "Coimbatore", lat: 11.02, lon: 76.96 },
  { name: "Madurai", lat: 9.93, lon: 78.12 },
  { name: "Kochi", lat: 9.93, lon: 76.27 },
  { name: "Thiruvananthapuram", lat: 8.52, lon: 76.94 },
];

export const MAP_W = 540;
export const MAP_H = 590;

// Simple equirectangular projection, narrowed by cos(22°) so mid-India isn't stretched sideways.
// Offsets centre the westmost (Rajkot) to eastmost (Dibrugarh) and Leh to Thiruvananthapuram spread.
function project({ lat, lon }: City) {
  return { x: 53 + (lon - 70.8) * 18, y: 36 + (34.4 - lat) * 19.4 };
}

// Deterministic PRNG so server and client render the same outlet dots
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Node = { name: string; x: number; y: number; labelLeft?: boolean };
export type Route = { d: string; dur: number; delay: number };

function curve(a: Node, b: Node, bend: number) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  // Control point pushed off the midpoint, perpendicular to the line
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function build() {
  const rand = mulberry32(42);
  const hub: Node = { name: HUB.name, ...project(HUB) };
  const stockists: Node[] = SUPER_STOCKISTS.map((c) => ({ name: c.name, labelLeft: c.labelLeft, ...project(c) }));
  const distributors: Node[] = DISTRIBUTORS.map((c) => ({ name: c.name, ...project(c) }));

  const trunk: Route[] = stockists.map((s, i) => ({
    d: curve(hub, s, i % 2 ? 0.18 : -0.18),
    dur: 3.6 + rand() * 1.6,
    delay: -rand() * 4,
  }));

  // Each distributor is fed by the nearest super stockist (or the hub itself, for the north)
  const feeders = [hub, ...stockists];
  const branches: Route[] = distributors.map((d) => {
    const from = feeders.reduce((best, f) =>
      Math.hypot(f.x - d.x, f.y - d.y) < Math.hypot(best.x - d.x, best.y - d.y) ? f : best,
    );
    return { d: curve(from, d, rand() > 0.5 ? 0.12 : -0.12), dur: 2.4 + rand() * 1.8, delay: -rand() * 4 };
  });

  // Outlets: a scatter of tiny dots around every city, denser around the big ones
  const outlets: { x: number; y: number; o: number }[] = [];
  const scatter = (n: Node, count: number, radius: number) => {
    for (let i = 0; i < count; i++) {
      const angle = rand() * Math.PI * 2;
      const r = Math.sqrt(rand()) * radius;
      outlets.push({ x: n.x + Math.cos(angle) * r, y: n.y + Math.sin(angle) * r, o: 0.25 + rand() * 0.45 });
    }
  };
  scatter(hub, 34, 20);
  stockists.forEach((s) => scatter(s, 26, 17));
  distributors.forEach((d) => scatter(d, 9, 9));

  return { hub, stockists, distributors, trunk, branches, outlets };
}

export const NETWORK = build();
