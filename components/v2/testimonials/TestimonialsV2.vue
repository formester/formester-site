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

<script>
const COMMENT_LIMIT = 150

export default {
  props: {
    heading:      { type: Array, default: () => [] },
    testimonials: { type: Array, default: () => [] },
  },

  data() {
    return {
      COMMENT_LIMIT,
      expandedCards:   {},
      isMobile:        false,
      currentSlide:    0,
      tickerPosition:  0,
      scrollSpeed:     0.5,
      scrollPaused:    false,
      isDragging:      false,
      dragStartX:      0,
      totalCardsWidth: 0,
      animationFrame:  null,
      _onEnter: null,
      _onLeave: null,
      _handleDragStart: null,
      _handleDragMove:  null,
      _handleDragEnd:   null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.isMobile = typeof window !== 'undefined' && window.innerWidth < 768
      if (this.isMobile) {
        this.setupMobileCarousel()
      } else {
        this.setupTicker()
      }
    })
  },

  beforeUnmount() {
    this.teardown()
  },

  methods: {
    isExpanded(id) {
      return !!this.expandedCards[id]
    },
    toggleExpanded(id) {
      this.expandedCards = { ...this.expandedCards, [id]: !this.expandedCards[id] }
    },

    getInitials(name) {
      const parts = (name || '').trim().split(/\s+/)
      if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      return (name || '').slice(0, 2).toUpperCase()
    },

    setupTicker() {
      const track = this.$refs.track
      if (!track || this.testimonials.length === 0) return

      const originalCards = Array.from(track.querySelectorAll('.tc-card'))
      const gap = parseInt(window.getComputedStyle(track).gap) || 0

      let totalWidth = 0
      originalCards.forEach(card => { totalWidth += card.offsetWidth + gap })
      this.totalCardsWidth = totalWidth

      const outer = track.parentElement
      const numClones = Math.ceil((outer.offsetWidth * 2) / totalWidth) + 1
      for (let i = 0; i < numClones; i++) {
        originalCards.forEach(card => {
          const clone = card.cloneNode(true)
          clone.setAttribute('aria-hidden', 'true')
          track.appendChild(clone)
        })
      }

      const animate = () => {
        if (!this.scrollPaused && !this.isDragging) {
          this.tickerPosition += this.scrollSpeed
          if (this.tickerPosition >= this.totalCardsWidth) {
            this.tickerPosition %= this.totalCardsWidth
          }
          track.style.transform = `translateX(-${this.tickerPosition}px)`
        }
        this.animationFrame = requestAnimationFrame(animate)
      }
      this.animationFrame = requestAnimationFrame(animate)

      this._onEnter = () => { this.scrollPaused = true }
      this._onLeave = () => { if (!this.isDragging) this.scrollPaused = false }
      outer.addEventListener('mouseenter', this._onEnter)
      outer.addEventListener('mouseleave', this._onLeave)

      this._handleDragStart = this.handleDragStart.bind(this)
      this._handleDragMove  = this.handleDragMove.bind(this)
      this._handleDragEnd   = this.handleDragEnd.bind(this)

      track.addEventListener('mousedown', this._handleDragStart)
      document.addEventListener('mousemove', this._handleDragMove)
      document.addEventListener('mouseup',   this._handleDragEnd)
      track.addEventListener('touchstart', this._handleDragStart, { passive: false })
      document.addEventListener('touchmove', this._handleDragMove, { passive: false })
      document.addEventListener('touchend',  this._handleDragEnd)
    },

    teardown() {
      if (this.animationFrame) cancelAnimationFrame(this.animationFrame)
      const track = this.$refs.track
      if (track) {
        const outer = track.parentElement
        if (outer) {
          if (this._onEnter) outer.removeEventListener('mouseenter', this._onEnter)
          if (this._onLeave) outer.removeEventListener('mouseleave', this._onLeave)
        }
        if (this._handleDragStart) {
          track.removeEventListener('mousedown',  this._handleDragStart)
          track.removeEventListener('touchstart', this._handleDragStart)
        }
      }
      if (this._handleDragMove) {
        document.removeEventListener('mousemove', this._handleDragMove)
        document.removeEventListener('touchmove', this._handleDragMove)
      }
      if (this._handleDragEnd) {
        document.removeEventListener('mouseup',  this._handleDragEnd)
        document.removeEventListener('touchend', this._handleDragEnd)
      }
    },

    handleDragStart(e) {
      e.preventDefault()
      this.isDragging   = true
      this.scrollPaused = true
      this.dragStartX   = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
      if (this.$refs.track) this.$refs.track.style.cursor = 'grabbing'
    },

    handleDragMove(e) {
      if (!this.isDragging) return
      e.preventDefault()
      const x     = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
      const delta = this.dragStartX - x
      let newPos  = this.tickerPosition + delta
      if (newPos < 0) newPos += this.totalCardsWidth
      if (newPos > this.totalCardsWidth * 2) newPos -= this.totalCardsWidth
      this.tickerPosition = newPos
      if (this.$refs.track) this.$refs.track.style.transform = `translateX(-${newPos}px)`
      this.dragStartX = x
    },

    handleDragEnd() {
      if (!this.isDragging) return
      this.isDragging   = false
      this.scrollPaused = false
      if (this.$refs.track) this.$refs.track.style.cursor = 'grab'
    },

    setupMobileCarousel() {
      const track = this.$refs.track
      if (!track) return
      track.style.transition = 'transform 0.35s ease'
    },

    applyMobileTransform() {
      const step = this.getCardStep()
      if (this.$refs.track) {
        this.$refs.track.style.transform = `translateX(-${this.currentSlide * step}px)`
      }
    },

    getCardStep() {
      const track = this.$refs.track
      if (!track) return 0
      const card = track.querySelector('.tc-card')
      if (!card) return 0
      const gap = parseInt(window.getComputedStyle(track).gap) || 0
      return card.offsetWidth + gap
    },

    scrollNext() {
      if (this.isMobile) {
        this.currentSlide = Math.min(this.currentSlide + 1, this.testimonials.length - 1)
        this.applyMobileTransform()
      } else {
        this.tickerPosition += this.getCardStep()
        if (this.tickerPosition >= this.totalCardsWidth) {
          this.tickerPosition %= this.totalCardsWidth
        }
      }
    },

    scrollPrev() {
      if (this.isMobile) {
        this.currentSlide = Math.max(this.currentSlide - 1, 0)
        this.applyMobileTransform()
      } else {
        this.tickerPosition -= this.getCardStep()
        if (this.tickerPosition < 0) this.tickerPosition += this.totalCardsWidth
      }
    },
  },
}
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
