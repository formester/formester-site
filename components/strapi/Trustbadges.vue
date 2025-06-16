<template>
  <div class="container">
    <div class="row justify-content-center align-items-center text-center mt-5">
      <SectionTitle :heading="title" />
      <p>{{ description }}</p>
      <div class="trustbadge-wrapper">
        <div class="rating-wrapper">
          <nuxt-img src="/product-hunt.svg" alt="Product Hunt" class="logo" />
          <div class="rating">
            <span class="rating-number">5/5</span>
            <nuxt-img src="/5-stars.svg" alt="5 stars" class="rating-stars" />
          </div>
        </div>
        <div class="rating-wrapper">
          <nuxt-img src="/trustpilot.svg" alt="Trustpilot" class="logo" />
          <div class="rating">
            <span class="rating-number">4.4/5</span>
            <nuxt-img
              src="/4.5-stars.svg"
              alt="4.5 stars"
              class="rating-stars"
            />
          </div>
        </div>
        <div class="rating-wrapper">
          <nuxt-img src="/capterra.svg" alt="Capterra" class="logo" />
          <div class="rating">
            <span class="rating-number">5/5</span>
            <nuxt-img src="/5-stars.svg" alt="5 stars" class="rating-stars" />
          </div>
        </div>

        <div class="rating-wrapper">
          <nuxt-img src="/g2-crowd.svg" alt="G2 Crowd" class="logo" />
          <div class="rating">
            <span class="rating-number">4.7/5</span>
            <nuxt-img
              src="/4.5-stars.svg"
              alt="4.5 stars"
              class="rating-stars"
            />
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
    description: {
      type: String,
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}

@media screen and (max-width: 768px) {
  .container {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
}
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.rating-number {
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  display: flex;
  align-items: center;
}

.rating-stars {
  height: 24px;
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
  background-color: #fcfcfd;
  border: 1px solid #f2f4f7;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
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

@media screen and (max-width: 768px) {
  .rating-number {
    font-size: 32px;
    line-height: 40px;
  }

  .rating-stars {
    height: 20px;
  }

  .rating-wrapper {
    min-width: 240px;
    padding-inline: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .logo {
    height: 32px;
  }
}
</style>
