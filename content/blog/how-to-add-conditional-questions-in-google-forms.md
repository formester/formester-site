---
slug: "how-to-add-conditional-questions-in-google-forms"
title: "How to Add Conditional Questions in Google Forms"
description: "Google Forms routes on sections, not on individual questions, and only Multiple choice and Dropdown can branch. Here is how to set it up, and where the model runs out."
metaTitle: "Conditional Questions in Google Forms: Full Guide"
metaDescription: "Add conditional logic to Google Forms with sections and Go to section based on answer. See the two question types that can branch and the limits."
keywords: "google form conditional questions,google forms conditional logic,conditional logic in google forms,google form questions based on answers,google forms skip logic,google forms branching,google forms dependent questions,google forms if yes then"
author: "Harsh Shah"
authorProfile: "https://www.linkedin.com/in/harshshahseo/"
authorImage: "/blog/authors/harsh-shah.jpg"
coverImgAlt: "Cover art for a guide to conditional questions in Google Forms"
featured: false
coverImg: {"url": "https://formester.com/blog/how-to-add-conditional-questions-in-google-forms.jpg", "width": 2400, "height": 1350}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://formester.com/#organization","url":"https://formester.com/","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},{"@type":"WebPage","@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#webpage","url":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/","name":"Conditional Questions in Google Forms: Full Guide","isPartOf":{"@id":"https://formester.com/#organization"},"breadcrumb":{"@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#breadcrumb"},"inLanguage":"en-US","description":"Google Forms routes on sections, not on individual questions, and only Multiple choice and Dropdown can branch. Here is how to set it up, and where the model runs out.","datePublished":"2026-05-15","dateModified":"2026-08-30"},{"@type":"BreadcrumbList","@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://formester.com/blog/"},{"@type":"ListItem","position":3,"name":"How to Add Conditional Questions in Google Forms","item":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/"}]},{"@type":"BlogPosting","@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#article","headline":"How to Add Conditional Questions in Google Forms","image":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms.jpg","author":{"@type":"Person","name":"Harsh Shah","url":"https://www.linkedin.com/in/harshshahseo/","image":"https://formester.com/blog/authors/harsh-shah.jpg"},"publisher":{"@id":"https://formester.com/#organization"},"inLanguage":"en-US","description":"Google Forms routes on sections, not on individual questions, and only Multiple choice and Dropdown can branch. Here is how to set it up, and where the model runs out.","datePublished":"2026-05-15","dateModified":"2026-08-30","mainEntityOfPage":{"@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#webpage"},"about":[{"@type":"SoftwareApplication","name":"Google Forms","applicationCategory":"BusinessApplication","url":"https://docs.google.com/forms/","operatingSystem":"Web"}],"mentions":[{"@id":"https://formester.com/#software"}],"citation":[{"@type":"WebPage","name":"Show questions based on answers","url":"https://support.google.com/docs/answer/141062","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"Choose a type of question for your form","url":"https://support.google.com/docs/answer/7322334","publisher":{"@type":"Organization","name":"Google"}}]},{"@type":"FAQPage","@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#faq","mainEntity":[{"@type":"Question","name":"How do I add conditional questions in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Split the form into sections, then open the three-dot menu on a Multiple choice or Dropdown question and choose Go to section based on answer. Each answer option gets its own destination, so picking an option sends the respondent to the section you point it at."}},{"@type":"Question","name":"Does Google Forms have conditional logic?","acceptedAnswer":{"@type":"Answer","text":"It has section-based branching rather than per-question logic. An answer can send someone to a different section, but no question can be shown or hidden on its own inside a section. Everything in a section is displayed together."}},{"@type":"Question","name":"Which question types support Go to section based on answer?","acceptedAnswer":{"@type":"Answer","text":"Two. Google's documentation states that Go to section based on answer is only available for Multiple choice and Dropdown question types. Checkboxes, Short answer, Linear scale and every grid type cannot branch."}},{"@type":"Question","name":"What is the difference between skip logic and conditional logic?","acceptedAnswer":{"@type":"Answer","text":"Skip logic sends a respondent past questions they do not need, which is what Google Forms does at the section level. Conditional logic usually means showing or hiding individual fields as someone answers, which Google Forms does not do."}},{"@type":"Question","name":"Can Google Forms show a question based on a checkbox answer?","acceptedAnswer":{"@type":"Answer","text":"No. Checkboxes allow several selections at once, so a single destination cannot be resolved from the answer, and Google does not offer branching on that type. Rework the question as Multiple choice if the branch matters more than multiple selection."}},{"@type":"Question","name":"How do I make a Google Form end early based on an answer?","acceptedAnswer":{"@type":"Answer","text":"In the same Go to section based on answer dropdown, set the option's destination to Submit form. Anyone choosing that answer skips the remaining sections and goes straight to submission."}},{"@type":"Question","name":"Why is Go to section based on answer missing from my question?","acceptedAnswer":{"@type":"Answer","text":"Either the question is not a Multiple choice or Dropdown, or the form has only one section. Add a second section first, because there is nowhere to branch to until at least one other section exists."}},{"@type":"Question","name":"Can respondents go backwards through a branched Google Form?","acceptedAnswer":{"@type":"Answer","text":"Yes, using the Back button. That is worth knowing before you rely on branching for anything sensitive, because someone can change an earlier answer and take a different route through the form."}}]},{"@type":"HowTo","@id":"https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/#howto","name":"Add conditional questions in Google Forms","description":"Use sections plus Go to section based on answer to route respondents down different paths.","step":[{"@type":"HowToStep","position":1,"name":"Plan the branches","text":"Decide which answer should lead where before touching the form, because rebuilding section order later is tedious."},{"@type":"HowToStep","position":2,"name":"Add a section for each path","text":"Use Add section in the right toolbar so every branch has somewhere to land."},{"@type":"HowToStep","position":3,"name":"Add a Multiple choice or Dropdown question","text":"Only these two types can branch, so the deciding question has to be one of them."},{"@type":"HowToStep","position":4,"name":"Open Go to section based on answer","text":"Click the three-dot menu on that question and choose Go to section based on answer."},{"@type":"HowToStep","position":5,"name":"Point each option at a section","text":"Every answer option gets its own dropdown. Choose a section, or choose Submit form to end the form there."},{"@type":"HowToStep","position":6,"name":"Set what happens after each section","text":"Use the After section dropdown so a branch does not fall through into a section meant for someone else."},{"@type":"HowToStep","position":7,"name":"Preview every path","text":"Open the preview and walk each branch end to end, because a wrong destination is invisible in the editor."}]},{"@type":"SoftwareApplication","@id":"https://formester.com/#software","url":"https://formester.com/","name":"Formester","applicationCategory":"BusinessApplication","operatingSystem":"Web, iOS, Android","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free forever plan, no credit card required"}}]}]
createdAt: "2026-05-15T04:13:56.863Z"
updatedAt: "2026-08-30T00:00:00.000Z"
publishedAt: "2026-05-15T04:13:56.863Z"
---

