<template>
  <div>
    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-far-hero" aria-labelledby="fmstr-cmp-far-hero-h1">
            <div class="fmstr-cmp-far-hero__container">
              <div class="fmstr-cmp-far-hero__copy">
                <span class="fmstr-cmp-far-hero__badge">
                  <span class="fmstr-cmp-far-hero__badge-dot" aria-hidden="true">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  Business plan. No Zapier. No code.
                </span>
                <h1 class="fmstr-cmp-far-hero__h1" id="fmstr-cmp-far-hero-h1">
                  Recover abandoned forms before they cost you the lead
                </h1>
                <p class="fmstr-cmp-far-hero__sub">
                  Autosave every partial submission. Send the reminder. Bring users back to finish what they started,
                  without writing a single line of automation.
                </p>
                <div class="fmstr-cmp-far-hero__ctas">
                  <a class="fmstr-cmp-far-hero__cta-primary" href="https://app.formester.com/users/sign_up">
                    Start recovering abandoned forms
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a class="fmstr-cmp-far-hero__cta-secondary" href="#how-it-works">See the 90-second demo</a>
                </div>
                <div class="fmstr-cmp-far-hero__trust">
                  <span class="fmstr-cmp-far-hero__trust-dot" aria-hidden="true"></span>
                  Trusted by 56,000+ teams to capture leads they would have lost
                </div>
              </div>

              <div class="fmstr-cmp-far-hero__visual" aria-hidden="true">
                <div class="fmstr-cmp-far-hero__browser">
                  <div class="fmstr-cmp-far-hero__browser-bar">
                    <span class="fmstr-cmp-far-hero__browser-dot"></span>
                    <span class="fmstr-cmp-far-hero__browser-dot"></span>
                    <span class="fmstr-cmp-far-hero__browser-dot"></span>
                    <span class="fmstr-cmp-far-hero__browser-url">yourdomain.com/apply</span>
                  </div>
                  <div class="fmstr-cmp-far-hero__form">
                    <div class="fmstr-cmp-far-hero__form-title">
                      <span class="fmstr-cmp-far-hero__form-title-text">Senior Engineer · Application</span>
                      <span class="fmstr-cmp-far-hero__autosave">
                        <span class="fmstr-cmp-far-hero__autosave-pulse"></span>
                        Autosaved
                      </span>
                    </div>
                    <div class="fmstr-cmp-far-hero__field">
                      <span class="fmstr-cmp-far-hero__field-label">Full name</span>
                      <span class="fmstr-cmp-far-hero__field-input fmstr-cmp-far-hero__field-input--filled"
                        >Maya Patel</span
                      >
                    </div>
                    <div class="fmstr-cmp-far-hero__field">
                      <span class="fmstr-cmp-far-hero__field-label">Work email</span>
                      <span class="fmstr-cmp-far-hero__field-input fmstr-cmp-far-hero__field-input--filled"
                        >maya@northwind.co</span
                      >
                    </div>
                    <div class="fmstr-cmp-far-hero__field">
                      <span class="fmstr-cmp-far-hero__field-label">Years of experience</span>
                      <span
                        class="fmstr-cmp-far-hero__field-input fmstr-cmp-far-hero__field-input--filled fmstr-cmp-far-hero__field-input--cursor"
                        >7</span
                      >
                    </div>
                    <div class="fmstr-cmp-far-hero__field">
                      <span class="fmstr-cmp-far-hero__field-label">Portfolio link</span>
                      <span class="fmstr-cmp-far-hero__field-input fmstr-cmp-far-hero__field-input--empty"
                        >https://</span
                      >
                    </div>
                    <div class="fmstr-cmp-far-hero__progress">
                      <span>3 of 5 fields</span>
                      <span class="fmstr-cmp-far-hero__progress-bar"
                        ><span class="fmstr-cmp-far-hero__progress-fill"></span
                      ></span>
                      <span>60%</span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-far-hero__reminder">
                  <div class="fmstr-cmp-far-hero__reminder-from">
                    <span class="fmstr-cmp-far-hero__reminder-avatar">N</span>
                    <span>Northwind Careers · 2 days later</span>
                  </div>
                  <div class="fmstr-cmp-far-hero__reminder-subj">Your Senior Engineer application is almost done</div>
                  <div class="fmstr-cmp-far-hero__reminder-body">
                    Two fields left: portfolio link and notice period. Pick up where you left off.
                  </div>
                  <span class="fmstr-cmp-far-hero__reminder-cta">Finish application</span>
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
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-far-cost" aria-labelledby="fmstr-cmp-far-cost-h2">
            <div class="fmstr-cmp-far-cost__container">
              <header class="fmstr-cmp-far-cost__header">
                <span class="fmstr-cmp-far-cost__eyebrow">The hidden conversion leak</span>
                <h2 class="fmstr-cmp-far-cost__h2" id="fmstr-cmp-far-cost-h2">
                  67% of users who start a form never finish it
                </h2>
                <p class="fmstr-cmp-far-cost__sub">
                  Every form-builder ships a high-converting top-of-funnel and hopes for the best. Most never measure
                  what happens between page-load and submit.
                </p>
              </header>

              <div class="fmstr-cmp-far-cost__stat-wrap">
                <div class="fmstr-cmp-far-cost__stat-big">25%</div>
                <div class="fmstr-cmp-far-cost__stat-meta">
                  <span class="fmstr-cmp-far-cost__stat-label">Past 11 fields</span>
                  <span class="fmstr-cmp-far-cost__stat-body"
                    >of starters drop off before the second page on long forms.</span
                  >
                </div>
              </div>

              <div class="fmstr-cmp-far-cost__body">
                <p>
                  That gap is form abandonment. A user enters real intent, types into the first few fields, hits
                  friction, and leaves. No record, no follow-up, no retry. The lead is gone before it ever entered your
                  CRM.
                </p>
                <p>
                  For long forms (job applications, mortgage intake, multi-step registration), the abandonment number
                  climbs.
                  <a href="https://cxl.com/blog/form-design/"
                    >CXL benchmarks show that forms with more than 11 fields lose 1 in 4 users</a
                  >
                  before the second page. The fix is not to make every form shorter.
                  <strong>The fix is to capture what users have already typed, then bring them back to finish.</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-far-why" aria-labelledby="fmstr-cmp-far-why-h2">
            <div class="fmstr-cmp-far-why__container">
              <header class="fmstr-cmp-far-why__header">
                <h2 class="fmstr-cmp-far-why__h2" id="fmstr-cmp-far-why-h2">
                  The five things that cause form abandonment
                </h2>
                <p class="fmstr-cmp-far-why__sub">
                  Diagnose the leak before you patch it. Each reason maps to a fix you can ship today.
                </p>
              </header>

              <div class="fmstr-cmp-far-why__grid">
                <article class="fmstr-cmp-far-why__card">
                  <span class="fmstr-cmp-far-why__num" aria-hidden="true">1</span>
                  <h3 class="fmstr-cmp-far-why__h3">Form length</h3>
                  <p class="fmstr-cmp-far-why__body">
                    Every additional field reduces completion rate. Past 11 fields, you lose 25% of starters. Past 20,
                    you lose half. Most teams add fields defensively ("just in case sales needs this"); the cost shows
                    up as silently abandoned forms.
                  </p>
                </article>

                <article class="fmstr-cmp-far-why__card">
                  <span class="fmstr-cmp-far-why__num" aria-hidden="true">2</span>
                  <h3 class="fmstr-cmp-far-why__h3">Page-load lag</h3>
                  <p class="fmstr-cmp-far-why__body">
                    If your form takes more than 3 seconds to render,
                    <a
                      href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/page-load-time-statistics/"
                      >40% of users bounce before the first field</a
                    >. This is a CDN problem more than a form problem, but the form is what gets blamed.
                  </p>
                </article>

                <article class="fmstr-cmp-far-why__card">
                  <span class="fmstr-cmp-far-why__num" aria-hidden="true">3</span>
                  <h3 class="fmstr-cmp-far-why__h3">Mobile friction</h3>
                  <p class="fmstr-cmp-far-why__body">
                    Tap targets too small, dropdowns that do not render right, autofocus issues. Mobile form abandonment
                    runs 2x higher than desktop on the same form. If your form looks fine on desktop but you have not
                    tested on a mid-tier Android, you are bleeding leads.
                  </p>
                </article>

                <article class="fmstr-cmp-far-why__card">
                  <span class="fmstr-cmp-far-why__num" aria-hidden="true">4</span>
                  <h3 class="fmstr-cmp-far-why__h3">Field-level friction</h3>
                  <p class="fmstr-cmp-far-why__body">
                    Asking for date of birth as three separate dropdowns. Requiring a phone number with strict format
                    rules. Forcing a password before email confirmation. These are individual fields that each cost
                    around 5% to 10% of users.
                  </p>
                </article>

                <article class="fmstr-cmp-far-why__card">
                  <span class="fmstr-cmp-far-why__num" aria-hidden="true">5</span>
                  <h3 class="fmstr-cmp-far-why__h3">Trust signals missing</h3>
                  <p class="fmstr-cmp-far-why__body">
                    No SSL badge, no privacy callout, no plan or payment clarity. Users abandon at the field where they
                    would be giving you data they consider sensitive (SSN, salary, financial info). The fix is rarely
                    the form itself; it is the signals around it.
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
          <section class="fmstr-cmp-far-hiw" id="how-it-works" aria-labelledby="fmstr-cmp-far-hiw-h2">
            <div class="fmstr-cmp-far-hiw__container">
              <header class="fmstr-cmp-far-hiw__header">
                <h2 class="fmstr-cmp-far-hiw__h2" id="fmstr-cmp-far-hiw-h2">
                  Three-step recovery: autosave, remind, resume
                </h2>
                <p class="fmstr-cmp-far-hiw__sub">
                  No Zapier. No webhooks. Autosave is on by default. The reminder is one toggle. The resume link works
                  on every device.
                </p>
              </header>

              <div class="fmstr-cmp-far-hiw__steps">
                <div class="fmstr-cmp-far-hiw__step">
                  <span class="fmstr-cmp-far-hiw__num" aria-hidden="true">1</span>
                  <div class="fmstr-cmp-far-hiw__copy">
                    <h3 class="fmstr-cmp-far-hiw__h3">Every keystroke gets saved</h3>
                    <p class="fmstr-cmp-far-hiw__body">
                      The moment a user types into the first field, Formester captures the partial submission. If they
                      close the tab, refresh the page, or lose connection, their progress is preserved. No "your form
                      will be lost" warning. No frustrated re-typing. Powered by
                      <a href="https://formester.com/features/partial-submissions/">Partial Submissions</a>, included on
                      the Business plan.
                    </p>
                  </div>
                  <div class="fmstr-cmp-far-hiw__visual" aria-hidden="true">
                    <div class="fmstr-cmp-far-hiw__field-row">
                      <span class="fmstr-cmp-far-hiw__field-label">Full name</span>
                      <span class="fmstr-cmp-far-hiw__field-val">
                        Maya Patel
                        <span class="fmstr-cmp-far-hiw__field-saved"
                          ><span class="fmstr-cmp-far-hiw__field-saved-dot"></span> Saved</span
                        >
                      </span>
                    </div>
                    <div class="fmstr-cmp-far-hiw__field-row">
                      <span class="fmstr-cmp-far-hiw__field-label">Work email</span>
                      <span class="fmstr-cmp-far-hiw__field-val">
                        maya@northwind.co
                        <span class="fmstr-cmp-far-hiw__field-saved"
                          ><span class="fmstr-cmp-far-hiw__field-saved-dot"></span> Saved</span
                        >
                      </span>
                    </div>
                    <div class="fmstr-cmp-far-hiw__field-row">
                      <span class="fmstr-cmp-far-hiw__field-label">Notice period (weeks)</span>
                      <span class="fmstr-cmp-far-hiw__field-val fmstr-cmp-far-hiw__field-val--active">
                        4
                        <span class="fmstr-cmp-far-hiw__field-saved"
                          ><span class="fmstr-cmp-far-hiw__field-saved-dot"></span> Saving…</span
                        >
                      </span>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-far-hiw__step">
                  <span class="fmstr-cmp-far-hiw__num" aria-hidden="true">2</span>
                  <div class="fmstr-cmp-far-hiw__copy">
                    <h3 class="fmstr-cmp-far-hiw__h3">A reminder lands in their inbox</h3>
                    <p class="fmstr-cmp-far-hiw__body">
                      If the email field is filled and the form is not submitted within your chosen window (24 hours, 3
                      days, 7 days), Formester sends an automated reminder. The email links to a pre-filled resume URL.
                      The user clicks, lands back on the form with their previous answers intact, and finishes. You
                      write the reminder copy once. Formester sends it on every qualifying abandonment.
                    </p>
                  </div>
                  <div class="fmstr-cmp-far-hiw__visual" aria-hidden="true">
                    <div class="fmstr-cmp-far-hiw__email-bar">
                      <span class="fmstr-cmp-far-hiw__email-avatar">N</span>
                      <div class="fmstr-cmp-far-hiw__email-from">
                        <span class="fmstr-cmp-far-hiw__email-from-name">Northwind Careers</span>
                        <span>to maya · 2 days later</span>
                      </div>
                    </div>
                    <div class="fmstr-cmp-far-hiw__email-subj">Your Senior Engineer application is almost done</div>
                    <div class="fmstr-cmp-far-hiw__email-body">
                      Hi Maya, you got most of the way through. Two fields left: portfolio link and notice period.
                      Here's the link to finish.
                    </div>
                    <span class="fmstr-cmp-far-hiw__email-cta">Finish application →</span>
                  </div>
                </div>

                <div class="fmstr-cmp-far-hiw__step">
                  <span class="fmstr-cmp-far-hiw__num" aria-hidden="true">3</span>
                  <div class="fmstr-cmp-far-hiw__copy">
                    <h3 class="fmstr-cmp-far-hiw__h3">They finish where they left off</h3>
                    <p class="fmstr-cmp-far-hiw__body">
                      The resume link opens the form with every field they previously entered already populated. They
                      see exactly where they stopped. No re-introduction, no "please re-enter your details." They
                      complete the last few fields, hit submit, and the response lands in your usual results view, same
                      as any other submission.
                    </p>
                  </div>
                  <div class="fmstr-cmp-far-hiw__visual" aria-hidden="true">
                    <div class="fmstr-cmp-far-hiw__resume-banner">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      Welcome back, Maya. Picking up where you left off.
                    </div>
                    <div class="fmstr-cmp-far-hiw__field-row">
                      <span class="fmstr-cmp-far-hiw__field-label">Portfolio link</span>
                      <span class="fmstr-cmp-far-hiw__field-val fmstr-cmp-far-hiw__field-val--active"
                        >maya.dev/work</span
                      >
                    </div>
                    <div class="fmstr-cmp-far-hiw__field-row">
                      <span class="fmstr-cmp-far-hiw__field-label">Earliest start date</span>
                      <span class="fmstr-cmp-far-hiw__field-val">15 Jun 2026</span>
                    </div>
                    <div class="fmstr-cmp-far-hiw__progress">
                      <span>5 of 5</span>
                      <span class="fmstr-cmp-far-hiw__progress-bar"
                        ><span class="fmstr-cmp-far-hiw__progress-fill" style="width: 100%"></span
                      ></span>
                      <span>Submit</span>
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
          <section class="fmstr-cmp-far-doa" aria-labelledby="fmstr-cmp-far-doa-h2">
            <div class="fmstr-cmp-far-doa__container">
              <header class="fmstr-cmp-far-doa__header">
                <span class="fmstr-cmp-far-doa__eyebrow">Recovery plus diagnosis</span>
                <h2 class="fmstr-cmp-far-doa__h2" id="fmstr-cmp-far-doa-h2">
                  See exactly where users drop off, then fix the field that is killing the form
                </h2>
                <p class="fmstr-cmp-far-doa__sub">
                  Recovery brings users back. Drop-off analysis tells you which field is losing them in the first place,
                  so you can fix the form, not just the funnel.
                </p>
              </header>

              <div class="fmstr-cmp-far-doa__grid">
                <article class="fmstr-cmp-far-doa__card">
                  <h3 class="fmstr-cmp-far-doa__h3">Field-level drop-off map</h3>
                  <p class="fmstr-cmp-far-doa__body">
                    Every field on your form gets a completion percentage. The drop from "field 4 to field 5" tells you
                    exactly where users tap out. The single highest-friction field is flagged at the top so you know
                    what to fix first.
                  </p>
                  <div class="fmstr-cmp-far-doa__visual" aria-hidden="true">
                    <div class="fmstr-cmp-far-doa__bars">
                      <div class="fmstr-cmp-far-doa__bar-row">
                        <div class="fmstr-cmp-far-doa__bar-label">
                          Full name
                          <span class="fmstr-cmp-far-doa__bar-track"
                            ><span
                              class="fmstr-cmp-far-doa__bar-fill fmstr-cmp-far-doa__bar-fill--good"
                              style="width: 98%"
                            ></span
                          ></span>
                        </div>
                        <span class="fmstr-cmp-far-doa__bar-pct">98%</span>
                      </div>
                      <div class="fmstr-cmp-far-doa__bar-row">
                        <div class="fmstr-cmp-far-doa__bar-label">
                          Work email
                          <span class="fmstr-cmp-far-doa__bar-track"
                            ><span
                              class="fmstr-cmp-far-doa__bar-fill fmstr-cmp-far-doa__bar-fill--good"
                              style="width: 91%"
                            ></span
                          ></span>
                        </div>
                        <span class="fmstr-cmp-far-doa__bar-pct">91%</span>
                      </div>
                      <div class="fmstr-cmp-far-doa__bar-row">
                        <div class="fmstr-cmp-far-doa__bar-label">
                          Salary range <span class="fmstr-cmp-far-doa__bar-flag">Killer</span>
                          <span class="fmstr-cmp-far-doa__bar-track"
                            ><span
                              class="fmstr-cmp-far-doa__bar-fill fmstr-cmp-far-doa__bar-fill--bad"
                              style="width: 42%"
                            ></span
                          ></span>
                        </div>
                        <span class="fmstr-cmp-far-doa__bar-pct">42%</span>
                      </div>
                      <div class="fmstr-cmp-far-doa__bar-row">
                        <div class="fmstr-cmp-far-doa__bar-label">
                          Portfolio link
                          <span class="fmstr-cmp-far-doa__bar-track"
                            ><span
                              class="fmstr-cmp-far-doa__bar-fill fmstr-cmp-far-doa__bar-fill--ok"
                              style="width: 64%"
                            ></span
                          ></span>
                        </div>
                        <span class="fmstr-cmp-far-doa__bar-pct">64%</span>
                      </div>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-far-doa__card">
                  <h3 class="fmstr-cmp-far-doa__h3">Device and source filters</h3>
                  <p class="fmstr-cmp-far-doa__body">
                    Toggle desktop, mobile, and tablet to see if the drop is mobile-specific (often a dropdown or date
                    picker is the culprit). Filter by traffic source to see if paid clicks abandon differently than
                    organic.
                  </p>
                  <div class="fmstr-cmp-far-doa__visual" aria-hidden="true">
                    <div class="fmstr-cmp-far-doa__tabs">
                      <span class="fmstr-cmp-far-doa__tab">Desktop</span>
                      <span class="fmstr-cmp-far-doa__tab fmstr-cmp-far-doa__tab--active">Mobile</span>
                      <span class="fmstr-cmp-far-doa__tab">Tablet</span>
                    </div>
                    <div class="fmstr-cmp-far-doa__split">
                      <div class="fmstr-cmp-far-doa__metric">
                        <div class="fmstr-cmp-far-doa__metric-val">28%</div>
                        <div class="fmstr-cmp-far-doa__metric-label">Mobile finish</div>
                      </div>
                      <div class="fmstr-cmp-far-doa__metric">
                        <div class="fmstr-cmp-far-doa__metric-val">61%</div>
                        <div class="fmstr-cmp-far-doa__metric-label">Desktop finish</div>
                      </div>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-far-doa__card">
                  <h3 class="fmstr-cmp-far-doa__h3">Trend over time</h3>
                  <p class="fmstr-cmp-far-doa__body">
                    Field-level drop-off moves week to week. A change in form copy, a new tracking pixel, or a
                    third-party script can spike abandonment on a single field. The trend view surfaces the regression
                    the day it starts, not a month later in a quarterly review.
                  </p>
                  <div class="fmstr-cmp-far-doa__visual" aria-hidden="true">
                    <svg class="fmstr-cmp-far-doa__spark" viewBox="0 0 240 70" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="far-doa-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#7f56d9" stop-opacity="0.32"></stop>
                          <stop offset="100%" stop-color="#7f56d9" stop-opacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,38 L30,34 L60,40 L90,36 L120,42 L150,48 L180,54 L210,62 L240,66 L240,70 L0,70 Z"
                        fill="url(#far-doa-grad)"
                      ></path>
                      <path
                        d="M0,38 L30,34 L60,40 L90,36 L120,42 L150,48 L180,54 L210,62 L240,66"
                        fill="none"
                        stroke="#7f56d9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle cx="210" cy="62" r="3.5" fill="#f04438"></circle>
                    </svg>
                    <div class="fmstr-cmp-far-doa__spark-meta">
                      <span>Week 1</span>
                      <span class="fmstr-cmp-far-doa__spark-alert">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                          ></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        Spike on Jun 12
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <p class="fmstr-cmp-far-doa__caveat">
                Drop-off analysis pairs with
                <a href="https://formester.com/features/partial-submissions/">Partial Submissions</a>. The autosave
                captures the data; the analysis layer turns it into a fix.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-far-rem" aria-labelledby="fmstr-cmp-far-rem-h2">
            <div class="fmstr-cmp-far-rem__container">
              <header class="fmstr-cmp-far-rem__header">
                <h2 class="fmstr-cmp-far-rem__h2" id="fmstr-cmp-far-rem-h2">The anatomy of a reminder that converts</h2>
                <p class="fmstr-cmp-far-rem__sub">
                  A reminder email is not a marketing email. It is a transactional nudge to a user who has already shown
                  intent. Short, helpful, assumes the user wanted to finish.
                </p>
              </header>

              <div class="fmstr-cmp-far-rem__layout">
                <div class="fmstr-cmp-far-rem__parts">
                  <div class="fmstr-cmp-far-rem__part">
                    <span class="fmstr-cmp-far-rem__num" aria-hidden="true">1</span>
                    <div>
                      <h3 class="fmstr-cmp-far-rem__h3">Subject line that names the specific form</h3>
                      <p class="fmstr-cmp-far-rem__body">
                        Bad: "Don't forget!" Good: "Your job application is almost done." Naming the form reduces the
                        "is this spam?" hesitation.
                      </p>
                    </div>
                  </div>
                  <div class="fmstr-cmp-far-rem__part">
                    <span class="fmstr-cmp-far-rem__num" aria-hidden="true">2</span>
                    <div>
                      <h3 class="fmstr-cmp-far-rem__h3">One sentence of context</h3>
                      <p class="fmstr-cmp-far-rem__body">
                        "You started Job Application. Senior Engineer on Monday and got most of the way through. Here is
                        the link to finish."
                      </p>
                    </div>
                  </div>
                  <div class="fmstr-cmp-far-rem__part">
                    <span class="fmstr-cmp-far-rem__num" aria-hidden="true">3</span>
                    <div>
                      <h3 class="fmstr-cmp-far-rem__h3">The resume button</h3>
                      <p class="fmstr-cmp-far-rem__body">
                        Single primary CTA. Direct link to the pre-filled form. No alternate paths, no newsletter
                        signup, no social links.
                      </p>
                    </div>
                  </div>
                  <div class="fmstr-cmp-far-rem__part">
                    <span class="fmstr-cmp-far-rem__num" aria-hidden="true">4</span>
                    <div>
                      <h3 class="fmstr-cmp-far-rem__h3">The fields they have left</h3>
                      <p class="fmstr-cmp-far-rem__body">
                        A line that previews what is still to fill: "Last three fields: salary range, notice period,
                        portfolio link." Knowing the finish line is close lifts completion rate.
                      </p>
                    </div>
                  </div>
                  <p class="fmstr-cmp-far-rem__caveat">
                    <strong>Formester defaults:</strong> the reminder template ships with all four elements pre-filled.
                    Override copy if you want; do nothing if you do not.
                  </p>
                </div>

                <div class="fmstr-cmp-far-rem__email" aria-hidden="true">
                  <div class="fmstr-cmp-far-rem__email-window">
                    <span class="fmstr-cmp-far-rem__email-dot"></span>
                    <span class="fmstr-cmp-far-rem__email-dot"></span>
                    <span class="fmstr-cmp-far-rem__email-dot"></span>
                    <span class="fmstr-cmp-far-rem__email-app">Inbox · 1 new</span>
                  </div>
                  <div class="fmstr-cmp-far-rem__email-inner">
                    <div class="fmstr-cmp-far-rem__email-meta">
                      <span class="fmstr-cmp-far-rem__email-avatar">N</span>
                      <div class="fmstr-cmp-far-rem__email-sender">
                        <span class="fmstr-cmp-far-rem__email-sender-name">Northwind Careers</span>
                        <span>to maya@northwind.co · 2 days later</span>
                      </div>
                    </div>
                    <div class="fmstr-cmp-far-rem__email-subject">
                      <span class="fmstr-cmp-far-rem__email-tag">1</span>Your Senior Engineer application is almost done
                    </div>
                    <div class="fmstr-cmp-far-rem__email-context">
                      <span class="fmstr-cmp-far-rem__email-tag">2</span>You started Senior Engineer · Application on
                      Monday and got most of the way through. Here's the link to finish.
                    </div>
                    <a class="fmstr-cmp-far-rem__email-btn"
                      ><span
                        class="fmstr-cmp-far-rem__email-tag"
                        style="background: #fff; color: var(--c-violet-700); margin-right: 8px"
                        >3</span
                      >Finish application</a
                    >
                    <div class="fmstr-cmp-far-rem__email-left">
                      <span class="fmstr-cmp-far-rem__email-tag">4</span><strong>Last three fields:</strong> salary
                      range, notice period, portfolio link.
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
          <section class="fmstr-cmp-far-ch" aria-labelledby="fmstr-cmp-far-ch-h2">
            <div class="fmstr-cmp-far-ch__container">
              <header class="fmstr-cmp-far-ch__header">
                <h2 class="fmstr-cmp-far-ch__h2" id="fmstr-cmp-far-ch-h2">
                  Reach users on the channel they actually check
                </h2>
                <p class="fmstr-cmp-far-ch__sub">
                  Email is universal. SMS hits faster. WhatsApp delivers in markets where email open-rate is below 15%.
                </p>
              </header>

              <div class="fmstr-cmp-far-ch__grid">
                <article class="fmstr-cmp-far-ch__card">
                  <div class="fmstr-cmp-far-ch__logo-row">
                    <span class="fmstr-cmp-far-ch__logo fmstr-cmp-far-ch__logo--email" aria-hidden="true">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-far-ch__badge fmstr-cmp-far-ch__badge--live"
                      ><span class="fmstr-cmp-far-ch__badge-dot"></span>Live today</span
                    >
                  </div>
                  <h3 class="fmstr-cmp-far-ch__h3">Email reminder</h3>
                  <p class="fmstr-cmp-far-ch__body">
                    The default channel. 24-hour, 3-day, 7-day windows. Delivered from your own sender domain via
                    <a href="https://formester.com/features/smtp-integration/">SMTP Integration</a>. Tracked open +
                    click rates feed back into form analytics.
                  </p>
                </article>

                <article class="fmstr-cmp-far-ch__card">
                  <div class="fmstr-cmp-far-ch__logo-row">
                    <span class="fmstr-cmp-far-ch__logo fmstr-cmp-far-ch__logo--sms" aria-hidden="true">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-far-ch__badge fmstr-cmp-far-ch__badge--roadmap"
                      ><span class="fmstr-cmp-far-ch__badge-dot"></span>Roadmap</span
                    >
                  </div>
                  <h3 class="fmstr-cmp-far-ch__h3">SMS reminder</h3>
                  <p class="fmstr-cmp-far-ch__body">
                    For high-urgency forms (event registrations, appointment confirmations, urgent applications), SMS
                    hits faster than email. 30-character body, single link.
                  </p>
                </article>

                <article class="fmstr-cmp-far-ch__card">
                  <div class="fmstr-cmp-far-ch__logo-row">
                    <span class="fmstr-cmp-far-ch__logo fmstr-cmp-far-ch__logo--whatsapp" aria-hidden="true">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"
                        ></path>
                      </svg>
                    </span>
                    <span class="fmstr-cmp-far-ch__badge fmstr-cmp-far-ch__badge--roadmap"
                      ><span class="fmstr-cmp-far-ch__badge-dot"></span>Roadmap</span
                    >
                  </div>
                  <h3 class="fmstr-cmp-far-ch__h3">WhatsApp reminder</h3>
                  <p class="fmstr-cmp-far-ch__body">
                    In markets where WhatsApp is the dominant channel (India, Brazil, MENA, parts of LATAM), email
                    reminders underperform. WhatsApp reminders are in development.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <RawHtml :markup="c8_markup" :useContainer="false" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-far-uc" aria-labelledby="fmstr-cmp-far-uc-h2">
            <div class="fmstr-cmp-far-uc__container">
              <header class="fmstr-cmp-far-uc__header">
                <h2 class="fmstr-cmp-far-uc__h2" id="fmstr-cmp-far-uc-h2">Where this changes the funnel math</h2>
                <p class="fmstr-cmp-far-uc__sub">
                  Six form types where partial-submission recovery is worth more than every other optimization combined.
                </p>
              </header>

              <div class="fmstr-cmp-far-uc__grid">
                <article class="fmstr-cmp-far-uc__card">
                  <span class="fmstr-cmp-far-uc__icon" aria-hidden="true">
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
                        d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                      ></path>
                      <path d="M10 5h4v2h-4z" opacity=".2" fill="currentColor"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-far-uc__h3">Job applications</h3>
                  <p class="fmstr-cmp-far-uc__body">
                    The longest forms in any company. CV upload plus 12 fields plus custom screening questions. Without
                    recovery, 40% to 60% of starters never finish. Each recovered application is a candidate who
                    self-selected to apply at your company; the LTV is high.
                  </p>
                </article>

                <article class="fmstr-cmp-far-uc__card">
                  <span class="fmstr-cmp-far-uc__icon" aria-hidden="true">
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
                      <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                      <line x1="9" y1="4" x2="9" y2="20"></line>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-far-uc__h3">Multi-page intake forms</h3>
                  <p class="fmstr-cmp-far-uc__body">
                    Healthcare intake, legal intake, financial advisor onboarding. Users start on a desktop, walk away,
                    return on mobile. Without autosave, the return-on-mobile is what kills the funnel. With it, the
                    return picks up where it left off.
                  </p>
                </article>

                <article class="fmstr-cmp-far-uc__card">
                  <span class="fmstr-cmp-far-uc__icon" aria-hidden="true">
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
                      <path d="M3 9.5L12 3l9 6.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-far-uc__h3">Mortgage and loan applications</h3>
                  <p class="fmstr-cmp-far-uc__body">
                    Sensitive data (SSN, salary, employer history) makes users hesitate at specific fields. They abandon
                    at field 8, sleep on it, want to come back. The reminder is the difference between a returning user
                    and a lost lead. Pair with
                    <a href="https://formester.com/features/conditional-logic/">Conditional Logic</a> for risk-tier
                    routing.
                  </p>
                </article>

                <article class="fmstr-cmp-far-uc__card">
                  <span class="fmstr-cmp-far-uc__icon" aria-hidden="true">
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-far-uc__h3">Event registrations</h3>
                  <p class="fmstr-cmp-far-uc__body">
                    Multi-attendee registrations, paid tickets, dietary requirements, plus-one fields. RSVP forms hit a
                    friction wall when attendees pause to check with their plus-one. 24-hour reminders recover most of
                    them.
                  </p>
                </article>

                <article class="fmstr-cmp-far-uc__card">
                  <span class="fmstr-cmp-far-uc__icon" aria-hidden="true">
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
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-far-uc__h3">Surveys (long-form research)</h3>
                  <p class="fmstr-cmp-far-uc__body">
                    Academic studies, market research, NPS deep-dives. Anything over 15 questions sees 50%+ drop-off by
                    question 10. The reminder gives partial-completers a low-pressure path to finish, in their own time.
                  </p>
                </article>

                <article class="fmstr-cmp-far-uc__card">
                  <span class="fmstr-cmp-far-uc__icon" aria-hidden="true">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </span>
                  <h3 class="fmstr-cmp-far-uc__h3">Insurance quote forms</h3>
                  <p class="fmstr-cmp-far-uc__body">
                    Insurance quote requests are dense and high-friction. Most quote tools lose 70%+ at field 6.
                    Recovery flips quote forms from a one-shot bet to a two-touch funnel.
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
          <section class="fmstr-cmp-testimonials" aria-labelledby="fmstr-cmp-testimonials-h2">
            <div class="fmstr-cmp-testimonials__container">
              <header class="fmstr-cmp-testimonials__header">
                <span class="fmstr-cmp-testimonials__eyebrow">Testimonials</span>
                <h2 class="fmstr-cmp-testimonials__h2" id="fmstr-cmp-testimonials-h2">
                  What teams are saying about Formester
                </h2>
                <p class="fmstr-cmp-testimonials__sub">Real reviews from G2, Trustpilot, and Product Hunt.</p>
                <div class="fmstr-cmp-testimonials__agg" aria-label="Aggregate ratings">
                  <span class="fmstr-cmp-testimonials__agg-item">
                    <span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2">G2</span>
                    <span class="fmstr-cmp-testimonials__agg-rating">4.7</span>
                    <span class="fmstr-cmp-testimonials__agg-src">G2 (11 reviews)</span>
                  </span>
                  <span class="fmstr-cmp-testimonials__agg-divider"></span>
                  <span class="fmstr-cmp-testimonials__agg-item">
                    <span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp">★</span>
                    <span class="fmstr-cmp-testimonials__agg-rating">4.7</span>
                    <span class="fmstr-cmp-testimonials__agg-src">Trustpilot (24 reviews)</span>
                  </span>
                  <span class="fmstr-cmp-testimonials__agg-divider"></span>
                  <span class="fmstr-cmp-testimonials__agg-item">
                    <span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--ph">P</span>
                    <span class="fmstr-cmp-testimonials__agg-rating">5.0</span>
                    <span class="fmstr-cmp-testimonials__agg-src">Product Hunt</span>
                  </span>
                </div>
              </header>
            </div>

            <div class="fmstr-cmp-testimonials__tracks">
              <!-- Row 1: scrolls left -->
              <div class="fmstr-cmp-testimonials__track">
                <div class="fmstr-cmp-testimonials__row">
                  <!-- Karthik B. — G2 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester offers a ton of features and my developer loves using it to integrate to various
                      marketing pages. It's quick and easy to create using drag and drop. It allowed me to remove
                      branding unlike Typeform that has branding even in paid plans. Their support is top notch.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--violet">K</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Karthik B.</div>
                        <div class="fmstr-cmp-testimonials__role">Social Media Manager · B2C, SaaS, EdTech</div>
                      </div>
                    </div>
                  </article>

                  <!-- Trustpilot — Apr 21, 2026 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester brings together some amazing technology all in one easy to use tool. The AI form builder
                      makes things a breeze to set up and completed 75% of my build and then another 25% tweaking.
                      Combined with the AI agent workflow automation after forms are submitted, it's one amazing
                      package.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--green">V</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Verified Trustpilot reviewer</div>
                        <div class="fmstr-cmp-testimonials__role">April 2026</div>
                      </div>
                    </div>
                  </article>

                  <!-- Justin C. — G2 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Beautiful and easy to use. The templates and the floating button feature with easy-to-use
                      integration with Google Sheet is crazy. I was looking for a simple and beautiful form to put on my
                      website for free.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--blue">J</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Justin C.</div>
                        <div class="fmstr-cmp-testimonials__role">Online Private English Teacher</div>
                      </div>
                    </div>
                  </article>

                  <!-- Trustpilot — Judy, Apr 1, 2026 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      We were looking for a new platform for building quizzes for our educational program. This one has
                      not let us down. It has tons of features and is easy to use. The company is super responsive if
                      you have questions or need help with anything.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--orange">J</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Judy</div>
                        <div class="fmstr-cmp-testimonials__role">April 2026</div>
                      </div>
                    </div>
                  </article>

                  <!-- Deepika K. — G2 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="4.5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester form builder has lots of customisation options. It's very easy to generate online forms.
                      The UI is very attractive and easy to use. No prior experience is required to use it.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--pink">D</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Deepika K.</div>
                        <div class="fmstr-cmp-testimonials__role">Business Development Executive</div>
                      </div>
                    </div>
                  </article>

                  <!-- Duplicate set A for seamless loop -->
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester offers a ton of features and my developer loves using it to integrate to various
                      marketing pages. It's quick and easy to create using drag and drop. It allowed me to remove
                      branding unlike Typeform that has branding even in paid plans. Their support is top notch.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--violet">K</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Karthik B.</div>
                        <div class="fmstr-cmp-testimonials__role">Social Media Manager · B2C, SaaS, EdTech</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester brings together some amazing technology all in one easy to use tool. The AI form builder
                      makes things a breeze to set up and completed 75% of my build and then another 25% tweaking.
                      Combined with the AI agent workflow automation after forms are submitted, it's one amazing
                      package.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--green">V</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Verified Trustpilot reviewer</div>
                        <div class="fmstr-cmp-testimonials__role">April 2026</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Beautiful and easy to use. The templates and the floating button feature with easy-to-use
                      integration with Google Sheet is crazy. I was looking for a simple and beautiful form to put on my
                      website for free.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--blue">J</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Justin C.</div>
                        <div class="fmstr-cmp-testimonials__role">Online Private English Teacher</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      We were looking for a new platform for building quizzes for our educational program. This one has
                      not let us down. It has tons of features and is easy to use. The company is super responsive if
                      you have questions or need help with anything.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--orange">J</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Judy</div>
                        <div class="fmstr-cmp-testimonials__role">April 2026</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester form builder has lots of customisation options. It's very easy to generate online forms.
                      The UI is very attractive and easy to use. No prior experience is required to use it.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--pink">D</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Deepika K.</div>
                        <div class="fmstr-cmp-testimonials__role">Business Development Executive</div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <!-- Row 2: scrolls right -->
              <div class="fmstr-cmp-testimonials__track">
                <div class="fmstr-cmp-testimonials__row fmstr-cmp-testimonials__row--reverse">
                  <!-- Trustpilot — Feb 5, 2026 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester is an incredibly professional company. They are very helpful, they help solve any
                      problems quickly. At my request, features were enabled and changed in a short time, so I was able
                      to completely customize my Quote Form to my needs.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--violet">V</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Verified Trustpilot reviewer</div>
                        <div class="fmstr-cmp-testimonials__role">February 2026</div>
                      </div>
                    </div>
                  </article>

                  <!-- Guibril D. — G2 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="4.5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester solves the problem of complicated data collection by providing a quick tool to create
                      customized and automated forms. Ultra-fast form creation thanks to drag and drop.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--green">G</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Guibril D.</div>
                        <div class="fmstr-cmp-testimonials__role">Engineer · Renewables &amp; Environment</div>
                      </div>
                    </div>
                  </article>

                  <!-- Joo, Banghyun — Product Hunt -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--ph"
                          >P</span
                        >Product Hunt</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Great form and always good support. Easy to set up, easy to share, and the team behind it actually
                      responds when you need something.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--blue">B</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Banghyun Joo</div>
                        <div class="fmstr-cmp-testimonials__role">Dunoit</div>
                      </div>
                    </div>
                  </article>

                  <!-- Aashika S. — G2 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="4.5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      We are able to easily build so many forms for our daily business work. These are easy for sharing
                      too with our clients at one time instantly. There is also a feature for identifying if there is
                      any spam in the form filling process.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--orange">A</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Aashika S.</div>
                        <div class="fmstr-cmp-testimonials__role">Manager</div>
                      </div>
                    </div>
                  </article>

                  <!-- Trustpilot — Jan 28 -->
                  <article class="fmstr-cmp-testimonials__card">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars" aria-label="5 out of 5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Great support and the price-performance ratio is good. The team is quick to reply and the product
                      does exactly what it promises.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--pink">V</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Verified Trustpilot reviewer</div>
                        <div class="fmstr-cmp-testimonials__role">January 2026</div>
                      </div>
                    </div>
                  </article>

                  <!-- Duplicate set B for seamless loop -->
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester is an incredibly professional company. They are very helpful, they help solve any
                      problems quickly. At my request, features were enabled and changed in a short time, so I was able
                      to completely customize my Quote Form to my needs.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--violet">V</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Verified Trustpilot reviewer</div>
                        <div class="fmstr-cmp-testimonials__role">February 2026</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Formester solves the problem of complicated data collection by providing a quick tool to create
                      customized and automated forms. Ultra-fast form creation thanks to drag and drop.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--green">G</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Guibril D.</div>
                        <div class="fmstr-cmp-testimonials__role">Engineer · Renewables &amp; Environment</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--ph"
                          >P</span
                        >Product Hunt</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Great form and always good support. Easy to set up, easy to share, and the team behind it actually
                      responds when you need something.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--blue">B</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Banghyun Joo</div>
                        <div class="fmstr-cmp-testimonials__role">Dunoit</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--g2"
                          >G2</span
                        >G2</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      We are able to easily build so many forms for our daily business work. These are easy for sharing
                      too with our clients at one time instantly. There is also a feature for identifying if there is
                      any spam in the form filling process.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--orange">A</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Aashika S.</div>
                        <div class="fmstr-cmp-testimonials__role">Manager</div>
                      </div>
                    </div>
                  </article>
                  <article class="fmstr-cmp-testimonials__card" aria-hidden="true">
                    <div class="fmstr-cmp-testimonials__card-top">
                      <span class="fmstr-cmp-testimonials__stars"
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                        ><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
                          ></polygon></svg
                      ></span>
                      <span class="fmstr-cmp-testimonials__source"
                        ><span class="fmstr-cmp-testimonials__source-logo fmstr-cmp-testimonials__source-logo--tp"
                          >★</span
                        >Trustpilot</span
                      >
                    </div>
                    <p class="fmstr-cmp-testimonials__quote">
                      Great support and the price-performance ratio is good. The team is quick to reply and the product
                      does exactly what it promises.
                    </p>
                    <div class="fmstr-cmp-testimonials__foot">
                      <span class="fmstr-cmp-testimonials__avatar fmstr-cmp-testimonials__avatar--pink">V</span>
                      <div>
                        <div class="fmstr-cmp-testimonials__name">Verified Trustpilot reviewer</div>
                        <div class="fmstr-cmp-testimonials__role">January 2026</div>
                      </div>
                    </div>
                  </article>
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
          <section class="fmstr-cmp-far-faq" aria-labelledby="fmstr-cmp-far-faq-h2">
            <div class="fmstr-cmp-far-faq__container">
              <header class="fmstr-cmp-far-faq__header">
                <h2 class="fmstr-cmp-far-faq__h2" id="fmstr-cmp-far-faq-h2">Common questions</h2>
              </header>

              <div class="fmstr-cmp-far-faq__list">
                <details class="fmstr-cmp-far-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-far-faq__h3">Do users see anything different on the form itself?</h3>
                  </summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      No. The autosave is silent. There is no banner, no "your progress is saved" toast, no extra UI.
                      Users type, type, leave, and never know that what they typed was captured. The first thing they
                      see is the reminder email, which lands in their inbox at the window you set.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary><h3 class="fmstr-cmp-far-faq__h3">What counts as an "abandoned" submission?</h3></summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      Any form where a user typed into at least one field, did not click submit, and is past your chosen
                      reminder window (24h, 3d, or 7d). If they completed the email field, they get a reminder. If they
                      did not, the partial submission is still captured in your dashboard, but no email is sent.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-far-faq__h3">Can I see the partial submissions in my dashboard?</h3>
                  </summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      Yes. Every partial submission appears in your form's Results tab with a "Partial" badge and a
                      timestamp of last activity. You can review the field-by-field data, export it, or manually trigger
                      a follow-up.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary><h3 class="fmstr-cmp-far-faq__h3">Will this work with email-gated forms?</h3></summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      Yes, but it requires the email field to be early in the form (page 1, ideally first 3 fields). If
                      the user abandons before reaching the email field, Formester captures the partial submission but
                      cannot send a reminder. Plan field order with this in mind.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary><h3 class="fmstr-cmp-far-faq__h3">Is this GDPR-compliant?</h3></summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      Yes. Partial submissions are subject to the same data retention, deletion, and consent rules as
                      completed submissions. Users can request data deletion via the unsubscribe link or your standard
                      GDPR workflow. Formester is
                      <a href="https://formester.com/security/">GDPR, UK GDPR, and CCPA compliant</a>.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-far-faq__h3">What if the user does not want to be reminded?</h3>
                  </summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      Every reminder email includes a one-click opt-out. The user is added to your suppression list and
                      never receives another reminder for that form. The partial submission stays in your dashboard for
                      analytics; only the outreach stops.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary><h3 class="fmstr-cmp-far-faq__h3">Does the resume link expire?</h3></summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      The default is 30 days from the initial reminder. Past that, the link still works (the partial
                      submission is not deleted) but the user must re-enter their email to verify.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-far-faq__item">
                  <summary><h3 class="fmstr-cmp-far-faq__h3">How much does this cost?</h3></summary>
                  <div class="fmstr-cmp-far-faq__answer">
                    <p>
                      Form abandonment recovery sits on top of
                      <a href="https://formester.com/features/partial-submissions/">Partial Submissions</a>, which is
                      included on the Business plan and above. Email reminders, drop-off analysis, and the resume link
                      are all bundled with that plan tier. SMS and WhatsApp reminders are roadmap; pricing not yet set.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-far-cta" aria-labelledby="fmstr-cmp-far-cta-h2">
            <div class="fmstr-cmp-far-cta__container">
              <span class="fmstr-cmp-far-cta__eyebrow">
                <span class="fmstr-cmp-far-cta__eyebrow-dot" aria-hidden="true"></span>
                Business plan, no Zapier
              </span>

              <h2 class="fmstr-cmp-far-cta__h2" id="fmstr-cmp-far-cta-h2">Stop losing leads at field eight</h2>

              <p class="fmstr-cmp-far-cta__sub">
                Toggle autosave on your highest-volume form. Send the first reminder. Watch the completion rate move
                within the week.
              </p>

              <div class="fmstr-cmp-far-cta__ctas">
                <a class="fmstr-cmp-far-cta__cta-primary" href="https://app.formester.com/users/sign_up">
                  Start recovering abandoned forms
                  <svg
                    class="fmstr-cmp-far-cta__cta-arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a
                  class="fmstr-cmp-far-cta__cta-secondary"
                  href="https://formester.com/templates/job-application-form-2138/"
                  >See the reminder template</a
                >
              </div>

              <p class="fmstr-cmp-far-cta__meta">
                Included on the Business plan: autosave, email reminders, drop-off analysis, and the resume link.
              </p>

              <div class="fmstr-cmp-far-cta__stats">
                <div class="fmstr-cmp-far-cta__stat">
                  <span class="fmstr-cmp-far-cta__stat-value">60s</span>
                  <span class="fmstr-cmp-far-cta__stat-label">To turn on</span>
                </div>
                <div class="fmstr-cmp-far-cta__stat">
                  <span class="fmstr-cmp-far-cta__stat-value">3</span>
                  <span class="fmstr-cmp-far-cta__stat-label">Reminder windows</span>
                </div>
                <div class="fmstr-cmp-far-cta__stat">
                  <span class="fmstr-cmp-far-cta__stat-value">0</span>
                  <span class="fmstr-cmp-far-cta__stat-label">Lines of code</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RawHtml from '@/components/strapi/RawHtml.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c1_title = []
