<template>
  <Templates
    :activeCategory="null"
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
  async asyncData({ $axios }) {
    const { data: templates } = await $axios.get(
      'https://app.formester.com/templates.json'
    )

    const { data: categories } = await $axios.get(
      'https://app.formester.com/template_categories.json'
    )

    return { templates, categories }
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
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Formester',
          description:
            "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          sameAs: [
            'https://www.facebook.com/formester/',
            'https://twitter.com/_formester_',
            'https://www.instagram.com/_formester_/',
            'https://www.linkedin.com/company/formester-inc/',
            'https://www.producthunt.com/products/formester',
            'https://www.softwareadvice.com/forms-automation/formester-profile/',
            'https://www.capterra.com/p/166904/Formester/',
            'https://www.getapp.com/website-ecommerce-software/a/formester/',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
          owns: {
            '@type': 'Product',
            name: 'Acorn Globus',
            url: 'https://acornglobus.com',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'All Categories',
              item: 'https://formester.com/templates',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact Forms',
              item: 'https://formester.com/templates/categories/contact-forms/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Registration Forms',
              item: 'https://formester.com/templates/categories/registration-forms/',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Feedback Forms',
              item: 'https://formester.com/templates/categories/feedback-forms/',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Research Forms',
              item: 'https://formester.com/templates/categories/research-forms/',
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Lead Generation',
              item: 'https://formester.com/templates/categories/lead-generation/',
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'Employee',
              item: 'https://formester.com/templates/categories/employee/',
            }
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
