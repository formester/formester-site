<template>
  <div class="sample">
    <span class="sample__summary">Customer wants a refund for a late order.</span>
    <div class="sample__labels">
      <span class="sample__label">Refund</span>
      <span class="sample__label sample__label--urgent">Urgent</span>
    </div>
  </div>
</template>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.sample__summary {
  font-size: var(--fs-xs);
  line-height: 1.45;
}

.sample__labels {
  display: flex;
  gap: 6px;
}

.sample__label {
  padding: 3px var(--space-2);
  border-radius: var(--r-full);
  background: var(--violet-50);
  color: var(--color-primary);
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
}

.sample__label--urgent {
  background: var(--error-50);
  color: var(--error);
}
</style>
