<template>
  <!-- Tabs defined: render all panels in DOM (v-show for SEO) -->
  <div v-if="template.tabs?.length" class="tmpl-detail__content-area">

    <!-- Overview tab -->
    <div v-show="activeTabId === 'overview'">
      <template v-if="hasHtmlBlockForTab('overview')">
        <StrapiRawHtml
          v-for="(block, i) in getBlocksForTab('overview')"
          :key="i"
          :markup="block.content"
        />
      </template>
      <TemplateOverviewPanel v-else :template="template" />
    </div>

    <!-- FAQ tab -->
    <div v-show="activeTabId === 'faq'">
      <template v-if="hasHtmlBlockForTab('faq')">
        <StrapiRawHtml
          v-for="(block, i) in getBlocksForTab('faq')"
          :key="i"
          :markup="block.content"
        />
      </template>
      <V2FaqSection
        v-else-if="template.faqs?.length"
        :faqList="template.faqs"
        badge=""
      />
      <div v-else class="tmpl-detail__faq-empty">
<p class="tmpl-detail__faq-empty-text">Have questions about this template?</p>
        <FButton href="/contact-us" variant="primary" size="md">Ask a Question</FButton>
      </div>
    </div>

    <!-- Custom UUID tabs -->
    <div
      v-for="tab in customTabs"
      :key="tab.id"
      v-show="activeTabId === tab.id"
    >
      <StrapiRawHtml
        v-for="(block, i) in getBlocksForTab(tab.id)"
        :key="i"
        :markup="block.content"
      />
    </div>
  </div>

  <!-- Legacy fallback: no tabs defined -->
  <template v-else>
    <section
      v-if="template.aboutTemplate && template.aboutTemplate.replace(/(<([^>]+)>)/gi, '').trim()"
      class="tmpl-detail__legacy-about"
    >
      <div class="tmpl-detail__legacy-inner">
        <h2 class="tmpl-detail__content-h2">About this template</h2>
        <div class="tmpl-detail__about-html" v-html="template.aboutTemplate" />
      </div>
    </section>
    <V2FaqSection
      v-if="template.faqs?.length"
      :faqList="template.faqs"
      badge=""
    />
  </template>
</template>

<script setup>
import TemplateOverviewPanel from './TemplateOverviewPanel.vue'
import FButton from '@/components/UI/FButton.vue'

const V2FaqSection = defineAsyncComponent(() => import('@/components/v2/FaqSection.vue'))

const props = defineProps({
  template:    { type: Object, required: true },
  activeTabId: { type: String, default: null },
})

const getBlocksForTab = (tabId) =>
  props.template.rawHtmlBlocks?.filter(b => b.tabId && b.tabId === tabId) ?? []

const hasHtmlBlockForTab = (tabId) => getBlocksForTab(tabId).length > 0

const customTabs = computed(() =>
  props.template.tabs?.filter(t => t.id !== 'overview' && t.id !== 'faq') ?? []
)
</script>

<style scoped>
.tmpl-detail__content-area {
  min-height: 200px;
}

/* FAQ empty placeholder */
.tmpl-detail__faq-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  padding-block: var(--space-16);
  text-align: center;
}

.tmpl-detail__faq-empty-text {
  font-size: var(--fs-lg);
  color: var(--fg-2);
  margin: 0;
}


/* Legacy fallback */
.tmpl-detail__legacy-about {
  padding-block: var(--space-10);
}

.tmpl-detail__legacy-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: var(--space-6);
}

/* Shared styles for legacy fallback about section */
.tmpl-detail__content-h2 {
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.25;
  margin-bottom: var(--space-6);
}

.tmpl-detail__about-html :deep(h1),
.tmpl-detail__about-html :deep(h2),
.tmpl-detail__about-html :deep(h3),
.tmpl-detail__about-html :deep(h4) {
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin: var(--space-8) 0 var(--space-3);
  line-height: 1.3;
}

.tmpl-detail__about-html :deep(h1) { font-size: clamp(20px, 2vw, 28px); }
.tmpl-detail__about-html :deep(h2) { font-size: clamp(18px, 1.8vw, 24px); }
.tmpl-detail__about-html :deep(h3) { font-size: var(--fs-xl); }
.tmpl-detail__about-html :deep(h4) { font-size: var(--fs-lg); }

.tmpl-detail__about-html :deep(p) {
  margin: var(--space-4) 0;
  color: var(--fg-2);
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
}

.tmpl-detail__about-html :deep(ul),
.tmpl-detail__about-html :deep(ol) {
  margin: var(--space-4) 0;
  padding-left: var(--space-6);
  color: var(--fg-2);
}

.tmpl-detail__about-html :deep(li) {
  margin: var(--space-2) 0;
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
}

.tmpl-detail__about-html :deep(a) {
  color: var(--violet-500);
  text-decoration: underline;
}
</style>
