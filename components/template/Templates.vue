<template>
  <div>
    <div class="container template-container d-flex">
      <div class="content-wrapper w-100">
        <!-- Top search: non-V2 only (V2 moves it into the filter bar) -->
        <div v-if="!isV2" class="search-row">
          <TemplateSearch @searchInput="handleSearch" />
        </div>
        <div v-if="activeCategory" class="breadcrumb d-flex align-items-center gap-2">
          <NuxtLink to="/" class="breadcrumb-text">Home</NuxtLink>
          <LucideIcon name="chevron-right" :size="13" class="breadcrumb-sep" />
          <NuxtLink to="/templates/" class="breadcrumb-text">Templates</NuxtLink>
          <LucideIcon name="chevron-right" :size="13" class="breadcrumb-sep" />
          <span class="breadcrumb-current">{{ activeCategory.name }}</span>
        </div>

        <!-- HERO -->
        <div class="hero-wrap" :class="{ 'hero-wrap--v2': isV2 && activeCategory }">
          <div class="hero-left">
            <div class="heading-row">
              <h1 class="content-heading" :class="{ 'content-heading--v2': isV2 && pageContent.heroTitle }">
                <template v-if="isV2 && pageContent.heroTitle"
                  ><span
                    v-for="(tok, i) in heroTitleTokens"
                    :key="i"
                    :class="{ 'hero-highlight': tok.highlight }"
                    >{{ tok.text }}</span
                  ></template
                >
                <template v-else>{{ activeCategory ? activeCategory.name : 'All' }} Templates</template>
              </h1>
            </div>
            <p v-if="isV2 && pageContent.heroSubtitle" class="hero-subtitle">{{ pageContent.heroSubtitle }}</p>
            <div v-if="!hasHeroContent && activeCategory?.description" class="my-2">
              <div class="description-wrapper" :class="{ 'description-truncated': isClient }">
                <div class="content-description mt-0 mb-1" v-html="activeCategory.description" />
              </div>
              <button v-if="isClient" class="content-description-handle-button text-nowrap" @click="toggleDescription">
                {{ descriptionButtonLabel }}
              </button>
            </div>

            <!-- Hero actions + derivable stats (only once hero content is curated) -->
            <div v-if="hasHeroContent && activeCategory && !searchActive" class="hero-meta">
              <div class="hero-actions">
                <a href="/users/sign_up" class="hero-btn hero-btn--primary">Create form</a>
                <NuxtLink to="/templates/" class="hero-btn hero-btn--ghost">Browse templates</NuxtLink>
              </div>
              <div v-if="heroStats.length" class="hero-stats">
                <div v-for="stat in heroStats" :key="stat.label" class="hero-stat">
                  <span class="hero-stat__value">{{ stat.value }}</span>
                  <span class="hero-stat__label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Admin-authored hero side asset (HTML blocks), when provided -->
          <div
            v-if="isV2 && activeCategory && heroArtBlocks.length"
            class="hero-art hero-art--custom"
          >
            <StrapiRawHtml v-for="(block, i) in heroArtBlocks" :key="i" :markup="block.content" />
          </div>
          <!-- Default decorative card-stack art (V2, desktop only) -->
          <div v-else-if="isV2 && activeCategory" class="hero-art" aria-hidden="true">
            <div class="art-card art-card--amber"><span class="art-chip art-chip--amber"><LucideIcon name="search" :size="19" /></span></div>
            <div class="art-card art-card--red"><span class="art-chip art-chip--red"><LucideIcon name="activity" :size="19" /></span></div>
            <div class="art-card art-card--blue">
              <span class="art-chip art-chip--blue"><LucideIcon :name="activeCategory.icon || 'user-check'" :size="24" /></span>
              <span class="art-card__label">{{ activeCategory.name }}</span>
            </div>
            <div class="art-float">
              <span class="art-float__chip"><LucideIcon name="file-check-2" :size="16" /></span>
              <div class="art-float__text">
                <span class="art-float__title">{{ categoryTemplateCount }} templates</span>
                <span class="art-float__sub">Ready to ship</span>
              </div>
            </div>
            <div class="art-pill"><LucideIcon name="badge-check" :size="14" /> E-signed &amp; audited</div>
          </div>
        </div>

        <!-- Full description, expanded from the hero's Show more (default view only) -->
        <div
          v-if="!hasHeroContent && showFullDescription && activeCategory?.description"
          class="description-expanded"
        >
          <div class="description-wrapper">
            <div class="content-description mt-0 mb-1" v-html="activeCategory.description" />
          </div>
          <button class="content-description-handle-button text-nowrap" @click="toggleDescription">Show less</button>
        </div>

        <!-- FILTER BAR (V2): search + sub-category pills -->
        <div v-if="isV2 && activeCategory" class="filter-bar">
          <div
            class="filter-bar__search"
            :class="{ 'filter-bar__search--wide': searchActive || !subcategories.length }"
          >
            <TemplateSearch
              :placeholder="`Search ${categoryTemplateCount} ${activeCategory.name} templates`"
              @searchInput="handleSearch"
            />
          </div>
          <div v-if="!searchActive && subcategories.length" class="subcat-tabs">
            <button
              type="button"
              class="subcat-tab"
              :class="{ 'subcat-tab--active': !activeFilter }"
              @click="activeFilter = null"
            >
              All
              <span class="subcat-tab__count">{{ categoryTemplateCount }}</span>
            </button>
            <button
              v-for="sub in subcategories"
              :key="sub.id"
              type="button"
              class="subcat-tab"
              :class="{ 'subcat-tab--active': activeFilter === sub.slug }"
              @click="activeFilter = sub.slug"
            >
              {{ shortSubName(sub) }}
            </button>
          </div>
        </div>

        <!-- Featured templates -->
        <section
          v-if="isV2 && !searchActive && !activeFilter && featuredTemplates.length"
          class="cat-section"
          aria-label="Featured templates"
        >
          <div class="section-eyebrow">FEATURED</div>
          <h2 class="section-title">{{ featuredTitle }}</h2>
          <p v-if="featuredSubtitle" class="section-subtitle">{{ featuredSubtitle }}</p>
          <div class="templates-grid">
            <TemplateCard
              v-for="template in featuredTemplates"
              :key="`featured-${template.id}`"
              :template="template"
              :category-label="activeCategory.name"
              @preview="openPreview"
            />
          </div>
        </section>

        <!-- Sub-category sections -->
        <template v-if="isV2 && !searchActive && subcategories.length">
          <section
            v-for="sub in visibleSubcategories"
            v-show="sub.templates.length"
            :id="`subcat-${sub.slug}`"
            :key="sub.id"
            class="cat-section"
            aria-label="Sub-category templates"
          >
            <div class="subcat-header">
              <span class="subcat-header__chip"><LucideIcon :name="sub.icon" :size="17" /></span>
              <h3 class="subcat-heading">{{ sub.name }}</h3>
              <span class="subcat-header__count">{{ sub.templates.length }} templates</span>
            </div>
            <div v-if="sub.description" class="subcat-desc content-description" v-html="sub.description" />
            <div class="templates-grid">
              <TemplateCard
                v-for="template in sub.templates"
                :key="`${sub.id}-${template.id}`"
                :template="template"
                :category-label="shortSubName(sub)"
                @preview="openPreview"
              />
            </div>
          </section>

          <!-- Directly-assigned templates that are neither featured nor in a sub-category -->
          <section
            v-if="!activeFilter && unsectionedTemplates.length"
            class="cat-section"
            aria-label="More templates"
          >
            <h3 class="subcat-heading">More {{ activeCategory.name }} templates</h3>
            <div class="templates-grid">
              <TemplateCard
                v-for="template in unsectionedTemplates"
                :key="`more-${template.id}`"
                :template="template"
                :category-label="activeCategory.name"
              @preview="openPreview"
              />
            </div>
          </section>
        </template>

        <!-- Flat grid: fallback (non-V2) and search results -->
        <template v-else>
          <template v-if="filteredTemplates.length > 0">
            <section class="templates-grid" aria-label="Templates">
              <TemplateCard
                v-for="(template, index) in filteredTemplates"
                :key="template.id"
                :template="template"
                :category-label="!searchActive && activeCategory ? activeCategory.name : ''"
                :class="{ 'template-hidden': isClient && useViewMore && index >= visibleCount }"
                @preview="openPreview"
              />
            </section>
            <div
              v-if="isClient && useViewMore && visibleCount < filteredTemplates.length"
              class="d-flex justify-content-center mt-3"
            >
              <button @click="viewMore" class="btn-primary" aria-label="View more templates" type="button">
                View More
              </button>
            </div>
          </template>
          <div v-else class="no-templates d-flex flex-column align-items-center justify-content-center w-100">
            <nuxt-img class="img-fluid" src="/templates/no-template.svg" alt="No Template Illustration" />
            <h4 class="mt-3">No Template Available</h4>
          </div>
        </template>

        <!-- Related categories -->
        <section v-if="isV2 && !searchActive && relatedCategories.length" class="related-section">
          <div class="section-eyebrow">RELATED</div>
          <h2 class="section-title">Categories teams pair with {{ activeCategory.name }}</h2>
          <div class="related-grid">
            <NuxtLink
              v-for="rel in relatedCategories"
              :key="rel.id"
              :to="`/templates/categories/${rel.slug}/`"
              class="related-card fm-card"
            >
              <span class="related-card__chip"><LucideIcon :name="rel.icon" :size="18" /></span>
              <span class="related-card__name">{{ rel.name }}</span>
              <span v-if="rel.templateCount" class="related-card__count">{{ rel.templateCount }} templates</span>
            </NuxtLink>
          </div>
        </section>

        <!-- Learn (super-admin authored HTML blocks) -->
        <template v-if="isV2 && !searchActive && activeCategory?.htmlBlocks?.length">
          <StrapiRawHtml v-for="block in activeCategory.htmlBlocks" :key="block.name" :markup="block.content" />
        </template>

        <!-- FAQ accordion -->
        <FaqSection
          v-if="isV2 && !searchActive && faqs.length"
          badge="FAQ"
          :title="`${activeCategory.name} templates — frequently asked questions`"
          :faq-list="faqs"
          :description-fallback="false"
          centered
        />

        <!-- CTA banner -->
        <section v-if="isV2 && !searchActive && activeCategory" class="cat-cta">
          <span class="cat-cta__eyebrow"><LucideIcon name="rocket" :size="14" /> READY WHEN YOU ARE</span>
          <h2 class="cat-cta__title">Start with a {{ activeCategory.name }} template, ship today.</h2>
          <p class="cat-cta__sub">
            Pick a ready-made template, brand it, embed it. Free plan included, no credit card.
          </p>
          <div class="cat-cta__btns">
            <a href="/users/sign_up" class="cat-cta__btn cat-cta__btn--primary"> Sign up free </a>
            <a href="/templates/" class="cat-cta__btn cat-cta__btn--ghost"> Browse templates </a>
          </div>
        </section>
      </div>
      <div class="left-sidebar">
        <TemplateCategories :activeCategory="activeCategory" :templateCategories="templateCategories" />
      </div>
    </div>
    <TemplatePreviewModal :is-open="!!previewUrl" :survey-url="previewUrl || ''" @close="closePreview" />
  </div>
