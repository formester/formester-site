<template>
  <div>
    <AiHero
      :description="c0_description"
      type="Form"
      :hideIcons="false"
      buttonText="Generate my consent form"
      :placeholder="c0_placeholder"
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-csg-3ways" aria-labelledby="fmstr-cmp-csg-3ways-h2">
            <div class="fmstr-cmp-csg-3ways__container">
              <div class="fmstr-cmp-csg-3ways__header">
                <div class="fmstr-cmp-csg-3ways__eyebrow">How it works</div>
                <h2 class="fmstr-cmp-csg-3ways__h2" id="fmstr-cmp-csg-3ways-h2">
                  Three ways to build your consent form
                </h2>
                <p class="fmstr-cmp-csg-3ways__sub">
                  Pick whichever start point fits how you work. Every route ends in a shareable form that captures a
                  legally valid e-signature with each submission.
                </p>
              </div>

              <div class="fmstr-cmp-csg-3ways__grid">
                <div class="fmstr-cmp-csg-3ways__card">
                  <div class="fmstr-cmp-csg-3ways__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-csg-3ways__title">Start from a template</h3>
                  <p class="fmstr-cmp-csg-3ways__body">
                    Pick from 25+ consent form templates: photo release, GDPR marketing opt-in, background check
                    consent, participant research consent, event waiver. Swap the copy, adjust the fields, publish.
                  </p>
                  <p class="fmstr-cmp-csg-3ways__example">
                    Best when the language is standard and you need something legal-clean fast.
                  </p>
                </div>

                <div class="fmstr-cmp-csg-3ways__card">
                  <div class="fmstr-cmp-csg-3ways__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-csg-3ways__title">Generate with AI</h3>
                  <p class="fmstr-cmp-csg-3ways__body">
                    Prompt: "Consent form for a Q4 photo shoot where the model releases image rights for social media."
                    Or paste your own paragraph. Our AI picks the field types, wires the signature block, and ships in
                    30 seconds.
                  </p>
                </div>

                <div class="fmstr-cmp-csg-3ways__card">
                  <div class="fmstr-cmp-csg-3ways__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-csg-3ways__title">Digitize your paper PDF</h3>
                  <p class="fmstr-cmp-csg-3ways__body">
                    Upload the paper consent form you already have. Our AI reads the PDF, extracts every field, and
                    rebuilds it as a digital form with a native e-signature slot at the bottom. Two clicks to modernize
                    a 10-year-old paper process.
                  </p>
                </div>
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
        <section class="fmstr-cmp-csg-quality-control" aria-labelledby="fmstr-cmp-csg-quality-control-heading">
          <div class="fmstr-cmp-csg-quality-control__container">
            <div class="fmstr-cmp-csg-quality-control__inner">
              <div class="fmstr-cmp-csg-quality-control__text">
                <span class="fmstr-cmp-csg-quality-control__eyebrow">Signature validity</span>
                <h2 id="fmstr-cmp-csg-quality-control-heading" class="fmstr-cmp-csg-quality-control__heading">
                  Every signed consent stands up later
                </h2>
                <div class="fmstr-cmp-csg-quality-control__body">
                  <p>
                    An e-signature that gets challenged is only as good as what's captured around it. A signature image
                    alone is not enough. Courts and auditors look for the signer's identity, the exact time it was
                    signed, and evidence the signer had reasonable notice of what they were consenting to.
                  </p>
                  <p>
                    Formester's signature field captures all of that on every submission, on every plan including free.
                    Drawn on a mouse, trackpad, or finger, or typed in the signer's own hand. Stored encrypted at rest
                    and available as a PDF export on Business and above. GDPR, UK GDPR, and CCPA compliant. Legally
                    valid for the vast majority of consent workflows in the US, UK, EU, Canada, and Australia.
                  </p>
                </div>
              </div>

              <aside class="fmstr-cmp-csg-quality-control__card">
                <span class="fmstr-cmp-csg-quality-control__pill">What gets captured on every submission</span>
                <h3 class="fmstr-cmp-csg-quality-control__card-title">Five layers of proof, on by default</h3>
                <ul class="fmstr-cmp-csg-quality-control__list">
                  <li class="fmstr-cmp-csg-quality-control__item">
                    <svg
                      class="fmstr-cmp-csg-quality-control__check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="fmstr-cmp-csg-quality-control__item-text"
                      ><strong>Native e-signature</strong> drawn or typed, stored as a vector alongside the raw
                      signature image.</span
                    >
                  </li>
                  <li class="fmstr-cmp-csg-quality-control__item">
                    <svg
                      class="fmstr-cmp-csg-quality-control__check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="fmstr-cmp-csg-quality-control__item-text"
                      ><strong>Signer identity</strong> captured alongside the signature: full name, email, and any
                      other fields you added.</span
                    >
                  </li>
                  <li class="fmstr-cmp-csg-quality-control__item">
                    <svg
                      class="fmstr-cmp-csg-quality-control__check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="fmstr-cmp-csg-quality-control__item-text"
                      ><strong>Exact timestamp</strong> down to the second, in UTC, on every signature.</span
                    >
                  </li>
                  <li class="fmstr-cmp-csg-quality-control__item">
                    <svg
                      class="fmstr-cmp-csg-quality-control__check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="fmstr-cmp-csg-quality-control__item-text"
                      ><strong>PDF export</strong> of every signed consent, on Business and above, so records can be
                      shared with legal, HR, or a client.</span
                    >
                  </li>
                  <li class="fmstr-cmp-csg-quality-control__item">
                    <svg
                      class="fmstr-cmp-csg-quality-control__check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="fmstr-cmp-csg-quality-control__item-text"
                      ><strong>GDPR, UK GDPR, CCPA compliant</strong> storage. Encryption at rest and in transit. We
                      never share or train on your consent data (DPA §4.4).</span
                    >
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </section>

    <SimpleStepsCreate
      description="Start from a prompt, PDF, or template. Our AI consent form generator turns it into a shareable form with a native e-signature slot in under 30 seconds."
      :title="c4_title"
      :itemList="c4_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-csg-demo" aria-labelledby="fmstr-cmp-csg-demo-h2">
            <div class="fmstr-cmp-csg-demo__container">
              <div class="fmstr-cmp-csg-demo__header">
                <div class="fmstr-cmp-csg-demo__eyebrow">See it happen</div>
                <h2 class="fmstr-cmp-csg-demo__h2" id="fmstr-cmp-csg-demo-h2">Watch a consent form build itself</h2>
                <p class="fmstr-cmp-csg-demo__sub">
                  Type the prompt, click generate, and the form is ready to edit and share.
                </p>
              </div>
              <div class="fmstr-cmp-csg-demo__frame">
                <video
                  class="fmstr-cmp-csg-demo__media"
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="metadata"
                  aria-label="Formester AI generating a participant informed consent form from a typed prompt"
                >
                  <source
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/ai_generate_demo_6c9e24c1b9.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-csg-who-uses" aria-labelledby="fmstr-cmp-csg-who-uses-heading">
          <div class="fmstr-cmp-csg-who-uses__container">
            <header class="fmstr-cmp-csg-who-uses__header">
              <h2 id="fmstr-cmp-csg-who-uses-heading" class="fmstr-cmp-csg-who-uses__heading">
                Who uses our consent form generator
              </h2>
              <p class="fmstr-cmp-csg-who-uses__sub">
                Teams that need signed consent to move forward, in industries where the signature has to hold up.
              </p>
            </header>

            <div class="fmstr-cmp-csg-who-uses__grid">
              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z" />
                    <path d="M16 8a4 4 0 0 1 0 8" />
                    <path d="M19 5a8 8 0 0 1 0 14" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Marketing teams</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Photo release forms for shoot subjects. GDPR-compliant marketing opt-in for newsletter and campaign
                  lists. Testimonial usage consent from happy customers.
                </p>
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                    <circle cx="9.5" cy="7" r="3.5" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">HR and People teams</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Background check consent from new hires. Payroll deduction authorization. Photo and video release for
                  internal company use. Reference check consent from candidates.
                </p>
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <path d="M22 10 12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c3 2 9 2 12 0v-5" />
                    <path d="M22 10v6" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Legal and compliance</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Event liability waivers, engagement letters, non-disclosure acknowledgements, click-to-agree terms.
                  Every signed record ships with signer identity plus a UTC timestamp on the same submission.
                </p>
                <hr class="fmstr-cmp-csg-who-uses__divider" />
                <a class="fmstr-cmp-csg-who-uses__cta" href="https://formester.com/ai-quiz-maker/"
                  >Generate Quizzes in Seconds &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="12" cy="18" r="3" />
                    <path d="M8.5 8 11 16M15.5 8 13 16" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Clinicians (non-PHI use only)</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Formester is not HIPAA-certified. For PHI intake use Jotform Gold or Cognito Forms Enterprise. For
                  non-PHI consent inside a clinical practice, marketing opt-in, patient education acknowledgements,
                  event RSVPs, and photo releases, Formester fits.
                </p>
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <path d="M9 11a4 4 0 1 0-3-7" />
                    <path d="M5 21v-4a4 4 0 0 1 4-4h2" />
                    <path d="M16 11a4 4 0 1 1 3-7" />
                    <path d="M19 21v-4a4 4 0 0 0-4-4h-2" />
                    <circle cx="12" cy="14" r="1" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Researchers</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Participant informed-consent for survey studies, user interviews, and product research. Capture the
                  signed consent alongside the study screener in one submission.
                </p>
                <hr class="fmstr-cmp-csg-who-uses__divider" />
                <a class="fmstr-cmp-csg-who-uses__cta" href="https://formester.com/ai-survey-generator/"
                  >Analyze Customer Feedback &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Schools and colleges</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Field trip permission slips, media release for student photos, athletics participation waivers,
                  technology use agreements. Parent name and student name captured on the same signed submission.
                </p>
                <hr class="fmstr-cmp-csg-who-uses__divider" />
                <a class="fmstr-cmp-csg-who-uses__cta" href="https://formester.com/ai-survey-generator/"
                  >Generate Surveys with AI in Seconds &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M8 3v4M16 3v4" />
                    <path d="M8 14h2M8 17h6" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Event organizers</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Liability waivers for attendees, photo and video release for the event coverage, allergen and dietary
                  consent for catered events, minor participation forms with parent signature.
                </p>
              </article>

              <article class="fmstr-cmp-csg-who-uses__card">
                <span class="fmstr-cmp-csg-who-uses__icon" aria-hidden="true">
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
                    />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-who-uses__title">Nonprofits</h3>
                <p class="fmstr-cmp-csg-who-uses__body">
                  Volunteer liability waivers, donor recognition consent for annual reports, program participation
                  acknowledgements. Free plan handles unlimited signed consents at $0.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-csg-api-mcp" aria-labelledby="fmstr-cmp-csg-api-mcp-title">
          <div class="fmstr-cmp-csg-api-mcp__container">
            <header class="fmstr-cmp-csg-api-mcp__header">
              <span class="fmstr-cmp-csg-api-mcp__eyebrow">For developers</span>
              <h2 id="fmstr-cmp-csg-api-mcp-title" class="fmstr-cmp-csg-api-mcp__title">
                Your submissions, ready for the CRM you already use
              </h2>
              <p class="fmstr-cmp-csg-api-mcp__intro">
                Every Formester form ships with a REST API and an MCP server, so submissions don't stop at a CSV. Pipe
                leads into your agent. Stream applications into your hiring copilot. Nobody else on this list ships MCP.
              </p>
            </header>

            <div class="fmstr-cmp-csg-api-mcp__grid">
              <article class="fmstr-cmp-csg-api-mcp__card">
                <span class="fmstr-cmp-csg-api-mcp__icon" aria-hidden="true">
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
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <circle cx="12" cy="18" r="2.5" />
                    <path d="M8 7l3 9M16 7l-3 9" />
                  </svg>
                </span>
                <span class="fmstr-cmp-csg-api-mcp__badge">MCP server</span>
                <h3 class="fmstr-cmp-csg-api-mcp__card-title">
                  Plug Formester into Claude, ChatGPT, or any MCP-compatible model
                </h3>
                <div class="fmstr-cmp-csg-api-mcp__chips">
                  <span class="fmstr-cmp-csg-api-mcp__chip">Claude</span>
                  <span class="fmstr-cmp-csg-api-mcp__chip">ChatGPT</span>
                  <span class="fmstr-cmp-csg-api-mcp__chip">Custom agents</span>
                </div>
                <p class="fmstr-cmp-csg-api-mcp__body">
                  Connect Formester to any MCP-compatible model and let it read your signed consent records directly.
                  Ask Claude "which participant consents from this week's study need follow-up?" or have a custom agent
                  flag any consent submission where the signer opted out of specific data uses so your ops team can act
                  on it.
                </p>
                <a class="fmstr-cmp-csg-api-mcp__cta" href="https://docs.formester.com/formester-mcp-server.html"
                  >Read the MCP docs &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-csg-api-mcp__card">
                <span class="fmstr-cmp-csg-api-mcp__icon" aria-hidden="true">
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
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="13" y1="4" x2="11" y2="20" />
                  </svg>
                </span>
                <span class="fmstr-cmp-csg-api-mcp__badge fmstr-cmp-csg-api-mcp__badge--alt">REST API v2</span>
                <h3 class="fmstr-cmp-csg-api-mcp__card-title">Or build directly on the REST API</h3>
                <div class="fmstr-cmp-csg-api-mcp__chips">
                  <span class="fmstr-cmp-csg-api-mcp__chip">Self-service token</span>
                  <span class="fmstr-cmp-csg-api-mcp__chip">Webhooks</span>
                  <span class="fmstr-cmp-csg-api-mcp__chip">Business plan +</span>
                </div>
                <p class="fmstr-cmp-csg-api-mcp__body">
                  Pull signed consent records into your CRM or data warehouse, log the timestamp to your compliance
                  system, or push pre-filled consent URLs back from Salesforce. Self-service token at
                  app.formester.com/api in two clicks. No support ticket, no waiting.
                </p>
                <a class="fmstr-cmp-csg-api-mcp__cta" href="https://docs.formester.com/formester-api.html"
                  >Read the API docs &rarr;</a
                >
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <section
          class="fmstr-cmp-csg-privacy-data-ownership"
          aria-labelledby="fmstr-cmp-csg-privacy-data-ownership-heading"
        >
          <div class="fmstr-cmp-csg-privacy-data-ownership__container">
            <div class="fmstr-cmp-csg-privacy-data-ownership__inner">
              <div class="fmstr-cmp-csg-privacy-data-ownership__text">
                <span class="fmstr-cmp-csg-privacy-data-ownership__eyebrow">Privacy and data ownership</span>
                <h2
                  id="fmstr-cmp-csg-privacy-data-ownership-heading"
                  class="fmstr-cmp-csg-privacy-data-ownership__heading"
                >
                  Your consent records belong to you. We don't train on them
                </h2>
                <div class="fmstr-cmp-csg-privacy-data-ownership__body">
                  <p>
                    When you upload a PDF, paste a prompt, or generate a form, that content is used to generate your
                    form and nothing else. Per Section 4.4 of our DPA, Formester does not use Customer Data for
                    analytics, advertising, marketing, or product training. The Google Gemini integration we use to
                    power AI features inherits the same boundary.
                  </p>
                  <p>
                    Encrypted in transit and at rest, hosted on Heroku and AWS, automated encrypted backups with a
                    90-day retention, and full data deletion on request. We are GDPR, UK GDPR, and CCPA compliant. We
                    are not SOC 2 or ISO 27001 certified yet, and we will tell you so directly rather than dance around
                    it.
                  </p>
                </div>
              </div>

              <aside class="fmstr-cmp-csg-privacy-data-ownership__card">
                <span class="fmstr-cmp-csg-privacy-data-ownership__pill">What's in the DPA</span>
                <blockquote class="fmstr-cmp-csg-privacy-data-ownership__quote">
                  "Formester does not use Customer Data for analytics, advertising, marketing, or product training."
                </blockquote>
                <hr class="fmstr-cmp-csg-privacy-data-ownership__divider" />
                <p class="fmstr-cmp-csg-privacy-data-ownership__cite">
                  Section 4.4, Formester Data Processing Agreement, effective January 2026.
                </p>
                <div class="fmstr-cmp-csg-privacy-data-ownership__links">
                  <a href="https://formester.com/dpa/">Read the DPA →</a>
                  <a href="https://formester.com/security/">Security overview →</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </section>

    <StandoutFeatureDetail :title="c9_title" :itemList="c9_itemList" class="page-component-item" />

    <TestimonialWall
      description="Real reviews from G2, Trustpilot, and Product Hunt."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c10_title"
      :pickedReviews="c10_pickedReviews"
      :excludedReviews="c10_excludedReviews"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c11_ctaValue" class="page-component-item" />

    <FaqSection :centered="false" :title="c12_title" :faqList="c12_faqList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-csg-more-tools" aria-labelledby="fmstr-cmp-csg-more-tools-heading">
          <div class="fmstr-cmp-csg-more-tools__inner">
            <h2 id="fmstr-cmp-csg-more-tools-heading" class="fmstr-cmp-csg-more-tools__heading">
              More Formester generators worth a look
            </h2>

            <div class="fmstr-cmp-csg-more-tools__grid">
              <a class="fmstr-cmp-csg-more-tools__card" href="https://formester.com/ai-quiz-maker/">
                <span class="fmstr-cmp-csg-more-tools__icon" aria-hidden="true">
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
                    />
                    <path
                      d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1 0 4 2.5 2.5 0 0 1-2 4v.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 14.5 2Z"
                    />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-more-tools__title">AI Form Generator</h3>
                <p class="fmstr-cmp-csg-more-tools__desc">Generate assessments with answer keys in seconds.</p>
              </a>

              <a class="fmstr-cmp-csg-more-tools__card" href="https://formester.com/ai-survey-generator/">
                <span class="fmstr-cmp-csg-more-tools__icon" aria-hidden="true">
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
                    <line x1="3" y1="20" x2="21" y2="20" />
                    <rect x="5" y="11" width="3.5" height="9" rx="0.5" />
                    <rect x="10.25" y="6" width="3.5" height="14" rx="0.5" />
                    <rect x="15.5" y="13" width="3.5" height="7" rx="0.5" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-more-tools__title">AI Quiz Maker</h3>
                <p class="fmstr-cmp-csg-more-tools__desc">Research-grade survey instruments from a brief.</p>
              </a>

              <a class="fmstr-cmp-csg-more-tools__card" href="https://formester.com/ai-powered-multilingual-forms/">
                <span class="fmstr-cmp-csg-more-tools__icon" aria-hidden="true">
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a13.5 13.5 0 0 1 0 18" />
                    <path d="M12 3a13.5 13.5 0 0 0 0 18" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-more-tools__title">AI Survey Generator</h3>
                <p class="fmstr-cmp-csg-more-tools__desc">Auto-translate any form into 50+ languages.</p>
              </a>

              <a class="fmstr-cmp-csg-more-tools__card" href="https://formester.com/features/ai-workflows/">
                <span class="fmstr-cmp-csg-more-tools__icon" aria-hidden="true">
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
                    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
                  </svg>
                </span>
                <h3 class="fmstr-cmp-csg-more-tools__title">AI Multilingual Forms</h3>
                <p class="fmstr-cmp-csg-more-tools__desc">Trigger automations on form submission.</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate.vue'
