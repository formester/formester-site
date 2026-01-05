<template>
  <div class="layout-wrapper">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
    <CookieConsent />
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar.vue'
import Footer from '../components/Footer.vue'
import CookieConsent from '../components/CookieConsent.vue'

export default {
  components: { Footer, Navbar, CookieConsent },
  mounted() {
    this.trackReferrer()
  },
  methods: {
    trackReferrer() {
      try {
        // Get the referrer information
        const referrer = document.referrer
        const currentUrl = window.location.href
        const currentDomain = window.location.hostname
        
        // Check if we already have referrer data in cookie (to avoid overwriting on subsequent page loads)
        const existingReferrerData = this.getCookie('formester_referrer_data')
        
        // Only track external referrers (not internal navigation) and if no existing referrer data
        if (referrer && !referrer.includes(currentDomain) && !existingReferrerData) {
          // Extract domain from referrer URL
          const referrerDomain = new URL(referrer).hostname
          
          // Create referrer data object
          const referrerData = {
            referrer_domain: referrerDomain,
            referrer_url: referrer,
            landing_page: currentUrl,
            timestamp: Date.now(),
            session_id: this.generateSessionId()
          }
          
          // Store in cross-subdomain cookie (expires in 30 days)
          this.setCookie('formester_referrer_data', JSON.stringify(referrerData), 30, '.formester.com')
          
          // Send to GTM/Google Analytics (only if tracking enabled)
          if (typeof window !== 'undefined' && window.__trackingEnabled && typeof gtag === 'function') {
            gtag('event', 'referrer_tracking', {
              event_category: 'referrer',
              event_label: referrerDomain,
              referrer_url: referrer,
              landing_page: currentUrl,
              custom_parameter_1: referrerDomain
            })
          }
          
          // Also push to dataLayer for GTM (only if tracking enabled)
          if (typeof window !== 'undefined' && window.__trackingEnabled && window.dataLayer) {
            window.dataLayer.push({
              event: 'referrer_tracked',
              referrer_domain: referrerDomain,
              referrer_url: referrer,
              landing_page: currentUrl
            })
          }
          
          console.log('Referrer tracked and stored in cookie:', referrerData)
        } else if (existingReferrerData) {
          console.log('Existing referrer data found:', JSON.parse(existingReferrerData))
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
