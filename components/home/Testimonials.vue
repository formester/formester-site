<template>
  <div>
    <div class="container py-5" v-if="isFeatureTestimonail">
      <div class="row">
        <SectionTitle :heading="heading" />
        <p class="hero__subheading text-center" v-if="description">
          {{ description }}
        </p>
        <div
          class="d-flex flex-column flex-lg-row px-3 px-md-0 justify-content-center align-items-center mt-5"
        >
          <div
            class="card mt-5 mt-lg-1 p-3 me-lg-3"
            style="max-width: 512px"
            v-for="(testimonial, idx) in randomTestimonials"
            :key="testimonial.id"
          >
            <nuxt-img
              v-if="idx === 0"
              class="quotes__logo"
              src="/quotes.svg"
              alt="quilotes-logo"
              loading="lazy"
            />
            <div class="d-flex flex-column align-items-center text-center px-2">
              <span class="quote mt-5 mb-4">{{ testimonial.comment }}</span>
              <div class="my-3 d-flex flex-column align-items-center">
                <span class="person">{{ testimonial.name }}</span>
                <span class="designation">{{ testimonial.position }}</span>
                <nuxt-img
                  class="brand mt-4 mb-3"
                  :src="
                    testimonial.companyLogo.imageUrl ||
                    testimonial.companyLogo.image.url
                  "
                  :alt="testimonial.companyLogo.imageAlt"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial Homepage -->
    <div class="container my-5 py-5" v-else>
      <div
        class="d-flex justify-content-center justify-content-md-between align-items-center my-4 my-md-5"
      >
        <h2 class="section__heading position-relative w-full text-center">
          <span
            v-for="item in heading"
            :key="item.id"
            :class="{ highlight__text: item.highlight }"
          >
            {{ item.text }}
          </span>
          <nuxt-img
            src="UI Block/Vector 5.svg"
            class="position-absolute arrow-decoration"
            alt="arrow"
            loading="lazy"
          />
        </h2>
        <div class="d-none d-md-flex">
          <ArrowButton @click="prevTestimonial" direction="left" />
          <ArrowButton
            @click="nextTestimonial"
            direction="right"
            class="ms-4"
          />
        </div>
      </div>
      <div class="testimonial__wrapper d-flex position-relative">
        <div
          class="testimonial__cards d-flex"
          :style="{ transform: cardTranslation }"
        >
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="testimonial__card"
          >
            <div class="d-flex">
              <nuxt-img
                :src="
                  testimonial.profileImage.imageUrl ||
                  testimonial.profileImage.image.url
                "
                :alt="testimonial.profileImage.imageAlt"
                class="img-fluid testimonial__user"
                loading="lazy"
              />
              <div class="d-flex flex-column ms-3">
                <span class="testimonial__user-text">{{
                  testimonial.name
                }}</span>
                <span class="testimonial__user-degn"
                  >{{ testimonial.position }} at
                  <span class="testimonial__user-company">{{
                    testimonial.organization
                  }}</span></span
                >
              </div>
            </div>
            <div class="mt-4">
              <nuxt-img
                src="/UI Block/quotation.svg"
                class="quotation-marks mt-2"
                alt="Quotation marks"
                loading="lazy"
              />
              <p class="mt-1">{{ testimonial.comment }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-md-none d-flex mt-4 pt-2">
        <ArrowButton @click="prevTestimonial" direction="left" />
        <ArrowButton @click="nextTestimonial" direction="right" class="ms-4" />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowButton from '@/components/UI/ArrowButton.vue'

export default {
  components: {
    ArrowButton,
  },
  props: {
    heading: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: '',
    },
    version: {
      type: String,
      default: 'home',
    },
    testimonials: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
      maxIndex: null,
      deviceWidth: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window && window.addEventListener('resize', this.onResize)
      this.onResize()
    })
  },
  methods: {
    prevTestimonial() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    nextTestimonial() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++
      }
    },
    onResize() {
      this.currentIndex = 0
      this.deviceWidth = window.innerWidth
      this.maxIndex = Math.floor(
        (this.testimonials.length - 1) /
          (this.deviceWidth > 1200 ? 3 : this.deviceWidth > 768 ? 2 : 1)
      )
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    cardTranslation() {
      // extra 2% because of the gap
      let extraTransition = 2.4
      if (this.deviceWidth < 768) {
        extraTransition = 0
      }
      return `translateX(-${this.currentIndex * (100 + extraTransition)}%)`
    },
    isFeatureTestimonail() {
      return this.version === 'feature'
    },
    randomTestimonials() {
      const randIndex = Math.floor(
        Math.random() * (this.testimonials.length - 2)
      )
      const randomTestimonials = this.testimonials.slice(
        randIndex,
        randIndex + 2
      )
      return randomTestimonials
    },
  },
}
</script>

<style>
.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
}
.quotes__logo {
  width: 81px;
  position: absolute;
  top: -45px;
  left: -42px;
}
.quote {
  font-size: 19px;
  font-weight: 500;
}
.card {
  border-radius: 12px;
  border: 1px solid #e5e5e5;
}
.person {
  font-size: 16px;
  font-weight: 500;
}
.designation {
  font-size: 15px;
  color: #737373;
}
@media (max-width: 576px) {
  .quotes__logo {
    left: -20px;
  }
}
/* Testimonial Homepage */
.bg-magnolia {
  background-color: #f7f5ff;
}

.testimonial__wrapper {
  overflow-x: hidden;
}

.testimonial__cards {
  width: 100%;
  transition: transform 0.5s ease-in-out;
  gap: 24px;
}

.testimonial__card {
  padding: 40px;
  flex: 0 0 calc(33.33% - 16px);
  border-radius: 16px;
  background: linear-gradient(
    144deg,
    #f7f3ff -2.68%,
    rgba(247, 243, 255, 0.4) 51.09%,
    #f7f3ff 109.34%
  );
}

.testimonial__user {
  width: 48px;
  height: 48px;
}

.testimonial__user-text {
  font-weight: 500;
  line-height: 24px;
}

.testimonial__user-degn {
  font-size: 14px;
  line-height: 20px;
  color: #42526b;
}

.testimonial__user-company {
  color: #7534ff;
  font-weight: 500;
}

.arrow-decoration {
  height: 100px;
  top: 10%;
  right: -25%;
}

.quotation-marks {
  height: 30px;
  width: 30px;
}

@media screen and (max-width: 1200px) {
  .testimonial__card {
    flex: 0 0 calc(50% - 16px);
  }

  .arrow-decoration {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .testimonial__cards {
    gap: 0;
  }

  .testimonial__card {
    flex: 0 0 100%;
  }
}
</style>
