'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

type S3Object = {
  key: string
  size: number
  lastModified: string
  url: string
  isImage: boolean
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function Home() {
  const [objects, setObjects] = useState<S3Object[]>([])
  const [nextToken, setNextToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [status, setStatus] = useState('')
  const [bucketLabel, setBucketLabel] = useState('')
  const [search, setSearch] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const loadFirstPage = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/objects')
    const data = await res.json()
    if (!res.ok) {
      setStatus(`Failed to load bucket contents: ${data.error}`)
      setObjects([])
      setNextToken(null)
      setLoading(false)
      return
    }
    setObjects(data.objects)
    setNextToken(data.nextContinuationToken)
    setLoading(false)
  }, [])

  const loadMore = useCallback(async () => {
    if (!nextToken) return
    setLoadingMore(true)
    const res = await fetch(`/api/objects?continuationToken=${encodeURIComponent(nextToken)}`)
    const data = await res.json()
    if (!res.ok) {
      setStatus(`Failed to load more: ${data.error}`)
      setLoadingMore(false)
      return
    }
    setObjects((prev) => [...prev, ...data.objects])
    setNextToken(data.nextContinuationToken)
    setLoadingMore(false)
  }, [nextToken])

  useEffect(() => {
    // Fetch-on-mount for external data — the exact case react-hooks'
    // set-state-in-effect rule's own docs call out as fine to disable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadFirstPage()
    fetch('/api/bucket').then((r) => r.json()).then((d) => setBucketLabel(d.label))
  }, [loadFirstPage])

  const uploadFile = useCallback(async (file: File) => {
    setStatus(`Uploading ${file.name}…`)
    const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
      method: 'POST',
      headers: { 'content-type': file.type || 'application/octet-stream' },
      body: file,
    })
    if (!res.ok) {
      const data = await res.json()
      setStatus(`Failed to upload ${file.name}: ${data.error}`)
      return
    }
    setStatus(`Uploaded ${file.name}`)
    await loadFirstPage()
  }, [loadFirstPage])

  const copyUrl = useCallback(async (obj: S3Object) => {
    await navigator.clipboard.writeText(obj.url)
    setCopiedKey(obj.key)
    setTimeout(() => setCopiedKey((k) => (k === obj.key ? null : k)), 1200)
  }, [])

  const term = search.trim().toLowerCase()
  const filtered = term ? objects.filter((o) => o.key.toLowerCase().includes(term)) : objects

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-xl font-semibold">S3 Uploader</h1>
      <p className="mb-5 text-sm text-muted-foreground">{bucketLabel || 'Loading bucket info…'}</p>

      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          for (const file of e.dataTransfer.files) uploadFile(file)
        }}
        className={`mb-4 cursor-pointer rounded-xl border-2 border-dashed p-8 text-center text-sm transition-colors ${
          dragOver ? 'border-primary bg-primary/5 text-primary' : 'border-muted-foreground/30 text-muted-foreground'
        }`}
      >
        Drag a file here, or click to choose one
      </div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          for (const file of e.target.files ?? []) uploadFile(file)
          e.target.value = ''
        }}
      />

      <div className="mb-4 min-h-[20px] text-sm text-primary">{status}</div>

      <Input
        placeholder="Filter by filename…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-44 rounded-xl" />)}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {filtered.map((obj) => (
              <Card key={obj.key} className="overflow-hidden p-0">
                <div className="flex h-28 items-center justify-center bg-muted">
                  {obj.isImage
                    ? // eslint-disable-next-line @next/next/no-img-element
                      <img src={obj.url} alt="" className="h-full w-full object-cover" />
                    : <Badge variant="secondary">{obj.key.split('.').pop()?.toUpperCase()}</Badge>}
                </div>
                <div className="p-3">
                  <p className="truncate text-xs font-medium" title={obj.key}>{obj.key.split('/').pop()}</p>
                  <p className="mb-2 text-xs text-muted-foreground">{formatSize(obj.size)}</p>
                  <Button size="sm" variant="outline" className="w-full" onClick={() => copyUrl(obj)}>
                    {copiedKey === obj.key ? 'Copied!' : 'Copy URL'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {nextToken && !search && (
            <div className="mt-6 flex justify-center">
              <Button variant="outline" onClick={loadMore} disabled={loadingMore}>
                {loadingMore ? 'Loading…' : 'Load more'}
              </Button>
            </div>
          )}
        </>
      )}
    </main>
  )
}
