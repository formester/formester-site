// Local-only S3 browse/upload tool. AWS credentials never leave this
// server — the browser only talks to localhost; this process signs and
// makes the actual S3 requests. Run with `npm start` (loads .env via
// Node's built-in --env-file, no dotenv dependency needed).
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { AwsClient } from 'aws4fetch'

const {
  S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY,
  S3_BUCKET,
  S3_REGION,
  S3_ENDPOINT,
  // Both browsing and new uploads are scoped under this one folder (if set).
  // Kept as a single var — a separate "browse root" vs "upload folder"
  // pair just invites the two getting combined into a doubled path.
  S3_PREFIX = '',
  PORT = '5757',
} = process.env

for (const [name, value] of Object.entries({ S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, S3_REGION })) {
  if (!value) {
    console.error(`Missing required env var ${name} — copy .env.example to .env and fill it in.`)
    process.exit(1)
  }
}

const aws = new AwsClient({ accessKeyId: S3_ACCESS_KEY_ID, secretAccessKey: S3_SECRET_ACCESS_KEY, region: S3_REGION, service: 's3' })

const bucketOrigin = S3_ENDPOINT
  ? `${S3_ENDPOINT.replace(/\/$/, '')}/${S3_BUCKET}`
  : `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com`

function publicUrl(key) {
  return `${bucketOrigin}/${key.split('/').map(encodeURIComponent).join('/')}`
}

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|avif|svg)$/i

// Minimal ListObjectsV2 XML parsing — no XML dependency needed for this
// flat, predictable response shape.
function parseListObjects(xml) {
  const items = []
  for (const match of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
    const block = match[1]
    const key = (block.match(/<Key>([\s\S]*?)<\/Key>/) || [])[1]
    const size = Number((block.match(/<Size>([\s\S]*?)<\/Size>/) || [])[1] || 0)
    const lastModified = (block.match(/<LastModified>([\s\S]*?)<\/LastModified>/) || [])[1]
    if (key && !key.endsWith('/')) {
      items.push({ key, size, lastModified, url: publicUrl(key), isImage: IMAGE_EXT.test(key) })
    }
  }
  return items
}

async function listObjects() {
  const params = new URLSearchParams({ 'list-type': '2', 'max-keys': '1000' })
  if (S3_PREFIX) params.set('prefix', S3_PREFIX)
  const res = await aws.fetch(`${bucketOrigin}?${params}`)
  if (!res.ok) throw new Error(`S3 list failed: ${res.status} ${await res.text()}`)
  return parseListObjects(await res.text())
}

async function uploadObject(key, body, contentType) {
  const res = await aws.fetch(publicUrl(key), { method: 'PUT', body, headers: { 'content-type': contentType || 'application/octet-stream' } })
  if (!res.ok) throw new Error(`S3 upload failed: ${res.status} ${await res.text()}`)
}

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9_.-]/g, '-')
}

const PUBLIC_DIR = path.join(import.meta.dirname, 'public')
const STATIC_TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost')

    if (req.method === 'GET' && url.pathname === '/api/objects') {
      const objects = await listObjects()
      objects.sort((a, b) => (a.lastModified < b.lastModified ? 1 : -1))
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(objects))
      return
    }

    if (req.method === 'POST' && url.pathname === '/api/upload') {
      const filename = sanitizeFilename(url.searchParams.get('filename') || 'file')
      const key = [S3_PREFIX, filename].filter(Boolean).join('/')
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      await uploadObject(key, Buffer.concat(chunks), req.headers['content-type'])
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ key, url: publicUrl(key) }))
      return
    }

    // Static file serving for the UI
    let filePath = url.pathname === '/' ? '/index.html' : url.pathname
    filePath = path.join(PUBLIC_DIR, filePath)
    if (!filePath.startsWith(PUBLIC_DIR) || !fs.existsSync(filePath)) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    const ext = path.extname(filePath)
    res.writeHead(200, { 'content-type': STATIC_TYPES[ext] || 'application/octet-stream' })
    fs.createReadStream(filePath).pipe(res)
  } catch (err) {
    console.error(err)
    res.writeHead(500, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ error: err.message }))
  }
})

server.listen(Number(PORT), () => {
  console.log(`S3 uploader running at http://localhost:${PORT}`)
  console.log(`Bucket: ${S3_BUCKET} (${S3_REGION})${S3_PREFIX ? `, scoped to prefix "${S3_PREFIX}"` : ''}`)
})
