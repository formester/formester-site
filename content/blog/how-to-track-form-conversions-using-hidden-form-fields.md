---
slug: "how-to-track-form-conversions-using-hidden-form-fields"
title: "How to Track Form Submissions Using Hidden Fields"
description: "Discover how to track form submissions using UTM parameters and hidden fields in online forms, no need for Google Analytics or code.\n\n"
metaTitle: "How to Track Form Conversions Using Hidden Fields"
metaDescription: "Learn how to track form submissions using UTM parameters and hidden fields in online forms, no need for Google Analytics or code.\n\n"
keywords: "hidden fields,\nutm tracking,\nconversion tracking,\nform submission tracking,"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "a blog post cover about how to track form conversions using hidden fields"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/53_ee59adbe17.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2025-07-18T01:54:33.648Z"
updatedAt: "2026-06-22T05:06:29.664Z"
publishedAt: "2026-06-22T05:06:22.803Z"
---
<p style="font-size: inherit;">You spent the budget. A lead just filled out your form. Which channel sent them, the LinkedIn ad, the newsletter, or the blog popup?</p>

<p>Here is the short answer: tag your form link with UTM parameters, add a few hidden fields, and every submission carries its own source. No Google Analytics, no code, no extra tools.</p>

<p>This guide shows the exact steps inside <a href="https://formester.com/">Formester</a>, from building a tagged URL to filtering leads by source and exporting them. It takes a few minutes to set up once.</p>

<h2>What Are UTM Parameters? (The 5 Tags Explained)</h2>

<p>UTM parameters are small tags you add to the end of a link. When someone clicks a tagged link, the tags travel with them, so you can see exactly where the click came from.</p>

<p>There are five, and three do most of the work:</p>

<ul>
<li><strong>utm_source</strong>: Where the traffic came from: linkedin, newsletter, google.</li>
<li><strong>utm_medium</strong>: The type of channel: paid, email, social, organic.</li>
<li><strong>utm_campaign</strong>: The specific campaign: crm_demo_july, spring_sale.</li>
<li><strong>utm_term and utm_content</strong>: Optional. utm_term records the paid keyword; utm_content tells two versions of the same link apart (for example, two buttons in one email).</li>
</ul>

<p>A tagged form link looks like this: https://yourform.com<wbr>?utm_source=linkedin<wbr>&amp;utm_medium=paid<wbr>&amp;utm_campaign=crm_demo. Spend money on marketing, and you should know which of those tags actually convert.</p>

<h2>How to Track UTM Parameters in Your Forms: 5 Steps</h2>

<p>Five steps, start to finish. Build the form, tag the link, add hidden fields, test it, then filter and export. You only set this up once per form.</p>

<h3>Step 1: Build Your Lead Capture Form</h3>

<p>Open your Formester dashboard and create a new <a href="https://formester.com/templates/categories/lead-generation/">lead capture form</a>. Add the visible fields you actually need: name, email, company. Keep it short; every extra field costs you submissions.</p>

<h3>Step 2: Build a UTM-Tagged Link</h3>

<p>You need a version of your form link with UTM tags baked in. The easiest way is Google's free Campaign URL Builder.</p>

<ul>
<li>Open Google's Campaign URL Builder (search "campaign url builder"; it is the first result).</li>
<li>Paste your form URL into the Website URL field.</li>
<li>Fill in source (linkedin), medium (paid), and campaign (crm_demo_july).</li>
</ul>

<p>The builder hands you a full tagged URL. Want it tidy for an ad or bio link? Shorten it with Bitly. Make one tagged link per channel so each source stays clean.</p>

<h3>Step 3: Add Hidden Fields That Auto-Fill From the URL</h3>

<p>This is the part that does the work. A hidden field sits on the form, invisible to the visitor, and quietly reads its value from the URL.</p>

<ul>
<li>In the Formester builder, add a single line input field.</li>
<li>Rename the field label to match the tag exactly: utm_source.</li>
<li>Click the eye icon to hide it from view.</li>
</ul>

<p>Repeat for each tag you want to capture: utm_medium, utm_campaign, and campaign_id if you use one. The field name has to match the UTM tag character for character, or it stays blank.</p>

<p>Now, when a visitor lands on the form from your tagged link, those hidden fields fill themselves in. It is the same mechanism as <a href="https://formester.com/blog/how-to-pre-fill-form-fields-by-url-parameters/">prefilling form fields from URL parameters</a>, pointed at attribution instead of convenience.</p>

<h3>Step 4: Test It Before You Launch</h3>

<p>Never trust attribution you have not tested. Open your tagged form link in a new browser tab, fill it out, and hit submit.</p>

<p>Then open your Formester dashboard, go to the form, and open Results. Click the latest submission. You should see the hidden values captured alongside the visible ones: source linkedin, medium paid, campaign crm_demo_july.</p>

<p>Run it again with a second tagged link, say source google and medium organic, and confirm the two submissions show different sources. If a field is blank, the field name and the UTM tag do not match yet.</p>

