# Contribution & Monorepo Guide

Operational guide for `packages/ui` — setup, adding components, building,
publishing, and governance. Read `SKILL.md` first.

---

## Monorepo Structure

```
monorepo-root/
├── apps/
│   ├── web/                    # Next.js — consumes @repo/ui
│   └── admin/
├── packages/
│   ├── ui/                     # ← Design system
│   └── config/
│       ├── tailwind/           # Base Tailwind config (re-exported by ui)
│       ├── typescript/         # Shared tsconfig bases
│       └── eslint/             # Shared ESLint config
├── pnpm-workspace.yaml
└── turbo.json
```

---

## Package Configuration

```json
// packages/ui/package.json (representative — check actual file for exact versions)
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./dist/index.js"
    },
    "./*": {
      "types": "./src/*/index.ts",
      "default": "./dist/*/index.js"
    }
  },
  "scripts": {
    "build": "pnpm run clean && tsc --project tsconfig.build.json",
    "clean": "node -e \"require('node:fs').rmSync('dist', { recursive: true, force: true })\"",
    "lint": "eslint . --max-warnings 0",
    "check-types": "tsc --noEmit",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "generate:component": "turbo gen react-component"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*",
    "@types/react": "...",
    "@types/react-dom": "...",
    "@vitejs/plugin-react": "...",
    "storybook": "...",
    "@storybook/react-vite": "...",
    "@storybook/addon-docs": "...",
    "typescript": "...",
    "vite": "..."
  },
  "dependencies": {
    "react": "^19",
    "react-dom": "^19",
    "@radix-ui/react-avatar": "...",
    "@radix-ui/react-dialog": "...",
    "@radix-ui/react-slot": "...",
    "@radix-ui/react-tabs": "...",
    "@radix-ui/react-tooltip": "...",
    "class-variance-authority": "...",
    "clsx": "...",
    "lucide-react": "...",
    "react-day-picker": "...",
    "vaul": "...",
    "@repo/config": "workspace:*"
  }
}
```

> [!NOTE]
> **Testing stack not yet installed.** `vitest`, `jest-axe`, and `@testing-library/*` are
> the target testing tools (see `TESTING.md`) but are not yet in `devDependencies`.
> Install them before running any tests:
> `pnpm --filter @repo/ui add -D vitest @testing-library/react @testing-library/user-event jest-axe @vitejs/plugin-react`

---

## Build Configuration

The build uses **TypeScript compiler (`tsc`)** directly — no tsup or bundler bundling step.
Vite powers Storybook only.

```bash
# Build packages/ui
pnpm --filter @repo/ui build          # tsc --project tsconfig.build.json
pnpm --filter @repo/ui check-types    # tsc --noEmit (type check only, no emit)
pnpm --filter @repo/ui lint           # eslint
pnpm --filter @repo/ui storybook      # storybook dev -p 6006
```

> There is no `tsup.config.ts` — if you need to add a bundler in future, discuss with the team first. The current
> build pipeline outputs types via `tsconfig.build.json` and the app consumes source directly via the `types` export.

---

## TypeScript Configuration

```json
// packages/ui/tsconfig.json (dev — includes stories + tests)
{
  "extends": "@repo/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

```json
// packages/ui/tsconfig.build.json (build only — excludes stories + tests)
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "dist", "**/*.stories.tsx", "**/*.test.tsx"]
}
```

> TypeScript base config lives in `packages/typescript-config/` (not `packages/config/typescript/`).

---

## Public API Barrel (`src/index.ts`)

Each component directory is re-exported with `export *` from its folder index:

```ts
// src/index.ts (actual pattern)
export * from './Alert';
export * from './Avatar';
export * from './Badge';
export * from './Button';
export * from './Calendar';
export * from './Card';
export * from './Checkbox';
export * from './Dialog';
export * from './Drawer';
export * from './Form';
export * from './Input';
export * from './Label';
export * from './Popover';
export * from './RadioGroup';
export * from './Select';
export * from './Skeleton';
export * from './Switch';
export * from './Tabs';
export * from './Tooltip';
// ... add new component export here when adding a new component
```

> Each component folder (`src/ComponentName/`) has its own `index.ts` that controls which
> symbols are public for that component. `src/index.ts` re-exports everything from those
> per-component barrels. Keep the per-component `index.ts` exports explicit and intentional.

---

## Adding a New Component

```bash
# 1. Create folder + files
mkdir -p packages/ui/src/components/MyComponent
touch packages/ui/src/components/MyComponent/MyComponent.tsx
touch packages/ui/src/components/MyComponent/MyComponent.variants.ts  # if needed
touch packages/ui/src/components/MyComponent/MyComponent.stories.tsx
touch packages/ui/src/components/MyComponent/MyComponent.test.tsx
touch packages/ui/src/components/MyComponent/index.ts