import StandoutFeatureDetail from '@/components/features/StandoutFeatureDetail.vue'
import TestimonialWall from '@/components/v2/TestimonialWall.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Describe your consent form in plain English. Paste a URL. Upload a paper PDF. Watch the AI build it in under 30 seconds, ready to share with a native e-signature field.'
const c0_placeholder =
  'Describe the consent form you need. Example: A photo release for a Q4 marketing campaign where the model releases image rights for social media, with signature and date.'
const c0_title = [
  {
    id: 5991,
    text: 'The Free Consent Form Generator That Captures ',
    highlight: false,
    color: '#000000',
    bold: false,
  },
  {
    id: 5986,
    text: 'Legally Valid Signatures',
    highlight: true,
    color: '#000000',
    bold: false,
  },
]
const c0_suggestions = [
  {
    id: 148,
    text: 'Create a photo release consent form for a Q4 marketing campaign with signature and image usage rights.',
    label: 'Photo release',
  },
  {
    id: 149,
    text: 'Create a GDPR marketing opt-in form for our newsletter with granular consent checkboxes.',
    label: 'GDPR opt-in',
  },
  {
    id: 150,
    text: 'Create a participant research consent form for a user study with IRB-standard language and signature capture.',
    label: 'Research consent',
  },
]
const c0_footerItems = [
  {
    id: 3600,
    text: 'Trusted by 56,000 teams',
  },
  {
    id: 3602,
    text: 'Free forever',
  },
  {
    id: 3603,
    text: 'Native e-signature',
  },
  {
    id: 3601,
    text: 'PDF export of signed records',
  },
]
const c2_title = []
const c2_logos = []
const c4_title = [
  {
    id: 5987,
    text: 'How Our ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5988,
    text: 'Consent Form Builder ',
    highlight: true,
    color: '#6434D0',
    bold: true,
  },
  {
    id: 5989,
    text: 'Works',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c4_itemList = [
  {
    id: 3023,
    title: 'Type a prompt, upload a paper PDF, or pick a template',
    description:
      'Describe your consent scenario in plain English. Upload the paper consent form you already use. Or start from 25+ vetted templates covering photo release, GDPR opt-in, background check, event waiver, and research consent.',
    description_markdown:
      'Describe your consent scenario in plain English. Upload the paper consent form you already use. Or start from 25+ vetted templates covering photo release, GDPR opt-in, background check, event waiver, and research consent.',
    icon: null,
    cardImage: null,
  },
  {
    id: 3025,
    title: 'Watch the AI build the form, signature field included',
    description:
      'The AI picks the right question types, wires the signer identity fields, and adds a legally valid e-signature slot at the bottom with timestamp capture. All ready in 30 seconds.',
    description_markdown:
      'The AI picks the right question types, wires the signer identity fields, and adds a legally valid e-signature slot at the bottom with timestamp capture. All ready in 30 seconds.',
    icon: null,
    cardImage: null,
  },
  {
    id: 3026,
    title: 'Publish, share, and collect signed consents',
    description:
      'Publish on a Formester subdomain, embed on your site, or send via email. Every submission ships with signer identity, drawn or typed signature, and UTC timestamp. Export as PDF on Business and above.',
    description_markdown:
      'Publish on a Formester subdomain, embed on your site, or send via email. Every submission ships with signer identity, drawn or typed signature, and UTC timestamp. Export as PDF on Business and above.',
    icon: null,
    cardImage: null,
  },
]
const c9_title = [
  {
    id: 5992,
    text: 'Unlock the full power of Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c9_itemList = [
  {
    id: 3024,
    title: 'Native e-signature',
    description:
      'Legally valid drawn or typed signature with signer identity and UTC timestamp on every submission.\n\n**[Learn more-->](/features/electronic-signature/)**',
    description_markdown:
      'Legally valid drawn or typed signature with signer identity and UTC timestamp on every submission.\n\n**[Learn more-->](/features/electronic-signature/)**',
    icon: null,
    cardImage: null,
  },
  {
    id: 3027,
    title: 'AI form generator',
    description:
      'Generate a form from a prompt, question list, or PDF upload in 30 seconds.\n\n**[Turn a consent PDF into an editable form →](/ai-form-generator/#pdf-to-form)**',
    description_markdown:
      'Generate a form from a prompt, question list, or PDF upload in 30 seconds.\n\n**[Turn a consent PDF into an editable form →](/ai-form-generator/#pdf-to-form)**',
    icon: null,
    cardImage: null,
  },
  {
    id: 3028,
    title: 'PDF export of signed records',
    description:
      'Every signed consent renders as a formatted PDF on Business and above.\n\n**[Learn more-->](/features/export-form-submission-pdf/)**',
    description_markdown:
      'Every signed consent renders as a formatted PDF on Business and above.\n\n**[Learn more-->](/features/export-form-submission-pdf/)**',
    icon: null,
    cardImage: null,
  },
  {
    id: 3029,
    title: 'GDPR + UK GDPR + CCPA compliant',
    description:
      'Formester is compliant, EU data residency on Business, no training on your consent data per DPA Section 4.4.\n\n**[Learn more-->](/security/)**',
    description_markdown:
      'Formester is compliant, EU data residency on Business, no training on your consent data per DPA Section 4.4.\n\n**[Learn more-->](/security/)**',
    icon: null,
    cardImage: null,
  },
  {
    id: 3031,
    title: 'AI conditional logic',
    description:
      'Show or hide fields based on answers so respondents only see what applies. On Personal at 12 dollars per month and above.\n\n**[Learn more-->](/build-conditional-logic-forms-with-ai/)**',
    description_markdown:
      'Show or hide fields based on answers so respondents only see what applies. On Personal at 12 dollars per month and above.\n\n**[Learn more-->](/build-conditional-logic-forms-with-ai/)**',
    icon: null,
    cardImage: null,
  },
  {
    id: 3030,
    title: 'AI multilingual forms',
    description:
      'Translate any consent form into 80 plus languages instantly. Reach signers in their native language with no manual work.\n\n**[Learn more-->](/ai-powered-multilingual-forms/)**',
    description_markdown:
      'Translate any consent form into 80 plus languages instantly. Reach signers in their native language with no manual work.\n\n**[Learn more-->](/ai-powered-multilingual-forms/)**',
    icon: null,
    cardImage: null,
  },
]
const c10_title = [
  {
    id: 5990,
    text: 'What teams are saying about Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c10_pickedReviews = []
const c10_excludedReviews = []
const c11_ctaValue = {
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
const c12_title = [
  {
    id: 5993,
    text: 'FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c12_faqList = [
  {
    id: 3866,
    header: 'Can I create my own consent form?',
    body: "Yes. Formester's consent form generator gives you three starting points: a prompt-to-form AI, a paper PDF upload that gets digitized in one click, or a template gallery of 25+ vetted consent forms. Every route ends in a form you can share via link, embed on your site, or send by email.",
    body_markdown: null,
    list: [],
  },
  {
    id: 3867,
    header: 'Is the consent form generator really free?',
    body: 'Yes. Unlimited forms and unlimited signed submissions on the free plan, with the native e-signature field included. No trial that expires, no card required at signup, no cap on how many consents you collect.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3873,
    header: 'Can I export the signed consent as a PDF?',
    body: 'Yes, on Business and above. Every signed submission renders as a formatted PDF with the signer identity block, the exact consent language they agreed to, the signature drawn or typed, and a UTC timestamp. Free and Personal tiers still capture the same data, the PDF export is the layer that lets you share the signed record with legal, HR, or a client.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3869,
    header: "Is Formester's electronic signature legally valid?",
    body: 'For the vast majority of consent workflows in the US, UK, EU, Canada, and Australia, yes. E-signatures are recognized under ESIGN and UETA in the US, eIDAS in the EU and UK, and PIPEDA in Canada, as long as three conditions are met: the signer clearly agreed, the signature is attributable to them, and the record is preserved. Formester captures intent via checkbox plus signature act, attribution via signer identity plus timestamp, and preservation via encrypted storage plus PDF export.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3868,
    header: 'Can I use this for research participant consent?',
    body: 'Yes for behavioral research, user studies, surveys, and product interviews. Add your IRB-approved consent language to the form, capture the signature, export as PDF for the IRB record. For research involving PHI under HIPAA, use a HIPAA-eligible tool like Jotform Gold since Formester is not HIPAA-certified.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3871,
    header: 'Does Formester handle GDPR and CCPA compliance?',
    body: 'Yes. Formester is GDPR, UK GDPR, and CCPA compliant. EU data residency is available on Business and above. The form itself can be structured with granular opt-in unbundling, separate checkboxes for marketing, analytics, and third-party sharing, so the consent you capture matches GDPR Recital 32.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3870,
    header: 'How is this different from a Google Forms consent form?',
    body: "Google Forms lets you build a consent form, but it does not have a native e-signature field. Respondents can type their name into a text box, which is not a signature. Formester's signature field captures a drawn or typed signature, signer identity, and timestamp on every submission, then exports to PDF on Business and above.",
    body_markdown: null,
    list: [],
  },
  {
    id: 3872,
    header: 'Can I add my own logo and branding?',
    body: 'Yes. Personal at 12 dollars per month yearly removes Formester branding and adds a custom URL slug. Business at 45 dollars per month yearly adds a custom domain like consent.yourbrand.com plus full logo and color customization.',
    body_markdown: null,
    list: [],
  },
  {
    id: 3874,
    header: 'What are the 4 types of consent?',
    body: "In legal and healthcare frameworks, consent typically falls into four categories: implied (assumed from the person's actions or situation), express (given explicitly, verbally or in writing), informed (given after the person has been given all material facts), and specific (limited to a defined purpose or transaction). Formester's consent form generator is designed for express, informed, and specific consent workflows where a written record is required.",
    body_markdown: null,
    list: [],
  },
]

useHead({
  title: 'Free Consent Form Generator with AI + eSign | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/consent-form-generator/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-08-09T15:59:36.417Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Build legally valid consent forms in minutes. AI generator from a prompt or PDF, native e-signature capture, unlimited free responses, PDF export.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free Consent Form Generator with AI + eSign | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/consent-form-generator/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free Consent Form Generator with AI + eSign | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Build legally valid consent forms in minutes. AI generator from a prompt or PDF, native e-signature capture, unlimited free responses, PDF export.',
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
      content: 'https://formester.com/consent-form-generator/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free Consent Form Generator with AI + eSign | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Build legally valid consent forms in minutes. AI generator from a prompt or PDF, native e-signature capture, unlimited free responses, PDF export.',
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
        'consent form generator',
        'ai consent form generator',
        'free consent form generator',
        'consent form generator pdf',
        'online consent form generator',
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
        logo: {
          url: 'https://formester.com/logo.png',
          '@type': 'ImageObject',
        },
        name: 'Formester',
        '@type': 'Organization',
      },
      {
        '@id': 'https://formester.com/consent-form-generator/#webpage',
        url: 'https://formester.com/consent-form-generator/',
        name: 'Free Consent Form Generator with AI + eSign | Formester',
        '@type': 'WebPage',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/consent-form-generator/#breadcrumb',
        },
        inLanguage: 'en-US',
        description:
          'Build legally valid consent forms in minutes. AI generator from a prompt or PDF, native e-signature capture, unlimited free responses, PDF export.',
        dateModified: '2026-08-03',
        datePublished: '2026-08-03',
      },
      {
        '@id': 'https://formester.com/consent-form-generator/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/consent-form-generator/',
            name: 'Consent Form Generator',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/consent-form-generator/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'Can I create my own consent form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Yes. Formester's consent form generator gives you three starting points: a prompt-to-form AI, a paper PDF upload that gets digitized in one click, or a template gallery of 25+ vetted consent forms. Every route ends in a form you can share via link, embed on your site, or send by email.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Is the consent form generator really free?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Unlimited forms and unlimited signed submissions on the free plan, with the native e-signature field included. No trial that expires, no card required at signup, no cap on how many consents you collect.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I export the signed consent as a PDF?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes, on Business and above. Every signed submission renders as a formatted PDF with the signer identity block, the exact consent language they agreed to, the signature drawn or typed, and a UTC timestamp. Free and Personal tiers still capture the same data, the PDF export is the layer that lets you share the signed record with legal, HR, or a client.',
              '@type': 'Answer',
            },
          },
          {
            name: "Is Formester's electronic signature legally valid?",
            '@type': 'Question',
            acceptedAnswer: {
              text: 'For the vast majority of consent workflows in the US, UK, EU, Canada, and Australia, yes. E-signatures are recognized under ESIGN and UETA in the US, eIDAS in the EU and UK, and PIPEDA in Canada, as long as three conditions are met: the signer clearly agreed, the signature is attributable to them, and the record is preserved. Formester captures intent via checkbox plus signature act, attribution via signer identity plus timestamp, and preservation via encrypted storage plus PDF export.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I use this for research participant consent?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes for behavioral research, user studies, surveys, and product interviews. Add your IRB-approved consent language to the form, capture the signature, export as PDF for the IRB record. For research involving PHI under HIPAA, use a HIPAA-eligible tool like Jotform Gold since Formester is not HIPAA-certified.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Does Formester handle GDPR and CCPA compliance?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Formester is GDPR, UK GDPR, and CCPA compliant. EU data residency is available on Business and above. The form itself can be structured with granular opt-in unbundling, separate checkboxes for marketing, analytics, and third-party sharing, so the consent you capture matches GDPR Recital 32.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How is this different from a Google Forms consent form?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Google Forms lets you build a consent form, but it does not have a native e-signature field. Respondents can type their name into a text box, which is not a signature. Formester's signature field captures a drawn or typed signature, signer identity, and timestamp on every submission, then exports to PDF on Business and above.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I add my own logo and branding?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Personal at 12 dollars per month yearly removes Formester branding and adds a custom URL slug. Business at 45 dollars per month yearly adds a custom domain like consent.yourbrand.com plus full logo and color customization.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What are the 4 types of consent?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "In legal and healthcare frameworks, consent typically falls into four categories: implied (assumed from the person's actions or situation), express (given explicitly, verbally or in writing), informed (given after the person has been given all material facts), and specific (limited to a defined purpose or transaction). Formester's consent form generator is designed for express, informed, and specific consent workflows where a written record is required.",
              '@type': 'Answer',
            },
          },
        ],
      },
      {
        '@id': 'https://formester.com/#software',
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
            price: '13',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
          },
        ],
        publisher: {
          '@id': 'https://formester.com/#organization',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingCount: '11',
          ratingValue: '4.7',
        },
        operatingSystem: 'Web, iOS, Android',
        applicationCategory: 'BusinessApplication',
      },
    ],
    '@context': 'https://schema.org',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
.fmstr-cmp-csg-3ways a {
  text-decoration: none !important;
}
.fmstr-cmp-csg-3ways {
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
.fmstr-cmp-csg-3ways *,
.fmstr-cmp-csg-3ways *::before,
.fmstr-cmp-csg-3ways *::after {
  box-sizing: border-box;
}
.fmstr-cmp-csg-3ways__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-csg-3ways__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-csg-3ways__eyebrow {
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
.fmstr-cmp-csg-3ways__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-csg-3ways__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-csg-3ways__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  min-width: 0;
}
.fmstr-cmp-csg-3ways__card {
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
.fmstr-cmp-csg-3ways__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
}
.fmstr-cmp-csg-3ways__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  display: grid;
  place-items: center;
  color: var(--c-violet-600);
}
.fmstr-cmp-csg-3ways__icon svg {
  width: 22px;
  height: 22px;
}
.fmstr-cmp-csg-3ways__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-csg-3ways__body {
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.55;
  margin: 0;
}
.fmstr-cmp-csg-3ways__example {
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
  .fmstr-cmp-csg-3ways {
    padding: 48px 16px;
  }
  .fmstr-cmp-csg-3ways__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-csg-3ways__h2 {
    font-size: 24px;
  }
}

.fmstr-cmp-csg-quality-control {
  --fmstr-cmp-csg-quality-control-bg-section: #0f0921;
  --fmstr-cmp-csg-quality-control-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-csg-quality-control-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-csg-quality-control-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-csg-quality-control-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-csg-quality-control-bg-row: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-csg-quality-control-fg-eyebrow: #bda6ff;
  --fmstr-cmp-csg-quality-control-fg-row: rgba(255, 255, 255, 0.85);
  --fmstr-cmp-csg-quality-control-fg-row-tag: #bda6ff;
  --fmstr-cmp-csg-quality-control-fg-link: #d9c7ff;
  --fmstr-cmp-csg-quality-control-fg-link-hover: #ffffff;
  --fmstr-cmp-csg-quality-control-fs-xs: 12px;
  --fmstr-cmp-csg-quality-control-fs-sm: 14px;
  --fmstr-cmp-csg-quality-control-fs-md: 16px;
  --fmstr-cmp-csg-quality-control-fs-lg: 18px;
  --fmstr-cmp-csg-quality-control-fs-2xl: 24px;
  --fmstr-cmp-csg-quality-control-fs-3xl: 32px;
  --fmstr-cmp-csg-quality-control-fw-semibold: 600;
  --fmstr-cmp-csg-quality-control-fw-bold: 700;
  --fmstr-cmp-csg-quality-control-lh-md: 24px;
  --fmstr-cmp-csg-quality-control-lh-lg: 28px;
  --fmstr-cmp-csg-quality-control-lh-2xl: 32px;
  --fmstr-cmp-csg-quality-control-space-1: 4px;
  --fmstr-cmp-csg-quality-control-space-2: 8px;
  --fmstr-cmp-csg-quality-control-space-3: 12px;
  --fmstr-cmp-csg-quality-control-space-4: 16px;
  --fmstr-cmp-csg-quality-control-space-5: 20px;
  --fmstr-cmp-csg-quality-control-space-6: 24px;
  --fmstr-cmp-csg-quality-control-space-7: 28px;
  --fmstr-cmp-csg-quality-control-space-8: 32px;
  --fmstr-cmp-csg-quality-control-space-12: 48px;
  --fmstr-cmp-csg-quality-control-r-md: 8px;
  --fmstr-cmp-csg-quality-control-r-2xl: 16px;
  --fmstr-cmp-csg-quality-control-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-csg-quality-control-space-12) var(--fmstr-cmp-csg-quality-control-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-csg-quality-control *,
.fmstr-cmp-csg-quality-control *::before,
.fmstr-cmp-csg-quality-control *::after {
  box-sizing: border-box;
}

.fmstr-cmp-csg-quality-control__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-csg-quality-control-bg-section);
  background-image: var(--fmstr-cmp-csg-quality-control-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-csg-quality-control-space-12);
  overflow: hidden;
}

