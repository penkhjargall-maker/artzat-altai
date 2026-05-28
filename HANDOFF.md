# HANDOFF.md — Арцат Алтайн Уулс (Elbeg Foods)

## 0. Approval Record

- **Company:** Арцат Алтайн Уулс ХХК (Elbeg Foods)
- **Industry:** Mongolian food processing & manufacturing
- **Products:** Meat products, half-processed meat, dumplings (банш)
- **Selected design:** Based on provided design system (elbegfoods-design-system.md)
- **Design files:**
  - `output/artzat-altai/designs/full-design.pen` — Full Pencil design
  - `output/artzat-altai/designs/homepage.png` — Homepage export
  - `output/artzat-altai/designs/products.png` — Products page
  - `output/artzat-altai/designs/tender-b2b.png` — Tender & B2B page
  - `output/artzat-altai/designs/about.png` — About page
  - `output/artzat-altai/designs/contact.png` — Contact page
- **Logo:** Three mountain chevrons (orange #F4862A, red #E0431A, green #1D5C37)

## 1. Design System

### Brand Colors
- **Forest Green:** `#1D5C37` — Primary brand, headings, nav, footer
- **Altai Orange:** `#F4862A` — CTAs, highlights, hover states, stat counters
- **Summit Red:** `#E0431A` — Tags, badges, accent dividers
- **Peak Green:** `#2E8B4A` — Sustainability accents
- **Deep Earth:** `#1A1A18` — Body text, dark sections
- **Off-White:** `#F8F6F2` — Page background
- **Parchment:** `#F0EDE7` — Alternate sections

### Typography
- **Manrope** (700, 800) — Display, headings, brand wordmark
- **Satoshi** (400, 500, 600) — Body, nav, labels, UI copy

### Logo
Three overlapping chevron/mountain shapes:
- Orange → Red-Orange → Green (left to right)
- Wordmark: "АРЦАТ АЛТАЙН УУЛС" in Forest Green

## 2. Pages

### Homepage
1. **Header** — White bg, logo + nav + "ЛАВЛАХ" CTA button
2. **Hero** — Dark bg (#1A1A18), eyebrow (orange), large headline, subtext, two CTAs
3. **Stats Bar** — Forest green bg, 4 animated counters (25+, 150+, 30+, 500T)
4. **Featured Products** — 3 product cards with image placeholders
5. **Manufacturing** — Split layout, image + text
6. **Sustainability** — 3-column icon cards
7. **Closing CTA** — Dark bg with contact buttons
8. **Footer** — Dark bg, 3 columns

### Products Page
- Hero section with title
- 6 product cards in 2 rows (3+3)
- Footer

### Tender & B2B Page
- Hero section
- Industries served (5 cards)
- Certifications (ISO 22000, HACCP, Halal, FDA, Organic)
- Footer

### About Page
- Hero section
- Company story (split layout)
- Values grid (3 cards on dark bg)
- Footer

### Contact Page
- Hero section
- Contact form (name, company, email, phone, message)
- Contact info (address, phone, email)
- Footer

## 3. Components

### Header
- Fixed, 72px height
- White background
- Logo (3 chevrons + wordmark)
- 5 nav links
- "ЛАВЛАХ" CTA button (Forest Green)

### Footer
- Dark background (#1A1A18)
- 3 columns: Logo+tagline, Product links, Contact info
- White text

### Product Card
- White bg, 8px radius
- 3:4 image placeholder
- Summit Red category tag
- Manrope product name
- Satoshi description

### Stat Counter
- Forest Green bg
- Manrope 800, 56px, Altai Orange number
- Satoshi label, white
- 2px orange underline

## 4. Animation

- Motion Level: 2 (Alive)
- Scroll reveals: fade + slide up
- Card hover: translateY(-4px) + shadow lift
- Button hover: background color swap
- Counter animation: count-up on scroll

## 5. Responsive

- Desktop: 1280px max-width
- Tablet: 2 columns
- Mobile: 1 column, stacked
- Touch targets: min 44px

## 6. CMS Structure

### Pages
- `/` — Homepage
- `/products` — Products
- `/tender` — Tender & B2B
- `/about` — About
- `/contact` — Contact
- `/news` — News (optional)

### Menu
1. БҮТЭЭГДЭХҮҮН → /products
2. ТЕНДЕР → /tender
3. МЭДЭЭ → /news
4. БИДНИЙ ТУХАЙ → /about
5. ХОЛБОО → /contact

## 7. Setup Commands

```bash
# Install packages
pnpm add framer-motion lucide-react next-themes

# Fonts
# Manrope & Satoshi via Fontsource or Google Fonts
```

## 8. Files

- `output/artzat-altai/designs/full-design.pen` — Full Pencil design
- `output/artzat-altai/design-tokens.json` — Design tokens
- `output/artzat-altai/ui-libraries.json` — UI libraries
- `output/artzat-altai/HANDOFF.md` — This file
