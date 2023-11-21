<template>
  <!-- <div
    @mouseenter="addHighlight"
    @mouseleave="removeHighlight"
    class="pricing__card d-flex flex-column"
    :class="{ hglt: highlight }"
  >
    <h6 class="pricing__category text-start">{{ plan.name }}</h6>
    <div class="d-flex align-items-baseline">
      <div class="d-flex flex-column align-items-start mb-2">
        <h2 class="pricing__amount mb-1">${{ plan.price }}</h2>
        <span v-if="plan.type === 'Yearly'" class="pricing__prev__amount">{{
          plan.prevPrice
        }}</span> 
      </div>
      <span class="pricing__timeline">/mo</span>
    </div>
    <div class="billing-timeline text-start">{{ billingTimeline }}</div>
    <ul class="mt-3 text-start">
      <li
        v-for="(feature, index) in plan.features.available"
        :key="feature + index"
        class="mt-2 pricing__features"
      >
        {{ feature }}
      </li>
      <li
        v-for="(feature, index) in plan.features.unavailable"
        :key="feature + index"
        class="mt-2 pricing__unavailable__features"
      >
        {{ feature }}
      </li>
    </ul>
    <a
      class="button pricing__button d-block"
      href="https://app.formester.com/users/sign_up"
      >Get Started</a
    >
  </div> -->
  <div
    class="pricing__card d-flex flex-column mx-3"
    :class="{ hglt: highlight }"
  >
    <div class="d-flex flex-column align-items-stretch text-start p-4">
      <h2 class="pricing__category">{{ plan.name }}</h2>
      <p class="pricing__description">
        For organizations and agencies to create unlimited forms that are fully
        customisable to handle any complexity.
      </p>
      <div class="d-flex align-items-baseline">
        <span class="pricing__amount">{{ plan.price }}</span>
        <span class="pricing__timeline">/mo</span>
      </div>
      <div class="billing-timeline mb-4">
        <span v-show="billingTimeline"> Billed {{ billingTimeline }} </span>
      </div>
      <a
        class="button pricing__button text-center"
        href="https://app.formester.com/users/sign_up"
        >{{ planTextButton }}</a
      >
    </div>
    <ul
      class="pricing__features d-flex flex-column align-items-start p-4 border-top"
    >
      <li>Unlimited forms</li>
      <li>15k submissions/month</li>
      <li>50 GB File Uploads</li>
      <li>Unlimited Google Sheets Integration</li>
      <li>Accept Payments (0% commission)</li>
    </ul>
    <div class="text-start p-4 border-top">
      <span class="key__features-heading">Everything in Personal, plus</span>
      <ul class="key__features d-flex flex-column align-items-start ps-4 mt-3">
        <li>Unlimited forms</li>
        <li>15k submissions/month</li>
        <li>50 GB File Uploads</li>
        <li>Unlimited Google Sheets Integration</li>
        <li>Accept Payments (0% commission)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: Object,
    isHighlighted: Boolean,
  },
  data() {
    return {
      highlight: this.isHighlighted,
    }
  },
  computed: {
    billingTimeline() {
      if (this.plan.price === 0) return ''
      return this.plan.type === 'Yearly' ? 'yearly' : 'monthly'
    },
    planTextButton() {
      return this.billingTimeline
        ? `Get ${this.plan.name} ${this.billingTimeline} Plan`
        : 'Try for free forever'
    },
  },
  methods: {
    addHighlight() {
      this.highlight = true
    },
    removeHighlight() {
      this.highlight = false
    },
  },
}
</script>

<style scoped>
.pricing__card {
  border-radius: 8px;
  background: white;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04),
    0px 4px 8px 0px rgba(0, 0, 0, 0.04);
}

.pricing__card.hglt {
  border: 4px solid #7965b0;
  margin-bottom: 32px;
}

.pricing__card.hglt::before {
  content: 'MOST POPULAR';
  padding: 4px;
  background-color: #7965b0;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.pricing__category {
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
}

.pricing__description {
  font-size: 16px;
  line-height: 140%;
  color: #525252;
  height: 66px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pricing__prev__amount {
  font-weight: 500;
  font-size: 28px;
  color: rgba(33, 20, 72, 0.45);
  text-decoration: line-through;
  text-decoration-thickness: 1.2px;
  height: 28px;
}

.pricing__amount {
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
}

.pricing__timeline {
  font-size: 18px;
  line-height: 140%;
}

.billing-timeline {
  color: #525252;
  font-size: 14px;
  line-height: 140%;
  height: 20px;
}

.pricing__button {
  background-color: var(--clr-primary-light);
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
}

.pricing__card.hglt .pricing__button {
  background-color: var(--clr-primary);
  color: white;
}

.pricing__features {
  list-style: none;
  font-size: 16px;
  line-height: 140%;
  gap: 8px;
  padding: 0;
}

.key__features-heading {
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
}

.key__features {
  list-style: url('../../assets/images/check.svg');
  gap: 8px;
  font-size: 16px;
  line-height: 140%;
}
</style>
