import { ref, computed } from 'vue'
import axios from 'axios'

const ACCEPTED_TYPES = ['application/pdf', 'image/*']
const MAX_SIZE = 10 * 1024 * 1024
const MAX_FILES = 10

// Port of formester-app's useFileAttachments, uploading via the anonymous
// public presign endpoint instead of the authenticated one.
export function useAiFileAttachments() {
  const config = useRuntimeConfig()
  const fileEntries = ref([])
  const uploadError = ref('')
  const isDragging = ref(false)
  let dragCounter = 0
  let uidCounter = 0
  const previewUrls = new Map()

  const isAnyUploading = computed(() => fileEntries.value.some((e) => e.status === 'uploading'))
  const readyFiles = computed(() =>
    fileEntries.value.filter((e) => e.status === 'ready').map((e) => e.attached)
  )

  async function uploadToCache(file) {
    const { data: presign } = await axios.post(
      `${config.public.appUrl}/api/site/public_ai_previews/presign`,
      { file_name: file.name, content_type: file.type, byte_size: file.size }
    )

    await axios.put(presign.uploadUrl, file, { headers: { 'Content-Type': file.type } })

    return {
      id: presign.key,
      storage: 'cache',
      metadata: { size: file.size, filename: file.name, mime_type: file.type },
    }
  }

  function getPreviewUrl(entry) {
    if (!previewUrls.has(entry.uid)) {
      previewUrls.set(entry.uid, URL.createObjectURL(entry.file))
    }
    return previewUrls.get(entry.uid)
  }

  function onDragEnter() {
    dragCounter++
    isDragging.value = true
  }

  function onDragLeave() {
    dragCounter--
    if (dragCounter <= 0) {
      dragCounter = 0
      isDragging.value = false
    }
  }

  function onDrop(event) {
    dragCounter = 0
    isDragging.value = false
    Array.from(event.dataTransfer?.files || []).forEach(processFile)
  }

  function handleFileSelect(event) {
    Array.from(event.target.files).forEach(processFile)
    event.target.value = ''
  }

  function onPaste(event) {
    const files = Array.from(event.clipboardData?.files || [])
    if (!files.length) return
    event.preventDefault()
    files.forEach(processFile)
  }

  async function processFile(file) {
    uploadError.value = ''

    if (fileEntries.value.length >= MAX_FILES) {
      uploadError.value = `Maximum ${MAX_FILES} files allowed.`
      return
    }
    const isAccepted = ACCEPTED_TYPES.some((t) =>
      t.endsWith('/*') ? file.type.startsWith(t.replace('/*', '/')) : file.type === t
    )
    if (!isAccepted) {
      uploadError.value = 'Unsupported file type. Please upload a PDF or image file.'
      return
    }
    if (file.size > MAX_SIZE) {
      uploadError.value = 'File exceeds 10 MB limit.'
      return
    }

    const uid = ++uidCounter
    fileEntries.value.push({ uid, file, status: 'uploading', attached: null })

    try {
      const cacheFile = await uploadToCache(file)
      const idx = fileEntries.value.findIndex((e) => e.uid === uid)
      if (idx !== -1) {
        fileEntries.value[idx] = { ...fileEntries.value[idx], status: 'ready', attached: cacheFile }
      }
    } catch (err) {
      const idx = fileEntries.value.findIndex((e) => e.uid === uid)
      if (idx !== -1) fileEntries.value.splice(idx, 1)
      if (previewUrls.has(uid)) {
        URL.revokeObjectURL(previewUrls.get(uid))
        previewUrls.delete(uid)
      }
      uploadError.value = err?.response?.data?.message || 'Upload failed. Please try again.'
    }
  }

  function removeFile(uid) {
    const idx = fileEntries.value.findIndex((e) => e.uid === uid)
    if (idx !== -1) fileEntries.value.splice(idx, 1)
    if (previewUrls.has(uid)) {
      URL.revokeObjectURL(previewUrls.get(uid))
      previewUrls.delete(uid)
    }
    uploadError.value = ''
  }

  function clearFiles() {
    fileEntries.value = []
    previewUrls.forEach((url) => URL.revokeObjectURL(url))
    previewUrls.clear()
    uploadError.value = ''
  }

  return {
    fileEntries,
    uploadError,
    isDragging,
    isAnyUploading,
    readyFiles,
    ACCEPTED_TYPES,
    MAX_SIZE,
    MAX_FILES,
    getPreviewUrl,
    onDragEnter,
    onDragLeave,
    onDrop,
    onPaste,
    handleFileSelect,
    processFile,
    removeFile,
    clearFiles,
  }
}
