<template>
  <div class="template fm-card">
    <NuxtLink class="template__link" :to="`/templates/${template.slug}/`">
      <div class="template-image-wrapper">
        <div v-if="loading" class="image-skeleton"></div>
        <img
          class="img-fluid pointer template-preview__img"
          :class="{ 'img-invisible': loading }"
          :src="previewImageUrl"
          :alt="template.name"
          width="1200"
          height="738"
          loading="lazy"
          @load="loading = false"
          @error="loading = false"
        />
      </div>
      <div class="template-content">
        <div v-if="categoryName" class="template-meta">
          <span class="template-meta__cat">{{ categoryName }}</span>
        </div>
        <h3 class="template-name pointer">
          {{ template?.name }}
        </h3>
        <p class="template-description">
          {{ template?.description }}
        </p>
      </div>
    </NuxtLink>
    <div class="template-footer">
      <button type="button" class="template-footer__preview" @click="onPreview">
        <LucideIcon name="eye" :size="15" /> Preview
      </button>
      <button type="button" class="template-footer__use" @click="onUse">
        Use template <LucideIcon name="arrow-right" :size="14" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    template: {
      type: Object,
      required: true,
    },
    categoryLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    const img = this.$el.querySelector('img')
    if (img && img.complete) {
      this.loading = false
    }
  },
  computed: {
    previewImageUrl() {
      return this.template.previewImageUrl || '/templates/create_form.png'
    },
    categoryName() {
      return this.categoryLabel || this.template.category?.name || this.template.categories?.[0]?.name || ''
    },
  },
  methods: {
    // Preview the live form, same as the template detail page's preview.
    onPreview() {
      if (this.template.surveyUrl) {
        window.open(this.template.surveyUrl, '_blank')
      } else {
        navigateTo(`/templates/${this.template.slug}/`)
      }
    },
    // Use the template — same redirect the detail page's CTA uses.
    onUse() {
      window.open(`https://app.formester.com/templates?template_id=${this.template.id}`, '_blank')
    },
  },
}
</script>

<style scoped>
.template {
  display: flex;
  flex-direction: column;
  transition: box-shadow 140ms ease, border-color 140ms ease, transform 140ms ease;
  border-radius: 14px;
  border: 1px solid var(--Stroke, #eaecf0);
  background: var(--Base-White, #fff);
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  overflow: hidden;
}

.template:hover {
  box-shadow: 0 8px 24px -6px rgba(16, 24, 40, 0.12), 0 2px 6px -2px rgba(16, 24, 40, 0.06);
  transform: translateY(-2px);
}

.template:hover .template-preview__img {
  transform: scale(1.04);
}

.template__link {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: inherit;
  text-decoration: none;
}

.template-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1;
}

.template-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #697586;
}

.template-meta__cat {
  font-weight: 600;
  color: #475467;
  text-transform: capitalize;
}

.template-name {
  user-select: none;
  margin: 0;
  color: #101828;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}

.template-description {
  margin: 0;
  color: #475467;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.template-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #f2f4f7;
}

.template-footer__preview,
.template-footer__use {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  padding: 4px 2px;
  font-family: inherit;
  cursor: pointer;
}

.template-footer__preview {
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #475467;
}

.template-footer__preview:hover {
  color: #101828;
}

.template-footer__use {
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  color: #6941c6;
}

.template-footer__use:hover,
.template:hover .template-footer__use {
  color: #53389e;
}

.template-image-wrapper {
  position: relative;
}

.image-skeleton {
  position: absolute;
  inset: 0;
  animation: skeleton-loading 1s linear infinite alternate;
  z-index: 1;
}

.template-preview__img {
  display: block;
  transition: opacity 0.3s ease, transform 0.4s ease;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1200/738;
  object-fit: cover;
  object-position: top;
}

.template-preview__img.img-invisible {
  opacity: 0;
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
