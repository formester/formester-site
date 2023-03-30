<template>
  <div>
    <div class="container position-relative">
      <article
        class="container mw-920 mt-8rem"
        :class="{ 'mb-3rem': !(article.cta && article.cta.hidden) }"
      >
      <div class="blog__header">
        <NuxtLink
          :to="`/blog/`"
          class="blog__back"
          :class="article.toc.length ? 'blog__back__margin' : ''"
        >
          <span>← Back</span>
        </NuxtLink>
        <div class="social__links">
          <a :href="`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${article.title} by @_Formester_ `" @click="googleAnalytics('twitter')" class="social-icons" target="_blank">
            <TwitterIcon />
          </a>
          <a  :href="`https://www.facebook.com/sharer.php?u=${encodedUrl}`" @click="googleAnalytics('facebook')" class="social-icons" target="_blank">
            <FacebookIcon />
          </a>
          <a  :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`" @click="googleAnalytics('linkedin')" class="social-icons" target="_blank">
            <LinkdinIcon />
          </a>
          <span class="social-icons" @click="copyToClipboard">
            <CopyLinkIcon />
          </span>
        </div>
      </div>
        <nav
          v-if="article.toc.length"
          class="navbar navbar-expand bg-white sticky-top py-3"
        >
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  id="tocMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Table of Contents
                </a>
                <ul class="dropdown-menu" aria-labelledby="tocMenuLink">
                  <li v-for="link of article.toc" :key="link.id">
                    <NuxtLink class="dropdown-link" :to="`#${link.id}`">
                      {{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <h1 class="mb-1 article__heading">{{ article.title }}</h1>
        <div class="d-flex sm-text my-2 datentimeToRead">
          <span>{{ formatDate(article.createdAt) }}</span>
          <span>|</span>
          <div
            class="d-flex align-items-center justify-content-center timeToRead"
          >
            <ClockIcon color="#4f4f4f" />
            <span>{{ article.readingStats.text }}</span>
          </div>
        </div>
        <div class="sm-text mt-1 article__author-section">
          by
          <span class="article__author">{{ article.author }}</span>
        </div>
        <div class="blog__content">
          <nuxt-content :document="article" />
            <div class="popup__img">
              <span class="image-preview-close">&times;</span>
              <img
                src=""
                alt=""
              />
            </div>
        </div>
        <notifications position="bottom right" class="my-notification"/>

        <div v-if="relatedArticles" class="mt-5">
          <h2 class="article__sub-heading">Related Blogs</h2>
          <div class="row mt-4">
            <RelatedArticleCard
              v-for="relatedArticle in relatedArticles"
              :key="relatedArticle.slug"
              :article="relatedArticle"
              class="col-lg-6 related-article-card"
            />
          </div>
        </div>
      </article>
    </div>
    <CallToActionSection :content="article.cta" />
  </div>
</template>

<script>
import ClockIcon from '../../components/icons/ClockIcon.vue'
import TwitterIcon from '../../components/icons/twitter.vue'
import FacebookIcon from '../../components/icons/facebook.vue'
import LinkdinIcon from '../../components/icons/linkdin.vue'
import CopyLinkIcon from '../../components/icons/copyLink.vue'
// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    ClockIcon,
    TwitterIcon,
    FacebookIcon,
    LinkdinIcon,
    CopyLinkIcon
  },
  content: {
    liveEdit: false,
  },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    let relatedArticles = await $content('blog').fetch()
    relatedArticles = relatedArticles.filter(relatedArticle => article.slug !== relatedArticle.slug)
    const randIndex = Math.floor(Math.random() * (relatedArticles.length - 2))
    relatedArticles = relatedArticles.slice(randIndex,  randIndex + 2);
    return { article, relatedArticles}
  },
  mounted() {
    document.querySelectorAll('.blog__content img').forEach(image => {
      image.onclick = () => {
        document.querySelector('.popup__img').style.display = 'block';
        document.querySelector('.popup__img img').src = image.getAttribute('src')
        document.querySelector('.popup__img img').alt = image.getAttribute('alt')
      }
    })
    document.querySelector('.popup__img img').onclick = () => {
      document.querySelector('.popup__img ').style.display = 'none'
    }
    document.querySelector('.image-preview-close').onclick = () => {
      document.querySelector('.popup__img ').style.display = 'none'
    }
    document.onkeydown = function(evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.popup__img ').style.display = 'none'
      }
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    to() {
      this.$router.back()
    },
    copyToClipboard(){ 
      if (process.client) {
        navigator.clipboard.writeText(window.location.href).then(()=>{
          this.$notify({ type: 'success', text: 'Link copied to clipboard' })
        });
      }
      this.googleAnalytics('custom_link')
    },
    googleAnalytics(platform){
      gtag && gtag("event", "share", {
        "method": platform,
        "content_type": "blog",
        "item_id": this.article.title
      })
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://formester.com/blog/${this.$route.params.slug}/`,
        title: this.article.metaTitle,
        description: this.article.metaDescription,
        mainImage: this.article.coverImg
          ? `https://formester.com/${this.article.coverImg}`
          : 'https://formester.com/formester-form-builder-background.png',
        mainImageAlt:
          this.article.coverImgAlt ||
          'Form builder showing drag and drop functionality',
      }
      return getSiteMeta(metaData)
    },
    encodedUrl(){
      return encodeURIComponent(process.env.baseUrl + this.$route.fullPath);
    }
  },
  head() {
    return {
      title: this.article.metaTitle,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.article.author },
        // Linkedin
        {
          hid: 'author',
          name: 'author',
          property: 'article:author',
          content: this.article.author,
        },
        {
          hid: 'publisher',
          name: 'publisher',
          property: 'article:publisher',
          content: 'Formester',
        },
        {
          name: 'publish_date',
          property: 'og:publish_date',
          content: this.article.createdAt,
        },
        {
          name: 'keywords',
          content: this.article.keywords,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/blog/${this.$route.params.slug}/`,
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://formester.com/blog/${this.article.slug}/`,
      },
      headline: this.article.title,
      description: this.article.description,
      metaTitle: this.article.metaTitle,
      metaDescription: this.article.metaDescription,
      image: this.article.coverImg
        ? `https://formester.com/${this.article.coverImg}`
        : 'https://formester.com/formester-form-builder-background.png',
      author: {
        '@type': 'Person',
        name: this.article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      },
      datePublished: this.article.createdAt,
    }
  },
}
</script>

