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
        description: `Find the perfect template for ${this.$route.params.slug.replace('-',' ')} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`,
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with blog page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with blog page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: `${this.$route.params.slug.replace('-',' ')} Templates | Formester`,
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
