<template>
  <div>
    <AiHero
      :description="c0_description"
      type="Form"
      :hideIcons="false"
      buttonText="Generate my form"
      placeholder="Describe the form you need. Example: A customer satisfaction survey with a 5-star rating, an open feedback field, and a follow-up permission toggle"
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-afg-3ways" aria-labelledby="fmstr-cmp-afg-3ways-h2">
            <div class="fmstr-cmp-afg-3ways__container">
              <div class="fmstr-cmp-afg-3ways__header">
                <div class="fmstr-cmp-afg-3ways__eyebrow">How it works</div>
                <h2 class="fmstr-cmp-afg-3ways__h2" id="fmstr-cmp-afg-3ways-h2">
                  The 3 Ways the AI Form Generator Builds Your Form
                </h2>
                <p class="fmstr-cmp-afg-3ways__sub">
                  Pick whichever input you have. The output is the same: a live, shareable form in under 30 seconds.
                </p>
              </div>

              <div class="fmstr-cmp-afg-3ways__grid">
                <div class="fmstr-cmp-afg-3ways__card">
                  <div class="fmstr-cmp-afg-3ways__icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 7h18M3 12h18M3 17h12" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-3ways__title">Prompt</h3>
                  <p class="fmstr-cmp-afg-3ways__body">
                    Type what you need. The AI picks the question types, sets up conditional logic, and ships the form
                    ready to share.
                  </p>
                  <p class="fmstr-cmp-afg-3ways__example">
                    "Build a 7-question post-event feedback survey with rating scales and one open-ended question."
                  </p>
                </div>

                <div class="fmstr-cmp-afg-3ways__card">
                  <div class="fmstr-cmp-afg-3ways__icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="13" x2="15" y2="13" />
                      <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-3ways__title">PDF</h3>
                  <p class="fmstr-cmp-afg-3ways__body">
                    Upload a non-fillable PDF: intake form, application, consent form. The AI detects the fields,
                    recreates them as interactive inputs, and gives you a fillable URL.
                  </p>
                </div>

                <div class="fmstr-cmp-afg-3ways__card">
                  <div class="fmstr-cmp-afg-3ways__icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-3ways__title">URL or image</h3>
                  <p class="fmstr-cmp-afg-3ways__body">
                    Paste a public URL or upload a screenshot. The AI reads the structure and rebuilds it as a Formester
                    form, fields and logic intact.
                  </p>
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
          <section class="fmstr-cmp-afg-compare">
            <div class="fmstr-cmp-afg-compare__container">
              <div class="fmstr-cmp-afg-compare__header">
                <div class="fmstr-cmp-afg-compare__eyebrow">Comparison</div>
                <h2 class="fmstr-cmp-afg-compare__h2">How Formester compares to Jotform, Fillout, and Google Forms</h2>
                <p class="fmstr-cmp-afg-compare__sub">
                  The three tools most people weigh against Formester, compared on the numbers that decide it.
                </p>
              </div>
              <div class="fmstr-cmp-afg-compare__scroll">
                <table class="fmstr-cmp-afg-compare__table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">
                        <span class="fmstr-cmp-afg-compare__brand"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://formester.com&amp;size=64"
                            alt="Formester logo"
                            width="20"
                            height="20"
                            loading="lazy"
                          />Formester</span
                        >
                      </th>
                      <th scope="col">
                        <span class="fmstr-cmp-afg-compare__brand"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.jotform.com&amp;size=64"
                            alt="Jotform logo"
                            width="20"
                            height="20"
                            loading="lazy"
                          /><a
                            href="/jotform-alternative/"
                            style="
                              color: inherit !important;
                              text-decoration: underline !important;
                              text-underline-offset: 2px;
                            "
                            >Jotform</a
                          ></span
                        >
                      </th>
                      <th scope="col">
                        <span class="fmstr-cmp-afg-compare__brand"
                          ><img
                            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&amp;type=FAVICON&amp;fallback_opts=TYPE,SIZE,URL&amp;url=https://www.fillout.com&amp;size=64"
                            alt="Fillout logo"
                            width="20"
                            height="20"
                            loading="lazy"
                          /><a
                            href="/fillout-alternative/"
                            style="
                              color: inherit !important;
                              text-decoration: underline !important;
                              text-underline-offset: 2px;
                            "
                            >Fillout</a
                          ></span
                        >
                      </th>
                      <th scope="col">
                        <span class="fmstr-cmp-afg-compare__brand"
                          ><img
                            src="https://ssl.gstatic.com/docs/forms/device_home/android_192.png"
                            alt="Google Forms logo"
                            width="20"
                            height="20"
                            loading="lazy"
                          />Google Forms</span
                        >
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Free plan responses</th>
                      <td>Unlimited</td>
                      <td>100 per month</td>
                      <td>1,000 per month</td>
                      <td>No set cap (limited by Drive storage)</td>
                    </tr>
                    <tr>
                      <th scope="row">Free plan forms</th>
                      <td>Unlimited</td>
                      <td>5</td>
                      <td>Unlimited</td>
                      <td>No set limit</td>
                    </tr>
                    <tr>
                      <th scope="row">First paid plan</th>
                      <td>$13/month ($12 on annual)</td>
                      <td>$34/month on annual billing</td>
                      <td>From $15/month on annual billing</td>
                      <td>$6 per user/month (Workspace)</td>
                    </tr>
                    <tr>
                      <th scope="row">What the first paid plan buys</th>
                      <td>Branding removal, conditional logic, GA4 and GTM</td>
                      <td>Higher caps: 1,000 submissions, 25 forms</td>
                      <td>Higher caps: 2,000 responses a month</td>
                      <td>More storage and admin controls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="fmstr-cmp-afg-compare__note">
                Every Formester plan, including Free, has unlimited forms, responses, and fields. Paid tiers add
                features. On most competitors, paid tiers add volume. Pricing last checked August 2026.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-afg-freeplan">
            <div class="fmstr-cmp-afg-freeplan__container">
              <div class="fmstr-cmp-afg-freeplan__panel">
                <div class="fmstr-cmp-afg-freeplan__header">
                  <div class="fmstr-cmp-afg-freeplan__eyebrow">Pricing</div>
                  <h2 class="fmstr-cmp-afg-freeplan__h2">Free forever: unlimited forms, unlimited responses</h2>
                </div>
                <p class="fmstr-cmp-afg-freeplan__body">
                  The free plan has no volume caps. You get unlimited forms, unlimited responses, and unlimited fields
                  per form, plus the AI form creator, every field type, quiz auto-scoring,
                  <a
                    href="/features/form-analytics/"
                    style="color: #6941c6 !important; text-decoration: underline !important; text-underline-offset: 2px"
                    >drop-off analytics</a
                  >, and
                  <a
                    href="/features/online-payments/"
                    style="color: #6941c6 !important; text-decoration: underline !important; text-underline-offset: 2px"
                    >payment collection</a
                  >. No credit card at signup. Most form builders cap the free tier and sell the caps back; Jotform's
                  free plan stops at 100 submissions a month. Formester's paid plans exist for features instead:
                  Personal ($13/month) removes Formester branding and adds conditional logic, and Business ($49/month)
                  adds API access, PDF exports, and 25 team seats.
                </p>
                <div class="fmstr-cmp-afg-freeplan__cta-row">
                  <a class="fmstr-cmp-afg-freeplan__btn-primary" href="https://app.formester.com/users/sign_up"
                    >Start free</a
                  ><a class="fmstr-cmp-afg-freeplan__btn-ghost" href="/pricing/">See pricing</a>
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
          <section class="fmstr-cmp-afg-quality-control" aria-labelledby="fmstr-cmp-afg-quality-control-heading">
            <div class="fmstr-cmp-afg-quality-control__container">
              <div class="fmstr-cmp-afg-quality-control__inner">
                <div class="fmstr-cmp-afg-quality-control__text">
                  <span class="fmstr-cmp-afg-quality-control__eyebrow">Quality control</span>
                  <h2 id="fmstr-cmp-afg-quality-control-heading" class="fmstr-cmp-afg-quality-control__heading">
                    Forms that ship with the right field type already chosen, not as a starting point you have to fix.
                  </h2>
                  <div class="fmstr-cmp-afg-quality-control__body">
                    <p>
                      When the AI drafts a form, it picks the right field type for each question. "What's your email?"
                      gets email validation. "How would you rate us?" gets a 1 to 5 rating scale. "Pick the closest
                      match" gets multiple choice. "When can we follow up?" gets a date picker. These are the small
                      calls a form designer normally makes manually for every field.
                    </p>
                    <p>
                      Every draft lands in the Formester editor, never as a frozen output. Change a field type, add
                      validation, make a question conditional, group related fields, or rewrite the labels. The AI
                      handles the obvious 80%; the editor is where the last 20% gets human judgment.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-afg-quality-control__card">
                  <span class="fmstr-cmp-afg-quality-control__pill">What the AI handles automatically</span>
                  <h3 class="fmstr-cmp-afg-quality-control__card-title">Five calls you don't have to make.</h3>
                  <ul class="fmstr-cmp-afg-quality-control__list">
                    <li class="fmstr-cmp-afg-quality-control__item">
                      <svg
                        class="fmstr-cmp-afg-quality-control__check"
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
                      <span class="fmstr-cmp-afg-quality-control__item-text"
                        ><strong>Email validation</strong> on every email field, before the response gets to your
                        inbox.</span
                      >
                    </li>
                    <li class="fmstr-cmp-afg-quality-control__item">
                      <svg
                        class="fmstr-cmp-afg-quality-control__check"
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
                      <span class="fmstr-cmp-afg-quality-control__item-text"
                        ><strong>Phone formatting</strong> with country codes, no respondent guessing the right
                        format.</span
                      >
                    </li>
                    <li class="fmstr-cmp-afg-quality-control__item">
                      <svg
                        class="fmstr-cmp-afg-quality-control__check"
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
                      <span class="fmstr-cmp-afg-quality-control__item-text"
                        ><strong>Date pickers</strong> for date questions, instead of a free-text field that returns
                        "next Tuesday."</span
                      >
                    </li>
                    <li class="fmstr-cmp-afg-quality-control__item">
                      <svg
                        class="fmstr-cmp-afg-quality-control__check"
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
                      <span class="fmstr-cmp-afg-quality-control__item-text"
                        ><strong>Required flags</strong> set on the questions a form genuinely needs answered, optional
                        on the rest.</span
                      >
                    </li>
                    <li class="fmstr-cmp-afg-quality-control__item">
                      <svg
                        class="fmstr-cmp-afg-quality-control__check"
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
                      <span class="fmstr-cmp-afg-quality-control__item-text"
                        ><strong>Field grouping</strong> so contact info sits together, scoring questions sit together,
                        open-ended sits at the end.</span
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
          <section class="fmstr-cmp-afg-steps" aria-labelledby="fmstr-cmp-afg-steps-h2">
            <div class="fmstr-cmp-afg-steps__container">
              <div class="fmstr-cmp-afg-steps__header">
                <div class="fmstr-cmp-afg-steps__eyebrow">How it works</div>
                <h2 class="fmstr-cmp-afg-steps__h2" id="fmstr-cmp-afg-steps-h2">
                  How Our <span>AI Form Builder</span> Works
                </h2>
                <p class="fmstr-cmp-afg-steps__sub">
                  Start from a prompt, PDF, image, or URL. Our AI form generator turns it into a shareable form in 30
                  seconds.
                </p>
              </div>
              <div class="fmstr-cmp-afg-steps__grid">
                <div class="fmstr-cmp-afg-steps__list">
                  <div class="fmstr-cmp-afg-steps__step">
                    <div class="fmstr-cmp-afg-steps__num">1</div>
                    <div>
                      <h3>Type a prompt, paste text, or upload a PDF</h3>
                      <p>
                        Describe what you need in plain English. Paste a block of text you want turned into questions.
                        Or upload a PDF or image and watch it become a fillable form.
                      </p>
                    </div>
                  </div>
                  <div class="fmstr-cmp-afg-steps__step">
                    <div class="fmstr-cmp-afg-steps__num">2</div>
                    <div>
                      <h3>Watch your form build, field by field</h3>
                      <p>
                        The AI picks the right question types (short answer, multiple choice, rating scale, file upload)
                        and sets up the
                        <a
                          href="/features/conditional-logic/"
                          style="
                            color: #6941c6 !important;
                            text-decoration: underline !important;
                            text-underline-offset: 2px;
                          "
                          >conditional logic</a
                        >
                        for you.
                      </p>
                    </div>
                  </div>
                  <div class="fmstr-cmp-afg-steps__step">
                    <div class="fmstr-cmp-afg-steps__num">3</div>
                    <div>
                      <h3>Edit with AI, then share</h3>
                      <p>
                        Tweak the wording, add your branding, connect your tools, and publish. Share the link, embed the
                        form, or push it straight into your CRM.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="fmstr-cmp-afg-steps__panel">
                  <div class="fmstr-cmp-afg-steps__frame">
                    <img
                      class="fmstr-cmp-afg-steps__media"
                      src="https://formester-strapi.s3.ap-south-1.amazonaws.com/ai_generate_v2_a9ab64f591.gif"
                      alt="Formester AI generating a consent form from a typed prompt"
                      loading="lazy"
                    />
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
          <section class="fmstr-cmp-afg-pdf" aria-labelledby="fmstr-cmp-afg-pdf-h2">
            <div class="fmstr-cmp-afg-pdf__container">
              <div class="fmstr-cmp-afg-pdf__header">
                <div class="fmstr-cmp-afg-pdf__eyebrow">PDF to form</div>
                <h2 class="fmstr-cmp-afg-pdf__h2" id="fmstr-cmp-afg-pdf-h2">Turn any PDF into a fillable form</h2>
                <p class="fmstr-cmp-afg-pdf__sub">
                  Plenty of the forms teams need already exist as PDFs: intake packets, registration sheets, consent
                  forms, applications. Instead of rebuilding them field by field,
                  <a
                    href="/features/convert-pdf-to-fillable-form/"
                    style="color: #6941c6 !important; text-decoration: underline !important; text-underline-offset: 2px"
                    >upload the file</a
                  >.
                </p>
              </div>
              <div class="fmstr-cmp-afg-pdf__grid">
                <div class="fmstr-cmp-afg-pdf__list">
                  <div class="fmstr-cmp-afg-pdf__step">
                    <div class="fmstr-cmp-afg-pdf__num">1</div>
                    <p>Upload your PDF. It can be a designed document or a scan of a paper form.</p>
                  </div>
                  <div class="fmstr-cmp-afg-pdf__step">
                    <div class="fmstr-cmp-afg-pdf__num">2</div>
                    <p>
                      The AI detects the fields and recreates each one as an interactive input: text boxes, checkboxes,
                      dropdowns.
                    </p>
                  </div>
                  <div class="fmstr-cmp-afg-pdf__step">
                    <div class="fmstr-cmp-afg-pdf__num">3</div>
                    <p>
                      Publish. Respondents fill it out at a link, and submissions land in your dashboard instead of your
                      inbox.
                    </p>
                  </div>
                </div>
                <div class="fmstr-cmp-afg-pdf__panel">
                  <div class="fmstr-cmp-afg-pdf__frame">
                    <img
                      class="fmstr-cmp-afg-pdf__media"
                      src="https://formester-strapi.s3.ap-south-1.amazonaws.com/pdf_to_form_v2_9968415264.gif"
                      alt="Uploading a PDF and Formester AI converting it into a fillable form"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <p class="fmstr-cmp-afg-pdf__note">
                Formester can also send every respondent
                <a
                  href="/features/export-form-submission-pdf/"
                  style="color: #6941c6 !important; text-decoration: underline !important; text-underline-offset: 2px"
                  >a PDF copy of their submission</a
                >
                automatically, so signed intake forms and applications go back into your document workflow on their own.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-afg-who-uses" aria-labelledby="fmstr-cmp-afg-who-uses-heading">
            <div class="fmstr-cmp-afg-who-uses__container">
              <header class="fmstr-cmp-afg-who-uses__header">
                <h2 id="fmstr-cmp-afg-who-uses-heading" class="fmstr-cmp-afg-who-uses__heading">
                  Who uses the AI form generator
                </h2>
                <p class="fmstr-cmp-afg-who-uses__sub">Teams turning prompts into live forms every week</p>
              </header>

              <div class="fmstr-cmp-afg-who-uses__grid">
                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z"></path>
                      <path d="M16 8a4 4 0 0 1 0 8"></path>
                      <path d="M19 5a8 8 0 0 1 0 14"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Marketers</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Lead capture, event registration, and campaign feedback. Build a campaign-specific form in the time
                    it takes to write the brief, then push responses straight to your CRM.
                  </p>
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9.5" cy="7" r="3.5"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">HR teams</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Job applications, onboarding surveys, and 360° feedback. Paste the job description and the AI drafts
                    the application form, resume upload and salary dropdown included.
                  </p>
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <path d="M22 10 12 5 2 10l10 5 10-5z"></path>
                      <path d="M6 12v5c3 2 9 2 12 0v-5"></path>
                      <path d="M22 10v6"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Teachers</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Quizzes, assignments, and student feedback. Auto-generate assessments aligned to your curriculum in
                    seconds with the AI Quiz Maker.
                  </p>
                  <hr class="fmstr-cmp-afg-who-uses__divider" />
                  <a class="fmstr-cmp-afg-who-uses__cta" href="https://formester.com/ai-quiz-maker/"
                    >Generate Quizzes in Seconds →</a
                  >
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="18" cy="6" r="3"></circle>
                      <circle cx="12" cy="18" r="3"></circle>
                      <path d="M8.5 8 11 16M15.5 8 13 16"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Trainers and coaches</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Training needs assessments, skill-gap diagnostics, and post-session feedback. Turn a syllabus into a
                    pre-assessment in one prompt.
                  </p>
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <path d="M9 11a4 4 0 1 0-3-7"></path>
                      <path d="M5 21v-4a4 4 0 0 1 4-4h2"></path>
                      <path d="M16 11a4 4 0 1 1 3-7"></path>
                      <path d="M19 21v-4a4 4 0 0 0-4-4h-2"></path>
                      <circle cx="12" cy="14" r="1"></circle>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Founders</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Customer interviews, product feedback, and churn surveys. Generate the survey, share the link, and
                    read the drop-off analytics the same day.
                  </p>
                  <hr class="fmstr-cmp-afg-who-uses__divider" />
                  <a class="fmstr-cmp-afg-who-uses__cta" href="https://formester.com/ai-survey-generator/"
                    >Analyze Customer Feedback →</a
                  >
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <path d="M21 21l-4.3-4.3"></path>
                      <path d="M11 8v6M8 11h6"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Researchers</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Survey instruments,
                    <a
                      href="/consent-form-generator/"
                      style="
                        color: #6941c6 !important;
                        text-decoration: underline !important;
                        text-underline-offset: 2px;
                      "
                      >consent forms</a
                    >, and participant screening. Pair it with the AI Survey Generator for research-grade question
                    design.
                  </p>
                  <hr class="fmstr-cmp-afg-who-uses__divider" />
                  <a class="fmstr-cmp-afg-who-uses__cta" href="https://formester.com/ai-survey-generator/"
                    >Generate Surveys with AI in Seconds →</a
                  >
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M8 3v4M16 3v4"></path>
                      <path d="M8 14h2M8 17h6"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Event organizers</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Registration, speaker submissions, and post-event feedback. Build the whole event stack from three
                    prompts, then watch responses arrive live.
                  </p>
                </article>

                <article class="fmstr-cmp-afg-who-uses__card">
                  <span class="fmstr-cmp-afg-who-uses__icon" aria-hidden="true">
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
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-afg-who-uses__title">Nonprofits</h3>
                  <p class="fmstr-cmp-afg-who-uses__body">
                    Volunteer signups, donor intake, and grant applications. Generate compliance-ready forms from a
                    funding-requirement PDF in seconds.
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
          <section class="fmstr-cmp-afg-api-mcp" aria-labelledby="fmstr-cmp-afg-api-mcp-title">
            <div class="fmstr-cmp-afg-api-mcp__container">
              <header class="fmstr-cmp-afg-api-mcp__header">
                <span class="fmstr-cmp-afg-api-mcp__eyebrow">For developers</span>
                <h2 id="fmstr-cmp-afg-api-mcp-title" class="fmstr-cmp-afg-api-mcp__title">
                  Your form data, ready for the AI you already use.
                </h2>
                <p class="fmstr-cmp-afg-api-mcp__intro">
                  Every Formester form ships with a REST API and an MCP server, so submissions don't stop at a CSV. Pipe
                  leads into your agent. Stream applications into your hiring copilot. Nobody else on this list ships
                  MCP.
                </p>
              </header>

              <div class="fmstr-cmp-afg-api-mcp__grid">
                <article class="fmstr-cmp-afg-api-mcp__card">
                  <span class="fmstr-cmp-afg-api-mcp__icon" aria-hidden="true">
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
                  <span class="fmstr-cmp-afg-api-mcp__badge">MCP server</span>
                  <h3 class="fmstr-cmp-afg-api-mcp__card-title">
                    Plug Formester into Claude, ChatGPT, or any MCP-compatible model.
                  </h3>
                  <div class="fmstr-cmp-afg-api-mcp__chips">
                    <span class="fmstr-cmp-afg-api-mcp__chip">Claude</span>
                    <span class="fmstr-cmp-afg-api-mcp__chip">ChatGPT</span>
                    <span class="fmstr-cmp-afg-api-mcp__chip">Custom agents</span>
                  </div>
                  <p class="fmstr-cmp-afg-api-mcp__body">
                    Connect Formester to any MCP-compatible model and let it read your form submissions directly. Ask
                    Claude "which leads from this week's webinar form look highest-fit?", or have a custom agent score
                    job applications against the role brief and flag the top candidates for the recruiter.
                  </p>
                  <a class="fmstr-cmp-afg-api-mcp__cta" href="https://docs.formester.com/formester-mcp-server.html"
                    >Read the MCP docs →</a
                  >
                </article>

                <article class="fmstr-cmp-afg-api-mcp__card">
                  <span class="fmstr-cmp-afg-api-mcp__icon" aria-hidden="true">
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
                  <span class="fmstr-cmp-afg-api-mcp__badge fmstr-cmp-afg-api-mcp__badge--alt">REST API v2</span>
                  <h3 class="fmstr-cmp-afg-api-mcp__card-title">Or build directly on the REST API.</h3>
                  <div class="fmstr-cmp-afg-api-mcp__chips">
                    <span class="fmstr-cmp-afg-api-mcp__chip">Self-service token</span>
                    <span class="fmstr-cmp-afg-api-mcp__chip">Webhooks</span>
                    <span class="fmstr-cmp-afg-api-mcp__chip">Business plan +</span>
                  </div>
                  <p class="fmstr-cmp-afg-api-mcp__body">
                    Pull form submissions into your data warehouse, push pre-filled form URLs back from your CRM, or
                    build a custom enrichment pipeline. Self-service token at app.formester.com/api in two clicks. No
                    support ticket, no waiting.
                  </p>
                  <a class="fmstr-cmp-afg-api-mcp__cta" href="https://docs.formester.com/formester-api.html"
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
          <section class="fmstr-cmp-afg-engine">
            <div class="fmstr-cmp-afg-engine__container">
              <div class="fmstr-cmp-afg-engine__header">
                <div class="fmstr-cmp-afg-engine__eyebrow">Under the hood</div>
                <h2 class="fmstr-cmp-afg-engine__h2">What powers the AI Form Generator</h2>
              </div>
              <p class="fmstr-cmp-afg-engine__body">
                The generator runs on Google Gemini. When you submit a prompt, a question list, or a PDF, the model maps
                your input against Formester's field library: it writes the questions, picks a field type for each one
                (short answer, multiple choice, rating scale, file upload), and wires conditional logic where the flow
                needs it. A typical form is ready in about 30 seconds, and you can edit the result by hand or ask the AI
                to revise it. Your content is never used to train any model, ours or anyone else's.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-privacy-data-ownership" aria-labelledby="fmstr-cmp-privacy-data-ownership-heading">
            <div class="fmstr-cmp-privacy-data-ownership__container">
              <div class="fmstr-cmp-privacy-data-ownership__inner">
                <div class="fmstr-cmp-privacy-data-ownership__text">
                  <span class="fmstr-cmp-privacy-data-ownership__eyebrow">Privacy and data ownership</span>
                  <h2 id="fmstr-cmp-privacy-data-ownership-heading" class="fmstr-cmp-privacy-data-ownership__heading">
                    Your content is not used to train anyone's AI. Yours, ours, or theirs.
                  </h2>
                  <div class="fmstr-cmp-privacy-data-ownership__body">
                    <p>
                      When you upload a PDF, paste a prompt, or generate a form, that content is used to generate your
                      form and nothing else. Per Section 4.4 of our DPA, Formester does not use Customer Data for
                      analytics, advertising, marketing, or product training. The Google Gemini integration we use to
                      power AI features inherits the same boundary.
                    </p>
                    <p>
                      Encrypted in transit and at rest, hosted on Heroku and AWS, automated encrypted backups with a
                      90-day retention, and full data deletion on request. We are GDPR, UK GDPR, and CCPA compliant. We
                      are not SOC 2 or ISO 27001 certified yet, and we will tell you so directly rather than dance
                      around it.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-privacy-data-ownership__card">
                  <span class="fmstr-cmp-privacy-data-ownership__pill">What's in the DPA</span>
                  <blockquote class="fmstr-cmp-privacy-data-ownership__quote">
                    "Formester does not use Customer Data for analytics, advertising, marketing, or product training."
                  </blockquote>
                  <hr class="fmstr-cmp-privacy-data-ownership__divider" />
                  <p class="fmstr-cmp-privacy-data-ownership__cite">
                    Section 4.4, Formester Data Processing Agreement, effective January 2026.
                  </p>
                  <div class="fmstr-cmp-privacy-data-ownership__links">
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
          <section class="fmstr-cmp-afg-feat" aria-labelledby="fmstr-cmp-afg-feat-h2">
            <div class="fmstr-cmp-afg-feat__container">
              <div class="fmstr-cmp-afg-feat__header">
                <h2 class="fmstr-cmp-afg-feat__h2" id="fmstr-cmp-afg-feat-h2">What the AI handles for you</h2>
              </div>
              <div class="fmstr-cmp-afg-feat__grid">
                <div class="fmstr-cmp-afg-feat__card">
                  <div class="fmstr-cmp-afg-feat__icon" aria-hidden="true">
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
                      <path d="m3 17 2 2 4-4" />
                      <path d="m3 7 2 2 4-4" />
                      <path d="M13 6h8" />
                      <path d="M13 12h8" />
                      <path d="M13 18h8" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-feat__title">AI Quiz Maker</h3>
                  <p class="fmstr-cmp-afg-feat__body">
                    Describe the topic and the AI writes the questions, picks the formats, and sets up auto-scoring. Add
                    pass marks, weighted points, or negative marking without touching a formula.
                  </p>
                  <a class="fmstr-cmp-afg-feat__link" href="/ai-quiz-maker/">Learn more &rarr;</a>
                </div>
                <div class="fmstr-cmp-afg-feat__card">
                  <div class="fmstr-cmp-afg-feat__icon" aria-hidden="true">
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
                      <line x1="6" x2="6" y1="3" y2="15" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <path d="M18 9a9 9 0 0 1-9 9" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-feat__title">AI Conditional Logic</h3>
                  <p class="fmstr-cmp-afg-feat__body">
                    Branching used to mean mapping every path by hand. Tell the AI "if they answer no, skip to the end"
                    and it wires the logic for you, so respondents only see questions that apply to them.
                  </p>
                  <a class="fmstr-cmp-afg-feat__link" href="/build-conditional-logic-forms-with-ai/"
                    >Learn more &rarr;</a
                  >
                </div>
                <div class="fmstr-cmp-afg-feat__card">
                  <div class="fmstr-cmp-afg-feat__icon" aria-hidden="true">
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
                      <path d="m5 8 6 6" />
                      <path d="m4 14 6-6 2-3" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="m22 22-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-feat__title">AI Translation</h3>
                  <p class="fmstr-cmp-afg-feat__body">
                    Turn one form into 180+ languages in a click. The AI translates every field, you can hand-edit any
                    string afterward, and you maintain a single form instead of a copy per language.
                  </p>
                  <a class="fmstr-cmp-afg-feat__link" href="/ai-powered-multilingual-forms/">Learn more &rarr;</a>
                </div>
                <div class="fmstr-cmp-afg-feat__card">
                  <div class="fmstr-cmp-afg-feat__icon" aria-hidden="true">
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
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="m9 15 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-feat__title">AI Test Creator</h3>
                  <p class="fmstr-cmp-afg-feat__body">
                    Give it a subject and a difficulty in the prompt and it returns a scored test with questions,
                    options, and feedback. Add a timer and retake limits before you share it.
                  </p>
                  <a class="fmstr-cmp-afg-feat__link" href="/test-creator/">Learn more &rarr;</a>
                </div>
                <div class="fmstr-cmp-afg-feat__card">
                  <div class="fmstr-cmp-afg-feat__icon" aria-hidden="true">
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
                      <path d="M3 3v18h18" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-feat__title">AI Survey Generator</h3>
                  <p class="fmstr-cmp-afg-feat__body">
                    State the decision you are trying to make and the AI drafts the survey that informs it: question
                    order, scale types, and an open-ended field where it earns its place.
                  </p>
                  <a class="fmstr-cmp-afg-feat__link" href="/ai-survey-generator/">Learn more &rarr;</a>
                </div>
                <div class="fmstr-cmp-afg-feat__card">
                  <div class="fmstr-cmp-afg-feat__icon" aria-hidden="true">
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
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                  </div>
                  <h3 class="fmstr-cmp-afg-feat__title">AI Poll Maker</h3>
                  <p class="fmstr-cmp-afg-feat__body">
                    Type the question you want settled and get a ready-to-share poll, with summary analytics on the
                    results.
                  </p>
                  <a class="fmstr-cmp-afg-feat__link" href="/poll-maker/">Learn more &rarr;</a>
                </div>
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
      :title="c13_title"
      :pickedReviews="c13_pickedReviews"
      :excludedReviews="c13_excludedReviews"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c14_ctaValue" class="page-component-item" />

    <FaqSection :title="c15_title" :faqList="c15_faqList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-more-ai-tools" aria-labelledby="fmstr-cmp-more-ai-tools-heading">
            <div class="fmstr-cmp-more-ai-tools__inner">
              <h2 id="fmstr-cmp-more-ai-tools-heading" class="fmstr-cmp-more-ai-tools__heading">
                More AI tools from Formester
              </h2>

              <div class="fmstr-cmp-more-ai-tools__grid">
                <a class="fmstr-cmp-more-ai-tools__card" href="https://formester.com/ai-quiz-maker/">
                  <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-more-ai-tools__title">AI Quiz Maker</h3>
                  <p class="fmstr-cmp-more-ai-tools__desc">Generate assessments with answer keys in seconds.</p>
                </a>

                <a class="fmstr-cmp-more-ai-tools__card" href="https://formester.com/ai-survey-generator/">
                  <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-more-ai-tools__title">AI Survey Generator</h3>
                  <p class="fmstr-cmp-more-ai-tools__desc">Research-grade survey instruments from a brief.</p>
                </a>

                <a class="fmstr-cmp-more-ai-tools__card" href="https://formester.com/ai-powered-multilingual-forms/">
                  <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
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
                      <path d="M3 12h18"></path>
                      <path d="M12 3a13.5 13.5 0 0 1 0 18"></path>
                      <path d="M12 3a13.5 13.5 0 0 0 0 18"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools__title">AI Multilingual Forms</h3>
                  <p class="fmstr-cmp-more-ai-tools__desc">Auto-translate any form into 50+ languages.</p>
                </a>

                <a class="fmstr-cmp-more-ai-tools__card" href="https://formester.com/features/ai-workflows/">
                  <span class="fmstr-cmp-more-ai-tools__icon" aria-hidden="true">
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
                      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools__title">AI Workflows</h3>
                  <p class="fmstr-cmp-more-ai-tools__desc">Trigger automations on form submission.</p>
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
import TestimonialWall from '@/components/v2/TestimonialWall.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Describe your form in plain English, paste a URL, or upload a PDF or an image. The AI builds it in under 30 seconds, ready to share. The free plan includes unlimited forms and unlimited responses.'
const c0_title = [
  {
    id: 5963,
    text: 'The Free AI Form Generator That Builds Your Form ',
    highlight: false,
    color: '#000000',
    bold: false,
  },
  {
    id: 5962,
    text: 'in 30 Seconds',
    highlight: true,
    color: '#000000',
    bold: false,
  },
]
const c0_suggestions = [
  {
    id: 139,
    text: 'Create Job application form for a senior React developer with résumé upload, salary dropdown.',
    label: 'Job application form',
  },
  {
    id: 140,
    text: 'Create 5-question churn survey for B2B SaaS users who cancelled this month.',
    label: 'Churn survey',
  },
  {
    id: 141,
    text: 'Create Post-event feedback form with star ratings for each session and a "what should we cut" box.',
    label: 'Event feedback form',
  },
]
const c0_footerItems = [
  {
    id: 3588,
    text: 'Trusted by 56,000+ teams',
  },
  {
    id: 3589,
    text: 'Rated 4.7/5 on G2',
  },
  {
    id: 3591,
    text: 'Free forever',
  },
  {
    id: 3590,
    text: 'No credit card required',
  },
]
const c1_title = []
const c1_logos = []
const c13_title = [
  {
    id: 5961,
    text: 'What teams are saying about Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c13_pickedReviews = []
const c13_excludedReviews = []
const c14_ctaValue = {
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
const c15_title = [
  {
    id: 5960,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c15_faqList = [
  {
    id: 3826,
    header: 'What is an AI Form Generator?',
    body: '<p>An AI form generator turns a plain-English description, a PDF, an image, or a block of text into a structured, fillable form. Instead of dragging fields onto a canvas, you describe the form you need ("a job application form for a frontend developer with resume upload and a LinkedIn field") and the AI builds the questions, picks the field types, and sets up the conditional logic for you.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3833,
    header: 'How does the AI Form Generator work?',
    body: '<p>You give it an input: a written description, a list of questions you already have, or a PDF. The AI reads it, writes the fields, picks the right question type for each, and assembles a live form. From there you can edit any field, restyle the form, or ask the AI to make the changes for you. Most generations finish in about 30 seconds.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3828,
    header: 'Can I use the AI Form Generator for free?',
    body: '<p>Yes. No credit card at signup, and the free plan has no caps on forms or responses. Free accounts include 2 AI form generations a day; Personal raises that to 10 and Business to 50. Paid plans also unlock custom branding, conditional logic, and API access.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3827,
    header: 'Is the AI Form Generator easy to use?',
    body: '<p>Yes. You describe the form and the generator returns a working version, so there is nothing to learn before you start. Editing afterward is drag and drop, and if you would rather not touch the editor, you can tell the AI what to change instead.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3830,
    header: 'Can I customize the forms generated by the AI?',
    body: '<p>Yes. Every generated form opens in the standard editor, where you can add or remove fields, change layouts, apply your branding kit, and adjust the design down to custom CSS.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3829,
    header: 'Can ChatGPT create a form?',
    body: '<p>ChatGPT can draft form questions and field labels, but it cannot host a live, fillable form you can share with respondents, collect answers in, or connect to your CRM. An AI form generator like Formester does both halves. It generates the questions and deploys them as a live form at a shareable URL with a backend that stores responses.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3835,
    header: 'Can AI make a form fillable?',
    body: "<p>Yes. Upload a non-fillable PDF, for example a scanned tax form or a printable registration sheet, and Formester's AI detects the fields, recreates them as interactive inputs, and publishes the result as a fillable online form. No manual rebuilding.</p>",
    body_markdown: null,
    list: [],
  },
  {
    id: 3834,
    header: 'Which AI can generate forms?',
    body: '<p>Tools built specifically for AI form generation include Formester, Jotform, Fillout, Makeform, Weavely, and Typeform. General-purpose assistants like ChatGPT and Gemini can suggest form content but do not publish live forms. When choosing, look for free generation without sign-up, support for multiple input sources (prompt, PDF, image, URL), and a direct connection to your CRM and automation tools.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3831,
    header: 'Can AI fill out a form for me?',
    body: "<p>Formester's AI generates the form. Filling it out is a separate workflow. If your goal is to auto-populate a form from source data (for example, auto-filling a shipping address from a CRM record), you can connect Formester to your CRM via our integrations. For respondent-facing forms, the person completing the form enters their own answers.</p>",
    body_markdown: null,
    list: [],
  },
  {
    id: 3832,
    header: 'How much does the AI form generator cost?',
    body: '<p>Nothing to start. The free plan is $0 forever with unlimited forms and unlimited responses. Personal is $13 per month and removes Formester branding, Business is $49 per month and adds API access and PDF exports. No plan charges per form or per response.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3839,
    header: "How is Formester different from Jotform's AI form generator?",
    body: "<p>Both generate forms from a prompt. The difference shows up on the free tier: Jotform's free plan allows 5 forms and 100 submissions a month, while Formester's free plan has no caps on either. Jotform counters with a much larger template and integration catalog, which matters for complex enterprise workflows. If you are choosing on what you get without paying, Formester is the stronger option.</p>",
    body_markdown: null,
    list: [],
  },
  {
    id: 3836,
    header: 'What inputs can I use to generate a form?',
    body: '<p>A plain-English prompt, a list of questions you already have, a PDF, an image, or a public URL. PDFs can be designed documents or scans of paper forms; the AI reads the structure either way and rebuilds it as interactive fields.</p>',
    body_markdown: null,
    list: [],
  },
  {
    id: 3837,
    header: 'Does Formester train AI models on my form data?',
    body: "<p>No. Customer data is not used for analytics, advertising, or model training, whether ours or a third party's. That covers your prompts, your form content, and your respondents' submissions. Data is encrypted in transit and at rest, and Formester is GDPR, UK GDPR, and CCPA compliant.</p>",
    body_markdown: null,
    list: [],
  },
  {
    id: 3838,
    header: 'Do respondents need an account to fill out my form?',
    body: '<p>No. You share a link, a QR code, or an embed, and anyone can complete the form in their browser. Anonymous submissions are supported if you prefer not to collect identity at all.</p>',
    body_markdown: null,
    list: [],
  },
]

useHead({
  title: 'Free AI Form Generator. Unlimited Forms in 30 Seconds | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/ai-form-generator/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-08-09T15:28:48.263Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'The free AI form generator that turns a prompt, PDF, or URL into a live form in 30 seconds. Unlimited forms and responses on the free plan. 56,000+ teams.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free AI Form Generator. Unlimited Forms in 30 Seconds | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/ai-form-generator/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free AI Form Generator. Unlimited Forms in 30 Seconds | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'The free AI form generator that turns a prompt, PDF, or URL into a live form in 30 seconds. Unlimited forms and responses on the free plan. 56,000+ teams.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/ai-form-generator/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free AI Form Generator. Unlimited Forms in 30 Seconds | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'The free AI form generator that turns a prompt, PDF, or URL into a live form in 30 seconds. Unlimited forms and responses on the free plan. 56,000+ teams.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
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
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: [
        'ai form generator free online',
        'ai form generator',
        'ai form',
        'ai form builder',
        'ai form tool',
        'ai form fill assistance',
        'ai html form generator',
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
          'https://www.instagram.com/_formester_',
          'https://www.facebook.com/formester',
          'https://x.com/_Formester_',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '49D, Jugsalai',
          addressCountry: 'IN',
          addressLocality: 'Jamshedpur',
        },
      },
      {
        '@id': 'https://formester.com/ai-form-generator/#webpage',
        url: 'https://formester.com/ai-form-generator/',
        name: 'Free AI Form Generator. Unlimited Forms in 30 Seconds | Formester',
        '@type': 'WebPage',
        headline: 'The Free AI Form Generator That Builds Your Form in 30 Seconds',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/ai-form-generator/#breadcrumb',
        },
        inLanguage: 'en-US',
        description:
          'The free AI form generator that turns a prompt, PDF, or URL into a live form in 30 seconds. Unlimited forms and responses on the free plan. 56,000+ teams.',
        dateModified: '2026-08-09',
        datePublished: '2024-07-12',
        primaryImageOfPage: {
          url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
          '@type': 'ImageObject',
        },
      },
      {
        '@id': 'https://formester.com/ai-form-generator/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/ai-form-generator/',
            name: 'AI Form Generator',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/ai-form-generator/#software',
        url: 'https://formester.com/ai-form-generator/',
        name: 'Formester AI Form Generator',
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
          },
          {
            url: 'https://formester.com/pricing/',
            name: 'Business',
            '@type': 'Offer',
            price: '49',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
          },
        ],
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
        description:
          "Formester's AI form generator turns a prompt, a PDF, a URL, or an image into a live, shareable form in about 30 seconds. Free plan with unlimited forms and unlimited responses.",
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingCount: '450',
          ratingValue: '4.7',
        },
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
      },
      {
        '@id': 'https://formester.com/ai-form-generator/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'What is an AI Form Generator?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'An AI form generator turns a plain-English description, a PDF, an image, or a block of text into a structured, fillable form. Instead of dragging fields onto a canvas, you describe the form you need ("a job application form for a frontend developer with resume upload and a LinkedIn field") and the AI builds the questions, picks the field types, and sets up the conditional logic for you.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How does the AI Form Generator work?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You give it an input: a written description, a list of questions you already have, or a PDF. The AI reads it, writes the fields, picks the right question type for each, and assembles a live form. From there you can edit any field, restyle the form, or ask the AI to make the changes for you. Most generations finish in about 30 seconds.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I use the AI Form Generator for free?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. No credit card at signup, and the free plan has no caps on forms or responses. Free accounts include 2 AI form generations a day; Personal raises that to 10 and Business to 50. Paid plans also unlock custom branding, conditional logic, and API access.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is the AI Form Generator easy to use?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You describe the form and the generator returns a working version, so there is nothing to learn before you start. Editing afterward is drag and drop, and if you would rather not touch the editor, you can tell the AI what to change instead.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I customize the forms generated by the AI?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Every generated form opens in the standard editor, where you can add or remove fields, change layouts, apply your branding kit, and adjust the design down to custom CSS.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can ChatGPT create a form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'ChatGPT can draft form questions and field labels, but it cannot host a live, fillable form you can share with respondents, collect answers in, or connect to your CRM. An AI form generator like Formester does both halves. It generates the questions and deploys them as a live form at a shareable URL with a backend that stores responses.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can AI make a form fillable?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Yes. Upload a non-fillable PDF, for example a scanned tax form or a printable registration sheet, and Formester's AI detects the fields, recreates them as interactive inputs, and publishes the result as a fillable online form. No manual rebuilding.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Which AI can generate forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Tools built specifically for AI form generation include Formester, Jotform, Fillout, Makeform, Weavely, and Typeform. General-purpose assistants like ChatGPT and Gemini can suggest form content but do not publish live forms. When choosing, look for free generation without sign-up, support for multiple input sources (prompt, PDF, image, URL), and a direct connection to your CRM and automation tools.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can AI fill out a form for me?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Formester's AI generates the form. Filling it out is a separate workflow. If your goal is to auto-populate a form from source data (for example, auto-filling a shipping address from a CRM record), you can connect Formester to your CRM via our integrations. For respondent-facing forms, the person completing the form enters their own answers.",
              '@type': 'Answer',
            },
          },
          {
            name: 'How much does the AI form generator cost?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Nothing to start. The free plan is $0 forever with unlimited forms and unlimited responses. Personal is $13 per month and removes Formester branding, Business is $49 per month and adds API access and PDF exports. No plan charges per form or per response.',
              '@type': 'Answer',
            },
          },
          {
            name: "How is Formester different from Jotform's AI form generator?",
            '@type': 'Question',
            acceptedAnswer: {
              text: "Both generate forms from a prompt. The difference shows up on the free tier: Jotform's free plan allows 5 forms and 100 submissions a month, while Formester's free plan has no caps on either. Jotform counters with a much larger template and integration catalog, which matters for complex enterprise workflows. If you are choosing on what you get without paying, Formester is the stronger option.",
              '@type': 'Answer',
            },
          },
          {
            name: 'What inputs can I use to generate a form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'A plain-English prompt, a list of questions you already have, a PDF, an image, or a public URL. PDFs can be designed documents or scans of paper forms; the AI reads the structure either way and rebuilds it as interactive fields.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Does Formester train AI models on my form data?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "No. Customer data is not used for analytics, advertising, or model training, whether ours or a third party's. That covers your prompts, your form content, and your respondents' submissions. Data is encrypted in transit and at rest, and Formester is GDPR, UK GDPR, and CCPA compliant.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Do respondents need an account to fill out my form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'No. You share a link, a QR code, or an embed, and anyone can complete the form in their browser. Anonymous submissions are supported if you prefer not to collect identity at all.',
              '@type': 'Answer',
            },
          },
        ],
      },
      {
        '@id': 'https://formester.com/ai-form-generator/#howto-pdf',
        name: 'How to turn a PDF into a fillable form',
        step: [
          {
            name: 'Upload your PDF',
            text: 'Upload your PDF. It can be a designed document or a scan of a paper form.',
            '@type': 'HowToStep',
            position: 1,
          },
          {
            name: 'AI detects the fields',
            text: 'The AI detects the fields and recreates each one as an interactive input: text boxes, checkboxes, dropdowns.',
            '@type': 'HowToStep',
            position: 2,
          },
          {
            name: 'Publish',
            text: 'Publish. Respondents fill it out at a link, and submissions land in your dashboard instead of your inbox.',
            '@type': 'HowToStep',
            position: 3,
          },
        ],
        '@type': 'HowTo',
      },
    ],
    '@context': 'https://schema.org',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
