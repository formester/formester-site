---
slug: "google-form-evaluation"
title: "Evaluation Forms in Google Forms (and Where Scoring Breaks)"
description: "Build an employee, course or skills evaluation in Google Forms using rating scales and grids, and see exactly where its scoring and anonymity run out."
metaTitle: "Evaluation Forms in Google Forms: Full Guide"
metaDescription: "Build an employee, course or skills evaluation in Google Forms using rating scales and grids, and see exactly where its scoring and anonymity run out."
keywords: "google form evaluation,evaluation form google forms,employee evaluation google form,course evaluation google form,student evaluation google form,google form performance review,google forms rating scale,google form evaluation template"
author: "Harsh Shah"
authorProfile: "https://www.linkedin.com/in/harshshahseo/"
authorImage: "/blog/authors/harsh-shah.jpg"
coverImgAlt: "Cover art for a guide to building evaluation forms in Google Forms"
featured: false
coverImg: {"url": "https://formester.com/blog/google-form-evaluation.jpg", "width": 2400, "height": 1350}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://formester.com/#organization","url":"https://formester.com/","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},{"@type":"WebPage","@id":"https://formester.com/blog/google-form-evaluation/#webpage","url":"https://formester.com/blog/google-form-evaluation/","name":"Evaluation Forms in Google Forms: Full Guide","isPartOf":{"@id":"https://formester.com/#organization"},"breadcrumb":{"@id":"https://formester.com/blog/google-form-evaluation/#breadcrumb"},"inLanguage":"en-US","description":"Build an employee, course or skills evaluation in Google Forms using rating scales and grids, and see exactly where its scoring and anonymity run out.","datePublished":"2026-08-27","dateModified":"2026-08-27"},{"@type":"BreadcrumbList","@id":"https://formester.com/blog/google-form-evaluation/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://formester.com/blog/"},{"@type":"ListItem","position":3,"name":"Evaluation Forms in Google Forms (and Where Scoring Breaks)","item":"https://formester.com/blog/google-form-evaluation/"}]},{"@type":"BlogPosting","@id":"https://formester.com/blog/google-form-evaluation/#article","headline":"Evaluation Forms in Google Forms (and Where Scoring Breaks)","image":"https://formester.com/blog/google-form-evaluation.jpg","author":{"@type":"Person","name":"Harsh Shah","url":"https://www.linkedin.com/in/harshshahseo/","image":"https://formester.com/blog/authors/harsh-shah.jpg"},"publisher":{"@id":"https://formester.com/#organization"},"inLanguage":"en-US","description":"Build an employee, course or skills evaluation in Google Forms using rating scales and grids, and see exactly where its scoring and anonymity run out.","datePublished":"2026-08-27","dateModified":"2026-08-27","mainEntityOfPage":{"@id":"https://formester.com/blog/google-form-evaluation/#webpage"},"about":[{"@type":"SoftwareApplication","name":"Google Forms","applicationCategory":"BusinessApplication","url":"https://docs.google.com/forms/","operatingSystem":"Web"}],"mentions":[{"@id":"https://formester.com/#software"},{"@type":"SoftwareApplication","name":"Google Sheets","applicationCategory":"BusinessApplication","url":"https://docs.google.com/spreadsheets/","operatingSystem":"Web"}],"citation":[{"@type":"WebPage","name":"Choose a type of question for your form","url":"https://support.google.com/docs/answer/7322334","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"Create & grade quizzes with Google Forms","url":"https://support.google.com/docs/answer/7032287","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"Publish & share your form with responders","url":"https://support.google.com/docs/answer/2839588","publisher":{"@type":"Organization","name":"Google"}}]},{"@type":"FAQPage","@id":"https://formester.com/blog/google-form-evaluation/#faq","mainEntity":[{"@type":"Question","name":"How do I make an evaluation form in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Use a Multiple choice grid for the criteria, with one row per criterion and one column per rating label. Add a Linear scale for an overall score and a Paragraph field for comments. Mark the grid and the scale required, and leave the comment optional."}},{"@type":"Question","name":"Can Google Forms score an evaluation automatically?","acceptedAnswer":{"@type":"Answer","text":"No. Google Forms has no calculation field, so nothing adds, averages or weights answers across questions. Quiz mode assigns points through an answer key, and an evaluation has no correct answer for the key to hold. Any total is calculated in the linked Google Sheet."}},{"@type":"Question","name":"How do I weight criteria differently in a Google Forms evaluation?","acceptedAnswer":{"@type":"Answer","text":"Not in the form. Link a Google Sheet and put the weighting into a SUMPRODUCT formula there, multiplying each criterion column by its weight and dividing by the total weight. The form stays a collection tool."}},{"@type":"Question","name":"Can a course evaluation be anonymous and still stop repeat submissions?","acceptedAnswer":{"@type":"Answer","text":"Not in Google Forms. Limit to 1 response requires every respondent to sign in to a Google Account, per Google's own documentation, so anyone without an account is locked out and nobody reading the form believes it is anonymous. A builder with anonymous submissions plus IP-based duplicate control handles both at once."}},{"@type":"Question","name":"What question type is best for evaluation criteria?","acceptedAnswer":{"@type":"Answer","text":"The Multiple choice grid. One grid covers every criterion on a single consistent scale, which keeps the form short and makes the responses easier to compare than a dozen separate questions."}},{"@type":"Question","name":"What is the rating scale range in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"A Linear scale starts at zero or one and ends on any whole number from 2 to 10, according to Google's question-type documentation. Most evaluation forms use 1 to 5, and both ends should be labelled because an unlabelled 3 means different things to different people."}},{"@type":"Question","name":"How do I evaluate Google Form responses once they arrive?","acceptedAnswer":{"@type":"Answer","text":"The Summary tab charts each question separately, which suits a cohort-wide evaluation. For per-person review, use the linked Sheet and keep your weighted total in a formula beside the name column."}},{"@type":"Question","name":"Is there an evaluation form template in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"One. The native gallery ships Course Evaluation under Education. There is no employee performance review and no skills assessment template, so those are built from a blank form or copied from a previous cycle."}},{"@type":"Question","name":"Can respondents see their own evaluation score?","acceptedAnswer":{"@type":"Answer","text":"No. Google Forms cannot display a computed score on a non-quiz form, and it cannot send one afterwards. Sharing a result means emailing it manually, or using a builder that can show a calculated outcome on the confirmation screen."}}]},{"@type":"HowTo","@id":"https://formester.com/blog/google-form-evaluation/#howto","name":"Build an evaluation form in Google Forms","description":"Use a grid, a linear scale and a paragraph field to collect an evaluation, then calculate the total in the linked Google Sheet.","step":[{"@type":"HowToStep","position":1,"name":"Pick the evaluation type","text":"Decide whether you are running a performance review, a course evaluation or a skills assessment, because each one hits a different limit first."},{"@type":"HowToStep","position":2,"name":"Add a Multiple choice grid","text":"Rows are your criteria, columns are the rating labels, and one grid replaces a dozen separate questions."},{"@type":"HowToStep","position":3,"name":"Add a Linear scale","text":"Use 1 to 5 for a single overall rating and label both ends so the midpoint means one thing."},{"@type":"HowToStep","position":4,"name":"Add a Paragraph field","text":"Prompt the comment rather than leaving it blank, and keep it optional."},{"@type":"HowToStep","position":5,"name":"Link a Google Sheet for the total","text":"Google Forms cannot calculate, so put the weighted average in a SUMPRODUCT formula in the linked Sheet."}]},{"@type":"SoftwareApplication","@id":"https://formester.com/#software","url":"https://formester.com/","name":"Formester","applicationCategory":"BusinessApplication","operatingSystem":"Web, iOS, Android","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free forever plan, no credit card required"}}]}]
createdAt: "2026-08-27T00:00:00.000Z"
updatedAt: "2026-08-27T00:00:00.000Z"
publishedAt: "2026-08-27T00:00:00.000Z"
---

