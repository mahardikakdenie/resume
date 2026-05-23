---
name: react-query
version: 2.0.0
description: >
  TanStack Query (React Query) v5 patterns for this monorepo's colocated service
  architecture. Covers service layer structure, query/mutation hook authoring,
  query key conventions, cache management, error handling, and Next.js App Router
  integration.
tags: [react-query, tanstack-query, data-fetching, server-state, service-layer, next-js]
---

# React Query Skill

`@tanstack/react-query` v5 is this project's server-state management library.
This skill describes how TanStack Query integrates with the **colocated service architecture**
(`src/services/[domain]/`) and the shared infrastructure (`src/lib/`).

Read this before writing any query hook, mutation hook, or service layer code.

---

## Architecture Overview

The service layer follows a **colocated architecture** — everything for one domain in one place.

```
src/
├── lib/
│   ├── api-client/                  # Shared HTTP infrastructure
│   │   ├── client.ts                # Base Axios instance
│   │   ├── config.ts                # Base URLs from env vars
│   │   └── interceptors/
│   │       ├── auth.interceptor.ts  # Token injection
│   │       ├── error.interceptor.ts # Error normalization
│   │       └── logger.interceptor.ts
│   └── react-query/
│       ├── query-client.ts          # QueryClient singleton
│       ├── query-provider.tsx       # <QueryClientProvider> wrapper
│       └── devtools.tsx             # DevTools (dev only)
│
└── services/
    └── [domain]/                    # ONE directory per API base URL
        ├── api/
        │   ├── [domain].endpoints.ts  # URL constants
        │   ├── [domain].types.ts      # Request/response interfaces
        │   ├── [domain].validators.ts # Zod schemas (optional)
        │   └── [domain].service.ts    # API functions (axios calls)
        ├── hooks/
        │   ├── queries/
        │   │   ├── use[Domain].ts     # One file per GET endpoint
        │   │   ├── use[Domain]ById.ts
        │   │   └── index.ts           # Barrel
        │   └── mutations/
        │       ├── useCreate[Domain].ts
        │       ├── useUpdate[Domain].ts
        │       └── index.ts           # Barrel
        └── query-keys.ts              # Key factory for this domain
```

> [!IMPORTANT]
> **One service per API base URL.** If two features share the same base URL, they belong to
> the same service — not separate services. Service boundaries are defined by base URL, not
> by folder or feature name.

---

## Mental Model

```
Server state (API data)   →  TanStack Query hooks  →  React components
App state (UI toggles)    →  useState / useReducer →  React components
Cross-domain shared state →  React Context / URL   →  React components
```

**Never use TanStack Query for UI state.** `isMenuOpen`, `activeTab`, `selectedRows` → `useState`.

---

## Foundation Setup

### QueryClient (`src/lib/react-query/query-client.ts`)

```typescript
import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 1 min — tune per domain
      gcTime: 1000 * 60 * 5, // 5 min — keep in memory after unmount
      retry: 1, // retry once on network failure
      refetchOnWindowFocus: false, // turn off for admin apps with long sessions
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Only toast for background refetch failures, not initial loads
      if (query.state.data !== undefined) {
        console.error('[QueryCache] background sync failed:', error.message);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error('[MutationCache]', error.message);
    },
  }),
});
```

### Provider (`src/lib/react-query/query-provider.tsx`)

```typescript
'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```

### DevTools (`src/lib/react-query/devtools.tsx`)

```typescript
'use client';
import dynamic from 'next/dynamic';

const ReactQueryDevtools = dynamic(
  () => import('@tanstack/react-query-devtools').then(mod => mod.ReactQueryDevtools),
  { ssr: false },
);

export function Devtools() {
  if (process.env.NODE_ENV === 'production') return null;
  return <ReactQueryDevtools initialIsOpen={false} />;
}
```

---

## API Client (`src/lib/api-client/`)

### Base Client (`client.ts`)

```typescript
import axios, { type AxiosInstance } from 'axios';

export function createApiClient(options: { baseURL: string }): AxiosInstance {
  const client = axios.create({
    baseURL: options.baseURL,
    timeout: 30_000,
    headers: { 'Content-Type': 'application/json' },
  });

  // Register interceptors
  attachAuthInterceptor(client);
  attachErrorInterceptor(client);

  return client;
}
```

### Base URL Config (`config.ts`)

```typescript
export const API_BASE_URLS = {
  core: process.env.NEXT_PUBLIC_API_CORE_URL!,
  claims: process.env.NEXT_PUBLIC_API_CLAIMS_URL!,
  // Add one entry per API base URL
} as const;
```

### Error Interceptor (`interceptors/error.interceptor.ts`)

