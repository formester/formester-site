<template>
  <div v-show="showPreviewModal" class="preview-modal">
    <!-- Close Button -->
    <img
      class="close-modal pointer"
      src="@/assets/images/close-icon.svg"
      alt="close-button"
      @click="$emit('close-modal')"
    />

    <div class="preview-heading-container">
      <span class="preview-heading">
        {{ template.name }}
      </span>
      <button
        class="preview-use-template-btn"
        @click="$emit('redirect-to')"
      >
        Use Template
      </button>
    </div>

    <iframe
      :src="template.survey_url"
      frameborder="0"
      width="100%"
      class="template-preview__iframe"
    />
  </div>
</template>

<script>
export default {
  props: ['showPreviewModal', 'template'],
}
</script>

<style>
.preview-modal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 10;
}

.close-modal {
  position: absolute;
  top: 23px;
  right: 23px;
  width: 21px;
}

.preview-heading-container {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 1rem 2rem;
}

.preview-heading {
  font-weight: 600;
  font-size: 21px;
  line-height: 40px;
  color: #211447;
}

.preview-use-template-btn {
  cursor: pointer;
  padding: 10px 14px;
  background: #4f3895;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  transition: all 0.2s ease-out;
}

.preview-use-template-btn:hover {
  background: #4f3895eb;
}

.template-preview__iframe {
  min-height: 520px;
  height: 100%;
  overflow-y: auto;
}

@media only screen and (max-width: 778px) {
  .preview-heading {
    font-size: 18px;
  }
  .preview-use-template-btn {
    font-size: 13px;
  }
}

@media only screen and (max-width: 600px) {
  .preview-heading {
    display: none;
  }

  .preview-use-template-btn {
    font-size: 12px;
    padding: 8px 12px;
  }
}
</style>
