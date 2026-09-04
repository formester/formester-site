<template>
  <div>
    <AiHero
      :description="c0_description"
      type="Form"
      :hideIcons="false"
      buttonText="Generate Form"
      placeholder="Describe the form you need…"
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <Trustbadges :title="c2_title" :badges="c2_badges" class="page-component-item" />

    <FeatureShowcase
      :description="c3_description"
      steps
      :title="c3_title"
      :itemList="c3_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section
            class="fmstr-cmp-inputs-sharing-analytics"
            aria-labelledby="fmstr-cmp-inputs-sharing-analytics-heading"
          >
            <div class="fmstr-cmp-inputs-sharing-analytics__inner">
              <header class="fmstr-cmp-inputs-sharing-analytics__header">
                <span class="fmstr-cmp-inputs-sharing-analytics__eyebrow">At a glance</span>
                <h2 id="fmstr-cmp-inputs-sharing-analytics-heading" class="fmstr-cmp-inputs-sharing-analytics__heading">
                  Inputs, question types, sharing, and analytics
                </h2>
                <p class="fmstr-cmp-inputs-sharing-analytics__sub">
                  A scannable reference for the most-asked capability questions. Direct from the help center, verified
                  before each rewrite ships.
                </p>
              </header>

              <div class="fmstr-cmp-inputs-sharing-analytics__card">
                <div class="fmstr-cmp-inputs-sharing-analytics__row">
                  <div class="fmstr-cmp-inputs-sharing-analytics__label">
                    <span class="fmstr-cmp-inputs-sharing-analytics__icon" aria-hidden="true">
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
                        <path d="M3 7h2"></path>
                        <path d="M7 7h14"></path>
                        <path d="M3 12h2"></path>
                        <path d="M7 12h14"></path>
                        <path d="M3 17h2"></path>
                        <path d="M7 17h14"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-sharing-analytics__label-text">
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-name">AI generator inputs</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-meta">Three confirmed sources</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-sharing-analytics__body">
                    <p class="fmstr-cmp-inputs-sharing-analytics__desc">
                      Plain text prompt, paste-list of questions, or PDF upload up to 100 MB on the free plan. DOCX,
                      PPT, image, and URL inputs are not supported today.
                    </p>
                    <div class="fmstr-cmp-inputs-sharing-analytics__pills">
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Text prompt</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Paste-list</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">PDF upload</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-inputs-sharing-analytics__row">
                  <div class="fmstr-cmp-inputs-sharing-analytics__label">
                    <span class="fmstr-cmp-inputs-sharing-analytics__icon" aria-hidden="true">
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
                        <rect x="3" y="3" width="8" height="8" rx="1.5"></rect>
                        <rect x="13" y="3" width="8" height="8" rx="1.5"></rect>
                        <rect x="3" y="13" width="8" height="8" rx="1.5"></rect>
                        <rect x="13" y="13" width="8" height="8" rx="1.5"></rect>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-sharing-analytics__label-text">
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-name">Question types</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-meta"
                        >Field types vs AI auto-generated</span
                      >
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-sharing-analytics__body">
                    <p class="fmstr-cmp-inputs-sharing-analytics__desc">
                      Single choice, multiple choice, dropdown, picture choice, matrix, rating, Likert scale, short
                      answer, paragraph, file upload, signature. AI auto-generates: single, multiple, dropdown,
                      true/false. Other types you add manually.
                    </p>
                    <div class="fmstr-cmp-inputs-sharing-analytics__pills">
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Likert</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Multiple choice</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Open-ended</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Rating</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Matrix</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">File upload</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-inputs-sharing-analytics__row">
                  <div class="fmstr-cmp-inputs-sharing-analytics__label">
                    <span class="fmstr-cmp-inputs-sharing-analytics__icon" aria-hidden="true">
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
                        <circle cx="18" cy="5" r="2.5"></circle>
                        <circle cx="6" cy="12" r="2.5"></circle>
                        <circle cx="18" cy="19" r="2.5"></circle>
                        <path d="m8.2 10.8 7.6-4.6"></path>
                        <path d="m8.2 13.2 7.6 4.6"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-sharing-analytics__label-text">
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-name">Sharing channels</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-meta">Web, mobile, in-person</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-sharing-analytics__body">
                    <p class="fmstr-cmp-inputs-sharing-analytics__desc">
                      Direct link, email, QR code (JPEG, SVG, PNG), inline embed, popup, sidebar, side tab, popover,
                      fullscreen takeover. Native share to WordPress, Webflow, Wix, Shopify, and Canva. Custom subdomain
                      on business plans.
                    </p>
                    <div class="fmstr-cmp-inputs-sharing-analytics__pills">
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Link</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">QR</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Embed</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Popup</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">WordPress</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Webflow</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Shopify</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-inputs-sharing-analytics__row">
                  <div class="fmstr-cmp-inputs-sharing-analytics__label">
                    <span class="fmstr-cmp-inputs-sharing-analytics__icon" aria-hidden="true">
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
                        <path d="M3 3v18h18"></path>
                        <path d="M7 14l4-4 4 4 5-5"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-sharing-analytics__label-text">
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-name">Analytics and exports</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__label-meta">Real-time dashboard</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-sharing-analytics__body">
                    <p class="fmstr-cmp-inputs-sharing-analytics__desc">
                      Completion rate, drop-off rate by page, time spent, per-question summaries, partial-submission
                      dashboard. CSV export, per-submission PDF, API access on Business plans, GA4 and GTM connection,
                      MCP server for AI agents.
                    </p>
                    <div class="fmstr-cmp-inputs-sharing-analytics__pills">
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Completion rate</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Drop-off</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">Time on page</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">CSV / PDF</span>
                      <span class="fmstr-cmp-inputs-sharing-analytics__pill">GA4</span>
                    </div>
                  </div>
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
          <section class="fmstr-cmp-qm-quality-control" aria-labelledby="fmstr-cmp-qm-quality-control-heading">
            <div class="fmstr-cmp-qm-quality-control__container">
              <div class="fmstr-cmp-qm-quality-control__inner">
                <div class="fmstr-cmp-qm-quality-control__text">
                  <span class="fmstr-cmp-qm-quality-control__eyebrow">Instrument quality</span>
                  <h2 id="fmstr-cmp-qm-quality-control-heading" class="fmstr-cmp-qm-quality-control__heading">
                    Research-grade questionnaires, vetted before respondents see them.
                  </h2>
                  <div class="fmstr-cmp-qm-quality-control__body">
                    <p>
                      Leading questions, double-barrelled items, absolute phrasing, and prescriptive scales get flagged
                      before the questionnaire goes live. The generator borrows from established questionnaire design
                      (CSAT, NPS, eNPS, pulse) and warns you when an AI-drafted item drifts from those patterns.
                    </p>
                    <p>
                      Every draft lands in the editor with bias warnings inline. Rewrite the item, change the scale,
                      reorder for response-order effects. Validity is the kind of detail that's hard to retrofit; the
                      editor surfaces it while it's still cheap to fix.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-qm-quality-control__card">
                  <span class="fmstr-cmp-qm-quality-control__pill">What the editor flags</span>
                  <h3 class="fmstr-cmp-qm-quality-control__card-title">Five validity checks before launch.</h3>
                  <ul class="fmstr-cmp-qm-quality-control__list">
                    <li class="fmstr-cmp-qm-quality-control__item">
                      <svg
                        class="fmstr-cmp-qm-quality-control__check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="fmstr-cmp-qm-quality-control__item-text"
                        ><strong>Leading items</strong> that nudge the respondent toward a specific answer.</span
                      >
                    </li>
                    <li class="fmstr-cmp-qm-quality-control__item">
                      <svg
                        class="fmstr-cmp-qm-quality-control__check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="fmstr-cmp-qm-quality-control__item-text"
                        ><strong>Double-barrelled items</strong> that ask two things at once and produce uncodable
                        responses.</span
                      >
                    </li>
                    <li class="fmstr-cmp-qm-quality-control__item">
                      <svg
                        class="fmstr-cmp-qm-quality-control__check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="fmstr-cmp-qm-quality-control__item-text"
                        ><strong>Absolute phrasing</strong> with 'always,' 'never,' 'every' that force a binary read on
                        a continuous trait.</span
                      >
                    </li>
                    <li class="fmstr-cmp-qm-quality-control__item">
                      <svg
                        class="fmstr-cmp-qm-quality-control__check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="fmstr-cmp-qm-quality-control__item-text"
                        ><strong>Prescriptive scales</strong> where the option labels carry a value judgment ('excellent
                        / poor').</span
                      >
                    </li>
                    <li class="fmstr-cmp-qm-quality-control__item">
                      <svg
                        class="fmstr-cmp-qm-quality-control__check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="fmstr-cmp-qm-quality-control__item-text"
                        ><strong>Order effects</strong> where one item's framing biases the next; reorder warning
                        surfaces in the editor.</span
                      >
                    </li>
                  </ul>
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
          <section
            class="fmstr-cmp-questionnaire-vs-survey-vs-form"
            aria-labelledby="fmstr-cmp-questionnaire-vs-survey-vs-form-heading"
          >
            <div class="fmstr-cmp-questionnaire-vs-survey-vs-form__inner">
              <header class="fmstr-cmp-questionnaire-vs-survey-vs-form__header">
                <span class="fmstr-cmp-questionnaire-vs-survey-vs-form__eyebrow">Pick the right tool</span>
                <h2
                  id="fmstr-cmp-questionnaire-vs-survey-vs-form-heading"
                  class="fmstr-cmp-questionnaire-vs-survey-vs-form__heading"
                >
                  Questionnaire vs survey vs form. Pick the right tool for the job.
                </h2>
                <p class="fmstr-cmp-questionnaire-vs-survey-vs-form__sub">
                  The three terms get used interchangeably. They are not the same thing. The choice changes how you
                  design questions, how you analyze data, and which Formester template you should start from.
                </p>
              </header>

              <div class="fmstr-cmp-questionnaire-vs-survey-vs-form__table-wrap">
                <table class="fmstr-cmp-questionnaire-vs-survey-vs-form__table">
                  <thead>
                    <tr>
                      <th></th>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__th--us">Questionnaire</th>
                      <th>Survey</th>
                      <th>Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__row-label">What it is</th>
                      <td class="fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell">
                        The instrument. A structured set of questions.
                      </td>
                      <td>The whole research process: design, sample, distribute, analyze.</td>
                      <td>A data-capture interface for one-off transactions.</td>
                    </tr>
                    <tr>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__row-label">Used for</th>
                      <td class="fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell">
                        Measuring attitudes, opinions, behaviors. Research-grade work.
                      </td>
                      <td>Generalizing findings to a population. Statistical analysis.</td>
                      <td>Booking, signing up, applying, paying, contacting.</td>
                    </tr>
                    <tr>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__row-label">Sample size</th>
                      <td class="fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell">Often small and purposive.</td>
                      <td>Large enough for inference (typically 100+).</td>
                      <td>One respondent per submission.</td>
                    </tr>
                    <tr>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__row-label">Question types</th>
                      <td class="fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell">
                        Likert, rating, ranking, open-ended, multiple choice.
                      </td>
                      <td>Same as questionnaire, plus screeners and quotas.</td>
                      <td>Short answer, dropdown, file upload. Logic optional.</td>
                    </tr>
                    <tr>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__row-label">Time to complete</th>
                      <td class="fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell">5 to 12 minutes.</td>
                      <td>Same range as the questionnaire it uses.</td>
                      <td>Under 2 minutes is the goal.</td>
                    </tr>
                    <tr>
                      <th class="fmstr-cmp-questionnaire-vs-survey-vs-form__row-label">Start here</th>
                      <td class="fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell">
                        <a href="https://formester.com/templates/categories/questionnaire/">Questionnaire templates</a>
                      </td>
                      <td><a href="https://formester.com/ai-survey-generator/">AI Survey Generator</a></td>
                      <td><a href="/ai-form-generator/#ai-form-builder">AI Form Generator</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="fmstr-cmp-questionnaire-vs-survey-vs-form__caption">
                A medical history form is a questionnaire. A clinical study using it across 400 patients is a survey. A
                doctor's appointment booking page is a form. Same input field types, three different jobs.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section
            class="fmstr-cmp-completion-rate-benchmarks"
            aria-labelledby="fmstr-cmp-completion-rate-benchmarks-heading"
          >
            <div class="fmstr-cmp-completion-rate-benchmarks__inner">
              <header class="fmstr-cmp-completion-rate-benchmarks__header">
                <span class="fmstr-cmp-completion-rate-benchmarks__eyebrow">Benchmarks</span>
                <h2
                  id="fmstr-cmp-completion-rate-benchmarks-heading"
                  class="fmstr-cmp-completion-rate-benchmarks__heading"
                >
                  What completion rate should you expect?
                </h2>
                <p class="fmstr-cmp-completion-rate-benchmarks__sub">
                  Knowing the benchmark for your industry tells you whether to push the questionnaire harder or accept
                  the data and ship the analysis.
                </p>
              </header>

              <div class="fmstr-cmp-completion-rate-benchmarks__table-wrap">
                <table class="fmstr-cmp-completion-rate-benchmarks__table">
                  <thead>
                    <tr>
                      <th>Use case</th>
                      <th class="fmstr-cmp-completion-rate-benchmarks__th--rate">Typical completion rate</th>
                      <th>What lifts it</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">Customer feedback (web, email)</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">20% to 30%</td>
                      <td>Short forms, mobile-first design, branded look</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">Employee engagement / pulse</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">30% to 50%</td>
                      <td>Manager endorsement, on-the-clock time, anonymity</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">Healthcare patient intake</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">30% to 40%</td>
                      <td>Pre-filling known answers, plain language</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">B2B SaaS demo or trial form</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">30% to 38%</td>
                      <td>Logic that hides irrelevant fields</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">E-commerce post-purchase</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">28% to 35%</td>
                      <td>Send within 48 hours of purchase</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">Real estate property inquiry</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">25% to 35%</td>
                      <td>Mobile-first, three questions or fewer</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-completion-rate-benchmarks__use-case">SMS or WhatsApp questionnaire</td>
                      <td class="fmstr-cmp-completion-rate-benchmarks__rate-cell">40% to 50%</td>
                      <td>Single-question prompts, tap-to-answer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="fmstr-cmp-completion-rate-benchmarks__note">
                Benchmarks aggregated from third-party industry reports (2026). Cite the original source if you publish
                results externally.
              </p>

              <div class="fmstr-cmp-completion-rate-benchmarks__callout">
                A questionnaire under 12 questions, optimized for mobile, with skip logic that hides irrelevant fields,
                generally clears the upper end of the band. Above 30 questions and the rate drops sharply. Industry
                research shows completion rates above <b>80%</b> for surveys under 10 minutes vs about <b>20%</b> for
                long surveys.
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <ThreeColBenefits
      :description="c8_description"
      :title="c8_title"
      :itemList="c8_itemList"
      class="page-component-item"
    />

    <FeatureShowcase
      description="Six powerful features that make the difference between data you act on and data you toss out."
      :steps="false"
      :title="c9_title"
      :itemList="c9_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-question-types" aria-labelledby="fmstr-cmp-question-types-heading">
            <div class="fmstr-cmp-question-types__inner">
              <header class="fmstr-cmp-question-types__header">
                <span class="fmstr-cmp-question-types__eyebrow">Question types</span>
                <h2 id="fmstr-cmp-question-types-heading" class="fmstr-cmp-question-types__heading">
                  Question types, and when to use each
                </h2>
                <p class="fmstr-cmp-question-types__sub">
                  Pick the question type that matches the data you actually need. Wrong type, wrong analysis.
                </p>
              </header>

              <div class="fmstr-cmp-question-types__grid">
                <article class="fmstr-cmp-question-types__card">
                  <span class="fmstr-cmp-question-types__icon fmstr-cmp-question-types__icon--blue" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="3" y1="20" x2="21" y2="20"></line>
                      <rect x="5" y="11" width="3.5" height="9" rx="0.5"></rect>
                      <rect x="10.25" y="6" width="3.5" height="14" rx="0.5"></rect>
                      <rect x="15.5" y="13" width="3.5" height="7" rx="0.5"></rect>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-question-types__title">Likert scale</h3>
                  <p class="fmstr-cmp-question-types__desc">
                    Use when measuring intensity of an attitude or opinion. Five-point or seven-point. Keep wording
                    balanced. Don't ask "how strongly do you agree" if you also want neutrals.
                  </p>
                </article>

                <article class="fmstr-cmp-question-types__card">
                  <span class="fmstr-cmp-question-types__icon fmstr-cmp-question-types__icon--green" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-question-types__title">Multiple choice</h3>
                  <p class="fmstr-cmp-question-types__desc">
                    Use for demographic data, factual answers, or pre-defined categories. Easy to analyze, fast to
                    answer. Limit to 5 to 7 options on mobile. Add "Other" only if you'll read open-ended replies.
                  </p>
                </article>

                <article class="fmstr-cmp-question-types__card">
                  <span
                    class="fmstr-cmp-question-types__icon fmstr-cmp-question-types__icon--orange"
                    aria-hidden="true"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-question-types__title">Open-ended</h3>
                  <p class="fmstr-cmp-question-types__desc">
                    Use when exploring something you don't know yet, or capturing the language respondents use in their
                    own words. Costs completion rate. Keep to three or fewer per questionnaire.
                  </p>
                </article>

                <article class="fmstr-cmp-question-types__card">
                  <span
                    class="fmstr-cmp-question-types__icon fmstr-cmp-question-types__icon--violet"
                    aria-hidden="true"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                      <circle cx="6" cy="6" r="1.5" fill="currentColor"></circle>
                      <circle cx="6" cy="12" r="1.5" fill="currentColor"></circle>
                      <circle cx="6" cy="18" r="1.5" fill="currentColor"></circle>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-question-types__title">Ranking</h3>
                  <p class="fmstr-cmp-question-types__desc">
                    Use when you need a hierarchy of preferences across more than three options. Avoid on mobile
                    (drag-and-drop is finicky). Use forced-choice pairs if respondents are on phones.
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
          <section class="fmstr-cmp-methodology-research" aria-labelledby="fmstr-cmp-methodology-research-heading">
            <div class="fmstr-cmp-methodology-research__container">
              <div class="fmstr-cmp-methodology-research__inner">
                <div class="fmstr-cmp-methodology-research__text">
                  <span class="fmstr-cmp-methodology-research__eyebrow">Methodology</span>
                  <h2 id="fmstr-cmp-methodology-research-heading" class="fmstr-cmp-methodology-research__heading">
                    Built on questionnaire methodology research, not just feature parity
                  </h2>
                  <div class="fmstr-cmp-methodology-research__body">
                    <p>
                      Most form tools sell features. We design the questionnaire builder around the rules that actually
                      move completion rate.
                      <strong
                        >Ten to fifteen questions per questionnaire. Under ten minutes to complete. Three or fewer
                        open-ended questions. Mobile-first layouts. Skip logic that hides irrelevant fields instead of
                        asking everyone everything. Pilot-testing before launch.</strong
                      >
                    </p>
                    <p>
                      The product enforces what we can. The dashboard surfaces drop-off pages so you can see where the
                      design fails. The AI generator caps default question counts. Partial Submissions captures the data
                      even when the design loses someone halfway through. The rest is on you, and we will tell you what
                      we know.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-methodology-research__card">
                  <span class="fmstr-cmp-methodology-research__pill">Why short matters</span>
                  <blockquote class="fmstr-cmp-methodology-research__quote">
                    "Surveys should be limited to 10 to 15 questions, aiming for a completion time of under 10 minutes.
                    Shorter surveys can achieve completion rates above 80%, whereas longer ones may see rates drop to
                    around 20%."
                  </blockquote>
                  <hr class="fmstr-cmp-methodology-research__divider" />
                  <p class="fmstr-cmp-methodology-research__cite">
                    Industry research on questionnaire design and mobile-completion guidelines, 2025.
                  </p>
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
          <section
            class="fmstr-cmp-who-builds-questionnaires"
            aria-labelledby="fmstr-cmp-who-builds-questionnaires-heading"
          >
            <div class="fmstr-cmp-who-builds-questionnaires__inner">
              <header class="fmstr-cmp-who-builds-questionnaires__header">
                <span class="fmstr-cmp-who-builds-questionnaires__eyebrow">Who builds with Formester</span>
                <h2
                  id="fmstr-cmp-who-builds-questionnaires-heading"
                  class="fmstr-cmp-who-builds-questionnaires__heading"
                >
                  Who builds questionnaires with Formester
                </h2>
                <p class="fmstr-cmp-who-builds-questionnaires__sub">
                  Six teams that ship questionnaires regularly. Each tile links to a template you can clone in seconds.
                </p>
              </header>

              <div class="fmstr-cmp-who-builds-questionnaires__grid">
                <article class="fmstr-cmp-who-builds-questionnaires__card">
                  <span class="fmstr-cmp-who-builds-questionnaires__icon" aria-hidden="true">
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
                      <path d="M9 3v6"></path>
                      <path d="M15 3v6"></path>
                      <path d="M7 9h10v8a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9Z"></path>
                      <path d="M9 3h6"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-who-builds-questionnaires__title">Market researchers</h3>
                  <p class="fmstr-cmp-who-builds-questionnaires__desc">
                    Brand awareness questionnaires, product concept tests, segmentation studies. Skip logic for screener
                    questions, calculated fields for rolling NPS, pilot-testing before fielding to a panel.
                  </p>
                  <a
                    class="fmstr-cmp-who-builds-questionnaires__cta"
                    href="https://formester.com/templates/market-research-survey-701/"
                  >
                    Market research template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>

                <article class="fmstr-cmp-who-builds-questionnaires__card">
                  <span class="fmstr-cmp-who-builds-questionnaires__icon" aria-hidden="true">
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
                      <circle cx="9" cy="8" r="3"></circle>
                      <circle cx="17" cy="9.5" r="2.2"></circle>
                      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"></path>
                      <path d="M14.5 19c0-2.3 1.6-4 3.5-4s3 1.2 3 3"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-who-builds-questionnaires__title">HR and people teams</h3>
                  <p class="fmstr-cmp-who-builds-questionnaires__desc">
                    Engagement pulses, onboarding check-ins, exit interviews, training feedback. Anonymous submissions,
                    scheduled distribution, completion-rate dashboards by team.
                  </p>
                  <a
                    class="fmstr-cmp-who-builds-questionnaires__cta"
                    href="https://formester.com/templates/employee-engagement-survey-template-17645/"
                  >
                    Engagement template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>

                <article class="fmstr-cmp-who-builds-questionnaires__card">
                  <span class="fmstr-cmp-who-builds-questionnaires__icon" aria-hidden="true">
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
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-who-builds-questionnaires__title">Customer success</h3>
                  <p class="fmstr-cmp-who-builds-questionnaires__desc">
                    NPS, CSAT, post-support follow-ups, churn-risk diagnostics. Conditional autoresponder for promoters
                    vs detractors, integration with HubSpot, partial-submission recovery.
                  </p>
                  <a
                    class="fmstr-cmp-who-builds-questionnaires__cta"
                    href="https://formester.com/templates/customer-satisfaction-survey-696/"
                  >
                    CSAT template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>

                <article class="fmstr-cmp-who-builds-questionnaires__card">
                  <span class="fmstr-cmp-who-builds-questionnaires__icon" aria-hidden="true">
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
                      <circle cx="12" cy="12" r="9"></circle>
                      <circle cx="12" cy="12" r="5"></circle>
                      <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-who-builds-questionnaires__title">Marketing and lead generation</h3>
                  <p class="fmstr-cmp-who-builds-questionnaires__desc">
                    Lead-qualification questionnaires, gated-content scoring, content preference surveys. Calculated
                    fields for lead score, branching for persona routing, native HubSpot push.
                  </p>
                  <a
                    class="fmstr-cmp-who-builds-questionnaires__cta"
                    href="https://formester.com/templates/categories/lead-generation/"
                  >
                    Lead-gen templates
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>

                <article class="fmstr-cmp-who-builds-questionnaires__card">
                  <span class="fmstr-cmp-who-builds-questionnaires__icon" aria-hidden="true">
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
                      <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                      <path d="M3.5 10h17"></path>
                      <path d="M8 3v4"></path>
                      <path d="M16 3v4"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-who-builds-questionnaires__title">Event and operations teams</h3>
                  <p class="fmstr-cmp-who-builds-questionnaires__desc">
                    Pre-event registrations, in-event polling, post-event satisfaction. QR-code distribution, partial
                    submission recovery for offline mode, multi-language for global events.
                  </p>
                  <a
                    class="fmstr-cmp-who-builds-questionnaires__cta"
                    href="https://formester.com/templates/event-feedback-survey-698/"
                  >
                    Event feedback template
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>

                <article class="fmstr-cmp-who-builds-questionnaires__card">
                  <span class="fmstr-cmp-who-builds-questionnaires__icon" aria-hidden="true">
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
                      <path d="M12 4 2 9l10 5 10-5-10-5Z"></path>
                      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"></path>
                      <path d="M22 9v5"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-who-builds-questionnaires__title">Academic and student researchers</h3>
                  <p class="fmstr-cmp-who-builds-questionnaires__desc">
                    Coursework questionnaires, dissertation fieldwork, classroom feedback, university-wide pulse
                    studies. Anonymous submissions, AI-assisted question drafting, CSV export for SPSS or R.
                  </p>
                  <a
                    class="fmstr-cmp-who-builds-questionnaires__cta"
                    href="https://formester.com/templates/categories/analysis-and-assessment/"
                  >
                    Assessment templates
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
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
          <section class="fmstr-cmp-api-mcp-developers" aria-labelledby="fmstr-cmp-api-mcp-developers-heading">
            <div class="fmstr-cmp-api-mcp-developers__inner">
              <header class="fmstr-cmp-api-mcp-developers__header">
                <span class="fmstr-cmp-api-mcp-developers__eyebrow">For builders</span>
                <h2 id="fmstr-cmp-api-mcp-developers-heading" class="fmstr-cmp-api-mcp-developers__heading">
                  Your questionnaire data, ready for the AI you already use
                </h2>
                <p class="fmstr-cmp-api-mcp-developers__sub">
                  Every response is queryable through Formester's REST API or its MCP server. Your AI agents can pull
                  data the moment it lands. No scrape, no proxy.
                </p>
              </header>

              <div class="fmstr-cmp-api-mcp-developers__grid">
                <article class="fmstr-cmp-api-mcp-developers__card">
                  <span class="fmstr-cmp-api-mcp-developers__badge">Plug in any AI agent</span>
                  <h3 class="fmstr-cmp-api-mcp-developers__card-title">
                    MCP server for Claude, ChatGPT, and any MCP-compatible model
                  </h3>
                  <div class="fmstr-cmp-api-mcp-developers__chips">
                    <span class="fmstr-cmp-api-mcp-developers__chip">Claude</span>
                    <span class="fmstr-cmp-api-mcp-developers__chip">ChatGPT</span>
                    <span class="fmstr-cmp-api-mcp-developers__chip">Custom agents</span>
                  </div>
                  <p class="fmstr-cmp-api-mcp-developers__desc">
                    Connect Claude or ChatGPT directly to Formester. Ask "which respondents flagged a delivery issue
                    this week," "which question has the highest drop-off," or "summarize this week's NPS comments and
                    group by theme." The agent reads the answer set in real time. No CSV export, no copy-paste, no glue
                    code.
                  </p>
                  <a
                    class="fmstr-cmp-api-mcp-developers__cta"
                    href="https://docs.formester.com/formester-mcp-server.html"
                  >
                    MCP server guide
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>

                <article class="fmstr-cmp-api-mcp-developers__card">
                  <span class="fmstr-cmp-api-mcp-developers__badge fmstr-cmp-api-mcp-developers__badge--alt"
                    >REST API v2</span
                  >
                  <h3 class="fmstr-cmp-api-mcp-developers__card-title">Or build directly on the REST API</h3>
                  <div class="fmstr-cmp-api-mcp-developers__chips">
                    <span class="fmstr-cmp-api-mcp-developers__chip">Self-service token</span>
                    <span class="fmstr-cmp-api-mcp-developers__chip">Org-level scope</span>
                    <span class="fmstr-cmp-api-mcp-developers__chip">Business plan and up</span>
                  </div>
                  <p class="fmstr-cmp-api-mcp-developers__desc">
                    Generate an org-level token from app.formester.com/api in two clicks. Push responses into a
                    warehouse, trigger a downstream job, or build a custom dashboard. Webhooks fire on submission
                    created, updated, or deleted. v1 is still around for legacy form-level integrations, but new builds
                    should start on v2.
                  </p>
                  <a class="fmstr-cmp-api-mcp-developers__cta" href="https://docs.formester.com/formester-api.html">
                    API documentation
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TemplateSection
      :description="c14_description"
      :title="c14_title"
      :button="c14_button"
      :specificTemplate="c14_specificTemplate"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-qm-privacy" aria-labelledby="fmstr-cmp-qm-privacy-heading">
            <div class="fmstr-cmp-qm-privacy__container">
              <div class="fmstr-cmp-qm-privacy__inner">
                <div class="fmstr-cmp-qm-privacy__text">
                  <span class="fmstr-cmp-qm-privacy__eyebrow">Privacy and data ownership</span>
                  <h2 id="fmstr-cmp-qm-privacy-heading" class="fmstr-cmp-qm-privacy__heading">
                    Your questionnaire data is yours. We don't train on it.
                  </h2>
                  <div class="fmstr-cmp-qm-privacy__body">
                    <p>
                      The brief you write to describe the questionnaire, the AI-generated items, and the responses
                      participants submit are all Customer Data. Per Section 4.4 of our Data Processing Addendum,
                      Formester does not use Customer Data to train AI models, run advertising, run analytics, or feed
                      marketing. The Google Gemini integration that drafts the items inherits the same boundary.
                    </p>
                    <p>
                      Your account is encrypted at rest, responses move over TLS, and payment data carries an additional
                      AES-256 layer through Stripe. We are GDPR, UK GDPR, and CCPA compliant. We are not SOC 2, ISO
                      27001, or HIPAA certified yet, and we say so on the security page rather than implying otherwise.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-qm-privacy__card">
                  <span class="fmstr-cmp-qm-privacy__pill">DPA §4.4 · January 2026</span>
                  <blockquote class="fmstr-cmp-qm-privacy__quote">
                    "Formester shall not use Customer Data for purposes of analytics, advertising, marketing, or
                    training of artificial intelligence or machine learning models, except as strictly necessary to
                    provide the Services."
                  </blockquote>
                  <hr class="fmstr-cmp-qm-privacy__divider" />
                  <p class="fmstr-cmp-qm-privacy__cite">Formester Data Processing Addendum, effective January 2026.</p>
                  <div class="fmstr-cmp-qm-privacy__links">
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

    <TestimonialsV2
      version="home"
      :heading="c16_heading"
      :testimonials="c16_testimonials"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c17_ctaValue" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-more-ai-tools-qm" aria-labelledby="fmstr-cmp-more-ai-tools-qm-heading">
            <div class="fmstr-cmp-more-ai-tools-qm__inner">
              <header class="fmstr-cmp-more-ai-tools-qm__header">
                <span class="fmstr-cmp-more-ai-tools-qm__eyebrow">More from Formester</span>
                <h2 id="fmstr-cmp-more-ai-tools-qm-heading" class="fmstr-cmp-more-ai-tools-qm__heading">
                  More AI tools from Formester
                </h2>
                <p class="fmstr-cmp-more-ai-tools-qm__sub">
                  If a questionnaire is not the right fit, one of these probably is.
                </p>
              </header>

              <div class="fmstr-cmp-more-ai-tools-qm__grid">
                <a class="fmstr-cmp-more-ai-tools-qm__card" href="/ai-form-generator/#ai-form-builder">
                  <span class="fmstr-cmp-more-ai-tools-qm__icon" aria-hidden="true">
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
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      <path d="M8 9h8"></path>
                      <path d="M8 13h6"></path>
                      <path d="M8 17h4"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools-qm__card-title">AI Form Generator</h3>
                  <p class="fmstr-cmp-more-ai-tools-qm__desc">Build any form from a prompt or PDF. Ship in minutes.</p>
                  <span class="fmstr-cmp-more-ai-tools-qm__cta">Open AI Form Generator →</span>
                </a>

                <a class="fmstr-cmp-more-ai-tools-qm__card" href="https://formester.com/ai-survey-generator/">
                  <span class="fmstr-cmp-more-ai-tools-qm__icon" aria-hidden="true">
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
                      <line x1="3" y1="20" x2="21" y2="20"></line>
                      <rect x="5" y="11" width="3.5" height="9" rx="0.5"></rect>
                      <rect x="10.25" y="6" width="3.5" height="14" rx="0.5"></rect>
                      <rect x="15.5" y="13" width="3.5" height="7" rx="0.5"></rect>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools-qm__card-title">AI Survey Generator</h3>
                  <p class="fmstr-cmp-more-ai-tools-qm__desc">
                    Generate a full survey from a description. Logic, branding, analytics included.
                  </p>
                  <span class="fmstr-cmp-more-ai-tools-qm__cta">Open AI Survey Generator →</span>
                </a>

                <a class="fmstr-cmp-more-ai-tools-qm__card" href="https://formester.com/ai-quiz-maker/">
                  <span class="fmstr-cmp-more-ai-tools-qm__icon" aria-hidden="true">
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
                      <path
                        d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.5a2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 0 4 2.5 2.5 0 0 0 2 4v.5A2.5 2.5 0 0 0 9.5 20a2.5 2.5 0 0 0 2.5-2.5V4.5A2.5 2.5 0 0 0 9.5 2Z"
                      ></path>
                      <path
                        d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1 0 4 2.5 2.5 0 0 1-2 4v.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 14.5 2Z"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools-qm__card-title">AI Quiz Maker</h3>
                  <p class="fmstr-cmp-more-ai-tools-qm__desc">
                    Auto-generate quizzes with scoring, retake control, and outcome routing.
                  </p>
                  <span class="fmstr-cmp-more-ai-tools-qm__cta">Open AI Quiz Maker →</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FaqSection :title="c19_title" :faqList="c19_faqList" class="page-component-item" />
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import TemplateSection from '@/components/features/TemplateSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Generate a complete questionnaire or survey from one prompt or a PDF in seconds. Add skip logic, branding, and rating scales. Share by link, QR, or email. Track responses, completion rates, and drop-off in real time. Researchers, HR teams, and marketers ship in seconds, not minutes.'
const c0_title = [
  {
    id: 3953,
    text: 'Free Online Questionnaire Maker Built for Actionable Insights',
    highlight: false,
    color: '#000000',
    bold: true,
  },
]
const c0_suggestions = [
  {
    id: 9,
    text: 'Create a UX research questionnaire with 8 questions, Likert scales, and skip logic.',
    label: null,
  },
  {
    id: 10,
    text: 'Create an employee engagement questionnaire with 10 Likert questions and NPS scoring.',
    label: null,
  },
  {
    id: 8,
    text: 'Create a customer satisfaction questionnaire with NPS, CSAT, and an open feedback box.',
    label: null,
  },
]
const c0_footerItems = [
  {
    id: 2241,
    text: 'Free to start - No credit card required',
  },
  {
    id: 2239,
    text: 'No coding required',
  },
  {
    id: 2240,
    text: '✓   Trusted by 56,000+ users',
  },
]
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 3955,
    text: 'Trusted by 56,000+ businesses worldwide',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c2_badges = []
const c3_description =
  'Use a template, an AI prompt, or a blank canvas to start. From there it is four steps: build, refine, ship, and learn. Most teams launch their first questionnaire in under seconds.'
const c3_title = [
  {
    id: 324,
    text: 'How to Create a Free Online Questionnaire in Four Steps?',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c3_itemList = [
  {
    id: 493,
    title: 'Start from a template, a prompt, or a PDF',
    description:
      'Pick a market-research, HR, customer-feedback, or NPS template. Or paste a brief and the AI questionnaire generator builds the structure for you. Or upload the PDF the questionnaire is meant to support and the AI grounds questions in the source. You always edit before publishing.',
    description_markdown:
      'Use one of the free, pre-built templates or let the AI questionnaire maker create one based on your prompt. This feature saves you the effort of crafting each question from scratch, giving you a solid starting point.',
    icon: null,
    cardImage: {
      id: 669,
      imageAlt: 'Navigate to “Create with AI” Tab',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2346,
        name: "a screenshot of formester's ai quiz maker.png",
        alternativeText: "a screenshot of formester's ai quiz maker",
        caption: "a screenshot of formester's ai quiz maker",
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_934_f8fc4b4797.png',
            hash: 'small_Component_934_f8fc4b4797',
            mime: 'image/png',
            name: 'small_Component 934.png',
            path: null,
            size: 50.58,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_934_f8fc4b4797.png',
            hash: 'thumbnail_Component_934_f8fc4b4797',
            mime: 'image/png',
            name: 'thumbnail_Component 934.png',
            path: null,
            size: 12.97,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_934_f8fc4b4797',
        ext: '.png',
        mime: 'image/png',
        size: 15.52,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_934_f8fc4b4797.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-06T16:11:33.944Z',
        updatedAt: '2025-03-04T03:28:47.981Z',
      },
    },
  },
  {
    id: 491,
    title: 'Refine: question types, branching, and brand',
    description:
      'Drag in single choice, multiple choice, dropdown, rating, Likert, matrix, short answer, paragraph, picture choice, file upload, or signature fields. Add skip logic so respondents only see what applies to them. Apply your branding kit so the questionnaire looks like the rest of the campaign.',
    description_markdown:
      'Use the **[drag-and-drop interface](/features/drag-and-drop-form-builder/)** to easily add or remove questions. You can include advanced fields like ratings or scales and customize your questionnaire with your own branding to make it truly yours.',
    icon: null,
    cardImage: {
      id: 671,
      imageAlt: 'Describe your Form',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2382,
        name: "a screenshot of formester's custom branding.svg",
        alternativeText: "a screenshot of formester's custom branding",
        caption: "a screenshot of formester's custom branding",
        width: 682,
        height: 521,
        formats: null,
        hash: 'a_screenshot_of_formester_s_custom_branding_fa5fdd549d',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 404.25,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_formester_s_custom_branding_fa5fdd549d.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-11T03:27:24.259Z',
        updatedAt: '2024-11-11T03:27:24.259Z',
      },
    },
  },
  {
    id: 498,
    title: 'Pilot, set the rules, and lock it down',
    description:
      'Send a draft to a small group, watch the drop-off pattern, and tighten the questions that lose people. Set a response limit, an open-and-close window, and a submission cap. Restrict retakes by IP or email if you need clean data. Turn on Partial Submissions to keep insight from sessions that never finish.',
    description_markdown:
      'Improve your questionnaire with smart features like question branching, form limiter, and auto-save. \n\nThese will help you guide respondents more smoothly and ensure you gather the data you need in an efficient and engaging way.',
    icon: null,
    cardImage: {
      id: 679,
      imageAlt: 'Add Your Questions (Optional)',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2336,
        name: 'Component 942.png',
        alternativeText: null,
        caption: null,
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_942_1cfab7e277.png',
            hash: 'small_Component_942_1cfab7e277',
            mime: 'image/png',
            name: 'small_Component 942.png',
            path: null,
            size: 32.92,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_942_1cfab7e277.png',
            hash: 'thumbnail_Component_942_1cfab7e277',
            mime: 'image/png',
            name: 'thumbnail_Component 942.png',
            path: null,
            size: 9.36,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_942_1cfab7e277',
        ext: '.png',
        mime: 'image/png',
        size: 11.22,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_942_1cfab7e277.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:02:15.599Z',
        updatedAt: '2024-11-05T19:02:15.599Z',
      },
    },
  },
  {
    id: 492,
    title: 'Publish, share, and watch responses land',
    description:
      'end by link or email, generate a QR code, embed inline on a website, drop a popup or sidebar, or share natively to WordPress, Webflow, Wix, Shopify, or Canva. Inside the dashboard, completion rate, drop-off pages, time-on-page, and per-question summaries update live. Export to CSV or PDF whenever you need a hand-off.',
    description_markdown:
      'Share your questionnaire through multiple channels. Publish it on social media, send it via email, or generate a QR code for easy sharing. \n\nYou can also embed the questionnaire on your website or collaborate with team members using multi-user access.',
    icon: null,
    cardImage: {
      id: 672,
      imageAlt: 'Customize Your Form',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2335,
        name: 'Component 931.png',
        alternativeText: 'a screenshot of formester publish ui',
        caption: 'a screenshot of formester publish ui',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_931_6d1d4e253f.png',
            hash: 'small_Component_931_6d1d4e253f',
            mime: 'image/png',
            name: 'small_Component 931.png',
            path: null,
            size: 45.05,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_931_6d1d4e253f.png',
            hash: 'thumbnail_Component_931_6d1d4e253f',
            mime: 'image/png',
            name: 'thumbnail_Component 931.png',
            path: null,
            size: 12.17,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_931_6d1d4e253f',
        ext: '.png',
        mime: 'image/png',
        size: 13.69,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_931_6d1d4e253f.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:02:06.083Z',
        updatedAt: '2024-12-11T03:44:03.282Z',
      },
    },
  },
]
const c8_description =
  'Create, customize, and share professional questionnaires and surveys in seconds. It helps you collect better responses, automate workflows, partial-submission recovery, drop-off analytics, and analyze results without any coding.'
