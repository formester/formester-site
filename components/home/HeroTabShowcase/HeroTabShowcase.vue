<template>
  <section class="hero-tabs-container">
    <div class="hero" @mousemove="handleMouseMove" ref="heroSection">
      <img src="/hero-assets/hero-shadow.svg" class="hero-shadow" alt="" />
      <div
        class="floating-icon floating-icon-1"
        :style="{
          transform: `translate(${iconPositions[0].x}px, ${iconPositions[0].y}px)`,
        }"
      >
        <object type="image/svg+xml" data="/hero-assets/floating-icon-1.svg" width="120" height="120" aria-label="Floating Icon" class="svg-object"></object>
      </div>
      <div
        class="floating-icon floating-icon-2"
        :style="{
          transform: `translate(${iconPositions[1].x}px, ${iconPositions[1].y}px)`,
        }"
      >
        <object type="image/svg+xml" data="/hero-assets/floating-icon-2.svg" width="120" height="120" aria-label="Floating Icon" class="svg-object"></object>
      </div>
      <div
        class="floating-icon floating-icon-3"
        :style="{
          transform: `translate(${iconPositions[2].x}px, ${iconPositions[2].y}px)`,
        }"
      >
        <object type="image/svg+xml" data="/hero-assets/floating-icon-3.svg" width="120" height="120" aria-label="Floating Icon" class="svg-object"></object>
      </div>
      <div
        class="floating-icon floating-icon-4"
        :style="{
          transform: `translate(${iconPositions[3].x}px, ${iconPositions[3].y}px)`,
        }"
      >
        <object type="image/svg+xml" data="/hero-assets/floating-icon-4.svg" width="120" height="120" aria-label="Floating Icon" class="svg-object"></object>
      </div>
      <div class="container horizontal__padding">
        <div
          class="d-flex flex-column align-items-center justify-content-center text-center my-5"
        >
          <div class="ai-badge">
            <img src="/hero-assets/bolt.svg" alt="Lightning" />
            <span>Explore our new AI features</span>
          </div>
          <h1 class="hero__heading">
            <template v-for="(item, index) in title">
              <span
                :key="item.id"
                :class="{ highlight__text: item.highlight }"
                :style="{ display: item.highlight ? 'block' : 'inline' }"
              >
                {{ item.text }}
              </span>
            </template>
          </h1>
          <p class="hero__subheading mt-3">
            {{ description }}
          </p>
          <a
            v-if="button && button.length"
            :href="button[0]?.link || '#'"
            class="btn button mt-4 mb-4 mb-md-5 hero__button"
            :class="{
              'hero__button--primary': button[0]?.type === 'Primary',
              'hero__button--secondary': button[0]?.type === 'Secondary',
            }"
          >
            {{ button[0]?.text || 'Learn More' }}
          </a>
        </div>
      </div>
    </div>
    <HeroTabs class="hero-tabs" />
  </section>
</template>

