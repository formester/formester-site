<template>
  <Templates
    :activeCategory="activeCategory"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script setup>
import Templates from '@/components/template/Templates.vue'
import getSiteMeta from '@/utils/getSiteMeta'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'

const route = useRoute()

const { data } = await useAsyncData(`template-category-${route.params.slug}`, async () => {
  const { templates, categories } = await getTemplatesAndCategories({
    category_slug: route.params.slug,
  })
  return { templates, categories }
})

const templates = computed(() => data.value?.templates || [])
const categories = computed(() => data.value?.categories || {})

const findCategoryBySlug = (slug) => {
  const allCategories = Object.values(categories.value).flatMap((arr) => arr)
  return allCategories.find((category) => category.slug === slug)
}

const activeCategory = ref(null)

onMounted(() => {
  activeCategory.value = findCategoryBySlug(route.params.slug)
})

const currentCategory = computed(() => {
  const allCategories = Object.values(categories.value).flat()
  const currentCategory = allCategories.find(
    (cate) => cate.slug === route.params.slug
  )
  return currentCategory || {}
})

const currentCategoryName = computed(() => currentCategory.value.name || '')

const metaTitle = computed(() => currentCategory.value.metaTitle || currentCategoryName.value)

const metaDescription = computed(() => {
  const description = `Find the perfect template for ${currentCategoryName.value} with Formester's comprehensive library. Choose from a variety of customizable designs and create a professional look in no time.`
  return currentCategory.value.metaDescription || currentCategory.value.description || description
})

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: `https://formester.com/templates/${route.params.slug}`,
    title: metaTitle.value,
    description: metaDescription.value,
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
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

useHead(() => ({
  title: `${currentCategoryName.value} Templates | Formester`,
  meta: meta.value,
  link: [
    {
      rel: 'canonical',
      href: `https://formester.com/templates/categories/${route.params.slug}/`,
    },
  ],
}))

useSchemaOrg([
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: metaTitle,
    description: metaDescription,
    itemListElement: listItems,
  },
])
</script>

<style scoped></style>
