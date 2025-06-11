<template>
  <section class="container">
    <div class="row justify-content-center align-items-center text-center mb-5">
      <SectionTitle :heading="title" />
    </div>
    <div class="carousel-wrapper">
      <button class="carousel-arrow left" @click="scrollLeft" aria-label="Scroll left">
        <img src="/arrow-left.svg" alt="Previous" class="arrow-icon" />
      </button>
      <div class="carousel-container">
        <div class="carousel" :style="carouselStyle">
          <UsecaseCard
            v-for="(uc, idx) in visibleUsecases"
            :key="uc.id + '-' + idx"
            :title="uc.title"
            :description="uc.description"
            :image="uc.image"
            class="carousel-card"
            :class="{
              'slide-in-right': isSliding && slideDirection === 'right',
              'slide-in-left': isSliding && slideDirection === 'left'
            }"
          />
        </div>
      </div>
      <button class="carousel-arrow right" @click="scrollRight" aria-label="Scroll right">
        <img src="/arrow-right.svg" alt="Next" class="arrow-icon" />
      </button>
    </div>
  </section>
</template>

<script>
import UsecaseCard from './UsecaseCard.vue';
import SectionTitle from '~/components/SectionTitle.vue';

export default {
  name: 'Usecases',
  components: { UsecaseCard, SectionTitle },
  props: {
    title: {
      type: Array,
      default: () => [],
    },
    usecase: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      currentIndex: 0,
      cardsPerView: 1,
      isSliding: false,
      slideDirection: 'right' // 'left' or 'right'
    };
  },
  computed: {
    visibleUsecases() {
      // Show cards from currentIndex to currentIndex + cardsPerView
      // Handle wrapping around the end of the array
      const result = [];
      for (let i = 0; i < this.cardsPerView; i++) {
        const index = (this.currentIndex + i) % this.usecase.length;
        result.push(this.usecase[index]);
      }
      return result;
    },
    carouselStyle() {
      return {
        '--cards-per-view': this.cardsPerView
      };
    }
  },
  mounted() {
    this.updateCardsPerView();
    window.addEventListener('resize', this.updateCardsPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateCardsPerView);
  },
  methods: {
    updateCardsPerView() {
      const width = window.innerWidth;
      if (width < 768) {
        this.cardsPerView = 1;
      } else if (width < 992) {
        this.cardsPerView = 2;
      } else if (width < 1440) {
        this.cardsPerView = 3;
      } else {
        this.cardsPerView = 4;
      }
    },
    scrollLeft() {
      if (this.isSliding) return; // Prevent multiple clicks during animation
      
      // Set direction and trigger animation
      this.slideDirection = 'left';
      this.isSliding = true;
      
      // Update the index immediately for seamless transition
      this.currentIndex = (this.currentIndex - 1 + this.usecase.length) % this.usecase.length;
      
      // Reset sliding state after animation completes
      setTimeout(() => {
        this.isSliding = false;
      }, 400); // Match animation duration
    },
    
    scrollRight() {
      if (this.isSliding) return; // Prevent multiple clicks during animation
      
      // Set direction and trigger animation
      this.slideDirection = 'right';
      this.isSliding = true;
      
      // Update the index immediately for seamless transition
      this.currentIndex = (this.currentIndex + 1) % this.usecase.length;
      
      // Reset sliding state after animation completes
      setTimeout(() => {
        this.isSliding = false;
      }, 400); // Match animation duration
    }
  }
} 
</script>

<style scoped>
.container {
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 16px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.carousel-container {
  width: 100%;
  padding: 8px 0;
}
.carousel {
  display: flex;
  gap: 24px;
  width: 100%;
  padding: 8px;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.carousel-card {
  flex: 0 0 calc((100% - (24px * (var(--cards-per-view) - 1))) / var(--cards-per-view));
  max-width: calc((100% - (24px * (var(--cards-per-view) - 1))) / var(--cards-per-view));
  box-sizing: border-box;
  transition: all 0.4s ease;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  display: block;
}
.carousel-arrow:hover .arrow-icon {
  filter: brightness(0.8);
}
.carousel-arrow:hover {
  background: #f9fafb;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel-arrow {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #475467;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(16, 24, 40, 0.08);
  z-index: 2;
  transition: background 0.2s;
}
.carousel-arrow:hover {
  background: #f3f4f6;
}
.carousel-arrow.left {
  margin-right: 12px;
}
.carousel-arrow.right {
  margin-left: 12px;
}
@media screen and (max-width: 768px) {
  .container {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .carousel {
    max-width: 100vw;
  }
}

/* Slide animations with improved transitions */
@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInFromRight 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.slide-in-left {
  animation: slideInFromLeft 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
</style>
