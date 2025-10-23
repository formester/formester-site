/*
  Client-only consent plugin to gate GTM, GA4 and Microsoft Clarity.
  - Shows no UI; UI is handled by components/CookieConsent.vue
  - Exposes window.__enableTracking() that loads GTM, GA and Clarity when called
  - Auto-enables if consent cookie already present
*/

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const domain = host && host.endsWith('formester.com') ? ';domain=.formester.com' : '';
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/${domain};SameSite=Lax`;
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function loadScript(src, attrs = {}) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    Object.entries(attrs).forEach(([k, v]) => (s[k] = v));
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function enableGtm(gtmId) {
  if (!gtmId) return;
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  // Inject GTM
  const gtmSrc = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  await loadScript(gtmSrc, { async: true });
}

async function enableGa4(measurementId) {
  if (!measurementId) return;
  await loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`, { async: true });
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', measurementId);
}

async function enableClarity(clarityId) {
  if (!clarityId) return;
  if (window.clarity) return; // already loaded
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, 'clarity', 'script', clarityId);
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const gtmId = config.public?.gtm?.id || 'GTM-5GX7R49B'
  // GA4 Measurement ID used previously in project
  const gaMeasurementId = 'G-WY8RMY11PE'
  const clarityId = config.public?.clarityId || ''

  let trackingEnabled = false

  async function enableTracking() {
    if (trackingEnabled) return
    trackingEnabled = true
    try {
      await Promise.all([
        enableGtm(gtmId),
        enableGa4(gaMeasurementId),
        enableClarity(clarityId)
      ])
      // Mark enabled for other app code
      if (typeof window !== 'undefined') {
        window.__trackingEnabled = true
      }
    } catch (e) {
      // Fail silently to avoid blocking UX
      console.warn('Tracking enabling failed', e)
    }
  }

  // Expose helpers
  if (typeof window !== 'undefined') {
    window.__enableTracking = enableTracking
    window.__setConsent = (value) => setCookie('fm_consent', value, 180)
    window.__getConsent = () => getCookie('fm_consent')
  }

  // Auto-enable if already accepted previously
  if (process.client) {
    const consent = getCookie('fm_consent')
    if (consent === 'accepted') {
      enableTracking()
    }
  }

  // Provide to Nuxt app
  return {
    provide: {
      enableTracking,
      getConsent: () => getCookie('fm_consent'),
      setConsent: (value) => setCookie('fm_consent', value, 180)
    }
  }
})