const c1_logos = []
const c8_markup =
  '<div class="raw-html-embed">\u003Cstyle>\n/* host-link-override */\n.fmstr-cmp-far-set a { text-decoration: none !important; }\n\n.fmstr-cmp-far-set {\n--c-bg: #ffffff;\n--c-soft: #f9fafb;\n--c-tint: #f7f3ff;\n--c-edge: #e4d7ff;\n--c-fg-1: #101828;\n--c-fg-2: #475467;\n--c-fg-3: #697586;\n--c-violet-500: #7f56d9;\n--c-violet-600: #6941c6;\n--c-violet-700: #5b34b1;\n--c-green-500: #12b76a;\n--c-border: #eaecf0;\n--c-shadow-sm: 0 1px 3px rgba(16,24,40,.05), 0 1px 2px rgba(16,24,40,.03);\n--c-shadow-md: 0 4px 20px rgba(16,24,40,.06);\n\nbackground: var(--c-bg);\npadding: 88px 24px;\nfont-family: inherit;\noverflow-x: hidden;\ncolor: var(--c-fg-1);\n}\n.fmstr-cmp-far-set *, .fmstr-cmp-far-set *::before, .fmstr-cmp-far-set *::after { box-sizing: border-box; }\n.fmstr-cmp-far-set > *, .fmstr-cmp-far-set > * > * { min-width: 0; }\n\n.fmstr-cmp-far-set__container { max-width: 1180px; margin: 0 auto; }\n\n.fmstr-cmp-far-set__header {\nmax-width: 760px;\nmargin: 0 auto 48px;\ntext-align: center;\n}\n.fmstr-cmp-far-set__h2 {\nmargin: 0 0 14px;\nfont-size: clamp(28px, 3.6vw, 42px);\nline-height: 1.12;\nletter-spacing: -0.02em;\nfont-weight: 700;\ncolor: var(--c-fg-1);\n}\n.fmstr-cmp-far-set__sub {\nmargin: 0;\nfont-size: 17px;\nline-height: 1.6;\ncolor: var(--c-fg-2);\n}\n\n.fmstr-cmp-far-set__grid {\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 20px;\n}\n\n.fmstr-cmp-far-set__card {\ndisplay: flex;\nflex-direction: column;\ngap: 18px;\npadding: 28px;\nbackground: #ffffff;\nborder: 1px solid var(--c-border);\nborder-radius: 16px;\nbox-shadow: var(--c-shadow-sm);\n}\n\n.fmstr-cmp-far-set__num {\ndisplay: inline-flex;\nalign-items: center;\njustify-content: center;\nwidth: 36px;\nheight: 36px;\nborder-radius: 10px;\nbackground: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));\ncolor: #ffffff;\nfont-weight: 700;\nfont-size: 15px;\nflex-shrink: 0;\n}\n\n.fmstr-cmp-far-set__h3 {\nmargin: 0;\nfont-size: 18px;\nline-height: 1.3;\nfont-weight: 700;\ncolor: var(--c-fg-1);\n}\n.fmstr-cmp-far-set__body {\nmargin: 0;\nfont-size: 15px;\nline-height: 1.65;\ncolor: var(--c-fg-2);\n}\n\n.fmstr-cmp-far-set__visual {\nmargin-top: auto;\npadding: 14px;\nbackground: var(--c-soft);\nborder: 1px solid var(--c-border);\nborder-radius: 10px;\nfont-size: 12.5px;\n}\n\n/* Step 1: toggle */\n.fmstr-cmp-far-set__row {\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\ngap: 10px;\npadding: 8px 10px;\nbackground: #ffffff;\nborder: 1px solid var(--c-border);\nborder-radius: 8px;\n}\n.fmstr-cmp-far-set__row + .fmstr-cmp-far-set__row { margin-top: 6px; }\n.fmstr-cmp-far-set__row-label { font-size: 12px; color: var(--c-fg-1); font-weight: 500; }\n.fmstr-cmp-far-set__toggle {\nposition: relative;\nwidth: 32px;\nheight: 18px;\nbackground: var(--c-green-500);\nborder-radius: 9999px;\nflex-shrink: 0;\n}\n.fmstr-cmp-far-set__toggle::after {\ncontent: "";\nposition: absolute;\ntop: 2px;\nright: 2px;\nwidth: 14px;\nheight: 14px;\nborder-radius: 9999px;\nbackground: #ffffff;\nbox-shadow: 0 1px 2px rgba(0,0,0,.15);\n}\n.fmstr-cmp-far-set__toggle--off { background: #d0d5dd; }\n.fmstr-cmp-far-set__toggle--off::after { right: auto; left: 2px; }\n\n/* Step 2: pill choices */\n.fmstr-cmp-far-set__pills { display: flex; gap: 6px; flex-wrap: wrap; }\n.fmstr-cmp-far-set__pill {\npadding: 6px 10px;\nborder: 1px solid var(--c-border);\nborder-radius: 9999px;\nfont-size: 11.5px;\nfont-weight: 600;\ncolor: var(--c-fg-2);\nbackground: #ffffff;\n}\n.fmstr-cmp-far-set__pill--active {\nbackground: var(--c-violet-500);\nborder-color: var(--c-violet-500);\ncolor: #ffffff;\n}\n\n/* Step 3: editor preview */\n.fmstr-cmp-far-set__editor-tabs {\ndisplay: flex;\ngap: 4px;\nmargin-bottom: 8px;\n}\n.fmstr-cmp-far-set__editor-tab {\npadding: 5px 10px;\nborder-radius: 7px;\nfont-size: 11.5px;\nfont-weight: 600;\ncolor: var(--c-fg-3);\n}\n.fmstr-cmp-far-set__editor-tab--active { background: var(--c-tint); color: var(--c-violet-700); }\n.fmstr-cmp-far-set__editor-line {\ndisplay: flex;\nflex-direction: column;\ngap: 4px;\npadding: 8px 10px;\nbackground: #ffffff;\nborder: 1px solid var(--c-border);\nborder-radius: 7px;\nfont-family: ui-monospace, SFMono-Regular, Menlo, monospace;\nfont-size: 11px;\ncolor: var(--c-fg-1);\n}\n.fmstr-cmp-far-set__editor-var {\ncolor: var(--c-violet-700);\nfont-weight: 600;\n}\n\n.fmstr-cmp-far-set__cta-row {\nmargin-top: 40px;\ntext-align: center;\n}\n.fmstr-cmp-far-set__cta {\ndisplay: inline-flex;\nalign-items: center;\ngap: 8px;\npadding: 14px 22px;\nbackground: var(--c-violet-500) !important;\ncolor: #ffffff !important;\nborder-radius: 9999px;\nfont-size: 15.5px;\nfont-weight: 600;\nbox-shadow: 0 6px 16px rgba(127,86,217,.28);\n}\n.fmstr-cmp-far-set__cta:hover { background: var(--c-violet-600) !important; }\n\n@media (max-width: 1000px) {\n.fmstr-cmp-far-set__grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }\n}\n@media (max-width: 640px) {\n.fmstr-cmp-far-set { padding: 64px 16px; }\n.fmstr-cmp-far-set__card { padding: 22px; }\n}\n\u003C/style>\n\n<section class="fmstr-cmp-far-set" aria-labelledby="fmstr-cmp-far-set-h2">\n<div class="fmstr-cmp-far-set__container">\n\n<header class="fmstr-cmp-far-set__header">\n<h2 class="fmstr-cmp-far-set__h2" id="fmstr-cmp-far-set-h2">Turn it on in under 60 seconds</h2>\n<p class="fmstr-cmp-far-set__sub">No code. No external automation tool. One toggle in the form editor.</p>\n</header>\n\n<div class="fmstr-cmp-far-set__grid">\n\n<article class="fmstr-cmp-far-set__card">\n<span class="fmstr-cmp-far-set__num" aria-hidden="true">1</span>\n<h3 class="fmstr-cmp-far-set__h3">Toggle Partial Submissions on</h3>\n<p class="fmstr-cmp-far-set__body">In your form\'s Settings → Submissions, flip "Save partial submissions." Every keystroke from that point gets captured. Existing forms keep their old submissions; new entries get autosave from the next visit.</p>\n<div class="fmstr-cmp-far-set__visual" aria-hidden="true">\n<div class="fmstr-cmp-far-set__row">\n<span class="fmstr-cmp-far-set__row-label">Save partial submissions</span>\n<span class="fmstr-cmp-far-set__toggle"></span>\n</div>\n<div class="fmstr-cmp-far-set__row">\n<span class="fmstr-cmp-far-set__row-label">Send abandonment reminder</span>\n<span class="fmstr-cmp-far-set__toggle"></span>\n</div>\n</div>\n</article>\n\n<article class="fmstr-cmp-far-set__card">\n<span class="fmstr-cmp-far-set__num" aria-hidden="true">2</span>\n<h3 class="fmstr-cmp-far-set__h3">Set your reminder window</h3>\n<p class="fmstr-cmp-far-set__body">Pick when the reminder fires: 24 hours, 3 days, or 7 days after the user stops typing. For job applications, 3 days hits the sweet spot. For event RSVPs, 24 hours.</p>\n<div class="fmstr-cmp-far-set__visual" aria-hidden="true">\n<div style="font-size:11px;color:var(--c-fg-3);font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.04em;">Send reminder after</div>\n<div class="fmstr-cmp-far-set__pills">\n<span class="fmstr-cmp-far-set__pill">24 hours</span>\n<span class="fmstr-cmp-far-set__pill fmstr-cmp-far-set__pill--active">3 days</span>\n<span class="fmstr-cmp-far-set__pill">7 days</span>\n</div>\n</div>\n</article>\n\n<article class="fmstr-cmp-far-set__card">\n<span class="fmstr-cmp-far-set__num" aria-hidden="true">3</span>\n<h3 class="fmstr-cmp-far-set__h3">Customize the reminder email (optional)</h3>\n<p class="fmstr-cmp-far-set__body">Formester ships a default reminder template that works. If you want to add brand voice or a specific subject line, edit it once in the form\'s Automate tab. Variables for first_name, form_name, and resume_link are wired in automatically.</p>\n<div class="fmstr-cmp-far-set__visual" aria-hidden="true">\n<div class="fmstr-cmp-far-set__editor-tabs">\n<span class="fmstr-cmp-far-set__editor-tab">Build</span>\n<span class="fmstr-cmp-far-set__editor-tab fmstr-cmp-far-set__editor-tab--active">Automate</span>\n<span class="fmstr-cmp-far-set__editor-tab">Publish</span>\n</div>\n<div class="fmstr-cmp-far-set__editor-line">\n<span>Hi <span class="fmstr-cmp-far-set__editor-var">{{first_name}}</span>,</span>\n<span>Your <span class="fmstr-cmp-far-set__editor-var">{{form_name}}</span> is almost done.</span>\n<span><span class="fmstr-cmp-far-set__editor-var">{{resume_link}}</span></span>\n</div>\n</div>\n</article>\n\n</div>\n\n<div class="fmstr-cmp-far-set__cta-row">\n<a class="fmstr-cmp-far-set__cta" href="https://app.formester.com/users/sign_up">\nTry it on the Business plan\n<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>\n</a>\n</div>\n\n</div>\n</section>\n</div>'

