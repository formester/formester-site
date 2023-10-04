<template>
  <div class="bg-magnolia">
    <div class="container">
      <!-- Desktop View -->
      <div class="d-none d-md-grid testimonials-section">
        <div>
          <h2 class="testimonials-heading">Testimonials</h2>
          <div class="users">
            <div
              class="d-flex flex-column users-wrapper"
              :style="usersWrapperStyling"
            >
              <div
                v-for="(testimonial, idx) in testimonials"
                :key="testimonial.id"
                class="user d-flex align-items-center"
                :class="{ active: active === testimonial.id }"
                @click="updateActive(testimonial.id)"
              >
                <nuxt-img
                  :src="`/testimonials/${testimonial.picture}`"
                  :alt="testimonial.picture"
                  loading="lazy"
                  sizes="40vw"
                />
                <div>
                  <h6 class="name">{{ testimonial.user }}</h6>
                  <span class="designation">{{ testimonial.designation }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-content-wrapper">
          <p class="mb-3">{{ activeTestimonial.content }}</p>
          <div class="d-flex justify-content-end">
            <nuxt-img
              :src="`/testimonials/${activeTestimonial.logo}`"
              :alt="activeTestimonial.logoAlt"
              sizes="40vw"
            />
          </div>
          <nuxt-img
            src="/testimonials/quotation.svg"
            class="quotation-marks"
            alt="Quotation marks"
            loading="lazy"
          />
        </div>
        <nuxt-img
          src="/testimonials/quote.svg"
          class="quote-illustraion"
          alt="Quote illustration"
          loading="lazy"
        />
      </div>
      <!-- Mobile view -->
      <div
        class="d-flex flex-column align-items-center d-md-none testimonials-section"
      >
        <h2 class="testimonials-heading">Testimonials</h2>
        <div
          id="testimonialsCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <!-- Carousel Indicators -->
          <div class="carousel-indicators">
            <button
              v-for="(testimonial, idx) in testimonials"
              :key="testimonial.id"
              type="button"
              data-bs-target="#testimonialsCarousel"
              :data-bs-slide-to="idx"
              class="indicator"
              :class="{ active: idx === 0 }"
              aria-current="true"
              :aria-label="`Slide ${idx + 1}`"
            ></button>
          </div>
          <!-- Carousel Content -->
          <div class="carousel-inner">
            <div
              v-for="(testimonial, idx) in testimonials"
              class="carousel-item"
              :class="{ active: idx === 0 }"
            >
              <div class="mobile-testimonial-wrapper">
                <p class="content">{{ testimonial.content }}</p>
                <div class="user d-flex align-items-center">
                  <nuxt-img
                    :src="`/testimonials/${testimonial.picture}`"
                    :alt="testimonial.picture"
                    loading="lazy"
                  />
                  <div>
                    <h6 class="name">{{ testimonial.user }}</h6>
                    <p class="designation my-0">
                      {{ testimonial.designation }}
                    </p>
                    <p class="company my-0">{{ testimonial.company }}</p>
                  </div>
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
      active: 2,
      prevActive: 2,
      pixels: 0,
      userHeight: 136,
      testimonials: [
        {
          id: 1,
          user: 'Dr. Michele Ross',
          designation: 'Founder',
          picture: 'Dr_Michele.webp',
          content: `I'm migrating my forms from Paperform, where I've been a user for over 4 years. Loving the software so far! I've already replaced Paperform form embeds & popups on my sites & my husband's websites with Formester forms`,
          logo: 'dr._michelelogo.webp',
          logoAlt: 'Dr. michele ross logo',
          company: 'Infused Health',
        },
        {
          id: 2,
          user: 'Jilson',
          designation: 'Organiser',
          picture: 'jilson.webp',
          content: `Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.`,
          logo: 'vueconf.webp',
          logoAlt: 'Vue conference logo',
          company: 'Vue Conference',
        },
        {
          id: 3,
          user: 'Bogdan Arsenie',
          designation: 'CTO',
          picture: 'bogdan.webp',
          content: `At Rumie we use Formester to get feedback from our educators and
          volunteers. It's intuitive, fast and easy to share.`,
          logo: 'rumie.webp',
          logoAlt: 'Rumie logo',
          company: 'Rumie',
        },
        {
          id: 4,
          user: 'Costanza Casullo',
          designation: 'Volunteer',
          picture: 'costanza.webp',
          content: `Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.`,
          logo: 'wato-coding-hub.webp',
          logoAlt: 'Wato coding hub logo',
          company: 'Wato Coding Hub',
        },
        {
          id: 5,
          user: 'Deanna Bugalski',
          designation: 'Founder/CEO',
          picture: 'Deanna_bugalski.webp',
          content: `I was searching for a long time for a product I could use to send newsletters and surveys to my database. I tried so many different types of software and I found many of them difficult to use and slow to learn how to operate. But Formester was super easy to set up, and the usability is seamless! I highly recommend!`,
          logo: 'suggesterfy_logo.webp',
          logoAlt: 'suggesterfy logo',
          company: 'Suggesterfy',
        },
        {
          id: 6,
          user: 'Thibaud Martinez',
          designation: 'Organiser',
          picture: 'thibaud.webp',
          content: `I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.`,
          logo: 'tedx.webp',
          logoAlt: 'Tedx logo',
          company: 'Tedx',
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
    usersWrapperStyling() {
      if (this.active <= 2) return

      // Go Down
      if (this.prevActive < this.active) {
        if (this.active + 1 <= this.testimonials.length) {
          this.pixels = -this.userHeight * (this.active - 2)
        }
        return {
          transform: `translateY(${this.pixels}px)`,
        }
      }

      // Go Up
      else if (this.prevActive > this.active) {
        if (this.active > 3) {
          this.pixels = this.pixels + this.userHeight
        }
        return {
          transform: `translateY(${this.pixels}px)`,
        }
      }
    },
  },
  methods: {
    updateActive(id) {
      this.prevActive = this.active
      this.active = id
    },
    onResize() {
      if (window.innerWidth <= 992) {
        this.userHeight = 113
      } else {
        this.userHeight = 136
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window && window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style>
.bg-magnolia {
  background-color: #f7f5ff;
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
.quotation-marks {
  position: absolute;
  height: 35px;
  width: 35px;
  top: -25px;
  left: -45px;
}
.users {
  height: 408px;
  overflow: hidden;
}
.users-wrapper {
  transition: ease-in-out all 0.4s;
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
.user:last-child.active {
  box-shadow: 0px 6.54815px 25.4815px rgba(0, 0, 0, 0.0182222),
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
  position: relative;
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
  .users {
    height: 339px;
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
    line-height: 28px;
  }
}
@media only screen and (max-width: 768px) {
  .testimonials-section {
    padding-bottom: 0;
    gap: 0px;
  }
  #testimonialsCarousel {
    min-height: 480px;
    width: 100%;
    padding-bottom: 60px;
  }
  .testimonials-heading {
    margin-bottom: 36px;
    line-height: 52px;
    font-size: 2rem;
  }
  .mobile-testimonial-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    font-size: 20px;
    line-height: 36px;
    color: #333333;
  }
  .mobile-testimonial-wrapper .content {
    min-height: 300px;
  }
  .user {
    padding: 0px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
  .user .name {
    margin: 0;
  }
  .user .company {
    font-size: 14px;
    line-height: 22px;
    color: #333333;
  }
  .carousel-indicators .indicator {
    background-color: #e5def9;
  }
  .carousel-indicators .active {
    background-color: #4f3895;
  }
}
@media only screen and (max-width: 576px) {
  #testimonialsCarousel {
    min-height: 580px;
  }
  .mobile-testimonial-wrapper .content {
    min-height: 400px;
  }
  .user {
    margin-top: 8px;
    margin-bottom: 24px;
  }
}
</style>
