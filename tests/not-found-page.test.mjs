import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'

const errorPage = await readFile(new URL('../error.vue', import.meta.url), 'utf8')
const nuxtConfig = await readFile(new URL('../nuxt.config.js', import.meta.url), 'utf8')

test('404 fallback prerender swaps the SPA shell for the SSR-rendered error page', async () => {
  const { NOT_FOUND_PRERENDER_ROUTE, applyNotFoundFallback } = await import('../utils/notFoundPrerender.js')

  const rendered = {
    route: NOT_FOUND_PRERENDER_ROUTE,
    fileName: `${NOT_FOUND_PRERENDER_ROUTE}/index.html`,
    error: Object.assign(new Error('[404] Page not found'), { statusCode: 404 }),
  }
  applyNotFoundFallback(rendered)
  assert.equal(rendered.error, undefined, 'a 404 render of the fallback route must be written, not failed')
  assert.equal(rendered.fileName, '404.html')

  const spaShell = { route: '/404.html', fileName: '404.html' }
  applyNotFoundFallback(spaShell)
  assert.equal(spaShell.skip, true, "Nuxt's empty SPA shell must not overwrite the rendered 404.html")

  const broken = {
    route: NOT_FOUND_PRERENDER_ROUTE,
    fileName: 'x',
    error: Object.assign(new Error('[500]'), { statusCode: 500 }),
  }
  applyNotFoundFallback(broken)
  assert.equal(broken.error.statusCode, 500, 'a crashed render must still surface as a failed route')

  const valid = { route: '/pricing/', fileName: 'pricing/index.html' }
  applyNotFoundFallback(valid)
  assert.deepEqual(valid, { route: '/pricing/', fileName: 'pricing/index.html' })
})

test('prerender fails when the 404 artifact is missing or not noindexed', async () => {
  const { NOT_FOUND_PRERENDER_ROUTE, verifyNotFoundFallback } = await import('../utils/notFoundPrerender.js')
  const dir = await mkdtemp(join(tmpdir(), 'formester-404-'))
  const result = { prerenderedRoutes: [{ route: NOT_FOUND_PRERENDER_ROUTE, fileName: '404.html' }] }
  try {
    await assert.rejects(verifyNotFoundFallback({ prerenderedRoutes: [] }, dir), /Missing prerendered/)
    await assert.rejects(verifyNotFoundFallback(result, dir), /ENOENT/)
    await writeFile(join(dir, '404.html'), '<title>Page not found | Formester</title><h1>Page not found</h1>')
    await assert.rejects(verifyNotFoundFallback(result, dir), /lacks the 404 title, noindex/)
    await writeFile(join(dir, '404.html'), '<title>Page not found | Formester</title><meta name="robots" content="noindex, follow"><h1>Page not found</h1>')
    await verifyNotFoundFallback(result, dir)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})

test('nuxt.config prerenders the 404 fallback and keeps it out of the sitemap', () => {
  assert.match(nuxtConfig, /NOT_FOUND_PRERENDER_ROUTE/)
  assert.match(nuxtConfig, /'prerender:generate'/)
  assert.match(nuxtConfig, /'prerender:done'/)
  assert.match(nuxtConfig, /verifyNotFoundFallback/)
  assert.match(nuxtConfig, /applyNotFoundFallback/)
  // Existing redirect must survive.
  assert.match(nuxtConfig, /'\/blog\/how-to-convert-pdf-to-fillable-form\/'[\s\S]*statusCode: 301/)
})

test('error page is branded, noindexed, links home, and follows component rules', () => {
  assert.match(errorPage, /<script setup>/)
  assert.doesNotMatch(errorPage, /export default/)
  assert.doesNotMatch(errorPage, /<svg/)
  assert.match(errorPage, /Page not found \| Formester/)
  assert.match(errorPage, /noindex/)
  assert.match(errorPage, /<main/)
  assert.match(errorPage, /<h1/)
  assert.match(errorPage, /href="\/"/)
  // Nuxt auto-imports UI/ as UIFButton; the bare name only resolves if imported.
  assert.match(errorPage, /import FButton from '@\/components\/UI\/FButton\.vue'/)
})

// HTTP probe. Run against dev (`FORMESTER_BASE_URL=http://localhost:3000`) or
// production (`FORMESTER_BASE_URL=https://formester.com`) to check real status
// codes and bodies. Skipped when unset.
const BASE = process.env.FORMESTER_BASE_URL
const HOMEPAGE_TITLE = /<title>Free Online Form Builder/
const NOT_FOUND_TITLE = /<title>Page not found \| Formester<\/title>/

const get = (path) => fetch(new URL(path, BASE), { redirect: 'manual', headers: { accept: 'text/html' } })

const missing = {
  'unknown URL': '/this-page-does-not-exist-404-probe/',
  'removed blog post': '/blog/this-post-was-removed-404-probe/',
  'removed template': '/templates/this-template-was-removed-404-probe/',
  'out-of-range pagination': '/blog/page/9999/',
  'non-numeric pagination': '/blog/page/abc/',
  'zero pagination': '/templates/page/0/',
}

for (const [label, path] of Object.entries(missing)) {
  test(`HTTP: ${label} returns a real 404 with the not-found page`, { skip: !BASE }, async () => {
    const res = await get(path)
    const body = await res.text()
    assert.equal(res.status, 404, `${path} status`)
    assert.equal(res.headers.get('location'), null)
    assert.doesNotMatch(body, HOMEPAGE_TITLE, `${path} must not serve homepage HTML`)
    assert.match(body, NOT_FOUND_TITLE)
    assert.match(body, /<meta[^>]*name="robots"[^>]*content="noindex, follow"/)
    const main = body.match(/<main[\s\S]*?<\/main>/)?.[0] || ''
    assert.match(main, /<h1[^>]*>\s*Page not found/)
    // Home CTA must render inside the page body, not just the navbar logo.
    assert.match(main, /<a href="\/" class="fbt fbt--primary/)
    assert.match(main, /<a href="\/(templates|blog)\/" class="fbt fbt--secondary/)
  })
}

const valid = {
  '/': 200,
  '/pricing/': 200,
  '/blog/': 200,
  '/templates/': 200,
  '/blog/10-best-workflow-automation-tools-in-2024/': 200,
}

for (const [path, status] of Object.entries(valid)) {
  test(`HTTP: valid route ${path} still returns ${status}`, { skip: !BASE }, async () => {
    const res = await get(path)
    const body = await res.text()
    assert.equal(res.status, status)
    assert.doesNotMatch(body, NOT_FOUND_TITLE)
  })
}

test('HTTP: existing redirects are untouched', { skip: !BASE }, async () => {
  // SSR redirects /page/1/ to the index. Nothing links to it, so static builds
  // never prerender it and hosting 404s it — either is fine, a 200 is not.
  const pageOne = await get('/blog/page/1/')
  assert.ok([301, 404].includes(pageOne.status), `/blog/page/1/ status ${pageOne.status}`)
  if (pageOne.status === 301) assert.match(pageOne.headers.get('location') || '', /\/blog\/$/)

  const retired = await get('/blog/how-to-convert-pdf-to-fillable-form/')
  const body = await retired.text()
  // Static hosting emits this as a meta-refresh page; dev emits a real 301.
  if (retired.status === 200) assert.match(body, /tools\/fillable-pdf-creator/)
  else assert.match(retired.headers.get('location') || '', /\/tools\/fillable-pdf-creator\/$/)
})
