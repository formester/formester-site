<template>
  <div>
    <AiHero
      :description="c0_description"
      type="Form"
      :hideIcons="false"
      buttonText="Generate My Survey"
      placeholder="Quarterly engagement pulse for a 40-person sales team. 8 questions, mix of Likert and open-ende"
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <Trustbadges :title="c2_title" :badges="c2_badges" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-survey-previews" aria-labelledby="fmstr-cmp-survey-previews-title">
            <div class="fmstr-cmp-survey-previews__container">
              <header class="fmstr-cmp-survey-previews__header">
                <span class="fmstr-cmp-survey-previews__eyebrow">See it work</span>
                <h2 id="fmstr-cmp-survey-previews-title" class="fmstr-cmp-survey-previews__title">
                  Three real surveys it drafted in under a minute.
                </h2>
                <p class="fmstr-cmp-survey-previews__intro">
                  Same generator, three different starting points: a prompt, a PDF, and a template. Scroll inside each
                  card to see the questions that came out.
                </p>
              </header>

              <div class="fmstr-cmp-survey-previews__grid">
                <div class="fmstr-cmp-survey-previews__col">
                  <article class="fmstr-cmp-survey-previews__card">
                    <div class="fmstr-cmp-survey-previews__head">
                      <span class="fmstr-cmp-survey-previews__cat">From a prompt</span>
                      <h3 class="fmstr-cmp-survey-previews__name">Quarterly CSAT, post-purchase email</h3>
                      <p class="fmstr-cmp-survey-previews__meta">
                        <b>Prompt:</b> "Quarterly customer satisfaction survey for a SaaS team. Mix of Likert and
                        open-ended. 8 questions."
                      </p>
                      <p class="fmstr-cmp-survey-previews__meta">
                        <b>Output:</b> 8 questions, CSAT-ready scoring, conditional logic on Q6
                      </p>
                      <div class="fmstr-cmp-survey-previews__pills"><span>8 questions</span><span>~3 min</span></div>
                    </div>
                    <div class="fmstr-cmp-survey-previews__body">
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q1 · Likert 1–5</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          On a 1 to 5 scale, how was your most recent experience with us?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q2 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          What was the single best part of that experience?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q3 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">What, if anything, fell short of expectations?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q4 · Multiple choice</div>
                        <div class="fmstr-cmp-survey-previews__qt">Which feature did you use most this month?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q5 · NPS 0–10</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          How likely are you to recommend us to a colleague?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q6 · Conditional</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          What would have made today a 10/10? (shown when Q1 is 3 or below)
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q7 · Yes / No</div>
                        <div class="fmstr-cmp-survey-previews__qt">Did our team respond fast enough?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q8 · Optional</div>
                        <div class="fmstr-cmp-survey-previews__qt">Anything else you want us to know?</div>
                      </div>
                    </div>
                    <div class="fmstr-cmp-survey-previews__foot">All 8 questions visible. Scroll to see logic.</div>
                  </article>
                  <a class="fmstr-cmp-survey-previews__cta" href="#generator">Open this draft in the editor →</a>
                </div>

                <div class="fmstr-cmp-survey-previews__col">
                  <article class="fmstr-cmp-survey-previews__card">
                    <div class="fmstr-cmp-survey-previews__head">
                      <span class="fmstr-cmp-survey-previews__cat">From a PDF</span>
                      <h3 class="fmstr-cmp-survey-previews__name">Quarterly engagement pulse, sales org</h3>
                      <p class="fmstr-cmp-survey-previews__meta"><b>Source:</b> Q2 OKR brief (PDF, 4 pages)</p>
                      <p class="fmstr-cmp-survey-previews__meta">
                        <b>Output:</b> 12 questions, eNPS scoring, three theme clusters
                      </p>
                      <div class="fmstr-cmp-survey-previews__pills"><span>12 questions</span><span>~5 min</span></div>
                    </div>
                    <div class="fmstr-cmp-survey-previews__body">
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q1 · eNPS 0–10</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          On a scale of 0 to 10, how likely are you to recommend us as a place to work?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q2 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          What is the one thing this quarter that has made your work harder than it should be?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q3 · Multiple choice</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          Which OKR are you most confident your team will hit?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q4 · Likert</div>
                        <div class="fmstr-cmp-survey-previews__qt">I have the resources I need to do my best work.</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q5 · Likert</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          My manager gives me the feedback I need to grow.
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q6 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          If you could change one thing about how we run sales, what would it be?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q7 · Multiple choice</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          How often do you collaborate with adjacent teams?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q8 · Likert</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          I understand how my work ladders to company priorities.
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q9 · Likert</div>
                        <div class="fmstr-cmp-survey-previews__qt">Decisions in my org are made transparently.</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q10 · Likert</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          I feel comfortable raising concerns to leadership.
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q11 · Multi-select</div>
                        <div class="fmstr-cmp-survey-previews__qt">Which of these benefits do you most value?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q12 · Optional</div>
                        <div class="fmstr-cmp-survey-previews__qt">Anything else we should know?</div>
                      </div>
                    </div>
                    <div class="fmstr-cmp-survey-previews__foot">12 questions, three theme clusters auto-tagged.</div>
                  </article>
                  <a class="fmstr-cmp-survey-previews__cta" href="#generator">Open this draft in the editor →</a>
                </div>

                <div class="fmstr-cmp-survey-previews__col">
                  <article class="fmstr-cmp-survey-previews__card">
                    <div class="fmstr-cmp-survey-previews__head">
                      <span class="fmstr-cmp-survey-previews__cat">From a template</span>
                      <h3 class="fmstr-cmp-survey-previews__name">New-feature validation, beta cohort</h3>
                      <p class="fmstr-cmp-survey-previews__meta">
                        <b>Template:</b> Customer feedback (Formester library)
                      </p>
                      <p class="fmstr-cmp-survey-previews__meta">
                        <b>Output:</b> 10 questions, conditional branching by usage frequency
                      </p>
                      <div class="fmstr-cmp-survey-previews__pills"><span>10 questions</span><span>~4 min</span></div>
                    </div>
                    <div class="fmstr-cmp-survey-previews__body">
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q1 · Multiple choice</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          How often did you use the new feature in the last 14 days?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q2 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          What is the one job you hoped this feature would do for you?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q3 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          If we removed this feature tomorrow, what would you do instead?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q4 · Likert 1–5</div>
                        <div class="fmstr-cmp-survey-previews__qt">How satisfied are you with the feature today?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q5 · Conditional</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          Which part felt rough? (shown when Q4 is 3 or below)
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q6 · Multi-select</div>
                        <div class="fmstr-cmp-survey-previews__qt">Which workflows did you use it in?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q7 · Open-ended</div>
                        <div class="fmstr-cmp-survey-previews__qt">What would make you a daily user?</div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q8 · NPS</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          How likely are you to tell a colleague about this feature?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q9 · Yes / No</div>
                        <div class="fmstr-cmp-survey-previews__qt">
                          Would you pay extra for an advanced version of this?
                        </div>
                      </div>
                      <div class="fmstr-cmp-survey-previews__qa">
                        <div class="fmstr-cmp-survey-previews__qn">Q10 · Optional</div>
                        <div class="fmstr-cmp-survey-previews__qt">Anything else we should fix?</div>
                      </div>
                    </div>
                    <div class="fmstr-cmp-survey-previews__foot">10 questions, branched by usage frequency.</div>
                  </article>
                  <a class="fmstr-cmp-survey-previews__cta" href="#generator">Open this draft in the editor →</a>
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
          <section class="fmstr-cmp-attributes" aria-labelledby="fmstr-cmp-attributes-title">
            <div class="fmstr-cmp-attributes__container">
              <header class="fmstr-cmp-attributes__header">
                <span class="fmstr-cmp-attributes__eyebrow">What it accepts</span>
                <h2 id="fmstr-cmp-attributes-title" class="fmstr-cmp-attributes__title">
                  Everything the generator accepts, ships, and connects to.
                </h2>
                <p class="fmstr-cmp-attributes__intro">
                  Three places where you can start, three formats it produces, six ways to send it, and a native
                  integrations list you can read at a glance.
                </p>
              </header>

              <div class="fmstr-cmp-attributes__rows">
                <div class="fmstr-cmp-attributes__row">
                  <div class="fmstr-cmp-attributes__label">
                    <span class="fmstr-cmp-attributes__tile" aria-hidden="true"
                      ><svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 2v6h6"></path></svg
                    ></span>
                    <span class="fmstr-cmp-attributes__label-text"
                      ><strong>Inputs</strong><span>What the AI accepts</span></span
                    >
                  </div>
                  <div class="fmstr-cmp-attributes__value">
                    <p>
                      Plain-text prompt, paste-list of existing questions, or a PDF brief. The AI reads the file and
                      drafts a survey from the source rather than pasting it back.
                    </p>
                    <div class="fmstr-cmp-attributes__chips">
                      <span class="fmstr-cmp-attributes__chip">Prompt</span>
                      <span class="fmstr-cmp-attributes__chip">Paste questions</span>
                      <span class="fmstr-cmp-attributes__chip">PDF upload</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-attributes__row">
                  <div class="fmstr-cmp-attributes__label">
                    <span class="fmstr-cmp-attributes__tile" aria-hidden="true"
                      ><svg
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
                        <path d="M9 11h6M9 15h4"></path></svg
                    ></span>
                    <span class="fmstr-cmp-attributes__label-text"
                      ><strong>Question types</strong><span>What the AI generates</span></span
                    >
                  </div>
                  <div class="fmstr-cmp-attributes__value">
                    <p>
                      Multiple choice, single choice, dropdown. True/false ships as a single-choice with True and False
                      as the two options. Open-ended, scale, rating, NPS, and date fields are added in the editor in one
                      click.
                    </p>
                    <div class="fmstr-cmp-attributes__chips">
                      <span class="fmstr-cmp-attributes__chip">Multiple choice</span>
                      <span class="fmstr-cmp-attributes__chip">Single choice</span>
                      <span class="fmstr-cmp-attributes__chip">Dropdown</span>
                      <span class="fmstr-cmp-attributes__chip">True / false</span>
                      <span class="fmstr-cmp-attributes__chip">Open-ended (editor)</span>
                      <span class="fmstr-cmp-attributes__chip">NPS / CSAT scale</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-attributes__row">
                  <div class="fmstr-cmp-attributes__label">
                    <span class="fmstr-cmp-attributes__tile" aria-hidden="true"
                      ><svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <path d="M16 6l-4-4-4 4M12 2v14"></path></svg
                    ></span>
                    <span class="fmstr-cmp-attributes__label-text"
                      ><strong>Sharing</strong><span>Where the survey ships</span></span
                    >
                  </div>
                  <div class="fmstr-cmp-attributes__value">
                    <p>
                      Public link, QR code (PNG / JPEG / SVG, color-customizable), or embed in six layouts. Embeds work
                      on Webflow, WordPress, Wix, Shopify, Canva, and any custom HTML.
                    </p>
                    <div class="fmstr-cmp-attributes__chips">
                      <span class="fmstr-cmp-attributes__chip">Link</span>
                      <span class="fmstr-cmp-attributes__chip">QR code</span>
                      <span class="fmstr-cmp-attributes__chip">Standard inline</span>
                      <span class="fmstr-cmp-attributes__chip">Popup</span>
                      <span class="fmstr-cmp-attributes__chip">Sidebar</span>
                      <span class="fmstr-cmp-attributes__chip">Side Tab</span>
                      <span class="fmstr-cmp-attributes__chip">Popover</span>
                      <span class="fmstr-cmp-attributes__chip">Fullscreen</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-attributes__row">
                  <div class="fmstr-cmp-attributes__label">
                    <span class="fmstr-cmp-attributes__tile" aria-hidden="true"
                      ><svg
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
                        <path d="M7 14l4-4 4 4 5-5"></path></svg
                    ></span>
                    <span class="fmstr-cmp-attributes__label-text"
                      ><strong>Integrations</strong><span>Where the data goes</span></span
                    >
                  </div>
                  <div class="fmstr-cmp-attributes__value">
                    <p>
                      Native HubSpot, Google Sheets, Slack, Stripe, PayPal, Calendly, n8n, plus webhooks (Submission
                      Created / Updated / Deleted) and Zapier for the long tail. Fire workflows on submit, push
                      responses straight into a CRM, or auto-route based on the answer.
                    </p>
                    <div class="fmstr-cmp-attributes__chips">
                      <span class="fmstr-cmp-attributes__chip">HubSpot</span>
                      <span class="fmstr-cmp-attributes__chip">Google Sheets</span>
                      <span class="fmstr-cmp-attributes__chip">Slack</span>
                      <span class="fmstr-cmp-attributes__chip">Stripe</span>
                      <span class="fmstr-cmp-attributes__chip">PayPal</span>
                      <span class="fmstr-cmp-attributes__chip">Calendly</span>
                      <span class="fmstr-cmp-attributes__chip">n8n</span>
                      <span class="fmstr-cmp-attributes__chip">Webhooks</span>
                      <span class="fmstr-cmp-attributes__chip">Zapier 1,000+</span>
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
          <section class="fmstr-cmp-asg-quality-control" aria-labelledby="fmstr-cmp-asg-quality-control-heading">
            <div class="fmstr-cmp-asg-quality-control__container">
              <div class="fmstr-cmp-asg-quality-control__inner">
                <div class="fmstr-cmp-asg-quality-control__text">
                  <span class="fmstr-cmp-asg-quality-control__eyebrow">Question quality</span>
                  <h2 id="fmstr-cmp-asg-quality-control-heading" class="fmstr-cmp-asg-quality-control__heading">
                    Catch the bias before launch.
                  </h2>
                  <div class="fmstr-cmp-asg-quality-control__body">
                    <p>
                      Leading, loaded, double-barrelled, absolute, and prescriptive phrasing get flagged before you
                      send. The generator does not pretend to be perfect. The editor is where the last pass happens,
                      with the bias warnings inline next to each suspect question.
                    </p>
                    <p>
                      Every draft lands in the editor before it ships. Rewrite the question, change the scale, drop the
                      field, swap the order. The AI handles the obvious 80 percent; you spend time on the 20 percent
                      that needs human judgment.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-asg-quality-control__card">
                  <span class="fmstr-cmp-asg-quality-control__pill">What the editor flags</span>
                  <h3 class="fmstr-cmp-asg-quality-control__card-title">Five bias patterns the AI catches.</h3>
                  <ul class="fmstr-cmp-asg-quality-control__list">
                    <li class="fmstr-cmp-asg-quality-control__item">
                      <svg
                        class="fmstr-cmp-asg-quality-control__check"
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
                      <span class="fmstr-cmp-asg-quality-control__item-text"
                        ><strong>Leading questions</strong> that nudge the respondent toward a specific answer ('Don't
                        you agree that...').</span
                      >
                    </li>
                    <li class="fmstr-cmp-asg-quality-control__item">
                      <svg
                        class="fmstr-cmp-asg-quality-control__check"
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
                      <span class="fmstr-cmp-asg-quality-control__item-text"
                        ><strong>Loaded questions</strong> that contain assumptions the respondent has not confirmed
                        ('How often do you...').</span
                      >
                    </li>
                    <li class="fmstr-cmp-asg-quality-control__item">
                      <svg
                        class="fmstr-cmp-asg-quality-control__check"
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
                      <span class="fmstr-cmp-asg-quality-control__item-text"
                        ><strong>Double-barrelled questions</strong> that ask two things at once ('Was it fast and
                        easy?').</span
                      >
                    </li>
                    <li class="fmstr-cmp-asg-quality-control__item">
                      <svg
                        class="fmstr-cmp-asg-quality-control__check"
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
                      <span class="fmstr-cmp-asg-quality-control__item-text"
                        ><strong>Absolute phrasing</strong> with words like 'always,' 'never,' 'every' that force a
                        binary read.</span
                      >
                    </li>
                    <li class="fmstr-cmp-asg-quality-control__item">
                      <svg
                        class="fmstr-cmp-asg-quality-control__check"
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
                      <span class="fmstr-cmp-asg-quality-control__item-text"
                        ><strong>Prescriptive scales</strong> where the option labels themselves carry a value judgment
                        ('excellent / poor').</span
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
          <section class="fmstr-cmp-comparison-table" aria-labelledby="fmstr-cmp-comparison-table-title">
            <div class="fmstr-cmp-comparison-table__container">
              <header class="fmstr-cmp-comparison-table__header">
                <span class="fmstr-cmp-comparison-table__eyebrow">Side by side</span>
                <h2 id="fmstr-cmp-comparison-table-title" class="fmstr-cmp-comparison-table__title">
                  AI survey generator vs traditional survey builder.
                </h2>
                <p class="fmstr-cmp-comparison-table__intro">
                  Both ship surveys. Only one knows the difference between a Likert scale and a leading question. Eight
                  rows of where each one earns its keep.
                </p>
              </header>

              <div class="fmstr-cmp-comparison-table__wrap">
                <div class="fmstr-cmp-comparison-table__scroll">
                  <table class="fmstr-cmp-comparison-table__table">
                    <thead>
                      <tr>
                        <th scope="col">Job to be done</th>
                        <th scope="col" class="fmstr-cmp-comparison-table__th-us">Formester AI survey generator</th>
                        <th scope="col">Traditional survey builder</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Time to first draft</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">~30 seconds from prompt or PDF</td>
                        <td>60 to 90 minutes of manual writing</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Bias-trap detection</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">
                          Flags leading, double-barrel, absolute, and prescriptive phrasing before launch
                        </td>
                        <td>None</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Question-type variety</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">
                          Multi-choice, single, dropdown, scale, rating, NPS, true/false, open-ended
                        </td>
                        <td>Same set, manually configured per question</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Logic and branching</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">
                          Suggested conditional logic auto-applied (route detractors and promoters separately)
                        </td>
                        <td>Built by hand, rule by rule</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Brand consistency</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">
                          AI rewrites in your tone of voice once your brand kit is uploaded
                        </td>
                        <td>Manual edit per question</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Multi-language</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">
                          180+ languages via AI translation, kept in sync as you edit
                        </td>
                        <td>Translate manually or pay per language</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">Source-grounded drafting</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">
                          Reads a PDF brief and drafts questions from your own source material
                        </td>
                        <td>Cannot draft from a brief</td>
                      </tr>
                      <tr>
                        <td class="fmstr-cmp-comparison-table__row-label">When traditional wins</td>
                        <td class="fmstr-cmp-comparison-table__cell-us">None for everyday survey work</td>
                        <td>
                          Highly regulated questionnaires (clinical, legal disclosures) where literal phrasing is
                          mandated
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p class="fmstr-cmp-comparison-table__caption">The AI is the editor. You are still the strategist.</p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FeatureShowcase
      description="Same flow whether you start from a prompt, a PDF brief, or one of the 100+ templates."
      steps
      :title="c7_title"
      :itemList="c7_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-benefits" aria-labelledby="fmstr-cmp-benefits-heading">
            <div class="fmstr-cmp-benefits__inner">
              <header class="fmstr-cmp-benefits__header">
                <span class="fmstr-cmp-benefits__eyebrow">Why our generator</span>
                <h2 id="fmstr-cmp-benefits-heading" class="fmstr-cmp-benefits__heading">
                  Three things our survey generator does that a blank canvas cannot.
                </h2>
                <p class="fmstr-cmp-benefits__sub">
                  Create surveys instantly with an AI survey maker that generates relevant questions from your prompt,
                  reducing manual effort.
                </p>
              </header>

              <div class="fmstr-cmp-benefits__grid">
                <article class="fmstr-cmp-benefits__card">
                  <span class="fmstr-cmp-benefits__icon fmstr-cmp-benefits__icon--blue" aria-hidden="true">
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
                      <path
                        d="M12 2c2.5 2 4 5 4 8a8 8 0 0 1-1.5 4.5L12 17l-2.5-2.5A8 8 0 0 1 8 10c0-3 1.5-6 4-8Z"
                      ></path>
                      <circle cx="12" cy="10" r="2"></circle>
                      <path d="M9 17l-2 4 4-1"></path>
                      <path d="M15 17l2 4-4-1"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-benefits__title">Skips the blank-canvas tax.</h3>
                  <p class="fmstr-cmp-benefits__body">
                    Most surveys eat 90 minutes of writing time, not because the questions are hard but because choosing
                    a starting point is. Paste your idea, get a draft, edit. The first useful question lands in under 30
                    seconds.
                  </p>
                </article>

                <article class="fmstr-cmp-benefits__card">
                  <span class="fmstr-cmp-benefits__icon fmstr-cmp-benefits__icon--violet" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-benefits__title">Borrows from the questions that actually work.</h3>
                  <p class="fmstr-cmp-benefits__body">
                    The generator is grounded in CSAT, NPS, eNPS, and pulse-survey patterns that earn 20 to 30% response
                    rates in customer surveys and 76% on the average employee survey, per 2025 industry benchmarks. Use
                    the patterns, rewrite the questions, ship the survey.
                  </p>
                </article>

                <article class="fmstr-cmp-benefits__card">
                  <span class="fmstr-cmp-benefits__icon fmstr-cmp-benefits__icon--rose" aria-hidden="true">
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
                      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-benefits__title">Catch the bias before launch.</h3>
                  <p class="fmstr-cmp-benefits__body">
                    Leading, double-barrel, absolute, and prescriptive phrasing get flagged before you send. The
                    generator does not pretend to be perfect. About one third of AI-drafted survey items pass
                    psychometric checks without edits, per a 2025 Current Psychology study, which is why every draft
                    lands in the editor before it ships.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FeatureShowcase :steps="false" :title="c9_title" :itemList="c9_itemList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-persona-grid" aria-labelledby="fmstr-cmp-persona-grid-title">
            <div class="fmstr-cmp-persona-grid__container">
              <header class="fmstr-cmp-persona-grid__header">
                <span class="fmstr-cmp-persona-grid__eyebrow">Who uses Formester</span>
                <h2 id="fmstr-cmp-persona-grid-title" class="fmstr-cmp-persona-grid__title">
                  Built for the team that has to send the survey on Monday.
                </h2>
                <p class="fmstr-cmp-persona-grid__intro">
                  Six teams pull this generator open every week. Each one starts somewhere different. Each one ships in
                  the same flow.
                </p>
              </header>

              <div class="fmstr-cmp-persona-grid__grid">
                <article class="fmstr-cmp-persona-grid__card">
                  <span class="fmstr-cmp-persona-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 11V7a3 3 0 0 1 6 0v4"></path>
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect></svg
                  ></span>
                  <h3 class="fmstr-cmp-persona-grid__heading">HR teams</h3>
                  <p class="fmstr-cmp-persona-grid__body">
                    Run quarterly engagement pulses, eNPS, exit interviews, and onboarding check-ins. Drop a job
                    description or a values doc as the PDF and the AI keeps the language consistent across the cycle.
                  </p>
                  <a
                    class="fmstr-cmp-persona-grid__link"
                    href="https://formester.com/templates/employee-engagement-survey-template-1661/"
                    >Employee engagement template →</a
                  >
                </article>

                <article class="fmstr-cmp-persona-grid__card">
                  <span class="fmstr-cmp-persona-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 11h18"></path>
                      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path>
                      <path d="M5 11v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-persona-grid__heading">Marketers</h3>
                  <p class="fmstr-cmp-persona-grid__body">
                    Validate positioning and messaging, run brand-awareness checks, gather post-campaign feedback. The
                    AI rewrites questions to match your brand tone instead of sounding like a market-research vendor.
                  </p>
                  <a
                    class="fmstr-cmp-persona-grid__link"
                    href="https://formester.com/templates/brand-awareness-survey-template-1659/"
                    >Brand awareness template →</a
                  >
                </article>

                <article class="fmstr-cmp-persona-grid__card">
                  <span class="fmstr-cmp-persona-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect></svg
                  ></span>
                  <h3 class="fmstr-cmp-persona-grid__heading">Product managers</h3>
                  <p class="fmstr-cmp-persona-grid__body">
                    Test feature usefulness before you build, validate naming, find the question your roadmap already
                    needs. Paste a PRD and the survey lands on the right respondents inside an hour.
                  </p>
                  <a
                    class="fmstr-cmp-persona-grid__link"
                    href="https://formester.com/templates/customer-feedback-survey-17647/"
                    >Customer feedback template →</a
                  >
                </article>

                <article class="fmstr-cmp-persona-grid__card">
                  <span class="fmstr-cmp-persona-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M4 21v-1a8 8 0 0 1 16 0v1"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-persona-grid__heading">Customer success</h3>
                  <p class="fmstr-cmp-persona-grid__body">
                    NPS, CSAT, churn-risk scoring, post-resolution surveys. Conditional logic routes detractors and
                    promoters into the right follow-up automatically.
                  </p>
                  <a
                    class="fmstr-cmp-persona-grid__link"
                    href="https://formester.com/templates/customer-satisfaction-survey-696/"
                    >Customer satisfaction template →</a
                  >
                </article>

                <article class="fmstr-cmp-persona-grid__card">
                  <span class="fmstr-cmp-persona-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="M21 21l-4.3-4.3"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-persona-grid__heading">Researchers</h3>
                  <p class="fmstr-cmp-persona-grid__body">
                    Run market-research studies, screener surveys, and longitudinal cohort tracking. The AI helps you
                    avoid the four most common bias traps (leading, double-barrel, absolute, and prescriptive) before
                    you launch.
                  </p>
                  <a
                    class="fmstr-cmp-persona-grid__link"
                    href="https://formester.com/templates/consumer-behavior-survey-20056/"
                    >Consumer behavior template →</a
                  >
                </article>

                <article class="fmstr-cmp-persona-grid__card">
                  <span class="fmstr-cmp-persona-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-persona-grid__heading">Educators and trainers</h3>
                  <p class="fmstr-cmp-persona-grid__body">
                    Course feedback, instructor evaluation, post-training assessment, end-of-term reflection. Convert
                    the same survey into a quiz with one click when you need to score answers.
                  </p>
                  <a
                    class="fmstr-cmp-persona-grid__link"
                    href="https://formester.com/templates/detailed-course-evaluation-survey-69254/"
                    >Course evaluation template →</a
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
          <section class="fmstr-cmp-templates-grid" aria-labelledby="fmstr-cmp-templates-grid-title">
            <div class="fmstr-cmp-templates-grid__container">
              <header class="fmstr-cmp-templates-grid__header">
                <span class="fmstr-cmp-templates-grid__eyebrow">Templates</span>
                <h2 id="fmstr-cmp-templates-grid-title" class="fmstr-cmp-templates-grid__title">
                  100+ survey templates that already pass the bias check.
                </h2>
                <p class="fmstr-cmp-templates-grid__intro">
                  Every template is a real survey we have shipped or modeled on a published benchmark. Pick one, paste a
                  prompt to localize it, send it.
                </p>
              </header>

              <div class="fmstr-cmp-templates-grid__grid">
                <a
                  href="https://formester.com/templates/customer-satisfaction-survey-696/"
                  class="fmstr-cmp-templates-grid__card"
                >
                  <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 2l3 7h7l-5.5 4.5 2 7-6.5-4.5L5.5 20.5l2-7L2 9h7z"></path></svg
                  ></span>
                  <span class="fmstr-cmp-templates-grid__name">Customer satisfaction (CSAT) survey</span>
                  <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">→</span>
                </a>
                <a
                  href="https://formester.com/blog/how-to-make-a-net-promoter-score-survey/"
                  class="fmstr-cmp-templates-grid__card"
                >
                  <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true"
                    ><svg
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
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path></svg
                  ></span>
                  <span class="fmstr-cmp-templates-grid__name">Net Promoter Score (NPS) survey</span>
                  <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">→</span>
                </a>
                <a
                  href="https://formester.com/templates/employee-engagement-survey-template-1661/"
                  class="fmstr-cmp-templates-grid__card"
                >
                  <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 11V7a3 3 0 0 1 6 0v4"></path>
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect></svg
                  ></span>
                  <span class="fmstr-cmp-templates-grid__name">Employee engagement survey</span>
                  <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">→</span>
                </a>
                <a
                  href="https://formester.com/templates/customer-feedback-survey-17647/"
                  class="fmstr-cmp-templates-grid__card"
                >
                  <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg
                  ></span>
                  <span class="fmstr-cmp-templates-grid__name">Customer feedback survey</span>
                  <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">→</span>
                </a>
                <a
                  href="https://formester.com/templates/brand-awareness-survey-template-1659/"
                  class="fmstr-cmp-templates-grid__card"
                >
                  <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 11h18"></path>
                      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path>
                      <path d="M5 11v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"></path></svg
                  ></span>
                  <span class="fmstr-cmp-templates-grid__name">Brand awareness survey</span>
                  <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">→</span>
                </a>
                <a
                  href="https://formester.com/templates/detailed-course-evaluation-survey-69254/"
                  class="fmstr-cmp-templates-grid__card"
                >
                  <span class="fmstr-cmp-templates-grid__icon" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg
                  ></span>
                  <span class="fmstr-cmp-templates-grid__name">Course evaluation survey</span>
                  <span class="fmstr-cmp-templates-grid__arrow" aria-hidden="true">→</span>
                </a>
              </div>

              <div class="fmstr-cmp-templates-grid__footer">
                <a href="https://formester.com/templates/categories/survey-forms/">See all 100+ survey templates →</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-privacy-data-trust" aria-labelledby="fmstr-cmp-privacy-data-trust-heading">
            <div class="fmstr-cmp-privacy-data-trust__container">
              <div class="fmstr-cmp-privacy-data-trust__inner">
                <div class="fmstr-cmp-privacy-data-trust__text">
                  <span class="fmstr-cmp-privacy-data-trust__eyebrow">Privacy and data</span>
                  <h2 id="fmstr-cmp-privacy-data-trust-heading" class="fmstr-cmp-privacy-data-trust__heading">
                    Your survey data is yours. We don't train on it.
                  </h2>
                  <div class="fmstr-cmp-privacy-data-trust__body">
                    <p>
                      Customer Data submitted to Formester is not used to train AI models, run advertising, run
                      analytics, or feed marketing. That is written into our Data Processing Addendum, Section 4.4, not
                      buried in a help article. The AI engine that drafts your questions is Google Gemini, named in our
                      DPA's sub-processor list so you can audit it in 30 seconds.
                    </p>
                    <p>
                      Your account is encrypted at rest, your responses move over TLS, and payment data carries an
                      additional AES-256 layer through Stripe. We are GDPR, UK GDPR, and CCPA compliant. We are not SOC
                      2, ISO 27001, or HIPAA certified yet, and we say so on the security page rather than implying
                      otherwise.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-privacy-data-trust__card">
                  <span class="fmstr-cmp-privacy-data-trust__pill">DPA §4.4 · January 2026</span>
                  <blockquote class="fmstr-cmp-privacy-data-trust__quote">
                    "Formester shall not use Customer Data for purposes of analytics, advertising, marketing, or
                    training of artificial intelligence or machine learning models, except as strictly necessary to
                    provide the Services."
                  </blockquote>
                  <hr class="fmstr-cmp-privacy-data-trust__divider" />
                  <p class="fmstr-cmp-privacy-data-trust__cite">
                    Formester Data Processing Addendum, effective January 2026.
                  </p>
                  <div class="fmstr-cmp-privacy-data-trust__links">
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
          <section class="fmstr-cmp-api-mcp" aria-labelledby="fmstr-cmp-api-mcp-title">
            <div class="fmstr-cmp-api-mcp__container">
              <header class="fmstr-cmp-api-mcp__header">
                <span class="fmstr-cmp-api-mcp__eyebrow">Built for AI workflows</span>
                <h2 id="fmstr-cmp-api-mcp-title" class="fmstr-cmp-api-mcp__title">
                  Your survey responses, ready for the AI you already use.
                </h2>
                <p class="fmstr-cmp-api-mcp__intro">
                  Every Formester survey ships with a REST API and an MCP server, so the answers do not stop at a CSV.
                  Pipe NPS into your customer-success agent. Stream eNPS into your HR copilot. Nobody else on this list
                  ships MCP.
                </p>
              </header>

              <div class="fmstr-cmp-api-mcp__grid">
                <article class="fmstr-cmp-api-mcp__card">
                  <span class="fmstr-cmp-api-mcp__badge">MCP server</span>
                  <h3 class="fmstr-cmp-api-mcp__card-title">
                    Plug Formester into Claude, ChatGPT, or any MCP-compatible model.
                  </h3>
                  <div class="fmstr-cmp-api-mcp__chips">
                    <span class="fmstr-cmp-api-mcp__chip">Claude</span>
                    <span class="fmstr-cmp-api-mcp__chip">ChatGPT</span>
                    <span class="fmstr-cmp-api-mcp__chip">Custom agents</span>
                  </div>
                  <p class="fmstr-cmp-api-mcp__body">
                    Connect Formester to any MCP-compatible model and let it read your responses directly. Ask Claude
                    "what did detractors say last quarter?", or have a custom agent flag low-CSAT responses for the
                    on-call account manager. The same integration powers HR copilots watching eNPS in real time.
                  </p>
                  <a class="fmstr-cmp-api-mcp__cta" href="https://docs.formester.com/formester-mcp-server.html"
                    >Read the MCP docs →</a
                  >
                </article>

                <article class="fmstr-cmp-api-mcp__card">
                  <span class="fmstr-cmp-api-mcp__badge fmstr-cmp-api-mcp__badge--alt">REST API v2</span>
                  <h3 class="fmstr-cmp-api-mcp__card-title">Or build directly on the REST API.</h3>
                  <div class="fmstr-cmp-api-mcp__chips">
                    <span class="fmstr-cmp-api-mcp__chip">Self-service token</span>
                    <span class="fmstr-cmp-api-mcp__chip">Org-level scope</span>
                    <span class="fmstr-cmp-api-mcp__chip">Business plan +</span>
                  </div>
                  <p class="fmstr-cmp-api-mcp__body">
                    Pull responses into your data warehouse, push pre-filled survey URLs back from your CRM, or build a
                    custom analytics workflow. Self-service token at app.formester.com/api in two clicks. No support
                    ticket, no waiting.
                  </p>
                  <a class="fmstr-cmp-api-mcp__cta" href="https://docs.formester.com/formester-api.html"
                    >Read the API docs →</a
                  >
                </article>
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

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-cross-sell" aria-labelledby="fmstr-cmp-cross-sell-title">
            <div class="fmstr-cmp-cross-sell__container">
              <header class="fmstr-cmp-cross-sell__header">
                <span class="fmstr-cmp-cross-sell__eyebrow">More from Formester</span>
                <h2 id="fmstr-cmp-cross-sell-title" class="fmstr-cmp-cross-sell__title">
                  More AI tools from Formester.
                </h2>
                <p class="fmstr-cmp-cross-sell__intro">
                  The same drafting engine, applied to four other things you probably also need to build today.
                </p>
              </header>

              <div class="fmstr-cmp-cross-sell__grid">
                <a href="/ai-form-generator/#ai-form-builder" class="fmstr-cmp-cross-sell__tile">
                  <span class="fmstr-cmp-cross-sell__thumb" aria-hidden="true"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                      <path d="M8 8h8M8 12h8M8 16h5"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-cross-sell__name">AI Form Generator</h3>
                  <p class="fmstr-cmp-cross-sell__body">
                    Build any form (lead capture, registration, intake) from a prompt or PDF.
                  </p>
                  <span class="fmstr-cmp-cross-sell__link">Explore →</span>
                </a>

                <a href="https://formester.com/ai-quiz-maker/" class="fmstr-cmp-cross-sell__tile">
                  <span class="fmstr-cmp-cross-sell__thumb" aria-hidden="true"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M9 11h6M9 15h4"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-cross-sell__name">AI Quiz Maker</h3>
                  <p class="fmstr-cmp-cross-sell__body">
                    Auto-graded quizzes with weighted scoring, timers, and outcome routing.
                  </p>
                  <span class="fmstr-cmp-cross-sell__link">Explore →</span>
                </a>

                <a href="https://formester.com/ai-powered-multilingual-forms/" class="fmstr-cmp-cross-sell__tile">
                  <span class="fmstr-cmp-cross-sell__thumb" aria-hidden="true"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-cross-sell__name">AI Multilingual Forms</h3>
                  <p class="fmstr-cmp-cross-sell__body">One source form, 180+ languages, kept in sync.</p>
                  <span class="fmstr-cmp-cross-sell__link">Explore →</span>
                </a>

                <a
                  href="https://formester.com/build-conditional-logic-forms-with-ai/"
                  class="fmstr-cmp-cross-sell__tile"
                >
                  <span class="fmstr-cmp-cross-sell__thumb" aria-hidden="true"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 3v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4"></path>
                      <circle cx="6" cy="3" r="2"></circle>
                      <circle cx="18" cy="21" r="2"></circle></svg
                  ></span>
                  <h3 class="fmstr-cmp-cross-sell__name">AI Conditional Logic</h3>
                  <p class="fmstr-cmp-cross-sell__body">
                    Build conditional logic flows from a natural-language description.
                  </p>
                  <span class="fmstr-cmp-cross-sell__link">Explore →</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FaqSection :title="c17_title" :faqList="c17_faqList" class="page-component-item" />
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  "Paste a prompt, upload a PDF, or pick a template. Formester's AI survey maker drafts question logic, response scales, and branching, then hands you a survey you can send in two clicks.\n"
const c0_title = [
  {
    id: 4936,
    text: 'The AI Survey Generator that ',
    highlight: false,
    color: '#000000',
    bold: true,
  },
  {
    id: 4937,
    text: 'drafts your questions',
    highlight: true,
    color: '#000000',
    bold: true,
  },
  {
    id: 4938,
    text: ', not your job description.',
    highlight: false,
    color: '#000000',
    bold: true,
  },
]
const c0_suggestions = [
  {
    id: 40,
    text: 'Create a 6-question CSAT survey for SaaS customers with NPS and one open-ended question.',
    label: 'CSAT survey',
  },
  {
    id: 41,
    text: 'Create a quarterly engagement pulse for a 40-person sales team with 8 Likert questions.',
    label: 'Engagement pulse',
  },
  {
    id: 42,
    text: 'Create a brand awareness survey for Gen Z shoppers with 7 questions and unaided recall.',
    label: 'Brand awareness survey',
  },
]
const c0_footerItems = [
  {
    id: 2655,
    text: '✓ Unlimited Forms',
  },
  {
    id: 2657,
    text: '✓ No Credit Card Required',
  },
  {
    id: 2656,
    text: '✓ Trusted by 56,000+ Users',
  },
  {
    id: 2658,
    text: '✓ Free Forever',
  },
  {
    id: 2659,
    text: '✓ Unlimited Responses',
  },
  {
    id: 2660,
    text: '✓ 100+ survey templates ',
  },
  {
    id: 2661,
    text: '✓ 1,000+ integrations',
  },
]
const c1_title = []
const c1_logos = [
  {
    id: 4083,
    imageAlt: 'Tedx Paris Organizer',
    imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_3c0e17bf72.png',
    width: null,
    height: null,
    image: null,
  },
  {
    id: 4084,
    imageAlt: 'Vue Jobs',
    imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/vue_jobs_9705e4cfbe.svg',
    width: 110,
    height: null,
    image: null,
  },
  {
    id: 4085,
    imageAlt: 'Mayple',
    imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/mayple_67fe487816.png',
    width: null,
    height: null,
    image: null,
  },
  {
    id: 4087,
    imageAlt: 'Equipal',
    imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/equipment_connect_b753319419.png',
    width: null,
    height: null,
    image: null,
  },
  {
    id: 4086,
    imageAlt: 'Vue Conference Toronto',
    imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_black_43e8b6a164.png',
    width: null,
    height: null,
    image: null,
  },
]
const c2_title = [
  {
    id: 4941,
    text: 'Trusted by 56,000+ Businesses Across Globe',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c2_badges = []
const c7_title = [
  {
    id: 4940,
    text: 'How the AI Survey Generator Works in Four Steps',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c7_itemList = [
  {
    id: 2495,
    title: 'Input Your Prompt',
    description:
      'Type a prompt, drop a PDF brief, or pick a template. Be as specific as you want. "Quarterly engagement pulse for a 40-person sales team, 8 questions, Likert plus two open-ended" lands a better draft than "make me an employee survey',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 4088,
      imageAlt: "a screenshot of formester's ai survey generator",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2695,
        name: 'ai survey1.svg',
        alternativeText: "a screenshot of formester's ai survey generator",
        caption: "a screenshot of formester's ai survey generator",
        width: 450,
        height: 384,
        formats: null,
        hash: 'ai_survey1_d2f9d4b592',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1032.69,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/ai_survey1_d2f9d4b592.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-01-31T03:35:44.607Z',
        updatedAt: '2025-01-31T03:35:58.514Z',
      },
    },
  },
  {
    id: 2490,
    title: 'Customize and Design',
    description:
      'Use the drag and drop interface to edit questions, remove unwanted ones, or add new ones. Include images, videos, or branding elements. Adjust themes, fonts, and layouts to match your style.',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 4089,
      imageAlt:
        'Rewrite any question, swap question types, add images or videos, and apply your brand kit (logo, colors, fonts) in one pass. Add conditional logic so detractors and promoters route into different follow-ups automatically',
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
    id: 2489,
    title: 'Send it as a link, QR code, or embed',
    description:
      'Drop a public link, scan a QR code, or embed the survey on any site in six layouts (Standard, Popup, Sidebar, Side Tab, Popover, Fullscreen). Native HubSpot, Google Sheets, Slack, Stripe, and Calendly trigger off each submission',
    description_markdown: '',
    icon: null,
    cardImage: {
      id: 4090,
      imageAlt: "a screenshot of formester's partial submission",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1998,
        name: "a screenshot of formester's partial submission.svg",
        alternativeText: "a screenshot of formester's partial submission",
        caption: "a screenshot of formester's partial submission",
        width: 682,
        height: 522,
        formats: null,
        hash: 'Component_926_734dda95ed',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 170.65,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_734dda95ed.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-06T10:47:36.803Z',
        updatedAt: '2024-09-06T10:48:14.042Z',
      },
    },
  },
  {
    id: 2493,
    title: 'Analyze Results',
    description:
      'Watch completion rate, drop-off rate, drop-off pages, and time-spent in real time. CSV export with one click. Partial submissions captured automatically so you see the questions that lost people, not just the ones that finished.',
    description_markdown:
      'Track real-time responses in the **[form analytics](/features/form-analytics/)** dashboard. Export results as CSV or Google Sheets for deeper analysis. Use partial submissions to see incomplete or abandoned responses.',
    icon: null,
    cardImage: {
      id: 4091,
      imageAlt: "a screenshot of formester's partial submission",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1999,
        name: "a screenshot of formester's partial submission.svg",
        alternativeText: "a screenshot of formester's partial submission",
        caption: "a screenshot of formester's partial submission",
        width: 682,
        height: 522,
        formats: null,
        hash: 'Component_925_1_ee09d93084',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 259.57,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_1_ee09d93084.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-06T10:47:37.598Z',
        updatedAt: '2024-09-06T10:48:31.600Z',
      },
    },
  },
]
const c9_title = [
  {
    id: 4939,
    text: 'Advanced AI Survey Features',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c9_itemList = [
  {
    id: 2496,
    title: 'Offline Survey Collection',
    description:
      'No internet? No problem! Allow respondents to fill out surveys offline. Once back online, responses will sync automatically.',
    description_markdown:
      'No internet? No problem! Allow respondents to **[fill out surveys offline](/features/offline-forms/)**. Once back online, responses will sync automatically.',
    icon: null,
    cardImage: {
      id: 4092,
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
    id: 2492,
    title: 'QR Code Generator',
    description:
      'Each survey gets a unique QR code, making it easy for participants to access and complete the survey with a simple scan.',
    description_markdown:
      'Each survey gets a **[unique QR code](/features/qr-code-generator/)**, making it easy for participants to access and complete the survey with a simple scan.',
    icon: null,
    cardImage: {
      id: 4094,
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
    id: 2494,
    title: 'Email Autoresponder',
    description:
      'Automatically send confirmation emails, thank-you messages, or follow-up emails to respondents using Formester’s email autoresponder. You can also receive instant notifications when new responses arrive.',
    description_markdown:
      'Automatically send confirmation emails, thank-you messages, or follow-up emails to respondents using the **[email autoresponder](/features/autoresponder-email/)**. You can also receive instant notifications when new responses arrive.',
    icon: null,
    cardImage: {
      id: 4095,
      imageAlt: "a screenshot of sharing a formester's email autoresponder",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1548,
        name: "a screenshot of sharing a formester's email autoresponder.svg",
        alternativeText: "a screenshot of sharing a formester's email autoresponder",
        caption: "a screenshot of sharing a formester's email autoresponder",
        width: 442,
        height: 320,
        formats: null,
        hash: 'easy_email_builder_illus_f925072ee7',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 62.9,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/easy_email_builder_illus_f925072ee7.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-07-31T15:04:32.544Z',
        updatedAt: '2025-01-31T03:31:21.505Z',
      },
    },
  },
  {
    id: 2491,
    title: 'Integrate with 1,000+ Apps',
    description:
      'Integrate with Google Sheets, Slack, HubSpot, Zapier, and more to automate workflows and gain insights effortlessly.',
    description_markdown:
      'Integrate with Google Sheets, Slack, HubSpot, Zapier, and more to **[automate workflows](/integrations/)** and gain insights effortlessly.',
    icon: null,
    cardImage: {
      id: 4093,
      imageAlt: "a screenshot of formester's publish form ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2021,
        name: "a screenshot of formester's publish form ui.svg",
        alternativeText: "a screenshot of formester's publish form ui",
        caption: "a screenshot of formester's publish form ui",
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_925_14616b0736',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 171.79,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_14616b0736.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-09-06T11:00:40.509Z',
        updatedAt: '2024-09-06T11:01:04.955Z',
      },
    },
  },
]
const c14_heading = [
  {
    id: 4943,
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
const c17_title = [
  {
    id: 4942,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c17_faqList = [
  {
    id: 2503,
    header: 'How does AI help in survey creation?',
    body: 'Formester’s AI generates smart questions, improves structure, and creates ready-to-use surveys based on your input.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2505,
    header: 'Can I edit AI-generated survey questions?',
    body: 'Yes. You can fully customize questions, add new ones, and adjust layouts anytime.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2504,
    header: 'Is Formester’s AI survey generator free?',
    body: 'Yes. You can use basic AI survey features for free. Advanced tools are available in premium plans.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2506,
    header: 'Can I convert my survey into a quiz or poll?',
    body: 'Yes, both. A survey turns into a scored quiz with weighted points, pass/fail thresholds, and timer support in the same editor. A survey turns into a single-question poll with one click for embedding on social or in a side-tab popover.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2507,
    header: 'How do I share my AI-generated survey?',
    body: 'You get a shareable link and embed option to distribute via email, social media, or your website.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2508,
    header: 'What inputs does the AI survey generator accept? ',
    body: 'Three. A plain-text prompt (write what you need in your own words), a paste-list of questions (Formester re-orders, edits, and structures them), or a PDF brief (the AI reads the file and drafts questions from your own source material). DOCX, PowerPoint, image, and public-URL inputs are not supported today.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2509,
    header: 'Which question types does the AI generate? ',
    body: 'Multiple choice, single choice, and dropdown. True/false ships as a single-choice with True and False as the two options. Open-ended, scale, rating, NPS, and date fields are added in the editor in one click.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2510,
    header: 'What does the free plan actually include? ',
    body: 'Unlimited forms, unlimited responses, the AI survey generator, all field types, drop-off analytics, and payment collection. Formester branding shows on free-plan surveys; brand removal starts on the Personal plan at $13/month.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2511,
    header: 'How does Formester handle the data I submit to the AI? ',
    body: "Customer Data is not used to train AI models, run advertising, run marketing, or feed analytics, written into our DPA at section 4.4. The AI engine is Google Gemini, named in the same DPA's sub-processor list. We are GDPR, UK GDPR, and CCPA compliant. Data moves over TLS, sits encrypted at rest, and payment data carries an additional AES-256 layer via Stripe.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2512,
    header: 'How do I share an AI-generated survey? ',
    body: 'Three options. A public link (with optional password protection), a QR code (downloadable as PNG, JPEG, or SVG and color-customizable), or an embed snippet in six layouts: Standard inline, Popup, Sidebar, Side Tab, Popover, and Fullscreen. The embed works on Webflow, WordPress, Wix, Shopify, Canva, or any custom HTML.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2513,
    header: 'Can I run a survey in another language? ',
    body: 'Yes. AI translation supports 180+ languages from a single source survey, and translations stay in sync if you edit the original. Manual translation is also supported field-by-field if you want full control over phrasing.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2514,
    header: 'What integrations fire automatically on a new response? ',
    body: 'Native: HubSpot, Google Sheets, Slack, Stripe, PayPal, Calendly, n8n, Pabbly, OttoKit, GA4, GTM. Webhooks fire on Submission Created, Updated, and Deleted. Zapier covers the long tail with 1,000+ apps. Auto-fill back from Google Sheets, Airtable, Notion, Excel, and most CRMs is also supported.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2516,
    header: 'How accurate are AI-generated survey questions? ',
    body: 'A 2025 BMC Medical Education study found that 22% of AI-drafted single-best-answer questions were usable as-is, 47% needed minor revisions, and 31% required full rework. A separate 2025 Current Psychology study found about two-thirds of AI-generated survey items showed good psychometric properties (factor loadings above 0.40), with one-third equivalent to established human-written measures. The honest framing: AI gets you a good draft fast. The editor gets you a survey worth fielding.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2515,
    header: 'Can a survey be filled offline? ',
    body: 'Yes. Respondents can complete a survey without an internet connection on the Formester offline-form mode. Responses sync automatically when the device reconnects. Useful for field research, in-store surveys, conferences, and rural data collection.\n',
    body_markdown: null,
    list: [],
  },
]

useHead({
  title: 'Free AI Survey Generator: Build a Survey From a Prompt or PDF',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/ai-survey-generator/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-13T04:48:28.612Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Paste a prompt or upload a PDF. The free AI survey maker drafts your questions in seconds, then ships the survey via link, QR code, or embed. 100+ templates, 1,000+ integrations',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free AI Survey Generator: Build a Survey From a Prompt or PDF',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/ai-survey-generator/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free AI Survey Generator: Build a Survey From a Prompt or PDF',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Paste a prompt or upload a PDF. The free AI survey maker drafts your questions in seconds, then ships the survey via link, QR code, or embed. 100+ templates, 1,000+ integrations',
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
      content: 'https://formester.com/ai-survey-generator/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free AI Survey Generator: Build a Survey From a Prompt or PDF',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Paste a prompt or upload a PDF. The free AI survey maker drafts your questions in seconds, then ships the survey via link, QR code, or embed. 100+ templates, 1,000+ integrations',
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
        'ai survey answers',
        'survey ai',
        'ai for questionnaire',
        'ai survey questions',
        'ai survey maker',
        'ai survey',
        'ai survey generator​',
      ],
    },
  ],
})
useJsonld([
  {
    '@graph': [
      {
        '@id': 'https://formester.com/#organization',
        url: 'https://formester.com',
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
        address: {
          '@type': 'PostalAddress',
          streetAddress: '49D, Jugsalai',
          addressCountry: 'IN',
          addressLocality: 'Jamshedpur',
        },
        contactPoint: {
          url: 'https://formester.com/contact',
          '@type': 'ContactPoint',
          email: 'support@formester.com',
          contactType: 'Customer Support',
        },
      },
      {
        '@id': 'https://formester.com/ai-survey-generator/#webpage',
        url: 'https://formester.com/ai-survey-generator/',
        name: 'Free AI Survey Generator: Build a Survey From a Prompt or PDF',
        '@type': 'WebPage',
        headline: 'The AI Survey Generator that drafts your questions, not your job description.',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/ai-survey-generator/#breadcrumb',
        },
        inLanguage: 'en-US',
        dateModified: '2026-05-09',
        datePublished: '2024-06-07',
      },
      {
        '@id': 'https://formester.com/ai-survey-generator/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/ai-survey-generator/',
            name: 'AI Survey Generator',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/ai-survey-generator/#software',
        url: 'https://formester.com/ai-survey-generator/',
        name: 'Formester AI Survey Generator',
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
          'Free AI survey generator that turns a prompt, a PDF brief, or a paste-list of questions into a working survey. Edit before publishing, ship in 180+ languages, fill responses online or offline.',
        aggregateRating: {
          '@type': 'AggregateRating',
          bestRating: '5',
          ratingCount: '33',
          ratingValue: '4.7',
          worstRating: '1',
        },
        operatingSystem: 'Web-based',
        applicationCategory: 'BusinessApplication',
      },
      {
        '@id': 'https://formester.com/ai-survey-generator/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'How does AI help in survey creation?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Formester’s AI generates smart questions, improves structure, and creates ready-to-use surveys based on your input.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I edit AI-generated survey questions?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You can fully customize questions, add new ones, and adjust layouts anytime.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is Formester’s AI survey generator free?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You can use basic AI survey features for free. Advanced tools are available in premium plans.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I convert my survey into a quiz or poll?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes, both. A survey turns into a scored quiz with weighted points, pass/fail thresholds, and timer support in the same editor. A survey turns into a single-question poll with one click for embedding on social or in a side-tab popover.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I share my AI-generated survey?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You get a shareable link and embed option to distribute via email, social media, or your website.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What inputs does the AI survey generator accept?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Three. A plain-text prompt (write what you need in your own words), a paste-list of questions (Formester re-orders, edits, and structures them), or a PDF brief (the AI reads the file and drafts questions from your own source material). DOCX, PowerPoint, image, and public-URL inputs are not supported today.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Which question types does the AI generate?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Multiple choice, single choice, and dropdown. True/false ships as a single-choice with True and False as the two options. Open-ended, scale, rating, NPS, and date fields are added in the editor in one click.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What does the free plan actually include?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Unlimited forms, unlimited responses, the AI survey generator, all field types, drop-off analytics, and payment collection. Formester branding shows on free-plan surveys; brand removal starts on the Personal plan at $13/month.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How does Formester handle the data I submit to the AI?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Customer Data is not used to train AI models, run advertising, run marketing, or feed analytics, written into our DPA at section 4.4. The AI engine is Google Gemini, named in the same DPA's sub-processor list. We are GDPR, UK GDPR, and CCPA compliant. Data moves over TLS, sits encrypted at rest, and payment data carries an additional AES-256 layer via Stripe.",
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I share an AI-generated survey?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Three options. A public link (with optional password protection), a QR code (downloadable as PNG, JPEG, or SVG and color-customizable), or an embed snippet in six layouts: Standard inline, Popup, Sidebar, Side Tab, Popover, and Fullscreen. The embed works on Webflow, WordPress, Wix, Shopify, Canva, or any custom HTML.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I run a survey in another language?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. AI translation supports 180+ languages from a single source survey, and translations stay in sync if you edit the original. Manual translation is also supported field-by-field if you want full control over phrasing.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What integrations fire automatically on a new response?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Native: HubSpot, Google Sheets, Slack, Stripe, PayPal, Calendly, n8n, Pabbly, OttoKit, GA4, GTM. Webhooks fire on Submission Created, Updated, and Deleted. Zapier covers the long tail with 1,000+ apps. Auto-fill back from Google Sheets, Airtable, Notion, Excel, and most CRMs is also supported.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How accurate are AI-generated survey questions?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'A 2025 BMC Medical Education study found that 22% of AI-drafted single-best-answer questions were usable as-is, 47% needed minor revisions, and 31% required full rework. A separate 2025 Current Psychology study found about two-thirds of AI-generated survey items showed good psychometric properties (factor loadings above 0.40), with one-third equivalent to established human-written measures. The honest framing: AI gets you a good draft fast. The editor gets you a survey worth fielding.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can a survey be filled offline?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Respondents can complete a survey without an internet connection on the Formester offline-form mode. Responses sync automatically when the device reconnects. Useful for field research, in-store surveys, conferences, and rural data collection.',
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

.fmstr-cmp-survey-previews {
  --fmstr-cmp-survey-previews-bg-card: #ffffff;
  --fmstr-cmp-survey-previews-bg-tint: #f7f3ff;
  --fmstr-cmp-survey-previews-bg-pill: #f4ebff;
  --fmstr-cmp-survey-previews-bg-chip: #f2f4f7;
  --fmstr-cmp-survey-previews-bg-row: #fcfcfd;
  --fmstr-cmp-survey-previews-fg-1: #101828;
  --fmstr-cmp-survey-previews-fg-2: #475467;
  --fmstr-cmp-survey-previews-fg-3: #697586;
  --fmstr-cmp-survey-previews-fg-strong: #344054;
  --fmstr-cmp-survey-previews-violet-600: #6941c6;
  --fmstr-cmp-survey-previews-violet-300: #9777e0;
  --fmstr-cmp-survey-previews-border: #eaecf0;
  --fmstr-cmp-survey-previews-fs-xs: 12px;
  --fmstr-cmp-survey-previews-fs-sm: 14px;
  --fmstr-cmp-survey-previews-fs-md: 16px;
  --fmstr-cmp-survey-previews-fs-lg: 18px;
  --fmstr-cmp-survey-previews-fs-2xl: 24px;
  --fmstr-cmp-survey-previews-fs-3xl: 36px;
  --fmstr-cmp-survey-previews-lh-md: 24px;
  --fmstr-cmp-survey-previews-lh-lg: 28px;
  --fmstr-cmp-survey-previews-fw-semibold: 600;
  --fmstr-cmp-survey-previews-fw-bold: 700;
  --fmstr-cmp-survey-previews-space-1: 4px;
  --fmstr-cmp-survey-previews-space-2: 8px;
  --fmstr-cmp-survey-previews-space-3: 12px;
  --fmstr-cmp-survey-previews-space-4: 16px;
  --fmstr-cmp-survey-previews-space-5: 20px;
  --fmstr-cmp-survey-previews-space-6: 24px;
  --fmstr-cmp-survey-previews-space-8: 32px;
  --fmstr-cmp-survey-previews-space-10: 40px;
  --fmstr-cmp-survey-previews-space-12: 48px;
  --fmstr-cmp-survey-previews-space-16: 64px;
  --fmstr-cmp-survey-previews-r-md: 6px;
  --fmstr-cmp-survey-previews-r-lg: 8px;
  --fmstr-cmp-survey-previews-r-2xl: 16px;
  --fmstr-cmp-survey-previews-r-full: 9999px;
  --fmstr-cmp-survey-previews-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

  padding: var(--fmstr-cmp-survey-previews-space-16) var(--fmstr-cmp-survey-previews-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-survey-previews *,
.fmstr-cmp-survey-previews *::before,
.fmstr-cmp-survey-previews *::after {
  box-sizing: border-box;
}

.fmstr-cmp-survey-previews__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-survey-previews__header {
  margin: 0 auto var(--fmstr-cmp-survey-previews-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-survey-previews__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-survey-previews-space-2) var(--fmstr-cmp-survey-previews-space-4);
  background: var(--fmstr-cmp-survey-previews-bg-pill);
  color: var(--fmstr-cmp-survey-previews-violet-600);
  border-radius: var(--fmstr-cmp-survey-previews-r-full);
  font-size: var(--fmstr-cmp-survey-previews-fs-xs);
  font-weight: var(--fmstr-cmp-survey-previews-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-survey-previews-space-4);
}

.fmstr-cmp-survey-previews__title {
  font-size: var(--fmstr-cmp-survey-previews-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-survey-previews-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-survey-previews-fg-1);
  margin: 0 0 var(--fmstr-cmp-survey-previews-space-3);
}

.fmstr-cmp-survey-previews__intro {
  font-size: var(--fmstr-cmp-survey-previews-fs-lg);
  line-height: var(--fmstr-cmp-survey-previews-lh-lg);
  color: var(--fmstr-cmp-survey-previews-fg-2);
  margin: 0;
}

.fmstr-cmp-survey-previews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fmstr-cmp-survey-previews-space-5);
}

.fmstr-cmp-survey-previews__col {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-survey-previews-space-4);
}

.fmstr-cmp-survey-previews__card {
  background: var(--fmstr-cmp-survey-previews-bg-card);
  border: 1px solid var(--fmstr-cmp-survey-previews-border);
  border-radius: var(--fmstr-cmp-survey-previews-r-2xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
}
.fmstr-cmp-survey-previews__card:hover {
  border-color: var(--fmstr-cmp-survey-previews-violet-300);
  box-shadow: var(--fmstr-cmp-survey-previews-shadow-md);
}

.fmstr-cmp-survey-previews__head {
  padding: var(--fmstr-cmp-survey-previews-space-6);
  border-bottom: 1px solid var(--fmstr-cmp-survey-previews-border);
  background: var(--fmstr-cmp-survey-previews-bg-row);
}

.fmstr-cmp-survey-previews__cat {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-survey-previews-bg-pill);
  color: var(--fmstr-cmp-survey-previews-violet-600);
  border-radius: var(--fmstr-cmp-survey-previews-r-full);
  font-size: var(--fmstr-cmp-survey-previews-fs-xs);
  font-weight: var(--fmstr-cmp-survey-previews-fw-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-survey-previews-space-3);
}

.fmstr-cmp-survey-previews__name {
  font-size: var(--fmstr-cmp-survey-previews-fs-lg);
  line-height: var(--fmstr-cmp-survey-previews-lh-lg);
  font-weight: var(--fmstr-cmp-survey-previews-fw-semibold);
  color: var(--fmstr-cmp-survey-previews-fg-1);
  margin: 0 0 var(--fmstr-cmp-survey-previews-space-3);
}

.fmstr-cmp-survey-previews__meta {
  font-size: var(--fmstr-cmp-survey-previews-fs-sm);
  line-height: 20px;
  color: var(--fmstr-cmp-survey-previews-fg-2);
  margin: 0 0 var(--fmstr-cmp-survey-previews-space-2);
}
.fmstr-cmp-survey-previews__meta b {
  color: var(--fmstr-cmp-survey-previews-fg-strong);
  font-weight: var(--fmstr-cmp-survey-previews-fw-semibold);
}

.fmstr-cmp-survey-previews__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-survey-previews-space-2);
  margin-top: var(--fmstr-cmp-survey-previews-space-3);
}
.fmstr-cmp-survey-previews__pills span {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-survey-previews-bg-chip);
  color: var(--fmstr-cmp-survey-previews-fg-strong);
  border-radius: var(--fmstr-cmp-survey-previews-r-md);
  font-size: var(--fmstr-cmp-survey-previews-fs-xs);
  font-weight: var(--fmstr-cmp-survey-previews-fw-semibold);
}

.fmstr-cmp-survey-previews__body {
  padding: var(--fmstr-cmp-survey-previews-space-5) var(--fmstr-cmp-survey-previews-space-6);
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-survey-previews-space-3);
  max-height: 340px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--fmstr-cmp-survey-previews-border) transparent;
}
.fmstr-cmp-survey-previews__body::-webkit-scrollbar {
  width: 6px;
}
.fmstr-cmp-survey-previews__body::-webkit-scrollbar-track {
  background: transparent;
}
.fmstr-cmp-survey-previews__body::-webkit-scrollbar-thumb {
  background: var(--fmstr-cmp-survey-previews-border);
  border-radius: var(--fmstr-cmp-survey-previews-r-full);
}

.fmstr-cmp-survey-previews__qa {
  padding-bottom: var(--fmstr-cmp-survey-previews-space-3);
  border-bottom: 1px dashed var(--fmstr-cmp-survey-previews-border);
}
.fmstr-cmp-survey-previews__qa:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.fmstr-cmp-survey-previews__qn {
  font-size: var(--fmstr-cmp-survey-previews-fs-xs);
  font-weight: var(--fmstr-cmp-survey-previews-fw-bold);
  letter-spacing: 0.06em;
  color: var(--fmstr-cmp-survey-previews-violet-600);
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-survey-previews-space-1);
}

.fmstr-cmp-survey-previews__qt {
  font-size: var(--fmstr-cmp-survey-previews-fs-sm);
  line-height: 20px;
  color: var(--fmstr-cmp-survey-previews-fg-1);
  font-weight: var(--fmstr-cmp-survey-previews-fw-semibold);
}

.fmstr-cmp-survey-previews__foot {
  padding: var(--fmstr-cmp-survey-previews-space-4) var(--fmstr-cmp-survey-previews-space-6);
  border-top: 1px solid var(--fmstr-cmp-survey-previews-border);
  background: var(--fmstr-cmp-survey-previews-bg-row);
  font-size: var(--fmstr-cmp-survey-previews-fs-xs);
  color: var(--fmstr-cmp-survey-previews-fg-3);
  font-weight: var(--fmstr-cmp-survey-previews-fw-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.fmstr-cmp-survey-previews__cta {
  text-align: center;
  color: var(--fmstr-cmp-survey-previews-violet-600);
  font-weight: var(--fmstr-cmp-survey-previews-fw-semibold);
  font-size: var(--fmstr-cmp-survey-previews-fs-sm);
  text-decoration: none;
  padding: var(--fmstr-cmp-survey-previews-space-3);
  border-radius: var(--fmstr-cmp-survey-previews-r-md);
}
.fmstr-cmp-survey-previews__cta:hover {
  background: var(--fmstr-cmp-survey-previews-bg-tint);
}

@media (max-width: 960px) {
  .fmstr-cmp-survey-previews__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-survey-previews {
    padding: var(--fmstr-cmp-survey-previews-space-12) var(--fmstr-cmp-survey-previews-space-4);
  }
  .fmstr-cmp-survey-previews__title {
    font-size: var(--fmstr-cmp-survey-previews-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-survey-previews__intro {
    font-size: var(--fmstr-cmp-survey-previews-fs-md);
    line-height: var(--fmstr-cmp-survey-previews-lh-md);
  }
}

.fmstr-cmp-attributes {
  --fmstr-cmp-attributes-bg: #f9fafb;
  --fmstr-cmp-attributes-bg-card: #ffffff;
  --fmstr-cmp-attributes-bg-tint: #f7f3ff;
  --fmstr-cmp-attributes-bg-pill: #f4ebff;
  --fmstr-cmp-attributes-bg-chip: #f2f4f7;
  --fmstr-cmp-attributes-fg-1: #101828;
  --fmstr-cmp-attributes-fg-2: #475467;
  --fmstr-cmp-attributes-fg-3: #697586;
  --fmstr-cmp-attributes-fg-strong: #344054;
  --fmstr-cmp-attributes-violet-600: #6941c6;
  --fmstr-cmp-attributes-border: #eaecf0;
  --fmstr-cmp-attributes-fs-xs: 12px;
  --fmstr-cmp-attributes-fs-sm: 14px;
  --fmstr-cmp-attributes-fs-md: 16px;
  --fmstr-cmp-attributes-fs-lg: 18px;
  --fmstr-cmp-attributes-fs-2xl: 24px;
  --fmstr-cmp-attributes-fs-3xl: 36px;
  --fmstr-cmp-attributes-lh-md: 24px;
  --fmstr-cmp-attributes-lh-lg: 28px;
  --fmstr-cmp-attributes-fw-semibold: 600;
  --fmstr-cmp-attributes-fw-bold: 700;
  --fmstr-cmp-attributes-space-2: 8px;
  --fmstr-cmp-attributes-space-3: 12px;
  --fmstr-cmp-attributes-space-4: 16px;
  --fmstr-cmp-attributes-space-5: 20px;
  --fmstr-cmp-attributes-space-6: 24px;
  --fmstr-cmp-attributes-space-8: 32px;
  --fmstr-cmp-attributes-space-10: 40px;
  --fmstr-cmp-attributes-space-12: 48px;
  --fmstr-cmp-attributes-space-16: 64px;
  --fmstr-cmp-attributes-r-md: 6px;
  --fmstr-cmp-attributes-r-lg: 8px;
  --fmstr-cmp-attributes-r-2xl: 16px;
  --fmstr-cmp-attributes-r-full: 9999px;

  background: var(--fmstr-cmp-attributes-bg);
  padding: var(--fmstr-cmp-attributes-space-16) var(--fmstr-cmp-attributes-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-attributes *,
.fmstr-cmp-attributes *::before,
.fmstr-cmp-attributes *::after {
  box-sizing: border-box;
}

.fmstr-cmp-attributes__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-attributes__header {
  margin: 0 auto var(--fmstr-cmp-attributes-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-attributes__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-attributes-space-2) var(--fmstr-cmp-attributes-space-4);
  background: var(--fmstr-cmp-attributes-bg-pill);
  color: var(--fmstr-cmp-attributes-violet-600);
  border-radius: var(--fmstr-cmp-attributes-r-full);
  font-size: var(--fmstr-cmp-attributes-fs-xs);
  font-weight: var(--fmstr-cmp-attributes-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-attributes-space-4);
}

.fmstr-cmp-attributes__title {
  font-size: var(--fmstr-cmp-attributes-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-attributes-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-attributes-fg-1);
  margin: 0 0 var(--fmstr-cmp-attributes-space-3);
}

.fmstr-cmp-attributes__intro {
  font-size: var(--fmstr-cmp-attributes-fs-lg);
  line-height: var(--fmstr-cmp-attributes-lh-lg);
  color: var(--fmstr-cmp-attributes-fg-2);
  margin: 0;
}

.fmstr-cmp-attributes__rows {
  background: var(--fmstr-cmp-attributes-bg-card);
  border: 1px solid var(--fmstr-cmp-attributes-border);
  border-radius: var(--fmstr-cmp-attributes-r-2xl);
  overflow: hidden;
}

.fmstr-cmp-attributes__row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--fmstr-cmp-attributes-space-8);
  padding: var(--fmstr-cmp-attributes-space-8);
  border-bottom: 1px solid var(--fmstr-cmp-attributes-border);
  align-items: start;
}
.fmstr-cmp-attributes__row:last-child {
  border-bottom: none;
}

.fmstr-cmp-attributes__label {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-attributes-space-3);
}

.fmstr-cmp-attributes__tile {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-attributes-r-lg);
  background: var(--fmstr-cmp-attributes-bg-tint);
  color: var(--fmstr-cmp-attributes-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.fmstr-cmp-attributes__label-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fmstr-cmp-attributes__label-text strong {
  font-size: var(--fmstr-cmp-attributes-fs-md);
  font-weight: var(--fmstr-cmp-attributes-fw-semibold);
  color: var(--fmstr-cmp-attributes-fg-1);
}
.fmstr-cmp-attributes__label-text span {
  font-size: var(--fmstr-cmp-attributes-fs-sm);
  color: var(--fmstr-cmp-attributes-fg-3);
}

.fmstr-cmp-attributes__value p {
  font-size: var(--fmstr-cmp-attributes-fs-md);
  line-height: var(--fmstr-cmp-attributes-lh-md);
  color: var(--fmstr-cmp-attributes-fg-2);
  margin: 0 0 var(--fmstr-cmp-attributes-space-4);
}

.fmstr-cmp-attributes__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-attributes-space-2);
}

.fmstr-cmp-attributes__chip {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-attributes-bg-chip);
  color: var(--fmstr-cmp-attributes-fg-strong);
  border-radius: var(--fmstr-cmp-attributes-r-md);
  font-size: var(--fmstr-cmp-attributes-fs-sm);
  font-weight: var(--fmstr-cmp-attributes-fw-semibold);
  line-height: 20px;
}

@media (max-width: 760px) {
  .fmstr-cmp-attributes {
    padding: var(--fmstr-cmp-attributes-space-12) var(--fmstr-cmp-attributes-space-4);
  }
  .fmstr-cmp-attributes__title {
    font-size: var(--fmstr-cmp-attributes-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-attributes__intro {
    font-size: var(--fmstr-cmp-attributes-fs-md);
    line-height: var(--fmstr-cmp-attributes-lh-md);
  }
  .fmstr-cmp-attributes__row {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-attributes-space-4);
    padding: var(--fmstr-cmp-attributes-space-6);
  }
}

.fmstr-cmp-asg-quality-control {
  --fmstr-cmp-asg-quality-control-bg-section: #0f0921;
  --fmstr-cmp-asg-quality-control-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-asg-quality-control-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-asg-quality-control-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-asg-quality-control-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-asg-quality-control-bg-row: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-asg-quality-control-fg-eyebrow: #bda6ff;
  --fmstr-cmp-asg-quality-control-fg-row: rgba(255, 255, 255, 0.85);
  --fmstr-cmp-asg-quality-control-fg-row-tag: #bda6ff;
  --fmstr-cmp-asg-quality-control-fs-xs: 12px;
  --fmstr-cmp-asg-quality-control-fs-sm: 14px;
  --fmstr-cmp-asg-quality-control-fs-md: 16px;
  --fmstr-cmp-asg-quality-control-fs-lg: 18px;
  --fmstr-cmp-asg-quality-control-fs-2xl: 24px;
  --fmstr-cmp-asg-quality-control-fs-3xl: 32px;
  --fmstr-cmp-asg-quality-control-fw-bold: 700;
  --fmstr-cmp-asg-quality-control-lh-md: 24px;
  --fmstr-cmp-asg-quality-control-lh-lg: 28px;
  --fmstr-cmp-asg-quality-control-lh-2xl: 32px;
  --fmstr-cmp-asg-quality-control-space-2: 8px;
  --fmstr-cmp-asg-quality-control-space-3: 12px;
  --fmstr-cmp-asg-quality-control-space-4: 16px;
  --fmstr-cmp-asg-quality-control-space-5: 20px;
  --fmstr-cmp-asg-quality-control-space-6: 24px;
  --fmstr-cmp-asg-quality-control-space-7: 28px;
  --fmstr-cmp-asg-quality-control-space-8: 32px;
  --fmstr-cmp-asg-quality-control-space-12: 48px;
  --fmstr-cmp-asg-quality-control-r-md: 8px;
  --fmstr-cmp-asg-quality-control-r-2xl: 16px;
  --fmstr-cmp-asg-quality-control-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-asg-quality-control-space-12) var(--fmstr-cmp-asg-quality-control-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-asg-quality-control *,
.fmstr-cmp-asg-quality-control *::before,
.fmstr-cmp-asg-quality-control *::after {
  box-sizing: border-box;
}

.fmstr-cmp-asg-quality-control__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-asg-quality-control-bg-section);
  background-image: var(--fmstr-cmp-asg-quality-control-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-asg-quality-control-space-12);
  overflow: hidden;
}

.fmstr-cmp-asg-quality-control__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-asg-quality-control-space-12);
  align-items: center;
}

.fmstr-cmp-asg-quality-control__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-asg-quality-control-space-2) var(--fmstr-cmp-asg-quality-control-space-4);
  background: var(--fmstr-cmp-asg-quality-control-bg-pill);
  color: var(--fmstr-cmp-asg-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-asg-quality-control-r-full);
  font-size: var(--fmstr-cmp-asg-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-asg-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-asg-quality-control-space-5);
}

