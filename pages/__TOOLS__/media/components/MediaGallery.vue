<template>
  <div class="s3-page">
    <header class="page-head">
      <div>
        <h1 class="page-head__title">S3 Media Manager</h1>
        <div class="s3-header__sub">Browsing <strong>s3://{{ activeProfile?.bucket }}</strong></div>
      </div>
      <div class="s3-profile-switch">
        <button class="org-switch" @click.stop="profileMenuOpen = !profileMenuOpen">
          <span class="org-switch__avatar">{{ initial(activeProfile?.name) }}</span>
          {{ activeProfile?.name }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div v-if="profileMenuOpen" class="popover s3-profile-pop" @click.stop>
          <div class="popover__label">Switch connection</div>
          <div
            v-for="p in profiles"
            :key="p.id"
            :class="['opt-row', { 'is-active': p.id === activeProfileId }]"
            @click="switchProfile(p.id)"
          >
            <span class="s3-opt-avatar">{{ initial(p.name) }}</span>
            <span class="s3-opt-text">
              <span class="s3-opt-name">{{ p.name }}</span>
              <span class="s3-opt-bucket">s3://{{ p.bucket }}</span>
            </span>
            <svg v-if="p.id === activeProfileId" class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <hr class="menu__sep" />
          <button class="menu__item" @click="$emit('open-connections')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.4 2H9.6l-.4 2.9a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.4 2.9h4.8l.4-2.9a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6a7 7 0 0 0 .1-1z"/></svg>
            Manage connections…
          </button>
        </div>
      </div>
    </header>

    <div class="s3-toolbar">
      <nav v-if="!isSearching" class="s3-crumbs">
        <template v-for="(crumb, i) in crumbs" :key="crumb.path">
          <template v-if="i !== crumbs.length - 1">
            <button class="s3-crumb s3-crumb--link" :disabled="navLoading" @click="goToPrefix(crumb.path)">{{ crumb.label }}</button>
            <span class="s3-crumb-sep">/</span>
          </template>
          <span v-else class="s3-crumb s3-crumb--current">{{ crumb.label }}</span>
        </template>
      </nav>
      <nav v-else class="s3-crumbs"><span class="s3-crumb s3-crumb--current">Search results</span></nav>

      <div class="s3-toolbar__spacer"></div>

      <div class="field-search s3-search">
        <svg class="field-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input class="input" type="text" placeholder="Search this folder…" v-model="searchDraft" @input="onSearchInput" />
        <button v-if="isSearching" type="button" class="field-search__clear" aria-label="Clear search" @click="clearSearch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="s3-view-filter">
        <button class="btn btn--ghost" @click.stop="viewFilterOpen = !viewFilterOpen">
          {{ viewFilter === 'files' ? 'Files' : 'Folders and files' }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div v-if="viewFilterOpen" class="popover s3-view-filter-pop" @click.stop>
          <div :class="['opt-row', { 'is-active': viewFilter === 'all' }]" @click="setViewFilter('all')">
            Folders and files
            <svg v-if="viewFilter === 'all'" class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <div :class="['opt-row', { 'is-active': viewFilter === 'files' }]" @click="setViewFilter('files')">
            Files
            <svg v-if="viewFilter === 'files'" class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        </div>
      </div>

      <div class="seg" role="tablist" aria-label="View mode">
        <button :class="{ 'is-active': viewMode === 'grid' }" aria-label="Grid view" @click="setViewMode('grid')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
        </button>
        <button :class="{ 'is-active': viewMode === 'list' }" aria-label="List view" @click="setViewMode('list')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      <button class="btn btn--ghost btn--icon" aria-label="Keyboard shortcuts" @click="showShortcuts = true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/></svg>
      </button>

      <button class="btn btn--primary" @click="showUpload = true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4m0 0 4 4m-4-4-4 4"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
        Upload files
      </button>
    </div>

    <div v-if="selectedKeys.length" class="s3-selection-bar">
      <span class="s3-selection-label">{{ selectedKeys.length }} selected</span>
      <button v-if="canCopySelected" class="btn btn--secondary" @click="bulkCopyLink">Copy link</button>
      <button class="btn btn--secondary" @click="bulkDownload">Download</button>
      <button class="btn btn--secondary s3-btn-danger" @click="openBulkDelete">Delete selected</button>
      <button class="btn btn--ghost" @click="selectedKeys = []">Clear</button>
    </div>
    <div v-else-if="!navLoading" class="s3-strip">
      <span>{{ resultsLabel }}</span>
      <button v-if="items.length" class="btn btn--ghost s3-strip__select-all" @click="selectAll">Select all</button>
    </div>

    <div v-if="loadError" class="alert alert--danger" style="margin-top:16px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
      <div>{{ loadError }}</div>
    </div>

    <div v-if="navLoading" class="s3-loading-state">
      <div class="s3-spinner"></div>
      <div>Loading…</div>
    </div>
    <div v-else-if="!items.length && !isSearching" class="empty">
      <div class="empty__art"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h5l2 3h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg></div>
      <div class="empty__title">This folder is empty</div>
      <div class="empty__text">Upload files to get started.</div>
      <button class="btn btn--primary" @click="showUpload = true">Upload files</button>
    </div>
    <div v-else-if="!items.length && isSearching" class="empty">
      <div class="empty__art"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></div>
      <div class="empty__title">No files match "{{ searchQuery }}"</div>
      <div class="empty__text">Try a different name, or check another folder.</div>
      <button class="btn btn--secondary" @click="clearSearch">Clear search</button>
    </div>

    <div v-else-if="viewMode === 'grid'" class="s3-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr));">
      <div
        v-for="item in items"
        :key="item.id"
        :class="['card', { 'is-selected': item.isSelected, 's3-card--focused': item.id === focusedId }]"
        @click="openItem(item)"
      >
        <div class="card__thumb">
          <div v-if="item.isFolder" class="s3-folder-tile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8A2 2 0 0 1 21 9.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>
          </div>
          <div v-else-if="item.isPreviewable" class="s3-thumb-img">
            <img class="s3-thumb-img__img" :src="item.thumbUrl" loading="lazy" decoding="async" alt="" />
            <div v-if="item.isVideo" class="gal-play"><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
          </div>
          <div v-else class="card__tile" :style="`background:${item.tileBg};color:${item.tileFg};`">{{ item.extLabel }}</div>

          <div class="card__select">
            <input class="check" type="checkbox" :checked="item.isSelected" @click.stop @change="toggleSelect(item.id)" aria-label="Select" />
          </div>

          <template v-if="item.isFolder">
            <button class="card__menu-btn" aria-label="More actions" @click.stop="toggleMenu(item.id, $event)">
              <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>
            </button>
            <div v-if="openMenuId === item.id" class="menu card__menu-pop" :style="menuStyle" @click.stop>
              <button class="menu__item" @click="openRename(item)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
                Rename
              </button>
              <hr class="menu__sep" />
              <button class="menu__item menu__item--danger" @click="openDeleteSingle(item)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12"/><path d="M10 11v6M14 11v6"/></svg>
                Delete
              </button>
            </div>
          </template>

          <div v-else class="card__overlay">
            <button class="card__action" aria-label="Download" @click.stop="downloadItems([item])"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg></button>
            <button class="card__action" aria-label="Copy link" @click.stop="copyLinks([item.key])"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"/></svg></button>
            <button class="card__action" aria-label="Rename" @click.stop="openRename(item)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></button>
          </div>
        </div>
        <div class="card__body">
          <div class="s3-card-body-main">
            <div class="card__title" :title="item.name">{{ item.name }}</div>
            <div class="card__meta">{{ item.metaLabel }}</div>
            <div v-if="item.pathHint" class="s3-path-hint">in {{ item.pathHint }}</div>
          </div>
          <span v-if="item.isPrivate" class="s3-card-private" title="Private">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
          </span>
        </div>
      </div>
    </div>

    <table v-else class="table s3-table">
      <thead>
        <tr>
          <th class="col-check"><input class="check" type="checkbox" :checked="allSelectedOnPage" @change="toggleSelectAll" aria-label="Select all" /></th>
          <th>Name</th>
          <th class="col-status">Type</th>
          <th class="col-updated">Size</th>
          <th class="col-updated">Modified</th>
          <th class="col-actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" :class="{ 'is-selected': item.isSelected }" @click="openItem(item)">
          <td class="col-check"><input class="check" type="checkbox" :checked="item.isSelected" @click.stop @change="toggleSelect(item.id)" :aria-label="`Select ${item.name}`" /></td>
          <td>
            <div class="name-cell">
              <span class="thumb" :style="item.isPreviewable ? '' : item.rowThumbStyle">
                <svg v-if="item.isFolder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8A2 2 0 0 1 21 9.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>
                <img v-else-if="item.isPreviewable" class="thumb__img" :src="item.thumbUrl" loading="lazy" decoding="async" alt="" />
                <span v-else class="s3-row-ext">{{ item.extLabel }}</span>
              </span>
              <span class="name__title">{{ item.name }}</span>
              <span v-if="item.isPrivate" class="s3-card-private" title="Private"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></span>
              <span v-if="item.pathHint" class="s3-path-hint">in {{ item.pathHint }}</span>
            </div>
          </td>
          <td class="col-status">{{ item.kindLabel }}</td>
          <td class="col-updated">{{ item.metaLabel }}</td>
          <td class="col-updated">{{ item.modifiedLabel }}</td>
          <td class="col-actions">
            <span class="cell-actions">
              <span class="row-actions">
                <template v-if="item.isFile">
                  <button class="icon-btn" aria-label="Download" @click.stop="downloadItems([item])"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg></button>
                  <button class="icon-btn" aria-label="Rename" @click.stop="openRename(item)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></button>
                </template>
                <button v-else class="icon-btn" aria-label="More" @click.stop="toggleMenu(item.id, $event)"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg></button>
              </span>
              <div v-if="openMenuId === item.id" class="menu s3-row-menu-pop" :style="menuStyle" @click.stop>
                <button class="menu__item" @click="openRename(item)">Rename</button>
                <hr class="menu__sep" />
                <button class="menu__item menu__item--danger" @click="openDeleteSingle(item)">Delete</button>
              </div>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <button
      v-if="nextContinuationToken && !isSearching"
      class="btn btn--ghost s3-load-more"
      style="margin-top:16px;"
      :disabled="appending"
      @click="loadMore"
    >
      <span v-if="appending" class="s3-btn-spinner"></span>
      {{ appending ? 'Loading…' : 'Load more' }}
    </button>

    <UploadModal v-if="showUpload" :prefix="prefix" @close="showUpload = false" @uploaded="onUploaded" />
    <RenameModal
      v-if="renameTarget"
      :value="renameTarget.name"
      :saving="renaming"
      @close="renameTarget = null"
      @confirm="confirmRename"
    />
    <DeleteConfirmModal
      v-if="deleteTarget"
      :names="deleteTarget.names"
      :deleting="deleting"
      @close="deleteTarget = null"
      @confirm="confirmDelete"
    />
    <ShortcutsModal v-if="showShortcuts" @close="showShortcuts = false" />
  </div>
</template>

<script setup>
import {
  activateProfile,
  deleteKeys,
  getLink,
  listAllKeysUnderPrefix,
  listItems,
  renameItem
} from '../useMediaApi'
import { useToast } from '../useToast'
import UploadModal from './UploadModal.vue'
import RenameModal from './RenameModal.vue'
import DeleteConfirmModal from './DeleteConfirmModal.vue'
import ShortcutsModal from './ShortcutsModal.vue'

const IMAGE_EXT = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg']
const VIDEO_EXT = ['mp4', 'mov', 'webm']
const AUDIO_EXT = ['mp3', 'wav', 'm4a']
const CATEGORY_STYLE = {
  pdf: ['var(--danger-bg)', 'var(--danger)'],
  doc: ['var(--border-soft)', 'var(--text-soft)'],
  audio: ['var(--accent-tint)', 'var(--accent-600)'],
  video: ['var(--border-soft)', 'var(--text-soft)'],
  archive: ['var(--warning-bg)', 'var(--warning)'],
  other: ['var(--border-soft)', 'var(--text-muted)']
}

const props = defineProps({
  profiles: { type: Array, required: true },
  activeProfileId: { type: String, default: null }
})
const emit = defineEmits(['open-connections', 'profile-switched'])

const { showToast } = useToast()

const activeProfile = computed(() => props.profiles.find((p) => p.id === props.activeProfileId) || null)

const prefix = ref('')
const searchDraft = ref('')
const searchQuery = ref('')
const viewMode = ref('grid')
const viewFilter = ref('all')
const viewFilterOpen = ref(false)
const folders = ref([])
const files = ref([])
const nextContinuationToken = ref(null)
const loading = ref(false)
const appending = ref(false)
const navLoading = computed(() => loading.value && !appending.value)
const loadError = ref('')
const selectedKeys = ref([])
const focusedId = ref(null)
const openMenuId = ref(null)
const menuAnchor = ref(null)
const profileMenuOpen = ref(false)
const showUpload = ref(false)
const showShortcuts = ref(false)
const renameTarget = ref(null)
const renaming = ref(false)
const deleteTarget = ref(null)
const deleting = ref(false)

if (import.meta.client) {
  const saved = localStorage.getItem('media-tool-view-mode')
  if (saved === 'grid' || saved === 'list') viewMode.value = saved
}

function initial(name) {
  return (name || '?').charAt(0).toUpperCase()
}

const isSearching = computed(() => !!searchQuery.value.trim())

const crumbs = computed(() => {
  const parts = prefix.value.split('/').filter(Boolean)
  const out = [{ label: 'root', path: '' }]
  let acc = ''
  for (const part of parts) {
    acc += `${part}/`
    out.push({ label: part, path: acc })
  }
  return out
})

function extOf(name) {
  const m = /\.([a-z0-9]+)$/i.exec(name || '')
  return m ? m[1].toLowerCase() : ''
}
function classify(name) {
  const ext = extOf(name)
  if (IMAGE_EXT.includes(ext)) return 'image'
  if (VIDEO_EXT.includes(ext)) return 'video'
  if (AUDIO_EXT.includes(ext)) return 'audio'
  if (ext === 'pdf') return 'pdf'
  if (['doc', 'docx', 'txt', 'rtf'].includes(ext)) return 'doc'
  if (['zip', 'rar', 'tar', 'gz'].includes(ext)) return 'archive'
  return 'other'
}
function formatSize(bytes) {
  bytes = bytes || 0
  if (bytes < 1024) return `${bytes.toFixed(0)} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`
}
function formatDate(value) {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}
function folderName(folderPrefix) {
  return folderPrefix.split('/').filter(Boolean).pop()
}

const showFilesOnly = computed(() => viewFilter.value === 'files')

const items = computed(() => {
  const folderItems = (isSearching.value || showFilesOnly.value) ? [] : folders.value
    .slice()
    .sort((a, b) => folderName(a).localeCompare(folderName(b)))
    .map((f) => {
      const id = f
      return {
        id, key: f, isFolder: true, isFile: false, name: folderName(f),
        isSelected: selectedKeys.value.includes(id), metaLabel: 'Folder', kindLabel: 'Folder',
        modifiedLabel: '—', pathHint: ''
      }
    })

  const fileItems = files.value
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((f) => {
      const id = f.key
      const cat = classify(f.name)
      const isImage = cat === 'image'
      const isVideo = cat === 'video'
      const isPreviewable = isImage
      const cs = CATEGORY_STYLE[cat] || CATEGORY_STYLE.other
      const isPrivate = activeProfile.value?.acl === 'private'
      return {
        id, key: f.key, isFolder: false, isFile: true, name: f.name,
        isSelected: selectedKeys.value.includes(id),
        isPreviewable, isVideo,
        thumbUrl: isPreviewable ? f.url : '',
        rowThumbStyle: isPreviewable ? '' : `background:${cs[0]};color:${cs[1]};`,
        tileBg: cs[0], tileFg: cs[1], extLabel: (extOf(f.name) || 'file').toUpperCase(),
        kindLabel: (extOf(f.name) || 'file').toUpperCase(),
        metaLabel: formatSize(f.size), modifiedLabel: formatDate(f.lastModified),
        isPrivate, pathHint: (isSearching.value || showFilesOnly.value) ? (f.key.includes('/') ? f.key.slice(0, f.key.lastIndexOf('/')) : '') : ''
      }
    })

  return [...folderItems, ...fileItems]
})

const canCopySelected = computed(() => selectedKeys.value.some((id) => files.value.some((f) => f.key === id)))
const allSelectedOnPage = computed(() => items.value.length > 0 && items.value.every((i) => i.isSelected))
const resultsLabel = computed(() => {
  const n = items.value.length
  return isSearching.value
    ? `${n} ${n === 1 ? 'result' : 'results'} for "${searchQuery.value}"`
    : `${n} ${n === 1 ? 'item' : 'items'}`
})

function setViewMode(mode) {
  viewMode.value = mode
  if (import.meta.client) localStorage.setItem('media-tool-view-mode', mode)
}

function setViewFilter(filter) {
  viewFilterOpen.value = false
  if (viewFilter.value === filter) return
  viewFilter.value = filter
  fetchItems()
}

let searchTimer = null
function onSearchInput() {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    searchQuery.value = searchDraft.value
    fetchItems()
  }, 300)
}
function clearSearch() {
  searchDraft.value = ''
  searchQuery.value = ''
  fetchItems()
}

