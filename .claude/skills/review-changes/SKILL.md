---
name: review-changes
description: Review pending/uncommitted changes (or a given diff range) in the Formester Nuxt Content site for regressions before they ship. There is no CI, lint, or test suite in this repo, so this review is the only safety net. Use when asked to review changes, check a diff, check before committing/pushing, or "does this look safe to merge". Checks against this repo's documented conventions and its known real bug classes, not generic style nitpicks.
---

# Review changes (regression check)

This repo has **no CI, no ESLint config, no test suite, and no typecheck script** — `npm run
build`/`npm run generate` succeeding and a careful manual review are the only gates before code
ships. Treat this review as that gate, not a style pass.

## Scope the diff

- Default base: `origin/master` (the actual default branch — not `main`). Use
  `git diff origin/master...HEAD` for a branch review, or `git diff`/`git status` for uncommitted
  working-tree changes when nothing else is specified.
- If there's a mix of intentional changes and unrelated local scratch/tooling work (e.g. this
  repo has had stray `pages/__TOOLS__/`, `server/api/__tools__/` type local-only additions),
  confirm with the user what's actually in scope rather than reviewing everything in the tree.

## Known bug classes to specifically check for

These are real bugs this repo has hit before (`plans/session-handoff.md`), not hypothetical:

1. **Bare `z.any()` on nested content schema fields.** In any diff touching `content.config.ts`
   or `content/schemas/*.ts`: a bare `z.any()` for an object/array field gets naively
   `.toString()`'d into the SQLite column and comes back as the literal string `"[object
   Object]"` at runtime. Every nested object/array field must be `z.object({}).catchall(z.any())`
   (the `anyObject` helper in `content/schemas/shared.ts`) or a properly typed/`.passthrough()`
   shape — flag any bare `z.any()` used for something that isn't a true scalar.
2. **Home page source.** Home page data comes from the `pages` collection entry with **no
   slug** — not a separate singleton/endpoint. Flag any reintroduction of a separate
   `/api/home-page`-style fetch or a distinct "home" data source outside `content/home.json`.
3. **Blog `rawbody` field.** Flag any hand-written `rawbody:` in blog frontmatter (it's a
   reserved, auto-populated field — see the `blog-content` skill) and any blog collection query
   that reads the parsed `body` field instead of `rawbody`/the `getAllBlogs.js` remap.
4. **Blog frontmatter/schema drift.** For any new/edited `content/blog/*.md`: filename slug must
   match the frontmatter `slug`; required fields (`slug`, `title`, `coverImg`) must be present;
   object/array fields must be inline JSON (matching every existing post), not nested YAML — a
   nested-YAML object field will likely still parse but silently diverges from every other post's
   format and from the converter script's convention.

## Convention checks (this repo's `CLAUDE.md`)

- **Composition API only.** Flag any *new* component/page using `export default {}` Options API.
  (`components/UI/FButton.vue` is a known pre-existing exception — don't flag untouched
  pre-existing files, only new violations or files being substantially rewritten.)
- **No inline `<svg>`** in component/page templates — must be a `components/icons/Icon*.vue`.
- **CTA/action buttons** must use `components/UI/FButton.vue` with a real variant
  (`primary/secondary/ghost/white/text/violet-outline/violet-text`) and size (`sm/md/lg`), not a
  raw `<button>`/`<a class="btn">`.
- **No Tailwind classes** — not installed in this repo; styling is CSS custom properties
  (`assets/css/design-tokens.css`) + Bootstrap 5 utilities + scoped `<style>`. Flag any Tailwind
  utility class as either a leftover from a copy-paste or a sign the diff assumes tooling that
  isn't there.
- **No new dynamic-CMS-page wiring.** Flag any new/edited code that adds entries to
  `constants/componentMapping.js` or extends `pages/[...slug].vue` — that path is being removed;
  new pages should be real files under `pages/` per the `page-builder` skill.
- **SEO block present.** A new static page missing a `useHead()` SEO block (canonical + OG +
  Twitter meta) is a regression relative to every existing page's pattern, not just a style gap —
  it means the page ships with no/wrong social previews and search metadata.

## What to actually run

- `npm run build` or `npm run generate` is the closest thing to CI here — if the diff is
  non-trivial, ask the user to run it (don't run heavy build/generate commands yourself) and
  report/interpret any failures rather than assuming success.
- There's no lint script to run. Don't invent one or suggest `eslint .` — no config exists, it
  would just error.
- Formatting: `npm run format:pages` only covers `pages/**/*.vue`; a diff touching
  `components/`/`content/` won't get auto-formatted — check manually against `.prettierrc`
  (`semi: false, singleQuote: true, printWidth: 120`).

## Output

Report findings grouped by severity:
- **Breaks the build/runtime** (schema bugs, missing required fields, wrong imports/paths) —
  must-fix.
- **Contradicts a documented or established convention** (Options API, inline SVG, non-FButton
  CTA, componentMapping reintroduction, Tailwind) — should-fix, explain why it's a convention
  here (cite CLAUDE.md or the relevant plan doc) not just "style".
- **Worth confirming with the user** (ambiguous scope, a data source change with no obvious
  regression test, a stale doc reference) — flag, don't silently fix.

Don't flag pre-existing violations in files the diff doesn't touch — this repo has known
inconsistencies (e.g. `FButton.vue`'s own Options API), and re-litigating unrelated legacy code
on every review adds noise instead of catching regressions.
