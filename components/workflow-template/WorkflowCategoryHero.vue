<template>
  <div class="hero">
    <div class="hero__text">
      <h1 class="hero__heading">{{ category.name }} Workflow Templates</h1>
      <p class="hero__description" :class="{ 'hero__description--clamped': isLong && !expanded }">
        {{ description }}
      </p>
      <button v-if="isLong" type="button" class="hero__toggle" @click="expanded = !expanded">
        {{ expanded ? 'Show less' : 'Show more' }}
      </button>
    </div>
    <WorkflowCategoryIllustration class="hero__art" :category="category.slug" :count="count" />
  </div>
</template>

<script setup>
import WorkflowCategoryIllustration from '@/components/workflow-template/WorkflowCategoryIllustration.vue'

// About four lines of the hero column; a longer description folds behind Show more.
const CLAMP_LENGTH = 240

const props = defineProps({
  // e.g. {slug: "approvals", name: "Approvals", description: "Approval workflows send each response..."}
  category: { type: Object, required: true },
  count: { type: Number, required: true },
})

const expanded = ref(false)

const description = computed(
  () =>
    props.category.description ||
    `Ready ${props.category.name.toLowerCase()} workflows that run after someone fills in your form. Copy one into Formester, link it to your form and publish.`
)
const isLong = computed(() => description.value.length > CLAMP_LENGTH)
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  margin-bottom: var(--space-6);
}

.hero__text {
  max-width: 440px;
}

.hero__heading {
  margin: 0 0 var(--space-4);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: -0.72px;
  color: var(--fg-1);
}

.hero__description {
  margin: 0;
  font-size: var(--fs-md);
  line-height: 1.65;
  color: var(--fg-2);
}

.hero__description--clamped {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.hero__toggle {
  margin-top: var(--space-2);
  padding: 0;
  border: none;
  background: none;
  font-size: var(--fs-sm);
  color: var(--color-primary);
  text-decoration: underline;
}

@media only screen and (max-width: 1100px) {
  .hero__art {
    display: none;
  }

  .hero__text {
    max-width: none;
  }
}
</style>
