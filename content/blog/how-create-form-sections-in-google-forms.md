---
slug: "how-create-form-sections-in-google-forms"
title: "How to Create Sections in Google Forms (5 Steps + Conditional Redirect)"
description: "Easily add sections and set up answer-based redirects in Google Forms. Guide users through custom paths for better form engagement and clarity.\n\n\n\n\n\n\n\n\n"
metaTitle: "How to Create Sections in Google Forms + Conditional Redirect (2026)"
metaDescription: "Add sections in Google Forms in 5 steps, then route respondents to different sections based on their answers. Screenshots + 60-second video. Free."
keywords: "how to create form sections in google forms,\nhow to add sections in google forms,\nhow to use conditional logic in google forms,\nhow to redirect users in google forms,"
author: "Harish Kumar"
authorProfile: "https://www.linkedin.com/in/harish-kumar2424/"
coverImgAlt: "a blog post cover about how to create form sections in google forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/a_blog_post_cover_about_how_to_create_form_sections_in_google_forms_e27f572001.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2025-05-16T00:43:40.738Z"
updatedAt: "2026-06-08T11:38:02.146Z"
publishedAt: "2026-06-05T03:35:16.000Z"
---
<iframe width="100%" height="315" src="https://www.youtube.com/embed/puP1xvmSDBM?si=L-A2phe7CriAnpUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
<p class="fmstr-cmp-tmpl-tldr__body">To create sections in Google Forms, open your form, click the Add section button on the right toolbar, drag questions into the new section, name and describe each section, then add Go to section based on answer logic if you want conditional routing. The 5 steps below cover every option with screenshots and a 60-second video.</p>
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
.fmstr-cmp-tmpl-steps__list {
display: flex; flex-direction: column; gap: 14px;
counter-reset: step-counter;
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
<h2 class="fmstr-cmp-tmpl-steps__h2" id="fmstr-cmp-tmpl-steps-h2">The 5-step setup with conditional routing</h2>
<p class="fmstr-cmp-tmpl-steps__intro">Splits a long form into pages and routes respondents to the right page based on their answers.</p>
</div>
<ol class="fmstr-cmp-tmpl-steps__list">

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">1</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Add a new section</h3>
<p class="fmstr-cmp-tmpl-steps__body">In the form editor, click the rightmost icon in the right-side toolbar (looks like two stacked rectangles). A new section appears below the current one.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">2</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Name and describe each section</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click the section title field, give it a descriptive name (e.g., 'For new customers'). Add a one-line description explaining what to expect in this section.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">3</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Drag or add questions to the new section</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click + to add new questions, or drag existing questions into the new section. Each question stays within its section in the live form.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">4</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Add Go to section based on answer (conditional routing)</h3>
<p class="fmstr-cmp-tmpl-steps__body">On a multiple-choice question, click the three-dot menu and choose 'Go to section based on answer'. Map each answer to the section it should route to.</p>
</div>
</li>

<li class="fmstr-cmp-tmpl-steps__item">
<span class="fmstr-cmp-tmpl-steps__num" aria-hidden="true">5</span>
<div class="fmstr-cmp-tmpl-steps__main">
<h3 class="fmstr-cmp-tmpl-steps__title">Test and share</h3>
<p class="fmstr-cmp-tmpl-steps__body">Click the preview eye icon, walk through every branch, then click Send to share the link or embed code.</p>
</div>
</li>

</ol>
</div>
</section>







<style>
/* host-link-override */
.fmstr-cmp-gfs-body a { text-decoration: none !important; }
.fmstr-cmp-gfs-body {
--c-bg-card: #ffffff;
--c-bg-soft: #f9fafb;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff; --c-border: #eaecf0;

background: transparent; padding: 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-gfs-body *, .fmstr-cmp-gfs-body *::before, .fmstr-cmp-gfs-body *::after { box-sizing: border-box; }
.fmstr-cmp-gfs-body__container { max-width: 820px; margin: 0 auto; }

.fmstr-cmp-gfs-body__sub { font-size: 17px; line-height: 1.6; color: var(--c-fg-3); font-style: italic; margin: 0 0 24px; }

.fmstr-cmp-gfs-body__intro p { font-size: 17px; line-height: 1.7; color: var(--c-fg-2); margin: 0 0 16px; }
.fmstr-cmp-gfs-body__intro a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-gfs-body__intro a:hover { text-decoration: underline !important; }

.fmstr-cmp-gfs-body__h2 {
font-size: 28px; font-weight: 700; line-height: 1.25; letter-spacing: -.02em;
margin: 40px 0 16px; color: var(--c-fg-1);
}
.fmstr-cmp-gfs-body p { font-size: 16px; line-height: 1.7; color: var(--c-fg-2); margin: 0 0 14px; }
.fmstr-cmp-gfs-body p strong { color: var(--c-fg-1); }
.fmstr-cmp-gfs-body a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-gfs-body a:hover { text-decoration: underline !important; }
.fmstr-cmp-gfs-body ul, .fmstr-cmp-gfs-body ol { margin: 0 0 16px; padding-left: 22px; }
.fmstr-cmp-gfs-body li { font-size: 16px; line-height: 1.7; color: var(--c-fg-2); margin: 6px 0; }
.fmstr-cmp-gfs-body li strong { color: var(--c-fg-1); }
.fmstr-cmp-gfs-body code { background: var(--c-tint); color: var(--c-violet-600); padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 14.5px; border: 1px solid var(--c-edge); }

.fmstr-cmp-gfs-body__callout {
background: var(--c-bg-soft); border: 1px solid var(--c-border); border-left: 3px solid var(--c-violet-500);
border-radius: 8px; padding: 16px 20px; margin: 0 0 20px;
}
.fmstr-cmp-gfs-body__callout p { margin: 0; }
.fmstr-cmp-gfs-body__callout p + p { margin-top: 8px; }

.fmstr-cmp-gfs-body__decide-grid {
display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
margin: 0 0 20px;
}
.fmstr-cmp-gfs-body__decide-card {
background: var(--c-bg-card); border: 1px solid var(--c-border);
border-radius: 12px; padding: 18px 20px;
}
.fmstr-cmp-gfs-body__decide-card h4 {
font-size: 15px; font-weight: 700; margin: 0 0 10px; color: var(--c-fg-1);
display: flex; align-items: center; gap: 8px;
}
.fmstr-cmp-gfs-body__decide-card ul { margin: 0; padding-left: 18px; }
.fmstr-cmp-gfs-body__decide-card li { font-size: 14.5px; line-height: 1.55; margin: 4px 0; }
.fmstr-cmp-gfs-body__decide-card--use h4 { color: var(--c-violet-600); }
.fmstr-cmp-gfs-body__decide-card--skip h4 { color: var(--c-fg-2); }

@media (max-width: 600px) {
.fmstr-cmp-gfs-body { padding: 16px; }
.fmstr-cmp-gfs-body__h2 { font-size: 22px; margin: 32px 0 14px; }
.fmstr-cmp-gfs-body__intro p { font-size: 16px; }
.fmstr-cmp-gfs-body p { font-size: 15.5px; }
.fmstr-cmp-gfs-body__decide-grid { grid-template-columns: 1fr; gap: 10px; }
}
</style>

<section class="fmstr-cmp-gfs-body" aria-label="How to create sections in Google Forms with conditional redirect">
<div class="fmstr-cmp-gfs-body__container">

<p class="fmstr-cmp-gfs-body__sub">Split a long form into sections, then send respondents to the right section based on their answers. Takes 3 minutes.</p>

<div class="fmstr-cmp-gfs-body__intro">
<p>To create sections in Google Forms, open your form, click the <strong>Add section</strong> button on the right toolbar, drag questions into the new section, name and describe each section, then add <strong>Go to section based on answer</strong> logic if you want conditional routing. The 5 steps below cover every option with screenshots and a 60-second video.</p>
<p>Sections turn a single long form into a multi-page experience: cleaner UX for the respondent, more control for you. Add conditional routing on top and you can branch respondents down different paths based on their answers, the same way a quiz or a screening form does.</p>
</div>

<h2 class="fmstr-cmp-gfs-body__h2">When to use sections (and when to skip them)</h2>
<p>Sections add overhead. Use them when the payoff is real.</p>

<div class="fmstr-cmp-gfs-body__decide-grid">
<div class="fmstr-cmp-gfs-body__decide-card fmstr-cmp-gfs-body__decide-card--use">
<h4>Use sections when</h4>
<ul>
<li>The form is longer than 8-10 questions</li>
<li>You want to branch respondents based on an early answer</li>
<li>You're collecting different data from different roles (e.g., employer vs candidate)</li>
<li>You want a clear progress indicator across logical groups</li>
<li>The form has distinct phases (about you / your needs / next steps)</li>
</ul>
</div>
<div class="fmstr-cmp-gfs-body__decide-card fmstr-cmp-gfs-body__decide-card--skip">
<h4>Skip sections when</h4>
<ul>
<li>The form is under 5 questions</li>
<li>Every respondent answers every question identically</li>
<li>You want maximum completion rate (each section adds a click)</li>
<li>You only need simple yes/no branching (a single conditional question can handle this without a new section)</li>
</ul>
</div>
</div>

<h2 class="fmstr-cmp-gfs-body__h2">Step 1: Open or create your form</h2>
<p>Go to <a href="https://forms.google.com">forms.google.com</a> and either open an existing form or click <strong>Blank</strong> to start a new one.</p>
<p>If you're building from scratch, add the first question or two to the default section before splitting. It's easier to drag questions into a new section than to invent a section's first question on the fly.</p>

<h2 class="fmstr-cmp-gfs-body__h2">Step 2: Add a section</h2>
<p>On the floating right toolbar, click the <strong>Add section</strong> button (the rightmost icon, two stacked rectangles). A new section appears below your current question.</p>
<p>Give the section a title that names the phase of the form (for example, "About your team", "Project details", "Next steps"). Add a one-line description if the section opens with context the respondent needs before answering.</p>
<p>Repeat to add as many sections as the form needs. Performance stays smooth up to roughly 20 sections; past that, consider a dedicated form builder.</p>

<h2 class="fmstr-cmp-gfs-body__h2">Step 3: Add a multiple-choice question for routing</h2>
<p>Conditional routing in Google Forms only works on <strong>multiple-choice</strong> or <strong>dropdown</strong> questions, not on short-answer or paragraph fields. Add the routing question early in the form, since it controls everything that follows.</p>
<p>Example: a single-question section titled "Which best describes you?" with the options:</p>
<ul>
<li>I'm a customer</li>
<li>I'm an investor</li>
<li>I'm a job applicant</li>
</ul>
<p>Each option will route the respondent to a different section in the next step.</p>

<h2 class="fmstr-cmp-gfs-body__h2">Step 4: Set up the redirect logic</h2>
<p>Click the three-dot menu at the bottom-right of the multiple-choice question and choose <strong>Go to section based on answer</strong>. A small dropdown appears next to each answer option.</p>
<p>For each option, pick the section the respondent should jump to. Options that go to "Continue to next section" follow the normal section order; options that go to a specific section skip everything in between.</p>
<p>Map each option deliberately:</p>
<ul>
<li><strong>I'm a customer</strong> → Continue to next section (customer questions)</li>
<li><strong>I'm an investor</strong> → Investor section</li>
<li><strong>I'm a job applicant</strong> → Job application section</li>
</ul>
<p>For more advanced per-question logic that hides individual fields based on previous answers, Google Forms can't help, use Formester's <a href="/features/conditional-logic/">conditional logic feature</a> instead.</p>

<h2 class="fmstr-cmp-gfs-body__h2">Step 5: Add an ending section and test</h2>
<p>At the bottom of each conditional path, add a final section that ends the form. Use the same final section for every path if you want all respondents to see the same thank-you message, or use unique final sections for path-specific next steps.</p>
<p>Click the <strong>preview</strong> button (the eye icon top-right). Walk through each path to verify every option routes where you expect. Branching mistakes are easy to miss without a manual test pass.</p>

<h2 class="fmstr-cmp-gfs-body__h2">Want a smarter alternative? Use Formester</h2>
<p>If your form needs more than what Google Forms' section routing can handle, <a href="/">Formester</a> ships:</p>
<ul>
<li><strong>Unlimited sections</strong> with no performance hit</li>
<li><strong>Per-question conditional logic</strong>, hide or show individual fields, not just whole sections</li>
<li><strong>Multi-step UX</strong> with a built-in progress bar</li>
<li><strong>Branded styling</strong>, your colors, logo, and fonts</li>
<li><strong>AI-assisted form building</strong>, describe your form, get a complete draft in seconds via the <a href="/ai-form-generator/">AI form generator</a></li>
</ul>
<p>The same multi-section survey takes 60 seconds to set up in Formester versus 10 minutes in Google Forms.</p>

<h2 class="fmstr-cmp-gfs-body__h2">Final thoughts</h2>
<p>Sections turn a long Google Form into a structured experience, and conditional routing branches respondents down the right path based on their answers. The setup takes 3-5 minutes once you know where the buttons are.</p>
<p>For longer or more dynamic forms, switch to Formester, same setup time, more flexibility, and no 20-section performance cliff. <a href="https://app.formester.com/users/sign_up">Try it free</a>.</p>

</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-gfs-faq a { text-decoration: none !important; }
.fmstr-cmp-gfs-faq {
--c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
text-align: left !important;
}
.fmstr-cmp-gfs-faq *, .fmstr-cmp-gfs-faq *::before, .fmstr-cmp-gfs-faq *::after { box-sizing: border-box; }
.fmstr-cmp-gfs-faq__container { max-width: 1200px; margin: 0 auto; }
.fmstr-cmp-gfs-faq__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); text-align: left; }
.fmstr-cmp-gfs-faq__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 28px; text-align: left; }
.fmstr-cmp-gfs-faq__list { display: flex; flex-direction: column; gap: 12px; }
.fmstr-cmp-gfs-faq__item {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; box-shadow: var(--c-shadow); overflow: hidden;
}
.fmstr-cmp-gfs-faq__item summary {
list-style: none; cursor: pointer;
padding: 18px 22px; font-size: 16.5px; font-weight: 600; color: var(--c-fg-1);
display: flex; align-items: center; justify-content: space-between; gap: 14px;
}
.fmstr-cmp-gfs-faq__item summary::-webkit-details-marker { display: none; }
.fmstr-cmp-gfs-faq__item summary::after {
content: "+"; flex-shrink: 0;
width: 24px; height: 24px; border-radius: 6px;
display: grid; place-items: center;
background: var(--c-tint); color: var(--c-violet-600);
font-size: 16px; font-weight: 700; transition: transform .2s ease;
}
.fmstr-cmp-gfs-faq__item[open] summary::after { content: "−"; transform: rotate(180deg); }
.fmstr-cmp-gfs-faq__answer {
padding: 0 22px 18px;
font-size: 15.5px; line-height: 1.65; color: var(--c-fg-2);
}
.fmstr-cmp-gfs-faq__answer a { color: var(--c-violet-600) !important; font-weight: 500; }
.fmstr-cmp-gfs-faq__answer a:hover { text-decoration: underline !important; }

