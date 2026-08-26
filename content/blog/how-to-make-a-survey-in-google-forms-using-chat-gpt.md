---
slug: "how-to-make-a-survey-in-google-forms-using-chat-gpt"
title: "How to Create a Survey in Google Form Survey with ChatGPT in 10 Steps"
description: "10-step guide to building a Google Form (survey, feedback, application, or quiz) with ChatGPT or Gemini, including a working Apps Script example, video walkthrough, and the Formester AI form generator alternative."
metaTitle: "How to Create a Survey in Google Form Survey with ChatGPT (2026 Guide)"
metaDescription: "10-step guide to building a Google Form (survey, feedback, application, or quiz) with ChatGPT or Gemini, including a working Apps Script example, video walkthrough, and the Formester AI form generator alternative."
keywords: "How to Create a Survey in Google Forms,\ngoogle forms,\ngoogle form survey,\nhow to create a survey using chat gpt,"
author: "Harish Kumar"
authorProfile: "https://www.linkedin.com/in/harish-kumar2424/"
coverImgAlt: "a blog post cover about how to create a survey  in google forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/a_blog_post_cover_about_how_to_create_a_survey_in_google_forms_fadf06a873.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2025-05-14T02:18:56.670Z"
updatedAt: "2026-05-15T04:25:18.367Z"
publishedAt: "2026-05-15T04:25:18.360Z"
---
ChatGPT can write 20 thoughtful survey questions in 30 seconds. It can also write a job application form, a customer feedback form, a market research survey, or a product launch questionnaire from the same kind of prompt. 

Google Forms can't generate any of these natively, but it accepts a Google Apps Script that wires AI-generated questions into a real, working form. The bridge between the two to get ChatGPT to output the Apps Script — is what most people get wrong.

This guide covers the full 10-step flow with screenshots, a video, and a working Apps Script example you can paste straight into your Apps Script editor.

 It also names the common ChatGPT mistakes and shows where [Formester's AI form generator](/ai-form-generator/) and [AI survey generator](/ai-survey-generator/) skip the ChatGPT-then-Apps-Script juggle entirely, paste a topic, get a finished form, no script, no copy-paste.

<style>
    /* host-link-override */
    .fmstr-cmp-cgs-vid a {
        text-decoration: none !important;
    }

    .fmstr-cmp-cgs-vid {
        --c-bg-card: #ffffff;
        --c-bg-tint: #f7f3ff;
        --c-bg-edge: #e4d7ff;
        --c-fg-1: #101828;
        --c-fg-2: #475467;
        --c-fg-3: #697586;
        --c-violet-500: #7f56d9;
        --c-violet-600: #6941c6;
        --c-border: #eaecf0;
        --c-shadow: 0 4px 20px rgba(16, 24, 40, .06), 0 2px 6px rgba(16, 24, 40, .04);

        background: transparent;
        padding: 48px 24px;
        font-family: inherit;
        color: var(--c-fg-1);
    }

    .fmstr-cmp-cgs-vid *,
    .fmstr-cmp-cgs-vid *::before,
    .fmstr-cmp-cgs-vid *::after {
        box-sizing: border-box;
    }

    .fmstr-cmp-cgs-vid__container {
        max-width: 880px;
        margin: 0 auto;
        text-align: center;
    }

    .fmstr-cmp-cgs-vid__eyebrow {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 9999px;
        background: var(--c-bg-tint);
        color: var(--c-violet-600);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .04em;
        text-transform: uppercase;
        border: 1px solid var(--c-bg-edge);
        margin: 0 0 14px;
    }

    .fmstr-cmp-cgs-vid__h2 {
        font-size: clamp(22px, 2.4vw, 28px);
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02em;
        margin: 0;
        color: var(--c-fg-1);
    }

    .fmstr-cmp-cgs-vid__intro {
        color: var(--c-fg-3);
        font-size: 16px;
        line-height: 1.6;
        margin: 12px auto 22px;
        max-width: 640px;
    }

    .fmstr-cmp-cgs-vid__frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--c-border);
        box-shadow: var(--c-shadow);
        background: #0a0a0f;
    }

    .fmstr-cmp-cgs-vid__frame iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    .fmstr-cmp-cgs-vid__below {
        margin-top: 16px;
        color: var(--c-fg-3);
        font-size: 14.5px;
        line-height: 1.6;
    }

    .fmstr-cmp-cgs-vid__below a {
        color: var(--c-violet-600) !important;
        text-decoration: none !important;
        font-weight: 600;
    }

    .fmstr-cmp-cgs-vid__below a:hover {
        text-decoration: underline !important;
    }

    @media (max-width: 760px) {
        .fmstr-cmp-cgs-vid {
            padding: 36px 16px;
        }

        .fmstr-cmp-cgs-vid__intro {
            font-size: 15px;
        }

        .fmstr-cmp-cgs-vid__frame {
            border-radius: 12px;
        }
    }
