<template>
  <div class="sample">
    <span class="sample__title">Invoice #1042 is due in 2 days</span>
    <div class="sample__timeline">
      <span class="sample__tick"></span><span>Day 1</span>
      <span class="sample__rule"></span>
      <span class="sample__tick"></span><span>Day 3</span>
      <span class="sample__rule"></span>
      <span class="sample__tick sample__tick--next"></span><span>Day 7</span>
    </div>
  </div>
</template>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.sample__title {
  font-size: 13px;
  font-weight: var(--fw-semibold);
  line-height: 1.35;
}

.sample__timeline {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--fs-tiny);
  color: var(--fg-2);
}

/* --accent comes from the illustration around it. */
.sample__tick {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-radius: var(--r-full);
  background: var(--accent);
}

.sample__tick--next {
  border: 1.5px solid var(--accent);
  background: none;
}

.sample__rule {
  flex: 1;
  height: 1px;
  background: var(--gray-300);
}
</style>
