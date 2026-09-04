<template>
  <div>
    <AiHero
      description="Create quizzes faster with AI. Just enter a topic and our AI quiz generator will generate questions, answers, and scoring for you."
      type="Score Quiz"
      :hideIcons="false"
      buttonText="Generate my quiz"
      placeholder="Photosynthesis for grade 8: 10 multiple-choice questions with explanations"
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <Trustbadges :description="c2_description" :title="c2_title" :badges="c2_badges" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-inputs-question-types" aria-labelledby="fmstr-cmp-inputs-question-types-heading">
            <div class="fmstr-cmp-inputs-question-types__inner">
              <header class="fmstr-cmp-inputs-question-types__header">
                <h2 id="fmstr-cmp-inputs-question-types-heading" class="fmstr-cmp-inputs-question-types__heading">
                  Inputs, question types, and everywhere your quiz goes
                </h2>
                <p class="fmstr-cmp-inputs-question-types__sub">
                  What you can feed in, what comes out, and where it can live.
                </p>
              </header>

              <div class="fmstr-cmp-inputs-question-types__card">
                <div class="fmstr-cmp-inputs-question-types__row">
                  <div class="fmstr-cmp-inputs-question-types__label">
                    <span class="fmstr-cmp-inputs-question-types__icon" aria-hidden="true">
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 2v6h6"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-question-types__label-text">
                      <span class="fmstr-cmp-inputs-question-types__label-name">What Formester reads</span>
                      <span class="fmstr-cmp-inputs-question-types__label-meta">Inputs</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-question-types__body">
                    <p class="fmstr-cmp-inputs-question-types__desc">
                      A plain text prompt, a list of questions you already have, or a PDF of the source material (up to
                      100 MB on Free, 1 GB on Personal, 50 GB on Business). Type the topic and let the AI write from
                      there, or upload the chapter, deck, or article you want to test on.
                    </p>
                    <div class="fmstr-cmp-inputs-question-types__pills">
                      <span class="fmstr-cmp-inputs-question-types__pill">Prompt</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Question list</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">PDF</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Up to 50 GB</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-inputs-question-types__row">
                  <div class="fmstr-cmp-inputs-question-types__label">
                    <span class="fmstr-cmp-inputs-question-types__icon" aria-hidden="true">
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
                        <path d="M9 11h6M9 15h4"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-question-types__label-text">
                      <span class="fmstr-cmp-inputs-question-types__label-name">What the AI generates</span>
                      <span class="fmstr-cmp-inputs-question-types__label-meta">Question types</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-question-types__body">
                    <p class="fmstr-cmp-inputs-question-types__desc">
                      Multiple choice, single choice, dropdowns, and true or false (delivered as single-choice with True
                      and False as the two options). Mix question types in a single quiz, weight them differently per
                      question, add negative marking for wrong answers, and turn on answer validation so each wrong pick
                      gets an instant hint or explanation.
                    </p>
                    <div class="fmstr-cmp-inputs-question-types__pills">
                      <span class="fmstr-cmp-inputs-question-types__pill">Multiple choice</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Single choice</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Dropdown</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">True / false</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Negative marking</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Answer validation</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-inputs-question-types__row">
                  <div class="fmstr-cmp-inputs-question-types__label">
                    <span class="fmstr-cmp-inputs-question-types__icon" aria-hidden="true">
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
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <path d="M16 6l-4-4-4 4M12 2v14"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-inputs-question-types__label-text">
                      <span class="fmstr-cmp-inputs-question-types__label-name">Where your quiz lives</span>
                      <span class="fmstr-cmp-inputs-question-types__label-meta">Sharing and embedding</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-question-types__body">
                    <p class="fmstr-cmp-inputs-question-types__desc">
                      Public link, QR code, and embed snippet out of the box. Email it, post it on a product page, drop
                      it in a training portal, or print the QR onto a handout.
                    </p>
                    <div class="fmstr-cmp-inputs-question-types__pills">
                      <span class="fmstr-cmp-inputs-question-types__pill">Link</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">QR code</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Embed</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Email</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Print</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-inputs-question-types__row">
                  <div class="fmstr-cmp-inputs-question-types__label">
                    <span class="fmstr-cmp-inputs-question-types__icon" aria-hidden="true">
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
                    <span class="fmstr-cmp-inputs-question-types__label-text">
                      <span class="fmstr-cmp-inputs-question-types__label-name">What you get back</span>
                      <span class="fmstr-cmp-inputs-question-types__label-meta">Scoring and analytics</span>
                    </span>
                  </div>
                  <div class="fmstr-cmp-inputs-question-types__body">
                    <p class="fmstr-cmp-inputs-question-types__desc">
                      Per-quiz score, per-question breakdown, time spent, completion rate, partial-submission recovery,
                      and drop-off by question. Push results into HubSpot, Salesforce, Google Sheets, Slack, Mailchimp,
                      Notion, or any of the 1,000+ apps Formester connects to, or trigger a webhook on every submission.
                    </p>
                    <div class="fmstr-cmp-inputs-question-types__pills">
                      <span class="fmstr-cmp-inputs-question-types__pill">Auto-score</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Pass / fail</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Outcome routing</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Partial submissions</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">Webhook</span>
                      <span class="fmstr-cmp-inputs-question-types__pill">1,000+ integrations</span>
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
          <section class="fmstr-cmp-question-quality" aria-labelledby="fmstr-cmp-question-quality-heading">
            <div class="fmstr-cmp-question-quality__container">
              <div class="fmstr-cmp-question-quality__inner">
                <div class="fmstr-cmp-question-quality__text">
                  <span class="fmstr-cmp-question-quality__eyebrow">Question quality</span>
                  <h2 id="fmstr-cmp-question-quality-heading" class="fmstr-cmp-question-quality__heading">
                    The model writes the first draft. You ship the final one.
                  </h2>
                  <div class="fmstr-cmp-question-quality__body">
                    <p>
                      Formester runs on Google Gemini, grounds every question in the content you uploaded, shows you the
                      source passage next to each question during review, flags any answer the model marked correct
                      where the source text is ambiguous, and locks nothing until you click publish. Your uploaded
                      content is not used to train any third-party model. The review workflow is not optional, and that
                      is on purpose.
                    </p>
                  </div>
                </div>

                <aside class="fmstr-cmp-question-quality__card">
                  <span class="fmstr-cmp-question-quality__pill">Why review matters</span>
                  <blockquote class="fmstr-cmp-question-quality__quote">
                    "AI-generated test items need human review before use."
                  </blockquote>
                  <hr class="fmstr-cmp-question-quality__divider" />
                  <p class="fmstr-cmp-question-quality__cite">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z"></path>
                    </svg>
                    <span
                      >Independent research consistently finds that AI-generated questions require human review before
                      they are used with students or trainees. Formester's review workflow makes that step the default,
                      not an afterthought.</span
                    >
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
          <section class="fmstr-cmp-how-to-build-a-quiz" aria-labelledby="fmstr-cmp-how-to-build-a-quiz-heading">
            <div class="fmstr-cmp-how-to-build-a-quiz__inner">
              <header class="fmstr-cmp-how-to-build-a-quiz__header">
                <h2 id="fmstr-cmp-how-to-build-a-quiz-heading" class="fmstr-cmp-how-to-build-a-quiz__heading">
                  How to build a quiz in under a minute
                </h2>
                <p class="fmstr-cmp-how-to-build-a-quiz__subhead">Four steps from zero to a quiz you can send.</p>
              </header>

              <div class="fmstr-cmp-how-to-build-a-quiz__grid">
                <article class="fmstr-cmp-how-to-build-a-quiz__card">
                  <span class="fmstr-cmp-how-to-build-a-quiz__num" aria-hidden="true">1</span>
                  <h3 class="fmstr-cmp-how-to-build-a-quiz__title">Bring your content</h3>
                  <p class="fmstr-cmp-how-to-build-a-quiz__desc">
                    Paste a prompt like "Algebra basics for grade 9, 10 multiple-choice questions" or upload a PDF of
                    the chapter, training deck, or article you want to test on. Formester reads it and pulls out the
                    facts worth testing.
                  </p>
                </article>

                <article class="fmstr-cmp-how-to-build-a-quiz__card">
                  <span class="fmstr-cmp-how-to-build-a-quiz__num" aria-hidden="true">2</span>
                  <h3 class="fmstr-cmp-how-to-build-a-quiz__title">Pick the shape</h3>
                  <p class="fmstr-cmp-how-to-build-a-quiz__desc">
                    Choose how many questions and the format you want (multiple choice, single choice, dropdown,
                    image-based, or video). Scored or outcome, timed or untimed, with answer validation on or off.
                  </p>
                </article>

                <article class="fmstr-cmp-how-to-build-a-quiz__card">
                  <span class="fmstr-cmp-how-to-build-a-quiz__num" aria-hidden="true">3</span>
                  <h3 class="fmstr-cmp-how-to-build-a-quiz__title">Review and edit</h3>
                  <p class="fmstr-cmp-how-to-build-a-quiz__desc">
                    The draft lands in the quiz builder. Rewrite the wording, swap a correct answer, add a question the
                    AI missed, change the point values, set a passing score. Nothing ships until you say so.
                  </p>
                </article>

                <article class="fmstr-cmp-how-to-build-a-quiz__card">
                  <span class="fmstr-cmp-how-to-build-a-quiz__num" aria-hidden="true">4</span>
                  <h3 class="fmstr-cmp-how-to-build-a-quiz__title">Share and track</h3>
                  <p class="fmstr-cmp-how-to-build-a-quiz__desc">
                    Publish a public link, generate a QR, or embed the quiz on your site. Every submission lands in the
                    dashboard with score, time taken, completion rate, and partial-submission recovery. Push results
                    into HubSpot, Salesforce, Google Sheets, Slack, or any of the 1,000+ apps Formester connects to.
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
          <section
            class="fmstr-cmp-why-teams-pick-formester"
            aria-labelledby="fmstr-cmp-why-teams-pick-formester-heading"
          >
            <div class="fmstr-cmp-why-teams-pick-formester__inner">
              <header class="fmstr-cmp-why-teams-pick-formester__header">
                <h2 id="fmstr-cmp-why-teams-pick-formester-heading" class="fmstr-cmp-why-teams-pick-formester__heading">
                  Why teams pick Formester over the ten other AI quiz makers
                </h2>
                <p class="fmstr-cmp-why-teams-pick-formester__subhead">
                  Generating the quiz is the easy part. The reason you stay is what happens after.
                </p>
              </header>

              <div class="fmstr-cmp-why-teams-pick-formester__grid">
                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--purple"
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
                      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path>
                      <path d="M19 3v2"></path>
                      <path d="M19 19v2"></path>
                      <path d="M5 18v2"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Create Engaging Quizzes Faster</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    Design fun and interactive quizzes that keep your users engaged using AI, whether they're for
                    learning or entertainment.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--orange"
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
                      <circle cx="6" cy="6" r="2.5"></circle>
                      <circle cx="18" cy="6" r="2.5"></circle>
                      <circle cx="12" cy="18" r="2.5"></circle>
                      <path d="M7.5 8 11 16"></path>
                      <path d="M16.5 8 13 16"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Quick and Easy Setup</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    With our AI-powered outcome quiz maker, you can create quizzes quickly, even if you have no prior
                    experience.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--blue"
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
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 12 18 6"></path>
                      <path d="M12 3v9h9"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Score it your way</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    Scored quizzes with pass/fail thresholds, outcome quizzes that route people to a result based on
                    their answers, or a hybrid that does both. Weighted points per question, negative marking for wrong
                    answers, quiz timers, and answer validation that fires an instant hint or explanation when a learner
                    picks wrong. All built in.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--pink"
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
                      <rect x="3.5" y="5" width="17" height="14" rx="2"></rect>
                      <circle cx="9" cy="11" r="2"></circle>
                      <path d="M5.5 17c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3"></path>
                      <path d="M14.5 10h4"></path>
                      <path d="M14.5 13h3"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Fully Customizable Outcomes</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    Tailor quiz outcomes based on users' responses, making every quiz unique and relevant.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--violet"
                    aria-hidden="true"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none"></circle>
                      <polyline points="8 12 11 15 16 9" stroke="#7c3aed"></polyline>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Edit every question before you ship</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    AI writes the first draft, not the final one. Reorder questions, rewrite answer choices, change the
                    correct answer, or delete the ones that don't fit. Your quiz, your wording.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--magenta"
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
                      <path
                        d="M12 2c2.5 2 4 5 4 8a8 8 0 0 1-1.5 4.5L12 17l-2.5-2.5A8 8 0 0 1 8 10c0-3 1.5-6 4-8Z"
                      ></path>
                      <circle cx="12" cy="10" r="2"></circle>
                      <path d="M9 17l-2 4 4-1"></path>
                      <path d="M15 17l2 4-4-1"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Instant Results and Feedback</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    Get immediate results for your participants. They'll know their scores or outcomes right after
                    finishing the quiz.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--green"
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
                      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                      <path d="M14 14h3v3h-3z"></path>
                      <path d="M19 14h2"></path>
                      <path d="M14 19h3"></path>
                      <path d="M19 19v2"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Share as a link, QR code, or embed</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    Every quiz comes with a public link and a QR code, and embeds on any site with a two-line snippet.
                    Put it in an email, a training module, a Slack message, or a product page. Responses land in the
                    same dashboard either way.
                  </p>
                </article>

                <article class="fmstr-cmp-why-teams-pick-formester__card">
                  <span
                    class="fmstr-cmp-why-teams-pick-formester__icon fmstr-cmp-why-teams-pick-formester__icon--rose"
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
                      <path d="M5 3l4 14 2.5-5.5L17 9 5 3Z"></path>
                      <path d="m14 14 5 5"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-why-teams-pick-formester__title">Use for Multiple Use Cases</h3>
                  <p class="fmstr-cmp-why-teams-pick-formester__desc">
                    Use quizzes for various purposes, like education, customer feedback, or team training, making your
                    quizzes valuable across different fields.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <CardGrid
      eyebrow="Who it's for"
      description="Built for anyone who needs fast, reliable, professional quizzes without manual work."
      columns="3"
      background="#ffffff"
      :title="c7_title"
      :cards="c7_cards"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-start-from-template" aria-labelledby="fmstr-cmp-start-from-template-heading">
            <div class="fmstr-cmp-start-from-template__inner">
              <header class="fmstr-cmp-start-from-template__header">
                <h2 id="fmstr-cmp-start-from-template-heading" class="fmstr-cmp-start-from-template__heading">
                  Start from a quiz template
                </h2>
                <p class="fmstr-cmp-start-from-template__sub">
                  Every template below is fully editable. Swap the questions, change the scoring, rebrand in a click.
                </p>
              </header>

              <div class="fmstr-cmp-start-from-template__grid">
                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/categories/quizzes/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <path d="M3 9h18"></path>
                      <path d="M9 3v18"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">All quiz templates (50+)</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/employee-training-quiz-assessing-key-skills-46228/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">Employee Training Quiz</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/general-knowledge-mcq-quiz-27608/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <path d="M9 10a3 3 0 1 1 5 2c-1 1-2 2-2 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">General Knowledge MCQ Quiz</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/real-estate-lead-magnet-quiz-46232/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-8H9v8H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">Real Estate Lead Magnet Quiz</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/financial-literacy-knowledge-quiz-46229/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">Financial Literacy Knowledge Quiz</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/color-personality-quiz-46197/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <circle cx="13.5" cy="6.5" r="2.5"></circle>
                      <circle cx="19" cy="13" r="2.5"></circle>
                      <circle cx="5" cy="13" r="2.5"></circle>
                      <circle cx="13.5" cy="19" r="2.5"></circle>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">Color Personality Quiz</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/big-five-personality-test-46231/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">Big Five Personality Test</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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

                <a
                  class="fmstr-cmp-start-from-template__card"
                  href="https://formester.com/templates/spelling-bee-practice-test-46207/"
                >
                  <span class="fmstr-cmp-start-from-template__icon" aria-hidden="true">
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
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <path d="M8 8h8M8 12h8M8 16h5"></path>
                    </svg>
                  </span>
                  <span class="fmstr-cmp-start-from-template__title">Spelling Bee Practice Test</span>
                  <svg
                    class="fmstr-cmp-start-from-template__arrow"
                    width="16"
                    height="16"
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-ai-vs-traditional" aria-labelledby="fmstr-cmp-ai-vs-traditional-heading">
            <div class="fmstr-cmp-ai-vs-traditional__inner">
              <header class="fmstr-cmp-ai-vs-traditional__header">
                <h2 id="fmstr-cmp-ai-vs-traditional-heading" class="fmstr-cmp-ai-vs-traditional__heading">
                  AI quiz maker vs the traditional way
                </h2>
                <p class="fmstr-cmp-ai-vs-traditional__sub">
                  When the AI is worth it, and when a drag-and-drop builder still wins.
                </p>
              </header>

              <div class="fmstr-cmp-ai-vs-traditional__table-wrap">
                <table class="fmstr-cmp-ai-vs-traditional__table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th class="fmstr-cmp-ai-vs-traditional__th--us">Formester AI Quiz Maker</th>
                      <th>Traditional quiz builder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Time to first question</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">Under 20 seconds from a prompt or PDF</td>
                      <td>15 to 45 minutes to write 10 questions from scratch</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Question writing</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">AI drafts, you edit</td>
                      <td>You write every word</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Grading logic</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">
                        Auto-scored, pass/fail thresholds, outcome routing, weighted points, timers
                      </td>
                      <td>Auto-scored, usually with templates</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Generate from a PDF source</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">Yes. Upload the chapter or deck.</td>
                      <td>No. You read the source, then type.</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Editing control</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">Every question editable before publish</td>
                      <td>Every question editable</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">
                        Answer validation (instant feedback / hints)
                      </td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">Built in</td>
                      <td>Usually a separate config</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Best for</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">
                        First drafts, knowledge checks on large content, training at scale
                      </td>
                      <td>Small custom quizzes where every word matters</td>
                    </tr>
                    <tr>
                      <td class="fmstr-cmp-ai-vs-traditional__row-label">Honest weakness</td>
                      <td class="fmstr-cmp-ai-vs-traditional__us-cell">
                        5 to 10% of generated questions need rewording
                      </td>
                      <td>Slow when you have a lot of source material</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="fmstr-cmp-ai-vs-traditional__caption">
                Both live in Formester. Start a quiz with AI, edit by hand, or skip the AI and build from scratch. Same
                dashboard either way.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <FeatureShowcase :steps="false" :title="c10_title" :itemList="c10_itemList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-api-mcp-developers" aria-labelledby="fmstr-cmp-api-mcp-developers-heading">
            <div class="fmstr-cmp-api-mcp-developers__inner">
              <header class="fmstr-cmp-api-mcp-developers__header">
                <span class="fmstr-cmp-api-mcp-developers__eyebrow">For developers and AI agents</span>
                <h2 id="fmstr-cmp-api-mcp-developers-heading" class="fmstr-cmp-api-mcp-developers__heading">
                  Your quiz data, ready for the AI you already use
                </h2>
                <p class="fmstr-cmp-api-mcp-developers__sub">
                  Connect Claude, ChatGPT, or any AI agent directly to your submissions. Or hit the REST API and pull
                  what you need.
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
                    Formester ships an MCP server that any MCP-compatible model can read in one connection. Ask
                    plain-language questions: "Show me everyone who scored under 60% on this week's onboarding quiz,"
                    "Which question did students answer wrong most often?", "Summarize the feedback from yesterday's
                    training submissions." No CSV export, no copy-paste, no glue code.
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
                    Organization-level scope, self-service token in two clicks at app.formester.com/api, and full read
                    access to forms and submissions. v1 is still around for legacy form-level integrations, but new
                    builds should start on v2.
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
                      When you upload a PDF, paste a prompt, or generate a quiz, that content is used to generate your
                      quiz and nothing else. Per Section 4.4 of our DPA, Formester does not use Customer Data for
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

    <TestimonialsV2
      description="Learn What Our Customers Has to Say!"
      version="home"
      :heading="c13_heading"
      :testimonials="c13_testimonials"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c14_ctaValue" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-more-ai-tools-aqm" aria-labelledby="fmstr-cmp-more-ai-tools-aqm-heading">
            <div class="fmstr-cmp-more-ai-tools-aqm__inner">
              <h2 id="fmstr-cmp-more-ai-tools-aqm-heading" class="fmstr-cmp-more-ai-tools-aqm__heading">
                More AI tools from Formester
              </h2>

              <div class="fmstr-cmp-more-ai-tools-aqm__grid">
                <a class="fmstr-cmp-more-ai-tools-aqm__card" href="/ai-form-generator/#ai-form-builder">
                  <span class="fmstr-cmp-more-ai-tools-aqm__icon" aria-hidden="true">
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
                      <path d="M14 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9"></path>
                      <path d="M18 2l4 4-10 10H8v-4z"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools-aqm__title">AI Form Generator</h3>
                  <p class="fmstr-cmp-more-ai-tools-aqm__desc">
                    Generate any form from a prompt, PDF, or paste-list of questions.
                  </p>
                </a>

                <a class="fmstr-cmp-more-ai-tools-aqm__card" href="https://formester.com/ai-survey-generator/">
                  <span class="fmstr-cmp-more-ai-tools-aqm__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-more-ai-tools-aqm__title">AI Survey Generator</h3>
                  <p class="fmstr-cmp-more-ai-tools-aqm__desc">
                    NPS, CSAT, employee engagement, from a one-line brief.
                  </p>
                </a>

                <a
                  class="fmstr-cmp-more-ai-tools-aqm__card"
                  href="https://formester.com/ai-powered-multilingual-forms/"
                >
                  <span class="fmstr-cmp-more-ai-tools-aqm__icon" aria-hidden="true">
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
                      <path d="M12 3a13 13 0 0 1 0 18"></path>
                      <path d="M12 3a13 13 0 0 0 0 18"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-more-ai-tools-aqm__title">AI Multilingual Forms</h3>
                  <p class="fmstr-cmp-more-ai-tools-aqm__desc">Write once, auto-publish in 180+ languages.</p>
                </a>

                <a class="fmstr-cmp-more-ai-tools-aqm__card" href="https://formester.com/features/ai-workflows/">
                  <span class="fmstr-cmp-more-ai-tools-aqm__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-more-ai-tools-aqm__title">AI Workflows</h3>
                  <p class="fmstr-cmp-more-ai-tools-aqm__desc">
                    Trigger logic, routing, and notifications from form responses.
                  </p>
                </a>
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
import AiHero from '@/components/features/AiHero.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_title = [
  {
    id: 4932,
    text: 'AI Quiz Maker that turns any prompt or a PDF into ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4930,
    text: 'a scored quiz',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 4929,
    text: ' in 30 seconds',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_suggestions = [
  {
    id: 37,
    text: 'Create a grade 8 photosynthesis quiz with 10 multiple-choice questions and scoring.',
    label: 'Grade 8 science quiz',
  },
  {
    id: 39,
    text: 'Create a 5-question "which plan fits you" outcome quiz with email capture.',
    label: 'Outcome quiz',
  },
  {
    id: 38,
    text: 'Create a workplace harassment quiz with 10 questions, 80% pass mark, and certificate.',
    label: 'Compliance quiz',
  },
]
const c0_footerItems = [
  {
    id: 2652,
    text: 'No Coding Required',
  },
  {
    id: 2653,
    text: '56,000+ Active Users',
  },
  {
    id: 2654,
    text: 'No Credit Card Required',
  },
]
const c1_title = []
const c1_logos = []
const c2_description =
  'Create quizzes with confidence. Formester is rated highly across leading review platforms for its AI quiz generator, ease of use, and automatic scoring features.'
const c2_title = [
  {
    id: 4928,
    text: 'Trusted by 56,000+ Teachers, HR, Marketers, and Trainers',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c2_badges = [
  {
    id: 37,
    ratingNumber: '5/5',
    logo: {
      id: 4070,
      imageAlt: 'Product Hunt',
      imageUrl: null,
      width: 171,
      height: 40,
      image: {
        id: 4419,
        name: 'product-hunt.svg',
        alternativeText: null,
        caption: null,
        width: 162,
        height: 38,
        formats: null,
        hash: 'product_hunt_e2e4bc7036',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 4.24,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/product_hunt_e2e4bc7036.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.830Z',
        updatedAt: '2026-04-30T06:51:08.830Z',
      },
    },
    stars: {
      id: 4080,
      imageAlt: '5 stars',
      imageUrl: null,
      width: 139,
      height: 24,
      image: {
        id: 4422,
        name: '5-stars.svg',
        alternativeText: null,
        caption: null,
        width: 116,
        height: 20,
        formats: null,
        hash: '5_stars_1ab86c2e05',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 8.48,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/5_stars_1ab86c2e05.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.905Z',
        updatedAt: '2026-05-03T11:47:18.420Z',
      },
    },
  },
  {
    id: 36,
    ratingNumber: '4.4/5',
    logo: {
      id: 4072,
      imageAlt: 'Trustpilot',
      imageUrl: null,
      width: 163,
      height: 40,
      image: {
        id: 4420,
        name: 'trustpilot.svg',
        alternativeText: null,
        caption: null,
        width: 1133,
        height: 278,
        formats: null,
        hash: 'trustpilot_8110e8fa37',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 4.18,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/trustpilot_8110e8fa37.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.833Z',
        updatedAt: '2026-04-30T06:53:47.981Z',
      },
    },
    stars: {
      id: 4081,
      imageAlt: '4.5 stars',
      imageUrl: null,
      width: 139,
      height: 24,
      image: {
        id: 4417,
        name: '4.5-stars.svg',
        alternativeText: null,
        caption: null,
        width: 116,
        height: 20,
        formats: null,
        hash: '4_5_stars_a241f011b4',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 8.5,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/4_5_stars_a241f011b4.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.788Z',
        updatedAt: '2026-04-30T06:51:08.788Z',
      },
    },
  },
  {
    id: 34,
    ratingNumber: '5/5',
    logo: {
      id: 4071,
      imageAlt: 'Capterra',
      imageUrl: null,
      width: 174,
      height: 40,
      image: {
        id: 4421,
        name: 'capterra.svg',
        alternativeText: null,
        caption: null,
        width: 1500,
        height: 345,
        formats: null,
        hash: 'capterra_b1e2a24cba',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 9.39,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/capterra_b1e2a24cba.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.897Z',
        updatedAt: '2026-05-03T12:22:08.650Z',
      },
    },
    stars: {
      id: 4078,
      imageAlt: '5 stars',
      imageUrl: null,
      width: 139,
      height: 24,
      image: {
        id: 4422,
        name: '5-stars.svg',
        alternativeText: null,
        caption: null,
        width: 116,
        height: 20,
        formats: null,
        hash: '5_stars_1ab86c2e05',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 8.48,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/5_stars_1ab86c2e05.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.905Z',
        updatedAt: '2026-05-03T11:47:18.420Z',
      },
    },
  },
  {
    id: 35,
    ratingNumber: '4.7/5',
    logo: {
      id: 4073,
      imageAlt: 'G2 Crowd',
      imageUrl: null,
      width: 40,
      height: 40,
      image: {
        id: 4418,
        name: 'g2-crowd.svg',
        alternativeText: null,
        caption: null,
        width: 54,
        height: 54,
        formats: null,
        hash: 'g2_crowd_1acb49759d',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.4,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/g2_crowd_1acb49759d.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.792Z',
        updatedAt: '2026-04-30T06:51:08.792Z',
      },
    },
    stars: {
      id: 4079,
      imageAlt: '4.5 stars',
      imageUrl: null,
      width: 139,
      height: 24,
      image: {
        id: 4417,
        name: '4.5-stars.svg',
        alternativeText: null,
        caption: null,
        width: 116,
        height: 20,
        formats: null,
        hash: '4_5_stars_a241f011b4',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 8.5,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/4_5_stars_a241f011b4.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2026-04-30T06:51:08.788Z',
        updatedAt: '2026-04-30T06:51:08.788Z',
      },
    },
  },
]
const c7_title = [
  {
    id: 4927,
    text: 'Who uses the ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4933,
    text: 'AI quiz maker',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c7_cards = [
  {
    id: 729,
    tag: 'Teachers',
    tagColor: 'violet',
    title: '',
    body: 'Upload a chapter PDF or paste your lesson outline, and Formester drafts a graded quiz that maps to what you actually taught. Auto-score it, turn on answer validation so each wrong answer comes with a hint or explanation, and watch the dashboard for the kid who is falling behind in week four, not week fourteen.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 727,
    tag: 'Marketers',
    tagColor: 'blue',
    title: '',
    body: 'Lead-magnet quizzes that score the visitor, route them to a result page with their outcome, and drop the qualified lead into HubSpot, Salesforce, or Mailchimp via the integrations Formester ships with. Apply your branding kit, split-test the result-page copy, and watch drop-off by question in the analytics view.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 728,
    tag: 'HR Teams',
    tagColor: 'green',
    title: '',
    body: 'Onboarding knowledge checks, annual compliance refreshers, and policy-comprehension tests that prove people read what you sent. Formester tracks attempts, time spent, and passing scores per hire, with conditional-logic branching so a missed question routes the employee back to the right policy doc before they retake.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 730,
    tag: 'Coaches & Trainers',
    tagColor: 'amber',
    title: '',
    body: 'Pre-call diagnostics, personality-style intake quizzes, and progress check-ins. Outcome logic routes each client to a custom result page with their own image, copy, and next step, and responses sync into your CRM so you walk into every session already briefed on what they answered.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 731,
    tag: 'Course creators',
    tagColor: 'rose',
    title: '',
    body: 'Generate a diagnostic quiz from a prompt that names the course topic, a module check from each chapter PDF, and a final summary quiz from the whole syllabus. Mix scored and outcome logic so the same quiz grades knowledge and routes students to the next module based on what they got wrong.',
    mockHtml: null,
    icon: null,
  },
]
const c10_title = [
  {
    id: 4931,
    text: 'What Teachers, Trainers, and Marketers love about Our Quizzes',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c10_itemList = [
  {
    id: 2485,
    title: 'Limit responses',
    description:
      'Set a max number of submissions, a close date, or a passing-score cutoff that hides the quiz after it is met. Useful for timed tests, first-100-respondents lead gen, and waves of training that need to end on a specific day. Learn about form limiter →',
    description_markdown:
      'Set a max number of submissions, a close date, or a passing-score cutoff that hides the quiz after it is met. Useful for timed tests, first-100-respondents lead gen, and waves of training that need to end on a specific day. [Learn about form limiter →](https://formester.com/features/form-limiter/)',
    icon: null,
    cardImage: {
      id: 4074,
      imageAlt: "formester's form limiter ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2306,
        name: 'Component 937.png',
        alternativeText: null,
        caption: null,
        width: 1364,
        height: 1042,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Component_937_1232837894.png',
            hash: 'large_Component_937_1232837894',
            mime: 'image/png',
            name: 'large_Component 937.png',
            path: null,
            size: 109.23,
            width: 1000,
            height: 764,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_937_1232837894.png',
            hash: 'small_Component_937_1232837894',
            mime: 'image/png',
            name: 'small_Component 937.png',
            path: null,
            size: 35.96,
            width: 500,
            height: 382,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Component_937_1232837894.png',
            hash: 'medium_Component_937_1232837894',
            mime: 'image/png',
            name: 'medium_Component 937.png',
            path: null,
            size: 69.31,
            width: 750,
            height: 573,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_937_1232837894.png',
            hash: 'thumbnail_Component_937_1232837894',
            mime: 'image/png',
            name: 'thumbnail_Component 937.png',
            path: null,
            size: 10.25,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_937_1232837894',
        ext: '.png',
        mime: 'image/png',
        size: 29.4,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_937_1232837894.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:31:17.845Z',
        updatedAt: '2024-11-05T18:31:17.845Z',
      },
    },
  },
  {
    id: 2487,
    title: 'QR code on every quiz',
    description:
      'Every published quiz ships with a QR code. Print it on a handout, put it on a slide at the back of the room, drop it in an email footer. The QR links to the same takeable quiz as the share link. QR code generator →',
    description_markdown:
      'Every published quiz ships with a QR code. Print it on a handout, put it on a slide at the back of the room, drop it in an email footer. The QR links to the same takeable quiz as the share link. Learn more about [QR code generator →](https://formester.com/features/qr-code-generator/)\n',
    icon: null,
    cardImage: {
      id: 4076,
      imageAlt: "formester's qr code generator ui",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2307,
        name: 'Component 936.png',
        alternativeText: null,
        caption: null,
        width: 682,
        height: 522,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_936_fbb00ec273.png',
            hash: 'small_Component_936_fbb00ec273',
            mime: 'image/png',
            name: 'small_Component 936.png',
            path: null,
            size: 44.85,
            width: 500,
            height: 383,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_936_fbb00ec273.png',
            hash: 'thumbnail_Component_936_fbb00ec273',
            mime: 'image/png',
            name: 'thumbnail_Component 936.png',
            path: null,
            size: 14.27,
            width: 204,
            height: 156,
          },
        },
        hash: 'Component_936_fbb00ec273',
        ext: '.png',
        mime: 'image/png',
        size: 11.2,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_936_fbb00ec273.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:31:25.381Z',
        updatedAt: '2024-11-05T18:31:25.381Z',
      },
    },
  },
  {
    id: 2488,
    title: 'Auto-translate the quiz',
    description:
      "enerate a quiz in English, then publish localized versions in additional languages with AI translation, without rewriting the logic. Scores, outcomes, and analytics merge across languages so you're reporting on one quiz, not many. Multi-language translations →",
    description_markdown:
      "enerate a quiz in English, then publish localized versions in additional languages with AI translation, without rewriting the logic. Scores, outcomes, and analytics merge across languages so you're reporting on one quiz, not many. \nLearn more about [Multi-language translations →](https://formester.com/features/multi-language-form-translations/)",
    icon: null,
    cardImage: {
      id: 4075,
      imageAlt: "a screenshot of formester's multi language translation feature",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2164,
        name: "a screenshot of formester's AI multi language translation feature.svg",
        alternativeText: "a screenshot of formester's AI multi language translation feature",
        caption: "a screenshot of formester's AI multi language translation feature",
        width: 682,
        height: 522,
        formats: null,
        hash: 'Component_926_2_91ff6d31b7',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 183.29,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_2_91ff6d31b7.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-10-06T05:46:22.061Z',
        updatedAt: '2025-03-04T03:09:25.289Z',
      },
    },
  },
  {
    id: 2486,
    title: 'Offline quizzes that sync without internet',
    description:
      'Install the Formester app on a laptop, tablet, or phone and the quiz works without a connection. Responses cache locally, and the moment the device reconnects, every submission syncs into the dashboard automatically. Useful for fieldwork, on-site events, or training rooms with bad wi-fi. Offline forms →',
    description_markdown:
      'Install the Formester app on a laptop, tablet, or phone and the quiz works without a connection. Responses cache locally, and the moment the device reconnects, every submission syncs into the dashboard automatically. Useful for fieldwork, on-site events, or training rooms with bad wi-fi. \nLearn more about [Offline forms →](https://formester.com/features/offline-forms/)',
    icon: null,
    cardImage: {
      id: 4077,
      imageAlt: 'an illustration of offline quizzes',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1669,
        name: 'an illustration of offline quizzes.svg',
        alternativeText: 'an illustration of offline quizzes',
        caption: 'an illustration of offline quizzes',
        width: 311,
        height: 250,
        formats: null,
        hash: 'step3_de74c10630',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 11.92,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/step3_de74c10630.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T07:23:05.639Z',
        updatedAt: '2025-03-04T03:01:09.761Z',
      },
    },
  },
]
const c13_heading = [
  {
    id: 4935,
    text: 'Testimonials',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c13_testimonials = [
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
const c14_ctaValue = {
  id: 101,
  description: 'Or try the generator above first, no sign-up needed.',
  type: 'quiz-maker',
  createdAt: '2026-05-07T07:44:16.845Z',
  updatedAt: '2026-05-07T07:44:29.310Z',
  publishedAt: '2026-05-07T07:44:29.305Z',
  locale: 'en',
  title: [
    {
      id: 3952,
      text: 'Generate your first quiz. Free, no credit card.',
      highlight: false,
      color: '#475467',
      bold: false,
    },
  ],
  buttons: [
    {
      id: 1226,
      link: 'https://app.formester.com/users/sign_up',
      text: 'Start Generating For Free',
      type: 'Primary',
      showArrow: null,
    },
  ],
  localizations: [],
}
const c16_title = [
  {
    id: 4934,
    text: 'FAQs About AI Quiz Generator',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c16_faqList = [
  {
    id: 2485,
    header: 'Is the AI quiz maker really free?',
    body: 'Yes. AI quiz generation and quiz building are on every plan, including the Free plan at $0/month. Free includes unlimited forms, unlimited responses, all field types, quiz auto-scoring, drop-off analysis, and payment collection. Free-plan quizzes show Formester branding (removed on Personal at $13/month). API access starts on the Business plan. Full breakdown on the pricing page.',
    body_markdown:
      'Yes. AI quiz generation and quiz building are on every plan, including the Free plan at $0/month. Free includes unlimited forms, unlimited responses, all field types, quiz auto-scoring, drop-off analysis, and payment collection. Free-plan quizzes show Formester branding (removed on Personal at $13/month). API access starts on the Business plan. Full breakdown on the [pricing page](https://formester.com/pricing/).',
    list: [],
  },
  {
    id: 2487,
    header: 'What is an outcome quiz?',
    body: 'An outcome quiz gives personalized results based on user answers. It helps users get tailored recommendations or insights instead of just a score.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2486,
    header: 'What is a scored quiz?',
    body: 'A scored quiz assigns points to answers and shows a final score at the end. It is useful for tests, assessments, and knowledge checks.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2489,
    header: 'How does Formester generate quiz questions from my content?',
    body: 'Paste a prompt that names the topic ("Algebra basics for grade 9, 10 questions") or upload a PDF of the chapter, deck, or article you want to test on. Formester reads the source, pulls out the facts worth testing, and drafts questions with answer choices, the correct answer, and optional explanations. You then review, edit, and publish. Nothing goes live without your sign-off.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2488,
    header: 'Can I customize quiz results and scoring?',
    body: 'Yes. You can set scoring rules, adjust points, and customize outcomes based on user responses to match your goal.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2495,
    header: 'Can I edit AI-generated quizzes?',
    body: 'Yes. You can modify questions, answers, scoring, design, and logic anytime before or after publishing.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2490,
    header: 'What types of quizzes can I create?',
    body: 'You can create scored quizzes, outcome-based quizzes, personality quizzes, assessments, and feedback quizzes for any use.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2492,
    header: 'How do I share or embed the quiz?',
    body: 'Three options ship with every quiz: a public link you can send anywhere, a QR code for handouts or in-person sessions, and an embed snippet that drops the quiz into any webpage. Responses land in the same dashboard whichever channel they came through.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2493,
    header: 'Will my quizzes work on mobile devices?',
    body: 'Yes. All quizzes are mobile-friendly and work smoothly on desktop, tablet, and phone.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2491,
    header: 'What can I feed into the AI quiz generator?',
    body: 'A short prompt, a list of questions you already have, or a PDF of the source material. Type the topic and let the AI write the questions, paste in your own list and let it format and score them, or upload the document you want the quiz to be built from.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2494,
    header: 'What question types does the AI generate?',
    body: 'Multiple choice, single choice, dropdowns, image-based questions, and video questions. A single quiz can mix any of them, and each question can carry its own point value, a correct-answer explanation that fires through answer validation, and a place in a timed or untimed section.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2496,
    header: 'Can I edit every question the AI generates?',
    body: 'Yes. Each question lands in the editor with the source passage next to it. Rewrite the wording, swap the correct answer, add distractors, delete the question, or add one the AI missed. The review step is the default step; you do not have to click around to find it.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2498,
    header: 'Scored quiz or outcome quiz: which should I use?',
    body: 'Use a scored quiz when you care about right and wrong — training checks, employee certifications, classroom tests. Use an outcome quiz when the goal is to route the taker to a result based on their answers — lead magnets, personality tests, product recommenders. Formester lets you combine both in one quiz if you want, so a marketing quiz can score the lead and route them to the right offer at the same time.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2497,
    header: 'How flexible is the quiz scoring?',
    body: 'Per-question point values, weighted categories, pass/fail thresholds, quiz timers, and conditional branching based on score or specific answers. Outcome routing lets you map any combination of answers to a custom result page with its own copy, image, and CTA. Answer validation can show an instant hint or explanation when a learner picks the wrong answer.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2499,
    header: 'Can respondents take the quiz on mobile?',
    body: 'Yes. Every quiz is responsive by default, and quiz takers can finish on phone, tablet, or desktop. Offline mode captures responses on flaky wi-fi and syncs when the device reconnects.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2500,
    header: 'How accurate are the AI-generated questions?',
    body: 'Published research (BMC Medical Education, 2025) shows that AI-generated multiple-choice questions hit a decent discrimination bar roughly 38% of the time on the first draft, and around 6% carry a factual error. That is why Formester grounds every question in the content you uploaded, shows the source passage next to the question during review, and ships nothing until you click publish.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2501,
    header: 'Is my uploaded content used to train the AI?',
    body: 'No. Per Section 4.4 of our Data Processing Agreement, Formester does not use Customer Data for analytics, advertising, marketing, or product training. The same boundary applies to the Google Gemini integration that powers our AI features. Your uploaded PDFs, prompts, and quiz responses stay on your account, encrypted in transit and at rest, with full deletion available on request. Read the DPA and the security overview.',
    body_markdown:
      'No. Per Section 4.4 of our Data Processing Agreement, Formester does not use Customer Data for analytics, advertising, marketing, or product training. The same boundary applies to the Google Gemini integration that powers our AI features. Your uploaded PDFs, prompts, and quiz responses stay on your account, encrypted in transit and at rest, with full deletion available on request. Read the [DPA](https://formester.com/dpa/) and the [security overview](https://formester.com/security/).',
    list: [],
  },
  {
    id: 2502,
    header: 'Can I connect my quiz to Claude or ChatGPT to query the responses?',
    body: 'es. Formester ships an MCP server (Model Context Protocol) that any MCP-compatible AI agent Claude, ChatGPT, custom agents can read in one connection. Ask plain-language questions like "Which students scored under 60% this week?" or "Show me everyone who got Q4 wrong," directly from your AI assistant. There\'s also a public REST API (v2) with a self-service token at app.formester.com/api for direct integration. See the API docs and the MCP server guide.',
    body_markdown:
      'es. Formester ships an MCP server (Model Context Protocol) that any MCP-compatible AI agent Claude, ChatGPT, custom agents can read in one connection. Ask plain-language questions like "Which students scored under 60% this week?" or "Show me everyone who got Q4 wrong," directly from your AI assistant. There\'s also a public REST API (v2) with a self-service token for direct integration. See the [API docs](https://docs.formester.com/formester-api.html) and the [MCP server guide](https://docs.formester.com/formester-mcp-server.html).',
    list: [],
  },
]

useHead({
  title: 'Free AI Quiz Maker for Teachers, Trainers, HR | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/ai-quiz-maker/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-13T04:48:25.845Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Turn a prompt or a PDF into a scored or outcome quiz in seconds with Formester free AI quiz maker for teachers, trainers, HR, and marketers. Edit, share, and track.\n',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free AI Quiz Maker for Teachers, Trainers, HR | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/ai-quiz-maker​​/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free AI Quiz Maker for Teachers, Trainers, HR | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Turn a prompt or a PDF into a scored or outcome quiz in seconds with Formester free AI quiz maker for teachers, trainers, HR, and marketers. Edit, share, and track.\n',
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
      content: 'https://formester.com/ai-quiz-maker​​/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free AI Quiz Maker for Teachers, Trainers, HR | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Turn a prompt or a PDF into a scored or outcome quiz in seconds with Formester free AI quiz maker for teachers, trainers, HR, and marketers. Edit, share, and track.\n',
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
        '@id': 'https://formester.com/ai-quiz-maker/#webpage',
        url: 'https://formester.com/ai-quiz-maker/',
        name: 'Free AI Quiz Maker for Teachers, Trainers, HR | Formester',
        '@type': 'WebPage',
        headline: 'AI Quiz Maker that turns any prompt or a PDF into a scored quiz in 30 seconds',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/ai-quiz-maker/#breadcrumb',
        },
        dateModified: '2026-05-07',
        datePublished: '2024-06-07',
        primaryImageOfPage: {
          '@id': 'https://formester.com/#organization',
        },
      },
      {
        '@id': 'https://formester.com/ai-quiz-maker/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/ai-quiz-maker/',
            name: 'AI Quiz Maker',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/ai-quiz-maker/#software',
        url: 'https://formester.com/ai-quiz-maker/',
        name: 'Formester AI Quiz Maker',
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
              billingDuration: 'P1M',
            },
          },
        ],
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
        description:
          'Turn any prompt or PDF into a scored, outcome, or personality quiz in 30 seconds. Edit every AI-drafted question, share via link, QR code, or embed, and track results in one dashboard.',
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
        '@id': 'https://formester.com/ai-quiz-maker/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'Is the AI quiz maker really free?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. AI quiz generation and quiz building are on every plan, including the Free plan at $0/month. Free includes unlimited forms, unlimited responses, all field types, quiz auto-scoring, drop-off analysis, and payment collection. Free-plan quizzes show Formester branding (removed on Personal at $13/month). API access starts on the Business plan. Full breakdown on the <a href="https://formester.com/pricing/">pricing page</a>.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What is an outcome quiz?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'An outcome quiz gives personalized results based on user answers. It helps users get tailored recommendations or insights instead of just a score.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What is a scored quiz?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'A scored quiz assigns points to answers and shows a final score at the end. It is useful for tests, assessments, and knowledge checks.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How does Formester generate quiz questions from my content?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Paste a prompt that names the topic ("Algebra basics for grade 9, 10 questions") or upload a PDF of the chapter, deck, or article you want to test on. Formester reads the source, pulls out the facts worth testing, and drafts questions with answer choices, the correct answer, and optional explanations. You then review, edit, and publish. Nothing goes live without your sign-off.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I customize quiz results and scoring?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You can set scoring rules, adjust points, and customize outcomes based on user responses to match your goal.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I edit AI-generated quizzes?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. You can modify questions, answers, scoring, design, and logic anytime before or after publishing.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What types of quizzes can I create?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'You can create scored quizzes, outcome-based quizzes, personality quizzes, assessments, and feedback quizzes for any use.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I share or embed the quiz?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Three options ship with every quiz: a public link you can send anywhere, a QR code for handouts or in-person sessions, and an embed snippet that drops the quiz into any webpage. Responses land in the same dashboard whichever channel they came through.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Will my quizzes work on mobile devices?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. All quizzes are mobile-friendly and work smoothly on desktop, tablet, and phone.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What can I feed into the AI quiz generator?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'A short prompt, a list of questions you already have, or a PDF of the source material. Type the topic and let the AI write the questions, paste in your own list and let it format and score them, or upload the document you want the quiz to be built from.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What question types does the AI generate?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Multiple choice, single choice, dropdowns, image-based questions, and video questions. A single quiz can mix any of them, and each question can carry its own point value, a correct-answer explanation that fires through answer validation, and a place in a timed or untimed section.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I edit every question the AI generates?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Each question lands in the editor with the source passage next to it. Rewrite the wording, swap the correct answer, add distractors, delete the question, or add one the AI missed. The review step is the default step; you do not have to click around to find it.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Scored quiz or outcome quiz: which should I use?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Use a scored quiz when you care about right and wrong, training checks, employee certifications, classroom tests. Use an outcome quiz when the goal is to route the taker to a result based on their answers, lead magnets, personality tests, product recommenders. Formester lets you combine both in one quiz if you want, so a marketing quiz can score the lead and route them to the right offer at the same time.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How flexible is the quiz scoring?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Per-question point values, weighted categories, pass/fail thresholds, quiz timers, and conditional branching based on score or specific answers. Outcome routing lets you map any combination of answers to a custom result page with its own copy, image, and CTA. Answer validation can show an instant hint or explanation when a learner picks the wrong answer.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can respondents take the quiz on mobile?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Every quiz is responsive by default, and quiz takers can finish on phone, tablet, or desktop. Offline mode captures responses on flaky wi-fi and syncs when the device reconnects.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How accurate are the AI-generated questions?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Published research (BMC Medical Education, 2025) shows that AI-generated multiple-choice questions hit a decent discrimination bar roughly 38% of the time on the first draft, and around 6% carry a factual error. That is why Formester grounds every question in the content you uploaded, shows the source passage next to the question during review, and ships nothing until you click publish.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is my uploaded content used to train the AI?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'No. Per Section 4.4 of our Data Processing Agreement, Formester does not use Customer Data for analytics, advertising, marketing, or product training. The same boundary applies to the Google Gemini integration that powers our AI features. Your uploaded PDFs, prompts, and quiz responses stay on your account, encrypted in transit and at rest, with full deletion available on request. Read the <a href="https://formester.com/dpa/">DPA</a> and the <a href="https://formester.com/security/">security overview</a>.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I connect my quiz to Claude or ChatGPT to query the responses?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Formester ships an MCP server (Model Context Protocol) that any MCP-compatible AI agent Claude, ChatGPT, custom agents can read in one connection. Ask plain-language questions like "Which students scored under 60% this week?" or "Show me everyone who got Q4 wrong," directly from your AI assistant. There\'s also a public REST API (v2) with a self-service token for direct integration. See the <a href="https://docs.formester.com/formester-api.html">API docs</a> and the <a href="https://docs.formester.com/formester-mcp-server.html">MCP server guide</a>.',
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

.fmstr-cmp-inputs-question-types {
  --fmstr-cmp-inputs-question-types-bg-section: #f9fafb;
  --fmstr-cmp-inputs-question-types-bg-card: #ffffff;
  --fmstr-cmp-inputs-question-types-bg-violet-25: #f7f3ff;
  --fmstr-cmp-inputs-question-types-bg-violet-100: #f4ebff;
  --fmstr-cmp-inputs-question-types-fg-1: #101828;
  --fmstr-cmp-inputs-question-types-fg-2: #475467;
  --fmstr-cmp-inputs-question-types-fg-3: #697586;
  --fmstr-cmp-inputs-question-types-violet-600: #6941c6;
  --fmstr-cmp-inputs-question-types-border-light: #eaecf0;
  --fmstr-cmp-inputs-question-types-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-inputs-question-types-fs-xs: 12px;
  --fmstr-cmp-inputs-question-types-fs-sm: 14px;
  --fmstr-cmp-inputs-question-types-fs-md: 16px;
  --fmstr-cmp-inputs-question-types-fs-2xl: 24px;
  --fmstr-cmp-inputs-question-types-fs-3xl: 36px;
  --fmstr-cmp-inputs-question-types-fw-semibold: 600;
  --fmstr-cmp-inputs-question-types-fw-bold: 700;
  --fmstr-cmp-inputs-question-types-lh-sm: 20px;
  --fmstr-cmp-inputs-question-types-lh-md: 24px;
  --fmstr-cmp-inputs-question-types-lh-2xl: 32px;
  --fmstr-cmp-inputs-question-types-space-1: 4px;
  --fmstr-cmp-inputs-question-types-space-2: 8px;
  --fmstr-cmp-inputs-question-types-space-3: 12px;
  --fmstr-cmp-inputs-question-types-space-4: 16px;
  --fmstr-cmp-inputs-question-types-space-5: 20px;
  --fmstr-cmp-inputs-question-types-space-6: 24px;
  --fmstr-cmp-inputs-question-types-space-7: 28px;
  --fmstr-cmp-inputs-question-types-space-8: 32px;
  --fmstr-cmp-inputs-question-types-space-10: 40px;
  --fmstr-cmp-inputs-question-types-space-12: 48px;
  --fmstr-cmp-inputs-question-types-space-16: 64px;
  --fmstr-cmp-inputs-question-types-r-lg: 8px;
  --fmstr-cmp-inputs-question-types-r-2xl: 16px;
  --fmstr-cmp-inputs-question-types-r-full: 9999px;

  background: var(--fmstr-cmp-inputs-question-types-bg-section);
  padding: var(--fmstr-cmp-inputs-question-types-space-16) var(--fmstr-cmp-inputs-question-types-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-inputs-question-types *,
.fmstr-cmp-inputs-question-types *::before,
.fmstr-cmp-inputs-question-types *::after {
  box-sizing: border-box;
}

.fmstr-cmp-inputs-question-types__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-inputs-question-types__header {
  margin: 0 auto var(--fmstr-cmp-inputs-question-types-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-inputs-question-types__heading {
  font-size: var(--fmstr-cmp-inputs-question-types-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-inputs-question-types-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-inputs-question-types-fg-1);
  margin: 0 0 var(--fmstr-cmp-inputs-question-types-space-3);
}

.fmstr-cmp-inputs-question-types__sub {
  font-size: var(--fmstr-cmp-inputs-question-types-fs-md);
  line-height: var(--fmstr-cmp-inputs-question-types-lh-md);
  color: var(--fmstr-cmp-inputs-question-types-fg-3);
  margin: 0;
}

.fmstr-cmp-inputs-question-types__card {
  background: var(--fmstr-cmp-inputs-question-types-bg-card);
  border: 1px solid var(--fmstr-cmp-inputs-question-types-border-light);
  border-radius: var(--fmstr-cmp-inputs-question-types-r-2xl);
  box-shadow: var(--fmstr-cmp-inputs-question-types-shadow-xs);
  overflow: hidden;
}

.fmstr-cmp-inputs-question-types__row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--fmstr-cmp-inputs-question-types-space-8);
  padding: var(--fmstr-cmp-inputs-question-types-space-7) var(--fmstr-cmp-inputs-question-types-space-8);
  border-bottom: 1px solid var(--fmstr-cmp-inputs-question-types-border-light);
}

.fmstr-cmp-inputs-question-types__row:last-child {
  border-bottom: none;
}

.fmstr-cmp-inputs-question-types__label {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-inputs-question-types-space-4);
}

.fmstr-cmp-inputs-question-types__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-inputs-question-types-r-lg);
  background: var(--fmstr-cmp-inputs-question-types-bg-violet-25);
  color: var(--fmstr-cmp-inputs-question-types-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-inputs-question-types__label-text {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-inputs-question-types-space-1);
  padding-top: var(--fmstr-cmp-inputs-question-types-space-1);
}
.fmstr-cmp-inputs-question-types__label-name {
  font-size: var(--fmstr-cmp-inputs-question-types-fs-md);
  line-height: var(--fmstr-cmp-inputs-question-types-lh-md);
  font-weight: var(--fmstr-cmp-inputs-question-types-fw-semibold);
  color: var(--fmstr-cmp-inputs-question-types-fg-1);
}
.fmstr-cmp-inputs-question-types__label-meta {
  font-size: var(--fmstr-cmp-inputs-question-types-fs-sm);
  line-height: var(--fmstr-cmp-inputs-question-types-lh-sm);
  color: var(--fmstr-cmp-inputs-question-types-fg-3);
}

.fmstr-cmp-inputs-question-types__body {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-inputs-question-types-space-5);
}
.fmstr-cmp-inputs-question-types__desc {
  font-size: var(--fmstr-cmp-inputs-question-types-fs-md);
  line-height: var(--fmstr-cmp-inputs-question-types-lh-md);
  color: var(--fmstr-cmp-inputs-question-types-fg-2);
  margin: 0;
}

.fmstr-cmp-inputs-question-types__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-inputs-question-types-space-2);
}
.fmstr-cmp-inputs-question-types__pill {
  display: inline-flex;
  align-items: center;
  padding: var(--fmstr-cmp-inputs-question-types-space-2) var(--fmstr-cmp-inputs-question-types-space-4);
  border-radius: var(--fmstr-cmp-inputs-question-types-r-full);
  background: var(--fmstr-cmp-inputs-question-types-bg-violet-100);
  color: var(--fmstr-cmp-inputs-question-types-violet-600);
  font-size: var(--fmstr-cmp-inputs-question-types-fs-sm);
  line-height: var(--fmstr-cmp-inputs-question-types-lh-sm);
  font-weight: var(--fmstr-cmp-inputs-question-types-fw-semibold);
}

@media (max-width: 760px) {
  .fmstr-cmp-inputs-question-types {
    padding: var(--fmstr-cmp-inputs-question-types-space-12) var(--fmstr-cmp-inputs-question-types-space-4);
  }
  .fmstr-cmp-inputs-question-types__heading {
    font-size: var(--fmstr-cmp-inputs-question-types-fs-2xl);
    line-height: var(--fmstr-cmp-inputs-question-types-lh-2xl);
  }
  .fmstr-cmp-inputs-question-types__row {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-inputs-question-types-space-5);
    padding: var(--fmstr-cmp-inputs-question-types-space-6);
  }
  .fmstr-cmp-inputs-question-types__pill {
    font-size: var(--fmstr-cmp-inputs-question-types-fs-xs);
    padding: var(--fmstr-cmp-inputs-question-types-space-1) var(--fmstr-cmp-inputs-question-types-space-3);
  }
}

