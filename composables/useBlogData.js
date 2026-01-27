import readingTime from '@/utils/readingTime'

export const useBlogData = async () => {
  const config = useRuntimeConfig()
  const itemsPerPage = 9

  // Fetch all blog data once and cache it
  const { data: blogData, error: fetchError } = await useAsyncData('blogs-global', async () => {
    try {
      const response = await $fetch(`${config.public.strapiUrl}/api/blogs`, {
        params: {
          sort: 'publishedAt:desc',
          populate: '*',
          'pagination[pageSize]': 500,
        },
      })

      const data = response.data || []

      let articles = data.map((item) => ({
        id: item.id,
        ...item.attributes,
        coverImg: item.attributes.coverImg?.data?.attributes?.url || '',
        readingStats: readingTime(item.attributes.body || ''),
      }))

      const heroArticles = articles.filter((item) => item.featured)
      articles = articles.filter((item) => !item.featured)
      const totalArticles = articles.length
      const totalPages = Math.ceil(totalArticles / itemsPerPage)

      return {
        articles,
        heroArticles,
        totalPages,
        itemsPerPage,
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
      return {
        articles: [],
        heroArticles: [],
        totalPages: 1,
        itemsPerPage,
      }
    }
  })

  if (fetchError.value) {
    console.error('Blog fetch error:', fetchError.value)
  }

  return {
    articles: computed(() => blogData.value?.articles || []),
    heroArticles: computed(() => blogData.value?.heroArticles || []),
    totalPages: computed(() => blogData.value?.totalPages || 1),
    itemsPerPage,
  }
}

export const getPaginatedArticles = (articles, page, itemsPerPage) => {
  const start = (page - 1) * itemsPerPage
  return articles.slice(start, start + itemsPerPage)
}
