<template>
  <div>
    <div class="container template-container d-flex">
      <div class="content-wrapper w-100">
        <div
          v-if="activeCategory"
          class="breadcrumb d-flex align-items-center gap-2"
        >
          <NuxtLink to="/templates/" class="breadcrumb-text">
            All Templates
          </NuxtLink>
          <img src="~/assets/images/icons/chevron-right.svg" />
          <span class="breadcrumb-text">{{ activeCategory.name }}</span>
        </div>
        <h1 class="content-heading mt-2">
          {{ activeCategory ? activeCategory.name : 'All' }}
          Templates
        </h1>
        <div
          v-if="activeCategory && activeCategory.description"
          class="my-2"
          :class="{ 'd-flex align-items-center': !showFullDescription }"
        >
          <p
            ref="description"
            class="content-description mt-0 mb-1"
            v-html="activeCategory.description"
          />
          <button
            v-if="showHandleButton"
            class="content-description-handle-button text-nowrap"
            @click="toggleDescription"
          >
            {{ descriptionButtonLabel }}
          </button>
        </div>

        <TemplateSearch @searchInput="handleSearch" />

        <template v-if="filteredTemplates.length > 0">
          <section class="templates-grid" aria-label="Templates">
            <TemplateCard
              v-for="template in paginatedTemplates"
              :key="template.id"
              :template="template"
            />
          </section>
          <div v-if="visibleCount < filteredTemplates.length" class="d-flex justify-content-center mt-3">
            <button
              @click="viewMore"
              class="btn-primary"
              aria-label="View more templates"
              type="button"
            >
              View More
            </button>
          </div>
        </template>
        <div v-else class="no-templates d-flex flex-column align-items-center justify-content-center w-100">
          <nuxt-img
            class="img-fluid"
            src="/templates/no-template.svg"
            alt="No Template Illustration"
          />
          <h4 class="mt-3">No Template Available</h4>
        </div>
      </div>
      <div class="left-sidebar">
        <TemplateCategories
          :activeCategory="activeCategory"
          :templateCategories="templateCategories"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TemplateCategories from '@/components/template/TemplateCategories.vue'
import TemplateCard from '@/components/template/TemplateCard.vue'
import TemplateSearch from '@/components/template/TemplateSearch.vue'

export default {
  components: { TemplateCategories, TemplateCard, TemplateSearch },
  props: {
    activeCategory: Object,
    templates: Array,
    templateCategories: Object,
  },
  data() {
    return {
      searchTerm: '',
      showFullDescription: false,
      showHandleButton: false,
      visibleCount: 12,
    }
  },
  watch: {
    activeCategory: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.checkDescriptionOverflow()
        })
      },
    },
  },
  methods: {
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm
      this.visibleCount = 12 // Reset pagination on new search
    },
    toggleDescription() {
      this.showFullDescription = !this.showFullDescription
    },
    checkDescriptionOverflow() {
      const description = this.$refs.description
      if (description) {
        this.showHandleButton =
          description.scrollHeight > description.clientHeight
      }
    },
    viewMore() {
      this.visibleCount += 12
    },
  },
  computed: {
    filteredTemplates() {
      const searchTerm = this.searchTerm.trim().toLowerCase()
      if (!searchTerm) return this.templates
      return this.templates.filter(
        (template) =>
          template.name.toLowerCase().includes(searchTerm) ||
          template.description?.toLowerCase().includes(searchTerm)
      )
    },
    paginatedTemplates() {
      return this.filteredTemplates.slice(0, this.visibleCount)
    },
    descriptionLineClampStyle() {
      return this.showFullDescription ? 'auto' : 1
    },
    descriptionButtonLabel() {
      return this.showFullDescription ? 'Show less' : 'Show more'
    },
  },
}
</script>

<style scoped>
.btn-primary {
  margin-top: 1rem;
  background-color: var(--clr-primary);
  font-size: 16px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
}

.btn-primary:hover {
  background-color: var(--clr-primary-hover);
  transition: all 0.2s ease;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem var(--clr-primary-focus);
}

.template-container {
  flex-direction: row-reverse;
  margin-top: 8rem;
}


.left-sidebar {
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 70px);
  margin-bottom: 1.5rem;
  min-width: 264px;
  overflow-y: scroll;
  padding-bottom: 1.5rem;
}

.left-sidebar::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.left-sidebar::-webkit-scrollbar-thumb {
  background-color: #d0d5dd;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.left-sidebar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.content-wrapper {
  margin-bottom: 24px;
  padding-left: 3rem;
}

.content-heading {
  color: var(--clr-text-primary);
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.64px;
}

.content-description {
  color: var(--clr-text-secondary);
  font-size: 20px;
  line-height: 30px;
  margin-top: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: v-bind(descriptionLineClampStyle);
  -webkit-box-orient: vertical;
}

.content-description-handle-button {
  color: var(--clr-primary);
  background: transparent;
  text-decoration: underline;
}

.templates-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 24px;
  margin-top: 1rem;
}

.no-templates {
  padding: 52px 0;
  gap: 1rem;
}

.breadcrumb {
  margin-block: 8px;
}

.breadcrumb-text {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--clr-primary-600);
  text-transform: capitalize;
}

.gap-2 {
  gap: 8px;
}

@media (max-width: 991px) {
  .templates-grid {
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
  }
}

@media only screen and (max-width: 840px) {
  .content-wrapper {
    padding: 0;
    margin-top: 12px;
  }
  .content-heading {
    margin-top: 12px;
    font-size: 32px;
    line-height: 48px;
  }
  .content-description {
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
  }
  .template-container {
    flex-direction: column;
    margin-top: 5rem;
  }
  .left-sidebar {
    position: static;
    margin: 0;
    overflow-y: auto;
  }
}

@media only screen and (max-width: 600px) {
  .templates-grid {
    grid-template-columns: 1fr;
  }
}
</style>
