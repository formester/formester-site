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

    let { data: categories } = await $axios.get(
      'https://app.formester.com/template_categories.json'
    )
    categories = {
      industry: [
        {
          id: 23,
          name: 'Order Forms',
          is_active: true,
          created_at: '2023-10-20T13:45:21.191Z',
          updated_at: '2023-10-20T15:42:32.427Z',
          slug: 'order-forms',
          kind: 'industry',
        },
      ],
      generic: [
        {
          id: 1,
          name: 'Donation Forms',
          is_active: true,
          created_at: '2023-10-20T13:45:21.030Z',
          updated_at: '2023-10-20T15:48:55.836Z',
          slug: 'donation-forms',
          kind: 'generic',
        },
        {
          id: 5,
          name: 'Organization Forms',
          is_active: true,
          created_at: '2023-10-20T13:45:21.071Z',
          updated_at: '2023-10-22T07:17:06.179Z',
          slug: 'organization-forms',
          kind: 'generic',
        },
      ],
      purpose: [
        {
          id: 3,
          name: 'Consultation Forms',
          is_active: true,
          created_at: '2023-10-20T13:45:21.056Z',
          updated_at: '2023-10-22T07:14:34.588Z',
          slug: 'consultation-forms',
          kind: 'purpose',
        },
      ],
      department: [
        {
          id: 4,
          name: 'Application Forms',
          is_active: true,
          created_at: '2023-10-20T13:45:21.065Z',
          updated_at: '2023-10-22T07:15:44.811Z',
          slug: 'application-forms',
          kind: 'department',
        },
      ],
    }
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
      return currentCategory.name || ''
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
