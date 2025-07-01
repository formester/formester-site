<template>
  <div class="testimonial__card">
    <div class="testimonial__content">
      <nuxt-img
        src="/UI Block/quotation.svg"
        class="quotation-marks mb-2"
        alt="Quotation marks"
        loading="lazy"
      />
      <p class="mt-1">{{ testimonial.comment }}</p>
    </div>
    <div class="d-flex">
      <nuxt-img
        :src="getIconSrc(testimonial.profileImage)"
        :alt="testimonial?.profileImage?.imageAlt || 'User profile'"
        class="img-fluid testimonial__user"
        loading="lazy"
      />
      <div class="d-flex flex-column ms-3">
        <span class="testimonial__user-text">{{ testimonial.name }}</span>
        <span class="testimonial__user-degn">
          {{ testimonial.position }} at
          <span class="testimonial__user-company">{{ testimonial.organization }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  },
  methods: {
    getIconSrc(iconObject) {
      if (!iconObject) return '';

      // Handle different Strapi image structures
      if (iconObject.imageUrl) {
        return iconObject.imageUrl;
      }

      if (iconObject.image) {
        if (iconObject.image.url) {
          return iconObject.image.url;
        }

        if (iconObject.image.data) {
          if (iconObject.image.data.attributes && iconObject.image.data.attributes.url) {
            return iconObject.image.data.attributes.url;
          }

          if (Array.isArray(iconObject.image.data) &&
              iconObject.image.data[0] &&
              iconObject.image.data[0].attributes &&
              iconObject.image.data[0].attributes.url) {
            return iconObject.image.data[0].attributes.url;
          }
        }
      }

      return '';
    }
  }
}
</script>

<style scoped>
.testimonial__card {
  padding: 36px;
  flex: 0 0 calc(33.33% - 16px);
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(16, 24, 40, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px;
}
.testimonial__card:hover {
  box-shadow:0 2px 8px 0 rgba(16, 24, 40, 0.12);
  background-color: #FCFCFD;
  transition: all 0.3s ease-in;
}

.testimonial__content {
  margin-bottom: 24px;
}

.testimonial__user {
  width: 48px;
  height: 48px;
}

.testimonial__user-text {
  font-weight: 500;
  line-height: 24px;
}

.testimonial__user-degn {
  font-size: 14px;
  line-height: 20px;
  color: #42526b;
}

.testimonial__user-company {
  color: #7534ff;
  font-weight: 500;
}

.quotation-marks {
  height: 30px;
  width: 30px;
}

@media screen and (max-width: 1200px) {
  .testimonial__card {
    flex: 0 0 calc(50% - 16px);
  }
}

@media screen and (max-width: 768px) {
  .testimonial__card {
    flex: 0 0 100%;
    min-width: calc(100% - 32px);
    margin: 0 auto;
    padding: 24px;
  }
}
</style>
