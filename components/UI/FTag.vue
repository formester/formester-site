<template>
  <NuxtLink v-if="to" :to="to" class="ftag ftag--link"><slot /></NuxtLink>
  <span v-else class="ftag"><slot /></span>
</template>

<script setup>
defineProps({
  // Renders the tag as a link to this path; empty renders plain text.
  to: { type: String, default: '' },
})
</script>

<style scoped>
.ftag {
  display: inline-block;
  padding: 0 var(--space-3);
  border: 1px solid var(--border-dark);
  border-radius: var(--r-full);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-2);
  background: var(--bg-primary);
  text-decoration: none;
}

.ftag--link:hover {
  border-color: var(--violet-500);
  color: var(--violet-500);
}
</style>
