<template>
  <section class="container py-5">
    <div class="row justify-content-center align-items-center text-center mb-5">
      <SectionTitle :heading="heading" />
       <p>Impress users. Capture more leads. Grow your brand.</p>
    </div>
    <!-- Desktop -->
    <div class="feature__desktop d-none d-lg-flex row">
      <ul class="feature__content-wrapper col-6">
        <li
          v-for="(feature, index) in itemList"
          :key="feature.title"
          :class="[
            'feature__item',
            'd-flex flex-column',
            'p-4',
            { active: activeIndex === index },
          ]"
          @click="handleFeatureClick(index)"
        >
          <div class="d-flex align-items-start">
            <div
              :class="[
                'feature__icon-wrapper d-flex align-items-center justify-content-center',
                { 'inactive-icon': activeIndex !== index },
              ]"
            >
              <nuxt-img
                :src="feature.icon.imageUrl || feature.icon.image.url"
                :alt="feature.icon.imageAlt"
                loading="lazy"
                :class="{ 'grey-filter': activeIndex !== index }"
              />
            </div>
            <div class="ms-3 mt-1">
              <h3
                :class="[
                  'feature__title',
                  { 'active-title': activeIndex === index },
                ]"
              >
                {{ feature.title }}
              </h3>
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
          </div>

          <!-- Individual progress bar for each tab -->
          <div
            v-if="activeIndex === index"
            class="progress-container w-100 progress-wrapper"
          >
            <div class="progress">
              <div
                class="progress-bar"
                :key="'progress-' + activeIndex + '-' + progressKey"
                :class="{ 'progress-animate': isAutoRotating }"
                :style="{
                  '--animation-duration': rotationDuration / 1000 + 's',
                }"
              ></div>
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
      autoRotateInterval: null,
      isAutoRotating: true,
      rotationDuration: 7000,
      progressKey: 0,
    }
  },
  mounted() {
    this.startAutoRotation()
  },
  beforeDestroy() {
    this.stopAutoRotation()
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
      // Reset auto-rotation when manually clicking
      this.progressKey++ // Increment to force animation reset
      this.resetAutoRotation()
    },
    startAutoRotation() {
      // Animate progress bar to 100% over rotationDuration
      this.isAutoRotating = true

      // Set interval for rotating features
      this.autoRotateInterval = setInterval(() => {
        this.rotateToNextFeature()
      }, this.rotationDuration)
    },
    stopAutoRotation() {
      if (this.autoRotateInterval) {
        clearInterval(this.autoRotateInterval)
        this.autoRotateInterval = null
      }
      this.isAutoRotating = false
    },
    resetAutoRotation() {
      this.stopAutoRotation()
      this.startAutoRotation()
    },
    rotateToNextFeature() {
      // Move to next feature or back to first
      this.activeIndex = (this.activeIndex + 1) % this.itemList.length

      // Reset progress bar animation by incrementing the key and toggling isAutoRotating
      this.isAutoRotating = false
      this.progressKey++

      // Force a repaint before starting animation again
      setTimeout(() => {
        this.isAutoRotating = true
      }, 50)
    },
  },
  watch: {
    // Watch for changes in itemList to reset rotation
    itemList() {
      this.resetAutoRotation()
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}

@media screen and (max-width: 768px) {
  .container {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
}

.feature__content-wrapper {
  margin: auto 0;
}

.feature__icon-wrapper {
  border-radius: 50%;
  border: 4px solid #f3eeff;
  background: #f3eeff;
  width: 40px;
  height: 40px;
  padding: 4px;
}

.feature__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 0;
  color: #475467;
}

.feature__desc {
  color: #101828;
  font-size: 16px;
  line-height: 24px;
}

.feature__item {
  cursor: pointer;
  position: relative;
}

.feature__item:hover {
  background-color: #fcfcfd;
}

.feature__item.active {
  background-color: #fdfbff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 24px;
  transition: all 0.2s cubic-bezier(0.12, 0.26, 1, 0.6);
}

.progress-container {
  width: 100%;
}

.progress-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
}

.progress {
  height: 4px;
  background-color: #f2f4f7;
  border-radius: 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #b8a2e9 0%, #6434d0 100%);
  border-radius: 24px;
}

.progress-animate {
  animation: progressAnimation var(--animation-duration, 6s) linear forwards;
}

@keyframes progressAnimation {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.inactive-icon {
  background: #f2f4f7;
  border-color: #f2f4f7;
  transition: all 0.3s ease;
}

.inactive-icon img,
.inactive-icon svg {
  filter: grayscale(1) brightness(1.3) contrast(1.2) sepia(0.18)
    hue-rotate(175deg) saturate(1.2);
  transition: filter 0.3s ease;
}

.active-title {
  color: #6434d0;
  transition: color 0.3s ease;
  font-weight: 600;
}
</style>
