<template>
  <div class="pdf-tool">
    <!-- Resume card: a document exists in this browser but the editor is closed -->
    <div v-if="doc.ready.value && !editorOpen" class="resume">
      <div class="resume__icon"><FileText :size="22" /></div>
      <div class="resume__text">
        <div class="resume__title">Continue where you left off</div>
        <div class="resume__sub">
          {{ doc.source.value?.fileName }} · {{ doc.pages.value.length }}
          {{ doc.pages.value.length === 1 ? 'page' : 'pages' }} · {{ doc.fieldCount.value }}
          {{ doc.fieldCount.value === 1 ? 'field' : 'fields' }} · saved in this browser
        </div>
      </div>
      <div class="resume__actions">
        <FButton variant="primary" size="md" @click="openEditor">Resume editing</FButton>
        <FButton variant="ghost" size="md" @click="startOver">Start over</FButton>
      </div>
    </div>

    <!-- ================= Start screen: two doors ================= -->
    <div v-if="!doc.ready.value" class="start">
      <div
        class="start__drop"
        :class="{ 'is-over': dragOver, 'is-loading': doc.loading.value }"
        role="button"
        tabindex="0"
        aria-label="Drop a PDF here or click to choose one"
        @dragover.prevent="dragOver = true"
        @dragleave="dragOver = false"
        @drop.prevent="onDropFile"
        @click="fileInput.click()"
        @keydown.enter.prevent="fileInput.click()"
      >
        <span class="start__drop-icon"><FileUp :size="28" /></span>
        <div class="start__drop-title">
          {{ doc.loading.value ? 'Reading your PDF…' : 'Drop a PDF to make it fillable' }}
        </div>
        <div class="start__drop-sub">Up to 10 MB · 50 pages · existing fields are kept</div>
        <FButton variant="primary" size="lg" tag="span">Choose a PDF</FButton>
        <input ref="fileInput" type="file" accept="application/pdf,.pdf" class="d-none" @change="onPickFile" />
      </div>

      <div class="start__blank">
        <div>
          <div class="start__blank-title">Start from a blank page</div>
          <div class="start__blank-sub">Lay out headings, text and fields yourself.</div>
        </div>
        <div class="start__sizes">
          <button
            v-for="s in SIZES"
            :key="s.value"
            type="button"
            class="start__size"
            :class="{ 'is-active': blankSize === s.value }"
            @click="blankSize = s.value"
          >
            <span class="start__size-page" :style="{ width: s.w + 'px', height: s.h + 'px' }"></span>
            <span class="start__size-name">{{ s.label }}</span>
            <span class="start__size-dims">{{ s.dims }}</span>
          </button>
        </div>
        <div class="start__orient">
          <button
            type="button"
            class="start__seg"
            :class="{ 'is-active': blankOrientation === 'portrait' }"
            @click="blankOrientation = 'portrait'"
          >
            Portrait
          </button>
          <button
            type="button"
            class="start__seg"
            :class="{ 'is-active': blankOrientation === 'landscape' }"
            @click="blankOrientation = 'landscape'"
          >
            Landscape
          </button>
        </div>
        <FButton variant="secondary" size="md" class="align-self-start" @click="startBlank">Open blank editor</FButton>
      </div>

      <div v-if="doc.error.value" class="start__error" role="alert">
        <CircleAlert :size="16" /> {{ doc.error.value }}
      </div>
    </div>

    <!-- ================= Editor (full screen) ================= -->
    <Teleport to="body">
      <div v-if="doc.ready.value && editorOpen" class="ed" :class="{ 'ed--test': mode === 'test' }">
        <!-- Top bar -->
        <div class="ed__bar">
          <div class="ed__bar-left">
            <span class="ed__brand">Fillable PDF creator</span>
            <span class="ed__sep"></span>
            <FileText :size="16" class="text-secondary" />
            <span class="ed__file" :title="doc.source.value?.fileName">{{ displayName }}</span>
            <span class="ed__meta"
              >{{ doc.pages.value.length }} {{ doc.pages.value.length === 1 ? 'page' : 'pages' }} ·
              {{ doc.fieldCount.value }} {{ doc.fieldCount.value === 1 ? 'field' : 'fields' }} · saved in this
              browser</span
            >
          </div>
          <div class="ed__bar-right">
            <div class="ed__group">
              <button
                type="button"
                class="ed__ibtn"
                title="Undo (⌘Z)"
                :disabled="!doc.canUndo.value"
                @click="doc.undo()"
              >
                <Undo2 :size="16" />
              </button>
              <button
                type="button"
                class="ed__ibtn"
                title="Redo (⇧⌘Z)"
                :disabled="!doc.canRedo.value"
                @click="doc.redo()"
              >
                <Redo2 :size="16" />
              </button>
            </div>
            <div class="ed__group">
              <button type="button" class="ed__ibtn" title="Zoom out" @click="setZoom(zoom - 10)">
                <Minus :size="16" />
              </button>
              <span class="ed__zoom">{{ zoom }}%</span>
              <button type="button" class="ed__ibtn" title="Zoom in" @click="setZoom(zoom + 10)">
                <Plus :size="16" />
              </button>
            </div>
            <div class="ed__mode">
              <button
                type="button"
                class="ed__mode-btn"
                :class="{ 'is-active': mode === 'edit' }"
                @click="setMode('edit')"
              >
                Edit
              </button>
              <button
                type="button"
                class="ed__mode-btn"
                :class="{ 'is-active': mode === 'test' }"
                @click="setMode('test')"
              >
                Test fill
              </button>
            </div>
            <FButton variant="primary" size="md" :disabled="busy" @click="setMode('test')"
              ><Download :size="16" class="me-1" /> Download</FButton
            >
            <button type="button" class="ed__ibtn" title="Bookmark this tool" @click="bookmarkHint">
              <Bookmark :size="16" />
            </button>
            <button type="button" class="ed__ibtn" title="Start over" @click="startOver">
              <RotateCcw :size="16" />
            </button>
            <span class="ed__sep"></span>
            <button
              type="button"
              class="ed__ibtn ed__close"
              title="Close editor (your work is saved)"
              @click="closeEditor"
            >
              <X :size="18" />
            </button>
          </div>
        </div>

        <div v-if="mode === 'test'" class="ed__banner">
          <Eye :size="16" />
          <span
            ><strong>Test-fill mode.</strong> This is exactly what recipients get. Type into the fields to check sizes
            and tab order. Nothing you type here is saved into the download.</span
          >
        </div>

        <div class="ed__body">
          <!-- Left rail -->
          <aside v-if="mode === 'edit'" class="ed__rail">
            <PdfToolPalette @add="addFromPalette" />
            <div class="ed__pages">
              <div class="ed__pages-title">Pages</div>
              <div class="ed__pages-list">
                <button
                  v-for="(p, idx) in doc.pages.value"
                  :key="idx"
                  type="button"
                  class="ed__page-chip"
                  :class="{ 'is-active': activePage === idx }"
                  @click="goToPage(idx)"
                >
                  {{ idx + 1 }}
                </button>
                <button
                  v-if="!doc.isUpload.value"
                  type="button"
                  class="ed__page-chip ed__page-chip--add"
                  title="Add page"
                  @click="doc.addPage()"
                >
                  <Plus :size="14" />
                </button>
              </div>
              <button
                v-if="!doc.isUpload.value && doc.pages.value.length > 1"
                type="button"
                class="ed__link-btn"
                @click="removeActivePage"
              >
                Remove page {{ activePage + 1 }}
              </button>
            </div>
          </aside>

          <!-- Canvas / test viewer -->
          <main ref="canvasArea" class="ed__canvas" @click.self="clearSelection">
            <template v-if="mode === 'edit'">
              <div
                v-for="(page, idx) in doc.pages.value"
                :key="idx"
                class="ed__page-wrap"
                :ref="(el) => (pageEls[idx] = el)"
              >
                <CanvasPage
                  :elements="page.elements"
                  :selected-ids="activePage === idx ? selectedIds : []"
                  :zoom="zoom"
                  :page-width="page.width"
                  :page-height="page.height"
                  :pdf-backdrop="doc.backdrops.value[idx] || null"
                  :disable-snap="doc.isUpload.value"
                  :global-typography="doc.pdfSettings.value.typography"
                  :margin="doc.pdfSettings.value.margin"
                  :page-index="idx"
                  :page-count="doc.pages.value.length"
                  :active="activePage === idx"
                  @select="onSelect($event, idx)"
                  @toggle-select="onToggleSelect($event, idx)"
                  @deselect="onDeselect(idx)"
                  @activate="activePage = idx"
                  @add="onAdd($event, idx)"
                  @update="onUpdate($event, idx)"
                  @clone="onClone($event, idx)"
                  @delete="onDelete($event, idx)"
                  @transfer="doc.transferElement(idx, $event)"
                />
                <div class="ed__page-label">Page {{ idx + 1 }} of {{ doc.pages.value.length }}</div>
              </div>
            </template>
            <template v-else>
              <div v-if="busy === 'test'" class="ed__loading">
                <span class="spinner-border spinner-border-sm" role="status"></span> Generating your PDF…
              </div>
              <iframe v-else-if="testUrl" :src="testUrl" class="ed__frame" title="Test-fill preview"></iframe>
            </template>
          </main>

          <!-- Right panel -->
          <aside class="ed__side">
            <PdfToolDownloadPanel
              v-if="mode === 'test'"
              :field-count="doc.fieldCount.value"
              :busy="busy"
              :downloaded="lastDownload"
              @download="download"
              @bridge="onBridge"
              @share="onShare"
            />
            <PdfToolProperties
              v-else-if="selectedElement"
              :element="selectedElement"
              :page-index="activePage"
              :all-elements="allElements"
              @patch="onPropsPatch"
              @clone="onClone(selectedElement.id, activePage)"
              @delete="onDelete(selectedElement.id, activePage)"
            />
            <div v-else class="ed__tips">
              <div class="ed__tips-title">Nothing selected</div>
              <p>Click a field on the page to edit its name, options and look.</p>
              <ul>
                <li>Drag from the palette, or click a palette item to place it.</li>
                <li>Radios with the same field name become one group.</li>
                <li>Switch to <strong>Test fill</strong> to try the form before downloading.</li>
              </ul>
            </div>
          </aside>
        </div>

        <div v-if="toast" class="ed__toast" role="status">{{ toast }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import {
  FileUp,
  FileText,
  CircleAlert,
  Undo2,
  Redo2,
  Minus,
  Plus,
  Download,
  RotateCcw,
  Eye,
  Bookmark,
  X,
} from '@lucide/vue'
import { CanvasPage } from '@formester/pdf-canvas'
import '@formester/pdf-canvas/tokens.css'
import { usePdfDownload, flattenPdf, createElement, PDF_SCHEMA } from '@formester/pdf-core'
import FButton from '@/components/UI/FButton.vue'
import PdfToolPalette from '@/components/tools/pdf/PdfToolPalette.vue'
import PdfToolProperties from '@/components/tools/pdf/PdfToolProperties.vue'
import PdfToolDownloadPanel from '@/components/tools/pdf/PdfToolDownloadPanel.vue'
import { usePdfToolDocument } from '@/composables/usePdfToolDocument'
import { useToolAnalytics } from '@/composables/useToolAnalytics'

const emit = defineEmits(['started', 'closed'])

const SIZES = [
  { value: 'Letter', label: 'Letter', dims: '8.5 × 11 in', w: 34, h: 44 },
  { value: 'A4', label: 'A4', dims: '210 × 297 mm', w: 32, h: 45 },
]

const doc = usePdfToolDocument()
const { downloadPdf } = usePdfDownload({ notify: (m) => showToast(m) })

const fileInput = ref(null)
const canvasArea = ref(null)
const pageEls = ref([])
const dragOver = ref(false)
const blankSize = ref('Letter')
const blankOrientation = ref('portrait')

const editorOpen = ref(false)
const selectedIds = ref([])
const activePage = ref(0)
const zoom = ref(100)
const mode = ref('edit')
const testUrl = ref(null)
const lastDownload = ref('')
const busy = ref(false)
const toast = ref('')
let toastTimer = null

const displayName = computed(() => {
  const n = doc.source.value?.fileName || 'untitled'
  return n.length > 42 ? `${n.slice(0, 39)}…` : n
})
const allElements = computed(() => doc.pages.value.flatMap((p) => p.elements))
const selectedElement = computed(() => {
  if (selectedIds.value.length !== 1) return null
  return doc.pages.value[activePage.value]?.elements.find((e) => e.id === selectedIds.value[0]) ?? null
})
const baseName = computed(() => (doc.source.value?.fileName || 'form').replace(/\.pdf$/i, ''))

// ---- analytics (consent-gated, same guard as layouts/default.vue) -----------
const { track } = useToolAnalytics()
function showToast(msg) {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toast.value = ''), 3500)
}

