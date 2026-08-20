export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const body = await readBody(event)
  const id = typeof body?.id === 'string' ? body.id : ''
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing id' })
  }

  const store = setActiveProfile(id)
  return { activeProfileId: store.activeProfileId }
})