.fmstr-cmp-question-quality {
  --fmstr-cmp-question-quality-bg-section: #0f0921;
  --fmstr-cmp-question-quality-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-question-quality-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-question-quality-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-question-quality-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-question-quality-fg-eyebrow: #bda6ff;
  --fmstr-cmp-question-quality-fs-md: 16px;
  --fmstr-cmp-question-quality-fs-lg: 18px;
  --fmstr-cmp-question-quality-fs-xl: 20px;
  --fmstr-cmp-question-quality-fs-2xl: 24px;
  --fmstr-cmp-question-quality-fs-3xl: 32px;
  --fmstr-cmp-question-quality-fs-xs: 12px;
  --fmstr-cmp-question-quality-fs-sm: 14px;
  --fmstr-cmp-question-quality-fw-semibold: 600;
  --fmstr-cmp-question-quality-fw-bold: 700;
  --fmstr-cmp-question-quality-lh-md: 24px;
  --fmstr-cmp-question-quality-lh-lg: 28px;
  --fmstr-cmp-question-quality-lh-xl: 30px;
  --fmstr-cmp-question-quality-lh-2xl: 32px;
  --fmstr-cmp-question-quality-space-1: 4px;
  --fmstr-cmp-question-quality-space-2: 8px;
  --fmstr-cmp-question-quality-space-3: 12px;
  --fmstr-cmp-question-quality-space-4: 16px;
  --fmstr-cmp-question-quality-space-5: 20px;
  --fmstr-cmp-question-quality-space-6: 24px;
  --fmstr-cmp-question-quality-space-7: 28px;
  --fmstr-cmp-question-quality-space-8: 32px;
  --fmstr-cmp-question-quality-space-12: 48px;
  --fmstr-cmp-question-quality-space-16: 64px;
  --fmstr-cmp-question-quality-r-2xl: 16px;
  --fmstr-cmp-question-quality-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-question-quality-space-12) var(--fmstr-cmp-question-quality-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-question-quality *,
.fmstr-cmp-question-quality *::before,
.fmstr-cmp-question-quality *::after {
  box-sizing: border-box;
}

.fmstr-cmp-question-quality__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-question-quality-bg-section);
  background-image: var(--fmstr-cmp-question-quality-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-question-quality-space-12);
  overflow: hidden;
}

