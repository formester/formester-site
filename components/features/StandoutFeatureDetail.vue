<template>
  <div class="container py-5">
    <SectionTitle :heading="title" />
    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>
    <div class="row">
      <div v-for="item in itemList" :key="item.id" :class="columnClass">
        <div
          class="border-sm-none border-start ps-3 d-flex flex-column align-items-start"
        >
          <nuxt-img
            v-if="cardImg(item).src"
            :src="cardImg(item).src"
            :alt="cardImg(item).alt || item.title || 'Feature image'"
            :width="cardImg(item).width || 400"
            :height="cardImg(item).height || 300"
            class="img-fluid"
            loading="lazy"
          />
          <h3 class="sub__section-heading mt-4">{{ item.title }}</h3>
          <MarkdownContent
            v-if="item.description_markdown"
            class="subheading__text"
            :content="item.description_markdown"
          />
          <p v-else class="subheading__text">{{ item.description }}</p>
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

.img-fluid {
  width: 100%;
}

.sub__section-heading {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  position: relative;
}

.subheading__text {
  font-size: 14px;
  line-height: 22px;
}

.sub__section-heading::before {
  content: '';
  position: absolute;
  left: -17px;
  height: 100%;
  width: 1.5px;
  background-color: var(--clr-primary);
}
</style>
