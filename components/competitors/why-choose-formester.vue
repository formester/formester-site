<template>
  <div class="container py-5">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">
          Considering a Switch: Why Choose Formester?
        </h2>
        <p class="section__subtitle mt-1">(Experience the Formester Advantage)</p> 
      </div>

      <div class="templates mt-md-5">
        <div v-for="(feature, idx) in features" :key="idx">
          <div
            class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
          >
            <nuxt-img
              :src="`/jotform101/why-choose-formester/${feature.img}.svg`"
              class="img-fluid"
              loading="lazy"
            />
            <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
            <p class="subheading__text">{{ feature.description }}</p>
          </div>
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
          title: 'Unparalleled Customer Support',
          description:
            'At Formester, our only priorities are: Form Creation & Form Creators! That said, as a customer, you\’ll enjoy dedicated support from our team of experts, ensuring a seamless experience.',
          img: 'support',
        },
        {
          title: 'Powerful Customization Options',
          description:
            'Formester offers a great scope and flexibility for customization of forms with regard to branding, advanced styling, and tailored form elements.',
          img: 'customization',
        },
        {
          title: 'Advanced Automation Capabilities',
          description:
            'With Formester, you can automate workflows, set up email notifications, and trigger actions based on form submissions.',
          img: 'automation',
        },
        {
          title: 'Secure and Reliable',
          description:
            'Rest assured knowing your data is protected with industry-leading security measures.',
          img: 'secure',
        },
        {
          title: 'Growing Community',
          description:
            'Join a vibrant community of users and gain access to exclusive resources, newsletters, tutorials, and updates.',
          img: 'community',
        },
        {
          title: 'Continuous Innovation',
          description:
            'Benefit from regular updates and feature enhancements as we strive to exceed your expectations.',
          img: 'innovation',
        },
      ],
    }
  },
}
</script>

<style scoped>
.section__subtitle {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.48px;
  /* text-transform: uppercase; */
}

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
