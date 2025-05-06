<template>
  <section class="trust-seals-section">
    <h3 class="heading text-center">
    <span
      v-for="item in title"
      :key="item.id"
      :class="{ highlight__text: item.highlight, bold: item.bold }"
    >
      {{ item.text }}
    </span>
  </h3>
    <div class="ticker-container">
      <div class="gradient-overlay left"></div>
      
      <div class="ticker-wrapper">
        <div class="ticker" ref="ticker">
          <!-- We'll use multiple copies to ensure continuous looping -->
          <div class="ticker-track" ref="tickerTrack">
            <div v-for="n in duplicateCount" :key="`track-${n}`" class="ticker-content">
              <div v-for="(item, index) in logos" :key="`${item.id}-${n}-${index}`" class="ticker-item">
                <nuxt-img
                  :src="item.imageUrl || item.image.url"
                  :alt="item.imageAlt"
                  :width="item.width"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="gradient-overlay right"></div>
    </div>
  </section>
</template>

<style scoped>
.heading {
  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 64px;
  color: var(--clr-dark);
}
.bold {
  font-weight: 700;
}

</style>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: () => [],
    },
    logos: {
      type: Array,
      default: () => [],
    },
    speed: {
      type: Number,
      default: 30, // seconds to complete one loop
    },
  },
  data() {
    return {
      animationId: null,
      tickerWidth: 0,
      contentWidth: 0,
      animationPaused: false,
      duplicateCount: 3, // Number of copies to ensure continuous loop
      currentPosition: 0,
    }
  },
  mounted() {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      this.initTicker()
      window.addEventListener('resize', this.handleResize)
    }, 100)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
  methods: {
    initTicker() {
      // Ensure refs exist
      if (!this.$refs.ticker || !this.$refs.tickerTrack) {
        console.log('Ticker refs not found')
        return
      }
      
      // Get the width of a single ticker content element
      const firstContent = this.$refs.tickerTrack.querySelector('.ticker-content')
      if (!firstContent) {
        console.log('No ticker content found')
        return
      }
      
      // Measure widths
      this.contentWidth = firstContent.offsetWidth
      this.tickerWidth = this.$refs.ticker.offsetWidth
      
      console.log('Content width:', this.contentWidth, 'Ticker width:', this.tickerWidth)
      
      // Ensure we have enough duplicates to cover the screen multiple times
      const minDuplicates = Math.ceil((this.tickerWidth * 3) / this.contentWidth) || 3
      if (minDuplicates > this.duplicateCount) {
        console.log('Increasing duplicates to:', minDuplicates)
        this.duplicateCount = minDuplicates
        this.$forceUpdate() // Force re-render with more duplicates if needed
        
        // Re-initialize after a short delay to allow re-render
        setTimeout(() => this.initTicker(), 100)
        return
      }
      
      // Reset position
      this.currentPosition = 0
      this.$refs.tickerTrack.style.transform = 'translateX(0px)'
      
      // Start animation if we have content to scroll
      if (this.contentWidth > 0) {
        console.log('Starting animation')
        this.startAnimation()
      } else {
        console.log('No content width, not starting animation')
      }
    },
    startAnimation() {
      // Cancel any existing animation
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }
      
      const trackEl = this.$refs.tickerTrack
      if (!trackEl) {
        console.log('Track element not found')
        return
      }
      
      // Use a fixed pixel-per-second rate if content width is zero
      const pixelsPerSecond = this.contentWidth > 0 ? 
        this.contentWidth / this.speed : 
        50; // fallback speed
      
      let lastTime = null
      
      const animate = (timestamp) => {
        if (!lastTime) lastTime = timestamp
        const deltaTime = timestamp - lastTime
        lastTime = timestamp
        
        // Update position based on elapsed time and speed (pixels per second / 1000 = pixels per ms)
        this.currentPosition += (pixelsPerSecond / 1000) * deltaTime
        
        // Reset position when we've moved one full content width
        if (this.contentWidth > 0 && this.currentPosition >= this.contentWidth) {
          this.currentPosition = 0
        }
        
        // Apply transform
        trackEl.style.transform = `translateX(-${this.currentPosition}px)`
        
        this.animationId = requestAnimationFrame(animate)
      }
      
      // Start the animation
      this.animationId = requestAnimationFrame(animate)
    },
    handleResize() {
      this.initTicker()
    },
    // Pause/resume methods removed
  },
}
</script>

<style scoped>
.trust-seals-section {
  margin-top: 96px;
  margin-bottom: 240px;
  overflow: hidden;
  width: 100%;
}

@media screen and (max-width: 400px) {
  .trust-seals-section {
    margin-top: 64px;
    margin-bottom: 64px;
  }
}

.ticker-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.ticker-wrapper {
  width: 100%;
  overflow: hidden;
}

.ticker {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.ticker-track {
  display: flex;
  white-space: nowrap;
  will-change: transform;
}

.ticker-content {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  padding: 0 48px;
}

.ticker-item img,
.ticker-item svg {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.ticker-item:hover img,
.ticker-item:hover svg {
  opacity: 1;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 120px;
  pointer-events: none;
  z-index: 2;
}

.gradient-overlay.left {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

.gradient-overlay.right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

@media screen and (max-width: 800px) {
  .heading {
    font-size: 20px;
    line-height: 1.2;
  }
  .bold {
    font-weight: 700;
  }

  .ticker-item {
    padding: 0 16px;
  }
  
  .ticker-item img,
  .ticker-item svg {
    transform: scale(0.75);
  }
  
  .gradient-overlay {
    width: 80px;
  }
}
</style>
