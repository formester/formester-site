<template>
  <div>
    <RawHtml :markup="c0_markup" :useContainer="false" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-vs" aria-labelledby="fmstr-cmp-fil-vs-h2">
            <div class="fmstr-cmp-fil-vs__container">
              <div class="fmstr-cmp-fil-vs__header">
                <h2 class="fmstr-cmp-fil-vs__h2" id="fmstr-cmp-fil-vs-h2">Formester Vs Fillout</h2>
              </div>
              <div class="fmstr-cmp-fil-vs__grid">
                <article class="fmstr-cmp-fil-vs__card">
                  <div class="fmstr-cmp-fil-vs__brand">
                    <img
                      src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://formester.com&amp;size=64"
                      alt="Formester logo"
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                    <h3 class="fmstr-cmp-fil-vs__name">Formester</h3>
                  </div>
                  <p class="fmstr-cmp-fil-vs__body">
                    Formester is a hosted form builder with a built-in AI generator, offline forms that install as an
                    app on phones and tablets, and 50 GB of file storage on the Business plan. Free includes unlimited
                    responses, the AI form creator, offline PWA install, and native payments. Personal at $12 a month
                    removes branding and adds conditional logic. Business at $45 a month covers unlimited responses, API
                    access, PDF exports, an MCP server, and 25 team seats.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-vs__card">
                  <div class="fmstr-cmp-fil-vs__brand">
                    <img
                      src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.fillout.com&amp;size=64"
                      alt="Fillout logo"
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                    <h3 class="fmstr-cmp-fil-vs__name">Fillout</h3>
                  </div>
                  <p class="fmstr-cmp-fil-vs__body">
                    Fillout is a hosted form builder best known for native two-way sync with Airtable, Notion, and
                    Google Sheets, and a generous free plan with 1,000 responses a month and unlimited forms. Pricing
                    climbs to $15 Starter, $40 Pro, and $75 Business. Strong fit for teams whose work already lives
                    inside Airtable or Notion. No native offline mode and no dedicated mobile app.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TrustSeals
      label="Trusted by leading organisations"
      :showTrustBadges="false"
      :title="c2_title"
      :logos="c2_logos"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-glance" aria-labelledby="fmstr-cmp-fil-glance-heading">
            <div class="fmstr-cmp-fil-glance__container">
              <header class="fmstr-cmp-fil-glance__header">
                <span class="fmstr-cmp-fil-glance__eyebrow">At a glance</span>
                <h2 id="fmstr-cmp-fil-glance-heading" class="fmstr-cmp-fil-glance__heading">
                  Formester vs Fillout, in five attributes.
                </h2>
                <p class="fmstr-cmp-fil-glance__sub">
                  The deciders before you scroll the rest of this Fillout alternative comparison.
                </p>
              </header>

              <div class="fmstr-cmp-fil-glance__table-wrap">
                <table class="fmstr-cmp-fil-glance__table">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th class="fmstr-cmp-fil-glance__col-formester">
                        <span style="display: inline-flex; align-items: center; gap: 8px"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://formester.com&amp;size=64"
                            alt="Formester logo"
                            width="20"
                            height="20"
                            loading="lazy"
                            style="width: 20px; height: 20px; border-radius: 4px; display: block; flex-shrink: 0"
                          />Formester</span
                        >
                      </th>
                      <th>
                        <span style="display: inline-flex; align-items: center; gap: 8px"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.fillout.com&amp;size=64"
                            alt="Fillout logo"
                            width="20"
                            height="20"
                            loading="lazy"
                            style="width: 20px; height: 20px; border-radius: 4px; display: block; flex-shrink: 0"
                          />Fillout</span
                        >
                      </th>
                      <th>Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fmstr-cmp-fil-glance__attr">Free response cap</td>
                      <td class="fmstr-cmp-fil-glance__cell fmstr-cmp-fil-glance__cell--formester">Unlimited</td>
                      <td class="fmstr-cmp-fil-glance__cell">1,000 / month</td>
                      <td class="fmstr-cmp-fil-glance__verdict fmstr-cmp-fil-glance__verdict--wins-comp">
                        Formester wins
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-fil-glance__attr">AI form generator on free</td>
                      <td class="fmstr-cmp-fil-glance__cell fmstr-cmp-fil-glance__cell--formester">Yes</td>
                      <td class="fmstr-cmp-fil-glance__cell">Yes</td>
                      <td class="fmstr-cmp-fil-glance__verdict fmstr-cmp-fil-glance__verdict--wins-tied">Tied</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-fil-glance__attr">Native payment collection on free</td>
                      <td class="fmstr-cmp-fil-glance__cell fmstr-cmp-fil-glance__cell--formester">Yes</td>
                      <td class="fmstr-cmp-fil-glance__cell">Yes</td>
                      <td class="fmstr-cmp-fil-glance__verdict fmstr-cmp-fil-glance__verdict--wins-tied">Tied</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-fil-glance__attr">REST API + MCP server</td>
                      <td class="fmstr-cmp-fil-glance__cell fmstr-cmp-fil-glance__cell--formester">
                        REST + MCP (Business)
                      </td>
                      <td class="fmstr-cmp-fil-glance__cell">REST only</td>
                      <td class="fmstr-cmp-fil-glance__verdict fmstr-cmp-fil-glance__verdict--wins-formester">
                        Formester wins
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-fil-glance__attr">Offline form mode</td>
                      <td class="fmstr-cmp-fil-glance__cell fmstr-cmp-fil-glance__cell--formester">
                        Yes (free, PWA install)
                      </td>
                      <td class="fmstr-cmp-fil-glance__cell">No</td>
                      <td class="fmstr-cmp-fil-glance__verdict fmstr-cmp-fil-glance__verdict--wins-formester">
                        Formester wins
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="fmstr-cmp-fil-glance__note">Always re-check live pricing pages before signing a contract.</p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-why-leave" aria-labelledby="fmstr-cmp-fil-why-leave-heading">
            <div class="fmstr-cmp-fil-why-leave__container">
              <header class="fmstr-cmp-fil-why-leave__header">
                <span class="fmstr-cmp-fil-why-leave__eyebrow">The honest read</span>
                <h2 id="fmstr-cmp-fil-why-leave-heading" class="fmstr-cmp-fil-why-leave__heading">
                  Why teams leave Fillout.
                </h2>
                <p class="fmstr-cmp-fil-why-leave__sub">
                  Four reasons teams switching to Formester have given us. Sourced from G2, Capterra, Reddit reviews and
                  vendor pricing pages, not made up.
                </p>
              </header>

              <div class="fmstr-cmp-fil-why-leave__grid">
                <article class="fmstr-cmp-fil-why-leave__card">
                  <div
                    aria-hidden="true"
                    style="
                      width: 40px;
                      height: 40px;
                      border-radius: 8px;
                      background: #f7f3ff;
                      border: 1px solid #e4d7ff;
                      display: grid;
                      place-items: center;
                      color: #6941c6;
                      margin-bottom: 14px;
                    "
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="2" x2="22" y1="2" y2="22" />
                      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                      <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
                      <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
                      <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
                      <path d="M5 13a10 10 0 0 1 5.24-2.76" />
                      <line x1="12" x2="12.01" y1="20" y2="20" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-fil-why-leave__title">No offline mode for mobile collection.</h3>
                  <p class="fmstr-cmp-fil-why-leave__body">
                    Fillout does not ship a native offline mobile app. Field teams collecting data without connectivity
                    (events, surveys, in-store) hit a wall the moment the network drops.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-leave__card">
                  <div
                    aria-hidden="true"
                    style="
                      width: 40px;
                      height: 40px;
                      border-radius: 8px;
                      background: #f7f3ff;
                      border: 1px solid #e4d7ff;
                      display: grid;
                      place-items: center;
                      color: #6941c6;
                      margin-bottom: 14px;
                    "
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-fil-why-leave__title">EU data residency only on higher tiers.</h3>
                  <p class="fmstr-cmp-fil-why-leave__body">
                    EU customers who need GDPR-grade data residency are pushed to the Team or Enterprise plans. Smaller
                    EU teams describe building workflows on Starter, then discovering they need to upgrade for
                    residency.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-leave__card">
                  <div
                    aria-hidden="true"
                    style="
                      width: 40px;
                      height: 40px;
                      border-radius: 8px;
                      background: #f7f3ff;
                      border: 1px solid #e4d7ff;
                      display: grid;
                      place-items: center;
                      color: #6941c6;
                      margin-bottom: 14px;
                    "
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-fil-why-leave__title">Fewer payment gateways than incumbents.</h3>
                  <p class="fmstr-cmp-fil-why-leave__body">
                    Fillout's payment integration list is narrower than Jotform's 40+ gateways. Teams running
                    international payment flows (Mollie, regional providers) hit gaps.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-leave__card">
                  <div
                    aria-hidden="true"
                    style="
                      width: 40px;
                      height: 40px;
                      border-radius: 8px;
                      background: #f7f3ff;
                      border: 1px solid #e4d7ff;
                      display: grid;
                      place-items: center;
                      color: #6941c6;
                      margin-bottom: 14px;
                    "
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-fil-why-leave__title">Pricing climbs fast above the free tier.</h3>
                  <p class="fmstr-cmp-fil-why-leave__body">
                    Free is generous (1,000 responses per month), but Starter is $15/mo, Pro $40/mo, Business $75/mo
                    yearly. The $480 to $900 jump from annual Pro ($480/yr) to annual Business ($900/yr) surprises teams
                    who expected a smoother ramp.
                  </p>
                  <p class="fmstr-cmp-fil-why-leave__source">
                    Numbers taken from the live fillout.com/pricing page; always re-verify before contract.
                  </p>
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
          <section class="fmstr-cmp-fil-pricing" aria-labelledby="fmstr-cmp-fil-pricing-heading">
            <div class="fmstr-cmp-fil-pricing__container">
              <header class="fmstr-cmp-fil-pricing__header">
                <span class="fmstr-cmp-fil-pricing__eyebrow">Pricing</span>
                <h2 id="fmstr-cmp-fil-pricing-heading" class="fmstr-cmp-fil-pricing__heading">
                  Fillout vs Formester pricing, plan by plan.
                </h2>
                <p class="fmstr-cmp-fil-pricing__sub">
                  Annual billing displayed where applicable. Numbers reflect live pricing pages; always re-verify before
                  contract.
                </p>
              </header>

              <div class="fmstr-cmp-fil-pricing__table-wrap">
                <table class="fmstr-cmp-fil-pricing__table">
                  <thead>
                    <tr>
                      <th>Tier</th>
                      <th class="fmstr-cmp-fil-pricing__col-formester">
                        <span style="display: inline-flex; align-items: center; gap: 8px"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://formester.com&amp;size=64"
                            alt="Formester logo"
                            width="20"
                            height="20"
                            loading="lazy"
                            style="width: 20px; height: 20px; border-radius: 4px; display: block; flex-shrink: 0"
                          />Formester</span
                        >
                      </th>
                      <th>
                        <span style="display: inline-flex; align-items: center; gap: 8px"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.fillout.com&amp;size=64"
                            alt="Fillout logo"
                            width="20"
                            height="20"
                            loading="lazy"
                            style="width: 20px; height: 20px; border-radius: 4px; display: block; flex-shrink: 0"
                          />Fillout</span
                        >
                      </th>
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="fmstr-cmp-fil-pricing__tier">Free</span></td>
                      <td class="fmstr-cmp-fil-pricing__cell--formester">
                        $0 · unlimited responses/mo, unlimited forms, AI generator, payments
                      </td>
                      <td>$0 · 1,000 responses/mo, unlimited forms, unlimited seats, AI generator</td>
                      <td class="fmstr-cmp-fil-pricing__note">
                        Formester lifts the response cap; Fillout keeps unlimited seats on every plan
                      </td>
                    </tr>
                    <tr>
                      <td><span class="fmstr-cmp-fil-pricing__tier">Entry paid</span></td>
                      <td class="fmstr-cmp-fil-pricing__cell--formester">
                        Personal · $12/mo annual, unlimited responses, conditional logic, brand removal
                      </td>
                      <td>Starter · $15/mo annual, 2,000 responses, custom branding</td>
                      <td class="fmstr-cmp-fil-pricing__note">
                        Formester lifts the cap; Fillout costs $3/mo more and stays at 2,000
                      </td>
                    </tr>
                    <tr>
                      <td><span class="fmstr-cmp-fil-pricing__tier">Mid tier</span></td>
                      <td class="fmstr-cmp-fil-pricing__cell--formester">
                        Business · $45/mo annual, unlimited responses, 25 seats, REST API + MCP, 50 GB
                      </td>
                      <td>Pro · $40/mo annual, includes more integrations and Pro features</td>
                      <td class="fmstr-cmp-fil-pricing__note">Pricing close; Formester adds MCP</td>
                    </tr>
                    <tr>
                      <td><span class="fmstr-cmp-fil-pricing__tier">Top tier</span></td>
                      <td class="fmstr-cmp-fil-pricing__cell--formester">Enterprise · custom (talk to sales)</td>
                      <td>
                        Business · $75/mo billed yearly ($900/yr), unlimited responses, unlimited seats, custom domain
                      </td>
                      <td class="fmstr-cmp-fil-pricing__note">Different model</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-api-mcp" aria-labelledby="fmstr-cmp-fil-api-mcp-title">
            <div class="fmstr-cmp-fil-api-mcp__container">
              <header class="fmstr-cmp-fil-api-mcp__header">
                <span class="fmstr-cmp-fil-api-mcp__eyebrow">For developers</span>
                <h2 id="fmstr-cmp-fil-api-mcp-title" class="fmstr-cmp-fil-api-mcp__title">
                  Your form data, ready for the AI you already use.
                </h2>
                <p class="fmstr-cmp-fil-api-mcp__intro">
                  Every Formester form ships with a REST API and an MCP server. Submissions don't stop at a CSV. The
                  Fillout alternative built for teams running AI agents on top of their data.
                </p>
              </header>

              <div class="fmstr-cmp-fil-api-mcp__grid">
                <article class="fmstr-cmp-fil-api-mcp__card">
                  <span class="fmstr-cmp-fil-api-mcp__icon" aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="6" cy="6" r="2.5"></circle>
                      <circle cx="18" cy="6" r="2.5"></circle>
                      <circle cx="12" cy="18" r="2.5"></circle>
                      <path d="M8 7l3 9M16 7l-3 9"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-fil-api-mcp__badge">MCP server</span>
                  <h3 class="fmstr-cmp-fil-api-mcp__card-title">
                    Plug Formester into Claude, ChatGPT, or any MCP-compatible model.
                  </h3>
                  <div class="fmstr-cmp-fil-api-mcp__chips">
                    <span class="fmstr-cmp-fil-api-mcp__chip">Claude</span>
                    <span class="fmstr-cmp-fil-api-mcp__chip">ChatGPT</span>
                    <span class="fmstr-cmp-fil-api-mcp__chip">Custom agents</span>
                  </div>
                  <p class="fmstr-cmp-fil-api-mcp__body">
                    Connect Formester to any MCP-compatible model and let it read your form submissions directly. Ask
                    Claude "which leads from this week's form look highest fit?", or have a custom agent score job
                    applications against the role brief and flag the top candidates for the recruiter.
                  </p>
                  <a class="fmstr-cmp-fil-api-mcp__cta" href="https://docs.formester.com/formester-mcp-server.html"
                    >Read the MCP docs →</a
                  >
                </article>

                <article class="fmstr-cmp-fil-api-mcp__card">
                  <span class="fmstr-cmp-fil-api-mcp__icon" aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                      <line x1="13" y1="4" x2="11" y2="20"></line>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-fil-api-mcp__badge fmstr-cmp-fil-api-mcp__badge--alt">REST API v2</span>
                  <h3 class="fmstr-cmp-fil-api-mcp__card-title">Or build directly on the REST API.</h3>
                  <div class="fmstr-cmp-fil-api-mcp__chips">
                    <span class="fmstr-cmp-fil-api-mcp__chip">Self-service token</span>
                    <span class="fmstr-cmp-fil-api-mcp__chip">Webhooks</span>
                    <span class="fmstr-cmp-fil-api-mcp__chip">Business plan +</span>
                  </div>
                  <p class="fmstr-cmp-fil-api-mcp__body">
                    Pull form submissions into your data warehouse, push pre-filled form URLs back from your CRM, or
                    build a custom enrichment pipeline. Self-service token at app.formester.com/api in two clicks. No
                    support ticket, no waiting.
                  </p>
                  <a class="fmstr-cmp-fil-api-mcp__cta" href="https://docs.formester.com/formester-api.html"
                    >Read the API docs →</a
                  >
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
          <section class="fmstr-cmp-fil-why-pick" aria-labelledby="fmstr-cmp-fil-why-pick-heading">
            <div class="fmstr-cmp-fil-why-pick__container">
              <header class="fmstr-cmp-fil-why-pick__header">
                <span class="fmstr-cmp-fil-why-pick__eyebrow">Why teams switch</span>
                <h2 id="fmstr-cmp-fil-why-pick-heading" class="fmstr-cmp-fil-why-pick__heading">
                  Why teams choose Formester over Fillout.
                </h2>
                <p class="fmstr-cmp-fil-why-pick__sub">
                  Eight reasons buyers searching for a Fillout alternative tell us they made the switch. Each item ties
                  to a specific Formester plan or feature, not a marketing line.
                </p>
              </header>

              <div class="fmstr-cmp-fil-why-pick__grid">
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3l1.9 5.6L19 10l-5.1 1.4L12 17l-1.9-5.6L5 10l5.1-1.4L12 3z" />
                      <path d="M19 3l.7 2.1L22 6l-2.3.9L19 9l-.7-2.1L16 6l2.3-.9L19 3z" />
                      <path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9L19 15z" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">AI form generator on the free plan</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    Prompt, PDF, or question list. Formester drafts the form in seconds, on the free plan.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="6" width="20" height="14" rx="2" />
                      <line x1="2" y1="11" x2="22" y2="11" />
                      <line x1="6" y1="16" x2="10" y2="16" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">Native payments included on the free plan</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    Stripe and PayPal integration on day one. No add-on, no upgrade. Most teams switching from Fillout
                    cite this as the deciding feature.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="12" cy="18" r="3" />
                      <line x1="6" y1="9" x2="6" y2="12" />
                      <line x1="18" y1="9" x2="18" y2="12" />
                      <path d="M6 12h12" />
                      <line x1="12" y1="12" x2="12" y2="15" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">Conditional logic on Personal at $12/mo annual</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    Field-level rules across inputs, not just section branching. Show, hide, skip, route, calculate.
                    Personal at $12/mo annual.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">REST API + MCP server for AI agents</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    Hosted REST API on Business plus an MCP server for Claude, ChatGPT, or any compatible model.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 15v4a2 2 0 002 2h14a2 2 0 002-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">Offline forms that install as PWAs</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    Field teams collect without signal. Submissions sync when the network returns. Free plan, no app
                    store install.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">Custom domain on Business, branded URL on Personal</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    Forms live on your domain, not a vendor URL. Personal unlocks a custom subdomain; Business unlocks
                    the full custom domain.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 5h9M9 3v2M11 5a10 10 0 01-6 9M6 8a6 6 0 006 4" />
                      <path d="M13 21l4-9 4 9M15 17h4" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">Multi-language with AI translation</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    180+ languages via AI translation on Business. One source form, respondent picks their language,
                    edits stay in sync.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-why-pick__card">
                  <span class="fmstr-cmp-fil-why-pick__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" /></svg
                  ></span>
                  <h3 class="fmstr-cmp-fil-why-pick__title">Privacy-first: no AI training on your data</h3>
                  <p class="fmstr-cmp-fil-why-pick__body">
                    GDPR, UK GDPR, and CCPA compliant. Customer Data is not used to train AI models. Honest about SOC 2
                    and ISO 27001, we do not certify them yet.
                  </p>
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
          <section class="fmstr-cmp-fil-switch" aria-labelledby="fmstr-cmp-fil-switch-heading">
            <div class="fmstr-cmp-fil-switch__container">
              <header class="fmstr-cmp-fil-switch__header">
                <span class="fmstr-cmp-fil-switch__eyebrow">Migration</span>
                <h2 id="fmstr-cmp-fil-switch-heading" class="fmstr-cmp-fil-switch__heading">
                  How to switch from Fillout to Formester in 3 steps.
                </h2>
                <p class="fmstr-cmp-fil-switch__sub">
                  From "I want to leave Fillout" to "the new form is live" without losing data or missing submissions.
                </p>
              </header>

              <div class="fmstr-cmp-fil-switch__grid">
                <article class="fmstr-cmp-fil-switch__step">
                  <span class="fmstr-cmp-fil-switch__num" aria-hidden="true">1</span>
                  <h3 class="fmstr-cmp-fil-switch__title">Export your existing entries.</h3>
                  <p class="fmstr-cmp-fil-switch__body">
                    In Fillout, open Forms → Submissions → Export CSV. Capture each form's responses as a CSV. Pull
                    integration logs (Airtable / Notion sync history) for reference.
                  </p>
                  <p class="fmstr-cmp-fil-switch__hint">
                    <strong>Time:</strong> 5 to 10 minutes for a typical 5-form workspace.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-switch__step">
                  <span class="fmstr-cmp-fil-switch__num" aria-hidden="true">2</span>
                  <h3 class="fmstr-cmp-fil-switch__title">Rebuild with the AI form generator.</h3>
                  <p class="fmstr-cmp-fil-switch__body">
                    Sign up for Formester (free, no card). Open the AI form generator, paste a description of the
                    Fillout form, or upload the questions list. The generator drafts the structure with field types,
                    validation, and conditional logic. Edit the labels and apply your branding.
                  </p>
                  <p class="fmstr-cmp-fil-switch__hint">
                    <strong>Time:</strong> 10 to 20 minutes per form for a typical 10-field form.
                  </p>
                </article>
                <article class="fmstr-cmp-fil-switch__step">
                  <span class="fmstr-cmp-fil-switch__num" aria-hidden="true">3</span>
                  <h3 class="fmstr-cmp-fil-switch__title">Re-point your integrations.</h3>
                  <p class="fmstr-cmp-fil-switch__body">
                    Update the destination on your Airtable / Notion / Slack / Zapier flows from Fillout's webhook
                    endpoints to Formester's. Test one submission, confirm the integration fires, then archive the
                    Fillout form.
                  </p>
                  <p class="fmstr-cmp-fil-switch__hint">
                    <strong>Time:</strong> 10 to 15 minutes; keep Fillout active for a week as a fallback.
                  </p>
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
          <section class="fmstr-cmp-fil-when-wins" aria-labelledby="fmstr-cmp-fil-when-wins-heading">
            <div class="fmstr-cmp-fil-when-wins__container">
              <header class="fmstr-cmp-fil-when-wins__header">
                <span class="fmstr-cmp-fil-when-wins__eyebrow">Honest comparison</span>
                <h2 id="fmstr-cmp-fil-when-wins-heading" class="fmstr-cmp-fil-when-wins__heading">
                  When Fillout is still the better choice.
                </h2>
                <p class="fmstr-cmp-fil-when-wins__sub">
                  Two real cases where Fillout beats Formester. We are the alternative for the rest, and that is okay.
                </p>
              </header>

              <div class="fmstr-cmp-fil-when-wins__grid">
                <article class="fmstr-cmp-fil-when-wins__card">
                  <h3 class="fmstr-cmp-fil-when-wins__title">Your forms live downstream in Airtable or Notion.</h3>
                  <ul class="fmstr-cmp-fil-when-wins__list">
                    <li>
                      If your team's source of truth is an Airtable base or a Notion workspace, Fillout's native
                      bindings will be cleaner than anything Formester ships through Zapier.
                    </li>
                    <li>
                      Their UI is purpose-built around the database connection; Formester's is purpose-built around the
                      form output.
                    </li>
                    <li>
                      Honest tradeoff: that Airtable / Notion polish is the reason to stay on Fillout despite the lower
                      free-plan ceiling on Formester.
                    </li>
                  </ul>
                </article>
                <article class="fmstr-cmp-fil-when-wins__card">
                  <h3 class="fmstr-cmp-fil-when-wins__title">
                    You need SOC 2 or ISO 27001 on your security questionnaire.
                  </h3>
                  <ul class="fmstr-cmp-fil-when-wins__list">
                    <li>Fillout is <strong>SOC 2 compliant</strong>; Formester is not yet.</li>
                    <li>
                      If your buying review requires formal SOC 2 or ISO 27001 attestations, Fillout clears that gate
                      today and Formester does not.
                    </li>
                    <li>
                      Honest tradeoff: formal attestations are a real win for regulated buyers. We're a fit when offline
                      collection, AI on free, or REST API + MCP matter more.
                    </li>
                  </ul>
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
          <section class="fmstr-cmp-fil-other-alts" aria-labelledby="fmstr-cmp-fil-other-alts-heading">
            <div class="fmstr-cmp-fil-other-alts__container">
              <header class="fmstr-cmp-fil-other-alts__header">
                <span class="fmstr-cmp-fil-other-alts__eyebrow">More options</span>
                <h2 id="fmstr-cmp-fil-other-alts-heading" class="fmstr-cmp-fil-other-alts__heading">
                  Other Fillout alternatives worth a look.
                </h2>
                <p class="fmstr-cmp-fil-other-alts__sub">
                  If Formester is not the right fit, here are five other form builders teams searching for a Fillout
                  alternative shortlist with us. Each has its own dedicated comparison.
                </p>
              </header>

              <div class="fmstr-cmp-fil-other-alts__grid">
                <a class="fmstr-cmp-fil-other-alts__tile" href="https://formester.com/jotform-alternative/">
                  <h3 class="fmstr-cmp-fil-other-alts__name">
                    <span style="display: inline-flex; align-items: center; gap: 8px"
                      ><img
                        src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.jotform.com&amp;size=64"
                        alt=""
                        width="20"
                        height="20"
                        loading="lazy"
                        style="width: 20px; height: 20px; border-radius: 4px; display: block; flex-shrink: 0"
                      />Jotform alternative</span
                    >
                  </h3>
                  <p class="fmstr-cmp-fil-other-alts__bestfor">
                    Best for teams who need a 20,000+ template library and 40+ payment gateways.
                  </p>
                  <span class="fmstr-cmp-fil-other-alts__link">Compare →</span>
                </a>
                <a class="fmstr-cmp-fil-other-alts__tile" href="https://formester.com/zoho-forms-alternative/">
                  <h3 class="fmstr-cmp-fil-other-alts__name">
                    <span style="display: inline-flex; align-items: center; gap: 8px"
                      ><img
                        src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.zoho.com&amp;size=64"
                        alt=""
                        width="20"
                        height="20"
                        loading="lazy"
                        style="width: 20px; height: 20px; border-radius: 4px; display: block; flex-shrink: 0"
                      />Zoho Forms alternative</span
                    >
                  </h3>
                  <p class="fmstr-cmp-fil-other-alts__bestfor">
                    Best for Zoho CRM users who want HIPAA, SOC 2, and ISO 27001 on the same product.
                  </p>
                  <span class="fmstr-cmp-fil-other-alts__link">Compare →</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-templates" aria-labelledby="fmstr-cmp-fil-templates-heading">
            <div class="fmstr-cmp-fil-templates__inner">
              <div class="fmstr-cmp-fil-templates__header">
                <span class="fmstr-cmp-fil-templates__eyebrow">Ready-made templates</span>
                <h2 id="fmstr-cmp-fil-templates-heading" class="fmstr-cmp-fil-templates__heading">
                  Every Fillout use case, on the free plan
                </h2>
                <p class="fmstr-cmp-fil-templates__sub">
                  Pick a template, ship it in five minutes. No paid tiers, no response cap.
                </p>
              </div>

              <div class="fmstr-cmp-fil-templates__grid">
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/contact-form-template-1660/"
                  aria-label="Contact form"
                >
                  <span class="fmstr-cmp-fil-templates__badge">24 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Contact form</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Support, sales, and inquiry routing in one form.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/lead-generation-form-700/"
                  aria-label="Lead generation"
                >
                  <span class="fmstr-cmp-fil-templates__badge">8 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Lead generation</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Qualify leads and sync to your CRM with native mapping.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/customer-feedback-form-31840/"
                  aria-label="Customer feedback"
                >
                  <span class="fmstr-cmp-fil-templates__badge">14 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Customer feedback</h3>
                  <p class="fmstr-cmp-fil-templates__desc">CSAT, NPS, and open-ended input with conditional logic.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/net-promoter-score-nps-702/"
                  aria-label="NPS survey"
                >
                  <span class="fmstr-cmp-fil-templates__badge">3 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">NPS survey</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Ship a one-question NPS survey with score bucketing.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/client-consultation-form-1866/"
                  aria-label="Consultation booking"
                >
                  <span class="fmstr-cmp-fil-templates__badge">9 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Consultation booking</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Screen prospects and route qualified calls to Calendly.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/newsletter-signup-27615/"
                  aria-label="Newsletter signup"
                >
                  <span class="fmstr-cmp-fil-templates__badge">6 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Newsletter signup</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Grow your list, sync to Mailchimp, Klaviyo, or HubSpot.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/event-registration-form-1827/"
                  aria-label="Event registration"
                >
                  <span class="fmstr-cmp-fil-templates__badge">12 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Event registration</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Tickets, dietary needs, and Stripe payment collection.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
                <a
                  class="fmstr-cmp-fil-templates__card"
                  href="https://formester.com/templates/client-onboarding-form-21915/"
                  aria-label="Client onboarding"
                >
                  <span class="fmstr-cmp-fil-templates__badge">16 fields</span>
                  <h3 class="fmstr-cmp-fil-templates__name">Client onboarding</h3>
                  <p class="fmstr-cmp-fil-templates__desc">Kick off new accounts with a single onboarding form.</p>
                  <span class="fmstr-cmp-fil-templates__cta"
                    >Use template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg
                  ></span>
                </a>
              </div>

              <div class="fmstr-cmp-fil-templates__footer">
                <a class="fmstr-cmp-fil-templates__all" href="https://formester.com/templates/"
                  >Browse 500+ templates
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline></svg
                ></a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-privacy" aria-labelledby="fmstr-cmp-fil-privacy-heading">
            <div class="fmstr-cmp-fil-privacy__container">
              <div class="fmstr-cmp-fil-privacy__inner">
                <div class="fmstr-cmp-fil-privacy__text">
                  <span class="fmstr-cmp-fil-privacy__eyebrow">Privacy and data ownership</span>
                  <h2 id="fmstr-cmp-fil-privacy-heading" class="fmstr-cmp-fil-privacy__heading">
                    Your form data is yours. We don't train on it.
                  </h2>
                  <div class="fmstr-cmp-fil-privacy__body">
                    <p>
                      The prompts you write, the AI-generated form structures, and the responses respondents submit are
                      all Customer Data. Per Section 4.4 of our Data Processing Addendum, Formester does not use
                      Customer Data to train AI models, run advertising, run analytics, or feed marketing. The Google
                      Gemini integration that drafts forms inherits the same boundary.
                    </p>
                    <p>
                      Your account is encrypted at rest, responses move over TLS, and payment data carries an additional
                      AES-256 layer through Stripe. We are GDPR, UK GDPR, and CCPA compliant. We are not SOC 2, ISO
                      27001, or HIPAA certified yet, and we say so on the security page rather than implying otherwise.
                      If your buying review requires those today, we'll tell you up front.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-fil-privacy__card">
                  <span class="fmstr-cmp-fil-privacy__pill">DPA §4.4 · January 2026</span>
                  <blockquote class="fmstr-cmp-fil-privacy__quote">
                    "Formester shall not use Customer Data for purposes of analytics, advertising, marketing, or
                    training of artificial intelligence or machine learning models, except as strictly necessary to
                    provide the Services."
                  </blockquote>
                  <hr class="fmstr-cmp-fil-privacy__divider" />
                  <p class="fmstr-cmp-fil-privacy__cite">Formester Data Processing Addendum, effective January 2026.</p>
                  <div class="fmstr-cmp-fil-privacy__links">
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
          <section class="fmstr-cmp-fil-ask" aria-labelledby="fmstr-cmp-fil-ask-heading">
            <div class="fmstr-cmp-fil-ask__container">
              <header class="fmstr-cmp-fil-ask__header">
                <span class="fmstr-cmp-fil-ask__eyebrow">Ask the AI</span>
                <h2 id="fmstr-cmp-fil-ask-heading" class="fmstr-cmp-fil-ask__heading">
                  Ask ChatGPT, Claude, or Perplexity for the best Fillout alternative.
                </h2>
                <p class="fmstr-cmp-fil-ask__sub">
                  Don't take our word for it. Run these prompts in your favorite assistant and see what comes back.
                </p>
              </header>

              <div class="fmstr-cmp-fil-ask__grid">
                <a
                  class="fmstr-cmp-fil-ask__card"
                  href="https://chatgpt.com/?q=Compare+Formester+with+Fillout+for+a+small+team+that+needs+offline+forms+and+AI+generation+on+the+free+plan"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="fmstr-cmp-fil-ask__brand">
                    <span class="fmstr-cmp-fil-ask__brand-dot" aria-hidden="true"></span>
                    ChatGPT
                  </span>
                  <h3 class="fmstr-cmp-fil-ask__title">Run a side-by-side comparison.</h3>
                  <p class="fmstr-cmp-fil-ask__body">
                    "Compare Formester with Fillout for a small team that needs offline forms and AI generation on the
                    free plan."
                  </p>
                  <span class="fmstr-cmp-fil-ask__cta">Open in ChatGPT →</span>
                </a>

                <a
                  class="fmstr-cmp-fil-ask__card"
                  href="https://claude.ai/new?q=Best+Fillout+alternative+for+a+team+that+needs+payments+on+free+and+a+REST+API.+Recommend+one+and+name+the+tradeoffs"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="fmstr-cmp-fil-ask__brand">
                    <span class="fmstr-cmp-fil-ask__brand-dot" aria-hidden="true"></span>
                    Claude
                  </span>
                  <h3 class="fmstr-cmp-fil-ask__title">Get a recommendation with tradeoffs.</h3>
                  <p class="fmstr-cmp-fil-ask__body">
                    "Best Fillout alternative for a team that needs payments on the free plan and a REST API. Recommend
                    one and name the tradeoffs."
                  </p>
                  <span class="fmstr-cmp-fil-ask__cta">Open in Claude →</span>
                </a>

                <a
                  class="fmstr-cmp-fil-ask__card"
                  href="https://www.perplexity.ai/search?q=Best+free+Fillout+alternative+with+AI+form+generator+and+offline+collection+in+2026"
                  target="_blank"
                  rel="noopener"
                >
                  <span class="fmstr-cmp-fil-ask__brand">
                    <span class="fmstr-cmp-fil-ask__brand-dot" aria-hidden="true"></span>
                    Perplexity
                  </span>
                  <h3 class="fmstr-cmp-fil-ask__title">See what the web cites today.</h3>
                  <p class="fmstr-cmp-fil-ask__body">
                    "Best free Fillout alternative with AI form generator and offline collection in 2026."
                  </p>
                  <span class="fmstr-cmp-fil-ask__cta">Open in Perplexity →</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TestimonialWall
      description="Real reviews from G2, Trustpilot, and Product Hunt."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c14_title"
      :pickedReviews="c14_pickedReviews"
      :excludedReviews="c14_excludedReviews"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-fil-cta" aria-labelledby="fmstr-cmp-fil-cta-heading">
            <div class="fmstr-cmp-fil-cta__card">
              <span class="fmstr-cmp-fil-cta__shape fmstr-cmp-fil-cta__shape--circle-lg" aria-hidden="true"></span>
              <span class="fmstr-cmp-fil-cta__shape fmstr-cmp-fil-cta__shape--circle-md" aria-hidden="true"></span>
              <span class="fmstr-cmp-fil-cta__shape fmstr-cmp-fil-cta__shape--circle-sm" aria-hidden="true"></span>
              <span class="fmstr-cmp-fil-cta__shape fmstr-cmp-fil-cta__shape--square-lg" aria-hidden="true"></span>
              <span class="fmstr-cmp-fil-cta__shape fmstr-cmp-fil-cta__shape--square-sm" aria-hidden="true"></span>

              <div class="fmstr-cmp-fil-cta__inner">
                <h2 id="fmstr-cmp-fil-cta-heading" class="fmstr-cmp-fil-cta__heading">
                  Try Formester before you renew Fillout.
                </h2>
                <p class="fmstr-cmp-fil-cta__sub">
                  Free includes the AI form creator, unlimited responses per month, and offline forms. Two minutes to
                  sign up, no credit card.
                </p>

                <a href="https://app.formester.com/users/sign_up" class="fmstr-cmp-fil-cta__btn"
                  >Get Started , It's Free!</a
                >
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FaqSection :title="c16_title" :faqList="c16_faqList" class="page-component-item" />
  </div>
