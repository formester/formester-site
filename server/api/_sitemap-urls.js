export default defineEventHandler(async () => {
    const [
      posts,
    ] = await Promise.all([
      $fetch('/api/_content'),
    ])
    return [...posts].map((p) => {
      return { loc: p.url, lastmod: p.updatedAt }
    })
  })
  