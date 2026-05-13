<template>
  <section class="py-20 bg-[#f7f7f8] border-t border-gray-100 overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="text-center mb-14">
        <SectionBadge v-if="badge" :text="badge" class="mb-4" />
        <h2 class="text-[clamp(28px,3.5vw,42px)] font-extrabold text-[#1a1a2e] leading-tight tracking-tight mb-4">
          {{ heading }}
        </h2>
        <p v-if="description" class="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- Row 1 — starts left, scrolls left -->
    <div class="relative mb-4 carousel-fade">
      <div class="flex gap-2 sm:gap-3 carousel-row carousel-left" style="width: max-content;">
        <template v-for="pass in 2" :key="`r1-p${pass}`">
          <template v-for="(item, i) in allItems" :key="`r1-p${pass}-${i}`">
            <div v-if="item.isMore"
              class="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-white border border-violet-200 rounded-full whitespace-nowrap cursor-default">
              <span class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 text-sm sm:text-base font-bold flex-shrink-0">+</span>
              <span class="text-xs sm:text-sm font-semibold text-violet-600">{{ item.name }}</span>
            </div>
            <div v-else
              class="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-white border border-gray-200 rounded-full whitespace-nowrap hover:border-violet-200 hover:shadow-sm transition-all duration-150 cursor-default">
              <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.imageAlt || item.name"
                class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl object-contain flex-shrink-0" />
              <span v-else class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0"
                :style="{ background: getColor(i) }">
                {{ getInitials(item.name || item.imageAlt) }}
              </span>
              <span class="text-xs sm:text-sm font-semibold text-gray-800">{{ item.name || item.imageAlt }}</span>
            </div>
          </template>
        </template>
      </div>
    </div>

    <!-- Row 2 — starts right, scrolls right -->
    <div class="relative mb-14 carousel-fade">
      <div class="flex gap-2 sm:gap-3 carousel-row carousel-right" style="width: max-content;">
        <template v-for="pass in 2" :key="`r2-p${pass}`">
          <template v-for="(item, i) in allItems" :key="`r2-p${pass}-${i}`">
            <div v-if="item.isMore"
              class="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-white border border-violet-200 rounded-full whitespace-nowrap cursor-default">
              <span class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 text-sm sm:text-base font-bold flex-shrink-0">+</span>
              <span class="text-xs sm:text-sm font-semibold text-violet-600">{{ item.name }}</span>
            </div>
            <div v-else
              class="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-white border border-gray-200 rounded-full whitespace-nowrap hover:border-violet-200 hover:shadow-sm transition-all duration-150 cursor-default">
              <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.imageAlt || item.name"
                class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl object-contain flex-shrink-0" />
              <span v-else class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0"
                :style="{ background: getColor(i) }">
                {{ getInitials(item.name || item.imageAlt) }}
              </span>
              <span class="text-xs sm:text-sm font-semibold text-gray-800">{{ item.name || item.imageAlt }}</span>
            </div>
          </template>
        </template>
      </div>
    </div>

    <div v-if="cta?.link" class="text-center">
      <FButton :href="cta.link" variant="ghost" size="md">
        {{ cta.text || 'Browse all integrations' }} →
      </FButton>
    </div>
  </section>
</template>

<script>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const PALETTE = [
  '#67B9F0', '#FF4A00', '#635BFF', '#FFD60A',
  '#0F9D58', '#137333', '#0078D4', '#003087',
  '#5865F2', '#5E6AD2', '#F06A6A', '#0052CC',
  '#E91E63', '#FF6B35', '#00BCD4', '#8BC34A',
]

export default {
  name: 'IntegrationsCarousel',
  components: { FButton, SectionBadge },
  props: {
    badge: { type: String, default: '' },
    heading: { type: String, default: '' },
    description: { type: String, default: '' },
    integrations: { type: Array, default: () => [] },
    cta: { type: Object, default: () => null },
  },
  computed: {
    allItems() {
      const items = [...this.integrations]
      const insertAt = Math.min(Math.floor(items.length / 2), items.length)
      return items
    },
  },
  methods: {
    getInitials(name) {
      if (!name) return '??'
      const words = name.trim().split(/\s+/)
      return words.length >= 2
        ? (words[0][0] + words[1][0]).toUpperCase()
        : name.slice(0, 2).toUpperCase()
    },
    getColor(index) {
      return PALETTE[index % PALETTE.length]
    },
  },
}
</script>

<style scoped>
@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.carousel-row {
  will-change: transform;
}

.carousel-left {
  animation: scrollLeft 60s linear infinite;
}

.carousel-right {
  animation: scrollRight 50s linear infinite;
}

.carousel-left:hover,
.carousel-right:hover {
  animation-play-state: paused;
}

.carousel-fade {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}
</style>
