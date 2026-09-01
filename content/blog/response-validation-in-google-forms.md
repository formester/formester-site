---
slug: "response-validation-in-google-forms"
title: "How to Use Response Validation in Google Forms (With Examples)"
description: "Set up response validation in Google Forms: number, text, length, and regex rules, copy-paste regex patterns for phone numbers and dates, checkbox limits, and what validation can't catch."
metaTitle: "Response Validation in Google Forms: Setup + Examples"
metaDescription: "Learn how to use response validation in Google Forms: number, text, length, and regex rules, with copy-paste examples and custom error messages."
keywords: "google forms response validation, response validation google form, google forms email validation, data validation google forms, google form validation"
author: "Ankit Singhaniya"
authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"
coverImgAlt: "Google Forms question showing a response validation error message"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/247119e8315acda1_response-validation-in-google-forms-cover.png","width":1200,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I set up data validation in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Data validation and response validation are the same feature in Google Forms. Click a short answer, paragraph, or checkbox question, open the three-dot menu in the bottom-right corner of the question, and choose Response validation. Then pick a rule type, set the condition, and write a custom error message."}},{"@type":"Question","name":"Can I add more than one validation rule to a question?","acceptedAnswer":{"@type":"Answer","text":"No. Google Forms allows one validation rule per question. If you need two checks, like a minimum length and a specific format, either combine both conditions into one regular expression or split the input across two questions."}},{"@type":"Question","name":"Which question types support response validation?","acceptedAnswer":{"@type":"Answer","text":"Three types get real validation rules: short answer, paragraph, and checkboxes. Short answer questions get number, text, length, and regular expression rules. Paragraph questions get length and regular expression only. Checkbox questions can only limit how many options a respondent selects, and grid questions only offer row and column limits."}},{"@type":"Question","name":"How do I validate an email address in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Add a short answer question, open the three-dot menu, and choose Response validation. Set the first dropdown to Text and the second to Email address, then write an error message telling people to enter a valid email address. Google Forms then rejects any answer that doesn't follow the name@domain format."}},{"@type":"Question","name":"Can Google Forms verify that an email address actually exists?","acceptedAnswer":{"@type":"Answer","text":"No. The built-in email rule checks formatting only, so typos like name@gmial.com and made-up addresses still pass. To confirm the inbox is real you need a tool that sends a verification code, like Formester's email verification field, or a third-party validation service connected through Zapier."}},{"@type":"Question","name":"How do I limit checkbox selections in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Add a checkbox question, open the three-dot menu, and choose Response validation. Pick Select at least, Select at most, or Select exactly, then enter the number. Google Forms blocks submission until the respondent's selection count matches the rule."}}]}]
createdAt: "2026-09-01T00:00:00.000Z"
updatedAt: "2026-09-01T15:00:00.000Z"
publishedAt: "2026-09-01T00:00:00.000Z"
---
![Google Forms question showing a response validation error message](https://formester-strapi.s3.ap-south-1.amazonaws.com/247119e8315acda1_response-validation-in-google-forms-cover.png)

You ask for a phone number and get a name. You ask for an email address and get one with a typo that bounces. Cleaning that up after a hundred submissions costs you an afternoon.

**Response validation in Google Forms** prevents it. It lets you set rules an answer must follow before the form can be submitted, so bad answers get rejected during filling instead of cleaned up in a spreadsheet later. This guide shows you how to set up Google Forms response validation, what each of the four rule types does, and copy-paste regex patterns for the formats people ask about most.

<div class="tldr">
<p>Quick answer</p>
<ul>
<li>Click a <strong>short answer</strong>, <strong>paragraph</strong>, or <strong>checkbox</strong> question (the only three types that support validation).</li>
<li>Open the <strong>three-dot menu</strong> in the bottom-right corner of the question and choose <strong>Response validation</strong>.</li>
<li>Pick a rule type: <strong>Number</strong>, <strong>Text</strong>, <strong>Length</strong>, or <strong>Regular expression</strong>.</li>
<li>Set the condition and write a <strong>custom error message</strong> that tells people how to fix their answer.</li>
<li>Preview the form and test it with wrong answers before you share it.</li>
</ul>
</div>

## What is response validation in Google Forms?

Response validation is a rule you attach to a question. When someone submits an answer that breaks the rule, Google Forms shows them an error message and blocks the submission until they fix it. An age field can require a number between 18 and 100. An email field can require a valid email format. A feedback box can require at least 50 characters.

When an answer breaks the rule, your error message shows under the question in red, and Google Forms refuses to accept the form until the answer is fixed. If the answer passes, nothing happens and the respondent moves on.

One limit to know before you plan your form: full validation only works on three question types. Short answer questions get the full set of rules. Paragraph questions get length and regex rules only. Checkbox questions can only limit how many options someone selects. Grid questions get two narrow settings of their own (require a response in every row, limit to one response per column). Multiple choice and dropdown questions have no validation at all, because their answers are already restricted to the choices you provide.

## How to add response validation in Google Forms

The setup takes under a minute per question. Here it is end to end:

<ol class="steps">
<li>
<h3>Open your form and pick a question</h3>
<p>Go to <strong>forms.google.com</strong> and open the form you're working on. Click the question you want to validate, and make sure its type is short answer, paragraph, or checkboxes. If the question is a dropdown or multiple choice, validation won't appear in the menu.</p>
</li>
<li>
<h3>Turn on response validation</h3>
<p>Click the <strong>three-dot menu</strong> in the bottom-right corner of the question card, then choose <strong>Response validation</strong>. A new row of dropdowns appears under the answer field.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/6bf87464570b63a8_response-validation-in-google-forms-1.webp" alt="Google Forms question with the three-dot menu open and Response validation highlighted"></p>
</li>
<li>
<h3>Choose the rule</h3>
<p>The first dropdown sets the rule category: <strong>Number</strong>, <strong>Text</strong>, <strong>Length</strong>, or <strong>Regular expression</strong>. The second dropdown sets the condition, like between, contains, or maximum character count. The field after it takes your value. For an age question, that's <strong>Number</strong>, then <strong>Between</strong>, then 18 and 100.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/d6997927783bf0ab_response-validation-in-google-forms-2.webp" alt="Number validation configured in Google Forms requiring an answer between 18 and 100"></p>
</li>
<li>
<h3>Write a custom error message</h3>
<p>The last field holds the text people see when their answer fails. Google's default error is vague, so say exactly what to do: enter a number between 18 and 100, or enter your work email address. A clear error message is the difference between a fixed answer and an abandoned form.</p>
</li>
<li>
<h3>Preview and test the form</h3>
<p>Click the <strong>eye icon</strong> at the top to open the preview. Submit a wrong answer on purpose and confirm the error appears, then submit a correct one and confirm it goes through. Test the edge cases too: spaces before an email address, a number written with a comma, an empty field. Two minutes of testing here saves you from finding out through a hundred broken submissions.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/1fdd7cf6aa9c553c_response-validation-in-google-forms-3.webp" alt="Respondent view of a Google Form showing a red validation error message under an invalid answer"></p>
</li>
</ol>

<div class="note"><p>Validation and the Required toggle work independently. A validated question that isn't required can simply be left blank, and the rule never runs. Mark the question required if the answer must be present and correct.</p></div>

## The 4 types of response validation (with examples)

Each rule type covers a different kind of answer. Pick based on what the question collects.

### Number validation

Number rules keep answers numeric and inside a range you choose. The conditions are greater than, greater than or equal to, less than, less than or equal to, equal to, not equal to, between, not between, is number, and whole number.

Use it whenever the answer is a quantity: age, ticket count, hours worked, a rating you couldn't fit into a scale question. A quantity field with a between rule of 1 and 10 stops someone from ordering 1,000 t-shirts by accident. The whole number condition matters more than it looks, because without it 2.5 people can RSVP to your event.

### Text validation for email and URL

Text rules check what the answer contains. The conditions are contains, doesn't contain, email address, and URL.

Email address is the one you'll use most. Set the dropdowns to <strong>Text</strong> and <strong>Email address</strong>, and Google Forms rejects anything that doesn't follow the name@domain shape, like an address missing the @ or ending in .con. If you collect emails for follow-up, this single rule filters out most unusable entries. The URL condition does the same for links, which helps when you ask for a portfolio or website.

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/e8493815365a16cf_response-validation-in-google-forms-4.webp" alt="Text validation set to Email address on a short answer question in Google Forms"></p>

The contains and doesn't contain conditions handle in-house formats. If every employee ID in your company starts with ACM, a contains rule for ACM catches everyone who typed only the digits.

### Length validation

Length rules set a minimum or maximum character count. They work on both short answer and paragraph questions.

Use a minimum when you need substance: a feedback question with a 50-character minimum turns one-word answers into sentences. Use a maximum when the answer feeds a system with limits, like a display name capped at 20 characters. Don't set a minimum on every open question, though. Forced padding produces longer answers, not better ones.

### Regular expression validation

Regex rules match answers against a pattern, character by character. The conditions are contains, doesn't contain, matches, and doesn't match. This is the rule you reach for when the built-in options can't describe your format: phone numbers, PIN codes, dates, order IDs.

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/529dc3be73ad1c71_response-validation-in-google-forms-5.webp" alt="Regular expression validation in Google Forms with a phone number pattern entered"></p>

A pattern reads like a recipe. In the phone pattern <code>^\d{3}-\d{3}-\d{4}$</code>, the <code>^</code> means the answer starts here, <code>\d{3}</code> means exactly three digits, the <code>-</code> is a literal dash, and <code>$</code> means the answer ends here. So only answers shaped like 555-123-4567 pass. You don't need to learn regex to use it. Copy a pattern from the table below.

## Copy-paste regex patterns for Google Forms

For each of these, set the validation to <strong>Regular expression</strong> and the condition to <strong>Matches</strong>, unless the row says otherwise. Paste the pattern as-is.

<div class="table-wrap">
<table>
<thead><tr><th>What you want</th><th>Pattern</th><th>Passes</th></tr></thead>
<tbody>
<tr><td>US phone (dashes)</td><td><code>^\d{3}-\d{3}-\d{4}$</code></td><td>555-123-4567</td></tr>
<tr><td>10-digit phone, digits only</td><td><code>^\d{10}$</code></td><td>5551234567</td></tr>
<tr><td>Indian mobile number</td><td><code>^[6-9]\d{9}$</code></td><td>9812345678</td></tr>
<tr><td>US ZIP code</td><td><code>^\d{5}(-\d{4})?$</code></td><td>12345 or 12345-6789</td></tr>
<tr><td>Indian PIN code</td><td><code>^[1-9]\d{5}$</code></td><td>560001</td></tr>
<tr><td>Date as MM/DD/YYYY</td><td><code>^(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])/\d{4}$</code></td><td>03/28/2026</td></tr>
<tr><td>Letters and spaces only (names)</td><td><code>^[A-Za-z ]+$</code></td><td>Priya Sharma</td></tr>
<tr><td>Block links in answers</td><td><code>https?://|www\.</code> with condition <strong>Doesn't contain</strong></td><td>any answer without a link</td></tr>
</tbody>
</table>
</div>

