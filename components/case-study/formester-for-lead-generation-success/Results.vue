<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column">
      <span class="section__subtext">Results</span>
      <h2 class="section__heading">
        Transforming Lead Generation with Formester Web Forms
      </h2>
      <p class="section__description">
        The strategic adoption of Formester as your lead generation form builder
        is capable of yielding impressive outcomes, revolutionizing your
        approach to lead generation and conversion
      </p>
    </div>

    <div class="templates mt-md-5">
      <div v-for="(feature, idx) in features" :key="idx">
        <div
          class="card d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
        >
          <nuxt-img
            :src="feature.imgSrc"
            class="img-fluid"
            loading="lazy"
          />
          <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
          <p class="subheading__text">{{ feature.description }}</p>
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
          title: 'Conversion Rate Surge',
          description:
            'Within the initial three months of implementing Formester, your organization can experience a remarkable 40% surge in conversion rates for lead generation forms.',
          imgSrc: 'case-study-1/results/conversion-rate-surge.svg',
        },
        {
          title: 'Enhanced Lead Quality',
          description:
            "Formester's conditional logic feature improves lead quality by 25%, resulting in higher conversion rates and more valuable sales opportunities. Moreover, the leads captured are more qualified and engaged.",
          imgSrc: 'case-study-1/results/enhanced-lead-quality.svg',
        },
        {
          title: 'Sales Growth',
          description:
            "As a result of the improved lead nurturing features facilitated by Formester, your organization can witness a 30% growth in sales generated from leads acquired through Formester's lead-generation forms. The enhanced engagement and personalized interactions will be translated directly into increased revenue.",
          imgSrc: 'case-study-1/results/sales-growth.svg',
        },
        {
          title: 'Significant Time and Resource Savings',
          description:
            "Formester's user-friendly interface dramatically streamlines your form creation and modification processes, leading to a notable reduction in the time and resources required. Your team can now create and optimize lead generation forms swiftly, allowing them to allocate their efforts more effectively. This newfound efficiency ensures that your resources are allocated effectively, maximizing your overall productivity and return on investment by up to 33%.",
          imgSrc:
            'case-study-1/results/significant-time-and-resource-savings.svg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.templates {
  width: 100%;
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