const c8_title = [
  {
    id: 321,
    text: 'Use Our AI Questionnaire Maker that Built For Actual Research',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c8_itemList = [
  {
    id: 500,
    title: 'Templates that fit real research',
    description:
      'Pick from market-research questionnaires, employee engagement, customer satisfaction, NPS, Likert-scale assessments, course evaluations, and event feedback. Every template ships with question logic and scoring already wired up. You change the words; the structure stays the same.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 678,
      imageAlt: 'rocket icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2130,
        name: 'flexible.svg',
        alternativeText: null,
        caption: null,
        width: 69,
        height: 69,
        formats: null,
        hash: 'flexible_289850105c',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 0.9,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/flexible_289850105c.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-30T07:55:34.441Z',
        updatedAt: '2024-09-30T07:55:34.441Z',
      },
    },
  },
  {
    id: 497,
    title: 'AI Generated Questions that takes a PDF, a list, or a prompt',
    description:
      'Paste a research brief and get a full questionnaire back. Upload a PDF (study protocol, training deck, course outline) and the AI builds questions grounded in the source. Or paste your existing question list and let the AI structure it, score it, and apply skip logic.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 670,
      imageAlt: 'star icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2129,
        name: 'payment-processing.svg',
        alternativeText: 'star icon',
        caption: 'star icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'payment_processing_3f1b353410',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.2,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/payment_processing_3f1b353410.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-30T07:55:34.424Z',
        updatedAt: '2024-10-21T05:56:20.012Z',
      },
    },
  },
  {
    id: 496,
    title: 'Custom Branding',
    description: 'Add your logo, colors, fonts, and a custom domain. Match the questionnaire to a campaign or a study.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 673,
      imageAlt: 'workflow icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1623,
        name: 'legal-document-signatures.svg',
        alternativeText: 'signature icon',
        caption: 'signature icon',
        width: 69,
        height: 69,
        formats: null,
        hash: 'legal_document_signatures_3d7c2e2658',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 3.59,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/legal_document_signatures_3d7c2e2658.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-07-31T17:26:39.621Z',
        updatedAt: '2024-10-21T05:56:01.247Z',
      },
    },
  },
  {
    id: 499,
    title: 'Smart Logic and Personalization',
    description:
      'Show, hide, or branch questions based on previous answers. Skip whole sections for respondents they don\'t apply to. Pipe earlier answers into later questions for context. Set up branching in plain English ("if role is contractor, hide salary section") and Formester converts it.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 676,
      imageAlt: 'data flow icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1613,
        name: 'integrations.svg',
        alternativeText: 'security icon',
        caption: 'security icon',
        width: 69,
        height: 69,
        formats: null,
        hash: 'integrations_f083da9aaf',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 3.3,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/integrations_f083da9aaf.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-07-31T16:42:03.856Z',
        updatedAt: '2024-10-21T05:56:12.217Z',
      },
    },
  },
  {
    id: 495,
    title: '1,000+ integrations, plus webhooks and an MCP server',
    description:
      'Native connections to HubSpot, Google Sheets, Slack, Stripe, PayPal, Calendly, GA4, n8n, Pabbly Connect, Mailgun, SendGrid, and Outlook. Add Zapier for the long tail. For developers, Formester ships a public REST API and an MCP server, so Claude or ChatGPT can read responses directly.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 677,
      imageAlt: 'rocket icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1674,
        name: 'connected.svg',
        alternativeText: 'connected icon',
        caption: 'connected icon',
        width: 69,
        height: 69,
        formats: null,
        hash: 'connected_cefd076a47',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 2.7,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/connected_cefd076a47.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T07:45:49.427Z',
        updatedAt: '2024-10-21T05:56:37.557Z',
      },
    },
  },
  {
    id: 501,
    title: 'Real-Time Reports and Insights',
    description:
      "Watch responses land in real time. The dashboard shows completion rate, drop-off rate by page, average time spent, and a per-question breakdown for choice and rating fields. Partial Submissions captures answers from respondents who never reached the submit button, so you don't lose insight to incomplete sessions.",
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 675,
      imageAlt: 'analytics icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1886,
        name: 'analytics icon.svg',
        alternativeText: 'analytics icon',
        caption: 'analytics icon',
        width: 69,
        height: 68,
        formats: null,
        hash: 'robust_analytics_cd40e12719',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.04,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_cd40e12719.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-05T04:56:59.983Z',
        updatedAt: '2024-09-05T05:03:59.073Z',
      },
    },
  },
]
const c9_title = [
  {
    id: 322,
    text: 'Powerful Features that researchers, marketers and ops teams actually use',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c9_itemList = [
  {
    id: 490,
    title: 'Question Branching',
    description:
      "Show or hide whole sections based on previous answers. A researcher sees the researcher block; an employee sees the employee block; nobody sees what doesn't apply to them. Branching cuts apparent length, which lifts completion rate.",
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 667,
      imageAlt: "formester's conditional logic ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2336,
        name: 'Component 942.png',
        alternativeText: null,
        caption: null,
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_942_1cfab7e277.png',
            hash: 'small_Component_942_1cfab7e277',
            mime: 'image/png',
            name: 'small_Component 942.png',
            path: null,
            size: 32.92,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_942_1cfab7e277.png',
            hash: 'thumbnail_Component_942_1cfab7e277',
            mime: 'image/png',
            name: 'thumbnail_Component 942.png',
            path: null,
            size: 9.36,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_942_1cfab7e277',
        ext: '.png',
        mime: 'image/png',
        size: 11.22,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_942_1cfab7e277.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:02:15.599Z',
        updatedAt: '2024-11-05T19:02:15.599Z',
      },
    },
  },
  {
    id: 488,
    title: 'Partial Submission Recovery',
    description:
      ' Capture answers from respondents who close the tab on question 12. The dashboard surfaces partial responses next to full ones, so you can see where people drop off and what they answered before they left. Many basic form tools throw partial data away; Formester does not.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 666,
      imageAlt: "formester's partial submissions ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1994,
        name: "a screenshot of formester's partial submission.svg",
        alternativeText: "a screenshot of formester's partial submission",
        caption: "a screenshot of formester's partial submission",
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_925_09c922c915',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 79.32,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_09c922c915.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-06T10:47:36.313Z',
        updatedAt: '2024-09-06T10:47:55.583Z',
      },
    },
  },
  {
    id: 487,
    title: 'Email Autoresponder with Conditional Triggers',
    description:
      'Send a follow-up the moment a respondent submits a response. Branch the email by their answer (different copy for "promoter" vs "detractor", different attachment for "interested" vs "evaluating"). Use it to thank, route, schedule, or kick off the next step.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 664,
      imageAlt: "formester's email autoresponder ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2381,
        name: "a screenshot of formester's email autoresponder ui.svg",
        alternativeText: "a screenshot of formester's email autoresponder ui",
        caption: "a screenshot of formester's email autoresponder ui",
        width: 682,
        height: 522,
        formats: null,
        hash: 'a_screenshot_of_formester_s_email_autoresponder_ui_d2039cda00',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 209.5,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_formester_s_email_autoresponder_ui_d2039cda00.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-11T03:27:24.204Z',
        updatedAt: '2024-11-11T04:25:47.541Z',
      },
    },
  },
  {
    id: 489,
    title: 'Scoring and Weighted Ranking',
    description:
      'Assign points per answer, weight some questions heavier than others, and apply pass thresholds. Useful for lead scoring, NPS calculations, employee assessments, and academic evaluations. Show the score on the thank-you page or keep it admin-only.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 665,
      imageAlt: "formester's scoring ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1655,
        name: 'create-interactive-forms.svg',
        alternativeText: null,
        caption: null,
        width: 486,
        height: 287,
        formats: null,
        hash: 'create_interactive_forms_6bf83e19cf',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 126.4,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/create_interactive_forms_6bf83e19cf.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-07-31T18:40:41.492Z',
        updatedAt: '2024-07-31T18:40:41.492Z',
      },
    },
  },
  {
    id: 485,
    title: 'Form Limiter',
    description:
      'Cap the questionnaire at a number of responses, an open window, or a per-respondent rule (one submission per email or per IP). Useful for sample-size targets, time-bounded studies, and exclusive-access campaigns.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 698,
      imageAlt: "formester's form limiter ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2020,
        name: 'a screenshot of setting form submission start date in formester.svg',
        alternativeText: 'a screenshot of setting form submission start date in formester',
        caption: 'a screenshot of setting form submission start date in formester',
        width: 682,
        height: 522,
        formats: null,
        hash: 'Component_926_c9c3c80b09',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 162.77,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_c9c3c80b09.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-06T11:00:40.348Z',
        updatedAt: '2024-09-06T11:01:42.939Z',
      },
    },
  },
  {
    id: 486,
    title: 'QR Code Generation',
    description:
      'Generate a per-questionnaire QR code in your own brand colors. Download as JPEG, SVG, or PNG. Useful for events, classrooms, retail intercepts, healthcare intake stations, and any setting where a phone is the easiest way to start.',
    description_markdown:
      'Make your questionnaire more accessible by generating a unique QR code. This feature allows respondents to access your questionnaire quickly by simply scanning the code with their mobile device.',
    icon: null,
    cardImage: {
      id: 699,
      imageAlt: "formester's qr code generator ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2013,
        name: 'a screenshot of sharing a custom qr code in formester.svg',
        alternativeText: 'a screenshot of sharing a custom qr code in formester',
        caption: 'a screenshot of sharing a custom qr code in formester',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_925_3_35ae251d81',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 110.6,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_3_35ae251d81.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-06T10:56:21.303Z',
        updatedAt: '2024-09-06T10:58:02.629Z',
      },
    },
  },
]
const c14_description =
  'Forty-plus questionnaire templates across research, HR, customer feedback, and academic use. Every one ships with question logic, scoring, and a sensible default field order. You change the words; the structure works.'
