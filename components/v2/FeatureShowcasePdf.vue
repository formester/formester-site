<template>
  <div class="fsv-pdf" style="transform: scale(1.1)">
    <div class="fsv-pdf__form">
      <div class="fsv-pdf__form-header" />
      <div class="fsv-pdf__form-field" />
      <div class="fsv-pdf__form-field" />
      <div class="fsv-pdf__form-field" />
      <div class="fsv-pdf__form-btn" />
    </div>

    <div class="fsv-pdf__arrow">
      <svg class="fsv-pdf__chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>

    <div class="fsv-pdf__doc-wrap">
      <div class="fsv-pdf__doc-badge">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span class="fsv-pdf__badge-icon" v-html="pdfIconSvg" />
      </div>
      <div class="fsv-pdf__doc">
      <Transition name="doc-flip" mode="out-in">
        <div :key="current" class="fsv-pdf__doc-inner">

          <!-- Invoice -->
          <template v-if="current === 0">
            <div class="fsv-pdf__doc-title">INVOICE</div>
            <div class="fsv-pdf__doc-row">
              <div class="fsv-pdf__doc-label" />
              <div class="fsv-pdf__doc-value" />
            </div>
            <div class="fsv-pdf__doc-divider" />
            <div class="fsv-pdf__doc-line" />
            <div class="fsv-pdf__doc-line fsv-pdf__doc-line--short" />
            <div class="fsv-pdf__doc-line" />
          </template>

          <!-- Certificate -->
          <template v-else-if="current === 1">
            <div class="fsv-pdf__doc-title fsv-pdf__doc-title--cert">CERTIFICATE</div>
            <div class="fsv-pdf__doc-seal" />
            <div class="fsv-pdf__doc-line fsv-pdf__doc-line--center fsv-pdf__doc-line--med" />
            <div class="fsv-pdf__doc-line fsv-pdf__doc-line--center" />
            <div class="fsv-pdf__doc-divider fsv-pdf__doc-divider--gold" />
            <div class="fsv-pdf__doc-sig" />
          </template>

          <!-- Contract -->
          <template v-else-if="current === 2">
            <div class="fsv-pdf__doc-title">CONTRACT</div>
            <div class="fsv-pdf__doc-line" />
            <div class="fsv-pdf__doc-line fsv-pdf__doc-line--short" />
            <div class="fsv-pdf__doc-line" />
            <div class="fsv-pdf__doc-divider" />
            <div class="fsv-pdf__doc-sigs-row">
              <div class="fsv-pdf__doc-sig-col">
                <div class="fsv-pdf__doc-sig" />
                <div class="fsv-pdf__doc-sig-label" />
              </div>
              <div class="fsv-pdf__doc-sig-col">
                <div class="fsv-pdf__doc-sig" />
                <div class="fsv-pdf__doc-sig-label" />
              </div>
            </div>
          </template>

          <!-- Quote -->
          <template v-else-if="current === 3">
            <div class="fsv-pdf__doc-title">QUOTE</div>
            <div class="fsv-pdf__doc-row">
              <div class="fsv-pdf__doc-label" />
              <div class="fsv-pdf__doc-value fsv-pdf__doc-value--purple" />
            </div>
            <div class="fsv-pdf__doc-divider" />
            <div class="fsv-pdf__doc-item-row">
              <div class="fsv-pdf__doc-item-line" />
              <div class="fsv-pdf__doc-item-price" />
            </div>
            <div class="fsv-pdf__doc-item-row">
              <div class="fsv-pdf__doc-item-line fsv-pdf__doc-item-line--short" />
              <div class="fsv-pdf__doc-item-price" />
            </div>
            <div class="fsv-pdf__doc-total-row">
              <div class="fsv-pdf__doc-total-label" />
              <div class="fsv-pdf__doc-total-value" />
            </div>
          </template>

        </div>
      </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import pdfIconSvg from '~/assets/svg/feature-visuals/pdf-icon.svg?raw'

const current = ref(0)
const DOC_COUNT = 4
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % DOC_COUNT
  }, 2500)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
/* ── Transition ──────────────────────────────────────────────── */
.doc-flip-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.doc-flip-enter-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.45, 0.64, 1);
}
.doc-flip-leave-to {
  opacity: 0;
  transform: translateY(-14px) scale(0.93) rotateX(6deg);
}
.doc-flip-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.95) rotateX(-4deg);
}

/* ── Layout ──────────────────────────────────────────────────── */
.fsv-pdf {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
}

