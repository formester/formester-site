<template>
  <div class="container my-5 py-5">
    <div class="heading d-flex flex-column">
      <span class="section__subtext">Conclusion</span>
      <h2 class="section__heading">
        Formester - For a Brighter, Efficient and More Effective Future of Lead
        Generation
      </h2>
      <p class="section__description">
        In conclusion, the adoption of Formester as your lead generation form
        builder will usher in a new era of lead generation excellence for your
        company. By recognizing the pivotal role that lead generation forms play
        in the contemporary digital landscape, your organization will have made
        a strategic decision by leveraging Formester's powerful capabilities.
      </p>
    </div>

    <div class="row">
      <div v-for="feature in features" :key="feature.title" class="col-md-6">
        <div class="d-flex flex-column align-items-start mt-4">
          <nuxt-img
            :src="`case-study-1/conclusion/${convertToImageName(
              feature.title
            )}.svg`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
          />
          <h3 class="sub__section-heading mt-3 mb-2">{{ feature.title }}</h3>
          <p class="subheading__text mt-2">{{ feature.description1 }}</p>
          <p class="subheading__text mt-2">{{ feature.description2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Comprehensive Solutions',
          description1:
            'The challenges that many businesses face, including subpar conversion rates, discouraging form structures, limited lead nurturing capabilities, data management complexities, integration challenges, mobile responsiveness, and data-driven refinement, are all addressed comprehensively with Formester.',
          description2:
            "Formester's suite of features, from its HTML form backend and autoresponder to spam protection, powerful analytics, conditional logic, online payment integration, digital signature capability, branding kit, information recall, calculation fields, and collaboration tools, has proven to be instrumental in overcoming these challenges.",
        },
        {
          title: 'Long Term Benefits',
          description1:
            "As you will continue to harness the capabilities of Formester, you'll start to become more well-equipped to navigate the evolving dynamics of lead generation and achieve your growth objectives with confidence.",
          description2:
            'Ready to revolutionize your lead generation efforts? Explore the potential of Formester today and embark on a journey of transformative success.',
        },
        {
          title: 'Improved Efficiency',
          description1:
            'Formester empowers your team with time and resource efficiency, allowing them to create and optimize lead generation forms swiftly, thus maximizing productivity and return on investment.',
          description2:
            'In summary, Formester holds transformative power in redefining lead generation strategies and driving substantial improvements in conversion rates, lead quality, sales growth, and operational efficiency. ',
        },
      ],
    }
  },
  methods: {
    convertToImageName(text) {
      return text.toLowerCase().replace(/&/g, 'and').replace(/ /g, '-')
    },
  },
}
</script>

<style scoped>
.section__subtext {
  color: var(--clr-primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.32px;
  text-transform: uppercase;
}

.section__heading {
  font-size: 36px;
  font-weight: 700;
  line-height: 150%;
  color: var(--clr-neutral-900);
}

.section__description {
  color: var(--clr-neutral-700);
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
}

.sub__section-heading {
  color: var(--clr-neutral-900);
  font-size: 24px;
  font-weight: 600;
  line-height: 140%;
}

.subheading__text {
  color: var(--clr-neutral-600);
  font-size: 16px;
  line-height: 160%;
}
</style>
