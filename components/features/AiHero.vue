<template>
  <section class="ai-hero">
    <div class="container">
      <div class="ai-hero__content">
        <!-- Badge -->
        <div class="ai-hero__badge">
          <span class="dot"></span>
          TRY IT NOW. NO SIGN-UP REQUIRED.
        </div>

        <!-- Title -->
        <h1 class="ai-hero__title">
          <span
            v-for="(item, index) in title"
            :key="index"
            :class="{ 'highlight': item.highlight }"
            :style="{ color: item.color }"
          >
            {{ item.text }}
          </span>
        </h1>

        <!-- Description -->
        <p v-if="description" class="ai-hero__description">
          {{ description }}
        </p>

        <!-- Prompt Area -->
        <div class="ai-hero__prompt-box">
          <textarea
            v-model="prompt"
            placeholder="Describe the form you need. Example: A customer satisfaction survey with a 5-star rating..."
            class="ai-hero__input"
            rows="4"
          ></textarea>

          <!-- Suggestions (Chips) -->
          <div v-if="suggestions && suggestions.length" class="ai-hero__suggestions">
            <button
              v-for="(chip, index) in suggestions"
              :key="index"
              class="ai-hero__chip"
              @click="setPrompt(chip.text)"
            >
              {{ chip.text }}
            </button>
          </div>

          <!-- Action Button -->
          <div class="ai-hero__actions">
            <button
              class="btn btn-primary btn-lg btn-block"
              :disabled="!prompt || isGenerating"
              @click="handleGenerate"
            >
              <template v-if="isGenerating">
                <span class="spinner"></span> Generating...
              </template>
              <template v-else>
                Generate Form
              </template>
            </button>
            <p class="ai-hero__footer-text">
              Free forever • No credit card • Your prompt stays private
            </p>
          </div>
        </div>
      </div>

      <!-- Preview Area -->
      <div class="ai-hero__preview">
        <div class="preview-container">
          <!-- Browser chrome -->
          <div class="preview-chrome">
            <div class="chrome-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="chrome-bar">Form Preview</div>
          </div>

          <!-- Preview body -->
          <div class="preview-body" :style="previewBodyStyle">
            <!-- Loading shimmer -->
            <div v-if="isGenerating" class="preview-loading">
              <div class="shimmer shimmer-title"></div>
              <div class="shimmer shimmer-label"></div>
              <div class="shimmer shimmer-input"></div>
              <div class="shimmer shimmer-label short"></div>
              <div class="shimmer shimmer-input"></div>
              <div class="shimmer shimmer-label"></div>
              <div class="shimmer shimmer-options"></div>
            </div>

            <!-- Generated form -->
            <div v-else-if="previewFields.length" class="preview-form">
              <div class="pf-title">{{ generatedTitle || 'Your Form' }}</div>

              <template v-for="(field, idx) in previewFields" :key="idx">

                <!-- Page break: visual page separator -->
                <div v-if="field.type === 'page-break'" class="pf-page-break">
                  <div class="pf-page-break__line"></div>
                  <span class="pf-page-break__label">Next Page</span>
                  <div class="pf-page-break__line"></div>
                </div>

                <!-- Header: section heading, no input -->
                <div v-else-if="field.type === 'header'" class="pf-header">
                  <div class="pf-header__title">{{ field.label }}</div>
                  <div v-if="field.sublabel" class="pf-header__sub">{{ field.sublabel }}</div>
                </div>

                <!-- Paragraph: raw HTML text block -->
                <div
                  v-else-if="field.type === 'paragraph'"
                  class="pf-paragraph"
                  v-html="field.value"
                ></div>

                <!-- Thank you: end screen indicator -->
                <div v-else-if="field.type === 'thank-you'" class="pf-thankyou">
                  <div class="pf-thankyou__icon">✓</div>
                  <div class="pf-thankyou__title">{{ field.label || 'Thank You!' }}</div>
                  <div v-if="field.description" class="pf-thankyou__desc">{{ field.description }}</div>
                </div>

                <!-- Standard input fields -->
                <div v-else class="pf-field">
                  <label class="pf-label">
                    {{ field.label }}
                    <span v-if="field.required" class="pf-required">*</span>
                  </label>
                  <div v-if="field.description" class="pf-desc">{{ field.description }}</div>

                  <!-- Short text / name / email / phone / url / number / date / time / location -->
                  <input
                    v-if="['shorttext', 'name', 'email', 'phone', 'url', 'number', 'date', 'time', 'location'].includes(field.type)"
                    class="pf-input"
                    :type="field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : field.type === 'time' ? 'time' : 'text'"
                    :placeholder="field.placeholder || ''"
                    disabled
                  />

                  <!-- Long text -->
                  <textarea
                    v-else-if="field.type === 'longtext'"
                    class="pf-input pf-textarea"
                    :placeholder="field.placeholder || ''"
                    rows="3"
                    disabled
                  ></textarea>

                  <!-- Radio (single choice) -->
                  <div v-else-if="field.type === 'radio'" class="pf-options">
                    <div
                      v-for="(opt, oIdx) in (field.options || [])"
                      :key="oIdx"
                      class="pf-option"
                    >
                      <span class="pf-radio"></span>
                      <span class="pf-option-label">{{ opt.label }}</span>
                    </div>
                  </div>

                  <!-- Multiple checkbox -->
                  <div v-else-if="field.type === 'multiple-checkbox' || field.type === 'picture-checkbox'" class="pf-options">
                    <div
                      v-for="(opt, oIdx) in (field.options || [])"
                      :key="oIdx"
                      class="pf-option"
                    >
                      <span class="pf-checkbox"></span>
                      <span class="pf-option-label">{{ opt.label }}</span>
                    </div>
                  </div>

                  <!-- Dropdown -->
                  <div v-else-if="field.type === 'dropdown'" class="pf-select-wrap">
                    <select class="pf-input pf-select" disabled>
                      <option value="" disabled selected>Select an option...</option>
                      <option
                        v-for="(opt, oIdx) in (field.options || [])"
                        :key="oIdx"
                      >{{ opt.label }}</option>
                    </select>
                    <span class="pf-select-arrow">▾</span>
                  </div>

                  <!-- Scale rating (NPS-style numeric scale) -->
                  <div v-else-if="field.type === 'scale-rating'" class="pf-scale">
                    <div class="pf-scale-labels">
                      <span>{{ field.startlabel || '' }}</span>
                      <span>{{ field.endlabel || '' }}</span>
                    </div>
                    <div class="pf-scale-buttons">
                      <div
                        v-for="n in scaleRange(field)"
                        :key="n"
                        class="pf-scale-btn"
                      >{{ n }}</div>
                    </div>
                  </div>

                  <!-- Star rating -->
                  <div v-else-if="field.type === 'star-rating'" class="pf-stars">
                    <span
                      v-for="n in (field.count || 5)"
                      :key="n"
                      class="pf-star"
                    >★</span>
                  </div>

                  <!-- Ranking -->
                  <div v-else-if="field.type === 'ranking'" class="pf-ranking">
                    <div
                      v-for="(opt, oIdx) in (field.options || [])"
                      :key="oIdx"
                      class="pf-rank-item"
                    >
                      <span class="pf-rank-num">{{ oIdx + 1 }}</span>
                      <span class="pf-rank-label">{{ opt.label }}</span>
                      <span class="pf-rank-drag">⠿</span>
                    </div>
                  </div>

                  <!-- Matrix (grid) -->
                  <div v-else-if="field.type === 'matrix'" class="pf-matrix">
                    <table class="pf-matrix-table">
                      <thead>
                        <tr>
                          <th class="pf-matrix-corner"></th>
                          <th
                            v-for="(col, cIdx) in (field.columns || [])"
                            :key="cIdx"
                            class="pf-matrix-th"
                          >{{ col.label }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(row, rIdx) in (field.rows || [])"
                          :key="rIdx"
                        >
                          <td class="pf-matrix-row-label">{{ row.label }}</td>
                          <td
                            v-for="(_, cIdx) in (field.columns || [])"
                            :key="cIdx"
                            class="pf-matrix-cell"
                          >
                            <span class="pf-radio"></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- File upload -->
                  <div v-else-if="field.type === 'file'" class="pf-file">
                    <span class="pf-file-icon">↑</span>
                    <span class="pf-file-text">Click to upload or drag and drop</span>
                  </div>

                  <!-- Signature -->
                  <div v-else-if="field.type === 'signature'" class="pf-signature">
                    <span>Sign here</span>
                  </div>

                  <!-- Address -->
                  <div v-else-if="field.type === 'address'" class="pf-address">
                    <input class="pf-input pf-address-line" placeholder="Street address" disabled />
                    <div class="pf-address-row">
                      <input class="pf-input" placeholder="City" disabled />
                      <input class="pf-input" placeholder="Postal code" disabled />
                    </div>
                  </div>

                  <!-- Terms / consent -->
                  <div v-else-if="field.type === 'terms'" class="pf-terms">
                    <span class="pf-checkbox"></span>
                    <span class="pf-terms-text">{{ field.label }}</span>
                  </div>

                  <!-- Repeat field: render sub-components -->
                  <div v-else-if="field.type === 'repeat-field'" class="pf-repeat">
                    <div
                      v-for="(comp, cIdx) in (field.components || [])"
                      :key="cIdx"
                      class="pf-repeat-item"
                    >
                      <label class="pf-label pf-label--sm">{{ comp.label }}</label>
                      <input class="pf-input" :placeholder="comp.placeholder || ''" disabled />
                    </div>
                    <button class="pf-repeat-add" disabled>+ Add another</button>
                  </div>

                  <!-- Fallback for any other type -->
                  <input v-else class="pf-input" :placeholder="field.placeholder || ''" disabled />
                </div>

              </template>

              <!-- Submit button -->
              <button class="pf-submit" :style="submitStyle" disabled>Submit</button>
            </div>

            <!-- Placeholder state -->
            <div v-else class="preview-placeholder">
              <div class="preview-placeholder__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M9 12h6M9 16h6M17 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"/>
                </svg>
              </div>
              <p>Type a prompt and click Generate to see your form here</p>
            </div>

            <!-- Claim CTA — sticky bottom gradient bar -->
            <div v-if="previewFields.length && !isGenerating" class="claim-bar">
              <div class="claim-bar__gradient"></div>
              <a :href="claimUrl" class="claim-bar__btn">
                Use This Form Free →
              </a>
            </div>
          </div>
        </div>

        <!-- Floating decoration elements -->
        <div class="floating-icons">
          <div class="icon icon-1"><img src="/form-icon.svg" alt="Form" /></div>
          <div class="icon icon-2"><img src="/quiz-icon.svg" alt="Quiz" /></div>
          <div class="icon icon-3"><img src="/formester-icon.svg" alt="Formester" /></div>
        </div>
      </div>
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

// Map CMS-friendly labels ("Score Quiz") to API-expected values ("score_quiz")
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

const handleGenerate = async () => {
  if (!prompt.value) return
  isGenerating.value = true
  previewFields.value = []
  generatedTitle.value = ''
  formTheme.value = {}

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
      }))
    previewToken.value = data.preview_token
  } catch (err) {
    console.error('Generation failed:', err)
    const msg = err.response?.data?.error || 'Unable to generate form. Please try again.'
    alert(msg)
  } finally {
    isGenerating.value = false
  }
}

