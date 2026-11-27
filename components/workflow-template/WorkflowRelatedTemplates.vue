<template>
  <div class="related">
    <h2 class="related__heading">Related Templates</h2>
    <TemplateGrid :templates="relatedTemplates">
      <template #card="{ template }">
        <WorkflowTemplateCard :template="template" />
      </template>
    </TemplateGrid>
  </div>
</template>

<script setup>
import TemplateGrid from '@/components/template/TemplateGrid.vue'
import WorkflowTemplateCard from '@/components/workflow-template/WorkflowTemplateCard.vue'

defineProps({
  // Cards in the list's shape, categories with names, e.g. [{slug: "leave-request-approval", name: "Leave request approval", categories: [...]}]
  relatedTemplates: { type: Array, required: true },
})
</script>

<style scoped>
.related {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-10) var(--space-6);
}

.related__heading {
  margin-bottom: var(--space-8);
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: var(--fw-bold);
  line-height: 1.25;
  color: var(--fg-1);
}

@media (max-width: 640px) {
  .related {
    padding: var(--space-8) var(--space-4);
  }
}
</style>
