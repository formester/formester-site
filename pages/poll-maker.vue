<template>
  <div>
    <AiHero
      :description="c0_description"
      type="Form"
      :hideIcons="false"
      buttonText="Build a poll now. No sign-up to start."
      placeholder="Describe the form you need…"
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <TrustSeals
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <Trustbadges
      :title="c2_title"
      :badges="c2_badges"
      class="page-component-item"
    />

    <ThreeColBenefits
      :description="c3_description"
      :title="c3_title"
      :itemList="c3_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-why-teams-pick" aria-labelledby="fmstr-cmp-why-teams-pick-title">
  <div class="fmstr-cmp-why-teams-pick__container">
    <div class="fmstr-cmp-why-teams-pick__header">
      <h2 id="fmstr-cmp-why-teams-pick-title" class="fmstr-cmp-why-teams-pick__title">Why teams pick this poll maker over Google Forms.</h2>
      <p class="fmstr-cmp-why-teams-pick__intro">A poll has to do three things: get answers fast, get them from the right people, and get them where you can act on them. Here's what that looks like, in order.</p>
    </div>

    <div class="fmstr-cmp-why-teams-pick__grid">
      <article class="fmstr-cmp-why-teams-pick__card">
        <div class="fmstr-cmp-why-teams-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"></path><circle cx="12" cy="12" r="4"></circle></svg>
        </div>
        <h3 class="fmstr-cmp-why-teams-pick__card-title">Live tally that updates as votes come in.</h3>
        <p class="fmstr-cmp-why-teams-pick__card-body">Watch the result chart shift in the dashboard as people respond. No refresh, no waiting. The same view works on a meeting screen during a live event, on the host's phone after the event, and inside an embedded report you ship to a stakeholder.</p>
      </article>

      <article class="fmstr-cmp-why-teams-pick__card">
        <div class="fmstr-cmp-why-teams-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
        </div>
        <h3 class="fmstr-cmp-why-teams-pick__card-title">Six ways to share, including the one your audience uses.</h3>
        <p class="fmstr-cmp-why-teams-pick__card-body">Public link, QR code, six embed modes (inline, popup, sidebar, side tab, popover, fullscreen), and native shares to Website, Email, Shopify, WordPress, Webflow, Canva, and Wix. Pick the one that matches how your audience already opens links.</p>
      </article>

      <article class="fmstr-cmp-why-teams-pick__card">
        <div class="fmstr-cmp-why-teams-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <h3 class="fmstr-cmp-why-teams-pick__card-title">Cap responses, lock by IP, or close on a deadline.</h3>
        <p class="fmstr-cmp-why-teams-pick__card-body">A free poll with no controls is a free poll that gets brigaded. Set a hard response cap, restrict by IP or email so the same person can't vote twice, schedule open and close times, or password-protect the link. The free plan includes all four.</p>
      </article>
    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <FeatureShowcase
      :description="c5_description"
      steps
      :title="c5_title"
      :itemList="c5_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-personas" aria-labelledby="fmstr-cmp-personas-title">
  <div class="fmstr-cmp-personas__container">
    <div class="fmstr-cmp-personas__header">
      <h2 id="fmstr-cmp-personas-title" class="fmstr-cmp-personas__title">Built for the polls you actually run.</h2>
      <p class="fmstr-cmp-personas__intro">A free poll maker is only useful if it fits the way your team already works. Six common patterns we see, and the people who run them.</p>
    </div>

    <div class="fmstr-cmp-personas__grid">
      <article class="fmstr-cmp-personas__card">
        <div class="fmstr-cmp-personas__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
        </div>
        <h3 class="fmstr-cmp-personas__card-title">Marketers running quick-feedback polls.</h3>
        <p class="fmstr-cmp-personas__card-body">Test a tagline, a feature name, or which of three landing-page hooks to ship. One question, three options, link in a tweet or LinkedIn post, results in an hour.</p>
      </article>

      <article class="fmstr-cmp-personas__card">
        <div class="fmstr-cmp-personas__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
        </div>
        <h3 class="fmstr-cmp-personas__card-title">Event hosts running live audience polls.</h3>
        <p class="fmstr-cmp-personas__card-body">Project a QR code on the screen, let attendees vote from their phone, show the live tally as the slide updates. Works for keynote Q&amp;A, breakout votes, and end-of-session feedback.</p>
      </article>

      <article class="fmstr-cmp-personas__card">
        <div class="fmstr-cmp-personas__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>
        <h3 class="fmstr-cmp-personas__card-title">Customer-success teams running NPS and CSAT polls.</h3>
        <p class="fmstr-cmp-personas__card-body">Send a one-tap link after a support ticket closes, after onboarding, or after a renewal call. Score lands in the dashboard, optional follow-up question fires only if the score drops below 7.</p>
      </article>

      <article class="fmstr-cmp-personas__card">
        <div class="fmstr-cmp-personas__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </div>
        <h3 class="fmstr-cmp-personas__card-title">Product managers running feature-vote polls.</h3>
        <p class="fmstr-cmp-personas__card-body">Drop a poll into a release-notes email or community forum. Five candidate features, voters rank them, results push straight to the planning doc via Webhooks.</p>
      </article>

      <article class="fmstr-cmp-personas__card">
        <div class="fmstr-cmp-personas__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <h3 class="fmstr-cmp-personas__card-title">Internal-comms teams running pulse polls.</h3>
        <p class="fmstr-cmp-personas__card-body">Two questions, anonymous, sent every Friday. Embed it in the company intranet, restrict by email domain, watch trends across weeks in the analytics tab.</p>
      </article>

      <article class="fmstr-cmp-personas__card">
        <div class="fmstr-cmp-personas__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </div>
        <h3 class="fmstr-cmp-personas__card-title">Educators running classroom polls.</h3>
        <p class="fmstr-cmp-personas__card-body">One question per slide, multiple choice or rating. Students scan a QR code on the projector, vote from any device, the teacher sees the answer distribution in real time.</p>
      </article>
    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-privacy" aria-labelledby="fmstr-cmp-privacy-heading">
  <div class="fmstr-cmp-privacy__container">
    <div class="fmstr-cmp-privacy__inner">

      <div class="fmstr-cmp-privacy__text">
        <span class="fmstr-cmp-privacy__eyebrow">Your poll data, your data</span>
        <h2 id="fmstr-cmp-privacy-heading" class="fmstr-cmp-privacy__heading">Run a poll that stays a poll.</h2>
        <div class="fmstr-cmp-privacy__body">
          <p>When you collect votes, the votes belong to you. We do not use Customer Data to train AI models, target advertising, run analytics, or improve our product. That commitment lives in our Data Processing Agreement, Section 4.4, and it covers the AI question generator the same way it covers form submissions.</p>
          <p>Polls are encrypted in transit with TLS, payment data (if you charge to enter a poll) is encrypted with AES-256 at the Stripe layer, and the database runs on Heroku with primary-and-standby failover and 90-day encrypted backups. The infrastructure is GDPR, UK GDPR, and CCPA compliant.</p>
        </div>
      </div>

      <aside class="fmstr-cmp-privacy__card">
        <span class="fmstr-cmp-privacy__pill">Plain-English version</span>
        <blockquote class="fmstr-cmp-privacy__quote">"Customer Data will not be used by Formester for analytics, advertising, marketing, or training of AI/ML models. Sub-processors operate under the same boundary."</blockquote>
        <hr class="fmstr-cmp-privacy__divider">
        <p class="fmstr-cmp-privacy__cite">Formester Data Processing Agreement, Section 4.4.</p>
        <div class="fmstr-cmp-privacy__links">
          <a href="https://formester.com/dpa/">Read the DPA →</a>
          <a href="https://formester.com/security/">Security overview →</a>
        </div>
      </aside>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-comparison-table" aria-labelledby="fmstr-cmp-comparison-table-title">
  <div class="fmstr-cmp-comparison-table__container">
    <div class="fmstr-cmp-comparison-table__header">
      <h2 id="fmstr-cmp-comparison-table-title" class="fmstr-cmp-comparison-table__title">Free poll maker vs. a paid survey tool.</h2>
      <p class="fmstr-cmp-comparison-table__intro">Most "free poll" pages on the SERP are either zero-feature widgets or full survey tools with a paid wall around them. Here's the honest comparison.</p>
    </div>

    <div class="fmstr-cmp-comparison-table__scroll">
      <table class="fmstr-cmp-comparison-table__table">
        <thead>
          <tr>
            <th class="fmstr-cmp-comparison-table__row-label" scope="col">What you need</th>
            <th class="fmstr-cmp-comparison-table__th--us" scope="col">Free poll maker (Formester)</th>
            <th scope="col">Widget-only tool</th>
            <th scope="col">Paid survey tool, free tier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">Build a poll without sign-up to preview</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Yes, on this page
            </td>
            <td>Yes</td>
            <td>Usually no, sign-up first</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">Free monthly responses</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Unlimited, all plans
            </td>
            <td>100 to 200 typical</td>
            <td>10 to 50 typical</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">AI question generator on free</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Yes
            </td>
            <td>
              <span class="fmstr-cmp-comparison-table__cross" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>No
            </td>
            <td>Rarely</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">Embed the poll in your site</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>6 modes (inline, popup, sidebar, side tab, popover, fullscreen)
            </td>
            <td>1 mode</td>
            <td>1 to 2 modes</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">QR code per poll (JPEG / SVG / PNG)</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Yes
            </td>
            <td>Sometimes</td>
            <td>Rarely on free</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">Cap responses, restrict by IP, password-protect</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>All three on free
            </td>
            <td>
              <span class="fmstr-cmp-comparison-table__cross" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>No
            </td>
            <td>Usually paid</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">Live results visible during voting</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Yes
            </td>
            <td>Yes</td>
            <td>Usually no on free</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">Native HubSpot / Sheets / Slack / Stripe / Webhooks</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Yes, on free
            </td>
            <td>
              <span class="fmstr-cmp-comparison-table__cross" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>No
            </td>
            <td>Paid only</td>
          </tr>
          <tr>
            <td class="fmstr-cmp-comparison-table__row-label">AI agent / MCP server access</td>
            <td class="fmstr-cmp-comparison-table__td--us">
              <span class="fmstr-cmp-comparison-table__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>Yes, Business plan and above
            </td>
            <td>
              <span class="fmstr-cmp-comparison-table__cross" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>No
            </td>
            <td>
              <span class="fmstr-cmp-comparison-table__cross" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>No
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <FeatureShowcase
      :steps="false"
      :title="c9_title"
      :itemList="c9_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-real-polls" aria-labelledby="fmstr-cmp-real-polls-title">
  <div class="fmstr-cmp-real-polls__container">
    <div class="fmstr-cmp-real-polls__header">
      <h2 id="fmstr-cmp-real-polls-title" class="fmstr-cmp-real-polls__title">See it work on three real polls.</h2>
      <p class="fmstr-cmp-real-polls__intro">Three teams that ran a poll on Formester last quarter, and what they got back.</p>
    </div>

    <div class="fmstr-cmp-real-polls__grid">

      <div class="fmstr-cmp-real-polls__col">
        <article class="fmstr-cmp-real-polls__card">
          <div class="fmstr-cmp-real-polls__head">
            <span class="fmstr-cmp-real-polls__cat">Customer success</span>
            <h3 class="fmstr-cmp-real-polls__card-title">Post-renewal CSAT</h3>
            <p class="fmstr-cmp-real-polls__meta"><b>Source:</b> Customer-success team, B2B SaaS</p>
            <p class="fmstr-cmp-real-polls__meta"><b>Output:</b> 1 question, optional comment, anonymous</p>
            <div class="fmstr-cmp-real-polls__pills">
              <span class="fmstr-cmp-real-polls__pill">5 questions</span>
              <span class="fmstr-cmp-real-polls__pill">45 sec to complete</span>
            </div>
          </div>
          <div class="fmstr-cmp-real-polls__body">
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q1</div>
              <div class="fmstr-cmp-real-polls__qt">How would you rate the renewal call? (1 to 5 scale)</div>
            </div>
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q2</div>
              <div class="fmstr-cmp-real-polls__qt">Anything we should have done differently? (open text, optional)</div>
            </div>
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q3</div>
              <div class="fmstr-cmp-real-polls__qt">Would you recommend us to a peer? (yes / no / not sure)</div>
            </div>
          </div>
          <div class="fmstr-cmp-real-polls__foot">2 more conditional questions</div>
        </article>
        <a class="fmstr-cmp-real-polls__cta" href="https://formester.com/templates/customer-satisfaction-survey-696/">Use this template →</a>
      </div>

      <div class="fmstr-cmp-real-polls__col">
        <article class="fmstr-cmp-real-polls__card">
          <div class="fmstr-cmp-real-polls__head">
            <span class="fmstr-cmp-real-polls__cat">Live event</span>
            <h3 class="fmstr-cmp-real-polls__card-title">Live-audience pulse</h3>
            <p class="fmstr-cmp-real-polls__meta"><b>Source:</b> Marketing team, virtual conference host</p>
            <p class="fmstr-cmp-real-polls__meta"><b>Output:</b> QR projected on stage, live tally shown to room</p>
            <div class="fmstr-cmp-real-polls__pills">
              <span class="fmstr-cmp-real-polls__pill">3 questions</span>
              <span class="fmstr-cmp-real-polls__pill">30 sec to complete</span>
            </div>
          </div>
          <div class="fmstr-cmp-real-polls__body">
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q1</div>
              <div class="fmstr-cmp-real-polls__qt">Which of these features matters most to you? (3 options, multiple choice)</div>
            </div>
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q2</div>
              <div class="fmstr-cmp-real-polls__qt">How likely are you to use what we showed today? (1 to 10 scale)</div>
            </div>
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q3</div>
              <div class="fmstr-cmp-real-polls__qt">Want a recording? (yes / no, captures email)</div>
            </div>
          </div>
          <div class="fmstr-cmp-real-polls__foot">Real-time chart on screen</div>
        </article>
        <a class="fmstr-cmp-real-polls__cta" href="https://formester.com/templates/event-feedback-survey-698/">Use this template →</a>
      </div>

      <div class="fmstr-cmp-real-polls__col">
        <article class="fmstr-cmp-real-polls__card">
          <div class="fmstr-cmp-real-polls__head">
            <span class="fmstr-cmp-real-polls__cat">Internal comms</span>
            <h3 class="fmstr-cmp-real-polls__card-title">Friday pulse</h3>
            <p class="fmstr-cmp-real-polls__meta"><b>Source:</b> Internal-comms team, 80-person engineering org</p>
            <p class="fmstr-cmp-real-polls__meta"><b>Output:</b> Embedded in intranet, restricted by company email</p>
            <div class="fmstr-cmp-real-polls__pills">
              <span class="fmstr-cmp-real-polls__pill">2 questions</span>
              <span class="fmstr-cmp-real-polls__pill">20 sec to complete</span>
            </div>
          </div>
          <div class="fmstr-cmp-real-polls__body">
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q1</div>
              <div class="fmstr-cmp-real-polls__qt">How was your week? (good / neutral / rough, anonymous)</div>
            </div>
            <div class="fmstr-cmp-real-polls__qa">
              <div class="fmstr-cmp-real-polls__qn">Q2</div>
              <div class="fmstr-cmp-real-polls__qt">Anything blocking you? (open text, optional)</div>
            </div>
          </div>
          <div class="fmstr-cmp-real-polls__foot">Trend chart over 12 weeks</div>
        </article>
        <a class="fmstr-cmp-real-polls__cta" href="https://formester.com/templates/employee-engagement-survey-template-17645/">Use this template →</a>
      </div>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-poll-attributes" aria-labelledby="fmstr-cmp-poll-attributes-title">
  <div class="fmstr-cmp-poll-attributes__container">
    <div class="fmstr-cmp-poll-attributes__header">
      <h2 id="fmstr-cmp-poll-attributes-title" class="fmstr-cmp-poll-attributes__title">What this poll maker accepts, what it produces, and where it ships.</h2>
      <p class="fmstr-cmp-poll-attributes__intro">Scannable reference. Use it before you commit a free tier you'll outgrow.</p>
    </div>

    <dl class="fmstr-cmp-poll-attributes__list">

      <div class="fmstr-cmp-poll-attributes__row">
        <dt class="fmstr-cmp-poll-attributes__label">
          <span class="fmstr-cmp-poll-attributes__tile" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5M21 8v13H3V3h11l7 5z"></path></svg>
          </span>
          <span class="fmstr-cmp-poll-attributes__label-text">
            <strong>Inputs</strong>
            <span>What you can put in</span>
          </span>
        </dt>
        <dd class="fmstr-cmp-poll-attributes__value">
          <p>A text prompt to the AI, a paste-list of questions you wrote, a PDF (up to 100 MB on free), or a starting template from the library.</p>
          <div class="fmstr-cmp-poll-attributes__chips">
            <span class="fmstr-cmp-poll-attributes__chip">Prompt</span>
            <span class="fmstr-cmp-poll-attributes__chip">Paste list</span>
            <span class="fmstr-cmp-poll-attributes__chip">PDF</span>
            <span class="fmstr-cmp-poll-attributes__chip">Template</span>
          </div>
        </dd>
      </div>

      <div class="fmstr-cmp-poll-attributes__row">
        <dt class="fmstr-cmp-poll-attributes__label">
          <span class="fmstr-cmp-poll-attributes__tile" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
          </span>
          <span class="fmstr-cmp-poll-attributes__label-text">
            <strong>Question types</strong>
            <span>What the poll can ask</span>
          </span>
        </dt>
        <dd class="fmstr-cmp-poll-attributes__value">
          <p>Single choice, multiple choice, dropdown, true/false (delivered as single choice), rating (1 to 5 / 1 to 10), ranking, open text. Picture choice and matrix choice exist as manual fields (the AI does not auto-generate them).</p>
          <div class="fmstr-cmp-poll-attributes__chips">
            <span class="fmstr-cmp-poll-attributes__chip">Single</span>
            <span class="fmstr-cmp-poll-attributes__chip">Multi</span>
            <span class="fmstr-cmp-poll-attributes__chip">Dropdown</span>
            <span class="fmstr-cmp-poll-attributes__chip">Rating</span>
            <span class="fmstr-cmp-poll-attributes__chip">Ranking</span>
            <span class="fmstr-cmp-poll-attributes__chip">Open text</span>
          </div>
        </dd>
      </div>

      <div class="fmstr-cmp-poll-attributes__row">
        <dt class="fmstr-cmp-poll-attributes__label">
          <span class="fmstr-cmp-poll-attributes__tile" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          </span>
          <span class="fmstr-cmp-poll-attributes__label-text">
            <strong>Sharing</strong>
            <span>How you share it</span>
          </span>
        </dt>
        <dd class="fmstr-cmp-poll-attributes__value">
          <p>Public link, QR code (JPEG / SVG / PNG), six embed modes (inline, popup, sidebar, side tab, popover, fullscreen), and native shares to Website, Email, Shopify, WordPress, Webflow, Canva, and Wix.</p>
          <div class="fmstr-cmp-poll-attributes__chips">
            <span class="fmstr-cmp-poll-attributes__chip">Link</span>
            <span class="fmstr-cmp-poll-attributes__chip">QR</span>
            <span class="fmstr-cmp-poll-attributes__chip">Embed x 6</span>
            <span class="fmstr-cmp-poll-attributes__chip">Native x 7</span>
          </div>
        </dd>
      </div>

      <div class="fmstr-cmp-poll-attributes__row">
        <dt class="fmstr-cmp-poll-attributes__label">
          <span class="fmstr-cmp-poll-attributes__tile" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </span>
          <span class="fmstr-cmp-poll-attributes__label-text">
            <strong>Integrations</strong>
            <span>What you can connect</span>
          </span>
        </dt>
        <dd class="fmstr-cmp-poll-attributes__value">
          <p>Native HubSpot, Salesforce, Google Sheets, Slack, Stripe, PayPal, Calendly, n8n, Pabbly, OttoKit, Webhooks (3 events), GA4, GTM. Plus Zapier for 1,000+ additional apps.</p>
          <div class="fmstr-cmp-poll-attributes__chips">
            <span class="fmstr-cmp-poll-attributes__chip">HubSpot</span>
            <span class="fmstr-cmp-poll-attributes__chip">Sheets</span>
            <span class="fmstr-cmp-poll-attributes__chip">Slack</span>
            <span class="fmstr-cmp-poll-attributes__chip">Stripe</span>
            <span class="fmstr-cmp-poll-attributes__chip">Webhooks</span>
            <span class="fmstr-cmp-poll-attributes__chip">Zapier</span>
          </div>
        </dd>
      </div>

    </dl>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-agents-api" aria-labelledby="fmstr-cmp-agents-api-title">
  <div class="fmstr-cmp-agents-api__container">
    <div class="fmstr-cmp-agents-api__header">
      <span class="fmstr-cmp-agents-api__eyebrow">Agents + API</span>
      <h2 id="fmstr-cmp-agents-api-title" class="fmstr-cmp-agents-api__title">Your poll data, ready for the AI you already use.</h2>
      <p class="fmstr-cmp-agents-api__intro">Most poll tools end at the dashboard. Formester ships an MCP server and a public REST API so the agent you already trust can read poll responses, file new tickets, or push results into the rest of your stack.</p>
    </div>

    <div class="fmstr-cmp-agents-api__grid">

      <article class="fmstr-cmp-agents-api__card">
        <span class="fmstr-cmp-agents-api__badge">MCP server</span>
        <h3 class="fmstr-cmp-agents-api__card-title">Connect Claude or ChatGPT to your poll data.</h3>
        <div class="fmstr-cmp-agents-api__chips">
          <span class="fmstr-cmp-agents-api__chip">Claude</span>
          <span class="fmstr-cmp-agents-api__chip">ChatGPT</span>
          <span class="fmstr-cmp-agents-api__chip">Custom agents</span>
        </div>
        <p class="fmstr-cmp-agents-api__body">Hand the agent a token with the right scopes. Ask it to summarize last week's pulse poll, flag the comments that mention "burnout", or compare CSAT scores across two segments. The agent reads through the same scopes the API uses, so what the agent sees is what you've authorized.</p>
        <a class="fmstr-cmp-agents-api__cta" href="https://docs.formester.com/formester-mcp-server.html">Read the MCP docs →</a>
      </article>

      <article class="fmstr-cmp-agents-api__card">
        <span class="fmstr-cmp-agents-api__badge fmstr-cmp-agents-api__badge--alt">REST API v2</span>
        <h3 class="fmstr-cmp-agents-api__card-title">Push and pull poll responses programmatically.</h3>
        <div class="fmstr-cmp-agents-api__chips">
          <span class="fmstr-cmp-agents-api__chip">Self-service token</span>
          <span class="fmstr-cmp-agents-api__chip">Org-level scope</span>
          <span class="fmstr-cmp-agents-api__chip">Business plan and above</span>
        </div>
        <p class="fmstr-cmp-agents-api__body">Pull poll submissions, push pre-filled poll URLs, trigger webhooks on submission events. Token issuance is self-service inside app.formester.com/api. v1 (form-level) is deprecated; v2 (org-level) is the path forward.</p>
        <a class="fmstr-cmp-agents-api__cta" href="https://docs.formester.com/formester-api.html">Read the API docs →</a>
      </article>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-templates-grid" aria-labelledby="fmstr-cmp-templates-grid-title">
  <div class="fmstr-cmp-templates-grid__container">
    <div class="fmstr-cmp-templates-grid__header">
      <h2 id="fmstr-cmp-templates-grid-title" class="fmstr-cmp-templates-grid__title">100+ poll-ready templates. Pick one, ship in two minutes.</h2>
      <p class="fmstr-cmp-templates-grid__intro">Six of the most-used poll templates from the Formester library. CSAT, NPS, engagement, event feedback, brand awareness, all open in the editor with question logic already wired.</p>
    </div>

    <div class="fmstr-cmp-templates-grid__grid">

      <a href="https://formester.com/templates/customer-satisfaction-survey-696/" class="fmstr-cmp-templates-grid__card">
        <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </span>
        <div>
          <h3 class="fmstr-cmp-templates-grid__card-title">Customer Satisfaction (CSAT) Survey</h3>
          <div class="fmstr-cmp-templates-grid__card-sub">One-question CSAT with optional follow-up.</div>
        </div>
        <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>

      <a href="https://formester.com/templates/customer-feedback-survey-17647/" class="fmstr-cmp-templates-grid__card">
        <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </span>
        <div>
          <h3 class="fmstr-cmp-templates-grid__card-title">Customer Feedback Survey</h3>
          <div class="fmstr-cmp-templates-grid__card-sub">Five questions, post-purchase, conditional follow-up.</div>
        </div>
        <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>

      <a href="https://formester.com/templates/employee-engagement-survey-template-17645/" class="fmstr-cmp-templates-grid__card">
        <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </span>
        <div>
          <h3 class="fmstr-cmp-templates-grid__card-title">Employee Engagement Survey</h3>
          <div class="fmstr-cmp-templates-grid__card-sub">Anonymous, ten-question, weekly cadence.</div>
        </div>
        <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>

      <a href="https://formester.com/templates/event-feedback-survey-698/" class="fmstr-cmp-templates-grid__card">
        <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
        </span>
        <div>
          <h3 class="fmstr-cmp-templates-grid__card-title">Event Feedback Survey</h3>
          <div class="fmstr-cmp-templates-grid__card-sub">Three questions, QR-shareable on stage.</div>
        </div>
        <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>

      <a href="https://formester.com/templates/conference-feedback-survey-27598/" class="fmstr-cmp-templates-grid__card">
        <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v4H3zM3 11h12v4H3zM3 19h18v2H3z"></path></svg>
        </span>
        <div>
          <h3 class="fmstr-cmp-templates-grid__card-title">Conference Feedback Survey</h3>
          <div class="fmstr-cmp-templates-grid__card-sub">Multi-session ranking with open text.</div>
        </div>
        <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>

      <a href="https://formester.com/templates/brand-awareness-survey-template-1659/" class="fmstr-cmp-templates-grid__card">
        <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </span>
        <div>
          <h3 class="fmstr-cmp-templates-grid__card-title">Brand Awareness Survey</h3>
          <div class="fmstr-cmp-templates-grid__card-sub">Awareness, recall, recommendation.</div>
        </div>
        <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>

    </div>

    <div class="fmstr-cmp-templates-grid__footer">
      <a class="fmstr-cmp-templates-grid__footer-link" href="https://formester.com/templates/categories/survey-forms/">Browse 100+ poll templates →</a>
    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <TestimonialsV2
      description="See what our customers have to say about their experience with us!"
      version="home"
      :heading="c14_heading"
      :testimonials="c14_testimonials"
      class="page-component-item"
    />

    <CallToActionSection
      :ctaValue="c15_ctaValue"
      class="page-component-item"
    />

    <FaqSection
      :title="c16_title"
      :faqList="c16_faqList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-more-ai-tools" aria-labelledby="fmstr-cmp-more-ai-tools-title">
  <div class="fmstr-cmp-more-ai-tools__container">
    <div class="fmstr-cmp-more-ai-tools__header">
      <h2 id="fmstr-cmp-more-ai-tools-title" class="fmstr-cmp-more-ai-tools__title">More AI tools from Formester.</h2>
    </div>

    <div class="fmstr-cmp-more-ai-tools__grid">

      <a class="fmstr-cmp-more-ai-tools__tile" href="https://formester.com/ai-form-generator/">
        <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 9h6M9 13h6M9 17h3"></path></svg>
        </span>
        <h3 class="fmstr-cmp-more-ai-tools__tile-title">AI Form Generator</h3>
        <p class="fmstr-cmp-more-ai-tools__tile-body">Build any web form from a prompt, PDF, or template.</p>
        <span class="fmstr-cmp-more-ai-tools__cta">Open →</span>
      </a>

      <a class="fmstr-cmp-more-ai-tools__tile" href="https://formester.com/ai-survey-generator/">
        <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg>
        </span>
        <h3 class="fmstr-cmp-more-ai-tools__tile-title">AI Survey Generator</h3>
        <p class="fmstr-cmp-more-ai-tools__tile-body">Generate full-length surveys with conditional logic.</p>
        <span class="fmstr-cmp-more-ai-tools__cta">Open →</span>
      </a>

      <a class="fmstr-cmp-more-ai-tools__tile" href="https://formester.com/ai-quiz-maker/">
        <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
        </span>
        <h3 class="fmstr-cmp-more-ai-tools__tile-title">AI Quiz Maker</h3>
        <p class="fmstr-cmp-more-ai-tools__tile-body">Auto-score quizzes with pass/fail thresholds.</p>
        <span class="fmstr-cmp-more-ai-tools__cta">Open →</span>
      </a>

      <a class="fmstr-cmp-more-ai-tools__tile" href="https://formester.com/build-conditional-logic-forms-with-ai/">
        <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="12" cy="18" r="3"></circle><path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"></path></svg>
        </span>
        <h3 class="fmstr-cmp-more-ai-tools__tile-title">Conditional Logic AI</h3>
        <p class="fmstr-cmp-more-ai-tools__tile-body">Branching logic in plain English.</p>
        <span class="fmstr-cmp-more-ai-tools__cta">Open →</span>
      </a>

    </div>
  </div>
