<template>
  <div>
    <Hero />
    <div class="template_container d-flex">
      <div class="left-sidebar">
        <TemplateCategories
          :activeCategory="activeCategory"
          :templateCategories="templateCategories"
        />
      </div>
      <div class="w-100">
        <h1 class="heading">
          {{ $route.params.slug ? $route.params.slug.replace('-', ' ') : '' }}
          Templates
        </h1>
        <div v-if="templates && templates.length" class="templates">
          <TemplateCard
            v-for="(template, idx) in templates"
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
}
</script>

<style scoped>
.left-sidebar {
  background-color: white;
  min-width: 240px;
  min-height: calc(100vh - 45px);
  overflow-y: auto;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.05);
}
.heading {
  text-transform: capitalize;
  padding: 1rem 1.5rem 0;
  font-size: var(--ft-bigger-body);
}
.template_container {
  margin-top: 65px;
}
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
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
  }
  .template_container {
    margin-top: 0;
  }
}

@media only screen and (max-width: 840px) {
  .template_container {
    flex-direction: column;
  }

  .left-sidebar {
    min-height: auto;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.05);
  }
}

@media only screen and (max-width: 600px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
