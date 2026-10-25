# Adilytics: pitch website

Company website for Adilytics (sales, distribution and corporate gifting partner for consumer brands), built by Weblicate. "Adilytics" is the working brand name until the final one is chosen.

## Run it

```bash
pnpm install
pnpm dev                        # http://localhost:3000
pnpm build && pnpm start        # production build
```

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript. No backend: every call to action opens WhatsApp with the message already written.

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero with rotating line and city input, illustrative expansion plan, six services, dark India distribution map, Audit / Build / Scale, founder track record, comparison table, founder timeline, gifting teaser |
| `/corporate-gifting` | Occasions, budget bands, why order with us, how ordering works, quote form (sends the brief to WhatsApp) |

## Changing the brand

- **Name:** `BRAND.name` in `lib/site.ts`. It feeds the header, footer, page titles, WhatsApp messages and the comparison table.
- **Accent colour:** `--accent` in `app/globals.css`. Every tint, glow, button and map route is derived from it. While deciding, add `?accent=indigo` or `?accent=terracotta` to any URL, or use the floating picker (bottom left). Turn the picker off with `SHOW_ACCENT_SWITCHER` in `lib/site.ts`.
- **Logo:** `components/Logo.tsx` and `app/icon.svg` hold a placeholder mark.

## Where things live

- Design tokens, fonts, animations: `app/globals.css`
- Brand, contact, navigation: `lib/site.ts`
- Page copy (services, steps, track record, comparison, career, gifting): `lib/content.ts`
- Map data (city coordinates, routes, outlet dots): `lib/network.ts`

## To confirm before launch

- **Contact details:** the WhatsApp number and email in `lib/site.ts` are blank. Until the number is set, buttons open WhatsApp's contact picker.
- **Track record figures** (`lib/content.ts`) come from Adil's LinkedIn. Confirm each one, and that he is comfortable naming Samsung, Coca-Cola, Reliance, Spice, Swiss Military and Meizu. They are shown as text, not logos.
- **IIM Lucknow:** confirm the programme before it stays on the founder section.
- **Founder photo:** `public/founder.jpg` is only 229px square, so `components/home/Founder.tsx` shows it as a round portrait on the accent panel. A sharper portrait (1000px+ wide, plain background) could fill the whole panel.
- **Gifting promises:** delivery coverage, GST invoicing, samples and lead times on `/corporate-gifting`.
- **Comparison table:** "This month" start and "Fixed monthly fee" assume the engagement model. Adjust once pricing is set.
- **Hero expansion card** and the map are labelled illustrative and are not client data.
- **Indexing:** `robots` is `noindex` in `app/layout.tsx` for the pitch. Remove at launch.

## Notes

- The map draws cities at real coordinates without a country outline, which avoids India's official-boundary rules for published maps.
- Fonts are self-hosted from Google Fonts: Geist, Geist Mono and Instrument Serif (all OFL). The `public/fonts/*-latin-ext` files exist so the ₹ sign renders in Geist.
- Reveal animations only hide content after JavaScript has started, so crawlers and link previews see the full page.
