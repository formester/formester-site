<template>
  <div>
    <!-- Feature Testimonials Layout -->
    <div class="section" v-if="isFeatureTestimonail">
      <div class="row">
        <SectionTitle :heading="heading" />
        <div
          class="d-flex flex-column flex-lg-row px-3 px-md-0 justify-content-center align-items-center mt-5"
        >
          <div
            class="card mt-5 mt-lg-1 p-3 me-lg-3"
            style="max-width: 512px"
            v-for="(testimonial, idx) in randomTestimonials"
            :key="testimonial.id"
          >
            <nuxt-img
              v-if="idx === 0"
              class="quotes__logo"
              src="/quotes.svg"
              alt="Quote icon"
              loading="lazy"
            />
            <div class="d-flex flex-column align-items-center text-center px-2">
              <span class="quote mt-5 mb-4">{{ testimonial.comment }}</span>
              <div class="my-3 d-flex flex-column align-items-center">
                <span class="person">{{ testimonial.name }}</span>
                <span class="designation">{{ testimonial.position }}</span>
                <nuxt-img
                  class="brand mt-4 mb-3"
                  :src="getIconSrc(testimonial.companyLogo)"
                  :alt="testimonial.companyLogo.imageAlt || 'Company logo'"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Homepage Testimonials Layout with Auto-Scrolling Ticker for Desktop / Carousel for Mobile -->
    <div class="my-5 py-5" v-else>
      <div class="icon-wrapper">
        <img src="/assets/images/TestimonialSection.svg" alt="Quote icon" />
        <p class="tag">USER TESTIMONIALS</p>
      </div>
      <SectionTitle :heading="heading" />

      <!-- Desktop Ticker / Mobile Carousel Container -->
      <div class="testimonial-container position-relative">
        <!-- Desktop Only: Gradient Overlays for Seamless Look -->
        <div class="testimonial-gradient-left d-none d-md-block"></div>
        <div class="testimonial-gradient-right d-none d-md-block"></div>

        <!-- Testimonial Cards Wrapper -->
        <div class="testimonial__wrapper d-flex position-relative overflow-hidden">
          <!-- Desktop: Auto-scrolling ticker -->
          <div class="testimonial__cards d-flex ticker-scroll d-none d-md-flex">
            <TestimonialCard
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              :testimonial="testimonial"
            />
          </div>
          
          <!-- Mobile: Carousel -->
          <div class="mobile-carousel d-md-none">
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

export default {
  components: {
    TestimonialCard,
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
      scrollInterval: null,
      scrollSpeed: 0.5,
      scrollPaused: false,
      scrollPosition: 0,
      tickerWidth: 0,
      containerWidth: 0,
      animationFrame: null,
      handleMouseEnter: null,
      handleMouseLeave: null,
      moveTickerForward: null,
      currentSlide: 0,
      touchStartX: 0,
      touchEndX: 0,
      userInteracted: false,
      carouselInterval: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setupTicker()
      this.setupCarousel()
    })
  },
  methods: {
    // Mobile Carousel Methods
    setupCarousel() {
      if (this.testimonials.length === 0) return
      
      // Add touch event listeners for swipe functionality
      const carouselTrack = this.$refs.carouselTrack
      if (carouselTrack) {
        carouselTrack.addEventListener('touchstart', this.handleTouchStart, { passive: true })
        carouselTrack.addEventListener('touchend', this.handleTouchEnd, { passive: true })
      }
      
      // Set up auto-rotation if more than one slide
      this.startAutoRotation()
    },
    
    startAutoRotation() {
      if (this.testimonials.length > 1) {
        // Clear any existing interval first
        if (this.carouselInterval) {
          clearInterval(this.carouselInterval)
        }
        
        this.carouselInterval = setInterval(() => {
          if (window.innerWidth < 768 && !this.userInteracted) { // Only auto-rotate on mobile and if user hasn't interacted
            this.nextSlide()
          }
        }, 5000)
      }
    },
    
    stopAutoRotation() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval)
        this.carouselInterval = null
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
    
    goToSlide(index) {
      this.currentSlide = index
    },
    
    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX
    },
    
    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX
      if (this.touchStartX - this.touchEndX > 50) {
        // Swipe left - go to next slide
        this.nextSlide()
      } else if (this.touchEndX - this.touchStartX > 50) {
        // Swipe right - go to previous slide
        this.prevSlide()
      }
    },
    
    setupTicker() {
      if (this.testimonials.length === 0) return

      // Reset the paused state
      this.scrollPaused = false

      // Get references to DOM elements
      const wrapper = document.querySelector('.testimonial__wrapper')
      if (!wrapper) return

      // Get the original cards container
      const cardsContainer = document.querySelector('.testimonial__cards')
      if (!cardsContainer) return

      // Get all original cards
      const cards = cardsContainer.querySelectorAll('.testimonial__card')
      if (!cards.length) return

      // Calculate the total width of all cards
      let totalWidth = 0
      cards.forEach((card) => {
        totalWidth += card.offsetWidth + 24 // Adding gap width
      })

      // Create enough clones to fill the container at least twice
      // This ensures we always have content to scroll to
      const numClones = Math.ceil((wrapper.offsetWidth * 2) / totalWidth) + 1

      // Clone cards and append them
      for (let i = 0; i < numClones; i++) {
        cards.forEach((card) => {
          const clone = card.cloneNode(true)
          cardsContainer.appendChild(clone)
        })
      }

      // Remove any CSS animation
      cardsContainer.style.animation = 'none'

      // Start the scrolling
      let currentPosition = 0

      // Define the animation function
      const animate = () => {
        // Only move if not paused
        if (!this.scrollPaused) {
          currentPosition += this.scrollSpeed

          // Check if we need to shift
          if (currentPosition > totalWidth) {
            // When we've scrolled past the first set of cards,
            // shift the container back by that amount (invisibly)
            currentPosition -= totalWidth
          }

          // Apply the transform
          cardsContainer.style.transform = `translateX(-${currentPosition}px)`
        }

        // Always request the next frame
        this.animationFrame = requestAnimationFrame(animate)
      }

      // Start the animation
      this.animationFrame = requestAnimationFrame(animate)

      // Define the event handlers
      this.handleMouseEnter = () => {
        this.scrollPaused = true
      }

      this.handleMouseLeave = () => {
        this.scrollPaused = false
      }

      // Add event listeners for pausing on hover
      wrapper.addEventListener('mouseenter', this.handleMouseEnter)
      wrapper.addEventListener('mouseleave', this.handleMouseLeave)
    },

    getIconSrc(iconObject) {
      if (!iconObject) return ''

      // Handle different Strapi image structures
      if (iconObject.imageUrl) {
        return iconObject.imageUrl
      }

      if (iconObject.image) {
        if (iconObject.image.url) {
          return iconObject.image.url
        }

        if (iconObject.image.data) {
          if (
            iconObject.image.data.attributes &&
            iconObject.image.data.attributes.url
          ) {
            return iconObject.image.data.attributes.url
          }

          if (
            Array.isArray(iconObject.image.data) &&
            iconObject.image.data[0] &&
            iconObject.image.data[0].attributes &&
            iconObject.image.data[0].attributes.url
          ) {
            return iconObject.image.data[0].attributes.url
          }
        }
      }

      return ''
    },
  },
  beforeDestroy() {
    // Clear the interval when component is destroyed
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval)
    }
    
    // Clear carousel interval
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval)
    }

    // Cancel animation frame if it exists
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }

    // Remove event listeners if they were added
    const wrapper = document.querySelector('.testimonial__wrapper')
    if (wrapper && this.handleMouseEnter && this.handleMouseLeave) {
      wrapper.removeEventListener('mouseenter', this.handleMouseEnter)
      wrapper.removeEventListener('mouseleave', this.handleMouseLeave)
    }
    
    // Remove touch event listeners
    const carouselTrack = this.$refs.carouselTrack
    if (carouselTrack) {
      carouselTrack.removeEventListener('touchstart', this.handleTouchStart)
      carouselTrack.removeEventListener('touchend', this.handleTouchEnd)
    }
  },
  computed: {
    isFeatureTestimonail() {
      return this.version === 'feature'
    },
    randomTestimonials() {
      if (this.testimonials.length <= 2) return this.testimonials

      const randIndex = Math.floor(
        Math.random() * (this.testimonials.length - 2)
      )
      return this.testimonials.slice(randIndex, randIndex + 2)
    },
  },
}
</script>

