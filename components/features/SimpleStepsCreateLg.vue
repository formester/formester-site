<template>
  <div class="container py-5 px-2">
    <div class="row">
      <SectionTitle :heading="title" />
      <p class="hero__subheading text-center" v-if="description">
        {{ description }}
      </p>
      <div
        id="stepsSlider"
        class="carousel slide"
        data-bs-ride="carousel"
        style="min-height: 535px"
      >
        <ol class="carousel-indicators">
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
        <div class="carousel-inner px-3 py-5">
          <div
            class="carousel-item"
            v-for="(item, idx) in itemList"
            :key="item.id"
            :class="{ active: idx === 0 }"
          >
            <div class="d-flex flex-column-reverse flex-lg-row">
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step {{ idx + 1 }}</span>
                <h3 class="step__section-heading">
                  {{ item?.title }}
                </h3>
                <MarkdownContent
                  v-if="item?.description_markdown"
                  class="step__description"
                  :content="item?.description_markdown"
                />
                <span v-else class="step__description"> {{ item?.description }}</span>
              </div>
              <div
                class="col-lg-5 m-auto"
                v-if="item.cardImage?.image?.url || item.cardImage?.imageUrl"
              >
                <nuxt-img
                  :src="item.cardImage.image?.url || item.cardImage.imageUrl"
                  class="w-lg-40 d-block img-fluid my-auto"
                  :alt="item.cardImage?.imageAlt"
                  loading="lazy"
                />
              </div>
            </div>
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
.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}
.step__heading {
  color: var(--clr-primary);
  font-weight: 700;
  margin-bottom: 8px;
}
.step__description {
  font-size: 15px;
  font-weight: 500;
}
.step__section-heading {
  font-size: 28px;
  font-weight: 600;
}
.step__circle {
  position: absolute;
  top: 50%;
  right: 50%;
}
.carousel-indicators li {
  background-color: var(--clr-primary);
}
</style>
