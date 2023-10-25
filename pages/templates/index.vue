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
    let { data: templates } = await $axios.get(
      'https://app.formester.com/templates.json'
    )

    let { data: categories } = await $axios.get(
      'https://app.formester.com/template_categories.json'
    )

    const dummyDescription =
      'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

    templates = templates.map((template) => ({
      ...template,
      description: template.description || dummyDescription,
    }))

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
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://formester.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'All Templates',
              item: 'https://formester.com/templates',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
