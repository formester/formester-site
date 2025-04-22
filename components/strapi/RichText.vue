<template>
  <section class="container">
    <div>
      <MarkdownContent
        v-if="code"
        :content="code"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: () => '',
    },
  },
}
</script>
<style scoped>
.container {
  margin-top: 24px;
  margin-bottom: 64px;
}
</style>


