<template>
  <div class="tmpl-detail__preview-col">

    <!-- PDF template: toggle between PDF image and form iframe -->
    <template v-if="pdfData">
      <div class="tmpl-detail__preview-switch-wrap">
        <div
          class="tmpl-detail__preview-switch"
          :class="{ 'tmpl-detail__preview-switch--form': activeTab === 'form' }"
        >
          <button
            type="button"
            class="tmpl-detail__preview-tab-btn"
            :class="{ 'tmpl-detail__preview-tab-btn--active': activeTab === 'pdf' }"
            @click="activeTab = 'pdf'"
          >PDF Preview</button>
          <button
            type="button"
            class="tmpl-detail__preview-tab-btn"
            :class="{ 'tmpl-detail__preview-tab-btn--active': activeTab === 'form' }"
            @click="activeTab = 'form'"
          >Form Preview</button>
          <span class="tmpl-detail__switch-indicator" aria-hidden="true"></span>
        </div>
      </div>

      <div class="tmpl-detail__preview-pane">
        <div v-show="activeTab === 'pdf'" class="tmpl-detail__pdf-pane">
          <button
            type="button"
            class="tmpl-detail__expand-btn"
            aria-label="Open fullscreen preview"
            @click="openFullscreen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <img
            v-if="previewImages.length"
            :src="previewImages[0].url"
            :alt="previewImages[0].alt || 'Template Preview'"
            :width="previewImages[0].width || 1200"
            :height="previewImages[0].height || 738"
            class="tmpl-detail__preview-img"
            loading="lazy"
          />
        </div>
        <div v-show="activeTab === 'form'" class="tmpl-detail__iframe-wrap">
          <iframe
            :src="surveyUrl"
            frameborder="0"
            class="tmpl-detail__iframe"
            loading="lazy"
          />
        </div>
      </div>
    </template>

    <!-- Non-PDF template: just iframe -->
    <template v-else>
      <div class="tmpl-detail__preview-pane">
        <div class="tmpl-detail__iframe-wrap">
          <iframe
            :src="surveyUrl"
            frameborder="0"
            class="tmpl-detail__iframe"
            loading="lazy"
          />
        </div>
      </div>
    </template>

    <!-- Fullscreen modal -->
    <Teleport to="body">
      <div v-if="showFullscreen" class="tmpl-detail__fullscreen" @click.self="closeFullscreen">
        <button class="tmpl-detail__fullscreen-close" aria-label="Close fullscreen" @click="closeFullscreen">
          <img :src="closeIcon" alt="Close" width="24" height="24" />
        </button>
        <button
          v-if="previewImages.length > 1"
          class="tmpl-detail__fullscreen-arrow tmpl-detail__fullscreen-arrow--left"
          aria-label="Previous image"
          @click.stop="prevModal"
        ><span>&lsaquo;</span></button>
        <img
          v-if="previewImages.length"
          :src="previewImages[modalIndex].url"
          :alt="previewImages[modalIndex].alt || 'Template Preview'"
          class="tmpl-detail__fullscreen-img"
        />
        <button
          v-if="previewImages.length > 1"
          class="tmpl-detail__fullscreen-arrow tmpl-detail__fullscreen-arrow--right"
          aria-label="Next image"
          @click.stop="nextModal"
        ><span>&rsaquo;</span></button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import closeIcon from '~/assets/images/x-close.svg'

const props = defineProps({
  pdfData:   { type: Object, default: null },
  surveyUrl: { type: String, required: true },
})

const activeTab     = ref('pdf')
const showFullscreen = ref(false)
const modalIndex    = ref(0)

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

const openFullscreen = () => {
  modalIndex.value = 0
  showFullscreen.value = true
  document.body.style.overflow = 'hidden'
}

const closeFullscreen = () => {
  showFullscreen.value = false
  document.body.style.overflow = ''
}

const nextModal = () => {
  if (!previewImages.value.length) return
  modalIndex.value = (modalIndex.value + 1) % previewImages.value.length
}

const prevModal = () => {
  if (!previewImages.value.length) return
  modalIndex.value = (modalIndex.value - 1 + previewImages.value.length) % previewImages.value.length
}

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ---- Preview switch ---- */
.tmpl-detail__preview-switch-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.tmpl-detail__preview-switch {
  position: relative;
  background: var(--bg-grey-100);
  border-radius: var(--r-full);
  padding: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 260px;
  height: 36px;
  overflow: hidden;
  box-shadow: var(--shadow-xs);
}

.tmpl-detail__preview-tab-btn {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--fg-3);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0 var(--space-3);
  height: 28px;
  border-radius: var(--r-full);
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.tmpl-detail__preview-tab-btn--active {
  color: #fff;
}

.tmpl-detail__switch-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  height: calc(100% - 8px);
  width: calc(50% - 4px);
  background: var(--violet-500);
  border-radius: var(--r-full);
  transition: transform 0.25s ease;
  z-index: 0;
}

.tmpl-detail__preview-switch--form .tmpl-detail__switch-indicator {
  transform: translateX(100%);
}

/* ---- Preview pane ---- */
.tmpl-detail__preview-pane {
  background: var(--bg-grey-100);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  height: calc(100vh - 220px);
  min-height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.tmpl-detail__pdf-pane,
.tmpl-detail__iframe-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.tmpl-detail__iframe {
  flex: 1;
  width: 100%;
  border: none;
  display: block;
  min-height: 0;
}

.tmpl-detail__preview-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: var(--space-4);
  box-sizing: border-box;
}

.tmpl-detail__expand-btn {
  position: absolute;
  bottom: var(--space-4);
  right: var(--space-4);
  width: 44px;
  height: 44px;
  border-radius: var(--r-half);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  z-index: 4;
  padding: 0;
}

.tmpl-detail__expand-btn:hover {
  background: var(--bg-grey-50);
}

.tmpl-detail__expand-btn:focus {
  outline: none;
  box-shadow: var(--focus-ring-primary);
}

/* ---- Fullscreen modal ---- */
.tmpl-detail__fullscreen {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.tmpl-detail__fullscreen-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-lg);
}

.tmpl-detail__fullscreen-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: var(--r-half);
  background: var(--bg-primary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tmpl-detail__fullscreen-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: var(--r-half);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  line-height: 1;
}

.tmpl-detail__fullscreen-arrow--left  { left: 24px; }
.tmpl-detail__fullscreen-arrow--right { right: 24px; }

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .tmpl-detail__preview-pane {
    height: 60vh;
    min-height: 400px;
  }
}

@media (max-width: 640px) {
  .tmpl-detail__preview-pane {
    height: 50vh;
    min-height: 320px;
  }
}
</style>
