<template>
  <div class="col-lg-4 col-sm-8">
    <div class="pricing__card d-flex flex-column" :class="{ hglt: highlight }">
      <div class="d-flex flex-column align-items-stretch text-start p-4">
        <h2 class="pricing__category">{{ plan.name }}</h2>
        <p class="pricing__description">
          {{ plan.description }}
        </p>
        <div class="d-flex align-items-baseline">
          <span
            v-if="plan.type === 'Yearly'"
            class="pricing__prev__amount me-2"
            >{{ plan.prevPrice }}</span
          >
          <span class="pricing__amount">${{ plan.price }}</span>
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
        class="pricing__features d-flex flex-column align-items-start p-4 border-top mb-0"
      >
        <li
          v-for="(feature, index) in plan.features.general"
          :key="feature + index"
        >
          {{ feature }}
        </li>
      </ul>
      <div class="text-start p-4 border-top">
        <span class="key__features-heading">{{ keyFeaturesHeading }}</span>
        <ul
          class="key__features d-flex flex-column align-items-start ps-4 mt-3 mb-0"
        >
          <li
            v-for="(feature, index) in plan.features.keyFeatures"
            :key="feature + index"
          >
            {{ feature }}
          </li>
        </ul>
      </div>
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
    keyFeaturesHeading() {
      if (this.plan.name === 'Free') {
        return 'Key Features'
      } else if (this.plan.name === 'Personal') {
        return 'Everthing in free, plus'
      } else {
        return 'Everthing in personal, plus'
      }
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
  margin-top: -38px;
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
  line-height: 24px;
  color: #525252;
  height: 72px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pricing__prev__amount {
  font-size: 28px;
  color: #a3a3a3;
  height: 28px;
  position: relative;
  display: inline-block;
}

.pricing__prev__amount::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 15%;
  right: 0;
  border-top: 2px solid #a3a3a3;
  transform: rotate(-20deg);
  transform-origin: left center;
}

.pricing__amount {
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
}

.pricing__timeline {
  font-size: 18px;
  line-height: 26px;
}

.billing-timeline {
  color: #525252;
  font-size: 14px;
  line-height: 21px;
  height: 20px;
}

.pricing__button {
  background-color: var(--clr-primary-light);
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  transition: 300ms ease-out;
}

.pricing__card.hglt .pricing__button {
  background-color: var(--clr-primary);
  color: white;
}

.pricing__button:hover {
  opacity: 0.8;
}

.pricing__features {
  list-style: none;
  font-size: 16px;
  line-height: 24px;
  gap: 8px;
  padding: 0;
}

.key__features-heading {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.key__features {
  list-style: url('../../assets/images/check.svg');
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
}
</style>