// ---- start -----------------------------------------------------------------
async function onPickFile(e) {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (await doc.loadFile(file)) afterStart('upload')
}
async function onDropFile(e) {
  dragOver.value = false
  const file = e.dataTransfer?.files?.[0]
  if (await doc.loadFile(file)) afterStart('upload')
}
function startBlank() {
  doc.startBlank(blankSize.value, blankOrientation.value)
  afterStart('blank')
}
function afterStart(door) {
  selectedIds.value = []
  activePage.value = 0
  mode.value = 'edit'
  track('pdf_tool_start', { door })
  openEditor()
  nextTick(fitZoom)
  if (door === 'upload' && doc.fieldCount.value) showToast(`Found ${doc.fieldCount.value} existing fields in this PDF.`)
}
async function startOver() {
  if (doc.fieldCount.value && !window.confirm('Start over? This clears the current document from this browser.')) return
  revokeTest()
  await doc.reset()
  selectedIds.value = []
  mode.value = 'edit'
  closeEditor()
}

// ---- full-screen editor ------------------------------------------------------
function lockScroll(lock) {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = lock ? 'hidden' : ''
  document.body.classList.toggle('fpc-editor-open', lock)
}
function openEditor() {
  editorOpen.value = true
  lockScroll(true)
  emit('started', doc.source.value?.type ?? 'resume')
  nextTick(fitZoom)
}
function closeEditor() {
  revokeTest()
  mode.value = 'edit'
  lastDownload.value = ''
  clearSelection()
  editorOpen.value = false
  lockScroll(false)
  emit('closed')
}
/** Browsers do not allow adding bookmarks from a page; the closest thing is telling people the shortcut. */
function bookmarkHint() {
  const mac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
  showToast(`Press ${mac ? '⌘' : 'Ctrl'} + D to bookmark this tool.`)
  track('pdf_tool_bookmark_hint')
}
defineExpose({ bookmarkHint })

