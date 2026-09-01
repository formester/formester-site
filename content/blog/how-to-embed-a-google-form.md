---
slug: "how-to-embed-a-google-form"
title: "How to embed a Google Form in 2026"
description: "Embed a Google Form on any site (WordPress, Wix, Squarespace, Canva) in 2026. Get the iframe snippet, fix mobile cut-off issues, and skip the embed limits."
metaTitle: "How to Embed a Google Form in 2026: 5 Methods + Fixes"
metaDescription: "Embed a Google Form on any site (WordPress, Wix, Squarespace, Canva) in 2026. Get the iframe snippet, fix mobile cut-off issues, and skip the embed limits."
keywords: "Embed Google Forms, Google Forms integration, Form embedding, Embedding forms, Website integration, Email forms, Shareable links, Google Forms limitations, Formester alternative, E-signature support, Form building strategies, Form integration methods, User engagement, Data collection, Online forms, Google Forms tutorial, Formester features, Practical strategies, Website forms, Email marketing"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "illustration of google forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_embed_a_google_form_cbd089bd2e.png","width":1214,"height":630}
metaImage: []
jsonld: [{"@graph":[{"@type":"Article","author":{"url":"https://www.linkedin.com/in/sidsh0502/","name":"Siddharth Sharma","@type":"Person"},"headline":"How to embed a Google Form in 2026: 5 methods, the iframe code, and the fixes nobody documents","publisher":{"logo":{"url":"https://formester.com/logo.png","@type":"ImageObject"},"name":"Formester","@type":"Organization"},"dateModified":"2026-06-11","datePublished":"2023-10-26","mainEntityOfPage":"https://formester.com/blog/how-to-embed-a-google-form/"},{"name":"How to embed a Google Form on your website","step":[{"name":"Open the form's Send modal","text":"In Google Forms, click Send in the top right corner.","@type":"HowToStep","position":1},{"name":"Click the embed icon","text":"Click the < > embed icon in the share modal.","@type":"HowToStep","position":2},{"name":"Set width and height","text":"Set width to at least 720px and height to your form's full pixel length plus 80px buffer.","@type":"HowToStep","position":3},{"name":"Copy the iframe snippet","text":"Click Copy to grab the generated iframe HTML.","@type":"HowToStep","position":4},{"name":"Paste into your site","text":"Paste the snippet into a Custom HTML block on your CMS (WordPress, Wix, Squarespace, Webflow, Canva).","@type":"HowToStep","position":5},{"name":"Make it responsive","text":"Wrap the iframe in a div with max-width:720px and set the iframe width to 100%.","@type":"HowToStep","position":6}],"tool":[{"name":"Google Forms","@type":"HowToTool"},{"name":"Website HTML editor or CMS","@type":"HowToTool"}],"@type":"HowTo","totalTime":"PT5M"},{"@type":"FAQPage","mainEntity":[{"name":"Can I embed a Google Form on a Canva website?","@type":"Question","acceptedAnswer":{"text":"Yes. On a Canva-designed website, open the page editor, click Add > Embed, and paste the Google Form's viewform URL. Canva resolves the URL into a live form inside a fixed aspect-ratio embed window.","@type":"Answer"}},{"name":"Why is my embedded Google Form not loading on my site?","@type":"Question","acceptedAnswer":{"text":"The most common cause is a Content Security Policy that blocks third-party iframes. Add frame-src https://docs.google.com; to your site's CSP header. Other causes include restricted sharing settings or strict same-origin policies.","@type":"Answer"}},{"name":"Is there a height limit on a Google Forms iframe?","@type":"Question","acceptedAnswer":{"text":"There is no hard limit, but Google does not auto-resize the iframe. You set the height once, and any change to the form breaks the fit. Most users set the height 80 to 200 pixels above the expected form length.","@type":"Answer"}},{"name":"Can I style an embedded Google Form to match my site?","@type":"Question","acceptedAnswer":{"text":"Only partially. You can set a single theme color and font inside Google Forms, but the form chrome stays Google-branded. Tools like Formester let you fully white-label the form.","@type":"Answer"}},{"name":"Is an embedded Google Form mobile responsive?","@type":"Question","acceptedAnswer":{"text":"Out of the box, no. The iframe takes a fixed width and height. Wrap it in a div with max-width:100% and set width=100% with a tuned min-height to improve mobile rendering.","@type":"Answer"}},{"name":"Can I track Google Form submissions in Google Analytics or my CRM?","@type":"Question","acceptedAnswer":{"text":"Not from the embed alone. Form submissions live in Google Sheets or the form's response tab. You need a Zapier or Make automation to push them to GA4 or a CRM.","@type":"Answer"}}]},{"@type":"BreadcrumbList","itemListElement":[{"item":"https://formester.com/","name":"Home","@type":"ListItem","position":1},{"item":"https://formester.com/blog/","name":"Blog","@type":"ListItem","position":2},{"item":"https://formester.com/blog/how-to-embed-a-google-form/","name":"How to embed a Google Form","@type":"ListItem","position":3}]}],"@context":"https://schema.org"}]
createdAt: "2024-04-07T10:04:42.382Z"
updatedAt: "2026-06-15T04:50:44.271Z"
publishedAt: "2026-06-15T04:50:44.267Z"
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

