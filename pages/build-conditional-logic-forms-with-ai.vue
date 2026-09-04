<template>
  <div>
    <HeroV2
      description="Tell Formester the rule in one sentence. It writes the show, hide, skip, calculate, and route logic into your form. You preview, edit, publish."
      trustText="Six logic types, one prompt · Preview and edit before publish · Trusted by 56k+ users"
      blobColorA="#f5eeff"
      blobColorB="#f1ebff"
      blobColorC="#f4efff"
      :mockupHtml="c0_mockupHtml"
      layout="split"
      :title="c0_title"
      :buttons="c0_buttons"
      :badge="c0_badge"
      :tabCardContent="c0_tabCardContent"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section
            class="fmstr-cmp-cl-rule-types"
            id="fmstr-cmp-cl-rule-types"
            aria-labelledby="fmstr-cmp-cl-rule-types-heading"
          >
            <div class="fmstr-cmp-cl-rule-types__container">
              <div class="fmstr-cmp-cl-rule-types__header">
                <span class="fmstr-cmp-cl-rule-types__eyebrow">The rules</span>
                <h2 id="fmstr-cmp-cl-rule-types-heading" class="fmstr-cmp-cl-rule-types__heading">
                  Six kinds of rules.
                  <span class="fmstr-cmp-cl-rule-types__heading-accent">One prompt builds them.</span>
                </h2>
                <p class="fmstr-cmp-cl-rule-types__intro">
                  Conditional logic isn't one feature. It's a set of decisions a form makes on the fly. Here are the six
                  you'll build most often, with the exact rule on the right.
                </p>
              </div>

              <div class="fmstr-cmp-cl-rule-types__table-wrap">
                <table class="fmstr-cmp-cl-rule-types__table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>What it does</th>
                      <th>Example rule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fmstr-cmp-cl-rule-types__type-name">
                        <span class="fmstr-cmp-cl-rule-types__type-name-inner">
                          <span class="fmstr-cmp-cl-rule-types__icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 10C3.5 6.5 6.5 4.5 10 4.5C13.5 4.5 16.5 6.5 18 10C16.5 13.5 13.5 15.5 10 15.5C6.5 15.5 3.5 13.5 2 10Z"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.6"></circle>
                            </svg>
                          </span>
                          Show or hide a field
                        </span>
                      </td>
                      <td class="fmstr-cmp-cl-rule-types__type-what">
                        Reveal a field only when an earlier answer matches.
                      </td>
                      <td>
                        <code class="fmstr-cmp-cl-rule-types__rule"
                          >If "Are you employed?" = Yes, show "Employer name"</code
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-rule-types__type-name">
                        <span class="fmstr-cmp-cl-rule-types__type-name-inner">
                          <span class="fmstr-cmp-cl-rule-types__icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 4L12 10L4 16M14 4V16"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          Skip a page
                        </span>
                      </td>
                      <td class="fmstr-cmp-cl-rule-types__type-what">Jump past sections that don't apply.</td>
                      <td>
                        <code class="fmstr-cmp-cl-rule-types__rule"
                          >If "Account type" = Personal, skip the "Company billing" page</code
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-rule-types__type-name">
                        <span class="fmstr-cmp-cl-rule-types__type-name-inner">
                          <span class="fmstr-cmp-cl-rule-types__icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3V13M10 17V17.5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10 3L7 4.5M10 3L13 4.5M10 13L7 11.5M10 13L13 11.5"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </span>
                          Make a field required
                        </span>
                      </td>
                      <td class="fmstr-cmp-cl-rule-types__type-what">
                        Toggle required-on-the-fly so the form stays short for everyone else.
                      </td>
                      <td>
                        <code class="fmstr-cmp-cl-rule-types__rule"
                          >If "Need invoice?" = Yes, require "VAT number"</code
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-rule-types__type-name">
                        <span class="fmstr-cmp-cl-rule-types__type-name-inner">
                          <span class="fmstr-cmp-cl-rule-types__icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 4H17L12 10V16L8 14V10L3 4Z"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          Filter the choices
                        </span>
                      </td>
                      <td class="fmstr-cmp-cl-rule-types__type-what">Narrow a dropdown based on a previous answer.</td>
                      <td>
                        <code class="fmstr-cmp-cl-rule-types__rule"
                          >If "Country" = USA, show US states; if "Canada", show provinces</code
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-rule-types__type-name">
                        <span class="fmstr-cmp-cl-rule-types__type-name-inner">
                          <span class="fmstr-cmp-cl-rule-types__icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="3.5"
                                y="3"
                                width="13"
                                height="14"
                                rx="2"
                                stroke="currentColor"
                                stroke-width="1.6"
                              ></rect>
                              <path
                                d="M6.5 6.5H13.5M6.5 10H13.5M6.5 13.5H10"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </span>
                          Calculate a value
                        </span>
                      </td>
                      <td class="fmstr-cmp-cl-rule-types__type-what">
                        Compute totals, scores, or pricing as the user fills.
                      </td>
                      <td>
                        <code class="fmstr-cmp-cl-rule-types__rule">"Total" = "Quantity" × "Unit price" + tax</code>
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-rule-types__type-name">
                        <span class="fmstr-cmp-cl-rule-types__type-name-inner">
                          <span class="fmstr-cmp-cl-rule-types__icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 4V16M5 4H12L14 6L12 8H5M5 12H10L12 14L10 16H5"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          Route email and redirect
                        </span>
                      </td>
                      <td class="fmstr-cmp-cl-rule-types__type-what">
                        Send the response to the right inbox and the right thank-you page.
                      </td>
                      <td>
                        <code class="fmstr-cmp-cl-rule-types__rule"
                          >If "Department" = Sales, email sales@yourco and redirect to the booking link</code
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="fmstr-cmp-cl-rule-types__footer">
                Describe any of these to Formester's AI in one sentence.
                <strong>It writes the rule into your form.</strong> You preview it, tweak the wording, and publish.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <Trustbadges
      description="Businesses and creators trust Formester to build conditional logic forms, automate workflows, and improve conversions with ease."
      :title="c3_title"
      :badges="c3_badges"
      class="page-component-item"
    />

    <ThreeColBenefits :title="c4_title" :itemList="c4_itemList" class="page-component-item" />

    <FeatureShowcase
      description="Create conditional logic forms in minutes with Formester. Use AI to set rules, automate workflows, and build forms that adapt based on user responses."
      steps
      :title="c5_title"
      :itemList="c5_itemList"
      class="page-component-item"
    />

    <FeatureShowcase
      description="Explore advanced features that help you build smarter conditional logic forms, improve user experience, and collect accurate responses with ease."
      :steps="false"
      :title="c6_title"
      :itemList="c6_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-cl-popular-use-cases" aria-labelledby="fmstr-cmp-cl-popular-use-cases-heading">
            <div class="fmstr-cmp-cl-popular-use-cases__container">
              <header class="fmstr-cmp-cl-popular-use-cases__header">
                <span class="fmstr-cmp-cl-popular-use-cases__eyebrow">Use cases</span>
                <h2 id="fmstr-cmp-cl-popular-use-cases-heading" class="fmstr-cmp-cl-popular-use-cases__heading">
                  Popular use cases for conditional forms.
                </h2>
                <p class="fmstr-cmp-cl-popular-use-cases__intro">
                  Adaptive forms that ask only the right questions, branch on the right answers, and finish with cleaner
                  data than a static form ever could.
                </p>
              </header>

              <div class="fmstr-cmp-cl-popular-use-cases__grid">
                <article class="fmstr-cmp-cl-popular-use-cases__card">
                  <span
                    class="fmstr-cmp-cl-popular-use-cases__icon fmstr-cmp-cl-popular-use-cases__icon--blue"
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
                      <path d="M3 4h2l2 11h12l2-8H6"></path>
                      <circle cx="9" cy="20" r="1.6"></circle>
                      <circle cx="17" cy="20" r="1.6"></circle>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-popular-use-cases__title">Order forms that price themselves.</h3>
                  <p class="fmstr-cmp-cl-popular-use-cases__body">
                    Customers pick options and the form does the math. Tax, shipping, line totals, and conditional
                    fields like "PO number" all resolve as they fill it in.
                  </p>
                  <div class="fmstr-cmp-cl-popular-use-cases__rule">
                    <strong>Rule:</strong> Total = Quantity x Unit price. If Country = USA, add state tax. Show "PO
                    number" only when Pay by invoice = Yes.
                  </div>
                </article>

                <article class="fmstr-cmp-cl-popular-use-cases__card">
                  <span
                    class="fmstr-cmp-cl-popular-use-cases__icon fmstr-cmp-cl-popular-use-cases__icon--violet"
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
                      <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                      <path d="M9 7h6M9 11h6M9 15h4"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-popular-use-cases__title">Application forms that fork by role.</h3>
                  <p class="fmstr-cmp-cl-popular-use-cases__body">
                    Show only the questions that match the position. Engineers see the technical screen, designers see
                    the portfolio prompt, managers get the team-size question.
                  </p>
                  <div class="fmstr-cmp-cl-popular-use-cases__rule">
                    <strong>Rule:</strong> If Position = Engineer, show technical questions. If Designer, require
                    portfolio link. If Manager, ask team size.
                  </div>
                </article>

                <article class="fmstr-cmp-cl-popular-use-cases__card">
                  <span
                    class="fmstr-cmp-cl-popular-use-cases__icon fmstr-cmp-cl-popular-use-cases__icon--rose"
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
                      <path d="M3 3v18h18"></path>
                      <path d="M7 15l4-4 3 3 6-6"></path>
                      <path d="M14 8h6v6"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-popular-use-cases__title">
                    Adaptive surveys that go deeper on the bad scores.
                  </h3>
                  <p class="fmstr-cmp-cl-popular-use-cases__body">
                    Stay short for happy users and dig in only when something went wrong. Route detractors to your CS
                    lead. Send promoters to the referral box.
                  </p>
                  <div class="fmstr-cmp-cl-popular-use-cases__rule">
                    <strong>Rule:</strong> If NPS &lt;= 6, show "What went wrong?" and route to CS. If NPS &gt;= 9, show
                    the referral box and link the case-study page.
                  </div>
                </article>

                <article class="fmstr-cmp-cl-popular-use-cases__card">
                  <span
                    class="fmstr-cmp-cl-popular-use-cases__icon fmstr-cmp-cl-popular-use-cases__icon--amber"
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
                      <path d="M9 11a3 3 0 1 1 3 3v2"></path>
                      <circle cx="12" cy="20" r="1"></circle>
                      <circle cx="12" cy="12" r="9"></circle>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-popular-use-cases__title">Quizzes that branch on the answer.</h3>
                  <p class="fmstr-cmp-cl-popular-use-cases__body">
                    The next question depends on the last one. Easy mode for beginners, harder follow-ups for power
                    users, scoring that adapts to the path each person takes.
                  </p>
                  <div class="fmstr-cmp-cl-popular-use-cases__rule">
                    <strong>Rule:</strong> If Q1 = correct, jump to the harder track. If incorrect, show the hint and
                    re-ask. Tally weighted score by section.
                  </div>
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
          <section class="fmstr-cmp-cl-comparison" aria-labelledby="fmstr-cmp-cl-comparison-heading">
            <div class="fmstr-cmp-cl-comparison__container">
              <div class="fmstr-cmp-cl-comparison__header">
                <span class="fmstr-cmp-cl-comparison__eyebrow">The honest comparison</span>
                <h2 id="fmstr-cmp-cl-comparison-heading" class="fmstr-cmp-cl-comparison__heading">
                  AI rule-writer vs. clickable rule-builder.
                  <span class="fmstr-cmp-cl-comparison__heading-accent">Where each one wins.</span>
                </h2>
                <p class="fmstr-cmp-cl-comparison__intro">
                  Most form builders ship a clickable rule editor. It works. It also rewards a specific shape of
                  patience. Here's the honest comparison.
                </p>
              </div>

              <div class="fmstr-cmp-cl-comparison__table-wrap">
                <table class="fmstr-cmp-cl-comparison__table">
                  <thead>
                    <tr>
                      <th class="fmstr-cmp-cl-comparison__th-blank"></th>
                      <th class="fmstr-cmp-cl-comparison__th-them">
                        <span class="fmstr-cmp-cl-comparison__th-inner">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              rx="1.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                            ></rect>
                            <path
                              d="M5 6.5H11M5 9H9"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                          Manual rule-builder
                        </span>
                      </th>
                      <th class="fmstr-cmp-cl-comparison__th-us">
                        <span class="fmstr-cmp-cl-comparison__th-inner">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Formester AI rule-writer
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Time to write a 6-rule form</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">15-25 minutes the first time</td>
                      <td class="fmstr-cmp-cl-comparison__col-us"><strong>Under a minute</strong></td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Renaming a field with rules attached</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Hunt every rule, fix each one</td>
                      <td class="fmstr-cmp-cl-comparison__col-us">
                        <strong>Re-prompt; the AI rewrites against the new name</strong>
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Adding a rule to a form built last quarter</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Re-learn the editor</td>
                      <td class="fmstr-cmp-cl-comparison__col-us">
                        <strong>Read the rule out loud, paste, done</strong>
                      </td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Rule preview before publish</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Yes</td>
                      <td class="fmstr-cmp-cl-comparison__col-us">Yes</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Edit a rule the AI wrote</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Yes, in the same editor</td>
                      <td class="fmstr-cmp-cl-comparison__col-us">Yes, in the same editor</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Multi-condition AND / OR</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Yes, after a few clicks</td>
                      <td class="fmstr-cmp-cl-comparison__col-us">Yes, written as you'd say it</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Forms with one rule</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Manual is fine</td>
                      <td class="fmstr-cmp-cl-comparison__col-us">AI is faster but not by much</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Forms with twenty rules</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Painful</td>
                      <td class="fmstr-cmp-cl-comparison__col-us"><strong>Where AI earns the buy</strong></td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-cl-comparison__row-label">Auditability of complex logic trees</td>
                      <td class="fmstr-cmp-cl-comparison__col-them">Visual flow chart in some tools</td>
                      <td class="fmstr-cmp-cl-comparison__col-us"><strong>Plain-English source of truth</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="fmstr-cmp-cl-comparison__summary">
                <strong>The short version.</strong> A clickable rule editor is fine when you're writing one rule on one
                form once. The minute the form gets longer, the team gets bigger, or the field names start changing, the
                AI rule-writer pays itself back on every change.
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-cl-privacy-data-trust" aria-labelledby="fmstr-cmp-cl-privacy-data-trust-heading">
            <div class="fmstr-cmp-cl-privacy-data-trust__container">
              <div class="fmstr-cmp-cl-privacy-data-trust__inner">
                <div class="fmstr-cmp-cl-privacy-data-trust__text">
                  <span class="fmstr-cmp-cl-privacy-data-trust__eyebrow">Privacy and data</span>
                  <h2 id="fmstr-cmp-cl-privacy-data-trust-heading" class="fmstr-cmp-cl-privacy-data-trust__heading">
                    Your form data is yours. We don't train on it.
                  </h2>
                  <div class="fmstr-cmp-cl-privacy-data-trust__body">
                    <p>
                      The prompt you type to describe your conditional logic, the form responses you collect, and the
                      rules the AI generates from them are all Customer Data. Per Section 4.4 of our Data Processing
                      Addendum, Formester does not use Customer Data to train AI models, run advertising, run analytics,
                      or feed marketing. The Google Gemini integration that powers the rule generation inherits the same
                      boundary.
                    </p>
                    <p>
                      Your account is encrypted at rest, your form responses move over TLS, and payment data carries an
                      additional AES-256 layer through Stripe. We are GDPR, UK GDPR, and CCPA compliant. We are not SOC
                      2, ISO 27001, or HIPAA certified yet, and we say so on the security page rather than implying
                      otherwise.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-cl-privacy-data-trust__card">
                  <span class="fmstr-cmp-cl-privacy-data-trust__pill">DPA §4.4 · January 2026</span>
                  <blockquote class="fmstr-cmp-cl-privacy-data-trust__quote">
                    "Formester shall not use Customer Data for purposes of analytics, advertising, marketing, or
                    training of artificial intelligence or machine learning models, except as strictly necessary to
                    provide the Services."
                  </blockquote>
                  <hr class="fmstr-cmp-cl-privacy-data-trust__divider" />
                  <p class="fmstr-cmp-cl-privacy-data-trust__cite">
                    Formester Data Processing Addendum, effective January 2026.
                  </p>
                  <div class="fmstr-cmp-cl-privacy-data-trust__links">
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

    <TemplateSection
      :description="c10_description"
      :title="c10_title"
      :button="c10_button"
      :specificTemplate="c10_specificTemplate"
      class="page-component-item"
    />

    <TestimonialsV2
      description="See what our customers have to say about their experience with us!"
      version="home"
      :heading="c11_heading"
      :testimonials="c11_testimonials"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c12_ctaValue" class="page-component-item" />

    <FaqSection :title="c13_title" :faqList="c13_faqList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-cl-more-ai-tools" aria-labelledby="fmstr-cmp-cl-more-ai-tools-heading">
            <div class="fmstr-cmp-cl-more-ai-tools__container">
              <div class="fmstr-cmp-cl-more-ai-tools__header">
                <span class="fmstr-cmp-cl-more-ai-tools__eyebrow">More AI from Formester</span>
                <h2 id="fmstr-cmp-cl-more-ai-tools-heading" class="fmstr-cmp-cl-more-ai-tools__heading">
                  Other AI tools from Formester
                </h2>
                <p class="fmstr-cmp-cl-more-ai-tools__intro">
                  If conditional logic is on your shortlist, the rest of the family probably is too.
                </p>
              </div>

              <div class="fmstr-cmp-cl-more-ai-tools__grid">
                <a class="fmstr-cmp-cl-more-ai-tools__tile" href="/ai-form-generator/#editable-form">
                  <span class="fmstr-cmp-cl-more-ai-tools__icon-tile" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.8"></rect>
                      <path
                        d="M8 8H16M8 12H16M8 16H12"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-more-ai-tools__tile-title">AI Form Generator</h3>
                  <p class="fmstr-cmp-cl-more-ai-tools__tile-body">Type a prompt, get a full form.</p>
                  <span class="fmstr-cmp-cl-more-ai-tools__arrow">
                    Open
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>

                <a class="fmstr-cmp-cl-more-ai-tools__tile" href="https://formester.com/ai-quiz-maker/">
                  <span class="fmstr-cmp-cl-more-ai-tools__icon-tile" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
                      <path
                        d="M9 9.5C9 8 10 7 12 7C14 7 15 8 15 9.5C15 11 13 11.5 12 13M12 16V16.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-more-ai-tools__tile-title">AI Quiz Maker</h3>
                  <p class="fmstr-cmp-cl-more-ai-tools__tile-body">
                    Auto-graded quizzes with negative marking and outcomes.
                  </p>
                  <span class="fmstr-cmp-cl-more-ai-tools__arrow">
                    Open
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>

                <a class="fmstr-cmp-cl-more-ai-tools__tile" href="https://formester.com/ai-survey-generator/">
                  <span class="fmstr-cmp-cl-more-ai-tools__icon-tile" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 19V5M4 19H20M8 15V11M12 15V8M16 15V13"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-more-ai-tools__tile-title">AI Survey Generator</h3>
                  <p class="fmstr-cmp-cl-more-ai-tools__tile-body">A survey from a brief or a PDF, with branching.</p>
                  <span class="fmstr-cmp-cl-more-ai-tools__arrow">
                    Open
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>

                <a class="fmstr-cmp-cl-more-ai-tools__tile" href="https://formester.com/ai-powered-multilingual-forms/">
                  <span class="fmstr-cmp-cl-more-ai-tools__icon-tile" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
                      <path
                        d="M3 12H21M12 3C9.5 6 8 9 8 12C8 15 9.5 18 12 21M12 3C14.5 6 16 9 16 12C16 15 14.5 18 12 21"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-cl-more-ai-tools__tile-title">AI Multilingual Forms</h3>
                  <p class="fmstr-cmp-cl-more-ai-tools__tile-body">Same form, 180+ languages, one prompt.</p>
                  <span class="fmstr-cmp-cl-more-ai-tools__arrow">
                    Open
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
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
          <section class="fmstr-cmp-cl-related-resources" aria-labelledby="fmstr-cmp-cl-related-resources-heading">
            <div class="fmstr-cmp-cl-related-resources__container">
              <h2 id="fmstr-cmp-cl-related-resources-heading" class="fmstr-cmp-cl-related-resources__heading">
                Keep building with conditional logic.
              </h2>
              <div class="fmstr-cmp-cl-related-resources__grid">
                <a
                  class="fmstr-cmp-cl-related-resources__link"
                  href="https://formester.com/blog/what-is-conditional-logic-how-to-use-it/"
                >
                  <span>Walkthrough: Conditional logic in Formester</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  class="fmstr-cmp-cl-related-resources__link"
                  href="https://formester.com/templates/categories/order-forms/"
                >
                  <span>Order form templates</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  class="fmstr-cmp-cl-related-resources__link"
                  href="https://formester.com/templates/categories/application-and-registration/"
                >
                  <span>Application and registration templates</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  class="fmstr-cmp-cl-related-resources__link"
                  href="https://formester.com/templates/categories/survey-forms/"
                >
                  <span>Survey templates</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  class="fmstr-cmp-cl-related-resources__link"
                  href="https://formester.com/templates/categories/quizzes/"
                >
                  <span>Quiz templates</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a class="fmstr-cmp-cl-related-resources__link" href="https://formester.com/jotform-alternative/">
                  <span>Formester vs Jotform</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a class="fmstr-cmp-cl-related-resources__link" href="https://formester.com/typeform-alternative/">
                  <span>Formester vs Typeform</span>
                  <span class="fmstr-cmp-cl-related-resources__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
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
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import TemplateSection from '@/components/features/TemplateSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_mockupHtml =
  "<div style='position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(15,14,26,.18);background:#0f0921;'><iframe src='https://www.youtube-nocookie.com/embed/xUxos49HDRI' title='Conditional logic forms in Formester &#8212; demo' style='position:absolute;inset:0;width:100%;height:100%;border:0;' loading='lazy' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen referrerpolicy='strict-origin-when-cross-origin'></iframe></div>"
