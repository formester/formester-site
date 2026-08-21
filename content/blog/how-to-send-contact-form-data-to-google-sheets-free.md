---
slug: "how-to-send-contact-form-data-to-google-sheets-free"
title: "How to Send HTML Form Data to Google Sheets for Free"
description: "Push HTML form submissions straight into Google Sheets, free. Working Apps Script code, a no-code option, and a method-by-method comparison so you pick once."
metaTitle: "HTML Form to Google Sheets: 3 Free Methods (Code)"
metaDescription: "Push HTML form submissions straight into Google Sheets, free. Working Apps Script code, a no-code option, and a method-by-method comparison so you pick once."
keywords: "how to send contact form data to google sheets free,\ncontact form template,\ncontact form automation,"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "a cover of a blog post that talks about sending contact form data to google sheets"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_1_ec282fa0b6.png","width":1214,"height":630}
metaImage: []
jsonld: [{"@graph":[{"@id":"https://formester.com/blog/how-to-send-contact-form-data-to-google-sheets-free/#article","@type":"Article","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_1_ec282fa0b6.png","author":{"url":"https://www.linkedin.com/in/harish-kumar2424/","name":"Harish Kumar","@type":"Person"},"headline":"How to Send HTML Form Data to Google Sheets for Free","publisher":{"logo":{"url":"https://formester.com/logo.png","@type":"ImageObject"},"name":"Formester","@type":"Organization"},"description":"Push HTML form submissions straight into Google Sheets, free. Working Apps Script code, a no-code option, and a method-by-method comparison so you pick once.","dateModified":"2026-06-09","datePublished":"2025-03-06","mainEntityOfPage":"https://formester.com/blog/how-to-send-contact-form-data-to-google-sheets-free/"},{"name":"How to send HTML form data to Google Sheets with Apps Script","step":[{"name":"Create the Sheet","text":"Open Google Sheets, create a new spreadsheet, name the tab Submissions, and add column headers in row 1 that match the name attributes on your HTML form inputs.","@type":"HowToStep"},{"name":"Open Apps Script and paste the doPost function","text":"Inside the Sheet, open Extensions then Apps Script. Paste the doPost script provided in this guide. Save the project.","@type":"HowToStep"},{"name":"Run initialSetup and deploy the web app","text":"Pick initialSetup in the function dropdown and click Run. Approve the OAuth prompt. Click Deploy, New deployment, Web app, Execute as Me, Anyone has access. Copy the deployment URL.","@type":"HowToStep"},{"name":"Wire the deployment URL into your HTML form","text":"Point your form's fetch endpoint or action attribute at the deployment URL. Submit a test entry. The row appears in the Sheet within a second.","@type":"HowToStep"}],"tool":[{"name":"Google Sheets","@type":"HowToTool"},{"name":"Google Apps Script","@type":"HowToTool"},{"name":"HTML form on your site","@type":"HowToTool"}],"@type":"HowTo","totalTime":"PT30M","estimatedCost":{"@type":"MonetaryAmount","value":"0","currency":"USD"}},{"@type":"FAQPage","mainEntity":[{"name":"Is it really free to send HTML form data to Google Sheets?","@type":"Question","acceptedAnswer":{"text":"Yes. Google Apps Script is free with any Google account, capped at one Sheets write per second per user. Google Forms is free. Formester's free plan covers 100 submissions a month.","@type":"Answer"}},{"name":"How secure is form data in Google Sheets?","@type":"Question","acceptedAnswer":{"text":"Google encrypts data at rest and in transit. Lock sharing to specific accounts, neutralize formula characters on input to prevent CSV injection, and do not use a Sheet for payment data or passwords.","@type":"Answer"}},{"name":"What is the rate limit on Apps Script writes to Sheets?","@type":"Question","acceptedAnswer":{"text":"Roughly 100 requests per 100 seconds per user, per Google's published quotas. A contact form sustaining one submission per second sits comfortably inside that envelope.","@type":"Answer"}},{"name":"Can I send file uploads from the form into Google Sheets?","@type":"Question","acceptedAnswer":{"text":"Sheets cannot hold a file. Write the file to Google Drive via Apps Script and store the Drive URL in the cell, or use a no-code builder that handles file uploads natively.","@type":"Answer"}},{"name":"How do I add CAPTCHA or spam protection?","@type":"Question","acceptedAnswer":{"text":"The script in this guide ships a honeypot field. For more, add Google reCAPTCHA v3 on the client and verify the token server-side before writing to the Sheet.","@type":"Answer"}},{"name":"How do I get an email when someone submits the form?","@type":"Question","acceptedAnswer":{"text":"Add MailApp.sendEmail inside the doPost function in Apps Script. Or use the autoresponder feature in a no-code builder and skip the code.","@type":"Answer"}},{"name":"Can I use this on Netlify, Vercel, or any static site?","@type":"Question","acceptedAnswer":{"text":"Yes. The Apps Script deployment URL is a fetch target. It works from any frontend, hosted anywhere, with no backend on your side.","@type":"Answer"}},{"name":"Can I move from this setup to a database later?","@type":"Question","acceptedAnswer":{"text":"Easily. Sheets is a great starter store. When you cross a few hundred submissions a week, route the same form to a database or CRM in parallel with the Sheet.","@type":"Answer"}}]},{"@type":"BreadcrumbList","itemListElement":[{"item":"https://formester.com/","name":"Home","@type":"ListItem","position":1},{"item":"https://formester.com/blog/","name":"Blog","@type":"ListItem","position":2},{"item":"https://formester.com/blog/how-to-send-contact-form-data-to-google-sheets-free/","name":"How to Send HTML Form Data to Google Sheets for Free","@type":"ListItem","position":3}]}],"@context":"https://schema.org"}]
createdAt: "2025-03-06T18:34:23.526Z"
updatedAt: "2026-06-15T04:53:58.398Z"
publishedAt: "2026-06-15T04:53:58.393Z"
---
![a cover of a blog post that talks about sending contact form data to google sheets](https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_1_ec282fa0b6.png)

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

