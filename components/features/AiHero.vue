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
        <div v-if="!isGenerating && !previewFields.length" key="input" class="canvas-input">
          <textarea
            v-model="prompt"
            class="canvas-textarea"
            placeholder="Describe the form you need…"
            rows="3"
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
        <div v-else key="result" class="canvas-result" :style="resultBgStyle">
          <!-- Toolbar -->
          <div class="result-toolbar">
            <button class="toolbar-back" @click="reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>
              Try another
            </button>
            <span class="toolbar-title">{{ generatedTitle }}</span>
            <a :href="claimUrl" class="toolbar-cta">Use this form free →</a>
          </div>

          <!-- Scrollable form preview -->
          <div class="result-scroll">
            <template v-for="(field, idx) in previewFields" :key="idx">

              <div v-if="field.type === 'page-break'" class="pf-page-break">
                <div class="pf-page-break__line"></div>
                <span class="pf-page-break__label">Next Page</span>
                <div class="pf-page-break__line"></div>
              </div>

              <div v-else-if="field.type === 'header'" class="pf-header">
                <div class="pf-header__title">{{ field.label }}</div>
                <div v-if="field.sublabel" class="pf-header__sub">{{ field.sublabel }}</div>
              </div>

              <div v-else-if="field.type === 'paragraph'" class="pf-paragraph" v-html="field.value"></div>

              <div v-else-if="field.type === 'thank-you'" class="pf-thankyou">
                <div class="pf-thankyou__icon">✓</div>
                <div class="pf-thankyou__title">{{ field.label || 'Thank You!' }}</div>
                <div v-if="field.description" class="pf-thankyou__desc">{{ field.description }}</div>
              </div>

              <div v-else class="pf-field">
                <label class="pf-label">
                  {{ field.label }}
                  <span v-if="field.required" class="pf-required">*</span>
                </label>
                <div v-if="field.description" class="pf-desc">{{ field.description }}</div>

                <input
                  v-if="['shorttext','name','email','phone','url','number','date','time','location'].includes(field.type)"
                  class="pf-input"
                  :type="field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : field.type === 'time' ? 'time' : 'text'"
                  :placeholder="field.placeholder || ''"
                  disabled
                />
                <textarea v-else-if="field.type === 'longtext'" class="pf-input pf-textarea" :placeholder="field.placeholder || ''" rows="3" disabled></textarea>

                <div v-else-if="field.type === 'radio'" class="pf-options">
                  <div v-for="(opt, oIdx) in (field.options || [])" :key="oIdx" class="pf-option">
                    <span class="pf-radio"></span><span class="pf-option-label">{{ opt.label }}</span>
                  </div>
                </div>

                <div v-else-if="field.type === 'multiple-checkbox' || field.type === 'picture-checkbox'" class="pf-options">
                  <div v-for="(opt, oIdx) in (field.options || [])" :key="oIdx" class="pf-option">
                    <span class="pf-checkbox"></span><span class="pf-option-label">{{ opt.label }}</span>
                  </div>
                </div>

                <div v-else-if="field.type === 'dropdown'" class="pf-select-wrap">
                  <select class="pf-input pf-select" disabled>
                    <option value="" disabled selected>Select an option…</option>
                    <option v-for="(opt, oIdx) in (field.options || [])" :key="oIdx">{{ opt.label }}</option>
                  </select>
                  <span class="pf-select-arrow">▾</span>
                </div>

                <div v-else-if="field.type === 'scale-rating'" class="pf-scale">
                  <div class="pf-scale-labels">
                    <span>{{ field.startlabel }}</span><span>{{ field.endlabel }}</span>
                  </div>
                  <div class="pf-scale-buttons">
                    <div v-for="n in scaleRange(field)" :key="n" class="pf-scale-btn">{{ n }}</div>
                  </div>
                </div>

                <div v-else-if="field.type === 'star-rating'" class="pf-stars">
                  <span v-for="n in (field.count || 5)" :key="n" class="pf-star">★</span>
                </div>

                <div v-else-if="field.type === 'ranking'" class="pf-ranking">
                  <div v-for="(opt, oIdx) in (field.options || [])" :key="oIdx" class="pf-rank-item">
                    <span class="pf-rank-num">{{ oIdx + 1 }}</span>
                    <span class="pf-rank-label">{{ opt.label }}</span>
                    <span class="pf-rank-drag">⠿</span>
                  </div>
                </div>

                <div v-else-if="field.type === 'matrix'" class="pf-matrix">
                  <table class="pf-matrix-table">
                    <thead>
                      <tr>
                        <th class="pf-matrix-corner"></th>
                        <th v-for="(col, cIdx) in (field.columns || [])" :key="cIdx" class="pf-matrix-th">{{ col.label }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, rIdx) in (field.rows || [])" :key="rIdx">
                        <td class="pf-matrix-row-label">{{ row.label }}</td>
                        <td v-for="(_, cIdx) in (field.columns || [])" :key="cIdx" class="pf-matrix-cell"><span class="pf-radio"></span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div v-else-if="field.type === 'file'" class="pf-file">
                  <span class="pf-file-icon">↑</span>
                  <span class="pf-file-text">Click to upload or drag and drop</span>
                </div>

                <div v-else-if="field.type === 'signature'" class="pf-signature"><span>Sign here</span></div>

                <div v-else-if="field.type === 'address'" class="pf-address">
                  <input class="pf-input" placeholder="Street address" disabled />
                  <div class="pf-address-row">
                    <input class="pf-input" placeholder="City" disabled />
                    <input class="pf-input" placeholder="Postal code" disabled />
                  </div>
                </div>

                <div v-else-if="field.type === 'terms'" class="pf-terms">
                  <span class="pf-checkbox"></span><span class="pf-terms-text">{{ field.label }}</span>
                </div>

                <div v-else-if="field.type === 'repeat-field'" class="pf-repeat">
                  <div v-for="(comp, cIdx) in (field.components || [])" :key="cIdx">
                    <label class="pf-label pf-label--sm">{{ comp.label }}</label>
                    <input class="pf-input" :placeholder="comp.placeholder || ''" disabled />
                  </div>
                  <button class="pf-repeat-add" disabled>+ Add another</button>
                </div>

                <input v-else class="pf-input" :placeholder="field.placeholder || ''" disabled />
              </div>

            </template>

            <button class="pf-submit" :style="submitStyle" disabled>Submit</button>
          </div>
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
  suggestions: { type: Array, default: () => [] },
  form_config: Object
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
const previewFields = ref([])
const generatedTitle = ref('')
const previewToken = ref('')
const formTheme = ref({})

