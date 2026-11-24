<template>
  <div class="step-icons" role="img" :aria-label="ariaLabel">
    <template v-for="(step, index) in visibleSteps" :key="index">
      <span v-if="index > 0" class="step-icons__line" aria-hidden="true"></span>
      <span
        class="step-icons__chip"
        :style="{ background: step.accent.bg, color: step.accent.fg }"
        :title="step.label"
        aria-hidden="true"
      >
        <LucideIcon :name="step.icon" :size="16" />
      </span>
    </template>
    <span v-if="hiddenCount" class="step-icons__more" aria-hidden="true">+{{ hiddenCount }}</span>
  </div>
</template>

<script setup>
import { workflowStep } from '@/constants/workflow-steps'

const MAX_VISIBLE = 6

const props = defineProps({
  // The template's step types in order, e.g. ["form_submission", "approval", "send_email"].
  stepTypes: { type: Array, required: true },
})

const steps = computed(() => props.stepTypes.map(workflowStep))
const visibleSteps = computed(() => steps.value.slice(0, MAX_VISIBLE))
const hiddenCount = computed(() => steps.value.length - visibleSteps.value.length)
const ariaLabel = computed(() => `Steps: ${steps.value.map((step) => step.label).join(', ')}`)
</script>

<style scoped>
.step-icons {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-4) 0;
}

.step-icons__chip {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-xs);
}

.step-icons__line {
  flex: none;
  width: 10px;
  height: 2px;
  background: var(--border-dark);
}

.step-icons__more {
  margin-left: var(--space-1);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-3);
}
</style>
