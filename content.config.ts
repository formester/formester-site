import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Phase 4 — schema hardening. Each real `__component` type from the Strapi
// dynamic zones gets a strict shape instead of the Phase 0 permissive
// `{__component: string, ...any}` catch-all. This is what lets Nuxt Studio
// generate a real per-field form for every block (see plans/nuxt-content-migration.md).
//
// Design choices, deliberate:
// - Nested Strapi *media* objects (image/icon/cardImage/companyLogo/background)
//   are NOT modeled field-by-field — their shape is raw Strapi upload-provider
//   internals (formats.large/medium/small/thumbnail, hash, provider_metadata...)
//   that no renderer here reads beyond a URL. They stay permissive (`media`,
//   below). Hardening those isn't worth it until Studio's media picker replaces
//   them with a plain URL string.
// - Nested item objects (itemList entries, cards, testimonials, rows, ...) use
//   `.passthrough()`: known/rendered fields are typed, unrecognized incidental
//   Strapi fields (id, createdAt, publishedAt, locale, localizations, ...) are
//   preserved rather than rejected. This is the deliberate middle ground for
//   this phase — strict on what's authored/rendered, tolerant of CMS exhaust.
// - Every object that PageComponents.vue keys by `.id` (component blocks
//   themselves) keeps `id` as an explicit, optional field.
//
// IMPORTANT (carried over from the Phase 0 bug): always wrap nested
// object/array fields as `z.object({...}).catchall(z.any())`, never a bare
// `z.any()` — see "Bugs found and fixed" in plans/session-handoff.md.

const anyObject = z.object({}).catchall(z.any())
const media = anyObject.nullable().optional()
const id = z.number().optional()

const textRun = z.object({
  id,
  text: z.string(),
  highlight: z.boolean().nullable().optional(),
  color: z.string().nullable().optional(),
  bold: z.boolean().nullable().optional(),
}).passthrough()
const titleRuns = z.array(textRun).default([])

const button = z.object({
  id,
  link: z.string(),
  text: z.string(),
  type: z.string().nullable().optional(),
  showArrow: z.boolean().nullable().optional(),
}).passthrough()
const buttons = z.array(button).default([])

const itemListEntry = z.object({
  id,
  title: z.string(),
  description: z.string().nullable().optional(),
  description_markdown: z.string().nullable().optional(),
  icon: media,
  cardImage: media,
}).passthrough()

const statEntry = z.object({
  id,
  value: z.string(),
  label: z.string(),
}).passthrough()

const clickTrigger = z.object({ id, text: z.string() }).passthrough()

// --- one strict shape per real `__component` type (36 total) ---

const rawHtml = z.object({
  __component: z.literal('micro-components.raw-html'),
  id,
  markup: z.string(),
  useContainer: z.boolean().nullable().optional(),
})

const heroV2 = z.object({
  __component: z.literal('macro-components.hero-v2'),
  id,
  description: z.string().nullable().optional(),
  trustText: z.string().nullable().optional(),
  blobColorA: z.string().nullable().optional(),
  blobColorB: z.string().nullable().optional(),
  blobColorC: z.string().nullable().optional(),
  mockupHtml: z.string().nullable().optional(),
  layout: z.string().nullable().optional(),
  title: titleRuns,
  buttons,
  badge: z.object({ id, text: z.string(), tag: z.string().nullable().optional(), link: z.string().nullable().optional() }).passthrough().nullable().optional(),
  tabCardContent: z.array(z.object({
    id,
    navTitle: z.string().nullable().optional(),
    title: z.string().nullable().optional(),
    image: media,
    feature: z.array(anyObject).default([]),
  }).passthrough()).default([]),
  image: media,
})

const trustSeals = z.object({
  __component: z.literal('macro-components.trust-seals'),
  id,
  label: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  showTrustBadges: z.boolean().nullable().optional(),
  rawHtml: z.string().nullable().optional(),
  title: titleRuns,
  logos: z.array(anyObject).default([]),
})

const faqs = z.object({
  __component: z.literal('macro-components.faqs'),
  id,
  description: z.string().nullable().optional(),
  centered: z.boolean().nullable().optional(),
  title: titleRuns,
  faqList: z.array(z.object({
    id,
    header: z.string(),
    body: z.string(),
    body_markdown: z.string().nullable().optional(),
    list: z.array(anyObject).default([]),
  }).passthrough()).default([]),
})

const cardGrid = z.object({
  __component: z.literal('macro-components.card-grid'),
  id,
  eyebrow: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  columns: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  title: titleRuns,
  cards: z.array(z.object({
    id,
    tag: z.string().nullable().optional(),
    tagColor: z.string().nullable().optional(),
    title: z.string().nullable().optional(),
    body: z.string().nullable().optional(),
    mockHtml: z.string().nullable().optional(),
    icon: media,
  }).passthrough()).default([]),
})

const testimonials = z.object({
  __component: z.literal('macro-components.testimonials'),
  id,
  description: z.string().nullable().optional(),
  version: z.string().nullable().optional(),
  heading: titleRuns,
  testimonials: z.array(z.object({
    id,
    name: z.string(),
    position: z.string().nullable().optional(),
    organization: z.string().nullable().optional(),
    comment: z.string(),
    companyLogo: media,
  }).passthrough()).default([]),
})

