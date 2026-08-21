// Same exported function names/shapes as the original Strapi-backed version
// (see plans/session-handoff.md's adapter-boundary-reuse principle) — every
// consumer (useBlogData.js, pages/blog/[slug].vue, pages/blog/index.vue,
// utils/getRoutes.js, pages/use-case/human-resource.vue) expects each item
// as Strapi's classic `{id, attributes: {...}}` shape, so that's
// reconstructed here rather than changing every call site.
let cachePromise = null

// Nuxt Content's reserved `rawbody` field is the whole raw file, frontmatter
// fences included — NOT "the body with frontmatter already stripped" (that
// assumption was wrong; verified against the actual SQLite content index).
// Strip the leading `---\n...\n---\n` block ourselves so `body` matches
// exactly what BlogPostView.vue's marked()/TOC/FAQ pipeline expects: post
// content only, no frontmatter.
function stripFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return raw
  const closeIdx = raw.indexOf('\n---\n', 4)
  return closeIdx === -1 ? raw : raw.slice(closeIdx + 5)
}

async function _fetchAllBlogs() {
  const docs = await queryCollection('blog').order('publishedAt', 'DESC').all()
  const blogs = docs.map((doc) => {
    // `blog` is a `type: 'page'` collection now (markdown + frontmatter), so
    // `doc` also carries Nuxt Content's page-collection internals (parsed
    // AST `body`, `path`, `stem`, `extension`, `seo`, `navigation`, `meta`,
    // `__metadata`) alongside our own frontmatter fields. Drop those and use
    // the reserved `rawbody` field (raw source text, frontmatter stripped)
    // as `body` — same plain-string shape BlogPostView.vue's
    // marked()/TOC/FAQ pipeline already expects.
    const { id, rawbody, body: _parsedBody, path, stem, extension, seo, navigation, meta, __metadata, ...rest } = doc
    return { id, attributes: { ...rest, body: stripFrontmatter(rawbody) } }
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
