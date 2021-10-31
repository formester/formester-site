<template>
  <div>
    <Nav />
    <Hero />
    <HowItWorks />
    <!-- <Features /> -->
    <Testimonials />
    <!-- <OtherSection /> -->
    <CallToActionSection />
    <Footer />
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

export default {
  components: {
    Nav,
    Hero,
    Footer,
    Features,
    Testimonials,
    HowItWorks,
    OtherSection,
  },
}
</script>