const ctaDark = z.object({
  __component: z.literal('macro-components.cta-dark'),
  id,
  badge: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  trustText: z.string().nullable().optional(),
  buttons,
})

const stickyStepsSection = z.object({
  __component: z.literal('macro-components.sticky-steps-section'),
  id,
  badge: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  steps: z.array(z.object({
    id,
    title: z.string(),
    description: z.string().nullable().optional(),
    rawHtml: z.string().nullable().optional(),
    image: media,
  }).passthrough()).default([]),
  buttons,
})

const integrationsGrid = z.object({
  __component: z.literal('macro-components.integrations-grid'),
  id,
  title: z.string().nullable().optional(),
  integrations: z.array(z.object({
    id,
    name: z.string(),
    description: z.string().nullable().optional(),
    link: z.string().nullable().optional(),
  }).passthrough()).default([]),
})

const testimonialWall = z.object({
  __component: z.literal('macro-components.testimonial-wall'),
  id,
  description: z.string().nullable().optional(),
  showG2: z.boolean().nullable().optional(),
  showTrustpilot: z.boolean().nullable().optional(),
  showProductHunt: z.boolean().nullable().optional(),
  showCapterra: z.boolean().nullable().optional(),
  title: titleRuns,
  pickedReviews: z.array(anyObject).default([]),
  excludedReviews: z.array(anyObject).default([]),
})

const cta = z.object({
  __component: z.literal('macro-components.cta'),
  id,
  ctaValue: anyObject.nullable().optional(),
})

