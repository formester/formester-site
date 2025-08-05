<template>
  <div class="hero-tabs-container">
    <div class="hero-tabs">
      <div class="tab-list">
        <button
          v-for="(tab, idx) in tabs"
          :key="tab.label"
          :class="['tab', { active: idx === selectedTab }]"
          @click="() => { selectedTab = idx; stopAutoSwitch(); }"
          :style="tabButtonStyle(idx)"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <transition name="tab-left-fade-slide" mode="out-in">
          <div class="tab-left" :key="selectedTab + '-left'">
            <h2 class="tab-title">{{ currentTab.title }}</h2>
            <ul class="tab-features">
              <li v-for="(feature, i) in currentTab.features" :key="i">
                <span class="feature-icon">
                  <img
                    :src="feature.icon"
                    :alt="feature.text + ' icon'"
                    class="feature-icon"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                </span>
                {{ feature.text }}
              </li>
            </ul>
          </div>
        </transition>
        <transition name="tab-right-fade-slide" mode="out-in">
          <div class="tab-right" :key="selectedTab + '-right'">
            <img
              :src="currentTab.image"
              :alt="currentTab.label + ' screenshot'"
              class="tab-image"
              :key="currentTab.image"
              loading="eager"
              width="480"
              
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Define props to receive Strapi data
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const borderColors = [
  '#FF9100', // Forms (orange)
  '#2F80ED', // Scheduling (blue)
  '#6C47FF', // PDF (purple)
  '#00B87C', // Payments (green)
  '#FF5A5F', // Workflows (red)
  '#3F2AFF', // Signature (indigo)
]


const getImageUrl = (imageObj) => {
  if (!imageObj) return null
  
  if (imageObj.imageUrl) return imageObj.imageUrl
  
  if (imageObj.image?.url) return imageObj.image.url
  
  return null
}

const fallbackTabs = [
{
    label: 'Forms',
    title: 'Launch High-Converting Forms in Seconds',
    features: [
      {
        text: 'Get cleaner data with built-in email & field validation.',
        icon: '/hero-assets/features/forms/1.svg',
      },
      {
        text: 'Let users upload files, book meetings, and e-sign instantly.',
        icon: '/hero-assets/features/forms/2.svg',
      },
      {
        text: 'Spot drop-offs and improve performance with smart analytics.',
        icon: '/hero-assets/features/forms/3.svg',
      },
    ],
    image: '/hero-assets/features/forms/Forms.png',
  },
  {
    label: 'Payments',
    title: 'Accept payments directly in your form',
    features: [
      {
        text: 'Process one-time fees, recurring subscriptions & donations.',
        icon: '/hero-assets/features/payments/1.svg',
      },
      {
        text: 'Handle event tickets, product orders, and memberships.',
        icon: '/hero-assets/features/payments/2.svg',
      },
      {
        text: 'Connect Stripe or PayPal, offer discounts or free trials.',
        icon: '/hero-assets/features/payments/3.svg',
      }
    ],
    image: '/hero-assets/features/payments/Payments.png',
  },
  {
    label: 'Collaboration',
    title: 'Work together without the chaos',
    features: [
      {
        text: 'Co-create forms without overwriting each other’s work.',
        icon: '/hero-assets/features/collaboration/1.svg',
      },
      {
        text: 'Set precise access controls: who can view, edit, or submit.',
        icon: '/hero-assets/features/collaboration/2.svg',
      },
      {
        text: 'Co-submit a single form as a team in real time.',
        icon: '/hero-assets/features/collaboration/3.svg',
      },
    ],
    image: '/hero-assets/features/collaboration/Collaboration.png',
  },
  {
    label: 'Custom PDFs',
    title: 'Turn form entries into branded PDFs',
    features: [
      {
        text: 'Automatically generate polished, fillable PDFs from responses.',
        icon: '/hero-assets/features/custom-pdfs/1.svg',
      },
      {
        text: 'Auto-send personalized PDFs as email attachments.',
        icon: '/hero-assets/features/custom-pdfs/2.svg',
      },
    ],
    image: '/hero-assets/features/custom-pdfs/CustomPDFs.png',
  },
  {
    label: 'Automations',
    title: 'Save time with powerful automations',
    features: [
      {
        text: 'Send confirmation emails, alerts, or updates without lifting a finger.',
        icon: '/hero-assets/features/automations/1.svg',
      },
      {
        text: 'Instantly sync responses to CRMs, spreadsheets, or databases.',
        icon: '/hero-assets/features/automations/2.svg',
      },
      {
        text: 'Connect with 1,000+ tools like Slack, HubSpot, Notion & more.',
        icon: '/hero-assets/features/automations/3.svg',
      },
    ],
    image: '/hero-assets/features/automations/Automations.png',
  },
  {
    label: 'AI Native',
    title: 'Let AI build and customize forms for you',
    features: [
      {
        text: 'Create complete forms in seconds using AI.',
        icon: '/hero-assets/features/ai-native/1.svg',
      },
      {
        text: 'Add logic branching to your forms without manual work.',
        icon: '/hero-assets/features/ai-native/2.svg',
      },
      {
        text: 'Reach a global audience with AI-powered multilingual forms.',
        icon: '/hero-assets/features/ai-native/3.svg',
      },
    ],
    image: '/hero-assets/features/ai-native/AINative.png',
  },
]


