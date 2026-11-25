<template>
  <div class="preview" :class="`preview--${active}`">
    <!-- A browser tab strip: each preview is a tab, and the open one joins the content below it. -->
    <div class="preview__strip">
      <span class="preview__dots" aria-hidden="true">
        <span class="preview__dot"></span>
        <span class="preview__dot"></span>
        <span class="preview__dot"></span>
      </span>
      <div class="preview__tabs" role="tablist" aria-label="Preview">
        <button
          v-for="tab in tabs"
          :id="`preview-tab-${tab.id}`"
          :key="tab.id"
          type="button"
          role="tab"
          class="preview__tab"
          :class="{ 'preview__tab--active': active === tab.id }"
          :aria-selected="active === tab.id"
          :aria-controls="`preview-panel-${tab.id}`"
          @click="active = tab.id"
        >
          <LucideIcon :name="tab.icon" :size="14" />
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div
      v-show="active === 'workflow'"
      id="preview-panel-workflow"
      role="tabpanel"
      aria-labelledby="preview-tab-workflow"
    >
      <WorkflowDiagram :graph="graph" :form-name="form?.name" />
    </div>
    <div v-if="form" v-show="active === 'form'" id="preview-panel-form" role="tabpanel" aria-labelledby="preview-tab-form">
      <TemplatePreviewIframe :survey-url="form.surveyUrl" active-device="desktop" />
    </div>

    <TemplatePreviewModal v-if="form" :is-open="modal === 'form'" :survey-url="form.surveyUrl" @close="closeModal" />
    <TemplatePreviewModal
      :is-open="modal === 'workflow'"
      label="Workflow preview"
      banner-text="A read-only view of the workflow; use the template to edit it."
      @close="closeModal"
    >
      <WorkflowDiagram :graph="graph" :form-name="form?.name" fill />
    </TemplatePreviewModal>
  </div>
</template>

<script setup>
import TemplatePreviewIframe from '@/components/v2/template/TemplatePreviewIframe.vue'
import TemplatePreviewModal from '@/components/v2/template/TemplatePreviewModal.vue'
import WorkflowDiagram from '@/components/workflow-template/WorkflowDiagram.vue'

const props = defineProps({
  // The template's `graph`, e.g. {nodes: [...], edges: [...]}
  graph: { type: Object, required: true },
  // The form it comes with, e.g. {name: "Expense claim form", surveyUrl: "https://app.formester.com/f/abc"}; null when none.
  form: { type: Object, default: null },
})

const WORKFLOW_TAB = { id: 'workflow', label: 'Workflow', icon: 'workflow' }
const FORM_TAB = { id: 'form', label: 'Form', icon: 'file-text' }

const tabs = computed(() => (props.form ? [WORKFLOW_TAB, FORM_TAB] : [WORKFLOW_TAB]))
// The open tab, "workflow" or "form"; the page names its preview button after it.
const active = defineModel('tab', { type: String, default: 'workflow' })
// Which preview is open full screen: "workflow", "form", or null.
const modal = ref(null)

/** Opens the open tab's preview full screen. */
function openPreview() {
  modal.value = active.value
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modal.value = null
  document.body.style.overflow = ''
}

// Escape closes the pop-up, as on form template pages.
function onKeydown(event) {
  if (event.key === 'Escape' && modal.value) closeModal()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

defineExpose({ openPreview })
</script>

<style scoped>
.preview {
  /* The open tab takes the colour of what it shows: the diagram's grey canvas or the white form. */
  --tab-surface: var(--bg-grey-50);
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  background: var(--bg-grey-50);
  box-shadow: var(--shadow-lg);
}

.preview--form {
  --tab-surface: var(--bg-primary);
}

.preview__strip {
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  height: 44px;
  padding: 0 var(--space-3) 0 var(--space-4);
  border-bottom: 1px solid var(--border-light);
  background: var(--gray-100);
}

.preview__dots {
  display: flex;
  align-self: center;
  gap: 6px;
}

.preview__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--r-full);
  background: var(--gray-300);
}

.preview__tabs {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 100%;
}

.preview__tab {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  height: 32px;
  margin-bottom: var(--space-1);
  padding: 0 var(--space-4);
  border: 0;
  border-radius: var(--r-lg);
  background: transparent;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-2);
  cursor: pointer;
}

.preview__tab:hover {
  color: var(--fg-1);
}

/* Sits 1px over the strip's bottom border, in the content's colour, so the tab and the content read as one. */
.preview__tab--active {
  position: relative;
  top: 1px;
  height: 36px;
  margin-bottom: 0;
  border: 1px solid var(--border-light);
  border-bottom-color: var(--tab-surface);
  border-radius: var(--r-lg) var(--r-lg) 0 0;
  background: var(--tab-surface);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}

.preview__tab--active :deep(svg) {
  color: var(--color-primary);
}
</style>
