<template>
  <div class="fds container">
    <SectionTitle :heading="title" />
    <p class="fds__description hero__subheading text-center" v-if="description">
      {{ description }}
    </p>
    <div class="row fds__grid">
      <div v-for="item in itemList" :key="item.id" class="col-md-6 fds__col">
        <div class="fds__card">
          <nuxt-img
            v-if="cardImg(item).src"
            :src="cardImg(item).src"
            :alt="cardImg(item).alt || item.title || 'Feature image'"
            :width="cardImg(item).width || 600"
            :height="cardImg(item).height || 400"
            class="img-fluid fds__img"
            loading="lazy"
          />
          <h3 class="feature__heading fds__title">{{ item.title }}</h3>
          <MarkdownContent
            v-if="item.description_markdown"
            class="fds__body"
            :content="item.description_markdown"
          />
          <p v-else class="fds__body">
            {{ item.description }}
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
.fds {
  max-width: 1120px;
  margin-inline: auto;
  padding-block: var(--space-16);
}

.fds__description {
  max-width: 720px;
  margin-inline: auto;
}

.fds__grid {
  margin-top: var(--space-12);
  row-gap: var(--space-6);
}

.fds__col {
  display: flex;
}

.fds__card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.fds__card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.fds__img {
  width: 100%;
  height: auto;
  border-radius: var(--r-lg);
  border: 1px solid var(--border-light);
  margin-bottom: var(--space-5);
}

.feature__heading.fds__title {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  color: var(--fg-1);
  margin-bottom: var(--space-3);
}

.fds__body,
.fds__body :deep(p) {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--fg-2);
  margin-bottom: 0;
}

.fds__body :deep(p) + :deep(p) {
  margin-top: var(--space-3);
}

.fds__body :deep(a) {
  color: var(--violet-600);
  font-weight: 600;
  text-decoration: none;
}

.fds__body :deep(a):hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .fds {
    padding-block: var(--space-12);
  }

  .fds__grid {
    margin-top: var(--space-8);
  }

  .feature__heading.fds__title {
    font-size: 18px;
  }
}
</style>
