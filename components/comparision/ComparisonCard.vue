<template>
  <div class="comparison_card">
    <nuxt-img :src="imgSrc" alt="Formester vs Typeform" class="img-fluid" />
    <h3 class="comparison_card-title">
      Compare {{ formBuilder1 }} vs {{ formBuilder2 }}
    </h3>
    <button
      class="btn__secondary"
      @click="$emit('onViewComparisonButtonClick', formBuilder1, formBuilder2)"
    >
      View Comparison
    </button>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    formBuilder1: {
      type: String,
      required: true,
    },
    formBuilder2: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.comparison_card {
  padding: 24px;
  border-radius: 4px;
  border: 1px solid #eaecf0;
  box-shadow: var(--box-shadow-lg);
  text-align: center;
}

.comparison_card-title {
  color: var(--clr-text-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-block: 16px 24px;
}

.btn__secondary {
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid #eaecf0;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  color: var(--clr-text-secondary);
  background: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
}
</style>
