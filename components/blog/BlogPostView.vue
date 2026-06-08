<template>
  <div>
    <!-- HERO -->
    <section class="art-hero">
      <div class="art-hero__inner">
        <NuxtLink to="/blog/" class="art-back">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 4 6 8l4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          All articles
        </NuxtLink>
        <h1 class="art-title">{{ blogData.title }}</h1>
        <div class="art-byline">
          <div v-if="blogData.author" class="art-author">
            <span class="art-avatar" aria-hidden="true">{{ authorInitials }}</span>
            <a
              v-if="blogData.authorProfile"
              :href="blogData.authorProfile"
              target="_blank"
              rel="noopener"
              class="art-author__name"
            >{{ blogData.author }}</a>
            <span v-else class="art-author__name">{{ blogData.author }}</span>
          </div>
          <template v-if="blogData.publishedAt">
            <span class="art-byline__dot"></span>
            <span class="art-byline__meta">{{ formatDate(blogData.publishedAt) }}</span>
          </template>
          <template v-if="blogData.readingStats">
            <span class="art-byline__dot"></span>
            <span class="art-byline__meta">{{ blogData.readingStats.text }}</span>
          </template>
        </div>
      </div>
    </section>

    <!-- BODY: TOC rail · article · share rail -->
    <section class="art-section">
      <div class="art-layout">
        <aside v-if="tableOfContents.length" class="art-toc" aria-label="Table of contents">
          <p class="art-toc__title">On this page</p>
          <ul>
            <li v-for="link of tableOfContents" :key="link.id">
              <NuxtLink
                :to="`#${link.id}`"
                :class="[`toc-l${link.level}`, { active: activeId === link.id }]"
                :title="link.text"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </aside>
        <div v-else></div>

        <article class="art-body">
          <!-- Mobile/tablet TOC accordion -->
          <details v-if="tableOfContents.length" class="toc-accordion">
            <summary>On this page</summary>
            <ul>
              <li v-for="link of tableOfContents" :key="link.id">
                <NuxtLink :to="`#${link.id}`" :class="`toc-l${link.level}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </details>

          <div class="blog__content" ref="blogContent">
            <div class="nuxt-content" v-html="processedBody" />

            <div class="popup__img" :style="{ display: showPopup ? 'block' : 'none' }">
              <span class="image-preview-close" @click="closePopup">&times;</span>
              <img :src="popupImageSrc" :alt="popupImageAlt" @click="closePopup" />
            </div>
          </div>

          <!-- Inline share: shown only when the side rail is hidden (≤1080px) -->
          <div v-if="$slots.actions" class="art-share-inline" aria-label="Share this article">
            <span class="art-share-inline__label">Share this article</span>
            <slot name="actions" />
          </div>
        </article>

        <aside v-if="$slots.actions" class="art-share" aria-label="Share this article">
          <span class="art-share__label">Share</span>
          <slot name="actions" />
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { marked } from 'marked'

const props = defineProps({
  blogData: {
    type: Object,
    required: true,
  },
})

const authorInitials = computed(() =>
  (props.blogData?.author || '')
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
)

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

const showPopup = ref(false)
const popupImageSrc = ref('')
const popupImageAlt = ref('')
const blogContent = ref(null)
const activeId = ref('')

const slugifyHeading = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')

const processedBody = computed(() => {
  const renderer = new marked.Renderer()

  renderer.heading = function (text, level) {
    if (level >= 2 && level <= 3) {
      return `<h${level} id="${slugifyHeading(text)}">${text}</h${level}>`
    }
    return `<h${level}>${text}</h${level}>`
  }

  renderer.link = function (href, title, text) {
    let processedHref = href
    const isInternal = href.startsWith('/') || href.includes('formester.com')
    if (isInternal && href) {
      const hasTrailingSlash = href.endsWith('/')
      const hasFileExtension = /\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0])
      const hasHashOrQuery = href.includes('#') || href.includes('?')
      if (!hasTrailingSlash && !hasFileExtension && !hasHashOrQuery) {
        processedHref = href + '/'
      }
    }
    const titleAttr = title ? ` title="${title}"` : ''
    return `<a href="${processedHref}"${titleAttr}>${text}</a>`
  }

  return marked(props.blogData?.body || '', { renderer })
})

const tableOfContents = computed(() => {
  const toc = []
  const content = props.blogData?.body || ''
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    toc.push({ id: slugifyHeading(text), text, level })
  }
  return toc
})

