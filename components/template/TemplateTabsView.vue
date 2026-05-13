<template>
  <div>
    <div v-if="tabs.length" class="categories">
      <div class="tab-container">
        <div
          class="icon pointer"
          @mousedown="startScroll('left')"
          @mouseup="stopScroll"
          @mouseleave="stopScroll"
          @touchstart="startScroll('left')"
          @touchend="stopScroll"
        >
          <nuxt-img src="/arrow-icon.svg" class="arrow-left" />
        </div>
        <ul class="tabs-box" ref="tabsBox">
          <li
            class="tab"
            v-for="tab in tabs"
            :key="tab.id"
            :id="tab.slug"
            :class="{ active: activeTabId === tab.id }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </li>
        </ul>
        <div
          class="icon pointer"
          @mousedown="startScroll('right')"
          @mouseup="stopScroll"
          @mouseleave="stopScroll"
          @touchstart="startScroll('right')"
          @touchend="stopScroll"
        >
          <nuxt-img src="/arrow-icon.svg" class="arrow-right" />
        </div>
      </div>
    </div>

    <div class="content">
      <template v-for="tab in tabs" :key="tab.id">
        <div v-show="activeTabId === tab.id">
          <div v-if="tab.templates && tab.templates.length" class="templates">
            <NuxtLink
              v-for="(template, idx) in tab.templates"
              :key="`${tab.id}-${idx}`"
              :to="`/templates/${template.slug}/`"
              class="template"
            >
              <div class="template__media">
                <img
                  v-if="template.previewImageUrl"
                  :src="template.previewImageUrl"
                  :alt="template.previewImageAlt || template.name"
                  class="template__img"
                  loading="lazy"
                />
                <nuxt-img
                  v-else
                  src="/templates/create_form.png"
                  alt="Template placeholder image"
                  class="template__img"
                />
              </div>
              <div class="template__body">
                <h3 class="template__name">{{ template.name }}</h3>
                <p v-if="template.description" class="template__desc">
                  {{ template.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
          <div
            v-else-if="!loading"
            class="d-flex align-items-center justify-content-center mt-5 p-5"
          >
            No Templates
          </div>
        </div>
      </template>
      <Loader :loading="loading" class="mt-5 p-5" />
    </div>
  </div>
</template>

<script setup>
import Loader from '../Loader.vue'

const props = defineProps({
  tabs: { type: Array, default: () => [] },
  activeTabId: { type: [String, Number], default: null },
  loading: { type: Boolean, default: false },
})

const emit = defineEmits(['update:activeTabId', 'change'])

const tabsBox = ref(null)

function selectTab(tab) {
  emit('update:activeTabId', tab.id)
  emit('change', tab)
  const el = document.getElementById(tab.slug)
  el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  setTimeout(handleIcons, 300)
}

// Hold-to-scroll: immediate step on press, then continuous while held.
let scrollHoldTimer = null
let scrollFrameId = null
let lastScrollTimestamp = 0

function scrollStep(direction, amount) {
  if (!tabsBox.value) return
  if (direction === 'left') {
    tabsBox.value.scrollLeft = Math.max(0, tabsBox.value.scrollLeft - amount)
  } else {
    tabsBox.value.scrollLeft += amount
  }
}

function startScroll(direction) {
  stopScroll(false)
  scrollStep(direction, 180)
  scrollHoldTimer = setTimeout(() => {
    lastScrollTimestamp = 0
    scrollFrameId = requestAnimationFrame((timestamp) =>
      scrollContinuously(direction, timestamp),
    )
  }, 250)
}

function scrollContinuously(direction, timestamp) {
  if (!lastScrollTimestamp) {
    lastScrollTimestamp = timestamp
  }

  const delta = timestamp - lastScrollTimestamp
  lastScrollTimestamp = timestamp
  scrollStep(direction, delta * 1.5)
  scrollFrameId = requestAnimationFrame((nextTimestamp) =>
    scrollContinuously(direction, nextTimestamp),
  )
}

function stopScroll(updateIcons = true) {
  if (scrollHoldTimer) {
    clearTimeout(scrollHoldTimer)
    scrollHoldTimer = null
  }
  if (scrollFrameId) {
    cancelAnimationFrame(scrollFrameId)
    scrollFrameId = null
  }
  lastScrollTimestamp = 0

  if (updateIcons) {
    setTimeout(handleIcons, 100)
  }
}

function handleIcons() {
  if (!tabsBox.value) return
  const leftArrow = tabsBox.value.parentElement?.querySelector('.arrow-left')
  const rightArrow = tabsBox.value.parentElement?.querySelector('.arrow-right')
  const scrollLeft = Math.ceil(tabsBox.value.scrollLeft)
  const scrollableWidth = tabsBox.value.scrollWidth - tabsBox.value.clientWidth

  if (leftArrow?.parentElement) {
    leftArrow.parentElement.style.display = scrollLeft > 0 ? 'flex' : 'none'
  }
  if (rightArrow?.parentElement) {
    rightArrow.parentElement.style.display =
      scrollableWidth > scrollLeft ? 'flex' : 'none'
  }
}

onMounted(() => handleIcons())
onBeforeUnmount(() => stopScroll(false))
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tab-container {
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
}

.icon {
  position: absolute;
  top: 0;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
}

.icon:first-child {
  left: 0;
  display: none;
  background: #fff;
}

.icon:last-child {
  right: 0;
  justify-content: flex-end;
  background: #fff;
}

.icon img {
  width: 20px;
}

.arrow-right {
  rotate: 180deg;
}

.tabs-box {
  display: flex;
  gap: 12px;
  list-style: none;
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

.tabs-box .tab {
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  background: #f5f4fd;
  padding: 6px 20px;
  border-radius: 30px;
  border: 1px solid #d8d5f2;
  color: #4a4a6a;
  transition: all 0.2s ease;
}

.tabs-box .tab:hover {
  background: #fff;
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

.tabs-box .tab.active {
  color: #fff;
  background: var(--clr-primary);
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(100, 52, 208, 0.25);
}

.tabs-box .tab.active:hover {
  background: var(--clr-primary);
  color: #fff;
}

.templates {
  width: 100%;
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.template {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow:
    0 1px 2px rgba(16, 24, 40, 0.05),
    0 1px 3px rgba(16, 24, 40, 0.04);
  transition:
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.template:hover {
  border-color: var(--clr-primary);
  box-shadow:
    0 8px 24px -4px rgba(100, 52, 208, 0.2),
    0 2px 6px -2px rgba(100, 52, 208, 0.1);
}

.template__media {
  position: relative;
  background: linear-gradient(135deg, #f4f1ff 0%, #ece6ff 100%);
  overflow: hidden;
}

.template__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(100, 52, 208, 0.12);
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.template:hover .template__media::after {
  opacity: 1;
}

.template__img {
  display: block;
  width: 100%;
  aspect-ratio: 1200 / 738;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
}

.template:hover .template__img {
  transform: scale(1.04);
}

.template__body {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.template__name {
  margin: 0;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.35;
  color: #1a1a2e;
  user-select: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.25s ease;
}

.template:hover .template__name {
  color: var(--clr-primary);
}

.template__desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #667085;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .template__name {
    font-size: 16px;
  }
}

@media only screen and (max-width: 600px) {
  .templates {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .template__body {
    padding: 16px 18px 18px;
  }
}
</style>