async function fetchItems({ append = false } = {}) {
  loading.value = true
  appending.value = append
  loadError.value = ''
  try {
    const res = await listItems({
      prefix: prefix.value,
      search: searchQuery.value,
      continuationToken: append ? nextContinuationToken.value : undefined,
      recursive: showFilesOnly.value
    })
    folders.value = res.folders
    files.value = append ? [...files.value, ...res.files] : res.files
    nextContinuationToken.value = res.nextContinuationToken
    if (!append) {
      focusedId.value = items.value[0]?.id ?? null
    }
  } catch (err) {
    loadError.value = err?.data?.statusMessage || 'Failed to load files'
  } finally {
    loading.value = false
    appending.value = false
  }
}
function loadMore() {
  fetchItems({ append: true })
}

function goToPrefix(newPrefix) {
  if (navLoading.value) return
  prefix.value = newPrefix
  searchDraft.value = ''
  searchQuery.value = ''
  selectedKeys.value = []
  openMenuId.value = null
  fetchItems()
}

function toggleSelect(id) {
  selectedKeys.value = selectedKeys.value.includes(id)
    ? selectedKeys.value.filter((x) => x !== id)
    : [...selectedKeys.value, id]
}
function selectAll() {
  selectedKeys.value = items.value.map((i) => i.id)
}
function toggleSelectAll() {
  selectedKeys.value = allSelectedOnPage.value ? [] : items.value.map((i) => i.id)
}

