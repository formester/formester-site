<template>
  <section class="hero" @mousemove="handleMouseMove" ref="heroSection">
    <img
      src="/hero-assets/hero-shadow.svg"
      class="hero-shadow"
      alt=""
    />

    <!-- Floating Icons -->
    <div
      class="floating-icon floating-icon-1"
      :style="{
        transform: `translate(${iconPositions[0].x}px, ${iconPositions[0].y}px)`,
      }"
    >
      <img src="/hero-assets/floating-icon-1.svg" alt="Floating Icon" />
    </div>
    <div
      class="floating-icon floating-icon-2"
      :style="{
        transform: `translate(${iconPositions[1].x}px, ${iconPositions[1].y}px)`,
      }"
    >
      <img src="/hero-assets/floating-icon-2.svg" alt="Floating Icon" />
    </div>
    <div
      class="floating-icon floating-icon-3"
      :style="{
        transform: `translate(${iconPositions[2].x}px, ${iconPositions[2].y}px)`,
      }"
    >
      <img src="/hero-assets/floating-icon-3.svg" alt="Floating Icon" />
    </div>
    <div
      class="floating-icon floating-icon-4"
      :style="{
        transform: `translate(${iconPositions[3].x}px, ${iconPositions[3].y}px)`,
      }"
    >
      <img src="/hero-assets/floating-icon-4.svg" alt="Floating Icon" />
    </div>
    <div class="container horizontal__padding">
      <div
        class="d-flex flex-column align-items-center justify-content-center text-center my-5"
      >
        <div class="ai-badge">
          <span class="lightning-icon">⚡</span>
          <span>Explore our new AI features</span>
          <span class="arrow-icon">→</span>
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
          v-if="buttons && buttons.length"
          :href="buttons[0]?.link || '#'"
          class="btn button mt-4 mb-4 mb-md-5"
          :class="{
            hero__button: buttons[0]?.type === 'Primary',
            hero__invert__button: buttons[0]?.type === 'Secondary',
          }"
        >
          {{ buttons[0]?.text || 'Learn More' }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

      // Update icon positions with different movement factors for each icon
      this.iconPositions = [
        { x: mouseX * 0.02, y: mouseY * 0.03 },
        { x: mouseX * -0.03, y: mouseY * 0.02 },
        { x: mouseX * 0.04, y: mouseY * -0.02 },
        { x: mouseX * -0.02, y: mouseY * -0.03 },
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
    buttons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
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
  font-size: 14px;
  font-weight: 600;
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
  transition: transform 0.3s ease-out;
  width: 120px; /* Larger default size */
  height: 120px; /* Larger default size */
  pointer-events: none;
}

.floating-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.floating-icon-1 {
  top: 20%;
  left: 20%;
}

.floating-icon-2 {
  top: 25%;
  right: 20%;
}

.floating-icon-3 {
  bottom: 30%;
  left: 18%;
}

.floating-icon-4 {
  bottom: 30%;
  right: 18%;
}

@media (max-width: 992px) {
  .hero {
    padding-top: 100px;
    padding-bottom: 64px;
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

@media (max-width: 500px) {
  .hero {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .floating-icon {
    display: none;
  }
}

@media (max-width: 1440px) {
  .floating-icon-1 {
    top: 20%;
    left: 20%;
  }

  .floating-icon-2 {
    top: 25%;
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
}

@media (max-width: 1024px) {
  .floating-icon-1 {
    top: 20%;
    left: 20%;
  }

  .floating-icon-2 {
    top: 25%;
    right: 15%;
  }

  .floating-icon-3 {
    bottom: 40%;
    left: 5%;
  }

  .floating-icon-4 {
    bottom: 40%;
    right: 5%;
  }

  /* Adjust floating icons for medium screens */
  .floating-icon {
    width: 100px;
    height: 100px;
  }
}
</style>
