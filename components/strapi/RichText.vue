<template>
  <section class="container">
    <div :class="['rich-text-content', { 'card-ui': cardUI }]">
      <MarkdownContent v-if="code" :content="code" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: () => '',
    },
    cardUI: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.rich-text-content {
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.card-ui {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  transition: all 0.2s ease;
  box-sizing: border-box;
  text-align: center;
}

@media (max-width: 1200px) {
  .card-ui {
    width: 95%;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .rich-text-content {
    margin: 1rem auto;
    padding: 0 0.5rem;
  }
  
  .card-ui {
    padding: 1.5rem;
    margin: 1.5rem 0.5rem;
    width: calc(100% - 1rem);
  }
}

.container {
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 96px;
}

.rich-text-content :deep(h2) {
  font-size: 40px;
  font-weight: 700;
  line-height: 125%;
  margin: 0 auto;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .rich-text-content :deep(h2) {
    font-size: 30px !important;
    margin-bottom: 24px;
  }
}

@media (max-width: 1024px) {
  .rich-text-content :deep(h2) {
  font-size: 32;
  font-weight: 700;
  line-height: 125%;
  margin: 0 auto;
  margin-bottom: 24px;

  }
}

/* Table Styles */
.rich-text-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.rich-text-content :deep(thead) {
  background: #f9fafb;
  border-bottom: 2px solid #eaecf0;
}

.rich-text-content :deep(th) {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #344054;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.rich-text-content :deep(td) {
  padding: 12px 16px;
  border-bottom: 1px solid #eaecf0;
  font-size: 14px;
  color: #475467;
  line-height: 1.5;
}

.rich-text-content :deep(tbody tr:last-child td) {
  border-bottom: none;
}

.rich-text-content :deep(tbody tr:hover) {
  background: #f9fafb;
  transition: background 0.2s ease;
}

/* Responsive table */
@media (max-width: 768px) {
  .rich-text-content :deep(table) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 1rem 0;
  }

  .rich-text-content :deep(th),
  .rich-text-content :deep(td) {
    padding: 8px 12px;
    font-size: 13px;
    white-space: nowrap;
  }
}
</style>
