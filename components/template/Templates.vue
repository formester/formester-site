<template>
  <div>
    <Hero @searchInput="handleSearch" />
    <div class="template_container d-flex">
      <div class="left-sidebar">
        <TemplateCategories
          :activeCategory="activeCategory"
          :templateCategories="templateCategories"
        />
      </div>
      <div class="w-100">
        <h2 class="heading">
          {{
            $route.params.slug ? $route.params.slug.replace('-', ' ') : 'All'
          }}
          Templates
        </h2>
        <div v-if="filterTemplates && filterTemplates.length" class="templates">
          <TemplateCard
            v-for="(template, idx) in filterTemplates"
            :key="template.id"
            :template="template"
          />
        </div>
        <div v-else class="no-template">
          <nuxt-img
            class="img-fluid"
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
import TemplateCategories from './TemplateCategories.vue'
import TemplateCard from './TemplateCard.vue'
import Hero from './Hero.vue'

export default {
  components: { TemplateCategories, TemplateCard, Hero },
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
.left-sidebar {
  position: sticky;
  top: 80px;
  max-height: 100vh;
  margin-bottom: 1.5rem;
  margin-top: 15px;
  min-width: 240px;
  overflow-y: auto;
}
/* Style of the scrollbar*/
.left-sidebar::-webkit-scrollbar {
  width: 7px;
  background-color: #f5f5f5;
}
/* Style of the scrollbar thumb */
.left-sidebar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
/* Change the thumb color on hover */
.left-sidebar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
.heading {
  text-transform: capitalize;
  padding: 0.6rem 1.5rem 0;
  font-size: var(--ft-bigger-body);
}
.template_container {
  margin-top: 90px;
}
.templates {
  width: 100%;
  padding: 0 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
  margin-top: 1rem;
}
.no-template {
  width: 100%;
  padding: 52px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem 1.5rem 1.5rem;
    margin-top: 0;
  }
  .template_container {
    margin-top: 0;
  }
}

@media only screen and (max-width: 840px) {
  .template_container {
    flex-direction: column;
  }
  .heading {
    margin-top: 12px;
    text-align: center;
  }
  .left-sidebar {
    position: static;
    margin: 0;
  }
}

@media only screen and (max-width: 600px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