.fmstr-cmp-asg-quality-control__heading {
  font-size: var(--fmstr-cmp-asg-quality-control-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-asg-quality-control-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-asg-quality-control-space-6);
}

.fmstr-cmp-asg-quality-control__body p {
  font-size: var(--fmstr-cmp-asg-quality-control-fs-md);
  line-height: var(--fmstr-cmp-asg-quality-control-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-asg-quality-control-space-4);
}
.fmstr-cmp-asg-quality-control__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-asg-quality-control__card {
  background-color: var(--fmstr-cmp-asg-quality-control-bg-card);
  background-image: var(--fmstr-cmp-asg-quality-control-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-asg-quality-control-r-2xl);
  padding: var(--fmstr-cmp-asg-quality-control-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-asg-quality-control__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-asg-quality-control-space-2) var(--fmstr-cmp-asg-quality-control-space-4);
  background: var(--fmstr-cmp-asg-quality-control-bg-pill);
  color: var(--fmstr-cmp-asg-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-asg-quality-control-r-full);
  font-size: var(--fmstr-cmp-asg-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-asg-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-asg-quality-control-space-5);
}

.fmstr-cmp-asg-quality-control__card-title {
  font-size: var(--fmstr-cmp-asg-quality-control-fs-lg);
  line-height: var(--fmstr-cmp-asg-quality-control-lh-lg);
  font-weight: var(--fmstr-cmp-asg-quality-control-fw-bold);
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-asg-quality-control-space-5);
}

