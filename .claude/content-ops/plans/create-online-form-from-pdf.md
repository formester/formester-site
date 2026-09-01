# Plan: How to Create an Online Form from a PDF

- Slug: `create-online-form-from-pdf`
- Type: how-to
- Primary keyword: **create online form from pdf** (vol 170, KD 30, transactional/how-to)
- Secondary keywords: pdf to online form (70, KD 60), convert pdf to online form (10, KD 26), turn pdf into online form (10, KD 38), pdf to web form (10, KD 9), ai form generator pdf (GSC: we already rank ~5 via /ai-form-generator/)
- Search intent: informational/transactional — user has a PDF and wants a working online form, fast.
- Date researched: 2026-09-01 (DataForSEO keyword overview + live SERP, GSC 2026-06→08)

## SERP notes
- SERP for the bigger keyword "create form from pdf" (880, KD 19) is dominated by **fillable-PDF intent**: AI Overview + Acrobat, Sejda, iLovePDF — all "make the PDF itself fillable". Our existing post `how-to-convert-pdf-to-fillable-form` already targets that cluster. **Do not target it here — cannibalization risk.**
- The only ranking page with our angle (PDF → hosted web form) is PlatoForms (#4). The web-form-from-PDF cluster is underserved.
- PAA: "How to turn a PDF into a fillable form without Adobe?", "What is the best free program to create a fillable form?", "Can you convert a non-fillable PDF to fillable?", "Where can I create free fillable PDF forms?"
- SERP for the chosen primary keyword "create online form from pdf" (pulled 2026-09-01): #1 Fillout /pdf-to-form, #2 Jotform /fillable-pdf-form-creator, #3 Sejda, #4 iLovePDF, #5 PlatoForms, then pdfFiller, Smallpdf, Adobe web-forms, PDFgear. PAA: "How to turn PDF into online form?", "Can I convert a PDF to a fillable form?", "…online for free?".

## Competitor teardown (top 10, content-bearing pages parsed; Sejda/iLovePDF/pdfFiller/Smallpdf/PDFgear skipped as bare tool UIs, Reddit/videos skipped)
- **Fillout /pdf-to-form (#1)** — thin (~150 words): 3 steps (import → customize → publish), hook is "each form submission generates a filled PDF" + field mappings to the source document, free tier called out (1,000 subs/mo). No FAQ, no comparison, no depth. Beatable on depth and screenshots.
- **Jotform /fillable-pdf-form-creator (#2)** — deep page. Ranking structures: a "Fillable PDF vs web forms" comparison TABLE (layout, offline, mobile, logic, best use cases), two step-by-step flows, big FAQ (~10 questions), honest scanned-PDF caveat ("quality affects text recognition"). Covers both directions (convert existing / create from scratch).
- **PlatoForms homepage (#5)** — testimonial-heavy, use-case proof (HIPAA medical intake, sales contracts, childcare intake), filled-PDF delivery again the headline.
- Takeaways adopted: comparison table in the vs section (Jotform's proven structure), filled-PDF-per-submission surfaced early (all three lead with it), concrete use-case story (PlatoForms pattern). Our edge: real app screenshots + step depth Fillout lacks + honesty about when to keep a PDF.

## Differentiation angle
A fillable PDF is still a PDF — the SERP answers the wrong problem. This post: upload the PDF to Formester, AI reads it and rebuilds it as a real online form (mobile-friendly, validation, logic, notifications), share by link/QR/embed — and you can still generate a filled PDF per submission. Product proof via real app screenshots.

## Own-site check (cannibalization)
- `blog/how-to-convert-pdf-to-fillable-form` — fillable-PDF intent. Sibling post; cross-link both ways, don't overlap keywords.
- `blog/how-to-add-fillable-fields-in-pdf`, `blog/how-to-auto-fill-and-sign-pdfs-with-a-form` — form→PDF direction (reverse of ours). Link where relevant.
- `/features/convert-pdf-to-fillable-form/` — the commercial page for this exact feature. This post is its informational support; link to it prominently.

## Verified product facts (from pages/features/convert-pdf-to-fillable-form.vue — don't invent beyond these)
- Flow: New Form → "PDF to Formester Form" → upload PDF → AI detects/maps fields → review detected fields in the builder → publish → share via link, QR code, or embed.
- AI-detected field types: text boxes, checkboxes, date pickers, e-signatures. Added manually in the builder: dropdowns, file uploads, conditional logic, multi-step. Don't claim detection for the second group. No verified OCR/scanned-PDF support — don't claim it.
- Free to start, runs in the browser, mobile-friendly, Google Sheets/Zapier sync, submissions dashboard + export.

- Target length: 1,200–1,500 words (ranking pages are thin tool pages; depth + screenshots wins here, padding doesn't)
- Audience & tone: ops/HR/admin folks with a stack of PDF paperwork; non-technical. House tone: short, direct, second person, honest.

## Outline
- Intro: the real problem — the PDF isn't the asset, the answers are. (primary kw in first 100 words)
- H2 Fillable PDF vs. online form: which one do you actually need? (secondary kws; comparison note; link to fillable-PDF post)
- H2 How to create an online form from a PDF (steps block, primary kw)
  - Step 1: Create a new form and pick "PDF to Formester Form" [screenshot]
  - Step 2: Upload your PDF [screenshot]
  - Step 3: Let AI detect the fields, then review them in the builder [screenshot]
  - Step 4: Publish and share (link, QR, embed) [screenshot]
- H2 What happens to your submissions (dashboard, notifications, Sheets/Zapier, filled-PDF export — link auto-fill post)
- H2 When this beats a fillable PDF (use cases: applications/intake, registrations, government/patient forms)
- FAQ (adapted from PAA): without Adobe? / scanned or non-fillable PDFs? / free? / which field types get detected? / can respondents still get a PDF copy?
- CTA → /features/convert-pdf-to-fillable-form/ or signup

## Metadata
- title: "How to Create an Online Form from a PDF (No Rebuilding)"
- metaTitle (≤60): "How to Create an Online Form from a PDF | Formester"
- metaDescription (≤155): "Upload a PDF and let AI turn it into an online form. Auto-detected fields, mobile-friendly, shareable by link or QR — no manual rebuilding required."
- keywords: "create online form from pdf, pdf to online form, convert pdf to online form, turn pdf into online form, pdf to web form"
- Cover image concept: split visual — static PDF on the left turning into a live Formester form on the right. Alt: "converting a pdf document into an online form with formester"

## Internal links
- /features/convert-pdf-to-fillable-form/ — "PDF to fillable form" (primary feature link)
- /blog/how-to-convert-pdf-to-fillable-form/ — "convert a PDF to a fillable form" (sibling intent)
- /blog/how-to-auto-fill-and-sign-pdfs-with-a-form/ — "generate a filled, signed PDF from each submission"
- /ai-form-generator/ — "AI form generator"
- /features/electronic-signature/ — "e-signature field"

## Images (placeholders for draft — screenshots from app.formester.com later)
1. cover — PDF-to-form split concept
2. New Form modal with "PDF to Formester Form" option visible
3. PDF upload screen mid-upload
4. Builder showing AI-detected fields next to the source PDF
5. Publish/share screen with link + QR + embed options
