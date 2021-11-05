<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/nav/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Nav, Footer },
}
</script>

<style>
</style>