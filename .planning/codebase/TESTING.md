# Testing Patterns

**Analysis Date:** 2026-06-29

## Test Framework

**Runner:**
- Not detected.
- Config: No `jest.config.*`, `vitest.config.*`, `playwright.config.*`, or `cypress.config.*` files are present at the repository root.

**Assertion Library:**
- Not detected.

**Run Commands:**
```bash
Not configured          # Run all tests
Not configured          # Watch mode
Not configured          # Coverage
```

## Test File Organization

**Location:**
- No co-located or dedicated test directories are detected. A repository-wide search finds no `*.test.*` or `*.spec.*` files.

**Naming:**
- Not applicable in the current repository state.

**Structure:**
```
No test directory structure detected.
```

## Test Structure

**Suite Organization:**
```typescript
// No describe()/it()/test() suites are present in `src/` or the repository root.
```

**Patterns:**
- Setup pattern: Not detected.
- Teardown pattern: Not detected.
- Assertion pattern: Not detected.

## Mocking

**Framework:** Not detected

**Patterns:**
```typescript
// No mock factories, spies, or module mocks are present.
```

**What to Mock:**
- No repository pattern is established.

**What NOT to Mock:**
- No repository pattern is established.

## Fixtures and Factories

**Test Data:**
```typescript
// No fixtures, builders, or factories are present.
```

**Location:**
- No fixture directories are detected.

## Coverage

**Requirements:** None enforced

**View Coverage:**
```bash
Not configured
```

## Test Types

**Unit Tests:**
- Not used. There are no unit test files for `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/app/layout.tsx`, or `src/app/(main)/page.tsx`.

**Integration Tests:**
- Not used. No integration harness, API test setup, or rendered app interaction tests are detected.

**E2E Tests:**
- Not used. No Playwright or Cypress configuration is present.

## Common Patterns

**Async Testing:**
```typescript
// No async test pattern is established.
```

**Error Testing:**
```typescript
// No error-path test pattern is established.
```

## Existing Quality Signals Without Tests

- Static analysis is the only enforced quality gate detected through the `lint` script in `package.json:5-10`.
- Type safety is enforced via `strict: true` in `tsconfig.json:11` and Next.js TypeScript integration in `tsconfig.json:20-24`.
- Framework lint rules come from `eslint.config.mjs:5-16`, which currently provide the main automated feedback loop.

## Practical Guidance for Adding Tests

- Introduce a test runner before adding new test files; no project convention exists yet, so a new phase must define commands, config, and environment setup.
- Favor co-located tests beside the files they verify to keep this small App Router structure navigable, for example `src/components/layout/Header.test.tsx` for `src/components/layout/Header.tsx` and `src/app/(main)/page.test.tsx` for `src/app/(main)/page.tsx`.
- Prioritize interaction-heavy code first: `src/app/(main)/page.tsx` contains `useEffect`, `IntersectionObserver` setup, conditional animation classes, and repeated button/image sections that are the most regression-prone.
- Add rendering and navigation tests for `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx` because both modules branch on `usePathname()` and render different link sets based on the current route.
- Add accessibility assertions for `alt`, `aria-label`, and active-link behavior because these attributes are used consistently in `src/app/(main)/page.tsx`, `src/components/layout/Header.tsx`, and `src/components/layout/Footer.tsx`.

---

*Testing analysis: 2026-06-29*
