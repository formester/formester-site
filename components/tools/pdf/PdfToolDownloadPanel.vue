<template>
  <div class="dl">
    <div>
      <div class="dl__title">Looks right? Choose how to use it.</div>
      <div class="dl__sub">
        {{ fieldCount }} {{ fieldCount === 1 ? 'field' : 'fields' }} · opens fillable in Acrobat, Preview, Chrome and
        Firefox.
      </div>
    </div>

    <div class="dl__card">
      <div class="dl__card-head">
        <span class="dl__ic dl__ic--grey"><Download :size="16" /></span>
        <div>
          <div class="dl__card-title">Download the PDF</div>
          <div class="dl__card-sub">Free. No account.</div>
        </div>
      </div>
      <div class="d-flex gap-2">
        <FButton
          variant="primary"
          size="md"
          class="flex-grow-1"
          :disabled="busy"
          @click="$emit('download', 'fillable')"
          >{{ busy === 'fillable' ? 'Preparing…' : 'Fillable PDF' }}</FButton
        >
        <FButton
          variant="secondary"
          size="md"
          class="flex-grow-1"
          :disabled="busy"
          @click="$emit('download', 'flattened')"
          >{{ busy === 'flattened' ? 'Preparing…' : 'Flattened copy' }}</FButton
        >
      </div>
    </div>

    <transition name="dl-fade">
      <div v-if="downloaded" class="dl__share" role="status">
        <div class="dl__share-head">
          <span class="dl__ic dl__ic--green"><Check :size="16" /></span>
          <div>
            <div class="dl__card-title">
              Your {{ downloaded === 'flattened' ? 'flattened copy' : 'fillable PDF' }} is downloading.
            </div>
            <div class="dl__card-sub">Know someone who still sends non-fillable PDFs? Share this free tool.</div>
          </div>
        </div>
        <div class="dl__share-row">
          <button type="button" class="dl__share-btn" @click="copyLink">
            <Link2 :size="14" /> {{ copied ? 'Link copied' : 'Copy link' }}
          </button>
          <button v-if="canNativeShare" type="button" class="dl__share-btn" @click="nativeShare">
            <Share2 :size="14" /> Share…
          </button>
          <a class="dl__share-btn" :href="shareHref('x')" target="_blank" rel="noopener" @click="$emit('share', 'x')"
            >X</a
          >
          <a
            class="dl__share-btn"
            :href="shareHref('linkedin')"
            target="_blank"
            rel="noopener"
            @click="$emit('share', 'linkedin')"
            >LinkedIn</a
          >
          <a class="dl__share-btn" :href="shareHref('email')" @click="$emit('share', 'email')">Email</a>
        </div>
      </div>
    </transition>

    <div class="dl__card dl__card--bridge">
      <span class="dl__badge">Recommended</span>
      <div class="dl__card-head">
        <span class="dl__ic dl__ic--white"><Link :size="16" /></span>
        <div>
          <div class="dl__card-title">Get a fill link instead</div>
          <div class="dl__card-sub dl__card-sub--violet">Send a link, not a file.</div>
        </div>
      </div>
      <p class="dl__copy">
        People fill it on any device, every answer lands in one place, and you stop chasing attachments.
        <strong>Free and unlimited.</strong>
      </p>
      <div class="dl__note">
        <FileCheck :size="14" class="flex-shrink-0 mt-1" />
        <span>Want this PDF auto-filled for every response? That is Formester Business, <strong>$49/mo</strong>.</span>
      </div>
      <FButton
        variant="primary"
        size="lg"
        :href="fillLinkHref"
        target="_blank"
        rel="noopener"
        @click="$emit('bridge', 'fill-link')"
        >Create fill link</FButton
      >
    </div>

    <a class="dl__row" :href="signatureHref" target="_blank" rel="noopener" @click="$emit('bridge', 'signature')">
      <div class="dl__card-head">
        <span class="dl__ic dl__ic--pink"><PenLine :size="16" /></span>
        <div>
          <div class="dl__card-title">Request signatures</div>
          <div class="dl__card-sub">Legally binding, with audit trail.</div>
        </div>
      </div>
      <ChevronRight :size="16" class="text-secondary" />
    </a>

    <div class="dl__privacy"><Lock :size="14" /><span>Saved in this browser. Nothing was uploaded.</span></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Download, Link, Link2, Share2, Check, FileCheck, PenLine, ChevronRight, Lock } from '@lucide/vue'
