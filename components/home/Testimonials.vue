<template>
  <div class="container my-5 py-5">
    <div
      class="d-flex justify-content-center justify-content-md-between align-items-center my-4 my-md-5"
    >
      <h2 class="section__heading position-relative w-full text-center">
        <span
          v-for="item in data.title"
          :key="item.id"
          :class="{ hglight: item.highlight }"
        >
          {{ item.text }}
        </span>
        <nuxt-img
          src="UI Block/Vector 5.svg"
          class="position-absolute arrow-decoration"
          loading="lazy"
        />
      </h2>
      <div class="d-none d-md-flex">
        <ArrowButton @click="prevTestimonial" direction="left" />
        <ArrowButton @click="nextTestimonial" direction="right" class="ms-4" />
      </div>
    </div>
    <div class="testimonial__wrapper d-flex position-relative">
      <div
        class="testimonial__cards d-flex"
        :style="{ transform: cardTranslation }"
      >
        <div
          v-for="testimonial in data.testimonials"
          :key="testimonial.id"
          class="testimonial__card"
        >
          <div class="d-flex">
            <nuxt-img
              :src="testimonial.profileImage.url"
              class="img-fluid testimonial__user"
              loading="lazy"
            />
            <div class="d-flex flex-column ms-3">
              <span class="testimonial__user-text">{{ testimonial.name }}</span>
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
</template>

<script>
import ArrowButton from '@/components/UI/ArrowButton.vue'

export default {
  components: {
    ArrowButton,
  },
  props: ['data'],
  data() {
    return {
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
        (this.data.testimonials.length - 1) /
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
  },
}
</script>

<style>
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
