<template>
  <div class="sample">
    <div class="sample__claim">
      <span class="sample__title">Expense claim · $240</span>
      <span class="sample__muted">From Priya · Travel</span>
    </div>
    <div class="sample__buttons">
      <span class="sample__btn sample__btn--approve">Approve</span>
      <span class="sample__btn">Reject</span>
    </div>
  </div>
</template>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.sample__claim {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sample__title {
  font-size: 13px;
  font-weight: var(--fw-semibold);
  line-height: 1.35;
}

.sample__muted {
  font-size: 11px;
  color: var(--fg-2);
}

.sample__buttons {
  display: flex;
  gap: 6px;
}

.sample__btn {
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

/* --accent comes from the illustration around it. */
.sample__btn--approve {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--bg-primary);
}
</style>
