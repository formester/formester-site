<template>
  <section class="testimonials position-relative overflow-hidden">
    <div class="container">
      <div class="row gx-5">
        <div
          class="
            col-lg-4
            d-flex
            align-items-start
            justify-content-center
            flex-column
            testimonials__heading
            position-relative
           "
        >
          <h3 class="section__heading">Testimonials</h3>
          <p class="mt-3">
            Here’s what some of our happy customer have to say about us!
          </p>
          <img src="~/assets/images/home/testimonials-heading-bg.png" alt="NA" class="position-absolute testimonials-heading-bg">
        </div>
        <div class="col-lg-6 position-relative">
         <div class="d-flex flex-column">
           <p class="testimonial__content">I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do. </p>
           <span class="testimonial__person--name">
              Thibaud Martinez
           </span>
           <span class="testimonial__person--post">
              Organizer
           </span>
           <img src="~/assets/images/tedx.png" alt="Tedx Paris Organizer" height="35" width="110" class="mt-3">
         </div>
         <img src="~/assets/images/quotes.svg" alt="NA" class="quotes">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

.testimonials {
  margin-top: 3em;
  background: var(--clr-primary);
  padding: 8em 3em;
  z-index: -100;
  color: white;
}

.testimonials-heading-bg {
  left: -130%;
  z-index: -1;
}

.testimonials__heading {
  margin-right: 5em;
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
  z-index: -1;
}

@media (max-width: 1400px) {
  .testimonials-heading-bg {
  left: -165%;
  }
}
@media (max-width: 1200px) {
  .testimonials-heading-bg {
  left: -207%;
  }
}

@media (max-width: 1080px) {
  .testimonials-heading-bg {
  left: -225%;
  }
}

@media (max-width: 1080px) {
  .quotes {
    right: -10%;
    top: 25%;
  }
}

@media  (max-width: 580px){
  .testimonials-heading-bg {
   display: none;
  }

  .quotes {
    right: -15%;
    top: 45%;
  }
}
</style>
