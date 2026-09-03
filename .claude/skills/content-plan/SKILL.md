---
name: content-plan
description: Research-backed content plan for a new blog post or marketing page, built from Ahrefs, DataForSEO, and live SERP data BEFORE any writing starts. Always run this first for new content — skip only when the user hands over finished, final copy. Also handles audit mode — finding underperforming existing posts and proposing improvements. Output is a plan file that `content-draft` consumes.
---

# Content planning (research before writing)

**Rule: no new content gets drafted without a plan from this skill.** The only exception is
when the user provides finished copy in final form — then go straight to `blog-content` /
`blog-post` for structuring. Even then, offer a quick SERP sanity check on the target keyword.

This skill produces one deliverable: a plan file at `.claude/content-ops/plans/<slug>.md`
(alongside the skills, not part of the site build). The `content-draft` skill takes that file
as its input; the user must agree on the plan before drafting starts.

## Pipeline context

`content-plan` → `content-draft` → `content-review` (loop until clean) → publish via
`blog-content` + `blog-post`.

## Data sources (MCP)

Use the mcpjungle MCP tools. Load schemas via ToolSearch first (e.g.
`select:mcp__mcpjungle__dataforseo__serp_organic_live_advanced`). Key tools:

- **Keyword data:** `dataforseo__dataforseo_labs_google_keyword_overview` (volume, difficulty,
  intent in one call), `..._keyword_suggestions`, `..._related_keywords`,
  `ahrefs__keywords-explorer-overview`, `ahrefs__keywords-explorer-matching-terms`.
- **Intent:** `dataforseo__dataforseo_labs_search_intent`.
- **SERP:** `dataforseo__serp_organic_live_advanced` (top results + People Also Ask +
  featured snippets), `ahrefs__serp-overview` (traffic/backlinks of ranking pages).
- **Competitor page structure:** `dataforseo__on_page_content_parsing` on top-ranking URLs
  (headings, word count).
- **Our own performance:** `google-gsc-ga4__gsc_query_search_analytics` or the
  `ahrefs__gsc-*` tools (existing impressions/positions), `ahrefs__site-explorer-top-pages`.

**Budget the calls.** These APIs cost money per request. A normal plan needs roughly:
1 keyword-overview batch (pass all seed keywords in ONE call), 1 SERP call for the primary
keyword, content parsing on the content-bearing top-10 pages (up to 5), 1 GSC query. Don't
fan out per-keyword calls.

## Workflow: plan a new piece

1. **Seeds.** Get topic from the user. Derive 5–10 seed keywords yourself.
2. **Keyword research.** One batched keyword-overview call → pick a **primary keyword**
   (best volume × difficulty × relevance fit) and 3–6 secondary keywords. Record volume and
   difficulty for each.
3. **Intent + SERP.** Confirm search intent. Pull the live SERP **for the primary keyword
   you actually chose** (if you pivot keywords mid-plan, re-pull for the new one). Log all
   top 10: content type per result (how-to, listicle, tool page), PAA questions, featured
   snippet / AI Overview format.
4. **Competitor teardown — mandatory, never skip.** Parse the content-bearing pages in the
   top 10 (up to 5; skip only bare tool UIs, Reddit threads, and videos, and say in the plan
   which you skipped and why). For each: heading outline, word count, structural elements
   that likely earn the ranking (comparison tables, FAQs, step blocks, calculators, social
   proof), what they cover, what they miss. The plan must record this per page AND state a
   **differentiation angle** — what our post does that they don't (product proof,
   screenshots, templates, honesty about limits) — plus which ranking structures to adopt.
5. **Own-site check.** Grep `content/blog/*.md` and `pages/` for existing coverage of the
   keyword (cannibalization risk). Check GSC: do we already rank for this? If an existing post
   covers it, recommend updating that post instead of a new one.
6. **Internal links.** Pick 2–5 relevant internal targets, prefer `pages/features/*` feature
   pages and related blog posts. Verify each route actually exists in the repo.
7. **Write the plan file** (see template) and present a short summary to the user for
   agreement. Don't start drafting.

## Plan file template (`.claude/content-ops/plans/<slug>.md`)

```markdown
# Plan: <working title>
- Slug: <slug>
- Type: how-to | listicle | comparison | explainer
- Primary keyword: <kw> (vol X, KD Y)
- Secondary keywords: <kw (vol)>, ...
- Search intent: <informational/commercial/...>
- SERP notes: <what ranks, snippet format, PAA questions>
- Differentiation angle: <why ours wins>
- Target length: <N words — based on what ranks, not padding>
- Audience & tone: <who reads this, tone notes>

## Outline
- H2 ... (keyword targeting note)
  - H3 ...
- FAQ (from PAA): <questions>

## Metadata
- title / metaTitle (≤60 chars): ...
- metaDescription (≤155 chars): ...
- keywords: ...
- Cover image concept + alt text: ...

## Internal links
- /features/... — anchor idea
## Images (placeholders for draft)
- <where> — <what the screenshot should show>
```

## Audit mode (improve poor performers)

When asked to find or fix underperforming content instead of planning something new:

1. Pull GSC data (last 3–6 months): pages with high impressions but low CTR, or positions
   stuck at 5–20 — those are the fixable ones.
2. For each candidate (cap at 5): compare our post against the current SERP for its main
   query — freshness, missing subtopics, weak title/meta, missing FAQ.
3. Output a prioritized improvement list (quick wins first: title/meta rewrites, then content
   gaps), as `.claude/content-ops/plans/audit-<date>.md`. Fixes then go through `content-draft`.
