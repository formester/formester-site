<template>
  <nuxt-link
    to="/pricing/"
    class="d-flex align-items-center justify-content-center banner p-3"
  >
    <nuxt-img src="/blackfriday.svg" class="blackFriday" />
    <div class="d-flex align-items-center justify-content-center">
      <p class="banner__text ms-2 mb-0">Don’t miss out <b>40% </b>off</p>
      <nuxt-img src="/confetti.svg" class="mx-2" />
      <nuxt-img src="/chevron-right.svg" />
    </div>
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

.blackFriday-mobile {
  display: none;
}

.banner:hover .banner__text {
  text-decoration: underline;
}

@media screen and (max-width: 700px) {
  .banner {
    flex-direction: column;
  }

  .blackFriday {
    height: 26px;
  }

  .banner__text {
    font-size: 18px;
  }
}
</style>
