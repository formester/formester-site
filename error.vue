<template>
  <div class="error-layout">
    <V2NavNavbar />
    <main class="error-page" aria-labelledby="error-page-title">
      <div aria-hidden="true" class="error-page__glow"></div>
      <div class="error-page__inner">
        <p class="error-page__code" aria-hidden="true">{{ isNotFound ? '404' : statusCode }}</p>
        <p class="error-page__eyebrow">{{ isNotFound ? 'Error 404' : `Error ${statusCode}` }}</p>
        <h1 id="error-page-title" class="error-page__title">
          {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="error-page__desc">{{ isNotFound ? context.message : 'We hit a snag loading this page. Please try again in a moment.' }}</p>

        <div class="error-page__ctas">
          <FButton href="/" variant="primary" size="lg">
            <IconArrowLeft />
            Back to homepage
          </FButton>
          <FButton v-if="isNotFound" :href="context.href" variant="secondary" size="lg">
            {{ context.label }}
            <IconArrowRight />
          </FButton>
        </div>

        <p class="error-page__help">
          Think something's missing? <a href="/contact/">Let us know</a>.
        </p>
      </div>
    </main>
    <V2Footer />
    <CookieConsent />
  </div>
</template>

<script setup>
import FButton from '@/components/UI/FButton.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

const props = defineProps({
  error: { type: Object, default: () => ({}) },
})

const statusCode = computed(() => Number(props.error?.statusCode) || 404)
const isNotFound = computed(() => statusCode.value === 404)

const CONTEXTS = {
  default: {
    message: "The link may be broken, or the page may have moved. Let's get you back on track.",
    href: '/templates/',
    label: 'Browse form templates',
  },
  blog: {
    message: 'This article may have been moved or retired. The blog has plenty more to read.',
    href: '/blog/',
    label: 'Browse the blog',
  },
  templates: {
    message: 'This template may have been renamed or removed. There are hundreds more to start from.',
    href: '/templates/',
    label: 'Browse form templates',
  },
}

// 404.html is prerendered once and served for every missing URL, so the
// visitor's path is only known in the browser. Resolve it after mount to
// keep server and client markup identical during hydration.
const context = ref(CONTEXTS.default)
onMounted(() => {
  const section = window.location.pathname.split('/')[1]
  context.value = CONTEXTS[section] || CONTEXTS.default
})

useHead({
  title: computed(() => (isNotFound.value ? 'Page not found | Formester' : 'Something went wrong | Formester')),
  meta: [{ key: 'robots', name: 'robots', content: 'noindex, follow' }],
})
</script>

<style scoped>
.error-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.error-page {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-24) var(--space-6);
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-violet-25) 100%);
}

.error-page__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(720px, 120vw);
  aspect-ratio: 1;
  transform: translate(-50%, -55%);
  border-radius: var(--r-half);
  background: radial-gradient(circle, rgba(100, 52, 208, 0.12) 0%, rgba(100, 52, 208, 0) 65%);
  pointer-events: none;
}

.error-page__inner {
  position: relative;
  max-width: 640px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-page__code {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(96px, 18vw, 180px);
  line-height: 1;
  color: var(--violet-500);
  letter-spacing: -2px;
  margin-bottom: var(--space-4);
}

.error-page__eyebrow {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--violet-600);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-3);
}

.error-page__title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: var(--fw-bold);
  line-height: 1.15;
  color: var(--fg-1);
  letter-spacing: -1px;
  margin-bottom: var(--space-4);
}

.error-page__desc {
  font-size: clamp(16px, 2vw, 18px);
  line-height: 1.7;
  color: var(--fg-2);
  max-width: 520px;
  margin-bottom: var(--space-9);
}

.error-page__ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.error-page__ctas :deep(.fbt:focus-visible),
.error-page__help a:focus-visible {
  outline: 2px solid var(--violet-500);
  outline-offset: 3px;
}

.error-page__help {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  margin: 0;
}

.error-page__help a {
  color: var(--violet-500);
  font-weight: var(--fw-medium);
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (max-width: 576px) {
  .error-page {
    padding: var(--space-24) var(--space-5) var(--space-16);
  }

  .error-page__ctas {
    flex-direction: column;
    align-self: stretch;
  }
}
</style>
