---
slug: "how-to-make-feedback-form-in-html"
title: "How to Make a Feedback Form in HTML (with Code, CSS, and a Backend)"
description: "Learn how to create a feedback form in HTML with easy steps. Set up an HTML document, add form fields, style with CSS, and add JavaScript for validation. Test your form and start collecting feedback."
metaTitle: "How to Make a Feedback Form in HTML (Code, CSS, Validation, Backend)"
metaDescription: "Build a working feedback form in HTML with copy-paste code, CSS styling, JavaScript validation, accessibility, and a backend that stores submissions without a server."
keywords: "feedback forms, fillable freedback form, how to make feedback form in html, style feedback form with css, feedback form html code"
author: "Harish Kumar"
authorProfile: "https://www.linkedin.com/in/harish-kumar2424/"
coverImgAlt: "an illustration of how to make feedback form in html"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_make_feedback_form_in_html_c6203dc935.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2024-06-27T06:19:40.031Z"
updatedAt: "2026-05-17T04:46:01.948Z"
publishedAt: "2026-05-17T04:46:01.940Z"
---
![an illustration of how to make feedback form in html](https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_make_feedback_form_in_html_c6203dc935.png)

<style>
/* host-link-override */
.fmstr-cmp-ffh-body a { text-decoration: none !important; }
.fmstr-cmp-ffh-body {
--c-bg-card: #ffffff;
--c-bg-soft: #f9fafb;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff; --c-border: #eaecf0;
--c-code-bg: #0f172a; --c-code-fg: #e2e8f0;
--c-code-keyword: #a78bfa; --c-code-attr: #67e8f9; --c-code-string: #fcd34d; --c-code-comment: #64748b;
--c-warn-bg: #fef3c7; --c-warn-fg: #92400e; --c-warn-edge: #fde68a;

background: transparent; padding: 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-ffh-body *, .fmstr-cmp-ffh-body *::before, .fmstr-cmp-ffh-body *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-body__container { max-width: 820px; margin: 0 auto; }

.fmstr-cmp-ffh-body__intro p { font-size: 17px; line-height: 1.7; color: var(--c-fg-2); margin: 0 0 16px; }
.fmstr-cmp-ffh-body__intro a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-ffh-body__intro a:hover { text-decoration: underline !important; }
.fmstr-cmp-ffh-body__intro code { background: var(--c-tint); color: var(--c-violet-600); padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 14.5px; border: 1px solid var(--c-edge); }

.fmstr-cmp-ffh-body__h2 {
font-size: 28px; font-weight: 700; line-height: 1.25; letter-spacing: -.02em;
margin: 40px 0 16px; color: var(--c-fg-1);
}
.fmstr-cmp-ffh-body__h3 {
font-size: 20px; font-weight: 700; line-height: 1.35; letter-spacing: -.01em;
margin: 28px 0 12px; color: var(--c-fg-1);
}
.fmstr-cmp-ffh-body p { font-size: 16px; line-height: 1.7; color: var(--c-fg-2); margin: 0 0 14px; }
.fmstr-cmp-ffh-body p strong { color: var(--c-fg-1); }
.fmstr-cmp-ffh-body a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-ffh-body a:hover { text-decoration: underline !important; }
.fmstr-cmp-ffh-body ul, .fmstr-cmp-ffh-body ol { margin: 0 0 16px; padding-left: 22px; }
.fmstr-cmp-ffh-body li { font-size: 16px; line-height: 1.7; color: var(--c-fg-2); margin: 6px 0; }
.fmstr-cmp-ffh-body li strong { color: var(--c-fg-1); }
.fmstr-cmp-ffh-body code { background: var(--c-tint); color: var(--c-violet-600); padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 14.5px; border: 1px solid var(--c-edge); }

.fmstr-cmp-ffh-body__code {
background: var(--c-code-bg); color: var(--c-code-fg);
border-radius: 12px; padding: 18px 20px; margin: 8px 0 18px;
overflow-x: auto;
font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 13.5px; line-height: 1.6;
}
.fmstr-cmp-ffh-body__code pre { margin: 0; }
.fmstr-cmp-ffh-body__code code {
background: transparent !important; color: inherit !important; padding: 0; border: 0;
font-family: inherit !important; font-size: inherit;
}
.fmstr-cmp-ffh-body__code .kw { color: var(--c-code-keyword); }
.fmstr-cmp-ffh-body__code .at { color: var(--c-code-attr); }
.fmstr-cmp-ffh-body__code .st { color: var(--c-code-string); }
.fmstr-cmp-ffh-body__code .cm { color: var(--c-code-comment); font-style: italic; }
.fmstr-cmp-ffh-body__code .lang { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 3px 10px; border-radius: 6px; background: rgba(255,255,255,.1); color: rgba(255,255,255,.7); margin: 0 0 12px; }

.fmstr-cmp-ffh-body__note {
margin: 14px 0 18px; padding: 14px 18px;
background: var(--c-bg-soft); border-left: 3px solid var(--c-violet-500);
border-radius: 8px; font-size: 15.5px; color: var(--c-fg-2); line-height: 1.6;
}
.fmstr-cmp-ffh-body__note strong { color: var(--c-fg-1); }
.fmstr-cmp-ffh-body__note--warn { background: var(--c-warn-bg); border-left-color: var(--c-warn-fg); }
.fmstr-cmp-ffh-body__note--warn strong { color: var(--c-warn-fg); }

.fmstr-cmp-ffh-body__variants {
display: grid; grid-template-columns: 1fr; gap: 14px; margin: 12px 0 24px;
}
.fmstr-cmp-ffh-body__variant {
background: var(--c-bg-card); border: 1px solid var(--c-border); border-radius: 14px;
padding: 18px 22px;
}
.fmstr-cmp-ffh-body__variant h4 {
font-size: 16px; font-weight: 700; color: var(--c-fg-1);
margin: 0 0 8px; line-height: 1.35;
}
.fmstr-cmp-ffh-body__variant p { font-size: 15px; line-height: 1.65; color: var(--c-fg-2); margin: 0; }

@media (max-width: 760px) {
.fmstr-cmp-ffh-body { padding: 16px; }
.fmstr-cmp-ffh-body__intro p, .fmstr-cmp-ffh-body p, .fmstr-cmp-ffh-body li { font-size: 15.5px; }
.fmstr-cmp-ffh-body__h2 { font-size: 24px; margin-top: 32px; }
.fmstr-cmp-ffh-body__h3 { font-size: 18.5px; }
.fmstr-cmp-ffh-body__code { padding: 14px 16px; font-size: 12.5px; border-radius: 10px; }
.fmstr-cmp-ffh-body__variant { padding: 16px 18px; }
}
</style>

<section class="fmstr-cmp-ffh-body" aria-label="How to make a feedback form in HTML">
<div class="fmstr-cmp-ffh-body__container">

<div class="fmstr-cmp-ffh-body__intro">
<p>A feedback form in HTML is twenty lines of markup, a bit of CSS, and one decision that trips up almost everyone: what happens after the user clicks Submit?</p>
<p>This guide ships the full pattern. You'll get a working <code>&lt;form&gt;</code> with name, email, and message fields, CSS that styles it without a framework, JavaScript validation that doesn't break keyboard users, and three honest options for the backend, including one that needs zero server code. Paste the snippets in order, swap the action URL, and you have a live feedback form on your site in about ten minutes.</p>
<p>If you want to skip the code entirely, <a href="https://formester.com/features/drag-and-drop-form-builder/">Formester's drag-and-drop builder</a> ships a feedback form you can <a href="https://formester.com/features/embed-forms/">embed in any HTML page</a> with one snippet. Keep reading for the hand-coded path.</p>
</div>

<h2 class="fmstr-cmp-ffh-body__h2">What a feedback form in HTML actually needs</h2>
<p>Four pieces, in order:</p>
<ul>
<li><strong>A <code>&lt;form&gt;</code> element</strong> with the right <code>action</code> and <code>method</code> so the browser knows where to send data.</li>
<li><strong>Labeled inputs</strong> for the fields you care about (name, email, rating, message), with <code>name</code> attributes so the server can read them.</li>
<li><strong>Validation</strong> on the client (for user experience) and on the server (for trust).</li>
<li><strong>A backend</strong> that receives the submission, stores it, and ideally notifies you. This is the part most tutorials skip; it's the part you need most.</li>
</ul>
<p>Below, each piece is a separate step with a copy-paste block. The last step is a single complete file you can save as <code>feedback.html</code> and open in a browser.</p>

<h2 class="fmstr-cmp-ffh-body__h2">Step 1: Set up the HTML document</h2>
<p>Save this as <code>feedback.html</code>. It's the shell every form goes inside.</p>
<div class="fmstr-cmp-ffh-body__code"><span class="lang">HTML</span>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&#160;&#160;&lt;meta charset="UTF-8"&gt;
&#160;&#160;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&#160;&#160;&lt;title&gt;Feedback Form&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&#160;&#160;&lt;h1&gt;Tell us what you think&lt;/h1&gt;
&#160;&#160;&lt;!-- form goes here --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>
<p>Two small things that matter later: <code>lang="en"</code> helps screen readers pick the right voice, and the viewport meta tag makes the form usable on phones.</p>

<h2 class="fmstr-cmp-ffh-body__h2">Step 2: Add the form fields</h2>
<p>Paste this inside <code>&lt;body&gt;</code>, where the comment says "form goes here":</p>
<div class="fmstr-cmp-ffh-body__code"><span class="lang">HTML</span>
<pre><code>&lt;form id="feedback-form" action="/submit-feedback" method="post" novalidate&gt;
&#160;&#160;&lt;div class="field"&gt;
&#160;&#160;&#160;&#160;&lt;label for="name"&gt;Name&lt;/label&gt;
&#160;&#160;&#160;&#160;&lt;input type="text" id="name" name="name" autocomplete="name" required&gt;
&#160;&#160;&lt;/div&gt;

&#160;&#160;&lt;div class="field"&gt;
&#160;&#160;&#160;&#160;&lt;label for="email"&gt;Email&lt;/label&gt;
&#160;&#160;&#160;&#160;&lt;input type="email" id="email" name="email" autocomplete="email" required&gt;
&#160;&#160;&lt;/div&gt;

&#160;&#160;&lt;div class="field"&gt;
&#160;&#160;&#160;&#160;&lt;label for="rating"&gt;How was your experience?&lt;/label&gt;
&#160;&#160;&#160;&#160;&lt;select id="rating" name="rating" required&gt;
&#160;&#160;&#160;&#160;&#160;&#160;&lt;option value=""&gt;Pick one&lt;/option&gt;
&#160;&#160;&#160;&#160;&#160;&#160;&lt;option value="5"&gt;Loved it&lt;/option&gt;
&#160;&#160;&#160;&#160;&#160;&#160;&lt;option value="4"&gt;Good&lt;/option&gt;
&#160;&#160;&#160;&#160;&#160;&#160;&lt;option value="3"&gt;Okay&lt;/option&gt;
&#160;&#160;&#160;&#160;&#160;&#160;&lt;option value="2"&gt;Not great&lt;/option&gt;
&#160;&#160;&#160;&#160;&#160;&#160;&lt;option value="1"&gt;Bad&lt;/option&gt;
&#160;&#160;&#160;&#160;&lt;/select&gt;
&#160;&#160;&lt;/div&gt;

&#160;&#160;&lt;div class="field"&gt;
&#160;&#160;&#160;&#160;&lt;label for="message"&gt;Your feedback&lt;/label&gt;
&#160;&#160;&#160;&#160;&lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
&#160;&#160;&lt;/div&gt;

&#160;&#160;&lt;button type="submit"&gt;Send feedback&lt;/button&gt;
&lt;/form&gt;</code></pre>
</div>
<p>Three details that beginners miss:</p>
<ul>
<li><strong>Every input has a matching <code>&lt;label for&gt;</code>.</strong> Click the label, the input focuses. Screen readers read the label out loud. Skip this and the form fails accessibility and loses keyboard users.</li>
<li><strong><code>name</code> attributes are not cosmetic.</strong> The server reads submissions by <code>name</code>, so <code>name="email"</code> is what makes the email value reach your inbox. Missing <code>name</code> = silent data loss.</li>
<li><strong><code>autocomplete="name"</code> and <code>autocomplete="email"</code></strong> let browsers pre-fill from saved info. One line, measurable bump in completion.</li>
</ul>
<div class="fmstr-cmp-ffh-body__note"><strong>Note:</strong> <code>novalidate</code> on the form tag turns off the browser's default error bubbles so you can show your own (covered in Step 4). Drop it if you want native validation only.</div>

<h2 class="fmstr-cmp-ffh-body__h2">Step 3: Style it with CSS</h2>
<p>Paste this inside <code>&lt;head&gt;</code> between <code>&lt;title&gt;</code> and the closing <code>&lt;/head&gt;</code>:</p>
<div class="fmstr-cmp-ffh-body__code"><span class="lang">CSS</span>
<pre><code>&lt;style&gt;
&#160;&#160;body {
&#160;&#160;&#160;&#160;font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
&#160;&#160;&#160;&#160;background: #f7f7f9;
&#160;&#160;&#160;&#160;margin: 0;
&#160;&#160;&#160;&#160;padding: 40px 16px;
&#160;&#160;&#160;&#160;color: #1a1a1a;
&#160;&#160;}
&#160;&#160;h1 { font-size: 1.5rem; margin: 0 0 24px; text-align: center; }
&#160;&#160;form {
&#160;&#160;&#160;&#160;max-width: 480px;
&#160;&#160;&#160;&#160;margin: 0 auto;
&#160;&#160;&#160;&#160;background: #fff;
&#160;&#160;&#160;&#160;padding: 24px;
&#160;&#160;&#160;&#160;border-radius: 12px;
&#160;&#160;&#160;&#160;box-shadow: 0 2px 12px rgba(0,0,0,0.06);
&#160;&#160;}
&#160;&#160;.field { margin-bottom: 16px; }
&#160;&#160;label {
&#160;&#160;&#160;&#160;display: block;
&#160;&#160;&#160;&#160;font-weight: 600;
&#160;&#160;&#160;&#160;font-size: 0.9rem;
&#160;&#160;&#160;&#160;margin-bottom: 6px;
&#160;&#160;}
&#160;&#160;input, select, textarea {
&#160;&#160;&#160;&#160;width: 100%;
&#160;&#160;&#160;&#160;box-sizing: border-box;
&#160;&#160;&#160;&#160;padding: 10px 12px;
&#160;&#160;&#160;&#160;font: inherit;
&#160;&#160;&#160;&#160;border: 1px solid #d0d0d6;
&#160;&#160;&#160;&#160;border-radius: 8px;
&#160;&#160;&#160;&#160;background: #fff;
&#160;&#160;}
&#160;&#160;input:focus, select:focus, textarea:focus {
&#160;&#160;&#160;&#160;outline: 2px solid #5b6cff;
&#160;&#160;&#160;&#160;outline-offset: 1px;
&#160;&#160;&#160;&#160;border-color: #5b6cff;
&#160;&#160;}
&#160;&#160;input[aria-invalid="true"],
&#160;&#160;select[aria-invalid="true"],
&#160;&#160;textarea[aria-invalid="true"] {
&#160;&#160;&#160;&#160;border-color: #d33;
&#160;&#160;}
&#160;&#160;.error {
&#160;&#160;&#160;&#160;display: block;
&#160;&#160;&#160;&#160;color: #d33;
&#160;&#160;&#160;&#160;font-size: 0.8rem;
&#160;&#160;&#160;&#160;margin-top: 4px;
&#160;&#160;&#160;&#160;min-height: 1em;
&#160;&#160;}
&#160;&#160;button {
&#160;&#160;&#160;&#160;width: 100%;
&#160;&#160;&#160;&#160;padding: 12px;
&#160;&#160;&#160;&#160;background: #5b6cff;
&#160;&#160;&#160;&#160;color: #fff;
&#160;&#160;&#160;&#160;font-weight: 600;
&#160;&#160;&#160;&#160;border: none;
&#160;&#160;&#160;&#160;border-radius: 8px;
&#160;&#160;&#160;&#160;cursor: pointer;
&#160;&#160;}
&#160;&#160;button:hover { background: #4a59e0; }
&lt;/style&gt;</code></pre>
</div>
<p>Two things this stylesheet does that the typical tutorial skips:</p>
<ul>
<li>Keeps the focus outline visible. Default focus styles are ugly, so most tutorials remove them. Removing them breaks keyboard users. Replace, don't remove.</li>
<li>Uses <code>system-ui</code> for fonts, so the form inherits the host site's native typography on macOS, Windows, iOS, and Android without shipping a font file.</li>
</ul>

<h2 class="fmstr-cmp-ffh-body__h2">Step 4: Add accessible JavaScript validation</h2>
<p>The alert-on-submit pattern works but it's the worst possible UX. This version shows inline errors, marks invalid fields for screen readers with <code>aria-invalid</code>, and keeps focus where the user can fix the problem.</p>
<p>Paste this right before <code>&lt;/body&gt;</code>:</p>
<div class="fmstr-cmp-ffh-body__code"><span class="lang">JavaScript</span>
<pre><code>&lt;script&gt;
&#160;&#160;const form = document.getElementById('feedback-form');

&#160;&#160;function setError(input, message) {
&#160;&#160;&#160;&#160;input.setAttribute('aria-invalid', 'true');
&#160;&#160;&#160;&#160;let errorEl = input.parentElement.querySelector('.error');
&#160;&#160;&#160;&#160;if (!errorEl) {
&#160;&#160;&#160;&#160;&#160;&#160;errorEl = document.createElement('span');
&#160;&#160;&#160;&#160;&#160;&#160;errorEl.className = 'error';
&#160;&#160;&#160;&#160;&#160;&#160;errorEl.id = input.id + '-error';
&#160;&#160;&#160;&#160;&#160;&#160;input.parentElement.appendChild(errorEl);
&#160;&#160;&#160;&#160;}
&#160;&#160;&#160;&#160;errorEl.textContent = message;
&#160;&#160;&#160;&#160;input.setAttribute('aria-describedby', errorEl.id);
&#160;&#160;}

&#160;&#160;function clearError(input) {
&#160;&#160;&#160;&#160;input.setAttribute('aria-invalid', 'false');
&#160;&#160;&#160;&#160;const errorEl = input.parentElement.querySelector('.error');
&#160;&#160;&#160;&#160;if (errorEl) errorEl.textContent = '';
&#160;&#160;}

&#160;&#160;form.addEventListener('submit', function (event) {
&#160;&#160;&#160;&#160;let firstInvalid = null;

&#160;&#160;&#160;&#160;[...form.querySelectorAll('input, select, textarea')].forEach((input) =&gt; {
&#160;&#160;&#160;&#160;&#160;&#160;clearError(input);
&#160;&#160;&#160;&#160;&#160;&#160;if (!input.value.trim()) {
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;setError(input, 'This field is required.');
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;firstInvalid = firstInvalid || input;
&#160;&#160;&#160;&#160;&#160;&#160;} else if (input.type === 'email' &amp;&amp; !/^\S+@\S+\.\S+$/.test(input.value)) {
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;setError(input, 'Enter a valid email address.');
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;firstInvalid = firstInvalid || input;
&#160;&#160;&#160;&#160;&#160;&#160;}
&#160;&#160;&#160;&#160;});

&#160;&#160;&#160;&#160;if (firstInvalid) {
&#160;&#160;&#160;&#160;&#160;&#160;event.preventDefault();
&#160;&#160;&#160;&#160;&#160;&#160;firstInvalid.focus();
&#160;&#160;&#160;&#160;}
&#160;&#160;});
&lt;/script&gt;</code></pre>
</div>
<p>What this does that the original snippet missed:</p>
<ul>
<li>Sets <code>aria-invalid="true"</code> and <code>aria-describedby</code> so screen readers announce the error.</li>
<li>Inserts the error message next to the field, not in a modal.</li>
<li>Focuses the first invalid field on failed submit, so a keyboard user lands exactly where they need to fix.</li>
<li>Doesn't trust the email regex to be perfect (it isn't); always re-validate on the server.</li>
</ul>
<div class="fmstr-cmp-ffh-body__note"><strong>Rule of thumb:</strong> client-side validation is for UX. Server-side validation is for trust. Do both.</div>