</template>

<script>
import TemplateCategories from '@/components/template/TemplateCategories.vue'
import TemplateCard from '@/components/template/TemplateCard.vue'
import TemplateSearch from '@/components/template/TemplateSearch.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import TemplatePreviewModal from '@/components/v2/template/TemplatePreviewModal.vue'

export default {
  components: { TemplateCategories, TemplateCard, TemplateSearch, FaqSection, TemplatePreviewModal },
  props: {
    activeCategory: Object,
    templates: Array,
    allTemplates: {
      type: Array,
      default: null,
    },
    templateCategories: Object,
    isPaginated: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['search-active'],
  data() {
    return {
      searchTerm: '',
      showFullDescription: false,
      visibleCount: 12,
      isClient: false,
      activeFilter: null,
      previewUrl: null,
    }
  },
  mounted() {
    this.isClient = true
  },
  watch: {
    activeCategory: {
      immediate: true,
      handler() {
        this.showFullDescription = false
        this.activeFilter = null
      },
    },
  },
  methods: {
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm
      this.visibleCount = 12
      this.$emit('search-active', searchTerm.trim().length > 0)
    },
    toggleDescription() {
      this.showFullDescription = !this.showFullDescription
    },
    openPreview(template) {
      this.previewUrl = template.surveyUrl
      document.body.style.overflow = 'hidden'
    },
    closePreview() {
      this.previewUrl = null
      document.body.style.overflow = ''
    },
    viewMore() {
      this.visibleCount += 12
    },
    // Trim words the sub-category shares with its parent, e.g.
    // "Healthcare Consent" under "Consent Forms" → "Healthcare".
    shortSubName(sub) {
      const parentWords = new Set((this.activeCategory?.name || '').toLowerCase().split(/\s+/))
      const kept = (sub.name || '').split(/\s+/).filter((w) => !parentWords.has(w.toLowerCase()))
      return (kept.join(' ') || sub.name || '').trim()
    },
  },
  computed: {
    searchActive() {
      return this.searchTerm.trim().length > 0
    },
    // Every category page uses the V2 layout; the all-templates page
    // (no activeCategory) keeps the flat grid.
    isV2() {
      return !!this.activeCategory
    },
    // The hero subtitle replaces the old description; until it's curated the
    // page keeps the description + Show more and hides the CTAs/stats.
    hasHeroContent() {
      return !!this.pageContent.heroSubtitle
    },
    pageContent() {
      return this.activeCategory?.pageContent || {}
    },
    featuredTitle() {
      return this.pageContent.featuredTitle || `Most popular ${this.activeCategory?.name || ''} templates`
    },
    featuredSubtitle() {
      return this.pageContent.featuredSubtitle || ''
    },
    heroArtBlocks() {
      return this.activeCategory?.pageContent?.heroArtBlocks || []
    },
    // Hero title supports inline *asterisk* highlights (multiple allowed):
    // "Free *consent form* templates" → "consent form" in the brand accent.
    heroTitleTokens() {
      const title = this.pageContent.heroTitle || ''
      return title
        .split(/(\*[^*]+\*)/g)
        .filter((p) => p !== '')
        .map((p) =>
          p.length > 2 && p.startsWith('*') && p.endsWith('*')
            ? { text: p.slice(1, -1), highlight: true }
            : { text: p, highlight: false }
        )
    },
    subcategories() {
      return this.activeCategory?.subcategories || []
    },
    visibleSubcategories() {
      if (!this.activeFilter) return this.subcategories
      return this.subcategories.filter((s) => s.slug === this.activeFilter)
    },
    featuredTemplates() {
      return this.activeCategory?.featuredTemplates || []
    },
    faqs() {
      return this.activeCategory?.faqs || []
    },
    relatedCategories() {
      return this.activeCategory?.relatedCategories || []
    },
    categoryTemplateCount() {
      return this.activeCategory?.templateCount || this.allCategoryTemplates.length
    },
    // Templates + Free are derivable; forms-shipped / setup are admin-entered
    // (blank => omitted, so we never invent numbers).
    heroStats() {
      const stats = [{ value: String(this.categoryTemplateCount), label: 'Templates' }]
      if (this.pageContent.statFormsShipped) {
        stats.push({ value: this.pageContent.statFormsShipped, label: 'Forms shipped' })
      }
      if (this.pageContent.statSetup) {
        stats.push({ value: this.pageContent.statSetup, label: 'Setup' })
      }
      stats.push({ value: 'Free', label: 'Preview' })
      return stats
    },
    // Directly-assigned templates that would otherwise be invisible on a
    // category with sub-categories (not featured, not in any sub).
    unsectionedTemplates() {
      const sectioned = new Set(this.featuredTemplates.map((t) => t.id))
      this.subcategories.forEach((sub) => (sub.templates || []).forEach((t) => sectioned.add(t.id)))
      return (this.templates || []).filter((t) => !sectioned.has(t.id))
    },
    // Templates of this category live across featured + sub-categories + any
    // directly-assigned flat list. Merge + dedupe so search covers all of them.
    allCategoryTemplates() {
      const byId = new Map()
      const add = (list) => (list || []).forEach((t) => byId.set(t.id, t))
      add(this.templates)
      add(this.featuredTemplates)
      this.subcategories.forEach((sub) => add(sub.templates))
      return [...byId.values()]
    },
    useViewMore() {
      return !this.isPaginated || this.searchTerm.trim().length > 0
    },
    searchableTemplates() {
      if (!this.searchTerm.trim()) return this.templates
      return this.allTemplates || this.allCategoryTemplates
    },
    filteredTemplates() {
      const searchTerm = this.searchTerm.trim().toLowerCase()
      if (!searchTerm) return this.templates
      return this.searchableTemplates.filter(
        (template) =>
          template.name.toLowerCase().includes(searchTerm) || template.description?.toLowerCase().includes(searchTerm)
      )
    },
    descriptionButtonLabel() {
      return this.showFullDescription ? 'Show less' : 'Show more'
    },
  },
}
</script>

