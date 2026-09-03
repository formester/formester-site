---
slug: "how-to-allow-multiple-users-to-fill-out-your-form"
title: "Collaborative Forms: How to Let Multiple People Fill Out One Form"
description: "Collaborative forms let multiple people fill out the same form together, in real time or in turns. See how Google Forms, Microsoft Forms, Jotform, and Formester"
metaTitle: "Collaborative Forms: Multi-User Form Filling (2026)"
metaDescription: "Collaborative forms let multiple people fill out the same form together, in real time or in turns. See how Google Forms, Microsoft Forms, Jotform, and Formester"
keywords: " collaborative form, collaboration for submissions, collaborative form building, forms with multiple users"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "an illustration of collaborative form builder"
featured: true
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_collaborative_form_feature_43f36be0dc.webp","width":1214,"height":630}
metaImage: []
jsonld: [{"@graph":[{"@type":"Article","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_collaborative_form_feature_43f36be0dc.webp","author":{"url":"https://www.linkedin.com/in/harish-kumar2424/","name":"Harish Kumar","@type":"Person"},"headline":"Collaborative Forms: How to Let Multiple People Fill Out One Form","publisher":{"logo":{"url":"https://formester.com/logo.png","@type":"ImageObject"},"name":"Formester","@type":"Organization"},"description":"Collaborative forms let multiple people fill out the same form together. See how Google Forms, Microsoft Forms, Jotform, and Formester compare, with step-by-step setup.","dateModified":"2026-06-11","datePublished":"2024-07-03","mainEntityOfPage":"https://formester.com/blog/collaborative-forms/"},{"name":"How to Build a Collaborative Form in Formester","step":[{"name":"Set up organization access","text":"Open the Teams tab in your Formester dashboard, invite members by email, and assign Admin or Staff roles.","@type":"HowToStep"},{"name":"Group people into teams","text":"Create teams for each function, invite members, and assign Maintainer or Member roles per team.","@type":"HowToStep"},{"name":"Set per-form permissions","text":"Open the Share tab on the form, invite members or teams, and assign Maintainer, Editor, Viewer, or Submitter roles.","@type":"HowToStep"},{"name":"Assign specific fields to specific people","text":"Select a field, enable Field Assignee in Advanced Settings, create a role, and assign members or teams to that field only.","@type":"HowToStep"}],"@type":"HowTo","description":"Set up a collaborative form in Formester with organization, team, form, and field-level permissions."},{"@type":"FAQPage","mainEntity":[{"name":"What is a collaborative form?","@type":"Question","acceptedAnswer":{"text":"A collaborative form is a form that more than one person contributes to. Collaborative editing means more than one admin co-builds the form. Collaborative filling means more than one respondent contributes to a single submission.","@type":"Answer"}},{"name":"Can two people fill out the same Google Form at once?","@type":"Question","acceptedAnswer":{"text":"No. Google Forms supports collaborative editing but not collaborative filling. Each submitted response is a single respondent's row in the Sheet.","@type":"Answer"}},{"name":"Can you collaborate on Microsoft Forms?","@type":"Question","acceptedAnswer":{"text":"You can collaborate on building a Microsoft Form using Collect responses, Get a link to view and edit. You cannot have multiple respondents fill the same response together.","@type":"Answer"}},{"name":"What is the difference between collaborative editing and collaborative filling?","@type":"Question","acceptedAnswer":{"text":"Collaborative editing happens before responses come in: admins co-author the form. Collaborative filling happens during the response: multiple respondents enter data into a single submission.","@type":"Answer"}},{"name":"Which form builders support real-time collaborative filling?","@type":"Question","acceptedAnswer":{"text":"Formester offers real-time collaborative filling with field-level assignees. Jotform offers Assign Form for sequential and role-based filling. Fillout and Zoho Forms support related patterns but not true real-time fill.","@type":"Answer"}},{"name":"Is collaborative form filling available on free plans?","@type":"Question","acceptedAnswer":{"text":"It depends. Formester offers collaboration features on paid plans. Jotform's Assign Form is available on free with submission caps. Google Forms and Microsoft Forms only offer collaborative editing, which is free.","@type":"Answer"}}]},{"@type":"BreadcrumbList","itemListElement":[{"item":"https://formester.com/","name":"Home","@type":"ListItem","position":1},{"item":"https://formester.com/blog/","name":"Blog","@type":"ListItem","position":2},{"item":"https://formester.com/blog/collaborative-forms/","name":"Collaborative Forms","@type":"ListItem","position":3}]}],"@context":"https://schema.org"}]
createdAt: "2024-07-03T04:35:24.309Z"
updatedAt: "2026-06-15T04:49:57.688Z"
publishedAt: "2026-06-15T04:49:57.684Z"
---
![an illustration of collaborative form feature](https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_collaborative_form_feature_43f36be0dc.webp)

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

