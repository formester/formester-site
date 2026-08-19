<template>
  <div>
    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-ppf-hero" aria-labelledby="fmstr-cmp-ppf-hero-h1">
            <div class="fmstr-cmp-ppf-hero__container">
              <div class="fmstr-cmp-ppf-hero__copy">
                <span class="fmstr-cmp-ppf-hero__badge">
                  <span class="fmstr-cmp-ppf-hero__badge-dot" aria-hidden="true">
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
                  Password protected form builder
                </span>
                <h1 class="fmstr-cmp-ppf-hero__h1" id="fmstr-cmp-ppf-hero-h1">
                  Build a password-protected form in minutes
                </h1>
                <p class="fmstr-cmp-ppf-hero__sub">
                  Add a password gate to any Formester form. The respondent sees a short login screen before the form.
                  Wrong password, no access. Right password, the form opens and submits as normal.
                </p>
                <div class="fmstr-cmp-ppf-hero__checks">
                  <span class="fmstr-cmp-ppf-hero__check"
                    ><svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    One-click login gate</span
                  >
                  <span class="fmstr-cmp-ppf-hero__check"
                    ><svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Bcrypt-hashed passwords</span
                  >
                  <span class="fmstr-cmp-ppf-hero__check"
                    ><svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Full access log</span
                  >
                </div>
                <div class="fmstr-cmp-ppf-hero__ctas">
                  <a class="fmstr-cmp-ppf-hero__cta-primary" href="https://app.formester.com/users/sign_up">
                    Build a password-protected form
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
                  <a class="fmstr-cmp-ppf-hero__cta-secondary" href="#setup">See how it works</a>
                </div>
              </div>

              <div class="fmstr-cmp-ppf-hero__visual" aria-hidden="true">
                <div class="fmstr-cmp-ppf-hero__gate">
                  <div class="fmstr-cmp-ppf-hero__gate-bar">
                    <span class="fmstr-cmp-ppf-hero__gate-dot"></span>
                    <span class="fmstr-cmp-ppf-hero__gate-dot"></span>
                    <span class="fmstr-cmp-ppf-hero__gate-dot"></span>
                    <span class="fmstr-cmp-ppf-hero__gate-url">yourdomain.com/intake</span>
                  </div>
                  <div class="fmstr-cmp-ppf-hero__gate-inner">
                    <span class="fmstr-cmp-ppf-hero__lock">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </span>
                    <h3 class="fmstr-cmp-ppf-hero__gate-title">Enter password to continue</h3>
                    <p class="fmstr-cmp-ppf-hero__gate-sub">This form is private. Enter the code your team shared.</p>
                    <span class="fmstr-cmp-ppf-hero__gate-input">••••••••••</span>
                    <span class="fmstr-cmp-ppf-hero__gate-btn">Unlock</span>
                  </div>
                </div>
                <div class="fmstr-cmp-ppf-hero__log">
                  <span class="fmstr-cmp-ppf-hero__log-title">Access log</span>
                  <div class="fmstr-cmp-ppf-hero__log-row">
                    <span>14:32 · 73.x.x.42</span><span class="fmstr-cmp-ppf-hero__log-ok">Success</span>
                  </div>
                  <div class="fmstr-cmp-ppf-hero__log-row">
                    <span>14:31 · 88.x.x.19</span><span class="fmstr-cmp-ppf-hero__log-fail">Wrong</span>
                  </div>
                  <div class="fmstr-cmp-ppf-hero__log-row">
                    <span>14:29 · 73.x.x.42</span><span class="fmstr-cmp-ppf-hero__log-ok">Success</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="raw-html-embed">
          <section class="fmstr-cmp-ppf-wis" aria-labelledby="fmstr-cmp-ppf-wis-h2">
            <div class="fmstr-cmp-ppf-wis__container">
              <header class="fmstr-cmp-ppf-wis__header">
                <h2 class="fmstr-cmp-ppf-wis__h2" id="fmstr-cmp-ppf-wis-h2">
                  What a password-protected form is (and what it is not)
                </h2>
                <p class="fmstr-cmp-ppf-wis__sub">A short definition.</p>
              </header>

              <div class="fmstr-cmp-ppf-wis__cards">
                <div class="fmstr-cmp-ppf-wis__card fmstr-cmp-ppf-wis__card--yes">
                  <span class="fmstr-cmp-ppf-wis__card-tag fmstr-cmp-ppf-wis__card-tag--yes">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    What it is
                  </span>
                  <p class="fmstr-cmp-ppf-wis__body">
                    A regular online form with a login screen in front of it. Anyone with the link sees the login
                    screen. <strong>Only people with the password see the form itself.</strong> Once they submit, the
                    response lands in your dashboard like any other submission.
                  </p>
                  <div class="fmstr-cmp-ppf-wis__diag" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-wis__gate">
                      <span class="fmstr-cmp-ppf-wis__gate-lock">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>
                      <div class="fmstr-cmp-ppf-wis__gate-label">Live form · Locked</div>
                      <span class="fmstr-cmp-ppf-wis__gate-input">••••••••</span>
                      <div class="fmstr-cmp-ppf-wis__gate-meta">Bcrypt hashed · access logged</div>
                    </div>
                  </div>
                </div>

                <div class="fmstr-cmp-ppf-wis__card">
                  <span class="fmstr-cmp-ppf-wis__card-tag fmstr-cmp-ppf-wis__card-tag--no">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    What it is not
                  </span>
                  <p class="fmstr-cmp-ppf-wis__body">
                    A PDF is a <strong>static file you encrypt locally</strong>. A password-protected form is a live web
                    form behind an access gate. Use a protected PDF for a finished document someone will read. Use a
                    password-protected form when you need someone to fill it out, not just read it.
                  </p>
                  <div class="fmstr-cmp-ppf-wis__diag fmstr-cmp-ppf-wis__diag--no" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-wis__pdf">
                      <span class="fmstr-cmp-ppf-wis__pdf-icon">PDF</span>
                      <div class="fmstr-cmp-ppf-wis__pdf-meta">
                        <div class="fmstr-cmp-ppf-wis__pdf-name">contract.pdf</div>
                        <div class="fmstr-cmp-ppf-wis__pdf-state">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          Static file · encrypted locally
                        </div>
                      </div>
                    </div>
                    <div class="fmstr-cmp-ppf-wis__pdf-note">For reading. Not a live form.</div>
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
          <section class="fmstr-cmp-ppf-ben" aria-labelledby="fmstr-cmp-ppf-ben-h2">
            <div class="fmstr-cmp-ppf-ben__container">
              <header class="fmstr-cmp-ppf-ben__header">
                <h2 class="fmstr-cmp-ppf-ben__h2" id="fmstr-cmp-ppf-ben-h2">What the password gate actually does</h2>
                <p class="fmstr-cmp-ppf-ben__sub">Three things that change the moment you turn protection on.</p>
              </header>
              <div class="fmstr-cmp-ppf-ben__grid">
                <article class="fmstr-cmp-ppf-ben__card">
                  <span class="fmstr-cmp-ppf-ben__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                  ></span>
                  <h3 class="fmstr-cmp-ppf-ben__h3">Access control before the form loads</h3>
                  <p class="fmstr-cmp-ppf-ben__body">
                    Respondents who do not have the password
                    <strong>never see the form fields, never see the questions, never know what data you collect</strong
                    >. The login screen is the entire surface the public sees. Wrong password, the form stays invisible.
                  </p>
                  <div class="fmstr-cmp-ppf-ben__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-ben__gate-row">
                      <span class="fmstr-cmp-ppf-ben__gate-mark fmstr-cmp-ppf-ben__gate-mark--no">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-ppf-ben__gate-state">Wrong password</span>
                      <span class="fmstr-cmp-ppf-ben__gate-detail">Form invisible</span>
                    </div>
                    <div class="fmstr-cmp-ppf-ben__gate-row">
                      <span class="fmstr-cmp-ppf-ben__gate-mark fmstr-cmp-ppf-ben__gate-mark--yes">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span class="fmstr-cmp-ppf-ben__gate-state">Right password</span>
                      <span class="fmstr-cmp-ppf-ben__gate-detail">Form loads</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-ben__card">
                  <span class="fmstr-cmp-ppf-ben__icon" aria-hidden="true"
                    ><svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line></svg
                  ></span>
                  <h3 class="fmstr-cmp-ppf-ben__h3">Shared password or one per user</h3>
                  <p class="fmstr-cmp-ppf-ben__body">
                    Pick the model. <strong>Shared password</strong> works for a confidential team form or a gated
                    download (one password for everyone on the list). <strong>Per-user password</strong> works for HR or
                    legal forms where each person gets a unique code. Both modes log every attempt.
                  </p>
                  <div class="fmstr-cmp-ppf-ben__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-ben__mode-label">Password mode</div>
                    <div class="fmstr-cmp-ppf-ben__mode-row fmstr-cmp-ppf-ben__mode-row--active">
                      <span class="fmstr-cmp-ppf-ben__mode-radio"></span>
                      <span class="fmstr-cmp-ppf-ben__mode-name">Shared password</span>
                      <span class="fmstr-cmp-ppf-ben__mode-count">1 code</span>
                    </div>
                    <div class="fmstr-cmp-ppf-ben__mode-row">
                      <span class="fmstr-cmp-ppf-ben__mode-radio"></span>
                      <span class="fmstr-cmp-ppf-ben__mode-name">Per-user passwords</span>
                      <span class="fmstr-cmp-ppf-ben__mode-count">42 codes</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-ben__card">
                  <span class="fmstr-cmp-ppf-ben__icon" aria-hidden="true"
                    ><svg
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
                      <polyline points="9 12 11 14 15 10"></polyline></svg
                  ></span>
                  <h3 class="fmstr-cmp-ppf-ben__h3">Bcrypt-hashed passwords, full access log</h3>
                  <p class="fmstr-cmp-ppf-ben__body">
                    Passwords are hashed with <strong>bcrypt</strong> server-side; Formester never stores or transmits
                    the plaintext after the initial set. Every access attempt, success or failure, lands in the form's
                    activity log with timestamp and IP. Compliant with GDPR, UK GDPR, and CCPA out of the box.
                  </p>
                  <div class="fmstr-cmp-ppf-ben__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-ben__log-label">Access log</div>
                    <div class="fmstr-cmp-ppf-ben__log-row">
                      <span class="fmstr-cmp-ppf-ben__log-time">14:32</span>
                      <span class="fmstr-cmp-ppf-ben__log-ip">73.x.x.42</span>
                      <span class="fmstr-cmp-ppf-ben__log-status fmstr-cmp-ppf-ben__log-status--ok">Success</span>
                    </div>
                    <div class="fmstr-cmp-ppf-ben__log-row">
                      <span class="fmstr-cmp-ppf-ben__log-time">14:31</span>
                      <span class="fmstr-cmp-ppf-ben__log-ip">88.x.x.19</span>
                      <span class="fmstr-cmp-ppf-ben__log-status fmstr-cmp-ppf-ben__log-status--fail">Wrong</span>
                    </div>
                    <div class="fmstr-cmp-ppf-ben__log-row">
                      <span class="fmstr-cmp-ppf-ben__log-time">14:29</span>
                      <span class="fmstr-cmp-ppf-ben__log-ip">73.x.x.42</span>
                      <span class="fmstr-cmp-ppf-ben__log-status fmstr-cmp-ppf-ben__log-status--ok">Success</span>
                    </div>
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
          <section class="fmstr-cmp-ppf-uc" aria-labelledby="fmstr-cmp-ppf-uc-h2">
            <div class="fmstr-cmp-ppf-uc__container">
              <header class="fmstr-cmp-ppf-uc__header">
                <h2 class="fmstr-cmp-ppf-uc__h2" id="fmstr-cmp-ppf-uc-h2">
                  Six confidential form scenarios that need a password gate
                </h2>
                <p class="fmstr-cmp-ppf-uc__sub">
                  When a public link is too open and an internal-only tool is too closed.
                </p>
              </header>
              <div class="fmstr-cmp-ppf-uc__grid">
                <article class="fmstr-cmp-ppf-uc__card">
                  <span class="fmstr-cmp-ppf-uc__chip">HR</span>
                  <h3 class="fmstr-cmp-ppf-uc__h3">HR document intake</h3>
                  <p class="fmstr-cmp-ppf-uc__body">
                    Salary surveys, exit interviews, sensitive employee feedback. The form goes to a specific group of
                    employees, not the open internet. A shared password limits access to the group; per-user codes if
                    anonymity needs to be auditable.
                  </p>
                  <div class="fmstr-cmp-ppf-uc__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-uc__form">
                      <span class="fmstr-cmp-ppf-uc__form-lock"
                        ><svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                      ></span>
                      <span class="fmstr-cmp-ppf-uc__form-name">Exit interview · 2026</span>
                      <span class="fmstr-cmp-ppf-uc__form-state">Private</span>
                    </div>
                    <div class="fmstr-cmp-ppf-uc__chips">
                      <span class="fmstr-cmp-ppf-uc__mini-chip fmstr-cmp-ppf-uc__mini-chip--violet">Per-user code</span>
                      <span class="fmstr-cmp-ppf-uc__mini-chip">42 employees</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-uc__card">
                  <span class="fmstr-cmp-ppf-uc__chip">Legal</span>
                  <h3 class="fmstr-cmp-ppf-uc__h3">Legal client intake</h3>
                  <p class="fmstr-cmp-ppf-uc__body">
                    Case-evaluation forms with sensitive details (incident dates, parties, financial exposure). Pass the
                    password to the prospective client over phone or signed engagement letter. The form is private until
                    they enter it.
                  </p>
                  <div class="fmstr-cmp-ppf-uc__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-uc__form">
                      <span class="fmstr-cmp-ppf-uc__form-lock"
                        ><svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                      ></span>
                      <span class="fmstr-cmp-ppf-uc__form-name">Case evaluation intake</span>
                      <span class="fmstr-cmp-ppf-uc__form-state">Locked</span>
                    </div>
                    <div class="fmstr-cmp-ppf-uc__chips">
                      <span class="fmstr-cmp-ppf-uc__mini-chip">Shared by engagement letter</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-uc__card">
                  <span class="fmstr-cmp-ppf-uc__chip">Finance</span>
                  <h3 class="fmstr-cmp-ppf-uc__h3">Financial onboarding</h3>
                  <p class="fmstr-cmp-ppf-uc__body">
                    Tax-prep questionnaires, wealth-management intake, lending applications. The form collects PII (SSN,
                    bank, employer). A password gate adds a second barrier on top of the encrypted submission.
                  </p>
                  <div class="fmstr-cmp-ppf-uc__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-uc__form">
                      <span class="fmstr-cmp-ppf-uc__form-lock"
                        ><svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                      ></span>
                      <span class="fmstr-cmp-ppf-uc__form-name">Tax intake · 2026</span>
                      <span class="fmstr-cmp-ppf-uc__form-state">SSN · Bank</span>
                    </div>
                    <div class="fmstr-cmp-ppf-uc__chips">
                      <span class="fmstr-cmp-ppf-uc__mini-chip fmstr-cmp-ppf-uc__mini-chip--green">TLS + bcrypt</span>
                      <span class="fmstr-cmp-ppf-uc__mini-chip">Encrypted at rest</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-uc__card">
                  <span class="fmstr-cmp-ppf-uc__chip">Healthcare</span>
                  <h3 class="fmstr-cmp-ppf-uc__h3">Healthcare patient portals</h3>
                  <p class="fmstr-cmp-ppf-uc__body">
                    Patient history, insurance card upload, symptom intake. Add a password tied to the patient's
                    appointment confirmation to gate the form until the booked patient arrives.
                  </p>
                  <div class="fmstr-cmp-ppf-uc__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-uc__form">
                      <span class="fmstr-cmp-ppf-uc__form-lock"
                        ><svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                      ></span>
                      <span class="fmstr-cmp-ppf-uc__form-name">Patient intake</span>
                      <span class="fmstr-cmp-ppf-uc__form-state">Per visit</span>
                    </div>
                    <div class="fmstr-cmp-ppf-uc__chips">
                      <span class="fmstr-cmp-ppf-uc__mini-chip fmstr-cmp-ppf-uc__mini-chip--violet"
                        >Code in confirmation</span
                      >
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-uc__card">
                  <span class="fmstr-cmp-ppf-uc__chip">IT / Ops</span>
                  <h3 class="fmstr-cmp-ppf-uc__h3">Internal IT and ops requests</h3>
                  <p class="fmstr-cmp-ppf-uc__body">
                    Access requests, equipment provisioning, security incident reports. Restrict the form to the
                    employee directory; only authenticated users can submit.
                  </p>
                  <div class="fmstr-cmp-ppf-uc__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-uc__form">
                      <span class="fmstr-cmp-ppf-uc__form-lock"
                        ><svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                      ></span>
                      <span class="fmstr-cmp-ppf-uc__form-name">IT access request</span>
                      <span class="fmstr-cmp-ppf-uc__form-state">Internal</span>
                    </div>
                    <div class="fmstr-cmp-ppf-uc__chips">
                      <span class="fmstr-cmp-ppf-uc__mini-chip">Employees only</span>
                      <span class="fmstr-cmp-ppf-uc__mini-chip fmstr-cmp-ppf-uc__mini-chip--green">Audit log</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-uc__card">
                  <span class="fmstr-cmp-ppf-uc__chip">Private events</span>
                  <h3 class="fmstr-cmp-ppf-uc__h3">Exclusive event RSVPs</h3>
                  <p class="fmstr-cmp-ppf-uc__body">
                    Private launch invites, members-only meetups, paid-program registrations. Share the password only
                    with the guest list. The link can travel, the form cannot be filled without the code.
                  </p>
                  <div class="fmstr-cmp-ppf-uc__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-uc__form">
                      <span class="fmstr-cmp-ppf-uc__form-lock"
                        ><svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                      ></span>
                      <span class="fmstr-cmp-ppf-uc__form-name">Launch RSVP</span>
                      <span class="fmstr-cmp-ppf-uc__form-state">Members only</span>
                    </div>
                    <div class="fmstr-cmp-ppf-uc__chips">
                      <span class="fmstr-cmp-ppf-uc__mini-chip fmstr-cmp-ppf-uc__mini-chip--violet">Shared code</span>
                      <span class="fmstr-cmp-ppf-uc__mini-chip">Guest list</span>
                    </div>
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
          <section class="fmstr-cmp-ppf-hiw" id="setup" aria-labelledby="fmstr-cmp-ppf-hiw-h2">
            <div class="fmstr-cmp-ppf-hiw__container">
              <header class="fmstr-cmp-ppf-hiw__header">
                <h2 class="fmstr-cmp-ppf-hiw__h2" id="fmstr-cmp-ppf-hiw-h2">
                  Turn on password protection in three steps
                </h2>
                <p class="fmstr-cmp-ppf-hiw__sub">No code, no plugin, no separate auth tool.</p>
              </header>
              <div class="fmstr-cmp-ppf-hiw__grid">
                <article class="fmstr-cmp-ppf-hiw__card">
                  <span class="fmstr-cmp-ppf-hiw__num" aria-hidden="true">1</span>
                  <h3 class="fmstr-cmp-ppf-hiw__h3">Open form settings</h3>
                  <p class="fmstr-cmp-ppf-hiw__body">
                    In your Formester form's Settings tab, find the Security section and toggle
                    <strong>"Password protection"</strong> on.
                  </p>
                  <div class="fmstr-cmp-ppf-hiw__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-hiw__panel-tabs">
                      <span class="fmstr-cmp-ppf-hiw__panel-tab">General</span>
                      <span class="fmstr-cmp-ppf-hiw__panel-tab fmstr-cmp-ppf-hiw__panel-tab--active">Security</span>
                      <span class="fmstr-cmp-ppf-hiw__panel-tab">Notify</span>
                    </div>
                    <div class="fmstr-cmp-ppf-hiw__toggle-row">
                      <span class="fmstr-cmp-ppf-hiw__toggle-name">Password protection</span>
                      <span class="fmstr-cmp-ppf-hiw__toggle"></span>
                    </div>
                    <div class="fmstr-cmp-ppf-hiw__toggle-row">
                      <span class="fmstr-cmp-ppf-hiw__toggle-name">Rate limit attempts</span>
                      <span class="fmstr-cmp-ppf-hiw__toggle"></span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-hiw__card">
                  <span class="fmstr-cmp-ppf-hiw__num" aria-hidden="true">2</span>
                  <h3 class="fmstr-cmp-ppf-hiw__h3">Choose the password mode</h3>
                  <p class="fmstr-cmp-ppf-hiw__body">
                    Pick <strong>Shared password</strong> (one password for everyone) or
                    <strong>Per-user passwords</strong> (a list of unique codes you can revoke individually). Enter the
                    password or upload the list.
                  </p>
                  <div class="fmstr-cmp-ppf-hiw__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-hiw__mode-label">Password mode</div>
                    <div class="fmstr-cmp-ppf-hiw__mode-row fmstr-cmp-ppf-hiw__mode-row--active">
                      <span class="fmstr-cmp-ppf-hiw__mode-radio"></span>
                      <span class="fmstr-cmp-ppf-hiw__mode-name">Shared password</span>
                    </div>
                    <div class="fmstr-cmp-ppf-hiw__mode-row">
                      <span class="fmstr-cmp-ppf-hiw__mode-radio"></span>
                      <span class="fmstr-cmp-ppf-hiw__mode-name">Per-user passwords</span>
                    </div>
                  </div>
                </article>

                <article class="fmstr-cmp-ppf-hiw__card">
                  <span class="fmstr-cmp-ppf-hiw__num" aria-hidden="true">3</span>
                  <h3 class="fmstr-cmp-ppf-hiw__h3">Publish and share</h3>
                  <p class="fmstr-cmp-ppf-hiw__body">
                    Publish the form. The URL stays the same; the form now opens to a login screen. Share the link and
                    the password through your channel of choice (email, SMS, signed letter). The access log starts
                    recording on the first attempt.
                  </p>
                  <div class="fmstr-cmp-ppf-hiw__visual" aria-hidden="true">
                    <div class="fmstr-cmp-ppf-hiw__share-label">Share with respondents</div>
                    <div class="fmstr-cmp-ppf-hiw__share-row">
                      <svg
                        class="fmstr-cmp-ppf-hiw__share-icon"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      <span class="fmstr-cmp-ppf-hiw__share-val">yourdomain.com/intake</span>
                    </div>
                    <div class="fmstr-cmp-ppf-hiw__share-row">
                      <svg
                        class="fmstr-cmp-ppf-hiw__share-icon"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span class="fmstr-cmp-ppf-hiw__share-val">••••••••</span>
                    </div>
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
          <section class="fmstr-cmp-ppf-vs" aria-labelledby="fmstr-cmp-ppf-vs-h2">
            <div class="fmstr-cmp-ppf-vs__container">
              <header class="fmstr-cmp-ppf-vs__header">
                <h2 class="fmstr-cmp-ppf-vs__h2" id="fmstr-cmp-ppf-vs-h2">
                  Password-protected form vs. the workarounds
                </h2>
                <p class="fmstr-cmp-ppf-vs__sub">What you would otherwise have to do.</p>
              </header>
              <div class="fmstr-cmp-ppf-vs__table-wrap">
                <table class="fmstr-cmp-ppf-vs__table">
                  <thead>
                    <tr>
                      <th>Capability</th>
                      <th>
                        <span class="fmstr-cmp-ppf-vs__col-brand"
                          ><span class="fmstr-cmp-ppf-vs__col-logo fmstr-cmp-ppf-vs__col-logo--google"
                            >Google Forms</span
                          ></span
                        >
                      </th>
                      <th>
                        <span class="fmstr-cmp-ppf-vs__col-brand"
                          ><span class="fmstr-cmp-ppf-vs__col-logo fmstr-cmp-ppf-vs__col-logo--ms">MS Forms</span></span
                        >
                      </th>
                      <th>
                        <span class="fmstr-cmp-ppf-vs__col-brand"
                          ><span class="fmstr-cmp-ppf-vs__col-logo fmstr-cmp-ppf-vs__col-logo--pdf"
                            >Protected PDF</span
                          ></span
                        >
                      </th>
                      <th>
                        <span class="fmstr-cmp-ppf-vs__col-brand"
                          ><span class="fmstr-cmp-ppf-vs__col-logo fmstr-cmp-ppf-vs__col-logo--fmstr"
                            >Formester</span
                          ></span
                        >
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Native password protection on the form itself</td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Tenant only</span></td>
                      <td>—</td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Yes</span></td>
                    </tr>
                    <tr>
                      <td>Works for external respondents (outside your org)</td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No, requires Google sign-in</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No, requires MS account</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Yes</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Yes</span></td>
                    </tr>
                    <tr>
                      <td>Per-user passwords with revocation</td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Yes</span></td>
                    </tr>
                    <tr>
                      <td>Access log of every attempt</td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Limited</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__no">No</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Yes</span></td>
                    </tr>
                    <tr>
                      <td>Bcrypt-hashed password storage</td>
                      <td>—</td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">MS-managed</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Local file, weaker</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Yes, server-side</span></td>
                    </tr>
                    <tr>
                      <td>GDPR / UK GDPR / CCPA</td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Tenant</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Tenant</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Up to you</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">Out of the box</span></td>
                    </tr>
                    <tr>
                      <td>Setup time</td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Workaround</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Limited to tenant</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__partial">Per file, manual</span></td>
                      <td><span class="fmstr-cmp-ppf-vs__yes">One toggle</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="fmstr-cmp-ppf-vs__takeaway">
                <strong>Takeaway:</strong> If the form has to be private and you cannot force every respondent into your
                Google or Microsoft tenant, a Formester password-protected form is the cleanest fit. PDFs work for
                finished documents; forms work when you need someone to fill it out.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TemplateSection
      description="Get Started with ready-made Templates"
      :title="c7_title"
      :button="c7_button"
      :specificTemplate="c7_specificTemplate"
      class="page-component-item"
    />

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
          <section class="fmstr-cmp-ppf-faq" aria-labelledby="fmstr-cmp-ppf-faq-h2">
            <div class="fmstr-cmp-ppf-faq__container">
              <header class="fmstr-cmp-ppf-faq__header">
                <h2 class="fmstr-cmp-ppf-faq__h2" id="fmstr-cmp-ppf-faq-h2">Common questions</h2>
              </header>
              <div class="fmstr-cmp-ppf-faq__list">
                <details class="fmstr-cmp-ppf-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-ppf-faq__h3">How is this different from a password-protected PDF?</h3>
                  </summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      A password-protected PDF is a static, finished document you encrypt with a password before
                      sharing. A password-protected form is a live web form with a login screen in front of it. Use a
                      PDF for "here is the contract, read it." Use a form when you need the person to fill in fields and
                      submit data back to you.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-ppf-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-ppf-faq__h3">Can I add password protection to a Google Form?</h3>
                  </summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      Not natively. Google Forms restricts access by Google account (sign-in required) or by domain, but
                      does not support a per-form password for external respondents. The workaround is to rebuild the
                      form in a tool that does support it, like Formester.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-ppf-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-ppf-faq__h3">Shared password for everyone, or unique passwords per user?</h3>
                  </summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      Both modes are supported. Shared password is one code that everyone with access uses; good for
                      team-wide forms or gated invites. Per-user passwords are unique codes you generate per respondent;
                      good for HR audits, legal intake, or anywhere you need to revoke one person's access without
                      changing it for the rest.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-ppf-faq__item">
                  <summary><h3 class="fmstr-cmp-ppf-faq__h3">How is the password stored?</h3></summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      Passwords are hashed with bcrypt on the server. Formester never stores or logs the plaintext
                      password after the initial set. If you forget the password, you reset it (the old one is
                      unrecoverable, by design).
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-ppf-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-ppf-faq__h3">
                      What does a respondent see when they enter the wrong password?
                    </h3>
                  </summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      A generic "wrong password, try again" message — no detail that would help an attacker. After
                      repeated failed attempts, the form rate-limits the IP. Every attempt lands in the form's access
                      log with timestamp.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-ppf-faq__item">
                  <summary><h3 class="fmstr-cmp-ppf-faq__h3">Does this work alongside form encryption?</h3></summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      Yes. Password protection gates access. The submission itself is also encrypted in transit (TLS
                      1.2+) and at rest (managed encryption). The two layers are independent — turn on either or both
                      depending on the sensitivity.
                    </p>
                  </div>
                </details>

                <details class="fmstr-cmp-ppf-faq__item">
                  <summary>
                    <h3 class="fmstr-cmp-ppf-faq__h3">Can I make the form password-protected AND require a sign-in?</h3>
                  </summary>
                  <div class="fmstr-cmp-ppf-faq__answer">
                    <p>
                      No, those are two different access models. Pick one: password protection for external respondents
                      who do not have an account with you, or a sign-in-required flow if you run a respondent portal
                      (separate Formester feature).
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
          <section class="fmstr-cmp-ppf-cta" aria-labelledby="fmstr-cmp-ppf-cta-h2">
            <div class="fmstr-cmp-ppf-cta__container">
              <span class="fmstr-cmp-ppf-cta__eyebrow"
                ><span class="fmstr-cmp-ppf-cta__eyebrow-dot" aria-hidden="true"></span>Password protected form
                builder</span
              >
              <h2 class="fmstr-cmp-ppf-cta__h2" id="fmstr-cmp-ppf-cta-h2">
                Add a password gate to your next form in 30 seconds
              </h2>
              <p class="fmstr-cmp-ppf-cta__sub">
                Free to start. One toggle in form settings. Share the link, share the password, the access log starts
                recording.
              </p>
              <div class="fmstr-cmp-ppf-cta__ctas">
                <a class="fmstr-cmp-ppf-cta__cta-primary" href="https://app.formester.com/users/sign_up">
                  Start free
                  <svg
                    class="fmstr-cmp-ppf-cta__cta-arrow"
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
                <a class="fmstr-cmp-ppf-cta__cta-secondary" href="https://formester.com/security/"
                  >See all security features</a
                >
              </div>
              <p class="fmstr-cmp-ppf-cta__meta">
                Free plan. No credit card. Bcrypt-hashed passwords, full access log.
              </p>
              <div class="fmstr-cmp-ppf-cta__stats">
                <div class="fmstr-cmp-ppf-cta__stat">
                  <span class="fmstr-cmp-ppf-cta__stat-value">30s</span
                  ><span class="fmstr-cmp-ppf-cta__stat-label">To turn on</span>
                </div>
                <div class="fmstr-cmp-ppf-cta__stat">
                  <span class="fmstr-cmp-ppf-cta__stat-value">bcrypt</span
                  ><span class="fmstr-cmp-ppf-cta__stat-label">Password hashing</span>
                </div>
                <div class="fmstr-cmp-ppf-cta__stat">
                  <span class="fmstr-cmp-ppf-cta__stat-value">GDPR</span
                  ><span class="fmstr-cmp-ppf-cta__stat-label">+ UK GDPR + CCPA</span>
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
import TemplateSection from '@/components/features/TemplateSection.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c1_title = []
const c1_logos = []
const c7_title = [
  {
    id: 3711,
    text: 'Pre-built Templates',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c7_button = {
  id: 1126,
  link: '/templates/',
  text: 'More Templates',
  type: 'Primary',
  showArrow: null,
}
const c7_specificTemplate = [
  {
    id: 1859,
    text: 'background-check-authorization-form-22780',
  },
  {
    id: 1860,
    text: 'budget-approval-form-35164',
  },
  {
    id: 1861,
    text: 'compliance-agreement-form-35172',
  },
]

useHead({
  title: 'Password Protected Forms: Add a Login Gate to Any Form',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/password-protect-form/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:56.803Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Build a password-protected form in minutes. Set a shared password or unique per-user access. Only the people you trust can open and submit. Free to try inside Formester.\n',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Password Protected Forms: Add a Login Gate to Any Form',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/password-protect-form/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Password Protected Forms: Add a Login Gate to Any Form',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Build a password-protected form in minutes. Set a shared password or unique per-user access. Only the people you trust can open and submit. Free to try inside Formester.\n',
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
      content: 'https://formester.com/features/password-protect-form/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Password Protected Forms: Add a Login Gate to Any Form',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Build a password-protected form in minutes. Set a shared password or unique per-user access. Only the people you trust can open and submit. Free to try inside Formester.\n',
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
        '@id': 'https://acornglobus.com',
        url: 'https://formester.com',
        logo: 'https://formester.com/logo.png',
        name: 'Password Protection',
        '@type': 'Corporation',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'United States',
          addressLocality: 'Delaware',
        },
        description:
          'Add password protection to your forms to control access, safeguard sensitive data and ensure only authorized users can view or submit responses.',
      },
      {
        '@id': 'https://acornglobus.com',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            item: 'https://formester.com/features',
            name: 'Features',
            '@type': 'ListItem',
            position: 1,
          },
          {
            item: 'https://formester.com/features/password-protect-form/',
            name: 'Custom CSS Forms',
            '@type': 'ListItem',
            position: 2,
          },
        ],
      },
    ],
    '@context': 'http://schema.org',
  },
])
</script>

