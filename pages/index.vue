<template>
  <div>
    <!-- <Nav />
    <Hero />
    <Features />
    <Testimonials />
    <HowItWorks />
    <OtherSection />
    <Footer /> -->
    <AuthContainer />
  </div>
</template>

<script>
import Nav from '../components/nav/Nav.vue'
import Footer from '../components/Footer.vue'
import Hero from '../components/home/Hero.vue'
import Features from '../components/home/Features.vue'
import Testimonials from '../components/home/Testimonials.vue'
import HowItWorks from '../components/home/HowItWorks.vue'
import OtherSection from '../components/home/OtherSection.vue'
import AuthContainer from '../components/auth/AuthContainer.vue'

export default {
  components: {
    Nav,
    Hero,
    Footer,
    Features,
    Testimonials,
    HowItWorks,
    OtherSection,
    AuthContainer,
  },
}
</script>