![Cover art for a guide to conditional questions in Google Forms](/blog/how-to-add-conditional-questions-in-google-forms.jpg)

<p style="font-size: inherit;">A conditional question is one that only appears when an earlier answer makes it relevant, which is how a single form can serve a new customer and a returning one without showing either of them the other's questions. Google Forms supports a version of this, though not the version most people picture when they go looking for it. The routing happens between sections rather than between individual questions, and only two of the twelve question types can trigger it.</p>

<div class="tldr">
<p><strong>Key facts</strong></p>
<p>Split the form into sections, then open the three-dot menu on a Multiple choice or Dropdown question and pick <strong>Go to section based on answer</strong>. Each answer option gets its own destination, so choosing an option sends that respondent to the section you point it at, or straight to submission.</p>
<ul>
<li><strong>Question types that can branch: 2.</strong> Multiple choice and Dropdown, and Google says so explicitly (<a href="https://support.google.com/docs/answer/141062" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>The unit of logic is the section</strong>, not the question, so nothing hides or appears inside a section</li>
<li><strong>4 destinations per answer:</strong> continue to the next section, jump to any section, go back to an earlier one, or <strong>Submit form</strong></li>
<li><strong>Question types that cannot branch: 10</strong>, including Checkboxes, Short answer, Linear scale and every grid (<a href="https://support.google.com/docs/answer/7322334" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>Respondents can go back</strong> and change an earlier answer, which re-routes them down a different path</li>
</ul>
</div>

<h2 id="what">What are conditional questions in Google Forms?</h2>

<p>They are questions a respondent only reaches because of how they answered something earlier. In a support form, choosing "Billing" takes someone to billing questions while choosing "Bug report" takes them somewhere else entirely, and neither person sees the other path.</p>
<p>Google Forms builds this out of two pieces that work together. Sections divide the form into pages, and an answer on a Multiple choice or Dropdown question decides which page comes next. That distinction matters more than it sounds, because it sets the limit you will hit later: you can route people around whole sections, but you cannot show or hide one field inside a section based on the answer above it.</p>

<div class="table-wrap">
<table>
<thead><tr><th>What you want</th><th>Google Forms</th><th>Where it lands</th></tr></thead>
<tbody>
<tr><td>Send people down different paths</td><td>Yes, by section</td><td>Works well. This guide covers it</td></tr>
<tr><td>Show one extra field when someone answers Yes</td><td>No</td><td>The field needs its own section, or it stays visible to everyone</td></tr>
<tr><td>Branch from a Checkbox answer</td><td>No</td><td>Rework the question as Multiple choice</td></tr>
<tr><td>End the form early for some answers</td><td>Yes</td><td>Set the option's destination to Submit form</td></tr>
</tbody>
</table></div>

<h2 id="how">How do you add conditional questions in Google Forms?</h2>

<p>Seven steps, and the order matters because the branching option does not appear until there is somewhere to branch to.</p>

<h3>1. Plan the branches before you build them</h3>
<p>Write down which answer should lead where. This sounds like advice you can skip, and then you reorder sections halfway through and discover that every destination you already set has quietly followed the section it pointed at.</p>

<h3>2. Add a section for each path</h3>
<p>Use the bottom icon in the right-hand toolbar to add a section. Each branch needs its own landing place, and Google numbers them as you go, so a form with a fork in it starts life as Section 1 of 2.</p>
<p><img src="/blog/google-forms-conditional/01-sections.jpg" alt="A Google Form split into Section 1 of 2 and Section 2 of 2, with the After section 1 routing dropdown between them" loading="lazy" style="width:100%;max-width:810px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>

<h3>3. Make the deciding question Multiple choice or Dropdown</h3>
<p>This is the constraint that catches people, and it is documented rather than accidental: Go to section based on answer is only available for those two types. If your deciding question is a Checkbox list, nothing you do will make it branch, because several boxes could be ticked at once and there would be no single destination to resolve.</p>

<h3>4. Open Go to section based on answer</h3>
<p>Click the three-dot menu at the bottom right of the question card. The option sits between Description and Shuffle option order.</p>
<p><img src="/blog/google-forms-conditional/02-go-to-section.jpg" alt="The Google Forms question menu showing Go to section based on answer between Description and Shuffle option order" loading="lazy" style="width:100%;max-width:340px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>

<h3>5. Point each answer at a section</h3>
<p>Every option now has its own dropdown on the right. You can continue to the next section, jump to any section in the form, send someone back to an earlier one, or end things immediately with Submit form.</p>
<p><img src="/blog/google-forms-conditional/03-per-option-routing.jpg" alt="The per-option routing dropdown in Google Forms offering Continue to next section, Go to section 1, Go to section 2 and Submit form" loading="lazy" style="width:100%;max-width:294px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>

<h3>6. Set what happens after each section</h3>
<p>Underneath every section is an <strong>After section</strong> dropdown, and leaving it on the default is the single most common way branched forms break. A respondent who finishes the billing section will fall straight through into the bug-report section unless you tell that section to submit or to skip ahead.</p>

<h3>7. Preview every path end to end</h3>
<p>Open the preview and walk each branch as a respondent would. A destination pointed at the wrong section looks completely normal in the editor, and the only way to catch it is to answer the question and see where you land.</p>

<div class="fmstr-blog-cta">
<p><strong>Need logic on the question rather than the section?</strong> Formester shows and hides individual fields as people answer, with no sections to maintain.</p>
<p><a class="fmstr-blog-cta__btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
<p class="fmstr-blog-cta__meta">Free forever plan &middot; No credit card &middot; Setup in 2 minutes</p>
</div>

<h2 id="limits">Where does Google Forms conditional logic run out?</h2>

<p>Three limits account for almost every "why can't I do this" thread about branching, and none of them has a workaround inside Google Forms.</p>
<ul>
<li><strong>No per-question visibility.</strong> A field cannot appear when someone answers Yes above it. Every field in a section shows at once, so a single conditional field needs a section of its own, and a form with eight of them needs eight sections.</li>
<li><strong>No logic on the answer's content.</strong> Routing reads which option was chosen, so you cannot branch on a number being over a threshold, on a date, or on text someone typed.</li>
<li><strong>No combining conditions.</strong> There is no way to express "if they chose Enterprise and picked more than 50 seats", because each option carries exactly one destination and nothing compares two answers.</li>
</ul>
<p>For a support triage form or a two-audience survey, none of this gets in the way. For a quote form where the questions depend on numbers people type, the section model stops fitting quite quickly.</p>

<h2 id="vs">Section branching or per-question logic: which do you need?</h2>

<p>The honest test is how many conditional fields you have. One or two forks, each leading to a group of questions, is exactly what sections are for and Google Forms handles it without complaint. A dozen individually conditional fields turns into a dozen sections, and maintaining the After section dropdown on each one becomes its own job.</p>

<div class="better">
<h5>Why Formester's conditional logic is the better choice</h5>
<p>Logic that lives on the field instead of the page.</p>
<ul>
<li>Show or hide <a href="https://formester.com/features/conditional-logic/">individual questions</a> as someone answers, with no sections to create or maintain</li>
<li>Branch from any field type, including checkboxes, text and numbers, rather than only two of them</li>
<li>Conditions can read what was actually entered, so a number over a threshold or a specific date can drive the form</li>
<li>One page can hold the whole flow, which keeps the completion rate up on mobile</li>
</ul>
<p><a class="btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
</div>

<section class="faq">
<h2>Google Forms conditional questions FAQ</h2>
<details><summary>How do I add conditional questions in Google Forms?</summary><p>Split the form into sections, then open the three-dot menu on a Multiple choice or Dropdown question and choose Go to section based on answer. Each answer option gets its own destination, so picking an option sends the respondent to the section you point it at.</p></details>
<details><summary>Does Google Forms have conditional logic?</summary><p>It has section-based branching rather than per-question logic. An answer can send someone to a different section, but no question can be shown or hidden on its own inside a section. Everything in a section is displayed together.</p></details>
<details><summary>Which question types support Go to section based on answer?</summary><p>Two. Google's documentation states that Go to section based on answer is only available for Multiple choice and Dropdown question types. Checkboxes, Short answer, Linear scale and every grid type cannot branch.</p></details>
<details><summary>What is the difference between skip logic and conditional logic?</summary><p>Skip logic sends a respondent past questions they do not need, which is what Google Forms does at the section level. Conditional logic usually means showing or hiding individual fields as someone answers, which Google Forms does not do.</p></details>
<details><summary>Can Google Forms show a question based on a checkbox answer?</summary><p>No. Checkboxes allow several selections at once, so a single destination cannot be resolved from the answer, and Google does not offer branching on that type. Rework the question as Multiple choice if the branch matters more than multiple selection.</p></details>
<details><summary>How do I make a Google Form end early based on an answer?</summary><p>In the same Go to section based on answer dropdown, set the option's destination to Submit form. Anyone choosing that answer skips the remaining sections and goes straight to submission.</p></details>
<details><summary>Why is Go to section based on answer missing from my question?</summary><p>Either the question is not a Multiple choice or Dropdown, or the form has only one section. Add a second section first, because there is nowhere to branch to until at least one other section exists.</p></details>
<details><summary>Can respondents go backwards through a branched Google Form?</summary><p>Yes, using the Back button. That is worth knowing before you rely on branching for anything sensitive, because someone can change an earlier answer and take a different route through the form.</p></details>
</section>

<h2>Related reading</h2>

<ul>
<li><a href="https://formester.com/blog/how-create-form-sections-in-google-forms/"><strong>Create sections in Google Forms</strong></a> - the building block every branch depends on.</li>
<li><a href="https://formester.com/blog/5-ways-to-view-responses-in-google-forms/"><strong>View responses in Google Forms</strong></a> - how branched answers arrive once people start submitting.</li>
<li><a href="https://formester.com/blog/how-to-make-multi-page-google-forms/"><strong>Multi-page Google Forms</strong></a> - splitting a long form up without adding logic.</li>
<li><a href="https://formester.com/blog/google-form-evaluation/"><strong>Evaluation forms in Google Forms</strong></a> - where skipping criteria per role runs into the same limit.</li>
</ul>
