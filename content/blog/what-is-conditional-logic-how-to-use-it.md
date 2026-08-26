---
slug: "what-is-conditional-logic-how-to-use-it"
title: "What is Conditional Logic in Forms? A Practical Guide with 8 Examples"
description: "Conditional logic in forms shows or hides questions based on previous answers. See 8 real examples, the 8 builders that support it, and how to set it up in minu"
metaTitle: "Conditional Logic in Forms: 8 Examples + How to Add"
metaDescription: "Conditional logic in forms shows or hides questions based on previous answers. See 8 real examples, the 8 builders that support it, and how to set it up in minu"
keywords: "conditional logic,\nconditional logic google forms,\nforms with conditional logic,\nwhat is conditional logic,\nform builder with conditional logic,\nbest conditional logic forms,\nconditional logic forms,"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "an illustration of conditional logic"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/Blog_post_cover_1_7f09e73c8f.png","width":1214,"height":630}
metaImage: []
jsonld: [{"@type":"Article","image":"https://formester.com/blog/what-is-conditional-logic-how-to-use-it/preview.png","author":{"url":"https://www.linkedin.com/in/harish-kumar2424/","name":"Harish Kumar","@type":"Person"},"@context":"https://schema.org","headline":"What is Conditional Logic in Forms? A Practical Guide with 8 Examples","publisher":{"logo":{"url":"https://formester.com/logo.svg","@type":"ImageObject"},"name":"Formester","@type":"Organization"},"description":"Conditional logic in forms shows or hides questions based on previous answers. See 8 real examples, the 8 builders that support it, and how to set it up in minutes.","dateModified":"2026-06-11","datePublished":"2024-09-13","mainEntityOfPage":"https://formester.com/blog/what-is-conditional-logic-how-to-use-it/"}]
createdAt: "2024-09-12T19:11:07.554Z"
updatedAt: "2026-06-15T04:44:05.295Z"
publishedAt: "2026-06-15T04:44:05.290Z"
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
@media (max-width: 760px) {
  .art-section { padding-left: 12px !important; padding-right: 12px !important; }
}
@media (max-width: 540px) {
  .art-section { padding-left: 6px !important; padding-right: 6px !important; padding-top: 24px !important; }
  section[class^="fmstr-cmp-"], section[class*=" fmstr-cmp-"] {
    padding-left: 0 !important; padding-right: 0 !important;
    overflow-x: hidden !important; box-sizing: border-box !important;
  }
  section[class^="fmstr-cmp-"] *, section[class^="fmstr-cmp-"] *::before, section[class^="fmstr-cmp-"] *::after { box-sizing: border-box !important; }
  section[class^="fmstr-cmp-"] > *, section[class^="fmstr-cmp-"] > * > * { min-width: 0 !important; }
  section[class^="fmstr-cmp-"] [class*="__container"] {
    padding-left: 0 !important; padding-right: 0 !important;
    max-width: 100% !important; width: 100% !important;
  }
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
  section[class^="fmstr-cmp-"] p, section[class^="fmstr-cmp-"] li { font-size: 15px !important; line-height: 1.6 !important; }
  section[class^="fmstr-cmp-"] h2 { font-size: 22px !important; line-height: 1.22 !important; }
  section[class^="fmstr-cmp-"] h3 { font-size: 18px !important; line-height: 1.3 !important; }
  section[class^="fmstr-cmp-"] h4 { font-size: 16px !important; line-height: 1.35 !important; }
  section[class^="fmstr-cmp-"] table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100% !important; }
  section[class^="fmstr-cmp-"] img, section[class^="fmstr-cmp-"] iframe, section[class^="fmstr-cmp-"] video { max-width: 100% !important; height: auto !important; }
  section[class^="fmstr-cmp-"] pre, section[class^="fmstr-cmp-"] code {
    white-space: pre-wrap !important; overflow-wrap: anywhere !important; word-break: break-word !important;
  }
  section[class^="fmstr-cmp-"] pre { overflow-x: auto; }
  .fmstr-blog-lead { font-size: 16.5px !important; }
}
</style>

<p class="fmstr-blog-lead">Conditional logic is what makes a form ask the right question to the right person. If a respondent answers "yes," they see follow-up questions. If they answer "no," the form skips ahead.</p>

