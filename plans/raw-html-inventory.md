# Phase 5 — `micro-components.raw-html` inventory

Snapshot taken against the 140 migrated content files (`content/home.json`,
`content/pages/**/*.json`, `content/features/**/*.json`) on
`FMST-2620-nuxt-content-migration` after Phase 4 (schema hardening).

## Headline numbers

- **550 raw-html blocks** out of 1,450 total component blocks in the corpus
  (**37.9%** of all blocks are raw-html).
- Spread across **52 of 140 files** (37%) — the rest have zero raw-html.
- This is the baseline to trend toward zero. Re-run the counting script below
  after each conversion batch to track progress.

## Shape of the 550 blocks (by content, not by page)

| Category | Count | % |
|---|---|---|
| Inline SVG graphics (icons/mockup art) | 308 | 56% |
| Visible prose content (headings/paragraphs/lists rendered as raw markup) | 181 | 33% |
| HTML `<table>` markup | 53 | 10% |
| `<script>` embeds (interactive widgets, one JSON-LD block) | 6 | 1% |
| Style-only / empty | 2 | <1% |

These aren't mutually exclusive in a strict sense (a block can contain a
`<style>` tag *and* prose) — categorized by dominant content for a rough
read on where the volume is.

## The real finding: two repeated bundle patterns, not 550 one-offs

The 550 blocks are not 550 independent pieces of content. They're
concentrated in two recurring hand-built page templates that never got
turned into real macro components:

### 1. Comparison/"vs"/"alternative" page template — 267 blocks (49%) across 16 pages

Every one of these pages has the *same* ~16-18 section structure, just with
competitor names/copy/colors swapped, each section shipped as its own
raw-html block with page-scoped CSS classnames (`fmstr-cmp-<initials>-*`):

```
hero, trust-seals(real component), answer, glance, why-leave, pricing,
why-pick, demos, api-mcp, switch, testimonial-wall(real component),
when-wins, privacy, ask, other-alts, faqs, more-ai, cta, exit
```

Pages: `jotform-vs-formstack` (18), `tally-vs-typeform` (18),
`typeform-vs-google-forms` (18), `typeform-vs-surveymonkey` (18),
`google-forms-vs-microsoft-forms` (17), `jotform-alternative` (17),
`jotform-vs-typeform` (17), `qualtrics-alternative` (17),
`zoho-forms-alternative` (17), `123formbuilder-alternative` (16),
`alchemer-alternative` (16), `cognito-forms-alternative` (16),
`contact-form-7-alternative` (16), `surveysparrow-alternative` (16),
`wufoo-alternative` (16), `fillout-alternative` (14).

This is the **highest-leverage conversion target**: turning this one
repeated 16-18-section template into a handful of real, parameterized
macro components (e.g. `comparison-hero`, `comparison-glance`,
`comparison-pricing-table`, `comparison-faqs`, `exit-intent-cta`) would
retire ~250+ blocks in one pass — nearly half the total — because it's one
pattern copy-pasted 16 times, not 267 distinct pieces of authored content.

### 2. Long-tail SEO landing page template — 283 blocks (51%) across 36 pages

Similar mechanism, different template: single-topic SEO pages
(`ai-form-generator`, `free-form-builder-for-website`, `ai-quiz-maker`,
`questionnaire-maker`, feature pages like `form-abandonment-recovery`,
`product-order-form`, ...) each hand-built with 8-12 raw-html sections
(hero variants, use-case grids, FAQ, CTA, decorative SVGs). Same story:
one generation pattern, not one-off content. Top offenders:
`ai-form-generator` (12), `form-abandonment-recovery` (12),
`product-order-form` (12), `free-form-builder-for-website` (11),
`free-form-creator` (11), `inspection-form-builder` (11),
`responsive-form-builder` (11), `embed-form-in-email` (11), + 28 more.

## A separate, smaller, actionable bug

`content/pages/integrations/automotive-crm.json` (block id `231`) has a
`<script type="application/ld+json">FAQPage...</script>` **embedded inside a
raw-html block**, instead of going through the page's structured `jsonld`
array field (the one `content.config.ts`'s `pageMeta.jsonld` already
models). This is JSON-LD that should be data, not markup — worth pulling out
and moving into `jsonld` regardless of the broader raw-html reduction work.

## What's *not* worth converting

The 308 inline-SVG blocks are almost all page-specific decorative
mockup/diagram art (not a shared icon set — `components/icons/` already
covers reusable icons per `CLAUDE.md`). Converting each into its own
`IconX.vue` would produce 300 single-use components for zero reuse benefit.
Leave these as raw-html; they're legacy but harmless.

## Recommended Phase 5 execution order

1. **Fix the JSON-LD-in-raw-html bug** (automotive-crm.json) — small, isolated, clearly correct.
2. **Build the comparison-page macro components** and convert the 16
   comparison/alternative pages — highest ROI, ~250+ blocks retired in one
   batch, and stops the pattern from being copy-pasted into future
   comparison pages.
3. **Build the SEO-landing-page macro components** and convert the 36
   long-tail pages — same mechanism, lower per-page urgency.
4. Leave inline-SVG decorative art as raw-html indefinitely (see above).
5. Re-run the counting script after each batch and update the number here
   (baseline: **550**) so the trend is visible over time.

## Re-running this inventory

```js
// counts + categorizes every micro-components.raw-html block across
// content/home.json, content/pages/**/*.json, content/features/**/*.json
```
See the ad-hoc script used to produce this report in the session transcript
(not checked in — it's a one-off analysis, not a build step). Re-derive it
the same way: walk `content/`, filter `__component === 'micro-components.raw-html'`,
group by file and by a content heuristic (has `<style>` only vs has visible
markup vs has `<table>`/`<script>`/`<svg>`).