<script>
import HeroTabs from './HeroTabs.vue'
export default {
  components: {
    HeroTabs,
  },
  data() {
    return {
      iconPositions: [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
      ],
    }
  },
  methods: {
    handleMouseMove(event) {
      const rect = this.$refs.heroSection.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Calculate mouse position relative to the center of the hero section
      const mouseX = event.clientX - rect.left - centerX
      const mouseY = event.clientY - rect.top - centerY

      // Safari-specific fix: Use integer values only to prevent subpixel rendering
      // Multiply by factor, then round to nearest integer
      this.iconPositions = [
        { x: Math.floor(mouseX * 0.02), y: Math.floor(mouseY * 0.03) },
        { x: Math.floor(mouseX * -0.03), y: Math.floor(mouseY * 0.02) },
        { x: Math.floor(mouseX * 0.04), y: Math.floor(mouseY * -0.02) },
        { x: Math.floor(mouseX * -0.02), y: Math.floor(mouseY * -0.03) },
      ]
    },
  },
  props: {
    title: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: () => '',
    },
    button: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.hero__button.hero__button--primary {
  background-color: #6434d0;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 0.75em 2em;
  font-size: 1.125rem;
  box-shadow: 0 2px 8px rgba(100, 52, 208, 0.08);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.hero__button.hero__button--primary:hover,
.hero__button.hero__button--primary:focus {
  background-color: #4b27a8;
  color: #fff;
  box-shadow: 0 4px 16px rgba(100, 52, 208, 0.15);
  outline: none;
}

.hero__button.hero__button--secondary {
  background-color: transparent;
  color: #6434d0;
  border: 1px solid #6434d0;
}
.hero__button.hero__button--secondary:hover,
.hero__button.hero__button--secondary:focus {
  background-color: #6434d0;
  color: #fff;
  box-shadow: 0 4px 16px rgba(100, 52, 208, 0.15);
  outline: none;
}

.hero-tabs-container {
  margin-bottom: 96px;
}
.hero-tabs {
  margin-inline: auto;
  margin-top: -160px;
  padding-left: 96px;
  padding-right: 96px;
}

@media (max-width: 600px) {
  .hero-tabs {
    padding-left: 24px;
    padding-right: 24px;
  }
}

.hero {
  padding-top: 160px;
  padding-bottom: 240px;
  background: radial-gradient(
    42.76% 62.72% at 50% 67.62%,
    rgba(247, 243, 255, 0.56) 0%,
    rgba(207, 192, 240, 0.56) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero__heading {
  max-width: 800px;
  font-size: 72px;
  font-weight: 700;
  line-height: 125%;
}

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
  color: #475467;
}

.hero__button {
  background-color: var(--primary);
  color: white;
  border: 1px solid var(--primary);
}

.hero__invert__button {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.ai-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #5b2fbd;
  padding: 4px 16px;
  border-radius: 20px;
  border: 1px solid #5b2fbd;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.ai-badge:hover {
  background-color: rgba(79, 56, 149, 0.05);
}

.lightning-icon,
.arrow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hero-shadow {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
}

/* Floating Icons */
.floating-icon {
  position: absolute;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1); /* Improved easing */
  transform-style: preserve-3d; /* Better 3D handling */
  -webkit-transform-style: preserve-3d; /* Safari-specific 3D handling */
  -webkit-perspective: 1000; /* Safari-specific */
  perspective: 1000;
  width: 120px; /* Larger default size */
  height: 120px; /* Larger default size */
  pointer-events: none;
}

.floating-icon .svg-object,
.floating-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Fix for SVG blurriness */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated; /* Safari-specific */
  -ms-interpolation-mode: nearest-neighbor; /* IE/Edge */
  transform: translateZ(0); /* Force GPU acceleration */
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  will-change: transform; /* Hint to browser about property changes */
  filter: blur(0); /* Safari fix */
  -webkit-transform: translate3d(0, 0, 0); /* Safari-specific GPU acceleration */
}

.floating-icon-1 {
  top: 20%;
  left: 20%;
}

.floating-icon-2 {
  top: 25%;
  right: 18%;
}

.floating-icon-3 {
  bottom: 30%;
  left: 25%;
}

.floating-icon-4 {
  bottom: 30%;
  right: 25%;
}

@media (max-width: 1024px) {
  .hero-tabs {
    margin-top: -160px;
    padding-left: 48px;
    padding-right: 48px;
  }

  @media (max-width: 900px) {
    .hero-tabs {
      margin-top: -160px;
      padding-left: 48px;
      padding-right: 48px;
    }
  }

  .hero {
    padding-bottom: 160px;
  }

  .hero__heading {
    font-size: 56px;
    line-height: 125%;
  }

  .hero__subheading {
    font-size: var(--ft-big-body);
    line-height: 30px;
    color: #475467;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-bottom: 240px;
  }
  .hero-tabs {
    margin-top: -240px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .hero__heading {
    font-size: 40px;
    line-height: 125%;
  }

  .hero__subheading {
    font-size: var(--ft-body);
    line-height: 24px;
    color: #475467;
  }

  .floating-icon {
    display: none;
  }
}

@media (max-width: 1440px) {
  .floating-icon-1 {
    top: 17%;
    left: 20%;
  }

  .floating-icon-2 {
    top: 20%;
    right: 15%;
  }

  .floating-icon-3 {
    bottom: 30%;
    left: 15%;
  }

  .floating-icon-4 {
    bottom: 32%;
    right: 15%;
  }
}

@media (max-width: 1024px) {
  .floating-icon-1 {
    top: 20%;
    left: 20%;
  }

  .floating-icon-2 {
    top: 20%;
    right: 15%;
  }

  .floating-icon-3 {
    bottom: 30%;
    left: 5%;
  }

  .floating-icon-4 {
    bottom: 30%;
    right: 5%;
  }

  /* Adjust floating icons for medium screens */
  .floating-icon {
    width: 100px;
    height: 100px;
  }
}
</style>