<p class="fmstr-blog-lead">Most people embed a Google Form for one reason. They want responses on their own site, inside their own brand, without sending visitors to a docs.google.com URL that breaks the flow. There are five ways to do it in 2026.</p>

<p class="fmstr-blog-lead">The iframe HTML snippet (works anywhere you can paste HTML), a WordPress plugin or shortcode, the native Wix HTML element, the Squarespace code block, and Canva's embed element. We walk through each below with the exact code.</p>

<p class="fmstr-blog-lead">The catch worth knowing before you start: Google's iframe is fixed-width by default, sits awkwardly on mobile, ignores your brand colors, and will not load if your site blocks third-party iframes via CSP. We cover the fixes for all of that, plus what to do when you outgrow it.</p>

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
font-size: 12px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
color: var(--c-violet-700) !important;
display: inline-flex;
align-items: center;
gap: 8px;
margin: 0;
}
.fmstr-cmp-tmpl-tldr__label::before {
content: "";
width: 8px; height: 8px; border-radius: 9999px;
background: var(--c-violet-500);
display: inline-block;
}
.fmstr-cmp-tmpl-tldr__body {
font-size: 16px;
line-height: 1.65;
color: var(--c-fg-1);
margin: 0;
font-weight: 500;
}
.fmstr-cmp-tmpl-tldr__body strong { color: var(--c-violet-700); font-weight: 700; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-tldr { padding: 20px 0 28px; }
.fmstr-cmp-tmpl-tldr__card { padding: 18px 20px; }
.fmstr-cmp-tmpl-tldr__body { font-size: 15px; }
}
</style>

<section class="fmstr-cmp-tmpl-tldr" aria-labelledby="fmstr-cmp-tmpl-tldr-label">
<div class="fmstr-cmp-tmpl-tldr__container">
<div class="fmstr-cmp-tmpl-tldr__card">
<p class="fmstr-cmp-tmpl-tldr__label" id="fmstr-cmp-tmpl-tldr-label">Quick answer</p>
<p class="fmstr-cmp-tmpl-tldr__body">To embed a Google Form, open the form, click <strong>Send</strong>, then the <strong>&lt; &gt;</strong> embed icon, set width and height, and copy the iframe snippet. Paste it into any site that accepts HTML: WordPress (Custom HTML block), Wix (Embed HTML), Squarespace (Code block), Webflow (Embed), or Canva (Add &gt; Embed using the viewform URL). For responsive sizing, wrap the iframe in a div with <strong>max-width:720px</strong> and set the iframe to <strong>width:100%</strong> with a tuned min-height.</p>
</div>
</div>
</section>


<style>
.fmstr-cmp-tmpl-cmp a { text-decoration: none !important; color: var(--c-violet-600) !important; }
.fmstr-cmp-tmpl-cmp a:hover { text-decoration: underline !important; }
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
.fmstr-cmp-tmpl-cmp__head { margin: 0 0 28px; }
.fmstr-cmp-tmpl-cmp__h2 {
font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15;
letter-spacing: -.02em; margin: 0; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-cmp__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }

