export const COOKIE_NAME = 'formester_attribution_v1'
export const MAX_AGE = 30 * 86400000
const MAX_SKEW = 86400000
const MAX_COOKIE = 3000
const UTM_KEYS = ['source', 'medium', 'campaign', 'content', 'term']
const HOST = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/
const VALUE = /^[a-zA-Z0-9_.-]{1,100}$/
const IDENTIFIER = /^(?:[a-f0-9]{16,}|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9-]{10,}|eyJ.*)$/i
/** Generated tokens flip between upper, lower and digits far more often than campaign names do. */
function looksGenerated(run) {
  if (run.length < 12) return false
  const classes = [...run].map((char) => (/\d/.test(char) ? 'd' : char === char.toUpperCase() ? 'u' : 'l'))
  const flips = classes.filter((kind, index) => index > 0 && kind !== classes[index - 1]).length
  return flips >= run.length * 0.4
}
function safeValue(value) {
  if (!VALUE.test(value) || IDENTIFIER.test(value)) return false
  // Phone, card and account numbers often arrive with separators, so count digits across them.
  if ((value.match(/\d/g) || []).length >= 7) return false
  return !value.split(/[_.-]/).some(looksGenerated)
}
const excluded = [
  'formester.com',
  'accounts.google.com',
  'login.microsoftonline.com',
  'login.microsoft.com',
  'login.live.com',
  'account.live.com',
  'login.windows.net',
  'appleid.apple.com',
  'oauth.wix.com',
  'users.wix.com',
  'manage.wix.com',
  'accounts.shopify.com',
  'admin.shopify.com',
  'auth.shopify.com',
  'myshopify.com',
  'okta.com',
  'auth0.com',
  'onelogin.com',
  'stripe.com',
  'paypal.com',
]

