<template>
  <section class="ai-hero">
    <div class="ai-hero__grid">
    <div class="ai-hero__header">
      <div class="ai-hero__badge">
        <span class="dot"></span>
        {{ badgeText }}
      </div>
      <SectionHeader :title="title" :description="description" tag="h1" size="xl" spacing="none" align="left" />
    </div>

    <!-- Single canvas -->
    <div class="ai-canvas">
      <Transition name="canvas-fade" mode="out-in">

        <!-- State: Input -->
        <div
          v-if="!isGenerating && !surveyUrl"
          key="input"
          class="canvas-input"
          :class="{ 'is-dragging': isDragging }"
          @dragenter.prevent="onDragEnter"
          @dragover.prevent
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
        >
          <div v-if="isDragging" class="drop-overlay">Drop files here</div>

          <div class="chat-box">
            <textarea
              v-model="prompt"
              class="chat-textarea"
              :placeholder="typedPlaceholder || placeholder"
              rows="4"
              @paste="onPaste"
            ></textarea>

            <input
              ref="fileInputRef"
              type="file"
              :accept="ACCEPTED_TYPES.join(',')"
              multiple
              style="display: none"
              @change="handleFileSelect"
            />

            <div class="attach-tray">
              <div v-if="fileEntries.length" class="file-chips">
                <div
                  v-for="entry in fileEntries"
                  :key="entry.uid"
                  class="file-chip"
                  :title="entry.file.name"
                >
                  <span v-if="entry.status === 'uploading'" class="file-chip-spinner"></span>
                  <img
                    v-else-if="entry.file.type.startsWith('image/')"
                    :src="getPreviewUrl(entry)"
                    class="file-chip-img"
                    alt=""
                  />
                  <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="file-chip-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span class="file-chip-name">{{ entry.file.name }}</span>
                  <button type="button" class="file-chip-remove" @click="removeFile(entry.uid)">✕</button>
                </div>
              </div>

              <div class="attach-row">
                <button
                  type="button"
                  class="attach-btn"
                  :disabled="fileEntries.length >= MAX_FILES"
                  @click="fileInputRef.click()"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                  Attach files
                </button>
                <span class="attach-meta">PDF or image · max 10 MB · up to {{ MAX_FILES }} files</span>
              </div>
              <p v-if="uploadError" class="upload-error">{{ uploadError }}</p>
            </div>
          </div>

          <div v-if="suggestions && suggestions.length" class="canvas-chips">
            <button
              v-for="(chip, i) in suggestions"
              :key="i"
              class="canvas-chip"
              @click="setPrompt(chip.text)"
            >{{ chip.label || chip.text }}</button>
          </div>

          <button
            class="canvas-btn"
            :disabled="!prompt || isAnyUploading"
            @click="handleGenerate"
          >
            {{ buttonText }}
          </button>
          <p v-if="footerItems && footerItems.length" class="canvas-footer">
            <template v-for="(item, i) in footerItems" :key="i">
              <span v-if="i > 0" class="canvas-footer__sep">·</span>
              {{ item.text }}
            </template>
          </p>
        </div>

        <!-- State: Generating -->
        <div v-else-if="isGenerating" key="loading" class="canvas-loading">
          <div class="loading-label">
            <span class="loading-dot"></span>
            Generating your form…
          </div>
          <p class="loading-hint">This may take a minute. Hang tight!</p>
          <div class="loading-skeleton" aria-hidden="true">
            <div v-for="n in 4" :key="n" class="sk-row" :style="{ animationDelay: 0.2 + n * 0.45 + 's' }">
              <span class="sk-label" :style="{ width: 28 + (n % 3) * 14 + '%' }"></span>
              <span class="sk-input"></span>
            </div>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="progress-text">{{ progress }}% completed</div>
        </div>

        <!-- State: Result -->
        <div v-else key="result" class="canvas-result">
          <!-- Toolbar -->
          <div class="result-toolbar">
            <button class="toolbar-back" @click="reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>
              Try another
            </button>
            <span class="toolbar-title">{{ generatedTitle }}</span>
            <a :href="editUrl" target="_blank" class="toolbar-cta">Edit this form →</a>
          </div>

          <!-- Live form preview via iframe -->
          <iframe
            :src="surveyUrl"
            class="result-iframe"
            frameborder="0"
            title="Form preview"
          ></iframe>
        </div>

      </Transition>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import axios from 'axios'
