<template>
  <div>
    <!-- Feature Testimonials Layout -->
    <div class="py-16 md:py-24" v-if="isFeatureTestimonail">
      <h2 class="text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-[-0.02em] text-fg-1 text-center mb-0">
        <span v-for="item in heading" :key="item.id" :class="{ 'text-violet-500': item.highlight }">{{ item.text }}</span>
      </h2>
      <div class="flex flex-col lg:flex-row px-3 md:px-0 justify-center items-center mt-14 gap-6">
        <div
          class="relative mt-10 lg:mt-0 p-6 bg-white border border-gray-200 rounded-[12px] shadow-sm flex-shrink-0"
          style="max-width: 512px"
          v-for="(testimonial, idx) in randomTestimonials"
          :key="testimonial.id"
        >
          <nuxt-img
            v-if="idx === 0"
            class="feat-quote-icon"
            src="/quotes.svg"
            alt="Quote icon"
            width="81"
            height="63"
            loading="lazy"
          />
          <div class="flex flex-col items-center text-center px-2">
            <span class="text-[15px] font-medium text-fg-2 leading-relaxed mt-5 mb-2">
              <template v-if="isExpanded(testimonial.id) || testimonial.comment.length <= COMMENT_LIMIT">{{ testimonial.comment }}</template>
              <template v-else>{{ testimonial.comment.slice(0, COMMENT_LIMIT) }}...</template>
            </span>
            <button
              v-if="testimonial.comment.length > COMMENT_LIMIT"
              @click="toggleExpanded(testimonial.id)"
              class="text-violet-500 text-sm font-semibold mb-2 bg-transparent border-0 cursor-pointer p-0 hover:underline"
            >
              {{ isExpanded(testimonial.id) ? 'Read less' : 'Read more' }}
            </button>
            <div class="my-3 flex flex-col items-center">
              <span class="text-base font-medium text-fg-1">{{ testimonial.name }}</span>
              <span class="text-[15px] text-fg-3">{{ testimonial.position }}</span>
              <nuxt-img
                v-if="getCompanyLogo(testimonial).src"
                class="mt-4 mb-3"
                :src="getCompanyLogo(testimonial).src"
                :alt="getCompanyLogo(testimonial).alt || `${testimonial.name}'s company logo`"
                :width="getCompanyLogo(testimonial).width || 110"
                :height="getCompanyLogo(testimonial).height || 36"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Homepage Testimonials Layout with Auto-Scrolling Ticker for Desktop / Carousel for Mobile -->
    <div class="my-10 py-10" v-else>
      <div class="flex flex-col items-center justify-center gap-4 mb-6">
        <!-- <img src="/assets/images/TestimonialSection.svg" alt="Quote icon" width="40" height="40" /> -->
        <!-- <p class="text-xs font-bold text-violet-500 tracking-widest uppercase mb-0">USER TESTIMONIALS</p> -->
        <SectionBadge text="USER TESTIMONIALS" class="mb-0" />
      </div>
      <h2 class="text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-[-0.02em] text-fg-1 text-center mb-0">
        <span v-for="item in heading" :key="item.id" :class="{ 'text-violet-500': item.highlight }">{{ item.text }}</span>
      </h2>

      <!-- Desktop Ticker / Mobile Carousel Container -->
      <div class="testimonial-container relative">
        <!-- Desktop Only: Gradient Overlays -->
        <div class="testimonial-gradient-left hidden md:block"></div>
        <div class="testimonial-gradient-right hidden md:block"></div>

        <!-- Testimonial Cards Wrapper -->
        <div class="testimonial__wrapper flex relative overflow-hidden">
          <!-- Desktop: Auto-scrolling ticker -->
          <div class="testimonial__cards hidden md:flex ticker-scroll">
            <TestimonialCard
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              :testimonial="testimonial"
            />
          </div>

          <!-- Mobile: Carousel -->
          <div class="mobile-carousel md:hidden">
            <div class="carousel-container">
              <div class="carousel-track" ref="carouselTrack">
                <div
                  v-for="(testimonial, index) in testimonials"
                  :key="testimonial.id"
                  class="carousel-slide"
                  :class="{ 'active': currentSlide === index }"
                >
                  <TestimonialCard :testimonial="testimonial" />
                </div>
              </div>
            </div>
            <!-- Mobile: Carousel Navigation -->
            <div class="carousel-navigation">
              <button class="carousel-nav-btn prev" @click="manualPrevSlide" aria-label="Previous testimonial">
                <img src="/arrow-left.svg" alt="Previous" width="24" height="24">
              </button>
              <button class="carousel-nav-btn next" @click="manualNextSlide" aria-label="Next testimonial">
                <img src="/arrow-right.svg" alt="Next" width="24" height="24">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
import { getStrapiImage } from '@/utils/strapiImage'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const COMMENT_LIMIT = 10