```typescript
import type { AxiosInstance, AxiosError } from 'axios';

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function attachErrorInterceptor(client: AxiosInstance) {
  client.interceptors.response.use(
    (res) => res.data, // Unwrap .data automatically
    (err: AxiosError<{ code: string; message: string }>) => {
      const status = err.response?.status ?? 0;
      const code = err.response?.data?.code ?? 'UNKNOWN_ERROR';
      const message = err.response?.data?.message ?? err.message;
      return Promise.reject(new ApiError(status, code, message));
    },
  );
}
```

---

## Query Keys

Query keys are the **cache address**. They must be hierarchical, serializable, and centralized.

### Key Factory Pattern (`src/services/[domain]/query-keys.ts`)

```typescript
// src/services/claims/query-keys.ts
import type { ClaimFilters } from './api/claims.types';

export const claimKeys = {
  // Level 1 — selects all claim-related cache entries
  all: ['claims'] as const,
  // Level 2 — query type
  lists: () => [...claimKeys.all, 'list'] as const,
  details: () => [...claimKeys.all, 'detail'] as const,
  // Level 3 — specific queries including their variables
  list: (filters: ClaimFilters) => [...claimKeys.lists(), filters] as const,
  detail: (id: string) => [...claimKeys.details(), id] as const,
  // Level 4 — nested resources
  history: (id: string) => [...claimKeys.detail(id), 'history'] as const,
  documents: (id: string) => [...claimKeys.detail(id), 'documents'] as const,
} as const;
```

### Why Hierarchical

```typescript
// Invalidate ALL claim queries (lists + details + everything)
queryClient.invalidateQueries({ queryKey: claimKeys.all });

// Invalidate only list queries (detail caches preserved)
queryClient.invalidateQueries({ queryKey: claimKeys.lists() });

// Invalidate specific filtered list
queryClient.invalidateQueries({ queryKey: claimKeys.list({ status: 'pending' }) });

// Invalidate a detail record and all its nested resources
queryClient.invalidateQueries({ queryKey: claimKeys.detail('claim-123') });
```

**Key rules:**

- Always `as const` — enables type inference
- Never build keys inline in components — use the factory
- Include all variables that affect the query result
- Only serializable values — no functions, Date objects, or class instances

---

## Query Hooks

### Canonical Query Hook Pattern

```typescript
// src/services/claims/hooks/queries/useClaims.ts
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { claimsService } from '../../api/claims.service';
import type { Claim, ClaimFilters } from '../../api/claims.types';
import { claimKeys } from '../../query-keys';

type ClaimsResult = Awaited<ReturnType<typeof claimsService.getClaims>>;

export function useClaims(
  filters: ClaimFilters = {},
  options?: Omit<UseQueryOptions<ClaimsResult, Error>, 'queryKey' | 'queryFn'>,
) {
  return useQuery({
    queryKey: claimKeys.list(filters),
    queryFn: () => claimsService.getClaims(filters),
    ...options,
  });
}
```

> [!IMPORTANT]
> **Always accept `options` and spread `...options` last.** This lets callers override
> `staleTime`, `enabled`, `select`, etc. without changing the hook signature.

### Conditional / Nullable ID

```typescript
export function useClaimById(
  id: string | undefined,
  options?: Omit<UseQueryOptions<Claim, Error>, 'queryKey' | 'queryFn'>,
) {
  return useQuery({
    queryKey: claimKeys.detail(id!),
    queryFn: () => claimsService.getClaimById(id!),
    enabled: Boolean(id), // ← guard required — never run with undefined id
    ...options,
  });
}
```

### Paginated Query

```typescript
import { keepPreviousData } from '@tanstack/react-query';

export function useClaimsPaginated(page: number, pageSize: number, filters: ClaimFilters = {}) {
  return useQuery({
    queryKey: [...claimKeys.list(filters), { page, pageSize }],
    queryFn: () => claimsService.getClaims({ ...filters, page, pageSize }),
    placeholderData: keepPreviousData, // keep old page visible while fetching next
  });
}
```

### Infinite / Load More

```typescript
import { useInfiniteQuery } from '@tanstack/react-query';

export function useClaimsInfinite(filters: ClaimFilters = {}) {
  return useInfiniteQuery({
    queryKey: [...claimKeys.lists(), 'infinite', filters],
    queryFn: ({ pageParam = 1 }) => claimsService.getClaims({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => (lastPage.hasMore ? allPages.length + 1 : undefined),
    initialPageParam: 1,
  });
}
```

### Select — Subscribe to Derived Data

```typescript
// Component only re-renders when status changes, even if other fields update
const status = useClaimById(id, {
  select: (claim) => claim.status,
});
```

### Polling

```typescript
export function useClaimStatus(id: string) {
  return useQuery({
    queryKey: claimKeys.detail(id),
    queryFn: () => claimsService.getClaimById(id),
    refetchInterval: 5_000, // every 5 s
    refetchIntervalInBackground: false, // pause when tab inactive
  });
}
```

