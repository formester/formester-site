import readingTime from '../../utils/readingTime.js'
import getSiteMeta from '../../utils/getSiteMeta.js'
import { jsLiteral } from './literals.mjs'
import { normalizeJsonLd } from './process-item.mjs'

// Raw CMS blog attrs (post attrs() unwrap) still carry the Strapi v4
// media-relation shape for coverImg ({data: {attributes: {...}}}) and the
// unnormalized `schema` field (array of {id, type}) — flatten both into the
// shape buildBlogPage()/buildRelatedArticle() expect, same as
// migrate-from-strapi.mjs's migrateBlog() does for the committed
// content/blog/*.md snapshots.
export function normalizeBlogAttrs(raw) {
  const coverAttrs = raw.coverImg?.data?.attributes
  const coverImg = coverAttrs ? { url: coverAttrs.url, width: coverAttrs.width, height: coverAttrs.height } : null
  const jsonld = normalizeJsonLd((raw.schema || []).map((s) => s.type))
  return { ...raw, coverImg, jsonld }
}

function stableHash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h
}

function pickRelatedSlugs(slug, allSlugsSorted) {
  const others = allSlugsSorted.filter((s) => s !== slug)
  if (others.length <= 4) return others
  const start = stableHash(slug) % others.length
  return [0, 1, 2, 3].map((i) => others[(start + i) % others.length])
}

function buildRelatedArticle(entry) {
  const cover = entry.coverImg
  return {
    slug: entry.slug,
    title: entry.title,
    coverImg: cover?.url || null,
    coverImgAlt: entry.coverImgAlt,
    coverImgWidth: cover?.width || 1200,
    coverImgHeight: cover?.height || 630,
    publishedAt: entry.publishedAt,
    readingStats: readingTime(entry.body || ''),
  }
}

