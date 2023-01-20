<template>
  <div class="template_container d-flex">
    <div class="left-sidebar">
      <div class="template-categories">
        <div
          class="category-heading__container"
          data-bs-toggle="collapse"
          data-bs-target="#categories"
          aria-controls="categories"
          :aria-expanded="showCategories"
          aria-label="Toggle Category Menu"
        >
          <h5 class="category-heading">Category</h5>
            <img
              class="category-menu-btn"
              src="@/assets/images/filter_icon.svg"
              alt="category-menu-button"
            />
        </div>
        <div class="categories" id="categories">
          <div
            class="category"
            :class="{ active: activeCategory === null }"
            @click="handleCategoryChange(null)"
          >
            All Categories
          </div>
          <div
            v-for="category in templateCategories"
            :key="category.id"
            class="category"
            :class="{ active: activeCategory === category.id }"
            @click="handleCategoryChange(category.id)"
          >
            {{ category.name }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="templates.length" class="templates">
      <div v-for="(template, idx) in templates" :key="idx" class="template">
        <NuxtLink :to="{ name: 'templates-id', params: { id: template.id } }">
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
          <h6 class="template-name pointer">
            {{ template.name }}
          </h6>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="no-template">
      <img
        class="img-fluid"
        src="@/assets/images/templates/no-template.svg"
        alt="No Template Illustration"
      />
    </div>
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {},
  data() {
    return {
      templates: [],
      templateCategories: [],
      activeCategory: null,
      showCategories: true,
    }
  },
  mounted() {
    this.getTemplateCategories()
    this.getTemplates()
    if (window.innerWidth <= 724) this.showCategories = false
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/templates/',
        title: 'The Formester Templates',
        description:
          'Use our Formester form templates including surveys, reviews, registrations, & more for any industry! Automate workflows with online templates.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with blog page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with blog page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Templates | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/templates/',
        },
      ],
    }
  },
  methods: {
    async getTemplates(categoryId) {
      const params = {}
      if (categoryId) {
        params.category_id = categoryId
      }
      try {
        const { data } = await this.$axios.get(
          'http://localhost:5000/templates.json',
          { params: params }
        )
        this.templates = data
      } catch (error) {
        this.templates = []
      }
    },
    async getTemplateCategories() {
      try {
        const { data } = await this.$axios.get(
          'http://localhost:5000/template_categories.json'
        )
        this.templateCategories = data
      } catch (error) {
        console.log(error)
        this.templateCategories = []
      }
    },
    handleCategoryChange(categoryId) {
      this.activeCategory = categoryId
      this.getTemplates(categoryId)
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

.category-heading {
  padding: 12px 36px;
  margin: 0;
  margin-top: 10px;
  font-weight: 600 !important;
  font-size: 20px;
  line-height: 26px;
  color: #171717;
}
.category-menu-btn {
  display: none;
}
.category {
  padding: 12px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
  user-select: none;
  transition: all 2s ease-in-out;
}
.category.active {
  background-color: #f7f5ff;
  border-right: 3px solid #4f3895;
}

.templates {
  width: 100%;
  padding: 2rem 1.5rem;
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
}

.template:hover {
  box-shadow: 0px 0px 15px 3px rgba(79, 56, 149, 0.25);
}

.template-name {
  font-weight: 500;
  font-size: 16px;
  margin-top: 8px;
  line-height: 32px;
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
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
  }
  .template-name {
    font-size: 14px;
  }
}

@media only screen and (max-width: 724px) {
  .template_container {
    flex-direction: column;
  }
  .left-sidebar {
    min-height: auto;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.05);
  }
  .category-heading__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  }
  .category-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
  }
  .template-name {
    font-size: 12px;
  }
}
</style>