.fmstr-cmp-asg-quality-control__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-asg-quality-control-space-2);
}

.fmstr-cmp-asg-quality-control__item {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-asg-quality-control-space-3);
  padding: var(--fmstr-cmp-asg-quality-control-space-3) var(--fmstr-cmp-asg-quality-control-space-4);
  background: var(--fmstr-cmp-asg-quality-control-bg-row);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--fmstr-cmp-asg-quality-control-r-md);
}

.fmstr-cmp-asg-quality-control__check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--fmstr-cmp-asg-quality-control-fg-row-tag);
  margin-top: 2px;
}

.fmstr-cmp-asg-quality-control__item-text {
  font-size: var(--fmstr-cmp-asg-quality-control-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-asg-quality-control-fg-row);
}
.fmstr-cmp-asg-quality-control__item-text strong {
  color: #ffffff;
  font-weight: var(--fmstr-cmp-asg-quality-control-fw-bold);
}

@media (max-width: 760px) {
  .fmstr-cmp-asg-quality-control {
    padding: var(--fmstr-cmp-asg-quality-control-space-8) var(--fmstr-cmp-asg-quality-control-space-4);
  }
  .fmstr-cmp-asg-quality-control__container {
    padding: var(--fmstr-cmp-asg-quality-control-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-asg-quality-control__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-asg-quality-control-space-8);
  }
  .fmstr-cmp-asg-quality-control__heading {
    font-size: var(--fmstr-cmp-asg-quality-control-fs-2xl);
    line-height: var(--fmstr-cmp-asg-quality-control-lh-2xl);
  }
  .fmstr-cmp-asg-quality-control__card {
    padding: var(--fmstr-cmp-asg-quality-control-space-6);
  }
}