/* ── Form (left) ─────────────────────────────────────────────── */
.fsv-pdf__form {
  width: 144px;
  height: 224px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(4px);
  border-radius: var(--r-xl);
  border: 1px solid rgba(216,180,254,0.4);
  box-shadow: var(--shadow-xs);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  z-index: 1;
  animation: slide-from-left 0.4s ease both;
}
.fsv-pdf__form-header {
  height: 12px;
  width: 50%;
  background: #ddd6fe;
  border-radius: var(--r);
  margin-bottom: var(--space-3);
}
.fsv-pdf__form-field {
  height: 24px;
  background: var(--bg-grey-50);
  border-radius: var(--r);
  border: 1px solid var(--border-light);
  margin-bottom: var(--space-2);
  flex: 1;
}
.fsv-pdf__form-btn {
  height: 24px;
  background: #a855f7;
  border-radius: var(--r);
  margin-top: var(--space-2);
  flex-shrink: 0;
}

/* ── Arrow ───────────────────────────────────────────────────── */
.fsv-pdf__arrow {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.fsv-pdf__chevron { animation: chevron-bounce 1.5s ease-in-out infinite; }

/* ── Doc (right) ─────────────────────────────────────────────── */
.fsv-pdf__doc {
  width: 144px;
  height: 224px;
  background: var(--bg-primary);
  border-radius: var(--r-xl);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-md);
  padding: var(--space-4);
  position: relative;
  z-index: 1;
  animation: slide-from-right 0.4s 0.1s ease both;
  overflow: hidden;
  perspective: 600px;
}
.fsv-pdf__doc-wrap {
  position: relative;
  flex-shrink: 0;
}
.fsv-pdf__doc-badge {
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 2;
  display: flex;
}
.fsv-pdf__badge-icon { display: flex; align-items: center; }
.fsv-pdf__badge-icon :deep(svg) { width: 36px; height: 36px; }
.fsv-pdf__doc-inner { display: flex; flex-direction: column; height: 100%; }

/* ── Shared doc atoms ────────────────────────────────────────── */
.fsv-pdf__doc-title {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin-bottom: var(--space-2);
  margin-top: var(--space-2);
  letter-spacing: 0.04em;
}
.fsv-pdf__doc-title--cert {
  text-align: center;
  font-size: 9px;
  letter-spacing: 0.1em;
  color: #92400e;
}

.fsv-pdf__doc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}
.fsv-pdf__doc-label { width: 40px; height: 8px; background: var(--gray-200); border-radius: var(--r); }
.fsv-pdf__doc-value { width: 32px; height: 8px; background: var(--fg-1); border-radius: var(--r); }
.fsv-pdf__doc-value--purple { background: #a855f7; }

.fsv-pdf__doc-divider {
  width: 100%;
  height: 1px;
  background: var(--border-light);
  margin-bottom: var(--space-2);
}
.fsv-pdf__doc-divider--gold { background: #d97706; opacity: 0.4; }

.fsv-pdf__doc-line {
  height: 8px;
  background: var(--bg-grey-100);
  border-radius: var(--r);
  margin-bottom: var(--space-2);
}
.fsv-pdf__doc-line--short  { width: 80%; }
.fsv-pdf__doc-line--med    { width: 60%; }
.fsv-pdf__doc-line--center { align-self: center; }

/* ── Certificate atoms ───────────────────────────────────────── */
.fsv-pdf__doc-seal {
  width: 36px;
  height: 36px;
  border-radius: var(--r-full);
  background: radial-gradient(circle, #fef3c7, #fde68a);
  border: 2px solid #d97706;
  margin: var(--space-2) auto var(--space-2);
  flex-shrink: 0;
}
.fsv-pdf__doc-sig {
  height: 6px;
  width: 70%;
  border-bottom: 1px solid var(--fg-muted);
  margin-top: auto;
}

/* ── Contract atoms ──────────────────────────────────────────── */
.fsv-pdf__doc-sigs-row {
  display: flex;
  gap: var(--space-2);
  margin-top: auto;
}
.fsv-pdf__doc-sig-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fsv-pdf__doc-sig-col .fsv-pdf__doc-sig { width: 100%; margin-top: 0; }
.fsv-pdf__doc-sig-label {
  height: 6px;
  width: 50%;
  background: var(--bg-grey-100);
  border-radius: var(--r);
}

/* ── Quote atoms ─────────────────────────────────────────────── */
.fsv-pdf__doc-item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-1);
}
.fsv-pdf__doc-item-line { height: 7px; width: 55%; background: var(--bg-grey-100); border-radius: var(--r); }
.fsv-pdf__doc-item-line--short { width: 40%; }
.fsv-pdf__doc-item-price { height: 7px; width: 22px; background: var(--bg-grey-100); border-radius: var(--r); }
.fsv-pdf__doc-total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-2);
  padding-top: var(--space-1);
  border-top: 1px solid var(--border-light);
}
.fsv-pdf__doc-total-label { height: 8px; width: 30px; background: var(--gray-200); border-radius: var(--r); }
.fsv-pdf__doc-total-value { height: 8px; width: 28px; background: #a855f7; border-radius: var(--r); }

/* ── Keyframes ───────────────────────────────────────────────── */
@keyframes slide-from-left {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slide-from-right {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes chevron-bounce {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(5px); }
}
</style>
