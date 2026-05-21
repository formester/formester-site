<template>
  <section class="hero-rl-v2">
    <div class="container">
      <div class="row gy-5 gx-lg-5 align-items-center">

        <!-- Left: text column -->
        <div class="col-lg-6 d-flex flex-column align-items-lg-start align-items-center text-center text-lg-start">
          <a v-if="badge?.text" :href="badge.link || undefined" class="hero-rl-v2__badge-link">
            <SectionBadge variant="label" :text="badge.text" />
          </a>

          <!-- priority: titleHtml > titleParts > title/titleHighlight/titleSuffix -->
          <h1 v-if="titleHtml" class="hero-rl-v2__heading mt-3" v-html="titleHtml"></h1>
          <h1 v-else-if="titleParts.length" class="hero-rl-v2__heading mt-3">
            <span
              v-for="part in titleParts"
              :key="part.id"
              :class="{ 'hero-rl-v2__highlight': part.highlight }"
            >{{ part.text }}</span>
          </h1>
          <h1 v-else class="hero-rl-v2__heading mt-3">{{ title }}</h1>

          <p class="hero-rl-v2__desc mt-3">{{ description }}</p>

          <div v-if="clickTriggers?.length" class="hero-rl-v2__triggers mt-3">
            <div v-for="item in clickTriggers" :key="item.id" class="hero-rl-v2__trigger">
              ✓ &nbsp;{{ item.text }}
            </div>
          </div>

          <div class="hero-rl-v2__ctas mt-4">
            <FButton
              v-for="btn in resolvedButtons"
              :key="btn.id ?? btn.text"
              :href="btn.link"
              :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
              size="lg"
              class="hero-rl-v2__btn"
            >
              {{ btn.text }}
              <ArrowRightIcon v-if="btn.showArrow" />
            </FButton>
          </div>

          <div v-if="stats?.length" class="hero-rl-v2__stats mt-4">
            <div
              v-for="(stat, i) in stats"
              :key="stat.id ?? i"
              class="hero-rl-v2__stat"
            >
              <span class="hero-rl-v2__stat-value">{{ stat.value }}</span>
              <span class="hero-rl-v2__stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: icon grid, video, or fallback image -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <template v-if="video_url">
            <div class="hero-rl-v2__video-wrapper" @click="showOverlay = true">
              <nuxt-img
                :src="thumbImg.src || youtubeThumbnailUrl"
                :alt="thumbImg.alt || 'Video thumbnail'"
                :width="thumbImg.width || 480"
                :height="thumbImg.height || 360"
                class="hero-rl-v2__video-thumb"
              />
              <button class="hero-rl-v2__play-btn" aria-label="Play video">
                <nuxt-img src="/play-button.svg" alt="Play video" width="64" height="64" />
              </button>
              <a :href="video_url" class="visually-hidden" target="_blank" rel="noopener noreferrer">Watch video</a>
            </div>

            <div v-if="showOverlay" class="hero-rl-v2__overlay" @click.self="showOverlay = false">
              <div class="hero-rl-v2__overlay-inner">
                <iframe
                  class="hero-rl-v2__iframe"
                  :src="youtubeEmbedUrl"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
                <button @click="showOverlay = false" aria-label="Close video" class="hero-rl-v2__close-btn">
                  <nuxt-img src="/x-close.svg" alt="Close video" width="24" height="24" />
                </button>
              </div>
            </div>
          </template>

          <RawHtml v-else-if="heroRawHtml" :markup="heroRawHtml" class="hero-rl-v2__raw-html w-100" />

          <nuxt-img
            v-else-if="heroImg.src"
            :src="heroImg.src"
            :alt="heroImg.alt || 'Hero image'"
            :width="heroImg.width"
            :height="heroImg.height"
            class="hero-rl-v2__image"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getStrapiImage } from '@/utils/strapiImage'
import SectionBadge from '@/components/UI/SectionBadge.vue'
import FButton from '@/components/UI/FButton.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import RawHtml from '../strapi/RawHtml.vue'

const props = defineProps({
  badge:          { type: Object,  default: () => null },
  title:          { type: String,  default: '' },
  titleHtml:      { type: String,  default: '' },  // raw HTML — highest priority
  titleParts:     { type: Array,   default: () => [] },  // [{ id, text, highlight? }] — same shape as HeroV2
  description:    { type: String,  required: true },
  buttons:        { type: Array,   default: () => [] },
  button:         { type: Object,  default: () => null },
  clickTriggers:  { type: Array,   default: () => null },
  heroImage:      { type: Object,  default: () => null },
  heroRawHtml:    { type: String,  default: '' },
  video_url:       { type: String,  default: '' },
  thumbnail:      { type: Object,  default: () => null },
  stats:          { type: Array,   default: () => [] },  // [{ id?, value, label }]
})

