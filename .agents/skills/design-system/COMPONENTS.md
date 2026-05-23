# Components Guide

Everything in `src/components/` — the only place UI components live.
Read `SKILL.md` first.

---

## What Lives in `src/components/`

Every styled, ready-to-use UI element regardless of internal complexity:

| Type | Description | Examples |
|------|-------------|---------|
| **Simple** | One root element, stateless | Button, Badge, Avatar, Skeleton, Label |
| **Composite** | Multiple elements, layout-composed, no shared state | Card (+sub-components), Alert, FormField |
| **Compound** | Multiple sub-components sharing state via React Context | Dialog, Tabs, Select, Accordion, Tooltip |

Compound components use React Context internally — that's an implementation detail,
not a reason to put them anywhere else. One folder, one rule.

Radix UI is imported **directly** inside component files — no wrapper layer in between.

```tsx
// Dialog.tsx — imports Radix directly, applies tokens on top
import * as DialogPrimitive from "@radix-ui/react-dialog";
```

---

## File Structure

```
src/components/ComponentName/
├── ComponentName.tsx           ← the component
├── ComponentName.variants.ts   ← CVA definitions (if has variants)
├── ComponentName.stories.tsx   ← Storybook stories
├── ComponentName.test.tsx      ← unit + a11y tests
└── index.ts                    ← re-exports: component + types + variants
```

Internal-only files (e.g. context) use camelCase and are not exported from `index.ts`:

```
src/components/Tabs/
├── Tabs.tsx
├── Tabs.variants.ts
├── Tabs.stories.tsx
├── Tabs.test.tsx
├── tabs.context.ts             ← internal, camelCase, not re-exported
└── index.ts
```

---

## Simple Component — Button

### `Button/Button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { buttonVariants } from "./Button.variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as child element (polymorphic).
   * @example <Button asChild><a href="/foo">Link</a></Button>
   */
  asChild?: boolean;
  /** Disables interaction and shows a loading spinner. */
  isLoading?: boolean;
  /** Icon rendered before the label. Accepts any ReactNode. */
  leftIcon?: React.ReactNode;
  /** Icon rendered after the label. Accepts any ReactNode. */
  rightIcon?: React.ReactNode;
}

/**
 * Primary action trigger. Supports all variants, sizes, loading state,
 * icon slots, and polymorphic rendering via `asChild`.
 *
 * @example
 * <Button variant="primary" size="md">Save changes</Button>
 * <Button variant="outline" leftIcon={<PlusIcon />}>Add item</Button>
 * <Button asChild><a href="/dashboard">Dashboard</a></Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <span
            className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}
        {!isLoading && leftIcon && (
          <span className="shrink-0" aria-hidden="true">{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className="shrink-0" aria-hidden="true">{rightIcon}</span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";
```

### `Button/Button.variants.ts`

```ts
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "motion-reduce:transition-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:     "bg-primary text-primary-foreground shadow hover:bg-primary/90 active:bg-primary/95",
        secondary:   "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        outline:     "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost:       "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        link:        "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs:   "h-7 px-2.5 text-xs gap-1 rounded",
        sm:   "h-8 px-3 text-xs gap-1.5",
        md:   "h-9 px-4 text-sm gap-2",
        lg:   "h-10 px-6 text-sm gap-2",
        xl:   "h-12 px-8 text-base gap-2.5",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size:    "md",
    },
  }
);
```

### `Button/index.ts`

```ts
export { Button }           from "./Button";
export type { ButtonProps } from "./Button";
export { buttonVariants }   from "./Button.variants";
```

---

## Composite Component — Card

Multiple sub-components, pure layout composition. No shared runtime state between them — no context needed.

```tsx
// Card/Card.tsx
import * as React from "react";
import { cn } from "../../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds hover shadow and pointer cursor for clickable card patterns. */
  isInteractive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, isInteractive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
        isInteractive &&
          "cursor-pointer transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      tabIndex={isInteractive ? 0 : undefined}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-heading-md leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-body-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";
```

```ts
// Card/index.ts
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
export type { CardProps } from "./Card";
```

---

## Compound Component — Dialog

Imports Radix directly. Applies token-based styling on each Radix part.

```tsx
// Dialog/Dialog.tsx
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";

// Pass-throughs — no styling needed on root and trigger
const Dialog        = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose   = DialogPrimitive.Close;
const DialogPortal  = DialogPrimitive.Portal;

