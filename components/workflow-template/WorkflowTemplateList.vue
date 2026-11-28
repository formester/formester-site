<template>
  <div>
    <div class="container list-container d-flex">
      <div class="list-content w-100">
        <nav class="list-breadcrumb d-flex align-items-center gap-2" aria-label="Breadcrumb">
          <NuxtLink to="/" class="list-breadcrumb__link">Home</NuxtLink>
          <LucideIcon name="chevron-right" :size="13" />
          <template v-if="activeCategory">
            <NuxtLink :to="`${WORKFLOW_TEMPLATES_PATH}/`" class="list-breadcrumb__link">Workflow Templates</NuxtLink>
            <LucideIcon name="chevron-right" :size="13" />
            <span class="list-breadcrumb__current">{{ activeCategory.name }}</span>
          </template>
          <span v-else class="list-breadcrumb__current">Workflow Templates</span>
        </nav>

        <template v-if="activeCategory">
          <WorkflowCategoryHero :category="activeCategory" :count="templates.length" />
          <div class="list-category-search">
            <TemplateSearch
              :placeholder="`Search ${templates.length} ${activeCategory.name} workflow templates`"
              :aria-label="`Search ${activeCategory.name} workflow templates`"
              @searchInput="searchTerm = $event"
            />
          </div>
        </template>
        <template v-else>
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
        </template>

        <TemplateGrid :templates="shownTemplates" :view-more-step="viewMoreStep">
          <template #card="{ template }">
            <WorkflowTemplateCard :template="template" heading-tag="h2" />
          </template>
        </TemplateGrid>

        <!-- Sections after the grid, such as a category's FAQ and the CTA band. -->
        <slot />
      </div>

      <div class="list-sidebar">
        <TemplateCategories
          :template-categories="sidebarCategories"
          :active-category="activeCategory"
          :base-path="WORKFLOW_TEMPLATES_PATH"
          all-label="All workflow templates"
        />
      </div>
    </div>

    <TemplatePagination
      v-if="totalPages > 1 && !isSearching && !activeCategory"
      :base-path="WORKFLOW_TEMPLATES_PATH"
      :current-page="currentPage"
      :total-pages="totalPages"
    />
  </div>
</template>

<script setup>
import TemplateCategories from '@/components/template/TemplateCategories.vue'
import TemplateGrid from '@/components/template/TemplateGrid.vue'
import TemplatePagination from '@/components/template/TemplatePagination.vue'
import TemplateSearch from '@/components/template/TemplateSearch.vue'
import WorkflowCategoryHero from '@/components/workflow-template/WorkflowCategoryHero.vue'
import WorkflowTemplateCard from '@/components/workflow-template/WorkflowTemplateCard.vue'
import { WORKFLOW_TEMPLATES_PATH, toSidebarCategories } from '@/utils/getWorkflowTemplates'

const props = defineProps({
  // Every listed template (a category page: the category's); the page shows its slice and searches all of them.
  templates: { type: Array, required: true },
  categories: { type: Array, required: true },
  currentPage: { type: Number, default: 1 },
  totalPages: { type: Number, default: 1 },
  itemsPerPage: { type: Number, required: true },
  // The category page's category, e.g. {slug: "approvals", name: "Approvals", description: "..."}; null on the index.
  activeCategory: { type: Object, default: null },
})

const searchTerm = ref('')

const isSearching = computed(() => searchTerm.value.trim().length > 0)
const sidebarCategories = computed(() => toSidebarCategories(props.categories))

const pageTemplates = computed(() => {
  // A category page is one page; View More reveals the rest.
  if (props.activeCategory) return props.templates

  const start = (props.currentPage - 1) * props.itemsPerPage
  return props.templates.slice(start, start + props.itemsPerPage)
})

const viewMoreStep = computed(() => (isSearching.value || props.activeCategory ? props.itemsPerPage : 0))

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
  scrollbar-width: thin;
  scrollbar-color: var(--gray-200) transparent;
}

/* Safari reads only the -webkit- rules; the same thin, light bar as the form template sidebar. */
.list-sidebar::-webkit-scrollbar {
  width: 5px;
}

.list-sidebar::-webkit-scrollbar-thumb {
  border-radius: var(--r);
  background-color: var(--gray-200);
}

.list-sidebar::-webkit-scrollbar-thumb:hover {
  background-color: var(--gray-400);
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

.list-category-search {
  padding: var(--space-4) 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
  margin-bottom: var(--space-6);
}

.list-category-search :deep(.search-box) {
  max-width: 420px;
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
