<template>
  <section class="container py-2 py-lg-5 template-showcase">
    <div v-if="resolvedTabs.length" class="categories">
      <div class="tab-container">
        <div class="icon pointer">
          <nuxt-img
            src="/arrow-icon.svg"
            id="ts-left"
            @click="scrollTabs('left')"
          />
        </div>
        <ul class="tabs-box" ref="tabsBox">
          <li
            class="tab"
            v-for="tab in resolvedTabs"
            :key="tab.id"
            :id="tab.slug"
            :class="{ active: activeTab === tab.id }"
            @click="setActiveTab(tab)"
          >
            {{ tab.name }}
          </li>
        </ul>
        <div class="icon pointer">
          <nuxt-img
            src="/arrow-icon.svg"
            id="ts-right"
            @click="scrollTabs('right')"
          />
        </div>
      </div>
    </div>

    <template v-for="tab in resolvedTabs" :key="tab.id">
      <div v-show="activeTab === tab.id" class="templates">
        <div
          v-for="(template, idx) in tab.templates"
          :key="`${tab.id}-${idx}`"
          class="template"
        >
          <NuxtLink :to="`/templates/${template.slug}/`">
            <img
              v-if="template.previewImageUrl"
              class="img-fluid pointer template_img"
              :src="template.previewImageUrl"
              :alt="template.previewImageAlt || template.name"
            />
            <nuxt-img
              v-else
              class="img-fluid"
              src="/templates/create_form.png"
              alt="Template placeholder image"
            />
            <h2 class="template-name pointer">
              {{ template.name }}
            </h2>
          </NuxtLink>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'
import resolveShowcaseTabs from '@/utils/resolveShowcaseTabs'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
})

const { data: resolvedTabs } = await useAsyncData(
  `template-showcase-${(props.tabs || []).map((t) => t.id || t.tabName).join('-')}`,
  async () => {
    const { templates } = await getTemplatesAndCategories()
    return resolveShowcaseTabs(props.tabs, templates, null, {
      sourceLabel: 'template-showcase-page',
      idPrefix: 'ts',
    })
  },
  { default: () => [] },
)

const tabsBox = ref(null)
const firstTab = resolvedTabs.value[0] || null
const activeTab = ref(firstTab?.id ?? null)

function setActiveTab(tab) {
  if (!tab) return
  activeTab.value = tab.id
  const element = document.getElementById(tab.slug)
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })
  setTimeout(() => handleIcons(), 300)
}

function handleIcons() {
  const leftArrow = document.querySelector('#ts-left')
  const rightArrow = document.querySelector('#ts-right')
  if (!tabsBox.value) return
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

function scrollTabs(direction) {
  const scrollAmount = 180
  if (!tabsBox.value) return
  if (direction === 'left') {
    tabsBox.value.scrollLeft =
      tabsBox.value.scrollLeft <= 100
        ? 0
        : tabsBox.value.scrollLeft - scrollAmount
  } else {
    tabsBox.value.scrollLeft += scrollAmount
  }
  setTimeout(() => handleIcons(), 300)
}

onMounted(() => handleIcons())
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

.icon:last-child img {
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
  white-space: nowrap;
  background: #f5f4fd;
  padding: 3px 20px;
  border-radius: 30px;
  border: 1px solid #d8d5f2;
}

.tabs-box .tab:hover {
  background: #efedfb;
}

.tabs-box .tab.active {
  color: #fff;
  background: var(--clr-primary);
  border-color: transparent;
}

.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
  place-items: center;
}

.template {
  border-radius: 4px;
  padding: 12px;
  transition: all 500ms ease;
  min-height: 130px;
}

.template_img {
  border-radius: 10px;
}

.template-name {
  font-weight: 500;
  font-size: 16px;
  margin-top: 14px;
  line-height: 24px;
  color: #211447;
  user-select: none;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .template-name {
    font-size: 14px;
  }
}

@media only screen and (max-width: 800px) {
  .templates {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .template-name {
    font-size: 16px;
  }
}
</style>
