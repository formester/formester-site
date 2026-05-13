<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">

        <!-- Left: heading + CTA -->
        <div class="lg:w-[38%] flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
          <!-- Badge -->
          <div v-if="badge" class="flex items-center gap-2 mb-5">
            <span class="block w-5 h-px bg-violet-500"></span>
            <span class="text-violet-500 text-fs-sm font-semibold tracking-wide">{{ badge }}</span>
          </div>

          <h2 class="font-bold leading-tight text-fg-1 mb-4" style="font-size: clamp(28px, 3.5vw, 44px)">
            {{ heading }}
          </h2>

          <p v-if="description" class="text-fg-2 text-fs-md leading-lh-lg mb-8">
            {{ description }}
          </p>

          <FButton v-if="ctaButton" variant="secondary" size="lg" :href="ctaButton.link"
            class="inline-flex items-center gap-2 px-5 py-[10px] rounded-full border border-gray-300 text-fg-1 text-fs-sm font-medium hover:bg-gray-100 transition-colors duration-150 no-underline">
            {{ ctaButton.text }}
            <span aria-hidden="true">
              <ArrowRightIcon class="w-4 h-4" />
            </span>
          </FButton>
        </div>

        <!-- Right: accordion -->
        <div class="flex-1 min-w-0">
          <div v-for="item in faqs" :key="item.id" class="border-b border-gray-200" style="border-bottom-style: solid;">
            <button @click="toggle(item.id)"
              class="flex w-full items-center justify-between py-3 text-left gap-4 bg-transparent border-0 cursor-pointer px-0">
              <span class="font-semibold text-fg-1 text-[15px] leading-snug">
                {{ item.question }}
              </span>

              <!-- Filled violet × when open, outlined gray + when closed -->
              <span
                class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-150"
                :class="openId === item.id
                  ? 'bg-violet-500 text-white'
                  : 'border border-gray-300 text-fg-muted'">
                <icons-close-icon v-if="openId === item.id" />
                <icons-plus-icon v-else />
              </span>
            </button>

            <div v-show="openId === item.id" class="pb-3 text-fg-2 text-fs-sm leading-lh-lg pr-12">
              {{ item.answer }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import FButton from '../UI/FButton.vue'

defineProps({
  badge: { type: String, default: null },
  heading: { type: String, required: true },
  description: { type: String, default: null },
  faqs: { type: Array, required: true },
  ctaButton: { type: Object, default: null },
})

const openId = ref(null)
const toggle = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>