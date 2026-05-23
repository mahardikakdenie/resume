---
name: design-system
version: 4.0.0
description: >
  Enterprise-grade AI agent skill for building and maintaining a low-level
  design system abstraction using React + Tailwind CSS inside a monorepo
  (packages/ui). Token-driven, AI-friendly, app-agnostic.
tags: [design-system, react, tailwind, monorepo, ui, tokens, a11y]
---

# Design System Skill

Read this file completely before writing any code.
Then read the supplementary file that matches your task:

| File              | When to read                                                    |
| ----------------- | --------------------------------------------------------------- |
| `TOKENS.md`       | Adding/editing design tokens, theme, color, spacing, typography |
| `COMPONENTS.md`   | Building any component — simple, composite, or compound         |
| `TESTING.md`      | Writing tests, a11y checks, Storybook stories                   |
| `CONTRIBUTION.md` | Monorepo setup, publishing, tsup build, PR checklist            |

---

## The Mental Model

```
┌─────────────────────────────────────────────────────┐
│                    apps/* (consumers)               │
│         import only from "@repo/ui"                 │
└───────────────────────┬─────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────┐
│                  packages/ui                        │
│                                                     │
│   src/components/     ← every UI component lives   │
│                          here, period               │
│                                                     │
│       internally uses @radix-ui/* directly          │
│       for behavior + accessibility primitives       │
│                                                     │
│   src/tokens/         ← design decisions (CSS vars) │
│   src/hooks/          ← shared stateful logic       │
│   src/utils/          ← pure helpers                │
└─────────────────────────────────────────────────────┘
```

**One place for all components. No indirection layers.**

Radix UI is a dependency — components import from it directly, the same way
they import from React. There is no wrapper layer in between.

---

## Repository Layout

```
packages/ui/
├── src/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── radius.ts
│   │   ├── shadows.ts
│   │   ├── motion.ts
│   │   ├── globals.css          # All CSS custom properties (light + dark)
│   │   └── index.ts
│   │
│   ├── components/              # Every UI component — simple or compound
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.variants.ts
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Dialog/              # Compound — uses @radix-ui/react-dialog directly
│   │   │   ├── Dialog.tsx
│   │   │   ├── Dialog.stories.tsx
│   │   │   ├── Dialog.test.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Input/
│   │   ├── Tabs/
│   │   ├── Select/
│   │   └── ...
│   │
│   ├── hooks/                   ← CUSTOM hooks only (component-behavior specific)
│   │   ├── useControllableState.ts  # controlled/uncontrolled state duality
│   │   ├── useDisclosure.ts         # open/close toggle state
│   │   └── useMediaQuery.ts         # responsive breakpoint detection
│   │
│   │   # ⚠️  HOOK POLICY:
│   │   # Only write a custom hook here if the equivalent does NOT exist in
│   │   # an already-installed top React hooks library.
│   │   # Prefer: react-use for common utilities
│   │   # (debounce, throttle, localStorage, windowSize, clipboard, etc.)
│   │   # Never re-implement what a library already provides.
│   │
│   ├── utils/
│   │   ├── cn.ts
│   │   └── focusRing.ts
│   │
│   └── index.ts                 # Public API — explicit named exports only
│
├── tailwind.config.ts           # Shared config — apps extend this
├── tsconfig.json
├── tsup.config.ts
├── vitest.config.ts
└── package.json
```

---

## Core Principles

### 1 · Token-First

Never use a raw Tailwind color utility when a semantic token exists.

```tsx
// ❌
<div className="bg-blue-600 text-white rounded-lg">

// ✅
<div className="bg-primary text-primary-foreground rounded-md">
```

See `TOKENS.md` for the full semantic token reference.

### 2 · CVA for All Variants

Every component with visual variants uses `class-variance-authority`.
Variants live in a co-located `ComponentName.variants.ts` — never inline in JSX.

```ts
// Button.variants.ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    'motion-reduce:transition-none',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs gap-1 rounded',
        sm: 'h-8 px-3 text-xs gap-1.5',
        md: 'h-9 px-4 text-sm gap-2',
        lg: 'h-10 px-6 text-sm gap-2',
        xl: 'h-12 px-8 text-base gap-2.5',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);
```

### 3 · Polymorphic via `asChild`

