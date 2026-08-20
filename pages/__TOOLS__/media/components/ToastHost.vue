<template>
  <Teleport to="body">
    <div class="media-tool-scope">
      <div v-if="toasts.length" class="s3-toast-wrap">
        <div v-for="t in toasts" :key="t.id" class="toast toast--success">
          <svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M16 9l-5 5-3-3"/></svg>
          {{ t.message }}
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  toasts: { type: Array, default: () => [] }
})
</script>
