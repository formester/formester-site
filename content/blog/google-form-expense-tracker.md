---
slug: "google-form-expense-tracker"
title: "How to Make a Google Form Expense Tracker"
description: "Build an expense tracker with Google Forms and Google Sheets: a phone-friendly form with a number-only amount and a category dropdown, the Sheet formulas that total it by category and month, and what Google Forms cannot do."
metaTitle: "How to Make a Google Form Expense Tracker"
metaDescription: "Build a Google Form expense tracker: a phone-friendly form with a number-only amount and category dropdown, plus the Sheet formulas that total it by month."
keywords: "google form expense tracker,google forms expense tracker,expense tracking form,google form expense report,google form for expenses,how to make an expense tracker in google forms,expense tracker google sheets"
author: "Ankit Singhaniya"
authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"
coverImgAlt: "Cover art for a guide to building an expense tracker with Google Forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/a9ec710d5a201ea9_google-form-expense-tracker-cover.png","width":1200,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://formester.com/#organization","url":"https://formester.com/","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},{"@type":"WebPage","@id":"https://formester.com/blog/google-form-expense-tracker/#webpage","url":"https://formester.com/blog/google-form-expense-tracker/","name":"How to Make a Google Form Expense Tracker","isPartOf":{"@id":"https://formester.com/#organization"},"breadcrumb":{"@id":"https://formester.com/blog/google-form-expense-tracker/#breadcrumb"},"inLanguage":"en-US","description":"Build an expense tracker with Google Forms and Google Sheets: a phone-friendly form with a number-only amount and a category dropdown, the Sheet formulas that total it by category and month, and what Google Forms cannot do.","datePublished":"2026-09-06","dateModified":"2026-09-06"},{"@type":"BreadcrumbList","@id":"https://formester.com/blog/google-form-expense-tracker/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://formester.com/blog/"},{"@type":"ListItem","position":3,"name":"How to Make a Google Form Expense Tracker","item":"https://formester.com/blog/google-form-expense-tracker/"}]},{"@type":"BlogPosting","@id":"https://formester.com/blog/google-form-expense-tracker/#article","headline":"How to Make a Google Form Expense Tracker","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/a9ec710d5a201ea9_google-form-expense-tracker-cover.png","author":{"@type":"Person","name":"Ankit Singhaniya","url":"https://linkedin.com/in/ankitsinghaniyaz"},"publisher":{"@id":"https://formester.com/#organization"},"inLanguage":"en-US","description":"Build an expense tracker with Google Forms and Google Sheets: a phone-friendly form with a number-only amount and a category dropdown, the Sheet formulas that total it by category and month, and what Google Forms cannot do.","datePublished":"2026-09-06","dateModified":"2026-09-06","mainEntityOfPage":{"@id":"https://formester.com/blog/google-form-expense-tracker/#webpage"},"about":[{"@type":"SoftwareApplication","name":"Google Forms","applicationCategory":"BusinessApplication","url":"https://docs.google.com/forms/","operatingSystem":"Web"}],"mentions":[{"@id":"https://formester.com/#software"}],"citation":[{"@type":"WebPage","name":"How to set rules for your form","url":"https://support.google.com/docs/answer/3378864","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"Choose a type of question for your form","url":"https://support.google.com/docs/answer/7322334","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"Save a draft of your Google Forms response","url":"https://support.google.com/docs/answer/10952360","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"View and manage form responses","url":"https://support.google.com/docs/answer/139706","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"Publish and share your form with responders","url":"https://support.google.com/docs/answer/2839588","publisher":{"@type":"Organization","name":"Google"}}]},{"@type":"FAQPage","@id":"https://formester.com/blog/google-form-expense-tracker/#faq","mainEntity":[{"@type":"Question","name":"Can I use Google Forms to track my expenses?","acceptedAnswer":{"@type":"Answer","text":"Yes. Build a short form that asks for the amount and the category, with a date field, link it to Google Sheets, then log each expense from your phone. The Sheet holds the running list and does the totals. Google Forms itself cannot add anything up, so the Sheet is not optional."}},{"@type":"Question","name":"Does Google have an expense tracker?","acceptedAnswer":{"@type":"Answer","text":"Not as a product. Google Forms and Google Sheets together make one: the form is the way you enter an expense, the Sheet is where it is stored and totaled. Google Sheets also offers budget templates, but they need you to type into the spreadsheet directly."}},{"@type":"Question","name":"How do I make my own expense tracker?","acceptedAnswer":{"@type":"Answer","text":"Create a Google Form with an Amount question set to accept numbers only. Add a Date question and a Category dropdown. Link it to a Google Sheet. On a second tab of that Sheet, add a SUM for the total and SUMIF formulas for each category. Save the form link to your phone's home screen so logging takes a few seconds."}},{"@type":"Question","name":"How do I make Google Forms only accept numbers for the amount?","acceptedAnswer":{"@type":"Answer","text":"Make the Amount question a short answer question. Click the three-dot menu on the question, choose Response validation, pick Number, then Greater than, then enter 0. Add a custom error message such as a reminder to type digits only, without a currency symbol. The form then refuses anything that is not a positive number."}},{"@type":"Question","name":"Can I upload receipts to a Google Form?","acceptedAnswer":{"@type":"Answer","text":"Yes, with a File upload question, but everyone who fills in the form must sign in to a Google account, and the question is not available on forms stored in a shared drive. Google stores the files in a new folder in your Drive. If some of the people logging expenses do not have Google accounts, leave receipts out of the form or use a form builder that accepts uploads without an account."}},{"@type":"Question","name":"How do I total expenses by category in Google Sheets?","acceptedAnswer":{"@type":"Answer","text":"On a new tab, list your categories in column A. In column B use SUMIF: =SUMIF('Form Responses 1'!D:D, A2, 'Form Responses 1'!B:B), where column D holds the Category answers and column B the amounts. Fill it down. Each row shows that category's total, and it updates as new expenses arrive."}},{"@type":"Question","name":"Can two people use the same Google Form expense tracker?","acceptedAnswer":{"@type":"Answer","text":"Yes. Send both people the same responder link. Turn on Collect email addresses if you want to see who logged each expense, or leave it off if that does not matter. Share the linked Sheet with anyone who should see the totals. Do not share the form's editor link, which lets people change the questions."}},{"@type":"Question","name":"Is there a free expense tracker template for Google Sheets?","acceptedAnswer":{"@type":"Answer","text":"Yes. Google Sheets offers budget templates and many sites offer free ones. Most of them rely on you opening the spreadsheet to type each expense. Putting a Google Form in front of the Sheet makes logging fast enough to keep up."}}]},{"@type":"SoftwareApplication","@id":"https://formester.com/#software","url":"https://formester.com/","name":"Formester","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free forever plan, no credit card required"}}]}]
createdAt: "2026-09-06T00:00:00.000Z"
updatedAt: "2026-09-06T00:00:00.000Z"
publishedAt: "2026-09-06T00:00:00.000Z"
---

