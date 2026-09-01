<template>
  <div>
    <HeroV2
      :description="c0_description"
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

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-mlf-stats" aria-labelledby="fmstr-cmp-mlf-stats-heading">
            <div class="fmstr-cmp-mlf-stats__inner">
              <header class="fmstr-cmp-mlf-stats__header">
                <span class="fmstr-cmp-mlf-stats__eyebrow">Why this matters</span>
                <h2 id="fmstr-cmp-mlf-stats-heading" class="fmstr-cmp-mlf-stats__heading">
                  Localized forms collect more responses. Here's the research.
                </h2>
                <p class="fmstr-cmp-mlf-stats__lead">Two numbers do most of the work for the multilingual decision.</p>
              </header>

              <div class="fmstr-cmp-mlf-stats__grid">
                <div class="fmstr-cmp-mlf-stats__card">
                  <div class="fmstr-cmp-mlf-stats__num">+6 <small>pp</small></div>
                  <p class="fmstr-cmp-mlf-stats__label">Course completion rate after localization</p>
                  <p class="fmstr-cmp-mlf-stats__body">
                    A 90-day Articulate study found average course-completion rates rose from
                    <strong>77.4% to 83.4%</strong>, and median time-to-complete fell up to <strong>50%</strong>. Forms
                    behave the same way: when field labels read in the respondent's first language, abandonment drops at
                    the field that previously confused them.
                  </p>
                  <cite class="fmstr-cmp-mlf-stats__cite"
                    >Source: Articulate, "How Does Localization Impact Training Outcomes? A 90-Day Study"</cite
                  >
                </div>

                <div class="fmstr-cmp-mlf-stats__card">
                  <div class="fmstr-cmp-mlf-stats__num">49.6<small>%</small></div>
                  <p class="fmstr-cmp-mlf-stats__label">Share of online content in English</p>
                  <p class="fmstr-cmp-mlf-stats__body">
                    English is <strong>49.6% of online content</strong> but only ~17% of internet users are native
                    English speakers. Mandarin is 1.2% of the internet against 1.1B+ speakers; Arabic is &lt;0.5%
                    against 310M speakers. Every form you ship in English alone is a form half your audience is
                    rage-translating in their browser.
                  </p>
                  <cite class="fmstr-cmp-mlf-stats__cite">Source: LingoBright, Statista, 2026.</cite>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TrustSeals :title="c2_title" :logos="c2_logos" class="page-component-item" />

    <Trustbadges
      description="Top-rated on leading review platforms for ease of use, AI translation accuracy, and global-ready multilingual forms."
      :title="c3_title"
      :badges="c3_badges"
      class="page-component-item"
    />

    <ThreeColBenefits
      description="Break language barriers, increase form completions, and reach international audiences with AI-powered multilingual forms."
      :title="c4_title"
      :itemList="c4_itemList"
      class="page-component-item"
    />

    <FeatureShowcase steps :title="c5_title" :itemList="c5_itemList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-mlf-langs" aria-labelledby="fmstr-cmp-mlf-langs-heading">
            <div class="fmstr-cmp-mlf-langs__inner">
              <header class="fmstr-cmp-mlf-langs__header">
                <span class="fmstr-cmp-mlf-langs__eyebrow">Languages</span>
                <h2 id="fmstr-cmp-mlf-langs-heading" class="fmstr-cmp-mlf-langs__heading">
                  180+ languages. Including the ones that actually need extra work.
                </h2>
                <p class="fmstr-cmp-mlf-langs__lead">
                  Most form builders that say "we support multiple languages" mean Latin-script European languages. The
                  hard ones, right-to-left scripts, ideographic scripts, Indic scripts, are where translation tools fall
                  apart. Formester handles all four families.
                </p>
              </header>

              <div class="fmstr-cmp-mlf-langs__grid">
                <article class="fmstr-cmp-mlf-langs__card">
                  <div class="fmstr-cmp-mlf-langs__head">
                    <span class="fmstr-cmp-mlf-langs__icon" aria-hidden="true">
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
                        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
                      </svg>
                    </span>
                    European &amp; Latin (90+)
                  </div>
                  <div class="fmstr-cmp-mlf-langs__list">
                    Spanish · French · German · Italian · Portuguese · Dutch · Polish · Romanian · Czech · Swedish ·
                    Norwegian · Finnish · Danish · Greek · Turkish · Russian · Ukrainian · plus 70+ more.
                  </div>
                  <div class="fmstr-cmp-mlf-langs__note">
                    Latin, Cyrillic, and Greek scripts. Search by language name or country code.
                  </div>
                </article>

                <article class="fmstr-cmp-mlf-langs__card fmstr-cmp-mlf-langs__card--rtl">
                  <div class="fmstr-cmp-mlf-langs__head">
                    <span class="fmstr-cmp-mlf-langs__icon" aria-hidden="true">
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
                        <path d="M20 12H4M9 6l-6 6 6 6"></path>
                      </svg>
                    </span>
                    Right-to-left (4)
                  </div>
                  <div class="fmstr-cmp-mlf-langs__list">العربية · עברית · فارسی · اردو</div>
                  <div class="fmstr-cmp-mlf-langs__note" style="direction: ltr; text-align: left">
                    The form mirrors automatically: labels right-align, fields right-align, button order reverses,
                    validation icons flip. No manual CSS.
                  </div>
                </article>

                <article class="fmstr-cmp-mlf-langs__card">
                  <div class="fmstr-cmp-mlf-langs__head">
                    <span class="fmstr-cmp-mlf-langs__icon" aria-hidden="true">
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
                        <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                        <path d="M8 8h8M8 12h8M8 16h5"></path>
                      </svg>
                    </span>
                    CJK &amp; East Asian (8)
                  </div>
                  <div class="fmstr-cmp-mlf-langs__list">
                    中文 (简体) · 中文 (繁體) · 日本語 · 한국어 · Tiếng Việt · ไทย · Bahasa Indonesia · Bahasa Melayu
                  </div>
                  <div class="fmstr-cmp-mlf-langs__note">
                    Unicode-compatible fonts fall back automatically. IME-friendly input.
                  </div>
                </article>

                <article class="fmstr-cmp-mlf-langs__card">
                  <div class="fmstr-cmp-mlf-langs__head">
                    <span class="fmstr-cmp-mlf-langs__icon" aria-hidden="true">
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
                        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"></path>
                        <path d="M12 22V12M4 7l8 5 8-5"></path>
                      </svg>
                    </span>
                    Indic &amp; African (50+)
                  </div>
                  <div class="fmstr-cmp-mlf-langs__list">
                    हिन्दी · বাংলা · தமிழ் · తెలుగు · मराठी · ગુજરાતી · ਪੰਜਾਬੀ · ಕನ್ನಡ · മലയാളം · Kiswahili · isiZulu ·
                    አማርኛ · Hausa · Yorùbá · Igbo · plus 35+ more.
                  </div>
                  <div class="fmstr-cmp-mlf-langs__note">
                    Devanagari, Bengali, Tamil scripts render correctly out of the box. Top 15 African languages by
                    speaker count.
                  </div>
                </article>
              </div>

              <p class="fmstr-cmp-mlf-langs__verify">
                <strong>Verify before shipping:</strong> confirm RTL auto-mirroring and CJK font fallback with
                engineering. Soften any line that doesn't match production behavior.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-mlf-cmp" aria-labelledby="fmstr-cmp-mlf-cmp-heading">
            <div class="fmstr-cmp-mlf-cmp__inner">
              <header class="fmstr-cmp-mlf-cmp__header">
                <span class="fmstr-cmp-mlf-cmp__eyebrow">Comparison</span>
                <h2 id="fmstr-cmp-mlf-cmp-heading" class="fmstr-cmp-mlf-cmp__heading">
                  Formester vs Microsoft Forms vs Google Forms for multilingual
                </h2>
                <p class="fmstr-cmp-mlf-cmp__lead">
                  Microsoft Forms and Google Forms are where most multilingual-form searches start. Here's the honest
                  delta.
                </p>
              </header>

              <div class="fmstr-cmp-mlf-cmp__wrap">
                <table class="fmstr-cmp-mlf-cmp__table">
                  <thead>
                    <tr>
                      <th scope="col">Capability</th>
                      <th scope="col" class="is-us">Formester</th>
                      <th scope="col">Microsoft Forms</th>
                      <th scope="col">Google Forms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="row-label">Languages per form</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">180+</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__partial">Up to 11</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__no">None native (browser-translate only)</span></td>
                    </tr>
                    <tr>
                      <td class="row-label">AI-drafted translation</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">Yes (Google Gemini)</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__no">No, manual entry per language</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__no">No</span></td>
                    </tr>
                    <tr>
                      <td class="row-label">Edit AI draft per line</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">Yes</span></td>
                      <td>n/a (manual entry)</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td class="row-label">Right-to-left script handling</td>
                      <td class="is-us">
                        <span class="fmstr-cmp-mlf-cmp__yes">Automatic mirroring (Arabic, Hebrew, Persian, Urdu)</span>
                      </td>
                      <td><span class="fmstr-cmp-mlf-cmp__partial">Yes for supported subset</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__partial">Browser-dependent</span></td>
                    </tr>
                    <tr>
                      <td class="row-label">Respondent language picker on form</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">Yes</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__yes">Yes</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__no">No (browser only)</span></td>
                    </tr>
                    <tr>
                      <td class="row-label">Force language via URL or embed</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">Yes (?lang= and data-lang)</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__partial">Limited</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__no">No</span></td>
                    </tr>
                    <tr>
                      <td class="row-label">One submissions table for all languages</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">Yes, tagged by language</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__yes">Yes (consolidated)</span></td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td class="row-label">Free plan includes multilingual</td>
                      <td class="is-us"><span class="fmstr-cmp-mlf-cmp__yes">Yes</span></td>
                      <td><span class="fmstr-cmp-mlf-cmp__yes">Yes</span></td>
                      <td>n/a</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="fmstr-cmp-mlf-cmp__closing">
                Microsoft Forms hits an 11-language ceiling per form; Google Forms relies on the respondent's browser to
                translate. If a form has to ship in more than a handful of languages, or has to render in Arabic or
                Hebrew, the choice gets straightforward.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FeatureShowcase :steps="false" :title="c8_title" :itemList="c8_itemList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-mlf-uc" aria-labelledby="fmstr-cmp-mlf-uc-heading">
            <div class="fmstr-cmp-mlf-uc__inner">
              <header class="fmstr-cmp-mlf-uc__header">
                <span class="fmstr-cmp-mlf-uc__eyebrow">Where it ships</span>
                <h2 id="fmstr-cmp-mlf-uc-heading" class="fmstr-cmp-mlf-uc__heading">
                  Where teams ship multilingual forms
                </h2>
                <p class="fmstr-cmp-mlf-uc__lead">
                  Six teams, six concrete reasons to translate the form before sending it.
                </p>
              </header>

              <div class="fmstr-cmp-mlf-uc__grid">
                <article class="fmstr-cmp-mlf-uc__card">
                  <span class="fmstr-cmp-mlf-uc__icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 7h18M3 12h18M3 17h12"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-uc__title">E-commerce, checkout &amp; feedback</h3>
                  <p class="fmstr-cmp-mlf-uc__body">
                    A returns form in Spanish, French, and Portuguese cuts dispute escalations because the customer
                    reads the policy line in their first language before clicking submit.
                  </p>
                  <a href="https://formester.com/templates/customer-feedback-form-31840/" class="fmstr-cmp-mlf-uc__deep"
                    >Customer feedback template →</a
                  >
                </article>

                <article class="fmstr-cmp-mlf-uc__card">
                  <span class="fmstr-cmp-mlf-uc__icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-uc__title">Customer support, global ticket intake</h3>
                  <p class="fmstr-cmp-mlf-uc__body">
                    A support form in 8 languages routes the ticket to the right agent based on the language tag on
                    submission. No more "translate this and re-route" Slack threads.
                  </p>
                  <a href="https://formester.com/templates/categories/contact-forms/" class="fmstr-cmp-mlf-uc__deep"
                    >Contact-form templates →</a
                  >
                </article>

                <article class="fmstr-cmp-mlf-uc__card">
                  <span class="fmstr-cmp-mlf-uc__icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-uc__title">HR, engagement and onboarding</h3>
                  <p class="fmstr-cmp-mlf-uc__body">
                    Quarterly engagement surveys in the languages your team actually speaks. The Tokyo office answers in
                    Japanese; the Berlin office in German; the dashboard merges.
                  </p>
                  <a
                    href="https://formester.com/templates/employee-engagement-survey-template-17645/"
                    class="fmstr-cmp-mlf-uc__deep"
                    >Engagement-survey template →</a
                  >
                </article>

                <article class="fmstr-cmp-mlf-uc__card">
                  <span class="fmstr-cmp-mlf-uc__icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 3h18v4H3zM7 21V7M17 21V7M3 21h18"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-uc__title">Marketing, global campaigns</h3>
                  <p class="fmstr-cmp-mlf-uc__body">
                    A localized lead-gen form per market without rebuilding the form per market. UTM tracking and
                    HubSpot push work the same in every language.
                  </p>
                  <a href="https://formester.com/integrations/hubspot/" class="fmstr-cmp-mlf-uc__deep"
                    >HubSpot integration →</a
                  >
                </article>

                <article class="fmstr-cmp-mlf-uc__card">
                  <span class="fmstr-cmp-mlf-uc__icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                      <path d="M16 2v4M8 2v4M3 10h18"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-uc__title">Events, global registration</h3>
                  <p class="fmstr-cmp-mlf-uc__body">
                    Event registration in five languages, one form, one Stripe checkout, one attendee export. Add a
                    language the day the regional partner joins the event.
                  </p>
                  <a href="https://formester.com/templates/event-feedback-survey-698/" class="fmstr-cmp-mlf-uc__deep"
                    >Event-feedback template →</a
                  >
                </article>

                <article class="fmstr-cmp-mlf-uc__card">
                  <span class="fmstr-cmp-mlf-uc__icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-uc__title">Product research, international user studies</h3>
                  <p class="fmstr-cmp-mlf-uc__body">
                    Recruit-screener and post-test survey in the participant's first language. Mixed-language responses
                    sit in one table, ready for analysis.
                  </p>
                  <a href="https://formester.com/templates/market-research-survey-701/" class="fmstr-cmp-mlf-uc__deep"
                    >Market-research template →</a
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
          <section class="fmstr-cmp-mlf-privacy" aria-labelledby="fmstr-cmp-mlf-privacy-heading">
            <div class="fmstr-cmp-mlf-privacy__container">
              <div class="fmstr-cmp-mlf-privacy__inner">
                <div class="fmstr-cmp-mlf-privacy__text">
                  <span class="fmstr-cmp-mlf-privacy__eyebrow">Privacy and data</span>
                  <h2 id="fmstr-cmp-mlf-privacy-heading" class="fmstr-cmp-mlf-privacy__heading">
                    Your translations are yours. We don't train on them.
                  </h2>
                  <div class="fmstr-cmp-mlf-privacy__body">
                    <p>
                      The form copy you write, the AI-generated translations, and the responses respondents submit are
                      all Customer Data. Per Section 4.4 of our Data Processing Addendum, Formester does not use
                      Customer Data to train AI models, run advertising, run analytics, or feed marketing. The Google
                      Gemini integration that drafts the translations inherits the same boundary.
                    </p>
                    <p>
                      Your account is encrypted at rest, responses move over TLS, and payment data carries an additional
                      AES-256 layer through Stripe. We are GDPR, UK GDPR, and CCPA compliant, with EU-resident
                      processing available on the Business plan. We are not SOC 2, ISO 27001, or HIPAA certified yet,
                      and we say so on the security page rather than implying otherwise.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-mlf-privacy__card">
                  <span class="fmstr-cmp-mlf-privacy__pill">DPA §4.4 · January 2026</span>
                  <blockquote class="fmstr-cmp-mlf-privacy__quote">
                    "Formester shall not use Customer Data for purposes of analytics, advertising, marketing, or
                    training of artificial intelligence or machine learning models, except as strictly necessary to
                    provide the Services."
                  </blockquote>
                  <hr class="fmstr-cmp-mlf-privacy__divider" />
                  <p class="fmstr-cmp-mlf-privacy__cite">Formester Data Processing Addendum, effective January 2026.</p>
                  <div class="fmstr-cmp-mlf-privacy__links">
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
          <section class="fmstr-cmp-mlf-mcp" aria-labelledby="fmstr-cmp-mlf-mcp-heading">
            <div class="fmstr-cmp-mlf-mcp__inner">
              <header class="fmstr-cmp-mlf-mcp__header">
                <span class="fmstr-cmp-mlf-mcp__eyebrow">For builders</span>
                <h2 id="fmstr-cmp-mlf-mcp-heading" class="fmstr-cmp-mlf-mcp__heading">
                  Your multilingual form data, ready for the AI you already use
                </h2>
                <p class="fmstr-cmp-mlf-mcp__lead">
                  Multilingual forms produce richer datasets, same questions, ten language signals. Pull them into your
                  AI workflow without writing connectors.
                </p>
              </header>

              <div class="fmstr-cmp-mlf-mcp__grid">
                <article class="fmstr-cmp-mlf-mcp__card fmstr-cmp-mlf-mcp__card--mcp">
                  <span class="fmstr-cmp-mlf-mcp__badge">MCP server</span>
                  <div class="fmstr-cmp-mlf-mcp__chips">
                    <span class="fmstr-cmp-mlf-mcp__chip">Claude</span>
                    <span class="fmstr-cmp-mlf-mcp__chip">ChatGPT</span>
                    <span class="fmstr-cmp-mlf-mcp__chip">Custom agents</span>
                  </div>
                  <h3 class="fmstr-cmp-mlf-mcp__title">Ask your responses in plain English</h3>
                  <p class="fmstr-cmp-mlf-mcp__body">
                    Formester ships a Model Context Protocol server. Connect Claude or ChatGPT to your account in two
                    clicks and ask:
                    <em>"Show me the top three sentiment themes from Japanese respondents this quarter."</em> The MCP
                    server reads your submissions live and returns the answer with citations to the rows it used.
                  </p>
                  <a href="https://docs.formester.com/formester-mcp-server.html" class="fmstr-cmp-mlf-mcp__cta"
                    >Read the MCP docs →</a
                  >
                </article>

                <article class="fmstr-cmp-mlf-mcp__card fmstr-cmp-mlf-mcp__card--api">
                  <span class="fmstr-cmp-mlf-mcp__badge">REST API v2</span>
                  <div class="fmstr-cmp-mlf-mcp__chips">
                    <span class="fmstr-cmp-mlf-mcp__chip">Self-service token</span>
                    <span class="fmstr-cmp-mlf-mcp__chip">Org-level scope</span>
                    <span class="fmstr-cmp-mlf-mcp__chip">Business plan +</span>
                  </div>
                  <h3 class="fmstr-cmp-mlf-mcp__title">Filter responses by language at the source</h3>
                  <p class="fmstr-cmp-mlf-mcp__body">
                    Get an API token from <code>app.formester.com/api</code>, GET your submissions, filter by
                    <code>submission_language</code>. Pipe French responses to your French CSM, Japanese to the Tokyo
                    team, English to the rest. Per-language webhooks supported.
                  </p>
                  <a href="https://docs.formester.com/formester-api.html" class="fmstr-cmp-mlf-mcp__cta"
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
          <section class="fmstr-cmp-mlf-privacy" aria-labelledby="fmstr-cmp-mlf-privacy-heading">
            <div class="fmstr-cmp-mlf-privacy__container">
              <div class="fmstr-cmp-mlf-privacy__inner">
                <div class="fmstr-cmp-mlf-privacy__text">
                  <span class="fmstr-cmp-mlf-privacy__eyebrow">Privacy and data</span>
                  <h2 id="fmstr-cmp-mlf-privacy-heading" class="fmstr-cmp-mlf-privacy__heading">
                    Your translations are yours. We don't train on them.
                  </h2>
                  <div class="fmstr-cmp-mlf-privacy__body">
                    <p>
                      The form copy you write, the AI-generated translations, and the responses respondents submit are
                      all Customer Data. Per Section 4.4 of our Data Processing Addendum, Formester does not use
                      Customer Data to train AI models, run advertising, run analytics, or feed marketing. The Google
                      Gemini integration that drafts the translations inherits the same boundary.
                    </p>
                    <p>
                      Your account is encrypted at rest, responses move over TLS, and payment data carries an additional
                      AES-256 layer through Stripe. We are GDPR, UK GDPR, and CCPA compliant, with EU-resident
                      processing available on the Business plan. We are not SOC 2, ISO 27001, or HIPAA certified yet,
                      and we say so on the security page rather than implying otherwise.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-mlf-privacy__card">
                  <span class="fmstr-cmp-mlf-privacy__pill">DPA §4.4 · January 2026</span>
                  <blockquote class="fmstr-cmp-mlf-privacy__quote">
                    "Formester shall not use Customer Data for purposes of analytics, advertising, marketing, or
                    training of artificial intelligence or machine learning models, except as strictly necessary to
                    provide the Services."
                  </blockquote>
                  <hr class="fmstr-cmp-mlf-privacy__divider" />
                  <p class="fmstr-cmp-mlf-privacy__cite">Formester Data Processing Addendum, effective January 2026.</p>
                  <div class="fmstr-cmp-mlf-privacy__links">
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
          <section class="fmstr-cmp-mlf-related" aria-labelledby="fmstr-cmp-mlf-related-heading">
            <div class="fmstr-cmp-mlf-related__inner">
              <header class="fmstr-cmp-mlf-related__header">
                <span class="fmstr-cmp-mlf-related__eyebrow">Related</span>
                <h2 id="fmstr-cmp-mlf-related-heading" class="fmstr-cmp-mlf-related__heading">Related features</h2>
              </header>

              <div class="fmstr-cmp-mlf-related__grid">
                <a
                  href="https://formester.com/features/multi-language-form-translations/"
                  class="fmstr-cmp-mlf-related__row"
                >
                  <span class="fmstr-cmp-mlf-related__icon" aria-hidden="true">
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
                      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-mlf-related__label"
                    >Multi-language form translations (in-product reference)</span
                  >
                  <span class="fmstr-cmp-mlf-related__arrow" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://formester.com/features/conditional-logic/" class="fmstr-cmp-mlf-related__row">
                  <span class="fmstr-cmp-mlf-related__icon" aria-hidden="true">
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
                      <path d="M6 3v18M6 9h6a3 3 0 0 1 3 3v9M15 12l3-3 3 3"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-mlf-related__label">Conditional logic</span>
                  <span class="fmstr-cmp-mlf-related__arrow" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://formester.com/features/embed-forms/" class="fmstr-cmp-mlf-related__row">
                  <span class="fmstr-cmp-mlf-related__icon" aria-hidden="true">
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
                      <path d="m9 16-4-4 4-4M15 8l4 4-4 4"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-mlf-related__label">Embed forms anywhere</span>
                  <span class="fmstr-cmp-mlf-related__arrow" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://formester.com/features/qr-code-generator/" class="fmstr-cmp-mlf-related__row">
                  <span class="fmstr-cmp-mlf-related__icon" aria-hidden="true">
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
                      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                      <path d="M14 14h3v3M21 14v7M14 21h3"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-mlf-related__label">QR code generation</span>
                  <span class="fmstr-cmp-mlf-related__arrow" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://formester.com/features/branding-kit/" class="fmstr-cmp-mlf-related__row">
                  <span class="fmstr-cmp-mlf-related__icon" aria-hidden="true">
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
                      <path d="M12 2l2.4 6.9 7.3.3-5.8 4.4 2.1 7-6-4.2-6 4.2 2.1-7L2.3 9.2l7.3-.3z"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-mlf-related__label">Branding kit</span>
                  <span class="fmstr-cmp-mlf-related__arrow" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://formester.com/features/custom-css-forms/" class="fmstr-cmp-mlf-related__row">
                  <span class="fmstr-cmp-mlf-related__icon" aria-hidden="true">
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
                      <path d="m8 4-5 8 5 8M16 4l5 8-5 8M14 3l-4 18"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-mlf-related__label">Custom CSS</span>
                  <span class="fmstr-cmp-mlf-related__arrow" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>


              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TestimonialsV2
      description="Discover what our customers have to say about their experience with us!"
      version="home"
      :heading="c14_heading"
      :testimonials="c14_testimonials"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c15_ctaValue" class="page-component-item" />

    <FaqSection :title="c16_title" :faqList="c16_faqList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-mlf-more" aria-labelledby="fmstr-cmp-mlf-more-heading">
            <div class="fmstr-cmp-mlf-more__inner">
              <header class="fmstr-cmp-mlf-more__header">
                <span class="fmstr-cmp-mlf-more__eyebrow">Sister tools</span>
                <h2 id="fmstr-cmp-mlf-more-heading" class="fmstr-cmp-mlf-more__heading">
                  More AI tools from Formester
                </h2>
              </header>

              <div class="fmstr-cmp-mlf-more__grid">
                <a href="https://formester.com/ai-form-generator/" class="fmstr-cmp-mlf-more__tile">
                  <span class="fmstr-cmp-mlf-more__thumb" aria-hidden="true">
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
                      <path d="M3 3h18v4H3zM3 11h18v4H3zM3 19h12v2H3z"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-more__title">AI Form Generator</h3>
                  <p class="fmstr-cmp-mlf-more__body">Turn a prompt or PDF into a working form.</p>
                </a>

                <a href="https://formester.com/ai-survey-generator/" class="fmstr-cmp-mlf-more__tile">
                  <span class="fmstr-cmp-mlf-more__thumb" aria-hidden="true">
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
                      <path d="M9 2h6l3 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6l3-4z"></path>
                      <path d="M9 12h6M9 16h4"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-more__title">AI Survey Generator</h3>
                  <p class="fmstr-cmp-mlf-more__body">Draft a survey from a brief, ship it in any language.</p>
                </a>

                <a href="https://formester.com/ai-quiz-maker/" class="fmstr-cmp-mlf-more__tile">
                  <span class="fmstr-cmp-mlf-more__thumb" aria-hidden="true">
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
                      <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-more__title">AI Quiz Maker</h3>
                  <p class="fmstr-cmp-mlf-more__body">Auto-score multiple-choice and outcome quizzes.</p>
                </a>

                <a href="https://formester.com/build-conditional-logic-forms-with-ai/" class="fmstr-cmp-mlf-more__tile">
                  <span class="fmstr-cmp-mlf-more__thumb" aria-hidden="true">
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
                      <path d="M6 3v18M6 9h6a3 3 0 0 1 3 3v9M15 12l3-3 3 3"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-mlf-more__title">Conditional Logic with AI</h3>
                  <p class="fmstr-cmp-mlf-more__body">
                    Build branching forms by describing the rules in plain English.
                  </p>
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
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  "Write your form once. Formester drafts the translation with Google Gemini, you edit any line that doesn't sound right, and respondents pick their language at the top of the form. No separate forms per country. No copy-paste between Google Translate tabs."
const c0_mockupHtml =
  "<div style='position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(15,14,26,.18);background:#0f0921;'><iframe src='https://www.youtube-nocookie.com/embed/2F31_RqtFI0?rel=0' title='Create a multilingual form with Formester &#8212; 90-second walkthrough' style='position:absolute;inset:0;width:100%;height:100%;border:0;' loading='lazy' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen referrerpolicy='strict-origin-when-cross-origin'></iframe></div>"