.fmstr-cmp-comparison-table {
  --fmstr-cmp-comparison-table-bg: #f9fafb;
  --fmstr-cmp-comparison-table-bg-card: #ffffff;
  --fmstr-cmp-comparison-table-bg-row: #fcfcfd;
  --fmstr-cmp-comparison-table-bg-tint: #f7f3ff;
  --fmstr-cmp-comparison-table-bg-pill: #f4ebff;
  --fmstr-cmp-comparison-table-fg-1: #101828;
  --fmstr-cmp-comparison-table-fg-2: #475467;
  --fmstr-cmp-comparison-table-fg-3: #697586;
  --fmstr-cmp-comparison-table-fg-strong: #344054;
  --fmstr-cmp-comparison-table-violet-500: #7f56d9;
  --fmstr-cmp-comparison-table-violet-600: #6941c6;
  --fmstr-cmp-comparison-table-border: #eaecf0;
  --fmstr-cmp-comparison-table-fs-xs: 12px;
  --fmstr-cmp-comparison-table-fs-sm: 14px;
  --fmstr-cmp-comparison-table-fs-md: 16px;
  --fmstr-cmp-comparison-table-fs-lg: 18px;
  --fmstr-cmp-comparison-table-fs-2xl: 24px;
  --fmstr-cmp-comparison-table-fs-3xl: 36px;
  --fmstr-cmp-comparison-table-lh-md: 24px;
  --fmstr-cmp-comparison-table-lh-lg: 28px;
  --fmstr-cmp-comparison-table-fw-semibold: 600;
  --fmstr-cmp-comparison-table-fw-bold: 700;
  --fmstr-cmp-comparison-table-space-2: 8px;
  --fmstr-cmp-comparison-table-space-3: 12px;
  --fmstr-cmp-comparison-table-space-4: 16px;
  --fmstr-cmp-comparison-table-space-5: 20px;
  --fmstr-cmp-comparison-table-space-6: 24px;
  --fmstr-cmp-comparison-table-space-8: 32px;
  --fmstr-cmp-comparison-table-space-10: 40px;
  --fmstr-cmp-comparison-table-space-12: 48px;
  --fmstr-cmp-comparison-table-space-16: 64px;
  --fmstr-cmp-comparison-table-r-2xl: 16px;
  --fmstr-cmp-comparison-table-r-full: 9999px;

  background: var(--fmstr-cmp-comparison-table-bg);
  padding: var(--fmstr-cmp-comparison-table-space-16) var(--fmstr-cmp-comparison-table-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-comparison-table *,
.fmstr-cmp-comparison-table *::before,
.fmstr-cmp-comparison-table *::after {
  box-sizing: border-box;
}

.fmstr-cmp-comparison-table__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-comparison-table__header {
  margin: 0 auto var(--fmstr-cmp-comparison-table-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-comparison-table__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-comparison-table-space-2) var(--fmstr-cmp-comparison-table-space-4);
  background: var(--fmstr-cmp-comparison-table-bg-pill);
  color: var(--fmstr-cmp-comparison-table-violet-600);
  border-radius: var(--fmstr-cmp-comparison-table-r-full);
  font-size: var(--fmstr-cmp-comparison-table-fs-xs);
  font-weight: var(--fmstr-cmp-comparison-table-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-comparison-table-space-4);
}

.fmstr-cmp-comparison-table__title {
  font-size: var(--fmstr-cmp-comparison-table-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-comparison-table-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-comparison-table-fg-1);
  margin: 0 0 var(--fmstr-cmp-comparison-table-space-3);
}

.fmstr-cmp-comparison-table__intro {
  font-size: var(--fmstr-cmp-comparison-table-fs-lg);
  line-height: var(--fmstr-cmp-comparison-table-lh-lg);
  color: var(--fmstr-cmp-comparison-table-fg-2);
  margin: 0;
}

.fmstr-cmp-comparison-table__wrap {
  background: var(--fmstr-cmp-comparison-table-bg-card);
  border: 1px solid var(--fmstr-cmp-comparison-table-border);
  border-radius: var(--fmstr-cmp-comparison-table-r-2xl);
  overflow: hidden;
}

.fmstr-cmp-comparison-table__scroll {
  overflow-x: auto;
}

.fmstr-cmp-comparison-table__table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

.fmstr-cmp-comparison-table__table th,
.fmstr-cmp-comparison-table__table td {
  text-align: left;
  padding: var(--fmstr-cmp-comparison-table-space-5) var(--fmstr-cmp-comparison-table-space-6);
  vertical-align: top;
  border-bottom: 1px solid var(--fmstr-cmp-comparison-table-border);
  font-size: var(--fmstr-cmp-comparison-table-fs-md);
  line-height: var(--fmstr-cmp-comparison-table-lh-md);
  color: var(--fmstr-cmp-comparison-table-fg-2);
}

.fmstr-cmp-comparison-table__table tbody tr:last-child td {
  border-bottom: none;
}

.fmstr-cmp-comparison-table__table thead th {
  background: var(--fmstr-cmp-comparison-table-bg-row);
  font-size: var(--fmstr-cmp-comparison-table-fs-sm);
  font-weight: var(--fmstr-cmp-comparison-table-fw-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fmstr-cmp-comparison-table-fg-strong);
  border-bottom: 1px solid var(--fmstr-cmp-comparison-table-border);
}

.fmstr-cmp-comparison-table__th-us {
  background: var(--fmstr-cmp-comparison-table-bg-tint) !important;
  color: var(--fmstr-cmp-comparison-table-violet-600) !important;
}

.fmstr-cmp-comparison-table__row-label {
  font-weight: var(--fmstr-cmp-comparison-table-fw-semibold);
  color: var(--fmstr-cmp-comparison-table-fg-1);
  width: 28%;
}

.fmstr-cmp-comparison-table__cell-us {
  background: rgba(127, 86, 217, 0.04);
  color: var(--fmstr-cmp-comparison-table-fg-1);
  font-weight: var(--fmstr-cmp-comparison-table-fw-semibold);
}

.fmstr-cmp-comparison-table__caption {
  text-align: center;
  margin: var(--fmstr-cmp-comparison-table-space-6) 0 0;
  font-size: var(--fmstr-cmp-comparison-table-fs-md);
  line-height: var(--fmstr-cmp-comparison-table-lh-md);
  color: var(--fmstr-cmp-comparison-table-fg-3);
  font-style: italic;
}

@media (max-width: 760px) {
  .fmstr-cmp-comparison-table {
    padding: var(--fmstr-cmp-comparison-table-space-12) var(--fmstr-cmp-comparison-table-space-4);
  }
  .fmstr-cmp-comparison-table__title {
    font-size: var(--fmstr-cmp-comparison-table-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-comparison-table__intro {
    font-size: var(--fmstr-cmp-comparison-table-fs-md);
    line-height: var(--fmstr-cmp-comparison-table-lh-md);
  }
  .fmstr-cmp-comparison-table__table th,
  .fmstr-cmp-comparison-table__table td {
    padding: var(--fmstr-cmp-comparison-table-space-4);
    font-size: var(--fmstr-cmp-comparison-table-fs-sm);
    line-height: 20px;
  }
}

.fmstr-cmp-benefits {
  --fmstr-cmp-benefits-bg-card: #ffffff;
  --fmstr-cmp-benefits-bg-pill: #f4ebff;
  --fmstr-cmp-benefits-fg-1: #101828;
  --fmstr-cmp-benefits-fg-2: #475467;
  --fmstr-cmp-benefits-fg-3: #697586;
  --fmstr-cmp-benefits-violet-600: #6941c6;
  --fmstr-cmp-benefits-border-light: #eaecf0;
  --fmstr-cmp-benefits-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-benefits-shadow-tile: 0 4px 10px -2px rgba(16, 24, 40, 0.15);
  --fmstr-cmp-benefits-fs-xs: 12px;
  --fmstr-cmp-benefits-fs-sm: 14px;
  --fmstr-cmp-benefits-fs-md: 16px;
  --fmstr-cmp-benefits-fs-lg: 18px;
  --fmstr-cmp-benefits-fs-2xl: 24px;
  --fmstr-cmp-benefits-fs-3xl: 36px;
  --fmstr-cmp-benefits-fw-semibold: 600;
  --fmstr-cmp-benefits-fw-bold: 700;
  --fmstr-cmp-benefits-lh-md: 24px;
  --fmstr-cmp-benefits-lh-lg: 28px;
  --fmstr-cmp-benefits-lh-2xl: 32px;
  --fmstr-cmp-benefits-space-1: 4px;
  --fmstr-cmp-benefits-space-2: 8px;
  --fmstr-cmp-benefits-space-3: 12px;
  --fmstr-cmp-benefits-space-4: 16px;
  --fmstr-cmp-benefits-space-6: 24px;
  --fmstr-cmp-benefits-space-8: 32px;
  --fmstr-cmp-benefits-space-10: 40px;
  --fmstr-cmp-benefits-space-12: 48px;
  --fmstr-cmp-benefits-space-16: 64px;
  --fmstr-cmp-benefits-r-lg: 12px;
  --fmstr-cmp-benefits-r-2xl: 16px;
  --fmstr-cmp-benefits-r-full: 9999px;
  padding: var(--fmstr-cmp-benefits-space-16) var(--fmstr-cmp-benefits-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-benefits *,
.fmstr-cmp-benefits *::before,
.fmstr-cmp-benefits *::after {
  box-sizing: border-box;
}

.fmstr-cmp-benefits__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-benefits__header {
  margin: 0 auto var(--fmstr-cmp-benefits-space-12);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-benefits__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-benefits-space-1) var(--fmstr-cmp-benefits-space-3);
  background: var(--fmstr-cmp-benefits-bg-pill);
  color: var(--fmstr-cmp-benefits-violet-600);
  border-radius: var(--fmstr-cmp-benefits-r-full);
  font-size: var(--fmstr-cmp-benefits-fs-xs);
  font-weight: var(--fmstr-cmp-benefits-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-benefits-space-4);
}

.fmstr-cmp-benefits__heading {
  font-size: var(--fmstr-cmp-benefits-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-benefits-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-benefits-fg-1);
  margin: 0 0 var(--fmstr-cmp-benefits-space-3);
}

.fmstr-cmp-benefits__sub {
  font-size: var(--fmstr-cmp-benefits-fs-md);
  line-height: var(--fmstr-cmp-benefits-lh-md);
  color: var(--fmstr-cmp-benefits-fg-3);
  margin: 0;
}

.fmstr-cmp-benefits__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-benefits-space-6);
}

.fmstr-cmp-benefits__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-benefits-space-4);
  padding: var(--fmstr-cmp-benefits-space-8);
  background: var(--fmstr-cmp-benefits-bg-card);
  border: 1px solid var(--fmstr-cmp-benefits-border-light);
  border-radius: var(--fmstr-cmp-benefits-r-2xl);
  box-shadow: var(--fmstr-cmp-benefits-shadow-xs);
}

.fmstr-cmp-benefits__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-benefits-r-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: var(--fmstr-cmp-benefits-shadow-tile);
}
.fmstr-cmp-benefits__icon--blue {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
.fmstr-cmp-benefits__icon--violet {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}
.fmstr-cmp-benefits__icon--rose {
  background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
}

.fmstr-cmp-benefits__title {
  font-size: var(--fmstr-cmp-benefits-fs-lg);
  line-height: var(--fmstr-cmp-benefits-lh-lg);
  font-weight: var(--fmstr-cmp-benefits-fw-bold);
  color: var(--fmstr-cmp-benefits-fg-1);
  margin: 0;
}

.fmstr-cmp-benefits__body {
  font-size: var(--fmstr-cmp-benefits-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-benefits-fg-2);
  margin: 0;
}

@media (max-width: 1100px) {
  .fmstr-cmp-benefits__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-benefits {
    padding: var(--fmstr-cmp-benefits-space-12) var(--fmstr-cmp-benefits-space-4);
  }
  .fmstr-cmp-benefits__heading {
    font-size: var(--fmstr-cmp-benefits-fs-2xl);
    line-height: var(--fmstr-cmp-benefits-lh-2xl);
  }
  .fmstr-cmp-benefits__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-persona-grid {
  --fmstr-cmp-persona-grid-bg-tint: #f7f3ff;
  --fmstr-cmp-persona-grid-bg-pill: #f4ebff;
  --fmstr-cmp-persona-grid-fg-1: #101828;
  --fmstr-cmp-persona-grid-fg-2: #475467;
  --fmstr-cmp-persona-grid-violet-500: #7f56d9;
  --fmstr-cmp-persona-grid-violet-600: #6941c6;
  --fmstr-cmp-persona-grid-violet-300: #9777e0;
  --fmstr-cmp-persona-grid-border: #eaecf0;
  --fmstr-cmp-persona-grid-fs-xs: 12px;
  --fmstr-cmp-persona-grid-fs-sm: 14px;
  --fmstr-cmp-persona-grid-fs-md: 16px;
  --fmstr-cmp-persona-grid-fs-lg: 18px;
  --fmstr-cmp-persona-grid-fs-xl: 20px;
  --fmstr-cmp-persona-grid-fs-2xl: 24px;
  --fmstr-cmp-persona-grid-fs-3xl: 36px;
  --fmstr-cmp-persona-grid-lh-md: 24px;
  --fmstr-cmp-persona-grid-lh-lg: 28px;
  --fmstr-cmp-persona-grid-lh-xl: 30px;
  --fmstr-cmp-persona-grid-fw-semibold: 600;
  --fmstr-cmp-persona-grid-fw-bold: 700;
  --fmstr-cmp-persona-grid-space-2: 8px;
  --fmstr-cmp-persona-grid-space-3: 12px;
  --fmstr-cmp-persona-grid-space-4: 16px;
  --fmstr-cmp-persona-grid-space-5: 20px;
  --fmstr-cmp-persona-grid-space-6: 24px;
  --fmstr-cmp-persona-grid-space-8: 32px;
  --fmstr-cmp-persona-grid-space-10: 40px;
  --fmstr-cmp-persona-grid-space-12: 48px;
  --fmstr-cmp-persona-grid-space-16: 64px;
  --fmstr-cmp-persona-grid-r-lg: 8px;
  --fmstr-cmp-persona-grid-r-2xl: 16px;
  --fmstr-cmp-persona-grid-r-full: 9999px;
  --fmstr-cmp-persona-grid-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: var(--fmstr-cmp-persona-grid-space-16) var(--fmstr-cmp-persona-grid-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-persona-grid *,
.fmstr-cmp-persona-grid *::before,
.fmstr-cmp-persona-grid *::after {
  box-sizing: border-box;
}

.fmstr-cmp-persona-grid__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-persona-grid__header {
  margin: 0 auto var(--fmstr-cmp-persona-grid-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-persona-grid__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-persona-grid-space-2) var(--fmstr-cmp-persona-grid-space-4);
  background: var(--fmstr-cmp-persona-grid-bg-pill);
  color: var(--fmstr-cmp-persona-grid-violet-600);
  border-radius: var(--fmstr-cmp-persona-grid-r-full);
  font-size: var(--fmstr-cmp-persona-grid-fs-xs);
  font-weight: var(--fmstr-cmp-persona-grid-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-persona-grid-space-4);
}

.fmstr-cmp-persona-grid__title {
  font-size: var(--fmstr-cmp-persona-grid-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-persona-grid-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-persona-grid-fg-1);
  margin: 0 0 var(--fmstr-cmp-persona-grid-space-3);
}

.fmstr-cmp-persona-grid__intro {
  font-size: var(--fmstr-cmp-persona-grid-fs-lg);
  line-height: var(--fmstr-cmp-persona-grid-lh-lg);
  color: var(--fmstr-cmp-persona-grid-fg-2);
  margin: 0;
}

.fmstr-cmp-persona-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fmstr-cmp-persona-grid-space-4);
}

.fmstr-cmp-persona-grid__card {
  background: var(--fmstr-cmp-persona-grid-bg);
  border: 1px solid var(--fmstr-cmp-persona-grid-border);
  border-radius: var(--fmstr-cmp-persona-grid-r-2xl);
  padding: var(--fmstr-cmp-persona-grid-space-6);
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}

.fmstr-cmp-persona-grid__card:hover {
  border-color: var(--fmstr-cmp-persona-grid-violet-300);
  box-shadow: var(--fmstr-cmp-persona-grid-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-persona-grid__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-persona-grid-r-lg);
  background: var(--fmstr-cmp-persona-grid-bg-tint);
  color: var(--fmstr-cmp-persona-grid-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fmstr-cmp-persona-grid-space-4);
}

.fmstr-cmp-persona-grid__heading {
  font-size: var(--fmstr-cmp-persona-grid-fs-xl);
  line-height: var(--fmstr-cmp-persona-grid-lh-xl);
  font-weight: var(--fmstr-cmp-persona-grid-fw-semibold);
  letter-spacing: -0.01em;
  color: var(--fmstr-cmp-persona-grid-fg-1);
  margin: 0 0 var(--fmstr-cmp-persona-grid-space-3);
}

.fmstr-cmp-persona-grid__body {
  font-size: var(--fmstr-cmp-persona-grid-fs-md);
  line-height: var(--fmstr-cmp-persona-grid-lh-md);
  color: var(--fmstr-cmp-persona-grid-fg-2);
  margin: 0 0 var(--fmstr-cmp-persona-grid-space-5);
  flex: 1 1 auto;
}

.fmstr-cmp-persona-grid__link {
  color: var(--fmstr-cmp-persona-grid-violet-600);
  font-size: var(--fmstr-cmp-persona-grid-fs-sm);
  font-weight: var(--fmstr-cmp-persona-grid-fw-semibold);
  text-decoration: none;
  margin-top: auto;
}
.fmstr-cmp-persona-grid__link:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .fmstr-cmp-persona-grid__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-persona-grid {
    padding: var(--fmstr-cmp-persona-grid-space-12) var(--fmstr-cmp-persona-grid-space-4);
  }
  .fmstr-cmp-persona-grid__title {
    font-size: var(--fmstr-cmp-persona-grid-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-persona-grid__intro {
    font-size: var(--fmstr-cmp-persona-grid-fs-md);
    line-height: var(--fmstr-cmp-persona-grid-lh-md);
  }
  .fmstr-cmp-persona-grid__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-templates-grid {
  --fmstr-cmp-templates-grid-bg-card: #ffffff;
  --fmstr-cmp-templates-grid-bg-tint: #f7f3ff;
  --fmstr-cmp-templates-grid-bg-pill: #f4ebff;
  --fmstr-cmp-templates-grid-fg-1: #101828;
  --fmstr-cmp-templates-grid-fg-2: #475467;
  --fmstr-cmp-templates-grid-violet-500: #7f56d9;
  --fmstr-cmp-templates-grid-violet-600: #6941c6;
  --fmstr-cmp-templates-grid-violet-300: #9777e0;
  --fmstr-cmp-templates-grid-border: #eaecf0;
  --fmstr-cmp-templates-grid-fs-xs: 12px;
  --fmstr-cmp-templates-grid-fs-sm: 14px;
  --fmstr-cmp-templates-grid-fs-md: 16px;
  --fmstr-cmp-templates-grid-fs-lg: 18px;
  --fmstr-cmp-templates-grid-fs-2xl: 24px;
  --fmstr-cmp-templates-grid-fs-3xl: 36px;
  --fmstr-cmp-templates-grid-lh-md: 24px;
  --fmstr-cmp-templates-grid-lh-lg: 28px;
  --fmstr-cmp-templates-grid-fw-semibold: 600;
  --fmstr-cmp-templates-grid-fw-bold: 700;
  --fmstr-cmp-templates-grid-space-2: 8px;
  --fmstr-cmp-templates-grid-space-3: 12px;
  --fmstr-cmp-templates-grid-space-4: 16px;
  --fmstr-cmp-templates-grid-space-5: 20px;
  --fmstr-cmp-templates-grid-space-6: 24px;
  --fmstr-cmp-templates-grid-space-8: 32px;
  --fmstr-cmp-templates-grid-space-10: 40px;
  --fmstr-cmp-templates-grid-space-12: 48px;
  --fmstr-cmp-templates-grid-space-16: 64px;
  --fmstr-cmp-templates-grid-r-lg: 8px;
  --fmstr-cmp-templates-grid-r-2xl: 16px;
  --fmstr-cmp-templates-grid-r-full: 9999px;
  --fmstr-cmp-templates-grid-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: var(--fmstr-cmp-templates-grid-space-16) var(--fmstr-cmp-templates-grid-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-templates-grid *,
.fmstr-cmp-templates-grid *::before,
.fmstr-cmp-templates-grid *::after {
  box-sizing: border-box;
}

.fmstr-cmp-templates-grid__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-templates-grid__header {
  margin: 0 auto var(--fmstr-cmp-templates-grid-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-templates-grid__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-templates-grid-space-2) var(--fmstr-cmp-templates-grid-space-4);
  background: var(--fmstr-cmp-templates-grid-bg-pill);
  color: var(--fmstr-cmp-templates-grid-violet-600);
  border-radius: var(--fmstr-cmp-templates-grid-r-full);
  font-size: var(--fmstr-cmp-templates-grid-fs-xs);
  font-weight: var(--fmstr-cmp-templates-grid-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-templates-grid-space-4);
}

.fmstr-cmp-templates-grid__title {
  font-size: var(--fmstr-cmp-templates-grid-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-templates-grid-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-templates-grid-fg-1);
  margin: 0 0 var(--fmstr-cmp-templates-grid-space-3);
}

.fmstr-cmp-templates-grid__intro {
  font-size: var(--fmstr-cmp-templates-grid-fs-lg);
  line-height: var(--fmstr-cmp-templates-grid-lh-lg);
  color: var(--fmstr-cmp-templates-grid-fg-2);
  margin: 0;
}

.fmstr-cmp-templates-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fmstr-cmp-templates-grid-space-4);
  margin-bottom: var(--fmstr-cmp-templates-grid-space-8);
}

.fmstr-cmp-templates-grid__card {
  display: flex;
  align-items: center;
  gap: var(--fmstr-cmp-templates-grid-space-4);
  background: var(--fmstr-cmp-templates-grid-bg-card);
  border: 1px solid var(--fmstr-cmp-templates-grid-border);
  border-radius: var(--fmstr-cmp-templates-grid-r-2xl);
  padding: var(--fmstr-cmp-templates-grid-space-5);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}

.fmstr-cmp-templates-grid__card:hover {
  border-color: var(--fmstr-cmp-templates-grid-violet-300);
  box-shadow: var(--fmstr-cmp-templates-grid-shadow-md);
  transform: translateY(-1px);
}

.fmstr-cmp-templates-grid__icon {
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border-radius: var(--fmstr-cmp-templates-grid-r-lg);
  background: var(--fmstr-cmp-templates-grid-bg-tint);
  color: var(--fmstr-cmp-templates-grid-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.fmstr-cmp-templates-grid__name {
  flex: 1 1 auto;
  font-size: var(--fmstr-cmp-templates-grid-fs-md);
  font-weight: var(--fmstr-cmp-templates-grid-fw-semibold);
  color: var(--fmstr-cmp-templates-grid-fg-1);
  line-height: 22px;
}

.fmstr-cmp-templates-grid__arrow {
  color: var(--fmstr-cmp-templates-grid-violet-600);
  font-weight: var(--fmstr-cmp-templates-grid-fw-bold);
  flex: 0 0 auto;
}

.fmstr-cmp-templates-grid__footer {
  text-align: center;
}

.fmstr-cmp-templates-grid__footer a {
  color: var(--fmstr-cmp-templates-grid-violet-600);
  font-weight: var(--fmstr-cmp-templates-grid-fw-semibold);
  font-size: var(--fmstr-cmp-templates-grid-fs-md);
  text-decoration: none;
}

.fmstr-cmp-templates-grid__footer a:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .fmstr-cmp-templates-grid__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-templates-grid {
    padding: var(--fmstr-cmp-templates-grid-space-12) var(--fmstr-cmp-templates-grid-space-4);
  }

  .fmstr-cmp-templates-grid__title {
    font-size: var(--fmstr-cmp-templates-grid-fs-2xl);
    line-height: 32px;
  }

  .fmstr-cmp-templates-grid__intro {
    font-size: var(--fmstr-cmp-templates-grid-fs-md);
    line-height: var(--fmstr-cmp-templates-grid-lh-md);
  }

  .fmstr-cmp-templates-grid__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-privacy-data-trust {
  --fmstr-cmp-privacy-data-trust-bg-section: #0f0921;
  --fmstr-cmp-privacy-data-trust-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-privacy-data-trust-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-privacy-data-trust-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-privacy-data-trust-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-privacy-data-trust-fg-eyebrow: #bda6ff;
  --fmstr-cmp-privacy-data-trust-fg-link: #d9c7ff;
  --fmstr-cmp-privacy-data-trust-fg-link-hover: #ffffff;
  --fmstr-cmp-privacy-data-trust-fs-xs: 12px;
  --fmstr-cmp-privacy-data-trust-fs-sm: 14px;
  --fmstr-cmp-privacy-data-trust-fs-md: 16px;
  --fmstr-cmp-privacy-data-trust-fs-lg: 18px;
  --fmstr-cmp-privacy-data-trust-fs-2xl: 24px;
  --fmstr-cmp-privacy-data-trust-fs-3xl: 32px;
  --fmstr-cmp-privacy-data-trust-fw-semibold: 600;
  --fmstr-cmp-privacy-data-trust-fw-bold: 700;
  --fmstr-cmp-privacy-data-trust-lh-md: 24px;
  --fmstr-cmp-privacy-data-trust-lh-lg: 28px;
  --fmstr-cmp-privacy-data-trust-lh-2xl: 32px;
  --fmstr-cmp-privacy-data-trust-space-1: 4px;
  --fmstr-cmp-privacy-data-trust-space-2: 8px;
  --fmstr-cmp-privacy-data-trust-space-3: 12px;
  --fmstr-cmp-privacy-data-trust-space-4: 16px;
  --fmstr-cmp-privacy-data-trust-space-5: 20px;
  --fmstr-cmp-privacy-data-trust-space-6: 24px;
  --fmstr-cmp-privacy-data-trust-space-7: 28px;
  --fmstr-cmp-privacy-data-trust-space-8: 32px;
  --fmstr-cmp-privacy-data-trust-space-12: 48px;
  --fmstr-cmp-privacy-data-trust-space-16: 64px;
  --fmstr-cmp-privacy-data-trust-r-2xl: 16px;
  --fmstr-cmp-privacy-data-trust-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-privacy-data-trust-space-12) var(--fmstr-cmp-privacy-data-trust-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-privacy-data-trust *,
.fmstr-cmp-privacy-data-trust *::before,
.fmstr-cmp-privacy-data-trust *::after {
  box-sizing: border-box;
}

.fmstr-cmp-privacy-data-trust__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-privacy-data-trust-bg-section);
  background-image: var(--fmstr-cmp-privacy-data-trust-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-privacy-data-trust-space-12);
  overflow: hidden;
}

.fmstr-cmp-privacy-data-trust__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-privacy-data-trust-space-12);
  align-items: center;
}

.fmstr-cmp-privacy-data-trust__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-privacy-data-trust-space-2) var(--fmstr-cmp-privacy-data-trust-space-4);
  background: var(--fmstr-cmp-privacy-data-trust-bg-pill);
  color: var(--fmstr-cmp-privacy-data-trust-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-privacy-data-trust-r-full);
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-xs);
  font-weight: var(--fmstr-cmp-privacy-data-trust-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-privacy-data-trust-space-5);
}