<style scoped>
.btn-primary {
  margin-top: 1rem;
  background-color: var(--clr-primary);
  font-size: 16px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
}

.btn-primary:hover {
  background-color: var(--clr-primary-hover);
  transition: all 0.2s ease;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem var(--clr-primary-focus);
}

.template-container {
  flex-direction: row-reverse;
  margin-top: 8rem;
}

.left-sidebar {
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 70px);
  margin-bottom: 1.5rem;
  min-width: 264px;
  overflow-y: scroll;
  padding: 0 16px 1.5rem 0;
  border-right: 1px solid var(--clr-border, #eaecf0);
}

.left-sidebar::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.left-sidebar::-webkit-scrollbar-thumb {
  background-color: #d0d5dd;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.left-sidebar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.content-wrapper {
  margin-bottom: 24px;
  padding-left: 3rem;
}

.search-row {
  margin: 0 0 28px;
}

.search-row :deep(.search-box) {
  max-width: 100%;
}

.heading-row {
  margin-top: 4px;
}

.heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.content-heading {
  color: var(--clr-text-primary);
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.64px;
  flex-shrink: 0;
}

/* V2 hero title: render as authored (sentence case) with an accent phrase.
   flex-shrink + max-width let it wrap to ~2 lines instead of running under
   the hero art (the base .content-heading has flex-shrink: 0). */
