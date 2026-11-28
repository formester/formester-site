// failOnError is off so one bad CMS page doesn't stop the build, but a page that must exist
// (a workflow template the API lists) has to fail it, or the site serves the 404 page in its place.

/**
 * Throws when any of the given pages was not written, naming each one.
 * @param {{prerenderedRoutes: Array<{route: string, error?: Error}>}} result Nitro's `prerender:done` result
 * @param {Array<string>} routes e.g. ["/workflow-templates/leave-request-approval/"]
 * @throws {Error} e.g. "2 required pages were not prerendered: /workflow-templates/…/"
 */
export function verifyPrerenderedPages({ prerenderedRoutes }, routes) {
  const written = new Set(
    prerenderedRoutes.filter((route) => !route.error).map((route) => withTrailingSlash(route.route))
  )
  const missing = routes.filter((route) => !written.has(withTrailingSlash(route)))
  if (missing.length > 0) {
    throw new Error(`${missing.length} required pages were not prerendered: ${missing.join(', ')}`)
  }
}

function withTrailingSlash(route) {
  return route.endsWith('/') ? route : `${route}/`
}
