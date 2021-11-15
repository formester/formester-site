<template>
  <div>
    <div class="text-center mt-5">
      <h4 class="pricing__heading">Pricing that feels just right</h4>
      <h6 class="pricing__subheading">Start with our free plan</h6>
      <div
        class="d-flex align-items-center justify-content-center flex-wrap mt-4"
      >
        <PricingCard category="Free" :amount="0" :features="features1" />
        <PricingCard
          category="Personal"
          :amount="13"
          :features="features2"
          :isHighlighted="true"
        />
        <PricingCard category="Business" :amount="49" :features="features3" />
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
      features1: [
        '3 number of forms',
        '100 submissions per month',
        'Spam Protection',
        'API Integrations',
      ],
      features2: [
        '5 number of forms',
        '5000 submissions per month',
        'Campaign Analytics',
        'Drip campaigns',
      ],
      features3: [
        '10 number of forms',
        '15000 submissions per month',
        'Drip campaigns',
        'Prospect new customers',
      ],
    }
  },
}
</script>

<style scoped>
.pricing__heading {
  font-size: var(--ft-bigger-body);
  font-weight: 600;
}
</style>
