<template>
  <section class="fs">
    <div class="fs__container">
      <header class="fs__header">
        <span class="fs__header-label">One connected platform</span>
        <h2 class="fs__header-title">Collect data once. Use it everywhere.</h2>
        <p class="fs__header-desc">
          Bring data in through forms or connected systems, then use it to generate documents, run workflows, and
          automate what happens next.
        </p>
      </header>

      <!-- ── Tabs (all breakpoints) ────────────────────────── -->
      <div class="fs__tabs">
        <button
          v-for="tab in TABS"
          :key="tab.id"
          class="fs__pill"
          :class="{ 'fs__pill--active': activeTab === tab.id }"
          :style="
            activeTab === tab.id
              ? { background: CONTENT_DATA[tab.id].theme.pillBg, color: '#fff', borderColor: 'transparent' }
              : {}
          "
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- ── Feature card ───────────────────────────────────── -->
      <div
        v-for="(tabContent, tabId) in CONTENT_DATA"
        :key="tabId"
        class="fs__card"
        :class="activeTab === tabId ? 'fs__card--visible' : 'fs__card--hidden'"
      >
        <!-- Left: text content -->
        <div class="fs__content">
          <span class="fs__badge" :style="{ color: tabContent.theme.iconColor }">
            {{ tabContent.badge }}
          </span>
          <h2 class="fs__title">{{ tabContent.title }}</h2>
          <p class="fs__desc">{{ tabContent.desc }}</p>

          <div class="fs__features">
            <div v-for="(f, i) in tabContent.features" :key="i" class="fs__feature">
              <div
                class="fs__feature-icon"
                :style="{ background: tabContent.theme.iconBg, color: tabContent.theme.iconColor }"
              >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span class="fs__icon-svg" v-html="SVG_ICONS[f.iconKey]" />
              </div>
              <div class="fs__feature-body">
                <h4 class="fs__feature-title">{{ f.title }}</h4>
                <p class="fs__feature-desc">{{ f.desc }}</p>
              </div>
            </div>
          </div>

          <NuxtLink :to="tabContent.href" class="fs__explore" :style="{ color: tabContent.theme.iconColor }">
            {{ tabContent.cta }}
            <svg
              class="fs__chevron"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Right: animated visual -->
        <div class="fs__visual" :style="{ background: tabContent.theme.bg }">
          <div class="fs__blob fs__blob--1" :style="{ background: tabContent.theme.blob1 }" />
          <div class="fs__blob fs__blob--2" :style="{ background: tabContent.theme.blob2 }" />

          <div class="fs__visual-inner">
            <V2FeatureShowcaseForms v-if="tabId === 'forms'" />
            <V2FeatureShowcaseDatabase v-else-if="tabId === 'database'" />
            <V2FeatureShowcasePdf v-else-if="tabId === 'documents'" />
            <V2FeatureShowcaseWorkflows v-else-if="tabId === 'workflows'" />
            <V2FeatureShowcaseAutomations v-else-if="tabId === 'automations'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import usersIcon from '~/assets/svg/feature-icons/users.svg?raw'
import slidersHorizontalIcon from '~/assets/svg/feature-icons/sliders-horizontal.svg?raw'
import globeIcon from '~/assets/svg/feature-icons/globe.svg?raw'
import paletteIcon from '~/assets/svg/feature-icons/palette.svg?raw'
import penToolIcon from '~/assets/svg/feature-icons/pen-tool.svg?raw'
import fileTextIcon from '~/assets/svg/feature-icons/file-text.svg?raw'
import bellRingIcon from '~/assets/svg/feature-icons/bell-ring.svg?raw'
import layersIcon from '~/assets/svg/feature-icons/layers.svg?raw'

const SVG_ICONS = {
  users: usersIcon,
  slidersHorizontal: slidersHorizontalIcon,
  globe: globeIcon,
  palette: paletteIcon,
  penTool: penToolIcon,
  fileText: fileTextIcon,
  bellRing: bellRingIcon,
  layers: layersIcon,
}

const TABS = [
  { id: 'forms', label: 'Forms' },
  { id: 'database', label: 'Database' },
  { id: 'documents', label: 'Documents' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'automations', label: 'Automations' },
]

