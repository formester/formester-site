<template>
  <section
    class="
      testimonials
      position-relative
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <div class="text-center mt-5">
      <h3 class="section__heading testimonials__heading">Testimonials</h3>
      <p class="testimonial__content">
        I really enjoy Formester. It’s clean and straightforward and it does
        well it is supposed to do.
      </p>
      <div class="testimonial__person">
        <p class="testimonial__person--name">Thibaud Martinez</p>
        <p class="testimonial__person--post">Organizer</p>
        <img src="@/assets/images/tedx.png" alt="TEDX" class="mt-3" />
      </div>
    </div>
    <img
      src="@/assets/images/testimonial.svg"
      alt="NA"
      class="position-absolute testimonial__svg"
    />
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonials {
  height: 600px;
  color: var(--clr-primary-light);
  margin-bottom: 5em;
  overflow: hidden;
}

.testimonial__svg {
  top: -15%;
  left: -45%;
  z-index: -1;
}

.testimonials__heading {
  color: white;
}

.testimonial__content {
  font-size: var(--ft-bigger-body);
  line-height: 40px;
  max-width: 750px;
  margin: 1.6em 1.5em 0;
}

.testimonial__person {
  margin-top: 1.6em;
}

.testimonial__person--name {
  font-size: var(--ft-big-body);
}

.testimonial__person--post {
  font-size: var(--ft-df-body);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: -0.4em;
}
</style>
