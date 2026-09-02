---
slug: "google-form-auto-filler"
title: "Google Form Auto Filler: Pre-fill Links vs Extensions"
description: "A Google Form auto filler is either a link that opens the form with answers already in it, or a browser tool that types your saved details into a form someone sent you. This guide walks through Google's built-in pre-fill link and the entry IDs behind it. It then covers the Chrome extensions for filling forms you were sent and answers the bot question. The last section shows where pre-fill stops."
metaTitle: "Google Form Auto Filler: Pre-fill Links vs Extensions"
metaDescription: "Auto-fill a Google Form with Google's pre-fill link or a Chrome extension. What each does and where it stops, plus how to make one link per person."
keywords: "google form auto filler, google forms auto filler, prefill google form, autofill google forms, google form autofill, google form prefilled link, google form filler bot"
author: "Ankit Singhaniya"
authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"
coverImgAlt: "Cover art for a guide to auto-filling Google Forms with pre-fill links and extensions"
featured: false
coverImg: {"url":"placeholder://google-form-auto-filler-cover","width":1200,"height":630}
metaImage: []
jsonld: [{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I automatically fill in a Google Form?", "acceptedAnswer": {"@type": "Answer", "text": "Open the form in the editor, click the three-dot menu in the top right, choose Pre-fill form, enter the answers you want, and click Get link. Anyone who opens the link sees those answers already filled in and can still change them before submitting."}}, {"@type": "Question", "name": "Is there a bot that can automatically fill out Google Forms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A script can open a form and submit it with set values as many times as you like. It can break when the form's questions change, and using one on a form you do not own goes against Google's terms of service. For your own form, a pre-filled link or the linked response sheet covers most common needs."}}, {"@type": "Question", "name": "Can respondents change pre-filled answers?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A pre-filled link only sets the starting value of a field. The respondent can edit or clear it before submitting. Google Forms has no setting that locks a pre-filled value in place."}}, {"@type": "Question", "name": "Does a pre-filled link work on mobile?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. It is an ordinary link, so it opens the form with the answers already filled in in any mobile browser. Browser extensions such as Google Forms Auto Filler run on desktop Chrome only, which is one reason a link is the better option when you own the form."}}, {"@type": "Question", "name": "Why is my pre-filled link not filling the answers?", "acceptedAnswer": {"@type": "Answer", "text": "Common causes are a question that was deleted and added back, which gives it a new entry ID; a multiple choice value that does not match an option word for word; or a special character that was not URL-encoded. Generate a fresh link in the editor and compare its entry numbers with the old link."}}, {"@type": "Question", "name": "Can I pre-fill a Google Form from a spreadsheet?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Create one link per row. First generate one pre-filled link to learn the entry IDs, then build the URL in a formula with ENCODEURL around each cell value and drag the formula down. Each row gets a link that opens the form with that row's details already filled in."}}]}]
createdAt: "2026-09-01T00:00:00.000Z"
updatedAt: "2026-09-01T12:00:00.000Z"
publishedAt: "2026-09-01T00:00:00.000Z"
---

![Cover art for a guide to auto-filling Google Forms with pre-fill links and extensions](placeholder://google-form-auto-filler-cover)
<!-- IMAGE: cover per cover-design layout A, title "Auto-Fill a Google Form" with Auto-Fill in orange, UI card showing a form with three fields already populated and a link bar above it -->

<p style="font-size: inherit;">A Google Form auto filler can mean two things. It can be a link with answers already filled in, or a browser tool that fills in your saved details. Which one you need depends on whether you made the form or you are filling it out. If you made the form, use the link. If someone sent you the form, use the tool. This guide covers both, plus the scripts people use to submit forms automatically.</p>

<div class="tldr">
<p><strong>Quick answer</strong></p>
<ul>
<li><strong>You made the form:</strong> use the built-in <strong>Pre-fill form</strong> option. It gives you a link with your chosen answers already filled in.</li>
<li><strong>You were sent the form:</strong> a Chrome extension such as Google Forms Auto Filler or QuickFill can fill in details you saved.</li>
<li><strong>You want a bot:</strong> scripts can submit forms automatically, but they can break when the form changes. Using one on a form you do not own is against Google's terms.</li>
</ul>
</div>

<h2>What does auto filler mean for a Google Form?</h2>

<p>If you own the form, auto filling means sending it with some answers already filled in. You may already know the person's name, email, or booking reference, so you put those details in the link and they only fill in what you do not know. Google Forms does this with a pre-filled link, and that is usually what people mean when they search for a Google Forms auto filler.</p>
<p>If you are filling out someone else's form, auto filling means a browser extension that stores your details once and types them into forms for you. That saves you from entering your name and email again and again. The extension can only fill details it already knows, so it cannot answer the form's actual questions.</p>
<p>Read the section that matches your situation. The bot question near the end applies to both.</p>

<h2>How to send a Google Form with answers already filled in</h2>

<p>Pre-filling saves people from typing information you already have. It also helps keep those answers consistent. Google Forms has this built in, so you do not need to install anything.</p>
<ol class="steps">
<li>
<h3>Open the form in the editor</h3>
<p>Go to forms.google.com and open the form you want to send. You need edit access, not just the link people use to submit responses.</p>
</li>
<li>
<h3>Choose Pre-fill form</h3>
<p>Click the three-dot <strong>More</strong> menu in the top right and select <strong>Pre-fill form</strong>. Google Forms opens a version of the form where anything you type becomes a starting answer.</p>
<p><img src="placeholder://google-form-auto-filler-1" alt="Google Forms editor with the More menu open and the Pre-fill form option highlighted"></p>
<!-- IMAGE: Google Forms editor, three-dot More menu open in the top right, Pre-fill form highlighted -->
</li>
<li>
<h3>Type the answers you want filled in</h3>
<p>Fill only the fields you want to pre-fill and leave the rest empty. For multiple choice and dropdown questions, use the exact option text. The link matches the answer word for word.</p>
<p><img src="placeholder://google-form-auto-filler-2" alt="The Pre-fill form view with a name typed into the first question and the Get link button at the bottom"></p>
<!-- IMAGE: Pre-fill form view, one answer typed into the first question, Get link button visible at the bottom -->
</li>
<li>
<h3>Get the link</h3>
<p>Click <strong>Get link</strong> at the bottom, then copy the link Google shows at the top. Anyone who opens it will see your answers already filled in. You can send it by email, add it to a calendar invite, or paste it into a message.</p>
</li>
</ol>
<div class="note"><p>Respondents can still change any pre-filled answer. The link only sets a starting value. It does not lock the field.</p></div>

<h2>How do the entry IDs in a pre-filled link work?</h2>

<p>Open the link you copied and look at the end of the URL. Google adds something like this:</p>
<p><code>?usp=pp_url&amp;entry.1234567890=Priya+Sharma&amp;entry.987654321=Marketing</code></p>
<p><img src="placeholder://google-form-auto-filler-3" alt="A pre-filled Google Form URL in the browser address bar with the entry ID and value highlighted"></p>
<!-- IMAGE: browser address bar showing a pre-filled URL, annotate the usp=pp_url part and one entry.NNNN=value pair -->
<p>Each <code>entry.</code> number is the ID for a question. The text after the equals sign is the answer. The ID stays the same as long as the question exists, so you can change the answers by hand without opening the form editor again.</p>
<p>Spaces become a plus sign or <code>%20</code>. Other special characters need URL encoding. Otherwise, the answer may not show up correctly.</p>

<h3>Make one link per person from a Google Sheet</h3>

<p>Creating a link for each person gets tedious pretty quickly. If their details are already in a spreadsheet, you can create the links with a formula.</p>
<ol>
<li>Generate one pre-filled link the normal way and paste it into a cell. Note which entry number belongs to each column.</li>
<li>In a new column, build the link with a formula. With the base URL in A1 and the person's name and team in B2 and C2, use: <code>=A1&amp;"?usp=pp_url&amp;entry.1234567890="&amp;ENCODEURL(B2)&amp;"&amp;entry.987654321="&amp;ENCODEURL(C2)</code></li>
<li>Drag the formula down. Each row gets its own link, and ENCODEURL handles spaces and symbols for you.</li>
</ol>
<p><img src="placeholder://google-form-auto-filler-4" alt="A Google Sheet with a name column, a team column, and a formula column building one pre-filled link per row"></p>
<!-- IMAGE: Google Sheet, columns for base URL, name, team, and a Link column with the ENCODEURL formula filled down -->
<p>This is the closest thing Google Forms has to a mail merge. It works, but watch the entry numbers. One wrong digit can send a value to the wrong field.</p>

<h2>Which extensions auto-fill Google Forms for you?</h2>

<p>If you fill out Google Forms that other people send you, a pre-fill link does not help because you do not control the form. A browser extension can fill in details you saved once.</p>
<p>Google Forms Auto Filler, on the Chrome Web Store, matches saved details such as your name and email to fields on a Google Form. QuickFill is an open-source extension on GitHub. You save a profile once, then click to fill. If it guesses a field wrong, you can undo it. QuickFill is installed through Chrome's developer mode instead of the Web Store, so setup takes a few extra steps.</p>
<p>Both extensions fill in details you saved. If an extension does not recognize a question, it leaves it empty. Check the form before you submit.</p>
<div class="table-wrap">
<table>
<thead><tr><th></th><th>Pre-filled link</th><th>Browser extension</th><th>Script or bot</th></tr></thead>
<tbody>
<tr><td>Who sets it up</td><td>The form owner</td><td>The person filling it</td><td>Whoever writes it</td></tr>
<tr><td>What it fills</td><td>Values you choose, per link</td><td>Details the extension has saved</td><td>Anything the script is told to</td></tr>
<tr><td>Works on a phone</td><td>Yes, it is a link</td><td>Desktop Chrome only for the two above</td><td>Depends on where it runs</td></tr>
<tr><td>Still works when the form changes</td><td>Breaks if a question is deleted and re-added</td><td>Usually</td><td>Breaks on layout changes</td></tr>
</tbody>
</table>
</div>

<h2>Is there a bot that fills out Google Forms automatically?</h2>

<p>Yes. A script written in Apps Script, Python, or a browser automation tool can open a Google Form and submit it with the values you give it.</p>
<p>The problem is that scripts depend on the form's questions or positions. If the form changes, the script can break. And using a script to submit responses to a form you do not own is against Google's terms of service. The form owner can also report it as abuse.</p>
<p>If you want people's details filled in before they open the form, use a pre-filled link. If you already have their details in a spreadsheet, you can also add them directly to the linked response sheet.</p>

<h2>Where Google's pre-fill stops</h2>

<p>A pre-filled link works when you already know the answers. It cannot look up or decide anything when the form opens.</p>
<ul>
<li>It fills fixed values only. The link cannot look anything up when it opens, so it cannot pull today's booking from your calendar or a respondent's current plan from your CRM.</li>
<li>Entry IDs are copied by hand. There is no field name to type; you get the number by creating a pre-filled link and reading the URL.</li>
<li>Deleting a question and adding it back gives it a new ID. Any old link that uses the old ID leaves that field blank.</li>
<li>There are no rules. You cannot fill the department from the email domain or skip a section because a value was pre-filled.</li>
<li>File upload questions cannot be pre-filled.</li>
</ul>

<h2>Where Formester fits</h2>

<p>Formester covers these gaps. Its <a href="/features/pre-fill-fields/">pre-fill fields</a> use the field label in the link instead of an entry ID. For example, a link that fills the name field can use <code>?name=Priya</code>. You can write the link without generating it first.</p>
<p>The values stay editable, just like Google's. The respondent only fills in what is missing. The full walkthrough is in <a href="/blog/how-to-pre-fill-form-fields-by-url-parameters/">pre-fill form fields by URL parameters</a>.</p>
<p>If you need to look up information when the form opens, you can <a href="/features/auto-fill-forms-with-external-data/">pull it from Airtable, Google Sheets, or Notion</a>. Once the respondent enters a trigger value, the matching details are added to the other fields. Each time the form opens, the data is fetched again, so the form can show current information instead of an old value saved in the link.</p>

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Send a form that already knows who is filling it</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Pre-fill fields by name in the link, or pull the respondent's record from Airtable, Google Sheets, or Notion the moment the form opens.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever · No credit card · 56,000+ teams</p>
</div>

<h2>Related reading</h2>

<ul>
<li><a href="/blog/how-to-link-google-sheets-to-google-forms/">Link Google Sheets to Google Forms</a>, where the response sheet used by the formula above comes from.</li>
<li><a href="/blog/google-forms-webhooks/">Google Forms webhooks</a>, for sending each response somewhere else as soon as it arrives.</li>
<li><a href="/blog/captcha-for-google-forms/">CAPTCHA for Google Forms</a>, if the bot question brought you here because your form is being hit.</li>
</ul>

<section class="faq">
<h2>Google Form auto filler FAQ</h2>
<details><summary>How do I automatically fill in a Google Form?</summary><div>Open the form in the editor, click the three-dot menu in the top right, choose Pre-fill form, enter the answers you want, and click Get link. Anyone who opens the link sees those answers already filled in and can still change them before submitting.</div></details>
<details><summary>Is there a bot that can automatically fill out Google Forms?</summary><div>Yes. A script can open a form and submit it with set values as many times as you like. It can break when the form's questions change, and using one on a form you do not own goes against Google's terms of service. For your own form, a pre-filled link or the linked response sheet covers most common needs.</div></details>
<details><summary>Can respondents change pre-filled answers?</summary><div>Yes. A pre-filled link only sets the starting value of a field. The respondent can edit or clear it before submitting. Google Forms has no setting that locks a pre-filled value in place.</div></details>
<details><summary>Does a pre-filled link work on mobile?</summary><div>Yes. It is an ordinary link, so it opens the form with the answers already filled in in any mobile browser. Browser extensions such as Google Forms Auto Filler run on desktop Chrome only, which is one reason a link is the better option when you own the form.</div></details>
<details><summary>Why is my pre-filled link not filling the answers?</summary><div>Common causes are a question that was deleted and added back, which gives it a new entry ID; a multiple choice value that does not match an option word for word; or a special character that was not URL-encoded. Generate a fresh link in the editor and compare its entry numbers with the old link.</div></details>
<details><summary>Can I pre-fill a Google Form from a spreadsheet?</summary><div>Yes. Create one link per row. First generate one pre-filled link to learn the entry IDs, then build the URL in a formula with ENCODEURL around each cell value and drag the formula down. Each row gets a link that opens the form with that row's details already filled in.</div></details>
</section>