.fmstr-cmp-privacy-data-trust__heading {
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-privacy-data-trust-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-privacy-data-trust-space-6);
}

.fmstr-cmp-privacy-data-trust__body p {
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-md);
  line-height: var(--fmstr-cmp-privacy-data-trust-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-privacy-data-trust-space-4);
}
.fmstr-cmp-privacy-data-trust__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-privacy-data-trust__card {
  background-color: var(--fmstr-cmp-privacy-data-trust-bg-card);
  background-image: var(--fmstr-cmp-privacy-data-trust-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-privacy-data-trust-r-2xl);
  padding: var(--fmstr-cmp-privacy-data-trust-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-privacy-data-trust__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-privacy-data-trust-space-2) var(--fmstr-cmp-privacy-data-trust-space-4);
  background: var(--fmstr-cmp-privacy-data-trust-bg-pill);
  color: var(--fmstr-cmp-privacy-data-trust-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-privacy-data-trust-r-full);
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-xs);
  font-weight: var(--fmstr-cmp-privacy-data-trust-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-privacy-data-trust-space-5);
}

.fmstr-cmp-privacy-data-trust__quote {
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-lg);
  line-height: var(--fmstr-cmp-privacy-data-trust-lh-lg);
  font-weight: var(--fmstr-cmp-privacy-data-trust-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-privacy-data-trust-space-5);
}

