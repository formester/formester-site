// Server-only S3 access. AWS credentials never leave this process — the
// browser only talks to our own Next.js API routes, never to S3 directly,
// so no bucket CORS configuration is needed.
//
// Config is read lazily (inside getConfig(), called per-request) rather
// than at module load time. Reading process.env eagerly at the top of this
// module makes `next build` fail during page-data collection in any
// environment without env vars set at build time — even though these are
// genuinely request-time values for a tool that's never statically
// prerendered.
import { AwsClient } from 'aws4fetch'

type Config = {
  aws: AwsClient
  bucketOrigin: string
  s3Prefix: string
  bucketLabel: string
}

let cached: Config | null = null

function getConfig(): Config {
  if (cached) return cached

  const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, S3_REGION, S3_ENDPOINT, S3_PREFIX = '' } = process.env

  for (const [name, value] of Object.entries({ S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, S3_REGION })) {
    if (!value) {
      throw new Error(`Missing required env var ${name} — copy .env.example to .env.local and fill it in.`)
    }
  }

  const aws = new AwsClient({
    accessKeyId: S3_ACCESS_KEY_ID as string,
    secretAccessKey: S3_SECRET_ACCESS_KEY as string,
    region: S3_REGION as string,
    service: 's3',
  })

  const bucketOrigin = S3_ENDPOINT
    ? `${S3_ENDPOINT.replace(/\/$/, '')}/${S3_BUCKET}`
    : `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com`

  cached = {
    aws,
    bucketOrigin,
    s3Prefix: S3_PREFIX,
    bucketLabel: `${S3_BUCKET} (${S3_REGION})${S3_PREFIX ? `, scoped to prefix "${S3_PREFIX}"` : ''}`,
  }
  return cached
}

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|avif|svg)$/i

export function publicUrl(key: string) {
  const { bucketOrigin } = getConfig()
  return `${bucketOrigin}/${key.split('/').map(encodeURIComponent).join('/')}`
}

export type S3Object = {
  key: string
  size: number
  lastModified: string
  url: string
  isImage: boolean
}

export type ListResult = {
  objects: S3Object[]
  nextContinuationToken: string | null
  isTruncated: boolean
}

function text(xml: string, tag: string): string | undefined {
  return xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]
}

// Minimal ListObjectsV2 XML parsing — no XML dependency needed for this
// flat, predictable response shape.
function parseListObjects(xml: string): ListResult {
  const objects: S3Object[] = []
  for (const match of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
    const block = match[1]
    const key = text(block, 'Key')
    if (!key || key.endsWith('/')) continue
    objects.push({
      key,
      size: Number(text(block, 'Size') || 0),
      lastModified: text(block, 'LastModified') || '',
      url: publicUrl(key),
      isImage: IMAGE_EXT.test(key),
    })
  }
  return {
    objects,
    nextContinuationToken: text(xml, 'NextContinuationToken') || null,
    isTruncated: text(xml, 'IsTruncated') === 'true',
  }
}

export async function listObjects(continuationToken?: string | null): Promise<ListResult> {
  const { aws, bucketOrigin, s3Prefix } = getConfig()
  const params = new URLSearchParams({ 'list-type': '2', 'max-keys': '200' })
  if (s3Prefix) params.set('prefix', s3Prefix)
  if (continuationToken) params.set('continuation-token', continuationToken)
  const res = await aws.fetch(`${bucketOrigin}?${params}`)
  if (!res.ok) throw new Error(`S3 list failed: ${res.status} ${await res.text()}`)
  return parseListObjects(await res.text())
}

export async function uploadObject(filename: string, body: ArrayBuffer, contentType: string | null) {
  const { aws, s3Prefix } = getConfig()
  const key = [s3Prefix, sanitizeFilename(filename)].filter(Boolean).join('/')
  const res = await aws.fetch(publicUrl(key), {
    method: 'PUT',
    body,
    headers: { 'content-type': contentType || 'application/octet-stream' },
  })
  if (!res.ok) throw new Error(`S3 upload failed: ${res.status} ${await res.text()}`)
  return { key, url: publicUrl(key) }
}

export function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9_.-]/g, '-')
}

export function getBucketLabel() {
  return getConfig().bucketLabel
}
