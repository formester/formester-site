<template>
  <div>
    <BlackFridayBanner />
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar.vue'
import Footer from '../components/Footer.vue'
import BlackFridayBanner from '../components/BlackFridayBanner.vue'

export default {
  components: { Footer, Navbar, BlackFridayBanner },
}
</script>

<style>
</style>