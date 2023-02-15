<template>
  <div
    @mouseenter="addHighlight"
    @mouseleave="removeHighlight"
    class="pricing__card d-flex flex-column"
    :class="{ hglt: highlight }"
  >
    <h6 class="pricing__category text-start">{{ plan.name }}</h6>
    <div class="d-flex align-items-baseline">
      <h2 class="pricing__amount">${{ plan.price }}</h2>
      <span class="pricing__timeline">{{ priceTimeline }}</span>
      <div v-if="plan.type === 'Yearly' && plan.price > 0" class="original-price"><s>${{ plan.originalPrice }}</s></div>
    </div>
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
    priceTimeline(){
      return this.plan.type === "Yearly" ? "/y" : "/mo";
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
  font-weight: lighter;
  color: #5e5e5e;
  margin-left: 10px;
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
