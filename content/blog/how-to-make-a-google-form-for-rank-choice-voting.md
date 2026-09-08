---
slug: "how-to-make-a-google-form-for-rank-choice-voting"
title: "Ranked Choice Voting in Google Forms: Set Up the Ballot and Count the Votes"
description: "Google Forms has no ranking question. Build a ranked choice ballot with a multiple choice grid, count the rounds in Google Sheets with a worked example, and see where a real ranking field helps."
metaTitle: "Google Forms Ranked Choice Voting: Ballot Setup and Counting"
metaDescription: "Google Forms ranked choice voting: build the ballot with a multiple choice grid, then count the rounds in Google Sheets with a worked example."
keywords: "google forms ranked choice,ranked choice voting google forms,google forms ranking question,google form rank choices,how to do ranked choice voting in google forms,ranked choice voting calculator"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
authorImage: "https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"
coverImgAlt: "Cover art for a guide to ranked choice voting in Google Forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_make_a_ranked_choice_voting_form_66ff110bbb.png","width":1214,"height":630}
metaImage: []
jsonld: [{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://formester.com/#organization","url":"https://formester.com/","name":"Formester","logo":{"@type":"ImageObject","url":"https://formester.com/logo.png"}},{"@type":"WebPage","@id":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/#webpage","url":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/","name":"Google Forms Ranked Choice Voting: Ballot Setup and Counting","isPartOf":{"@id":"https://formester.com/#organization"},"breadcrumb":{"@id":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/#breadcrumb"},"inLanguage":"en-US","description":"Google Forms has no ranking question. Build a ranked choice ballot with a multiple choice grid, count the rounds in Google Sheets with a worked example, and see where a real ranking field helps.","datePublished":"2026-05-17","dateModified":"2026-09-03"},{"@type":"BreadcrumbList","@id":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://formester.com/blog/"},{"@type":"ListItem","position":3,"name":"Ranked Choice Voting in Google Forms: Set Up the Ballot and Count the Votes","item":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/"}]},{"@type":"BlogPosting","@id":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/#article","headline":"Ranked Choice Voting in Google Forms: Set Up the Ballot and Count the Votes","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_make_a_ranked_choice_voting_form_66ff110bbb.png","author":{"@type":"Person","name":"Harsh Shah","url":"https://linkedin.com/in/harshshahseo","image":"https://formester-strapi.s3.ap-south-1.amazonaws.com/41fc6df7f8a7952a_harsh-shah.jpg"},"publisher":{"@id":"https://formester.com/#organization"},"inLanguage":"en-US","description":"Google Forms has no ranking question. Build a ranked choice ballot with a multiple choice grid, count the rounds in Google Sheets with a worked example, and see where a real ranking field helps.","datePublished":"2026-05-17","dateModified":"2026-09-03","mainEntityOfPage":{"@id":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/#webpage"},"about":[{"@type":"SoftwareApplication","name":"Google Forms","applicationCategory":"BusinessApplication","url":"https://docs.google.com/forms/","operatingSystem":"Web"}],"mentions":[{"@id":"https://formester.com/#software"}],"citation":[{"@type":"WebPage","name":"Choose a type of question for your form","url":"https://support.google.com/docs/answer/7322334","publisher":{"@type":"Organization","name":"Google"}}]},{"@type":"FAQPage","@id":"https://formester.com/blog/how-to-make-a-google-form-for-rank-choice-voting/#faq","mainEntity":[{"@type":"Question","name":"Does Google Forms have a ranking question?","acceptedAnswer":{"@type":"Answer","text":"No. Google Forms has no question type where people drag options into an order. The closest is a multiple choice grid with the candidates as rows and the ranks as columns, with Limit to one response per column turned on so each rank can only be used once."}},{"@type":"Question","name":"Can you do ranked choice voting in Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Yes. Collect the rankings with a multiple choice grid and link the responses to Google Sheets. Count the rounds there. Google Forms does not count ranked choice rounds for you, so the counting is a spreadsheet job or a job for a tool such as the RankedVote extension."}},{"@type":"Question","name":"How do I stop voters giving two candidates the same rank?","acceptedAnswer":{"@type":"Answer","text":"On the multiple choice grid, open the three-dot menu and turn on Limit to one response per column. Each rank column then accepts one pick. Turn on Require a response in each row as well, so every candidate gets a rank."}},{"@type":"Question","name":"How do I count ranked choice votes in Google Sheets?","acceptedAnswer":{"@type":"Answer","text":"Work out the threshold, which is more than half of the ballots. Count each candidate's first-choice votes with COUNTIF. If nobody reaches the threshold, remove the candidate with the fewest votes and move each of their ballots to the highest-ranked candidate still in the race. Repeat until someone passes the threshold."}},{"@type":"Question","name":"What happens if a voter skips a rank?","acceptedAnswer":{"@type":"Answer","text":"If the candidates they did rank are all eliminated, their ballot has nowhere to go and drops out of later rounds. This is called an exhausted ballot. Turn on Require a response in each row so every ballot ranks every candidate, or decide before the vote how you will handle exhausted ballots."}},{"@type":"Question","name":"Can a ranked choice vote in Google Forms be anonymous?","acceptedAnswer":{"@type":"Answer","text":"Yes. Keep email collection off and leave Limit to 1 response off, because that setting makes voters sign in to Google. Without a sign-in, the same person can submit the ballot more than once, so decide which matters more before you share it."}},{"@type":"Question","name":"How many candidates can a Google Forms ranked ballot have?","acceptedAnswer":{"@type":"Answer","text":"There is no hard limit, but a grid with more than five or six candidates becomes hard to read on a phone, because every candidate adds a row and every rank adds a column. Past that, split the vote or use a form builder with a ranking field."}},{"@type":"Question","name":"Is the Google Forms Rating question a ranking question?","acceptedAnswer":{"@type":"Answer","text":"No. Rating asks for a score, such as three stars out of five, and two candidates can get the same score. Ranking puts candidates in an order where each position is used once. For ranked choice voting you need an order, so use the grid method."}},{"@type":"Question","name":"Is there a ranked choice voting calculator for Google Forms?","acceptedAnswer":{"@type":"Answer","text":"Yes. RankedVote offers a Chrome extension that counts ranked choice rounds on a Google Sheet, and RCV123 has a free web calculator that takes an upload of the Google Forms response sheet. Both expect the grid layout described in this guide."}}]},{"@type":"SoftwareApplication","@id":"https://formester.com/#software","url":"https://formester.com/","name":"Formester","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free forever plan, no credit card required"}}]}]
createdAt: "2025-01-08T00:32:22.566Z"
updatedAt: "2026-09-03T00:00:00.000Z"
publishedAt: "2026-05-17T03:51:03.593Z"
---

![Cover art for a guide to ranked choice voting in Google Forms](https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_how_to_make_a_ranked_choice_voting_form_66ff110bbb.png)

<p style="font-size: inherit;">Google Forms has no ranking question. A Google Forms ranked choice vote uses a multiple choice grid instead, with the candidates as rows and the ranks as columns, and two settings that keep each ballot valid. The counting happens in Google Sheets. The worked example below walks a four-candidate vote through every round.</p>

<div class="tldr">
<p><strong>Quick answer</strong></p>
<ul>
<li><strong>You want a ranking question:</strong> Google Forms does not have one. Use a multiple choice grid with candidates as rows and ranks as columns. Turn on <strong>Limit to one response per column</strong> and <strong>Require a response in each row</strong>.</li>
<li><strong>You want to run a ranked choice vote:</strong> collect the grid responses and link them to Google Sheets. Count the rounds there. The worked example below shows every round.</li>
<li><strong>You have more than about fifty ballots:</strong> counting by hand gets slow and error-prone. Use a counting tool such as RankedVote, or a form builder with a real ranking field.</li>
</ul>
</div>

<h2 id="ranking-question">Does Google Forms have a ranking question?</h2>

<p>No. <a href="https://support.google.com/docs/answer/7322334" target="_blank" rel="noopener">Google's list of question types</a> has no ranking type. The Rating question, which is newer, asks for a score with stars or hearts. Two candidates can get the same score, so it cannot produce an order.</p>
<p>The workaround is the multiple choice grid. Each row is a candidate and each column is a rank, so a voter marks one cell per row. The grid has a rule that limits each column to one response. With it on, every rank gets used once and the result is a ranking. It is less pleasant to fill in than a drag-and-drop field, but it collects the same information.</p>

<h2 id="how-it-works">How does ranked choice voting work?</h2>

<p>Ranked choice voting lets people rank the candidates instead of picking one. The count runs in rounds until one candidate has more than half of the votes still in play.</p>
<ol>
<li>Count everyone's first choice. If a candidate has more than half, they win and the count stops.</li>
<li>If nobody has more than half, remove the candidate with the fewest first-choice votes.</li>
<li>Give each of that candidate's ballots to the voter's next choice who is still in the race.</li>
<li>Count again, and repeat until someone passes half.</li>
</ol>
<p>A candidate can lead the first round and still lose once other candidates' votes move. That is the point of the system. The winner is the candidate most voters can accept, not the one with the biggest first-round group.</p>

<h2 id="ballot">How do you make a Google Forms ranked choice ballot?</h2>

<p>Set the candidate list before you share the form. Adding a candidate after some people have voted makes their ballots incomplete, and you cannot fix that afterwards.</p>
<ol class="steps">
<li>
<h3>Create the form and explain the rules</h3>
<p>Open a new form at forms.google.com and give it a title. In the description, tell voters to rank every candidate once and not to skip any rank.</p>
</li>
<li>
<h3>Add a multiple choice grid</h3>
<p>Click <strong>Add question</strong> and change the type to <strong>Multiple choice grid</strong>. Type one candidate per row. Type one rank per column, starting with 1st choice, with as many columns as there are candidates.</p>
</li>
<li>
<h3>Turn on the two grid rules</h3>
<p>Switch on <strong>Required</strong>, which on a grid becomes <strong>Require a response in each row</strong>, so every candidate gets a rank. Then open the three-dot menu at the bottom right of the question and turn on <strong>Limit to one response per column</strong>. Without it, a voter can mark two candidates as their first choice and the ballot cannot be counted.</p>
<!-- IMAGE: editor view of the grid question, rows Alex/Bo/Casey/Devi, columns 1st-4th choice, three-dot menu open showing Limit to one response per column checked | ALT: A multiple choice grid in the Google Forms editor with four candidates as rows, four rank columns, and Limit to one response per column turned on -->
</li>
<li>
<h3>Decide whether voters sign in</h3>
<p>Open <strong>Settings</strong> and expand <strong>Responses</strong>. Turn on <strong>Limit to 1 response</strong> for a team vote where one ballot per person matters. It requires a Google sign-in. Leave it off for an anonymous vote, and accept that the same person could submit twice.</p>
</li>
<li>
<h3>Publish and share the responder link</h3>
<p>Click <strong>Publish</strong>, then copy the responder link and send it out. A <a href="/features/qr-code-generator/">QR code</a> works well for an in-person vote.</p>
</li>
</ol>
<p>If the grid looks cramped, you can ask one multiple choice question per rank instead, with the candidates as the options. It is easier to read on a phone. Nothing stops a voter picking the same candidate for first and second choice in that layout, so you check for duplicates in the spreadsheet before you count.</p>

<h2 id="responses">What do the ballots look like to voters and in the spreadsheet?</h2>

<p>Voters see a table with one row per candidate and one radio button per rank. Once they pick 1st choice for one candidate, that column is unavailable for the others, which is what stops duplicate ranks.</p>
<!-- IMAGE: the published form as a respondent sees it, grid with four rows, each row marked with a different rank | ALT: The ranked choice ballot as a voter sees it in Google Forms, with one row per candidate and a rank chosen in each row -->
<p>In the linked spreadsheet, Google turns each grid row into its own column. The header reads like the question followed by the candidate's name in square brackets, and each cell holds the rank the voter gave that candidate, such as 2nd choice. One spreadsheet row is one ballot.</p>
<!-- IMAGE: Form Responses 1 tab, timestamp column plus four candidate columns with values like 1st choice / 3rd choice, six or more ballot rows | ALT: The linked Google Sheet with one column per candidate and rank labels in each cell, one row per ballot -->

<h2 id="count">How do you count ranked choice votes in Google Sheets?</h2>

<p>The example below has 18 ballots and four candidates named Alex, Bo, Casey and Devi. If the responses are not in a sheet yet, <a href="/blog/how-to-link-google-sheets-to-google-forms/">link the form to Google Sheets</a> first. Then make a copy of the response sheet, so the original stays untouched.</p>
<ol class="steps">
<li>
<h3>Work out the threshold</h3>
<p>The threshold is more than half of the ballots. With 18 ballots, a candidate needs 10.</p>
</li>
<li>
<h3>Count the first choices</h3>
<p>On a new tab, count how many ballots gave each candidate 1st choice. With Alex's column in B on the response tab, the formula is <code>=COUNTIF('Form Responses 1'!B:B, "1st choice")</code>. Repeat the formula for each candidate's column.</p>
<div class="table-wrap">
<table>
<thead><tr><th>Candidate</th><th>Round 1</th></tr></thead>
<tbody>
<tr><td>Alex</td><td>7</td></tr>
<tr><td>Bo</td><td>5</td></tr>
<tr><td>Casey</td><td>4</td></tr>
<tr><td>Devi</td><td>2</td></tr>
</tbody>
</table>
</div>
<p>Nobody has 10, so Devi, with the fewest, is out.</p>
</li>
<li>
<h3>Move the eliminated candidate's ballots</h3>
<p>Find the two ballots that ranked Devi first and look at their 2nd choice. Say one went to Bo and one to Casey. Add them to those candidates.</p>
<div class="table-wrap">
<table>
<thead><tr><th>Candidate</th><th>Round 2</th></tr></thead>
<tbody>
<tr><td>Alex</td><td>7</td></tr>
<tr><td>Bo</td><td>6</td></tr>
<tr><td>Casey</td><td>5</td></tr>
<tr><td>Devi</td><td>out</td></tr>
</tbody>
</table>
</div>
<p>Still nobody reaches 10 votes. Casey is now the lowest and is out.</p>
</li>
<li>
<h3>Repeat until someone passes the threshold</h3>
<p>Take Casey's five ballots and move each one to its highest-ranked candidate still in the race. A ballot that ranked Devi second skips Devi, because Devi is already out. Say three go to Alex and two to Bo.</p>
<div class="table-wrap">
<table>
<thead><tr><th>Candidate</th><th>Round 3</th></tr></thead>
<tbody>
<tr><td>Alex</td><td>10</td></tr>
<tr><td>Bo</td><td>8</td></tr>
<tr><td>Casey</td><td>out</td></tr>
<tr><td>Devi</td><td>out</td></tr>
</tbody>
</table>
</div>
<p>Alex reaches 10 and wins.</p>
</li>
</ol>

<h3>Ties and exhausted ballots</h3>

<p>Two candidates can tie for last place in a round. Decide the tie rule before the vote opens and write it in the form description. Common rules are to eliminate the one with fewer votes in the previous round, or to draw lots.</p>
<p>A ballot that only ranked candidates who are now out has nowhere to go. It is called an exhausted ballot and it drops out of later rounds. Requiring a response in each row avoids this, because every ballot then ranks every candidate.</p>

<h2 id="tools">Which tools count ranked choice votes for you?</h2>

<p>Counting by hand is fine for a team vote with a few dozen ballots. Past that, each round is another chance to miscount, and a recount means starting over.</p>
<ul>
<li><a href="https://www.rankedvote.co/guides/applying-ranked-choice-voting/how-to-calculate-ranked-choice-voting-with-google-forms-and-google-sheets" target="_blank" rel="noopener"><strong>RankedVote for Google Sheets</strong></a> is a Chrome extension that runs the rounds on a linked response sheet and shows the result per round.</li>
<li><a href="https://www.rcv123.org/google-forms-ranked-choice-spreadsheet-calculator" target="_blank" rel="noopener"><strong>RCV123</strong></a> has a free web calculator for Google Forms grid responses. You download the response sheet as an .xlsx file and upload it, or paste a public link to the sheet, and it runs the eliminations for you.</li>
</ul>
<p>Both expect the grid layout from this guide, with one column per candidate and the rank as the cell value.</p>

<h2 id="mistakes">Which mistakes break a ranked choice count?</h2>

<ul>
<li><strong>Leaving Limit to one response per column off.</strong> Ballots with two first choices cannot be counted. Turn it on before anyone votes.</li>
<li><strong>Adding a candidate after voting starts.</strong> Earlier ballots never saw that candidate. Lock the candidate list before you send the ballot.</li>
<li><strong>Not stating the threshold.</strong> Without the more-than-half rule, people expect the round-one leader to win. Put the rule in the form description.</li>
<li><strong>Deciding the tie rule after a tie happens.</strong> Whatever you pick then looks like favoritism. Decide it before the vote.</li>
</ul>

<h2 id="formester">Ranked choice voting with a real ranking field</h2>

<p>Formester has a Ranking question, so voters put the candidates in order and each position is used exactly once. There is no column rule to remember and no duplicate ranks to clean up. The <a href="/poll-maker/">poll maker</a> can also make the vote anonymous and cap the number of responses. It can close the poll on a date, and voters never need to sign in.</p>
<p>The count is still yours to do. Formester's summary analytics break a ranking question down like a poll result, so you can see which candidates are most popular. The round-by-round elimination still happens in a spreadsheet, the same as with Google Forms.</p>

<div style="background:linear-gradient(135deg,#7f56d9 0%,#6941c6 100%);padding:32px 28px;margin:36px 0;border-radius:12px;color:#ffffff;font-family:inherit;text-align:center;">
<p style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#ffffff;font-family:inherit;">Run the vote with a ranking question</p>
<p style="margin:0 0 20px 0;font-size:14px;line-height:1.55;color:#f4ebff;font-family:inherit;">Voters put the candidates in order, each position used once. Keep it anonymous and cap the responses. Close it on a date. Voters never need to sign in. Free plan with unlimited forms and responses.</p>
<a href="https://app.formester.com/users/sign_up" style="display:inline-block;padding:12px 24px;background:#ffffff;color:#6941c6;text-decoration:none;font-weight:700;border-radius:9999px;font-family:inherit;">Try Formester free</a>
<p style="margin:12px 0 0 0;font-size:13px;color:#e9d7fe;font-family:inherit;">Free forever · No credit card · 56,000+ teams</p>
</div>

<h2>Related reading</h2>

<ul>
<li><a href="/blog/how-to-make-a-poll-on-google-forms/">Make a poll on Google Forms</a>, for a plain one-choice vote when ranking is more than you need.</li>
<li><a href="/blog/how-to-make-anonymous-google-form-or-survey/">Make a Google Form anonymous</a>, for the email and sign-in settings behind an anonymous ballot.</li>
<li><a href="/blog/how-to-link-google-sheets-to-google-forms/">Link Google Sheets to Google Forms</a>, if the response sheet is not showing up.</li>
<li><a href="/blog/best-poll-maker/">Best poll makers</a>, for tools with a ranking question built in.</li>
</ul>

<section class="faq">
<h2>Ranked choice voting in Google Forms FAQ</h2>
<details><summary>Does Google Forms have a ranking question?</summary><div>No. Google Forms has no question type where people drag options into an order. The closest is a multiple choice grid with the candidates as rows and the ranks as columns, with Limit to one response per column turned on so each rank can only be used once.</div></details>
<details><summary>Can you do ranked choice voting in Google Forms?</summary><div>Yes. Collect the rankings with a multiple choice grid and link the responses to Google Sheets. Count the rounds there. Google Forms does not count ranked choice rounds for you, so the counting is a spreadsheet job or a job for a tool such as the RankedVote extension.</div></details>
<details><summary>How do I stop voters giving two candidates the same rank?</summary><div>On the multiple choice grid, open the three-dot menu and turn on Limit to one response per column. Each rank column then accepts one pick. Turn on Require a response in each row as well, so every candidate gets a rank.</div></details>
<details><summary>How do I count ranked choice votes in Google Sheets?</summary><div>Work out the threshold, which is more than half of the ballots. Count each candidate's first-choice votes with COUNTIF. If nobody reaches the threshold, remove the candidate with the fewest votes and move each of their ballots to the highest-ranked candidate still in the race. Repeat until someone passes the threshold.</div></details>
<details><summary>What happens if a voter skips a rank?</summary><div>If the candidates they did rank are all eliminated, their ballot has nowhere to go and drops out of later rounds. This is called an exhausted ballot. Turn on Require a response in each row so every ballot ranks every candidate, or decide before the vote how you will handle exhausted ballots.</div></details>
<details><summary>Can a ranked choice vote in Google Forms be anonymous?</summary><div>Yes. Keep email collection off and leave Limit to 1 response off, because that setting makes voters sign in to Google. Without a sign-in, the same person can submit the ballot more than once, so decide which matters more before you share it.</div></details>
<details><summary>How many candidates can a Google Forms ranked ballot have?</summary><div>There is no hard limit, but a grid with more than five or six candidates becomes hard to read on a phone, because every candidate adds a row and every rank adds a column. Past that, split the vote or use a form builder with a ranking field.</div></details>
<details><summary>Is the Google Forms Rating question a ranking question?</summary><div>No. Rating asks for a score, such as three stars out of five, and two candidates can get the same score. Ranking puts candidates in an order where each position is used once. For ranked choice voting you need an order, so use the grid method.</div></details>
<details><summary>Is there a ranked choice voting calculator for Google Forms?</summary><div>Yes. RankedVote offers a Chrome extension that counts ranked choice rounds on a Google Sheet, and RCV123 has a free web calculator that takes an upload of the Google Forms response sheet. Both expect the grid layout described in this guide.</div></details>
</section>