@media (max-width: 600px) {
.fmstr-cmp-gfs-faq { padding: 40px 16px; }
.fmstr-cmp-gfs-faq__item summary { padding: 16px 18px; font-size: 15.5px; }
.fmstr-cmp-gfs-faq__answer { padding: 0 18px 16px; font-size: 15px; }
}
</style>

<section class="fmstr-cmp-gfs-faq" aria-labelledby="fmstr-cmp-gfs-faq-h2">
<div class="fmstr-cmp-gfs-faq__container">
<h2 class="fmstr-cmp-gfs-faq__h2" id="fmstr-cmp-gfs-faq-h2">Google Forms sections FAQ</h2>
<p class="fmstr-cmp-gfs-faq__intro">Answers that mirror the FAQPage JSON-LD on the live page.</p>
<div class="fmstr-cmp-gfs-faq__list">

<details class="fmstr-cmp-gfs-faq__item">
<summary>How do I add sections in Google Forms?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Open your form, click the Add section button (rightmost icon in the right-side toolbar), drag questions into the new section, name the section, and add a description. Repeat for each section.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>Can Google Forms route users to different sections based on answers?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Yes. In a multiple-choice question, click the three-dot menu, choose Go to section based on answer, and map each answer to a section. Different answers route the respondent to different parts of the form.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>How many sections can a Google Form have?</summary>
<div class="fmstr-cmp-gfs-faq__answer">There's no official limit but performance degrades past about 20 sections. For long branching forms with more than 15-20 sections, consider a dedicated form builder.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>Can I reorder sections in Google Forms?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Yes. Click the three-dot menu on the section header and choose Move section. Drag to the new position. All questions in that section move with it.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>How do I delete a section in Google Forms?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Click the three-dot menu on the section header and choose Delete section. You can either delete the section and all its questions, or merge the questions into the previous section.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>Can sections be conditional in Google Forms?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Sections themselves are not conditional, but you can route to or skip past sections using Go to section based on answer logic on multiple-choice or dropdown questions.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>What's the difference between sections and pages in Google Forms?</summary>
<div class="fmstr-cmp-gfs-faq__answer">In Google Forms, sections are pages, each section becomes a separate page in the live form. Respondents click Next to move between sections.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>Can I hide questions in Google Forms based on a section answer?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Google Forms can route to a different section based on an answer, but cannot conditionally hide individual questions within a section. For per-question conditional logic, use <a href="https://formester.com/features/conditional-logic/">Formester</a>.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>How do I share a Google Form with sections?</summary>
<div class="fmstr-cmp-gfs-faq__answer">Click Send in the top right, copy the link, and share. Sections are preserved automatically; respondents see each section in turn as they click Next.</div>
</details>

