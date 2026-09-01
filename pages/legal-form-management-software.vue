<template>
  <div>
    <RawHtml :markup="c0_markup" :useContainer="false" class="page-component-item" />

    <TrustSeals
      label="Trusted by leading organisations"
      :showTrustBadges="false"
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-lfm-3ways" aria-labelledby="fmstr-cmp-lfm-3ways-h2">
            <div class="fmstr-cmp-lfm-3ways__container">
              <div class="fmstr-cmp-lfm-3ways__header">
                <div class="fmstr-cmp-lfm-3ways__eyebrow">How it works</div>
                <h2 class="fmstr-cmp-lfm-3ways__h2" id="fmstr-cmp-lfm-3ways-h2">Three ways to build any legal form</h2>
                <p class="fmstr-cmp-lfm-3ways__sub">
                  Client intake, retainer, engagement letter, waiver. Every route ends in a shareable form with a native
                  e-signature and a clean PDF export ready for your DMS.
                </p>
              </div>

              <div class="fmstr-cmp-lfm-3ways__grid">
                <div class="fmstr-cmp-lfm-3ways__card">
                  <div class="fmstr-cmp-lfm-3ways__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-lfm-3ways__title">Start from a template</h3>
                  <p class="fmstr-cmp-lfm-3ways__body">
                    Pick from client-intake, retainer, engagement letter, waiver, and consent templates. Edit copy,
                    adjust fields for your practice area, publish.
                  </p>
                  <p class="fmstr-cmp-lfm-3ways__example">
                    Best when the language is standard and you need something firm-branded fast.
                  </p>
                </div>

                <div class="fmstr-cmp-lfm-3ways__card">
                  <div class="fmstr-cmp-lfm-3ways__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-lfm-3ways__title">Generate with AI</h3>
                  <p class="fmstr-cmp-lfm-3ways__body">
                    Prompt: "Client intake form for a personal injury matter with accident details and medical provider
                    history." Or paste your own paragraph. The AI picks the field types, wires the signature block, and
                    ships in 30 seconds.
                  </p>
                </div>

                <div class="fmstr-cmp-lfm-3ways__card">
                  <div class="fmstr-cmp-lfm-3ways__icon" aria-hidden="true">
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
                  <h3 class="fmstr-cmp-lfm-3ways__title">Digitize your paper PDF</h3>
                  <p class="fmstr-cmp-lfm-3ways__body">
                    Upload the paper form your firm already uses. The AI reads the PDF, extracts every field, and
                    rebuilds it as a digital form with a native e-signature slot at the bottom. Two clicks to modernize
                    a paper intake process.
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
        <section class="fmstr-cmp-lfm-quality-control" aria-labelledby="fmstr-cmp-lfm-quality-control-heading">
          <div class="fmstr-cmp-lfm-quality-control__container">
            <div class="fmstr-cmp-lfm-quality-control__inner">
              <div class="fmstr-cmp-lfm-quality-control__text">
                <span class="fmstr-cmp-lfm-quality-control__eyebrow">Signature validity</span>
                <h2 id="fmstr-cmp-lfm-quality-control-heading" class="fmstr-cmp-lfm-quality-control__heading">
                  Every signed legal form stands up later
                </h2>
                <div class="fmstr-cmp-lfm-quality-control__body">
                  <p>
                    An e-signature that gets challenged is only as good as what's captured around it. A signature image
                    alone is not enough. Courts and opposing counsel look for the signer's identity, the exact time it
                    was signed, and evidence the signer had reasonable notice of what they signed.
                  </p>
                  <p>
                    Formester's signature field captures all of that on every submission, on every plan including free.
                    Drawn or typed in the signer's own hand. Stored encrypted at rest and available as a PDF export on
                    Business. GDPR, UK GDPR, and CCPA compliant. Meets ESIGN Act and UETA requirements for enforceable
                    e-signatures in the US, UK, EU, Canada, and Australia.
                  </p>
                </div>
              </div>

              <aside class="fmstr-cmp-lfm-quality-control__card">
                <span class="fmstr-cmp-lfm-quality-control__pill">What gets captured on every submission</span>
                <h3 class="fmstr-cmp-lfm-quality-control__card-title">Five layers of proof, on by default</h3>
                <ul class="fmstr-cmp-lfm-quality-control__list">
                  <li class="fmstr-cmp-lfm-quality-control__item">
                    <svg
                      class="fmstr-cmp-lfm-quality-control__check"
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
                    <span class="fmstr-cmp-lfm-quality-control__item-text"
                      ><strong>Native e-signature</strong> drawn or typed, stored as a vector alongside the raw
                      signature image.</span
                    >
                  </li>
                  <li class="fmstr-cmp-lfm-quality-control__item">
                    <svg
                      class="fmstr-cmp-lfm-quality-control__check"
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
                    <span class="fmstr-cmp-lfm-quality-control__item-text"
                      ><strong>Signer identity</strong> captured alongside the signature: full name, email, and any
                      other fields you added.</span
                    >
                  </li>
                  <li class="fmstr-cmp-lfm-quality-control__item">
                    <svg
                      class="fmstr-cmp-lfm-quality-control__check"
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
                    <span class="fmstr-cmp-lfm-quality-control__item-text"
                      ><strong>Exact timestamp</strong> down to the second, in UTC, on every signature.</span
                    >
                  </li>
                  <li class="fmstr-cmp-lfm-quality-control__item">
                    <svg
                      class="fmstr-cmp-lfm-quality-control__check"
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
                    <span class="fmstr-cmp-lfm-quality-control__item-text"
                      ><strong>PDF export</strong> of every signed consent, on Business and above, so records can be
                      shared with legal, HR, or a client.</span
                    >
                  </li>
                  <li class="fmstr-cmp-lfm-quality-control__item">
                    <svg
                      class="fmstr-cmp-lfm-quality-control__check"
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
                    <span class="fmstr-cmp-lfm-quality-control__item-text"
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
      description="Three-step setup that gets a legal intake form live and connected to your firm in under 10 minutes."
      :title="c4_title"
      :itemList="c4_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-lfm-steps-video" aria-labelledby="fmstr-cmp-lfm-steps-video-h2">
          <div class="fmstr-cmp-lfm-steps-video__container">
            <div class="fmstr-cmp-lfm-steps-video__header">
              <div class="fmstr-cmp-lfm-steps-video__eyebrow">How firms use Formester</div>
              <h2 class="fmstr-cmp-lfm-steps-video__h2" id="fmstr-cmp-lfm-steps-video-h2">
                Watch each step happen inside Formester
              </h2>
              <p class="fmstr-cmp-lfm-steps-video__sub">
                Real product screens showing how legal teams actually organize, assign, and export forms.
              </p>
            </div>
            <div class="fmstr-cmp-lfm-steps-video__grid">
              <div class="fmstr-cmp-lfm-steps-video__card">
                <div class="fmstr-cmp-lfm-steps-video__frame">
                  <video class="fmstr-cmp-lfm-steps-video__video" autoplay muted loop playsinline preload="metadata">
                    <source
                      src="https://formester-strapi.s3.ap-south-1.amazonaws.com/step1_organize_a839d89eea.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h3 class="fmstr-cmp-lfm-steps-video__title">Step 01 — Organize forms by matter or practice area</h3>
                <p class="fmstr-cmp-lfm-steps-video__body">
                  Group intake, retainer, and engagement letter forms into Workspaces per practice area (family law, PI,
                  corporate, immigration). Every team member sees only the forms they need.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-steps-video__card">
                <div class="fmstr-cmp-lfm-steps-video__frame">
                  <video class="fmstr-cmp-lfm-steps-video__video" autoplay muted loop playsinline preload="metadata">
                    <source
                      src="https://formester-strapi.s3.ap-south-1.amazonaws.com/step2_assign_7f368fbcb8.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h3 class="fmstr-cmp-lfm-steps-video__title">Step 02 — Assign to attorneys and route submissions</h3>
                <p class="fmstr-cmp-lfm-steps-video__body">
                  Set access roles for attorneys, paralegals, and staff. Route new intake submissions to the right
                  attorney or case manager via email, Slack, or webhook.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-steps-video__card">
                <div class="fmstr-cmp-lfm-steps-video__frame">
                  <video class="fmstr-cmp-lfm-steps-video__video" autoplay muted loop playsinline preload="metadata">
                    <source
                      src="https://formester-strapi.s3.ap-south-1.amazonaws.com/step3_export_dms_af660f8d5c.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h3 class="fmstr-cmp-lfm-steps-video__title">Step 03 — Export signed PDFs to your DMS</h3>
                <p class="fmstr-cmp-lfm-steps-video__body">
                  Every submitted form renders as a signed PDF. Auto-upload to Clio, MyCase, Filevine, or your document
                  management system via REST API or Zapier.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-lfm-videos" aria-labelledby="fmstr-cmp-lfm-videos-h2">
          <div class="fmstr-cmp-lfm-videos__container">
            <div class="fmstr-cmp-lfm-videos__header">
              <div class="fmstr-cmp-lfm-videos__eyebrow">See it in action</div>
              <h2 class="fmstr-cmp-lfm-videos__h2" id="fmstr-cmp-lfm-videos-h2">
                Formester's legal form workflow, actually working
              </h2>
              <p class="fmstr-cmp-lfm-videos__sub">
                Real product screens. No mockups, no fake data. Every clip is from app.formester.com.
              </p>
            </div>
            <div class="fmstr-cmp-lfm-videos__grid">
              <div class="fmstr-cmp-lfm-videos__card">
                <div class="fmstr-cmp-lfm-videos__frame">
                  <img
                    class="fmstr-cmp-lfm-videos__media"
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/05_six_ways_20e599e04f.gif"
                    alt="Six ways to create a form"
                    loading="lazy"
                  />
                </div>
                <h3 class="fmstr-cmp-lfm-videos__title">Six ways to create a form</h3>
                <p class="fmstr-cmp-lfm-videos__body">
                  AI prompt, template, scratch, PDF import, backend form, or import from another platform. Pick the
                  shape that fits how you work.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-videos__card">
                <div class="fmstr-cmp-lfm-videos__frame">
                  <img
                    class="fmstr-cmp-lfm-videos__media"
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/02_form_builder_d3fdc8cd3c.gif"
                    alt="Form builder with live design controls"
                    loading="lazy"
                  />
                </div>
                <h3 class="fmstr-cmp-lfm-videos__title">Form builder with live design controls</h3>
                <p class="fmstr-cmp-lfm-videos__body">
                  Drag and drop fields onto the canvas. Change theme, colors, and typography from the right panel. Every
                  change shows on the form in real time.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-videos__card">
                <div class="fmstr-cmp-lfm-videos__frame">
                  <img
                    class="fmstr-cmp-lfm-videos__media"
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/03_template_library_504794b3be.gif"
                    alt="Ready-made template library"
                    loading="lazy"
                  />
                </div>
                <h3 class="fmstr-cmp-lfm-videos__title">Ready-made template library</h3>
                <p class="fmstr-cmp-lfm-videos__body">
                  Start from an intake, admission, application, or waiver template. Search, filter by department or
                  industry, publish in minutes.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-videos__card">
                <div class="fmstr-cmp-lfm-videos__frame">
                  <img
                    class="fmstr-cmp-lfm-videos__media"
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/04_pdf_export_37e8c1bca4.gif"
                    alt="Form-to-PDF export"
                    loading="lazy"
                  />
                </div>
                <h3 class="fmstr-cmp-lfm-videos__title">Form-to-PDF export</h3>
                <p class="fmstr-cmp-lfm-videos__body">
                  Every signed submission renders to a downloadable PDF with the signature block. Upload to Clio,
                  MyCase, or your DMS.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-lfm-who-uses" aria-labelledby="fmstr-cmp-lfm-who-uses-heading">
          <div class="fmstr-cmp-lfm-who-uses__container">
            <header class="fmstr-cmp-lfm-who-uses__header">
              <h2 id="fmstr-cmp-lfm-who-uses-heading" class="fmstr-cmp-lfm-who-uses__heading">
                Who uses Formester for legal form management
              </h2>
              <p class="fmstr-cmp-lfm-who-uses__sub">
                Legal teams that need signed forms to move a matter forward, without the cost of a full practice
                management suite.
              </p>
            </header>

            <div class="fmstr-cmp-lfm-who-uses__grid">
              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Solo attorneys</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Client intake, retainer authorization, engagement letters. Skip the paper file, skip the fax. Every
                  submission arrives as a signed PDF ready for your file.
                </p>
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Small firms (2-20 attorneys)</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Standardize intake across the firm, route by practice area, keep everything auditable. Everyone works
                  from the same form library.
                </p>
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">In-house counsel</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Vendor NDAs, contract requests, policy acknowledgements, DPIA questionnaires. Track approvals across
                  every department with a full audit trail.
                </p>
                <hr class="fmstr-cmp-lfm-who-uses__divider" />
                <a class="fmstr-cmp-lfm-who-uses__cta" href="https://formester.com/ai-quiz-maker/"
                  >Generate Quizzes in Seconds &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Paralegals and legal assistants</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Case status updates, document requests, client questionnaires. Send from a Formester subdomain of your
                  firm's domain. No IT ticket required.
                </p>
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Researchers</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Participant informed-consent for survey studies, user interviews, and product research. Capture the
                  signed consent alongside the study screener in one submission.
                </p>
                <hr class="fmstr-cmp-lfm-who-uses__divider" />
                <a class="fmstr-cmp-lfm-who-uses__cta" href="https://formester.com/ai-survey-generator/"
                  >Analyze Customer Feedback &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Schools and colleges</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Field trip permission slips, media release for student photos, athletics participation waivers,
                  technology use agreements. Parent name and student name captured on the same signed submission.
                </p>
                <hr class="fmstr-cmp-lfm-who-uses__divider" />
                <a class="fmstr-cmp-lfm-who-uses__cta" href="https://formester.com/ai-survey-generator/"
                  >Generate Surveys with AI in Seconds &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Event organizers</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
                  Liability waivers for attendees, photo and video release for the event coverage, allergen and dietary
                  consent for catered events, minor participation forms with parent signature.
                </p>
              </article>

              <article class="fmstr-cmp-lfm-who-uses__card">
                <span class="fmstr-cmp-lfm-who-uses__icon" aria-hidden="true">
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
                <h3 class="fmstr-cmp-lfm-who-uses__title">Nonprofits</h3>
                <p class="fmstr-cmp-lfm-who-uses__body">
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
        <section class="fmstr-cmp-lfm-api-mcp" aria-labelledby="fmstr-cmp-lfm-api-mcp-title">
          <div class="fmstr-cmp-lfm-api-mcp__container">
            <header class="fmstr-cmp-lfm-api-mcp__header">
              <span class="fmstr-cmp-lfm-api-mcp__eyebrow">For developers</span>
              <h2 id="fmstr-cmp-lfm-api-mcp-title" class="fmstr-cmp-lfm-api-mcp__title">
                Your submissions, ready for the CRM you already use
              </h2>
              <p class="fmstr-cmp-lfm-api-mcp__intro">
                Every Formester form ships with a REST API and an MCP server, so submissions don't stop at a CSV. Pipe
                leads into your agent. Stream applications into your hiring copilot. Nobody else on this list ships MCP.
              </p>
            </header>

            <div class="fmstr-cmp-lfm-api-mcp__grid">
              <article class="fmstr-cmp-lfm-api-mcp__card">
                <span class="fmstr-cmp-lfm-api-mcp__icon" aria-hidden="true">
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
                <span class="fmstr-cmp-lfm-api-mcp__badge">MCP server</span>
                <h3 class="fmstr-cmp-lfm-api-mcp__card-title">
                  Plug Formester into Claude, ChatGPT, or any MCP-compatible model
                </h3>
                <div class="fmstr-cmp-lfm-api-mcp__chips">
                  <span class="fmstr-cmp-lfm-api-mcp__chip">Claude</span>
                  <span class="fmstr-cmp-lfm-api-mcp__chip">ChatGPT</span>
                  <span class="fmstr-cmp-lfm-api-mcp__chip">Custom agents</span>
                </div>
                <p class="fmstr-cmp-lfm-api-mcp__body">
                  Connect Formester to any MCP-compatible model and let it read your signed consent records directly.
                  Ask Claude "which client intake submissions from this week are missing prior counsel details?" or have
                  a custom agent flag any client intake that mentions prior representation so your intake coordinator
                  can pull the conflict check.
                </p>
                <a class="fmstr-cmp-lfm-api-mcp__cta" href="https://docs.formester.com/formester-mcp-server.html"
                  >Read the MCP docs &rarr;</a
                >
              </article>

              <article class="fmstr-cmp-lfm-api-mcp__card">
                <span class="fmstr-cmp-lfm-api-mcp__icon" aria-hidden="true">
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
                <span class="fmstr-cmp-lfm-api-mcp__badge fmstr-cmp-lfm-api-mcp__badge--alt">REST API v2</span>
                <h3 class="fmstr-cmp-lfm-api-mcp__card-title">Or build directly on the REST API</h3>
                <div class="fmstr-cmp-lfm-api-mcp__chips">
                  <span class="fmstr-cmp-lfm-api-mcp__chip">Self-service token</span>
                  <span class="fmstr-cmp-lfm-api-mcp__chip">Webhooks</span>
                  <span class="fmstr-cmp-lfm-api-mcp__chip">Business plan +</span>
                </div>
                <p class="fmstr-cmp-lfm-api-mcp__body">
                  Pull signed consent records into your CRM or data warehouse, log the timestamp to your compliance
                  system, or push pre-filled consent URLs back from Salesforce. Self-service token at
                  app.formester.com/api in two clicks. No support ticket, no waiting.
                </p>
                <a class="fmstr-cmp-lfm-api-mcp__cta" href="https://docs.formester.com/formester-api.html"
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
          class="fmstr-cmp-lfm-privacy-data-ownership"
          aria-labelledby="fmstr-cmp-lfm-privacy-data-ownership-heading"
        >
          <div class="fmstr-cmp-lfm-privacy-data-ownership__container">
            <div class="fmstr-cmp-lfm-privacy-data-ownership__inner">
              <div class="fmstr-cmp-lfm-privacy-data-ownership__text">
                <span class="fmstr-cmp-lfm-privacy-data-ownership__eyebrow">Privacy and data ownership</span>
                <h2
                  id="fmstr-cmp-lfm-privacy-data-ownership-heading"
                  class="fmstr-cmp-lfm-privacy-data-ownership__heading"
                >
                  Your consent records belong to you. We don't train on them
                </h2>
                <div class="fmstr-cmp-lfm-privacy-data-ownership__body">
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

              <aside class="fmstr-cmp-lfm-privacy-data-ownership__card">
                <span class="fmstr-cmp-lfm-privacy-data-ownership__pill">What's in the DPA</span>
                <blockquote class="fmstr-cmp-lfm-privacy-data-ownership__quote">
                  "Formester does not use Customer Data for analytics, advertising, marketing, or product training."
                </blockquote>
                <hr class="fmstr-cmp-lfm-privacy-data-ownership__divider" />
                <p class="fmstr-cmp-lfm-privacy-data-ownership__cite">
                  Section 4.4, Formester Data Processing Agreement, effective January 2026.
                </p>
                <div class="fmstr-cmp-lfm-privacy-data-ownership__links">
                  <a href="https://formester.com/dpa/">Read the DPA →</a>
                  <a href="https://formester.com/security/">Security overview →</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-lfm-feat" aria-labelledby="fmstr-cmp-lfm-feat-h2">
          <div class="fmstr-cmp-lfm-feat__container">
            <div class="fmstr-cmp-lfm-feat__header">
              <h2 class="fmstr-cmp-lfm-feat__h2" id="fmstr-cmp-lfm-feat-h2">Unlock the full power of Formester</h2>
              <p class="fmstr-cmp-lfm-feat__sub">
                The features that make Formester the practical form layer for teams that don't want to overpay.
              </p>
            </div>
            <div class="fmstr-cmp-lfm-feat__grid">
              <div class="fmstr-cmp-lfm-feat__card">
                <div class="fmstr-cmp-lfm-feat__icon" aria-hidden="true">
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
                    <path d="M3 21c3-3 6-3 9 0s6 3 9 0" />
                    <path d="M20.5 7.5 8 20l-3.5.5.5-3.5L17.5 4.5a2.121 2.121 0 0 1 3 3Z" />
                  </svg>
                </div>
                <h3 class="fmstr-cmp-lfm-feat__title">Client intake forms with e-signature</h3>
                <p class="fmstr-cmp-lfm-feat__body">
                  Native e-signature field, drawn or typed, with signer IP, timestamp, and user-agent captured. Meets
                  ESIGN Act and UETA requirements for enforceable e-signatures.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-feat__card">
                <div class="fmstr-cmp-lfm-feat__icon" aria-hidden="true">
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="m9 15 3 3 3-3" />
                  </svg>
                </div>
                <h3 class="fmstr-cmp-lfm-feat__title">PDF export of every signed submission</h3>
                <p class="fmstr-cmp-lfm-feat__body">
                  Every submission renders to a downloadable PDF with the signature block. Upload straight to your DMS
                  or attach to a matter.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-feat__card">
                <div class="fmstr-cmp-lfm-feat__icon" aria-hidden="true">
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
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <circle cx="12" cy="18" r="2.5" />
                    <path d="M7.5 7.5 11 16" />
                    <path d="M16.5 7.5 13 16" />
                  </svg>
                </div>
                <h3 class="fmstr-cmp-lfm-feat__title">Conditional logic for complex intake</h3>
                <p class="fmstr-cmp-lfm-feat__body">
                  Route questions based on practice area, jurisdiction, or client type. A single form can serve family
                  law, PI, and corporate intake.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-feat__card">
                <div class="fmstr-cmp-lfm-feat__icon" aria-hidden="true">
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
                </div>
                <h3 class="fmstr-cmp-lfm-feat__title">Custom domain and white-label branding</h3>
                <p class="fmstr-cmp-lfm-feat__body">
                  Host forms on forms.yourfirm.com with your firm's logo and colors. Personal plan and up.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-feat__card">
                <div class="fmstr-cmp-lfm-feat__icon" aria-hidden="true">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 class="fmstr-cmp-lfm-feat__title">Team seats and roles</h3>
                <p class="fmstr-cmp-lfm-feat__body">
                  25 team members on Business, unlimited on Enterprise. Attorney / paralegal / admin roles built in.
                </p>
              </div>
              <div class="fmstr-cmp-lfm-feat__card">
                <div class="fmstr-cmp-lfm-feat__icon" aria-hidden="true">
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
                    <path d="M9 3H5a2 2 0 0 0-2 2v4" />
                    <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                    <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
                    <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
                    <path d="M9 9v6h6V9z" />
                  </svg>
                </div>
                <h3 class="fmstr-cmp-lfm-feat__title">Native integrations</h3>
                <p class="fmstr-cmp-lfm-feat__body">
                  Clio, Zapier (500+ apps), Google Sheets, Slack, webhooks. Push submissions anywhere in your stack.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <TestimonialWall
      description="Reviews from G2, Trustpilot, Product Hunt, and Capterra."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c11_title"
      :pickedReviews="c11_pickedReviews"
      :excludedReviews="c11_excludedReviews"
      class="page-component-item"
    />

    <CallToActionSection :ctaValue="c12_ctaValue" class="page-component-item" />

    <FaqSection description="" centered :title="c13_title" :faqList="c13_faqList" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <section class="fmstr-cmp-lfm-more-tools" aria-labelledby="fmstr-cmp-lfm-more-tools-heading">
          <div class="fmstr-cmp-lfm-more-tools__inner">
            <h2 class="fmstr-cmp-lfm-more-tools__heading" id="fmstr-cmp-lfm-more-tools-heading">
              More from Formester worth a look
            </h2>
            <div class="fmstr-cmp-lfm-more-tools__grid">
              <a class="fmstr-cmp-lfm-more-tools__card" href="https://formester.com/consent-form-generator/"
                ><span class="fmstr-cmp-lfm-more-tools__icon" aria-hidden="true"
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
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" /></svg
                ></span>
                <h3 class="fmstr-cmp-lfm-more-tools__title">Consent Form Generator</h3>
                <p class="fmstr-cmp-lfm-more-tools__desc">Legally valid consent forms with e-signature.</p></a
              ><a class="fmstr-cmp-lfm-more-tools__card" href="https://formester.com/contact-form-generator/"
                ><span class="fmstr-cmp-lfm-more-tools__icon" aria-hidden="true"
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                    <polyline points="22,6 12,13 2,6" /></svg
                ></span>
                <h3 class="fmstr-cmp-lfm-more-tools__title">Contact Form Generator</h3>
                <p class="fmstr-cmp-lfm-more-tools__desc">Free contact forms with AI generation.</p></a
              ><a class="fmstr-cmp-lfm-more-tools__card" href="https://formester.com/ai-form-generator/"
                ><span class="fmstr-cmp-lfm-more-tools__icon" aria-hidden="true"
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
                    <path
                      d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"
                    /></svg
                ></span>
                <h3 class="fmstr-cmp-lfm-more-tools__title">AI Form Generator</h3>
                <p class="fmstr-cmp-lfm-more-tools__desc">Type a prompt, get a form in 30 seconds.</p></a
              ><a
                class="fmstr-cmp-lfm-more-tools__card"
                href="https://formester.com/templates/job-application-form-2450/"
                ><span class="fmstr-cmp-lfm-more-tools__icon" aria-hidden="true"
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="15" y2="17" /></svg
                ></span>
                <h3 class="fmstr-cmp-lfm-more-tools__title">Job Application Form Template</h3>
                <p class="fmstr-cmp-lfm-more-tools__desc">Free hiring form with scoring built in.</p></a
              >
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import RawHtml from '@/components/strapi/RawHtml.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate.vue'
import TestimonialWall from '@/components/v2/TestimonialWall.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_markup =
  '\u003Cstyle>\n.fmstr-cmp-lfm-hero3 {\n  --c-fg-1: #101828; --c-fg-2: #475467; --c-fg-3: #697586;\n  --c-violet-100: #f4ebff; --c-violet-500: #7f56d9; --c-violet-600: #6941c6;\n  --c-border: #eaecf0; --c-tint: #f7f3ff;\n  background: radial-gradient(60% 70% at 50% 0%, #f7f3ff 0%, #ffffff 70%);\n  padding: 120px 24px 72px; font-family: inherit; color: var(--c-fg-1); overflow-x: hidden;\n}\n.fmstr-cmp-lfm-hero3 *, .fmstr-cmp-lfm-hero3 *::before, .fmstr-cmp-lfm-hero3 *::after { box-sizing: border-box; }\n.fmstr-cmp-lfm-hero3__inner { max-width: 1180px; margin: 0 auto; padding: 0 24px; }\n.fmstr-cmp-lfm-hero3__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }\n\n/* LEFT COLUMN */\n.fmstr-cmp-lfm-hero3__badge { display: inline-block; padding: 6px 14px; background: var(--c-violet-100); color: var(--c-violet-600);\n  border-radius: 9999px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px; }\n.fmstr-cmp-lfm-hero3__h1 { font-size: clamp(28px, 3.4vw, 44px); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 18px; color: var(--c-fg-1); }\n.fmstr-cmp-lfm-hero3__accent { color: var(--c-violet-600); }\n.fmstr-cmp-lfm-hero3__desc { font-size: 17px; line-height: 1.6; color: var(--c-fg-2); margin: 0 0 28px; }\n.fmstr-cmp-lfm-hero3__ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; }\n.fmstr-cmp-lfm-hero3__btn { display: inline-flex; align-items: center; padding: 12px 24px; border-radius: 9999px; font-size: 15px; font-weight: 600; text-decoration: none !important; transition: all 0.15s ease; }\n.fmstr-cmp-lfm-hero3__btn--primary { background: var(--c-violet-500); color: #ffffff !important; box-shadow: 0 4px 14px rgba(105, 65, 198, 0.22); }\n.fmstr-cmp-lfm-hero3__btn--primary:hover { background: var(--c-violet-600); color: #ffffff !important; }\n.fmstr-cmp-lfm-hero3__btn--ghost { background: transparent; color: var(--c-violet-600) !important; border: 1px solid var(--c-violet-600); }\n.fmstr-cmp-lfm-hero3__btn--ghost:hover { background: var(--c-violet-100); color: var(--c-violet-600) !important; }\n.fmstr-cmp-lfm-hero3__meta { display: flex; align-items: center; gap: 12px; font-size: 13px; color: var(--c-fg-3); flex-wrap: wrap; }\n.fmstr-cmp-lfm-hero3__meta-dot { width: 4px; height: 4px; background: #cbd5e1; border-radius: 50%; }\n\n/* RIGHT PANEL */\n.fmstr-cmp-lfm-hero3__panel { position: relative; min-height: 500px; background: #ffffff; border: 1px solid var(--c-border); border-radius: 20px;\n  box-shadow: 0 12px 32px rgba(105, 65, 198, 0.10); overflow: hidden; }\n.fmstr-cmp-lfm-hero3__state { position: absolute; inset: 0; padding: 24px; display: flex; flex-direction: column; opacity: 0; pointer-events: none; }\n.fmstr-cmp-lfm-hero3__state--prompt { animation: lfm-hero3-state1 14s infinite; }\n.fmstr-cmp-lfm-hero3__state--form { animation: lfm-hero3-state2 14s infinite; }\n@keyframes lfm-hero3-state1 {\n  0%, 32% { opacity: 1; pointer-events: auto; }\n  36%, 92% { opacity: 0; pointer-events: none; }\n  96%, 100% { opacity: 1; pointer-events: auto; }\n}\n@keyframes lfm-hero3-state2 {\n  0%, 32% { opacity: 0; pointer-events: none; }\n  38%, 92% { opacity: 1; pointer-events: auto; }\n  96%, 100% { opacity: 0; pointer-events: none; }\n}\n\n/* --- State 1: prompt (two-line natural typing, no partial letters) --- */\n.fmstr-cmp-lfm-hero3__prompt-head { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--c-border); }\n.fmstr-cmp-lfm-hero3__prompt-icon { width: 28px; height: 28px; border-radius: 7px; background: var(--c-tint); display: grid; place-items: center; color: var(--c-violet-600); }\n.fmstr-cmp-lfm-hero3__prompt-label { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--c-fg-3); }\n\n/* Prompt box holds two typing lines, no wrap inside each */\n.fmstr-cmp-lfm-hero3__prompt-box { padding: 18px 20px; background: #fafafa; border: 1px solid var(--c-border); border-radius: 12px;\n  font-size: 15.5px; line-height: 1.6; color: var(--c-fg-1); min-height: 96px; max-height: 120px; overflow: hidden; }\n.fmstr-cmp-lfm-hero3__line { position: relative; display: flex; align-items: baseline; overflow: hidden; white-space: nowrap; }\n.fmstr-cmp-lfm-hero3__line-fill { display: inline-block; overflow: hidden; white-space: nowrap; max-width: 0; vertical-align: baseline; }\n/* Line 1: 0.9s smooth reveal from 0% to 8.5% of loop, hold until fade */\n.fmstr-cmp-lfm-hero3__line--1 .fmstr-cmp-lfm-hero3__line-fill { animation: lfm-hero3-line1 14s cubic-bezier(0.22, 1, 0.36, 1) infinite; }\n@keyframes lfm-hero3-line1 {\n  0%    { max-width: 0; }\n  8.5%  { max-width: 100%; }\n  90%   { max-width: 100%; }\n  95%   { max-width: 0; }\n  100%  { max-width: 0; }\n}\n/* Line 2: waits 12% (1.7s pause after line 1), then reveals over 9% */\n.fmstr-cmp-lfm-hero3__line--2 .fmstr-cmp-lfm-hero3__line-fill { animation: lfm-hero3-line2 14s cubic-bezier(0.22, 1, 0.36, 1) infinite; }\n@keyframes lfm-hero3-line2 {\n  0%, 12%   { max-width: 0; }\n  21%       { max-width: 100%; }\n  90%       { max-width: 100%; }\n  95%, 100% { max-width: 0; }\n}\n/* Cursor 1: active during line 1 typing + tiny hold, hidden thereafter */\n.fmstr-cmp-lfm-hero3__cursor--1 { display: inline-block; width: 2px; height: 18px; background: var(--c-violet-600); vertical-align: text-bottom; margin-left: 3px;\n  animation: lfm-hero3-blink 1s steps(2) infinite, lfm-hero3-cursor1-vis 14s infinite; }\n@keyframes lfm-hero3-cursor1-vis {\n  0%, 11% { opacity: 1; }\n  12%, 100% { opacity: 0; }\n}\n/* Cursor 2: appears when line 2 starts, stays through reading pause */\n.fmstr-cmp-lfm-hero3__cursor--2 { display: inline-block; width: 2px; height: 18px; background: var(--c-violet-600); vertical-align: text-bottom; margin-left: 3px;\n  opacity: 0; animation: lfm-hero3-blink 1s steps(2) infinite, lfm-hero3-cursor2-vis 14s infinite; }\n@keyframes lfm-hero3-cursor2-vis {\n  0%, 11%   { opacity: 0; }\n  13%, 30%  { opacity: 1; }\n  32%, 100% { opacity: 0; }\n}\n@keyframes lfm-hero3-blink { 50% { opacity: 0.15; } }\n  28%, 100% { opacity: 0; }\n}\n\n/* Below the prompt box: hint + generate button, well-spaced */\n.fmstr-cmp-lfm-hero3__prompt-below { margin-top: 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }\n.fmstr-cmp-lfm-hero3__prompt-hint { font-size: 12px; color: var(--c-fg-3); }\n.fmstr-cmp-lfm-hero3__gen-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 9999px;\n  background: var(--c-violet-500); color: #ffffff; font-size: 14px; font-weight: 600; border: none; text-decoration: none !important;\n  box-shadow: 0 4px 14px rgba(105, 65, 198, 0.25); animation: lfm-hero3-btn-pulse 14s infinite; }\n.fmstr-cmp-lfm-hero3__gen-btn:hover { background: var(--c-violet-600); color: #ffffff !important; }\n@keyframes lfm-hero3-btn-pulse {\n  0%, 27% { transform: scale(1); box-shadow: 0 4px 14px rgba(105, 65, 198, 0.25); }\n  28%, 30% { transform: scale(0.94); box-shadow: 0 0 0 8px rgba(105, 65, 198, 0.15); }\n  31%, 100% { transform: scale(1); box-shadow: 0 4px 14px rgba(105, 65, 198, 0.25); }\n}\n.fmstr-cmp-lfm-hero3__spinner { display: inline-block; width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.35); border-top-color: #ffffff; border-radius: 50%;\n  animation: lfm-hero3-spin 0.8s linear infinite, lfm-hero3-spinner-vis 14s infinite; }\n@keyframes lfm-hero3-spin { to { transform: rotate(360deg); } }\n@keyframes lfm-hero3-spinner-vis {\n  0%, 30% { opacity: 0; width: 0; margin-right: 0; }\n  31%, 36% { opacity: 1; width: 14px; margin-right: 8px; }\n  37%, 100% { opacity: 0; width: 0; margin-right: 0; }\n}\n\n/* --- State 2: generated form preview (whole card is a clickable link) --- */\n.fmstr-cmp-lfm-hero3__form-link { display: flex; flex-direction: column; text-decoration: none !important; color: inherit !important; position: absolute; inset: 0; padding: 24px; cursor: pointer; }\n.fmstr-cmp-lfm-hero3__form-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--c-border); }\n.fmstr-cmp-lfm-hero3__form-title { font-size: 15px; font-weight: 600; color: var(--c-fg-1); margin: 0; }\n.fmstr-cmp-lfm-hero3__form-status { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #059669; background: #d1fae5; padding: 3px 8px; border-radius: 9999px; }\n.fmstr-cmp-lfm-hero3__form-body { flex: 1; overflow: auto; padding-right: 4px; }\n.fmstr-cmp-lfm-hero3__field { margin-bottom: 12px; opacity: 0; animation: lfm-hero3-fld 14s infinite; }\n.fmstr-cmp-lfm-hero3__field--1 { animation-delay: 0s; }\n.fmstr-cmp-lfm-hero3__field--2 { animation-delay: 0.3s; }\n.fmstr-cmp-lfm-hero3__field--3 { animation-delay: 0.6s; }\n.fmstr-cmp-lfm-hero3__field--4 { animation-delay: 0.9s; }\n.fmstr-cmp-lfm-hero3__field--5 { animation-delay: 1.2s; }\n.fmstr-cmp-lfm-hero3__field--6 { animation-delay: 1.5s; }\n@keyframes lfm-hero3-fld {\n  0%, 32% { opacity: 0; transform: translateY(6px); }\n  40%, 92% { opacity: 1; transform: translateY(0); }\n  96%, 100% { opacity: 0; }\n}\n.fmstr-cmp-lfm-hero3__field-label { font-size: 12px; font-weight: 600; color: var(--c-fg-2); margin: 0 0 5px; }\n.fmstr-cmp-lfm-hero3__field-input { height: 32px; background: #fafafa; border: 1px solid var(--c-border); border-radius: 6px; display: flex; align-items: center; padding: 0 12px; font-size: 12.5px; color: var(--c-fg-3); }\n.fmstr-cmp-lfm-hero3__field-textarea { height: 54px; background: #fafafa; border: 1px solid var(--c-border); border-radius: 6px; padding: 10px 12px; font-size: 12.5px; color: var(--c-fg-3); }\n.fmstr-cmp-lfm-hero3__field-sig { height: 44px; background: linear-gradient(180deg, #fafafa 0%, #f4ebff 100%); border: 1px dashed var(--c-violet-500); border-radius: 6px; display: flex; align-items: center; padding: 0 12px; font-size: 12px; color: var(--c-violet-600); font-style: italic; gap: 8px; }\n.fmstr-cmp-lfm-hero3__field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n.fmstr-cmp-lfm-hero3__submit { margin-top: 8px; padding: 12px 20px; background: var(--c-violet-500); color: #ffffff !important; border-radius: 8px; font-size: 13px; font-weight: 600; text-align: center; opacity: 0;\n  animation: lfm-hero3-fld 14s infinite; animation-delay: 1.8s; transition: background 0.15s ease; }\n.fmstr-cmp-lfm-hero3__form-link:hover .fmstr-cmp-lfm-hero3__submit { background: var(--c-violet-600); }\n.fmstr-cmp-lfm-hero3__form-link:hover .fmstr-cmp-lfm-hero3__form-title { color: var(--c-violet-600); }\n\n@media (max-width: 900px) {\n  .fmstr-cmp-lfm-hero3 { padding: 88px 16px 56px; }\n  .fmstr-cmp-lfm-hero3__grid { grid-template-columns: 1fr; gap: 32px; }\n  .fmstr-cmp-lfm-hero3__panel { min-height: 460px; }\n}\n@media (max-width: 640px) {\n  .fmstr-cmp-lfm-hero3 { padding: 72px 16px 48px; }\n}\n\u003C/style>\n\n<section class="fmstr-cmp-lfm-hero3" aria-labelledby="fmstr-cmp-lfm-hero3-h1">\n  <div class="fmstr-cmp-lfm-hero3__inner">\n    <div class="fmstr-cmp-lfm-hero3__grid">\n      <!-- LEFT: text content -->\n      <div class="fmstr-cmp-lfm-hero3__left">\n        <div class="fmstr-cmp-lfm-hero3__badge">Try it now. No sign-up required.</div>\n        <h1 class="fmstr-cmp-lfm-hero3__h1" id="fmstr-cmp-lfm-hero3-h1">The Legal Form Management Software That Ships <span class="fmstr-cmp-lfm-hero3__accent">E-Signed Client Intake in Minutes</span></h1>\n        <p class="fmstr-cmp-lfm-hero3__desc">Client intake, retainer authorization, engagement letters. Describe the form in plain English, paste a URL, or upload a paper PDF. Watch the AI build it with a native e-signature field and PDF export.</p>\n        <div class="fmstr-cmp-lfm-hero3__ctas">\n          <a href="https://app.formester.com/users/sign_up" class="fmstr-cmp-lfm-hero3__btn fmstr-cmp-lfm-hero3__btn--primary">Start free</a>\n          <a href="https://formester.com/pricing/" class="fmstr-cmp-lfm-hero3__btn fmstr-cmp-lfm-hero3__btn--ghost">See pricing</a>\n        </div>\n        <div class="fmstr-cmp-lfm-hero3__meta">\n          <span>Trusted by 56,000+ teams</span>\n          <span class="fmstr-cmp-lfm-hero3__meta-dot"></span>\n          <span>Free forever</span>\n          <span class="fmstr-cmp-lfm-hero3__meta-dot"></span>\n          <span>Native e-signature</span>\n        </div>\n      </div>\n\n      <!-- RIGHT: single panel, two states -->\n      <div class="fmstr-cmp-lfm-hero3__panel">\n        <!-- STATE 1: prompt (typing directly under the box) -->\n        <div class="fmstr-cmp-lfm-hero3__state fmstr-cmp-lfm-hero3__state--prompt">\n          <div class="fmstr-cmp-lfm-hero3__prompt-head">\n            <div class="fmstr-cmp-lfm-hero3__prompt-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg></div>\n            <div class="fmstr-cmp-lfm-hero3__prompt-label">Describe your legal form</div>\n          </div>\n          <div class="fmstr-cmp-lfm-hero3__prompt-box"><div class="fmstr-cmp-lfm-hero3__line fmstr-cmp-lfm-hero3__line--1"><span class="fmstr-cmp-lfm-hero3__line-fill">Client intake form for personal injury cases,</span><span class="fmstr-cmp-lfm-hero3__cursor--1"></span></div><div class="fmstr-cmp-lfm-hero3__line fmstr-cmp-lfm-hero3__line--2"><span class="fmstr-cmp-lfm-hero3__line-fill">with signature and full audit trail.</span><span class="fmstr-cmp-lfm-hero3__cursor--2"></span></div></div>\n          <div class="fmstr-cmp-lfm-hero3__prompt-below">\n            <div class="fmstr-cmp-lfm-hero3__prompt-hint">Prompt, URL, or PDF upload</div>\n            <a class="fmstr-cmp-lfm-hero3__gen-btn" href="https://app.formester.com/users/sign_up">\n              <span class="fmstr-cmp-lfm-hero3__spinner" aria-hidden="true"></span>\n              <span>Generate my legal form</span>\n            </a>\n          </div>\n        </div>\n\n        <!-- STATE 2: generated form (WHOLE CARD IS A LINK to sign up) -->\n        <div class="fmstr-cmp-lfm-hero3__state fmstr-cmp-lfm-hero3__state--form">\n          <a class="fmstr-cmp-lfm-hero3__form-link" href="https://app.formester.com/users/sign_up">\n            <div class="fmstr-cmp-lfm-hero3__form-head">\n              <h3 class="fmstr-cmp-lfm-hero3__form-title">Personal Injury Client Intake</h3>\n              <div class="fmstr-cmp-lfm-hero3__form-status">Generated</div>\n            </div>\n            <div class="fmstr-cmp-lfm-hero3__form-body">\n              <div class="fmstr-cmp-lfm-hero3__field fmstr-cmp-lfm-hero3__field--1">\n                <div class="fmstr-cmp-lfm-hero3__field-label">Full name</div>\n                <div class="fmstr-cmp-lfm-hero3__field-row">\n                  <div class="fmstr-cmp-lfm-hero3__field-input">First</div>\n                  <div class="fmstr-cmp-lfm-hero3__field-input">Last</div>\n                </div>\n              </div>\n              <div class="fmstr-cmp-lfm-hero3__field fmstr-cmp-lfm-hero3__field--2">\n                <div class="fmstr-cmp-lfm-hero3__field-label">Contact</div>\n                <div class="fmstr-cmp-lfm-hero3__field-row">\n                  <div class="fmstr-cmp-lfm-hero3__field-input">Email address</div>\n                  <div class="fmstr-cmp-lfm-hero3__field-input">Phone number</div>\n                </div>\n              </div>\n              <div class="fmstr-cmp-lfm-hero3__field fmstr-cmp-lfm-hero3__field--3">\n                <div class="fmstr-cmp-lfm-hero3__field-label">Accident date</div>\n                <div class="fmstr-cmp-lfm-hero3__field-input">MM / DD / YYYY</div>\n              </div>\n              <div class="fmstr-cmp-lfm-hero3__field fmstr-cmp-lfm-hero3__field--4">\n                <div class="fmstr-cmp-lfm-hero3__field-label">Injuries + medical providers seen</div>\n                <div class="fmstr-cmp-lfm-hero3__field-textarea">Describe the injuries sustained and any medical providers you have seen...</div>\n              </div>\n              <div class="fmstr-cmp-lfm-hero3__field fmstr-cmp-lfm-hero3__field--5">\n                <div class="fmstr-cmp-lfm-hero3__field-label">Prior representation on this matter</div>\n                <div class="fmstr-cmp-lfm-hero3__field-input">Select yes or no</div>\n              </div>\n              <div class="fmstr-cmp-lfm-hero3__field fmstr-cmp-lfm-hero3__field--6">\n                <div class="fmstr-cmp-lfm-hero3__field-label">Client signature</div>\n                <div class="fmstr-cmp-lfm-hero3__field-sig">\n                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21c3-3 6-3 9 0s6 3 9 0"/><path d="M20 8 8 20"/></svg>\n                  Sign here (drawn or typed)\n                </div>\n              </div>\n              <div class="fmstr-cmp-lfm-hero3__submit">Submit intake form</div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>'
