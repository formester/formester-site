<template>
  <section class="tmpl-detail__hero">
    <div class="tmpl-detail__hero-inner">

      <TemplatePreviewPanel
        :pdf-data="pdfData"
        :survey-url="template.surveyUrl"
      />

      <div class="tmpl-detail__info-col">
        <nav class="tmpl-detail__breadcrumb" aria-label="breadcrumb">
          <NuxtLink to="/templates/" class="tmpl-detail__bc-link">Form Templates</NuxtLink>
          <span class="tmpl-detail__bc-sep" aria-hidden="true">›</span>
          <NuxtLink
            v-if="template.category?.slug"
            :to="`/templates/categories/${template.category.slug}/`"
            class="tmpl-detail__bc-link"
          >{{ template.category.name }}</NuxtLink>
          <span v-else class="tmpl-detail__bc-text">Templates</span>
        </nav>

        <h1 class="tmpl-detail__title">{{ template.name }}</h1>

        <p v-if="template.description" class="tmpl-detail__desc">{{ template.description }}</p>

        <FButton size="lg" class="tmpl-detail__cta" @click="redirectTo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          Use Template
        </FButton>
      </div>

    </div>
  </section>
</template>

<script setup>
import FButton from '@/components/UI/FButton.vue'
import TemplatePreviewPanel from './TemplatePreviewPanel.vue'

const props = defineProps({
  template: { type: Object, required: true },
  pdfData:  { type: Object, default: null },
})

const redirectTo = () => {
  window.open(
    `https://app.formester.com/templates?template_id=${props.template.id}`,
    '_blank',
  )
}
</script>

<style scoped>
.tmpl-detail__hero {
  padding-top: var(--hero-top-pad);
  padding-bottom: var(--space-8);
  background: var(--bg-primary);
}

.tmpl-detail__hero-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: var(--space-6);
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: var(--space-8);
  align-items: start;
}

/* ---- Info column ---- */
.tmpl-detail__info-col {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.tmpl-detail__breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.tmpl-detail__bc-link {
  color: var(--violet-500);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  text-decoration: none;
}

.tmpl-detail__bc-link:hover {
  text-decoration: underline;
}

.tmpl-detail__bc-sep {
  color: var(--fg-muted);
  font-size: var(--fs-sm);
}

.tmpl-detail__bc-text {
  color: var(--fg-2);
  font-size: var(--fs-sm);
}

.tmpl-detail__title {
  font-size: clamp(22px, 2.5vw, 32px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.25;
  letter-spacing: -0.3px;
  margin: 0;
}

.tmpl-detail__desc {
  font-size: var(--fs-sm);
  color: var(--fg-2);
  line-height: var(--lh-lg);
  margin: 0;
}

.tmpl-detail__cta {
  width: 100%;
  justify-content: center;
}

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .tmpl-detail__hero-inner {
    grid-template-columns: 1fr;
  }

  .tmpl-detail__info-col {
    position: static;
    order: -1;
  }
}

@media (max-width: 640px) {
  .tmpl-detail__hero {
    padding-top: 5rem;
  }

  .tmpl-detail__cta {
    padding: var(--space-4);
  }
}
</style>
