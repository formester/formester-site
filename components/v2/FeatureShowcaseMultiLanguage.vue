<template>
  <div class="fsv-ml">
    <!-- Background: form card with real dummy text -->
    <div class="fsv-ml__form-card">
      <div class="fsv-ml__form-title">Contact Us</div>

      <label class="fsv-ml__label">{{ fields[activeLang].name }}</label>
      <div class="fsv-ml__field">{{ fields[activeLang].namePlaceholder }}</div>

      <label class="fsv-ml__label">{{ fields[activeLang].email }}</label>
      <div class="fsv-ml__field">{{ fields[activeLang].emailPlaceholder }}</div>

      <div class="fsv-ml__submit">{{ fields[activeLang].submit }}</div>
    </div>

    <!-- Foreground: language dropdown -->
    <div class="fsv-ml__dropdown">
      <div class="fsv-ml__dropdown-title">Select Language</div>
      <div
        v-for="lang in LANGS"
        :key="lang.code"
        class="fsv-ml__lang"
        :class="{ 'fsv-ml__lang--active': activeLang === lang.code }"
      >
        <span>{{ lang.flag }}</span>
        <span class="fsv-ml__lang-name">{{ lang.label }}</span>
        <div v-if="activeLang === lang.code" class="fsv-ml__lang-dot" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const LANGS = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'French' },
  { code: 'de', flag: '🇩🇪', label: 'German' },
  { code: 'ja', flag: '🇯🇵', label: 'Japanese' },
]

const fields = {
  en: { name: 'Full Name', namePlaceholder: 'John Doe', email: 'Email Address', emailPlaceholder: 'john@example.com', submit: 'Send Message' },
  fr: { name: 'Nom complet', namePlaceholder: 'Jean Dupont', email: 'Adresse e-mail', emailPlaceholder: 'jean@exemple.fr', submit: 'Envoyer' },
  de: { name: 'Vollständiger Name', namePlaceholder: 'Max Mustermann', email: 'E-Mail-Adresse', emailPlaceholder: 'max@beispiel.de', submit: 'Absenden' },
  ja: { name: 'お名前', namePlaceholder: '山田 太郎', email: 'メールアドレス', emailPlaceholder: 'taro@example.jp', submit: '送信する' },
}

const activeLang = ref('en')
let timer = null
let idx = 0

onMounted(() => {
  timer = setInterval(() => {
    idx = (idx + 1) % LANGS.length
    activeLang.value = LANGS[idx].code
  }, 2000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.fsv-ml {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Background form card ── */
.fsv-ml__form-card {
  position: absolute;
  inset: 8px;
  background: var(--bg-primary);
  border-radius: var(--r-2xl);
  border: 1px solid #ede9fe;
  box-shadow: var(--shadow-xs);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fsv-ml__form-title {
  font-size: 15px;
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  margin-bottom: var(--space-1);
}

.fsv-ml__label {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-medium);
  color: var(--fg-muted);
  transition: all 0.35s ease;
}

.fsv-ml__field {
  height: 36px;
  background: var(--bg-grey-50);
  border-radius: var(--r);
  border: 1px solid var(--border-light);
  padding: 0 var(--space-3);
  display: flex;
  align-items: center;
  font-size: var(--fs-xs);
  color: var(--fg-3);
  transition: all 0.35s ease;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fsv-ml__submit {
  margin-top: auto;
  background: #7c3aed;
  color: #fff;
  border-radius: var(--r);
  padding: var(--space-2) var(--space-4);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  text-align: center;
  transition: all 0.35s ease;
}

/* ── Dropdown overlay ── */
.fsv-ml__dropdown {
  position: absolute;
  top: 32px;
  right: -16px;
  background: var(--bg-primary);
  border-radius: var(--r-xl);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
  border: 1px solid var(--border-light);
  padding: var(--space-2);
  width: 192px;
  z-index: 1;
  animation: slide-up 0.4s 0.2s ease both;
}

.fsv-ml__dropdown-title {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  color: var(--fg-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: var(--space-1) var(--space-2) var(--space-2);
  margin-top: var(--space-1);
}

.fsv-ml__lang {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--r);
  color: var(--fg-3);
  font-size: var(--fs-xs);
  transition: background 250ms ease;
}

.fsv-ml__lang--active {
  background: #f5f3ff;
  color: #7c3aed;
  justify-content: space-between;
}

.fsv-ml__lang-name { font-weight: var(--fw-medium); flex: 1; }

.fsv-ml__lang-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--r-full);
  background: #7c3aed;
  flex-shrink: 0;
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
