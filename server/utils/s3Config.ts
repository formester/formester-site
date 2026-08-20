import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { S3Client } from '@aws-sdk/client-s3'

export interface S3Profile {
  id: string
  name: string
  accessKeyId: string
  secretAccessKey: string
  region: string
  bucket: string
  acl: 'public-read' | 'private'
  publicUrlBase?: string
  // Not exposed in the config UI (AWS S3 only by design) — settable only by
  // hand-editing tmp/media/s3_config.json, for pointing at an S3-compatible
  // endpoint (e.g. MinIO) during local testing.
  endpoint?: string
  forcePathStyle?: boolean
}

interface Store {
  profiles: S3Profile[]
  activeProfileId: string | null
}

const CONFIG_DIR = join(process.cwd(), 'tmp', 'media')
const CONFIG_PATH = join(CONFIG_DIR, 's3_config.json')

let cachedClients: Record<string, { key: string; client: S3Client }> = {}

function isLegacyShape(data: any): boolean {
  return !!data && typeof data === 'object' && !Array.isArray(data.profiles) && !!data.accessKeyId
}

function migrateLegacy(data: any): Store {
  const profile: S3Profile = { id: 'default', name: 'Default', ...data }
  return { profiles: [profile], activeProfileId: 'default' }
}

export function readStore(): Store {
  if (!existsSync(CONFIG_PATH)) return { profiles: [], activeProfileId: null }
  let raw: any
  try {
    raw = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'))
  } catch {
    return { profiles: [], activeProfileId: null }
  }
  if (isLegacyShape(raw)) {
    const migrated = migrateLegacy(raw)
    writeStore(migrated)
    return migrated
  }
  const profiles: S3Profile[] = Array.isArray(raw.profiles) ? raw.profiles : []
  const activeProfileId = typeof raw.activeProfileId === 'string' ? raw.activeProfileId : (profiles[0]?.id ?? null)
  return { profiles, activeProfileId }
}

export function writeStore(store: Store) {
  if (!existsSync(CONFIG_DIR)) mkdirSync(CONFIG_DIR, { recursive: true })
  writeFileSync(CONFIG_PATH, JSON.stringify(store, null, 2))
  cachedClients = {}
}

export function readProfiles(): S3Profile[] {
  return readStore().profiles
}

export function getActiveProfile(): S3Profile | null {
  const store = readStore()
  if (!store.activeProfileId) return null
  return store.profiles.find(p => p.id === store.activeProfileId) || store.profiles[0] || null
}

export function upsertProfile(profile: S3Profile, makeActiveIfFirst = true): Store {
  const store = readStore()
  const idx = store.profiles.findIndex(p => p.id === profile.id)
  if (idx === -1) store.profiles.push(profile)
  else store.profiles[idx] = profile
  if (makeActiveIfFirst && !store.activeProfileId) store.activeProfileId = profile.id
  writeStore(store)
  return store
}

export function deleteProfile(id: string): Store {
  const store = readStore()
  if (store.profiles.length <= 1) {
    throw createError({ statusCode: 400, statusMessage: 'Cannot delete the last connection' })
  }
  store.profiles = store.profiles.filter(p => p.id !== id)
  if (store.activeProfileId === id) store.activeProfileId = store.profiles[0]?.id ?? null
  writeStore(store)
  return store
}

export function setActiveProfile(id: string): Store {
  const store = readStore()
  if (!store.profiles.some(p => p.id === id)) {
    throw createError({ statusCode: 404, statusMessage: 'Connection not found' })
  }
  store.activeProfileId = id
  writeStore(store)
  return store
}

export function maskProfile(profile: S3Profile) {
  const { secretAccessKey, accessKeyId, ...rest } = profile
  return {
    ...rest,
    accessKeyId: accessKeyId ? `${accessKeyId.slice(0, 4)}...${accessKeyId.slice(-4)}` : '',
    secretAccessKey: secretAccessKey ? `••••${secretAccessKey.slice(-4)}` : ''
  }
}

export function getProfileClient(profile: S3Profile): S3Client {
  const key = `${profile.id}:${profile.accessKeyId}:${profile.region}:${profile.bucket}:${profile.endpoint || ''}`
  const cached = cachedClients[profile.id]
  if (cached && cached.key === key) return cached.client
  const client = new S3Client({
    region: profile.region,
    credentials: {
      accessKeyId: profile.accessKeyId,
      secretAccessKey: profile.secretAccessKey
    },
    ...(profile.endpoint ? { endpoint: profile.endpoint, forcePathStyle: profile.forcePathStyle ?? true } : {})
  })
  cachedClients[profile.id] = { key, client }
  return client
}

export function buildPublicUrl(profile: S3Profile, key: string): string {
  if (profile.publicUrlBase) {
    return `${profile.publicUrlBase.replace(/\/$/, '')}/${key}`
  }
  if (profile.endpoint) {
    return `${profile.endpoint.replace(/\/$/, '')}/${profile.bucket}/${key}`
  }
  return `https://${profile.bucket}.s3.${profile.region}.amazonaws.com/${key}`
}
