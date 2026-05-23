---
name: monorepo-workspace
version: 2.1.0
description: >
  Source-of-truth for the frontend-workspace monorepo topology.
  Read this FIRST before any task that touches packages, imports, workspace
  dependencies, inter-package boundaries, or command selection.
tags: [monorepo, workspace, turborepo, pnpm, packages, boundaries, typescript]
---

# Monorepo Workspace Skill

This skill defines where code lives, what each package owns, and what can import what.
Read it before touching ANY file in the workspace.

---

## Workspace Topology

```
frontend-workspace/                  ← root (private, never published)
│
├── turbo.json                       ← pipeline: build, lint, check-types, dev
├── package.json                     ← pnpm@10.27.0; node>=20.19
├── pnpm-workspace.yaml              ← globs: apps/*, packages/*
│
├── apps/                            ← deployable applications
│   └── <app-name>/                  ← Next.js or other app (no @repo/ scope)
│
└── packages/                        ← shared, published-internally packages
    ├── ui/                          ← @repo/ui   — shared React component library
    ├── config/                      ← @repo/config — shared Tailwind CSS base config
    ├── typescript-config/           ← @repo/typescript-config — base tsconfig files
    ├── eslint-config/               ← @repo/eslint-config — shared ESLint rulesets
    ├── helper/                      ← @repo/helper — shared non-UI utilities
    └── interface/                   ← @repo/interface — shared TypeScript domain types
```

---

## Package Reference

| Package                      | Scope                     | Purpose                                                     | Who uses it         |
| ---------------------------- | ------------------------- | ----------------------------------------------------------- | ------------------- |
| `packages/ui`                | `@repo/ui`                | Shared React component library — Radix + CVA + Tailwind     | All apps            |
| `packages/config`            | `@repo/config`            | Tailwind CSS shared base config + CSS tokens                | `@repo/ui`, apps    |
| `packages/typescript-config` | `@repo/typescript-config` | Base tsconfig (react-library, nextjs flavors)               | All packages + apps |
| `packages/eslint-config`     | `@repo/eslint-config`     | Shared ESLint rules                                         | All packages + apps |
| `packages/helper`            | `@repo/helper`            | Global helper utilities (date, file, string, image helpers) | All apps            |
| `packages/interface`         | `@repo/interface`         | Shared TypeScript interfaces / domain types                 | All packages + apps |
| `apps/*`                     | (no scope)                | Deployable applications                                     | —                   |

---

## Dependency Boundaries

```
apps/*             →  @repo/ui, @repo/interface, @repo/config, @repo/helper
@repo/ui           →  @repo/config, @repo/typescript-config, @repo/eslint-config
@repo/interface    →  (nothing — pure types)
@repo/config       →  (nothing — pure config files)
@repo/helper       →  @repo/interface (optional)
```

**Rules — no exceptions:**

| Rule                                                                                    | Why                           |
| --------------------------------------------------------------------------------------- | ----------------------------- |
| `packages/*` MUST NOT import from `apps/*`                                              | Packages are app-agnostic     |
| `@repo/ui` MUST NOT import from any routing library (`next/link`, `react-router-dom`)   | App-agnostic contract         |
| Apps MUST import components from `@repo/ui` — never by reaching into `packages/ui/src/` | Maintains public API boundary |
| New feature-specific types go in `@repo/interface` if shared across apps                | Single source of truth        |
| CSS token configuration → `@repo/config`                                                | Shared design contract        |

---

## Turbo Pipeline

Root `turbo.json` registers **exactly these tasks** — no others:

| Task          | `dependsOn`    | Cached | Notes                      |
| ------------- | -------------- | ------ | -------------------------- |
| `build`       | `^build`       | ✅     | Packages build before apps |
| `lint`        | `^lint`        | ✅     | Parallel                   |
| `check-types` | `^check-types` | ✅     | Parallel                   |
| `dev`         | `^build`       | ❌     | Persistent, no cache       |

> [!WARNING]
> Tasks NOT in turbo.json (`test`, `storybook`, etc.) must be run directly via
> `pnpm --filter`. Never `turbo run storybook` — it won't find the task.

---

## Per-Package Script Reference

Every package's available scripts live in its own `package.json`.
The **canonical** source is the package file — this table is a summary:

| Scope      | Script            | Command                             |
| ---------- | ----------------- | ----------------------------------- |
| `@repo/ui` | `build`           | `tsc --project tsconfig.build.json` |
| `@repo/ui` | `check-types`     | `tsc --noEmit`                      |
| `@repo/ui` | `lint`            | `eslint . --max-warnings 0`         |
| `@repo/ui` | `storybook`       | `storybook dev -p 6006`             |
| `@repo/ui` | `build-storybook` | `storybook build`                   |
| `@repo/ui` | `clean`           | removes `dist/`                     |
| `apps/*`   | `dev`             | `next dev` (port varies)            |
| `apps/*`   | `build`           | `next build`                        |
| `apps/*`   | `lint`            | `next lint` or `eslint`             |
| `apps/*`   | `check-types`     | `tsc --noEmit` (if present)         |

