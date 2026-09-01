# Review: response-validation-in-google-forms — round 1 — 2026-09-01
Verdict: FIX FIRST

Reviewed against the plan (.claude/content-ops/plans/response-validation-in-google-forms.md), content-review checklist, writing-style self-check, blog zod schema, feature pages, and Google's own help doc (support.google.com/docs/answer/3378864). SERP re-pull skipped (plan data pulled today).

## P1 — blocks publish

- [content/blog/response-validation-in-google-forms.md:130] The block-links regex row is broken as written. In Google Forms, the Matches condition requires the ENTIRE answer to match the pattern (Apps Script mirrors this: `requireTextMatchesPattern` = full match, `requireTextContainsPattern` = substring). So `https?://|www\.` with **Doesn't match** passes almost everything: a spam answer like "buy here https://spam.com" doesn't full-match the pattern, so Doesn't match is satisfied and the URL sails through. Even a bare URL passes. Readers copy this row, it does nothing, and the regex cookbook is this post's whole differentiation angle. → Fix: change the row's condition to **Doesn't contain** (pattern stays the same), and fix line 137 to say "A doesn't-contain rule on your paragraph questions".

- [content/blog/response-validation-in-google-forms.md:172] "Conditional logic shows, hides, and requires fields based on earlier answers" — pages/features/conditional-logic.vue documents show, hide, skip to pages, and conditional follow-ups. Nothing on the page says logic can conditionally REQUIRE a field. Unverifiable product claim. → Fix: drop "requires": "Conditional logic shows and hides fields based on earlier answers."

## P2 — fix before publish if cheap

- [content/blog/response-validation-in-google-forms.md:42, 154, 190 + jsonld line 14] "Multiple choice, dropdown, and grid questions have no validation at all" and the FAQ's "Only three" answer are attackable. Google's own response-validation help doc includes grid questions: multiple choice grid and checkbox grid get "Require a response in each row" and "Limit to one response per column" under the same three-dot menu. The Response validation menu item is indeed only on 3 types, but "no validation at all" for grids is the kind of line a reader (or an AI Overview) can fault. → Fix: qualify in the body (line 42): grids don't get the Response validation option, but have their own limits in the three-dot menu (one response per column, required rows). Soften the FAQ answer + matching jsonld text the same way ("The Response validation option appears on only three types: ... Grid questions have separate limits like one response per column.").