<details class="fmstr-cmp-gfs-faq__item">
<summary>Is there a better alternative for forms with many sections?</summary>
<div class="fmstr-cmp-gfs-faq__answer"><a href="https://formester.com/">Formester</a> supports unlimited sections, per-question conditional logic, multi-step UX, and branded styling. Worth considering when Google Forms hits its routing limits.</div>
</details>

</div>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-gfs-rel a { text-decoration: none !important; }
.fmstr-cmp-gfs-rel {
--c-bg: transparent;
--c-card: #ffffff;
--c-fg-1: #101828;
--c-fg-2: #475467;
--c-fg-3: #697586;
--c-violet-500: #7f56d9;
--c-violet-600: #6941c6;
--c-violet-700: #5b34b1;
--c-tint: #f7f3ff;
--c-edge: #e4d7ff;
--c-border: #eaecf0;

background: var(--c-bg);
padding: 8px 0 0;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-gfs-rel *, .fmstr-cmp-gfs-rel *::before, .fmstr-cmp-gfs-rel *::after { box-sizing: border-box; }
.fmstr-cmp-gfs-rel__container { max-width: 1180px; margin: 0 auto; padding: 0 16px; }

.fmstr-cmp-gfs-rel__head { margin: 0 0 28px; max-width: 760px; }
.fmstr-cmp-gfs-rel__eyebrow {
display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
color: var(--c-violet-600); background: #f4ebff;
padding: 4px 10px; border-radius: 9999px; margin: 0 0 12px;
}
.fmstr-cmp-gfs-rel__h2 {
font-size: clamp(22px, 2.4vw, 28px) !important;
font-weight: 700 !important;
line-height: 1.2 !important;
letter-spacing: -.02em !important;
margin: 0 !important;
margin-top: 0 !important;
color: var(--c-fg-1);
}
.fmstr-cmp-gfs-rel__intro {
color: var(--c-fg-3);
font-size: 15px !important;
line-height: 1.5 !important;
margin: 8px 0 0 !important;
margin-bottom: 0 !important;
}

.fmstr-cmp-gfs-rel__grid {
display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
align-items: start;
margin: 0;
}

.fmstr-cmp-gfs-rel__card {
display: flex; align-items: center; gap: 12px;
background: var(--c-card);
border: 1px solid var(--c-border);
border-radius: 12px;
padding: 12px 14px;
color: inherit !important; text-decoration: none !important;
transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease, background .15s ease;
min-width: 0;
position: relative;
}
.fmstr-cmp-gfs-rel__card:hover {
border-color: #d6c5fa;
background: #fbfaff;
box-shadow: 0 4px 16px rgba(105, 65, 198, 0.08);
transform: translateY(-1px);
}

.fmstr-cmp-gfs-rel__icon {
flex-shrink: 0;
width: 36px; height: 36px;
display: grid; place-items: center;
background: linear-gradient(135deg, var(--c-tint) 0%, #efe4ff 100%);
border: 1px solid var(--c-edge);
border-radius: 8px;
color: var(--c-violet-600);
}
.fmstr-cmp-gfs-rel__icon svg { width: 18px; height: 18px; }

.fmstr-cmp-gfs-rel__text { flex: 1; min-width: 0; }
.fmstr-cmp-gfs-rel__title {
font-size: 14.5px !important;
font-weight: 600 !important;
color: var(--c-fg-1);
line-height: 1.3 !important;
margin: 0 0 2px !important;
margin-top: 0 !important;
letter-spacing: -.005em;
display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
overflow: hidden;
}
.fmstr-cmp-gfs-rel__sub {
font-size: 12.5px !important;
line-height: 1.4 !important;
color: var(--c-fg-3);
margin: 0 !important;
margin-bottom: 0 !important;
display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
overflow: hidden;
}

.fmstr-cmp-gfs-rel__arrow {
flex-shrink: 0;
width: 22px; height: 22px;
display: grid; place-items: center;
color: var(--c-violet-600);
font-size: 14px; font-weight: 700;
transition: transform .15s ease;
}
.fmstr-cmp-gfs-rel__card:hover .fmstr-cmp-gfs-rel__arrow { transform: translateX(3px); }

@media (max-width: 560px) {
.fmstr-cmp-gfs-rel { padding: 8px 0 0; }
.fmstr-cmp-gfs-rel__grid { grid-template-columns: 1fr; gap: 10px; }
.fmstr-cmp-gfs-rel__card { padding: 12px; }
}
</style>

<section class="fmstr-cmp-gfs-rel" aria-labelledby="fmstr-cmp-gfs-rel-h2">
<div class="fmstr-cmp-gfs-rel__container">
<div class="fmstr-cmp-gfs-rel__head">
<div class="fmstr-cmp-gfs-rel__eyebrow">More on Formester</div>
<h2 class="fmstr-cmp-gfs-rel__h2" id="fmstr-cmp-gfs-rel-h2">Go farther than Google Forms sections</h2>
<p class="fmstr-cmp-gfs-rel__intro">Conditional logic, multi-step UX, and AI-assisted form building, all in one place.</p>
</div>

<div class="fmstr-cmp-gfs-rel__grid">

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/features/conditional-logic/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 3 6 21"/><polyline points="18 3 18 9"/><path d="M6 9c0 6 12 6 12 12"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Conditional logic</h3>
<p class="fmstr-cmp-gfs-rel__sub">Per-question branching</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/ai-form-generator/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">AI Form Generator</h3>
<p class="fmstr-cmp-gfs-rel__sub">Forms from one prompt</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Conditional questions</h3>
<p class="fmstr-cmp-gfs-rel__sub">Section branching how-to</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/blog/how-to-make-a-questionnaire-in-google-forms/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Questionnaire guide</h3>
<p class="fmstr-cmp-gfs-rel__sub">Step-by-step build</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/blog/how-to-make-a-survey-in-google-forms-using-chat-gpt/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Survey with ChatGPT</h3>
<p class="fmstr-cmp-gfs-rel__sub">AI-assisted survey build</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/blog/how-to-make-a-poll-on-google-forms/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 17V11"/><path d="M12 17V7"/><path d="M17 17v-4"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Poll in Google Forms</h3>
<p class="fmstr-cmp-gfs-rel__sub">Quick how-to</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/blog/how-to-create-signup-sheets-in-google-forms/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Signup sheets</h3>
<p class="fmstr-cmp-gfs-rel__sub">Template plus walkthrough</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/blog/5-ways-to-view-responses-in-google-forms/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16V8"/><path d="M12 16V4"/><path d="M17 16v-4"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">5 ways to view responses</h3>
<p class="fmstr-cmp-gfs-rel__sub">Summary, sheet, CSV</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-gfs-rel__card" href="https://formester.com/templates/categories/survey-forms/">
<span class="fmstr-cmp-gfs-rel__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
</span>
<div class="fmstr-cmp-gfs-rel__text">
<h3 class="fmstr-cmp-gfs-rel__title">Survey templates</h3>
<p class="fmstr-cmp-gfs-rel__sub">Browse the gallery</p>
</div>
<span class="fmstr-cmp-gfs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

</div>
</div>
</section>

<!-- FAQPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        { "@type": "Question", "name": "How do I add sections in Google Forms?", "acceptedAnswer": { "@type": "Answer", "text": "Open your form, click the Add section button (rightmost icon in the right-side toolbar), drag questions into the new section, name the section, and add a description. Repeat for each section." } },
        { "@type": "Question", "name": "Can Google Forms route users to different sections based on answers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. In a multiple-choice question, click the three-dot menu, choose Go to section based on answer, and map each answer to a section. Different answers route the respondent to different parts of the form." } },
        { "@type": "Question", "name": "How many sections can a Google Form have?", "acceptedAnswer": { "@type": "Answer", "text": "There's no official limit but performance degrades past about 20 sections. For long branching forms with more than 15-20 sections, consider a dedicated form builder." } },
        { "@type": "Question", "name": "Can I reorder sections in Google Forms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Click the three-dot menu on the section header and choose Move section. Drag to the new position. All questions in that section move with it." } },
        { "@type": "Question", "name": "How do I delete a section in Google Forms?", "acceptedAnswer": { "@type": "Answer", "text": "Click the three-dot menu on the section header and choose Delete section. You can either delete the section and all its questions, or merge the questions into the previous section." } },
        { "@type": "Question", "name": "Can sections be conditional in Google Forms?", "acceptedAnswer": { "@type": "Answer", "text": "Sections themselves are not conditional, but you can route to or skip past sections using Go to section based on answer logic on multiple-choice or dropdown questions." } },
        { "@type": "Question", "name": "What's the difference between sections and pages in Google Forms?", "acceptedAnswer": { "@type": "Answer", "text": "In Google Forms, sections are pages \u2014 each section becomes a separate page in the live form. Respondents click Next to move between sections." } },
        { "@type": "Question", "name": "Can I hide questions in Google Forms based on a section answer?", "acceptedAnswer": { "@type": "Answer", "text": "Google Forms can route to a different section based on an answer, but cannot conditionally hide individual questions within a section. For per-question conditional logic, use Formester." } },
        { "@type": "Question", "name": "How do I share a Google Form with sections?", "acceptedAnswer": { "@type": "Answer", "text": "Click Send in the top right, copy the link, and share. Sections are preserved automatically; respondents see each section in turn as they click Next." } },
        { "@type": "Question", "name": "Is there a better alternative for forms with many sections?", "acceptedAnswer": { "@type": "Answer", "text": "Formester supports unlimited sections, per-question conditional logic, multi-step UX, and branded styling. Worth considering when Google Forms hits its routing limits." } }
  ]
}
</script>


