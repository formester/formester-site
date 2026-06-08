<template>
  <section
    class="call-to-action-section"
    :class="{ 'cta-v2--hidden': content.hidden }"
  >
    <div class="cta-v2__band">
      <div class="cta-v2__inner">
        <div class="cta-v2__copy">
          <h2 class="cta-v2__heading">
            <span v-if="content.heading">{{ content.heading }}</span>
            <span v-else-if="title && title.length">
              <span
                v-for="item in title"
                :key="item.id"
                :class="{ 'cta-v2__highlight': item.highlight }"
              >
                {{ item.text }}
              </span>
            </span>
            <span v-else>Ready to build your perfect form?</span>
          </h2>
          <p class="cta-v2__desc">
            <span>
              {{
                content.subHeading ||
                description ||
                'Formester is the easiest way to create forms, collect data and automate your workflow'
              }}
            </span>
          </p>
        </div>
        <div class="cta-v2__actions">
          <a
            :href="
              content.btnPrimaryLink ||
              'https://app.formester.com/users/sign_up'
            "
            class="cta-v2__btn cta-v2__btn--primary"
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
.call-to-action-section {
  width: 100%;
  padding: var(--space-16) var(--space-6);
  display: flex;
  justify-content: center;
}

.cta-v2--hidden {
  display: none;
}

.cta-v2__band {
  position: relative;
  width: 100%;
  max-width: 1180px;
  background-color: #0f0921;
  background-image: radial-gradient(
    ellipse 600px 400px at 70% 20%,
    rgba(127, 86, 217, 0.3),
    transparent 60%
  );
  border-radius: var(--r-3xl);
  overflow: hidden;
  padding: var(--space-20) var(--space-12);
}

.cta-v2__inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-12);
}

.cta-v2__copy {
  flex: 1 1 auto;
  max-width: 720px;
  text-align: left;
}

.cta-v2__heading {
  margin: 0;
  color: #ffffff;
  font-family: var(--font-primary);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: var(--fw-bold);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.cta-v2__highlight {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: var(--fw-regular);
  color: #ffffff;
}

.cta-v2__desc {
  margin: var(--space-4) 0 0;
  max-width: 640px;
  color: rgba(255, 255, 255, 0.74);
  font-family: var(--font-primary);
  font-size: var(--fs-md);
  line-height: 1.6;
}

.cta-v2__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}

.cta-v2__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: var(--r-full);
  font-family: var(--font-primary);
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.cta-v2__btn--primary {
  background-color: var(--violet-500);
  color: #ffffff;
}

.cta-v2__btn--primary:hover {
  background-color: var(--violet-600);
}

.cta-v2__btn--white {
  background-color: #ffffff;
  color: var(--fg-1);
}

@media (max-width: 991px) {
  .cta-v2__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-9);
  }
}

@media (max-width: 600px) {
  .call-to-action-section {
    padding: var(--space-12) var(--space-4);
  }

  .cta-v2__band {
    padding: var(--space-12) var(--space-6);
  }

  .cta-v2__inner {
    align-items: center;
    text-align: center;
  }

  .cta-v2__copy {
    text-align: center;
  }

  .cta-v2__actions {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }

  .cta-v2__btn {
    width: 100%;
  }
}
</style>