Adjust the pieces to fit your format: change <code>\d{3}</code> to <code>\d{4}</code> for four digits, or swap the dash for a space. Google Forms uses RE2 regex syntax, which has no lookahead support, so very clever patterns from Stack Overflow may not work. The patterns above all do.

The blocked-links row solves a specific problem: spam bots paste URLs into open text fields. A doesn't-contain rule on your paragraph questions filters most of them without bothering real respondents. (Use doesn't contain, not doesn't match: the matches conditions test the whole answer against the pattern, so a spam message with extra words around the link would slip through.)

## Limit how many checkboxes people can select

Checkbox questions get their own validation. The conditions are <strong>Select at least</strong>, <strong>Select at most</strong>, and <strong>Select exactly</strong>, each with a number.

Use it when a pick-your-top-3 question would otherwise collect seven answers from enthusiastic respondents. Open the three-dot menu on a checkbox question, choose <strong>Response validation</strong>, pick the condition, and set the count. The error message field works the same as everywhere else.

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/370b1e60b4162fdc_response-validation-in-google-forms-6.webp" alt="Checkbox question in Google Forms with a Select at most 2 validation rule"></p>

## What response validation can't do

Validation solves formatting problems. It does not solve every data problem, and knowing the gaps saves you from trusting the tool too far.

