<template>
  <div class="toolbar" :class="{ 'no-pdf': !hasPdf }">

    <!-- Form / PDF type tabs — only when PDF is available -->
    <div v-if="hasPdf" class="type-tabs">
      <button type="button" class="type-btn" :class="{ active: activeTab === 'form' }"
        @click="$emit('update:activeTab', 'form')">
        <IconFormPreview :size="13" />
        Form Preview
      </button>
      <button type="button" class="type-btn" :class="{ active: activeTab === 'pdf' }"
        @click="$emit('update:activeTab', 'pdf')">
        <IconPdfDoc :size="13" />
        PDF Preview
      </button>
    </div>

    <!-- Device switcher — hidden when PDF tab active -->
    <div class="device-switcher" :class="{ hidden: hasPdf && activeTab === 'pdf' }">
      <button type="button" class="device-btn" :class="{ active: activeDevice === 'desktop' }" aria-label="Desktop view"
        @click="$emit('update:activeDevice', 'desktop')">
        <IconMonitor :size="14" />
      </button>
      <button type="button" class="device-btn" :class="{ active: activeDevice === 'tablet' }" aria-label="Tablet view"
        @click="$emit('update:activeDevice', 'tablet')">
        <IconTablet :size="14" />
      </button>
      <button type="button" class="device-btn" :class="{ active: activeDevice === 'mobile' }" aria-label="Mobile view"
        @click="$emit('update:activeDevice', 'mobile')">
        <IconPhone :size="14" />
      </button>
    </div>

  </div>
</template>

<script setup>
import IconFormPreview from '@/components/icons/FormPreview.vue'
import IconPdfDoc from '@/components/icons/PdfDoc.vue'
import IconMonitor from '@/components/icons/Monitor.vue'
import IconTablet from '@/components/icons/Tablet.vue'
import IconPhone from '@/components/icons/Phone.vue'

defineProps({
  hasPdf: { type: Boolean, default: false },
  activeTab: { type: String, default: 'form' },
  activeDevice: { type: String, default: 'desktop' },
})

defineEmits(['update:activeTab', 'update:activeDevice'])
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 0;
  margin-bottom: 12px;
  gap: 10px;
}

@media (max-width: 1024px) {
  .device-switcher {
    display: none;
  }
  .toolbar.no-pdf {
    display: none;
  }
}

@media (max-width: 600px) {
  .toolbar {
    display: none;
  }
}

.toolbar.no-pdf {
  justify-content: center;
}

.toolbar.no-pdf .device-switcher {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

/* Type tabs */
.type-tabs {
  display: flex;
  align-items: center;
  background: var(--bg-grey-100);
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  padding: 3px;
  gap: 2px;
  flex-shrink: 0;
}

.type-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 1px 11px;
  border: none;
  border-radius: var(--r-md);
  background: transparent;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 500;
  color: var(--fg-3);
  cursor: pointer;
  transition: background 120ms, color 120ms, box-shadow 120ms;
  white-space: nowrap;
}

.type-btn:hover {
  color: var(--fg-1);
}

.type-btn.active {
  background: var(--violet-500);
  color: #fff;
  box-shadow: 0 1px 3px rgba(127, 86, 217, 0.3);
}

/* Device switcher */
.device-switcher {
  display: flex;
  align-items: center;
  gap: 2px;
  background: var(--bg-grey-100);
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  padding: 3px;
  transition: opacity 200ms, visibility 200ms;
}

.device-switcher.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.device-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 28px;
  border: none;
  border-radius: var(--r-md);
  background: transparent;
  color: var(--fg-3);
  cursor: pointer;
  transition: background 120ms, color 120ms, box-shadow 120ms;
}

.device-btn:hover {
  color: var(--fg-1);
}

.device-btn.active {
  background: #fff;
  color: var(--violet-600);
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.12), 0 1px 2px rgba(16, 24, 40, 0.06);
}
</style>