<h3>Step 5: Filter, Export, and Sync Your Leads by Source</h3>

<p>This is the payoff. Want every lead that came from LinkedIn?</p>

<ul>
<li>Open the Results tab.</li>
<li>In Filters, set utm_source = linkedin.</li>
<li>Read the filtered list, or export it as a CSV in one click.</li>
</ul>

<p>To keep the data flowing automatically, connect the form to <a href="https://formester.com/integrations/google-sheets/">Google Sheets</a> or push leads straight into <a href="https://formester.com/integrations/hubspot/">HubSpot</a>. The UTM values ride along with each lead, so your sales and email tools know the source without anyone copying it by hand.</p>

<h2>Hidden Fields vs Google Analytics vs GTM: Which to Use</h2>

<p>These three approaches answer different questions, so plenty of teams run more than one.</p>

<ul>
<li><strong>Hidden fields</strong>: Tag the submission itself. The source lands inside your results, CSV, and CRM next to the lead. Best when you care about which channel produced an actual lead, not just a visit. No code, no setup.</li>
<li><strong>Google Analytics</strong>: Tracks the page visit and traffic shape. Great for top-of-funnel volume, weaker at tying a single lead to a single source. Formester also offers a native <a href="https://formester.com/integrations/google-analytics/">Google Analytics integration</a> if you want both views.</li>
<li><strong>Google Tag Manager</strong>: Fires events when a form is submitted, useful for sending conversions to ad platforms. More moving parts, and it still does not store the source on the lead record. Connect it through Formester's <a href="https://formester.com/integrations/google-tag-manager/">Google Tag Manager integration</a>.</li>
</ul>

<p>Short version: use hidden fields for lead-level attribution, Analytics for traffic, GTM for ad-conversion events. The hidden-field method is the one that needs no setup and travels with the data.</p>

<h2>Why Hidden Fields Beat the Alternatives</h2>

<ul>
<li>No setup in Google Analytics and no scripts to maintain.</li>
<li>Source data lives on the submission, not buried in a separate analytics report.</li>
<li>Per-lead, not per-visit: you know which channel produced the actual form fill.</li>
<li>Works the same across popups, landing pages, and <a href="https://formester.com/features/embed-forms/">embedded forms</a>.</li>
</ul>

<p>Paid ads, influencer drops, content marketing: whatever the channel, every lead points back to its source.</p>

<h2>Why Your Hidden Fields Might Come Back Empty</h2>

<p>If a submission arrives with blank UTM fields, one of these is usually the reason:</p>

<ul>
<li>The visitor came directly, from a bookmark, or from an untagged link. No tags in the URL means nothing to capture. That is expected for organic and direct traffic.</li>
<li>The field name does not match the UTM tag exactly. utm_source captures; UTM_Source or utm-source does not.</li>
<li>A redirect or link wrapper stripped the parameters before the form loaded. Test the final landing URL, not the link you pasted.</li>
</ul>

<p>Treat blank values as a signal, not a bug. They tell you which share of leads arrived without a tracked campaign, which is useful to know on its own.</p>

<h2>Start Tracking Every Lead's Source</h2>

<p>Knowing where a lead came from changes how you spend. Double down on the channels that convert, cut the ones that just spend.</p>

<p>Hidden fields give you that without a single line of code. Tag the link, add the fields, and the source rides along with every submission into your results, your spreadsheet, and your CRM.</p>

<p>Want to see it work? <a href="https://app.formester.com/users/sign_up/">Build a form free</a>, tag a link, and watch the first source land in your results. From there, <a href="https://formester.com/features/form-analytics/">form analytics</a> shows you the rest of the picture.</p>

<section class="faq">
<h2>Frequently Asked Questions</h2>
<details><summary>How do I track which campaign a form submission came from?</summary><div>Tag your form link with UTM parameters, then add hidden fields named utm_source, utm_medium, and utm_campaign to the form. When someone opens the tagged link, those fields auto-fill, so every submission carries its own source.</div></details>
<details><summary>What are the five UTM parameters?</summary><div>utm_source (where the traffic came from), utm_medium (the channel type), utm_campaign (the campaign name), utm_term (paid keyword), and utm_content (which link or ad variant). Source, medium, and campaign are the three most teams use.</div></details>
<details><summary>Can I track form sources without Google Analytics?</summary><div>Yes. Hidden fields capture the UTM values on the form itself, so the source is stored with the submission. You can filter and export that data without setting up Google Analytics or writing any code.</div></details>
<details><summary>Why are my hidden UTM fields coming back blank?</summary><div>Hidden fields only fill when the link carries UTM parameters. Direct visits, bookmarked links, and some redirects strip the tags, so those submissions arrive empty. Always share the full tagged URL and test it before launching.</div></details>
<details><summary>What is the difference between UTM hidden fields and Google Analytics tracking?</summary><div>Google Analytics tracks the page visit. Hidden fields tag the actual submission, so the source travels with the lead into your results, CRM, or spreadsheet. Many teams use both: Analytics for traffic, hidden fields for lead-level attribution.</div></details>
</section>

