<template>
  <div class="container py-3 px-2">
    <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
            <h2 class="section__heading">Form Spam Prevention Tips</h2>
        </div>

        <div class="templates mt-md-5">
            <div v-for="(feature, idx) in features" :key="idx">
                    <div class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start">
                        <img
                            :src="require(`../assets/images/icons/${feature.imageSrc}`)"
                            class="img-fluid"
                            style="width: 69px;"
                            :alt="feature.altText"
                        />
                        <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
                        <p  class="subheading__text">{{ feature.description }}</p>
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
          title: 'Google reCAPTCHA',
          description: 'It can be easily integrated across websites and mobile applications using an API-based service. It prevents web form spam whilst providing a frictionless user experience.',
          imageSrc: 'reCaptcha.jpg',
          altText: 'prevent spam using google reCaptcha'
        },
        {
          title: 'Employ double opt-in',
          description: 'Have your users click on an email confirmation link or verify/enter an OTP/code, sent by you.',
          imageSrc: 'optIn.jpg',
          altText: 'have double opt-in to confirm user'
        },
        {
          title: 'Quality Web Host',
          description: 'Ensure that you use a quality web hosting service provider, with all the security standards and measures being met.',
          imageSrc: 'web.jpg',
          altText: 'have a secure web hosting'
        },
        {
          title: 'Web Application Firewall',
          description: 'Use a WAF to identify and block malicious and spam bot-rendered HTTP/S traffic to your application.',
          imageSrc: 'firewall.jpg',
          altText: 'use web application firewall to block spam '
        },
      ]
    }
  }
}
</script>

<style scoped>
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}

.card {
    border-radius: 18px;
    border: none;
}

@media (max-width: 991px) {
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