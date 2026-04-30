<template>
  <section class="ai-hero">
    <div class="ai-hero__header">
      <div class="ai-hero__badge">
        <span class="dot"></span>
        TRY IT NOW. NO SIGN-UP REQUIRED.
      </div>
      <h1 class="ai-hero__title">
        <span
          v-for="(item, index) in title"
          :key="index"
          :class="{ highlight: item.highlight }"
          :style="{ color: item.color }"
        >{{ item.text }}</span>
      </h1>
      <p v-if="description" class="ai-hero__description">{{ description }}</p>
    </div>

    <!-- Single canvas -->
    <div class="ai-canvas">
      <Transition name="canvas-fade" mode="out-in">

        <!-- State: Input -->
        <div v-if="!isGenerating && !surveyUrl" key="input" class="canvas-input">
          <!-- Textarea: hidden when a PDF is selected -->
          <template v-if="!selectedFile">
            <textarea
              v-model="prompt"
              class="canvas-textarea"
              placeholder="Describe the form you need…"
              rows="4"
            ></textarea>

            <div v-if="suggestions && suggestions.length" class="canvas-chips">
              <button
                v-for="(chip, i) in suggestions"
                :key="i"
                class="canvas-chip"
                @click="setPrompt(chip.text)"
              >{{ chip.text }}</button>
            </div>
          </template>

          <!-- PDF upload -->
          <input
            ref="fileInputRef"
            type="file"
            accept=".pdf,application/pdf"
            style="display: none"
            @change="onFileChange"
          />

          <div v-if="selectedFile" class="pdf-selected">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span class="pdf-selected__name">{{ selectedFile.name }}</span>
            <button class="pdf-selected__remove" @click="clearFile">✕</button>
          </div>

          <button v-else class="pdf-upload-btn" @click="fileInputRef.click()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Upload PDF
          </button>

          <button
            class="canvas-btn"
            :disabled="!prompt && !selectedFile"
            @click="handleGenerate"
          >
            {{ isUploading ? 'Uploading…' : 'Generate Form' }}
          </button>
          <p class="canvas-footer">Free forever · No credit card · Your prompt stays private</p>
        </div>

        <!-- State: Generating -->
        <div v-else-if="isGenerating" key="loading" class="canvas-loading">
          <div class="loading-label">
            <span class="loading-dot"></span>
            Generating your form…
          </div>
          <div class="shimmer sh-title"></div>
          <div class="shimmer sh-label"></div>
          <div class="shimmer sh-input"></div>
          <div class="shimmer sh-label short"></div>
          <div class="shimmer sh-input"></div>
          <div class="shimmer sh-label"></div>
          <div class="shimmer sh-options"></div>
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
            <a :href="claimUrl" target="_blank" class="toolbar-cta">Use this form free →</a>
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
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  title: { type: Array, default: () => [] },
  description: String,
  type: { type: String, default: 'form' },
  suggestions: { type: Array, default: () => [] }
})

const CMS_TYPE_MAP = {
  'Form': 'form',
  'Score Quiz': 'score_quiz',
  'Outcome Quiz': 'outcome_quiz',
}
const apiType = computed(() => CMS_TYPE_MAP[props.type] || props.type || 'form')

const config = useRuntimeConfig()
const prompt = ref('')
const isGenerating = ref(false)
const isUploading = ref(false)
const surveyUrl = ref('')
const generatedTitle = ref('')
const previewToken = ref('')
const selectedFile = ref(null)
const fileInputRef = ref(null)

const setPrompt = (text) => { prompt.value = text }

const onFileChange = (e) => { selectedFile.value = e.target.files[0] || null }

const clearFile = () => {
  selectedFile.value = null
  if (fileInputRef.value) fileInputRef.value.value = ''
}

const reset = () => {
  surveyUrl.value = ''
  generatedTitle.value = ''
  previewToken.value = ''
  clearFile()
}

