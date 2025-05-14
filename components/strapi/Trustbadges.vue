<template>
    <div class="container py-5">
      <div class="row justify-content-center align-items-center text-center mt-5">
        <SectionTitle :heading="title" />
        <div class="trustbadge-wrapper">
            <div class="rating-wrapper">
                <nuxt-img src="/g2-crowd.svg" alt="G2 Crowd" class="logo" />
                <div class="rating">
                    <span class="rating-number">4.7</span>
                    <nuxt-img src="/4.5-stars.svg" alt="4.5 stars" class="rating-stars" />
                </div>
            </div>
            <div class="rating-wrapper">
                <nuxt-img src="/capterra.svg" alt="Capterra" class="logo" />
                <div class="rating">
                    <span class="rating-number">5.0</span>
                    <nuxt-img src="/5-stars.svg" alt="5 stars" class="rating-stars" />
                </div>
            </div>
            <div class="rating-wrapper">
                <nuxt-img src="/product-hunt.svg" alt="Product Hunt" class="logo" />
                <div class="rating">
                    <span class="rating-number">5.0</span>
                    <nuxt-img src="/5-stars.svg" alt="5 stars" class="rating-stars" />
                </div>
            </div>
            <div class="rating-wrapper">
                <nuxt-img src="/trustpilot.svg" alt="Trustpilot" class="logo" />
                <div class="rating">
                    <span class="rating-number">4.4</span>
                    <nuxt-img src="/4.5-stars.svg" alt="4.5 stars" class="rating-stars" />
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      title: {
        type: Array,
        required: true,
      },
    },
  }
  </script>
  


<style scoped>
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.rating-number {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1;
  display: flex;
  align-items: center;
}

.rating-stars {
  height: 1.25rem;  
  display: block;
}

.rating-wrapper {
  min-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-inline: 48px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 8px;
  background-color: #F9FAFB;
}
.logo {
  height: 40px;
}

.trustbadge-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 24px auto 0 auto;
}

</style>