.fmstr-cmp-privacy-data-trust__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-privacy-data-trust-space-5);
}

.fmstr-cmp-privacy-data-trust__cite {
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-sm);
  line-height: var(--fmstr-cmp-privacy-data-trust-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-privacy-data-trust-space-3);
}

.fmstr-cmp-privacy-data-trust__links {
  display: flex;
  gap: var(--fmstr-cmp-privacy-data-trust-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-privacy-data-trust__links a {
  color: var(--fmstr-cmp-privacy-data-trust-fg-link);
  font-weight: var(--fmstr-cmp-privacy-data-trust-fw-semibold);
  font-size: var(--fmstr-cmp-privacy-data-trust-fs-sm);
  text-decoration: none;
}
.fmstr-cmp-privacy-data-trust__links a:hover {
  color: var(--fmstr-cmp-privacy-data-trust-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-privacy-data-trust {
    padding: var(--fmstr-cmp-privacy-data-trust-space-8) var(--fmstr-cmp-privacy-data-trust-space-4);
  }
  .fmstr-cmp-privacy-data-trust__container {
    padding: var(--fmstr-cmp-privacy-data-trust-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-privacy-data-trust__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-privacy-data-trust-space-8);
  }
  .fmstr-cmp-privacy-data-trust__heading {
    font-size: var(--fmstr-cmp-privacy-data-trust-fs-2xl);
    line-height: var(--fmstr-cmp-privacy-data-trust-lh-2xl);
  }
  .fmstr-cmp-privacy-data-trust__quote {
    font-size: var(--fmstr-cmp-privacy-data-trust-fs-md);
    line-height: var(--fmstr-cmp-privacy-data-trust-lh-md);
  }
  .fmstr-cmp-privacy-data-trust__card {
    padding: var(--fmstr-cmp-privacy-data-trust-space-6);
  }
}

.fmstr-cmp-api-mcp {
  --fmstr-cmp-api-mcp-bg: #f9fafb;
  --fmstr-cmp-api-mcp-bg-card: #ffffff;
  --fmstr-cmp-api-mcp-bg-tint: #f7f3ff;
  --fmstr-cmp-api-mcp-bg-pill: #f4ebff;
  --fmstr-cmp-api-mcp-bg-chip: #f2f4f7;
  --fmstr-cmp-api-mcp-fg-1: #101828;
  --fmstr-cmp-api-mcp-fg-2: #475467;
  --fmstr-cmp-api-mcp-fg-strong: #344054;
  --fmstr-cmp-api-mcp-violet-500: #7f56d9;
  --fmstr-cmp-api-mcp-violet-600: #6941c6;
  --fmstr-cmp-api-mcp-violet-300: #9777e0;
  --fmstr-cmp-api-mcp-border: #eaecf0;
  --fmstr-cmp-api-mcp-fs-xs: 12px;
  --fmstr-cmp-api-mcp-fs-sm: 14px;
  --fmstr-cmp-api-mcp-fs-md: 16px;
  --fmstr-cmp-api-mcp-fs-lg: 18px;
  --fmstr-cmp-api-mcp-fs-xl: 20px;
  --fmstr-cmp-api-mcp-fs-2xl: 24px;
  --fmstr-cmp-api-mcp-fs-3xl: 36px;
  --fmstr-cmp-api-mcp-lh-md: 24px;
  --fmstr-cmp-api-mcp-lh-lg: 28px;
  --fmstr-cmp-api-mcp-lh-xl: 30px;
  --fmstr-cmp-api-mcp-fw-semibold: 600;
  --fmstr-cmp-api-mcp-fw-bold: 700;
  --fmstr-cmp-api-mcp-space-2: 8px;
  --fmstr-cmp-api-mcp-space-3: 12px;
  --fmstr-cmp-api-mcp-space-4: 16px;
  --fmstr-cmp-api-mcp-space-5: 20px;
  --fmstr-cmp-api-mcp-space-6: 24px;
  --fmstr-cmp-api-mcp-space-8: 32px;
  --fmstr-cmp-api-mcp-space-10: 40px;
  --fmstr-cmp-api-mcp-space-12: 48px;
  --fmstr-cmp-api-mcp-space-16: 64px;
  --fmstr-cmp-api-mcp-r-md: 6px;
  --fmstr-cmp-api-mcp-r-lg: 8px;
  --fmstr-cmp-api-mcp-r-2xl: 16px;
  --fmstr-cmp-api-mcp-r-full: 9999px;
  --fmstr-cmp-api-mcp-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

  background: var(--fmstr-cmp-api-mcp-bg);
  padding: var(--fmstr-cmp-api-mcp-space-16) var(--fmstr-cmp-api-mcp-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-api-mcp *,
.fmstr-cmp-api-mcp *::before,
.fmstr-cmp-api-mcp *::after {
  box-sizing: border-box;
}

.fmstr-cmp-api-mcp__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-api-mcp__header {
  margin: 0 auto var(--fmstr-cmp-api-mcp-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-api-mcp__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-api-mcp-space-2) var(--fmstr-cmp-api-mcp-space-4);
  background: var(--fmstr-cmp-api-mcp-bg-pill);
  color: var(--fmstr-cmp-api-mcp-violet-600);
  border-radius: var(--fmstr-cmp-api-mcp-r-full);
  font-size: var(--fmstr-cmp-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-api-mcp-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-api-mcp-space-4);
}

.fmstr-cmp-api-mcp__title {
  font-size: var(--fmstr-cmp-api-mcp-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-api-mcp-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-api-mcp-space-3);
}

.fmstr-cmp-api-mcp__intro {
  font-size: var(--fmstr-cmp-api-mcp-fs-lg);
  line-height: var(--fmstr-cmp-api-mcp-lh-lg);
  color: var(--fmstr-cmp-api-mcp-fg-2);
  margin: 0;
}

.fmstr-cmp-api-mcp__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-api-mcp-space-5);
}

.fmstr-cmp-api-mcp__card {
  background: var(--fmstr-cmp-api-mcp-bg-card);
  border: 1px solid var(--fmstr-cmp-api-mcp-border);
  border-radius: var(--fmstr-cmp-api-mcp-r-2xl);
  padding: var(--fmstr-cmp-api-mcp-space-8);
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
}
.fmstr-cmp-api-mcp__card:hover {
  border-color: var(--fmstr-cmp-api-mcp-violet-300);
  box-shadow: var(--fmstr-cmp-api-mcp-shadow-md);
}

.fmstr-cmp-api-mcp__badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-api-mcp-violet-500);
  color: #ffffff;
  border-radius: var(--fmstr-cmp-api-mcp-r-md);
  font-size: var(--fmstr-cmp-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-api-mcp-fw-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-api-mcp-space-4);
  align-self: flex-start;
}
.fmstr-cmp-api-mcp__badge--alt {
  background: var(--fmstr-cmp-api-mcp-bg-tint);
  color: var(--fmstr-cmp-api-mcp-violet-600);
}

.fmstr-cmp-api-mcp__card-title {
  font-size: var(--fmstr-cmp-api-mcp-fs-xl);
  line-height: var(--fmstr-cmp-api-mcp-lh-xl);
  font-weight: var(--fmstr-cmp-api-mcp-fw-semibold);
  letter-spacing: -0.01em;
  color: var(--fmstr-cmp-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-api-mcp-space-4);
}

.fmstr-cmp-api-mcp__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-api-mcp-space-2);
  margin-bottom: var(--fmstr-cmp-api-mcp-space-4);
}

