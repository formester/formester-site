<template>
  <div class="template fm-card">
    <NuxtLink class="template__link" :to="detailUrl">
      <slot name="preview">
        <div class="template-image-wrapper">
          <div v-if="loading" class="image-skeleton"></div>
          <img
            ref="image"
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
      </slot>
      <div class="template-content">
        <slot name="meta">
          <div v-if="categoryName" class="template-meta">
            <span class="template-meta__cat">{{ categoryName }}</span>
          </div>
        </slot>
        <h3 class="template-name pointer">
          {{ template?.name }}
        </h3>
        <p class="template-description">
          {{ template?.description }}
        </p>
      </div>
    </NuxtLink>
    <!-- Links of their own (category tags), so they sit outside the card's link. -->
    <div v-if="$slots.tags" class="template-tags">
      <slot name="tags" />
    </div>
    <div class="template-footer">
      <button type="button" class="template-footer__preview" @click="onPreview">
        <LucideIcon name="eye" :size="15" /> Preview
      </button>
      <a v-if="useUrl" :href="useUrl" class="template-footer__use">
        Use template <LucideIcon name="arrow-right" :size="14" />
      </a>
      <button v-else type="button" class="template-footer__use" @click="onUse">
        Use template <LucideIcon name="arrow-right" :size="14" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  template: { type: Object, required: true },
  categoryLabel: { type: String, default: '' },
  // The template's own page; defaults to the form template page.
  to: { type: String, default: '' },
  // Where Use template goes; empty opens the form template in the app.
  useUrl: { type: String, default: '' },
})

const emit = defineEmits(['preview'])

const loading = ref(true)
const image = useTemplateRef('image')

onMounted(() => {
  if (image.value?.complete) {
    loading.value = false
  }
})

const detailUrl = computed(() => props.to || `/templates/${props.template.slug}/`)
const previewImageUrl = computed(() => props.template.previewImageUrl || '/templates/create_form.png')
const categoryName = computed(
  () => props.categoryLabel || props.template.category?.name || props.template.categories?.[0]?.name || ''
)

// Checks if the template has a live form; if so, the parent grid opens it in the preview modal, else its page opens.
const onPreview = () => {
  if (props.template.surveyUrl) {
    emit('preview', props.template)
  } else {
    navigateTo(detailUrl.value)
  }
}

const onUse = () => {
  window.open(`https://app.formester.com/templates?template_id=${props.template.id}`, '_blank')
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

.template-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0 var(--space-4) var(--space-4);
  line-height: var(--lh-sm);
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
  text-decoration: none;
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
