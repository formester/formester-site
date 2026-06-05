<template>
  <div class="sfd-section">
    <SectionTitle :heading="title" />
    <p class="sfd-subheading" v-if="description">
      {{ description }}
    </p>
    <div class="row sfd-row">
      <div v-for="item in itemList" :key="item.id" :class="columnClass">
        <div class="sfd-card d-flex flex-column align-items-start">
          <nuxt-img
            v-if="cardImg(item).src"
            :src="cardImg(item).src"
            :alt="cardImg(item).alt || item.title || 'Feature image'"
            :width="cardImg(item).width || 400"
            :height="cardImg(item).height || 300"
            class="sfd-card__img"
            loading="lazy"
          />
          <h3 class="sfd-card__title">{{ item.title }}</h3>
          <MarkdownContent
            v-if="item.description_markdown"
            class="sfd-card__body"
            :content="item.description_markdown"
          />
          <p v-else class="sfd-card__body">{{ item.description }}</p>
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
    },
  },
  computed: {
    columnClass() {
      switch (this.itemList.length) {
        case 2:
          return 'col-md-6 col-sm-6 mt-5'
        case 3:
          return 'col-md-4 col-sm-6 mt-5'
        case 4:
          return 'col-md-3 col-sm-6 mt-5'
        default:
          return 'col-md-4 col-sm-6 mt-5'
      }
    },
  },
}
</script>

<style scoped>
.sfd-section {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-6);
}

.sfd-subheading {
  max-width: 720px;
  margin: var(--space-4) auto 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  color: var(--fg-2);
}

.sfd-row {
  margin-top: var(--space-8);
}

/* Item card */
.sfd-card {
  height: 100%;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: 24px;
  transition:
    transform 140ms ease,
    box-shadow 140ms ease,
    border-color 140ms ease;
}

.sfd-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-violet);
}

.sfd-card__img {
  width: 100%;
  height: auto;
  border-radius: var(--r-lg);
  margin-bottom: var(--space-5);
}

.sfd-card__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--fg-1);
  margin: 0 0 var(--space-2);
}

.sfd-card__body {
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--fg-2);
  margin: 0;
}

/* Links inside markdown bodies */
.sfd-card__body :deep(a) {
  color: var(--violet-600);
  font-weight: 600;
  text-decoration: none;
}

.sfd-card__body :deep(a:hover) {
  text-decoration: underline;
}

@media (max-width: 575px) {
  .sfd-section {
    padding: var(--space-12) var(--space-4);
  }
}
</style>
