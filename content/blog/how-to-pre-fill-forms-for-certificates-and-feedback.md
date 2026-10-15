---
slug: "how-to-pre-fill-forms-for-certificates-and-feedback"
title: "How to Auto-Generate Certificates from a Form"
description: "Auto-generate certificates from a form. Design a PDF certificate once, fill in name, course and date, and email it only to people who pass."
metaTitle: "How to Auto-Generate Certificates from a Form | Formester"
metaDescription: "Auto-generate certificates from a form. Design a PDF certificate once, fill in name, course and date, and email it only to people who pass."
keywords: "auto generate certificates, automatic certificate generator, google form certificate generator, certificate of completion form, send certificate automatically after form submission, quiz certificate, pre-fill forms"
author: "Ankit Singhaniya"
authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"
coverImgAlt: "Cover for a guide to auto-generating certificates from a form"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_17_73304fac74.png","width":1214,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://formester.com/blog/how-to-pre-fill-forms-for-certificates-and-feedback/#article","headline":"How to Auto-Generate Certificates from a Form","description":"Auto-generate certificates from a form. Design a PDF certificate once, fill in name, course and date, and email it only to people who pass.","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_17_73304fac74.png","author":{"@type":"Person","name":"Ankit Singhaniya","url":"https://linkedin.com/in/ankitsinghaniyaz"},"publisher":{"@type":"Organization","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},"datePublished":"2025-07-07","dateModified":"2026-10-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://formester.com/blog/how-to-pre-fill-forms-for-certificates-and-feedback/"}},{"@type":"FAQPage","@id":"https://formester.com/blog/how-to-pre-fill-forms-for-certificates-and-feedback/#faq","mainEntity":[{"@type":"Question","name":"Can I use Google Forms to generate certificates?","acceptedAnswer":{"@type":"Answer","text":"Not on its own. Google Forms has no certificate feature, so you need an add-on, either one made for quiz certificates or one that fills a Docs or Slides template from Google Sheets. A form builder with PDFs built in, like Formester, can create and email the certificate without an add-on."}},{"@type":"Question","name":"How do I generate certificates automatically?","acceptedAnswer":{"@type":"Answer","text":"Build a form that collects each person's name, email and course. Design the certificate once in a PDF editor connected to the form, with the name and course filled in from the answers. Then turn on an autoresponder that emails the certificate PDF whenever someone submits."}},{"@type":"Question","name":"How do I send a certificate automatically after someone submits a form?","acceptedAnswer":{"@type":"Answer","text":"In Formester, add an autoresponder to the form, turn on \"Send submitter a copy of their submission\" and set PDF Style to your certificate. Each person then gets an email with their own certificate attached as soon as they submit."}},{"@type":"Question","name":"Can I send a certificate only to people who pass a quiz?","acceptedAnswer":{"@type":"Answer","text":"Yes. Turn on Rules in the certificate autoresponder and set the quiz score to greater than or equal to your passing score, such as 8 out of 10. People below that score don't get the certificate, and you can send them a different email with a link to try again."}},{"@type":"Question","name":"Can I use my own certificate design from Canva, Word or a PDF?","acceptedAnswer":{"@type":"Answer","text":"Yes. Export your design as a PDF and upload it in the PDF Editor, or export it as an image and set it as the page's background image. Then place the name, course and date on top."}},{"@type":"Question","name":"How do I add a unique certificate number and date?","acceptedAnswer":{"@type":"Answer","text":"Use the Submission ID as the certificate number and Submitted At as the issue date. Both come from the submission, so you don't need form fields for them, and every certificate gets its own number."}},{"@type":"Question","name":"How can I create a digital certificate?","acceptedAnswer":{"@type":"Answer","text":"Each certificate is a PDF sent by email, so it is digital from the start. In Formester you can also turn on Sign PDF in the form's settings, which adds a Formester digital signature so anyone who opens the file can see where it came from."}},{"@type":"Question","name":"Is it free to auto-generate certificates?","acceptedAnswer":{"@type":"Answer","text":"Building forms and quizzes in Formester is free. Certificate PDFs, including the PDF Editor and PDF attachments in emails, are part of the Business plan, which costs $45 per month billed yearly."}}]}]}]
createdAt: "2025-07-07T01:37:19.794Z"
updatedAt: "2026-10-15T00:00:00.000Z"
publishedAt: "2025-07-07T01:37:25.227Z"
---

<p>You run a course or a training session, and everyone who finishes expects a certificate. Making each one by hand means typing a name into a template, saving a PDF and emailing it, one person at a time. A form can do all of that for you. When someone submits it, their certificate is filled with their name, course and date and sent to their inbox.</p>

<p>This guide shows how to auto-generate certificates from a form with Formester, including how to send them only to people who pass a quiz. The form works as your automatic certificate generator: the questions, the certificate design and the email live in one place, so there is no spreadsheet or add-on to connect.</p>

<div class="tldr">
<p>Quick answer</p>
<ol>
<li><strong>Build a form</strong> that asks for each person's name, email and course.</li>
<li><strong>Design the certificate once</strong> in the PDF Editor and add the name, course and date with @.</li>
<li><strong>Turn on an autoresponder</strong> that attaches the certificate PDF to its email.</li>
<li><strong>Optional:</strong> add a rule so only people who pass your quiz get one.</li>
</ol>
<p>Certificate PDFs are part of the <a href="/pricing/">Business plan</a>.</p>
</div>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/24cfb96ad207c331_issued-certificate.webp" alt="A certificate of completion for Jordan Reyes, Workplace Safety Training, with the issue date and certificate number filled in from a form submission" width="1440" height="1112" loading="lazy" /></p>

<h2 id="what-to-collect">What your form needs to auto-generate certificates</h2>

<p>A certificate can only show what your form collects, so decide on the fields before you design anything. Put yourself in the attendee's shoes: they type their name once and expect it to print correctly.</p>

<ul>
<li><strong>Full name:</strong> add help text asking for the name as it should appear on the certificate.</li>
<li><strong>Email:</strong> the certificate is sent to this address.</li>
<li><strong>Course, session or event:</strong> a dropdown keeps the spelling the same for everyone. You can also pre-fill it.</li>
<li><strong>Optional extras:</strong> organization, job title or hours completed.</li>
</ul>

<p>You don't need fields for the issue date or a certificate number. Both come from the submission itself.</p>

<h2 id="step-1">Step 1: Build the form or quiz</h2>

<p>Starting from a form close to what you need, like a certificate of completion form for a course, means you only adjust fields instead of building from zero.</p>

<ol>
<li>Pick a template, like the <a href="/templates/course-evaluation-form-25364/">course evaluation form</a>, the <a href="/templates/employee-training-quiz-assessing-key-skills-46228/">employee training quiz</a> or the <a href="/templates/employee-training-webinar-form-6595/">training webinar form</a>. You can also describe your form to the <a href="/ai-form-generator/">AI form generator</a>.</li>
<li>Add the name, email and course fields from the list above.</li>
<li>If people must pass a test to earn the certificate, make it a <a href="/blog/how-to-create-a-scored-quiz/">scored quiz</a> and give each question points.</li>
</ol>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/ec71574d47737865_certificate-form.webp" alt="A Workplace Safety Training completion quiz in the Formester form builder with full name, email, course and completion date fields above the first quiz question" width="1440" height="1170" loading="lazy" /></p>

<h2 id="step-2">Step 2: Design the certificate in the PDF Editor</h2>

<p>You design the certificate once. After that, every submission gets its own copy with that person's details filled in. It's the same PDF Editor Formester uses to <a href="/features/document-generation/">generate PDFs from form submissions</a> like contracts and invoices.</p>

<h3>Start from your own design or a blank page</h3>

<p>If you already have a certificate design from Canva, Word or a designer, keep it. Export it as a PDF, or as a PNG or JPG image.</p>

<ol>
<li>Open the <strong>PDF Editor</strong> tab on your form.</li>
<li>Choose <strong>Upload PDF</strong> to use your certificate PDF as the page, or start from scratch for a blank page.</li>
<li>If you started blank and your design is an image, you'll add it as the background in the next step.</li>
</ol>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/06ba17c2d44861a9_pdf-editor-start-options.webp" alt="The Formester PDF Editor asking how to create the PDF: start from scratch, upload PDF, or create with AI" width="1280" height="545" loading="lazy" /></p>

<h3>Set the page to landscape</h3>

<p>Most certificates are wider than they are tall, so set up the page before you place anything. An uploaded PDF keeps its own page size, so you can skip this if you uploaded one.</p>

<ol>
<li>Open <strong>PDF settings</strong>.</li>
<li>Pick a <strong>Size</strong>: Letter, A4 or A5.</li>
<li>Set <strong>Page layout</strong> to <strong>Landscape</strong>.</li>
<li>Upload your artwork under <strong>Background image</strong>, or pick a <strong>Background color</strong>. Adjust the margins so text stays inside the border.</li>
</ol>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/31d6526a74e8d1a6_certificate-pdf-settings.webp" alt="PDF settings in the Formester PDF Editor with Letter size, Landscape page layout and a certificate background image" width="1440" height="1052" loading="lazy" /></p>

<h3>Add each person's name, course and date</h3>

<p>Type @ in a text element to insert an answer from the form. Each certificate then shows that person's answer in its place. This is called <a href="/features/information-recall/">@ recall</a>.</p>

<ol>
<li>Add a <strong>Text</strong> element, type @ and pick <strong>Full name</strong>. Make it large, choose a serif font and center it.</li>
<li>Add a second text element with the words for completing, followed by @ and your course field.</li>
<li>For the issue date, add a text element, type @ and pick <strong>Submitted At</strong>.</li>
<li>For a certificate number, do the same with <strong>Submission ID</strong>. Every submission has its own ID, so no two certificates share a number. It's a long ID, so give it a wide text box.</li>
<li>Add your logo and a signature image as <strong>Image</strong> elements.</li>
</ol>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/0af88204a3459587_certificate-recall-fields.webp" alt="The @ recall menu open on the name line of a certificate in the Formester PDF Editor, listing form fields like Full name, Email and Course" width="1440" height="868" loading="lazy" /></p>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/849d34fefd628014_pdf-editor-certificate-layout.webp" alt="The Formester PDF Editor with a landscape certificate of completion: Full name and Course placed from the form, date issued and certificate number boxes, and PDF settings set to Letter and Landscape" width="1440" height="868" loading="lazy" /></p>

<h2 id="step-3">Step 3: Email each certificate automatically</h2>

<p>People expect their certificate right after they finish, so send it automatically. An <a href="/features/autoresponder-email/">autoresponder</a> emails it the moment the form is submitted. You need at least one submission before you can add an autoresponder, so submit a test entry first.</p>

<ol>
<li>Open the <strong>Automate</strong> tab, choose <strong>Autoresponder</strong> and click <strong>Add Autoresponder</strong>.</li>
<li>Set <strong>Email Field</strong> to the email question on your form.</li>
<li>Write the <strong>Email Subject</strong> and <strong>Email Body</strong>. Type @ to add the person's name and course.</li>
<li>Turn on <strong>Send submitter a copy of their submission</strong>.</li>
<li>Set <strong>PDF Style</strong> to your certificate.</li>
<li>Under <strong>File Name</strong>, type Certificate and then @ with the name field, so each file is named after the person.</li>
</ol>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/206d35bd4c2deb35_autoresponder-attach-certificate.webp" alt="A Formester autoresponder set to email the certificate, with the email field selected, the course in the subject, PDF Style set to the certificate and the person's name in the file name" width="1440" height="742" loading="lazy" /></p>

<p>You can also:</p>

<ul>
<li><strong>Keep a copy of every certificate:</strong> <a href="/integrations/google-drive/">save each one to Google Drive</a>.</li>
<li><strong>Show the file came from you:</strong> in <strong>Form settings</strong>, open <strong>PDF</strong> and turn on <strong>Sign PDF</strong>. It adds a Formester digital signature, so anyone who opens the file can see where it came from.</li>
</ul>

<h2 id="step-4">Step 4 (optional): Send certificates only to people who pass</h2>

<p>For compliance or safety training, a certificate should mean the person passed. Without a check, everyone who submits the quiz gets one. Autoresponder <strong>Rules</strong> let you send the email only when every condition is met, such as a minimum quiz score.</p>

<ol>
<li>Open the certificate autoresponder and turn on <strong>Rules</strong>.</li>
<li>Pick the quiz <strong>score</strong> and set it to greater than or equal to 8 (on a 10-point quiz). If your quiz uses outcomes, check for your passing outcome instead.</li>
<li>Save. People who score 8 or more get the certificate, and people below 8 don't.</li>
<li>Optional: add a second autoresponder with the opposite rule (score less than 8) and a link back to the quiz, so people can try again.</li>
</ol>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/386749221a285d5d_workflow-score-condition.webp" alt="An autoresponder rule in Formester that sends the certificate only when the quiz score is greater than or equal to 8" width="1440" height="1029" loading="lazy" /></p>

<p>You can type @ in the email body to include the person's score in the message. The certificate itself shows their name, course, date and certificate number.</p>

<h2 id="step-5">Step 5: Test, publish and re-send when needed</h2>

<p>Check one certificate yourself before anyone else gets one. A name that runs off the edge is easy to fix now and awkward after it's sent.</p>

<ol>
<li>Submit the form with your own name and email. If you added a rule, pass the quiz.</li>
<li>Open the email and the PDF. Check that the name and ID fit, the date reads correctly and nothing overlaps the artwork.</li>
<li>Move or resize any text in the PDF Editor, then publish the form.</li>
</ol>

<p>If someone loses their certificate later, open <strong>Results</strong>, select their submission, open <strong>More</strong> and choose <strong>Download PDFs</strong>. If they misspelled their name, choose <strong>Edit</strong> to fix the submission first. The PDF is created from the current answers each time you download it, so the new copy has the corrected name.</p>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/2f72ae3446641eb1_results-download-pdfs.webp" alt="Formester Results with submissions selected and the More menu open, showing Download PDFs and Edit" width="1440" height="634" loading="lazy" /></p>

<h2 id="pre-fill">Pre-fill names and course details</h2>

<p>If you already have a list of attendees, <a href="/features/pre-fill-fields/">pre-filling form fields</a> keeps each certificate matching your records and saves people some typing. Open the gear icon for <strong>Form settings</strong> and choose <strong>Prefill</strong>.</p>

<ul>
<li><strong>Manual prefill:</strong> fill in fields, like the course name, before you share the form. Everyone who opens the link sees them already filled in. To give each attendee a link with their own name and email, <a href="/blog/how-to-pre-fill-form-fields-by-url-parameters/">pre-fill fields with URL parameters</a>.</li>
<li><strong>Auto-fill via API:</strong> pull details from your CRM or another system when the form opens. See <a href="/features/auto-fill-forms-with-external-data/">auto-fill forms with external data</a>.</li>
</ul>

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/f1ab2bd74bda206a_prefill-settings.webp" alt="Formester form settings with the Prefill section open, showing Manual prefill and Auto-fill via API" width="1440" height="914" loading="lazy" /></p>

<h2 id="certificate-types">Certificates you can issue this way</h2>

<p>Each submission creates its own certificate, so one form can issue certificates to everyone who completes it, whether that's a class of ten or a webinar audience of hundreds.</p>

<ul>
<li><strong>Course or training completion:</strong> sent when a learner submits the final form or quiz.</li>
<li><strong>Webinar attendance:</strong> share a short form at the end of the webinar that asks for name and email.</li>
<li><strong>Event participation:</strong> add it to your event feedback form, so people get their certificate when they share feedback.</li>
<li><strong>Compliance and safety training:</strong> send it only to people who reach the passing score.</li>
<li><strong>Workshop or CPD hours:</strong> pre-fill the hours or ask for them, and print them on the certificate with @.</li>
<li><strong>Volunteer recognition:</strong> a thank-you certificate for everyone who logs their volunteer hours.</li>
</ul>

<h2 id="google-forms">Doing this in Google Forms instead?</h2>

<p>Google Forms doesn't have a built-in certificate generator. If your quiz already lives there, people usually choose one of these routes:</p>

<ul>
<li><strong>A quiz certificate add-on</strong> such as Certify'em, which emails a PDF certificate after someone takes the quiz.</li>
<li><strong>A template merge:</strong> responses go to Google Sheets, and an add-on like Autocrat or <a href="/blog/form-publisher-for-google-forms/">Form Publisher</a> fills a Google Docs or Slides template for each response and sends it.</li>
</ul>

<p>The template-merge route compared with Formester:</p>

<div class="table-wrap">
<table>
<thead><tr><th></th><th>Google Forms with a merge add-on</th><th>Formester</th></tr></thead>
<tbody>
<tr><td>Tools involved</td><td>Google Forms, Google Sheets, a Docs or Slides template and an add-on</td><td>One form</td></tr>
<tr><td>Where the certificate design lives</td><td>A separate Docs or Slides file</td><td>The form's PDF Editor</td></tr>
<tr><td>Send only to people who pass</td><td>Depends on the add-on</td><td>Yes, with a rule on the quiz score</td></tr>
<tr><td>Certificate number</td><td>You add a column for it</td><td>Submission ID, added for you</td></tr>
<tr><td>Download a copy later</td><td>From the files saved in Google Drive</td><td>From Results, at any time</td></tr>
</tbody>
</table>
</div>

<p>If your Google Forms setup already works, there's no need to change it. If you'd rather manage one tool than four, build the form in Formester and keep the form, the certificate and the email together.</p>

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Send your next certificate automatically</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Design the certificate once, and everyone who completes your form gets their own copy by email. Certificate PDFs are part of the Business plan.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Build your certificate form</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Forms are free · Certificate PDFs on Business, $45/mo billed yearly</p>
</div>

<section class="faq">
<h2>Frequently asked questions</h2>
<details><summary>Can I use Google Forms to generate certificates?</summary><div>Not on its own. Google Forms has no certificate feature, so you need an add-on, either one made for quiz certificates or one that fills a Docs or Slides template from Google Sheets. A form builder with PDFs built in, like Formester, can create and email the certificate without an add-on.</div></details>
<details><summary>How do I generate certificates automatically?</summary><div>Build a form that collects each person's name, email and course. Design the certificate once in a PDF editor connected to the form, with the name and course filled in from the answers. Then turn on an autoresponder that emails the certificate PDF whenever someone submits.</div></details>
<details><summary>How do I send a certificate automatically after someone submits a form?</summary><div>In Formester, add an autoresponder to the form, turn on "Send submitter a copy of their submission" and set PDF Style to your certificate. Each person then gets an email with their own certificate attached as soon as they submit.</div></details>
<details><summary>Can I send a certificate only to people who pass a quiz?</summary><div>Yes. Turn on Rules in the certificate autoresponder and set the quiz score to greater than or equal to your passing score, such as 8 out of 10. People below that score don't get the certificate, and you can send them a different email with a link to try again.</div></details>
<details><summary>Can I use my own certificate design from Canva, Word or a PDF?</summary><div>Yes. Export your design as a PDF and upload it in the PDF Editor, or export it as an image and set it as the page's background image. Then place the name, course and date on top.</div></details>
<details><summary>How do I add a unique certificate number and date?</summary><div>Use the Submission ID as the certificate number and Submitted At as the issue date. Both come from the submission, so you don't need form fields for them, and every certificate gets its own number.</div></details>
<details><summary>How can I create a digital certificate?</summary><div>Each certificate is a PDF sent by email, so it is digital from the start. In Formester you can also turn on Sign PDF in the form's settings, which adds a Formester digital signature so anyone who opens the file can see where it came from.</div></details>
<details><summary>Is it free to auto-generate certificates?</summary><div>Building forms and quizzes in Formester is free. Certificate PDFs, including the PDF Editor and PDF attachments in emails, are part of the Business plan, which costs $45 per month billed yearly.</div></details>
</section>