const c0_title = [
  {
    id: 4970,
    text: 'Build conditional logic forms with AI. ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4971,
    text: 'Skip the rule-builder.',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1652,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
]
const c0_badge = {
  id: 133,
  text: 'AI Conditional Logic',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c3_title = [
  {
    id: 4964,
    text: 'Join 56,000+ Happy Users Building Smarter Forms',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c3_badges = []
const c4_title = [
  {
    id: 4963,
    text: 'Why teams use the AI to write the rules',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c4_itemList = [
  {
    id: 2523,
    title: 'Fast and Easy Setup',
    description: 'Create conditional logic forms using simple prompts. No need to manually set complex rules.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 4142,
      imageAlt: 'star icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2329,
        name: 'lightning icon.svg',
        alternativeText: 'lightning icon',
        caption: 'lightning icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'robust_analytics_1_b405fd6170',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.01,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_1_b405fd6170.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:58:22.595Z',
        updatedAt: '2025-01-20T09:58:53.385Z',
      },
    },
  },
  {
    id: 2522,
    title: "Edit the AI's logic before it ships",
    description:
      'AI gets fast wrong sometimes. Every rule the AI writes lands in the standard rule editor first. Read it, change a condition, change the action, save. Nothing publishes until you say so.',
    description_markdown: null,
    icon: {
      id: 4143,
      imageAlt: 'Edit AI conditional logic',
      imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/pencil_line_61da15ee94.svg',
      width: null,
      height: null,
      image: {
        id: 2950,
        name: 'pen icon.svg',
        alternativeText: 'pen icon',
        caption: 'pen icon',
        width: 100,
        height: 100,
        formats: null,
        hash: 'pencil_line_61da15ee94',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.28,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/pencil_line_61da15ee94.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-03-07T01:44:02.611Z',
        updatedAt: '2026-05-08T04:07:15.793Z',
      },
    },
    cardImage: null,
  },
  {
    id: 2524,
    title: 'Add rules to a form you already built',
    description:
      'Paste any existing form into Formester (or import from Google Forms, Typeform, Microsoft Forms). The AI reads the fields and lets you describe rules against them, no rebuild.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4145,
      imageAlt: 'user icon',
      imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/rocket_icon_a654a07009.svg',
      width: null,
      height: null,
      image: {
        id: 2330,
        name: 'people icon.svg',
        alternativeText: 'people icon',
        caption: 'people icon',
        width: 69,
        height: 69,
        formats: null,
        hash: 'flexible_06a6ab66ac',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 0.98,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/flexible_06a6ab66ac.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:58:40.671Z',
        updatedAt: '2025-04-30T01:43:48.716Z',
      },
    },
  },
  {
    id: 2526,
    title: 'Smarter Data Collection',
    description:
      'Collect only the information you need with a conditional logic form. Remove unnecessary fields and improve response quality.',
    description_markdown:
      'Gather only the most relevant information with branching questions. Say goodbye to irrelevant fields! ',
    icon: null,
    cardImage: {
      id: 4144,
      imageAlt: 'data flow icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2331,
        name: 'payment-processing.svg',
        alternativeText: 'control icon',
        caption: 'control icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'payment_processing_27a9688c68',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.03,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/payment_processing_27a9688c68.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:59:02.931Z',
        updatedAt: '2025-07-15T21:14:46.840Z',
      },
    },
  },
  {
    id: 2527,
    title: 'Better Accuracy',
    description: 'Reduce errors by displaying fields only when conditions are met. Improve data quality automatically.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4146,
      imageAlt: 'workflow icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2332,
        name: 'robust-analytics-3.svg',
        alternativeText: 'click icon',
        caption: 'click icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'robust_analytics_3_31e60d1ac7',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 0.87,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_3_31e60d1ac7.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:59:22.852Z',
        updatedAt: '2025-01-31T03:04:21.700Z',
      },
    },
  },
  {
    id: 2530,
    title: 'Save Time with Automation',
    description:
      'Let AI handle rule creation while you focus on growing your business. Build smart forms in minutes, not hours.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4147,
      imageAlt: 'rocket icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2334,
        name: 'rocket icon.svg',
        alternativeText: 'rocket icon',
        caption: 'rocket icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'robust_analytics_2_352aa8f482',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.26,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_2_352aa8f482.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:59:37.152Z',
        updatedAt: '2025-01-20T09:58:41.072Z',
      },
    },
  },
]
const c5_title = [
  {
    id: 4965,
    text: 'How to Create Conditional Logic Forms with AI',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c5_itemList = [
  {
    id: 2532,
    title: 'Create Your Form',
    description: 'Start with a blank canvas or a template to set up your form.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4151,
      imageAlt: "a screenshot of formester's ai form builder ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2338,
        name: 'Component 929.png',
        alternativeText: null,
        caption: null,
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_929_debae170ff.png',
            hash: 'small_Component_929_debae170ff',
            mime: 'image/png',
            name: 'small_Component 929.png',
            path: null,
            size: 49.87,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_929_debae170ff.png',
            hash: 'thumbnail_Component_929_debae170ff',
            mime: 'image/png',
            name: 'thumbnail_Component 929.png',
            path: null,
            size: 12.87,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_929_debae170ff',
        ext: '.png',
        mime: 'image/png',
        size: 15.32,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_929_debae170ff.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:02:33.397Z',
        updatedAt: '2024-11-05T19:02:33.397Z',
      },
    },
  },
  {
    id: 2529,
    title: 'Customize It',
    description: 'Add fields like text boxes, dropdowns, or checkboxes to fit your specific needs.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4150,
      imageAlt: "a screenshot of formester's customization ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2337,
        name: 'Component 930.png',
        alternativeText: null,
        caption: null,
        width: 1364,
        height: 1042,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Component_930_f7dbffb8f5.png',
            hash: 'large_Component_930_f7dbffb8f5',
            mime: 'image/png',
            name: 'large_Component 930.png',
            path: null,
            size: 107.91,
            width: 1000,
            height: 764,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_930_f7dbffb8f5.png',
            hash: 'small_Component_930_f7dbffb8f5',
            mime: 'image/png',
            name: 'small_Component 930.png',
            path: null,
            size: 37.78,
            width: 500,
            height: 382,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Component_930_f7dbffb8f5.png',
            hash: 'medium_Component_930_f7dbffb8f5',
            mime: 'image/png',
            name: 'medium_Component 930.png',
            path: null,
            size: 69.26,
            width: 750,
            height: 573,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_930_f7dbffb8f5.png',
            hash: 'thumbnail_Component_930_f7dbffb8f5',
            mime: 'image/png',
            name: 'thumbnail_Component 930.png',
            path: null,
            size: 11.26,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_930_f7dbffb8f5',
        ext: '.png',
        mime: 'image/png',
        size: 29.39,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_930_f7dbffb8f5.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:02:24.381Z',
        updatedAt: '2024-11-05T19:02:24.381Z',
      },
    },
  },
  {
    id: 2525,
    title: 'Generate Conditional Rules with AI',
    description:
      "Type the rule the way you'd say it to a colleague.\n\nPrompt: \"If 'Account type' is Business, show the VAT number field and skip the Personal address page. If it's Personal, do the opposite.\"",
    description_markdown:
      'Use a simple prompt to let AI generate your conditional rules. Just tell it how you want your conditional fields to behave.\n\n**Example:** If the T-shirt type equals "Men" or if it’s empty, then Hide the fields "women size" and "kid’s size".\n',
    icon: null,
    cardImage: {
      id: 4148,
      imageAlt: 'a screenshot of create conditional logic with ai ui',
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
    id: 2531,
    title: 'Test & Publish',
    description: 'Preview your form, make adjustments, and publish it to start collecting responses!',
    description_markdown: 'Preview your form, make adjustments, and publish it to start collecting responses!',
    icon: null,
    cardImage: {
      id: 4149,
      imageAlt: "a screenshot of formester's form sharing ui",
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
const c6_title = [
  {
    id: 4967,
    text: 'Advanced Features for Conditional Logic Forms',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c6_itemList = [
  {
    id: 2534,
    title: 'Multilingual Support',
    description:
      'Build forms that cater to a global audience by offering multiple language options. Perfect for surveys and applications!',
    description_markdown:
      'Build **[multilingual forms](/features/multi-language-form-translations/)** that cater to a global audience by translating the form into their native language. Perfect for surveys and applications!',
    icon: null,
    cardImage: {
      id: 4154,
      imageAlt: 'multi language translation ui',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2340,
        name: 'Component 943.png',
        alternativeText: null,
        caption: null,
        width: 682,
        height: 532,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_943_eed2b1e9c8.png',
            hash: 'small_Component_943_eed2b1e9c8',
            mime: 'image/png',
            name: 'small_Component 943.png',
            path: null,
            size: 37.73,
            width: 500,
            height: 390,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_943_eed2b1e9c8.png',
            hash: 'thumbnail_Component_943_eed2b1e9c8',
            mime: 'image/png',
            name: 'thumbnail_Component 943.png',
            path: null,
            size: 9.31,
            width: 200,
            height: 156,
          },
        },
        hash: 'Component_943_eed2b1e9c8',
        ext: '.png',
        mime: 'image/png',
        size: 13.51,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_943_eed2b1e9c8.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:04:01.546Z',
        updatedAt: '2024-11-05T19:04:01.546Z',
      },
    },
  },
  {
    id: 2533,
    title: 'Collaborative Tools',
    description: 'Work with your team in real time. Share your forms, get feedback, and make changes on the go!',
    description_markdown:
      '**[Collaborate with your team in real time](/features/collaborative-forms/)**. Share your forms, get feedback, and make changes on the go!',
    icon: null,
    cardImage: {
      id: 4152,
      imageAlt: "a screenshot of formester's create teams ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2339,
        name: 'Component 938.png',
        alternativeText: 'a screenshot of formester multi user collaboration',
        caption: 'a screenshot of formester multi user collaboration',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_938_a67e13c901.png',
            hash: 'small_Component_938_a67e13c901',
            mime: 'image/png',
            name: 'small_Component 938.png',
            path: null,
            size: 48.11,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_938_a67e13c901.png',
            hash: 'thumbnail_Component_938_a67e13c901',
            mime: 'image/png',
            name: 'thumbnail_Component 938.png',
            path: null,
            size: 12.55,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_938_a67e13c901',
        ext: '.png',
        mime: 'image/png',
        size: 13.44,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_938_a67e13c901.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:03:44.864Z',
        updatedAt: '2024-12-11T03:40:27.737Z',
      },
    },
  },
  {
    id: 2528,
    title: 'Analytics Dashboard',
    description:
      'Use the **[form analytics](/features/form-analytics/)** to track responses and analyze data easily. Know which conditional questions are working and how users engage with your forms.',
    description_markdown:
      'Use the **[form analytics](/features/form-analytics/)** to track responses and analyze data easily. Know which conditional questions are working and how users engage with your forms.',
    icon: null,
    cardImage: {
      id: 4153,
      imageAlt: "formester's analytics ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2341,
        name: 'Component 926.png',
        alternativeText: null,
        caption: null,
        width: 1364,
        height: 1042,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Component_926_628193a9ba.png',
            hash: 'large_Component_926_628193a9ba',
            mime: 'image/png',
            name: 'large_Component 926.png',
            path: null,
            size: 102.67,
            width: 1000,
            height: 764,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_926_628193a9ba.png',
            hash: 'small_Component_926_628193a9ba',
            mime: 'image/png',
            name: 'small_Component 926.png',
            path: null,
            size: 38.5,
            width: 500,
            height: 382,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Component_926_628193a9ba.png',
            hash: 'medium_Component_926_628193a9ba',
            mime: 'image/png',
            name: 'medium_Component 926.png',
            path: null,
            size: 68.34,
            width: 750,
            height: 573,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_926_628193a9ba.png',
            hash: 'thumbnail_Component_926_628193a9ba',
            mime: 'image/png',
            name: 'thumbnail_Component 926.png',
            path: null,
            size: 11.63,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_926_628193a9ba',
        ext: '.png',
        mime: 'image/png',
        size: 22.19,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_628193a9ba.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T19:04:10.169Z',
        updatedAt: '2024-11-05T19:04:10.169Z',
      },
    },
  },
]
const c10_description =
  'Get started quickly with ready-to-use form templates for different use cases. Customize each template to match your needs and create professional forms in minutes.'
