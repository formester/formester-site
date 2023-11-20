<template>
  <div
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
      if (this.plan.price === 0) return ' '
      return this.plan.type === 'Yearly' ? 'Billed yearly' : 'Billed monthly'
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: var(--brd-df-rd);
  padding: 1.9em 2.5em;
  margin: 1em;
}

.pricing__category {
  font-size: var(--ft-subtitle);
  color: #695e8c;
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
  font-size: var(--ft-df-heading);
  font-weight: 700;
}

.pricing__timeline {
  font-size: var(--ft-big-body);
}

.pricing__button {
  background-color: var(--clr-primary-light);
  padding: 0.8em 0;
  border-radius: var(--brd-df-rd);
}

.billing-timeline {
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  height: 21px;
}

/* HIGHLIGHT CARD */
.pricing__card.hglt {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
}

.pricing__card.hglt .pricing__button {
  background-color: var(--clr-primary);
  color: white;
}

.pricing__features {
  list-style: url('../../assets/images/check.svg');
}

.pricing__unavailable__features {
  list-style: url('../../assets/images/cross.svg');
  text-decoration: line-through;
  opacity: 0.7;
}
</style>
