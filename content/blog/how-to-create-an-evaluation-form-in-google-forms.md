---
slug: "how-to-create-an-evaluation-form-in-google-forms"
title: "How to Create an Evaluation Form in Google Forms"
description: "Create an evaluation form in Google Forms: rating scales, quiz mode for scored evaluations, and ready-to-use questions for employee, course, teacher, and event evaluations."
metaTitle: "How to Create an Evaluation Form in Google Forms"
metaDescription: "Create an evaluation form in Google Forms: rating scales, quiz mode, and ready-to-use questions for employee, course, and event evals."
keywords: "google forms evaluation, evaluation form google forms, evaluation form template, google forms evaluation template"
author: "Ankit Singhaniya"
authorProfile: "https://linkedin.com/in/ankitsinghaniyaz"
coverImgAlt: "Creating an evaluation form in Google Forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/e5abe9af43ba01e6_how-to-create-an-evaluation-form-in-google-forms-cover.png","width":1200,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I create an evaluation form in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Go to forms.google.com and start a blank form or pick the Course Evaluation template. Add a title, rating questions (linear scale or multiple choice grid), and one or two open-ended questions. Check the settings for required fields and response limits, then share the form by link or email. Responses collect automatically in the Responses tab."}},{"@type":"Question","name":"Can Google Forms calculate scores for an evaluation?","acceptedAnswer":{"@type":"Answer","text":"Yes, but only through quiz mode. Turn on Make this a quiz in Settings, assign points to each question, and Google Forms totals the score per response. It works for skill assessments with right answers. It cannot score subjective ratings, weight questions by category, or calculate averages across sections."}},{"@type":"Question","name":"How do I make an evaluation form anonymous in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Open Settings and turn off Collect email addresses. Also leave Limit to 1 response off, because that option forces respondents to sign in to their Google account. Remove any name fields from the form itself. People answer more freely when the form is anonymous, especially in teacher and course evaluations."}},{"@type":"Question","name":"Does Google Forms have an evaluation form template?","acceptedAnswer":{"@type":"Answer","text":"Yes. The template gallery includes a Course Evaluation template under the Education section, and the Assessment template works for scored evaluations. There is no built-in employee evaluation template, so for performance reviews you build from a blank form or adapt the course template."}},{"@type":"Question","name":"How do I weight evaluation criteria differently in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"You can't do it in the form itself. Link the form to a Google Sheet, put your weights in empty columns beside the responses, and use a formula like SUMPRODUCT to multiply each rating by its weight. Copy the formula down as responses arrive, or use an ARRAYFORMULA version that multiplies each rating column by its weight."}},{"@type":"Question","name":"What rating scale range does Google Forms allow?","acceptedAnswer":{"@type":"Answer","text":"A linear scale can start at 0 or 1 and end at any whole number from 2 to 10. A 1 to 5 scale is the most common choice for evaluations. Label both ends of the scale so everyone interprets the numbers the same way."}},{"@type":"Question","name":"Can respondents see their own evaluation score?","acceptedAnswer":{"@type":"Answer","text":"Not on a normal form. Google Forms only shows a calculated score when quiz mode is on and you release grades. For subjective evaluations without right answers, you have to share results separately, or use a form builder with calculating fields that can show a result on submission."}}]}]
createdAt: "2026-09-01T00:00:00.000Z"
updatedAt: "2026-09-01T14:30:00.000Z"
publishedAt: "2026-09-01T00:00:00.000Z"
---
![Creating an evaluation form in Google Forms](https://formester-strapi.s3.ap-south-1.amazonaws.com/e5abe9af43ba01e6_how-to-create-an-evaluation-form-in-google-forms-cover.png)

You just wrapped up a training session, a course, or a review cycle. Now you need feedback you can act on, not hallway comments you forget by Friday.

A **Google Forms evaluation** is the quickest free way to collect it. You build the form once, share a link, and every response is stored in one place. This guide walks you through the setup, the right question types, scored evaluations with quiz mode, and ready-to-use questions for employee, course, teacher, and event evaluations.

You will also see where Google Forms falls short for evaluations, and what to use when it does.

<div class="tldr">
<p>Quick answer</p>
<ul>
<li>Go to <strong>forms.google.com</strong> and start a blank form, or use the built-in Course Evaluation template.</li>
<li>Add <strong>linear scale</strong> questions for ratings and a <strong>multiple choice grid</strong> to rate several items at once.</li>
<li>Add one or two <strong>open-ended questions</strong> for the feedback that ratings miss.</li>
<li>In Settings, make key questions required and decide if responses should be anonymous.</li>
<li>Share by link or email. Responses collect in the <strong>Responses tab</strong> and can sync to Google Sheets.</li>
<li>For scored evaluations, turn on <strong>quiz mode</strong> and assign points per question.</li>
</ul>
</div>

## What is an evaluation form?

An evaluation form is a structured way to judge how something went. A manager rates an employee's quarter. Students rate a course. Attendees rate an event. The form asks the same questions of everyone, so you can compare answers instead of guessing from scattered opinions.

A good one mixes rating questions with open questions. Rating questions, like a 1 to 5 rating of the trainer's clarity, give you numbers you can chart. Open questions, like asking what should change next time, give you the reasons behind the numbers. Ratings without comments tell you something is wrong but not what. Comments without ratings can't be compared. You need both.

## How to create an evaluation form in Google Forms

The build takes about ten minutes. You need a Google account and a clear idea of what you're evaluating.

<ol class="steps">
<li>
<h3>Start a new form</h3>
<p>Go to <strong>forms.google.com</strong> and click <strong>Blank form</strong>, or open the template gallery and pick <strong>Course Evaluation</strong>. The template ships with rating grids and comment fields already in place, so it's a faster start even if you're evaluating something other than a course. Swap the wording and most of the structure still fits.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/fb334899a14cc49a_evaluation-form-google-forms-1-template-gallery.webp" alt="Google Forms template gallery with the Course Evaluation template highlighted in the Education section"></p>
</li>
<li>
<h3>Add a title, description, and respondent details</h3>
<p>Name the form after the thing being evaluated, like Q3 Sales Training Evaluation. Use the description to say what the feedback is for and who sees it. People give better answers when they know where their words go.</p>
<p>Then decide which details you need about the respondent. For an employee evaluation, add fields for the employee's name, the reviewer, and the review period. For an anonymous course evaluation, skip names entirely and ask only for the section or class.</p>
</li>
<li>
<h3>Add rating questions</h3>
<p>Ratings are the core of an evaluation, because they turn opinions into numbers you can compare. In Google Forms, that means the linear scale and the multiple choice grid:</p>
<p><strong>Linear scale</strong> asks for one rating. The scale can start at 0 or 1 and end at any whole number from 2 to 10, so set the common 1 to 5 range yourself. Label both ends, like 1 = Poor and 5 = Excellent, so everyone reads the scale the same way. Here's a full guide on <a href="/blog/how-to-add-linear-scale-questions-in-google-forms/">linear scale questions in Google Forms</a>.</p>
<p><strong>Multiple choice grid</strong> rates several items against the same scale in one question. One grid can cover content, pace, materials, and instructor as rows with a Poor-to-Excellent scale as columns. That's four questions' worth of feedback in one compact block.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/74e9b1be51861081_evaluation-form-google-forms-2-linear-scale.webp" alt="Setting up a 1 to 5 linear scale rating question in Google Forms with Poor and Excellent labels"></p>
</li>
<li>
<h3>Add open-ended questions</h3>
<p>Ratings tell you what people think. Open questions tell you why. Add one or two <strong>Paragraph</strong> questions at the end, asking what worked well and what should change. Keep it to two. Every extra open question lowers your completion rate, and tired respondents write one-word answers anyway.</p>
</li>
<li>
<h3>Configure the settings</h3>
<p>Open the <strong>Settings</strong> tab before you share and check these:</p>
<p><strong>Required questions.</strong> Mark the rating questions as required so you never get a half-filled evaluation. Leave the open questions optional.</p>
<p><strong>Anonymity.</strong> Turn off <strong>Collect email addresses</strong> if the evaluation is about a person, like a teacher or manager. People answer more freely when their name isn't attached. Here's how to <a href="/blog/how-to-make-anonymous-google-form-or-survey/">make a Google Form fully anonymous</a>.</p>
<p><strong>One response per person.</strong> Turning on <strong>Limit to 1 response</strong> stops duplicates, but it forces respondents to sign in to Google. This creates a real trade-off for evaluations: you can have anonymity, or one response per person, but not both. With <strong>Collect email addresses</strong> off, Google at least doesn't record the usernames of people who sign in. But anyone without a Google account can't respond at all, which matters for parent or client evaluations. For small anonymous groups, most teams accept the small risk of a duplicate.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/53ce74aa65361776_evaluation-form-google-forms-3-settings.webp" alt="Google Forms settings panel with Collect email addresses set to Do not collect and the Limit to 1 response toggle under a Requires sign in label"></p>
</li>
<li>
<h3>Share the form and collect responses</h3>
<p>Click <strong>Publish</strong>, then copy the responder link to share it by email or chat, or embed the form on a page. For in-person sessions, a QR code on the last slide gets far more responses than a link sent the next day, because people answer while the session is still fresh.</p>
</li>
</ol>

<div class="note"><p>Send the form fast. An average evaluation form sent within an hour of the session gets more and better responses than a perfect one sent next week.</p></div>

## Turn on quiz mode for scored evaluations

Rating forms measure opinions. But some evaluations measure performance against right answers, like a post-training knowledge check or a skills assessment. For those, use quiz mode.

Go to <strong>Settings</strong> and toggle on <strong>Make this a quiz</strong>. Now every question can carry a point value and a correct answer. Google Forms grades each response automatically and shows you totals, averages, and the questions people missed most.

For a training evaluation, this is the difference between knowing people liked the training and knowing they learned from it. Ask both: run a short scored section for the material, then a rating section for the delivery. Here's how to [view and release scores in Google Forms](/blog/how-to-view-scores-in-google-forms/) once responses come in.

![Google Forms settings with the Make this a quiz toggle turned on showing release grades and respondent options](https://formester-strapi.s3.ap-south-1.amazonaws.com/791aceacedbe6243_evaluation-form-google-forms-4-quiz-mode.webp)

## Evaluation question examples by type

The build steps are the same for every evaluation. The questions are not. Use these as a starting point:

<div class="table-wrap">
<table>
<thead><tr><th>Evaluation type</th><th>Questions to ask</th></tr></thead>
<tbody>
<tr><td><strong>Employee</strong></td><td>Rate the quality and accuracy of this employee's work (1 to 5). Does the employee meet deadlines consistently? How well do they communicate with the team? What is one strength to recognize this period? What is the single most important area to improve?</td></tr>
<tr><td><strong>Course / training</strong></td><td>Rate the course content, pace, and materials (grid). How clearly did the instructor explain the material (1 to 5)? Which topics need more time? Would you recommend this course to a colleague? What should change in the next session?</td></tr>
<tr><td><strong>Teacher</strong></td><td>The teacher explains concepts clearly (1 to 5). The teacher is well prepared for class (1 to 5). How comfortable do you feel asking questions? What does this teacher do well? What could make the class better?</td></tr>
<tr><td><strong>Event</strong></td><td>Rate the venue, schedule, and speakers (grid). How useful was the event for your work (1 to 5)? Which session was most valuable? How did you hear about the event? Would you attend again?</td></tr>
</tbody>
</table>
</div>

Whatever the type, keep the same scale direction everywhere, so 5 always means best. And put yourself in the respondent's shoes: every question should be answerable in under ten seconds, or it gets skipped.

Looking for a Google Forms teacher evaluation template? There isn't a dedicated one in the gallery. Start from the Course Evaluation template and swap in the teacher questions above.

## How to analyze evaluation responses

Once responses come in, open the <strong>Responses</strong> tab. It has a summary view with a chart per question, a per-question breakdown, and individual responses.

The summary view answers most questions on its own. Linear scale questions show as bar charts, so a weak average jumps out immediately.

For anything deeper, click the <strong>Sheets icon</strong> to send all responses to a spreadsheet. In Sheets you can average ratings per category, filter by session or department, and compare this cycle against the last one. That last part matters most: a 3.8 rating means little until you know last quarter was a 3.2.

![Google Forms Responses tab showing summary charts for rating grid questions](https://formester-strapi.s3.ap-south-1.amazonaws.com/3ebf894c3c45e4ed_evaluation-form-google-forms-5-responses.webp)

## How to weight evaluation criteria in Google Sheets

In most evaluations, some criteria matter more than others. Accuracy might count three times as much as tidiness. Google Forms has no way to express that, so the weighting happens in the linked Sheet.

Link your form to a Sheet and each answer gets its own column. Row 1 holds the question headers, so put your weights in empty columns to the right of the responses, say I1 to L1. If the ratings sit in columns D to G:

<div class="table-wrap">
<table>
<thead><tr><th>What you want</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Weighted total</td><td><code>=SUMPRODUCT(D2:G2,$I$1:$L$1)</code></td></tr>
<tr><td>Weighted average out of 5</td><td><code>=SUMPRODUCT(D2:G2,$I$1:$L$1)/SUM($I$1:$L$1)</code></td></tr>
<tr><td>Flat average, no weighting</td><td><code>=AVERAGE(D2:G2)</code></td></tr>
</tbody>
</table>
</div>

Grid answers can arrive as text labels rather than numbers, so name your rating options in a way that converts cleanly, like plain 1 to 5. New responses append below the old ones, and SUMPRODUCT works one row at a time, so copy the formula down as responses arrive. If you want it fully automatic, use a spilling version that multiplies each rating column by its weight: <code>=ARRAYFORMULA(IF(LEN(D2:D), D2:D*$I$1+E2:E*$J$1+F2:F*$K$1+G2:G*$L$1, ))</code>.

One more thing worth doing: write the weights down somewhere outside the spreadsheet. If the person who owns the Sheet leaves, the scoring rules should not leave with them.

## Decide what a 3 means before you share the form

The build is the easy part of an evaluation. The hard part is agreeing on what the ratings mean. Ask ten managers to rate communication from 1 to 5 and you will get ten different ideas of what a 3 is.

The results still look clean in a spreadsheet. You can average them, chart them, and compute a weighted score. That doesn't make the score useful, because a rating scale measures how each person interpreted the scale, not performance itself.

The fix costs ten minutes. Before you share the form, write down what a 3 looks like for each criterion, then paste that description into the question's help text. It does more for the quality of your results than any tool choice.

## Where Google Forms falls short for evaluations

Google Forms works well for a quick, free evaluation. But teams that run evaluations every cycle keep hitting the same problems:

- **No real scoring outside quiz mode.** Quiz mode only grades right-or-wrong answers. It can't weight categories, average rating sections, or compute an overall performance score. You export to Sheets and build that math yourself, every cycle.

- **Everything looks like Google.** You can change the header image, the color, and the font, and that's about it. An evaluation sent to clients or parents carries Google's look, not yours.

- **No PDF of the completed evaluation.** HR usually needs a signed record of a performance review in the employee's file. Google Forms gives you a spreadsheet row.

- **Unreliable saving for long reviews.** Google Forms autosaves drafts only for respondents signed in to a Google account. On an anonymous form, or for anyone signed out, closing the tab halfway through a long review loses everything typed.

If none of these affect you, stay with Google Forms. If they do, it's worth comparing the [best Google Forms alternatives](/blog/top-google-forms-alternatives/).

## Evaluation forms without the workarounds: Formester

Formester covers the same ten-minute build, then handles the parts Google Forms leaves to you:

<div class="table-wrap">
<table>
<thead><tr><th>Capability</th><th>Google Forms</th><th>Formester</th></tr></thead>
<tbody>
<tr><td>Rating scales and grids</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Weighted scores from ratings</td><td>No, manual in Sheets</td><td>Yes, calculating fields</td></tr>
<tr><td>Your branding, no vendor look</td><td>Header image and color only</td><td>Full branding kit</td></tr>
<tr><td>PDF record per evaluation</td><td>No</td><td>Yes, auto-generated per submission</td></tr>
<tr><td>Save and continue later</td><td>Only for signed-in Google users</td><td>Yes, for everyone</td></tr>
<tr><td>Response analytics built in</td><td>Basic summary charts</td><td>Completion and drop-off analytics</td></tr>
</tbody>
</table>
</div>

The scoring gap matters most for evaluations. Formester's calculating fields turn ratings into a weighted overall score on the form itself, so a performance review computes its own result instead of waiting for spreadsheet work. The duplicate problem has a cleaner answer too: send each respondent a [unique one-time submission link](/features/generate-unique-form-submission-url-for-each-respondent/) and nobody needs a Google account to respond exactly once. You also don't have to start from a blank form: the [Formester template gallery](/templates/) has ready-made evaluation forms for employees, peers, and events. And [form analytics](/features/form-analytics/) shows which page of the form people abandon, so you know where your evaluation is losing respondents.

Teams already run their evaluation and feedback loops this way. Bogdan Arsenie, CTO at Rumie, uses Formester to collect feedback from educators and volunteers: "It's intuitive, fast and easy to share."

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Build an evaluation form that scores itself</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Calculating fields turn ratings into a weighted score on the form itself. No spreadsheet formulas, and no sign-in wall for your respondents.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever · No credit card · 56,000+ teams</p>
</div>

<section class="faq">
<h2>Frequently asked questions</h2>
<details><summary>How do I create an evaluation form in Google Forms?</summary><div>Go to forms.google.com and start a blank form or pick the Course Evaluation template. Add a title, rating questions (linear scale or multiple choice grid), and one or two open-ended questions. Check the settings for required fields and response limits, then share the form by link or email. Responses collect automatically in the Responses tab.</div></details>
<details><summary>Can Google Forms calculate scores for an evaluation?</summary><div>Yes, but only through quiz mode. Turn on <strong>Make this a quiz</strong> in Settings, assign points to each question, and Google Forms totals the score per response. It works for skill assessments with right answers. It cannot score subjective ratings, weight questions by category, or calculate averages across sections.</div></details>
<details><summary>How do I make an evaluation form anonymous in Google Forms?</summary><div>Open Settings and turn off <strong>Collect email addresses</strong>. Also leave <strong>Limit to 1 response</strong> off, because that option forces respondents to sign in to their Google account. Remove any name fields from the form itself. People answer more freely when the form is anonymous, especially in teacher and course evaluations.</div></details>
<details><summary>Does Google Forms have an evaluation form template?</summary><div>Yes. The template gallery includes a Course Evaluation template under the Education section, and the Assessment template works for scored evaluations. There is no built-in employee evaluation template, so for performance reviews you build from a blank form or adapt the course template.</div></details>
<details><summary>How do I weight evaluation criteria differently in Google Forms?</summary><div>You can't do it in the form itself. Link the form to a Google Sheet, put your weights in empty columns beside the responses, and use a formula like SUMPRODUCT to multiply each rating by its weight. Copy the formula down as responses arrive, or use an ARRAYFORMULA version that multiplies each rating column by its weight.</div></details>
<details><summary>What rating scale range does Google Forms allow?</summary><div>A linear scale can start at 0 or 1 and end at any whole number from 2 to 10. A 1 to 5 scale is the most common choice for evaluations. Label both ends of the scale so everyone interprets the numbers the same way.</div></details>
<details><summary>Can respondents see their own evaluation score?</summary><div>Not on a normal form. Google Forms only shows a calculated score when quiz mode is on and you release grades. For subjective evaluations without right answers, you have to share results separately, or use a form builder with calculating fields that can show a result on submission.</div></details>
</section>
