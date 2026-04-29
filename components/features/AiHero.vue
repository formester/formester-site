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
        <div class="preview-container glass">
          <div class="preview-header">
            <div class="dots">
              <span></span><span></span><span></span>
            </div>
            <div class="address-bar">Preview</div>
          </div>

          <div class="preview-body">
            <div v-if="isGenerating" class="preview-loading">
              <div class="shimmer-line title"></div>
              <div class="shimmer-line"></div>
              <div class="shimmer-line"></div>
              <div class="shimmer-line short"></div>
            </div>
            <div v-else-if="generatedFields.length" class="preview-form">
              <h3>{{ generatedTitle || 'Your Form' }}</h3>
              <div v-for="(field, idx) in generatedFields" :key="idx" class="preview-field">
                <label>{{ field.label }}</label>
                <input v-if="field.type === 'text' || field.type === 'email'" :type="field.type" :placeholder="field.placeholder" disabled />
                <textarea v-else-if="field.type === 'textarea'" disabled></textarea>
                <div v-else-if="field.type === 'radio' || field.type === 'checkbox'" class="preview-options">
                  <div v-for="(opt, oIdx) in field.options" :key="oIdx" class="preview-option">
                    <span class="circle"></span> {{ opt.label }}
                  </div>
                </div>
              </div>
              <button class="preview-submit" disabled>Submit</button>

              <!-- Claim CTA -->
              <div class="claim-overlay">
                <a :href="claimUrl" class="btn btn-secondary btn-lg shadow-lg">
                  Add to My Account
                </a>
              </div>
            </div>
            <div v-else class="preview-placeholder">
              <div class="placeholder-icon">
                <i class="icon-ai"></i>
              </div>
              <p>Type a prompt and click generate to see a live preview of your form</p>
            </div>
          </div>
        </div>

        <!-- Floating Elements -->
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
  title: {
    type: Array,
    default: () => []
  },
  description: String,
  type: {
    type: String,
    default: 'Form'
  },
  suggestions: {
    type: Array,
    default: () => []
  },
  form_config: Object
})

const config = useRuntimeConfig()
const prompt = ref('')
const isGenerating = ref(false)
const generatedFields = ref([])
const generatedTitle = ref('')
const previewToken = ref('')

const setPrompt = (text) => {
  prompt.value = text
}

const handleGenerate = async () => {
  if (!prompt.value) return
  
  isGenerating.value = true
  
  try {
    console.log(config.public.appUrl);
    const { data } = await axios.post(`${config.public.appUrl}/api/v1/public_ai_previews`, { 
      prompt: prompt.value,
      type: props.type 
    })
    
    if (data.process_id) {
      pollStatus(data.process_id)
    }
  } catch (err) {
    console.error('Generation failed:', err)
    alert('Unable to connect to AI service. Please try again.')
    isGenerating.value = false
  }
}

const pollStatus = async (processId) => {
  try {
    const { data } = await axios.get(`${config.public.appUrl}/api/v1/public_ai_previews/${processId}`)
    
    if (data.status === 'success') {
      console.log(data.form_name, data.form_builder);
      generatedTitle.value = data.form_name
      // Map form_builder to our preview fields
      generatedFields.value = Object.values(data.form_builder || {}).map(field => ({
        type: field.type,
        label: field.label,
        placeholder: field.placeholder,
        options: field.options
      }))
      previewToken.value = processId
      isGenerating.value = false
    } else if (data.status === 'failed') {
      alert(data.error || 'Generation failed. Please try a different prompt.')
      isGenerating.value = false
    } else {
      // Continue polling
      setTimeout(() => pollStatus(processId), 2000)
    }
  } catch (err) {
    console.error('Polling failed:', err)
    isGenerating.value = false
  }
}

const claimUrl = computed(() => {
  return `${config.public.appUrl}/users/sign_up?preview_token=${previewToken.value}&prompt=${encodeURIComponent(prompt.value)}`
})
</script>

<style scoped>
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
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.ai-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: #f4ebff;
  color: #7f56d9;
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
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(127, 86, 217, 0.2);
}

.ai-hero__title {
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #101828;
}

