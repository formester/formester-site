<template>
  <section
    class="py-space-24 px-space-6 bg-white border-t border-gray-200"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <div class="max-w-[1120px] mx-auto">

      <!-- Header row: badge + heading left, nav buttons right -->
      <div class="flex items-end justify-between mb-space-12">
        <div>
          <SectionBadge v-if="badge" :text="badge" class="mb-space-3" />
          <h2 class="testi-heading text-fg-1">{{ heading }}</h2>
        </div>
        <div class="flex gap-space-3 shrink-0">
          <button
            class="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer bg-gray-100 text-fg-strong hover:bg-gray-200 transition-colors border-0"
            aria-label="Previous testimonial"
            @click="prev"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 13L7 9l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button
            class="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer bg-violet-500 text-white hover:bg-violet-600 transition-colors border-0"
            aria-label="Next testimonial"
            @click="next"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 5l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel viewport -->
      <div class="overflow-hidden">
        <div
          class="flex"
          :class="isSnapping ? '' : 'transition-transform duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]'"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          @transitionend="handleTransitionEnd"
        >
          <div
            v-for="(t, idx) in clonedSlides"
            :key="idx"
            class="min-w-full"
          >
            <div class="bg-gray-50 border border-gray-200 rounded-r-2xl p-space-8 flex flex-col gap-space-4 hover:shadow-lg transition-shadow duration-[140ms] max-w-[800px] mx-auto">

              <!-- Decorative opening quote -->
              <div class="font-display text-[72px] leading-none text-violet-500 opacity-25 -mb-space-2">"</div>

              <!-- Review text -->
              <p class="text-fs-sm text-fg-strong leading-[1.7] flex-1">{{ t.review || t.quote }}</p>

              <!-- Author -->
              <div class="flex items-center gap-space-3 pt-space-4 border-t border-gray-200">
                <img
                  v-if="t.image?.url || t.authorImage?.url"
                  :src="t.image?.url || t.authorImage?.url"
                  :alt="t.authorName || t.name"
                  class="w-10 h-10 rounded-r-half object-cover shrink-0"
                />
                <div
                  v-else
                  class="w-10 h-10 rounded-r-half bg-violet-50 text-violet-500 font-bold text-fs-md flex items-center justify-center shrink-0"
                >
                  {{ (t.authorName || t.name || '?')[0] }}
                </div>
                <div>
                  <div class="text-fs-sm font-bold text-fg-1">{{ t.authorName || t.name }}</div>
                  <div class="text-fs-xs text-fg-2">{{ t.authorDesignation || t.designation }}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Slide indicator dots -->
      <div class="flex justify-center gap-space-2 mt-space-8">
        <button
          v-for="(_, idx) in testimonials"
          :key="idx"
          class="h-2 rounded-full border-0 p-0 cursor-pointer transition-all duration-300"
          :class="activeIndex === idx ? 'w-6 bg-violet-500' : 'w-2 bg-gray-200'"
          :aria-label="`Go to slide ${idx + 1}`"
          @click="goTo(idx + 1)"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const props = defineProps({
  badge:        { type: String, default: '' },
  heading:      { type: String, default: '' },
  testimonials: { type: Array,  default: () => [] },
})

const currentIndex = ref(1)
const isSnapping = ref(false)
let timer = null

const clonedSlides = computed(() => {
  if (!props.testimonials.length) return []
  return [
    props.testimonials[props.testimonials.length - 1],
    ...props.testimonials,
    props.testimonials[0],
  ]
})

const activeIndex = computed(() => {
  const len = props.testimonials.length
  if (currentIndex.value === 0) return len - 1
  if (currentIndex.value === len + 1) return 0
  return currentIndex.value - 1
})

const next = () => { currentIndex.value++ }
const prev = () => { currentIndex.value-- }
const goTo = (idx) => { currentIndex.value = idx }

const handleTransitionEnd = async () => {
  const len = props.testimonials.length
  if (currentIndex.value === 0) {
    isSnapping.value = true
    currentIndex.value = len
    await nextTick()
    isSnapping.value = false
  } else if (currentIndex.value === len + 1) {
    isSnapping.value = true
    currentIndex.value = 1
    await nextTick()
    isSnapping.value = false
  }
}

const stopAutoPlay = () => {
  if (timer) { clearInterval(timer); timer = null }
}

const startAutoPlay = () => {
  timer = setInterval(() => next(), 4000)
}

const pause  = () => stopAutoPlay()
const resume = () => startAutoPlay()

onMounted(() => startAutoPlay())
onBeforeUnmount(() => stopAutoPlay())
</script>

<style scoped>
.testi-heading {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: -0.5px;
  max-width: 480px;
}
</style>
