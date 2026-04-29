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

          <button
            class="canvas-btn"
            :disabled="!prompt"
            @click="handleGenerate"
          >
            Generate Form
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
const surveyUrl = ref('')
const generatedTitle = ref('')
const previewToken = ref('')

const setPrompt = (text) => { prompt.value = text }

const reset = () => {
  surveyUrl.value = ''
  generatedTitle.value = ''
  previewToken.value = ''
}

const handleGenerate = async () => {
  if (!prompt.value) return
  isGenerating.value = true
  reset()

  try {
    const { data } = await axios.post(`${config.public.appUrl}/api/v1/public_ai_previews`, {
      prompt: prompt.value,
      type: apiType.value
    })

    generatedTitle.value = data.form_name
    surveyUrl.value = data.survey_url
    previewToken.value = data.preview_token
  } catch (err) {
    console.error('Generation failed:', err)
    alert('Unable to connect to AI service. Please try again.')
  } finally {
    isGenerating.value = false
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
  min-height: 420px;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08), 0 2px 8px rgba(0,0,0,0.04);
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
