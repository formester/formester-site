---
name: content-review
description: Independent third-party review of a drafted blog post or page before publish. Checks the draft against its content plan, on-page SEO, metadata, tone, and the live SERP (via DataForSEO/Ahrefs), then writes a prioritized findings report. Use after `content-draft` produces or updates a draft; can be run in a loop (review → fix via content-draft → re-review) until clean.
---

# Content review (independent pre-publish check)

Reviews one draft (`content/blog/<slug>.md` or a page) as a **skeptical third party**. The
reviewer's job is to find reasons this piece won't rank or won't read well — not to praise it.

**Independence:** when the same session wrote the draft, run this review in a fresh subagent
(Agent tool, `Explore` or `general-purpose`) with ONLY the draft path, plan path, and this
checklist — not the drafting conversation. Report back findings only.

## Pipeline context

`content-plan` → `content-draft` → **content-review** → findings go back to `content-draft`
→ re-review. Stop the loop when no P1/P2 findings remain, or after 3 rounds (then surface
what's left to the user instead of grinding).

## Inputs

- The draft file.
- Its plan: `.claude/content-ops/plans/<slug>.md`. No plan (user-provided final copy) → review
  against the checklist only and say so in the report.

## Checklist

**Plan adherence**
- Outline sections all present? Differentiation angle actually delivered, or did the draft
  regress to the same generic post the competitors have?
- Primary keyword in title, first ~100 words, ≥1 H2. Secondary keywords present. Flag
  stuffing too — keyword density that reads unnatural is a P2.

**Metadata & frontmatter**
- Valid against the blog zod schema (`content/schemas/blog.ts`): slug matches filename,
  quoted strings, ISO dates, no hand-written `rawbody`.
- `metaTitle` ≤60 chars, `metaDescription` ≤155 chars, both contain the primary keyword.
- `coverImgAlt` set; every body image has meaningful alt text (placeholders included).
- FAQ section present ⇒ `jsonld` must contain a `FAQPage` object whose questions/answers
  match the rendered FAQ verbatim (missing or drifted = P2). No `HowTo` schema, no
  hand-written `BlogPosting` (the page auto-generates it).

**Structure & on-page**
- Heading hierarchy sane (H2 → H3, no skips). FAQ present if the plan called for one.
- Internal links: every plan link present, anchors descriptive, routes exist in the repo
  (`pages/`, `content/blog/`). Broken internal link = P1.
- At most one CTA, and it must be the sanctioned gradient CTA card from the `blog-post`
  skill (plain `div.cta` blocks are retired — flag as P2). Its headline/subtext claims are
  product claims: verify them. A missing CTA is fine when no pitch fits the post.
- Image placeholders follow the `placeholder://` convention.

**Copy quality**
- Matches the `writing-style` skill (load it and run its self-check): no em dashes anywhere,
  direct sentences a seventh grader reads in one pass, no aphorism-style indirect lines,
  why before how, second person, no hype, no filler intros.
- **Claude-isms — always scan and report.** Check the draft against the banned list in the
  `writing-style` skill ("lands/land in", "honest/genuinely" framing, numeric setup lines
  like "Three decisions matter", stock metaphors like "heavy lifting" / "bite you" /
  "hitting walls"). Every hit is a P2 with a plain-language rewrite as the fix.
- Factual claims about Formester features verifiable against `pages/features/*` — a claim
  about a feature we don't have is a P1.
- No unexplained jargon, no walls of text (>5 sentences per paragraph).

**SERP reality check (optional, costs API calls — 1 call max)**
- Re-pull the SERP for the primary keyword (`dataforseo__serp_organic_live_advanced`) only
  if the plan is >2 weeks old or this is the first review round. Does the draft still match
  intent and cover what the top 3 cover?

## Report format (`.claude/content-ops/reviews/<slug>.md`)

```markdown
# Review: <slug> — round <n> — <date>
Verdict: SHIP | FIX FIRST | RETHINK

## P1 — blocks publish
- [file:line] finding → concrete fix
## P2 — fix before publish if cheap
- ...
## P3 — nice to have / next revision
- ...
```

Every finding needs a concrete fix, not just a complaint. If the round found nothing at P1/P2,
say SHIP plainly — don't invent findings to look thorough.
