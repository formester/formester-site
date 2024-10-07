<template>
  <section class="call-to-action-section" :class="{ 'd-none': content.hidden }">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="call-to-action-content text-center mx-2 my-5 position-relative"
          >
            <h2 class="section__heading">
              <span v-if="content.heading">{{ content.heading }}</span>
              <span v-else-if="title.length">
                <span
                  v-for="item in title"
                  :key="item.id"
                  :class="{ highlight__text: item.highlight }"
                >
                  {{ item.text }}
                </span>
              </span>
              <span v-else>
                Create your first form for <span class="hglt">free</span>
              </span>
            </h2>
            <h2
              class="section__heading highlight__text"
              v-if="ctaValue.type !== 'default'"
            >
              {{ description }}
            </h2>
            <h2 class="section__subtitle mt-3" v-else>
              <span class="hglt">
                {{
                  content.subHeading ||
                  description ||
                  'With the most intuitive form creator out there'
                }}
              </span>
            </h2>
            <div
              v-if="buttons?.length"
              class="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-5"
            >
              <a
                :href="
                  buttons[0]?.link || 'https://app.formester.com/users/sign_up'
                "
                class="btn button mx-2"
                :class="{
                  'cta-button': buttons[0].type === 'Primary',
                  'cta-button__invert': buttons[0].type === 'Secondary',
                }"
                target="_blank"
              >
                {{ buttons[0]?.text }}
              </a>
              <a
                v-if="buttons?.length === 2"
                target="_blank"
                :href="buttons[1].link"
                class="btn button mx-2"
                :class="{
                  'cta-button': buttons[1]?.type === 'Primary',
                  'cta-button__invert': buttons[1]?.type === 'Secondary',
                }"
              >
                {{ buttons[1]?.text }}
              </a>
            </div>
            <div
              v-else
              class="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-5"
            >
              <a
                :href="
                  content.btnPrimaryLink ||
                  'https://app.formester.com/users/sign_up'
                "
                class="btn button cta-button mx-2"
                target="_blank"
              >
                {{ content.btnPrimary || 'Create a Form Now' }}
              </a>
              <a
                target="_blank"
                :href="
                  content.btnSecondaryLink ||
                  'https://app.zencal.io/u/ankit/formester'
                "
                class="btn button cta-button__invert mx-2"
              >
                {{ content.btnSecondary || 'Book a Demo' }}
              </a>
            </div>
            <nuxt-img
              src="/plane.png"
              alt="plane image on call to action section"
              class="plane position-absolute"
              loading="lazy"
            />
          </div>
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
      return this.ctaValue.title || []
    },
    description() {
      return this.ctaValue.description || ''
    },
    buttons() {
      return this.ctaValue.buttons || []
    },
  },
}
</script>

<style scoped>
.section__subtitle {
  font-size: 20px;
}

.call-to-action-section {
  padding-bottom: 50px;
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
  background-color: var(--clr-primary-light);
  font-size: var(--ft-md-btn);
  padding: 12px 24px;
  border-radius: 8px;
  color: var(--clr-primary);
  font-weight: 700;
}

.cta-button__invert:hover {
  background-color: var(--clr-primary-light-hover);
}

.plane {
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
}

.gap-3 {
  gap: 1rem;
}

@media (max-width: 1456px) {
  .plane {
    right: -5%;
  }
}
@media (max-width: 1400px) {
  .plane {
    right: -7%;
  }
}
@media (max-width: 1200px) {
  .plane {
    right: -10%;
  }
}
@media (max-width: 1017px) {
  .plane {
    display: none;
  }
}

@media (max-width: 575px) {
  .section__heading {
    font-size: 30px;
  }
  .section__subtitle {
    font-size: 16px;
  }
}
</style>