.fmstr-cmp-csg-quality-control__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-csg-quality-control-space-12);
  align-items: center;
}

.fmstr-cmp-csg-quality-control__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-csg-quality-control-space-2) var(--fmstr-cmp-csg-quality-control-space-4);
  background: var(--fmstr-cmp-csg-quality-control-bg-pill);
  color: var(--fmstr-cmp-csg-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-csg-quality-control-r-full);
  font-size: var(--fmstr-cmp-csg-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-csg-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-csg-quality-control-space-5);
}

.fmstr-cmp-csg-quality-control__heading {
  font-size: var(--fmstr-cmp-csg-quality-control-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-csg-quality-control-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-csg-quality-control-space-6);
}

.fmstr-cmp-csg-quality-control__body p {
  font-size: var(--fmstr-cmp-csg-quality-control-fs-md);
  line-height: var(--fmstr-cmp-csg-quality-control-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-csg-quality-control-space-4);
}
.fmstr-cmp-csg-quality-control__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-csg-quality-control__card {
  background-color: var(--fmstr-cmp-csg-quality-control-bg-card);
  background-image: var(--fmstr-cmp-csg-quality-control-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-csg-quality-control-r-2xl);
  padding: var(--fmstr-cmp-csg-quality-control-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-csg-quality-control__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-csg-quality-control-space-2) var(--fmstr-cmp-csg-quality-control-space-4);
  background: var(--fmstr-cmp-csg-quality-control-bg-pill);
  color: var(--fmstr-cmp-csg-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-csg-quality-control-r-full);
  font-size: var(--fmstr-cmp-csg-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-csg-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-csg-quality-control-space-5);
}

