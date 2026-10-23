---
slug: "google-forms-to-mailchimp"
title: "How to Connect Google Forms to Mailchimp (3 Methods)"
description: "Google Forms has no Mailchimp setting. Here are three ways to send responses to a Mailchimp audience: a Marketplace add-on, Zapier, or a CSV import, with the limits of each."
metaTitle: "Connect Google Forms to Mailchimp (3 Methods)"
metaDescription: "Connect Google Forms to Mailchimp with an add-on, Zapier, or a CSV import. Setup steps, free-tier limits, and what each method cannot do."
keywords: "google forms mailchimp integration,google forms mailchimp,google forms to mailchimp,connect google forms to mailchimp,google forms mailchimp add-on,google forms zapier mailchimp,send google forms responses to mailchimp"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
authorImage: "https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"
coverImgAlt: "Cover art for a guide to connecting Google Forms to Mailchimp"
featured: false
coverImg: {"url":"placeholder://google-forms-to-mailchimp-cover","width":1200,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I connect Google Forms to Mailchimp?","acceptedAnswer":{"@type":"Answer","text":"There are three ways. Install a Google Forms add-on such as Form to Mailchimp from the Google Workspace Marketplace, build a Zap in Zapier that adds or updates a Mailchimp subscriber on each new form response, or download your responses as a CSV and import the file into your Mailchimp audience. The add-on and Zapier send new responses automatically. The CSV import is manual."}},{"@type":"Question","name":"Does Google Forms have a native Mailchimp integration?","acceptedAnswer":{"@type":"Answer","text":"No. Google Forms has no built-in Mailchimp setting. You need an add-on, an automation tool such as Zapier, or a manual CSV import. Formester, a separate form builder, has a native Mailchimp integration built into the form editor."}},{"@type":"Question","name":"How do I send Google Forms responses to Mailchimp automatically?","acceptedAnswer":{"@type":"Answer","text":"Use the Form to Mailchimp add-on or a Zapier Zap. Both watch for new responses and create or update the Mailchimp contact as each form is submitted. Make sure your form asks for an email address, because Mailchimp needs it to create a contact."}},{"@type":"Question","name":"Is there a free way to connect Google Forms to Mailchimp?","acceptedAnswer":{"@type":"Answer","text":"Yes, with limits. The CSV import is free but manual. The Form to Mailchimp add-on lists a free tier of 25 contacts per month. Zapier has a free plan with 100 tasks per month and two-step Zaps. Mailchimp's own free plan covers up to 250 contacts. Check each vendor's current pricing before you rely on these numbers."}},{"@type":"Question","name":"Can Google Forms add people to a Mailchimp audience with double opt-in?","acceptedAnswer":{"@type":"Answer","text":"Google Forms has no opt-in setting of its own. Whether double opt-in works depends on the add-on or Zap you use and the subscription status it sets in Mailchimp, so check that option when you set it up. In Formester's Mailchimp integration you can choose immediate subscription or Mailchimp's double opt-in email."}},{"@type":"Question","name":"Do I need Zapier to connect Google Forms to Mailchimp?","acceptedAnswer":{"@type":"Answer","text":"No. The Marketplace add-on and the CSV import both work without Zapier. Zapier is useful when you want to filter responses, add steps, or send the same response to other apps as well."}}]}]
createdAt: "2026-10-23T00:00:00.000Z"
updatedAt: "2026-10-23T00:00:00.000Z"
publishedAt: "2026-10-23T00:00:00.000Z"
---

![Cover art for a guide to connecting Google Forms to Mailchimp](placeholder://google-forms-to-mailchimp-cover)
<!-- IMAGE: Cover: a Google Forms sign-up form on the left, an arrow, and a Mailchimp audience list on the right -->

You have a Google Form collecting sign-ups, and you want those people in your Mailchimp audience. Google Forms has no Mailchimp setting, so the two tools do not talk to each other until you connect them yourself.

There are three ways to connect Google Forms to Mailchimp: a Marketplace add-on, a Zapier Zap, or a CSV import. They differ in cost, setup time, and whether new responses move over automatically.

<div class="tldr">
<p>Quick answer</p>
<ul>
<li><strong>Add-on:</strong> The quickest automatic route. Form to Mailchimp (made by Dawent, not Google or Mailchimp) lists a free tier of 25 contacts per month.</li>
<li><strong>Zapier:</strong> Best if you want filters or other steps. A Google Forms trigger sends each new response to Mailchimp's Add/Update Subscriber action.</li>
<li><strong>CSV import:</strong> Free and works for a one-time list, but nothing is automatic.</li>
<li><strong>Formester:</strong> If you are starting a new sign-up form, its <a href="/integrations/mailchimp/">native Mailchimp integration</a> removes the extra tool.</li>
</ul>
</div>

<h2 id="before">What to set up in your form first</h2>

Mailchimp creates a contact from an email address, so your form has to ask for one. If you have not added that question yet, <a href="/blog/collect-email-address-google-form/">this guide to collecting email addresses in Google Forms</a> shows the options. Add first name and last name questions too if you want to use them in your emails.

Also decide how people consent. If you import or sync contacts as subscribed, Mailchimp expects that you have permission to email them. A short line on the form such as a checkbox to join the newsletter makes that clear.

<h2 id="methods">Google Forms to Mailchimp: compared</h2>

<div class="table-wrap">
<table>
<thead><tr><th>Method</th><th>Automatic?</th><th>Cost</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Form to Mailchimp add-on</td><td>Yes</td><td>Free tier of 25 contacts per month, then paid (check current pricing)</td><td>One form, one audience, no extra accounts</td></tr>
<tr><td>Zapier</td><td>Yes</td><td>Free plan has 100 tasks per month and two-step Zaps (check current pricing)</td><td>Filters, extra steps, or sending data to more apps</td></tr>
<tr><td>CSV import</td><td>No</td><td>Free</td><td>A one-time list or an existing batch of responses</td></tr>
</tbody></table>
</div>

<h2 id="addon">Method 1: Connect Google Forms to Mailchimp with an add-on</h2>

An add-on lives inside the Google Forms editor, so you do not need a third account. The Marketplace listing for <a href="https://workspace.google.com/marketplace/app/form_to_mailchimp/501231538651">Form to Mailchimp</a> says it creates or updates Mailchimp contacts when your form is submitted. It lists 25 contacts per month on the free tier, and paid features remove that cap, so the limit follows your Mailchimp plan. The listing does not give the paid price, so check it before you rely on the add-on.

Before you install, read the permissions it asks for. The listing shows access to your forms in Google Drive, permission to connect to an external service, permission to run when you are not present, and permission to send email as you. A form add-on made by an outside developer sees your respondents' data, so confirm that you are comfortable with that.

<ol class="steps">
<li><h3>Install the add-on</h3><p>Open your form, click Extensions, then Add-ons, then Get add-ons. Search for Form to Mailchimp and install it. Google's help page on <a href="https://knowledge.workspace.google.com/marketplace/find-and-install-an-app-in-the-marketplace">installing Marketplace apps</a> covers the install screens.</p></li>
<li><h3>Open the add-on</h3><p>After you approve the permissions, open it from the Extensions menu in your form.</p></li>
<li><h3>Connect Mailchimp</h3><p>Sign in with your Mailchimp account when the add-on asks. A reviewer on the listing describes connecting Mailchimp with login details and then choosing where each form field goes.</p></li>
<li><h3>Pick an audience and map fields</h3><p>Choose the Mailchimp audience, then match the email question to the email field. Match first name, last name, and any other answers to audience fields.</p></li>
<li><h3>Submit a test response</h3><p>Fill in your own form with a test email address, then look for the contact in Mailchimp under Audience. If it is missing, check the add-on's settings and the quotas in <a href="https://developers.google.com/apps-script/guides/services/quotas">Google's Apps Script limits</a>, which the listing points to.</p></li>
</ol>

The exact screens differ between add-on versions, so follow the add-on's own prompts where they differ from the list above.

<h2 id="zapier">Method 2: Send Google Forms responses to Mailchimp with Zapier</h2>

Zapier is an automation tool. A Zap has a trigger and an action, and you pick Google Forms for the first and Mailchimp for the second. Zapier lists a Google Forms trigger called New Form Response, marked as instant, and a Mailchimp action called Add/Update Subscriber, which can also update an existing subscriber. Its template, <a href="https://zapier.com/apps/google-forms/integrations/mailchimp/11009/create-or-update-mailchimp-subscribers-from-new-google-forms-submissions">Create or update Mailchimp subscribers from new Google Forms submissions</a>, is a ready starting point.

Zapier is worth the extra account when you want more than a straight copy. You can add a filter so only people who ticked a consent box go to Mailchimp, or send the same response to a spreadsheet or CRM too. Zapier's free plan has two-step Zaps and 100 tasks per month, and multi-step Zaps need a paid plan. See <a href="https://zapier.com/pricing">Zapier's pricing page</a> for current plans.

<ol class="steps">
<li><h3>Start from the template</h3><p>Open the Zapier template above and sign in or create a free account.</p></li>
<li><h3>Connect Google Forms</h3><p>Choose the New Form Response trigger, sign in to Google, and select the form.</p></li>
<li><h3>Connect Mailchimp</h3><p>Choose the Add/Update Subscriber action, sign in to Mailchimp, and select your audience.</p></li>
<li><h3>Map the fields</h3><p>Match the email address from your form response to the email field in Mailchimp. Map names and other fields the same way.</p></li>
<li><h3>Test and turn it on</h3><p>Zapier asks you to test each step. Check that the test contact appears in Mailchimp, then publish the Zap.</p></li>
</ol>

Zapier counts tasks against your plan each month, so a busy form can use up the free 100 tasks quickly. Our guide on <a href="/blog/how-to-use-zapier-to-automate-online-forms/">using Zapier to automate online forms</a> explains how tasks and triggers work.

<h2 id="csv">Method 3: Export Google Forms responses to Mailchimp as a CSV</h2>

This works when you already have a pile of responses, or when a form runs for a short time such as one event. Nothing syncs afterward. You repeat the import each time you want new people added.

<ol class="steps">
<li><h3>Download the responses</h3><p>Open your form and click Responses. Then click More and choose Download responses (.csv). If you link the form to a spreadsheet, you can also download the CSV from <a href="/blog/google-forms-to-google-sheets/">Google Sheets</a>.</p></li>
<li><h3>Prepare the file</h3><p>Mailchimp requires a column labeled Email Address. Add columns labeled First Name and Last Name if you have them. Delete columns you do not want to import. Mailchimp's <a href="https://mailchimp.com/help/import-contacts-mailchimp/">import guide</a> covers the file format.</p></li>
<li><h3>Start the import in Mailchimp</h3><p>Go to Audience, click the Add contacts drop-down, choose Import contacts, then Upload a file.</p></li>
<li><h3>Choose the audience and tags</h3><p>Confirm the audience. Tick Update any existing contacts if some people are already in your list. Add tags if you want to mark everyone from this import, for example with the name of the form.</p></li>
<li><h3>Match the columns</h3><p>Match each column in your file to a field in the audience, then finish the import.</p></li>
</ol>

Mailchimp imports one contact status at a time, such as subscribed or unsubscribed, and it asks that you have permission to email subscribed contacts. Mailchimp's free plan includes up to 250 contacts, and an import that pushes you past your plan's limit can bring extra charges.

<h2 id="problems">Where these methods fall short</h2>

Each method works, and each one adds something to maintain.

- The add-on is made by a third party. If the developer changes pricing or stops updating it, your sign-ups stop reaching Mailchimp.
- Zapier is another account and another bill, and its free plan caps how many responses you can send.
- The CSV import needs a person to remember to do it.
- Google Forms itself has no tag or double opt-in setting. Whether you get those options depends on the add-on or the Zap, so check before you commit.

<h2 id="formester">Where Formester fits</h2>

If you are starting a new sign-up form, you can skip the connector. Formester is a form builder with a native <a href="/integrations/mailchimp/">Mailchimp integration</a> inside the form editor. According to the integration page, it adds a new contact or updates the contact with the same email address from every submission, with no Zapier or code.

Here is what the setup looks like in Formester:

<ol class="steps">
<li><h3>Add Mailchimp to your form</h3><p>Open your form, go to Automate, then Integrations, then Mailchimp, and sign in with Mailchimp.</p></li>
<li><h3>Choose the audience and map fields</h3><p>Pick the audience and the email question. Map answers such as name, phone, or company to your audience fields, and choose the tags to apply.</p></li>
<li><h3>Pick the opt-in and save</h3><p>Choose immediate subscription or Mailchimp's double opt-in email. You can also turn on Sync existing submissions, then submit a test response.</p></li>
</ol>

Formester's integration can sync existing submissions too. A manual sync can send up to the latest 10,000 eligible submissions. For an existing contact, it updates the contact without silently resubscribing someone who opted out earlier.

This only covers forms built in Formester. It does not read from a Google Form, so you would rebuild the form first. That takes a few minutes with the <a href="/templates/newsletter-signup-27615/">newsletter sign-up template</a> or the <a href="/templates/mailing-list-contact-form-6536/">mailing list contact form template</a>. If you are weighing whether to move at all, see <a href="/blog/top-google-forms-alternatives/">our list of Google Forms alternatives</a>. For other tools that connect forms to email platforms, read <a href="/blog/how-to-integrate-online-forms-with-email-marketing-platform/">how to integrate online forms with an email marketing platform</a>.

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Send form sign-ups straight to Mailchimp</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Build a sign-up form, connect your audience with Mailchimp OAuth, map your fields, and pick immediate subscription or double opt-in.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever &middot; No credit card &middot; 56,000+ teams</p>
</div>

<section class="faq">
<h2 id="faq">Google Forms to Mailchimp FAQ</h2>
<details><summary>How do I connect Google Forms to Mailchimp?</summary><div>There are three ways. Install a Google Forms add-on such as Form to Mailchimp from the Google Workspace Marketplace, build a Zap in Zapier that adds or updates a Mailchimp subscriber on each new form response, or download your responses as a CSV and import the file into your Mailchimp audience. The add-on and Zapier send new responses automatically. The CSV import is manual.</div></details>
<details><summary>Does Google Forms have a native Mailchimp integration?</summary><div>No. Google Forms has no built-in Mailchimp setting. You need an add-on, an automation tool such as Zapier, or a manual CSV import. Formester, a separate form builder, has a native Mailchimp integration built into the form editor.</div></details>
<details><summary>How do I send Google Forms responses to Mailchimp automatically?</summary><div>Use the Form to Mailchimp add-on or a Zapier Zap. Both watch for new responses and create or update the Mailchimp contact as each form is submitted. Make sure your form asks for an email address, because Mailchimp needs it to create a contact.</div></details>
<details><summary>Is there a free way to connect Google Forms to Mailchimp?</summary><div>Yes, with limits. The CSV import is free but manual. The Form to Mailchimp add-on lists a free tier of 25 contacts per month. Zapier has a free plan with 100 tasks per month and two-step Zaps. Mailchimp's own free plan covers up to 250 contacts. Check each vendor's current pricing before you rely on these numbers.</div></details>
<details><summary>Can Google Forms add people to a Mailchimp audience with double opt-in?</summary><div>Google Forms has no opt-in setting of its own. Whether double opt-in works depends on the add-on or Zap you use and the subscription status it sets in Mailchimp, so check that option when you set it up. In Formester's Mailchimp integration you can choose immediate subscription or Mailchimp's double opt-in email.</div></details>
<details><summary>Do I need Zapier to connect Google Forms to Mailchimp?</summary><div>No. The Marketplace add-on and the CSV import both work without Zapier. Zapier is useful when you want to filter responses, add steps, or send the same response to other apps as well.</div></details>
</section>