const c1_title = []
const c1_logos = []
const c4_title = [
  {
    id: 5927,
    text: 'How firms use ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5926,
    text: 'Formester for legal form management',
    highlight: true,
    color: '#6434D0',
    bold: true,
  },
]
const c4_itemList = [
  {
    id: 2986,
    title: 'Organize forms by matter or practice area',
    description:
      'Group intake, retainer, and engagement letter forms into Workspaces per practice area (family law, PI, corporate, immigration). Every team member sees only the forms they need.',
    description_markdown: null,
    icon: null,
    cardImage: null,
  },
  {
    id: 2987,
    title: 'Assign to attorneys and route submissions',
    description:
      'Set access roles for attorneys, paralegals, and staff. Route new intake submissions to the right attorney or case manager via email, Slack, or webhook.',
    description_markdown: null,
    icon: null,
    cardImage: null,
  },
  {
    id: 2988,
    title: 'Export signed PDFs to your DMS',
    description:
      'Every submitted form renders as a signed PDF. Auto-upload to Clio, MyCase, Filevine, or your document management system via REST API or Zapier.',
    description_markdown: null,
    icon: null,
    cardImage: null,
  },
]
const c11_title = [
  {
    id: 5924,
    text: 'What our users say',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c11_pickedReviews = []
const c11_excludedReviews = []
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
    id: 5925,
    text: 'FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c13_faqList = [
  {
    id: 3725,
    header: 'Is Formester a legal document management system?',
    body: 'No. Formester is a form management layer: intake, retainers, engagement letters, questionnaires. It exports signed PDFs to your DMS (Clio, MyCase, Filevine, PracticePanther, NetDocuments), but does not replace them. For matter-based document storage, versioning, and workflow, keep your practice management suite. Add Formester for the form and signature layer.',
    body_markdown:
      'No. Formester is a form management layer: intake, retainers, engagement letters, questionnaires. It exports signed PDFs to your DMS (Clio, MyCase, Filevine, PracticePanther, NetDocuments), but does not replace them. For matter-based document storage, versioning, and workflow, keep your practice management suite. Add Formester for the form and signature layer.',
    list: [],
  },
  {
    id: 3724,
    header: 'Are Formester e-signatures legally binding?',
    body: 'Yes for most US and EU legal use cases. Formester captures signer IP, timestamp, user-agent, and signature intent, which meets the ESIGN Act (US) and UETA requirements. For contracts governed by wet-signature-required jurisdictions (some real estate closings, wills, certain family law documents), verify local rules first.',
    body_markdown:
      'Yes for most US and EU legal use cases. Formester captures signer IP, timestamp, user-agent, and signature intent, which meets the ESIGN Act (US) and UETA requirements. For contracts governed by wet-signature-required jurisdictions (some real estate closings, wills, certain family law documents), verify local rules first.',
    list: [],
  },
  {
    id: 3726,
    header: 'What about court-admissibility of e-signed documents?',
    body: "Formester's audit trail captures signer IP, timestamp, user-agent, submission ID, and form version at signing time. This is sufficient for civil admissibility under FRE 902(13) or state equivalents. For criminal or family court matters requiring higher evidentiary standards, wet signature may still be required.",
    body_markdown:
      "Formester's audit trail captures signer IP, timestamp, user-agent, submission ID, and form version at signing time. This is sufficient for civil admissibility under FRE 902(13) or state equivalents. For criminal or family court matters requiring higher evidentiary standards, wet signature may still be required.",
    list: [],
  },
  {
    id: 3728,
    header: 'Can Formester replace Clio Grow or MyCase Intake?',
    body: 'For the form layer only, yes. Clio Grow and MyCase Intake bundle intake forms with lead management, matter creation, and CRM. Formester ships the form layer at a fraction of the price. If you want lead management, billing, and matter management in one platform, stay with Clio or MyCase. If you already have a case management system and just need a modern form layer, use Formester and export signed PDFs into your CMS.',
    body_markdown:
      'For the form layer only, yes. Clio Grow and MyCase Intake bundle intake forms with lead management, matter creation, and CRM. Formester ships the form layer at a fraction of the price. If you want lead management, billing, and matter management in one platform, stay with Clio or MyCase. If you already have a case management system and just need a modern form layer, use Formester and export signed PDFs into your CMS.',
    list: [],
  },
  {
    id: 3730,
    header: 'Is Formester HIPAA compliant?',
    body: 'No. Formester is not HIPAA-certified today. For legal intake that touches protected health information (medical malpractice, personal injury with medical records), use a HIPAA-eligible platform: Jotform Gold with the HIPAA add-on, or Cognito Forms Enterprise. Formester is fine for legal intake that does not touch PHI (contracts, corporate law, family law without medical records, immigration).',
    body_markdown:
      'No. Formester is not HIPAA-certified today. For legal intake that touches protected health information (medical malpractice, personal injury with medical records), use a HIPAA-eligible platform: Jotform Gold with the HIPAA add-on, or Cognito Forms Enterprise. Formester is fine for legal intake that does not touch PHI (contracts, corporate law, family law without medical records, immigration).',
    list: [],
  },
  {
    id: 3729,
    header: "Can I embed forms on my firm's website?",
    body: 'Yes. Every Formester form embeds via iframe, direct link, or JavaScript widget. Personal plan ($13/month) removes Formester branding and enables custom subdomain. Business ($49/month) adds full API access for programmatic embedding.',
    body_markdown:
      'Yes. Every Formester form embeds via iframe, direct link, or JavaScript widget. Personal plan ($13/month) removes Formester branding and enables custom subdomain. Business ($49/month) adds full API access for programmatic embedding.',
    list: [],
  },
  {
    id: 3727,
    header: 'How do I migrate my existing PDF intake forms?',
    body: "Upload the PDF to Formester's AI generator. The AI reads the fields, maps them to form question types, and produces a live, fillable form in under a minute. Signature blocks and file uploads are recognized automatically. Review, edit, publish.",
    body_markdown:
      "Upload the PDF to Formester's AI generator. The AI reads the fields, maps them to form question types, and produces a live, fillable form in under a minute. Signature blocks and file uploads are recognized automatically. Review, edit, publish.",
    list: [],
  },
  {
    id: 3732,
    header: 'Can I collect payments (retainers, filing fees) through Formester?',
    body: 'Yes. Formester ships native Stripe and PayPal integration on the free plan. Add a payment field to any form for retainer capture, filing fee collection, or consultation booking. Payment records sync to your Stripe dashboard.',
    body_markdown:
      'Yes. Formester ships native Stripe and PayPal integration on the free plan. Add a payment field to any form for retainer capture, filing fee collection, or consultation booking. Payment records sync to your Stripe dashboard.',
    list: [],
  },
  {
    id: 3731,
    header: 'What integrations does Formester ship for legal workflows?',
    body: 'Native: Clio, Google Drive, Google Sheets, Slack, Stripe, PayPal. Via Zapier: 500+ apps including MyCase, PracticePanther, Filevine, HubSpot, Salesforce, ActiveCampaign, DocuSign. Webhooks and REST API for anything custom.',
    body_markdown:
      'Native: Clio, Google Drive, Google Sheets, Slack, Stripe, PayPal. Via Zapier: 500+ apps including MyCase, PracticePanther, Filevine, HubSpot, Salesforce, ActiveCampaign, DocuSign. Webhooks and REST API for anything custom.',
    list: [],
  },
]

useHead({
  title: 'Legal Form Management Software: Intake + E-Sig | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/legal-form-management-software/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-08-09T10:30:26.704Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Client intake forms, retainer agreements, e-signature, PDF export, and unlimited responses on the free plan. The form management software for law firms.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Legal Form Management Software: Intake + E-Sig | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/legal-form-management-software/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Legal Form Management Software: Intake + E-Sig | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Client intake forms, retainer agreements, e-signature, PDF export, and unlimited responses on the free plan. The form management software for law firms.',
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
      content: 'https://formester.com/legal-form-management-software/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Legal Form Management Software: Intake + E-Sig | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Client intake forms, retainer agreements, e-signature, PDF export, and unlimited responses on the free plan. The form management software for law firms.',
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
        'legal form management software',
        'legal intake form software',
        'law firm form software',
        'attorney form management',
        'paralegal form software',
        'client intake form software',
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
        '@id': 'https://formester.com/legal-form-management-software/#webpage',
        url: 'https://formester.com/legal-form-management-software/',
        name: 'Legal Form Management Software: Intake + E-Sig | Formester',
        '@type': 'WebPage',
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        breadcrumb: {
          '@id': 'https://formester.com/legal-form-management-software/#breadcrumb',
        },
        inLanguage: 'en-US',
        description:
          'Client intake forms, retainer agreements, e-signature, PDF export, and unlimited responses on the free plan. The form management software for law firms.',
        dateModified: '2026-08-05',
        datePublished: '2026-08-05',
      },
      {
        '@id': 'https://formester.com/legal-form-management-software/#breadcrumb',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/',
            name: 'Home',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/legal-form-management-software/',
            name: 'Legal Form Management Software',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
      {
        '@id': 'https://formester.com/legal-form-management-software/#faq',
        '@type': 'FAQPage',
        mainEntity: [
          {
            name: 'Is Formester a legal document management system?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'No. Formester is a form management layer: intake, retainers, engagement letters, questionnaires. It exports signed PDFs to your DMS (Clio, MyCase, Filevine, PracticePanther, NetDocuments), but does not replace them. For matter-based document storage, versioning, and workflow, keep your practice management suite. Add Formester for the form and signature layer.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Are Formester e-signatures legally binding?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes for most US and EU legal use cases. Formester captures signer IP, timestamp, user-agent, and signature intent, which meets the ESIGN Act (US) and UETA requirements. For contracts governed by wet-signature-required jurisdictions (some real estate closings, wills, certain family law documents), verify local rules first.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What about court-admissibility of e-signed documents?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Formester's audit trail captures signer IP, timestamp, user-agent, submission ID, and form version at signing time. This is sufficient for civil admissibility under FRE 902(13) or state equivalents. For criminal or family court matters requiring higher evidentiary standards, wet signature may still be required.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Can Formester replace Clio Grow or MyCase Intake?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'For the form layer only, yes. Clio Grow and MyCase Intake bundle intake forms with lead management, matter creation, and CRM. Formester ships the form layer at a fraction of the price. If you want lead management, billing, and matter management in one platform, stay with Clio or MyCase. If you already have a case management system and just need a modern form layer, use Formester and export signed PDFs into your CMS.',
              '@type': 'Answer',
            },
          },
          {
            name: 'Is Formester HIPAA compliant?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'No. Formester is not HIPAA-certified today. For legal intake that touches protected health information (medical malpractice, personal injury with medical records), use a HIPAA-eligible platform: Jotform Gold with the HIPAA add-on, or Cognito Forms Enterprise. Formester is fine for legal intake that does not touch PHI (contracts, corporate law, family law without medical records, immigration).',
              '@type': 'Answer',
            },
          },
          {
            name: "Can I embed forms on my firm's website?",
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Every Formester form embeds via iframe, direct link, or JavaScript widget. Personal plan ($13/month) removes Formester branding and enables custom subdomain. Business ($49/month) adds full API access for programmatic embedding.',
              '@type': 'Answer',
            },
          },
          {
            name: 'How do I migrate my existing PDF intake forms?',
            '@type': 'Question',
            acceptedAnswer: {
              text: "Upload the PDF to Formester's AI generator. The AI reads the fields, maps them to form question types, and produces a live, fillable form in under a minute. Signature blocks and file uploads are recognized automatically. Review, edit, publish.",
              '@type': 'Answer',
            },
          },
          {
            name: 'Can I collect payments (retainers, filing fees) through Formester?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Yes. Formester ships native Stripe and PayPal integration on the free plan. Add a payment field to any form for retainer capture, filing fee collection, or consultation booking. Payment records sync to your Stripe dashboard.',
              '@type': 'Answer',
            },
          },
          {
            name: 'What integrations does Formester ship for legal workflows?',
            '@type': 'Question',
            acceptedAnswer: {
              text: 'Native: Clio, Google Drive, Google Sheets, Slack, Stripe, PayPal. Via Zapier: 500+ apps including MyCase, PracticePanther, Filevine, HubSpot, Salesforce, ActiveCampaign, DocuSign. Webhooks and REST API for anything custom.',
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
          bestRating: '5',
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
.fmstr-cmp-lfm-3ways a {
  text-decoration: none !important;
}
.fmstr-cmp-lfm-3ways {
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
.fmstr-cmp-lfm-3ways *,
.fmstr-cmp-lfm-3ways *::before,
.fmstr-cmp-lfm-3ways *::after {
  box-sizing: border-box;
}
.fmstr-cmp-lfm-3ways__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-lfm-3ways__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-lfm-3ways__eyebrow {
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
.fmstr-cmp-lfm-3ways__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-3ways__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-lfm-3ways__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  min-width: 0;
}
.fmstr-cmp-lfm-3ways__card {
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
.fmstr-cmp-lfm-3ways__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
}
.fmstr-cmp-lfm-3ways__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  display: grid;
  place-items: center;
  color: var(--c-violet-600);
}
.fmstr-cmp-lfm-3ways__icon svg {
  width: 22px;
  height: 22px;
}
.fmstr-cmp-lfm-3ways__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-3ways__body {
  color: var(--c-fg-2);
  font-size: 15px;
  line-height: 1.55;
  margin: 0;
}
.fmstr-cmp-lfm-3ways__example {
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
  .fmstr-cmp-lfm-3ways {
    padding: 48px 16px;
  }
  .fmstr-cmp-lfm-3ways__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-lfm-3ways__h2 {
    font-size: 24px;
  }
}

.fmstr-cmp-lfm-quality-control {
  --fmstr-cmp-lfm-quality-control-bg-section: #0f0921;
  --fmstr-cmp-lfm-quality-control-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-lfm-quality-control-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-lfm-quality-control-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-lfm-quality-control-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-lfm-quality-control-bg-row: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-lfm-quality-control-fg-eyebrow: #bda6ff;
  --fmstr-cmp-lfm-quality-control-fg-row: rgba(255, 255, 255, 0.85);
  --fmstr-cmp-lfm-quality-control-fg-row-tag: #bda6ff;
  --fmstr-cmp-lfm-quality-control-fg-link: #d9c7ff;
  --fmstr-cmp-lfm-quality-control-fg-link-hover: #ffffff;
  --fmstr-cmp-lfm-quality-control-fs-xs: 12px;
  --fmstr-cmp-lfm-quality-control-fs-sm: 14px;
  --fmstr-cmp-lfm-quality-control-fs-md: 16px;
  --fmstr-cmp-lfm-quality-control-fs-lg: 18px;
  --fmstr-cmp-lfm-quality-control-fs-2xl: 24px;
  --fmstr-cmp-lfm-quality-control-fs-3xl: 32px;
  --fmstr-cmp-lfm-quality-control-fw-semibold: 600;
  --fmstr-cmp-lfm-quality-control-fw-bold: 700;
  --fmstr-cmp-lfm-quality-control-lh-md: 24px;
  --fmstr-cmp-lfm-quality-control-lh-lg: 28px;
  --fmstr-cmp-lfm-quality-control-lh-2xl: 32px;
  --fmstr-cmp-lfm-quality-control-space-1: 4px;
  --fmstr-cmp-lfm-quality-control-space-2: 8px;
  --fmstr-cmp-lfm-quality-control-space-3: 12px;
  --fmstr-cmp-lfm-quality-control-space-4: 16px;
  --fmstr-cmp-lfm-quality-control-space-5: 20px;
  --fmstr-cmp-lfm-quality-control-space-6: 24px;
  --fmstr-cmp-lfm-quality-control-space-7: 28px;
  --fmstr-cmp-lfm-quality-control-space-8: 32px;
  --fmstr-cmp-lfm-quality-control-space-12: 48px;
  --fmstr-cmp-lfm-quality-control-r-md: 8px;
  --fmstr-cmp-lfm-quality-control-r-2xl: 16px;
  --fmstr-cmp-lfm-quality-control-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-lfm-quality-control-space-12) var(--fmstr-cmp-lfm-quality-control-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-lfm-quality-control *,
.fmstr-cmp-lfm-quality-control *::before,
.fmstr-cmp-lfm-quality-control *::after {
  box-sizing: border-box;
}

.fmstr-cmp-lfm-quality-control__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-lfm-quality-control-bg-section);
  background-image: var(--fmstr-cmp-lfm-quality-control-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-lfm-quality-control-space-12);
  overflow: hidden;
}

.fmstr-cmp-lfm-quality-control__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-lfm-quality-control-space-12);
  align-items: center;
}