const c10_title = [
  {
    id: 4966,
    text: 'Free Online Form Templates',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c10_button = {
  id: 1651,
  link: '/templates/categories/survey-forms/',
  text: 'More templates',
  type: 'Primary',
  showArrow: null,
}
const c10_specificTemplate = []
const c11_heading = [
  {
    id: 4968,
    text: 'Testimonials',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c11_testimonials = [
  {
    id: 6,
    name: 'Thibaud Martinez',
    position: 'Organiser',
    organization: 'Tedx',
    comment: 'I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.',
    createdAt: '2024-06-18T03:53:38.957Z',
    updatedAt: '2025-01-22T02:56:48.567Z',
    publishedAt: '2024-06-18T03:53:40.693Z',
    companyLogo: {
      id: 229,
      imageAlt: 'tedx-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1684,
        name: 'tedx.webp',
        alternativeText: 'tedx-logo',
        caption: 'tedx-logo',
        width: 109,
        height: 38,
        formats: null,
        hash: 'tedx_2fce0eee2e',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.09,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_2fce0eee2e.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.941Z',
        updatedAt: '2024-12-01T07:50:31.505Z',
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
]
const c12_ctaValue = {
  id: 67,
  description: 'Get access to advanced AI, unlimited forms & more. See pricing for more details.',
  type: 'default',
  createdAt: '2024-11-04T07:07:43.916Z',
  updatedAt: '2025-06-12T18:47:31.840Z',
  publishedAt: '2024-11-04T07:08:18.018Z',
  locale: 'en',
  title: [
    {
      id: 393,
      text: 'Ready to build your perfect form?',
      highlight: false,
      color: null,
      bold: null,
    },
  ],
  buttons: [
    {
      id: 338,
      link: 'https://app.formester.com/users/sign_up',
      text: 'Get Started–It’s Free!',
      type: 'Primary',
      showArrow: null,
    },
  ],
  localizations: [],
}
const c13_title = [
  {
    id: 4969,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c13_faqList = [
  {
    id: 2549,
    header: 'What is conditional logic in a form?',
    body: "Logic that lets a form react to what's already been answered. The form decides which fields to show, which pages to skip, when to require something, what to calculate, and where to send the response, based on rules you define.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2546,
    header: 'How do I create conditional logic forms?',
    body: 'Create your form, choose fields, and set rules based on user responses. With Formester, you can use AI to automatically generate conditional logic and build smart forms quickly.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2547,
    header: 'Can I use branching questions in forms?',
    body: 'Yes, you can add branching questions that guide users through different paths based on their answers. This helps you collect accurate and structured responses.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2548,
    header: 'Are there templates for conditional forms?',
    body: 'Yes, Formester provides ready-to-use templates for different use cases. You can customize them and add conditional logic to get started faster.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2551,
    header: 'What kinds of rules can I build?',
    body: 'Show or hide a field, skip a page, make a field required, filter the choices in a dropdown, calculate a value, and route the email or redirect on submit. You can stack them with AND / OR',
    body_markdown: null,
    list: [],
  },
  {
    id: 2553,
    header: 'Do I need to write code?',
    body: "No. Describe the rule in one sentence. Formester's AI translates it into the rule editor. You can also build rules manually in the same editor.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2550,
    header: ' Can I edit what the AI wrote? ',
    body: 'Yes. Every rule the AI generates appears in the standard rule editor. Open it, change the condition, change the action, save.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2552,
    header: 'Can the form skip whole pages, not just fields?',
    body: "Yes. Skip-page rules jump past sections that don't apply, based on previous answers.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2554,
    header: 'Can the form do calculations?',
    body: 'Yes. Multiply, add, percent, conditional totals. Common cases are quantity × price, score-based outcomes, and tier-based discounts.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2555,
    header: 'Can I send different emails based on the answers? ',
    body: 'Yes. Route submissions to different inboxes, change the email body, or redirect to a different thank-you page based on the response.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2556,
    header: 'Can I add conditional logic to a form I built somewhere else?',
    body: 'Yes. Import from Google Forms, Microsoft Forms, or Typeform; paste a list of questions; or upload a PDF. Then describe the rules.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2559,
    header: 'Is conditional logic on the free plan?',
    body: 'Conditional logic is on the Personal plan and above. The Free plan covers form building and AI form generation; rules ship from $12/month',
    body_markdown: null,
    list: [],
  },
  {
    id: 2558,
    header: 'Does the AI use my form data to train models?',
    body: "No. Customer data isn't used for training, advertising, marketing, or analytics, per Formester's DPA.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2557,
    header: 'How many rules can a form have?',
    body: "No hard limit. We've seen forms with 80+ rules running cleanly. We'd recommend stress-testing anything past 50 rules in preview before publish.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2560,
    header: 'Does the form work on mobile?',
    body: 'Yes. Conditional logic runs the same on desktop, tablet, and mobile. Forms reflow responsively.\n',
    body_markdown: null,
    list: [],
  },
]

useHead({
  title: 'Smart Conditional Logic AI Form Builder with Six Logic Types.',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/build-conditional-logic-forms-with-ai/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-08T11:30:39.451Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Show, hide, skip, or calculate fields based on user answers. Describe the rule in plain English and Formester's AI builds it. Six logic types, no code.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Smart Conditional Logic AI Form Builder with Six Logic Types.',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/build-conditional-logic-forms-with-ai​​/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Smart Conditional Logic AI Form Builder with Six Logic Types.',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Show, hide, skip, or calculate fields based on user answers. Describe the rule in plain English and Formester's AI builds it. Six logic types, no code.",
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
      content: 'https://formester.com/build-conditional-logic-forms-with-ai​​/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Smart Conditional Logic AI Form Builder with Six Logic Types.',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Show, hide, skip, or calculate fields based on user answers. Describe the rule in plain English and Formester's AI builds it. Six logic types, no code.",
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
      content: [],
    },
  ],
})
useJsonld([
  {
    '@graph': [
      {
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
            addressCountry: 'US',
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
        url: 'CURRENT_PAGE_URL_HERE',
        name: 'Formester Conditional Logic Forms',
        '@type': 'SoftwareApplication',
        offers: {
          url: 'https://formester.com/pricing/',
          '@type': 'Offer',
          price: '13',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
        },
        description:
          'Formester helps you build conditional logic forms with AI. Create smart forms that show or hide fields based on user responses and improve data collection.',
        aggregateRating: {
          '@type': 'AggregateRating',
          bestRating: '5',
          ratingValue: '4.7',
          reviewCount: '33',
          worstRating: '1',
        },
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
      },
      {
        url: 'CURRENT_PAGE_URL_HERE',
        name: 'Conditional Logic Forms - Formester',
        '@type': 'WebPage',
        publisher: {
          logo: {
            url: 'https://formester.com/logo.svg',
            '@type': 'ImageObject',
          },
          name: 'Formester',
          '@type': 'Organization',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'What is conditional logic?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Conditional logic is a feature that makes forms interactive by displaying questions based on previous answers. It ensures users only see relevant fields, making forms shorter and easier to complete.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What is conditional logic in forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Conditional logic in forms allows fields or questions to show, hide, or change based on user responses. It helps create dynamic forms that collect relevant information and improve user experience.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I create conditional logic forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Create your form, choose fields, and set rules based on user responses. With Formester, you can use AI to automatically generate conditional logic and build smart forms quickly.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I use branching questions in forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes, you can add branching questions that guide users through different paths based on their answers. This helps you collect accurate and structured responses.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What are forms with conditional logic?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Forms with conditional logic adapt in real time by showing or hiding fields based on user input. They help businesses collect better data and improve form completion rates.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is this feature easy to use?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes, Formester makes it simple to set up conditional fields using AI and an easy visual builder. No coding or technical skills are needed.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Are there templates for conditional forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes, Formester provides ready-to-use templates for different use cases. You can customize them and add conditional logic to get started faster.',
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

.fmstr-cmp-cl-rule-types {
  --fmstr-cmp-cl-rule-types-bg-card: #ffffff;
  --fmstr-cmp-cl-rule-types-bg-thead: #f7f3ff;
  --fmstr-cmp-cl-rule-types-bg-rule: #f9fafb;
  --fmstr-cmp-cl-rule-types-bg-tile: #f7f3ff;
  --fmstr-cmp-cl-rule-types-bg-pill: #f4ebff;
  --fmstr-cmp-cl-rule-types-fg-1: #101828;
  --fmstr-cmp-cl-rule-types-fg-2: #475467;
  --fmstr-cmp-cl-rule-types-fg-3: #697586;
  --fmstr-cmp-cl-rule-types-fg-eyebrow: #6941c6;
  --fmstr-cmp-cl-rule-types-violet-500: #7f56d9;
  --fmstr-cmp-cl-rule-types-violet-600: #6941c6;
  --fmstr-cmp-cl-rule-types-border-light: #eaecf0;
  --fmstr-cmp-cl-rule-types-fs-xs: 12px;
  --fmstr-cmp-cl-rule-types-fs-sm: 14px;
  --fmstr-cmp-cl-rule-types-fs-md: 16px;
  --fmstr-cmp-cl-rule-types-fs-lg: 18px;
  --fmstr-cmp-cl-rule-types-fs-2xl: 24px;
  --fmstr-cmp-cl-rule-types-fs-3xl: 36px;
  --fmstr-cmp-cl-rule-types-lh-md: 24px;
  --fmstr-cmp-cl-rule-types-lh-lg: 28px;
  --fmstr-cmp-cl-rule-types-fw-medium: 500;
  --fmstr-cmp-cl-rule-types-fw-semibold: 600;
  --fmstr-cmp-cl-rule-types-fw-bold: 700;
  --fmstr-cmp-cl-rule-types-space-1: 4px;
  --fmstr-cmp-cl-rule-types-space-2: 8px;
  --fmstr-cmp-cl-rule-types-space-3: 12px;
  --fmstr-cmp-cl-rule-types-space-4: 16px;
  --fmstr-cmp-cl-rule-types-space-5: 20px;
  --fmstr-cmp-cl-rule-types-space-6: 24px;
  --fmstr-cmp-cl-rule-types-space-7: 28px;
  --fmstr-cmp-cl-rule-types-space-8: 32px;
  --fmstr-cmp-cl-rule-types-space-12: 48px;
  --fmstr-cmp-cl-rule-types-space-16: 64px;
  --fmstr-cmp-cl-rule-types-r-md: 8px;
  --fmstr-cmp-cl-rule-types-r-xl: 16px;
  --fmstr-cmp-cl-rule-types-r-full: 9999px;
  padding: var(--fmstr-cmp-cl-rule-types-space-16) var(--fmstr-cmp-cl-rule-types-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-cl-rule-types-fg-1);
}

.fmstr-cmp-cl-rule-types *,
.fmstr-cmp-cl-rule-types *::before,
.fmstr-cmp-cl-rule-types *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cl-rule-types__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-cl-rule-types__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-cl-rule-types-space-8);
  text-align: center;
}

.fmstr-cmp-cl-rule-types__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-cl-rule-types-space-1) var(--fmstr-cmp-cl-rule-types-space-3);
  background: var(--fmstr-cmp-cl-rule-types-bg-pill);
  color: var(--fmstr-cmp-cl-rule-types-fg-eyebrow);
  border-radius: var(--fmstr-cmp-cl-rule-types-r-full);
  font-size: var(--fmstr-cmp-cl-rule-types-fs-xs);
  font-weight: var(--fmstr-cmp-cl-rule-types-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cl-rule-types-space-4);
}

.fmstr-cmp-cl-rule-types__heading {
  font-size: var(--fmstr-cmp-cl-rule-types-fs-3xl);
  line-height: 1.15;
  font-weight: var(--fmstr-cmp-cl-rule-types-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-cl-rule-types-fg-1);
  margin: 0 0 var(--fmstr-cmp-cl-rule-types-space-3);
}
.fmstr-cmp-cl-rule-types__heading-accent {
  color: var(--fmstr-cmp-cl-rule-types-violet-600);
}

.fmstr-cmp-cl-rule-types__intro {
  font-size: var(--fmstr-cmp-cl-rule-types-fs-md);
  line-height: var(--fmstr-cmp-cl-rule-types-lh-md);
  color: var(--fmstr-cmp-cl-rule-types-fg-2);
  margin: 0;
}

.fmstr-cmp-cl-rule-types__table-wrap {
  background: var(--fmstr-cmp-cl-rule-types-bg-card);
  border: 1px solid var(--fmstr-cmp-cl-rule-types-border-light);
  border-radius: var(--fmstr-cmp-cl-rule-types-r-xl);
  overflow: hidden;
}

.fmstr-cmp-cl-rule-types__table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fmstr-cmp-cl-rule-types-fs-sm);
}

.fmstr-cmp-cl-rule-types__table thead th {
  background: var(--fmstr-cmp-cl-rule-types-bg-thead);
  text-align: left;
  padding: var(--fmstr-cmp-cl-rule-types-space-4) var(--fmstr-cmp-cl-rule-types-space-5);
  color: var(--fmstr-cmp-cl-rule-types-fg-eyebrow);
  font-weight: var(--fmstr-cmp-cl-rule-types-fw-bold);
  font-size: var(--fmstr-cmp-cl-rule-types-fs-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--fmstr-cmp-cl-rule-types-border-light);
}

.fmstr-cmp-cl-rule-types__table tbody td {
  padding: var(--fmstr-cmp-cl-rule-types-space-5);
  border-bottom: 1px solid var(--fmstr-cmp-cl-rule-types-border-light);
  vertical-align: top;
  line-height: var(--fmstr-cmp-cl-rule-types-lh-md);
}
.fmstr-cmp-cl-rule-types__table tbody tr:last-child td {
  border-bottom: 0;
}

.fmstr-cmp-cl-rule-types__type-name {
  font-weight: var(--fmstr-cmp-cl-rule-types-fw-semibold);
  color: var(--fmstr-cmp-cl-rule-types-fg-1);
  width: 24%;
}
.fmstr-cmp-cl-rule-types__type-name-inner {
  display: flex;
  align-items: center;
  gap: var(--fmstr-cmp-cl-rule-types-space-3);
}
.fmstr-cmp-cl-rule-types__icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: var(--fmstr-cmp-cl-rule-types-bg-tile);
  color: var(--fmstr-cmp-cl-rule-types-violet-600);
  border-radius: var(--fmstr-cmp-cl-rule-types-r-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.fmstr-cmp-cl-rule-types__type-what {
  width: 30%;
  color: var(--fmstr-cmp-cl-rule-types-fg-2);
}

.fmstr-cmp-cl-rule-types__rule {
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: var(--fmstr-cmp-cl-rule-types-fs-sm);
  color: var(--fmstr-cmp-cl-rule-types-fg-1);
  background: var(--fmstr-cmp-cl-rule-types-bg-rule);
  padding: var(--fmstr-cmp-cl-rule-types-space-3) var(--fmstr-cmp-cl-rule-types-space-4);
  border-radius: var(--fmstr-cmp-cl-rule-types-r-md);
  border: 1px solid var(--fmstr-cmp-cl-rule-types-border-light);
  display: inline-block;
  width: 100%;
  line-height: var(--fmstr-cmp-cl-rule-types-lh-md);
}

.fmstr-cmp-cl-rule-types__footer {
  margin-top: var(--fmstr-cmp-cl-rule-types-space-8);
  text-align: center;
  color: var(--fmstr-cmp-cl-rule-types-fg-2);
  font-size: var(--fmstr-cmp-cl-rule-types-fs-md);
  line-height: var(--fmstr-cmp-cl-rule-types-lh-md);
}
.fmstr-cmp-cl-rule-types__footer strong {
  color: var(--fmstr-cmp-cl-rule-types-fg-1);
  font-weight: var(--fmstr-cmp-cl-rule-types-fw-semibold);
}

@media (max-width: 760px) {
  .fmstr-cmp-cl-rule-types {
    padding: var(--fmstr-cmp-cl-rule-types-space-12) var(--fmstr-cmp-cl-rule-types-space-4);
  }
  .fmstr-cmp-cl-rule-types__heading {
    font-size: var(--fmstr-cmp-cl-rule-types-fs-2xl);
    line-height: 30px;
  }
  .fmstr-cmp-cl-rule-types__table thead {
    display: none;
  }
  .fmstr-cmp-cl-rule-types__table,
  .fmstr-cmp-cl-rule-types__table tbody,
  .fmstr-cmp-cl-rule-types__table tr,
  .fmstr-cmp-cl-rule-types__table td {
    display: block;
    width: 100%;
  }
  .fmstr-cmp-cl-rule-types__table tr {
    border-bottom: 1px solid var(--fmstr-cmp-cl-rule-types-border-light);
    padding: var(--fmstr-cmp-cl-rule-types-space-3) 0;
  }
  .fmstr-cmp-cl-rule-types__table tbody tr:last-child {
    border-bottom: 0;
  }
  .fmstr-cmp-cl-rule-types__table tbody td {
    padding: var(--fmstr-cmp-cl-rule-types-space-2) var(--fmstr-cmp-cl-rule-types-space-5);
    border: 0;
    width: 100%;
  }
  .fmstr-cmp-cl-rule-types__type-name {
    padding-top: var(--fmstr-cmp-cl-rule-types-space-4) !important;
  }
}

.fmstr-cmp-cl-popular-use-cases {
  --fmstr-cmp-cl-popular-use-cases-bg-card: #ffffff;
  --fmstr-cmp-cl-popular-use-cases-bg-pill: #f4ebff;
  --fmstr-cmp-cl-popular-use-cases-bg-rule: #f7f3ff;
  --fmstr-cmp-cl-popular-use-cases-fg-1: #101828;
  --fmstr-cmp-cl-popular-use-cases-fg-2: #475467;
  --fmstr-cmp-cl-popular-use-cases-violet-500: #7f56d9;
  --fmstr-cmp-cl-popular-use-cases-violet-600: #6941c6;
  --fmstr-cmp-cl-popular-use-cases-border-light: #eaecf0;
  --fmstr-cmp-cl-popular-use-cases-border-violet: #9777e0;
  --fmstr-cmp-cl-popular-use-cases-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-cl-popular-use-cases-shadow-md: 0 4px 10px -2px rgba(16, 24, 40, 0.1);
  --fmstr-cmp-cl-popular-use-cases-shadow-tile: 0 4px 10px -2px rgba(16, 24, 40, 0.15);
  --fmstr-cmp-cl-popular-use-cases-fs-xs: 12px;
  --fmstr-cmp-cl-popular-use-cases-fs-sm: 14px;
  --fmstr-cmp-cl-popular-use-cases-fs-md: 16px;
  --fmstr-cmp-cl-popular-use-cases-fs-lg: 18px;
  --fmstr-cmp-cl-popular-use-cases-fs-2xl: 24px;
  --fmstr-cmp-cl-popular-use-cases-fs-3xl: 36px;
  --fmstr-cmp-cl-popular-use-cases-lh-md: 24px;
  --fmstr-cmp-cl-popular-use-cases-lh-lg: 28px;
  --fmstr-cmp-cl-popular-use-cases-lh-2xl: 32px;
  --fmstr-cmp-cl-popular-use-cases-fw-semibold: 600;
  --fmstr-cmp-cl-popular-use-cases-fw-bold: 700;
  --fmstr-cmp-cl-popular-use-cases-space-1: 4px;
  --fmstr-cmp-cl-popular-use-cases-space-2: 8px;
  --fmstr-cmp-cl-popular-use-cases-space-3: 12px;
  --fmstr-cmp-cl-popular-use-cases-space-4: 16px;
  --fmstr-cmp-cl-popular-use-cases-space-5: 20px;
  --fmstr-cmp-cl-popular-use-cases-space-6: 24px;
  --fmstr-cmp-cl-popular-use-cases-space-7: 28px;
  --fmstr-cmp-cl-popular-use-cases-space-8: 32px;
  --fmstr-cmp-cl-popular-use-cases-space-10: 40px;
  --fmstr-cmp-cl-popular-use-cases-space-12: 48px;
  --fmstr-cmp-cl-popular-use-cases-space-16: 64px;
  --fmstr-cmp-cl-popular-use-cases-r-md: 8px;
  --fmstr-cmp-cl-popular-use-cases-r-lg: 12px;
  --fmstr-cmp-cl-popular-use-cases-r-2xl: 16px;
  --fmstr-cmp-cl-popular-use-cases-r-full: 9999px;

  padding: var(--fmstr-cmp-cl-popular-use-cases-space-16) var(--fmstr-cmp-cl-popular-use-cases-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-cl-popular-use-cases-fg-1);
}

.fmstr-cmp-cl-popular-use-cases *,
.fmstr-cmp-cl-popular-use-cases *::before,
.fmstr-cmp-cl-popular-use-cases *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cl-popular-use-cases__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-cl-popular-use-cases__header {
  margin: 0 auto var(--fmstr-cmp-cl-popular-use-cases-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-cl-popular-use-cases__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-cl-popular-use-cases-space-1) var(--fmstr-cmp-cl-popular-use-cases-space-3);
  background: var(--fmstr-cmp-cl-popular-use-cases-bg-pill);
  color: var(--fmstr-cmp-cl-popular-use-cases-violet-600);
  border-radius: var(--fmstr-cmp-cl-popular-use-cases-r-full);
  font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-xs);
  font-weight: var(--fmstr-cmp-cl-popular-use-cases-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cl-popular-use-cases-space-4);
}

.fmstr-cmp-cl-popular-use-cases__heading {
  font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-cl-popular-use-cases-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-cl-popular-use-cases-fg-1);
  margin: 0 0 var(--fmstr-cmp-cl-popular-use-cases-space-3);
}

.fmstr-cmp-cl-popular-use-cases__intro {
  font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-md);
  line-height: var(--fmstr-cmp-cl-popular-use-cases-lh-md);
  color: var(--fmstr-cmp-cl-popular-use-cases-fg-2);
  margin: 0;
}

.fmstr-cmp-cl-popular-use-cases__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-cl-popular-use-cases-space-5);
  align-items: stretch;
}

.fmstr-cmp-cl-popular-use-cases__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-cl-popular-use-cases-space-4);
  padding: var(--fmstr-cmp-cl-popular-use-cases-space-7);
  background: var(--fmstr-cmp-cl-popular-use-cases-bg-card);
  border: 1px solid var(--fmstr-cmp-cl-popular-use-cases-border-light);
  border-radius: var(--fmstr-cmp-cl-popular-use-cases-r-2xl);
  box-shadow: var(--fmstr-cmp-cl-popular-use-cases-shadow-xs);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-cl-popular-use-cases__card:hover {
  border-color: var(--fmstr-cmp-cl-popular-use-cases-border-violet);
  box-shadow: var(--fmstr-cmp-cl-popular-use-cases-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-cl-popular-use-cases__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-cl-popular-use-cases-r-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: var(--fmstr-cmp-cl-popular-use-cases-shadow-tile);
}
.fmstr-cmp-cl-popular-use-cases__icon--blue {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
.fmstr-cmp-cl-popular-use-cases__icon--violet {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}
.fmstr-cmp-cl-popular-use-cases__icon--rose {
  background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
}
.fmstr-cmp-cl-popular-use-cases__icon--amber {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
}

.fmstr-cmp-cl-popular-use-cases__title {
  margin: 0;
  font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-lg);
  line-height: var(--fmstr-cmp-cl-popular-use-cases-lh-lg);
  font-weight: var(--fmstr-cmp-cl-popular-use-cases-fw-bold);
  color: var(--fmstr-cmp-cl-popular-use-cases-fg-1);
}

.fmstr-cmp-cl-popular-use-cases__body {
  margin: 0;
  font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-cl-popular-use-cases-fg-2);
}

.fmstr-cmp-cl-popular-use-cases__rule {
  margin-top: auto;
  background: var(--fmstr-cmp-cl-popular-use-cases-bg-rule);
  border-left: 3px solid var(--fmstr-cmp-cl-popular-use-cases-violet-500);
  border-radius: 0 var(--fmstr-cmp-cl-popular-use-cases-r-md) var(--fmstr-cmp-cl-popular-use-cases-r-md) 0;
  padding: var(--fmstr-cmp-cl-popular-use-cases-space-3) var(--fmstr-cmp-cl-popular-use-cases-space-4);
  font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-sm);
  line-height: 20px;
  color: var(--fmstr-cmp-cl-popular-use-cases-fg-1);
}
.fmstr-cmp-cl-popular-use-cases__rule strong {
  color: var(--fmstr-cmp-cl-popular-use-cases-violet-600);
  font-weight: var(--fmstr-cmp-cl-popular-use-cases-fw-bold);
  margin-right: var(--fmstr-cmp-cl-popular-use-cases-space-1);
}

