import { z } from '@nuxt/content'

// IMPORTANT (Phase 0 bug, don't reintroduce): always wrap nested object/array
// fields as `z.object({...}).catchall(z.any())`, never a bare `z.any()`.
const anyObject = z.object({}).catchall(z.any())
const media = anyObject.nullable().optional()

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
  authorImage: z.string().optional(),
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