.fmstr-cmp-api-mcp__chip {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-api-mcp-bg-chip);
  color: var(--fmstr-cmp-api-mcp-fg-strong);
  border-radius: var(--fmstr-cmp-api-mcp-r-md);
  font-size: var(--fmstr-cmp-api-mcp-fs-sm);
  font-weight: var(--fmstr-cmp-api-mcp-fw-semibold);
  line-height: 20px;
}

.fmstr-cmp-api-mcp__body {
  font-size: var(--fmstr-cmp-api-mcp-fs-md);
  line-height: var(--fmstr-cmp-api-mcp-lh-md);
  color: var(--fmstr-cmp-api-mcp-fg-2);
  margin: 0 0 var(--fmstr-cmp-api-mcp-space-5);
  flex: 1 1 auto;
}

.fmstr-cmp-api-mcp__cta {
  color: var(--fmstr-cmp-api-mcp-violet-600);
  font-weight: var(--fmstr-cmp-api-mcp-fw-semibold);
  font-size: var(--fmstr-cmp-api-mcp-fs-sm);
  text-decoration: none;
  align-self: flex-start;
}
.fmstr-cmp-api-mcp__cta:hover {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-api-mcp {
    padding: var(--fmstr-cmp-api-mcp-space-12) var(--fmstr-cmp-api-mcp-space-4);
  }
  .fmstr-cmp-api-mcp__title {
    font-size: var(--fmstr-cmp-api-mcp-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-api-mcp__intro {
    font-size: var(--fmstr-cmp-api-mcp-fs-md);
    line-height: var(--fmstr-cmp-api-mcp-lh-md);
  }
  .fmstr-cmp-api-mcp__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-api-mcp__card {
    padding: var(--fmstr-cmp-api-mcp-space-6);
  }
}

.fmstr-cmp-cross-sell {
  --fmstr-cmp-cross-sell-bg-card: #ffffff;
  --fmstr-cmp-cross-sell-bg-tint: #f7f3ff;
  --fmstr-cmp-cross-sell-bg-pill: #f4ebff;
  --fmstr-cmp-cross-sell-fg-1: #101828;
  --fmstr-cmp-cross-sell-fg-2: #475467;
  --fmstr-cmp-cross-sell-violet-500: #7f56d9;
  --fmstr-cmp-cross-sell-violet-600: #6941c6;
  --fmstr-cmp-cross-sell-violet-300: #9777e0;
  --fmstr-cmp-cross-sell-border: #eaecf0;
  --fmstr-cmp-cross-sell-fs-xs: 12px;
  --fmstr-cmp-cross-sell-fs-sm: 14px;
  --fmstr-cmp-cross-sell-fs-md: 16px;
  --fmstr-cmp-cross-sell-fs-lg: 18px;
  --fmstr-cmp-cross-sell-fs-2xl: 24px;
  --fmstr-cmp-cross-sell-fs-3xl: 36px;
  --fmstr-cmp-cross-sell-lh-md: 24px;
  --fmstr-cmp-cross-sell-lh-lg: 28px;
  --fmstr-cmp-cross-sell-fw-semibold: 600;
  --fmstr-cmp-cross-sell-fw-bold: 700;
  --fmstr-cmp-cross-sell-space-2: 8px;
  --fmstr-cmp-cross-sell-space-3: 12px;
  --fmstr-cmp-cross-sell-space-4: 16px;
  --fmstr-cmp-cross-sell-space-5: 20px;
  --fmstr-cmp-cross-sell-space-6: 24px;
  --fmstr-cmp-cross-sell-space-8: 32px;
  --fmstr-cmp-cross-sell-space-10: 40px;
  --fmstr-cmp-cross-sell-space-12: 48px;
  --fmstr-cmp-cross-sell-space-16: 64px;
  --fmstr-cmp-cross-sell-r-lg: 8px;
  --fmstr-cmp-cross-sell-r-2xl: 16px;
  --fmstr-cmp-cross-sell-r-full: 9999px;
  --fmstr-cmp-cross-sell-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  padding: var(--fmstr-cmp-cross-sell-space-16) var(--fmstr-cmp-cross-sell-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-cross-sell *,
.fmstr-cmp-cross-sell *::before,
.fmstr-cmp-cross-sell *::after {
  box-sizing: border-box;
}

.fmstr-cmp-cross-sell__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-cross-sell__header {
  margin: 0 auto var(--fmstr-cmp-cross-sell-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-cross-sell__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-cross-sell-space-2) var(--fmstr-cmp-cross-sell-space-4);
  background: var(--fmstr-cmp-cross-sell-bg-pill);
  color: var(--fmstr-cmp-cross-sell-violet-600);
  border-radius: var(--fmstr-cmp-cross-sell-r-full);
  font-size: var(--fmstr-cmp-cross-sell-fs-xs);
  font-weight: var(--fmstr-cmp-cross-sell-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-cross-sell-space-4);
}

.fmstr-cmp-cross-sell__title {
  font-size: var(--fmstr-cmp-cross-sell-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-cross-sell-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-cross-sell-fg-1);
  margin: 0 0 var(--fmstr-cmp-cross-sell-space-3);
}

.fmstr-cmp-cross-sell__intro {
  font-size: var(--fmstr-cmp-cross-sell-fs-lg);
  line-height: var(--fmstr-cmp-cross-sell-lh-lg);
  color: var(--fmstr-cmp-cross-sell-fg-2);
  margin: 0;
}

.fmstr-cmp-cross-sell__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-cross-sell-space-4);
}

.fmstr-cmp-cross-sell__tile {
  background: var(--fmstr-cmp-cross-sell-bg-card);
  border: 1px solid var(--fmstr-cmp-cross-sell-border);
  border-radius: var(--fmstr-cmp-cross-sell-r-2xl);
  padding: var(--fmstr-cmp-cross-sell-space-6);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}
.fmstr-cmp-cross-sell__tile:hover {
  border-color: var(--fmstr-cmp-cross-sell-violet-300);
  box-shadow: var(--fmstr-cmp-cross-sell-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-cross-sell__thumb {
  width: 48px;
  height: 48px;
  border-radius: var(--fmstr-cmp-cross-sell-r-lg);
  background: var(--fmstr-cmp-cross-sell-bg-tint);
  color: var(--fmstr-cmp-cross-sell-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fmstr-cmp-cross-sell-space-5);
}

.fmstr-cmp-cross-sell__name {
  font-size: var(--fmstr-cmp-cross-sell-fs-lg);
  line-height: var(--fmstr-cmp-cross-sell-lh-lg);
  font-weight: var(--fmstr-cmp-cross-sell-fw-semibold);
  color: var(--fmstr-cmp-cross-sell-fg-1);
  margin: 0 0 var(--fmstr-cmp-cross-sell-space-3);
}

.fmstr-cmp-cross-sell__body {
  font-size: var(--fmstr-cmp-cross-sell-fs-sm);
  line-height: 20px;
  color: var(--fmstr-cmp-cross-sell-fg-2);
  margin: 0 0 var(--fmstr-cmp-cross-sell-space-4);
  flex: 1 1 auto;
}

.fmstr-cmp-cross-sell__link {
  color: var(--fmstr-cmp-cross-sell-violet-600);
  font-weight: var(--fmstr-cmp-cross-sell-fw-semibold);
  font-size: var(--fmstr-cmp-cross-sell-fs-sm);
}

@media (max-width: 960px) {
  .fmstr-cmp-cross-sell__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-cross-sell {
    padding: var(--fmstr-cmp-cross-sell-space-12) var(--fmstr-cmp-cross-sell-space-4);
  }
  .fmstr-cmp-cross-sell__title {
    font-size: var(--fmstr-cmp-cross-sell-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-cross-sell__intro {
    font-size: var(--fmstr-cmp-cross-sell-fs-md);
    line-height: var(--fmstr-cmp-cross-sell-lh-md);
  }
  .fmstr-cmp-cross-sell__grid {
    grid-template-columns: 1fr;
  }
}
</style>
