<template>
  <section class="container py-2 py-lg-5">
    <h2 class="section__heading text-center">Looking for more templates?</h2>
    <p class="text-center">
      Simplify your form creation process with our range of professionally
      designed form templates. Choose from a variety of styles and designs,
      including contact forms, surveys, job applications, and more - all
      available now for free!
    </p>

    <div class="categories">
      <div class="tab-container">
        <div class="icon pointer">
          <nuxt-img
            src="/arrow-icon.svg"
            id="left"
            @click="scrollTabs('left')"
          />
        </div>
        <ul class="tabs-box" ref="tabsBox">
          <li
            class="tab"
            id="recommend"
            :class="{ active: activeTab === null }"
            @click="setActiveTab()"
          >
            Recommended
          </li>
          <!-- Flatten categories in single Array so we can loop on it  -->
          <li
            class="tab"
            v-for="category in Object.values(categories).flat()"
            :key="category.id"
            :id="category.slug"
            :class="{ active: activeTab === category.id }"
            @click="setActiveTab(category)"
          >
            {{ category.name }}
          </li>
        </ul>

        <div class="icon pointer">
          <nuxt-img
            src="/arrow-icon.svg"
            id="right"
            @click="scrollTabs('right')"
          />
        </div>
      </div>
    </div>

    <div class="mb-5">
      <div v-if="templates && templates.length" class="templates">
        <div v-for="(template, idx) in templates" :key="idx" class="template">
          <NuxtLink
            :to="`/templates/${template.slug}/`"
          >
            <img
              v-if="template.previewImageUrl"
              class="img-fluid pointer template_img"
              :src="template.previewImageUrl"
              :alt="template.name"
            />
            <nuxt-img
              v-else
              class="img-fluid"
              src="/templates/create_form.png"
              alt="Template placeholder image"
            />
            <h2 class="template-name pointer">
              {{ template.name }}
            </h2>
          </NuxtLink>
        </div>
      </div>
      <div
        v-if="templates && templates.length"
        class="d-flex align-items-center justify-content-center mt-4"
      >
        <NuxtLink :to="`/templates/`">
          <button class="btn-all-templates">View All Templates</button>
        </NuxtLink>
      </div>
      <div
        v-if="!loading && templates.length == 0"
        class="d-flex align-items-center justify-content-center mt-5 p-5"
      >
        No Templates
      </div>

      <!-- Loader -->
      <Loader :loading="loading" class="mt-5 p-5" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Loader from '../Loader.vue'