import SectionHeader from '@/components/v2/SectionHeader.vue'

const props = defineProps({
  title: { type: Array, default: () => [] },
  description: String,
  type: { type: String, default: 'form' },
  suggestions: { type: Array, default: () => [] },
  buttonText: { type: String, default: 'Generate Form' },
  placeholder: { type: String, default: 'Describe the form you need…' },
  badgeText: { type: String, default: 'TRY IT NOW. NO SIGN-UP REQUIRED.' },
  footerItems: { type: Array, default: () => [
    { text: 'Free forever' },
    { text: 'No credit card' },
    { text: 'Your prompt stays private' },
  ]},
})

const CMS_TYPE_MAP = {
  'Form': 'form',
  'Score Quiz': 'score_quiz',
  'Outcome Quiz': 'outcome_quiz',
}
const apiType = computed(() => CMS_TYPE_MAP[props.type] || props.type || 'form')

const config = useRuntimeConfig()
const { $notify } = useNuxtApp()
const prompt = ref('')
const isGenerating = ref(false)
const surveyUrl = ref('')
const generatedTitle = ref('')
const previewToken = ref('')
const progress = ref(0)
let progressInterval = null
let slowInterval = null

function startProgress() {
  progress.value = 0
  // Phase 1 — fast initial burst to 60%
  progressInterval = setInterval(() => {
    if (progress.value < 60) {
      progress.value = Math.min(60, progress.value + Math.floor(Math.random() * 5) + 1)
    } else {
      clearInterval(progressInterval)
    }
  }, 1000)
  // Phase 2 — slow crawl from 60% to 97%
  slowInterval = setInterval(() => {
    if (progress.value >= 60 && progress.value < 97) {
      progress.value = Math.min(97, progress.value + Math.floor(Math.random() * 5) + 1)
    }
  }, 5000)
}

function stopProgress() {
  clearInterval(progressInterval)
  clearInterval(slowInterval)
  progressInterval = null
  slowInterval = null
}

const fileInputRef = ref(null)
const {
  fileEntries,
  uploadError,
  isDragging,
  isAnyUploading,
  readyFiles,
  ACCEPTED_TYPES,
  MAX_FILES,
  getPreviewUrl,
  onDragEnter,
  onDragLeave,
  onDrop,
  onPaste,
  handleFileSelect,
  removeFile,
  clearFiles,
} = useAiFileAttachments()

const setPrompt = (text) => { prompt.value = text }

const typedPlaceholder = ref('')
let typeTimer = null
onMounted(() => {
  const examples = (props.suggestions || []).map((s) => s.text).filter(Boolean)
  if (!examples.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let i = 0
  let len = 0
  typeTimer = setInterval(() => {
    if (prompt.value) return
    const text = examples[i % examples.length]
    len += 2
    typedPlaceholder.value = text.slice(0, len)
    if (len >= text.length + 60) { i++; len = 0 }
  }, 30)
})
onBeforeUnmount(() => clearInterval(typeTimer))

const reset = () => {
  prompt.value = ''
  surveyUrl.value = ''
  generatedTitle.value = ''
  previewToken.value = ''
  clearFiles()
}

const pollStatus = async (processId) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const { data } = await axios.get(`${config.public.appUrl}/api/site/public_ai_previews/status`, {
          params: { process_id: processId }
        })
        if (data.status === 'success') {
          clearInterval(interval)
          resolve(data)
        } else if (data.status === 'failed') {
          clearInterval(interval)
          reject(new Error(data.error || 'Generation failed'))
        }
      } catch (err) {
        clearInterval(interval)
        reject(err)
      }
    }, 3000)
  })
}