- **One rule per question.** You can't require both a minimum length and an email format on the same field. Combine the conditions into one regex, or split the question in two.

- **Full rules on three question types only.** Short answer, paragraph, and checkboxes. Paragraph questions only get length and regex rules, and grids only get row and column limits, so you can't run a text or number check on either.

- **The email check is format-only.** name@gmial.com passes, because it looks like an email. A fake address someone invented on the spot passes too. Format validation tells you the answer is shaped right, not that the inbox exists.

- **No cross-field rules.** A rule can't compare two answers, so you can't require an end date later than a start date, or a shipping address only when a checkbox is ticked.

For most surveys and sign-ups, these gaps don't matter. For lead capture, registrations, and anything where the contact details are the whole point, they do. If you want more workarounds for the platform's edges, our collection of [Google Forms tips and tricks](/blog/google-forms-tips-and-tricks/) covers the rest of the toolset.

## Validation on every field, and verification where it counts

Formester treats validation as a property of every field, not a bolt-on for three question types. Phone, email, number, date, and file upload fields each carry their own rules, and the parts Google Forms can't check get verified for real:

- **Email verification that confirms the inbox.** The [email verification field](/features/email-verification/) sends a one-time code to the address the respondent entered. They type the code into the form, which proves the inbox exists and belongs to them. Typos and throwaway addresses stop there.