.fmstr-cmp-lfm-quality-control__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-lfm-quality-control-space-2) var(--fmstr-cmp-lfm-quality-control-space-4);
  background: var(--fmstr-cmp-lfm-quality-control-bg-pill);
  color: var(--fmstr-cmp-lfm-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-lfm-quality-control-r-full);
  font-size: var(--fmstr-cmp-lfm-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-lfm-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-lfm-quality-control-space-5);
}

.fmstr-cmp-lfm-quality-control__heading {
  font-size: var(--fmstr-cmp-lfm-quality-control-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-lfm-quality-control-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-lfm-quality-control-space-6);
}

.fmstr-cmp-lfm-quality-control__body p {
  font-size: var(--fmstr-cmp-lfm-quality-control-fs-md);
  line-height: var(--fmstr-cmp-lfm-quality-control-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-lfm-quality-control-space-4);
}
.fmstr-cmp-lfm-quality-control__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-lfm-quality-control__card {
  background-color: var(--fmstr-cmp-lfm-quality-control-bg-card);
  background-image: var(--fmstr-cmp-lfm-quality-control-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-lfm-quality-control-r-2xl);
  padding: var(--fmstr-cmp-lfm-quality-control-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-lfm-quality-control__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-lfm-quality-control-space-2) var(--fmstr-cmp-lfm-quality-control-space-4);
  background: var(--fmstr-cmp-lfm-quality-control-bg-pill);
  color: var(--fmstr-cmp-lfm-quality-control-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-lfm-quality-control-r-full);
  font-size: var(--fmstr-cmp-lfm-quality-control-fs-xs);
  font-weight: var(--fmstr-cmp-lfm-quality-control-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-lfm-quality-control-space-5);
}