const c0_title = [
  {
    id: 4979,
    text: 'How to create a form in ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4978,
    text: '180+ languages',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 4980,
    text: ', in under three minutes',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1653,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get started',
    type: 'Primary',
    showArrow: true,
  },
]
const c0_badge = {
  id: 134,
  text: 'AI Multilingual Forms',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c2_title = []
const c2_logos = []
const c3_title = [
  {
    id: 4972,
    text: 'Trusted by 56,000+ Businesses Creating Forms Worldwide',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c3_badges = []
const c4_title = [
  {
    id: 4973,
    text: 'Why teams ship multilingual forms instead of separate forms per country',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c4_itemList = [
  {
    id: 2543,
    title: 'Reach a Global Audience',
    description:
      'English is 49.6% of online content but only ~17% of internet users are native English speakers. Every form you ship in English alone is a form half your audience is rage-translating in their browser. Multilingual forms close that gap on the first impression',
    description_markdown:
      'English is 49.6% of online content but only ~17% of internet users are native English speakers. Every form you ship in English alone is a form half your audience is rage-translating in their browser. Multilingual forms close that gap on the first impression',
    icon: null,
    cardImage: {
      id: 4164,
      imageAlt: 'Simplify Form Creation',
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
    id: 2544,
    title: "Lift completion rates by serving the user's first language",
    description:
      "A 90-day Articulate study found localized course completion rose from 77.4% to 83.4%, with median time-to-complete falling up to 50%. Forms behave the same way. When the field labels read in the respondent's first language, abandonment drops at the question that previously confused them.",
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4163,
      imageAlt: 'Budget-Friendly Solution',
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
  {
    id: 2547,
    title: 'Save Time with AI Translation',
    description:
      "AI drafts the translation as soon as you click the language. You read it, fix the line that doesn't sound right, publish. No translator agency RFP. No copy-paste between tabs. The edit step stays in the form builder where you already work.\n",
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4165,
      imageAlt: 'Scale at Large',
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
    id: 2545,
    title: 'Test a new market without rebuilding the form',
    description:
      "Add Spanish on Monday for a Mexico City pilot. Add Japanese on Wednesday when the Tokyo team picks it up. Same form, same submissions table, same dashboard. Kill a language with one click if the test doesn't land.",
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4166,
      imageAlt: 'wallet icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2131,
        name: 'robust-analytics.svg',
        alternativeText: 'wallet icon',
        caption: 'wallet icon',
        width: 69,
        height: 68,
        formats: null,
        hash: 'robust_analytics_1cdd4f000c',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.69,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_1cdd4f000c.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-30T07:55:34.886Z',
        updatedAt: '2025-01-20T09:58:59.456Z',
      },
    },
  },
  {
    id: 2542,
    title: 'Work Better as a Team',
    description:
      'Your French marketer reviews the French copy. Your Japanese CSM checks the Japanese. Comments and edits live in the form builder so the original author sees what changed and why. No Slack-thread of corrections.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4167,
      imageAlt: 'users icon',
      imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/users_5ce268193d.svg',
      width: null,
      height: null,
      image: null,
    },
  },
  {
    id: 2546,
    title: 'Improve User Experience',
    description:
      'A two-tap language switcher sits at the top of the form. The respondent never sees an English placeholder behind a translated label. Form fields, error messages, button labels, and the thank-you page all flip together.',
    description_markdown: null,
    icon: null,
    cardImage: {
      id: 4168,
      imageAlt: 'connected icon',
      imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/connected_cefd076a47.svg',
      width: null,
      height: null,
      image: null,
    },
  },
]
const c5_title = [
  {
    id: 4974,
    text: 'How to create a multilingual form in 4 steps with Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c5_itemList = [
  {
    id: 2536,
    title: 'Step 1: Open your form and click "Add languages"',
    description:
      "In your form's settings, the Languages tab lives next to Notifications. Click it and pick the languages you want to support. The tab is available on the Free plan, no upgrade needed to test the feature.",
    description_markdown:
      'Start by opening your form\'s advanced settings. Look for the **"Multi-Language"** option under **“Form Control”**',
    icon: null,
    cardImage: {
      id: 4156,
      imageAlt: 'a screenshot of formester translate with ai feature',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2582,
        name: 'Component 959.svg',
        alternativeText: 'a screenshot of formester translate with ai feature',
        caption: 'a screenshot of formester translate with ai feature',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_959_526700c3e7',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 110.54,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_959_526700c3e7.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-12-11T03:46:13.855Z',
        updatedAt: '2024-12-11T03:52:05.520Z',
      },
    },
  },
  {
    id: 2541,
    title: 'Step 2: Pick languages from the 180+ list',
    description:
      'Search by language name or country (Mandarin, 中文, Chinese, China — all match). Select as many as you need. There is no per-language fee. Right-to-left scripts (Arabic, Hebrew, Persian, Urdu) and CJK scripts (Chinese, Japanese, Korean) appear in the same list and pick up the correct text direction automatically.',
    description_markdown:
      'Choose the languages you want to add to your form. Add as many as you need to reach your audience.',
    icon: null,
    cardImage: {
      id: 4157,
      imageAlt: 'a screenshot of formester translate with ai feature',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2579,
        name: 'Component 957.svg',
        alternativeText: 'a screenshot of formester translate with ai feature',
        caption: 'a screenshot of formester translate with ai feature',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_957_44cd05d8bd',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 117.89,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_957_44cd05d8bd.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-12-11T03:46:13.016Z',
        updatedAt: '2024-12-11T03:51:58.488Z',
      },
    },
  },
  {
    id: 2539,
    title: 'Step 3: AI drafts the copy, you edit any line',
    description:
      'Formester sends your form text to Google Gemini and brings back drafts for every label, placeholder, error message, and button — including the thank-you page. Click any line to edit. The original English never disappears, so the next time you change a label, only the changed line needs re-checking.',
    description_markdown:
      'Click **“Translate with AI”** to let the AI **[translate your form into the languages](/features/multi-language-form-translations/)** you picked.',
    icon: null,
    cardImage: {
      id: 4158,
      imageAlt: 'a screenshot of formester translate with ai feature',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2578,
        name: 'Component 958.svg',
        alternativeText: 'a screenshot of formester translate with ai feature',
        caption: 'a screenshot of formester translate with ai feature',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_958_6bcfa0cab5',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 111.4,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_958_6bcfa0cab5.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-12-11T03:46:12.960Z',
        updatedAt: '2024-12-11T03:51:52.090Z',
      },
    },
  },
  {
    id: 2540,
    title: 'Step 4: Publish — the language picker goes live with the form',
    description:
      'Save the form and the language picker appears at the top of every share surface — public link, embed, popup, sidebar, side tab, popover, fullscreen, and QR-code download. Responses come back in one submissions table tagged by language, so you can filter, export, and analyze without merging spreadsheets.',
    description_markdown: 'Save and publish your multilingual form instantly.',
    icon: null,
    cardImage: {
      id: 4162,
      imageAlt: 'a screenshot of formester publish ui',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2581,
        name: 'Component 956.svg',
        alternativeText: 'a screenshot of formester publish ui',
        caption: 'a screenshot of formester publish ui',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_956_417b5a8bea',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 170.46,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_956_417b5a8bea.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-12-11T03:46:13.258Z',
        updatedAt: '2024-12-11T03:51:33.009Z',
      },
    },
  },
]
const c8_title = [
  {
    id: 4976,
    text: 'Built into the same form, not bolted on',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c8_itemList = [
  {
    id: 2537,
    title: 'Offline Forms',
    description:
      'Let users fill out forms even without an **[internet connection](/features/offline-forms/)**. Perfect for events, remote locations, or fieldwork.\n\nResponses sync automatically once online, preventing data loss.',
    description_markdown:
      'Let users fill out forms even without an **[internet connection](/features/offline-forms/)**. Perfect for events, remote locations, or fieldwork.\n\nResponses sync automatically once online, preventing data loss.',
    icon: null,
    cardImage: {
      id: 4159,
      imageAlt: 'a screenshot of formester offline form feature',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1671,
        name: 'offiline-forms-hero-illustration.svg',
        alternativeText: 'a screenshot of formester offline form feature',
        caption: 'a screenshot of formester offline form feature',
        width: 484,
        height: 433,
        formats: null,
        hash: 'offiline_forms_hero_illustration_d85eb96a5d',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 51.3,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/offiline_forms_hero_illustration_d85eb96a5d.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T07:23:06.410Z',
        updatedAt: '2024-12-11T03:47:51.376Z',
      },
    },
  },
  {
    id: 2538,
    title: 'QR Code Generation',
    description:
      'Easily **[generate a unique QR code](/features/qr-code-generator/)** for your forms. Share it digitally or print it for offline distribution. \n\nUsers scan the QR code to access forms in their language, improving participation.',
    description_markdown:
      'Easily **[generate a unique QR code](/features/qr-code-generator/)** for your forms. Share it digitally or print it for offline distribution. \n\nUsers scan the QR code to access forms in their language, improving participation.',
    icon: null,
    cardImage: {
      id: 4160,
      imageAlt: 'a screenshot of sharing a custom qr code in formester',
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
  {
    id: 2535,
    title: 'Multi-User Collaboration',
    description:
      'Work seamlessly with your team on form creation, translation, and management. Assign roles, track changes, and ensure multilingual forms are consistent and accurate. Collaboration has never been easier, even across global teams.',
    description_markdown:
      '**[Collaborate seamlessly with your team](/features/collaborative-forms/)** on form creation, translation, and management. Assign roles, track changes, and ensure multilingual forms are consistent and accurate. \n\nSeamlessly collaborate with global teams on multilingual forms.',
    icon: null,
    cardImage: {
      id: 4161,
      imageAlt: 'a screenshot of formester multi user collaboration',
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
]
const c14_heading = [
  {
    id: 4975,
    text: 'Testimonials',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c14_testimonials = [
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
]
const c15_ctaValue = {
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
const c16_title = [
  {
    id: 4977,
    text: 'Frequently asked questions',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c16_faqList = [
  {
    id: 2561,
    header: 'What are multilingual forms?',
    body: 'Multilingual forms are online forms that allow users to view and complete the form in their preferred language. Instead of creating separate forms for each language, one form can support multiple languages using AI translation.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2562,
    header: 'How do multilingual forms work in Formester?',
    body: 'You create your form in one primary language, select additional languages, and enable AI auto-translation. The system translates your form fields, labels, and messages instantly. Users can then switch to their preferred language while filling out the form.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2563,
    header: 'How accurate is the AI translation?',
    body: 'AI translation provides high-quality, context-aware translations for most use cases. You can review and edit any translated text to match your tone, industry terminology, or local preferences before publishing.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2566,
    header: 'Can I add multiple languages to one form?',
    body: 'Yes. You can add multiple languages to a single form. Users can select their preferred language from a language switcher, making the form accessible to a wider audience.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2567,
    header: 'Will translation change my form design or layout?',
    body: 'No. Translation only affects text content such as labels, placeholders, and messages. Your layout, branding, and styling remain unchanged across all languages.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2564,
    header: 'Do multilingual forms work on mobile devices?',
    body: 'Yes. Multilingual forms are fully responsive and work on desktops, tablets, and mobile devices. Users can switch languages easily on any screen size.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2565,
    header: 'How do I share a multilingual form?',
    body: 'You can share your multilingual form using a direct link, embed it on your website, or distribute it via email and social media. Users can choose their language after opening the form.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2568,
    header: 'Can my team manage multilingual forms together?',
    body: 'Yes. You can invite team members to edit, review, and manage translations. This helps maintain consistency across languages and ensures accurate messaging for global audiences.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2569,
    header: "What's the difference between multilingual forms and one form per language?",
    body: 'Multilingual forms are a single form with translations attached. The respondent picks their language and the labels, placeholders, errors, and thank-you page flip together. One submissions table holds all responses, tagged by the language the respondent chose. One form per language means N copies of the form to maintain, N edits every time you change a question, and N submissions tables to merge before reporting.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2570,
    header: 'How long does it take to translate a form?',
    body: 'AI drafts every label, placeholder, validation message, and button as soon as you select a language. For a typical contact or feedback form (10–15 fields), the draft is ready in 5–10 seconds per language. You then edit any line that needs a tone fix. Two-language forms ship in under three minutes end to end; ten-language forms in under fifteen.\n',
    body_markdown: null,
    list: [],
  },
  {
    id: 2571,
    header: "Can I edit the AI translation after it's generated?",
    body: "Yes. Every translated line is editable. Click into any field on the translated language and overwrite the AI draft. The original English stays as the source of truth, so the next time you change a label, only the changed line needs re-checking. Translations you've edited are not overwritten by re-runs.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2574,
    header: 'What language does the respondent see first when they open the form?',
    body: 'The form opens in the default language you set (usually the language the form was authored in). A language switcher sits at the top of the form so the respondent can switch to their preferred language with one tap. Browser-detection-based defaults are on the roadmap for now, you can also pre-select a language via a URL parameter (e.g., ?lang=es) for emails sent to a specific country segment.\n',
    body_markdown: null,
    list: [],
  },
  {
    id: 2572,
    header: 'What languages are supported?',
    body: '180+ languages, including all major European languages (Spanish, French, German, Italian, Portuguese, Dutch, Polish, Swedish), CJK (Chinese simplified and traditional, Japanese, Korean), right-to-left scripts (Arabic, Hebrew, Persian, Urdu), Indic (Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati), Southeast Asian (Thai, Vietnamese, Indonesian, Malay, Tagalog), and African languages (Swahili, Zulu, Amharic). Search by language name or country code to find one quickly.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2573,
    header: "Why isn't browser translation enough?",
    body: " Right-clicking and letting Chrome translate the page works for reading but breaks form submission. Field validation messages stay in English. Required-field errors don't translate. Placeholder text often translates inconsistently. The submission lands in your dashboard with the field names mangled. A purpose-built multilingual form keeps validation, errors, and submission integrity intact in every language.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2575,
    header: 'Is this on the Free plan?',
    body: 'Yes. AI translation, language picker, and respondent-language tagging are on the Free plan (unlimited forms, unlimited responses). Branding removal and conditional logic move you to Personal at $13/mo. API access and PDF exports are on Business at $49/mo. See pricing for details.',
    body_markdown: null,
    list: [],
  },
]

useHead({
  title: 'Build AI-powered Multilingual Forms in 180+ Language',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/ai-powered-multilingual-forms/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-13T04:48:53.929Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Create one form, ship it in 180+ languages. AI drafts the translation in seconds, you edit any line, respondents pick their language at the top of the form. Works with right-to-left scripts and CJK.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Build AI-powered Multilingual Forms in 180+ Language',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/ai-powered-multilingual-forms/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Build AI-powered Multilingual Forms in 180+ Language',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Create one form, ship it in 180+ languages. AI drafts the translation in seconds, you edit any line, respondents pick their language at the top of the form. Works with right-to-left scripts and CJK.',
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
      content: 'https://formester.com/ai-powered-multilingual-forms/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Build AI-powered Multilingual Forms in 180+ Language',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Create one form, ship it in 180+ languages. AI drafts the translation in seconds, you edit any line, respondents pick their language at the top of the form. Works with right-to-left scripts and CJK.',
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
        'multi language form',
        'forms multilingual\t',
        'multilingual forms',
        'ai form builder',
        'ai auto translation',
        'ai translation',
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
        email: 'support@formester.com',
        sameAs: [
          'https://www.linkedin.com/company/formester-inc/',
          'https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ',
          'https://www.instagram.com/_formester_?utm_medium=copy_link',
          'https://www.facebook.com/formester',
          'https://x.com/_Formester_?t=-m1pNwXvxR6KOf9kfPi9lQ&s=09',
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
            addressCountry: 'USA',
          },
        ],
      },
      {
        '@id': 'https://formester.com/#website',
        url: 'https://formester.com/',
        name: 'Formester',
        '@type': 'WebSite',
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
      },
      {
        '@id': 'https://formester.com/ai-powered-multilingual-forms/#webpage',
        url: 'https://formester.com/ai-powered-multilingual-forms/',
        name: 'AI-Powered Multilingual Forms',
        '@type': 'WebPage',
        about: {
          '@id': 'https://formester.com/ai-powered-multilingual-forms/#product',
        },
        isPartOf: {
          '@id': 'https://formester.com/#website',
        },
      },
      {
        '@id': 'https://formester.com/ai-powered-multilingual-forms/#product',
        url: 'https://formester.com/ai-powered-multilingual-forms/',
        name: 'Formester Multilingual Forms',
        '@type': 'SoftwareApplication',
        offers: {
          url: 'https://formester.com/pricing/',
          '@type': 'Offer',
          price: '13',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '13',
            unitText: 'MONTH',
            priceCurrency: 'USD',
          },
        },
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
        description:
          'AI-powered multilingual forms that allow businesses to translate forms into 180+ languages and let users complete forms in their preferred language.',
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
        '@id': 'https://formester.com/ai-powered-multilingual-forms/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'What are multilingual forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Multilingual forms are online forms that allow users to view and complete the form in their preferred language. Instead of creating separate forms for each language, one form can support multiple languages using AI translation.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do multilingual forms work in Formester?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You create your form in one primary language, select additional languages, and enable AI auto-translation. The system translates your form fields, labels, and messages instantly. Users can switch to their preferred language while filling out the form.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How accurate is the AI translation?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'AI translation provides high-quality, context-aware translations for most use cases. You can review and edit translated text to match your tone, industry terminology, or local preferences before publishing.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I add multiple languages to one form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You can add multiple languages to a single form. Users can select their preferred language from a language switcher, making the form accessible to a wider audience.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Will translation change my form design or layout?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'No. Translation only affects text content such as labels, placeholders, and messages. Your layout, branding, and styling remain unchanged across all languages.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Do multilingual forms work on mobile devices?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Multilingual forms are fully responsive and work on desktops, tablets, and mobile devices. Users can switch languages easily on any screen size.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I share a multilingual form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You can share your multilingual form using a direct link, embed it on your website, or distribute it via email and social media. Users can choose their language after opening the form.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can my team manage multilingual forms together?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You can invite team members to edit, review, and manage translations. This helps maintain consistency across languages and ensures accurate messaging for global audiences.',
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.fmstr-cmp-mlf-stats {
  --fmstr-cmp-mlf-stats-bg-primary: #fafafb;
  --fmstr-cmp-mlf-stats-bg-card: #ffffff;
  --fmstr-cmp-mlf-stats-fg-1: #101828;
  --fmstr-cmp-mlf-stats-fg-2: #344054;
  --fmstr-cmp-mlf-stats-fg-3: #475467;
  --fmstr-cmp-mlf-stats-fg-4: #8b93a7;
  --fmstr-cmp-mlf-stats-violet-100: #f4ebff;
  --fmstr-cmp-mlf-stats-violet-600: #6941c6;
  --fmstr-cmp-mlf-stats-border: #eaecf0;
  --fmstr-cmp-mlf-stats-fs-xs: 12px;
  --fmstr-cmp-mlf-stats-fs-sm: 14px;
  --fmstr-cmp-mlf-stats-fs-md: 16px;
  --fmstr-cmp-mlf-stats-fs-lg: 18px;
  --fmstr-cmp-mlf-stats-fs-2xl: 24px;
  --fmstr-cmp-mlf-stats-fs-3xl: 36px;
  --fmstr-cmp-mlf-stats-fs-display: 56px;
  --fmstr-cmp-mlf-stats-fw-semibold: 600;
  --fmstr-cmp-mlf-stats-fw-bold: 700;
  --fmstr-cmp-mlf-stats-fw-extrabold: 800;
  --fmstr-cmp-mlf-stats-space-1: 4px;
  --fmstr-cmp-mlf-stats-space-2: 8px;
  --fmstr-cmp-mlf-stats-space-3: 12px;
  --fmstr-cmp-mlf-stats-space-4: 16px;
  --fmstr-cmp-mlf-stats-space-5: 20px;
  --fmstr-cmp-mlf-stats-space-6: 24px;
  --fmstr-cmp-mlf-stats-space-8: 32px;
  --fmstr-cmp-mlf-stats-space-9: 36px;
  --fmstr-cmp-mlf-stats-space-12: 48px;
  --fmstr-cmp-mlf-stats-space-16: 64px;
  --fmstr-cmp-mlf-stats-space-20: 80px;
  --fmstr-cmp-mlf-stats-r-full: 9999px;
  --fmstr-cmp-mlf-stats-r-lg: 20px;

  background: var(--fmstr-cmp-mlf-stats-bg-primary);
  padding: var(--fmstr-cmp-mlf-stats-space-20) var(--fmstr-cmp-mlf-stats-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-stats *,
.fmstr-cmp-mlf-stats *::before,
.fmstr-cmp-mlf-stats *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-stats__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-stats__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-mlf-stats__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-stats-space-1) var(--fmstr-cmp-mlf-stats-space-3);
  background: var(--fmstr-cmp-mlf-stats-violet-100);
  color: var(--fmstr-cmp-mlf-stats-violet-600);
  border-radius: var(--fmstr-cmp-mlf-stats-r-full);
  font-size: var(--fmstr-cmp-mlf-stats-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-stats-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-stats-space-4);
}

.fmstr-cmp-mlf-stats__heading {
  font-size: var(--fmstr-cmp-mlf-stats-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-stats-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-stats-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-stats-space-3);
  max-width: 760px;
}

.fmstr-cmp-mlf-stats__lead {
  font-size: var(--fmstr-cmp-mlf-stats-fs-lg);
  line-height: 1.55;
  color: var(--fmstr-cmp-mlf-stats-fg-3);
  margin: 0 0 var(--fmstr-cmp-mlf-stats-space-9);
}

.fmstr-cmp-mlf-stats__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--fmstr-cmp-mlf-stats-space-6);
}

.fmstr-cmp-mlf-stats__card {
  background: var(--fmstr-cmp-mlf-stats-bg-card);
  border: 1px solid var(--fmstr-cmp-mlf-stats-border);
  border-radius: var(--fmstr-cmp-mlf-stats-r-lg);
  padding: var(--fmstr-cmp-mlf-stats-space-8);
}

.fmstr-cmp-mlf-stats__num {
  font-size: var(--fmstr-cmp-mlf-stats-fs-display);
  font-weight: var(--fmstr-cmp-mlf-stats-fw-extrabold);
  color: var(--fmstr-cmp-mlf-stats-violet-600);
  letter-spacing: -0.02em;
  margin: 0 0 var(--fmstr-cmp-mlf-stats-space-1);
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
}
.fmstr-cmp-mlf-stats__num small {
  font-size: var(--fmstr-cmp-mlf-stats-fs-2xl);
  color: var(--fmstr-cmp-mlf-stats-violet-600);
  font-weight: var(--fmstr-cmp-mlf-stats-fw-bold);
}

.fmstr-cmp-mlf-stats__label {
  font-size: var(--fmstr-cmp-mlf-stats-fs-sm);
  color: var(--fmstr-cmp-mlf-stats-fg-3);
  margin: 0 0 var(--fmstr-cmp-mlf-stats-space-3);
}

.fmstr-cmp-mlf-stats__body {
  font-size: var(--fmstr-cmp-mlf-stats-fs-md);
  line-height: 1.6;
  color: var(--fmstr-cmp-mlf-stats-fg-2);
  margin: 0;
}
.fmstr-cmp-mlf-stats__body strong {
  color: var(--fmstr-cmp-mlf-stats-fg-1);
  font-weight: var(--fmstr-cmp-mlf-stats-fw-semibold);
}

.fmstr-cmp-mlf-stats__cite {
  display: block;
  margin-top: var(--fmstr-cmp-mlf-stats-space-4);
  font-size: var(--fmstr-cmp-mlf-stats-fs-xs);
  color: var(--fmstr-cmp-mlf-stats-fg-4);
  font-style: normal;
}

@media (max-width: 760px) {
  .fmstr-cmp-mlf-stats {
    padding: var(--fmstr-cmp-mlf-stats-space-12) var(--fmstr-cmp-mlf-stats-space-4);
  }
  .fmstr-cmp-mlf-stats__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-stats__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-mlf-stats__num {
    font-size: 44px;
  }
  .fmstr-cmp-mlf-stats__card {
    padding: var(--fmstr-cmp-mlf-stats-space-6);
  }
}

.fmstr-cmp-mlf-langs {
  --fmstr-cmp-mlf-langs-bg-primary: #fafafb;
  --fmstr-cmp-mlf-langs-bg-card: #ffffff;
  --fmstr-cmp-mlf-langs-fg-1: #101828;
  --fmstr-cmp-mlf-langs-fg-2: #344054;
  --fmstr-cmp-mlf-langs-fg-3: #475467;
  --fmstr-cmp-mlf-langs-fg-4: #8b93a7;
  --fmstr-cmp-mlf-langs-violet-100: #f4ebff;
  --fmstr-cmp-mlf-langs-violet-600: #6941c6;
  --fmstr-cmp-mlf-langs-border: #eaecf0;
  --fmstr-cmp-mlf-langs-fs-xs: 12px;
  --fmstr-cmp-mlf-langs-fs-sm: 13px;
  --fmstr-cmp-mlf-langs-fs-md: 14px;
  --fmstr-cmp-mlf-langs-fs-lg: 16px;
  --fmstr-cmp-mlf-langs-fs-xl: 18px;
  --fmstr-cmp-mlf-langs-fs-3xl: 36px;
  --fmstr-cmp-mlf-langs-fw-medium: 500;
  --fmstr-cmp-mlf-langs-fw-semibold: 600;
  --fmstr-cmp-mlf-langs-fw-bold: 700;
  --fmstr-cmp-mlf-langs-fw-extrabold: 800;
  --fmstr-cmp-mlf-langs-space-1: 4px;
  --fmstr-cmp-mlf-langs-space-2: 8px;
  --fmstr-cmp-mlf-langs-space-3: 12px;
  --fmstr-cmp-mlf-langs-space-4: 16px;
  --fmstr-cmp-mlf-langs-space-5: 20px;
  --fmstr-cmp-mlf-langs-space-6: 24px;
  --fmstr-cmp-mlf-langs-space-7: 28px;
  --fmstr-cmp-mlf-langs-space-8: 32px;
  --fmstr-cmp-mlf-langs-space-12: 48px;
  --fmstr-cmp-mlf-langs-space-20: 80px;
  --fmstr-cmp-mlf-langs-r-md: 10px;
  --fmstr-cmp-mlf-langs-r-xl: 20px;
  --fmstr-cmp-mlf-langs-r-full: 9999px;

  background: var(--fmstr-cmp-mlf-langs-bg-primary);
  padding: var(--fmstr-cmp-mlf-langs-space-20) var(--fmstr-cmp-mlf-langs-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-langs *,
.fmstr-cmp-mlf-langs *::before,
.fmstr-cmp-mlf-langs *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-langs__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-langs__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-mlf-langs__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-langs-space-1) var(--fmstr-cmp-mlf-langs-space-3);
  background: var(--fmstr-cmp-mlf-langs-violet-100);
  color: var(--fmstr-cmp-mlf-langs-violet-600);
  border-radius: var(--fmstr-cmp-mlf-langs-r-full);
  font-size: var(--fmstr-cmp-mlf-langs-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-langs-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-langs-space-4);
}

.fmstr-cmp-mlf-langs__heading {
  font-size: var(--fmstr-cmp-mlf-langs-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-langs-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-langs-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-langs-space-3);
  max-width: 820px;
}

.fmstr-cmp-mlf-langs__lead {
  font-size: var(--fmstr-cmp-mlf-langs-fs-xl);
  line-height: 1.55;
  color: var(--fmstr-cmp-mlf-langs-fg-3);
  margin: 0 0 var(--fmstr-cmp-mlf-langs-space-8);
}

.fmstr-cmp-mlf-langs__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-mlf-langs-space-5);
}

.fmstr-cmp-mlf-langs__card {
  background: var(--fmstr-cmp-mlf-langs-bg-card);
  border: 1px solid var(--fmstr-cmp-mlf-langs-border);
  border-radius: var(--fmstr-cmp-mlf-langs-r-xl);
  padding: var(--fmstr-cmp-mlf-langs-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-mlf-langs-space-3);
}

.fmstr-cmp-mlf-langs__head {
  display: flex;
  align-items: center;
  gap: var(--fmstr-cmp-mlf-langs-space-3);
  font-weight: var(--fmstr-cmp-mlf-langs-fw-bold);
  color: var(--fmstr-cmp-mlf-langs-fg-1);
  font-size: var(--fmstr-cmp-mlf-langs-fs-lg);
}

.fmstr-cmp-mlf-langs__icon {
  width: 36px;
  height: 36px;
  border-radius: var(--fmstr-cmp-mlf-langs-r-md);
  background: var(--fmstr-cmp-mlf-langs-violet-100);
  color: var(--fmstr-cmp-mlf-langs-violet-600);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-mlf-langs__list {
  color: var(--fmstr-cmp-mlf-langs-fg-2);
  font-size: var(--fmstr-cmp-mlf-langs-fs-md);
  line-height: 1.7;
}
.fmstr-cmp-mlf-langs__card--rtl .fmstr-cmp-mlf-langs__list {
  direction: rtl;
  text-align: right;
}

.fmstr-cmp-mlf-langs__note {
  font-size: var(--fmstr-cmp-mlf-langs-fs-sm);
  color: var(--fmstr-cmp-mlf-langs-fg-3);
  margin-top: auto;
  padding-top: var(--fmstr-cmp-mlf-langs-space-2);
  border-top: 1px dashed var(--fmstr-cmp-mlf-langs-border);
}

.fmstr-cmp-mlf-langs__verify {
  margin-top: var(--fmstr-cmp-mlf-langs-space-5);
  font-size: var(--fmstr-cmp-mlf-langs-fs-sm);
  color: var(--fmstr-cmp-mlf-langs-fg-4);
}
.fmstr-cmp-mlf-langs__verify strong {
  color: var(--fmstr-cmp-mlf-langs-fg-3);
  font-weight: var(--fmstr-cmp-mlf-langs-fw-semibold);
}

@media (max-width: 1080px) {
  .fmstr-cmp-mlf-langs__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .fmstr-cmp-mlf-langs {
    padding: var(--fmstr-cmp-mlf-langs-space-12) var(--fmstr-cmp-mlf-langs-space-4);
  }
  .fmstr-cmp-mlf-langs__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-langs__lead {
    font-size: var(--fmstr-cmp-mlf-langs-fs-lg);
  }
  .fmstr-cmp-mlf-langs__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-mlf-cmp {
  --fmstr-cmp-mlf-cmp-bg-row-label: #fafafb;
  --fmstr-cmp-mlf-cmp-bg-us-col: #fbf9ff;
  --fmstr-cmp-mlf-cmp-fg-1: #101828;
  --fmstr-cmp-mlf-cmp-fg-2: #344054;
  --fmstr-cmp-mlf-cmp-fg-3: #475467;
  --fmstr-cmp-mlf-cmp-violet-100: #f4ebff;
  --fmstr-cmp-mlf-cmp-violet-200: #e9d7fe;
  --fmstr-cmp-mlf-cmp-violet-600: #6941c6;
  --fmstr-cmp-mlf-cmp-violet-700: #5925dc;
  --fmstr-cmp-mlf-cmp-border: #eaecf0;
  --fmstr-cmp-mlf-cmp-yes: #11602f;
  --fmstr-cmp-mlf-cmp-no: #9b1e2b;
  --fmstr-cmp-mlf-cmp-partial: #793008;
  --fmstr-cmp-mlf-cmp-fs-xs: 12px;
  --fmstr-cmp-mlf-cmp-fs-sm: 14px;
  --fmstr-cmp-mlf-cmp-fs-md: 15px;
  --fmstr-cmp-mlf-cmp-fs-xl: 18px;
  --fmstr-cmp-mlf-cmp-fs-3xl: 36px;
  --fmstr-cmp-mlf-cmp-fw-medium: 500;
  --fmstr-cmp-mlf-cmp-fw-semibold: 600;
  --fmstr-cmp-mlf-cmp-fw-bold: 700;
  --fmstr-cmp-mlf-cmp-fw-extrabold: 800;
  --fmstr-cmp-mlf-cmp-space-1: 4px;
  --fmstr-cmp-mlf-cmp-space-2: 8px;
  --fmstr-cmp-mlf-cmp-space-3: 12px;
  --fmstr-cmp-mlf-cmp-space-4: 16px;
  --fmstr-cmp-mlf-cmp-space-5: 20px;
  --fmstr-cmp-mlf-cmp-space-6: 24px;
  --fmstr-cmp-mlf-cmp-space-8: 32px;
  --fmstr-cmp-mlf-cmp-space-9: 36px;
  --fmstr-cmp-mlf-cmp-space-12: 48px;
  --fmstr-cmp-mlf-cmp-space-20: 80px;
  --fmstr-cmp-mlf-cmp-r-xl: 20px;
  --fmstr-cmp-mlf-cmp-r-full: 9999px;
  padding: var(--fmstr-cmp-mlf-cmp-space-20) var(--fmstr-cmp-mlf-cmp-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-cmp *,
.fmstr-cmp-mlf-cmp *::before,
.fmstr-cmp-mlf-cmp *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-cmp__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-cmp__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-mlf-cmp__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-cmp-space-1) var(--fmstr-cmp-mlf-cmp-space-3);
  background: var(--fmstr-cmp-mlf-cmp-violet-100);
  color: var(--fmstr-cmp-mlf-cmp-violet-600);
  border-radius: var(--fmstr-cmp-mlf-cmp-r-full);
  font-size: var(--fmstr-cmp-mlf-cmp-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-cmp-space-4);
}

.fmstr-cmp-mlf-cmp__heading {
  font-size: var(--fmstr-cmp-mlf-cmp-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-cmp-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-cmp-space-3);
}

.fmstr-cmp-mlf-cmp__lead {
  font-size: var(--fmstr-cmp-mlf-cmp-fs-xl);
  line-height: 1.55;
  color: var(--fmstr-cmp-mlf-cmp-fg-3);
  margin: 0 0 var(--fmstr-cmp-mlf-cmp-space-9);
}

.fmstr-cmp-mlf-cmp__wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.fmstr-cmp-mlf-cmp__table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--fmstr-cmp-mlf-cmp-border);
  border-radius: var(--fmstr-cmp-mlf-cmp-r-xl);
  overflow: hidden;
  background: var(--fmstr-cmp-mlf-cmp-bg-primary);
  font-size: var(--fmstr-cmp-mlf-cmp-fs-md);
  min-width: 720px;
}

.fmstr-cmp-mlf-cmp__table th,
.fmstr-cmp-mlf-cmp__table td {
  padding: var(--fmstr-cmp-mlf-cmp-space-4) var(--fmstr-cmp-mlf-cmp-space-5);
  text-align: left;
  vertical-align: top;
  color: var(--fmstr-cmp-mlf-cmp-fg-2);
}

.fmstr-cmp-mlf-cmp__table thead th {
  background: var(--fmstr-cmp-mlf-cmp-violet-100);
  color: var(--fmstr-cmp-mlf-cmp-violet-700);
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-bold);
  font-size: var(--fmstr-cmp-mlf-cmp-fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 1px solid var(--fmstr-cmp-mlf-cmp-violet-200);
}
.fmstr-cmp-mlf-cmp__table thead th.is-us {
  background: var(--fmstr-cmp-mlf-cmp-violet-600);
  color: #ffffff;
}

.fmstr-cmp-mlf-cmp__table tbody tr + tr td {
  border-top: 1px solid var(--fmstr-cmp-mlf-cmp-border);
}

.fmstr-cmp-mlf-cmp__table .row-label {
  color: var(--fmstr-cmp-mlf-cmp-fg-1);
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-semibold);
  background: var(--fmstr-cmp-mlf-cmp-bg-row-label);
  width: 28%;
}
.fmstr-cmp-mlf-cmp__table td.is-us {
  background: var(--fmstr-cmp-mlf-cmp-bg-us-col);
}

.fmstr-cmp-mlf-cmp__yes {
  color: var(--fmstr-cmp-mlf-cmp-yes);
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-semibold);
}
.fmstr-cmp-mlf-cmp__no {
  color: var(--fmstr-cmp-mlf-cmp-no);
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-semibold);
}
.fmstr-cmp-mlf-cmp__partial {
  color: var(--fmstr-cmp-mlf-cmp-partial);
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-semibold);
}

.fmstr-cmp-mlf-cmp__closing {
  margin-top: var(--fmstr-cmp-mlf-cmp-space-5);
  color: var(--fmstr-cmp-mlf-cmp-fg-3);
  font-size: var(--fmstr-cmp-mlf-cmp-fs-sm);
  line-height: 1.6;
}
.fmstr-cmp-mlf-cmp__closing a {
  color: var(--fmstr-cmp-mlf-cmp-violet-700);
  text-decoration: none;
  font-weight: var(--fmstr-cmp-mlf-cmp-fw-semibold);
}
.fmstr-cmp-mlf-cmp__closing a:hover {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-mlf-cmp {
    padding: var(--fmstr-cmp-mlf-cmp-space-12) var(--fmstr-cmp-mlf-cmp-space-4);
  }
  .fmstr-cmp-mlf-cmp__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-cmp__lead {
    font-size: var(--fmstr-cmp-mlf-cmp-fs-md);
  }
}

.fmstr-cmp-mlf-uc {
  --fmstr-cmp-mlf-uc-bg-primary: #fafafb;
  --fmstr-cmp-mlf-uc-bg-card: #ffffff;
  --fmstr-cmp-mlf-uc-fg-1: #101828;
  --fmstr-cmp-mlf-uc-fg-2: #344054;
  --fmstr-cmp-mlf-uc-fg-3: #475467;
  --fmstr-cmp-mlf-uc-violet-100: #f4ebff;
  --fmstr-cmp-mlf-uc-violet-200: #e9d7fe;
  --fmstr-cmp-mlf-uc-violet-600: #6941c6;
  --fmstr-cmp-mlf-uc-violet-700: #5925dc;
  --fmstr-cmp-mlf-uc-border: #eaecf0;
  --fmstr-cmp-mlf-uc-fs-xs: 12px;
  --fmstr-cmp-mlf-uc-fs-sm: 13px;
  --fmstr-cmp-mlf-uc-fs-md: 14px;
  --fmstr-cmp-mlf-uc-fs-lg: 18px;
  --fmstr-cmp-mlf-uc-fs-xl: 18px;
  --fmstr-cmp-mlf-uc-fs-3xl: 36px;
  --fmstr-cmp-mlf-uc-fw-medium: 500;
  --fmstr-cmp-mlf-uc-fw-semibold: 600;
  --fmstr-cmp-mlf-uc-fw-bold: 700;
  --fmstr-cmp-mlf-uc-fw-extrabold: 800;
  --fmstr-cmp-mlf-uc-space-1: 4px;
  --fmstr-cmp-mlf-uc-space-2: 8px;
  --fmstr-cmp-mlf-uc-space-3: 12px;
  --fmstr-cmp-mlf-uc-space-4: 16px;
  --fmstr-cmp-mlf-uc-space-5: 20px;
  --fmstr-cmp-mlf-uc-space-6: 24px;
  --fmstr-cmp-mlf-uc-space-7: 28px;
  --fmstr-cmp-mlf-uc-space-8: 32px;
  --fmstr-cmp-mlf-uc-space-12: 48px;
  --fmstr-cmp-mlf-uc-space-20: 80px;
  --fmstr-cmp-mlf-uc-r-md: 12px;
  --fmstr-cmp-mlf-uc-r-xl: 20px;
  --fmstr-cmp-mlf-uc-r-full: 9999px;

  background: var(--fmstr-cmp-mlf-uc-bg-primary);
  padding: var(--fmstr-cmp-mlf-uc-space-20) var(--fmstr-cmp-mlf-uc-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-uc *,
.fmstr-cmp-mlf-uc *::before,
.fmstr-cmp-mlf-uc *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-uc__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-uc__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-mlf-uc-space-8);
  text-align: center;
}

.fmstr-cmp-mlf-uc__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-uc-space-1) var(--fmstr-cmp-mlf-uc-space-3);
  background: var(--fmstr-cmp-mlf-uc-violet-100);
  color: var(--fmstr-cmp-mlf-uc-violet-600);
  border-radius: var(--fmstr-cmp-mlf-uc-r-full);
  font-size: var(--fmstr-cmp-mlf-uc-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-uc-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-uc-space-4);
}

.fmstr-cmp-mlf-uc__heading {
  font-size: var(--fmstr-cmp-mlf-uc-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-uc-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-uc-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-uc-space-3);
}

.fmstr-cmp-mlf-uc__lead {
  font-size: var(--fmstr-cmp-mlf-uc-fs-xl);
  line-height: 1.55;
  color: var(--fmstr-cmp-mlf-uc-fg-3);
  margin: 0;
}

.fmstr-cmp-mlf-uc__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fmstr-cmp-mlf-uc-space-6);
}

