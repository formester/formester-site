<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Footer, Navbar },
}
</script>

<style>
</style>