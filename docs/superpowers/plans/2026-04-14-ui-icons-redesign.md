# UI & Icons Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Nakshatra 2026's icons and UI to match the Techfest IIT Bombay aesthetic — dark near-black base, neon pink/magenta + cyan accents, brand-colored social icons, sharp glowing icon containers.

**Architecture:** Pure CSS/Tailwind + React component changes. No new files created — all 7 existing components modified in place. Hero video and SVG logo mark are untouched.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, Lucide React, TypeScript

---

## Files Modified

| File | What changes |
|------|-------------|
| `app/globals.css` | Add `--neon-magenta`, deepen body bg, update scrollbar |
| `components/Navbar.tsx` | Magenta REGISTER button, crisper border, mobile drawer neon accents |
| `components/LeftSidebar.tsx` | Sharper active icon styling, neon glow border-left |
| `components/RightSidebar.tsx` | Brand-colored social icons (Instagram gradient, LinkedIn blue, YouTube red, etc.) — replace MessageCircle/Phone with Discord/WhatsApp |
| `components/About.tsx` | Stat card icon bg colors sharpened, pill active state magenta |
| `components/FlagshipEvents.tsx` | Icon containers sharper neon, top accent bars brighter |
| `components/Sponsors.tsx` | Tier icon backgrounds sharpened |
| `components/Footer.tsx` | Brand-colored social icon buttons, neon top divider |

---

## Task 1: CSS Variables + Global Styles

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add `--neon-magenta` variable and deepen background**

Replace the `:root` block and `body` rule in `app/globals.css`:

```css
:root {
  --space-black: #04050a;
  --void-black: #000000;
  --deep-navy: #080b1a;
  --cosmic-purple: #1a0a2e;
  --neon-cyan: #00f5ff;
  --neon-magenta: #ff2d78;
  --electric-violet: #7c3aed;
  --nebula-pink: #ec4899;
  --star-gold: #fbbf24;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--space-black);
  color: white;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- [ ] **Step 2: Update scrollbar to magenta/cyan gradient**

Replace the `::-webkit-scrollbar-thumb` rule:

```css
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 45, 120, 0.85),
    rgba(0, 245, 255, 0.9)
  );
}
```

- [ ] **Step 3: Update `.btn-neon` to use magenta**

Replace the `.btn-neon` rules:

```css
.btn-neon {
  border: 1px solid var(--neon-magenta);
  color: var(--neon-magenta);
  background: transparent;
  transition: all 0.3s ease;
}

.btn-neon:hover {
  background: rgba(255, 45, 120, 0.1);
  box-shadow: 0 0 20px rgba(255, 45, 120, 0.4);
}
```

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "style: add neon-magenta variable, deepen bg, update scrollbar/btn-neon"
```

---

## Task 2: Navbar — Magenta Register Button + Neon Border

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Update the desktop REGISTER button (line ~89)**

Find the desktop REGISTER button and replace its `className`:

```tsx
// Before
className="hidden rounded-md border border-[rgba(124,58,237,0.7)] bg-[rgba(124,58,237,0.15)] px-5 py-2 font-rajdhani text-[13px] font-semibold tracking-[0.1em] text-white transition-all hover:bg-[rgba(124,58,237,0.35)] hover:shadow-[0_0_16px_rgba(124,58,237,0.4)] md:inline-flex"

// After
className="hidden rounded-md border border-[rgba(255,45,120,0.7)] bg-[rgba(255,45,120,0.12)] px-5 py-2 font-rajdhani text-[13px] font-semibold tracking-[0.1em] text-white transition-all hover:bg-[rgba(255,45,120,0.28)] hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] md:inline-flex"
```

- [ ] **Step 2: Update the mobile REGISTER button (line ~97)**

```tsx
// Before
className="rounded-md border border-[rgba(124,58,237,0.4)] bg-[rgba(124,58,237,0.12)] px-3 py-2 font-rajdhani text-[11px] font-semibold tracking-[0.1em] text-white transition-all hover:bg-[rgba(124,58,237,0.25)] md:hidden"

// After
className="rounded-md border border-[rgba(255,45,120,0.5)] bg-[rgba(255,45,120,0.1)] px-3 py-2 font-rajdhani text-[11px] font-semibold tracking-[0.1em] text-white transition-all hover:bg-[rgba(255,45,120,0.22)] md:hidden"
```

- [ ] **Step 3: Update the nav border-bottom scroll color**

