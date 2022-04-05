<template>
  <div class="container position-relative">
    <NuxtLink :to="`/blog`" class="blog__back">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4401 25.3334C18.2409 25.3341 18.044 25.2901 17.8641 25.2047C17.6841 25.1193 17.5255 24.9947 17.4001 24.84L10.9601 16.84C10.7639 16.6015 10.6567 16.3022 10.6567 15.9934C10.6567 15.6845 10.7639 15.3853 10.9601 15.1467L17.6267 7.14671C17.853 6.87442 18.1783 6.70319 18.5308 6.67068C18.8834 6.63817 19.2344 6.74706 19.5067 6.97338C19.779 7.19969 19.9502 7.52491 19.9827 7.87748C20.0153 8.23005 19.9064 8.58109 19.6801 8.85338L13.7201 16L19.4801 23.1467C19.6431 23.3424 19.7467 23.5807 19.7785 23.8335C19.8103 24.0862 19.7691 24.3428 19.6597 24.5728C19.5503 24.8028 19.3773 24.9967 19.1611 25.1315C18.945 25.2663 18.6948 25.3364 18.4401 25.3334Z"
          fill="black"
        />
      </svg>
      <span class="ml-2">Back</span>
    </NuxtLink>
    <article class="container mw-840 mt-8rem">
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
    const article = await $content('articles', params.slug).fetch()

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

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 40px;
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
  position: absolute;
  top: -15%;
}
</style>