.fmstr-cmp-afg-3ways a {
  text-decoration: none !important;
}
.fmstr-cmp-afg-3ways {
  --c-card: #ffffff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-border: #eaecf0;
  --c-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-3ways *,
.fmstr-cmp-afg-3ways *::before,
.fmstr-cmp-afg-3ways *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-3ways__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-3ways__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-3ways__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-600);
  background: #f4ebff;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  margin: 0 0 16px;
}
.fmstr-cmp-afg-3ways__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-3ways__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-afg-3ways__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  min-width: 0;
}
.fmstr-cmp-afg-3ways__card {
  min-width: 0;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--c-shadow);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.fmstr-cmp-afg-3ways__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
}
.fmstr-cmp-afg-3ways__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  display: grid;
  place-items: center;
  color: var(--c-violet-600);
}
.fmstr-cmp-afg-3ways__icon svg {
  width: 22px;
  height: 22px;
}
.fmstr-cmp-afg-3ways__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-3ways__body {
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.55;
  margin: 0;
}
.fmstr-cmp-afg-3ways__example {
  background: var(--c-tint);
  border-left: 3px solid var(--c-violet-500);
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-fg-1);
  font-style: italic;
}
@media (max-width: 760px) {
  .fmstr-cmp-afg-3ways {
    padding: 48px 16px;
  }
  .fmstr-cmp-afg-3ways__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-afg-3ways__h2 {
    font-size: 24px;
  }
}

