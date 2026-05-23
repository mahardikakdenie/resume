---
name: forms-validation
version: 2.0.0
description: >
  Form and validation patterns for the frontend-workspace monorepo.
  react-hook-form v7 + zod + @hookform/resolvers. Covers schema-first design,
  @repo/ui form component integration, dynamic fields, mutation submission,
  accessible error display, and multi-step forms.
tags: [forms, react-hook-form, zod, validation, accessibility, ui-components]
---

# Forms & Validation Skill

`react-hook-form` v7 + `zod` is the standard form stack.
Read this before writing any form component.

Versions:

- `react-hook-form` ^7.x
- `zod` ^3.x
- `@hookform/resolvers` ^3.x

---

## Core Philosophy — Schema-First

The **Zod schema is the single source of truth** for a form.
It drives the TypeScript type, validation rules, default values, and error messages.
Code the schema before writing any JSX.

```
zod schema
    → z.infer<typeof schema>   (TypeScript type — no separate interface)
    → zodResolver(schema)      (validation — no manual validation functions)
    → defaultValues            (matches schema shape exactly)
    → formState.errors         (field-level messages from schema)
```

---

## Standard Form Pattern

```tsx
'use client'; // required in Next.js App Router
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// 1. Define schema
const createUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  role: z.enum(['admin', 'member']).default('member'),
});

// 2. Derive type
type CreateUserValues = z.infer<typeof createUserSchema>;

// 3. Use in component
export function CreateUserForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateUserValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { name: '', email: '', role: 'member' },
  });

  async function onSubmit(data: CreateUserValues) {
    await createUser(data);
    reset();
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <Button type="submit" isLoading={isSubmitting}>
        Create User
      </Button>
    </form>
  );
}
```

---

## Schema Patterns

### Optional and Nullable Fields

```ts
const schema = z.object({
  // Required string
  name: z.string().min(1, 'Required'),

  // Optional — may be undefined
  phone: z.string().optional(),

  // Accepts empty string OR undefined
  notes: z.string().optional().or(z.literal('')),

  // Optional with default
  locale: z.string().default('en'),

  // Nullable — value may be null (from API)
  deletedAt: z.string().nullable(),
});
```

### Enums

```ts
const roleSchema = z.enum(['admin', 'member', 'viewer']);
type Role = z.infer<typeof roleSchema>; // 'admin' | 'member' | 'viewer'
```

### Conditional Validation

```ts
const paymentSchema = z
  .object({
    method: z.enum(['card', 'bank']),
    cardNumber: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.method === 'card' && !data.cardNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['cardNumber'],
        message: 'Card number is required for card payments',
      });
    }
  });
```

### Array of Objects

```ts
const benefitsSchema = z.object({
  tags: z.array(z.string()).min(1, 'At least one tag required'),
  benefits: z
    .array(
      z.object({
        title: z.string().min(1, 'Title required'),
        description: z.string(),
      }),
    )
    .min(1),
});
```

### Async Validation (e.g. uniqueness check)

```ts
const usernameSchema = z.object({
  username: z
    .string()
    .min(3)
    .refine(async (val) => !(await checkUsernameTaken(val)), 'Username is already taken'),
});
```

### Cross-Field Refinements

```ts
const passwordSchema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
```

---

## Controller — Custom Components from @repo/ui

Use `register()` for native HTML inputs. Use `Controller` for custom UI components
that don't forward a standard `ref`.

```tsx
import { Controller } from 'react-hook-form';

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@repo/ui';

<Controller
  name="status"
  control={control}
  render={({ field, fieldState }) => (
    <div>
      <Select value={field.value} onValueChange={field.onChange}>
        <SelectTrigger
          aria-invalid={Boolean(fieldState.error)}
          aria-describedby={fieldState.error ? 'status-error' : undefined}
        >
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      {fieldState.error && (
        <p id="status-error" role="alert" className="text-sm text-destructive">
          {fieldState.error.message}
        </p>
      )}
    </div>
  )}
/>;
```

**Decision rule:**

| Input type                                        | API                            |
| ------------------------------------------------- | ------------------------------ |
| `<input>`, `<textarea>`, `<select>` (native HTML) | `register()`                   |
| Custom component from `@repo/ui`                  | `Controller`                   |
| Radix UI components                               | `Controller`                   |
| File inputs                                       | `register()` + `watch('file')` |

---

## useFieldArray — Dynamic Lists

```tsx
import { useFieldArray } from 'react-hook-form';

const { fields, append, remove, move, replace } = useFieldArray({
  control,
  name: 'benefits',
});

return (
  <div>
    {fields.map((field, index) => (
      <div key={field.id}>
        {' '}
        {/* ALWAYS use field.id, never index */}
        <input {...register(`benefits.${index}.title`)} aria-label={`Benefit ${index + 1} title`} />
        {errors.benefits?.[index]?.title && (
          <p role="alert">{errors.benefits[index].title.message}</p>
        )}
        <Button type="button" onClick={() => remove(index)}>
          Remove
        </Button>
      </div>
    ))}
    <Button type="button" onClick={() => append({ title: '', description: '' })}>
      Add Benefit
    </Button>
  </div>
);
```

---