.fmstr-cmp-question-quality__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-question-quality-space-12);
  align-items: center;
}

.fmstr-cmp-question-quality__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-question-quality-space-2) var(--fmstr-cmp-question-quality-space-4);
  background: var(--fmstr-cmp-question-quality-bg-pill);
  color: var(--fmstr-cmp-question-quality-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-question-quality-r-full);
  font-size: var(--fmstr-cmp-question-quality-fs-xs);
  font-weight: var(--fmstr-cmp-question-quality-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-question-quality-space-5);
}

.fmstr-cmp-question-quality__heading {
  font-size: var(--fmstr-cmp-question-quality-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-question-quality-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-question-quality-space-6);
}

.fmstr-cmp-question-quality__body p {
  font-size: var(--fmstr-cmp-question-quality-fs-md);
  line-height: var(--fmstr-cmp-question-quality-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-question-quality-space-4);
}

.fmstr-cmp-question-quality__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-question-quality__card {
  background-color: var(--fmstr-cmp-question-quality-bg-card);
  background-image: var(--fmstr-cmp-question-quality-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-question-quality-r-2xl);
  padding: var(--fmstr-cmp-question-quality-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-question-quality__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-question-quality-space-2) var(--fmstr-cmp-question-quality-space-4);
  background: var(--fmstr-cmp-question-quality-bg-pill);
  color: var(--fmstr-cmp-question-quality-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-question-quality-r-full);
  font-size: var(--fmstr-cmp-question-quality-fs-xs);
  font-weight: var(--fmstr-cmp-question-quality-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-question-quality-space-5);
}