.fmstr-cmp-afg-compare {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-compare *,
.fmstr-cmp-afg-compare *::before,
.fmstr-cmp-afg-compare *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-compare__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-compare__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-compare__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-600);
  background: #f4ebff;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  margin: 0 0 16px;
}
.fmstr-cmp-afg-compare__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-compare__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-afg-compare__scroll {
  overflow-x: auto;
  border: 1px solid var(--c-border);
  border-radius: 16px;
}
.fmstr-cmp-afg-compare__table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 15px;
  line-height: 1.5;
  background: #ffffff;
}
.fmstr-cmp-afg-compare__table th,
.fmstr-cmp-afg-compare__table td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid var(--c-border);
  vertical-align: top;
}
.fmstr-cmp-afg-compare__table thead th {
  background: #f9fafb;
  font-weight: 600;
  color: var(--c-fg-1);
  font-size: 14px;
}
.fmstr-cmp-afg-compare__table tbody tr:last-child th,
.fmstr-cmp-afg-compare__table tbody tr:last-child td {
  border-bottom: 0;
}
.fmstr-cmp-afg-compare__table tbody th {
  font-weight: 600;
  color: var(--c-fg-1);
  background: #ffffff;
}
.fmstr-cmp-afg-compare__table td {
  color: var(--c-fg-2);
}
.fmstr-cmp-afg-compare__table th:nth-child(2),
.fmstr-cmp-afg-compare__table td:nth-child(2) {
  background: var(--c-tint);
  font-weight: 600;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-compare__note {
  margin: 18px auto 0;
  max-width: 920px;
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.6;
}
@media (max-width: 760px) {
  .fmstr-cmp-afg-compare {
    padding: 48px 16px;
  }
  .fmstr-cmp-afg-compare__header {
    margin-bottom: 28px;
  }
}
.fmstr-cmp-afg-compare__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.fmstr-cmp-afg-compare__brand img {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: block;
  flex-shrink: 0;
}

.fmstr-cmp-afg-freeplan {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-freeplan *,
.fmstr-cmp-afg-freeplan *::before,
.fmstr-cmp-afg-freeplan *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-freeplan__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-freeplan__panel {
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  border-radius: 20px;
  padding: 44px 40px;
}
.fmstr-cmp-afg-freeplan__header {
  margin: 0 auto 18px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-freeplan__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-600);
  background: #ffffff;
  border: 1px solid var(--c-edge);
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  margin: 0 0 16px;
}
.fmstr-cmp-afg-freeplan__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-freeplan__body {
  margin: 0;
  color: var(--c-fg-2);
  font-size: 16px;
  line-height: 1.7;
}
.fmstr-cmp-afg-freeplan__cta-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}
.fmstr-cmp-afg-freeplan__btn-primary {
  display: inline-block;
  background: var(--c-violet-500) !important;
  color: #ffffff !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  padding: 14px 30px;
  border-radius: 9999px;
  text-decoration: none !important;
  transition: background 0.15s ease;
}
.fmstr-cmp-afg-freeplan__btn-primary:hover {
  background: var(--c-violet-600) !important;
  color: #ffffff !important;
}
.fmstr-cmp-afg-freeplan__btn-ghost {
  display: inline-block;
  background: #ffffff !important;
  color: var(--c-violet-600) !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  padding: 13px 30px;
  border-radius: 9999px;
  border: 1px solid #9777e0;
  text-decoration: none !important;
  transition: background 0.15s ease;
}
.fmstr-cmp-afg-freeplan__btn-ghost:hover {
  background: #f4ebff !important;
  color: var(--c-violet-600) !important;
}
@media (max-width: 760px) {
  .fmstr-cmp-afg-freeplan {
    padding: 44px 16px;
  }
  .fmstr-cmp-afg-freeplan__panel {
    padding: 28px 20px;
  }
}