const handleGenerate = async () => {
  if (!prompt.value) return
  isGenerating.value = true
  surveyUrl.value = ''
  generatedTitle.value = ''
  previewToken.value = ''
  startProgress()

  try {
    const body = { prompt: prompt.value, type: apiType.value }
    if (readyFiles.value.length) body.files = readyFiles.value

    const { data } = await axios.post(`${config.public.appUrl}/api/site/public_ai_previews`, body)
    const result = await pollStatus(data.process_id)

    stopProgress()
    progress.value = 100
    await new Promise((resolve) => setTimeout(resolve, 500))

    generatedTitle.value = result.form_name
    surveyUrl.value = result.survey_url
    previewToken.value = result.preview_token
  } catch (err) {
    stopProgress()
    console.error('Generation failed:', err)
    $notify({ text: 'Unable to generate your form. Please try again.', type: 'error' })
  } finally {
    isGenerating.value = false
  }
}

const editUrl = computed(() =>
  `${config.public.appUrl}/guest_sessions?preview_token=${previewToken.value}`
)
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.ai-hero {
  padding: var(--space-30) 20px var(--space-20);
  background: radial-gradient(ellipse at 50% 0%, #f5f0ff 0%, #ffffff 60%);
}

.ai-hero__grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 64px;
  align-items: center;
}

@media (max-width: 991px) {
  .ai-hero__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* ─── Header ────────────────────────────────────────────── */
.ai-hero__header {
  text-align: left;
}

.canvas-footer {
  margin-top: 12px;
  font-size: 12px;
  color: var(--clr-text-secondary);
  text-align: center;
}

.canvas-footer__sep {
  margin: 0 4px;
}

.ai-hero__badge {
  margin-bottom: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: var(--clr-primary-light);
  color: var(--clr-primary);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ai-hero__badge .dot {
  width: 8px;
  height: 8px;
  background: var(--clr-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(100, 52, 208, 0.2);
}


/* ─── Canvas ────────────────────────────────────────────── */
.ai-canvas {
  width: 100%;
  min-width: 0;
}

/* ─── Input state ───────────────────────────────────────── */
.canvas-input {
  background: #ffffff;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08), 0 2px 8px rgba(0,0,0,0.04);
}

/* Chat box: textarea + attachment tray in one bordered container */
.chat-box {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
  margin-bottom: 16px;
}

.chat-box:focus-within {
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 3px rgba(100, 52, 208, 0.1);
}

.chat-textarea {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 14px 16px;
  font-size: 15px;
  font-family: inherit;
  color: var(--clr-text-primary);
  resize: none;
  line-height: 1.5;
}

.attach-tray {
  border-top: 1px solid var(--clr-secondary-gray-stroke);
  padding: 10px 12px;
}

.canvas-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.canvas-chip {
  padding: 6px 14px;
  background: var(--clr-primary-light);
  border: 1px solid var(--clr-primary-light-hover);
  color: var(--clr-primary);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
  font-family: inherit;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.canvas-chip:hover {
  background: var(--clr-primary-light-hover);
  transform: translateY(-1px);
}

.canvas-input {
  position: relative;
}

.canvas-input.is-dragging .chat-box {
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 3px rgba(100, 52, 208, 0.15);
}

.drop-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 240, 255, 0.94);
  border: 2px dashed var(--clr-primary);
  border-radius: 20px;
  color: var(--clr-primary);
  font-size: 14px;
  font-weight: 600;
  pointer-events: none;
}

.file-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.file-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 180px;
  padding: 5px 8px;
  background: var(--clr-primary-light);
  border: 1px solid var(--clr-primary-light-hover);
  border-radius: 8px;
  font-size: 12px;
  color: var(--clr-primary);
}

.file-chip-icon {
  flex-shrink: 0;
}

.file-chip-img {
  width: 18px;
  height: 18px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.file-chip-spinner {
  width: 13px;
  height: 13px;
  border: 2px solid rgba(100, 52, 208, 0.2);
  border-top-color: var(--clr-primary);
  border-radius: 50%;
  animation: chip-spin 0.7s linear infinite;
  flex-shrink: 0;
}

@keyframes chip-spin {
  to { transform: rotate(360deg); }
}

.file-chip-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}

.file-chip-remove {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 11px;
  color: var(--clr-primary);
  padding: 0 2px;
  line-height: 1;
  flex-shrink: 0;
}

.attach-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.attach-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: none;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--clr-text-secondary);
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}