export default {
  components: {
    Loader,
  },
  props: {
    categories: {
      type: Object,
      default: {},
    },
    templateSlug: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isDragging: false,
      activeTab: null,
      templates: [],
      loading: false,
    }
  },
  mounted() {
    this.getTemplates()
    this.handleIcons()
  },
  methods: {
    handleIcons() {
      const tabsBox = this.$refs.tabsBox
      const leftArrow = document.querySelector('#left')
      const rightArrow = document.querySelector('#right')
      const scrollLeft = Math.ceil(tabsBox.scrollLeft)
      const scrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth

      leftArrow.parentElement.style.display = scrollLeft > 0 ? 'flex' : 'none'
      rightArrow.parentElement.style.display =
        scrollableWidth > scrollLeft ? 'flex' : 'none'
    },
    scrollTabs(direction) {
      const tabsBox = this.$refs.tabsBox
      const scrollAmount = 180

      if (direction === 'left') {
        if (tabsBox.scrollLeft <= 100) {
          tabsBox.scrollLeft = 0
        } else {
          tabsBox.scrollLeft -= scrollAmount
        }
      } else if (direction === 'right') {
        tabsBox.scrollLeft += scrollAmount
      }

      setTimeout(() => {
        this.handleIcons()
      }, 300)
    },
    setActiveTab(tab) {
      const id = tab ? tab.slug : 'recommend'
      this.activeTab = tab?.id || null
      this.getTemplates(tab?.slug || null)
      const element = document.getElementById(id)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
      clearTimeout(timeout)
      const timeout = setTimeout(() => {
        this.handleIcons()
      }, 300)
    },
    async getTemplates(categorySlug) {
      this.loading = true
      try {
        if (!categorySlug) {
          const recSlugs = await this.getRecommendedSlugs()
          if (recSlugs && recSlugs.length) {
            const params = {
              slugs: recSlugs.join(','),
              limit: 6,
            }
            const { data: filtered } = await axios(
              'https://app.formester.com/templates.json',
              { params }
            )
            const allowed = new Set(recSlugs)
            let list = filtered.filter((el) => allowed.has(el.slug))
            const order = recSlugs
            list.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
            this.templates = list.filter((el) => el.slug !== this.templateSlug).slice(0, 6)
            this.loading = false
            return
          } else {
            const params = {
              limit: 7,
            }
            const { data } = await axios(
              'https://app.formester.com/templates.json',
              { params }
            )
            this.templates = data
              .filter((el) => el.slug !== this.templateSlug)
              .slice(0, 6)
            this.loading = false
            return
          }
        }

        const params = { limit: 6 }
        if (categorySlug) params.category_slug = categorySlug
        const { data } = await axios(
          'https://app.formester.com/templates.json',
          { params }
        )
        this.templates = data
          .filter((el) => el.slug !== this.templateSlug)
          .slice(0, 6)
        this.loading = false
      } catch (err) {
        console.error(err)
        this.loading = false
      }
    },
    async getRecommendedSlugs() {
      try {
        const { data } = await axios(
          'https://cms.formester.com/api/recommended-templates',
          {
            params: {
              'filters[specificTemplate][$eq]': this.templateSlug,
              'pagination[pageSize]': 1,
              populate: 'deep',
            },
          }
        )
        const items = (data && data.data) || []
        const found = items && items.length ? items[0] : null
        if (!found || !found.recommendedTemplates) return []
        const slugs = found.recommendedTemplates
          .map((rt) => (rt ? rt.text : null))
          .filter(Boolean)
        return [...new Set(slugs)]
      } catch (e) {
        console.error(e)
        return []
      }
    },
  },
}
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
}

.tab-container {
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
}

.icon {
  position: absolute;
  top: 0;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
}

.icon:first-child {
  left: 0;
  display: none;
  background: #fff;
}

.icon:last-child {
  right: 0;
  justify-content: flex-end;
  background: #fff;
}

.icon img {
  width: 20px;
}

.icon:last-child img {
  rotate: 180deg;
}

.tabs-box {
  display: flex;
  gap: 12px;
  list-style: none;
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

.tabs-box .tab {
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  background: #f5f4fd;
  padding: 3px 20px;
  border-radius: 30px;
  border: 1px solid #d8d5f2;
}

.tabs-box .tab:hover {
  background: #efedfb;
}

.tabs-box.dragging .tab {
  user-select: none;
  pointer-events: none;
}

.tabs-box .tab.active {
  color: #fff;
  background: var(--clr-primary);
  border-color: transparent;
}

.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
  place-items: center;
}

.template {
  border-radius: 4px;
  padding: 12px;
  transition: all 500ms ease;
  min-height: 130px;
}

.template_img {
  border-radius: 10px;
}

.template-name {
  font-weight: 500;
  font-size: 16px;
  margin-top: 14px;
  line-height: 24px;
  color: #211447;
  user-select: none;
}

.btn-all-templates {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  transition: all 0.2s ease-out;
  background: var(--clr-primary);
  color: white;
}

.btn-all-templates:hover {
  background: #4f3895eb;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .template-name {
    font-size: 14px;
  }
}

@media only screen and (max-width: 840px) {
  .template_container {
    flex-direction: column;
    gap: 0.5rem;
  }
  .template-name {
    font-size: 12px;
  }
}

@media only screen and (max-width: 800px) {
  .templates {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .template-name {
    font-size: 16px;
  }
}
</style>