const CONTENT_DATA = {
  forms: {
    href: '/features/drag-and-drop-form-builder/',
    cta: 'Explore forms',
    title: 'Collect the right information from anyone.',
    desc: 'Create with AI, start from a template or PDF, and prefill each form with data you already have.',
    badge: 'Forms',
    features: [
      {
        iconKey: 'penTool',
        title: 'Build faster',
        desc: 'Turn a prompt, template, or PDF into an editable form in minutes.',
      },
      {
        iconKey: 'slidersHorizontal',
        title: 'Ask only what matters',
        desc: 'Use logic and existing data to ask only what each person needs to answer.',
      },
    ],
    theme: {
      bg: 'linear-gradient(135deg, #f5f3ff, #faf5ff, #ede9fe)',
      iconBg: '#f5f3ff',
      iconColor: '#7c3aed',
      pillBg: '#7c3aed',
      blob1: 'rgba(196,181,253,0.45)',
      blob2: 'rgba(233,213,255,0.45)',
    },
  },
  database: {
    href: '/features/auto-fill-forms-with-external-data/',
    cta: 'Explore connected data',
    title: 'Bring your business data together—and put it to work.',
    desc: 'Store form responses, import records from other systems, and reuse the same data across forms, documents, workflows, and automations.',
    badge: 'Database',
    features: [
      {
        iconKey: 'fileText',
        title: 'Bring data in',
        desc: 'Combine form responses with records from spreadsheets, apps, and APIs.',
      },
      {
        iconKey: 'layers',
        title: 'Use it everywhere',
        desc: 'Prefill forms, populate documents, and power every process from one data layer.',
      },
    ],
    theme: {
      bg: 'linear-gradient(135deg, #f0f9ff, #eff6ff, #e0f2fe)',
      iconBg: '#f0f9ff',
      iconColor: '#0284c7',
      pillBg: '#0284c7',
      blob1: 'rgba(125,211,252,0.4)',
      blob2: 'rgba(147,197,253,0.4)',
    },
  },
  documents: {
    href: '/features/document-generation/',
    cta: 'Explore documents',
    title: 'Turn live data into documents that are ready to use.',
    desc: 'Populate agreements, invoices, certificates, and PDFs using data from forms, the database, or connected systems.',
    badge: 'Documents',
    features: [
      {
        iconKey: 'penTool',
        title: 'Use your own templates',
        desc: 'Design polished documents that match your brand and existing process.',
      },
      {
        iconKey: 'fileText',
        title: 'Generate and deliver',
        desc: 'Create the right document from current data and send it automatically.',
      },
    ],
    theme: {
      bg: 'linear-gradient(135deg, #faf5ff, #fdf4ff, #f3e8ff)',
      iconBg: '#faf5ff',
      iconColor: '#a855f7',
      pillBg: '#9333ea',
      blob1: 'rgba(240,171,252,0.4)',
      blob2: 'rgba(221,214,254,0.4)',
    },
  },
  workflows: {
    href: '/features/workflows/',
    cta: 'Explore workflows',
    title: 'Guide data and people through every step.',
    desc: 'Build multi-step processes involving forms, assignments, approvals, documents, and human decisions.',
    badge: 'Workflows',
    features: [
      {
        iconKey: 'users',
        title: 'Coordinate every participant',
        desc: 'Give each person the right step, data, and decision at the right time.',
      },
      {
        iconKey: 'layers',
        title: 'Keep the full context',
        desc: 'Carry the same record from intake through review, approval, and delivery.',
      },
    ],
    theme: {
      bg: 'linear-gradient(135deg, #eef2ff, #f5f3ff, #e0e7ff)',
      iconBg: '#eef2ff',
      iconColor: '#4f46e5',
      pillBg: '#4f46e5',
      blob1: 'rgba(165,180,252,0.4)',
      blob2: 'rgba(196,181,253,0.4)',
    },
  },
  automations: {
    href: '/features/autoresponder-email/',
    cta: 'Explore automations',
    title: 'Run the next action without manual follow-up.',
    desc: 'React to form submissions, record updates, and workflow events with emails, integrations, AI actions, and background tasks.',
    badge: 'Automations',
    features: [
      {
        iconKey: 'bellRing',
        title: 'React to any event',
        desc: 'Trigger timely messages and actions whenever data or status changes.',
      },
      {
        iconKey: 'globe',
        title: 'Connect every system',
        desc: 'Send data to the apps and APIs your business already depends on.',
      },
    ],
    theme: {
      bg: 'linear-gradient(135deg, #fff1f2, #fdf2f8, #eef2ff)',
      iconBg: '#fff1f2',
      iconColor: '#f43f5e',
      pillBg: '#f43f5e',
      blob1: 'rgba(251,207,232,0.4)',
      blob2: 'rgba(199,210,254,0.4)',
    },
  },
}

const activeTab = ref('forms')
</script>