.attach-btn:hover:not(:disabled) {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
  background: var(--clr-primary-light);
}

.attach-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.attach-meta {
  font-size: 12px;
  color: var(--clr-text-secondary);
  opacity: 0.8;
}

.upload-error {
  font-size: 12px;
  color: #d92d20;
  margin: 10px 0 0;
}

.canvas-btn {
  width: 100%;
  padding: 14px;
  background: var(--clr-primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
}

.canvas-btn:hover:not(:disabled) {
  background: var(--clr-primary-hover);
  transform: translateY(-1px);
}

.canvas-btn:disabled {
  background: var(--clr-secondary-gray-stroke);
  color: #98a2b3;
  cursor: not-allowed;
}


/* ─── Loading state ─────────────────────────────────────── */
.canvas-loading {
  background: #ffffff;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 20px;
  padding: 28px 24px;
  min-height: 420px;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08);
}

.loading-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--clr-primary);
  margin-bottom: 24px;
}

.loading-dot {
  width: 8px;
  height: 8px;
  background: var(--clr-primary);
  border-radius: 50%;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
}


.loading-hint {
  font-size: 13px;
  color: var(--clr-text-secondary);
  margin-bottom: 24px;
}

.loading-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.sk-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  animation: skIn 0.4s ease forwards;
}

.sk-label {
  height: 8px;
  border-radius: 4px;
  background: var(--clr-secondary-gray-stroke);
}

.sk-input {
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(90deg, #f2f4f7 25%, #e9ecf1 37%, #f2f4f7 63%);
  background-size: 400% 100%;
  animation: skShimmer 1.4s ease infinite;
}

@keyframes skIn {
  to { opacity: 1; }
}

@keyframes skShimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}

@media (prefers-reduced-motion: reduce) {
  .sk-row { animation: none; opacity: 1; }
  .sk-input { animation: none; }
}

.progress-bar-wrap {
  width: 100%;
  height: 6px;
  background: var(--clr-secondary-gray-stroke);
  border-radius: 100px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-bar-fill {
  height: 100%;
  background: var(--clr-primary);
  border-radius: 100px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 12px;
  color: var(--clr-text-secondary);
  text-align: right;
}

/* ─── Result state ──────────────────────────────────────── */
.canvas-result {
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08), 0 2px 8px rgba(0,0,0,0.04);
  background: #ffffff;
}

.result-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #ffffff;
  border-bottom: 1px solid var(--clr-secondary-gray-stroke);
}

.toolbar-back {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--clr-text-secondary);
  background: none;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  white-space: nowrap;
  font-family: inherit;
  transition: color 0.15s, border-color 0.15s;
  flex-shrink: 0;
}

.toolbar-back:hover {
  color: var(--clr-text-primary);
  border-color: #98a2b3;
}

.toolbar-title {
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  color: var(--clr-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.toolbar-cta {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: var(--clr-primary);
  color: #ffffff;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s;
  flex-shrink: 0;
}

.toolbar-cta:hover { background: var(--clr-primary-hover); color: #ffffff; }

.result-iframe {
  width: 100%;
  height: 520px;
  display: block;
  border: none;
}

/* ─── Transition ────────────────────────────────────────── */
.canvas-fade-enter-active,
.canvas-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.canvas-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.canvas-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
