<template>
  <div class="sample">
    <span class="sample__bubble">Hi Sam, your booking is confirmed for Tue at 10:00.</span>
    <span class="sample__status">Delivered</span>
  </div>
</template>

<style scoped>
.sample {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sample__bubble {
  padding: var(--space-2) 10px;
  border-radius: var(--r-xl) var(--r-xl) var(--r-xl) var(--r);
  background: var(--gray-100);
  font-size: 11px;
  line-height: 1.45;
}

.sample__status {
  align-self: flex-end;
  font-size: var(--fs-tiny);
  color: var(--fg-2);
}
</style>