.fmstr-cmp-mlf-uc__card {
  background: var(--fmstr-cmp-mlf-uc-bg-card);
  border: 1px solid var(--fmstr-cmp-mlf-uc-border);
  border-radius: var(--fmstr-cmp-mlf-uc-r-xl);
  padding: var(--fmstr-cmp-mlf-uc-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-mlf-uc-space-3);
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
}
.fmstr-cmp-mlf-uc__card:hover {
  border-color: var(--fmstr-cmp-mlf-uc-violet-200);
  transform: translateY(-2px);
}

.fmstr-cmp-mlf-uc__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--fmstr-cmp-mlf-uc-r-md);
  background: var(--fmstr-cmp-mlf-uc-violet-100);
  color: var(--fmstr-cmp-mlf-uc-violet-600);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-mlf-uc__title {
  font-size: var(--fmstr-cmp-mlf-uc-fs-lg);
  line-height: 1.35;
  font-weight: var(--fmstr-cmp-mlf-uc-fw-bold);
  color: var(--fmstr-cmp-mlf-uc-fg-1);
  margin: 0;
  letter-spacing: -0.01em;
}

.fmstr-cmp-mlf-uc__body {
  font-size: var(--fmstr-cmp-mlf-uc-fs-md);
  line-height: 1.6;
  color: var(--fmstr-cmp-mlf-uc-fg-3);
  margin: 0;
}