- **Phone verification over SMS.** [SMS verification](/features/sms-verification-forms/) does the same for phone numbers with an OTP, so a lead's number is dialable before it reaches your CRM.

- **Fields that react to other answers.** [Conditional logic](/features/conditional-logic/) shows and hides fields based on earlier answers, so a shipping address field can appear only when someone ticks the checkbox asking for delivery.

<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/702ad296070cc0e8_response-validation-in-google-forms-7.webp" alt="Formester form builder showing email verification settings on an email field"></p>

If your forms collect contact details you plan to act on, verification catches the bad entries that format checks let through. Here's the full case for [Formester as a Google Forms alternative](/blog/why-formester-is-the-best-google-forms-alternative/).

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Collect contact details that actually work</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Formester verifies emails and phone numbers with one-time codes at submission, so every lead in your list is reachable. Format rules are built into the fields themselves.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever · No credit card · 56,000+ teams</p>
</div>

<section class="faq">
<h2>Frequently asked questions</h2>
<details><summary>How do I set up data validation in Google Forms?</summary><div>Data validation and response validation are the same feature in Google Forms. Click a short answer, paragraph, or checkbox question, open the three-dot menu in the bottom-right corner of the question, and choose <strong>Response validation</strong>. Then pick a rule type, set the condition, and write a custom error message.</div></details>
<details><summary>Can I add more than one validation rule to a question?</summary><div>No. Google Forms allows one validation rule per question. If you need two checks, like a minimum length and a specific format, either combine both conditions into one regular expression or split the input across two questions.</div></details>
<details><summary>Which question types support response validation?</summary><div>Three types get real validation rules: short answer, paragraph, and checkboxes. Short answer questions get number, text, length, and regular expression rules. Paragraph questions get length and regular expression only. Checkbox questions can only limit how many options a respondent selects, and grid questions only offer row and column limits.</div></details>
<details><summary>How do I validate an email address in Google Forms?</summary><div>Add a short answer question, open the three-dot menu, and choose <strong>Response validation</strong>. Set the first dropdown to <strong>Text</strong> and the second to <strong>Email address</strong>, then write an error message telling people to enter a valid email address. Google Forms then rejects any answer that doesn't follow the name@domain format.</div></details>
<details><summary>Can Google Forms verify that an email address actually exists?</summary><div>No. The built-in email rule checks formatting only, so typos like name@gmial.com and made-up addresses still pass. To confirm the inbox is real you need a tool that sends a verification code, like Formester's email verification field, or a third-party validation service connected through Zapier.</div></details>
<details><summary>How do I limit checkbox selections in Google Forms?</summary><div>Add a checkbox question, open the three-dot menu, and choose <strong>Response validation</strong>. Pick <strong>Select at least</strong>, <strong>Select at most</strong>, or <strong>Select exactly</strong>, then enter the number. Google Forms blocks submission until the respondent's selection count matches the rule.</div></details>
</section>
