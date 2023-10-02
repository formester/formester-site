<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        Best Practices: Crafting Compelling Online Forms Using An Online Form
        Builder!
      </h2>
    </div>

    <div class="templates mt-md-5">
      <div v-for="(feature, idx) in features" :key="idx">
        <div
          class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
        >
          <nuxt-img
            :src="`/online-form-builder/best-practices-crafting-compelling-online-forms/${feature.img}.svg`"
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
          title: 'Design Principles',
          description:
            'Create forms that are visually appealing and user-friendly.',
          img: 'design-principles',
        },
        {
          title: 'Optimizing Form Fields',
          description:
            'Craft clear and concise form fields and labels.',
          img: 'optimizing-form-fields',
        },
        {
          title: 'Call-to-Action Strategies',
          description:
            'Maximize conversions with compelling calls-to-action.',
          img: 'call-to-action-strategies',
        },
        {
          title: 'Mobile-Responsive Forms',
          description: 'Reach users on any device for a seamless experience.',
          img: 'mobile-responsive-forms',
        },
        {
          title: 'Data Security and Privacy',
          description:
            'Ensure user data is secure and compliant with regulations.',
          img: 'data-security-and-privacy',
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