// Styled overlay
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      "motion-reduce:animate-none",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

// Styled content — always renders overlay internally
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
        "grid w-full max-w-lg gap-4 bg-background p-6",
        "border border-border rounded-lg shadow-lg",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        "duration-200 motion-reduce:transition-none motion-reduce:animate-none",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

// Layout sub-components — pure HTML, no Radix dependency
function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)} {...props} />
  );
}
DialogHeader.displayName = "DialogHeader";

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
  );
}
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-heading-lg leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-body-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
```

```ts
// Dialog/index.ts
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./Dialog";
```

---

## Compound Component — Tabs (with internal Context)

When sub-components need to share runtime state, use a `tabs.context.ts` file (camelCase, internal, not exported from `index.ts`).

```ts
// Tabs/tabs.context.ts  ← internal only
import * as React from "react";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function useTabsContext() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("Tabs sub-components must be used inside <Tabs>");
  return ctx;
}

export { TabsContext };
```

```tsx
// Tabs/Tabs.tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { tabsListVariants, tabsTriggerVariants } from "./Tabs.variants";

// Root — wraps Radix, adds token-aware styling
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
));
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium",
      "ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      "motion-reduce:transition-none",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

```ts
// Tabs/index.ts
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
// tabs.context.ts is NOT exported — internal only
```

---

## Form Components

Uncontrolled by design. Integrates with any form library via `ref`.

```tsx
// Input/Input.tsx
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { inputVariants } from "./Input.variants";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", hasError, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(inputVariants({ hasError }), className)}
      aria-invalid={hasError || undefined}
      {...props}
    />
  )
);
Input.displayName = "Input";
```

```tsx
// FormField/FormField.tsx — layout only, no library coupling
export interface FormFieldProps {
  label:      string;
  htmlFor?:   string;
  error?:     string;
  hint?:      string;
  required?:  boolean;
  children:   React.ReactNode;
  className?: string;
}

export function FormField({
  label, htmlFor, error, hint, required, children, className,
}: FormFieldProps) {
  const id = htmlFor ?? React.useId();
  const describedBy = error
    ? `${id}-error`
    : hint
    ? `${id}-hint`
    : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id} required={required}>{label}</Label>
      {React.isValidElement(children)
        ? React.cloneElement(
            children as React.ReactElement<{ id?: string; "aria-describedby"?: string }>,
            { id, "aria-describedby": describedBy }
          )
        : children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-label-sm text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-label-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
FormField.displayName = "FormField";
```

---

## Icon Pattern — Always App-Agnostic

Never import a specific icon library. Accept icons as `React.ReactNode`.

```tsx
// ✅ Consumer picks the icon library
interface AlertProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

// App usage:
// <Alert icon={<LucideInfo className="h-4 w-4" />}>Message</Alert>
```

For unavoidable built-in icons (spinner, close X, chevron), use inline SVG only:

```tsx
const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 animate-spin"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);
```

---

## Layout Components

No `*.variants.ts` — mapping is simple enough to inline.

```tsx
// Stack/Stack.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  gap?:       "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?:     "start" | "center" | "end" | "stretch";
  justify?:   "start" | "center" | "end" | "between";
  wrap?:      boolean;
  asChild?:   boolean;
}

const gapMap     = { none:"gap-0", xs:"gap-1", sm:"gap-2", md:"gap-4", lg:"gap-6", xl:"gap-8" };
const alignMap   = { start:"items-start", center:"items-center", end:"items-end", stretch:"items-stretch" };
const justifyMap = { start:"justify-start", center:"justify-center", end:"justify-end", between:"justify-between" };

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "vertical",
      gap       = "md",
      align     = "stretch",
      justify   = "start",
      wrap      = false,
      asChild   = false,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex",
          direction === "vertical" ? "flex-col" : "flex-row",
          gapMap[gap],
          alignMap[align],
          justifyMap[justify],
          wrap && "flex-wrap",
          className
        )}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";
```

---

## JSDoc Standards

Every exported component and every non-obvious prop requires JSDoc:

```tsx
/**
 * One-line description.
 *
 * @example
 * <ComponentName prop="value">content</ComponentName>
 *
 * @example
 * <ComponentName asChild><a href="/foo">Link</a></ComponentName>
 */
```

---

## Component Rules

