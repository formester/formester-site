import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Permissive block schema for this phase — one shared shape for every
// macro/micro `__component` type instead of 35+ strict per-type schemas.
// Tightened per-type in a later phase (see plans/nuxt-content-migration.md).
//
// IMPORTANT: use `z.object({...}).catchall(z.any())`, never a bare `z.any()`,
// for any nested object/array field. Nuxt Content v3 maps object-shaped Zod
// schemas to a JSON column, but a bare `z.any()` field gets naively
// stringified (`String(value)` -> "[object Object]") on the way into SQLite
// and comes back corrupted.
const anyObject = z.object({}).catchall(z.any())
const block = z.object({ __component: z.string() }).catchall(z.any())

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