- [content/blog/response-validation-in-google-forms.md:40, 160] "The check runs when the respondent tries to submit the form or move to the next section, not while they type" and the limitation bullet "Errors appear only at submit time." In current Google Forms the red error message typically appears as soon as an invalid answer is entered in the field; submit is what stays blocked. Google's help doc doesn't state timing, so this claim rests on nothing. Getting error timing wrong in a post about error messages undermines the whole piece. → Fix: verify during the step-5 screenshot capture (you'll be looking at exactly this screen). If the error shows on input, rewrite line 40 ("the error appears under the question as soon as the answer breaks the rule, and the form can't be submitted until it's fixed") and replace the line-160 bullet with the real gap (e.g. on long forms a respondent can still fill everything before noticing an early error, or drop the bullet).

- [content/blog/response-validation-in-google-forms.md:177] "verified beats validated" is an aphorism-style poster line, banned by the writing-style skill (direct statements only; if it sounds quotable, flatten it). → Fix: "If your forms collect contact details you plan to act on, checking the format isn't enough. Verify the address or number itself."

- [content/blog/response-validation-in-google-forms.md:172] "covers the cross-field cases Google Forms has no answer for" overclaims. The limitation section's own example (line 158) is requiring an end date later than a start date, and show/hide logic can't do that comparison either. → Fix: narrow the claim to what logic does: "which covers cases like asking for a shipping address only when a checkbox is ticked." Drop the blanket "cross-field cases" framing.

## P3 — nice to have / next revision

- [content/blog/response-validation-in-google-forms.md:14 vs 191] FAQ 4 drifts from its jsonld copy: jsonld wraps the sample error in single quotes ('Please enter a valid email address.'), the rendered FAQ uses double quotes. Align them (quotes are allowed in FAQ answers, just make them identical).
- [content/blog/response-validation-in-google-forms.md:23, 67] "rejected at the door" and "the difference between a fixed answer and an abandoned form" both lean quotable. Not banned phrases, but two poster-adjacent lines this close together is a pattern. Flatten one if touching those paragraphs anyway.
- [content/blog/response-validation-in-google-forms.md:181] CTA subtext "Format checks are included on every field type" — the feature pages don't enumerate validation on literally every field type. Low risk, but "on every field" or "on phone, email, number, and date fields" is safer.

## Verified clean (no findings)

- Frontmatter validates against content/schemas/blog.ts: slug matches filename, quoted strings, ISO dates, no rawbody, coverImg/metaImage/jsonld shapes correct.
- metaTitle 53 chars, metaDescription 144 chars, both carry the keyword. Primary keyword in title, intro, and an H2; secondary keywords present without stuffing.
- All 5 internal links resolve (3 feature pages, 2 blog posts). Anchors descriptive.
- Email verification (OTP code typed into the form) and SMS verification (OTP) claims match their feature pages. 56,000+ teams figure matches site-wide usage.
- Regex cookbook: all 8 patterns are valid RE2 (no lookaheads) and pass their examples, except the block-links row above.
- Google Forms facts: rule types per question type, number/text conditions list, checkbox at least/at most/exactly all match Google's doc.
- Style: zero em dashes, no banned Claude-isms, no quotation marks in body copy, one sanctioned gradient CTA, placeholder:// convention followed, all images have alt text, FAQ jsonld present with plain text.
- Plan adherence: every outline section present, both differentiators (regex cookbook, limitations-to-verification pivot) delivered, length ~1,900 words in the 1,800–2,200 target.

# Review: response-validation-in-google-forms — round 2 — 2026-09-01
Verdict: SHIP

Verified every round 1 P1/P2 against the current draft. No SERP/keyword tools used.

## Round 1 fixes confirmed

- **P1 block-links regex (line 130):** row now reads `https?://|www\.` with condition **Doesn't contain**; line 137 says "A doesn't-contain rule on your paragraph questions" and adds a correct parenthetical explaining why doesn't-match would let spam through. The table intro's "unless the row says otherwise" covers the exception. Fully fixed.
- **P1 conditional logic (now line 170):** reads "shows and hides fields based on earlier answers, so a shipping address field can appear only when someone ticks the checkbox asking for delivery." No "requires", no "cross-field cases" blanket claim anywhere in the file (grep confirms). Matches pages/features/conditional-logic.vue. Fixed.
- **P2 grid validation:** qualified in all four places. Body (line 42): grids "get two narrow settings of their own (require a response in every row, limit to one response per column)", and the no-validation-at-all claim now applies only to multiple choice and dropdown. Limitations bullet (line 154): "grids only get row and column limits". FAQ Q3 and jsonld Q3 both say "grid questions only offer row and column limits" and match verbatim (programmatic check: all 6 FAQ answers match jsonld after stripping strong tags; jsonld is plain text, no HTML). Fixed.
- **P2 errors-at-submit-time:** the "not while they type" sentence and the "Errors appear only at submit time" limitation bullet are both gone (grep for "at submit time": zero hits). Line 40 now describes only what is verifiable: error shows under the question in red, form can't be submitted until fixed. The limitations list has four bullets, none about timing. Fixed.
- **P2 "verified beats validated" aphorism:** gone. Line 175 is flat: "If your forms collect contact details you plan to act on, verification catches the bad entries that format checks let through." Fixed.

## Regression pass on edited areas

- Em dashes: 0. Curly quotes in body: 0. No quotation marks in rendered body copy (remaining hits are contractions, HTML attribute syntax, and one HTML comment, all allowed).
- Claude-ism grep (lands, genuinely, heavy lifting, hype words, etc.): zero hits.
- Frontmatter: jsonld line parses as valid JSON (FAQPage, 6 questions); YAML structure intact.
- Round 1 P3s also landed: FAQ 4 quote drift resolved by removing the quoted sample entirely (FAQ and jsonld match), "rejected at the door" flattened, CTA subtext now "Format rules are built into the fields themselves".

## Findings

None at P1/P2. Two residual P3s, both fine to ship with: line 67 still carries the "difference between a fixed answer and an abandoned form" line (round 1 asked to flatten one of the two poster-adjacent lines; the other was flattened), and the H2/body still claim validation "on every field" while the CTA was softened. Neither blocks publish.
