<template>
  <div>
    <div class="text-center mt-5 px-3">
      <h1 class="pricing__heading">
        Black Friday Offer - Flat 40% off on Annual Plans
      </h1>
      <p class="pricing__subheading">
        Take advantage of this Black Friday Deal to buy our plans for a fraction
        of the price! Offer lasts till 30 November.
      </p>

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

      <div class="mw-1200 mx-auto">
        <div
          v-if="!isYearly"
          class="row gx-3 d-flex align-items-start justify-content-center mt-5 pt-3"
        >
          <PricingCard :plan="free" />
          <PricingCard :plan="personalMonthly" :isHighlighted="true" />
          <PricingCard :plan="businessMonthly" />
        </div>
        <div
          v-if="isYearly"
          class="row gx-3 d-flex align-items-start justify-content-center mt-5 pt-3"
        >
          <PricingCard :plan="free" />
          <PricingCard :plan="personalYearly" :isHighlighted="true" />
          <PricingCard :plan="businessYearly" />
        </div>
        <div class="table-responsive mt-5 py-5">
          <h2 class="comparision__table-heading mb-5">
            See All Features and Compare Plan
          </h2>
          <table class="table text-start">
            <thead>
              <tr class="plan-header">
                <td></td>
                <td>
                  <div class="plan__name mb-2">Free</div>
                  <button class="table__button">Start for free</button>
                </td>
                <td>
                  <div class="plan__name mb-2">Pro</div>
                  <button class="table__button hglt">Get started</button>
                </td>
                <td>
                  <div class="plan__name mb-2">Business</div>
                  <button class="table__button">Get started</button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in comparisonTableFeatures"
                :key="feature.name"
              >
                <th class="feature">{{ feature.name }}</th>
                <td>
                  <template v-if="feature.free === 'Yes'">
                    <nuxt-img src="check-green.svg" />
                  </template>
                  <template v-else>
                    {{ feature.free }}
                  </template>
                </td>
                <td>
                  <template v-if="feature.pro === 'Yes'">
                    <nuxt-img src="check-green.svg" />
                  </template>
                  <template v-else>
                    {{ feature.pro }}
                  </template>
                </td>
                <td>
                  <template v-if="feature.business === 'Yes'">
                    <nuxt-img src="check-green.svg" />
                  </template>
                  <template v-else>
                    {{ feature.business }}
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CallToActionSection />
      <Faq />
    </div>
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import PricingCard from '../components/pricing/PricingCard.vue'
import Faq from '../components/pricing/Faq.vue'
import {
  free,
  personalMonthly,
  businessMonthly,
  freeYearly,
  personalYearly,
  businessYearly,
  comparisonTableFeatures,
} from '../constants/plan'

// MetaTags
import getSiteMeta from '../utils/getSiteMeta'

export default {
  components: { PricingCard, Faq, CallToActionSection },
  data() {
    return {
      isYearly: true,
      free,
      personalMonthly,
      businessMonthly,
      freeYearly,
      personalYearly,
      businessYearly,
      comparisonTableFeatures,
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
          {
            '@type': 'Question',
            name: 'Do I get a discount on yearly plan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You do, If you buy yearly plan you only have to pay for 11 months and you get 1 month free.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there an referral/affiliate program?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes we do. It's an invite only program. If you need access to this please reach out to our support.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer discount for NGO and School?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Get in touch and we’ll help you out.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if I want a reseller account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We do support resellers. Please reach out to us at support@formester.com and we will love to help you.',
            },
          },
          {
            '@type': 'Question',
            name: 'I have more questions',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No problem! Contact us and we'll get in touch with you shortly :)",
            },
          },
        ],
      },
    ]
  },
}
</script>

<style scoped>
.mw-1200 {
  max-width: 1200px;
}

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

/* TABLE */

.comparision__table-heading {
  font-size: 28px;
  line-height: 40px;
}

thead tr td {
  border: none;
}

tr td,
tr th {
  padding-block: 12px;
  font-size: 14px;
}

tr td,
thead tr td {
  padding-inline: 20px;
}

thead tr td:nth-child(3) {
  background-color: #fafafa;
  border-inline: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}

tbody tr td:nth-child(3) {
  background-color: #fafafa;
  border-inline: 1px solid #e5e5e5;
}

table td {
  min-width: 169px;
}

.plan__name {
  font-size: 18px;
  font-weight: 600;
}

.table__button {
  padding: 8px 16px;
  border: 1px solid var(--clr-primary);
  background: transparent;
  color: var(--clr-primary);
  border-radius: 8px;
}

.table__button.hglt {
  background-color: var(--clr-primary);
  color: white;
}

.feature {
  font-weight: 500;
}
</style>
