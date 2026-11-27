<template>
  <FTag v-for="category in shownTags" :key="category.slug" :to="workflowCategoryUrl(category.slug)">
    {{ category.name }}
  </FTag>
  <FTag v-if="hiddenTags.length" :title="hiddenTagNames">+{{ hiddenTags.length }} more</FTag>
</template>

<script setup>
import FTag from '@/components/UI/FTag.vue'
import { workflowCategoryUrl } from '@/utils/getWorkflowTemplates'

// More tags than this collapse into a "+N more" chip, so cards keep one height and the hero stays short.
const MAX_TAGS = 3

const props = defineProps({
  // e.g. [{slug: "approvals", name: "Approvals"}]
  categories: { type: Array, required: true },
})

const shownTags = computed(() => props.categories.slice(0, MAX_TAGS))
const hiddenTags = computed(() => props.categories.slice(MAX_TAGS))
const hiddenTagNames = computed(() => hiddenTags.value.map((category) => category.name).join(', '))
</script>