const tabs = computed(() => {
  if (!props.data?.tabCardContent || props.data.tabCardContent.length === 0) {
    return fallbackTabs
  }
  
  return props.data.tabCardContent.map(tab => ({
    label: tab.navTitle,
    title: tab.title,
    features: tab.feature?.map(feature => ({
      text: feature.featureTitle,
      icon: getImageUrl(feature.icon)
    })) || [],
    image: getImageUrl(tab.image)
  }))
})

const selectedTab = ref(0)
const currentTab = computed(() => tabs.value[selectedTab.value] || {})

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
      return {
        background: borderColors[idx],
        color: '#fff',
        borderBottom: 'none',
      }
    }
    return {
      background: '#fff',
      color: '#111',
      borderBottom: 'none',
    }
  }
  return idx === selectedTab.value
    ? { borderBottom: `4px solid ${borderColors[idx]}` }
    : {}
}
</script>

<style scoped>
.hero-tabs-container {
  max-width: 1280px;
  width: 100%;
}
.hero-tabs {
  width: 100%;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}
.tab-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0;
  margin-bottom: 0;
  padding: 0 32px;
  background: transparent;
  position: relative;
  z-index: 2;
}
.tab {
  background: none;
  border: none;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d2d3a;
  opacity: 1;
  padding: 0 0 18px 0;
  cursor: pointer;
  border-bottom: 4px solid transparent;
  transition: color 0.2s, border-color 0.2s, opacity 0.2s;
  flex: 1 1 0;
  text-align: center;
}
.tab.active {
  color: inherit;
  font-weight: 700;
  opacity: 1;
}
.tab:not(.active) {
  color: #697586;
  opacity: 0.85;
}
.tab-content {
  margin-top: -2px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid #f2f4f7;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  padding: 40px 36px;
  display: flex;
  gap: 64px;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  min-height: 520px !important;
}

.tab-left {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tab-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1a1a2e;
}
.tab-features {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tab-features li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 18px;
  margin-bottom: 18px;
  color: #3b3b4f;
}
.feature-icon {
  display: inline-flex;
  margin-top: 2px;
}

.tab-right {
  flex: 2 1 0;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 260px;
  padding: 0;
}
.tab-image {
  width: 100%;
  min-width: 0;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.09);
  background: none;
  object-fit: contain;
}
.tab-icon {
  display: inline-flex;
  margin-right: 8px;
}

@media (max-width: 900px) {
  .tab-content {
    flex-direction: column;
    gap: 32px;
    padding: 32px 16px;
    min-height: 500px !important; 
  }

  .tab-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 16px;
    padding: 0;
    margin-bottom: 16px;
  }
  .tab {
    flex: 0 1 auto;
    min-width: 120px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    font-size: 14px;
    font-weight: 600;
    padding: 8px 18px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s, color 0.2s;
    border-bottom: none !important;
  }
  .tab.active {
    background: #2563eb;
    color: #fff;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
  }
  .tab-content {
    flex-direction: column;
    gap: 24px;
    padding: 32px;
    min-height: 505px;
  }
  .tab-right {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto !important;
    padding: 0;
    overflow: hidden;
    display: flex;
  }
  .tab-image {
    max-width: 100%;
    max-height: 220px;
    width: auto;
    height: auto;
    display: block;
    margin-top: 16px;
    margin-left: 0;
    object-fit: contain;
    margin: 0;
  }

  .tab-title {
    font-size: 20px;
    line-height: 125%;
  }

  .tab-features li {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 600px) {
  .tab-content {
    padding: 20px;
    gap: 20px;
    border-radius: 16px;
    min-height: 500px !important;
  }
  .tab-image {
    max-width: 98vw;
    max-height: 220px;
    width: auto;
    height: auto;
  }

  .tab-title {
    font-size: 18px;
    line-height: 125%;
  }

  .tab-features li {
    font-size: 14px;
    line-height: 24px;
  }
}
.tab-left-fade-slide-enter-active,
.tab-left-fade-slide-leave-active {
  transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.tab-left-fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-8px);
}
.tab-left-fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
.tab-left-fade-slide-enter-to,
.tab-left-fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.tab-right-fade-slide-enter-active,
.tab-right-fade-slide-leave-active {
  transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.tab-right-fade-slide-enter-from {
  opacity: 0;
  transform: translateX(8px);
}
.tab-right-fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
.tab-right-fade-slide-enter-to,
.tab-right-fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
