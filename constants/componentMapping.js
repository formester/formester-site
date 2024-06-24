// componentMapping.js
export default {
  'shared.hero-centered': () => import('@/components/home/Hero.vue'),
  'home-page.trust-seals': () => import('@/components/home/TrustSeals.vue'),
  'home-page.collapsible-item-list': () => import('@/components/home/MostUsedFeatures.vue'),
  'home-page.embade-form-url': () => import('@/components/home/EmbadeForm.vue'),
  'home-page.testimonials': () => import('@/components/home/Testimonials.vue'),
  'home-page.cta-home': () => import('@/components/CallToActionSection.vue'),
}