.fmstr-cmp-tmpl-cmp__tablewrap { border: 1px solid var(--c-border); border-radius: 14px; overflow: hidden; background: var(--c-card); box-shadow: var(--c-shadow); }
.fmstr-cmp-tmpl-cmp__tablescroll { overflow-x: auto; }
.fmstr-cmp-tmpl-cmp__table { width: 100%; border-collapse: collapse; min-width: 640px; }
.fmstr-cmp-tmpl-cmp__table th, .fmstr-cmp-tmpl-cmp__table td { text-align: left; padding: 14px 18px; font-size: 14.5px; line-height: 1.5; border-bottom: 1px solid var(--c-border); vertical-align: top; color: var(--c-fg-2); }
.fmstr-cmp-tmpl-cmp__table thead th { background: var(--c-tint); color: var(--c-fg-1); font-weight: 700; font-size: 13.5px; letter-spacing: .02em; }
.fmstr-cmp-tmpl-cmp__table tr:last-child td { border-bottom: 0; }
.fmstr-cmp-tmpl-cmp__table td:first-child, .fmstr-cmp-tmpl-cmp__table th:first-child { color: var(--c-fg-1); font-weight: 600; width: 26%; }
.fmstr-cmp-tmpl-cmp__table th.fmstr-cmp-tmpl-cmp__th--us { color: var(--c-violet-700); }

.fmstr-cmp-tmpl-cmp__caption { font-size: 14px; color: var(--c-fg-3); margin: 14px 4px 0; line-height: 1.55; }

