<template>
  <section v-if="shownReviews.length" class="tw-section">
    <div class="tw-inner">
      <SectionHeader :title="title" :description="description" />

      <div v-if="platformStats.length > 1" class="tw-agg" aria-label="Aggregate ratings">
        <template v-for="(p, i) in platformStats" :key="p.name">
          <span v-if="i > 0" class="tw-agg__divider"></span>
          <span class="tw-agg__item">
            <span class="tw-badge" :class="`tw-badge--${p.key}`">{{ p.initial }}</span>
            <span class="tw-agg__rating">{{ p.avg }}</span>
            <span class="tw-agg__src">{{ p.name }} ({{ p.count }} review{{ p.count === 1 ? '' : 's' }})</span>
          </span>
        </template>
      </div>

    </div>

    <div class="tw-tracks" @mouseleave="collapseAll">
        <div
          v-for="(row, ri) in rows"
          :key="ri"
          class="tw-track"
        >
          <div class="tw-row" :class="{ 'tw-row--reverse': ri % 2 === 1 }">
            <template v-for="copy in 2" :key="copy">
              <article
                v-for="r in row"
                :key="`${copy}-${r.id}`"
                class="tw-card"
                :class="{ 'tw-card--open': isOpen(copy, r) }"
                :aria-hidden="copy === 2 ? 'true' : null"
              >
                <div class="tw-card__top">
                  <span class="tw-stars" :aria-label="`${r.rating} out of 5`">
                    <StarRatingIcons :rating="r.rating" />
                  </span>
                  <span class="tw-source">
                    <span class="tw-badge" :class="`tw-badge--${platformKey(r.platform)}`">{{ r.platform[0] }}</span>
                    {{ r.platform }}
                  </span>
                </div>
                <p class="tw-quote">“{{ r.text }}”</p>
                <button
                  v-if="isLong(r)"
                  type="button"
                  class="tw-more"
                  @click="toggle(copy, r)"
                >{{ isOpen(copy, r) ? 'Show less' : 'Read more' }}</button>
                <div class="tw-foot">
                  <span class="tw-avatar" :class="`tw-avatar--${avatarTone(r)}`">{{ (r.authorName || '?')[0] }}</span>
                  <div class="tw-foot__who">
                    <div class="tw-name">{{ r.authorName }}</div>
                    <div v-if="r.authorRole || r.reviewDate" class="tw-role">{{ r.authorRole || r.reviewDate }}</div>
                  </div>
                  <span v-if="r.verified" class="tw-verified">Verified</span>
                </div>
              </article>
            </template>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import StarRatingIcons from '@/components/icons/StarRatingIcons.vue'

const props = defineProps({
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  showG2: { type: Boolean, default: true },
  showTrustpilot: { type: Boolean, default: true },
  showProductHunt: { type: Boolean, default: true },
  showCapterra: { type: Boolean, default: true },
  pickedReviews: { type: Array, default: () => [] },
  excludedReviews: { type: Array, default: () => [] },
})

const config = useRuntimeConfig()

// When no reviews are hand-picked, pull the whole collection (build-time fetch).
const { data: allReviews } = props.pickedReviews?.length
  ? { data: ref([]) }
  : await useAsyncData('platform-testimonials', async () => {
      try {
        const res = await $fetch(
          `${config.public.strapiUrl}/api/platform-testimonials?pagination[pageSize]=100`
        )
        return res?.data || []
      } catch (e) {
        console.error('TestimonialWall: failed to fetch reviews', e)
        return []
      }
    })

const platformOn = computed(() => ({
  G2: props.showG2,
  Trustpilot: props.showTrustpilot,
  'Product Hunt': props.showProductHunt,
  Capterra: props.showCapterra,
}))

const shownReviews = computed(() => {
  const excluded = new Set((props.excludedReviews || []).map((r) => r.id))
  const pool = props.pickedReviews?.length ? props.pickedReviews : allReviews.value || []
  return pool.filter(
    (r) => r && !r.hidden && platformOn.value[r.platform] && !excluded.has(r.id)
  )
})

const AVATAR_TONES = ['violet', 'blue', 'green', 'amber', 'rose', 'teal']
const avatarTone = (r) => AVATAR_TONES[(r.id || 0) % AVATAR_TONES.length]

// Quotes longer than this get clamped + a "Read more" toggle.
const LONG_CHARS = 240
const isLong = (r) => (r.text || '').length > LONG_CHARS

