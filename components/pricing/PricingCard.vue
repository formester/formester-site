<template>
  <div
    @mouseenter="addHighlight"
    @mouseleave="removeHighlight"
    class="pricing__card d-flex flex-column"
    :class="{ hglt: highlight }"
  >
    <h6 class="pricing__category text-start">{{ category }}</h6>
    <div class="d-flex align-items-baseline">
      <div v-if="isYearly && amount > 0" class="original-price"><s>${{originalPrice}}</s></div>
      <h2 class="pricing__amount">${{ isYearly ? yearlyPrice : amount}}</h2>
      <span class="pricing__timeline">{{isYearly ? "/y" : "/mo"}}</span>
    </div>
    <ul class="mt-3 text-start">
      <li
        v-for="(feature, index) in features.available"
        :key="feature + index"
        class="mt-2 pricing__features"
      >
        {{ feature }}
      </li>
      <li
        v-for="(feature, index) in features.unavailable"
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
    category: String,
    amount: Number,
    features: Object,
    isHighlighted: Boolean,
    isYearly: Boolean,
  },
  data() {
    return {
      highlight: this.isHighlighted,
    }
  },
  computed: {
    yearlyPrice(){
      return this.amount * 11;
    },
    originalPrice(){
      return this.amount * 12;
    }
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

.original-price {
  font-size: var(--ft-subtitle);
  font-weight: 300;
  color: #5e5e5e;
  margin-right: 10px;
}

.pricing__amount {
  font-size: var(--ft-df-heading);
  font-weight: 700;
}

.pricing__timelinev {
  font-size: var(--ft-big-body);
}

.pricing__button {
  background-color: var(--clr-primary-light);
  padding: 0.8em 0;
  border-radius: var(--brd-df-rd);
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
