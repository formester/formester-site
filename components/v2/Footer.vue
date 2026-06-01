<template>
  <footer class="site-footer">
    <div class="site-footer__inner">

      <!-- Brand column -->
      <div class="site-footer__brand">
        <NuxtLink to="/" class="site-footer__logo-link">
          <nuxt-img src="/logo.svg" alt="Formester" width="140" height="24" />
        </NuxtLink>
        <p class="site-footer__brand-desc">
          The AI form builder for teams that move fast — without breaking compliance.
        </p>
        <div class="site-footer__socials">
          <a href="https://twitter.com/_Formester_" target="_blank" rel="noopener" aria-label="X / Twitter"
            class="site-footer__social-icon">
            <img src="/social/twitter-light.svg" alt="X" :width="SOCIAL_ICON_SIZE" :height="SOCIAL_ICON_SIZE" />
          </a>
          <a href="https://www.linkedin.com/company/formester-inc/" target="_blank" rel="noopener" aria-label="LinkedIn"
            class="site-footer__social-icon">
            <img src="/social/linkedin-light.svg" alt="LinkedIn" :width="SOCIAL_ICON_SIZE" :height="SOCIAL_ICON_SIZE" />
          </a>
          <a href="https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ" target="_blank" rel="noopener"
            aria-label="YouTube" class="site-footer__social-icon">
            <img src="/social/youtube-light.svg" alt="YouTube" :width="SOCIAL_ICON_SIZE" :height="SOCIAL_ICON_SIZE" />
          </a>
          <a href="https://instagram.com/_formester_" target="_blank" rel="noopener" aria-label="Instagram"
            class="site-footer__social-icon">
            <img src="/social/instagram-light.svg" alt="Instagram" :width="SOCIAL_ICON_SIZE"
              :height="SOCIAL_ICON_SIZE" />
          </a>
          <a href="https://www.reddit.com/r/formester/" target="_blank" rel="noopener" aria-label="Reddit"
            class="site-footer__social-icon">
            <img src="/social/reddit-light.svg" alt="Reddit" :width="SOCIAL_ICON_SIZE" :height="SOCIAL_ICON_SIZE" />
          </a>
          <a href="https://www.facebook.com/formester" target="_blank" rel="noopener" aria-label="Facebook"
            class="site-footer__social-icon">
            <img src="/social/facebook-light.svg" alt="Facebook" :width="SOCIAL_ICON_SIZE" :height="SOCIAL_ICON_SIZE" />
          </a>
        </div>
        <a href="https://www.trustpilot.com/review/formester.com" target="_blank" class="site-footer__trustpilot">
          <img src="/trustpilot-footer-light.svg" alt="Trustpilot" width="260" height="36" loading="lazy" />
        </a>
      </div>

      <!-- Product -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Product</h3>
        <ul class="site-footer__links">
          <li>
            <NuxtLink to="/features/" class="site-footer__link">Features</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/integrations/" class="site-footer__link">Integrations</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pricing/" class="site-footer__link">Pricing</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Solutions -->
      <!-- TODO : need to bring back after adding pages for Healthcare and Education  -->
      <div class="site-footer__col" v-if="0">
        <h3 class="site-footer__col-heading">Solutions</h3>
        <ul class="site-footer__links">
          <li>
            <NuxtLink to="/use-case/human-resource/" class="site-footer__link">HR &amp; People</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/use-case/formester-for-training-and-assessments/" class="site-footer__link">Education</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/use-case/formester-for-compliance/" class="site-footer__link">Operations</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/use-case/" class="site-footer__link">Education</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/use-case/" class="site-footer__link">Healthcare</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- AI Builders -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">AI Builders</h3>
        <ul class="site-footer__links">
          <li>
            <NuxtLink to="/ai-form-generator/" class="site-footer__link">AI Form Generator</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ai-quiz-maker/" class="site-footer__link">AI Quiz Maker</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/build-conditional-logic-forms-with-ai/" class="site-footer__link">AI Conditional Logic
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ai-powered-multilingual-forms/" class="site-footer__link">AI Auto Translation</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/poll-maker/" class="site-footer__link">AI Poll Maker</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/test-creator/" class="site-footer__link">AI Test Creator</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ai-survey-generator/" class="site-footer__link">AI Survey Generator</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Resources</h3>
        <ul class="site-footer__links">
          <li>
            <NuxtLink to="/comparison-tool/" class="site-footer__link">Compare</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog/" class="site-footer__link">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/enterprise/" class="site-footer__link">Enterprise</NuxtLink>
          </li>
          <li><a href="https://docs.formester.com/formester-api.html" class="site-footer__link">API Docs</a></li>
          <li><a href="https://help.formester.com/en/" class="site-footer__link">Help Center</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Company</h3>
        <ul class="site-footer__links">
          <li>
            <NuxtLink to="/about-us/" class="site-footer__link">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/case-study/" class="site-footer__link">Customers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact/" class="site-footer__link">Careers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/security/" class="site-footer__link">Security</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact/" class="site-footer__link">Contact</NuxtLink>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="site-footer__bottom">
      <span class="site-footer__copy">© {{ currentYear }} Formester, Inc. All rights reserved.</span>
      <nav class="site-footer__legal">
        <NuxtLink to="/dpa/" class="site-footer__legal-link">DPA</NuxtLink>
        <NuxtLink to="/privacy/" class="site-footer__legal-link">Privacy</NuxtLink>
        <NuxtLink to="/terms-of-service/" class="site-footer__legal-link">Terms</NuxtLink>
        <NuxtLink to="/status/" class="site-footer__legal-link">Status</NuxtLink>
        <NuxtLink to="/security/" class="site-footer__legal-link">Security</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => Math.max(new Date().getFullYear(), 2026));
