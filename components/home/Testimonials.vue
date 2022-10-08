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
          <h2 class="section__heading">Testimonials</h2>
          <p class="mt-lg-3 section__subtitle">
            Here’s what some of our happy customer have to say about us!
          </p>
          <img
            src="~/assets/images/home/testimonials-heading-bg.png"
            alt="Testimonial background vector image"
            class="position-absolute testimonials-heading-bg"
          />
        </div>     

        <div class="col-lg-7 position-relative product-testimonials">
          <div id="carouselTestimonial" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselTestimonial" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselTestimonial" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselTestimonial" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex flex-column">
                  <p class="testimonial__content mt-2 mt-lg-0">
                    Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.
                  </p>
                  <div class="d-flex testimonial__person">
                    <div class="d-flex align-items-center">
                      <img src="~/assets/images/testimonials/jilson.png" alt="Jilson">
                      <div class="d-flex flex-column align-items-start ms-3">
                        <span class="testimonial__person--name">Jilson</span>
                        <span class="testimonial__person--post">Organiser</span>
                      </div>
                    </div>
                    <img
                      src="~/assets/images/vueconf.svg"
                      alt="Rumie Logo"
                      class="company__logo"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex flex-column">
                  <p class="testimonial__content mt-2 mt-lg-0">
                    I really enjoy Formester. It’s clean and straight-forward and it
                    does well, what it is supposed to do.
                  </p>
                  <div class="d-flex testimonial__person mt-4r">
                    <div class="d-flex align-items-center">
                      <img src="~/assets/images/testimonials/thibaud.png" alt="Thibaud">
                      <div class="d-flex flex-column align-items-start ms-3">
                        <span class="testimonial__person--name">Thibaud Martinez</span>
                        <span class="testimonial__person--post">Organizer</span>
                      </div>
                    </div>
                    <img
                      src="~/assets/images/tedx.png"
                      alt="Tedx Paris Organizer"
                      width="110"
                      class="company__logo"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex flex-column">
                  <p class="testimonial__content mt-2 mt-lg-0">
                    At Rumie we use Formester to get feedback from our educators and volunteers. It's intuitive, fast and easy to share. 
                  </p>
                  <div class="d-flex testimonial__person mt-4r">
                    <div class="d-flex align-items-center">
                      <img src="~/assets/images/testimonials/bogdan.png" alt="Bogdan">
                      <div class="d-flex flex-column align-item-start ms-3">
                        <span class="testimonial__person--name">Bogdan Arsenie</span>
                        <span class="testimonial__person--post">Chief Technology Officer </span>
                      </div>
                    </div>
                    <img
                      src="~/assets/images/rumie.svg"
                      alt="Rumie Logo"
                      width="150"
                      class="company__logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="~/assets/images/quotes.svg"
              alt="Quotes background image"
              class="quotes"
            />
          </div>
        </div>
    
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.mt-4r {
  margin-top: 4rem !important;
}
.product-testimonials {
  display: flex;
  padding-top: 4rem;
  box-sizing: border-box;
  min-height: 400px;
}

.carousel-indicators {
  top: 350px;
}

.testimonials {
  margin-top: 3em;
  background: var(--clr-primary);
  padding: 8em 3em;
  z-index: 0;
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

.testimonial__person {
  margin-top: 1.6em;
  align-items: center;
  justify-content: space-between;
}

.testimonial__person--name {
  font-size: var(--ft-big-body);
  font-weight: 900;
}

.testimonial__person--post {
  font-size: var(--ft-df-body);
  letter-spacing: 2%;
  color: var(--clr-primary-light);
}

.quotes {
  position: absolute;
  top: 5%;
  right: -20%;
  z-index: -1;
}

@media (max-width: 1400px) {
  .col-lg-7 {
    width: 55%;
  }
  .testimonials-heading-bg {
    left: -165%;
  }
}
@media (max-width: 1200px) {
  .testimonials-heading-bg {
    left: -207%;
  }
  .product-testimonials {
    padding-top: 3rem;
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

@media (max-width: 992px) {
  .col-lg-7 {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .product-testimonials {
    padding-top: 2rem;
  }
}

@media (max-width: 580px) {
  .testimonials {
    padding: 5em 0.75em 3.5em 0.75em;
  }
  .product-testimonials {
    padding-top: 1em;
  }
  .mt-4r {
    margin-top: 1rem !important;
  }
  .testimonial__person {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .testimonials-heading-bg {
    display: none;
  }

  .section__subtitle {
    font-size: 14px;
    line-height: 21px;
  }

  .quotes {
    right: -15%;
    top: 30%;
  }

  .testimonial__content {
    font-size: 20px;
    line-height: 32px;
  }

  .company__logo {
    margin-top: 1rem;
    height: 48px;
  }

  .product-testimonials {
    min-height: 500px;
  }

  .carousel-indicators {
    top: 480px;
  }
}
</style>
