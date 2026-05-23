# Testing Guide

Testing strategy for `packages/ui`. Every component in `src/components/`
ships with tests. Primitives in `src/primitives/` are tested via their
styled component — no direct primitive tests required.

---

## Stack

| Tool | Purpose |
|------|---------|
| **Vitest** | Test runner |
| **@testing-library/react** | Render + query |
| **@testing-library/user-event** | Realistic user interaction simulation |
| **jest-axe** | Automated a11y audit |
| **@storybook/test** | Story-level interaction tests (`play` functions) |

---

## Test File Template

```tsx
// Button.test.tsx
import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Button } from "./Button";

expect.extend(toHaveNoViolations);

describe("Button", () => {

  // ── Rendering ──────────────────────────────────────────────────────────────

  describe("rendering", () => {
    it("renders children", () => {
      render(<Button>Save</Button>);
      expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
    });

    it("applies variant class", () => {
      render(<Button variant="destructive">Delete</Button>);
      expect(screen.getByRole("button")).toHaveClass("bg-destructive");
    });

    it("applies size class", () => {
      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button")).toHaveClass("h-10");
    });

    it("merges custom className", () => {
      render(<Button className="mt-4">Custom</Button>);
      expect(screen.getByRole("button")).toHaveClass("mt-4");
    });

    it("renders child element with asChild", () => {
      render(<Button asChild><a href="/go">Go</a></Button>);
      const link = screen.getByRole("link", { name: /go/i });
      expect(link.tagName).toBe("A");
    });

    it("shows spinner and disables during loading", () => {
      render(<Button isLoading>Saving</Button>);
      const btn = screen.getByRole("button");
      expect(btn).toBeDisabled();
      expect(btn).toHaveAttribute("aria-busy", "true");
    });
  });

  // ── Interaction ────────────────────────────────────────────────────────────

  describe("interaction", () => {
    it("calls onClick on click", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click</Button>);
      await user.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledOnce();
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button disabled onClick={handleClick}>Click</Button>);
      await user.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("is reachable via Tab", async () => {
      const user = userEvent.setup();
      render(<Button>Focus</Button>);
      await user.tab();
      expect(screen.getByRole("button")).toHaveFocus();
    });

    it("activates via Enter", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Enter</Button>);
      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");
      expect(handleClick).toHaveBeenCalledOnce();
    });

    it("activates via Space", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Space</Button>);
      screen.getByRole("button").focus();
      await user.keyboard(" ");
      expect(handleClick).toHaveBeenCalledOnce();
    });
  });

  // ── Accessibility ──────────────────────────────────────────────────────────

  describe("accessibility", () => {
    it("has no axe violations — primary", async () => {
      const { container } = render(<Button>Primary</Button>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("has no axe violations — outline", async () => {
      const { container } = render(<Button variant="outline">Outline</Button>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("has no axe violations — disabled", async () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("has no axe violations — icon-only with aria-label", async () => {
      const { container } = render(<Button size="icon" aria-label="Close">✕</Button>);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ── Ref forwarding ─────────────────────────────────────────────────────────

  it("forwards ref to button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
```

---

## Storybook Story Template

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title:     "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Primary action trigger. Supports variants, sizes, loading state, and polymorphic rendering.",
      },
    },
  },
  argTypes: {
    variant:   { control: "select", options: ["primary","secondary","outline","ghost","destructive","link"] },
    size:      { control: "select", options: ["xs","sm","md","lg","xl","icon"] },
    isLoading: { control: "boolean" },
    disabled:  { control: "boolean" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XLarge</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { children: "Saving...", isLoading: true },
};

export const Disabled: Story = {
  args: { children: "Unavailable", disabled: true },
};

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="outline">
      <a href="https://example.com" target="_blank" rel="noreferrer">
        Open docs
      </a>
    </Button>
  ),
};

// Interaction test — runs in Storybook test runner and CI
export const ClickInteraction: Story = {
  args: { children: "Click me" },
  play: async ({ canvasElement }) => {
    const { within, userEvent, expect } = await import("@storybook/test");
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};
```

---

## Coverage Requirements per Component

| Category | What to test |
|----------|-------------|
| Rendering | Default output, every variant, every size, every boolean prop |
| Interaction | Click, Tab focus, Enter, Space, disabled state |
| Accessibility | `axe()` on every variant + disabled + icon-only |
| Ref forwarding | `ref.current` is the correct DOM element type |
| Edge cases | Long text, empty children, icon-only, `asChild` with anchor |

---

## Vitest Configuration

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals:     true,
    setupFiles:  ["./src/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      thresholds: {
        lines:      80,
        functions:  80,
        branches:   70,
        statements: 80,
      },
    },
  },
});
```

```ts
// src/test/setup.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => cleanup());
```

---

## Storybook Configuration

```ts
// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: { autodocs: "tag" },
};

export default config;
```

```ts
// .storybook/preview.ts
import type { Preview } from "@storybook/react";
import "../src/tokens/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true }, // we use data-theme, not backgrounds
    a11y: { config: { rules: [{ id: "color-contrast", enabled: true }] } },
  },
  globalTypes: {
    theme: {
      description: "Color theme",
      defaultValue: "light",
      toolbar: { title: "Theme", items: ["light", "dark"], dynamicTitle: true },
    },
  },
  decorators: [
    (Story, ctx) => {
      document.documentElement.setAttribute("data-theme", ctx.globals["theme"] ?? "light");
      return <Story />;
    },
  ],
};

export default preview;
```

---

## NPM Scripts

```json
{
  "scripts": {
    "test":            "vitest run",
    "test:watch":      "vitest",
    "test:coverage":   "vitest run --coverage",
    "storybook":       "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "chromatic":       "chromatic --project-token=$CHROMATIC_TOKEN"
  }
}
```