<style scoped>
.fmstr-cmp-ppf-hero a {
  text-decoration: none !important;
}
.fmstr-cmp-ppf-hero {
  --c-bg: #fff;
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
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04);
  --c-shadow-md: 0 8px 24px rgba(16, 24, 40, 0.08);
  --c-shadow-lg: 0 20px 50px rgba(16, 24, 40, 0.12);
  position: relative;
  background: linear-gradient(180deg, #fff 0%, #fbfaff 60%, #f7f3ff 100%);
  padding: 96px 24px 80px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-hero *,
.fmstr-cmp-ppf-hero *::before,
.fmstr-cmp-ppf-hero *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-hero > *,
.fmstr-cmp-ppf-hero > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-hero__container {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.fmstr-cmp-ppf-hero__copy {
  max-width: 560px;
}
.fmstr-cmp-ppf-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 8px;
  margin-bottom: 24px;
  background: #fff;
  border: 1px solid var(--c-edge);
  border-radius: 9999px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--c-violet-700);
  box-shadow: var(--c-shadow-sm);
}
.fmstr-cmp-ppf-hero__badge-dot {
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  background: var(--c-violet-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.fmstr-cmp-ppf-hero__h1 {
  margin: 0 0 18px;
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 700;
}
.fmstr-cmp-ppf-hero__sub {
  margin: 0 0 28px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-hero__checks {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  font-size: 14px;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-hero__check {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.fmstr-cmp-ppf-hero__check svg {
  color: var(--c-violet-600);
}
.fmstr-cmp-ppf-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-primary,
.fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-secondary {
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
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}
.fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-primary {
  background: var(--c-violet-500) !important;
  color: #fff !important;
  border: 1px solid var(--c-violet-500);
  box-shadow: 0 6px 16px rgba(127, 86, 217, 0.28);
}
.fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-primary:hover {
  background: var(--c-violet-600) !important;
  border-color: var(--c-violet-600);
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(127, 86, 217, 0.34);
}
.fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-secondary {
  background: #fff !important;
  color: var(--c-fg-1) !important;
  border: 1px solid var(--c-border);
}
.fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-secondary:hover {
  border-color: var(--c-edge);
  background: var(--c-soft) !important;
}

.fmstr-cmp-ppf-hero__visual {
  position: relative;
  max-width: 100%;
}
.fmstr-cmp-ppf-hero__gate {
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 18px;
  box-shadow: var(--c-shadow-lg);
  overflow: hidden;
}
.fmstr-cmp-ppf-hero__gate-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f9fafb;
  border-bottom: 1px solid var(--c-border);
  font-size: 12px;
  font-weight: 600;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-hero__gate-dot {
  width: 9px;
  height: 9px;
  border-radius: 9999px;
  background: #d0d5dd;
}
.fmstr-cmp-ppf-hero__gate-url {
  margin-left: 8px;
  padding: 2px 8px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 5px;
  font-size: 11px;
  color: var(--c-fg-3);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.fmstr-cmp-ppf-hero__gate-inner {
  padding: 42px 36px;
  text-align: center;
}
.fmstr-cmp-ppf-hero__lock {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--c-tint);
  color: var(--c-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  border: 1px solid var(--c-edge);
}
.fmstr-cmp-ppf-hero__gate-title {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 6px;
}
.fmstr-cmp-ppf-hero__gate-sub {
  font-size: 13px;
  color: var(--c-fg-3);
  margin: 0 0 22px;
}
.fmstr-cmp-ppf-hero__gate-input {
  padding: 11px 14px;
  background: #fff;
  border: 1px solid var(--c-violet-500);
  border-radius: 9px;
  font-size: 13.5px;
  color: var(--c-fg-1);
  width: 100%;
  max-width: 280px;
  text-align: left;
  box-shadow: 0 0 0 3px rgba(127, 86, 217, 0.12);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.2em;
  margin: 0 auto 14px;
  display: block;
}
.fmstr-cmp-ppf-hero__gate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  background: var(--c-violet-500);
  color: #fff;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 600;
}
.fmstr-cmp-ppf-hero__log {
  position: absolute;
  right: -16px;
  bottom: -22px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid var(--c-edge);
  border-radius: 12px;
  font-size: 11.5px;
  color: var(--c-fg-2);
  box-shadow: var(--c-shadow-md);
  min-width: 220px;
}
.fmstr-cmp-ppf-hero__log-title {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-fg-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 2px;
}
.fmstr-cmp-ppf-hero__log-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10.5px;
}
.fmstr-cmp-ppf-hero__log-ok {
  color: #027a48;
  font-weight: 700;
}
.fmstr-cmp-ppf-hero__log-fail {
  color: #b42318;
  font-weight: 700;
}

@media (max-width: 980px) {
  .fmstr-cmp-ppf-hero__container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .fmstr-cmp-ppf-hero__copy {
    max-width: 100%;
  }
  .fmstr-cmp-ppf-hero__log {
    right: 8px;
    bottom: -18px;
  }
}
@media (max-width: 760px) {
  .fmstr-cmp-ppf-hero {
    padding: 72px 16px 64px;
  }
  .fmstr-cmp-ppf-hero__ctas {
    flex-direction: column;
    align-items: stretch;
  }
  .fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-primary,
  .fmstr-cmp-ppf-hero a.fmstr-cmp-ppf-hero__cta-secondary {
    justify-content: center;
  }
  .fmstr-cmp-ppf-hero__log {
    position: static;
    margin-top: 18px;
  }
}

.fmstr-cmp-ppf-wis {
  --c-bg: #fff;
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
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05);
  background: var(--c-bg);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-wis *,
.fmstr-cmp-ppf-wis *::before,
.fmstr-cmp-ppf-wis *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-wis > *,
.fmstr-cmp-ppf-wis > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-wis__container {
  max-width: 980px;
  margin: 0 auto;
}
.fmstr-cmp-ppf-wis__header {
  max-width: 760px;
  margin: 0 auto 36px;
  text-align: center;
}
.fmstr-cmp-ppf-wis__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.fmstr-cmp-ppf-wis__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-wis__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.fmstr-cmp-ppf-wis__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
}
.fmstr-cmp-ppf-wis__card--yes {
  background: linear-gradient(135deg, #f7f3ff 0%, #fff 100%);
  border-color: var(--c-edge);
}
.fmstr-cmp-ppf-wis__card-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.fmstr-cmp-ppf-wis__card-tag--yes {
  background: #ecfdf3;
  color: #027a48;
}
.fmstr-cmp-ppf-wis__card-tag--no {
  background: #fef3c7;
  color: #92400e;
}
.fmstr-cmp-ppf-wis__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-wis__body strong {
  color: var(--c-fg-1);
  font-weight: 600;
}

.fmstr-cmp-ppf-wis__diag {
  margin-top: auto;
  padding: 14px;
  background: #f9fafb;
  border: 1px solid var(--c-border);
  border-radius: 10px;
}

/* Card 1: live form gate */
.fmstr-cmp-ppf-wis__gate {
  background: #fff;
  border: 1px solid var(--c-edge);
  border-radius: 8px;
  padding: 14px;
  text-align: center;
}
.fmstr-cmp-ppf-wis__gate-lock {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--c-tint);
  color: var(--c-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}
.fmstr-cmp-ppf-wis__gate-label {
  font-size: 10.5px;
  font-weight: 700;
  color: var(--c-violet-700);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fmstr-cmp-ppf-wis__gate-input {
  padding: 5px 10px;
  background: #fff;
  border: 1px solid var(--c-violet-500);
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  letter-spacing: 0.2em;
  color: var(--c-fg-1);
  box-shadow: 0 0 0 2px rgba(127, 86, 217, 0.12);
  display: inline-block;
}
.fmstr-cmp-ppf-wis__gate-meta {
  margin-top: 8px;
  font-size: 10.5px;
  color: var(--c-fg-3);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Card 2: PDF document with padlock */
.fmstr-cmp-ppf-wis__diag--no {
  background: #fffbeb;
  border-color: #fde68a;
}
.fmstr-cmp-ppf-wis__pdf {
  background: #fff;
  border: 1px solid #fde68a;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.fmstr-cmp-ppf-wis__pdf-icon {
  width: 42px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #fca5a5;
  border-radius: 5px;
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  font-size: 11px;
  font-weight: 800;
}
.fmstr-cmp-ppf-wis__pdf-icon::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: #fef3c7;
  border-bottom: 1px solid #fca5a5;
  border-left: 1px solid #fca5a5;
}
.fmstr-cmp-ppf-wis__pdf-meta {
  flex: 1;
}
.fmstr-cmp-ppf-wis__pdf-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--c-fg-1);
  margin-bottom: 3px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.fmstr-cmp-ppf-wis__pdf-state {
  font-size: 10.5px;
  color: #92400e;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 4px;
}
.fmstr-cmp-ppf-wis__pdf-state svg {
  color: #92400e;
}
.fmstr-cmp-ppf-wis__pdf-note {
  margin-top: 8px;
  font-size: 10.5px;
  color: var(--c-fg-3);
  text-align: center;
  line-height: 1.5;
}

@media (max-width: 760px) {
  .fmstr-cmp-ppf-wis {
    padding: 64px 16px;
  }
  .fmstr-cmp-ppf-wis__cards {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-ppf-wis__card {
    padding: 22px;
  }
}

.fmstr-cmp-ppf-ben {
  --c-bg: #fff;
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
  --c-red-500: #f04438;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);
  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-ben *,
.fmstr-cmp-ppf-ben *::before,
.fmstr-cmp-ppf-ben *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-ben > *,
.fmstr-cmp-ppf-ben > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-ben__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-ppf-ben__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-ppf-ben__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.fmstr-cmp-ppf-ben__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-ben__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.fmstr-cmp-ppf-ben__card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}
.fmstr-cmp-ppf-ben__card:hover {
  border-color: var(--c-edge);
  box-shadow: var(--c-shadow-md);
  transform: translateY(-2px);
}
.fmstr-cmp-ppf-ben__icon {
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
.fmstr-cmp-ppf-ben__h3 {
  margin: 0;
  font-size: 17px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-ben__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-ben__body strong {
  color: var(--c-fg-1);
  font-weight: 600;
}

.fmstr-cmp-ppf-ben__visual {
  margin-top: auto;
  padding: 12px;
  background: var(--c-soft);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  font-size: 12px;
}

/* Card 1: blocked vs allowed */
.fmstr-cmp-ppf-ben__gate-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 7px;
  font-size: 11.5px;
}
.fmstr-cmp-ppf-ben__gate-row + .fmstr-cmp-ppf-ben__gate-row {
  margin-top: 5px;
}
.fmstr-cmp-ppf-ben__gate-mark {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmstr-cmp-ppf-ben__gate-mark--no {
  background: #fee4e2;
  color: #b42318;
}
.fmstr-cmp-ppf-ben__gate-mark--yes {
  background: #d1fadf;
  color: #027a48;
}
.fmstr-cmp-ppf-ben__gate-state {
  flex: 1;
  color: var(--c-fg-1);
  font-weight: 600;
}
.fmstr-cmp-ppf-ben__gate-detail {
  font-size: 10.5px;
  color: var(--c-fg-3);
}

/* Card 2: shared vs per-user toggle */
.fmstr-cmp-ppf-ben__mode-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-fg-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fmstr-cmp-ppf-ben__mode-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 7px;
}
.fmstr-cmp-ppf-ben__mode-row + .fmstr-cmp-ppf-ben__mode-row {
  margin-top: 5px;
}
.fmstr-cmp-ppf-ben__mode-row--active {
  border-color: var(--c-violet-500);
  background: var(--c-tint);
}
.fmstr-cmp-ppf-ben__mode-radio {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--c-border);
  flex-shrink: 0;
  position: relative;
}
.fmstr-cmp-ppf-ben__mode-row--active .fmstr-cmp-ppf-ben__mode-radio {
  border-color: var(--c-violet-500);
}
.fmstr-cmp-ppf-ben__mode-row--active .fmstr-cmp-ppf-ben__mode-radio::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-violet-500);
}
.fmstr-cmp-ppf-ben__mode-name {
  font-size: 11.5px;
  color: var(--c-fg-1);
  font-weight: 600;
  flex: 1;
}
.fmstr-cmp-ppf-ben__mode-count {
  font-size: 10.5px;
  color: var(--c-fg-3);
  font-weight: 600;
}

/* Card 3: access log */
.fmstr-cmp-ppf-ben__log-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-fg-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fmstr-cmp-ppf-ben__log-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  align-items: center;
  padding: 5px 8px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10.5px;
}
.fmstr-cmp-ppf-ben__log-row + .fmstr-cmp-ppf-ben__log-row {
  margin-top: 4px;
}
.fmstr-cmp-ppf-ben__log-time {
  color: var(--c-fg-3);
}
.fmstr-cmp-ppf-ben__log-ip {
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-ben__log-status {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 1px 6px;
  border-radius: 4px;
}
.fmstr-cmp-ppf-ben__log-status--ok {
  background: #d1fadf;
  color: #027a48;
}
.fmstr-cmp-ppf-ben__log-status--fail {
  background: #fee4e2;
  color: #b42318;
}

@media (max-width: 1000px) {
  .fmstr-cmp-ppf-ben__grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-ppf-ben {
    padding: 64px 16px;
  }
  .fmstr-cmp-ppf-ben__card {
    padding: 22px;
  }
}

.fmstr-cmp-ppf-uc {
  --c-bg: #fff;
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
  --c-amber-500: #f79009;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  --c-shadow-md: 0 4px 20px rgba(16, 24, 40, 0.06);
  background: var(--c-bg);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-uc *,
.fmstr-cmp-ppf-uc *::before,
.fmstr-cmp-ppf-uc *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-uc > *,
.fmstr-cmp-ppf-uc > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-uc__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-ppf-uc__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-ppf-uc__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.fmstr-cmp-ppf-uc__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-uc__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.fmstr-cmp-ppf-uc__card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}
.fmstr-cmp-ppf-uc__card:hover {
  border-color: var(--c-edge);
  box-shadow: var(--c-shadow-md);
  transform: translateY(-2px);
}
.fmstr-cmp-ppf-uc__chip {
  display: inline-block;
  padding: 3px 10px;
  background: var(--c-tint);
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-violet-700);
  align-self: flex-start;
}
.fmstr-cmp-ppf-uc__h3 {
  margin: 0;
  font-size: 17px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-uc__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}

.fmstr-cmp-ppf-uc__visual {
  margin-top: auto;
  padding: 12px;
  background: var(--c-soft);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.fmstr-cmp-ppf-uc__form {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 7px;
  font-size: 11.5px;
}
.fmstr-cmp-ppf-uc__form-lock {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background: var(--c-tint);
  color: var(--c-violet-600);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmstr-cmp-ppf-uc__form-name {
  flex: 1;
  color: var(--c-fg-1);
  font-weight: 600;
}
.fmstr-cmp-ppf-uc__form-state {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 9999px;
  background: var(--c-tint);
  color: var(--c-violet-700);
}
.fmstr-cmp-ppf-uc__mode {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  font-size: 10.5px;
  color: var(--c-fg-3);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.fmstr-cmp-ppf-uc__mode svg {
  color: var(--c-green-500);
  flex-shrink: 0;
}
.fmstr-cmp-ppf-uc__chips {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
.fmstr-cmp-ppf-uc__mini-chip {
  padding: 3px 7px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 5px;
  font-size: 10.5px;
  color: var(--c-fg-2);
  font-weight: 600;
}
.fmstr-cmp-ppf-uc__mini-chip--violet {
  background: var(--c-tint);
  color: var(--c-violet-700);
  border-color: var(--c-edge);
}
.fmstr-cmp-ppf-uc__mini-chip--green {
  background: #d1fadf;
  color: #027a48;
  border-color: #abefc6;
}

@media (max-width: 1000px) {
  .fmstr-cmp-ppf-uc__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-ppf-uc {
    padding: 64px 16px;
  }
  .fmstr-cmp-ppf-uc__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .fmstr-cmp-ppf-uc__card {
    padding: 22px;
  }
}

.fmstr-cmp-ppf-hiw {
  --c-bg: #fff;
  --c-soft: #f9fafb;
  --c-tint: #f7f3ff;
  --c-edge: #e4d7ff;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
  --c-fg-3: #697586;
  --c-violet-500: #7f56d9;
  --c-violet-700: #5b34b1;
  --c-green-500: #12b76a;
  --c-border: #eaecf0;
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03);
  background: var(--c-soft);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-hiw *,
.fmstr-cmp-ppf-hiw *::before,
.fmstr-cmp-ppf-hiw *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-hiw > *,
.fmstr-cmp-ppf-hiw > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-hiw__container {
  max-width: 1180px;
  margin: 0 auto;
}
.fmstr-cmp-ppf-hiw__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-ppf-hiw__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.fmstr-cmp-ppf-hiw__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-hiw__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.fmstr-cmp-ppf-hiw__card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  box-shadow: var(--c-shadow-sm);
}
.fmstr-cmp-ppf-hiw__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--c-violet-500), var(--c-violet-700));
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  flex-shrink: 0;
}
.fmstr-cmp-ppf-hiw__h3 {
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-hiw__body {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-hiw__body strong {
  color: var(--c-fg-1);
  font-weight: 600;
}

.fmstr-cmp-ppf-hiw__visual {
  margin-top: auto;
  padding: 12px;
  background: var(--c-soft);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  font-size: 12px;
}

/* Step 1: settings panel with toggle */
.fmstr-cmp-ppf-hiw__panel-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 8px;
  font-size: 10.5px;
}
.fmstr-cmp-ppf-hiw__panel-tab {
  padding: 4px 9px;
  border-radius: 5px;
  color: var(--c-fg-3);
  font-weight: 600;
}
.fmstr-cmp-ppf-hiw__panel-tab--active {
  background: var(--c-tint);
  color: var(--c-violet-700);
}
.fmstr-cmp-ppf-hiw__toggle-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 7px;
}
.fmstr-cmp-ppf-hiw__toggle-row + .fmstr-cmp-ppf-hiw__toggle-row {
  margin-top: 5px;
}
.fmstr-cmp-ppf-hiw__toggle-name {
  flex: 1;
  font-size: 11.5px;
  color: var(--c-fg-1);
  font-weight: 600;
}
.fmstr-cmp-ppf-hiw__toggle {
  position: relative;
  width: 30px;
  height: 17px;
  background: var(--c-green-500);
  border-radius: 9999px;
  flex-shrink: 0;
}
.fmstr-cmp-ppf-hiw__toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  width: 13px;
  height: 13px;
  border-radius: 9999px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
.fmstr-cmp-ppf-hiw__toggle--off {
  background: #d0d5dd;
}
.fmstr-cmp-ppf-hiw__toggle--off::after {
  right: auto;
  left: 2px;
}

/* Step 2: radio: shared vs per-user */
.fmstr-cmp-ppf-hiw__mode-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-fg-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fmstr-cmp-ppf-hiw__mode-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 7px;
}
.fmstr-cmp-ppf-hiw__mode-row + .fmstr-cmp-ppf-hiw__mode-row {
  margin-top: 5px;
}
.fmstr-cmp-ppf-hiw__mode-row--active {
  border-color: var(--c-violet-500);
  background: var(--c-tint);
}
.fmstr-cmp-ppf-hiw__mode-radio {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--c-border);
  flex-shrink: 0;
  position: relative;
}
.fmstr-cmp-ppf-hiw__mode-row--active .fmstr-cmp-ppf-hiw__mode-radio {
  border-color: var(--c-violet-500);
}
.fmstr-cmp-ppf-hiw__mode-row--active .fmstr-cmp-ppf-hiw__mode-radio::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-violet-500);
}
.fmstr-cmp-ppf-hiw__mode-name {
  font-size: 11.5px;
  color: var(--c-fg-1);
  font-weight: 600;
}

