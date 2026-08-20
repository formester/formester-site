const BASE = '/api/__tools__/media'

export function fetchProfiles() {
  return $fetch(`${BASE}/profiles`)
}

export function saveProfile(profile) {
  return $fetch(`${BASE}/profiles`, { method: 'POST', body: profile })
}

export function deleteProfileApi(id) {
  return $fetch(`${BASE}/profile-delete`, { method: 'POST', body: { id } })
}

export function activateProfile(id) {
  return $fetch(`${BASE}/profile-activate`, { method: 'POST', body: { id } })
}

export function testProfile(profile) {
  return $fetch(`${BASE}/profile-test`, { method: 'POST', body: profile })
}

export function listItems({ prefix = '', search = '', continuationToken, recursive = false } = {}) {
  return $fetch(`${BASE}/list`, { query: { prefix, search: search || undefined, continuationToken, recursive: recursive ? '1' : undefined } })
}

export function deleteKeys(keys) {
  return $fetch(`${BASE}/delete`, { method: 'POST', body: { keys } })
}

/** Enumerates every object key under a folder prefix — used to bulk-delete a folder. */
export async function listAllKeysUnderPrefix(prefix) {
  const keys = []
  let continuationToken
  do {
    const res = await $fetch(`${BASE}/list`, { query: { prefix, recursive: '1', continuationToken } })
    keys.push(...res.files.map((f) => f.key))
    continuationToken = res.nextContinuationToken || undefined
  } while (continuationToken)
  return keys
}

export function getLink(key) {
  return $fetch(`${BASE}/link`, { query: { key } })
}

export function renameItem({ key, newName, isFolder }) {
  return $fetch(`${BASE}/rename`, { method: 'POST', body: { key, newName, isFolder } })
}

/**
 * Uploads one file with real progress via XMLHttpRequest — fetch/$fetch has no
 * upload-progress event, so this bypasses $fetch for this one call. Returns
 * { promise, abort } so an in-flight upload row can be cancelled.
 */
export function uploadFile(prefix, file, onProgress, filename) {
  const xhr = new XMLHttpRequest()
  const promise = new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('prefix', prefix)
    formData.append('files', file, filename || file.name)

    xhr.open('POST', `${BASE}/upload`)
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(Math.round((e.loaded / e.total) * 100))
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText)
          const result = data.results && data.results[0]
          if (result && result.success === false) reject(new Error(result.error || 'Upload failed'))
          else resolve(result)
        } catch {
          reject(new Error('Upload failed'))
        }
      } else {
        reject(new Error(`Upload failed (${xhr.status})`))
      }
    }
    xhr.onerror = () => reject(new Error('Upload failed'))
    xhr.onabort = () => reject(new Error('Upload cancelled'))
    xhr.send(formData)
  })
  return { promise, abort: () => xhr.abort() }
}
