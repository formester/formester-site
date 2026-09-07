<template>
  <div class="tools">
    <section class="tools__hero page-component-item">
      <SectionHeader
        tag="h1"
        size="xl"
        eyebrow="Free tools"
        :title="[{ text: 'Free tools from Formester' }]"
        description="Small, fast utilities that run in your browser. No account, no watermark."
        spacing="none"
      />
    </section>
    <section class="tools__grid page-component-item">
      <NuxtLink v-for="t in tools" :key="t.href" :to="t.href" class="tools__card">
        <span class="tools__icon"><component :is="t.icon" :size="20" /></span>
        <h2>{{ t.title }}</h2>
        <p>{{ t.body }}</p>
        <span class="tools__cta">Open tool <ArrowRight :size="16" /></span>
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { FileText, ArrowRight } from '@lucide/vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'

const tools = [
  {
    href: '/tools/fillable-pdf-creator/',
    title: 'Fillable PDF creator',
    body: 'Add text fields, checkboxes, dropdowns and signature boxes to any PDF, or build a form from a blank page.',
    icon: FileText,
  },
]

const pageUrl = 'https://formester.com/tools/'
const title = 'Free Tools | Formester'
const description = 'Free browser-based tools from Formester: create fillable PDFs and more. No account, no watermark.'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: pageUrl },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
  ],
  link: [{ hid: 'canonical', rel: 'canonical', href: pageUrl }],
})
</script>

<style scoped>
.tools__hero {
  padding: var(--space-20) var(--space-6) var(--space-10);
}
.tools__grid {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 var(--space-6) var(--space-20);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}
.tools__card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: var(--space-6);
  background: var(--bg-primary);
  border: 1px solid var(--gray-200);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: inherit;
  transition:
    box-shadow 160ms ease,
    border-color 160ms ease;
}
.tools__card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-violet);
}
.tools__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--bg-violet-50);
  color: var(--violet-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.tools__card h2 {
  margin: 0;
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.tools__card p {
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--fg-2);
}
.tools__cta {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--violet-600);
}
@media (max-width: 900px) {
  .tools__grid {
    grid-template-columns: 1fr;
  }
}
</style>