.fmstr-cmp-csg-quality-control__card-title {
  font-size: var(--fmstr-cmp-csg-quality-control-fs-lg);
  line-height: var(--fmstr-cmp-csg-quality-control-lh-lg);
  font-weight: var(--fmstr-cmp-csg-quality-control-fw-bold);
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-csg-quality-control-space-5);
}

.fmstr-cmp-csg-quality-control__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-csg-quality-control-space-2);
}

.fmstr-cmp-csg-quality-control__item {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-csg-quality-control-space-3);
  padding: var(--fmstr-cmp-csg-quality-control-space-3) var(--fmstr-cmp-csg-quality-control-space-4);
  background: var(--fmstr-cmp-csg-quality-control-bg-row);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--fmstr-cmp-csg-quality-control-r-md);
}

.fmstr-cmp-csg-quality-control__check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--fmstr-cmp-csg-quality-control-fg-row-tag);
  margin-top: 2px;
}

.fmstr-cmp-csg-quality-control__item-text {
  font-size: var(--fmstr-cmp-csg-quality-control-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-csg-quality-control-fg-row);
}
.fmstr-cmp-csg-quality-control__item-text strong {
  color: #ffffff;
  font-weight: var(--fmstr-cmp-csg-quality-control-fw-bold);
}

@media (max-width: 760px) {
  .fmstr-cmp-csg-quality-control {
    padding: var(--fmstr-cmp-csg-quality-control-space-8) var(--fmstr-cmp-csg-quality-control-space-4);
  }
  .fmstr-cmp-csg-quality-control__container {
    padding: var(--fmstr-cmp-csg-quality-control-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-csg-quality-control__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-csg-quality-control-space-8);
  }
  .fmstr-cmp-csg-quality-control__heading {
    font-size: var(--fmstr-cmp-csg-quality-control-fs-2xl);
    line-height: var(--fmstr-cmp-csg-quality-control-lh-2xl);
  }
  .fmstr-cmp-csg-quality-control__card {
    padding: var(--fmstr-cmp-csg-quality-control-space-6);
  }
}