<p class="fmstr-blog-lead">The form gets shorter for every person who fills it in, which is why <a href="https://www.feathery.io/blog/what-is-conditional-logic">conditional-logic forms see roughly 30 percent higher completion rates than static forms</a> in published builder benchmarks.</p>

<p class="fmstr-blog-lead">This guide covers what conditional logic in forms actually is, eight examples by industry, the eight form builders that support it (with the plan tier you need), and a 6-step walkthrough for setting it up inside <a href="https://formester.com/features/conditional-logic/">Formester's conditional logic builder</a>.</p>

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
text-align: left !important; overflow-x: hidden; -webkit-text-size-adjust: 100%;}
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
.fmstr-cmp-tmpl-tldr__body a { color: var(--c-violet-600) !important; font-weight: 600; }
.fmstr-cmp-tmpl-tldr__body a:hover { text-decoration: underline !important; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-tldr { padding: 20px 0 28px; }
.fmstr-cmp-tmpl-tldr__card { padding: 18px 20px; }
.fmstr-cmp-tmpl-tldr__body { font-size: 15px !important; }
}


/* mobile-safety-v2 */
.fmstr-cmp-tmpl-tldr img, .fmstr-cmp-tmpl-tldr table, .fmstr-cmp-tmpl-tldr pre, .fmstr-cmp-tmpl-tldr iframe, .fmstr-cmp-tmpl-tldr video { max-width: 100%; }
.fmstr-cmp-tmpl-tldr > * { min-width: 0; }
.fmstr-cmp-tmpl-tldr [class*='__grid'] > *, .fmstr-cmp-tmpl-tldr [class*='__list'] > *, .fmstr-cmp-tmpl-tldr [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-tldr pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-tmpl-tldr table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
</style>

<section class="fmstr-cmp-tmpl-tldr" aria-labelledby="fmstr-cmp-tmpl-tldr-label">
<div class="fmstr-cmp-tmpl-tldr__container">
<div class="fmstr-cmp-tmpl-tldr__card">
<p class="fmstr-cmp-tmpl-tldr__label" id="fmstr-cmp-tmpl-tldr-label">Quick answer</p>
<p class="fmstr-cmp-tmpl-tldr__body"><strong>Conditional logic</strong> in forms is a rule that shows, hides, or reroutes questions based on what the respondent just answered. Every rule has three parts: a trigger field, a condition (equals, contains, is empty), and an action (show, hide, jump, require, route).</p>
<p class="fmstr-cmp-tmpl-tldr__body">Forms with conditional logic see roughly <a href="https://www.feathery.io/blog/what-is-conditional-logic">30 percent higher completion rates</a> because respondents only see the questions that apply to them.</p>
<p class="fmstr-cmp-tmpl-tldr__body">The 8 examples and builder comparison below cover the patterns that ship most often, plus the 6-step setup inside Formester's conditional logic builder.</p>
</div>
</div>
</section>


<style>
/* host-link-override */
.fmstr-cmp-wicl-cmp a { text-decoration: none !important; }
.fmstr-cmp-wicl-cmp {
--c-bg-section: #f4f4f7; --c-bg-card: #ffffff;
--c-bg-tint: #f7f3ff; --c-bg-edge: #e4d7ff; --c-bg-row: #fafafb;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-600: #6941c6;
--c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1); overflow-x: hidden; -webkit-text-size-adjust: 100%;}
.fmstr-cmp-wicl-cmp *, .fmstr-cmp-wicl-cmp *::before, .fmstr-cmp-wicl-cmp *::after { box-sizing: border-box; }
.fmstr-cmp-wicl-cmp__container { max-width: 1180px; margin: 0 auto; text-align: left; }
.fmstr-cmp-wicl-cmp__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--c-bg-tint); color: var(--c-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--c-bg-edge); margin: 0 0 14px;
}
.fmstr-cmp-wicl-cmp__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-wicl-cmp__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; max-width: 820px; margin: 14px 0 28px; }
.fmstr-cmp-wicl-cmp__card { background: var(--c-bg-card); border: 1px solid var(--c-border); border-radius: 20px; overflow: hidden; box-shadow: var(--c-shadow); text-align: left; }
.fmstr-cmp-wicl-cmp__scroll { overflow-x: auto; }
.fmstr-cmp-wicl-cmp__table { width: 100%; border-collapse: collapse; font-size: 14.5px; min-width: 720px; }
.fmstr-cmp-wicl-cmp__table th, .fmstr-cmp-wicl-cmp__table td { padding: 14px 16px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--c-border); }
.fmstr-cmp-wicl-cmp__table thead th { padding: 12px 16px !important; vertical-align: middle !important; background: var(--c-bg-tint); color: var(--c-violet-600); font-weight: 700; font-size: 12.5px; text-transform: uppercase; letter-spacing: .06em; line-height: 1.3 !important; }
.fmstr-cmp-wicl-cmp__table thead tr { height: 48px; }
.fmstr-cmp-wicl-cmp__table tbody th { font-weight: 600; color: var(--c-fg-1); background: var(--c-bg-row); width: 22%; }
.fmstr-cmp-wicl-cmp__table tbody td { color: var(--c-fg-2); }
.fmstr-cmp-wicl-cmp__table tbody tr:last-child th, .fmstr-cmp-wicl-cmp__table tbody tr:last-child td { border-bottom: 0; }
.fmstr-cmp-wicl-cmp__table a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-wicl-cmp__table a:hover { text-decoration: underline !important; }
.fmstr-cmp-wicl-cmp__table tr.is-pick th { background: linear-gradient(135deg, #7f56d9, #6941c6); color: #ffffff !important; }
.fmstr-cmp-wicl-cmp__table tr.is-pick th a { color: #ffffff !important; }
.fmstr-cmp-wicl-cmp__close { margin: 20px 0 0; font-size: 15px; color: var(--c-fg-3); line-height: 1.6; max-width: 880px; }
.fmstr-cmp-wicl-cmp__close a { color: var(--c-violet-600) !important; font-weight: 500; }
.fmstr-cmp-wicl-cmp__close a:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-wicl-cmp { padding: 40px 16px; }
.fmstr-cmp-wicl-cmp__intro { font-size: 15.5px; }
.fmstr-cmp-wicl-cmp__close { font-size: 14.5px; }
.fmstr-cmp-wicl-cmp__card { background: transparent; border: 0; box-shadow: none; border-radius: 0; padding: 0; }
.fmstr-cmp-wicl-cmp__scroll { overflow: visible; }
.fmstr-cmp-wicl-cmp__table { display: block; min-width: 0; width: 100%; }
.fmstr-cmp-wicl-cmp__table thead { display: none; }
.fmstr-cmp-wicl-cmp__table tbody { display: block; }
.fmstr-cmp-wicl-cmp__table tbody tr { display: block; background: #ffffff; border: 1px solid #eaecf0; border-radius: 14px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(16,24,40,.04); overflow: hidden; }
.fmstr-cmp-wicl-cmp__table tbody tr:last-child { margin-bottom: 0; }
.fmstr-cmp-wicl-cmp__table tbody th { display: block; width: 100%; background: #f7f3ff; color: #6941c6 !important; font-size: 16px; font-weight: 700; padding: 12px 16px; border-bottom: 1px solid #e4d7ff; }
.fmstr-cmp-wicl-cmp__table tbody th a { color: #6941c6 !important; }
.fmstr-cmp-wicl-cmp__table tbody td { display: block; padding: 10px 16px; border: 0; font-size: 14.5px; line-height: 1.5; color: #475467; }
.fmstr-cmp-wicl-cmp__table tbody td::before { content: attr(data-h) ": "; font-weight: 600; color: #101828; }
.fmstr-cmp-wicl-cmp__table tbody tr.is-pick { box-shadow: 0 4px 14px rgba(127,86,217,.12); border-color: #e4d7ff; }
.fmstr-cmp-wicl-cmp__table tbody tr.is-pick th { background: linear-gradient(135deg, #7f56d9, #6941c6) !important; color: #ffffff !important; border-bottom-color: transparent; }
.fmstr-cmp-wicl-cmp__table tbody tr.is-pick th a { color: #ffffff !important; }
}


/* mobile-safety-v2 */
.fmstr-cmp-wicl-cmp img, .fmstr-cmp-wicl-cmp table, .fmstr-cmp-wicl-cmp pre, .fmstr-cmp-wicl-cmp iframe, .fmstr-cmp-wicl-cmp video { max-width: 100%; }
.fmstr-cmp-wicl-cmp > * { min-width: 0; }
.fmstr-cmp-wicl-cmp [class*='__grid'] > *, .fmstr-cmp-wicl-cmp [class*='__list'] > *, .fmstr-cmp-wicl-cmp [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-wicl-cmp pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-wicl-cmp table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
</style>

<section class="fmstr-cmp-wicl-cmp" aria-labelledby="fmstr-cmp-wicl-cmp-h2">
<div class="fmstr-cmp-wicl-cmp__container">
<span class="fmstr-cmp-wicl-cmp__eyebrow">Which builders support conditional logic</span>
<h2 class="fmstr-cmp-wicl-cmp__h2" id="fmstr-cmp-wicl-cmp-h2">Conditional logic across 8 form builders, with the plan tier you need</h2>
<p class="fmstr-cmp-wicl-cmp__intro">Most modern form builders ship conditional logic, but the plan tier required to unlock it varies a lot. The table below maps the major builders against the cheapest paid plan you need to use it, accurate as of 2026.</p>
<div class="fmstr-cmp-wicl-cmp__card">
<div class="fmstr-cmp-wicl-cmp__scroll">
<table class="fmstr-cmp-wicl-cmp__table">
<thead>
<tr>
<th>Form builder</th>
<th>Conditional logic supported?</th>
<th>Cheapest plan that unlocks it</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr class="is-pick">
<th>Formester</th>
<td data-h="Conditional logic supported?">Yes</td>
<td data-h="Cheapest plan">Personal plan ($9/mo)</td>
<td data-h="Notes">Free plan supports basic rules; Personal+ adds AND/OR operators, skip-page logic, conditional notifications</td>
</tr>
<tr>
<th><a href="https://www.jotform.com/form-features/conditional-logic/">Jotform</a></th>
<td data-h="Conditional logic supported?">Yes</td>
<td data-h="Cheapest plan">Free</td>
<td data-h="Notes">Free plan caps total conditions per form; Bronze and above lift the cap</td>
</tr>
<tr>
<th><a href="https://www.typeform.com/help/a/conditional-logic-aka-logic-jumps-360029265072/">Typeform</a></th>
<td data-h="Conditional logic supported?">Yes (Logic Jumps)</td>
<td data-h="Cheapest plan">Basic plan ($25/mo)</td>
<td data-h="Notes">Free plan has no Logic Jumps; Basic unlocks them</td>
</tr>
<tr>
<th><a href="https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/">Google Forms</a></th>
<td data-h="Conditional logic supported?">Section-jump workaround only</td>
<td data-h="Cheapest plan">Free</td>
<td data-h="Notes">No true field-level conditional logic; respondents jump between sections, not fields. Walkthrough here</td>
</tr>
<tr>
<th><a href="https://www.gravityforms.com/features/">Gravity Forms</a></th>
<td data-h="Conditional logic supported?">Yes</td>
<td data-h="Cheapest plan">Basic license ($59/yr)</td>
<td data-h="Notes">No free plan; all paid tiers include conditional logic</td>
</tr>
<tr>
<th><a href="https://wpforms.com/features/smart-conditional-logic/">WPForms</a></th>
<td data-h="Conditional logic supported?">Yes</td>
<td data-h="Cheapest plan">Basic license ($49.50/yr)</td>
<td data-h="Notes">Lite (free) version does not include conditional logic; Basic license is the entry point</td>
</tr>
<tr>
<th><a href="https://support.microsoft.com/en-us/office/use-branching-logic-in-microsoft-forms-16634fda-eddb-44da-856d-6a8213f0d8bb">Microsoft Forms</a></th>
<td data-h="Conditional logic supported?">Section branching only</td>
<td data-h="Cheapest plan">Free with Microsoft 365</td>
<td data-h="Notes">Branches whole sections, not individual fields; no AND/OR operators</td>
</tr>
<tr>
<th><a href="https://www.fillout.com/">Fillout</a></th>
<td data-h="Conditional logic supported?">Yes</td>
<td data-h="Cheapest plan">Free</td>
<td data-h="Notes">Free plan includes conditional logic; Pro lifts submission caps and unlocks calculations</td>
</tr>
</tbody>
</table>
</div>
</div>
<p class="fmstr-cmp-wicl-cmp__close">Pricing and feature claims verified against each vendor's pricing page as of 2026. Plan tiers change frequently; check the live pricing page before publishing this anywhere downstream.</p>
<p class="fmstr-cmp-wicl-cmp__close">For multi-branch trees, AND/OR operators, and conditional notifications on a free plan, the cleanest fit is Formester's conditional logic.</p>
</div>
</section>


<style>
/* host-link-override */
.fmstr-cmp-wicl-ex a { text-decoration: none !important; }
.fmstr-cmp-wicl-ex {
--c-bg-page: #ffffff;
--c-bg-card: #ffffff;
--c-bg-violet: linear-gradient(135deg, #ede4ff, #ddd0fb);
--c-bg-green: linear-gradient(135deg, #dcfce7, #bbf7d0);
--c-bg-amber: linear-gradient(135deg, #fef3c7, #fde68a);
--c-bg-blue: linear-gradient(135deg, #dbeafe, #bfdbfe);
--c-bg-rose: linear-gradient(135deg, #ffe4e6, #fecdd3);
--c-bg-teal: linear-gradient(135deg, #ccfbf1, #99f6e4);
--c-bg-orange: linear-gradient(135deg, #ffedd5, #fed7aa);
--c-bg-slate: linear-gradient(135deg, #e2e8f0, #cbd5e1);
--c-fg-1: #101828;
--c-fg-2: #475467;
--c-fg-3: #697586;
--c-violet-600: #6941c6;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05), 0 1px 2px rgba(16,24,40,.03);

background: transparent;
padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1); overflow-x: hidden; -webkit-text-size-adjust: 100%;}
.fmstr-cmp-wicl-ex *, .fmstr-cmp-wicl-ex *::before, .fmstr-cmp-wicl-ex *::after { box-sizing: border-box; }
.fmstr-cmp-wicl-ex__container { max-width: 1180px; margin: 0 auto; }
.fmstr-cmp-wicl-ex__header { margin: 0 0 28px; max-width: 820px; }
.fmstr-cmp-wicl-ex__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-wicl-ex__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }
.fmstr-cmp-wicl-ex__grid { display: flex; flex-direction: column; gap: 20px; }

.fmstr-cmp-wicl-ex__block {
background: var(--c-bg-card); border: 1px solid var(--c-border);
border-radius: 24px; padding: 28px 32px; box-shadow: var(--c-shadow);
}
.fmstr-cmp-wicl-ex__head { display: flex; align-items: flex-start; gap: 18px; flex-wrap: wrap; }
.fmstr-cmp-wicl-ex__thumb {
width: 72px; height: 72px; border-radius: 14px;
display: grid; place-items: center; flex-shrink: 0; font-size: 28px;
 color: var(--c-fg-1); }
.fmstr-cmp-wicl-ex__thumb svg { width: 28px; height: 28px; stroke: var(--c-fg-1); }
.fmstr-cmp-wicl-ex__thumb--lead { background: var(--c-bg-violet); }
.fmstr-cmp-wicl-ex__thumb--job { background: var(--c-bg-green); }
.fmstr-cmp-wicl-ex__thumb--health { background: var(--c-bg-rose); }
.fmstr-cmp-wicl-ex__thumb--ecom { background: var(--c-bg-amber); }
.fmstr-cmp-wicl-ex__thumb--event { background: var(--c-bg-blue); }
.fmstr-cmp-wicl-ex__thumb--edu { background: var(--c-bg-teal); }
.fmstr-cmp-wicl-ex__thumb--hr { background: var(--c-bg-orange); }
.fmstr-cmp-wicl-ex__thumb--contact { background: var(--c-bg-slate); }
.fmstr-cmp-wicl-ex__meta { flex: 1; min-width: 240px; }
.fmstr-cmp-wicl-ex__index {
display: inline-block; font-size: 12.5px; font-weight: 700;
letter-spacing: .06em; text-transform: uppercase;
color: var(--c-violet-600); margin: 0 0 4px;
}
.fmstr-cmp-wicl-ex__meta h3 { font-size: 22px; font-weight: 700; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); line-height: 1.25; }
.fmstr-cmp-wicl-ex__body { font-size: 16px; line-height: 1.65; color: var(--c-fg-2); margin: 16px 0 0; }
.fmstr-cmp-wicl-ex__body a { color: var(--c-violet-600) !important; font-weight: 500; }
.fmstr-cmp-wicl-ex__body a:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-wicl-ex { padding: 40px 16px; }
.fmstr-cmp-wicl-ex__grid { gap: 14px; }
.fmstr-cmp-wicl-ex__block { padding: 22px 20px; border-radius: 18px; }
.fmstr-cmp-wicl-ex__head { gap: 14px; }
.fmstr-cmp-wicl-ex__thumb { width: 56px; height: 56px; border-radius: 12px; font-size: 24px; }
.fmstr-cmp-wicl-ex__meta { min-width: 0; }
.fmstr-cmp-wicl-ex__meta h3 { font-size: 19px; line-height: 1.25; }
.fmstr-cmp-wicl-ex__body { font-size: 15px; }
}


/* mobile-safety-v2 */
.fmstr-cmp-wicl-ex img, .fmstr-cmp-wicl-ex table, .fmstr-cmp-wicl-ex pre, .fmstr-cmp-wicl-ex iframe, .fmstr-cmp-wicl-ex video { max-width: 100%; }
.fmstr-cmp-wicl-ex > * { min-width: 0; }
.fmstr-cmp-wicl-ex [class*='__grid'] > *, .fmstr-cmp-wicl-ex [class*='__list'] > *, .fmstr-cmp-wicl-ex [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-wicl-ex pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-wicl-ex table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
</style>

<section class="fmstr-cmp-wicl-ex" aria-labelledby="fmstr-cmp-wicl-ex-h2">
<div class="fmstr-cmp-wicl-ex__container">
<div class="fmstr-cmp-wicl-ex__header">
<h2 class="fmstr-cmp-wicl-ex__h2" id="fmstr-cmp-wicl-ex-h2">8 conditional logic examples by use case</h2>
<p class="fmstr-cmp-wicl-ex__intro">These are the patterns that show up most often in real production forms.</p>
</div>
<div class="fmstr-cmp-wicl-ex__grid">

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--lead" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 6-6"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 1</p>
<h3>Lead capture form: qualify by company size</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">Ask "How many employees does your company have?" If the answer is over 50, route to a sales-call booking field. If under 50, route to a self-serve trial link. The same form serves both segments without splitting your campaign into two URLs.</p>
<p class="fmstr-cmp-wicl-ex__body">Pair with <a href="https://formester.com/blog/create-lead-capture-form-effectively/">lead capture form best practices</a> for the field-order rules that keep conversions high.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--job" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 13h18"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 2</p>
<h3>Job application: filter unqualified candidates</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">Ask "Do you have authorisation to work in the country this role is based in?" If no, surface a polite "We are unable to proceed" message and skip the rest. The recruiter never sees the application, the candidate never wastes 15 minutes on the rest of the form.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--health" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4v6a4 4 0 0 0 8 0V4"/><path d="M13 10c0 4 0 6 4 6"/><circle cx="19" cy="18" r="2.2"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 3</p>
<h3>Healthcare intake: show only the relevant symptom questions</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">A patient intake form asks "What are you here for today?" If they select "Routine check-up," the form skips the symptom section entirely. If they select "I'm in pain," the form opens a body-area selector and a pain-scale field. Cleaner data for the clinician, less friction for the patient.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--ecom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2.5l2 12h10.5l2-8H7"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 4</p>
<h3>E-commerce checkout: conditional shipping fields</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">Ask "Is the billing address the same as the shipping address?" If yes, hide the second address block. If no, reveal it. The default field count drops from ten to four for the 70 percent of orders where the addresses match.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--event" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 5</p>
<h3>Event registration: dietary follow-ups only if attending in person</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">Ask "Are you attending in-person or virtually?" If virtual, the form ends after contact details. If in-person, the form opens dietary requirements, t-shirt size, and accessibility needs. One form, two completion paths.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--edu" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1 3 2 6 2s6-1 6-2v-5"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 6</p>
<h3>Education quiz: branch by score</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">After a five-question quiz, show one of three result pages depending on the score. Under 3 correct: a remedial-content link. 3 to 4 correct: a "you're close" follow-up question. 5 correct: a discount code for the next course. The form delivers a personalised outcome without three separate URLs.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--hr" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 21c0-4 3-6 6.5-6s6.5 2 6.5 6"/><circle cx="17" cy="10" r="2.5"/><path d="M16 21c0-3.5 1.5-5 4-5"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 7</p>
<h3>HR survey: anonymous routing</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">Ask "Would you like to remain anonymous?" If yes, hide the name and email fields and route the response to a separate anonymised submission inbox. If no, collect contact details and route to the standard HR queue. Use Formester's <a href="https://formester.com/online-survey-maker/">survey maker</a> with <a href="https://formester.com/blog/best-survey-questions/">good survey question patterns</a> so the responses you collect are usable.</p>
</article>

<article class="fmstr-cmp-wicl-ex__block">
<div class="fmstr-cmp-wicl-ex__head">
<div class="fmstr-cmp-wicl-ex__thumb fmstr-cmp-wicl-ex__thumb--contact" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></div>
<div class="fmstr-cmp-wicl-ex__meta">
<p class="fmstr-cmp-wicl-ex__index">Example 8</p>
<h3>Multi-step contact form: department routing</h3>
</div>
</div>
<p class="fmstr-cmp-wicl-ex__body">Ask "Which team do you need?" Map the answer to the destination email: Sales replies go to sales@, Support to support@, Press to press@. The respondent fills out one form, the right team handles the message, your inbox stays clean.</p>
</article>

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
<span class="fmstr-cmp-tmpl-midcta__eyebrow">Conditional logic</span>
<h2 class="fmstr-cmp-tmpl-midcta__h2" id="fmstr-cmp-tmpl-midcta-h2">Add conditional logic to any form, without writing a single rule</h2>
<p class="fmstr-cmp-tmpl-midcta__body">Drag-and-drop logic builder, show or hide by answer, route to the right page. Available on the free plan.</p>
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
text-align: left !important; overflow-x: hidden; -webkit-text-size-adjust: 100%;}
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


/* mobile-safety-v2 */
.fmstr-cmp-tmpl-faq img, .fmstr-cmp-tmpl-faq table, .fmstr-cmp-tmpl-faq pre, .fmstr-cmp-tmpl-faq iframe, .fmstr-cmp-tmpl-faq video { max-width: 100%; }
.fmstr-cmp-tmpl-faq > * { min-width: 0; }
.fmstr-cmp-tmpl-faq [class*='__grid'] > *, .fmstr-cmp-tmpl-faq [class*='__list'] > *, .fmstr-cmp-tmpl-faq [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-faq pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-tmpl-faq table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
</style>

<section class="fmstr-cmp-tmpl-faq" aria-labelledby="fmstr-cmp-tmpl-faq-h2">
<div class="fmstr-cmp-tmpl-faq__container">
<h2 class="fmstr-cmp-tmpl-faq__h2" id="fmstr-cmp-tmpl-faq-h2">Conditional logic FAQs</h2>
<p class="fmstr-cmp-tmpl-faq__intro">Common questions about how conditional logic works in forms, what builders support it, and how Formester handles it on the free and paid tiers.</p>
<div class="fmstr-cmp-tmpl-faq__list">

<details class="fmstr-cmp-tmpl-faq__item">
<summary>What is conditional logic in forms?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Conditional logic is a rule that changes a form based on what the respondent just answered. A trigger field is checked against a condition (equals, contains, is empty), and an action runs: show a field, hide a section, jump to a page, mark a field required, or route the response to a specific email.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>What is an example of conditional logic?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">A customer support form asks "What do you need help with?" If the respondent picks "Billing," the form reveals an invoice-number field. If they pick "Bug report," the form reveals a screenshot upload instead. Same form, two paths.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can you do conditional logic in Google Forms?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Partially. Google Forms supports section-jump logic only: the respondent finishes a section, then Google jumps them to a different section based on a single answer. It does not support hiding individual fields, conditional required fields, or AND/OR operators. The workaround is documented in our Google Forms conditional logic guide.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can you use conditional logic in Microsoft Forms?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Yes, but only at the section level. Microsoft calls it "branching." It routes the respondent to a different section based on an answer but does not support field-level show/hide or AND/OR conditions.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Is conditional logic free in Formester?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Yes for basic rules. Formester's Free plan supports show/hide and section-jump rules. The Personal plan ($9/mo) unlocks AND/OR operators, conditional notifications, conditional required fields, and unlimited rules per form.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Does conditional logic slow down a form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Almost never. Conditional logic runs in the browser the moment the trigger field changes, so there is no extra network round-trip. Forms with hundreds of rules can feel sluggish on older devices; the practical limit before users notice lag is around 200 active rules.</div>
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
.fmstr-cmp-tmpl-rel__head { margin: 0 0 28px !important; text-align: left; }
.fmstr-cmp-tmpl-rel__h2 { font-size: clamp(26px, 3vw, 36px) !important; font-weight: 700 !important; line-height: 1.15 !important; letter-spacing: -.02em !important; margin: 0 !important; color: var(--c-fg-1); text-align: left; }
.fmstr-cmp-tmpl-rel__intro { color: var(--c-fg-3); font-size: 17px !important; line-height: 1.6 !important; margin: 14px 0 0 !important; text-align: left; }

.fmstr-cmp-tmpl-rel__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.fmstr-cmp-tmpl-rel__card {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; padding: 20px 22px; display: flex; flex-direction: column; gap: 8px;
text-decoration: none !important; color: inherit !important; transition: all .15s ease;
position: relative;
}
.fmstr-cmp-tmpl-rel__card:hover { border-color: var(--c-edge); box-shadow: var(--c-shadow); transform: translateY(-1px); }
.fmstr-cmp-tmpl-rel__chip {
display: inline-block; padding: 3px 10px; border-radius: 9999px;
background: var(--c-tint); border: 1px solid var(--c-edge);
color: var(--c-violet-600); font-size: 11.5px; font-weight: 600; letter-spacing: .02em;
text-transform: uppercase; align-self: flex-start;
margin-bottom: 2px;
}
.fmstr-cmp-tmpl-rel__title {
font-size: 16px !important; font-weight: 700 !important; color: var(--c-fg-1); margin: 0 !important; line-height: 1.3 !important; text-align: left; }
.fmstr-cmp-tmpl-rel__body { font-size: 14.5px !important; line-height: 1.55 !important; color: var(--c-fg-2); margin: 0 !important; }
.fmstr-cmp-tmpl-rel__arrow {
margin-top: 6px; color: var(--c-violet-600); font-size: 14px; font-weight: 600;
display: inline-flex; align-items: center; gap: 6px;
}
.fmstr-cmp-tmpl-rel__arrow::after {
content: "\2192"; transition: transform .15s ease; display: inline-block;
}
.fmstr-cmp-tmpl-rel__card:hover .fmstr-cmp-tmpl-rel__arrow::after { transform: translateX(3px); }

@media (max-width: 880px) { .fmstr-cmp-tmpl-rel__grid { grid-template-columns: 1fr 1fr; gap: 14px; } }
@media (max-width: 540px) {
.fmstr-cmp-tmpl-rel { padding: 40px 16px; }
.fmstr-cmp-tmpl-rel__grid { grid-template-columns: 1fr; gap: 12px; }
.fmstr-cmp-tmpl-rel__card { padding: 18px 20px; }
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
<h2 class="fmstr-cmp-tmpl-rel__h2" id="fmstr-cmp-tmpl-rel-h2">Related on Formester</h2>
<p class="fmstr-cmp-tmpl-rel__intro">Next steps for building conditional forms, plus the Google Forms workaround and the AI form generator that writes the rules for you.</p>
</div>
<div class="fmstr-cmp-tmpl-rel__grid">

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/features/conditional-logic/">
<span class="fmstr-cmp-tmpl-rel__chip">Feature</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Conditional logic form builder</h3>
<p class="fmstr-cmp-tmpl-rel__body">Show, hide, jump, and route fields with AND/OR rules. Free on every plan, AND/OR on Personal+.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/">
<span class="fmstr-cmp-tmpl-rel__chip">Guide</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Conditional questions in Google Forms</h3>
<p class="fmstr-cmp-tmpl-rel__body">The section-jump workaround for Google Forms, with screenshots and the routing traps to avoid.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/form-builder/">
<span class="fmstr-cmp-tmpl-rel__chip">Product</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Online form builder</h3>
<p class="fmstr-cmp-tmpl-rel__body">Drag-and-drop form builder with conditional logic, payments, and unlimited responses on the free plan.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/ai-form-generator/">
<span class="fmstr-cmp-tmpl-rel__chip">Feature</span>
<h3 class="fmstr-cmp-tmpl-rel__title">AI form generator</h3>
<p class="fmstr-cmp-tmpl-rel__body">Describe the form in one prompt. The AI generates the fields and the conditional logic rules together.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/create-lead-capture-form-effectively/">
<span class="fmstr-cmp-tmpl-rel__chip">Blog</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Create a lead capture form that converts</h3>
<p class="fmstr-cmp-tmpl-rel__body">Field-order rules, qualifying questions, and the conditional branches that lift form completion above 60 percent.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/online-survey-maker/">
<span class="fmstr-cmp-tmpl-rel__chip">Product</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Online survey maker</h3>
<p class="fmstr-cmp-tmpl-rel__body">Build branching surveys with skip logic, anonymous routing, and conditional notifications to the right inbox.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

</div>
</div>
</section>


