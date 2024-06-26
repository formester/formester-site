// componentMapping.js
export default {
  'macro-components.hero-centered': () => import('@/components/home/Hero.vue'),
  'macro-components.trust-seals': () => import('@/components/home/TrustSeals.vue'),
  'macro-components.collapsible-item-list': () => import('@/components/home/MostUsedFeatures.vue'),
  'macro-components.embade-form-url': () => import('@/components/home/EmbadeForm.vue'),
  'macro-components.testimonials': () => import('@/components/home/Testimonials.vue'),
  'macro-components.cta': () => import('@/components/CallToActionSection.vue'),
}
