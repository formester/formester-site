<template>
  <div class="device-switcher" role="group" aria-label="Preview size">
    <button
      v-for="device in DEVICES"
      :key="device.id"
      type="button"
      class="device-btn"
      :class="{ active: activeDevice === device.id }"
      :aria-label="device.label"
      :aria-pressed="activeDevice === device.id"
      @click="activeDevice = device.id"
    >
      <component :is="device.icon" :size="14" />
    </button>
  </div>
</template>

<script setup>
import IconMonitor from '@/components/icons/Monitor.vue'
import IconTablet from '@/components/icons/Tablet.vue'
import IconPhone from '@/components/icons/Phone.vue'

const DEVICES = [
  { id: 'desktop', label: 'Desktop view', icon: IconMonitor },
  { id: 'tablet', label: 'Tablet view', icon: IconTablet },
  { id: 'mobile', label: 'Mobile view', icon: IconPhone },
]

// The previewed size, "desktop", "tablet" or "mobile"
const activeDevice = defineModel({ type: String, required: true })
</script>

<style scoped>
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
