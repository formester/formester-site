<template>
  <div class="page-controls">
    <button class="page-controls__btn" title="Add page" @click="$emit('add-page')">
      <span class="page-controls__icon page-controls__icon--add">
        <Plus :size="16" />
      </span>
    </button>

    <button class="page-controls__btn" title="Duplicate page" @click="$emit('duplicate-page')">
      <span class="page-controls__icon page-controls__icon--duplicate">
        <Copy :size="16" />
      </span>
    </button>

    <button
      class="page-controls__btn"
      title="Delete page"
      :disabled="pageCount <= 1"
      @click="$emit('delete-page')"
    >
      <span class="page-controls__icon page-controls__icon--delete">
        <Trash2 :size="16" />
      </span>
    </button>
  </div>
</template>

<script setup>
import { Plus, Copy, Trash2 } from "@lucide/vue";

defineProps({
  pageCount: { type: Number, default: 1 },
});

defineEmits(["add-page", "duplicate-page", "delete-page"]);
</script>

<style scoped>
.page-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.page-controls__btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  border-radius: var(--rounded);
  transition: opacity 0.15s, transform 0.1s;
}

.page-controls__btn:hover:not(:disabled) {
  transform: scale(1.08);
}

.page-controls__btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.page-controls__icon {
  width: 32px;
  height: 32px;
  border-radius: var(--rounded-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.page-controls__icon--add       { background: var(--background-color-violet-50); color: var(--color-primary); }
.page-controls__icon--duplicate { background: var(--background-color-violet-50); color: var(--color-primary); }
.page-controls__icon--delete    { background: var(--color-rose-100); color: var(--color-error); }
</style>
