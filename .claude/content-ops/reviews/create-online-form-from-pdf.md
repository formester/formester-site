# Review: create-online-form-from-pdf — round 3 (delta) — 2026-09-01

Verdict: SHIP

Delta review of the post-round-2 rewrite, checked against
`.claude/skills/writing-style/SKILL.md` (loaded in full), the updated plan (now with the
"Competitor teardown" section and corrected verified-facts), and the feature page.

## Round 3 — what was checked

**Writing-style compliance (new skill)**
- Dash scan (scripted, whole file including frontmatter, all dash-like code points: em, en,
  figure dash, horizontal bar, minus): **zero found**. The round-2 metaDescription dash is
  gone too (now 151/155 chars, keyword intact).
- Aphorism check: the flagged poster line ("The PDF was never the point. The answers are.")
  is gone, replaced by the skill's own recommended plain phrasing (line 25). No new poster
  lines at P2 level; one borderline fragment noted in P3.
- Seventh-grader one-read test: passes. Sentences are short, one idea each; the rewrite
  split every long round-2 sentence (e.g. the clinic example is now five short sentences).
- Why-before-how: intro states the problem in sentence one; the vs section opens with why
  the distinction matters; step 3 now literally opens "Why review at all?"; the submissions
  section opens with the payoff. Rhetorical questions ("Sounds familiar?", "Why review at
  all?") used per the skill.
- No hype words, active voice throughout, honest keep-it-a-PDF guidance retained (lines 42,
  70, 137).

**Competitor-teardown adoption (plan promises → draft)**
- Jotform-style comparison table in the vs section: delivered (`div.table-wrap`, lines
  56-68), rows match the teardown's dimensions (layout, mobile, validation, logic,
  dashboard, best-for) and every cell is honest (online form loses the "keeps layout" row).
- Filled-PDF-per-submission surfaced early (all three competitors lead with it): delivered
  in the intro (line 25) and tldr (line 34).
- Concrete use-case story (PlatoForms pattern): the clinic example (line 139).
- Depth Fillout lacks + honesty: step 3 review tips + table + keep-it-a-PDF rule. Adopted
  in full. The teardown's scanned-PDF caveat is deliberately NOT adopted as a claim; the
  draft makes no scanned-PDF statement in either direction (only line 21's description of
  the old paper workflow mentions scanning). Correct per the plan's verified facts.

**Markdown safety of new/changed blocks**
- Scripted check: no blank lines inside any HTML block (table included), no indented HTML
  lines, all block tags balanced. The table sits between blank lines as a top-level block.

**Claims in new copy**
- New first FAQ "How do I turn a PDF into an online form?" (line 150): flow and "few
  minutes" both verified against the feature page; matches the plan's updated PAA.
- Intro filled-PDF hook (line 25) and the same claim at line 70: verified via the auto-fill
  post and `pages/features/export-form-submission-pdf.vue`.
- Table cells about fillable PDFs are generic industry statements, not Formester claims.
- No new unverified Formester claims found.

**Frontmatter**: `updatedAt` bumped to a valid ISO timestamp; everything else unchanged and
still schema-valid. Word count now **1,390** (strict text-only count), inside the
1,200-1,500 target — round 2's boundary note is closed.

## Round 3 — P1 — blocks publish

None.

## Round 3 — P2 — fix before publish if cheap

None.

## Round 3 — P3 — nice to have / next revision

- [content/blog/create-online-form-from-pdf.md:119] "One form, both outcomes." is a
  poster-style fragment of the kind the style skill bans. Unpack: "One form gives you both
  the data and the document."
- [content/blog/create-online-form-from-pdf.md:40] "So let's clear it up first." and
  [line 27] "We will also cover when a fillable PDF is the better choice." are light
  signposting, adjacent to the banned "let's dive in" family. Both survivable; cut if
  touched again.
- Carried over, still deferred: "pdf to web form" never appears as a phrase; loose bullet
  lists (blank lines between `-` items render each in `<p>`); metaTitle has 9 chars of
  headroom.

---

# Review: create-online-form-from-pdf — round 2 — 2026-09-01

Verdict: SHIP

All round-1 P1/P2 findings verified as resolved in the file (re-read in full, claims
re-checked against `pages/features/convert-pdf-to-fillable-form.vue`):

- P1 scanned-PDF claim: FAQ now "Does the PDF need to be fillable already?" (line 135) —
  no OCR/scanned claim anywhere. The only remaining "scanned" (line 21) describes the old
  paper workflow, not a feature. Resolved.
- P1 detection overstatement: tldr (line 32), step 3 (line 75), and FAQ (line 137) now all
  split AI-detected (text boxes, checkboxes, dates/date pickers, e-signatures) from
  added-in-builder (dropdowns, file uploads, conditional logic, multi-step). Matches the
  feature page. Resolved.
