# Design Tokens

Complete token reference for `packages/ui`. Read this before adding or editing
any color, spacing, typography, radius, shadow, or motion value.

---

## Token Architecture

```
src/tokens/
├── colors.ts        → semantic color scale
├── spacing.ts       → spacing scale extensions
├── typography.ts    → font families, sizes, weights
├── radius.ts        → border radius scale
├── shadows.ts       → box-shadow scale
├── motion.ts        → duration + easing
├── globals.css      → CSS custom properties (light + dark)
└── index.ts         → barrel re-export
```

CSS custom properties in `globals.css` are the single source of truth.
TypeScript token files map to them. `tailwind.config.ts` exposes them as utilities.

---

## Semantic Color System

All color tokens use raw HSL channel values (no `hsl()` wrapper) so Tailwind
can inject opacity: `bg-primary/50` works correctly.

```css
/* src/tokens/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ── Surfaces ─────────────────────────────────── */
    --background:          0 0% 100%;
    --foreground:          240 10% 3.9%;

    /* ── Card ─────────────────────────────────────── */
    --card:                0 0% 100%;
    --card-foreground:     240 10% 3.9%;

    /* ── Popover / Overlay ────────────────────────── */
    --popover:             0 0% 100%;
    --popover-foreground:  240 10% 3.9%;

    /* ── Brand ────────────────────────────────────── */
    --primary:             221 83% 53%;
    --primary-foreground:  0 0% 98%;

    --secondary:           240 4.8% 95.9%;
    --secondary-foreground:240 5.9% 10%;

    --accent:              240 4.8% 95.9%;
    --accent-foreground:   240 5.9% 10%;

    /* ── State ────────────────────────────────────── */
    --destructive:              0 84% 60%;
    --destructive-foreground:   0 0% 98%;

    --success:                  142 71% 45%;
    --success-foreground:       0 0% 98%;

    --warning:                  38 92% 50%;
    --warning-foreground:       240 10% 3.9%;

    --info:                     199 89% 48%;
    --info-foreground:          0 0% 98%;

    /* ── Muted / Form ─────────────────────────────── */
    --muted:               240 4.8% 95.9%;
    --muted-foreground:    240 3.8% 46.1%;

    --border:              240 5.9% 90%;
    --input:               240 5.9% 90%;
    --ring:                221 83% 53%;

    /* ── Radius ───────────────────────────────────── */
    --radius:              0.5rem;
  }

  [data-theme="dark"] {
    --background:          240 10% 3.9%;
    --foreground:          0 0% 98%;

    --card:                240 10% 3.9%;
    --card-foreground:     0 0% 98%;

    --popover:             240 10% 3.9%;
    --popover-foreground:  0 0% 98%;

    --primary:             217 91% 60%;
    --primary-foreground:  222 47% 11%;

    --secondary:           240 3.7% 15.9%;
    --secondary-foreground:0 0% 98%;

    --accent:              240 3.7% 15.9%;
    --accent-foreground:   0 0% 98%;

    --destructive:         0 72% 51%;
    --destructive-foreground: 0 0% 98%;

    --success:             142 71% 45%;
    --success-foreground:  0 0% 98%;

    --warning:             38 92% 50%;
    --warning-foreground:  240 10% 3.9%;

    --info:                199 89% 48%;
    --info-foreground:     0 0% 98%;

    --muted:               240 3.7% 15.9%;
    --muted-foreground:    240 5% 64.9%;

    --border:              240 3.7% 15.9%;
    --input:               240 3.7% 15.9%;
    --ring:                217 91% 60%;
  }
}
```

---

## Semantic Color Reference

