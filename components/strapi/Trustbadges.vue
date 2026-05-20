<template>
  <section class="trustbadges">
    <div class="trustbadges__inner">
      <div class="trustbadges__header">
        <SectionTitle :heading="title" />
        <p v-if="description" class="trustbadges__desc">{{ description }}</p>
      </div>

      <div class="trustbadges__grid">
        <div
          v-for="(badge, i) in displayBadges"
          :key="badge.id || i"
          class="badge-card"
        >
          <nuxt-img
            :src="logoFor(badge).src"
            :alt="logoFor(badge).alt"
            :width="logoFor(badge).width"
            :height="logoFor(badge).height"
            class="badge-card__logo"
          />
          <div class="badge-card__rating">
            <span class="badge-card__number">{{ badge.ratingNumber }}</span>
            <nuxt-img
              :src="starsFor(badge).src"
              :alt="starsFor(badge).alt"
              :width="starsFor(badge).width"
              :height="starsFor(badge).height"
              class="badge-card__stars"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
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

const props = defineProps({
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
})

const displayBadges = computed(() =>
  props.badges && props.badges.length ? props.badges : DEFAULT_BADGES
)

function logoFor(badge) {
  return getStrapiImage(badge?.logo)
}

function starsFor(badge) {
  return getStrapiImage(badge?.stars)
}
</script>

<style scoped>
.trustbadges {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

@media (min-width: 768px) {
  .trustbadges {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}

.trustbadges__inner {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.trustbadges__header {
  text-align: center;
  max-width: 720px;
}

.trustbadges__desc {
  margin-top: var(--space-4);
  font-size: var(--fs-md);
  color: var(--fg-2);
  line-height: var(--lh-md);
}

.trustbadges__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  width: 100%;
}

@media (min-width: 1024px) {
  .trustbadges__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-6);
  }
}

.badge-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6) var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  cursor: default;
}

.badge-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.badge-card__logo {
  height: 36px;
  max-width: 100%;
  object-fit: contain;
}

@media (min-width: 768px) {
  .badge-card {
    padding: var(--space-8) var(--space-6);
  }

  .badge-card__logo {
    height: 40px;
  }
}

.badge-card__rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.badge-card__number {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1;
  font-family: var(--font-primary);
}

@media (min-width: 768px) {
  .badge-card__number {
    font-size: var(--fs-3xl);
  }
}

.badge-card__stars {
  height: 20px;
  display: block;
}

@media (min-width: 768px) {
  .badge-card__stars {
    height: 24px;
  }
}
</style>
