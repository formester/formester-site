<template>
  <section class="bg-gray-50 font-primary py-space-10 px-space-4 md:py-space-16 md:px-space-8 overflow-x-hidden">
      <!-- Header -->
      <div class="max-w-[1280px] mx-auto flex flex-col items-center text-center gap-space-2 mb-space-8 md:mb-space-12">
        <div class="flex items-center justify-center gap-space-2">
          <span class="inline-block w-4 h-0.5 bg-violet-500 shrink-0"></span>
          <span class="text-violet-500 text-fs-xs font-semibold tracking-[0.08em] uppercase m-0">Testimonials</span>
          <span class="inline-block w-4 h-0.5 bg-violet-500 shrink-0"></span>
        </div>
        <h2 class="font-primary font-semibold text-fg-1 mb-0 text-fs-2xl leading-lh-2xl md:text-fs-3xl md:leading-[40px]">
          <span
            v-for="item in heading"
            :key="item.id"
            :class="item.highlight ? 'text-violet-500' : ''"
          >{{ item.text }}</span>
        </h2>
      </div>

      <!-- Carousel (full-width, outside the max-width cap) -->
      <div class="tc-track-wrapper">
        <div class="tc-gradient-left hidden md:block"></div>
        <div class="tc-track-outer">
          <div ref="track" class="tc-cards">
            <div
              v-for="t in testimonials"
              :key="t.id"
              class="tc-card bg-white border border-gray-200 rounded-r-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <nuxt-img src="/quotes.svg" alt="" width="40" height="31" loading="lazy" class="mb-space-4" />
                <p class="text-fs-md leading-lh-md text-fg-2 mb-space-2 font-normal">
                  <template v-if="isExpanded(t.id) || t.comment.length <= COMMENT_LIMIT">"{{ t.comment }}"</template>
                  <template v-else>"{{ t.comment.slice(0, COMMENT_LIMIT) }}…"</template>
                </p>
                <button
                  v-if="t.comment.length > COMMENT_LIMIT"
                  @click="toggleExpanded(t.id)"
                  class="text-violet-500 text-fs-sm font-semibold mb-space-4 bg-transparent border-0 cursor-pointer p-0 hover:underline"
                >{{ isExpanded(t.id) ? 'Read less' : 'Read more' }}</button>
                <div v-else class="mb-space-4"></div>
              </div>
              <div class="flex items-center gap-space-3">
                <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-fs-sm font-semibold text-violet-500 shrink-0">
                  {{ getInitials(t.name) }}
                </div>
                <div>
                  <div class="text-fs-sm font-semibold text-fg-1 leading-lh-sm">{{ t.name }}</div>
                  <div class="text-fs-sm text-fg-3 leading-lh-sm">{{ t.position }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tc-gradient-right hidden md:block"></div>
      </div>

      <!-- Mobile-only bottom navigation -->
      <div class="flex md:hidden justify-center gap-space-3 mt-space-6">
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

const COMMENT_LIMIT = 150

const props = defineProps({
  heading:      { type: Array, default: () => [] },
  testimonials: { type: Array, default: () => [] },
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

const getInitials = (name) => {
  const parts = (name || '').trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return (name || '').slice(0, 2).toUpperCase()
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

  const originalCards = Array.from(t.querySelectorAll('.tc-card'))
  const gap = parseInt(window.getComputedStyle(t).gap) || 0

  let totalWidth = 0
  originalCards.forEach(card => { totalWidth += card.offsetWidth + gap })
  totalCardsWidth.value = totalWidth

  const outer = t.parentElement
  const numClones = Math.ceil((outer.offsetWidth * 2) / totalWidth) + 1
  for (let i = 0; i < numClones; i++) {
    originalCards.forEach(card => {
      const clone = card.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      t.appendChild(clone)
    })
  }

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
  _onLeave = () => { if (!isDragging.value) scrollPaused.value = false }
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

@media (max-width: 767px) {
  .tc-cards {
    transition: transform 0.35s ease;
    cursor: default;
  }
  .tc-cards:active {
    cursor: default;
  }
}
</style>