<style scoped>
/* ── Shared keyframes ──────────────────────────────────────── */
@keyframes cursor-robin {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 15px);
  }
}
@keyframes cursor-alex {
  0%,
  100% {
    transform: translate(20px, 0);
  }
  50% {
    transform: translate(-10px, -20px);
  }
}
@keyframes chevron-bounce {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ── Tab visibility ────────────────────────────────────────── */
.fs__card--hidden {
  display: none !important;
}
.fs__card--visible {
  animation: tab-card-in 0.25s ease both;
}

@keyframes tab-card-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Section ───────────────────────────────────────────────── */
.fs {
  position: relative;
  overflow: hidden;
  padding: var(--space-12) var(--space-6) var(--space-24);
  background: #fff;
}

.fs__container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

@media (max-width: 640px) {
  .fs {
    padding: var(--space-16) var(--space-5);
  }
}

/* ── Platform positioning ───────────────────────────────────── */
.fs__header {
  max-width: 1100px;
  margin: 0 auto var(--space-8);
  text-align: center;
}

.fs__header-label {
  display: inline-block;
  margin-bottom: var(--space-3);
  color: var(--violet-600);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.fs__header-title {
  margin: 0;
  color: var(--fg-1);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: var(--fw-bold);
  letter-spacing: -0.7px;
  line-height: 1.15;
}

.fs__header-desc {
  max-width: 1050px;
  margin: var(--space-4) auto 0;
  color: var(--fg-2);
  font-size: var(--fs-md);
  line-height: 1.65;
}

/* ── Tabs (all breakpoints) ────────────────────────────────── */
.fs__tabs {
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: var(--space-2);
  padding: 0 var(--space-4) var(--space-2);
  margin: 0 0 var(--space-5);
  scroll-padding-inline: var(--space-4);
}
.fs__tabs::-webkit-scrollbar {
  display: none;
}
@media (min-width: 640px) {
  .fs__tabs {
    margin: 0 0 var(--space-5);
    padding: 0 0 var(--space-2);
  }
}
@media (min-width: 1024px) {
  .fs__tabs {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: visible;
    margin: 0 0 var(--space-6);
    padding: 0 0 var(--space-2);
  }
}

.fs__pill {
  flex-shrink: 0;
  scroll-snap-align: start;
  white-space: nowrap;
  padding: var(--space-1) var(--space-3);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  border-radius: var(--r-full);
  border: 1px solid var(--border-light);
  background: var(--bg-primary);
  color: var(--fg-strong);
  cursor: pointer;
  transition: all 200ms ease;
  box-shadow: var(--shadow-xs);
  font-family: var(--font-primary);
}
.fs__pill:hover:not(.fs__pill--active) {
  background: var(--bg-grey-50);
}
.fs__pill--active {
  box-shadow: var(--shadow-sm);
}

/* ── Feature card ──────────────────────────────────────────── */
.fs__card {
  background: var(--bg-primary);
  border-radius: var(--r-3xl);
  overflow: hidden;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .fs__card {
    flex-direction: row;
  }
}

/* ── Content (left) ────────────────────────────────────────── */
.fs__content {
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
}
@media (min-width: 640px) {
  .fs__content {
    padding: var(--space-8);
  }
}
@media (min-width: 1024px) {
  .fs__content {
    padding: var(--space-12);
    order: 1;
  }
}

.fs__badge {
  display: none;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.07em;
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}
@media (min-width: 1024px) {
  .fs__badge {
    display: inline-block;
  }
}

.fs__title {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 var(--space-4);
}

.fs__desc {
  display: none;
  color: var(--fg-2);
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 var(--space-8);
}
@media (min-width: 1024px) {
  .fs__desc {
    display: block;
  }
}

.fs__features {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}
@media (min-width: 1024px) {
  .fs__features {
    gap: var(--space-6);
  }
}

.fs__feature {
  display: flex;
  gap: var(--space-4);
  align-items: center;
}
@media (min-width: 768px) {
  .fs__feature {
    align-items: flex-start;
  }
}

.fs__feature-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: var(--r-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  box-shadow:
    0 0 0 4px rgba(0, 0, 0, 0.04),
    var(--shadow-xs);
}
@media (min-width: 768px) {
  .fs__feature-icon {
    width: 40px;
    height: 40px;
  }
}

.fs__icon-svg {
  display: flex;
  align-items: center;
}
.fs__icon-svg :deep(svg) {
  width: 16px;
  height: 16px;
}
@media (min-width: 768px) {
  .fs__icon-svg :deep(svg) {
    width: 20px;
    height: 20px;
  }
}

.fs__feature-body {
  flex: 1;
  min-width: 0;
}

.fs__feature-title {
  display: none;
  font-size: 15px;
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  margin: 0 0 4px;
}
@media (min-width: 768px) {
  .fs__feature-title {
    display: block;
  }
}

.fs__feature-desc {
  margin: 0;
  color: var(--fg-strong);
  font-size: var(--fs-sm);
  line-height: 1.45;
  font-weight: var(--fw-medium);
}
@media (min-width: 768px) {
  .fs__feature-desc {
    color: var(--fg-2);
    font-size: 15px;
    line-height: 1.7;
    font-weight: var(--fw-regular);
  }
}

.fs__explore {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: var(--space-8);
  transition: opacity 200ms ease;
  font-family: var(--font-primary);
}
.fs__explore:hover {
  opacity: 0.75;
}
.fs__explore:hover .fs__chevron {
  transform: translateX(4px);
}

.fs__chevron {
  transition: transform 200ms ease;
  flex-shrink: 0;
}

/* ── Visual (right) ────────────────────────────────────────── */
.fs__visual {
  flex: 1;
  position: relative;
  overflow: hidden;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
}
@media (min-width: 640px) {
  .fs__visual {
    height: auto;
    min-height: 380px;
  }
}
@media (min-width: 1024px) {
  .fs__visual {
    min-height: 460px;
    order: 2;
  }
}

.fs__blob {
  position: absolute;
  width: 256px;
  height: 256px;
  border-radius: var(--r-full);
  filter: blur(48px);
  pointer-events: none;
}
.fs__blob--1 {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}
.fs__blob--2 {
  bottom: 0;
  left: 0;
  transform: translate(-25%, 50%);
}

.fs__visual-inner {
  position: relative;
  width: 100%;
  max-width: 384px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  transform: scale(0.75);
  transform-origin: center;
}
@media (min-width: 640px) {
  .fs__visual-inner {
    transform: scale(1);
  }
}

/* ─────────────────────────────────────────────────────────── */
/* Visual: Collaboration                                       */
/* ─────────────────────────────────────────────────────────── */
.fsv-collab {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  background: #fff6ec;
  border-radius: var(--r-2xl);
  padding: var(--space-6);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(254, 215, 170, 0.5);
  overflow: hidden;
}
.fsv-collab__header {
  width: 66%;
  height: 24px;
  background: #fed7aa;
  border-radius: var(--r);
  margin-bottom: var(--space-6);
}
.fsv-collab__row {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}
.fsv-collab__field {
  height: 40px;
  flex: 1;
  background: var(--bg-primary);
  border-radius: var(--r-lg);
  border: 1px solid rgba(254, 215, 170, 0.5);
  box-shadow: var(--shadow-xs);
}
.fsv-collab__field--full {
  flex: none;
  width: 100%;
  margin-bottom: var(--space-4);
}
.fsv-collab__field--tall {
  flex: none;
  width: 100%;
  height: 80px;
}

.fsv-collab__cursor {
  position: absolute;
  display: flex;
  align-items: flex-start;
}
.fsv-collab__cursor--robin {
  top: 96px;
  left: 25%;
  animation: cursor-robin 3s ease-in-out infinite;
}
.fsv-collab__cursor--alex {
  bottom: 112px;
  right: 25%;
  animation: cursor-alex 4s ease-in-out infinite;
}
.fsv-collab__label {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  color: var(--bg-primary);
  padding: 2px var(--space-2);
  border-radius: var(--r-full);
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
  margin-left: var(--space-4);
}
.fsv-collab__label--blue {
  background: #3b82f6;
}
.fsv-collab__label--pink {
  background: #ec4899;
}

/* ─────────────────────────────────────────────────────────── */
/* Visual: Data Protection                                     */
/* ─────────────────────────────────────────────────────────── */
.fsv-dp {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  background: rgba(236, 253, 245, 0.5);
  border-radius: var(--r-2xl);
  padding: var(--space-6);
  border: 1px solid rgba(167, 243, 208, 0.4);
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.02);
}
.fsv-dp__offline-bar {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  background: #111827;
  color: var(--bg-primary);
  border-radius: var(--r-lg);
  padding: 10px var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 2;
  animation: slide-down 0.4s ease both;
}
.fsv-dp__offline-left {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
}
.fsv-dp__saving {
  font-size: var(--fs-tiny);
  color: #6b7280;
}
.fsv-dp__form {
  margin-top: 56px;
  background: var(--bg-primary);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-xs);
  border: 1px solid rgba(236, 253, 245, 0.6);
  padding: var(--space-4);
  height: calc(100% - 56px - 8px);
  position: relative;
  z-index: 1;
}
.fsv-dp__form-header {
  height: 16px;
  width: 66%;
  background: #d1fae5;
  border-radius: var(--r);
  margin-bottom: var(--space-4);
}
.fsv-dp__form-field {
  height: 32px;
  background: var(--bg-grey-50);
  border-radius: var(--r);
  border: 1px solid var(--border-light);
  margin-bottom: var(--space-3);
}
.fsv-dp__form-field--tall {
  height: 64px;
}
.fsv-dp__sync-pill {
  position: absolute;
  bottom: 24px;
  left: var(--space-4);
  right: var(--space-4);
  background: var(--bg-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--r-full);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  z-index: 2;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
  animation: slide-up 0.4s 0.2s ease both;
}
</style>
