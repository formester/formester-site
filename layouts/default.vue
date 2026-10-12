<template>
  <div class="layout-wrapper opacity-100">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <V2Footer />
    <CookieConsent />
  </div>
</template>

<script>
import Navbar from '../components/v2/nav/Navbar.vue'
import CookieConsent from '../components/CookieConsent.vue'

export default {
  components: { Navbar, CookieConsent },
  mounted() {
    this.trackReferrer()
  },
  methods: {
    trackReferrer() {
      try {
        // Get the referrer information
        const referrer = document.referrer
        const currentDomain = window.location.hostname
        
        // Check if we already have referrer data in cookie (to avoid overwriting on subsequent page loads)
        const existingReferrerData = this.getCookie('formester_referrer_data')
        
        // Campaign links count even without a referrer (email, apps, stripped referrers)
        const params = new URLSearchParams(window.location.search)
        const utm = {}
        ;['utm_source', 'utm_medium', 'utm_campaign'].forEach((key) => {
          if (params.get(key)) utm[key] = params.get(key).slice(0, 255)
        })
        const isExternal = referrer && !referrer.includes(currentDomain)

        // First touch only: track external referrers or UTMs, if no existing referrer data
        if ((isExternal || Object.keys(utm).length) && !existingReferrerData) {
          // Extract domain from referrer URL
          const referrerDomain = isExternal ? new URL(referrer).hostname : null
          
          // Create referrer data object. URLs drop their query strings, which can carry personal data.
          const referrerData = {
            referrer_domain: referrerDomain,
            referrer_url: isExternal ? referrer.split('?')[0] : null,
            landing_page: window.location.origin + window.location.pathname,
            ...utm,
            timestamp: Date.now(),
            session_id: this.generateSessionId()
          }
          
          // Store in cross-subdomain cookie (expires in 30 days)
          this.setCookie('formester_referrer_data', encodeURIComponent(JSON.stringify(referrerData)), 30, '.formester.com')
          
          // Send to GTM/Google Analytics (only if tracking enabled)
          if (typeof window !== 'undefined' && window.__trackingEnabled && typeof gtag === 'function') {
            gtag('event', 'referrer_tracking', {
              event_category: 'referrer',
              event_label: referrerDomain,
              referrer_url: referrerData.referrer_url,
              landing_page: referrerData.landing_page,
              custom_parameter_1: referrerDomain
            })
          }
          
          // Also push to dataLayer for GTM (only if tracking enabled)
          if (typeof window !== 'undefined' && window.__trackingEnabled && window.dataLayer) {
            window.dataLayer.push({
              event: 'referrer_tracked',
              referrer_domain: referrerDomain,
              referrer_url: referrerData.referrer_url,
              landing_page: referrerData.landing_page
            })
          }
        }
      } catch (error) {
        console.error('Error tracking referrer:', error)
      }
    },
    
    setCookie(name, value, days, domain) {
      const expires = new Date()
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
      const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=${domain};SameSite=Lax`
      document.cookie = cookieString
    },
    
    getCookie(name) {
      const nameEQ = name + "="
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i]
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length)
        }
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length)
        }
      }
      return null
    },
    
    generateSessionId() {
      return 'session_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36)
    }
  }
}
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
