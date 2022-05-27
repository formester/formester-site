<template>
  <NuxtLink :to="{ name: 'blogs-slug', params: { slug: article.slug } }">
    <img
      :src="require(`@/assets/images/blogs/${article.coverImg}`)"
      class="rounded img-fluid"
      alt="NA"
    />
    <div class="d-flex flex-column align-items-start">
      <span class="blog__date mt-3">{{ formatDate(article.createdAt) }}</span>
      <div class="mt-2">
        <h3 class="blog__title">{{ article.title }}</h3>
        <p class="mt-1 blog__desc">{{ article.description }}</p>
      </div>
      <span class="mt-2 blog__timetoRead">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00016 2.02344C11.6802 2.02344 14.6668 5.0101 14.6668 8.6901C14.6668 12.3701 11.6802 15.3568 8.00016 15.3568C4.32016 15.3568 1.3335 12.3701 1.3335 8.6901C1.3335 5.0101 4.32016 2.02344 8.00016 2.02344ZM8.00016 14.0234C10.9468 14.0234 13.3335 11.6368 13.3335 8.6901C13.3335 5.74344 10.9468 3.35677 8.00016 3.35677C5.0535 3.35677 2.66683 5.74344 2.66683 8.6901C2.66683 11.6368 5.0535 14.0234 8.00016 14.0234ZM10.3575 5.3901L11.3002 6.33277L8.00016 9.63277L7.0575 8.6901L10.3575 5.3901V5.3901Z"
            fill="#828282"
          />
        </svg>
        {{ article.timeToRead }} min read
      </span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'BlogCard',
  props: ['article'],
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.blog__date {
  background: hsla(0, 0%, 96%, 1);
  color: hsla(0, 0%, 31%, 1);
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 14px;
  border-radius: 0.25rem;
}
.blog__title {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 32px;
  color: hsla(0, 0%, 20%, 1);
}

.blog__desc {
  font-size: 1rem;
  line-height: 24px;
  color: hsla(0, 0%, 31%, 1);
  margin: 0;
}

.blog__timetoRead {
  font-size: 0.875rem;
  line-height: 21px;
  color: hsla(0, 0%, 51%, 1);
}
</style>
