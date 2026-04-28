/*
  Normalises Strapi image fields into a flat { src, alt, width, height }.

  Two shapes show up in this codebase:
  1. micro-components.clients — { image, imageUrl, imageAlt, width, height }
     Editor can override width/height; otherwise falls back to media's intrinsic size.
  2. Raw media fields — flattened by strapi-plugin-transformer for most content types,
     but blogs are on the transformer deny list, so they keep { data: { attributes: {...} } }.

  `fallback` lets callers pass static defaults for fields the editor may have left blank.
*/
export function getStrapiImage(input, fallback = {}) {
  const empty = {
    src: fallback.src || '',
    alt: fallback.alt || '',
    width: fallback.width || null,
    height: fallback.height || null,
  }
  if (!input) return empty

  const root = input.data?.attributes || input.attributes || input

  // micro-components.clients shape
  if ('imageUrl' in root || 'imageAlt' in root) {
    const media = root.image?.data?.attributes || root.image || {}
    return {
      src: media.url || root.imageUrl || empty.src,
      alt: root.imageAlt || media.alternativeText || empty.alt,
      width: root.width || media.width || empty.width,
      height: root.height || media.height || empty.height,
    }
  }

  // Raw media field
  return {
    src: root.url || empty.src,
    alt: root.alternativeText || empty.alt,
    width: root.width || empty.width,
    height: root.height || empty.height,
  }
}
