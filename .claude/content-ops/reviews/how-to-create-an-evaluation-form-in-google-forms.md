# Review: how-to-create-an-evaluation-form-in-google-forms — round 1 — 2026-09-01
Verdict: FIX FIRST

## P1 — blocks publish
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:162] "form analytics shows where respondents drop off, which tells you exactly which question is costing you completed evaluations" claims question-level drop-off. The feature page (pages/features/form-analytics.vue:174-175) only supports page-level: "Drop-off analysis shows the page where people leave." We do not have per-question drop-off, so as written this promises a capability we don't ship. → Change to "shows which page of the form people abandon, so you know where the evaluation is losing respondents."

## P2 — fix before publish if cheap
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:140] "No partial submissions. Close the tab halfway through a long review and everything typed is gone." Factually wrong for signed-in respondents: Google Forms autosaves in-progress responses as drafts for 30 days when the respondent is signed in to a Google account (default since 2021). Only anonymous / signed-out respondents lose their answers. → Qualify: "Unless respondents are signed in to a Google account, closing the tab halfway through loses everything. Anonymous evaluations (the honest ones) get no draft saving at all."
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:156] Comparison table row "Save and continue later | No | Yes" repeats the same error. → Change the Google Forms cell to "Only for signed-in Google users" (Formester's save-and-continue needs no account, per pages/features/save-and-continue.vue, so the contrast still lands).
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:84] "Click Publish, then the Send button." In the updated Google Forms UI (rolled out from late 2024) the standalone Send button is gone; after Publish you copy the responder link or open the share options from the link icon next to Publish. Mixing the old and new UI will confuse readers and dates the post. → Rewrite: "Click Publish, then copy the responder link (the link icon next to Publish), or open the share options to email or embed the form."
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:136] "You can change the header image and the color, and that's about it." Google Forms also lets you change fonts and text sizes in the Customize Theme panel, plus background color. Understating a competitor invites correction in comments and hurts trust. → "You can change the header image, colors, and fonts, and that's about it."

## P3 — nice to have / next revision
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:25] "We will also be honest about where Google Forms runs out of road" is first-person-plural plus an idiom; style skill wants second person and plain words. → "This guide also covers what Google Forms can't do for evaluations, and what to use when you hit those limits."
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:88] "Timing beats wording." reads as a poster line (aphorism style the writing-style skill bans). It is unpacked in the next sentence, so the fix is cheap. → Drop the first sentence and keep "An average evaluation form sent within an hour of the session beats a perfect one sent next week."
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:111] Secondary keyword "google forms teacher evaluation template" (vol 260) never appears as a phrase; the Teacher table row is the natural home. → Add one lead-in sentence above the table, e.g. "Use the teacher and course rows as a Google Forms teacher evaluation template: copy the questions straight into a form."
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:164] Plan called for "Formester as the upgrade with our own evaluation templates" and a "template CTA"; the CTA links only to sign-up. → If an evaluation-form template page exists on the site (templates are Strapi-driven, verify the route first), link it in the Formester section; otherwise keep the sign-up CTA and note the gap in the plan.
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:64] Link markup is mixed: HTML `<a href>` in steps, markdown links in the quiz-mode section (line 96). Both render, but pick one style for maintainability. → Convert line 96 and 142 markdown links to `<a href>` to match the rest of the HTML blocks.

## Verified clean (no findings)
- Frontmatter valid against content/schemas/blog.ts: slug matches filename, quoted strings, ISO dates, no hand-written rawbody, metaImage array default.
- metaTitle 48 chars, metaDescription 147 chars, both contain the primary keyword.
- All 5 planned internal links present with descriptive anchors; all 4 blog targets exist in content/blog/ and pages/features/form-analytics.vue exists; trailing-slash style matches other posts.
- FAQPage jsonld matches the rendered FAQ verbatim (all 4 Q/A pairs, checked programmatically). No HowTo, no hand-written BlogPosting.
- Zero em/en dashes, zero hype words, exactly one CTA, every image has meaningful alt, placeholder:// + <!-- IMAGE: --> convention followed, heading hierarchy clean.
- Feature claims verified: calculating fields score via formulas (calculating-fields.vue), branding kit (branding-kit.vue), auto PDF per submission (export-form-submission-pdf.vue), save and continue without an account (save-and-continue.vue), drop-off analytics (form-analytics.vue), partial submissions (partial-submissions.vue).
- Differentiation angle delivered: only general multi-type guide with a per-type question bank; ~1,850 body words vs ~2,000 target, acceptable.

