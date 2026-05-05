<template>
  <div class="container">
    <div class="row justify-content-center align-items-center text-center mt-5">
      <SectionTitle :heading="title" />
      <p>{{ description }}</p>
      <div class="trustbadge-wrapper">
        <div
          v-for="(badge, i) in displayBadges"
          :key="badge.id || i"
          class="rating-wrapper"
        >
          <nuxt-img
            :src="logoFor(badge).src"
            :alt="logoFor(badge).alt"
            :width="logoFor(badge).width"
            :height="logoFor(badge).height"
            class="logo"
          />
          <div class="rating">
            <span class="rating-number">{{ badge.ratingNumber }}</span>
            <nuxt-img
              :src="starsFor(badge).src"
              :alt="starsFor(badge).alt"
              :width="starsFor(badge).width"
              :height="starsFor(badge).height"
              class="rating-stars"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiImage } from '@/utils/strapiImage'

const stars5 = { url: '/5-stars.svg', alternativeText: '5 stars', width: 139, height: 24 }
const stars4_5 = { url: '/4.5-stars.svg', alternativeText: '4.5 stars', width: 139, height: 24 }

const DEFAULT_BADGES = [
  {
    id: 'default-product-hunt',
    ratingNumber: '5/5',
    logo: { url: '/product-hunt.svg', alternativeText: 'Product Hunt', width: 171, height: 40 },
    stars: stars5,
  },
  {
    id: 'default-trustpilot',
    ratingNumber: '4.4/5',
    logo: { url: '/trustpilot.svg', alternativeText: 'Trustpilot', width: 163, height: 40 },
    stars: stars4_5,
  },
  {
    id: 'default-capterra',
    ratingNumber: '5/5',
    logo: { url: '/capterra.svg', alternativeText: 'Capterra', width: 174, height: 40 },
    stars: stars5,
  },
  {
    id: 'default-g2-crowd',
    ratingNumber: '4.7/5',
    logo: { url: '/g2-crowd.svg', alternativeText: 'G2 Crowd', width: 40, height: 40 },
    stars: stars4_5,
  },
]

export default {
  props: {
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
    },
    badges: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    displayBadges() {
      return this.badges && this.badges.length ? this.badges : DEFAULT_BADGES
    },
  },
  methods: {
    logoFor(badge) {
      return getStrapiImage(badge?.logo)
    },
    starsFor(badge) {
      return getStrapiImage(badge?.stars)
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}

@media screen and (max-width: 768px) {
  .container {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
}
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.rating-number {
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  display: flex;
  align-items: center;
}

.rating-stars {
  height: 24px;
  display: block;
}

.rating-wrapper {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-inline: 48px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 8px;
  background-color: #fcfcfd;
  border: 1px solid #f2f4f7;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.logo {
  height: 40px;
  max-width: 100%;
  object-fit: contain;
}

.trustbadge-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 24px auto 0 auto;
}

@media screen and (max-width: 768px) {
  .rating-number {
    font-size: 32px;
    line-height: 40px;
  }

  .rating-stars {
    height: 20px;
  }

  .rating-wrapper {
    flex: 1 1 calc(50% - 24px);
    padding-inline: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .logo {
    height: 32px;
  }
}
</style>
