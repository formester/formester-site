<template>
  <div class="bg-magnolia">
    <div class="container">
      <!-- Desktop View -->
      <div class="d-none d-md-grid testimonials-section">
        <div>
          <h2 class="testimonials-heading">Testimonials</h2>
          <div class="d-flex flex-column">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="user d-flex align-items-center"
              :class="{ active: active === testimonial.id }"
              @click="active = testimonial.id"
            >
              <img
                :src="
                  require(`~/assets/images/testimonials/${testimonial.picture}`)
                "
                :alt="testimonial.picture"
              />
              <div>
                <h6 class="name">{{ testimonial.user }}</h6>
                <span class="designation">{{ testimonial.designation }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-content-wrapper">
          <p class="mb-5">{{ activeTestimonial.content }}</p>
          <div class="d-flex justify-content-end">
            <img
              :src="
                require(`~/assets/images/testimonials/${activeTestimonial.logo}`)
              "
              :alt="activeTestimonial.logoAlt"
            />
          </div>
        </div>
        <img
          src="~/assets/images/testimonials/quote.svg"
          class="quote-illustraion"
          alt="Quote illustration"
        />
      </div>
      <!-- Mobile view -->
      <div class="d-flex flex-column align-items-center d-md-none testimonials-section">
        <h2 class="testimonials-heading">Testimonials</h2>
        <div id="testimonialsCarousel" class="carousel slide" data-bs-ride="carousel">
          <!-- Carousel Indicators -->
          <div class="carousel-indicators">
            <button
              v-for="(testimonial, idx) in testimonials"
              :key="testimonial.id"
              type="button"
              data-bs-target="#testimonialsCarousel"
              :data-bs-slide-to="idx"
              class="indicator"
              :class="{'active': idx === 0}"
              aria-current="true"
              :aria-label="`Slide ${idx + 1}`"
            ></button>
          </div>
          <!-- Carousel Content -->
          <div class="carousel-inner">
            <div
              v-for="(testimonial, idx) in testimonials"
              class="carousel-item"
              :class="{'active': idx === 0}"
            >
              <div class="mobile-testimonial-content-wrapper">
                <p>{{ testimonial.content }}</p>
                <div class="user d-flex align-items-center">
                  <img
                    :src="
                      require(`~/assets/images/testimonials/${testimonial.picture}`)
                    "
                    :alt="testimonial.picture"
                  />
                  <div>
                    <h6 class="name">{{ testimonial.user }}</h6>
                    <span class="designation">{{ testimonial.designation }}</span>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <img
                    :src="
                      require(`~/assets/images/testimonials/${testimonial.logo}`)
                    "
                    :alt="testimonial.logoAlt"
                  />
                </div>
              </div>
            </div>
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
      active: 1,
      testimonials: [
        {
          id: 1,
          user: 'Thibaud Martinez',
          designation: 'Organiser',
          picture: 'thibaud.png',
          content: `I really enjoy Formester. It’s clean and straight-forward and it
                        does well, what it is supposed to do.`,
          logo: 'tedx.png',
          logoAlt: 'Tedx logo',
        },
        {
          id: 2,
          user: 'Jilson',
          designation: 'Organiser',
          picture: 'jilson.png',
          content: `Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.`,
          logo: 'vueconf.svg',
          logoAlt: 'Vue conference logo',
        },
        {
          id: 3,
          user: 'Bogdan Arsenie',
          designation: 'Chief Technology Officer',
          picture: 'bogdan.png',
          content: `At Rumie we use Formester to get feedback from our educators and
          volunteers. It's intuitive, fast and easy to share.`,
          logo: 'rumie.svg',
          logoAlt: 'Rumie logo',
        },
      ],
    }
  },
  computed: {
    activeTestimonial() {
      return this.testimonials.find(
        (testimonial) => testimonial.id === this.active
      )
    },
  },
}
</script>

<style>
.bg-magnolia {
  background-color: #F7F5FF;
}

.testimonials-section {
  font-family: 'Inter';
  font-style: normal;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  align-items: center;
  gap: 150px;
  padding-block: 120px;
}
.testimonials-heading {
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 64px;
  color: #211447;
}
.quote-illustraion {
  position: absolute;
  top: 0;
  right: 46%;
}
.user {
  padding: 20px 28px;
  border-radius: 8px;
  margin: 8px 0px;
  gap: 32px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}
.user.active {
  background: #ffffff;
  box-shadow: 0px 17px 80px rgba(0, 0, 0, 0.03),
    0px 11.0185px 46.8519px rgba(0, 0, 0, 0.0227778),
    0px 6.54815px 25.4815px rgba(0, 0, 0, 0.0182222),
    0px 3.4px 13px rgba(0, 0, 0, 0.015),
    0px 1.38519px 6.51852px rgba(0, 0, 0, 0.0117778),
    0px 0.314815px 3.14815px rgba(0, 0, 0, 0.00722222);
}
.user .name {
  font-size: 18px;
  line-height: 28px;
  color: #211447;
}
.user .designation {
  font-size: 16px;
  line-height: 24px;
  color: #828282;
}
.testimonial-content-wrapper {
  font-size: 24px;
  line-height: 38px;
  color: #333333;
  z-index: 2;
}
@media only screen and (max-width: 1200px) {
  .testimonials-section {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    padding-block: 60px;
  }
  .testimonials-heading {
    font-size: 36px;
    line-height: 42px;
  }
  .testimonial-content-wrapper {
    font-size: 20px;
    line-height: 32px;
  }
  .quote-illustraion {
    width: 90px;
  }
}
@media only screen and (max-width: 992px) {
  .testimonials-section {
    gap: 40px;
    padding-left: 0px;
    padding-right: 0px;
    margin: 0px auto;
  }
  .quote-illustraion {
    width: 75px;
  }
  .user {
    padding: 16px 22px;
  }
  .user img {
    height: auto;
    width: 65px;
  }
  .user .name {
    font-size: 16px;
    line-height: 24px;
  }
  .user .designation {
    font-size: 14px;
    line-height: 22px;
  }
  .testimonial-content-wrapper {
    font-size: 18px;
    line-height: 28px ;
  }
}
@media only screen and (max-width: 768px) {
  .testimonials-section {
    padding-bottom: 0;
  }
  #testimonialsCarousel {
    min-height: 500px;
    width: 100%;
  }
  .testimonials-heading {
    margin-bottom: 48px;
    line-height: 52px;
    font-size: 2rem;
  }
  .mobile-testimonial-content-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    font-size: 24px;
    line-height: 38px;
    color: #333333;
  }
  .user {
    padding: 0px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
  .user .name {
    margin: 0;
  }
  .carousel-indicators .indicator {
    background-color: #E5DEF9;
  }
  .carousel-indicators .active {
    background-color: #4F3895;
  }
}
@media only screen and (max-width: 576px) {
  #testimonialsCarousel {
    min-height: 600px;
  }
}
</style>