> The type check script is **`check-types`** — never `type-check`.

---

## Common pnpm Commands

```bash
# ── Turbo tasks ────────────────────────────────────────────────
pnpm run build          # turbo run build (all packages + apps)
pnpm run check-types    # turbo run check-types (all)
pnpm run lint           # turbo run lint (all)

# ── Scoped to one package ─────────────────────────────────────
pnpm --filter @repo/ui build
pnpm --filter @repo/ui check-types
pnpm --filter @repo/ui lint
pnpm --filter @repo/ui storybook
pnpm --filter @repo/ui build-storybook

# pnpm --filter <APP_NAME> uses the app's package.json "name" field (no @repo/ scope)
pnpm --filter my-app dev
pnpm --filter my-app build
pnpm --filter my-app check-types

# ── Dependency management ──────────────────────────────────────
pnpm --filter @repo/ui add <package>           # dep for @repo/ui
pnpm --filter my-app add -D <package>          # devDep for an app

# Install a workspace root tool (e.g., turbo, changesets)
pnpm add -w -D <package>

# Add an internal workspace package as dep
pnpm --filter my-app add @repo/ui@workspace:*
# (then add to the app's package.json manually if auto-linking doesn't trigger)
```

---

## TypeScript Configuration

Each package extends a base from `@repo/typescript-config`:

```jsonc
// packages/ui/tsconfig.json
{
  "extends": "@repo/typescript-config/react-library.json",
  "include": ["src"],
  "exclude": ["node_modules", "dist"],
}
```

Available bases:

| File                 | Use for                               |
| -------------------- | ------------------------------------- |
| `base.json`          | Non-React packages                    |
| `react-library.json` | React component packages (`@repo/ui`) |
| `nextjs.json`        | Next.js apps                          |

---

## Adding a New Package

1. Create `packages/<name>/package.json` with `"name": "@repo/<name>"`
2. Add a `build` script if it produces output; add `check-types` script
3. Add `tsconfig.json` extending appropriate `@repo/typescript-config` base
4. Add `"@repo/<name>": "workspace:*"` to the consuming package(s)
5. Run `pnpm install` from workspace root
6. No `turbo.json` changes needed unless the package has non-standard outputs

---

## Adding a New App

1. Create `apps/<name>/package.json` with `"name": "<name>"` (no `@repo/` scope)
2. Extend `@repo/typescript-config/nextjs.json` in `tsconfig.json`
3. Add workspace internal packages in `dependencies`:
   ```json
   { "@repo/ui": "workspace:*", "@repo/interface": "workspace:*" }
   ```
4. Run `pnpm install` from workspace root
5. The app will automatically participate in `turbo run build/lint/check-types`

---

## `cn()` Utility Quick Reference

`cn()` wraps `clsx` + `tailwind-merge` and is the canonical class merge utility across the workspace.
**Where you import it depends strictly on context** — do not cross these boundaries.

| Context                         | Import                                |
| ------------------------------- | ------------------------------------- |
| Inside `packages/ui` components | `import { cn } from '../../utils/cn'` |
| Inside `apps/*`                 | `import { cn } from '@repo/helper'`   |

> **Never** install `tailwind-merge` or `clsx` directly in app code or component files.
> Never import `cn` from `@repo/ui` inside apps — use `@repo/helper`.

---

## Environment Variables

- Environment variables are **app-scoped** — each app manages its own `.env` files
- Do NOT put environment variables in the workspace root `.env` unless they apply globally (e.g., CI secrets injected via env)
- `packages/*` MUST NOT read `process.env.NEXT_PUBLIC_*` — they are app-agnostic
- Service base URLs live in the consuming app's env (`NEXT_PUBLIC_API_*_URL`)

---

## Common Mistakes

| Mistake                                                                               | Correct                                         |
| ------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `import { cn } from 'clsx'` or `import { twMerge } from 'tailwind-merge'` in app code | Use `import { cn } from '@repo/helper'` instead |
| `import from 'packages/ui/src/ComponentName'` directly in app                         | `import from '@repo/ui'`                        |
| `next/link` in `packages/ui` component                                                | Accept `href` as prop or use `asChild` pattern  |
| `pnpm run type-check`                                                                 | `pnpm run check-types`                          |
| `turbo run storybook`                                                                 | `pnpm --filter @repo/ui storybook`              |
| `pnpm install <pkg>` at root for app-specific dep                                     | `pnpm --filter <app-name> add <pkg>`            |
