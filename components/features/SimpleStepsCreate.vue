<template>
  <section class="ssc-section">
    <SectionTitle :heading="title" />
    <p class="ssc-description" v-if="description">
      {{ description }}
    </p>

    <div class="ssc-grid row">
      <div v-for="(item, idx) in itemList" :key="item?.id" :class="columnClass">
        <div class="ssc-card">
          <span class="ssc-card__num">{{ String(idx + 1).padStart(2, '0') }}</span>

          <div
            v-if="cardImg(item).src"
            class="ssc-card__img-wrap"
          >
            <nuxt-img
              :src="cardImg(item).src"
              :alt="cardImg(item).alt || item?.title || 'Step image'"
              :width="cardImg(item).width || 400"
              :height="cardImg(item).height || 300"
              class="ssc-card__img"
              loading="lazy"
            />
          </div>

          <div class="ssc-card__body">
            <h3 class="ssc-card__title">{{ item?.title }}</h3>

            <MarkdownContent
              v-if="item?.description_markdown"
              class="ssc-card__text"
              :content="item?.description_markdown"
            />
            <p v-else class="ssc-card__text">
              {{ item?.description }}
            </p>
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
  },
  computed: {
    columnClass() {
      switch (this.itemList.length) {
        case 2:
          return 'col-md-6 col-sm-6'
        case 3:
          return 'col-md-4 col-sm-6'
        case 4:
          return 'col-md-3 col-sm-6'
        default:
          return 'col-md-4 col-sm-6'
      }
    },
  },
}
</script>

<style scoped>
.ssc-section {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-18) var(--space-6);
}

.ssc-description {
  font-size: var(--fs-lg);
  line-height: 1.6;
  color: var(--fg-2);
  text-align: center;
  max-width: 720px;
  margin: var(--space-4) auto 0;
}

.ssc-grid {
  margin-top: var(--space-12);
  row-gap: var(--space-6);
}

.ssc-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: 26px;
  transition: transform 140ms ease, box-shadow 140ms ease;
}

.ssc-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.ssc-card__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
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

.ssc-card__img-wrap {
  margin-bottom: var(--space-5);
  overflow: hidden;
  border-radius: var(--r-lg);
  border: 1px solid var(--border-light);
}

.ssc-card__img {
  display: block;
  width: 100%;
  height: auto;
}

.ssc-card__body {
  display: flex;
  flex-direction: column;
}

.ssc-card__title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin: 0 0 var(--space-2);
}

.ssc-card__text {
  font-size: 14.5px;
  font-weight: var(--fw-regular);
  line-height: 1.55;
  color: var(--fg-2);
  margin: 0;
}

@media (max-width: 768px) {
  .ssc-section {
    padding: var(--space-16) var(--space-4);
  }
}
</style>
