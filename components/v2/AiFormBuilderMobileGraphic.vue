<template>
  <div class="mobile-ai-graphic" role="img" aria-label="AI-generated client onboarding form ready to publish">
    <div class="mobile-ai-graphic__agent">
      <span class="mobile-ai-graphic__agent-mark">AI</span>
      <div>
        <strong>Built from your brief</strong>
        <span>7 fields · logic and validation added</span>
      </div>
      <span class="mobile-ai-graphic__ready">Ready</span>
    </div>

    <div class="mobile-ai-graphic__form">
      <div class="mobile-ai-graphic__form-head">
        <div>
          <p>Client onboarding</p>
          <span>Tell us about your company and project.</span>
        </div>
        <span class="mobile-ai-graphic__publish">Ready to publish</span>
      </div>

      <div class="mobile-ai-graphic__section-label">Company details</div>
      <div class="mobile-ai-graphic__field">
        <span>Contact name</span>
        <div>First and last name</div>
      </div>
      <div class="mobile-ai-graphic__field">
        <span>Work email</span>
        <div>name@company.com</div>
      </div>
      <div class="mobile-ai-graphic__field">
        <span>Company name</span>
        <div>Registered company name</div>
      </div>

      <div class="mobile-ai-graphic__section-label">Project requirements</div>
      <div class="mobile-ai-graphic__field">
        <span>Project type</span>
        <div class="mobile-ai-graphic__choices">
          <b>Website redesign</b>
          <em>New product</em>
        </div>
      </div>
      <div class="mobile-ai-graphic__upload">
        <span>Supporting documents</span>
        <strong>Upload files</strong>
      </div>
      <div class="mobile-ai-graphic__consent">
        <span>✓</span>
        Approval consent included
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-ai-graphic {
  padding: 14px;
  line-height: 1.35;
  background: #f7f5fc;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-md);
}

.mobile-ai-graphic__agent {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
  padding: 11px 12px;
  background: #fff;
  border: 1px solid #ddd6fe;
  border-radius: var(--r-xl);
}

.mobile-ai-graphic__agent-mark {
  display: grid;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  place-items: center;
  color: #fff;
  background: var(--violet-500);
  border-radius: var(--r-full);
  font-size: 9px;
  font-weight: var(--fw-bold);
}

.mobile-ai-graphic__agent strong,
.mobile-ai-graphic__agent div > span,
.mobile-ai-graphic__form-head p,
.mobile-ai-graphic__form-head span {
  display: block;
}

.mobile-ai-graphic__agent strong {
  color: var(--fg-1);
  font-size: 11px;
}

.mobile-ai-graphic__agent div > span {
  margin-top: 2px;
  color: var(--fg-muted);
  font-size: 9px;
}

.mobile-ai-graphic__ready {
  padding: 4px 8px;
  white-space: nowrap;
  color: #047857;
  background: #ecfdf5;
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

.mobile-ai-graphic__form {
  padding: 16px;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
}

.mobile-ai-graphic__form-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
}

.mobile-ai-graphic__form-head p {
  margin: 0;
  color: var(--fg-1);
  font-size: 17px;
  font-weight: var(--fw-bold);
}

.mobile-ai-graphic__form-head div > span {
  margin-top: 3px;
  color: var(--fg-muted);
  font-size: 9px;
}

.mobile-ai-graphic__publish {
  flex: none;
  padding: 4px 7px;
  color: var(--violet-600);
  background: var(--violet-50);
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

.mobile-ai-graphic__section-label {
  margin: 13px 0 7px;
  color: var(--violet-600);
  font-size: 9px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mobile-ai-graphic__field {
  margin-top: 8px;
}

.mobile-ai-graphic__field > span,
.mobile-ai-graphic__upload > span {
  display: block;
  margin-bottom: 5px;
  color: var(--fg-1);
  font-size: 10px;
  font-weight: var(--fw-semibold);
}

.mobile-ai-graphic__field > div {
  min-height: 34px;
  padding: 9px 10px;
  color: var(--fg-muted);
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  font-size: 9px;
}

.mobile-ai-graphic__choices {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  border: 0 !important;
  padding: 0 !important;
}

.mobile-ai-graphic__choices b,
.mobile-ai-graphic__choices em {
  padding: 6px 8px;
  border-radius: var(--r-full);
  font-size: 8px;
  font-style: normal;
  font-weight: var(--fw-semibold);
}

.mobile-ai-graphic__choices b {
  color: var(--violet-600);
  background: var(--violet-50);
  border: 1px solid #ddd6fe;
}

.mobile-ai-graphic__choices em {
  color: var(--fg-2);
  background: #fff;
  border: 1px solid var(--border-light);
}

.mobile-ai-graphic__upload {
  margin-top: 10px;
}

.mobile-ai-graphic__upload strong {
  display: grid;
  min-height: 44px;
  place-items: center;
  color: var(--fg-muted);
  background: #fafafa;
  border: 1px dashed #c9c3d8;
  border-radius: var(--r-lg);
  font-size: 9px;
}

.mobile-ai-graphic__consent {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 12px;
  color: var(--fg-2);
  font-size: 9px;
}

.mobile-ai-graphic__consent span {
  display: grid;
  width: 16px;
  height: 16px;
  place-items: center;
  color: #fff;
  background: var(--violet-500);
  border-radius: 5px;
  font-size: 9px;
}
</style>
