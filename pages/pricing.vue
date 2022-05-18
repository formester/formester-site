<template>
  <div>
    <div class="text-center mt-5">
      <h1 class="pricing__heading">Pricing that feels just right</h1>
      <p class="pricing__subheading">Start with our free plan</p>
      <div
        class="d-flex align-items-center justify-content-center flex-wrap mt-4"
      >
        <PricingCard
          category="Free"
          :amount="0"
          :features="freePlanFeatures"
        />
        <PricingCard
          category="Personal"
          :amount="13"
          :features="personalPlanFeatures"
          :isHighlighted="true"
        />
        <PricingCard
          category="Business"
          :amount="49"
          :features="businessPlanFeatures"
        />
      </div>
      <PricingComparision />
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

export default {
  components: { PricingCard, PricingComparision, Faq, CallToActionSection },
  data: function () {
    return {
      freePlanFeatures: {
        available: [
          'Unlimited forms',
          '100 submissions per month',
          'Form Builder',
          'Self Email Notifications',
          'Respondent Email Notifications',
          'Spam Protection',
          'API Integrations',
          'Zapier Connectors',
          'Analytics',
        ],
        unavailable: [
          'File Uploads',
          'White Label',
        ]
      },
      personalPlanFeatures: {
        available: [
          'Unlimited forms',
          '1k submissions per month',
          'Form Builder',
          'Self Email Notifications',
          'Respondent Email Notifications',
          'Spam Protection',
          'API Integrations',
          'Zapier Connectors',
          'Analytics',
          '1 GB File Uploads',
        ],
        unavailable: [
          'White Label',
        ]
      },
      businessPlanFeatures: {
        available: [
          'Unlimited forms',
          '15k submissions per month',
          'Form Builder',
          'Self Email Notifications',
          'Respondent Email Notifications',
          'Spam Protection',
          'API Integrations',
          'Zapier Connectors',
          'Analytics',
          '5 GB File Uploads',       
          'White Label',
        ],
        unavailable: []
      },
    }
  },
  head: {
    link: [{ rel: 'canonical', href: 'https://formester.com/pricing' }],
    title: 'Formester | Formester',
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
</style>
