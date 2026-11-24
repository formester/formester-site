<template>
  <nav class="container" aria-label="Pagination">
    <div class="custom-pagination-bar">
      <nuxt-link v-if="currentPage > 1" class="custom-page-btn prev" :to="pageUrl(currentPage - 1)">
        Previous
      </nuxt-link>
      <span v-else class="custom-page-btn prev disabled"> Previous </span>
      <div class="custom-pagination-center">
        <span v-for="item in paginationPages" :key="item.key">
          <nuxt-link
            v-if="item.type === 'page'"
            class="custom-page-btn"
            :class="{ active: item.page === currentPage }"
            :to="pageUrl(item.page)"
            :aria-current="item.page === currentPage ? 'page' : null"
          >
            {{ item.page }}
          </nuxt-link>
          <span v-else class="custom-ellipsis">...</span>
        </span>
      </div>
      <nuxt-link v-if="currentPage < totalPages" class="custom-page-btn next" :to="pageUrl(currentPage + 1)">
        Next
      </nuxt-link>
      <span v-else class="custom-page-btn next disabled"> Next </span>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  // The listing's root path without a trailing slash, e.g. "/templates" or "/workflow-templates".
  basePath: { type: String, required: true },
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

/**
 * The URL of a listing page; page 1 is the listing root, the rest live under /page/<n>/.
 * @param {number} page e.g. 3
 * @returns {string} e.g. "/templates/page/3/"
 */
const pageUrl = (page) => (page === 1 ? `${props.basePath}/` : `${props.basePath}/page/${page}/`)

// Up to five page links: all of them for short listings, else first, last and the neighbours of the current page.
const paginationPages = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push({ type: 'page', page: i, key: `page-${i}` })
    }
    return pages
  }

  pages.push({ type: 'page', page: 1, key: 'page-1' })
  if (current > 3) {
    pages.push({ type: 'ellipsis', key: 'start-ellipsis' })
  }
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push({ type: 'page', page: i, key: `page-${i}` })
  }
  if (current < total - 2) {
    pages.push({ type: 'ellipsis', key: 'end-ellipsis' })
  }
  pages.push({ type: 'page', page: total, key: `page-${total}` })
  return pages
})
</script>

<style scoped>
.custom-pagination-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 64px auto;
  padding: 32px 0px;
  border-top: 1px solid var(--border-light);
  flex-wrap: wrap;
  gap: 12px;
}
.custom-pagination-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 8px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .custom-pagination-bar {
    flex-direction: row;
    padding: 16px 0;
    gap: 8px;
  }
  .custom-pagination-center {
    display: none;
  }
  .custom-page-btn {
    min-width: 36px;
    min-height: 32px;
    font-size: 0.95rem;
    padding: 0 8px;
  }
}

.custom-page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: var(--bg-primary);
  border-radius: var(--r);
  min-width: 44px;
  min-height: 40px;
  font-weight: var(--fw-semibold);
  font-size: var(--ft-small-body);
  color: var(--clr-text-secondary);
  cursor: pointer;
  outline: none;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
  padding: 0 16px;
}

.custom-page-btn:hover {
  background: var(--bg-grey-50);
}
.custom-page-btn.active,
.custom-page-btn.disabled {
  background: var(--bg-grey-50);
  color: var(--clr-text-secondary);
  border: 1px solid var(--border-dark);
  cursor: default;
}
.custom-page-btn.prev,
.custom-page-btn.next {
  border: 1px solid var(--border-dark);
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-page-btn.disabled {
  opacity: 1;
}
.custom-ellipsis {
  display: inline-block;
  min-width: 32px;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  user-select: none;
  pointer-events: none;
}
</style>
