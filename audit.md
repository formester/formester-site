# Formester public-site audit — AI-ready full issue export

> **Purpose:** Give this entire file to an AI or engineer to plan and execute remediation. 
> Every current finding is listed below individually. Treat `needs-review` as a 
> verification task, not an instruction to change a production page blindly.

## Export metadata

- Exported at: `2026-09-01T15:45:54Z`
- Audit state: `/home/aks/hermes-workspace/formester-site-audit/state`
- Site: `formester.com`
- Sitemap: `https://formester.com/sitemap.xml`
- Inventory updated: `2026-08-29T17:37:16Z`
- Finding ledger updated: `2026-08-29T17:37:16Z`
- Sitemap pages: **1503**; scanned: **1503**
- Finding rows exported: **215**

## Latest completed audit run

- Batch: `batch-20260829T173130Z-025`
- Finished: `2026-08-29T17:37:16Z`
- Pages in batch: **46**
- Report file: `/home/aks/hermes-workspace/formester-site-audit/reports/batch-20260829T173130Z-025.md`
- Link results: `{"candidates": 554, "checked": 300, "from_cache": 9, "skipped_over_budget": 245}`

**Interpretation:** This export contains the current cumulative ledger, not only defects newly discovered in the latest delta. The latest batch should be used to understand what changed most recently; the individual entries below preserve historic first/last-seen timestamps and evidence.

## Summary

### By status

| Status | Count |
|---|---:|
| confirmed | 65 |
| needs-review | 150 |

### By severity

| Severity | Count |
|---|---:|
| high | 41 |
| medium | 117 |
| low | 57 |

### By issue type

| Issue type | Count |
|---|---:|
| `cross-page-limit-conflict` | 103 |
| `duplicate-title` | 46 |
| `broken-internal-link` | 27 |
| `sitemap-redirect` | 11 |
| `internal-link-redirect` | 7 |
| `template-leak` | 6 |
| `conflicting-limit-claims` | 5 |
| `canonical-mismatch` | 3 |
| `missing-meta-description` | 3 |
| `noindex-in-sitemap` | 2 |
| `stale-competitor-claim` | 1 |
| `template-marker-review` | 1 |

## Review outcome (2026-09-01, reviewed by Claude with Ankit)

Every finding below now carries a **Review verdict** line. Rollup of the 215 findings:

| Verdict | Count |
|---|---:|
| ✅ Genuine — fixed in this repo (branch `fix/audit-issues`) | 57 |
| ❌ False positive | 107 |
| 🏗️ Genuine, fix lives in the Formester app/CMS (template content/names) | 34 |
| ⏳ Stale-build artifact — self-resolves on next deploy | 10 |
| ⚠️ Detector artifact masking a real problem (soft-404 blog posts) | 4 |
| ✅ Already resolved before this review | 3 |

### False-positive patterns to fix in the audit tool

1. **Competitor caps attributed to Formester** (~60 findings): the `cross-page-limit-conflict` / `conflicting-limit-claims` detectors flag any "N responses/submissions" near the word Formester. Most quotes are competitor plan tables (Jotform, Typeform, Cognito, Wufoo, SurveyMonkey…), Google Forms' "Limit to 1 response" SETTING, or competitor plan ladders on review pages. The detector needs to attribute a cap to the entity whose table column/section it sits in.
2. **UI mockups and example data** (~10): numbers inside product mockups ("2,988 Submissions", "3 responses synced", verification codes) and example survey results ("60 responses (30%)") are not plan claims.
3. **Editorial/statistical numbers** (~8): sample-size guidance, rate-limiting advice, error-rate stats.
4. **Instructional template syntax** (6 `template-leak` findings): posts that TEACH merge tags ({{name}}, {{contact.email}}) and feature-page mockups showing autoresponder variables are intended copy, not leaked bindings.
5. **Parser artifacts** (2): "Contact Form 7 | Submission storage" parsed as a "7 submission" cap.
6. **Redirect pairs double-counted** (~18 `duplicate-title`): when a sitemap URL 301s to another sitemap URL, the crawler scans the same page twice and reports a duplicate title. Dedupe by final URL.
7. **By-design redirects** (2 `internal-link-redirect`): app login redirect and the Slack OAuth install endpoint must not be flagged.

### Genuine issues that need action outside this repo

- **Formester app (templates data):** 9 template pairs share names (apparel/hotel-booking/marketing/travel/sponsorship/volunteer/rental + the mis-named `construction-job-application-form-copy-17478` and misspelled `rentel-application-form-4191`); `lightsaber-color-quiz` exists twice in templates.json; template BODY content contains dead links (`/features/csv-export`, `/features/file-upload`, `/features/scheduler`, `/form-builder`, `/gdpr`, `/templates/interview-scorecard`, …) and stale "100 submissions/month free" FAQ boilerplate (return-authorization templates).
- **Content decision:** 4 blog URLs live in the sitemap but were never migrated to `content/blog` and now serve soft-404 shells: `behavioral-interview-questions`, `mentimeter-alternatives`, `how-to-pre-fill-forms-using-google-sheets-and-formester`, `top-5-typeform-alternatives-in-2023-…`. Restore or 301 them.
- **Roadmap:** `/google-forms-alternative`, `/microsoft-forms-alternative`, `/forms-app-alternative` never existed but were linked from the footer, nav tiles and ~20 posts (links now removed/repointed). Building them — especially the Google Forms one — would reclaim a lot of internal linking.

## Remediation rules for an AI

1. Start with **confirmed high-severity** findings, but verify the current live page before editing; this is an audit ledger, not a write authorization.
2. For **needs-review**, inspect the quoted evidence in context. Several detector signals can be legitimate instructional code, competitor data, or third-party limits rather than Formester claims.
3. Do not convert a URL, pricing claim, redirect, canonical, or product capability merely from inference. Verify against the CMS/app source of truth and preserve SEO migration safeguards (redirects, canonical, sitemap, internal links).
4. After each repair, re-fetch the affected public URL and record whether the observation is gone. Keep unresolved findings open with an owner and a next verification date.

## Full finding ledger

The following **215** entries are sorted: confirmed first, then high → medium → low, then type and URL.

### 1. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/ai-form-builder
- **Finding key:** `df97d76aa3eaebb7`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T19:08:46Z`
- **Last seen:** `2026-08-02T19:08:46Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/integrations/gohighlevel (anchor: 'AI form builder')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — /ai-form-builder 404s (page never existed; the live page is /ai-form-generator). Fixed: link in pages/integrations/gohighlevel.vue now points to /ai-form-generator/.

### 2. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/blog/google-forms-vs-jotform
- **Finding key:** `db604dd28d6ce4c3`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T17:02:47Z`
- **Last seen:** `2026-08-02T17:02:47Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/blog/how-to-embed-a-google-form (anchor: 'Google Forms vs Jotform comparison')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — old short slug 404s; the post lives at /blog/google-forms-vs-jotform-the-comparison-everyone-asked-for/. Fixed in content/blog/how-to-embed-a-google-form.md.

### 3. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/blog/how-to-create-a-quiz-in-google-forms
- **Finding key:** `8b70b240bcd7b84c`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T17:02:48Z`
- **Last seen:** `2026-08-02T17:02:48Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/blog/how-to-embed-a-google-form (anchor: 'quizzes built in Google Forms')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — old short slug 404s; post lives at /blog/how-to-create-a-quiz-in-google-forms-the-only-guide-youll-need-in-2023/. Fixed in content/blog/how-to-embed-a-google-form.md.

### 4. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/blog/how-to-create-google-sheets-api-and-use-as-live-backend
- **Finding key:** `78d79940266f0d1a`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T15:59:54Z`
- **Last seen:** `2026-08-02T18:05:44Z`
- **Occurrences:** 3
- **Last batch:** `batch-20260802T180405Z-009`
- **Batches recorded:** 3
- **Evidence:**
- linked from: https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics (anchor: 'Google Sheets API as live backendHow-to blog\n→')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — that post was never migrated to content/blog and 404s. Fixed by removing the two related-post cards that linked it (content/blog/google-forms-to-google-sheets.md, content/blog/how-to-send-contact-form-data-to-google-sheets-free.md).

### 5. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/blog/integrating-google-forms-google-sheets
- **Finding key:** `b4b1b614152b4ec3`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T17:02:56Z`
- **Last seen:** `2026-08-02T17:02:56Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/blog/how-to-embed-a-google-form (anchor: 'connect Google Forms to Sheets')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — old slug of the Sheets post. Fixed in content/blog/how-to-embed-a-google-form.md → /blog/google-forms-to-google-sheets/. Also fixed a 4th dead link on that page the audit missed (/features/share-embed/ → /features/embed-forms/).

### 6. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/csv-export
- **Finding key:** `f4c2c24ea856a87c`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T02:29:50Z`
- **Last seen:** `2026-08-03T02:29:50Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/job-fair-signup-sheet (anchor: 'export to CSV')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. /features/csv-export never existed. The link is in the job-fair-signup-sheet template's CMS body. Point it at /features/form-analytics/ (mentions one-click CSV export).

### 7. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/email-notifications
- **Finding key:** `69745068b1caf73a`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T02:29:52Z`
- **Last seen:** `2026-08-03T02:29:52Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/job-fair-signup-sheet (anchor: 'Slack or email')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /features/email-notification-for-form-submission/ — update the template body link in the app.

### 8. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/file-upload
- **Finding key:** `b4368b3beb71a09f`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T20:11:48Z`
- **Last seen:** `2026-08-03T05:44:50Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260803T054311Z-020`
- **Batches recorded:** 9
- **Evidence:**
- linked from: https://formester.com/templates/teacher-job-application-form (anchor: 'file upload'); https://formester.com/templates/twitch-mod-application-form (anchor: 'file upload')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /features/file-upload-forms/ — update in template bodies (teacher-job-application-form, twitch-mod-application-form, etc.).

### 9. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/gdpr-compliant-forms
- **Finding key:** `d8c859943c9cf53c`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T19:08:47Z`
- **Last seen:** `2026-08-02T19:08:47Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/blog/website-and-form-design-trends (anchor: 'GDPR-compliant data handling')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — /features/gdpr-compliant-forms never existed. Fixed both links in content/blog/website-and-form-design-trends.md → /security/.

### 10. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/google-sheets-integration
- **Finding key:** `f8b52d3b7e1a0693`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T02:29:53Z`
- **Last seen:** `2026-08-03T02:29:53Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/job-fair-signup-sheet (anchor: 'Google Sheets')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /integrations/google-sheets/ — update the job-fair-signup-sheet template body.

### 11. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/hubspot-integration
- **Finding key:** `8a800a62c6d63980`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T02:29:54Z`
- **Last seen:** `2026-08-03T02:29:54Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/job-fair-signup-sheet (anchor: 'HubSpot')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /integrations/hubspot/ — update the template body.

### 12. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/integrations
- **Finding key:** `0fc1139b2e172b9c`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T00:23:50Z`
- **Last seen:** `2026-08-03T00:23:50Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T002208Z-015`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/customer-visit-record-form-template-1785 (anchor: "Formester's integrations"); https://formester.com/templates/customer-visit-report-form (anchor: "Formester's integrations")
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /integrations/ — update the customer-visit template bodies.

### 13. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/online-order-form
- **Finding key:** `0a79fa8af5efedf9`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T19:08:48Z`
- **Last seen:** `2026-08-02T20:11:48Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 2
- **Evidence:**
- linked from: https://formester.com/integrations/monday (anchor: 'online order form')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — live page is /features/product-order-form/. Fixed in pages/integrations/monday.vue and pages/integrations/gohighlevel.vue.

### 14. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/payments
- **Finding key:** `67e59afb11f946ee`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T18:06:13Z`
- **Last seen:** `2026-08-03T01:26:49Z`
- **Occurrences:** 3
- **Last batch:** `batch-20260803T012509Z-016`
- **Batches recorded:** 3
- **Evidence:**
- linked from: https://formester.com/templates/free-gym-registration-form (anchor: 'Online Payments'); https://formester.com/templates/gym-registration-form-1896 (anchor: 'Online Payments')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — live page is /features/online-payments/. Fixed the repo instance (content/blog/registration-forms-101-…md). The gym-template links are CMS-side: update them in the app.

### 15. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/pdf-export
- **Finding key:** `48e9920521513738`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-08T17:31:47Z`
- **Last seen:** `2026-08-15T17:32:19Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 2
- **Evidence:**
- linked from: https://formester.com/consent-form-generator (anchor: 'Learn more-->')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — live page is /features/export-form-submission-pdf/. Fixed both links in pages/consent-form-generator.vue.

### 16. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/qr-code-forms
- **Finding key:** `b4dadda6e863b5df`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-03T06:46:07Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T064512Z-021`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/yoga-class-registration-form (anchor: 'share a QR code')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /features/qr-code-generator/ — update the yoga-class-registration-form template body.

### 17. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/scheduler
- **Finding key:** `2ba765e19c6401dc`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T20:11:49Z`
- **Last seen:** `2026-08-02T20:11:49Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/blood-donation-form (anchor: 'scheduler field')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /features/appointment-scheduler/ — update the blood-donation-form template body.

### 18. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/features/webhooks
- **Finding key:** `2a1d651d107beaa0`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T20:11:50Z`
- **Last seen:** `2026-08-03T02:29:54Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 2
- **Evidence:**
- linked from: https://formester.com/templates/logistics-inquiry-form (anchor: 'webhooks')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Live page is /integrations/webhook/ — update the logistics-inquiry-form template body.

### 19. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/form-builder
- **Finding key:** `cc5f7fc21fa45d1f`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T19:08:49Z`
- **Last seen:** `2026-08-03T06:46:07Z`
- **Occurrences:** 8
- **Last batch:** `batch-20260803T064512Z-021`
- **Batches recorded:** 8
- **Evidence:**
- linked from: https://formester.com/templates/yoga-class-registration-form (anchor: 'Form Builder')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. /form-builder never existed — point template-body links at /features/drag-and-drop-form-builder/ (or the homepage).