// ---- zoom / pages ----------------------------------------------------------
function setZoom(z) {
  zoom.value = Math.max(40, Math.min(200, Math.round(z)))
}
function fitZoom() {
  const area = canvasArea.value
  const page = doc.pages.value[0]
  if (!area || !page) return
  const avail = area.clientWidth - 64
  setZoom(Math.min(130, (avail / page.width) * 100))
}
function goToPage(idx) {
  activePage.value = idx
  pageEls.value[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function removeActivePage() {
  doc.removePage(activePage.value)
  activePage.value = Math.max(0, activePage.value - 1)
  selectedIds.value = []
}

// ---- selection / mutations -------------------------------------------------
function clearSelection() {
  selectedIds.value = []
}
function onDeselect(idx) {
  clearSelection()
  activePage.value = idx
}
function onSelect(id, idx) {
  activePage.value = idx
  selectedIds.value = [id]
}
function onToggleSelect(id, idx) {
  activePage.value = idx
  selectedIds.value = selectedIds.value.includes(id)
    ? selectedIds.value.filter((x) => x !== id)
    : [...selectedIds.value, id]
}
function materialize(el, page) {
  // CanvasPage builds a generic element from the drop payload; fillables get their preset and auto-name here.
  if (el.type !== 'fillable') return el
  const made = doc.createFillableElement(el.content?.fieldType ?? 'text', el.x, el.y)
  made.x = Math.max(0, Math.min(page.width - made.w, el.x))
  made.y = Math.max(0, Math.min(page.height - made.h, el.y))
  return made
}
function onAdd(el, idx) {
  const page = doc.pages.value[idx]
  const made = doc.addElement(idx, materialize(el, page))
  onSelect(made.id, idx)
  if (made.type === 'fillable') track('pdf_tool_field_added', { fieldType: made.content.fieldType })
}
function addFromPalette(item) {
  const idx = activePage.value
  const page = doc.pages.value[idx]
  if (!page) return
  const m = doc.pdfSettings.value.margin
  const bottom = page.elements.reduce((max, e) => Math.max(max, e.y + e.h), m.top - 12)
  const draft = createElement(item, m.left + 24, Math.min(bottom + 12, page.height - 40))
  onAdd(draft, idx)
}
function onUpdate({ id, ...changes }, idx) {
  doc.patchElement(idx, id, changes)
}
function onClone(id, idx) {
  const made = doc.cloneElement(idx, id)
  if (made) onSelect(made.id, idx)
}
function onDelete(id, idx) {
  doc.removeElements(idx, [id])
  selectedIds.value = selectedIds.value.filter((x) => x !== id)
}
function onPropsPatch(patch) {
  if (!selectedElement.value) return
  doc.patchElement(activePage.value, selectedElement.value.id, patch)
}

// ---- keyboard --------------------------------------------------------------
function isTyping(e) {
  const t = e.target
  return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)
}
function onKeydown(e) {
  if (!doc.ready.value || !editorOpen.value || mode.value !== 'edit' || isTyping(e)) return
  const meta = e.metaKey || e.ctrlKey
  if (meta && e.key.toLowerCase() === 'z') {
    e.preventDefault()
    e.shiftKey ? doc.redo() : doc.undo()
    return
  }
  if (meta && e.key.toLowerCase() === 'd' && selectedIds.value.length === 1) {
    e.preventDefault()
    onClone(selectedIds.value[0], activePage.value)
    return
  }
  if ((e.key === 'Delete' || e.key === 'Backspace') && selectedIds.value.length) {
    e.preventDefault()
    doc.removeElements(activePage.value, selectedIds.value)
    selectedIds.value = []
    return
  }
  if (e.key === 'Escape') {
    clearSelection()
    return
  }
  const step = e.shiftKey ? 8 : 1
  const nudge = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key]
  if (nudge && selectedIds.value.length) {
    e.preventDefault()
    const page = doc.pages.value[activePage.value]
    for (const id of selectedIds.value) {
      const el = page.elements.find((x) => x.id === id)
      if (!el) continue
      doc.patchElement(activePage.value, id, {
        x: Math.max(0, Math.min(page.width - el.w, el.x + nudge[0])),
        y: Math.max(0, Math.min(page.height - el.h, el.y + nudge[1])),
      })
    }
  }
}