.fmstr-cmp-csg-demo {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  text-align: left !important;
  overflow-x: hidden;
}
.fmstr-cmp-csg-demo *,
.fmstr-cmp-csg-demo *::before,
.fmstr-cmp-csg-demo *::after {
  box-sizing: border-box;
}
.fmstr-cmp-csg-demo__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-csg-demo__header {
  margin: 0 auto 36px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-csg-demo__eyebrow {
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
.fmstr-cmp-csg-demo__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-csg-demo__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-csg-demo__frame {
  max-width: 960px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  font-size: 0;
}
.fmstr-cmp-csg-demo__media {
  width: 100%;
  height: auto;
  display: block;
}
@media (max-width: 760px) {
  .fmstr-cmp-csg-demo {
    padding: 48px 16px;
  }
}

.fmstr-cmp-csg-who-uses {
  --fmstr-cmp-csg-who-uses-bg-card: #ffffff;
  --fmstr-cmp-csg-who-uses-bg-violet-25: #f7f3ff;
  --fmstr-cmp-csg-who-uses-fg-1: #101828;
  --fmstr-cmp-csg-who-uses-fg-2: #475467;
  --fmstr-cmp-csg-who-uses-fg-3: #697586;
  --fmstr-cmp-csg-who-uses-violet-600: #6941c6;
  --fmstr-cmp-csg-who-uses-violet-700: #53389e;
  --fmstr-cmp-csg-who-uses-border-light: #eaecf0;
  --fmstr-cmp-csg-who-uses-border-violet: #9777e0;
  --fmstr-cmp-csg-who-uses-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-csg-who-uses-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-csg-who-uses-fs-xs: 12px;
  --fmstr-cmp-csg-who-uses-fs-sm: 14px;
  --fmstr-cmp-csg-who-uses-fs-md: 16px;
  --fmstr-cmp-csg-who-uses-fs-lg: 18px;
  --fmstr-cmp-csg-who-uses-fs-2xl: 24px;
  --fmstr-cmp-csg-who-uses-fs-3xl: 36px;
  --fmstr-cmp-csg-who-uses-fw-semibold: 600;
  --fmstr-cmp-csg-who-uses-fw-bold: 700;
  --fmstr-cmp-csg-who-uses-lh-md: 24px;
  --fmstr-cmp-csg-who-uses-lh-lg: 28px;
  --fmstr-cmp-csg-who-uses-lh-2xl: 32px;
  --fmstr-cmp-csg-who-uses-space-1: 4px;
  --fmstr-cmp-csg-who-uses-space-2: 8px;
  --fmstr-cmp-csg-who-uses-space-3: 12px;
  --fmstr-cmp-csg-who-uses-space-4: 16px;
  --fmstr-cmp-csg-who-uses-space-5: 20px;
  --fmstr-cmp-csg-who-uses-space-6: 24px;
  --fmstr-cmp-csg-who-uses-space-7: 28px;
  --fmstr-cmp-csg-who-uses-space-8: 32px;
  --fmstr-cmp-csg-who-uses-space-10: 40px;
  --fmstr-cmp-csg-who-uses-space-12: 48px;
  --fmstr-cmp-csg-who-uses-space-16: 64px;
  --fmstr-cmp-csg-who-uses-r-md: 8px;
  --fmstr-cmp-csg-who-uses-r-lg: 12px;
  --fmstr-cmp-csg-who-uses-r-2xl: 16px;

  padding: var(--fmstr-cmp-csg-who-uses-space-16) var(--fmstr-cmp-csg-who-uses-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-csg-who-uses-fg-1);
}

.fmstr-cmp-csg-who-uses *,
.fmstr-cmp-csg-who-uses *::before,
.fmstr-cmp-csg-who-uses *::after {
  box-sizing: border-box;
}

.fmstr-cmp-csg-who-uses__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-csg-who-uses__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-csg-who-uses-space-10);
  text-align: center;
}