useHead({
  title: 'Form Abandonment Recovery: Recover Half-Filled Forms with Reminders',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/form-abandonment-recovery/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:39.964Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Recover form submissions that get abandoned halfway. Autosave every partial entry and send email reminders that bring users back to finish. Built into Formester, no Zapier',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Form Abandonment Recovery: Recover Half-Filled Forms with Reminders',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/form-abandonment-recovery/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Form Abandonment Recovery: Recover Half-Filled Forms with Reminders',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Recover form submissions that get abandoned halfway. Autosave every partial entry and send email reminders that bring users back to finish. Built into Formester, no Zapier',
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
      content: 'https://formester.com/features/form-abandonment-recovery/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Form Abandonment Recovery: Recover Half-Filled Forms with Reminders',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Recover form submissions that get abandoned halfway. Autosave every partial entry and send email reminders that bring users back to finish. Built into Formester, no Zapier',
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
        'ecover abandoned forms',
        'partial submission reminder',
        'abandoned form recovery',
        'save and resume form',
        'form drop-off',
      ],
    },
  ],
})
</script>

<style scoped>
/* host-link-override */
.fmstr-cmp-far-hero a {
  text-decoration: none !important;
}

.fmstr-cmp-far-hero {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-amber-500: #f79009;
  --c-green-500: #12b76a;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04);
  --c-shadow-md: 0 8px 24px rgba(16, 24, 40, 0.08);
  --c-shadow-lg: 0 20px 50px rgba(16, 24, 40, 0.12);

  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #fbfaff 60%, #f7f3ff 100%);
  padding: 96px 24px 80px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hero *,
.fmstr-cmp-far-hero *::before,
.fmstr-cmp-far-hero *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-hero > *,
.fmstr-cmp-far-hero > * > * {
  min-width: 0;
}

.fmstr-cmp-far-hero__container {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.fmstr-cmp-far-hero__copy {
  max-width: 560px;
}

.fmstr-cmp-far-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 8px;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid var(--c-edge);
  border-radius: 9999px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--c-violet-700);
  letter-spacing: 0.01em;
  box-shadow: var(--c-shadow-sm);
}
.fmstr-cmp-far-hero__badge-dot {
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  background: var(--c-violet-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.fmstr-cmp-far-hero__h1 {
  margin: 0 0 18px;
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: var(--c-fg-1);
}

.fmstr-cmp-far-hero__sub {
  margin: 0 0 32px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.fmstr-cmp-far-hero__cta-primary,
.fmstr-cmp-far-hero__cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: 9999px;
  font-size: 15.5px;
  font-weight: 600;
  line-height: 1;
  min-height: 48px;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.fmstr-cmp-far-hero__cta-primary {
  background: var(--c-violet-500) !important;
  color: #ffffff !important;
  border: 1px solid var(--c-violet-500);
  box-shadow: 0 6px 16px rgba(127, 86, 217, 0.28);
}
.fmstr-cmp-far-hero__cta-primary:hover {
  background: var(--c-violet-600) !important;
  border-color: var(--c-violet-600);
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(127, 86, 217, 0.34);
}
.fmstr-cmp-far-hero__cta-secondary {
  background: #ffffff !important;
  color: var(--c-fg-1) !important;
  border: 1px solid var(--c-border);
}
.fmstr-cmp-far-hero__cta-secondary:hover {
  border-color: var(--c-edge);
  background: var(--c-soft) !important;
}

.fmstr-cmp-far-hero__trust {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13.5px;
  color: var(--c-fg-3);
}
.fmstr-cmp-far-hero__trust-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--c-green-500);
  flex-shrink: 0;
}

/* MOCKUP */
.fmstr-cmp-far-hero__visual {
  position: relative;
  max-width: 100%;
}

.fmstr-cmp-far-hero__browser {
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 18px;
  box-shadow: var(--c-shadow-lg);
  overflow: hidden;
  position: relative;
}
.fmstr-cmp-far-hero__browser-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f9fafb;
  border-bottom: 1px solid var(--c-border);
}
.fmstr-cmp-far-hero__browser-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: #d0d5dd;
  flex-shrink: 0;
}
.fmstr-cmp-far-hero__browser-url {
  flex: 1;
  margin-left: 8px;
  padding: 4px 10px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  font-size: 11.5px;
  color: var(--c-fg-3);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.fmstr-cmp-far-hero__form {
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.fmstr-cmp-far-hero__form-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 0 4px;
}
.fmstr-cmp-far-hero__form-title-text {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hero__autosave {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: #ecfdf3;
  color: #027a48;
  border-radius: 9999px;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.fmstr-cmp-far-hero__autosave-pulse {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--c-green-500);
  box-shadow: 0 0 0 0 rgba(18, 183, 106, 0.6);
  animation: fmstr-cmp-far-hero-pulse 1.8s ease-out infinite;
}
@keyframes fmstr-cmp-far-hero-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(18, 183, 106, 0.55);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(18, 183, 106, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(18, 183, 106, 0);
  }
}

.fmstr-cmp-far-hero__field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.fmstr-cmp-far-hero__field-label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-hero__field-input {
  padding: 9px 12px;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  background: #ffffff;
  font-size: 13px;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hero__field-input--filled {
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hero__field-input--empty {
  color: var(--c-fg-3);
  background: #f9fafb;
}
.fmstr-cmp-far-hero__field-input--cursor::after {
  content: '';
  display: inline-block;
  width: 1.5px;
  height: 12px;
  background: var(--c-violet-600);
  margin-left: 1px;
  vertical-align: middle;
  animation: fmstr-cmp-far-hero-blink 1s steps(2) infinite;
}
@keyframes fmstr-cmp-far-hero-blink {
  to {
    opacity: 0;
  }
}

.fmstr-cmp-far-hero__progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  font-size: 11.5px;
  color: var(--c-fg-3);
}
.fmstr-cmp-far-hero__progress-bar {
  flex: 1;
  height: 6px;
  border-radius: 9999px;
  background: #f4ebff;
  overflow: hidden;
}
.fmstr-cmp-far-hero__progress-fill {
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, var(--c-violet-500), var(--c-violet-600));
  border-radius: 9999px;
}

/* REMINDER EMAIL CARD overlay */
.fmstr-cmp-far-hero__reminder {
  position: absolute;
  right: -18px;
  bottom: -32px;
  width: 260px;
  max-width: 80%;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 14px;
  box-shadow: var(--c-shadow-lg);
  padding: 14px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fmstr-cmp-far-hero__reminder-from {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--c-fg-3);
}
.fmstr-cmp-far-hero__reminder-avatar {
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
}
.fmstr-cmp-far-hero__reminder-subj {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-fg-1);
  line-height: 1.35;
}
.fmstr-cmp-far-hero__reminder-body {
  font-size: 11.5px;
  color: var(--c-fg-2);
  line-height: 1.5;
}
.fmstr-cmp-far-hero__reminder-cta {
  display: inline-flex;
  padding: 6px 12px;
  background: var(--c-violet-500);
  color: #ffffff;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  align-self: flex-start;
}

