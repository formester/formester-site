<template>
  <div>
    <div class=" upper-margin text-center px-3">
      <span class="d-block mb-1 pricing__subtitle text__primary">Pricing</span>
      <h1 class="pricing__heading mt-2">Pricing that feels just right</h1>
      <p class="pricing__subheading mt-3">
        Select the perfect plan for your needs, and start building beautiful
        forms!
      </p>

      <div
        class="d-none d-sm-flex justify-content-center align-items-center plan_toggle__switch"
      >
        <span>Monthly pricing</span>
        <label class="switch">
          <input type="checkbox" class="plan_toggle" v-model="isYearly" />
          <div class="slider round"></div>
        </label>
        <span
          >Annual pricing <span class="text__primary">(save 20%)</span></span
        >
      </div>

      <div
        class="d-flex d-sm-none justify-content-center align-items-center plan_toggle__switch"
      >
        <label class="switch">
          <input type="checkbox" class="plan_toggle" v-model="isYearly" />
          <div class="slider round"></div>
        </label>
        <span v-if="!isYearly">Monthly pricing</span>
        <span v-else
          >Annual pricing <span class="text__primary">(save 20%)</span></span
        >
      </div>

      <div class="mw-1200 mx-auto">
        <div
          :class="['pricing-cards-container', { 'pricing-hidden': isYearly }]"
          :v-show="isYearly"
        >
          <div class="row gx-3 d-flex align-items-start justify-content-center mt-5 pt-3">
            <PricingCard :plan="free" muted />
            <PricingCard :plan="personalMonthly" />
            <PricingCard :plan="businessMonthly" highlighted />
            <PricingCard :plan="enterprise" contact-sales />
          </div>
        </div>
        <div
          :class="['pricing-cards-container', { 'pricing-hidden': !isYearly }]"
          :v-show="!isYearly"
        >
          <div class="row gx-3 d-flex align-items-start justify-content-center mt-5 pt-3">
            <PricingCard :plan="free" muted />
            <PricingCard :plan="personalYearly" />
            <PricingCard :plan="businessYearly" highlighted />
            <PricingCard :plan="enterprise" contact-sales />
          </div>
        </div>
        <div class="mt-5 py-5">
          <h2 class="comparison__table-heading mb-3">
            See All Features and Compare Plan
          </h2>
          <p class="comparison__table-description mt-1">
            Everything you need to know about the product features and pricings.
          </p>
          <PricingTable
            :comparison-table-features="comparisonTableFeatures"
            :pricing-plans="pricingPlans"
          />
        </div>
      </div>
      <CallToActionSection />
      <Faq :faqList="faqs" title="Frequently Asked Questions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import PricingCard from '@/components/pricing/PricingCard.vue'
import Faq from '@/components/features/Faq.vue'
import {
  free,
  personalMonthly,
  businessMonthly,
  personalYearly,
  businessYearly,
  enterprise,
  comparisonTableFeatures,
} from '@/constants/plan'
import getSiteMeta from '@/utils/getSiteMeta'
import PricingTable from '@/components/pricing/PricingTable.vue'

const isYearly = ref(true)

const faqs = [
  {
    header: 'Can I try before I buy?',
    body: "It's free to set up an account and create a campaign. But to get more than 100 submissions, you'll need to choose a plan.",
  },
  {
    header: 'Can I change plans at anytime?',
    body: 'Yes. Formester is a pay-as-you-go service and you can upgrade, downgrade or cancel at any time. You can upgrade anytime right from your account page.',
  },
  {
    header: "What happens if I don't like the service?",
    body: "Don't worry, if you are ever unhappy with our service and wish to cancel, we'll happily reimburse your last month -- no questions asked.",
  },
  {
    header: 'Do I get a discount on yearly plan?',
    body: 'You do, If you buy yearly plan you only have to pay for 11 months and you get 1 month free.',
  },
  {
    header: 'Is there an referral/affiliate program?',
    body: "Yes we do. It's an invite only program. If you need access to this please reach out to our support.",
  },
  {
    header: 'Do you offer discount for NGO and School?',
    body: "Yes. Get in touch and we'll help you out.",
  },
  {
    header: 'What if I want a reseller account?',
    body: 'We do support resellers. Please reach out to us at support@formester.com and we will love to help you.',
  },
  {
    header: 'I have more questions',
    body: "No problem! Contact us and we'll get in touch with you shortly :)",
  },
]

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/pricing/',
    title: 'Pricing that feels just right',
    description:
      'Select the perfect plan for your needs, and star building beautiful forms!',
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
  }
  return getSiteMeta(metaData)
})

