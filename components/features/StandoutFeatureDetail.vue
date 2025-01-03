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
            :src="item.cardImage.image?.url || item.cardImage.imageUrl"
            class="img-fluid"
            :alt="item.cardImage.imageAlt"
            loading="lazy"
          />
          <h4 class="sub__section-heading mt-4">{{ item.title }}</h4>
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