.fmstr-cmp-mlf-uc__deep {
  margin-top: auto;
  font-size: var(--fmstr-cmp-mlf-uc-fs-sm);
  color: var(--fmstr-cmp-mlf-uc-violet-700);
  font-weight: var(--fmstr-cmp-mlf-uc-fw-semibold);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-mlf-uc-space-1);
}
.fmstr-cmp-mlf-uc__deep:hover {
  text-decoration: underline;
}

@media (max-width: 980px) {
  .fmstr-cmp-mlf-uc__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .fmstr-cmp-mlf-uc {
    padding: var(--fmstr-cmp-mlf-uc-space-12) var(--fmstr-cmp-mlf-uc-space-4);
  }
  .fmstr-cmp-mlf-uc__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-uc__lead {
    font-size: var(--fmstr-cmp-mlf-uc-fs-md);
  }
  .fmstr-cmp-mlf-uc__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-mlf-privacy {
  --fmstr-cmp-mlf-privacy-bg-section: #0f0921;
  --fmstr-cmp-mlf-privacy-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-mlf-privacy-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-mlf-privacy-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-mlf-privacy-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-mlf-privacy-fg-eyebrow: #bda6ff;
  --fmstr-cmp-mlf-privacy-fg-link: #d9c7ff;
  --fmstr-cmp-mlf-privacy-fg-link-hover: #ffffff;
  --fmstr-cmp-mlf-privacy-fs-xs: 12px;
  --fmstr-cmp-mlf-privacy-fs-sm: 14px;
  --fmstr-cmp-mlf-privacy-fs-md: 16px;
  --fmstr-cmp-mlf-privacy-fs-lg: 18px;
  --fmstr-cmp-mlf-privacy-fs-2xl: 24px;
  --fmstr-cmp-mlf-privacy-fs-3xl: 32px;
  --fmstr-cmp-mlf-privacy-fw-semibold: 600;
  --fmstr-cmp-mlf-privacy-fw-bold: 700;
  --fmstr-cmp-mlf-privacy-lh-md: 24px;
  --fmstr-cmp-mlf-privacy-lh-lg: 28px;
  --fmstr-cmp-mlf-privacy-lh-2xl: 32px;
  --fmstr-cmp-mlf-privacy-space-2: 8px;
  --fmstr-cmp-mlf-privacy-space-3: 12px;
  --fmstr-cmp-mlf-privacy-space-4: 16px;
  --fmstr-cmp-mlf-privacy-space-5: 20px;
  --fmstr-cmp-mlf-privacy-space-6: 24px;
  --fmstr-cmp-mlf-privacy-space-7: 28px;
  --fmstr-cmp-mlf-privacy-space-8: 32px;
  --fmstr-cmp-mlf-privacy-space-12: 48px;
  --fmstr-cmp-mlf-privacy-r-2xl: 16px;
  --fmstr-cmp-mlf-privacy-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-mlf-privacy-space-12) var(--fmstr-cmp-mlf-privacy-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-privacy *,
.fmstr-cmp-mlf-privacy *::before,
.fmstr-cmp-mlf-privacy *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-privacy__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-mlf-privacy-bg-section);
  background-image: var(--fmstr-cmp-mlf-privacy-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-mlf-privacy-space-12);
  overflow: hidden;
}