// data: a flat blog entry (title, body, slug, coverImg, ...).
// lookupBySlug: Map<slug, blog entry> across the FULL blog set (not just the
// ones being (re)generated this run) — related-article cards need to
// resolve slugs outside the current filter, or they'd 404.
export function buildBlogPage(data, lookupBySlug, allSlugsSorted) {
  const cover = data.coverImg
  const coverUrl = cover?.url || null
  const readingStats = readingTime(data.body || '')

  const blogData = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords,
    author: data.author,
    authorProfile: data.authorProfile,
    coverImgAlt: data.coverImgAlt,
    featured: Boolean(data.featured),
    body: data.body,
    coverImg: coverUrl,
    coverImgWidth: cover?.width || 1200,
    coverImgHeight: cover?.height || 630,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    readingStats,
  }

  const metaArray = getSiteMeta({
    type: 'article',
    url: `https://formester.com/blog/${data.slug}/`,
    title: data.metaTitle,
    description: data.metaDescription,
    mainImage: coverUrl || 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: data.coverImgAlt || 'Formester Logo',
    keywords: data.keywords,
  })

  const headLiteral = {
    title: data.metaTitle,
    meta: [
      ...metaArray,
      { property: 'article:published_time', content: data.publishedAt },
      { property: 'article:modified_time', content: data.updatedAt },
      { name: 'twitter:label1', content: 'Written by' },
      { name: 'twitter:data1', content: data.author },
      { name: 'author', property: 'article:author', content: data.author },
      { name: 'publisher', property: 'article:publisher', content: 'Formester' },
      { name: 'publish_date', property: 'og:publish_date', content: data.publishedAt },
    ],
    link: [{ rel: 'canonical', href: `https://formester.com/blog/${data.slug}/` }],
  }

  const jsonldLiteral = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://formester.com/blog/${data.slug}/` },
      headline: data.title,
      description: data.description,
      image: coverUrl ? [coverUrl] : ['https://formester.com/formester-logo-meta-image.png'],
      author: { '@type': 'Person', name: data.author, url: data.authorProfile },
      publisher: {
        '@type': 'Organization',
        name: 'Formester',
        logo: { '@type': 'ImageObject', url: 'https://formester.com/logo.png' },
      },
      datePublished: data.publishedAt,
    },
    ...(data.jsonld || []),
  ]

  const relatedSlugs = pickRelatedSlugs(data.slug, allSlugsSorted)
  const relatedArticles = relatedSlugs.map((s) => buildRelatedArticle(lookupBySlug.get(s)))

  const blogPostViewData = {
    title: blogData.title,
    body: blogData.body,
    author: blogData.author,
    authorProfile: blogData.authorProfile,
    coverImgUrl: null,
    coverImgAlt: blogData.coverImgAlt,
    publishedAt: blogData.publishedAt,
    readingStats: blogData.readingStats,
  }

  const templateLines = [
    '<template>',
    '  <div>',
    '    <div class="read-progress" aria-hidden="true">',
    '      <div class="read-progress__fill" :style="{ transform: `scaleX(${readProgress})` }"></div>',
    '    </div>',
    '',
    '    <div class="mb-3rem">',
    '      <BlogPostView :blog-data="blogPostViewData">',
    '        <template #actions>',
    '          <div class="social__links">',
    '            <a',
    '              :href="`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${blogData.title} by @_Formester_ `"',
    "              @click=\"googleAnalytics('twitter')\"",
    '              class="social-icons"',
    '              target="_blank"',
    '            >',
    '              <IconXSocial />',
    '            </a>',
    '            <a',
    '              :href="`https://www.facebook.com/sharer.php?u=${encodedUrl}`"',
    "              @click=\"googleAnalytics('facebook')\"",
    '              class="social-icons"',
    '              target="_blank"',
    '            >',
    '              <IconFacebookSocial />',
    '            </a>',
    '            <a',
    '              :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`"',
    "              @click=\"googleAnalytics('linkedin')\"",
    '              class="social-icons"',
    '              target="_blank"',
    '            >',
    '              <IconLinkedinSocial />',
    '            </a>',
    '            <span class="social-icons" @click="copyToClipboard">',
    '              <IconLinkChain />',
    '            </span>',
    '          </div>',
    '        </template>',
    '      </BlogPostView>',
    '      <notifications position="bottom right" class="my-notification" />',
    '',
    '      <div v-if="relatedArticles.length" class="container related-container">',
    '        <div class="related-section">',
    '          <div class="section-label">',
    '            <h2>Related Blogs</h2>',
    '            <span class="rule"></span>',
    '          </div>',
    '          <div class="related-grid">',
    '            <RelatedArticleCard',
    '              v-for="relatedArticle in relatedArticles"',
    '              :key="relatedArticle.slug"',
    '              :article="relatedArticle"',
    '            />',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',
    '    <CallToActionSection />',
    '  </div>',
    '</template>',
  ].join('\n')

  const scriptLines = [
    "import IconXSocial from '@/components/icons/IconXSocial.vue'",
    "import IconFacebookSocial from '@/components/icons/IconFacebookSocial.vue'",
    "import IconLinkedinSocial from '@/components/icons/IconLinkedinSocial.vue'",
    "import IconLinkChain from '@/components/icons/IconLinkChain.vue'",
    '',
    'const config = useRuntimeConfig()',
    'const route = useRoute()',
    'const { $notify } = useNuxtApp()',
    '',
    `const blogData = ${jsLiteral(blogData)}`,
    '',
    `const relatedArticles = ${jsLiteral(relatedArticles)}`,
    '',
    `const blogPostViewData = ${jsLiteral(blogPostViewData)}`,
    '',
    'const readProgress = ref(0)',
    'const onScroll = () => {',
    '  const doc = document.documentElement',
    '  const total = doc.scrollHeight - window.innerHeight',
    '  readProgress.value = total > 0 ? Math.min(1, window.scrollY / total) : 0',
    '}',
    '',
    'onMounted(() => {',
    "  window.addEventListener('scroll', onScroll, { passive: true })",
    '  onScroll()',
    '})',
    '',
    'onBeforeUnmount(() => {',
    "  window.removeEventListener('scroll', onScroll)",
    '})',
    '',
    'const copyToClipboard = () => {',
    '  if (process.client) {',
    '    navigator.clipboard.writeText(window.location.href).then(() => {',
    "      \$notify({ type: 'success', text: 'Link copied to clipboard' })",
    '    })',
    '  }',
    "  googleAnalytics('custom_link')",
    '}',
    '',
    'const googleAnalytics = (platform) => {',
    "  if (typeof gtag !== 'undefined') {",
    "    gtag('event', 'share', {",
    '      method: platform,',
    "      content_type: 'blog',",
    '      item_id: blogData.title,',
    '    })',
    '  }',
    '}',
    '',
    'const encodedUrl = computed(() => encodeURIComponent(config.public.baseUrl + route.fullPath))',
    '',
    `useHead(${jsLiteral(headLiteral)})`,
    `useJsonld(${jsLiteral(jsonldLiteral)})`,
  ].join('\n')

  const styleBlock = [
    '<style scoped>',
    '.read-progress {',
    '  position: fixed;',
    '  top: 0;',
    '  left: 0;',
    '  right: 0;',
    '  height: 3px;',
    '  z-index: 2000;',
    '  background: transparent;',
    '  pointer-events: none;',
    '}',
    '',
    '.read-progress__fill {',
    '  height: 100%;',
    '  background: linear-gradient(90deg, var(--violet-300), var(--violet-500));',
    '  transform-origin: left;',
    '  transform: scaleX(0);',
    '}',
    '',
    '.mb-3rem {',
    '  margin-bottom: 3rem;',
    '}',
    '',
    '.social__links {',
    '  display: flex;',
    '  flex-direction: column;',
    '  gap: 10px;',
    '}',
    '',
    '.social-icons {',
    '  display: inline-flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  width: 40px;',
    '  height: 40px;',
    '  border-radius: 11px;',
    '  border: 1px solid var(--border-light);',
    '  background: #fff;',
    '  cursor: pointer;',
    '  color: var(--fg-3);',
    '  transition: all 150ms ease;',
    '}',
    '',
    '.social-icons:hover {',
    '  background: var(--bg-violet-25);',
    '  border-color: var(--violet-300);',
    '  color: var(--violet-600);',
    '  transform: translateY(-2px);',
    '}',
    '',
    '.related-container {',
    '  max-width: 1140px;',
    '}',
    '',
    '.section-label {',
    '  display: flex;',
    '  align-items: baseline;',
    '  gap: 12px;',
    '  margin-bottom: 26px;',
    '}',
    '',
    '.section-label h2 {',
    '  font-size: 21px;',
    '  font-weight: var(--fw-bold);',
    '  letter-spacing: -0.01em;',
    '  color: var(--fg-1);',
    '  margin: 0;',
    '}',
    '',
    '.section-label .rule {',
    '  flex: 1;',
    '  height: 1px;',
    '  background: var(--border-light);',
    '}',
    '',
    '.related-section {',
    '  margin-top: var(--space-10);',
    '  padding-top: var(--space-10);',
    '  border-top: 1px solid var(--border-light);',
    '}',
    '',
    '.related-grid {',
    '  display: grid;',
    '  grid-template-columns: repeat(4, 1fr);',
    '  gap: var(--space-4);',
    '}',
    '',
    '@media (max-width: 1100px) {',
    '  .related-grid {',
    '    grid-template-columns: repeat(2, 1fr);',
    '  }',
    '}',
    '',
    '@media (max-width: 600px) {',
    '  .related-grid {',
    '    grid-template-columns: 1fr;',
    '  }',
    '}',
    '</style>',
  ].join('\n')

  return `${templateLines}\n\n<script setup>\n${scriptLines}\n</script>\n\n${styleBlock}\n`
}
