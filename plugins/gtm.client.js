// Source: https://nuxt.com/modules/nuxt-gtm
import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  if (useRuntimeConfig().public.appEnv !== 'production') return
  nuxtApp.vueApp.use(createGtm({
    id: 'GTM-56W9ZCR',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: true,
    loadScript: true,
    vueRouter: useRouter(),
    trackOnNextTick: false,
  }))
})