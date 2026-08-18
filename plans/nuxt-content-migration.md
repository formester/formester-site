# Nuxt Content migration — phased roadmap

`formester-site-v2` is a fork of `formester-site` (FMST-2620) that replaces Strapi
(`formester-cms`) with `@nuxt/content` v3 for content that doesn't need to
change often, so it can be edited directly in git (by a human or an AI agent)
without maintaining a second CMS repo/database.

## Phase 0 — this repo, as it stands today

- **Migrated to Nuxt Content:** home page, all published `pages` (generic
  marketing pages, including `integrations/*` — those are not a separate
  content type, just `page` rows with a `integrations/` slug prefix), all
  published `features`.
- **Still on Strapi (coexistence, not removed):** blog, templates, the
  comparison-tool's form-builder data, and the preview/draft-token flow.
  `STRAPI_URL` / `axios` stay in `package.json` for these.
- **Content shape:** `content/home.json`, `content/pages/**/*.json`,
  `content/features/**/*.json` — each `{ slug, head, jsonld, components[] }`,
  produced by `scripts/migrate-from-strapi.mjs` (a one-off script, safe to
  delete once nobody needs to re-run it against the old CMS).
- **Home page source, corrected:** the home page is NOT the separate
  `home-page` Strapi singleton (that one is stale — last edited 2025-06-26,
  and the live site never actually reads it). It's the `pages` collection
  entry with no slug, exactly like `utils/getAllPages.js`'s `map.__home__`
  handling. An earlier version of the migration script wrongly pulled from
  `/api/home-page` and produced a stale `home.json`; fixed in
  `migratePagesAndHome()`.
- **This is a one-time snapshot, not a live sync.** `content/*.json` reflects
  the CMS at whatever moment `migrate-from-strapi.mjs` last ran. Re-run it to
  pull fresh edits from Strapi before decommissioning Phase 3.
- **Component schema:** one permissive block shape in `content.config.ts`
  (`{ __component: string, ...anything }`) covering all 35+ macro/micro
  types — not yet strict per-type. See Phase 4.
- **`micro-components.raw-html` is legacy by convention, not by code.** It
  still renders exactly as before via `components/strapi/RawHtml.vue`. New
  page sections should reuse an existing macro component, or add a new named
  one (registered in `constants/componentMapping.js`), instead of another
  raw-html blob. No lint/enforcement yet.

## Phase 1 — blog

- Convert `blogs` (CKEditor HTML `body` field) to a markdown collection.
- Adapt the existing `formester-site/.claude/skills/blog-post` conventions
  (`tldr`/`note`/`steps`/`rank`/`proscons`/`table-wrap`/`cta`/`faq` HTML
  blocks) to whatever authoring format this repo settles on for posts.
- Retire `pages/blog/*`'s Strapi fetch once migrated.

## Phase 2 — templates & comparison tool

- Migrate `pdf-template` / `recommended-template` data and the
  `form-builder` / `form-builder-feature` collections used by
  `pages/comparison-tool.vue`.
- Retire `pages/templates/*`'s Strapi fetch and `getTemplatesAndCategories.js`.

## Phase 3 — decommission `formester-cms`

- Only once Phases 1-2 are done and nothing reads from Strapi anymore.
- Remove `axios`, `STRAPI_URL`, `utils/fetchWithRetry.js`, the `preview.vue`/
  `template-preview.vue` draft-token flow (replaced by git branch/PR previews).
- Retire the `formester-cms` repo and its database.

## Phase 4 — schema hardening

- Replace the permissive `block` schema in `content.config.ts` with a
  discriminated union of strict per-component Zod schemas (one per
  `__component` value), so bad content fails validation at build time
  instead of shipping.
- Stop hand-authoring `jsonld` per page; derive it from `nuxt-schema-org`
  (already a dependency) plus the page's own structured fields (FAQ list,
  pricing offers), instead of storing a full hand-built JSON-LD blob.

## Phase 5 — raw-html reduction

- Inventory every `micro-components.raw-html` block across `content/pages`
  and `content/features` (there are dozens today — e.g. 11 of
  `ai-form-generator`'s 17 blocks are raw-html).
- Track that count trending toward zero as sections get rebuilt as real,
  reusable macro components rather than one-off HTML/CSS pastes.

## Editing & media (once this repo is live)

- **Nuxt Studio** (studio.nuxt.com) is the intended non-technical editing UI —
  GitHub-connected, edits become commits, no CLI required.
- **Media uploads** go through Studio's external S3-compatible storage
  (NuxtHub Blob Storage → AWS S3), pointed at the same bucket Strapi already
  uses (`@strapi/provider-upload-aws-s3`) — not committed to git.
- Wiring an actual Studio project + connecting the bucket is a config step,
  not code, and can happen independently of the phases above.
