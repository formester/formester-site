<template>
  <!-- <section
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
  </section> -->
   <section class="container my-5">
    <div class="row gx-5">
      <div
        class="
          col-md-3
          d-flex
          flex-column
          justify-content-center
          align-items-md-start align-items-center
          text-center text-md-start
          ms-md-5
        "
      >
        <h3 class="section__heading">Testimonials</h3>
        <p class="mt-3">
          Here’s What Some of Our Happy Customer Have to Say About Us!
        </p>
      </div>
      <div class="col-md-8 d-flex justify-content-center mt-md-0 mt-5 position-relative overflow-hidden">
       <div class="testimonials d-flex flex-column">
         <p>I really enjoy Formester. It’s clean and straightforward and it does well it is supposed to do. </p>
         <span class="testimonial__person-name">
            Thibaud Martinez
         </span>
         <span class="testimonial__person-post">
            Organizer
         </span>
         <img src="../../assets/images/tedx.png" alt="Brand-Logo" height="40" width="110">
       </div>
       <img src="../../assets/images/testimonial.svg" alt="NA" class="testimonial-bg">
       <img src="../../assets/images/quotes.svg" alt="NA" class="quotes">
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonials {
  padding: 7em 0;
  color: var(--clr-primary-light);
}

.testimonial-bg {
  position: absolute;
  top: -85%;
  right: -50%;
  z-index: -100;
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

.quotes {
  position: absolute;
  top: 10%;
  right: -10%;
  z-index: -1;
}
</style>
