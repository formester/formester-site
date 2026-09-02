---
slug: "how-to-make-a-fillable-form-in-word"
title: "How to Make a Fillable Form in Microsoft Word?"
description: "Learn how to make a fillable form in Word like a pro with this comprehensive guide & start collecting data with your fillable forms."
metaTitle: "How to Make a Fillable Form in Microsoft Word?"
metaDescription: "Learn how to make a fillable form in Word like a pro with this comprehensive guide & start collecting data with your fillable forms."
keywords: "how to make a fillable pdf form in word,\nhow to create fillable forms in word,\nhow do i create a fillable form in word,\nhow to make a fillable form in word,\n"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "an illustration on how to make a fillable form in ms word"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_create_a_fillable_form_in_ms_word_f0dbae3900.png","width":1214,"height":630}
metaImage: []
jsonld: [{"name":"How to Make a Fillable Form in Word","step":[{"url":"https://formester.com/blog/how-to-make-a-fillable-form-in-word/#step-1-turn-on-the-developer-tab-in-word","name":"Turn on the Developer tab","text":"Open Word, click File, click Options, click Customize Ribbon, tick the Developer checkbox in the right column, click OK. On Mac: click Word, Preferences, Ribbon & Toolbar, tick Developer, Save.","@type":"HowToStep","position":1},{"url":"https://formester.com/blog/how-to-make-a-fillable-form-in-word/#step-2-plan-the-form-before-you-open-the-developer-tab","name":"Plan the form content","text":"Define the form objective, the audience, the question types, and the question order before opening the Developer tab.","@type":"HowToStep","position":2},{"url":"https://formester.com/blog/how-to-make-a-fillable-form-in-word/#step-3-insert-and-customize-fillable-fields","name":"Insert and customize fillable fields","text":"Click Design Mode under the Developer tab. Insert content controls under each question: Plain Text or Rich Text for text answers, Check Box for yes/no, Combo Box or Drop-Down for choices, Date Picker for dates.","@type":"HowToStep","position":3},{"url":"https://formester.com/blog/how-to-make-a-fillable-form-in-word/#step-4-lock-the-form-with-restrict-editing-then-test-and-share","name":"Lock the form with Restrict Editing, then test and share","text":"On Windows: Developer, Restrict Editing, pick 'Filling in forms,' click Yes, Start Enforcing Protection. On Mac: Review, Protect Document, tick 'Protect document for: Filling in forms.' Test every field with Design Mode off. Save as .docx or export to PDF.","@type":"HowToStep","position":4}],"tool":[{"name":"Developer tab in Word","@type":"HowToTool"}],"@type":"HowTo","supply":[{"name":"Microsoft Word (2016, 2019, 2021, 2024, or Microsoft 365)","@type":"HowToSupply"}],"@context":"https://schema.org","totalTime":"PT15M","description":"Step-by-step guide to creating a fillable form in Microsoft Word on Windows, Mac, and the Web, including enabling the Developer tab, inserting content controls, and locking the form for filling."}]
createdAt: "2024-06-06T19:00:50.775Z"
updatedAt: "2026-06-15T04:47:45.137Z"
publishedAt: "2026-06-15T04:47:45.131Z"
---
<style>
/* batch-1 blog normalisation */
.fmstr-blog-lead {
  font-size: 17px !important;
  line-height: 1.65 !important;
  color: #475467 !important;
  font-weight: 400 !important;
  margin: 0 0 16px !important;
}
.fmstr-blog-lead a { color: #6941c6 !important; font-weight: 500; }
.fmstr-blog-lead a:hover { text-decoration: underline !important; }
.fmstr-blog-lead strong { color: #101828; font-weight: 700; }
section[class^="fmstr-cmp-"], section[class*=" fmstr-cmp-"] {
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}
@media (max-width: 540px) {
  section[class^="fmstr-cmp-"], section[class*=" fmstr-cmp-"] {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
}
</style>

<style id="fmstr-blog-mobile-fullwidth-v3">
/* Mobile full-width — Batch 3, applied at <=540px only.
   Desktop / tablet layout (>=541px) is untouched and matches the RTL blog. */
@media (max-width: 760px) {
  .art-section { padding-left: 12px !important; padding-right: 12px !important; }
}
@media (max-width: 540px) {
  /* 1. Trim the host blog template wrapper */
  .art-section { padding-left: 6px !important; padding-right: 6px !important; padding-top: 24px !important; }

  /* 2. Zero horizontal padding on every component root */
  section[class^="fmstr-cmp-"], section[class*=" fmstr-cmp-"] {
    padding-left: 0 !important; padding-right: 0 !important;
    overflow-x: hidden !important; box-sizing: border-box !important;
  }
  section[class^="fmstr-cmp-"] *, section[class^="fmstr-cmp-"] *::before, section[class^="fmstr-cmp-"] *::after { box-sizing: border-box !important; }
  section[class^="fmstr-cmp-"] > *, section[class^="fmstr-cmp-"] > * > * { min-width: 0 !important; }

  /* 3. Container fills the section */
  section[class^="fmstr-cmp-"] [class*="__container"] {
    padding-left: 0 !important; padding-right: 0 !important;
    max-width: 100% !important; width: 100% !important;
  }

  /* 4. Tighten every inner card / step / panel / row / fix-callout horizontal padding */
  section[class^="fmstr-cmp-"] [class*="__card"],
  section[class^="fmstr-cmp-"] [class*="__step"],
  section[class^="fmstr-cmp-"] [class*="__panel"],
  section[class^="fmstr-cmp-"] [class*="__tool"],
  section[class^="fmstr-cmp-"] [class*="__verdict"],
  section[class^="fmstr-cmp-"] [class*="__row"],
  section[class^="fmstr-cmp-"] [class*="__fix"],
  section[class^="fmstr-cmp-"] [class*="__callout"],
  section[class^="fmstr-cmp-"] [class*="__quote"],
  section[class^="fmstr-cmp-"] [class*="__tldr"],
  section[class^="fmstr-cmp-"] [class*="__answer"],
  section[class^="fmstr-cmp-"] [class*="__faq"],
  section[class^="fmstr-cmp-"] details {
    padding-left: 14px !important; padding-right: 14px !important;
    margin-left: 0 !important; margin-right: 0 !important;
  }

  /* 5. Tighten typography so long words wrap cleanly */
  section[class^="fmstr-cmp-"] p, section[class^="fmstr-cmp-"] li { font-size: 15px !important; line-height: 1.6 !important; }
  section[class^="fmstr-cmp-"] h2 { font-size: 22px !important; line-height: 1.22 !important; }
  section[class^="fmstr-cmp-"] h3 { font-size: 18px !important; line-height: 1.3 !important; }
  section[class^="fmstr-cmp-"] h4 { font-size: 16px !important; line-height: 1.35 !important; }

  /* 6. Tables become horizontal-scroll */
  section[class^="fmstr-cmp-"] table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100% !important; }
  section[class^="fmstr-cmp-"] img, section[class^="fmstr-cmp-"] iframe, section[class^="fmstr-cmp-"] video { max-width: 100% !important; height: auto !important; }

  /* 7. Code / pre wrap */
  section[class^="fmstr-cmp-"] pre, section[class^="fmstr-cmp-"] code {
    white-space: pre-wrap !important; overflow-wrap: anywhere !important; word-break: break-word !important;
  }
  section[class^="fmstr-cmp-"] pre { overflow-x: auto; }

  /* 8. Lead block keeps its 16-px-ish padding via .art-section wrapper, font slightly smaller */
  .fmstr-blog-lead { font-size: 16.5px !important; }
}
</style>

<p class="fmstr-blog-lead">To make a fillable form in Microsoft Word in four steps:

1. Turn on the Developer tab (File, Options, Customize Ribbon, check Developer). 2. Type your form labels and questions. 3. Insert content controls (text box, checkbox, drop-down, date picker) under the Developer tab. 4.</p>

<p class="fmstr-blog-lead">Lock the form with Restrict Editing so people fill it in but cannot change the layout. This guide covers Word for Windows (2016, 2019, 2021, 2024, Microsoft 365), Word for Mac, and what Word for the Web can and cannot do.</p>

<p class="fmstr-blog-lead">You will also get a working troubleshooting block for the three errors that derail most people, and a clean comparison with online form builders for anyone who wants something easier to share, track, and embed.</p>

<style>
.fmstr-cmp-tmpl-tldr a { text-decoration: none !important; }
.fmstr-cmp-tmpl-tldr {
--c-card: #f7f3ff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6; --c-violet-700: #5b34b1;
--c-edge: #e4d7ff; --c-border: #d6c2f7;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);
background: transparent;
padding: 28px 0 40px;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important;
}
.fmstr-cmp-tmpl-tldr *, .fmstr-cmp-tmpl-tldr *::before, .fmstr-cmp-tmpl-tldr *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-tldr__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-tldr__card {
background: var(--c-card);
border: 1px solid var(--c-border);
border-left: 4px solid var(--c-violet-500);
border-radius: 14px;
padding: 22px 26px;
box-shadow: var(--c-shadow);
display: flex; flex-direction: column; gap: 10px;
}
.fmstr-cmp-tmpl-tldr__label {
font-size: 12px !important;
font-weight: 700 !important;
letter-spacing: 0.08em !important;
text-transform: uppercase;
color: var(--c-violet-700) !important;
display: inline-flex;
align-items: center;
gap: 8px;
margin: 0 !important;
}
.fmstr-cmp-tmpl-tldr__label::before {
content: "";
width: 8px; height: 8px; border-radius: 9999px;
background: var(--c-violet-500);
display: inline-block;
}
.fmstr-cmp-tmpl-tldr__body {
font-size: 16px !important;
line-height: 1.65 !important;
color: var(--c-fg-1);
margin: 0 !important;
font-weight: 500 !important;
}
.fmstr-cmp-tmpl-tldr__body strong { color: var(--c-violet-700); font-weight: 700; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-tldr { padding: 20px 0 28px; }
.fmstr-cmp-tmpl-tldr__card { padding: 18px 20px; }
.fmstr-cmp-tmpl-tldr__body { font-size: 15px !important; }
}
</style>

<section class="fmstr-cmp-tmpl-tldr" aria-labelledby="fmstr-cmp-tmpl-tldr-label">
<div class="fmstr-cmp-tmpl-tldr__container">
<div class="fmstr-cmp-tmpl-tldr__card">
<p class="fmstr-cmp-tmpl-tldr__label" id="fmstr-cmp-tmpl-tldr-label">Quick answer</p>
<p class="fmstr-cmp-tmpl-tldr__body">To make a fillable form in Microsoft Word: <strong>turn on the Developer tab</strong> (File, Options, Customize Ribbon, tick Developer), type your labels, insert <strong>content controls</strong> (text box, checkbox, drop-down, date picker) under the Developer tab, then <strong>lock the form with Restrict Editing</strong> so people fill it in but cannot change the layout. This guide covers Word for Windows, Word for Mac, and what Word for the Web can and cannot do, plus the 3 errors that derail most people.</p>
</div>
</div>
</section>


<style>
.fmstr-cmp-tmpl-cmp a { text-decoration: none !important; }
.fmstr-cmp-tmpl-cmp {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6; --c-violet-700: #5b34b1;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);
--c-good: #12b76a; --c-bad: #f04438;
background: transparent;
padding: 48px 0;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important;
overflow-x: hidden;
}
.fmstr-cmp-tmpl-cmp *, .fmstr-cmp-tmpl-cmp *::before, .fmstr-cmp-tmpl-cmp *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-cmp > *, .fmstr-cmp-tmpl-cmp > * > * { min-width: 0; }
.fmstr-cmp-tmpl-cmp__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-cmp__head { margin: 0 0 28px !important; }
.fmstr-cmp-tmpl-cmp__h2 {
font-size: clamp(26px, 3vw, 36px) !important; font-weight: 700 !important; line-height: 1.15 !important;
letter-spacing: -.02em !important; margin: 0 !important; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-cmp__intro { color: var(--c-fg-3); font-size: 17px !important; line-height: 1.6 !important; margin: 14px 0 0 !important; }
.fmstr-cmp-tmpl-cmp__grid {
display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.fmstr-cmp-tmpl-cmp__card {
background: var(--c-card);
border: 1px solid var(--c-border);
border-radius: 14px;
padding: 22px;
box-shadow: var(--c-shadow);
display: flex; flex-direction: column; gap: 12px;
min-width: 0;
}
.fmstr-cmp-tmpl-cmp__card--featured {
border-color: var(--c-edge);
background: var(--c-tint);
box-shadow: 0 4px 18px rgba(105,65,198,.10);
}
.fmstr-cmp-tmpl-cmp__chip {
display: inline-flex; align-items: center;
font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
text-transform: uppercase; color: var(--c-violet-700) !important;
background: var(--c-tint); border: 1px solid var(--c-edge);
padding: 4px 10px; border-radius: 9999px;
align-self: flex-start;
}
.fmstr-cmp-tmpl-cmp__name {
font-size: 18px; font-weight: 700; color: var(--c-fg-1);
margin: 0; line-height: 1.3;
}
.fmstr-cmp-tmpl-cmp__best {
font-size: 13.5px; color: var(--c-fg-3); margin: 0;
}
.fmstr-cmp-tmpl-cmp__best strong { color: var(--c-fg-1); font-weight: 600; }
.fmstr-cmp-tmpl-cmp__divider {
height: 1px; background: var(--c-border); margin: 4px 0; border: 0;
}
.fmstr-cmp-tmpl-cmp__list {
margin: 0; padding: 0; list-style: none;
display: flex; flex-direction: column; gap: 8px;
}
.fmstr-cmp-tmpl-cmp__item {
display: flex; gap: 8px; align-items: flex-start;
font-size: 14px; line-height: 1.5; color: var(--c-fg-2);
}
.fmstr-cmp-tmpl-cmp__item::before {
content: "\2713"; flex-shrink: 0;
color: var(--c-good); font-weight: 700; line-height: 1.45;
}
.fmstr-cmp-tmpl-cmp__item--con::before { content: "\2717"; color: var(--c-bad); }

@media (max-width: 920px) {
.fmstr-cmp-tmpl-cmp__grid { grid-template-columns: 1fr; gap: 12px; }
}
@media (max-width: 540px) {
.fmstr-cmp-tmpl-cmp { padding: 36px 0; }
.fmstr-cmp-tmpl-cmp__card { padding: 18px 20px; }
}
</style>

<section class="fmstr-cmp-tmpl-cmp" aria-labelledby="fmstr-cmp-tmpl-cmp-h2">
<div class="fmstr-cmp-tmpl-cmp__container">
<div class="fmstr-cmp-tmpl-cmp__head">
<h2 class="fmstr-cmp-tmpl-cmp__h2" id="fmstr-cmp-tmpl-cmp-h2">Word desktop vs Word for the Web vs an online form builder</h2>
<p class="fmstr-cmp-tmpl-cmp__intro">Three ways to ship a fillable form. Pick by where your audience opens it and how you want the answers back.</p>
</div>
<div class="fmstr-cmp-tmpl-cmp__grid">

<div class="fmstr-cmp-tmpl-cmp__card">
<span class="fmstr-cmp-tmpl-cmp__chip">Option 1</span>
<h3 class="fmstr-cmp-tmpl-cmp__name">Word desktop (Windows or Mac)</h3>
<p class="fmstr-cmp-tmpl-cmp__best"><strong>Best for:</strong> One-off internal forms printed or emailed back</p>
<hr class="fmstr-cmp-tmpl-cmp__divider">
<ul class="fmstr-cmp-tmpl-cmp__list">
<li class="fmstr-cmp-tmpl-cmp__item">Free if you have Microsoft 365</li>
<li class="fmstr-cmp-tmpl-cmp__item">Works offline</li>
<li class="fmstr-cmp-tmpl-cmp__item">Familiar interface, no training</li>
<li class="fmstr-cmp-tmpl-cmp__item">Easy to print as a paper backup</li>
<li class="fmstr-cmp-tmpl-cmp__item--con fmstr-cmp-tmpl-cmp__item">No response collection, copy answers by hand</li>
<li class="fmstr-cmp-tmpl-cmp__item--con fmstr-cmp-tmpl-cmp__item">No conditional logic or validation</li>
</ul>
</div>

<div class="fmstr-cmp-tmpl-cmp__card">
<span class="fmstr-cmp-tmpl-cmp__chip">Option 2</span>
<h3 class="fmstr-cmp-tmpl-cmp__name">Word for the Web (browser)</h3>
<p class="fmstr-cmp-tmpl-cmp__best"><strong>Best for:</strong> Viewing only, not building or editing fillable forms</p>
<hr class="fmstr-cmp-tmpl-cmp__divider">
<ul class="fmstr-cmp-tmpl-cmp__list">
<li class="fmstr-cmp-tmpl-cmp__item">Free with a Microsoft account</li>
<li class="fmstr-cmp-tmpl-cmp__item">No install needed</li>
<li class="fmstr-cmp-tmpl-cmp__item--con fmstr-cmp-tmpl-cmp__item">No Developer tab in the browser</li>
<li class="fmstr-cmp-tmpl-cmp__item--con fmstr-cmp-tmpl-cmp__item">Content controls show as static text</li>
<li class="fmstr-cmp-tmpl-cmp__item--con fmstr-cmp-tmpl-cmp__item">Cannot enforce Restrict Editing for forms</li>
<li class="fmstr-cmp-tmpl-cmp__item--con fmstr-cmp-tmpl-cmp__item">User input does not save in browser</li>
</ul>
</div>

<div class="fmstr-cmp-tmpl-cmp__card fmstr-cmp-tmpl-cmp__card--featured">
<span class="fmstr-cmp-tmpl-cmp__chip">Option 3</span>
<h3 class="fmstr-cmp-tmpl-cmp__name">Online form builder (Formester)</h3>
<p class="fmstr-cmp-tmpl-cmp__best"><strong>Best for:</strong> Sharing a link, collecting responses, mobile users</p>
<hr class="fmstr-cmp-tmpl-cmp__divider">
<ul class="fmstr-cmp-tmpl-cmp__list">
<li class="fmstr-cmp-tmpl-cmp__item">Share via public URL or embed</li>
<li class="fmstr-cmp-tmpl-cmp__item">Responses land in a single dashboard</li>
<li class="fmstr-cmp-tmpl-cmp__item">Conditional logic and field validation</li>
<li class="fmstr-cmp-tmpl-cmp__item">Mobile responsive out of the box</li>
<li class="fmstr-cmp-tmpl-cmp__item">E-signature built in</li>
<li class="fmstr-cmp-tmpl-cmp__item">Export to fillable PDF when needed</li>
</ul>
</div>

</div>
</div>
</section>


<style>
.fmstr-cmp-tmpl-steps a { text-decoration: none !important; }
.fmstr-cmp-tmpl-steps {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6; --c-violet-700: #5b34b1;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);
background: transparent;
padding: 48px 0;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important;
overflow-x: hidden;
}
.fmstr-cmp-tmpl-steps *, .fmstr-cmp-tmpl-steps *::before, .fmstr-cmp-tmpl-steps *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-steps > *, .fmstr-cmp-tmpl-steps > * > * { min-width: 0; }
.fmstr-cmp-tmpl-steps__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-steps__head { margin: 0 0 28px !important; }
.fmstr-cmp-tmpl-steps__h2 {
font-size: clamp(26px, 3vw, 36px) !important; font-weight: 700 !important; line-height: 1.15 !important;
letter-spacing: -.02em !important; margin: 0 !important; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-steps__intro { color: var(--c-fg-3); font-size: 17px !important; line-height: 1.6 !important; margin: 14px 0 0 !important; }
.fmstr-cmp-tmpl-steps__group {
margin: 28px 0 0;
}
.fmstr-cmp-tmpl-steps__group-label {
display: inline-flex; align-items: center;
font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.08em !important;
text-transform: uppercase; color: var(--c-violet-700) !important;
background: var(--c-tint); border: 1px solid var(--c-edge);
padding: 6px 12px; border-radius: 9999px;
margin: 0 0 14px !important;
}
.fmstr-cmp-tmpl-steps__list {
display: flex; flex-direction: column; gap: 14px;
margin: 0; padding: 0; list-style: none;
}
.fmstr-cmp-tmpl-steps__item {
background: var(--c-card);
border: 1px solid var(--c-border);
border-radius: 14px;
padding: 22px 24px;
box-shadow: var(--c-shadow);
display: flex; gap: 18px;
align-items: flex-start;
min-width: 0;
}
.fmstr-cmp-tmpl-steps__num {
flex-shrink: 0;
width: 38px; height: 38px; border-radius: 10px;
background: var(--c-tint);
border: 1px solid var(--c-edge);
color: var(--c-violet-700) !important;
font-weight: 800; font-size: 16px;
display: inline-flex; align-items: center; justify-content: center;
}
.fmstr-cmp-tmpl-steps__main { flex: 1; min-width: 0; }
.fmstr-cmp-tmpl-steps__title {
font-size: 17px !important; font-weight: 700 !important; line-height: 1.3 !important;
color: var(--c-fg-1); margin: 0 0 6px !important;
}
.fmstr-cmp-tmpl-steps__body {
font-size: 15px !important; line-height: 1.6 !important;
color: var(--c-fg-2); margin: 0 !important;
}

@media (max-width: 540px) {
.fmstr-cmp-tmpl-steps { padding: 36px 0; }
.fmstr-cmp-tmpl-steps__item { padding: 18px 20px; gap: 14px; }
.fmstr-cmp-tmpl-steps__num { width: 34px; height: 34px; font-size: 15px; }
.fmstr-cmp-tmpl-steps__title { font-size: 16px !important; }
.fmstr-cmp-tmpl-steps__body { font-size: 14.5px !important; }
}
</style>

<section class="fmstr-cmp-tmpl-steps" aria-labelledby="fmstr-cmp-tmpl-steps-h2">
<div class="fmstr-cmp-tmpl-steps__container">
<div class="fmstr-cmp-tmpl-steps__head">
<h2 class="fmstr-cmp-tmpl-steps__h2" id="fmstr-cmp-tmpl-steps-h2">Build a fillable form in Word desktop</h2>
<p class="fmstr-cmp-tmpl-steps__intro">Same 4 steps on both platforms. The menu paths differ slightly on Mac, so each path is called out.</p>
</div>

<div class="fmstr-cmp-tmpl-steps__group">
<p class="fmstr-cmp-tmpl-steps__group-label">Windows path</p>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Turn on the Developer tab</h3>
<p class="fmstr-cmp-tmpl-steps__body">File, Options, Customize Ribbon. In the right column under Main Tabs, tick the Developer checkbox. Click OK. The Developer tab now appears in your ribbon.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Type your labels and questions</h3>
<p class="fmstr-cmp-tmpl-steps__body">Lay out the form like a normal document. Write each question or field label first. Leave a blank space after each label, that is where the content control will sit.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Insert content controls under each label</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click the Developer tab, then Design Mode. Place your cursor after a label and pick a control: Plain Text or Rich Text for text answers, Check Box for yes/no, Combo Box or Drop-Down for choices, Date Picker for dates. Right-click any control and choose Properties to set the field title, default text, or list options.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Lock the form with Restrict Editing</h3>
<p class="fmstr-cmp-tmpl-steps__body">Developer, Restrict Editing. In the panel, tick "Allow only this type of editing in the document" and pick "Filling in forms". Click Yes, Start Enforcing Protection. Add a password if you want to stop layout edits. Save as .docx for editable forms, or File, Save As, PDF for a fillable PDF that opens the same in every reader.</p>
</div>
</li>

</ol>
</div>

<div class="fmstr-cmp-tmpl-steps__group">
<p class="fmstr-cmp-tmpl-steps__group-label">Mac path (what changes)</p>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Turn on the Developer tab on Mac</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click Word in the top menu bar (next to the Apple icon), then Preferences. Click Ribbon &amp; Toolbar. In the right column, tick Developer. Click Save.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Insert controls (same as Windows)</h3>
<p class="fmstr-cmp-tmpl-steps__body">Text boxes, checkboxes, combo boxes, drop-downs, and date pickers all match the Windows controls.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Lock under Review, not Developer</h3>
<p class="fmstr-cmp-tmpl-steps__body">On Mac, form locking lives under Review, Protect Document. Tick "Protect document for: Filling in forms", add a password if needed, click OK.</p>
</div>
</li>

</ol>
</div>

</div>
</section>

<style>
.fmstr-cmp-tmpl-midcta a { text-decoration: none !important; }
.fmstr-cmp-tmpl-midcta { background: transparent; padding: 48px 0; font-family: inherit; color: #101828; overflow-x: hidden; }
.fmstr-cmp-tmpl-midcta *, .fmstr-cmp-tmpl-midcta *::before, .fmstr-cmp-tmpl-midcta *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-midcta__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-midcta__card { width: 100%; background: linear-gradient(135deg, #f7f3ff 0%, #faf7ff 100%); border: 1px solid #e4d7ff; border-radius: 18px; padding: 48px 32px; text-align: center; box-shadow: 0 4px 24px rgba(127, 86, 217, 0.08); }
.fmstr-cmp-tmpl-midcta__inner { max-width: 760px; margin: 0 auto; }
.fmstr-cmp-tmpl-midcta__eyebrow { display: inline-block; padding: 4px 12px; background: #ffffff; border: 1px solid #e4d7ff; border-radius: 9999px; color: #5b34b1 !important; font-size: 11.5px !important; font-weight: 700 !important; letter-spacing: 0.06em !important; text-transform: uppercase; margin: 0 0 14px !important; }
.fmstr-cmp-tmpl-midcta__h2 { font-size: clamp(22px, 3vw, 28px) !important; font-weight: 700 !important; line-height: 1.2 !important; letter-spacing: -0.02em !important; margin: 0 0 12px !important; color: #101828 !important; }
.fmstr-cmp-tmpl-midcta__body { font-size: 16px !important; line-height: 1.55 !important; color: #475467 !important; margin: 0 0 22px !important; }
.fmstr-cmp-tmpl-midcta__cta { display: inline-flex !important; align-items: center; gap: 8px; background: #7f56d9 !important; color: #ffffff !important; border: 1px solid #7f56d9 !important; padding: 12px 26px !important; border-radius: 9999px !important; font-size: 15px !important; font-weight: 600 !important; text-decoration: none !important; transition: background .15s ease, transform .15s ease; }
.fmstr-cmp-tmpl-midcta__cta:hover { background: #6941c6 !important; border-color: #6941c6 !important; color: #ffffff !important; text-decoration: none !important; transform: translateY(-1px); }
.fmstr-cmp-tmpl-midcta__cta::after { content: "\2192"; transition: transform .15s ease; }
.fmstr-cmp-tmpl-midcta__cta:hover::after { transform: translateX(2px); }
.fmstr-cmp-tmpl-midcta__strip { font-size: 13px !important; color: #697586 !important; margin: 20px 0 0 !important; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 6px 14px; width: 100%; }
.fmstr-cmp-tmpl-midcta__strip span { color: #d6c2f7; }
@media (max-width: 760px) {
  .fmstr-cmp-tmpl-midcta__card { padding: 36px 22px; }
}
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-midcta { padding: 32px 0; }
  .fmstr-cmp-tmpl-midcta__card { padding: 26px 16px; border-radius: 14px; }
  .fmstr-cmp-tmpl-midcta__h2 { font-size: 20px !important; }
  .fmstr-cmp-tmpl-midcta__body { font-size: 15px !important; }
  .fmstr-cmp-tmpl-midcta__cta { padding: 11px 22px !important; font-size: 14.5px !important; width: 100%; justify-content: center; }
  .fmstr-cmp-tmpl-midcta__strip { font-size: 12.5px !important; gap: 4px 10px; }
}
</style>

<section class="fmstr-cmp-tmpl-midcta" aria-labelledby="fmstr-cmp-tmpl-midcta-h2">
<div class="fmstr-cmp-tmpl-midcta__container">
<div class="fmstr-cmp-tmpl-midcta__card">
<div class="fmstr-cmp-tmpl-midcta__inner">
<span class="fmstr-cmp-tmpl-midcta__eyebrow">No more Word</span>
<h2 class="fmstr-cmp-tmpl-midcta__h2" id="fmstr-cmp-tmpl-midcta-h2">Build a fillable form in 2 minutes, without Word</h2>
<p class="fmstr-cmp-tmpl-midcta__body">Drag, drop, share. Respondents fill on any device, you get clean data, no print-and-scan loop.</p>
<a class="fmstr-cmp-tmpl-midcta__cta" href="https://app.formester.com/users/sign_up" style="background: #7f56d9 !important; color: #ffffff !important; border-color: #7f56d9 !important; text-decoration: none !important;">Start free on Formester</a>
<p class="fmstr-cmp-tmpl-midcta__strip">Free forever plan<span>&bull;</span>No credit card<span>&bull;</span>Setup in 2 minutes</p>
</div>
</div>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-tmpl-faq a { text-decoration: none !important; }
.fmstr-cmp-tmpl-faq {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0; --c-chip-bg: #f4f4f7;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important;
}
.fmstr-cmp-tmpl-faq *, .fmstr-cmp-tmpl-faq *::before, .fmstr-cmp-tmpl-faq *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-faq__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-faq__h2 { font-size: clamp(26px, 3vw, 36px) !important; font-weight: 700 !important; line-height: 1.15 !important; letter-spacing: -.02em !important; margin: 0 !important; color: var(--c-fg-1); text-align: left; }
.fmstr-cmp-tmpl-faq__intro { color: var(--c-fg-3); font-size: 17px !important; line-height: 1.6 !important; margin: 14px 0 28px !important; text-align: left; }
.fmstr-cmp-tmpl-faq__list { display: flex; flex-direction: column; gap: 12px; }
.fmstr-cmp-tmpl-faq__item {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; box-shadow: var(--c-shadow); overflow: hidden;
}
.fmstr-cmp-tmpl-faq__item > summary {
padding: 18px 22px; cursor: pointer; font-weight: 600; font-size: 16.5px;
color: var(--c-fg-1); display: flex; align-items: center; gap: 14px;
list-style: none;
}
.fmstr-cmp-tmpl-faq__item > summary::-webkit-details-marker { display: none; }
.fmstr-cmp-tmpl-faq__item > summary::before {
content: ""; width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
background-color: var(--c-chip-bg);
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%2375747f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5l4 4 4-4'/%3E%3C/svg%3E");
background-repeat: no-repeat; background-position: center;
transition: transform .15s ease, background-color .15s ease;
}
.fmstr-cmp-tmpl-faq__item[open] > summary::before { transform: rotate(180deg); background-color: var(--c-tint); }
.fmstr-cmp-tmpl-faq__item[open] > summary { color: var(--c-violet-600) !important; }
.fmstr-cmp-tmpl-faq__answer { padding: 0 22px 22px 64px; color: var(--c-fg-2); font-size: 15.5px; line-height: 1.7; }
.fmstr-cmp-tmpl-faq__answer a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-tmpl-faq__answer a:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-tmpl-faq { padding: 40px 16px; }
.fmstr-cmp-tmpl-faq__intro { font-size: 15.5px !important; text-align: left; }
.fmstr-cmp-tmpl-faq__item > summary { padding: 16px 16px; font-size: 15.5px; gap: 12px; }
.fmstr-cmp-tmpl-faq__item > summary::before { width: 26px; height: 26px; }
.fmstr-cmp-tmpl-faq__answer { padding: 0 16px 18px 16px; font-size: 15px; line-height: 1.65; }
}
</style>

<section class="fmstr-cmp-tmpl-faq" aria-labelledby="fmstr-cmp-tmpl-faq-h2">
<div class="fmstr-cmp-tmpl-faq__container">
<h2 class="fmstr-cmp-tmpl-faq__h2" id="fmstr-cmp-tmpl-faq-h2">Frequently asked questions</h2>
<p class="fmstr-cmp-tmpl-faq__intro">Common questions about making a fillable form in Microsoft Word on Windows, Mac, and the Web.</p>
<div class="fmstr-cmp-tmpl-faq__list">

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I turn a Word document into a fillable form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Open the document, turn on the Developer tab (File, Options, Customize Ribbon, tick Developer), then insert content controls (text box, checkbox, drop-down, date picker) under each label. Switch on Restrict Editing to lock the layout so people can only fill in the fields. Save as .docx or export to PDF for sharing.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>What is the easiest way to make a fillable form in Word?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Use a Word form template as your starting point (File, New, search "form") and replace the placeholder fields with your own labels. You skip the layout work and only have to swap the labels and the answer options inside each control.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I create a fillable form in Word without the Developer tab?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">You cannot. Content controls only appear when the Developer tab is enabled. If you cannot enable it (locked-down corporate device, school account, Word for the Web), use a browser-based form builder instead. <a href="https://formester.com/features/drag-and-drop-form-builder/">Formester</a> does not require Word, Office, or any install.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I add a blank fillable line in Word?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">For an underline-style field, type underscores or use a borderless table with a bottom border. For a proper interactive field that captures input, use a Plain Text Content Control from the Developer tab instead. Underscores look like a form but cannot capture data.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I make a fillable form in Word for Mac?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Click Word in the top menu, click Preferences, click Ribbon &amp; Toolbar, tick Developer, click Save. The Developer tab now appears in your ribbon with the same controls as Windows. Form locking lives under Review, Protect Document on Mac, not under the Developer tab.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Why can't I edit my fillable form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Either the document is in Protected View (click "Enable Editing" at the top) or someone has enforced Restrict Editing on it. To unlock: Developer, Restrict Editing, Stop Protection. You may need the original password to remove the lock.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I make a fillable PDF from a Word form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Yes. Build the form in Word with content controls, then go to File, Save As, and pick PDF as the format. The content controls export as interactive PDF fields that work in any PDF reader. If you want a fillable PDF without the Word step, Formester <a href="https://formester.com/blog/how-to-convert-pdf-to-fillable-form/">exports forms directly to fillable PDF</a>.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I collect responses from a Word fillable form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Word does not collect responses for you. Recipients fill in the file, save it, and email it back. You then have to open each one and transfer answers manually. For automatic response collection (a single dashboard with every submission, export to Excel, email alerts), use an online form tool instead of Word.</div>
</details>

</div>
</div>
</section>


<style>
/* host-link-override */
.fmstr-cmp-tmpl-rel a { text-decoration: none !important; }
.fmstr-cmp-tmpl-rel {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06);

background: transparent;
padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important; overflow-x: hidden; -webkit-text-size-adjust: 100%;}
.fmstr-cmp-tmpl-rel *, .fmstr-cmp-tmpl-rel *::before, .fmstr-cmp-tmpl-rel *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-rel__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-rel__head { margin: 0 0 28px; text-align: left; }
.fmstr-cmp-tmpl-rel__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); text-align: left; }
.fmstr-cmp-tmpl-rel__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; text-align: left; }

.fmstr-cmp-tmpl-rel__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.fmstr-cmp-tmpl-rel__card {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px;
text-decoration: none !important; color: inherit !important; transition: all .15s ease;
position: relative;
}
.fmstr-cmp-tmpl-rel__card:hover { border-color: var(--c-edge); box-shadow: var(--c-shadow); transform: translateY(-1px); }
.fmstr-cmp-tmpl-rel__chip {
display: inline-block; padding: 3px 10px; border-radius: 9999px;
background: var(--c-tint); border: 1px solid var(--c-edge);
color: var(--c-violet-600) !important; font-size: 11.5px; font-weight: 600; letter-spacing: .02em;
text-transform: uppercase; align-self: flex-start;
margin-bottom: 2px;
}
.fmstr-cmp-tmpl-rel__title {
font-size: 17px; font-weight: 700; color: var(--c-fg-1); margin: 0; line-height: 1.3; text-align: left; }
.fmstr-cmp-tmpl-rel__body { font-size: 14.5px; line-height: 1.55; color: var(--c-fg-2); margin: 0; }
.fmstr-cmp-tmpl-rel__arrow {
margin-top: 6px; color: var(--c-violet-600) !important; font-size: 14px; font-weight: 600;
display: inline-flex; align-items: center; gap: 6px;
}
.fmstr-cmp-tmpl-rel__arrow::after {
content: "\2192"; transition: transform .15s ease; display: inline-block;
}
.fmstr-cmp-tmpl-rel__card:hover .fmstr-cmp-tmpl-rel__arrow::after { transform: translateX(3px); }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-rel { padding: 40px 16px; }
.fmstr-cmp-tmpl-rel__grid { grid-template-columns: 1fr; gap: 12px; }
.fmstr-cmp-tmpl-rel__card { padding: 20px 22px; }
}


/* mobile-safety-v2 */
.fmstr-cmp-tmpl-rel img, .fmstr-cmp-tmpl-rel table, .fmstr-cmp-tmpl-rel pre, .fmstr-cmp-tmpl-rel iframe, .fmstr-cmp-tmpl-rel video { max-width: 100%; }
.fmstr-cmp-tmpl-rel > * { min-width: 0; }
.fmstr-cmp-tmpl-rel [class*='__grid'] > *, .fmstr-cmp-tmpl-rel [class*='__list'] > *, .fmstr-cmp-tmpl-rel [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-rel pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-tmpl-rel table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
</style>

<section class="fmstr-cmp-tmpl-rel" aria-labelledby="fmstr-cmp-tmpl-rel-h2">
<div class="fmstr-cmp-tmpl-rel__container">
<div class="fmstr-cmp-tmpl-rel__head">
<h2 class="fmstr-cmp-tmpl-rel__h2" id="fmstr-cmp-tmpl-rel-h2">Skip Word, build it online</h2>
<p class="fmstr-cmp-tmpl-rel__intro">Drag-and-drop builder, AI form generator, and related how-to guides if you want a sharable link with response collection.</p>
</div>
<div class="fmstr-cmp-tmpl-rel__grid">

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/features/drag-and-drop-form-builder/">
<span class="fmstr-cmp-tmpl-rel__chip">Formester</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Drag-and-drop form builder</h3>
<p class="fmstr-cmp-tmpl-rel__body">Build a fillable form in the browser, share via link or embed, collect responses to a dashboard.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/ai-form-generator/">
<span class="fmstr-cmp-tmpl-rel__chip">Formester</span>
<h3 class="fmstr-cmp-tmpl-rel__title">AI form generator</h3>
<p class="fmstr-cmp-tmpl-rel__body">Describe the form in one line, get a working form back with the right field types.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/features/electronic-signature/">
<span class="fmstr-cmp-tmpl-rel__chip">Formester</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Electronic signature</h3>
<p class="fmstr-cmp-tmpl-rel__body">Add a signature field to any form. Signed PDFs auto-attach to the response record.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-convert-pdf-to-fillable-form/">
<span class="fmstr-cmp-tmpl-rel__chip">Guide</span>
<h3 class="fmstr-cmp-tmpl-rel__title">How to convert a PDF to a fillable form</h3>
<p class="fmstr-cmp-tmpl-rel__body">Skip Word entirely and convert any flat PDF to an online fillable form.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-add-fillable-fields-in-pdf/">
<span class="fmstr-cmp-tmpl-rel__chip">Guide</span>
<h3 class="fmstr-cmp-tmpl-rel__title">How to add fillable fields in a PDF</h3>
<p class="fmstr-cmp-tmpl-rel__body">Add text inputs, checkboxes, drop-downs, and signature fields to an existing PDF.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-make-canva-pdf-fillable/">
<span class="fmstr-cmp-tmpl-rel__chip">Guide</span>
<h3 class="fmstr-cmp-tmpl-rel__title">How to make a Canva PDF fillable</h3>
<p class="fmstr-cmp-tmpl-rel__body">Three ways to turn a Canva-exported PDF into a fillable form with response collection.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

</div>
</div>
</section>