// Expanded cards, keyed per rendered copy so only the clicked card opens.
const openKeys = ref(new Set())
const keyFor = (copy, r) => `${copy}-${r.id}`
const isOpen = (copy, r) => openKeys.value.has(keyFor(copy, r))
const toggle = (copy, r) => {
  const k = keyFor(copy, r)
  const next = new Set(openKeys.value)
  next.has(k) ? next.delete(k) : next.add(k)
  openKeys.value = next
}
// Marquee resumes on mouse-leave → collapse everything back to mean height.
const collapseAll = () => {
  if (openKeys.value.size) openKeys.value = new Set()
}

const platformKey = (name) =>
  ({ G2: 'g2', Trustpilot: 'tp', 'Product Hunt': 'ph', Capterra: 'cap' }[name] || 'g2')

const rows = computed(() => {
  const list = shownReviews.value
  if (list.length <= 4) return [list]
  const half = Math.ceil(list.length / 2)
  return [list.slice(0, half), list.slice(half)]
})

const platformStats = computed(() => {
  const groups = {}
  for (const r of shownReviews.value) {
    ;(groups[r.platform] ||= []).push(r.rating || 5)
  }
  return Object.entries(groups).map(([name, ratings]) => ({
    name,
    key: platformKey(name),
    initial: name[0],
    count: ratings.length,
    avg: (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1),
  }))
})
</script>

<style scoped>
.tw-section {
  padding: var(--space-16) 0;
  background: var(--gray-25);
}

.tw-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.tw-agg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-5);
  width: fit-content;
  margin: calc(-1 * var(--space-8)) auto var(--space-10);
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: 16px 28px;
}

.tw-agg__item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.tw-agg__rating {
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
}

.tw-agg__src {
  font-size: var(--fs-xs);
  color: var(--fg-3);
}

.tw-agg__divider {
  width: 1px;
  height: 18px;
  background: var(--gray-200);
}

.tw-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: var(--fw-bold);
  color: #fff;
  flex-shrink: 0;
}

.tw-badge--g2 {
  background: #ff492c;
}

.tw-badge--tp {
  background: #00b67a;
}

.tw-badge--ph {
  background: #da552f;
}

.tw-badge--cap {
  background: #2e8bc0;
}

.tw-tracks {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.tw-track {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
}

.tw-row {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  width: max-content;
  animation: tw-marquee 48s linear infinite;
  will-change: transform;
}

.tw-row--reverse {
  animation: tw-marquee-reverse 56s linear infinite;
}

.tw-track:hover .tw-row,
.tw-track:focus-within .tw-row {
  animation-play-state: paused;
}

@keyframes tw-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes tw-marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .tw-row,
  .tw-row--reverse {
    animation: none;
  }

  .tw-track {
    mask-image: none;
    -webkit-mask-image: none;
    overflow-x: auto;
    padding-bottom: 8px;
  }
}

.tw-card {
  width: 460px;
  height: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  padding: var(--space-5);
  overflow: hidden;
}

/* Expanded card grows to fit; sits above neighbours so it doesn't shove the row */
.tw-card--open {
  height: auto;
  align-self: flex-start;
}

@media (max-width: 600px) {
  .tw-card {
    width: 300px;
  }
}

.tw-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.tw-stars {
  display: inline-flex;
  gap: 2px;
  color: var(--warning-400);
}

.tw-source {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-3);
}

.tw-quote {
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.65;
  color: var(--fg-strong);
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tw-card--open .tw-quote {
  -webkit-line-clamp: unset;
  overflow: visible;
}

.tw-more {
  align-self: flex-start;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--violet-600);
}

.tw-more:hover {
  text-decoration: underline;
}

.tw-foot {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: auto;
  padding-top: var(--space-4);
  border-top: 1px solid var(--gray-100);
}

.tw-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--violet-50);
  color: var(--violet-600);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  flex-shrink: 0;
}

.tw-avatar--violet { background: var(--violet-500); color: #fff; }
.tw-avatar--blue { background: #2970ff; color: #fff; }
.tw-avatar--green { background: #12b76a; color: #fff; }
.tw-avatar--amber { background: #f79009; color: #fff; }
.tw-avatar--rose { background: #f04438; color: #fff; }
.tw-avatar--teal { background: #0e9384; color: #fff; }

.tw-foot__who {
  min-width: 0;
}

.tw-name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  line-height: 1.3;
}

.tw-role {
  font-size: var(--fs-xs);
  color: var(--fg-3);
  line-height: 1.3;
}

.tw-verified {
  margin-left: auto;
  font-size: var(--fs-tiny);
  font-weight: var(--fw-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--success-700);
  background: var(--success-10);
  border-radius: var(--r-full);
  padding: 3px 8px;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .tw-section {
    padding: var(--space-12) var(--space-4);
  }
}
</style>