In the `style` prop of `<motion.nav>` (line ~48):

```tsx
style={{
  borderBottomColor: isScrolled
    ? "rgba(255,45,120,0.2)"
    : "rgba(255,255,255,0.06)",
}}
```

- [ ] **Step 4: Update mobile drawer active link style**

The first `motion.button` inside the `navLinks.map` (the mobile menu items, line ~155):

```tsx
className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left font-rajdhani text-sm font-semibold tracking-[0.16em] text-white/75 transition-colors hover:border-[rgba(255,45,120,0.45)] hover:text-[#ff2d78]"
```

- [ ] **Step 5: Update mobile menu open button hover color (line ~60)**

```tsx
className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-[rgba(255,45,120,0.4)] hover:text-[#ff2d78]"
```

- [ ] **Step 6: Commit**

```bash
git add components/Navbar.tsx
git commit -m "style: magenta register button and hover accents in navbar"
```

---

## Task 3: LeftSidebar — Sharper Active State

**Files:**
- Modify: `components/LeftSidebar.tsx`

- [ ] **Step 1: Update active nav item border + background**

In the `button` inside `items.map` (line ~105), update the active className:

```tsx
className={`flex w-full flex-col items-center gap-1.5 border-l-2 py-5 transition-all duration-200 ${
  isActive
    ? "border-l-[#ff2d78] bg-[rgba(255,45,120,0.06)]"
    : "border-l-transparent"
}`}
```

- [ ] **Step 2: Update active icon color**

In the `Icon` style prop (line ~117):

```tsx
style={{
  color: isActive ? "#ff2d78" : "rgba(255,255,255,0.5)",
}}
```

- [ ] **Step 3: Update active label color**

In the `span` style prop (line ~123):

```tsx
style={{
  color: isActive ? "#ff2d78" : "rgba(255,255,255,0.4)",
}}
```

- [ ] **Step 4: Add neon top border to sidebar panel**

In `globals.css`, update `.sidebar-panel`:

```css
.sidebar-panel {
  background: rgba(4, 5, 10, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 45, 120, 0.12);
}
```

- [ ] **Step 5: Commit**

```bash
git add components/LeftSidebar.tsx app/globals.css
git commit -m "style: magenta active state in left sidebar"
```

---

## Task 4: RightSidebar — Brand-Colored Social Icons

**Files:**
- Modify: `components/RightSidebar.tsx`

- [ ] **Step 1: Replace the entire file with brand-colored social icons**

The current sidebar uses `MessageCircle` and `Phone` (generic). Replace with `Discord` (from lucide-react) and `WhatsApp` doesn't exist in lucide — use a custom WhatsApp SVG inline. Also color each icon by its brand color.

Replace `components/RightSidebar.tsx` entirely:

```tsx
"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const items = [
  {
    label: "Instagram",
    icon: Instagram,
    target: "gallery",
    color: "#e1306c",
    glow: "rgba(225,48,108,0.5)",
    bg: "rgba(225,48,108,0.1)",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    target: "sponsors",
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.5)",
    bg: "rgba(10,102,194,0.1)",
  },
  {
    label: "YouTube",
    icon: Youtube,
    target: "gallery",
    color: "#ff0000",
    glow: "rgba(255,0,0,0.45)",
    bg: "rgba(255,0,0,0.08)",
  },
  {
    label: "Twitter",
    icon: Twitter,
    target: "schedule",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.35)",
    bg: "rgba(255,255,255,0.07)",
  },
  {
    label: "Facebook",
    icon: Facebook,
    target: "about",
    color: "#1877f2",
    glow: "rgba(24,119,242,0.5)",
    bg: "rgba(24,119,242,0.1)",
  },
  {
    label: "Discord",
    icon: null,
    target: "contact",
    color: "#5865f2",
    glow: "rgba(88,101,242,0.5)",
    bg: "rgba(88,101,242,0.1)",
  },
  {
    label: "WhatsApp",
    icon: null,
    target: "contact",
    color: "#25d366",
    glow: "rgba(37,211,102,0.5)",
    bg: "rgba(37,211,102,0.08)",
  },
];

function DiscordIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
        fill={color}
      />
    </svg>
  );
}

function WhatsAppIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.5 5.5c-.18-.45-.37-.46-.54-.47-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.64 4.12 3.6.58.22 1.02.34 1.38.44.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78z"
        fill={color}
      />
    </svg>
  );
}

export default function RightSidebar() {
  const jumpTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.aside
      initial={{ x: 48 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sidebar-panel fixed right-0 top-0 z-50 hidden h-full w-[48px] items-center justify-center border-l border-white/10 md:flex"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => jumpTo(item.target)}
            aria-label={item.label}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-lg transition-all duration-200 hover:scale-[1.25]"
            style={{
              background: item.bg,
              border: `1px solid ${item.color}22`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 12px ${item.glow}`;
              e.currentTarget.style.borderColor = `${item.color}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = `${item.color}22`;
            }}
          >
            {item.label === "Discord" ? (
              <DiscordIcon color={item.color} />
            ) : item.label === "WhatsApp" ? (
              <WhatsAppIcon color={item.color} />
            ) : (
              item.icon && (
                <item.icon
                  className="h-[16px] w-[16px]"
                  style={{ color: item.color }}
                />
              )
            )}
          </button>
        ))}
      </div>
    </motion.aside>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
cd c:/Users/Admin/nakshatra && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors (or only pre-existing errors unrelated to this file).

- [ ] **Step 3: Commit**

```bash
git add components/RightSidebar.tsx
git commit -m "feat: brand-colored social icons in right sidebar (Discord, WhatsApp, per-platform colors)"
```

---

## Task 5: Footer — Brand-Colored Socials + Neon Divider

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Replace social icon imports and array**

At the top of `components/Footer.tsx`, replace:

```tsx
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [Instagram, Linkedin, Youtube, Facebook];
```

With:

```tsx
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { Icon: Instagram, color: "#e1306c", glow: "rgba(225,48,108,0.5)", bg: "rgba(225,48,108,0.1)" },
  { Icon: Linkedin,  color: "#0a66c2", glow: "rgba(10,102,194,0.5)",  bg: "rgba(10,102,194,0.1)" },
  { Icon: Youtube,   color: "#ff0000", glow: "rgba(255,0,0,0.45)",    bg: "rgba(255,0,0,0.08)"  },
  { Icon: Facebook,  color: "#1877f2", glow: "rgba(24,119,242,0.5)",  bg: "rgba(24,119,242,0.1)"},
];
```

- [ ] **Step 2: Update the social icons render in the footer JSX**

Find the `{socials.map(...)}` block inside the footer and replace:

```tsx
<div className="flex items-center gap-3">
  {socials.map((social, index) => (
    <button
      key={index}
      type="button"
      onClick={() => jumpTo("contact")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:scale-[1.15]"
      aria-label={`Social link ${index + 1}`}
      style={{
        background: social.bg,
        borderColor: `${social.color}22`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 14px ${social.glow}`;
        e.currentTarget.style.borderColor = `${social.color}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = `${social.color}22`;
      }}
    >
      <social.Icon className="h-4 w-4" style={{ color: social.color }} />
    </button>
  ))}
</div>
```

- [ ] **Step 3: Replace the top neon divider line**

Find `<div className="h-px bg-[#00f5ff]/50" />` at the top of the footer and replace:

```tsx
<div className="h-px bg-gradient-to-r from-[#ff2d78]/60 via-[#00f5ff]/60 to-[#7c3aed]/60" />
```

- [ ] **Step 4: Commit**

```bash
git add components/Footer.tsx
git commit -m "style: brand-colored social icons and neon gradient divider in footer"
```

---

## Task 6: About — Sharper Stat Cards + Magenta Pills

**Files:**
- Modify: `components/About.tsx`

- [ ] **Step 1: Update stat card icon backgrounds to be sharper**

In the `StatCard` component, find the icon wrapper `div` (line ~62) and update it to use a slightly more saturated background:

```tsx
<div
  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
  style={{
    background: `${stat.accent}18`,
    border: `1px solid ${stat.accent}35`,
    boxShadow: `0 0 12px ${stat.accent}20`,
  }}
>
```

- [ ] **Step 2: Update stat card top bar to be brighter**

Find the "top bar" div inside `StatCard` (line ~50):

```tsx
<div
  className="absolute inset-x-0 top-0 h-[2px]"
  style={{ background: `linear-gradient(90deg,transparent,${stat.accent},transparent)` }}
/>
```

- [ ] **Step 3: Update pillars (pill tags) active style**

Find the `pillars.map` block (line ~156) and update the `motion.span`:

```tsx
<motion.span
  key={item}
  whileHover={{ scale: 1.04, borderColor: "rgba(255,45,120,0.4)" }}
  className="cursor-default rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 font-rajdhani text-[13px] font-semibold uppercase tracking-[0.2em] text-white/58 transition-colors"
>
```

- [ ] **Step 4: Commit**

```bash
git add components/About.tsx
git commit -m "style: sharper stat card icon containers and pill hover in About"
```

---

## Task 7: FlagshipEvents — Brighter Icon + Accent Bars

**Files:**
- Modify: `components/FlagshipEvents.tsx`

- [ ] **Step 1: Update icon container to have visible border + glow**

In the `events.map` render, find the icon wrapper div (line ~160):

```tsx
<div
  className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
  style={{
    background: `${event.accent}15`,
    color: event.accent,
    border: `1px solid ${event.accent}40`,
    boxShadow: `0 0 14px ${event.accent}20`,
  }}
>
```

- [ ] **Step 2: Update top accent bar to always be visible (not just on hover)**

Find the "Top gradient accent bar" div (line ~133):

```tsx
<div
  className="absolute inset-x-0 top-0 h-[2px]"
  style={{
    background: `linear-gradient(90deg, ${event.accent}, transparent)`,
    opacity: 0.6,
  }}
/>
```

Remove the `origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100` classes since the bar is now always visible.

- [ ] **Step 3: Update "View All Events" button to magenta**

Find the `btn-neon` button at the bottom (line ~224):

```tsx
<button
  type="button"
  className="inline-flex items-center gap-2.5 rounded-md border border-[rgba(255,45,120,0.6)] bg-[rgba(255,45,120,0.08)] px-8 py-3 font-rajdhani text-sm font-semibold uppercase tracking-[0.2em] text-[#ff2d78] transition-all hover:bg-[rgba(255,45,120,0.18)] hover:shadow-[0_0_28px_rgba(255,45,120,0.35)]"
>
  View All Events
  <ArrowUpRight className="h-4 w-4" />
</button>
```

- [ ] **Step 4: Commit**

```bash
git add components/FlagshipEvents.tsx
git commit -m "style: always-visible accent bars, sharper icon glow, magenta CTA in FlagshipEvents"
```

---

## Task 8: Sponsors — Sharper Tier Icon Containers

**Files:**
- Modify: `components/Sponsors.tsx`

- [ ] **Step 1: Update tier icon container to have border + glow**

In `tiers.map`, find the icon wrapper div (line ~98):

```tsx
<div
  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
  style={{
    background: `${tier.accent}16`,
    border: `1px solid ${tier.accent}38`,
    boxShadow: `0 0 12px ${tier.accent}18`,
  }}
>
```

- [ ] **Step 2: Update sponsor logo placeholders hover to magenta**

Find the logo placeholder divs (line ~119). Update `hover:border-white/[0.14] hover:bg-white/[0.04]`:

```tsx
className="flex min-h-[80px] items-center justify-center rounded-sm border border-white/[0.07] bg-white/[0.025] transition-all hover:border-[rgba(255,45,120,0.3)] hover:bg-[rgba(255,45,120,0.04)]"
```

- [ ] **Step 3: Commit**

```bash
git add components/Sponsors.tsx
git commit -m "style: sharper tier icon containers and magenta logo hover in Sponsors"
```

---

## Task 9: Final Visual Verification

- [ ] **Step 1: Start the dev server**

```bash
cd c:/Users/Admin/nakshatra && npm run dev
```

Open `http://localhost:3000` in browser.

- [ ] **Step 2: Check each component visually**

Verify in the browser:
- [ ] Right sidebar: 7 brand-colored icons (Instagram pink, LinkedIn blue, YouTube red, Twitter white, Facebook blue, Discord indigo, WhatsApp green), each with glow on hover
- [ ] Left sidebar: active item shows magenta left border + icon
- [ ] Navbar: REGISTER button is magenta-bordered, glows on hover
- [ ] Footer: top divider is pink→cyan→violet gradient; social icons are brand-colored
- [ ] About: stat card icons have visible border + glow
- [ ] Events: accent bars always visible, icon containers glow, CTA button is magenta
- [ ] Sponsors: tier icons have visible border
- [ ] Hero video: unchanged
- [ ] SVG logo in left sidebar: unchanged

- [ ] **Step 3: Fix any visual issues found during review**

Common things to check:
- Icon sizes correct (not too large for containers)
- No TypeScript build errors: `npx tsc --noEmit`
- No console errors

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "style: complete UI and icons redesign — Techfest-inspired neon aesthetic"
```