</style>

<section class="fmstr-cmp-cgs-vid" aria-labelledby="fmstr-cmp-cgs-vid-h2">
    <div class="fmstr-cmp-cgs-vid__container">
        <span class="fmstr-cmp-cgs-vid__eyebrow">2-minute video</span>
        <h2 class="fmstr-cmp-cgs-vid__h2" id="fmstr-cmp-cgs-vid-h2">Watch the full ChatGPT-to-Google Forms flow</h2>
        <p class="fmstr-cmp-cgs-vid__intro">The 10 steps below, end to end. From the first prompt to a working form in
            your Drive.</p>
        <div class="fmstr-cmp-cgs-vid__frame">
            <iframe src="https://www.youtube.com/embed/xlK9i54s9_U?si=BLChPrFLMmeEqB7B"
                title="How to create a Google Form survey with ChatGPT"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen loading="lazy"></iframe>
        </div>
        <p class="fmstr-cmp-cgs-vid__below">Prefer to read? The 10-step guide is below. Want to skip the script
            entirely? Try the <a href="https://formester.com/ai-form-generator/">AI form generator</a>.</p>
    </div>
</section>

## Step 1: Log in to ChatGPT or Gemini

Open [ChatGPT](https://chat.openai.com) or [Gemini](https://gemini.google.com). Free tier works for the basic prompts; paid tiers handle longer scripts more reliably.

If you don't want to spend the next 10 steps copy-pasting, skip ahead to [Formester's AI form generator](/ai-form-generator/) which builds the entire survey from a prompt in one step.

## Step 2: Generate Survey Questions Using AI
Use a prompt that names: the form type, the topic, the audience, the question count, the question types, and the goal. Generic prompts give generic questions. Specific prompts give usable ones.

The "form type" framing matters: ChatGPT writes a feedback form differently from a job application form differently from a market research survey. Tell it which one upfront.

Example prompts (copy-paste any):

```
Create a feedback form for a product launch. Audience: early-access users.
Include 8 questions covering first impressions, feature requests, and likelihood to recommend.
Mix multiple choice and short answer. Avoid leading questions.
```

```
Make a job application form for a small business hiring a marketing lead.
Include 12 questions covering experience, portfolio links, availability, and salary expectations.
Use short answer for free-text fields and dropdowns for ranges.
```

```
Generate 15 customer feedback survey questions for a SaaS dashboard product.
Audience: existing paying customers.
Question types: mix of multiple choice (5), linear scale 1-10 (5), short answer (3), yes/no (2).
Include 1 NPS question. Avoid leading questions.
Output as a numbered list with the question type in brackets.
```

What ChatGPT returns: a numbered list with question types specified, ready to paste into Step 4's Apps Script prompt.


## Step 3: Add Custom Content (Optional)
Iterate the prompt. Add brand voice ("use friendly, casual tone"), add constraints ("max 8 words per question"), add must-include topics ("question 5 must ask about onboarding speed").

This is the slowest step. For repeat surveys, save a "base prompt template" you can re-use and only swap the topic.