.fmstr-cmp-question-quality__quote {
  font-size: var(--fmstr-cmp-question-quality-fs-lg);
  line-height: var(--fmstr-cmp-question-quality-lh-lg);
  font-weight: var(--fmstr-cmp-question-quality-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-question-quality-space-5);
}

.fmstr-cmp-question-quality__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-question-quality-space-5);
}

.fmstr-cmp-question-quality__cite {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-question-quality-space-2);
  font-size: var(--fmstr-cmp-question-quality-fs-sm);
  line-height: var(--fmstr-cmp-question-quality-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.fmstr-cmp-question-quality__cite svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 760px) {
  .fmstr-cmp-question-quality {
    padding: var(--fmstr-cmp-question-quality-space-8) var(--fmstr-cmp-question-quality-space-4);
  }
  .fmstr-cmp-question-quality__container {
    padding: var(--fmstr-cmp-question-quality-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-question-quality__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-question-quality-space-8);
  }
  .fmstr-cmp-question-quality__heading {
    font-size: var(--fmstr-cmp-question-quality-fs-2xl);
    line-height: var(--fmstr-cmp-question-quality-lh-2xl);
  }
  .fmstr-cmp-question-quality__quote {
    font-size: var(--fmstr-cmp-question-quality-fs-md);
    line-height: var(--fmstr-cmp-question-quality-lh-md);
  }
  .fmstr-cmp-question-quality__card {
    padding: var(--fmstr-cmp-question-quality-space-6);
  }
}

