---
slug: "google-forms-webhooks"
title: "Google Forms Webhooks: 4 Ways to Send One"
description: "Google Forms has no webhook that posts to your URL. Here are the four routes that actually work, what each one costs you, and the seven-day expiry nobody mentions."
metaTitle: "Google Forms Webhooks: 4 Ways to Send One"
metaDescription: "Google Forms has no native webhook. Compare Apps Script, the Forms API with Pub/Sub, marketplace add-ons and connectors, with the catch in each."
keywords: "google forms webhooks,google form webhook,google forms api,google forms webhook url,google form webhook n8n,google forms webhook discord,apps script form submit webhook"
author: "Harsh Shah"
authorProfile: "https://www.linkedin.com/in/harshshahseo/"
authorImage: "https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"
coverImgAlt: "Cover art for a guide to sending webhooks from Google Forms"
featured: false
coverImg: {"url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/d93be40c27b01e95_google-forms-webhooks.jpg", "width": 2400, "height": 1350}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://formester.com/#organization","url":"https://formester.com/","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},{"@type":"WebPage","@id":"https://formester.com/blog/google-forms-webhooks/#webpage","url":"https://formester.com/blog/google-forms-webhooks/","name":"Google Forms Webhooks: 4 Ways to Send One","isPartOf":{"@id":"https://formester.com/#organization"},"breadcrumb":{"@id":"https://formester.com/blog/google-forms-webhooks/#breadcrumb"},"inLanguage":"en-US","description":"Google Forms has no webhook that posts to your URL. Here are the four routes that actually work, what each one costs you, and the seven-day expiry nobody mentions.","datePublished":"2026-08-29","dateModified":"2026-08-29"},{"@type":"BreadcrumbList","@id":"https://formester.com/blog/google-forms-webhooks/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://formester.com/blog/"},{"@type":"ListItem","position":3,"name":"Google Forms Webhooks: 4 Ways to Send One","item":"https://formester.com/blog/google-forms-webhooks/"}]},{"@type":"BlogPosting","@id":"https://formester.com/blog/google-forms-webhooks/#article","headline":"Google Forms Webhooks: 4 Ways to Send One","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/d93be40c27b01e95_google-forms-webhooks.jpg","author":{"@type":"Person","name":"Harsh Shah","url":"https://www.linkedin.com/in/harshshahseo/","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"},"publisher":{"@id":"https://formester.com/#organization"},"inLanguage":"en-US","description":"Google Forms has no webhook that posts to your URL. Here are the four routes that actually work, what each one costs you, and the seven-day expiry nobody mentions.","datePublished":"2026-08-29","dateModified":"2026-08-29","mainEntityOfPage":{"@id":"https://formester.com/blog/google-forms-webhooks/#webpage"},"about":[{"@type":"SoftwareApplication","name":"Google Forms","applicationCategory":"BusinessApplication","url":"https://docs.google.com/forms/","operatingSystem":"Web"}],"mentions":[{"@id":"https://formester.com/#software"},{"@type":"SoftwareApplication","name":"Google Apps Script","applicationCategory":"DeveloperApplication","url":"https://script.google.com/","operatingSystem":"Web"}],"citation":[{"@type":"WebPage","name":"Set up and receive push notifications","url":"https://developers.google.com/workspace/forms/api/guides/push-notifications","publisher":{"@type":"Organization","name":"Google"}},{"@type":"WebPage","name":"REST Resource: forms.watches","url":"https://developers.google.com/workspace/forms/api/reference/rest/v1beta/forms.watches","publisher":{"@type":"Organization","name":"Google"}}]},{"@type":"FAQPage","@id":"https://formester.com/blog/google-forms-webhooks/#faq","mainEntity":[{"@type":"Question","name":"Does Google Forms have webhooks?","acceptedAnswer":{"@type":"Answer","text":"Not in the form editor. There is no setting that posts a submission to a URL you choose. The closest official route is the Google Forms API, which sends change notifications to a Cloud Pub/Sub topic rather than to your endpoint, so you still need code in between."}},{"@type":"Question","name":"How do I send a webhook from a Google Form?","acceptedAnswer":{"@type":"Answer","text":"Open the form, click the three-dot menu and choose Apps Script. Write an onFormSubmit trigger that calls UrlFetchApp.fetch with your endpoint and the response payload. That is the only route that needs no third-party service and no Google Cloud project."}},{"@type":"Question","name":"Is there an API for Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Google Forms API can read a form's schema and its responses, and it can register a watch so you get notified when either changes. It is a REST API, so it does not push to an arbitrary URL by itself."}},{"@type":"Question","name":"How long does a Google Forms API watch last?","acceptedAnswer":{"@type":"Answer","text":"Seven days. Google's reference documentation states that a watch expires seven days after it is created unless it is renewed, so any integration built this way needs a scheduled renewal job or it goes silent after a week."}},{"@type":"Question","name":"Are Google Forms webhooks free?","acceptedAnswer":{"@type":"Answer","text":"The Apps Script route is free and runs inside your Google account against its normal quotas. The Forms API route needs a Google Cloud project with Pub/Sub, which has a free tier and then bills on usage. Marketplace add-ons and connectors like Make, n8n or Zapier have their own pricing."}},{"@type":"Question","name":"What event types can the Google Forms API watch?","acceptedAnswer":{"@type":"Answer","text":"Two of them. RESPONSES fires when a new response arrives and SCHEMA fires when the form's questions change, and there is no separate event for a response that gets edited after submission."}},{"@type":"Question","name":"Why is my Google Forms webhook delayed?","acceptedAnswer":{"@type":"Answer","text":"If you built it on the Forms API, delivery is not guaranteed to be instant. Google's own documentation says notifications usually arrive within minutes and that in some situations they may be delayed. Apps Script triggers fire on submission and are generally faster."}},{"@type":"Question","name":"Can I send Google Form responses to Discord or Slack?","acceptedAnswer":{"@type":"Answer","text":"Yes, with Apps Script. Both accept an incoming webhook URL, so an onFormSubmit trigger that posts a JSON payload to that URL is enough. This is the most common reason people go looking for Google Forms webhooks in the first place."}}]},{"@type":"HowTo","@id":"https://formester.com/blog/google-forms-webhooks/#howto","name":"Send a webhook from a Google Form with Apps Script","description":"Use an onFormSubmit trigger and UrlFetchApp to post each submission to your own endpoint.","step":[{"@type":"HowToStep","position":1,"name":"Open Apps Script","text":"In the form editor, open the three-dot menu in the top right and choose Apps Script."},{"@type":"HowToStep","position":2,"name":"Write the handler","text":"Add a function that reads the submitted response and posts it with UrlFetchApp.fetch to your endpoint."},{"@type":"HowToStep","position":3,"name":"Add an onFormSubmit trigger","text":"In the Triggers panel, add a trigger on form submit that runs your function."},{"@type":"HowToStep","position":4,"name":"Authorise and test","text":"Run the function once to grant the script permission, then submit the form and check your endpoint received the payload."}]},{"@type":"SoftwareApplication","@id":"https://formester.com/#software","url":"https://formester.com/","name":"Formester","applicationCategory":"BusinessApplication","operatingSystem":"Web, iOS, Android","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free forever plan, no credit card required"}}]}]
createdAt: "2026-08-29T00:00:00.000Z"
updatedAt: "2026-08-29T00:00:00.000Z"
publishedAt: "2026-08-29T00:00:00.000Z"
---