const showOverlay = ref(false)

const resolvedButtons = computed(() => {
  if (props.buttons.length) return props.buttons
  if (props.button) return [{ ...props.button, type: 'Primary'}]
  return []
})


const heroImg = computed(() => getStrapiImage(props.heroImage))
const thumbImg = computed(() => getStrapiImage(props.thumbnail))

const youtubeVideoId = computed(() => {
  if (!props.video_url) return ''
  const match = props.video_url.match(/(?:youtube\.com.*[\?&]v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : ''
})

const youtubeThumbnailUrl = computed(() =>
  youtubeVideoId.value ? `https://img.youtube.com/vi/${youtubeVideoId.value}/hqdefault.jpg` : ''
)

const youtubeEmbedUrl = computed(() =>
  youtubeVideoId.value ? `https://www.youtube.com/embed/${youtubeVideoId.value}?autoplay=1` : ''
)

</script>

<style scoped>
.hero-rl-v2 {
  background: var(--bg-grey-75);
  padding-top: var(--space-30);
  padding-bottom: var(--space-20);
}

.hero-rl-v2__badge-link {
  text-decoration: none;
  transition: opacity 140ms ease;
}
.hero-rl-v2__badge-link:hover { opacity: 0.8; }

.hero-rl-v2__heading {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: var(--fw-bold);
  line-height: 1.1;
  letter-spacing: -1.5px;
  color: var(--fg-1);
  margin-bottom: 0;
}

.hero-rl-v2__highlight,
:deep(.hero-rl-v2__highlight) {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}

.hero-rl-v2__desc {
  font-size: clamp(var(--fs-md), 2vw, var(--fs-lg));
  color: var(--fg-2);
  line-height: 1.7;
  max-width: 480px;
}

.hero-rl-v2__trigger {
  font-size: var(--fs-md);
  color: var(--fg-2);
  margin-top: var(--space-2);
}

.hero-rl-v2__ctas {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

/* Stats strip */
.hero-rl-v2__stats {
  display: flex;
  align-items: stretch;
  gap: 0;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  overflow: hidden;
  width: 100%;
  max-width: 480px;
}

.hero-rl-v2__stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-5);
  border-right: 1px solid var(--border-light);
}

.hero-rl-v2__stat:last-child {
  border-right: none;
}

.hero-rl-v2__stat-value {
  font-size: clamp(var(--fs-xl), 3vw, var(--fs-2xl));
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1;
}

.hero-rl-v2__stat-label {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  line-height: 1.4;
}

.hero-rl-v2__image {
  max-width: 100%;
  height: auto;
}

/* Video */
.hero-rl-v2__video-wrapper {
  position: relative;
  width: 100%;
  cursor: pointer;
  border-radius: var(--r-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
}

.hero-rl-v2__video-thumb {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.hero-rl-v2__play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: transparent;
  width: 64px;
  height: 64px;
  animation: hero-rl-pulse 2s infinite;
}

.hero-rl-v2__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2147483647;
  animation: hero-rl-fade 0.2s ease;
}

.hero-rl-v2__overlay-inner {
  position: relative;
  max-width: 95vw;
  max-height: 85vh;
  display: flex;
  justify-content: center;
}

.hero-rl-v2__iframe {
  width: 1000px;
  height: 563px;
  max-width: 95vw;
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-lg);
  display: block;
}

.hero-rl-v2__close-btn {
  position: absolute;
  top: -24px;
  right: -24px;
  background: var(--bg-primary);
  border: none;
  border-radius: var(--r-full);
  width: 40px;
  height: 40px;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@keyframes hero-rl-pulse {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
  70%  { transform: translate(-50%, -50%) scale(1.1); opacity: 0.85; }
  100% { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
}

@keyframes hero-rl-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (max-width: 1000px) {
  .hero-rl-v2__iframe {
    width: 80vw;
    height: calc(80vw * 0.5625);
  }

  .hero-rl-v2__close-btn {
    top: -16px;
    right: -16px;
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 992px) {
  .hero-rl-v2 {
    padding-top: var(--space-24);
    padding-bottom: var(--space-14);
  }
}

@media (max-width: 767px) {
  .hero-rl-v2__desc {
    max-width: 100%;
  }

  .hero-rl-v2__ctas {
    flex-direction: column;
    width: 100%;
  }

  .hero-rl-v2__btn {
    width: 100%;
    justify-content: center;
  }

}
</style>
