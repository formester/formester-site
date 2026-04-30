<template>
  <div class="usecase-card">
    <div class="image-wrapper" v-if="img.src">
      <img
        :src="img.src"
        :alt="img.alt || title"
        :width="img.width || 400"
        :height="img.height || 160"
        class="img-fluid"
      />
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getStrapiImage } from '@/utils/strapiImage'

export default {
  name: 'UsecaseCard',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String, Object], default: null }
  },
  computed: {
    img() {
      if (typeof this.image === 'string') {
        return { src: this.image, alt: this.title, width: null, height: null }
      }
      // Prefer the medium format if available — it's what was being used before.
      const media = this.image?.data?.attributes || this.image
      if (media?.formats?.medium) {
        const m = media.formats.medium
        return { src: m.url, alt: media.alternativeText || this.title, width: m.width, height: m.height }
      }
      return getStrapiImage(this.image, { alt: this.title })
    }
  }
}
</script>

<style scoped>
.usecase-card {
  border-radius: 24px;
  box-shadow: 0 2px 16px 0 rgba(16, 24, 40, 0.06);
  overflow: hidden;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: box-shadow 0.2s;
}

.usecase-card:hover {
  box-shadow: 0 8px 32px 0 rgba(16, 24, 40, 0.12);
}
.image-wrapper {
  width: 100%;
  height: 160px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 24px 24px 0 0;
}
.content {
  padding: 24px 16px 16px 16px;
  background-color: #fff;
  width: 100%;
  text-align: left;
}
.title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #101828;
}
.description {
  font-size: 1rem;
  color: #475467;
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .img-fluid {
    height: 100%;
  }
  .image-wrapper {
    height: 240px;
  }
}
</style>