@media (max-width: 760px) {
  .fmstr-cmp-cl-popular-use-cases {
    padding: var(--fmstr-cmp-cl-popular-use-cases-space-12) var(--fmstr-cmp-cl-popular-use-cases-space-4);
  }
  .fmstr-cmp-cl-popular-use-cases__heading {
    font-size: var(--fmstr-cmp-cl-popular-use-cases-fs-2xl);
    line-height: var(--fmstr-cmp-cl-popular-use-cases-lh-2xl);
  }
  .fmstr-cmp-cl-popular-use-cases__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-cl-popular-use-cases__card {
    padding: var(--fmstr-cmp-cl-popular-use-cases-space-6);
  }
}

.fmstr-cmp-cl-comparison {
  --fmstr-cmp-cl-comparison-bg-card: #ffffff;
  --fmstr-cmp-cl-comparison-bg-row-label: #f9fafb;
  --fmstr-cmp-cl-comparison-bg-them: #f9fafb;
  --fmstr-cmp-cl-comparison-bg-us: #f7f3ff;
  --fmstr-cmp-cl-comparison-bg-pill: #f4ebff;
  --fmstr-cmp-cl-comparison-bg-summary: #f7f3ff;
  --fmstr-cmp-cl-comparison-fg-1: #101828;
  --fmstr-cmp-cl-comparison-fg-2: #475467;
  --fmstr-cmp-cl-comparison-fg-3: #697586;
  --fmstr-cmp-cl-comparison-fg-eyebrow: #6941c6;
  --fmstr-cmp-cl-comparison-violet-500: #7f56d9;
  --fmstr-cmp-cl-comparison-violet-600: #6941c6;
  --fmstr-cmp-cl-comparison-violet-700: #53389e;
  --fmstr-cmp-cl-comparison-border-light: #eaecf0;
  --fmstr-cmp-cl-comparison-fs-xs: 12px;
  --fmstr-cmp-cl-comparison-fs-sm: 14px;
  --fmstr-cmp-cl-comparison-fs-md: 16px;
  --fmstr-cmp-cl-comparison-fs-lg: 18px;
  --fmstr-cmp-cl-comparison-fs-2xl: 24px;
  --fmstr-cmp-cl-comparison-fs-3xl: 36px;
  --fmstr-cmp-cl-comparison-lh-md: 24px;
  --fmstr-cmp-cl-comparison-lh-lg: 28px;
  --fmstr-cmp-cl-comparison-fw-medium: 500;
  --fmstr-cmp-cl-comparison-fw-semibold: 600;
  --fmstr-cmp-cl-comparison-fw-bold: 700;
  --fmstr-cmp-cl-comparison-space-1: 4px;
  --fmstr-cmp-cl-comparison-space-2: 8px;
  --fmstr-cmp-cl-comparison-space-3: 12px;
  --fmstr-cmp-cl-comparison-space-4: 16px;
  --fmstr-cmp-cl-comparison-space-5: 20px;
  --fmstr-cmp-cl-comparison-space-6: 24px;
  --fmstr-cmp-cl-comparison-space-7: 28px;
  --fmstr-cmp-cl-comparison-space-8: 32px;
  --fmstr-cmp-cl-comparison-space-12: 48px;
  --fmstr-cmp-cl-comparison-space-16: 64px;
  --fmstr-cmp-cl-comparison-r-md: 8px;
  --fmstr-cmp-cl-comparison-r-lg: 12px;
  --fmstr-cmp-cl-comparison-r-xl: 16px;
  --fmstr-cmp-cl-comparison-r-full: 9999px;
  padding: var(--fmstr-cmp-cl-comparison-space-16) var(--fmstr-cmp-cl-comparison-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-cl-comparison-fg-1);
}

