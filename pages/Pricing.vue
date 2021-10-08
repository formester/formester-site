<template>
  <div>
    <Nav />
    <div class="text-center mt-5">
      <h4>Pricing that feels just right</h4>
      <h6>Start with our free plan</h6>
      <div class="d-flex align-items-center justify-content-center mt-5">
        <PricingCard category="Free" :amount="0" :features="features" />
        <PricingCard
          category="Personal"
          :amount="13"
          :features="features"
          :isHighlighted="true"
        />
        <PricingCard category="Business" :amount="49" :features="features" />
      </div>
    </div>
  </div>
</template>

<script>
import PricingCard from '../components/pricing/PricingCard.vue'
export default {
  components: { PricingCard },
  data: function () {
    return {
      features: [
        'something here',
        'something else',
        'something here',
        'something else',
      ],
    }
  },
}
</script>

<style scoped></style>