/* Step 3: link + password share */
.fmstr-cmp-ppf-hiw__share-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-fg-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fmstr-cmp-ppf-hiw__share-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 7px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-hiw__share-row + .fmstr-cmp-ppf-hiw__share-row {
  margin-top: 5px;
}
.fmstr-cmp-ppf-hiw__share-icon {
  color: var(--c-violet-600);
  flex-shrink: 0;
}
.fmstr-cmp-ppf-hiw__share-val {
  color: var(--c-fg-1);
  font-weight: 600;
  flex: 1;
}

@media (max-width: 1000px) {
  .fmstr-cmp-ppf-hiw__grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
}
@media (max-width: 640px) {
  .fmstr-cmp-ppf-hiw {
    padding: 64px 16px;
  }
  .fmstr-cmp-ppf-hiw__card {
    padding: 22px;
  }
}

.fmstr-cmp-ppf-vs {
  --c-bg: #fff;
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
  --c-shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.05);
  background: var(--c-bg);
  padding: 88px 24px;
  font-family: inherit;
  overflow-x: hidden;
  color: var(--c-fg-1);
}
.fmstr-cmp-ppf-vs *,
.fmstr-cmp-ppf-vs *::before,
.fmstr-cmp-ppf-vs *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-vs > *,
.fmstr-cmp-ppf-vs > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-vs__container {
  max-width: 1100px;
  margin: 0 auto;
}
.fmstr-cmp-ppf-vs__header {
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
}
.fmstr-cmp-ppf-vs__h2 {
  margin: 0 0 14px;
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.fmstr-cmp-ppf-vs__sub {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-vs__table-wrap {
  border: 1px solid var(--c-border);
  border-radius: 16px;
  overflow: auto;
  box-shadow: var(--c-shadow-sm);
  background: #fff;
}
.fmstr-cmp-ppf-vs__table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 13.5px;
}
.fmstr-cmp-ppf-vs__table thead th {
  padding: 14px 12px;
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--c-fg-3);
  background: var(--c-soft);
  border-bottom: 1px solid var(--c-border);
}
.fmstr-cmp-ppf-vs__table thead th:not(:first-child) {
  text-align: center;
}
.fmstr-cmp-ppf-vs__col-brand {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.fmstr-cmp-ppf-vs__col-logo {
  height: 26px;
  padding: 0 8px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid var(--c-border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 10.5px;
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.fmstr-cmp-ppf-vs__col-logo--google {
  color: #673ab7;
}
.fmstr-cmp-ppf-vs__col-logo--ms {
  color: #107c41;
}
.fmstr-cmp-ppf-vs__col-logo--pdf {
  color: #ea4335;
}
.fmstr-cmp-ppf-vs__col-logo--fmstr {
  color: var(--c-violet-600);
}
.fmstr-cmp-ppf-vs__table tbody tr {
  border-bottom: 1px solid var(--c-border);
}
.fmstr-cmp-ppf-vs__table tbody tr:last-child {
  border-bottom: none;
}
.fmstr-cmp-ppf-vs__table tbody td {
  padding: 13px 12px;
  vertical-align: middle;
  color: var(--c-fg-2);
}
.fmstr-cmp-ppf-vs__table tbody td:first-child {
  color: var(--c-fg-1);
  font-weight: 600;
}
.fmstr-cmp-ppf-vs__table tbody td:not(:first-child) {
  text-align: center;
}
.fmstr-cmp-ppf-vs__yes {
  color: #027a48;
  font-weight: 600;
  font-size: 12.5px;
}
.fmstr-cmp-ppf-vs__partial {
  color: #b54708;
  font-weight: 600;
  font-size: 12.5px;
}
.fmstr-cmp-ppf-vs__no {
  color: #b42318;
  font-weight: 600;
  font-size: 12.5px;
}
.fmstr-cmp-ppf-vs__takeaway {
  margin: 28px auto 0;
  max-width: 820px;
  padding: 18px 22px;
  background: var(--c-tint);
  border: 1px solid var(--c-edge);
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--c-fg-2);
  text-align: center;
}
.fmstr-cmp-ppf-vs__takeaway strong {
  color: var(--c-violet-700);
  font-weight: 600;
}
@media (max-width: 760px) {
  .fmstr-cmp-ppf-vs {
    padding: 64px 16px;
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

.fmstr-cmp-ppf-faq a {
  text-decoration: none !important;
}
.fmstr-cmp-ppf-faq {
  --c-card: #fff;
  --c-soft: #f9fafb;
  --c-fg-1: #101828;
  --c-fg-2: #475467;
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
.fmstr-cmp-ppf-faq *,
.fmstr-cmp-ppf-faq *::before,
.fmstr-cmp-ppf-faq *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-faq > *,
.fmstr-cmp-ppf-faq > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-faq__container {
  max-width: 820px;
  margin: 0 auto;
}
.fmstr-cmp-ppf-faq__header {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
}
.fmstr-cmp-ppf-faq__h2 {
  margin: 0;
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.fmstr-cmp-ppf-faq__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fmstr-cmp-ppf-faq__item {
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  box-shadow: var(--c-shadow-sm);
  overflow: hidden;
}
.fmstr-cmp-ppf-faq__item > summary {
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
.fmstr-cmp-ppf-faq__item > summary::-webkit-details-marker {
  display: none;
}
.fmstr-cmp-ppf-faq__item > summary::before {
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
.fmstr-cmp-ppf-faq__item[open] > summary::before {
  transform: rotate(180deg);
  background-color: var(--c-tint);
}
.fmstr-cmp-ppf-faq__item[open] > summary {
  color: var(--c-violet-600) !important;
}
.fmstr-cmp-ppf-faq__h3 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  flex: 1;
}
.fmstr-cmp-ppf-faq__answer {
  padding: 0 22px 22px 64px;
  color: var(--c-fg-2);
  font-size: 15.5px;
  line-height: 1.7;
}
.fmstr-cmp-ppf-faq__answer p {
  margin: 0 0 10px;
}
.fmstr-cmp-ppf-faq__answer p:last-child {
  margin-bottom: 0;
}
.fmstr-cmp-ppf-faq__answer a {
  color: var(--c-violet-600) !important;
  text-decoration: none !important;
}
.fmstr-cmp-ppf-faq__answer a:hover {
  text-decoration: underline !important;
}
@media (max-width: 760px) {
  .fmstr-cmp-ppf-faq {
    padding: 64px 16px;
  }
  .fmstr-cmp-ppf-faq__item > summary {
    padding: 16px;
    font-size: 15.5px;
    gap: 12px;
  }
  .fmstr-cmp-ppf-faq__answer {
    padding: 0 16px 18px 16px;
    font-size: 15px;
  }
}

.fmstr-cmp-ppf-cta a {
  text-decoration: none !important;
}
.fmstr-cmp-ppf-cta {
  --c-violet-500: #7f56d9;
  --c-violet-700: #5b34b1;
  --c-violet-900: #3f1d8a;
  --c-fg-on-dark: #fff;
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
.fmstr-cmp-ppf-cta *,
.fmstr-cmp-ppf-cta *::before,
.fmstr-cmp-ppf-cta *::after {
  box-sizing: border-box;
}
.fmstr-cmp-ppf-cta > *,
.fmstr-cmp-ppf-cta > * > * {
  min-width: 0;
}
.fmstr-cmp-ppf-cta::before {
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
.fmstr-cmp-ppf-cta__container {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.fmstr-cmp-ppf-cta__eyebrow {
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
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}
.fmstr-cmp-ppf-cta__eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 0 4px rgba(134, 239, 172, 0.25);
  animation: fmstr-cmp-ppf-cta-pulse 2s ease-in-out infinite;
}
@keyframes fmstr-cmp-ppf-cta-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgba(134, 239, 172, 0.25);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(134, 239, 172, 0.1);
  }
}
.fmstr-cmp-ppf-cta__h2 {
  margin: 0 0 18px;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 700;
}
.fmstr-cmp-ppf-cta__sub {
  margin: 0 auto 36px;
  max-width: 580px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--c-fg-on-dark-2);
}
.fmstr-cmp-ppf-cta__ctas {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 12px;
  background: #fff !important;
  color: var(--c-violet-900) !important;
  font-weight: 700;
  font-size: 16px;
  border: 1px solid #fff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}
.fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
}
.fmstr-cmp-ppf-cta__cta-arrow {
  transition: transform 0.15s;
}
.fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-primary:hover .fmstr-cmp-ppf-cta__cta-arrow {
  transform: translateX(2px);
}
.fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08) !important;
  color: #fff !important;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    background 0.15s,
    border-color 0.15s;
}
.fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-secondary:hover {
  background: rgba(255, 255, 255, 0.16) !important;
  border-color: rgba(255, 255, 255, 0.32);
}
.fmstr-cmp-ppf-cta__meta {
  margin: 32px 0 0;
  font-size: 13.5px;
  color: var(--c-fg-on-dark-3);
}
.fmstr-cmp-ppf-cta__stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 56px;
  padding-top: 36px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  flex-wrap: wrap;
}
.fmstr-cmp-ppf-cta__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.fmstr-cmp-ppf-cta__stat-value {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  font-variant-numeric: tabular-nums;
}
.fmstr-cmp-ppf-cta__stat-label {
  font-size: 12.5px;
  color: var(--c-fg-on-dark-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}
@media (max-width: 760px) {
  .fmstr-cmp-ppf-cta {
    padding: 72px 16px;
  }
  .fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-primary,
  .fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-secondary {
    padding: 14px 24px;
    font-size: 15px;
  }
  .fmstr-cmp-ppf-cta__stats {
    gap: 32px;
  }
  .fmstr-cmp-ppf-cta__stat-value {
    font-size: 20px;
  }
}
@media (max-width: 540px) {
  .fmstr-cmp-ppf-cta__ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  .fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-primary,
  .fmstr-cmp-ppf-cta a.fmstr-cmp-ppf-cta__cta-secondary {
    justify-content: center;
  }
}
</style>
