<template>
  <div class="art" aria-hidden="true" :style="{ '--accent': look.accent.fg, '--accent-tint': look.accent.bg }">
    <div class="art__panel"></div>

    <svg class="art__lines" width="380" height="290" viewBox="0 0 380 290" fill="none">
      <path d="M140 92 H164" />
      <path d="M188 116 V176 Q188 186 198 186 H212" />
      <circle cx="140" cy="92" r="4" />
      <circle cx="212" cy="186" r="4" />
    </svg>

    <SampleForm class="art__form" :name="look.form" />

    <div class="art__node"><LucideIcon :name="look.icon" :size="22" /></div>

    <div class="art__result">
      <div class="art__result-head">
        <span class="art__step">{{ look.step }}</span>
        <span class="art__dot"></span>
      </div>
      <component :is="SAMPLES[look.kind]" />
    </div>

    <div class="art__badge art__badge--forms">
      <LucideIcon name="file-text" :size="14" color="var(--color-primary)" />
      Works with your forms
    </div>

    <div class="art__badge art__badge--count">
      <span class="art__count">{{ countLabel }}</span>
      <span class="art__ready">Ready to use</span>
    </div>
  </div>
</template>

<script setup>
import AiSample from '@/components/workflow-template/category-art/AiSample.vue'
import ApprovalsSample from '@/components/workflow-template/category-art/ApprovalsSample.vue'
import EmailSample from '@/components/workflow-template/category-art/EmailSample.vue'
import GenericSample from '@/components/workflow-template/category-art/GenericSample.vue'
import RemindersSample from '@/components/workflow-template/category-art/RemindersSample.vue'
import SampleForm from '@/components/workflow-template/category-art/SampleForm.vue'
import SmsSample from '@/components/workflow-template/category-art/SmsSample.vue'
import WebhooksSample from '@/components/workflow-template/category-art/WebhooksSample.vue'
import { categoryLook } from '@/constants/workflow-category-looks'

// The example in the result card, by `categoryLook`'s kind.
const SAMPLES = {
  approvals: ApprovalsSample,
  reminders: RemindersSample,
  email: EmailSample,
  sms: SmsSample,
  ai: AiSample,
  webhooks: WebhooksSample,
  generic: GenericSample,
}

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

.art__form {
  position: absolute;
  top: 24px;
  left: 4px;
  width: 136px;
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
  position: absolute;
  top: 128px;
  left: 212px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 164px;
  box-sizing: border-box;
  padding: var(--space-3);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  background: var(--bg-primary);
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

.art__ready {
  font-size: 11px;
  color: var(--fg-2);
}
</style>
