// Document state for the free fillable-PDF tool. Everything stays in the browser:
// element JSON in localStorage, the source PDF bytes in IndexedDB. No network.
import { ref, shallowRef, computed } from 'vue'
import {
  buildPageSettings,
  getPageDimensions,
  createFillableElement,
  fillableFieldToElement,
  importAcroFormFields,
  loadPdfBackdrop,
  configurePdfjs,
  stripAcroForm,
} from '@formester/pdf-core'

// The pdf.js worker is served from public/ (copied from pdfjs-dist/build); keep the version in step with pdf-core.
configurePdfjs({ workerSrc: '/pdf.worker.min.mjs' })

const LS_KEY = 'fmst:pdf-tool:doc:v1'
const IDB_NAME = 'fmst-pdf-tool'
const IDB_STORE = 'files'
const HISTORY_LIMIT = 50
const MAX_PAGES = 50
const MAX_BYTES = 10 * 1024 * 1024

function openIdb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(IDB_STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}
async function idbPut(key, value) {
  const db = await openIdb()
  await new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.objectStore(IDB_STORE).put(value, key)
    tx.oncomplete = resolve
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}
async function idbGet(key) {
  const db = await openIdb()
  const val = await new Promise((resolve, reject) => {
    const req = db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).get(key)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  db.close()
  return val
}
async function idbDel(key) {
  const db = await openIdb()
  await new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.objectStore(IDB_STORE).delete(key)
    tx.oncomplete = resolve
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}

export function usePdfToolDocument() {
  const source = ref(null) // { type: 'blank' | 'upload', fileName }
  const pdfSettings = ref(buildPageSettings({}))
  const pages = ref([]) // [{ index, width, height, elements }]
  const backdrops = ref([]) // data URLs per page (upload mode)
  const pdfBytes = shallowRef(null)
  const pdfUrl = ref(null)
  const loading = ref(false)
  const error = ref('')
  const savedAt = ref(null)

  const ready = computed(() => pages.value.length > 0)
  const isUpload = computed(() => source.value?.type === 'upload')
  const fieldCount = computed(() =>
    pages.value.reduce((n, p) => n + p.elements.filter((e) => e.type === 'fillable').length, 0),
  )

  // ---- history -------------------------------------------------------------
  const past = ref([])
  const future = ref([])
  let quietTimer = null
  let pendingSnapshot = null
  const canUndo = computed(() => past.value.length > 0)
  const canRedo = computed(() => future.value.length > 0)

  const snapshotPages = () => JSON.stringify(pages.value)

  /** Call before a mutation. Rapid mutations (a drag) collapse into one history entry. */
  function beginChange() {
    if (pendingSnapshot == null) pendingSnapshot = snapshotPages()
    clearTimeout(quietTimer)
    quietTimer = setTimeout(commitChange, 350)
  }
  function commitChange() {
    clearTimeout(quietTimer)
    if (pendingSnapshot != null && pendingSnapshot !== snapshotPages()) {
      past.value.push(pendingSnapshot)
      if (past.value.length > HISTORY_LIMIT) past.value.shift()
      future.value = []
    }
    pendingSnapshot = null
    save()
  }
  function undo() {
    commitChange()
    if (!past.value.length) return
    future.value.push(snapshotPages())
    pages.value = JSON.parse(past.value.pop())
    save()
  }
  function redo() {
    if (!future.value.length) return
    past.value.push(snapshotPages())
    pages.value = JSON.parse(future.value.pop())
    save()
  }

  // ---- mutations -----------------------------------------------------------
  function addElement(pageIdx, el) {
    beginChange()
    pages.value[pageIdx].elements.push(el)
    commitChange()
    return el
  }
  function patchElement(pageIdx, id, patch) {
    const els = pages.value[pageIdx]?.elements
    const i = els?.findIndex((e) => e.id === id)
    if (i == null || i < 0) return
    beginChange()
    const cur = els[i]
    const next = { ...cur, ...patch }
    if (patch.content) next.content = { ...cur.content, ...patch.content }
    if (patch.style) next.style = { ...cur.style, ...patch.style }
    els.splice(i, 1, next)
  }
  function removeElements(pageIdx, ids) {
    beginChange()
    const set = new Set(ids)
    pages.value[pageIdx].elements = pages.value[pageIdx].elements.filter((e) => !set.has(e.id))
    commitChange()
  }
  function cloneElement(pageIdx, id) {
    const el = pages.value[pageIdx].elements.find((e) => e.id === id)
    if (!el) return null
    const copy = JSON.parse(JSON.stringify(el))
    copy.id = `${el.id}_${Math.random().toString(36).slice(2, 7)}`
    copy.x = Math.min(el.x + 12, pages.value[pageIdx].width - el.w)
    copy.y = Math.min(el.y + 12, pages.value[pageIdx].height - el.h)
    if (copy.type === 'fillable' && copy.content?.name) {
      copy.content.name = `${copy.content.name}_copy`
    }
    return addElement(pageIdx, copy)
  }
  function transferElement(fromIdx, { id, toPageIdx, x, y }) {
    const from = pages.value[fromIdx]
    const to = pages.value[toPageIdx]
    if (!from || !to) return
    const i = from.elements.findIndex((e) => e.id === id)
    if (i < 0) return
    beginChange()
    const [el] = from.elements.splice(i, 1)
    to.elements.push({ ...el, x, y: Math.max(0, Math.min(to.height - el.h, y)) })
    commitChange()
  }
  function addPage() {
    beginChange()
    const last = pages.value[pages.value.length - 1]
    pages.value.push({ index: pages.value.length, width: last.width, height: last.height, elements: [] })
    commitChange()
  }
  function removePage(idx) {
    if (pages.value.length <= 1) return
    beginChange()
    pages.value.splice(idx, 1)
    pages.value.forEach((p, i) => (p.index = i))
    commitChange()
  }

  // ---- sources -------------------------------------------------------------
  function revokeUrl() {
    if (pdfUrl.value) URL.revokeObjectURL(pdfUrl.value)
    pdfUrl.value = null
  }

  function startBlank(size = 'Letter', orientation = 'portrait') {
    revokeUrl()
    const dims = getPageDimensions(size, orientation)
    source.value = { type: 'blank', fileName: 'untitled' }
    pdfSettings.value = buildPageSettings({ page: { format: size, orientation } })
    pages.value = [{ index: 0, width: dims.w, height: dims.h, elements: [] }]
    backdrops.value = []
    pdfBytes.value = null
    past.value = []
    future.value = []
    error.value = ''
    save()
  }

  async function loadPdf(bytes, fileName, savedPages = null) {
    error.value = ''
    if (bytes.byteLength > MAX_BYTES) {
      error.value = 'That PDF is over 10 MB. Compress it first, then try again.'
      return false
    }
    loading.value = true
    try {
      revokeUrl()
      // Existing fields become editable elements; the originals are removed from the base so the
      // export carries exactly the fields on the canvas and the backdrop shows no ghost widgets.
      const imported = savedPages ? null : await importAcroFormFields(bytes).catch(() => null)
      if (imported?.fields?.length) bytes = await stripAcroForm(bytes)
      const blob = new Blob([bytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const backdrop = await loadPdfBackdrop(url)
      if (backdrop.pageCount > MAX_PAGES) {
        URL.revokeObjectURL(url)
        error.value = `That PDF has ${backdrop.pageCount} pages; the limit is ${MAX_PAGES}.`
        return false
      }
      const dataUrls = await Promise.all(backdrop.pages.map((p) => p.toDataURL(1.5)))
      pdfBytes.value = bytes
      pdfUrl.value = url
      source.value = { type: 'upload', fileName }
      pdfSettings.value = buildPageSettings({})
      backdrops.value = dataUrls
      pages.value = backdrop.pages.map((p, i) => ({
        index: i,
        width: p.width,
        height: p.height,
        elements: savedPages
          ? [...(savedPages[i]?.elements ?? [])]
          : (imported?.fields ?? []).filter((f) => f.page === i).map(fillableFieldToElement),
      }))
      past.value = []
      future.value = []
      await idbPut('source', { bytes, fileName })
      save()
      return true
    } catch (e) {
      console.error(e)
      error.value =
        e?.name === 'PasswordException'
          ? 'This PDF is password-protected. Remove the password and try again.'
          : 'That file could not be read as a PDF.'
      return false
    } finally {
      loading.value = false
    }
  }

  async function loadFile(file) {
    if (!file) return false
    if (file.type && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      error.value = 'Only PDF files are supported.'
      return false
    }
    const buf = await file.arrayBuffer()
    return loadPdf(new Uint8Array(buf), file.name)
  }

  async function reset() {
    revokeUrl()
    source.value = null
    pages.value = []
    backdrops.value = []
    pdfBytes.value = null
    past.value = []
    future.value = []
    error.value = ''
    try {
      localStorage.removeItem(LS_KEY)
    } catch {}
    try {
      await idbDel('source')
    } catch {}
  }

  // ---- persistence ---------------------------------------------------------
  let saveTimer = null
  function save() {
    clearTimeout(saveTimer)
    saveTimer = setTimeout(() => {
      if (!ready.value) return
      try {
        localStorage.setItem(
          LS_KEY,
          JSON.stringify({
            v: 1,
            savedAt: Date.now(),
            source: source.value,
            pdfSettings: pdfSettings.value,
            pages: pages.value,
          }),
        )
        savedAt.value = Date.now()
      } catch {
        /* quota or private mode: the session still works, it just won't survive a reload */
      }
    }, 250)
  }

  /** Returns true when a previous document was restored. */
  async function restore() {
    let saved
    try {
      saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null')
    } catch {
      saved = null
    }
    if (!saved?.pages?.length) return false
    if (saved.source?.type === 'upload') {
      const file = await idbGet('source').catch(() => null)
      if (!file?.bytes) return false
      const ok = await loadPdf(file.bytes, file.fileName, saved.pages)
      if (ok)
        pdfSettings.value = buildPageSettings(
          saved.pdfSettings
            ? {
                page: { format: saved.pdfSettings.size, orientation: saved.pdfSettings.orientation },
                ...saved.pdfSettings,
              }
            : {},
        )
      return ok
    }
    source.value = saved.source
    pdfSettings.value = saved.pdfSettings ?? buildPageSettings({})
    pages.value = saved.pages
    savedAt.value = saved.savedAt ?? null
    return true
  }

  return {
    source,
    pdfSettings,
    pages,
    backdrops,
    pdfBytes,
    pdfUrl,
    loading,
    error,
    savedAt,
    ready,
    isUpload,
    fieldCount,
    canUndo,
    canRedo,
    undo,
    redo,
    beginChange,
    commitChange,
    addElement,
    patchElement,
    removeElements,
    cloneElement,
    transferElement,
    addPage,
    removePage,
    startBlank,
    loadFile,
    loadPdf,
    restore,
    reset,
    createFillableElement,
  }
}
