import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { anyObject } from './content/schemas/shared'
import { block } from './content/schemas/blocks'
import {
  blog,
  formBuilder,
  formBuilderFeature,
  platformTestimonial,
  pdfTemplate,
  recommendedTemplate,
} from './content/schemas/misc'

// Phase 4 — schema hardening. Each real `__component` type from the Strapi
// dynamic zones has a strict shape (see content/schemas/blocks.ts) instead of
// the Phase 0 permissive `{__component: string, ...any}` catch-all. This is
// what lets Nuxt Studio generate a real per-field form for every block (see
// plans/nuxt-content-migration.md).
//
// Design choices, deliberate (see content/schemas/shared.ts for the details):
// - Nested Strapi *media* objects stay permissive — hardening their internal
//   upload-provider shape isn't worth it until Studio's media picker replaces
//   them with a plain URL string.
// - Nested item objects use `.passthrough()`: known/rendered fields are
//   typed, incidental Strapi fields (id, createdAt, locale, ...) pass through
//   rather than getting rejected.
//
// IMPORTANT (carried over from the Phase 0 bug): always wrap nested
// object/array fields as `z.object({...}).catchall(z.any())`, never a bare
// `z.any()` — see "Bugs found and fixed" in plans/session-handoff.md.

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
    blog: defineCollection({
      type: 'data',
      source: 'blog/**/*.json',
      schema: blog,
    }),
    formBuilders: defineCollection({
      type: 'data',
      source: 'comparison-tool/form-builders/**/*.json',
      schema: formBuilder,
    }),
    formBuilderFeatures: defineCollection({
      type: 'data',
      source: 'comparison-tool/form-builder-features/**/*.json',
      schema: formBuilderFeature,
    }),
    platformTestimonials: defineCollection({
      type: 'data',
      source: 'platform-testimonials/**/*.json',
      schema: platformTestimonial,
    }),
    pdfTemplates: defineCollection({
      type: 'data',
      source: 'templates/pdf-templates/**/*.json',
      schema: pdfTemplate,
    }),
    recommendedTemplates: defineCollection({
      type: 'data',
      source: 'templates/recommended-templates/**/*.json',
      schema: recommendedTemplate,
    }),
  },
})