@media (max-width: 980px) {
  .fmstr-cmp-far-hero__container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .fmstr-cmp-far-hero__copy {
    max-width: 100%;
  }
  .fmstr-cmp-far-hero__reminder {
    right: 4px;
    bottom: -28px;
    width: 240px;
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-far-hero {
    padding: 72px 16px 64px;
  }
  .fmstr-cmp-far-hero__ctas {
    flex-direction: column;
    align-items: stretch;
  }
  .fmstr-cmp-far-hero__cta-primary,
  .fmstr-cmp-far-hero__cta-secondary {
    justify-content: center;
  }
  .fmstr-cmp-far-hero__reminder {
    position: static;
    width: 100%;
    max-width: 100%;
    margin-top: 18px;
  }
}

/* host-link-override */
.fmstr-cmp-far-cost a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-cost a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-cost {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-border: #eaecf0;
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);

  background: var(--c-bg);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-cost *,
.fmstr-cmp-far-cost *::before,
.fmstr-cmp-far-cost *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-cost > *,
.fmstr-cmp-far-cost > * > * {
  min-width: 0;
}

.fmstr-cmp-far-cost__container {
  max-width: 980px;
  margin: 0 auto;
}

.fmstr-cmp-far-cost__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-far-cost__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 16px;
  background: var(--c-tint);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-700);
}
.fmstr-cmp-far-cost__h2 {
  margin: 0 0 16px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-cost__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-cost__stat-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin: 32px auto 48px;
}
.fmstr-cmp-far-cost__stat-big {
  font-size: clamp(72px, 12vw, 132px);
  line-height: 1;
  font-weight: 800;
  background: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.04em;
}
.fmstr-cmp-far-cost__stat-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}
.fmstr-cmp-far-cost__stat-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-violet-600);
}
.fmstr-cmp-far-cost__stat-body {
  font-size: 15px;
  color: var(--c-fg-2);
  max-width: 280px;
  line-height: 1.55;
}