const setPrompt = (text) => { prompt.value = text }

const reset = () => {
  previewFields.value = []
  generatedTitle.value = ''
  formTheme.value = {}
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
    formTheme.value = data.styling || {}
    previewFields.value = Object.values(data.form_builder || {})
      .filter(f => f.type !== 'submit')
      .map(f => ({
        type: f.type,
        label: f.label,
        sublabel: f.sublabel || '',
        description: f.description || '',
        placeholder: f.placeholder || '',
        required: f.required || false,
        options: f.options || [],
        rows: f.rows || [],
        columns: f.columns || [],
        inputType: f.inputType || 'radio',
        start: f.start ?? 1,
        end: f.end ?? 10,
        startlabel: f.startlabel || '',
        endlabel: f.endlabel || '',
        count: f.count || 5,
        value: f.value || '',
        components: f.components || [],
        multipleUpload: f.multipleUpload || false,
        quizScore: f.quizScore || {},
      }))
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

const scaleRange = (field) => {
  const start = field.start ?? 1
  const end = field.end ?? 10
  const arr = []
  for (let i = start; i <= end; i++) arr.push(i)
  return arr
}

const resultBgStyle = computed(() => {
  const t = formTheme.value
  return t?.backgroundColor ? { background: t.backgroundColor } : {}
})

const submitStyle = computed(() => {
  const t = formTheme.value
  return t?.buttonColor ? { background: t.buttonColor, color: t.buttonTextColor || '#fff' } : {}
})
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
  max-width: 680px;
}

/* ─── Input state ───────────────────────────────────────── */
.canvas-input {
  background: #ffffff;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08), 0 2px 8px rgba(0,0,0,0.04);
}

.canvas-textarea {
  width: 100%;
  min-height: 120px;
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
  background: #f9fafb;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(100, 52, 208, 0.08), 0 2px 8px rgba(0,0,0,0.04);
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

.toolbar-cta:hover { background: var(--clr-primary-hover); }

.result-scroll {
  max-height: 440px;
  overflow-y: auto;
  padding: 20px 20px 28px;
  scrollbar-width: thin;
  scrollbar-color: var(--clr-secondary-gray-stroke) transparent;
}

.result-scroll::-webkit-scrollbar { width: 4px; }
.result-scroll::-webkit-scrollbar-thumb { background: var(--clr-secondary-gray-stroke); border-radius: 2px; }

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

/* ─── Form field styles ─────────────────────────────────── */
.pf-field { margin-bottom: 16px; }

.pf-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #344054;
  margin-bottom: 5px;
}

.pf-label--sm { font-size: 12px; }
.pf-required { color: #f04438; margin-left: 2px; }

.pf-desc {
  font-size: 11px;
  color: var(--clr-text-secondary);
  margin-bottom: 5px;
}

.pf-input {
  width: 100%;
  background: #ffffff;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 12px;
  color: var(--clr-text-secondary);
  font-family: inherit;
  box-sizing: border-box;
}

.pf-textarea { resize: none; min-height: 60px; }

.pf-select-wrap { position: relative; }
.pf-select { appearance: none; padding-right: 28px; cursor: default; }
.pf-select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--clr-text-secondary);
  font-size: 11px;
  pointer-events: none;
}

.pf-options { display: flex; flex-direction: column; gap: 6px; }
.pf-option { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--clr-text-secondary); }

