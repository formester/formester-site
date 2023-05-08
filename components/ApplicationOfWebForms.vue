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
                        :src="require(`../assets/images/${feature.imageSrc}`)"
                        class="img-fluid web__form-image"
                        style="width: 120px;"
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
          title: 'Thank you users',
          description: 'Send a short, simple and sweet thank you email, as soon as you receive a submission!',
          imageSrc: 'icons/thankyou.jpg',
          altText: 'thank your user for submitting form'
        },
        {
          title: 'Assign a ticket to your form users',
          description: 'Improve efficiency and get more work done by introducing structure to your queries. Mark tickets as resolved once you have attended to them.',
          imageSrc: 'icons/ticket.jpg',
          altText: 'assign tickets to forms users to track any quaries'
        },
        {
          title: 'Send Promotional news, Offers & more',
          description: 'Build a solid brand by sending out consistence and personalized promotional emails, newsletters, offers and more!',
          imageSrc: 'icons/offer.jpg',
          altText: 'send promotional emails'
        },
        {
          title: 'Acknowledgement',
          description: 'Send out acknowledgement emails for any queries and messages you receive.',
          imageSrc: 'icons/acknowledgement.jpg',
          altText: 'send acknowledgement emails to users'
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
  grid-template-columns: 1fr 1fr;
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

.web__form-image {
  margin-left: -15px;
}

@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
  .web__form-image {
    margin-left: 0px;
  }
}
</style>