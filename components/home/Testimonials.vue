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
   <!-- <section class="testimonials">
    <div class="container">
      <div class="row gx-5">
        <div
          class="
            col-lg-3
            d-flex
            align-items-center
            justify-content-center
            flex-column
            testimonial-left
           "
        >
          <h3 class="section__heading">Testimonials</h3>
          <p class="mt-3">
            Here’s What Some of Our Happy Customer Have to Say About Us!
          </p>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center position-relative">
         <div class="d-flex flex-column">
           <p class="testimonial__content">I really enjoy Formester. It’s clean and straight-forward and it does well it is supposed to do. </p>
           <span class="testimonial__person--name">
              Thibaud Martinez
           </span>
           <span class="testimonial__person--post">
              Organizer
           </span>
           <img src="../../assets/images/tedx.png" alt="Brand-Logo" height="40" width="110" class="mt-3">
         </div>
         <img src="../../assets/images/quotes.svg" alt="NA" class="quotes">
        </div>
      </div>
    </div>
  </section> -->
  <section class="testimonials-bg">
    <div class="container">
      <div class="row">
        <div
          class="
            col-lg-4
            d-flex
            flex-column
            align-items-start
            justify-content-center
            testimonials__heading--section
          "
        >
          <h3 class="section__heading">Testimonials</h3>
          <p class="mt-3">
             Here’s What Some of Our Happy Customer Have to Say About Us!
          </p>
        </div>
        <div class="testmonial__container col-lg-6 d-flex flex-column mt-lg-0 mt-5 position-relative">
        <p class="testimonial__content">I really enjoy Formester. It’s clean and straight-forward and it does well it is supposed to do. </p>
             <span class="testimonial__person--name">
                Thibaud Martinez
             </span>
             <span class="testimonial__person--post">
                Organizer
             </span>
             <img src="../../assets/images/tedx.png" alt="Brand-Logo" height="40" width="110" class="mt-3">
            <img src="../../assets/images/quotes.svg" alt="NA" class="position-absolute quotes" height=200 width=200>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

.testimonials-bg {
  margin-top: 3em;
  background: var(--clr-primary);
  color: white;
}

.testimonials__heading--section {
  background: linear-gradient(270deg, #6448B7 -2.64%, rgba(100, 72, 183, 0) 102.28%);;
  padding: 8em 3em;
}


.testmonial__container {
  margin-left: 7em;
  padding: 8em 0;
}

.testimonial__content {
  font-size: var(--ft-bigger-body);
  line-height: 48px;
}

.testimonial__person--name {
  font-size: var(--ft-big-body);
  font-weight: 900;
  margin-top: 1.6em;
}

.testimonial__person--post {
  font-size: var(--ft-df-body);
  letter-spacing: 2%;
  color: var(--clr-primary-light);
}

.quotes {
  position: absolute;
  top: 5%;
  right: -30%;
  z-index: 0;
}

@media (max-width: 992px) {
  .testmonial__container {
    margin: 0;
      padding: 4em 2em;
  }
}
</style>