const openPopup = (src, alt) => {
  popupImageSrc.value = src
  popupImageAlt.value = alt
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
  popupImageSrc.value = ''
  popupImageAlt.value = ''
}

const setupImageClickHandlers = () => {
  nextTick(() => {
    if (blogContent.value) {
      blogContent.value.querySelectorAll('.nuxt-content img').forEach((img) => {
        img.addEventListener('click', () => openPopup(img.src, img.alt))
      })
    }
  })
}

// Scrollspy: highlight the TOC item for the heading currently in view
let headingObserver = null
const setupScrollspy = () => {
  nextTick(() => {
    if (!blogContent.value || !tableOfContents.value.length) return
    headingObserver?.disconnect()
    headingObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id
          }
        }
      },
      { rootMargin: '-90px 0px -70% 0px', threshold: 0 }
    )
    blogContent.value
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((h) => headingObserver.observe(h))
  })
}

const keyHandler = (evt) => {
  if (evt.key === 'Escape') closePopup()
}

onMounted(() => {
  setupImageClickHandlers()
  setupScrollspy()
  document.addEventListener('keydown', keyHandler)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', keyHandler)
  headingObserver?.disconnect()
})

watch(() => props.blogData?.body, () => {
  setupImageClickHandlers()
  setupScrollspy()
})
</script>

<style scoped>
/* ─── Hero ─────────────────────────────────────────────── */
.art-hero {
  background: linear-gradient(180deg, var(--violet-25), #fff 78%);
  border-bottom: 1px solid var(--border-light);
  padding: 122px var(--space-6) 40px;
}

.art-hero__inner {
  max-width: 760px;
  margin: 0 auto;
}

.art-back {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13.5px;
  font-weight: var(--fw-semibold);
  color: var(--fg-3);
  text-decoration: none;
  margin-bottom: 26px;
  transition: color 150ms ease;
}

.art-back svg {
  transition: transform 150ms ease;
}

.art-back:hover {
  color: var(--violet-600);
}

.art-back:hover svg {
  transform: translateX(-3px);
}

.art-title {
  font-size: clamp(30px, 4vw, 46px);
  font-weight: var(--fw-bold);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--fg-1);
  margin: 0 0 22px;
  text-wrap: balance;
}

.art-byline {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.art-author {
  display: flex;
  align-items: center;
  gap: 11px;
}

.art-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--violet-50);
  color: var(--violet-600);
  font-size: 14px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.02em;
  flex-shrink: 0;
}

.art-author__name {
  font-size: 14.5px;
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  line-height: 1.3;
  text-decoration: none;
}

a.art-author__name:hover {
  color: var(--violet-600);
}

.art-byline__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--fg-muted);
}

.art-byline__meta {
  font-size: 13.5px;
  color: var(--fg-3);
}

/* ─── Layout: TOC rail · body · share rail ─────────────── */
.art-section {
  background: #fff;
  padding: 48px var(--space-6) 24px;
}

.art-layout {
  display: grid;
  grid-template-columns: 232px minmax(0, 720px) 64px;
  gap: 48px;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: center;
}

.art-toc {
  position: sticky;
  top: 104px;
  align-self: start;
  max-height: calc(100vh - 130px);
  overflow-y: auto;
}

.art-toc__title {
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin: 0 0 14px;
}

.art-toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-left: 2px solid var(--border-light);
}

.art-toc a {
  display: block;
  font-size: 13.5px;
  line-height: 1.4;
  color: var(--fg-3);
  text-decoration: none;
  padding: 7px 0 7px 16px;
  margin-left: -2px;
  border-left: 2px solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 140ms ease, border-color 140ms ease;
}

.art-toc a.toc-l3 {
  padding-left: 30px;
  font-size: 12.5px;
}

.art-toc a:hover {
  color: var(--violet-600);
}

.art-toc a.active {
  color: var(--violet-600);
  font-weight: var(--fw-semibold);
  border-left-color: var(--violet-500);
}

.art-share {
  position: sticky;
  top: 104px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.art-share__label {
  font-size: 10px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin-bottom: 2px;
}

.art-body {
  min-width: 0;
}

/* ─── Mobile TOC accordion ─────────────────────────────── */
.toc-accordion {
  display: none;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  background: var(--gray-25);
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-5);
}

.toc-accordion summary {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  cursor: pointer;
}

.toc-accordion ul {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
}

