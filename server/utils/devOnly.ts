import type { H3Event } from 'h3'

export function assertDevOnly(event: H3Event) {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }
}
