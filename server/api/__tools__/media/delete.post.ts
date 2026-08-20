import { DeleteObjectsCommand } from '@aws-sdk/client-s3'

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const config = getActiveProfile()
  if (!config) {
    throw createError({ statusCode: 400, statusMessage: 'S3 not configured', data: { needsConfig: true } })
  }

  const body = await readBody(event)
  const keys: string[] = Array.isArray(body?.keys) ? body.keys : []
  if (!keys.length) {
    throw createError({ statusCode: 400, statusMessage: 'No keys provided' })
  }

  const client = getProfileClient(config)
  const errors: { key: string; error: string }[] = []

  for (let i = 0; i < keys.length; i += 1000) {
    const batch = keys.slice(i, i + 1000)
    const result = await client.send(new DeleteObjectsCommand({
      Bucket: config.bucket,
      Delete: { Objects: batch.map(Key => ({ Key })) }
    }))
    for (const err of result.Errors || []) {
      errors.push({ key: err.Key || '', error: err.Message || 'Delete failed' })
    }
  }

  return { deleted: keys.length - errors.length, errors }
})
