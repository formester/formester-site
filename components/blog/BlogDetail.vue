<template>
    <article>
    <!-- <h1>{{ page.title }}</h1> -->
    <nuxt-content :document="page" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
    }
  }
</script>