const c14_title = [
  {
    id: 325,
    text: 'Questionnaire Templates with the Structure already Built',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c14_button = {
  id: 305,
  link: '/templates/categories/survey-forms/',
  text: 'More templates',
  type: 'Primary',
  showArrow: null,
}
const c14_specificTemplate = []
const c16_heading = [
  {
    id: 323,
    text: 'What customers say after they shipped Questionnaires',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c16_testimonials = [
  {
    id: 2,
    name: 'Jilson',
    position: 'Organiser',
    organization: 'Vue Conference',
    comment:
      'Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.',
    createdAt: '2024-06-18T03:48:46.610Z',
    updatedAt: '2025-01-22T02:57:08.760Z',
    publishedAt: '2024-06-18T03:48:50.595Z',
    companyLogo: {
      id: 228,
      imageAlt: 'photo-of-vue-conference',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1680,
        name: 'vueconf.webp',
        alternativeText: 'photo-of-vue-conference',
        caption: 'photo-of-vue-conference',
        width: 80,
        height: 80,
        formats: null,
        hash: 'vueconf_1bc3dc0827',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.07,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_1bc3dc0827.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.731Z',
        updatedAt: '2024-12-01T07:47:11.024Z',
      },
    },
  },
  {
    id: 4,
    name: 'Costanza Casullo',
    position: 'Volunteer',
    organization: 'Wato Coding Hub',
    comment:
      "Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.",
    createdAt: '2024-06-18T03:51:15.232Z',
    updatedAt: '2025-01-22T02:58:03.674Z',
    publishedAt: '2024-06-18T03:51:21.477Z',
    companyLogo: {
      id: 225,
      imageAlt: 'wato-coding-hub-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1681,
        name: 'wato-coding-hub.webp',
        alternativeText: 'wato-coding-hub-logo',
        caption: 'wato-coding-hub-logo',
        width: 80,
        height: 81,
        formats: null,
        hash: 'wato_coding_hub_e054f0ea9d',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.88,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/wato_coding_hub_e054f0ea9d.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.738Z',
        updatedAt: '2024-12-01T07:49:13.371Z',
      },
    },
  },
  {
    id: 68,
    name: 'Deepika K',
    position: 'Business Development Executive',
    organization: null,
    comment:
      "Formester AI form builder has lots of customisation options. It's very easy to generate online forms. Forms generated are also very user friendly it supports both mobile and desktop version. It also allows us to build our own custom themes. File upload is also possible in surveys. I love the simplicity with which I can create forms within couple of minutes without any coding knowledge. The UI is very attractive and easy to use. No prior experience is required to use it.",
    createdAt: '2026-05-03T09:28:05.067Z',
    updatedAt: '2026-05-03T09:30:18.660Z',
    publishedAt: '2026-05-03T09:30:06.733Z',
    companyLogo: null,
  },
  {
    id: 39,
    name: 'Alex',
    position: 'Customer Success Manager',
    organization: 'Orion Growth Partners',
    comment:
      "Tried like 4 quiz tools for our lead gen funnel before this and honestly this is the only one I didn't end up hating. AI did most of the work and the customization actually works.",
    createdAt: '2025-06-29T23:32:05.746Z',
    updatedAt: '2026-05-11T05:16:55.955Z',
    publishedAt: '2025-06-29T23:32:07.219Z',
    companyLogo: {
      id: 3647,
      imageAlt: 'logo of orion',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4092,
        name: 'logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x.png',
        alternativeText: null,
        caption: null,
        width: 200,
        height: 86,
        formats: null,
        hash: 'logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd',
        ext: '.png',
        mime: 'image/png',
        size: 3,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-29T17:02:25.502Z',
        updatedAt: '2025-10-29T17:02:25.502Z',
      },
    },
  },
  {
    id: 37,
    name: 'Chris',
    position: 'Operations Lead',
    organization: 'SummitCloud Software',
    comment:
      'Very intuitive and the surveys look genuinely professional out of the box. Most importantly, I requested a custom rating scale and they shipped it within hours. Stellar support that is hands-down better than the Jotform.',
    createdAt: '2025-06-29T23:30:38.521Z',
    updatedAt: '2026-05-11T05:18:51.458Z',
    publishedAt: '2025-06-29T23:30:40.007Z',
    companyLogo: {
      id: 3650,
      imageAlt: 'summit-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4096,
        name: 'summit-logo.png',
        alternativeText: 'summit-logo',
        caption: 'summit-logo',
        width: 200,
        height: 26,
        formats: null,
        hash: 'summit_logo_f5bfb8ce29',
        ext: '.png',
        mime: 'image/png',
        size: 1.42,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/summit_logo_f5bfb8ce29.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.826Z',
        updatedAt: '2025-10-31T04:00:11.826Z',
      },
    },
  },
  {
    id: 1,
    name: 'Dr. Michele Ross',
    position: 'Founder',
    organization: 'Infused Health',
    comment:
      "I'm migrating my forms from Paperform, where I've been a user for over 4 years. Loving the software so far! I've already replaced Paperform form embeds & popups on my sites & my husband's websites with Formester forms",
    createdAt: '2024-06-18T03:47:14.605Z',
    updatedAt: '2025-01-22T02:57:30.159Z',
    publishedAt: '2024-06-18T03:47:18.889Z',
    companyLogo: {
      id: 227,
      imageAlt: 'Dr. Michele Ross',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1685,
        name: 'dr._michelelogo.webp',
        alternativeText: null,
        caption: null,
        width: 300,
        height: 59,
        formats: {
          thumbnail: {
            ext: '.webp',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_dr_michelelogo_2269ae2211.webp',
            hash: 'thumbnail_dr_michelelogo_2269ae2211',
            mime: 'image/webp',
            name: 'thumbnail_dr._michelelogo.webp',
            path: null,
            size: 5.58,
            width: 245,
            height: 48,
          },
        },
        hash: 'dr_michelelogo_2269ae2211',
        ext: '.webp',
        mime: 'image/webp',
        size: 5.87,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/dr_michelelogo_2269ae2211.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.944Z',
        updatedAt: '2024-08-01T14:38:23.944Z',
      },
    },
  },
]
const c17_ctaValue = {
  id: 100,
  description:
    'Free plan: unlimited questionnaires and responses, AI generator, all field types, drop-off analytics. No credit card required to start',
  type: 'Questionnaire CTA',
  createdAt: '2026-04-28T10:47:37.393Z',
  updatedAt: '2026-05-07T18:23:42.339Z',
  publishedAt: '2026-04-29T03:25:16.733Z',
  locale: 'en',
  title: [
    {
      id: 3863,
      text: 'Build a Questionnaire that Respondents Actually Finish',
      highlight: false,
      color: '#475467',
      bold: false,
    },
  ],
  buttons: [
    {
      id: 1222,
      link: 'https://app.formester.com/users/sign_up',
      text: 'Get Started For Free Today!',
      type: 'Primary',
      showArrow: null,
    },
    {
      id: 1223,
      link: 'https://formester.com/templates/categories/questionnaire/',
      text: 'See all questionnaire templates → ',
      type: 'Secondary',
      showArrow: null,
    },
  ],
  localizations: [],
}
const c19_title = [
  {
    id: 326,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c19_faqList = [
  {
    id: 193,
    header: 'What is a questionnaire maker?',
    body: 'A questionnaire maker is a tool that helps you create and share questionnaires online. It lets you add questions, customize the design, and collect responses in one place without technical skills.',
    body_markdown: null,
    list: [],
  },
  {
    id: 188,
    header: 'Is Formester free to use?',
    body: 'Yes. The free plan includes unlimited questionnaires, unlimited responses, all field types, the AI questionnaire generator, drop-off analytics, payment collection, and templates. Conditional logic and PDF export start at the Personal plan ($13/month). Branded URLs and team seats start at Business ($49/month). No credit card to start.',
    body_markdown: null,
    list: [],
  },
  {
    id: 191,
    header: 'How do I create an online questionnaire?',
    body: 'Three ways: pick a template from the questionnaire category, paste a brief and let the AI generator build the structure, or upload a PDF (study protocol, training deck, course outline) for the AI to ground questions in your source. Edit, apply branding, set skip logic, and ship by link, QR, or embed.',
    body_markdown: null,
    list: [],
  },
  {
    id: 190,
    header: 'How does the AI questionnaire generator work?',
    body: 'You describe the questionnaire ("post-event satisfaction for a B2B conference, 12 questions, mostly Likert"), upload a PDF for grounding, or paste a list of questions for the AI to format and score. The AI returns a full draft with field types, skip logic, and scoring already wired up. You edit before publishing. Per our DPA, your prompts and uploads are not used to train the AI or to advertise to you.',
    body_markdown: null,
    list: [],
  },
  {
    id: 189,
    header: 'What question types can I use? ',
    body: 'Single choice, multiple choice, dropdown, rating, Likert scale, matrix, picture choice, short answer, paragraph, file upload, and signature. The AI generator auto-creates single, multiple, dropdown, and true/false out of the box. You add the rest manually after the AI builds the structure.',
    body_markdown: null,
    list: [],
  },
  {
    id: 192,
    header: 'What is question branching?',
    body: 'Question branching shows different questions based on a person’s previous answer. This keeps questionnaires relevant and helps you collect more accurate responses.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1505,
    header: 'Can I collect responses if someone doesn’t finish the questionnaire?',
    body: 'Yes. Partial submission recovery allows you to capture responses even if a user leaves before completing the questionnaire.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1506,
    header: 'How can I share my questionnaire with others?',
    body: 'You can share your questionnaire using a direct link, email, QR code, or by embedding it on your website. This makes it easy for anyone to respond from any device.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1721,
    header: 'What is the difference between a questionnaire and a survey?',
    body: 'A questionnaire is the instrument: a structured set of written questions designed to collect specific information. A survey is the entire research process that uses the questionnaire, including sampling, distribution, and analysis. A medical history form is a questionnaire; a study using it across 400 patients is a survey. Formester helps you build the questionnaire and run the survey end to end.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1722,
    header: 'How long should a questionnaire be? ',
    body: "For most use cases, 10-15 questions and under 10 minutes. The Drag'nSurvey study shows completion rates above 80 percent for surveys under 10 minutes vs about 20 percent for long surveys. If you need more depth, split into a screener (under 5 questions) and a follow-up sent only to qualified respondents.",
    body_markdown: null,
    list: [],
  },
  {
    id: 1723,
    header: 'Is my respondent data used to train AI or sold to advertisers? ',
    body: 'No. Per the Formester DPA, customer data is not used for analytics, advertising, marketing, or product training. Encryption in transit (TLS) and at rest. Annual third-party penetration testing. Compliant with GDPR,; the security page lists current compliance status.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1724,
    header: 'Can I run an academic research questionnaire on Formester? ',
    body: 'Yes. The free plan supports unlimited responses and includes anonymous submissions, partial submission recovery, all field types, and CSV export for SPSS or R. The AI generator can draft questions from a study protocol PDF.',
    body_markdown: null,
    list: [],
  },
]

useHead({
  title: 'Free Online Questionnaire Maker and Survey Creator',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/questionnaire-maker/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-13T04:48:31.834Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Build free online questionnaires in 30 seconds. Generate questions with AI, add skip logic and branding, share by link or QR, and analyze responses in real time.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free Online Questionnaire Maker and Survey Creator',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/questionnaire-maker​​/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free Online Questionnaire Maker and Survey Creator',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Build free online questionnaires in 30 seconds. Generate questions with AI, add skip logic and branding, share by link or QR, and analyze responses in real time.',
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
      content: 'https://formester.com/questionnaire-maker​​/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free Online Questionnaire Maker and Survey Creator',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Build free online questionnaires in 30 seconds. Generate questions with AI, add skip logic and branding, share by link or QR, and analyze responses in real time.',
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
      content: [
        'questionnaire maker​',
        'team building questionnaire​',
        'how make questionnaire​',
        'Online questionnaire ',
        'free questionnaire builder​',
        'how to make likert scale questionnaire​',
        'ai questionnaire​',
        'online questionnaire maker​',
        'free online questionnaire',
      ],
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
        sameAs: [
          'https://www.linkedin.com/company/formester-inc/',
          'https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ',
          'https://www.instagram.com/_formester_',
          'https://www.facebook.com/formester',
          'https://x.com/_Formester_',
        ],
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: '49D, Jugsalai',
            addressCountry: 'India',
            addressLocality: 'Jamshedpur',
          },
          {
            '@type': 'PostalAddress',
            addressRegion: 'Delaware',
            streetAddress: '2035 Sunset Lake',
            addressCountry: 'United States',
          },
        ],
        contactPoint: {
          url: 'https://formester.com/contact',
          '@type': 'ContactPoint',
          email: 'support@formester.com',
          contactType: 'customer support',
        },
      },
      {
        '@id': 'https://formester.com/questionnaire-maker/#webpage',
        url: 'https://formester.com/questionnaire-maker/',
        name: 'Free Online Questionnaire Maker and Survey Creator',
        '@type': 'WebPage',
        headline: 'Free Online Questionnaire Built for Actionable Insights',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/questionnaire-maker/#breadcrumb',
        },
        inLanguage: 'en-US',
        description:
          'Create and share professional questionnaires online with Formester. Use templates, AI question generation, logic branching, and analytics to collect better responses.',
        dateModified: '2026-05-09',
        datePublished: '2024-06-07',
      },
      {
        '@id': 'https://formester.com/questionnaire-maker/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/questionnaire-maker/',
            name: 'Questionnaire Maker',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/questionnaire-maker/#software',
        url: 'https://formester.com/questionnaire-maker/',
        name: 'Formester Questionnaire Maker',
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
            price: '13',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '13',
              priceCurrency: 'USD',
              billingIncrement: 'P1M',
            },
          },
          {
            url: 'https://formester.com/pricing/',
            name: 'Business',
            '@type': 'Offer',
            price: '49',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '49',
              priceCurrency: 'USD',
              billingIncrement: 'P1M',
            },
          },
        ],
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
        description:
          'Online questionnaire maker with templates, AI question generation, conditional logic, and built-in analytics. Free plan covers unlimited questionnaires and unlimited responses with all field types.',
        aggregateRating: {
          '@type': 'AggregateRating',
          bestRating: '5',
          ratingValue: '4.7',
          reviewCount: '33',
          worstRating: '1',
        },
        operatingSystem: 'Web-based',
        applicationCategory: 'BusinessApplication',
      },
      {
        '@id': 'https://formester.com/questionnaire-maker/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'What is a questionnaire maker?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'A questionnaire maker is a tool that helps you create and share questionnaires online. It lets you add questions, customize the design, and collect responses in one place without technical skills.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is Formester free to use?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. The free plan includes unlimited questionnaires, unlimited responses, all field types, the AI questionnaire generator, drop-off analytics, payment collection, and templates. Conditional logic and PDF export start at the Personal plan ($13/month). Branded URLs and team seats start at Business ($49/month). No credit card to start.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I create an online questionnaire?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Three ways: pick a template from the questionnaire category, paste a brief and let the AI generator build the structure, or upload a PDF (study protocol, training deck, course outline) for the AI to ground questions in your source. Edit, apply branding, set skip logic, and ship by link, QR, or embed.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How does the AI questionnaire generator work?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You describe the questionnaire ("post-event satisfaction for a B2B conference, 12 questions, mostly Likert"), upload a PDF for grounding, or paste a list of questions for the AI to format and score. The AI returns a full draft with field types, skip logic, and scoring already wired up. You edit before publishing. Per our DPA, your prompts and uploads are not used to train the AI or to advertise to you.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What question types can I use?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Single choice, multiple choice, dropdown, rating, Likert scale, matrix, picture choice, short answer, paragraph, file upload, and signature. The AI generator auto-creates single, multiple, dropdown, and true/false out of the box. You add the rest manually after the AI builds the structure.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What is question branching?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Question branching shows different questions based on a person’s previous answer. This keeps questionnaires relevant and helps you collect more accurate responses.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I collect responses if someone doesn’t finish the questionnaire?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Partial submission recovery allows you to capture responses even if a user leaves before completing the questionnaire.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How can I share my questionnaire with others?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You can share your questionnaire using a direct link, email, QR code, or by embedding it on your website. This makes it easy for anyone to respond from any device.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What is the difference between a questionnaire and a survey?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'A questionnaire is the instrument: a structured set of written questions designed to collect specific information. A survey is the entire research process that uses the questionnaire, including sampling, distribution, and analysis. A medical history form is a questionnaire; a study using it across 400 patients is a survey. Formester helps you build the questionnaire and run the survey end to end.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How long should a questionnaire be?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "For most use cases, 10-15 questions and under 10 minutes. The Drag'nSurvey study shows completion rates above 80 percent for surveys under 10 minutes vs about 20 percent for long surveys. If you need more depth, split into a screener (under 5 questions) and a follow-up sent only to qualified respondents.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Is my respondent data used to train AI or sold to advertisers?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'No. Per the Formester DPA, customer data is not used for analytics, advertising, marketing, or product training. Encryption in transit (TLS) and at rest. Annual third-party penetration testing. Compliant with GDPR,; the security page lists current compliance status.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I run an academic research questionnaire on Formester?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. The free plan supports unlimited responses and includes anonymous submissions, partial submission recovery, all field types, and CSV export for SPSS or R. The AI generator can draft questions from a study protocol PDF.',
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

.fmstr-cmp-inputs-sharing-analytics {
  --fmstr-cmp-inputs-sharing-analytics-bg-section: #f9fafb;
  --fmstr-cmp-inputs-sharing-analytics-bg-card: #ffffff;
  --fmstr-cmp-inputs-sharing-analytics-bg-violet-25: #f7f3ff;
  --fmstr-cmp-inputs-sharing-analytics-bg-violet-100: #f4ebff;
  --fmstr-cmp-inputs-sharing-analytics-fg-1: #101828;
  --fmstr-cmp-inputs-sharing-analytics-fg-2: #475467;
  --fmstr-cmp-inputs-sharing-analytics-fg-3: #697586;
  --fmstr-cmp-inputs-sharing-analytics-violet-600: #6941c6;
  --fmstr-cmp-inputs-sharing-analytics-border-light: #eaecf0;
  --fmstr-cmp-inputs-sharing-analytics-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-inputs-sharing-analytics-fs-xs: 12px;
  --fmstr-cmp-inputs-sharing-analytics-fs-sm: 14px;
  --fmstr-cmp-inputs-sharing-analytics-fs-md: 16px;
  --fmstr-cmp-inputs-sharing-analytics-fs-2xl: 24px;
  --fmstr-cmp-inputs-sharing-analytics-fs-3xl: 36px;
  --fmstr-cmp-inputs-sharing-analytics-fw-semibold: 600;
  --fmstr-cmp-inputs-sharing-analytics-fw-bold: 700;
  --fmstr-cmp-inputs-sharing-analytics-lh-sm: 20px;
  --fmstr-cmp-inputs-sharing-analytics-lh-md: 24px;
  --fmstr-cmp-inputs-sharing-analytics-lh-2xl: 32px;
  --fmstr-cmp-inputs-sharing-analytics-space-1: 4px;
  --fmstr-cmp-inputs-sharing-analytics-space-2: 8px;
  --fmstr-cmp-inputs-sharing-analytics-space-3: 12px;
  --fmstr-cmp-inputs-sharing-analytics-space-4: 16px;
  --fmstr-cmp-inputs-sharing-analytics-space-5: 20px;
  --fmstr-cmp-inputs-sharing-analytics-space-6: 24px;
  --fmstr-cmp-inputs-sharing-analytics-space-7: 28px;
  --fmstr-cmp-inputs-sharing-analytics-space-8: 32px;
  --fmstr-cmp-inputs-sharing-analytics-space-10: 40px;
  --fmstr-cmp-inputs-sharing-analytics-space-12: 48px;
  --fmstr-cmp-inputs-sharing-analytics-space-16: 64px;
  --fmstr-cmp-inputs-sharing-analytics-r-lg: 8px;
  --fmstr-cmp-inputs-sharing-analytics-r-2xl: 16px;
  --fmstr-cmp-inputs-sharing-analytics-r-full: 9999px;

  background: var(--fmstr-cmp-inputs-sharing-analytics-bg-section);
  padding: var(--fmstr-cmp-inputs-sharing-analytics-space-16) var(--fmstr-cmp-inputs-sharing-analytics-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-inputs-sharing-analytics *,
.fmstr-cmp-inputs-sharing-analytics *::before,
.fmstr-cmp-inputs-sharing-analytics *::after {
  box-sizing: border-box;
}

.fmstr-cmp-inputs-sharing-analytics__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-inputs-sharing-analytics__header {
  margin: 0 auto var(--fmstr-cmp-inputs-sharing-analytics-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-inputs-sharing-analytics__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-inputs-sharing-analytics-space-1) var(--fmstr-cmp-inputs-sharing-analytics-space-3);
  background: var(--fmstr-cmp-inputs-sharing-analytics-bg-violet-100);
  color: var(--fmstr-cmp-inputs-sharing-analytics-violet-600);
  border-radius: var(--fmstr-cmp-inputs-sharing-analytics-r-full);
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-xs);
  font-weight: var(--fmstr-cmp-inputs-sharing-analytics-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-inputs-sharing-analytics-space-4);
}

.fmstr-cmp-inputs-sharing-analytics__heading {
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-inputs-sharing-analytics-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-inputs-sharing-analytics-fg-1);
  margin: 0 0 var(--fmstr-cmp-inputs-sharing-analytics-space-3);
}

.fmstr-cmp-inputs-sharing-analytics__sub {
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-md);
  line-height: var(--fmstr-cmp-inputs-sharing-analytics-lh-md);
  color: var(--fmstr-cmp-inputs-sharing-analytics-fg-3);
  margin: 0;
}

