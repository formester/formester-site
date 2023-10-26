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
          {{ $route.params.slug ? $route.params.slug.replace('-', ' ') : '' }}
          Templates
        </h2>
        <div v-if="templates && templates.length" class="templates">
          <TemplateCard
            v-for="(template, idx) in filteredTemplate"
            :key="idx"
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
      mainTemplateData: this.templates,
      filteredTemplate: this.templates,
      searchTerm: '',
    }
  },
  methods: {
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm
      this.filteredData()
    },
    filteredData() {
      if (!this.searchTerm.trim()) {
        this.filteredTemplate = this.mainTemplateData
        return
      }
      const filteredData = this.mainTemplateData.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase())
      })
      this.filteredTemplate = filteredData
    },
  },
}
</script>

<style scoped>
.left-sidebar {
  position: sticky;
  top: 40px;
  /* height: 100%; */
  max-height: 80vh;
  margin-bottom: 1.5rem;
  min-width: 240px;
  overflow-y: auto;
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
    margin-bottom: 1.5rem;
  }
}

@media only screen and (max-width: 600px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
