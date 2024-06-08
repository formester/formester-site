<template>
  <div class="col-lg-4 col-sm-8 mt-3">
    <div class="pricing__card d-flex flex-column" :class="{ hglt: highlight }">
      <div class="d-flex flex-column align-items-stretch text-start p-4">
        <h2 class="pricing__category">{{ plan.name }}</h2>
        <div class="d-flex align-items-baseline mt-2">
          <span v-if="false" class="pricing__striked me-2">
            {{ plan.prevPrice }}
          </span>

          <span class="pricing__amount">{{ plan.price }}</span>
          <span class="pricing__timeline ms-1">per month</span>
        </div>
        <p class="pricing__description mt-3 mb-4">
          {{ plan.description }}
        </p>
        <!-- <div class="billing-timeline mb-4">
          <span v-show="billingTimeline"> Billed {{ billingTimeline }} </span>
        </div> -->
        <a
          class="button pricing__button text-center"
          href="https://app.formester.com/users/sign_up"
          :class="{ muted: muted }"
          >{{ planTextButton }}</a
        >
      </div>
      <ul
        class="pricing__features d-flex flex-column align-items-start p-4 border-top mb-0 text-start"
      >
        <li v-for="(feature, index) in plan.features" :key="feature + index">
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: { type: Object, required: true },
    highlighted: { type: Boolean, default: false },
    muted: { type: Boolean, default: false },
  },
  data() {
    return {
      highlight: this.highlighted,
    }
  },
  computed: {
    billingTimeline() {
      if (this.plan.price === '$0') return ''

      return this.plan.type === 'Yearly' ? 'yearly' : 'monthly'
    },
    planTextButton() {
      return this.billingTimeline
        ? `Get ${this.plan.name} ${this.billingTimeline} Plan`
        : 'Free forever'
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
  border: 4px solid var(--clr-primary);
  margin-top: -38px;
}

@media screen and (max-width: 992px) {
  .pricing__card.hglt {
    margin-top: 0;
  }
}

.pricing__card.hglt::before {
  content: 'MOST POPULAR';
  padding: 4px;
  background-color: var(--clr-primary);
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.pricing__category {
  color: var(--clr-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
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

.pricing__striked {
  font-size: 28px;
  color: #a3a3a3;
  height: 28px;
  position: relative;
  display: inline-block;
}

.pricing__striked::after {
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
  color: var(--clr-text-primary);
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.96px;
}

.pricing__timeline {
  color: var(--clr-text-secondary);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.billing-timeline {
  color: #525252;
  font-size: 14px;
  line-height: 21px;
  height: 20px;
}

.pricing__button {
  color: var(--clr-primary);
  background-color: var(--clr-primary-light);
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  transition: 300ms ease-out;
}

.pricing__button.muted {
  color: var(--clr-text-secondary);
  border-radius: 4px;
  border: 1px solid #d0d5dd;
  background: white;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.pricing__button.muted:hover {
  border: 1px solid #dfe4eb;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.01);
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