.toc-accordion a {
  display: block;
  padding: 6px 0;
  font-size: var(--fs-sm);
  color: var(--fg-2);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toc-accordion a.toc-l3 {
  padding-left: var(--space-4);
  color: var(--fg-3);
}

.toc-accordion a:hover {
  color: var(--violet-600);
}

.art-share-inline {
  display: none;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: var(--space-8);
  padding-top: var(--space-5);
  border-top: 1px solid var(--border-light);
}

.art-share-inline__label {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-2);
  margin-right: 4px;
}

.art-share-inline :deep(.social__links) {
  flex-direction: row;
}

@media (max-width: 1080px) {
  .art-layout {
    grid-template-columns: 200px minmax(0, 1fr);
    gap: 40px;
  }

  .art-share {
    display: none;
  }

  .art-share-inline {
    display: flex;
  }
}

@media (max-width: 900px) {
  .art-layout {
    grid-template-columns: 1fr;
    gap: 0;
    max-width: 720px;
  }

  .art-toc {
    display: none;
  }

  .toc-accordion {
    display: block;
  }

  .art-hero {
    padding: 100px var(--space-4) 32px;
  }
}

.blog__content :deep(img) {
  cursor: zoom-in;
}

/* ─── Image popup ──────────────────────────────────────── */
.popup__img {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(90, 90, 90, 0.96);
  height: 100%;
  width: 100%;
  z-index: 99999;
  display: none;
}

.popup__img span {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 30px;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
  z-index: 1;
}

.popup__img img {
  cursor: zoom-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  .popup__img img {
    width: 90%;
  }
}
</style>

<style>
/* Article body typography (CKEditor/markdown output) */
.nuxt-content {
  font-size: 17px;
  line-height: 1.75;
  color: var(--fg-2);
}

.nuxt-content > p:first-of-type {
  font-size: 19px;
  line-height: 1.65;
  color: var(--fg-1);
}

.nuxt-content p {
  margin-bottom: 18px;
}

.nuxt-content h2 {
  font-size: 26px;
  font-weight: var(--fw-bold);
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--fg-1);
  margin-top: 44px;
  margin-bottom: 16px;
  scroll-margin-top: 96px;
}

.nuxt-content h3 {
  font-size: 19px;
  font-weight: var(--fw-semibold);
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin-top: 30px;
  margin-bottom: 12px;
  scroll-margin-top: 96px;
}

.nuxt-content strong {
  color: var(--fg-1);
  font-weight: var(--fw-semibold);
}

.nuxt-content a {
  color: var(--violet-500);
  font-weight: var(--fw-medium);
  text-decoration: none;
  border-bottom: 1px solid var(--violet-100);
  transition: border-color 150ms ease, color 150ms ease;
}

.nuxt-content a:hover {
  color: var(--violet-700);
  border-color: var(--violet-300);
}

.nuxt-content img {
  height: auto;
  width: 100%;
  margin: var(--space-2) 0 var(--space-4);
  border-radius: var(--r-xl);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-xs);
}

.nuxt-content ul li,
.nuxt-content ol li {
  margin-bottom: 12px;
}

.nuxt-content blockquote {
  border-left: 3px solid var(--violet-300);
  padding: 6px 0 6px 22px;
  margin: 26px 0;
  font-size: 18px;
  line-height: 1.6;
  color: var(--fg-1);
  font-style: italic;
}

.nuxt-content blockquote p:last-child {
  margin-bottom: 0;
}

.nuxt-content table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-6) 0;
  font-size: var(--fs-sm);
}

.nuxt-content table th {
  background: var(--gray-50);
  color: var(--fg-1);
  font-weight: var(--fw-semibold);
  text-align: left;
}

.nuxt-content table th,
.nuxt-content table td {
  border: 1px solid var(--border-light);
  padding: 10px 14px;
}

.nuxt-content code {
  background: var(--gray-100);
  border-radius: var(--r);
  padding: 2px 6px;
  font-size: 14px;
  color: var(--violet-600);
}

.nuxt-content pre {
  background: var(--gray-900);
  color: #e4e7ec;
  border-radius: var(--r-xl);
  padding: var(--space-4) var(--space-5);
  overflow-x: auto;
  margin: var(--space-6) 0;
}

.nuxt-content pre code {
  background: none;
  color: inherit;
  padding: 0;
}

.nuxt-content hr {
  border: 0;
  border-top: 1px solid var(--border-light);
  margin: var(--space-8) 0;
}

@media only screen and (max-width: 768px) {
  .nuxt-content h2 {
    margin-top: 32px;
  }

  .nuxt-content h3 {
    margin-top: 24px;
  }
}
</style>
