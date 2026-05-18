<template>
  <section class="cc-section">
    <div class="cc-inner">

      <!-- Header -->
      <div class="cc-header">
        <SectionBadge v-if="badge" :text="badge" class="cc-badge" />
        <h2 class="section-heading">{{ heading }}</h2>
        <p v-if="description" class="cc-description">{{ description }}</p>
      </div>

      <!-- Carousel -->
      <div class="cc-viewport">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :pagination="{ clickable: true, dynamicBullets: false }"
          :navigation="{ nextEl: '.cc-btn-next', prevEl: '.cc-btn-prev' }"
          :breakpoints="{
            640:  { slidesPerView: 1.3 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }"
          class="cc-swiper"
        >
          <SwiperSlide v-for="item in usecases" :key="item.id">
            <div class="cc-card">
              <!-- Icon -->
              <div class="cc-icon" :style="{ background: item.iconBg }">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="item.icon" />
              </div>

              <!-- Category -->
              <h3 class="cc-category">{{ item.category }}</h3>

              <!-- Description -->
              <p class="cc-desc">{{ item.description }}</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Nav buttons -->
        <button class="cc-btn-prev cc-nav" aria-label="Previous card">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 13L7 9l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="cc-btn-next cc-nav" aria-label="Next card">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 5l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <!-- CTA -->
      <div v-if="cta" class="cc-cta">
        <FButton variant="secondary" :href="cta.link">{{ cta.text }}</FButton>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionBadge from '@/components/UI/SectionBadge.vue'
import FButton from '@/components/UI/FButton.vue'

defineProps({
  badge:       { type: String, default: '' },
  heading:     { type: String, default: '' },
  description: { type: String, default: '' },
  cta:         { type: Object, default: null },
  usecases:    { type: Array,  default: () => [] },
  background:  { type: String, default: '' },
})

const modules = [Navigation, Pagination, Autoplay]
</script>

<style scoped>
.cc-section {
  padding: var(--space-24) var(--space-6);
  background: v-bind(background);
}

.cc-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.cc-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.cc-badge {
  justify-content: center;
  margin-bottom: var(--space-4);
}

.section-heading {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: var(--fg-1);
}

.cc-description {
  font-size: var(--fs-md);
  color: var(--fg-2);
  margin-top: var(--space-4);
  max-width: 600px;
  margin-inline: auto;
}

.cc-viewport {
  position: relative;
  padding-inline: var(--space-7);
}

.cc-card {
  background: #fff;
  border: 1px solid var(--gray-100);
  border-radius: var(--r-2xl);
  padding: var(--space-8);
  height: 100%;
  transition: box-shadow 140ms;
}

.cc-card:hover {
  box-shadow: var(--shadow-md);
}

.cc-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: var(--r-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cc-category {
  color: var(--fg-1);
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  margin-top: var(--space-4);
}

.cc-desc {
  color: var(--fg-2);
  font-size: var(--fs-sm);
  line-height: 1.6;
  margin-top: var(--space-2);
}

.cc-cta {
  text-align: center;
  margin-top: var(--space-10);
}

.cc-swiper {
  padding-bottom: 48px;
}

:deep(.swiper-slide) {
  height: auto;
}

/* Nav buttons */
.cc-nav {
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 24px));
  width: 36px;
  height: 36px;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: var(--fg-2);
  transition: all 0.2s ease;
  padding: 0;
}

.cc-nav:hover {
  background: var(--bg-grey-25);
  color: var(--fg-1);
  border-color: var(--border-dark);
}

.cc-btn-prev { left: 0; }
.cc-btn-next { right: 0; }

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  display: none;
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
  display: flex;
  justify-content: center;
  gap: 8px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: var(--gray-200, #e5e7eb);
  opacity: 1;
  transition: all 0.3s ease;
  margin: 0 !important;
}

:deep(.swiper-pagination-bullet-active) {
  width: 24px;
  border-radius: 4px;
  background: var(--violet-500, #6434d0);
}

@media (max-width: 640px) {
  .cc-nav { display: none; }
}
</style>
