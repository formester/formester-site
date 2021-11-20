<template>
  <div>
    <Navbar2 />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar.vue'
import Navbar2 from '../components/nav/Navbar2.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Footer, Navbar, Navbar2 },
}
</script>

<style>
</style>