# 2. If it wraps a new Radix package, install it
pnpm --filter=@repo/ui add @radix-ui/react-<name>
```

Then: implement → stories → tests → add to `src/index.ts` → `pnpm --filter @repo/ui check-types && pnpm --filter @repo/ui build`.

---

## Turbo Pipeline

The root `turbo.json` defines these tasks (exact current state):

```json
// turbo.json
{
  "$schema": "https://turborepo.dev/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "lint": { "dependsOn": ["^lint"] },
    "check-types": { "dependsOn": ["^check-types"] },
    "dev": { "dependsOn": ["^build"], "cache": false, "persistent": true }
  }
}
```

```bash
# Correct commands for packages/ui
pnpm --filter @repo/ui build           # compile
pnpm --filter @repo/ui check-types     # type check (not type-check)
pnpm --filter @repo/ui lint            # lint
pnpm --filter @repo/ui storybook       # Storybook dev server (script, not turbo task)
```

> [!IMPORTANT]
> There is **no `test` or `storybook` task** in the root `turbo.json`.
> Run Storybook via `pnpm --filter @repo/ui storybook` directly (not through turbo).
> The script name for type checking is **`check-types`** (not `type-check`).

---

## Apps Consuming `@repo/ui`

```ts
// apps/web/tailwind.config.ts
import type { Config } from 'tailwindcss';

import baseConfig from '@repo/ui/tailwind.config';

export default {
  ...baseConfig,
  content: [...baseConfig.content, './app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
} satisfies Config;
```

```tsx
// apps/web/app/layout.tsx
import { ThemeProvider } from '@repo/ui';
import '@repo/ui/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

---

## Versioning

| Change type                              | Bump          |
| ---------------------------------------- | ------------- |
| New component, new token, new hook       | Minor `0.x.0` |
| Bug fix, a11y improvement, refactor      | Patch `0.0.x` |
| Prop rename, token removal, breaking API | Major `x.0.0` |

Mandatory deprecation cycle before any breaking change: add `@deprecated` JSDoc
with migration path, keep for one major version, remove in the next.

---

## PR Checklist

**Code:**

- [ ] `React.forwardRef` used, `displayName` set
- [ ] `className` accepted, applied via `cn()` as last arg
- [ ] `asChild` on interactive root elements
- [ ] `ref` forwarded to correct DOM element
- [ ] `...props` spread to root element
- [ ] No routing imports
- [ ] No data-fetching imports
- [ ] No global state imports
- [ ] No icon library imports — icons accepted as `ReactNode`
- [ ] No raw Tailwind color utilities — semantic tokens only
- [ ] Variants in `ComponentName.variants.ts`, not inline
- [ ] Internal context in `camelCase.context.ts`, not exported
- [ ] Named exports only — no `export default`
- [ ] Types exported from `index.ts`
- [ ] Component added to `src/index.ts`

**Quality:**

- [ ] JSDoc on component and non-obvious props
- [ ] Stories: default + all variants + states + edge cases
- [ ] Tests: render + interaction + `axe()` on all variants + ref
- [ ] `pnpm --filter @repo/ui check-types` passes
- [ ] `pnpm --filter @repo/ui build` clean with no warnings (test gate: install vitest first — see TESTING.md)
- [ ] `pnpm build` clean with no warnings
