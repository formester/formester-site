import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { capture, consentDecision, cookieValue, decode } from '../utils/signup-attribution.js'

const now = 1791360000000
const visit = (referrer, url, prior = null) => capture(prior, { referrer, url, now })

test('first external touch survives and last non-direct changes', () => {
  const first = visit('https://www.google.com/search?q=secret', 'https://formester.com/blog?utm_campaign=fall')
  const second = visit('https://chatgpt.com/c/secret', 'https://app.formester.com/users/sign_up', first)
  assert.equal(second.first.domain, 'www.google.com')
  assert.equal(second.last.domain, 'chatgpt.com')
  assert.equal(second.first.path, '/blog')
  assert.ok(!JSON.stringify(second).includes('secret'))
})

test('UTM-only entry is acquisition evidence', () => {
  const result = visit('', 'https://formester.com/?utm_source=Newsletter&utm_medium=email')
  assert.equal(result.first.evidence, 'utm')
  assert.equal(result.first.utm.source, 'Newsletter')
})

test('host boundaries and identity providers are excluded', () => {
  assert.equal(visit('https://app.formester.com/', 'https://formester.com/'), null)
  assert.equal(visit('https://accounts.google.com/', 'https://app.formester.com/'), null)
  assert.equal(visit('https://evilformester.com/', 'https://formester.com/').first.domain, 'evilformester.com')
  assert.equal(visit('https://google.com/?next=formester.com', 'https://formester.com/').first.domain, 'google.com')
})

test('malformed, expired, scalar and oversize cookies are rejected', () => {
  for (const value of ['%7B', encodeURIComponent('42'), 'a'.repeat(3001)]) assert.equal(decode(value, now), null)
  const old = visit('https://chatgpt.com/', 'https://formester.com/')
  old.first.at = old.last.at = now - 31 * 86400000
  assert.equal(decode(encodeURIComponent(JSON.stringify(old)), now), null)
  const future = visit('https://chatgpt.com/', 'https://formester.com/')
  future.first.at = future.last.at = now + 2 * 86400000
  assert.equal(decode(encodeURIComponent(JSON.stringify(future)), now), null)
})

test('a stale first touch gives way to a fresh last touch', () => {
  const first = capture(null, {
    referrer: 'https://www.google.com/',
    url: 'https://formester.com/',
    now: now - 29 * 86400000,
  })
  const both = capture(first, { referrer: 'https://chatgpt.com/', url: 'https://formester.com/', now: now - 86400000 })
  const decoded = decode(encodeURIComponent(JSON.stringify(both)), now + 2 * 86400000)
  assert.equal(decoded.first.domain, 'chatgpt.com')
  assert.equal(decoded.last.domain, 'chatgpt.com')
})

test('UTM values that look like personal data or tokens are dropped', () => {
  for (const value of [
    '555-123-4567',
    '4111-1111-1111-1111',
    'Xk29dLq8ZpQ7',
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.abc',
    'a@b.com',
  ])
    assert.equal(visit('', `https://formester.com/?utm_source=${encodeURIComponent(value)}`), null, value)
  for (const value of ['BlackFriday2025', 'spring_launch-2026', 'google'])
    assert.equal(visit('', `https://formester.com/?utm_source=${value}`).first.utm.source, value)
})

test('IP addresses, payment and identity hosts are not acquisition sources', () => {
  for (const referrer of [
    'http://192.168.1.10/',
    'https://checkout.stripe.com/',
    'https://www.paypal.com/',
    'https://acme.okta.com/',
    'https://accounts.google.co.in/',
    'https://appleid.apple.com/',
  ])
    assert.equal(visit(referrer, 'https://formester.com/'), null, referrer)
})

