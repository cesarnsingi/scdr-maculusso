# SC Dr. Maculusso — Official Website

> **Sport Clube Desportivo e Recriativo do Maculusso**  
> Liga Nacional de Futsal · Luanda, Angola

---

## Overview

Official website for SC Dr. Maculusso, an Angolan futsal club competing in the Liga Nacional de Futsal. The site is fully bilingual (Portuguese / English) and built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | Next.js 14 (App Router)           |
| Language   | TypeScript (strict mode)          |
| Styling    | Tailwind CSS v3                   |
| Fonts      | Bebas Neue · Barlow Condensed · Barlow (Google Fonts via `next/font`) |
| i18n       | Custom hook — no external library |
| Deployment | Vercel (recommended) or Docker    |

---

## Project Structure

```
scdrmaculusso/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, html shell
│   │   ├── page.tsx            # Home page — composes all sections
│   │   └── globals.css         # Tailwind directives + global animations
│   │
│   ├── components/
│   │   ├── layout/             # Persistent layout components
│   │   │   ├── Navbar.tsx      # Sticky nav with language toggle + mobile drawer
│   │   │   ├── Ticker.tsx      # Scrolling news ticker (top of page)
│   │   │   ├── Footer.tsx      # Four-column footer
│   │   │   └── index.ts        # Barrel export
│   │   │
│   │   ├── sections/           # One file per page section
│   │   │   ├── HeroSection.tsx     # Full-viewport hero with stats
│   │   │   ├── SquadSection.tsx    # Filterable player grid
│   │   │   ├── PlayerCard.tsx      # Individual player card
│   │   │   ├── StandingsSection.tsx # League table
│   │   │   ├── HistorySection.tsx  # Club info + season stats
│   │   │   ├── CtaBanner.tsx       # Red CTA strip
│   │   │   ├── ContactSection.tsx  # Contact info cards
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   └── ui/                 # Reusable primitives
│   │       ├── Button.tsx      # Primary / Outline / White variants
│   │       ├── ClubCrest.tsx   # Hexagonal SVG crest
│   │       ├── SectionLabel.tsx # Red overline label
│   │       ├── SectionTitle.tsx # Large section heading
│   │       ├── StatBlock.tsx   # Info card with red left border
│   │       └── index.ts        # Barrel export
│   │
│   ├── hooks/
│   │   ├── useLocale.ts        # Language state — returns locale + typed translations
│   │   └── useScrolled.ts      # Returns true once page scrolls past threshold
│   │
│   ├── i18n/
│   │   └── translations.ts     # All PT and EN strings, fully typed
│   │
│   ├── lib/
│   │   └── data.ts             # Players array, standings array, club constants
│   │
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces and types
│
├── public/                     # Static assets (add team photos here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type-check

```bash
npm run type-check
```

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Bilingual System (PT / EN)

The i18n system is intentionally simple — no external library needed.

**How it works:**

1. `src/i18n/translations.ts` — a single object with `pt` and `en` keys, each containing fully typed translation strings organised by section.
2. `src/hooks/useLocale.ts` — a React hook that holds `locale` state and exposes `t` (the active translation object). Called once at the top of `page.tsx`.
3. `t` and `locale` are passed down as props to every section and component that needs them.

**Switching languages:**

The PT / EN buttons in the Navbar call `onLocaleChange`, which updates state in `page.tsx`. Every section re-renders automatically because they receive `t` as a prop.

**Adding a string:**

1. Add the key to both `pt` and `en` in `translations.ts`
2. Add the key to the corresponding interface in `types/index.ts`
3. Use `t.section.key` in your component

---

## Updating Data

All club data lives in `src/lib/data.ts`.

### Add a player

```ts
// src/lib/data.ts
{ number: 16, name: 'New Player', position: 'ALA', nationality: 'ANG',
  city: 'Luanda', age: 24, games: 0, goals: 0 },
```

### Update standings

Edit the `STANDINGS` array. The `isUs: true` flag on SC Dr. Maculusso's row controls the red highlight in the table.

### Update stats displayed in the hero / history

The hero mini-stats are currently hardcoded in `HeroSection.tsx`. For a live-data version, replace those values with a fetch from your API.

---

## Adding Player Photos

1. Add images to `public/players/` (e.g. `public/players/10-helber-garcia.jpg`)
2. In `PlayerCard.tsx`, replace the initials `<div>` with a `next/image` `<Image>` component:

```tsx
import Image from 'next/image'

<Image
  src={`/players/${player.number}-${player.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
  alt={player.name}
  width={44}
  height={44}
  className="rounded-full object-cover"
/>
```

---

## Deployment

### Vercel (recommended — zero config)

```bash
# Push to GitHub, then connect repo at vercel.com
# Or deploy directly:
npx vercel --prod
```

### Docker

```bash
docker build -t maculusso .
docker run -p 3000:3000 maculusso
```

A `Dockerfile` using the `output: 'standalone'` Next.js mode (already set in `next.config.ts`) is the recommended approach for VPS/container deployments.

---

## Design System

| Token         | Value                              |
|---------------|------------------------------------|
| Primary red   | `#CC0000`                          |
| Gold accent   | `#FFB700`                          |
| Background    | `#0D0D0D`                          |
| Surface 1     | `#111111`                          |
| Surface 2     | `#1A1A1A`                          |
| Border        | `rgba(255,255,255,0.07)`           |
| Display font  | Bebas Neue (headings, hero)        |
| Condensed font| Barlow Condensed (UI labels, nav)  |
| Body font     | Barlow (paragraphs, descriptions)  |

---

## Scripts

| Command              | Description                       |
|----------------------|-----------------------------------|
| `npm run dev`        | Start dev server on port 3000     |
| `npm run build`      | Production build                  |
| `npm run start`      | Start production server           |
| `npm run lint`       | Run ESLint                        |
| `npm run type-check` | TypeScript type check (no emit)   |

---

## License

© 2025 SC Dr. Maculusso. All rights reserved.