.fmstr-cmp-lfm-quality-control__card-title {
  font-size: var(--fmstr-cmp-lfm-quality-control-fs-lg);
  line-height: var(--fmstr-cmp-lfm-quality-control-lh-lg);
  font-weight: var(--fmstr-cmp-lfm-quality-control-fw-bold);
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-lfm-quality-control-space-5);
}

.fmstr-cmp-lfm-quality-control__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-lfm-quality-control-space-2);
}

.fmstr-cmp-lfm-quality-control__item {
  display: flex;
  align-items: flex-start;
  gap: var(--fmstr-cmp-lfm-quality-control-space-3);
  padding: var(--fmstr-cmp-lfm-quality-control-space-3) var(--fmstr-cmp-lfm-quality-control-space-4);
  background: var(--fmstr-cmp-lfm-quality-control-bg-row);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--fmstr-cmp-lfm-quality-control-r-md);
}

.fmstr-cmp-lfm-quality-control__check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--fmstr-cmp-lfm-quality-control-fg-row-tag);
  margin-top: 2px;
}

.fmstr-cmp-lfm-quality-control__item-text {
  font-size: var(--fmstr-cmp-lfm-quality-control-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-lfm-quality-control-fg-row);
}
.fmstr-cmp-lfm-quality-control__item-text strong {
  color: #ffffff;
  font-weight: var(--fmstr-cmp-lfm-quality-control-fw-bold);
}

