# Adilytics: pitch website

Company website for Adilytics (sales, distribution and corporate gifting partner for consumer brands), built by Weblicate. "Adilytics" is the working brand name until the final one is chosen.

## Run it

```bash
pnpm install
pnpm dev                        # http://localhost:3000
pnpm build && pnpm start        # production build
```

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript. No backend: calls are booked through the calendar at the foot of every page (`#book`), which opens a pre-written email to the team, and gifting quotes and the catalogue open WhatsApp with the message already written.

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero with rotating line and city input, illustrative expansion plan, six services, dark India distribution map, Audit / Build / Scale, current clients, team track record, comparison table, gifting teaser |
| `/corporate-gifting` | Occasions, budget bands, why order with us, how ordering works, quote form (sends the brief to WhatsApp) |

## Changing the brand

- **Name:** `BRAND.name` in `lib/site.ts`. It feeds the header, footer, page titles, WhatsApp messages and the comparison table.
- **Accent colour:** `--accent` in `app/globals.css`. Every tint, glow, button and map route is derived from it. While deciding, add `?accent=indigo` or `?accent=terracotta` to any URL, or use the floating picker (bottom left). Turn the picker off with `SHOW_ACCENT_SWITCHER` in `lib/site.ts`.
- **Logo:** `components/Logo.tsx` and `app/icon.svg` hold a placeholder mark.

## Where things live

- Design tokens, fonts, animations: `app/globals.css`
- Brand, contact, navigation: `lib/site.ts`
- Page copy (services, steps, clients, track record, comparison, gifting): `lib/content.ts`
- Client logos: `public/clients/`, in ink so they match the palette (Louis Polo from its site's SVG; OvaStar's white-on-red logo converted to ink on transparent)
- Map data (city coordinates, routes, outlet dots): `lib/network.ts`

## To confirm before launch

- **Contact details:** the WhatsApp number and email in `lib/site.ts` are blank. Until the number is set, buttons open WhatsApp's contact picker. Until the email is set, booking requests open a draft with no recipient, so **set the email before sharing the site with prospects**.
- **Booking hours:** Saturdays and Sundays, 10 AM to 5 PM IST (lunch hour skipped), 30-minute calls, up to 6 weeks ahead, at least 12 hours' notice. Change any of it in `BOOKING` in `lib/site.ts`. Requests are not real bookings: the team confirms each one by sending a meeting invite.
- **Company, not a personal profile:** at the owner's request the site has no founder section and speaks as "our team" throughout. Keep new copy that way.
- **Track record figures** (`lib/content.ts`) come from Adil's LinkedIn and are shown as the team's experience. Confirm each one, and that he is comfortable naming Samsung, Coca-Cola, Reliance, Spice, Swiss Military and Meizu. They are shown as text, not logos.
- **Clients:** Louis Polo and OvaStar are named, linked and shown with their logos (also on the link preview card). Confirm both are happy to appear.
- **Gifting promises:** delivery coverage, GST invoicing, samples and lead times on `/corporate-gifting`.
- **Comparison table:** "This month" start and "Fixed monthly fee" assume the engagement model. Adjust once pricing is set.
- **Hero expansion card** and the map are labelled illustrative and are not client data.
- **Indexing:** `robots` is `noindex` in `app/layout.tsx` for the pitch. Remove at launch.

## Notes

- **Link previews** (WhatsApp, LinkedIn, Slack) use `app/opengraph-image.tsx`, rendered at build time from `BRAND`, the client logos and the map data, so a name change updates the card too. It needs TTF fonts, kept as static cuts of the site's fonts in `app/fonts/og/`. WhatsApp caches previews per URL, so after a change, test with a fresh URL (e.g. add `?v=2`).

- The map draws cities at real coordinates without a country outline, which avoids India's official-boundary rules for published maps.
- Fonts are self-hosted from Google Fonts: Geist, Geist Mono and Instrument Serif (all OFL). The `public/fonts/*-latin-ext` files exist so the ₹ sign renders in Geist.
- Reveal animations only hide content after JavaScript has started, so crawlers and link previews see the full page.
