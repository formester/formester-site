<template>
  <section ref="sectionEl" class="hero-v2">
    <!-- <div class="hero-v2__grid" aria-hidden="true"></div> -->
    <div class="hero-v2__inner">
      <a v-if="badge?.text" :href="badge.link || '#'" class="hero-v2__badge-link">
        <SectionBadge variant="pill" :text="badge.text" :tag="badge.tag" :sep="!!(badge.tag && badge.text)" arrow />
      </a>

      <h1 class="hero-v2__heading">
        <span v-for="item in title" :key="item.id"
          :class="['hero-v2__title-span', { 'hero-v2__title-highlight': item.highlight }]">{{ item.text }}</span>
      </h1>

      <p class="hero-v2__desc">{{ description }}</p>

      <div class="hero-v2__ctas">
        <FButton v-for="btn in buttons" :key="btn.id" :href="btn.link"
          :variant="btn.type === 'Primary' ? 'primary' : 'secondary'" size="lg" class="hero-v2__btn">
          {{ btn.text }}
          <IconArrowRight v-if="btn?.showArrow" />
        </FButton>
      </div>

      <p v-if="trustText" class="hero-v2__trust">{{ trustText }}</p>
    </div>

    <div v-if="tabCardContent.length || image?.url" class="hero-v2__media">
      <FeatureShowcase v-if="tabCardContent.length" />
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
  tabCardContent: { type: Array, default: () => [] },
})

const sectionEl = useTemplateRef('sectionEl')

const HOME = { ax: 72, ay: 18, bx: 22, by: 78, cx: 52, cy: 50 }
const BASE = { aSize: 900, bSize: 700 }
const SPEED = 0.5

let rafId = null
let startTime = null

function tick(ts) {
  if (!startTime) startTime = ts
  const t = (ts - startTime) * 0.001 * SPEED
  const el = sectionEl.value
  if (!el) return

  const ax = HOME.ax + 18 * Math.sin(t * 0.45)
  const ay = HOME.ay + 12 * Math.cos(t * 0.38)
  const bx = HOME.bx + 16 * Math.cos(t * 0.34 + 1.2)
  const by = HOME.by + 10 * Math.sin(t * 0.29 + 0.7)
  const cx = HOME.cx + 22 * Math.sin(t * 0.55 + 2.0)
  const cy = HOME.cy + 14 * Math.sin(t * 1.10 + 0.5)

  const breatheA = 1 + 0.06 * Math.sin(t * 0.31)
  const breatheB = 1 + 0.06 * Math.cos(t * 0.27 + 1.0)

  el.style.setProperty('--a-x', ax.toFixed(2) + '%')
  el.style.setProperty('--a-y', ay.toFixed(2) + '%')
  el.style.setProperty('--a-size-x', Math.round(BASE.aSize * breatheA) + 'px')
  el.style.setProperty('--a-size-y', Math.round(BASE.aSize * 0.66 * breatheA) + 'px')

  el.style.setProperty('--b-x', bx.toFixed(2) + '%')
  el.style.setProperty('--b-y', by.toFixed(2) + '%')
  el.style.setProperty('--b-size-x', Math.round(BASE.bSize * breatheB) + 'px')
  el.style.setProperty('--b-size-y', Math.round(BASE.bSize * 0.71 * breatheB) + 'px')

  el.style.setProperty('--c-x', cx.toFixed(2) + '%')
  el.style.setProperty('--c-y', cy.toFixed(2) + '%')

  rafId = requestAnimationFrame(tick)
}

function onPointerMove(e) {
  const el = sectionEl.value
  if (!el) return
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(2) + '%')
  el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(2) + '%')
  el.style.setProperty('--glow-opacity', '0.7')
}

function onPointerLeave() {
  sectionEl.value?.style.setProperty('--glow-opacity', '0')
}

onMounted(() => {
  rafId = requestAnimationFrame(tick)
  const el = sectionEl.value
  el?.addEventListener('pointermove', onPointerMove)
  el?.addEventListener('pointerleave', onPointerLeave)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  const el = sectionEl.value
  el?.removeEventListener('pointermove', onPointerMove)
  el?.removeEventListener('pointerleave', onPointerLeave)
})
</script>

<style scoped>
.hero-v2 {

  --tint-a: #e2daf1;
  --tint-b: #f1ebff;
  --tint-c: #eee7ff;
  /* --glow: #f4ebff; */

  --a-size-x: 900px; --a-size-y: 594px;
  --b-size-x: 700px; --b-size-y: 497px;
  --c-size-x: 600px; --c-size-y: 420px;

  --a-x: 72%; --a-y: 18%;
  --b-x: 22%; --b-y: 78%;
  --c-x: 52%; --c-y: 50%;

  --mx: 50%; --my: 50%;
  --glow-size: 520px;
  --glow-opacity: 0;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  background:
    radial-gradient(var(--a-size-x) var(--a-size-y) at var(--a-x) var(--a-y),
      var(--tint-a) 0%, transparent 60%),
    radial-gradient(var(--b-size-x) var(--b-size-y) at var(--b-x) var(--b-y),
      var(--tint-b) 0%, transparent 65%),
    radial-gradient(var(--c-size-x) var(--c-size-y) at var(--c-x) var(--c-y),
      var(--tint-c) 0%, transparent 55%),
    #fff;

  padding: var(--space-30) var(--space-6) var(--space-20);
}

.hero-v2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    var(--glow-size) var(--glow-size) at var(--mx) var(--my),
    var(--glow) 0%, transparent 55%
  );
  opacity: var(--glow-opacity);
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 0;
}

.hero-v2:not(:hover)::before { opacity: 0; }

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

.hero-v2__mockup {
  width: 100%;
  max-width: 900px;
  border-radius: var(--r-2xl);
  overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 24px 80px rgba(15, 14, 26, 0.12), 0 8px 24px rgba(15, 14, 26, 0.06);
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