@media (max-width: 760px) {
  .fmstr-cmp-lfm-quality-control {
    padding: var(--fmstr-cmp-lfm-quality-control-space-8) var(--fmstr-cmp-lfm-quality-control-space-4);
  }
  .fmstr-cmp-lfm-quality-control__container {
    padding: var(--fmstr-cmp-lfm-quality-control-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-lfm-quality-control__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-lfm-quality-control-space-8);
  }
  .fmstr-cmp-lfm-quality-control__heading {
    font-size: var(--fmstr-cmp-lfm-quality-control-fs-2xl);
    line-height: var(--fmstr-cmp-lfm-quality-control-lh-2xl);
  }
  .fmstr-cmp-lfm-quality-control__card {
    padding: var(--fmstr-cmp-lfm-quality-control-space-6);
  }
}

.fmstr-cmp-lfm-steps-video {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  overflow-x: hidden;
}
.fmstr-cmp-lfm-steps-video *,
.fmstr-cmp-lfm-steps-video *::before,
.fmstr-cmp-lfm-steps-video *::after {
  box-sizing: border-box;
}
.fmstr-cmp-lfm-steps-video__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-lfm-steps-video__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-lfm-steps-video__eyebrow {
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
.fmstr-cmp-lfm-steps-video__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-steps-video__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-lfm-steps-video__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  min-width: 0;
}
.fmstr-cmp-lfm-steps-video__card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.fmstr-cmp-lfm-steps-video__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
}
.fmstr-cmp-lfm-steps-video__frame {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  background: #fafafa;
  aspect-ratio: 16/9;
}
.fmstr-cmp-lfm-steps-video__video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.fmstr-cmp-lfm-steps-video__title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-steps-video__body {
  color: var(--c-fg-2);
  font-size: 14px;
  line-height: 1.55;
  margin: 0;
}
@media (max-width: 900px) {
  .fmstr-cmp-lfm-steps-video__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-lfm-steps-video {
    padding: 48px 16px;
  }
  .fmstr-cmp-lfm-steps-video__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .fmstr-cmp-lfm-steps-video__h2 {
    font-size: 24px;
  }
}

