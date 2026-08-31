---
slug: "captcha-for-google-forms"
title: "CAPTCHA for Google Forms (and Why There Isn't One)"
description: "Google Forms has no CAPTCHA setting and no reCAPTCHA integration. Here is what the spam-blocking options actually are, why the regex trick keeps getting recommended, and when to move the form."
metaTitle: "CAPTCHA for Google Forms: What Actually Works"
metaDescription: "Google Forms has no CAPTCHA option. See the real spam-blocking settings, why the regex workaround is weak, and what to use when a form is being hit."
keywords: "captcha for google forms,google forms captcha,recaptcha google forms,google form spam protection,how to stop spam on google forms,captcha for google forms free,remove captcha from google form"
author: "Harsh Shah"
authorProfile: "https://www.linkedin.com/in/harshshahseo/"
authorImage: "https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"
coverImgAlt: "Cover art for a guide to CAPTCHA and spam protection on Google Forms"
featured: false
coverImg: {"url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/ac0fe2a6c90227a4_captcha-for-google-forms.jpg", "width": 2400, "height": 1350}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://formester.com/#organization","url":"https://formester.com/","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},{"@type":"WebPage","@id":"https://formester.com/blog/captcha-for-google-forms/#webpage","url":"https://formester.com/blog/captcha-for-google-forms/","name":"CAPTCHA for Google Forms: What Actually Works","isPartOf":{"@id":"https://formester.com/#organization"},"breadcrumb":{"@id":"https://formester.com/blog/captcha-for-google-forms/#breadcrumb"},"inLanguage":"en-US","description":"Google Forms has no CAPTCHA setting and no reCAPTCHA integration. Here is what the spam-blocking options actually are, why the regex trick keeps getting recommended, and when to move the form.","datePublished":"2026-08-29","dateModified":"2026-08-29"},{"@type":"BreadcrumbList","@id":"https://formester.com/blog/captcha-for-google-forms/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://formester.com/blog/"},{"@type":"ListItem","position":3,"name":"CAPTCHA for Google Forms (and Why There Isn't One)","item":"https://formester.com/blog/captcha-for-google-forms/"}]},{"@type":"BlogPosting","@id":"https://formester.com/blog/captcha-for-google-forms/#article","headline":"CAPTCHA for Google Forms (and Why There Isn't One)","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/ac0fe2a6c90227a4_captcha-for-google-forms.jpg","author":{"@type":"Person","name":"Harsh Shah","url":"https://www.linkedin.com/in/harshshahseo/","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"},"publisher":{"@id":"https://formester.com/#organization"},"inLanguage":"en-US","description":"Google Forms has no CAPTCHA setting and no reCAPTCHA integration. Here is what the spam-blocking options actually are, why the regex trick keeps getting recommended, and when to move the form.","datePublished":"2026-08-29","dateModified":"2026-08-29","mainEntityOfPage":{"@id":"https://formester.com/blog/captcha-for-google-forms/#webpage"},"about":[{"@type":"SoftwareApplication","name":"Google Forms","applicationCategory":"BusinessApplication","url":"https://docs.google.com/forms/","operatingSystem":"Web"}],"mentions":[{"@id":"https://formester.com/#software"},{"@type":"SoftwareApplication","name":"reCAPTCHA","applicationCategory":"SecurityApplication","url":"https://developers.google.com/recaptcha","operatingSystem":"Web"}],"citation":[{"@type":"WebPage","name":"Publish & share your form with responders","url":"https://support.google.com/docs/answer/2839588","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"How to set rules for your form","url":"https://support.google.com/docs/answer/3378864","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"reCAPTCHA","url":"https://developers.google.com/recaptcha","publisher":{"@type":"Organization","name":"Google"}}]},{"@type":"FAQPage","@id":"https://formester.com/blog/captcha-for-google-forms/#faq","mainEntity":[{"@type":"Question","name":"Does Google Forms have CAPTCHA?","acceptedAnswer":{"@type":"Answer","text":"No. There is no CAPTCHA setting anywhere in the form editor and no way to drop reCAPTCHA into a Google Form. Every result promising one is either a response-validation workaround, a third-party add-on, or a different form builder."}},{"@type":"Question","name":"How do I add reCAPTCHA to a Google Form?","acceptedAnswer":{"@type":"Answer","text":"You cannot, and the reason is structural rather than a missing feature. reCAPTCHA is embedded with a site key in your own page's HTML, and Google Forms gives you no access to the form's markup. Embedding the form in your site does not help either, because the iframe belongs to Google."}},{"@type":"Question","name":"Why does my Google Form show a CAPTCHA then?","acceptedAnswer":{"@type":"Answer","text":"That is Google checking the person, not your form. It appears when Google's own abuse systems flag the traffic or the browser session. It is not something you enabled and not something you can configure or remove from the form's settings."}},{"@type":"Question","name":"What is the regex trick for Google Forms CAPTCHA?","acceptedAnswer":{"@type":"Answer","text":"It is a short-answer question with response validation set to a regular expression, asking something a bot is unlikely to answer, such as a simple sum. It stops naive scripts and nothing else, because the question is fixed and visible in the page for anyone who looks."}},{"@type":"Question","name":"How do I stop spam on a Google Form without CAPTCHA?","acceptedAnswer":{"@type":"Answer","text":"Restrict the form to signed-in users, which forces a Google account, or turn on Limit to 1 response, which does the same thing. Both cut spam sharply and both end anonymity, so they are a trade rather than a fix."}},{"@type":"Question","name":"Can an add-on add CAPTCHA to Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Some add-ons offer spam scoring or extra validation on submissions, but none can inject a CAPTCHA widget into the form itself. The add-on sees the response after it is submitted, which means the junk is already in your sheet."}},{"@type":"Question","name":"Is Google Forms safe to use for public forms?","acceptedAnswer":{"@type":"Answer","text":"For low-stakes collection it is perfectly fine, and plenty of teams run public Google Forms for years without ever being troubled. For a public form attached to a campaign, an inbox or a paid list, the absence of any bot challenge means you are relying on obscurity, and a form URL that gets shared widely will eventually get hit."}},{"@type":"Question","name":"What blocks bots better than CAPTCHA?","acceptedAnswer":{"@type":"Answer","text":"Layers, and ones the respondent never has to solve. An invisible challenge verified server-side catches automated browsers, automatic scoring catches submissions that look wrong, and restricting the form to domains you own removes the copy-the-URL route. Any one of them alone is a speed bump."}}]},{"@type":"HowTo","@id":"https://formester.com/blog/captcha-for-google-forms/#howto","name":"Add a pseudo-CAPTCHA to a Google Form with response validation","description":"Use a short answer question with a regular expression rule as a basic bot check.","step":[{"@type":"HowToStep","position":1,"name":"Add a short answer question","text":"Add a question a bot is unlikely to answer correctly, such as a simple sum."},{"@type":"HowToStep","position":2,"name":"Open response validation","text":"Click the three-dot menu on that question and choose Response validation."},{"@type":"HowToStep","position":3,"name":"Set a regular expression","text":"Choose Regular expression, then Matches, and enter the pattern for the correct answer."},{"@type":"HowToStep","position":4,"name":"Write the error text","text":"Set custom error text so a real person who mistypes knows what went wrong."}]},{"@type":"SoftwareApplication","@id":"https://formester.com/#software","url":"https://formester.com/","name":"Formester","applicationCategory":"BusinessApplication","operatingSystem":"Web, iOS, Android","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free forever plan, no credit card required"}}]}]
createdAt: "2026-08-29T00:00:00.000Z"
updatedAt: "2026-08-29T00:00:00.000Z"
publishedAt: "2026-08-29T00:00:00.000Z"
---