## Step 4: Ask AI to Create a Google Form Script
Send a second prompt asking ChatGPT to turn the question list into Google Apps Script:

```
Take the 15 questions above and write a Google Apps Script that creates
a Google Form with these questions. Include the right question types
(multiple choice as MULTIPLE_CHOICE, linear scale as SCALE, etc.).
Add an explanatory comment above each block. Output only the code,
no surrounding prose.
```

What ChatGPT returns: a `function createForm() { ... }` block with `FormApp.create()` and `addMultipleChoiceItem()` calls.

Common ChatGPT errors at this step:

1. Wrong question type method (`addRadioItem()` instead of `addMultipleChoiceItem()`).
2. Missing scale low/high labels on linear scales.
3. Hallucinated `setRequired(true)` syntax (works as a method on the question, not as a setting).
4. Wrong API for adding sections (`addPageBreak()` is right; ChatGPT sometimes invents `addSection()`).

If the script throws an error in Apps Script Editor, paste the error back to ChatGPT and ask for the fix. Usually one round of correction gets it working.

## Step 5: Open Google Apps Script
Now, head over to Google Apps Script:

- Go to your **Google Drive**

- Click **New → More → Google Apps Script**

- You’ll now see a blank code editor.

## Step 6: Paste the Script Inside the editor:

Paste ChatGPT's full script into the editor. Save (Cmd/Ctrl+S). Name the project.

Working example to expect (a minimal form with two questions):

```javascript
function createForm() {
  var form = FormApp.create('Product Feedback Form');
  form.addTextItem()
      .setTitle('What did you like most about the product?');
  form.addMultipleChoiceItem()
      .setTitle('Would you recommend this product to others?')
      .setChoiceValues(['Yes', 'No']);
  form.addScaleItem()
      .setTitle('How likely are you to use this product again?')
      .setBounds(1, 10)
      .setLabels('Not likely', 'Very likely');
}
```

A real survey with 15 questions will be longer but follows the same pattern. If ChatGPT's script doesn't include `setBounds()` on scale items or `setChoiceValues()` on multiple choice, that's the most common bug — paste the error back to ChatGPT in Step 7.



## Step 7: Run the Script
Click the Run button (▶). First run prompts for Google account authorization (the script creates files on your Google Drive). Approve.

If the script throws an error, copy the error from the bottom panel, paste back to ChatGPT, ask for a fix.


## Step 8: Open and Edit the Form
The script creates a new Google Form in your Drive. Open it. Verify the questions are correct, the types are right, and the required-ness matches what you asked for.

Common cleanup tasks:

- Reorder questions if ChatGPT got the sequence wrong

- Fix one or two typos
- Add a header image (Apps Script doesn't add this; you do it in the Forms editor)
- Set up section breaks if your survey needs them
- **Configure settings the script can't reach.** Click the gear icon top-right and decide: can respondents edit responses after submitting? Should they get a confirmation message? Do they need to sign in (this is how Google Forms enforces one-response-per-person)? These four settings are not script-controllable; they're set in the form UI.

If you find yourself doing more than 5 minutes of cleanup, it's faster to use [Formester's AI form generator](/ai-form-generator/) directly — paste your topic, get a finished editable form, no script, no cleanup.

## Step 9: Share Your Survey
Hit "Send" top-right. Pick:

- **Email** — Google sends directly. Tracks opens via Google.

- **Link** — Paste in Slack, Teams, WhatsApp, email signature, anywhere.
- **Embed** — Iframe HTML for your website.