// ---- generate / test / download -------------------------------------------
function revokeTest() {
  if (testUrl.value) URL.revokeObjectURL(testUrl.value)
  testUrl.value = null
}
async function buildBlobUrl() {
  // sourceType 'upload' keeps absolute positioning (no auto-pagination) in both doors;
  // with no pdfUrl the core draws on blank pages of the chosen size.
  // pdfme structured-clones the template; Vue proxies cannot be cloned, so hand it plain data.
  return downloadPdf({
    pages: JSON.parse(JSON.stringify(doc.pages.value)),
    pdfSettings: JSON.parse(JSON.stringify(doc.pdfSettings.value)),
    filename: `${baseName.value}-fillable.pdf`,
    sourceType: 'upload',
    pdfUrl: doc.isUpload.value ? doc.pdfUrl.value : null,
    silent: true,
  })
}
async function setMode(next) {
  if (next === mode.value && next === 'edit') return
  mode.value = next
  clearSelection()
  if (next === 'test') {
    busy.value = 'test'
    try {
      revokeTest()
      const url = await buildBlobUrl()
      if (!url) throw new Error('generate failed')
      testUrl.value = `${url}#toolbar=0&navpanes=0`
      track('pdf_tool_test_fill', { fields: doc.fieldCount.value, pages: doc.pages.value.length })
    } catch (e) {
      console.error(e)
      showToast('Could not build the preview. Try again.')
      mode.value = 'edit'
    } finally {
      busy.value = false
    }
  } else {
    revokeTest()
  }
}
function saveAs(bytes, filename) {
  const blob = new Blob([bytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 5000)
}
async function download(kind) {
  busy.value = kind
  try {
    const url = testUrl.value ? testUrl.value.split('#')[0] : await buildBlobUrl()
    if (!url) throw new Error('generate failed')
    const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer())
    if (kind === 'flattened') {
      saveAs(await flattenPdf(bytes), `${baseName.value}-flat.pdf`)
    } else {
      saveAs(bytes, `${baseName.value}-fillable.pdf`)
    }
    lastDownload.value = kind
    track('pdf_tool_download', {
      mode: kind,
      door: doc.source.value?.type,
      fields: doc.fieldCount.value,
      pages: doc.pages.value.length,
    })
    showToast(kind === 'flattened' ? 'Downloaded a flattened copy.' : 'Downloaded your fillable PDF.')
  } catch (e) {
    console.error(e)
    showToast('Download failed. Try again.')
  } finally {
    busy.value = false
  }
}
function onBridge(target) {
  track('pdf_tool_bridge_click', { target })
}
function onShare(channel) {
  track('pdf_tool_share', { channel })
}