![Cover art for a guide to sending webhooks from Google Forms](https://formester-strapi.s3.ap-south-1.amazonaws.com/d93be40c27b01e95_google-forms-webhooks.jpg)

<p style="font-size: inherit;">A webhook is an HTTP request your form fires the moment someone submits, so another system can react without anyone polling for changes. Developers want one for Google Forms so responses can land in Slack, a Discord channel, an internal API or a database without anyone refreshing a spreadsheet to check. Google Forms does not have one, and the official mechanism Google does offer turns out to be quite different from what most people arrive looking for.</p>

<div class="tldr">
<p><strong>Key facts</strong></p>
<p>There is no setting in Google Forms that posts a submission to a URL you pick. Four routes get you there: Apps Script, the Forms API with Cloud Pub/Sub, a Marketplace add-on, or a connector like Make, n8n or Zapier. Apps Script is the only free one that needs nothing outside your Google account.</p>
<ul>
<li><strong>Native webhook in the form editor: none.</strong> The closest official mechanism is an API watch</li>
<li><strong>Where the API delivers:</strong> a Cloud Pub/Sub topic, not your endpoint (<a href="https://developers.google.com/workspace/forms/api/guides/push-notifications" target="_blank" rel="noopener">Google for Developers</a>)</li>
<li><strong>Watch lifespan: 7 days.</strong> It expires unless you renew it with <code>watches.renew</code> (<a href="https://developers.google.com/workspace/forms/api/reference/rest/v1beta/forms.watches" target="_blank" rel="noopener">Google for Developers</a>)</li>
<li><strong>2 event types:</strong> <code>RESPONSES</code> for new answers, <code>SCHEMA</code> for question changes (<a href="https://developers.google.com/workspace/forms/api/guides/push-notifications" target="_blank" rel="noopener">Google for Developers</a>)</li>
<li><strong>Delivery is not guaranteed instant.</strong> Google says notifications arrive usually within minutes and may sometimes be delayed</li>
</ul>
</div>

<h2>Which route should you use?</h2>

<p>All four end with your endpoint receiving the response. They differ in what you have to run and maintain.</p>

<div class="table-wrap">
<table>
<thead><tr><th>Route</th><th>What it needs</th><th>The catch</th></tr></thead>
<tbody>
<tr><td><a href="#apps-script">Apps Script</a></td><td>A few lines of JavaScript in the form itself</td><td>You own the code, the retries and the error handling</td></tr>
<tr><td><a href="#forms-api">Forms API + Pub/Sub</a></td><td>A Google Cloud project and a Pub/Sub topic</td><td>The watch expires after seven days unless renewed</td></tr>
<tr><td><a href="#add-on">Marketplace add-on</a></td><td>Install and authorise, no code</td><td>A third party sits in the path of your form data</td></tr>
<tr><td><a href="#connector">Make, n8n or Zapier</a></td><td>An account with the connector</td><td>Per-task pricing, and many trigger on a poll rather than instantly</td></tr>
</tbody>
</table></div>

<h2 id="apps-script">How do you send a webhook from a Google Form with Apps Script?</h2>

<p>Write an <code>onFormSubmit</code> trigger that posts the response to your URL. This is the route most tutorials land on. It costs nothing and it runs inside your own Google account rather than someone else's service.</p>
<ol>
<li>Open the form, click the three-dot menu in the top right, and choose <strong>Apps Script</strong>.</li>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/54bae7da343a2d8f_01-apps-script-menu.jpg" alt="The Google Forms three-dot menu showing Apps Script and Get add-ons" loading="lazy" style="width:100%;max-width:272px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>
<li>Paste a handler that reads the submitted response and posts it.</li>
<li>In the <strong>Triggers</strong> panel, add a trigger that runs your function on form submit.</li>
<li>Run the function once to grant permissions, then submit a test response.</li>
</ol>
<p>The handler is about ten lines:</p>
<div class="table-wrap">
<table>
<thead><tr><th>Apps Script handler</th></tr></thead>
<tbody><tr><td><code>function onFormSubmit(e) { const out = {}; e.response.getItemResponses().forEach(r =&gt; { out[r.getItem().getTitle()] = r.getResponse(); }); UrlFetchApp.fetch('https://api.yourapp.com/hooks', { method: 'post', contentType: 'application/json', payload: JSON.stringify(out) }); }</code></td></tr></tbody>
</table></div>
<p>The part that rarely survives into the tutorials is what happens when the call fails. If your endpoint is down at the moment the trigger fires, that submission is gone as far as the webhook is concerned, because Apps Script will not retry it on your behalf, which means anything you genuinely depend on needs its own queue or at minimum a catch block that writes the failure somewhere you will look later.</p>

<h2 id="forms-api">Does the Google Forms API have webhooks?</h2>

<p>It has watches, which are not the same thing. You register a watch on a form, Google publishes change notifications to a <strong>Cloud Pub/Sub topic</strong> you own, and your own code subscribes to that topic to pick them up. Google never calls your URL directly, which means there is always a piece of your own infrastructure sitting in the middle of it.</p>
<p>Three details from Google's documentation shape whether this is worth it:</p>
<ul>
<li><strong>It expires.</strong> A watch lasts seven days from creation, so you have to renew it with <code>watches.renew</code> before that deadline or the integration quietly stops delivering, which is an unpleasant thing to discover a fortnight after you shipped it.</li>
<li><strong>Two events only.</strong> <code>RESPONSES</code> covers new answers and <code>SCHEMA</code> covers changes to the questions, and nothing in either of them distinguishes an edited response from a brand new one.</li>
<li><strong>Permissions take a pass or two.</strong> Your Pub/Sub topic has to grant publish rights to Google's own service account before any of this works, and the failure mode when it has not is silence rather than an error you can chase.</li>
</ul>
<p>This route makes sense if you are already running on Google Cloud and want form responses arriving in the same event pipeline as the rest of your services, and it makes very little sense if you came here hoping to paste a URL into a box and move on.</p>

<div class="fmstr-blog-cta">
<p><strong>Want a webhook without the plumbing?</strong> Formester posts form events straight to any endpoint you name, with the events you choose.</p>
<p><a class="fmstr-blog-cta__btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
<p class="fmstr-blog-cta__meta">Free forever plan &middot; No credit card &middot; Setup in 2 minutes</p>
</div>

<h2 id="add-on">Is there a Google Forms webhook add-on?</h2>

<p>Several of them exist, and <a href="https://workspace.google.com/marketplace/app/send_to_api_webhooks/189658533728" target="_blank" rel="noopener">Send to API / Webhooks</a> on Google Workspace Marketplace is the one that surfaces most often, with Digital Inspiration's Form Notifications add-on handling webhooks as well. You install it, authorise it and paste in an endpoint, after which there is no code left for you to maintain.</p>
<p>What you are trading away is access, because an add-on that reads every submission holds a live authorisation against both your form and your Google account for as long as it stays installed. On an internal team form that is rarely worth a second thought. On applicant data, or on anything that has a compliance owner attached to it, read what the add-on is asking for before you click allow.</p>

<h2 id="connector">Can Make, n8n or Zapier trigger on a Google Form?</h2>

<p>All three connect, and how they trigger matters more than whether they connect. Many Google Forms integrations watch the linked Google Sheet on a schedule rather than reacting to the submission itself, which turns your real-time webhook into a poll that runs every few minutes.</p>
<p>The common workaround in the Make and n8n communities is to skip the native trigger, put an Apps Script <code>onFormSubmit</code> on the form, and have it POST to the connector's own webhook URL. At that point you are back to writing Apps Script, and you are paying for the connector as well.</p>

<h2 id="formester">What does a native form webhook look like?</h2>

<p>For comparison, this is the same job on a builder that ships webhooks as a first-class feature rather than an extension point.</p>
<p>You open the form, go to <strong>Automate</strong> and then <strong>Webhooks</strong>, and click Add Webhook. The panel asks for an endpoint URL and a tick against the events you care about, which are <code>submission.created</code>, <code>submission.updated</code> and <code>submission.deleted</code>. From there the payload posts as JSON the moment the event happens, signed with a secret so your endpoint can confirm the request genuinely came from Formester rather than from anyone who guessed the URL.</p>
<p>What you never touch is the rest of it. There is no Pub/Sub topic to create and no Cloud project to bill, and nothing expires after seven days while a calendar reminder you forgot to set waits to break the integration.</p>
<p><img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/5bf939da075b3e2c_webhook-add-endpoint.jpg" alt="Formester's Add Webhook panel with an endpoint URL field and submission.created, submission.updated and submission.deleted events" loading="lazy" style="width:100%;max-width:430px;height:auto;border-radius:10px;border:1px solid #d8dce3;box-shadow:0 1px 3px rgba(16,24,40,0.08);margin:18px 0;" /></p>

<div class="better">
<h5>Why Formester's webhooks are the better choice</h5>
<p>The endpoint field Google Forms never gave you.</p>
<ul>
<li><a href="https://formester.com/integrations/webhook/">Webhooks post in real time</a> to any HTTP endpoint, with no polling and no connector in the middle</li>
<li>Three events to pick from, so one form can feed several systems without every hook firing on everything</li>
<li>Each request is signed, and the endpoint is tested before the webhook saves</li>
<li>Clean JSON payloads your endpoint can parse directly, rather than a spreadsheet row you have to reshape</li>
<li>Pair them with <a href="https://formester.com/features/spam-protection/">spam protection</a> so the payloads reaching your API are real submissions</li>
</ul>
<p><a class="btn" href="https://app.formester.com/users/sign_up">Try Formester free</a></p>
</div>

<section class="faq">
<h2>Google Forms webhooks FAQ</h2>
<details><summary>Does Google Forms have webhooks?</summary><p>Not in the form editor. There is no setting that posts a submission to a URL you choose. The closest official route is the Google Forms API, which sends change notifications to a Cloud Pub/Sub topic rather than to your endpoint, so you still need code in between.</p></details>
<details><summary>How do I send a webhook from a Google Form?</summary><p>Open the form, click the three-dot menu and choose Apps Script. Write an onFormSubmit trigger that calls UrlFetchApp.fetch with your endpoint and the response payload. That is the only route that needs no third-party service and no Google Cloud project.</p></details>
<details><summary>Is there an API for Google Forms?</summary><p>Yes. The Google Forms API can read a form's schema and its responses, and it can register a watch so you get notified when either changes. It is a REST API, so it does not push to an arbitrary URL by itself.</p></details>
<details><summary>How long does a Google Forms API watch last?</summary><p>Seven days. Google's reference documentation states that a watch expires seven days after it is created unless it is renewed, so any integration built this way needs a scheduled renewal job or it goes silent after a week.</p></details>
<details><summary>Are Google Forms webhooks free?</summary><p>The Apps Script route is free and runs inside your Google account against its normal quotas. The Forms API route needs a Google Cloud project with Pub/Sub, which has a free tier and then bills on usage. Marketplace add-ons and connectors like Make, n8n or Zapier have their own pricing.</p></details>
<details><summary>What event types can the Google Forms API watch?</summary><p>Two of them. RESPONSES fires when a new response arrives and SCHEMA fires when the form's questions change, and there is no separate event for a response that gets edited after submission.</p></details>
<details><summary>Why is my Google Forms webhook delayed?</summary><p>If you built it on the Forms API, delivery is not guaranteed to be instant. Google's own documentation says notifications usually arrive within minutes and that in some situations they may be delayed. Apps Script triggers fire on submission and are generally faster.</p></details>
<details><summary>Can I send Google Form responses to Discord or Slack?</summary><p>Yes, with Apps Script. Both accept an incoming webhook URL, so an onFormSubmit trigger that posts a JSON payload to that URL is enough. This is the most common reason people go looking for Google Forms webhooks in the first place.</p></details>
</section>

<h2>Related reading</h2>

<ul>
<li><a href="https://formester.com/blog/how-to-use-webhooks-in-formester/"><strong>How to use webhooks in Formester</strong></a> - the same setup on our side, with the events list.</li>
<li><a href="https://formester.com/blog/how-to-link-google-sheets-to-google-forms/"><strong>Link Google Forms to Google Sheets</strong></a> - the polling route most connectors actually use.</li>
<li><a href="https://formester.com/blog/5-ways-to-view-responses-in-google-forms/"><strong>View responses in Google Forms</strong></a> - where the data sits before you move it.</li>
<li><a href="https://formester.com/blog/google-form-send-copy-of-response/"><strong>Send a copy of Google Form responses</strong></a> - the no-code way to get a submission out by email.</li>
</ul>
