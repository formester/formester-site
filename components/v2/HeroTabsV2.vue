<template>
  <div class="htv2-wrap">
    <div class="htv2-inner">

      <!-- Tab bar -->
      <div class="htv2-tabs">
        <button
          v-for="(tab, idx) in tabs"
          :key="tab.label"
          class="htv2-tab-btn"
          :class="idx === selectedTab ? 'htv2-tab-btn--active' : 'htv2-tab-btn--inactive'"
          :style="tabButtonStyle(idx)"
          @click="() => { selectedTab = idx; stopAutoSwitch(); }"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Panel -->
      <div class="htv2-panel">
        <!-- All tabs in DOM for SEO, shown/hidden via CSS -->
        <div
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="htv2-content"
          :class="idx === selectedTab ? 'htv2-content--active' : 'htv2-content--inactive'"
        >
          <!-- Text column -->
          <div class="htv2-text">
            <h3 class="htv2-title">{{ tab.title }}</h3>
            <ul class="htv2-features">
              <li
                v-for="(feature, i) in tab.features"
                :key="i"
                class="htv2-feature"
              >
                <span v-if="feature.icon?.src" class="htv2-feature-icon">
                  <img
                    :src="feature.icon.src"
                    :alt="feature.text + ' icon'"
                    :width="feature.icon.width || 20"
                    :height="feature.icon.height || 20"
                    loading="lazy"
                  />
                </span>
                {{ feature.text }}
              </li>
            </ul>
          </div>

          <!-- Image column -->
          <div v-if="tab.image?.src" class="htv2-img-col">
            <img
              :src="tab.image.src"
              :alt="tab.label + ' screenshot'"
              class="htv2-img"
              :loading="idx === 0 ? 'eager' : 'lazy'"
              :width="tab.image.width || 480"
              :height="tab.image.height || 360"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getStrapiImage } from '@/utils/strapiImage'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const borderColors = [
  '#FF9100',
  '#2F80ED',
  '#6C47FF',
  '#00B87C',
  '#FF5A5F',
  '#3F2AFF',
]

const fallbackImageDims = { width: 1200, height: 800 }
const fallbackIconDims = { width: 20, height: 20 }

const wrapStaticImage = (src, dims) => ({ src, width: dims.width, height: dims.height })

const fallbackTabs = [
  {
    label: 'Forms',
    title: 'Launch High-Converting Forms in Seconds',
    features: [
      { text: 'Get cleaner data with built-in email & field validation.', icon: '/hero-assets/features/forms/1.svg' },
      { text: 'Let users upload files, book meetings, and e-sign instantly.', icon: '/hero-assets/features/forms/2.svg' },
      { text: 'Spot drop-offs and improve performance with smart analytics.', icon: '/hero-assets/features/forms/3.svg' },
    ],
    image: '/hero-assets/features/forms/Forms.png',
  },
  {
    label: 'Payments',
    title: 'Accept payments directly in your form',
    features: [
      { text: 'Process one-time fees, recurring subscriptions & donations.', icon: '/hero-assets/features/payments/1.svg' },
      { text: 'Handle event tickets, product orders, and memberships.', icon: '/hero-assets/features/payments/2.svg' },
      { text: 'Connect Stripe or PayPal, offer discounts or free trials.', icon: '/hero-assets/features/payments/3.svg' },
    ],
    image: '/hero-assets/features/payments/Payments.png',
  },
  {
    label: 'Collaboration',
    title: 'Work together without the chaos',
    features: [
      { text: "Co-create forms without overwriting each other's work.", icon: '/hero-assets/features/collaboration/1.svg' },
      { text: 'Set precise access controls: who can view, edit, or submit.', icon: '/hero-assets/features/collaboration/2.svg' },
      { text: 'Co-submit a single form as a team in real time.', icon: '/hero-assets/features/collaboration/3.svg' },
    ],
    image: '/hero-assets/features/collaboration/Collaboration.png',
  },
  {
    label: 'Custom PDFs',
    title: 'Turn form entries into branded PDFs',
    features: [
      { text: 'Automatically generate polished, fillable PDFs from responses.', icon: '/hero-assets/features/custom-pdfs/1.svg' },
      { text: 'Auto-send personalized PDFs as email attachments.', icon: '/hero-assets/features/custom-pdfs/2.svg' },
    ],
    image: '/hero-assets/features/custom-pdfs/CustomPDFs.png',
  },
  {
    label: 'Automations',
    title: 'Save time with powerful automations',
    features: [
      { text: 'Send confirmation emails, alerts, or updates without lifting a finger.', icon: '/hero-assets/features/automations/1.svg' },
      { text: 'Instantly sync responses to CRMs, spreadsheets, or databases.', icon: '/hero-assets/features/automations/2.svg' },
      { text: 'Connect with 1,000+ tools like Slack, HubSpot, Notion & more.', icon: '/hero-assets/features/automations/3.svg' },
    ],
    image: '/hero-assets/features/automations/Automations.png',
  },
  {
    label: 'AI Native',
    title: 'Let AI build and customize forms for you',
    features: [
      { text: 'Create complete forms in seconds using AI.', icon: '/hero-assets/features/ai-native/1.svg' },
      { text: 'Add logic branching to your forms without manual work.', icon: '/hero-assets/features/ai-native/2.svg' },
      { text: 'Reach a global audience with AI-powered multilingual forms.', icon: '/hero-assets/features/ai-native/3.svg' },
    ],
    image: '/hero-assets/features/ai-native/AINative.png',
  },
]

