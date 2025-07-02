<template>
  <section class="call-to-action-section" :class="{ 'd-none': content.hidden }">
    <div class="container py-md-6 py-5 px-md-5">
      <div class="background-image-wrapper">
        <nuxt-img src="/CTA Mask Left.svg" class="background-image-left" />
        <nuxt-img src="/CTA Mask Right.svg" class="background-image-right" />
      </div>
      <div
        class="row align-items-center py-md-5 py-3 px-md-5 px-3"
        style="position: relative; z-index: 1"
      >
        <div class="col-lg-8 col-12 text-lg-start text-center">
          <h2 class="section__heading text-white">
            <span v-if="content.heading">{{ content.heading }}</span>
            <span v-else-if="title && title.length">
              <span
                v-for="item in title"
                :key="item.id"
                :class="{ highlight__text: item.highlight }"
              >
                {{ item.text }}
              </span>
            </span>
            <span v-else>Ready to build your perfect form?</span>
          </h2>
          <p class="section__subtitle mt-3">
            <span>
              {{
                content.subHeading ||
                description ||
                'Formester is the easiest way to create forms, collect data and automate your workflow'
              }}
            </span>
          </p>
        </div>
        <div class="col-lg-4 col-12 text-center mt-4">
          <a
            :href="
              content.btnPrimaryLink ||
              'https://app.formester.com/users/sign_up'
            "
            class="btn button cta-button__invert"
            target="_blank"
          >
            {{ content.btnPrimaryText || 'Get Started – It’s Free!' }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
    ctaValue: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    title() {
      return this.ctaValue?.title || []
    },
    description() {
      return this.ctaValue?.description || ''
    },
    buttons() {
      return this.ctaValue?.buttons || []
    },
  },
}
</script>

<style scoped>
.container {
  position: relative;
  background-color: var(--clr-primary);
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}

.background-image-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
}

.background-image-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  object-fit: contain;
  object-position: left center;
}

.background-image-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: auto;
  object-fit: contain;
  object-position: right center;
}
.section__heading {
  font-size: 40px;
  line-height: 56px;
  letter-spacing: -0.28px;
  font-weight: 00;
}
.section__subtitle {
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: #f9fafb;
}

.call-to-action-section {
  padding: 6rem 0 !important;
  width: 100%;
}
.cta-bullets {
  opacity: 0.5;
  font-size: 14px;
  text-decoration: none;
  list-style-type: none;
}

.cta-button {
  background-color: var(--clr-primary);
  font-size: var(--ft-md-btn);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}

.cta-button:hover {
  background-color: var(--clr-primary-hover);
}

.cta-button__invert {
  background-color: white;
  font-size: var(--ft-md-btn);
  padding: 12px 24px;
  border-radius: 8px;
  color: var(--clr-primary);
  font-weight: 700;
}

.cta-button__invert:hover {
  background-color: var(--clr-primary-light);
}

.gap-3 {
  gap: 1rem;
}

@media (max-width: 575px) {
  .section__heading {
    font-size: 30px;
    line-height: 40px;
  }
  .section__subtitle {
    font-size: 16px;
    line-height: 24px;
  }

  .container {
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
}

@media (min-width: 768px) {
  .py-md-6 {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }
  .call-to-action-section {
    padding: 4rem 0 !important;
  }
}

@media (max-width: 767px) {
  .container {
    background-size: auto 100%;
  }
}
@media (max-width: 1199px) {
  .background-image-left {
    display: none !important;
  }
}
</style>
