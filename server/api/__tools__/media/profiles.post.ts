import type { S3Profile } from '../../../utils/s3Config'

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const body = await readBody(event)
  const required = ['name', 'accessKeyId', 'secretAccessKey', 'region', 'bucket', 'acl']
  for (const field of required) {
    if (!body?.[field]) {
      throw createError({ statusCode: 400, statusMessage: `Missing field: ${field}` })
    }
  }
  if (!['public-read', 'private'].includes(body.acl)) {
    throw createError({ statusCode: 400, statusMessage: 'acl must be "public-read" or "private"' })
  }

  const store = readStore()
  const id = typeof body.id === 'string' && body.id ? body.id : `conn${Date.now()}`
  const existing = store.profiles.find(p => p.id === id)

  // Allow re-saving without re-entering the masked accessKeyId/secret.
  const secretAccessKey = body.secretAccessKey.startsWith('••••') && existing
    ? existing.secretAccessKey
    : body.secretAccessKey
  const accessKeyId = body.accessKeyId.includes('...') && existing
    ? existing.accessKeyId
    : body.accessKeyId

  const profile: S3Profile = {
    id,
    name: body.name,
    accessKeyId,
    secretAccessKey,
    region: body.region,
    bucket: body.bucket,
    acl: body.acl,
    publicUrlBase: body.publicUrlBase || undefined,
    // Advanced, not present in the config form — see S3Profile comment.
    endpoint: body.endpoint || existing?.endpoint || undefined,
    forcePathStyle: typeof body.forcePathStyle === 'boolean' ? body.forcePathStyle : existing?.forcePathStyle
  }

  upsertProfile(profile)

  return { profile: maskProfile(profile) }
})