</template>

<script setup>
import FaqSection from '@/components/v2/FaqSection.vue'
import RawHtml from '@/components/strapi/RawHtml.vue'
import TestimonialWall from '@/components/v2/TestimonialWall.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_markup =
  '<div class="raw-html-embed">\u003Cstyle>\n  @import url(\'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap\');\n\n  .fmstr-cmp-fil-hero {\n    --p-bg-glow: radial-gradient(60% 70% at 50% 0%, #f7f3ff 0%, #ffffff 70%);\n    --p-fg-1: #101828;\n    --p-fg-2: #344054;\n    --p-fg-meta: #697586;\n    --p-violet-50: #faf5ff;\n    --p-violet-100: #f4ebff;\n    --p-violet-200: #e9d7fe;\n    --p-violet-600: #6941c6;\n    --p-violet-700: #5925dc;\n    --p-emerald-600: #6941c6;\n    --p-shadow-btn: 0 6px 20px rgba(105, 65, 198, 0.18);\n\n    background: var(--p-bg-glow);\n    padding: 88px 24px 64px;\n    font-family: \'Inter\', ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif;\n    color: var(--p-fg-1);\n  }\n  .fmstr-cmp-fil-hero *, .fmstr-cmp-fil-hero *::before, .fmstr-cmp-fil-hero *::after { box-sizing: border-box; }\n\n  .fmstr-cmp-fil-hero__inner {\n    max-width: 920px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .fmstr-cmp-fil-hero__eyebrow {\n    display: inline-block;\n    padding: 6px 14px;\n    background: var(--p-violet-100);\n    color: var(--p-violet-600);\n    border-radius: 9999px;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    margin-bottom: 20px;\n  }\n\n  .fmstr-cmp-fil-hero__heading {\n    font-size: 56px;\n    line-height: 1.08;\n    font-weight: 800;\n    letter-spacing: -0.02em;\n    color: var(--p-fg-1);\n    margin: 0 0 20px;\n  }\n  .fmstr-cmp-fil-hero__heading-accent { color: var(--p-violet-600); }\n\n  .fmstr-cmp-fil-hero__sub {\n    max-width: 720px;\n    margin: 0 auto 36px;\n    font-size: 18px;\n    line-height: 1.55;\n    color: var(--p-fg-2);\n  }\n\n  .fmstr-cmp-fil-hero__cta-row {\n    display: flex;\n    gap: 12px;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 24px;\n  }\n\n  .fmstr-cmp-fil-hero__btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    padding: 14px 26px;\n    border-radius: 9999px;\n    font-weight: 600;\n    font-size: 16px;\n    text-decoration: none;\n    transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;\n  }\n  .fmstr-cmp-fil-hero__btn--primary {\n    background: var(--p-violet-600);\n    color: #ffffff;\n    box-shadow: var(--p-shadow-btn);\n  }\n  .fmstr-cmp-fil-hero__btn--primary:hover {\n  color: #ffffff;\n    background: var(--p-violet-700);\n    transform: translateY(-1px);\n  }\n  .fmstr-cmp-fil-hero__btn--ghost {\n    background: transparent;\n    color: var(--p-violet-700);\n    border: 1px solid var(--p-violet-200);\n  }\n  .fmstr-cmp-fil-hero__btn--ghost:hover {\n  color: var(--p-violet-700); background: var(--p-violet-50); }\n\n  .fmstr-cmp-fil-hero__meta {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 13px;\n    color: var(--p-fg-meta);\n    font-weight: 500;\n  }\n  .fmstr-cmp-fil-hero__meta-dot {\n    width: 4px; height: 4px;\n    border-radius: 50%;\n    background: var(--p-fg-meta);\n    flex-shrink: 0;\n  }\n  .fmstr-cmp-fil-hero__meta-check {\n    color: var(--p-emerald-600);\n    flex-shrink: 0;\n  }\n\n  @media (max-width: 760px) {\n    .fmstr-cmp-fil-hero { padding: 56px 16px 40px; }\n    .fmstr-cmp-fil-hero__heading { font-size: 36px; line-height: 1.15; }\n    .fmstr-cmp-fil-hero__sub { font-size: 16px; }\n    .fmstr-cmp-fil-hero__btn { width: 100%; justify-content: center; }\n    .fmstr-cmp-fil-hero__cta-row { flex-direction: column; }\n  }\n\u003C/style>\n\n<section class="fmstr-cmp-fil-hero" aria-labelledby="fmstr-cmp-fil-hero-heading">\n  <div class="fmstr-cmp-fil-hero__inner">\n\n    <span class="fmstr-cmp-fil-hero__eyebrow">Free Fillout alternative</span>\n\n    <h1 id="fmstr-cmp-fil-hero-heading" class="fmstr-cmp-fil-hero__heading">\n      The Fillout alternative with <span class="fmstr-cmp-fil-hero__heading-accent">offline forms</span> and an MCP server for AI agents.\n    </h1>\n\n    <p class="fmstr-cmp-fil-hero__sub">AI form generation, offline PWAs, and payments on the free plan. Fillout gates all three behind paid tiers or ships none of them.</p>\n\n    <div class="fmstr-cmp-fil-hero__cta-row">\n      <a href="https://app.formester.com/users/sign_up" class="fmstr-cmp-fil-hero__btn fmstr-cmp-fil-hero__btn--primary">Try Formester free</a>\n      <a href="https://formester.com/pricing/" class="fmstr-cmp-fil-hero__btn fmstr-cmp-fil-hero__btn--ghost">See pricing</a>\n    </div>\n\n    <div class="fmstr-cmp-fil-hero__meta">\n      <svg class="fmstr-cmp-fil-hero__meta-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>\n      <span>Free forever</span>\n      <span class="fmstr-cmp-fil-hero__meta-dot" aria-hidden="true"></span>\n      <span>No credit card'