.ai-hero__title .highlight {
  color: #7f56d9;
}

.ai-hero__description {
  font-size: 18px;
  color: #475467;
  line-height: 1.6;
  margin-bottom: 32px;
}

.ai-hero__prompt-box {
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);
  text-align: left;
}

.ai-hero__input {
  width: 100%;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  resize: none;
  transition: all 0.2s;
  margin-bottom: 16px;
}

.ai-hero__input:focus {
  outline: none;
  border-color: #7f56d9;
  box-shadow: 0 0 0 4px rgba(127, 86, 217, 0.1);
}

.ai-hero__suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.ai-hero__chip {
  padding: 6px 12px;
  background: #f9f5ff;
  border: 1px solid #d6bbfb;
  color: #6941c0;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.ai-hero__chip:hover {
  background: #f4ebff;
  transform: translateY(-1px);
}

.ai-hero__footer-text {
  margin-top: 12px;
  font-size: 14px;
  color: #667085;
  text-align: center;
}

/* Button & Spinner */
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
}

.btn-primary {
  background: #7f56d9;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #6941c0;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:disabled {
  background: #eaecf0;
  color: #98a2b3;
  cursor: not-allowed;
}

.btn-lg {
  padding: 16px 28px;
  font-size: 18px;
}

.btn-block {
  width: 100%;
}

.btn-secondary {
  background: #ffffff;
  color: #344054;
  border: 1px solid #d0d5dd;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Preview Area */
.ai-hero__preview {
  position: relative;
}

.preview-container {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 20px 24px -4px rgba(16, 24, 40, 0.08), 0 8px 8px -4px rgba(16, 24, 40, 0.03);
  min-height: 500px;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
}

.preview-header {
  background: #f9fafb;
  padding: 12px 16px;
  border-bottom: 1px solid #eaecf0;
  display: flex;
  align-items: center;
  gap: 16px;
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e4e7ec;
}

.dots span:nth-child(1) { background: #febca6; }
.dots span:nth-child(2) { background: #f9dbaf; }
.dots span:nth-child(3) { background: #a6f4d0; }

.address-bar {
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 6px;
  flex-grow: 1;
  padding: 4px 12px;
  font-size: 12px;
  color: #667085;
  text-align: center;
}

.preview-body {
  padding: 32px;
  height: calc(500px - 45px);
  overflow-y: auto;
  position: relative;
}

.preview-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #667085;
}

.placeholder-icon {
  width: 64px;
  height: 64px;
  background: #f4ebff;
  border-radius: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Shimmer / Loading */
.preview-loading {
  padding: 20px;
}

.shimmer-line {
  height: 12px;
  background: #f2f4f7;
  border-radius: 100px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
}

.shimmer-line.title {
  height: 24px;
  width: 60%;
  margin-bottom: 32px;
}

.shimmer-line.short {
  width: 40%;
}

.shimmer-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Form Styles */
.preview-form h3 {
  margin-bottom: 24px;
  color: #101828;
}

.preview-field {
  margin-bottom: 20px;
  text-align: left;
}

.preview-field label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #344054;
  margin-bottom: 6px;
}

.preview-field input, .preview-field textarea {
  width: 100%;
  background: #f9fafb;
  border: 1px solid #eaecf0;
  border-radius: 6px;
  padding: 10px;
}

.preview-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #475467;
  margin-bottom: 4px;
}

.preview-option .circle {
  width: 14px;
  height: 14px;
  border: 1px solid #d0d5dd;
  border-radius: 50%;
}

.preview-submit {
  background: #7f56d9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  width: 100%;
  margin-top: 10px;
}

/* Claim Overlay */
.claim-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Floating Elements */
.floating-icons .icon {
  position: absolute;
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 12px;
}

.floating-icons .icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.icon-1 { top: 10%; right: 10%; animation: float 6s ease-in-out infinite; }
.icon-2 { bottom: 20%; right: 5%; animation: float 8s ease-in-out infinite; delay: -2s; }
.icon-3 { top: 40%; right: -5%; animation: float 7s ease-in-out infinite; delay: -4s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
</style>
