<template>
  <section class="dir">
    <!-- hero: text left, hub illustration right -->
    <div class="dir__hero">
      <div class="dir__hero-grid">
        <div class="dir__hero-inner">
          <span v-if="eyebrow" class="dir__eyebrow">{{ eyebrow }}</span>
          <h1 class="dir__heading">
            <span
              v-for="item in title"
              :key="item.id"
              :class="['dir__title-span', { 'dir__title-highlight': item.highlight }]"
              >{{ item.text }}</span
            >
          </h1>
          <p v-if="description" class="dir__desc">{{ description }}</p>

          <div v-if="buttons?.length" class="dir__ctas">
            <FButton
              v-for="btn in buttons"
              :key="btn.id"
              :href="btn.link"
              :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
              size="lg"
            >
              {{ btn.text }}
              <ArrowRightIcon v-if="btn.showArrow" />
            </FButton>
          </div>

          <p v-if="metaText" class="dir__meta">{{ metaText }}</p>
        </div>

        <HubVisual v-if="showMarquee" :icons="hubIcons" layout="square" class="dir__hub" />
      </div>
    </div>

    <!-- directory -->
    <div id="integrations-grid" class="dir__body">
      <div class="dir__header">
        <SectionHeader
          :eyebrow="directoryEyebrow"
          :title="directoryTitle?.length ? directoryTitle : 'All integrations'"
          :description="directoryDescription"
          spacing="none"
        />
        <div class="dir__search">
          <IconSearch />
          <input
            v-model="query"
            type="text"
            :placeholder="searchPlaceholder || 'Search integrations…'"
            aria-label="Search integrations"
          />
        </div>
        <span class="dir__count">Showing {{ shown.length }} integration{{ shown.length === 1 ? '' : 's' }}</span>
      </div>

      <div v-if="shown.length" class="dir__grid">
        <IntegrationCard v-for="app in shown" :key="app.name" :app="app" />
      </div>

      <div v-else class="dir__empty">
        <span class="dir__empty-icon"><IconSearch size="22" /></span>
        <h3 class="dir__empty-title">No integrations match your search</h3>
        <p class="dir__empty-body">
          Try a different name, or connect it through Zapier and webhooks — they cover 8,000+ apps.
        </p>
        <a v-if="requestLink" :href="requestLink" target="_blank" rel="noopener" class="dir__empty-link"
          >Request an integration <ArrowRightIcon
        /></a>
      </div>

      <!-- request wedge -->
      <div v-if="wedgeTitle" class="dir__wedge">
        <span class="dir__wedge-icon">
          <img src="/integrations/zapier.svg" alt="" width="28" height="28" loading="lazy" />
        </span>
        <div class="dir__wedge-main">
          <h3 class="dir__wedge-title">{{ wedgeTitle }}</h3>
          <p class="dir__wedge-body">{{ wedgeBody }}</p>
        </div>
        <div v-if="wedgeButtons?.length" class="dir__wedge-actions">
          <FButton
            v-for="btn in wedgeButtons"
            :key="btn.id"
            :href="btn.link"
            :variant="btn.type === 'Primary' ? 'primary' : 'violet-outline'"
            size="md"
          >
            {{ btn.text }}
            <ArrowRightIcon v-if="btn.showArrow" />
          </FButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import FButton from '@/components/UI/FButton.vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import HubVisual from '@/components/integrations/HubVisual.vue'
import IntegrationCard from './IntegrationCard.vue'
import { integrationIconSrc } from '@/constants/integrationIcons'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  searchPlaceholder: { type: String, default: '' },
  directoryEyebrow: { type: String, default: '' },
  directoryTitle: { type: Array, default: () => [] },
  directoryDescription: { type: String, default: '' },
  buttons: { type: Array, default: () => [] },
  metaText: { type: String, default: '' },
  showMarquee: { type: Boolean, default: true },
  integrations: { type: Array, default: () => [] },
  wedgeTitle: { type: String, default: '' },
  wedgeBody: { type: String, default: '' },
  wedgeButtons: { type: Array, default: () => [] },
})

