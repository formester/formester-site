<template>
  <Templates
    :activeCategory="currentCategory"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script setup>
import { computed } from 'vue'
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'

const route = useRoute().params

const { data: categories }  = await useFetch('https://app.formester.com/template_categories.json')
const { data: templates }  = await useFetch( `https://app.formester.com/templates.json?category_slug=${route.slug}`)

const currentCategory = computed(() => {
  const category = categories.value.find((cate) => cate.slug === route.slug[0])
  return category ? category.name : ''
})

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/templates/',
    title: currentCategory,
    description: `Find the perfect template for ${currentCategory} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`,
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
  title: currentCategory.value ? `${currentCategory.value} Templates | Formester` : '' ,
  meta: [
    ...meta.value
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `https://formester.com/templates/categories/${String(route.slug)}/`,
    },
  ],
})

useJsonld(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: currentCategory.value,
    description: `Find the perfect template for ${currentCategory.value} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`,
    itemListElement: listItems.value,
  }
})
</script>

