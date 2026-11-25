<template>
  <div class="sample">
    <div class="sample__request">
      <span>POST /orders</span>
      <span class="sample__status">200</span>
    </div>
    <span class="sample__body">{ "name": "Sam",
  "plan": "Pro" }</span>
  </div>
</template>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-mono);
}

.sample__request {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  font-weight: var(--fw-semibold);
}

.sample__status {
  padding: 1px 5px;
  border-radius: var(--r);
  background: var(--success-10);
  color: var(--success-700);
}

.sample__body {
  padding: var(--space-2);
  border-radius: var(--r-lg);
  background: var(--gray-900);
  color: var(--gray-200);
  font-size: var(--fs-tiny);
  line-height: 1.5;
  white-space: pre;
}
</style>