.fmstr-cmp-lfm-videos {
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-violet-600: #6941c6;
  --c-border: #eaecf0;
  background: transparent;
  padding: 56px 24px;
  font-family: inherit;
  color: var(--c-fg-1);
  overflow-x: hidden;
}
.fmstr-cmp-lfm-videos *,
.fmstr-cmp-lfm-videos *::before,
.fmstr-cmp-lfm-videos *::after {
  box-sizing: border-box;
}
.fmstr-cmp-lfm-videos__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-lfm-videos__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-lfm-videos__eyebrow {
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
.fmstr-cmp-lfm-videos__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-videos__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-lfm-videos__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  min-width: 0;
}
.fmstr-cmp-lfm-videos__card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.fmstr-cmp-lfm-videos__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
}
.fmstr-cmp-lfm-videos__frame {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  background: #fafafa;
  aspect-ratio: 16/10;
}
.fmstr-cmp-lfm-videos__media {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.fmstr-cmp-lfm-videos__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-videos__body {
  color: var(--c-fg-2);
  font-size: 14.5px;
  line-height: 1.55;
  margin: 0;
}
@media (max-width: 760px) {
  .fmstr-cmp-lfm-videos {
    padding: 48px 16px;
  }
  .fmstr-cmp-lfm-videos__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .fmstr-cmp-lfm-videos__h2 {
    font-size: 24px;
  }
}

.fmstr-cmp-lfm-who-uses {
  --fmstr-cmp-lfm-who-uses-bg-card: #ffffff;
  --fmstr-cmp-lfm-who-uses-bg-violet-25: #f7f3ff;
  --fmstr-cmp-lfm-who-uses-fg-1: #101828;
  --fmstr-cmp-lfm-who-uses-fg-2: #475467;
  --fmstr-cmp-lfm-who-uses-fg-3: #697586;
  --fmstr-cmp-lfm-who-uses-violet-600: #6941c6;
  --fmstr-cmp-lfm-who-uses-violet-700: #53389e;
  --fmstr-cmp-lfm-who-uses-border-light: #eaecf0;
  --fmstr-cmp-lfm-who-uses-border-violet: #9777e0;
  --fmstr-cmp-lfm-who-uses-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fmstr-cmp-lfm-who-uses-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --fmstr-cmp-lfm-who-uses-fs-xs: 12px;
  --fmstr-cmp-lfm-who-uses-fs-sm: 14px;
  --fmstr-cmp-lfm-who-uses-fs-md: 16px;
  --fmstr-cmp-lfm-who-uses-fs-lg: 18px;
  --fmstr-cmp-lfm-who-uses-fs-2xl: 24px;
  --fmstr-cmp-lfm-who-uses-fs-3xl: 36px;
  --fmstr-cmp-lfm-who-uses-fw-semibold: 600;
  --fmstr-cmp-lfm-who-uses-fw-bold: 700;
  --fmstr-cmp-lfm-who-uses-lh-md: 24px;
  --fmstr-cmp-lfm-who-uses-lh-lg: 28px;
  --fmstr-cmp-lfm-who-uses-lh-2xl: 32px;
  --fmstr-cmp-lfm-who-uses-space-1: 4px;
  --fmstr-cmp-lfm-who-uses-space-2: 8px;
  --fmstr-cmp-lfm-who-uses-space-3: 12px;
  --fmstr-cmp-lfm-who-uses-space-4: 16px;
  --fmstr-cmp-lfm-who-uses-space-5: 20px;
  --fmstr-cmp-lfm-who-uses-space-6: 24px;
  --fmstr-cmp-lfm-who-uses-space-7: 28px;
  --fmstr-cmp-lfm-who-uses-space-8: 32px;
  --fmstr-cmp-lfm-who-uses-space-10: 40px;
  --fmstr-cmp-lfm-who-uses-space-12: 48px;
  --fmstr-cmp-lfm-who-uses-space-16: 64px;
  --fmstr-cmp-lfm-who-uses-r-md: 8px;
  --fmstr-cmp-lfm-who-uses-r-lg: 12px;
  --fmstr-cmp-lfm-who-uses-r-2xl: 16px;

  padding: var(--fmstr-cmp-lfm-who-uses-space-16) var(--fmstr-cmp-lfm-who-uses-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--fmstr-cmp-lfm-who-uses-fg-1);
}

.fmstr-cmp-lfm-who-uses *,
.fmstr-cmp-lfm-who-uses *::before,
.fmstr-cmp-lfm-who-uses *::after {
  box-sizing: border-box;
}

.fmstr-cmp-lfm-who-uses__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-lfm-who-uses__header {
  max-width: 760px;
  margin: 0 auto var(--fmstr-cmp-lfm-who-uses-space-10);
  text-align: center;
}

.fmstr-cmp-lfm-who-uses__heading {
  font-size: var(--fmstr-cmp-lfm-who-uses-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-lfm-who-uses-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-lfm-who-uses-fg-1);
  margin: 0 0 var(--fmstr-cmp-lfm-who-uses-space-3);
}

.fmstr-cmp-lfm-who-uses__sub {
  font-size: var(--fmstr-cmp-lfm-who-uses-fs-md);
  line-height: var(--fmstr-cmp-lfm-who-uses-lh-md);
  color: var(--fmstr-cmp-lfm-who-uses-fg-3);
  margin: 0;
}

.fmstr-cmp-lfm-who-uses__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: var(--fmstr-cmp-lfm-who-uses-space-5);
}

