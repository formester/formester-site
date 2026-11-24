<template>
  <div>
    <div class="container list-container d-flex">
      <div class="list-content w-100">
        <nav class="list-breadcrumb d-flex align-items-center gap-2" aria-label="Breadcrumb">
          <NuxtLink to="/" class="list-breadcrumb__link">Home</NuxtLink>
          <LucideIcon name="chevron-right" :size="13" />
          <span class="list-breadcrumb__current">Workflow Templates</span>
        </nav>

        <TemplateSearch
          placeholder="Expense approval, appointment reminder"
          aria-label="Search workflow templates"
          @searchInput="searchTerm = $event"
        />

        <h1 class="list-heading">Workflow Templates</h1>
        <p class="list-description">
          Ready workflows that run after someone fills in your form. Approvals, reminders, AI summaries and more.
        </p>
        <p class="list-crosslink">Looking for forms? <NuxtLink to="/templates/">Browse form templates</NuxtLink></p>

        <TemplateGrid :templates="shownTemplates" :view-more-step="isSearching ? itemsPerPage : 0">
          <template #card="{ template }">
            <TemplateCard
              :template="template"
              :to="workflowTemplateUrl(template.slug)"
              :use-url="workflowTemplateUseUrl(appUrl, template.slug)"
              :show-category-label="false"
            >
              <template #preview>
                <WorkflowStepIcons :step-types="template.stepTypes" />
              </template>
              <template v-if="template.categories.length" #tags>
                <FTag
                  v-for="category in template.categories"
                  :key="category.slug"
                  :to="`${WORKFLOW_TEMPLATES_PATH}/categories/${category.slug}/`"
                >
                  {{ category.name }}
                </FTag>
              </template>
            </TemplateCard>
          </template>
        </TemplateGrid>
      </div>

      <div class="list-sidebar">
        <TemplateCategories
          :template-categories="sidebarCategories"
          :base-path="WORKFLOW_TEMPLATES_PATH"
          all-label="All workflow templates"
        />
      </div>
    </div>

    <TemplatePagination
      v-if="totalPages > 1 && !isSearching"
      :base-path="WORKFLOW_TEMPLATES_PATH"
      :current-page="currentPage"
      :total-pages="totalPages"
    />
  </div>
</template>

<script setup>
import FTag from '@/components/UI/FTag.vue'
import TemplateCard from '@/components/template/TemplateCard.vue'
import TemplateCategories from '@/components/template/TemplateCategories.vue'
import TemplateGrid from '@/components/template/TemplateGrid.vue'
import TemplatePagination from '@/components/template/TemplatePagination.vue'
import TemplateSearch from '@/components/template/TemplateSearch.vue'
import WorkflowStepIcons from '@/components/workflow-template/WorkflowStepIcons.vue'
import {
  WORKFLOW_TEMPLATES_PATH,
  toSidebarCategories,
  workflowTemplateUrl,
  workflowTemplateUseUrl,
} from '@/utils/getWorkflowTemplates'

const props = defineProps({
  // Every listed template; the page shows its slice and searches all of them.
  templates: { type: Array, required: true },
  categories: { type: Array, required: true },
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  itemsPerPage: { type: Number, required: true },
})

const { appUrl } = useRuntimeConfig().public

const searchTerm = ref('')

const isSearching = computed(() => searchTerm.value.trim().length > 0)
const sidebarCategories = computed(() => toSidebarCategories(props.categories))

const pageTemplates = computed(() => {
  const start = (props.currentPage - 1) * props.itemsPerPage
  return props.templates.slice(start, start + props.itemsPerPage)
})

const matchesSearch = (template, term) =>
  template.name.toLowerCase().includes(term) || template.description?.toLowerCase().includes(term)

const shownTemplates = computed(() => {
  if (!isSearching.value) return pageTemplates.value

  const term = searchTerm.value.trim().toLowerCase()
  return props.templates.filter((template) => matchesSearch(template, term))
})
</script>

<style scoped>
.list-container {
  flex-direction: row-reverse;
  margin-top: 8rem;
}

.list-sidebar {
  position: sticky;
  top: 80px;
  align-self: flex-start;
  max-height: calc(100vh - 70px);
  min-width: 264px;
  margin-bottom: var(--space-6);
  padding: 0 var(--space-4) var(--space-6) 0;
  overflow-y: auto;
  border-right: 1px solid var(--border-light);
}

.list-content {
  margin-bottom: var(--space-6);
  padding-left: var(--space-12);
}

.list-breadcrumb {
  margin-bottom: var(--space-4);
  font-size: var(--fs-xs);
  line-height: var(--lh-sm);
  color: var(--fg-3);
}

.list-breadcrumb__link {
  color: var(--fg-3);
}

.list-breadcrumb__link:hover {
  color: var(--color-primary);
}

.list-breadcrumb__current {
  color: var(--fg-1);
  font-weight: var(--fw-medium);
}

.list-content :deep(.search-box) {
  max-width: 100%;
}

.list-heading {
  margin: var(--space-6) 0 var(--space-1);
  font-size: 32px;
  font-weight: var(--fw-semibold);
  line-height: 48px;
  letter-spacing: -0.64px;
  color: var(--fg-1);
}

.list-description {
  margin: 0 0 var(--space-1);
  font-size: var(--fs-md);
  line-height: var(--lh-md);
  color: var(--fg-2);
}

.list-crosslink {
  margin: 0 0 var(--space-5);
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  color: var(--fg-2);
}

.list-crosslink a {
  color: var(--color-primary);
  font-weight: var(--fw-medium);
}

@media only screen and (max-width: 900px) {
  .list-container {
    flex-direction: column;
    margin-top: 5rem;
  }

  .list-sidebar {
    position: static;
    max-height: none;
    min-width: 0;
    border-right: none;
  }

  .list-content {
    padding: 0;
    margin-top: var(--space-3);
  }
}
</style>
