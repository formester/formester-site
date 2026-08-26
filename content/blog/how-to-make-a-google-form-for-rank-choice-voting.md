---
slug: "how-to-make-a-google-form-for-rank-choice-voting"
title: "How to Set Up Ranked Choice Voting in Google Forms (and Tally the Results)"
description: "Two methods to run ranked choice voting in Google Forms (multiple-choice grid and per-rank questions), the Formester Ranking-field alternative, and a worked tally example in Google Sheets."
metaTitle: "How to Set Up Ranked Choice Voting in Google Forms (2026 Guide)"
metaDescription: "Two methods to run ranked choice voting in Google Forms (multiple-choice grid and per-rank questions), the Formester Ranking-field alternative, and a worked tally example in Google Sheets."
keywords: "ranked choice voting,\nHow to make a google form for rank voting,\nhow to do a google form for rank voting"
author: "Harish Kumar"
authorProfile: "https://www.linkedin.com/in/harish-kumar2424/"
coverImgAlt: "an illustration of how to make a ranked choice voting form"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_make_a_ranked_choice_voting_form_66ff110bbb.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2025-01-08T00:32:22.566Z"
updatedAt: "2026-05-17T03:51:03.601Z"
publishedAt: "2026-05-17T03:51:03.593Z"
---
Google Forms doesn't have a real ranked-choice question type. 

There's a workaround using the Multiple Choice Grid, and there's a second workaround using a separate question for each rank. Both work for a quick team vote; neither scales past about 50 voters or 5 candidates without spreadsheet pain. 

