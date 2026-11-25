<template>
  <!-- Browser-style tabs: the open one joins the content below it, in the colour its parent sets as --tab-surface. -->
  <div class="preview-tabs" role="tablist" aria-label="Preview">
    <button
      v-for="tab in tabs"
      :id="`${idPrefix}-tab-${tab.id}`"
      :key="tab.id"
      type="button"
      role="tab"
      class="preview-tabs__tab"
      :class="{ 'preview-tabs__tab--active': active === tab.id }"
      :aria-selected="active === tab.id"
      :aria-controls="`${idPrefix}-panel-${tab.id}`"
      @click="active = tab.id"
    >
      <LucideIcon :name="tab.icon" :size="14" />
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  // e.g. [{id: "workflow", label: "Workflow", icon: "workflow"}]
  tabs: { type: Array, required: true },
  // Keeps the tab and panel ids unique when the page and its pop-up both show the tabs, e.g. "preview"
  idPrefix: { type: String, required: true },
})

// The open tab's id, e.g. "workflow"
const active = defineModel({ type: String, required: true })
</script>

<style scoped>
.preview-tabs {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 100%;
}

.preview-tabs__tab {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  height: 32px;
  margin-bottom: var(--space-1);
  padding: 0 var(--space-4);
  border: 0;
  border-radius: var(--r-lg);
  background: transparent;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-2);
  cursor: pointer;
}

.preview-tabs__tab:hover {
  color: var(--fg-1);
}

/* Sits 1px over the strip's bottom border, in the content's colour, so the tab and the content read as one. */
.preview-tabs__tab--active {
  position: relative;
  top: 1px;
  height: 36px;
  margin-bottom: 0;
  border: 1px solid var(--border-light);
  border-bottom-color: var(--tab-surface);
  border-radius: var(--r-lg) var(--r-lg) 0 0;
  background: var(--tab-surface);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}

.preview-tabs__tab--active :deep(svg) {
  color: var(--color-primary);
}
</style>
