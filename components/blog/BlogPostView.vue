<template>
  <div>
    <nav
      v-if="tableOfContents.length"
      class="navbar navbar-expand bg-white py-3"
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
              <li v-for="link of tableOfContents" :key="link.id">
                <NuxtLink class="dropdown-link" :to="`#${link.id}`">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <h1 class="article__heading">{{ blogData.title }}</h1>

    <div v-if="blogData.author" class="sm-text mt-1 article__author-section">
      by
      <a
        v-if="blogData.authorProfile"
        :href="blogData.authorProfile"
        target="_blank"
        rel="noopener"
      >
        <span class="article__author">{{ blogData.author }}</span>
      </a>
      <span v-else class="article__author">{{ blogData.author }}</span>
    </div>

    <div class="blog__content" ref="blogContent">
      <div class="nuxt-content" v-html="processedBody" />

      <div class="popup__img" :style="{ display: showPopup ? 'block' : 'none' }">
        <span class="image-preview-close" @click="closePopup">&times;</span>
        <img :src="popupImageSrc" :alt="popupImageAlt" @click="closePopup" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked'

const props = defineProps({
  blogData: {
    type: Object,
    required: true,
  },
})

const showPopup = ref(false)
const popupImageSrc = ref('')
const popupImageAlt = ref('')
const blogContent = ref(null)

const slugifyHeading = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')

const processedBody = computed(() => {
  const renderer = new marked.Renderer()

  renderer.heading = function (text, level) {
    if (level >= 2 && level <= 3) {
      return `<h${level} id="${slugifyHeading(text)}">${text}</h${level}>`
    }
    return `<h${level}>${text}</h${level}>`
  }

  renderer.link = function (href, title, text) {
    let processedHref = href
    const isInternal = href.startsWith('/') || href.includes('formester.com')
    if (isInternal && href) {
      const hasTrailingSlash = href.endsWith('/')
      const hasFileExtension = /\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0])
      const hasHashOrQuery = href.includes('#') || href.includes('?')
      if (!hasTrailingSlash && !hasFileExtension && !hasHashOrQuery) {
        processedHref = href + '/'
      }
    }
    const titleAttr = title ? ` title="${title}"` : ''
    return `<a href="${processedHref}"${titleAttr}>${text}</a>`
  }

  return marked(props.blogData?.body || '', { renderer })
})

const tableOfContents = computed(() => {
  const toc = []
  const content = props.blogData?.body || ''
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    toc.push({ id: slugifyHeading(text), text, level })
  }
  return toc
})

const openPopup = (src, alt) => {
  popupImageSrc.value = src
  popupImageAlt.value = alt
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
  popupImageSrc.value = ''
  popupImageAlt.value = ''
}

const setupImageClickHandlers = () => {
  nextTick(() => {
    if (blogContent.value) {
      blogContent.value.querySelectorAll('.nuxt-content img').forEach((img) => {
        img.addEventListener('click', () => openPopup(img.src, img.alt))
      })
    }
  })
}

const keyHandler = (evt) => {
  if (evt.key === 'Escape') closePopup()
}

onMounted(() => {
  setupImageClickHandlers()
  document.addEventListener('keydown', keyHandler)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', keyHandler)
})

watch(() => props.blogData?.body, setupImageClickHandlers)
</script>

<style scoped>
nav {
  position: sticky;
  top: 72px;
  z-index: 100;
}

.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: var(--clr-text-primary);
  margin-bottom: 0.25rem;
}

.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author-section {
  opacity: 0.75;
}

.article__author {
  font-weight: 600;
}

.blog__content img {
  cursor: zoom-in;
}

#tocMenuLink {
  color: #777;
  font-size: 16px;
}

.dropdown-menu {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.95);
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;
  margin-top: 8px;
}

.dropdown-link {
  padding: 12px 16px;
  min-width: 750px;
  width: 100%;
  display: block;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.dropdown-link:hover {
  background-color: #f3f4f6;
  color: var(--clr-primary);
  border-left-color: var(--clr-primary);
  text-decoration: none;
}

.popup__img {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(90, 90, 90, 0.96);
  height: 100%;
  width: 100%;
  z-index: 99999;
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
  nav {
    top: 60px;
  }
  .dropdown-link {
    min-width: 680px;
  }
}

@media only screen and (max-width: 768px) {
  .dropdown-link {
    min-width: 480px;
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

<style>
.nuxt-content {
  margin-top: 18px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: var(--clr-text-primary);
}

.nuxt-content p {
  margin-bottom: 1.4rem;
}

.nuxt-content h2 {
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  color: var(--clr-text-primary);
  margin-top: 64px;
  margin-bottom: 24px;
}

.nuxt-content h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: var(--clr-text-primary);
  margin-top: 48px;
  margin-bottom: 24px;
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

@media only screen and (max-width: 768px) {
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
}
</style>
