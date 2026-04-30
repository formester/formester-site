<template>
  <div class="container py-5">
    <SectionTitle :heading="title" />
    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>
    <div class="row py-5">
      <div v-for="item in itemList" :key="item.id" class="col-md-6 my-3">
        <div class="px-4">
          <nuxt-img
            v-if="cardImg(item).src"
            :src="cardImg(item).src"
            :alt="cardImg(item).alt || item.title || 'Feature image'"
            :width="cardImg(item).width || 600"
            :height="cardImg(item).height || 400"
            class="img-fluid"
            loading="lazy"
          />
          <h3 class="feature__heading">{{ item.title }}</h3>
          <MarkdownContent
            v-if="item.description_markdown"
            :content="item.description_markdown"
          />
          <p v-else>
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
.feature__heading {
  font-size: 28px;
  line-height: 44px;
  font-weight: 700;
}

img {
  margin-bottom: 2em;
  border-radius: 6px;
}
</style>