.fmstr-cmp-cl-comparison *,
.fmstr-cmp-cl-comparison *::before,
.fmstr-cmp-cl-comparison *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cl-comparison__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-cl-comparison__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-cl-comparison-space-8);
  text-align: center;
}

.fmstr-cmp-cl-comparison__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-cl-comparison-space-1) var(--fmstr-cmp-cl-comparison-space-3);
  background: var(--fmstr-cmp-cl-comparison-bg-pill);
  color: var(--fmstr-cmp-cl-comparison-fg-eyebrow);
  border-radius: var(--fmstr-cmp-cl-comparison-r-full);
  font-size: var(--fmstr-cmp-cl-comparison-fs-xs);
  font-weight: var(--fmstr-cmp-cl-comparison-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cl-comparison-space-4);
}

.fmstr-cmp-cl-comparison__heading {
  font-size: var(--fmstr-cmp-cl-comparison-fs-3xl);
  line-height: 1.15;
  font-weight: var(--fmstr-cmp-cl-comparison-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-cl-comparison-fg-1);
  margin: 0 0 var(--fmstr-cmp-cl-comparison-space-3);
}
.fmstr-cmp-cl-comparison__heading-accent {
  color: var(--fmstr-cmp-cl-comparison-violet-600);
}

.fmstr-cmp-cl-comparison__intro {
  font-size: var(--fmstr-cmp-cl-comparison-fs-md);
  line-height: var(--fmstr-cmp-cl-comparison-lh-md);
  color: var(--fmstr-cmp-cl-comparison-fg-2);
  margin: 0;
}