const query = ref('')

const iconSrc = (app) => integrationIconSrc(app.name, app.iconUrl)

// reuse the wedge's request button as the empty-state action
const requestLink = computed(() => props.wedgeButtons?.find((b) => /request/i.test(b.text || ''))?.link || '')

const shown = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.integrations
  return props.integrations.filter((app) =>
    `${app.name} ${app.description || ''} ${app.category || ''}`.toLowerCase().includes(q),
  )
})

// hub shows the most recognizable logos: badged ones first, then list order
const hubIcons = computed(() => {
  const ranked = [...props.integrations].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))
  return ranked.map((app) => iconSrc(app)).filter(Boolean)
})
</script>

<style scoped>
.dir__hero {
  position: relative;
  background: radial-gradient(115% 85% at 50% -8%, var(--violet-25), #fff 58%);
  padding: var(--space-30) var(--space-6) var(--space-14);
}

.dir__hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--space-12);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.dir__hero-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: var(--space-5);
}

.dir__ctas {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

@media (max-width: 920px) {
  .dir__hero-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .dir__hero-inner {
    align-items: center;
    text-align: center;
  }
}

.dir__eyebrow {
  display: inline-flex;
  align-items: center;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--violet-500);
  background: var(--violet-50);
  padding: 5px 13px;
  border-radius: var(--r-full);
}

.dir__heading {
  font-size: clamp(36px, 4vw, 54px);
  font-weight: var(--fw-bold);
  line-height: 1.1;
  letter-spacing: -1.5px;
  color: var(--fg-1);
  max-width: 760px;
  margin: 0;
}

.dir__title-highlight {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}

.dir__desc {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--fg-2);
  line-height: 1.7;
  max-width: 620px;
  margin: 0;
}

.dir__search {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  max-width: 480px;
  background: #fff;
  border: 1px solid var(--border-dark, #d0d5dd);
  border-radius: var(--r-full);
  padding: 11px 20px;
  box-shadow: var(--shadow-xs);
  color: var(--fg-muted);
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
}

.dir__search:focus-within {
  border-color: var(--violet-300);
  box-shadow: 0 0 0 4px var(--violet-100);
}

.dir__search input {
  flex: 1;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 14.5px;
  color: var(--fg-1);
  background: transparent;
  min-width: 0;
}

.dir__search input::placeholder {
  color: var(--fg-muted);
}

.dir__meta {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  margin: 0;
}

.dir__body {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-6);
  scroll-margin-top: 90px;
}

.dir__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.dir__count {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
}

.dir__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.dir__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
  padding: 56px 20px;
  border: 1.5px dashed var(--border-dark, #d0d5dd);
  border-radius: var(--r-xl);
}

.dir__empty-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--r-half, 50%);
  background: var(--violet-50);
  color: var(--violet-500);
}

.dir__empty-title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin: 0;
}

.dir__empty-body {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  max-width: 420px;
  margin: 0;
}

.dir__empty-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--violet-600);
  text-decoration: none;
}

.dir__empty-link:hover {
  text-decoration: underline;
}

.dir__wedge {
  display: flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
  background: var(--violet-25);
  border: 1px solid #e4d7ff;
  border-radius: 20px;
  padding: 30px 34px;
  margin-top: var(--space-12);
}

.dir__wedge-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #e4d7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dir__wedge-main {
  flex: 1;
  min-width: 240px;
}

.dir__wedge-title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin: 0 0 6px;
}

.dir__wedge-body {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--fg-2);
  margin: 0;
}

.dir__wedge-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .dir__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .dir__hero {
    padding: var(--space-24) var(--space-5) var(--space-8);
  }

  .dir__grid {
    grid-template-columns: 1fr;
  }

  .dir__wedge {
    padding: 24px 22px;
  }
}
</style>