.fmstr-cmp-far-cost__body {
  margin: 0 auto;
  max-width: 760px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-cost__body p {
  margin: 0 0 16px;
}
.fmstr-cmp-far-cost__body p:last-child {
  margin-bottom: 0;
}
.fmstr-cmp-far-cost__body strong {
  color: var(--c-fg-1);
  font-weight: 600;
}

@media (max-width: 640px) {
  .fmstr-cmp-far-cost {
    padding: 64px 16px;
  }
  .fmstr-cmp-far-cost__stat-wrap {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  .fmstr-cmp-far-cost__stat-meta {
    text-align: center;
    align-items: center;
  }
}

/* host-link-override */
.fmstr-cmp-far-why a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-why a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-why {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);

  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-why *,
.fmstr-cmp-far-why *::before,
.fmstr-cmp-far-why *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-why > *,
.fmstr-cmp-far-why > * > * {
  min-width: 0;
}

.fmstr-cmp-far-why__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-far-why__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-far-why__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-why__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-why__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.fmstr-cmp-far-why__card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.fmstr-cmp-far-why__card:hover {
  border-color: var(--c-edge);
  box-shadow: var(--c-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-far-why__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--c-tint);
  color: var(--c-violet-600);
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.fmstr-cmp-far-why__h3 {
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}

.fmstr-cmp-far-why__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-why__body strong {
  color: var(--c-fg-1);
  font-weight: 600;
}

@media (max-width: 1000px) {
  .fmstr-cmp-far-why__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 720px) {
  .fmstr-cmp-far-why {
    padding: 64px 16px;
  }
  .fmstr-cmp-far-why__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-far-why__card {
    padding: 22px;
  }
}

/* host-link-override */
.fmstr-cmp-far-hiw a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-hiw a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-hiw {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-green-500: #12b76a;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);
  --c-shadow-lg: 0 16px 40px rgba(16, 24, 40, 0.1);

  position: relative;
  background: var(--c-bg);
  padding: 96px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hiw *,
.fmstr-cmp-far-hiw *::before,
.fmstr-cmp-far-hiw *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-hiw > *,
.fmstr-cmp-far-hiw > * > * {
  min-width: 0;
}

.fmstr-cmp-far-hiw__container {
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
}

.fmstr-cmp-far-hiw__header {
  max-width: 760px;
  margin: 0 auto 56px;
  text-align: center;
}
.fmstr-cmp-far-hiw__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hiw__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-hiw__steps {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
}
.fmstr-cmp-far-hiw__steps::before {
  content: '';
  position: absolute;
  top: 32px;
  bottom: 32px;
  left: 27px;
  width: 2px;
  background: repeating-linear-gradient(
    to bottom,
    var(--c-edge) 0,
    var(--c-edge) 6px,
    transparent 6px,
    transparent 12px
  );
  z-index: 0;
}

.fmstr-cmp-far-hiw__step {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 56px 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.fmstr-cmp-far-hiw__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0 8px 18px rgba(127, 86, 217, 0.28);
  flex-shrink: 0;
}

.fmstr-cmp-far-hiw__copy {
  padding-top: 6px;
  max-width: 460px;
}
.fmstr-cmp-far-hiw__h3 {
  margin: 0 0 8px;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-hiw__body {
  margin: 0;
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-hiw__visual {
  position: relative;
  z-index: 1;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 14px;
  box-shadow: var(--c-shadow-md);
  padding: 16px;
  font-size: 12.5px;
  max-width: 100%;
  overflow: hidden;
}

/* STEP 1 — autosave field row */
.fmstr-cmp-far-hiw__field-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}
.fmstr-cmp-far-hiw__field-row:last-child {
  margin-bottom: 0;
}
.fmstr-cmp-far-hiw__field-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-hiw__field-val {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid var(--c-border);
  border-radius: 7px;
  font-size: 12.5px;
  color: var(--c-fg-1);
  background: #fff;
}
.fmstr-cmp-far-hiw__field-val--active {
  border-color: var(--c-violet-500);
  box-shadow: 0 0 0 3px rgba(127, 86, 217, 0.12);
}
.fmstr-cmp-far-hiw__field-saved {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #027a48;
  font-size: 10.5px;
  font-weight: 600;
}
.fmstr-cmp-far-hiw__field-saved-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--c-green-500);
}

/* STEP 2 — email mockup */
.fmstr-cmp-far-hiw__email-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--c-border);
  font-size: 11px;
  color: var(--c-fg-3);
}
.fmstr-cmp-far-hiw__email-avatar {
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 11px;
  flex-shrink: 0;
}
.fmstr-cmp-far-hiw__email-from {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.fmstr-cmp-far-hiw__email-from-name {
  color: var(--c-fg-1);
  font-weight: 600;
}
.fmstr-cmp-far-hiw__email-subj {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--c-fg-1);
  margin-bottom: 6px;
}
.fmstr-cmp-far-hiw__email-body {
  font-size: 12px;
  color: var(--c-fg-2);
  line-height: 1.55;
  margin-bottom: 10px;
}
.fmstr-cmp-far-hiw__email-cta {
  display: inline-block;
  padding: 7px 14px;
  background: var(--c-violet-500);
  color: #ffffff;
  border-radius: 9999px;
  font-size: 11.5px;
  font-weight: 600;
}

/* STEP 3 — resumed form */
.fmstr-cmp-far-hiw__resume-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  margin-bottom: 10px;
  background: var(--c-tint);
  border-radius: 7px;
  font-size: 11.5px;
  color: var(--c-violet-700);
  font-weight: 600;
}
.fmstr-cmp-far-hiw__progress {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--c-fg-3);
  margin-top: 10px;
}
.fmstr-cmp-far-hiw__progress-bar {
  flex: 1;
  height: 5px;
  background: #f4ebff;
  border-radius: 9999px;
  overflow: hidden;
}
.fmstr-cmp-far-hiw__progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--c-violet-500), var(--c-violet-600));
  border-radius: 9999px;
}