.fmstr-cmp-csg-who-uses__heading {
  font-size: var(--fmstr-cmp-csg-who-uses-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-csg-who-uses-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-csg-who-uses-fg-1);
  margin: 0 0 var(--fmstr-cmp-csg-who-uses-space-3);
}

.fmstr-cmp-csg-who-uses__sub {
  font-size: var(--fmstr-cmp-csg-who-uses-fs-md);
  line-height: var(--fmstr-cmp-csg-who-uses-lh-md);
  color: var(--fmstr-cmp-csg-who-uses-fg-3);
  margin: 0;
}

.fmstr-cmp-csg-who-uses__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-csg-who-uses-space-5);
}

.fmstr-cmp-csg-who-uses__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-csg-who-uses-space-4);
  padding: var(--fmstr-cmp-csg-who-uses-space-7);
  background: var(--fmstr-cmp-csg-who-uses-bg-card);
  border: 1px solid var(--fmstr-cmp-csg-who-uses-border-light);
  border-radius: var(--fmstr-cmp-csg-who-uses-r-2xl);
  box-shadow: var(--fmstr-cmp-csg-who-uses-shadow-xs);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-csg-who-uses__card:hover {
  border-color: var(--fmstr-cmp-csg-who-uses-border-violet);
  box-shadow: var(--fmstr-cmp-csg-who-uses-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-csg-who-uses__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--fmstr-cmp-csg-who-uses-r-md);
  background: var(--fmstr-cmp-csg-who-uses-bg-violet-25);
  color: var(--fmstr-cmp-csg-who-uses-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-csg-who-uses__title {
  margin: 0;
  font-size: var(--fmstr-cmp-csg-who-uses-fs-lg);
  line-height: var(--fmstr-cmp-csg-who-uses-lh-lg);
  font-weight: var(--fmstr-cmp-csg-who-uses-fw-bold);
  color: var(--fmstr-cmp-csg-who-uses-fg-1);
}

.fmstr-cmp-csg-who-uses__body {
  margin: 0;
  font-size: var(--fmstr-cmp-csg-who-uses-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-csg-who-uses-fg-2);
}

.fmstr-cmp-csg-who-uses__divider {
  margin-top: auto;
  border: none;
  border-top: 1px solid var(--fmstr-cmp-csg-who-uses-border-light);
}

.fmstr-cmp-csg-who-uses__cta {
  color: var(--fmstr-cmp-csg-who-uses-violet-600);
  font-size: var(--fmstr-cmp-csg-who-uses-fs-sm);
  font-weight: var(--fmstr-cmp-csg-who-uses-fw-bold);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-csg-who-uses-space-1);
  transition: color 150ms ease;
}
.fmstr-cmp-csg-who-uses__cta:hover {
  color: var(--fmstr-cmp-csg-who-uses-violet-700);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .fmstr-cmp-csg-who-uses__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-csg-who-uses {
    padding: var(--fmstr-cmp-csg-who-uses-space-12) var(--fmstr-cmp-csg-who-uses-space-4);
  }
  .fmstr-cmp-csg-who-uses__heading {
    font-size: var(--fmstr-cmp-csg-who-uses-fs-2xl);
    line-height: var(--fmstr-cmp-csg-who-uses-lh-2xl);
  }
  .fmstr-cmp-csg-who-uses__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-csg-who-uses__card {
    padding: var(--fmstr-cmp-csg-who-uses-space-6);
  }
}

.fmstr-cmp-csg-api-mcp {
  --fmstr-cmp-csg-api-mcp-bg-card: #ffffff;
  --fmstr-cmp-csg-api-mcp-bg-tint: #f7f3ff;
  --fmstr-cmp-csg-api-mcp-bg-pill: #f4ebff;
  --fmstr-cmp-csg-api-mcp-bg-chip: #f2f4f7;
  --fmstr-cmp-csg-api-mcp-fg-1: #101828;
  --fmstr-cmp-csg-api-mcp-fg-2: #475467;
  --fmstr-cmp-csg-api-mcp-fg-strong: #344054;
  --fmstr-cmp-csg-api-mcp-violet-500: #7f56d9;
  --fmstr-cmp-csg-api-mcp-violet-600: #6941c6;
  --fmstr-cmp-csg-api-mcp-violet-300: #9777e0;
  --fmstr-cmp-csg-api-mcp-border: #eaecf0;
  --fmstr-cmp-csg-api-mcp-fs-xs: 12px;
  --fmstr-cmp-csg-api-mcp-fs-sm: 14px;
  --fmstr-cmp-csg-api-mcp-fs-md: 16px;
  --fmstr-cmp-csg-api-mcp-fs-lg: 18px;
  --fmstr-cmp-csg-api-mcp-fs-xl: 20px;
  --fmstr-cmp-csg-api-mcp-fs-2xl: 24px;
  --fmstr-cmp-csg-api-mcp-fs-3xl: 36px;
  --fmstr-cmp-csg-api-mcp-lh-md: 24px;
  --fmstr-cmp-csg-api-mcp-lh-lg: 28px;
  --fmstr-cmp-csg-api-mcp-lh-xl: 30px;
  --fmstr-cmp-csg-api-mcp-fw-semibold: 600;
  --fmstr-cmp-csg-api-mcp-fw-bold: 700;
  --fmstr-cmp-csg-api-mcp-space-2: 8px;
  --fmstr-cmp-csg-api-mcp-space-3: 12px;
  --fmstr-cmp-csg-api-mcp-space-4: 16px;
  --fmstr-cmp-csg-api-mcp-space-5: 20px;
  --fmstr-cmp-csg-api-mcp-space-6: 24px;
  --fmstr-cmp-csg-api-mcp-space-7: 28px;
  --fmstr-cmp-csg-api-mcp-space-8: 32px;
  --fmstr-cmp-csg-api-mcp-space-10: 40px;
  --fmstr-cmp-csg-api-mcp-space-12: 48px;
  --fmstr-cmp-csg-api-mcp-space-16: 64px;
  --fmstr-cmp-csg-api-mcp-r-md: 6px;
  --fmstr-cmp-csg-api-mcp-r-lg: 12px;
  --fmstr-cmp-csg-api-mcp-r-2xl: 16px;
  --fmstr-cmp-csg-api-mcp-r-full: 9999px;
  --fmstr-cmp-csg-api-mcp-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

  padding: var(--fmstr-cmp-csg-api-mcp-space-16) var(--fmstr-cmp-csg-api-mcp-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-csg-api-mcp *,
.fmstr-cmp-csg-api-mcp *::before,
.fmstr-cmp-csg-api-mcp *::after {
  box-sizing: border-box;
}

.fmstr-cmp-csg-api-mcp__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-csg-api-mcp__header {
  margin: 0 auto var(--fmstr-cmp-csg-api-mcp-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-csg-api-mcp__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-csg-api-mcp-space-2) var(--fmstr-cmp-csg-api-mcp-space-4);
  background: var(--fmstr-cmp-csg-api-mcp-bg-pill);
  color: var(--fmstr-cmp-csg-api-mcp-violet-600);
  border-radius: var(--fmstr-cmp-csg-api-mcp-r-full);
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-csg-api-mcp-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-csg-api-mcp-space-4);
}

.fmstr-cmp-csg-api-mcp__title {
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-csg-api-mcp-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-csg-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-csg-api-mcp-space-3);
}

.fmstr-cmp-csg-api-mcp__intro {
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-lg);
  line-height: var(--fmstr-cmp-csg-api-mcp-lh-lg);
  color: var(--fmstr-cmp-csg-api-mcp-fg-2);
  margin: 0;
}

