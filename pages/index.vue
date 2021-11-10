<template>
  <div>
    <Hero />
    <HowItWorks />
    <Features />
    <Testimonials />
    <OtherSection />
    <CallToActionSection />
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import Features from '../components/home/Features.vue'
import Testimonials from '../components/home/Testimonials.vue'
import HowItWorks from '../components/home/HowItWorks.vue'
import OtherSection from '../components/home/OtherSection.vue'

export default {
  components: {
    Hero,
    Features,
    Testimonials,
    HowItWorks,
    OtherSection,
  },
}
</script>
