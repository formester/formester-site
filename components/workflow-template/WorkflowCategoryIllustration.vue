<template>
  <div class="art" aria-hidden="true" :style="{ '--accent': look.accent.fg, '--accent-tint': look.accent.bg }">
    <div class="art__panel"></div>

    <svg class="art__lines" width="380" height="290" viewBox="0 0 380 290" fill="none">
      <path d="M140 92 H164" />
      <path d="M188 116 V176 Q188 186 198 186 H212" />
      <circle cx="140" cy="92" r="4" />
      <circle cx="212" cy="186" r="4" />
    </svg>

    <div class="art__form">
      <div class="art__form-title">
        <span class="art__form-icon"><LucideIcon name="file-text" :size="11" :stroke-width="2.4" /></span>
        <span class="art__ellipsis">{{ look.form }}</span>
      </div>
      <div class="art__field"><span class="art__label"></span><span class="art__input"></span></div>
      <div class="art__field"><span class="art__label art__label--wide"></span><span class="art__input"></span></div>
      <span class="art__submit">Submit</span>
    </div>

    <div class="art__node"><LucideIcon :name="look.icon" :size="22" /></div>

    <div class="art__result">
      <div class="art__result-head">
        <span class="art__step">{{ look.step }}</span>
        <span class="art__dot"></span>
      </div>

      <div v-if="look.kind === 'approvals'" class="art__stack">
        <div class="art__lines-text">
          <span class="art__title">Expense claim · $240</span>
          <span class="art__muted">From Priya · Travel</span>
        </div>
        <div class="art__buttons">
          <span class="art__btn art__btn--solid">Approve</span>
          <span class="art__btn">Reject</span>
        </div>
      </div>

      <div v-else-if="look.kind === 'reminders'" class="art__stack">
        <span class="art__title">Invoice #1042 is due in 2 days</span>
        <div class="art__timeline">
          <span class="art__tick"></span><span>Day 1</span>
          <span class="art__rule"></span>
          <span class="art__tick"></span><span>Day 3</span>
          <span class="art__rule"></span>
          <span class="art__tick art__tick--open"></span><span>Day 7</span>
        </div>
      </div>

      <div v-else-if="look.kind === 'email'" class="art__stack art__stack--tight">
        <span class="art__muted">To: sam@acme.com</span>
        <span class="art__title">Thanks, we got your request</span>
        <span class="art__bar"></span>
        <span class="art__bar art__bar--short"></span>
      </div>

      <div v-else-if="look.kind === 'sms'" class="art__stack art__stack--tight">
        <span class="art__bubble">Hi Sam, your booking is confirmed for Tue at 10:00.</span>
        <span class="art__muted art__end">Delivered</span>
      </div>

      <div v-else-if="look.kind === 'ai'" class="art__stack">
        <span class="art__text">Customer wants a refund for a late order.</span>
        <div class="art__buttons">
          <span class="art__pill">Refund</span>
          <span class="art__pill art__pill--urgent">Urgent</span>
        </div>
      </div>

      <div v-else-if="look.kind === 'webhooks'" class="art__stack art__stack--tight art__mono">
        <div class="art__request">
          <span>POST /orders</span>
          <span class="art__status">200</span>
        </div>
        <span class="art__code">{ "name": "Sam",
  "plan": "Pro" }</span>
      </div>

      <div v-else class="art__checklist">
        <span class="art__check"><span class="art__check-icon"><LucideIcon name="check" :size="10" :stroke-width="3" /></span>Response received</span>
        <span class="art__check"><span class="art__check-icon"><LucideIcon name="check" :size="10" :stroke-width="3" /></span>Steps run</span>
        <span class="art__check"><span class="art__check-icon art__check-icon--open"></span>Everyone's updated</span>
      </div>
    </div>

    <div class="art__badge art__badge--forms">
      <LucideIcon name="file-text" :size="14" color="var(--color-primary)" />
      Works with your forms
    </div>

    <div class="art__badge art__badge--count">
      <span class="art__count">{{ countLabel }}</span>
      <span class="art__muted">Ready to use</span>
    </div>
  </div>
</template>

<script setup>
import { categoryLook } from '@/constants/workflow-category-looks'

const props = defineProps({
  // The category's slug, e.g. "approvals"; one without its own art gets the generic look.
  category: { type: String, required: true },
  count: { type: Number, required: true },
})

const look = computed(() => categoryLook(props.category))
const countLabel = computed(() => (props.count === 1 ? '1 workflow' : `${props.count} workflows`))
</script>

<style scoped>
.art {
  position: relative;
  flex-shrink: 0;
  width: 380px;
  height: 290px;
  color: var(--fg-1);
}

.art__panel {
  position: absolute;
  inset: 8px 8px 28px 20px;
  border: 1px solid var(--gray-100);
  border-radius: var(--r-3xl);
  background: var(--bg-grey-50);
}