# Review: how-to-create-an-evaluation-form-in-google-forms — round 2 — 2026-09-01
Verdict: SHIP

## Round-1 fixes verified
- P1 form-analytics claim (line 164): now page-level ("which page of the form people abandon"), matches pages/features/form-analytics.vue. Fixed.
- P2 partial-submission claim (line 142): reframed as "Unreliable saving for long reviews", correctly qualified to signed-out/anonymous respondents. Fixed.
- P2 comparison table (line 158): Google Forms cell now "Only for signed-in Google users", Formester "Yes, for everyone". Fixed.
- P2 share step (line 84): "Click Publish, then copy the responder link" — no stale Send button reference. Fixed.
- P2 branding limits (line 138): now mentions header image, color, and font. Fixed.
- P3s: intro reworded (second person, no idiom), note reworded (no poster line), teacher-template paragraph added with the exact keyword phrase and a factually safe claim (no dedicated teacher template in the gallery), /templates/ link added.

## Rescan (whole draft)
- Em/en dashes: zero.
- Internal links: all 6 targets exist (4 blog posts, pages/features/form-analytics.vue, pages/templates/index.vue).
- CTA: exactly one (sign-up block).
- FAQ section and frontmatter jsonld match verbatim (all 4 Q/A pairs, checked programmatically).

## P3 — nice to have / next revision
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:164] "form analytics shows where respondents drop off, which shows you which page of the form people abandon" repeats "shows" three times and says drop-off twice. Tighten to: "form analytics shows which page of the form people abandon, so you know where your evaluation is losing respondents."
- Carried over from round 1: link markup still mixed (markdown links at lines 96, 144, 164; HTML anchors in the steps). Cosmetic, renders fine.

# Review: how-to-create-an-evaluation-form-in-google-forms — round 3 — 2026-09-01
Verdict: FIX FIRST

Scope: post-SHIP merge of external-writer material (Sheets weighting H2, rubric H2, expanded step 3 and step 5, new Formester paragraph, 3 new FAQ entries). Whole file rescanned for regressions.

## P1 — blocks publish
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:149] "wrap the calculation in <code>ARRAYFORMULA</code> so it keeps working for every new submission instead of only the first row" is wrong Sheets behavior. SUMPRODUCT collapses its argument arrays into a single number, so ARRAYFORMULA cannot expand it row by row; `=ARRAYFORMULA(SUMPRODUCT(D2:G,$D$1:$G$1))` returns one scalar for the entire range, not a score per response. A reader who follows this gets a broken column. → Give a formula that actually spills, e.g. `=ARRAYFORMULA(IF(LEN(D2:D), D2:D*$D$1 + E2:E*$E$1 + F2:F*$F$1 + G2:G*$G$1, ))` (or MMULT), or drop ARRAYFORMULA and say to copy the SUMPRODUCT formula down as responses arrive. Same wrong claim is in the FAQ (line 208) and its jsonld twin (line 13, entity 5) — fix all three together so FAQ and jsonld stay verbatim-matched.

## P2 — fix before publish if cheap
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:136] "Put your weights in a spare row … the weights in D1 to G1." Row 1 of a form-linked response sheet is not spare: it holds the question headers Google writes when you link the form, and the first response sits in row 2. Following the example means overwriting the headers. → Put the weights in row 1 of unused columns to the right (e.g. I1:L1) or on a helper tab, and update the two SUMPRODUCT formulas' weight references to match. Keep the FAQ wording generic ("a spare row of unused columns") so it stays true.
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:151] "whoever owns that Sheet owns the scoring system, and the logic walks out the door with them" — quotable chiasmus plus a stock metaphor (walks out the door), both banned patterns. → "Once the scoring rules live only in a Sheet, only the person who set it up knows how the scores work. If they leave, nobody can explain the numbers."
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:63] "Google Forms gives you two good tools for this:" — numeric setup line, near-verbatim match for the banned example "gives you three views". → "Google Forms covers ratings with the linear scale and the multiple choice grid:"
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:43] "A good one mixes two kinds of questions." — same count-setup pattern (pre-merge text, missed in rounds 1–2). → "A good one mixes rating questions with open questions."