@media (max-width: 980px) {
  .fmstr-cmp-far-hiw__step {
    grid-template-columns: 56px 1fr;
    gap: 18px;
  }
  .fmstr-cmp-far-hiw__visual {
    grid-column: 2 / -1;
    margin-left: 0;
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-far-hiw {
    padding: 72px 16px;
  }
  .fmstr-cmp-far-hiw__steps::before {
    display: none;
  }
  .fmstr-cmp-far-hiw__step {
    grid-template-columns: 48px 1fr;
    gap: 14px;
  }
  .fmstr-cmp-far-hiw__num {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }
  .fmstr-cmp-far-hiw__h3 {
    font-size: 19px;
  }
}

/* host-link-override */
.fmstr-cmp-far-doa a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-doa a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-doa {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-red-500: #f04438;
  --c-amber-500: #f79009;
  --c-green-500: #12b76a;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);

  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-doa *,
.fmstr-cmp-far-doa *::before,
.fmstr-cmp-far-doa *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-doa > *,
.fmstr-cmp-far-doa > * > * {
  min-width: 0;
}

.fmstr-cmp-far-doa__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-far-doa__header {
  max-width: 820px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-far-doa__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 16px;
  background: var(--c-tint);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-700);
}
.fmstr-cmp-far-doa__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-doa__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-doa__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.fmstr-cmp-far-doa__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.fmstr-cmp-far-doa__card:hover {
  border-color: var(--c-edge);
  box-shadow: var(--c-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-far-doa__h3 {
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-doa__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}

/* visuals */
.fmstr-cmp-far-doa__visual {
  margin-top: auto;
  padding: 14px;
  background: var(--c-soft);
  border: 1px solid var(--c-border);
  border-radius: 10px;
}

/* Card 1: field bar chart */
.fmstr-cmp-far-doa__bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fmstr-cmp-far-doa__bar-row {
  display: grid;
  grid-template-columns: 1fr 36px;
  gap: 10px;
  align-items: center;
  font-size: 11.5px;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-doa__bar-track {
  position: relative;
  height: 7px;
  background: #f4ebff;
  border-radius: 9999px;
  overflow: hidden;
}
.fmstr-cmp-far-doa__bar-fill {
  position: absolute;
  inset: 0;
  height: 100%;
  border-radius: 9999px;
}
.fmstr-cmp-far-doa__bar-fill--good {
  background: var(--c-green-500);
}
.fmstr-cmp-far-doa__bar-fill--ok {
  background: var(--c-amber-500);
}
.fmstr-cmp-far-doa__bar-fill--bad {
  background: var(--c-red-500);
}
.fmstr-cmp-far-doa__bar-label {
  display: flex;
  align-items: center;
  gap: 6px;
}
.fmstr-cmp-far-doa__bar-flag {
  display: inline-block;
  padding: 1px 5px;
  border-radius: 4px;
  background: #fee4e2;
  color: #b42318;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.fmstr-cmp-far-doa__bar-pct {
  text-align: right;
  font-weight: 600;
  color: var(--c-fg-1);
}

/* Card 2: device toggle */
.fmstr-cmp-far-doa__tabs {
  display: flex;
  gap: 4px;
  padding: 3px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 9999px;
  margin-bottom: 12px;
}
.fmstr-cmp-far-doa__tab {
  flex: 1;
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 11.5px;
  font-weight: 600;
  text-align: center;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-doa__tab--active {
  background: var(--c-violet-500);
  color: #ffffff;
}
.fmstr-cmp-far-doa__split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.fmstr-cmp-far-doa__metric {
  padding: 10px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  text-align: center;
}
.fmstr-cmp-far-doa__metric-val {
  font-size: 20px;
  font-weight: 800;
  color: var(--c-violet-600);
  line-height: 1;
}
.fmstr-cmp-far-doa__metric-label {
  font-size: 10.5px;
  color: var(--c-fg-3);
  margin-top: 4px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
}

/* Card 3: sparkline */
.fmstr-cmp-far-doa__spark {
  width: 100%;
  height: 70px;
  display: block;
}
.fmstr-cmp-far-doa__spark-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 11px;
  color: var(--c-fg-3);
}
.fmstr-cmp-far-doa__spark-alert {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #b42318;
  font-weight: 600;
}

/* caveat */
.fmstr-cmp-far-doa__caveat {
  margin: 32px auto 0;
  max-width: 760px;
  padding: 16px 22px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  border-radius: 12px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--c-fg-2);
  text-align: center;
}

@media (max-width: 1000px) {
  .fmstr-cmp-far-doa__grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-far-doa {
    padding: 64px 16px;
  }
  .fmstr-cmp-far-doa__card {
    padding: 22px;
  }
}

/* host-link-override */
.fmstr-cmp-far-rem a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-rem a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-rem {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);
  --c-shadow-lg: 0 16px 40px rgba(16, 24, 40, 0.1);

  background: var(--c-bg);
  padding: 96px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-rem *,
.fmstr-cmp-far-rem *::before,
.fmstr-cmp-far-rem *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-rem > *,
.fmstr-cmp-far-rem > * > * {
  min-width: 0;
}

.fmstr-cmp-far-rem__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-far-rem__header {
  max-width: 760px;
  margin: 0 auto 56px;
  text-align: center;
}
.fmstr-cmp-far-rem__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-rem__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-rem__layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 48px;
  align-items: start;
}

.fmstr-cmp-far-rem__parts {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.fmstr-cmp-far-rem__part {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 16px;
}
.fmstr-cmp-far-rem__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--c-tint);
  color: var(--c-violet-700);
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.fmstr-cmp-far-rem__h3 {
  margin: 0 0 6px;
  font-size: 17px;
  line-height: 1.35;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-rem__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-rem__caveat {
  margin-top: 18px;
  padding: 14px 16px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--c-fg-2);
}
.fmstr-cmp-far-rem__caveat strong {
  color: var(--c-violet-700);
  font-weight: 600;
}

/* email preview */
.fmstr-cmp-far-rem__email {
  position: sticky;
  top: 24px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-lg);
  overflow: hidden;
}
.fmstr-cmp-far-rem__email-window {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #f9fafb;
  border-bottom: 1px solid var(--c-border);
}
.fmstr-cmp-far-rem__email-dot {
  width: 9px;
  height: 9px;
  border-radius: 9999px;
  background: #d0d5dd;
}
.fmstr-cmp-far-rem__email-app {
  margin-left: 8px;
  font-size: 11px;
  color: var(--c-fg-3);
  font-weight: 600;
}
.fmstr-cmp-far-rem__email-inner {
  padding: 18px 20px 20px;
}
.fmstr-cmp-far-rem__email-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--c-border);
}
.fmstr-cmp-far-rem__email-avatar {
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.fmstr-cmp-far-rem__email-sender {
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 12px;
  color: var(--c-fg-3);
}
.fmstr-cmp-far-rem__email-sender-name {
  color: var(--c-fg-1);
  font-weight: 600;
  font-size: 13px;
}
.fmstr-cmp-far-rem__email-subject {
  font-size: 17px;
  font-weight: 700;
  color: var(--c-fg-1);
  line-height: 1.3;
  margin-bottom: 12px;
}
.fmstr-cmp-far-rem__email-context {
  font-size: 14px;
  line-height: 1.6;
  color: var(--c-fg-2);
  margin-bottom: 16px;
}
.fmstr-cmp-far-rem a.fmstr-cmp-far-rem__email-btn {
  display: inline-block;
  padding: 10px 18px;
  margin-bottom: 16px;
  background: var(--c-violet-500) !important;
  color: #ffffff !important;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
}
.fmstr-cmp-far-rem__email-left {
  padding: 12px;
  background: var(--c-soft);
  border-radius: 8px;
  font-size: 13px;
  color: var(--c-fg-2);
  line-height: 1.5;
}
.fmstr-cmp-far-rem__email-left strong {
  color: var(--c-fg-1);
  font-weight: 600;
}

/* labels overlay */
.fmstr-cmp-far-rem__email-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  margin-right: 6px;
  background: var(--c-tint);
  color: var(--c-violet-700);
  border-radius: 9999px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  vertical-align: middle;
}

