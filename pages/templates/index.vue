<template>
  <Templates
    :activeCategory="null"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'

const templates = ref([])
const categories = ref([])

const fetchTemplates = async () => {
  try {
    const templatesResponse = await fetch(
      'https://app.formester.com/templates.json'
    )
    const templatesData = await templatesResponse.json()
    templates.value = templatesData
  } catch (error) {
    console.error('Error fetching templates:', error)
  }
}

const fetchCategories = async () => {
  try {
    const categoriesResponse = await fetch(
      'https://app.formester.com/template_categories.json'
    )
    const categoriesData = await categoriesResponse.json()
    categories.value = categoriesData
    console.log(categories.value);
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

onMounted(() => {
  fetchTemplates()
  fetchCategories()
})

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/templates/',
    title: 'The Formester Templates',
    description:
      'Use our Formester form templates including surveys, reviews, registrations, & more for any industry! Automate workflows with online templates.',
    mainImage: 'https://formester.com/formester-form-builder-background.png',
    mainImageAlt: 'Form builder showing drag and drop functionality',
  }
  return getSiteMeta(metaData)
})

const listItems = computed(() => {
  return templates.value.map((template, index) => {
    return {
      '@type': 'ListItem',
      position: index + 1,
      url: `https://formester.com/templates/${template.slug}`,
      name: template.name,
      image: template.previewImageUrl,
      description: template.description,
    }
  })
})

useHead({
  title: 'Templates | Formester',
  meta: [meta.value],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/templates/',
    },
  ],
})

useJsonld({
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
      '@type': 'ItemList',
      '@id': 'https://acornglobus.com',
      itemListElement: listItems.value
    },
  ],
})
</script>

