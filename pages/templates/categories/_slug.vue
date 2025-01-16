<template>
  <Templates
    :activeCategory="activeCategory"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script>
// MetaTags
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'

export default {
  components: { Templates },
  data() {
    return {
      activeCategory: null
    }
  },
  async asyncData({ params, payload }) {
    if (payload) {
      return payload
    }
    const { templates, categories } = await getTemplatesAndCategories({
      category_slug: params.slug,
    })
    return { templates, categories }
  },
  computed: {
    currentCategory() {
      // Flatten all categories into a single array
      const allCategories = Object.values(this.categories).flat()
      // Find the first category with a matching slug
      const currentCategory = allCategories.find(
        (cate) => cate.slug === this.$route.params.slug
      )
      return currentCategory || {}
    },
    currentCategoryName() {
      return this.currentCategory.name || ''
    },
    metaTitle() {
      return this.currentCategory.metaTitle || this.currentCategoryName
    },
    metaDescription() {
      const description = `Find the perfect template for ${this.currentCategoryName} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`
      return this.currentCategory.metaDescription || this.currentCategory.description || description
    },
    meta() {
      const metaData = {
        type: 'website',
        url: `https://formester.com/templates/${this.$route.params.slug}`,
        title: this.metaTitle,
        description: this.metaDescription,
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
      }
      return getSiteMeta(metaData)
    },
    listItems() {
      return this.templates.map((template, index) => {
        return {
          '@type': 'ListItem',
          position: index + 1,
          url: `https://formester.com/templates/${template.slug}`,
          name: template.name,
          image: template.previewImageUrl,
          description: template.description,
        }
      })
    },
  },
  mounted() {
    this.activeCategory = this.findCategoryBySlug(this.$route.params.slug)
  },
  methods: {
    findCategoryBySlug(slug) {
      const allCategories = Object.values(this.categories).flatMap((arr) => arr)
      return allCategories.find((category) => category.slug === slug)
    },
  },
  head() {
    return {
      title: `${this.currentCategoryName} Templates | Formester`,
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/templates/categories/${this.$route.params.slug}/`,
        },
      ],
    }
  },
  jsonld() {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: this.metaTitle,
        description: this.metaDescription,
        itemListElement: this.listItems,
      },
    ]
  },
}
</script>

<style scoped></style>
