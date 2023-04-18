<template>
  <div class="container py-5">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">Customer Testimonials</h2>
        <p class="hero__subheading">Discover what our customers have to say about their experience with us</p>
      </div>
      <div class="d-flex flex-column flex-lg-row px-3 px-md-0 justify-content-center align-items-center mt-5">
        <div class="card mt-5 mt-lg-1 p-3 me-lg-3" style="max-width: 512px;">
          <img class="quotes__logo" src="@/assets/images/quotes.svg" alt="">
          <div class="d-flex flex-column align-items-center text-center px-2 ">
            <span class="quote mt-5 mb-4">{{ testimonials[0].content }}</span>
            <div class="my-3 d-flex flex-column align-items-center">
              <span class="person">{{ testimonials[0].user }}</span>
              <span class="designation">{{ testimonials[0].designation }}</span>
              <img class="brand mt-4 mb-3" :src="require(`~/assets/images/testimonials/${testimonials[0].logo}`)" alt="">
            </div>
          </div>
        </div>
        <div class="card mt-5 mt-lg-1 p-3 ms-lg-3" style="max-width: 512px;">
          <div class="d-flex flex-column align-items-center text-center px-2 ">
            <span class="quote mt-5 mb-4">{{ testimonials[1].content }}</span>
            <div class="my-3 d-flex flex-column align-items-center">
              <span class="person">{{ testimonials[1].user }}</span>
              <span class="designation">{{ testimonials[1].designation }}</span>
              <img class="brand mt-4 mb-3" :src="require(`~/assets/images/testimonials/${testimonials[1].logo}`)" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: Array
  },
}
</script>

<style scoped>
.quotes__logo {
  width: 81px;
  position: absolute;
  top: -45px;
  left: -42px;
}
.quote {
  font-size: 19px;
  font-weight: 500;
}
.card{
  background: linear-gradient(180deg, rgba(166,170,254,0.5047268907563025) 13%, rgba(221,200,255,0.499124649859944) 68%, rgba(255,255,255,0.510329131652661) 100%);
  border-radius: 12px;
  border: 1px solid #E5E5E5;
}
.person {
  font-size: 16px;
  font-weight: 500;
}
.designation{
  font-size: 15px;
  color: #737373;
}
@media (max-width: 576px) {
  .quotes__logo {
    left: -20px;
  }
}
</style>