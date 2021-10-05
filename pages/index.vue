<template>
  <div>
    <Nav />
    <Hero />
    <Section :heading="heading" :content="content" :imageName="image" />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/home/Hero.vue'
import Section from '@/components/Section.vue'

export default {
  components: {
    Nav,
    Hero,
    Footer,
    Section,
  },
  data: function () {
    return {
      heading: 'Easy Web forms',
      content:
        'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
<<<<<<< HEAD
      // image: 'integration.png',
=======
      image: 'integration.png',
>>>>>>> a0efaa25e66ebeff56389521506a6b2abe438801
    }
  },
}
</script>