<h2 class="fmstr-cmp-ffh-body__h2">Step 5: Test the form locally</h2>
<p>Open <code>feedback.html</code> in a browser. Run this checklist:</p>
<ul>
<li>Tab through every field with the keyboard. Focus should be visible at every stop.</li>
<li>Try to submit empty. You should see inline error messages, focus should jump to the first empty field.</li>
<li>Type a malformed email. You should see "Enter a valid email address."</li>
<li>Open the browser's network tab, submit a valid form. You should see a POST to <code>/submit-feedback</code>. That request will currently 404 because you don't have a backend yet. Step 6 fixes that.</li>
</ul>
<p>If you want to skip the backend setup entirely, the next step shows the <a href="https://formester.com/features/html-form-backend/">Formester HTML form backend</a> path: change one <code>action</code> attribute and your form starts collecting submissions.</p>

<h2 class="fmstr-cmp-ffh-body__h2" id="step-6-backend">Step 6: Wire up a backend that stores submissions</h2>
<p>A feedback form without a backend is a dead form. The browser POSTs the data, the server returns 404, the user sees an error page, the feedback is gone. You have three real options, compared side-by-side below.</p>

</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-ffh-back a { text-decoration: none !important; }
.fmstr-cmp-ffh-back {
--fmstr-cmp-ffh-back-bg-card: #ffffff;
--fmstr-cmp-ffh-back-bg-code: #0f172a;
--fmstr-cmp-ffh-back-fg-1: #101828;
--fmstr-cmp-ffh-back-fg-2: #475467;
--fmstr-cmp-ffh-back-fg-3: #697586;
--fmstr-cmp-ffh-back-violet-500: #7f56d9;
--fmstr-cmp-ffh-back-violet-600: #6941c6;
--fmstr-cmp-ffh-back-tint: #f7f3ff;
--fmstr-cmp-ffh-back-edge: #e4d7ff;
--fmstr-cmp-ffh-back-border: #eaecf0;
--fmstr-cmp-ffh-back-red: #dc2626;
--fmstr-cmp-ffh-back-red-bg: #fef2f2;
--fmstr-cmp-ffh-back-red-edge: #fecaca;
--fmstr-cmp-ffh-back-amber: #d97706;
--fmstr-cmp-ffh-back-amber-bg: #fffbeb;
--fmstr-cmp-ffh-back-amber-edge: #fde68a;
--fmstr-cmp-ffh-back-green: #15803d;
--fmstr-cmp-ffh-back-green-bg: #f0fdf4;
--fmstr-cmp-ffh-back-green-edge: #bbf7d0;
--fmstr-cmp-ffh-back-code-fg: #e2e8f0;
--fmstr-cmp-ffh-back-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit; color: var(--fmstr-cmp-ffh-back-fg-1);
}
.fmstr-cmp-ffh-back *, .fmstr-cmp-ffh-back *::before, .fmstr-cmp-ffh-back *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-back__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-ffh-back__head { margin: 0 0 28px; }
.fmstr-cmp-ffh-back__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--fmstr-cmp-ffh-back-tint); color: var(--fmstr-cmp-ffh-back-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--fmstr-cmp-ffh-back-edge); margin: 0 0 14px;
}
.fmstr-cmp-ffh-back__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; }
.fmstr-cmp-ffh-back__intro { color: var(--fmstr-cmp-ffh-back-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }

.fmstr-cmp-ffh-back__grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.fmstr-cmp-ffh-back__card {
background: var(--fmstr-cmp-ffh-back-bg-card);
border: 1px solid var(--fmstr-cmp-ffh-back-border);
border-radius: 18px; padding: 24px 26px; display: flex; flex-direction: column; gap: 16px;
box-shadow: var(--fmstr-cmp-ffh-back-shadow); position: relative;
}
.fmstr-cmp-ffh-back__card--red { border-top: 4px solid var(--fmstr-cmp-ffh-back-red); }
.fmstr-cmp-ffh-back__card--amber { border-top: 4px solid var(--fmstr-cmp-ffh-back-amber); }
.fmstr-cmp-ffh-back__card--green { border-top: 4px solid var(--fmstr-cmp-ffh-back-violet-500); background: linear-gradient(180deg, #fdfbff 0%, #fff 60%); }

.fmstr-cmp-ffh-back__verdict {
display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
padding: 5px 12px; border-radius: 9999px; font-size: 11.5px; font-weight: 700;
letter-spacing: .04em; text-transform: uppercase;
}
.fmstr-cmp-ffh-back__verdict--red { background: var(--fmstr-cmp-ffh-back-red-bg); color: var(--fmstr-cmp-ffh-back-red); border: 1px solid var(--fmstr-cmp-ffh-back-red-edge); }
.fmstr-cmp-ffh-back__verdict--amber { background: var(--fmstr-cmp-ffh-back-amber-bg); color: var(--fmstr-cmp-ffh-back-amber); border: 1px solid var(--fmstr-cmp-ffh-back-amber-edge); }
.fmstr-cmp-ffh-back__verdict--green { background: var(--fmstr-cmp-ffh-back-tint); color: var(--fmstr-cmp-ffh-back-violet-600); border: 1px solid var(--fmstr-cmp-ffh-back-edge); }

.fmstr-cmp-ffh-back__name { font-size: 19px; font-weight: 700; margin: 0; letter-spacing: -.01em; color: var(--fmstr-cmp-ffh-back-fg-1); }
.fmstr-cmp-ffh-back__sub { font-size: 13.5px; color: var(--fmstr-cmp-ffh-back-fg-3); margin: -8px 0 0; line-height: 1.5; }

.fmstr-cmp-ffh-back__code {
background: var(--fmstr-cmp-ffh-back-bg-code);
border-radius: 10px; padding: 14px 16px;
font-family: ui-monospace, Menlo, Monaco, monospace;
font-size: 12px; line-height: 1.55;
color: var(--fmstr-cmp-ffh-back-code-fg);
overflow-x: auto; margin: 0; white-space: pre;
}
.fmstr-cmp-ffh-back__code code { font-family: inherit; }
.fmstr-cmp-ffh-back__code .t { color: #f472b6; }
.fmstr-cmp-ffh-back__code .a { color: #a5b4fc; }
.fmstr-cmp-ffh-back__code .s { color: #86efac; }
.fmstr-cmp-ffh-back__code .c { color: #64748b; font-style: italic; }

.fmstr-cmp-ffh-back__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.fmstr-cmp-ffh-back__row { display: flex; gap: 10px; font-size: 14px; line-height: 1.5; color: var(--fmstr-cmp-ffh-back-fg-2); }
.fmstr-cmp-ffh-back__row::before {
content: ""; width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0; margin-top: 3px;
background-repeat: no-repeat; background-position: center;
}
.fmstr-cmp-ffh-back__row--bad::before { background-color: var(--fmstr-cmp-ffh-back-red-bg); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none' stroke='%23dc2626' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M2 2 L8 8 M8 2 L2 8'/%3E%3C/svg%3E"); }
.fmstr-cmp-ffh-back__row--meh::before { background-color: var(--fmstr-cmp-ffh-back-amber-bg); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none' stroke='%23d97706' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M2 5 L8 5'/%3E%3C/svg%3E"); }
.fmstr-cmp-ffh-back__row--good::before { background-color: var(--fmstr-cmp-ffh-back-green-bg); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none' stroke='%2315803d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 5 L4 7 L8 3'/%3E%3C/svg%3E"); }
.fmstr-cmp-ffh-back__row strong { color: var(--fmstr-cmp-ffh-back-fg-1); font-weight: 600; }

.fmstr-cmp-ffh-back__cta {
margin-top: auto; padding-top: 4px;
display: inline-flex; align-items: center; gap: 8px;
color: var(--fmstr-cmp-ffh-back-violet-600) !important;
font-weight: 600; font-size: 14.5px;
text-decoration: none !important;
}
.fmstr-cmp-ffh-back__cta:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-ffh-back { padding: 40px 16px; }
.fmstr-cmp-ffh-back__card { padding: 22px; }
.fmstr-cmp-ffh-back__intro { font-size: 15.5px; }
.fmstr-cmp-ffh-back__code { font-size: 11.5px; padding: 12px 14px; }
}
</style>

<section class="fmstr-cmp-ffh-back" aria-labelledby="fmstr-cmp-ffh-back-h2">
<div class="fmstr-cmp-ffh-back__container">
<div class="fmstr-cmp-ffh-back__head">
<span class="fmstr-cmp-ffh-back__eyebrow">Three honest paths</span>
<h2 class="fmstr-cmp-ffh-back__h2" id="fmstr-cmp-ffh-back-h2">What happens after the user clicks Submit</h2>
<p class="fmstr-cmp-ffh-back__intro">Without a backend, a feedback form is a dead form. The browser POSTs the data, the server returns 404, the user sees an error page. Here are the three real options, ranked by how much pain each one ships with.</p>
</div>

<div class="fmstr-cmp-ffh-back__grid">

<article class="fmstr-cmp-ffh-back__card fmstr-cmp-ffh-back__card--red">
<span class="fmstr-cmp-ffh-back__verdict fmstr-cmp-ffh-back__verdict--red">Don&rsquo;t ship this</span>
<h3 class="fmstr-cmp-ffh-back__name">Path 1: <code>mailto:</code></h3>
<p class="fmstr-cmp-ffh-back__sub">The "no server" hack that loses about half your submissions.</p>
<pre class="fmstr-cmp-ffh-back__code"><code><span class="c">&lt;!-- Opens the user's mail client --&gt;</span>
<span class="t">&lt;form</span>
<span class="a">action</span>=<span class="s">"mailto:you@example.com"</span>
<span class="a">method</span>=<span class="s">"post"</span>
<span class="a">enctype</span>=<span class="s">"text/plain"</span><span class="t">&gt;</span></code></pre>
<ul class="fmstr-cmp-ffh-back__list">
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--bad"><span><strong>User-action required.</strong> Browser opens a draft email. They have to click Send manually. Half won&rsquo;t.</span></li>
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--bad"><span><strong>Breaks on mobile.</strong> Many phones have no configured mail client.</span></li>
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--bad"><span><strong>Spam-filter bait.</strong> Resulting messages are unsigned and easy to flag.</span></li>
</ul>
</article>

<article class="fmstr-cmp-ffh-back__card fmstr-cmp-ffh-back__card--amber">
<span class="fmstr-cmp-ffh-back__verdict fmstr-cmp-ffh-back__verdict--amber">You&rsquo;ll maintain it</span>
<h3 class="fmstr-cmp-ffh-back__name">Path 2: Your own server</h3>
<p class="fmstr-cmp-ffh-back__sub">PHP, Node, or whatever you already run. Full control, full ownership.</p>
<pre class="fmstr-cmp-ffh-back__code"><code><span class="c">// minimal Node/Express receiver</span>
app.<span class="t">post</span>(<span class="s">'/submit-feedback'</span>, (req, res) =&gt; {
<span class="t">const</span> { name, email, message } = req.body;
<span class="t">if</span> (!validate(email)) <span class="t">return</span> res.<span class="t">status</span>(400);
db.<span class="t">insert</span>({ name, email, message });
res.<span class="t">redirect</span>(<span class="s">'/thank-you'</span>);
});</code></pre>
<ul class="fmstr-cmp-ffh-back__list">
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--meh"><span><strong>You own the server.</strong> Hosting, TLS, scaling, uptime monitoring are yours.</span></li>
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--meh"><span><strong>Spam protection is on you.</strong> Honeypot, rate limiting, CAPTCHA, all DIY.</span></li>
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--good"><span><strong>Maximum control.</strong> Custom logic, database, queues, webhooks however you want.</span></li>
</ul>
</article>

<article class="fmstr-cmp-ffh-back__card fmstr-cmp-ffh-back__card--green">
<span class="fmstr-cmp-ffh-back__verdict fmstr-cmp-ffh-back__verdict--green">Skip the server</span>
<h3 class="fmstr-cmp-ffh-back__name">Path 3: Formester HTML form backend</h3>
<p class="fmstr-cmp-ffh-back__sub">One <code>action</code> attribute swap. No server code, no infra.</p>
<pre class="fmstr-cmp-ffh-back__code"><code><span class="c">&lt;!-- The only change vs. Path 2 --&gt;</span>
<span class="t">&lt;form</span>
<span class="a">action</span>=<span class="s">"https://app.formester.com/</span>
<span class="s">    api/v1/forms/YOUR_ID/submissions"</span>
<span class="a">method</span>=<span class="s">"post"</span><span class="t">&gt;</span></code></pre>
<ul class="fmstr-cmp-ffh-back__list">
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--good"><span><strong>Submissions land in the dashboard.</strong> View, filter, <a href="https://formester.com/features/export-form-submission-pdf/">export to PDF</a>, push to Sheets/Slack/HubSpot.</span></li>
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--good"><span><strong>Spam protection built in.</strong> Honeypot plus <a href="https://formester.com/features/spam-protection/">reCAPTCHA-style checks</a> on every submission.</span></li>
<li class="fmstr-cmp-ffh-back__row fmstr-cmp-ffh-back__row--good"><span><strong>Free for 100 submissions/month.</strong> Email notifications, dashboard, integrations included. Used by 56,000+ teams.</span></li>
</ul>
<a class="fmstr-cmp-ffh-back__cta" href="https://formester.com/features/html-form-backend/">See the HTML form backend &rarr;</a>
</article>

</div>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-ffh-code a { text-decoration: none !important; }
.fmstr-cmp-ffh-code {
--fmstr-cmp-ffh-code-bg-card: #ffffff;
--fmstr-cmp-ffh-code-bg-code: #0f172a;
--fmstr-cmp-ffh-code-bg-preview: #f7f7f9;
--fmstr-cmp-ffh-code-fg-1: #101828;
--fmstr-cmp-ffh-code-fg-2: #475467;
--fmstr-cmp-ffh-code-fg-3: #697586;
--fmstr-cmp-ffh-code-violet-500: #7f56d9;
--fmstr-cmp-ffh-code-violet-600: #6941c6;
--fmstr-cmp-ffh-code-tint: #f7f3ff;
--fmstr-cmp-ffh-code-edge: #e4d7ff;
--fmstr-cmp-ffh-code-border: #eaecf0;
--fmstr-cmp-ffh-code-code-fg: #e2e8f0;
--fmstr-cmp-ffh-code-code-tag: #f472b6;
--fmstr-cmp-ffh-code-code-attr: #a5b4fc;
--fmstr-cmp-ffh-code-code-str: #86efac;
--fmstr-cmp-ffh-code-code-comment: #64748b;
--fmstr-cmp-ffh-code-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit; color: var(--fmstr-cmp-ffh-code-fg-1);
}
.fmstr-cmp-ffh-code *, .fmstr-cmp-ffh-code *::before, .fmstr-cmp-ffh-code *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-code__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-ffh-code__head { max-width: 780px; margin: 0 0 32px; }
.fmstr-cmp-ffh-code__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--fmstr-cmp-ffh-code-tint); color: var(--fmstr-cmp-ffh-code-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--fmstr-cmp-ffh-code-edge); margin: 0 0 14px;
}
.fmstr-cmp-ffh-code__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; }
.fmstr-cmp-ffh-code__intro { color: var(--fmstr-cmp-ffh-code-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }

.fmstr-cmp-ffh-code__grid {
display: grid; grid-template-columns: 1fr; gap: 0;
background: var(--fmstr-cmp-ffh-code-bg-card);
border: 1px solid var(--fmstr-cmp-ffh-code-border);
border-radius: 20px; overflow: hidden;
box-shadow: var(--fmstr-cmp-ffh-code-shadow);
}

.fmstr-cmp-ffh-code__preview-pane {
background: var(--fmstr-cmp-ffh-code-bg-preview);
padding: 28px 24px;
display: flex; flex-direction: column; gap: 14px;
border-bottom: 1px solid var(--fmstr-cmp-ffh-code-border);
}
.fmstr-cmp-ffh-code__preview-label {
font-size: 11px; font-weight: 700; letter-spacing: .08em;
text-transform: uppercase; color: var(--fmstr-cmp-ffh-code-fg-3);
display: flex; align-items: center; gap: 8px;
}
.fmstr-cmp-ffh-code__preview-label::before {
content: ""; width: 8px; height: 8px; border-radius: 50%;
background: #22c55e; flex-shrink: 0;
}
.fmstr-cmp-ffh-code__preview-form {
background: #fff; padding: 22px 20px; border-radius: 12px;
box-shadow: 0 2px 12px rgba(0,0,0,0.06);
display: flex; flex-direction: column; gap: 14px;
}
.fmstr-cmp-ffh-code__preview-h { font-size: 16px; font-weight: 700; text-align: center; margin: 0 0 4px; color: var(--fmstr-cmp-ffh-code-fg-1); }
.fmstr-cmp-ffh-code__preview-field { display: flex; flex-direction: column; gap: 6px; }
.fmstr-cmp-ffh-code__preview-label-row { font-size: 12.5px; font-weight: 600; color: var(--fmstr-cmp-ffh-code-fg-1); }
.fmstr-cmp-ffh-code__preview-input {
background: #fff; border: 1px solid #d0d0d6; border-radius: 8px;
padding: 9px 11px; font-size: 12.5px; color: var(--fmstr-cmp-ffh-code-fg-3);
}
.fmstr-cmp-ffh-code__preview-input--focus { outline: 2px solid var(--fmstr-cmp-ffh-code-violet-500); outline-offset: 1px; border-color: var(--fmstr-cmp-ffh-code-violet-500); color: var(--fmstr-cmp-ffh-code-fg-1); }
.fmstr-cmp-ffh-code__preview-select {
background: #fff; border: 1px solid #d0d0d6; border-radius: 8px;
padding: 9px 11px; font-size: 12.5px; color: var(--fmstr-cmp-ffh-code-fg-3);
display: flex; justify-content: space-between; align-items: center;
}
.fmstr-cmp-ffh-code__preview-textarea {
background: #fff; border: 1px solid #d0d0d6; border-radius: 8px;
padding: 9px 11px; font-size: 12.5px; color: var(--fmstr-cmp-ffh-code-fg-3);
min-height: 54px;
}
.fmstr-cmp-ffh-code__preview-btn {
background: var(--fmstr-cmp-ffh-code-violet-500); color: #fff;
padding: 10px; border-radius: 8px; text-align: center;
font-weight: 600; font-size: 13px; margin-top: 4px;
}
.fmstr-cmp-ffh-code__preview-caption {
font-size: 12px; color: var(--fmstr-cmp-ffh-code-fg-3); line-height: 1.5; margin: 4px 0 0;
}

.fmstr-cmp-ffh-code__code-pane {
background: var(--fmstr-cmp-ffh-code-bg-code);
position: relative; max-height: 560px;
display: flex; flex-direction: column;
}
.fmstr-cmp-ffh-code__code-header {
display: flex; align-items: center; justify-content: space-between;
padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.08);
color: var(--fmstr-cmp-ffh-code-code-comment);
font-family: ui-monospace, Menlo, Monaco, monospace; font-size: 12px;
}
.fmstr-cmp-ffh-code__code-filename { display: flex; align-items: center; gap: 8px; }
.fmstr-cmp-ffh-code__code-filename::before {
content: ""; width: 10px; height: 10px; border-radius: 50%; background: #f87171;
box-shadow: 16px 0 0 #fbbf24, 32px 0 0 #34d399;
margin-right: 12px;
}
.fmstr-cmp-ffh-code__code-copy {
background: rgba(127, 86, 217, 0.18) !important;
color: #c4b5fd !important; border: 1px solid rgba(127, 86, 217, 0.4);
padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 600;
cursor: pointer; font-family: ui-monospace, Menlo, Monaco, monospace;
display: inline-flex; align-items: center; gap: 6px;
}
.fmstr-cmp-ffh-code__code-copy:hover { background: rgba(127, 86, 217, 0.28) !important; }
.fmstr-cmp-ffh-code__code-body {
margin: 0; padding: 18px 20px;
font-family: ui-monospace, Menlo, Monaco, monospace;
font-size: 12.5px; line-height: 1.65;
color: var(--fmstr-cmp-ffh-code-code-fg);
overflow: auto; flex-grow: 1;
white-space: pre;
scrollbar-width: thin; scrollbar-color: rgba(167,139,250,.35) transparent;
}
.fmstr-cmp-ffh-code__code-body::-webkit-scrollbar { width: 10px; height: 10px; }
.fmstr-cmp-ffh-code__code-body::-webkit-scrollbar-track { background: transparent; }
.fmstr-cmp-ffh-code__code-body::-webkit-scrollbar-thumb { background: rgba(167,139,250,.3); border-radius: 5px; }
.fmstr-cmp-ffh-code__code-body::-webkit-scrollbar-thumb:hover { background: rgba(167,139,250,.5); }
.fmstr-cmp-ffh-code__code-body code { font-family: inherit; }
.fmstr-cmp-ffh-code__tag { color: var(--fmstr-cmp-ffh-code-code-tag); }
.fmstr-cmp-ffh-code__attr { color: var(--fmstr-cmp-ffh-code-code-attr); }
.fmstr-cmp-ffh-code__str { color: var(--fmstr-cmp-ffh-code-code-str); }
.fmstr-cmp-ffh-code__cmt { color: var(--fmstr-cmp-ffh-code-code-comment); font-style: italic; }

.fmstr-cmp-ffh-code__foot {
margin: 20px auto 0; max-width: 780px; text-align: center;
color: var(--fmstr-cmp-ffh-code-fg-3); font-size: 14.5px; line-height: 1.6;
}
.fmstr-cmp-ffh-code__foot a { color: var(--fmstr-cmp-ffh-code-violet-600) !important; font-weight: 600; }
.fmstr-cmp-ffh-code__foot a:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-ffh-code { padding: 40px 16px; }
.fmstr-cmp-ffh-code__grid { border-radius: 16px; }
.fmstr-cmp-ffh-code__preview-pane { padding: 22px 18px; }
.fmstr-cmp-ffh-code__code-pane { max-height: 420px; }
.fmstr-cmp-ffh-code__code-body { font-size: 11.5px; padding: 14px 16px; }
.fmstr-cmp-ffh-code__intro { font-size: 15.5px; }
}
</style>

<section class="fmstr-cmp-ffh-code" aria-labelledby="fmstr-cmp-ffh-code-h2">
<div class="fmstr-cmp-ffh-code__container">
<div class="fmstr-cmp-ffh-code__head">
<span class="fmstr-cmp-ffh-code__eyebrow">Copy, paste, ship</span>
<h2 class="fmstr-cmp-ffh-code__h2" id="fmstr-cmp-ffh-code-h2">The complete feedback form, in one file</h2>
<p class="fmstr-cmp-ffh-code__intro">Structure, styling, and accessible JavaScript validation in a single working file. Save as <code>feedback.html</code>, swap the <code>action</code> URL, and the form is live.</p>
</div>

<div class="fmstr-cmp-ffh-code__grid">
<div class="fmstr-cmp-ffh-code__preview-pane">
<div class="fmstr-cmp-ffh-code__preview-label">Live preview</div>
<div class="fmstr-cmp-ffh-code__preview-form">
<h3 class="fmstr-cmp-ffh-code__preview-h">Tell us what you think</h3>
<div class="fmstr-cmp-ffh-code__preview-field">
<span class="fmstr-cmp-ffh-code__preview-label-row">Name</span>
<div class="fmstr-cmp-ffh-code__preview-input">Jane Doe</div>
</div>
<div class="fmstr-cmp-ffh-code__preview-field">
<span class="fmstr-cmp-ffh-code__preview-label-row">Email</span>
<div class="fmstr-cmp-ffh-code__preview-input fmstr-cmp-ffh-code__preview-input--focus">jane@example.com</div>
</div>
<div class="fmstr-cmp-ffh-code__preview-field">
<span class="fmstr-cmp-ffh-code__preview-label-row">How was your experience?</span>
<div class="fmstr-cmp-ffh-code__preview-select"><span>Loved it</span><span>&#9662;</span></div>
</div>
<div class="fmstr-cmp-ffh-code__preview-field">
<span class="fmstr-cmp-ffh-code__preview-label-row">Your feedback</span>
<div class="fmstr-cmp-ffh-code__preview-textarea">The dashboard is fast and the export to PDF saved my week.</div>
</div>
<div class="fmstr-cmp-ffh-code__preview-btn">Send feedback</div>
</div>
<p class="fmstr-cmp-ffh-code__preview-caption">Rendered output. Keyboard-accessible focus ring on the active field, inline error slot ready, mobile-friendly layout.</p>
</div>

<div class="fmstr-cmp-ffh-code__code-pane">
<div class="fmstr-cmp-ffh-code__code-header">
<span class="fmstr-cmp-ffh-code__code-filename">feedback.html</span>
<button type="button" class="fmstr-cmp-ffh-code__code-copy" aria-label="Copy code">Copy</button>
</div>
<pre class="fmstr-cmp-ffh-code__code-body"><code><span class="fmstr-cmp-ffh-code__cmt">&lt;!DOCTYPE html&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;html</span> <span class="fmstr-cmp-ffh-code__attr">lang</span>=<span class="fmstr-cmp-ffh-code__str">"en"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;head&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;meta</span> <span class="fmstr-cmp-ffh-code__attr">charset</span>=<span class="fmstr-cmp-ffh-code__str">"UTF-8"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;meta</span> <span class="fmstr-cmp-ffh-code__attr">name</span>=<span class="fmstr-cmp-ffh-code__str">"viewport"</span> <span class="fmstr-cmp-ffh-code__attr">content</span>=<span class="fmstr-cmp-ffh-code__str">"width=device-width, initial-scale=1.0"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;title&gt;</span>Feedback Form<span class="fmstr-cmp-ffh-code__tag">&lt;/title&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;style&gt;</span>
body { font-family: system-ui, sans-serif; background: #f7f7f9; padding: 40px 16px; }
form { max-width: 480px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 12px; }
.field { margin-bottom: 16px; }
label { display: block; font-weight: 600; margin-bottom: 6px; }
input, select, textarea { width: 100%; padding: 10px 12px; border: 1px solid #d0d0d6; border-radius: 8px; box-sizing: border-box; }
input:focus, select:focus, textarea:focus { outline: 2px solid #5b6cff; border-color: #5b6cff; }
[aria-invalid="true"] { border-color: #d33; }
.error { display: block; color: #d33; font-size: 0.8rem; margin-top: 4px; }
button { width: 100%; padding: 12px; background: #5b6cff; color: #fff; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; }
<span class="fmstr-cmp-ffh-code__tag">&lt;/style&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/head&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;body&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;h1&gt;</span>Tell us what you think<span class="fmstr-cmp-ffh-code__tag">&lt;/h1&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;form</span> <span class="fmstr-cmp-ffh-code__attr">id</span>=<span class="fmstr-cmp-ffh-code__str">"feedback-form"</span> <span class="fmstr-cmp-ffh-code__attr">action</span>=<span class="fmstr-cmp-ffh-code__str">"https://app.formester.com/api/v1/forms/YOUR_FORM_ID/submissions"</span> <span class="fmstr-cmp-ffh-code__attr">method</span>=<span class="fmstr-cmp-ffh-code__str">"post"</span> <span class="fmstr-cmp-ffh-code__attr">novalidate</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;div</span> <span class="fmstr-cmp-ffh-code__attr">class</span>=<span class="fmstr-cmp-ffh-code__str">"field"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;label</span> <span class="fmstr-cmp-ffh-code__attr">for</span>=<span class="fmstr-cmp-ffh-code__str">"name"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Name<span class="fmstr-cmp-ffh-code__tag">&lt;/label&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;input</span> <span class="fmstr-cmp-ffh-code__attr">type</span>=<span class="fmstr-cmp-ffh-code__str">"text"</span> <span class="fmstr-cmp-ffh-code__attr">id</span>=<span class="fmstr-cmp-ffh-code__str">"name"</span> <span class="fmstr-cmp-ffh-code__attr">name</span>=<span class="fmstr-cmp-ffh-code__str">"name"</span> <span class="fmstr-cmp-ffh-code__attr">autocomplete</span>=<span class="fmstr-cmp-ffh-code__str">"name"</span> <span class="fmstr-cmp-ffh-code__attr">required</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/div&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;div</span> <span class="fmstr-cmp-ffh-code__attr">class</span>=<span class="fmstr-cmp-ffh-code__str">"field"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;label</span> <span class="fmstr-cmp-ffh-code__attr">for</span>=<span class="fmstr-cmp-ffh-code__str">"email"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Email<span class="fmstr-cmp-ffh-code__tag">&lt;/label&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;input</span> <span class="fmstr-cmp-ffh-code__attr">type</span>=<span class="fmstr-cmp-ffh-code__str">"email"</span> <span class="fmstr-cmp-ffh-code__attr">id</span>=<span class="fmstr-cmp-ffh-code__str">"email"</span> <span class="fmstr-cmp-ffh-code__attr">name</span>=<span class="fmstr-cmp-ffh-code__str">"email"</span> <span class="fmstr-cmp-ffh-code__attr">autocomplete</span>=<span class="fmstr-cmp-ffh-code__str">"email"</span> <span class="fmstr-cmp-ffh-code__attr">required</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/div&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;div</span> <span class="fmstr-cmp-ffh-code__attr">class</span>=<span class="fmstr-cmp-ffh-code__str">"field"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;label</span> <span class="fmstr-cmp-ffh-code__attr">for</span>=<span class="fmstr-cmp-ffh-code__str">"rating"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>How was your experience?<span class="fmstr-cmp-ffh-code__tag">&lt;/label&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;select</span> <span class="fmstr-cmp-ffh-code__attr">id</span>=<span class="fmstr-cmp-ffh-code__str">"rating"</span> <span class="fmstr-cmp-ffh-code__attr">name</span>=<span class="fmstr-cmp-ffh-code__str">"rating"</span> <span class="fmstr-cmp-ffh-code__attr">required</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;option</span> <span class="fmstr-cmp-ffh-code__attr">value</span>=<span class="fmstr-cmp-ffh-code__str">""</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Pick one<span class="fmstr-cmp-ffh-code__tag">&lt;/option&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;option</span> <span class="fmstr-cmp-ffh-code__attr">value</span>=<span class="fmstr-cmp-ffh-code__str">"5"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Loved it<span class="fmstr-cmp-ffh-code__tag">&lt;/option&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;option</span> <span class="fmstr-cmp-ffh-code__attr">value</span>=<span class="fmstr-cmp-ffh-code__str">"3"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Okay<span class="fmstr-cmp-ffh-code__tag">&lt;/option&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;option</span> <span class="fmstr-cmp-ffh-code__attr">value</span>=<span class="fmstr-cmp-ffh-code__str">"1"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Bad<span class="fmstr-cmp-ffh-code__tag">&lt;/option&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/select&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/div&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;div</span> <span class="fmstr-cmp-ffh-code__attr">class</span>=<span class="fmstr-cmp-ffh-code__str">"field"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;label</span> <span class="fmstr-cmp-ffh-code__attr">for</span>=<span class="fmstr-cmp-ffh-code__str">"message"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Your feedback<span class="fmstr-cmp-ffh-code__tag">&lt;/label&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;textarea</span> <span class="fmstr-cmp-ffh-code__attr">id</span>=<span class="fmstr-cmp-ffh-code__str">"message"</span> <span class="fmstr-cmp-ffh-code__attr">name</span>=<span class="fmstr-cmp-ffh-code__str">"message"</span> <span class="fmstr-cmp-ffh-code__attr">rows</span>=<span class="fmstr-cmp-ffh-code__str">"5"</span> <span class="fmstr-cmp-ffh-code__attr">required</span><span class="fmstr-cmp-ffh-code__tag">&gt;&lt;/textarea&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/div&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;button</span> <span class="fmstr-cmp-ffh-code__attr">type</span>=<span class="fmstr-cmp-ffh-code__str">"submit"</span><span class="fmstr-cmp-ffh-code__tag">&gt;</span>Send feedback<span class="fmstr-cmp-ffh-code__tag">&lt;/button&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/form&gt;</span>

<span class="fmstr-cmp-ffh-code__tag">&lt;script&gt;</span>
<span class="fmstr-cmp-ffh-code__cmt">// Accessible inline validation: aria-invalid, aria-describedby, focus management</span>
const form = document.getElementById(<span class="fmstr-cmp-ffh-code__str">'feedback-form'</span>);
form.addEventListener(<span class="fmstr-cmp-ffh-code__str">'submit'</span>, (e) =&gt; {
let firstInvalid = null;
[...form.querySelectorAll(<span class="fmstr-cmp-ffh-code__str">'input, select, textarea'</span>)].forEach((input) =&gt; {
const valid = input.value.trim() &amp;&amp; (input.type !== <span class="fmstr-cmp-ffh-code__str">'email'</span> || /^\S+@\S+\.\S+$/.test(input.value));
input.setAttribute(<span class="fmstr-cmp-ffh-code__str">'aria-invalid'</span>, valid ? <span class="fmstr-cmp-ffh-code__str">'false'</span> : <span class="fmstr-cmp-ffh-code__str">'true'</span>);
if (!valid &amp;&amp; !firstInvalid) firstInvalid = input;
});
if (firstInvalid) { e.preventDefault(); firstInvalid.focus(); }
});
<span class="fmstr-cmp-ffh-code__tag">&lt;/script&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/body&gt;</span>
<span class="fmstr-cmp-ffh-code__tag">&lt;/html&gt;</span></code></pre>
</div>
</div>

<p class="fmstr-cmp-ffh-code__foot">The <code>action</code> URL above points to <a href="https://formester.com/features/html-form-backend/">Formester&rsquo;s HTML form backend</a>. Replace <code>YOUR_FORM_ID</code> with your form&rsquo;s ID, or point it at your own server. Everything else stays the same.</p>
</div>
</section>

<section class="fmstr-cmp-ffh-body" aria-label="Common mistakes and variants">
<div class="fmstr-cmp-ffh-body__container">

<h2 class="fmstr-cmp-ffh-body__h2">Common mistakes that break feedback forms</h2>
<ul>
<li><strong><code>mailto:</code> as the action.</strong> Looks like the easy answer. Drops half your submissions because the user has to manually send the draft. Use a real backend.</li>
<li><strong>Missing <code>name</code> attributes.</strong> The form POSTs successfully but the server gets empty fields. <code>id</code> is for CSS and labels; <code>name</code> is what the server reads.</li>
<li><strong>Removed focus outlines.</strong> <code>outline: none</code> is the most copy-pasted CSS mistake on the web. It breaks keyboard navigation. Replace the outline; don't delete it.</li>
<li><strong>Client-side validation only.</strong> A user with DevTools open can submit anything. Validate on the server too.</li>
<li><strong>No spam protection.</strong> Public forms attract bots within hours. Add a honeypot field (a hidden input that bots fill and humans don't) or a CAPTCHA. <a href="https://formester.com/features/spam-protection/">Formester's backend</a> does this automatically.</li>
<li><strong>No confirmation page or message.</strong> The user submits, the page reloads, nothing visibly changes. They submit again. Add a <code>&lt;p role="status"&gt;Thanks, we got it&lt;/p&gt;</code> or redirect to a thank-you page.</li>
</ul>

<h2 class="fmstr-cmp-ffh-body__h2">Variants of the feedback form</h2>
<p>The base form covers most cases. Three common variants:</p>
<div class="fmstr-cmp-ffh-body__variants">
<div class="fmstr-cmp-ffh-body__variant">
<h4>Customer feedback (with rating)</h4>
<p>Add a 1-5 star scale instead of the dropdown. The <code>&lt;input type="range"&gt;</code> works, but a row of radio buttons styled as stars is clearer for screen readers. The <a href="https://formester.com/templates/customer-feedback-form-31840/">customer feedback form template</a> ships this layout pre-built.</p>
</div>
<div class="fmstr-cmp-ffh-body__variant">
<h4>Product feedback (with feature picker)</h4>
<p>Add a checkbox group: "Which features did you use?" with options like Onboarding, Search, Reporting. Use <code>&lt;fieldset&gt;&lt;legend&gt;</code> around the group so screen readers announce it as one question. The <a href="https://formester.com/templates/categories/feedback-forms/">feedback form templates library</a> has a fuller version.</p>
</div>
<div class="fmstr-cmp-ffh-body__variant">
<h4>Employee feedback (anonymous)</h4>
<p>Drop the name and email fields entirely. Add a "Department" dropdown and a longer text area. If you collect this through Formester, turn off IP tracking in the form settings to keep submissions genuinely anonymous. The <a href="https://formester.com/templates/categories/feedback-forms/">employee feedback templates</a> are preconfigured for this.</p>
</div>
</div>

</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-ffh-a11y a { text-decoration: none !important; }
.fmstr-cmp-ffh-a11y {
--fmstr-cmp-ffh-a11y-bg-card: #ffffff;
--fmstr-cmp-ffh-a11y-bg-code: #0f172a;
--fmstr-cmp-ffh-a11y-fg-1: #101828;
--fmstr-cmp-ffh-a11y-fg-2: #475467;
--fmstr-cmp-ffh-a11y-fg-3: #697586;
--fmstr-cmp-ffh-a11y-violet-500: #7f56d9;
--fmstr-cmp-ffh-a11y-violet-600: #6941c6;
--fmstr-cmp-ffh-a11y-tint: #f7f3ff;
--fmstr-cmp-ffh-a11y-edge: #e4d7ff;
--fmstr-cmp-ffh-a11y-border: #eaecf0;
--fmstr-cmp-ffh-a11y-red-bg: #fef2f2;
--fmstr-cmp-ffh-a11y-red-edge: #fecaca;
--fmstr-cmp-ffh-a11y-red: #b91c1c;
--fmstr-cmp-ffh-a11y-green-bg: #f0fdf4;
--fmstr-cmp-ffh-a11y-green-edge: #bbf7d0;
--fmstr-cmp-ffh-a11y-green: #15803d;
--fmstr-cmp-ffh-a11y-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit; color: var(--fmstr-cmp-ffh-a11y-fg-1);
}
.fmstr-cmp-ffh-a11y *, .fmstr-cmp-ffh-a11y *::before, .fmstr-cmp-ffh-a11y *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-a11y__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-ffh-a11y__head { margin: 0 0 28px; }
.fmstr-cmp-ffh-a11y__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--fmstr-cmp-ffh-a11y-tint); color: var(--fmstr-cmp-ffh-a11y-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--fmstr-cmp-ffh-a11y-edge); margin: 0 0 14px;
}
.fmstr-cmp-ffh-a11y__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; }
.fmstr-cmp-ffh-a11y__intro { color: var(--fmstr-cmp-ffh-a11y-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }

.fmstr-cmp-ffh-a11y__list { display: flex; flex-direction: column; gap: 16px; }
.fmstr-cmp-ffh-a11y__item {
background: var(--fmstr-cmp-ffh-a11y-bg-card);
border: 1px solid var(--fmstr-cmp-ffh-a11y-border);
border-radius: 16px; padding: 22px 24px;
display: grid; grid-template-columns: 44px 1fr 1fr; gap: 20px; align-items: start;
box-shadow: var(--fmstr-cmp-ffh-a11y-shadow);
}
.fmstr-cmp-ffh-a11y__num {
width: 36px; height: 36px; border-radius: 10px;
background: var(--fmstr-cmp-ffh-a11y-tint);
color: var(--fmstr-cmp-ffh-a11y-violet-600);
display: grid; place-items: center;
font-weight: 700; font-size: 15px;
border: 1px solid var(--fmstr-cmp-ffh-a11y-edge);
}

.fmstr-cmp-ffh-a11y__copy h3 {
font-size: 17px; font-weight: 600; letter-spacing: -.01em;
color: var(--fmstr-cmp-ffh-a11y-fg-1); margin: 0 0 6px;
}
.fmstr-cmp-ffh-a11y__copy p { color: var(--fmstr-cmp-ffh-a11y-fg-2); font-size: 14.5px; line-height: 1.6; margin: 0; }
.fmstr-cmp-ffh-a11y__copy strong { color: var(--fmstr-cmp-ffh-a11y-fg-1); font-weight: 600; }

.fmstr-cmp-ffh-a11y__pair { display: flex; flex-direction: column; gap: 10px; }
.fmstr-cmp-ffh-a11y__codebox {
background: var(--fmstr-cmp-ffh-a11y-bg-code);
border-radius: 8px; padding: 10px 12px;
font-family: ui-monospace, Menlo, Monaco, monospace;
font-size: 11.5px; line-height: 1.55;
color: #e2e8f0; overflow-x: auto; margin: 0;
white-space: pre; position: relative; padding-left: 50px;
}
.fmstr-cmp-ffh-a11y__codebox code { font-family: inherit; }
.fmstr-cmp-ffh-a11y__codebox::before {
content: ""; position: absolute; left: 10px; top: 11px;
width: 14px; height: 14px; border-radius: 50%;
background-repeat: no-repeat; background-position: center;
}
.fmstr-cmp-ffh-a11y__codebox--bad::before { background-color: var(--fmstr-cmp-ffh-a11y-red-bg); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none' stroke='%23b91c1c' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M1.5 1.5 L6.5 6.5 M6.5 1.5 L1.5 6.5'/%3E%3C/svg%3E"); }
.fmstr-cmp-ffh-a11y__codebox--good::before { background-color: var(--fmstr-cmp-ffh-a11y-green-bg); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' fill='none' stroke='%2315803d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1.5 4.5 L3.5 6.5 L7 3'/%3E%3C/svg%3E"); }
.fmstr-cmp-ffh-a11y__codebox-label {
position: absolute; top: 11px; left: 28px;
font-size: 9px; font-weight: 700; letter-spacing: .08em;
text-transform: uppercase;
}
.fmstr-cmp-ffh-a11y__codebox--bad .fmstr-cmp-ffh-a11y__codebox-label { color: var(--fmstr-cmp-ffh-a11y-red); }
.fmstr-cmp-ffh-a11y__codebox--good .fmstr-cmp-ffh-a11y__codebox-label { color: var(--fmstr-cmp-ffh-a11y-green); }

.fmstr-cmp-ffh-a11y__codebox .t { color: #f472b6; }
.fmstr-cmp-ffh-a11y__codebox .a { color: #a5b4fc; }
.fmstr-cmp-ffh-a11y__codebox .s { color: #86efac; }

.fmstr-cmp-ffh-a11y__foot {
margin: 28px auto 0; max-width: 760px; text-align: center;
color: var(--fmstr-cmp-ffh-a11y-fg-3); font-size: 14.5px; line-height: 1.6;
}
.fmstr-cmp-ffh-a11y__foot a { color: var(--fmstr-cmp-ffh-a11y-violet-600) !important; font-weight: 600; }
.fmstr-cmp-ffh-a11y__foot a:hover { text-decoration: underline !important; }

@media (max-width: 880px) {
.fmstr-cmp-ffh-a11y__item { grid-template-columns: 36px 1fr; gap: 16px; }
.fmstr-cmp-ffh-a11y__pair { grid-column: 1 / -1; }
}
@media (max-width: 760px) {
.fmstr-cmp-ffh-a11y { padding: 40px 16px; }
.fmstr-cmp-ffh-a11y__item { padding: 18px; border-radius: 14px; }
.fmstr-cmp-ffh-a11y__intro { font-size: 15.5px; }
.fmstr-cmp-ffh-a11y__codebox { font-size: 11px; }
}
</style>

<section class="fmstr-cmp-ffh-a11y" aria-labelledby="fmstr-cmp-ffh-a11y-h2">
<div class="fmstr-cmp-ffh-a11y__container">
<div class="fmstr-cmp-ffh-a11y__head">
<span class="fmstr-cmp-ffh-a11y__eyebrow">Five flags worth catching</span>
<h2 class="fmstr-cmp-ffh-a11y__h2" id="fmstr-cmp-ffh-a11y-h2">Accessibility checklist for an HTML feedback form</h2>
<p class="fmstr-cmp-ffh-a11y__intro">Every item below is something keyboard and screen-reader users actually hit. Skip these and a measurable chunk of your audience can&rsquo;t complete the form.</p>
</div>

<div class="fmstr-cmp-ffh-a11y__list">

<article class="fmstr-cmp-ffh-a11y__item">
<div class="fmstr-cmp-ffh-a11y__num">1</div>
<div class="fmstr-cmp-ffh-a11y__copy">
<h3>Pair every label with its input</h3>
<p>The label&rsquo;s <code>for</code> must match the input&rsquo;s <code>id</code>. Click the label, focus the input. Screen readers announce the label out loud. Skip this and the form fails WCAG 2.1 and loses keyboard users.</p>
</div>
<div class="fmstr-cmp-ffh-a11y__pair">
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--bad"><span class="fmstr-cmp-ffh-a11y__codebox-label">No</span><code><span class="t">&lt;label&gt;</span>Email<span class="t">&lt;/label&gt;</span>
<span class="t">&lt;input</span> <span class="a">type</span>=<span class="s">"email"</span><span class="t">&gt;</span></code></pre>
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--good"><span class="fmstr-cmp-ffh-a11y__codebox-label">Yes</span><code><span class="t">&lt;label</span> <span class="a">for</span>=<span class="s">"email"</span><span class="t">&gt;</span>Email<span class="t">&lt;/label&gt;</span>
<span class="t">&lt;input</span> <span class="a">id</span>=<span class="s">"email"</span> <span class="a">type</span>=<span class="s">"email"</span><span class="t">&gt;</span></code></pre>
</div>
</article>

<article class="fmstr-cmp-ffh-a11y__item">
<div class="fmstr-cmp-ffh-a11y__num">2</div>
<div class="fmstr-cmp-ffh-a11y__copy">
<h3>Connect errors with <code>aria-describedby</code></h3>
<p>An invalid field needs <code>aria-invalid="true"</code> plus an <code>aria-describedby</code> that points at the visible error message. Screen readers then announce the error along with the field name on focus.</p>
</div>
<div class="fmstr-cmp-ffh-a11y__pair">
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--bad"><span class="fmstr-cmp-ffh-a11y__codebox-label">No</span><code><span class="t">&lt;input</span> <span class="a">id</span>=<span class="s">"email"</span><span class="t">&gt;</span>
<span class="t">&lt;span&gt;</span>Invalid email<span class="t">&lt;/span&gt;</span></code></pre>
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--good"><span class="fmstr-cmp-ffh-a11y__codebox-label">Yes</span><code><span class="t">&lt;input</span> <span class="a">id</span>=<span class="s">"email"</span>
<span class="a">aria-invalid</span>=<span class="s">"true"</span>
<span class="a">aria-describedby</span>=<span class="s">"email-error"</span><span class="t">&gt;</span>
<span class="t">&lt;span</span> <span class="a">id</span>=<span class="s">"email-error"</span><span class="t">&gt;</span>Invalid email<span class="t">&lt;/span&gt;</span></code></pre>
</div>
</article>

<article class="fmstr-cmp-ffh-a11y__item">
<div class="fmstr-cmp-ffh-a11y__num">3</div>
<div class="fmstr-cmp-ffh-a11y__copy">
<h3>Use <code>autocomplete</code> tokens</h3>
<p>One line per field. Browsers prefill from saved info, password managers behave, and assistive tech recognizes the field&rsquo;s purpose. Measurable lift in completion rate on mobile.</p>
</div>
<div class="fmstr-cmp-ffh-a11y__pair">
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--bad"><span class="fmstr-cmp-ffh-a11y__codebox-label">No</span><code><span class="t">&lt;input</span> <span class="a">type</span>=<span class="s">"text"</span> <span class="a">name</span>=<span class="s">"name"</span><span class="t">&gt;</span>
<span class="t">&lt;input</span> <span class="a">type</span>=<span class="s">"email"</span> <span class="a">name</span>=<span class="s">"email"</span><span class="t">&gt;</span></code></pre>
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--good"><span class="fmstr-cmp-ffh-a11y__codebox-label">Yes</span><code><span class="t">&lt;input</span> <span class="a">type</span>=<span class="s">"text"</span> <span class="a">name</span>=<span class="s">"name"</span>
<span class="a">autocomplete</span>=<span class="s">"name"</span><span class="t">&gt;</span>
<span class="t">&lt;input</span> <span class="a">type</span>=<span class="s">"email"</span> <span class="a">name</span>=<span class="s">"email"</span>
<span class="a">autocomplete</span>=<span class="s">"email"</span><span class="t">&gt;</span></code></pre>
</div>
</article>

<article class="fmstr-cmp-ffh-a11y__item">
<div class="fmstr-cmp-ffh-a11y__num">4</div>
<div class="fmstr-cmp-ffh-a11y__copy">
<h3>Keep focus outlines visible</h3>
<p><code>outline: none</code> is the single most-copied CSS mistake on the web. It breaks keyboard navigation. Replace the default outline, never delete it. The visible ring is how a sighted keyboard user knows where they are.</p>
</div>
<div class="fmstr-cmp-ffh-a11y__pair">
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--bad"><span class="fmstr-cmp-ffh-a11y__codebox-label">No</span><code>input:focus { outline: none; }</code></pre>
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--good"><span class="fmstr-cmp-ffh-a11y__codebox-label">Yes</span><code>input:focus {
outline: 2px solid #5b6cff;
outline-offset: 1px;
}</code></pre>
</div>
</article>

<article class="fmstr-cmp-ffh-a11y__item">
<div class="fmstr-cmp-ffh-a11y__num">5</div>
<div class="fmstr-cmp-ffh-a11y__copy">
<h3>Mark required fields semantically</h3>
<p>The native <code>required</code> attribute does two jobs at once: it tells the browser to block submission and tells screen readers the field is required. Don&rsquo;t fake it with just a red asterisk in the label.</p>
</div>
<div class="fmstr-cmp-ffh-a11y__pair">
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--bad"><span class="fmstr-cmp-ffh-a11y__codebox-label">No</span><code><span class="t">&lt;label&gt;</span>Email <span class="t">&lt;span&gt;</span>*<span class="t">&lt;/span&gt;&lt;/label&gt;</span>
<span class="t">&lt;input</span> <span class="a">type</span>=<span class="s">"email"</span><span class="t">&gt;</span></code></pre>
<pre class="fmstr-cmp-ffh-a11y__codebox fmstr-cmp-ffh-a11y__codebox--good"><span class="fmstr-cmp-ffh-a11y__codebox-label">Yes</span><code><span class="t">&lt;label</span> <span class="a">for</span>=<span class="s">"email"</span><span class="t">&gt;</span>Email (required)<span class="t">&lt;/label&gt;</span>
<span class="t">&lt;input</span> <span class="a">id</span>=<span class="s">"email"</span> <span class="a">type</span>=<span class="s">"email"</span> <span class="a">required</span><span class="t">&gt;</span></code></pre>
</div>
</article>

</div>

<p class="fmstr-cmp-ffh-a11y__foot">For edge cases (fieldsets, error summaries, custom controls), the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form">MDN <code>&lt;form&gt;</code> reference</a> is the canonical source.</p>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-ffh-faq a { text-decoration: none !important; }
.fmstr-cmp-ffh-faq {
--c-bg: #fafafb; --c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467;
--c-violet-600: #6941c6; --c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0; --c-chip-bg: #f4f4f7;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-ffh-faq *, .fmstr-cmp-ffh-faq *::before, .fmstr-cmp-ffh-faq *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-faq__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-ffh-faq__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-ffh-faq__intro { color: #697586; font-size: 17px; line-height: 1.6; margin: 14px 0 28px; max-width: 760px; }
.fmstr-cmp-ffh-faq__list { display: flex; flex-direction: column; gap: 12px; }
.fmstr-cmp-ffh-faq__item {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; box-shadow: var(--c-shadow); overflow: hidden;
}
.fmstr-cmp-ffh-faq__item > summary {
padding: 18px 22px; cursor: pointer; font-weight: 600; font-size: 16.5px;
color: var(--c-fg-1); display: flex; align-items: center; gap: 14px;
list-style: none;
}
.fmstr-cmp-ffh-faq__item > summary::-webkit-details-marker { display: none; }
.fmstr-cmp-ffh-faq__item > summary::before {
content: ""; width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
background-color: var(--c-chip-bg);
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%2375747f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5l4 4 4-4'/%3E%3C/svg%3E");
background-repeat: no-repeat; background-position: center;
transition: transform .15s ease, background-color .15s ease;
}
.fmstr-cmp-ffh-faq__item[open] > summary::before { transform: rotate(180deg); background-color: var(--c-tint); }
.fmstr-cmp-ffh-faq__item[open] > summary { color: var(--c-violet-600); }
.fmstr-cmp-ffh-faq__answer { padding: 0 22px 22px 64px; color: var(--c-fg-2); font-size: 15.5px; line-height: 1.7; }
.fmstr-cmp-ffh-faq__answer a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-ffh-faq__answer a:hover { text-decoration: underline !important; }
.fmstr-cmp-ffh-faq__answer code {
background: var(--c-chip-bg); padding: 1px 6px; border-radius: 4px;
font-family: ui-monospace, Menlo, Monaco, monospace; font-size: 13.5px;
color: var(--c-violet-600);
}

@media (max-width: 760px) {
.fmstr-cmp-ffh-faq { padding: 40px 16px; }
.fmstr-cmp-ffh-faq__intro { font-size: 15.5px; }
.fmstr-cmp-ffh-faq__item > summary { padding: 16px 16px; font-size: 15.5px; gap: 12px; }
.fmstr-cmp-ffh-faq__item > summary::before { width: 26px; height: 26px; }
.fmstr-cmp-ffh-faq__answer { padding: 0 16px 18px 16px; font-size: 15px; line-height: 1.65; }
}
</style>

<section class="fmstr-cmp-ffh-faq" aria-labelledby="fmstr-cmp-ffh-faq-h2">
<div class="fmstr-cmp-ffh-faq__container">
<h2 class="fmstr-cmp-ffh-faq__h2" id="fmstr-cmp-ffh-faq-h2">HTML feedback form FAQ</h2>
<p class="fmstr-cmp-ffh-faq__intro">Answers that mirror the FAQPage JSON-LD on the live page.</p>
<div class="fmstr-cmp-ffh-faq__list">

<details class="fmstr-cmp-ffh-faq__item">
<summary>How do you add a feedback form in HTML?</summary>
<div class="fmstr-cmp-ffh-faq__answer">Use a <code>&lt;form&gt;</code> element with <code>action</code> set to your submission endpoint and <code>method="post"</code>. Inside the form, add labeled <code>&lt;input&gt;</code> and <code>&lt;textarea&gt;</code> elements with <code>name</code> attributes. Style with CSS, validate with JavaScript, and point the <code>action</code> at a backend (your server, or a service like <a href="https://formester.com/features/html-form-backend/">Formester&rsquo;s HTML form backend</a>). The complete copy-paste example above is the shortest working version.</div>
</details>

<details class="fmstr-cmp-ffh-faq__item">
<summary>How do I create a feedback form?</summary>
<div class="fmstr-cmp-ffh-faq__answer">Decide what to ask (name, email, rating, open-ended feedback are the standard four). Write the HTML using a <code>&lt;form&gt;</code> with one labeled input per question. Style it with CSS so it matches your site. Hook the <code>action</code> to a backend that stores submissions. The full process is the six steps above, or skip ahead to <a href="https://formester.com/features/drag-and-drop-form-builder/">Formester&rsquo;s drag-and-drop builder</a> if you&rsquo;d rather not write code.</div>
</details>

<details class="fmstr-cmp-ffh-faq__item">
<summary>How do I create an inquiry form in HTML?</summary>
<div class="fmstr-cmp-ffh-faq__answer">Same pattern as a feedback form, with different field labels. Swap "How was your experience?" for "What are you interested in?" and "Your feedback" for "Your message." Keep the name, email, and submit-button structure identical. For a longer inquiry form with subject lines and contact preferences, the <a href="https://formester.com/blog/contact-form-design-tips-best-practices-and-examples/">contact form design best practices guide</a> covers the patterns.</div>
</details>

<details class="fmstr-cmp-ffh-faq__item">
<summary>How do you add a comment to a form in HTML?</summary>
<div class="fmstr-cmp-ffh-faq__answer">Two meanings. (1) An HTML comment for developers: <code>&lt;!-- this is the feedback section --&gt;</code> between elements. (2) A user-facing comment field: a <code>&lt;textarea&gt;</code> with a label like "Your comments." If you want comments to be optional, leave off the <code>required</code> attribute. Use <code>rows</code> and <code>cols</code> (or CSS height) to size the box.</div>
</details>

<details class="fmstr-cmp-ffh-faq__item">
<summary>How do I add CSS to a feedback form?</summary>
<div class="fmstr-cmp-ffh-faq__answer">Two options. Inline <code>&lt;style&gt;</code> tags inside <code>&lt;head&gt;</code> work fine for one-off pages. For any real site, link an external stylesheet with <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>. Style the <code>form</code>, <code>label</code>, <code>input</code>, <code>textarea</code>, and <code>button</code> selectors directly. Step 3 above ships a complete starter stylesheet you can paste, including focus rings and inline error styles.</div>
</details>

<details class="fmstr-cmp-ffh-faq__item">
<summary>How do I add JavaScript validation without breaking accessibility?</summary>
<div class="fmstr-cmp-ffh-faq__answer">Use <code>aria-invalid="true"</code> on invalid fields, <code>aria-describedby</code> to point at the inline error message, and move focus to the first invalid field on submit failure. Avoid <code>alert()</code> boxes, they break screen-reader flow. The Step 4 JavaScript and the complete example above are accessibility-tested versions you can paste directly. Always re-validate on the server too, since a user with DevTools open can bypass client-side checks.</div>
</details>

</div>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-ffh-vid a { text-decoration: none !important; }
.fmstr-cmp-ffh-vid {
--c-bg-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff; --c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-ffh-vid *, .fmstr-cmp-ffh-vid *::before, .fmstr-cmp-ffh-vid *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-vid__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-ffh-vid__head { margin: 0 0 24px; }
.fmstr-cmp-ffh-vid__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--c-tint); color: var(--c-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--c-edge); margin: 0 0 14px;
}
.fmstr-cmp-ffh-vid__h2 { font-size: clamp(24px, 2.8vw, 32px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-ffh-vid__sub { color: var(--c-fg-3); font-size: 16px; line-height: 1.6; margin: 12px 0 0; }
.fmstr-cmp-ffh-vid__frame {
position: relative; aspect-ratio: 16 / 9; border-radius: 20px; overflow: hidden;
background: var(--c-tint); border: 1px solid var(--c-border); box-shadow: var(--c-shadow);
}
.fmstr-cmp-ffh-vid__frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.fmstr-cmp-ffh-vid__caption { color: var(--c-fg-3); font-size: 14px; line-height: 1.6; text-align: center; margin: 16px 0 0; }
.fmstr-cmp-ffh-vid__caption a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-ffh-vid__caption a:hover { text-decoration: underline !important; }
.fmstr-cmp-ffh-vid__caption code {
background: var(--c-tint); padding: 1px 6px; border-radius: 4px;
font-family: ui-monospace, Menlo, Monaco, monospace; font-size: 13px;
color: var(--c-violet-600);
}

@media (max-width: 760px) {
.fmstr-cmp-ffh-vid { padding: 40px 16px; }
.fmstr-cmp-ffh-vid__sub { font-size: 15px; }
.fmstr-cmp-ffh-vid__frame { border-radius: 16px; }
.fmstr-cmp-ffh-vid__caption { font-size: 13.5px; }
}
</style>

<section class="fmstr-cmp-ffh-vid" aria-labelledby="fmstr-cmp-ffh-vid-h2">
<div class="fmstr-cmp-ffh-vid__container">
<div class="fmstr-cmp-ffh-vid__head">
<span class="fmstr-cmp-ffh-vid__eyebrow">Three-minute walkthrough</span>
<h2 class="fmstr-cmp-ffh-vid__h2" id="fmstr-cmp-ffh-vid-h2">Watch the full HTML feedback form built from scratch</h2>
<p class="fmstr-cmp-ffh-vid__sub">Structure, CSS, accessible validation, backend swap. All six steps in one short video.</p>
</div>
<div class="fmstr-cmp-ffh-vid__frame">
<iframe src="https://www.youtube.com/embed/8FC3c5Cv5ew" title="How to make a feedback form in HTML" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p class="fmstr-cmp-ffh-vid__caption">Prefer reading? The full tutorial is below with copy-paste blocks. To skip the backend setup entirely, point the form&rsquo;s <code>action</code> at <a href="https://formester.com/features/html-form-backend/">Formester&rsquo;s HTML form backend</a>.</p>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-ffh-rel a { text-decoration: none !important; }
.fmstr-cmp-ffh-rel {
--c-bg: #f4f4f7; --c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff; --c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-ffh-rel *, .fmstr-cmp-ffh-rel *::before, .fmstr-cmp-ffh-rel *::after { box-sizing: border-box; }
.fmstr-cmp-ffh-rel__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-ffh-rel__head { margin: 0 0 28px; }
.fmstr-cmp-ffh-rel__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; }
.fmstr-cmp-ffh-rel__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; margin: 14px 0 0; }
.fmstr-cmp-ffh-rel__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.fmstr-cmp-ffh-rel__card {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; padding: 18px 20px; display: flex; align-items: center; gap: 14px;
text-decoration: none !important; color: inherit !important; transition: all .15s ease;
}
.fmstr-cmp-ffh-rel__card:hover { border-color: var(--c-edge); box-shadow: var(--c-shadow); transform: translateY(-1px); }
.fmstr-cmp-ffh-rel__icon { width: 40px; height: 40px; border-radius: 10px; background: var(--c-tint); display: grid; place-items: center; flex-shrink: 0; font-size: 18px; border: 1px solid var(--c-edge); }
.fmstr-cmp-ffh-rel__text { flex-grow: 1; }
.fmstr-cmp-ffh-rel__text h4 { font-size: 14.5px; font-weight: 600; color: var(--c-fg-1); margin: 0; }
.fmstr-cmp-ffh-rel__text small { font-size: 12.5px; color: var(--c-fg-3); display: block; margin-top: 2px; }
.fmstr-cmp-ffh-rel__arrow { color: var(--c-violet-500); font-size: 18px; }

@media (max-width: 880px) { .fmstr-cmp-ffh-rel__grid { grid-template-columns: 1fr 1fr; gap: 12px; } }
@media (max-width: 760px) {
.fmstr-cmp-ffh-rel { padding: 40px 16px; }
.fmstr-cmp-ffh-rel__intro { font-size: 15.5px; }
.fmstr-cmp-ffh-rel__card { padding: 16px; gap: 12px; }
}
@media (max-width: 540px) { .fmstr-cmp-ffh-rel__grid { grid-template-columns: 1fr; gap: 12px; } }
</style>

<section class="fmstr-cmp-ffh-rel" aria-labelledby="fmstr-cmp-ffh-rel-h2">
<div class="fmstr-cmp-ffh-rel__container">
<div class="fmstr-cmp-ffh-rel__head">
<h2 class="fmstr-cmp-ffh-rel__h2" id="fmstr-cmp-ffh-rel-h2">More from Formester on HTML forms and feedback</h2>
<p class="fmstr-cmp-ffh-rel__intro">Pair this tutorial with the backend features, ready-made templates, and adjacent how-tos.</p>
</div>
<div class="fmstr-cmp-ffh-rel__grid">

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/features/html-form-backend/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#128229;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>HTML Form Backend</h4><small>One <code>action</code> swap, no server</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/features/embed-forms/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#128279;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>Embed Forms</h4><small>Drop a form into any HTML page</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/features/spam-protection/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#128737;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>Spam Protection</h4><small>Honeypot + reCAPTCHA built in</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/templates/customer-feedback-form-31840/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#11088;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>Customer Feedback Form</h4><small>Pre-built template</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/templates/categories/feedback-forms/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#128196;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>All Feedback Templates</h4><small>Customer, product, employee</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/ai-form-generator/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#10024;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>AI Form Generator</h4><small>The no-code alternative</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/blog/how-to-send-contact-form-data-to-google-sheets-free/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#128203;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>Send form data to Google Sheets</h4><small>Free, step-by-step</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/blog/contact-form-design-tips-best-practices-and-examples/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#127912;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>Contact form design tips</h4><small>Best practices and examples</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

<a class="fmstr-cmp-ffh-rel__card" href="https://formester.com/blog/how-to-build-spam-free-contact-forms-for-your-website/">
<div class="fmstr-cmp-ffh-rel__icon" aria-hidden="true">&#129302;</div>
<div class="fmstr-cmp-ffh-rel__text"><h4>Build spam-free contact forms</h4><small>Stop bots before they hit your inbox</small></div>
<span class="fmstr-cmp-ffh-rel__arrow" aria-hidden="true">&rarr;</span>
</a>

</div>
</div>
</section>