function toggleMenu(id, event) {
  menuAnchor.value = event.currentTarget.getBoundingClientRect()
  openMenuId.value = openMenuId.value === id ? null : id
}
const menuStyle = computed(() => {
  const rect = menuAnchor.value
  if (!rect) return ''
  const width = 190
  const vw = window.innerWidth, vh = window.innerHeight
  let left = rect.right - width
  if (left < 8) left = 8
  if (left + width > vw - 8) left = vw - width - 8
  const estH = 130
  let top = rect.bottom + 6
  if (top + estH > vh - 8) top = Math.max(8, rect.top - estH - 6)
  return `position:fixed;top:${Math.round(top)}px;left:${Math.round(left)}px;z-index:1000;`
})

function openItem(item) {
  if (item.isFolder) goToPrefix(item.key)
  else openFile(item)
}
async function openFile(item) {
  try {
    const { url } = await getLink(item.key)
    window.open(url, '_blank', 'noopener')
  } catch {
    showToast('Failed to open file')
  }
}

async function downloadItems(targetItems) {
  for (const item of targetItems) {
    let url = null
    try {
      ;({ url } = await getLink(item.key))
      const res = await fetch(url)
      const blob = await res.blob()
      const objectUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = objectUrl
      a.download = item.name
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(objectUrl)
    } catch {
      // Cross-origin fetch likely blocked by the bucket's CORS policy — fall
      // back to opening the file directly instead of failing silently.
      if (url) window.open(url, '_blank', 'noopener')
    }
  }
  showToast(targetItems.length > 1 ? `Downloading ${targetItems.length} files…` : 'Downloading file…')
}
function bulkDownload() {
  const targets = items.value.filter((i) => selectedKeys.value.includes(i.id) && i.isFile)
  downloadItems(targets)
}

