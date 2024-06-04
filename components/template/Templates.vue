<template>
  <div>
    <!-- Breadcrumb here -->
    <div class="template-container d-flex">
      <div class="left-sidebar">
        <TemplateCategories
          :activeCategory="activeCategory"
          :templateCategories="templateCategories"
        />
      </div>
      <div class="content-wrapper w-100">
        <h2 class="content-heading">
          {{
            $route.params.slug ? $route.params.slug.replace('-', ' ') : 'All'
          }}
          Templates
        </h2>
        <p class="content-description mt-3">
          Tools and strategies modern teams need to help their companies grow.
        </p>

        <TemplateSearch @searchInput="handleSearch" />

        <div v-if="filterTemplates.length" class="templates-grid">
          <TemplateCard
            v-for="(template, idx) in filterTemplates"
            :key="template.id"
            :template="template"
          />
        </div>
        <div v-else class="no-templates">
          <nuxt-img
            class="no-templates-img img-fluid"
            src="/templates/no-template.svg"
            alt="No Template Illustration"
          />
          <h4>No Template Available</h4>
        </div>
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
  props: ['activeCategory', 'templates', 'templateCategories'],
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm
    },
  },
  computed: {
    filterTemplates() {
      if (!this.searchTerm.trim()) {
        return this.templates
      }
      return this.templates.filter((template) =>
        template.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },
  },
}
</script>

<style scoped>
.template-container {
  margin-top: 24px;
}

.left-sidebar {
  position: sticky;
  top: 80px;
  max-height: 100vh;
  margin-bottom: 1.5rem;
  margin-top: 15px;
  min-width: 264px;
  overflow-y: scroll;
}

.left-sidebar::-webkit-scrollbar {
  width: 7px;
  background-color: #f5f5f5;
}

.left-sidebar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.left-sidebar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.content-wrapper {
  margin-bottom: 24px;
  padding-inline: 1.5rem;
}

.content-heading {
  color: var(--clr-text-primary);
  text-transform: capitalize;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.96px;
}

.content-description {
  color: var(--clr-text-secondary);
  font-size: 20px;
  line-height: 30px;
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
  width: 100%;
  padding: 52px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.no-templates-img {
  width: 100%;
}

@media screen and (max-width: 1412px) {
  .templates-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .templates-grid {
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem 1.5rem 1.5rem;
    margin-top: 0;
  }
}

@media only screen and (max-width: 840px) {
  .template-container {
    flex-direction: column;
  }
  .content-heading {
    margin-top: 12px;
    text-align: center;
  }
  .content-description {
    text-align: center;
  }
  .left-sidebar {
    position: static;
    margin: 0;
  }
}

@media only screen and (max-width: 600px) {
  .templates-grid {
    grid-template-columns: 1fr;
  }
}
</style>
