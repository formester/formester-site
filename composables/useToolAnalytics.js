// One place for free-tool events. Fires to every sink the site has once the visitor has
// consented (plugins/consent.client.js sets window.__trackingEnabled): the GTM dataLayer,
// GA4 directly when gtag is on the page, and PostHog if it is ever added.
export function useToolAnalytics(tool = 'fillable_pdf_creator') {
  function track(event, params = {}) {
    if (typeof window === 'undefined' || !window.__trackingEnabled) return
    const payload = { tool, ...params }
    try {
      if (window.dataLayer) window.dataLayer.push({ event, ...payload })
      if (typeof window.gtag === 'function') window.gtag('event', event, payload)
      if (window.posthog && typeof window.posthog.capture === 'function') window.posthog.capture(event, payload)
    } catch {
      /* analytics must never break the tool */
    }
  }
  return { track }
}
