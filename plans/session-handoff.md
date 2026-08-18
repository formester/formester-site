# Session handoff — Nuxt Content v3 migration (FMST-2620)

Context dump for resuming after a `/compact` or new session. Read this first,
then `plans/nuxt-content-migration.md` for the phased roadmap.

## Where things live

- **Real migration work**: `/home/abhay/FMST/formester-site-nuxt-content`
  — a git **worktree** of `formester-site`, branch `FMST-2620-nuxt-content-migration`,
  based off `origin/master`. NOT a separate repo (an earlier standalone repo
  `formester-site-v2` was created, then deliberately deleted once this
  worktree replaced it — don't recreate it).
- **Original site untouched**: `/home/abhay/FMST/formester-site` (its own
  worktree, on branch `fix-monday-app-association-json`, unaffected).
- **Old CMS**: `/home/abhay/FMST/formester-cms` (Strapi). Still live at
  `https://cms.formester.com`, public read API, no auth needed for GET.
- **Restored prod DB dump** (Postgres, for reference/inspection only — the
  actual migration script uses the live API instead, see below):
  local db `formester_cms_dump`, role `formester_local` / password
  `localdev`, via `psql -U formester_local -d formester_cms_dump -h 127.0.0.1`.
- **Demo project** (Nuxt Studio + Content v3, to show the editor UX):
  `/home/abhay/FMST/formester-site-nuxt-content/tmp/studio-demo`
  (gitignored, not committed). Dev server was run on port 3099.

## What's committed on the migration branch (commit `c18fd9db`)

Phase 0 of the plan (see `plans/nuxt-content-migration.md`): home page,
generic `pages` (incl. `integrations/*` — same content type, just a slug
prefix, NOT a separate collection), and `features` are migrated off Strapi
to `@nuxt/content` v3. Blog, templates, and comparison-tool intentionally
still read from Strapi (coexistence) — excluded from prerendering for now.

Key files:
- `content.config.ts` — collections `home`, `pages`, `features`. Schema is
  currently **permissive**: `z.object({__component: z.string()}).catchall(z.any())`
  for each block. This is Phase 0; Phase 4 (not started) replaces it with a
  strict schema per component type.
- `content/home.json`, `content/pages/**/*.json`, `content/features/**/*.json`
  — 96 pages + 43 features + home, JSON not YAML (deliberate choice — Node
  has no built-in YAML parser; user confirmed JSON is fine for now).
- `scripts/migrate-from-strapi.mjs` — one-off, re-runnable script that pulls
  from the **live Strapi API** (`populate=deep`, public, no auth) and writes
  the `content/*.json` files. Re-run this to pull fresh CMS edits (content
  files are a snapshot, not live-synced).
- `utils/getAllPages.js`, `utils/getAllFeatures.js` — same exported function
  names/shapes as the original Strapi-backed versions (`getPageBySlug`,
  `getFeatureBySlug`, `getHomePage`, `getAllPages`, `getAllFeatures`), now
  backed by `queryCollection()` instead of `axios`/Strapi fetches. Zero
  changes needed in `pages/index.vue`, `pages/[...slug].vue`,
  `pages/features/[slug].vue`.
- `utils/getRoutes.js` — `getPageRoutes()`/`getFeatureRoutes()` read
  `content/**/*.json` **directly off disk** (not via `queryCollection`) —
  `queryCollection` is unreliable inside the `nitro.hooks['prerender:routes']`
  build hook (see nuxt/content#3586). `getRoutes()` (blog) and
  `getTemplateRoutes()` are untouched, still Strapi-backed.
- `nuxt.config.js` — `@nuxt/content` bumped to v3; `@nuxtjs/sitemap` module
  moved **before** `@nuxt/content` in the `modules` array (required order,
  nuxt/content#3402); `nitro.prerender.ignore` now includes `/blog`,
  `/templates`, `/comparison-tool` (excluded from generation per user
  request — still coexist, just not prerendered in this phase).
- `package.json` — bumped together as a set (they're all from the same
  "Nuxt SEO" module family and must move in lockstep):
  `@nuxt/content@^3.7.1`, `@nuxtjs/sitemap@^8.3.4`, `@nuxtjs/robots@^6.1.5`,
  `nuxt-site-config@^4.2.3`, `nuxt-schema-org@latest`. Also added
  `better-sqlite3` (required by Content v3).
- Unrelated pre-existing bug fixed along the way: `var(--neutral #404040)`
  (missing comma) in `components/ProcessSteps.vue`,
  `components/create-form-in-three-steps.vue`,
  `components/plugins/wordpress/WordpressSteps.vue` — surfaced by a
  stricter CSS minifier after the dependency bumps.

## Bugs found and fixed during this work (important — don't reintroduce)

1. **`head`/`jsonld` stringification bug**: a bare `z.any()` field in
   Nuxt Content v3's schema gets naively `toString()`'d into the SQLite
   column (comes back as literal `"[object Object]"`). Fix: always wrap
   nested object/array fields as `z.object({}).catchall(z.any())` (or a
   proper typed object), never bare `z.any()`. This is why `content.config.ts`
   has `anyObject = z.object({}).catchall(z.any())` instead of `z.any()`.
2. **Home page source bug**: home is NOT the separate Strapi `home-page`
   singleton (`/api/home-page` — that one is stale, last edited 2025-06-26,
   and the live site never reads it). It's the `pages` collection entry
   with **no slug** (id 800 in prod, last edited 2026-05-20), exactly like
   `utils/getAllPages.js`'s original `map.__home__` handling. The migration
   script's `migratePagesAndHome()` handles this correctly now — don't
   reintroduce a separate `/api/home-page` call.
3. Verified via full `nuxt generate` (both the 3171-route full-site run and
   the 320-route trimmed run) that titles/JSON-LD render correctly on
   migrated pages, and blog/templates coexistence works when not excluded.

## Nuxt Studio research (confirmed via official docs + GitHub source, not guessed)

- **Studio is a separate, self-hosted, open-source module** (`nuxt-studio`
  npm package, `nuxt-content/nuxt-studio` on GitHub) — NOT a hosted SaaS
  (that model was sunset in early 2026). It runs *inside* your own Nuxt app,
  both in dev and prod. No separate CMS server to host.
- **Nuxt Content vs Nuxt Studio**: Content = data/query/render layer only,
  no editing UI. Studio = the editing layer on top, reads the same
  `content.config.ts` schema to auto-generate forms. Studio is optional —
  only needed if non-technical humans (not just Claude/devs) need a UI.
- **Local workflow**: `nuxt dev` → floating edit button bottom-left → edits
  write straight to local `content/*.json` in real time → you `git commit`/
  `push` yourself, no auto-publish step.
- **Production workflow**: editor edits on the live deployed site, drafts
  held in browser IndexedDB until "publish," which commits directly to
  GitHub via the GitHub API → triggers your existing Amplify/Netlify CI/CD.
- **Media/images — confirmed exact mechanics**:
  - Default: uploads land in `/public`, committed to git on publish.
  - External S3: install `@nuxthub/core`, `hub: { blob: true }`,
    `studio: { media: { external: true } }` (must load **before**
    `nuxt-studio` in `modules`), set `S3_ACCESS_KEY_ID`/`S3_SECRET_ACCESS_KEY`/
    `S3_BUCKET`/`S3_ENDPOINT` env vars, install `aws4fetch`. Files go
    straight to the bucket, **not** committed to git — only the URL string
    is stored in the content file.
  - At build/render time, that URL is just a plain string in the JSON —
    Nuxt does NOT download/inline it into the static build. It renders as
    `<img src="https://bucket.../file.png">`, fetched by the browser at
    runtime. **This is identical to how Strapi's S3 upload provider already
    works today** — no change in image-serving behavior from migrating.
  - For a JSON *field* (not markdown body) to show an image picker in
    Studio's form, the schema must use
    `property(z.string()).editor({ input: 'media' })` (import `property`
    from `@nuxt/content`) — a plain `z.string()` just shows a text box.
    This only matters once Phase 4 gives components real per-field schemas.
- User had been clicking around the demo (`studio-demo`) themselves —
  uploaded a screenshot via the Media tab (landed in `/public` as expected,
  default storage), and tried adding an `{"__component": "image"}` block via
  the editor that doesn't exist in the demo's schema (only `hero-v2` and
  `faqs` are defined) — inert/won't render, not a bug, just an unmodeled type.

## Demo project details (`tmp/studio-demo`)

Fresh Nuxt project (`nuxi init --template content`), NOT related to the real
site's component library — just two toy component schemas (`hero-v2`,
`faqs`) with strict Zod schemas, one content file
(`content/pages/ai-form-generator.json`), `nuxt-studio` wired in. Built to
demonstrate what Phase 4 (schema hardening) unlocks for Studio's visual
editor. Purely a teaching aid — not part of the real migration deliverable.

## Explicitly NOT done yet

- **Phase 4 (schema hardening)**: still using the permissive `catchall(z.any())`
  block schema on the real migration branch. Real per-component strict
  schemas for the ~35 macro/micro types have NOT been written yet.
- **Phase 5 (raw-html reduction)**: no inventory done yet, no components
  converted.
- Nothing has been pushed to `origin` — everything is local-only on the
  `FMST-2620-nuxt-content-migration` branch.
- User has NOT yet decided whether to reprioritize Studio wiring ahead of
  Phase 4/5, or do Phase 4/5 first as originally planned. Last thing asked:
  "we can move back to the main site stuff... Phase 4 and 5" — i.e. resume
  real migration work next, likely starting with Phase 4 schema hardening on
  the actual `content.config.ts` (not the demo's toy version).

## Suggested next step

Start Phase 4: pick the highest-usage component types first (from the
earlier count: `micro-components.raw-html` 596 uses in pages, then
`macro-components.page-meta` — already absorbed into `head`/`jsonld`,
`macro-components.faqs`, `macro-components.trust-seals`, `macro-components.testimonials`,
`macro-components.hero-v2`...) and write real Zod schemas for each,
replacing the permissive `block` in `content.config.ts`. Validate against
all 140 existing content files (they must all still pass schema validation
after tightening — any breakage there is exactly the point of Phase 4).
