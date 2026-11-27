<template>
  <div class="sample">
    <span class="sample__muted">To: sam@acme.com</span>
    <span class="sample__title">Thanks, we got your request</span>
    <span class="sample__line"></span>
    <span class="sample__line sample__line--short"></span>
  </div>
</template>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sample__muted {
  font-size: 11px;
  color: var(--fg-2);
}

.sample__title {
  font-size: 13px;
  font-weight: var(--fw-semibold);
  line-height: 1.35;
}

.sample__line {
  height: 4px;
  border-radius: var(--r-sm);
  background: var(--border-light);
}

.sample__line--short {
  width: 70%;
}
</style>