.fmstr-cmp-inputs-sharing-analytics__card {
  background: var(--fmstr-cmp-inputs-sharing-analytics-bg-card);
  border: 1px solid var(--fmstr-cmp-inputs-sharing-analytics-border-light);
  border-radius: var(--fmstr-cmp-inputs-sharing-analytics-r-2xl);
  box-shadow: var(--fmstr-cmp-inputs-sharing-analytics-shadow-xs);
  overflow: hidden;
}

.fmstr-cmp-inputs-sharing-analytics__row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--fmstr-cmp-inputs-sharing-analytics-space-8);
  padding: var(--fmstr-cmp-inputs-sharing-analytics-space-7) var(--fmstr-cmp-inputs-sharing-analytics-space-8);
  border-bottom: 1px solid var(--fmstr-cmp-inputs-sharing-analytics-border-light);
}

.fmstr-cmp-inputs-sharing-analytics__row:last-child {
  border-bottom: none;
}

.fmstr-cmp-inputs-sharing-analytics__label {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-inputs-sharing-analytics-space-4);
}

.fmstr-cmp-inputs-sharing-analytics__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-inputs-sharing-analytics-r-lg);
  background: var(--fmstr-cmp-inputs-sharing-analytics-bg-violet-25);
  color: var(--fmstr-cmp-inputs-sharing-analytics-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-inputs-sharing-analytics__label-text {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-inputs-sharing-analytics-space-1);
  padding-top: var(--fmstr-cmp-inputs-sharing-analytics-space-1);
}
.fmstr-cmp-inputs-sharing-analytics__label-name {
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-md);
  line-height: var(--fmstr-cmp-inputs-sharing-analytics-lh-md);
  font-weight: var(--fmstr-cmp-inputs-sharing-analytics-fw-semibold);
  color: var(--fmstr-cmp-inputs-sharing-analytics-fg-1);
}
.fmstr-cmp-inputs-sharing-analytics__label-meta {
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-sm);
  line-height: var(--fmstr-cmp-inputs-sharing-analytics-lh-sm);
  color: var(--fmstr-cmp-inputs-sharing-analytics-fg-3);
}

