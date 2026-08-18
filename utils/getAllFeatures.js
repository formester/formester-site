// Nuxt Content v3 backed replacement for the old Strapi-fetching version.
// Same exported function names/shapes as before so pages/features/[slug].vue
// needs zero changes.

export async function getFeatureBySlug(slug) {
  const doc = await queryCollection('features').where('slug', '=', slug).first()
  if (!doc) return null
  return { head: doc.head || {}, jsonld: doc.jsonld || [], components: doc.components || [] }
}

export async function getAllFeatures() {
  const docs = await queryCollection('features').all()
  const map = {}
  for (const doc of docs) {
    map[doc.slug] = { head: doc.head || {}, jsonld: doc.jsonld || [], components: doc.components || [] }
  }
  return map
}
