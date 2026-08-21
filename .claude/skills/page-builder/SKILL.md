---
name: page-builder
description: Create or edit a marketing page as a hand-authored `.vue` file under `pages/`, YAGNI-first — reuse existing components before writing new markup, and only create a new SFC when new reusable UI/logic is genuinely needed. Use when asked to add a new page/route, change an existing page's layout or copy, or add a section to a page. Do NOT use the legacy `pages/[...slug].vue` + `constants/componentMapping.js` dynamic-CMS pattern — that path is being phased out; every page should be a real file under `pages/`.
---

# Page building (hand-authored `.vue` pages)

Every page is a real file under `pages/` (Nuxt 4 file-based routing) that directly imports and
composes existing components — plain `<script setup>` Vue, not a CMS dynamic-zone block array.

**Important repo direction:** `pages/[...slug].vue` and `constants/componentMapping.js` are the
*old* Strapi-dynamic-zone rendering path and are being removed. Don't route new work through
them, don't add new entries to `componentMapping.js`, and don't model new pages after the
generic dynamic-zone renderer — model them after the static pages below instead.

## YAGNI workflow — reuse before you build

1. **Search before writing anything.** Before adding a new section to a page, look for an
   existing component that already does it:
   - `components/v2/` — the current landing-page block library (`HeroV2`, `CardGrid`,
     `AlternatingRows`, `CalloutDiagram`, `StatsBanner`, `ComparisonTable`, `FaqSection`,
     `SectionHeader`, `TestimonialWall`, `IntegrationsShowcase`, etc.)
   - `components/UI/` — atoms (`FButton`, `ArrowButton`, `IconArrowRight`, `SectionBadge`)
   - `components/blog/`, `components/pricing/`, `components/features/`, `components/home/`,
     `components/case-study/`, `components/template/`, `components/use-case/`,
     `components/comparision/`, `components/competitors/` — feature-specific blocks
   - `components/` top level — general-purpose (`Section`, `SectionTitle`,
     `CallToActionSection`, `Testimonial`, `Tutorial`, `MarkdownContent`)
   Grep for likely names/keywords across `components/**/*.vue` rather than guessing from memory.
2. **If an existing component fits (even with prop tweaks), use it.** Passing different props/
   slot content to `CardGrid` or `AlternatingRows` beats writing new markup.
3. **If nothing fits and the new UI is a one-off** (no styling/logic another page would plausibly
   reuse), write it inline in the page's own `<template>`/`<script setup>`/`<style scoped>` —
   don't manufacture a component for something used exactly once.
4. **If the new UI has its own non-trivial styling or logic that could plausibly recur** (a
   distinct visual block, a self-contained interactive widget), extract it as a new SFC in the
   most fitting `components/` subfolder — not directly in `pages/`. Match the folder to what the
   block *is* (a landing block → `components/v2/`, a pricing widget → `components/pricing/`),
   not where it's first used.
5. When truly unsure whether something will recur, default to inline in the page — it's cheap to
   extract a component later; it's not cheap to have speculative unused components lying around.

## Conventions (from `CLAUDE.md` + observed practice)

- **`<script setup>` only.** No `export default {}` Options API in *new* code — even though
  `components/UI/FButton.vue` itself is a pre-existing exception, don't copy that pattern.
- **Explicit `@/`-aliased imports**, even though Nuxt auto-imports components — this is the
  dominant pattern in real pages (`pages/pricing.vue`, `pages/about-us.vue`):
  ```js
  import SectionHeader from '@/components/v2/SectionHeader.vue'
  import FButton from '@/components/UI/FButton.vue'
  ```
- **Buttons:** always `<FButton variant="primary|secondary|ghost|white|text|violet-outline|
  violet-text" size="sm|md|lg">` for CTAs/actions — never a raw `<button>`/`<a class="btn">`.
- **Icons:** never inline `<svg>` in a page template. Reuse `components/icons/Icon*.vue`; if none
  fits, create `components/icons/Icon<Name>.vue` (`<script setup>`, `size` prop) — see CLAUDE.md's
  icon template.
- **Styling:** design-token CSS variables from `assets/css/design-tokens.css` (`var(--space-4)`,
  `var(--violet-500)`, `var(--r-full)`, etc.) plus Bootstrap 5 utility classes (`d-flex`, `row`,
  `gx-3`, `mt-5`) for layout. No Tailwind (not installed, despite being an idea floated in
  `plans/`) — don't introduce Tailwind classes. Component-specific styling goes in a `<style
  scoped>` block in the page or component, not a new global stylesheet.
- **SEO block.** Every static page sets `useHead()` directly — canonical link, `og:*`, `twitter:*`
  meta, each keyed with `hid` (see `pages/about-us.vue` for the full ~100-line template to copy
  and adapt) — plus `getSiteMeta()` (`utils/getSiteMeta.js`) where the page follows the simpler
  pattern seen in `pages/pricing.vue`. Don't skip this for a new page.
- **Formatting:** `npm run format:pages` runs Prettier (`semi: false, singleQuote: true,
  printWidth: 120`) over `pages/**/*.vue` — match that style even before running it (no
  semicolons, single quotes).

## Adding a new route

- File path under `pages/` determines the route (e.g. `pages/some-page.vue` → `/some-page`,
  `pages/features/foo.vue` → `/features/foo`). Match the existing flat-top-level convention for
  standalone marketing pages, or drop into the matching subfolder (`features/`, `case-study/`,
  `templates/`, `use-case/`) for pages that belong to one of those families.
- Static data a page needs but that isn't page-content per se (pricing tiers, feature lists)
  typically lives in `constants/*.js` (e.g. `constants/plan.js`) — check there before inlining a
  large data literal into the page.
- Don't create a corresponding `content/pages/*.json` entry — that's the old CMS-driven path this
  skill deliberately avoids.

## Checking your work

There's no lint/typecheck configured in this repo, so a build is the real check. Don't run
`npm run build`/`npm run generate` yourself (heavy, ask the user to run it) — but do sanity-check
by reading the component you're consuming (props/slots it actually accepts) before wiring it up,
so the page doesn't silently render blank/wrong props with no error.
