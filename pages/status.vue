<template>
  <div>
    <RichText
      :code="c0_code"
      :cardUI="false"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import RichText from '@/components/strapi/RichText.vue'

const c0_code = "<div class=\"status-wrapper\">\n<iframe src=\"https://status.formester.com\" style=\"overflow: hidden; border: none;\"></iframe>\n</div>\n\n\u003Cstyle>\niframe {\n max-width: 1000px;\n width: 80vw;\n height: 1200px;\n position: relative;\n top: -80px;\n}\n.status-wrapper {\nheight: 860px;\noverflow: hidden;\n}\n\u003C/style>"
</script>
