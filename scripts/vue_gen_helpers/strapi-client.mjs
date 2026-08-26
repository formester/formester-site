// Thin client for Strapi's public REST API. No auth — every endpoint used
// by this generator (pages, features, blogs) is public, same as the live
// site's own runtime fetches.

const PAGE_SIZE = 100

export async function fetchAllPaginated(strapiUrl, endpoint, extraParams = 'populate=deep') {
  const items = []
  let page = 1
  for (;;) {
    const url = `${strapiUrl}/api/${endpoint}?${extraParams}&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${endpoint} page ${page} failed: ${res.status} ${res.statusText}`)
    const json = await res.json()
    items.push(...(json.data || []))
    const pagination = json.meta?.pagination
    if (!pagination || page >= pagination.pageCount) break
    page += 1
  }
  return items
}

// blogs/form-builders/form-builder-features come back as classic Strapi v4
// {id, attributes: {...}}; pages/features/recommended-templates come back
// already flattened. Unwrap either shape into a flat object.
export function attrs(item) {
  if (item && item.attributes) return { id: item.id, ...item.attributes }
  return item
}
