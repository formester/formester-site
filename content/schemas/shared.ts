import { z } from '@nuxt/content'

// Shared building blocks reused across the per-component schemas in
// `blocks.ts`. See content.config.ts for the design rationale (why nested
// Strapi media objects stay permissive, why item objects use `.passthrough()`).
//
// IMPORTANT (Phase 0 bug, don't reintroduce): always wrap nested object/array
// fields as `z.object({...}).catchall(z.any())`, never a bare `z.any()` — see
// "Bugs found and fixed" in plans/session-handoff.md.

export const anyObject = z.object({}).catchall(z.any())
export const media = anyObject.nullable().optional()
export const id = z.number().optional()

export const textRun = z.object({
  id,
  text: z.string(),
  highlight: z.boolean().nullable().optional(),
  color: z.string().nullable().optional(),
  bold: z.boolean().nullable().optional(),
}).passthrough()
export const titleRuns = z.array(textRun).default([])

export const button = z.object({
  id,
  link: z.string(),
  text: z.string(),
  type: z.string().nullable().optional(),
  showArrow: z.boolean().nullable().optional(),
}).passthrough()
export const buttons = z.array(button).default([])

export const itemListEntry = z.object({
  id,
  title: z.string(),
  description: z.string().nullable().optional(),
  description_markdown: z.string().nullable().optional(),
  icon: media,
  cardImage: media,
}).passthrough()

export const statEntry = z.object({
  id,
  value: z.string(),
  label: z.string(),
}).passthrough()

export const clickTrigger = z.object({ id, text: z.string() }).passthrough()