.fmstr-cmp-cl-comparison__table-wrap {
  background: var(--fmstr-cmp-cl-comparison-bg-card);
  border: 1px solid var(--fmstr-cmp-cl-comparison-border-light);
  border-radius: var(--fmstr-cmp-cl-comparison-r-xl);
  overflow: hidden;
}

.fmstr-cmp-cl-comparison__table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fmstr-cmp-cl-comparison-fs-sm);
}

.fmstr-cmp-cl-comparison__table thead th {
  padding: var(--fmstr-cmp-cl-comparison-space-4) var(--fmstr-cmp-cl-comparison-space-5);
  text-align: left;
  font-size: var(--fmstr-cmp-cl-comparison-fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--fmstr-cmp-cl-comparison-fw-bold);
  border-bottom: 1px solid var(--fmstr-cmp-cl-comparison-border-light);
}
.fmstr-cmp-cl-comparison__th-blank {
  background: var(--fmstr-cmp-cl-comparison-bg-row-label);
  color: var(--fmstr-cmp-cl-comparison-fg-3);
}
.fmstr-cmp-cl-comparison__th-them {
  background: #101828;
  color: #ffffff;
}
.fmstr-cmp-cl-comparison__th-us {
  background: var(--fmstr-cmp-cl-comparison-violet-600);
  color: #ffffff;
}