// ---- lifecycle -------------------------------------------------------------
onMounted(async () => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', fitZoom)
  // A saved document shows as a resume card; the full-screen editor opens only on a click.
  await doc.restore()
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', fitZoom)
  revokeTest()
  lockScroll(false)
})
watch(
  () => doc.pages.value.length,
  (n) => {
    if (activePage.value > n - 1) activePage.value = Math.max(0, n - 1)
  },
)
void PDF_SCHEMA
</script>

<style scoped>
.pdf-tool {
  width: 100%;
}
/* ---------- resume card ---------- */
.resume {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  margin-bottom: var(--space-5);
  background: var(--bg-primary);
  border: 1px solid var(--border-violet);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
}
.resume__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--bg-violet-50);
  color: var(--violet-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.resume__text {
  flex: 1;
  min-width: 0;
}
.resume__title {
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.resume__sub {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.resume__actions {
  display: flex;
  gap: var(--space-2);
  flex: none;
}

/* ---------- start screen ---------- */
.start {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--space-5);
  position: relative;
}
.start__drop {
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  min-height: 340px;
  padding: var(--space-10);
  background: var(--bg-violet-25);
  border: 2px dashed var(--border-violet);
  border-radius: var(--r-2xl);
  text-align: center;
  cursor: pointer;
  transition:
    background 140ms ease,
    border-color 140ms ease;
}
.start__drop.is-over {
  background: var(--violet-50);
  border-color: var(--violet-500);
}
.start__drop.is-loading {
  opacity: 0.7;
  pointer-events: none;
}
.start__drop:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring-primary);
}
.start__drop-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--r-2xl);
  background: var(--bg-primary);
  box-shadow: var(--shadow-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-500);
}
.start__drop-title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.start__drop-sub {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  margin-top: -10px;
}
.start__blank {
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-8);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
}
.start__blank-title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.start__blank-sub {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  margin-top: 4px;
}
.start__sizes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.start__size {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 10px;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  background: var(--bg-primary);
}
.start__size.is-active {
  border-color: var(--violet-500);
  background: var(--bg-violet-25);
}
.start__size-page {
  display: block;
  background: #fff;
  border: 1px solid var(--border-dark);
  border-radius: 3px;
}
.start__size-name {
  font-size: 13px;
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.start__size-dims {
  font-size: 11px;
  color: var(--fg-3);
}
.start__orient {
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  background: var(--bg-grey-50);
  align-self: flex-start;
}
.start__seg {
  border: 0;
  background: transparent;
  font-size: 13px;
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
  border-radius: var(--r-full);
  padding: 7px 14px;
  line-height: 1;
}
.start__seg.is-active {
  background: var(--violet-500);
  color: #fff;
}
.start__error {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: var(--r-lg);
  background: var(--error-50);
  color: var(--error);
  font-size: var(--fs-sm);
}
@media (max-width: 860px) {
  .start__drop,
  .start__blank {
    grid-column: 1 / -1;
  }
}

/* ---------- editor ---------- */
.ed {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--bg-grey-100);
  font-family: var(--font-primary);
  color: var(--fg-1);
}
.ed__close {
  color: var(--fg-2);
}
.ed__close:hover {
  background: var(--bg-grey-100);
  color: var(--fg-1);
}
.ed__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  height: 56px;
  padding: 0 var(--space-4) 0 var(--space-5);
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-light);
}
.ed__bar-left,
.ed__bar-right {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
}
.ed__bar-left {
  gap: var(--space-3);
}
.ed__brand {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}
.ed__sep {
  width: 1px;
  height: 22px;
  background: var(--border-light);
}
.ed__file {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  white-space: nowrap;
}
.ed__meta {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  white-space: nowrap;
}
.ed__group {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  background: var(--bg-primary);
}
.ed__ibtn {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: var(--r-md);
  background: transparent;
  color: var(--fg-strong);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ed__ibtn:hover {
  background: var(--bg-grey-100);
}
.ed__ibtn:disabled {
  color: var(--border-dark);
}
.ed__zoom {
  font-size: 13px;
  font-weight: var(--fw-medium);
  color: var(--fg-strong);
  min-width: 44px;
  text-align: center;
}
.ed__mode {
  display: flex;
  padding: 2px;
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  background: var(--bg-grey-50);
}
.ed__mode-btn {
  border: 0;
  background: transparent;
  font-size: 13px;
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
  border-radius: var(--r-full);
  padding: 7px 14px;
  line-height: 1;
}
.ed__mode-btn.is-active {
  background: var(--violet-500);
  color: #fff;
}
.ed__banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 40px;
  padding: 6px var(--space-4);
  background: var(--bg-violet-25);
  border-bottom: 1px solid #e4dafc;
  font-size: 13px;
  color: var(--violet-600);
}
.ed__body {
  display: flex;
  flex: 1;
  min-height: 0;
}
.ed__rail {
  width: 232px;
  flex: none;
  background: var(--bg-primary);
  border-right: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.ed__pages {
  margin-top: auto;
  border-top: 1px solid var(--border-light);
  padding: var(--space-3) var(--space-4) var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ed__pages-title {
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg-3);
}
.ed__pages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ed__page-chip {
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--border-dark);
  border-radius: var(--r-lg);
  background: var(--bg-primary);
  font-size: 12px;
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ed__page-chip.is-active {
  border-color: var(--violet-500);
  color: var(--violet-500);
  background: var(--bg-violet-25);
}
.ed__page-chip--add {
  border-style: dashed;
}
.ed__link-btn {
  border: 0;
  background: transparent;
  padding: 0;
  font-size: 12px;
  color: var(--fg-3);
  text-align: left;
}
.ed__link-btn:hover {
  color: var(--error);
}
.ed__canvas {
  flex: 1;
  min-width: 0;
  overflow: auto;
  padding: 28px 32px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.ed__page-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.ed__page-label {
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-3);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  padding: 4px 10px;
}
.ed__frame {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-md);
}
.ed__loading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto;
  font-size: var(--fs-sm);
  color: var(--fg-2);
}
.ed__side {
  width: 320px;
  flex: none;
  background: var(--bg-primary);
  border-left: 1px solid var(--border-light);
  min-height: 0;
  overflow: hidden;
}
.ed--test .ed__side {
  width: 380px;
}
.ed__tips {
  padding: var(--space-5);
  font-size: 13px;
  color: var(--fg-2);
  line-height: 1.55;
}
.ed__tips-title {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  margin-bottom: 6px;
}
.ed__tips ul {
  padding-left: 18px;
  margin: 10px 0 0;
}
.ed__toast {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  background: var(--fg-1);
  color: #fff;
  font-size: 13px;
  padding: 10px 14px;
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-lg);
  z-index: 5;
}
@media (max-width: 1100px) {
  .ed__meta {
    display: none;
  }
  .ed__side {
    width: 280px;
  }
}
@media (max-width: 860px) {
  .ed__rail,
  .ed__side {
    display: none;
  }
}
</style>

<style>
/* Global: third-party floating widgets sit above the full-screen editor otherwise. */
body.fpc-editor-open #crisp-chatbox,
body.fpc-editor-open .crisp-client {
  display: none !important;
}
</style>
