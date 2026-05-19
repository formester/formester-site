<template>
  <section class="tv2-section" :style="{ background }">
      <!-- Header -->
      <div class="tv2-header">
        <SectionBadge text="Testimonials" />
        <h2 class="tv2-heading">
          <span
            v-for="item in heading"
            :key="item.id"
            :class="item.highlight ? 'tv2-highlight' : ''"
          >{{ item.text }}</span>
        </h2>
      </div>

      <!-- Carousel (full-width, outside the max-width cap) -->
      <div class="tc-track-wrapper">
        <div class="tc-gradient-left"></div>
        <div class="tc-track-outer">
          <div ref="track" class="tc-cards">
            <template v-for="(pass, passIdx) in 3" :key="`pass-${passIdx}`">
            <div
              v-for="t in testimonials"
              :key="`${passIdx}-${t.id}`"
              class="tc-card"
              :aria-hidden="passIdx > 0 ? 'true' : undefined"
            >
              <div>
                <nuxt-img src="/quotes.svg" alt="" width="40" height="31" loading="lazy" class="tv2-quote-img" />
                <p class="tv2-comment">
                  <template v-if="isExpanded(t.id) || t.comment.length <= COMMENT_LIMIT">"{{ t.comment }}"</template>
                  <template v-else>"{{ t.comment.slice(0, COMMENT_LIMIT) }}…"</template>
                </p>
                <button
                  v-if="t.comment.length > COMMENT_LIMIT"
                  @click="toggleExpanded(t.id)"
                  class="tv2-read-more"
                >{{ isExpanded(t.id) ? 'Read less' : 'Read more' }}</button>
                <div v-else class="tv2-spacer"></div>
              </div>
              <div class="tv2-author">
                <div class="tv2-name">{{ t.name }}</div>
                <div class="tv2-position">{{ t.position }}</div>
              </div>
            </div>
          </template>
          </div>
        </div>
        <div class="tc-gradient-right"></div>
      </div>

      <!-- Mobile-only bottom navigation -->
      <div class="tc-nav-mobile">
        <button @click="scrollPrev" class="tc-btn" aria-label="Previous testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button @click="scrollNext" class="tc-btn" aria-label="Next testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const COMMENT_LIMIT = 150

const props = defineProps({
  heading:      { type: Array, default: () => [] },
  testimonials: { type: Array, default: () => [] },
  background:   { type: String, default: '' },
})

const track = ref(null)
const expandedCards = ref({})
const isMobile = ref(false)
const currentSlide = ref(0)
const tickerPosition = ref(0)
const scrollSpeed = 0.5
const scrollPaused = ref(false)
const isDragging = ref(false)
const dragStartX = ref(0)
const totalCardsWidth = ref(0)

let animationFrame = null
let _onEnter = null
let _onLeave = null
let _handleDragStart = null
let _handleDragMove = null
let _handleDragEnd = null

const isExpanded = (id) => !!expandedCards.value[id]
const toggleExpanded = (id) => {
  expandedCards.value = { ...expandedCards.value, [id]: !expandedCards.value[id] }
}

const getCardStep = () => {
  const t = track.value
  if (!t) return 0
  const card = t.querySelector('.tc-card')
  if (!card) return 0
  const gap = parseInt(window.getComputedStyle(t).gap) || 0
  return card.offsetWidth + gap
}

const applyMobileTransform = () => {
  const step = getCardStep()
  if (track.value) track.value.style.transform = `translateX(-${currentSlide.value * step}px)`
}

const handleDragStart = (e) => {
  e.preventDefault()
  isDragging.value = true
  scrollPaused.value = true
  dragStartX.value = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  if (track.value) track.value.style.cursor = 'grabbing'
}

const handleDragMove = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  const delta = dragStartX.value - x
  let newPos = tickerPosition.value + delta
  if (newPos < 0) newPos += totalCardsWidth.value
  if (newPos > totalCardsWidth.value * 2) newPos -= totalCardsWidth.value
  tickerPosition.value = newPos
  if (track.value) track.value.style.transform = `translateX(-${newPos}px)`
  dragStartX.value = x
}

const handleDragEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false
  scrollPaused.value = false
  if (track.value) track.value.style.cursor = 'grab'
}

const setupTicker = () => {
  const t = track.value
  if (!t || props.testimonials.length === 0) return

  const gap = parseInt(window.getComputedStyle(t).gap) || 0
  // Measure only the first pass (original testimonials); duplicates are rendered in template
  const originalCards = Array.from(t.querySelectorAll('.tc-card'))
    .slice(0, props.testimonials.length)

  let totalWidth = 0
  originalCards.forEach(card => { totalWidth += card.offsetWidth + gap })
  totalCardsWidth.value = totalWidth

  const outer = t.parentElement

  const animate = () => {
    if (!scrollPaused.value && !isDragging.value) {
      tickerPosition.value += scrollSpeed
      if (tickerPosition.value >= totalCardsWidth.value) {
        tickerPosition.value %= totalCardsWidth.value
      }
      t.style.transform = `translateX(-${tickerPosition.value}px)`
    }
    animationFrame = requestAnimationFrame(animate)
  }
  animationFrame = requestAnimationFrame(animate)

  _onEnter = () => { scrollPaused.value = true }
  _onLeave = (e) => { if (!isDragging.value && !outer.contains(e.relatedTarget)) scrollPaused.value = false }
  outer.addEventListener('mouseenter', _onEnter)
  outer.addEventListener('mouseleave', _onLeave)

  _handleDragStart = handleDragStart
  _handleDragMove  = handleDragMove
  _handleDragEnd   = handleDragEnd

  t.addEventListener('mousedown', _handleDragStart)
  document.addEventListener('mousemove', _handleDragMove)
  document.addEventListener('mouseup', _handleDragEnd)
  t.addEventListener('touchstart', _handleDragStart, { passive: false })
  document.addEventListener('touchmove', _handleDragMove, { passive: false })
  document.addEventListener('touchend', _handleDragEnd)
}

const setupMobileCarousel = () => {
  const t = track.value
  if (!t) return
  t.style.transition = 'transform 0.35s ease'
}

const teardown = () => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  const t = track.value
  if (t) {
    const outer = t.parentElement
    if (outer) {
      if (_onEnter) outer.removeEventListener('mouseenter', _onEnter)
      if (_onLeave) outer.removeEventListener('mouseleave', _onLeave)
    }
    if (_handleDragStart) {
      t.removeEventListener('mousedown', _handleDragStart)
      t.removeEventListener('touchstart', _handleDragStart)
    }
  }
  if (_handleDragMove) {
    document.removeEventListener('mousemove', _handleDragMove)
    document.removeEventListener('touchmove', _handleDragMove)
  }
  if (_handleDragEnd) {
    document.removeEventListener('mouseup', _handleDragEnd)
    document.removeEventListener('touchend', _handleDragEnd)
  }
}

const scrollNext = () => {
  if (isMobile.value) {
    currentSlide.value = Math.min(currentSlide.value + 1, props.testimonials.length - 1)
    applyMobileTransform()
  } else {
    tickerPosition.value += getCardStep()
    if (tickerPosition.value >= totalCardsWidth.value) {
      tickerPosition.value %= totalCardsWidth.value
    }
  }
}

const scrollPrev = () => {
  if (isMobile.value) {
    currentSlide.value = Math.max(currentSlide.value - 1, 0)
    applyMobileTransform()
  } else {
    tickerPosition.value -= getCardStep()
    if (tickerPosition.value < 0) tickerPosition.value += totalCardsWidth.value
  }
}

onMounted(async () => {
  await nextTick()
  isMobile.value = typeof window !== 'undefined' && window.innerWidth < 768
  if (isMobile.value) {
    setupMobileCarousel()
  } else {
    setupTicker()
  }
})

onBeforeUnmount(() => teardown())
</script>

