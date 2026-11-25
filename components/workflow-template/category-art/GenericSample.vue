<template>
  <div class="sample">
    <span v-for="step in STEPS" :key="step.label" class="sample__step">
      <span class="sample__check" :class="{ 'sample__check--next': !step.done }">
        <LucideIcon v-if="step.done" name="check" :size="10" :stroke-width="3" />
      </span>
      {{ step.label }}
    </span>
  </div>
</template>

<script setup>
const STEPS = [
  { label: 'Response received', done: true },
  { label: 'Steps run', done: true },
  { label: "Everyone's updated", done: false },
]
</script>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: var(--fs-xs);
  color: var(--fg-strong);
}

.sample__step {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* --accent comes from the illustration around it. */
.sample__check {
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

.sample__check--next {
  border: 2px solid var(--accent);
  background: none;
}
</style>