const uploadPdf = async (file) => {
  isUploading.value = true
  const { data: presign } = await axios.post(
    `${config.public.appUrl}/api/site/public_ai_previews/presign`,
    { filename: file.name }
  )

  console.log("Presign data:", presign);
  await axios.put(presign.upload_url, file, { headers: { 'Content-Type': file.type } })
  isUploading.value = false
  return presign.object_url
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
  if (!prompt.value && !selectedFile.value) return
  isGenerating.value = true
  surveyUrl.value = ''
  generatedTitle.value = ''
  previewToken.value = ''

  try {
    let body = { type: apiType.value }
    if (selectedFile.value) {
      body.file_uri = await uploadPdf(selectedFile.value)
    } else {
      body.prompt = prompt.value
    }

    const { data } = await axios.post(`${config.public.appUrl}/api/site/public_ai_previews`, body)
    const result = await pollStatus(data.process_id)

    generatedTitle.value = result.form_name
    surveyUrl.value = result.survey_url
    previewToken.value = result.preview_token
  } catch (err) {
    console.error('Generation failed:', err)
    alert('Unable to connect to AI service. Please try again.')
  } finally {
    isGenerating.value = false
    isUploading.value = false
  }
}

const claimUrl = computed(() =>
  `${config.public.appUrl}/ai_preview/claim?preview_token=${previewToken.value}`
)
</script>

<style scoped>
/* ─── Section ───────────────────────────────────────────── */
.ai-hero {
  padding: 80px 20px;
  background: radial-gradient(ellipse at 50% 0%, #f5f0ff 0%, #ffffff 60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* ─── Header ────────────────────────────────────────────── */
.ai-hero__header {
  text-align: center;
  max-width: 680px;
}

.ai-hero__badge {
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

.ai-hero__title {
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 16px;
  color: var(--clr-text-primary);
}

.ai-hero__title .highlight { color: var(--clr-primary); }

.ai-hero__description {
  font-size: 18px;
  color: var(--clr-text-secondary);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .ai-hero__title { font-size: 32px; }
  .ai-hero__description { font-size: 16px; }
}

/* ─── Canvas ────────────────────────────────────────────── */
.ai-canvas {
  width: 100%;
  max-width: 720px;
}

/* ─── Input state ───────────────────────────────────────── */
.canvas-input {
  background: #ffffff;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08), 0 2px 8px rgba(0,0,0,0.04);
}

.canvas-input:has(.canvas-textarea) {
  min-height: 420px;
}

.canvas-textarea {
  width: 100%;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 15px;
  font-family: inherit;
  color: var(--clr-text-primary);
  resize: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  margin-bottom: 14px;
  line-height: 1.5;
}

.canvas-textarea:focus {
  outline: none;
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 3px rgba(100, 52, 208, 0.1);
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
}

.canvas-chip:hover {
  background: var(--clr-primary-light-hover);
  transform: translateY(-1px);
}

.pdf-upload-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: none;
  border: 1px dashed var(--clr-secondary-gray-stroke);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--clr-text-secondary);
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s, color 0.15s;
  margin-bottom: 16px;
}

.pdf-upload-btn:hover {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

.pdf-selected {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--clr-primary-light);
  border: 1px solid var(--clr-primary-light-hover);
  border-radius: 8px;
  margin-bottom: 16px;
  color: var(--clr-primary);
}

.pdf-selected__name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdf-selected__remove {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: var(--clr-primary);
  padding: 0 2px;
  line-height: 1;
  flex-shrink: 0;
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

.canvas-footer {
  margin-top: 12px;
  font-size: 12px;
  color: var(--clr-text-secondary);
  text-align: center;
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

.shimmer {
  background: linear-gradient(90deg, #f2f4f7 25%, #e8eaed 50%, #f2f4f7 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
  border-radius: 6px;
  margin-bottom: 12px;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.sh-title   { height: 20px; width: 50%; margin-bottom: 20px; }
.sh-label   { height: 11px; width: 38%; }
.sh-label.short { width: 28%; }
.sh-input   { height: 34px; width: 100%; margin-bottom: 18px; }
.sh-options { height: 56px; width: 100%; margin-bottom: 18px; }

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