async function copyLinks(keys) {
  try {
    const urls = await Promise.all(keys.map((k) => getLink(k).then((r) => r.url)))
    await navigator.clipboard.writeText(urls.join('\n'))
    showToast(keys.length > 1 ? `Copied ${keys.length} links` : 'Link copied to clipboard')
  } catch {
    showToast('Failed to copy link')
  }
}
function bulkCopyLink() {
  const keys = selectedKeys.value.filter((id) => files.value.some((f) => f.key === id))
  copyLinks(keys)
}

function openRename(item) {
  openMenuId.value = null
  renameTarget.value = item
}
async function confirmRename(newName) {
  renaming.value = true
  try {
    await renameItem({ key: renameTarget.value.key, newName, isFolder: renameTarget.value.isFolder })
    showToast(`Renamed to "${newName}"`)
    renameTarget.value = null
    fetchItems()
  } catch (err) {
    showToast(err?.data?.statusMessage || 'Failed to rename')
  } finally {
    renaming.value = false
  }
}

function openDeleteSingle(item) {
  openMenuId.value = null
  deleteTarget.value = { items: [item], names: [item.name] }
}
function openBulkDelete() {
  const targets = items.value.filter((i) => selectedKeys.value.includes(i.id))
  deleteTarget.value = { items: targets, names: targets.map((i) => i.name) }
}
async function confirmDelete() {
  deleting.value = true
  try {
    const targets = deleteTarget.value.items
    const fileKeys = targets.filter((i) => i.isFile).map((i) => i.key)
    const folderKeys = targets.filter((i) => i.isFolder)
    const nestedKeys = (await Promise.all(folderKeys.map((f) => listAllKeysUnderPrefix(f.key)))).flat()
    const allKeys = [...fileKeys, ...nestedKeys]
    if (allKeys.length) await deleteKeys(allKeys)
    selectedKeys.value = selectedKeys.value.filter((id) => !targets.some((t) => t.id === id))
    showToast(targets.length > 1 ? `${targets.length} items deleted` : 'Item deleted')
    deleteTarget.value = null
    fetchItems()
  } catch (err) {
    showToast(err?.data?.statusMessage || 'Failed to delete')
  } finally {
    deleting.value = false
  }
}