.fmstr-cmp-lfm-who-uses__card {
  display: flex;
  flex-direction: column;
  gap: var(--fmstr-cmp-lfm-who-uses-space-4);
  padding: var(--fmstr-cmp-lfm-who-uses-space-7);
  background: var(--fmstr-cmp-lfm-who-uses-bg-card);
  border: 1px solid var(--fmstr-cmp-lfm-who-uses-border-light);
  border-radius: var(--fmstr-cmp-lfm-who-uses-r-2xl);
  box-shadow: var(--fmstr-cmp-lfm-who-uses-shadow-xs);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}
.fmstr-cmp-lfm-who-uses__card:hover {
  border-color: var(--fmstr-cmp-lfm-who-uses-border-violet);
  box-shadow: var(--fmstr-cmp-lfm-who-uses-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-lfm-who-uses__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--fmstr-cmp-lfm-who-uses-r-md);
  background: var(--fmstr-cmp-lfm-who-uses-bg-violet-25);
  color: var(--fmstr-cmp-lfm-who-uses-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-lfm-who-uses__title {
  margin: 0;
  font-size: var(--fmstr-cmp-lfm-who-uses-fs-lg);
  line-height: var(--fmstr-cmp-lfm-who-uses-lh-lg);
  font-weight: var(--fmstr-cmp-lfm-who-uses-fw-bold);
  color: var(--fmstr-cmp-lfm-who-uses-fg-1);
}

.fmstr-cmp-lfm-who-uses__body {
  margin: 0;
  font-size: var(--fmstr-cmp-lfm-who-uses-fs-sm);
  line-height: 22px;
  color: var(--fmstr-cmp-lfm-who-uses-fg-2);
}

.fmstr-cmp-lfm-who-uses__divider {
  margin-top: auto;
  border: none;
  border-top: 1px solid var(--fmstr-cmp-lfm-who-uses-border-light);
}

.fmstr-cmp-lfm-who-uses__cta {
  color: var(--fmstr-cmp-lfm-who-uses-violet-600);
  font-size: var(--fmstr-cmp-lfm-who-uses-fs-sm);
  font-weight: var(--fmstr-cmp-lfm-who-uses-fw-bold);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--fmstr-cmp-lfm-who-uses-space-1);
  transition: color 150ms ease;
}
.fmstr-cmp-lfm-who-uses__cta:hover {
  color: var(--fmstr-cmp-lfm-who-uses-violet-700);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .fmstr-cmp-lfm-who-uses__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .fmstr-cmp-lfm-who-uses {
    padding: var(--fmstr-cmp-lfm-who-uses-space-12) var(--fmstr-cmp-lfm-who-uses-space-4);
  }
  .fmstr-cmp-lfm-who-uses__heading {
    font-size: var(--fmstr-cmp-lfm-who-uses-fs-2xl);
    line-height: var(--fmstr-cmp-lfm-who-uses-lh-2xl);
  }
  .fmstr-cmp-lfm-who-uses__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-lfm-who-uses__card {
    padding: var(--fmstr-cmp-lfm-who-uses-space-6);
  }
}

.fmstr-cmp-lfm-api-mcp {
  --fmstr-cmp-lfm-api-mcp-bg-card: #ffffff;
  --fmstr-cmp-lfm-api-mcp-bg-tint: #f7f3ff;
  --fmstr-cmp-lfm-api-mcp-bg-pill: #f4ebff;
  --fmstr-cmp-lfm-api-mcp-bg-chip: #f2f4f7;
  --fmstr-cmp-lfm-api-mcp-fg-1: #101828;
  --fmstr-cmp-lfm-api-mcp-fg-2: #475467;
  --fmstr-cmp-lfm-api-mcp-fg-strong: #344054;
  --fmstr-cmp-lfm-api-mcp-violet-500: #7f56d9;
  --fmstr-cmp-lfm-api-mcp-violet-600: #6941c6;
  --fmstr-cmp-lfm-api-mcp-violet-300: #9777e0;
  --fmstr-cmp-lfm-api-mcp-border: #eaecf0;
  --fmstr-cmp-lfm-api-mcp-fs-xs: 12px;
  --fmstr-cmp-lfm-api-mcp-fs-sm: 14px;
  --fmstr-cmp-lfm-api-mcp-fs-md: 16px;
  --fmstr-cmp-lfm-api-mcp-fs-lg: 18px;
  --fmstr-cmp-lfm-api-mcp-fs-xl: 20px;
  --fmstr-cmp-lfm-api-mcp-fs-2xl: 24px;
  --fmstr-cmp-lfm-api-mcp-fs-3xl: 36px;
  --fmstr-cmp-lfm-api-mcp-lh-md: 24px;
  --fmstr-cmp-lfm-api-mcp-lh-lg: 28px;
  --fmstr-cmp-lfm-api-mcp-lh-xl: 30px;
  --fmstr-cmp-lfm-api-mcp-fw-semibold: 600;
  --fmstr-cmp-lfm-api-mcp-fw-bold: 700;
  --fmstr-cmp-lfm-api-mcp-space-2: 8px;
  --fmstr-cmp-lfm-api-mcp-space-3: 12px;
  --fmstr-cmp-lfm-api-mcp-space-4: 16px;
  --fmstr-cmp-lfm-api-mcp-space-5: 20px;
  --fmstr-cmp-lfm-api-mcp-space-6: 24px;
  --fmstr-cmp-lfm-api-mcp-space-7: 28px;
  --fmstr-cmp-lfm-api-mcp-space-8: 32px;
  --fmstr-cmp-lfm-api-mcp-space-10: 40px;
  --fmstr-cmp-lfm-api-mcp-space-12: 48px;
  --fmstr-cmp-lfm-api-mcp-space-16: 64px;
  --fmstr-cmp-lfm-api-mcp-r-md: 6px;
  --fmstr-cmp-lfm-api-mcp-r-lg: 12px;
  --fmstr-cmp-lfm-api-mcp-r-2xl: 16px;
  --fmstr-cmp-lfm-api-mcp-r-full: 9999px;
  --fmstr-cmp-lfm-api-mcp-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

  padding: var(--fmstr-cmp-lfm-api-mcp-space-16) var(--fmstr-cmp-lfm-api-mcp-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-lfm-api-mcp *,
.fmstr-cmp-lfm-api-mcp *::before,
.fmstr-cmp-lfm-api-mcp *::after {
  box-sizing: border-box;
}

.fmstr-cmp-lfm-api-mcp__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-lfm-api-mcp__header {
  margin: 0 auto var(--fmstr-cmp-lfm-api-mcp-space-10);
  max-width: 760px;
  text-align: center;
}

.fmstr-cmp-lfm-api-mcp__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-lfm-api-mcp-space-2) var(--fmstr-cmp-lfm-api-mcp-space-4);
  background: var(--fmstr-cmp-lfm-api-mcp-bg-pill);
  color: var(--fmstr-cmp-lfm-api-mcp-violet-600);
  border-radius: var(--fmstr-cmp-lfm-api-mcp-r-full);
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-lfm-api-mcp-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-lfm-api-mcp-space-4);
}

.fmstr-cmp-lfm-api-mcp__title {
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-3xl);
  line-height: 44px;
  font-weight: var(--fmstr-cmp-lfm-api-mcp-fw-bold);
  letter-spacing: -0.02em;
  color: var(--fmstr-cmp-lfm-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-lfm-api-mcp-space-3);
}

.fmstr-cmp-lfm-api-mcp__intro {
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-lg);
  line-height: var(--fmstr-cmp-lfm-api-mcp-lh-lg);
  color: var(--fmstr-cmp-lfm-api-mcp-fg-2);
  margin: 0;
}

.fmstr-cmp-lfm-api-mcp__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--fmstr-cmp-lfm-api-mcp-space-5);
  align-items: stretch;
}

.fmstr-cmp-lfm-api-mcp__card {
  background: var(--fmstr-cmp-lfm-api-mcp-bg-card);
  border: 1px solid var(--fmstr-cmp-lfm-api-mcp-border);
  border-radius: var(--fmstr-cmp-lfm-api-mcp-r-2xl);
  padding: var(--fmstr-cmp-lfm-api-mcp-space-8);
  display: flex;
  flex-direction: column;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;
}
.fmstr-cmp-lfm-api-mcp__card:hover {
  border-color: var(--fmstr-cmp-lfm-api-mcp-violet-300);
  box-shadow: var(--fmstr-cmp-lfm-api-mcp-shadow-md);
}

.fmstr-cmp-lfm-api-mcp__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--fmstr-cmp-lfm-api-mcp-r-lg);
  background: var(--fmstr-cmp-lfm-api-mcp-bg-tint);
  color: var(--fmstr-cmp-lfm-api-mcp-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fmstr-cmp-lfm-api-mcp-space-5);
  flex-shrink: 0;
}

.fmstr-cmp-lfm-api-mcp__badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-lfm-api-mcp-violet-500);
  color: #ffffff;
  border-radius: var(--fmstr-cmp-lfm-api-mcp-r-md);
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-xs);
  font-weight: var(--fmstr-cmp-lfm-api-mcp-fw-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-lfm-api-mcp-space-3);
  align-self: flex-start;
}
.fmstr-cmp-lfm-api-mcp__badge--alt {
  background: var(--fmstr-cmp-lfm-api-mcp-bg-tint);
  color: var(--fmstr-cmp-lfm-api-mcp-violet-600);
}

.fmstr-cmp-lfm-api-mcp__card-title {
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-xl);
  line-height: var(--fmstr-cmp-lfm-api-mcp-lh-xl);
  font-weight: var(--fmstr-cmp-lfm-api-mcp-fw-semibold);
  letter-spacing: -0.01em;
  color: var(--fmstr-cmp-lfm-api-mcp-fg-1);
  margin: 0 0 var(--fmstr-cmp-lfm-api-mcp-space-4);
}

.fmstr-cmp-lfm-api-mcp__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fmstr-cmp-lfm-api-mcp-space-2);
  margin-bottom: var(--fmstr-cmp-lfm-api-mcp-space-4);
}

.fmstr-cmp-lfm-api-mcp__chip {
  display: inline-block;
  padding: 4px 10px;
  background: var(--fmstr-cmp-lfm-api-mcp-bg-chip);
  color: var(--fmstr-cmp-lfm-api-mcp-fg-strong);
  border-radius: var(--fmstr-cmp-lfm-api-mcp-r-md);
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-sm);
  font-weight: var(--fmstr-cmp-lfm-api-mcp-fw-semibold);
  line-height: 20px;
}

.fmstr-cmp-lfm-api-mcp__body {
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-md);
  line-height: var(--fmstr-cmp-lfm-api-mcp-lh-md);
  color: var(--fmstr-cmp-lfm-api-mcp-fg-2);
  margin: 0 0 var(--fmstr-cmp-lfm-api-mcp-space-5);
  flex: 1 1 auto;
}

.fmstr-cmp-lfm-api-mcp__cta {
  color: var(--fmstr-cmp-lfm-api-mcp-violet-600);
  font-weight: var(--fmstr-cmp-lfm-api-mcp-fw-semibold);
  font-size: var(--fmstr-cmp-lfm-api-mcp-fs-sm);
  text-decoration: none;
  align-self: flex-start;
}
.fmstr-cmp-lfm-api-mcp__cta:hover {
  text-decoration: underline;
  color: var(--fmstr-cmp-lfm-api-mcp-violet-600) !important;
}

