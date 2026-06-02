<template>
  <section ref="sectionEl" class="hero-v2" :class="{ 'hero-v2--split': layout === 'split' }">
    <div aria-hidden="true" class="hero-v2__blobs">
      <div ref="blobA" class="hero-v2__blob hero-v2__blob--a" :style="{ background: blobColorA }"></div>
      <div ref="blobB" class="hero-v2__blob hero-v2__blob--b" :style="{ background: blobColorB }"></div>
      <div ref="blobC" class="hero-v2__blob hero-v2__blob--c" :style="{ background: blobColorC }"></div>
    </div>
    <div class="hero-v2__grid">
      <div class="hero-v2__inner">
        <a v-if="badge?.text" :href="badge.link || '#'" class="hero-v2__badge-link">
          <SectionBadge variant="pill" :text="badge.text" :tag="badge.tag" :sep="!!(badge.tag && badge.text)" arrow />
        </a>

        <h1 class="hero-v2__heading">
          <span
            v-for="item in title"
            :key="item.id"
            :class="['hero-v2__title-span', { 'hero-v2__title-highlight': item.highlight }]"
            >{{ item.text }}</span
          >
        </h1>

        <p class="hero-v2__desc">{{ description }}</p>

        <div class="hero-v2__ctas">
          <FButton
            v-for="btn in buttons"
            :key="btn.id"
            :href="btn.link"
            :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
            size="lg"
            class="hero-v2__btn"
          >
            {{ btn.text }}
            <IconArrowRight v-if="btn?.showArrow" />
          </FButton>
        </div>

        <p v-if="trustText" class="hero-v2__trust">{{ trustText }}</p>
      </div>

      <div v-if="tabCardContent.length || image?.url || mockupHtml" class="hero-v2__media">
        <FeatureShowcase v-if="tabCardContent.length" />
        <!-- Raw HTML mockup/illustration: render bare so the markup can bring its own chrome -->
        <div v-else-if="mockupHtml" class="hero-v2__html-mock" v-html="mockupHtml"></div>
        <div v-else-if="image?.url" class="hero-v2__mockup">
          <div class="hero-v2__mockup-bar">
            <span class="hero-v2__dot hero-v2__dot--red"></span>
            <span class="hero-v2__dot hero-v2__dot--yellow"></span>
            <span class="hero-v2__dot hero-v2__dot--green"></span>
            <span class="hero-v2__url-bar">app.formester.com / forms</span>
          </div>
          <img :src="image.url" :alt="image.alternativeText || 'Formester dashboard'" class="hero-v2__screenshot" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import FeatureShowcase from '@/components/v2/FeatureShowcase.vue'
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'
import IconArrowRight from '@/components/icons/ArrowRightIcon.vue'

defineProps({
  badge: { type: Object, default: () => null },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  buttons: { type: Array, default: () => [] },
  trustText: { type: String, default: '' },
  image: { type: Object, default: () => null },
  mockupHtml: { type: String, default: '' },
  layout: { type: String, default: 'centered' },
  tabCardContent: { type: Array, default: () => [] },
  blobColorA: { type: String, default: '#f5eeff' },
  blobColorB: { type: String, default: '#f1ebff' },
  blobColorC: { type: String, default: '#f4efff' },
})

const sectionEl = useTemplateRef('sectionEl')
const blobA = useTemplateRef('blobA')
const blobB = useTemplateRef('blobB')
const blobC = useTemplateRef('blobC')

// Blob base sizes (px): A=900×594  B=700×497  C=600×420
// Ranges are percentage of section width/height for each blob's center point
const RANGES = {
  ax: [0.54, 0.9],
  ay: [0.06, 0.3],
  bx: [0.06, 0.38],
  cx: [0.3, 0.74],
  cy: [0.36, 0.64],
}
const BY_FIXED = 500

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function tick() {
  const section = sectionEl.value
  if (!section) return
  const W = section.offsetWidth
  const H = section.offsetHeight

  const scaleA = rand(0.94, 1.06).toFixed(2)
  const scaleB = rand(0.94, 1.06).toFixed(2)
  const scaleC = rand(0.94, 1.06).toFixed(2)

  // translate positions the blob center; subtract half the blob size to align
  const ax = Math.round(W * rand(...RANGES.ax) - 450)
  const ay = Math.round(H * rand(...RANGES.ay) - 297)
  blobA.value.style.transform = `translate(${ax}px, ${ay}px) scale(${scaleA})`

  const bx = Math.round(W * rand(...RANGES.bx) - 350)
  blobB.value.style.transform = `translate(${bx}px, ${BY_FIXED - 248}px) scale(${scaleB})`

  const cx = Math.round(W * rand(...RANGES.cx) - 300)
  const cy = Math.round(H * rand(...RANGES.cy) - 210)
  blobC.value.style.transform = `translate(${cx}px, ${cy}px) scale(${scaleC})`
}