.fmstr-cmp-mlf-privacy__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-mlf-privacy-space-12);
  align-items: center;
}

.fmstr-cmp-mlf-privacy__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-privacy-space-2) var(--fmstr-cmp-mlf-privacy-space-4);
  background: var(--fmstr-cmp-mlf-privacy-bg-pill);
  color: var(--fmstr-cmp-mlf-privacy-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-mlf-privacy-r-full);
  font-size: var(--fmstr-cmp-mlf-privacy-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-privacy-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-privacy-space-5);
}

.fmstr-cmp-mlf-privacy__heading {
  font-size: var(--fmstr-cmp-mlf-privacy-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-mlf-privacy-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-mlf-privacy-space-6);
}

.fmstr-cmp-mlf-privacy__body p {
  font-size: var(--fmstr-cmp-mlf-privacy-fs-md);
  line-height: var(--fmstr-cmp-mlf-privacy-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-mlf-privacy-space-4);
}
.fmstr-cmp-mlf-privacy__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-mlf-privacy__card {
  background-color: var(--fmstr-cmp-mlf-privacy-bg-card);
  background-image: var(--fmstr-cmp-mlf-privacy-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-mlf-privacy-r-2xl);
  padding: var(--fmstr-cmp-mlf-privacy-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-mlf-privacy__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-privacy-space-2) var(--fmstr-cmp-mlf-privacy-space-4);
  background: var(--fmstr-cmp-mlf-privacy-bg-pill);
  color: var(--fmstr-cmp-mlf-privacy-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-mlf-privacy-r-full);
  font-size: var(--fmstr-cmp-mlf-privacy-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-privacy-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-privacy-space-5);
}