.fmstr-cmp-inputs-sharing-analytics__body {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-inputs-sharing-analytics-space-5);
}
.fmstr-cmp-inputs-sharing-analytics__desc {
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-md);
  line-height: var(--fmstr-cmp-inputs-sharing-analytics-lh-md);
  color: var(--fmstr-cmp-inputs-sharing-analytics-fg-2);
  margin: 0;
}

.fmstr-cmp-inputs-sharing-analytics__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-inputs-sharing-analytics-space-2);
}
.fmstr-cmp-inputs-sharing-analytics__pill {
  display: inline-flex;
  align-items: center;
  padding: var(--fmstr-cmp-inputs-sharing-analytics-space-2) var(--fmstr-cmp-inputs-sharing-analytics-space-4);
  border-radius: var(--fmstr-cmp-inputs-sharing-analytics-r-full);
  background: var(--fmstr-cmp-inputs-sharing-analytics-bg-violet-100);
  color: var(--fmstr-cmp-inputs-sharing-analytics-violet-600);
  font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-sm);
  line-height: var(--fmstr-cmp-inputs-sharing-analytics-lh-sm);
  font-weight: var(--fmstr-cmp-inputs-sharing-analytics-fw-semibold);
}

@media (max-width: 760px) {
  .fmstr-cmp-inputs-sharing-analytics {
    padding: var(--fmstr-cmp-inputs-sharing-analytics-space-12) var(--fmstr-cmp-inputs-sharing-analytics-space-4);
  }
  .fmstr-cmp-inputs-sharing-analytics__heading {
    font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-2xl);
    line-height: var(--fmstr-cmp-inputs-sharing-analytics-lh-2xl);
  }
  .fmstr-cmp-inputs-sharing-analytics__row {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-inputs-sharing-analytics-space-5);
    padding: var(--fmstr-cmp-inputs-sharing-analytics-space-6);
  }
  .fmstr-cmp-inputs-sharing-analytics__pill {
    font-size: var(--fmstr-cmp-inputs-sharing-analytics-fs-xs);
    padding: var(--fmstr-cmp-inputs-sharing-analytics-space-1) var(--fmstr-cmp-inputs-sharing-analytics-space-3);
  }
}

.fmstr-cmp-qm-quality-control {
  --fmstr-cmp-qm-quality-control-bg-section: #0f0921;
  --fmstr-cmp-qm-quality-control-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-qm-quality-control-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-qm-quality-control-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-qm-quality-control-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-qm-quality-control-bg-row: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-qm-quality-control-fg-eyebrow: #bda6ff;
  --fmstr-cmp-qm-quality-control-fg-row: rgba(255, 255, 255, 0.85);
  --fmstr-cmp-qm-quality-control-fg-row-tag: #bda6ff;
  --fmstr-cmp-qm-quality-control-fs-xs: 12px;
  --fmstr-cmp-qm-quality-control-fs-sm: 14px;
  --fmstr-cmp-qm-quality-control-fs-md: 16px;
  --fmstr-cmp-qm-quality-control-fs-lg: 18px;
  --fmstr-cmp-qm-quality-control-fs-2xl: 24px;
  --fmstr-cmp-qm-quality-control-fs-3xl: 32px;
  --fmstr-cmp-qm-quality-control-fw-bold: 700;
  --fmstr-cmp-qm-quality-control-lh-md: 24px;
  --fmstr-cmp-qm-quality-control-lh-lg: 28px;
  --fmstr-cmp-qm-quality-control-lh-2xl: 32px;
  --fmstr-cmp-qm-quality-control-space-2: 8px;
  --fmstr-cmp-qm-quality-control-space-3: 12px;
  --fmstr-cmp-qm-quality-control-space-4: 16px;
  --fmstr-cmp-qm-quality-control-space-5: 20px;
  --fmstr-cmp-qm-quality-control-space-6: 24px;
  --fmstr-cmp-qm-quality-control-space-7: 28px;
  --fmstr-cmp-qm-quality-control-space-8: 32px;
  --fmstr-cmp-qm-quality-control-space-12: 48px;
  --fmstr-cmp-qm-quality-control-r-md: 8px;
  --fmstr-cmp-qm-quality-control-r-2xl: 16px;
  --fmstr-cmp-qm-quality-control-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-qm-quality-control-space-12) var(--fmstr-cmp-qm-quality-control-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-qm-quality-control *,
.fmstr-cmp-qm-quality-control *::before,
.fmstr-cmp-qm-quality-control *::after {
  box-sizing: border-box;
}

.fmstr-cmp-qm-quality-control__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-qm-quality-control-bg-section);
  background-image: var(--fmstr-cmp-qm-quality-control-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-qm-quality-control-space-12);
  overflow: hidden;
}

.fmstr-cmp-qm-quality-control__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-qm-quality-control-space-12);
  align-items: center;
}

.fmstr-cmp-qm-quality-control__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-qm-quality-control-space-2) var(--fmstr-cmp-qm-quality-control-space-4);
  background: var(--fmstr-cmp-qm-quality-control-bg-pill);
  color: var(--fmstr-cmp-qm-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-qm-quality-control-r-full);
  font-size: var(--fmstr-cmp-qm-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-qm-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-qm-quality-control-space-5);
}

.fmstr-cmp-qm-quality-control__heading {
  font-size: var(--fmstr-cmp-qm-quality-control-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-qm-quality-control-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-qm-quality-control-space-6);
}

.fmstr-cmp-qm-quality-control__body p {
  font-size: var(--fmstr-cmp-qm-quality-control-fs-md);
  line-height: var(--fmstr-cmp-qm-quality-control-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-qm-quality-control-space-4);
}
.fmstr-cmp-qm-quality-control__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-qm-quality-control__card {
  background-color: var(--fmstr-cmp-qm-quality-control-bg-card);
  background-image: var(--fmstr-cmp-qm-quality-control-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-qm-quality-control-r-2xl);
  padding: var(--fmstr-cmp-qm-quality-control-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-qm-quality-control__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-qm-quality-control-space-2) var(--fmstr-cmp-qm-quality-control-space-4);
  background: var(--fmstr-cmp-qm-quality-control-bg-pill);
  color: var(--fmstr-cmp-qm-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-qm-quality-control-r-full);
  font-size: var(--fmstr-cmp-qm-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-qm-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-qm-quality-control-space-5);
}

.fmstr-cmp-qm-quality-control__card-title {
  font-size: var(--fmstr-cmp-qm-quality-control-fs-lg);
  line-height: var(--fmstr-cmp-qm-quality-control-lh-lg);
  font-weight: var(--fmstr-cmp-qm-quality-control-fw-bold);
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-qm-quality-control-space-5);
}

.fmstr-cmp-qm-quality-control__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-qm-quality-control-space-2);
}

.fmstr-cmp-qm-quality-control__item {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-qm-quality-control-space-3);
  padding: var(--fmstr-cmp-qm-quality-control-space-3) var(--fmstr-cmp-qm-quality-control-space-4);
  background: var(--fmstr-cmp-qm-quality-control-bg-row);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--fmstr-cmp-qm-quality-control-r-md);
}

.fmstr-cmp-qm-quality-control__check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--fmstr-cmp-qm-quality-control-fg-row-tag);
  margin-top: 2px;
}

.fmstr-cmp-qm-quality-control__item-text {
  font-size: var(--fmstr-cmp-qm-quality-control-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-qm-quality-control-fg-row);
}
.fmstr-cmp-qm-quality-control__item-text strong {
  color: #ffffff;
  font-weight: var(--fmstr-cmp-qm-quality-control-fw-bold);
}

@media (max-width: 760px) {
  .fmstr-cmp-qm-quality-control {
    padding: var(--fmstr-cmp-qm-quality-control-space-8) var(--fmstr-cmp-qm-quality-control-space-4);
  }
  .fmstr-cmp-qm-quality-control__container {
    padding: var(--fmstr-cmp-qm-quality-control-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-qm-quality-control__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-qm-quality-control-space-8);
  }
  .fmstr-cmp-qm-quality-control__heading {
    font-size: var(--fmstr-cmp-qm-quality-control-fs-2xl);
    line-height: var(--fmstr-cmp-qm-quality-control-lh-2xl);
  }
  .fmstr-cmp-qm-quality-control__card {
    padding: var(--fmstr-cmp-qm-quality-control-space-6);
  }
}

.fmstr-cmp-questionnaire-vs-survey-vs-form {
  --fmstr-cmp-questionnaire-vs-survey-vs-form-bg-section: #f9fafb;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-bg-card: #ffffff;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-bg-row-alt: #fcfcfd;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-bg-violet-25: #f7f3ff;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-bg-violet-100: #f4ebff;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fg-1: #101828;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fg-2: #475467;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fg-3: #697586;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-violet-600: #6941c6;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-violet-700: #53389e;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-border-light: #eaecf0;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fs-xs: 12px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fs-sm: 14px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fs-md: 16px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fs-2xl: 24px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fs-3xl: 36px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fw-semibold: 600;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-fw-bold: 700;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-lh-md: 24px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-lh-2xl: 32px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-1: 4px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-3: 12px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-4: 16px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-5: 20px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-6: 24px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-8: 32px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-10: 40px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-12: 48px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-space-16: 64px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-r-2xl: 16px;
  --fmstr-cmp-questionnaire-vs-survey-vs-form-r-full: 9999px;

  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-section);
  padding: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-16)
    var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form *,
.fmstr-cmp-questionnaire-vs-survey-vs-form *::before,
.fmstr-cmp-questionnaire-vs-survey-vs-form *::after {
  box-sizing: border-box;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__header {
  margin: 0 auto var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-1)
    var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-3);
  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-violet-100);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-violet-600);
  border-radius: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-r-full);
  font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-xs);
  font-weight: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-4);
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__heading {
  font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-1);
  margin: 0 0 var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-3);
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__sub {
  font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-md);
  line-height: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-lh-md);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-3);
  margin: 0;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table-wrap {
  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-card);
  border: 1px solid var(--fmstr-cmp-questionnaire-vs-survey-vs-form-border-light);
  border-radius: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-r-2xl);
  box-shadow: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-shadow-xs);
  overflow: hidden;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-sm);
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table thead th {
  text-align: left;
  padding: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-5)
    var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-6);
  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-row-alt);
  border-bottom: 1px solid var(--fmstr-cmp-questionnaire-vs-survey-vs-form-border-light);
  font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-xs);
  font-weight: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fw-bold);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table thead th.fmstr-cmp-questionnaire-vs-survey-vs-form__th--us {
  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-violet-25);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-violet-700);
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table tbody td,
.fmstr-cmp-questionnaire-vs-survey-vs-form__table tbody th {
  padding: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-4)
    var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-6);
  border-bottom: 1px solid var(--fmstr-cmp-questionnaire-vs-survey-vs-form-border-light);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-2);
  line-height: 1.5;
  vertical-align: top;
  text-align: left;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table tbody tr:last-child td,