<style scoped>
/* Section */
.tv2-section {
  font-family: var(--font-primary);
  padding: var(--space-10) var(--space-4);
  overflow-x: hidden;
}

@media (min-width: 768px) {
  .tv2-section {
    padding: var(--space-16) var(--space-8);
  }
}

/* Header */
.tv2-header {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

@media (min-width: 768px) {
  .tv2-header {
    margin-bottom: var(--space-12);
  }
}


/* Heading */
.tv2-heading {
  font-family: var(--font-primary);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  margin-bottom: 0;
  font-size: var(--fs-2xl);
  line-height: var(--lh-2xl);
}

@media (min-width: 768px) {
  .tv2-heading {
    font-size: var(--fs-3xl);
    line-height: 40px;
  }
}

.tv2-highlight {
  color: var(--violet-500);
}

/* Card internals */
.tc-card {
  background: #fff;
  border: 1px solid var(--gray-200);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tv2-quote-img {
  margin-bottom: var(--space-4);
}

.tv2-comment {
  font-size: var(--fs-md);
  line-height: var(--lh-md);
  color: var(--fg-2);
  margin-bottom: var(--space-2);
  font-weight: normal;
}

.tv2-read-more {
  color: var(--violet-500);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-4);
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
}

.tv2-read-more:hover {
  text-decoration: underline;
}

.tv2-spacer {
  margin-bottom: var(--space-4);
}

.tv2-author {
  display: flex;
  flex-direction: column;
}

.tv2-name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  line-height: var(--lh-sm);
}

.tv2-position {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  line-height: var(--lh-sm);
}

.tc-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--r-full);
  border: 1px solid var(--border-light);
  background: var(--bg-primary);
  color: var(--fg-2);
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  flex-shrink: 0;
}

.tc-btn:hover {
  background: var(--bg-grey-25);
  color: var(--fg-1);
  border-color: var(--border-dark);
}

/* Carousel layout */
.tc-track-wrapper {
  position: relative;
}

.tc-track-outer {
  overflow: hidden;
  position: relative;
}

.tc-cards {
  display: flex;
  gap: var(--space-4);
  will-change: transform;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  padding: var(--space-3) 0;
  transition: none;
}

.tc-cards:active {
  cursor: grabbing;
}

.tc-card {
  flex: 0 0 100%;
  padding: var(--space-4);
}

/* Gradient edge masks */
.tc-gradient-left,
.tc-gradient-right {
  position: absolute;
  top: 0;
  height: 100%;
  width: 120px;
  z-index: 10;
  pointer-events: none;
}

.tc-gradient-left {
  left: 0;
  background: linear-gradient(to right, var(--bg-grey-50) 20%, transparent);
}

.tc-gradient-right {
  right: 0;
  background: linear-gradient(to left, var(--bg-grey-50) 20%, transparent);
}

@media (min-width: 768px) {
  .tc-cards { gap: var(--space-6); }
  .tc-card  { flex: 0 0 calc(50% - 12px); padding: var(--space-6); }
}

@media (min-width: 1024px) {
  .tc-card  { flex: 0 0 calc(33.3333% - 16px); }
}

/* Heading */
.tv2-heading {
  font-family: var(--font-primary);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  margin-bottom: 0;
  font-size: var(--fs-2xl);
  line-height: var(--lh-2xl);
}

@media (min-width: 768px) {
  .tv2-heading {
    font-size: var(--fs-3xl);
    line-height: 40px;
  }
}

/* Mobile-only nav buttons */
.tc-nav-mobile {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

@media (min-width: 768px) {
  .tc-nav-mobile { display: none; }
  .tc-gradient-left,
  .tc-gradient-right { display: block; }
}

@media (max-width: 767px) {
  .tc-gradient-left,
  .tc-gradient-right { display: none; }

  .tc-cards {
    transition: transform 0.35s ease;
    cursor: default;
  }
  .tc-cards:active {
    cursor: default;
  }
}
</style>