@media (max-width: 760px) {
  .fmstr-cmp-lfm-api-mcp {
    padding: var(--fmstr-cmp-lfm-api-mcp-space-12) var(--fmstr-cmp-lfm-api-mcp-space-4);
  }
  .fmstr-cmp-lfm-api-mcp__title {
    font-size: var(--fmstr-cmp-lfm-api-mcp-fs-2xl);
    line-height: 32px;
  }
  .fmstr-cmp-lfm-api-mcp__intro {
    font-size: var(--fmstr-cmp-lfm-api-mcp-fs-md);
    line-height: var(--fmstr-cmp-lfm-api-mcp-lh-md);
  }
  .fmstr-cmp-lfm-api-mcp__grid {
    grid-template-columns: 1fr;
  }
  .fmstr-cmp-lfm-api-mcp__card {
    padding: var(--fmstr-cmp-lfm-api-mcp-space-6);
  }
}

.fmstr-cmp-lfm-privacy-data-ownership {
  --fmstr-cmp-lfm-privacy-data-ownership-bg-section: #0f0921;
  --fmstr-cmp-lfm-privacy-data-ownership-bg-glow: radial-gradient(
    ellipse 900px 600px at 95% 0%,
    rgba(127, 86, 217, 0.45) 0%,
    rgba(100, 52, 208, 0.15) 30%,
    transparent 65%
  );
  --fmstr-cmp-lfm-privacy-data-ownership-bg-card: rgba(255, 255, 255, 0.04);
  --fmstr-cmp-lfm-privacy-data-ownership-bg-card-glow: radial-gradient(
    ellipse 500px 400px at 90% 5%,
    rgba(127, 86, 217, 0.3) 0%,
    transparent 60%
  );
  --fmstr-cmp-lfm-privacy-data-ownership-bg-pill: rgba(255, 255, 255, 0.08);
  --fmstr-cmp-lfm-privacy-data-ownership-fg-eyebrow: #bda6ff;
  --fmstr-cmp-lfm-privacy-data-ownership-fg-link: #bda6ff;
  --fmstr-cmp-lfm-privacy-data-ownership-fg-link-hover: #ffffff;
  --fmstr-cmp-lfm-privacy-data-ownership-fs-xs: 12px;
  --fmstr-cmp-lfm-privacy-data-ownership-fs-sm: 14px;
  --fmstr-cmp-lfm-privacy-data-ownership-fs-md: 16px;
  --fmstr-cmp-lfm-privacy-data-ownership-fs-lg: 18px;
  --fmstr-cmp-lfm-privacy-data-ownership-fs-2xl: 24px;
  --fmstr-cmp-lfm-privacy-data-ownership-fs-3xl: 32px;
  --fmstr-cmp-lfm-privacy-data-ownership-fw-semibold: 600;
  --fmstr-cmp-lfm-privacy-data-ownership-fw-bold: 700;
  --fmstr-cmp-lfm-privacy-data-ownership-lh-md: 24px;
  --fmstr-cmp-lfm-privacy-data-ownership-lh-lg: 28px;
  --fmstr-cmp-lfm-privacy-data-ownership-lh-2xl: 32px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-1: 4px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-2: 8px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-3: 12px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-4: 16px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-5: 20px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-6: 24px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-7: 28px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-8: 32px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-12: 48px;
  --fmstr-cmp-lfm-privacy-data-ownership-space-16: 64px;
  --fmstr-cmp-lfm-privacy-data-ownership-r-2xl: 16px;
  --fmstr-cmp-lfm-privacy-data-ownership-r-full: 9999px;

  background: transparent;
  padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-12) var(--fmstr-cmp-lfm-privacy-data-ownership-space-6);
  font-family:
    'Inter',
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.fmstr-cmp-lfm-privacy-data-ownership *,
.fmstr-cmp-lfm-privacy-data-ownership *::before,
.fmstr-cmp-lfm-privacy-data-ownership *::after {
  box-sizing: border-box;
}

.fmstr-cmp-lfm-privacy-data-ownership__container {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  background-color: var(--fmstr-cmp-lfm-privacy-data-ownership-bg-section);
  background-image: var(--fmstr-cmp-lfm-privacy-data-ownership-bg-glow);
  border-radius: 28px;
  padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-12);
  overflow: hidden;
}

.fmstr-cmp-lfm-privacy-data-ownership__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--fmstr-cmp-lfm-privacy-data-ownership-space-12);
  align-items: center;
}

.fmstr-cmp-lfm-privacy-data-ownership__eyebrow {
  display: inline-block;
  padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-2) var(--fmstr-cmp-lfm-privacy-data-ownership-space-4);
  background: var(--fmstr-cmp-lfm-privacy-data-ownership-bg-pill);
  color: var(--fmstr-cmp-lfm-privacy-data-ownership-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-lfm-privacy-data-ownership-r-full);
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-xs);
  font-weight: var(--fmstr-cmp-lfm-privacy-data-ownership-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-lfm-privacy-data-ownership-space-5);
}

.fmstr-cmp-lfm-privacy-data-ownership__heading {
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-3xl);
  line-height: 40px;
  font-weight: var(--fmstr-cmp-lfm-privacy-data-ownership-fw-bold);
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-lfm-privacy-data-ownership-space-6);
}

.fmstr-cmp-lfm-privacy-data-ownership__body p {
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-md);
  line-height: var(--fmstr-cmp-lfm-privacy-data-ownership-lh-md);
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 var(--fmstr-cmp-lfm-privacy-data-ownership-space-4);
}
.fmstr-cmp-lfm-privacy-data-ownership__body p:last-child {
  margin-bottom: 0;
}

.fmstr-cmp-lfm-privacy-data-ownership__card {
  background-color: var(--fmstr-cmp-lfm-privacy-data-ownership-bg-card);
  background-image: var(--fmstr-cmp-lfm-privacy-data-ownership-bg-card-glow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--fmstr-cmp-lfm-privacy-data-ownership-r-2xl);
  padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-7);
  backdrop-filter: blur(8px);
}

.fmstr-cmp-lfm-privacy-data-ownership__pill {
  display: inline-block;
  padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-2) var(--fmstr-cmp-lfm-privacy-data-ownership-space-4);
  background: var(--fmstr-cmp-lfm-privacy-data-ownership-bg-pill);
  color: var(--fmstr-cmp-lfm-privacy-data-ownership-fg-eyebrow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--fmstr-cmp-lfm-privacy-data-ownership-r-full);
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-xs);
  font-weight: var(--fmstr-cmp-lfm-privacy-data-ownership-fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--fmstr-cmp-lfm-privacy-data-ownership-space-5);
}

.fmstr-cmp-lfm-privacy-data-ownership__quote {
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-lg);
  line-height: var(--fmstr-cmp-lfm-privacy-data-ownership-lh-lg);
  font-weight: var(--fmstr-cmp-lfm-privacy-data-ownership-fw-semibold);
  font-style: italic;
  color: #ffffff;
  margin: 0 0 var(--fmstr-cmp-lfm-privacy-data-ownership-space-5);
}

.fmstr-cmp-lfm-privacy-data-ownership__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 0 var(--fmstr-cmp-lfm-privacy-data-ownership-space-5);
}

.fmstr-cmp-lfm-privacy-data-ownership__cite {
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-sm);
  line-height: var(--fmstr-cmp-lfm-privacy-data-ownership-lh-md);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--fmstr-cmp-lfm-privacy-data-ownership-space-3);
}

.fmstr-cmp-lfm-privacy-data-ownership__links {
  display: flex;
  gap: var(--fmstr-cmp-lfm-privacy-data-ownership-space-4);
  flex-wrap: wrap;
}

.fmstr-cmp-lfm-privacy-data-ownership__links a {
  color: var(--fmstr-cmp-lfm-privacy-data-ownership-fg-link);
  font-weight: var(--fmstr-cmp-lfm-privacy-data-ownership-fw-semibold);
  font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-sm);
  text-decoration: none;
}

.fmstr-cmp-lfm-privacy-data-ownership__links a:hover {
  color: var(--fmstr-cmp-lfm-privacy-data-ownership-fg-link-hover);
  text-decoration: underline;
}

@media (max-width: 760px) {
  .fmstr-cmp-lfm-privacy-data-ownership {
    padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-8) var(--fmstr-cmp-lfm-privacy-data-ownership-space-4);
  }
  .fmstr-cmp-lfm-privacy-data-ownership__container {
    padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-7);
    border-radius: 20px;
  }
  .fmstr-cmp-lfm-privacy-data-ownership__inner {
    grid-template-columns: 1fr;
    gap: var(--fmstr-cmp-lfm-privacy-data-ownership-space-8);
  }
  .fmstr-cmp-lfm-privacy-data-ownership__heading {
    font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-2xl);
    line-height: var(--fmstr-cmp-lfm-privacy-data-ownership-lh-2xl);
  }
  .fmstr-cmp-lfm-privacy-data-ownership__quote {
    font-size: var(--fmstr-cmp-lfm-privacy-data-ownership-fs-md);
    line-height: var(--fmstr-cmp-lfm-privacy-data-ownership-lh-md);
  }
  .fmstr-cmp-lfm-privacy-data-ownership__card {
    padding: var(--fmstr-cmp-lfm-privacy-data-ownership-space-6);
  }
}

.fmstr-cmp-lfm-feat {
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
  overflow-x: hidden;
}
.fmstr-cmp-lfm-feat *,
.fmstr-cmp-lfm-feat *::before,
.fmstr-cmp-lfm-feat *::after {
  box-sizing: border-box;
}
.fmstr-cmp-lfm-feat__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-lfm-feat__header {
  margin: 0 auto 40px;
  max-width: 760px;
  text-align: center;
}
.fmstr-cmp-lfm-feat__h2 {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-feat__sub {
  color: var(--c-fg-2);
  font-size: 17px;
  line-height: 1.6;
  margin: 0;
}
.fmstr-cmp-lfm-feat__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-width: 0;
}
.fmstr-cmp-lfm-feat__card {
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
.fmstr-cmp-lfm-feat__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  transform: translateY(-2px);
}
.fmstr-cmp-lfm-feat__icon {
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
.fmstr-cmp-lfm-feat__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-feat__body {
  font-size: 15px;
  line-height: 1.55;
  color: var(--c-fg-2);
  margin: 0;
}
@media (max-width: 900px) {
  .fmstr-cmp-lfm-feat__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-lfm-feat {
    padding: 48px 16px;
  }
  .fmstr-cmp-lfm-feat__grid {
    grid-template-columns: 1fr;
  }
}

.fmstr-cmp-lfm-more-tools a {
  text-decoration: none !important;
  color: inherit !important;
}
.fmstr-cmp-lfm-more-tools {
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
  overflow-x: hidden;
}
.fmstr-cmp-lfm-more-tools *,
.fmstr-cmp-lfm-more-tools *::before,
.fmstr-cmp-lfm-more-tools *::after {
  box-sizing: border-box;
}
.fmstr-cmp-lfm-more-tools__inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  min-width: 0;
}
.fmstr-cmp-lfm-more-tools__heading {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 0 40px;
  color: var(--c-fg-1);
}
.fmstr-cmp-lfm-more-tools__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-width: 0;
}
.fmstr-cmp-lfm-more-tools__card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}
.fmstr-cmp-lfm-more-tools__card:hover {
  border-color: #9777e0;
  box-shadow: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  transform: translateY(-2px);
}
.fmstr-cmp-lfm-more-tools__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  display: grid;
  place-items: center;
  color: var(--c-violet-600);
}
.fmstr-cmp-lfm-more-tools__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--c-fg-1) !important;
}
.fmstr-cmp-lfm-more-tools__desc {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: var(--c-fg-2) !important;
}
@media (max-width: 900px) {
  .fmstr-cmp-lfm-more-tools__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .fmstr-cmp-lfm-more-tools {
    padding: 48px 16px;
  }
  .fmstr-cmp-lfm-more-tools__grid {
    grid-template-columns: 1fr;
  }
}
</style>
