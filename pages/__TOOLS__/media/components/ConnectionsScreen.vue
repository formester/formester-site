<template>
  <div class="s3-page">
    <button class="btn btn--ghost" style="padding-left:6px;" @click="$emit('back')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      Back to files
    </button>
    <header style="margin-top:12px;">
      <h1 class="page-head__title">S3 connections</h1>
      <div class="s3-header__sub">Manage the buckets this workspace can browse and upload to.</div>
    </header>

    <div class="s3-config-grid">
      <div class="s3-profile-list">
        <button
          v-for="p in profiles"
          :key="p.id"
          :class="['profile-row', { 'is-editing': p.id === editingId }]"
          @click="selectProfile(p.id)"
        >
          <span class="profile-row__avatar">{{ initial(p.name) }}</span>
          <span class="profile-row__text">
            <span class="profile-row__name">{{ p.name }}</span>
            <span class="profile-row__meta">{{ p.bucket || '(no bucket set)' }}</span>
          </span>
          <span v-if="p.id === activeProfileId" class="badge badge--live">Active</span>
        </button>
        <button class="btn btn--secondary" style="width:100%;justify-content:center;margin-top:4px;" @click="addConnection">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          Add connection
        </button>
      </div>

      <div v-if="draft" class="card s3-config-form">
        <div class="s3-config-form__head">
          <div class="field" style="max-width:320px;flex:1;">
            <label class="field__label">Connection name</label>
            <input v-model="draft.name" class="input" type="text" />
          </div>
          <span v-if="draft.id === activeProfileId" class="badge badge--live" style="margin-top:28px;">Active connection</span>
          <button v-else class="btn btn--secondary" style="margin-top:22px;" @click="setActive">Set as active</button>
        </div>

        <div class="field">
          <label class="field__label">Access Key ID</label>
          <input v-model="draft.accessKeyId" class="input" type="text" placeholder="AKIA…" />
        </div>

        <div class="field" style="margin-top:16px;">
          <label class="field__label">Secret Access Key</label>
          <div class="field__row-icon">
            <input
              v-model="draft.secretAccessKey"
              class="input"
              :type="showSecret ? 'text' : 'password'"
              placeholder="••••••••••••••••"
              style="padding-right:40px;"
            />
            <button type="button" class="s3-eye-btn" aria-label="Toggle secret visibility" @click="showSecret = !showSecret">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>

        <div class="field" style="margin-top:16px;">
          <label class="field__label">Region</label>
          <div class="s3-select-wrap">
            <select v-model="draft.region" class="input">
              <option v-for="r in REGIONS" :key="r" :value="r">{{ r }}</option>
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>

        <div class="field" style="margin-top:16px;">
          <label class="field__label">Bucket</label>
          <input v-model="draft.bucket" class="input" type="text" placeholder="my-bucket-name" />
        </div>

        <div class="field" style="margin-top:16px;">
          <label class="field__label">ACL</label>
          <div class="s3-select-wrap">
            <select v-model="draft.acl" class="input">
              <option v-for="a in ACL_OPTIONS" :key="a" :value="a">{{ a }}</option>
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>

        <div class="field" style="margin-top:16px;">
          <label class="field__label">Public URL base <span style="color:var(--text-muted);font-weight:400;">(optional)</span></label>
          <input v-model="draft.publicUrlBase" class="input" type="text" placeholder="https://cdn.example.com" />
          <span class="field__hint">Used to build public links instead of the raw S3 URL.</span>
        </div>

        <div v-if="testResult === 'success'" class="alert alert--success s3-test-result">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"/></svg>
          <div>Connected — bucket is reachable and credentials are valid.</div>
        </div>
        <div v-else-if="testResult === 'error'" class="alert alert--danger s3-test-result">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
          <div>{{ testMessage }}</div>
        </div>

        <div class="s3-config-footer">
          <button class="btn btn--ghost s3-btn-danger" :disabled="profiles.length <= 1" @click="confirmDelete = true">
            Delete connection
          </button>
          <div class="s3-config-footer__right">
            <button class="btn btn--secondary" :disabled="testing" @click="test">{{ testing ? 'Testing…' : 'Test connection' }}</button>
            <button class="btn btn--primary" :disabled="saving" @click="save">{{ saving ? 'Saving…' : 'Save changes' }}</button>
          </div>
        </div>
      </div>
    </div>

    <DeleteConfirmModal
      v-if="confirmDelete && draft"
      :names="[draft.name]"
      :deleting="deleting"
      @close="confirmDelete = false"
      @confirm="removeConnection"
    />
  </div>
</template>

<script setup>
import { deleteProfileApi, saveProfile, testProfile } from '../useMediaApi'
import { useToast } from '../useToast'
import DeleteConfirmModal from './DeleteConfirmModal.vue'

const REGIONS = ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'eu-west-1', 'eu-central-1', 'ap-south-1', 'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 'sa-east-1']
const ACL_OPTIONS = ['private', 'public-read']

const props = defineProps({
  profiles: { type: Array, required: true },
  activeProfileId: { type: String, default: null }
})
const emit = defineEmits(['back', 'changed'])

const { showToast } = useToast()

const editingId = ref(props.activeProfileId)
const draft = ref(null)
const showSecret = ref(false)
const testing = ref(false)
const testResult = ref(null)
const testMessage = ref('')
const saving = ref(false)
const confirmDelete = ref(false)
const deleting = ref(false)

function initial(name) {
  return (name || '?').charAt(0).toUpperCase()
}

function loadDraft(id) {
  const p = props.profiles.find((x) => x.id === id)
  draft.value = p ? { ...p } : null
  testResult.value = null
  showSecret.value = false
}

function selectProfile(id) {
  editingId.value = id
  loadDraft(id)
}

watch(() => props.profiles, () => {
  if (!props.profiles.length) {
    if (!draft.value) addConnection()
    return
  }
  if (!editingId.value || !props.profiles.some((p) => p.id === editingId.value)) {
    editingId.value = props.profiles[0].id
  }
  loadDraft(editingId.value)
}, { immediate: true })

function addConnection() {
  draft.value = { id: null, name: 'New connection', accessKeyId: '', secretAccessKey: '', region: 'us-east-1', bucket: '', acl: 'public-read', publicUrlBase: '' }
  editingId.value = null
  testResult.value = null
}

async function save() {
  saving.value = true
  try {
    const res = await saveProfile(draft.value)
    editingId.value = res.profile.id
    showToast('Connection saved')
    emit('changed')
  } catch (err) {
    showToast(err?.data?.statusMessage || 'Failed to save connection')
  } finally {
    saving.value = false
  }
}

async function test() {
  testing.value = true
  testResult.value = null
  try {
    const res = await testProfile(draft.value)
    testResult.value = res.ok ? 'success' : 'error'
    testMessage.value = res.message || ''
  } catch {
    testResult.value = 'error'
    testMessage.value = "Couldn't connect. Check the access key, secret, and bucket name."
  } finally {
    testing.value = false
  }
}

async function setActive() {
  emit('changed', { activate: draft.value.id })
}

async function removeConnection() {
  deleting.value = true
  try {
    await deleteProfileApi(draft.value.id)
    confirmDelete.value = false
    editingId.value = null
    showToast('Connection deleted')
    emit('changed')
  } catch (err) {
    showToast(err?.data?.statusMessage || 'Failed to delete connection')
  } finally {
    deleting.value = false
  }
}
</script>