<style>
.section {
  padding: 6rem 0 !important;
}

@media screen and (max-width: 768px) {
  .section {
    padding: 4rem 0 !important;
  }
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.tag {
  font-size: 16px;
  font-weight: 700;
  color: var(--clr-primary);
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

.quotes__logo {
  width: 81px;
  position: absolute;
  top: -45px;
  left: -42px;
}

.quote {
  font-size: 19px;
  font-weight: 500;
}

.card {
  border-radius: 12px;
  border: 1px solid #e5e5e5;
}

.person {
  font-size: 16px;
  font-weight: 500;
}

.designation {
  font-size: 15px;
  color: #737373;
}

/* Auto-Scrolling Ticker Styles */
.testimonial-container {
  width: 100%;
  position: relative;
  padding: 0;
  overflow: hidden; /* Changed from visible to hidden */
  margin-top: 56px;
  box-sizing: border-box;
}

.testimonial__wrapper {
  width: 100%;
  position: relative;
  overflow: hidden; /* Changed from visible to hidden */
  padding: 12px 0;
}

.testimonial__cards {
  width: 100%;
  gap: 24px;
  will-change: transform;
  padding: 0 48px;
  display: flex;
  overflow: visible;
  box-sizing: border-box;
}

/* Hover pause is now handled by JavaScript */

/* Gradient Overlay Styles */
.testimonial-gradient-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(
    to right,
    white 30%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0)
  );
  z-index: 10;
  pointer-events: none;
}

.testimonial-gradient-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(
    to left,
    white 30%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0)
  );
  z-index: 10;
  pointer-events: none;
}

/* Animation is now handled by JavaScript */

/* Remove transition to prevent shift on hover */
.testimonial__cards {
  transition: none;
}

/* Responsive Styles */
@media (max-width: 576px) {
  .quotes__logo {
    left: -20px;
  }
}

@media screen and (max-width: 768px) {
  .testimonial__cards {
    gap: 24px;
    padding: 0 24px;
  }

  .testimonial-gradient-left,
  .testimonial-gradient-right {
    width: 80px;
  }
  
  /* Mobile Carousel Styles */
  .mobile-carousel {
    width: 100%;
    position: relative;
    padding: 8px 16px;
    overflow: visible;
  }
  
  .carousel-container {
    width: 100%;
    overflow: visible;
    padding: 0 8px;
    position: relative;
    min-height: 200px; /* Minimum height to prevent layout shifts */
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  
  .carousel-slide {
    min-width: 100%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    margin-bottom: 8px;
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
    margin-top: 24px;
    gap: 24px;
  }
  
  .carousel-nav-btn {
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #42526b;
    transition: all 0.2s ease;
  }
  
  .carousel-nav-btn:hover {
    background-color: #f8f8f8;
    color: #7534ff;
  }
  

}
</style>