/* Default-view titles (no heroTitle) must also wrap inside the hero column
   instead of running under the art — the base rule has flex-shrink: 0. */
.hero-wrap--v2 .content-heading {
  flex-shrink: 1;
  min-width: 0;
}

.content-heading--v2 {
  text-transform: none;
  flex-shrink: 1;
  min-width: 0;
  max-width: 560px;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: -0.02em;
}

.hero-highlight {
  color: var(--clr-primary, #7f56d9);
}

.description-wrapper {
  position: relative;
  transition: max-height 0.3s ease;
}

.description-wrapper.description-truncated {
  max-height: 60px; /* Approximate height for 2 lines at 30px line-height */
  overflow: hidden;
}

/* Full description, expanded below the hero so the hero layout never jumps. */
.description-expanded {
  background: var(--background-color-grey-50, #f9fafb);
  border: 1px solid var(--clr-border, #eaecf0);
  border-radius: 12px;
  padding: 20px 24px;
  margin: 8px 0 16px;
}

.description-wrapper .content-description {
  color: var(--clr-text-secondary);
  font-size: 16px;
  line-height: 1.7;
  margin-top: 12px;
  max-width: 100%;
}

/* ── Rich-text category description typography ──
   These run on v-html content, so they use :deep(). Build a clear scale
   below the page title (32px): h2 22 → h3 18 → body 16, with weight and
   top-margin contrast so multi-section descriptions read as an article. */
.description-wrapper .content-description :deep(h2) {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--clr-text-primary);
  margin: 32px 0 10px;
}

.description-wrapper .content-description :deep(h3) {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--clr-text-primary);
  margin: 24px 0 8px;
}

.description-wrapper .content-description :deep(h4) {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--clr-text-primary);
  margin: 20px 0 6px;
}