### Prefetching

```typescript
export function usePrefetchClaim() {
  const queryClient = useQueryClient();
  return (id: string) =>
    queryClient.prefetchQuery({
      queryKey: claimKeys.detail(id),
      queryFn: () => claimsService.getClaimById(id),
      staleTime: 1000 * 60 * 5,
    });
}

// Usage: onMouseEnter={() => prefetchClaim(claim.id)}
```

---

## Mutation Hooks

### Canonical Mutation Hook Pattern

```typescript
// src/services/claims/hooks/mutations/useCreateClaim.ts
import { useMutation, useQueryClient, type UseMutationOptions } from '@tanstack/react-query';

import { claimsService } from '../../api/claims.service';
import type { Claim, CreateClaimRequest } from '../../api/claims.types';
import { claimKeys } from '../../query-keys';

type CreateResult = Awaited<ReturnType<typeof claimsService.createClaim>>;

export function useCreateClaim(
  options?: UseMutationOptions<CreateResult, Error, CreateClaimRequest>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: claimsService.createClaim,
    ...options,
    // Merged onSuccess: hook's invalidation + consumer's callback
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: claimKeys.lists() });
      options?.onSuccess?.(data, variables, context);
    },
  });
}
```

> [!IMPORTANT]
> When a hook adds `onSuccess` for cache invalidation, **always call `options?.onSuccess?.()`
> inside it**. Consumers must be able to chain their own callbacks.

### Mutation with Multiple Cache Updates

```typescript
export function useUpdateClaimStatus(
  options?: UseMutationOptions<Claim, Error, { id: string; status: ClaimStatus }>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }) => claimsService.updateClaimStatus(id, { status }),
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(claimKeys.detail(variables.id), data); // surgical update
      queryClient.invalidateQueries({ queryKey: claimKeys.lists() }); // refetch lists
      queryClient.invalidateQueries({ queryKey: claimKeys.stats() }); // refetch stats
      options?.onSuccess?.(data, variables, context);
    },
  });
}
```

### Optimistic Update

```typescript
export function useUpdateClaim(
  options?: UseMutationOptions<Claim, Error, { id: string; data: Partial<Claim> }>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => claimsService.updateClaim(id, data),
    ...options,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: claimKeys.detail(variables.id) });
      const previous = queryClient.getQueryData<Claim>(claimKeys.detail(variables.id));
      queryClient.setQueryData(claimKeys.detail(variables.id), (old: Claim | undefined) =>
        old ? { ...old, ...variables.data } : old,
      );
      return { previous };
    },
    onError: (err, variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(claimKeys.detail(variables.id), context.previous);
      }
      options?.onError?.(err, variables, context);
    },
    onSettled: (data, err, variables) => {
      queryClient.invalidateQueries({ queryKey: claimKeys.detail(variables.id) });
      options?.onSettled?.(data, err, variables, undefined);
    },
  });
}
```

### Delete Mutation

```typescript
export function useDeleteClaim(options?: UseMutationOptions<void, Error, string>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: claimsService.deleteClaim,
    ...options,
    onSuccess: (data, id, context) => {
      queryClient.removeQueries({ queryKey: claimKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: claimKeys.lists() });
      options?.onSuccess?.(data, id, context);
    },
  });
}
```

---

## Cache Invalidation Strategy

| Mutation type | Invalidate   | Direct update          | Reason                               |
| ------------- | ------------ | ---------------------- | ------------------------------------ |
| Create        | Lists        | —                      | New item affects all list views      |
| Update        | Lists, Stats | Detail (if returned)   | Item may move between filtered lists |
| Delete        | Lists        | `removeQueries` detail | Item gone from all lists             |
| Bulk update   | `all`        | —                      | Unknown which items affected         |
| Status change | Lists, Stats | Detail                 | Affects filtering and statistics     |

**Three invalidation modes:**

```typescript
// 1. Broad — safest, most refetches
queryClient.invalidateQueries({ queryKey: claimKeys.all });

// 2. Targeted — know exactly what changed
queryClient.invalidateQueries({ queryKey: claimKeys.lists() });

// 3. Surgical — server returned updated data, update cache directly
queryClient.setQueryData(claimKeys.detail(id), updatedClaim);
```

---

## Next.js App Router Integration

> [!IMPORTANT]
> Query hooks are **client-only**. Any component calling `useQuery` / `useMutation` must be
> inside a Client Component boundary (`'use client'`).

```
RSC (Server Component)         →  fetch() directly — no React Query
Client Component ('use client') →  useQuery / useMutation
```

### Server Prefetch + Client Hydration

