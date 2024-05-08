<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">{{sectionHeading}}</h2>
      <p v-if="subHeading" class="hero__subheading">{{subHeading}}</p>
    </div>

    <div class="row mt-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-3 col-md-6"
      >
        <div class="p-3 d-flex flex-column align-items-center">
          <nuxt-img
            :src="`/use-case/industry-specific-use-case/${feature.img}.svg`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
          />
          <div class="text-start">
            <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
            <p class="subheading__text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  sectionHeading:{
    type:String,
    required:true
  },
  subHeading:{
    type:String,
    default:""
  },
  features:{
    type:Array,
    required:true
  }
}
}
</script>

<style scoped>
.sub__section-heading {
  font-size: 22px;
  font-weight: 600;
}

.subheading__text {
  font-size: 16px;
  line-height: 24px;
  color: #525252;
}
</style>