</section>
</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description = "Type your question, drop in your answers, and ship a poll in under a minute. Unlimited polls and unlimited responses on the free plan, with no caps to outgrow. Live results, QR sharing, six embed modes, all on the free tier."
const c0_title = [
  {
    "id": 4944,
    "text": "The Free Poll Maker that Creates ",
    "highlight": false,
    "color": "#000000",
    "bold": false
  },
  {
    "id": 4946,
    "text": "Engaging Polls",
    "highlight": true,
    "color": "#000000",
    "bold": false
  },
  {
    "id": 4947,
    "text": " in Seconds.",
    "highlight": false,
    "color": "#000000",
    "bold": false
  }
]
const c0_suggestions = [
  {
    "id": 44,
    "text": "Create a 1-question poll with 3 options to test a tagline for a tweet.",
    "label": "Tagline poll"
  },
  {
    "id": 43,
    "text": "Create a live audience poll for a keynote Q&A with a QR code and real-time results.",
    "label": "Live audience poll"
  },
  {
    "id": 45,
    "text": "Create a feature-vote poll with 5 candidate features and ranked-choice voting.",
    "label": "Feature vote"
  }
]
const c0_footerItems = [
  {
    "id": 2669,
    "text": "✓ Unlimited responses, free"
  },
  {
    "id": 2670,
    "text": "✓ Live results in real time"
  },
  {
    "id": 2671,
    "text": "✓ Six embed modes + QR"
  },
  {
    "id": 2672,
    "text": "✓ 56,000+ teams use Formester"
  }
]
const c1_title = []
const c1_logos = [
  {
    "id": 4097,
    "imageAlt": "Tedx Paris Organizer",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_3c0e17bf72.png",
    "width": null,
    "height": null,
    "image": null
  },
  {
    "id": 4098,
    "imageAlt": "Vue Jobs",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vue_jobs_9705e4cfbe.svg",
    "width": 110,
    "height": null,
    "image": null
  },
  {
    "id": 4099,
    "imageAlt": "Mayple",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/mayple_67fe487816.png",
    "width": null,
    "height": null,
    "image": null
  },
  {
    "id": 4101,
    "imageAlt": "Equipal",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/equipment_connect_b753319419.png",
    "width": null,
    "height": null,
    "image": null
  },
  {
    "id": 4100,
    "imageAlt": "Vue Conference Toronto",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_black_43e8b6a164.png",
    "width": null,
    "height": null,
    "image": null
  }
]
const c2_title = [
  {
    "id": 4945,
    "text": "Trusted by 56,000 Businesses Across the Globe",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c2_badges = []
const c3_description = "Create and manage engaging online polls with powerful AI features, easy customization, and detailed analytics. Formester’s free AI poll maker helps you design, share, and track polls effortlessly for better engagement and smarter decisions."
const c3_title = [
  {
    "id": 4949,
    "text": "Benefits of Using Our Free AI Poll Maker",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c3_itemList = [
  {
    "id": 2500,
    "title": "AI-Powered Poll Creation",
    "description": "Generate smart poll questions instantly using our AI poll generator. Save time and create relevant online polls without starting from scratch.",
    "description_markdown": "Let AI build your poll questions instantly. Save time and create smart, relevant polls without starting from scratch.",
    "icon": null,
    "cardImage": {
      "id": 4107,
      "imageAlt": "star icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2318,
        "name": "rocket icon.svg",
        "alternativeText": "rocket icon",
        "caption": "rocket icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "Rocket_3a244016f9",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.26,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Rocket_3a244016f9.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:39:38.688Z",
        "updatedAt": "2025-02-28T02:41:08.277Z"
      }
    }
  },
  {
    "id": 2511,
    "title": "Custom Branding",
    "description": "Customize your online polls with your logo, brand colors, and styles to maintain a consistent and professional look.",
    "description_markdown": null,
    "icon": null,
    "cardImage": {
      "id": 4109,
      "imageAlt": "star icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2333,
        "name": "form icon.svg",
        "alternativeText": "form icon",
        "caption": "form icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "robust_analytics_756dc56363",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.07,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_756dc56363.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:59:30.068Z",
        "updatedAt": "2025-01-20T09:59:11.286Z"
      }
    }
  },
  {
    "id": 2506,
    "title": "Advanced Features",
    "description": "Build smarter polls with logic-based branching, response limits, and full control over your poll settings.\n",
    "description_markdown": "Use logic-based question branching, response limits, and form control to build smarter polls.\n\n",
    "icon": null,
    "cardImage": {
      "id": 4108,
      "imageAlt": "workflow icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2329,
        "name": "lightning icon.svg",
        "alternativeText": "lightning icon",
        "caption": "lightning icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "robust_analytics_1_b405fd6170",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.01,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_1_b405fd6170.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:58:22.595Z",
        "updatedAt": "2025-01-20T09:58:53.385Z"
      }
    }
  },
  {
    "id": 2509,
    "title": " Easy Sharing Options",
    "description": "Share your free online poll via link, social media, embed code, or QR code to reach more participants quickly.\n",
    "description_markdown": "Share your AI-generated polls via link, social media, embeds, or QR codes for faster responses.\n\n",
    "icon": null,
    "cardImage": {
      "id": 4113,
      "imageAlt": "share icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2316,
        "name": "share icon.svg",
        "alternativeText": "share icon",
        "caption": "share icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "share_d2999e5244",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.17,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/share_d2999e5244.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:39:25.463Z",
        "updatedAt": "2025-02-28T02:40:50.459Z"
      }
    }
  },
  {
    "id": 2503,
    "title": "Team Collaboration",
    "description": "Invite your team to create, edit, and manage polls together. Ideal for businesses, agencies, and marketing teams.\n",
    "description_markdown": "Invite others to build, edit, and review polls together. Perfect for teams and agencies.\n\n",
    "icon": null,
    "cardImage": {
      "id": 4110,
      "imageAlt": "user icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2315,
        "name": "users.svg",
        "alternativeText": "verified icon",
        "caption": "verified icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "users_5ce268193d",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.13,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/users_5ce268193d.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:39:18.034Z",
        "updatedAt": "2024-12-11T03:15:19.241Z"
      }
    }
  },
  {
    "id": 2504,
    "title": "In-Depth Poll Analytics",
    "description": "Track responses, completion rates, and drop-offs to improve performance and create better polls over time.\n",
    "description_markdown": "Track response rates, drop-offs, and completion data to improve future polls.",
    "icon": null,
    "cardImage": {
      "id": 4111,
      "imageAlt": "analytics icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2312,
        "name": "workflow icon.svg",
        "alternativeText": "workflow icon",
        "caption": "workflow icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "robust_analytics_2_1d92a30aa9",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.64,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_2_1d92a30aa9.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:35:14.433Z",
        "updatedAt": "2025-03-04T03:25:35.730Z"
      }
    }
  }
]
const c5_description = "Create and launch a professional online poll in minutes using Formester’s AI poll maker. Start with AI or templates, customize your poll design, and begin collecting responses without any coding."
const c5_title = [
  {
    "id": 4950,
    "text": "How to Create an Online Poll with Formester in Four Steps",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c5_itemList = [
  {
    "id": 2507,
    "title": "Type your question or paste your topic",
    "description": "Use the inline builder above, drop a prompt into the AI generator, or start from a poll template (CSAT, NPS, event feedback, team pulse, brand awareness). The AI fills in answer options that you can edit, reorder, or replace.",
    "description_markdown": null,
    "icon": null,
    "cardImage": {
      "id": 4114,
      "imageAlt": "Navigate to “Create with AI” Tab",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2010,
        "name": "a screenshot of creating a form in formester.svg",
        "alternativeText": "a screenshot of creating a form in formester",
        "caption": "a screenshot of creating a form in formester",
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_925_406e118d52",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 61.51,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_406e118d52.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T10:56:20.713Z",
        "updatedAt": "2024-09-06T10:56:44.322Z"
      }
    }
  },
  {
    "id": 2505,
    "title": "Set the rules",
    "description": "Pick the question type, decide if responses are anonymous, cap the response count, set a close date, and choose whether to show live results to voters. None of this needs a paid plan",
    "description_markdown": "",
    "icon": null,
    "cardImage": {
      "id": 4112,
      "imageAlt": "Describe your Form",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2055,
        "name": "Component 926 (1).svg",
        "alternativeText": null,
        "caption": null,
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_926_1_d3d6c9d4a9",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 134.64,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_1_d3d6c9d4a9.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-09T01:20:09.980Z",
        "updatedAt": "2024-09-09T01:20:09.980Z"
      }
    }
  },
  {
    "id": 2508,
    "title": "Publish or Share by link, QR, or embed",
    "description": "Copy the public link, download a QR code in JPEG, SVG, or PNG, or grab one of six embed snippets to drop into your site, your slide deck, your help-center article, or your email.",
    "description_markdown": null,
    "icon": null,
    "cardImage": {
      "id": 4115,
      "imageAlt": "Customize Your Form",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2335,
        "name": "Component 931.png",
        "alternativeText": "a screenshot of formester publish ui",
        "caption": "a screenshot of formester publish ui",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_931_6d1d4e253f.png",
            "hash": "small_Component_931_6d1d4e253f",
            "mime": "image/png",
            "name": "small_Component 931.png",
            "path": null,
            "size": 45.05,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_931_6d1d4e253f.png",
            "hash": "thumbnail_Component_931_6d1d4e253f",
            "mime": "image/png",
            "name": "thumbnail_Component 931.png",
            "path": null,
            "size": 12.17,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_931_6d1d4e253f",
        "ext": ".png",
        "mime": "image/png",
        "size": 13.69,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_931_6d1d4e253f.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:02:06.083Z",
        "updatedAt": "2024-12-11T03:44:03.282Z"
      }
    }
  },
  {
    "id": 2510,
    "title": "Analyze the results and act on it",
    "description": "Open the dashboard, see response counts and a chart per option update in real time, filter by date or referrer, mark spam, export to CSV, or push to HubSpot, Google Sheets, Slack, or your CRM via Webhooks.",
    "description_markdown": null,
    "icon": null,
    "cardImage": {
      "id": 4116,
      "imageAlt": "Share & Collect Responses",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2341,
        "name": "Component 926.png",
        "alternativeText": null,
        "caption": null,
        "width": 1364,
        "height": 1042,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Component_926_628193a9ba.png",
            "hash": "large_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "large_Component 926.png",
            "path": null,
            "size": 102.67,
            "width": 1000,
            "height": 764
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_926_628193a9ba.png",
            "hash": "small_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "small_Component 926.png",
            "path": null,
            "size": 38.5,
            "width": 500,
            "height": 382
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Component_926_628193a9ba.png",
            "hash": "medium_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "medium_Component 926.png",
            "path": null,
            "size": 68.34,
            "width": 750,
            "height": 573
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_926_628193a9ba.png",
            "hash": "thumbnail_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "thumbnail_Component 926.png",
            "path": null,
            "size": 11.63,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_926_628193a9ba",
        "ext": ".png",
        "mime": "image/png",
        "size": 22.19,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_628193a9ba.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:04:10.169Z",
        "updatedAt": "2024-11-05T19:04:10.169Z"
      }
    }
  }
]
const c9_title = [
  {
    "id": 4948,
    "text": "Build Advanced Polls",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c9_itemList = [
  {
    "id": 2499,
    "title": "Question Branching",
    "description": "Use conditional logic to guide users based on their responses. Create personalized poll paths, show relevant questions, and collect more meaningful insights with smarter online polls.",
    "description_markdown": "Use **[conditional logic](https://formester.com/features/conditional-logic/)** to guide users based on their responses. Create personalized poll paths, show relevant questions, and collect more meaningful insights with smarter online polls.",
    "icon": null,
    "cardImage": {
      "id": 4103,
      "imageAlt": "formester's conditional logic ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2336,
        "name": "Component 942.png",
        "alternativeText": null,
        "caption": null,
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_942_1cfab7e277.png",
            "hash": "small_Component_942_1cfab7e277",
            "mime": "image/png",
            "name": "small_Component 942.png",
            "path": null,
            "size": 32.92,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_942_1cfab7e277.png",
            "hash": "thumbnail_Component_942_1cfab7e277",
            "mime": "image/png",
            "name": "thumbnail_Component 942.png",
            "path": null,
            "size": 9.36,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_942_1cfab7e277",
        "ext": ".png",
        "mime": "image/png",
        "size": 11.22,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_942_1cfab7e277.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:02:15.599Z",
        "updatedAt": "2024-11-05T19:02:15.599Z"
      }
    }
  },
  {
    "id": 2498,
    "title": "Partial Submission Recovery",
    "description": "With partial submission turned on, you can see users’ responses even if they don’t finish the poll. This means you won’t lose valuable data from those who leave early. You get a more complete picture of what people think, without missing out on answers.",
    "description_markdown": "With **[partial submission](/features/partial-submissions/)** turned on, you can see users’ responses even if they don’t finish the poll. This means you won’t lose valuable data from those who leave early. You get a more complete picture of what people think, without missing out on answers.",
    "icon": null,
    "cardImage": {
      "id": 4102,
      "imageAlt": "formester's partial submissions ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1998,
        "name": "a screenshot of formester's partial submission.svg",
        "alternativeText": "a screenshot of formester's partial submission",
        "caption": "a screenshot of formester's partial submission",
        "width": 682,
        "height": 522,
        "formats": null,
        "hash": "Component_926_734dda95ed",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 170.65,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_734dda95ed.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T10:47:36.803Z",
        "updatedAt": "2024-09-06T10:48:14.042Z"
      }
    }
  },
  {
    "id": 2502,
    "title": "Email Autoresponder",
    "description": "Send automatic emails after someone submits a poll. Thank them for their participation or share follow-up information. This is an easy way to stay connected and improve engagement with your audience.",
    "description_markdown": "Send automatic emails after someone submits a poll using **[email autoresponder](/features/autoresponder-email/)**. Thank them for their participation or share follow-up information. This is an easy way to stay connected and improve engagement with your audience.",
    "icon": null,
    "cardImage": {
      "id": 4104,
      "imageAlt": "formester's email autoresponder ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2381,
        "name": "a screenshot of formester's email autoresponder ui.svg",
        "alternativeText": "a screenshot of formester's email autoresponder ui",
        "caption": "a screenshot of formester's email autoresponder ui",
        "width": 682,
        "height": 522,
        "formats": null,
        "hash": "a_screenshot_of_formester_s_email_autoresponder_ui_d2039cda00",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 209.5,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_formester_s_email_autoresponder_ui_d2039cda00.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-11T03:27:24.204Z",
        "updatedAt": "2024-11-11T04:25:47.541Z"
      }
    }
  },
  {
    "id": 2501,
    "title": "Form Limiter",
    "description": "Cap the response count, set a hard close date, restrict by IP or email so one voter can't vote twice. Useful for time-boxed polls (a 24-hour brand vote), capacity-bound polls (first 200 votes win the giveaway), and integrity-bound polls (one vote per person).",
    "description_markdown": "Set time and response limits using **[Form limiter](/features/form-limiter/)** on your online polls. This will help when you’re running time-sensitive or exclusive polls. Set a response cap to maintain control and collect only the data you need.",
    "icon": null,
    "cardImage": {
      "id": 4105,
      "imageAlt": "formester's form limiter ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2022,
        "name": "a screenshot of setting form response limits in formester.svg",
        "alternativeText": "a screenshot of setting form response limits in formester",
        "caption": "a screenshot of setting form response limits in formester",
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_926_1_2340a59b8c",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 159.72,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_1_2340a59b8c.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T11:00:40.675Z",
        "updatedAt": "2024-09-06T11:02:38.112Z"
      }
    }
  },
  {
    "id": 2497,
    "title": "QR Code Generation",
    "description": "Download a QR code in JPEG, SVG, or PNG, recolor it to your brand, drop it on a slide, a printed flyer, or a packaging insert. The same poll URL backs every QR, so the analytics tab knows which version pulled the votes.",
    "description_markdown": null,
    "icon": null,
    "cardImage": {
      "id": 4106,
      "imageAlt": "formester's qr code generator ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2013,
        "name": "a screenshot of sharing a custom qr code in formester.svg",
        "alternativeText": "a screenshot of sharing a custom qr code in formester",
        "caption": "a screenshot of sharing a custom qr code in formester",
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_925_3_35ae251d81",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 110.6,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_3_35ae251d81.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T10:56:21.303Z",
        "updatedAt": "2024-09-06T10:58:02.629Z"
      }
    }
  }
]
const c14_heading = [
  {
    "id": 4951,
    "text": "Testimonials",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c14_testimonials = [
  {
    "id": 6,
    "name": "Thibaud Martinez",
    "position": "Organiser",
    "organization": "Tedx",
    "comment": "I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.",
    "createdAt": "2024-06-18T03:53:38.957Z",
    "updatedAt": "2025-01-22T02:56:48.567Z",
    "publishedAt": "2024-06-18T03:53:40.693Z",
    "companyLogo": {
      "id": 229,
      "imageAlt": "tedx-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1684,
        "name": "tedx.webp",
        "alternativeText": "tedx-logo",
        "caption": "tedx-logo",
        "width": 109,
        "height": 38,
        "formats": null,
        "hash": "tedx_2fce0eee2e",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.09,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_2fce0eee2e.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.941Z",
        "updatedAt": "2024-12-01T07:50:31.505Z"
      }
    }
  },
  {
    "id": 2,
    "name": "Jilson",
    "position": "Organiser",
    "organization": "Vue Conference",
    "comment": "Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.",
    "createdAt": "2024-06-18T03:48:46.610Z",
    "updatedAt": "2025-01-22T02:57:08.760Z",
    "publishedAt": "2024-06-18T03:48:50.595Z",
    "companyLogo": {
      "id": 228,
      "imageAlt": "photo-of-vue-conference",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1680,
        "name": "vueconf.webp",
        "alternativeText": "photo-of-vue-conference",
        "caption": "photo-of-vue-conference",
        "width": 80,
        "height": 80,
        "formats": null,
        "hash": "vueconf_1bc3dc0827",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.07,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_1bc3dc0827.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.731Z",
        "updatedAt": "2024-12-01T07:47:11.024Z"
      }
    }
  },
  {
    "id": 4,
    "name": "Costanza Casullo",
    "position": "Volunteer",
    "organization": "Wato Coding Hub",
    "comment": "Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.",
    "createdAt": "2024-06-18T03:51:15.232Z",
    "updatedAt": "2025-01-22T02:58:03.674Z",
    "publishedAt": "2024-06-18T03:51:21.477Z",
    "companyLogo": {
      "id": 225,
      "imageAlt": "wato-coding-hub-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1681,
        "name": "wato-coding-hub.webp",
        "alternativeText": "wato-coding-hub-logo",
        "caption": "wato-coding-hub-logo",
        "width": 80,
        "height": 81,
        "formats": null,
        "hash": "wato_coding_hub_e054f0ea9d",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.88,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/wato_coding_hub_e054f0ea9d.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.738Z",
        "updatedAt": "2024-12-01T07:49:13.371Z"
      }
    }
  },
  {
    "id": 5,
    "name": "Deanna Bugalski",
    "position": "Founder/CEO",
    "organization": "Suggesterfy",
    "comment": "I was searching for a long time for a product I could use to send newsletters and surveys to my database. I tried so many different types of software and I found many of them difficult to use and slow to learn how to operate. But Formester was super easy to set up, and the usability is seamless! I highly recommend!",
    "createdAt": "2024-06-18T03:52:39.354Z",
    "updatedAt": "2025-01-22T02:57:47.756Z",
    "publishedAt": "2024-06-18T03:52:43.800Z",
    "companyLogo": {
      "id": 226,
      "imageAlt": "suggesterfy-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1683,
        "name": "suggesterfy_logo.webp",
        "alternativeText": "suggesterfy-logo",
        "caption": "suggesterfy-logo",
        "width": 100,
        "height": 50,
        "formats": null,
        "hash": "suggesterfy_logo_d1d7f996b9",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.91,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/suggesterfy_logo_d1d7f996b9.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.921Z",
        "updatedAt": "2024-12-01T07:49:52.459Z"
      }
    }
  }
]
const c15_ctaValue = {
  "id": 67,
  "description": "Get access to advanced AI, unlimited forms & more. See pricing for more details.",
  "type": "default",
  "createdAt": "2024-11-04T07:07:43.916Z",
  "updatedAt": "2025-06-12T18:47:31.840Z",
  "publishedAt": "2024-11-04T07:08:18.018Z",
  "locale": "en",
  "title": [
    {
      "id": 393,
      "text": "Ready to build your perfect form?",
      "highlight": false,
      "color": null,
      "bold": null
    }
  ],
  "buttons": [
    {
      "id": 338,
      "link": "https://app.formester.com/users/sign_up",
      "text": "Get Started–It’s Free!",
      "type": "Primary",
      "showArrow": null
    }
  ],
  "localizations": []
}
const c16_title = [
  {
    "id": 4952,
    "text": "FAQs",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c16_faqList = [
  {
    "id": 2519,
    "header": "Is the free poll maker really free?",
    "body": "Yes. The free plan covers unlimited forms (polls included) with unlimited responses, all field types, the AI question generator, and the live results dashboard. Formester branding shows on free polls; branding removal starts at the Personal plan ($13/month).",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2518,
    "header": "Can I create a poll without signing up? ",
    "body": "You can build and preview a poll inline on this page without an account. Publishing the poll (so others can vote) requires a free account so we can hold the responses against your dashboard. Sign-up takes about 20 seconds and never asks for a credit card.\n",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2523,
    "header": "Is there a response limit on the free plan?",
    "body": "No. The free plan includes unlimited responses across all your polls and forms combined, with no per-poll cap.\n",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2517,
    "header": "How do I share a poll once it's built?",
    "body": "Six ways. A public link, a downloadable QR code (JPEG, SVG, or PNG), six embed modes (inline, popup, sidebar, side tab, popover, fullscreen), and native shares to Website, Email, Shopify, WordPress, Webflow, Canva, and Wix.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2520,
    "header": "What question types does the AI generate",
    "body": "Single choice, multiple choice, dropdown, true/false (delivered as single choice with True and False options), rating (1-5 or 1-10), ranking, and open text. Picture choice and matrix choice exist as manual fields you add yourself.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2524,
    "header": "Can I run an anonymous poll?",
    "body": "es. Anonymous mode is a one-toggle setting. No IP, no email, no identifier saved with the response. You can also run the poll non-anonymously and require an email field if you want to follow up.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2521,
    "header": "Can I show live results to voters as they vote",
    "body": "Yes. The live-results toggle shows the running tally to each voter immediately after their vote. The dashboard updates in real time on your end without a refresh.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2522,
    "header": "Does the poll work for live audience polling at events?",
    "body": "It works for async audience polls (publish a QR, attendees vote, results land in the dashboard). It is not a live-presentation polling tool like Slido. If you need vote results to drive a slide transition during a live talk, Slido and Mentimeter are the right shape; if you need a fast audience poll the host can read on a phone, Formester is.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2526,
    "header": "Can I connect poll results to HubSpot, Slack, or Google Sheets?",
    "body": "Yes. Native integrations for HubSpot, Salesforce, Google Sheets, Slack, Stripe, PayPal, Calendly, n8n, Pabbly, Webhooks (three events), GA4, and Google Tag Manager. Plus Zapier for 1,000+ additional apps. Webhooks fire on every new vote.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2525,
    "header": "What languages does the poll maker support?",
    "body": "AI translation covers 180+ languages. Manual translation is available field by field if you want word-perfect copy. Same poll, multiple language variants, one dashboard.",
    "body_markdown": null,
    "list": []
  }
]

useHead({
  "title": "Free Poll Maker. Build a Poll in 30 Seconds, Share Anywhere",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/poll-maker/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-07-13T04:48:34.271Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Free poll maker for events, customer feedback, and team pulse polls. Build a poll in 30 seconds, share by link, QR, or embed, watch results land in real time."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Free Poll Maker. Build a Poll in 30 Seconds, Share Anywhere"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/poll-maker​​/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Free Poll Maker. Build a Poll in 30 Seconds, Share Anywhere"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Free poll maker for events, customer feedback, and team pulse polls. Build a poll in 30 seconds, share by link, QR, or embed, watch results land in real time."
    },
    {
      "hid": "og:image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "og:image:alt",
      "name": "og:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:url",
      "name": "twitter:url",
      "content": "https://formester.com/poll-maker​​/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Free Poll Maker. Build a Poll in 30 Seconds, Share Anywhere"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Free poll maker for events, customer feedback, and team pulse polls. Build a poll in 30 seconds, share by link, QR, or embed, watch results land in real time."
    },
    {
      "hid": "twitter:image",
      "name": "twitter:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "twitter:image:alt",
      "name": "twitter:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:card",
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "hid": "apple-mobile-web-app-title",
      "name": "apple-mobile-web-app-title",
      "content": "Formester"
    },
    {
      "hid": "image",
      "name": "image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "keywords",
      "name": "keywords",
      "content": [
        "free poll maker",
        "poll maker\t",
        "online poll maker",
        "quick poll maker",
        "ai poll maker"
      ]
    }
  ]
})
useJsonld([
  {
    "@graph": [
      {
        "@id": "https://formester.com/#organization",
        "url": "https://formester.com/",
        "logo": "https://formester.com/logo.svg",
        "name": "Formester",
        "@type": "Organization",
        "sameAs": [
          "https://www.linkedin.com/company/formester-inc/",
          "https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ",
          "https://www.instagram.com/_formester_",
          "https://www.facebook.com/formester",
          "https://x.com/_Formester_"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "49D, Jugsalai",
            "addressCountry": "India",
            "addressLocality": "Jamshedpur"
          },
          {
            "@type": "PostalAddress",
            "addressRegion": "Delaware",
            "streetAddress": "2035 Sunset Lake",
            "addressCountry": "USA"
          }
        ],
        "contactPoint": {
          "url": "https://formester.com/contact",
          "@type": "ContactPoint",
          "email": "support@formester.com",
          "contactType": "customer support"
        }
      },
      {
        "@id": "https://formester.com/poll-maker/#software",
        "url": "https://formester.com/poll-maker/",
        "name": "Formester AI Poll Maker",
        "@type": "SoftwareApplication",
        "description": "Formester is a free AI poll maker and online poll builder that lets you create, customize, and share polls without coding. Generate questions with AI, collect responses, and analyze results in one dashboard.",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication"
      },
      {
        "@id": "https://formester.com/poll-maker/#product",
        "name": "Formester Poll Maker",
        "@type": "Product",
        "brand": {
          "name": "Formester",
          "@type": "Brand"
        },
        "description": "Create free online polls with AI using Formester. Build engaging polls, customize design, share anywhere, and analyze responses with advanced poll analytics.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "ratingValue": "4.7",
          "reviewCount": "33"
        }
      },
      {
        "@id": "https://formester.com/poll-maker/#faq",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "name": "What is the best free poll maker for online polls?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Formester is a free online poll maker that lets you create and share polls without coding. You can use AI to generate questions, customize your poll design, and collect responses in one dashboard.",
              "@type": "Answer"
            }
          },
          {
            "name": "How do I create a poll using an AI poll maker?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Log in to Formester, choose the AI poll generator or a ready template, add your topic, and the tool will create questions instantly. Customize the poll and publish it to start collecting responses.",
              "@type": "Answer"
            }
          },
          {
            "name": "Is Formester a free online poll maker?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. Formester offers a free poll maker that allows you to create, share, and collect responses. Advanced features like analytics, branding, and integrations are available in premium plans.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I share my online poll anywhere?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. After creating your poll, you can share it via a link, embed it on your website, post on social media, or generate a QR code to collect responses from any device.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I customize my poll design and branding?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. You can customize colors, fonts, logo, layout, and question styles to match your brand and create professional-looking online polls.",
              "@type": "Answer"
            }
          },
          {
            "name": "Does the AI poll maker provide analytics and results?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. Formester provides in-depth poll analytics including response count, completion rate, and user insights so you can understand results and improve future polls.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I limit responses in my online poll?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. You can set response limits, deadlines, and access controls to manage how many people can answer your poll and when it closes.",
              "@type": "Answer"
            }
          }
        ]
      },
      {
        "@id": "https://formester.com/poll-maker/#webpage",
        "url": "https://formester.com/poll-maker/",
        "name": "Best Free AI Poll Maker for Online Polls",
        "@type": "WebPage",
        "about": {
          "@id": "https://formester.com/poll-maker/#software"
        },
        "isPartOf": {
          "@id": "https://formester.com/#organization"
        }
      }
    ],
    "@context": "https://schema.org"
  }
])
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-why-teams-pick {

    --fmstr-cmp-why-teams-pick-bg-card: #ffffff;
    --fmstr-cmp-why-teams-pick-bg-tile: #f7f3ff;
    --fmstr-cmp-why-teams-pick-fg-1: #101828;
    --fmstr-cmp-why-teams-pick-fg-2: #475467;
    --fmstr-cmp-why-teams-pick-violet-300: #9777e0;
    --fmstr-cmp-why-teams-pick-violet-500: #7f56d9;
    --fmstr-cmp-why-teams-pick-violet-600: #6941c6;
    --fmstr-cmp-why-teams-pick-border-light: #eaecf0;
    --fmstr-cmp-why-teams-pick-fs-md: 16px;
    --fmstr-cmp-why-teams-pick-fs-lg: 18px;
    --fmstr-cmp-why-teams-pick-fs-xl: 20px;
    --fmstr-cmp-why-teams-pick-fs-2xl: 24px;
    --fmstr-cmp-why-teams-pick-fs-3xl: 36px;
    --fmstr-cmp-why-teams-pick-fw-semibold: 600;
    --fmstr-cmp-why-teams-pick-fw-bold: 700;
    --fmstr-cmp-why-teams-pick-lh-md: 24px;
    --fmstr-cmp-why-teams-pick-lh-lg: 28px;
    --fmstr-cmp-why-teams-pick-lh-xl: 30px;
    --fmstr-cmp-why-teams-pick-lh-2xl: 32px;
    --fmstr-cmp-why-teams-pick-space-2: 8px;
    --fmstr-cmp-why-teams-pick-space-3: 12px;
    --fmstr-cmp-why-teams-pick-space-4: 16px;
    --fmstr-cmp-why-teams-pick-space-5: 20px;
    --fmstr-cmp-why-teams-pick-space-6: 24px;
    --fmstr-cmp-why-teams-pick-space-8: 32px;
    --fmstr-cmp-why-teams-pick-space-10: 40px;
    --fmstr-cmp-why-teams-pick-space-12: 48px;
    --fmstr-cmp-why-teams-pick-space-16: 64px;
    --fmstr-cmp-why-teams-pick-r-md: 8px;
    --fmstr-cmp-why-teams-pick-r-2xl: 16px;
    --fmstr-cmp-why-teams-pick-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
    padding: var(--fmstr-cmp-why-teams-pick-space-16) var(--fmstr-cmp-why-teams-pick-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-why-teams-pick-fg-1);
  }
  .fmstr-cmp-why-teams-pick *, .fmstr-cmp-why-teams-pick *::before, .fmstr-cmp-why-teams-pick *::after { box-sizing: border-box; }

  .fmstr-cmp-why-teams-pick__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-why-teams-pick__header {
    margin: 0 auto var(--fmstr-cmp-why-teams-pick-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-why-teams-pick__title {
    font-size: var(--fmstr-cmp-why-teams-pick-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-why-teams-pick-fw-semibold);
    color: var(--fmstr-cmp-why-teams-pick-fg-1);
    margin: 0 0 var(--fmstr-cmp-why-teams-pick-space-3);
  }
  .fmstr-cmp-why-teams-pick__intro {
    font-size: var(--fmstr-cmp-why-teams-pick-fs-md);
    line-height: var(--fmstr-cmp-why-teams-pick-lh-md);
    color: var(--fmstr-cmp-why-teams-pick-fg-2);
    margin: 0;
  }

  .fmstr-cmp-why-teams-pick__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--fmstr-cmp-why-teams-pick-space-5);
  }

  .fmstr-cmp-why-teams-pick__card {
    background: var(--fmstr-cmp-why-teams-pick-bg-card);
    border: 1px solid var(--fmstr-cmp-why-teams-pick-border-light);
    border-radius: var(--fmstr-cmp-why-teams-pick-r-2xl);
    padding: var(--fmstr-cmp-why-teams-pick-space-6);
    transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
  }
  .fmstr-cmp-why-teams-pick__card:hover {
    border-color: var(--fmstr-cmp-why-teams-pick-violet-300);
    box-shadow: var(--fmstr-cmp-why-teams-pick-shadow-md);
    transform: translateY(-2px);
  }

  .fmstr-cmp-why-teams-pick__icon {
    width: 40px; height: 40px;
    border-radius: var(--fmstr-cmp-why-teams-pick-r-md);
    background: var(--fmstr-cmp-why-teams-pick-bg-tile);
    color: var(--fmstr-cmp-why-teams-pick-violet-600);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: var(--fmstr-cmp-why-teams-pick-space-4);
  }

  .fmstr-cmp-why-teams-pick__card-title {
    font-size: var(--fmstr-cmp-why-teams-pick-fs-md);
    line-height: var(--fmstr-cmp-why-teams-pick-lh-md);
    font-weight: var(--fmstr-cmp-why-teams-pick-fw-semibold);
    color: var(--fmstr-cmp-why-teams-pick-fg-1);
    margin: 0 0 var(--fmstr-cmp-why-teams-pick-space-2);
    letter-spacing: -0.01em;
  }
  .fmstr-cmp-why-teams-pick__card-body {
    font-size: var(--fmstr-cmp-why-teams-pick-fs-md);
    line-height: var(--fmstr-cmp-why-teams-pick-lh-md);
    color: var(--fmstr-cmp-why-teams-pick-fg-2);
    margin: 0;
  }

  @media (max-width: 760px) {
    .fmstr-cmp-why-teams-pick { padding: var(--fmstr-cmp-why-teams-pick-space-12) var(--fmstr-cmp-why-teams-pick-space-4); }
    .fmstr-cmp-why-teams-pick__title { font-size: var(--fmstr-cmp-why-teams-pick-fs-2xl); line-height: var(--fmstr-cmp-why-teams-pick-lh-2xl); }
    .fmstr-cmp-why-teams-pick__grid { grid-template-columns: 1fr; gap: var(--fmstr-cmp-why-teams-pick-space-4); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-personas {

    --fmstr-cmp-personas-bg-card: #ffffff;
    --fmstr-cmp-personas-bg-tile: #f7f3ff;
    --fmstr-cmp-personas-fg-1: #101828;
    --fmstr-cmp-personas-fg-2: #475467;
    --fmstr-cmp-personas-violet-300: #9777e0;
    --fmstr-cmp-personas-violet-600: #6941c6;
    --fmstr-cmp-personas-border-light: #eaecf0;
    --fmstr-cmp-personas-fs-md: 16px;
    --fmstr-cmp-personas-fs-2xl: 24px;
    --fmstr-cmp-personas-fs-3xl: 36px;
    --fmstr-cmp-personas-fw-semibold: 600;
    --fmstr-cmp-personas-lh-md: 24px;
    --fmstr-cmp-personas-lh-2xl: 32px;
    --fmstr-cmp-personas-space-2: 8px;
    --fmstr-cmp-personas-space-3: 12px;
    --fmstr-cmp-personas-space-4: 16px;
    --fmstr-cmp-personas-space-5: 20px;
    --fmstr-cmp-personas-space-6: 24px;
    --fmstr-cmp-personas-space-10: 40px;
    --fmstr-cmp-personas-space-12: 48px;
    --fmstr-cmp-personas-space-16: 64px;
    --fmstr-cmp-personas-r-md: 8px;
    --fmstr-cmp-personas-r-2xl: 16px;
    --fmstr-cmp-personas-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
    padding: var(--fmstr-cmp-personas-space-16) var(--fmstr-cmp-personas-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-personas-fg-1);
  }
  .fmstr-cmp-personas *, .fmstr-cmp-personas *::before, .fmstr-cmp-personas *::after { box-sizing: border-box; }

  .fmstr-cmp-personas__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-personas__header {
    margin: 0 auto var(--fmstr-cmp-personas-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-personas__title {
    font-size: var(--fmstr-cmp-personas-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-personas-fw-semibold);
    margin: 0 0 var(--fmstr-cmp-personas-space-3);
  }
  .fmstr-cmp-personas__intro {
    font-size: var(--fmstr-cmp-personas-fs-md);
    line-height: var(--fmstr-cmp-personas-lh-md);
    color: var(--fmstr-cmp-personas-fg-2);
    margin: 0;
  }

  .fmstr-cmp-personas__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--fmstr-cmp-personas-space-4);
  }

  .fmstr-cmp-personas__card {
    background: var(--fmstr-cmp-personas-bg-card);
    border: 1px solid var(--fmstr-cmp-personas-border-light);
    border-radius: var(--fmstr-cmp-personas-r-2xl);
    padding: var(--fmstr-cmp-personas-space-6);
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }
  .fmstr-cmp-personas__card:hover {
    border-color: var(--fmstr-cmp-personas-violet-300);
    box-shadow: var(--fmstr-cmp-personas-shadow-md);
  }

  .fmstr-cmp-personas__icon {
    width: 40px; height: 40px;
    border-radius: var(--fmstr-cmp-personas-r-md);
    background: var(--fmstr-cmp-personas-bg-tile);
    color: var(--fmstr-cmp-personas-violet-600);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: var(--fmstr-cmp-personas-space-4);
  }

  .fmstr-cmp-personas__card-title {
    font-size: var(--fmstr-cmp-personas-fs-md);
    line-height: var(--fmstr-cmp-personas-lh-md);
    font-weight: var(--fmstr-cmp-personas-fw-semibold);
    color: var(--fmstr-cmp-personas-fg-1);
    margin: 0 0 var(--fmstr-cmp-personas-space-2);
    letter-spacing: -0.01em;
  }
  .fmstr-cmp-personas__card-body {
    font-size: var(--fmstr-cmp-personas-fs-md);
    line-height: var(--fmstr-cmp-personas-lh-md);
    color: var(--fmstr-cmp-personas-fg-2);
    margin: 0;
  }

  @media (max-width: 960px) {
    .fmstr-cmp-personas__grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 760px) {
    .fmstr-cmp-personas { padding: var(--fmstr-cmp-personas-space-12) var(--fmstr-cmp-personas-space-4); }
    .fmstr-cmp-personas__title { font-size: var(--fmstr-cmp-personas-fs-2xl); line-height: var(--fmstr-cmp-personas-lh-2xl); }
    .fmstr-cmp-personas__grid { grid-template-columns: 1fr; }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-privacy {
    --fmstr-cmp-privacy-bg-dark: #0F0921;
    --fmstr-cmp-privacy-bg-glow: radial-gradient(ellipse 900px 600px at 95% 0%, rgba(127, 86, 217, 0.45) 0%, rgba(100, 52, 208, 0.15) 30%, transparent 65%);
    --fmstr-cmp-privacy-bg-card: rgba(255, 255, 255, 0.05);
    --fmstr-cmp-privacy-bg-card-glow: radial-gradient(ellipse 500px 400px at 90% 5%, rgba(127, 86, 217, 0.30) 0%, transparent 60%);
    --fmstr-cmp-privacy-bg-pill: rgba(255, 255, 255, 0.08);
    --fmstr-cmp-privacy-fg-eyebrow: #d9c7ff;
    --fmstr-cmp-privacy-fg-link: #d9c7ff;
    --fmstr-cmp-privacy-fg-link-hover: #ffffff;
    --fmstr-cmp-privacy-fs-xs: 12px;
    --fmstr-cmp-privacy-fs-sm: 14px;
    --fmstr-cmp-privacy-fs-md: 16px;
    --fmstr-cmp-privacy-fs-lg: 18px;
    --fmstr-cmp-privacy-fs-2xl: 24px;
    --fmstr-cmp-privacy-fs-3xl: 32px;
    --fmstr-cmp-privacy-fw-semibold: 600;
    --fmstr-cmp-privacy-fw-bold: 700;
    --fmstr-cmp-privacy-lh-md: 24px;
    --fmstr-cmp-privacy-lh-lg: 28px;
    --fmstr-cmp-privacy-lh-2xl: 32px;
    --fmstr-cmp-privacy-space-1: 4px;
    --fmstr-cmp-privacy-space-2: 8px;
    --fmstr-cmp-privacy-space-3: 12px;
    --fmstr-cmp-privacy-space-4: 16px;
    --fmstr-cmp-privacy-space-5: 20px;
    --fmstr-cmp-privacy-space-6: 24px;
    --fmstr-cmp-privacy-space-7: 28px;
    --fmstr-cmp-privacy-space-8: 32px;
    --fmstr-cmp-privacy-space-12: 48px;
    --fmstr-cmp-privacy-space-16: 64px;
    --fmstr-cmp-privacy-r-2xl: 16px;
    --fmstr-cmp-privacy-r-3xl: 28px;
    --fmstr-cmp-privacy-r-full: 9999px;

    background: transparent;
    padding: var(--fmstr-cmp-privacy-space-12) var(--fmstr-cmp-privacy-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }
  .fmstr-cmp-privacy *, .fmstr-cmp-privacy *::before, .fmstr-cmp-privacy *::after { box-sizing: border-box; }

  .fmstr-cmp-privacy__container {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    background-color: var(--fmstr-cmp-privacy-bg-dark);
    background-image: var(--fmstr-cmp-privacy-bg-glow);
    border-radius: var(--fmstr-cmp-privacy-r-3xl);
    padding: var(--fmstr-cmp-privacy-space-12);
    overflow: hidden;
  }

  .fmstr-cmp-privacy__inner {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: var(--fmstr-cmp-privacy-space-12);
    align-items: center;
  }

  .fmstr-cmp-privacy__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-privacy-space-2) var(--fmstr-cmp-privacy-space-4);
    background: var(--fmstr-cmp-privacy-bg-pill);
    color: var(--fmstr-cmp-privacy-fg-eyebrow);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--fmstr-cmp-privacy-r-full);
    font-size: var(--fmstr-cmp-privacy-fs-xs);
    font-weight: var(--fmstr-cmp-privacy-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-privacy-space-5);
  }

  .fmstr-cmp-privacy__heading {
    font-size: var(--fmstr-cmp-privacy-fs-3xl);
    line-height: 40px;
    font-weight: var(--fmstr-cmp-privacy-fw-bold);
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0 0 var(--fmstr-cmp-privacy-space-6);
  }

  .fmstr-cmp-privacy__body p {
    font-size: var(--fmstr-cmp-privacy-fs-md);
    line-height: var(--fmstr-cmp-privacy-lh-md);
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 var(--fmstr-cmp-privacy-space-4);
  }
  .fmstr-cmp-privacy__body p:last-child { margin-bottom: 0; }

  .fmstr-cmp-privacy__card {
    background-color: var(--fmstr-cmp-privacy-bg-card);
    background-image: var(--fmstr-cmp-privacy-bg-card-glow);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--fmstr-cmp-privacy-r-2xl);
    padding: var(--fmstr-cmp-privacy-space-7);
    backdrop-filter: blur(8px);
  }

  .fmstr-cmp-privacy__pill {
    display: inline-block;
    padding: var(--fmstr-cmp-privacy-space-2) var(--fmstr-cmp-privacy-space-4);
    background: var(--fmstr-cmp-privacy-bg-pill);
    color: var(--fmstr-cmp-privacy-fg-eyebrow);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--fmstr-cmp-privacy-r-full);
    font-size: var(--fmstr-cmp-privacy-fs-xs);
    font-weight: var(--fmstr-cmp-privacy-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-privacy-space-5);
  }

  .fmstr-cmp-privacy__quote {
    font-size: var(--fmstr-cmp-privacy-fs-lg);
    line-height: var(--fmstr-cmp-privacy-lh-lg);
    font-weight: var(--fmstr-cmp-privacy-fw-semibold);
    font-style: italic;
    color: #ffffff;
    margin: 0 0 var(--fmstr-cmp-privacy-space-5);
  }

  .fmstr-cmp-privacy__divider { border: none; border-top: 1px solid rgba(255, 255, 255, 0.12); margin: 0 0 var(--fmstr-cmp-privacy-space-5); }

  .fmstr-cmp-privacy__cite {
    font-size: var(--fmstr-cmp-privacy-fs-sm);
    line-height: var(--fmstr-cmp-privacy-lh-md);
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 var(--fmstr-cmp-privacy-space-3);
  }

  .fmstr-cmp-privacy__links {
    display: flex;
    gap: var(--fmstr-cmp-privacy-space-4);
    flex-wrap: wrap;
  }

  .fmstr-cmp-privacy__links a {
    color: var(--fmstr-cmp-privacy-fg-link);
    font-weight: var(--fmstr-cmp-privacy-fw-semibold);
    font-size: var(--fmstr-cmp-privacy-fs-sm);
    text-decoration: none;
  }
  .fmstr-cmp-privacy__links a:hover { color: var(--fmstr-cmp-privacy-fg-link-hover); text-decoration: underline; }

  @media (max-width: 760px) {
    .fmstr-cmp-privacy { padding: var(--fmstr-cmp-privacy-space-8) var(--fmstr-cmp-privacy-space-4); }
    .fmstr-cmp-privacy__container { padding: var(--fmstr-cmp-privacy-space-7); border-radius: 20px; }
    .fmstr-cmp-privacy__inner { grid-template-columns: 1fr; gap: var(--fmstr-cmp-privacy-space-8); }
    .fmstr-cmp-privacy__heading { font-size: var(--fmstr-cmp-privacy-fs-2xl); line-height: var(--fmstr-cmp-privacy-lh-2xl); }
    .fmstr-cmp-privacy__quote { font-size: var(--fmstr-cmp-privacy-fs-md); line-height: var(--fmstr-cmp-privacy-lh-md); }
    .fmstr-cmp-privacy__card { padding: var(--fmstr-cmp-privacy-space-6); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-comparison-table {
    --fmstr-cmp-comparison-table-bg-section: #f9fafb;
    --fmstr-cmp-comparison-table-bg-table: #ffffff;
    --fmstr-cmp-comparison-table-bg-th: #f2f4f7;
    --fmstr-cmp-comparison-table-bg-th-us: #f4ebff;
    --fmstr-cmp-comparison-table-bg-us-cell: #fcfaff;
    --fmstr-cmp-comparison-table-fg-1: #101828;
    --fmstr-cmp-comparison-table-fg-2: #475467;
    --fmstr-cmp-comparison-table-violet-500: #7f56d9;
    --fmstr-cmp-comparison-table-violet-600: #6941c6;
    --fmstr-cmp-comparison-table-error: #d92d20;
    --fmstr-cmp-comparison-table-border-light: #eaecf0;
    --fmstr-cmp-comparison-table-fs-xs: 12px;
    --fmstr-cmp-comparison-table-fs-sm: 14px;
    --fmstr-cmp-comparison-table-fs-md: 16px;
    --fmstr-cmp-comparison-table-fs-2xl: 24px;
    --fmstr-cmp-comparison-table-fs-3xl: 36px;
    --fmstr-cmp-comparison-table-fw-semibold: 600;
    --fmstr-cmp-comparison-table-fw-bold: 700;
    --fmstr-cmp-comparison-table-lh-md: 24px;
    --fmstr-cmp-comparison-table-lh-2xl: 32px;
    --fmstr-cmp-comparison-table-space-2: 8px;
    --fmstr-cmp-comparison-table-space-3: 12px;
    --fmstr-cmp-comparison-table-space-4: 16px;
    --fmstr-cmp-comparison-table-space-5: 20px;
    --fmstr-cmp-comparison-table-space-6: 24px;
    --fmstr-cmp-comparison-table-space-10: 40px;
    --fmstr-cmp-comparison-table-space-12: 48px;
    --fmstr-cmp-comparison-table-space-16: 64px;
    --fmstr-cmp-comparison-table-r-2xl: 16px;

    background: var(--fmstr-cmp-comparison-table-bg-section);
    padding: var(--fmstr-cmp-comparison-table-space-16) var(--fmstr-cmp-comparison-table-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-comparison-table-fg-1);
  }
  .fmstr-cmp-comparison-table *, .fmstr-cmp-comparison-table *::before, .fmstr-cmp-comparison-table *::after { box-sizing: border-box; }

  .fmstr-cmp-comparison-table__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-comparison-table__header {
    margin: 0 auto var(--fmstr-cmp-comparison-table-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-comparison-table__title {
    font-size: var(--fmstr-cmp-comparison-table-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-comparison-table-fw-semibold);
    margin: 0 0 var(--fmstr-cmp-comparison-table-space-3);
  }
  .fmstr-cmp-comparison-table__intro {
    font-size: var(--fmstr-cmp-comparison-table-fs-md);
    line-height: var(--fmstr-cmp-comparison-table-lh-md);
    color: var(--fmstr-cmp-comparison-table-fg-2);
    margin: 0;
  }

  .fmstr-cmp-comparison-table__scroll { overflow-x: auto; }

  .fmstr-cmp-comparison-table__table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background: var(--fmstr-cmp-comparison-table-bg-table);
    border: 1px solid var(--fmstr-cmp-comparison-table-border-light);
    border-radius: var(--fmstr-cmp-comparison-table-r-2xl);
    overflow: hidden;
    min-width: 720px;
  }

  .fmstr-cmp-comparison-table__table th,
  .fmstr-cmp-comparison-table__table td {
    padding: var(--fmstr-cmp-comparison-table-space-4) var(--fmstr-cmp-comparison-table-space-5);
    text-align: left;
    vertical-align: top;
    font-size: var(--fmstr-cmp-comparison-table-fs-sm);
    line-height: var(--fmstr-cmp-comparison-table-lh-md);
    border-bottom: 1px solid var(--fmstr-cmp-comparison-table-border-light);
  }

  .fmstr-cmp-comparison-table__table th {
    background: var(--fmstr-cmp-comparison-table-bg-th);
    font-weight: var(--fmstr-cmp-comparison-table-fw-bold);
    color: var(--fmstr-cmp-comparison-table-fg-1);
    font-size: var(--fmstr-cmp-comparison-table-fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .fmstr-cmp-comparison-table__th--us {
    background: var(--fmstr-cmp-comparison-table-bg-th-us);
    color: var(--fmstr-cmp-comparison-table-violet-600);
  }

  .fmstr-cmp-comparison-table__table tr:last-child td { border-bottom: 0; }

  .fmstr-cmp-comparison-table__row-label {
    font-weight: var(--fmstr-cmp-comparison-table-fw-semibold);
    color: var(--fmstr-cmp-comparison-table-fg-1);
    width: 28%;
  }

  .fmstr-cmp-comparison-table__td--us {
    background: var(--fmstr-cmp-comparison-table-bg-us-cell);
    color: var(--fmstr-cmp-comparison-table-fg-1);
  }

  .fmstr-cmp-comparison-table__check {
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--fmstr-cmp-comparison-table-violet-500);
    margin-right: 6px; vertical-align: -2px;
  }
  .fmstr-cmp-comparison-table__cross {
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--fmstr-cmp-comparison-table-error);
    margin-right: 6px; vertical-align: -2px;
  }

  @media (max-width: 760px) {
    .fmstr-cmp-comparison-table { padding: var(--fmstr-cmp-comparison-table-space-12) var(--fmstr-cmp-comparison-table-space-4); }
    .fmstr-cmp-comparison-table__title { font-size: var(--fmstr-cmp-comparison-table-fs-2xl); line-height: var(--fmstr-cmp-comparison-table-lh-2xl); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-real-polls {

    --fmstr-cmp-real-polls-bg-card: #ffffff;
    --fmstr-cmp-real-polls-bg-foot: #f9fafb;
    --fmstr-cmp-real-polls-bg-cat: #f4ebff;
    --fmstr-cmp-real-polls-bg-pill: #f2f4f7;
    --fmstr-cmp-real-polls-fg-1: #101828;
    --fmstr-cmp-real-polls-fg-2: #475467;
    --fmstr-cmp-real-polls-fg-3: #697586;
    --fmstr-cmp-real-polls-fg-strong: #344054;
    --fmstr-cmp-real-polls-violet-300: #9777e0;
    --fmstr-cmp-real-polls-violet-500: #7f56d9;
    --fmstr-cmp-real-polls-violet-600: #6941c6;
    --fmstr-cmp-real-polls-border-light: #eaecf0;
    --fmstr-cmp-real-polls-border-medium: #d0d5dd;
    --fmstr-cmp-real-polls-fs-xs: 12px;
    --fmstr-cmp-real-polls-fs-sm: 14px;
    --fmstr-cmp-real-polls-fs-md: 16px;
    --fmstr-cmp-real-polls-fs-2xl: 24px;
    --fmstr-cmp-real-polls-fs-3xl: 36px;
    --fmstr-cmp-real-polls-fw-semibold: 600;
    --fmstr-cmp-real-polls-fw-bold: 700;
    --fmstr-cmp-real-polls-lh-md: 24px;
    --fmstr-cmp-real-polls-lh-2xl: 32px;
    --fmstr-cmp-real-polls-space-1: 4px;
    --fmstr-cmp-real-polls-space-2: 8px;
    --fmstr-cmp-real-polls-space-3: 12px;
    --fmstr-cmp-real-polls-space-4: 16px;
    --fmstr-cmp-real-polls-space-5: 20px;
    --fmstr-cmp-real-polls-space-6: 24px;
    --fmstr-cmp-real-polls-space-10: 40px;
    --fmstr-cmp-real-polls-space-12: 48px;
    --fmstr-cmp-real-polls-space-16: 64px;
    --fmstr-cmp-real-polls-r-md: 8px;
    --fmstr-cmp-real-polls-r-xl: 12px;
    --fmstr-cmp-real-polls-r-2xl: 16px;
    --fmstr-cmp-real-polls-r-full: 9999px;
    padding: var(--fmstr-cmp-real-polls-space-16) var(--fmstr-cmp-real-polls-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-real-polls-fg-1);
  }
  .fmstr-cmp-real-polls *, .fmstr-cmp-real-polls *::before, .fmstr-cmp-real-polls *::after { box-sizing: border-box; }

  .fmstr-cmp-real-polls__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-real-polls__header {
    margin: 0 auto var(--fmstr-cmp-real-polls-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-real-polls__title {
    font-size: var(--fmstr-cmp-real-polls-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-real-polls-fw-semibold);
    margin: 0 0 var(--fmstr-cmp-real-polls-space-3);
  }
  .fmstr-cmp-real-polls__intro {
    font-size: var(--fmstr-cmp-real-polls-fs-md);
    line-height: var(--fmstr-cmp-real-polls-lh-md);
    color: var(--fmstr-cmp-real-polls-fg-2);
    margin: 0;
  }

  .fmstr-cmp-real-polls__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--fmstr-cmp-real-polls-space-4);
  }

  .fmstr-cmp-real-polls__col {
    display: flex; flex-direction: column;
    gap: var(--fmstr-cmp-real-polls-space-3);
  }

  .fmstr-cmp-real-polls__card {
    background: var(--fmstr-cmp-real-polls-bg-card);
    border: 1px solid var(--fmstr-cmp-real-polls-border-light);
    border-radius: var(--fmstr-cmp-real-polls-r-2xl);
    display: flex; flex-direction: column;
    overflow: hidden;
    flex: 1;
  }

  .fmstr-cmp-real-polls__head {
    padding: var(--fmstr-cmp-real-polls-space-5) var(--fmstr-cmp-real-polls-space-5) var(--fmstr-cmp-real-polls-space-3);
    border-bottom: 1px solid var(--fmstr-cmp-real-polls-border-light);
  }

  .fmstr-cmp-real-polls__cat {
    display: inline-block;
    padding: var(--fmstr-cmp-real-polls-space-1) var(--fmstr-cmp-real-polls-space-3);
    background: var(--fmstr-cmp-real-polls-bg-cat);
    color: var(--fmstr-cmp-real-polls-violet-600);
    border-radius: var(--fmstr-cmp-real-polls-r-full);
    font-size: var(--fmstr-cmp-real-polls-fs-xs);
    font-weight: var(--fmstr-cmp-real-polls-fw-bold);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: var(--fmstr-cmp-real-polls-space-2);
  }

  .fmstr-cmp-real-polls__card-title {
    font-size: var(--fmstr-cmp-real-polls-fs-md);
    line-height: var(--fmstr-cmp-real-polls-lh-md);
    font-weight: var(--fmstr-cmp-real-polls-fw-semibold);
    color: var(--fmstr-cmp-real-polls-fg-1);
    margin: 0 0 var(--fmstr-cmp-real-polls-space-2);
    letter-spacing: -0.01em;
  }

  .fmstr-cmp-real-polls__meta {
    color: var(--fmstr-cmp-real-polls-fg-2);
    font-size: var(--fmstr-cmp-real-polls-fs-sm);
    margin: 0 0 var(--fmstr-cmp-real-polls-space-1);
  }
  .fmstr-cmp-real-polls__meta b { color: var(--fmstr-cmp-real-polls-fg-strong); font-weight: var(--fmstr-cmp-real-polls-fw-semibold); }

  .fmstr-cmp-real-polls__pills {
    display: flex; gap: var(--fmstr-cmp-real-polls-space-1);
    margin-top: var(--fmstr-cmp-real-polls-space-2);
    flex-wrap: wrap;
  }
  .fmstr-cmp-real-polls__pill {
    padding: var(--fmstr-cmp-real-polls-space-1) var(--fmstr-cmp-real-polls-space-2);
    background: var(--fmstr-cmp-real-polls-bg-pill);
    border: 1px solid var(--fmstr-cmp-real-polls-border-medium);
    border-radius: var(--fmstr-cmp-real-polls-r-full);
    font-size: var(--fmstr-cmp-real-polls-fs-xs);
    font-weight: var(--fmstr-cmp-real-polls-fw-semibold);
    color: var(--fmstr-cmp-real-polls-fg-strong);
  }

  .fmstr-cmp-real-polls__body {
    padding: var(--fmstr-cmp-real-polls-space-4) var(--fmstr-cmp-real-polls-space-5);
    flex: 1;
  }
  .fmstr-cmp-real-polls__qa {
    padding: var(--fmstr-cmp-real-polls-space-3) 0;
    border-bottom: 1px dashed var(--fmstr-cmp-real-polls-border-light);
  }
  .fmstr-cmp-real-polls__qa:last-child { border-bottom: 0; }
  .fmstr-cmp-real-polls__qn {
    font-size: var(--fmstr-cmp-real-polls-fs-xs);
    font-weight: var(--fmstr-cmp-real-polls-fw-bold);
    color: var(--fmstr-cmp-real-polls-violet-600);
    letter-spacing: 0.04em;
    margin-bottom: var(--fmstr-cmp-real-polls-space-1);
  }
  .fmstr-cmp-real-polls__qt {
    font-size: var(--fmstr-cmp-real-polls-fs-sm);
    line-height: var(--fmstr-cmp-real-polls-lh-md);
    color: var(--fmstr-cmp-real-polls-fg-strong);
  }

  .fmstr-cmp-real-polls__foot {
    padding: var(--fmstr-cmp-real-polls-space-3) var(--fmstr-cmp-real-polls-space-5);
    border-top: 1px solid var(--fmstr-cmp-real-polls-border-light);
    background: var(--fmstr-cmp-real-polls-bg-foot);
    font-size: var(--fmstr-cmp-real-polls-fs-xs);
    color: var(--fmstr-cmp-real-polls-fg-2);
    text-align: center;
  }

  .fmstr-cmp-real-polls__cta {
    display: flex; align-items: center; justify-content: center; gap: var(--fmstr-cmp-real-polls-space-2);
    padding: var(--fmstr-cmp-real-polls-space-3) var(--fmstr-cmp-real-polls-space-4);
    background: var(--fmstr-cmp-real-polls-violet-500);
    color: #ffffff;
    border-radius: var(--fmstr-cmp-real-polls-r-full);
    font-weight: var(--fmstr-cmp-real-polls-fw-semibold);
    font-size: var(--fmstr-cmp-real-polls-fs-sm);
    text-decoration: none;
    transition: background-color 120ms ease;
  }
  .fmstr-cmp-real-polls__cta:hover { background: var(--fmstr-cmp-real-polls-violet-600); color: #ffffff; }

  @media (max-width: 960px) {
    .fmstr-cmp-real-polls__grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 760px) {
    .fmstr-cmp-real-polls { padding: var(--fmstr-cmp-real-polls-space-12) var(--fmstr-cmp-real-polls-space-4); }
    .fmstr-cmp-real-polls__title { font-size: var(--fmstr-cmp-real-polls-fs-2xl); line-height: var(--fmstr-cmp-real-polls-lh-2xl); }
    .fmstr-cmp-real-polls__grid { grid-template-columns: 1fr; }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-poll-attributes {
    --fmstr-cmp-poll-attributes-bg-section: #f9fafb;
    --fmstr-cmp-poll-attributes-bg-card: #ffffff;
    --fmstr-cmp-poll-attributes-bg-tile: #f7f3ff;
    --fmstr-cmp-poll-attributes-bg-chip: #f2f4f7;
    --fmstr-cmp-poll-attributes-fg-1: #101828;
    --fmstr-cmp-poll-attributes-fg-2: #475467;
    --fmstr-cmp-poll-attributes-fg-3: #697586;
    --fmstr-cmp-poll-attributes-fg-strong: #344054;
    --fmstr-cmp-poll-attributes-violet-600: #6941c6;
    --fmstr-cmp-poll-attributes-border-light: #eaecf0;
    --fmstr-cmp-poll-attributes-fs-xs: 12px;
    --fmstr-cmp-poll-attributes-fs-sm: 14px;
    --fmstr-cmp-poll-attributes-fs-md: 16px;
    --fmstr-cmp-poll-attributes-fs-lg: 18px;
    --fmstr-cmp-poll-attributes-fs-2xl: 24px;
    --fmstr-cmp-poll-attributes-fs-3xl: 36px;
    --fmstr-cmp-poll-attributes-fw-medium: 500;
    --fmstr-cmp-poll-attributes-fw-semibold: 600;
    --fmstr-cmp-poll-attributes-fw-bold: 700;
    --fmstr-cmp-poll-attributes-lh-md: 24px;
    --fmstr-cmp-poll-attributes-lh-2xl: 32px;
    --fmstr-cmp-poll-attributes-space-1: 4px;
    --fmstr-cmp-poll-attributes-space-2: 8px;
    --fmstr-cmp-poll-attributes-space-3: 12px;
    --fmstr-cmp-poll-attributes-space-4: 16px;
    --fmstr-cmp-poll-attributes-space-5: 20px;
    --fmstr-cmp-poll-attributes-space-6: 24px;
    --fmstr-cmp-poll-attributes-space-7: 28px;
    --fmstr-cmp-poll-attributes-space-10: 40px;
    --fmstr-cmp-poll-attributes-space-12: 48px;
    --fmstr-cmp-poll-attributes-space-16: 64px;
    --fmstr-cmp-poll-attributes-r-md: 8px;
    --fmstr-cmp-poll-attributes-r-2xl: 16px;
    --fmstr-cmp-poll-attributes-r-3xl: 24px;
    --fmstr-cmp-poll-attributes-r-full: 9999px;
    --fmstr-cmp-poll-attributes-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

    background: var(--fmstr-cmp-poll-attributes-bg-section);
    padding: var(--fmstr-cmp-poll-attributes-space-16) var(--fmstr-cmp-poll-attributes-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-poll-attributes-fg-1);
  }
  .fmstr-cmp-poll-attributes *, .fmstr-cmp-poll-attributes *::before, .fmstr-cmp-poll-attributes *::after { box-sizing: border-box; }

  .fmstr-cmp-poll-attributes__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-poll-attributes__header {
    margin: 0 auto var(--fmstr-cmp-poll-attributes-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-poll-attributes__title {
    font-size: var(--fmstr-cmp-poll-attributes-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-poll-attributes-fw-semibold);
    margin: 0 0 var(--fmstr-cmp-poll-attributes-space-3);
  }
  .fmstr-cmp-poll-attributes__intro {
    font-size: var(--fmstr-cmp-poll-attributes-fs-md);
    line-height: var(--fmstr-cmp-poll-attributes-lh-md);
    color: var(--fmstr-cmp-poll-attributes-fg-2);
    margin: 0;
  }

  .fmstr-cmp-poll-attributes__list {
    background: var(--fmstr-cmp-poll-attributes-bg-card);
    border: 1px solid var(--fmstr-cmp-poll-attributes-border-light);
    border-radius: var(--fmstr-cmp-poll-attributes-r-3xl);
    padding: var(--fmstr-cmp-poll-attributes-space-3) var(--fmstr-cmp-poll-attributes-space-7);
    box-shadow: var(--fmstr-cmp-poll-attributes-shadow-md);
  }

  .fmstr-cmp-poll-attributes__row {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: var(--fmstr-cmp-poll-attributes-space-6);
    padding: var(--fmstr-cmp-poll-attributes-space-6) 0;
    border-bottom: 1px solid var(--fmstr-cmp-poll-attributes-border-light);
    align-items: start;
  }
  .fmstr-cmp-poll-attributes__row:last-child { border-bottom: 0; }

  .fmstr-cmp-poll-attributes__label {
    display: flex; gap: var(--fmstr-cmp-poll-attributes-space-3); align-items: start;
  }
  .fmstr-cmp-poll-attributes__tile {
    flex: 0 0 40px;
    width: 40px; height: 40px;
    border-radius: var(--fmstr-cmp-poll-attributes-r-md);
    background: var(--fmstr-cmp-poll-attributes-bg-tile);
    color: var(--fmstr-cmp-poll-attributes-violet-600);
    display: flex; align-items: center; justify-content: center;
  }
  .fmstr-cmp-poll-attributes__label-text strong {
    display: block;
    font-size: var(--fmstr-cmp-poll-attributes-fs-md);
    color: var(--fmstr-cmp-poll-attributes-fg-1);
    margin-bottom: var(--fmstr-cmp-poll-attributes-space-1);
    font-weight: var(--fmstr-cmp-poll-attributes-fw-semibold);
  }
  .fmstr-cmp-poll-attributes__label-text span {
    font-size: var(--fmstr-cmp-poll-attributes-fs-sm);
    color: var(--fmstr-cmp-poll-attributes-fg-3);
  }

  .fmstr-cmp-poll-attributes__value p {
    color: var(--fmstr-cmp-poll-attributes-fg-strong);
    font-size: var(--fmstr-cmp-poll-attributes-fs-md);
    line-height: var(--fmstr-cmp-poll-attributes-lh-md);
    margin: 0 0 var(--fmstr-cmp-poll-attributes-space-3);
  }
  .fmstr-cmp-poll-attributes__chips {
    display: flex; flex-wrap: wrap; gap: var(--fmstr-cmp-poll-attributes-space-2);
  }
  .fmstr-cmp-poll-attributes__chip {
    padding: var(--fmstr-cmp-poll-attributes-space-1) var(--fmstr-cmp-poll-attributes-space-3);
    background: var(--fmstr-cmp-poll-attributes-bg-chip);
    border: 1px solid var(--fmstr-cmp-poll-attributes-border-light);
    border-radius: var(--fmstr-cmp-poll-attributes-r-full);
    font-size: var(--fmstr-cmp-poll-attributes-fs-xs);
    font-weight: var(--fmstr-cmp-poll-attributes-fw-medium);
    color: var(--fmstr-cmp-poll-attributes-fg-strong);
  }

  @media (max-width: 760px) {
    .fmstr-cmp-poll-attributes { padding: var(--fmstr-cmp-poll-attributes-space-12) var(--fmstr-cmp-poll-attributes-space-4); }
    .fmstr-cmp-poll-attributes__title { font-size: var(--fmstr-cmp-poll-attributes-fs-2xl); line-height: var(--fmstr-cmp-poll-attributes-lh-2xl); }
    .fmstr-cmp-poll-attributes__row { grid-template-columns: 1fr; gap: var(--fmstr-cmp-poll-attributes-space-3); }
    .fmstr-cmp-poll-attributes__list { padding: var(--fmstr-cmp-poll-attributes-space-2) var(--fmstr-cmp-poll-attributes-space-5); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-agents-api {

    --fmstr-cmp-agents-api-bg-card-top: #ffffff;
    --fmstr-cmp-agents-api-bg-card-bot: #fbf8ff;
    --fmstr-cmp-agents-api-bg-eyebrow: #f4ebff;
    --fmstr-cmp-agents-api-bg-chip: #ffffff;
    --fmstr-cmp-agents-api-fg-1: #101828;
    --fmstr-cmp-agents-api-fg-2: #475467;
    --fmstr-cmp-agents-api-fg-strong: #344054;
    --fmstr-cmp-agents-api-violet-300: #9777e0;
    --fmstr-cmp-agents-api-violet-500: #7f56d9;
    --fmstr-cmp-agents-api-violet-600: #6941c6;
    --fmstr-cmp-agents-api-ink: #101828;
    --fmstr-cmp-agents-api-border-light: #eaecf0;
    --fmstr-cmp-agents-api-border-medium: #d0d5dd;
    --fmstr-cmp-agents-api-fs-xs: 12px;
    --fmstr-cmp-agents-api-fs-sm: 14px;
    --fmstr-cmp-agents-api-fs-md: 16px;
    --fmstr-cmp-agents-api-fs-lg: 18px;
    --fmstr-cmp-agents-api-fs-xl: 20px;
    --fmstr-cmp-agents-api-fs-2xl: 24px;
    --fmstr-cmp-agents-api-fs-3xl: 36px;
    --fmstr-cmp-agents-api-fw-semibold: 600;
    --fmstr-cmp-agents-api-fw-bold: 700;
    --fmstr-cmp-agents-api-lh-md: 24px;
    --fmstr-cmp-agents-api-lh-lg: 28px;
    --fmstr-cmp-agents-api-lh-xl: 30px;
    --fmstr-cmp-agents-api-lh-2xl: 32px;
    --fmstr-cmp-agents-api-space-1: 4px;
    --fmstr-cmp-agents-api-space-2: 8px;
    --fmstr-cmp-agents-api-space-3: 12px;
    --fmstr-cmp-agents-api-space-4: 16px;
    --fmstr-cmp-agents-api-space-5: 20px;
    --fmstr-cmp-agents-api-space-6: 24px;
    --fmstr-cmp-agents-api-space-8: 32px;
    --fmstr-cmp-agents-api-space-10: 40px;
    --fmstr-cmp-agents-api-space-12: 48px;
    --fmstr-cmp-agents-api-space-16: 64px;
    --fmstr-cmp-agents-api-r-md: 8px;
    --fmstr-cmp-agents-api-r-2xl: 16px;
    --fmstr-cmp-agents-api-r-full: 9999px;
    --fmstr-cmp-agents-api-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
    padding: var(--fmstr-cmp-agents-api-space-16) var(--fmstr-cmp-agents-api-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-agents-api-fg-1);
  }
  .fmstr-cmp-agents-api *, .fmstr-cmp-agents-api *::before, .fmstr-cmp-agents-api *::after { box-sizing: border-box; }

  .fmstr-cmp-agents-api__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-agents-api__header {
    margin: 0 auto var(--fmstr-cmp-agents-api-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-agents-api__eyebrow {
    display: inline-block;
    background: var(--fmstr-cmp-agents-api-bg-eyebrow);
    color: var(--fmstr-cmp-agents-api-violet-600);
    border-radius: var(--fmstr-cmp-agents-api-r-full);
    padding: var(--fmstr-cmp-agents-api-space-1) var(--fmstr-cmp-agents-api-space-3);
    font-size: var(--fmstr-cmp-agents-api-fs-xs);
    font-weight: var(--fmstr-cmp-agents-api-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-agents-api-space-4);
  }

  .fmstr-cmp-agents-api__title {
    font-size: var(--fmstr-cmp-agents-api-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-agents-api-fw-semibold);
    margin: 0 0 var(--fmstr-cmp-agents-api-space-3);
  }
  .fmstr-cmp-agents-api__intro {
    font-size: var(--fmstr-cmp-agents-api-fs-md);
    line-height: var(--fmstr-cmp-agents-api-lh-md);
    color: var(--fmstr-cmp-agents-api-fg-2);
    margin: 0;
  }

  .fmstr-cmp-agents-api__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--fmstr-cmp-agents-api-space-5);
  }

  .fmstr-cmp-agents-api__card {
    background: linear-gradient(180deg, var(--fmstr-cmp-agents-api-bg-card-top) 0%, var(--fmstr-cmp-agents-api-bg-card-bot) 100%);
    border: 1px solid var(--fmstr-cmp-agents-api-border-light);
    border-radius: var(--fmstr-cmp-agents-api-r-2xl);
    padding: var(--fmstr-cmp-agents-api-space-8);
    transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
  }
  .fmstr-cmp-agents-api__card:hover {
    border-color: var(--fmstr-cmp-agents-api-violet-300);
    box-shadow: var(--fmstr-cmp-agents-api-shadow-md);
    transform: translateY(-2px);
  }

  .fmstr-cmp-agents-api__badge {
    display: inline-flex; align-items: center; gap: var(--fmstr-cmp-agents-api-space-1);
    padding: var(--fmstr-cmp-agents-api-space-1) var(--fmstr-cmp-agents-api-space-3);
    background: var(--fmstr-cmp-agents-api-violet-500);
    color: #ffffff;
    border-radius: var(--fmstr-cmp-agents-api-r-full);
    font-size: var(--fmstr-cmp-agents-api-fs-xs);
    font-weight: var(--fmstr-cmp-agents-api-fw-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-agents-api-space-4);
  }
  .fmstr-cmp-agents-api__badge--alt { background: var(--fmstr-cmp-agents-api-ink); color: #ffffff; }

  .fmstr-cmp-agents-api__card-title {
    font-size: var(--fmstr-cmp-agents-api-fs-xl);
    line-height: var(--fmstr-cmp-agents-api-lh-xl);
    font-weight: var(--fmstr-cmp-agents-api-fw-semibold);
    color: var(--fmstr-cmp-agents-api-fg-1);
    margin: 0 0 var(--fmstr-cmp-agents-api-space-3);
    letter-spacing: -0.01em;
  }

  .fmstr-cmp-agents-api__chips {
    display: flex; gap: var(--fmstr-cmp-agents-api-space-2); flex-wrap: wrap;
    margin: 0 0 var(--fmstr-cmp-agents-api-space-4);
  }
  .fmstr-cmp-agents-api__chip {
    display: inline-flex; align-items: center;
    padding: var(--fmstr-cmp-agents-api-space-1) var(--fmstr-cmp-agents-api-space-3);
    background: var(--fmstr-cmp-agents-api-bg-chip);
    border: 1px solid var(--fmstr-cmp-agents-api-border-medium);
    border-radius: var(--fmstr-cmp-agents-api-r-full);
    font-size: var(--fmstr-cmp-agents-api-fs-xs);
    font-weight: var(--fmstr-cmp-agents-api-fw-semibold);
    color: var(--fmstr-cmp-agents-api-fg-strong);
  }

  .fmstr-cmp-agents-api__body {
    color: var(--fmstr-cmp-agents-api-fg-2);
    font-size: var(--fmstr-cmp-agents-api-fs-md);
    line-height: var(--fmstr-cmp-agents-api-lh-md);
    margin: 0 0 var(--fmstr-cmp-agents-api-space-4);
  }

  .fmstr-cmp-agents-api__cta {
    display: inline-flex; align-items: center; gap: var(--fmstr-cmp-agents-api-space-1);
    color: var(--fmstr-cmp-agents-api-violet-600);
    font-weight: var(--fmstr-cmp-agents-api-fw-semibold);
    font-size: var(--fmstr-cmp-agents-api-fs-sm);
    text-decoration: none;
  }
  .fmstr-cmp-agents-api__cta:hover { color: var(--fmstr-cmp-agents-api-violet-500); text-decoration: underline; }

  @media (max-width: 760px) {
    .fmstr-cmp-agents-api { padding: var(--fmstr-cmp-agents-api-space-12) var(--fmstr-cmp-agents-api-space-4); }
    .fmstr-cmp-agents-api__title { font-size: var(--fmstr-cmp-agents-api-fs-2xl); line-height: var(--fmstr-cmp-agents-api-lh-2xl); }
    .fmstr-cmp-agents-api__grid { grid-template-columns: 1fr; }
    .fmstr-cmp-agents-api__card { padding: var(--fmstr-cmp-agents-api-space-6); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-templates-grid {
    --fmstr-cmp-templates-grid-bg-section: #f9fafb;
    --fmstr-cmp-templates-grid-bg-card: #ffffff;
    --fmstr-cmp-templates-grid-bg-tile: #f7f3ff;
    --fmstr-cmp-templates-grid-fg-1: #101828;
    --fmstr-cmp-templates-grid-fg-2: #475467;
    --fmstr-cmp-templates-grid-fg-3: #697586;
    --fmstr-cmp-templates-grid-fg-muted: #98a2b3;
    --fmstr-cmp-templates-grid-violet-300: #9777e0;
    --fmstr-cmp-templates-grid-violet-500: #7f56d9;
    --fmstr-cmp-templates-grid-violet-600: #6941c6;
    --fmstr-cmp-templates-grid-border-light: #eaecf0;
    --fmstr-cmp-templates-grid-fs-xs: 12px;
    --fmstr-cmp-templates-grid-fs-sm: 14px;
    --fmstr-cmp-templates-grid-fs-md: 16px;
    --fmstr-cmp-templates-grid-fs-2xl: 24px;
    --fmstr-cmp-templates-grid-fs-3xl: 36px;
    --fmstr-cmp-templates-grid-fw-medium: 500;
    --fmstr-cmp-templates-grid-fw-semibold: 600;
    --fmstr-cmp-templates-grid-lh-md: 24px;
    --fmstr-cmp-templates-grid-lh-2xl: 32px;
    --fmstr-cmp-templates-grid-space-1: 4px;
    --fmstr-cmp-templates-grid-space-2: 8px;
    --fmstr-cmp-templates-grid-space-3: 12px;
    --fmstr-cmp-templates-grid-space-4: 16px;
    --fmstr-cmp-templates-grid-space-5: 20px;
    --fmstr-cmp-templates-grid-space-6: 24px;
    --fmstr-cmp-templates-grid-space-10: 40px;
    --fmstr-cmp-templates-grid-space-12: 48px;
    --fmstr-cmp-templates-grid-space-16: 64px;
    --fmstr-cmp-templates-grid-r-md: 8px;
    --fmstr-cmp-templates-grid-r-xl: 12px;
    --fmstr-cmp-templates-grid-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

    background: var(--fmstr-cmp-templates-grid-bg-section);
    padding: var(--fmstr-cmp-templates-grid-space-16) var(--fmstr-cmp-templates-grid-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-templates-grid-fg-1);
  }
  .fmstr-cmp-templates-grid *, .fmstr-cmp-templates-grid *::before, .fmstr-cmp-templates-grid *::after { box-sizing: border-box; }

  .fmstr-cmp-templates-grid__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-templates-grid__header {
    margin: 0 auto var(--fmstr-cmp-templates-grid-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-templates-grid__title {
    font-size: var(--fmstr-cmp-templates-grid-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-templates-grid-fw-semibold);
    margin: 0 0 var(--fmstr-cmp-templates-grid-space-3);
  }
  .fmstr-cmp-templates-grid__intro {
    font-size: var(--fmstr-cmp-templates-grid-fs-md);
    line-height: var(--fmstr-cmp-templates-grid-lh-md);
    color: var(--fmstr-cmp-templates-grid-fg-2);
    margin: 0;
  }

  .fmstr-cmp-templates-grid__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--fmstr-cmp-templates-grid-space-3);
  }

  .fmstr-cmp-templates-grid__card {
    display: grid;
    grid-template-columns: 40px 1fr 24px;
    gap: var(--fmstr-cmp-templates-grid-space-4);
    align-items: center;
    padding: var(--fmstr-cmp-templates-grid-space-4) var(--fmstr-cmp-templates-grid-space-5);
    background: var(--fmstr-cmp-templates-grid-bg-card);
    border: 1px solid var(--fmstr-cmp-templates-grid-border-light);
    border-radius: var(--fmstr-cmp-templates-grid-r-xl);
    text-decoration: none;
    transition: border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
  }
  .fmstr-cmp-templates-grid__card:hover {
    border-color: var(--fmstr-cmp-templates-grid-violet-300);
    transform: translateX(2px);
    box-shadow: var(--fmstr-cmp-templates-grid-shadow-md);
  }

  .fmstr-cmp-templates-grid__icon {
    width: 40px; height: 40px;
    border-radius: var(--fmstr-cmp-templates-grid-r-md);
    background: var(--fmstr-cmp-templates-grid-bg-tile);
    color: var(--fmstr-cmp-templates-grid-violet-600);
    display: flex; align-items: center; justify-content: center;
  }

  .fmstr-cmp-templates-grid__card-title {
    margin: 0;
    font-weight: var(--fmstr-cmp-templates-grid-fw-semibold);
    color: var(--fmstr-cmp-templates-grid-fg-1);
    font-size: var(--fmstr-cmp-templates-grid-fs-md);
  }
  .fmstr-cmp-templates-grid__card-sub {
    font-size: var(--fmstr-cmp-templates-grid-fs-sm);
    color: var(--fmstr-cmp-templates-grid-fg-2);
    margin-top: 2px;
  }

  .fmstr-cmp-templates-grid__arrow {
    color: var(--fmstr-cmp-templates-grid-fg-muted);
    display: flex; align-items: center; justify-content: flex-end;
  }

  .fmstr-cmp-templates-grid__footer {
    margin-top: var(--fmstr-cmp-templates-grid-space-5);
    text-align: center;
  }
  .fmstr-cmp-templates-grid__footer-link {
    color: var(--fmstr-cmp-templates-grid-violet-600);
    font-weight: var(--fmstr-cmp-templates-grid-fw-semibold);
    font-size: var(--fmstr-cmp-templates-grid-fs-md);
    text-decoration: none;
  }
  .fmstr-cmp-templates-grid__footer-link:hover { color: var(--fmstr-cmp-templates-grid-violet-500); text-decoration: underline; }

  @media (max-width: 760px) {
    .fmstr-cmp-templates-grid { padding: var(--fmstr-cmp-templates-grid-space-12) var(--fmstr-cmp-templates-grid-space-4); }
    .fmstr-cmp-templates-grid__title { font-size: var(--fmstr-cmp-templates-grid-fs-2xl); line-height: var(--fmstr-cmp-templates-grid-lh-2xl); }
    .fmstr-cmp-templates-grid__grid { grid-template-columns: 1fr; }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-more-ai-tools {

    --fmstr-cmp-more-ai-tools-bg-card: #ffffff;
    --fmstr-cmp-more-ai-tools-bg-tile: #f7f3ff;
    --fmstr-cmp-more-ai-tools-fg-1: #101828;
    --fmstr-cmp-more-ai-tools-fg-2: #475467;
    --fmstr-cmp-more-ai-tools-violet-300: #9777e0;
    --fmstr-cmp-more-ai-tools-violet-500: #7f56d9;
    --fmstr-cmp-more-ai-tools-violet-600: #6941c6;
    --fmstr-cmp-more-ai-tools-border-light: #eaecf0;
    --fmstr-cmp-more-ai-tools-fs-sm: 14px;
    --fmstr-cmp-more-ai-tools-fs-md: 16px;
    --fmstr-cmp-more-ai-tools-fs-2xl: 24px;
    --fmstr-cmp-more-ai-tools-fs-3xl: 36px;
    --fmstr-cmp-more-ai-tools-fw-semibold: 600;
    --fmstr-cmp-more-ai-tools-lh-md: 24px;
    --fmstr-cmp-more-ai-tools-lh-2xl: 32px;
    --fmstr-cmp-more-ai-tools-space-1: 4px;
    --fmstr-cmp-more-ai-tools-space-2: 8px;
    --fmstr-cmp-more-ai-tools-space-3: 12px;
    --fmstr-cmp-more-ai-tools-space-4: 16px;
    --fmstr-cmp-more-ai-tools-space-5: 20px;
    --fmstr-cmp-more-ai-tools-space-6: 24px;
    --fmstr-cmp-more-ai-tools-space-10: 40px;
    --fmstr-cmp-more-ai-tools-space-12: 48px;
    --fmstr-cmp-more-ai-tools-space-16: 64px;
    --fmstr-cmp-more-ai-tools-r-md: 8px;
    --fmstr-cmp-more-ai-tools-r-xl: 12px;
    --fmstr-cmp-more-ai-tools-r-2xl: 16px;
    --fmstr-cmp-more-ai-tools-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
    padding: var(--fmstr-cmp-more-ai-tools-space-16) var(--fmstr-cmp-more-ai-tools-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-more-ai-tools-fg-1);
  }
  .fmstr-cmp-more-ai-tools *, .fmstr-cmp-more-ai-tools *::before, .fmstr-cmp-more-ai-tools *::after { box-sizing: border-box; }

  .fmstr-cmp-more-ai-tools__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-more-ai-tools__header {
    margin: 0 auto var(--fmstr-cmp-more-ai-tools-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-more-ai-tools__title {
    font-size: var(--fmstr-cmp-more-ai-tools-fs-3xl);
    line-height: 44px;
    letter-spacing: -0.02em;
    font-weight: var(--fmstr-cmp-more-ai-tools-fw-semibold);
    margin: 0;
  }

  .fmstr-cmp-more-ai-tools__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--fmstr-cmp-more-ai-tools-space-4);
  }

  .fmstr-cmp-more-ai-tools__tile {
    display: flex; flex-direction: column; gap: var(--fmstr-cmp-more-ai-tools-space-2);
    background: var(--fmstr-cmp-more-ai-tools-bg-card);
    border: 1px solid var(--fmstr-cmp-more-ai-tools-border-light);
    border-radius: var(--fmstr-cmp-more-ai-tools-r-2xl);
    padding: var(--fmstr-cmp-more-ai-tools-space-5);
    text-decoration: none;
    color: inherit;
    transition: border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
  }
  .fmstr-cmp-more-ai-tools__tile:hover {
    border-color: var(--fmstr-cmp-more-ai-tools-violet-300);
    transform: translateY(-2px);
    box-shadow: var(--fmstr-cmp-more-ai-tools-shadow-md);
  }

  .fmstr-cmp-more-ai-tools__icon {
    width: 48px; height: 48px;
    border-radius: var(--fmstr-cmp-more-ai-tools-r-xl);
    background: var(--fmstr-cmp-more-ai-tools-bg-tile);
    color: var(--fmstr-cmp-more-ai-tools-violet-600);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: var(--fmstr-cmp-more-ai-tools-space-2);
  }

  .fmstr-cmp-more-ai-tools__tile-title {
    font-size: var(--fmstr-cmp-more-ai-tools-fs-md);
    line-height: var(--fmstr-cmp-more-ai-tools-lh-md);
    font-weight: var(--fmstr-cmp-more-ai-tools-fw-semibold);
    color: var(--fmstr-cmp-more-ai-tools-fg-1);
    margin: 0;
    letter-spacing: -0.01em;
  }
  .fmstr-cmp-more-ai-tools__tile-body {
    font-size: var(--fmstr-cmp-more-ai-tools-fs-sm);
    line-height: var(--fmstr-cmp-more-ai-tools-lh-md);
    color: var(--fmstr-cmp-more-ai-tools-fg-2);
    margin: 0 0 var(--fmstr-cmp-more-ai-tools-space-2);
  }

  .fmstr-cmp-more-ai-tools__cta {
    font-weight: var(--fmstr-cmp-more-ai-tools-fw-semibold);
    font-size: var(--fmstr-cmp-more-ai-tools-fs-sm);
    color: var(--fmstr-cmp-more-ai-tools-violet-600);
    margin-top: auto;
  }

  @media (max-width: 960px) {
    .fmstr-cmp-more-ai-tools__grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 760px) {
    .fmstr-cmp-more-ai-tools { padding: var(--fmstr-cmp-more-ai-tools-space-12) var(--fmstr-cmp-more-ai-tools-space-4); }
    .fmstr-cmp-more-ai-tools__title { font-size: var(--fmstr-cmp-more-ai-tools-fs-2xl); line-height: var(--fmstr-cmp-more-ai-tools-lh-2xl); }
    .fmstr-cmp-more-ai-tools__grid { grid-template-columns: 1fr; }
  }
</style>