const c2_title = []
const c2_logos = []
const c14_title = [
  {
    id: 5997,
    text: 'What teams are saying about Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c14_pickedReviews = []
const c14_excludedReviews = []
const c16_title = [
  {
    id: 5998,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c16_faqList = [
  {
    id: 3882,
    header: 'When is Formester a better alternative Fillout?',
    body: 'If you need offline data collection, an AI form generator on the free plan, an MCP server for Claude or ChatGPT, or unlimited responses on Free rather than a 1,000/mo cap, Formester is the cleaner pick. If your work lives inside Airtable or Notion and you need two-way database sync, Fillout is still the cleaner pick.\n',
    body_markdown:
      'Formester gives you more advanced forms, AI tools, real-time support, and team collaboration options making it the ideal fillout alternative.',
    list: [],
  },
  {
    id: 3879,
    header: 'Is Fillout free, and what is in the free plan?',
    body: 'Fillout offers a free plan with 1,000 responses a month, unlimited forms, unlimited seats, conditional logic, payments, and PDF generation. Branding removal, custom domains, and partial submissions sit on paid tiers ($15, $40, $75).\n',
    body_markdown:
      'Yes. With granular team collaboration, full control over form submission, and multi page forms, it’s designed for businesses of all sizes.',
    list: [],
  },
  {
    id: 3881,
    header: 'Does Fillout use AI?',
    body: 'Yes. Fillout shipped its AI form generator in 2023 and added AI workflows for response routing. Formester also includes an AI form generator and adds an AI quiz maker, both available on the free plan.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3880,
    header: 'Are Fillout forms secure?',
    body: 'Fillout encrypts data at rest and in transit and is SOC 2 compliant per their public pricing page. EU data residency is gated to Team and higher plans. Formester is GDPR, UK GDPR, and CCPA compliant with TLS in transit and encryption at rest, but does not currently hold SOC 2 or HIPAA certifications, so plan accordingly if you need formal attestations.',
    body_markdown:
      'Yes. Explore our free tier and see how easy it is to create smarter forms, making Formester the perfect alternative to Fillout.',
    list: [],
  },
]

useHead({
  title: 'Free Fillout Alternative That Works Offline | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/fillout-alternative/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-08-09T16:38:57.544Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Looking for a Fillout alternative? We Compared on price, AI, offline forms, integrations, and security. See why Formester is the better choice than the Fillout in 2026.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free Fillout Alternative That Works Offline | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/fillout-alternative/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free Fillout Alternative That Works Offline | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Looking for a Fillout alternative? We Compared on price, AI, offline forms, integrations, and security. See why Formester is the better choice than the Fillout in 2026.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/fillout-alternative/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free Fillout Alternative That Works Offline | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Looking for a Fillout alternative? We Compared on price, AI, offline forms, integrations, and security. See why Formester is the better choice than the Fillout in 2026.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: 'Formester',
    },
    {
      hid: 'image',
      name: 'image',
      property: 'og:image',
      content: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['fillout alternative', 'alternative to fillout', 'fillout form builder', 'fillout pricing'],
    },
  ],
})
useJsonld([
  {
    '@graph': [
      {
        '@id': 'https://formester.com/#organization',
        url: 'https://formester.com/',
        logo: 'https://formester.com/logo.svg',
        name: 'Formester',
        '@type': 'Organization',
        sameAs: ['https://twitter.com/formester', 'https://www.linkedin.com/company/formester/'],
      },
      {
        '@id': 'https://formester.com/fillout-alternative/#webpage',
        url: 'https://formester.com/fillout-alternative/',
        name: 'Free Fillout Alternative with Offline Forms & AI MCP | Formester',
        '@type': 'WebPage',
        headline: 'The Fillout alternative with offline forms and an MCP server for AI agents.',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/fillout-alternative/#breadcrumb',
        },
        dateModified: '2026-05-09',
        datePublished: '2024-06-07',
      },
      {
        '@id': 'https://formester.com/fillout-alternative/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/fillout-alternative/',
            name: 'Fillout Alternative',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/fillout-alternative/#software',
        url: 'https://formester.com/',
        name: 'Formester',
        '@type': 'SoftwareApplication',
        offers: [
          {
            url: 'https://formester.com/pricing/',
            name: 'Free',
            '@type': 'Offer',
            price: '0',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
          },
          {
            url: 'https://formester.com/pricing/',
            name: 'Personal',
            '@type': 'Offer',
            price: '12',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
          },
          {
            url: 'https://formester.com/pricing/',
            name: 'Business',
            '@type': 'Offer',
            price: '45',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
          },
        ],
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
        description:
          'Free Fillout alternative with offline-installable PWA forms, an AI form generator, native payment collection on the free plan, and an MCP server that pipes responses into Claude or ChatGPT.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingCount: '450',
          ratingValue: '4.7',
        },
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
      },
      {
        '@id': 'https://formester.com/fillout-alternative/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'When is Formester a better alternative Fillout?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Formester gives you more advanced forms, AI tools, real-time support, and team collaboration options making it the ideal fillout alternative.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is Fillout free, and what is in the free plan?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Yes. With granular team collaboration, full control over form submission, and multi page forms, it's designed for businesses of all sizes.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Does Fillout use AI?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Fillout shipped its AI form generator in 2023 and added AI workflows for response routing. Formester also includes an AI form generator and adds an AI quiz maker, both available on the free plan.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Are Fillout forms secure?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Explore our free tier and see how easy it is to create smarter forms, making Formester the perfect alternative to Fillout.',
              '@type': 'Answer',
            },
          },
        ],
      },
    ],
    '@context': 'https://schema.org',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
