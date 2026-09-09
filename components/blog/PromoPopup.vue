<template>
  <aside
    v-if="visible"
    class="promo"
    role="dialog"
    aria-modal="false"
    :aria-label="promo.heading"
  >
    <button ref="closeBtn" class="promo__close" type="button" aria-label="Close" @click="dismiss">
      &times;
    </button>

    <a class="promo__media" :href="ctaHref" target="_blank" rel="noopener" @click="track">
      <img :src="promo.image" :alt="promo.imageAlt || promo.heading" loading="lazy" decoding="async" />
    </a>

    <div class="promo__body">
      <p class="promo__eyebrow">{{ promo.eyebrow || 'Formester AI' }}</p>
      <p class="promo__heading">{{ promo.heading }}</p>
      <p class="promo__text">{{ promo.text }}</p>
      <a class="promo__cta" :href="ctaHref" target="_blank" rel="noopener" @click="track">
        {{ promo.ctaLabel || 'Generate my form free' }}
      </a>
      <p class="promo__trust">Free forever &middot; No credit card</p>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  promo: { type: Object, required: true },
})

const visible = ref(false)
const closeBtn = ref(null)
let timer = null

const ctaHref = computed(() => props.promo.ctaHref || 'https://app.formester.com/users/sign_up')
const storageKey = computed(() => `fmstr_promo_${props.promo.id || 'blog'}`)

// Shown once per visitor. A dismissal is remembered; so is a click through,
// because somebody who already signed up does not need asking again.
const alreadySeen = () => {
  try {
    return window.localStorage.getItem(storageKey.value) === '1'
  } catch (e) {
    // Private mode or blocked storage: treat as unseen, and accept that the
    // card may reappear on the next visit rather than failing closed.
    return false
  }
}

const remember = () => {
  try {
    window.localStorage.setItem(storageKey.value, '1')
  } catch (e) {
    /* storage unavailable, nothing to remember */
  }
}

const dismiss = () => {
  visible.value = false
  remember()
}

const track = () => {
  remember()
}

const onKeydown = (e) => {
  if (e.key === 'Escape' && visible.value) dismiss()
}

onMounted(() => {
  if (!props.promo?.image || alreadySeen()) return
  const delay = Number(props.promo.delaySeconds ?? 10) * 1000
  // Deliberately not wrapped in requestAnimationFrame: rAF does not fire in a
  // backgrounded or non-painting tab, which would leave the card permanently
  // hidden.
  timer = window.setTimeout(() => {
    visible.value = true
    // Move focus to the close button so keyboard users are not trapped
    // behind a card they cannot see the start of.
    nextTick(() => closeBtn.value?.focus())
  }, delay)
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
/* A corner card, not a page-blocking interstitial: the article stays
   readable and scrollable behind it on every breakpoint. */
.promo {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 60;
  width: 332px;
  max-width: calc(100vw - 32px);
  background: #ffffff;
  border: 1px solid #e9d7fe;
  border-radius: 16px;
  box-shadow: 0 18px 48px rgba(42, 24, 102, 0.22);
  overflow: hidden;
  font-family: inherit;
}

.promo__close {
  position: absolute;
  top: 8px;
  right: 10px;
  z-index: 2;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
  color: #ffffff;
  background: rgba(16, 24, 40, 0.55);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
}

.promo__close:hover {
  background: rgba(16, 24, 40, 0.78);
  color: #ffffff;
}

.promo__close:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.promo__media {
  display: block;
  background: #f4f0ff;
  line-height: 0;
}

.promo__media img {
  width: 100%;
  max-width: 100%;
  height: 152px;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.promo__body {
  padding: 14px 16px 16px;
}

.promo__eyebrow {
  margin: 0 0 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #7f56d9;
}

.promo__heading {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  color: #101828;
}

.promo__text {
  margin: 0 0 12px;
  font-size: 13.5px;
  line-height: 1.5;
  color: #475467;
}

.promo__cta {
  display: block;
  padding: 11px 18px;
  background: linear-gradient(135deg, #7f56d9 0%, #6941c6 100%);
  color: #ffffff !important;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none !important;
  border-radius: 9999px;
}

.promo__cta:hover {
  color: #ffffff !important;
  filter: brightness(1.06);
}

.promo__trust {
  margin: 10px 0 0;
  font-size: 11.5px;
  text-align: center;
  color: #98a2b3;
}

/* Phones: a bottom sheet that still leaves the article visible above it. */
@media (max-width: 640px) {
  .promo {
    right: 12px;
    left: 12px;
    bottom: 12px;
    width: auto;
    max-width: none;
  }

  .promo__body {
    padding: 14px 16px 16px;
  }

  .promo__heading {
    font-size: 15px;
  }
}

/* Short viewports: drop the animation frame so the card cannot eat the screen. */
@media (max-height: 520px) {
  .promo__media {
    display: none;
  }
}

/* Entrance is a CSS animation on the element, not a Vue <transition>. Vue's
   transition classes advance on requestAnimationFrame, which never fires in a
   backgrounded tab, and the card would then never unmount on dismiss. A plain
   v-if plus a keyframe keeps closing deterministic. */
@keyframes promo-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* No fill-mode on purpose: without it the card's resting state is its own
   (visible) style, so if animations are throttled the card still shows. With
   `both` the pre-animation `from` frame would pin it at opacity 0. */
.promo {
  animation: promo-in 0.28s ease;
}

@media (prefers-reduced-motion: reduce) {
  .promo {
    animation: none;
  }
}
</style>