<!-- Article -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Create Sections in Google Forms (5 Steps + Conditional Redirect)",
  "description": "Add sections in Google Forms in 5 steps, then route respondents to different sections based on their answers. Screenshots + 60-second video. Free.",
  "image": "https://formester.com/blog/how-create-form-sections-in-google-forms/preview.png",
  "author": { "@type": "Person", "name": "Harish Kumar", "url": "https://www.linkedin.com/in/harish-kumar2424/" },
  "publisher": { "@type": "Organization", "name": "Formester", "logo": { "@type": "ImageObject", "url": "https://formester.com/logo.svg" } },
  "datePublished": "2025-05-15",
  "dateModified": "2026-05-29"
}
</script>


<!-- BreadcrumbList -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://formester.com/blog/" },
    { "@type": "ListItem", "position": 3, "name": "Form Sections in Google Forms", "item": "https://formester.com/blog/how-create-form-sections-in-google-forms/" }
  ]
}
</script>


<!-- VideoObject -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How to Create Sections in Google Forms (5 Steps + Conditional Redirect)",
  "description": "Add sections in Google Forms in 5 steps, then route respondents to different sections based on their answers. Screenshots + 60-second video. Free.",
  "thumbnailUrl": "https://img.youtube.com/vi/puP1xvmSDBM/maxresdefault.jpg",
  "uploadDate": "2025-05-15",
  "contentUrl": "https://www.youtube.com/watch?v=puP1xvmSDBM",
  "embedUrl": "https://www.youtube.com/embed/puP1xvmSDBM"
}
</script>