const scaleRange = (field) => {
  const start = field.start ?? 1
  const end = field.end ?? 10
  const range = []
  for (let i = start; i <= end; i++) range.push(i)
  return range
}

const claimUrl = computed(() =>
  `${config.public.appUrl}/ai_preview/claim?preview_token=${previewToken.value}`
)

const previewBodyStyle = computed(() => {
  const t = formTheme.value
  if (!t || !t.backgroundColor) return {}
  return { background: t.backgroundColor }
})

const submitStyle = computed(() => {
  const t = formTheme.value
  if (!t || !t.buttonColor) return {}
  return {
    background: t.buttonColor,
    color: t.buttonTextColor || '#ffffff'
  }
})
</script>

<style scoped>
/* ─── Layout ─────────────────────────────────────────────── */
.ai-hero {
  padding: 80px 0;
  background: radial-gradient(circle at 0% 0%, #fdfaff 0%, #ffffff 100%);
  overflow: hidden;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

@media (max-width: 991px) {
  .container { grid-template-columns: 1fr; text-align: center; }
}

/* ─── Left panel ─────────────────────────────────────────── */
.ai-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: var(--clr-primary-light);
  color: var(--clr-primary);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
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
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--clr-text-primary);
}

.ai-hero__title .highlight { color: var(--clr-primary); }

