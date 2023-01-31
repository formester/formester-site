<template>
  <div>
    <div v-if="template" class="template-preview-container">
      <div class="preview-heading-wrapper">
        <NuxtLink :to="`/templates/`" class="d-flex align-items-center">
          <img
            class="template__back"
            src="@/assets/images/back-arrow.svg"
            alt="back-button"
          />
          <span class="preview-heading">
            {{ template.name }}
          </span>
        </NuxtLink>
        <button
          class="preview-use-template-btn"
          @click="redirectTo(template.id)"
        >
          Use Template
        </button>
      </div>

      <iframe
        :src="template.surveyUrl"
        frameborder="0"
        width="100%"
        class="template-preview"
      />
    </div>
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  layout: 'message',
  data() {
    return {
      template: {},
    }
  },
  mounted() {
    this.getTemplate()
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: `https://formester.com/templates/${this.$route.params.slug}/`,
        title: this.template?.name || 'Formester',
        description:
          this.template?.description || this.template?.name,
        mainImage: this.template?.previewImageUrl
          ? this.template.previewImageUrl
          : 'https://formester.com/formester-form-builder-background.png',
        mainImageAlt: 'Formester Template',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: this.template?.name + '| Formester' || 'Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/templates/${this.$route.params.slug}/`,
        },
      ],
    }
  },
  methods: {
    async getTemplate() {
      try {
        const { data } = await this.$axios.get(
          `https://app.formester.com/templates/${this.$route.params.slug}.json`
        )
        this.template = data
      } catch (error) {
        this.template = null
      }
    },
    redirectTo(id) {
      window.open(
        `https://app.formester.com/forms/new?template_id=${id}`,
        '_blank'
      )
    },
  },
}
</script>

<style scoped>
.template-preview-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.preview-heading-wrapper {
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
}
.template__back {
  width: 21px;
  margin-right: 10px;
}
.preview-heading {
  font-weight: 600;
  font-size: 21px;
  line-height: 40px;
  color: #211447;
  user-select: none;
}
.preview-use-template-btn {
  margin-left: auto;
  cursor: pointer;
  padding: 12px 16px;
  background: #4f3895;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.template-preview {
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
  .preview-heading-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .template__back {
    margin-right: 5px;
  }

  .preview-heading {
    font-size: 16px;
  }

  .preview-use-template-btn {
    font-size: 12px;
    margin-left: 0px;
    padding: 8px 12px;
    margin-top: 5px;
  }
}
</style>