export default {
  components: {
    TestimonialCard,
    SectionBadge,
  },
  props: {
    heading: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: '',
    },
    version: {
      type: String,
      default: 'home',
    },
    testimonials: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      COMMENT_LIMIT,
      expandedCards: {},
      currentSlide: 0,
      autoRotationTimer: null,
      touchStartX: 0,
      touchEndX: 0,
      animationFrame: null,
      scrollSpeed: 0.5,
      scrollPaused: false,
      isDragging: false,
      dragStartX: 0,
      dragCurrentX: 0,
      tickerPosition: 0,
      cardsContainer: null,
      totalCardsWidth: 0,
      userInteracted: false,
    }
  },
  mounted() {
    if (this.version === 'home') {
      this.setupTicker()
    } else {
      this.setupCarousel()
    }
  },
  methods: {
    isExpanded(id) {
      return !!this.expandedCards[id]
    },
    toggleExpanded(id) {
      this.expandedCards = { ...this.expandedCards, [id]: !this.expandedCards[id] }
    },

    // Mobile Carousel Methods
    setupCarousel() {
      if (this.testimonials.length === 0) return
      const carouselTrack = this.$refs.carouselTrack
      if (carouselTrack) {
        carouselTrack.addEventListener('touchstart', this.handleTouchStart, { passive: true })
        carouselTrack.addEventListener('touchend', this.handleTouchEnd, { passive: true })
      }
      this.startAutoRotation()
    },

    startAutoRotation() {
      if (this.testimonials.length > 1) {
        if (this.autoRotationTimer) clearInterval(this.autoRotationTimer)
        this.autoRotationTimer = setInterval(() => {
          if (window.innerWidth < 768 && !this.userInteracted) {
            this.nextSlide()
          }
        }, 5000)
      }
    },

    stopAutoRotation() {
      if (this.autoRotationTimer) {
        clearInterval(this.autoRotationTimer)
        this.autoRotationTimer = null
      }
      this.userInteracted = true
    },

    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length
    },

    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length
    },

    manualNextSlide() {
      this.stopAutoRotation()
      this.nextSlide()
    },

    manualPrevSlide() {
      this.stopAutoRotation()
      this.prevSlide()
    },

    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX
    },

    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX
      if (this.touchStartX - this.touchEndX > 50) {
        this.nextSlide()
      } else if (this.touchEndX - this.touchStartX > 50) {
        this.prevSlide()
      }
    },

    setupTicker() {
      if (this.testimonials.length === 0) return

      this.scrollPaused = false
      this.isDragging = false
      this.tickerPosition = 0

      const wrapper = document.querySelector('.testimonial__wrapper')
      if (!wrapper) return

      this.cardsContainer = document.querySelector('.testimonial__cards')
      if (!this.cardsContainer) return

      const cards = this.cardsContainer.querySelectorAll('.testimonial__card')
      if (!cards.length) return

      let totalWidth = 0
      cards.forEach((card) => {
        totalWidth += card.offsetWidth + 24
      })
      this.totalCardsWidth = totalWidth

      const numClones = Math.ceil((wrapper.offsetWidth * 2) / totalWidth) + 1
      for (let i = 0; i < numClones; i++) {
        cards.forEach((card) => {
          this.cardsContainer.appendChild(card.cloneNode(true))
        })
      }

      this.cardsContainer.style.animation = 'none'

      const animate = () => {
        if (!this.scrollPaused && !this.isDragging) {
          this.tickerPosition += this.scrollSpeed
          if (this.tickerPosition >= totalWidth) {
            this.tickerPosition = this.tickerPosition % totalWidth
          }
          this.cardsContainer.style.transform = `translateX(-${this.tickerPosition}px)`
        }
        this.animationFrame = requestAnimationFrame(animate)
      }
      this.animationFrame = requestAnimationFrame(animate)

      this.handleMouseEnter = () => { if (!this.isDragging) this.scrollPaused = true }
      this.handleMouseLeave = () => { if (!this.isDragging) this.scrollPaused = false }

      wrapper.addEventListener('mouseenter', this.handleMouseEnter)
      wrapper.addEventListener('mouseleave', this.handleMouseLeave)

      this.cardsContainer.addEventListener('mousedown', this.handleDragStart)
      document.addEventListener('mousemove', this.handleDragMove)
      document.addEventListener('mouseup', this.handleDragEnd)
      this.cardsContainer.addEventListener('touchstart', this.handleDragStart, { passive: false })
      document.addEventListener('touchmove', this.handleDragMove, { passive: false })
      document.addEventListener('touchend', this.handleDragEnd)
    },

    getCompanyLogo(testimonial) {
      return getStrapiImage(testimonial?.companyLogo)
    },

    handleDragStart(e) {
      e.preventDefault()
      this.isDragging = true
      this.scrollPaused = true
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
      this.dragStartX = clientX
      this.dragCurrentX = clientX
      if (this.cardsContainer) this.cardsContainer.style.cursor = 'grabbing'
    },

    handleDragMove(e) {
      if (!this.isDragging) return
      e.preventDefault()
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
      this.dragCurrentX = clientX
      const dragDelta = this.dragCurrentX - this.dragStartX
      const newPosition = this.tickerPosition - dragDelta
      if (this.cardsContainer) {
        this.cardsContainer.style.transform = `translateX(-${newPosition}px)`
      }
      this.dragStartX = this.dragCurrentX
      this.tickerPosition = newPosition
      if (this.tickerPosition < 0) {
        this.tickerPosition += this.totalCardsWidth
      } else if (this.tickerPosition > this.totalCardsWidth * 2) {
        this.tickerPosition -= this.totalCardsWidth
      }
    },

    handleDragEnd() {
      if (!this.isDragging) return
      this.isDragging = false
      this.scrollPaused = false
      if (this.cardsContainer) this.cardsContainer.style.cursor = 'grab'
    },
  },
  beforeDestroy() {
    if (this.autoRotationTimer) clearInterval(this.autoRotationTimer)
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame)

    const wrapper = document.querySelector('.testimonial__wrapper')
    if (wrapper && this.handleMouseEnter && this.handleMouseLeave) {
      wrapper.removeEventListener('mouseenter', this.handleMouseEnter)
      wrapper.removeEventListener('mouseleave', this.handleMouseLeave)
    }

    const carouselTrack = this.$refs.carouselTrack
    if (carouselTrack) {
      carouselTrack.removeEventListener('touchstart', this.handleTouchStart)
      carouselTrack.removeEventListener('touchend', this.handleTouchEnd)
    }

    if (this.cardsContainer) {
      this.cardsContainer.removeEventListener('mousedown', this.handleDragStart)
      this.cardsContainer.removeEventListener('touchstart', this.handleDragStart)
    }

    document.removeEventListener('mousemove', this.handleDragMove)
    document.removeEventListener('mouseup', this.handleDragEnd)
    document.removeEventListener('touchmove', this.handleDragMove)
    document.removeEventListener('touchend', this.handleDragEnd)
  },
  computed: {
    isFeatureTestimonail() {
      return this.version === 'feature'
    },
    randomTestimonials() {
      if (this.testimonials.length <= 2) return this.testimonials
      const randIndex = Math.floor(Math.random() * (this.testimonials.length - 2))
      return this.testimonials.slice(randIndex, randIndex + 2)
    },
  },
}
</script>