| Token | Light usage | Dark usage |
|-------|-------------|------------|
| `background` | Page background | Page background |
| `foreground` | Body text | Body text |
| `card` | Card surfaces | Card surfaces |
| `card-foreground` | Text on cards | Text on cards |
| `popover` | Dropdown / tooltip bg | Dropdown / tooltip bg |
| `popover-foreground` | Text on popovers | Text on popovers |
| `primary` | Primary actions, links | Primary actions |
| `primary-foreground` | Text on primary | Text on primary |
| `secondary` | Secondary actions | Secondary actions |
| `secondary-foreground` | Text on secondary | Text on secondary |
| `accent` | Hover states, highlights | Hover states |
| `accent-foreground` | Text on accent | Text on accent |
| `muted` | Disabled, subtle backgrounds | Subtle backgrounds |
| `muted-foreground` | Placeholder, caption text | Placeholder, caption |
| `destructive` | Error, delete actions | Error, delete |
| `destructive-foreground` | Text on destructive | Text on destructive |
| `success` | Confirmation, complete | Confirmation |
| `warning` | Caution states | Caution states |
| `info` | Informational states | Informational |
| `border` | Dividers, outlines | Dividers, outlines |
| `input` | Form input borders | Form input borders |
| `ring` | Focus ring | Focus ring |

---

## TypeScript Token Files

```ts
// src/tokens/colors.ts
export const semanticColors = {
  background:              "hsl(var(--background) / <alpha-value>)",
  foreground:              "hsl(var(--foreground) / <alpha-value>)",
  card:                    "hsl(var(--card) / <alpha-value>)",
  "card-foreground":       "hsl(var(--card-foreground) / <alpha-value>)",
  popover:                 "hsl(var(--popover) / <alpha-value>)",
  "popover-foreground":    "hsl(var(--popover-foreground) / <alpha-value>)",
  primary: {
    DEFAULT:    "hsl(var(--primary) / <alpha-value>)",
    foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
  },
  secondary: {
    DEFAULT:    "hsl(var(--secondary) / <alpha-value>)",
    foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
  },
  accent: {
    DEFAULT:    "hsl(var(--accent) / <alpha-value>)",
    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
  },
  muted: {
    DEFAULT:    "hsl(var(--muted) / <alpha-value>)",
    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
  },
  destructive: {
    DEFAULT:    "hsl(var(--destructive) / <alpha-value>)",
    foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
  },
  success: {
    DEFAULT:    "hsl(var(--success) / <alpha-value>)",
    foreground: "hsl(var(--success-foreground) / <alpha-value>)",
  },
  warning: {
    DEFAULT:    "hsl(var(--warning) / <alpha-value>)",
    foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
  },
  info: {
    DEFAULT:    "hsl(var(--info) / <alpha-value>)",
    foreground: "hsl(var(--info-foreground) / <alpha-value>)",
  },
  border: "hsl(var(--border) / <alpha-value>)",
  input:  "hsl(var(--input) / <alpha-value>)",
  ring:   "hsl(var(--ring) / <alpha-value>)",
} as const;
```

```ts
// src/tokens/radius.ts
// All values reference --radius so apps can override globally via one CSS var
export const borderRadius = {
  none: "0",
  xs:   "calc(var(--radius) - 4px)",   // 2px at default
  sm:   "calc(var(--radius) - 2px)",   // 4px at default
  md:   "var(--radius)",               // 8px at default — the base
  lg:   "calc(var(--radius) + 2px)",   // 10px
  xl:   "calc(var(--radius) + 4px)",   // 12px
  "2xl":"calc(var(--radius) + 8px)",   // 16px
  "3xl":"calc(var(--radius) + 16px)",  // 24px
  full: "9999px",
} as const;
```

