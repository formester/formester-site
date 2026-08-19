import { z } from '@nuxt/content'
import { anyObject, media, id, titleRuns } from './shared'

// Schemas for the non-page-component collections migrated off Strapi in a
// later pass than Phase 0 (see plans/nuxt-content-migration.md): blog,
// comparison-tool (form-builders + form-builder-features), the
// platform-testimonials TestimonialWall pulls live, and the small
// pdf-templates/recommended-templates metadata layered onto the live
// app.formester.com template data (which stays a live fetch — it's product
// data, not CMS content).

// `type: 'page'` collection — `rawbody` is a reserved Nuxt Content field:
// it's auto-populated with the file's raw, unparsed body text (bypassing
// the markdown-to-AST pipeline), so BlogPostView.vue's own marked()/TOC/FAQ
// pipeline keeps working on a plain string unchanged. The reserved `body`
// field (parsed AST) is unused — getAllBlogs.js maps rawbody -> body at the
// adapter boundary instead.
export const blog = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  author: z.string().optional(),
  authorProfile: z.string().optional(),
  coverImgAlt: z.string().optional(),
  featured: z.boolean().default(false),
  rawbody: z.string(),
  coverImg: media,
  metaImage: z.array(z.object({ imageURL: z.string().optional() }).passthrough()).default([]),
  jsonld: z.array(anyObject).default([]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  publishedAt: z.string().optional(),
})

const planFeature = z.object({
  id,
  value: z.string().optional(),
  feature: z.object({ id, title: z.string(), description: z.string().optional() }).passthrough().nullable().optional(),
}).passthrough()

const plan = z.object({
  id,
  name: z.string(),
  amount: z.number().nullable().optional(),
  features: z.array(planFeature).default([]),
}).passthrough()

// NOTE: `id` is renamed to `strapiId` at the top level of every collection
// below — Nuxt Content reserves a top-level `id` as its own internal
// `TEXT PRIMARY KEY` column, and a conflicting numeric `id` field here
// breaks the generated SQL ("no such column: NaN"). Nested `id` fields
// (inside plan/features arrays above) live inside a JSON column, not as
// their own SQL column, so they're unaffected and stay as `id`.
export const formBuilder = z.object({
  strapiId: id,
  name: z.string(),
  logo: media,
  plan: z.array(plan).default([]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  publishedAt: z.string().optional(),
})

export const formBuilderFeature = z.object({
  strapiId: id,
  title: z.string(),
  description: z.string().optional(),
  category: z.object({ id, name: z.string(), position: z.number().optional() }).passthrough().nullable().optional(),
})

export const platformTestimonial = z.object({
  strapiId: id,
  platform: z.enum(['G2', 'Trustpilot', 'Product Hunt', 'Capterra']),
  rating: z.number().nullable().optional(),
  text: z.string(),
  authorName: z.string().optional(),
  authorRole: z.string().optional(),
  reviewDate: z.string().nullable().optional(),
  verified: z.boolean().default(false),
  hidden: z.boolean().default(false),
})

export const pdfTemplate = z.object({
  slug: z.string(),
  previewImages: z.array(anyObject).default([]),
})

export const recommendedTemplate = z.object({
  specificTemplate: z.string(),
  description: z.string().optional(),
  hideDefaultRecommended: z.boolean().default(false),
  title: titleRuns,
  // Dynamic zone — only macro-components.template-showcase's `tabs` field is
  // ever read (see utils/getRecommendedTemplatesMap.js), so this stays
  // permissive rather than adding a 37th strict block schema for one field.
  content: z.array(anyObject).default([]),
  recommendedTemplates: z.array(z.object({ text: z.string().optional() }).passthrough()).default([]),
})