<style>
/* Feature layout: floating quote icon */
.feat-quote-icon {
  width: 81px;
  position: absolute;
  top: -45px;
  left: -42px;
}

@media screen and (max-width: 576px) {
  .feat-quote-icon {
    left: -20px;
  }
}

/* Auto-Scrolling Ticker */
.testimonial-container {
  width: 100%;
  overflow: hidden;
  margin-top: var(--space-14);
  box-sizing: border-box;
}

.testimonial__wrapper {
  width: 100%;
  overflow: hidden;
  padding: var(--space-3) 0;
}

.testimonial__cards {
  width: 100%;
  gap: var(--space-6);
  will-change: transform;
  padding: 0 var(--space-12);
  overflow: visible;
  box-sizing: border-box;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  transition: none;
}

.testimonial__cards:active {
  cursor: grabbing;
}

/* Gradient Overlays */
.testimonial-gradient-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to right, var(--bg-primary) 30%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0));
  z-index: 10;
  pointer-events: none;
}

.testimonial-gradient-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to left, var(--bg-primary) 30%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0));
  z-index: 10;
  pointer-events: none;
}

/* Mobile Carousel */
@media screen and (max-width: 768px) {
  .testimonial__cards {
    gap: var(--space-6);
    padding: 0 var(--space-6);
  }

  .testimonial-gradient-left,
  .testimonial-gradient-right {
    width: 80px;
  }

  .mobile-carousel {
    width: 100%;
    padding: var(--space-2) var(--space-4);
    overflow: visible;
  }

  .carousel-container {
    width: 100%;
    overflow: visible;
    padding: 0 var(--space-2);
    position: relative;
    min-height: 200px;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .carousel-slide {
    min-width: 100%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    margin-bottom: var(--space-2);
    pointer-events: none;
  }

  .carousel-slide.active {
    opacity: 1;
    position: relative;
    pointer-events: auto;
  }

  .carousel-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--space-6);
    gap: var(--space-6);
  }

  .carousel-nav-btn {
    background: var(--bg-primary);
    border: 1px solid var(--border-medium);
    border-radius: var(--r-half);
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--fg-strong);
    transition: all 0.2s ease;
  }

  .carousel-nav-btn:hover {
    background-color: var(--bg-grey-50);
    color: var(--violet-500);
  }
}
</style>
