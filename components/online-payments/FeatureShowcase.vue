<template>
    <div class="container py-5">
      <div class="d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">
          {{ heading }}
        </h2>
      </div>
      <div class="row">
        <div
          class="col-md-12"
          v-for="(feature, index) in features"
          :key="feature.heading"
        >
          <div class="card" :class="{ 'reverse-order': isOdd(index) }">
            <div class="card-content col-12 col-lg-5">
              <h3 class="card-title">{{ feature.heading }}</h3>
              <p class="card-description">{{ feature.description }}</p>
            </div>
            <div
              class="card-image col-12 col-lg-7 d-lg-flex"
              :class="{ 'justify-content-lg-end  pe-xxl-4': !isOdd(index) }"
            >
              <nuxt-img :src="feature.imgUrl" class="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      heading: {
        type: String,
        required: true,
      },
      features: {
        type: Array,
        required: true,
      },
    },
    methods: {
      isOdd(index) {
        return index % 2 !== 0
      },
    },
  }
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 3.5rem;
  }
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 80px;
    border: none;
  }
  
  .card.reverse-order {
    flex-direction: row-reverse;
  }
  .card-title {
    color: var(--neutral-900, #171717);
    font-size: 28px;
    font-weight: 600;
    line-height: 39px;
  }
  
  .card-description {
    color: var(--neutral-700, #404040);
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    height: min-content;
    margin: auto;
  }
  .card-image {
    border-radius: 8px;
    flex-shrink: 0;
  }
  .img-fluid {
    width: 70%;
    border-radius: 2%;
  }
  @media (max-width: 992px) {
    .card {
      flex-direction: column;
    }
    .card.reverse-order {
      flex-direction: column;
    }
    .img-fluid {
      width: 100%;
      border-radius: 2%;
    }
    .card-description {
      font-size: 14px;
      line-height: 22px;
    }
  }
  </style>
  