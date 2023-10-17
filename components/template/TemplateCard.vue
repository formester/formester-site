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
          {{ template.name }}
        </h3>
        <p class="template-description">
          {{ templateDescription }}
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
      templateDescription: '',
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
  async mounted() {
    try {
      const response = await this.$axios.get(
        `https://app.formester.com/templates/${this.template.slug}.json`
      )
      this.templateDescription = response.data.description
    } catch (error) {
      console.error('There was an error fetching the template:', error)
    }
  },
}
</script>

<style scoped>
.template {
  transition: all 500ms ease;
  border-radius: 8px;
  border: 1px solid var(--neutral-200, #e5e5e5);
  background: var(--neutral-100, #f5f5f5);
  min-height: 130px;
}

.template:hover {
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 12px 24px 0px rgba(0, 0, 0, 0.04);
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
  min-height: 295px;
  animation: skeleton-loading 1s linear infinite alternate;
}

.template-preview__img {
  display: block;
  border-radius: 8px 8px 0 0;
}
.template-preview__img.hidden {
  display: none;
}


@media only screen and (max-width: 768px) {
  .template-name{
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
