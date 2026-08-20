import { PutObjectCommand } from '@aws-sdk/client-s3'

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_')
}

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const config = getActiveProfile()
  if (!config) {
    throw createError({ statusCode: 400, statusMessage: 'S3 not configured', data: { needsConfig: true } })
  }

  const parts = await readMultipartFormData(event)
  if (!parts || !parts.length) {
    throw createError({ statusCode: 400, statusMessage: 'No files uploaded' })
  }

  const prefixPart = parts.find(p => p.name === 'prefix')
  const prefix = prefixPart ? prefixPart.data.toString('utf-8') : ''
  const fileParts = parts.filter(p => p.name === 'files' && p.filename)

  if (!fileParts.length) {
    throw createError({ statusCode: 400, statusMessage: 'No files uploaded' })
  }

  const client = getProfileClient(config)

  const results = await Promise.all(fileParts.map(async (part) => {
    const filename = sanitizeFilename(part.filename as string)
    const key = `${prefix}${filename}`
    try {
      await client.send(new PutObjectCommand({
        Bucket: config.bucket,
        Key: key,
        Body: part.data,
        ContentType: part.type,
        ACL: config.acl
      }))
      return { key, filename: part.filename, success: true }
    } catch (error: any) {
      return { key, filename: part.filename, success: false, error: error?.message || 'Upload failed' }
    }
  }))

  return { results }
})
