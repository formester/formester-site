<template>
  <div class="layout-wrapper opacity-100">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <V2Footer />
    <CookieConsent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '../components/v2/nav/Navbar.vue'
import CookieConsent from '../components/CookieConsent.vue'
import { recordEntry } from '../utils/signup-attribution.js'
onMounted(() => recordEntry(window, document))
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