All interactive components support `asChild` via `@radix-ui/react-slot`.

```tsx
<Button asChild>
  <a href="/dashboard">Go to dashboard</a>
</Button>
// Renders <a class="...button styles..."> not <button>
```

### 4 · `cn()` Everywhere

```ts
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Never concatenate class strings manually. Always `cn()`.

### 5 · App-Agnostic Contract

`packages/ui` must **never** import from:

- `apps/*`
- Routing libraries (`next/link`, `react-router-dom`)
- Data-fetching libraries (`swr`, `react-query`, `axios`)
- Global state libraries (`zustand`, `jotai`, `redux`)
- Any specific icon library — accept icons as `ReactNode`

Must **always**:

- Accept `className` for consumer overrides
- Forward `ref` to the root DOM element
- Spread `...props` to the root element
- Export prop types alongside components
- Use named exports only — never `export default`

### 6 · Accessibility — Non-Negotiable

- Semantic HTML first; ARIA only when HTML is insufficient
- All interactive elements keyboard-navigable
- Color contrast ≥ 4.5:1 normal text, ≥ 3:1 large text
- Icon-only buttons require `aria-label`
- Animations respect `prefers-reduced-motion`
- Every component passes `jest-axe` with zero violations

### 7 · Dark Mode via CSS Custom Properties

Dark mode uses `data-theme="dark"` on `<html>`.
Never use Tailwind's `dark:` variant — semantic tokens resolve per theme automatically.

---

## Naming Conventions

| Thing                 | Convention                  | Example                |
| --------------------- | --------------------------- | ---------------------- |
| Component file        | PascalCase                  | `Button.tsx`           |
| Variants file         | PascalCase                  | `Button.variants.ts`   |
| Stories file          | PascalCase                  | `Button.stories.tsx`   |
| Test file             | PascalCase                  | `Button.test.tsx`      |
| Internal context file | camelCase                   | `tabs.context.ts`      |
| Hook file             | camelCase, `use` prefix     | `useDisclosure.ts`     |
| Utility file          | camelCase                   | `cn.ts`                |
| CSS token             | `--kebab-case`              | `--primary-foreground` |
| Exports               | Named only, never default   | `export { Button }`    |
| Prop types            | PascalCase + `Props` suffix | `ButtonProps`          |

---

## Dependency Policy

### Core — Always Present

| Package                    | Purpose                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react`, `react-dom`       | Core — direct dep (listed in `dependencies`, not just peer)                                                                                        |
| `@radix-ui/*`              | Behavior + a11y primitives — import directly in components                                                                                         |
| `class-variance-authority` | Variants                                                                                                                                           |
| `clsx`                     | Class merging (pair with `cn()` util)                                                                                                              |
| `lucide-react`             | Icon library — **pre-installed**. Use it directly. To support consumer icon overrides, accept `ReactNode` slots alongside the default lucide icon. |
| `tailwindcss-animate`      | Animation utilities                                                                                                                                |

### Headless Library Ecosystem — Pick Per Component

These are the **top-picked headless libraries** proven to pair well with Tailwind.
Each solves a specific UI problem. Add only what you need — don't pre-install all.

| Problem                   | Library                               | Notes                                                                                                                                  |
| ------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Table / DataGrid**      | `@tanstack/react-table`               | Sorting, filtering, pagination, grouping, row selection. 10–15kb. The standard.                                                        |
| **Virtualization**        | `@tanstack/react-virtual`             | Pair with TanStack Table for large datasets. Also works standalone for any long list.                                                  |
| **Calendar / DatePicker** | `react-day-picker`                    | v9+. Single, range, multiple modes. Style via `classNames` prop — full Tailwind control. Pair with Radix Popover for the picker shell. |
| **Command / Combobox**    | `cmdk`                                | Command palette and searchable combobox. Used by shadcn/ui. Zero styles, pure behavior.                                                |
| **Drag & Drop**           | `@dnd-kit/core` + `@dnd-kit/sortable` | Modern, accessible, modular. Works for sortable lists, Kanban boards, tree views.                                                      |
| **Carousel**              | `embla-carousel-react`                | Headless, touch-friendly, no opinions. Easiest carousel to style with Tailwind.                                                        |
| **File Upload**           | `react-dropzone`                      | Drag-and-drop file upload hook. Renderless — you own the UI entirely.                                                                  |
| **Rich Text Editor**      | `@tiptap/react`                       | Headless, fully extensible. Compose your own toolbar using design system components.                                                   |
| **Drawer / Bottom Sheet** | `vaul`                                | By shadcn creator. Smooth gesture-driven drawer, easy to style with Tailwind.                                                          |
| **Toast / Notifications** | `sonner`                              | By shadcn creator. Opinionated but easily themed via CSS vars.                                                                         |
| **Resizable Panels**      | `react-resizable-panels`              | Split-pane layouts. Headless, renderless.                                                                                              |
| **OTP Input**             | `input-otp`                           | Single input OTP with slot API. Used by shadcn/ui.                                                                                     |
| **Color Picker**          | `react-colorful`                      | 2.8kb. No dependencies. Headless-friendly, easy className override.                                                                    |
| **Charts**                | `recharts`                            | SVG-based, composable. Easiest to style among React chart libs.                                                                        |
| **Date utilities**        | `date-fns`                            | Pair with react-day-picker. Lightweight, tree-shakable, no mutation.                                                                   |

### Never Allowed

| Package                                              | Reason                                                                                                                     |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `next`, `react-router-dom`, `@tanstack/react-router` | Routing — app concern, not UI library concern                                                                              |
| `zustand`, `jotai`, `redux`, `recoil`                | Global state — app concern                                                                                                 |
| `axios`, `swr`, `@tanstack/react-query`              | Data fetching — app concern                                                                                                |
| Additional icon libraries beyond `lucide-react`      | `lucide-react` is already installed. Don't add heroicons, phosphor, etc. For fully custom icons, accept `ReactNode` props. |
| `framer-motion`                                      | Heavy. Use `tailwindcss-animate` + CSS transitions instead                                                                 |

---

## File Generation Checklist

**New component:**

- [ ] `src/components/ComponentName/ComponentName.tsx`
- [ ] `src/components/ComponentName/ComponentName.variants.ts` (if has visual variants)
- [ ] `src/components/ComponentName/ComponentName.stories.tsx`
- [ ] `src/components/ComponentName/ComponentName.test.tsx`
- [ ] `src/components/ComponentName/index.ts`
- [ ] Add named export to `src/index.ts`

**New token:**

- [ ] `src/tokens/*.ts` source value
- [ ] `src/tokens/globals.css` CSS custom property (light + dark)
- [ ] `tailwind.config.ts` mapping
- [ ] Document in `TOKENS.md`

---

## Component Anatomy — Quick Reference

```tsx
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { buttonVariants } from './Button.variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = 'Button';
```

---

## Component Directory Structure (Tier-Based)

> **Rule:** Choose the minimum tier that fits. Do not add files the component doesn't need.
> Source of truth: `apps/admin-portal/docs/migration/component/04-build-shared-components.md`

### Tier 1 — Simple (primitives, display-only)

_Examples: `Badge`, `Spinner`, `Separator`, `Avatar`, `Skeleton`_

```
packages/ui/src/ComponentName/
├── ComponentName.spec.md     # Written spec — source of truth, written FIRST
├── ComponentName.stories.tsx # All variants + all states
├── ComponentName.tsx         # Implementation
└── index.ts                  # Public exports
```

### Tier 2 — Standard (interactive, CVA variants, controlled state)

_Examples: `Button`, `Input`, `Select`, `Checkbox`, `Switch`, `Toast`_

```
packages/ui/src/ComponentName/
├── ComponentName.spec.md          # Written spec
├── ComponentName.tsx              # Main implementation
├── ComponentName.types.ts         # Exported TypeScript interfaces & prop types
├── ComponentName.stories.tsx      # All variants + states
└── index.ts                       # Public exports
```

> Add `ComponentName.types.ts` when the prop interface is consumed externally (e.g., adapter
> wrappers in apps need to import the type). Keeps `ComponentName.tsx` focused on implementation.

### Tier 3 — Complex / Compound (sub-components, internal hooks, pure utils)

_Examples: `DataTable`, `Dialog`, `Combobox`, `DatePicker`, `NavigationMenu`_

```
packages/ui/src/ComponentName/
├── ComponentName.spec.md              # Written spec (composite spec for all sub-components)
├── ComponentName.types.ts             # All shared interfaces, prop types, enums
├── ComponentName.tsx                  # Root / orchestrator component
├── ComponentName.utils.ts             # Pure helper functions (no React)
├── ComponentName.hooks.ts             # Internal React hooks (state machines, derived state)
├── parts/
│   ├── ComponentNameHeader.tsx        # Named sub-component
│   ├── ComponentNameBody.tsx
│   └── ...
├── ComponentName.stories.tsx          # Top-level stories
├── ComponentName.stories.parts.tsx    # Sub-component / slot stories (optional if long)
└── index.ts                           # Public exports (root + any public sub-components)
```

**When to create `parts/`:** When 2+ named sub-components are composed directly by consumers
(e.g., `<Dialog.Trigger>`, `<DataTable.Column>`). Internal-only sub-components don't need `parts/`.

**When to extract `ComponentName.hooks.ts`:** Internal state logic > ~40 lines, or reusable
within the component tree (e.g., `useDataTableState`, `useComboboxSearch`).

**When to extract `ComponentName.utils.ts`:** Pure functions (no React) that are independently
testable or shared across sub-components.

---

## SDD Lifecycle (Mandatory per Component)

Every new component entering `packages/ui` follows this **Spec-Driven Development** lifecycle.
No exceptions, even for "simple" components.

```
SPEC  →  Write ComponentName.spec.md FIRST
          • TypeScript interface (proposed)
          • Variants, sizes, states
          • Accessibility requirements
          • Usage do/don't, app-agnostic checklist
          ⛔ No implementation yet

STORY →  Write ComponentName.stories.tsx
          • All variants rendered in Storybook
          • All states: default, hover, focus, disabled, loading, error
          ⛔ Storybook will error — intentional (RED state confirms spec drives code)

BUILD →  Implement ComponentName.tsx
          • Make all stories go GREEN
          • Follow spec exactly — no undocumented changes
          • Export from packages/ui/src/index.ts

GATE  →  Verification gate — ALL must pass before marking DONE
          • TypeScript check passes
          • Lint passes
          • Build passes
          • All stories green in Storybook
          • WCAG AA contrast checked
          • Keyboard navigation verified
```

---

## Mandatory Prop Naming Contract

> Violating these rules requires a Foundation Amendment PR (see `08-operational-standards.md`).
> Source: `apps/admin-portal/docs/migration/component/06-component-standards.md` §2

### Size variants

```typescript
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'  // DEFAULT: 'md'
// FORBIDDEN: 'small', 'medium', 'large', 'tiny', 'huge'
```

### Visual variants

```typescript
variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
// DEFAULT: 'default'
// FORBIDDEN: 'danger' (use 'destructive'), 'warning-style', 'info-color'
```

### State props

```typescript
disabled?: boolean          // NOT: isDisabled, readOnly (unless truly readonly)
loading?: boolean           // NOT: isLoading, pending
error?: string | boolean    // NOT: hasError, errorMessage
required?: boolean          // NOT: isRequired
```

### Content / slot props

```typescript
children: React.ReactNode            // primary slot
label?: string                       // short text label
description?: string                 // longer descriptive text
placeholder?: string                 // input placeholder
icon?: React.ReactNode               // icon slot
leftIcon?: React.ReactNode           // icon before content
rightIcon?: React.ReactNode          // icon after content
actions?: React.ReactNode            // action button slot
```

### Event handlers

```typescript
onClick?: (event: React.MouseEvent<HTMLElement>) => void
onChange?: (value: T) => void        // NOT: onChangeValue, handleChange
onSubmit?: (data: T) => void
onClose?: () => void                 // NOT: handleClose, onDismiss
onOpen?: () => void
onSelect?: (value: T) => void
```

### Forbidden prop patterns

```typescript
// ❌ FORBIDDEN — app-specific concerns
apiUrl?: string
fetchData?: () => Promise<T>
serviceMethod?: (...) => void

// ❌ FORBIDDEN — domain types (Tier 3 only — KEEP_APP_LOCAL)
policy?: Policy
claim?: Claim
user?: User

// ❌ FORBIDDEN — framework-specific types in packages/ui
href?: import('next/link').LinkProps['href']  // use: href?: string
src?: import('next/image').ImageProps['src']  // use: src?: string | StaticImport
```

---

## `cn()` — Context-Sensitive Import Rules

`cn()` wraps `clsx` + `tailwind-merge`. **Where you import it depends on context.**

```ts
// packages/ui/src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

| Context                         | Import path                           |
| ------------------------------- | ------------------------------------- |
| Inside `packages/ui` components | `import { cn } from '../../utils/cn'` |
| App code consuming `@repo/ui`   | `import { cn } from '@repo/helper'`   |

> **Never** install `tailwind-merge` or `clsx` directly in component files or app code.
> Never cross these boundaries.

---

## CSS Variable Contract (Consuming Apps)

Every app consuming `@repo/ui` must define these CSS variables in its `globals.css`.
`packages/ui` components rely on them — without them, tokens will not resolve.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
}
```

**Forbidden in `packages/ui`:**

```typescript
className="bg-[#016da1]"     // ❌ hardcoded hex → use CSS variables
className="text-blue-600"    // ❌ hardcoded semantic → use token class
style={{ color: '#016da1' }} // ❌ inline style → use CSS variables
process.env.NEXT_PUBLIC_MODE  // ❌ app-specific env var
import logo from '/public/logo.svg'  // ❌ app-specific asset
```

---

## Shared-vs-Local Boundary Framework

> Source: `apps/admin-portal/docs/migration/component/06-component-standards.md` §6

```
Is the component purely visual with no business logic?
  YES → Is it used (or likely used) by 2+ apps?
    YES → SHARED candidate → packages/ui
    NO  → KEEP_APP_LOCAL
  NO  → Has the business logic and UI been separated?
    YES → Extract UI part → packages/ui; keep logic in app
    NO  → KEEP_APP_LOCAL (refactor later if needed)

Does the component call APIs or use service hooks (useQuery/useMutation)?
  YES → KEEP_APP_LOCAL (use packages/ui primitives inside it)

Does the component reference domain entities (Policy, Claim, User, etc.)?
  YES → KEEP_APP_LOCAL

Does the component use next/link, next/image, or router?
  YES → Extract the framework dep using an 'as' prop or render prop,
        then evaluate for shared extraction
```

### Always KEEP_APP_LOCAL

- Domain forms (any form with API calls or business validation)
- Table column configs (column schemas are domain-specific)
- Page-level layouts (sidebar with nav config, top bar with user info)
- Branded full-page loaders (logo, company animation)
- Chart data wrappers (recharts configs with domain data shapes)
- **Any component with `useQuery` or `useMutation` inside**

### Always Eligible for `packages/ui`

- Pure display components (no API, no domain types)
- Input primitives and enhanced versions (with label + error)
- Modal/dialog/drawer shells (no business content inside)
- Loading indicators (spinner, skeleton)
- Empty states (icon + copy slot)
- Data tables (generic column system, no hardcoded domain columns)
- Navigation primitives (no hardcoded routes)

---

## Behavioral Parity Contract (Migration)

When migrating an app from local component copies to `@repo/ui`, these rules are
**non-negotiable**. They apply to every AI agent executing migration work.

### What MUST remain 100% identical

User interactions, form behavior, data display, loading states, error states, empty states,
modal/dialog behavior, navigation, accessibility attributes, API calls, and side effects.

### What MAY change (token adoption delta)

Minor visual shifts in border-radius, color shade, font-weight/line-height, padding/spacing on
atoms — **only** when caused directly by CSS variable adoption from the design system.
"Slightly different" means imperceptible to end users in normal use.

### What is STRICTLY FORBIDDEN during migration

```
❌ Refactoring component logic "while you're in there"
❌ Changing prop names at usage sites
❌ Removing features, variants, or states
❌ Redesigning layouts or overall composition
❌ Changing copy / text / placeholder text
❌ Adding new features or states not in the original
❌ Changing the order of elements inside a component
❌ Removing or changing ARIA attributes
❌ Modifying event handler signatures or behavior
❌ Altering form validation rules or error messages
```

> If you identify something that should be improved during migration, document it in
> `_output/_migration-log.md` under "Post-Migration Improvement Candidates" and skip it.