.fmstr-cmp-mlf-privacy__quote {
  font-size: var(--fmstr-cmp-mlf-privacy-fs-lg);
  line-height: var(--fmstr-cmp-mlf-privacy-lh-lg);
  font-weight: var(--fmstr-cmp-mlf-privacy-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-mlf-privacy-space-5);
}

.fmstr-cmp-mlf-privacy__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-mlf-privacy-space-5);
}

.fmstr-cmp-mlf-privacy__cite {
  font-size: var(--fmstr-cmp-mlf-privacy-fs-sm);
  line-height: var(--fmstr-cmp-mlf-privacy-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-mlf-privacy-space-3);
}

.fmstr-cmp-mlf-privacy__links {
  display: flex;
  gap: var(--fmstr-cmp-mlf-privacy-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-mlf-privacy__links a {
  color: var(--fmstr-cmp-mlf-privacy-fg-link);
  font-weight: var(--fmstr-cmp-mlf-privacy-fw-semibold);
  font-size: var(--fmstr-cmp-mlf-privacy-fs-sm);
  text-decoration: none;
}
.fmstr-cmp-mlf-privacy__links a:hover {
  color: var(--fmstr-cmp-mlf-privacy-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-mlf-privacy {
    padding: var(--fmstr-cmp-mlf-privacy-space-8) var(--fmstr-cmp-mlf-privacy-space-4);
  }
  .fmstr-cmp-mlf-privacy__container {
    padding: var(--fmstr-cmp-mlf-privacy-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-mlf-privacy__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-mlf-privacy-space-8);
  }
  .fmstr-cmp-mlf-privacy__heading {
    font-size: var(--fmstr-cmp-mlf-privacy-fs-2xl);
    line-height: var(--fmstr-cmp-mlf-privacy-lh-2xl);
  }
  .fmstr-cmp-mlf-privacy__quote {
    font-size: var(--fmstr-cmp-mlf-privacy-fs-md);
    line-height: var(--fmstr-cmp-mlf-privacy-lh-md);
  }
  .fmstr-cmp-mlf-privacy__card {
    padding: var(--fmstr-cmp-mlf-privacy-space-6);
  }
}

.fmstr-cmp-mlf-mcp {
  --fmstr-cmp-mlf-mcp-bg-card: linear-gradient(180deg, #ffffff 0%, #fafafb 100%);
  --fmstr-cmp-mlf-mcp-bg-chip: #f4f4f7;
  --fmstr-cmp-mlf-mcp-fg-1: #101828;
  --fmstr-cmp-mlf-mcp-fg-2: #344054;
  --fmstr-cmp-mlf-mcp-fg-3: #475467;
  --fmstr-cmp-mlf-mcp-violet-100: #f4ebff;
  --fmstr-cmp-mlf-mcp-violet-600: #6941c6;
  --fmstr-cmp-mlf-mcp-violet-700: #5925dc;
  --fmstr-cmp-mlf-mcp-ink: #101828;
  --fmstr-cmp-mlf-mcp-border: #eaecf0;
  --fmstr-cmp-mlf-mcp-border-2: #d0d5dd;
  --fmstr-cmp-mlf-mcp-fs-xs: 11px;
  --fmstr-cmp-mlf-mcp-fs-sm: 12px;
  --fmstr-cmp-mlf-mcp-fs-md: 14px;
  --fmstr-cmp-mlf-mcp-fs-lg: 15px;
  --fmstr-cmp-mlf-mcp-fs-xl: 18px;
  --fmstr-cmp-mlf-mcp-fs-2xl: 22px;
  --fmstr-cmp-mlf-mcp-fs-3xl: 36px;
  --fmstr-cmp-mlf-mcp-fw-medium: 500;
  --fmstr-cmp-mlf-mcp-fw-semibold: 600;
  --fmstr-cmp-mlf-mcp-fw-bold: 700;
  --fmstr-cmp-mlf-mcp-fw-extrabold: 800;
  --fmstr-cmp-mlf-mcp-space-1: 4px;
  --fmstr-cmp-mlf-mcp-space-2: 8px;
  --fmstr-cmp-mlf-mcp-space-3: 12px;
  --fmstr-cmp-mlf-mcp-space-4: 16px;
  --fmstr-cmp-mlf-mcp-space-5: 20px;
  --fmstr-cmp-mlf-mcp-space-6: 24px;
  --fmstr-cmp-mlf-mcp-space-7: 28px;
  --fmstr-cmp-mlf-mcp-space-8: 32px;
  --fmstr-cmp-mlf-mcp-space-9: 36px;
  --fmstr-cmp-mlf-mcp-space-12: 48px;
  --fmstr-cmp-mlf-mcp-space-20: 80px;
  --fmstr-cmp-mlf-mcp-r-md: 8px;
  --fmstr-cmp-mlf-mcp-r-2xl: 28px;
  --fmstr-cmp-mlf-mcp-r-full: 9999px;
  padding: var(--fmstr-cmp-mlf-mcp-space-20) var(--fmstr-cmp-mlf-mcp-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-mcp *,
.fmstr-cmp-mlf-mcp *::before,
.fmstr-cmp-mlf-mcp *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-mcp__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-mcp__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-mlf-mcp__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-mcp-space-1) var(--fmstr-cmp-mlf-mcp-space-3);
  background: var(--fmstr-cmp-mlf-mcp-violet-100);
  color: var(--fmstr-cmp-mlf-mcp-violet-600);
  border-radius: var(--fmstr-cmp-mlf-mcp-r-full);
  font-size: var(--fmstr-cmp-mlf-mcp-fs-sm);
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-mcp-space-4);
}

.fmstr-cmp-mlf-mcp__heading {
  font-size: var(--fmstr-cmp-mlf-mcp-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-mcp-space-3);
  max-width: 820px;
}

.fmstr-cmp-mlf-mcp__lead {
  font-size: var(--fmstr-cmp-mlf-mcp-fs-xl);
  line-height: 1.55;
  color: var(--fmstr-cmp-mlf-mcp-fg-3);
  margin: 0 0 var(--fmstr-cmp-mlf-mcp-space-9);
}

.fmstr-cmp-mlf-mcp__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--fmstr-cmp-mlf-mcp-space-6);
}

.fmstr-cmp-mlf-mcp__card {
  position: relative;
  padding: var(--fmstr-cmp-mlf-mcp-space-8);
  border-radius: var(--fmstr-cmp-mlf-mcp-r-2xl);
  background: var(--fmstr-cmp-mlf-mcp-bg-card);
  border: 1px solid var(--fmstr-cmp-mlf-mcp-border-2);
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-mlf-mcp-space-3);
}

