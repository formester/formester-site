<template>
  <section class="container">
    <div class="row justify-content-center align-items-center text-center mb-5">
      <SectionTitle :heading="title" />
      <p>Learn how Formester can help your business.</p>
    </div>
    <div class="carousel-outer-wrapper">
      <VueSlickCarousel
        ref="slick"
        :arrows="true"
        :dots="true"
        :infinite="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :slidesToShow="3"
        :responsive="slickResponsive"
        @afterChange="handleAfterChange"
      
        @beforeChange="handleBeforeChange"
      >
        <template #prevArrow>
          <button class="carousel-arrow left desktop-arrow" @click="goToPrev" aria-label="Scroll left">
            <img src="/arrow-left.svg" alt="Previous" class="arrow-icon" />
          </button>
        </template>
        <template #nextArrow>
          <button class="carousel-arrow right desktop-arrow" @click="goToNext" aria-label="Scroll right">
            <img src="/arrow-right.svg" alt="Next" class="arrow-icon" />
          </button>
        </template>
        <div
          v-for="(uc, idx) in usecase"
          :key="uc.id + '-' + idx"
          class="carousel-slide-inner"
        >
          <UsecaseCard
            :title="uc.title"
            :description="uc.description"
            :image="uc.image"
            :class="['carousel-card', { scaled: isCenter(idx) }]"
          />
        </div>
      </VueSlickCarousel>
      <!-- Mobile arrows container for <=768px -->
      <div class="mobile-arrows-container">
        <button class="carousel-arrow left" @click="goToPrev" aria-label="Scroll left">
          <img src="/arrow-left.svg" alt="Previous" class="arrow-icon" />
        </button>
        <button class="carousel-arrow right" @click="goToNext" aria-label="Scroll right">
          <img src="/arrow-right.svg" alt="Next" class="arrow-icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import UsecaseCard from './UsecaseCard.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Usecases',
  components: { VueSlickCarousel, UsecaseCard, SectionTitle },
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
      currentSlide: 0,
      slickResponsive: [
        {
          breakpoint: 1440,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    };
  },
  methods: {
    handleBeforeChange(oldIndex, newIndex) {
      this.currentSlide = newIndex;
    },
    isCenter(idx) {
      // Only apply scaling if width >= 991px
      if (typeof window !== 'undefined' && window.innerWidth < 991) return false;
      let centerIdx = (this.currentSlide + 1) % this.usecase.length;
      if (this.usecase.length < 3) return idx === this.currentSlide;
      return idx === centerIdx;
    },
    goToPrev() {
      this.$refs.slick && this.$refs.slick.prev();
    },
    goToNext() {
      this.$refs.slick && this.$refs.slick.next();
    }
  }
}
</script>

<style scoped>

:deep(.slick-list) {
  overflow: hidden !important;
  padding-bottom: 32px !important;
  padding-top: 32px !important;
}
@media (max-width: 992px) {
  :deep(.slick-list) {
    padding-top: 16px !important;
  }
}

.slick-track {
  align-items: center !important;
}

.carousel-slide-inner {
  padding: 0 16px;
  box-sizing: border-box;
}
@media (max-width: 992px) {
  .carousel-slide-inner { padding: 0 12px; }
}
@media (max-width: 768px) {
  .carousel-slide-inner { padding: 0 6px; }
}


/* Disable default slick arrow styling from vue-slick-carousel */
.slick-arrow:not(.carousel-arrow) {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  width: auto !important;
  height: auto !important;
  padding: 0 !important;
  color: inherit !important;
  position: static !important;
}


.carousel-arrow.carousel-arrow.right::before
{
  display: none !important;
  content: none !important;
}

.carousel-arrow.carousel-arrow.left::before
{
  display: none !important;
  content: none !important;
}

.container {
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}

.carousel-outer-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.carousel-card.scaled {
  transform: scale(1.08);
  box-shadow: 0 6px 32px 0 rgba(16, 24, 40, 0.10);
  z-index: 2;
  margin-top: -2.5%;
  margin-bottom: -2.5%;
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
  flex-shrink: 0;
  flex-grow: 0;
  box-sizing: border-box;
  padding: 0;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  display: block;
  margin: 0;
  flex-shrink: 0;
  flex-grow: 0;
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
  .desktop-arrow {
    display: none;
  }
  .mobile-arrows-container {
    display: flex;
  }
  .carousel-arrow {
    width: 64px;
    height: 64px;
  }
  .arrow-icon {
    width: 24px;
    height: 24px;
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
.mobile-arrows-container {
  display: none;
  width: 100%;
  justify-content: center;
  margin-top: 64px;
  gap: 16px;
}
@media screen and (max-width: 768px) {
  .desktop-arrow {
    display: none;
  }
  .mobile-arrows-container {
    display: flex;
  }
  .carousel-arrow {
    width: 64px;
    height: 64px;
  }
  .arrow-icon {
    width: 24px;
    height: 24px;
  }
}

:deep(.slick-dots) {
  display: flex !important;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
  list-style: none;
}

:deep(.slick-dots li) {
  margin: 0;
  padding: 0;
}

:deep(.slick-dots button) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e5e7eb;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  font-size: 0;         /* Hide any number/text */
  color: transparent;   /* Hide any number/text */
  outline: none;        /* Remove focus ring */
  box-shadow: none;     /* Remove native shadow */
}

:deep(.slick-dots button:before) {
  display: none !important; /* Hide Slick's default dot pseudo-element */
}

:deep(.slick-dots .slick-active button) {
  background: #6434D0; /* Your brand color */
  transform: scale(1.25);
}

</style>
