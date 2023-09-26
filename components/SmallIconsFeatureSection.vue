<template>
  <div class="container my-5 py-5">
    <div class="heading d-flex flex-column">
      <span class="section__subtext">{{ featureData.subtext }}</span>
      <h2 class="section__heading">
        {{ featureData.heading }}
      </h2>
      <p class="section__description">{{ featureData.description }}</p>
    </div>

    <div class="row">
      <div
        v-for="feature in featureData.features"
        :key="feature.title"
        class="col-lg-4 col-sm-6"
      >
        <div class="small-icon__card d-flex flex-column align-items-start">
          <nuxt-img
            :src="`${featureData.imgBaseSrc}/${convertToImageName(
              feature.title
            )}.svg`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
          />
          <h3 class="sub__section-heading mt-3 mb-2">{{ feature.title }}</h3>
          <p class="subheading__text">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureData: {
      type: Object,
      required: true,
      // 'featureData' prop must have the following properties:
      // {
      //   subtext: 'Subtext for the section', // String
      //   heading: 'Main Heading for the section', // String
      //   description: 'Description or content of the section', // String
      //   imgBaseSrc: 'the base path where all the images of this component is present' // String
      //   features: [
      //     {
      //       title: 'Feature Title 1', // String
      //       description: 'Description of Feature 1', // String
      //     },
      //     {
      //       title: 'Feature Title 2', // String
      //       description: 'Description of Feature 2', // String
      //     },
      //     // Add more features as needed
      //   ]
      // }
    },
  },
  methods: {
    convertToImageName(text) {
      return text.toLowerCase().replace(/&/g, 'and').replace(/ /g, '-')
    },
  },
}
</script>

<style scoped>
.small-icon__card {
  padding: 24px 0px 24px 16px;
  border-left: 1px solid #f5f5f5;
  height: 100%;
}

.sub__section-heading {
  font-size: 16px;
  font-weight: 600;
  line-height: 160%;
  color: var(--clr-neutral-900);
  position: relative;
}

.sub__section-heading::before {
  content: '';
  position: absolute;
  top: 4px;
  left: -17px;
  width: 1px;
  height: 18px;
  background-color: var(--clr-primary);
}

.subheading__text {
  font-size: 16px;
  line-height: 160%;
  color: var(--clr-neutral-600);
}
</style>