const pricingPlans = computed(() => ({
  free: free.price,
  personal: isYearly.value ? personalYearly.price : personalMonthly.price,
  business: isYearly.value ? businessYearly.price : businessMonthly.price,
}))

// Use useHead for Nuxt 3 head management
useHead({
  title: 'Plans & Pricing | Formester',
  meta: computed(() => [...meta.value]),
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/pricing/',
    },
  ],
})

// JSON-LD structured data
const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'WebApplication',
  name: 'Formester - HTML Form Backend',
  operatingSystem: 'all',
  browserRequirements: 'Requires Javascript and HTML5 support',
  url: 'https://formester.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '8',
  },
  offers: {
    '@type': 'AggregateOffer',
    offeredBy: {
      '@type': 'Organization',
      name: 'Formester',
    },
    highPrice: '49.00',
    lowPrice: '0',
    offerCount: '3',
    priceCurrency: 'USD',
    priceSpecification: [
      {
        '@type': 'UnitPriceSpecification',
        price: '0.00',
        priceCurrency: 'USD',
        name: 'Formester FREE subscription',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '100',
          unitCode: 'SUB',
          unitText: 'Submissions',
        },
      },
      {
        '@type': 'UnitPriceSpecification',
        price: '13.00',
        priceCurrency: 'USD',
        name: 'Formester personal subscription',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '1000',
          unitCode: 'SUB',
          unitText: 'Submissions',
        },
      },
      {
        '@type': 'UnitPriceSpecification',
        price: '49.00',
        priceCurrency: 'USD',
        name: 'Formester business subscription',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '15000',
          unitCode: 'SUB',
          unitText: 'Submissions',
        },
      },
    ],
  },
  creator: {
    '@type': 'Organization',
    url: 'https://formester.com/',
    name: 'Formester',
  },
}

// Add JSON-LD to head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
})
</script>

<style scoped>
.upper-margin {
  margin-top: 10rem;
}

@media (max-width: 991px) {
  .upper-margin {
    margin-top: 8rem;
  }
}

.mw-1200 {
  max-width: 1200px;
}

/* Pricing cards container - both monthly and yearly in DOM for SEO */
.pricing-cards-container {
  display: block;
  transition: opacity 0.3s ease-in-out;
}

.pricing-cards-container.pricing-hidden {
  display: none;
}

.pricing__subtitle {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.pricing__heading {
  color: var(--clr-text-primary);
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.96px;
}

.pricing__subheading {
  color: var(--clr-text-secondary);
  font-size: 20px;
  line-height: 30px;
}

.comparison__table-heading {
  color: var(--clr-text-primary);
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
}

.comparison__table-description {
  color: var(--clr-text-secondary);
  font-size: 20px;
  line-height: 30px;
}

.plan_toggle__switch {
  margin-block: 40px 64px;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
}

/* Toggle Button */
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 27px;
  margin-bottom: 0px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--clr-primary);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--clr-primary);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.text__primary {
  color: var(--clr-primary);
}

@media screen and (max-width: 768px) {
  .pricing__subtitle {
    font-size: 14px;
  }

  .pricing__heading {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.72px;
  }

  .pricing__subheading {
    font-size: 18px;
    line-height: 28px;
  }

  .comparison__table-heading {
    font-size: 30px;
    line-height: 38px;
  }

  .comparison__table-description {
    font-size: 18px;
    line-height: 28px;
  }

  .plan_toggle__switch {
    margin-block: 40px 0;
  }
}
</style>