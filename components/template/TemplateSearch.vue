<template>
  <div>
    <!-- Search -->
    <div class="search-box mx-auto d-flex flex-column">
      <div class="search-input-wrapper">
        <div class="search-icon">
          <nuxt-img src="/templates/search.svg" alt="Search" />
        </div>
        <input
          type="text"
          placeholder="Blood donation, job applicant tracker"
          v-model="searchTerm"
          @input="emitSearchTerm"
          class="search-input w-100"
        />
        <div
          class="clear-input-btn pointer"
          @click="resetSearchInput"
          :class="{ 'd-none': searchTerm === '' }"
        >
          <nuxt-img src="/templates/cross.png" alt="Clear" />
        </div>
      </div>
    </div>
    <!-- Trending -->
    <div class="trending-searches d-flex mt-4 d-none d-lg-flex">
      <p class="trending-heading">Trending:&nbsp</p>
      <p>Lead Generation,&nbsp</p>
      <p>Event RSVP,&nbsp</p>
      <p>Product Research</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { searchTerm: '' }
  },
  methods: {
    resetSearchInput() {
      this.searchTerm = ''
      this.emitSearchTerm()
    },
    emitSearchTerm() {
      this.$emit('searchInput', this.searchTerm)
    },
  },
}
</script>

<style scoped>
.search-box {
  margin-top: 16px;
  background: #fff;
  height: 67px;
  border-radius: 8px;
  padding: 20px;
  gap: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08),
    0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.search-box:focus-within {
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
}

.search-input {
  border: none;
  background-color: transparent;
}

.search-input::placeholder {
  color: #667085;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
}

.search-input:focus {
  outline: none;
}

.trending-searches {
  color: var(--clr-neutral-700);
}

.trending-heading {
  color: var(--clr-text-secondary);
}

@media (max-width: 991px) {
  .search-box {
    margin-bottom: 28px;
    height: 52px;
    padding: 12px;
    gap: 8px;
  }
}

@media only screen and (max-width: 840px) {
  .search-input::placeholder {
    font-size: 14px;
  }
}
</style>