.fmstr-cmp-cl-comparison__th-inner {
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-cl-comparison-space-2);
}

.fmstr-cmp-cl-comparison__table tbody td {
  padding: var(--fmstr-cmp-cl-comparison-space-4) var(--fmstr-cmp-cl-comparison-space-5);
  border-bottom: 1px solid var(--fmstr-cmp-cl-comparison-border-light);
  vertical-align: top;
  line-height: var(--fmstr-cmp-cl-comparison-lh-md);
}
.fmstr-cmp-cl-comparison__table tbody tr:last-child td {
  border-bottom: 0;
}

.fmstr-cmp-cl-comparison__row-label {
  font-weight: var(--fmstr-cmp-cl-comparison-fw-semibold);
  color: var(--fmstr-cmp-cl-comparison-fg-1);
  background: var(--fmstr-cmp-cl-comparison-bg-row-label);
  width: 28%;
}

.fmstr-cmp-cl-comparison__col-them {
  color: var(--fmstr-cmp-cl-comparison-fg-2);
  width: 36%;
}

.fmstr-cmp-cl-comparison__col-us {
  color: var(--fmstr-cmp-cl-comparison-fg-1);
  width: 36%;
  background: var(--fmstr-cmp-cl-comparison-bg-us);
}
.fmstr-cmp-cl-comparison__col-us strong {
  color: var(--fmstr-cmp-cl-comparison-violet-700);
  font-weight: var(--fmstr-cmp-cl-comparison-fw-semibold);
}

.fmstr-cmp-cl-comparison__summary {
  margin-top: var(--fmstr-cmp-cl-comparison-space-7);
  background: var(--fmstr-cmp-cl-comparison-bg-summary);
  border: 1px solid var(--fmstr-cmp-cl-comparison-border-light);
  border-radius: var(--fmstr-cmp-cl-comparison-r-lg);
  padding: var(--fmstr-cmp-cl-comparison-space-5) var(--fmstr-cmp-cl-comparison-space-6);
  color: var(--fmstr-cmp-cl-comparison-fg-1);
  font-size: var(--fmstr-cmp-cl-comparison-fs-md);
  line-height: var(--fmstr-cmp-cl-comparison-lh-md);
}
.fmstr-cmp-cl-comparison__summary strong {
  color: var(--fmstr-cmp-cl-comparison-violet-700);
  font-weight: var(--fmstr-cmp-cl-comparison-fw-semibold);
}

@media (max-width: 760px) {
  .fmstr-cmp-cl-comparison {
    padding: var(--fmstr-cmp-cl-comparison-space-12) var(--fmstr-cmp-cl-comparison-space-4);
  }
  .fmstr-cmp-cl-comparison__heading {
    font-size: var(--fmstr-cmp-cl-comparison-fs-2xl);
    line-height: 30px;
  }
  .fmstr-cmp-cl-comparison__table-wrap {
    overflow-x: auto;
  }
  .fmstr-cmp-cl-comparison__table {
    min-width: 640px;
  }
  .fmstr-cmp-cl-comparison__summary {
    padding: var(--fmstr-cmp-cl-comparison-space-4);
  }
}

.fmstr-cmp-cl-privacy-data-trust {
  --fmstr-cmp-cl-privacy-data-trust-bg-section: #0f0921;
  --fmstr-cmp-cl-privacy-data-trust-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-cl-privacy-data-trust-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-cl-privacy-data-trust-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-cl-privacy-data-trust-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-cl-privacy-data-trust-fg-eyebrow: #bda6ff;
  --fmstr-cmp-cl-privacy-data-trust-fg-link: #d9c7ff;
  --fmstr-cmp-cl-privacy-data-trust-fg-link-hover: #ffffff;
  --fmstr-cmp-cl-privacy-data-trust-fs-xs: 12px;
  --fmstr-cmp-cl-privacy-data-trust-fs-sm: 14px;
  --fmstr-cmp-cl-privacy-data-trust-fs-md: 16px;
  --fmstr-cmp-cl-privacy-data-trust-fs-lg: 18px;
  --fmstr-cmp-cl-privacy-data-trust-fs-2xl: 24px;
  --fmstr-cmp-cl-privacy-data-trust-fs-3xl: 32px;
  --fmstr-cmp-cl-privacy-data-trust-fw-semibold: 600;
  --fmstr-cmp-cl-privacy-data-trust-fw-bold: 700;
  --fmstr-cmp-cl-privacy-data-trust-lh-md: 24px;
  --fmstr-cmp-cl-privacy-data-trust-lh-lg: 28px;
  --fmstr-cmp-cl-privacy-data-trust-lh-2xl: 32px;
  --fmstr-cmp-cl-privacy-data-trust-space-1: 4px;
  --fmstr-cmp-cl-privacy-data-trust-space-2: 8px;
  --fmstr-cmp-cl-privacy-data-trust-space-3: 12px;
  --fmstr-cmp-cl-privacy-data-trust-space-4: 16px;
  --fmstr-cmp-cl-privacy-data-trust-space-5: 20px;
  --fmstr-cmp-cl-privacy-data-trust-space-6: 24px;
  --fmstr-cmp-cl-privacy-data-trust-space-7: 28px;
  --fmstr-cmp-cl-privacy-data-trust-space-8: 32px;
  --fmstr-cmp-cl-privacy-data-trust-space-12: 48px;
  --fmstr-cmp-cl-privacy-data-trust-space-16: 64px;
  --fmstr-cmp-cl-privacy-data-trust-r-2xl: 16px;
  --fmstr-cmp-cl-privacy-data-trust-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-cl-privacy-data-trust-space-12) var(--fmstr-cmp-cl-privacy-data-trust-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-cl-privacy-data-trust *,
.fmstr-cmp-cl-privacy-data-trust *::before,
.fmstr-cmp-cl-privacy-data-trust *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cl-privacy-data-trust__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-cl-privacy-data-trust-bg-section);
  background-image: var(--fmstr-cmp-cl-privacy-data-trust-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-cl-privacy-data-trust-space-12);
  overflow: hidden;
}

.fmstr-cmp-cl-privacy-data-trust__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-cl-privacy-data-trust-space-12);
  align-items: center;
}

.fmstr-cmp-cl-privacy-data-trust__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-cl-privacy-data-trust-space-2) var(--fmstr-cmp-cl-privacy-data-trust-space-4);
  background: var(--fmstr-cmp-cl-privacy-data-trust-bg-pill);
  color: var(--fmstr-cmp-cl-privacy-data-trust-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-cl-privacy-data-trust-r-full);
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-xs);
  font-weight: var(--fmstr-cmp-cl-privacy-data-trust-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cl-privacy-data-trust-space-5);
}

.fmstr-cmp-cl-privacy-data-trust__heading {
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-cl-privacy-data-trust-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-cl-privacy-data-trust-space-6);
}

.fmstr-cmp-cl-privacy-data-trust__body p {
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-md);
  line-height: var(--fmstr-cmp-cl-privacy-data-trust-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-cl-privacy-data-trust-space-4);
}
.fmstr-cmp-cl-privacy-data-trust__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-cl-privacy-data-trust__card {
  background-color: var(--fmstr-cmp-cl-privacy-data-trust-bg-card);
  background-image: var(--fmstr-cmp-cl-privacy-data-trust-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-cl-privacy-data-trust-r-2xl);
  padding: var(--fmstr-cmp-cl-privacy-data-trust-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-cl-privacy-data-trust__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-cl-privacy-data-trust-space-2) var(--fmstr-cmp-cl-privacy-data-trust-space-4);
  background: var(--fmstr-cmp-cl-privacy-data-trust-bg-pill);
  color: var(--fmstr-cmp-cl-privacy-data-trust-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-cl-privacy-data-trust-r-full);
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-xs);
  font-weight: var(--fmstr-cmp-cl-privacy-data-trust-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cl-privacy-data-trust-space-5);
}

.fmstr-cmp-cl-privacy-data-trust__quote {
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-lg);
  line-height: var(--fmstr-cmp-cl-privacy-data-trust-lh-lg);
  font-weight: var(--fmstr-cmp-cl-privacy-data-trust-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-cl-privacy-data-trust-space-5);
}

.fmstr-cmp-cl-privacy-data-trust__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-cl-privacy-data-trust-space-5);
}

.fmstr-cmp-cl-privacy-data-trust__cite {
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-sm);
  line-height: var(--fmstr-cmp-cl-privacy-data-trust-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-cl-privacy-data-trust-space-3);
}

.fmstr-cmp-cl-privacy-data-trust__links {
  display: flex;
  gap: var(--fmstr-cmp-cl-privacy-data-trust-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-cl-privacy-data-trust__links a {
  color: var(--fmstr-cmp-cl-privacy-data-trust-fg-link);
  font-weight: var(--fmstr-cmp-cl-privacy-data-trust-fw-semibold);
  font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-sm);
  text-decoration: none;
}
.fmstr-cmp-cl-privacy-data-trust__links a:hover {
  color: var(--fmstr-cmp-cl-privacy-data-trust-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-cl-privacy-data-trust {
    padding: var(--fmstr-cmp-cl-privacy-data-trust-space-8) var(--fmstr-cmp-cl-privacy-data-trust-space-4);
  }
  .fmstr-cmp-cl-privacy-data-trust__container {
    padding: var(--fmstr-cmp-cl-privacy-data-trust-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-cl-privacy-data-trust__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-cl-privacy-data-trust-space-8);
  }
  .fmstr-cmp-cl-privacy-data-trust__heading {
    font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-2xl);
    line-height: var(--fmstr-cmp-cl-privacy-data-trust-lh-2xl);
  }
  .fmstr-cmp-cl-privacy-data-trust__quote {
    font-size: var(--fmstr-cmp-cl-privacy-data-trust-fs-md);
    line-height: var(--fmstr-cmp-cl-privacy-data-trust-lh-md);
  }
  .fmstr-cmp-cl-privacy-data-trust__card {
    padding: var(--fmstr-cmp-cl-privacy-data-trust-space-6);
  }
}

.fmstr-cmp-cl-more-ai-tools {
  --fmstr-cmp-cl-more-ai-tools-bg-card: #ffffff;
  --fmstr-cmp-cl-more-ai-tools-bg-tile: #f7f3ff;
  --fmstr-cmp-cl-more-ai-tools-bg-pill: #f4ebff;
  --fmstr-cmp-cl-more-ai-tools-fg-1: #101828;
  --fmstr-cmp-cl-more-ai-tools-fg-2: #475467;
  --fmstr-cmp-cl-more-ai-tools-fg-eyebrow: #6941c6;
  --fmstr-cmp-cl-more-ai-tools-violet-500: #7f56d9;
  --fmstr-cmp-cl-more-ai-tools-violet-600: #6941c6;
  --fmstr-cmp-cl-more-ai-tools-violet-700: #53389e;
  --fmstr-cmp-cl-more-ai-tools-border-light: #eaecf0;
  --fmstr-cmp-cl-more-ai-tools-border-violet: #9777e0;
  --fmstr-cmp-cl-more-ai-tools-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-cl-more-ai-tools-fs-xs: 12px;
  --fmstr-cmp-cl-more-ai-tools-fs-sm: 14px;
  --fmstr-cmp-cl-more-ai-tools-fs-md: 16px;
  --fmstr-cmp-cl-more-ai-tools-fs-lg: 18px;
  --fmstr-cmp-cl-more-ai-tools-fs-2xl: 24px;
  --fmstr-cmp-cl-more-ai-tools-fs-3xl: 36px;
  --fmstr-cmp-cl-more-ai-tools-lh-md: 24px;
  --fmstr-cmp-cl-more-ai-tools-lh-lg: 28px;
  --fmstr-cmp-cl-more-ai-tools-fw-semibold: 600;
  --fmstr-cmp-cl-more-ai-tools-fw-bold: 700;
  --fmstr-cmp-cl-more-ai-tools-space-1: 4px;
  --fmstr-cmp-cl-more-ai-tools-space-2: 8px;
  --fmstr-cmp-cl-more-ai-tools-space-3: 12px;
  --fmstr-cmp-cl-more-ai-tools-space-4: 16px;
  --fmstr-cmp-cl-more-ai-tools-space-5: 20px;
  --fmstr-cmp-cl-more-ai-tools-space-6: 24px;
  --fmstr-cmp-cl-more-ai-tools-space-7: 28px;
  --fmstr-cmp-cl-more-ai-tools-space-8: 32px;
  --fmstr-cmp-cl-more-ai-tools-space-12: 48px;
  --fmstr-cmp-cl-more-ai-tools-space-16: 64px;
  --fmstr-cmp-cl-more-ai-tools-r-lg: 8px;
  --fmstr-cmp-cl-more-ai-tools-r-2xl: 16px;
  --fmstr-cmp-cl-more-ai-tools-r-full: 9999px;
  padding: var(--fmstr-cmp-cl-more-ai-tools-space-16) var(--fmstr-cmp-cl-more-ai-tools-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-1);
}

.fmstr-cmp-cl-more-ai-tools *,
.fmstr-cmp-cl-more-ai-tools *::before,
.fmstr-cmp-cl-more-ai-tools *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cl-more-ai-tools__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-cl-more-ai-tools__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-cl-more-ai-tools-space-8);
  text-align: center;
}

