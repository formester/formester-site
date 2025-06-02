<template>
  <div class="hero-tabs-container">
    <div class="hero-tabs">
      <div class="tab-list">
        <button
          v-for="(tab, idx) in tabs"
          :key="tab.label"
          :class="['tab', { active: idx === selectedTab }]"
          @click="selectedTab = idx"
          :style="tabButtonStyle(idx)"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <div class="tab-left">
          <h2 class="tab-title">{{ currentTab.title }}</h2>
          <ul class="tab-features">
            <li v-for="(feature, i) in currentTab.features" :key="i">
              <span class="feature-icon">
                <img
                  :src="feature.icon"
                  :alt="feature.text + ' icon'"
                  width="20"
                  height="20"
                />
              </span>
              {{ feature.text }}
            </li>
          </ul>
        </div>
        <div class="tab-right">
          <img
            :src="currentTab.image"
            :alt="currentTab.label + ' screenshot'"
            class="tab-image"
            :key="currentTab.image"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Feature icons will now use <img> with the icon property as the image path.

const borderColors = [
  '#FF9100', // Forms (orange)
  '#2F80ED', // Scheduling (blue)
  '#6C47FF', // PDF (purple)
  '#00B87C', // Payments (green)
  '#FF5A5F', // Workflows (red)
  '#3F2AFF', // Signature (indigo)
]

const tabs = [
  {
    label: 'AI Tools',
    title: 'Build full forms, surveys & quizzes in seconds with AI',
    features: [
      {
        text: 'Skip manual work & convert PDFs to forms',
        icon: '/images/feature-icons/calendar.svg',
      },
      {
        text: 'Reach global users in their language',
        icon: '/images/feature-icons/mail.svg',
      },
      {
        text: 'Personalize journeys with smart logic',
        icon: '/images/feature-icons/discount.svg',
      },
    ],
    image: '/hero-assets/features/Forms.png',
  },
  {
    label: 'Documents',
    title: 'Automate your document workflows',
    features: [
      {
        text: 'Make file collection fast and stress-free',
        icon: '/images/feature-icons/clock.svg',
      },
      {
        text: 'Stay in control of file types and sizes',
        icon: '/images/feature-icons/calendar.svg',
      },
      {
        text: 'Collect signatures within the form',
        icon: '/images/feature-icons/zap.svg',
      },
    ],
    image: '/images/hero-tabs/scheduling.png',
  },
  {
    label: 'Custom PDFs',
    title: 'Seamless PDF workflows',
    features: [
      {
        text: 'Auto-generate invoices and reports',
        icon: '/images/feature-icons/pdf.svg',
      },
      {
        text: 'Automate your PDF Workflow',
        icon: '/images/feature-icons/mail.svg',
      },
      {
        text: 'Customize PDF templates easily',
        icon: '/images/feature-icons/edit.svg',
      },
    ],
    image: '/images/hero-tabs/pdf.png',
  },
  {
    label: 'Automations',
    title: 'Keep leads warm with auto follow-ups',
    features: [
      {
        text: 'Notify your team instantly via Slack',
        icon: '/images/feature-icons/credit-card.svg',
      },
      {
        text: 'Capture leads right into your CRM',
        icon: '/images/feature-icons/discount.svg',
      },
      {
        text: 'Save time with 1000+ app integrations',
        icon: '/images/feature-icons/chart.svg',
      },
    ],
    image: '/images/hero-tabs/payments.png',
  },
  {
    label: 'Collaboration',
    title: 'Collaborate with your team',
    features: [
      {
        text: 'Bring your whole team into one workspace',
        icon: '/images/feature-icons/zap.svg',
      },
      {
        text: 'Control who sees or edits what, easily',
        icon: '/images/feature-icons/workflow.svg',
      },
      {
        text: 'Share forms with your team',
        icon: '/images/feature-icons/edit.svg',
      },
    ],
    image: '/images/hero-tabs/workflows.png',
  },
  {
    label: 'Payments',
    title: 'Collect payments with ease',
    features: [
      {
        text: 'Get paid directly through your forms',
        icon: '/images/feature-icons/signature.svg',
      },
      {
        text: 'Build form with built-in promo discounts',
        icon: '/images/feature-icons/lock.svg',
      },
      {
        text: 'Track payments in one place',
        icon: '/images/feature-icons/chart.svg',
      },
    ],
    image: '/images/hero-tabs/signature.png',
  },
]

const selectedTab = ref(0)
const currentTab = computed(() => tabs[selectedTab.value])

let intervalId = null
onMounted(() => {
  tabs.forEach((tab) => {
    const img = new window.Image()
    img.src = tab.image
    tab.features.forEach((feature) => {
      const iconImg = new window.Image()
      iconImg.src = feature.icon
    })
  })
  intervalId = setInterval(() => {
    selectedTab.value = (selectedTab.value + 1) % tabs.length
  }, 5000)
})
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
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
  margin: 0 96px;
}
.hero-tabs {
  width: 100%;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
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
  min-height: 340px;
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
  align-items: center;
  font-size: 18px;
  margin-bottom: 18px;
  color: #3b3b4f;
}
.feature-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
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
    min-height: unset;
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
  }
  .tab-right {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 0;
  }
  .tab-image {
    max-width: 98vw;
    max-height: 320px;
    width: auto;
    height: auto;
    display: block;
    margin-top: 16px;
    margin-left: 0;
    object-fit: contain;
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
</style>
