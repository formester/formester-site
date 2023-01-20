<template>
  <div>
    <Navbar v-if="!isTemplateDetailPage" />
    <Nuxt />
    <Footer v-if="!isTemplateDetailPage" />
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Footer, Navbar },
  computed: {
    isTemplateDetailPage() {
      return (
        this.$route.path.startsWith('/templates/') && this.$route.params?.id
      )
    },
  },
}
</script>

<style>
</style>