- `React.forwardRef` on every component — no exceptions
- `displayName` on every component — no exceptions
- `className` accepted and applied via `cn()` as the last argument
- `...props` spread to the root element
- `asChild` on all interactive root elements
- Named exports only — never `export default`
- Export prop types alongside component in `index.ts`
- No routing imports
- No data-fetching imports
- Icons as `ReactNode` — never import an icon library
- No raw Tailwind color utilities — semantic tokens only
- Variants in `ComponentName.variants.ts` — never inline

---

## Headless Library Wrapping Pattern

When wrapping a non-Radix headless library (TanStack Table, react-day-picker, cmdk, etc.),
the same rules apply: you own the markup, you own the styles, the library owns the behavior.

**The pattern is always:**
1. Call the library's hook or use its renderless component to get behavior/state
2. You render the actual HTML elements
3. Apply token-based Tailwind classes to every element you render
4. Export a typed, composable component from `src/components/`

---

### DataTable — TanStack Table

`@tanstack/react-table` gives you zero HTML. You wire up columns, get back a table
instance, and render everything yourself.

```
src/components/DataTable/
├── DataTable.tsx          ← renders the table shell
├── DataTable.stories.tsx
├── DataTable.test.tsx
└── index.ts
```

```tsx
// DataTable/DataTable.tsx
import * as React from "react";
import {
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "../../utils/cn";

export interface DataTableProps<TData, TValue> {
  columns:  ColumnDef<TData, TValue>[];
  data:     TData[];
  /** Enable row selection checkboxes. */
  selectable?:  boolean;
  /** Enable column sorting. */
  sortable?:    boolean;
  /** Number of rows per page. `undefined` = no pagination. */
  pageSize?:    number;
  className?:   string;
  /**
   * Render custom toolbar above the table.
   * Receives the table instance for full control.
   */
  renderToolbar?: (table: ReturnType<typeof useReactTable<TData>>) => React.ReactNode;
  /**
   * Render empty state when data is empty.
   */
  renderEmpty?: () => React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  sortable    = false,
  pageSize,
  className,
  renderToolbar,
  renderEmpty,
}: DataTableProps<TData, TValue>) {
  const [sorting,         setSorting]         = React.useState<SortingState>([]);
  const [columnFilters,   setColumnFilters]   = React.useState<ColumnFiltersState>([]);
  const [columnVisibility,setColumnVisibility]= React.useState<VisibilityState>({});
  const [rowSelection,    setRowSelection]    = React.useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    onSortingChange:         setSorting,
    onColumnFiltersChange:   setColumnFilters,
    onColumnVisibilityChange:setColumnVisibility,
    onRowSelectionChange:    setRowSelection,
    getCoreRowModel:         getCoreRowModel(),
    getSortedRowModel:       sortable ? getSortedRowModel() : undefined,
    getFilteredRowModel:     getFilteredRowModel(),
    getPaginationRowModel:   pageSize ? getPaginationRowModel() : undefined,
    initialState:            pageSize ? { pagination: { pageSize } } : undefined,
  });

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Toolbar slot — caller owns the UI */}
      {renderToolbar?.(table)}

      {/* Table */}
      <div className="rounded-md border border-border overflow-hidden">
        <table className="w-full caption-bottom text-body-sm">
          <thead className="border-b border-border bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={cn(
                      "h-10 px-4 text-left align-middle font-medium text-muted-foreground",
                      "[&:has([role=checkbox])]:pr-0",
                      header.column.getCanSort() &&
                        "cursor-pointer select-none hover:text-foreground transition-colors"
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                    aria-sort={
                      header.column.getIsSorted() === "asc"
                        ? "ascending"
                        : header.column.getIsSorted() === "desc"
                        ? "descending"
                        : "none"
                    }
                  >
                    <div className="flex items-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      {/* Sort indicator — caller supplies icon via column def */}
                      {header.column.getIsSorted() === "asc"  && <span aria-hidden>↑</span>}
                      {header.column.getIsSorted() === "desc" && <span aria-hidden>↓</span>}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-border">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-12 text-center text-muted-foreground">
                  {renderEmpty?.() ?? "No results."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination — only rendered when pageSize is set */}
      {pageSize && (
        <div className="flex items-center justify-between text-body-sm text-muted-foreground">
          <span>
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1.5 rounded-md border border-input hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              Previous
            </button>
            <span>
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1.5 rounded-md border border-input hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
DataTable.displayName = "DataTable";
```