- P2 metaDescription keyword: `description` and `metaDescription` now open with "Create an
  online form from a PDF" — 152/155 chars. Resolved.
- P2 missing plan links: `/features/convert-pdf-to-fillable-form/` linked in step 3 (line 75,
  anchor "PDF to fillable form") and `/ai-form-generator/` linked in the use-case section
  (line 125, anchor "AI form generator"). Both routes exist. Resolved.
- P2 thin body: ~350 words added (field-review tips in step 3, PDF-vs-form comparison in the
  submissions section, clinic intake example). Strict body-text count is 1,170 — see P3 note
  below; substance issue is resolved.
- P2 respondent-PDF FAQ: retitled to "Can I still get a PDF of each submission?" (line 138),
  answer unchanged and verified. Resolved.

Regression check on the new copy: no unverified feature claims ("forwarded to your CRM" is
covered by the feature page's Zapier/CRM FAQ; the clinic example's filled-PDF-on-record is
covered by the auto-fill post/feature); tone holds (short, second person, no hype); no
paragraph over 5 sentences; markdown-safe — no blank lines inside the `ol.steps`/`div`/
`section` blocks, no indented HTML lines (verified by script, not eyeball).

## Round 2 — P1 — blocks publish

None.

## Round 2 — P2 — fix before publish if cheap

None.

## Round 2 — P3 — nice to have / next revision

- [content/blog/create-online-form-from-pdf.md:77] "Swapping the type takes one click" — a
  UI micro-claim not verifiable against the feature page. Harmless, but "takes seconds"
  makes the same point without promising a click count.
- Body word count: 1,170 by strict text-only count (HTML, alt text, and image directives
  stripped) vs. the plan's 1,200 floor. With alt text it clears 1,200; the depth the plan
  wanted is there. Not worth padding — only add words if a real point shows up in editing.
- Round-1 P3s remain deliberately deferred: "pdf to web form" phrase absent; loose bullet
  lists (blank lines between `-` items render each item in `<p>`); metaTitle has 9 chars of
  headroom for "with AI".

---

# Review: create-online-form-from-pdf — round 1 — 2026-09-01

Verdict: FIX FIRST

Reviewed against `content-ops/plans/create-online-form-from-pdf.md`, the blog zod schema
(`content/schemas/blog.ts` — note: the skill points at `content/schemas/misc.ts`, which does
not exist; blog schema lives in `blog.ts`), the blog-post block conventions
(`.claude/skills/blog-post/SKILL.md`, styles in `components/blog/BlogPostView.vue`), and
product facts on `pages/features/convert-pdf-to-fillable-form.vue`. SERP re-check skipped
(plan researched today, round 1).

## P1 — blocks publish

- [content/blog/create-online-form-from-pdf.md:123] FAQ claims scanned-PDF support: "Does it
  work with scanned or non-fillable PDFs? Yes." Scanned = image-based = needs OCR. Nothing on
  `pages/features/convert-pdf-to-fillable-form.vue` (or any `pages/features/*` page) claims
  OCR/scanned-document support — the page only says AI "scans the document" and "reads the
  layout", which is about non-fillable native PDFs. The plan's verified-facts list doesn't
  include it either. Unverifiable feature claim, and it's exactly the kind a user will test
  in minute one. **Fix:** either (a) verify scanned-PDF/OCR support with the product team and
  keep it, or (b) narrow the FAQ to what's verifiable: "Does the PDF need existing fillable
  fields? No — the AI reads the document's layout, so a flat, non-fillable PDF works. Review
  the detected fields in the builder before publishing." Drop the word "scanned" everywhere.

- [content/blog/create-online-form-from-pdf.md:75,125] Detection list overstated. Step 3 and
  the FAQ "Which field types get detected?" both assert AI *detects* text boxes, checkboxes,
  dropdowns, date pickers, file uploads, and e-signature fields. The feature page separates
  the two: detection is "text fields, checkboxes, dates, and signature blocks"
  (`convert-pdf-to-fillable-form.vue`, "Let AI map the fields" row); dropdowns, file uploads
  etc. are field types you can *add* in the builder ("What types of fields can I add?" FAQ).
  Claiming file-upload detection is not verifiable. Root cause is upstream — the plan's
  verified-facts line lumps "Detected/available" together — but the draft commits to
  "detected" specifically. **Fix:** step 3 → "AI detects text boxes, checkboxes, dates, and
  signature fields automatically; add dropdowns, file uploads, and anything else in the
  builder." FAQ → retitle "Which field types are supported?" and split detected vs. addable
  the same way.

