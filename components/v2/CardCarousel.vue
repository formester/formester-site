<template>
  <section class="py-space-24 px-space-6 bg-gray-50">
    <div class="max-w-[1120px] mx-auto">

      <!-- Header -->
      <div class="text-center mb-space-16">
        <SectionBadge v-if="badge" :text="badge" class="justify-center mb-space-4" />
        <h2 class="section-heading text-fg-1">{{ heading }}</h2>
        <p v-if="description" class="text-fs-md text-fg-2 mt-space-4 max-w-[600px] mx-auto">{{ description }}</p>
      </div>

      <!-- Carousel -->
      <div class="relative px-space-7">
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
            <div class="bg-white border border-gray-100 rounded-r-2xl p-space-8 hover:shadow-md transition-shadow duration-[140ms] h-full">
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-r-xl flex items-center justify-center"
                :style="{ background: item.iconBg }"
              >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="item.icon" />
              </div>

              <!-- Category -->
              <h3 class="text-fg-1 font-bold text-fs-lg mt-space-4">{{ item.category }}</h3>

              <!-- Description -->
              <p class="text-fg-2 text-fs-sm leading-[1.6] mt-space-2">{{ item.description }}</p>
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
      <div v-if="cta" class="text-center mt-space-10">
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
})

const modules = [Navigation, Pagination, Autoplay]
</script>

<style scoped>
.section-heading {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: -0.5px;
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
  transform: translateY(calc(-50% - 24px)); /* offset for pagination below */
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

/* Hide default swiper nav arrows */
:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  display: none;
}

/* Pagination bullets */
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
