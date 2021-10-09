<template>
  <div
    class="pricing__card d-flex flex-column"
    :class="{ hglt: isHighlighted }"
  >
    <h6 class="pricing__category text-start">{{ category }}</h6>
    <div class="d-flex align-items-baseline">
      <h2 class="pricing__amount">${{ amount }}</h2>
      <span class="pricing__timeline">/mo</span>
    </div>
    <ul class="pricing__features mt-3 text-start">
      <li v-for="(feature, index) in features" :key="index" class="mt-2">
        {{ feature }}
      </li>
    </ul>
    <button class="button pricing__button">Get Started</button>
  </div>
</template>

<script>
export default {
  props: {
    category: String,
    amount: Number,
    features: Array,
    isHighlighted: Boolean,
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
</style>