## P3 — nice to have / next revision
- [content/blog/how-to-create-an-evaluation-form-in-google-forms.md:155] "The build is the easy part of an evaluation. The hard part is…" sits close to the banned "the easy half" phrasing. Borderline; if touching the section anyway: "Building the form takes ten minutes. Agreeing on what the ratings mean takes longer."
- Carried over from rounds 1–2: link markup still mixed (markdown links in quiz-mode, limits, and Formester sections; HTML anchors in the steps). Cosmetic.

## Verified clean (round 3 rescan)
- Weighting section, other claims: `=SUMPRODUCT(D2:G2,$D$1:$G$1)` and the `/SUM($D$1:$G$1)` weighted-average variant are valid Sheets syntax and correct math as per-row formulas; grid answers arriving as text labels is accurate. Table block is markdown-safe: no blank or indented lines inside any of the 3 `table-wrap` HTML blocks; `<code>` inside cells renders fine.
- "Decide what a 3 means" H2: no poster lines beyond the P3 above, no banned words, plain second-person copy.
- Step 5 anonymity trade-off: accurate. Limit to 1 response forces Google sign-in; with Collect email addresses off Google does not record the signed-in username; respondents without a Google account are excluded. Matches Google's documented behavior.
- Step 3 linear scale range: correct (start 0 or 1, end 2–10, whole numbers).
- Formester paragraph: unique-links claim matches pages/features/generate-unique-form-submission-url-for-each-respondent.vue (one response per link, no Google account needed); the draft claims duplicate prevention only and does NOT claim anonymity for unique links (the feature page says links identify the respondent). Rumie quote matches constants/testimonials.js verbatim ("It's intuitive, fast and easy to share.").
- FAQ ↔ jsonld: all 7 Q/A pairs match verbatim (checked programmatically, tags stripped); jsonld line parses as valid JSON, single FAQPage, no HowTo/BlogPosting.
- Full-file: zero em/en dashes, zero hype/banned words on the grep list (lands, honest, genuinely, heavy lifting, out of the box, pays off, etc.), no suspense one-liner cadence (only one-sentence block is the CTA), exactly one CTA, all 7 internal link targets exist (4 blog posts, 2 feature pages, /templates/), placeholder:// + IMAGE-comment convention intact, heading hierarchy clean (9 H2s, H3s only inside the steps list plus the FAQ H2).

# Review: how-to-create-an-evaluation-form-in-google-forms — round 4 — 2026-09-01
Verdict: SHIP

## Round-3 fixes verified
- P1 ARRAYFORMULA claim (line 149): fixed. The copy stays factual (SUMPRODUCT works one row at a time, copy down as responses arrive) and the new spilling formula is correct: `=ARRAYFORMULA(IF(LEN(D2:D), D2:D*$I$1+E2:E*$J$1+F2:F*$K$1+G2:G*$L$1, ))`. Verified: LEN over an open range works elementwise inside ARRAYFORMULA, the omitted third IF argument returns blank for empty rows, and the weight mapping (D→I1, E→J1, F→K1, G→L1) matches the SUMPRODUCT pairing positionally, so both versions compute the same weighted total.
- P2 weights row (line 136): fixed. Copy now says row 1 holds the question headers and puts weights in I1 to L1; both table formulas updated to `$I$1:$L$1` (dimensions still match: 1x4 ratings row against 1x4 weights row). FAQ answer made location-generic ("empty columns beside the responses"), which stays true.
- P2 ownership chiasmus (line 151): flattened to "If the person who owns the Sheet leaves, the scoring rules should not leave with them." No stock metaphor, no quotable line.
- P2 count setups: line 43 now "A good one mixes rating questions with open questions."; line 63 now "In Google Forms, that means the linear scale and the multiple choice grid:". Both clean.

## Rescan (whole file, programmatic)
- FAQ ↔ jsonld: all 7 Q/A pairs match verbatim, including the rewritten weighting entry (no ARRAYFORMULA-wrap claim anywhere); jsonld line parses as valid JSON, single FAQPage.
- Em/en dashes: zero. Banned-word grep: zero hits. No new one-sentence paragraphs (only the CTA block).
- Table blocks: 3 table-wrap blocks, no blank or indented lines inside any; <code> cells intact.
- Exactly one CTA; all 7 internal link targets exist; heading hierarchy unchanged and clean.
- Changed lines introduce no style regressions ("spilling version" is explained in the same sentence).

## P1 / P2
None.

## P3 — carried over, next revision
- Line 155 "The build is the easy part" near-miss on "the easy half" phrasing.
- Mixed link markup (markdown links in quiz-mode, limits, and Formester sections; HTML anchors in steps). Cosmetic.
