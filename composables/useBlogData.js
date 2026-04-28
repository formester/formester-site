import readingTime from '@/utils/readingTime'
import { getAllBlogs } from '@/utils/getAllBlogs'

export const useBlogData = async () => {
  const itemsPerPage = 9

  // Fetch all blog data once via shared cache
  const { data: blogData, error: fetchError } = await useAsyncData('blogs-global', async () => {
    try {
      const data = await getAllBlogs()

      let articles = data.map((item) => {
        const cover = item.attributes.coverImg?.data?.attributes
        return {
          id: item.id,
          ...item.attributes,
          coverImg: cover?.url || '',
          coverImgWidth: cover?.width || 1200,
          coverImgHeight: cover?.height || 630,
          readingStats: readingTime(item.attributes.body || ''),
        }
      })

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
