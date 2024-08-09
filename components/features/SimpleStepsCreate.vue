<template>
  <section class="container py-5 mt-3">
    <SectionTitle :heading="title" />
    <p class="hero__subheading text-center" v-if="description">
      {{ description }}
    </p>

    <div class="py-5 row">
      <div v-for="(item, idx) in itemList" :key="item?.id" :class="columnClass">
        <div
          class="d-flex flex-column-reverse align-items-center justify-content-center pe-md-4"
        >
          <div class="mt-5">
            <span class="step__heading">Step {{ idx + 1 }}</span>
            <h3 class="step__section-heading">{{ item?.title }}</h3>
            <p class="step__section-description">
              {{ item?.description }}
            </p>
          </div>
          <div
            v-if="item.cardImage.image?.url || item.cardImage.imageUrl"
            class="d-flex flex-column flex-lg-row"
          >
            <nuxt-img
              :src="item.cardImage.image?.url || item.cardImage.imageUrl"
              class="img-fluid my-auto"
              :alt="item.cardImage.imageAlt"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    itemList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    columnClass() {
      switch (this.itemList.length) {
        case 2:
          return 'col-md-6 col-sm-6 mt-5'
        case 3:
          return 'col-md-4 col-sm-6 mt-5'
        case 4:
          return 'col-md-3 col-sm-6 mt-5'
        default:
          return 'col-md-4 col-sm-6 mt-5'
      }
    },
  },
}
</script>

<style scoped>
.step__heading {
  color: var(--clr-primary);
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.28px;
  text-transform: uppercase;
}

.step__section-heading {
  color: var(--dark, #211447);
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}
.step__section-description {
  color: var(--neutral #404040);
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
}
@media (max-width: 992px) {
  .step__section-description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
