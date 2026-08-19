// Same exported function names/shapes as the original Strapi-backed version
// (see plans/session-handoff.md's adapter-boundary-reuse principle) — every
// consumer (useBlogData.js, pages/blog/[slug].vue, pages/blog/index.vue,
// utils/getRoutes.js, pages/use-case/human-resource.vue) expects each item
// as Strapi's classic `{id, attributes: {...}}` shape, so that's
// reconstructed here rather than changing every call site.
let cachePromise = null

async function _fetchAllBlogs() {
  const docs = await queryCollection('blog').order('publishedAt', 'DESC').all()
  const blogs = docs.map((doc) => {
    const { id, ...attributes } = doc
    return { id, attributes }
  })
  console.log(`[getAllBlogs] Loaded ${blogs.length} blogs from content/blog`)
  return blogs
}

export async function getAllBlogs() {
  if (!cachePromise || import.meta.dev) {
    cachePromise = _fetchAllBlogs()
  }
  return cachePromise
}

export async function getBlogBySlug(slug) {
  const blogs = await getAllBlogs()
  return blogs.find((item) => item.attributes.slug === slug) || null
}
