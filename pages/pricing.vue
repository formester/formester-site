<template>
  <div>
    <div class="text-center mt-5">
      <h1 class="pricing__heading">Pricing that feels just right</h1>
      <p class="pricing__subheading">Start with our free plan</p>

      <div
        class="d-flex justify-content-center align-items-center plan_toggle__switch"
      >
        <span>Monthly</span>
        <label class="switch">
          <input type="checkbox" class="plan_toggle" v-model="isYearly" />
          <div class="slider round"></div>
        </label>
        <span>Yearly</span>
      </div>

      <div
        v-if="!isYearly"
        class="d-flex align-items-center justify-content-center flex-wrap mt-4"
      >
        <PricingCard :plan="free" />
        <PricingCard :plan="personalMonthly" :isHighlighted="true" />
        <PricingCard :plan="businessMonthly" />
      </div>

      <div
        v-if="isYearly"
        class="d-flex align-items-center justify-content-center flex-wrap mt-4"
      >
        <PricingCard :plan="free" />
        <PricingCard :plan="personalYearly" :isHighlighted="true" />
        <PricingCard :plan="businessYearly" />
      </div>
      <PricingComparision :isYearly="isYearly" />
      <CallToActionSection />
      <Faq />
    </div>
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import PricingCard from '../components/pricing/PricingCard.vue'
import PricingComparision from '../components/pricing/PricingComparision.vue'
import Faq from '../components/pricing/Faq.vue'
import {
  free,
  personalMonthly,
  businessMonthly,
  freeYearly,
  personalYearly,
  businessYearly,
} from '../constants/plan'

// MetaTags
import getSiteMeta from '../utils/getSiteMeta'

export default {
  components: { PricingCard, PricingComparision, Faq, CallToActionSection },
  data() {
    return {
      isYearly: false,
      free,
      personalMonthly,
      businessMonthly,
      freeYearly,
      personalYearly,
      businessYearly,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/pricing/',
        title: 'Pricing that feels just right',
        description: 'Start with our free plan',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with pricing page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with pricing page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Plans & Pricing | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/pricing/',
        },
      ],
    }
  },
  jsonld() {
    return [
      {
        '@context': 'http://schema.org',
        '@type': 'WebApplication',
        '@id': 'kwfinder',
        applicationCategory: 'BusinessApplication',
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
          '@id': '#organization',
          url: 'https://formester.com/',
          name: 'Formester',
          logo: {
            '@type': 'ImageObject',
            url: 'https://formester.com/logo.png',
          },
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I try before I buy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It’s free to set up an account and create a campaign. But to get more than 100 submissions, you’ll need to choose a plan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I change plans at anytime?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Formester is a pay-as-you-go service and you can upgrade, downgrade or cancel at any time. You can upgrade anytime right from your account page.',
            },
          },
          {
            '@type': 'Question',
            name: "What happens if I don't like the service?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Don't worry, if you are ever unhappy with our service and wish to cancel, we'll happily reimburse your last month -- no questions asked.",
            },
          },
        ],
      },
    ]
  },
}
</script>

<style scoped>
.pricing__heading {
  font-size: var(--ft-bigger-body);
  font-weight: 600;
}

.plan_toggle__switch {
  margin-top: 3rem;
  gap: 18px;
  font-size: var(--ft-subtitle);
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
  background-color: #6d5eac;
}

input:focus + .slider {
  box-shadow: 0 0 1px #6d5eac;
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
</style>
