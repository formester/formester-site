<template>
  <div class="max-w-[1280px] w-full font-primary">
    <div class="w-full">
      <div class="flex justify-between w-full px-space-8 relative z-[2] tab-md:flex-wrap tab-md:justify-center tab-md:gap-x-space-4 tab-md:gap-y-space-3 tab-md:px-0 tab-md:mb-space-4">
        <button
          v-for="(tab, idx) in tabs"
          :key="tab.label"
          :class="[
            'bg-transparent border-none cursor-pointer border-b-4 border-b-transparent flex-1 text-center text-fs-xl font-semibold transition-[color,border-color,opacity] duration-200 pb-space-4',
            'tab-md:flex-[0_1_auto] tab-md:min-w-[120px] tab-md:rounded-r-xl tab-md:shadow-xs tab-md:text-fs-sm tab-md:py-space-2 tab-md:px-space-4 tab-md:flex tab-md:items-center tab-md:justify-center tab-md:gap-space-2 tab-md:!border-b-0',
            idx === selectedTab
              ? 'text-fg-1 font-bold opacity-100'
              : 'text-fg-3 opacity-[0.85]',
          ]"
          @click="() => { selectedTab = idx; stopAutoSwitch(); }"
          :style="tabButtonStyle(idx)"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="-mt-[2px] bg-white/70 backdrop-blur-lg border border-gray-200 rounded-r-3xl shadow-md py-space-10 px-space-9 relative z-[1] !min-h-[520px] tab-md:py-space-8 tab-md:px-space-4 tab-md:!min-h-[500px] tab-sm:p-space-5 tab-sm:rounded-r-2xl tab-sm:!min-h-[500px]">
        <!-- Render all tabs in DOM for SEO, use CSS to show/hide -->
        <div
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="[
            'flex gap-space-16 items-start absolute top-space-10 left-space-9 right-space-9 bottom-space-10 transition-[opacity,visibility] duration-[450ms] ease-in-out pointer-events-none',
            'tab-md:flex-col tab-md:gap-space-8 tab-md:top-space-8 tab-md:left-space-4 tab-md:right-space-4 tab-md:bottom-space-8',
            'tab-sm:gap-space-5 tab-sm:top-space-5 tab-sm:left-space-5 tab-sm:right-space-5 tab-sm:bottom-space-5',
            idx === selectedTab
              ? 'opacity-100 visible pointer-events-auto'
              : 'opacity-0 invisible',
          ]"
        >
          <div class="flex-1 min-w-0 flex flex-col justify-center">
            <h3 class="mb-space-6 text-fg-1 text-fs-2xl font-semibold tab-md:text-fs-xl tab-md:leading-[125%] tab-sm:text-fs-lg">
              {{ tab.title }}
            </h3>
            <ul class="list-none p-0 m-0">
              <li
                v-for="(feature, i) in tab.features"
                :key="i"
                class="flex items-start gap-space-2 mb-space-4 text-fg-2 text-fs-lg tab-md:text-fs-md tab-md:leading-lh-md tab-sm:text-fs-sm tab-sm:leading-lh-md"
              >
                <span class="inline-flex mt-[2px] shrink-0" v-if="feature.icon?.src">
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

          <div
            v-if="tab.image?.src"
            class="flex-[2_1_0] min-w-0 flex justify-center items-center h-full min-h-[260px] tab-md:justify-start tab-md:items-start tab-md:w-full tab-md:!h-auto tab-md:overflow-hidden"
          >
            <img
              :src="tab.image.src"
              :alt="tab.label + ' screenshot'"
              class="w-full min-w-0 h-auto block rounded-r-2xl shadow-[0_2px_12px_rgba(0,0,0,0.09)] object-contain tab-md:max-w-full tab-md:max-h-[220px] tab-md:w-auto tab-md:m-0 tab-sm:max-w-[98vw] tab-sm:max-h-[220px]"
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
