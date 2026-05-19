<template>
  <section class="fs">
    <div class="fs__container">
      <!-- ── Tabs (all breakpoints) ────────────────────────── -->
      <div class="fs__tabs">
        <button
          v-for="tab in TABS"
          :key="tab.id"
          class="fs__pill"
          :class="{ 'fs__pill--active': activeTab === tab.id }"
          :style="activeTab === tab.id
            ? { background: CONTENT_DATA[tab.id].theme.pillBg, color: '#fff', borderColor: 'transparent' }
            : {}"
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
              Explore feature
              <svg class="fs__chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Right: animated visual -->
          <div class="fs__visual" :style="{ background: tabContent.theme.bg }">
            <div class="fs__blob fs__blob--1" :style="{ background: tabContent.theme.blob1 }" />
            <div class="fs__blob fs__blob--2" :style="{ background: tabContent.theme.blob2 }" />

            <div class="fs__visual-inner">

              <!-- Collaboration -->
              <div v-if="tabId === 'collaboration'" class="fsv-collab">
                <div class="fsv-collab__header" />
                <div class="fsv-collab__row">
                  <div class="fsv-collab__field" />
                  <div class="fsv-collab__field" />
                </div>
                <div class="fsv-collab__field fsv-collab__field--full" />
                <div class="fsv-collab__field fsv-collab__field--tall" />
                <div class="fsv-collab__cursor fsv-collab__cursor--robin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
                  </svg>
                  <span class="fsv-collab__label fsv-collab__label--blue">Robin</span>
                </div>
                <div class="fsv-collab__cursor fsv-collab__cursor--alex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ec4899" stroke="#be185d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
                  </svg>
                  <span class="fsv-collab__label fsv-collab__label--pink">Alex</span>
                </div>
              </div>

              <!-- White Label -->
              <V2FeatureShowcaseWhiteLabel v-else-if="tabId === 'whitelabel'" />

              <!-- Generate PDF -->
              <div v-else-if="tabId === 'generate-pdf'" class="fsv-pdf">
                <div class="fsv-pdf__form">
                  <div class="fsv-pdf__form-header" />
                  <div class="fsv-pdf__form-field" />
                  <div class="fsv-pdf__form-field" />
                  <div class="fsv-pdf__form-field" />
                  <div class="fsv-pdf__form-btn" />
                </div>
                <div class="fsv-pdf__arrow">
                  <svg class="fsv-pdf__chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
                <div class="fsv-pdf__doc">
                  <div class="fsv-pdf__doc-corner" />
                  <div class="fsv-pdf__doc-title">INVOICE</div>
                  <div class="fsv-pdf__doc-row">
                    <div class="fsv-pdf__doc-label" />
                    <div class="fsv-pdf__doc-value" />
                  </div>
                  <div class="fsv-pdf__doc-divider" />
                  <div class="fsv-pdf__doc-line" />
                  <div class="fsv-pdf__doc-line fsv-pdf__doc-line--short" />
                  <div class="fsv-pdf__doc-line" />
                </div>
              </div>

              <!-- Data Protection -->
              <div v-else-if="tabId === 'data-protection'" class="fsv-dp">
                <div class="fsv-dp__offline-bar">
                  <div class="fsv-dp__offline-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="2" y1="2" x2="22" y2="22" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M2 8.82A15.02 15.02 0 0 1 4.34 7" /><path d="M8.2 4.09A14.93 14.93 0 0 1 12 3a15 15 0 0 1 10 5.82" /><path d="M5 12.86A9.97 9.97 0 0 1 12 10a9.92 9.92 0 0 1 5.92 1.94" /><line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    <span>Offline Mode</span>
                  </div>
                  <span class="fsv-dp__saving">Saving locally...</span>
                </div>
                <div class="fsv-dp__form">
                  <div class="fsv-dp__form-header" />
                  <div class="fsv-dp__form-field" />
                  <div class="fsv-dp__form-field" />
                  <div class="fsv-dp__form-field fsv-dp__form-field--tall" />
                </div>
                <div class="fsv-dp__sync-pill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span>Sync when back online</span>
                </div>
              </div>

              <!-- Automations -->
              <div v-else-if="tabId === 'automations'" class="fsv-auto">
                <div class="fsv-auto__bg-card">
                  <div class="fsv-auto__bg-header" />
                  <div class="fsv-auto__bg-avatar-row">
                    <div class="fsv-auto__bg-avatar" />
                    <div class="fsv-auto__bg-lines">
                      <div class="fsv-auto__bg-line" />
                      <div class="fsv-auto__bg-line fsv-auto__bg-line--short" />
                    </div>
                  </div>
                  <div class="fsv-auto__bg-line" />
                  <div class="fsv-auto__bg-line fsv-auto__bg-line--med" />
                  <div class="fsv-auto__bg-line fsv-auto__bg-line--short2" />
                </div>
                <div class="fsv-auto__fg-card">
                  <div class="fsv-auto__fg-top">
                    <span class="fsv-auto__fg-title">Autoresponder</span>
                    <div class="fsv-auto__toggle">
                      <div class="fsv-auto__toggle-dot" />
                    </div>
                  </div>
                  <div class="fsv-auto__tabs-row">
                    <span class="fsv-auto__tab-link fsv-auto__tab-link--active">General</span>
                    <span class="fsv-auto__tab-link">Advanced</span>
                  </div>
                  <div class="fsv-auto__field">
                    <label class="fsv-auto__label">Responder Name</label>
                    <div class="fsv-auto__input">Follow Up</div>
                  </div>
                  <div class="fsv-auto__field">
                    <label class="fsv-auto__label">Email Subject</label>
                    <div class="fsv-auto__input">Customer Enquiry...</div>
                  </div>
                </div>
              </div>

              <!-- Multi Language -->
              <div v-else-if="tabId === 'multi-language'" class="fsv-ml">
                <div class="fsv-ml__form-card">
                  <div class="fsv-ml__form-header" />
                  <div class="fsv-ml__form-field" />
                  <div class="fsv-ml__form-field" />
                </div>
                <div class="fsv-ml__dropdown">
                  <div class="fsv-ml__dropdown-title">Select Language</div>
                  <div class="fsv-ml__lang fsv-ml__lang--active">
                    <span>🇬🇧</span>
                    <span class="fsv-ml__lang-name">English</span>
                    <div class="fsv-ml__lang-dot" />
                  </div>
                  <div class="fsv-ml__lang"><span>🇫🇷</span><span class="fsv-ml__lang-name">French</span></div>
                  <div class="fsv-ml__lang"><span>🇩🇪</span><span class="fsv-ml__lang-name">German</span></div>
                  <div class="fsv-ml__lang"><span>🇯🇵</span><span class="fsv-ml__lang-name">Japanese</span></div>
                </div>
              </div>

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
import wifiOffIcon from '~/assets/svg/feature-icons/wifi-off.svg?raw'
import activityIcon from '~/assets/svg/feature-icons/activity.svg?raw'
import bellRingIcon from '~/assets/svg/feature-icons/bell-ring.svg?raw'
import layersIcon from '~/assets/svg/feature-icons/layers.svg?raw'
import languagesIcon from '~/assets/svg/feature-icons/languages.svg?raw'

