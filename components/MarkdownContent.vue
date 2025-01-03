<template>
  <div class="markdown-content" v-html="processedContent"/>
</template>

<script>
import { marked } from 'marked'

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    processedContent() {
      return marked(this.content)
    },
  },
}
</script>

<style>
.markdown-content a {
    color: #0d6efd;
    text-decoration: underline;
}
</style>