.fmstr-cmp-csg-api-mcp__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-csg-api-mcp-space-5);
  align-items: stretch;
}

.fmstr-cmp-csg-api-mcp__card {
  background: var(--fmstr-cmp-csg-api-mcp-bg-card);
  border: 1px solid var(--fmstr-cmp-csg-api-mcp-border);
  border-radius: var(--fmstr-cmp-csg-api-mcp-r-2xl);
  padding: var(--fmstr-cmp-csg-api-mcp-space-8);
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
}
.fmstr-cmp-csg-api-mcp__card:hover {
  border-color: var(--fmstr-cmp-csg-api-mcp-violet-300);
  box-shadow: var(--fmstr-cmp-csg-api-mcp-shadow-md);
}

.fmstr-cmp-csg-api-mcp__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-csg-api-mcp-r-lg);
  background: var(--fmstr-cmp-csg-api-mcp-bg-tint);
  color: var(--fmstr-cmp-csg-api-mcp-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fmstr-cmp-csg-api-mcp-space-5);
  flex-shrink: 0;
}

.fmstr-cmp-csg-api-mcp__badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-csg-api-mcp-violet-500);
  color: #ffffff;
  border-radius: var(--fmstr-cmp-csg-api-mcp-r-md);
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-csg-api-mcp-fw-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-csg-api-mcp-space-3);
  align-self: flex-start;
}
.fmstr-cmp-csg-api-mcp__badge--alt {
  background: var(--fmstr-cmp-csg-api-mcp-bg-tint);
  color: var(--fmstr-cmp-csg-api-mcp-violet-600);
}

.fmstr-cmp-csg-api-mcp__card-title {
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-xl);
  line-height: var(--fmstr-cmp-csg-api-mcp-lh-xl);
  font-weight: var(--fmstr-cmp-csg-api-mcp-fw-semibold);
  letter-spacing: -0.01em;
  color: var(--fmstr-cmp-csg-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-csg-api-mcp-space-4);
}

.fmstr-cmp-csg-api-mcp__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-csg-api-mcp-space-2);
  margin-bottom: var(--fmstr-cmp-csg-api-mcp-space-4);
}

.fmstr-cmp-csg-api-mcp__chip {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-csg-api-mcp-bg-chip);
  color: var(--fmstr-cmp-csg-api-mcp-fg-strong);
  border-radius: var(--fmstr-cmp-csg-api-mcp-r-md);
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-sm);
  font-weight: var(--fmstr-cmp-csg-api-mcp-fw-semibold);
  line-height: 20px;
}

.fmstr-cmp-csg-api-mcp__body {
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-md);
  line-height: var(--fmstr-cmp-csg-api-mcp-lh-md);
  color: var(--fmstr-cmp-csg-api-mcp-fg-2);
  margin: 0 0 var(--fmstr-cmp-csg-api-mcp-space-5);
  flex: 1 1 auto;
}

.fmstr-cmp-csg-api-mcp__cta {
  color: var(--fmstr-cmp-csg-api-mcp-violet-600);
  font-weight: var(--fmstr-cmp-csg-api-mcp-fw-semibold);
  font-size: var(--fmstr-cmp-csg-api-mcp-fs-sm);
  text-decoration: none;
  align-self: flex-start;
}
.fmstr-cmp-csg-api-mcp__cta:hover {
  text-decoration: underline;
  color: var(--fmstr-cmp-csg-api-mcp-violet-600) !important;
}

@media (max-width: 760px) {
  .fmstr-cmp-csg-api-mcp {
    padding: var(--fmstr-cmp-csg-api-mcp-space-12) var(--fmstr-cmp-csg-api-mcp-space-4);
  }
  .fmstr-cmp-csg-api-mcp__title {
    font-size: var(--fmstr-cmp-csg-api-mcp-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-csg-api-mcp__intro {
    font-size: var(--fmstr-cmp-csg-api-mcp-fs-md);
    line-height: var(--fmstr-cmp-csg-api-mcp-lh-md);
  }
  .fmstr-cmp-csg-api-mcp__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-csg-api-mcp__card {
    padding: var(--fmstr-cmp-csg-api-mcp-space-6);
  }
}

.fmstr-cmp-csg-privacy-data-ownership {
  --fmstr-cmp-csg-privacy-data-ownership-bg-section: #0f0921;
  --fmstr-cmp-csg-privacy-data-ownership-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-csg-privacy-data-ownership-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-csg-privacy-data-ownership-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-csg-privacy-data-ownership-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-csg-privacy-data-ownership-fg-eyebrow: #bda6ff;
  --fmstr-cmp-csg-privacy-data-ownership-fg-link: #bda6ff;
  --fmstr-cmp-csg-privacy-data-ownership-fg-link-hover: #ffffff;
  --fmstr-cmp-csg-privacy-data-ownership-fs-xs: 12px;
  --fmstr-cmp-csg-privacy-data-ownership-fs-sm: 14px;
  --fmstr-cmp-csg-privacy-data-ownership-fs-md: 16px;
  --fmstr-cmp-csg-privacy-data-ownership-fs-lg: 18px;
  --fmstr-cmp-csg-privacy-data-ownership-fs-2xl: 24px;
  --fmstr-cmp-csg-privacy-data-ownership-fs-3xl: 32px;
  --fmstr-cmp-csg-privacy-data-ownership-fw-semibold: 600;
  --fmstr-cmp-csg-privacy-data-ownership-fw-bold: 700;
  --fmstr-cmp-csg-privacy-data-ownership-lh-md: 24px;
  --fmstr-cmp-csg-privacy-data-ownership-lh-lg: 28px;
  --fmstr-cmp-csg-privacy-data-ownership-lh-2xl: 32px;
  --fmstr-cmp-csg-privacy-data-ownership-space-1: 4px;
  --fmstr-cmp-csg-privacy-data-ownership-space-2: 8px;
  --fmstr-cmp-csg-privacy-data-ownership-space-3: 12px;
  --fmstr-cmp-csg-privacy-data-ownership-space-4: 16px;
  --fmstr-cmp-csg-privacy-data-ownership-space-5: 20px;
  --fmstr-cmp-csg-privacy-data-ownership-space-6: 24px;
  --fmstr-cmp-csg-privacy-data-ownership-space-7: 28px;
  --fmstr-cmp-csg-privacy-data-ownership-space-8: 32px;
  --fmstr-cmp-csg-privacy-data-ownership-space-12: 48px;
  --fmstr-cmp-csg-privacy-data-ownership-space-16: 64px;
  --fmstr-cmp-csg-privacy-data-ownership-r-2xl: 16px;
  --fmstr-cmp-csg-privacy-data-ownership-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-12) var(--fmstr-cmp-csg-privacy-data-ownership-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-csg-privacy-data-ownership *,
.fmstr-cmp-csg-privacy-data-ownership *::before,
.fmstr-cmp-csg-privacy-data-ownership *::after {
  box-sizing: border-box;
}

.fmstr-cmp-csg-privacy-data-ownership__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-csg-privacy-data-ownership-bg-section);
  background-image: var(--fmstr-cmp-csg-privacy-data-ownership-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-12);
  overflow: hidden;
}

.fmstr-cmp-csg-privacy-data-ownership__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-csg-privacy-data-ownership-space-12);
  align-items: center;
}