```ts
// DataTable/index.ts
export { DataTable }           from "./DataTable";
export type { DataTableProps } from "./DataTable";
// Re-export TanStack types consumers will need
export type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from "@tanstack/react-table";
```

App usage:
```tsx
import { DataTable } from "@repo/ui";
import type { ColumnDef } from "@repo/ui";

const columns: ColumnDef<User>[] = [
  { accessorKey: "name",  header: "Name" },
  { accessorKey: "email", header: "Email" },
  {
    id: "actions",
    cell: ({ row }) => <Button size="icon" variant="ghost">...</Button>,
  },
];

<DataTable columns={columns} data={users} sortable pageSize={20} />
```

---

### Calendar + DatePicker — react-day-picker

`react-day-picker` v9 accepts a `classNames` prop that maps every internal element
to a class string — full Tailwind control, no CSS file needed.

Two components: `Calendar` (standalone grid) and `DatePicker` (Calendar inside a Popover).

```
src/components/Calendar/
├── Calendar.tsx          ← styled DayPicker grid
├── Calendar.stories.tsx
├── Calendar.test.tsx
└── index.ts

src/components/DatePicker/
├── DatePicker.tsx        ← Calendar + Radix Popover + Input trigger
├── DatePicker.stories.tsx
├── DatePicker.test.tsx
└── index.ts
```

```tsx
// Calendar/Calendar.tsx
import * as React from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "../../utils/cn";

export type CalendarProps = DayPickerProps & {
  className?: string;
};

/**
 * Styled calendar grid. Supports single, range, and multiple selection modes.
 * Pass `mode="single"` | `"range"` | `"multiple"` and the corresponding
 * `selected` + `onSelect` props.
 *
 * @example
 * // Single
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 *
 * @example
 * // Range
 * <Calendar mode="range" selected={range} onSelect={setRange} />
 */
export function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        // Layout
        months:               "flex flex-col gap-4 sm:flex-row",
        month:                "flex flex-col gap-2",
        month_caption:        "flex items-center justify-between px-1",
        caption_label:        "text-label-md font-medium",
        nav:                  "flex items-center gap-1",
        // Weeks
        month_grid:           "w-full border-collapse",
        weekdays:             "flex",
        weekday:              "w-9 text-center text-label-sm text-muted-foreground font-normal",
        week:                 "flex mt-1",
        // Days
        day:                  "relative p-0 text-center text-body-sm",
        day_button: cn(
          "h-9 w-9 rounded-md font-normal",
          "transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "aria-selected:opacity-100",
          "motion-reduce:transition-none"
        ),
        // States
        selected:             "bg-primary text-primary-foreground rounded-md hover:bg-primary hover:text-primary-foreground",
        today:                "bg-accent text-accent-foreground rounded-md",
        outside:              "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        disabled:             "text-muted-foreground opacity-50 pointer-events-none",
        hidden:               "invisible",
        // Range
        range_start:          "rounded-l-md",
        range_end:            "rounded-r-md",
        range_middle:         "rounded-none bg-accent text-accent-foreground",
        // Navigation buttons — accept icon as children via CalendarNav
        button_previous:      cn(
          "h-7 w-7 flex items-center justify-center rounded-md border border-input",
          "hover:bg-accent hover:text-accent-foreground transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "motion-reduce:transition-none"
        ),
        button_next: cn(
          "h-7 w-7 flex items-center justify-center rounded-md border border-input",
          "hover:bg-accent hover:text-accent-foreground transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "motion-reduce:transition-none"
        ),
        // Spread caller's classNames on top — allows fine-grained override
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
```

