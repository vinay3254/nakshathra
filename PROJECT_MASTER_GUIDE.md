# Nakshatra 2026 - Project Master Guide

This document is the quick, complete reference for the project: setup, architecture, content sections, and visual design system.

## 1. Project Snapshot

- Name: `nakshatra-2026`
- Framework: Next.js 14 (App Router)
- Language: TypeScript + React 18
- Styling: Tailwind CSS + custom global utility classes
- Motion/UI libs: Framer Motion, Lucide React, clsx
- Theme direction: Futuristic space + neon festival aesthetic

## 2. Run and Build

Install and run locally:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## 3. Root Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  FlagshipEvents.tsx
  AllEvents.tsx
  SpecialFeatures.tsx
  CarnivalZone.tsx
  SocietalRecognitions.tsx
  Schedule.tsx
  Sponsors.tsx
  Registration.tsx
  Gallery.tsx
  Team.tsx
  FAQs.tsx
  Contact.tsx
  Footer.tsx
```

## 4. Page Composition (Top to Bottom)

The homepage (`app/page.tsx`) renders sections in this sequence:

1. `Navbar`
2. `Hero`
3. `About`
4. `FlagshipEvents`
5. `AllEvents`
6. `SpecialFeatures`
7. `CarnivalZone`
8. `SocietalRecognitions`
9. `Schedule`
10. `Sponsors`
11. `Registration`
12. `Gallery`
13. `Team`
14. `FAQs`
15. `Contact`
16. `Footer`

Use this order as the canonical experience flow.

## 5. Metadata and Branding

Defined in `app/layout.tsx`:

- Title: `Nakshatra 2026 | Where Stars Converge`
- Description: `3-Day Intercollegiate IT, Cultural & Innovation Festival + 24-Hour Hackathon...`
- OpenGraph present for social previews
- Keywords configured for discoverability

## 6. Typography System

Google fonts loaded through `next/font/google` in `app/layout.tsx`:

- `Orbitron` -> display/headline futuristic feel
- `Rajdhani` -> base body font (`--font-rajdhani`)
- `Exo 2` -> secondary futuristic utility font

Body defaults to Rajdhani and slate text over dark background.

## 7. Color and Theme Tokens

From `app/globals.css`:

```css
--space-black: #030712;
--deep-navy: #0a0f1e;
--cosmic-purple: #1a0a2e;
--neon-cyan: #00f5ff;
--electric-violet: #7c3aed;
--nebula-pink: #ec4899;
--star-gold: #fbbf24;
```

### Practical usage

- Base background: `--space-black`
- Surface depth: `--deep-navy`, transparent glass gradients
- Primary accent: `--neon-cyan`
- Secondary accent: `--electric-violet`
- Highlight accent: `--nebula-pink`
- Premium/award accent: `--star-gold`

## 8. Reusable Visual Utilities

Global utility classes already available:

- `.glass-card` -> frosted/glass panel look
- `.btn-neon` -> animated neon border hover
- `.heading-gradient` -> cyan/violet/pink gradient text
- `.text-glow-cyan`, `.text-glow-violet` -> glow text effects
- `.gradient-border` -> animated-like gradient border outline
- `.section-divider` -> subtle center line divider
- `.card-hover-glow` -> lift + glow hover state
- `.noise-overlay` -> noise texture overlay layer
- `.orbital-ring` -> circular decorative rings
- `.timeline-dot` -> glowing timeline markers
- `.tab-active` -> active tab gradient state
- `.shimmer-effect` -> loading shimmer animation
- `.container-tight` -> constrained max-width layout wrapper
- `.section-pad` -> standard vertical spacing

## 9. Motion Language

Animations in globals:

- `shimmer` (loading/surface movement)
- `float` (ambient hero objects)
- `glow` (pulsing emphasis)
- `border-rotate` (rotational accent)
- `pulse` used by timeline halo

Guideline: keep motion atmospheric and sparse, not distracting.

## 10. Responsive Baseline

- Smooth in-page scroll enabled globally
- Mobile section spacing via media query (`.section-pad` reduces on <= 768px)
- Horizontal overflow locked to prevent accidental side scroll
- Container strategy centered around `.container-tight`

## 11. Component Responsibilities (Quick Matrix)

- `Navbar`: global navigation + section jumps
- `Hero`: first impression, CTA, main positioning message
- `About`: festival identity and mission
- `FlagshipEvents`: high-priority event highlights
- `AllEvents`: full event catalog browsing
- `SpecialFeatures`: unique differentiators
- `CarnivalZone`: fun/experiential area highlights
- `SocietalRecognitions`: achievements/impact/social proof
- `Schedule`: day/time programming structure
- `Sponsors`: partner credibility section
- `Registration`: participation funnel and CTA
- `Gallery`: visual storytelling and memories
- `Team`: organizers and contact faces
- `FAQs`: objection handling and information clarity
- `Contact`: communication endpoints
- `Footer`: legal/links/final CTA

## 12. Fast Enhancement Checklist

When iterating quickly, apply in this order:

1. Ensure each section has a clear title, subtitle, and CTA (if applicable).
2. Standardize spacing using `.section-pad` and `.container-tight`.
3. Use `.glass-card` + `.card-hover-glow` for all cards for consistency.
4. Keep heading style consistent with `.heading-gradient` where emphasis is needed.
5. Keep contrast high for readability over dark backgrounds.
6. Verify mobile layout section-by-section at <= 768px width.
7. Re-check SEO metadata when changing positioning/tagline.

## 13. Ready-to-Use Positioning Copy

- Tagline: `Where Stars Converge`
- Extended: `Where futures are born, stars converge, and legends are made.`
- Format: `3-Day Intercollegiate IT, Cultural & Innovation Festival + 24-Hour Hackathon`

---

If needed, this guide can be expanded into separate docs:

- `CONTENT_GUIDE.md` (all final copy)
- `DESIGN_SYSTEM.md` (strict token/component rules)
- `LAUNCH_CHECKLIST.md` (pre-production QA and release steps)