.fmstr-cmp-mlf-mcp__badge {
  position: absolute;
  top: var(--fmstr-cmp-mlf-mcp-space-7);
  right: var(--fmstr-cmp-mlf-mcp-space-7);
  padding: var(--fmstr-cmp-mlf-mcp-space-1) var(--fmstr-cmp-mlf-mcp-space-3);
  border-radius: var(--fmstr-cmp-mlf-mcp-r-full);
  font-size: var(--fmstr-cmp-mlf-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.fmstr-cmp-mlf-mcp__card--mcp .fmstr-cmp-mlf-mcp__badge {
  background: var(--fmstr-cmp-mlf-mcp-violet-600);
  color: #ffffff;
}
.fmstr-cmp-mlf-mcp__card--api .fmstr-cmp-mlf-mcp__badge {
  background: var(--fmstr-cmp-mlf-mcp-ink);
  color: #ffffff;
}

.fmstr-cmp-mlf-mcp__chips {
  display: flex;
  gap: var(--fmstr-cmp-mlf-mcp-space-2);
  flex-wrap: wrap;
  max-width: 70%;
}

.fmstr-cmp-mlf-mcp__chip {
  padding: var(--fmstr-cmp-mlf-mcp-space-1) var(--fmstr-cmp-mlf-mcp-space-3);
  background: var(--fmstr-cmp-mlf-mcp-bg-chip);
  border: 1px solid var(--fmstr-cmp-mlf-mcp-border);
  color: var(--fmstr-cmp-mlf-mcp-fg-2);
  border-radius: var(--fmstr-cmp-mlf-mcp-r-full);
  font-size: var(--fmstr-cmp-mlf-mcp-fs-sm);
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-medium);
}

.fmstr-cmp-mlf-mcp__title {
  font-size: var(--fmstr-cmp-mlf-mcp-fs-2xl);
  line-height: 1.3;
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-bold);
  color: var(--fmstr-cmp-mlf-mcp-fg-1);
  margin: 0;
  letter-spacing: -0.01em;
}