@media (max-width: 980px) {
  .fmstr-cmp-far-rem__layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .fmstr-cmp-far-rem__email {
    position: static;
    max-width: 420px;
    margin: 0 auto;
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-far-rem {
    padding: 72px 16px;
  }
}

/* host-link-override */
.fmstr-cmp-far-ch a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-ch a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-ch {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-green-500: #12b76a;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);

  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-ch *,
.fmstr-cmp-far-ch *::before,
.fmstr-cmp-far-ch *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-ch > *,
.fmstr-cmp-far-ch > * > * {
  min-width: 0;
}

.fmstr-cmp-far-ch__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-far-ch__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-far-ch__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-ch__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-ch__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.fmstr-cmp-far-ch__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
  position: relative;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.fmstr-cmp-far-ch__card:hover {
  border-color: var(--c-edge);
  box-shadow: var(--c-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-far-ch__logo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.fmstr-cmp-far-ch__logo {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmstr-cmp-far-ch__logo--email {
  background: var(--c-tint);
  color: var(--c-violet-600);
}
.fmstr-cmp-far-ch__logo--sms {
  background: #ecfdf3;
  color: #027a48;
}
.fmstr-cmp-far-ch__logo--whatsapp {
  background: #e7f8ef;
  color: #25d366;
}

.fmstr-cmp-far-ch__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.fmstr-cmp-far-ch__badge--live {
  background: #ecfdf3;
  color: #027a48;
}
.fmstr-cmp-far-ch__badge--roadmap {
  background: #fff5e6;
  color: #b54708;
}
.fmstr-cmp-far-ch__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: currentColor;
}

.fmstr-cmp-far-ch__h3 {
  margin: 0;
  font-size: 19px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-ch__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}

@media (max-width: 1000px) {
  .fmstr-cmp-far-ch__grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-far-ch {
    padding: 64px 16px;
  }
  .fmstr-cmp-far-ch__card {
    padding: 24px;
  }
}

/* host-link-override */
.fmstr-cmp-far-uc a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-uc a:hover {
  text-decoration: underline !important;
}

.fmstr-cmp-far-uc {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);

  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-uc *,
.fmstr-cmp-far-uc *::before,
.fmstr-cmp-far-uc *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-uc > *,
.fmstr-cmp-far-uc > * > * {
  min-width: 0;
}

.fmstr-cmp-far-uc__container {
  max-width: 1180px;
  margin: 0 auto;
}

.fmstr-cmp-far-uc__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-far-uc__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-uc__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

.fmstr-cmp-far-uc__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.fmstr-cmp-far-uc__card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.fmstr-cmp-far-uc__card:hover {
  border-color: var(--c-edge);
  box-shadow: var(--c-shadow-md);
  transform: translateY(-2px);
}

.fmstr-cmp-far-uc__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--c-tint);
  color: var(--c-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fmstr-cmp-far-uc__h3 {
  margin: 0;
  font-size: 17px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}

.fmstr-cmp-far-uc__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}

@media (max-width: 1000px) {
  .fmstr-cmp-far-uc__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-far-uc {
    padding: 64px 16px;
  }
  .fmstr-cmp-far-uc__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-far-uc__card {
    padding: 22px;
  }
}

.fmstr-cmp-testimonials a {
  text-decoration: none !important;
}

.fmstr-cmp-testimonials {
  --c-bg: #ffffff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-amber-400: #fdc022;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 8px 24px rgba(16, 24, 40, 0.08);

  background: var(--c-bg);
  padding: 88px 0;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-testimonials *,
.fmstr-cmp-testimonials *::before,
.fmstr-cmp-testimonials *::after {
  box-sizing: border-box;
}
.fmstr-cmp-testimonials > *,
.fmstr-cmp-testimonials > * > * {
  min-width: 0;
}

.fmstr-cmp-testimonials__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.fmstr-cmp-testimonials__header {
  max-width: 820px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-testimonials__eyebrow {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 16px;
  background: var(--c-tint);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet-700);
}
.fmstr-cmp-testimonials__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-testimonials__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}

/* Aggregate ratings strip */
.fmstr-cmp-testimonials__agg {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  margin-top: 22px;
  padding: 12px 22px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 14px;
  box-shadow: var(--c-shadow-sm);
  flex-wrap: wrap;
  justify-content: center;
}
.fmstr-cmp-testimonials__agg-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--c-fg-2);
}
.fmstr-cmp-testimonials__agg-stars {
  color: var(--c-amber-400);
  display: inline-flex;
  gap: 1px;
}
.fmstr-cmp-testimonials__agg-rating {
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-testimonials__agg-src {
  color: var(--c-fg-3);
  font-weight: 600;
}
.fmstr-cmp-testimonials__agg-divider {
  width: 1px;
  height: 18px;
  background: var(--c-border);
}

/* Marquee tracks */
.fmstr-cmp-testimonials__tracks {
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
}
.fmstr-cmp-testimonials__track {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
}
.fmstr-cmp-testimonials__row {
  display: flex;
  gap: 18px;
  width: max-content;
  animation: fmstr-cmp-testimonials-marquee 48s linear infinite;
  will-change: transform;
}
.fmstr-cmp-testimonials__row--reverse {
  animation: fmstr-cmp-testimonials-marquee-reverse 56s linear infinite;
}
.fmstr-cmp-testimonials__track:hover .fmstr-cmp-testimonials__row,
.fmstr-cmp-testimonials__track:focus-within .fmstr-cmp-testimonials__row {
  animation-play-state: paused;
}
@keyframes fmstr-cmp-testimonials-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes fmstr-cmp-testimonials-marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .fmstr-cmp-testimonials__row,
  .fmstr-cmp-testimonials__row--reverse {
    animation: none;
  }
  .fmstr-cmp-testimonials__track {
    mask-image: none;
    -webkit-mask-image: none;
    overflow-x: auto;
    padding-bottom: 8px;
  }
}

/* Card */
.fmstr-cmp-testimonials__card {
  flex-shrink: 0;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 26px;
  background: #ffffff;
  border: 1px solid var(--c-border);
  border-radius: 14px;
  box-shadow: var(--c-shadow-sm);
}
.fmstr-cmp-testimonials__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.fmstr-cmp-testimonials__stars {
  color: var(--c-amber-400);
  display: inline-flex;
  gap: 2px;
}
.fmstr-cmp-testimonials__source {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-fg-3);
  letter-spacing: 0.02em;
}
.fmstr-cmp-testimonials__source-logo {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 800;
  font-size: 9px;
  color: #ffffff;
}
.fmstr-cmp-testimonials__source-logo--g2 {
  background: #ff492c;
}
.fmstr-cmp-testimonials__source-logo--ph {
  background: #da552f;
}
.fmstr-cmp-testimonials__source-logo--tp {
  background: #00b67a;
}

