<template>
  <div>
    <!-- <Navbar /> -->
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/nav/Nav.vue'
import Navbar from '../components/nav/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Nav, Footer, Navbar },
}
</script>

<style>
</style>