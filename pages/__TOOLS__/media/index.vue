<template>
  <div class="media-tool">
    <div v-if="!isDev" class="s3-page">
      <div class="empty">
        <div class="empty__title">This tool is only available in local development.</div>
      </div>
    </div>

    <template v-else-if="!loaded">
      <div class="s3-page"><div class="empty"><div class="empty__title">Loading…</div></div></div>
    </template>

    <template v-else-if="screen === 'connections' || !profiles.length">
      <ConnectionsScreen
        :profiles="profiles"
        :active-profile-id="activeProfileId"
        @back="backToGallery"
        @changed="onConnectionsChanged"
      />
    </template>

    <template v-else>
      <MediaGallery
        :profiles="profiles"
        :active-profile-id="activeProfileId"
        @open-connections="screen = 'connections'"
        @profile-switched="loadProfiles"
      />
    </template>

    <ToastHost :toasts="toasts" />
  </div>
</template>

<script setup>
import { activateProfile, fetchProfiles } from './useMediaApi'
import { useToast } from './useToast'
import ConnectionsScreen from './components/ConnectionsScreen.vue'
import MediaGallery from './components/MediaGallery.vue'
import ToastHost from './components/ToastHost.vue'

definePageMeta({ layout: 'tools' })

const isDev = import.meta.dev
const loaded = ref(false)
const screen = ref('gallery')
const profiles = ref([])
const activeProfileId = ref(null)
const { toasts } = useToast()

async function loadProfiles() {
  const res = await fetchProfiles()
  profiles.value = res.profiles
  activeProfileId.value = res.activeProfileId
}

function backToGallery() {
  if (profiles.value.length) screen.value = 'gallery'
}

async function onConnectionsChanged(payload) {
  if (payload?.activate) {
    await activateProfile(payload.activate)
  }
  await loadProfiles()
}

onMounted(async () => {
  if (!isDev) return
  await loadProfiles()
  loaded.value = true
})
</script>

<style src="./media-tool.css"></style>
