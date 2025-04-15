// componentMapping.js
export default {
  'macro-components.hero-centered': () => import('@/components/home/Hero.vue'),
  'macro-components.trust-seals': () => import('@/components/home/TrustSeals.vue'),
  'macro-components.collapsible-item-list': () => import('@/components/home/MostUsedFeatures.vue'),
  'macro-components.embed-form-url': () => import('@/components/home/EmbedForm.vue'),
  'macro-components.testimonials': () => import('@/components/home/Testimonials.vue'),
  'macro-components.cta': () => import('@/components/CallToActionSection.vue'),

  'macro-components.hero-row-layout': () => import('@/components/HeroRowLayout.vue'),
  'macro-components.three-column-benefits': () => import('@/components/features/ThreeColBenefits.vue'),
  'macro-components.feature-detail-section': () => import('@/components/features/FeatureDetailsSection.vue'),
  'macro-components.feature-showcase': () => import('@/components/features/FeatureShowcase.vue'),
  'macro-components.simple-steps-create': () => import('@/components/features/SimpleStepsCreate.vue'),
  'macro-components.three-column-template': () => import('@/components/features/TemplateSection.vue'),
  'macro-components.two-column-benefits': () => import('@/components/features/TwoColBenefits.vue'),
  'macro-components.simple-steps-create-lg': () => import('@/components/features/SimpleStepsCreateLg.vue'),
  'macro-components.standout-feature-detail': () => import('@/components/features/StandoutFeatureDetail.vue'),
  'macro-components.faqs': () => import('@/components/features/Faq.vue'),
  'macro-components.faqs-with-categories': () => import('@/components/features/FaqWithCategories.vue'),
  'macro-components.code-showcase-section': () => import('@/components/features/FeatureCodeShowcase.vue'),
  'macro-components.hero-centered-dark': () => import('@/components/strapi/HeroCenteredDark.vue'),
  'macro-components.rich-text': () => import('@/components/strapi/RichText.vue')
}
