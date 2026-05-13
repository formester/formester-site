<template>
  <section class="dm-section">
    <div class="dm-inner">
      <div class="dm-header">
        <SectionBadge v-if="badge" :text="badge" class="dm-badge" />
        <h2 class="dm-heading">{{ heading }}</h2>
        <p v-if="description" class="dm-description">{{ description }}</p>
      </div>
    </div>

    <!-- Row 1 — scrolls left -->
    <div class="dm-row-wrap carousel-fade">
      <div class="dm-row carousel-row carousel-left" style="width: max-content;">
        <template v-for="pass in 2" :key="`r1-p${pass}`">
          <template v-for="(item, i) in allItems" :key="`r1-p${pass}-${i}`">
            <div v-if="item.isMore" class="dm-item dm-item--more">
              <span class="dm-icon dm-icon--more">+</span>
              <span class="dm-label dm-label--more">{{ item.name }}</span>
            </div>
            <div v-else class="dm-item">
              <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.imageAlt || item.name" class="dm-icon dm-icon--img" />
              <span v-else class="dm-icon dm-icon--fallback" :style="{ background: getColor(i) }">
                {{ getInitials(item.name || item.imageAlt) }}
              </span>
              <span class="dm-label">{{ item.name || item.imageAlt }}</span>
            </div>
          </template>
        </template>
      </div>
    </div>

    <!-- Row 2 — scrolls right -->
    <div class="dm-row-wrap dm-row-wrap--last carousel-fade">
      <div class="dm-row carousel-row carousel-right" style="width: max-content;">
        <template v-for="pass in 2" :key="`r2-p${pass}`">
          <template v-for="(item, i) in allItems" :key="`r2-p${pass}-${i}`">
            <div v-if="item.isMore" class="dm-item dm-item--more">
              <span class="dm-icon dm-icon--more">+</span>
              <span class="dm-label dm-label--more">{{ item.name }}</span>
            </div>
            <div v-else class="dm-item">
              <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.imageAlt || item.name" class="dm-icon dm-icon--img" />
              <span v-else class="dm-icon dm-icon--fallback" :style="{ background: getColor(i) }">
                {{ getInitials(item.name || item.imageAlt) }}
              </span>
              <span class="dm-label">{{ item.name || item.imageAlt }}</span>
            </div>
          </template>
        </template>
      </div>
    </div>

    <div v-if="cta?.link" class="dm-cta">
      <FButton :href="cta.link" variant="ghost" size="md">
        {{ cta.text || 'Browse all integrations' }} →
      </FButton>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const PALETTE = [
  '#67B9F0', '#FF4A00', '#635BFF', '#FFD60A',
  '#0F9D58', '#137333', '#0078D4', '#003087',
  '#5865F2', '#5E6AD2', '#F06A6A', '#0052CC',
  '#E91E63', '#FF6B35', '#00BCD4', '#8BC34A',
]

const props = defineProps({
  badge: { type: String, default: '' },
  heading: { type: String, default: '' },
  description: { type: String, default: '' },
  integrations: { type: Array, default: () => [] },
  cta: { type: Object, default: () => null },
})

const allItems = computed(() => [...props.integrations])

const getInitials = (name) => {
  if (!name) return '??'
  const words = name.trim().split(/\s+/)
  return words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase()
}

const getColor = (index) => PALETTE[index % PALETTE.length]
</script>

<style scoped>
.dm-section {
  padding-block: 5rem;
  background: var(--gray-50);
  border-top: 1px solid var(--gray-100);
  overflow: hidden;
}

.dm-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: 1.5rem;
}

.dm-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.dm-badge {
  margin-bottom: var(--space-4);
}

.dm-heading {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 800;
  color: var(--fg-1);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-4);
}

.dm-description {
  font-size: var(--fs-md);
  color: var(--gray-500);
  max-width: 36rem;
  margin-inline: auto;
  line-height: 1.6;
}

.dm-row-wrap {
  position: relative;
  margin-bottom: var(--space-4);
}

.dm-row-wrap--last {
  margin-bottom: 3.5rem;
}

.dm-row {
  display: flex;
  gap: var(--space-2);
}

/* Pills */
.dm-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: #fff;
  border: 1px solid var(--gray-200);
  border-radius: var(--r-full);
  white-space: nowrap;
  cursor: default;
  transition: border-color 150ms, box-shadow 150ms;
}

.dm-item:hover {
  border-color: var(--violet-300);
  box-shadow: var(--shadow-sm);
}

.dm-item--more {
  border-color: var(--violet-300);
}

.dm-item--more:hover {
  border-color: var(--violet-300);
  box-shadow: none;
}

/* Icons */
.dm-icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--r-md);
  flex-shrink: 0;
}

.dm-icon--img {
  object-fit: contain;
}

.dm-icon--more {
  background: var(--violet-50);
  color: var(--violet-600);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dm-icon--fallback {
  color: #fff;
  font-size: 10px;
  font-weight: var(--fw-bold);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Labels */
.dm-label {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--gray-800);
}

.dm-label--more {
  color: var(--violet-600);
}

/* Larger screens — bigger pills */
@media (min-width: 640px) {
  .dm-row {
    gap: var(--space-3);
  }

  .dm-item {
    padding: var(--space-3) var(--space-4);
    gap: var(--space-3);
  }

  .dm-icon {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--r-lg);
  }

  .dm-icon--more {
    font-size: var(--fs-md);
  }

  .dm-icon--fallback {
    font-size: var(--fs-xs);
  }

  .dm-label {
    font-size: var(--fs-sm);
  }
}

.dm-cta {
  text-align: center;
}

/* Marquee animations */
@keyframes scrollLeft {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes scrollRight {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

.carousel-row {
  will-change: transform;
}

.carousel-left  { animation: scrollLeft  60s linear infinite; }
.carousel-right { animation: scrollRight 50s linear infinite; }

.carousel-left:hover,
.carousel-right:hover {
  animation-play-state: paused;
}

.carousel-fade {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}
</style>
