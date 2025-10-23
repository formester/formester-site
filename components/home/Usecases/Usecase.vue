<template>
  <section class="usecases-section">
    <div class="container">
      <div class="section-header">
        <SectionTitle :heading="title" />
        <p class="section-description">Learn how Formester can help your business.</p>
      </div>

      <div class="carousel-wrapper">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            768: { slidesPerView: 1, spaceBetween: 0, centeredSlides: true },
            992: { slidesPerView: 2, spaceBetween: 16, centeredSlides: false },
            1200: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
          }"
          :centered-slides="true"
          class="usecases-swiper"
        >
          <SwiperSlide v-for="(uc, idx) in usecase" :key="uc.id + '-' + idx">
            <UsecaseCard
              :title="uc.title"
              :description="uc.description"
              :image="uc.image"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Buttons -->
        <button class="swiper-button-prev custom-nav" aria-label="Previous slide">
          <img src="/arrow-left.svg" alt="Previous" />
        </button>
        <button class="swiper-button-next custom-nav" aria-label="Next slide">
          <img src="/arrow-right.svg" alt="Next" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import UsecaseCard from './UsecaseCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'Usecases',
  components: { Swiper, SwiperSlide, UsecaseCard, SectionTitle },
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
      modules: [Navigation, Pagination, Autoplay]
    }
  }
}
</script>

<style scoped>
.usecases-section {
  padding: 96px 0;
  background: #fff;
}

@media (max-width: 768px) {
  .usecases-section {
    padding: 64px 0;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

@media (max-width: 992px) {
  .section-header {
    margin-bottom: 32px;
  }
}

.section-description {
  font-size: 16px;
  color: #667085;
  margin-top: 12px;
}

.carousel-wrapper {
  position: relative;
  padding: 32px 60px;
}

@media (max-width: 992px) {
  .carousel-wrapper {
    padding: 24px 40px;
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 24px 0;
  }
}

/* Swiper Overrides */
.usecases-swiper {
  padding: 16px 0 48px;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .usecases-swiper {
    padding: 16px 0 56px;
  }
  
  :deep(.swiper-wrapper) {
    align-items: center;
  }
  
  :deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Custom Navigation Buttons */
.custom-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.08);
}

.custom-nav:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  box-shadow: 0 4px 12px rgba(16, 24, 40, 0.12);
}

.custom-nav:active {
  transform: translateY(-50%) scale(0.95);
}

.custom-nav.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}

.custom-nav img {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .custom-nav {
    display: none;
  }
}

/* Hide default Swiper buttons */
:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  display: none;
}

/* Custom Pagination */
:deep(.swiper-pagination) {
  bottom: 0 !important;
  display: flex;
  justify-content: center;
  gap: 8px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #d1d5db;
  opacity: 1;
  transition: all 0.3s ease;
  margin: 0 !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: #6434d0;
  transform: scale(1.2);
}

:deep(.swiper-pagination-bullet:hover) {
  background: #9ca3af;
}
</style>