let intervalId = null

onMounted(() => {
  tick()
  intervalId = setInterval(tick, 1500)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.hero-v2 {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #fff;
  padding: var(--space-30) var(--space-6) var(--space-20);
}

.hero-v2__blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-v2__blob {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.85;
  transition: transform 1.5s ease-in-out;
  will-change: transform;
}

.hero-v2__blob--a {
  width: 900px;
  height: 594px;
}
.hero-v2__blob--b {
  width: 700px;
  height: 497px;
}
.hero-v2__blob--c {
  width: 600px;
  height: 420px;
}

.hero-v2__inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* --- Split (side-by-side) layout: text left, media right on desktop --- */
.hero-v2__grid {
  position: relative;
  z-index: 1;
}

.hero-v2--split .hero-v2__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-v2--split .hero-v2__heading {
  font-size: clamp(36px, 4vw, 54px);
}

.hero-v2--split .hero-v2__inner {
  max-width: none;
  margin: 0;
  text-align: left;
  align-items: flex-start;
}

.hero-v2--split .hero-v2__desc {
  margin-left: 0;
  margin-right: 0;
}

.hero-v2--split .hero-v2__ctas {
  justify-content: flex-start;
}

.hero-v2--split .hero-v2__media {
  margin: 0;
  padding: 0;
  max-width: none;
}

.hero-v2--split .hero-v2__html-mock {
  max-width: none;
}

@media (max-width: 920px) {
  .hero-v2--split .hero-v2__grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .hero-v2--split .hero-v2__inner {
    text-align: center;
    align-items: center;
  }

  .hero-v2--split .hero-v2__ctas {
    justify-content: center;
  }
}

.hero-v2__badge-link {
  margin-bottom: var(--space-8);
  text-decoration: none;
  transition: opacity 140ms ease;
}

.hero-v2__badge-link:hover {
  opacity: 0.85;
}

.hero-v2__heading {
  font-size: clamp(44px, 6vw, 72px);
  font-weight: var(--fw-bold);
  line-height: 1.1;
  color: var(--fg-1);
  letter-spacing: -1.5px;
  margin-bottom: var(--space-6);
}

.hero-v2__title-span {
  display: inline;
}

.hero-v2__title-highlight {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}

.hero-v2__desc {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--fg-2);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: var(--space-9);
}

.hero-v2__ctas {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.hero-v2__trust {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  margin-bottom: var(--space-14);
}

.hero-v2__media {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.hero-v2__tabs {
  width: 100%;
}

/* Raw HTML mockup/illustration — illustration markup supplies its own framing */
.hero-v2__html-mock {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.hero-v2__mockup {
  width: 100%;
  max-width: 900px;
  border-radius: var(--r-2xl);
  overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow:
    0 24px 80px rgba(15, 14, 26, 0.12),
    0 8px 24px rgba(15, 14, 26, 0.06);
}

.hero-v2__mockup-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--space-3) var(--space-4);
  background: var(--bg-grey-100);
  border-bottom: 1px solid var(--border-light);
}

.hero-v2__dot {
  width: 12px;
  height: 12px;
  border-radius: var(--r-half);
  flex-shrink: 0;
}

.hero-v2__dot--red {
  background: #ff6058;
}

.hero-v2__dot--yellow {
  background: #ffbd2e;
}

.hero-v2__dot--green {
  background: #27c93f;
}

.hero-v2__url-bar {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-md);
  padding: 3px 12px;
  margin-left: 12px;
}

.hero-v2__screenshot {
  width: 100%;
  display: block;
}

@media (max-width: 767px) {
  .hero-v2 {
    padding: var(--space-24) var(--space-5) var(--space-14);
  }

  .hero-v2__inner {
    max-width: 100%;
  }

  .hero-v2__heading {
    letter-spacing: -1px;
  }

  .hero-v2__desc {
    font-size: var(--fs-md);
    max-width: 100%;
  }

  .hero-v2__ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: var(--space-3);
  }

  .hero-v2__btn {
    justify-content: center;
  }

  .hero-v2__trust {
    margin-bottom: var(--space-9);
  }

  .hero-v2__media {
    padding: 0;
  }

  .hero-v2__mockup {
    border-radius: var(--r-xl);
  }

  .hero-v2__url-bar {
    display: none;
  }
}
</style>