This guide shows both methods step by step, a worked tally example in Google Sheets (4 candidates, 18 voters, 3 elimination rounds), and where [Formester's drag-and-drop Ranking field](/poll-maker/) cleans up the parts Google Forms gets wrong: no duplicate-rank trap, no Google sign-in required, and a built-in response summary chart.

Ranked-choice voting is now [used by nearly 14 million people across 51 U.S. jurisdictions, with over 800 elections held since 2004](https://fairvote.org/resources/data-on-rcv/), so the workflow matters. The walkthrough below is the same one we use internally for Formester team decisions.

<style>
    /* host-link-override */
    .fmstr-cmp-rcv-vid a {
        text-decoration: none !important;
    }

    .fmstr-cmp-rcv-vid {
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
        padding: 56px 24px;
        font-family: inherit;
        color: var(--c-fg-1);
    }

    .fmstr-cmp-rcv-vid *,
    .fmstr-cmp-rcv-vid *::before,
    .fmstr-cmp-rcv-vid *::after {
        box-sizing: border-box;
    }

    .fmstr-cmp-rcv-vid__container {
        max-width: 880px;
        margin: 0 auto;
        text-align: center;
    }

    .fmstr-cmp-rcv-vid__eyebrow {
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

    .fmstr-cmp-rcv-vid__h2 {
        font-size: clamp(24px, 2.6vw, 32px);
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -.02em;
        margin: 0;
        color: var(--c-fg-1);
    }

    .fmstr-cmp-rcv-vid__intro {
        color: var(--c-fg-3);
        font-size: 16.5px;
        line-height: 1.6;
        max-width: 720px;
        margin: 12px 0 24px;
    }

    .fmstr-cmp-rcv-vid__intro a {
        color: var(--c-violet-600) !important;
        text-decoration: none !important;
        font-weight: 500;
    }

    .fmstr-cmp-rcv-vid__intro a:hover {
        text-decoration: underline !important;
    }

    .fmstr-cmp-rcv-vid__frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 16px;
        overflow: hidden;
        background: #000;
        border: 1px solid var(--c-border);
        box-shadow: var(--c-shadow);
    }

    .fmstr-cmp-rcv-vid__frame iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    .fmstr-cmp-rcv-vid__caption {
        margin: 14px auto 0;
        font-size: 13.5px;
        color: var(--c-fg-3);
        line-height: 1.6;
    }

    .fmstr-cmp-rcv-vid__caption a {
        color: var(--c-violet-600) !important;
        text-decoration: none !important;
        font-weight: 500;
    }

    .fmstr-cmp-rcv-vid__caption a:hover {
        text-decoration: underline !important;
    }

    @media (max-width: 760px) {
        .fmstr-cmp-rcv-vid {
            padding: 40px 16px;
        }

        .fmstr-cmp-rcv-vid__intro {
            font-size: 15.5px;
        }

        .fmstr-cmp-rcv-vid__frame {
            border-radius: 12px;
        }
    }
</style>

<section class="fmstr-cmp-rcv-vid" aria-labelledby="fmstr-cmp-rcv-vid-h2">
    <div class="fmstr-cmp-rcv-vid__container">
        <span class="fmstr-cmp-rcv-vid__eyebrow">Watch the walkthrough</span>
        <h2 class="fmstr-cmp-rcv-vid__h2" id="fmstr-cmp-rcv-vid-h2">Ranked choice voting in Google Forms, demoed end to
            end</h2>
        <p class="fmstr-cmp-rcv-vid__intro">The Multiple Choice Grid setup, the &ldquo;Limit to one response per
            column&rdquo; toggle, and where <a href="https://formester.com/poll-maker/">Formester&rsquo;s Ranking
                field</a> picks up the parts the grid gets wrong.</p>
        <div class="fmstr-cmp-rcv-vid__frame">
            <iframe src="https://www.youtube.com/embed/3me54j9hcn0?si=NBpeJKoRUYfb_OPf"
                title="How to make a Google Form for ranked choice voting" loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p class="fmstr-cmp-rcv-vid__caption">Replace VIDEO_ID_PLACEHOLDER with the existing Formester YouTube video ID
            already embedded on the live blog. Pair with VideoObject schema for rich-result eligibility.</p>
    </div>
</section>

## How Ranked Choice Voting Works?
Each voter ranks every option from most preferred to least preferred (1st, 2nd, 3rd, and so on). Counting happens in rounds.

1. Round 1: count every voter's first choice. If any option has more than 50%, it wins. Stop.

2. If nobody clears 50%, the option with the fewest first-choice votes is eliminated.
3. Every ballot that ranked the eliminated option first gets recounted using its second choice.
4. Repeat rounds until one option crosses 50% or only two options remain.

The two practical consequences: a candidate can lead Round 1 and still lose, and a ballot that doesn't rank enough options eventually "exhausts" out of the count. Both happen in real elections; both will happen in your team vote at scale.

## Why Use Ranked Choice Voting?

- No wasted votes. A ballot for the eliminated last-place candidate still counts because it transfers to that voter's second pick.

- Stronger consensus. The winner has majority support after transfers, not a 27% plurality in a 5-way split.
- Less strategic voting. Voters can rank their honest favorite first without "throwing away" the ballot if that favorite is unpopular.

Where RCV is overkill: a 2-option vote (a standard yes/no), or a 30-second team poll where rough consensus is fine. Use it when the choice matters and there are 3+ real contenders.

## Where Teams Actually Use Ranked Choice Voting
- Engineering team picking the next quarter's roadmap initiative from 6 candidates.

- Marketing team voting on the next event sponsorship from 4 options.
- HR running an employee award where 5 nominees each have a fanbase.
- Community board selecting a new logo from designer submissions.
- Student council elections (the original RCV use case, still the cleanest fit).

If your "vote" has only 2 options or one is the obvious favorite to 80% of voters, skip RCV; a Google Forms multiple-choice question is fine.

## How to Use Google Forms and Sheets for Ranked Choice Voting (RCV)
### **Method 1: Multiple Choice Grid (the most common Google Forms workaround)**

This is the method most teams use. One question, every candidate is a row, every rank is a column.

**Step 1. Define the decision.** Name the choice, the candidates, and who can vote. Lock the candidate list before sharing; adding a candidate mid-vote invalidates earlier ballots.

**Step 2. Open a blank form** at [forms.google.com](https://forms.google.com). Add a title and a one-line description explaining the rules ("rank every option once; do not skip ranks").

**Step 3. Add a Multiple Choice Grid question.**

- Rows: each candidate (Candidate A, Candidate B, Candidate C, Candidate D).
- Columns: each rank (1st choice, 2nd choice, 3rd choice, 4th choice).
- Toggle on **Require a response in each row**. Without this, voters can submit half-ranked ballots that exhaust early in the tally.
- Toggle on **Limit to one response per column**. This is the single most-missed setting. Without it, a voter can rank three candidates as their 1st choice; the ballot is unscorable.

**Step 4. Add a short instruction at the top of the form:**

> Rank each option once. Don't reuse a rank. Don't skip ranks.

**Step 5. Share.** Use the form's link in Slack, email, or a [QR code](/features/qr-code-generator/). For team votes where attribution matters, leave "Collect email addresses" on; for community votes where anonymity matters, turn it off (and note: turning it off means the form is open to ballot stuffing unless you also add a passcode question).

When to use this method: 3-5 candidates, fewer than 50 voters, one-off vote. When NOT to use it: 6+ candidates (the grid gets unreadable on mobile), 50+ voters (manual tally takes hours), or a recurring vote where you'd benefit from a real Ranking field.

### **Method 2 alt (call out below the grid steps):**

A second workaround is to use a separate Multiple Choice question for each rank (one question per rank, candidates as options, "Limit to one response" per option enforced via Google Forms validation). It's slower to fill out but easier for voters to understand. Use it if the grid is visually overwhelming on mobile.

### Examples of RCV in Action

* **Leadership selection:** Teams can pick leaders that everyone supports.

* **Work prioritization:** Focus on tasks that matter most to the group.

* **Awards and contests:** Ensure the best entry wins fairly.

RCV helps make better decisions, respects everyone’s voice, and finds solutions with broad support.

<style>
/* host-link-override */
.fmstr-cmp-rcv-tal a { text-decoration: none !important; }
.fmstr-cmp-rcv-tal {
--c-bg-card: #ffffff;
--c-bg-soft: #f9fafb;
--c-bg-tint: #f7f3ff;
--c-bg-edge: #e4d7ff;
--c-fg-1: #101828;
--c-fg-2: #475467;
--c-fg-3: #697586;
--c-violet-500: #7f56d9;
--c-violet-600: #6941c6;
--c-green: #067647;
--c-green-bg: #ecfdf3;
--c-border: #eaecf0;
--c-shadow: 0 1px 3px rgba(16,24,40,.05), 0 1px 2px rgba(16,24,40,.03);

background: transparent;
padding: 32px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-rcv-tal *, .fmstr-cmp-rcv-tal *::before, .fmstr-cmp-rcv-tal *::after { box-sizing: border-box; }
.fmstr-cmp-rcv-tal__container { max-width: 820px; margin: 0 auto; }

.fmstr-cmp-rcv-tal__h2 {
font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -.02em;
margin: 0 0 14px; color: var(--c-fg-1);
}
.fmstr-cmp-rcv-tal__intro { font-size: 17px; line-height: 1.7; color: var(--c-fg-2); margin: 0 0 24px; }
.fmstr-cmp-rcv-tal__intro strong { color: var(--c-fg-1); }
.fmstr-cmp-rcv-tal__intro a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-rcv-tal__intro a:hover { text-decoration: underline !important; }

.fmstr-cmp-rcv-tal__step { margin: 0 0 26px; }
.fmstr-cmp-rcv-tal__step-title {
display: flex; align-items: center; gap: 12px; margin: 0 0 10px;
}
.fmstr-cmp-rcv-tal__step-num {
flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%;
background: var(--c-violet-600); color: #fff;
font-size: 14px; font-weight: 700; display: grid; place-items: center;
}
.fmstr-cmp-rcv-tal__h3 {
font-size: 19px; font-weight: 700; line-height: 1.35; letter-spacing: -.01em;
margin: 0; color: var(--c-fg-1);
}
.fmstr-cmp-rcv-tal__body p { font-size: 16px; line-height: 1.7; color: var(--c-fg-2); margin: 0 0 12px; }
.fmstr-cmp-rcv-tal__body p strong { color: var(--c-fg-1); }
.fmstr-cmp-rcv-tal__body a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-rcv-tal__body a:hover { text-decoration: underline !important; }
.fmstr-cmp-rcv-tal__body ul { margin: 8px 0 12px; padding-left: 22px; }
.fmstr-cmp-rcv-tal__body ul li { font-size: 16px; line-height: 1.65; color: var(--c-fg-2); margin: 6px 0; }
.fmstr-cmp-rcv-tal__body code {
background: var(--c-bg-tint); color: var(--c-violet-600);
padding: 2px 6px; border-radius: 4px;
font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 14px;
border: 1px solid var(--c-bg-edge);
}

.fmstr-cmp-rcv-tal__table-wrap {
margin: 12px 0 12px;
background: var(--c-bg-card); border: 1px solid var(--c-border);
border-radius: 12px; box-shadow: var(--c-shadow); overflow: hidden;
}
.fmstr-cmp-rcv-tal__table {
width: 100%; border-collapse: collapse; font-size: 15px;
}
.fmstr-cmp-rcv-tal__table thead th {
background: var(--c-bg-tint); color: var(--c-violet-600);
font-weight: 700; font-size: 13.5px; text-transform: uppercase; letter-spacing: .04em;
padding: 12px 18px; text-align: left; border-bottom: 1px solid var(--c-bg-edge);
}
.fmstr-cmp-rcv-tal__table thead th:last-child { text-align: right; }
.fmstr-cmp-rcv-tal__table tbody td {
padding: 12px 18px; border-bottom: 1px solid var(--c-border);
color: var(--c-fg-2); vertical-align: middle;
}
.fmstr-cmp-rcv-tal__table tbody td:first-child { font-weight: 600; color: var(--c-fg-1); }
.fmstr-cmp-rcv-tal__table tbody td:last-child { text-align: right; font-weight: 700; color: var(--c-fg-1); font-variant-numeric: tabular-nums; }
.fmstr-cmp-rcv-tal__table tbody tr:last-child td { border-bottom: 0; }
.fmstr-cmp-rcv-tal__table tbody tr.is-out td:first-child { color: var(--c-fg-3); text-decoration: line-through; }
.fmstr-cmp-rcv-tal__table tbody tr.is-out td:last-child { color: var(--c-fg-3); }
.fmstr-cmp-rcv-tal__table tbody tr.is-win td { background: var(--c-green-bg); }
.fmstr-cmp-rcv-tal__table tbody tr.is-win td:first-child { color: var(--c-green); }
.fmstr-cmp-rcv-tal__table tbody tr.is-win td:last-child { color: var(--c-green); }

.fmstr-cmp-rcv-tal__callout {
margin: 12px 0 0; padding: 12px 16px;
background: var(--c-bg-soft); border-left: 3px solid var(--c-violet-500);
border-radius: 8px; font-size: 15px; color: var(--c-fg-2); line-height: 1.6;
}
.fmstr-cmp-rcv-tal__callout strong { color: var(--c-fg-1); }
.fmstr-cmp-rcv-tal__callout--win { border-left-color: var(--c-green); background: var(--c-green-bg); }
.fmstr-cmp-rcv-tal__callout--win strong { color: var(--c-green); }

.fmstr-cmp-rcv-tal__close {
margin: 24px 0 0; padding: 22px 24px;
background: var(--c-bg-soft); border: 1px solid var(--c-border); border-radius: 14px;
}
.fmstr-cmp-rcv-tal__close p { font-size: 16px; line-height: 1.6; color: var(--c-fg-2); margin: 0 0 10px; }
.fmstr-cmp-rcv-tal__close p:last-child { margin-bottom: 0; }
.fmstr-cmp-rcv-tal__close ul { margin: 6px 0 0; padding-left: 22px; }
.fmstr-cmp-rcv-tal__close li { font-size: 15.5px; line-height: 1.6; color: var(--c-fg-2); margin: 6px 0; }
.fmstr-cmp-rcv-tal__close a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-rcv-tal__close a:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-rcv-tal { padding: 24px 16px; }
.fmstr-cmp-rcv-tal__h2 { font-size: 24px; }
.fmstr-cmp-rcv-tal__intro { font-size: 15.5px; }
.fmstr-cmp-rcv-tal__h3 { font-size: 17px; }
.fmstr-cmp-rcv-tal__body p, .fmstr-cmp-rcv-tal__body ul li { font-size: 15.5px; }
.fmstr-cmp-rcv-tal__table { font-size: 14.5px; }
.fmstr-cmp-rcv-tal__table thead th, .fmstr-cmp-rcv-tal__table tbody td { padding: 10px 14px; }
.fmstr-cmp-rcv-tal__callout { font-size: 14.5px; }
.fmstr-cmp-rcv-tal__close { padding: 18px 18px; }
.fmstr-cmp-rcv-tal__close p { font-size: 15.5px; }
.fmstr-cmp-rcv-tal__close li { font-size: 14.5px; }
}
</style>

<section class="fmstr-cmp-rcv-tal" aria-labelledby="fmstr-cmp-rcv-tal-h2">
<div class="fmstr-cmp-rcv-tal__container">

<h2 class="fmstr-cmp-rcv-tal__h2" id="fmstr-cmp-rcv-tal-h2">How to Tally Ranked Choice Voting in Google Sheets (Worked Example)</h2>

<p class="fmstr-cmp-rcv-tal__intro">Walking through a real tally is the only way this stops feeling abstract. The example below: <strong>4 candidates</strong> (Alex, Bo, Casey, Devi), <strong>18 voters</strong>, <strong>3 elimination rounds</strong>.</p>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">1</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Import responses</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<ul>
<li>In Google Forms, open the <strong>Responses</strong> tab and click the green Sheets icon to link a spreadsheet.</li>
<li>Make a copy of that sheet before doing anything else; rounds get messy and you'll want the original.</li>
</ul>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">2</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Find the winning threshold</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<p>The threshold is <code>Total votes / 2 + 1</code> (the 50%+1 rule). For 18 votes, the threshold is <strong>10</strong>.</p>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">3</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Round 1: count first-choice votes</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<p>Tally every voter's 1st-choice column.</p>
<div class="fmstr-cmp-rcv-tal__table-wrap">
<table class="fmstr-cmp-rcv-tal__table">
<thead>
<tr><th>Candidate</th><th>Round 1 first-choice votes</th></tr>
</thead>
<tbody>
<tr><td>Alex</td><td>7</td></tr>
<tr><td>Bo</td><td>5</td></tr>
<tr><td>Casey</td><td>4</td></tr>
<tr><td>Devi</td><td>2</td></tr>
</tbody>
</table>
</div>
<div class="fmstr-cmp-rcv-tal__callout">No candidate has 10. <strong>Eliminate Devi</strong> (lowest).</div>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">4</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Round 2: redistribute Devi's ballots to their 2nd-choice</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<p>Look at the 2 voters who picked Devi 1st. Suppose their 2nd-choice is: 1 for Bo, 1 for Casey.</p>
<div class="fmstr-cmp-rcv-tal__table-wrap">
<table class="fmstr-cmp-rcv-tal__table">
<thead>
<tr><th>Candidate</th><th>Round 2 votes</th></tr>
</thead>
<tbody>
<tr><td>Alex</td><td>7</td></tr>
<tr><td>Bo</td><td>6</td></tr>
<tr><td>Casey</td><td>5</td></tr>
<tr class="is-out"><td>Devi</td><td>out</td></tr>
</tbody>
</table>
</div>
<div class="fmstr-cmp-rcv-tal__callout">Still no candidate at 10. <strong>Eliminate Casey</strong> (now lowest).</div>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">5</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Round 3: redistribute Casey's 5 ballots</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<p>Look at Casey's voters' next active preference (skip any rank that points to an already-eliminated candidate). Suppose: 3 to Alex, 2 to Bo.</p>
<div class="fmstr-cmp-rcv-tal__table-wrap">
<table class="fmstr-cmp-rcv-tal__table">
<thead>
<tr><th>Candidate</th><th>Round 3 votes</th></tr>
</thead>
<tbody>
<tr class="is-win"><td>Alex</td><td>10</td></tr>
<tr><td>Bo</td><td>8</td></tr>
<tr class="is-out"><td>Casey</td><td>out</td></tr>
<tr class="is-out"><td>Devi</td><td>out</td></tr>
</tbody>
</table>
</div>
<div class="fmstr-cmp-rcv-tal__callout fmstr-cmp-rcv-tal__callout--win"><strong>Alex reaches 10</strong> (the threshold). Alex wins.</div>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">6</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Handle ties</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<p>If two candidates tie for last place in a round, the standard methods are:</p>
<ul>
<li>Eliminate both simultaneously (only if it doesn't make the count impossible).</li>
<li>Compare prior-round vote totals.</li>
<li>Eliminate by random draw, declared in the rules before the vote.</li>
</ul>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__step">
<div class="fmstr-cmp-rcv-tal__step-title">
<span class="fmstr-cmp-rcv-tal__step-num">7</span>
<h3 class="fmstr-cmp-rcv-tal__h3">Handle exhausted ballots</h3>
</div>
<div class="fmstr-cmp-rcv-tal__body">
<p>If a voter ranked only 2 of 4 candidates and both get eliminated, that ballot has no more preferences to transfer. It &ldquo;exhausts&rdquo; and stops counting in future rounds. The threshold doesn't change; the remaining active ballots still need 50%+1 of the remaining count.</p>
</div>
</div>

<div class="fmstr-cmp-rcv-tal__close">
<p>For 50+ ballots, this gets tedious. Three faster options:</p>
<ul>
<li><a href="https://www.rankedvote.co/extension" target="_blank" rel="noopener">Rankedvote.co</a>, a Chrome extension that runs RCV directly on a linked Google Sheet.</li>
<li><a href="https://www.rcv123.org/google-forms-ranked-choice-spreadsheet-calculator" target="_blank" rel="noopener">RCV123</a>, a free spreadsheet calculator for Google Classroom, Forms, and Sheets.</li>
<li>A pre-built RCV Apps Script (search &ldquo;gform-rankvote&rdquo; on GitHub).</li>
</ul>
</div>

</div>
</section>


## Common Ranked-Choice Voting Mistakes (and How to Avoid Them)
- **Letting voters reuse a rank.** A ballot with two "1st choices" is unscorable. Fix: turn on "Limit to one response per column" in Google Forms, or use Formester's Ranking field (enforced by design).

- **No clear winning threshold.** Without 50%+1, you can land on a "plurality winner" by accident, which defeats the point of RCV. Fix: state the threshold in the form description.
- **Adding a candidate mid-vote.** Earlier ballots can't rank a candidate they never saw. Fix: lock the candidate list before sharing the link.
- **Ignoring exhausted ballots.** If voters can rank fewer than all candidates, plan for exhaustion in your tally rules. Fix: either require ranking every option (Google Forms: "Require a response in each row") or document how exhausted ballots are handled.
- **Tie-handling left to the moment.** Decide tie rules before the vote runs. Coin-flip ties are fine if announced; surprise coin-flip ties are not.
- **Manual tally past 50 ballots.** Past about 50 ballots and 4 candidates, the manual rounds become error-prone. Switch to one of the tally tools listed above.


## How to Create a Ranked Choice Voting Form in Formester?

Google Forms' grid is a stand-in for a ranking question; Formester ships a proper Ranking field. The difference matters for two reasons: voters can't accidentally pick the same rank twice (the field enforces unique ordering), and the response view shows a distribution chart per option instead of a raw grid.

**Step 1.** [Log in to Formester](https://app.formester.com/users/sign_in/) and start a new form. Pick "Blank" or the [Poll Maker template](/poll-maker/).

**Step 2. Add a Ranking field.** Click the field menu, pick "Ranking," and list your candidates as the options. Voters drag-and-drop options into preference order, or click to rank.

**Step 3. Add a description**, for example: "Rank each option from most preferred to least preferred. Every position must be filled."

**Step 4. (Optional) Add brand styling.** Logo, brand colors, and custom subdomain on Personal plan and above, via the [branding kit](/features/branding-kit/). Useful for community votes where the form represents an organization.

**Step 5. Share via link, embed, or [QR code](/features/qr-code-generator/).** Formester forms don't require a Google account to respond, which is the deciding factor for any vote with external participants (community boards, customer councils, public elections).

**Step 6. Review responses.** Each option gets a [summary distribution chart](/features/form-analytics/) showing how many voters ranked it 1st, 2nd, 3rd, and so on. This is the fastest way to see the shape of the vote before you do the round-by-round tally.

Honest caveat: Formester does not auto-tally ranked-choice voting (round-by-round elimination is still a Google Sheets job, same as Google Forms). What Formester saves you is the data-capture mess: clean ordered preferences instead of grid cells you have to parse for duplicates.

<style>
/* host-link-override */
.fmstr-cmp-lgsf-cmp a { text-decoration: none !important; }
.fmstr-cmp-lgsf-cmp {
--c-bg-section: #f4f4f7; --c-bg-card: #ffffff;
--c-bg-tint: #f7f3ff; --c-bg-edge: #e4d7ff; --c-bg-row: #fafafb;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-600: #6941c6;
--c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-lgsf-cmp *, .fmstr-cmp-lgsf-cmp *::before, .fmstr-cmp-lgsf-cmp *::after { box-sizing: border-box; }
.fmstr-cmp-lgsf-cmp__container { max-width: 1180px; margin: 0 auto; text-align: center; }
.fmstr-cmp-lgsf-cmp__eyebrow {
display: inline-block; padding: 5px 12px; border-radius: 9999px;
background: var(--c-bg-tint); color: var(--c-violet-600);
font-size: 12px; font-weight: 600; letter-spacing: .04em;
text-transform: uppercase; border: 1px solid var(--c-bg-edge); margin: 0 0 14px;
}
.fmstr-cmp-lgsf-cmp__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-lgsf-cmp__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; max-width: 820px; margin: 14px 0 28px; }
.fmstr-cmp-lgsf-cmp__card { background: var(--c-bg-card); border: 1px solid var(--c-border); border-radius: 20px; overflow: hidden; box-shadow: var(--c-shadow); text-align: left; }
.fmstr-cmp-lgsf-cmp__table { width: 100%; border-collapse: collapse; font-size: 14.5px; }
.fmstr-cmp-lgsf-cmp__table th, .fmstr-cmp-lgsf-cmp__table td { padding: 14px 16px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--c-border); }
.fmstr-cmp-lgsf-cmp__table thead th { background: var(--c-bg-tint); color: var(--c-violet-600); font-weight: 700; font-size: 13.5px; text-transform: uppercase; letter-spacing: .04em; }
.fmstr-cmp-lgsf-cmp__table tbody th { font-weight: 600; color: var(--c-fg-1); background: var(--c-bg-row); width: 28%; }
.fmstr-cmp-lgsf-cmp__table tbody td { color: var(--c-fg-2); }
.fmstr-cmp-lgsf-cmp__table tbody tr:last-child th, .fmstr-cmp-lgsf-cmp__table tbody tr:last-child td { border-bottom: 0; }
.fmstr-cmp-lgsf-cmp__table a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-lgsf-cmp__table a:hover { text-decoration: underline !important; }
.fmstr-cmp-lgsf-cmp__close { margin: 20px auto 0; font-size: 15px; color: var(--c-fg-3); line-height: 1.6; max-width: 880px; text-align: center; }
.fmstr-cmp-lgsf-cmp__close a { color: var(--c-violet-600) !important; text-decoration: none !important; font-weight: 500; }
.fmstr-cmp-lgsf-cmp__close a:hover { text-decoration: underline !important; }

@media (max-width: 760px) {
.fmstr-cmp-lgsf-cmp { padding: 40px 16px; }
.fmstr-cmp-lgsf-cmp__intro { font-size: 15.5px; }
.fmstr-cmp-lgsf-cmp__close { font-size: 14.5px; }
.fmstr-cmp-lgsf-cmp__card { background: transparent; border: 0; box-shadow: none; border-radius: 0; padding: 0; }
.fmstr-cmp-lgsf-cmp__scroll { overflow: visible; }
.fmstr-cmp-lgsf-cmp__table { display: block; min-width: 0; width: 100%; }
.fmstr-cmp-lgsf-cmp__table thead { display: none; }
.fmstr-cmp-lgsf-cmp__table tbody { display: block; }
.fmstr-cmp-lgsf-cmp__table tbody tr { display: block; background: #ffffff; border: 1px solid #eaecf0; border-radius: 14px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(16,24,40,.04); overflow: hidden; }
.fmstr-cmp-lgsf-cmp__table tbody tr:last-child { margin-bottom: 0; }
.fmstr-cmp-lgsf-cmp__table tbody th { display: block; width: 100%; background: #f7f3ff; color: #6941c6 !important; font-size: 16px; font-weight: 700; padding: 12px 16px; border-bottom: 1px solid #e4d7ff; }
.fmstr-cmp-lgsf-cmp__table tbody th a { color: #6941c6 !important; }
.fmstr-cmp-lgsf-cmp__table tbody td { display: block; padding: 10px 16px; border: 0; font-size: 14.5px; line-height: 1.5; color: #475467; }
.fmstr-cmp-lgsf-cmp__table tbody td::before { content: attr(data-h) ": "; font-weight: 600; color: #101828; }
.fmstr-cmp-lgsf-cmp__table tbody tr.is-pick { box-shadow: 0 4px 14px rgba(127,86,217,.12); border-color: #e4d7ff; }
.fmstr-cmp-lgsf-cmp__table tbody tr.is-pick th { background: linear-gradient(135deg, #7f56d9, #6941c6); color: #ffffff !important; border-bottom-color: transparent; }
.fmstr-cmp-lgsf-cmp__table tbody tr.is-pick th a { color: #ffffff !important; }
}
</style>

<section class="fmstr-cmp-lgsf-cmp" aria-labelledby="fmstr-cmp-lgsf-cmp-h2">
<div class="fmstr-cmp-lgsf-cmp__container">
<span class="fmstr-cmp-lgsf-cmp__eyebrow">Native sync vs Formester</span>
<h2 class="fmstr-cmp-lgsf-cmp__h2" id="fmstr-cmp-lgsf-cmp-h2">Google Forms green-icon sync, or Formester&rsquo;s Google Sheets integration</h2>
<p class="fmstr-cmp-lgsf-cmp__intro">Internal form, low volume, no branding needed? Stick with native. Customer-facing forms that need branding, analytics, or pre-fill logic? Formester pulls ahead.</p>
<div class="fmstr-cmp-lgsf-cmp__card">
<table class="fmstr-cmp-lgsf-cmp__table">
<thead>
<tr>
<th>Capability</th>
<th>Google Forms + Sheets (native)</th>
<th>Formester + Google Sheets</th>
</tr>
</thead>
<tbody>
<tr><th>Auto-sync to a Sheet</th><td data-h="Google Forms native">Yes (green icon, one-click)</td><td data-h="Formester">Yes (Settings &rarr; Integrations &rarr; Google Sheets)</td></tr>
<tr><th>Branded forms (logo, colors, custom domain)</th><td data-h="Google Forms native">No</td><td data-h="Formester">Yes (Personal plan and up)</td></tr>
<tr><th>Built-in analytics dashboard</th><td data-h="Google Forms native">No (build pivots in Sheets manually)</td><td data-h="Formester">Yes (<a href="https://formester.com/features/form-analytics/">form analytics</a>)</td></tr>
<tr><th>Per-question conditional logic</th><td data-h="Google Forms native">Section-based only</td><td data-h="Formester">Per-question (<a href="https://formester.com/features/conditional-logic/">conditional logic</a>)</td></tr>
<tr><th>File uploads</th><td data-h="Google Forms native">1GB per response, files in Drive</td><td data-h="Formester">100MB Free / 1GB Personal / 50GB Business (<a href="https://formester.com/features/file-upload-forms/">file uploads</a>)</td></tr>
<tr><th>Pre-fill from a Sheet on load</th><td data-h="Google Forms native">No (manual prefilled link only)</td><td data-h="Formester">Yes (<a href="https://formester.com/features/auto-fill-forms-with-external-data/">auto-fill from external data</a>)</td></tr>
<tr><th>Webhooks + API</th><td data-h="Google Forms native">No</td><td data-h="Formester">Yes</td></tr>
<tr><th>Free tier</th><td data-h="Google Forms native">Unlimited responses (Google account)</td><td data-h="Formester">10 forms, 100 responses/month</td></tr>
</tbody>
</table>
</div>
<p class="fmstr-cmp-lgsf-cmp__close">Google Forms is fine for response collection. <a href="https://formester.com/integrations/google-sheets/">Formester&rsquo;s Google Sheets integration</a> pulls ahead when you need pre-fill from a sheet, branded forms, multi-form aggregation, or a dashboard you don&rsquo;t have to build by hand.</p>
</div>
</section>



### Conclusion
For a small team vote, Google Forms' Multiple Choice Grid plus a Google Sheets tally is enough. For anything where voters expect a real ranking field, no Google sign-in, and a clean summary view, [start a free Formester form](https://app.formester.com/users/sign_up/) or grab the [Poll Maker template](/poll-maker/).

<style>
/* host-link-override */
.fmstr-cmp-lgsf-faq a { text-decoration: none !important; }
.fmstr-cmp-lgsf-faq {
--c-bg: #fafafb; --c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467;
--c-violet-600: #6941c6; --c-tint: #f7f3ff; --c-edge: #e4d7ff;
--c-border: #eaecf0; --c-chip-bg: #f4f4f7;
--c-shadow: 0 1px 3px rgba(16,24,40,.05);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-lgsf-faq *, .fmstr-cmp-lgsf-faq *::before, .fmstr-cmp-lgsf-faq *::after { box-sizing: border-box; }
.fmstr-cmp-lgsf-faq__container { max-width: 820px; margin: 0 auto; }
.fmstr-cmp-lgsf-faq__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; color: var(--c-fg-1); }
.fmstr-cmp-lgsf-faq__intro { color: #697586; font-size: 17px; line-height: 1.6; margin: 14px 0 28px; }
.fmstr-cmp-lgsf-faq__list { display: flex; flex-direction: column; gap: 12px; }
.fmstr-cmp-lgsf-faq__item {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; box-shadow: var(--c-shadow); overflow: hidden;
}
.fmstr-cmp-lgsf-faq__item > summary {
padding: 18px 22px; cursor: pointer; font-weight: 600; font-size: 16.5px;
color: var(--c-fg-1); display: flex; align-items: center; gap: 14px;
list-style: none;
}
.fmstr-cmp-lgsf-faq__item > summary::-webkit-details-marker { display: none; }
.fmstr-cmp-lgsf-faq__item > summary::before {
content: ""; width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
background-color: var(--c-chip-bg);
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%2375747f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5l4 4 4-4'/%3E%3C/svg%3E");
background-repeat: no-repeat; background-position: center;
transition: transform .15s ease, background-color .15s ease;
}
.fmstr-cmp-lgsf-faq__item[open] > summary::before { transform: rotate(180deg); background-color: var(--c-tint); }
.fmstr-cmp-lgsf-faq__item[open] > summary { color: var(--c-violet-600); }
.fmstr-cmp-lgsf-faq__answer { padding: 0 22px 22px 64px; color: var(--c-fg-2); font-size: 15.5px; line-height: 1.7; }
.fmstr-cmp-lgsf-faq__answer a { color: var(--c-violet-600) !important; text-decoration: none !important; }
.fmstr-cmp-lgsf-faq__answer a:hover { text-decoration: underline !important; }
.fmstr-cmp-lgsf-faq__answer code { background: var(--c-chip-bg); padding: 1px 6px; border-radius: 4px; font-size: 14px; color: var(--c-fg-1); }

@media (max-width: 760px) {
.fmstr-cmp-lgsf-faq { padding: 40px 16px; }
.fmstr-cmp-lgsf-faq__intro { font-size: 15.5px; }
.fmstr-cmp-lgsf-faq__item > summary { padding: 16px 16px; font-size: 15.5px; gap: 12px; }
.fmstr-cmp-lgsf-faq__item > summary::before { width: 26px; height: 26px; }
.fmstr-cmp-lgsf-faq__answer { padding: 0 16px 18px 16px; font-size: 15px; line-height: 1.65; }
}
</style>

<section class="fmstr-cmp-lgsf-faq" aria-labelledby="fmstr-cmp-lgsf-faq-h2">
<div class="fmstr-cmp-lgsf-faq__container">
<h2 class="fmstr-cmp-lgsf-faq__h2" id="fmstr-cmp-lgsf-faq-h2">Google Forms to Google Sheets FAQ</h2>
<p class="fmstr-cmp-lgsf-faq__intro">Answers that mirror the FAQPage JSON-LD on the live page.</p>
<div class="fmstr-cmp-lgsf-faq__list">
<details class="fmstr-cmp-lgsf-faq__item">
<summary>Can a Google Form auto-populate a Google Sheet?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">Yes. Open the Responses tab, click the green Google Sheets icon, pick &ldquo;Create a new spreadsheet&rdquo; or &ldquo;Select existing spreadsheet.&rdquo; Every new submission lands as a row in the Sheet automatically. No script, no add-on.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>Can Google Forms pull data from a Sheet (the reverse direction)?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">Not natively. The native flow is one-way (Form to Sheet). To go the other way, use a <a href="https://www.makeuseof.com/google-forms-pre-fill-responses/">manual prefilled link</a> for fixed defaults, an <a href="https://www.geeksforgeeks.org/websites-apps/how-to-create-a-prefilled-google-form-from-a-google-sheet/">Apps Script that generates per-row prefilled URLs</a>, or <a href="https://formester.com/features/auto-fill-forms-with-external-data/">Formester&rsquo;s auto-fill from external data</a> which reads from a Sheet on load.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>How do I link an existing Google Sheet to a Google Form?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">Open the form&rsquo;s Responses tab, click the green Sheets icon, pick &ldquo;Select existing spreadsheet&rdquo; instead of &ldquo;Create a new spreadsheet.&rdquo; Pick the Sheet from your Drive. Google adds a new tab called &ldquo;Form Responses 1&rdquo; inside it; your existing tabs and formulas are not touched.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>Can a Google Form update an existing row in a Google Sheet?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">Not natively. Each submission adds a new row. To update an existing row, you need Apps Script (match on a key column, find the row, write the new values) or a third-party tool. <a href="https://formester.com/integrations/google-sheets/">Formester&rsquo;s Google Sheets integration</a> paired with webhooks can post submission data to any endpoint that handles the update logic.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>How do I unlink a Google Form from a Google Sheet?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">In the form, open the Responses tab, click the three-dot menu next to the green Sheets icon, pick &ldquo;Unlink form.&rdquo; Past responses stay in the Sheet. Future responses are stored inside Google Forms only until you link a new Sheet.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>How do I send responses from multiple forms into the same Google Sheet?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">The native green-Sheets-icon flow only lets one Form write to one Sheet. To merge, either (a) link each form to its own Sheet then use <code>IMPORTRANGE()</code> or <code>QUERY()</code> to consolidate into a master Sheet, or (b) use <a href="https://formester.com/integrations/google-sheets/">Formester</a> or Zapier to route multiple forms to a single tab.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>Why are my Google Sheet formulas being erased after a form submission?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">Form submissions insert new rows at the top of the response tab and push old rows down; in-row formulas often get displaced or wiped. Move formulas to a separate analysis tab and reference the response tab with <code>QUERY()</code> or <code>IMPORTRANGE()</code>. Detailed thread on <a href="https://webapps.stackexchange.com/questions/151017/google-sheets-existing-row-formulas-are-being-erased-after-google-form-submiss">Stack Exchange</a>.</div>
</details>
<details class="fmstr-cmp-lgsf-faq__item">
<summary>Is there a faster way than the green Sheets icon?</summary>
<div class="fmstr-cmp-lgsf-faq__answer">For one form, no, the green icon is the fastest path. For repeat forms with branding, conditional logic, and analytics needs, <a href="https://formester.com/integrations/google-sheets/">Formester</a> ships the same Sheet auto-sync plus a built-in dashboard, so you don&rsquo;t rebuild analysis in Sheets every time.</div>
</details>
</div>
</div>
</section>

<style>
/* host-link-override */
.fmstr-cmp-lgsf-rel a { text-decoration: none !important; }
.fmstr-cmp-lgsf-rel {
--c-bg: #f4f4f7; --c-card: #ffffff;
--c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;
--c-violet-500: #7f56d9; --c-violet-600: #6941c6;
--c-tint: #f7f3ff; --c-edge: #e4d7ff; --c-border: #eaecf0;
--c-shadow: 0 4px 20px rgba(16,24,40,.06);

background: transparent; padding: 56px 24px;
font-family: inherit;
color: var(--c-fg-1);
}
.fmstr-cmp-lgsf-rel *, .fmstr-cmp-lgsf-rel *::before, .fmstr-cmp-lgsf-rel *::after { box-sizing: border-box; }
.fmstr-cmp-lgsf-rel__container { max-width: 1180px; margin: 0 auto; }
.fmstr-cmp-lgsf-rel__h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; line-height: 1.15; letter-spacing: -.02em; margin: 0; }
.fmstr-cmp-lgsf-rel__intro { color: var(--c-fg-3); font-size: 17px; line-height: 1.6; max-width: 780px; margin: 14px 0 28px; }
.fmstr-cmp-lgsf-rel__grid {
display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
}
.fmstr-cmp-lgsf-rel__card {
background: var(--c-card); border: 1px solid var(--c-border);
border-radius: 14px; padding: 18px 20px; display: flex; align-items: center; gap: 14px;
text-decoration: none !important; color: inherit !important; transition: all .15s ease;
}
.fmstr-cmp-lgsf-rel__card:hover { border-color: var(--c-edge); box-shadow: var(--c-shadow); transform: translateY(-1px); }
.fmstr-cmp-lgsf-rel__icon { width: 40px; height: 40px; border-radius: 10px; background: var(--c-tint); display: grid; place-items: center; flex-shrink: 0; font-size: 18px; }
.fmstr-cmp-lgsf-rel__text { flex-grow: 1; }
.fmstr-cmp-lgsf-rel__text h3 { font-size: 14.5px; font-weight: 600; color: var(--c-fg-1); margin: 0; }
.fmstr-cmp-lgsf-rel__text small { font-size: 12.5px; color: var(--c-fg-3); display: block; margin-top: 2px; }
.fmstr-cmp-lgsf-rel__arrow { color: var(--c-violet-500); font-size: 18px; }

@media (max-width: 880px) { .fmstr-cmp-lgsf-rel__grid { grid-template-columns: 1fr 1fr; gap: 12px; } }
@media (max-width: 760px) {
.fmstr-cmp-lgsf-rel { padding: 40px 16px; }
.fmstr-cmp-lgsf-rel__intro { font-size: 15.5px; }
.fmstr-cmp-lgsf-rel__card { padding: 16px; gap: 12px; }
}
@media (max-width: 540px) { .fmstr-cmp-lgsf-rel__grid { grid-template-columns: 1fr; gap: 12px; } }
</style>

<section class="fmstr-cmp-lgsf-rel" aria-labelledby="fmstr-cmp-lgsf-rel-h2">
<div class="fmstr-cmp-lgsf-rel__container">
<h2 class="fmstr-cmp-lgsf-rel__h2" id="fmstr-cmp-lgsf-rel-h2">More from Formester on Google Forms and Sheets</h2>
<p class="fmstr-cmp-lgsf-rel__intro">Product pages, integrations, and Google Forms guides that pair with this walkthrough.</p>
<div class="fmstr-cmp-lgsf-rel__grid">
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/integrations/google-sheets/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#128202;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Google Sheets Integration</h3><small>Native auto-sync, no Zapier</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/features/auto-fill-forms-with-external-data/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#9889;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Auto-fill from external data</h3><small>Pre-fill forms from a Sheet</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/blog/5-ways-to-view-responses-in-google-forms/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#128065;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>5 ways to view responses</h3><small>How-to blog</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/blog/how-to-add-conditional-questions-in-google-forms/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#127769;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Conditional questions in Google Forms</h3><small>How-to blog</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/blog/how-to-make-a-questionnaire-in-google-forms/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#128221;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Questionnaire in Google Forms</h3><small>How-to blog</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/blog/how-to-link-squarespace-forms-to-google-sheets/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#128279;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Squarespace forms to Sheets</h3><small>How-to blog</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/blog/how-to-create-google-form-using-chatgpt/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#129302;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Google Form with ChatGPT</h3><small>How-to blog</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/blog/how-to-create-signup-sheets-in-google-forms/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#128100;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>Signup sheets in Google Forms</h3><small>How-to blog</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
<a class="fmstr-cmp-lgsf-rel__card" href="https://formester.com/integrations/">
<div class="fmstr-cmp-lgsf-rel__icon" aria-hidden="true">&#128268;</div>
<div class="fmstr-cmp-lgsf-rel__text"><h3>All Formester integrations</h3><small>Sheets, Slack, Zapier, more</small></div>
<span class="fmstr-cmp-lgsf-rel__arrow" aria-hidden="true">&rarr;</span>
</a>
</div>
</div>
</section>




