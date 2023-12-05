<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">{{ heading }}</h2>
    </div>

    <div class="templates mt-md-5">
      <div v-for="(feature, idx) in features" :key="idx">
        <div
          class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
        >
          <nuxt-img
            :src="`/hr-solution/KeyBenefits/${feature.img}.svg`"
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
  props: {
    heading: {
      type: String,
      default: 'Keys Benefits',
    },
  },
  data() {
    return {
      features: [
        {
          title: 'Conditional Logic',
          description:
            'Collect accurate data by allowing users to answer only the most relevant questions.',
          img: 'conditional-logic',
        },
        {
          title: 'Spam Protection',
          description:
            'Use one click Re-Captcha or custom Re-Captcha along with other security features to prevent spam.',
          img: 'spam-protection',
        },
        {
          title: 'Powerful Analytics',
          description:
            'Get actionable insights to make data-driven decisions based upon the inputs of the users.',
          img: 'powerful-analytics',
        },
        {
          title: 'Digital Signature',
          description:
            'Allow users to add e-sign to your online form easily using formester to add an extra layer of security.',
          img: 'digital-signature',
        },
        {
          title: 'Auto Responder',
          description:
            'Send personalised replies to the users automatically once they submit the online form.',
          img: 'auto-responder',
        },
        {
          title: 'Multi User Collaboration',
          description:
            'Add you team members as collaborator to the form which allows them to make changes simultaneously.',
          img: 'multi-user-collaboration',
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
}
@media only screen and (max-width: 992px) {
  .templates {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
