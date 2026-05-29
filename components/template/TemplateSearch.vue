<template>
  <div class="search-box" :class="{ 'search-box--active': searchTerm !== '' }">
    <div class="search-input-wrapper">
      <img class="search-icon" src="/templates/search.svg" alt="" aria-hidden="true" width="18" height="18" />
      <input
        type="text"
        placeholder="Blood donation, job applicant tracker"
        v-model="searchTerm"
        @input="emitSearchTerm"
        class="search-input"
        data-clarity-unmask="true"
        aria-label="Search templates"
      />
      <button
        v-if="searchTerm !== ''"
        class="clear-btn"
        @click="resetSearchInput"
        aria-label="Clear search"
        type="button"
      >
        <img src="/templates/cross.png" alt="" aria-hidden="true" width="14" height="14" />
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['searchInput'])

const searchTerm = ref('')

function resetSearchInput() {
  searchTerm.value = ''
  emit('searchInput', '')
}

function emitSearchTerm() {
  emit('searchInput', searchTerm.value)
}
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  padding: var(--space-3) var(--space-4);
  box-shadow: var(--shadow-xs);
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
  min-width: 280px;
  max-width: 400px;
  width: 100%;
}

.search-box:focus-within {
  border-color: var(--violet-300);
  box-shadow: var(--focus-ring-primary);
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
}

.search-icon {
  flex-shrink: 0;
  opacity: 0.5;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--font-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  color: var(--fg-1);
  line-height: var(--lh-sm);
  min-width: 0;
}

.search-input::placeholder {
  color: var(--fg-3);
}

.search-input:focus {
  outline: none;
}

.clear-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-grey-100);
  border: none;
  border-radius: var(--r-full);
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease;
}

.clear-btn:hover {
  background: var(--gray-200);
}

@media (max-width: 840px) {
  .search-box {
    max-width: 100%;
    width: 100%;
  }
}
</style>