![Cover art for a guide to building an expense tracker with Google Forms](https://formester-strapi.s3.ap-south-1.amazonaws.com/a9ec710d5a201ea9_google-form-expense-tracker-cover.png)

<p style="font-size: inherit;">A Google Form expense tracker is a short form you open on your phone to log each expense, linked to a Google Sheet that keeps the list and adds it up. It is a simple expense tracking form that covers what most people need. Logging takes a few seconds, so you are more likely to keep doing it. The Sheet does the totals by category and by month. Below you build both, put the form one tap away on your phone and see where Google Forms stops.</p>

<div class="tldr">
<p><strong>Quick answer</strong></p>
<ul>
<li><strong>You want to log expenses from your phone:</strong> build a form with an Amount, a Date and a Category question, plus a note. Link it to Sheets. Add the form link to your phone's home screen.</li>
<li><strong>You want totals by category and month:</strong> put a Summary tab in the linked Sheet with a SUM for the total and a SUMIF per category, plus a pivot table by month. They update on their own.</li>
<li><strong>You want a team expense form with receipts and approvals:</strong> Google Forms can collect receipts only from people signed in to Google and has no approval step. A form builder built for expense reports takes receipts without a sign-in. An automation on top of it adds the approval step, covered in the reimbursement post below.</li>
</ul>
</div>

<h2 id="build">How to make an expense tracker in Google Forms</h2>

<p>Keep the form to five or six questions. Every extra question makes it less likely you will log a small expense like a coffee.</p>
<ol class="steps">
<li>
<h3>Create the form</h3>
<p>Go to forms.google.com and start a blank form. Name it something you will recognize on a phone screen, such as Expenses.</p>
</li>
<li>
<h3>Limit the Amount question to numbers</h3>
<p>Amount needs a number-only rule. Without it, an entry typed as $12.50 is stored as text. SUM skips text, so that expense quietly drops out of every total.</p>
<p>Add a short answer question called Amount. Click the three-dot menu at the bottom right of the question and choose <strong>Response validation</strong>. Pick <strong>Number</strong>, then <strong>Greater than</strong>, then enter 0. In the custom error text, ask for digits only with no currency symbol. <a href="https://support.google.com/docs/answer/3378864" target="_blank" rel="noopener">Google's rules page</a> covers the options.</p>
<!-- IMAGE: short answer question "Amount", Response validation open, Number > 0, custom error text visible | ALT: The Amount question in Google Forms with Response validation set to Number greater than 0 and a custom error message -->
</li>
<li>
<h3>Add Date and Category</h3>
<p>Add a <strong>Date</strong> question so you can log yesterday's expense today. Add a <strong>Dropdown</strong> question called Category with your own list, such as Food, Transport, Bills, Shopping and Other. A dropdown keeps the spelling identical every time, which is what the category totals depend on. Make all three questions required.</p>
</li>
<li>
<h3>Add a payment method and a note</h3>
<p>A multiple choice question with Cash and Card as options helps if you reconcile against statements. A short answer question called Note, not required, holds the shop name.</p>
</li>
<li>
<h3>Decide about receipts</h3>
<p>A <strong>File upload</strong> question lets you attach a photo of the receipt. <a href="https://support.google.com/docs/answer/7322334" target="_blank" rel="noopener">Google requires</a> everyone who fills in the form to sign in to a Google account for it. The question is also not available on forms stored in a shared drive. For a personal tracker on your own account that is fine. For a form a partner or a team uses, leave receipts out unless everyone has a Google account.</p>
</li>
<li>
<h3>Link the form to Google Sheets</h3>
<p>Open the <strong>Responses</strong> tab and click <strong>Link to Sheets</strong> in the top right. Choose <strong>Create a new spreadsheet</strong>. Every submission now becomes a row, with a timestamp in column A and your questions in the order you added them. Our guide on <a href="/blog/how-to-link-google-sheets-to-google-forms/">linking Google Sheets to Google Forms</a> covers linking to a sheet you already have.</p>
</li>
</ol>

<h2 id="sheet">How to make the Sheet add it up</h2>

<p>Do the math on a second tab, never in the response tab. Google inserts a new row for each submission. Formulas placed in that tab can shift or break. The formulas below assume Amount is your first question (column B), Date the second (column C) and Category the third (column D). Adjust the letters if your order differs.</p>
<p>If you turn on Collect email addresses (covered below), Google adds an Email Address column at B and every letter moves one to the right: Amount becomes C, Date D and Category E.</p>
<ol class="steps">
<li>
<h3>Add a Summary tab</h3>
<p>Click the plus at the bottom left of the Sheet to add a tab and name it Summary.</p>
</li>
<li>
<h3>Total everything</h3>
<p>In any cell, enter the total for all expenses logged so far:</p>
<p><code>=SUM('Form Responses 1'!B:B)</code></p>
</li>
<li>
<h3>Total by category</h3>
<p>List your categories in column A of the Summary tab, one per row, spelled exactly as they are in the dropdown. In B2, next to the first category, enter:</p>
<p><code>=SUMIF('Form Responses 1'!D:D, A2, 'Form Responses 1'!B:B)</code></p>
<p>Fill the formula down. Each row now shows that category's total and keeps updating.</p>
<!-- IMAGE: Summary tab, category list with SUMIF totals, a pie chart beside it | ALT: A Google Sheets Summary tab with categories in column A, SUMIF totals in column B, and a pie chart of spending by category -->
</li>
<li>
<h3>See it by month</h3>
<p>Select the response tab's columns by clicking the column letters, so new rows are included, then choose <strong>Insert</strong>, then <strong>Pivot table</strong>. Place it on the Summary tab. Add Date to Rows, right-click a date in the pivot and choose <strong>Create pivot date group</strong>, then <strong>Month</strong>. Add Amount to Values as SUM. You get one line per month with the spend for that month.</p>
</li>
<li>
<h3>Add a chart if you want one</h3>
<p>Select the category table, choose <strong>Insert</strong>, then <strong>Chart</strong>, then pick a pie chart. It redraws as the totals change. The same steps, with more detail on styling, are in our post on <a href="/blog/how-to-make-pie-charts-in-google-forms/">pie charts from Google Forms responses</a>.</p>
</li>
</ol>
<p>This Summary tab is the expense tracker Google Sheets users build by hand. Here you never type into the spreadsheet, because the form fills the response tab for you.</p>

<h2 id="phone">How to log an expense in a few seconds from your phone</h2>

<p>The tracker only works if logging is quick. Put the form one tap away.</p>
<ul>
<li><strong>Add the form to your home screen.</strong>
<ol>
<li>Click <strong>Publish</strong>.</li>
<li>Click <strong>Published</strong>, then <strong>Copy responder link</strong>.</li>
<li>Open the link on your phone.</li>
<li>Chrome on Android: open the menu and choose <strong>Add to Home screen</strong>. Safari on iPhone: tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</li>
</ol>
The icon opens the form directly.</li>
<li><strong>Make a pre-filled link for a recurring expense.</strong>
<ol>
<li>In the form editor, open the three-dot <strong>More</strong> menu and choose <strong>Pre-fill form</strong>.</li>
<li>Pick the category and payment method you use most.</li>
<li>Click <strong>Get link</strong> and save it as a second home-screen icon.</li>
</ol>
You then type the amount and pick the date. Our <a href="/blog/google-form-auto-filler/">Google Form auto filler</a> post explains how pre-filled links work.</li>
<li><strong>Stay signed in to Google on your phone.</strong> Google keeps a half-finished entry as a draft for 30 days when you are signed in, so an interrupted log is not lost. Our post on <a href="/blog/does-google-form-save-progress/">whether Google Forms saves progress</a> covers the conditions.</li>
</ul>
<!-- IMAGE: phone screenshot of the form open, or the home screen showing the Expenses icon | ALT: The expense form open on a phone, with a home-screen icon for it visible -->

<h2 id="share">How to share the tracker with a partner or a team</h2>

<p>One form can take entries from many people. Send them the same responder link, not the editor link, which would let them change the questions. Open <strong>Settings</strong> and expand <strong>Responses</strong>.</p>
<ul>
<li><strong>Collect email addresses</strong> records who logged each expense. Turning it on adds an Email Address column to the Sheet, so check your Summary formulas afterwards. Leave it off for a household tracker where that does not matter.</li>
<li><strong>Allow response editing</strong> lets people fix their own typo later through the link on their confirmation page.</li>
</ul>
<p>Share the linked Sheet with anyone who should see the totals. For a personal or household tracker, the linked Sheet is the shared view and the form is only the entry point. For a Google Form expense report at work, where each claim needs a manager's approval and a reimbursement record, see our post on <a href="/blog/automate-expense-reimbursement-with-forms/">automating expense reimbursement with forms</a>.</p>

<h2 id="limits">What Google Forms cannot do as an expense tracker</h2>

<ul>
<li><strong>Show a running total.</strong> The form knows nothing about earlier entries. Totals live only in the Sheet.</li>
<li><strong>Take receipts from people without a Google account.</strong> The File upload question forces a sign-in.</li>
<li><strong>Route an expense for approval.</strong> There is no approval step, so an expense report Google Form cannot hold a claim for a manager. Every submission is final as soon as it is sent.</li>
<li><strong>Format currency.</strong> Amount is a plain number until you format the column in the Sheet.</li>
<li><strong>Let someone correct an entry</strong> unless you turned on response editing before they submitted.</li>
<li><strong>Warn you about a budget.</strong> No alerts, no limits per category, so a Google Forms budget tracker still needs a conditional format in the Sheet to flag overspend.</li>
</ul>

<h2 id="formester">Where Formester fits</h2>

<p>For a personal tracker, the Google Forms and Sheets setup above is enough. The gaps show up when a team uses a Google Form for expenses. Formester's <a href="/templates/expense-report-submission-form-2115/">expense report form template</a> comes with expense categories and a <a href="/features/file-upload-forms/">receipt upload</a> that needs no Google account from the person submitting. On the Personal plan and up, conditional logic can show only the fields for each expense type.</p>
<p>On the Business plan, each submission can be <a href="/features/export-form-submission-pdf/">exported as a PDF</a> or attached to the confirmation email, which gives finance a record per claim. For approvals and reimbursement, the automation post linked above walks through the full workflow.</p>

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">An expense form built for a team</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Receipt uploads with no Google account and a ready-made expense report template. Free plan with unlimited forms and responses.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever · No credit card · 56,000+ teams</p>
</div>

<h2>Related reading</h2>

<ul>
<li><a href="/blog/how-to-link-google-sheets-to-google-forms/">Link Google Sheets to Google Forms</a>, including linking to a sheet you already use.</li>
<li><a href="/blog/google-form-auto-filler/">Google Form auto filler</a>, for the pre-filled links behind the one-tap shortcut.</li>
<li><a href="/blog/how-to-make-pie-charts-in-google-forms/">Make a pie chart in Google Forms</a>, for the spending chart.</li>
<li><a href="/blog/automate-expense-reimbursement-with-forms/">Automate expense reimbursement with forms</a>, for the team version with approvals.</li>
</ul>

<section class="faq">
<h2>Google Forms expense tracker FAQ</h2>
<details><summary>Can I use Google Forms to track my expenses?</summary><div>Yes. Build a short form that asks for the amount and the category, with a date field, link it to Google Sheets, then log each expense from your phone. The Sheet holds the running list and does the totals. Google Forms itself cannot add anything up, so the Sheet is not optional.</div></details>
<details><summary>Does Google have an expense tracker?</summary><div>Not as a product. Google Forms and Google Sheets together make one: the form is the way you enter an expense, the Sheet is where it is stored and totaled. Google Sheets also offers budget templates, but they need you to type into the spreadsheet directly.</div></details>
<details><summary>How do I make my own expense tracker?</summary><div>Create a Google Form with an Amount question set to accept numbers only. Add a Date question and a Category dropdown. Link it to a Google Sheet. On a second tab of that Sheet, add a SUM for the total and SUMIF formulas for each category. Save the form link to your phone's home screen so logging takes a few seconds.</div></details>
<details><summary>How do I make Google Forms only accept numbers for the amount?</summary><div>Make the Amount question a short answer question. Click the three-dot menu on the question, choose Response validation, pick Number, then Greater than, then enter 0. Add a custom error message such as a reminder to type digits only, without a currency symbol. The form then refuses anything that is not a positive number.</div></details>
<details><summary>Can I upload receipts to a Google Form?</summary><div>Yes, with a File upload question, but everyone who fills in the form must sign in to a Google account, and the question is not available on forms stored in a shared drive. Google stores the files in a new folder in your Drive. If some of the people logging expenses do not have Google accounts, leave receipts out of the form or use a form builder that accepts uploads without an account.</div></details>
<details><summary>How do I total expenses by category in Google Sheets?</summary><div>On a new tab, list your categories in column A. In column B use SUMIF: =SUMIF('Form Responses 1'!D:D, A2, 'Form Responses 1'!B:B), where column D holds the Category answers and column B the amounts. Fill it down. Each row shows that category's total, and it updates as new expenses arrive.</div></details>
<details><summary>Can two people use the same Google Form expense tracker?</summary><div>Yes. Send both people the same responder link. Turn on Collect email addresses if you want to see who logged each expense, or leave it off if that does not matter. Share the linked Sheet with anyone who should see the totals. Do not share the form's editor link, which lets people change the questions.</div></details>
<details><summary>Is there a free expense tracker template for Google Sheets?</summary><div>Yes. Google Sheets offers budget templates and many sites offer free ones. Most of them rely on you opening the spreadsheet to type each expense. Putting a Google Form in front of the Sheet makes logging fast enough to keep up.</div></details>
</section>