.description-wrapper .content-description :deep(h2:first-child),
.description-wrapper .content-description :deep(h3:first-child) {
  margin-top: 0;
}

.description-wrapper .content-description :deep(p) {
  margin: 0 0 14px;
}

.description-wrapper .content-description :deep(ul),
.description-wrapper .content-description :deep(ol) {
  margin: 0 0 16px;
  padding-left: 24px;
}

.description-wrapper .content-description :deep(li) {
  margin: 6px 0;
}

/* Bold/emphasis text uses the ink so it reads against the grey body copy. */
.description-wrapper .content-description :deep(strong),
.description-wrapper .content-description :deep(b) {
  color: var(--clr-text-primary);
  font-weight: 600;
}

/* Links inside the rich-text category description use the brand primary. */
.description-wrapper .content-description :deep(a) {
  color: var(--clr-primary);
  text-decoration: underline;
}

.description-wrapper .content-description :deep(a:hover) {
  color: var(--clr-primary-hover);
}

.content-description-handle-button {
  color: var(--clr-primary);
  background: transparent;
  text-decoration: underline;
  margin-top: 4px;
  font-size: 14px;
}

.templates-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 24px;
  margin-top: 1rem;
}

.template-hidden {
  display: none;
}

/* ── Hero two-column layout + decorative art ── */
.hero-wrap--v2 {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 8px;
}

