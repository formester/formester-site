<template>
  <Templates
    :activeCategory="$route.params.slug"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script>
// MetaTags
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'

export default {
  components: { Templates },
  async asyncData({ $axios, params }) {
    const { data: templates } = await $axios.get(
      'https://app.formester.com/templates.json',
      { params: { category_slug: params.slug } }
    )

    const { data: categories } = await $axios.get(
      'https://app.formester.com/template_categories.json'
    )

    return { templates, categories }
  },
  computed: {
    currentCategory() {
      const [currentCategory] = this.categories.filter(
        (cate) => cate.slug === this.$route.params.slug
      )
      return currentCategory.name
    },
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/templates/',
        title: this.currentCategory,
        description: `Find the perfect template for ${this.currentCategory} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`,
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with blog page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with blog page image alt
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
  head() {
    return {
      title: `${this.currentCategory} Templates | Formester`,
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
        name: this.currentCategory,
        description: `Find the perfect template for ${this.currentCategory} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`,
        itemListElement: this.listItems,
      },
    ]
  },
}
</script>

<style scoped></style>