.pf-radio {
  width: 14px; height: 14px;
  border: 1.5px solid var(--clr-secondary-gray-stroke);
  border-radius: 50%; flex-shrink: 0; background: #fff;
}

.pf-checkbox {
  width: 14px; height: 14px;
  border: 1.5px solid var(--clr-secondary-gray-stroke);
  border-radius: 3px; flex-shrink: 0; background: #fff;
}

.pf-option-label { line-height: 1.3; }

.pf-scale-labels { display: flex; justify-content: space-between; font-size: 10px; color: #98a2b3; margin-bottom: 4px; }
.pf-scale-buttons { display: flex; gap: 3px; flex-wrap: wrap; }
.pf-scale-btn {
  min-width: 26px; height: 26px;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 4px; display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: var(--clr-text-secondary); background: #fff; flex-shrink: 0;
}

.pf-stars { display: flex; gap: 4px; }
.pf-star { font-size: 20px; color: var(--clr-secondary-gray-stroke); line-height: 1; }

.pf-ranking { display: flex; flex-direction: column; gap: 5px; }
.pf-rank-item {
  display: flex; align-items: center; gap: 8px;
  background: #fff; border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 6px; padding: 6px 10px; font-size: 12px; color: #344054;
}
.pf-rank-num {
  width: 18px; height: 18px;
  background: var(--clr-primary-light); color: var(--clr-primary);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 700; flex-shrink: 0;
}
.pf-rank-label { flex: 1; }
.pf-rank-drag { color: var(--clr-secondary-gray-stroke); font-size: 14px; margin-left: auto; }

.pf-matrix { overflow-x: auto; }
.pf-matrix-table { width: 100%; border-collapse: collapse; font-size: 11px; }
.pf-matrix-th, .pf-matrix-row-label {
  padding: 5px 8px; text-align: center;
  color: var(--clr-text-secondary); font-weight: 600;
  border-bottom: 1px solid #eaecf0;
}
.pf-matrix-row-label { text-align: left; font-weight: 500; }
.pf-matrix-corner { border-bottom: 1px solid #eaecf0; }
.pf-matrix-cell { text-align: center; padding: 6px; border-bottom: 1px solid #f2f4f7; }

.pf-file {
  border: 1.5px dashed var(--clr-secondary-gray-stroke);
  border-radius: 6px; padding: 14px 10px;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  color: var(--clr-text-secondary); background: #f9fafb;
}
.pf-file-icon { font-size: 18px; }
.pf-file-text { font-size: 11px; }

.pf-signature {
  border: 1.5px dashed var(--clr-secondary-gray-stroke);
  border-radius: 6px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  color: #98a2b3; font-size: 12px; font-style: italic; background: #f9fafb;
}

.pf-address { display: flex; flex-direction: column; gap: 6px; }
.pf-address-row { display: flex; gap: 6px; }
.pf-address-row .pf-input { flex: 1; }

.pf-terms { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; color: #344054; line-height: 1.4; }
.pf-terms-text { flex: 1; }

.pf-repeat {
  background: #f9fafb; border: 1px solid #eaecf0;
  border-radius: 8px; padding: 12px;
  display: flex; flex-direction: column; gap: 10px;
}
.pf-repeat-add {
  font-size: 11px; color: var(--clr-primary); background: none;
  border: 1px dashed var(--clr-primary-light-hover);
  border-radius: 4px; padding: 4px 10px;
  cursor: default; font-family: inherit; margin-top: 4px;
}

.pf-page-break { display: flex; align-items: center; gap: 8px; margin: 16px 0; }
.pf-page-break__line { flex: 1; height: 1px; background: var(--clr-secondary-gray-stroke); }
.pf-page-break__label { font-size: 10px; font-weight: 600; color: #98a2b3; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; }

.pf-header { margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid #f2f4f7; }
.pf-header__title { font-size: 15px; font-weight: 700; color: var(--clr-text-primary); }
.pf-header__sub { font-size: 12px; color: var(--clr-text-secondary); margin-top: 3px; }

.pf-paragraph { font-size: 12px; color: var(--clr-text-secondary); line-height: 1.6; margin-bottom: 14px; }

.pf-thankyou {
  text-align: center; padding: 20px 16px; margin: 8px 0;
  background: var(--clr-primary-light); border-radius: 10px;
}
.pf-thankyou__icon {
  width: 32px; height: 32px; background: var(--clr-primary); color: #fff;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 700; margin: 0 auto 8px;
}
.pf-thankyou__title { font-size: 14px; font-weight: 700; color: var(--clr-text-primary); }
.pf-thankyou__desc { font-size: 12px; color: var(--clr-text-secondary); margin-top: 4px; }

.pf-submit {
  width: 100%; background: var(--clr-primary); color: #fff;
  border: none; border-radius: 6px; padding: 10px 20px;
  font-size: 13px; font-weight: 600; cursor: default;
  font-family: inherit; margin-top: 8px;
}
</style>
