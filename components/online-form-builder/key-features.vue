<template>
  <div class="container py-5 my-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        Online Form Builder Features
      </h2>
    </div>

    <div class="row mt-3">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-4 col-md-6 mt-4"
      >
        <div class="feature__card p-3 d-flex flex-column align-items-center">
          <nuxt-img
            :src="`/online-form-builder/key-features/${feature.img}.svg`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
          />
          <div class="text-start">
            <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
            <p class="subheading__text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Drag-and-Drop Interface',
          description:
            'Build professional looking forms faster than ever without any coding required.',
          img: 'drag-n-drop-interface',
        },
        {
          title: 'Conditional Logic',
          description:
            "Skip irrelevant questions and personalize the experience for every user.",
          img: 'customization-options',
        },
        {
          title: 'Form Analytics',
          description:
            'Optimize your forms for better results with data driven insights.',
          img: 'data-collection',
        },
        {
          title: 'Multi User Collaboration',
          description:
            'Work together efficiently to access, edit and share forms with your team.',
          img: 'collaboration-tools',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__card {
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  background: #fcfcfc;
}
</style>