### 20. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/forms-app-alternative
- **Finding key:** `796af9f3b1ef1f04`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T18:06:15Z`
- **Last seen:** `2026-08-15T17:32:31Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 6
- **Evidence:**
- linked from: https://formester.com/contact-form-7-alternative (anchor: 'forms.app alternative\n Best for EU teams who want ISO 27001 hosting in Belgium and AI features.\n Compare →'); https://formester.com/surveysparrow-alternative (anchor: 'forms.app alternative\n Best for EU teams who want ISO 27001 hosting in Belgium and AI features.\n Compare →'); https://formester.com/fillout-alternative (anchor: 'forms.app alternative\n Best for EU teams who want ISO 27001 hosting in Belgium and AI features.\n Compare →'); https://formester.com/123formbuilder-alternative (anchor: 'forms.app alternative\n Best for EU teams who want ISO 27001 hosting in Belgium and AI features.\n Compare →'); https://formester.com/qualtrics-alternative (anchor: 'forms.app alternative\n Best for EU teams who want ISO 27001 hosting in Belgium and AI features.\n Compare →')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — page never existed in the repo (planned but never built). Removed the dead 'forms.app alternative' tiles/footer links site-wide and unlinked the one blog mention. Longer-term: build /forms-app-alternative and restore the links.

### 21. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/gdpr
- **Finding key:** `ff2226f09cbe06b4`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T01:26:50Z`
- **Last seen:** `2026-08-03T01:26:50Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T012509Z-016`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/hospital-discharge-form-template (anchor: 'GDPR')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. /gdpr never existed — point the hospital-discharge-form template link at /security/.

### 22. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/google-forms-alternative
- **Finding key:** `210f7db6ba6fc249`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T14:39:38Z`
- **Last seen:** `2026-08-15T17:32:32Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 10
- **Evidence:**
- linked from: https://formester.com/contact-form-7-alternative (anchor: 'Google Forms alternative\n Best for free internal Google Workspace use with Sheets as the destination.\n Compare →'); https://formester.com/surveysparrow-alternative (anchor: 'Google Forms alternative\n Best for free internal Google Workspace use with Sheets as the destination.\n Compare →'); https://formester.com/fillout-alternative (anchor: 'Google Forms alternative\n Best for free internal Google Workspace use with Sheets as the destination.\n Compare →'); https://formester.com/123formbuilder-alternative (anchor: 'Google Forms alternative\n Best for free internal Google Workspace use with Sheets as the destination.\n Compare →'); https://formester.com/qualtrics-alternative (anchor: 'Google Forms alternative\n Best for free internal Google Workspace use with Sheets as the destination.\n Compare →')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — page never existed (heavily linked though: footer, tiles, ~20 blog posts). Removed footer/tile links; repointed blog links to /blog/why-formester-is-the-best-google-forms-alternative/. Recommend building /google-forms-alternative — it has by far the most internal demand.

### 23. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/microsoft-forms-alternative
- **Finding key:** `9719ed556cf6ad23`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T14:39:52Z`
- **Last seen:** `2026-08-15T17:32:47Z`
- **Occurrences:** 8
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 8
- **Evidence:**
- linked from: https://formester.com/contact-form-7-alternative (anchor: 'Microsoft Forms alternative\n Best for Microsoft 365 teams who already pay for the suite.\n Compare →'); https://formester.com/surveysparrow-alternative (anchor: 'Microsoft Forms alternative\n Best for Microsoft 365 teams who already pay for the suite.\n Compare →'); https://formester.com/fillout-alternative (anchor: 'Microsoft Forms alternative\n Best for Microsoft 365 teams who already pay for the suite.\n Compare →'); https://formester.com/123formbuilder-alternative (anchor: 'Microsoft Forms alternative\n Best for Microsoft 365 teams who already pay for the suite.\n Compare →'); https://formester.com/qualtrics-alternative (anchor: 'Microsoft Forms alternative\n Best for Microsoft 365 teams who already pay for the suite.\n Compare →')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — page never existed. Same treatment: tiles/footer removed, blog links repointed to /blog/best-microsoft-forms-alternative/. Recommend building the page.

### 24. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/survey-maker
- **Finding key:** `6913fc2f4a2555f9`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T18:06:18Z`
- **Last seen:** `2026-08-02T18:06:18Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T180405Z-009`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/blog/must-have-demographic-questions-for-survey (anchor: 'Formester\nNo-code survey maker\nDrag and drop builder with native conditional logic and "Prefer not to say" on every field.\nOpen')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — live page is /online-survey-maker/. Fixed in content/blog/must-have-demographic-questions-for-survey.md.

### 25. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/templates/categories/surveys
- **Finding key:** `aa1635071f940ea6`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-02T19:09:19Z`
- **Last seen:** `2026-08-02T19:09:19Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/features/embed-form-in-email (anchor: 'See email-form templates')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — live category slug is survey-forms. Fixed in pages/features/embed-form-in-email.vue → /templates/categories/survey-forms/.

### 26. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/templates/interview-scorecard
- **Finding key:** `d4e036d75db1a351`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-03T01:26:52Z`
- **Last seen:** `2026-08-03T01:26:52Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T012509Z-016`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/interview-form-template (anchor: 'Formester Interview Scorecard')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. /templates/interview-scorecard doesn't exist (no scorecard template in the app). Update the interview-form-template body to link an existing template or drop the link.

### 27. [confirmed · high] `broken-internal-link`

- **URL:** https://formester.com/templates/job-application-form-template
- **Finding key:** `12da07cff5b5496b`
- **Observed:** HTTP 404
- **Recommendation:** Fix or remove the link; update the anchor to the live destination.
- **First seen:** `2026-08-15T17:33:19Z`
- **Last seen:** `2026-08-15T17:33:19Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/form-management-software (anchor: 'Job Application Form TemplateFree hiring form with scoring built in.'); https://formester.com/legal-form-management-software (anchor: 'Job Application Form TemplateFree hiring form with scoring built in.')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — no template with that slug. Fixed in pages/form-management-software.vue and pages/legal-form-management-software.vue → /templates/job-application-form-2450/ (live, verified 200).

### 28. [confirmed · high] `conflicting-limit-claims`

- **URL:** https://formester.com/blog/best-conversational-form-builder
- **Finding key:** `299aeaf4bb3f682b`
- **Observed:** "unlimited responses" vs "1,000 responses a month" both attributed to Formester
- **Recommendation:** Reconcile the copy: the same page promises an unlimited allowance and states a numeric cap.
- **First seen:** `2026-08-22T17:30:42Z`
- **Last seen:** `2026-08-22T17:30:42Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260822T173040Z-024`
- **Batches recorded:** 1
- **Evidence:**
- unlimited claim: …of this list before you compare features. The 60-second TL;DR Best card-style forms without caps: Formester, unlimited responses free Best conversational experience: Typeform, from $39/mo Best true chatbot builder: Landbot, from $45/mo Be…
- numeric cap: …Best for: brands where the form experience reflects on the company. The catch: volume gets expensive fast. At 1,000 responses a month you are on Plus at $79, where Formester charges nothing. G2 rating: 4.5/5, from 1,017 reviews. A large base,…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '1,000 responses a month … Plus at $79' is TYPEFORM's cap; the sentence says Formester charges nothing at that volume. Both quotes are consistent with Formester's unlimited-responses free plan. Detector attributed a competitor's cap to Formester because the brand name appears in the same sentence.

### 29. [confirmed · high] `conflicting-limit-claims`

- **URL:** https://formester.com/blog/best-drag-and-drop-form-builder
- **Finding key:** `6b75d8a1c6bda8e7`
- **Observed:** "unlimited responses" vs "1,000 responses a month" both attributed to Formester
- **Recommendation:** Reconcile the copy: the same page promises an unlimited allowance and states a numeric cap.
- **First seen:** `2026-08-22T17:30:44Z`
- **Last seen:** `2026-08-22T17:30:44Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260822T173040Z-024`
- **Batches recorded:** 1
- **Evidence:**
- unlimited claim: …sits behind a paid tier. The nine below are ordered on that. The 60-second TL;DR Best all-around: Formester, unlimited responses on the free plan Best for feature depth: Jotform, from $39/mo Best for Airtable and Notion teams: Fillout, fr…
- numeric cap: …,000 responses/mo Best for: qualitative surveys where a completed response is worth real money. The catch: at 1,000 responses a month you are on Plus at $79, where Formester charges nothing for the same volume. G2 rating: 4.5/5, from 1,017 rev…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — same pattern as #28: the numeric cap is Typeform's Plus-tier trigger, not a Formester limit.

### 30. [confirmed · high] `conflicting-limit-claims`

- **URL:** https://formester.com/blog/best-html-form-builder
- **Finding key:** `7e179b1925d65fb2`
- **Observed:** "unlimited responses" vs "500 submissions/month" both attributed to Formester
- **Recommendation:** Reconcile the copy: the same page promises an unlimited allowance and states a numeric cap.
- **First seen:** `2026-08-02T15:58:10Z`
- **Last seen:** `2026-08-02T15:58:10Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T155753Z-007`
- **Batches recorded:** 1
- **Evidence:**
- unlimited claim: …pdates pricing after this date. The 60-second TL;DR Best all-around for hosted forms + HTML embed: Formester, unlimited responses free + one-line embed Best pure form endpoint for developers: Formspree, POST to a URL, done Best for JAMstac…
- numeric cap: …What is the best free HTML form builder? Formester (hosted, unlimited responses on free) or Basin (endpoint, 500 submissions/month on free). Depends on whether you want to write HTML yourself. Do I need a server for HTML forms? No. Both hos…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '500 submissions/month' is BASIN's free tier, explicitly attributed in the quoted FAQ ('or Basin (endpoint, 500 submissions/month on free)').

### 31. [confirmed · high] `conflicting-limit-claims`

- **URL:** https://formester.com/cognito-forms-alternative
- **Finding key:** `e5d81c050d09e79d`
- **Observed:** "unlimited responses" vs "100 entries a month" both attributed to Formester
- **Recommendation:** Reconcile the copy: the same page promises an unlimited allowance and states a numeric cap.
- **First seen:** `2026-08-22T17:31:39Z`
- **Last seen:** `2026-08-22T17:31:39Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260822T173040Z-024`
- **Batches recorded:** 1
- **Evidence:**
- unlimited claim: …ine tie. What differs is what it costs to get there: Formester includes it on the $49 Business plan alongside unlimited responses, while Cognito's connector needs Pro or above with entries still metered. MCP server Let Claude, ChatGPT, or…
- numeric cap: …ing real volume. Unlimited responses at $0 No entry meter on any Formester plan. Cognito's free tier stops at 100 entries a month and Pro at 2,000. Full styling without Enterprise Themes, custom CSS, and your branding kit on paid plans. Co…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '100 entries a month' is COGNITO's free tier ('Cognito's free tier stops at 100 entries a month'). The page is making exactly the opposite claim about Formester.

### 32. [confirmed · high] `conflicting-limit-claims`

- **URL:** https://formester.com/contact-form-7-alternative
- **Finding key:** `b2f72e30678d07c1`
- **Observed:** "unlimited forms" vs "7 form" both attributed to Formester
- **Recommendation:** Reconcile the copy: the same page promises an unlimited allowance and states a numeric cap.
- **First seen:** `2026-08-15T17:31:19Z`
- **Last seen:** `2026-08-15T17:31:19Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 1
- **Evidence:**
- unlimited claim: …er vs Contact Form 7: free plans compared Where the two free tiers give, and where they take. Formester ships unlimited forms, unlimited responses, and payment collection on the free tier; Contact Form 7 does not. Feature Winner For…
- numeric cap: …or Sign up for Formester (free, no card). Open the AI form generator, paste a description of the Contact Form 7 form, or upload the questions list. The generator drafts the structure with field types, validation, and condition…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — parser artifact: the detector read 'Contact Form 7 | Submission storage' (a table header naming the product 'Contact Form 7') as '7 form(s)'. No numeric Formester cap on the page.

### 33. [confirmed · high] `noindex-in-sitemap`

- **URL:** https://formester.com/preview
- **Finding key:** `413d97ecd5bbf589`
- **Observed:** meta robots="noindex, nofollow" on a sitemap URL
- **Recommendation:** Decide one way: either remove the noindex or remove the URL from sitemap.xml. Both together is a contradictory signal to crawlers.
- **First seen:** `2026-08-02T20:10:43Z`
- **Last seen:** `2026-08-02T20:10:43Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- URL appears in https://formester.com/sitemap.xml
- page emits <meta name="robots" content="noindex, nofollow">
- **Review verdict (2026-09-01, Claude):** ✅ Was genuine — already resolved before this review: /preview is excluded from sitemap generation (utils/getRoutes.js PAGE_SKIP_FILES) and the current live sitemap no longer contains it. The noindex is intentional — it's an internal draft-preview page.

### 34. [confirmed · high] `noindex-in-sitemap`

- **URL:** https://formester.com/template-preview
- **Finding key:** `964106579a9c0f76`
- **Observed:** meta robots="noindex, nofollow" on a sitemap URL
- **Recommendation:** Decide one way: either remove the noindex or remove the URL from sitemap.xml. Both together is a contradictory signal to crawlers.
- **First seen:** `2026-08-02T20:10:52Z`
- **Last seen:** `2026-08-02T20:10:52Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- URL appears in https://formester.com/sitemap.xml
- page emits <meta name="robots" content="noindex, nofollow">
- **Review verdict (2026-09-01, Claude):** ✅ Was genuine — already resolved before this review: same as #33 for /template-preview.

### 35. [confirmed · high] `stale-competitor-claim`

- **URL:** https://formester.com/jotform-alternative
- **Finding key:** `d9a1e13482a2b35b`
- **Observed:** Page states that Jotform has no MCP server; Jotform now publicly documents its remote MCP server at https://mcp.jotform.com, with OAuth connections for ChatGPT and Claude.
- **Recommendation:** Update the Jotform comparison to acknowledge its MCP server; remove Formester-only positioning and reframe the comparison around verified implementation, access, workflow, or pricing differences.
- **First seen:** `2026-08-09T02:27:40Z`
- **Last seen:** `2026-08-09T02:27:40Z`
- **Occurrences:** 1
- **Last batch:** `manual-research-20260808-jotform-mcp`
- **Batches recorded:** 1
- **Evidence:**
- Formester page, observed 2026-08-08: comparison table says 'MCP server for AI agents | Yes (Business) | No' and developer/AI table says 'MCP server (Claude / ChatGPT / agents) | Yes (Business) | No'.
- Jotform official MCP documentation, checked 2026-08-08: https://www.jotform.com/mcp/ — documents remote MCP endpoint https://mcp.jotform.com, OAuth authorization, and ChatGPT/Claude connectors.
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — Jotform does now ship a remote MCP server (mcp.jotform.com). Fixed 4 spots in pages/jotform-alternative.vue: both comparison-table rows now say Jotform has a remote MCP, and the two prose claims ('no MCP server' / 'no MCP') were rewritten.

