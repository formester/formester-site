<template>
  <section class="ssc-lg-section">
    <SectionTitle :heading="title" />
    <p class="ssc-lg-description text-center" v-if="description">
      {{ description }}
    </p>
    <div
      id="stepsSlider"
      class="carousel slide ssc-lg-slider"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators ssc-lg-indicators">
        <li
          v-for="(item, idx) in itemList"
          :key="item.id"
          data-bs-target="#stepsSlider"
          :data-bs-slide-to="idx"
          :class="{ active: !idx }"
          aria-current="true"
          :aria-label="`Step ${idx + 1}`"
        ></li>
      </ol>
      <div class="carousel-inner ssc-lg-inner">
        <div
          class="carousel-item"
          v-for="(item, idx) in itemList"
          :key="item.id"
          :class="{ active: idx === 0 }"
        >
          <div class="ssc-lg-card">
            <div class="ssc-lg-card__body">
              <span class="ssc-lg-card__num">{{ String(idx + 1).padStart(2, '0') }}</span>
              <h3 class="ssc-lg-card__title">
                {{ item?.title }}
              </h3>
              <MarkdownContent
                v-if="item?.description_markdown"
                class="ssc-lg-card__text"
                :content="item?.description_markdown"
              />
              <span v-else class="ssc-lg-card__text"> {{ item?.description }}</span>
            </div>
            <div class="ssc-lg-card__media" v-if="cardImg(item).src">
              <div class="ssc-lg-card__img-wrap">
                <nuxt-img
                  :src="cardImg(item).src"
                  :alt="cardImg(item).alt || item?.title || 'Step image'"
                  :width="cardImg(item).width || 480"
                  :height="cardImg(item).height || 360"
                  class="ssc-lg-card__img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MarkdownContent from '~/components/MarkdownContent.vue'
import { getStrapiImage } from '@/utils/strapiImage'

export default {
  components: { MarkdownContent },
  props: {
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    itemList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    cardImg(item) {
      return getStrapiImage(item.cardImage)
    }
  }
}
</script>

<style scoped>
.ssc-lg-section {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-18) var(--space-6);
}

.ssc-lg-description {
  font-size: var(--fs-lg);
  line-height: 1.6;
  color: var(--fg-2);
  max-width: 720px;
  margin: var(--space-4) auto 0;
}

.ssc-lg-slider {
  margin-top: var(--space-12);
  min-height: 535px;
}

.ssc-lg-inner {
  padding-bottom: var(--space-12);
}

.ssc-lg-card {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--space-8);
  align-items: center;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: 28px;
  transition: transform 140ms ease, box-shadow 140ms ease;
}

.ssc-lg-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.ssc-lg-card__body {
  width: 100%;
}

.ssc-lg-card__media {
  width: 100%;
}

.ssc-lg-card__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 24px;
  padding: 0 var(--space-2);
  margin-bottom: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  line-height: 1;
  color: var(--violet-500);
  background: var(--violet-50);
  border-radius: var(--r-full);
}

.ssc-lg-card__title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin: 0 0 var(--space-2);
}

.ssc-lg-card__text {
  display: block;
  font-size: 14.5px;
  font-weight: var(--fw-regular);
  line-height: 1.55;
  color: var(--fg-2);
}

.ssc-lg-card__img-wrap {
  overflow: hidden;
  border-radius: var(--r-lg);
  border: 1px solid var(--border-light);
}

.ssc-lg-card__img {
  display: block;
  width: 100%;
  height: auto;
}

.carousel-indicators.ssc-lg-indicators li {
  background-color: var(--violet-500);
}

@media (min-width: 992px) {
  .ssc-lg-card {
    flex-direction: row;
    gap: var(--space-12);
    align-items: center;
  }

  .ssc-lg-card__body {
    width: 50%;
  }

  .ssc-lg-card__media {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .ssc-lg-section {
    padding: var(--space-16) var(--space-4);
  }
}
</style>
