<template>
  <div class="template_container d-flex">
    <div class="left-sidebar">
      <TemplateCategories :activeCategory="activeCategory" />
    </div>
    <div class="w-100">
      <h1 class="heading">
        {{
          $route.params.slug ? $route.params.slug.replace('-', ' ') : ''
        }}
        Templates
      </h1>
      <div v-if="templates.length" class="templates">
        <div v-for="(template, idx) in templates" :key="idx" class="template">
          <NuxtLink
            :to="{ name: 'templates-slug', params: { slug: template.slug } }"
          >
            <img
              v-if="template.previewImageUrl"
              class="img-fluid pointer"
              :src="template.previewImageUrl"
              :alt="template.name"
            />
            <img
              v-else
              class="img-fluid"
              src="@/assets/images/templates/create_form.png"
              alt="Template placeholder image"
            />
            <h2 class="template-name pointer">
              {{ template.name }}
            </h2>
          </NuxtLink>
        </div>
      </div>
      <div v-else class="no-template">
        <img
          class="img-fluid"
          src="@/assets/images/templates/no-template.svg"
          alt="No Template Illustration"
        />
        <h4>No Template Available</h4>
      </div>
    </div>
  </div>
</template>

<script>
import TemplateCategories from './TemplateCategories.vue'
export default {
  components: { TemplateCategories },
  props: ['activeCategory'],
  data() {
    return {
      templates: [],
    }
  },
  mounted() {
    this.getTemplates()
  },
  methods: {
    async getTemplates() {
      let params = {}
      if (this.$route.params.slug) {
        params.category_slug = this.$route.params.slug
      }
      try {
        const { data } = await this.$axios.get(
          'https://app.formester.com/templates.json',
          { params: params }
        )
        this.templates = data
      } catch (error) {
        this.templates = []
      }
    },
  },
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
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.template {
  background-color: white;
  border-radius: 4px;
  padding: 12px;
  transition: all 500ms ease;
  box-shadow: 0px 0px 10px 0px rgba(79, 56, 149, 0.15);
  min-height: 130px;
}

.template:hover {
  box-shadow: 0px 0px 15px 3px rgba(79, 56, 149, 0.25);
}

.template-name {
  font-weight: 500;
  font-size: 16px;
  margin-top: 14px;
  line-height: 24px;
  color: #211447;
  user-select: none;
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
  .template-name {
    font-size: 14px;
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

  .template-name {
    font-size: 12px;
  }
}

@media only screen and (max-width: 600px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