.fmstr-cmp-afg-quality-control {
  --fmstr-cmp-afg-quality-control-bg-section: #0f0921;
  --fmstr-cmp-afg-quality-control-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-afg-quality-control-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-afg-quality-control-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-afg-quality-control-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-afg-quality-control-bg-row: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-afg-quality-control-fg-eyebrow: #bda6ff;
  --fmstr-cmp-afg-quality-control-fg-row: rgba(255, 255, 255, 0.85);
  --fmstr-cmp-afg-quality-control-fg-row-tag: #bda6ff;
  --fmstr-cmp-afg-quality-control-fg-link: #d9c7ff;
  --fmstr-cmp-afg-quality-control-fg-link-hover: #ffffff;
  --fmstr-cmp-afg-quality-control-fs-xs: 12px;
  --fmstr-cmp-afg-quality-control-fs-sm: 14px;
  --fmstr-cmp-afg-quality-control-fs-md: 16px;
  --fmstr-cmp-afg-quality-control-fs-lg: 18px;
  --fmstr-cmp-afg-quality-control-fs-2xl: 24px;
  --fmstr-cmp-afg-quality-control-fs-3xl: 32px;
  --fmstr-cmp-afg-quality-control-fw-semibold: 600;
  --fmstr-cmp-afg-quality-control-fw-bold: 700;
  --fmstr-cmp-afg-quality-control-lh-md: 24px;
  --fmstr-cmp-afg-quality-control-lh-lg: 28px;
  --fmstr-cmp-afg-quality-control-lh-2xl: 32px;
  --fmstr-cmp-afg-quality-control-space-1: 4px;
  --fmstr-cmp-afg-quality-control-space-2: 8px;
  --fmstr-cmp-afg-quality-control-space-3: 12px;
  --fmstr-cmp-afg-quality-control-space-4: 16px;
  --fmstr-cmp-afg-quality-control-space-5: 20px;
  --fmstr-cmp-afg-quality-control-space-6: 24px;
  --fmstr-cmp-afg-quality-control-space-7: 28px;
  --fmstr-cmp-afg-quality-control-space-8: 32px;
  --fmstr-cmp-afg-quality-control-space-12: 48px;
  --fmstr-cmp-afg-quality-control-r-md: 8px;
  --fmstr-cmp-afg-quality-control-r-2xl: 16px;
  --fmstr-cmp-afg-quality-control-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-afg-quality-control-space-12) var(--fmstr-cmp-afg-quality-control-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-afg-quality-control *,
.fmstr-cmp-afg-quality-control *::before,
.fmstr-cmp-afg-quality-control *::after {
  box-sizing: border-box;
}

.fmstr-cmp-afg-quality-control__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-afg-quality-control-bg-section);
  background-image: var(--fmstr-cmp-afg-quality-control-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-afg-quality-control-space-12);
  overflow: hidden;
}