test('consent decision reads exact cookie names and lets any rejection win', () => {
  const doc = (cookie, meta) => ({ cookie, querySelector: () => (meta ? { getAttribute: () => meta } : null) })
  assert.equal(consentDecision(doc('xcookie_consent=all')), null)
  assert.equal(consentDecision(doc('cookie_consent=all; cookie_consent=essential')), 'rejected')
  assert.equal(consentDecision(doc('cookie_consent=all; fm_consent=rejected')), 'rejected')
  assert.equal(consentDecision(doc('fm_consent=accepted')), 'accepted')
  assert.equal(consentDecision(doc('', 'accepted')), 'accepted')
  assert.equal(consentDecision(doc('cookie_consent=all', 'rejected')), 'rejected')
})

test('the contract vector shared with the app decodes to the expected touches', () => {
  const vector = JSON.parse(readFileSync(new URL('./fixtures/signup-attribution-contract.json', import.meta.url)))
  const built = capture(
    capture(null, {
      referrer: 'https://www.google.com/search?q=x',
      url: 'https://formester.com/blog/post?utm_campaign=launch',
      now: vector.now,
    }),
    { referrer: 'https://chatgpt.com/c/private', url: 'https://app.formester.com/users/sign_up', now: vector.now },
  )
  assert.equal(cookieValue(built), vector.cookie)
  assert.deepEqual(decode(vector.cookie, vector.now), vector.decoded)
})

import { recordEntry, acceptEntry, rejectEntry, COOKIE_NAME } from '../utils/signup-attribution.js'

test('entry remains in memory until acceptance and is removed on rejection', () => {
  let stored = ''
  const document = {
    referrer: 'https://chatgpt.com/c/private',
    get cookie() {
      return stored
    },
    set cookie(value) {
      stored = value
    },
  }
  const events = []
  const window = {
    location: { href: 'https://formester.com/?utm_source=chatgpt', hostname: 'formester.com', protocol: 'https:' },
    gtag: (...args) => events.push(args),
    dataLayer: [],
  }
  recordEntry(window, document)
  assert.equal(stored, '')
  assert.equal(window.__pendingAttribution.first.domain, 'chatgpt.com')
  acceptEntry(window, document)
  assert.ok(stored.startsWith(`${COOKIE_NAME}=`))
  assert.ok(!stored.includes('private'))
  rejectEntry(window, document)
  assert.ok(stored.includes('Max-Age=0'))
  assert.deepEqual(events, [])
  assert.deepEqual(window.dataLayer, [])
})

test('direct visits preserve both touches while a later UTM-only visit updates last', () => {
  const first = visit('https://www.google.com/search', 'https://formester.com/')
  const direct = visit('', 'https://app.formester.com/users/sign_up', first)
  assert.equal(direct, first)
  const campaign = visit('', 'https://app.formester.com/users/sign_up?utm_source=reddit', direct)
  assert.equal(campaign.first.domain, 'www.google.com')
  assert.equal(campaign.last.domain, null)
  assert.equal(campaign.last.utm.source, 'reddit')
  assert.equal(decode(encodeURIComponent(JSON.stringify({ ...campaign, extra: 'x' })), now), null)
  assert.equal(decode(encodeURIComponent(JSON.stringify(campaign)) + ';bad', now), null)
})

test('landing paths cannot retain user slugs, tokens, or fragments', () => {
  const result = visit(
    'https://chatgpt.com/',
    'https://formester.com/u/johnsmith?email=john@example.com#access_token=private',
  )
  assert.equal(result.first.path, '/')
  assert.ok(!JSON.stringify(result).includes('john'))
  assert.ok(!JSON.stringify(result).includes('private'))
})

test('an already accepted visitor is written directly and a rejected one is never stored', () => {
  for (const [cookie, expectWrite] of [
    ['fm_consent=accepted', true],
    ['fm_consent=rejected', false],
  ]) {
    let stored = cookie
    const document = {
      referrer: 'https://chatgpt.com/',
      get cookie() {
        return stored
      },
      set cookie(value) {
        stored = value
      },
    }
    const window = { location: { href: 'https://formester.com/', hostname: 'formester.com', protocol: 'https:' } }
    recordEntry(window, document)
    assert.equal(stored.startsWith(`${COOKIE_NAME}=`), expectWrite)
    assert.equal(window.__pendingAttribution, undefined)
  }
})
