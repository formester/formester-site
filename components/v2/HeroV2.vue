<template>
  <section ref="sectionEl" class="hero-v2">
    <div class="hero-v2__grid" aria-hidden="true"></div>
    <div class="hero-v2__inner">
      <a v-if="badge?.text" :href="badge.link || '#'" class="hero-v2__badge-link">
        <SectionBadge
          variant="pill"
          :text="badge.text"
          :tag="badge.tag"
          :sep="!!(badge.tag && badge.text)"
          arrow
        />
      </a>

      <h1 class="hero-v2__heading">
        <span
          v-for="item in title"
          :key="item.id"
          :class="['hero-v2__title-span', { 'hero-v2__title-highlight': item.highlight }]"
        >{{ item.text }}</span>
      </h1>

      <p class="hero-v2__desc">{{ description }}</p>

      <div class="hero-v2__ctas">
        <FButton
          v-for="btn in buttons"
          :key="btn.id"
          :href="btn.link"
          :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
          size="lg"
          class="hero-v2__btn"
        >
          {{ btn.text }}
          <IconArrowRight v-if="btn.type === 'Primary'" />
        </FButton>
      </div>

      <p v-if="trustText" class="hero-v2__trust">{{ trustText }}</p>
    </div>

    <div v-if="tabCardContent.length || image?.url" class="hero-v2__media">
      <HeroTabs
        v-if="tabCardContent.length"
        class="hero-v2__tabs"
        :data="{ tabCardContent }"
      />
      <div v-else-if="image?.url" class="hero-v2__mockup">
        <div class="hero-v2__mockup-bar">
          <span class="hero-v2__dot hero-v2__dot--red"></span>
          <span class="hero-v2__dot hero-v2__dot--yellow"></span>
          <span class="hero-v2__dot hero-v2__dot--green"></span>
          <span class="hero-v2__url-bar">app.formester.com / forms</span>
        </div>
        <img
          :src="image.url"
          :alt="image.alternativeText || 'Formester dashboard'"
          class="hero-v2__screenshot"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroTabs from '@/components/home/HeroTabShowcase/HeroTabs.vue'
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

defineProps({
  badge:          { type: Object, default: () => null },
  title:          { type: Array,  default: () => [] },
  description:    { type: String, default: '' },
  buttons:        { type: Array,  default: () => [] },
  trustText:      { type: String, default: '' },
  image:          { type: Object, default: () => null },
  tabCardContent: { type: Array,  default: () => [] },
})
</script>

<style scoped>
.hero-v2 {
  position: relative;
  background: linear-gradient(180deg, var(--bg-violet-50) 0%, var(--bg-primary) 100%);
  padding: var(--space-30) var(--space-6) var(--space-20);
  overflow: hidden;
}

.hero-v2__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  background-image:
    linear-gradient(rgba(100, 52, 208, 0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 52, 208, 0.10) 1px, transparent 1px);
  background-size: 52px 52px;

  mask-image:
    linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-image:
    linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
  -webkit-mask-composite: source-in;

  animation: gridBreathe 6s ease-in-out infinite;
}

@keyframes gridBreathe {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1; }
}

.hero-v2__inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-v2__badge-link {
  margin-bottom: var(--space-8);
  text-decoration: none;
  transition: opacity 140ms ease;
}
.hero-v2__badge-link:hover { opacity: 0.85; }

.hero-v2__heading {
  font-size: clamp(44px, 6vw, 72px);
  font-weight: var(--fw-bold);
  line-height: 1.1;
  color: var(--fg-1);
  letter-spacing: -1.5px;
  margin-bottom: var(--space-6);
}

.hero-v2__title-span { display: inline; }

.hero-v2__title-highlight {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}

.hero-v2__desc {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--fg-2);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: var(--space-9);
}

.hero-v2__ctas {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.hero-v2__trust {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  margin-bottom: var(--space-14);
}

.hero-v2__media {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.hero-v2__tabs {
  width: 100%;
}

.hero-v2__mockup {
  width: 100%;
  max-width: 900px;
  border-radius: var(--r-2xl);
  overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 24px 80px rgba(15, 14, 26, 0.12), 0 8px 24px rgba(15, 14, 26, 0.06);
}

.hero-v2__mockup-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--space-3) var(--space-4);
  background: var(--bg-grey-100);
  border-bottom: 1px solid var(--border-light);
}

.hero-v2__dot {
  width: 12px;
  height: 12px;
  border-radius: var(--r-half);
  flex-shrink: 0;
}
.hero-v2__dot--red    { background: #ff6058; }
.hero-v2__dot--yellow { background: #ffbd2e; }
.hero-v2__dot--green  { background: #27c93f; }

.hero-v2__url-bar {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-md);
  padding: 3px 12px;
  margin-left: 12px;
}

.hero-v2__screenshot {
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .hero-v2 { padding: var(--space-24) var(--space-5) var(--space-14); }

  .hero-v2__inner { max-width: 100%; }

  .hero-v2__heading { letter-spacing: -1px; }

  .hero-v2__desc { font-size: var(--fs-md); max-width: 100%; }

  .hero-v2__ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: var(--space-3);
  }

  .hero-v2__btn { justify-content: center; }

  .hero-v2__trust { margin-bottom: var(--space-9); }

  .hero-v2__media { padding: 0 var(--space-4); }

  .hero-v2__mockup { border-radius: var(--r-xl); }

  .hero-v2__url-bar { display: none; }
}
</style>
