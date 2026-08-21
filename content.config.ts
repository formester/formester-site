import { defineCollection, defineContentConfig } from '@nuxt/content'
import { blog } from './content/schemas/blog'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: blog,
    }),
  },
})
