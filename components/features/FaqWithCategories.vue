<template>
  <section class="container py-2 py-lg-5">
    <SectionTitle :heading="title" />

    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>

    <div class="row">
      <div
        v-for="(category, cIdx) in categories"
        :key="category.id || `cat-${cIdx}`"
        class="my-5"
        :class="cIdx === categories.length - 1 ? 'col' : 'col-md-6'"
      >
        <h3 class="faq__heading">
          {{ Array.isArray(category.title) ? category.title[0]?.text : category.title }}
        </h3>

        <!-- give each category its own accordion id -->
        <div class="accordion accordion-flush" :id="`accordionFaqs-${cIdx}`">
          <div
            v-for="(faq, fIdx) in category.faqList"
            :key="faq.id || `faq-${cIdx}-${fIdx}`"
            class="accordion-item"
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: openByCategory[cIdx] !== fIdx }"
                type="button"
                :aria-expanded="openByCategory[cIdx] === fIdx ? 'true' : 'false'"
                :aria-controls="`collapse-${cIdx}-${fIdx}`"
                @click="toggle(cIdx, fIdx)"
              >
                <span class="me-2">{{ faq.header }}</span>
              </button>
            </h2>

            <div
              :id="`collapse-${cIdx}-${fIdx}`"
              class="accordion-collapse"
              :class="{ show: openByCategory[cIdx] === fIdx, collapse: openByCategory[cIdx] !== fIdx }"
              role="region"
              :aria-labelledby="`heading-${cIdx}-${fIdx}`"
              :data-bs-parent="`#accordionFaqs-${cIdx}`"
            >
              <MarkdownContent
                v-if="faq.body_markdown"
                class="accordion-body mb-2"
                :content="faq.body_markdown"
              />
              <div v-else class="accordion-body">
                <p class="mb-2">{{ faq.body }}</p>
                <ul v-if="faq.list">
                  <li
                    v-for="(item, i) in faq.list"
                    :key="item.id || `li-${cIdx}-${fIdx}-${i}`"
                  >
                    {{ item.text ?? item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- /accordion -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
// components in /components are auto-registered in Nuxt 3; keep explicit import if you prefer
// import MarkdownContent from '~/components/MarkdownContent.vue'

const props = defineProps({
  title: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  categories: {
    type: Array,
    required: true
  }
})

/**
 * Track the open index per category: { [categoryIndex]: number|null }
 * Starts with all collapsed.
 */
const openByCategory = reactive({})

function toggle(catIdx, faqIdx) {
  openByCategory[catIdx] =
    openByCategory[catIdx] === faqIdx ? null : faqIdx
}
</script>

<style scoped>
.faq__heading {
  font-size: 18px;
  font-weight: 600;
  padding-left: 20px;
}
.accordion-button {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(0, 0, 0);
}
.accordion-item {
  border: none;
  font-size: var(--ft-small-body);
}
.accordion-button:focus {
  box-shadow: none;
  background: none;
}
.accordion-body {
  padding: 0 1.25rem;
  width: 85%;
}

/* Make collapsed vs show work without Bootstrap JS */
.accordion-collapse.collapse { display: none; }
.accordion-collapse.show { display: block; }
</style>