### 36. [confirmed · high] `template-leak`

- **URL:** https://formester.com/blog/how-to-mail-merge-in-gmail-using-google-sheets
- **Finding key:** `625be15cecaf9f4b`
- **Observed:** handlebars/mustache expression: "{{First Name}}"
- **Recommendation:** Fix the template binding so the placeholder renders real content before it ships.
- **First seen:** `2026-08-02T17:02:05Z`
- **Last seen:** `2026-08-02T17:02:05Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- …h a star so the add-on can find it. In the draft, use your Sheet column names inside double curly braces. "Hi {{First Name}}" becomes "Hi Sarah" for the row where First Name is Sarah. Back in the Sheet, open Extensions, Yet Another Ma…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — intentional instructional copy: the post teaches Gmail mail-merge and shows the merge-tag syntax ('Hi {{First Name}}' becomes 'Hi Sarah'). Not a broken binding.

### 37. [confirmed · high] `template-leak`

- **URL:** https://formester.com/blog/how-to-pre-fill-form-fields-by-url-parameters
- **Finding key:** `807b2177a49d1f5a`
- **Observed:** handlebars/mustache expression: "{{contact.email}}"
- **Recommendation:** Fix the template binding so the placeholder renders real content before it ships.
- **First seen:** `2026-08-02T17:02:22Z`
- **Last seen:** `2026-08-02T17:02:22Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- …ert merge tags from your CRM or email tool Replace [value] with the merge-tag syntax your tool uses. HubSpot: {{contact.email}}. Mailchimp: *|EMAIL|*. ActiveCampaign: %EMAIL%. The tool substitutes each recipient's data when sending. 4 Te…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — intentional: the post lists each CRM's merge-tag syntax (HubSpot {{contact.email}}, Mailchimp *|EMAIL|*, ActiveCampaign %EMAIL%). Educational content.

### 38. [confirmed · high] `template-leak`

- **URL:** https://formester.com/blog/how-to-setup-auto-email-response-on-form-submissions
- **Finding key:** `a7bef14ab94856f1`
- **Observed:** handlebars/mustache expression: "{{name}}"
- **Recommendation:** Fix the template binding so the placeholder renders real content before it ships.
- **First seen:** `2026-08-02T17:02:34Z`
- **Last seen:** `2026-08-02T17:02:34Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- …the add-on settings. 2 Write the email body with merge tags Compose the subject and body. Use merge tags like {{name}} and {{email}} to pull form values into the email. Example: 'Hi {{first_name}}, thanks for submitting!' 3 Set…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — intentional: the post shows autoresponder merge tags ({{name}}, {{email}}) as the thing the reader should type.

### 39. [confirmed · high] `template-leak`

- **URL:** https://formester.com/features/appointment-scheduler
- **Finding key:** `32b7985372b204d4`
- **Observed:** handlebars/mustache expression: "{{first-name}}"
- **Recommendation:** Fix the template binding so the placeholder renders real content before it ships.
- **First seen:** `2026-08-02T19:07:43Z`
- **Last seen:** `2026-08-02T19:07:43Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- …il? By default, a clean confirmation with the slot details. Edit the autoresponder to use any form field: "Hi {{first-name}}, your {{service-type}} on {{slot-date}} is confirmed. {{custom-instructions}}." Variables pull from the actua…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — intentional FAQ example on pages/features/appointment-scheduler.vue showing which variables the autoresponder accepts. Rendering them literally is the point.

### 40. [confirmed · high] `template-leak`

- **URL:** https://formester.com/features/auto-fill-forms-with-external-data
- **Finding key:** `d63e3ca61586b430`
- **Observed:** js template literal: "${id}"
- **Recommendation:** Fix the template binding so the placeholder renders real content before it ships.
- **First seen:** `2026-08-02T19:07:44Z`
- **Last seen:** `2026-08-02T19:07:44Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- …Custom AirtableGoogle SheetsNotionCustom const id = values['employee_id']const rec = await fetch(`/api/staff/${id}`)return await rec.json()// just fetch & return — fields recall it with @ Trigger fieldEmployee ID· fetches wh…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — intentional code sample in the feature mockup on pages/features/auto-fill-forms-with-external-data.vue (a fetch() template literal). It's demo code, not a leaked binding.

### 41. [confirmed · high] `template-leak`

- **URL:** https://formester.com/features/form-abandonment-recovery
- **Finding key:** `e34c18d909247b1c`
- **Observed:** handlebars/mustache expression: "{{first_name}}"
- **Recommendation:** Fix the template binding so the placeholder renders real content before it ships.
- **First seen:** `2026-08-02T19:08:04Z`
- **Last seen:** `2026-08-02T19:08:04Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- …b. Variables for first_name, form_name, and resume_link are wired in automatically. Build Automate Publish Hi {{first_name}}, Your {{form_name}} is almost done. {{resume_link}} Try it on the Business plan Where this changes the funnel…
- **Review verdict (2026-09-01, Claude):** ❌ False positive — intentional product mockup on pages/features/form-abandonment-recovery.vue showing the recovery-email template with its variables. The surrounding copy explains the variables are wired in.

### 42. [confirmed · medium] `canonical-mismatch`

- **URL:** https://formester.com/plugins/slack-forms
- **Finding key:** `59f82d8f570c8a2c`
- **Observed:** canonical https://formester.com/ != final URL https://formester.com/plugins/slack-forms
- **Recommendation:** Point the canonical at this page's own final URL, or remove the duplicate from the sitemap.
- **First seen:** `2026-08-02T20:10:38Z`
- **Last seen:** `2026-08-02T20:10:38Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- rel=canonical raw value: 'https://formester.com/'
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — root cause: nuxt.config.js shipped a global DEFAULT canonical hard-coded to https://formester.com/, so every page without its own canonical canonicalized to the homepage. Fixed: default removed from nuxt.config.js; app.vue now emits a per-route self-canonical (pages with their own tag still override it). slack-forms also got its own title/meta (see #63).

### 43. [confirmed · medium] `canonical-mismatch`

- **URL:** https://formester.com/preview
- **Finding key:** `f13a092536b5337f`
- **Observed:** canonical https://formester.com/ != final URL https://formester.com/preview
- **Recommendation:** Point the canonical at this page's own final URL, or remove the duplicate from the sitemap.
- **First seen:** `2026-08-02T20:10:43Z`
- **Last seen:** `2026-08-02T20:10:43Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- rel=canonical raw value: 'https://formester.com/'
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — same root cause as #42, fixed by the per-route default canonical. Low impact in practice since /preview is noindexed.

### 44. [confirmed · medium] `canonical-mismatch`

- **URL:** https://formester.com/template-preview
- **Finding key:** `cb6aeb68bb52079a`
- **Observed:** canonical https://formester.com/ != final URL https://formester.com/template-preview
- **Recommendation:** Point the canonical at this page's own final URL, or remove the duplicate from the sitemap.
- **First seen:** `2026-08-02T20:10:52Z`
- **Last seen:** `2026-08-02T20:10:52Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- rel=canonical raw value: 'https://formester.com/'
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — same as #43 for /template-preview.

### 45. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics
- **Finding key:** `7bf60d2540fc2d09`
- **Observed:** https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics -> https://formester.com/blog/google-forms-to-google-sheets
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-02T18:04:16Z`
- **Last seen:** `2026-08-02T18:04:16Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T180405Z-009`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics ended at https://formester.com/blog/google-forms-to-google-sheets (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: the old markdown file no longer exists in content/blog, and the sitemap is built from disk — the deployed sitemap.xml simply predates the cleanup. Re-verify after the next deploy.

### 46. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/customer-visit-record-form-template-1785
- **Finding key:** `72e893fc649af874`
- **Observed:** https://formester.com/templates/customer-visit-record-form-template-1785 -> https://formester.com/templates/customer-visit-report-form
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T00:22:12Z`
- **Last seen:** `2026-08-03T00:22:12Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T002208Z-015`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/customer-visit-record-form-template-1785 ended at https://formester.com/templates/customer-visit-report-form (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 47. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/employee-laptop-agreement-form-2806
- **Finding key:** `2a9497c025855c5a`
- **Observed:** https://formester.com/templates/employee-laptop-agreement-form-2806 -> https://formester.com/templates/employee-laptop-agreement-form
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T00:23:12Z`
- **Last seen:** `2026-08-03T00:23:12Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T002208Z-015`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/employee-laptop-agreement-form-2806 ended at https://formester.com/templates/employee-laptop-agreement-form (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 48. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/gym-registration-form-1896
- **Finding key:** `a412cabe7924b724`
- **Observed:** https://formester.com/templates/gym-registration-form-1896 -> https://formester.com/templates/free-gym-registration-form
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T01:26:00Z`
- **Last seen:** `2026-08-03T01:26:00Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T012509Z-016`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/gym-registration-form-1896 ended at https://formester.com/templates/free-gym-registration-form (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 49. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/lightsaber-color-quiz-7478
- **Finding key:** `e09b4cf39dae58aa`
- **Observed:** https://formester.com/templates/lightsaber-color-quiz-7478 -> https://formester.com/templates/lightsaber-color-quiz
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T02:28:36Z`
- **Last seen:** `2026-08-03T02:28:36Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/lightsaber-color-quiz-7478 ended at https://formester.com/templates/lightsaber-color-quiz (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — templates.json STILL returns BOTH 'lightsaber-color-quiz' and 'lightsaber-color-quiz-7478', so the sitemap will keep listing the redirecting slug even after a redeploy. Remove/merge the duplicate template entry in the Formester app.

### 50. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/magazine-quiz-27610
- **Finding key:** `19a996b6ea83dc02`
- **Observed:** https://formester.com/templates/magazine-quiz-27610 -> https://formester.com/templates/magazine-quiz-template
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T02:28:41Z`
- **Last seen:** `2026-08-03T02:28:41Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/magazine-quiz-27610 ended at https://formester.com/templates/magazine-quiz-template (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 51. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/online-doctors-appointment-form-1876
- **Finding key:** `d975a2c3bf3b3f14`
- **Observed:** https://formester.com/templates/online-doctors-appointment-form-1876 -> https://formester.com/templates/online-doctors-appointment-form
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T02:29:34Z`
- **Last seen:** `2026-08-03T02:29:34Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T022810Z-017`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/online-doctors-appointment-form-1876 ended at https://formester.com/templates/online-doctors-appointment-form (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 52. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/property-enquiry-form-1893
- **Finding key:** `9675c55ace7f8dd5`
- **Observed:** https://formester.com/templates/property-enquiry-form-1893 -> https://formester.com/templates/property-enquiry-form
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T04:40:38Z`
- **Last seen:** `2026-08-03T04:40:38Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T044008Z-019`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/property-enquiry-form-1893 ended at https://formester.com/templates/property-enquiry-form (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 53. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/request-a-callback-form-1882
- **Finding key:** `2fac29b0866e508b`
- **Observed:** https://formester.com/templates/request-a-callback-form-1882 -> https://formester.com/templates/call-back-form-template
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T04:41:00Z`
- **Last seen:** `2026-08-03T04:41:00Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T044008Z-019`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/request-a-callback-form-1882 ended at https://formester.com/templates/call-back-form-template (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 54. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/uncover-your-inner-you-4124
- **Finding key:** `3c5b47f357f7a53c`
- **Observed:** https://formester.com/templates/uncover-your-inner-you-4124 -> https://formester.com/templates/fun-personality-quiz
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T05:44:29Z`
- **Last seen:** `2026-08-03T05:44:29Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T054311Z-020`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/uncover-your-inner-you-4124 ended at https://formester.com/templates/fun-personality-quiz (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 55. [confirmed · medium] `sitemap-redirect`

- **URL:** https://formester.com/templates/video-consent-form-2491
- **Finding key:** `8ae0799a1f58a23f`
- **Observed:** https://formester.com/templates/video-consent-form-2491 -> https://formester.com/templates/video-consent-form
- **Recommendation:** Update sitemap.xml to list the final destination URL directly instead of a redirecting URL.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-03T05:44:50Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T054311Z-020`
- **Batches recorded:** 1
- **Evidence:**
- GET https://formester.com/templates/video-consent-form-2491 ended at https://formester.com/templates/video-consent-form (HTTP 200)
- sitemap.xml lists the pre-redirect URL
- **Review verdict (2026-09-01, Claude):** ⏳ Genuine at scan time — stale-build artifact, resolves on next deploy: app.formester.com/templates.json no longer returns the old slug; the deployed sitemap predates that cleanup.

### 56. [confirmed · low] `internal-link-redirect`

- **URL:** https://app.formester.com/
- **Finding key:** `237f1a8a726229a9`
- **Observed:** https://app.formester.com/ -> https://app.formester.com/users/sign_in (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-02T17:02:45Z`
- **Last seen:** `2026-08-02T18:05:44Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260802T180405Z-009`
- **Batches recorded:** 2
- **Evidence:**
- linked from: https://formester.com/blog/mobile-forms-vs-desktop-forms-pros-cons-of-each-form-type (anchor: 'Formester')
- **Review verdict (2026-09-01, Claude):** ❌ False positive (by design) — app.formester.com/ redirecting logged-out visitors to /users/sign_in is the intended auth flow, not a link to 'fix'.

### 57. [confirmed · low] `internal-link-redirect`

