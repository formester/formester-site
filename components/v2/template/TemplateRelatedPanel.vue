<template>
  <div class="related-panel">
    <h2 class="related-panel__heading">Related Templates</h2>
    <div class="related-panel__grid">
      <NuxtLink
        v-for="tmpl in relatedTemplates"
        :key="tmpl.id"
        :to="`/templates/${tmpl.slug}/`"
        class="related-panel__card"
      >
        <div class="related-panel__img-wrap">
          <img
            class="related-panel__img"
            :src="tmpl.previewImageUrl || '/templates/create_form.png'"
            :alt="tmpl.name"
            width="1200"
            height="738"
            loading="lazy"
          />
        </div>
        <div class="related-panel__body">
          <h3 class="related-panel__name">{{ tmpl.name }}</h3>
          <p v-if="tmpl.description" class="related-panel__desc">{{ tmpl.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  relatedTemplates: { type: Array, default: () => [] },
})
</script>

<style scoped>
.related-panel {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-10) var(--space-6);
}

.related-panel__heading {
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.25;
  margin-bottom: var(--space-8);
}

.related-panel__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.related-panel__card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  background: var(--bg-primary);
  overflow: hidden;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.related-panel__card:hover {
  box-shadow: 0px 8px 16px -4px rgba(16, 24, 40, 0.15), 0px 4px 8px -4px rgba(16, 24, 40, 0.08);
  transform: translateY(-2px);
}

.related-panel__img-wrap {
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1200 / 738;
  background: var(--bg-secondary);
}

.related-panel__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.4s ease;
}

.related-panel__card:hover .related-panel__img {
  transform: scale(1.04);
}

.related-panel__body {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}

.related-panel__name {
  font-size: var(--fs-md);
  font-weight: var(--fw-medium);
  color: var(--fg-1);
  line-height: var(--lh-md);
}

.related-panel__desc {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  line-height: var(--lh-lg);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

@media (max-width: 1024px) {
  .related-panel__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .related-panel {
    padding: var(--space-8) var(--space-4);
  }

  .related-panel__grid {
    grid-template-columns: 1fr;
  }
}
</style>