<p class="fmstr-blog-lead">A collaborative form lets two or more people work on the same submission together, instead of each person filing their own response. One hiring manager fills the role description, the recruiter adds the screening criteria, and finance confirms the budget.</p>

<p class="fmstr-blog-lead">One form, one record, three contributors. Most form builders only collaborate on the admin side. You can co-edit the form, but only one respondent can fill it.</p>

<p class="fmstr-blog-lead">A small group of tools, including Formester, support real collaborative filling: multiple people typing into the same submission at the same time, or picking up where someone else left off.</p>

<p class="fmstr-blog-lead">This guide covers what counts as a collaborative form, which builders actually support it, and how to set one up in Formester, Google Forms, and Microsoft Forms. ---</p>

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
.fmstr-cmp-tmpl-tldr__list {
margin: 0 !important; padding: 0 !important; list-style: none;
display: flex; flex-direction: column; gap: 10px;
}
.fmstr-cmp-tmpl-tldr__item {
font-size: 16px !important;
line-height: 1.65 !important;
color: var(--c-fg-1);
margin: 0 !important;
font-weight: 500 !important;
padding-left: 22px;
position: relative;
}
.fmstr-cmp-tmpl-tldr__item::before {
content: "";
position: absolute;
left: 4px; top: 11px;
width: 6px; height: 6px; border-radius: 9999px;
background: var(--c-violet-500);
}
.fmstr-cmp-tmpl-tldr__item strong { color: var(--c-violet-700); font-weight: 700; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-tldr { padding: 20px 0 28px; }
.fmstr-cmp-tmpl-tldr__card { padding: 18px 20px; }
.fmstr-cmp-tmpl-tldr__item { font-size: 15px !important; }
}
</style>

<section class="fmstr-cmp-tmpl-tldr" aria-labelledby="fmstr-cmp-tmpl-tldr-label">
<div class="fmstr-cmp-tmpl-tldr__container">
<div class="fmstr-cmp-tmpl-tldr__card">
<p class="fmstr-cmp-tmpl-tldr__label" id="fmstr-cmp-tmpl-tldr-label">Quick answer</p>
<ul class="fmstr-cmp-tmpl-tldr__list">
<li class="fmstr-cmp-tmpl-tldr__item">A <strong>collaborative form</strong> supports more than one filler on the same submission, not just more than one editor on the form.</li>
<li class="fmstr-cmp-tmpl-tldr__item">Google Forms, Microsoft Forms, and Typeform support collaborative editing (admin co-authoring), not collaborative filling.</li>
<li class="fmstr-cmp-tmpl-tldr__item">Jotform supports collaborative filling through the Assign Form feature; the form is shared with named users who each see and complete their part.</li>
<li class="fmstr-cmp-tmpl-tldr__item">Formester supports real-time collaborative filling with field-level assignees, on Personal and Business plans.</li>
<li class="fmstr-cmp-tmpl-tldr__item">Fastest setup: use a builder with native collaborative filling. Fastest workaround in builders without it: resumable draft links shared by email.</li>
</ul>
</div>
</div>
</section>