const SOCIAL_ICON_SIZE = 30;
</script>

<style scoped>
.site-footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-light);
  font-family: var(--font-primary);
}

.site-footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-10) var(--space-12);
  display: grid;
  grid-template-columns: 2fr auto auto auto auto auto;
  gap: var(--space-12);
}

/* Brand column */
.site-footer__logo-link {
  display: inline-block;
  margin-bottom: var(--space-4);
}

.site-footer__brand-desc {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  line-height: 1.65;
  max-width: 240px;
  margin-bottom: var(--space-5);
}

.site-footer__socials {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.site-footer__trustpilot {
  display: inline-block;
}

.site-footer__social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: var(--r-half);
  background: transparent;
  border: 1px solid var(--border-light);
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}

.site-footer__social-icon:hover {
  background: var(--gray-100);
  transform: translateY(2px);
}

/* Nav columns */
.site-footer__col-heading {
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #333;
  margin-bottom: var(--space-4);
}

.site-footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.site-footer__link {
  font-size: var(--fs-sm);
  color: var(--fg-strong);
  text-decoration: none;
  transition: color 0.15s;
  white-space: nowrap;
}

.site-footer__link:hover {
  color: var(--violet-500);
  text-decoration: underline;
}

/* Bottom bar */
.site-footer__bottom {
  border-top: 1px solid var(--border-light);
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-5) var(--space-10);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.site-footer__copy {
  font-size: var(--fs-sm);
  color: var(--fg-muted);
}

.site-footer__legal {
  display: flex;
  gap: var(--space-6);
}

.site-footer__legal-link {
  font-size: var(--fs-sm);
  color: var(--fg-3);
  text-decoration: none;
  transition: color 0.15s;
}

.site-footer__legal-link:hover {
  color: var(--violet-500);
}

/* Responsive */
@media (max-width: 1200px) {
  .site-footer__inner {
    grid-template-columns: 1.5fr auto auto auto auto auto;
    gap: var(--space-8);
    padding: var(--space-14) var(--space-8) var(--space-10);
  }
}

@media (max-width: 1000px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-10);
    padding: var(--space-12) var(--space-7) var(--space-8);
  }

  .site-footer__brand {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-4) var(--space-6);
    align-items: start;
  }

  .site-footer__logo-link {
    grid-column: 1;
    grid-row: 1;
  }

  .site-footer__brand-desc {
    grid-column: 2;
    grid-row: 1;
    max-width: 100%;
    margin-bottom: 0;
  }

  .site-footer__socials {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}

@media (max-width: 640px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
    padding: var(--space-10) var(--space-5) var(--space-6);
    gap: var(--space-8);
  }

  .site-footer__brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .site-footer__brand-desc {
    max-width: 100%;
    margin-bottom: 0;
  }

  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-4) var(--space-5);
    gap: var(--space-3);
  }

  .site-footer__legal {
    flex-wrap: wrap;
    gap: var(--space-3) var(--space-5);
  }
}
</style>
