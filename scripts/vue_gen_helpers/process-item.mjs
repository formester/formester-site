import getSiteMeta from '../../utils/getSiteMeta.js'

export function normalizeJsonLd(input) {
  if (!input) return []
  const arr = Array.isArray(input) ? input : [input]
  return arr
    .filter((entry) => entry && typeof entry === 'object')
    .map((entry) =>
      !entry['@context'] || typeof entry['@context'] !== 'string'
        ? { '@context': 'https://schema.org', ...entry }
        : entry
    )
}

// Turns a raw `pages`/`features` CMS item (components + meta) into the
// {head, jsonld, components} shape buildGenericPage() expects — same
// transform utils/getAllPages.js's processItem() does at request time.
export function processItem(item) {
  const components = item?.components || []
  const meta = item?.meta || null
  const updatedAt = item?.updatedAt || null

  if (!components.length || !meta) {
    return { head: {}, jsonld: [], components }
  }

  const metaData = {
    url: meta?.url,
    type: meta?.type,
    title: meta?.title,
    description: meta?.description,
    mainImage: meta?.mainImage?.imageUrl || meta?.mainImage?.image?.url,
    mainImageAlt: meta?.mainImage?.imageAlt,
    keywords: meta?.keywords?.map((k) => k?.text),
    updatedAt,
  }
  const siteMetaData = getSiteMeta(metaData)
  const toSlash = (h) => (h ? h.replace(/([^/])$/, '$1/') : h)
  const authoredCanonical = (meta?.link || []).find((l) => l?.rel === 'canonical')
  const canonical = toSlash(authoredCanonical?.href || meta?.url)

  const head = {
    title: meta?.title,
    link: canonical ? [{ hid: 'canonical', rel: 'canonical', href: canonical }] : [],
    meta: [...siteMetaData],
  }
  const jsonld = normalizeJsonLd(meta?.jsonld)

  return { head, jsonld, components }
}