.fmstr-cmp-testimonials__quote {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--c-fg-1);
  font-weight: 500;
}
.fmstr-cmp-testimonials__quote::before {
  content: open-quote;
  color: var(--c-violet-500);
  font-weight: 700;
}
.fmstr-cmp-testimonials__quote::after {
  content: close-quote;
  color: var(--c-violet-500);
  font-weight: 700;
}

.fmstr-cmp-testimonials__foot {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid var(--c-border);
}
.fmstr-cmp-testimonials__avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}
.fmstr-cmp-testimonials__avatar--violet {
  background: linear-gradient(135deg, #7f56d9, #5b34b1);
}
.fmstr-cmp-testimonials__avatar--green {
  background: linear-gradient(135deg, #12b76a, #027a48);
}
.fmstr-cmp-testimonials__avatar--blue {
  background: linear-gradient(135deg, #1a73e8, #1a4a8e);
}
.fmstr-cmp-testimonials__avatar--orange {
  background: linear-gradient(135deg, #ff7a59, #c2410c);
}
.fmstr-cmp-testimonials__avatar--pink {
  background: linear-gradient(135deg, #f04438, #be123c);
}
.fmstr-cmp-testimonials__name {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--c-fg-1);
  line-height: 1.3;
}
.fmstr-cmp-testimonials__role {
  font-size: 12px;
  color: var(--c-fg-3);
  margin-top: 1px;
}

@media (max-width: 540px) {
  .fmstr-cmp-testimonials {
    padding: 64px 0;
  }
  .fmstr-cmp-testimonials__card {
    width: 300px;
    padding: 20px 22px;
  }
  .fmstr-cmp-testimonials__agg {
    gap: 14px;
    padding: 10px 16px;
  }
}

/* host-link-override */
.fmstr-cmp-far-faq a {
  text-decoration: none !important;
}

.fmstr-cmp-far-faq {
  --c-card: #ffffff;
  --c-soft: #f9fafb;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-600: #6941c6;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-border: #eaecf0;
  --c-chip-bg: #f4f4f7;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05);

  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-far-faq *,
.fmstr-cmp-far-faq *::before,
.fmstr-cmp-far-faq *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-faq > *,
.fmstr-cmp-far-faq > * > * {
  min-width: 0;
}

.fmstr-cmp-far-faq__container {
  max-width: 820px;
  margin: 0 auto;
}

.fmstr-cmp-far-faq__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}

.fmstr-cmp-far-faq__h2 {
  margin: 0;
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--c-fg-1);
}

.fmstr-cmp-far-faq__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fmstr-cmp-far-faq__item {
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  box-shadow: var(--c-shadow-sm);
  overflow: hidden;
}

.fmstr-cmp-far-faq__item > summary {
  padding: 18px 22px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16.5px;
  color: var(--c-fg-1);
  display: flex;
  align-items: center;
  gap: 14px;
  list-style: none;
}
.fmstr-cmp-far-faq__item > summary::-webkit-details-marker {
  display: none;
}
.fmstr-cmp-far-faq__item > summary::before {
  content: '';
  width: 28px;
  height: 28px;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: var(--c-chip-bg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%2375747f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5l4 4 4-4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  transition:
    transform 0.15s ease,
    background-color 0.15s ease;
}
.fmstr-cmp-far-faq__item[open] > summary::before {
  transform: rotate(180deg);
  background-color: var(--c-tint);
}
.fmstr-cmp-far-faq__item[open] > summary {
  color: var(--c-violet-600) !important;
}

.fmstr-cmp-far-faq__h3 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  flex: 1;
}

.fmstr-cmp-far-faq__answer {
  padding: 0 22px 22px 64px;
  color: var(--c-fg-2);
  font-size: 15.5px;
  line-height: 1.7;
}
.fmstr-cmp-far-faq__answer p {
  margin: 0 0 10px;
}
.fmstr-cmp-far-faq__answer p:last-child {
  margin-bottom: 0;
}
.fmstr-cmp-far-faq__answer a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-far-faq__answer a:hover {
  text-decoration: underline !important;
}

@media (max-width: 760px) {
  .fmstr-cmp-far-faq {
    padding: 64px 16px;
  }
  .fmstr-cmp-far-faq__item > summary {
    padding: 16px;
    font-size: 15.5px;
    gap: 12px;
  }
  .fmstr-cmp-far-faq__item > summary::before {
    width: 26px;
    height: 26px;
  }
  .fmstr-cmp-far-faq__answer {
    padding: 0 16px 18px 16px;
    font-size: 15px;
    line-height: 1.65;
  }
}

/* host-link-override */
.fmstr-cmp-far-cta a {
  text-decoration: none !important;
}

.fmstr-cmp-far-cta {
  --c-violet-100: #ede4ff;
  --c-violet-300: #c4b1ee;
  --c-violet-500: #7f56d9;
  --c-violet-600: #6941c6;
  --c-violet-700: #5b34b1;
  --c-violet-900: #3f1d8a;
  --c-fg-on-dark: #ffffff;
  --c-fg-on-dark-2: rgba(255, 255, 255, 0.78);
  --c-fg-on-dark-3: rgba(255, 255, 255, 0.6);

  padding: 96px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-on-dark);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 20% 0%, rgba(127, 86, 217, 0.6) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 100%, rgba(91, 52, 177, 0.6) 0%, transparent 55%),
    linear-gradient(135deg, #2a1568 0%, #3f1d8a 50%, #5b34b1 100%);
}
.fmstr-cmp-far-cta *,
.fmstr-cmp-far-cta *::before,
.fmstr-cmp-far-cta *::after {
  box-sizing: border-box;
}
.fmstr-cmp-far-cta > *,
.fmstr-cmp-far-cta > * > * {
  min-width: 0;
}

/* Decorative grid pattern */
.fmstr-cmp-far-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
}

.fmstr-cmp-far-cta__container {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.fmstr-cmp-far-cta__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 22px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--c-fg-on-dark);
  font-size: 13px;
  font-weight: 600;
}
.fmstr-cmp-far-cta__eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 0 4px rgba(134, 239, 172, 0.25);
  animation: fmstr-cmp-far-cta-pulse 2s ease-in-out infinite;
}
@keyframes fmstr-cmp-far-cta-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgba(134, 239, 172, 0.25);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(134, 239, 172, 0.1);
  }
}

.fmstr-cmp-far-cta__h2 {
  margin: 0 0 18px;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: var(--c-fg-on-dark);
}

.fmstr-cmp-far-cta__sub {
  margin: 0 auto 36px;
  max-width: 580px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-fg-on-dark-2);
}

.fmstr-cmp-far-cta__ctas {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.fmstr-cmp-far-cta__cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 12px;
  background: #ffffff !important;
  color: var(--c-violet-900) !important;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none !important;
  border: 1px solid #ffffff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}
.fmstr-cmp-far-cta__cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
  text-decoration: none !important;
}
.fmstr-cmp-far-cta__cta-arrow {
  transition: transform 0.15s ease;
}
.fmstr-cmp-far-cta__cta-primary:hover .fmstr-cmp-far-cta__cta-arrow {
  transform: translateX(2px);
}

.fmstr-cmp-far-cta__cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08) !important;
  color: var(--c-fg-on-dark) !important;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
.fmstr-cmp-far-cta__cta-secondary:hover {
  background: rgba(255, 255, 255, 0.16) !important;
  border-color: rgba(255, 255, 255, 0.32);
  text-decoration: none !important;
}

.fmstr-cmp-far-cta__meta {
  margin: 32px 0 0;
  font-size: 13.5px;
  color: var(--c-fg-on-dark-3);
}

.fmstr-cmp-far-cta__stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 56px;
  padding-top: 36px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  flex-wrap: wrap;
}
.fmstr-cmp-far-cta__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.fmstr-cmp-far-cta__stat-value {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--c-fg-on-dark);
  font-variant-numeric: tabular-nums;
}
.fmstr-cmp-far-cta__stat-label {
  font-size: 12.5px;
  color: var(--c-fg-on-dark-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

@media (max-width: 760px) {
  .fmstr-cmp-far-cta {
    padding: 72px 16px;
  }
  .fmstr-cmp-far-cta__cta-primary,
  .fmstr-cmp-far-cta__cta-secondary {
    padding: 14px 24px;
    font-size: 15px;
  }
  .fmstr-cmp-far-cta__stats {
    gap: 32px;
  }
  .fmstr-cmp-far-cta__stat-value {
    font-size: 24px;
  }
}
@media (max-width: 540px) {
  .fmstr-cmp-far-cta__ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  .fmstr-cmp-far-cta__cta-primary,
  .fmstr-cmp-far-cta__cta-secondary {
    justify-content: center;
  }
}
</style>
