<template>
  <div class="container py-5">
    <div class="showcase-header">
      <SectionTitle :heading="title" />
      <p class="hero__subheading mt-4" v-if="description">
        {{ description }}
      </p>
    </div>
    <div class="row">
      <div class="col-md-12" v-for="(item, index) in itemList" :key="item.id">
        <div class="card" :class="{ 'reverse-order': isOdd(index) }">
          <div class="card-content col-12 col-lg-5">
            <p class="card-step-index" v-if="steps">STEP {{ index + 1 }}</p>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>
          </div>
          <div
            class="card-image col-12 col-lg-7 d-lg-flex"
            :class="{ 'justify-content-lg-end  pe-xxl-4': !isOdd(index) }"
            v-if="item.cardImage.image?.url || item.cardImage.imageUrl"
          >
            <nuxt-img
              v-if="
                !isGif(item.cardImage.image?.url || item.cardImage.imageUrl)
              "
              :src="item.cardImage.image?.url || item.cardImage.imageUrl"
              class="img-fluid"
              :alt="item.cardImage.imageAlt"
              :modifiers="{ animated: true }"
            />
            <img
              v-else
              :src="item.cardImage.image?.url || item.cardImage.imageUrl"
              class="img-fluid"
              :alt="item.cardImage.imageAlt"
              :modifiers="{ animated: true }"
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
      default: '',
    },
    itemList: {
      type: Array,
      required: true,
    },
    steps: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isOdd(index) {
      return index % 2 !== 0
    },
    isGif(url) {
      return url?.endsWith('.gif')
    },
  },
}
</script>

<style scoped>
.showcase-header {
  margin-bottom: 3.5rem;
}
.hero__subheading {
  text-align: center;
  max-width: 720px;
  margin: auto;
  color: #475467;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
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
.card-step-index {
  color: var(--clr-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  margin: 0;
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
  gap: 8px;
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
  .img-fluid {
    width: 100%;
    border-radius: 2%;
  }
}
</style>