function isHost(host) {
  const labels = host.split('.')
  // A numeric last label means an IP address, which identifies a network, not a source.
  return (
    host.length <= 253 && labels.length > 1 && labels.every((label) => HOST.test(label)) && !/^\d+$/.test(labels.at(-1))
  )
}
function excludedHost(host) {
  return /^accounts\.google\./.test(host) || excluded.some((domain) => host === domain || host.endsWith(`.${domain}`))
}
const SAFE_PATHS = new Set([
  'blog',
  'pricing',
  'features',
  'templates',
  'users',
  'integrations',
  'tools',
  'signup',
  'login',
  'contact',
  'enterprise',
  'form-builder',
  'ai-form-generator',
])
function cleanPath(path) {
  const first = path.split('/')[1]
  return SAFE_PATHS.has(first) ? `/${first}` : '/'
}
function touch(referrer, url, now) {
  let landing
  try {
    landing = new URL(url)
  } catch {
    return null
  }
  if (!['https:', 'http:'].includes(landing.protocol)) return null
  let domain = null
  try {
    const ref = new URL(referrer)
    if (['https:', 'http:'].includes(ref.protocol) && isHost(ref.hostname) && !excludedHost(ref.hostname))
      domain = ref.hostname.toLowerCase()
  } catch {
    /* No usable referrer. */
  }
  const utm = {}
  for (const key of UTM_KEYS) {
    const value = landing.searchParams.get(`utm_${key}`)
    if (value && safeValue(value)) utm[key] = value
  }
  if (!domain && !Object.keys(utm).length) return null
  return {
    domain,
    utm,
    path: cleanPath(landing.pathname),
    at: now,
    evidence: domain && Object.keys(utm).length ? 'referrer_utm' : domain ? 'referrer' : 'utm',
  }
}
function validTouch(value, now, { fresh = true } = {}) {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    Object.keys(value).sort().join(',') !== 'at,domain,evidence,path,utm'
  )
    return false
  if (
    value.domain !== null &&
    (typeof value.domain !== 'string' ||
      !isHost(value.domain) ||
      excludedHost(value.domain) ||
      value.domain !== value.domain.toLowerCase())
  )
    return false
  if (!value.utm || typeof value.utm !== 'object' || Array.isArray(value.utm)) return false
  if (
    Object.keys(value.utm).some(
      (key) => !UTM_KEYS.includes(key) || typeof value.utm[key] !== 'string' || !safeValue(value.utm[key]),
    )
  )
    return false
  if (!value.domain && !Object.keys(value.utm).length) return false
  if (typeof value.path !== 'string' || value.path !== cleanPath(value.path)) return false
  if (!Number.isInteger(value.at) || value.at > now + MAX_SKEW || (fresh && value.at < now - MAX_AGE)) return false
  const evidence = value.domain && Object.keys(value.utm).length ? 'referrer_utm' : value.domain ? 'referrer' : 'utm'
  return value.evidence === evidence
}
/** Parses a v1 cookie; a stale first touch gives way to a still-fresh last touch. */
export function decode(raw, now = Date.now()) {
  if (typeof raw !== 'string' || raw.length > MAX_COOKIE) return null
  try {
    const data = JSON.parse(decodeURIComponent(raw))
    if (
      !data ||
      typeof data !== 'object' ||
      Array.isArray(data) ||
      Object.keys(data).sort().join(',') !== 'first,last,v' ||
      data.v !== 1 ||
      !validTouch(data.first, now, { fresh: false }) ||
      !validTouch(data.last, now) ||
      data.first.at > data.last.at
    )
      return null
    return data.first.at < now - MAX_AGE ? { v: 1, first: data.last, last: data.last } : data
  } catch {
    return null
  }
}
export function capture(prior, entry) {
  const current = touch(entry.referrer, entry.url, entry.now)
  if (!current) return prior
  const result = { v: 1, first: prior?.first || current, last: current }
  return encodeURIComponent(JSON.stringify(result)).length <= MAX_COOKIE ? result : prior
}
export function cookieValue(data) {
  return encodeURIComponent(JSON.stringify(data))
}
function cookieValues(document, name) {
  return document.cookie
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.startsWith(`${name}=`))
    .map((item) => item.slice(name.length + 1))
}
export function readCookie(document, now = Date.now()) {
  const [found] = cookieValues(document, COOKIE_NAME)
  return found ? decode(found, now) : null
}
/** Explicit consent only: any rejection wins, and an undecided visitor counts as not accepted. */
export function consentDecision(document) {
  const server = document.querySelector?.('meta[name="formester-analytics-consent"]')?.getAttribute('content')
  const app = cookieValues(document, 'cookie_consent')
  const site = cookieValues(document, 'fm_consent')
  if (server === 'rejected' || app.includes('essential') || site.includes('rejected')) return 'rejected'
  if (server === 'accepted' || app.includes('all') || site.includes('accepted')) return 'accepted'
  return null
}
export function recordEntry(window, document) {
  const entry = { referrer: document.referrer, url: window.location.href, now: Date.now() }
  const existing = readCookie(document, entry.now)
  const updated = capture(existing, entry)
  if (!updated || updated === existing) return
  const consent = consentDecision(document)
  if (consent === 'accepted') writeCookie(window, document, updated)
  else if (consent === null) window.__pendingAttribution = updated
}
export function acceptEntry(window, document) {
  const current = readCookie(document)
  const pending = window.__pendingAttribution
  if (pending) {
    const value = current
      ? { v: 1, first: current.first, last: pending.last.at >= current.last.at ? pending.last : current.last }
      : pending
    writeCookie(window, document, value)
  }
  delete window.__pendingAttribution
}
export function rejectEntry(window, document) {
  delete window.__pendingAttribution
  const domain = cookieDomain(window)
  for (const name of [COOKIE_NAME, 'formester_referrer_data'])
    document.cookie = `${name}=;Max-Age=0;Path=/;SameSite=Lax${domain}`
}
function cookieDomain(window) {
  const host = window.location.hostname
  return host === 'formester.com' || host.endsWith('.formester.com') ? ';Domain=.formester.com' : ''
}
function writeCookie(window, document, value) {
  const secure = window.location.protocol === 'https:' ? ';Secure' : ''
  document.cookie = `${COOKIE_NAME}=${cookieValue(value)};Max-Age=2592000;Path=/;SameSite=Lax${cookieDomain(window)}${secure}`
}
