# Mootea — bubble tea ordering site (Marrakech)

Phone-first landing page + online menu for Mootea. Guests build their order (size, ice, sweetness, toppings), choose delivery or pickup, and the order is sent **pre-written on WhatsApp** to the shop. Payment is on delivery or at the counter. No server, no fees.

Stack: React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion, Lucide React. Font: Kanit.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # production build in dist/
```

Any static host works (Netlify config included: build `npm run build`, publish `dist`).

## Before going live

Edit `src/data/config.ts`:

- `whatsapp`: the shop's WhatsApp number, digits only, international format (e.g. `2126XXXXXXXX`). **It is a placeholder now.**
- `instagram`, `address`, `mapsUrl`, `hours`.
- `ZONES`: delivery areas and fees. The current prices are an estimate for Marrakech; adjust them to your courier.
- `ORDERING.minOrder` (60 DH) and `ORDERING.freeDeliveryFrom` (250 DH).

The menu (all drinks, prices M/L, toppings, ice and sugar levels) is in `src/data/menu.ts`, transcribed from the in-store menu.

## Images

3D drink renders in `public/drinks/` were generated with Higgsfield (GPT Image 2.5, transparent background) and are illustrative; the menu shows "Images are illustrative". Some drinks share an image (e.g. the hot drinks). Replace any file with a real photo of the same name to update it.

## Page structure

Hero (magnetic 3D cup) → scrolling drink marquee → About → How to order → Top sellers (stacking cards) → Menu (search, category chips, 3D tilt cards, customise sheet) → Delivery zones + contact. A floating "View order" bar opens the cart and checkout.

## WhatsApp Business tips

- Use WhatsApp Business: greeting message, business hours, away message outside opening hours.
- Quick replies, e.g. `/ok` → "Order confirmed! Ready in about 30 minutes."
- Label new chats "New order" to keep track.
- The site can't know if the guest pressed Send in WhatsApp; the order exists once the message arrives.
