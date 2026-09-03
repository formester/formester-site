---
name: content-draft
description: Draft a blog post or page from an agreed content plan (produced by `content-plan`). Confirms the plan, outline, and tone with the user, writes the full copy, fills in all metadata (frontmatter, SEO fields, FAQs, image placeholders), and creates the file via the `blog-content` / `blog-post` skills. Use when a plan exists and it's time to write, or when applying improvements from a `content-review` report.
---

# Content drafting (plan → finished draft)

Turns an agreed plan into a complete, publishable draft. **Input is a plan file** at
`.claude/content-ops/plans/<slug>.md` (from the `content-plan` skill). No plan file → stop and run
`content-plan` first, unless the user explicitly provided finished copy (then structure only).

## Pipeline context

`content-plan` → **content-draft** → `content-review` (loop: review findings come back here
to be applied) → publish.

## Workflow

1. **Read the plan.** If anything material is unsettled (angle, outline, tone, slug), get the
   user's agreement on the plan summary BEFORE writing a word. One confirmation, not a
   drip-feed of questions.
2. **Load the `writing-style` skill — mandatory, before writing a word.** It defines the
   voice (direct, second person, seventh-grader readable, why-before-how) and the hard
   mechanics (no em dashes, no hype, no filler intros). Also read 2 recent posts in
   `content/blog/` of the same type (how-to / listicle / comparison) for structural feel.
3. **Write the full body** following the plan's outline exactly. Rules:
   - Primary keyword: in the title, in the first ~100 words, in at least one H2 — naturally,
     never stuffed. Secondary keywords spread across H2/H3s and body.
   - Every internal link from the plan appears with descriptive anchor text. Verify routes
     exist before linking.
   - FAQ section from the plan's PAA questions, answers 2–4 sentences each.
   - One CTA max, near the end, and only where a Formester pitch genuinely fits the post —
     skip it otherwise. Use the sanctioned gradient CTA card from the `blog-post` skill
     (headline + subtext customized to this post's problem, verified claims only). Never the
     old plain `div.cta` block.
4. **Image placeholders.** For every image slot in the plan, insert:
   `![<final alt text>](placeholder://<slug>-<n>)` followed on the next line by
   `<!-- IMAGE: what to capture, e.g. "Formester dashboard, Create Form modal, PDF upload tab" -->`
   The alt text is final copy; only the URL gets swapped later. Cover image: use the same
   placeholder convention in `coverImg` — `{"url":"placeholder://<slug>-cover","width":1200,"height":630}`.
5. **Create the file.** Invoke `blog-content` for frontmatter/file conventions and
   `blog-post` for body block structure (steps, tldr, note, faq, cta blocks). All metadata
   comes from the plan: `title`, `metaTitle` (≤60 chars), `metaDescription` (≤155 chars),
   `keywords`, `coverImgAlt`, dates. `featured: false` unless told otherwise.
   When `author` is Ankit Singhaniya, always set
   `authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"`.
6. **Structured data (`jsonld`).** If the post has an FAQ section, the frontmatter `jsonld`
   array MUST carry a matching `FAQPage` schema object — every question/answer copied
   verbatim from the FAQ (plain text, no HTML/links in answers). Skip `HowTo` schema
   (Google dropped its rich results). Don't duplicate `BlogPosting` — the blog page
   generates that automatically from frontmatter (`pages/blog/[slug].vue`).
7. **Hand off.** Tell the user the draft is ready and that `content-review` should run next.
   Don't self-review — the review must be independent.

## Applying review findings

When `content-review` produces a report (`.claude/content-ops/reviews/<slug>.md`):
- Apply P1 and P2 findings directly; list any you disagree with instead of silently skipping.
- Bump `updatedAt` in frontmatter.
- Keep the plan file as the source of truth — if a finding changes the plan (new section,
  different keyword), update the plan file too so they don't drift.

## After the draft: images

Replacing `placeholder://` slots with real assets is the `content-graphics` skill (capture
via Claude in Chrome, optimize, upload to the per-blog CMS folder, wire in). Covers come
from the `cover-design` skill. Both are proven end-to-end (first run 2026-09-01, the
create-online-form-from-pdf post) — invoke them rather than leaving placeholders behind.
