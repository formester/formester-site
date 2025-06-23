<template>
  <section class="container">
    <div class="upper-margin">
      <MarkdownContent v-if="code" :content="code" />
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
.upper-margin {
  margin-top: 8rem;
}

@media (max-width: 992px) {
  .upper-margin {
    margin-top: 6rem;
  }
}
.container {
  margin-top: 64px;
  margin-bottom: 64px;
}
</style>
