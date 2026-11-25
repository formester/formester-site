<template>
  <div class="form">
    <div class="form__title">
      <span class="form__icon"><LucideIcon name="file-text" :size="11" :stroke-width="2.4" /></span>
      <span class="form__name">{{ name }}</span>
    </div>
    <div class="form__field"><span class="form__label"></span><span class="form__input"></span></div>
    <div class="form__field"><span class="form__label form__label--wide"></span><span class="form__input"></span></div>
    <span class="form__submit">Submit</span>
  </div>
</template>

<script setup>
defineProps({
  // e.g. "Expense claim"
  name: { type: String, required: true },
})
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  box-sizing: border-box;
  padding: var(--space-3);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  background: var(--bg-primary);
  box-shadow: var(--shadow-lg);
}

.form__title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: var(--fw-semibold);
}

.form__icon {
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

.form__name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.form__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.form__label {
  width: 40px;
  height: 4px;
  border-radius: var(--r-sm);
  background: var(--gray-300);
}

.form__label--wide {
  width: 56px;
}

.form__input {
  height: 16px;
  border: 1px solid var(--border-light);
  border-radius: var(--r-md);
  background: var(--gray-25);
}

.form__submit {
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
</style>
