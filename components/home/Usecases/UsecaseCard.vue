<template>
  <div class="usecase-card">
    <div class="image-wrapper" v-if="computedImage">
      <img :src="computedImage" :alt="title" width="100%" height="160"/>
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsecaseCard',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String, Object], default: null }
  },
  computed: {
    computedImage() {
      if (!this.image) return null;
      if (typeof this.image === 'string') return this.image;
      if (this.image.formats) {
        if (this.image.formats.medium) return this.image.formats.medium.url;
        if (this.image.formats.small) return this.image.formats.small.url;
        if (this.image.formats.thumbnail) return this.image.formats.thumbnail.url;
      }
      return this.image.url;
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
</style>