.ai-hero__description {
  font-size: 18px;
  color: var(--clr-text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.ai-hero__prompt-box {
  background: #ffffff;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);
  text-align: left;
}

.ai-hero__input {
  width: 100%;
  border: 1px solid var(--clr-secondary-gray-stroke);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  resize: none;
  transition: all 0.2s;
  margin-bottom: 16px;
  font-family: inherit;
  color: var(--clr-text-primary);
}

.ai-hero__input:focus {
  outline: none;
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 4px rgba(100, 52, 208, 0.1);
}

.ai-hero__suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.ai-hero__chip {
  padding: 6px 12px;
  background: var(--clr-primary-light);
  border: 1px solid var(--clr-primary-light-hover);
  color: var(--clr-primary);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.ai-hero__chip:hover {
  background: var(--clr-primary-light-hover);
  transform: translateY(-1px);
}

.ai-hero__footer-text {
  margin-top: 12px;
  font-size: 13px;
  color: var(--clr-text-secondary);
  text-align: center;
}

/* ─── Buttons ────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
}

.btn-primary {
  background: var(--clr-primary);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--clr-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:disabled {
  background: var(--clr-secondary-gray-stroke);
  color: #98a2b3;
  cursor: not-allowed;
}

.btn-lg { padding: 16px 28px; font-size: 18px; }
.btn-block { width: 100%; }

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;
  flex-shrink: 0;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Preview container ──────────────────────────────────── */
.ai-hero__preview { position: relative; }

.preview-container {
  border-radius: 16px;
  border: 1px solid #e4e7ec;
  box-shadow: 0 24px 48px -12px rgba(16, 24, 40, 0.18);
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: #ffffff;
}

/* Browser chrome */
.preview-chrome {
  background: #f2f4f7;
  padding: 10px 14px;
  border-bottom: 1px solid #e4e7ec;
  display: flex;
  align-items: center;
  gap: 12px;
}

.chrome-dots {
  display: flex;
  gap: 5px;
  flex-shrink: 0;
}

.dot-red   { width: 10px; height: 10px; border-radius: 50%; background: #ff5f57; }
.dot-yellow { width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e; }
.dot-green  { width: 10px; height: 10px; border-radius: 50%; background: #28c840; }

.chrome-bar {
  flex: 1;
  background: #ffffff;
  border: 1px solid #e4e7ec;
  border-radius: 6px;
  padding: 3px 12px;
  font-size: 11px;
  color: #98a2b3;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Preview body */
.preview-body {
  height: 480px;
  overflow-y: auto;
  position: relative;
  background: #f9fafb;
  scrollbar-width: thin;
  scrollbar-color: #d0d5dd transparent;
}

.preview-body::-webkit-scrollbar { width: 4px; }
.preview-body::-webkit-scrollbar-thumb { background: #d0d5dd; border-radius: 2px; }

/* ─── Loading shimmer ────────────────────────────────────── */
.preview-loading { padding: 28px 24px; }

.shimmer {
  background: linear-gradient(90deg, #f2f4f7 25%, #e4e7ec 50%, #f2f4f7 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
  border-radius: 6px;
  margin-bottom: 12px;
}

.shimmer-title  { height: 22px; width: 55%; margin-bottom: 24px; }
.shimmer-label  { height: 12px; width: 40%; }
.shimmer-label.short { width: 30%; }
.shimmer-input  { height: 36px; width: 100%; margin-bottom: 20px; }
.shimmer-options { height: 60px; width: 100%; margin-bottom: 20px; }

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ─── Placeholder state ──────────────────────────────────── */
.preview-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #98a2b3;
  padding: 40px 24px;
  gap: 12px;
}

.preview-placeholder__icon {
  width: 56px;
  height: 56px;
  background: var(--clr-primary-light);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-primary);
}

.preview-placeholder p {
  font-size: 14px;
  line-height: 1.5;
  max-width: 220px;
}

/* ─── Generated form ────────────────────────────────────── */
.preview-form {
  padding: 24px 24px 100px;
}

.pf-title {
  font-size: 18px;
  font-weight: 700;
  color: #101828;
  margin-bottom: 20px;
  line-height: 1.3;
}

/* Standard field wrapper */
.pf-field {
  margin-bottom: 18px;
}

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
  color: #667085;
  margin-bottom: 5px;
}

/* Inputs */
.pf-input {
  width: 100%;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 12px;
  color: #667085;
  font-family: inherit;
  box-sizing: border-box;
}

.pf-textarea { resize: none; min-height: 64px; }

/* Select with custom arrow */
.pf-select-wrap { position: relative; }

.pf-select {
  appearance: none;
  padding-right: 28px;
  cursor: default;
}

.pf-select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #667085;
  font-size: 11px;
  pointer-events: none;
}

/* Radio / checkbox options */
.pf-options { display: flex; flex-direction: column; gap: 6px; }

.pf-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #475467;
}

.pf-radio {
  width: 14px;
  height: 14px;
  border: 1.5px solid #d0d5dd;
  border-radius: 50%;
  flex-shrink: 0;
  background: #fff;
}

.pf-checkbox {
  width: 14px;
  height: 14px;
  border: 1.5px solid #d0d5dd;
  border-radius: 3px;
  flex-shrink: 0;
  background: #fff;
}

.pf-option-label { line-height: 1.3; }

/* Scale rating */
.pf-scale-labels {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #98a2b3;
  margin-bottom: 4px;
}

.pf-scale-buttons {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
}

.pf-scale-btn {
  min-width: 26px;
  height: 26px;
  border: 1px solid #d0d5dd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #475467;
  background: #ffffff;
  flex-shrink: 0;
}

/* Star rating */
.pf-stars { display: flex; gap: 4px; }

.pf-star {
  font-size: 20px;
  color: #d0d5dd;
  line-height: 1;
}

/* Ranking */
.pf-ranking { display: flex; flex-direction: column; gap: 5px; }

.pf-rank-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  color: #344054;
}

.pf-rank-num {
  width: 18px;
  height: 18px;
  background: var(--clr-primary-light);
  color: var(--clr-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
}

.pf-rank-label { flex: 1; }

.pf-rank-drag { color: #d0d5dd; font-size: 14px; margin-left: auto; }

/* Matrix */
.pf-matrix { overflow-x: auto; }

.pf-matrix-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}

.pf-matrix-th,
.pf-matrix-row-label {
  padding: 5px 8px;
  text-align: center;
  color: #475467;
  font-weight: 600;
  border-bottom: 1px solid #eaecf0;
}

.pf-matrix-row-label { text-align: left; font-weight: 500; }

.pf-matrix-corner { border-bottom: 1px solid #eaecf0; }

.pf-matrix-cell {
  text-align: center;
  padding: 6px;
  border-bottom: 1px solid #f2f4f7;
}

/* File upload */
.pf-file {
  border: 1.5px dashed #d0d5dd;
  border-radius: 6px;
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #667085;
  background: #f9fafb;
}

.pf-file-icon { font-size: 18px; }

.pf-file-text { font-size: 11px; }

/* Signature */
.pf-signature {
  border: 1.5px dashed #d0d5dd;
  border-radius: 6px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #98a2b3;
  font-size: 12px;
  font-style: italic;
  background: #f9fafb;
}

/* Address */
.pf-address { display: flex; flex-direction: column; gap: 6px; }
.pf-address-row { display: flex; gap: 6px; }
.pf-address-row .pf-input { flex: 1; }

/* Terms */
.pf-terms {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: #344054;
  line-height: 1.4;
}

.pf-terms-text { flex: 1; }

/* Repeat field */
.pf-repeat {
  background: #f9fafb;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pf-repeat-add {
  font-size: 11px;
  color: var(--clr-primary);
  background: none;
  border: 1px dashed var(--clr-primary-light-hover);
  border-radius: 4px;
  padding: 4px 10px;
  cursor: default;
  font-family: inherit;
  margin-top: 4px;
}

/* Page break */
.pf-page-break {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

.pf-page-break__line {
  flex: 1;
  height: 1px;
  background: #d0d5dd;
}

.pf-page-break__label {
  font-size: 10px;
  font-weight: 600;
  color: #98a2b3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

/* Header block */
.pf-header {
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f2f4f7;
}

.pf-header__title {
  font-size: 15px;
  font-weight: 700;
  color: #101828;
}

.pf-header__sub {
  font-size: 12px;
  color: #667085;
  margin-top: 3px;
}

/* Paragraph / HTML block */
.pf-paragraph {
  font-size: 12px;
  color: #475467;
  line-height: 1.6;
  margin-bottom: 14px;
}

/* Thank you screen */
.pf-thankyou {
  text-align: center;
  padding: 24px 16px;
  margin: 8px 0;
  background: var(--clr-primary-light);
  border-radius: 10px;
}

.pf-thankyou__icon {
  width: 36px;
  height: 36px;
  background: var(--clr-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 10px;
}

.pf-thankyou__title {
  font-size: 15px;
  font-weight: 700;
  color: #101828;
}

.pf-thankyou__desc {
  font-size: 12px;
  color: #475467;
  margin-top: 4px;
}

/* Submit button */
.pf-submit {
  width: 100%;
  background: var(--clr-primary);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: default;
  font-family: inherit;
  margin-top: 8px;
}

/* ─── Claim CTA bar ──────────────────────────────────────── */
.claim-bar {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  animation: fadeUp 0.4s ease-out;
}

.claim-bar__gradient {
  height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(249, 250, 251, 0.95));
  pointer-events: none;
}

.claim-bar__btn {
  display: block;
  text-align: center;
  background: var(--clr-primary);
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
  padding: 12px 20px;
  text-decoration: none;
  transition: background 0.2s;
}

.claim-bar__btn:hover { background: var(--clr-primary-hover); }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Floating decoration ────────────────────────────────── */
.floating-icons .icon {
  position: absolute;
  width: 52px;
  height: 52px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 10px;
}

.floating-icons .icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.icon-1 { top: 8%;  right: 8%;  animation: float 6s ease-in-out infinite; }
.icon-2 { bottom: 18%; right: 4%; animation: float 8s ease-in-out infinite 2s; }
.icon-3 { top: 42%; right: -4%; animation: float 7s ease-in-out infinite 4s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}
</style>
