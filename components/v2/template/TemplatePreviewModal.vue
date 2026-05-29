<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Form preview"
        @click.self="$emit('close')"
      >
        <Transition name="modal-card">
          <div v-if="isOpen" class="modal-card">

            <!-- Preview Mode Banner -->
            <div class="modal-banner">
              <div class="modal-banner-left">
                <span class="modal-preview-badge">Preview Mode</span>
                <span class="modal-banner-text">This is a read-only preview — responses won't be saved</span>
              </div>
              <button
                type="button"
                class="modal-close-btn"
                aria-label="Close preview"
                @click="$emit('close')"
              >
                <IconX :size="14" />
              </button>
            </div>

            <!-- Form iframe -->
            <iframe
              :src="surveyUrl"
              frameborder="0"
              class="modal-iframe"
              loading="lazy"
              title="Full form preview"
            />

          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import IconX from '@/components/icons/X.vue'

defineProps({
  isOpen:    { type: Boolean, required: true },
  surveyUrl: { type: String, required: true },
})

defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(16, 24, 40, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-card {
  width: 100%;
  max-width: 98vw;
  height: calc(100vh - 32px);
  max-height: 98vh;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 24px 64px -12px rgba(16, 24, 40, 0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid #f4ebff;
  padding: 10px 16px;
  flex-shrink: 0;
}

.modal-banner-left {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.modal-preview-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 12px;
  border-radius: 9999px;
  background: var(--violet-500);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.modal-banner-text {
  font-size: 12px;
  color: var(--fg-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: var(--fg-2);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 120ms, color 120ms;
  background: transparent;
  border-radius: var(--r-md);
}

.modal-close-btn:hover {
  background: var(--violet-50);
  color: var(--violet-600);
}

.modal-iframe {
  width: 100%;
  flex: 1;
  min-height: 0;
  border: none;
  display: block;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 220ms ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-card-enter-active {
  transition: transform 260ms cubic-bezier(0.34, 1.28, 0.64, 1), opacity 220ms ease;
}
.modal-card-leave-active {
  transition: transform 200ms ease, opacity 200ms ease;
}
.modal-card-enter-from {
  transform: translateY(16px) scale(0.98);
  opacity: 0;
}
.modal-card-leave-to {
  transform: translateY(8px) scale(0.99);
  opacity: 0;
}

@media (max-width: 640px) {
  .modal-banner-text {
    display: none;
  }
}
</style>
