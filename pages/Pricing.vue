<template>
  <div>
    <Nav />
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
      <div class="ftcmp mx-auto mt-5">
        <h5 class="ftcmp__heading">Feature Comparision</h5>
        <div class="table-responsive mt-4">
          <table class="table text-start">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Free</th>
                <th scope="col">Personal</th>
                <th scope="col">Business</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Price</th>
                <td><img src="../assets/images/cross.svg" alt="NA" /></td>
                <td>$13/mo</td>
                <td>$49/mo</td>
              </tr>
              <tr>
                <th scope="row">No. of forms</th>
                <td>3</td>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <th scope="row">No. of submissions per month</th>
                <td>100</td>
                <td>5000</td>
                <td>15000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <table></table>
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
.ftcmp {
  max-width: 900px;
}

.ftcmp__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
}
</style>