.fmstr-cmp-tmpl-cmp__tag { display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 12px; font-weight: 700; letter-spacing: .02em; }
.fmstr-cmp-tmpl-cmp__tag--no { background: #fef3f2; color: #b42318; }
.fmstr-cmp-tmpl-cmp__tag--yes { background: #ecfdf3; color: #027a48; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-cmp { padding: 36px 0; }
.fmstr-cmp-tmpl-cmp__table th, .fmstr-cmp-tmpl-cmp__table td { padding: 12px 14px; font-size: 13.5px; }
}
</style>

<section class="fmstr-cmp-tmpl-cmp" aria-labelledby="fmstr-cmp-tmpl-cmp-h2">
<div class="fmstr-cmp-tmpl-cmp__container">
<div class="fmstr-cmp-tmpl-cmp__head">
<h2 class="fmstr-cmp-tmpl-cmp__h2" id="fmstr-cmp-tmpl-cmp-h2">Google Forms embed vs Formester embed</h2>
<p class="fmstr-cmp-tmpl-cmp__intro">Same job, two very different defaults. Here is the side-by-side on what each one ships out of the box.</p>
</div>

<div class="fmstr-cmp-tmpl-cmp__tablewrap">
<div class="fmstr-cmp-tmpl-cmp__tablescroll">
<table class="fmstr-cmp-tmpl-cmp__table">
<thead>
<tr>
<th>Capability</th>
<th>Google Forms embed</th>
<th class="fmstr-cmp-tmpl-cmp__th--us">Formester embed</th>
</tr>
</thead>
<tbody>
<tr>
<td>Embed modes</td>
<td>1 (iframe only)</td>
<td>6: Standard inline, Popup, Sidebar, Side Tab, Popover, Fullscreen</td>
</tr>
<tr>
<td>Mobile responsive</td>
<td>Manual (fixed height)</td>
<td>Auto-fits container</td>
</tr>
<tr>
<td>Custom branding</td>
<td><span class="fmstr-cmp-tmpl-cmp__tag fmstr-cmp-tmpl-cmp__tag--no">No</span> Google chrome stays</td>
<td><a href="https://formester.com/features/branding/">Full white-label, brand colors, custom fonts</a></td>
</tr>
<tr>
<td>Native CMS integrations</td>
<td>None (raw iframe everywhere)</td>
<td>WordPress, Wix, Webflow, Canva, Shopify, Squarespace</td>
</tr>
<tr>
<td>Load behavior</td>
<td>iframe loads docs.google.com</td>
<td>Lightweight JS embed, no iframe required for Popup or Side Tab</td>
</tr>
<tr>
<td>Conditional logic</td>
<td>Basic section branching only</td>
<td><a href="https://formester.com/features/conditional-logic/">Field-level + page-level conditional logic</a></td>
</tr>
<tr>
<td>Submissions analytics</td>
<td>Inside Google Forms only</td>
<td><a href="https://formester.com/features/form-analytics/">Per-field drop-off, time on page, completion rate</a></td>
</tr>
<tr>
<td>Payment fields</td>
<td><span class="fmstr-cmp-tmpl-cmp__tag fmstr-cmp-tmpl-cmp__tag--no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmp__tag fmstr-cmp-tmpl-cmp__tag--yes">Yes</span> Stripe + PayPal native</td>
</tr>
<tr>
<td>E-signature</td>
<td><span class="fmstr-cmp-tmpl-cmp__tag fmstr-cmp-tmpl-cmp__tag--no">No</span></td>
<td><span class="fmstr-cmp-tmpl-cmp__tag fmstr-cmp-tmpl-cmp__tag--yes">Yes</span> legally binding signatures</td>
</tr>
<tr>
<td>File upload</td>
<td>Requires Google login</td>
<td>Public, no login required</td>
</tr>
</tbody>
</table>
</div>
</div>

<p class="fmstr-cmp-tmpl-cmp__caption">If you are sending the form to people inside your Workspace and you do not care how it looks, Google Forms is free and works. If the visitor's first impression matters, <a href="https://formester.com/features/embed-forms/">embed your form on any site</a> with Formester, or read the deeper <a href="https://formester.com/blog/google-forms-vs-jotform-the-comparison-everyone-asked-for/">Google Forms vs Jotform comparison</a>.</p>

</div>
</section>


<style>
.fmstr-cmp-tmpl-steps a { text-decoration: none !important; color: var(--c-violet-600) !important; }
.fmstr-cmp-tmpl-steps a:hover { text-decoration: underline !important; }
.fmstr-cmp-tmpl-steps {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6; --c-violet-700: #5b34b1;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);
--c-code-bg: #0f1419; --c-code-fg: #e5e7eb; --c-code-accent: #c4b5fd;
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
.fmstr-cmp-tmpl-steps__head { margin: 0 0 28px; }
.fmstr-cmp-tmpl-steps__h2 {
font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15;
letter-spacing: -.02em; margin: 0; color: var(--c-fg-1);
}
.fmstr-cmp-tmpl-steps__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }

.fmstr-cmp-tmpl-steps__method { margin: 28px 0 0; }
.fmstr-cmp-tmpl-steps__methodlabel {
display: inline-block; font-size: 11.5px; font-weight: 700; letter-spacing: .1em;
text-transform: uppercase; color: var(--c-violet-700) !important;
background: var(--c-tint); border: 1px solid var(--c-edge);
padding: 4px 10px; border-radius: 9999px; margin: 0 0 10px;
}
.fmstr-cmp-tmpl-steps__methodtitle {
font-size: 22px; font-weight: 700; color: var(--c-fg-1);
margin: 0 0 6px; line-height: 1.25;
}
.fmstr-cmp-tmpl-steps__methodlead {
color: var(--c-fg-2); font-size: 15.5px; line-height: 1.6; margin: 0 0 16px;
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
font-size: 17px; font-weight: 700; line-height: 1.3;
color: var(--c-fg-1); margin: 0 0 6px;
}
.fmstr-cmp-tmpl-steps__body {
font-size: 15px; line-height: 1.6;
color: var(--c-fg-2); margin: 0;
}
.fmstr-cmp-tmpl-steps__body code { background: #f4f4f7; color: #3b1d72; padding: 1px 6px; border-radius: 5px; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

.fmstr-cmp-tmpl-steps__code {
margin: 12px 0 0; padding: 16px 18px;
background: var(--c-code-bg); color: var(--c-code-fg);
border-radius: 10px; font-size: 13px; line-height: 1.6;
font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
overflow-x: auto; white-space: pre;
}
.fmstr-cmp-tmpl-steps__code span.tag { color: var(--c-code-accent); }

.fmstr-cmp-tmpl-steps__note {
margin: 12px 0 0; padding: 12px 14px;
background: #fff8eb; border: 1px solid #fde9b9; border-radius: 10px;
font-size: 14px; line-height: 1.55; color: #6b4607;
}
.fmstr-cmp-tmpl-steps__note strong { color: #8a3a06; }

.fmstr-cmp-tmpl-steps__sublist {
margin: 8px 0 0 0; padding: 0; list-style: none;
display: flex; flex-direction: column; gap: 10px;
}
.fmstr-cmp-tmpl-steps__sublist li {
font-size: 15px; line-height: 1.6; color: var(--c-fg-2);
padding-left: 16px; position: relative;
}
.fmstr-cmp-tmpl-steps__sublist li::before {
content: ""; position: absolute; left: 0; top: 9px;
width: 6px; height: 6px; border-radius: 9999px; background: var(--c-violet-500);
}
.fmstr-cmp-tmpl-steps__sublist li strong { color: var(--c-fg-1); }

.fmstr-cmp-tmpl-steps__trouble {
margin: 28px 0 0; padding: 24px 26px;
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; box-shadow: var(--c-shadow);
}
.fmstr-cmp-tmpl-steps__troublehead {
font-size: 18px; font-weight: 700; color: var(--c-fg-1); margin: 0 0 4px;
}
.fmstr-cmp-tmpl-steps__troublelead {
color: var(--c-fg-3); font-size: 14.5px; margin: 0 0 14px;
}
.fmstr-cmp-tmpl-steps__troublelist {
margin: 0; padding: 0; list-style: none;
display: flex; flex-direction: column; gap: 10px;
}
.fmstr-cmp-tmpl-steps__troublelist > li {
font-size: 14.5px; line-height: 1.6; color: var(--c-fg-2);
padding: 12px 14px; background: #fafafb; border: 1px solid var(--c-border); border-radius: 10px;
}
.fmstr-cmp-tmpl-steps__troublelist > li strong { color: var(--c-fg-1); display: block; margin: 0 0 4px; font-size: 14.5px; }
.fmstr-cmp-tmpl-steps__troublelist code { background: #f4f4f7; color: #3b1d72; padding: 1px 6px; border-radius: 5px; font-size: 13px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

@media (max-width: 540px) {
.fmstr-cmp-tmpl-steps { padding: 36px 0; }
.fmstr-cmp-tmpl-steps__item { padding: 18px 20px; gap: 14px; }
.fmstr-cmp-tmpl-steps__num { width: 34px; height: 34px; font-size: 15px; }
.fmstr-cmp-tmpl-steps__title { font-size: 16px; }
.fmstr-cmp-tmpl-steps__body { font-size: 14.5px; }
.fmstr-cmp-tmpl-steps__methodtitle { font-size: 19px; }
.fmstr-cmp-tmpl-steps__code { font-size: 12px; padding: 14px; }
.fmstr-cmp-tmpl-steps__trouble { padding: 18px 20px; }
}
</style>

<section class="fmstr-cmp-tmpl-steps" aria-labelledby="fmstr-cmp-tmpl-steps-h2">
<div class="fmstr-cmp-tmpl-steps__container">

<div class="fmstr-cmp-tmpl-steps__head">
<h2 class="fmstr-cmp-tmpl-steps__h2" id="fmstr-cmp-tmpl-steps-h2">3 methods to embed a Google Form on any site</h2>
<p class="fmstr-cmp-tmpl-steps__intro">The universal iframe snippet, the WordPress route, and the four-CMS path for Wix, Squarespace, Canva, and Webflow. Pick the one that matches where your form is going to live.</p>
</div>

<div class="fmstr-cmp-tmpl-steps__method">
<span class="fmstr-cmp-tmpl-steps__methodlabel">Method 1</span>
<h3 class="fmstr-cmp-tmpl-steps__methodtitle">Embed a Google Form with the iframe HTML snippet</h3>
<p class="fmstr-cmp-tmpl-steps__methodlead">This is the universal method. Any site builder, blog platform, or static page that accepts an HTML block will accept this.</p>

<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Open your form and click Send</h4>
<p class="fmstr-cmp-tmpl-steps__body">Open the form in Google Forms and click <strong>Send</strong> in the top right.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Click the embed icon</h4>
<p class="fmstr-cmp-tmpl-steps__body">In the share modal, click the <code>&lt; &gt;</code> embed icon to switch to the embed view.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Set the width and height</h4>
<p class="fmstr-cmp-tmpl-steps__body">Default is 640 by 480. Most layouts need at least 700 by 1200 for a single-page form. Underestimate the height and the form scrolls inside its own box, which kills completion rates. Common embeds include simple contact forms and <a href="https://formester.com/blog/how-to-create-a-quiz-in-google-forms-the-only-guide-youll-need-in-2023/">quizzes built in Google Forms</a>.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Copy the iframe snippet</h4>
<p class="fmstr-cmp-tmpl-steps__body">Click <strong>Copy</strong>. You will get a snippet that looks like this:</p>
<pre class="fmstr-cmp-tmpl-steps__code">&lt;iframe src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
        width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0"&gt;
  Loading...
&lt;/iframe&gt;</pre>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">5</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Paste it into your HTML editor</h4>
<p class="fmstr-cmp-tmpl-steps__body">Drop the snippet wherever you want the form to render on the page.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">6</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Make it responsive</h4>
<p class="fmstr-cmp-tmpl-steps__body">Wrap the iframe and set width to 100% with a fixed minimum height:</p>
<pre class="fmstr-cmp-tmpl-steps__code">&lt;div style="max-width:720px;margin:0 auto;"&gt;
  &lt;iframe src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
          style="width:100%;min-height:1400px;border:0;"&gt;
    Loading...
  &lt;/iframe&gt;
&lt;/div&gt;</pre>
<div class="fmstr-cmp-tmpl-steps__note"><strong>Pitfall:</strong> Google does not auto-resize iframes. Your height is a guess. Add a question, and the form scrolls. Edit it down, and you have whitespace. Most teams set the min-height 200px above the expected form height and accept the small empty band. Once the form is live, you can also <a href="https://formester.com/blog/google-forms-to-google-sheets/">connect Google Forms to Sheets</a> to capture responses.</div>
</div>
</li>

</ol>
</div>

<div class="fmstr-cmp-tmpl-steps__method">
<span class="fmstr-cmp-tmpl-steps__methodlabel">Method 2</span>
<h3 class="fmstr-cmp-tmpl-steps__methodtitle">Embed a Google Form in WordPress</h3>
<p class="fmstr-cmp-tmpl-steps__methodlead">Three routes, ranked by effort. Pick based on whether you want the form to inherit your theme styling.</p>

<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">A</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Custom HTML block (no plugin)</h4>
<p class="fmstr-cmp-tmpl-steps__body">Open the post or page in the block editor, add a <strong>Custom HTML</strong> block, paste the iframe snippet from Method 1. Works on every WordPress install, free or hosted.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">B</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Google Forms shortcode plugin</h4>
<p class="fmstr-cmp-tmpl-steps__body">Plugins like <a href="https://wordpress.org/plugins/google-forms/">Google Forms by Best WordPress Plugin Marketplace</a> and <a href="https://wordpress.org/plugins/wpgform/">WPGForm</a> let you embed via a shortcode like <code>[google-form id="FORM_ID"]</code>. Useful when you want the form to inherit your theme's typography, since the plugin renders questions in your site's HTML instead of inside an iframe.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">C</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h4 class="fmstr-cmp-tmpl-steps__title">Page builder elements</h4>
<p class="fmstr-cmp-tmpl-steps__body">Elementor, Divi, and Bricks all ship an HTML widget. Drop the iframe in there. The advantage: you can wrap the widget in a styled container and use the builder's responsive controls to swap iframe heights between desktop and mobile breakpoints, which the raw HTML method does not let you do without custom CSS.</p>
<div class="fmstr-cmp-tmpl-steps__note"><strong>Card layout tip:</strong> if your form ends up inside a card with restricted width, increase the iframe height by 30 to 40% to compensate for the narrower text wrap.</div>
</div>
</li>

</ol>
</div>

<div class="fmstr-cmp-tmpl-steps__method">
<span class="fmstr-cmp-tmpl-steps__methodlabel">Method 3</span>
<h3 class="fmstr-cmp-tmpl-steps__methodtitle">Embed a Google Form on Wix, Squarespace, Canva, or Webflow</h3>
<p class="fmstr-cmp-tmpl-steps__methodlead">Every modern CMS handles this slightly differently. Here is the exact path for the four most common ones.</p>

<ul class="fmstr-cmp-tmpl-steps__sublist">
<li><strong>Wix.</strong> Add element &gt; Embed Code &gt; Embed HTML. Paste the iframe snippet. Drag the element to size. Wix sets the container size independently of the iframe size, so check both desktop and mobile preview before publishing. Common gotcha: Wix's free plan adds a banner that pushes the form down on mobile.</li>
<li><strong>Squarespace.</strong> Add a section &gt; Code block &gt; set type to HTML. Paste the snippet. Squarespace iframes are capped at the section width, so on full-width sections you may need to constrain the iframe to 720px with the wrapper trick from Method 1, or the form looks lost on widescreens.</li>
<li><strong>Canva (websites).</strong> On a Canva-designed website page, click Add &gt; Embed &gt; paste the Google Form <code>viewform</code> URL (not the iframe code itself). Canva's embed element resolves the URL into a live form. The limit: Canva embeds run in a fixed aspect ratio, so longer forms scroll inside the embed window. Single-page forms work better here than multi-page ones.</li>
<li><strong>Webflow.</strong> Add an Embed element (under Components). Paste the iframe snippet. Webflow's Embed renders inline at build time, so the form shows up in the Designer preview, not just on publish. If your form sits inside a CMS Collection page, the iframe still works because the snippet is static HTML, not Webflow code.</li>
</ul>
</div>

<div class="fmstr-cmp-tmpl-steps__trouble">
<h3 class="fmstr-cmp-tmpl-steps__troublehead">Troubleshooting an embedded Google Form</h3>
<p class="fmstr-cmp-tmpl-steps__troublelead">Most embed problems come down to five things. Diagnose by symptom.</p>
<ul class="fmstr-cmp-tmpl-steps__troublelist">
<li><strong>1. Form does not load (white box, "refused to connect").</strong> Your site has a Content Security Policy that blocks third-party iframes. Add <code>frame-src https://docs.google.com;</code> to your CSP header. On WordPress, the <a href="https://wordpress.org/plugins/headers-security-advanced-hsts-wp/">Headers Security plugin</a> handles this without code.</li>
<li><strong>2. Form is too narrow on desktop, too wide on mobile.</strong> The default 640px width is fine for sidebars and bad for full-width sections. Wrap the iframe in a div with <code>max-width:720px</code> and set the iframe width to 100%. This caps the form on desktop and lets it shrink on phones.</li>
<li><strong>3. Form scrolls inside its own box.</strong> Your height attribute is too short. Open the live form in a new tab, scroll to the bottom, measure the pixel height with your browser's inspector, then set the iframe <code>min-height</code> to that value plus 80px. Google does not expose a way to auto-fit because the iframe is cross-origin.</li>
<li><strong>4. Form looks broken on mobile (cut off, buttons missing).</strong> Two fixes. First, make sure the iframe has <code>style="width:100%;"</code> not a hardcoded pixel width. Second, set the iframe's <code>min-height</code> based on your longest mobile form view. Mobile renders ask for more vertical space than desktop.</li>
<li><strong>5. Dark-mode color clash.</strong> Google Forms ignores your site's dark mode and renders on white. There is no fix inside Google Forms. Either accept the visual break or check the <a href="https://formester.com/blog/top-google-forms-alternatives/">top Google Forms alternatives in 2026</a> for a tool that respects your site's color scheme.</li>
</ul>
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
<span class="fmstr-cmp-tmpl-midcta__eyebrow">Beyond Google Forms</span>
<h2 class="fmstr-cmp-tmpl-midcta__h2" id="fmstr-cmp-tmpl-midcta-h2">Embed a real form on your site, without Google Forms baggage</h2>
<p class="fmstr-cmp-tmpl-midcta__body">Six embed modes, your own branding, conditional logic. No iframe headaches, no Google brand bar.</p>
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
.fmstr-cmp-tmpl-faq__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); text-align: left; }
.fmstr-cmp-tmpl-faq__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 28px; text-align: left; }
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
.fmstr-cmp-tmpl-faq__answer code { background: #f4f4f7; color: #3b1d72; padding: 1px 6px; border-radius: 5px; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

@media (max-width: 760px) {
.fmstr-cmp-tmpl-faq { padding: 40px 16px; }
.fmstr-cmp-tmpl-faq__intro { font-size: 15.5px; text-align: left; }
.fmstr-cmp-tmpl-faq__item > summary { padding: 16px 16px; font-size: 15.5px; gap: 12px; }
.fmstr-cmp-tmpl-faq__item > summary::before { width: 26px; height: 26px; }
.fmstr-cmp-tmpl-faq__answer { padding: 0 16px 18px 16px; font-size: 15px; line-height: 1.65; }
}
</style>

<section class="fmstr-cmp-tmpl-faq" aria-labelledby="fmstr-cmp-tmpl-faq-h2">
<div class="fmstr-cmp-tmpl-faq__container">
<h2 class="fmstr-cmp-tmpl-faq__h2" id="fmstr-cmp-tmpl-faq-h2">Frequently asked questions</h2>
<p class="fmstr-cmp-tmpl-faq__intro">The questions people ask after they paste the iframe and something does not look right.</p>
<div class="fmstr-cmp-tmpl-faq__list">

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I embed a Google Form on a Canva website?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Yes. On a Canva-designed website, open the page editor, click <strong>Add &gt; Embed</strong>, and paste the Google Form's <code>viewform</code> URL (not the iframe code). Canva resolves the URL into a live form inside a fixed aspect-ratio embed window. Single-page forms work best because longer forms scroll inside the embed.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Why is my embedded Google Form not loading on my site?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">The most common cause is a Content Security Policy that blocks third-party iframes. Add <code>frame-src https://docs.google.com;</code> to your site's CSP header. Other causes: the form's sharing setting is set to "Restricted" instead of "Anyone with the link," or your site enforces strict same-origin policies on iframes (rare, but happens on hardened WordPress installs).</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Is there a height limit on a Google Forms iframe?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">There is no hard limit, but Google does not auto-resize the iframe. You set the height once, and any change to the form (new question, removed section) breaks the fit. Most users set the height 80 to 200 pixels above the expected form length to absorb edits.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I style an embedded Google Form to match my site?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Not really. You can set a single theme color and font inside Google Forms, but the form chrome (header, logo, "Required" markers, submit button) stays Google-branded. Tools like <a href="/blog/why-formester-is-the-best-google-forms-alternative/">Formester</a> let you fully white-label the form, including fonts, button styles, and field spacing.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Is an embedded Google Form mobile responsive?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Out of the box, no. The iframe takes a fixed width and height. To make it usable on mobile, wrap the iframe in a div with <code>max-width:100%</code> and set the iframe <code>width="100%"</code> with a min-height tuned for the mobile view. Even then, you trade off desktop whitespace against mobile cut-off.</div>
</details>

<details class="fmstr-cmp-tmpl-faq__item">
<summary>Can I track Google Form submissions in Google Analytics or my CRM?</summary>
<div class="fmstr-cmp-tmpl-faq__answer">Not from the embed alone. Google Forms submissions live inside Google Sheets or the form's response tab. To get them into GA4 or a CRM you need a Zapier or Make automation triggered on new responses. Form tools like Formester send submissions to GA4, HubSpot, Salesforce, and Slack natively.</div>
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
text-align: left !important;
}
.fmstr-cmp-tmpl-rel *, .fmstr-cmp-tmpl-rel *::before, .fmstr-cmp-tmpl-rel *::after { box-sizing: border-box; }
.fmstr-cmp-tmpl-rel__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-tmpl-rel__head { margin: 0 0 28px; text-align: left; }
.fmstr-cmp-tmpl-rel__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); text-align: left; }
.fmstr-cmp-tmpl-rel__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; text-align: left; }

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
color: var(--c-violet-600) !important; font-size: 11.5px; font-weight: 600; letter-spacing: .02em;
text-transform: uppercase; align-self: flex-start;
margin-bottom: 2px;
}
.fmstr-cmp-tmpl-rel__title {
font-size: 16px; font-weight: 700; color: var(--c-fg-1); margin: 0; line-height: 1.3; text-align: left; }
.fmstr-cmp-tmpl-rel__body { font-size: 14.5px; line-height: 1.55; color: var(--c-fg-2); margin: 0; }
.fmstr-cmp-tmpl-rel__arrow {
margin-top: 6px; color: var(--c-violet-600) !important; font-size: 14px; font-weight: 600;
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
</style>

<section class="fmstr-cmp-tmpl-rel" aria-labelledby="fmstr-cmp-tmpl-rel-h2">
<div class="fmstr-cmp-tmpl-rel__container">
<div class="fmstr-cmp-tmpl-rel__head">
<h2 class="fmstr-cmp-tmpl-rel__h2" id="fmstr-cmp-tmpl-rel-h2">Keep reading</h2>
<p class="fmstr-cmp-tmpl-rel__intro">Next steps if the iframe approach is starting to feel like the wrong tool.</p>
</div>
<div class="fmstr-cmp-tmpl-rel__grid">

<a class="fmstr-cmp-tmpl-rel__card" href="/blog/why-formester-is-the-best-google-forms-alternative/">
<span class="fmstr-cmp-tmpl-rel__chip">Alternative</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Best Google Forms alternative</h3>
<p class="fmstr-cmp-tmpl-rel__body">Six embed modes, full white-label, payments, e-signature. Side-by-side with Google Forms.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Compare</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/form-builder/">
<span class="fmstr-cmp-tmpl-rel__chip">Product</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Formester form builder</h3>
<p class="fmstr-cmp-tmpl-rel__body">Build a form, pick an embed mode, paste one snippet. Inline, popup, sidebar, side tab, popover, fullscreen.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Try the builder</span>
</a>

<a class="fmstr-cmp-tmpl-rel__card" href="https://formester.com/blog/how-to-link-squarespace-forms-to-google-sheets/">
<span class="fmstr-cmp-tmpl-rel__chip">Guide</span>
<h3 class="fmstr-cmp-tmpl-rel__title">Link Squarespace forms to Google Sheets</h3>
<p class="fmstr-cmp-tmpl-rel__body">If you ended up here from Squarespace, the next problem is getting responses into a sheet. Here is the route.</p>
<span class="fmstr-cmp-tmpl-rel__arrow">Read guide</span>
</a>

</div>
</div>
</section>


