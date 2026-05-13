<template>
  <section class="py-24 px-6 bg-gray-50 border-t border-gray-200">
    <div class="max-w-[1120px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.15fr] md:gap-20 items-start">

      <!-- Left: sticky panel -->
      <div class="md:sticky md:top-[90px]">
        <SectionBadge v-if="badge" :text="badge" class="mb-4" />
        <h2 class="text-[clamp(30px,3.2vw,44px)] font-bold leading-[1.08] tracking-[-0.03em] text-fg-1 mt-[14px] mb-0">
          {{ heading }}
        </h2>
        <p v-if="description" class="text-base leading-[1.6] text-fg-2 mt-[18px] mb-0 max-w-[400px]">
          {{ description }}
        </p>
        <div class="mt-7 flex flex-wrap gap-[10px] items-center">
          <FButton
            v-for="btn in buttons"
            :key="btn.id"
            :href="btn.link"
            :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
            size="lg"
          >{{ btn.text }}</FButton>
        </div>
      </div>

      <!-- Right: scrolling step cards -->
      <div class="flex flex-col gap-[18px]">
        <div
          v-for="(step, idx) in steps"
          :key="step.id || idx"
          class="grid grid-cols-[52px_1fr] gap-4 border border-gray-200 rounded-2xl bg-white p-[26px_28px] hover:bg-violet-25 transition-colors duration-[140ms]"
        >
          <span class="font-mono text-[12px] font-medium text-fg-muted pt-[3px]">
            {{ String(idx + 1).padStart(2, '0') }}
          </span>
          <div>
            <h3 class="text-xl font-semibold tracking-[-0.02em] text-fg-1 mb-2 mt-0">
              {{ step.title }}
            </h3>
            <p class="text-sm leading-[1.55] text-fg-2 mb-4 mt-0">
              {{ step.description }}
            </p>
            <div v-if="step.image?.url" class="rounded-lg overflow-hidden border border-gray-200">
              <img :src="step.image.url" :alt="step.title" class="w-full block" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

export default {
  name: 'AiBuilderSection',
  components: { FButton, SectionBadge },
  props: {
    badge:       { type: String, default: '' },
    heading:     { type: String, default: '' },
    description: { type: String, default: '' },
    buttons:     { type: Array,  default: () => [] },
    steps:       { type: Array,  default: () => [] },
  },
}
</script>