![Cover art for a guide to building evaluation forms in Google Forms](/blog/google-form-evaluation.jpg)

<p style="font-size: inherit;">An evaluation form in Google Forms is a rating sheet: a set of criteria, a scale to score each one against, and a box for the comment people actually read afterwards. It suits a manager running a review cycle, or an instructor collecting course feedback at the end of term. Coaches use it too, for scoring things they can watch happen. Where it stops suiting you is the moment the evaluation needs a total, because Google Forms has no field that works one out.</p>

<div class="tldr">
<p><strong>Key facts</strong></p>
<p>Google Forms will collect an evaluation. It will not score one. Build the criteria as a Multiple choice grid, add a Linear scale for the overall rating and a Paragraph field for comments, then work out any weighted total in the linked Google Sheet. On anonymity you get one or the other: an anonymous form, or one response per person.</p>
<ul>
<li><strong>4 question types built for rating:</strong> Linear scale, Rating, Multiple choice grid and Checkbox grid (<a href="https://support.google.com/docs/answer/7322334" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>Linear scale range:</strong> starts at zero or one, ends on any whole number from 2 to 10 (<a href="https://support.google.com/docs/answer/7322334" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>Fields that calculate a total: none.</strong> Points attach only to an answer key in quiz mode (<a href="https://support.google.com/docs/answer/7032287" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>Native evaluation templates: 1.</strong> Course Evaluation, under Education</li>
<li><strong>Blocking repeat submissions forces a Google sign-in</strong>, so it cannot coexist with a genuinely anonymous form (<a href="https://support.google.com/docs/answer/2839588" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
</ul>
</div>

<h2>Which kind of evaluation form are you building?</h2>

<p>Three jobs share the phrase, and they need different setups. The third column is the limit each one hits first, which is usually what sends people looking for another tool.</p>

<div class="table-wrap">
<table>
<thead><tr><th>Kind</th><th>Who fills it in</th><th>Where it runs out</th></tr></thead>
<tbody>
<tr><td><a href="#performance">Performance or employee review</a></td><td>A manager rating one person against fixed criteria</td><td>No weighting, so a critical criterion counts the same as a minor one</td></tr>
<tr><td><a href="#course">Course or instructor evaluation</a></td><td>Many students rating one course anonymously</td><td>Anonymous and one-response-per-student cannot both hold</td></tr>
<tr><td><a href="#skills">Skills or athlete assessment</a></td><td>A coach or assessor scoring observable criteria</td><td>No running total, so the score is worked out afterwards</td></tr>
</tbody>
</table></div>

<h2 id="performance">How do you build a performance or employee review in Google Forms?</h2>

<p>One form per review cycle, one response per manager. Fix the criteria before it goes out. Put them in a single grid so every manager rates against the same labels, and keep the whole thing to one screen so it gets finished in the meeting rather than after it.</p>
<p>The problem shows up when you read the results. Every criterion carries equal weight, so a missed deadline scores the same as an untidy desk. And if your review framework already says that accuracy matters three times as much as tidiness, you will find there is nowhere inside the form for that ratio to live, which leaves you accepting a flat average you do not believe in or rebuilding the arithmetic in a spreadsheet. Almost everyone rebuilds it.</p>
<p>Which is why most teams end up doing the arithmetic in the Sheet and pasting the number back into their HR system by hand.</p>

<h2 id="course">How do you run a course or instructor evaluation in Google Forms?</h2>

<p>One form shared with the whole cohort, answered anonymously, read as an aggregate. This is the use case Google Forms is genuinely good at: the <strong>Summary</strong> tab charts each question on its own, which is exactly how you want to read forty students rating the same six statements.</p>
<p>The catch is response integrity. Leave the form open and one student can submit five times, which skews a cohort of forty badly. Lock it down with <strong>Limit to 1 response</strong> and you have just asked every student to sign in to a Google Account first, which nobody reads as anonymous. Instructors have been asking Google for a way out of this since at least 2020, in threads like <a href="https://support.google.com/docs/thread/57816064/limit-a-google-form-to-one-answer-with-the-same-e-mail-without-their-needing-to-login-with-google" target="_blank" rel="noopener">this one in the Docs Editors Community</a>, and the answer has not changed.</p>
<p>Most departments pick anonymity and live with the occasional duplicate. That is the right call at forty students and the wrong one at four hundred.</p>

<h2 id="skills">How do you score a skills or athlete assessment in Google Forms?</h2>

<p>You are filling this one in while the thing happens, usually on a phone, usually standing up. Grids suit that. The criteria are observable and the scale is short, and a phone taps through a grid far faster than it works through eight separate questions stacked down the screen.</p>
<p>What breaks is the score. An assessment usually ends with a number that decides something: a placement, a squad, a pass mark. Google Forms records the individual ratings and hands you nothing that adds them up, so the assessor finishes the form and then opens a spreadsheet to find out what the result was. On a tryout with sixty athletes that gap is the whole job.</p>
<h2 id="build-it">Which question types should an evaluation form use?</h2>

<p>Google's question-type documentation lists twelve options. You need three. The rest of the work is wording.</p>
<p><img src="/blog/google-forms-evaluation/01-question-types.jpg" alt="The Google Forms question type dropdown showing Linear scale, Rating, Multiple choice grid and Checkbox grid" loading="lazy" style="width:100%;max-width:240px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<ol>
<li><strong>Multiple choice grid</strong> for the criteria block. Rows are your criteria (communication, punctuality, accuracy and initiative). Columns are the rating labels. One grid replaces a dozen separate questions and keeps the scale consistent across all of them.</li>
<li><strong>Linear scale</strong> for a single overall rating. Google allows a scale starting at zero or one and ending anywhere from 2 to 10, so 1 to 5 is a choice rather than a default. Label both ends, because an unlabelled 3 means different things to different people.</li>
<li><strong>Paragraph</strong> for the comment. This is the field people actually read afterwards, so give it a prompt rather than leaving it blank: "one thing to keep doing, one thing to change" gets better answers than "comments".</li>
</ol>
<p>Set the grid and the overall scale to required. Leave the comment optional, or you will get "n/a" instead of nothing, which is worse because it looks like data.</p>

<h2 id="scoring">Can Google Forms score an evaluation automatically?</h2>

<p>No. There is no calculation field anywhere in Google Forms, so nothing multiplies or averages across questions. This is the one fact that pushes evaluation forms out of Google Forms altogether, and you will usually discover it at the worst moment: the responses are in, the review meeting is tomorrow, and you are looking at forty rows with no total column anywhere in sight.</p>
<ul>
<li><strong>Quiz mode does not fill the gap.</strong> Turning on <strong>Make this a quiz</strong> lets you build an <a href="https://support.google.com/docs/answer/7032287" target="_blank" rel="noopener">answer key</a> and attach points to the answers you mark correct. An evaluation has no correct answer, so there is nothing for the points to attach to.</li>
<li><strong>Weighting is manual.</strong> If accuracy matters three times as much as tidiness, that ratio lives in a spreadsheet formula, not in the form.</li>
<li><strong>Respondents see nothing.</strong> Google Forms cannot show a computed result on the confirmation screen of a non-quiz form, so the person being evaluated learns their score only if you email it.</li>
</ul>
<p>Twelve question types, none of them arithmetic.</p>

<h2 id="weighting">How do you weight evaluation criteria in the linked Google Sheet?</h2>

<p>Link a Sheet from the <strong>Responses</strong> tab and the weighting becomes a one-line formula. Each grid criterion arrives as its own column, so put your weights in a row above the data and let <code>SUMPRODUCT</code> do the arithmetic.</p>
<p>With criteria in columns D to G and their weights sitting in <code>$D$1:$G$1</code>, the weighted score for the row is:</p>
<div class="table-wrap">
<table>
<thead><tr><th>What you want</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Weighted total</td><td><code>=SUMPRODUCT(D2:G2,$D$1:$G$1)</code></td></tr>
<tr><td>Weighted average out of 5</td><td><code>=SUMPRODUCT(D2:G2,$D$1:$G$1)/SUM($D$1:$G$1)</code></td></tr>
<tr><td>Flat average, no weighting</td><td><code>=AVERAGE(D2:G2)</code></td></tr>
</tbody>
</table></div>
<p>Two things to watch. Grid answers land as text labels, not numbers, so either label your columns 1 to 5 in the form or convert them in the Sheet before the formula will run. And new responses append below your formula rather than inheriting it, so wrap it in <code>ARRAYFORMULA</code> or the totals stop appearing after row two.</p>
<p>Worth being clear-eyed about what this means: whoever owns the Sheet now owns the scoring rubric. Fine until they leave.</p>

<h2 id="anonymity">Can a course evaluation be anonymous and still block repeat submissions?</h2>

<p>No, and this is the second reason evaluation forms leave Google Forms. Blocking repeats needs <strong>Limit to 1 response</strong>, and Google's documentation is explicit about the cost: to fill in the form, users must sign in to a Google Account.</p>
<p><img src="/blog/google-forms-evaluation/02-limit-1-response.jpg" alt="The Google Forms Limit to 1 response setting sitting under a REQUIRES SIGN IN label" loading="lazy" style="width:100%;max-width:692px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<p>Google does add one nuance worth knowing: with <strong>Collect email addresses</strong> left off, it <a href="https://support.google.com/docs/answer/2839588" target="_blank" rel="noopener">does not record the usernames</a> of people who sign in. So the submission is not technically identified to you. It is still not anonymous in the way that matters, for two reasons. Anyone without a Google Account cannot respond at all, which quietly excludes part of your cohort. And a form that demands a login before it will accept honest feedback about a manager or an instructor does not get honest feedback, whatever the privacy notice says.</p>
<p>The usual workaround is a private link plus trust. Fine for a friendly cohort, useless for a contested review.</p>

<h2 id="template">Is there an evaluation form template in Google Forms?</h2>

<p>One, and only for the education use case. The native gallery ships <strong>Course Evaluation</strong> under Education, which gives you a rating grid and a comment box to edit down. There is no employee performance review template and no skills assessment template, so those start from a blank form or a copy of last cycle's.</p>
<p>Copying last cycle's is the faster route and carries a trap: <strong>Make a copy</strong> duplicates the questions and settings and leaves the responses behind, which is what you want for a new cycle and a shock if you assumed the history travelled with it.</p>
<p>One template out of the seventeen in the gallery, and it is pointed at courses rather than people.</p>

<h2 id="reading-results">How do you read evaluation results in Google Forms?</h2>

<p>The <strong>Summary</strong> tab charts each question on its own. If you are reading a whole cohort that is exactly what you want. If you are reading one person, it is close to useless, because you cannot filter the summary down to a single evaluatee.</p>
<p><img src="/blog/google-forms-evaluation/03-summary-tab.jpg" alt="The Google Forms Summary tab charting one question at a time, with no way to filter to a single evaluatee" loading="lazy" style="width:100%;max-width:791px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<p>For anything per-person, work in the linked Sheet. Filter by the name column and keep the weighted total from the formula above beside it. The <strong>Individual</strong> tab will show you one submission at a time, which helps when you want to read a single manager's comments and not when you want to compare six of them.</p>

<div class="better">
<h5>Why Formester's evaluation forms are the better choice</h5>
<p>The scoring and the anonymity both stay inside the form.</p>
<ul>
<li>Rating, scale and ranking answers roll up into <a href="https://formester.com/features/form-analytics/">per-question summaries</a> with filters, so you can look at one cohort or one reviewer without exporting</li>
<li>Anonymous submissions that still block duplicates by IP, so honest feedback and one-response-per-person hold at the same time</li>
<li>Start from the <a href="https://formester.com/templates/course-evaluation-form-25364/">Course Evaluation Form</a> rather than building the criteria grid from scratch</li>
<li>Conditional logic can skip whole criteria blocks that do not apply to a role (Personal plan)</li>
</ul>
<p><img src="/blog/formester-ui/summary-analytics.jpg" alt="Formester's Summary tab showing per-question response breakdowns with Download all and Filters controls" loading="lazy" style="width:100%;max-width:848px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<p><a class="btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
</div>

<section class="faq">
<h2>Google Forms evaluation FAQ</h2>
<details><summary>How do I make an evaluation form in Google Forms?</summary><p>Use a Multiple choice grid for the criteria, with one row per criterion and one column per rating label. Add a Linear scale for an overall score and a Paragraph field for comments. Mark the grid and the scale required, and leave the comment optional.</p></details>
<details><summary>Can Google Forms score an evaluation automatically?</summary><p>No. Google Forms has no calculation field, so nothing adds, averages or weights answers across questions. Quiz mode assigns points through an answer key, and an evaluation has no correct answer for the key to hold. Any total is calculated in the linked Google Sheet.</p></details>
<details><summary>How do I weight criteria differently in a Google Forms evaluation?</summary><p>Not in the form. Link a Google Sheet and put the weighting into a SUMPRODUCT formula there, multiplying each criterion column by its weight and dividing by the total weight. The form stays a collection tool.</p></details>
<details><summary>Can a course evaluation be anonymous and still stop repeat submissions?</summary><p>Not in Google Forms. Limit to 1 response requires every respondent to sign in to a Google Account, per Google's own documentation, so anyone without an account is locked out and nobody reading the form believes it is anonymous. A builder with anonymous submissions plus IP-based duplicate control handles both at once.</p></details>
<details><summary>What question type is best for evaluation criteria?</summary><p>The Multiple choice grid. One grid covers every criterion on a single consistent scale, which keeps the form short and makes the responses easier to compare than a dozen separate questions.</p></details>
<details><summary>What is the rating scale range in Google Forms?</summary><p>A Linear scale starts at zero or one and ends on any whole number from 2 to 10, according to Google's question-type documentation. Most evaluation forms use 1 to 5, and both ends should be labelled because an unlabelled 3 means different things to different people.</p></details>
<details><summary>How do I evaluate Google Form responses once they arrive?</summary><p>The Summary tab charts each question separately, which suits a cohort-wide evaluation. For per-person review, use the linked Sheet and keep your weighted total in a formula beside the name column.</p></details>
<details><summary>Is there an evaluation form template in Google Forms?</summary><p>One. The native gallery ships Course Evaluation under Education. There is no employee performance review and no skills assessment template, so those are built from a blank form or copied from a previous cycle.</p></details>
<details><summary>Can respondents see their own evaluation score?</summary><p>No. Google Forms cannot display a computed score on a non-quiz form, and it cannot send one afterwards. Sharing a result means emailing it manually, or using a builder that can show a calculated outcome on the confirmation screen.</p></details>
</section>

<h2>Related reading</h2>

<ul>
<li><a href="https://formester.com/blog/5-ways-to-view-responses-in-google-forms/"><strong>View responses in Google Forms</strong></a> - the five places evaluation answers land, and which one to read.</li>
<li><a href="https://formester.com/blog/best-google-forms-templates/"><strong>All 17 Google Forms templates</strong></a> - including Course Evaluation, and what each one stops short of.</li>
<li><a href="https://formester.com/blog/how-to-make-anonymous-google-form-or-survey/"><strong>Make an anonymous Google Form</strong></a> - the setting behind the anonymity trap above.</li>
<li><a href="https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/"><strong>Conditional questions in Google Forms</strong></a> - why criteria blocks cannot be skipped per role.</li>
<li><a href="https://formester.com/blog/google-form-send-copy-of-response/"><strong>Send a copy of Google Form responses</strong></a> - how to get the evaluation back to the person who filled it in.</li>
</ul>
