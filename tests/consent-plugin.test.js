import test from 'node:test'
import assert from 'node:assert/strict'

test('marketing rejection clears attribution and leaves the app consent cookie alone', async () => {
  const jar = new Map([['formester_attribution_v1', 'old']])
  globalThis.document = {
    get cookie() {
      return [...jar].map(([key, value]) => `${key}=${value}`).join('; ')
    },
    set cookie(line) {
      const [pair] = line.split(';')
      const separator = pair.indexOf('=')
      const key = pair.slice(0, separator)
      const value = pair.slice(separator + 1)
      if (line.includes('Max-Age=0') || value === '') jar.delete(key)
      else jar.set(key, value)
    },
  }
  globalThis.window = { location: { hostname: 'formester.com', protocol: 'https:' } }
  globalThis.defineNuxtPlugin = (factory) => factory
  globalThis.useRuntimeConfig = () => ({ public: { gtm: { id: '' }, clarityId: '' } })
  const { default: plugin } = await import('../plugins/consent.client.js')
  plugin({})
  window.__setConsent('rejected')
  assert.equal(jar.get('fm_consent'), 'rejected')
  assert.equal(jar.has('cookie_consent'), false)
  assert.equal(jar.has('formester_attribution_v1'), false)
  assert.equal(window.dataLayer, undefined)
  delete globalThis.document
  delete globalThis.window
  delete globalThis.defineNuxtPlugin
  delete globalThis.useRuntimeConfig
})
