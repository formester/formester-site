<template>
  <div class="code__container">
    <div class="container">
      <div
        class="row d-flex flex-column justify-content-center align-items-center"
      >
        <div class="col-lg-9 code-block">
          <SectionTitle :heading="title" />
          <p class="hero__subheading" v-if="description">
            {{ description }}
          </p>
          <div v-if="header">
            <div class="card mt-5">
              <div class="card-header">
                <h3>{{ header.title }}</h3>
              </div>
              <div class="card-body" v-html="header.code" />
            </div>
            <p class="hero__subheading mt-3">
              {{ header.description }}
            </p>
          </div>
          <div v-for="step in steps" :key="step.id">
            <h3 class="section__heading backend-steps">{{ step.title }}</h3>
            <p class="hero__subheading mt-1">
              {{ step.description }}
            </p>
            <div class="card-body card" v-if="step.code" v-html="step.code" />
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
      default: '',
    },
    header: {
      type: Object,
      default: null,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}
.code-block {
  margin-top: 70px;
}
.card {
  font-size: 12px;
  padding: 0;
  font-weight: 700;
  width: -webkit-fill-available;
  margin: 20px 0;
  background: var(--bs-dark);
  color: var(--bs-white);
}
.card-body {
  padding: 12px 35px;
}
.backend-steps {
  font-size: 25px;
  margin-top: 35px;
}
</style>