.art__lines {
  position: absolute;
  inset: 0;
}

.art__lines path {
  stroke: var(--gray-400);
  stroke-width: 2;
  stroke-dasharray: 4 4;
}

.art__lines circle {
  fill: var(--bg-primary);
  stroke: var(--gray-400);
  stroke-width: 2;
}

.art__form,
.art__result {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  box-sizing: border-box;
  padding: var(--space-3);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  background: var(--bg-primary);
}

.art__form {
  top: 24px;
  left: 4px;
  width: 136px;
  box-shadow: var(--shadow-lg);
}

.art__form-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: var(--fw-semibold);
}

.art__form-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: var(--r-md);
  background: var(--violet-50);
  color: var(--color-primary);
}

.art__ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.art__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.art__label {
  width: 40px;
  height: 4px;
  border-radius: var(--r-sm);
  background: var(--gray-300);
}

.art__label--wide {
  width: 56px;
}

.art__input {
  height: 16px;
  border: 1px solid var(--border-light);
  border-radius: var(--r-md);
  background: var(--gray-25);
}

.art__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  border-radius: var(--r-full);
  background: var(--color-primary);
  color: var(--bg-primary);
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
}

.art__node {
  position: absolute;
  top: 68px;
  left: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--r-2xl);
  background: var(--accent);
  color: var(--bg-primary);
  box-shadow: 0 0 0 6px var(--accent-tint), var(--shadow-lg);
}

.art__result {
  top: 128px;
  left: 212px;
  width: 164px;
  box-shadow: var(--shadow-lg);
}

.art__result-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.art__step {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}

.art__dot {
  width: 6px;
  height: 6px;
  border-radius: var(--r-full);
  background: var(--accent);
}

.art__stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.art__stack--tight {
  gap: 6px;
}

.art__lines-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.art__title {
  font-size: 13px;
  font-weight: var(--fw-semibold);
  line-height: 1.35;
}

.art__text {
  font-size: var(--fs-xs);
  line-height: 1.45;
}

.art__muted {
  font-size: 11px;
  color: var(--fg-2);
}

.art__end {
  align-self: flex-end;
  font-size: var(--fs-tiny);
}

.art__buttons {
  display: flex;
  gap: 6px;
}

.art__btn {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 24px;
  box-sizing: border-box;
  border: 1px solid var(--border-dark);
  border-radius: var(--r-md);
  color: var(--fg-strong);
  font-size: 11px;
  font-weight: var(--fw-semibold);
}

.art__btn--solid {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--bg-primary);
}

.art__timeline {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--fs-tiny);
  color: var(--fg-2);
}

.art__tick {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-radius: var(--r-full);
  background: var(--accent);
}

.art__tick--open {
  border: 1.5px solid var(--accent);
  background: none;
}

.art__rule {
  flex: 1;
  height: 1px;
  background: var(--gray-300);
}

.art__bar {
  height: 4px;
  border-radius: var(--r-sm);
  background: var(--border-light);
}

.art__bar--short {
  width: 70%;
}

.art__bubble {
  padding: var(--space-2) 10px;
  border-radius: var(--r-xl) var(--r-xl) var(--r-xl) var(--r);
  background: var(--gray-100);
  font-size: 11px;
  line-height: 1.45;
}

.art__pill {
  padding: 3px var(--space-2);
  border-radius: var(--r-full);
  background: var(--violet-50);
  color: var(--color-primary);
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
}

.art__pill--urgent {
  background: var(--error-50);
  color: var(--error);
}

.art__mono {
  font-family: var(--font-mono);
}

.art__request {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  font-weight: var(--fw-semibold);
}

.art__status {
  padding: 1px 5px;
  border-radius: var(--r);
  background: var(--success-10);
  color: var(--success-700);
}

.art__code {
  padding: var(--space-2);
  border-radius: var(--r-lg);
  background: var(--gray-900);
  color: var(--gray-200);
  font-size: var(--fs-tiny);
  line-height: 1.5;
  white-space: pre;
}

.art__checklist {
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: var(--fs-xs);
  color: var(--fg-strong);
}

.art__check {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.art__check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: var(--r-full);
  background: var(--accent);
  color: var(--bg-primary);
}

.art__check-icon--open {
  border: 2px solid var(--accent);
  background: none;
}

.art__badge {
  position: absolute;
  display: flex;
  background: var(--bg-primary);
  box-shadow: var(--shadow-lg);
}

.art__badge--forms {
  bottom: 6px;
  left: 0;
  align-items: center;
  gap: 6px;
  padding: 7px var(--space-3);
  border-radius: var(--r-full);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
}

.art__badge--count {
  top: 0;
  right: 0;
  flex-direction: column;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--r-xl);
}

.art__count {
  font-size: 13px;
  font-weight: var(--fw-semibold);
}
</style>