```typescript
// app/claims/page.tsx — Server Component
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { ClaimList } from './_components/ClaimList';

export default async function ClaimsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: claimKeys.list({}),
    queryFn:  claimsService.getClaims,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClaimList />
    </HydrationBoundary>
  );
}
```

```typescript
// app/claims/_components/ClaimList.tsx — Client Component
'use client';
import { useClaims } from '@/services/claims/hooks/queries';

export function ClaimList() {
  const { data, isPending } = useClaims({});  // hydrated — no loading flash
  if (isPending) return <Skeleton />;
  return <ul>{data?.map(c => <li key={c.id}>{c.title}</li>)}</ul>;
}
```

---

## Service File Patterns

### Endpoints (`[domain].endpoints.ts`)

```typescript
export const CLAIMS_ENDPOINTS = {
  list: '/v1/claims',
  detail: (id: string) => `/v1/claims/${id}`,
  updateStatus: (id: string) => `/v1/claims/update-status/${id}`,
} as const;
```

### Service (`[domain].service.ts`)

```typescript
import { createApiClient, API_BASE_URLS } from '@/lib/api-client';

import { CLAIMS_ENDPOINTS } from './claims.endpoints';
import type { Claim, ClaimFilters, CreateClaimRequest } from './claims.types';

const claimsApi = createApiClient({ baseURL: API_BASE_URLS.claims });

export const claimsService = {
  getClaims: (filters: ClaimFilters) =>
    claimsApi.get<Claim[]>(CLAIMS_ENDPOINTS.list, { params: filters }),
  getClaimById: (id: string) => claimsApi.get<Claim>(CLAIMS_ENDPOINTS.detail(id)),
  createClaim: (data: CreateClaimRequest) => claimsApi.post<Claim>(CLAIMS_ENDPOINTS.list, data),
  updateStatus: (id: string, body: { status: ClaimStatus }) =>
    claimsApi.patch<Claim>(CLAIMS_ENDPOINTS.updateStatus(id), body),
  deleteClaim: (id: string) => claimsApi.delete<void>(CLAIMS_ENDPOINTS.detail(id)),
};
```

---

## Error Handling

### Per-Query Error UI

```typescript
const { isError, error } = useClaims();
if (isError) return <Alert variant="destructive">{error.message}</Alert>;
```

### Per-Mutation Error

```typescript
const createClaim = useCreateClaim();
if (createClaim.isError) return <Alert>{createClaim.error.message}</Alert>;
```

### Retry Config

```typescript
// Override at call site when needed
const { data } = useClaims(
  {},
  {
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30_000), // exponential backoff
  },
);
```

---

## Testing Hooks

```typescript
// useClaims.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useClaims } from './useClaims';
import { claimsService } from '../../api/claims.service';

vi.mock('../../api/claims.service');

const createWrapper = () => {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={qc}>{children}</QueryClientProvider>
  );
};

it('fetches claims', async () => {
  vi.mocked(claimsService.getClaims).mockResolvedValue([{ id: '1', status: 'pending' }]);
  const { result } = renderHook(() => useClaims({}), { wrapper: createWrapper() });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data).toHaveLength(1);
});
```

---

## Anti-Patterns

| ❌ Wrong                                                               | ✅ Correct                                                     |
| ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| Inline `axios.get` in `queryFn`                                        | Delegate to `[domain].service.ts`                              |
| Manual key string `['claims', id]`                                     | Key factory `claimKeys.detail(id)`                             |
| `useState` + `useEffect` for fetching                                  | `useQuery`                                                     |
| Missing `...options` spread                                            | Always spread `...options` last                                |
| Missing `options?.onSuccess?.()` in mutation                           | Always compose                                                 |
| Using `isLoading` (deprecated v5)                                      | Use `isPending`                                                |
| `useQuery` in Server Component                                         | Requires `'use client'` boundary                               |
| Invalidate with no `queryKey`                                          | Always scope invalidation                                      |
| Direct `useQuery`/`useMutation` in components when service hook exists | Import custom hook from `services/*/hooks/{queries,mutations}` |

---

## Checklist — New Service Hook

- [ ] Key factory defined in `[domain]/query-keys.ts`
- [ ] Service functions in `[domain]/api/[domain].service.ts`
- [ ] Query hooks in `[domain]/hooks/queries/` — one file per GET endpoint
- [ ] Mutation hooks in `[domain]/hooks/mutations/` — one file per write operation
- [ ] Barrel files: `hooks/queries/index.ts`, `hooks/mutations/index.ts`
- [ ] `options` accepted and spread in every hook
- [ ] Mutation `onSuccess` calls `options?.onSuccess?.()`
- [ ] `enabled` guard on any hook that accepts optional / nullable params
- [ ] Component is `'use client'` if inside Next.js App Router