- **URL:** https://app.formester.com/slack/oauth/install
- **Finding key:** `179cd88bc88083a1`
- **Observed:** https://app.formester.com/slack/oauth/install -> https://slack.com/oauth/v2/authorize?client_id=213440701426.11064342321668&redirect_uri=https%3A%2F%2Fapp.formester.com%2Fslack%2Foauth%2Fcallback&scope=chat%3Awrite%2Cchat%3Awrite.public%2Cchannels%3Ajoin%2Cchannels%3Ahistory%2Cchannels%3Aread%2Cgroups%3Ahistory%2Cgroups%3Aread%2Cim%3Ahistory%2Cim%3Awrite%2Ccommands%2Cusers%3Aread&state=eyJfcmFpbHMiOnsiZGF0YSI6IjNlNDliYmFhM2U0ZjRiZmM4ZGY2Njg5NmViMWE2Njk5NjY3ZGZmNzZjNjNjNmM3ZCIsImV4cCI6IjIwMjYtMDgtMDJUMjA6MjY6NDYuOTA4WiJ9fQ%3D%3D--35565a70cd208490791ad7cbe4508edec9579b51 (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-02T20:11:47Z`
- **Last seen:** `2026-08-02T20:11:47Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/plugins/slack-forms (anchor: 'Add to Slack')
- **Review verdict (2026-09-01, Claude):** ❌ False positive (by design) — that's the Slack OAuth install endpoint; the redirect to slack.com/oauth/v2/authorize IS the feature. Must not be 'fixed'.

### 58. [confirmed · low] `internal-link-redirect`

- **URL:** https://formester.com/templates/construction-safety-violation-form-17386
- **Finding key:** `dc7af83398f515ea`
- **Observed:** https://formester.com/templates/construction-safety-violation-form-17386 -> https://formester.com/templates/construction-safety-violation-form (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-02T19:09:24Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T190704Z-010`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/inspection-form-builder (anchor: '⚠️Safety ViolationNear-miss and hazard log.Use template →')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — old slug link. Fixed in pages/inspection-form-builder.vue → /templates/construction-safety-violation-form/.

### 59. [confirmed · low] `internal-link-redirect`

- **URL:** https://formester.com/templates/magazine-quiz-27610
- **Finding key:** `87a2d0ac8ccfb870`
- **Observed:** https://formester.com/templates/magazine-quiz-27610 -> https://formester.com/templates/magazine-quiz-template (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-02T14:41:01Z`
- **Last seen:** `2026-08-15T17:33:22Z`
- **Occurrences:** 21
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 21
- **Evidence:**
- linked from: https://formester.com/contact-form-7-alternative (anchor: ''); https://formester.com/form-management-software (anchor: ''); https://formester.com/legal-form-management-software (anchor: ''); https://formester.com/surveysparrow-alternative (anchor: ''); https://formester.com/ai-form-generator (anchor: '')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — old slug in the shared nav Templates dropdown (why it showed on 21 pages). Fixed in components/nav/TemplatesDropdown.vue and components/v2/nav/TemplatesDropdown.vue → /templates/magazine-quiz-template/.

### 60. [confirmed · low] `internal-link-redirect`

- **URL:** https://formester.com/templates/tournament-registration-form-23856
- **Finding key:** `070c08ccc9e34d60`
- **Observed:** https://formester.com/templates/tournament-registration-form-23856 -> https://formester.com/templates/tournament-registration-form (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-03T01:27:18Z`
- **Last seen:** `2026-08-03T01:27:18Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260803T012509Z-016`
- **Batches recorded:** 1
- **Evidence:**
- linked from: https://formester.com/templates/football-registration-form (anchor: 'Tournament Registration Form')
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. The link is in the football-registration-form template body — update to /templates/tournament-registration-form/ in the app.

### 61. [confirmed · low] `internal-link-redirect`

- **URL:** https://formester.com/templates/uncover-your-inner-you-4124
- **Finding key:** `216ab44330f4559c`
- **Observed:** https://formester.com/templates/uncover-your-inner-you-4124 -> https://formester.com/templates/fun-personality-quiz (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-02T14:41:06Z`
- **Last seen:** `2026-08-15T17:33:29Z`
- **Occurrences:** 21
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 21
- **Evidence:**
- linked from: https://formester.com/contact-form-7-alternative (anchor: ''); https://formester.com/form-management-software (anchor: ''); https://formester.com/legal-form-management-software (anchor: ''); https://formester.com/surveysparrow-alternative (anchor: ''); https://formester.com/ai-form-generator (anchor: '')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — same nav dropdown as #59. Fixed → /templates/fun-personality-quiz/.

### 62. [confirmed · low] `internal-link-redirect`

- **URL:** https://help.formester.com/
- **Finding key:** `82198d6840a2fd04`
- **Observed:** https://help.formester.com/ -> https://help.formester.com/en (HTTP 200)
- **Recommendation:** Point the link at the final URL to avoid an extra hop.
- **First seen:** `2026-08-02T14:41:11Z`
- **Last seen:** `2026-08-15T17:33:36Z`
- **Occurrences:** 21
- **Last batch:** `batch-20260815T173119Z-023`
- **Batches recorded:** 21
- **Evidence:**
- linked from: https://formester.com/contact-form-7-alternative (anchor: ''); https://formester.com/form-management-software (anchor: ''); https://formester.com/legal-form-management-software (anchor: ''); https://formester.com/surveysparrow-alternative (anchor: ''); https://formester.com/ai-form-generator (anchor: '')
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — help.formester.com 301s to /en. Fixed in components/v2/nav/Navbar.vue → https://help.formester.com/en (this was the navbar link, hence 21 pages).

### 63. [confirmed · low] `missing-meta-description`

- **URL:** https://formester.com/plugins/slack-forms
- **Finding key:** `783d2ba16eb6afcc`
- **Observed:** no meta description
- **Recommendation:** Add a unique meta description (~150 chars).
- **First seen:** `2026-08-02T20:10:38Z`
- **Last seen:** `2026-08-02T20:10:38Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- title was: 'No-Code Online Form Builder - Formester'
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — the page had an empty <script setup> and no head at all (also caused #42/#178). Fixed: added useHead with a unique title and ~150-char meta description in pages/plugins/slack-forms.vue.

### 64. [confirmed · low] `missing-meta-description`

- **URL:** https://formester.com/preview
- **Finding key:** `84338759ea62f73d`
- **Observed:** no meta description
- **Recommendation:** Add a unique meta description (~150 chars).
- **First seen:** `2026-08-02T20:10:43Z`
- **Last seen:** `2026-08-02T20:10:43Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- title was: 'Draft Preview'
- **Review verdict (2026-09-01, Claude):** ❌ False positive in practice — /preview is noindex,nofollow and excluded from the sitemap; a meta description serves no purpose on it. No change.

### 65. [confirmed · low] `missing-meta-description`

- **URL:** https://formester.com/template-preview
- **Finding key:** `0a1df3a29871bfab`
- **Observed:** no meta description
- **Recommendation:** Add a unique meta description (~150 chars).
- **First seen:** `2026-08-02T20:10:52Z`
- **Last seen:** `2026-08-02T20:10:52Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T201005Z-011`
- **Batches recorded:** 1
- **Evidence:**
- title was: 'Template Preview'
- **Review verdict (2026-09-01, Claude):** ❌ False positive in practice — same as #64 for /template-preview.

### 66. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/123formbuilder-alternative
- **Finding key:** `4bb440fb5f0b01d7`
- **Observed:** this page states "100,000 submissions a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-08T17:31:47Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 4
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 4
- **Evidence:**
- …teways, custom form domain, advanced analytics, unlimited HTML fields. Diamond$99/mo $49.50/mo billed yearly. 100,000 submissions a month, 100 GB storage, Salesforce Marketing Cloud, data encryption. EnterpriseFrom $225 Per user per month, billed…
- unlimited claims on: https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms, https://formester.com/ai-quiz-maker
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '100,000 submissions a month' is 123FormBuilder's own Diamond plan in its pricing table, not a Formester claim.

### 67. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/ai-form-generator
- **Finding key:** `03cbf2bbdeef0fe4`
- **Observed:** this page states "1,000 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-15T17:33:37Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 3
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 3
- **Evidence:**
- …h (Workspace) What the first paid plan buys | Branding removal, conditional logic, GA4 and GTM | Higher caps: 1,000 submissions, 25 forms | Higher caps: 2,000 responses a month | More storage and admin controls Every Formester plan, incl…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-powered-multilingual-forms, https://formester.com/ai-quiz-maker
- **Review verdict (2026-09-01, Claude):** ❌ False positive — 'Higher caps: 1,000 submissions, 25 forms' is the JOTFORM column of the 'what the first paid plan buys' table on the page (verified in pages/ai-form-generator.vue:211).

### 68. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/alchemer-alternative
- **Finding key:** `18eb9efdad97d331`
- **Observed:** this page states "75,000 responses a year" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …, unlimited signatures, priority support. Sign Up Free Alchemer Collaborator$55/user/mo $315 a user a year. 75,000 responses a year per account. No offline mode, no API, and Alchemer branding stays. Professional$165/user/mo $1,075 a user a…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '75,000 responses a year' is Alchemer's Collaborator plan.

### 69. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-client-intake-form-software
- **Finding key:** `bfc68454dfa1dca7`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …ing Formester | Unlimited forms and responses | $13/mo | Form builder | 4.7/5 (14 reviews) Jotform | 5 forms, 100 submissions/mo | $39/mo | Form builder | 4.7/5 (5,426 reviews) Fillout | 1,000 responses/mo | $19/mo | Form builder | 4.6/5…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '100 submissions/mo' is the Jotform row of the comparison table; the Formester row on the same page says unlimited.