.fmstr-cmp-csg-privacy-data-ownership__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-2) var(--fmstr-cmp-csg-privacy-data-ownership-space-4);
  background: var(--fmstr-cmp-csg-privacy-data-ownership-bg-pill);
  color: var(--fmstr-cmp-csg-privacy-data-ownership-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-csg-privacy-data-ownership-r-full);
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-xs);
  font-weight: var(--fmstr-cmp-csg-privacy-data-ownership-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-csg-privacy-data-ownership-space-5);
}

.fmstr-cmp-csg-privacy-data-ownership__heading {
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-csg-privacy-data-ownership-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-csg-privacy-data-ownership-space-6);
}

.fmstr-cmp-csg-privacy-data-ownership__body p {
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-md);
  line-height: var(--fmstr-cmp-csg-privacy-data-ownership-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-csg-privacy-data-ownership-space-4);
}
.fmstr-cmp-csg-privacy-data-ownership__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-csg-privacy-data-ownership__card {
  background-color: var(--fmstr-cmp-csg-privacy-data-ownership-bg-card);
  background-image: var(--fmstr-cmp-csg-privacy-data-ownership-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-csg-privacy-data-ownership-r-2xl);
  padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-csg-privacy-data-ownership__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-2) var(--fmstr-cmp-csg-privacy-data-ownership-space-4);
  background: var(--fmstr-cmp-csg-privacy-data-ownership-bg-pill);
  color: var(--fmstr-cmp-csg-privacy-data-ownership-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-csg-privacy-data-ownership-r-full);
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-xs);
  font-weight: var(--fmstr-cmp-csg-privacy-data-ownership-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-csg-privacy-data-ownership-space-5);
}

.fmstr-cmp-csg-privacy-data-ownership__quote {
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-lg);
  line-height: var(--fmstr-cmp-csg-privacy-data-ownership-lh-lg);
  font-weight: var(--fmstr-cmp-csg-privacy-data-ownership-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-csg-privacy-data-ownership-space-5);
}

.fmstr-cmp-csg-privacy-data-ownership__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-csg-privacy-data-ownership-space-5);
}

.fmstr-cmp-csg-privacy-data-ownership__cite {
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-sm);
  line-height: var(--fmstr-cmp-csg-privacy-data-ownership-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-csg-privacy-data-ownership-space-3);
}

.fmstr-cmp-csg-privacy-data-ownership__links {
  display: flex;
  gap: var(--fmstr-cmp-csg-privacy-data-ownership-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-csg-privacy-data-ownership__links a {
  color: var(--fmstr-cmp-csg-privacy-data-ownership-fg-link);
  font-weight: var(--fmstr-cmp-csg-privacy-data-ownership-fw-semibold);
  font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-sm);
  text-decoration: none;
}

.fmstr-cmp-csg-privacy-data-ownership__links a:hover {
  color: var(--fmstr-cmp-csg-privacy-data-ownership-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-csg-privacy-data-ownership {
    padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-8) var(--fmstr-cmp-csg-privacy-data-ownership-space-4);
  }
  .fmstr-cmp-csg-privacy-data-ownership__container {
    padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-csg-privacy-data-ownership__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-csg-privacy-data-ownership-space-8);
  }
  .fmstr-cmp-csg-privacy-data-ownership__heading {
    font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-2xl);
    line-height: var(--fmstr-cmp-csg-privacy-data-ownership-lh-2xl);
  }
  .fmstr-cmp-csg-privacy-data-ownership__quote {
    font-size: var(--fmstr-cmp-csg-privacy-data-ownership-fs-md);
    line-height: var(--fmstr-cmp-csg-privacy-data-ownership-lh-md);
  }
  .fmstr-cmp-csg-privacy-data-ownership__card {
    padding: var(--fmstr-cmp-csg-privacy-data-ownership-space-6);
  }
}

.fmstr-cmp-csg-more-tools {
  --fmstr-cmp-csg-more-tools-bg-card: #ffffff;
  --fmstr-cmp-csg-more-tools-bg-violet-25: #f7f3ff;
  --fmstr-cmp-csg-more-tools-fg-1: #101828;
  --fmstr-cmp-csg-more-tools-fg-2: #475467;
  --fmstr-cmp-csg-more-tools-violet-600: #6941c6;
  --fmstr-cmp-csg-more-tools-violet-700: #53389e;
  --fmstr-cmp-csg-more-tools-border-light: #eaecf0;
  --fmstr-cmp-csg-more-tools-border-violet: #9777e0;
  --fmstr-cmp-csg-more-tools-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-csg-more-tools-fs-sm: 14px;
  --fmstr-cmp-csg-more-tools-fs-md: 16px;
  --fmstr-cmp-csg-more-tools-fs-2xl: 24px;
  --fmstr-cmp-csg-more-tools-fs-3xl: 36px;
  --fmstr-cmp-csg-more-tools-fw-regular: 400;
  --fmstr-cmp-csg-more-tools-fw-semibold: 600;
  --fmstr-cmp-csg-more-tools-lh-sm: 20px;
  --fmstr-cmp-csg-more-tools-lh-md: 24px;
  --fmstr-cmp-csg-more-tools-lh-2xl: 32px;
  --fmstr-cmp-csg-more-tools-space-1: 4px;
  --fmstr-cmp-csg-more-tools-space-3: 12px;
  --fmstr-cmp-csg-more-tools-space-4: 16px;
  --fmstr-cmp-csg-more-tools-space-6: 24px;
  --fmstr-cmp-csg-more-tools-space-8: 32px;
  --fmstr-cmp-csg-more-tools-space-12: 48px;
  --fmstr-cmp-csg-more-tools-space-16: 64px;
  --fmstr-cmp-csg-more-tools-r-lg: 8px;
  --fmstr-cmp-csg-more-tools-r-2xl: 16px;
  padding: var(--fmstr-cmp-csg-more-tools-space-16) var(--fmstr-cmp-csg-more-tools-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-csg-more-tools *,
.fmstr-cmp-csg-more-tools *::before,
.fmstr-cmp-csg-more-tools *::after {
  box-sizing: border-box;
}

.fmstr-cmp-csg-more-tools__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-csg-more-tools__heading {
  font-size: var(--fmstr-cmp-csg-more-tools-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-csg-more-tools-fw-semibold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-csg-more-tools-fg-1);
  text-align: center;
  margin: 0 0 var(--fmstr-cmp-csg-more-tools-space-12);
}

.fmstr-cmp-csg-more-tools__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--fmstr-cmp-csg-more-tools-space-4);
}

.fmstr-cmp-csg-more-tools__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-csg-more-tools-space-3);
  padding: var(--fmstr-cmp-csg-more-tools-space-6);
  background: var(--fmstr-cmp-csg-more-tools-bg-card);
  border: 1px solid var(--fmstr-cmp-csg-more-tools-border-light);
  border-radius: var(--fmstr-cmp-csg-more-tools-r-2xl);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.fmstr-cmp-csg-more-tools__card:hover {
  border-color: var(--fmstr-cmp-csg-more-tools-border-violet);
  box-shadow: var(--fmstr-cmp-csg-more-tools-shadow-md);
  transform: translateY(-2px);
  text-decoration: none;
}

.fmstr-cmp-csg-more-tools__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fmstr-cmp-csg-more-tools-r-lg);
  background: var(--fmstr-cmp-csg-more-tools-bg-violet-25);
  color: var(--fmstr-cmp-csg-more-tools-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-csg-more-tools__title {
  font-size: var(--fmstr-cmp-csg-more-tools-fs-md);
  line-height: var(--fmstr-cmp-csg-more-tools-lh-md);
  font-weight: var(--fmstr-cmp-csg-more-tools-fw-semibold);
  color: var(--fmstr-cmp-csg-more-tools-fg-1);
  margin: var(--fmstr-cmp-csg-more-tools-space-1) 0 0;
}

.fmstr-cmp-csg-more-tools__desc {
  font-size: var(--fmstr-cmp-csg-more-tools-fs-sm);
  line-height: var(--fmstr-cmp-csg-more-tools-lh-sm);
  font-weight: var(--fmstr-cmp-csg-more-tools-fw-regular);
  color: var(--fmstr-cmp-csg-more-tools-fg-2);
  margin: 0;
}

@media (max-width: 760px) {
  .fmstr-cmp-csg-more-tools {
    padding: var(--fmstr-cmp-csg-more-tools-space-12) var(--fmstr-cmp-csg-more-tools-space-4);
  }
  .fmstr-cmp-csg-more-tools__heading {
    font-size: var(--fmstr-cmp-csg-more-tools-fs-2xl);
    line-height: var(--fmstr-cmp-csg-more-tools-lh-2xl);
    margin-bottom: var(--fmstr-cmp-csg-more-tools-space-8);
  }
  .fmstr-cmp-csg-more-tools__grid {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-csg-more-tools-space-3);
  }
}
</style>