.fmstr-cmp-afg-quality-control__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-afg-quality-control-space-12);
  align-items: center;
}

.fmstr-cmp-afg-quality-control__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-afg-quality-control-space-2) var(--fmstr-cmp-afg-quality-control-space-4);
  background: var(--fmstr-cmp-afg-quality-control-bg-pill);
  color: var(--fmstr-cmp-afg-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-afg-quality-control-r-full);
  font-size: var(--fmstr-cmp-afg-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-afg-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-afg-quality-control-space-5);
}

.fmstr-cmp-afg-quality-control__heading {
  font-size: var(--fmstr-cmp-afg-quality-control-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-afg-quality-control-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-afg-quality-control-space-6);
}

.fmstr-cmp-afg-quality-control__body p {
  font-size: var(--fmstr-cmp-afg-quality-control-fs-md);
  line-height: var(--fmstr-cmp-afg-quality-control-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-afg-quality-control-space-4);
}
.fmstr-cmp-afg-quality-control__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-afg-quality-control__card {
  background-color: var(--fmstr-cmp-afg-quality-control-bg-card);
  background-image: var(--fmstr-cmp-afg-quality-control-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-afg-quality-control-r-2xl);
  padding: var(--fmstr-cmp-afg-quality-control-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-afg-quality-control__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-afg-quality-control-space-2) var(--fmstr-cmp-afg-quality-control-space-4);
  background: var(--fmstr-cmp-afg-quality-control-bg-pill);
  color: var(--fmstr-cmp-afg-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-afg-quality-control-r-full);
  font-size: var(--fmstr-cmp-afg-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-afg-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-afg-quality-control-space-5);
}