.fmstr-cmp-fil-vs {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-fil-vs *,
.fmstr-cmp-fil-vs *::before,
.fmstr-cmp-fil-vs *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-vs__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-fil-vs__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-fil-vs__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-fil-vs__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-width: 0;
}
.fmstr-cmp-fil-vs__card {
  min-width: 0;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
.fmstr-cmp-fil-vs__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-vs__brand img {
  width: 24px;
  height: 24px;
  border-radius: 5px;
  display: block;
  flex-shrink: 0;
}
.fmstr-cmp-fil-vs__name {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-fil-vs__body {
  margin: 0;
  color: var(--c-fg-2);
  font-size: 16px;
  line-height: 1.7;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-vs {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-vs__grid {
    grid-template-columns: 1fr;
  }
}
.fmstr-cmp-fil-glance {
  --p-bg-card: #ffffff;
  --p-bg-violet-25: #f7f3ff;
  --p-bg-pill: #f4ebff;
  --p-bg-header: #f9fafb;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-600: #6941c6;
  --p-emerald-600: #6941c6;
  --p-rose-600: #6941c6;
  --p-fg-strong: #344054;
  --p-border: #eaecf0;
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-glance *,
.fmstr-cmp-fil-glance *::before,
.fmstr-cmp-fil-glance *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-glance__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-glance__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-glance__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-glance__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-glance__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-glance__table-wrap {
  background: var(--p-bg-card);
  border: 1px solid var(--p-border);
  border-radius: 16px;
  overflow-x: auto;
}
.fmstr-cmp-fil-glance__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 720px;
}
.fmstr-cmp-fil-glance__table thead th {
  background: var(--p-bg-header);
  text-align: left;
  padding: 16px 20px;
  font-size: 12px;
  font-weight: 700;
  color: var(--p-fg-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid var(--p-border);
}
.fmstr-cmp-fil-glance__table thead th.fmstr-cmp-fil-glance__col-formester {
  background: var(--p-bg-violet-25);
  color: var(--p-violet-600);
}
.fmstr-cmp-fil-glance__table tbody td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--p-border);
  vertical-align: top;
  line-height: 22px;
}
.fmstr-cmp-fil-glance__table tbody tr:last-child td {
  border-bottom: none;
}
.fmstr-cmp-fil-glance__attr {
  font-weight: 600;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-glance__cell {
  color: var(--p-fg-2);
}
.fmstr-cmp-fil-glance__cell--formester {
  background: var(--p-bg-violet-25);
  color: var(--p-fg-1);
  font-weight: 600;
}
.fmstr-cmp-fil-glance__verdict {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.fmstr-cmp-fil-glance__verdict--wins-formester {
  color: var(--p-emerald-600);
}
.fmstr-cmp-fil-glance__verdict--wins-comp {
  color: var(--p-rose-600);
}
.fmstr-cmp-fil-glance__verdict--wins-tied {
  color: var(--p-fg-3);
}
.fmstr-cmp-fil-glance__note {
  margin-top: 16px;
  font-size: 12px;
  color: var(--p-fg-3);
  text-align: center;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-glance {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-glance__heading {
    font-size: 24px;
    line-height: 32px;
  }
}
.fmstr-cmp-fil-why-leave {
  --p-bg-card: #ffffff;
  --p-bg-pill: #f4ebff;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-rose-600: #6941c6;
  --p-border-light: #eaecf0;
  --p-border-rose: #d0d5dd;
  --p-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-why-leave *,
.fmstr-cmp-fil-why-leave *::before,
.fmstr-cmp-fil-why-leave *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-why-leave__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-why-leave__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-why-leave__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-rose-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-why-leave__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-why-leave__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-why-leave__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  gap: 20px;
}
.fmstr-cmp-fil-why-leave__card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: var(--p-bg-card);
  border: 1px solid var(--p-border-light);
  border-radius: 16px;
  box-shadow: var(--p-shadow-xs);
  transition:
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-fil-why-leave__card:hover {
  box-shadow: var(--p-shadow-md);
  transform: translateY(-2px);
}
.fmstr-cmp-fil-why-leave__title {
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
.fmstr-cmp-fil-why-leave__body {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--p-fg-2);
}
.fmstr-cmp-fil-why-leave__source {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px dashed var(--p-border-light);
  font-size: 12px;
  color: var(--p-fg-3);
  font-style: italic;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-why-leave {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-why-leave__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-why-leave__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-fil-why-leave__card {
    padding: 24px;
  }
}
.fmstr-cmp-fil-pricing {
  --p-bg-card: #ffffff;
  --p-bg-violet-25: #f7f3ff;
  --p-bg-pill: #f4ebff;
  --p-bg-header: #f9fafb;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-600: #6941c6;
  --p-border: #eaecf0;
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-pricing *,
.fmstr-cmp-fil-pricing *::before,
.fmstr-cmp-fil-pricing *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-pricing__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-pricing__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-pricing__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-pricing__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-pricing__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-pricing__table-wrap {
  background: var(--p-bg-card);
  border: 1px solid var(--p-border);
  border-radius: 16px;
  overflow-x: auto;
}
.fmstr-cmp-fil-pricing__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 720px;
}
.fmstr-cmp-fil-pricing__table thead th {
  background: var(--p-bg-header);
  text-align: left;
  padding: 16px 20px;
  font-size: 12px;
  font-weight: 700;
  color: var(--p-fg-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid var(--p-border);
}
.fmstr-cmp-fil-pricing__table thead th.fmstr-cmp-fil-pricing__col-formester {
  background: var(--p-bg-violet-25);
  color: var(--p-violet-600);
}
.fmstr-cmp-fil-pricing__table tbody td {
  padding: 20px;
  border-bottom: 1px solid var(--p-border);
  vertical-align: top;
  line-height: 22px;
  color: var(--p-fg-2);
}
.fmstr-cmp-fil-pricing__table tbody tr:last-child td {
  border-bottom: none;
}
.fmstr-cmp-fil-pricing__tier {
  font-weight: 700;
  color: var(--p-fg-1);
  font-size: 16px;
}
.fmstr-cmp-fil-pricing__cell--formester {
  background: linear-gradient(180deg, #fbf8ff 0%, #ffffff 100%);
  color: var(--p-fg-1);
  font-weight: 600;
}
.fmstr-cmp-fil-pricing__note {
  font-size: 12px;
  color: var(--p-fg-3);
  font-style: italic;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-pricing {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-pricing__heading {
    font-size: 24px;
    line-height: 32px;
  }
}
.fmstr-cmp-fil-api-mcp {
  --p-bg-card: #ffffff;
  --p-bg-tint: #f7f3ff;
  --p-bg-pill: #f4ebff;
  --p-bg-chip: #f2f4f7;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-strong: #344054;
  --p-violet-500: #7f56d9;
  --p-violet-600: #6941c6;
  --p-violet-300: #9777e0;
  --p-border: #eaecf0;
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-api-mcp *,
.fmstr-cmp-fil-api-mcp *::before,
.fmstr-cmp-fil-api-mcp *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-api-mcp__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-api-mcp__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-api-mcp__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-api-mcp__title {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-api-mcp__intro {
  font-size: 18px;
  line-height: 28px;
  color: var(--p-fg-2);
  margin: 0;
}
.fmstr-cmp-fil-api-mcp__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: stretch;
}
.fmstr-cmp-fil-api-mcp__card {
  background: var(--p-bg-card);
  border: 1px solid var(--p-border);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
}
.fmstr-cmp-fil-api-mcp__card:hover {
  border-color: var(--p-violet-300);
  box-shadow: var(--p-shadow-md);
}
.fmstr-cmp-fil-api-mcp__icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--p-bg-tint);
  color: var(--p-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0;
}
.fmstr-cmp-fil-api-mcp__badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--p-violet-500);
  color: #ffffff;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
  align-self: flex-start;
}
.fmstr-cmp-fil-api-mcp__badge--alt {
  background: var(--p-bg-tint);
  color: var(--p-violet-600);
}
.fmstr-cmp-fil-api-mcp__card-title {
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 16px;
}
.fmstr-cmp-fil-api-mcp__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-api-mcp__chip {
  display: inline-block;
  padding: 4px 10px;
  background: var(--p-bg-chip);
  color: var(--p-fg-strong);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.fmstr-cmp-fil-api-mcp__body {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-2);
  margin: 0 0 20px;
  flex: 1 1 auto;
}
.fmstr-cmp-fil-api-mcp__cta {
  color: var(--p-violet-600);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  align-self: flex-start;
}
.fmstr-cmp-fil-api-mcp__cta:hover {
  color: var(--p-violet-600);
  text-decoration: underline;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-api-mcp {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-api-mcp__title {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-api-mcp__intro {
    font-size: 16px;
    line-height: 24px;
  }
  .fmstr-cmp-fil-api-mcp__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-fil-api-mcp__card {
    padding: 24px;
  }
}
.fmstr-cmp-fil-why-pick {
  --p-bg-card: #ffffff;
  --p-bg-violet-25: #f7f3ff;
  --p-bg-pill: #f4ebff;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-600: #6941c6;
  --p-border-light: #eaecf0;
  --p-border-violet: #9777e0;
  --p-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-why-pick *,
.fmstr-cmp-fil-why-pick *::before,
.fmstr-cmp-fil-why-pick *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-why-pick__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-why-pick__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-why-pick__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-why-pick__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-why-pick__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-why-pick__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: stretch;
}
.fmstr-cmp-fil-why-pick__card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: var(--p-bg-card);
  border: 1px solid var(--p-border-light);
  border-radius: 16px;
  box-shadow: var(--p-shadow-xs);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-fil-why-pick__card:hover {
  border-color: var(--p-border-violet);
  box-shadow: var(--p-shadow-md);
  transform: translateY(-2px);
}
.fmstr-cmp-fil-why-pick__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--p-bg-violet-25);
  color: var(--p-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmstr-cmp-fil-why-pick__title {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
}
.fmstr-cmp-fil-why-pick__body {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--p-fg-2);
}

@media (max-width: 1024px) {
  .fmstr-cmp-fil-why-pick__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-why-pick {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-why-pick__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-why-pick__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-fil-why-pick__card {
    padding: 20px;
  }
}
.fmstr-cmp-fil-switch {
  --p-bg-card: #ffffff;
  --p-bg-pill: #f4ebff;
  --p-bg-num: #6941c6;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-600: #6941c6;
  --p-border-light: #eaecf0;
  --p-border-violet: #9777e0;
  --p-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-switch *,
.fmstr-cmp-fil-switch *::before,
.fmstr-cmp-fil-switch *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-switch__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-switch__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-switch__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-switch__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-switch__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-switch__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: stretch;
}
.fmstr-cmp-fil-switch__step {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  background: var(--p-bg-card);
  border: 1px solid var(--p-border-light);
  border-radius: 16px;
  box-shadow: var(--p-shadow-xs);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-fil-switch__step:hover {
  border-color: var(--p-border-violet);
  box-shadow: var(--p-shadow-md);
  transform: translateY(-2px);
}
.fmstr-cmp-fil-switch__num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--p-bg-num);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
}
.fmstr-cmp-fil-switch__title {
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
.fmstr-cmp-fil-switch__body {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--p-fg-2);
}
.fmstr-cmp-fil-switch__hint {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px dashed var(--p-border-light);
  font-size: 12px;
  color: var(--p-fg-3);
}
.fmstr-cmp-fil-switch__hint strong {
  color: var(--p-fg-1);
  font-weight: 700;
}
@media (max-width: 1024px) {
  .fmstr-cmp-fil-switch__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-switch {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-switch__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-switch__step {
    padding: 24px;
  }
}
.fmstr-cmp-fil-when-wins {
  --p-bg-card: #ffffff;
  --p-bg-pill: #f4ebff;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-emerald-600: #6941c6;
  --p-border-light: #eaecf0;
  --p-border-emerald: #d0d5dd;
  --p-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-when-wins *,
.fmstr-cmp-fil-when-wins *::before,
.fmstr-cmp-fil-when-wins *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-when-wins__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-when-wins__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-when-wins__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-emerald-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-when-wins__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-when-wins__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-when-wins__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  gap: 20px;
}
.fmstr-cmp-fil-when-wins__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  background: var(--p-bg-card);
  border: 1px solid var(--p-border-light);
  border-radius: 16px;
  box-shadow: var(--p-shadow-xs);
  transition:
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-fil-when-wins__card:hover {
  box-shadow: var(--p-shadow-md);
  transform: translateY(-2px);
}
.fmstr-cmp-fil-when-wins__title {
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
.fmstr-cmp-fil-when-wins__list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fmstr-cmp-fil-when-wins__list li {
  font-size: 14px;
  line-height: 22px;
  color: var(--p-fg-2);
}
.fmstr-cmp-fil-when-wins__list li strong {
  color: var(--p-fg-1);
  font-weight: 700;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-when-wins {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-when-wins__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-when-wins__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-fil-when-wins__card {
    padding: 24px;
  }
}
.fmstr-cmp-fil-other-alts {
  --p-bg-card: #ffffff;
  --p-bg-pill: #f4ebff;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-600: #6941c6;
  --p-border-light: #eaecf0;
  --p-border-violet: #9777e0;
  --p-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-other-alts *,
.fmstr-cmp-fil-other-alts *::before,
.fmstr-cmp-fil-other-alts *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-other-alts__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-other-alts__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-other-alts__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-other-alts__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-other-alts__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-other-alts__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  align-items: stretch;
}
.fmstr-cmp-fil-other-alts__tile {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: var(--p-bg-card);
  border: 1px solid var(--p-border-light);
  border-radius: 16px;
  box-shadow: var(--p-shadow-xs);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-fil-other-alts__tile:hover {
  border-color: var(--p-border-violet);
  box-shadow: var(--p-shadow-md);
  transform: translateY(-2px);
  text-decoration: none;
}
.fmstr-cmp-fil-other-alts__name {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
}
.fmstr-cmp-fil-other-alts__bestfor {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: var(--p-fg-2);
}
.fmstr-cmp-fil-other-alts__link {
  margin-top: auto;
  font-size: 12px;
  font-weight: 700;
  color: var(--p-violet-600);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
@media (max-width: 1024px) {
  .fmstr-cmp-fil-other-alts__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-other-alts {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-other-alts__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-other-alts__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-fil-templates {
  --p-bg: #ffffff;
  --p-bg-glow: linear-gradient(180deg, #ffffff 0%, #faf5ff 100%);
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-100: #f4ebff;
  --p-violet-600: #6941c6;
  --p-violet-700: #5925dc;
  --p-border: #eaecf0;
  --p-border-hover: #d6bbfb;
  padding: 88px 24px;
  background: var(--p-bg-glow);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-templates *,
.fmstr-cmp-fil-templates *::before,
.fmstr-cmp-fil-templates *::after {
  box-sizing: border-box;
}

.fmstr-cmp-fil-templates__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-templates__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px;
}
.fmstr-cmp-fil-templates__eyebrow {
  display: inline-block;
  padding: 6px 14px;
  background: var(--p-violet-100);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-templates__heading {
  font-size: 36px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--p-fg-1);
  margin: 0 0 12px;
}
.fmstr-cmp-fil-templates__sub {
  font-size: 17px;
  line-height: 1.55;
  color: var(--p-fg-2);
  margin: 0;
}

.fmstr-cmp-fil-templates__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.fmstr-cmp-fil-templates__card {
  display: block;
  padding: 24px;
  background: var(--p-bg);
  border: 1px solid var(--p-border);
  border-radius: 16px;
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
  min-height: 100%;
}
.fmstr-cmp-fil-templates__card:hover {
  border-color: var(--p-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(105, 65, 198, 0.1);
}
.fmstr-cmp-fil-templates__badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--p-violet-100);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-templates__name {
  font-size: 17px;
  font-weight: 600;
  color: var(--p-fg-1);
  margin: 0 0 8px;
}
.fmstr-cmp-fil-templates__desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--p-fg-2);
  margin: 0 0 20px;
}
.fmstr-cmp-fil-templates__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--p-violet-600);
}
.fmstr-cmp-fil-templates__card:hover .fmstr-cmp-fil-templates__cta {
  color: var(--p-violet-700);
}

.fmstr-cmp-fil-templates__footer {
  margin-top: 40px;
  text-align: center;
}
.fmstr-cmp-fil-templates__all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  background: var(--p-violet-600);
  color: #ffffff;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    transform 0.15s ease;
}
.fmstr-cmp-fil-templates__all:hover {
  color: #ffffff;
  background: var(--p-violet-700);
  transform: translateY(-1px);
}

@media (max-width: 960px) {
  .fmstr-cmp-fil-templates__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .fmstr-cmp-fil-templates {
    padding: 56px 16px;
  }
  .fmstr-cmp-fil-templates__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-fil-templates__heading {
    font-size: 28px;
  }
}

.fmstr-cmp-fil-privacy {
  --p-bg-section: #0f0921;
  --p-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --p-bg-card: rgba(255, 255, 255, 0.04);
  --p-bg-card-glow: radial-gradient(ellipse 500px 400px at 90% 5%, rgba(127, 86, 217, 0.3) 0%, transparent 60%);
  --p-bg-pill: rgba(255, 255, 255, 0.08);
  --p-fg-eyebrow: #bda6ff;
  --p-fg-link: #d9c7ff;
  --p-fg-link-hover: #ffffff;
  background: transparent;
  padding: 48px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-fil-privacy *,
.fmstr-cmp-fil-privacy *::before,
.fmstr-cmp-fil-privacy *::after {
  box-sizing: border-box;
}

.fmstr-cmp-fil-privacy__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--p-bg-section);
  background-image: var(--p-bg-glow);
  border-radius: 28px;
  padding: 48px;
  overflow: hidden;
}

.fmstr-cmp-fil-privacy__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 48px;
  align-items: center;
}

.fmstr-cmp-fil-privacy__eyebrow {
  display: inline-block;
  padding: 8px 16px;
  background: var(--p-bg-pill);
  color: var(--p-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.fmstr-cmp-fil-privacy__heading {
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 24px;
}

.fmstr-cmp-fil-privacy__body p {
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 16px;
}
.fmstr-cmp-fil-privacy__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-fil-privacy__card {
  background-color: var(--p-bg-card);
  background-image: var(--p-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  backdrop-filter: blur(8px);
}

.fmstr-cmp-fil-privacy__pill {
  display: inline-block;
  padding: 8px 16px;
  background: var(--p-bg-pill);
  color: var(--p-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.fmstr-cmp-fil-privacy__quote {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  font-style: italic;
  color: #ffffff;
  margin: 0 0 20px;
}

.fmstr-cmp-fil-privacy__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 20px;
}

.fmstr-cmp-fil-privacy__cite {
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 12px;
}

.fmstr-cmp-fil-privacy__links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.fmstr-cmp-fil-privacy__links a {
  color: var(--p-fg-link);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}
.fmstr-cmp-fil-privacy__links a:hover {
  color: var(--p-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-fil-privacy {
    padding: 32px 16px;
  }
  .fmstr-cmp-fil-privacy__container {
    padding: 28px;
    border-radius: 20px;
  }
  .fmstr-cmp-fil-privacy__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .fmstr-cmp-fil-privacy__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-privacy__quote {
    font-size: 16px;
    line-height: 24px;
  }
  .fmstr-cmp-fil-privacy__card {
    padding: 24px;
  }
}
.fmstr-cmp-fil-ask {
  --p-bg-card: #ffffff;
  --p-bg-violet-25: #f7f3ff;
  --p-bg-pill: #f4ebff;
  --p-fg-1: #101828;
  --p-fg-2: #475467;
  --p-fg-3: #697586;
  --p-violet-600: #6941c6;
  --p-violet-700: #53389e;
  --p-border-light: #eaecf0;
  --p-border-violet: #9777e0;
  --p-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --p-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-ask *,
.fmstr-cmp-fil-ask *::before,
.fmstr-cmp-fil-ask *::after {
  box-sizing: border-box;
}
.fmstr-cmp-fil-ask__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-fil-ask__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-fil-ask__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  background: var(--p-bg-pill);
  color: var(--p-violet-600);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.fmstr-cmp-fil-ask__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.fmstr-cmp-fil-ask__sub {
  font-size: 16px;
  line-height: 24px;
  color: var(--p-fg-3);
  margin: 0;
}
.fmstr-cmp-fil-ask__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: stretch;
}
.fmstr-cmp-fil-ask__card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: var(--p-bg-card);
  border: 1px solid var(--p-border-light);
  border-radius: 16px;
  box-shadow: var(--p-shadow-xs);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-fil-ask__card:hover {
  border-color: var(--p-border-violet);
  box-shadow: var(--p-shadow-md);
  transform: translateY(-2px);
  text-decoration: none;
}
.fmstr-cmp-fil-ask__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  color: var(--p-violet-600);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.fmstr-cmp-fil-ask__brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--p-violet-600);
}
.fmstr-cmp-fil-ask__title {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: var(--p-fg-1);
}
.fmstr-cmp-fil-ask__body {
  margin: 0;
  padding: 12px;
  background: var(--p-bg-violet-25);
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  color: var(--p-fg-2);
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
}
.fmstr-cmp-fil-ask__cta {
  margin-top: auto;
  font-size: 12px;
  font-weight: 700;
  color: var(--p-violet-600);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
@media (max-width: 760px) {
  .fmstr-cmp-fil-ask {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-ask__heading {
    font-size: 24px;
    line-height: 32px;
  }
  .fmstr-cmp-fil-ask__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-fil-cta {
  --p-bg-violet: #6941c6;
  --p-bg-violet-light: rgba(255, 255, 255, 0.1);
  --p-bg-violet-deep: rgba(0, 0, 0, 0.1);
  --p-fg-on-violet: #ffffff;
  --p-fg-on-violet-soft: rgba(255, 255, 255, 0.82);
  --p-btn-bg: #ffffff;
  --p-btn-fg: #5925dc;
  --p-shadow-card: 0 16px 48px rgba(105, 65, 198, 0.22);
  --p-shadow-btn: 0 6px 20px rgba(0, 0, 0, 0.18);

  background: transparent;
  padding: 64px 24px;
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--p-fg-on-violet);
}

.fmstr-cmp-fil-cta *,
.fmstr-cmp-fil-cta *::before,
.fmstr-cmp-fil-cta *::after {
  box-sizing: border-box;
}

.fmstr-cmp-fil-cta__card {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background: var(--p-bg-violet);
  border-radius: 28px;
  padding: 64px 48px;
  overflow: hidden;
  box-shadow: var(--p-shadow-card);
  text-align: center;
}

/* Decorative geometric shapes inside the card, contained by overflow:hidden */
.fmstr-cmp-fil-cta__shape {
  position: absolute;
  pointer-events: none;
}
.fmstr-cmp-fil-cta__shape--circle-lg {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--p-bg-violet-light);
  top: 50%;
  right: -140px;
  transform: translateY(-50%);
}
.fmstr-cmp-fil-cta__shape--circle-md {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--p-bg-violet-light);
  top: -50px;
  right: 220px;
}
.fmstr-cmp-fil-cta__shape--circle-sm {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--p-bg-violet-deep);
  bottom: -20px;
  left: 60px;
}
.fmstr-cmp-fil-cta__shape--square-lg {
  width: 180px;
  height: 180px;
  background: var(--p-bg-violet-deep);
  bottom: -90px;
  right: 80px;
  transform: rotate(8deg);
}
.fmstr-cmp-fil-cta__shape--square-sm {
  width: 70px;
  height: 70px;
  background: var(--p-bg-violet-light);
  top: 50px;
  left: -20px;
}

.fmstr-cmp-fil-cta__inner {
  position: relative;
  z-index: 1;
  max-width: 920px;
  margin: 0 auto;
}

.fmstr-cmp-fil-cta__heading {
  font-size: 36px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--p-fg-on-violet);
  margin: 0 0 16px;
}

.fmstr-cmp-fil-cta__sub {
  font-size: 16px;
  line-height: 1.55;
  color: var(--p-fg-on-violet-soft);
  max-width: 640px;
  margin: 0 auto 32px;
}

.fmstr-cmp-fil-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 9999px;
  background: var(--p-btn-bg);
  color: var(--p-btn-fg);
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  box-shadow: var(--p-shadow-btn);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}
.fmstr-cmp-fil-cta__btn:hover {
  color: var(--p-btn-fg);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}

@media (max-width: 760px) {
  .fmstr-cmp-fil-cta {
    padding: 48px 16px;
  }
  .fmstr-cmp-fil-cta__card {
    padding: 48px 24px;
    border-radius: 20px;
  }
  .fmstr-cmp-fil-cta__heading {
    font-size: 28px;
  }
  .fmstr-cmp-fil-cta__sub {
    font-size: 15px;
  }
  .fmstr-cmp-fil-cta__btn {
    width: 100%;
    justify-content: center;
  }
  .fmstr-cmp-fil-cta__shape--circle-lg {
    width: 200px;
    height: 200px;
    right: -100px;
  }
  .fmstr-cmp-fil-cta__shape--circle-md {
    display: none;
  }
  .fmstr-cmp-fil-cta__shape--square-lg {
    width: 120px;
    height: 120px;
    bottom: -60px;
    right: 30px;
  }
}
</style>