const SVG_ICONS = {
  users:              usersIcon,
  slidersHorizontal:  slidersHorizontalIcon,
  globe:              globeIcon,
  palette:            paletteIcon,
  penTool:            penToolIcon,
  fileText:           fileTextIcon,
  wifiOff:            wifiOffIcon,
  activity:           activityIcon,
  bellRing:           bellRingIcon,
  layers:             layersIcon,
  languages:          languagesIcon,
}

const TABS = [
  { id: 'collaboration',   label: 'Collaboration' },
  { id: 'whitelabel',      label: 'White Label' },
  { id: 'generate-pdf',    label: 'Generate PDF' },
  { id: 'data-protection', label: 'Offline Mode' },
  { id: 'automations',     label: 'Automations' },
  { id: 'multi-language',  label: 'Multi Language' },
]

const CONTENT_DATA = {
  'collaboration': {
    href: '/features/collaborative-forms/',
    title: 'Invite team members to build and manage forms together.',
    desc: 'Work in real-time with your team. Avoid back-and-forth emails and ensure everyone is on the same page.',
    badge: 'Real-time sync',
    features: [
      { iconKey: 'users',            title: 'Co-authoring',    desc: 'Let multiple people fill the same form at once.' },
      { iconKey: 'slidersHorizontal', title: 'Granular Control', desc: 'Manage access using permissions at the field and form levels.' },
    ],
    theme: {
      bg:        'linear-gradient(135deg, #fff7ed, #fffbeb, #ffedd5)',
      iconBg:    '#fff7ed',
      iconColor: '#f97316',
      pillBg:    '#f57422',
      blob1:     'rgba(254,215,170,0.4)',
      blob2:     'rgba(253,230,138,0.4)',
    },
  },
  'whitelabel': {
    href: '/features/branding-kit/',
    title: 'Match forms to your brand with full design control.',
    desc: 'Remove all our branding and make the forms feel completely native to your application or website.',
    badge: 'Custom Branding',
    features: [
      { iconKey: 'globe',   title: 'Custom Domains', desc: 'Use your own domain and custom form links.' },
      { iconKey: 'palette', title: 'Brand Identity',  desc: 'Build trust with branded, seamless user experience.' },
    ],
    theme: {
      bg:        'linear-gradient(135deg, #eff6ff, #eef2ff, #dbeafe)',
      iconBg:    '#eff6ff',
      iconColor: '#3b82f6',
      pillBg:    '#2563eb',
      blob1:     'rgba(191,219,254,0.4)',
      blob2:     'rgba(199,210,254,0.4)',
    },
  },
  'generate-pdf': {
    href: '/features/export-form-submission-pdf/',
    title: 'Turn responses into ready-to-use downloadable PDFs.',
    desc: 'Automatically generate professional documents, invoices, or contracts the moment a form is submitted.',
    badge: 'Auto-Generation',
    features: [
      { iconKey: 'penTool',  title: 'Custom Layouts',  desc: 'Design custom layouts for invoices or agreements.' },
      { iconKey: 'fileText', title: 'Zero Formatting', desc: 'No formatting needed, everything auto-generated.' },
    ],
    theme: {
      bg:        'linear-gradient(135deg, #faf5ff, #fdf4ff, #f3e8ff)',
      iconBg:    '#faf5ff',
      iconColor: '#a855f7',
      pillBg:    '#9333ea',
      blob1:     'rgba(240,171,252,0.4)',
      blob2:     'rgba(221,214,254,0.4)',
    },
  },
  'data-protection': {
    href: '/features/offline-forms/',
    title: 'Let users save and finish forms across any device.',
    desc: "Don't lose form submissions due to bad connections. Allow users to complete forms on their own schedule.",
    badge: 'Offline Support',
    features: [
      { iconKey: 'wifiOff',  title: 'Offline Sync',   desc: 'Fill forms offline and sync when back online.' },
      { iconKey: 'activity', title: 'Save Progress',  desc: 'Prevent drop-offs with seamless resume options.' },
    ],
    theme: {
      bg:        'linear-gradient(135deg, #ecfdf5, #f0fdfa, #d1fae5)',
      iconBg:    '#205e45',
      iconColor: '#ffffff',
      pillBg:    '#098851',
      blob1:     'rgba(153,246,228,0.4)',
      blob2:     'rgba(167,243,208,0.4)',
    },
  },
  'automations': {
    href: '/features/autoresponder-email/',
    title: 'Send auto-confirmation and follow-up emails.',
    desc: 'Put your communication on autopilot. Ensure every customer gets a timely response without manual effort.',
    badge: 'Workflow Automation',
    features: [
      { iconKey: 'bellRing', title: 'Smart Routing',     desc: 'Get alerts and route responses to your team.' },
      { iconKey: 'layers',   title: 'Deep Integrations', desc: 'Connect with CRMs, Slack, and 1000+ other tools.' },
    ],
    theme: {
      bg:        'linear-gradient(135deg, #fff1f2, #fdf2f8, #eef2ff)',
      iconBg:    '#fff1f2',
      iconColor: '#f43f5e',
      pillBg:    '#f43f5e',
      blob1:     'rgba(251,207,232,0.4)',
      blob2:     'rgba(199,210,254,0.4)',
    },
  },
  'multi-language': {
    href: '/features/multi-language-form-translations/',
    title: 'Add multiple languages to reach global users',
    desc: 'Break language barriers and expand your market reach by offering fully localized form experiences.',
    badge: 'Localization',
    features: [
      { iconKey: 'languages', title: 'AI Translation', desc: 'Translate forms instantly using AI.' },
      { iconKey: 'globe',     title: 'Accessibility',  desc: 'Make your forms accessible to everyone.' },
    ],
    theme: {
      bg:        'linear-gradient(135deg, #f5f3ff, #faf5ff, #fdf4ff)',
      iconBg:    '#f5f3ff',
      iconColor: '#8b5cf6',
      pillBg:    '#7c3aed',
      blob1:     'rgba(196,181,253,0.4)',
      blob2:     'rgba(240,171,252,0.4)',
    },
  },
}

