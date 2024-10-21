<template>
  <div class="feature__hero">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
        >
          <h1 class="section__heading">{{title}}</h1>
          <p class="hero__subheading mt-3">
            {{description}}
          </p>
          <a
            v-if="button"
            :href="button.link"
            class="hero__invert__button mt-4"
            >{{button.text}}</a
          >
          <div class="mt-3" v-if="clickTriggers" >
            <div class="click-triggers" v-for="item in clickTriggers" :key="item.id">
                ✓ &nbsp; {{item.text}}
            </div>
          </div>
        </div>
        <div
          class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
        >
          <nuxt-img
            v-if="heroImage"
            :src="heroImage.image?.url || heroImage.imageUrl"
            :alt="heroImage.imageAlt"
            class="img-fluid hero__image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      default: () => (null)
    },
    heroImage: {
      type: Object,
      default: () => (null)
    },
    clickTriggers: {
      type: Array,
      default: () => (null)
    }
  }
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
}

.hero__image {
  height: 100%;
}

.click-triggers {
  font-size: 18px;
  margin-top: 8px;
  color: white !important;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
