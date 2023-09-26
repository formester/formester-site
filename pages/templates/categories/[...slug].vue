<template>
  <Templates
    :activeCategory="currentCategory"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'
// import { useRoute } from 'vue-router';

const route = useRoute().params

const templates = ref([])
const categories = ref([])

const fetchTemplates = async (slug) => {
  try {
    const response = await fetch(
      `https://app.formester.com/templates.json?category_slug=${slug}`
    )
    const data = await response.json()
    templates.value = data
  } catch (error) {
    console.error('Error fetching templates:', error)
  }
}

const fetchCategories = async () => {
  try {
    const response = await fetch(
      'https://app.formester.com/template_categories.json'
    )
    const data = await response.json()
    categories.value = data
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

onMounted(() => {
  const slug = route.slug
  fetchTemplates(slug)
  fetchCategories()
})

const currentCategory = computed(() => {
  const category = categories.value.find((cate) => cate.slug === route.slug)
  console.log(category)
  return category ? category.name : ''
})

const meta = computed(() => {
  return {
    type: 'website',
    url: 'https://formester.com/templates/',
    title: currentCategory.value,
    description: `Find the perfect template for ${currentCategory.value} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`,
    mainImage: 'https://formester.com/formester-form-builder-background.png',
    mainImageAlt: 'Form builder showing drag and drop functionality',
  }
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
  meta: [meta.value],
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

