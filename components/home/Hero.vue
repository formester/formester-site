<template>
  <section class="hero">
    <div class="container horizontal__padding">
      <div
        class="d-flex flex-column align-items-center justify-content-center text-center my-5"
      >
        <h1 class="hero__heading">
          <span
            v-for="item in data.title"
            :key="item.id"
            :class="{ hglight: item.highlight }"
          >
            {{ item.text }}
          </span>
        </h1>
        <p class="hero__subheading mt-3">
          {{ data.description }}
        </p>
        <a
          v-if="data && data?.button?.length > 0"
          :href="data.button[0].link"
          class="btn button hero__button mt-4 mb-4 mb-md-5"
          :class="{
            'hero__button': data.button[0].type === 'Primary',
            'hero__invert__button': data.button[0].type === 'Secondary',
          }"
        >
          {{ data.button[0].text }}
        </a>
        <!-- <div class="hint">
          <div>✓ &nbsp; No credit card required</div>
          <div>✓ &nbsp; Unlimited forms</div>
        </div> -->
        <video
          loop
          muted
          autoplay
          playsinline
          style="max-width: 98%; border-radius: 12px"
          class="mt-3"
        >
          <source :src="data.video" type="video/webm" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['data'])
</script>

<style scoped>
video {
  padding-right: -10rem;
}

.hero {
  margin-top: 100px;
  margin-bottom: 64px;
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
  font-weight: 700;
  line-height: 125%;
}

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

@media (max-width: 500px) {
  .hero {
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>
