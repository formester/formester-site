<template>
  <div class="fsv-forms">
    <div class="fsv-forms__prompt">
      <span class="fsv-forms__spark">AI</span>
      <span class="fsv-forms__prompt-text">Create a client intake form</span>
      <span class="fsv-forms__prompt-arrow" aria-hidden="true">→</span>
    </div>

    <div class="fsv-forms__builder">
      <div class="fsv-forms__builder-bar">
        <span class="fsv-forms__builder-title">Client intake</span>
        <span class="fsv-forms__status">Ready</span>
      </div>
      <div class="fsv-forms__field">
        <span>Full name</span>
        <span class="fsv-forms__type">Short text</span>
      </div>
      <div class="fsv-forms__field">
        <span>Work email</span>
        <span class="fsv-forms__type">Email</span>
      </div>
      <div class="fsv-forms__field fsv-forms__field--active">
        <span>Upload documents</span>
        <span class="fsv-forms__type">File upload</span>
      </div>
      <div class="fsv-forms__logic">
        <span class="fsv-forms__logic-dot" />
        Conditional follow-up added
      </div>
    </div>

    <div class="fsv-forms__flow" aria-label="Submission data flows into the connected platform">
      <span>Submission</span>
      <b aria-hidden="true">→</b>
      <span>Database</span>
      <b aria-hidden="true">→</b>
      <span>Workflow</span>
    </div>
  </div>
</template>

<style scoped>
.fsv-forms {
  position: relative;
  width: 100%;
  max-width: 340px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
}

.fsv-forms__prompt {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 88%;
  margin-left: auto;
  padding: 11px 14px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #ddd6fe;
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-md);
  animation: forms-prompt-in 0.45s ease both;
}

.fsv-forms__spark {
  display: inline-flex;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #7c3aed;
  border-radius: var(--r-full);
  font-size: 9px;
  font-weight: var(--fw-bold);
}

.fsv-forms__prompt-text {
  flex: 1;
  color: var(--fg-1);
  font-size: 12px;
  font-weight: var(--fw-semibold);
}

.fsv-forms__prompt-arrow {
  color: #7c3aed;
  font-weight: var(--fw-bold);
}

.fsv-forms__builder {
  width: 92%;
  padding: var(--space-4);
  background: #fff;
  border: 1px solid rgba(196, 181, 253, 0.65);
  border-radius: var(--r-2xl);
  box-shadow: 0 20px 45px -18px rgba(76, 29, 149, 0.25);
  animation: forms-builder-in 0.55s 0.08s ease both;
}

.fsv-forms__builder-bar,
.fsv-forms__field,
.fsv-forms__logic {
  display: flex;
  align-items: center;
}

.fsv-forms__builder-bar {
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.fsv-forms__builder-title {
  color: var(--fg-1);
  font-size: 12px;
  font-weight: var(--fw-bold);
}

.fsv-forms__status {
  padding: 3px 7px;
  color: #047857;
  background: #ecfdf5;
  border-radius: var(--r-full);
  font-size: 9px;
  font-weight: var(--fw-semibold);
}

.fsv-forms__field {
  justify-content: space-between;
  min-height: 42px;
  margin-top: var(--space-2);
  padding: 0 var(--space-3);
  color: var(--fg-1);
  background: var(--bg-grey-25, #fafafa);
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  font-size: 10px;
  font-weight: var(--fw-medium);
}

.fsv-forms__field--active {
  background: #f5f3ff;
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.08);
}

.fsv-forms__type {
  color: var(--fg-muted);
  font-size: 9px;
  font-weight: var(--fw-regular);
}

.fsv-forms__logic {
  gap: 7px;
  margin-top: var(--space-3);
  color: #6d28d9;
  font-size: 9px;
  font-weight: var(--fw-semibold);
}

.fsv-forms__logic-dot {
  width: 7px;
  height: 7px;
  background: #8b5cf6;
  border-radius: var(--r-full);
  box-shadow: 0 0 0 4px #ede9fe;
}

.fsv-forms__flow {
  display: flex;
  width: 88%;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 0 auto;
  color: #6d28d9;
  font-size: 8px;
  font-weight: var(--fw-semibold);
  animation: forms-prompt-in 0.45s 0.18s ease both;
}

.fsv-forms__flow span {
  padding: 4px 7px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid #ddd6fe;
  border-radius: var(--r-full);
}

.fsv-forms__flow b {
  color: #a78bfa;
}

@keyframes forms-prompt-in {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes forms-builder-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
