<template>
  <div class="container pt-5 pb-3 px-2">
    <div class="row pt-4">
      <SectionTitle :heading="title" />
      <p class="hero__subheading" v-if="description">
        {{ description }}
      </p>
      <div class="templates mt-md-5">
        <div v-for="item in itemList" :key="item.id">
          <div
            class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
          >
            <nuxt-img
              :src="item.cardImage.image?.url || item.cardImage.imageUrl"
              class="img-fluid"
              style="width: 69px"
              :alt="item.cardImage.imageAlt"
              loading="lazy"
            />
            <h4 class="sub__section-heading mt-4">{{ item.title }}</h4>
            <MarkdownContent
              v-if="item?.description_markdown"
              class="subheading__text"
              :content="item?.description_markdown"
            />
            <p v-else class="subheading__text">{{ item.description }}</p>
          </div>
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
}
</script>

<style scoped>
.hero__subheading {
  text-align: center;
}

.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}

.card {
  border-radius: 18px;
  border: none;
}

.no__sapm-image {
  margin-left: -15px;
}

@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
  .no__sapm-image {
    margin-left: 0px;
  }
}
</style>