### 70. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-conversational-form-builder
- **Finding key:** `ce2da9177f0b4435`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …me | $13/mo | Unlimited forms and responses | 4.7/5 (14 reviews) Typeform | One question at a time | $39/mo | 10 responses/mo | 4.5/5 (1,017 reviews) Landbot | True chatbot with branching | $45/mo | Sandbox, 100 chats/mo | 4.7/5 (334 r…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '10 responses/mo' is the Typeform row.

### 71. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-data-collection-software
- **Finding key:** `4dff8c14d759edb8`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …orms and responses | $13/mo | General collection with offline capture | 4.7/5 (14 reviews) Jotform | 5 forms, 100 submissions/mo | $39/mo | Feature depth and templates | 4.7/5 (5,426 reviews) Typeform | 10 responses/mo | $39/mo | Qualitat…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '100 submissions/mo' is the Jotform row.

### 72. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-drag-and-drop-form-builder
- **Finding key:** `aba8b86a00224a70`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ing Formester | Unlimited forms and responses | $13/mo | Modern, fast preview | 4.7/5 (14) Jotform | 5 forms, 100 submissions/mo | $39/mo | Dense, very deep | 4.7/5 (5,426) Fillout | 1,000 responses/mo | $19/mo | Modern, multi-step defaul…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '100 submissions/mo' is the Jotform row.

### 73. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-enterprise-form-builders
- **Finding key:** `54830ddbd7c6b2c6`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …with named CSM GDPR / UK GDPR / CCPA + custom DPA SOC 2 targeted (verify with sales) Pricing Free Plan: Yes (100 responses/month on free plan) Starting Price: $13/month Personal ($12 annual) Most Popular Plan: $49/month Business ($45 annu…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claim. (Current pricing truth per constants/plan.js + live pricing page: every plan including Free has unlimited forms and unlimited responses.) Fixed: content/blog/best-enterprise-form-builders.md Formester pricing block now says unlimited forms and responses.

### 74. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-field-service-form-software
- **Finding key:** `8bc16afde052a8f7`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …tal on Business AI form generator + conditional logic GDPR / UK GDPR / CCPA compliant Pricing Free Plan: Yes (100 responses/month, unlimited forms) Starting Price: $13/month Personal ($12/month annual) Most Popular Plan: $49/month Business…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claim. Fixed in content/blog/best-field-service-form-software.md.

### 75. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-form-builder-for-real-estate
- **Finding key:** `3df4aaaa1585092e`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …e on the free plan | Advertised prices are the annual rates Plan | What you get Starter (free) | $0. 5 forms, 100 submissions/mo Bronze | $39/mo ($34/mo billed yearly). 1,000 submissions/mo Silver | $49/mo ($39/mo billed yearly). 2,500 su…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the quoted plan ladder (Starter free 5 forms/100 subs, Bronze, Silver…) is Jotform's pricing table.

### 76. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-form-builders-compatible-with-google-sheets
- **Finding key:** `47034db5774d19b3`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …wins if you also work with Airtable or Notion. Quick answer Best overallFormester, native Google Sheets sync, 100 responses/month free, no Apps Script. Best freeGoogle Forms, free forever, auto-builds the sheet, limited logic. Best technic…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims. Fixed 4 spots in content/blog/best-form-builders-compatible-with-google-sheets.md (TLDR, body, mid-CTA, FAQ) to unlimited responses.

### 77. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-form-management-software
- **Finding key:** `f61f1c0425dc693a`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ised self-serve prices are the annual rates HIPAA available Plan | What you get Starter (free) | $0. 5 forms, 100 submissions/mo Bronze | $39/mo ($34/mo billed yearly) Silver | $49/mo ($39/mo billed yearly) Gold | $129/mo ($99/mo billed y…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform's plan ladder again (the same Starter/Bronze/Silver/Gold table).

### 78. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-free-survey-tools
- **Finding key:** `772b121a80807642`
- **Observed:** this page states "25 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …in read Most "free" survey tools stop being free the moment your survey starts working. The free plan caps at 25 responses, the export button is locked behind Pro, and the branding stays on every page you send out. The list below ig…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — editorial framing about generic 'free' survey tools ('the free plan caps at 25 responses…'), setting up why the list exists. Not a Formester claim.

### 79. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-hipaa-form-builders
- **Finding key:** `b7df3fa24fe22216`
- **Observed:** this page states "100 entries/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ices are the annual rates Conditional logic even on the free plan Plan | What you get Individual (free) | $0. 100 entries/mo. No HIPAA Pro | $24/mo. 2,000 entries/mo. No HIPAA Team | $49/mo. 10,000 entries/mo. No HIPAA Enterprise | $1…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Cognito Forms' plan ladder (Individual free 100 entries/mo, Pro, Team…).

### 80. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-html-form-builder
- **Finding key:** `627f2a308b09aab5`
- **Observed:** this page states "50 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …forms and responses | $13/mo (Personal) | Hosted builder with one-line embed | 4.7/5 (14 reviews) Formspree | 50 submissions/mo | $10/mo (200 submissions/mo) | Pure form endpoint | 3.0/5 (3 reviews) Netlify Forms | Free and unlimited on…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '50 submissions/mo' is Formspree's free tier in the comparison table.

### 81. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-lead-capture-software
- **Finding key:** `fa052a705b39b45f`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- ….7/5 (14) HubSpot Forms | Unlimited submissions | $20/seat/mo | HubSpot, built in | 4.4/5 (12,747) Typeform | 10 responses/mo | $39/mo | Via integrations | 4.5/5 (1,017) Jotform | 5 forms, 100 submissions/mo | $39/mo | Via integrations…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '10 responses/mo' is the Typeform row.

### 82. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-legal-form-management-software
- **Finding key:** `d395c39689edb2d2`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ent or conflict checking Mobile app collects intake offline Plan | What you get Starter (free) | $0. 5 forms, 100 submissions/mo Bronze | $39/mo ($34/mo billed yearly) Silver | $49/mo ($39/mo billed yearly) Gold | $129/mo ($99/mo billed y…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform's plan ladder.

### 83. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-mobile-form-builders
- **Finding key:** `4d897af9b5046068`
- **Observed:** this page states "100 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …app | Free plan | Cheapest paid FormesterEditor's pick | Mobile-responsive web | Yes (cached browser) | No | 100 responses/mo | $13/mo Personal Jotform Mobile Forms | Native + responsive web | Yes (mobile app) | iOS + Android | 100 sub…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (summary-table row + pricing block). Fixed both in content/blog/best-mobile-form-builders.md.

### 84. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-no-code-form-builders
- **Finding key:** `43ceadbee3b6a06f`
- **Observed:** this page states "100 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …t paid | AI form generation | Native payments FormesterEditor's pick | All-rounder: AI + offline + payments | 100 responses/mo, unlimited forms | $13/mo Personal | Yes (Gemini-powered) | Stripe, PayPal Jotform | Biggest template library…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (table row, 'honest free tier' bullet, pricing block). Fixed all 3 in content/blog/best-no-code-form-builders.md.

### 85. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-offline-form-builders
- **Finding key:** `83123c2d204aed43`
- **Observed:** this page states "100 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …aid FormesterEditor's pick All-rounder: web + offline + payments Web with cached forms Yes, on reconnect Yes (100 responses) $13/mo Personal Jotform Mobile Forms Native iOS / Android field apps Yes (mobile app) Yes Yes (100 mo/respon…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (table cell + pricing block). Fixed both in content/blog/best-offline-form-builders.md.

### 86. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-online-form-builders
- **Finding key:** `ab3bf0fbd600ad37`
- **Observed:** this page states "100 responses per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …her-tier plans allow larger data collection for all businesses. Pricing: Free Plan provides up to 5 forms and 100 responses per month. 6. Typeform: A conversational styled experience delivering tool, Typeform is a popular form builder and allo…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '5 forms and 100 responses per month' is forms.app's free plan (item 5 of the listicle, verified in source).

### 87. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-online-quiz-maker-for-teachers
- **Finding key:** `487b7115f1185f00`
- **Observed:** this page states "25 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …access to the AI quiz maker. Cons: Signup is required before you can use the service. Free plan is limited to 25 responses/month. 4. Kahoot Kahoot turns quizzes into fun, interactive games that students love. It’s great for boosting engag…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '25 responses/month' con belongs to Opinion Stage (item 3), not Formester.

### 88. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-pdf-form-creator
- **Finding key:** `a2fb7d40cb8eed8c`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …at Sign | No free plan | $16.99 per licence/mo | Adobe-based teams | 4.4/5 (1,070 reviews) Jotform | 5 forms, 100 submissions/mo | $39/mo | Forms with PDF autofill | 4.7/5 (5,426 reviews) Google Forms | Free with a Google account | Bundle…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform row in the PDF-tools comparison table.

### 89. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-poll-maker
- **Finding key:** `935bc551666a50d8`
- **Observed:** this page states "200 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …h a Google account | Bundled with Workspace | Simple internal polls | No standalone profile Microsoft Forms | 200 responses/form | Bundled with M365 | Polls inside Teams | 4.4/5 (476 reviews) Typeform | 10 responses/mo | $39/mo | Pol…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '200 responses/form' is Microsoft Forms.

### 90. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-poll-software
- **Finding key:** `9001ca2a24a49d5f`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ws) Vevox | Free tier available | Not published | Enterprise polling and Q&A | 4.7/5 (453 reviews) Typeform | 10 responses/mo | $39/mo | Branded qualitative polls | 4.5/5 (1,017 reviews) SurveyMonkey | Limited free tier | $30/user/mo |…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Typeform row.

### 91. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-questionnaire-software
- **Finding key:** `e1c03da4334e57b9`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …reviews) SurveyMonkey | Limited free tier | $30/user/mo | Formal research | 4.4/5 (23,901 reviews) Typeform | 10 responses/mo | $39/mo | Completion on long forms | 4.5/5 (1,017 reviews) Jotform | 5 forms, 100 submissions/mo | $39/mo |…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Typeform row.

### 92. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-quiz-funnel-software
- **Finding key:** `0c03875b3e192b30`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ents | 4.7/5 (48 reviews) LeadQuizzes | Trial only | $49/mo | Lead-gen quizzes | 4.2/5 (9 reviews) Typeform | 10 responses/mo | $39/mo | Polished quiz experiences | 4.5/5 (1,017 reviews) Jotform | 5 forms, 100 submissions/mo | $39/mo |…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Typeform row.

### 93. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/best-registration-software
- **Finding key:** `d182297de7c01f9a`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …PAA | G2 rating Formester | Unlimited forms and responses | $13/mo | Yes | No | 4.7/5 (14) Jotform | 5 forms, 100 submissions/mo | $39/mo | Yes | Gold, $129/mo | 4.7/5 (5,426) Cognito Forms | 100 entries/mo | $24/mo | Yes | Enterprise, $1…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform row.

### 94. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/cognito-forms-alternatives
- **Finding key:** `e3e9ba0ab7c9b96c`
- **Observed:** this page states "100 entries/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …n any tier. The rest follows from that. Formester | Cognito Forms Free plan | Unlimited forms and responses | 100 entries/mo, 1 user First paid plan | $13/mo ($12 billed yearly) | $24/mo ($19 billed yearly) Entry limits | None on any…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '100 entries/mo' is Cognito Forms' free plan; the whole post argues Formester has no entry meter.

### 95. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/collect-email-address-google-form
- **Finding key:** `0e70d722c3962bff`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-29T17:37:16Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 1
- **Evidence:**
- …ague's, or an invented one, and the submission counts all the same. Deduplication needs sign-in. The Limit to 1 response toggle sits under a heading that reads REQUIRES SIGN IN, so stopping repeat entries means making Verified com…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — 'Limit to 1 response' is a Google Forms SETTING being explained, not a plan limit.

### 96. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/form-limiter-add-on-for-google-forms
- **Finding key:** `fc0e5b940d0aef1d`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-29T17:37:16Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 1
- **Evidence:**
- …or response limit. Google still badges it New. Nothing in Settings points you here. Settings has a "Limit to 1 response" toggle, but that caps each person at one entry, it doesn't cap the form. Two different jobs, and the naming…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — same: Google Forms' 'Limit to 1 response' toggle.

### 97. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/google-forms-to-google-sheets
- **Finding key:** `d9d547da166a7af1`
- **Observed:** this page states "100 submissions/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …eld, response trends. The Sheet stays. The dashboard is included. Start free with Formester Free plan covers 100 submissions/month. No credit card required. Sheets sync, no setup Connect a form to Google Sheets, without the Google Forms det…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claim ('Free plan covers 100 submissions/month'). Fixed in content/blog/google-forms-to-google-sheets.md.

### 98. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/google-forms-vs-jotform-the-comparison-everyone-asked-for
- **Finding key:** `a4cabb3f3557797c`
- **Observed:** this page states "100 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …icing plans are as follows: Free Plan: Jotform offers a free plan that allows you to create upto 5 forms with 100 submissions, along with basic features per month. It serves as a good starting point for users with basic form creation…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform's free plan in a Jotform-vs-Google-Forms post.

### 99. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-allow-multiple-users-to-fill-out-your-form
- **Finding key:** `53198ca71a2f8fc3`
- **Observed:** this page states "200 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T16:00:13Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 19
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 19
- **Evidence:**
- …ignees Free plan Google Forms Yes No No No Unlimited, inside Google Drive limits Microsoft Forms Yes No No No 200 responses per form (personal) Jotform Yes Yes, via Assign Form Yes, on Assign Form Partial 100 submissions per month Ty…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '200 responses per form' is Microsoft Forms in the capability table.

### 100. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-convert-pdf-to-fillable-form
- **Finding key:** `4312dc0b499bd3ca`
- **Observed:** this page states "100 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …k or $7.50/mo 3 tasks/hour, 50MB or 200 pages No Yes (OCR) Yes No Yes Jotform Free, paid from $34/mo 5 forms, 100 submissions, 100MB Limited No native Yes (integration) Yes Yes PDFescape Free, $3/mo premium 10MB or 100 pages, 50 forms…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform row in the PDF-conversion tools table.

### 101. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-create-a-quiz-in-google-forms-the-only-guide-youll-need-in-2023
- **Finding key:** `cd6c2db271766f04`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-29T17:37:16Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 1
- **Evidence:**
- …route someone to remedial content because they scored 4 out of 10. No proctoring or attempt control. Limit to 1 response requires sign-in, and even then it limits accounts rather than people. If any of those matter, the quiz needs…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Google Forms' 'Limit to 1 response' quiz setting.

### 102. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-create-an-online-application-form
- **Finding key:** `2bc3d2b3f8d9c4bc`
- **Observed:** this page states "100 responses per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …Formester. Is there a free plan that covers a small applicant pool? Yes. The Free plan includes 10 forms and 100 responses per month with all field types, the AI generator, drop-off analysis, and payment collection. Good for a single round of…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester FAQ ('10 forms and 100 responses per month'). Fixed in content/blog/how-to-create-an-online-application-form.md (body FAQ + jsonld copy).

### 103. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-create-an-order-form-with-ai
- **Finding key:** `a87bff4cbb97c96b`
- **Observed:** this page states "100 responses per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …swap in your products and prices, connect Stripe or PayPal, and publish. The Free plan supports 10 forms and 100 responses per month, enough for most small businesses launching their first order form. Can ChatGPT create an order form? ChatGPT…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester FAQ. Fixed in content/blog/how-to-create-an-order-form-with-ai.md.

### 104. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-create-right-to-left-forms
- **Finding key:** `90c68aab1073797e`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …ies per language AI translation across 180+ languages Built-in respondent language switcher Free plan caps at 100 responses/month Branding removal is Personal+ Best for speed Fillout Best for: A pure layout flip on a form you already wrote…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester con-bullet ('Free plan caps at 100 responses/month'). Fixed in content/blog/how-to-create-right-to-left-forms.md (replaced with a real current con).

### 105. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-create-signup-sheets-in-google-forms
- **Finding key:** `478d94ced382702b`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …pacity, but you can fake it. Open Settings (gear icon, top right), go to the Responses tab, and use "Limit to 1 response" or a Form Limiter add-on to cap total submissions. For true per-slot capacity (e.g., 10 spots per workshop s…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Google Forms' 'Limit to 1 response' setting.

### 106. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-embed-forms-in-wix-studio
- **Finding key:** `30f23c9d14a7f4dc`
- **Observed:** this page states "100 responses a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …ry plan, with admin-set file types, size limits, and camera capture Free-plan cap | Four forms | 10 forms and 100 responses a month Payments | Routes through its own checkout | Stripe or PayPal fields directly in the form Analytics | Shows s…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (Wix comparison table + FAQ). Fixed both in content/blog/how-to-embed-forms-in-wix-studio.md.

### 107. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-enable-access-for-google-forms
- **Finding key:** `8d29ae29702e3e25`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …Leaving it on is the #1 cause of "you need permission" errors from external respondents. Responses → Limit to 1 response. Forces sign-in. Useful for one-vote-per-person polls; breaks public anonymous surveys. Three ways to share t…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Google Forms setting explainer.

### 108. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-link-google-sheets-to-google-forms
- **Finding key:** `88d887cc619a61a0`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …any destinations, not the only one. How to connect: Sign up at formester.com (free plan supports 10 forms and 100 responses/month). Build the form in the drag-and-drop editor. Open Settings → Integrations → Google Sheets. Authorize. Pick a…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (signup step + free-tier table row). Fixed both in content/blog/how-to-link-google-sheets-to-google-forms.md.

### 109. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-link-squarespace-forms-to-google-sheets
- **Finding key:** `b9861440f8ada7b7`
- **Observed:** this page states "100 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …ee with caps | Real-time | No | 10 min | Direct webhook, no Zap chain Formester embed + native Sheets | Free, 100 responses/mo | Real-time | Yes | 12 min | Anyone burned by the reconnect bug If you are choosing a form builder around She…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (comparison row + pricing meta). Fixed both in content/blog/how-to-link-squarespace-forms-to-google-sheets.md. (The Sheet Monkey 100/month in the same post is that vendor's real cap — left alone.)

### 110. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting
- **Finding key:** `30c0cdcdeb688517`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …ll from external data) Webhooks + API | No | Yes Free tier | Unlimited responses (Google account) | 10 forms, 100 responses/month Google Forms is fine for response collection. Formester’s Google Sheets integration pulls ahead when you need…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester free-tier cell. Fixed in content/blog/how-to-make-a-google-form-for-rank-choice-voting.md.

### 111. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-make-a-poll-on-google-forms
- **Finding key:** `e5453fd86aa0158a`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …ses to one per person (optional) Click the gear icon top-right, open the Responses tab, and turn on "Limit to 1 response." This forces every voter to sign in with their Google account, dedupes the vote, and prevents stuffing. Trad…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Google Forms' 'Limit to 1 response' poll setting.

### 112. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-make-a-questionnaire-in-google-forms
- **Finding key:** `821e5b86b2d73991`
- **Observed:** this page states "20, response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …r a customer satisfaction or feedback questionnaire. Up to 20 for an academic or research questionnaire. Past 20, response rates drop sharply. Split anything longer into multiple sections so respondents see a progress bar. Related B…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — editorial guidance on questionnaire length ('past 20, response rates drop'), not a plan limit.

### 113. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-make-anonymous-google-form-or-survey
- **Finding key:** `b811c2496c7b576b`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …he “Responses” section, turn off the option to “Collect email addresses.” Additionally, uncheck the “Limit to 1 response” option. This allows users to submit answers without logging in and ensures that their identities remain priv…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Google Forms' anonymity settings explainer.

### 114. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-make-canva-pdf-fillable
- **Finding key:** `06ca69118befa54d`
- **Observed:** this page states "10 entries" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …s tab. You can filter, search, and sort through entries by name, date, or any field. Whether you're handling 10 entries or 1,000, you’ll stay organized without touching a spreadsheet. Final Thoughts With Canva and Formester, you…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — illustrative copy ('whether you're handling 10 entries or 1,000'), not a cap.

### 115. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-make-feedback-form-in-html
- **Finding key:** `302cf3283bab1f4c`
- **Observed:** this page states "100 submissions/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …s/Slack/HubSpot. Spam protection built in. Honeypot plus reCAPTCHA-style checks on every submission. Free for 100 submissions/month. Email notifications, dashboard, integrations included. Used by 56,000+ teams. See the HTML form backend → Co…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claim ('Free for 100 submissions/month'). Fixed in content/blog/how-to-make-feedback-form-in-html.md.

### 116. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-protect-user-data-and-prevent-spam-in-web-forms
- **Finding key:** `647a4164203c56ed`
- **Observed:** this page states "3 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …se. 6 Rate limiting Cap submissions per IP and per session. A typical contact form should never see more than 3 submissions from one IP in 10 minutes. Implement at the server or use Cloudflare WAF rate-limiting rules. When to use: ev…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — security best-practice advice (rate-limit 3 submissions/IP/10min), not a plan limit.

### 117. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-send-contact-form-data-to-google-sheets-free
- **Finding key:** `5dbbf9696e6a46e3`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- …site with spam control, conditional logic, and Sheets sync. 5-minute setup, no code at all. Free plan covers 100 responses/month. Native Google Sheets integration, OAuth, retries handled. Spam filtering, conditional logic, analytics built…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claims (FAQ jsonld + comparison bullet + body FAQ). Fixed all in content/blog/how-to-send-contact-form-data-to-google-sheets-free.md.

### 118. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/how-to-use-google-forms
- **Finding key:** `413515d914b2f911`
- **Observed:** this page states "1 response" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …Set Up Form Settings Go to “Settings” (gear icon). Choose settings like “Collect email addresses,” “Limit to 1 response,” and “Allow response editing” as needed. For quizzes, turn on “Make this a quiz” to assign points to questio…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Google Forms settings walkthrough.

### 119. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics
- **Finding key:** `b4a28f593853c604`
- **Observed:** this page states "100 submissions/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …eld, response trends. The Sheet stays. The dashboard is included. Start free with Formester Free plan covers 100 submissions/month. No credit card required. Sheets sync, no setup Connect a form to Google Sheets, without the Google Forms det…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — same page as #97 (this URL is its old slug, which 301s there). Fixed via #97.

### 120. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/jotform-review
- **Finding key:** `e743713579321415`
- **Observed:** this page states "100 submissions/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …apture. What it gets wrong: Dense UI with a steeper learning curve than newer builders, free plan cuts off at 100 submissions/month (fills fast), template search relevance is thin (20,000 sounds great but hard to find the right one), and AI…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform's own free-plan cap, in a review OF Jotform.

### 121. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/jotform-vs-formsapp-who-wins-the-price-performance-battle
- **Finding key:** `36d3723cf8353c02`
- **Observed:** this page states "100 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …ive chat. 15. Plans & Pricing Jotform: Jotform offers a free plan that allows you to create upto 5 forms with 100 submissions with 100MB storage, along with basic features per month. Paid Plans: Jotform offers 4 paid plans with additi…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform's free plan.

### 122. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/jotform-vs-surveymonkey-forms-surveys-or-both
- **Finding key:** `4054365b7c36f2d5`
- **Observed:** this page states "100 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …managers. 15. Plans & Pricing Jotform: Jotform offers a free plan that allows you to create upto 5 forms with 100 submissions, along with basic features per month. It serves as a good starting point for users with basic form creation…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform's free plan.

### 123. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/likert-scale
- **Finding key:** `7e0efa56b60c99da`
- **Observed:** this page states "60 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …s out as a frequency table so the spread is obvious at a glance: Response option | Responses Strongly Agree | 60 responses (30%) Agree | 100 responses (50%) Neutral | 30 responses (15%) Disagree | 8 responses (4%) Strongly Disagree…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — example Likert survey RESULTS data ('Strongly Agree | 60 responses (30%)').

### 124. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/must-have-ai-tools-for-event-management
- **Finding key:** `402e172a8d47c97e`
- **Observed:** this page states "100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …t gives you a smooth start and saves you hours of manual work. Pricing: Free plan available upto 10 forms and 100 submissions per month, paid plan starts at 13$/mo. 2. AI Tool for Content Creation and Marketing - Jasper Every event planner need…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester pricing line. Fixed in content/blog/must-have-ai-tools-for-event-management.md.

### 125. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/must-have-demographic-questions-for-survey
- **Finding key:** `71c9e63cc833f278`
- **Observed:** this page states "100 responses/month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …t survey-tool sprawl Multi-step forms, conditional logic, templates for every survey type. Free plan includes 100 responses/month. Start free on Formester Free forever plan•No credit card•Setup in 2 minutes Related on Formester Start from…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester mid-CTA. Fixed in content/blog/must-have-demographic-questions-for-survey.md.

### 126. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/net-promoter-score-survey
- **Finding key:** `ac67b035f42a7da6`
- **Observed:** this page states "100 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …your website. The key is to get enough responses to make your data reliable. For smaller businesses, even 50–100 responses can give useful insights. For larger companies, aim for several hundred or more. A higher response rate ensur…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — NPS sample-size guidance ('even 50–100 responses can give useful insights').

### 127. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/questions-to-ask-on-a-survey-for-a-floral-shop
- **Finding key:** `ace7b251d452f42b`
- **Observed:** this page states "30 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …ustomer has seen how the flowers held up. How many responses do I need for a floral shop survey to be useful? 30 responses give you a rough read on trends. 100 responses give statistically meaningful comparisons by store, day, or pr…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — survey sample-size guidance.

### 128. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/surveymonkey-review
- **Finding key:** `0c70cf76ee90512c`
- **Observed:** this page states "25 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …st of what a marketing, HR, or CX team would ever field. What is annoying: The Free plan only shows the first 25 responses per survey. Paid plans list at $30 per user per month yearly, but require three users, so the real starting p…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — SurveyMonkey's free plan, in a review OF SurveyMonkey.

### 129. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/surveysparrow-alternatives
- **Finding key:** `2b2f889a1f4bc6e2`
- **Observed:** this page states "25 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …rmester | Unlimited forms and responses | $13/mo | Forms and surveys without caps | 4.7/5 (14) SurveyMonkey | 25 responses per survey | $30/user/mo, 3-seat minimum | Enterprise CX programmes | 4.4/5 (23,901) Typeform | 10 responses/…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — SurveyMonkey row in the alternatives table.

### 130. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/top-5-shopify-form-plugins-in-2023-boost-your-shopify-store
- **Finding key:** `fff7c6d8f512b277`
- **Observed:** this page states "100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …tions, payment forms, and much more. Pricing Formester offers a Free plan to start with for upto 10 forms and 100 submissions per month. Additionally, there are two paid plans available, with added upgrades and features: Personal Plan: $13/month…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester pricing line. Fixed in content/blog/top-5-shopify-form-plugins-in-2023-boost-your-shopify-store.md.

### 131. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/top-5-web-forms-with-conditional-logic-to-integrate-with-your-website-in-2023
- **Finding key:** `3078b12546df8f1e`
- **Observed:** this page states "100 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- …so offers customizable, pre-designed and free Templates. Pricing The Basic plan is free for upto 10 forms and 100 submissions, giving you the scope to explore and make the right decision. 2. Jotform Jotform is one of the big players in…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester pricing line. Fixed in content/blog/top-5-web-forms-with-conditional-logic-to-integrate-with-your-website-in-2023.md.

### 132. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/top-google-forms-alternatives
- **Finding key:** `1785a61462bbb09c`
- **Observed:** this page states "100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …detailed analytics and reporting. Pricing Plans Free: The Free plan lets you create 10 forms with a limit of 100 submissions per month. Personal: Priced at $12 per month, the plan is perfect for personal use, offering customised branding, payme…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester free-plan bullet. Fixed in content/blog/top-google-forms-alternatives.md. (The '5 forms and 100 submissions' at line 147 is Jotform's — left alone.)

### 133. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/top-multiple-choice-test-maker
- **Finding key:** `d2585a45b865b901`
- **Observed:** this page states "50 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …ontrolled themes separate the serious tools. Free plan that actually ships. A free plan with 10 questions and 50 responses is a demo, not a tool. We flag the real caps. Analytics and exports. Per-question breakdown, drop-off, CSV /…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — editorial ('a free plan with 10 questions and 50 responses is a demo, not a tool').

### 134. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/typeform-review
- **Finding key:** `ab9990cc304d7654`
- **Observed:** this page states "100 responses per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …arketing and CX use cases most buyers care about. What is annoying: Response caps hit fast. The Basic plan is 100 responses per month. Removing Typeform branding requires the Plus plan at $56 per month yearly. HIPAA is Enterprise-only, not Bus…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Typeform's Basic plan cap, in a review OF Typeform.

### 135. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/what-is-forms-management
- **Finding key:** `e6b6451433e0e141`
- **Observed:** this page states "100 responses a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …ry analytics, with one-click CSV export. It is GDPR and CCPA compliant, and the free plan covers 10 forms and 100 responses a month so you can run a real form before you pay. Take Control of Your Forms Forms management is just a clean way to…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claim. Fixed in content/blog/what-is-forms-management.md.

### 136. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/wufoo-alternatives
- **Finding key:** `44a88f38b86a7a4f`
- **Observed:** this page states "100 entries a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-22T17:36:46Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 2
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 2
- **Evidence:**
- …arly twenty years, and that shows in both directions. It is stable and predictable, and it is also metered at 100 entries a month free with a $0.05 charge for every entry over the limit on paid plans. Most people leaving want one of three…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Wufoo's metering ('100 entries a month free… $0.05 per entry over').

### 137. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/blog/wufoo-review
- **Finding key:** `a6666b4e683803d0`
- **Observed:** this page states "100 entries per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …0 | (single admin) A few practical notes: The Free plan is actually usable for very small use cases. 5 forms, 100 entries per month, 3 users. Enough for a tiny team's contact form or an internal signup. Compared to Typeform Free (10 response…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Wufoo's free plan, in a review OF Wufoo.

### 138. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/cognito-forms-alternative
- **Finding key:** `33f67bb94247fb53`
- **Observed:** this page states "100 entries a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …Free Unlimited forms + responses on free Cognito Forms Free plan Unlimited forms, responses, and fields 100 entries a month, 1 user, 100 MB Entry caps on paid plans None on any tier 2,000/mo at $19; 10,000 at $39; unlimited only a…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Cognito's free plan in the side-by-side table; Formester column says unlimited.

### 139. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/contact-form-7-alternative
- **Finding key:** `82a98079065db22c`
- **Observed:** this page states "7
 Submission" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-15T17:33:37Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 3
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 3
- **Evidence:**
- …documentation. Feature Our pick Formester Sign Up Free Unlimited forms + responses on free Contact Form 7 Submission storage Built in, searchable, exportable (needs the free Flamingo plugin) Conditional logic Personal plan…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — parser artifact: 'Contact Form 7 | Submission storage' table header read as '7 Submission'.

### 140. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/features/email-notification-for-form-submission
- **Finding key:** `b0f7106041559b85`
- **Observed:** this page states "5,000+
submission" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …sion for your records. You set how much detail each alert carries. Submission details Name Priya Nair Budget $5,000+ submission.pdf attached Per-form routing Each form to the right people Notifications are configured per form, so every f…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — UI mockup content: 'Budget $5,000+' + 'submission.pdf attached' in the notification-email mock.

### 141. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/features/email-verification
- **Finding key:** `b1a3b9548ac2e1e3`
- **Observed:** this page states "04
Submission" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …es it straight back into the form — no leaving the page to chase a link. Code sent to maya@brightlabs.co 4827 04 Submission accepted Once the code matches, the address is confirmed and the submission counts. Anyone who can't verify s…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — UI mockup: verification code '4827' + step '04' next to the word 'Submission accepted'.

### 142. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/features/form-analytics
- **Finding key:** `750186c8502313b0`
- **Observed:** this page states "2,988
Submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …rn data into more submissions. Get Started — It's Free See pricing app.formester.com · Analytics 4,820 Views 2,988 Submissions 38% Drop-off Page 191% Page 264% Submit62% 38% Trusted by leading organisations 5/5 4.4/5 5/5 4.7/5 By the nu…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — analytics dashboard mockup numbers (4,820 views / 2,988 submissions).

### 143. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/features/offline-forms
- **Finding key:** `442e8d581631b031`
- **Observed:** this page states "3 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …lost. Get Started — It's Free Watch demo Site Inspection · field app Offline — saving on deviceBack online — 3 responses synced S1 Site A — Bridge deckSaved 09:14 QueuedSynced S2 Site B — DrainageSaved 09:31 QueuedSynced S3 Site C…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — offline-sync mockup ('Back online — 3 responses synced').

### 144. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/features/summary-analytics
- **Finding key:** `dd16792c7fe8af1b`
- **Observed:** this page states "1,284responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …e Watch demo app.formester.com · Summary How would you rate our support? Choice Excellent78% Good52% Fair24% 1,284responses Trusted by leading organisations 5/5 4.4/5 5/5 4.7/5 Anatomy What a response summary shows you Open Results →…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — summary-analytics mockup ('1,284 responses').

### 145. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/fillout-alternative
- **Finding key:** `cfb964e6ab7146bb`
- **Observed:** this page states "1,000 responses a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …er best known for native two-way sync with Airtable, Notion, and Google Sheets, and a generous free plan with 1,000 responses a month and unlimited forms. Pricing climbs to $15 Starter, $40 Pro, and $75 Business. Strong fit for teams whose wor…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Fillout's free plan ('generous free plan with 1,000 responses a month').

### 146. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/free-form-creator
- **Finding key:** `612e821062d464c5`
- **Observed:** this page states "50 submissions / mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …ds, same file uploads as the paid plans. Capped on volume, not on capability. Other free tiers 3 active forms 50 submissions / mo Payments paywalled 5MB file caps Watermark on every page Formester Free Unlimited active forms Unlimited resp…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the '50 submissions / mo' is the 'Other free tiers' contrast column; the Formester column next to it says unlimited. That contrast is the page's point.

### 147. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/free-online-order-form-creator
- **Finding key:** `436da43921fc06bd`
- **Observed:** this page states "10 responses a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …Unlimited responses, unlimited forms | Unlimited, no native payments | 100 monthly, 10 payment submissions | 10 responses a month Branding removed on free | No (Personal $13/mo) | n/a | No (paid plans) | No (paid plans) Sources: vendor pri…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '10 responses a month' is the Typeform column of the free-plan table.

### 148. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/google-forms-vs-microsoft-forms
- **Finding key:** `efd68954c2b81ea4`
- **Observed:** this page states "200 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …rmsFree with any Google account | Microsoft Forms Free with a personal account | No documented response cap | 200 responses per form, 1,000 on paid Business suite entry price | $7 a user a month annual, $8.40 monthly | $7 a user a mo…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Microsoft Forms' documented caps in the comparison table.

### 149. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/inspection-form-builder
- **Finding key:** `c5d7f8df2c23a502`
- **Observed:** this page states "3submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T19:09:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 16
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 16
- **Evidence:**
- …iance check9:34 Fire extinguisher tag expired9:41 2 photos captured · 4.1 MB queued FOREMAN SIGN-OFF J. Patel 3submissions queued for sync Auto-sync on wifi Installable as app Trusted by leading organisations The 4 things an inspect…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — field-app mockup ('3 submissions queued for sync').

### 150. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/jotform-101
- **Finding key:** `63ed556d87345535`
- **Observed:** this page states "100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …s Integrations | Limited Integration Options | Complex Integration Pricing | Starts free for upto 5 Forms and 100 submissions per month | Starts Free for Unlimited Forms but only 10 submissions per month | Starts Free for upto 10 Forms and 100 s…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester column in the SHARED comparison table (components/form-builders-comparision-table.vue, rendered on jotform-101, typeform-101 and use-case/software-and-technology). Fixed once in the component → 'Starts Free with Unlimited Forms and Unlimited submissions'. Covers #162 and #166 too.

### 151. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/jotform-alternative
- **Finding key:** `ce8ab948526c7e2f`
- **Observed:** this page states "100 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …Tier Formester Jotform Note Free $0 · unlimited responses, unlimited forms, AI generator, payments $0 · 100 responses/mo, 5 forms, 100 MB Formester offers 2x the form cap on free Entry paid Personal · $12/mo annual, unlimited r…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — '$0 · 100 responses/mo, 5 forms' is the JOTFORM cell of the pricing table; Formester cell says unlimited.

### 152. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/jotform-vs-formstack
- **Finding key:** `4ad1e28f8254130e`
- **Observed:** this page states "100 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …unlimited signatures, unlimited team members, priority support. Sign Up Free Jotform Starter Free 5 forms, 100 submissions/mo, 100 MB. Bronze $34/mo 25 forms, 1,000 submissions/mo, 1 GB, 100 payment submissions. Silver $39/mo 50 fo…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform Starter's caps in a Jotform-vs-Formstack page.

### 153. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/jotform-vs-typeform
- **Finding key:** `3d38c31f818746e8`
- **Observed:** this page states "1,000 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …vs Typeform: the honest comparison Typeform looks cheaper until you count responses. Jotform Bronze includes 1,000 submissions at $34 a month; matching that on Typeform means Plus at $56. Here is the full comparison, plus where neither…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Jotform Bronze vs Typeform pricing comparison; no Formester cap stated.

### 154. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/plugins/slack-forms
- **Finding key:** `8f6a51bdda4e07e7`
- **Observed:** this page states "up to 50 submissions/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …ar. No "book a demo" funnel. Install the app, run /formester new, and go. Add to Slack Talk to sales Free for up to 50 submissions/mo • Removes in 1 click • Used by 3,400+ teams The AI form builder for teams that move fast — without breaking…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester claim on our own Slack plugin page ('Free for up to 50 submissions/mo'). Fixed in pages/plugins/slack-forms.vue → 'Free — unlimited forms & responses'.

### 155. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/pricing
- **Finding key:** `ee6e4f78c3ad1e19`
- **Observed:** this page states "100 submissions" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …questions Can I try before I buy? It's free to set up an account and create a campaign. But to get more than 100 submissions, you'll need to choose a plan. Can I change plans at anytime? Yes. Formester is a pay-as-you-go service and y…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — the PRICING PAGE itself still had the old FAQ ('to get more than 100 submissions, you'll need to choose a plan') plus schema.org offers hard-coding 100/1,000/15,000-submission caps, contradicting the plan cards (unlimited). Fixed both in pages/pricing.vue.

### 156. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/qualtrics-alternative
- **Finding key:** `a7e5dbf3f0cff03e`
- **Observed:** this page states "500 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-08T17:31:47Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 4
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 4
- **Evidence:**
- …les quote Transparent pricing page (Contact Sales only) Free plan usable in prod (unlimited) (3 surveys, 500 responses, 30 questions each) AI form generator (prompt + list + PDF) (AI assist and analysis, no prompt-to-form gen…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Qualtrics' free plan (3 surveys, 500 responses).

### 157. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/questionnaire-maker
- **Finding key:** `46d6e3244fa91056`
- **Observed:** this page states "100 responses per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …Dr. Michele Ross Founder Build a Questionnaire that Respondents Actually Finish Free plan: 10 questionnaires, 100 responses per month, AI generator, all field types, drop-off analytics. No credit card required to start Get Started – It’s Free!…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — stale Formester hero copy. Fixed in pages/questionnaire-maker.vue → unlimited questionnaires and responses.

### 158. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/surveysparrow-alternative
- **Finding key:** `6dfd8a9a6156ab09`
- **Observed:** this page states "75 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-15T17:33:37Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 3
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 3
- **Evidence:**
- …ee | SurveySparrow Free plan | Unlimited forms, responses, and fields | 3 classic surveys, 10 questions each, 75 responses per quarter Response caps on paid plans | None on any tier | 2,500/yr at $19; 15,000/yr at $39; 36,000/yr at…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — SurveySparrow's free plan (75 responses per quarter).

### 159. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/tally-vs-typeform
- **Finding key:** `6636f85217029e5e`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- …nterprise) Free plan verdict Unlimited across all cores Unlimited + payments (10 MB file cap) Restricted (10 responses/mo) Prices and feature availability verified against each vendor's live pricing page on 26 July 2026. The hones…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Typeform's free plan in the verdict row.

### 160. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/templates/return-authorization-form-22779
- **Finding key:** `1b1171d14e53c4a7`
- **Observed:** this page states "up to 100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- …os and documents for the return authorization. Is there a submission limit in the free plan? Formester offers up to 100 submissions per month in the free plan, if you want more, you'd have to upgrade to the next tier. Can I customize this return autho…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Template FAQ ('Formester offers up to 100 submissions per month in the free plan') is stale AND lives in the return-authorization-form template body in the app. Update the FAQ there — and grep other template FAQs for the same boilerplate.

### 161. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/templates/return-merchandise-authorization-rma-form-22784
- **Finding key:** `c01e4601f1b21c07`
- **Observed:** this page states "up to 100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- …eld to collect secure and legal approvals directly in the form. Is there a submission limit? Formester offers up to 100 submissions per month in the free plan, if you want more, you'd have to upgrade to the next tier. The AI form builder for teams th…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, but the fix lives in the Formester app/CMS (template content), not this repo. Same stale FAQ boilerplate on return-merchandise-authorization-rma-form — fix in the app alongside #160.

### 162. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/typeform-101
- **Finding key:** `cf0ec537d4e14de8`
- **Observed:** this page states "100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …s Integrations | Limited Integration Options | Complex Integration Pricing | Starts free for upto 5 Forms and 100 submissions per month | Starts Free for Unlimited Forms but only 10 submissions per month | Starts Free for upto 10 Forms and 100 s…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — fixed via the shared comparison-table component (see #150).

### 163. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/typeform-vs-google-forms
- **Finding key:** `406cf21e00426ddc`
- **Observed:** this page states "10 responses/mo" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …(Workspace Business/Enterprise) Free plan verdict Unlimited across all cores Restricted (Unlimited forms, 10 responses/mo) Unlimited (bounded by Drive storage) Prices and feature availability verified against each vendor's live pr…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Typeform's free plan in the verdict row.

### 164. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/typeform-vs-surveymonkey
- **Finding key:** `9603e56f232e7083`
- **Observed:** this page states "25 responses" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …mited forms (Unlimited surveys on free) (Unlimited typeforms on free) Unlimited responses (10 questions x 25 responses per survey on free) (10/mo on free) AI form creator (prompt + list + PDF) (SurveyMonkey Genius) (Typefor…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — SurveyMonkey's free plan (10 questions × 25 responses).

### 165. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/use-case/human-resource
- **Finding key:** `ea3097a70e44ff27`
- **Observed:** this page states "10,000 entries" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …Data Handling Manual Data entry without verification leads to a 4% error rate. This results in 400 errors per 10,000 entries, impacting even small datasets. Lack of Accessibility and Collaboration Physical documents limit remote acces…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — a data-entry error-rate statistic ('400 errors per 10,000 entries'), not a plan limit.

### 166. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/use-case/software-and-technology
- **Finding key:** `1f97fa823faa6107`
- **Observed:** this page states "100 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …s Integrations | Limited Integration Options | Complex Integration Pricing | Starts free for upto 5 Forms and 100 submissions per month | Starts Free for Unlimited Forms but only 10 submissions per month | Starts Free for upto 10 Forms and 100 s…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — fixed via the shared comparison-table component (see #150).

### 167. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/wufoo-alternative
- **Finding key:** `c40ef0386b4bf874`
- **Observed:** this page states "100 entries a month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …Free Unlimited forms + responses on free Wufoo Free plan Unlimited forms, responses, and fields 5 forms, 100 entries a month, 10 fields Entry overage None; no metering on any plan $0.05 per entry past the limit on paid accounts Co…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ❌ False positive — Wufoo's free plan in the side-by-side table.

### 168. [needs-review · medium] `cross-page-limit-conflict`

- **URL:** https://formester.com/zoho-forms-alternative
- **Finding key:** `edfd53d42c899c61`
- **Observed:** this page states "500 submissions per month" while other pages claim unlimited submissions
- **Recommendation:** Align plan wording across pages; different pages state different allowances.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- …t made up. Free plan is genuinely tight: 3 forms, 500 monthly submissions. Zoho Forms Free covers 3 forms and 500 submissions per month. Two campaigns or a single high-traffic form fills it. Formester's free plan covers unlimited forms and 100 m…
- unlimited claims on: https://formester.com/123formbuilder-alternative, https://formester.com/ai-form-generator, https://formester.com/ai-powered-multilingual-forms
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — the page mixed 'unlimited forms' with '100 monthly responses' for Formester (plus two FAQ answers repeating 100/mo and 1,000-on-Personal). Fixed all spots in pages/zoho-forms-alternative.vue (body + FAQ + jsonld copies).

### 169. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/behavioral-interview-questions
- **Finding key:** `911ac753f9371f2c`
- **Observed:** title shared by 6 scanned pages: "no-code online form builder - formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- also on: https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester, https://formester.com/blog/mentimeter-alternatives, https://formester.com/blog/onboarding-mistakes, https://formester.com/blog/top-5-typeform-alternatives-in-2023-no-code-form-builders-that-dont-skip-the-visual-appeal, https://formester.com/plugins/slack-forms
- **Review verdict (2026-09-01, Claude):** ⚠️ Detector artifact with a REAL underlying problem — this URL now serves the SPA fallback shell (soft-404: HTTP 200, empty body, default site title). The post was never migrated from Strapi to content/blog, so there is no page title to fix. Action needed: restore/migrate the post or 301 it; also consider making unknown routes return a real 404.

### 170. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/google-forms-to-google-sheets
- **Finding key:** `313a467f40c08e8b`
- **Observed:** title shared by 2 scanned pages: "connect google forms to google sheets (2026 guide)"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- also on: https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the 'duplicate' is this post's own old slug (…essential-basics), which 301s here; the crawler scanned one page twice. Resolves when the redirecting slug drops out of the sitemap (see #45).

### 171. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester
- **Finding key:** `8ff415b6214d6744`
- **Observed:** title shared by 6 scanned pages: "no-code online form builder - formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T17:03:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 18
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 18
- **Evidence:**
- also on: https://formester.com/blog/behavioral-interview-questions, https://formester.com/blog/mentimeter-alternatives, https://formester.com/blog/onboarding-mistakes, https://formester.com/blog/top-5-typeform-alternatives-in-2023-no-code-form-builders-that-dont-skip-the-visual-appeal, https://formester.com/plugins/slack-forms
- **Review verdict (2026-09-01, Claude):** ⚠️ Detector artifact with a REAL underlying problem — this URL now serves the SPA fallback shell (soft-404: HTTP 200, empty body, default site title). The post was never migrated from Strapi to content/blog, so there is no page title to fix. Action needed: restore/migrate the post or 301 it; also consider making unknown routes return a real 404.

### 172. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics
- **Finding key:** `3071aa24c523b927`
- **Observed:** title shared by 2 scanned pages: "connect google forms to google sheets (2026 guide)"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- also on: https://formester.com/blog/google-forms-to-google-sheets
- **Review verdict (2026-09-01, Claude):** ❌ False positive — same artifact as #170 (this IS the old slug).

### 173. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/mentimeter-alternatives
- **Finding key:** `9c3dbd671716dff1`
- **Observed:** title shared by 6 scanned pages: "no-code online form builder - formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- also on: https://formester.com/blog/behavioral-interview-questions, https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester, https://formester.com/blog/onboarding-mistakes, https://formester.com/blog/top-5-typeform-alternatives-in-2023-no-code-form-builders-that-dont-skip-the-visual-appeal, https://formester.com/plugins/slack-forms
- **Review verdict (2026-09-01, Claude):** ⚠️ Detector artifact with a REAL underlying problem — this URL now serves the SPA fallback shell (soft-404: HTTP 200, empty body, default site title). The post was never migrated from Strapi to content/blog, so there is no page title to fix. Action needed: restore/migrate the post or 301 it; also consider making unknown routes return a real 404.

### 174. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/onboarding-mistakes
- **Finding key:** `306c3bbb6a19d19d`
- **Observed:** title shared by 6 scanned pages: "no-code online form builder - formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- also on: https://formester.com/blog/behavioral-interview-questions, https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester, https://formester.com/blog/mentimeter-alternatives, https://formester.com/blog/top-5-typeform-alternatives-in-2023-no-code-form-builders-that-dont-skip-the-visual-appeal, https://formester.com/plugins/slack-forms
- **Review verdict (2026-09-01, Claude):** ✅ Was genuine — already resolved before this review: the post's metaTitle is set in content/blog/onboarding-mistakes.md and the live page now renders 'Onboarding Mistakes: 9 Ways New Hires Get Lost (2026)'.

### 175. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/blog/top-5-typeform-alternatives-in-2023-no-code-form-builders-that-dont-skip-the-visual-appeal
- **Finding key:** `d7f551f4e597e80c`
- **Observed:** title shared by 6 scanned pages: "no-code online form builder - formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T18:06:24Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 17
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 17
- **Evidence:**
- also on: https://formester.com/blog/behavioral-interview-questions, https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester, https://formester.com/blog/mentimeter-alternatives, https://formester.com/blog/onboarding-mistakes, https://formester.com/plugins/slack-forms
- **Review verdict (2026-09-01, Claude):** ⚠️ Detector artifact with a REAL underlying problem — this URL now serves the SPA fallback shell (soft-404: HTTP 200, empty body, default site title). The post was never migrated from Strapi to content/blog, so there is no page title to fix. Action needed: restore/migrate the post or 301 it; also consider making unknown routes return a real 404.

### 176. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/integrations/hubspot
- **Finding key:** `4e2382366f89a42e`
- **Observed:** title shared by 2 scanned pages: "hubspot crm integration for online forms | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- also on: https://formester.com/integrations/hubspot-crm
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — /integrations/hubspot and /integrations/hubspot-crm are byte-identical duplicate pages (only asset IDs differ) with the same title. Fixed: hubspot-crm now canonicalizes to /integrations/hubspot/. Consider retiring one slug entirely.

### 177. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/integrations/hubspot-crm
- **Finding key:** `e9ea610cbd2d670d`
- **Observed:** title shared by 2 scanned pages: "hubspot crm integration for online forms | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- also on: https://formester.com/integrations/hubspot
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — see #176; fixed via canonical.

### 178. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/plugins/slack-forms
- **Finding key:** `6940205ce2c38736`
- **Observed:** title shared by 6 scanned pages: "no-code online form builder - formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- also on: https://formester.com/blog/behavioral-interview-questions, https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester, https://formester.com/blog/mentimeter-alternatives, https://formester.com/blog/onboarding-mistakes, https://formester.com/blog/top-5-typeform-alternatives-in-2023-no-code-form-builders-that-dont-skip-the-visual-appeal
- **Review verdict (2026-09-01, Claude):** ✅ Genuine — slack-forms had no title at all so it fell back to the site default. Fixed with a unique title (see #63).

### 179. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/apparel-order-form-32860
- **Finding key:** `40c93023ee4e9bb4`
- **Observed:** title shared by 2 scanned pages: "apparel order form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- also on: https://formester.com/templates/apparel-order-form-49536
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 180. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/apparel-order-form-49536
- **Finding key:** `a1a66de88a25b57c`
- **Observed:** title shared by 2 scanned pages: "apparel order form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-02T20:12:26Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 15
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 15
- **Evidence:**
- also on: https://formester.com/templates/apparel-order-form-32860
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 181. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/call-back-form-template
- **Finding key:** `8dce9e0db6dd1965`
- **Observed:** title shared by 2 scanned pages: "call back form template | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- also on: https://formester.com/templates/request-a-callback-form-1882
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 182. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/construction-job-application-form-copy-17478
- **Finding key:** `31755729a330856a`
- **Observed:** title shared by 2 scanned pages: "hotel job application form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T01:27:34Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 10
- **Evidence:**
- also on: https://formester.com/templates/hotel-job-application
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — 'construction-job-application-form-copy-17478' is a live template whose NAME is 'Hotel Job Application Form' (a copy that kept the wrong name), duplicating /templates/hotel-job-application. Rename or delete the copy in the app.

### 183. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/customer-visit-record-form-template-1785
- **Finding key:** `381d4d9f3c1ee10d`
- **Observed:** title shared by 2 scanned pages: "customer visit record form template | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T00:24:21Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 11
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 11
- **Evidence:**
- also on: https://formester.com/templates/customer-visit-report-form
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 184. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/customer-visit-report-form
- **Finding key:** `86da7c1f36a19223`
- **Observed:** title shared by 2 scanned pages: "customer visit record form template | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T00:24:21Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 11
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 11
- **Evidence:**
- also on: https://formester.com/templates/customer-visit-record-form-template-1785
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 185. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/employee-laptop-agreement-form
- **Finding key:** `a79947c9c75f780a`
- **Observed:** title shared by 2 scanned pages: "employee laptop & equipment agreement form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T00:24:21Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 11
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 11
- **Evidence:**
- also on: https://formester.com/templates/employee-laptop-agreement-form-2806
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 186. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/employee-laptop-agreement-form-2806
- **Finding key:** `226fa4750ac896ad`
- **Observed:** title shared by 2 scanned pages: "employee laptop & equipment agreement form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T00:24:21Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 11
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 11
- **Evidence:**
- also on: https://formester.com/templates/employee-laptop-agreement-form
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 187. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/free-gym-registration-form
- **Finding key:** `9355bda497e34a77`
- **Observed:** title shared by 2 scanned pages: "gym registration form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T01:27:34Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 10
- **Evidence:**
- also on: https://formester.com/templates/gym-registration-form-1896
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 188. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/fun-personality-quiz
- **Finding key:** `be5759c7c48deaa7`
- **Observed:** title shared by 2 scanned pages: "free personality quiz: which type are you? | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/uncover-your-inner-you-4124
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 189. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/gym-registration-form-1896
- **Finding key:** `85d877c7dbe8417e`
- **Observed:** title shared by 2 scanned pages: "gym registration form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T01:27:34Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 10
- **Evidence:**
- also on: https://formester.com/templates/free-gym-registration-form
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 190. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/hotel-booking-form-13455
- **Finding key:** `424b2712412835df`
- **Observed:** title shared by 2 scanned pages: "hotel booking form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T01:27:34Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 10
- **Evidence:**
- also on: https://formester.com/templates/hotel-booking-form-88500
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 191. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/hotel-booking-form-88500
- **Finding key:** `350dad772256ff15`
- **Observed:** title shared by 2 scanned pages: "hotel booking form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T01:27:34Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 10
- **Evidence:**
- also on: https://formester.com/templates/hotel-booking-form-13455
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 192. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/hotel-job-application
- **Finding key:** `dddc7ddd95a4b04b`
- **Observed:** title shared by 2 scanned pages: "hotel job application form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T01:27:34Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 10
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 10
- **Evidence:**
- also on: https://formester.com/templates/construction-job-application-form-copy-17478
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — see #182 (the duplicate is the mis-named construction-…-copy template).

### 193. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/lightsaber-color-quiz
- **Finding key:** `38cac5c74867a80f`
- **Observed:** title shared by 2 scanned pages: "lightsaber color quiz | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/lightsaber-color-quiz-7478
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — templates.json still returns BOTH lightsaber slugs (see sitemap finding #49). Remove the duplicate entry in the app.

### 194. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/lightsaber-color-quiz-7478
- **Finding key:** `ae337bc19cf248d4`
- **Observed:** title shared by 2 scanned pages: "lightsaber color quiz | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/lightsaber-color-quiz
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — templates.json still returns BOTH lightsaber slugs (see sitemap finding #49). Remove the duplicate entry in the app.

### 195. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/magazine-quiz-27610
- **Finding key:** `382ac8d842684b4b`
- **Observed:** title shared by 2 scanned pages: "magazine quiz template | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/magazine-quiz-template
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 196. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/magazine-quiz-template
- **Finding key:** `038f29088d408436`
- **Observed:** title shared by 2 scanned pages: "magazine quiz template | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/magazine-quiz-27610
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 197. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/marketing-request-form-33248
- **Finding key:** `ca1e1f28b103726e`
- **Observed:** title shared by 2 scanned pages: "marketing request form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/marketing-request-form-48535
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 198. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/marketing-request-form-48535
- **Finding key:** `0d722eff282a4c68`
- **Observed:** title shared by 2 scanned pages: "marketing request form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/marketing-request-form-33248
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 199. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/online-doctors-appointment-form
- **Finding key:** `3287841f7d6fd43a`
- **Observed:** title shared by 2 scanned pages: "online doctor's appointment form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/online-doctors-appointment-form-1876
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 200. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/online-doctors-appointment-form-1876
- **Finding key:** `1282bd6239e626c7`
- **Observed:** title shared by 2 scanned pages: "online doctor's appointment form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T02:30:06Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 9
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 9
- **Evidence:**
- also on: https://formester.com/templates/online-doctors-appointment-form
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 201. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/property-enquiry-form
- **Finding key:** `73d9a1332ef120f6`
- **Observed:** title shared by 2 scanned pages: "property enquiry form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- also on: https://formester.com/templates/property-enquiry-form-1893
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 202. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/property-enquiry-form-1893
- **Finding key:** `522bedd33d10ed50`
- **Observed:** title shared by 2 scanned pages: "property enquiry form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- also on: https://formester.com/templates/property-enquiry-form
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 203. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/rental-application-form-29280
- **Finding key:** `94c6575a0f0c1043`
- **Observed:** title shared by 2 scanned pages: "rental application form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- also on: https://formester.com/templates/rentel-application-form-4191
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two distinct live templates share the name; note the second slug is misspelled 'rentel-application-form-4191'. Rename/retire in the app.

### 204. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/rentel-application-form-4191
- **Finding key:** `04bf35b08b0662d4`
- **Observed:** title shared by 2 scanned pages: "rental application form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- also on: https://formester.com/templates/rental-application-form-29280
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two distinct live templates share the name; note the second slug is misspelled 'rentel-application-form-4191'. Rename/retire in the app.

### 205. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/request-a-callback-form-1882
- **Finding key:** `215279d916e0a9f2`
- **Observed:** title shared by 2 scanned pages: "call back form template | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T04:41:51Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 7
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 7
- **Evidence:**
- also on: https://formester.com/templates/call-back-form-template
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 206. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/sponsorship-request-form-2570
- **Finding key:** `a4f8737e79510571`
- **Observed:** title shared by 2 scanned pages: "sponsorship request form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/sponsorship-request-form-48548
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 207. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/sponsorship-request-form-48548
- **Finding key:** `faa66acf616a78b4`
- **Observed:** title shared by 2 scanned pages: "sponsorship request form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/sponsorship-request-form-2570
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 208. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/travel-request-form-33239
- **Finding key:** `53bfed8ac5c4b6aa`
- **Observed:** title shared by 2 scanned pages: "travel request form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/travel-request-form-48536
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 209. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/travel-request-form-48536
- **Finding key:** `8c9d3471537cf72d`
- **Observed:** title shared by 2 scanned pages: "travel request form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/travel-request-form-33239
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 210. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/uncover-your-inner-you-4124
- **Finding key:** `d84aaa2489ef3b27`
- **Observed:** title shared by 2 scanned pages: "free personality quiz: which type are you? | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/fun-personality-quiz
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 211. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/video-consent-form
- **Finding key:** `8b9570284284531f`
- **Observed:** title shared by 2 scanned pages: "video consent form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/video-consent-form-2491
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 212. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/video-consent-form-2491
- **Finding key:** `c61555184f0f6293`
- **Observed:** title shared by 2 scanned pages: "video consent form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T05:44:50Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 6
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 6
- **Evidence:**
- also on: https://formester.com/templates/video-consent-form
- **Review verdict (2026-09-01, Claude):** ❌ False positive — redirect-pair artifact: the numbered slug 301s to the canonical one; the API returns only one template. The crawler counted one page twice via the stale sitemap entry (see the matching sitemap-redirect finding).

### 213. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/volunteer-signup-form-20521
- **Finding key:** `3b99ded50bd6fe31`
- **Observed:** title shared by 2 scanned pages: "volunteer sign-up form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- also on: https://formester.com/templates/volunteer-signup-form-27616
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 214. [needs-review · low] `duplicate-title`

- **URL:** https://formester.com/templates/volunteer-signup-form-27616
- **Finding key:** `ae333c4755e9257e`
- **Observed:** title shared by 2 scanned pages: "volunteer sign-up form | formester"
- **Recommendation:** Differentiate the titles so each page targets its own query set.
- **First seen:** `2026-08-03T06:46:07Z`
- **Last seen:** `2026-08-29T17:37:16Z`
- **Occurrences:** 5
- **Last batch:** `batch-20260829T173130Z-025`
- **Batches recorded:** 5
- **Evidence:**
- also on: https://formester.com/templates/volunteer-signup-form-20521
- **Review verdict (2026-09-01, Claude):** 🏗️ Genuine, app-side — two DISTINCT live templates share the same name in app.formester.com/templates.json, so both pages render the same <title>. Rename or retire one template in the app; the site just reflects the API.

### 215. [needs-review · low] `template-marker-review`

- **URL:** https://formester.com/blog/how-to-make-feedback-form-in-html
- **Finding key:** `3b1890d59c8de6ac`
- **Observed:** literal 'null': "null"
- **Recommendation:** Confirm whether this literal is intended copy; if it is a rendering artefact, fix the binding.
- **First seen:** `2026-08-02T17:02:18Z`
- **Last seen:** `2026-08-02T17:02:18Z`
- **Occurrences:** 1
- **Last batch:** `batch-20260802T170104Z-008`
- **Batches recorded:** 1
- **Evidence:**
- …errorEl) errorEl.textContent = ''; } form.addEventListener('submit', function (event) { let firstInvalid = null; [...form.querySelectorAll('input, select, textarea')].forEach((input) => { clearError(input); if (!input.…
- may be legitimate copy - verify visually

## Export integrity

- `finding_rows_exported`: 215
- `finding_rows_in_state`: 215
- `latest_batch`: batch-20260829T173130Z-025
- This file was produced directly from `state/findings.json`, `state/inventory.json`, and `state/runlog.json`; it contains no customer support transcripts or customer PII.
- **Review verdict (2026-09-01, Claude):** ❌ False positive — the literal 'null' is inside a JavaScript code sample the post teaches ('let firstInvalid = null;'). Intended copy.

