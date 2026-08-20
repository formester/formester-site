import { HeadBucketCommand, S3Client } from '@aws-sdk/client-s3'

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const body = await readBody(event)

  // Allow testing a profile that's still using its masked accessKeyId/secret (already saved).
  let secretAccessKey = body?.secretAccessKey || ''
  let accessKeyId = body?.accessKeyId || ''
  const existing = body?.id ? readProfiles().find(p => p.id === body.id) : null
  if (secretAccessKey.startsWith('••••') && existing) secretAccessKey = existing.secretAccessKey
  if (accessKeyId.includes('...') && existing) accessKeyId = existing.accessKeyId

  if (!accessKeyId || !secretAccessKey || !body?.bucket || !body?.region) {
    return { ok: false, message: "Couldn't connect. Check the access key, secret, and bucket name." }
  }

  const client = new S3Client({
    region: body.region,
    credentials: { accessKeyId, secretAccessKey },
    ...(body.endpoint ? { endpoint: body.endpoint, forcePathStyle: body.forcePathStyle ?? true } : {})
  })

  try {
    await client.send(new HeadBucketCommand({ Bucket: body.bucket }))
    return { ok: true }
  } catch (error: any) {
    return { ok: false, message: error?.message || "Couldn't connect. Check the access key, secret, and bucket name." }
  }
})
