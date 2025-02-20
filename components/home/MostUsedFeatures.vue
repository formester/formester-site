<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      <span
        v-for="item in heading"
        :key="item.id"
        :class="{ highlight__text: item.highlight }"
      >
        {{ item.text }}
      </span>
    </h2>
    <!-- Desktop -->
    <div class="feature__desktop d-none d-lg-flex row mt-5">
      <ul class="feature__content-wrapper col-6">
        <li
          v-for="(feature, index) in itemList"
          :key="feature.title"
          :class="[
            'feature__item',
            'd-flex',
            'align-items-start',
            'p-4',
            { active: activeIndex === index },
          ]"
          @click="handleFeatureClick(index)"
        >
          <div
            class="feature__icon-wrapper d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              :src="feature.icon.imageUrl || feature.icon.image.url"
              :alt="feature.icon.imageAlt"
              loading="lazy"
            />
          </div>
          <div class="ms-3 mt-1">
            <h3 class="feature__title">{{ feature.title }}</h3>
            <div v-if="activeIndex === index">
              <MarkdownContent
                v-if="feature.description_markdown"
                class="feature__desc mt-2 mb-0"
                :content="feature.description_markdown"
              />
              <p v-else class="feature__desc mt-2 mb-0">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div class="col-6 d-flex align-items-center">
        <transition name="fade" mode="out-in">
          <nuxt-img
            class="feature__img img-fluid"
            :src="activeFeatureImageUrl"
            :alt="activeFeatureImageAlt"
            :key="activeFeatureImageUrl"
          />
        </transition>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-lg-none">
      <div v-for="feature in itemList" :key="feature.title" class="mt-5">
        <nuxt-img
          :src="feature.cardImage.imageUrl || feature.cardImage.image.url"
          :alt="feature.cardImage.imageAlt"
          class="mb-4 img-fluid"
          loading="lazy"
        />
        <div class="d-flex align-items-start mt-2">
          <div
            class="feature__icon-wrapper d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              :src="feature.icon.imageUrl || feature.icon.image.url"
              :alt="feature.icon.imageAlt"
              loading="lazy"
            />
          </div>
          <div class="ms-3 mt-1">
            <h3 class="feature__title">{{ feature.title }}</h3>
            <MarkdownContent
              v-if="feature.description_markdown"
              class="feature__desc mt-2 mb-0"
              :content="feature.description_markdown"
            />
            <p v-else class="feature__desc mt-2 mb-0">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MarkdownContent from '~/components/MarkdownContent.vue'

export default {
  components: { MarkdownContent },
  props: {
    heading: {
      type: Array,
      default: () => [],
    },
    itemList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    activeFeatureImageUrl() {
      return (
        this.itemList[this.activeIndex].cardImage.imageUrl ||
        this.itemList[this.activeIndex].cardImage.image.url
      )
    },
    activeFeatureImageAlt() {
      return this.itemList[this.activeIndex].cardImage.imageAlt
    },
  },
  methods: {
    handleFeatureClick(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style scoped>
.feature__content-wrapper {
  /* prevent jumping of image */
  min-height: 784px;
}

.feature__icon-wrapper {
  border-radius: 50%;
  border: 4px solid #f7f3ff;
  background: #f7f3ff;
  width: 40px;
  height: 40px;
  padding: 4px;
}

.feature__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 0;
}

.feature__desc {
  color: #475467;
  font-size: 16px;
  line-height: 24px;
}

.feature__item {
  border-left: 4px solid #f2f4f7;
  cursor: pointer;
}

.feature__item.active {
  border-left-color: #7f56d9;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(0.12, 0.26, 1, 0.6);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.002);
}

.feature__img {
  transition: all 0.2s cubic-bezier(0.12, 0.26, 1, 0.6);
}
</style>