.fmstr-cmp-afg-quality-control__card-title {
  font-size: var(--fmstr-cmp-afg-quality-control-fs-lg);
  line-height: var(--fmstr-cmp-afg-quality-control-lh-lg);
  font-weight: var(--fmstr-cmp-afg-quality-control-fw-bold);
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-afg-quality-control-space-5);
}

.fmstr-cmp-afg-quality-control__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-afg-quality-control-space-2);
}

.fmstr-cmp-afg-quality-control__item {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-afg-quality-control-space-3);
  padding: var(--fmstr-cmp-afg-quality-control-space-3) var(--fmstr-cmp-afg-quality-control-space-4);
  background: var(--fmstr-cmp-afg-quality-control-bg-row);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--fmstr-cmp-afg-quality-control-r-md);
}

.fmstr-cmp-afg-quality-control__check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--fmstr-cmp-afg-quality-control-fg-row-tag);
  margin-top: 2px;
}

.fmstr-cmp-afg-quality-control__item-text {
  font-size: var(--fmstr-cmp-afg-quality-control-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-afg-quality-control-fg-row);
}
.fmstr-cmp-afg-quality-control__item-text strong {
  color: #ffffff;
  font-weight: var(--fmstr-cmp-afg-quality-control-fw-bold);
}

@media (max-width: 760px) {
  .fmstr-cmp-afg-quality-control {
    padding: var(--fmstr-cmp-afg-quality-control-space-8) var(--fmstr-cmp-afg-quality-control-space-4);
  }
  .fmstr-cmp-afg-quality-control__container {
    padding: var(--fmstr-cmp-afg-quality-control-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-afg-quality-control__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-afg-quality-control-space-8);
  }
  .fmstr-cmp-afg-quality-control__heading {
    font-size: var(--fmstr-cmp-afg-quality-control-fs-2xl);
    line-height: var(--fmstr-cmp-afg-quality-control-lh-2xl);
  }
  .fmstr-cmp-afg-quality-control__card {
    padding: var(--fmstr-cmp-afg-quality-control-space-6);
  }
}

.fmstr-cmp-afg-steps {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  --c-brand: #6434d0;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-steps *,
.fmstr-cmp-afg-steps *::before,
.fmstr-cmp-afg-steps *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-steps__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-steps__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-steps__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-600);
  background: #f4ebff;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  margin: 0 0 16px;
}
.fmstr-cmp-afg-steps__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: #475467;
}
.fmstr-cmp-afg-steps__h2 span {
  color: var(--c-brand);
  font-weight: 700;
}
.fmstr-cmp-afg-steps__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-afg-steps__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 32px;
  align-items: center;
  min-width: 0;
}
.fmstr-cmp-afg-steps__list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
}
.fmstr-cmp-afg-steps__step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.fmstr-cmp-afg-steps__num {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  color: var(--c-violet-600);
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmstr-cmp-afg-steps__step h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 6px;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-steps__step p {
  margin: 0;
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.6;
}
.fmstr-cmp-afg-steps__panel {
  min-width: 0;
}
.fmstr-cmp-afg-steps__frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  background: #fafafa;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  aspect-ratio: 1826 / 1080;
}
.fmstr-cmp-afg-steps__media {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.fmstr-cmp-afg-steps__caption {
  margin: 10px 0 0;
  font-size: 13px;
  color: #697586;
  text-align: center;
}
@media (max-width: 900px) {
  .fmstr-cmp-afg-steps__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-afg-steps {
    padding: 48px 16px;
  }
}

.fmstr-cmp-afg-pdf {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-pdf *,
.fmstr-cmp-afg-pdf *::before,
.fmstr-cmp-afg-pdf *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-pdf__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-pdf__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-pdf__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-600);
  background: #f4ebff;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  margin: 0 0 16px;
}
.fmstr-cmp-afg-pdf__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-pdf__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-afg-pdf__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 32px;
  align-items: center;
  min-width: 0;
}
.fmstr-cmp-afg-pdf__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}
.fmstr-cmp-afg-pdf__step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
.fmstr-cmp-afg-pdf__num {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  color: var(--c-violet-600);
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmstr-cmp-afg-pdf__step p {
  margin: 0;
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.6;
}
.fmstr-cmp-afg-pdf__panel {
  min-width: 0;
}
.fmstr-cmp-afg-pdf__frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  background: #fafafa;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  aspect-ratio: 1826 / 1080;
}
.fmstr-cmp-afg-pdf__media {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.fmstr-cmp-afg-pdf__caption {
  margin: 10px 0 0;
  font-size: 13px;
  color: #697586;
  text-align: center;
}
.fmstr-cmp-afg-pdf__note {
  margin: 28px auto 0;
  max-width: 760px;
  text-align: center;
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.6;
}
@media (max-width: 900px) {
  .fmstr-cmp-afg-pdf__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-afg-pdf {
    padding: 48px 16px;
  }
}

.fmstr-cmp-afg-who-uses {
  --fmstr-cmp-afg-who-uses-bg-card: #ffffff;
  --fmstr-cmp-afg-who-uses-bg-violet-25: #f7f3ff;
  --fmstr-cmp-afg-who-uses-fg-1: #101828;
  --fmstr-cmp-afg-who-uses-fg-2: #475467;
  --fmstr-cmp-afg-who-uses-fg-3: #697586;
  --fmstr-cmp-afg-who-uses-violet-600: #6941c6;
  --fmstr-cmp-afg-who-uses-violet-700: #53389e;
  --fmstr-cmp-afg-who-uses-border-light: #eaecf0;
  --fmstr-cmp-afg-who-uses-border-violet: #9777e0;
  --fmstr-cmp-afg-who-uses-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-afg-who-uses-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-afg-who-uses-fs-xs: 12px;
  --fmstr-cmp-afg-who-uses-fs-sm: 14px;
  --fmstr-cmp-afg-who-uses-fs-md: 16px;
  --fmstr-cmp-afg-who-uses-fs-lg: 18px;
  --fmstr-cmp-afg-who-uses-fs-2xl: 24px;
  --fmstr-cmp-afg-who-uses-fs-3xl: 36px;
  --fmstr-cmp-afg-who-uses-fw-semibold: 600;
  --fmstr-cmp-afg-who-uses-fw-bold: 700;
  --fmstr-cmp-afg-who-uses-lh-md: 24px;
  --fmstr-cmp-afg-who-uses-lh-lg: 28px;
  --fmstr-cmp-afg-who-uses-lh-2xl: 32px;
  --fmstr-cmp-afg-who-uses-space-1: 4px;
  --fmstr-cmp-afg-who-uses-space-2: 8px;
  --fmstr-cmp-afg-who-uses-space-3: 12px;
  --fmstr-cmp-afg-who-uses-space-4: 16px;
  --fmstr-cmp-afg-who-uses-space-5: 20px;
  --fmstr-cmp-afg-who-uses-space-6: 24px;
  --fmstr-cmp-afg-who-uses-space-7: 28px;
  --fmstr-cmp-afg-who-uses-space-8: 32px;
  --fmstr-cmp-afg-who-uses-space-10: 40px;
  --fmstr-cmp-afg-who-uses-space-12: 48px;
  --fmstr-cmp-afg-who-uses-space-16: 64px;
  --fmstr-cmp-afg-who-uses-r-md: 8px;
  --fmstr-cmp-afg-who-uses-r-lg: 12px;
  --fmstr-cmp-afg-who-uses-r-2xl: 16px;

  padding: var(--fmstr-cmp-afg-who-uses-space-16) var(--fmstr-cmp-afg-who-uses-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-afg-who-uses-fg-1);
}

.fmstr-cmp-afg-who-uses *,
.fmstr-cmp-afg-who-uses *::before,
.fmstr-cmp-afg-who-uses *::after {
  box-sizing: border-box;
}

.fmstr-cmp-afg-who-uses__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-afg-who-uses__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-afg-who-uses-space-10);
  text-align: center;
}

.fmstr-cmp-afg-who-uses__heading {
  font-size: var(--fmstr-cmp-afg-who-uses-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-afg-who-uses-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-afg-who-uses-fg-1);
  margin: 0 0 var(--fmstr-cmp-afg-who-uses-space-3);
}

.fmstr-cmp-afg-who-uses__sub {
  font-size: var(--fmstr-cmp-afg-who-uses-fs-md);
  line-height: var(--fmstr-cmp-afg-who-uses-lh-md);
  color: var(--fmstr-cmp-afg-who-uses-fg-3);
  margin: 0;
}

.fmstr-cmp-afg-who-uses__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-afg-who-uses-space-5);
}