```tsx
// DatePicker/DatePicker.tsx
import * as React from "react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../utils/cn";
import { Calendar } from "../Calendar/Calendar";

// ── Shared trigger button ───────────────────────────────────────────────────

interface DatePickerTriggerProps {
  label:     string;
  hasValue:  boolean;
  className?: string;
}

function DatePickerTrigger({ label, hasValue, className }: DatePickerTriggerProps) {
  return (
    <PopoverPrimitive.Trigger asChild>
      <button
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2",
          "text-body-sm ring-offset-background",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "hover:bg-accent/50 transition-colors",
          !hasValue && "text-muted-foreground",
          "motion-reduce:transition-none",
          className
        )}
      >
        {label}
        {/* Calendar icon — caller can override via className or wrap this component */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
          aria-hidden className="h-4 w-4 opacity-50">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      </button>
    </PopoverPrimitive.Trigger>
  );
}

// ── Single DatePicker ────────────────────────────────────────────────────────

export interface DatePickerProps {
  value?:        Date;
  onChange?:     (date: Date | undefined) => void;
  placeholder?:  string;
  dateFormat?:   string;
  disabled?:     boolean;
  className?:    string;
}

/**
 * Single date picker. Opens a Calendar in a Popover.
 *
 * @example
 * <DatePicker value={date} onChange={setDate} placeholder="Pick a date" />
 */
export function DatePicker({
  value,
  onChange,
  placeholder  = "Pick a date",
  dateFormat   = "PPP",
  className,
}: DatePickerProps) {
  return (
    <PopoverPrimitive.Root>
      <DatePickerTrigger
        label={value ? format(value, dateFormat) : placeholder}
        hasValue={!!value}
        className={className}
      />
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          className={cn(
            "z-50 rounded-md border border-border bg-popover p-0 shadow-md",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "motion-reduce:animate-none"
          )}
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            initialFocus
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
DatePicker.displayName = "DatePicker";

// ── Range DatePicker ─────────────────────────────────────────────────────────

export interface DateRangePickerProps {
  value?:       DateRange;
  onChange?:    (range: DateRange | undefined) => void;
  placeholder?: string;
  dateFormat?:  string;
  className?:   string;
  /** Show two months side by side. Default: true. */
  numberOfMonths?: 1 | 2;
}

/**
 * Date range picker. Shows one or two calendar months.
 *
 * @example
 * <DateRangePicker
 *   value={range}
 *   onChange={setRange}
 *   numberOfMonths={2}
 * />
 */
export function DateRangePicker({
  value,
  onChange,
  placeholder    = "Pick a date range",
  dateFormat     = "LLL dd, y",
  numberOfMonths = 2,
  className,
}: DateRangePickerProps) {
  const label = value?.from
    ? value.to
      ? `${format(value.from, dateFormat)} – ${format(value.to, dateFormat)}`
      : format(value.from, dateFormat)
    : placeholder;

  return (
    <PopoverPrimitive.Root>
      <DatePickerTrigger label={label} hasValue={!!value?.from} className={className} />
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          className={cn(
            "z-50 rounded-md border border-border bg-popover p-0 shadow-md",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "motion-reduce:animate-none"
          )}
        >
          <Calendar
            mode="range"
            selected={value}
            onSelect={onChange}
            numberOfMonths={numberOfMonths}
            initialFocus
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
DateRangePicker.displayName = "DateRangePicker";
```

```ts
// DatePicker/index.ts
export { DatePicker, DateRangePicker } from "./DatePicker";
export type { DatePickerProps, DateRangePickerProps } from "./DatePicker";
// Re-export DateRange type so consumers don't import from react-day-picker directly
export type { DateRange } from "react-day-picker";
```

---

### Command / Combobox — cmdk

`cmdk` is fully renderless — you provide all markup and classes.

```tsx
// Command/Command.tsx
import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../utils/cn";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = "Command";

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-body-sm outline-none",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
CommandList.displayName = "CommandList";

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-body-sm" {...props} />
));
CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground",
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5",
      "[&_[cmdk-group-heading]]:text-label-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = "CommandGroup";

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-body-sm outline-none",
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = "CommandItem";

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = "CommandSeparator";

export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator };
```

---

### General Wrapping Rules for Headless Libraries

These apply to every headless library — not just the ones above:

1. **You render, the library manages state/behavior** — never let a headless library render unstyled elements directly into the app
2. **Wrap in `src/components/`** — same folder structure, same file naming convention
3. **Re-export needed types from `index.ts`** — so app never imports from the headless library directly (e.g. `DateRange` from react-day-picker → re-export from `@repo/ui`)
4. **`classNames` / `className` props** — most headless libs expose these; use them to inject token-based Tailwind classes
5. **`data-*` attributes for state styling** — prefer `data-[state=open]:` over JS-driven conditional classes where the library exposes them
6. **Accept `ReactNode` for icons/custom content** — don't couple to a specific icon library
7. **No library-specific types leaking to consumers** — wrap or re-export, don't make apps depend on `@tanstack/react-table` directly for common types