.hero-wrap--v2 .hero-left {
  flex: 1 1 0;
  min-width: 0;
  max-width: 560px;
}

.hero-art {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-art {
  position: relative;
  height: 300px;
  width: 380px;
  flex: 0 0 380px;
}

/* Custom (admin HTML) art: give the raw-html block the full 380×300 canvas
   instead of the flex-centering that collapses absolutely-positioned children. */
.hero-art--custom {
  display: block;
}
.hero-art--custom :deep(section) {
  width: 100%;
  height: 100%;
}
.hero-art--custom :deep(.raw-html-content) {
  position: relative;
  width: 100%;
  height: 100%;
}

.art-card {
  position: absolute;
  border-radius: 18px;
  display: flex;
  padding: 16px;
}

.art-card--amber {
  left: 30px;
  top: 30px;
  width: 150px;
  height: 188px;
  background: #f2a33a;
  transform: rotate(-9deg);
  box-shadow: 0 18px 40px -12px rgba(242, 163, 58, 0.45);
  align-items: flex-start;
}

.art-card--red {
  right: 34px;
  top: 14px;
  width: 150px;
  height: 188px;
  background: #ef5b52;
  transform: rotate(8deg);
  box-shadow: 0 18px 40px -12px rgba(239, 91, 82, 0.45);
  align-items: flex-start;
  justify-content: flex-end;
}

.art-card--blue {
  left: 88px;
  top: 78px;
  width: 170px;
  height: 206px;
  background: #4c8df0;
  box-shadow: 0 24px 48px -12px rgba(76, 141, 240, 0.5);
  flex-direction: column;
  align-items: center;
  /* Content sits high so the floating pill/count cards never cover the label. */
  justify-content: flex-start;
  gap: 14px;
  padding: 34px 18px 18px;
}

.art-chip {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.art-chip--amber,
.art-chip--red {
  width: 38px;
  height: 38px;
  border-radius: 10px;
}

.art-chip--amber {
  color: #b8740c;
}

.art-chip--red {
  color: #c0392b;
}

.art-chip--blue {
  width: 46px;
  height: 46px;
  color: #2563eb;
}

.art-card__label {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  text-transform: capitalize;
  padding: 0 6px;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.art-float {
  position: absolute;
  right: 4px;
  bottom: 12px;
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 12px;
  box-shadow: 0 12px 28px -8px rgba(16, 24, 40, 0.18);
  padding: 11px 13px;
  display: flex;
  align-items: center;
  gap: 9px;
}

.art-float__chip {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #f0ebfa;
  color: var(--clr-primary, #7f56d9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.art-float__text {
  display: flex;
  flex-direction: column;
}

.art-float__title {
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: #101828;
}

.art-float__sub {
  font-size: 11px;
  line-height: 16px;
  color: #697586;
}

.art-pill {
  position: absolute;
  left: 0;
  bottom: 6px;
  background: #fff;
  border-radius: 9999px;
  box-shadow: 0 8px 20px -6px rgba(16, 24, 40, 0.16);
  padding: 6px 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: #067647;
}

/* ── Filter bar (search + sub-category pills, single row) ── */
.filter-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-top: 1px solid var(--clr-border, #eaecf0);
  border-bottom: 1px solid var(--clr-border, #eaecf0);
  margin: 8px 0 36px;
  flex-wrap: nowrap;
}

.filter-bar__search {
  flex: 0 0 280px;
  max-width: 280px;
}

/* No sub-category pills sharing the row => give search the space. */
.filter-bar__search--wide {
  flex: 1 1 auto;
  max-width: 560px;
}

/* Compact the shared search box inside the filter bar. */
.filter-bar__search :deep(.search-box) {
  min-width: 0;
  padding: 12px 16px;
}

/* Tabs take the remaining width, right-aligned; overflow scrolls sideways. */
.filter-bar .subcat-tabs {
  flex: 0 1 auto;
  margin-left: auto;
  min-width: 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2px;
}

.filter-bar .subcat-tab {
  flex-shrink: 0;
}

.filter-bar .subcat-tabs::-webkit-scrollbar {
  height: 4px;
}

.filter-bar .subcat-tabs::-webkit-scrollbar-thumb {
  background-color: #d0d5dd;
  border-radius: 4px;
}

/* ── Hero actions + stats ── */
/* Actions and stats stack as two separate rows. */
.hero-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 20px 0 8px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  padding: 9px 16px;
  border-radius: 9999px;
}

.hero-btn--primary {
  color: #fff;
  background: var(--clr-primary);
}

.hero-btn--primary:hover {
  background: var(--clr-primary-hover);
}

.hero-btn--ghost {
  color: var(--clr-text-primary);
  background: #fff;
  border: 1px solid var(--clr-border, #d0d5dd);
}

.hero-stats {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero-stat__value {
  font-size: 22px;
  font-weight: 600;
  color: var(--clr-text-primary);
}

.hero-stat__label {
  font-size: 12px;
  color: var(--clr-text-secondary);
}

/* ── Related categories ── */
.related-section {
  margin-top: 48px;
  background: var(--background-color-grey-50, #f9fafb);
  border: 1px solid var(--clr-border, #eaecf0);
  border-radius: 16px;
  padding: 28px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-top: 18px;
}

.related-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  border: 1px solid var(--clr-border, #eaecf0);
  border-radius: 12px;
  padding: 16px;
  transition: box-shadow 0.15s, transform 0.15s;
}

.related-card:hover {
  box-shadow: 0 8px 24px -6px rgba(16, 24, 40, 0.12);
  transform: translateY(-2px);
}

.related-card__chip {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: var(--background-color-violet-25, #f0ebfa);
  color: var(--clr-primary, #7f56d9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.related-card__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--clr-text-primary);
  text-transform: capitalize;
}

.related-card__count {
  font-size: 12px;
  color: var(--clr-text-secondary);
}

/* ── Sub-category quick-filter tabs ── */
.subcat-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.subcat-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid var(--clr-border, #eaecf0);
  background: #fff;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  color: var(--clr-text-secondary);
  text-transform: capitalize;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}

.subcat-tab:hover {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

.subcat-tab--active {
  background: #101828;
  border-color: #101828;
  color: #fff;
  font-weight: 600;
}

.subcat-tab--active:hover {
  color: #fff;
}

.subcat-tab__count {
  font-size: 12px;
  color: var(--clr-text-secondary);
  background: var(--background-color-grey-50, #f5f5f5);
  border-radius: 9999px;
  padding: 0 7px;
}

.subcat-tab--active .subcat-tab__count {
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
}

/* ── Category content sections ── */
.cat-section {
  margin-top: 40px;
  scroll-margin-top: 90px;
}

.section-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.07em;
  color: var(--clr-text-secondary);
  margin-bottom: 6px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--clr-text-primary);
  margin: 0 0 18px;
  text-transform: capitalize;
}

.section-subtitle {
  font-size: 14px;
  color: var(--clr-text-secondary);
  margin: 0 0 18px;
}

.hero-subtitle {
  font-size: 16px;
  line-height: 25px;
  color: var(--clr-text-secondary);
  margin: 10px 0 0;
  max-width: 520px;
}

.subcat-header {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 5px;
}

.subcat-header__chip {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--background-color-violet-25, #f0ebfa);
  color: var(--clr-primary, #7f56d9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.subcat-heading {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--clr-text-primary);
  margin: 0;
  text-transform: capitalize;
}

.subcat-header__count {
  margin-left: auto;
  font-size: 13px;
  font-weight: 600;
  color: var(--clr-primary, #6941c6);
}

.subcat-desc {
  font-size: 14px;
  color: var(--clr-text-secondary);
  margin: 0 0 16px 41px;
  max-width: 720px;
}

/* ── CTA banner ── */
.cat-cta {
  margin-top: 56px;
  border-radius: 20px;
  padding: 52px 32px;
  text-align: center;
  background: radial-gradient(60% 120% at 50% -10%, rgba(127, 86, 217, 0.55), transparent 70%), #2a1d66;
  color: #fff;
}

.cat-cta__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #cdbcff;
  margin-bottom: 14px;
}

.cat-cta__title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #fff;
  margin: 0 auto 10px;
  max-width: 460px;
  line-height: 36px;
  text-transform: capitalize;
}

.cat-cta__sub {
  font-size: 15px;
  color: #cbc3ec;
  margin: 0 auto 24px;
  max-width: 440px;
}

.cat-cta__btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.cat-cta__btn {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 11px 20px;
  border-radius: 9999px;
}

.cat-cta__btn--primary {
  color: #53389e;
  background: #fff;
}

.cat-cta__btn--ghost {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.no-templates {
  padding: 52px 0;
  gap: 1rem;
}

.breadcrumb {
  margin-block: 8px;
}

.breadcrumb-text {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #697586;
  text-transform: capitalize;
}

.breadcrumb-text:hover {
  color: var(--clr-primary);
}

.breadcrumb-sep {
  color: #697586;
  opacity: 0.55;
  flex-shrink: 0;
}

.breadcrumb-current {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #344054;
  text-transform: capitalize;
}

.gap-2 {
  gap: 8px;
}

/* Intermediate band: the sidebar (264px) + fixed 380px art leave too little
   room for the hero text, and 3-column cards get crushed. */
@media (max-width: 1199px) {
  .hero-art {
    display: none;
  }
  .hero-wrap--v2 .hero-left {
    max-width: none;
  }
  .templates-grid {
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
  }
  .related-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Full mobile layout — matches the navbar's hamburger breakpoint (900px). */
@media only screen and (max-width: 900px) {
  .heading-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .content-wrapper {
    padding: 0;
    margin-top: 12px;
  }
  .content-heading {
    margin-top: 12px;
    font-size: 32px;
    line-height: 48px;
  }
  .description-wrapper .content-description {
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
  }
  .description-wrapper.description-truncated {
    max-height: 48px; /* 2 lines at 24px for mobile */
  }
  .template-container {
    flex-direction: column;
    margin-top: 5rem;
  }
  .left-sidebar {
    position: static;
    margin: 0;
    overflow-y: auto;
    border-right: none;
    padding: 0;
  }
  .hero-wrap--v2 {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }
  .hero-art {
    display: none;
  }
  .filter-bar {
    flex-wrap: wrap;
  }
  .filter-bar__search {
    flex: 1 1 100%;
    max-width: none;
  }
  .filter-bar .subcat-tabs {
    margin: 8px 0 0;
  }
}

@media only screen and (max-width: 600px) {
  .templates-grid {
    grid-template-columns: 1fr;
  }
  .related-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