<p class="fmstr-blog-lead">If you have a contact form, an opt-in widget, or a custom HTML form on your site, you can route every submission straight into a Google Sheet without a database, a Zapier subscription, or a paid backend. Three free methods get you there. Two need code. One does not.</p>

<p class="fmstr-blog-lead">This guide gives you the working Apps Script (paste-ready), the no-code path, and a side-by-side comparison so you know which one to pick before you start.</p>

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
display: flex; flex-direction: column; gap: 12px;
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
.fmstr-cmp-tmpl-tldr__list {
margin: 0 !important; padding: 0 0 0 20px !important;
display: flex; flex-direction: column; gap: 8px;
font-size: 15.5px; line-height: 1.6; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-tldr__list li { margin: 0; }
.fmstr-cmp-tmpl-tldr__list strong { color: var(--c-violet-700); font-weight: 700; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-tldr { padding: 20px 0 28px; }
.fmstr-cmp-tmpl-tldr__card { padding: 18px 20px; }
.fmstr-cmp-tmpl-tldr__body { font-size: 15px !important; }
.fmstr-cmp-tmpl-tldr__list { font-size: 14.5px; }
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
<p class="fmstr-cmp-tmpl-tldr__body">You can push HTML form submissions into a Google Sheet for free with three methods. Pick one in 30 seconds:</p>
<ul class="fmstr-cmp-tmpl-tldr__list">
<li><strong>Google Forms</strong> (2 minutes, no code): use it when the form does not need to live on your own domain.</li>
<li><strong>Google Apps Script</strong> (20-40 minutes, paste-ready code below): use it when you already have an HTML form on your site and are fine maintaining a script.</li>
<li><strong>No-code builder like <a href="https://formester.com/">Formester</a></strong> (5 minutes, no code): use it when you want spam control, conditional logic, and Sheets sync in one place.</li>
<li>Apps Script caps at roughly one Sheets write per second per user, which is plenty for a contact form.</li>
<li>Never store payment data or passwords in Sheets. It is a great inbox, not a vault.</li>
</ul>
</div>
</div>
</section>


<style>
.fmstr-cmp-tmpl-cmp a { text-decoration: none !important; }
.fmstr-cmp-tmpl-cmp a.fmstr-cmp-tmpl-cmp__link { color: var(--c-violet-600) !important; font-weight: 600; }
.fmstr-cmp-tmpl-cmp a.fmstr-cmp-tmpl-cmp__link:hover { text-decoration: underline !important; }
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
font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.08em !important;
text-transform: uppercase; color: var(--c-violet-700) !important;
background: var(--c-tint); border: 1px solid var(--c-edge);
padding: 4px 10px; border-radius: 9999px;
align-self: flex-start;
}
.fmstr-cmp-tmpl-cmp__name {
font-size: 18px !important; font-weight: 700 !important; color: var(--c-fg-1);
margin: 0 !important; line-height: 1.3 !important;
}
.fmstr-cmp-tmpl-cmp__best {
font-size: 13.5px !important; color: var(--c-fg-3); margin: 0 !important;
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
display: block; position: relative; padding-left: 26px;
font-size: 14px; line-height: 1.5; color: var(--c-fg-2);
}
.fmstr-cmp-tmpl-cmp__item::before {
content: "\2713";
position: absolute; left: 0; top: 0.05em;
color: var(--c-good); font-weight: 700; line-height: 1.45;
}
.fmstr-cmp-tmpl-cmp__item--con::before { content: "\2717"; color: var(--c-bad); position: absolute; left: 0; top: 0.05em; font-weight: 700; }
.fmstr-cmp-tmpl-cmp__rules {
margin: 28px 0 0; padding: 18px 22px;
background: var(--c-tint); border: 1px solid var(--c-edge);
border-radius: 12px;
display: flex; flex-direction: column; gap: 8px;
}
.fmstr-cmp-tmpl-cmp__rules-label {
font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.08em !important;
text-transform: uppercase; color: var(--c-violet-700) !important; margin: 0 !important;
}
.fmstr-cmp-tmpl-cmp__rules-list {
margin: 0 !important; padding: 0 0 0 20px !important;
font-size: 14.5px; line-height: 1.6; color: var(--c-fg-1);
display: flex; flex-direction: column; gap: 6px;
}

@media (max-width: 920px) {
.fmstr-cmp-tmpl-cmp__grid { grid-template-columns: 1fr; gap: 12px; }
}
@media (max-width: 540px) {
.fmstr-cmp-tmpl-cmp { padding: 36px 0; }
.fmstr-cmp-tmpl-cmp__card { padding: 18px 20px; }
}


/* mobile-safety-v2 */
.fmstr-cmp-tmpl-cmp img, .fmstr-cmp-tmpl-cmp table, .fmstr-cmp-tmpl-cmp pre, .fmstr-cmp-tmpl-cmp iframe, .fmstr-cmp-tmpl-cmp video { max-width: 100%; }
.fmstr-cmp-tmpl-cmp > * { min-width: 0; }
.fmstr-cmp-tmpl-cmp [class*='__grid'] > *, .fmstr-cmp-tmpl-cmp [class*='__list'] > *, .fmstr-cmp-tmpl-cmp [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-cmp pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-tmpl-cmp table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
</style>

<section class="fmstr-cmp-tmpl-cmp" aria-labelledby="fmstr-cmp-tmpl-cmp-h2">
<div class="fmstr-cmp-tmpl-cmp__container">
<div class="fmstr-cmp-tmpl-cmp__head">
<h2 class="fmstr-cmp-tmpl-cmp__h2" id="fmstr-cmp-tmpl-cmp-h2">Which method should you pick?</h2>
<p class="fmstr-cmp-tmpl-cmp__intro">Three free routes from form submission to a Google Sheet row. Match the method to where you already are.</p>
</div>
<div class="fmstr-cmp-tmpl-cmp__grid">

<div class="fmstr-cmp-tmpl-cmp__card">
<span class="fmstr-cmp-tmpl-cmp__chip">Method 1</span>
<h3 class="fmstr-cmp-tmpl-cmp__name">Google Forms</h3>
<p class="fmstr-cmp-tmpl-cmp__best"><strong>Best for:</strong> A form you do not need to embed on your own site.</p>
<hr class="fmstr-cmp-tmpl-cmp__divider">
<ul class="fmstr-cmp-tmpl-cmp__list">
<li class="fmstr-cmp-tmpl-cmp__item">2-minute setup, no code at all.</li>
<li class="fmstr-cmp-tmpl-cmp__item">Free with any Google account.</li>
<li class="fmstr-cmp-tmpl-cmp__item">Responses auto-link to a Sheet.</li>
<li class="fmstr-cmp-tmpl-cmp__item fmstr-cmp-tmpl-cmp__item--con">Lives on a Google URL, not your domain.</li>
<li class="fmstr-cmp-tmpl-cmp__item fmstr-cmp-tmpl-cmp__item--con">Limited design control.</li>
</ul>
</div>

<div class="fmstr-cmp-tmpl-cmp__card">
<span class="fmstr-cmp-tmpl-cmp__chip">Method 2</span>
<h3 class="fmstr-cmp-tmpl-cmp__name">Google Apps Script</h3>
<p class="fmstr-cmp-tmpl-cmp__best"><strong>Best for:</strong> A custom HTML form you already have on your site.</p>
<hr class="fmstr-cmp-tmpl-cmp__divider">
<ul class="fmstr-cmp-tmpl-cmp__list">
<li class="fmstr-cmp-tmpl-cmp__item">Free forever, no usage cap on Sheets writes (within Google quotas).</li>
<li class="fmstr-cmp-tmpl-cmp__item">Paste-ready code, no edits required.</li>
<li class="fmstr-cmp-tmpl-cmp__item">Stays on your domain, no third-party branding.</li>
<li class="fmstr-cmp-tmpl-cmp__item fmstr-cmp-tmpl-cmp__item--con">20-40 minute setup.</li>
<li class="fmstr-cmp-tmpl-cmp__item fmstr-cmp-tmpl-cmp__item--con">You maintain the script and the deployment.</li>
</ul>
</div>

<div class="fmstr-cmp-tmpl-cmp__card fmstr-cmp-tmpl-cmp__card--featured">
<span class="fmstr-cmp-tmpl-cmp__chip">Method 3 &middot; No-code</span>
<h3 class="fmstr-cmp-tmpl-cmp__name">Formester</h3>
<p class="fmstr-cmp-tmpl-cmp__best"><strong>Best for:</strong> Embedding on any site with spam control, conditional logic, and Sheets sync.</p>
<hr class="fmstr-cmp-tmpl-cmp__divider">
<ul class="fmstr-cmp-tmpl-cmp__list">
<li class="fmstr-cmp-tmpl-cmp__item">5-minute setup, no code at all.</li>
<li class="fmstr-cmp-tmpl-cmp__item">Free plan covers 100 responses/month.</li>
<li class="fmstr-cmp-tmpl-cmp__item">Native <a class="fmstr-cmp-tmpl-cmp__link" href="https://formester.com/integrations/">Google Sheets integration</a>, OAuth, retries handled.</li>
<li class="fmstr-cmp-tmpl-cmp__item">Spam filtering, conditional logic, analytics built in.</li>
<li class="fmstr-cmp-tmpl-cmp__item fmstr-cmp-tmpl-cmp__item--con">Branded footer on the free plan.</li>
</ul>
</div>

</div>

<div class="fmstr-cmp-tmpl-cmp__rules">
<p class="fmstr-cmp-tmpl-cmp__rules-label">Decision rule</p>
<ul class="fmstr-cmp-tmpl-cmp__rules-list">
<li>If the form already exists in HTML and you are fine maintaining a script, use Apps Script.</li>
<li>If you do not need to embed the form on your own domain, use Google Forms.</li>
<li>If you want zero maintenance, spam control, conditional logic, and Google Sheets sync in one place, use a no-code form builder like Formester.</li>
</ul>
</div>
</div>
</section>


<style>
.fmstr-cmp-tmpl-steps a { text-decoration: none !important; }
.fmstr-cmp-tmpl-steps a.fmstr-cmp-tmpl-steps__link { color: var(--c-violet-600) !important; font-weight: 600; }
.fmstr-cmp-tmpl-steps a.fmstr-cmp-tmpl-steps__link:hover { text-decoration: underline !important; }
.fmstr-cmp-tmpl-steps {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6; --c-violet-700: #5b34b1;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-code-bg: #0f172a; --c-code-fg: #e2e8f0;
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
display: flex; gap: 12px;
align-items: flex-start;
min-width: 0;
}
.fmstr-cmp-tmpl-steps__num {
flex-shrink: 0;
width: 26px; line-height: 1; height: 26px; border-radius: 7px;
background: var(--c-tint);
border: 1px solid var(--c-edge);
color: var(--c-violet-700) !important;
font-weight: 800; font-size: 13px;
display: inline-flex; align-items: center; justify-content: center;
}
.fmstr-cmp-tmpl-steps__main { flex: 1; min-width: 0; }
.fmstr-cmp-tmpl-steps__title {
font-size: 17px !important; font-weight: 700 !important; line-height: 1.3 !important;
color: var(--c-fg-1); margin: 0 0 6px !important;
}
.fmstr-cmp-tmpl-steps__body {
font-size: 15px !important; line-height: 1.6 !important;
color: var(--c-fg-2); margin: 0 0 10px !important;
}
.fmstr-cmp-tmpl-steps__body:last-child { margin-bottom: 0 !important; }
.fmstr-cmp-tmpl-steps__body code {
background: #f4f4f7; padding: 1px 6px; border-radius: 5px;
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
font-size: 13.5px; color: var(--c-violet-700);
border: 1px solid var(--c-border);
}
.fmstr-cmp-tmpl-steps__code {
margin: 12px 0 4px;
background: var(--c-code-bg);
color: var(--c-code-fg);
border-radius: 10px;
padding: 16px 18px;
overflow-x: auto;
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
font-size: 13px;
line-height: 1.6;
white-space: pre;
max-width: 100%;
}
.fmstr-cmp-tmpl-steps__code-label {
display: block; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em;
text-transform: uppercase; color: #94a3b8;
margin: 0 0 10px;
}
.fmstr-cmp-tmpl-steps__note {
margin: 12px 0 0 !important; padding: 12px 14px;
background: var(--c-tint); border: 1px solid var(--c-edge);
border-radius: 10px;
font-size: 14px !important; line-height: 1.55 !important;
color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-steps__note strong { color: var(--c-violet-700); font-weight: 700; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-steps { padding: 36px 0; }
.fmstr-cmp-tmpl-steps__item { padding: 18px 20px; gap: 14px; }
.fmstr-cmp-tmpl-steps__num { width: 34px; height: 34px; font-size: 15px; }
.fmstr-cmp-tmpl-steps__title { font-size: 16px !important; }
.fmstr-cmp-tmpl-steps__body { font-size: 14.5px !important; }
.fmstr-cmp-tmpl-steps__code { font-size: 12px; padding: 14px 16px; }
}


/* mobile-safety-v2 */
.fmstr-cmp-tmpl-steps img, .fmstr-cmp-tmpl-steps table, .fmstr-cmp-tmpl-steps pre, .fmstr-cmp-tmpl-steps iframe, .fmstr-cmp-tmpl-steps video { max-width: 100%; }
.fmstr-cmp-tmpl-steps > * { min-width: 0; }
.fmstr-cmp-tmpl-steps [class*='__grid'] > *, .fmstr-cmp-tmpl-steps [class*='__list'] > *, .fmstr-cmp-tmpl-steps [class*='__cards'] > * { min-width: 0; max-width: 100%; }
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-steps pre { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .fmstr-cmp-tmpl-steps table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}



/* mobile-inline-num */
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-steps__item { padding: 18px 16px; gap: 10px; flex-direction: row; align-items: flex-start; }
  .fmstr-cmp-tmpl-steps__num { width: 28px; height: 28px; font-size: 13px; border-radius: 8px; }
}

/* step-inline-num-restructure */
.fmstr-cmp-tmpl-steps__item { display: block !important; }
.fmstr-cmp-tmpl-steps__title { display: block; }
.fmstr-cmp-tmpl-steps__num { display: inline-block !important; vertical-align: 2px; margin-right: 8px; padding: 2px 8px; width: auto !important; height: auto !important; border-radius: 6px; font-size: 12.5px !important; line-height: 1.3 !important; }
@media (max-width: 540px) {
  .fmstr-cmp-tmpl-steps__num { font-size: 11.5px !important; padding: 2px 7px; margin-right: 6px; }
}
</style>

<section class="fmstr-cmp-tmpl-steps" aria-labelledby="fmstr-cmp-tmpl-steps-h2">
<div class="fmstr-cmp-tmpl-steps__container">
<div class="fmstr-cmp-tmpl-steps__head">
<h2 class="fmstr-cmp-tmpl-steps__h2" id="fmstr-cmp-tmpl-steps-h2">Method 2: Google Apps Script, full working setup</h2>
<p class="fmstr-cmp-tmpl-steps__intro"><strong>Method 1 is one click in Google Forms. Method 3 is a no-code toggle in Formester.</strong> The only method that needs a real walkthrough is Method 2. Here it is, in full.</p>
<p class="fmstr-cmp-tmpl-steps__intro">Paste-ready code that handles any field name in your HTML form, sanitizes against <a class="fmstr-cmp-tmpl-steps__link" href="https://owasp.org/www-community/attacks/CSV_Injection">CSV formula injection</a>, and works with both <code>application/json</code> and standard form-encoded submissions.</p>
</div>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<h3 class="fmstr-cmp-tmpl-steps__title"><span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>Create the Sheet</h3>
<p class="fmstr-cmp-tmpl-steps__body">Open <a class="fmstr-cmp-tmpl-steps__link" href="https://docs.google.com/spreadsheets/">Google Sheets</a> and create a new spreadsheet. Name the tab <code>Submissions</code>. In row 1, add column headers that match the <code>name</code> attributes on your form inputs. Add <code>timestamp</code> as the first column. The script reads row 1 as the source of truth for column mapping, so a typo in a header is a typo in the data.</p>
<p class="fmstr-cmp-tmpl-steps__body">Example row 1: <code>timestamp | name | email | message</code></p>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<h3 class="fmstr-cmp-tmpl-steps__title"><span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>Open Apps Script and paste the code</h3>
<p class="fmstr-cmp-tmpl-steps__body">Inside the Sheet, go to Extensions, then Apps Script. Delete the boilerplate and paste this:</p>
<pre class="fmstr-cmp-tmpl-steps__code"><span class="fmstr-cmp-tmpl-steps__code-label">Code.gs</span>const SHEET_NAME = 'Submissions';
const SCRIPT_PROP = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty('key'));
    const sheet = doc.getSheetByName(SHEET_NAME);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Honeypot: if a hidden field named "website" is filled, drop the submission.
    if (e.parameter.website) {
      return ContentService.createTextOutput(JSON.stringify({ result: 'ignored' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sanitize = (value) =&gt; {
      if (typeof value !== 'string') return value;
      // Block CSV / formula injection
      return /^[=+\-@]/.test(value) ? "'" + value : value;
    };

    const newRow = headers.map((header) =&gt; {
      if (header === 'timestamp') return new Date();
      return sanitize(e.parameter[header] || '');
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}</pre>
<p class="fmstr-cmp-tmpl-steps__body">Save the script. Then in the function dropdown at the top of the editor, pick <code>initialSetup</code> and click Run once. Approve the OAuth prompt when Google asks. You will only do this once.</p>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<h3 class="fmstr-cmp-tmpl-steps__title"><span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>Deploy as a web app</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click Deploy, then New deployment. Pick Web app. Set Execute as: Me. Set Who has access: Anyone. Click Deploy. Copy the long URL that ends in <code>/exec</code>. That URL is your form endpoint.</p>
<div class="fmstr-cmp-tmpl-steps__note"><strong>Heads-up:</strong> every time you change the script, redeploy and grab the new URL. Old URLs keep working at the old script version, which is the most common cause of "I updated my code and nothing changed" complaints.</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<h3 class="fmstr-cmp-tmpl-steps__title"><span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>Wire up your HTML form</h3>
<p class="fmstr-cmp-tmpl-steps__body">Drop this into your page. Replace <code>PASTE_YOUR_DEPLOYMENT_URL_HERE</code> with the URL from step 3.</p>
<pre class="fmstr-cmp-tmpl-steps__code"><span class="fmstr-cmp-tmpl-steps__code-label">index.html</span>&lt;form id="contact-form"&gt;
  &lt;input type="text" name="name" required placeholder="Name" /&gt;
  &lt;input type="email" name="email" required placeholder="Email" /&gt;
  &lt;textarea name="message" required placeholder="Message"&gt;&lt;/textarea&gt;
  &lt;!-- Honeypot: hidden from humans, filled by bots --&gt;
  &lt;input type="text" name="website" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" /&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
  const form = document.getElementById('contact-form');
  const endpoint = 'PASTE_YOUR_DEPLOYMENT_URL_HERE';

  form.addEventListener('submit', async (e) =&gt; {
    e.preventDefault();
    const data = new FormData(form);
    try {
      await fetch(endpoint, { method: 'POST', body: data });
      form.reset();
      alert('Thanks. We will be in touch.');
    } catch (err) {
      alert('Something went wrong. Try again in a minute.');
    }
  });
&lt;/script&gt;</pre>
<p class="fmstr-cmp-tmpl-steps__body">Submit a test entry. The row should appear in your Sheet within a second.</p>
<div class="fmstr-cmp-tmpl-steps__note"><strong>Rate limit to know about:</strong> Google caps the Sheets-backed Apps Script at roughly <a class="fmstr-cmp-tmpl-steps__link" href="https://developers.google.com/sheets/api/limits">100 requests per 100 seconds per user</a>, or one write per second. For a contact form that is plenty. If you expect bursts (a launch, a paid ad campaign), queue submissions or use a builder that handles retries.</div>
</li>

</ol>
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
<span class="fmstr-cmp-tmpl-midcta__eyebrow">No-code path</span>
<h2 class="fmstr-cmp-tmpl-midcta__h2" id="fmstr-cmp-tmpl-midcta-h2">Send HTML form data to Google Sheets, without writing a single line of code</h2>
<p class="fmstr-cmp-tmpl-midcta__body">Drop in a Formester form, connect Google Sheets, done. Two-way sync, free plan, no script to maintain.</p>
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
.fmstr-cmp-tmpl-faq__answer a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 600; }
.fmstr-cmp-tmpl-faq__answer a:hover { text-decoration: underline !important; }
.fmstr-cmp-tmpl-faq__answer code {
background: var(--c-chip-bg); padding: 1px 6px; border-radius: 5px;
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
font-size: 13.5px; color: var(--c-violet-600);
border: 1px solid var(--c-border);
}

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
<h2 class="fmstr-cmp-tmpl-faq__h2" id="fmstr-cmp-tmpl-faq-h2">Frequently asked questions</h2>
<p class="fmstr-cmp-tmpl-faq__intro">Common questions about routing HTML form data into Google Sheets for free.</p>
<div class="fmstr-cmp-tmpl-faq__list">

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Is it really free to send HTML form data to Google Sheets?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Yes. Google Apps Script is free with any Google account, with the rate limit of one Sheets write per second per user. Google Forms is free. Formester's free plan covers 100 submissions a month. You only start paying when your volume crosses Google's API quota or a builder's free-plan cap.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How secure is form data in Google Sheets?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Google encrypts data at rest and in transit. The risk is in sharing and CSV injection, not the storage. Lock down sharing to specific accounts, do not share by link, neutralize formula characters on input (the script above does this), and never use a Sheet for payment data or passwords.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>What is the rate limit on Apps Script writes to Sheets?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Roughly 100 requests per 100 seconds per user, per Google's published quotas. For a contact form that allows a sustained one submission per second, with bursts handled by retries.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I send file uploads from the form into Google Sheets?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Sheets cannot hold a file, but it can hold a link. With Apps Script, you can write the file to Google Drive and write the Drive URL into the cell. With a no-code builder, the <a href="https://formester.com/features/">file upload field in Formester</a> handles this and stores the file separately.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I add CAPTCHA or spam protection?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">The script above includes a honeypot field. For more, add Google reCAPTCHA v3 on the client and verify the token server-side before writing to the Sheet. Builders ship CAPTCHA, rate limiting, and IP blocks as a toggle.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>How do I get an email when someone submits the form?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Add <code>MailApp.sendEmail({ to: 'you@example.com', subject: 'New form submission', body: JSON.stringify(e.parameter) })</code> inside the <code>doPost</code> function in the script. Or use the <a href="https://formester.com/features/autoresponder-email/">autoresponder feature</a> in Formester and skip the code.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I use this on Netlify, Vercel, or any static site?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Yes. The Apps Script deployment URL is just a <code>fetch</code> target. It works from any frontend, hosted anywhere, with no backend on your side.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I move from this setup to a database later?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Easily. Sheets is a great starter store. When you cross a few hundred submissions a week, route the same form to a database or CRM in parallel with the Sheet. Most CRMs ship a Google Sheets sync, so you can keep the Sheet for the team and the CRM for the system of record.</div>
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
<h2 class="fmstr-cmp-tmpl-rel__h2" id="fmstr-cmp-tmpl-rel-h2">More on connecting forms to Google Sheets</h2>
<p class="fmstr-cmp-tmpl-rel__intro">More on connecting forms to Google Sheets, building APIs around them, and picking the right builder.</p>
</div>
<div class="fmstr-cmp-tmpl-rel__grid">

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/best-form-builders-compatible-with-google-sheets/">
<span class="fmstr-cmp-tmpl-rel__chip">Listicle</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Best form builders compatible with Google Sheets</h3>
<p class="fmstr-cmp-tmpl-rel__body">Side-by-side on price, sync mode, and field mapping.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-create-google-sheets-api-and-use-as-live-backend/">
<span class="fmstr-cmp-tmpl-rel__chip">How-to</span>
<h3 class="fmstr-cmp-tmpl-rel__title">How to create a Google Sheets API and use it as a live backend</h3>
<p class="fmstr-cmp-tmpl-rel__body">Treat a Sheet as a read/write database for a real app.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-link-google-sheets-to-google-forms/">
<span class="fmstr-cmp-tmpl-rel__chip">How-to</span>
<h3 class="fmstr-cmp-tmpl-rel__title">How to link Google Sheets to Google Forms</h3>
<p class="fmstr-cmp-tmpl-rel__body">The 2-minute setup for the Google Forms route.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-pre-fill-forms-using-google-sheets-and-formester/">
<span class="fmstr-cmp-tmpl-rel__chip">How-to</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Pre-fill forms using Google Sheets and Formester</h3>
<p class="fmstr-cmp-tmpl-rel__body">Reverse the flow: pull Sheet data into a form before it loads.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-link-squarespace-forms-to-google-sheets/">
<span class="fmstr-cmp-tmpl-rel__chip">How-to</span>
<h3 class="fmstr-cmp-tmpl-rel__title">How to link Squarespace forms to Google Sheets</h3>
<p class="fmstr-cmp-tmpl-rel__body">Same idea, scoped to a Squarespace site.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/integrations/">
<span class="fmstr-cmp-tmpl-rel__chip">Formester</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Google Sheets integration</h3>
<p class="fmstr-cmp-tmpl-rel__body">Native sync with OAuth, header mapping, and retries handled.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Open</span>
</a>

</div>
</div>
</section>


