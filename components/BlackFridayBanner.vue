<template>
  <nuxt-link
    to="/pricing/"
    class="d-flex align-items-center justify-content-center banner py-3"
  >
    <nuxt-img src="/blackfriday.svg" />
    <p class="banner__text ms-2 mb-0">Don’t miss out <b>40% </b>off</p>
    <nuxt-img src="/confetti.svg" />
    <nuxt-img src="/chevron-right.svg" />
  </nuxt-link>
</template>

<style scoped>
.banner {
  background-color: #15034c;
  color: white;
  gap: 8px;
}

.banner__text {
  font-size: 24px;
}
</style>