<style scoped>
p {
  margin-bottom: 2rem;

}
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.article__sub-heading {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
}

.article__desc {
  font-size: 17px;
  line-height: 31px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content {
  margin-top: 18px;
  font-size: 18px;
  line-height: 31px;
  letter-spacing: 0.4px;
  color: #0d0d0d;
}

.nuxt-content p {
  margin-bottom: 1.4rem;
}

.nuxt-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
  margin-top: 48px;
  margin-bottom: 16px;
}

.nuxt-content h3 {
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
  margin-top: 32px;
  margin-bottom: 16px;
}

.nuxt-content a {
  color: var(--clr-primary);
  text-decoration: underline;
}

.nuxt-content img {
  height: auto;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
}

.nuxt-content ul li,
.nuxt-content ol li {
  margin-top: 0px;
  margin-bottom: 16px;
}

.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author {
  font-weight: 600;
}

.mw-920 {
  max-width: 920px;
}

.mt-8rem {
  margin-block: 8rem;
}

.mb-3rem {
  margin-bottom: 3rem;
}

.article__author-section {
  opacity: 0.75;
}

.datentimeToRead {
  gap: 0.75rem;
  opacity: 0.5;
}

.timeToRead {
  gap: 0.5rem;
}


#tocMenuLink {
  color: #777;
  font-size: 16px;
}

.dropdown-menu {
  border: 0 solid #e4e4e7;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown-link {
  padding: 0.5em;
  min-width: 750px;
  width: 100%;
  display: block;
}

.blog__header{
  margin-top: -4rem;
  justify-content: space-between;
  display: flex;
}
.blog__header span{
  color: #777;
}
.social__links{
  display: flex;
}
.social-icons{
  margin: 0 6px;
  cursor: pointer;
}
.social-icons{
  fill: #000;
}

.blog__content img {
  cursor: zoom-in;
}

.popup__img {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(90, 90, 90, 0.96);
  height: 100%;
  width: 100%;
  z-index: 1022;
  display: none;
}

.popup__img span {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 30px;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
  z-index: 1;
}

.popup__img img {
  cursor: zoom-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  object-fit: cover;
}

@media only screen and (max-width: 992px) {
  .dropdown-link {
    min-width: 680px;
  }
}
@media only screen and (max-width: 768px) {
  .dropdown-link {
    min-width: 480px;
  }

  .nuxt-content h2 {
    margin-top: 16px;
  }

  .nuxt-content h3 {
    margin-top: 16px;
  }

  .nuxt-content img {
    margin-top: 8px;
    margin-bottom: 12px;
  }

  .popup__img img {
    width: 90%;
  }
}

@media only screen and (max-width: 576px) {
  .dropdown-link {
    min-width: 370px;
  }
}
@media only screen and (max-width: 432px) {
  .dropdown-link {
    min-width: 320px;
  }
}
@media only screen and (max-width: 360px) {
  .dropdown-link {
    min-width: 250px;
  }
}
</style>