.fmstr-cmp-questionnaire-vs-survey-vs-form__table tbody tr:last-child th {
  border-bottom: 0;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__row-label {
  font-weight: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fw-semibold);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-1);
  width: 24%;
  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-row-alt);
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__us-cell {
  background: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-bg-violet-25);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-1);
  font-weight: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fw-semibold);
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__table a {
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-violet-600);
  font-weight: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fw-semibold);
  text-decoration: none;
}
.fmstr-cmp-questionnaire-vs-survey-vs-form__table a:hover {
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-violet-700);
  text-decoration: underline;
}

.fmstr-cmp-questionnaire-vs-survey-vs-form__caption {
  margin: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-5) 0 0;
  font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-sm);
  line-height: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-lh-md);
  color: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fg-3);
  font-style: italic;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 760px) {
  .fmstr-cmp-questionnaire-vs-survey-vs-form {
    padding: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-12)
      var(--fmstr-cmp-questionnaire-vs-survey-vs-form-space-4);
  }
  .fmstr-cmp-questionnaire-vs-survey-vs-form__heading {
    font-size: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-fs-2xl);
    line-height: var(--fmstr-cmp-questionnaire-vs-survey-vs-form-lh-2xl);
  }
  .fmstr-cmp-questionnaire-vs-survey-vs-form__table-wrap {
    overflow-x: auto;
  }
  .fmstr-cmp-questionnaire-vs-survey-vs-form__table {
    min-width: 720px;
  }
}

.fmstr-cmp-completion-rate-benchmarks {
  --fmstr-cmp-completion-rate-benchmarks-bg-section: #f9fafb;
  --fmstr-cmp-completion-rate-benchmarks-bg-card: #ffffff;
  --fmstr-cmp-completion-rate-benchmarks-bg-row-alt: #fcfcfd;
  --fmstr-cmp-completion-rate-benchmarks-bg-violet-25: #f7f3ff;
  --fmstr-cmp-completion-rate-benchmarks-bg-violet-100: #f4ebff;
  --fmstr-cmp-completion-rate-benchmarks-bg-callout: #f7f3ff;
  --fmstr-cmp-completion-rate-benchmarks-fg-1: #101828;
  --fmstr-cmp-completion-rate-benchmarks-fg-2: #475467;
  --fmstr-cmp-completion-rate-benchmarks-fg-3: #697586;
  --fmstr-cmp-completion-rate-benchmarks-violet-600: #6941c6;
  --fmstr-cmp-completion-rate-benchmarks-violet-700: #53389e;
  --fmstr-cmp-completion-rate-benchmarks-border-light: #eaecf0;
  --fmstr-cmp-completion-rate-benchmarks-border-violet: #d6c4ff;
  --fmstr-cmp-completion-rate-benchmarks-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-completion-rate-benchmarks-fs-xs: 12px;
  --fmstr-cmp-completion-rate-benchmarks-fs-sm: 14px;
  --fmstr-cmp-completion-rate-benchmarks-fs-md: 16px;
  --fmstr-cmp-completion-rate-benchmarks-fs-2xl: 24px;
  --fmstr-cmp-completion-rate-benchmarks-fs-3xl: 36px;
  --fmstr-cmp-completion-rate-benchmarks-fw-semibold: 600;
  --fmstr-cmp-completion-rate-benchmarks-fw-bold: 700;
  --fmstr-cmp-completion-rate-benchmarks-lh-md: 24px;
  --fmstr-cmp-completion-rate-benchmarks-lh-2xl: 32px;
  --fmstr-cmp-completion-rate-benchmarks-space-1: 4px;
  --fmstr-cmp-completion-rate-benchmarks-space-3: 12px;
  --fmstr-cmp-completion-rate-benchmarks-space-4: 16px;
  --fmstr-cmp-completion-rate-benchmarks-space-5: 20px;
  --fmstr-cmp-completion-rate-benchmarks-space-6: 24px;
  --fmstr-cmp-completion-rate-benchmarks-space-8: 32px;
  --fmstr-cmp-completion-rate-benchmarks-space-10: 40px;
  --fmstr-cmp-completion-rate-benchmarks-space-12: 48px;
  --fmstr-cmp-completion-rate-benchmarks-space-16: 64px;
  --fmstr-cmp-completion-rate-benchmarks-r-lg: 12px;
  --fmstr-cmp-completion-rate-benchmarks-r-2xl: 16px;
  --fmstr-cmp-completion-rate-benchmarks-r-full: 9999px;

  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-section);
  padding: var(--fmstr-cmp-completion-rate-benchmarks-space-16) var(--fmstr-cmp-completion-rate-benchmarks-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-completion-rate-benchmarks *,
.fmstr-cmp-completion-rate-benchmarks *::before,
.fmstr-cmp-completion-rate-benchmarks *::after {
  box-sizing: border-box;
}

.fmstr-cmp-completion-rate-benchmarks__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-completion-rate-benchmarks__header {
  margin: 0 auto var(--fmstr-cmp-completion-rate-benchmarks-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-completion-rate-benchmarks__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-completion-rate-benchmarks-space-1) var(--fmstr-cmp-completion-rate-benchmarks-space-3);
  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-violet-100);
  color: var(--fmstr-cmp-completion-rate-benchmarks-violet-600);
  border-radius: var(--fmstr-cmp-completion-rate-benchmarks-r-full);
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-xs);
  font-weight: var(--fmstr-cmp-completion-rate-benchmarks-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-completion-rate-benchmarks-space-4);
}

.fmstr-cmp-completion-rate-benchmarks__heading {
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-completion-rate-benchmarks-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-1);
  margin: 0 0 var(--fmstr-cmp-completion-rate-benchmarks-space-3);
}

.fmstr-cmp-completion-rate-benchmarks__sub {
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-md);
  line-height: var(--fmstr-cmp-completion-rate-benchmarks-lh-md);
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-3);
  margin: 0;
}

.fmstr-cmp-completion-rate-benchmarks__table-wrap {
  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-card);
  border: 1px solid var(--fmstr-cmp-completion-rate-benchmarks-border-light);
  border-radius: var(--fmstr-cmp-completion-rate-benchmarks-r-2xl);
  box-shadow: var(--fmstr-cmp-completion-rate-benchmarks-shadow-xs);
  overflow: hidden;
}

.fmstr-cmp-completion-rate-benchmarks__table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-sm);
}

.fmstr-cmp-completion-rate-benchmarks__table thead th {
  text-align: left;
  padding: var(--fmstr-cmp-completion-rate-benchmarks-space-5) var(--fmstr-cmp-completion-rate-benchmarks-space-6);
  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-row-alt);
  border-bottom: 1px solid var(--fmstr-cmp-completion-rate-benchmarks-border-light);
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-xs);
  font-weight: var(--fmstr-cmp-completion-rate-benchmarks-fw-bold);
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.fmstr-cmp-completion-rate-benchmarks__table thead th.fmstr-cmp-completion-rate-benchmarks__th--rate {
  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-violet-25);
  color: var(--fmstr-cmp-completion-rate-benchmarks-violet-700);
  border-bottom-color: var(--fmstr-cmp-completion-rate-benchmarks-border-violet);
}

.fmstr-cmp-completion-rate-benchmarks__table tbody td {
  padding: var(--fmstr-cmp-completion-rate-benchmarks-space-4) var(--fmstr-cmp-completion-rate-benchmarks-space-6);
  border-bottom: 1px solid var(--fmstr-cmp-completion-rate-benchmarks-border-light);
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-2);
  line-height: 1.5;
  vertical-align: top;
}

.fmstr-cmp-completion-rate-benchmarks__table tbody tr:last-child td {
  border-bottom: 0;
}

.fmstr-cmp-completion-rate-benchmarks__use-case {
  font-weight: var(--fmstr-cmp-completion-rate-benchmarks-fw-semibold);
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-1);
  width: 30%;
}

.fmstr-cmp-completion-rate-benchmarks__rate-cell {
  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-violet-25);
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-1);
  font-weight: var(--fmstr-cmp-completion-rate-benchmarks-fw-semibold);
  font-variant-numeric: tabular-nums;
  width: 22%;
}

.fmstr-cmp-completion-rate-benchmarks__note {
  margin: var(--fmstr-cmp-completion-rate-benchmarks-space-5) 0 var(--fmstr-cmp-completion-rate-benchmarks-space-6);
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-sm);
  line-height: var(--fmstr-cmp-completion-rate-benchmarks-lh-md);
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-3);
  font-style: italic;
  text-align: center;
}

.fmstr-cmp-completion-rate-benchmarks__callout {
  margin-top: var(--fmstr-cmp-completion-rate-benchmarks-space-6);
  padding: var(--fmstr-cmp-completion-rate-benchmarks-space-6);
  background: var(--fmstr-cmp-completion-rate-benchmarks-bg-callout);
  border: 1px solid var(--fmstr-cmp-completion-rate-benchmarks-border-violet);
  border-radius: var(--fmstr-cmp-completion-rate-benchmarks-r-lg);
  font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-sm);
  line-height: 1.6;
  color: var(--fmstr-cmp-completion-rate-benchmarks-fg-2);
}

.fmstr-cmp-completion-rate-benchmarks__callout b {
  color: var(--fmstr-cmp-completion-rate-benchmarks-violet-700);
  font-weight: var(--fmstr-cmp-completion-rate-benchmarks-fw-bold);
}

@media (max-width: 760px) {
  .fmstr-cmp-completion-rate-benchmarks {
    padding: var(--fmstr-cmp-completion-rate-benchmarks-space-12) var(--fmstr-cmp-completion-rate-benchmarks-space-4);
  }
  .fmstr-cmp-completion-rate-benchmarks__heading {
    font-size: var(--fmstr-cmp-completion-rate-benchmarks-fs-2xl);
    line-height: var(--fmstr-cmp-completion-rate-benchmarks-lh-2xl);
  }
  .fmstr-cmp-completion-rate-benchmarks__table-wrap {
    overflow-x: auto;
  }
  .fmstr-cmp-completion-rate-benchmarks__table {
    min-width: 600px;
  }
}

.fmstr-cmp-question-types {
  --fmstr-cmp-question-types-bg-section: #ffffff;
  --fmstr-cmp-question-types-bg-card: #ffffff;
  --fmstr-cmp-question-types-bg-violet-100: #f4ebff;
  --fmstr-cmp-question-types-fg-1: #101828;
  --fmstr-cmp-question-types-fg-2: #475467;
  --fmstr-cmp-question-types-fg-3: #697586;
  --fmstr-cmp-question-types-violet-600: #6941c6;
  --fmstr-cmp-question-types-border-light: #eaecf0;
  --fmstr-cmp-question-types-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-question-types-shadow-tile: 0 4px 10px -2px rgba(16, 24, 40, 0.15);
  --fmstr-cmp-question-types-fs-xs: 12px;
  --fmstr-cmp-question-types-fs-sm: 14px;
  --fmstr-cmp-question-types-fs-md: 16px;
  --fmstr-cmp-question-types-fs-lg: 18px;
  --fmstr-cmp-question-types-fs-2xl: 24px;
  --fmstr-cmp-question-types-fs-3xl: 36px;
  --fmstr-cmp-question-types-fw-semibold: 600;
  --fmstr-cmp-question-types-fw-bold: 700;
  --fmstr-cmp-question-types-lh-md: 24px;
  --fmstr-cmp-question-types-lh-lg: 28px;
  --fmstr-cmp-question-types-lh-2xl: 32px;
  --fmstr-cmp-question-types-space-1: 4px;
  --fmstr-cmp-question-types-space-3: 12px;
  --fmstr-cmp-question-types-space-4: 16px;
  --fmstr-cmp-question-types-space-6: 24px;
  --fmstr-cmp-question-types-space-8: 32px;
  --fmstr-cmp-question-types-space-10: 40px;
  --fmstr-cmp-question-types-space-12: 48px;
  --fmstr-cmp-question-types-space-16: 64px;
  --fmstr-cmp-question-types-r-lg: 12px;
  --fmstr-cmp-question-types-r-2xl: 16px;
  --fmstr-cmp-question-types-r-full: 9999px;

  background: var(--fmstr-cmp-question-types-bg-section);
  padding: var(--fmstr-cmp-question-types-space-16) var(--fmstr-cmp-question-types-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-question-types *,
.fmstr-cmp-question-types *::before,
.fmstr-cmp-question-types *::after {
  box-sizing: border-box;
}

.fmstr-cmp-question-types__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-question-types__header {
  margin: 0 auto var(--fmstr-cmp-question-types-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-question-types__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-question-types-space-1) var(--fmstr-cmp-question-types-space-3);
  background: var(--fmstr-cmp-question-types-bg-violet-100);
  color: var(--fmstr-cmp-question-types-violet-600);
  border-radius: var(--fmstr-cmp-question-types-r-full);
  font-size: var(--fmstr-cmp-question-types-fs-xs);
  font-weight: var(--fmstr-cmp-question-types-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-question-types-space-4);
}

.fmstr-cmp-question-types__heading {
  font-size: var(--fmstr-cmp-question-types-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-question-types-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-question-types-fg-1);
  margin: 0 0 var(--fmstr-cmp-question-types-space-3);
}

.fmstr-cmp-question-types__sub {
  font-size: var(--fmstr-cmp-question-types-fs-md);
  line-height: var(--fmstr-cmp-question-types-lh-md);
  color: var(--fmstr-cmp-question-types-fg-3);
  margin: 0;
}

.fmstr-cmp-question-types__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-question-types-space-6);
}

.fmstr-cmp-question-types__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-question-types-space-4);
  padding: var(--fmstr-cmp-question-types-space-8);
  background: var(--fmstr-cmp-question-types-bg-card);
  border: 1px solid var(--fmstr-cmp-question-types-border-light);
  border-radius: var(--fmstr-cmp-question-types-r-2xl);
  box-shadow: var(--fmstr-cmp-question-types-shadow-xs);
}

.fmstr-cmp-question-types__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-question-types-r-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: var(--fmstr-cmp-question-types-shadow-tile);
}
.fmstr-cmp-question-types__icon--blue {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
.fmstr-cmp-question-types__icon--green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}
.fmstr-cmp-question-types__icon--orange {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
}
.fmstr-cmp-question-types__icon--violet {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}

.fmstr-cmp-question-types__title {
  font-size: var(--fmstr-cmp-question-types-fs-lg);
  line-height: var(--fmstr-cmp-question-types-lh-lg);
  font-weight: var(--fmstr-cmp-question-types-fw-bold);
  color: var(--fmstr-cmp-question-types-fg-1);
  margin: 0;
}

.fmstr-cmp-question-types__desc {
  font-size: var(--fmstr-cmp-question-types-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-question-types-fg-2);
  margin: 0;
}

@media (max-width: 1100px) {
  .fmstr-cmp-question-types__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-question-types {
    padding: var(--fmstr-cmp-question-types-space-12) var(--fmstr-cmp-question-types-space-4);
  }
  .fmstr-cmp-question-types__heading {
    font-size: var(--fmstr-cmp-question-types-fs-2xl);
    line-height: var(--fmstr-cmp-question-types-lh-2xl);
  }
  .fmstr-cmp-question-types__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-methodology-research {
  --fmstr-cmp-methodology-research-bg-section: #0f0921;
  --fmstr-cmp-methodology-research-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-methodology-research-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-methodology-research-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-methodology-research-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-methodology-research-fg-eyebrow: #bda6ff;
  --fmstr-cmp-methodology-research-fg-link: #bda6ff;
  --fmstr-cmp-methodology-research-fg-link-hover: #ffffff;
  --fmstr-cmp-methodology-research-fs-xs: 12px;
  --fmstr-cmp-methodology-research-fs-sm: 14px;
  --fmstr-cmp-methodology-research-fs-md: 16px;
  --fmstr-cmp-methodology-research-fs-lg: 18px;
  --fmstr-cmp-methodology-research-fs-2xl: 24px;
  --fmstr-cmp-methodology-research-fs-3xl: 32px;
  --fmstr-cmp-methodology-research-fw-semibold: 600;
  --fmstr-cmp-methodology-research-fw-bold: 700;
  --fmstr-cmp-methodology-research-lh-md: 24px;
  --fmstr-cmp-methodology-research-lh-lg: 28px;
  --fmstr-cmp-methodology-research-lh-2xl: 32px;
  --fmstr-cmp-methodology-research-space-2: 8px;
  --fmstr-cmp-methodology-research-space-3: 12px;
  --fmstr-cmp-methodology-research-space-4: 16px;
  --fmstr-cmp-methodology-research-space-5: 20px;
  --fmstr-cmp-methodology-research-space-6: 24px;
  --fmstr-cmp-methodology-research-space-7: 28px;
  --fmstr-cmp-methodology-research-space-8: 32px;
  --fmstr-cmp-methodology-research-space-12: 48px;
  --fmstr-cmp-methodology-research-r-2xl: 16px;
  --fmstr-cmp-methodology-research-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-methodology-research-space-12) var(--fmstr-cmp-methodology-research-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-methodology-research *,
.fmstr-cmp-methodology-research *::before,
.fmstr-cmp-methodology-research *::after {
  box-sizing: border-box;
}

.fmstr-cmp-methodology-research__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-methodology-research-bg-section);
  background-image: var(--fmstr-cmp-methodology-research-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-methodology-research-space-12);
  overflow: hidden;
}

