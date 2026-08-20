import { GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export default defineEventHandler(async (event) => {
  assertDevOnly(event)

  const config = getActiveProfile()
  if (!config) {
    throw createError({ statusCode: 400, statusMessage: 'S3 not configured', data: { needsConfig: true } })
  }

  const query = getQuery(event)
  const prefix = typeof query.prefix === 'string' ? query.prefix : ''
  const search = typeof query.search === 'string' ? query.search.toLowerCase() : ''
  const continuationToken = typeof query.continuationToken === 'string' ? query.continuationToken : undefined
  // Used to enumerate every object under a prefix (e.g. to delete/rename a whole
  // "folder"), bypassing the delimiter-based one-level listing.
  const recursive = query.recursive === '1' || query.recursive === 'true'

  const client = getProfileClient(config)
  const result = await client.send(new ListObjectsV2Command({
    Bucket: config.bucket,
    Prefix: prefix || undefined,
    Delimiter: (search || recursive) ? undefined : '/',
    ContinuationToken: continuationToken,
    MaxKeys: 200
  }))

  const folders = (result.CommonPrefixes || [])
    .map(p => p.Prefix)
    .filter((p): p is string => Boolean(p))

  let contents = result.Contents || []
  // S3 has no full-text search — filter the listed page by substring match on key.
  if (search) {
    contents = contents.filter(item => item.Key && item.Key.toLowerCase().includes(search) && item.Key !== prefix)
  } else {
    contents = contents.filter(item => item.Key !== prefix)
  }

  // Presigning is a local SigV4 computation (no network round-trip), so it's
  // cheap enough to do for every listed object rather than only on demand —
  // that's what lets private-ACL buckets still show image thumbnails.
  const files = await Promise.all(contents.map(async item => {
    const key = item.Key as string
    const url = config.acl === 'public-read'
      ? buildPublicUrl(config, key)
      : await getSignedUrl(client, new GetObjectCommand({ Bucket: config.bucket, Key: key }), { expiresIn: 15 * 60 })
    return {
      key,
      name: key.split('/').pop(),
      size: item.Size ?? 0,
      lastModified: item.LastModified,
      url
    }
  }))

  return {
    prefix,
    folders,
    files,
    nextContinuationToken: result.IsTruncated ? result.NextContinuationToken : null
  }
})
