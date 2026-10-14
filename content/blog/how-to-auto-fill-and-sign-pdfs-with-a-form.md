---
slug: "how-to-auto-fill-and-sign-pdfs-with-a-form"
title: "How to Auto-Fill a PDF From a Form (and Add a Signature)"
description: "Auto-fill a PDF from form answers: upload your PDF, place each answer and the signature once, and every submission creates a filled, signed copy."
metaTitle: "Auto Fill PDF From a Form: Fill and Sign Automatically"
metaDescription: "Auto-fill a PDF from form answers: upload your PDF, place each answer and the signature once, and every submission creates a filled, signed copy."
keywords: "auto fill pdf, autofill pdf, auto populate pdf from form, autofill pdf form, sign pdf form"
author: "Ankit Singhaniya"
authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"
coverImgAlt: "Cover for a guide to auto-filling a PDF from a form and adding a signature"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_16_5cf9930958.png","width":1214,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://formester.com/blog/how-to-auto-fill-and-sign-pdfs-with-a-form/#article","headline":"How to Auto-Fill a PDF From a Form (and Add a Signature)","description":"Auto-fill a PDF from form answers: upload your PDF, place each answer and the signature once, and every submission creates a filled, signed copy.","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_16_5cf9930958.png","author":{"@type":"Person","name":"Ankit Singhaniya","url":"https://linkedin.com/in/ankitsinghaniyaz"},"publisher":{"@type":"Organization","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},"datePublished":"2025-07-07","dateModified":"2026-10-14","mainEntityOfPage":{"@type":"WebPage","@id":"https://formester.com/blog/how-to-auto-fill-and-sign-pdfs-with-a-form/"}},{"@type":"FAQPage","@id":"https://formester.com/blog/how-to-auto-fill-and-sign-pdfs-with-a-form/#faq","mainEntity":[{"@type":"Question","name":"How do I make a PDF auto-fill?","acceptedAnswer":{"@type":"Answer","text":"It depends on whose details go in. To reuse your own details, Acrobat Reader and most browsers can remember what you typed before. To fill a PDF with other people's answers, collect them in an online form and connect your PDF to it, so each submission creates a filled copy."}},{"@type":"Question","name":"Can I auto-fill a PDF that isn't fillable?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you place the answers yourself. In Formester's PDF Editor, the PDF you upload is the background and you drop each answer where it belongs, so the file doesn't need fillable fields. It also works on scanned forms."}},{"@type":"Question","name":"Can I auto-fill a PDF from Excel or Google Sheets?","acceptedAnswer":{"@type":"Answer","text":"Formester fills one PDF per form submission, not one per spreadsheet row. If you already have someone's details, you can pre-fill the form with them through a link, so the person only checks the answers and signs."}},{"@type":"Question","name":"Can AI fill out a PDF for me?","acceptedAnswer":{"@type":"Answer","text":"AI tools can read a PDF and suggest what goes in each field, but you still need to check every answer. Formester uses AI differently: you can describe a document and it drafts a PDF template for you, which is then filled with real form answers."}},{"@type":"Question","name":"Is a signature drawn on a form legally binding?","acceptedAnswer":{"@type":"Answer","text":"Electronic signatures are accepted for many everyday agreements, for example under the US ESIGN Act and the EU eIDAS rules. Requirements depend on the document type and country, so check with a lawyer for anything high stakes."}},{"@type":"Question","name":"Can both parties sign the same PDF?","acceptedAnswer":{"@type":"Answer","text":"The person who fills in the form signs it. If you also need to sign, add your signature to the PDF template once, or sign the finished copy in your PDF reader."}},{"@type":"Question","name":"Why does my PDF auto-fill with old answers?","acceptedAnswer":{"@type":"Answer","text":"That is usually your browser or PDF reader remembering earlier entries. Turn off form autofill in your browser settings, or switch off auto-complete in your PDF reader's forms preferences."}},{"@type":"Question","name":"Which plan do I need?","acceptedAnswer":{"@type":"Answer","text":"Building the form and collecting signatures works on every Formester plan. The PDF Editor and filled PDFs are part of the Business plan."}}]}]}]
createdAt: "2025-07-07T00:46:27.635Z"
updatedAt: "2026-10-14T00:00:00.000Z"
publishedAt: "2025-07-07T01:02:26.108Z"
---

![Cover for a guide to auto-filling a PDF from a form and adding a signature](https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_16_5cf9930958.png)

<p>You send a client a contract PDF, they print it, fill it in, sign it and scan it back, or you retype their answers into the PDF yourself. An auto-fill PDF setup removes that loop. The client fills in a short online form and signs on screen, and your PDF is filled in and signed for them.</p>

<p>This guide shows how to auto-fill a PDF from form answers with Formester, including the signature, and where the finished copy goes. If you want to fill your own details into a PDF faster, the table below points you to the right tool instead.</p>

<div class="tldr">
<p>Quick answer</p>
<ul>
<li><strong>Build a form</strong> with a field for each blank on your PDF and a signature field.</li>
<li><strong>Upload your PDF</strong> in the form's PDF Editor and drag each answer and the signature into place.</li>
<li><strong>Publish the form.</strong> Every submission creates a filled, signed PDF you can email, save to Google Drive or let people download.</li>
</ul>
</div>

<h2 id="ways-to-auto-fill">Ways to auto-fill a PDF</h2>

<p>People mean different jobs when they say auto-fill a PDF. Find yours first, because each one needs a different tool.</p>

<div class="table-wrap">
<table>
<thead><tr><th>Your situation</th><th>Whose details</th><th>Needs fillable fields?</th><th>Signature?</th><th>Best tool</th></tr></thead>
<tbody>
<tr><td>You fill the same kind of PDF often</td><td>Yours</td><td>Yes</td><td>You add it</td><td>Your PDF reader or browser autofill</td></tr>
<tr><td>You have a spreadsheet and need one PDF per row</td><td>Already in a sheet</td><td>Usually</td><td>No</td><td>A mail merge or bulk-fill tool</td></tr>
<tr><td>Clients, staff or students give you their details</td><td>Theirs, collected in a form</td><td>No</td><td>Yes, drawn on the form</td><td>A form connected to your PDF (this guide)</td></tr>
</tbody>
</table>
</div>

<h2 id="how-to">How to auto-fill a PDF from a form</h2>

<p>You set this up once per document. After that, every response fills a fresh copy, so nobody retypes anything.</p>

<ol class="steps">
<li><h3>Build the form</h3><p>Add a field for every blank on your PDF, plus a <strong>Signature</strong> field. For a freelance contract that means client name, email, company, project, start date and fee. The signature field lets people draw their signature with a mouse, trackpad or finger.</p><p><img src="/images/blog/auto-fill-pdf/form-with-signature.webp" alt="A Formester form for a freelance contract with name, project, date, fee and a signature field" width="1280" height="1440" loading="lazy" /></p></li>
<li><h3>Upload your PDF</h3><p>Open the <strong>PDF Editor</strong> tab on the form and choose <strong>Upload PDF</strong>. Every page of your file is kept at its own size. You can also start from scratch or describe the document and let AI draft it.</p><p><img src="/images/blog/auto-fill-pdf/pdf-editor-start-options.webp" alt="The Formester PDF Editor asking how to create the PDF: start from scratch, upload PDF, or create with AI" width="1280" height="545" loading="lazy" /></p></li>
<li><h3>Place each answer</h3><p>Open the <strong>Form fields</strong> tab and drag each field onto the line where its answer belongs. For text you write yourself, add a text box and type @ to insert an answer inside a sentence, like a greeting with the client's name.</p><p><img src="/images/blog/auto-fill-pdf/pdf-editor-place-fields.webp" alt="Form fields placed on an uploaded contract PDF in the Formester PDF Editor, with a signature box on the signature line" width="1280" height="980" loading="lazy" /></p></li>
<li><h3>Place the signature</h3><p>Drag the <strong>Signature</strong> field onto the signature line and size the box. Each person's drawn signature is printed inside it.</p></li>
<li><h3>Test it</h3><p>Submit a test response, then use <strong>Download PDF</strong> and choose <strong>With submission</strong> to see a filled copy. Move any box that sits off its line, then publish the form.</p></li>
</ol>

<figure><img src="/images/blog/auto-fill-pdf/blank-vs-filled-contract.webp" alt="A blank freelance services agreement next to the same PDF filled in automatically with a client's form answers and their drawn signature" width="1640" height="860" loading="lazy" /><figcaption>Left: the PDF you upload. Right: the same PDF after one form submission.</figcaption></figure>

<div class="note"><p>Your PDF doesn't need fillable fields. It works as the background, and the answers are printed on top where you placed them, so a flat or scanned PDF works too. Any fillable fields already in the file are not filled for you, so place the answers over them.</p></div>

<h2 id="what-it-fills">What the PDF can include</h2>

<p>Most answers from the form can go onto the PDF:</p>

<ul>
<li><strong>Text answers:</strong> names, emails, addresses, numbers, dates and calculated totals.</li>
<li><strong>Choices:</strong> as text, or as a tick in each option's box on your PDF.</li>
<li><strong>Tables:</strong> repeating rows, like line items, and grid questions.</li>
<li><strong>Uploads:</strong> photos or images people attach to the form.</li>
<li><strong>Signature:</strong> the drawn signature, inside the box you placed.</li>
<li><strong>Submission details:</strong> the submission ID and the date it was sent.</li>
</ul>

<h2 id="where-it-goes">Where the filled PDF goes</h2>

<p>A filled PDF is only useful if it reaches the right person. Pick one or more of these in the form's settings:</p>

<ul>
<li><strong>To the signer:</strong> attach it to the <a href="/features/autoresponder-email/">autoresponder</a> email, so they get their signed copy right away.</li>
<li><strong>To you:</strong> attach it to your <a href="/features/email-notification-for-form-submission/">submission notification</a>.</li>
<li><strong>To your files:</strong> save each one to <a href="/integrations/google-drive/">Google Drive</a>, named with answers like the client's name.</li>
<li><strong>As a download:</strong> show a download button after the person submits.</li>
<li><strong>To other apps:</strong> include a link to the PDF in <a href="/features/workflows/">workflow</a> emails or webhooks. Webhook links work for 7 days.</li>
<li><strong>All at once:</strong> select submissions in Results and download their PDFs together.</li>
</ul>

<p><img src="/images/blog/auto-fill-pdf/pdf-settings.webp" alt="Formester PDF settings with Let respondents download a PDF turned on and the default PDF type set to Connected PDF" width="1280" height="794" loading="lazy" /></p>

<p>If you don't need your own layout, <a href="/features/form-to-pdf/">Form to PDF</a> gives you a ready-made layout of every answer with no setup.</p>

<h2 id="pre-fill">Already have the details? Pre-fill the form</h2>

<p>Sometimes you already know most of the answers, like a client's name and the agreed fee. You can <a href="/features/pre-fill-fields/">pre-fill those fields</a> through the form link, so the client only checks them and signs. Our guide to <a href="/blog/how-to-pre-fill-form-fields-by-url-parameters/">pre-filling fields with URL parameters</a> shows how. The PDF still fills from the submission, one copy per person.</p>

<h2 id="signatures">About the signature</h2>

<p>The signer draws their signature on the <a href="/features/electronic-signature/">signature field</a>, and it is printed on the PDF with the rest of their answers. Electronic signatures like this are accepted for many everyday agreements, for example under the <a href="https://www.law.cornell.edu/uscode/text/15/7001" target="_blank" rel="noopener">US ESIGN Act</a> and the <a href="https://eur-lex.europa.eu/eli/reg/2014/910/oj" target="_blank" rel="noopener">EU eIDAS regulation</a>. Rules depend on the document and the country, so check with a lawyer for anything high stakes.</p>

<p>On the Business plan you can also turn on <strong>Sign PDF</strong> in the form's PDF settings. It adds a Formester digital certificate to the file, so people who open it can see where it came from.</p>

<h2 id="use-cases">What teams auto-fill this way</h2>

<ul>
<li><strong>Client contracts:</strong> start from the <a href="/templates/freelance-contract-51961/">freelance contract template</a>, which comes with its PDF connected.</li>
<li><strong>NDAs:</strong> the <a href="/templates/nda-agreement-pdf-form-template-49898/">NDA agreement template</a> comes with its PDF connected too.</li>
<li><strong>Onboarding and HR forms:</strong> offer letters, policy acknowledgements and employee agreements, signed before the first day.</li>
<li><strong>Intake and consent:</strong> clinic intake, waivers and consent forms that need a signed copy on file.</li>
</ul>

<p>More are in the <a href="/templates/categories/contracts/">contract templates</a>. For branded documents like certificates and quotes, see <a href="/features/document-generation/">document generation</a>.</p>

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Stop retyping answers into PDFs</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Upload your PDF, place each answer and the signature once, and every submission creates a filled, signed copy. The PDF Editor is part of the Business plan.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever · No credit card · 56,000+ teams</p>
</div>

<h2>Related reading</h2>

<ul>
<li><a href="/blog/how-to-add-fillable-fields-in-pdf/">How to add fillable fields to a PDF</a>, if you want people to type into the PDF itself.</li>
<li><a href="/tools/fillable-pdf-creator/">Free fillable PDF creator</a>, to add fields to a PDF in your browser.</li>
<li><a href="/blog/add-signature-in-google-forms/">How to add a signature in Google Forms</a>, and what to use when Google Forms can't.</li>
</ul>

<section class="faq">
<h2>Auto-fill PDF FAQ</h2>
<details><summary>How do I make a PDF auto-fill?</summary><div>It depends on whose details go in. To reuse your own details, Acrobat Reader and most browsers can remember what you typed before. To fill a PDF with other people's answers, collect them in an online form and connect your PDF to it, so each submission creates a filled copy.</div></details>
<details><summary>Can I auto-fill a PDF that isn't fillable?</summary><div>Yes, if you place the answers yourself. In Formester's PDF Editor, the PDF you upload is the background and you drop each answer where it belongs, so the file doesn't need fillable fields. It also works on scanned forms.</div></details>
<details><summary>Can I auto-fill a PDF from Excel or Google Sheets?</summary><div>Formester fills one PDF per form submission, not one per spreadsheet row. If you already have someone's details, you can pre-fill the form with them through a link, so the person only checks the answers and signs.</div></details>
<details><summary>Can AI fill out a PDF for me?</summary><div>AI tools can read a PDF and suggest what goes in each field, but you still need to check every answer. Formester uses AI differently: you can describe a document and it drafts a PDF template for you, which is then filled with real form answers.</div></details>
<details><summary>Is a signature drawn on a form legally binding?</summary><div>Electronic signatures are accepted for many everyday agreements, for example under the US ESIGN Act and the EU eIDAS rules. Requirements depend on the document type and country, so check with a lawyer for anything high stakes.</div></details>
<details><summary>Can both parties sign the same PDF?</summary><div>The person who fills in the form signs it. If you also need to sign, add your signature to the PDF template once, or sign the finished copy in your PDF reader.</div></details>
<details><summary>Why does my PDF auto-fill with old answers?</summary><div>That is usually your browser or PDF reader remembering earlier entries. Turn off form autofill in your browser settings, or switch off auto-complete in your PDF reader's forms preferences.</div></details>
<details><summary>Which plan do I need?</summary><div>Building the form and collecting signatures works on every Formester plan. The PDF Editor and filled PDFs are part of the Business plan.</div></details>
</section>
