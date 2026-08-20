import { CopyObjectCommand, DeleteObjectsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'

// Percent-encode each path segment but keep the "/" separators literal — S3's
// CopySource resolves the key by its literal path, so encoding the slashes
// themselves (as plain encodeURIComponent would) breaks any nested key.
function encodeS3Key(key: string) {
  return key.split('/').map(encodeURIComponent).join('/')
}

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const config = getActiveProfile()
  if (!config) {
    throw createError({ statusCode: 400, statusMessage: 'S3 not configured', data: { needsConfig: true } })
  }

  const body = await readBody(event)
  const key = typeof body?.key === 'string' ? body.key : ''
  const newName = typeof body?.newName === 'string' ? body.newName.trim() : ''
  const isFolder = !!body?.isFolder
  if (!key || !newName) {
    throw createError({ statusCode: 400, statusMessage: 'Missing key or newName' })
  }

  const client = getProfileClient(config)
  const trimmedKey = isFolder ? key.replace(/\/$/, '') : key
  const parent = trimmedKey.includes('/') ? trimmedKey.slice(0, trimmedKey.lastIndexOf('/') + 1) : ''
  const newKey = isFolder ? `${parent}${newName}/` : `${parent}${newName}`

  if (newKey === key) {
    return { key: newKey }
  }

  if (!isFolder) {
    await client.send(new CopyObjectCommand({
      Bucket: config.bucket,
      CopySource: `/${config.bucket}/${encodeS3Key(key)}`,
      Key: newKey,
      ACL: config.acl
    }))
    await client.send(new DeleteObjectsCommand({ Bucket: config.bucket, Delete: { Objects: [{ Key: key }] } }))
    return { key: newKey }
  }

  // Folder rename: copy every object under the old prefix to the new prefix, then
  // delete the old ones. S3 has no native "move", so this is copy-then-delete.
  const oldPrefix = `${trimmedKey}/`
  const newPrefix = newKey
  const errors: { key: string; error: string }[] = []
  const oldKeys: string[] = []
  let continuationToken: string | undefined

  do {
    const page = await client.send(new ListObjectsV2Command({
      Bucket: config.bucket,
      Prefix: oldPrefix,
      ContinuationToken: continuationToken
    }))
    for (const item of page.Contents || []) {
      if (!item.Key) continue
      oldKeys.push(item.Key)
      const relative = item.Key.slice(oldPrefix.length)
      const destKey = `${newPrefix}${relative}`
      try {
        await client.send(new CopyObjectCommand({
          Bucket: config.bucket,
          CopySource: `/${config.bucket}/${encodeS3Key(item.Key)}`,
          Key: destKey,
          ACL: config.acl
        }))
      } catch (error: any) {
        errors.push({ key: item.Key, error: error?.message || 'Copy failed' })
      }
    }
    continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined
  } while (continuationToken)

  const copiedKeys = oldKeys.filter(k => !errors.some(e => e.key === k))
  for (let i = 0; i < copiedKeys.length; i += 1000) {
    const batch = copiedKeys.slice(i, i + 1000)
    const result = await client.send(new DeleteObjectsCommand({
      Bucket: config.bucket,
      Delete: { Objects: batch.map(Key => ({ Key })) }
    }))
    for (const err of result.Errors || []) {
      errors.push({ key: err.Key || '', error: err.Message || 'Delete failed' })
    }
  }

  return { key: newKey, errors }
})
