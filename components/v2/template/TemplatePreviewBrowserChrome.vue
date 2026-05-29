<template>
  <div v-if="activeDevice !== 'mobile'" class="fp-chrome">
    <div class="fp-chrome-dots" aria-hidden="true">
      <span class="dot-r"></span>
      <span class="dot-y"></span>
      <span class="dot-g"></span>
    </div>
    <div class="fp-chrome-url">
      <IconLock style="opacity:.5; width: 16px; height: 16px;" />
      {{ urlDisplay }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconLock from '@/components/icons/Lock.vue'

const props = defineProps({
  surveyUrl: { type: String, required: true },
  activeDevice: { type: String, required: true },
})

const urlDisplay = computed(() => {
  try {
    const u = new URL(props.surveyUrl)
    return u.hostname + u.pathname
  } catch {
    return props.surveyUrl
  }
})
</script>

<style scoped>
.fp-chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--bg-grey-50);
  border-bottom: 1px solid var(--border-light);
  flex-shrink: 0;
}

.fp-chrome-dots {
  display: flex;
  gap: 5px;
}

.fp-chrome-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
}

.dot-r {
  background: #ff5f57;
}

.dot-y {
  background: #ffbd2e;
}

.dot-g {
  background: #28c840;
}

.fp-chrome-url {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--gray-200, #eaecf0);
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: 11px;
  color: var(--fg-3);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
}
</style>
