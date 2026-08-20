import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const config = getActiveProfile()
  if (!config) {
    throw createError({ statusCode: 400, statusMessage: 'S3 not configured', data: { needsConfig: true } })
  }

  const query = getQuery(event)
  const key = typeof query.key === 'string' ? query.key : ''
  if (!key) {
    throw createError({ statusCode: 400, statusMessage: 'Missing key' })
  }

  if (config.acl === 'public-read') {
    return { url: buildPublicUrl(config, key) }
  }

  const client = getProfileClient(config)
  const url = await getSignedUrl(
    client,
    new GetObjectCommand({ Bucket: config.bucket, Key: key }),
    { expiresIn: 15 * 60 }
  )
  return { url }
})
