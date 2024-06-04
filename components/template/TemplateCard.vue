<template>
  <div class="template">
    <NuxtLink :to="{ name: 'templates-slug', params: { slug: template.slug } }">
      <div v-if="loading" class="image-skeleton"></div>
      <img
        class="img-fluid pointer template-preview__img"
        :class="{ hidden: loading }"
        :src="previewImageUrl"
        :alt="template.name"
        @load="loading = false"
      />
      <div class="template-content">
        <h3 class="template-name pointer">
          {{ template?.name }}
        </h3>
        <p class="template-description">
          {{ template?.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    template: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    previewImageUrl() {
      return (
        this.template.previewImageUrl ||
        require('@/assets/images/templates/create_form.png')
      )
    },
  },
}
</script>

<style scoped>
.template {
  transition: all 500ms ease;
  border-radius: 8px;
  border: 1px solid var(--Stroke, #eaecf0);
  background: var(--Base-White, #fff);
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  min-height: 130px;
  overflow: hidden;
}

.template:hover .template-preview__img {
  transform: scale(1.03);
}
.template-content {
  padding: 16px;
}
.template-name {
  user-select: none;
  color: var(--neutral-900, #171717);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.template-description {
  margin: 0;
  color: var(--neutral-600, #525252);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.image-skeleton {
  width: 100%;
  min-height: 11rem;
  animation: skeleton-loading 1s linear infinite alternate;
}

.template-preview__img {
  display: block;
  transition: all 0.4s ease;
  overflow: hidden;
}

.template-preview__img.hidden {
  display: none;
}

@media only screen and (max-width: 768px) {
  .template-name {
    font-size: 14px;
    line-height: 21px;
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 90%);
  }
  100% {
    background-color: hsl(200, 20%, 97%);
  }
}
</style>
