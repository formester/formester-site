<template>
  <Teleport to="body">
    <div class="media-tool-scope">
      <div class="s3-modal-scrim" @click="close">
      <div class="dlg dlg--wide" @click.stop>
        <div class="dlg__h">
          <div>
            <div class="dlg__title">Upload files</div>
            <div class="dlg__sub">To {{ pathLabel }}</div>
          </div>
          <button class="dlg__close" aria-label="Close" @click="close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div class="s3-upload-drop">
          <div
            class="dropzone"
            :style="dragActive ? 'border-color:var(--accent-500);background:var(--accent-tint);' : ''"
            @click="browse"
            @dragover.prevent="dragActive = true"
            @dragleave.prevent="dragActive = false"
            @drop.prevent="onDrop"
          >
            <svg class="dropzone__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V4m0 0 4 4m-4-4-4 4"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
            <div style="font-weight:600;">Drag files here or click to browse</div>
            <div class="field__hint">Uploads to the folder you're currently viewing</div>
          </div>
          <input ref="fileInput" type="file" multiple style="display:none;" @change="onFileInputChange" />
        </div>

        <div v-if="files.length" class="s3-upload-list">
          <div v-for="f in files" :key="f.id" class="s3-upload-row">
            <span
              class="s3-upload-row__icon"
              :class="{ 's3-upload-row__icon--preview': f.previewUrl }"
              :style="f.previewUrl ? `background-image:url('${f.previewUrl}');` : ''"
              @click="f.previewUrl && openPreview(f)"
            >
              <svg v-if="!f.previewUrl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
            </span>
            <span class="s3-upload-row__main">
              <span v-if="f.editing" class="s3-upload-row__edit-row">
                <input
                  :ref="(el) => setEditInputRef(el, f.id)"
                  v-model="f.draftName"
                  class="input s3-upload-row__edit-input"
                  type="text"
                  @keydown.enter="confirmRename(f)"
                  @keydown.escape="cancelRename(f)"
                />
                <button class="s3-upload-row__edit-btn" aria-label="Confirm rename" @click="confirmRename(f)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </button>
                <button class="s3-upload-row__edit-btn" aria-label="Cancel rename" @click="cancelRename(f)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </span>
              <span v-else class="s3-upload-row__name-wrap">
                <span class="s3-upload-row__name">{{ f.name }}</span>
                <button
                  v-if="f.status === 'pending'"
                  class="s3-upload-row__edit-toggle"
                  aria-label="Rename before upload"
                  @click="startRename(f)"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
                </button>
              </span>
              <span v-if="f.status === 'pending'" class="s3-upload-row__meta">{{ formatSize(f.size) }}</span>
              <span v-else-if="f.status === 'done'" class="s3-upload-row__meta">{{ formatSize(f.size) }} · Uploaded</span>
              <span v-else-if="f.status === 'error'" class="s3-upload-row__error">{{ f.error }}</span>
              <span v-else class="progress" style="margin-top:5px;"><span class="progress__bar" :style="`width:${f.progress}%;`"></span></span>
            </span>
            <span v-if="f.status === 'done'" class="s3-upload-row__done">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <button v-else class="s3-upload-row__remove" aria-label="Remove file" @click="removeFile(f.id)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        <div class="dlg__f">
          <button class="btn btn--primary" :disabled="uploading" @click="onDoneClick">{{ doneLabel }}</button>
        </div>
      </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { uploadFile } from '../useMediaApi'

const props = defineProps({
  prefix: { type: String, default: '' }
})
const emit = defineEmits(['close', 'uploaded'])

const pathLabel = computed(() => (props.prefix ? props.prefix.replace(/\/$/, '') : 'root'))
const fileInput = useTemplateRef('fileInput')
const dragActive = ref(false)
const files = ref([])
const uploading = ref(false)
const _uploads = {}
const _editInputs = {}
let _seq = 0

function setEditInputRef(el, id) {
  if (el) _editInputs[id] = el
  else delete _editInputs[id]
}

function formatSize(bytes) {
  bytes = bytes || 0
  if (bytes < 1024) return `${bytes.toFixed(0)} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`
}

const pendingCount = computed(() => files.value.filter((f) => f.status === 'pending').length)
const doneLabel = computed(() => {
  if (uploading.value) return 'Uploading…'
  if (pendingCount.value > 0) return `Upload (${pendingCount.value})`
  return files.value.length ? 'Done' : 'Close'
})

function browse() {
  fileInput.value?.click()
}

function onFileInputChange(e) {
  addFiles(e.target.files)
  e.target.value = ''
}

function onDrop(e) {
  dragActive.value = false
  addFiles(e.dataTransfer.files)
}

function addFiles(fileList) {
  const arr = Array.from(fileList || [])
  arr.forEach((file) => {
    const id = `u${++_seq}`
    const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : ''
    files.value.push({
      id, file, name: file.name, size: file.size, previewUrl,
      editing: false, draftName: '', progress: 0, status: 'pending', error: ''
    })
  })
}

function startRename(f) {
  f.draftName = f.name
  f.editing = true
  nextTick(() => {
    const input = _editInputs[f.id]
    input?.focus()
    input?.select()
  })
}
function confirmRename(f) {
  const name = f.draftName.trim()
  if (name) f.name = name
  f.editing = false
}
function cancelRename(f) {
  f.editing = false
}

function openPreview(f) {
  window.open(f.previewUrl, '_blank', 'noopener')
}

function removeFile(id) {
  _uploads[id]?.abort()
  const row = files.value.find((f) => f.id === id)
  if (row?.previewUrl) URL.revokeObjectURL(row.previewUrl)
  files.value = files.value.filter((f) => f.id !== id)
}

async function startUpload() {
  const pending = files.value.filter((f) => f.status === 'pending')
  if (!pending.length) return
  uploading.value = true
  await Promise.allSettled(pending.map((row) => {
    row.status = 'uploading'
    const { promise, abort } = uploadFile(props.prefix, row.file, (pct) => { row.progress = pct }, row.name)
    _uploads[row.id] = { abort }
    return promise
      .then(() => { row.status = 'done'; row.progress = 100 })
      .catch((err) => { row.status = 'error'; row.error = err?.message || 'Upload failed' })
      .finally(() => { delete _uploads[row.id] })
  }))
  uploading.value = false
  emit('uploaded')
}

function onDoneClick() {
  if (pendingCount.value > 0) startUpload()
  else close()
}

function close() {
  files.value.forEach((f) => { if (f.previewUrl) URL.revokeObjectURL(f.previewUrl) })
  emit('close')
}
</script>