For tracking who responded across multiple channels (campaign attribution), use UTM parameters on the link or switch to [Formester's response analytics](/features/form-analytics/) which ships native source tracking

## Step 10: Collect and Review Responses
Click the "Responses" tab in your form. Three views: Summary (charts), Question (one Q at a time), Individual (one respondent at a time). Link to a Google Sheet (green Sheets icon) for analysis.

See [how to view responses in Google Forms](/blog/5-ways-to-view-responses-in-google-forms/) for the full response-management guide.

## Want to Do It Even Faster? Try Formester
If you don’t want to deal with scripts, editors, or setup steps, Formester makes survey creation even easier.

**Here’s how:**
Go to **[Formester’s AI Survey Generator](/ai-survey-generator/)**.

Enter a simple prompt like: **“Create a survey for customer onboarding experience”**

The AI instantly creates a full survey

**You can then:**

- Customize the questions

- Edit the design

- Add logic rules and branding

- Publish your survey with one click

No coding. No copy-pasting. No switching between tools. Just type, tweak, and launch. Perfect for marketers, founders, or anyone who wants surveys done right and fast.

<style>
/* host-link-override */
.fmstr-cmp-cgs-cmp a { text-decoration: none !important; }
.fmstr-cmp-cgs-cmp {
--c-bg-section: #f4f4f7; --c-bg-card: #ffffff;
--c-bg-tint: #f7f3ff; --c-bg-edge: #e4d7ff; --c-bg-row: #fafafb;
--c-bg-pink-tint: #fdf2f8; --c-bg-pink-edge: #fbcfe8;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-600: #6941c6; --c-pink-700: #b91c5c;
--c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-cgs-cmp *, .fmstr-cmp-cgs-cmp *::before, .fmstr-cmp-cgs-cmp *::after { box-sizing: border-box; }
.fmstr-cmp-cgs-cmp__container { max-width: 1180px; margin: 0 auto; }
.fmstr-cmp-cgs-cmp__head { text-align: center; }
.fmstr-cmp-cgs-cmp__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--c-bg-tint); color: var(--c-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--c-bg-edge); margin: 0 0 14px;
}
.fmstr-cmp-cgs-cmp__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-cgs-cmp__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; max-width: 820px; margin: 14px auto 28px; }
.fmstr-cmp-cgs-cmp__card { background: var(--c-bg-card); border: 1px solid var(--c-border); border-radius: 20px; overflow: hidden; box-shadow: var(--c-shadow); }
.fmstr-cmp-cgs-cmp__table { width: 100%; border-collapse: collapse; font-size: 14.5px; }
.fmstr-cmp-cgs-cmp__table th, .fmstr-cmp-cgs-cmp__table td { padding: 14px 16px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--c-border); }
.fmstr-cmp-cgs-cmp__table thead th { background: var(--c-bg-tint); color: var(--c-violet-600); font-weight: 700; font-size: 13.5px; text-transform: uppercase; letter-spacing: .04em; }
.fmstr-cmp-cgs-cmp__table thead th.fmstr-cmp-cgs-cmp__col-fm { background: var(--c-bg-pink-tint); color: var(--c-pink-700); }
.fmstr-cmp-cgs-cmp__table tbody th { font-weight: 600; color: var(--c-fg-1); background: var(--c-bg-row); width: 22%; }
.fmstr-cmp-cgs-cmp__table tbody td { color: var(--c-fg-2); }
.fmstr-cmp-cgs-cmp__table tbody td.fmstr-cmp-cgs-cmp__col-fm { background: #fffafc; }
.fmstr-cmp-cgs-cmp__table tbody tr:last-child th, .fmstr-cmp-cgs-cmp__table tbody tr:last-child td { border-bottom: 0; }
.fmstr-cmp-cgs-cmp__table a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-cgs-cmp__table a:hover { text-decoration: underline !important; }
.fmstr-cmp-cgs-cmp__close { margin-top: 20px; font-size: 15px; color: var(--c-fg-3); line-height: 1.6; max-width: 920px; }

@media (max-width: 760px) {
.fmstr-cmp-cgs-cmp { padding: 40px 16px; }
.fmstr-cmp-cgs-cmp__intro { font-size: 15.5px; }
.fmstr-cmp-cgs-cmp__close { font-size: 14.5px; }
.fmstr-cmp-cgs-cmp__table thead { display: none; }
.fmstr-cmp-cgs-cmp__table tbody th { width: 100%; display: block; background: var(--c-bg-tint); }
.fmstr-cmp-cgs-cmp__table tbody td { display: block; }
.fmstr-cmp-cgs-cmp__table tbody td::before { content: attr(data-h) ": "; font-weight: 600; color: var(--c-fg-1); }
.fmstr-cmp-cgs-cmp__table th, .fmstr-cmp-cgs-cmp__table td { padding: 12px 14px; }
}
</style>

<section class="fmstr-cmp-cgs-cmp" aria-labelledby="fmstr-cmp-cgs-cmp-h2">
<div class="fmstr-cmp-cgs-cmp__container">
<div class="fmstr-cmp-cgs-cmp__head">
<span class="fmstr-cmp-cgs-cmp__eyebrow">Pick the right AI-to-form workflow</span>
<h2 class="fmstr-cmp-cgs-cmp__h2" id="fmstr-cmp-cgs-cmp-h2">ChatGPT plus Apps Script, custom GPT, or Formester AI. Which fits your survey?</h2>
<p class="fmstr-cmp-cgs-cmp__intro">Three workflows produce a working AI-generated survey. They differ on setup time, where the form lives, and what you control after launch.</p>
</div>
<div class="fmstr-cmp-cgs-cmp__card">
<table class="fmstr-cmp-cgs-cmp__table">
<thead>
<tr>
<th>Dimension</th>
<th>ChatGPT + Apps Script</th>
<th>Custom GPT (marketplace)</th>
<th class="fmstr-cmp-cgs-cmp__col-fm">Formester AI</th>
</tr>
</thead>
<tbody>
<tr><th>Setup time</th><td data-h="ChatGPT + Apps Script">10 to 20 minutes (this guide)</td><td data-h="Custom GPT">2 to 5 minutes</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Under a minute</td></tr>
<tr><th>Steps to working form</th><td data-h="ChatGPT + Apps Script">Prompt, script, paste, run, edit</td><td data-h="Custom GPT">Paste topic, copy output, build in Forms</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Prompt to form, one step</td></tr>
<tr><th>Where the form lives</th><td data-h="ChatGPT + Apps Script">Google Forms (via script)</td><td data-h="Custom GPT">Google Forms (via marketplace)</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm"><a href="https://formester.com/ai-form-generator/">Formester</a>, hosted natively</td></tr>
<tr><th>Inputs supported</th><td data-h="ChatGPT + Apps Script">Prompt only</td><td data-h="Custom GPT">Prompt only</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Prompt, question list, or PDF</td></tr>
<tr><th>Editing the AI output</th><td data-h="ChatGPT + Apps Script">Manual cleanup in Forms</td><td data-h="Custom GPT">Manual cleanup in Forms</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Inline visual editor</td></tr>
<tr><th>Question-type accuracy</th><td data-h="ChatGPT + Apps Script">Depends on prompt; often needs error fix round</td><td data-h="Custom GPT">Higher (tuned for Forms)</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Native, no script</td></tr>
<tr><th>Branding</th><td data-h="ChatGPT + Apps Script">Google&rsquo;s default</td><td data-h="Custom GPT">Google&rsquo;s default</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Full <a href="https://formester.com/features/branding-kit/">branding kit</a></td></tr>
<tr><th>Response analytics</th><td data-h="ChatGPT + Apps Script">Google Forms summary + Sheets</td><td data-h="Custom GPT">Google Forms summary + Sheets</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm"><a href="https://formester.com/features/form-analytics/">Native source tracking</a></td></tr>
<tr><th>Cost</th><td data-h="ChatGPT + Apps Script">Free (ChatGPT free tier works)</td><td data-h="Custom GPT">Free</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Free tier, paid plans for advanced features</td></tr>
<tr><th>When to pick it</th><td data-h="ChatGPT + Apps Script">You&rsquo;re already in Google Workspace and need the form there</td><td data-h="Custom GPT">One-off survey, fastest path inside Forms</td><td data-h="Formester AI" class="fmstr-cmp-cgs-cmp__col-fm">Repeat surveys, brand-controlled, hosted analytics</td></tr>
</tbody>
</table>
</div>
<p class="fmstr-cmp-cgs-cmp__close">One-off survey on the Google Workspace stack? ChatGPT plus Apps Script gets you there in 15 minutes. Need brand-controlled forms with native analytics and no script juggling? <a href="https://formester.com/ai-form-generator/">Formester AI</a> builds the same survey in under a minute, hosted on your domain.</p>
</div>
</section>


### Final Thoughts
Creating a smart, effective survey doesn’t have to be hard or time-consuming. With tools like ChatGPT or Gemini, you can write questions and generate a working Google Form in minutes.

And if you want to skip all the technical steps and launch even faster, **[Formester](/)** is built for you.

Try both methods and see what works best for your needs. Whether you’re doing customer research, product feedback, or employee check-ins, surveys help you listen, learn, and grow.

**[Start building your survey today](https://app.formester.com/users/sign_up)**. **Your insights are just a few clicks away.**

<style>
/* host-link-override */
.fmstr-cmp-cgs-faq a { text-decoration: none !important; }
.fmstr-cmp-cgs-faq {
--c-bg: #fafafb; --c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467;
--c-violet-600: #6941c6; --c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0; --c-chip-bg: #f4f4f7;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-cgs-faq *, .fmstr-cmp-cgs-faq *::before, .fmstr-cmp-cgs-faq *::after { box-sizing: border-box; }
.fmstr-cmp-cgs-faq__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-cgs-faq__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; text-align: center; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-cgs-faq__intro { color: #697586; text-align: center; font-size: 17px; line-height: 1.6; margin: 14px auto 28px; }
.fmstr-cmp-cgs-faq__list { display: flex; flex-direction: column; gap: 12px; }
.fmstr-cmp-cgs-faq__item {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; box-shadow: var(--c-shadow); overflow: hidden;
}
.fmstr-cmp-cgs-faq__item > summary {
padding: 18px 22px; cursor: pointer; font-weight: 600; font-size: 16.5px;
color: var(--c-fg-1); display: flex; align-items: center; gap: 14px;
list-style: none;
}
.fmstr-cmp-cgs-faq__item > summary::-webkit-details-marker { display: none; }
.fmstr-cmp-cgs-faq__item > summary::before {
content: ""; width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
background-color: var(--c-chip-bg);
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%2375747f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5l4 4 4-4'/%3E%3C/svg%3E");
background-repeat: no-repeat; background-position: center;
transition: transform .15s ease, background-color .15s ease;
}
.fmstr-cmp-cgs-faq__item[open] > summary::before { transform: rotate(180deg); background-color: var(--c-tint); }
.fmstr-cmp-cgs-faq__item[open] > summary { color: var(--c-violet-600); }
.fmstr-cmp-cgs-faq__answer { padding: 0 22px 22px 64px; color: var(--c-fg-2); font-size: 15.5px; line-height: 1.7; }
.fmstr-cmp-cgs-faq__answer a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-cgs-faq__answer a:hover { text-decoration: underline !important; }
.fmstr-cmp-cgs-faq__answer code { background: var(--c-chip-bg); border: 1px solid var(--c-border); padding: 1px 6px; border-radius: 6px; font-size: 13.5px; color: var(--c-fg-1); }

@media (max-width: 760px) {
.fmstr-cmp-cgs-faq { padding: 40px 16px; }
.fmstr-cmp-cgs-faq__intro { font-size: 15.5px; }
.fmstr-cmp-cgs-faq__item > summary { padding: 16px 16px; font-size: 15.5px; gap: 12px; }
.fmstr-cmp-cgs-faq__item > summary::before { width: 26px; height: 26px; }
.fmstr-cmp-cgs-faq__answer { padding: 0 16px 18px 16px; font-size: 15px; line-height: 1.65; }
}
</style>

<section class="fmstr-cmp-cgs-faq" aria-labelledby="fmstr-cmp-cgs-faq-h2">
<div class="fmstr-cmp-cgs-faq__container">
<h2 class="fmstr-cmp-cgs-faq__h2" id="fmstr-cmp-cgs-faq-h2">ChatGPT + Google Forms FAQ</h2>
<p class="fmstr-cmp-cgs-faq__intro">The questions people ask right after they finish the 10 steps.</p>
<div class="fmstr-cmp-cgs-faq__list">
<details class="fmstr-cmp-cgs-faq__item">
<summary>Can ChatGPT directly create a Google Form?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Not directly. ChatGPT writes the questions and the Apps Script that creates the form; you paste the script into Google Apps Script Editor and run it. The form lands in your Google Drive. For a one-step path that skips the script, use <a href="https://formester.com/ai-form-generator/">Formester&rsquo;s AI form generator</a>.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>Is ChatGPT or Gemini better for Google Forms survey generation?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Both handle the question-writing step well. ChatGPT (GPT-4 or later) edges Gemini on Apps Script accuracy, fewer hallucinated method names. Gemini sits more naturally in Google Workspace context. For most teams the choice comes down to which one you&rsquo;re already paying for.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>Why does ChatGPT&rsquo;s Apps Script throw errors when I run it?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Top three causes: wrong question-type method (<code>addRadioItem()</code> instead of <code>addMultipleChoiceItem()</code>), missing <code>setBounds()</code> on linear-scale questions, and hallucinated API names like <code>addSection()</code>. Paste the error back into ChatGPT and ask for the fix. One round of correction usually clears it.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>Can I use ChatGPT to grade Google Forms responses?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Not natively. You can export responses to a Google Sheet, then paste batches into ChatGPT for qualitative analysis or scoring. For automated grading inside the form, see <a href="https://formester.com/blog/how-to-create-a-scored-quiz/">how to create a scored quiz</a>.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>Is the ChatGPT-generated form anonymous?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Same as any Google Form. The script doesn&rsquo;t change Google Forms&rsquo; default behavior. Turn off &ldquo;Collect email addresses&rdquo; in form settings if you want anonymous responses. Note that Google Forms still tracks Google account IDs if you require sign-in.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>How do I make ChatGPT generate fewer cookie-cutter questions?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Specificity. Name the audience, the goal, the tone, the question types, and any must-include topics in the prompt. Generic prompts give generic questions. The &ldquo;Common ChatGPT prompt mistakes&rdquo; section above lists the five fixes.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>What&rsquo;s the alternative if I don&rsquo;t want to use ChatGPT and Apps Script at all?</summary>
<div class="fmstr-cmp-cgs-faq__answer"><a href="https://formester.com/ai-form-generator/">Formester&rsquo;s AI form generator</a> or <a href="https://formester.com/ai-survey-generator/">AI survey generator</a>. Paste a topic, get a finished editable form in under a minute. No script, no copy-paste, no Apps Script Editor. Hosting, analytics, and branding ship with the form.</div>
</details>
<details class="fmstr-cmp-cgs-faq__item">
<summary>Can I reuse the same Apps Script for a new survey?</summary>
<div class="fmstr-cmp-cgs-faq__answer">Yes. The script is a function, so you can swap the question list and run it again to spin up a fresh form in your Drive. Most teams keep one base script and replace the questions each time. If you need to run dozens of variants, switch to <a href="https://formester.com/ai-form-generator/">Formester&rsquo;s AI form generator</a> and skip the editor altogether.</div>
</details>
</div>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-cgs-rel a { text-decoration: none !important; }
.fmstr-cmp-cgs-rel {
--c-bg: #f4f4f7; --c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff; --c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-cgs-rel *, .fmstr-cmp-cgs-rel *::before, .fmstr-cmp-cgs-rel *::after { box-sizing: border-box; }
.fmstr-cmp-cgs-rel__container { max-width: 1180px; margin: 0 auto; }
.fmstr-cmp-cgs-rel__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; text-align: center; }
.fmstr-cmp-cgs-rel__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; max-width: 780px; margin: 14px auto 28px; text-align: center; }
.fmstr-cmp-cgs-rel__grid {
display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
}
.fmstr-cmp-cgs-rel__card {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; padding: 18px 20px; display: flex; align-items: center; gap: 14px;
text-decoration: none !important; color: inherit !important; transition: all .15s ease;
}
.fmstr-cmp-cgs-rel__card:hover { border-color: var(--c-edge); box-shadow: var(--c-shadow); transform: translateY(-1px); }
.fmstr-cmp-cgs-rel__icon { width: 40px; height: 40px; border-radius: 10px; background: var(--c-tint); display: grid; place-items: center; flex-shrink: 0; font-size: 18px; }
.fmstr-cmp-cgs-rel__text { flex-grow: 1; min-width: 0; }
.fmstr-cmp-cgs-rel__text h4 { font-size: 14.5px; font-weight: 600; color: var(--c-fg-1); margin: 0; }
.fmstr-cmp-cgs-rel__text small { font-size: 12.5px; color: var(--c-fg-3); display: block; margin-top: 2px; }
.fmstr-cmp-cgs-rel__arrow { color: var(--c-violet-500); font-size: 18px; }

@media (max-width: 880px) { .fmstr-cmp-cgs-rel__grid { grid-template-columns: 1fr 1fr; gap: 12px; } }
@media (max-width: 760px) {
.fmstr-cmp-cgs-rel { padding: 40px 16px; }
.fmstr-cmp-cgs-rel__intro { font-size: 15.5px; }
.fmstr-cmp-cgs-rel__card { padding: 16px; gap: 12px; }
}
@media (max-width: 540px) { .fmstr-cmp-cgs-rel__grid { grid-template-columns: 1fr; gap: 12px; } }
</style>

<section class="fmstr-cmp-cgs-rel" aria-labelledby="fmstr-cmp-cgs-rel-h2">
<div class="fmstr-cmp-cgs-rel__container">
<h2 class="fmstr-cmp-cgs-rel__h2" id="fmstr-cmp-cgs-rel-h2">More from Formester for AI-powered forms</h2>
<p class="fmstr-cmp-cgs-rel__intro">Tools, templates, and walkthroughs that pair with this guide.</p>
<div class="fmstr-cmp-cgs-rel__grid">
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/ai-form-generator/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#10024;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>AI Form Generator</h4><small>Prompt to form, one step</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/ai-survey-generator/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128203;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>AI Survey Generator</h4><small>Survey-specific AI builder</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/ai-quiz-maker/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#127942;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>AI Quiz Maker</h4><small>Topic to scored quiz</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/online-survey-maker/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128221;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Online Survey Maker</h4><small>Drag-and-drop builder</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/questionnaire-maker/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128279;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Questionnaire Maker</h4><small>Branching, logic, themes</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/blog/best-ai-quiz-generators/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#129302;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Best AI Quiz Generators</h4><small>Comparison blog</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/blog/how-to-make-a-questionnaire-in-google-forms/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128196;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Questionnaire in Google Forms</h4><small>Step-by-step guide</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128279;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Conditional Questions in Google Forms</h4><small>Branching how-to</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/blog/how-to-make-a-poll-on-google-forms/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128200;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Polls in Google Forms</h4><small>How-to blog</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/blog/how-to-create-signup-sheets-in-google-forms/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#9997;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>Sign-up Sheets in Google Forms</h4><small>How-to blog</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/blog/5-ways-to-view-responses-in-google-forms/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128202;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>5 ways to view responses</h4><small>Google Forms guide</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-cgs-rel__card" href="https://formester.com/templates/">
<div class="fmstr-cmp-cgs-rel__icon" aria-hidden="true">&#128218;</div>
<div class="fmstr-cmp-cgs-rel__text"><h4>All Formester Templates</h4><small>Browse the library</small></div>
<span class="fmstr-cmp-cgs-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
</div>
</div>
</section>

