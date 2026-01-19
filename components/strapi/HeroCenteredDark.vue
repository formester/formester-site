<template>
  <section
    class="hero"
    :style="{
      backgroundImage: background.image?.url
        ? `url(${background.image.url})`
        : '',
    }"
  >
    <div class="container horizontal__padding">
      <div
        class="d-flex flex-column align-items-center justify-content-center text-center my-5"
      >
        <h1 class="hero__heading">
          <span
            v-for="item in title"
            :key="item.id"
            :class="{ highlight__text: item.highlight }"
          >
            {{ item.text }}
          </span>
        </h1>
        <p class="hero__subheading mt-4">
          {{ description }}
        </p>
        <a
          v-if="button"
          :href="button.link"
          class="btn button hero__button mt-4 mb-2"
          :class="{
            hero__button: button.type === 'Secondary',
            hero__invert__button: button.type === 'Primary',
          }"
        >
          {{ button.text }}
        </a>
        <div
          class="d-flex flex-column flex-md-row align-items-center justify-content-center mt-4"
        >
          <div
            v-for="item in clickTriggers"
            :key="item"
            class="d-flex align-items-center justify-content-center mx-4"
          >
            <nuxt-img src="/icons/check-icon.svg" alt="tick" />
            <span class="click-triggers ms-2">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: () => '',
    },
    button: {
      type: Object,
      default: () => {},
    },
    clickTriggers: {
      type: Array,
      default: () => [],
    },
    background: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.hero {
  padding-top: 8em;
  padding-bottom: 6em;
  background: var(--clr-primary);
  color: white;
}

.hero__image {
  padding-left: 30px;
}

.hint {
  font-size: 12px;
  opacity: 0.7;
  margin-left: 8px;
  margin-top: 10px;
}

.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 600;
  line-height: 72px;
  letter-spacing: -0.02em;
}
.hero__heading span {
  display: block;
}
.highlight__text {
  color: #f9af21;
}

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
  max-width: 640px;
}

.click-triggers {
  color: #ebebeb;
}

@media (max-width: 992px) {
  .hero {
    padding-top: 4em;
    padding-bottom: 2em;
  }
}

@media (max-width: 768px) {
  .hero__heading {
    line-height: 52px;
  }
}
</style>
