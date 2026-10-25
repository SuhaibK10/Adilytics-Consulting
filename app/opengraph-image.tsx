import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";
import { MAP_H, MAP_W, NETWORK } from "@/lib/network";

// Link preview card for WhatsApp, LinkedIn and Slack, rendered at build time. The renderer has no CSS
// variables, so colours are the forest accent in hex; fonts are static TTF cuts of the site's own (app/fonts/og).
export const alt = `${BRAND.name}: sales, distribution and corporate gifting partner for consumer brands`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const C = {
  paper: "#f7f5f0",
  ink: "#1b1e23",
  soft: "#50545b",
  mute: "#75787d",
  accent: "#245c48",
  bright: "#8fb8a7",
  night: "#0f1b17",
};

const svgUrl = (svg: string) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

const LOGO = svgUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="${C.accent}"/><path d="M8 14h4.5m0 0L19.5 8.5M12.5 14h7m-7 0 7 5.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.9"/><circle cx="8" cy="14" r="2.2" fill="#fff"/><circle cx="19.5" cy="8.5" r="1.6" fill="#fff"/><circle cx="19.5" cy="14" r="1.6" fill="#fff"/><circle cx="19.5" cy="19.5" r="1.6" fill="#fff"/></svg>`,
);

// The homepage map, frozen: same cities, routes and outlet dots
function mapImage() {
  const { hub, stockists, distributors, trunk, branches, outlets } = NETWORK;
  const parts = [
    ...outlets.map((o) => `<circle cx="${o.x.toFixed(1)}" cy="${o.y.toFixed(1)}" r="1.2" fill="${C.bright}" opacity="${(o.o * 0.8).toFixed(2)}"/>`),
    ...branches.map((r) => `<path d="${r.d}" stroke="${C.bright}" stroke-opacity="0.35" stroke-width="1" fill="none"/>`),
    ...trunk.map((r) => `<path d="${r.d}" stroke="${C.bright}" stroke-opacity="0.9" stroke-width="2.2" fill="none"/>`),
    ...distributors.map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="3.2" fill="${C.bright}"/>`),
    ...stockists.map((s) => `<circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="5" fill="${C.night}" stroke="${C.bright}" stroke-width="2"/>`),
    `<circle cx="${hub.x}" cy="${hub.y}" r="18" fill="${C.bright}" opacity="0.2"/>`,
    `<circle cx="${hub.x}" cy="${hub.y}" r="7.5" fill="#fff"/>`,
  ];
  return svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAP_W} ${MAP_H}">${parts.join("")}</svg>`);
}

export default async function Image() {
  // Literal paths, so the bundler only traces these files rather than the whole project
  const [geist, mono, serif, louisPolo, ovastar] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/og/geist-500.ttf")),
    readFile(join(process.cwd(), "app/fonts/og/geist-mono-400.ttf")),
    readFile(join(process.cwd(), "app/fonts/og/instrument-serif-italic.ttf")),
    readFile(join(process.cwd(), "public/clients/louis-polo.svg")),
    readFile(join(process.cwd(), "public/clients/ovastar.png")),
  ]);
  const mapHeight = 500;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: C.paper, color: C.ink, fontFamily: "Geist" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "60px 28px 60px 68px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={LOGO} width={46} height={46} alt="" />
            <span style={{ fontSize: 32, letterSpacing: -0.8 }}>{BRAND.name}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "Geist Mono", fontSize: 17, letterSpacing: 3.2, color: C.mute, textTransform: "uppercase" }}>
              21+ years of distribution in India
            </span>
            <span style={{ marginTop: 22, fontSize: 58, lineHeight: 1.06, letterSpacing: -2.1 }}>The partner consumer</span>
            <span style={{ fontSize: 58, lineHeight: 1.06, letterSpacing: -2.1 }}>brands use to</span>
            <span style={{ marginTop: 4, fontFamily: "Instrument Serif", fontStyle: "italic", fontSize: 76, lineHeight: 1.05, letterSpacing: -1, color: C.accent }}>
              get on more shelves.
            </span>
          </div>

          {/* Current clients, same ink logos as the homepage */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontFamily: "Geist Mono", fontSize: 14, letterSpacing: 2.8, color: C.mute, textTransform: "uppercase" }}>Now working with</span>
            <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
              <img src={`data:image/svg+xml;base64,${louisPolo.toString("base64")}`} width={94} height={52} alt="" />
              <img src={`data:image/png;base64,${ovastar.toString("base64")}`} width={136} height={35} alt="" />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 450,
            margin: 22,
            borderRadius: 36,
            background: C.night,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -60,
              top: -80,
              width: 520,
              height: 520,
              borderRadius: 999,
              backgroundImage: "radial-gradient(circle, rgba(143,184,167,0.22), rgba(143,184,167,0) 70%)",
            }}
          />
          <img src={mapImage()} width={Math.round((mapHeight * MAP_W) / MAP_H)} height={mapHeight} alt="" style={{ marginTop: -24 }} />
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 26,
              display: "flex",
              justifyContent: "center",
              fontFamily: "Geist Mono",
              fontSize: 12,
              letterSpacing: 1.8,
              color: "rgba(143,184,167,0.85)",
              textTransform: "uppercase",
            }}
          >
            1 warehouse · 8 stockists · 62 distributors
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
        { name: "Instrument Serif", data: serif, weight: 400, style: "italic" },
      ],
    },
  );
}
