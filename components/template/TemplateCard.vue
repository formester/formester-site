<template>
  <div class="template">
    <NuxtLink :to="{ name: 'templates-slug', params: { slug: template.slug } }">
      <div v-if="loading" class="image-skeleton"></div>
      <img
        v-if="template.previewImageUrl"
        class="img-fluid pointer template-preview__img"
        :class="{ hidden: loading }"
        :src="template.previewImageUrl"
        :alt="template.name"
        @load="loading = false"
      />
      <img
        v-else
        class="img-fluid pointer template-preview__img"
        :class="{ hidden: loading }"
        src="@/assets/images/templates/create_form.png"
        alt="Template placeholder image"
        @load="loading = false"
      />
      <h2 class="template-name pointer">
        {{ template.name }}
      </h2>
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
}
</script>

<style scoped>
.template {
  background-color: white;
  border-radius: 4px;
  padding: 12px;
  transition: all 500ms ease;
  box-shadow: 0px 0px 10px 0px rgba(79, 56, 149, 0.15);
  min-height: 130px;
}

.template:hover {
  box-shadow: 0px 0px 15px 3px rgba(79, 56, 149, 0.25);
}

.template-name {
  font-weight: 500;
  font-size: 16px;
  margin-top: 14px;
  line-height: 24px;
  color: #211447;
  user-select: none;
}

.image-skeleton {
  width: 100%;
  min-height: 150px;
  animation: skeleton-loading 1s linear infinite alternate;
}

.template-preview__img {
    display: block;
}
.template-preview__img.hidden {
  display: none;
}

@media (max-width: 991px) {
  .template-name {
    font-size: 14px;
  }
}

@media only screen and (max-width: 840px) {
  .template-name {
    font-size: 12px;
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
