<template>
  <div v-if="activeDevice === 'mobile'" class="fp-chrome-mobile">
    <span class="fp-chrome-mobile-time">{{ timeDisplay }}</span>
    <div class="fp-chrome-mobile-icons">
      <IconSignalBars />
      <IconWifi />
      <IconBattery />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import IconSignalBars from '@/components/icons/SignalBars.vue'
import IconWifi       from '@/components/icons/Wifi.vue'
import IconBattery    from '@/components/icons/Battery.vue'

defineProps({
  activeDevice: { type: String, required: true },
})

const timeDisplay = ref('')
let timer = null

function updateTime() {
  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes().toString().padStart(2, '0')
  timeDisplay.value = `${h}:${m}`
}

onMounted(() => {
  updateTime()
  const msUntilNextMinute = (60 - new Date().getSeconds()) * 1000
  timer = setTimeout(() => {
    updateTime()
    timer = setInterval(updateTime, 60_000)
  }, msUntilNextMinute)
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<style scoped>
.fp-chrome-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px 6px;
  background: var(--bg-grey-50);
  border-bottom: 1px solid var(--border-light);
}

.fp-chrome-mobile-time {
  font-size: 12px;
  font-weight: 700;
  color: var(--fg-1);
}

.fp-chrome-mobile-icons {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--fg-3);
}
</style>
