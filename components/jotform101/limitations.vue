<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">Limitations of Jotform</h2>
    </div>

    <div class="templates mt-md-5">
      <div v-for="(limitation, idx) in limitations" :key="idx">
        <div
          class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
        >
          <nuxt-img
            :src="`/jotform101/limitations/${limitation.img}.svg`"
            class="img-fluid"
            loading="lazy"
          />
          <h4 class="sub__section-heading mt-4">{{ limitation.title }}</h4>
          <p class="subheading__text">{{ limitation.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limitations: [
        {
          title: 'Learning Curve',
          description:
            'Jotform offers a wide range of features and functionalities, which may require some time to master, especially for users new to form building.',
          img: 'learning-curve',
        },
        {
          title: 'Pricing Tiers',
          description:
            'While Jotform offers a free version with limited features, some advanced functionalities and higher usage levels are available through paid plans.',
          img: 'pricing-tiers',
        },
        {
          title: 'Customization Constraints',
          description:
            'While Jotform provides a range of customization options, there may be certain design limitations or constraints to consider for highly specialized branding needs.',
          img: 'customization-constraints',
        },
        {
          title: 'Restrictions and Upgrading',
          description:
            'There is no way to purchase only required additional features. Users have to upgrade to a higher plan to get access to greater limits of a particular feature.',
          img: 'restrictions-and-upgrading',
        },
      ],
    }
  },
}
</script>

<style scoped>
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
}
@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