## P2 — fix before publish if cheap

- [content/blog/create-online-form-from-pdf.md:6] `metaDescription` (and `description`, line
  4) does not contain the primary keyword "create online form from PDF" — it only has
  "online form" and "PDF" separately. 148/155 chars, so there's room. The plan wrote it this
  way, but the checklist requirement wins. **Fix (153 chars):** "Create an online form from
  a PDF: upload it to Formester, let AI detect the fields, and share a mobile-friendly form
  by link or QR. No rebuilding needed."

- [content/blog/create-online-form-from-pdf.md:75] Missing plan-mandated internal links. The
  plan lists 5 internal links; the draft has 3. Missing: `/features/convert-pdf-to-fillable-form/`
  — which the plan calls the **primary feature link**, "link to it prominently" — and
  `/ai-form-generator/` (we already rank ~5 for "ai form generator pdf" via that page; this
  post is supposed to feed it). Both routes exist in `pages/`. **Fix:** in step 3 or the
  intro, link "PDF to fillable form converter" → /features/convert-pdf-to-fillable-form/;
  where AI detection is first described (line 25 or 75), anchor "AI form generator" →
  /ai-form-generator/.

- [content/blog/create-online-form-from-pdf.md:21-127] Body is ~890 words vs. the plan's
  1,200–1,500 target. The plan's own bet is "depth + screenshots wins here" against thin tool
  pages — at 890 words this is closer to the thin pages it's supposed to beat. Thinnest
  sections: "What happens to your submissions" (4 bullets, no substance on the dashboard/
  export) and "When this beats a fillable PDF" (labels, no example). **Fix:** add ~300–400
  real words — e.g. a short "Review what the AI got wrong" passage under step 3 (common
  fixes: renaming labels, marking required, merged fields), and one concrete before/after
  example (intake PDF → completion on mobile) in the use-case section. No padding.

- [content/blog/create-online-form-from-pdf.md:126] FAQ "Can respondents still get a PDF
  copy?" — the answer describes the owner generating a filled PDF per submission, not the
  respondent receiving a copy. Whether the generated PDF is delivered to the respondent is
  not verified anywhere. **Fix:** retitle to "Can I still get a PDF of each submission?" and
  keep the answer as-is (it's verified via the auto-fill post).

## P3 — nice to have / next revision

- [content/blog/create-online-form-from-pdf.md:7] Secondary keyword "pdf to web form" never
  appears as a phrase (only "web form" once, line 25). Cheap: in the H2 comparison section,
  "A **PDF to online form** conversion" → mention "(sometimes called PDF to web form)".
- [content/blog/create-online-form-from-pdf.md:46-52,93-99,105-111] Blank lines between list
  items make these loose lists — marked wraps each item in `<p>`, adding vertical gaps other
  posts don't have. Remove the blank lines between `-` items.
- [content/blog/create-online-form-from-pdf.md:5] `metaTitle` is 51/60 — 9 chars of headroom.
  "Create an Online Form from a PDF with AI | Formester" (52) works "AI" in, matching the
  ai-form-generator angle. Optional.

## Checks that passed (for the record)

- Frontmatter valid against `content/schemas/blog.ts`: slug matches filename, strings quoted,
  ISO dates, no hand-written `rawbody`, `coverImg`/`metaImage`/`jsonld` shapes fine.
- Primary keyword in title, first ~100 words (line 25), and one H2 (line 56). No stuffing —
  density reads natural. Secondary keywords present except "pdf to web form" (P3).
- All 4 internal links that ARE present resolve: two blog posts exist in `content/blog/`,
  `/features/electronic-signature/` exists in `pages/features/`. Anchors are descriptive.
- Heading hierarchy sane (H2 → H3 only inside steps). FAQ present, last, correct
  `<section class="faq">` + `<details>` markup. Exactly one CTA (`div.cta`). All images use
  `placeholder://` and have meaningful alt text; `coverImgAlt` set. Cover image repeated at
  top of body matches existing-post convention.
- Nuxt Content / marked rendering safe: no indented HTML, no blank lines inside any HTML
  block; blocks match the design-system classes styled in `BlogPostView.vue`.
- Product claims verified: "New Form → PDF to Formester Form" flow, link/QR/embed sharing,
  mobile-friendly, dashboard + export, Google Sheets real-time + Zapier, free/no-credit-card,
  legally binding e-signatures, conditional logic + multi-step, per-submission email
  notifications (via `pages/features/email-notification-for-form-submission.vue`).
- Differentiation angle delivered: the fillable-PDF vs. online-form split is the spine of the
  post, cross-links the sibling fillable-PDF post instead of cannibalizing it. Tone is house
  tone — short, second person, no hype, no walls of text.
