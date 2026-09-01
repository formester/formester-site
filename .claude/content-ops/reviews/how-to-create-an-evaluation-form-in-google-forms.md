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
