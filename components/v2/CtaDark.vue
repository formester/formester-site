<template>
  <section class="cta-dark">
    <div class="cta-dark__inner">
      <SectionBadge v-if="badge" :text="badge" class="cta-dark__badge" />
      <h2 class="cta-dark__heading">{{ heading }}</h2>
      <p v-if="description" class="cta-dark__desc">{{ description }}</p>

      <div class="cta-dark__ctas">
        <FButton
          v-for="btn in buttons"
          :key="btn.id"
          :href="btn.link"
          :variant="btn.type === 'Primary' ? 'primary' : 'white'"
          size="lg"
        >{{ btn.text }}</FButton>
      </div>

      <p v-if="trustText" class="cta-dark__trust">{{ trustText }}</p>
    </div>
  </section>
</template>

<script setup>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

defineProps({
  badge:       { type: String, default: '' },
  heading:     { type: String, default: '' },
  description: { type: String, default: '' },
  buttons:     { type: Array,  default: () => [] },
  trustText:   { type: String, default: '' },
})
</script>

<style scoped>
.cta-dark {
  background: var(--fg-1);
  padding: var(--space-25) var(--space-6);
  position: relative;
}

.cta-dark__inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.cta-dark::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  max-width: 100vw;
  background: radial-gradient(circle at 50% 120%, rgba(100, 52, 208, 0.5), transparent 60%);;
  pointer-events: none;
}

.cta-dark__badge {
  margin-bottom: var(--space-5);
  position: relative;
  color: var(--violet-300) !important;
}
.cta-dark__badge::before { background: var(--violet-300) !important; }

.cta-dark__heading {
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: var(--fw-bold);
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: var(--space-5);
  position: relative;
}

.cta-dark__desc {
  font-size: var(--fs-md);
  color: var(--fg-muted);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: var(--space-9);
  position: relative;
}

.cta-dark__ctas {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--space-6);
  position: relative;
}

.cta-dark__trust {
  font-size: var(--fs-xs);
  color: var(--fg-3);
  position: relative;
}

@media (max-width: 640px) {
  .cta-dark__heading { font-size: 32px; letter-spacing: -0.5px; }
}

@media (max-width: 500px) {
  .cta-dark { padding: var(--space-18) var(--space-5); }

  .cta-dark__ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
}
</style>
