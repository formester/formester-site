<template>
  <div class="container position-relative">
    <article class="container mw-840 mt-8rem">
      <NuxtLink :to="`/blog`" class="blog__back">
        <span>← Back</span>
      </NuxtLink>
      <h1 class="mb-1 article__heading">{{ article.title }}</h1>
      <div class="d-flex sm-text my-2 datentimeToRead">
        <span>{{ formatDate(article.createdAt) }}</span>
        <span>|</span>
        <div class="d-flex align-items-center justify-content-center timeToRead">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 1.83337C11.6799 1.83337 14.6666 4.82004 14.6666 8.50004C14.6666 12.18 11.6799 15.1667 7.99992 15.1667C4.31992 15.1667 1.33325 12.18 1.33325 8.50004C1.33325 4.82004 4.31992 1.83337 7.99992 1.83337ZM7.99992 13.8334C10.9466 13.8334 13.3333 11.4467 13.3333 8.50004C13.3333 5.55337 10.9466 3.16671 7.99992 3.16671C5.05325 3.16671 2.66659 5.55337 2.66659 8.50004C2.66659 11.4467 5.05325 13.8334 7.99992 13.8334ZM10.3573 5.20004L11.2999 6.14271L7.99992 9.44271L7.05725 8.50004L10.3573 5.20004Z"
              fill="#4F4F4F"
            />
          </svg>
          <span>{{ article.timeToRead }} min read</span>
        </div>
      </div>
      <div class="sm-text mt-1">
        by
        <span class="article__author">{{ article.author }}</span>
      </div>
      <p class="article__desc mt-4">{{ article.description }}</p>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  content: {
    liveEdit: false
  },
  async asyncData({ $content, params }) {
    const article = await $content('blogs', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    to() {
      this.$router.back()
      console.log("to is working")
    },
  },
}
</script>

<style>
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h1 {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 40px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h2 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content p,
.article__desc {
  font-size: 1rem;
  line-height: 24px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content img {
  height: auto;
  width: 100%;
}

.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author {
  font-weight: 600;
}

.mw-840 {
  max-width: 840px;
}

.mt-8rem {
  margin-block: 8rem;
}

.datentimeToRead {
  gap: 0.75rem;
}

.timeToRead {
  gap: 0.5rem;
}

.blog__back {
  margin-top: -4rem;
  position: absolute;
  color: #777;
}
</style>