![Cover art for a guide to CAPTCHA and spam protection on Google Forms](https://formester-strapi.s3.ap-south-1.amazonaws.com/ac0fe2a6c90227a4_captcha-for-google-forms.jpg)

<p style="font-size: inherit;">A CAPTCHA is the challenge that separates a person from a script before a form accepts the submission. People go looking for one on Google Forms after a public form starts filling with junk entries, usually a campaign form or an inbox that got shared further than intended. Google Forms has never had one, and the workarounds you will find recommended are considerably weaker than the pages recommending them tend to admit.</p>

<div class="tldr">
<p><strong>Key facts</strong></p>
<p>Google Forms has no CAPTCHA setting and no way to add reCAPTCHA, because you never get access to the form's HTML. The real anti-spam options are restricting the form to signed-in users, a response-validation question that acts as a weak challenge, or moving the form to a builder that ships bot protection.</p>
<ul>
<li><strong>CAPTCHA settings in Google Forms: none.</strong> Not in Settings, not in the question menu, not in Add-ons</li>
<li><strong>reCAPTCHA needs a site key in your page markup</strong>, which Google Forms does not expose (<a href="https://developers.google.com/recaptcha" target="_blank" rel="noopener">Google for Developers</a>)</li>
<li><strong>The one real block:</strong> requiring sign-in, which every respondent must have a Google account for (<a href="https://support.google.com/docs/answer/2839588" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>The popular workaround</strong> is response validation with a regular expression, a fixed question any determined script reads once (<a href="https://support.google.com/docs/answer/3378864" target="_blank" rel="noopener">Google Docs Editors Help</a>)</li>
<li><strong>The CAPTCHA you sometimes see</strong> on a Google Form is Google checking the visitor, not a setting you turned on</li>
</ul>
</div>

<h2>Can you add CAPTCHA to Google Forms?</h2>

<p>No, and it helps to know why, because the reason rules out most of the suggestions you will find. reCAPTCHA works by putting a script and a site key into the HTML of the page holding the form, then verifying the token server-side. Google Forms gives you no access to either. Even embedding the form on your own site does not help, because what you embed is an iframe served by Google, and your page's scripts cannot reach inside it.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/2743fe0da4b8b57a_01-question-types.jpg" alt="The Google Forms question type list showing all twelve options, none of which is a CAPTCHA field" loading="lazy" style="width:100%;max-width:248px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<p>The question type list is the quickest way to see it for yourself. Twelve options, and nothing that challenges a bot.</p>
<p>So the question people are actually asking, once you strip out the impossible answer, is how to stop bots submitting a Google Form. That has real answers, they are just not CAPTCHA.</p>

<div class="table-wrap">
<table>
<thead><tr><th>Option</th><th>What it stops</th><th>What it costs you</th></tr></thead>
<tbody>
<tr><td><a href="#signin">Restrict to signed-in users</a></td><td>Almost all automated submissions</td><td>Anonymity, and anyone without a Google account</td></tr>
<tr><td><a href="#regex">Response validation question</a></td><td>Naive scripts only</td><td>Friction for real people, and it is trivially readable</td></tr>
<tr><td><a href="#addon">Spam-scoring add-on</a></td><td>Some junk, after the fact</td><td>The junk is already in your sheet, plus third-party access</td></tr>
<tr><td><a href="#move">Move to a builder with bot protection</a></td><td>Automated browsers, scripts and bursts</td><td>Rebuilding the form somewhere else</td></tr>
</tbody>
</table></div>

<h2 id="signin">How do you stop spam on a Google Form without CAPTCHA?</h2>

<p>The one setting in Google Forms that meaningfully stops automated submissions is making people sign in, and it works for the obvious reason that a script now needs a Google account rather than just the form URL.</p>
<p>You can get there by restricting the form to users inside your organisation, or by turning on <strong>Limit to 1 response</strong>, which requires sign-in as a side effect. Google's documentation is direct about the consequence: to fill out the form, users must sign in to their Google Account.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/206638321548d07a_02-limit-1-response.jpg" alt="The Google Forms Limit to 1 response setting sitting under a REQUIRES SIGN IN label" loading="lazy" style="width:100%;max-width:692px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<p>This is a trade rather than a free win, because anyone without a Google account is now locked out entirely, and a form that demands a login before it will accept feedback reliably collects less of it. On an internal form that costs you nothing worth counting. On a public campaign form it can cost you most of your responses, which is usually a worse outcome than the spam you were trying to stop.</p>

<h2 id="regex">Does the response validation trick work as a CAPTCHA?</h2>

<p>It works, though only just. The recommendation you will find on most pages is to add a short answer question, open <a href="https://support.google.com/docs/answer/3378864" target="_blank" rel="noopener">response validation</a>, set it to a regular expression, and ask something like "what is seven plus four". A bot that blindly fills fields fails. Here is how to set it up, and then why not to rely on it.</p>
<ol>
<li>Add a <strong>Short answer</strong> question with your challenge.</li>
<li>Open the question's three-dot menu and pick <strong>Response validation</strong>.</li>
<li>Choose <strong>Regular expression</strong> and then <strong>Matches</strong>, then enter the pattern for the right answer.</li>
<li>Write custom error text, so a person who mistypes is not left guessing.</li>
</ol>
<p>Its weakness is that the question never changes, where a real CAPTCHA generates a fresh challenge for every visitor and verifies it server-side. This is one fixed question sitting in the page, so anyone actually targeting your form solves it once and hardcodes the answer, and in the meantime you are taxing every honest respondent with arithmetic in order to filter out scripts that an invisible check would have caught without anyone noticing.</p>
<p>It is worth the five minutes as a speed bump on a low-stakes form, as long as nobody downstream mistakes it for protection.</p>

<h2 id="why-shown">Why does my Google Form show a CAPTCHA I did not add?</h2>

<p>Because Google is checking the visitor, not the form. The challenge comes from Google's own abuse systems reacting to the browser session, the network or the traffic pattern, which is why it shows up for some respondents and not others and why nothing in your settings makes it go away.</p>
<p>This is also why the top result for this search is a support thread about <em>removing</em> it rather than adding it. Two different groups arrive at the same words: owners wanting protection they cannot get, and respondents hitting a check the owner never configured. If people report being blocked, there is no switch on your side to flip. Community threads like <a href="https://support.google.com/docs/thread/3479037/how-can-i-add-a-recaptcha-in-my-google-forms" target="_blank" rel="noopener">this one in the Docs Editors Community</a> have been asking for the owner-facing version for years.</p>

<div class="fmstr-blog-cta">
<p><strong>Getting hit right now?</strong> Formester has invisible reCAPTCHA and automatic AI spam checking as toggles, not workarounds.</p>
<p><a class="fmstr-blog-cta__btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
<p class="fmstr-blog-cta__meta">Free forever plan &middot; No credit card &middot; Setup in 2 minutes</p>
</div>

<h2 id="addon">Can an add-on add CAPTCHA to a Google Form?</h2>

<p>Not the widget itself, no. Add-ons run against the form and its responses through Google's APIs, and none of them can inject a challenge into markup they do not control, so what some of them offer instead is scoring or filtering after the submission has already happened.</p>
<p>Read that carefully before installing one, because the sequence matters more than it first sounds: the bot still submits, the junk still lands in your responses and in your linked Sheet, and the add-on flags it after the fact. That tidies up your view without reducing anything you actually collected, and it holds standing access to every response for as long as it stays installed.</p>

<h2 id="move">When should you move the form somewhere else?</h2>

<p>When the form is public, attached to something that costs money, and being hit. A campaign landing form, a lead capture form, a contest entry: at that point Google Forms is asking you to choose between locking respondents behind a Google login and accepting whatever arrives.</p>
<p>The alternative is a builder where bot protection is a setting rather than a workaround. On Formester it lives under Settings, then Spam and security, as three switches: invisible reCAPTCHA, AI spam protection that scores each submission, and a domain allowlist so the form only accepts submissions from pages you own. The honest note is that none of this is perfect either. Stacking a real challenge with automatic scoring is what moves the needle, rather than any single switch.</p>

<div class="better">
<h5>Why Formester's spam protection is the better choice</h5>
<p>Three toggles in one panel, no arithmetic questions, no forced Google login.</p>
<ul>
<li><strong>Invisible reCAPTCHA.</strong> A real challenge on the form, verified server-side, that respondents never see</li>
<li><strong>AI spam protection.</strong> Submissions are checked and flagged automatically by <a href="https://formester.com/features/spam-protection/">Formester's own model</a> rather than by a question you wrote</li>
<li><strong>Restrict embed domains.</strong> The form only loads and accepts submissions on domains you list, which kills the copy-the-URL attack outright</li>
<li>Anonymous submissions stay anonymous, because none of this requires a respondent account</li>
</ul>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/41cc7b7cfa32e3d9_spam-and-security.jpg" alt="Formester's Spam and security settings showing AI spam protection, Invisible reCAPTCHA and Restrict embed domains" loading="lazy" style="width:100%;max-width:900px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<p><a class="btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
</div>

<section class="faq">
<h2>Google Forms CAPTCHA FAQ</h2>
<details><summary>Does Google Forms have CAPTCHA?</summary><p>No. There is no CAPTCHA setting anywhere in the form editor and no way to drop reCAPTCHA into a Google Form. Every result promising one is either a response-validation workaround, a third-party add-on, or a different form builder.</p></details>
<details><summary>How do I add reCAPTCHA to a Google Form?</summary><p>You cannot, and the reason is structural rather than a missing feature. reCAPTCHA is embedded with a site key in your own page's HTML, and Google Forms gives you no access to the form's markup. Embedding the form in your site does not help either, because the iframe belongs to Google.</p></details>
<details><summary>Why does my Google Form show a CAPTCHA then?</summary><p>That is Google checking the person, not your form. It appears when Google's own abuse systems flag the traffic or the browser session. It is not something you enabled and not something you can configure or remove from the form's settings.</p></details>
<details><summary>What is the regex trick for Google Forms CAPTCHA?</summary><p>It is a short-answer question with response validation set to a regular expression, asking something a bot is unlikely to answer, such as a simple sum. It stops naive scripts and nothing else, because the question is fixed and visible in the page for anyone who looks.</p></details>
<details><summary>How do I stop spam on a Google Form without CAPTCHA?</summary><p>Restrict the form to signed-in users, which forces a Google account, or turn on Limit to 1 response, which does the same thing. Both cut spam sharply and both end anonymity, so they are a trade rather than a fix.</p></details>
<details><summary>Can an add-on add CAPTCHA to Google Forms?</summary><p>Some add-ons offer spam scoring or extra validation on submissions, but none can inject a CAPTCHA widget into the form itself. The add-on sees the response after it is submitted, which means the junk is already in your sheet.</p></details>
<details><summary>Is Google Forms safe to use for public forms?</summary><p>For low-stakes collection it is perfectly fine, and plenty of teams run public Google Forms for years without ever being troubled. For a public form attached to a campaign, an inbox or a paid list, the absence of any bot challenge means you are relying on obscurity, and a form URL that gets shared widely will eventually get hit.</p></details>
<details><summary>What blocks bots better than CAPTCHA?</summary><p>Layers, and ones the respondent never has to solve. An invisible challenge verified server-side catches automated browsers, automatic scoring catches submissions that look wrong, and restricting the form to domains you own removes the copy-the-URL route. Any one of them alone is a speed bump.</p></details>
</section>

<h2>Related reading</h2>

<ul>
<li><a href="https://formester.com/blog/what-is-web-form-spam-and-how-to-prevent-it/"><strong>What web form spam is and how to prevent it</strong></a> - the attack patterns behind the junk entries.</li>
<li><a href="https://formester.com/blog/how-to-build-spam-free-contact-forms-for-your-website/"><strong>Build a spam-free contact form</strong></a> - the same problem on your own site.</li>
<li><a href="https://formester.com/blog/how-to-make-anonymous-google-form-or-survey/"><strong>Make an anonymous Google Form</strong></a> - the setting the sign-in workaround costs you.</li>
<li><a href="https://formester.com/blog/google-forms-webhooks/"><strong>Google Forms webhooks</strong></a> - pushing responses out once you trust what is coming in.</li>
</ul>
