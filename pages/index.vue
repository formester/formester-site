<template>
  <div>
    <Nav />
    <Hero />
    <Features />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/home/Hero.vue'
import Features from '@/components/home/Features.vue'

export default {
  components: {
    Nav,
    Hero,
    Footer,
    Features,
  },
}
</script>