.fmstr-cmp-mlf-mcp__body {
  font-size: var(--fmstr-cmp-mlf-mcp-fs-lg);
  line-height: 1.6;
  color: var(--fmstr-cmp-mlf-mcp-fg-2);
  margin: 0;
}
.fmstr-cmp-mlf-mcp__body em {
  color: var(--fmstr-cmp-mlf-mcp-fg-1);
  font-style: italic;
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-medium);
}
.fmstr-cmp-mlf-mcp__body code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background: var(--fmstr-cmp-mlf-mcp-bg-chip);
  border: 1px solid var(--fmstr-cmp-mlf-mcp-border);
  border-radius: var(--fmstr-cmp-mlf-mcp-r-md);
  padding: 1px 6px;
  font-size: 0.92em;
  color: var(--fmstr-cmp-mlf-mcp-fg-1);
}

.fmstr-cmp-mlf-mcp__cta {
  margin-top: auto;
  font-weight: var(--fmstr-cmp-mlf-mcp-fw-semibold);
  color: var(--fmstr-cmp-mlf-mcp-violet-700);
  text-decoration: none;
  font-size: var(--fmstr-cmp-mlf-mcp-fs-lg);
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-mlf-mcp-space-1);
}
.fmstr-cmp-mlf-mcp__cta:hover {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-mlf-mcp {
    padding: var(--fmstr-cmp-mlf-mcp-space-12) var(--fmstr-cmp-mlf-mcp-space-4);
  }
  .fmstr-cmp-mlf-mcp__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-mcp__lead {
    font-size: var(--fmstr-cmp-mlf-mcp-fs-md);
  }
  .fmstr-cmp-mlf-mcp__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-mlf-mcp__card {
    padding: var(--fmstr-cmp-mlf-mcp-space-6);
  }
  .fmstr-cmp-mlf-mcp__badge {
    top: var(--fmstr-cmp-mlf-mcp-space-5);
    right: var(--fmstr-cmp-mlf-mcp-space-5);
  }
}

.fmstr-cmp-mlf-related {
  --fmstr-cmp-mlf-related-bg-card: #ffffff;
  --fmstr-cmp-mlf-related-fg-1: #101828;
  --fmstr-cmp-mlf-related-fg-2: #344054;
  --fmstr-cmp-mlf-related-fg-3: #475467;
  --fmstr-cmp-mlf-related-fg-4: #8b93a7;
  --fmstr-cmp-mlf-related-violet-100: #f4ebff;
  --fmstr-cmp-mlf-related-violet-200: #e9d7fe;
  --fmstr-cmp-mlf-related-violet-600: #6941c6;
  --fmstr-cmp-mlf-related-border: #eaecf0;
  --fmstr-cmp-mlf-related-fs-xs: 12px;
  --fmstr-cmp-mlf-related-fs-sm: 14px;
  --fmstr-cmp-mlf-related-fs-3xl: 36px;
  --fmstr-cmp-mlf-related-fw-medium: 500;
  --fmstr-cmp-mlf-related-fw-semibold: 600;
  --fmstr-cmp-mlf-related-fw-bold: 700;
  --fmstr-cmp-mlf-related-fw-extrabold: 800;
  --fmstr-cmp-mlf-related-space-1: 4px;
  --fmstr-cmp-mlf-related-space-2: 8px;
  --fmstr-cmp-mlf-related-space-3: 12px;
  --fmstr-cmp-mlf-related-space-4: 16px;
  --fmstr-cmp-mlf-related-space-5: 20px;
  --fmstr-cmp-mlf-related-space-6: 24px;
  --fmstr-cmp-mlf-related-space-7: 28px;
  --fmstr-cmp-mlf-related-space-8: 32px;
  --fmstr-cmp-mlf-related-space-12: 48px;
  --fmstr-cmp-mlf-related-space-20: 80px;
  --fmstr-cmp-mlf-related-r-md: 8px;
  --fmstr-cmp-mlf-related-r-lg: 14px;
  --fmstr-cmp-mlf-related-r-full: 9999px;
  padding: var(--fmstr-cmp-mlf-related-space-20) var(--fmstr-cmp-mlf-related-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-related *,
.fmstr-cmp-mlf-related *::before,
.fmstr-cmp-mlf-related *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-related__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-related__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-mlf-related__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-related-space-1) var(--fmstr-cmp-mlf-related-space-3);
  background: var(--fmstr-cmp-mlf-related-violet-100);
  color: var(--fmstr-cmp-mlf-related-violet-600);
  border-radius: var(--fmstr-cmp-mlf-related-r-full);
  font-size: var(--fmstr-cmp-mlf-related-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-related-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-related-space-4);
}

.fmstr-cmp-mlf-related__heading {
  font-size: var(--fmstr-cmp-mlf-related-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-related-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-related-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-related-space-7);
}

.fmstr-cmp-mlf-related__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-mlf-related-space-3);
}

.fmstr-cmp-mlf-related__row {
  display: flex;
  align-items: center;
  gap: var(--fmstr-cmp-mlf-related-space-4);
  background: var(--fmstr-cmp-mlf-related-bg-card);
  border: 1px solid var(--fmstr-cmp-mlf-related-border);
  border-radius: var(--fmstr-cmp-mlf-related-r-lg);
  padding: var(--fmstr-cmp-mlf-related-space-4) var(--fmstr-cmp-mlf-related-space-5);
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
}
.fmstr-cmp-mlf-related__row:hover {
  border-color: var(--fmstr-cmp-mlf-related-violet-200);
  transform: translateX(2px);
}

.fmstr-cmp-mlf-related__icon {
  width: 36px;
  height: 36px;
  border-radius: var(--fmstr-cmp-mlf-related-r-md);
  background: var(--fmstr-cmp-mlf-related-violet-100);
  color: var(--fmstr-cmp-mlf-related-violet-600);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-mlf-related__label {
  color: var(--fmstr-cmp-mlf-related-fg-1);
  font-weight: var(--fmstr-cmp-mlf-related-fw-semibold);
  flex: 1;
  font-size: var(--fmstr-cmp-mlf-related-fs-sm);
  line-height: 1.4;
}

.fmstr-cmp-mlf-related__arrow {
  color: var(--fmstr-cmp-mlf-related-fg-4);
  flex-shrink: 0;
}
.fmstr-cmp-mlf-related__row:hover .fmstr-cmp-mlf-related__arrow {
  color: var(--fmstr-cmp-mlf-related-violet-600);
}

@media (max-width: 700px) {
  .fmstr-cmp-mlf-related {
    padding: var(--fmstr-cmp-mlf-related-space-12) var(--fmstr-cmp-mlf-related-space-4);
  }
  .fmstr-cmp-mlf-related__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-related__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-mlf-more {
  --fmstr-cmp-mlf-more-bg-primary: #fafafb;
  --fmstr-cmp-mlf-more-bg-card: #ffffff;
  --fmstr-cmp-mlf-more-fg-1: #101828;
  --fmstr-cmp-mlf-more-fg-2: #344054;
  --fmstr-cmp-mlf-more-fg-3: #475467;
  --fmstr-cmp-mlf-more-violet-100: #f4ebff;
  --fmstr-cmp-mlf-more-violet-200: #e9d7fe;
  --fmstr-cmp-mlf-more-violet-600: #6941c6;
  --fmstr-cmp-mlf-more-border: #eaecf0;
  --fmstr-cmp-mlf-more-fs-xs: 12px;
  --fmstr-cmp-mlf-more-fs-sm: 13px;
  --fmstr-cmp-mlf-more-fs-md: 14px;
  --fmstr-cmp-mlf-more-fs-lg: 16px;
  --fmstr-cmp-mlf-more-fs-3xl: 36px;
  --fmstr-cmp-mlf-more-fw-medium: 500;
  --fmstr-cmp-mlf-more-fw-semibold: 600;
  --fmstr-cmp-mlf-more-fw-bold: 700;
  --fmstr-cmp-mlf-more-fw-extrabold: 800;
  --fmstr-cmp-mlf-more-space-1: 4px;
  --fmstr-cmp-mlf-more-space-2: 8px;
  --fmstr-cmp-mlf-more-space-3: 12px;
  --fmstr-cmp-mlf-more-space-4: 16px;
  --fmstr-cmp-mlf-more-space-5: 20px;
  --fmstr-cmp-mlf-more-space-6: 24px;
  --fmstr-cmp-mlf-more-space-8: 32px;
  --fmstr-cmp-mlf-more-space-12: 48px;
  --fmstr-cmp-mlf-more-space-20: 80px;
  --fmstr-cmp-mlf-more-r-md: 10px;
  --fmstr-cmp-mlf-more-r-xl: 20px;
  --fmstr-cmp-mlf-more-r-full: 9999px;

  background: var(--fmstr-cmp-mlf-more-bg-primary);
  padding: var(--fmstr-cmp-mlf-more-space-20) var(--fmstr-cmp-mlf-more-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-mlf-more *,
.fmstr-cmp-mlf-more *::before,
.fmstr-cmp-mlf-more *::after {
  box-sizing: border-box;
}

.fmstr-cmp-mlf-more__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-mlf-more__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-mlf-more__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-mlf-more-space-1) var(--fmstr-cmp-mlf-more-space-3);
  background: var(--fmstr-cmp-mlf-more-violet-100);
  color: var(--fmstr-cmp-mlf-more-violet-600);
  border-radius: var(--fmstr-cmp-mlf-more-r-full);
  font-size: var(--fmstr-cmp-mlf-more-fs-xs);
  font-weight: var(--fmstr-cmp-mlf-more-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-mlf-more-space-4);
}

.fmstr-cmp-mlf-more__heading {
  font-size: var(--fmstr-cmp-mlf-more-fs-3xl);
  line-height: 1.2;
  font-weight: var(--fmstr-cmp-mlf-more-fw-extrabold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-mlf-more-fg-1);
  margin: 0 0 var(--fmstr-cmp-mlf-more-space-8);
}

.fmstr-cmp-mlf-more__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-mlf-more-space-4);
}

.fmstr-cmp-mlf-more__tile {
  background: var(--fmstr-cmp-mlf-more-bg-card);
  border: 1px solid var(--fmstr-cmp-mlf-more-border);
  border-radius: var(--fmstr-cmp-mlf-more-r-xl);
  padding: var(--fmstr-cmp-mlf-more-space-6);
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-mlf-more-space-3);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
}
.fmstr-cmp-mlf-more__tile:hover {
  border-color: var(--fmstr-cmp-mlf-more-violet-200);
  transform: translateY(-2px);
}

.fmstr-cmp-mlf-more__thumb {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--fmstr-cmp-mlf-more-violet-100);
  color: var(--fmstr-cmp-mlf-more-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-mlf-more__title {
  font-size: var(--fmstr-cmp-mlf-more-fs-lg);
  line-height: 1.35;
  font-weight: var(--fmstr-cmp-mlf-more-fw-bold);
  color: var(--fmstr-cmp-mlf-more-fg-1);
  margin: 0;
  letter-spacing: -0.01em;
}

.fmstr-cmp-mlf-more__body {
  font-size: var(--fmstr-cmp-mlf-more-fs-sm);
  line-height: 1.55;
  color: var(--fmstr-cmp-mlf-more-fg-3);
  margin: 0;
}

@media (max-width: 980px) {
  .fmstr-cmp-mlf-more__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 480px) {
  .fmstr-cmp-mlf-more {
    padding: var(--fmstr-cmp-mlf-more-space-12) var(--fmstr-cmp-mlf-more-space-4);
  }
  .fmstr-cmp-mlf-more__heading {
    font-size: 28px;
  }
  .fmstr-cmp-mlf-more__grid {
    grid-template-columns: 1fr;
  }
}
</style>