.fmstr-cmp-cl-more-ai-tools__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-cl-more-ai-tools-space-1) var(--fmstr-cmp-cl-more-ai-tools-space-3);
  background: var(--fmstr-cmp-cl-more-ai-tools-bg-pill);
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-eyebrow);
  border-radius: var(--fmstr-cmp-cl-more-ai-tools-r-full);
  font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-xs);
  font-weight: var(--fmstr-cmp-cl-more-ai-tools-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cl-more-ai-tools-space-4);
}

.fmstr-cmp-cl-more-ai-tools__heading {
  font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-3xl);
  line-height: 1.15;
  font-weight: var(--fmstr-cmp-cl-more-ai-tools-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-1);
  margin: 0 0 var(--fmstr-cmp-cl-more-ai-tools-space-3);
}

.fmstr-cmp-cl-more-ai-tools__intro {
  font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-md);
  line-height: var(--fmstr-cmp-cl-more-ai-tools-lh-md);
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-2);
  margin: 0;
}

.fmstr-cmp-cl-more-ai-tools__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-cl-more-ai-tools-space-4);
}

.fmstr-cmp-cl-more-ai-tools__tile {
  background: var(--fmstr-cmp-cl-more-ai-tools-bg-card);
  border: 1px solid var(--fmstr-cmp-cl-more-ai-tools-border-light);
  border-radius: var(--fmstr-cmp-cl-more-ai-tools-r-2xl);
  padding: var(--fmstr-cmp-cl-more-ai-tools-space-6);
  text-decoration: none;
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-1);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-cl-more-ai-tools-space-3);
}
.fmstr-cmp-cl-more-ai-tools__tile:hover {
  border-color: var(--fmstr-cmp-cl-more-ai-tools-border-violet);
  box-shadow: var(--fmstr-cmp-cl-more-ai-tools-shadow-md);
  transform: translateY(-2px);
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-1);
}

.fmstr-cmp-cl-more-ai-tools__icon-tile {
  width: 40px;
  height: 40px;
  background: var(--fmstr-cmp-cl-more-ai-tools-bg-tile);
  color: var(--fmstr-cmp-cl-more-ai-tools-violet-600);
  border-radius: var(--fmstr-cmp-cl-more-ai-tools-r-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.fmstr-cmp-cl-more-ai-tools__tile-title {
  margin: 0;
  font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-md);
  line-height: var(--fmstr-cmp-cl-more-ai-tools-lh-md);
  font-weight: var(--fmstr-cmp-cl-more-ai-tools-fw-semibold);
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-1);
}

.fmstr-cmp-cl-more-ai-tools__tile-body {
  margin: 0;
  font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-cl-more-ai-tools-fg-2);
  flex-grow: 1;
}

.fmstr-cmp-cl-more-ai-tools__arrow {
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-cl-more-ai-tools-space-1);
  color: var(--fmstr-cmp-cl-more-ai-tools-violet-600);
  font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-sm);
  font-weight: var(--fmstr-cmp-cl-more-ai-tools-fw-semibold);
}
.fmstr-cmp-cl-more-ai-tools__tile:hover .fmstr-cmp-cl-more-ai-tools__arrow {
  color: var(--fmstr-cmp-cl-more-ai-tools-violet-700);
}

@media (max-width: 760px) {
  .fmstr-cmp-cl-more-ai-tools {
    padding: var(--fmstr-cmp-cl-more-ai-tools-space-12) var(--fmstr-cmp-cl-more-ai-tools-space-4);
  }
  .fmstr-cmp-cl-more-ai-tools__heading {
    font-size: var(--fmstr-cmp-cl-more-ai-tools-fs-2xl);
    line-height: 30px;
  }
  .fmstr-cmp-cl-more-ai-tools__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-cl-more-ai-tools__tile {
    padding: var(--fmstr-cmp-cl-more-ai-tools-space-5);
  }
}
@media (min-width: 761px) and (max-width: 1024px) {
  .fmstr-cmp-cl-more-ai-tools__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.fmstr-cmp-cl-related-resources {
  --fmstr-cmp-cl-related-resources-bg-section: #f9fafb;
  --fmstr-cmp-cl-related-resources-bg-card: #ffffff;
  --fmstr-cmp-cl-related-resources-fg-1: #101828;
  --fmstr-cmp-cl-related-resources-fg-2: #475467;
  --fmstr-cmp-cl-related-resources-violet-500: #7f56d9;
  --fmstr-cmp-cl-related-resources-violet-600: #6941c6;
  --fmstr-cmp-cl-related-resources-violet-700: #53389e;
  --fmstr-cmp-cl-related-resources-border-light: #eaecf0;
  --fmstr-cmp-cl-related-resources-border-violet: #9777e0;
  --fmstr-cmp-cl-related-resources-fs-sm: 14px;
  --fmstr-cmp-cl-related-resources-fs-md: 16px;
  --fmstr-cmp-cl-related-resources-fs-lg: 18px;
  --fmstr-cmp-cl-related-resources-fs-2xl: 24px;
  --fmstr-cmp-cl-related-resources-lh-md: 24px;
  --fmstr-cmp-cl-related-resources-lh-lg: 28px;
  --fmstr-cmp-cl-related-resources-fw-medium: 500;
  --fmstr-cmp-cl-related-resources-fw-semibold: 600;
  --fmstr-cmp-cl-related-resources-fw-bold: 700;
  --fmstr-cmp-cl-related-resources-space-2: 8px;
  --fmstr-cmp-cl-related-resources-space-3: 12px;
  --fmstr-cmp-cl-related-resources-space-4: 16px;
  --fmstr-cmp-cl-related-resources-space-5: 20px;
  --fmstr-cmp-cl-related-resources-space-6: 24px;
  --fmstr-cmp-cl-related-resources-space-8: 32px;
  --fmstr-cmp-cl-related-resources-space-12: 48px;
  --fmstr-cmp-cl-related-resources-space-16: 64px;
  --fmstr-cmp-cl-related-resources-r-md: 8px;
  --fmstr-cmp-cl-related-resources-r-lg: 12px;

  background: var(--fmstr-cmp-cl-related-resources-bg-section);
  padding: var(--fmstr-cmp-cl-related-resources-space-12) var(--fmstr-cmp-cl-related-resources-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-cl-related-resources-fg-1);
}

.fmstr-cmp-cl-related-resources *,
.fmstr-cmp-cl-related-resources *::before,
.fmstr-cmp-cl-related-resources *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cl-related-resources__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-cl-related-resources__heading {
  font-size: var(--fmstr-cmp-cl-related-resources-fs-2xl);
  line-height: 30px;
  font-weight: var(--fmstr-cmp-cl-related-resources-fw-semibold);
  letter-spacing: -0.015em;
  color: var(--fmstr-cmp-cl-related-resources-fg-1);
  margin: 0 0 var(--fmstr-cmp-cl-related-resources-space-6);
}

.fmstr-cmp-cl-related-resources__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fmstr-cmp-cl-related-resources-space-3);
}

.fmstr-cmp-cl-related-resources__link {
  background: var(--fmstr-cmp-cl-related-resources-bg-card);
  border: 1px solid var(--fmstr-cmp-cl-related-resources-border-light);
  border-radius: var(--fmstr-cmp-cl-related-resources-r-md);
  padding: var(--fmstr-cmp-cl-related-resources-space-3) var(--fmstr-cmp-cl-related-resources-space-5);
  text-decoration: none;
  color: var(--fmstr-cmp-cl-related-resources-fg-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fmstr-cmp-cl-related-resources-space-3);
  font-size: var(--fmstr-cmp-cl-related-resources-fs-sm);
  font-weight: var(--fmstr-cmp-cl-related-resources-fw-medium);
  line-height: 22px;
  transition:
    border-color 200ms ease,
    color 200ms ease;
  min-height: 56px;
}
.fmstr-cmp-cl-related-resources__link:hover {
  border-color: var(--fmstr-cmp-cl-related-resources-border-violet);
  color: var(--fmstr-cmp-cl-related-resources-violet-700);
}

.fmstr-cmp-cl-related-resources__arrow {
  flex-shrink: 0;
  color: var(--fmstr-cmp-cl-related-resources-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms ease;
}
.fmstr-cmp-cl-related-resources__link:hover .fmstr-cmp-cl-related-resources__arrow {
  transform: translateX(2px);
}

@media (max-width: 760px) {
  .fmstr-cmp-cl-related-resources {
    padding: var(--fmstr-cmp-cl-related-resources-space-8) var(--fmstr-cmp-cl-related-resources-space-4);
  }
  .fmstr-cmp-cl-related-resources__grid {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 761px) and (max-width: 1024px) {
  .fmstr-cmp-cl-related-resources__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