<style>
.fmstr-cmp-tmpl-cmpt a { color: #6941c6 !important; text-decoration: none !important; }
.fmstr-cmp-tmpl-cmpt a:hover { text-decoration: underline !important; }
.fmstr-cmp-tmpl-cmpt {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6; --c-violet-700: #5b34b1;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);
--c-good: #12b76a; --c-bad: #f04438; --c-warn: #b54708;
background: transparent;
padding: 48px 0;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important;
overflow-x: hidden;
}
.fmstr-cmp-tmpl-cmpt *, .fmstr-cmp-tmpl-cmpt *::before, .fmstr-cmp-tmpl-cmpt *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-cmpt > *, .fmstr-cmp-tmpl-cmpt > * > * { min-width: 0; }
.fmstr-cmp-tmpl-cmpt__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-cmpt__head { margin: 0 0 24px !important; }
.fmstr-cmp-tmpl-cmpt__h2 {
font-size: clamp(26px, 3vw, 36px) !important; font-weight: 700 !important; line-height: 1.15 !important;
letter-spacing: -.02em !important; margin: 0 !important; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-cmpt__intro { color: var(--c-fg-3); font-size: 17px !important; line-height: 1.6 !important; margin: 14px 0 0 !important; }

.fmstr-cmp-tmpl-cmpt__scroll {
border: 1px solid var(--c-border);
border-radius: 14px;
box-shadow: var(--c-shadow);
overflow-x: auto;
-webkit-overflow-scrolling: touch;
background: var(--c-card);
}
.fmstr-cmp-tmpl-cmpt__table {
width: 100%;
border-collapse: collapse;
font-size: 14px;
min-width: 920px;
}
.fmstr-cmp-tmpl-cmpt__table th,
.fmstr-cmp-tmpl-cmpt__table td {
padding: 14px 16px;
text-align: left;
vertical-align: top;
border-bottom: 1px solid var(--c-border);
line-height: 1.5;
}
.fmstr-cmp-tmpl-cmpt__table thead th {
background: var(--c-tint);
color: var(--c-violet-700);
font-weight: 700;
font-size: 13px;
letter-spacing: .02em;
border-bottom: 1px solid var(--c-edge);
white-space: nowrap;
}
.fmstr-cmp-tmpl-cmpt__table thead th:first-child {
color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-cmpt__table tbody td:first-child {
color: var(--c-fg-1);
font-weight: 600;
background: #fafaff;
white-space: nowrap;
}
.fmstr-cmp-tmpl-cmpt__table tbody td {
color: var(--c-fg-2);
}
.fmstr-cmp-tmpl-cmpt__table tbody tr:last-child td {
border-bottom: 0;
}
.fmstr-cmp-tmpl-cmpt__yes { color: var(--c-good); font-weight: 700; }
.fmstr-cmp-tmpl-cmpt__no { color: var(--c-bad); font-weight: 700; }
.fmstr-cmp-tmpl-cmpt__partial { color: var(--c-warn); font-weight: 700; }
.fmstr-cmp-tmpl-cmpt__note {
font-size: 13.5px;
color: var(--c-fg-3);
margin: 14px 0 0 !important;
line-height: 1.55;
}

@media (max-width: 540px) {
.fmstr-cmp-tmpl-cmpt { padding: 36px 0; }
.fmstr-cmp-tmpl-cmpt__table th,
.fmstr-cmp-tmpl-cmpt__table td { padding: 12px 14px; font-size: 13.5px; }
}
</style>

<section class="fmstr-cmp-tmpl-cmpt" aria-labelledby="fmstr-cmp-tmpl-cmpt-h2">
<div class="fmstr-cmp-tmpl-cmpt__container">
<div class="fmstr-cmp-tmpl-cmpt__head">
<h2 class="fmstr-cmp-tmpl-cmpt__h2" id="fmstr-cmp-tmpl-cmpt-h2">Collaborative forms comparison: editing, filling, and free plan limits</h2>
<p class="fmstr-cmp-tmpl-cmpt__intro">Seven form builders, scored on the five things that actually matter when you need multiple people on the same form. Admin co-editing is solved everywhere. Real collaborative filling is rare.</p>
</div>

<div class="fmstr-cmp-tmpl-cmpt__scroll">
<table class="fmstr-cmp-tmpl-cmpt__table">
<thead>
<tr>
<th scope="col">Tool</th>
<th scope="col">Admin co-editing</th>
<th scope="col">Collaborative filling</th>
<th scope="col">Resumable drafts</th>
<th scope="col">Field-level assignees</th>
<th scope="col">Free plan</th>
</tr>
</thead>
<tbody>
<tr>
<td>Google Forms</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td>Unlimited, inside Google Drive limits</td>
</tr>
<tr>
<td>Microsoft Forms</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td>200 responses per form (personal)</td>
</tr>
<tr>
<td>Jotform</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes, via Assign Form</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes, on Assign Form</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__partial">Partial</span></td>
<td>100 submissions per month</td>
</tr>
<tr>
<td>Typeform</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__no">No</span></td>
<td>10 responses per month</td>
</tr>
<tr>
<td>Fillout</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__partial">Partial, multi-page with roles</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__partial">Partial</span></td>
<td>1,000 responses per month</td>
</tr>
<tr>
<td>Zoho Forms</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__partial">Partial, via approval workflows</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__partial">Partial</span></td>
<td>500 submissions per month</td>
</tr>
<tr>
<td>Formester</td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes, real-time</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td><span class="fmstr-cmp-tmpl-cmpt__yes">Yes</span></td>
<td>100 responses per month</td>
</tr>
</tbody>
</table>
</div>

<p class="fmstr-cmp-tmpl-cmpt__note">Free plan numbers pulled from each vendor's pricing page as of 2026-06. Confirm before you commit: <a href="https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-forms-service-description">Microsoft Forms response limits</a>, <a href="https://www.jotform.com/pricing/">Jotform pricing</a>, and <a href="https://formester.com/pricing/">Formester pricing</a>.</p>
</div>
</section>


<style>
.fmstr-cmp-tmpl-steps a { color: #6941c6 !important; text-decoration: none !important; }
.fmstr-cmp-tmpl-steps a:hover { text-decoration: underline !important; }
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
.fmstr-cmp-tmpl-steps__group { margin-bottom: 36px; }
.fmstr-cmp-tmpl-steps__group:last-child { margin-bottom: 0; }
.fmstr-cmp-tmpl-steps__head { margin: 0 0 20px !important; }
.fmstr-cmp-tmpl-steps__eyebrow {
display: inline-flex; align-items: center;
font-size: 11.5px !important; font-weight: 700 !important; letter-spacing: 0.08em !important;
text-transform: uppercase; color: var(--c-violet-700) !important;
background: var(--c-tint); border: 1px solid var(--c-edge);
padding: 4px 10px; border-radius: 9999px;
margin: 0 0 12px !important;
}
.fmstr-cmp-tmpl-steps__h2 {
font-size: clamp(24px, 2.6vw, 30px) !important; font-weight: 700 !important; line-height: 1.2 !important;
letter-spacing: -.02em !important; margin: 0 !important; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-steps__intro { color: var(--c-fg-3); font-size: 16px !important; line-height: 1.6 !important; margin: 10px 0 0 !important; }
.fmstr-cmp-tmpl-steps__list {
display: flex; flex-direction: column; gap: 12px;
margin: 0; padding: 0; list-style: none;
}
.fmstr-cmp-tmpl-steps__item {
background: var(--c-card);
border: 1px solid var(--c-border);
border-radius: 14px;
padding: 20px 22px;
box-shadow: var(--c-shadow);
display: flex; gap: 16px;
align-items: flex-start;
min-width: 0;
}
.fmstr-cmp-tmpl-steps__num {
flex-shrink: 0;
width: 36px; height: 36px; border-radius: 10px;
background: var(--c-tint);
border: 1px solid var(--c-edge);
color: var(--c-violet-700) !important;
font-weight: 800; font-size: 15px;
display: inline-flex; align-items: center; justify-content: center;
}
.fmstr-cmp-tmpl-steps__main { flex: 1; min-width: 0; }
.fmstr-cmp-tmpl-steps__title {
font-size: 16.5px !important; font-weight: 700 !important; line-height: 1.3 !important;
color: var(--c-fg-1); margin: 0 0 6px !important;
}
.fmstr-cmp-tmpl-steps__body {
font-size: 15px !important; line-height: 1.6 !important;
color: var(--c-fg-2); margin: 0 !important;
}
.fmstr-cmp-tmpl-steps__body strong { color: var(--c-fg-1); font-weight: 600; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-steps { padding: 36px 0; }
.fmstr-cmp-tmpl-steps__item { padding: 18px 18px; gap: 12px; }
.fmstr-cmp-tmpl-steps__num { width: 32px; height: 32px; font-size: 14px; }
.fmstr-cmp-tmpl-steps__title { font-size: 15.5px !important; }
.fmstr-cmp-tmpl-steps__body { font-size: 14.5px !important; }
}
</style>

<section class="fmstr-cmp-tmpl-steps" aria-labelledby="fmstr-cmp-tmpl-steps-formester">
<div class="fmstr-cmp-tmpl-steps__container">

<div class="fmstr-cmp-tmpl-steps__group">
<div class="fmstr-cmp-tmpl-steps__head">
<span class="fmstr-cmp-tmpl-steps__eyebrow">Formester</span>
<h2 class="fmstr-cmp-tmpl-steps__h2" id="fmstr-cmp-tmpl-steps-formester">How to build a collaborative form in Formester</h2>
<p class="fmstr-cmp-tmpl-steps__intro">Four levels of permission, from the whole organization down to a single field. Each contributor sees only what they own.</p>
</div>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Set up organization access</h3>
<p class="fmstr-cmp-tmpl-steps__body">Open the Teams tab in your Formester dashboard, invite members by email, and assign <strong>Admin</strong> or <strong>Staff</strong> roles. Use Admin for the people who manage your form templates, billing, and integrations. Use Staff for the people who only need access to specific forms, like a regional sales rep who works on lead intake but should not see finance forms.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Group people into teams</h3>
<p class="fmstr-cmp-tmpl-steps__body">Create a Marketing team for campaign intake, a Recruiting team for hiring intake, and a Customer Success team for QBR prep. Assign <strong>Maintainer</strong> or <strong>Member</strong> roles per team. Each team only sees the forms assigned to it, so the recruiting form does not show up in the marketing dashboard.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Set per-form permissions</h3>
<p class="fmstr-cmp-tmpl-steps__body">Open the Share tab on the form, invite members or teams, and assign <strong>Maintainer</strong>, <strong>Editor</strong>, <strong>Viewer</strong>, or <strong>Submitter</strong> roles. On a vendor onboarding form: Maintainer to procurement, Editor to legal, Viewer to finance, Submitter to the vendor itself.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Assign specific fields to specific people</h3>
<p class="fmstr-cmp-tmpl-steps__body">Select a field, enable <strong>Field Assignee</strong> in Advanced Settings, create a role, and assign members or teams to that field only. On a hiring brief: lock the salary band to finance, lock the offer's legal language to the legal reviewer, leave the role description open to the hiring manager. Nothing gets entered by the wrong person.</p>
</div>
</li>

</ol>
</div>

<div class="fmstr-cmp-tmpl-steps__group">
<div class="fmstr-cmp-tmpl-steps__head">
<span class="fmstr-cmp-tmpl-steps__eyebrow">Google Forms</span>
<h2 class="fmstr-cmp-tmpl-steps__h2">How to build a collaborative form in Google Forms (editing only)</h2>
<p class="fmstr-cmp-tmpl-steps__intro">Google Forms supports collaborative editing. It does not support collaborative filling. Two people cannot fill the same response together.</p>
</div>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Open your form at forms.google.com</h3>
<p class="fmstr-cmp-tmpl-steps__body">Open the form you want to share for co-authoring at <a href="https://forms.google.com/">forms.google.com</a>.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Open the three-dot menu</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click the three-dot menu in the top right of the form editor.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Select Add collaborators</h3>
<p class="fmstr-cmp-tmpl-steps__body">Enter the email addresses of the people you want to give edit access.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Set Editor or Viewer permissions, click Done</h3>
<p class="fmstr-cmp-tmpl-steps__body">Editors can change questions, view all responses, and share the form further. Viewers can see the form and the responses but cannot make changes. To collect multi-contributor responses inside the Google ecosystem, you have to build the workflow in Docs or Sheets and convert it manually. For deeper coverage, see <a href="https://formester.com/blog/how-to-enable-access-for-google-forms/">our guide to enabling access for Google Forms</a>.</p>
</div>
</li>

</ol>
</div>

<div class="fmstr-cmp-tmpl-steps__group">
<div class="fmstr-cmp-tmpl-steps__head">
<span class="fmstr-cmp-tmpl-steps__eyebrow">Microsoft Forms</span>
<h2 class="fmstr-cmp-tmpl-steps__h2">How to build a collaborative form in Microsoft Forms (editing only)</h2>
<p class="fmstr-cmp-tmpl-steps__intro">Same camp as Google Forms. You can share editing access. You cannot share filling. <a href="https://support.microsoft.com/en-us/forms/share-a-form-or-quiz-to-collaborate-with-others-46d12704-7012-4b65-8d2b-3eaeed7ee06f">Microsoft's own help page</a> covers this.</p>
</div>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Open your form at forms.office.com</h3>
<p class="fmstr-cmp-tmpl-steps__body">Open the form at <a href="https://forms.office.com/">forms.office.com</a>.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Click Collect responses</h3>
<p class="fmstr-cmp-tmpl-steps__body">In the top right of the form, click <strong>Collect responses</strong> to open the share panel.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Get a link to view and edit</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click <strong>+ Get a link to view and edit</strong>. Choose who can use the link: people in your organization, or specific people.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Copy the link, send to collaborators</h3>
<p class="fmstr-cmp-tmpl-steps__body">Anyone with the link can help build the form, change questions, and view results. They cannot answer the form on behalf of multiple respondents in a single response. The practical workaround for multi-contributor responses is to add a Section per contributor and email the form link sequentially. You end up with multiple submissions you stitch together in Excel. It works. It is not as clean as native collaborative filling.</p>
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
<span class="fmstr-cmp-tmpl-midcta__eyebrow">Shared forms</span>
<h2 class="fmstr-cmp-tmpl-midcta__h2" id="fmstr-cmp-tmpl-midcta-h2">Let multiple people fill out one form, without sharing your account</h2>
<p class="fmstr-cmp-tmpl-midcta__body">Invite teammates, route fields by user, track every contribution in one audit trail.</p>
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
<p class="fmstr-cmp-tmpl-faq__intro">What collaborative forms actually do, which builders support real collaborative filling, and how the free plans compare.</p>
<div class="fmstr-cmp-tmpl-faq__list">

<details class="fmstr-cmp-tmpl-faq__item">
<summary>What is a collaborative form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">A collaborative form is a form that more than one person contributes to. There are two flavors. Collaborative editing means more than one admin co-builds the form. Collaborative filling means more than one respondent contributes to a single submission. Most form builders support the first; only a few support the second.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can two people fill out the same Google Form at once?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">No. Google Forms supports collaborative editing (multiple admins co-authoring the form) but not collaborative filling. Each submitted response is a single respondent's row in the Sheet. To collect multi-contributor responses inside the Google ecosystem, you would have to build the workflow in Docs or Sheets and convert it manually.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can you collaborate on Microsoft Forms?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">You can collaborate on building and reviewing a Microsoft Form. Use <strong>Collect responses, Get a link to view and edit</strong> to share editing access. You cannot have multiple respondents fill the same response together. The closest workaround is sequential section-based filling.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>What is the difference between collaborative editing and collaborative filling?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Collaborative editing happens before responses come in: admins co-author the form. Collaborative filling happens during the response: multiple respondents enter data into a single submission, either in real time or in sequence. The first is common. The second is rare.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Which form builders support real-time collaborative filling?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Formester and Jotform are the two with the clearest support. Formester offers real-time collaborative filling with field-level assignees on Personal and Business plans. Jotform offers <a href="https://www.jotform.com/help/445-jotform-assign-feature/">Assign Form</a> for sequential and role-based filling. Fillout and Zoho Forms support related patterns (role-based multi-page forms, approval workflows) but not true real-time fill.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Is collaborative form filling available on free plans?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">It depends. Formester offers collaboration features on paid plans (Personal and Business). Jotform's Assign Form is available on free with submission caps. Google Forms and Microsoft Forms only offer collaborative editing, which is free in both products. Confirm current pricing on each vendor's site before committing.</div>
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
<h2 class="fmstr-cmp-tmpl-rel__h2" id="fmstr-cmp-tmpl-rel-h2">Related on Formester</h2>
<p class="fmstr-cmp-tmpl-rel__intro">Field-level assignees, multi-step flows, and the alternatives most teams compare next.</p>
</div>
<div class="fmstr-cmp-tmpl-rel__grid">

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/features/collaborate-on-form-submission/">
<span class="fmstr-cmp-tmpl-rel__chip">Feature</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Collaborate on form submission</h3>
<p class="fmstr-cmp-tmpl-rel__body">Real-time collaborative filling with field-level assignees.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/features/drag-and-drop-form-builder/">
<span class="fmstr-cmp-tmpl-rel__chip">Product</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Online form builder</h3>
<p class="fmstr-cmp-tmpl-rel__body">Build collaborative forms from scratch in minutes.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-enable-access-for-google-forms/">
<span class="fmstr-cmp-tmpl-rel__chip">Guide</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Enable access for Google Forms</h3>
<p class="fmstr-cmp-tmpl-rel__body">Deeper coverage on Google Forms sharing and permissions.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/why-formester-is-the-best-google-forms-alternative/">
<span class="fmstr-cmp-tmpl-rel__chip">Alternative</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Google Forms alternative</h3>
<p class="fmstr-cmp-tmpl-rel__body">When Google Forms cannot do what your team needs.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/pricing/">
<span class="fmstr-cmp-tmpl-rel__chip">Pricing</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Formester pricing</h3>
<p class="fmstr-cmp-tmpl-rel__body">Collaboration features sit on Personal and Business plans.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

</div>
</div>
</section>


