<template>
  <Templates :activeCategory="$route.params.slug" />
</template>

<script>
// MetaTags
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'

export default {
  components: { Templates },
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
}
</script>

<style scoped></style>