const tabs = computed(() => {
  if (!props.data?.tabCardContent || props.data.tabCardContent.length === 0) {
    return fallbackTabs.map(tab => ({
      ...tab,
      features: tab.features.map(f => ({ ...f, icon: wrapStaticImage(f.icon, fallbackIconDims) })),
      image: wrapStaticImage(tab.image, fallbackImageDims),
    }))
  }

  return props.data.tabCardContent.map(tab => ({
    label: tab.navTitle,
    title: tab.title,
    features: tab.feature?.map(feature => ({
      text: feature.featureTitle,
      icon: getStrapiImage(feature.icon, { width: fallbackIconDims.width, height: fallbackIconDims.height }),
    })) || [],
    image: getStrapiImage(tab.image, { width: fallbackImageDims.width, height: fallbackImageDims.height }),
  }))
})

const selectedTab = ref(0)

let intervalId = null

function stopAutoSwitch() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  intervalId = setInterval(() => {
    if (tabs.value.length > 0) {
      selectedTab.value = (selectedTab.value + 1) % tabs.value.length
    }
  }, 7000)
})

onUnmounted(() => {
  stopAutoSwitch()
})

function tabButtonStyle(idx) {
  if (typeof window !== 'undefined' && window.innerWidth < 900) {
    if (idx === selectedTab.value) {
      return { background: borderColors[idx], color: '#fff', borderBottom: 'none' }
    }
    return { background: '#fff', color: 'var(--fg-1)', borderBottom: 'none' }
  }
  return idx === selectedTab.value
    ? { borderBottom: `4px solid ${borderColors[idx]}` }
    : {}
}
</script>

<style scoped>
.htv2-wrap {
  max-width: 1280px;
  width: 100%;
  font-family: var(--font-primary);
}

.htv2-inner {
  width: 100%;
}

/* Tab bar */
.htv2-tabs {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-inline: var(--space-8);
  position: relative;
  z-index: 2;
}

/* Tab buttons */
.htv2-tab-btn {
  background: transparent;
  border: none;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  transition: color 200ms, border-color 200ms, opacity 200ms;
  padding-bottom: var(--space-4);
}

.htv2-tab-btn--active {
  color: var(--fg-1);
  font-weight: var(--fw-bold);
  opacity: 1;
}

.htv2-tab-btn--inactive {
  color: var(--fg-3);
  opacity: 0.85;
}

/* Panel */
.htv2-panel {
  margin-top: -2px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--gray-200);
  border-radius: var(--r-3xl);
  box-shadow: var(--shadow-md);
  padding: var(--space-10) var(--space-9);
  position: relative;
  z-index: 1;
  min-height: 520px;
}

/* Tab content */
.htv2-content {
  display: flex;
  gap: var(--space-16);
  align-items: flex-start;
  position: absolute;
  top: var(--space-10);
  left: var(--space-9);
  right: var(--space-9);
  bottom: var(--space-10);
  transition: opacity 450ms ease-in-out, visibility 450ms ease-in-out;
  pointer-events: none;
}

.htv2-content--active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.htv2-content--inactive {
  opacity: 0;
  visibility: hidden;
}

/* Text column */
.htv2-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.htv2-title {
  margin-bottom: var(--space-6);
  color: var(--fg-1);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
}

.htv2-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.htv2-feature {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
  color: var(--fg-2);
  font-size: var(--fs-lg);
}

.htv2-feature-icon {
  display: inline-flex;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Image column */
.htv2-img-col {
  flex: 2 1 0;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 260px;
}

.htv2-img {
  width: 100%;
  min-width: 0;
  height: auto;
  display: block;
  border-radius: var(--r-2xl);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.09);
  object-fit: contain;
}

/* ── Tablet (max 900px) ── */
@media (max-width: 900px) {
  .htv2-tabs {
    flex-wrap: wrap;
    justify-content: center;
    column-gap: var(--space-4);
    row-gap: var(--space-3);
    padding-inline: 0;
    margin-bottom: var(--space-4);
  }

  .htv2-tab-btn {
    flex: 0 1 auto;
    min-width: 120px;
    border-radius: var(--r-xl);
    box-shadow: var(--shadow-xs);
    font-size: var(--fs-sm);
    padding: var(--space-2) var(--space-4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    border-bottom: none !important;
  }

  .htv2-panel {
    padding: var(--space-8) var(--space-4);
    min-height: 500px !important;
  }

  .htv2-content {
    flex-direction: column;
    gap: var(--space-8);
    top: var(--space-8);
    left: var(--space-4);
    right: var(--space-4);
    bottom: var(--space-8);
  }

  .htv2-title {
    font-size: var(--fs-xl);
    line-height: 125%;
  }

  .htv2-feature {
    font-size: var(--fs-md);
    line-height: var(--lh-md);
  }

  .htv2-img-col {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto !important;
    overflow: hidden;
  }

  .htv2-img {
    max-width: 100%;
    max-height: 220px;
    width: auto;
    margin: 0;
  }
}

/* ── Mobile (max 600px) ── */
@media (max-width: 600px) {
  .htv2-panel {
    padding: var(--space-5);
    border-radius: var(--r-2xl);
    min-height: 500px !important;
  }

  .htv2-content {
    gap: var(--space-5);
    top: var(--space-5);
    left: var(--space-5);
    right: var(--space-5);
    bottom: var(--space-5);
  }

  .htv2-title {
    font-size: var(--fs-lg);
  }

  .htv2-feature {
    font-size: var(--fs-sm);
    line-height: var(--lh-md);
  }

  .htv2-img {
    max-width: 98vw;
    max-height: 220px;
  }
}
</style>
