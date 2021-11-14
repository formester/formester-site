<template>
  <div>
    <Hero />
    <FeatureList />
    <Testimonials />
    <HowItWorks />
    <OtherSection />
    <CallToActionSection />
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import FeatureList from '../components/home/FeatureList.vue'
import Testimonials from '../components/home/Testimonials.vue'
import HowItWorks from '../components/home/HowItWorks.vue'
import OtherSection from '../components/home/OtherSection.vue'

export default {
  components: {
    Hero,
    FeatureList,
    Testimonials,
    HowItWorks,
    OtherSection,
  },
}
</script>
