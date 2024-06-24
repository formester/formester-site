<template>
  <div class="iframe__container mx-auto position-relative" v-if="url">
    <iframe :src="url" height="100%" width="100%"></iframe>
    <nuxt-img
      src="see-for-yourself.svg"
      class="see-for-yourself position-absolute"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    default: ()=>("")
  }
})
</script>

<style scoped>
.iframe__container {
  width: min(90%, 1200px);
  height: 600px;
  border-radius: 8px;
  border: 4px solid #eee8ff;
  margin-top: 148px;
  margin-bottom: 48px;
}

.see-for-yourself {
  top: -14%;
  right: 20%;
  animation: pulse 4s infinite;
}

@media screen and (max-width: 768px) {
  .see-for-yourself {
    top: -14%;
    right: 5%;
    animation: pulse 4s infinite;
  }
}
</style>