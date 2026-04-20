# Nakshatra 2026 — UI & Icons Redesign

**Reference**: Techfest IIT Bombay (techfest.org)  
**Constraint**: Do NOT change the Hero video (`/hero-background.mp4`) or the SVG logo mark in `LeftSidebar`.

---

## Design Direction

Dark black base (`#000` / `#04050a`), neon pink/magenta (`#ff2d78`, `#e91e8c`) + neon cyan (`#00f5ff`) + electric violet (`#7c3aed`). Cyberpunk neon-city aesthetic. Glowing, saturated, immersive.

---

## Components to Change

### 1. Navbar (`components/Navbar.tsx`)
- Background: `rgba(0,0,0,0.6)` + `backdrop-blur-md`, thin neon border-bottom
- Nav links: uppercase, spaced, neon cyan hover underline (keep existing behavior)
- REGISTER button: neon magenta border + bg glow on hover
- Mobile menu: dark panel, magenta-accented active items, cleaner close button

### 2. LeftSidebar (`components/LeftSidebar.tsx`)
- Keep SVG logo mark (no change)
- Nav items: icon + label, active state gets magenta/cyan left border + subtle bg
- Icon treatment: clean Lucide icons, active = neon cyan, inactive = white/40
- Replace `ShoppingCart` → `ShoppingBag`, `House` → `Home` (already `House`), keep others
- Add subtle neon glow line at top of sidebar

### 3. RightSidebar (`components/RightSidebar.tsx`)
- **Brand-colored icons** — each platform gets its own color:
  - Instagram: gradient `#f09433 → #e6683c → #dc2743 → #cc2366 → #bc1888`
  - LinkedIn: `#0077b5`
  - YouTube: `#ff0000`
  - Twitter/X: `#ffffff`
  - Facebook: `#1877f2`
  - Discord: `#5865f2`
  - WhatsApp: `#25d366`
- Each icon in a small rounded square with a very subtle brand-color background tint
- Hover: scale up + glow in brand color

### 4. About Section (`components/About.tsx`)
- Stat card icons: colored icon backgrounds updated to use sharper neon colors
- Pills: magenta-tinted active state

### 5. FlagshipEvents (`components/FlagshipEvents.tsx`)
- Icon containers: sharper neon colors, tighter glow
- Top accent bars: full-width, brighter

### 6. Sponsors (`components/Sponsors.tsx`)
- Tier icon containers: neon-colored backgrounds

### 7. Footer (`components/Footer.tsx`)
- Social icons: brand-colored (same as RightSidebar)
- Top divider: neon magenta/cyan gradient

### 8. globals.css
- Add `--neon-magenta: #ff2d78` CSS variable
- Add `--brand-black: #04050a` variable
- Body background deepened to near-black

---

## What Does NOT Change
- Hero video (`Hero.tsx` — untouched)
- SVG logo mark in `LeftSidebar`
- All section content, copy, layout structure
- Framer Motion animations
- Font families (Orbitron, Rajdhani)