.fmstr-cmp-how-to-build-a-quiz {
  --fmstr-cmp-how-to-build-a-quiz-bg-section: #f9fafb;
  --fmstr-cmp-how-to-build-a-quiz-bg-card: #ffffff;
  --fmstr-cmp-how-to-build-a-quiz-fg-1: #101828;
  --fmstr-cmp-how-to-build-a-quiz-fg-2: #475467;
  --fmstr-cmp-how-to-build-a-quiz-fg-3: #697586;
  --fmstr-cmp-how-to-build-a-quiz-violet-500: #7f56d9;
  --fmstr-cmp-how-to-build-a-quiz-violet-600: #6941c6;
  --fmstr-cmp-how-to-build-a-quiz-border-light: #eaecf0;
  --fmstr-cmp-how-to-build-a-quiz-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-how-to-build-a-quiz-shadow-badge: 0 4px 10px -2px rgba(127, 86, 217, 0.35);
  --fmstr-cmp-how-to-build-a-quiz-fs-sm: 14px;
  --fmstr-cmp-how-to-build-a-quiz-fs-md: 16px;
  --fmstr-cmp-how-to-build-a-quiz-fs-lg: 18px;
  --fmstr-cmp-how-to-build-a-quiz-fs-2xl: 24px;
  --fmstr-cmp-how-to-build-a-quiz-fs-3xl: 36px;
  --fmstr-cmp-how-to-build-a-quiz-fw-semibold: 600;
  --fmstr-cmp-how-to-build-a-quiz-fw-bold: 700;
  --fmstr-cmp-how-to-build-a-quiz-lh-md: 24px;
  --fmstr-cmp-how-to-build-a-quiz-lh-lg: 28px;
  --fmstr-cmp-how-to-build-a-quiz-lh-2xl: 32px;
  --fmstr-cmp-how-to-build-a-quiz-space-3: 12px;
  --fmstr-cmp-how-to-build-a-quiz-space-4: 16px;
  --fmstr-cmp-how-to-build-a-quiz-space-5: 20px;
  --fmstr-cmp-how-to-build-a-quiz-space-6: 24px;
  --fmstr-cmp-how-to-build-a-quiz-space-8: 32px;
  --fmstr-cmp-how-to-build-a-quiz-space-12: 48px;
  --fmstr-cmp-how-to-build-a-quiz-space-16: 64px;
  --fmstr-cmp-how-to-build-a-quiz-r-md: 8px;
  --fmstr-cmp-how-to-build-a-quiz-r-2xl: 16px;

  background: var(--fmstr-cmp-how-to-build-a-quiz-bg-section);
  padding: var(--fmstr-cmp-how-to-build-a-quiz-space-16) var(--fmstr-cmp-how-to-build-a-quiz-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-how-to-build-a-quiz *,
.fmstr-cmp-how-to-build-a-quiz *::before,
.fmstr-cmp-how-to-build-a-quiz *::after {
  box-sizing: border-box;
}

.fmstr-cmp-how-to-build-a-quiz__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-how-to-build-a-quiz__header {
  margin: 0 auto var(--fmstr-cmp-how-to-build-a-quiz-space-12);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-how-to-build-a-quiz__heading {
  font-size: var(--fmstr-cmp-how-to-build-a-quiz-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-how-to-build-a-quiz-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-how-to-build-a-quiz-fg-1);
  margin: 0 0 var(--fmstr-cmp-how-to-build-a-quiz-space-3);
}

.fmstr-cmp-how-to-build-a-quiz__subhead {
  font-size: var(--fmstr-cmp-how-to-build-a-quiz-fs-md);
  line-height: var(--fmstr-cmp-how-to-build-a-quiz-lh-md);
  color: var(--fmstr-cmp-how-to-build-a-quiz-fg-3);
  margin: 0;
}

.fmstr-cmp-how-to-build-a-quiz__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-how-to-build-a-quiz-space-6);
}

.fmstr-cmp-how-to-build-a-quiz__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-how-to-build-a-quiz-space-4);
  padding: var(--fmstr-cmp-how-to-build-a-quiz-space-8);
  background: var(--fmstr-cmp-how-to-build-a-quiz-bg-card);
  border: 1px solid var(--fmstr-cmp-how-to-build-a-quiz-border-light);
  border-radius: var(--fmstr-cmp-how-to-build-a-quiz-r-2xl);
  box-shadow: var(--fmstr-cmp-how-to-build-a-quiz-shadow-xs);
}