const activeTab = ref('collaboration')
</script>

<style scoped>
/* ── Shared keyframes ──────────────────────────────────────── */
@keyframes cursor-robin {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(20px, 15px); }
}
@keyframes cursor-alex {
  0%, 100% { transform: translate(20px, 0); }
  50%       { transform: translate(-10px, -20px); }
}
@keyframes chevron-bounce {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(5px); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slide-from-left {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slide-from-right {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes bg-card-in {
  from { opacity: 0; transform: translate(4px, -4px) rotate(-2deg); }
  to   { opacity: 1; transform: translate(-16px, -24px) rotate(-2deg); }
}
@keyframes fg-card-in {
  from { opacity: 0; transform: translate(-4px, 4px); }
  to   { opacity: 1; transform: translate(16px, 24px); }
}

/* ── Tab visibility ────────────────────────────────────────── */
.fs__card--hidden  { display: none !important; }
.fs__card--visible { animation: tab-card-in 0.25s ease both; }

@keyframes tab-card-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Section ───────────────────────────────────────────────── */
.fs {
  position: relative;
  overflow: hidden;
}

.fs__container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: var(--space-6) 0;
}
@media (min-width: 640px)  { .fs__container { padding: var(--space-6); } }
@media (min-width: 1024px) { .fs__container { padding: var(--space-8); } }

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
  margin: 0 calc(-1 * var(--space-4)) var(--space-5);
}
.fs__tabs::-webkit-scrollbar { display: none; }
@media (min-width: 640px) {
  .fs__tabs {
    margin: 0 calc(-1 * var(--space-6)) var(--space-5);
    padding: 0 var(--space-6) var(--space-2);
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
.fs__pill:hover:not(.fs__pill--active) { background: var(--bg-grey-50); }
.fs__pill--active { box-shadow: var(--shadow-sm); }

/* ── Feature card ──────────────────────────────────────────── */
.fs__card {
  background: var(--bg-primary);
  border-radius: var(--r-3xl);
  overflow: hidden;
  box-shadow: 0 20px 50px -12px rgba(0,0,0,0.08);
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
}
@media (min-width: 1024px) { .fs__card { flex-direction: row; } }

/* ── Content (left) ────────────────────────────────────────── */
.fs__content {
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
}
@media (min-width: 640px)  { .fs__content { padding: var(--space-8); } }
@media (min-width: 1024px) { .fs__content { padding: var(--space-12); order: 1; } }

.fs__badge {
  display: none;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.07em;
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}
@media (min-width: 1024px) { .fs__badge { display: inline-block; } }

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
@media (min-width: 1024px) { .fs__desc { display: block; } }

.fs__features {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}
@media (min-width: 1024px) { .fs__features { gap: var(--space-6); } }

.fs__feature {
  display: flex;
  gap: var(--space-4);
  align-items: center;
}
@media (min-width: 768px) { .fs__feature { align-items: flex-start; } }

.fs__feature-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: var(--r-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  box-shadow: 0 0 0 4px rgba(0,0,0,0.04), var(--shadow-xs);
}
@media (min-width: 768px) { .fs__feature-icon { width: 40px; height: 40px; } }

.fs__icon-svg { display: flex; align-items: center; }
.fs__icon-svg :deep(svg) { width: 16px; height: 16px; }
@media (min-width: 768px) { .fs__icon-svg :deep(svg) { width: 20px; height: 20px; } }

.fs__feature-body { flex: 1; min-width: 0; }

.fs__feature-title {
  display: none;
  font-size: 15px;
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  margin: 0 0 4px;
}
@media (min-width: 768px) { .fs__feature-title { display: block; } }

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
.fs__explore:hover { opacity: 0.75; }
.fs__explore:hover .fs__chevron { transform: translateX(4px); }

.fs__chevron { transition: transform 200ms ease; flex-shrink: 0; }

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
@media (min-width: 640px)  { .fs__visual { height: auto; min-height: 380px; } }
@media (min-width: 1024px) { .fs__visual { min-height: 460px; order: 2; } }

.fs__blob {
  position: absolute;
  width: 256px;
  height: 256px;
  border-radius: var(--r-full);
  filter: blur(48px);
  pointer-events: none;
}
.fs__blob--1 { top: 0; right: 0; transform: translate(50%, -50%); }
.fs__blob--2 { bottom: 0; left: 0; transform: translate(-25%, 50%); }

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
@media (min-width: 640px)  { .fs__visual-inner { transform: scale(1); } }

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
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.03);
  border: 1px solid rgba(254,215,170,0.5);
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
  border: 1px solid rgba(254,215,170,0.5);
  box-shadow: var(--shadow-xs);
}
.fsv-collab__field--full  { flex: none; width: 100%; margin-bottom: var(--space-4); }
.fsv-collab__field--tall  { flex: none; width: 100%; height: 80px; }

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
.fsv-collab__label--blue { background: #3b82f6; }
.fsv-collab__label--pink { background: #ec4899; }


/* ─────────────────────────────────────────────────────────── */
/* Visual: Generate PDF                                        */
/* ─────────────────────────────────────────────────────────── */
.fsv-pdf {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
}
.fsv-pdf__form {
  width: 144px;
  height: 224px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(4px);
  border-radius: var(--r-xl);
  border: 1px solid rgba(216,180,254,0.4);
  box-shadow: var(--shadow-xs);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  z-index: 1;
  animation: slide-from-left 0.4s ease both;
}
.fsv-pdf__form-header {
  height: 12px;
  width: 50%;
  background: #ddd6fe;
  border-radius: var(--r);
  margin-bottom: var(--space-3);
}
.fsv-pdf__form-field {
  height: 24px;
  background: var(--bg-grey-50);
  border-radius: var(--r);
  border: 1px solid var(--border-light);
  margin-bottom: var(--space-2);
  flex: 1;
}
.fsv-pdf__form-btn {
  height: 24px;
  background: #a855f7;
  border-radius: var(--r);
  margin-top: var(--space-2);
  flex-shrink: 0;
}
.fsv-pdf__arrow {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.fsv-pdf__chevron { animation: chevron-bounce 1.5s ease-in-out infinite; }

.fsv-pdf__doc {
  width: 144px;
  height: 224px;
  background: var(--bg-primary);
  border-radius: var(--r-xl);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-md);
  padding: var(--space-4);
  position: relative;
  z-index: 1;
  animation: slide-from-right 0.4s 0.1s ease both;
}
.fsv-pdf__doc-corner {
  position: absolute;
  top: 0; right: 0;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-top-right-radius: var(--r-xl);
}
.fsv-pdf__doc-corner::after {
  content: '';
  position: absolute;
  top: -10px; right: -10px;
  width: 40px; height: 40px;
  background: #f3e8ff;
  transform: rotate(45deg);
  border-bottom: 1px solid #e9d5ff;
  border-left: 1px solid #e9d5ff;
}
.fsv-pdf__doc-title {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin-bottom: var(--space-2);
  margin-top: var(--space-2);
}
.fsv-pdf__doc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}
.fsv-pdf__doc-label { width: 40px; height: 8px; background: var(--gray-200); border-radius: var(--r); }
.fsv-pdf__doc-value { width: 32px; height: 8px; background: var(--fg-1); border-radius: var(--r); }
.fsv-pdf__doc-divider {
  width: 100%;
  height: 1px;
  background: var(--border-light);
  margin-bottom: var(--space-2);
}
.fsv-pdf__doc-line {
  height: 8px;
  background: var(--bg-grey-100);
  border-radius: var(--r);
  margin-bottom: var(--space-2);
}
.fsv-pdf__doc-line--short { width: 80%; }

/* ─────────────────────────────────────────────────────────── */
/* Visual: Data Protection                                     */
/* ─────────────────────────────────────────────────────────── */
.fsv-dp {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  background: rgba(236,253,245,0.5);
  border-radius: var(--r-2xl);
  padding: var(--space-6);
  border: 1px solid rgba(167,243,208,0.4);
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.02);
}
.fsv-dp__offline-bar {
  position: absolute;
  top: 16px; left: 16px; right: 16px;
  background: #111827;
  color: var(--bg-primary);
  border-radius: var(--r-lg);
  padding: 10px var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
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
  border: 1px solid rgba(236,253,245,0.6);
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
.fsv-dp__form-field--tall { height: 64px; }
.fsv-dp__sync-pill {
  position: absolute;
  bottom: 24px;
  left: var(--space-4);
  right: var(--space-4);
  background: var(--bg-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--r-full);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
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

/* ─────────────────────────────────────────────────────────── */
/* Visual: Automations                                         */
/* ─────────────────────────────────────────────────────────── */
.fsv-auto {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fsv-auto__bg-card {
  position: absolute;
  inset: 8px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: var(--r-2xl);
  padding: var(--space-6);
  box-shadow: 0 8px 24px rgba(236,72,153,0.05);
  transform: translate(-16px, -24px) rotate(-2deg);
  z-index: 0;
  animation: bg-card-in 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both;
}
.fsv-auto__bg-header {
  height: 16px;
  width: 50%;
  background: rgba(229,231,235,0.8);
  border-radius: var(--r-full);
  margin-bottom: var(--space-6);
}
.fsv-auto__bg-avatar-row {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  margin-bottom: var(--space-6);
}
.fsv-auto__bg-avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--r-full);
  background: linear-gradient(135deg, #fb923c, #f43f5e);
  flex-shrink: 0;
}
.fsv-auto__bg-lines { flex: 1; display: flex; flex-direction: column; gap: var(--space-2); }
.fsv-auto__bg-line {
  height: 10px;
  background: rgba(229,231,235,0.8);
  border-radius: var(--r-full);
}
.fsv-auto__bg-line--short  { width: 33%; }
.fsv-auto__bg-line--med    { width: 91%; }
.fsv-auto__bg-line--short2 { width: 80%; }

.fsv-auto__fg-card {
  position: relative;
  width: 90%;
  background: var(--bg-primary);
  border-radius: var(--r-2xl);
  padding: var(--space-6);
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
  border: 1px solid var(--border-light);
  z-index: 1;
  transform: translate(16px, 24px);
  animation: fg-card-in 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both;
}
.fsv-auto__fg-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
}
.fsv-auto__fg-title {
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  font-size: 15px;
}
.fsv-auto__toggle {
  width: 32px;
  height: 16px;
  background: #e0e7ff;
  border-radius: var(--r-full);
  position: relative;
  flex-shrink: 0;
}
.fsv-auto__toggle-dot {
  position: absolute;
  right: 2px;
  top: 2px;
  width: 12px;
  height: 12px;
  background: #6366f1;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-xs);
}
.fsv-auto__tabs-row {
  display: flex;
  gap: var(--space-4);
  border-bottom: 1px solid var(--border-light);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-2);
}
.fsv-auto__tab-link {
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-muted);
  padding-bottom: var(--space-2);
  cursor: default;
}
.fsv-auto__tab-link--active {
  color: #4f46e5;
  font-weight: var(--fw-semibold);
  border-bottom: 2px solid #4f46e5;
  margin-bottom: -10px;
}
.fsv-auto__field { margin-bottom: var(--space-4); }
.fsv-auto__label {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  color: var(--fg-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: block;
  margin-bottom: 6px;
}
.fsv-auto__input {
  border: 1px solid var(--border-medium);
  border-radius: var(--r-lg);
  padding: var(--space-2) var(--space-3);
  font-size: var(--fs-sm);
  color: var(--fg-strong);
  background: rgba(249,250,251,0.5);
}

/* ─────────────────────────────────────────────────────────── */
/* Visual: Multi Language                                      */
/* ─────────────────────────────────────────────────────────── */
.fsv-ml {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fsv-ml__form-card {
  position: absolute;
  inset: 8px;
  background: var(--bg-primary);
  border-radius: var(--r-2xl);
  border: 1px solid #ede9fe;
  box-shadow: var(--shadow-xs);
  padding: var(--space-6);
}
.fsv-ml__form-header {
  height: 20px;
  width: 50%;
  background: #ede9fe;
  border-radius: var(--r);
  margin-bottom: var(--space-6);
}
.fsv-ml__form-field {
  height: 40px;
  background: var(--bg-grey-50);
  border-radius: var(--r);
  border: 1px solid var(--border-light);
  margin-bottom: var(--space-4);
}
.fsv-ml__dropdown {
  position: absolute;
  top: 32px;
  right: -16px;
  background: var(--bg-primary);
  border-radius: var(--r-xl);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
  border: 1px solid var(--border-light);
  padding: var(--space-2);
  width: 192px;
  z-index: 1;
  animation: slide-up 0.4s 0.2s ease both;
}
.fsv-ml__dropdown-title {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  color: var(--fg-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: var(--space-1) var(--space-2) var(--space-2);
  margin-top: var(--space-1);
}
.fsv-ml__lang {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--r);
  cursor: default;
  color: var(--fg-3);
  font-size: var(--fs-xs);
  transition: background 150ms;
}
.fsv-ml__lang:hover:not(.fsv-ml__lang--active) { background: var(--bg-grey-50); }
.fsv-ml__lang--active {
  background: #f5f3ff;
  color: #7c3aed;
  justify-content: space-between;
}
.fsv-ml__lang-name { font-weight: var(--fw-medium); flex: 1; }
.fsv-ml__lang-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--r-full);
  background: #7c3aed;
  flex-shrink: 0;
}
</style>