## Form + Mutation Integration (TanStack Query)

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function EditPolicyForm({ policyId }: { policyId: string }) {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PolicyValues>({
    resolver: zodResolver(policySchema),
  });

  const updatePolicy = useMutation({
    mutationFn: (data: PolicyValues) => updatePolicyApi(policyId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['policies'] });
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => updatePolicy.mutate(data))}>
      {/* fields */}

      {updatePolicy.isError && (
        <Alert variant="destructive" role="alert">
          {updatePolicy.error.message}
        </Alert>
      )}

      <Button type="submit" isLoading={updatePolicy.isPending}>
        Save Changes
      </Button>
    </form>
  );
}
```

---

## Accessible Error Display

Every error message must be:

1. **Linked** to its input via `aria-describedby`
2. **Flagged** on the input via `aria-invalid`
3. **Announced** with `role="alert"`

```tsx
// Template — apply this pattern for every field
const fieldId = 'email';
const errorId = 'email-error';

<div>
  <label htmlFor={fieldId}>Email</label>
  <input
    id={fieldId}
    type="email"
    {...register('email')}
    aria-invalid={Boolean(errors.email)}
    aria-describedby={errors.email ? errorId : undefined}
  />
  {errors.email && (
    <p id={errorId} role="alert" className="text-sm text-destructive mt-1">
      {errors.email.message}
    </p>
  )}
</div>;
```

**Show errors only after touch (better UX):**

```tsx
{
  errors.email && touchedFields.email && (
    <p id="email-error" role="alert">
      {errors.email.message}
    </p>
  );
}
```

---

## formState Reference

```ts
const {
  formState: {
    errors, // validation errors per field
    isSubmitting, // true while onSubmit promise resolves
    isDirty, // true if any field differs from defaultValues
    isValid, // true when no validation errors
    touchedFields, // which fields the user interacted with
    dirtyFields, // which fields changed from defaultValues
    isSubmitSuccessful, // true after successful submission
  },
} = useForm();
```

**Disable submit until valid:**

```tsx
<Button type="submit" isLoading={isSubmitting} disabled={!isValid || isSubmitting}>
  Submit
</Button>
```

---

## Multi-Step Forms

```tsx
const STEPS = ['personal', 'address', 'review'] as const;
type Step = (typeof STEPS)[number];

const personalSchema = z.object({ name: z.string().min(1), email: z.string().email() });
const addressSchema = z.object({ city: z.string().min(1), zip: z.string().length(5) });
const fullSchema = personalSchema.merge(addressSchema);

export function MultiStepForm() {
  const [step, setStep] = useState<Step>('personal');

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(fullSchema),
    defaultValues: { name: '', email: '', city: '', zip: '' },
    mode: 'onTouched',
  });

  const handleNext = async () => {
    const fields = step === 'personal' ? ['name', 'email'] : ['city', 'zip'];
    const valid = await trigger(fields as any);
    if (valid) setStep(STEPS[STEPS.indexOf(step) + 1]);
  };

  async function onSubmit(data: z.infer<typeof fullSchema>) {
    await submitForm(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 'personal' && <PersonalStep register={register} errors={errors} />}
      {step === 'address' && <AddressStep register={register} errors={errors} />}
      {step === 'review' && <ReviewStep values={getValues()} />}

      {step !== 'review' ? (
        <Button type="button" onClick={handleNext}>
          Next
        </Button>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </form>
  );
}
```

---

## Performance

```tsx
// Re-initialize form when server data loads
const { data: policy } = usePolicy(policyId);

const form = useForm<PolicyValues>({
  resolver: zodResolver(policySchema),
  values: policy, // preferred over reset(data) in useEffect
});
```

```tsx
// Watch a single field without re-rendering the whole form
const paymentMethod = form.watch('paymentMethod');
```

```tsx
// Avoid watching at component root — use a child component + useFormContext
function ConditionalField() {
  const method = useWatch({ control, name: 'paymentMethod' });
  return method === 'card' ? <CardFields /> : null;
}
```

---

## File Organization

```
src/
  components/
    forms/
      CreateUserForm/
        CreateUserForm.tsx          # form component
        CreateUserForm.schema.ts    # zod schema + FormValues type
        CreateUserForm.test.tsx     # user interaction tests
        index.ts
```

Schema co-location rule: one `.schema.ts` file per form or form group.
Never define the zod schema inline inside the component file — keep it importable.

---

## Anti-Patterns

| ❌ Wrong                                           | ✅ Correct                                |
| -------------------------------------------------- | ----------------------------------------- |
| Inline Yup / manual validation                     | Zod schema + `zodResolver`                |
| `useState` for input values                        | `register` + `useForm`                    |
| `index` as key in `useFieldArray`                  | `field.id` as key                         |
| No `aria-describedby` linking error to input       | Always link error `id`                    |
| `isLoading` state manually tracking submit         | `isSubmitting` from `formState`           |
| Zod schema inline in component                     | Separate `.schema.ts` file                |
| `reset(data)` in `useEffect` on load               | `values: data` prop on `useForm`          |
| `form.watch()` at root for conditional fields      | `useWatch` in child component             |
| `any` on `trigger(fields)` (unavoidable sometimes) | Type-safe field path array where possible |