.fmstr-cmp-how-to-build-a-quiz__num {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-how-to-build-a-quiz-r-md);
  background: var(--fmstr-cmp-how-to-build-a-quiz-violet-500);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fmstr-cmp-how-to-build-a-quiz-fs-md);
  font-weight: var(--fmstr-cmp-how-to-build-a-quiz-fw-bold);
  box-shadow: var(--fmstr-cmp-how-to-build-a-quiz-shadow-badge);
}

.fmstr-cmp-how-to-build-a-quiz__title {
  font-size: var(--fmstr-cmp-how-to-build-a-quiz-fs-lg);
  line-height: var(--fmstr-cmp-how-to-build-a-quiz-lh-lg);
  font-weight: var(--fmstr-cmp-how-to-build-a-quiz-fw-bold);
  color: var(--fmstr-cmp-how-to-build-a-quiz-fg-1);
  margin: 0;
}

.fmstr-cmp-how-to-build-a-quiz__desc {
  font-size: var(--fmstr-cmp-how-to-build-a-quiz-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-how-to-build-a-quiz-fg-2);
  margin: 0;
}

@media (max-width: 1024px) {
  .fmstr-cmp-how-to-build-a-quiz__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-how-to-build-a-quiz {
    padding: var(--fmstr-cmp-how-to-build-a-quiz-space-12) var(--fmstr-cmp-how-to-build-a-quiz-space-4);
  }
  .fmstr-cmp-how-to-build-a-quiz__heading {
    font-size: var(--fmstr-cmp-how-to-build-a-quiz-fs-2xl);
    line-height: var(--fmstr-cmp-how-to-build-a-quiz-lh-2xl);
  }
  .fmstr-cmp-how-to-build-a-quiz__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-why-teams-pick-formester {
  --fmstr-cmp-why-teams-pick-formester-bg-section: #f9fafb;
  --fmstr-cmp-why-teams-pick-formester-bg-card: #ffffff;
  --fmstr-cmp-why-teams-pick-formester-fg-1: #101828;
  --fmstr-cmp-why-teams-pick-formester-fg-2: #475467;
  --fmstr-cmp-why-teams-pick-formester-fg-3: #697586;
  --fmstr-cmp-why-teams-pick-formester-border-light: #eaecf0;
  --fmstr-cmp-why-teams-pick-formester-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-why-teams-pick-formester-shadow-tile: 0 4px 10px -2px rgba(16, 24, 40, 0.15);
  --fmstr-cmp-why-teams-pick-formester-fs-sm: 14px;
  --fmstr-cmp-why-teams-pick-formester-fs-md: 16px;
  --fmstr-cmp-why-teams-pick-formester-fs-lg: 18px;
  --fmstr-cmp-why-teams-pick-formester-fs-2xl: 24px;
  --fmstr-cmp-why-teams-pick-formester-fs-3xl: 36px;
  --fmstr-cmp-why-teams-pick-formester-fw-regular: 400;
  --fmstr-cmp-why-teams-pick-formester-fw-semibold: 600;
  --fmstr-cmp-why-teams-pick-formester-fw-bold: 700;
  --fmstr-cmp-why-teams-pick-formester-lh-md: 24px;
  --fmstr-cmp-why-teams-pick-formester-lh-lg: 28px;
  --fmstr-cmp-why-teams-pick-formester-lh-2xl: 32px;
  --fmstr-cmp-why-teams-pick-formester-space-3: 12px;
  --fmstr-cmp-why-teams-pick-formester-space-4: 16px;
  --fmstr-cmp-why-teams-pick-formester-space-5: 20px;
  --fmstr-cmp-why-teams-pick-formester-space-6: 24px;
  --fmstr-cmp-why-teams-pick-formester-space-8: 32px;
  --fmstr-cmp-why-teams-pick-formester-space-10: 40px;
  --fmstr-cmp-why-teams-pick-formester-space-12: 48px;
  --fmstr-cmp-why-teams-pick-formester-space-16: 64px;
  --fmstr-cmp-why-teams-pick-formester-r-lg: 12px;
  --fmstr-cmp-why-teams-pick-formester-r-2xl: 16px;

  background: var(--fmstr-cmp-why-teams-pick-formester-bg-section);
  padding: var(--fmstr-cmp-why-teams-pick-formester-space-16) var(--fmstr-cmp-why-teams-pick-formester-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-why-teams-pick-formester *,
.fmstr-cmp-why-teams-pick-formester *::before,
.fmstr-cmp-why-teams-pick-formester *::after {
  box-sizing: border-box;
}

.fmstr-cmp-why-teams-pick-formester__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-why-teams-pick-formester__header {
  margin: 0 auto var(--fmstr-cmp-why-teams-pick-formester-space-12);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-why-teams-pick-formester__heading {
  font-size: var(--fmstr-cmp-why-teams-pick-formester-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-why-teams-pick-formester-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-why-teams-pick-formester-fg-1);
  margin: 0 0 var(--fmstr-cmp-why-teams-pick-formester-space-3);
}

.fmstr-cmp-why-teams-pick-formester__subhead {
  font-size: var(--fmstr-cmp-why-teams-pick-formester-fs-md);
  line-height: var(--fmstr-cmp-why-teams-pick-formester-lh-md);
  color: var(--fmstr-cmp-why-teams-pick-formester-fg-3);
  margin: 0 auto;
  text-align: center;
  max-width: 640px;
}

.fmstr-cmp-why-teams-pick-formester__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  column-gap: var(--fmstr-cmp-why-teams-pick-formester-space-6);
  row-gap: var(--fmstr-cmp-why-teams-pick-formester-space-6);
}

.fmstr-cmp-why-teams-pick-formester__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-why-teams-pick-formester-space-4);
  padding: var(--fmstr-cmp-why-teams-pick-formester-space-8);
  background: var(--fmstr-cmp-why-teams-pick-formester-bg-card);
  border: 1px solid var(--fmstr-cmp-why-teams-pick-formester-border-light);
  border-radius: var(--fmstr-cmp-why-teams-pick-formester-r-2xl);
  box-shadow: var(--fmstr-cmp-why-teams-pick-formester-shadow-xs);
}

.fmstr-cmp-why-teams-pick-formester__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-why-teams-pick-formester-r-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: var(--fmstr-cmp-why-teams-pick-formester-shadow-tile);
}

