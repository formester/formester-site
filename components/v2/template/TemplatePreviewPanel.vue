<template>
  <div class="preview-stage" :class="activeDevice">

    <TemplatePreviewToolbar
      :has-pdf="hasPdf"
      :active-tab="activeTab"
      :active-device="activeDevice"
      @update:active-tab="activeTab = $event"
      @update:active-device="setDevice($event)"
    />

    <div class="preview-shell">

      <div v-if="!hasPdf || activeTab === 'form'" class="form-preview-wrap">
        <TemplatePreviewMobileBar    :active-device="activeDevice" />
        <TemplatePreviewBrowserChrome :survey-url="surveyUrl" :active-device="activeDevice" />
        <TemplatePreviewIframe        :survey-url="surveyUrl" :active-device="activeDevice" />
      </div>

      <TemplatePdfPreviewWrap
        v-if="hasPdf && activeTab === 'pdf'"
        :images="previewImages"
        @expand="fullscreen.open()"
      />

    </div>

    <TemplateFullscreenGallery
      :images="previewImages"
      :is-open="fullscreen.isOpen.value"
      @close="fullscreen.close()"
    />

    <TemplatePreviewModal
      :is-open="formModal.isOpen.value"
      :survey-url="surveyUrl"
      @close="formModal.close()"
    />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import TemplatePreviewToolbar     from './TemplatePreviewToolbar.vue'
import TemplatePreviewModal       from './TemplatePreviewModal.vue'
import TemplatePreviewBrowserChrome from './TemplatePreviewBrowserChrome.vue'
import TemplatePreviewMobileBar   from './TemplatePreviewMobileBar.vue'
import TemplatePreviewIframe      from './TemplatePreviewIframe.vue'
import TemplatePdfPreviewWrap     from './TemplatePdfPreviewWrap.vue'
import TemplateFullscreenGallery  from './TemplateFullscreenGallery.vue'

const props = defineProps({
  pdfData:   { type: Object, default: null },
  surveyUrl: { type: String, required: true },
})

const hasPdf    = computed(() => !!props.pdfData)
const activeTab = ref('form')

const activeDevice = ref('desktop')
function setDevice(device) { activeDevice.value = device }

function makeModal() {
  const isOpen = ref(false)
  function open()  { isOpen.value = true;  document.body.style.overflow = 'hidden' }
  function close() { isOpen.value = false; document.body.style.overflow = '' }
  return { isOpen, open, close }
}

const formModal  = makeModal()
const fullscreen = makeModal()

function onKeydown(e) {
  if (e.key === 'Escape') {
    if (fullscreen.isOpen.value) fullscreen.close()
    else if (formModal.isOpen.value) formModal.close()
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const previewImages = computed(() => {
  if (!props.pdfData?.previewImages) return []
  return props.pdfData.previewImages.map(item => {
    let url = '', alt = '', width = null, height = null
    if (item.image?.url) {
      url    = item.image.url
      alt    = item.image.alternativeText || item.imageAlt || 'Template Preview'
      width  = item.width || item.image.width
      height = item.height || item.image.height
    } else if (item.image?.data?.attributes?.url) {
      const a = item.image.data.attributes
      url    = a.url
      alt    = a.alternativeText || item.imageAlt || 'Template Preview'
      width  = item.width || a.width
      height = item.height || a.height
    } else if (item.imageUrl) {
      url    = item.imageUrl
      alt    = item.imageAlt || 'Template Preview'
      width  = item.width
      height = item.height
    }
    return { id: item.id, url, alt, width, height }
  }).filter(i => i.url)
})

defineExpose({ openModal: formModal.open })
</script>

<style scoped>
.preview-stage {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  position: sticky;
  top: 80px;
  margin-top: 45px;
}

.preview-shell {
  width: 100%;
  min-width: 0;
  display: flex;
  justify-content: center;
}

.form-preview-wrap {
  position: relative;
  border: 1px solid var(--border-light);
  border-bottom: none;
  border-radius: 12px 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px -4px rgba(16, 24, 40, 0.1), 0 1px 4px -1px rgba(16, 24, 40, 0.06);
  background: #fff;
  width: 100%;
  min-width: 0;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1), border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms;
}

.preview-stage.tablet .form-preview-wrap {
  width: 520px;
  max-width: 100%;
}

.preview-stage.mobile .form-preview-wrap {
  width: 320px;
  max-width: 100%;
  border-radius: 28px 28px 16px 16px;
  box-shadow: 0 8px 32px -4px rgba(16, 24, 40, 0.18), 0 2px 8px -2px rgba(16, 24, 40, 0.1);
}

@media (max-width: 1024px) {
  .preview-stage {
    position: static;
  }
}
</style>