.fmstr-cmp-methodology-research__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-methodology-research-space-12);
  align-items: center;
}

.fmstr-cmp-methodology-research__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-methodology-research-space-2) var(--fmstr-cmp-methodology-research-space-4);
  background: var(--fmstr-cmp-methodology-research-bg-pill);
  color: var(--fmstr-cmp-methodology-research-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-methodology-research-r-full);
  font-size: var(--fmstr-cmp-methodology-research-fs-xs);
  font-weight: var(--fmstr-cmp-methodology-research-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-methodology-research-space-5);
}

.fmstr-cmp-methodology-research__heading {
  font-size: var(--fmstr-cmp-methodology-research-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-methodology-research-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-methodology-research-space-6);
}

.fmstr-cmp-methodology-research__body p {
  font-size: var(--fmstr-cmp-methodology-research-fs-md);
  line-height: var(--fmstr-cmp-methodology-research-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-methodology-research-space-4);
}
.fmstr-cmp-methodology-research__body p:last-child {
  margin-bottom: 0;
}
.fmstr-cmp-methodology-research__body strong {
  color: #ffffff;
  font-weight: var(--fmstr-cmp-methodology-research-fw-semibold);
}

.fmstr-cmp-methodology-research__card {
  background-color: var(--fmstr-cmp-methodology-research-bg-card);
  background-image: var(--fmstr-cmp-methodology-research-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-methodology-research-r-2xl);
  padding: var(--fmstr-cmp-methodology-research-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-methodology-research__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-methodology-research-space-2) var(--fmstr-cmp-methodology-research-space-4);
  background: var(--fmstr-cmp-methodology-research-bg-pill);
  color: var(--fmstr-cmp-methodology-research-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-methodology-research-r-full);
  font-size: var(--fmstr-cmp-methodology-research-fs-xs);
  font-weight: var(--fmstr-cmp-methodology-research-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-methodology-research-space-5);
}

.fmstr-cmp-methodology-research__quote {
  font-size: var(--fmstr-cmp-methodology-research-fs-lg);
  line-height: var(--fmstr-cmp-methodology-research-lh-lg);
  font-weight: var(--fmstr-cmp-methodology-research-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-methodology-research-space-5);
}

.fmstr-cmp-methodology-research__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-methodology-research-space-5);
}

.fmstr-cmp-methodology-research__cite {
  font-size: var(--fmstr-cmp-methodology-research-fs-sm);
  line-height: var(--fmstr-cmp-methodology-research-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.fmstr-cmp-methodology-research__cite a {
  color: var(--fmstr-cmp-methodology-research-fg-link);
  font-weight: var(--fmstr-cmp-methodology-research-fw-semibold);
  text-decoration: none;
}
.fmstr-cmp-methodology-research__cite a:hover {
  color: var(--fmstr-cmp-methodology-research-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-methodology-research {
    padding: var(--fmstr-cmp-methodology-research-space-8) var(--fmstr-cmp-methodology-research-space-4);
  }
  .fmstr-cmp-methodology-research__container {
    padding: var(--fmstr-cmp-methodology-research-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-methodology-research__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-methodology-research-space-8);
  }
  .fmstr-cmp-methodology-research__heading {
    font-size: var(--fmstr-cmp-methodology-research-fs-2xl);
    line-height: var(--fmstr-cmp-methodology-research-lh-2xl);
  }
  .fmstr-cmp-methodology-research__quote {
    font-size: var(--fmstr-cmp-methodology-research-fs-md);
    line-height: var(--fmstr-cmp-methodology-research-lh-md);
  }
  .fmstr-cmp-methodology-research__card {
    padding: var(--fmstr-cmp-methodology-research-space-6);
  }
}

.fmstr-cmp-who-builds-questionnaires {
  --fmstr-cmp-who-builds-questionnaires-bg-section: #f9fafb;
  --fmstr-cmp-who-builds-questionnaires-bg-card: #ffffff;
  --fmstr-cmp-who-builds-questionnaires-bg-violet-25: #f7f3ff;
  --fmstr-cmp-who-builds-questionnaires-bg-violet-100: #f4ebff;
  --fmstr-cmp-who-builds-questionnaires-fg-1: #101828;
  --fmstr-cmp-who-builds-questionnaires-fg-2: #475467;
  --fmstr-cmp-who-builds-questionnaires-fg-3: #697586;
  --fmstr-cmp-who-builds-questionnaires-violet-600: #6941c6;
  --fmstr-cmp-who-builds-questionnaires-violet-700: #53389e;
  --fmstr-cmp-who-builds-questionnaires-border-light: #eaecf0;
  --fmstr-cmp-who-builds-questionnaires-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-who-builds-questionnaires-fs-xs: 12px;
  --fmstr-cmp-who-builds-questionnaires-fs-sm: 14px;
  --fmstr-cmp-who-builds-questionnaires-fs-md: 16px;
  --fmstr-cmp-who-builds-questionnaires-fs-lg: 18px;
  --fmstr-cmp-who-builds-questionnaires-fs-2xl: 24px;
  --fmstr-cmp-who-builds-questionnaires-fs-3xl: 36px;
  --fmstr-cmp-who-builds-questionnaires-fw-semibold: 600;
  --fmstr-cmp-who-builds-questionnaires-fw-bold: 700;
  --fmstr-cmp-who-builds-questionnaires-lh-md: 24px;
  --fmstr-cmp-who-builds-questionnaires-lh-lg: 28px;
  --fmstr-cmp-who-builds-questionnaires-lh-2xl: 32px;
  --fmstr-cmp-who-builds-questionnaires-space-1: 4px;
  --fmstr-cmp-who-builds-questionnaires-space-2: 8px;
  --fmstr-cmp-who-builds-questionnaires-space-3: 12px;
  --fmstr-cmp-who-builds-questionnaires-space-4: 16px;
  --fmstr-cmp-who-builds-questionnaires-space-5: 20px;
  --fmstr-cmp-who-builds-questionnaires-space-6: 24px;
  --fmstr-cmp-who-builds-questionnaires-space-8: 32px;
  --fmstr-cmp-who-builds-questionnaires-space-10: 40px;
  --fmstr-cmp-who-builds-questionnaires-space-12: 48px;
  --fmstr-cmp-who-builds-questionnaires-space-16: 64px;
  --fmstr-cmp-who-builds-questionnaires-r-lg: 8px;
  --fmstr-cmp-who-builds-questionnaires-r-2xl: 16px;
  --fmstr-cmp-who-builds-questionnaires-r-full: 9999px;

  background: var(--fmstr-cmp-who-builds-questionnaires-bg-section);
  padding: var(--fmstr-cmp-who-builds-questionnaires-space-16) var(--fmstr-cmp-who-builds-questionnaires-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-who-builds-questionnaires *,
.fmstr-cmp-who-builds-questionnaires *::before,
.fmstr-cmp-who-builds-questionnaires *::after {
  box-sizing: border-box;
}

.fmstr-cmp-who-builds-questionnaires__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-who-builds-questionnaires__header {
  margin: 0 auto var(--fmstr-cmp-who-builds-questionnaires-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-who-builds-questionnaires__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-who-builds-questionnaires-space-1) var(--fmstr-cmp-who-builds-questionnaires-space-3);
  background: var(--fmstr-cmp-who-builds-questionnaires-bg-violet-100);
  color: var(--fmstr-cmp-who-builds-questionnaires-violet-600);
  border-radius: var(--fmstr-cmp-who-builds-questionnaires-r-full);
  font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-xs);
  font-weight: var(--fmstr-cmp-who-builds-questionnaires-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-who-builds-questionnaires-space-4);
}

.fmstr-cmp-who-builds-questionnaires__heading {
  font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-who-builds-questionnaires-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-who-builds-questionnaires-fg-1);
  margin: 0 0 var(--fmstr-cmp-who-builds-questionnaires-space-3);
}

.fmstr-cmp-who-builds-questionnaires__sub {
  font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-md);
  line-height: var(--fmstr-cmp-who-builds-questionnaires-lh-md);
  color: var(--fmstr-cmp-who-builds-questionnaires-fg-3);
  margin: 0;
}

.fmstr-cmp-who-builds-questionnaires__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  column-gap: var(--fmstr-cmp-who-builds-questionnaires-space-6);
  row-gap: var(--fmstr-cmp-who-builds-questionnaires-space-6);
}

.fmstr-cmp-who-builds-questionnaires__card {
  display: flex;
  flex-direction: column;
  padding: var(--fmstr-cmp-who-builds-questionnaires-space-8);
  background: var(--fmstr-cmp-who-builds-questionnaires-bg-card);
  border: 1px solid var(--fmstr-cmp-who-builds-questionnaires-border-light);
  border-radius: var(--fmstr-cmp-who-builds-questionnaires-r-2xl);
  box-shadow: var(--fmstr-cmp-who-builds-questionnaires-shadow-xs);
}

.fmstr-cmp-who-builds-questionnaires__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-who-builds-questionnaires-r-lg);
  background: var(--fmstr-cmp-who-builds-questionnaires-bg-violet-25);
  color: var(--fmstr-cmp-who-builds-questionnaires-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fmstr-cmp-who-builds-questionnaires-space-5);
}

.fmstr-cmp-who-builds-questionnaires__title {
  font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-lg);
  line-height: var(--fmstr-cmp-who-builds-questionnaires-lh-lg);
  font-weight: var(--fmstr-cmp-who-builds-questionnaires-fw-bold);
  color: var(--fmstr-cmp-who-builds-questionnaires-fg-1);
  margin: 0 0 var(--fmstr-cmp-who-builds-questionnaires-space-3);
}

.fmstr-cmp-who-builds-questionnaires__desc {
  font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-who-builds-questionnaires-fg-2);
  margin: 0;
}

.fmstr-cmp-who-builds-questionnaires__cta {
  display: flex;
  align-items: center;
  gap: var(--fmstr-cmp-who-builds-questionnaires-space-2);
  margin-top: auto;
  padding-top: var(--fmstr-cmp-who-builds-questionnaires-space-5);
  border-top: 1px solid var(--fmstr-cmp-who-builds-questionnaires-border-light);
  color: var(--fmstr-cmp-who-builds-questionnaires-violet-600);
  font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-sm);
  font-weight: var(--fmstr-cmp-who-builds-questionnaires-fw-semibold);
  text-decoration: none;
  transition: color 120ms ease;
}

.fmstr-cmp-who-builds-questionnaires__cta:hover {
  color: var(--fmstr-cmp-who-builds-questionnaires-violet-700);
  text-decoration: underline;
}

.fmstr-cmp-who-builds-questionnaires__cta svg {
  transition: transform 160ms ease;
}
.fmstr-cmp-who-builds-questionnaires__cta:hover svg {
  transform: translateX(2px);
}

/* Push CTA to bottom of card so all CTAs align even with varying description lengths */
.fmstr-cmp-who-builds-questionnaires__card {
  /* margin-top: auto on CTA needs descendants in flex column; that's already set */
}

@media (max-width: 760px) {
  .fmstr-cmp-who-builds-questionnaires {
    padding: var(--fmstr-cmp-who-builds-questionnaires-space-12) var(--fmstr-cmp-who-builds-questionnaires-space-4);
  }
  .fmstr-cmp-who-builds-questionnaires__heading {
    font-size: var(--fmstr-cmp-who-builds-questionnaires-fs-2xl);
    line-height: var(--fmstr-cmp-who-builds-questionnaires-lh-2xl);
  }
  .fmstr-cmp-who-builds-questionnaires__grid {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-who-builds-questionnaires-space-3);
  }
}

.fmstr-cmp-api-mcp-developers {
  --fmstr-cmp-api-mcp-developers-bg-section: #f9fafb;
  --fmstr-cmp-api-mcp-developers-bg-card-from: #ffffff;
  --fmstr-cmp-api-mcp-developers-bg-card-to: #fbf8ff;
  --fmstr-cmp-api-mcp-developers-bg-violet-100: #f4ebff;
  --fmstr-cmp-api-mcp-developers-fg-1: #101828;
  --fmstr-cmp-api-mcp-developers-fg-2: #475467;
  --fmstr-cmp-api-mcp-developers-fg-3: #697586;
  --fmstr-cmp-api-mcp-developers-violet-500: #7f56d9;
  --fmstr-cmp-api-mcp-developers-violet-600: #6941c6;
  --fmstr-cmp-api-mcp-developers-violet-700: #53389e;
  --fmstr-cmp-api-mcp-developers-border-light: #eaecf0;
  --fmstr-cmp-api-mcp-developers-border-violet: #9777e0;
  --fmstr-cmp-api-mcp-developers-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-api-mcp-developers-fs-xs: 12px;
  --fmstr-cmp-api-mcp-developers-fs-sm: 14px;
  --fmstr-cmp-api-mcp-developers-fs-md: 16px;
  --fmstr-cmp-api-mcp-developers-fs-lg: 18px;
  --fmstr-cmp-api-mcp-developers-fs-xl: 20px;
  --fmstr-cmp-api-mcp-developers-fs-2xl: 24px;
  --fmstr-cmp-api-mcp-developers-fs-3xl: 36px;
  --fmstr-cmp-api-mcp-developers-fw-semibold: 600;
  --fmstr-cmp-api-mcp-developers-fw-bold: 700;
  --fmstr-cmp-api-mcp-developers-lh-md: 24px;
  --fmstr-cmp-api-mcp-developers-lh-lg: 28px;
  --fmstr-cmp-api-mcp-developers-lh-2xl: 32px;
  --fmstr-cmp-api-mcp-developers-space-1: 4px;
  --fmstr-cmp-api-mcp-developers-space-2: 8px;
  --fmstr-cmp-api-mcp-developers-space-3: 12px;
  --fmstr-cmp-api-mcp-developers-space-4: 16px;
  --fmstr-cmp-api-mcp-developers-space-5: 20px;
  --fmstr-cmp-api-mcp-developers-space-6: 24px;
  --fmstr-cmp-api-mcp-developers-space-8: 32px;
  --fmstr-cmp-api-mcp-developers-space-10: 40px;
  --fmstr-cmp-api-mcp-developers-space-12: 48px;
  --fmstr-cmp-api-mcp-developers-space-16: 64px;
  --fmstr-cmp-api-mcp-developers-r-2xl: 16px;
  --fmstr-cmp-api-mcp-developers-r-full: 9999px;

  background: var(--fmstr-cmp-api-mcp-developers-bg-section);
  padding: var(--fmstr-cmp-api-mcp-developers-space-16) var(--fmstr-cmp-api-mcp-developers-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-api-mcp-developers *,
.fmstr-cmp-api-mcp-developers *::before,
.fmstr-cmp-api-mcp-developers *::after {
  box-sizing: border-box;
}

.fmstr-cmp-api-mcp-developers__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-api-mcp-developers__header {
  margin: 0 auto var(--fmstr-cmp-api-mcp-developers-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-api-mcp-developers__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-api-mcp-developers-space-1) var(--fmstr-cmp-api-mcp-developers-space-3);
  background: var(--fmstr-cmp-api-mcp-developers-bg-violet-100);
  color: var(--fmstr-cmp-api-mcp-developers-violet-600);
  border-radius: var(--fmstr-cmp-api-mcp-developers-r-full);
  font-size: var(--fmstr-cmp-api-mcp-developers-fs-xs);
  font-weight: var(--fmstr-cmp-api-mcp-developers-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-api-mcp-developers-space-4);
}

.fmstr-cmp-api-mcp-developers__heading {
  font-size: var(--fmstr-cmp-api-mcp-developers-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-api-mcp-developers-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-api-mcp-developers-fg-1);
  margin: 0 0 var(--fmstr-cmp-api-mcp-developers-space-3);
}

.fmstr-cmp-api-mcp-developers__sub {
  font-size: var(--fmstr-cmp-api-mcp-developers-fs-md);
  line-height: var(--fmstr-cmp-api-mcp-developers-lh-md);
  color: var(--fmstr-cmp-api-mcp-developers-fg-3);
  margin: 0;
}

.fmstr-cmp-api-mcp-developers__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-api-mcp-developers-space-5);
}

.fmstr-cmp-api-mcp-developers__card {
  background: linear-gradient(
    180deg,
    var(--fmstr-cmp-api-mcp-developers-bg-card-from) 0%,
    var(--fmstr-cmp-api-mcp-developers-bg-card-to) 100%
  );
  border: 1px solid var(--fmstr-cmp-api-mcp-developers-border-light);
  border-radius: var(--fmstr-cmp-api-mcp-developers-r-2xl);
  box-shadow: var(--fmstr-cmp-api-mcp-developers-shadow-xs);
  padding: var(--fmstr-cmp-api-mcp-developers-space-8);
  transition:
    border-color 160ms ease,
    transform 160ms ease;
  display: flex;
  flex-direction: column;
}

