<template>
  <section :class="{ container: useContainer }">
    <iframe ref="iframeRef" :srcdoc="source" sandbox="allow-same-origin allow-scripts" frameborder="0"
      class="raw-html-frame" @load="onIframeLoad" />
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

const iframeRef = ref(null)
const source = computed(() => props.markup || '')
const observer = ref(null)

function syncHeight() {
  const iframe = iframeRef.value
  if (!iframe) return
  const height = iframe.contentDocument?.body?.scrollHeight
  if (height) iframe.style.height = height + 'px'
}

function setupObserver() {
  const body = iframeRef.value?.contentDocument?.body
  if (!body) return console.warn('Unable to access iframe body for ResizeObserver')
  observer.value?.disconnect()
  observer.value = new ResizeObserver(syncHeight)
  observer.value.observe(body)
}

function onIframeLoad() {
  syncHeight()
  setupObserver()
}

onMounted(() => {
  const iframe = iframeRef.value
  if (iframe?.contentDocument?.readyState === 'complete') {
    // SSR hydration: load event already fired before listener was attached
    syncHeight()
    setupObserver()
  }
})

onUnmounted(() => observer.value?.disconnect())
</script>

<style scoped>
.raw-html-frame {
  width: 100%;
  border: none;
  min-height: 100px;
}
</style>
