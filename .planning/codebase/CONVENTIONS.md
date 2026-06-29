# Coding Conventions

**Analysis Date:** 2026-06-29

## Naming Patterns

**Files:**
- Use PascalCase for React component files under `src/components/layout/`, such as `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx`.
- Use framework-reserved lowercase route filenames under `src/app/`, such as `src/app/layout.tsx` and `src/app/(main)/page.tsx`.
- Use lowercase global stylesheet names under `src/styles/`, such as `src/styles/globals.css`.

**Functions:**
- Use PascalCase for exported React function components, such as `RootLayout` in `src/app/layout.tsx`, `Main` in `src/app/(main)/page.tsx`, `Header` in `src/components/layout/Header.tsx`, and `Footer` in `src/components/layout/Footer.tsx`.
- Keep helper values in `const` bindings with camelCase names, such as `featuredProject`, `projectCards`, `transparentLinks`, and `policyLinks` in `src/app/(main)/page.tsx`, `src/components/layout/Header.tsx`, and `src/components/layout/Footer.tsx`.

**Variables:**
- Use camelCase for local state and refs, including boolean state prefixed with `is` and ref variables suffixed with `Ref`, as shown by `isApproachVisible`, `isContactVisible`, `aboutSectionRef`, and `contactSectionRef` in `src/app/(main)/page.tsx`.
- Use descriptive collection names for mapped UI data, such as `headingLines`, `descriptionLines`, `categoryTabs`, `footerLinks`, and `solidLinks` in `src/app/(main)/page.tsx`, `src/components/layout/Footer.tsx`, and `src/components/layout/Header.tsx`.

**Types:**
- Prefer inline framework types instead of separate custom interfaces where possible, such as `Metadata` in `src/app/layout.tsx` and `Readonly<{ children: React.ReactNode; }>` for layout props in `src/app/layout.tsx`.
- No project-local `interface` or `type` declarations are detected in `src/`.

## Code Style

**Formatting:**
- Follow the default formatting produced by ESLint-compatible tooling: 2-space indentation, semicolons, and double quotes, as seen consistently in `src/app/layout.tsx`, `src/app/(main)/page.tsx`, and `src/components/layout/Header.tsx`.
- Break long JSX props across multiple lines when a single line becomes dense, as shown by the `Image` blocks and multi-line `button` props in `src/app/(main)/page.tsx`.
- Keep simple JSX expressions inline when still readable, such as the `Link` in `src/components/layout/Footer.tsx:49` and the `metadata` object in `src/app/layout.tsx:33`.

**Linting:**
- Use the flat ESLint config in `eslint.config.mjs`.
- Rely on `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` from `eslint.config.mjs` for framework and TypeScript rules.
- Treat `.next/**`, `out/**`, `build/**`, and `next-env.d.ts` as ignored paths per `eslint.config.mjs:9-15`.
- No Prettier, Biome, or custom style config is detected at the repository root.

## Import Organization

**Order:**
1. Global styles first when required by the file, as in `src/app/layout.tsx:1`.
2. External framework imports next, including type-only imports first when applicable, as in `src/app/layout.tsx:2-3` and `src/app/(main)/page.tsx:3-4`.
3. Relative local imports last, as in `src/app/layout.tsx:4-5`.

**Path Aliases:**
- The alias `@/*` is configured in `tsconfig.json:25-29`.
- Current source files still prefer relative imports, such as `../components/layout/Footer` and `../components/layout/Header` in `src/app/layout.tsx:4-5`.

## Error Handling

**Patterns:**
- No explicit `try`/`catch`, `throw`, error boundaries, or shared error utilities are detected in `src/`.
- Use early returns to guard browser-only logic and missing DOM refs, as shown by `if (!node) { return; }` in each `useEffect` block in `src/app/(main)/page.tsx:17-19`, `39-41`, and `61-63`.
- Use cleanup returns from effects for resource disposal, as shown by `return () => observer.disconnect();` in `src/app/(main)/page.tsx:33`, `55`, and `77`.

## Logging

**Framework:** console not used in `src/`

**Patterns:**
- No application logging, analytics logging, or debug `console.*` calls are detected in `src/`.
- Preserve the current quiet UI style unless a new operational need introduces a dedicated logging layer.

## Comments

**When to Comment:**
- Comments are sparse and mostly used to label design-oriented blocks, such as the font-family labels `// 영문 — PP Neue Montreal` and `// 한글 — Pretendard` in `src/app/layout.tsx:7` and `20`.
- CSS comments in `src/styles/globals.css:4-34` group tokens and note unfinished token slots; use comments mainly for structure or domain context, not for obvious JSX behavior.

**JSDoc/TSDoc:**
- No JSDoc or TSDoc blocks are detected in `src/`.

## Function Design

**Size:**
- Shared layout components stay compact, such as `Header` in `src/components/layout/Header.tsx` and `Footer` in `src/components/layout/Footer.tsx`.
- Route-level page components can be large and section-driven, as shown by the single `Main` component in `src/app/(main)/page.tsx`.

**Parameters:**
- Prefer destructured props with inline typing for components that receive children or framework props, as in `RootLayout` in `src/app/layout.tsx:38-42`.
- Use no-argument function components when data is local to the file, as in `Header`, `Footer`, and `Main`.

**Return Values:**
- React components return JSX directly without intermediate render helpers.
- Effects return cleanup functions only when they allocate browser resources, such as `IntersectionObserver` instances in `src/app/(main)/page.tsx`.

## Module Design

**Exports:**
- Use one default export per component module, as in `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, and `src/app/(main)/page.tsx`.
- Use named exports for framework metadata declarations, as in `export const metadata` in `src/app/layout.tsx:33`.

**Barrel Files:**
- No barrel files are detected.

## Practical Guidance for Future Changes

- Put reusable UI in PascalCase component files under `src/components/` following the pattern in `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx`.
- Keep route-specific content, local arrays, and animation state inside the owning page file until reuse becomes clear, following `src/app/(main)/page.tsx`.
- Reuse the existing naming scheme for boolean state (`isXVisible`), DOM refs (`xRef`), and UI collections (`projectCards`, `footerLinks`).
- Keep accessibility attributes explicit on interactive and visual elements, matching `aria-label`, `aria-hidden`, and descriptive `alt` usage throughout `src/app/(main)/page.tsx` and `src/components/layout/Header.tsx`.

---

*Convention analysis: 2026-06-29*