.fmstr-cmp-api-mcp-developers__card:hover {
  border-color: var(--fmstr-cmp-api-mcp-developers-border-violet);
  transform: translateY(-2px);
}

.fmstr-cmp-api-mcp-developers__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-api-mcp-developers-space-2);
  padding: var(--fmstr-cmp-api-mcp-developers-space-1) var(--fmstr-cmp-api-mcp-developers-space-3);
  background: var(--fmstr-cmp-api-mcp-developers-violet-500);
  color: #ffffff;
  border-radius: var(--fmstr-cmp-api-mcp-developers-r-full);
  font-size: 11.5px;
  font-weight: var(--fmstr-cmp-api-mcp-developers-fw-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-api-mcp-developers-space-4);
  align-self: flex-start;
}

.fmstr-cmp-api-mcp-developers__badge--alt {
  background: var(--fmstr-cmp-api-mcp-developers-fg-1);
}

.fmstr-cmp-api-mcp-developers__card-title {
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: var(--fmstr-cmp-api-mcp-developers-fw-bold);
  color: var(--fmstr-cmp-api-mcp-developers-fg-1);
  margin: 0 0 var(--fmstr-cmp-api-mcp-developers-space-3);
}

.fmstr-cmp-api-mcp-developers__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-api-mcp-developers-space-2);
  margin-bottom: var(--fmstr-cmp-api-mcp-developers-space-4);
}

.fmstr-cmp-api-mcp-developers__chip {
  display: inline-flex;
  align-items: center;
  padding: var(--fmstr-cmp-api-mcp-developers-space-1) var(--fmstr-cmp-api-mcp-developers-space-3);
  background: #ffffff;
  border: 1px solid var(--fmstr-cmp-api-mcp-developers-border-light);
  border-radius: var(--fmstr-cmp-api-mcp-developers-r-full);
  font-size: 13px;
  font-weight: var(--fmstr-cmp-api-mcp-developers-fw-semibold);
  color: var(--fmstr-cmp-api-mcp-developers-fg-2);
}

.fmstr-cmp-api-mcp-developers__desc {
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--fmstr-cmp-api-mcp-developers-fg-2);
  margin: 0 0 var(--fmstr-cmp-api-mcp-developers-space-5);
}

.fmstr-cmp-api-mcp-developers__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-api-mcp-developers-space-2);
  color: var(--fmstr-cmp-api-mcp-developers-violet-600);
  font-size: var(--fmstr-cmp-api-mcp-developers-fs-sm);
  font-weight: var(--fmstr-cmp-api-mcp-developers-fw-semibold);
  text-decoration: none;
  transition: color 120ms ease;
  margin-top: auto;
}

.fmstr-cmp-api-mcp-developers__cta:hover {
  color: var(--fmstr-cmp-api-mcp-developers-violet-700);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-api-mcp-developers {
    padding: var(--fmstr-cmp-api-mcp-developers-space-12) var(--fmstr-cmp-api-mcp-developers-space-4);
  }
  .fmstr-cmp-api-mcp-developers__heading {
    font-size: var(--fmstr-cmp-api-mcp-developers-fs-2xl);
    line-height: var(--fmstr-cmp-api-mcp-developers-lh-2xl);
  }
  .fmstr-cmp-api-mcp-developers__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-api-mcp-developers__card {
    padding: var(--fmstr-cmp-api-mcp-developers-space-6);
  }
}

.fmstr-cmp-qm-privacy {
  --fmstr-cmp-qm-privacy-bg-section: #0f0921;
  --fmstr-cmp-qm-privacy-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-qm-privacy-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-qm-privacy-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-qm-privacy-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-qm-privacy-fg-eyebrow: #bda6ff;
  --fmstr-cmp-qm-privacy-fg-link: #d9c7ff;
  --fmstr-cmp-qm-privacy-fg-link-hover: #ffffff;
  --fmstr-cmp-qm-privacy-fs-xs: 12px;
  --fmstr-cmp-qm-privacy-fs-sm: 14px;
  --fmstr-cmp-qm-privacy-fs-md: 16px;
  --fmstr-cmp-qm-privacy-fs-lg: 18px;
  --fmstr-cmp-qm-privacy-fs-2xl: 24px;
  --fmstr-cmp-qm-privacy-fs-3xl: 32px;
  --fmstr-cmp-qm-privacy-fw-semibold: 600;
  --fmstr-cmp-qm-privacy-fw-bold: 700;
  --fmstr-cmp-qm-privacy-lh-md: 24px;
  --fmstr-cmp-qm-privacy-lh-lg: 28px;
  --fmstr-cmp-qm-privacy-lh-2xl: 32px;
  --fmstr-cmp-qm-privacy-space-2: 8px;
  --fmstr-cmp-qm-privacy-space-3: 12px;
  --fmstr-cmp-qm-privacy-space-4: 16px;
  --fmstr-cmp-qm-privacy-space-5: 20px;
  --fmstr-cmp-qm-privacy-space-6: 24px;
  --fmstr-cmp-qm-privacy-space-7: 28px;
  --fmstr-cmp-qm-privacy-space-8: 32px;
  --fmstr-cmp-qm-privacy-space-12: 48px;
  --fmstr-cmp-qm-privacy-r-2xl: 16px;
  --fmstr-cmp-qm-privacy-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-qm-privacy-space-12) var(--fmstr-cmp-qm-privacy-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-qm-privacy *,
.fmstr-cmp-qm-privacy *::before,
.fmstr-cmp-qm-privacy *::after {
  box-sizing: border-box;
}

.fmstr-cmp-qm-privacy__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-qm-privacy-bg-section);
  background-image: var(--fmstr-cmp-qm-privacy-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-qm-privacy-space-12);
  overflow: hidden;
}

.fmstr-cmp-qm-privacy__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-qm-privacy-space-12);
  align-items: center;
}

.fmstr-cmp-qm-privacy__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-qm-privacy-space-2) var(--fmstr-cmp-qm-privacy-space-4);
  background: var(--fmstr-cmp-qm-privacy-bg-pill);
  color: var(--fmstr-cmp-qm-privacy-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-qm-privacy-r-full);
  font-size: var(--fmstr-cmp-qm-privacy-fs-xs);
  font-weight: var(--fmstr-cmp-qm-privacy-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-qm-privacy-space-5);
}

.fmstr-cmp-qm-privacy__heading {
  font-size: var(--fmstr-cmp-qm-privacy-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-qm-privacy-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-qm-privacy-space-6);
}

.fmstr-cmp-qm-privacy__body p {
  font-size: var(--fmstr-cmp-qm-privacy-fs-md);
  line-height: var(--fmstr-cmp-qm-privacy-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-qm-privacy-space-4);
}
.fmstr-cmp-qm-privacy__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-qm-privacy__card {
  background-color: var(--fmstr-cmp-qm-privacy-bg-card);
  background-image: var(--fmstr-cmp-qm-privacy-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-qm-privacy-r-2xl);
  padding: var(--fmstr-cmp-qm-privacy-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-qm-privacy__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-qm-privacy-space-2) var(--fmstr-cmp-qm-privacy-space-4);
  background: var(--fmstr-cmp-qm-privacy-bg-pill);
  color: var(--fmstr-cmp-qm-privacy-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-qm-privacy-r-full);
  font-size: var(--fmstr-cmp-qm-privacy-fs-xs);
  font-weight: var(--fmstr-cmp-qm-privacy-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-qm-privacy-space-5);
}

.fmstr-cmp-qm-privacy__quote {
  font-size: var(--fmstr-cmp-qm-privacy-fs-lg);
  line-height: var(--fmstr-cmp-qm-privacy-lh-lg);
  font-weight: var(--fmstr-cmp-qm-privacy-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-qm-privacy-space-5);
}

.fmstr-cmp-qm-privacy__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-qm-privacy-space-5);
}

.fmstr-cmp-qm-privacy__cite {
  font-size: var(--fmstr-cmp-qm-privacy-fs-sm);
  line-height: var(--fmstr-cmp-qm-privacy-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-qm-privacy-space-3);
}

.fmstr-cmp-qm-privacy__links {
  display: flex;
  gap: var(--fmstr-cmp-qm-privacy-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-qm-privacy__links a {
  color: var(--fmstr-cmp-qm-privacy-fg-link);
  font-weight: var(--fmstr-cmp-qm-privacy-fw-semibold);
  font-size: var(--fmstr-cmp-qm-privacy-fs-sm);
  text-decoration: none;
}
.fmstr-cmp-qm-privacy__links a:hover {
  color: var(--fmstr-cmp-qm-privacy-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-qm-privacy {
    padding: var(--fmstr-cmp-qm-privacy-space-8) var(--fmstr-cmp-qm-privacy-space-4);
  }
  .fmstr-cmp-qm-privacy__container {
    padding: var(--fmstr-cmp-qm-privacy-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-qm-privacy__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-qm-privacy-space-8);
  }
  .fmstr-cmp-qm-privacy__heading {
    font-size: var(--fmstr-cmp-qm-privacy-fs-2xl);
    line-height: var(--fmstr-cmp-qm-privacy-lh-2xl);
  }
  .fmstr-cmp-qm-privacy__quote {
    font-size: var(--fmstr-cmp-qm-privacy-fs-md);
    line-height: var(--fmstr-cmp-qm-privacy-lh-md);
  }
  .fmstr-cmp-qm-privacy__card {
    padding: var(--fmstr-cmp-qm-privacy-space-6);
  }
}

.fmstr-cmp-more-ai-tools-qm {
  --fmstr-cmp-more-ai-tools-qm-bg-section: #ffffff;
  --fmstr-cmp-more-ai-tools-qm-bg-card: #ffffff;
  --fmstr-cmp-more-ai-tools-qm-bg-violet-25: #f7f3ff;
  --fmstr-cmp-more-ai-tools-qm-bg-violet-100: #f4ebff;
  --fmstr-cmp-more-ai-tools-qm-fg-1: #101828;
  --fmstr-cmp-more-ai-tools-qm-fg-2: #475467;
  --fmstr-cmp-more-ai-tools-qm-fg-3: #697586;
  --fmstr-cmp-more-ai-tools-qm-violet-600: #6941c6;
  --fmstr-cmp-more-ai-tools-qm-violet-700: #53389e;
  --fmstr-cmp-more-ai-tools-qm-border-light: #eaecf0;
  --fmstr-cmp-more-ai-tools-qm-border-violet: #9777e0;
  --fmstr-cmp-more-ai-tools-qm-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-more-ai-tools-qm-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-more-ai-tools-qm-fs-xs: 12px;
  --fmstr-cmp-more-ai-tools-qm-fs-sm: 14px;
  --fmstr-cmp-more-ai-tools-qm-fs-md: 16px;
  --fmstr-cmp-more-ai-tools-qm-fs-lg: 18px;
  --fmstr-cmp-more-ai-tools-qm-fs-2xl: 24px;
  --fmstr-cmp-more-ai-tools-qm-fs-3xl: 36px;
  --fmstr-cmp-more-ai-tools-qm-fw-regular: 400;
  --fmstr-cmp-more-ai-tools-qm-fw-semibold: 600;
  --fmstr-cmp-more-ai-tools-qm-fw-bold: 700;
  --fmstr-cmp-more-ai-tools-qm-lh-md: 24px;
  --fmstr-cmp-more-ai-tools-qm-lh-lg: 28px;
  --fmstr-cmp-more-ai-tools-qm-lh-2xl: 32px;
  --fmstr-cmp-more-ai-tools-qm-space-1: 4px;
  --fmstr-cmp-more-ai-tools-qm-space-2: 8px;
  --fmstr-cmp-more-ai-tools-qm-space-3: 12px;
  --fmstr-cmp-more-ai-tools-qm-space-4: 16px;
  --fmstr-cmp-more-ai-tools-qm-space-6: 24px;
  --fmstr-cmp-more-ai-tools-qm-space-8: 32px;
  --fmstr-cmp-more-ai-tools-qm-space-10: 40px;
  --fmstr-cmp-more-ai-tools-qm-space-12: 48px;
  --fmstr-cmp-more-ai-tools-qm-space-16: 64px;
  --fmstr-cmp-more-ai-tools-qm-r-lg: 8px;
  --fmstr-cmp-more-ai-tools-qm-r-2xl: 16px;
  --fmstr-cmp-more-ai-tools-qm-r-full: 9999px;

  background: var(--fmstr-cmp-more-ai-tools-qm-bg-section);
  padding: var(--fmstr-cmp-more-ai-tools-qm-space-16) var(--fmstr-cmp-more-ai-tools-qm-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-more-ai-tools-qm *,
.fmstr-cmp-more-ai-tools-qm *::before,
.fmstr-cmp-more-ai-tools-qm *::after {
  box-sizing: border-box;
}

.fmstr-cmp-more-ai-tools-qm__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-more-ai-tools-qm__header {
  margin: 0 auto var(--fmstr-cmp-more-ai-tools-qm-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-more-ai-tools-qm__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-more-ai-tools-qm-space-1) var(--fmstr-cmp-more-ai-tools-qm-space-3);
  background: var(--fmstr-cmp-more-ai-tools-qm-bg-violet-100);
  color: var(--fmstr-cmp-more-ai-tools-qm-violet-600);
  border-radius: var(--fmstr-cmp-more-ai-tools-qm-r-full);
  font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-xs);
  font-weight: var(--fmstr-cmp-more-ai-tools-qm-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-more-ai-tools-qm-space-4);
}

.fmstr-cmp-more-ai-tools-qm__heading {
  font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-more-ai-tools-qm-fw-semibold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-more-ai-tools-qm-fg-1);
  margin: 0 0 var(--fmstr-cmp-more-ai-tools-qm-space-3);
}

.fmstr-cmp-more-ai-tools-qm__sub {
  font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-md);
  line-height: var(--fmstr-cmp-more-ai-tools-qm-lh-md);
  color: var(--fmstr-cmp-more-ai-tools-qm-fg-3);
  margin: 0;
}

.fmstr-cmp-more-ai-tools-qm__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-more-ai-tools-qm-space-6);
}

.fmstr-cmp-more-ai-tools-qm__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-more-ai-tools-qm-space-3);
  padding: var(--fmstr-cmp-more-ai-tools-qm-space-8);
  background: var(--fmstr-cmp-more-ai-tools-qm-bg-card);
  border: 1px solid var(--fmstr-cmp-more-ai-tools-qm-border-light);
  border-radius: var(--fmstr-cmp-more-ai-tools-qm-r-2xl);
  box-shadow: var(--fmstr-cmp-more-ai-tools-qm-shadow-xs);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.fmstr-cmp-more-ai-tools-qm__card:hover {
  border-color: var(--fmstr-cmp-more-ai-tools-qm-border-violet);
  box-shadow: var(--fmstr-cmp-more-ai-tools-qm-shadow-md);
  transform: translateY(-2px);
  text-decoration: none;
}

.fmstr-cmp-more-ai-tools-qm__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-more-ai-tools-qm-r-lg);
  background: var(--fmstr-cmp-more-ai-tools-qm-bg-violet-25);
  color: var(--fmstr-cmp-more-ai-tools-qm-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: var(--fmstr-cmp-more-ai-tools-qm-space-2);
}

.fmstr-cmp-more-ai-tools-qm__card-title {
  font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-lg);
  line-height: var(--fmstr-cmp-more-ai-tools-qm-lh-lg);
  font-weight: var(--fmstr-cmp-more-ai-tools-qm-fw-bold);
  color: var(--fmstr-cmp-more-ai-tools-qm-fg-1);
  margin: 0;
}

.fmstr-cmp-more-ai-tools-qm__desc {
  font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-more-ai-tools-qm-fg-2);
  margin: 0 0 var(--fmstr-cmp-more-ai-tools-qm-space-3);
}

.fmstr-cmp-more-ai-tools-qm__cta {
  margin-top: auto;
  color: var(--fmstr-cmp-more-ai-tools-qm-violet-600);
  font-weight: var(--fmstr-cmp-more-ai-tools-qm-fw-semibold);
  font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-sm);
  text-decoration: none;
  transition: color 120ms ease;
}

.fmstr-cmp-more-ai-tools-qm__card:hover .fmstr-cmp-more-ai-tools-qm__cta {
  color: var(--fmstr-cmp-more-ai-tools-qm-violet-700);
}

@media (max-width: 1024px) {
  .fmstr-cmp-more-ai-tools-qm__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-more-ai-tools-qm {
    padding: var(--fmstr-cmp-more-ai-tools-qm-space-12) var(--fmstr-cmp-more-ai-tools-qm-space-4);
  }
  .fmstr-cmp-more-ai-tools-qm__heading {
    font-size: var(--fmstr-cmp-more-ai-tools-qm-fs-2xl);
    line-height: var(--fmstr-cmp-more-ai-tools-qm-lh-2xl);
  }
  .fmstr-cmp-more-ai-tools-qm__grid {
    grid-template-columns: 1fr;
  }
}
</style>
