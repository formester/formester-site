<template>
  <div class="fsv-auto">
    <!-- Background card: inbox preview -->
    <div class="fsv-auto__bg-card">
      <div class="fsv-auto__bg-header" />
      <div class="fsv-auto__bg-avatar-row">
        <div class="fsv-auto__bg-avatar" />
        <div class="fsv-auto__bg-lines">
          <div class="fsv-auto__bg-line" />
          <div class="fsv-auto__bg-line fsv-auto__bg-line--short" />
        </div>
      </div>
      <div class="fsv-auto__bg-line" />
      <div class="fsv-auto__bg-line fsv-auto__bg-line--med" />
      <div class="fsv-auto__bg-line fsv-auto__bg-line--short2" />
    </div>

    <!-- Foreground card: email compose illustration -->
    <div class="fsv-auto__fg-card">
      <!-- Email header -->
      <div class="fsv-auto__email-header">
        <div class="fsv-auto__email-dots">
          <span class="fsv-auto__dot fsv-auto__dot--red" />
          <span class="fsv-auto__dot fsv-auto__dot--yellow" />
          <span class="fsv-auto__dot fsv-auto__dot--green" />
        </div>
        <span class="fsv-auto__email-label">New Message</span>
      </div>

      <!-- To field -->
      <div class="fsv-auto__email-row">
        <span class="fsv-auto__email-field-label">To</span>
        <div class="fsv-auto__email-chip">
          <span class="fsv-auto__chip-avatar">JD</span>
          <span class="fsv-auto__chip-text">john@company.com</span>
        </div>
      </div>

      <!-- Subject field -->
      <div class="fsv-auto__email-row fsv-auto__email-row--subject">
        <span class="fsv-auto__email-field-label">Subject</span>
        <span class="fsv-auto__email-subject-text">Thanks for your submission! 🎉</span>
      </div>

      <!-- Divider -->
      <div class="fsv-auto__email-divider" />

      <!-- Body lines -->
      <div class="fsv-auto__email-body">
        <div class="fsv-auto__body-line fsv-auto__body-line--greeting" />
        <div class="fsv-auto__body-line" />
        <div class="fsv-auto__body-line fsv-auto__body-line--short" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fsv-auto {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Background card */
.fsv-auto__bg-card {
  position: absolute;
  inset: 8px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: var(--r-2xl);
  padding: var(--space-6);
  box-shadow: 0 8px 24px rgba(236,72,153,0.05);
  transform: translate(-16px, -24px) rotate(-2deg);
  z-index: 0;
  animation: bg-card-in 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both;
}
.fsv-auto__bg-header {
  height: 16px;
  width: 50%;
  background: rgba(229,231,235,0.8);
  border-radius: var(--r-full);
  margin-bottom: var(--space-6);
}
.fsv-auto__bg-avatar-row {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  margin-bottom: var(--space-6);
}
.fsv-auto__bg-avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--r-full);
  background: linear-gradient(135deg, #fb923c, #f43f5e);
  flex-shrink: 0;
}
.fsv-auto__bg-lines { flex: 1; display: flex; flex-direction: column; gap: var(--space-2); }
.fsv-auto__bg-line {
  height: 10px;
  background: rgba(229,231,235,0.8);
  border-radius: var(--r-full);
}
.fsv-auto__bg-line--short  { width: 33%; }
.fsv-auto__bg-line--med    { width: 91%; }
.fsv-auto__bg-line--short2 { width: 80%; }

/* Foreground card */
.fsv-auto__fg-card {
  position: relative;
  width: 90%;
  background: var(--bg-primary);
  border-radius: var(--r-2xl);
  padding: 12px 14px;
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.12);
  border: 1px solid var(--border-light);
  z-index: 1;
  transform: translate(16px, 24px);
  animation: fg-card-in 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both;
}

/* Email header row */
.fsv-auto__email-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}
.fsv-auto__email-dots {
  display: flex;
  gap: 4px;
}
.fsv-auto__dot {
  width: 7px;
  height: 7px;
  border-radius: var(--r-full);
  display: block;
}
.fsv-auto__dot--red    { background: #fc6058; }
.fsv-auto__dot--yellow { background: #fec02e; }
.fsv-auto__dot--green  { background: #2aca44; }
.fsv-auto__email-label {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  color: var(--fg-muted);
  margin-left: auto;
}

/* To / Subject rows */
.fsv-auto__email-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px 0;
  border-bottom: 1px solid var(--border-light);
}
.fsv-auto__email-row--subject {
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  border-bottom: none;
}
.fsv-auto__email-field-label {
  font-size: 10px;
  font-weight: var(--fw-semibold);
  color: var(--fg-muted);
  width: 36px;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Chip */
.fsv-auto__email-chip {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #f0f4ff;
  border: 1px solid #c7d2fe;
  border-radius: var(--r-full);
  padding: 2px 8px 2px 3px;
}
.fsv-auto__chip-avatar {
  width: 16px;
  height: 16px;
  border-radius: var(--r-full);
  background: #6366f1;
  font-size: 8px;
  font-weight: var(--fw-bold);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fsv-auto__chip-text {
  font-size: 10px;
  font-weight: var(--fw-medium);
  color: #4338ca;
}

/* Subject text */
.fsv-auto__email-subject-text {
  font-size: 11px;
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}

/* Divider */
.fsv-auto__email-divider {
  height: 1px;
  background: var(--border-light);
  margin: 6px 0;
}

/* Body placeholder lines */
.fsv-auto__email-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: var(--space-2);
}
.fsv-auto__body-line {
  height: 7px;
  background: var(--bg-grey-50);
  border-radius: var(--r-full);
  border: 1px solid var(--border-light);
}
.fsv-auto__body-line--greeting { width: 55%; }
.fsv-auto__body-line--short    { width: 45%; }
.fsv-auto__body-line--med      { width: 75%; }


@keyframes bg-card-in {
  from { opacity: 0; transform: translate(4px, -4px) rotate(-2deg); }
  to   { opacity: 1; transform: translate(-16px, -24px) rotate(-2deg); }
}
@keyframes fg-card-in {
  from { opacity: 0; transform: translate(-4px, 4px); }
  to   { opacity: 1; transform: translate(16px, 24px); }
}
</style>
