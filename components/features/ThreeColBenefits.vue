<template>
  <div class="benefits-v2">
    <div class="benefits-v2__inner">
      <div class="benefits-v2__head">
        <SectionTitle :heading="title" />
        <p class="benefits-v2__desc" v-if="description">
          {{ description }}
        </p>
      </div>

      <div class="benefits-v2__grid">
        <div
          v-for="item in itemList"
          :key="item.id"
          class="benefits-v2__card"
        >
          <div class="benefits-v2__icon-tile" v-if="cardImg(item).src">
            <nuxt-img
              class="benefit-icon"
              :src="cardImg(item).src"
              :alt="cardImg(item).alt || item?.title || 'Feature icon'"
              :width="cardImg(item).width || 69"
              :height="cardImg(item).height || 69"
              loading="lazy"
            />
          </div>
          <h3 class="benefits-v2__title">{{ item?.title }}</h3>

          <MarkdownContent
            v-if="item?.description_markdown"
            class="benefits-v2__body"
            :content="item?.description_markdown"
          />
          <p v-else class="benefits-v2__body">
            {{ item?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
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
.benefits-v2 {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

.benefits-v2__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

.benefits-v2__head {
  text-align: center;
}

.benefits-v2__desc {
  max-width: 720px;
  margin: var(--space-4) auto 0;
  font-size: var(--fs-md);
  line-height: 1.6;
  color: var(--fg-3);
}

.benefits-v2__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: var(--space-12);
}

.benefits-v2__card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: 24px;
  transition: transform 140ms ease, box-shadow 140ms ease;
}

.benefits-v2__card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.benefits-v2__icon-tile {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--bg-violet-25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.benefit-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.benefits-v2__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.4;
  margin: 0 0 var(--space-2);
}

.benefits-v2__body {
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--fg-2);
  margin: 0;
}

@media screen and (max-width: 767px) {
  .benefits-v2__grid {
    grid-template-columns: 1fr;
  }
}
</style>
