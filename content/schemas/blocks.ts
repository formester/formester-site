import { z } from '@nuxt/content'
import {
  anyObject,
  media,
  id,
  textRun,
  titleRuns,
  button,
  buttons,
  itemListEntry,
  statEntry,
  clickTrigger,
} from './shared'

// One strict shape per real `__component` type (36 total). See
// content.config.ts for the Phase 4 design rationale.

export const rawHtml = z.object({
  __component: z.literal('micro-components.raw-html'),
  id,
  markup: z.string(),
  useContainer: z.boolean().nullable().optional(),
})

export const heroV2 = z.object({
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

export const trustSeals = z.object({
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

export const faqs = z.object({
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

export const cardGrid = z.object({
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

export const testimonials = z.object({
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

export const ctaDark = z.object({
  __component: z.literal('macro-components.cta-dark'),
  id,
  badge: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  trustText: z.string().nullable().optional(),
  buttons,
})

export const stickyStepsSection = z.object({
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

export const integrationsGrid = z.object({
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

export const testimonialWall = z.object({
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

export const cta = z.object({
  __component: z.literal('macro-components.cta'),
  id,
  ctaValue: anyObject.nullable().optional(),
})

export const featureShowcase = z.object({
  __component: z.literal('macro-components.feature-showcase'),
  id,
  description: z.string().nullable().optional(),
  steps: z.boolean().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

export const trustbadges = z.object({
  __component: z.literal('macro-components.trustbadges'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  badges: z.array(anyObject).default([]),
})

export const standoutFeatureDetail = z.object({
  __component: z.literal('macro-components.standout-feature-detail'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

export const table = z.object({
  __component: z.literal('macro-components.table'),
  id,
  highlightColumn: z.string().nullable().optional(),
  title: titleRuns,
  rows: z.array(z.object({ id, rowType: z.string() }).passthrough()).default([]),
})

export const threeColumnBenefits = z.object({
  __component: z.literal('macro-components.three-column-benefits'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

export const statsBanner = z.object({
  __component: z.literal('macro-components.stats-banner'),
  id,
  variant: z.string().nullable().optional(),
  eyebrow: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  stats: z.array(statEntry).default([]),
})

export const alternatingRows = z.object({
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

export const simpleStepsCreate = z.object({
  __component: z.literal('macro-components.simple-steps-create'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

export const integrationsShowcase = z.object({
  __component: z.literal('macro-components.integrations-showcase'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
})

export const threeColumnTemplate = z.object({
  __component: z.literal('macro-components.three-column-template'),
  id,
  description: z.string().nullable().optional(),
  slug: z.string().nullable().optional(),
  title: titleRuns,
  button: button.nullable().optional(),
  specificTemplate: z.array(anyObject).default([]),
})

export const calloutDiagram = z.object({
  __component: z.literal('macro-components.callout-diagram'),
  id,
  eyebrow: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  mockHtml: z.string().nullable().optional(),
  title: titleRuns,
  pins: z.array(z.object({ id, label: z.string(), body: z.string() }).passthrough()).default([]),
})

export const aiHero = z.object({
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

export const heroTabShowcase = z.object({
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

export const featureDetailSection = z.object({
  __component: z.literal('macro-components.feature-detail-section'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

export const heroCenteredDark = z.object({
  __component: z.literal('macro-components.hero-centered-dark'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  button: button.nullable().optional(),
  clickTriggers: z.array(clickTrigger).default([]),
  background: media,
})

export const collapsibleItemList = z.object({
  __component: z.literal('macro-components.collapsible-item-list'),
  id,
  heading: titleRuns.optional(),
  itemList: z.array(itemListEntry).default([]),
})

export const comparisonTable = z.object({
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

export const usecases = z.object({
  __component: z.literal('macro-components.usecases'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  usecase: z.array(z.object({ id, title: z.string(), description: z.string().nullable().optional(), image: media }).passthrough()).default([]),
})

export const richText = z.object({
  __component: z.literal('macro-components.rich-text'),
  id,
  code: z.string(),
  cardUI: z.boolean().nullable().optional(),
})

export const heroRowLayout = z.object({
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

export const statsSection = z.object({
  __component: z.literal('macro-components.stats-section'),
  id,
  badge: z.string().nullable().optional(),
  heading: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  background: z.string().nullable().optional(),
  stats: z.array(statEntry).default([]),
})

export const cardCarousel = z.object({
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

export const twoColumnBenefits = z.object({
  __component: z.literal('macro-components.two-column-benefits'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  itemList: z.array(itemListEntry).default([]),
})

export const integrationsDirectory = z.object({
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

export const faqsWithCategories = z.object({
  __component: z.literal('macro-components.faqs-with-categories'),
  id,
  description: z.string().nullable().optional(),
  title: titleRuns,
  categories: z.array(anyObject).default([]),
})

export const block = z.discriminatedUnion('__component', [
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
