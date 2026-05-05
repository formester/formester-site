<template>
  <section :class="{ container: useContainer }">
    <div ref="containerRef" v-html="source" class="raw-html-content" />
  </section>
</template>

<script setup>
const props = defineProps({
  useContainer: {
    type: Boolean,
    default: false,
  },
  markup: {
    type: String,
    default: '',
  }
})

const containerRef = ref(null)
const source = computed(() => props.markup || '')

function executeScripts() {
  const container = containerRef.value
  if (!container) return
  container.querySelectorAll('script').forEach((original) => {
    const script = document.createElement('script')
    Array.from(original.attributes).forEach(({ name, value }) =>
      script.setAttribute(name, value)
    )
    script.textContent = original.textContent
    original.replaceWith(script)
  })
}

watch(
  () => props.markup,
  () => {
    setTimeout(executeScripts, 0)
  },
  { immediate: true }
)
</script>