.fmstr-cmp-afg-who-uses__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-afg-who-uses-space-4);
  padding: var(--fmstr-cmp-afg-who-uses-space-7);
  background: var(--fmstr-cmp-afg-who-uses-bg-card);
  border: 1px solid var(--fmstr-cmp-afg-who-uses-border-light);
  border-radius: var(--fmstr-cmp-afg-who-uses-r-2xl);
  box-shadow: var(--fmstr-cmp-afg-who-uses-shadow-xs);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-afg-who-uses__card:hover {
  border-color: var(--fmstr-cmp-afg-who-uses-border-violet);
  box-shadow: var(--fmstr-cmp-afg-who-uses-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-afg-who-uses__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--fmstr-cmp-afg-who-uses-r-md);
  background: var(--fmstr-cmp-afg-who-uses-bg-violet-25);
  color: var(--fmstr-cmp-afg-who-uses-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-afg-who-uses__title {
  margin: 0;
  font-size: var(--fmstr-cmp-afg-who-uses-fs-lg);
  line-height: var(--fmstr-cmp-afg-who-uses-lh-lg);
  font-weight: var(--fmstr-cmp-afg-who-uses-fw-bold);
  color: var(--fmstr-cmp-afg-who-uses-fg-1);
}

.fmstr-cmp-afg-who-uses__body {
  margin: 0;
  font-size: var(--fmstr-cmp-afg-who-uses-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-afg-who-uses-fg-2);
}

.fmstr-cmp-afg-who-uses__divider {
  margin-top: auto;
  border: none;
  border-top: 1px solid var(--fmstr-cmp-afg-who-uses-border-light);
}

.fmstr-cmp-afg-who-uses__cta {
  color: var(--fmstr-cmp-afg-who-uses-violet-600);
  font-size: var(--fmstr-cmp-afg-who-uses-fs-sm);
  font-weight: var(--fmstr-cmp-afg-who-uses-fw-bold);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-afg-who-uses-space-1);
  transition: color 150ms ease;
}
.fmstr-cmp-afg-who-uses__cta:hover {
  color: var(--fmstr-cmp-afg-who-uses-violet-700);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .fmstr-cmp-afg-who-uses__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-afg-who-uses {
    padding: var(--fmstr-cmp-afg-who-uses-space-12) var(--fmstr-cmp-afg-who-uses-space-4);
  }
  .fmstr-cmp-afg-who-uses__heading {
    font-size: var(--fmstr-cmp-afg-who-uses-fs-2xl);
    line-height: var(--fmstr-cmp-afg-who-uses-lh-2xl);
  }
  .fmstr-cmp-afg-who-uses__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-afg-who-uses__card {
    padding: var(--fmstr-cmp-afg-who-uses-space-6);
  }
}

.fmstr-cmp-afg-api-mcp {
  --fmstr-cmp-afg-api-mcp-bg-card: #ffffff;
  --fmstr-cmp-afg-api-mcp-bg-tint: #f7f3ff;
  --fmstr-cmp-afg-api-mcp-bg-pill: #f4ebff;
  --fmstr-cmp-afg-api-mcp-bg-chip: #f2f4f7;
  --fmstr-cmp-afg-api-mcp-fg-1: #101828;
  --fmstr-cmp-afg-api-mcp-fg-2: #475467;
  --fmstr-cmp-afg-api-mcp-fg-strong: #344054;
  --fmstr-cmp-afg-api-mcp-violet-500: #7f56d9;
  --fmstr-cmp-afg-api-mcp-violet-600: #6941c6;
  --fmstr-cmp-afg-api-mcp-violet-300: #9777e0;
  --fmstr-cmp-afg-api-mcp-border: #eaecf0;
  --fmstr-cmp-afg-api-mcp-fs-xs: 12px;
  --fmstr-cmp-afg-api-mcp-fs-sm: 14px;
  --fmstr-cmp-afg-api-mcp-fs-md: 16px;
  --fmstr-cmp-afg-api-mcp-fs-lg: 18px;
  --fmstr-cmp-afg-api-mcp-fs-xl: 20px;
  --fmstr-cmp-afg-api-mcp-fs-2xl: 24px;
  --fmstr-cmp-afg-api-mcp-fs-3xl: 36px;
  --fmstr-cmp-afg-api-mcp-lh-md: 24px;
  --fmstr-cmp-afg-api-mcp-lh-lg: 28px;
  --fmstr-cmp-afg-api-mcp-lh-xl: 30px;
  --fmstr-cmp-afg-api-mcp-fw-semibold: 600;
  --fmstr-cmp-afg-api-mcp-fw-bold: 700;
  --fmstr-cmp-afg-api-mcp-space-2: 8px;
  --fmstr-cmp-afg-api-mcp-space-3: 12px;
  --fmstr-cmp-afg-api-mcp-space-4: 16px;
  --fmstr-cmp-afg-api-mcp-space-5: 20px;
  --fmstr-cmp-afg-api-mcp-space-6: 24px;
  --fmstr-cmp-afg-api-mcp-space-7: 28px;
  --fmstr-cmp-afg-api-mcp-space-8: 32px;
  --fmstr-cmp-afg-api-mcp-space-10: 40px;
  --fmstr-cmp-afg-api-mcp-space-12: 48px;
  --fmstr-cmp-afg-api-mcp-space-16: 64px;
  --fmstr-cmp-afg-api-mcp-r-md: 6px;
  --fmstr-cmp-afg-api-mcp-r-lg: 12px;
  --fmstr-cmp-afg-api-mcp-r-2xl: 16px;
  --fmstr-cmp-afg-api-mcp-r-full: 9999px;
  --fmstr-cmp-afg-api-mcp-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

  padding: var(--fmstr-cmp-afg-api-mcp-space-16) var(--fmstr-cmp-afg-api-mcp-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-afg-api-mcp *,
.fmstr-cmp-afg-api-mcp *::before,
.fmstr-cmp-afg-api-mcp *::after {
  box-sizing: border-box;
}

.fmstr-cmp-afg-api-mcp__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-afg-api-mcp__header {
  margin: 0 auto var(--fmstr-cmp-afg-api-mcp-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-afg-api-mcp__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-afg-api-mcp-space-2) var(--fmstr-cmp-afg-api-mcp-space-4);
  background: var(--fmstr-cmp-afg-api-mcp-bg-pill);
  color: var(--fmstr-cmp-afg-api-mcp-violet-600);
  border-radius: var(--fmstr-cmp-afg-api-mcp-r-full);
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-afg-api-mcp-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-afg-api-mcp-space-4);
}

.fmstr-cmp-afg-api-mcp__title {
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-afg-api-mcp-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-afg-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-afg-api-mcp-space-3);
}

.fmstr-cmp-afg-api-mcp__intro {
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-lg);
  line-height: var(--fmstr-cmp-afg-api-mcp-lh-lg);
  color: var(--fmstr-cmp-afg-api-mcp-fg-2);
  margin: 0;
}

.fmstr-cmp-afg-api-mcp__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-afg-api-mcp-space-5);
  align-items: stretch;
}

.fmstr-cmp-afg-api-mcp__card {
  background: var(--fmstr-cmp-afg-api-mcp-bg-card);
  border: 1px solid var(--fmstr-cmp-afg-api-mcp-border);
  border-radius: var(--fmstr-cmp-afg-api-mcp-r-2xl);
  padding: var(--fmstr-cmp-afg-api-mcp-space-8);
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
}
.fmstr-cmp-afg-api-mcp__card:hover {
  border-color: var(--fmstr-cmp-afg-api-mcp-violet-300);
  box-shadow: var(--fmstr-cmp-afg-api-mcp-shadow-md);
}

.fmstr-cmp-afg-api-mcp__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-afg-api-mcp-r-lg);
  background: var(--fmstr-cmp-afg-api-mcp-bg-tint);
  color: var(--fmstr-cmp-afg-api-mcp-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fmstr-cmp-afg-api-mcp-space-5);
  flex-shrink: 0;
}

.fmstr-cmp-afg-api-mcp__badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-afg-api-mcp-violet-500);
  color: #ffffff;
  border-radius: var(--fmstr-cmp-afg-api-mcp-r-md);
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-afg-api-mcp-fw-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-afg-api-mcp-space-3);
  align-self: flex-start;
}
.fmstr-cmp-afg-api-mcp__badge--alt {
  background: var(--fmstr-cmp-afg-api-mcp-bg-tint);
  color: var(--fmstr-cmp-afg-api-mcp-violet-600);
}

.fmstr-cmp-afg-api-mcp__card-title {
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-xl);
  line-height: var(--fmstr-cmp-afg-api-mcp-lh-xl);
  font-weight: var(--fmstr-cmp-afg-api-mcp-fw-semibold);
  letter-spacing: -0.01em;
  color: var(--fmstr-cmp-afg-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-afg-api-mcp-space-4);
}

.fmstr-cmp-afg-api-mcp__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-afg-api-mcp-space-2);
  margin-bottom: var(--fmstr-cmp-afg-api-mcp-space-4);
}

.fmstr-cmp-afg-api-mcp__chip {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-afg-api-mcp-bg-chip);
  color: var(--fmstr-cmp-afg-api-mcp-fg-strong);
  border-radius: var(--fmstr-cmp-afg-api-mcp-r-md);
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-sm);
  font-weight: var(--fmstr-cmp-afg-api-mcp-fw-semibold);
  line-height: 20px;
}

.fmstr-cmp-afg-api-mcp__body {
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-md);
  line-height: var(--fmstr-cmp-afg-api-mcp-lh-md);
  color: var(--fmstr-cmp-afg-api-mcp-fg-2);
  margin: 0 0 var(--fmstr-cmp-afg-api-mcp-space-5);
  flex: 1 1 auto;
}

.fmstr-cmp-afg-api-mcp__cta {
  color: var(--fmstr-cmp-afg-api-mcp-violet-600);
  font-weight: var(--fmstr-cmp-afg-api-mcp-fw-semibold);
  font-size: var(--fmstr-cmp-afg-api-mcp-fs-sm);
  text-decoration: none;
  align-self: flex-start;
}
.fmstr-cmp-afg-api-mcp__cta:hover {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-afg-api-mcp {
    padding: var(--fmstr-cmp-afg-api-mcp-space-12) var(--fmstr-cmp-afg-api-mcp-space-4);
  }
  .fmstr-cmp-afg-api-mcp__title {
    font-size: var(--fmstr-cmp-afg-api-mcp-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-afg-api-mcp__intro {
    font-size: var(--fmstr-cmp-afg-api-mcp-fs-md);
    line-height: var(--fmstr-cmp-afg-api-mcp-lh-md);
  }
  .fmstr-cmp-afg-api-mcp__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-afg-api-mcp__card {
    padding: var(--fmstr-cmp-afg-api-mcp-space-6);
  }
}

.fmstr-cmp-afg-engine {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-engine *,
.fmstr-cmp-afg-engine *::before,
.fmstr-cmp-afg-engine *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-engine__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-engine__header {
  margin: 0 auto 20px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-engine__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-600);
  background: #f4ebff;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  margin: 0 0 16px;
}
.fmstr-cmp-afg-engine__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-engine__body {
  margin: 0 auto;
  max-width: 760px;
  color: var(--c-fg-2);
  font-size: 16px;
  line-height: 1.7;
}
@media (max-width: 760px) {
  .fmstr-cmp-afg-engine {
    padding: 48px 16px;
  }
}

.fmstr-cmp-privacy-data-ownership {
  --fmstr-cmp-privacy-data-ownership-bg-section: #0f0921;
  --fmstr-cmp-privacy-data-ownership-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-privacy-data-ownership-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-privacy-data-ownership-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-privacy-data-ownership-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-privacy-data-ownership-fg-eyebrow: #bda6ff;
  --fmstr-cmp-privacy-data-ownership-fg-link: #bda6ff;
  --fmstr-cmp-privacy-data-ownership-fg-link-hover: #ffffff;
  --fmstr-cmp-privacy-data-ownership-fs-xs: 12px;
  --fmstr-cmp-privacy-data-ownership-fs-sm: 14px;
  --fmstr-cmp-privacy-data-ownership-fs-md: 16px;
  --fmstr-cmp-privacy-data-ownership-fs-lg: 18px;
  --fmstr-cmp-privacy-data-ownership-fs-2xl: 24px;
  --fmstr-cmp-privacy-data-ownership-fs-3xl: 32px;
  --fmstr-cmp-privacy-data-ownership-fw-semibold: 600;
  --fmstr-cmp-privacy-data-ownership-fw-bold: 700;
  --fmstr-cmp-privacy-data-ownership-lh-md: 24px;
  --fmstr-cmp-privacy-data-ownership-lh-lg: 28px;
  --fmstr-cmp-privacy-data-ownership-lh-2xl: 32px;
  --fmstr-cmp-privacy-data-ownership-space-1: 4px;
  --fmstr-cmp-privacy-data-ownership-space-2: 8px;
  --fmstr-cmp-privacy-data-ownership-space-3: 12px;
  --fmstr-cmp-privacy-data-ownership-space-4: 16px;
  --fmstr-cmp-privacy-data-ownership-space-5: 20px;
  --fmstr-cmp-privacy-data-ownership-space-6: 24px;
  --fmstr-cmp-privacy-data-ownership-space-7: 28px;
  --fmstr-cmp-privacy-data-ownership-space-8: 32px;
  --fmstr-cmp-privacy-data-ownership-space-12: 48px;
  --fmstr-cmp-privacy-data-ownership-space-16: 64px;
  --fmstr-cmp-privacy-data-ownership-r-2xl: 16px;
  --fmstr-cmp-privacy-data-ownership-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-privacy-data-ownership-space-12) var(--fmstr-cmp-privacy-data-ownership-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-privacy-data-ownership *,
.fmstr-cmp-privacy-data-ownership *::before,
.fmstr-cmp-privacy-data-ownership *::after {
  box-sizing: border-box;
}

.fmstr-cmp-privacy-data-ownership__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-privacy-data-ownership-bg-section);
  background-image: var(--fmstr-cmp-privacy-data-ownership-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-privacy-data-ownership-space-12);
  overflow: hidden;
}

.fmstr-cmp-privacy-data-ownership__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-privacy-data-ownership-space-12);
  align-items: center;
}

