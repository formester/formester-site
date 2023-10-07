<template>
  <div class="feature__hero">
    <div class="container py-5 my-3">
      <h2 class="section__heading text-center">
        {{ sectionHeading }}
      </h2>
      <div>
        <div
          v-for="(group, groupIndex) in computedFeatures"
          :key="groupIndex"
          class="d-flex align-items-center justify-content-center toggler__container mx-auto mt-4"
        >
          <span
            v-for="(feature, index) in group"
            :key="index"
            class="toggler__button"
            :class="activeIndex === groupIndex * 5 + index ? 'active' : ''"
            @click="setActive(groupIndex * 5 + index)"
            v-html="feature?.heading"
          ></span>
        </div>
        <div
          class="d-flex align-items-center toggler__container mobile mx-auto mt-4"
        >
          <span
            v-for="(feature, index) in features.value"
            :key="index"
            class="toggler__button"
            :class="activeIndex === index ? 'active' : ''"
            @click="setActive(index)"
            v-html="feature.heading"
          ></span>
        </div>
        <div class="row py-3">
          <div
            class="col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-5"
          >
            <h3
              class="feature__heading"
              v-html="features[activeIndex].heading"
            ></h3>
            <p class="feature__description mt-3">
              {{ features[activeIndex].content }}
            </p>
          </div>
          <div
            class="col-lg-5 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <nuxt-img
              :src="`${features[activeIndex].imgName}.svg`"
              :alt="features[activeIndex].alt"
              class="img-fluid feature__img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['features', 'sectionHeading'])
const features = ref(props.features)

const activeIndex = ref()
activeIndex.value = 0

const setActive = (index) => {
  activeIndex.value = index 
}

const computedFeatures = computed(() => {
  const cf = []
  const featuresCopy = [...features.value]
  while (featuresCopy.length) {
    cf.push(featuresCopy.splice(0, 5))
  }
  return cf
})

</script>
<style scoped>
.toggler__container {
  padding: 8px 12px;
  gap: 16px;
  border-radius: 32px;
  background: #f9f0ff;
  max-width: 1052px;
  width: fit-content;
  block-size: fit-content;
}

.toggler__container.mobile {
  display: none !important;
}

.toggler__button {
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 12px;
  border-radius: 32px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.toggler__button.active {
  background: white;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.05) inset;
}

.feature__heading {
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
}

@media screen and (max-width: 992px) {
  .toggler__container {
    padding: 12px;
    overflow-x: auto;
    white-space: nowrap;
    display: none !important;
    width: auto;
    block-size: auto;
  }

  .toggler__container.mobile {
    display: block !important;
  }

  .toggler__button {
    font-size: 12px;
  }
}
</style>
