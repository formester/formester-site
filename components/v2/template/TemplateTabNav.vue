<template>
  <nav class="tmpl-detail__tab-nav" aria-label="Template sections">
    <div class="tmpl-detail__tab-nav-inner">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="tmpl-detail__tab-btn"
        :class="{ 'tmpl-detail__tab-btn--active': activeTabId === tab.id }"
        @click="$emit('update:activeTabId', tab.id)"
      >{{ tab.name }}</button>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  tabs:        { type: Array, required: true },
  activeTabId: { type: String, default: null },
})

defineEmits(['update:activeTabId'])
</script>

<style scoped>
.tmpl-detail__tab-nav {
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
}

.tmpl-detail__tab-nav-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: var(--space-6);
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
}

.tmpl-detail__tab-nav-inner::-webkit-scrollbar {
  display: none;
}

.tmpl-detail__tab-btn {
  flex-shrink: 0;
  padding: var(--space-4) var(--space-5);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-3);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.tmpl-detail__tab-btn:hover {
  color: var(--fg-1);
}

.tmpl-detail__tab-btn--active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
  font-weight: var(--fw-semibold);
}

@media (max-width: 640px) {
  .tmpl-detail__tab-btn {
    padding: var(--space-3) var(--space-4);
    font-size: var(--fs-xs);
  }
}
</style>
