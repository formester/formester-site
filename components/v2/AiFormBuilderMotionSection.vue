<template>
  <section id="ai-form-builder-demo" class="ai-motion-section">
    <div class="ai-motion-section__inner">
      <div class="ai-motion-section__intro">
        <p class="ai-motion-section__eyebrow">AI Form Builder</p>
        <h2 class="ai-motion-section__heading">From an idea to a working form</h2>
        <p class="ai-motion-section__description">
          Describe what you need. Formester’s AI agent structures the questions, adds logic and validation, and gives
          you a form that is ready to edit and publish.
        </p>
      </div>

      <div class="ai-motion-section__demo">
        <iframe
          src="/ai-form-builder-motion/index.html"
          title="Formester AI agent building and reviewing a client onboarding form"
          loading="lazy"
          scrolling="no"
          class="ai-motion-section__frame"
        />
        <AiFormBuilderMobileGraphic class="ai-motion-section__mobile-graphic" />
      </div>

      <div class="ai-motion-section__cta-row">
        <FButton href="/ai-form-generator/" variant="primary" size="lg">
          Try the AI form builder
          <IconArrowRight />
        </FButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import FButton from '@/components/UI/FButton.vue'
import IconArrowRight from '@/components/icons/ArrowRightIcon.vue'
import AiFormBuilderMobileGraphic from '@/components/v2/AiFormBuilderMobileGraphic.vue'
</script>

<style scoped>
.ai-motion-section {
  padding: var(--space-24) var(--space-6);
  overflow: hidden;
  background: #fff;
}

.ai-motion-section__inner {
  max-width: 1280px;
  margin: 0 auto;
}

.ai-motion-section__intro {
  max-width: 760px;
  margin: 0 auto var(--space-12);
  text-align: center;
}

.ai-motion-section__eyebrow {
  margin: 0 0 var(--space-4);
  color: var(--violet-600);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.ai-motion-section__heading {
  margin: 0;
  color: var(--fg-1);
  font-size: clamp(34px, 4vw, 48px);
  font-weight: var(--fw-bold);
  letter-spacing: -0.8px;
  line-height: 1.12;
  text-wrap: balance;
}

.ai-motion-section__description {
  margin: var(--space-5) auto 0;
  max-width: 640px;
  color: var(--fg-2);
  font-size: var(--fs-md);
  line-height: 1.7;
}

.ai-motion-section__cta-row {
  display: flex;
  justify-content: center;
  margin-top: var(--space-10);
}

.ai-motion-section__demo {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--r-2xl);
}

.ai-motion-section__frame {
  display: block;
  width: 100%;
  height: clamp(540px, calc((100vw - 48px) * 0.625 + 130px), 830px);
  overflow: hidden;
  background: #fff;
  border: 0;
}

.ai-motion-section__mobile-graphic {
  display: none;
}

@media (max-width: 640px) {
  .ai-motion-section {
    padding: var(--space-16) var(--space-5);
  }

  .ai-motion-section__heading {
    font-size: 34px;
  }

  .ai-motion-section__intro {
    margin-bottom: var(--space-8);
  }

  .ai-motion-section__cta-row {
    margin-top: var(--space-8);
  }

  .ai-motion-section__frame {
    display: none;
  }

  .ai-motion-section__mobile-graphic {
    display: block;
  }
}
</style>
