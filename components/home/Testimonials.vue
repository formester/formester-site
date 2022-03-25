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
          <p class="mt-lg-3">
            Here’s what some of our happy customer have to say about us!
          </p>
          <img
            src="~/assets/images/home/testimonials-heading-bg.png"
            alt="Testimonial background vector image"
            class="position-absolute testimonials-heading-bg"
          />
        </div>     

        <div class="col-lg-7 position-relative">
          <div id="carouselTestimonial" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="5000">
                <div class="d-flex flex-column">
                  <p class="testimonial__content mt-2 mt-lg-0">
                    I really enjoy Formester. It’s clean and straight-forward and it
                    does well, what it is supposed to do.
                  </p>
                  <div class="d-flex testimonial__person">
                    <div class="d-flex flex-column">
                      <span class="testimonial__person--name"> Thibaud Martinez </span>
                      <span class="testimonial__person--post"> Organizer </span>
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
              <div class="carousel-item" data-bs-interval="5000">
                <div class="d-flex flex-column">
                  <p class="testimonial__content mt-2 mt-lg-0">
                    At Rumie we use Formester to get feedback from our educators and volunteers. It's intuitive, fast and easy to share. 
                  </p>
                  <div class="d-flex testimonial__person">
                    <div class="d-flex flex-column">
                      <span class="testimonial__person--name"> Bogdan Arsenie </span>
                      <span class="testimonial__person--post"> Chief Technology Officer </span>
                    </div>
                    <img
                      src="~/assets/images/rumie.png"
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
    width: 50%;
  }
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

@media (max-width: 992px) {
  .col-lg-7 {
    width: 100%;
  }
}

@media (max-width: 580px) {
  .testimonial__person {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .testimonials-heading-bg {
    display: none;
  }

  .quotes {
    right: -15%;
    top: 30%;
  }

  .testimonial__content {
    line-height: 36px;
  }

  .company__logo {
    margin-top: 1rem;
  }
}
</style>
