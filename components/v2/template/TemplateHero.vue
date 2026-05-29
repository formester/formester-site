<template>
  <section class="tmpl-detail__hero">
    <div class="tmpl-detail__hero-inner">

      <TemplatePreviewPanel
        ref="previewPanelRef"
        :pdf-data="pdfData"
        :survey-url="template.surveyUrl"
      />

      <div class="tmpl-detail__info-col">

        <!-- Breadcrumb -->
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

        <!-- Title -->
        <h1 class="tmpl-detail__title">{{ template.name }}</h1>

        <!-- Description + Read more -->
        <div v-if="template.description" class="tmpl-detail__desc-wrap">
          <p
            class="tmpl-detail__desc"
            :class="{ 'tmpl-detail__desc--clamped': !descExpanded }"
          >{{ template.description }}</p>
          <button
            v-if="isDescLong"
            class="tmpl-detail__desc-toggle"
            :class="{ expanded: descExpanded }"
            @click="descExpanded = !descExpanded"
          >
            {{ descExpanded ? 'Read less' : 'Read more' }}
            <IconChevronDown />
          </button>
        </div>

        <!-- Metadata chips -->
        <div v-if="hasAnyMeta" class="tmpl-detail__meta">
          <span v-if="template.category?.name" class="tmpl-detail__chip tmpl-detail__chip--violet">
            <IconDocument />
            {{ template.category.name }}
          </span>
          <span v-if="template.fieldCount" class="tmpl-detail__chip">
            <IconListLines />
            {{ template.fieldCount }} {{ template.fieldCount === 1 ? 'Field' : 'Fields' }}
          </span>
          <span v-if="template.sectionCount" class="tmpl-detail__chip">
            <IconLayout />
            {{ template.sectionCount }} {{ template.sectionCount === 1 ? 'Section' : 'Sections' }}
          </span>
          <span v-if="template.estimatedSeconds" class="tmpl-detail__chip">
            <IconClock />
            {{ formattedTime }}
          </span>
        </div>

        <!-- CTA group -->
        <div class="tmpl-detail__cta-group">
          <FButton size="lg" class="tmpl-detail__cta-full" @click="redirectTo">
            <IconCopy :size="17" />
            Use Template
          </FButton>
          <FButton size="lg" variant="violet-text" class="tmpl-detail__cta-full" @click="openPreviewModal">
            <IconEye :size="15" />
            Preview full form
          </FButton>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import FButton              from '@/components/UI/FButton.vue'
import TemplatePreviewPanel from './TemplatePreviewPanel.vue'
import IconDocument     from '@/components/icons/Document.vue'
import IconListLines    from '@/components/icons/ListLines.vue'
import IconLayout       from '@/components/icons/Layout.vue'
import IconClock        from '@/components/icons/Clock.vue'
import IconChevronDown  from '@/components/icons/ChevronDown.vue'
import IconCopy         from '@/components/icons/Copy.vue'
import IconEye          from '@/components/icons/Eye.vue'

const props = defineProps({
  template: { type: Object, required: true },
  pdfData:  { type: Object, default: null },
})

const CHAR_LIMIT = 400
const descExpanded = ref(false)
const isDescLong = computed(() => (props.template.description?.length ?? 0) > CHAR_LIMIT)

const previewPanelRef = useTemplateRef('previewPanelRef')

const hasAnyMeta = computed(() =>
  !!(props.template.category?.name || props.template.fieldCount || props.template.sectionCount || props.template.estimatedSeconds)
)

const formattedTime = computed(() => {
  const secs = props.template.estimatedSeconds
  if (!secs) return ''
  if (secs < 60) return `~${secs}s`
  const mins = Math.round(secs / 60)
  return `~${mins} min`
})

function redirectTo() {
  window.open(
    `https://app.formester.com/templates?template_id=${props.template.id}`,
    '_blank',
  )
}

function openPreviewModal() {
  previewPanelRef.value?.openModal()
}
</script>

<style scoped>
.tmpl-detail__hero {
  padding-bottom: var(--space-8);
  background: var(--bg-primary);
}

.tmpl-detail__hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 40px 0;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 52px;
  align-items: start;
}

/* ── Info column ── */
.tmpl-detail__info-col {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: 2px;
}

/* Breadcrumb */
.tmpl-detail__breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
}

.tmpl-detail__bc-link {
  color: var(--violet-500);
  text-decoration: none;
  font-size: var(--fs-sm);
}

.tmpl-detail__bc-link:hover {
  text-decoration: underline;
}

.tmpl-detail__bc-sep {
  color: var(--fg-muted);
}

.tmpl-detail__bc-text {
  color: var(--fg-2);
}

/* Title */
.tmpl-detail__title {
  font-size: 28px;
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.2;
  letter-spacing: -0.025em;
  margin: 0;
}

/* Description */
.tmpl-detail__desc-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.tmpl-detail__desc {
  font-size: var(--fs-sm);
  color: var(--fg-2);
  line-height: var(--lh-md);
  margin: 0;
}

.tmpl-detail__desc--clamped {
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tmpl-detail__desc-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: 6px;
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: var(--font-primary);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--violet-600);
  cursor: pointer;
  transition: color 120ms;
}

.tmpl-detail__desc-toggle:hover {
  color: var(--violet-700);
}

.tmpl-detail__desc-toggle :deep(svg) {
  transition: transform 200ms;
}

.tmpl-detail__desc-toggle.expanded :deep(svg) {
  transform: rotate(180deg);
}

/* Metadata chips */
.tmpl-detail__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tmpl-detail__chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid var(--border-light);
  background: var(--bg-grey-50);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-strong);
}

.tmpl-detail__chip--violet {
  background: var(--violet-50);
  color: var(--violet-700);
  border-color: var(--violet-100);
}

/* Social proof */
.tmpl-detail__social-proof {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-light);
}

.tmpl-detail__avatars {
  display: flex;
}

.tmpl-detail__avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -6px;
  font-size: var(--fs-tiny);
  font-weight: var(--fw-bold);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tmpl-detail__avatars .tmpl-detail__avatar:first-child {
  margin-left: 0;
}

.tmpl-detail__social-text {
  font-size: var(--fs-xs);
  color: var(--fg-3);
}

/* CTA group */
.tmpl-detail__cta-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tmpl-detail__cta-full {
  width: 100%;
  justify-content: center;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .tmpl-detail__hero-inner {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 20px 0;
  }

  .tmpl-detail__info-col {
    top: 60px;
    position: relative;
    order: -1;
  }
}

</style>
