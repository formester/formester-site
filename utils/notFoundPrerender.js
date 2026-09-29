// Static hosting serves `404.html` for missing keys, but Nuxt always
// prerenders `/404.html` as an empty SPA shell (no SSR), so crawlers and
// no-JS visitors get a blank page with the default title. Instead we
// prerender a path that matches no page — Nuxt SSR-renders error.vue for it
// with a 404 — and write that HTML to `404.html` in place of the shell.
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const NOT_FOUND_PRERENDER_ROUTE = '/__formester-404'

// Nitro `prerender:generate` hook body.
export function applyNotFoundFallback(route) {
  if (route.route === '/404.html') {
    route.skip = true
    return
  }
  if (route.route === NOT_FOUND_PRERENDER_ROUTE && route.error?.statusCode === 404) {
    delete route.error
    route.fileName = '404.html'
  }
}

// failOnError is intentionally false for CMS-backed routes; fail explicitly
// when the one artifact needed for every missing URL is absent or malformed.
export async function verifyNotFoundFallback({ prerenderedRoutes }, publicDir) {
  const fallback = prerenderedRoutes.find((route) =>
    route.route === NOT_FOUND_PRERENDER_ROUTE && route.fileName === '404.html'
  )
  if (!fallback) throw new Error('Missing prerendered 404.html fallback')

  const html = await readFile(join(publicDir, '404.html'), 'utf8')
  if (!/<title>Page not found \| Formester<\/title>/.test(html) ||
      !/<meta[^>]*name="robots"[^>]*content="noindex, follow"/.test(html) ||
      !/<h1[^>]*>\s*Page not found/.test(html)) {
    throw new Error('Prerendered 404.html lacks the 404 title, noindex, or page content')
  }
}
