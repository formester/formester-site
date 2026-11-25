<template>
  <div class="preview">
    <!-- A browser tab strip: each preview is a tab, and the open one joins the content below it. -->
    <div class="preview__strip">
      <span class="preview__dots" aria-hidden="true">
        <span class="preview__dot"></span>
        <span class="preview__dot"></span>
        <span class="preview__dot"></span>
      </span>
      <WorkflowPreviewTabs
        v-model="active"
        :tabs="tabs"
        id-prefix="preview"
        :style="{ '--tab-surface': tabSurface }"
      />
      <TemplatePreviewDeviceSwitcher v-if="active === 'form'" v-model="device" class="preview__devices" />
    </div>

    <div
      v-show="active === 'workflow'"
      id="preview-panel-workflow"
      role="tabpanel"
      aria-labelledby="preview-tab-workflow"
    >
      <WorkflowDiagram :graph="graph" :form-name="form?.name" />
    </div>
    <div
      v-if="form"
      v-show="active === 'form'"
      id="preview-panel-form"
      role="tabpanel"
      aria-labelledby="preview-tab-form"
      class="preview__form"
    >
      <!-- Tablet and phone narrow the form on the grey canvas; the frame keeps its size. -->
      <div class="preview__form-column" :class="`preview__form-column--${device}`">
        <TemplatePreviewIframe :survey-url="form.surveyUrl" :active-device="device" />
      </div>
    </div>

    <TemplatePreviewModal
      :is-open="isModalOpen"
      label="Template preview"
      :banner-text="BANNER_TEXTS[active]"
      @close="closeModal"
    >
      <template #tabs>
        <WorkflowPreviewTabs
          v-model="active"
          :tabs="tabs"
          id-prefix="modal-preview"
          :style="{ '--tab-surface': TAB_SURFACES[active] }"
        />
      </template>

      <div
        v-show="active === 'workflow'"
        id="modal-preview-panel-workflow"
        role="tabpanel"
        aria-labelledby="modal-preview-tab-workflow"
        class="preview-modal__panel"
      >
        <WorkflowDiagram :graph="graph" :form-name="form?.name" fill />
      </div>
      <div
        v-if="form"
        v-show="active === 'form'"
        id="modal-preview-panel-form"
        role="tabpanel"
        aria-labelledby="modal-preview-tab-form"
        class="preview-modal__panel"
      >
        <iframe :src="form.surveyUrl" class="preview-modal__iframe" loading="lazy" title="Full form preview" />
      </div>
    </TemplatePreviewModal>
  </div>
</template>

<script setup>
import TemplatePreviewDeviceSwitcher from '@/components/v2/template/TemplatePreviewDeviceSwitcher.vue'
import TemplatePreviewIframe from '@/components/v2/template/TemplatePreviewIframe.vue'
import TemplatePreviewModal from '@/components/v2/template/TemplatePreviewModal.vue'
import WorkflowDiagram from '@/components/workflow-template/WorkflowDiagram.vue'
import WorkflowPreviewTabs from '@/components/workflow-template/WorkflowPreviewTabs.vue'

const props = defineProps({
  // The template's `graph`, e.g. {nodes: [...], edges: [...]}
  graph: { type: Object, required: true },
  // The form it comes with, e.g. {name: "Expense claim form", surveyUrl: "https://app.formester.com/f/abc"}; null when none.
  form: { type: Object, default: null },
})

const WORKFLOW_TAB = { id: 'workflow', label: 'Workflow', icon: 'workflow' }
const FORM_TAB = { id: 'form', label: 'Form', icon: 'file-text' }
// The open tab takes the colour of what it shows: the diagram's grey canvas or the white form.
const TAB_SURFACES = { workflow: 'var(--bg-grey-50)', form: 'var(--bg-primary)' }
const BANNER_TEXTS = {
  workflow: 'A read-only view of the workflow; use the template to edit it.',
  form: "This is a read-only preview — responses won't be saved",
}

// The size the form is previewed at on the page, "desktop", "tablet" or "mobile"
const device = ref('desktop')
const tabSurface = computed(() => {
  // A narrowed form sits on the grey canvas, so its tab stays grey too.
  if (active.value === 'form' && device.value !== 'desktop') {
    return TAB_SURFACES.workflow
  }
  return TAB_SURFACES[active.value]
})

const tabs = computed(() => (props.form ? [WORKFLOW_TAB, FORM_TAB] : [WORKFLOW_TAB]))
// The open tab, "workflow" or "form"; the page names its preview button after it.
const active = defineModel('tab', { type: String, default: 'workflow' })
// The pop-up shares the open tab with the page, so it opens on the tab being looked at.
const isModalOpen = ref(false)

/** Opens the preview full screen, on the open tab. */
function openPreview() {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

// Escape closes the pop-up, as on form template pages.
function onKeydown(event) {
  if (event.key === 'Escape' && isModalOpen.value) closeModal()
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
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  background: var(--bg-grey-50);
  box-shadow: var(--shadow-lg);
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

.preview__devices {
  align-self: center;
  margin-left: auto;
  background: var(--bg-primary);
}

/* On the white pill, the picked size is marked in violet rather than white. */
.preview__devices :deep(.device-btn.active) {
  background: var(--violet-50);
  box-shadow: none;
}

/* Device sizes mean little on a small screen, as on form template pages. */
@media (max-width: 1024px) {
  .preview__devices {
    display: none;
  }
}

.preview__form {
  display: flex;
  justify-content: center;
}

.preview__form-column {
  width: 100%;
  background: var(--bg-primary);
}

.preview__form-column--tablet,
.preview__form-column--mobile {
  border-inline: 1px solid var(--border-light);
  box-shadow: var(--shadow-lg);
}

.preview__form-column--tablet {
  width: 520px;
  max-width: 100%;
}

.preview__form-column--mobile {
  width: 320px;
  max-width: 100%;
}

.preview-modal__panel {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.preview-modal__iframe {
  flex: 1;
  width: 100%;
  min-height: 0;
  border: 0;
  display: block;
}
</style>