function onUploaded() {
  fetchItems()
}

async function switchProfile(id) {
  profileMenuOpen.value = false
  if (id === props.activeProfileId) return
  try {
    await activateProfile(id)
    showToast('Switched active connection')
    emit('profile-switched')
  } catch {
    showToast('Failed to switch connection')
  }
}

watch(() => props.activeProfileId, () => {
  prefix.value = ''
  searchDraft.value = ''
  searchQuery.value = ''
  selectedKeys.value = []
  fetchItems()
})

function handleDocClick(e) {
  if (openMenuId.value && !e.target.closest('.card__menu-pop') && !e.target.closest('.s3-row-menu-pop')) {
    openMenuId.value = null
  }
  if (profileMenuOpen.value && !e.target.closest('.s3-profile-switch')) profileMenuOpen.value = false
  if (viewFilterOpen.value && !e.target.closest('.s3-view-filter')) viewFilterOpen.value = false
}

function handleKeyDown(e) {
  const tag = (e.target?.tagName || '').toLowerCase()
  const typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable
  if (typing) return
  if (renameTarget.value || deleteTarget.value || showUpload.value) {
    if (e.key === 'Escape') { renameTarget.value = null; deleteTarget.value = null; showUpload.value = false }
    return
  }
  if (e.key === '?') { e.preventDefault(); showShortcuts.value = true; return }
  if (showShortcuts.value) { if (e.key === 'Escape') showShortcuts.value = false; return }
  if (e.key === 'Escape') {
    if (openMenuId.value) openMenuId.value = null
    else if (profileMenuOpen.value) profileMenuOpen.value = false
    else if (viewFilterOpen.value) viewFilterOpen.value = false
    else if (selectedKeys.value.length) selectedKeys.value = []
    return
  }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'a') { e.preventDefault(); selectAll(); return }
  const list = items.value
  if (!list.length) return
  const idx = list.findIndex((i) => i.id === focusedId.value)
  if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(e.key)) {
    e.preventDefault()
    const dir = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : -1
    const next = idx === -1 ? 0 : (idx + dir + list.length) % list.length
    focusedId.value = list[next].id
    return
  }
  if (e.key === 'Enter') {
    const target = idx !== -1 ? list[idx] : list[0]
    if (target) openItem(target)
    return
  }
  if (e.key === ' ') {
    e.preventDefault()
    const target = idx !== -1 ? list[idx] : list[0]
    if (target) toggleSelect(target.id)
    return
  }
  if (e.key === 'Delete' || e.key === 'Backspace') {
    if (selectedKeys.value.length) openBulkDelete()
    else if (focusedId.value) {
      const target = list.find((i) => i.id === focusedId.value)
      if (target) openDeleteSingle(target)
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocClick)
  document.addEventListener('keydown', handleKeyDown)
  fetchItems()
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocClick)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>
