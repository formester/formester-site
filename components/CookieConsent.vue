<template>
  <transition name="fade">
    <div v-if="visible" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div class="cookie-card">
        <div class="cookie-heading">We use cookies to improve your experience</div>
        <div class="cookie-subtext">
          Cookies help us understand site performance, visitor interactions, and technical issues.
          Learn more in our <nuxt-link class="link-underline" to="/privacy/">Privacy Policy</nuxt-link>.
        </div>
        <div class="cookie-actions">
          <button class="btn reject" @click="reject">Reject</button>
          <button class="btn accept" @click="accept">Accept</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    try {
      const consent = this.$getConsent ? this.$getConsent() : (window.__getConsent && window.__getConsent())
      this.visible = consent !== 'accepted' && consent !== 'rejected'
    } catch (e) {
      this.visible = true
    }
  },
  methods: {
    accept() {
      try {
        if (this.$setConsent) this.$setConsent('accepted')
        else if (window.__setConsent) window.__setConsent('accepted')
        if (this.$enableTracking) this.$enableTracking()
        else if (window.__enableTracking) window.__enableTracking()
      } finally {
        this.visible = false
      }
    },
    reject() {
      try {
        // Do not set any cookies on reject; simply close the banner
      } finally {
        this.visible = false
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s; }
.fade-enter, .fade-leave-to { opacity: 0; }

.cookie-banner {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 999999; /* max 32-bit int to exceed most widget overlays (e.g., Crisp) */
  pointer-events: none; /* so only the card receives events */
}
.cookie-card {
  width: 400px;
  max-width: calc(100vw - 24px);
  background: #ffffff;
  color: #1f2937; /* slate-800 */
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  padding: 16px 16px 12px 16px;
  pointer-events: auto;
}
.cookie-heading {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--clr-text-primary);
}
.cookie-subtext {
  margin-top: 4px;
  color: var(--clr-text-secondary);
  font-size: 14px;
  line-height: 1.7;
}
.cookie-actions {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
.btn.reject {
  color: var(--clr-text-secondary);
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 6px 12px;
  font-weight: 600;
}
.btn.reject:hover {
  color: var(--clr-text-primary);
  font-weight: 600;
}
.btn.accept {
  background: var(--clr-primary);
  color: #ffffff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
}
.btn.accept:hover {
  background: var(--clr-primary-hover);
}
/* Utilities */
.link-underline {
  color: var(--clr-primary);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid rgba(0,0,0,0);
  transition: color .15s ease, border-color .15s ease;
}
.link-underline:hover {
  color: var(--clr-primary-hover);
  border-bottom-color: var(--clr-primary-hover);
}
.link-underline:focus-visible {
  outline: 2px solid var(--clr-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .cookie-banner { left: 16px; right: 16px; bottom: 16px; }
  .cookie-card { width: 100%; }
}
</style>
