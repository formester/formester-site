<template>
  <div
    class="circular"
    v-bind:style="{
      backgroundImage: 'url(' + '../assets/images/auth-bg.png' + ')',
    }"
  >
    <h1>some text here</h1>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style>
.circle {
  height: 100vh;
  width: 100vw;
}
</style>