.fmstr-cmp-why-teams-pick-formester__icon--purple {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--orange {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--blue {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--pink {
  background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--violet {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--magenta {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}
.fmstr-cmp-why-teams-pick-formester__icon--rose {
  background: linear-gradient(135deg, #fb7185 0%, #f43f5e 100%);
}

.fmstr-cmp-why-teams-pick-formester__title {
  font-size: var(--fmstr-cmp-why-teams-pick-formester-fs-lg);
  line-height: var(--fmstr-cmp-why-teams-pick-formester-lh-lg);
  font-weight: var(--fmstr-cmp-why-teams-pick-formester-fw-bold);
  color: var(--fmstr-cmp-why-teams-pick-formester-fg-1);
  margin: 0;
}

.fmstr-cmp-why-teams-pick-formester__desc {
  font-size: var(--fmstr-cmp-why-teams-pick-formester-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-why-teams-pick-formester-fg-2);
  margin: 0;
}

@media (max-width: 1100px) {
  .fmstr-cmp-why-teams-pick-formester__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-why-teams-pick-formester {
    padding: var(--fmstr-cmp-why-teams-pick-formester-space-12) var(--fmstr-cmp-why-teams-pick-formester-space-4);
  }
  .fmstr-cmp-why-teams-pick-formester__heading {
    font-size: var(--fmstr-cmp-why-teams-pick-formester-fs-2xl);
    line-height: var(--fmstr-cmp-why-teams-pick-formester-lh-2xl);
  }
  .fmstr-cmp-why-teams-pick-formester__grid {
    grid-template-columns: 1fr;
    row-gap: var(--fmstr-cmp-why-teams-pick-formester-space-8);
  }
}

.fmstr-cmp-start-from-template {
  --fmstr-cmp-start-from-template-bg-section: #ffffff;
  --fmstr-cmp-start-from-template-bg-card: #ffffff;
  --fmstr-cmp-start-from-template-bg-violet-25: #f7f3ff;
  --fmstr-cmp-start-from-template-fg-1: #101828;
  --fmstr-cmp-start-from-template-fg-3: #697586;
  --fmstr-cmp-start-from-template-violet-600: #6941c6;
  --fmstr-cmp-start-from-template-border-light: #eaecf0;
  --fmstr-cmp-start-from-template-border-violet: #9777e0;
  --fmstr-cmp-start-from-template-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-start-from-template-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-start-from-template-fs-md: 16px;
  --fmstr-cmp-start-from-template-fs-2xl: 24px;
  --fmstr-cmp-start-from-template-fs-3xl: 36px;
  --fmstr-cmp-start-from-template-fw-semibold: 600;
  --fmstr-cmp-start-from-template-fw-bold: 700;
  --fmstr-cmp-start-from-template-lh-md: 24px;
  --fmstr-cmp-start-from-template-lh-2xl: 32px;
  --fmstr-cmp-start-from-template-space-3: 12px;
  --fmstr-cmp-start-from-template-space-4: 16px;
  --fmstr-cmp-start-from-template-space-5: 20px;
  --fmstr-cmp-start-from-template-space-6: 24px;
  --fmstr-cmp-start-from-template-space-10: 40px;
  --fmstr-cmp-start-from-template-space-12: 48px;
  --fmstr-cmp-start-from-template-space-16: 64px;
  --fmstr-cmp-start-from-template-r-lg: 8px;
  --fmstr-cmp-start-from-template-r-xl: 12px;

  background: var(--fmstr-cmp-start-from-template-bg-section);
  padding: var(--fmstr-cmp-start-from-template-space-16) var(--fmstr-cmp-start-from-template-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-start-from-template *,
.fmstr-cmp-start-from-template *::before,
.fmstr-cmp-start-from-template *::after {
  box-sizing: border-box;
}

.fmstr-cmp-start-from-template__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-start-from-template__header {
  margin: 0 auto var(--fmstr-cmp-start-from-template-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-start-from-template__heading {
  font-size: var(--fmstr-cmp-start-from-template-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-start-from-template-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-start-from-template-fg-1);
  margin: 0 0 var(--fmstr-cmp-start-from-template-space-3);
}

.fmstr-cmp-start-from-template__sub {
  font-size: var(--fmstr-cmp-start-from-template-fs-md);
  line-height: var(--fmstr-cmp-start-from-template-lh-md);
  color: var(--fmstr-cmp-start-from-template-fg-3);
  margin: 0;
}

.fmstr-cmp-start-from-template__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-start-from-template-space-4);
}

.fmstr-cmp-start-from-template__card {
  display: flex;
  align-items: center;
  gap: var(--fmstr-cmp-start-from-template-space-4);
  padding: var(--fmstr-cmp-start-from-template-space-4) var(--fmstr-cmp-start-from-template-space-5);
  background: var(--fmstr-cmp-start-from-template-bg-card);
  border: 1px solid var(--fmstr-cmp-start-from-template-border-light);
  border-radius: var(--fmstr-cmp-start-from-template-r-xl);
  box-shadow: var(--fmstr-cmp-start-from-template-shadow-xs);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.fmstr-cmp-start-from-template__card:hover {
  border-color: var(--fmstr-cmp-start-from-template-border-violet);
  box-shadow: var(--fmstr-cmp-start-from-template-shadow-md);
  transform: translateY(-1px);
  text-decoration: none;
}

.fmstr-cmp-start-from-template__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-start-from-template-r-lg);
  background: var(--fmstr-cmp-start-from-template-bg-violet-25);
  color: var(--fmstr-cmp-start-from-template-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-start-from-template__title {
  flex: 1;
  font-size: 14.5px;
  line-height: 1.4;
  font-weight: var(--fmstr-cmp-start-from-template-fw-semibold);
  color: var(--fmstr-cmp-start-from-template-fg-1);
}

.fmstr-cmp-start-from-template__arrow {
  flex-shrink: 0;
  color: var(--fmstr-cmp-start-from-template-fg-3);
  transition:
    transform 160ms ease,
    color 160ms ease;
}

.fmstr-cmp-start-from-template__card:hover .fmstr-cmp-start-from-template__arrow {
  color: var(--fmstr-cmp-start-from-template-violet-600);
  transform: translateX(2px);
}

@media (max-width: 1024px) {
  .fmstr-cmp-start-from-template__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-start-from-template {
    padding: var(--fmstr-cmp-start-from-template-space-12) var(--fmstr-cmp-start-from-template-space-4);
  }
  .fmstr-cmp-start-from-template__heading {
    font-size: var(--fmstr-cmp-start-from-template-fs-2xl);
    line-height: var(--fmstr-cmp-start-from-template-lh-2xl);
  }
  .fmstr-cmp-start-from-template__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-start-from-template__card {
    padding: var(--fmstr-cmp-start-from-template-space-4);
  }
}

.fmstr-cmp-ai-vs-traditional {
  --fmstr-cmp-ai-vs-traditional-bg-section: #f9fafb;
  --fmstr-cmp-ai-vs-traditional-bg-card: #ffffff;
  --fmstr-cmp-ai-vs-traditional-bg-row-alt: #fcfcfd;
  --fmstr-cmp-ai-vs-traditional-bg-us: #f7f3ff;
  --fmstr-cmp-ai-vs-traditional-fg-1: #101828;
  --fmstr-cmp-ai-vs-traditional-fg-2: #475467;
  --fmstr-cmp-ai-vs-traditional-fg-3: #697586;
  --fmstr-cmp-ai-vs-traditional-violet-600: #6941c6;
  --fmstr-cmp-ai-vs-traditional-violet-700: #53389e;
  --fmstr-cmp-ai-vs-traditional-border-light: #eaecf0;
  --fmstr-cmp-ai-vs-traditional-border-violet: #d6c4ff;
  --fmstr-cmp-ai-vs-traditional-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-ai-vs-traditional-fs-xs: 12px;
  --fmstr-cmp-ai-vs-traditional-fs-sm: 14px;
  --fmstr-cmp-ai-vs-traditional-fs-md: 16px;
  --fmstr-cmp-ai-vs-traditional-fs-2xl: 24px;
  --fmstr-cmp-ai-vs-traditional-fs-3xl: 36px;
  --fmstr-cmp-ai-vs-traditional-fw-semibold: 600;
  --fmstr-cmp-ai-vs-traditional-fw-bold: 700;
  --fmstr-cmp-ai-vs-traditional-lh-md: 24px;
  --fmstr-cmp-ai-vs-traditional-lh-2xl: 32px;
  --fmstr-cmp-ai-vs-traditional-space-2: 8px;
  --fmstr-cmp-ai-vs-traditional-space-3: 12px;
  --fmstr-cmp-ai-vs-traditional-space-4: 16px;
  --fmstr-cmp-ai-vs-traditional-space-5: 20px;
  --fmstr-cmp-ai-vs-traditional-space-6: 24px;
  --fmstr-cmp-ai-vs-traditional-space-8: 32px;
  --fmstr-cmp-ai-vs-traditional-space-10: 40px;
  --fmstr-cmp-ai-vs-traditional-space-12: 48px;
  --fmstr-cmp-ai-vs-traditional-space-16: 64px;
  --fmstr-cmp-ai-vs-traditional-r-2xl: 16px;

  background: var(--fmstr-cmp-ai-vs-traditional-bg-section);
  padding: var(--fmstr-cmp-ai-vs-traditional-space-16) var(--fmstr-cmp-ai-vs-traditional-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-ai-vs-traditional *,
.fmstr-cmp-ai-vs-traditional *::before,
.fmstr-cmp-ai-vs-traditional *::after {
  box-sizing: border-box;
}

.fmstr-cmp-ai-vs-traditional__inner {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-ai-vs-traditional__header {
  margin: 0 auto var(--fmstr-cmp-ai-vs-traditional-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-ai-vs-traditional__heading {
  font-size: var(--fmstr-cmp-ai-vs-traditional-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-ai-vs-traditional-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-ai-vs-traditional-fg-1);
  margin: 0 0 var(--fmstr-cmp-ai-vs-traditional-space-3);
}

.fmstr-cmp-ai-vs-traditional__sub {
  font-size: var(--fmstr-cmp-ai-vs-traditional-fs-md);
  line-height: var(--fmstr-cmp-ai-vs-traditional-lh-md);
  color: var(--fmstr-cmp-ai-vs-traditional-fg-3);
  margin: 0;
}

.fmstr-cmp-ai-vs-traditional__table-wrap {
  background: var(--fmstr-cmp-ai-vs-traditional-bg-card);
  border: 1px solid var(--fmstr-cmp-ai-vs-traditional-border-light);
  border-radius: var(--fmstr-cmp-ai-vs-traditional-r-2xl);
  box-shadow: var(--fmstr-cmp-ai-vs-traditional-shadow-xs);
  overflow: hidden;
}

.fmstr-cmp-ai-vs-traditional__table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fmstr-cmp-ai-vs-traditional-fs-sm);
}

.fmstr-cmp-ai-vs-traditional__table thead th {
  text-align: left;
  padding: var(--fmstr-cmp-ai-vs-traditional-space-5) var(--fmstr-cmp-ai-vs-traditional-space-6);
  background: var(--fmstr-cmp-ai-vs-traditional-bg-row-alt);
  border-bottom: 1px solid var(--fmstr-cmp-ai-vs-traditional-border-light);
  font-size: var(--fmstr-cmp-ai-vs-traditional-fs-xs);
  font-weight: var(--fmstr-cmp-ai-vs-traditional-fw-bold);
  color: var(--fmstr-cmp-ai-vs-traditional-fg-3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.fmstr-cmp-ai-vs-traditional__table thead th.fmstr-cmp-ai-vs-traditional__th--us {
  background: var(--fmstr-cmp-ai-vs-traditional-bg-us);
  color: var(--fmstr-cmp-ai-vs-traditional-violet-700);
  border-bottom-color: var(--fmstr-cmp-ai-vs-traditional-border-violet);
}

.fmstr-cmp-ai-vs-traditional__table tbody td {
  padding: var(--fmstr-cmp-ai-vs-traditional-space-4) var(--fmstr-cmp-ai-vs-traditional-space-6);
  border-bottom: 1px solid var(--fmstr-cmp-ai-vs-traditional-border-light);
  color: var(--fmstr-cmp-ai-vs-traditional-fg-2);
  line-height: 1.5;
  vertical-align: top;
}

.fmstr-cmp-ai-vs-traditional__table tbody tr:last-child td {
  border-bottom: 0;
}

.fmstr-cmp-ai-vs-traditional__row-label {
  font-weight: var(--fmstr-cmp-ai-vs-traditional-fw-semibold);
  color: var(--fmstr-cmp-ai-vs-traditional-fg-1);
  width: 28%;
}

.fmstr-cmp-ai-vs-traditional__us-cell {
  background: var(--fmstr-cmp-ai-vs-traditional-bg-us);
  color: var(--fmstr-cmp-ai-vs-traditional-fg-1);
  font-weight: var(--fmstr-cmp-ai-vs-traditional-fw-semibold);
}

.fmstr-cmp-ai-vs-traditional__caption {
  margin: var(--fmstr-cmp-ai-vs-traditional-space-5) 0 0;
  font-size: var(--fmstr-cmp-ai-vs-traditional-fs-sm);
  line-height: var(--fmstr-cmp-ai-vs-traditional-lh-md);
  color: var(--fmstr-cmp-ai-vs-traditional-fg-3);
  font-style: italic;
}

@media (max-width: 760px) {
  .fmstr-cmp-ai-vs-traditional {
    padding: var(--fmstr-cmp-ai-vs-traditional-space-12) var(--fmstr-cmp-ai-vs-traditional-space-4);
  }
  .fmstr-cmp-ai-vs-traditional__heading {
    font-size: var(--fmstr-cmp-ai-vs-traditional-fs-2xl);
    line-height: var(--fmstr-cmp-ai-vs-traditional-lh-2xl);
  }
  .fmstr-cmp-ai-vs-traditional__table-wrap {
    overflow-x: auto;
  }
  .fmstr-cmp-ai-vs-traditional__table {
    min-width: 640px;
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

.fmstr-cmp-more-ai-tools-aqm {
  --fmstr-cmp-more-ai-tools-aqm-bg-section: #ffffff;
  --fmstr-cmp-more-ai-tools-aqm-bg-card: #ffffff;
  --fmstr-cmp-more-ai-tools-aqm-bg-violet-25: #f7f3ff;
  --fmstr-cmp-more-ai-tools-aqm-fg-1: #101828;
  --fmstr-cmp-more-ai-tools-aqm-fg-2: #475467;
  --fmstr-cmp-more-ai-tools-aqm-violet-600: #6941c6;
  --fmstr-cmp-more-ai-tools-aqm-violet-700: #53389e;
  --fmstr-cmp-more-ai-tools-aqm-border-light: #eaecf0;
  --fmstr-cmp-more-ai-tools-aqm-border-violet: #9777e0;
  --fmstr-cmp-more-ai-tools-aqm-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-more-ai-tools-aqm-fs-sm: 14px;
  --fmstr-cmp-more-ai-tools-aqm-fs-md: 16px;
  --fmstr-cmp-more-ai-tools-aqm-fs-2xl: 24px;
  --fmstr-cmp-more-ai-tools-aqm-fs-3xl: 36px;
  --fmstr-cmp-more-ai-tools-aqm-fw-regular: 400;
  --fmstr-cmp-more-ai-tools-aqm-fw-semibold: 600;
  --fmstr-cmp-more-ai-tools-aqm-lh-sm: 20px;
  --fmstr-cmp-more-ai-tools-aqm-lh-md: 24px;
  --fmstr-cmp-more-ai-tools-aqm-lh-2xl: 32px;
  --fmstr-cmp-more-ai-tools-aqm-space-1: 4px;
  --fmstr-cmp-more-ai-tools-aqm-space-3: 12px;
  --fmstr-cmp-more-ai-tools-aqm-space-4: 16px;
  --fmstr-cmp-more-ai-tools-aqm-space-6: 24px;
  --fmstr-cmp-more-ai-tools-aqm-space-8: 32px;
  --fmstr-cmp-more-ai-tools-aqm-space-12: 48px;
  --fmstr-cmp-more-ai-tools-aqm-space-16: 64px;
  --fmstr-cmp-more-ai-tools-aqm-r-lg: 8px;
  --fmstr-cmp-more-ai-tools-aqm-r-2xl: 16px;

  background: var(--fmstr-cmp-more-ai-tools-aqm-bg-section);
  padding: var(--fmstr-cmp-more-ai-tools-aqm-space-16) var(--fmstr-cmp-more-ai-tools-aqm-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-more-ai-tools-aqm *,
.fmstr-cmp-more-ai-tools-aqm *::before,
.fmstr-cmp-more-ai-tools-aqm *::after {
  box-sizing: border-box;
}

.fmstr-cmp-more-ai-tools-aqm__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-more-ai-tools-aqm__heading {
  font-size: var(--fmstr-cmp-more-ai-tools-aqm-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-more-ai-tools-aqm-fw-semibold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-more-ai-tools-aqm-fg-1);
  text-align: center;
  margin: 0 0 var(--fmstr-cmp-more-ai-tools-aqm-space-12);
}

.fmstr-cmp-more-ai-tools-aqm__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-more-ai-tools-aqm-space-4);
}

.fmstr-cmp-more-ai-tools-aqm__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-more-ai-tools-aqm-space-3);
  padding: var(--fmstr-cmp-more-ai-tools-aqm-space-6);
  background: var(--fmstr-cmp-more-ai-tools-aqm-bg-card);
  border: 1px solid var(--fmstr-cmp-more-ai-tools-aqm-border-light);
  border-radius: var(--fmstr-cmp-more-ai-tools-aqm-r-2xl);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.fmstr-cmp-more-ai-tools-aqm__card:hover {
  border-color: var(--fmstr-cmp-more-ai-tools-aqm-border-violet);
  box-shadow: var(--fmstr-cmp-more-ai-tools-aqm-shadow-md);
  transform: translateY(-2px);
  text-decoration: none;
}

.fmstr-cmp-more-ai-tools-aqm__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-more-ai-tools-aqm-r-lg);
  background: var(--fmstr-cmp-more-ai-tools-aqm-bg-violet-25);
  color: var(--fmstr-cmp-more-ai-tools-aqm-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-more-ai-tools-aqm__title {
  font-size: var(--fmstr-cmp-more-ai-tools-aqm-fs-md);
  line-height: var(--fmstr-cmp-more-ai-tools-aqm-lh-md);
  font-weight: var(--fmstr-cmp-more-ai-tools-aqm-fw-semibold);
  color: var(--fmstr-cmp-more-ai-tools-aqm-fg-1);
  margin: var(--fmstr-cmp-more-ai-tools-aqm-space-1) 0 0;
}

.fmstr-cmp-more-ai-tools-aqm__desc {
  font-size: var(--fmstr-cmp-more-ai-tools-aqm-fs-sm);
  line-height: var(--fmstr-cmp-more-ai-tools-aqm-lh-sm);
  font-weight: var(--fmstr-cmp-more-ai-tools-aqm-fw-regular);
  color: var(--fmstr-cmp-more-ai-tools-aqm-fg-2);
  margin: 0;
}

@media (max-width: 1024px) {
  .fmstr-cmp-more-ai-tools-aqm__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-more-ai-tools-aqm {
    padding: var(--fmstr-cmp-more-ai-tools-aqm-space-12) var(--fmstr-cmp-more-ai-tools-aqm-space-4);
  }
  .fmstr-cmp-more-ai-tools-aqm__heading {
    font-size: var(--fmstr-cmp-more-ai-tools-aqm-fs-2xl);
    line-height: var(--fmstr-cmp-more-ai-tools-aqm-lh-2xl);
    margin-bottom: var(--fmstr-cmp-more-ai-tools-aqm-space-8);
  }
  .fmstr-cmp-more-ai-tools-aqm__grid {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-more-ai-tools-aqm-space-3);
  }
}
</style>