import FButton from '@/components/UI/FButton.vue'

const props = defineProps({
  fieldCount: { type: Number, default: 0 },
  busy: { type: [String, Boolean], default: false },
  downloaded: { type: String, default: '' }, // '' | 'fillable' | 'flattened'
})
const emit = defineEmits(['download', 'bridge', 'share'])

// ---- share -------------------------------------------------------------------
const TOOL_URL = 'https://formester.com/tools/fillable-pdf-creator/'
const SHARE_TEXT =
  'Free fillable PDF creator: add real form fields to any PDF in your browser. No signup, no watermark.'
const copied = ref(false)
const canNativeShare = computed(() => typeof navigator !== 'undefined' && typeof navigator.share === 'function')
const shareUrl = (channel) => `${TOOL_URL}?utm_source=share&utm_medium=${channel}&utm_campaign=pdf_tool`
function shareHref(channel) {
  const u = encodeURIComponent(shareUrl(channel))
  const t = encodeURIComponent(SHARE_TEXT)
  if (channel === 'x') return `https://twitter.com/intent/tweet?text=${t}&url=${u}`
  if (channel === 'linkedin') return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`
  return `mailto:?subject=${encodeURIComponent('A free fillable PDF creator')}&body=${t}%0A%0A${u}`
}
async function copyLink() {
  try {
    await navigator.clipboard.writeText(shareUrl('copy'))
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
    emit('share', 'copy')
  } catch {
    window.prompt('Copy this link', shareUrl('copy'))
  }
}
async function nativeShare() {
  try {
    await navigator.share({ title: 'Free fillable PDF creator', text: SHARE_TEXT, url: shareUrl('native') })
    emit('share', 'native')
  } catch {
    /* user dismissed the sheet */
  }
}

const config = useRuntimeConfig()
// Phase 3 replaces these with the fill-link endpoint; until then the CTAs land on signup with attribution.
const fillLinkHref = computed(() => `${config.public.appUrl}/users/sign_up?utm_source=pdf-tool&utm_medium=fill-link`)
const signatureHref = computed(() => `${config.public.appUrl}/users/sign_up?utm_source=pdf-tool&utm_medium=signature`)
void props
</script>

<style scoped>
.dl {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-6);
  height: 100%;
  overflow: auto;
}
.dl__title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin-bottom: 6px;
}
.dl__sub {
  font-size: 13px;
  line-height: 1.5;
  color: var(--fg-3);
}
.dl__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  background: var(--bg-primary);
}
.dl__card--bridge {
  border-color: var(--border-violet);
  background: var(--bg-violet-25);
}
.dl__badge {
  position: absolute;
  top: -10px;
  left: var(--space-4);
  font-size: 10px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: var(--violet-500);
  border-radius: var(--r-full);
  padding: 4px 8px;
  line-height: 1;
}
.dl__card-head {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dl__ic {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.dl__ic--grey {
  background: var(--bg-grey-100);
  color: var(--fg-strong);
}
.dl__ic--white {
  background: #fff;
  color: var(--violet-500);
}
.dl__ic--pink {
  background: #fdf2fa;
  color: #c11574;
}
.dl__card-title {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.dl__card-sub {
  font-size: var(--fs-xs);
  color: var(--fg-3);
}
.dl__card-sub--violet {
  color: var(--violet-600);
}
.dl__copy {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--fg-strong);
}
.dl__note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  background: #fff;
  border-radius: var(--r-lg);
  font-size: var(--fs-xs);
  line-height: 1.5;
  color: var(--fg-2);
}
.dl__note strong {
  color: var(--fg-1);
}
.dl__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px var(--space-4);
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  text-decoration: none;
  color: inherit;
}
.dl__row:hover {
  border-color: var(--border-dark);
}
.dl__ic--green {
  background: var(--success-10);
  color: var(--success-700);
}
.dl__share {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid var(--success-10);
  background: var(--success-10);
  border-radius: var(--r-xl);
}
.dl__share-head {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.dl__share-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.dl__share-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border: 1px solid var(--border-dark);
  border-radius: var(--r-full);
  background: var(--bg-primary);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
  text-decoration: none;
  line-height: 1;
}
.dl__share-btn:hover {
  border-color: var(--border-violet);
  color: var(--violet-600);
}
.dl-fade-enter-active {
  transition:
    opacity 200ms ease,
    transform 200ms ease;
}
.dl-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.dl__privacy {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-xs);
  color: var(--fg-muted);
}
</style>