```ts
// src/tokens/typography.ts
export const fontFamily = {
  // Apps set --font-sans and --font-mono via CSS, this just references them
  sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
  mono: ["var(--font-mono)", "ui-monospace", "monospace"],
} as const;

export const fontSize = {
  // Semantic type scale — maps to real usage context
  "display-2xl": ["4.5rem",   { lineHeight: "5.625rem", letterSpacing: "-0.02em", fontWeight: "700" }],
  "display-xl":  ["3.75rem",  { lineHeight: "4.5rem",   letterSpacing: "-0.02em", fontWeight: "700" }],
  "display-lg":  ["3rem",     { lineHeight: "3.75rem",  letterSpacing: "-0.02em", fontWeight: "700" }],
  "display-md":  ["2.25rem",  { lineHeight: "2.75rem",  letterSpacing: "-0.02em", fontWeight: "600" }],
  "display-sm":  ["1.875rem", { lineHeight: "2.375rem", letterSpacing: "-0.01em", fontWeight: "600" }],
  "heading-xl":  ["1.5rem",   { lineHeight: "2rem",     letterSpacing: "-0.01em", fontWeight: "600" }],
  "heading-lg":  ["1.25rem",  { lineHeight: "1.75rem",  fontWeight: "600" }],
  "heading-md":  ["1.125rem", { lineHeight: "1.625rem", fontWeight: "600" }],
  "heading-sm":  ["1rem",     { lineHeight: "1.5rem",   fontWeight: "600" }],
  "body-xl":     ["1.125rem", { lineHeight: "1.75rem",  fontWeight: "400" }],
  "body-lg":     ["1rem",     { lineHeight: "1.625rem", fontWeight: "400" }],
  "body-md":     ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }],
  "body-sm":     ["0.8125rem",{ lineHeight: "1.25rem",  fontWeight: "400" }],
  "label-lg":    ["0.875rem", { lineHeight: "1.125rem", fontWeight: "500" }],
  "label-md":    ["0.8125rem",{ lineHeight: "1rem",     fontWeight: "500" }],
  "label-sm":    ["0.75rem",  { lineHeight: "1rem",     fontWeight: "500" }],
  "code-md":     ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }],
  "code-sm":     ["0.75rem",  { lineHeight: "1.125rem", fontWeight: "400" }],
} as const;
```

```ts
// src/tokens/shadows.ts
export const boxShadow = {
  xs:      "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm:      "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md:      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg:      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl:      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl":   "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner:   "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none:    "none",
} as const;
```

```ts
// src/tokens/motion.ts
export const transitionDuration = {
  instant: "0ms",
  fast:    "100ms",
  normal:  "200ms",
  slow:    "300ms",
  slower:  "500ms",
} as const;

export const transitionTimingFunction = {
  linear:        "linear",
  "ease-in":     "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out":    "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  spring:        "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
```

---

## Tailwind Config Integration

```ts
// packages/ui/tailwind.config.ts
import type { Config } from "tailwindcss";
import { semanticColors }              from "./src/tokens/colors";
import { borderRadius }                from "./src/tokens/radius";
import { fontFamily, fontSize }        from "./src/tokens/typography";
import { boxShadow }                   from "./src/tokens/shadows";
import { transitionDuration, transitionTimingFunction } from "./src/tokens/motion";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content:  ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:                     semanticColors,
      borderRadius,
      fontFamily,
      fontSize,
      boxShadow,
      transitionDuration,
      transitionTimingFunction,
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
```

**Apps extend — never copy:**
```ts
// apps/web/tailwind.config.ts
import baseConfig from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
} satisfies Config;
```

---

## Token Rules

1. **Never hardcode HSL values inside component files** — use the CSS custom property or token name
2. **Never bake opacity into the token definition** — keep raw `H S L` channels so Tailwind alpha works
3. **Never add a token for a one-off value** — tokens are for values that repeat across multiple components
4. **Adding a token requires both light and dark values** — incomplete tokens are not merged
5. **Deprecation before removal** — mark as `@deprecated` in the TS file, keep for one major version

---

## Token Anti-Patterns

```tsx
// ❌ Raw Tailwind color
<p className="text-zinc-500">

// ✅ Semantic token
<p className="text-muted-foreground">

// ❌ Hardcoded style
<div style={{ backgroundColor: "#3b82f6" }}>

// ✅ Token via utility
<div className="bg-primary">

// ❌ Opacity baked into CSS var value
--primary: hsl(221, 83%, 53%);   /* bg-primary/50 won't work */

// ✅ Raw channels, Tailwind injects opacity
--primary: 221 83% 53%;          /* bg-primary/50 works ✅ */

// ❌ Using dark: variant
<div className="bg-white dark:bg-zinc-900">

// ✅ Semantic token resolves per theme automatically
<div className="bg-background">
```
