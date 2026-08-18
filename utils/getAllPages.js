// Nuxt Content v3 backed replacement for the old Strapi-fetching version.
// Same exported function names/shapes as before so pages/index.vue and
// pages/[...slug].vue need zero changes.

export async function getPageBySlug(slug) {
  const doc = await queryCollection('pages').where('slug', '=', slug).first()
  if (!doc) return null
  return { head: doc.head || {}, jsonld: doc.jsonld || [], components: doc.components || [] }
}

export async function getHomePage() {
  const doc = await queryCollection('home').first()
  if (!doc) return null
  return { head: doc.head || {}, jsonld: doc.jsonld || [], components: doc.components || [] }
}

// Kept for callers that still want the full slug set (route pre-generation
// now reads content/pages/**/*.json directly — see utils/getRoutes.js).
export async function getAllPages() {
  const docs = await queryCollection('pages').all()
  const map = {}
  for (const doc of docs) {
    map[doc.slug] = { head: doc.head || {}, jsonld: doc.jsonld || [], components: doc.components || [] }
  }
  return map
}