.fmstr-cmp-privacy-data-ownership__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-privacy-data-ownership-space-2) var(--fmstr-cmp-privacy-data-ownership-space-4);
  background: var(--fmstr-cmp-privacy-data-ownership-bg-pill);
  color: var(--fmstr-cmp-privacy-data-ownership-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-privacy-data-ownership-r-full);
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-xs);
  font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-privacy-data-ownership-space-5);
}

.fmstr-cmp-privacy-data-ownership__heading {
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-6);
}

.fmstr-cmp-privacy-data-ownership__body p {
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-md);
  line-height: var(--fmstr-cmp-privacy-data-ownership-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-4);
}
.fmstr-cmp-privacy-data-ownership__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-privacy-data-ownership__card {
  background-color: var(--fmstr-cmp-privacy-data-ownership-bg-card);
  background-image: var(--fmstr-cmp-privacy-data-ownership-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-privacy-data-ownership-r-2xl);
  padding: var(--fmstr-cmp-privacy-data-ownership-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-privacy-data-ownership__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-privacy-data-ownership-space-2) var(--fmstr-cmp-privacy-data-ownership-space-4);
  background: var(--fmstr-cmp-privacy-data-ownership-bg-pill);
  color: var(--fmstr-cmp-privacy-data-ownership-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-privacy-data-ownership-r-full);
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-xs);
  font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-privacy-data-ownership-space-5);
}

.fmstr-cmp-privacy-data-ownership__quote {
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-lg);
  line-height: var(--fmstr-cmp-privacy-data-ownership-lh-lg);
  font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-5);
}

.fmstr-cmp-privacy-data-ownership__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-5);
}

.fmstr-cmp-privacy-data-ownership__cite {
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-sm);
  line-height: var(--fmstr-cmp-privacy-data-ownership-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-3);
}

.fmstr-cmp-privacy-data-ownership__links {
  display: flex;
  gap: var(--fmstr-cmp-privacy-data-ownership-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-privacy-data-ownership__links a {
  color: var(--fmstr-cmp-privacy-data-ownership-fg-link);
  font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-semibold);
  font-size: var(--fmstr-cmp-privacy-data-ownership-fs-sm);
  text-decoration: none;
}

.fmstr-cmp-privacy-data-ownership__links a:hover {
  color: var(--fmstr-cmp-privacy-data-ownership-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-privacy-data-ownership {
    padding: var(--fmstr-cmp-privacy-data-ownership-space-8) var(--fmstr-cmp-privacy-data-ownership-space-4);
  }
  .fmstr-cmp-privacy-data-ownership__container {
    padding: var(--fmstr-cmp-privacy-data-ownership-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-privacy-data-ownership__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-privacy-data-ownership-space-8);
  }
  .fmstr-cmp-privacy-data-ownership__heading {
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-2xl);
    line-height: var(--fmstr-cmp-privacy-data-ownership-lh-2xl);
  }
  .fmstr-cmp-privacy-data-ownership__quote {
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-md);
    line-height: var(--fmstr-cmp-privacy-data-ownership-lh-md);
  }
  .fmstr-cmp-privacy-data-ownership__card {
    padding: var(--fmstr-cmp-privacy-data-ownership-space-6);
  }
}

.fmstr-cmp-afg-feat {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-border: #eaecf0;
  padding: 64px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  background: transparent;
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-afg-feat *,
.fmstr-cmp-afg-feat *::before,
.fmstr-cmp-afg-feat *::after {
  box-sizing: border-box;
}
.fmstr-cmp-afg-feat a {
  text-decoration: none !important;
}
.fmstr-cmp-afg-feat__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-afg-feat__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-afg-feat__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-feat__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-width: 0;
}
.fmstr-cmp-afg-feat__card {
  min-width: 0;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 26px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}
.fmstr-cmp-afg-feat__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  transform: translateY(-2px);
}
.fmstr-cmp-afg-feat__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  display: grid;
  place-items: center;
  color: var(--c-violet-600);
  flex-shrink: 0;
}
.fmstr-cmp-afg-feat__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-afg-feat__body {
  font-size: 15px;
  line-height: 1.55;
  color: var(--c-fg-2);
  margin: 0;
  flex: 1;
}
.fmstr-cmp-afg-feat__link {
  color: var(--c-violet-600) !important;
  font-weight: 600;
  font-size: 15px;
}
.fmstr-cmp-afg-feat__link:hover {
  text-decoration: underline !important;
  color: var(--c-violet-600) !important;
}
@media (max-width: 900px) {
  .fmstr-cmp-afg-feat__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-afg-feat {
    padding: 48px 16px;
  }
  .fmstr-cmp-afg-feat__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-more-ai-tools {
  --fmstr-cmp-more-ai-tools-bg-card: #ffffff;
  --fmstr-cmp-more-ai-tools-bg-violet-25: #f7f3ff;
  --fmstr-cmp-more-ai-tools-fg-1: #101828;
  --fmstr-cmp-more-ai-tools-fg-2: #475467;
  --fmstr-cmp-more-ai-tools-violet-600: #6941c6;
  --fmstr-cmp-more-ai-tools-violet-700: #53389e;
  --fmstr-cmp-more-ai-tools-border-light: #eaecf0;
  --fmstr-cmp-more-ai-tools-border-violet: #9777e0;
  --fmstr-cmp-more-ai-tools-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-more-ai-tools-fs-sm: 14px;
  --fmstr-cmp-more-ai-tools-fs-md: 16px;
  --fmstr-cmp-more-ai-tools-fs-2xl: 24px;
  --fmstr-cmp-more-ai-tools-fs-3xl: 36px;
  --fmstr-cmp-more-ai-tools-fw-regular: 400;
  --fmstr-cmp-more-ai-tools-fw-semibold: 600;
  --fmstr-cmp-more-ai-tools-lh-sm: 20px;
  --fmstr-cmp-more-ai-tools-lh-md: 24px;
  --fmstr-cmp-more-ai-tools-lh-2xl: 32px;
  --fmstr-cmp-more-ai-tools-space-1: 4px;
  --fmstr-cmp-more-ai-tools-space-3: 12px;
  --fmstr-cmp-more-ai-tools-space-4: 16px;
  --fmstr-cmp-more-ai-tools-space-6: 24px;
  --fmstr-cmp-more-ai-tools-space-8: 32px;
  --fmstr-cmp-more-ai-tools-space-12: 48px;
  --fmstr-cmp-more-ai-tools-space-16: 64px;
  --fmstr-cmp-more-ai-tools-r-lg: 8px;
  --fmstr-cmp-more-ai-tools-r-2xl: 16px;
  padding: var(--fmstr-cmp-more-ai-tools-space-16) var(--fmstr-cmp-more-ai-tools-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-more-ai-tools *,
.fmstr-cmp-more-ai-tools *::before,
.fmstr-cmp-more-ai-tools *::after {
  box-sizing: border-box;
}

.fmstr-cmp-more-ai-tools__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-more-ai-tools__heading {
  font-size: var(--fmstr-cmp-more-ai-tools-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-more-ai-tools-fw-semibold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-more-ai-tools-fg-1);
  text-align: center;
  margin: 0 0 var(--fmstr-cmp-more-ai-tools-space-12);
}

.fmstr-cmp-more-ai-tools__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-more-ai-tools-space-4);
}

.fmstr-cmp-more-ai-tools__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-more-ai-tools-space-3);
  padding: var(--fmstr-cmp-more-ai-tools-space-6);
  background: var(--fmstr-cmp-more-ai-tools-bg-card);
  border: 1px solid var(--fmstr-cmp-more-ai-tools-border-light);
  border-radius: var(--fmstr-cmp-more-ai-tools-r-2xl);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.fmstr-cmp-more-ai-tools__card:hover {
  border-color: var(--fmstr-cmp-more-ai-tools-border-violet);
  box-shadow: var(--fmstr-cmp-more-ai-tools-shadow-md);
  transform: translateY(-2px);
  text-decoration: none;
}

.fmstr-cmp-more-ai-tools__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-more-ai-tools-r-lg);
  background: var(--fmstr-cmp-more-ai-tools-bg-violet-25);
  color: var(--fmstr-cmp-more-ai-tools-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-more-ai-tools__title {
  font-size: var(--fmstr-cmp-more-ai-tools-fs-md);
  line-height: var(--fmstr-cmp-more-ai-tools-lh-md);
  font-weight: var(--fmstr-cmp-more-ai-tools-fw-semibold);
  color: var(--fmstr-cmp-more-ai-tools-fg-1);
  margin: var(--fmstr-cmp-more-ai-tools-space-1) 0 0;
}

.fmstr-cmp-more-ai-tools__desc {
  font-size: var(--fmstr-cmp-more-ai-tools-fs-sm);
  line-height: var(--fmstr-cmp-more-ai-tools-lh-sm);
  font-weight: var(--fmstr-cmp-more-ai-tools-fw-regular);
  color: var(--fmstr-cmp-more-ai-tools-fg-2);
  margin: 0;
}

@media (max-width: 760px) {
  .fmstr-cmp-more-ai-tools {
    padding: var(--fmstr-cmp-more-ai-tools-space-12) var(--fmstr-cmp-more-ai-tools-space-4);
  }
  .fmstr-cmp-more-ai-tools__heading {
    font-size: var(--fmstr-cmp-more-ai-tools-fs-2xl);
    line-height: var(--fmstr-cmp-more-ai-tools-lh-2xl);
    margin-bottom: var(--fmstr-cmp-more-ai-tools-space-8);
  }
  .fmstr-cmp-more-ai-tools__grid {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-more-ai-tools-space-3);
  }
}
</style>
