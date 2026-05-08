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
          <a href="https://twitter.com/_Formester_" target="_blank" rel="noopener" aria-label="X / Twitter" class="site-footer__social-icon">
            <nuxt-img src="/social/twitter.svg" alt="X" width="16" height="16" loading="lazy" />
          </a>
          <a href="https://www.linkedin.com/company/formester-inc/" target="_blank" rel="noopener" aria-label="LinkedIn" class="site-footer__social-icon">
            <nuxt-img src="/social/linkedin.svg" alt="LinkedIn" width="16" height="16" loading="lazy" />
          </a>
          <a href="https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ" target="_blank" rel="noopener" aria-label="YouTube" class="site-footer__social-icon">
            <nuxt-img src="/social/youtube.svg" alt="YouTube" width="16" height="16" loading="lazy" />
          </a>
          <a href="https://instagram.com/_formester_" target="_blank" rel="noopener" aria-label="Instagram" class="site-footer__social-icon">
            <nuxt-img src="/social/instagram.svg" alt="Instagram" width="16" height="16" loading="lazy" />
          </a>
        </div>
      </div>

      <!-- Product -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Product</h3>
        <ul class="site-footer__links">
          <li><NuxtLink to="/features/" class="site-footer__link">Features</NuxtLink></li>
          <li><NuxtLink to="/ai-form-generator/" class="site-footer__link">AI Builder</NuxtLink></li>
          <li><NuxtLink to="/templates/" class="site-footer__link">Templates</NuxtLink></li>
          <li><NuxtLink to="/integrations/" class="site-footer__link">Integrations</NuxtLink></li>
          <li><NuxtLink to="/pricing/" class="site-footer__link">Pricing</NuxtLink></li>
          <li><NuxtLink to="/blog/" class="site-footer__link">Changelog</NuxtLink></li>
        </ul>
      </div>

      <!-- Solutions -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Solutions</h3>
        <ul class="site-footer__links">
          <li><NuxtLink to="/use-case/human-resource/" class="site-footer__link">HR &amp; People</NuxtLink></li>
          <li><NuxtLink to="/use-case/software-and-technology/" class="site-footer__link">Marketing</NuxtLink></li>
          <li><NuxtLink to="/use-case/" class="site-footer__link">Education</NuxtLink></li>
          <li><NuxtLink to="/use-case/" class="site-footer__link">Healthcare</NuxtLink></li>
          <li><NuxtLink to="/use-case/" class="site-footer__link">Operations</NuxtLink></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Resources</h3>
        <ul class="site-footer__links">
          <li><a href="https://docs.formester.com/" class="site-footer__link">Documentation</a></li>
          <li><a href="https://docs.formester.com/api/" class="site-footer__link">API Reference</a></li>
          <li><a href="https://help.formester.com/en/" class="site-footer__link">Help Center</a></li>
          <li><NuxtLink to="/blog/" class="site-footer__link">Blog</NuxtLink></li>
          <li><NuxtLink to="/templates/" class="site-footer__link">Form Library</NuxtLink></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">Company</h3>
        <ul class="site-footer__links">
          <li><NuxtLink to="/about-us/" class="site-footer__link">About</NuxtLink></li>
          <li><NuxtLink to="/case-study/" class="site-footer__link">Customers</NuxtLink></li>
          <li><NuxtLink to="/contact/" class="site-footer__link">Careers</NuxtLink></li>
          <li><NuxtLink to="/security/" class="site-footer__link">Security</NuxtLink></li>
          <li><NuxtLink to="/contact/" class="site-footer__link">Contact</NuxtLink></li>
        </ul>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="site-footer__bottom">
      <span class="site-footer__copy">© {{ currentYear }} Formester, Inc. All rights reserved.</span>
      <nav class="site-footer__legal">
        <NuxtLink to="/privacy/" class="site-footer__legal-link">Privacy</NuxtLink>
        <NuxtLink to="/terms-of-service/" class="site-footer__legal-link">Terms</NuxtLink>
        <NuxtLink to="/security/" class="site-footer__legal-link">Security</NuxtLink>
        <NuxtLink to="/status/" class="site-footer__legal-link">Status</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => Math.max(new Date().getFullYear(), 2026))
</script>

<style scoped>
.site-footer {
  background: #ffffff;
  border-top: 1px solid #e4e7ec;
  font-family: 'Inter', sans-serif;
}

.site-footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 40px 48px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 48px;
}

/* Brand column */
.site-footer__logo-link {
  display: inline-block;
  margin-bottom: 16px;
}

.site-footer__brand-desc {
  font-size: 14px;
  color: #667085;
  line-height: 1.65;
  max-width: 240px;
  margin-bottom: 20px;
}

.site-footer__socials {
  display: flex;
  gap: 8px;
}

.site-footer__social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #e4e7ec;
  background: #fff;
  transition: border-color 0.2s, background 0.2s;
}

.site-footer__social-icon:hover {
  border-color: #c7c4e8;
  background: #f9f8ff;
}

.site-footer__social-icon img {
  filter: brightness(0) saturate(100%) invert(45%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%);
  transition: filter 0.2s;
}

.site-footer__social-icon:hover img {
  filter: brightness(0) saturate(100%) invert(28%) sepia(60%) saturate(800%) hue-rotate(230deg) brightness(80%) contrast(100%);
}

/* Nav columns */
.site-footer__col-heading {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #98a2b3;
  margin-bottom: 16px;
}

.site-footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.site-footer__link {
  font-size: 14px;
  color: #344054;
  text-decoration: none;
  transition: color 0.15s;
}

.site-footer__link:hover {
  color: var(--clr-primary);
}

/* Bottom bar */
.site-footer__bottom {
  border-top: 1px solid #e4e7ec;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.site-footer__copy {
  font-size: 14px;
  color: #98a2b3;
}

.site-footer__legal {
  display: flex;
  gap: 24px;
}

.site-footer__legal-link {
  font-size: 14px;
  color: #667085;
  text-decoration: none;
  transition: color 0.15s;
}

.site-footer__legal-link:hover {
  color: var(--clr-primary);
}

/* Responsive */
@media (max-width: 1100px) {
  .site-footer__inner {
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    gap: 32px;
    padding: 56px 32px 40px;
  }
}

@media (max-width: 860px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 48px 28px 32px;
  }

  .site-footer__brand {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px 24px;
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

@media (max-width: 600px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
    padding: 40px 20px 24px;
    gap: 32px;
  }

  .site-footer__brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .site-footer__brand-desc {
    max-width: 100%;
    margin-bottom: 0;
  }

  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 20px;
    gap: 10px;
  }

  .site-footer__legal {
    flex-wrap: wrap;
    gap: 12px 20px;
  }

  .site-footer__col-heading {
    font-size: 11px;
  }

  .site-footer__link {
    font-size: 13px;
  }
}
</style>
