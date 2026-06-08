<template>
  <section class="fs-section">
    <div class="fs-inner">
      <div class="showcase-header">
        <SectionTitle :heading="title" />
        <p class="hero__subheading mt-4" v-if="description">
          {{ description }}
        </p>
      </div>
      <div class="fs-rows">
        <div
          class="fs-row"
          :class="{ 'fs-row--flip': isOdd(index) }"
          v-for="(item, index) in itemList"
          :key="item.id"
        >
          <div class="fs-text">
            <p class="card-step-index" v-if="steps">STEP {{ index + 1 }}</p>
            <h3 class="card-title">{{ item.title }}</h3>
            <MarkdownContent
              v-if="item.description_markdown"
              :content="item.description_markdown"
              class="card-description"
            />
            <p v-else class="card-description">{{ item.description }}</p>
          </div>
          <div class="fs-media" v-if="cardImg(item).src">
            <nuxt-img
              v-if="!isGif(cardImg(item).src)"
              :src="cardImg(item).src"
              :alt="cardImg(item).alt || item.title || 'Feature image'"
              :width="cardImg(item).width || 800"
              :height="cardImg(item).height || 600"
              class="fs-img"
              :modifiers="{ animated: true }"
              loading="lazy"
            />
            <img
              v-else
              :src="cardImg(item).src"
              :alt="cardImg(item).alt || item.title || 'Feature image'"
              :width="cardImg(item).width || 800"
              :height="cardImg(item).height || 600"
              class="fs-img"
              loading="lazy"
            />
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
    steps: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isOdd(index) {
      return index % 2 !== 0
    },
    isGif(url) {
      return url?.endsWith('.gif')
    },
    cardImg(item) {
      return getStrapiImage(item.cardImage)
    },
  },
}
</script>

<style scoped>
.fs-section {
  padding: var(--space-16) var(--space-6);
}
.fs-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.showcase-header {
  margin-bottom: var(--space-16);
}
.hero__subheading {
  text-align: center;
  max-width: 720px;
  margin: auto;
  color: var(--fg-2);
  font-size: var(--fs-xl);
  font-weight: var(--fw-regular);
  line-height: var(--lh-xl);
}

.fs-rows {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.fs-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}
.fs-row--flip .fs-media {
  order: 2;
}

.fs-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  min-width: 0;
}

.card-step-index {
  display: inline-block;
  margin: 0;
  padding: var(--space-1) var(--space-3);
  background: var(--bg-violet-50);
  color: var(--violet-600);
  font-size: 11px;
  font-weight: var(--fw-bold);
  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--r-full);
}

.card-title {
  margin: 0;
  color: var(--fg-1);
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.card-description {
  margin: 0;
  color: var(--fg-2);
  font-size: 15px;
  font-weight: var(--fw-regular);
  line-height: 1.6;
}
.card-description :deep(a) {
  color: var(--violet-600);
  font-weight: var(--fw-semibold);
}

.fs-media {
  min-width: 0;
}
.fs-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--r-2xl);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 992px) {
  .fs-row {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  .fs-row--flip .fs-media {
    order: 0;
  }
}
</style>