const featureShowcase = z.object({
  __component: z.literal('macro-components.feature-showcase'),
  id,
  description: z.string().nullable().optional(),
  steps: z.boolean().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

const trustbadges = z.object({
  __component: z.literal('macro-components.trustbadges'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  badges: z.array(anyObject).default([]),
})

const standoutFeatureDetail = z.object({
  __component: z.literal('macro-components.standout-feature-detail'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

const table = z.object({
  __component: z.literal('macro-components.table'),
  id,
  highlightColumn: z.string().nullable().optional(),
  title: titleRuns,
  rows: z.array(z.object({ id, rowType: z.string() }).passthrough()).default([]),
})

const threeColumnBenefits = z.object({
  __component: z.literal('macro-components.three-column-benefits'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

const statsBanner = z.object({
  __component: z.literal('macro-components.stats-banner'),
  id,
  variant: z.string().nullable().optional(),
  eyebrow: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  stats: z.array(statEntry).default([]),
})

const alternatingRows = z.object({
  __component: z.literal('macro-components.alternating-rows'),
  id,
  eyebrow: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  title: titleRuns,
  rows: z.array(z.object({
    id,
    kicker: z.string().nullable().optional(),
    title: z.string(),
    body: z.string().nullable().optional(),
    mediaHtml: z.string().nullable().optional(),
  }).passthrough()).default([]),
})

const simpleStepsCreate = z.object({
  __component: z.literal('macro-components.simple-steps-create'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

const integrationsShowcase = z.object({
  __component: z.literal('macro-components.integrations-showcase'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
})

const threeColumnTemplate = z.object({
  __component: z.literal('macro-components.three-column-template'),
  id,
  description: z.string().nullable().optional(),
  slug: z.string().nullable().optional(),
  title: titleRuns,
  button: button.nullable().optional(),
  specificTemplate: z.array(anyObject).default([]),
})

const calloutDiagram = z.object({
  __component: z.literal('macro-components.callout-diagram'),
  id,
  eyebrow: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  mockHtml: z.string().nullable().optional(),
  title: titleRuns,
  pins: z.array(z.object({ id, label: z.string(), body: z.string() }).passthrough()).default([]),
})

const aiHero = z.object({
  __component: z.literal('macro-components.ai-hero'),
  id,
  description: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  hideIcons: z.boolean().nullable().optional(),
  buttonText: z.string().nullable().optional(),
  placeholder: z.string().nullable().optional(),
  badgeText: z.string().nullable().optional(),
  title: titleRuns,
  suggestions: z.array(z.object({ id, text: z.string(), label: z.string().nullable().optional() }).passthrough()).default([]),
  footerItems: z.array(clickTrigger).default([]),
})

const heroTabShowcase = z.object({
  __component: z.literal('macro-components.hero-tab-showcase'),
  id,
  description: z.string().nullable().optional(),
  hideIcons: z.boolean().nullable().optional(),
  title: titleRuns,
  button: buttons,
  clickTriggers: z.array(anyObject).default([]),
  tabCardContent: z.array(z.object({
    id,
    navTitle: z.string().nullable().optional(),
    title: z.string().nullable().optional(),
    image: media,
    feature: z.array(z.object({ id, featureTitle: z.string(), icon: media }).passthrough()).default([]),
  }).passthrough()).default([]),
})

const featureDetailSection = z.object({
  __component: z.literal('macro-components.feature-detail-section'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

const heroCenteredDark = z.object({
  __component: z.literal('macro-components.hero-centered-dark'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  button: button.nullable().optional(),
  clickTriggers: z.array(clickTrigger).default([]),
  background: media,
})

const collapsibleItemList = z.object({
  __component: z.literal('macro-components.collapsible-item-list'),
  id,
  heading: titleRuns.optional(),
  itemList: z.array(itemListEntry).default([]),
})

const comparisonTable = z.object({
  __component: z.literal('macro-components.comparison-table'),
  id,
  eyebrow: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  colUs: z.string().nullable().optional(),
  colThem: z.string().nullable().optional(),
  note: z.string().nullable().optional(),
  title: titleRuns,
  rows: z.array(z.object({ id, feature: z.string(), us: z.string().nullable().optional(), them: z.string().nullable().optional() }).passthrough()).default([]),
})

const usecases = z.object({
  __component: z.literal('macro-components.usecases'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  usecase: z.array(z.object({ id, title: z.string(), description: z.string().nullable().optional(), image: media }).passthrough()).default([]),
})

const richText = z.object({
  __component: z.literal('macro-components.rich-text'),
  id,
  code: z.string(),
  cardUI: z.boolean().nullable().optional(),
})

const heroRowLayout = z.object({
  __component: z.literal('macro-components.hero-row-layout'),
  id,
  title: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  video_url: z.string().nullable().optional(),
  titleHtml: z.string().nullable().optional(),
  heroRawHtml: z.string().nullable().optional(),
  buttons,
  badge: anyObject.nullable().optional(),
  titleParts: z.array(anyObject).default([]),
  button: button.nullable().optional(),
  clickTriggers: z.array(clickTrigger).default([]),
  heroImage: media,
  thumbnail: media,
  stats: z.array(anyObject).default([]),
})

const statsSection = z.object({
  __component: z.literal('macro-components.stats-section'),
  id,
  badge: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  stats: z.array(statEntry).default([]),
})

const cardCarousel = z.object({
  __component: z.literal('macro-components.card-carousel'),
  id,
  badge: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  cta: anyObject.nullable().optional(),
  usecases: z.array(z.object({
    id,
    category: z.string(),
    description: z.string().nullable().optional(),
    icon: z.string().nullable().optional(),
    iconBg: z.string().nullable().optional(),
  }).passthrough()).default([]),
})

const twoColumnBenefits = z.object({
  __component: z.literal('macro-components.two-column-benefits'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

const integrationsDirectory = z.object({
  __component: z.literal('macro-components.integrations-directory'),
  id,
  eyebrow: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  searchPlaceholder: z.string().nullable().optional(),
  directoryEyebrow: z.string().nullable().optional(),
  directoryDescription: z.string().nullable().optional(),
  metaText: z.string().nullable().optional(),
  showMarquee: z.boolean().nullable().optional(),
  wedgeTitle: z.string().nullable().optional(),
  wedgeBody: z.string().nullable().optional(),
  title: titleRuns,
  buttons,
  integrations: z.array(z.object({
    id,
    name: z.string(),
    description: z.string().nullable().optional(),
    link: z.string().nullable().optional(),
    category: z.string().nullable().optional(),
    badge: z.string().nullable().optional(),
    iconUrl: z.string().nullable().optional(),
  }).passthrough()).default([]),
  directoryTitle: titleRuns,
  wedgeButtons: buttons,
})

const faqsWithCategories = z.object({
  __component: z.literal('macro-components.faqs-with-categories'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  categories: z.array(anyObject).default([]),
})

const block = z.discriminatedUnion('__component', [
  rawHtml,
  heroV2,
  trustSeals,
  faqs,
  cardGrid,
  testimonials,
  ctaDark,
  stickyStepsSection,
  integrationsGrid,
  testimonialWall,
  cta,
  featureShowcase,
  trustbadges,
  standoutFeatureDetail,
  table,
  threeColumnBenefits,
  statsBanner,
  alternatingRows,
  simpleStepsCreate,
  integrationsShowcase,
  threeColumnTemplate,
  calloutDiagram,
  aiHero,
  heroTabShowcase,
  featureDetailSection,
  heroCenteredDark,
  collapsibleItemList,
  comparisonTable,
  usecases,
  richText,
  heroRowLayout,
  statsSection,
  cardCarousel,
  twoColumnBenefits,
  integrationsDirectory,
  faqsWithCategories,
])

const pageMeta = z.object({
  head: anyObject.optional(),
  jsonld: z.array(anyObject).default([]),
  components: z.array(block).default([]),
})

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'data',
      source: 'home.json',
      schema: pageMeta,
    }),
    pages: defineCollection({
      type: 'data',
      source: 'pages/**/*.json',
      schema: pageMeta.extend({
        slug: z.string(),
      }),
    }),
    features: defineCollection({
      type: 'data',
      source: 'features/**/*.json',
      schema: pageMeta.extend({
        slug: z.string(),
        navTitle: z.string().optional(),
        navDescription: z.string().optional(),
        featureCategory: z.string().optional(),
        featurePlan: z.string().optional(),
      }),
    }),
  },
})
