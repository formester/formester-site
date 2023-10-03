export default defineEventHandler(async () => {
    const [
      posts,
      pages,
      features
    ] = await Promise.all([
      $fetch('/api/posts'),
      $fetch('/api/pages'),
      $fetch('/api/features')
    ])
    return [...posts, ...pages, ...features].map((p) => {
      return { loc: p.url, lastmod: p.updatedAt }
    })
  })
  