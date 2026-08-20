<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="✓ Free plan · ✓ No code required · ✓ WordPress.com &amp; self-hosted"
      blobColorA="#f5eeff"
      blobColorB="#f1ebff"
      blobColorC="#f4efff"
      :mockupHtml="c0_mockupHtml"
      layout="split"
      :title="c0_title"
      :buttons="c0_buttons"
      :badge="c0_badge"
      :tabCardContent="c0_tabCardContent"
      class="page-component-item"
    />

    <TrustSeals
      label="Trusted by 10,000+ teams collecting data on the web"
      showTrustBadges
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="fpl">
          <section class="fpl-section">
            <div class="fpl-container">
              <div class="fpl-head">
                <span class="fpl-eyebrow">Forms in WordPress</span>
                <h2>Any form your WordPress site needs</h2>
              </div>
              <div style="max-width: 760px; margin: 0 auto; text-align: center">
                <p>
                  Use Formester's versatile template library to add any form to your WordPress blog or site. Use our
                  WordPress plugin to embed a Contact Form, Feedback Form or Lead Generation Form in the WordPress site
                  and automate data collection.
                </p>
                <p>
                  Create a new form on Formester or customise any of our pre-designed templates using the intuitive drag
                  and drop form builder. Our WordPress plugin enables you to easily add the web form to a WordPress
                  powered website without any need of coding skills or database backend.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="fpl">
          <section class="fpl-section fpl-section--grey" id="how">
            <div class="fpl-container">
              <div class="fpl-head">
                <span class="fpl-eyebrow">How it works</span>
                <h2>Steps to embed a Formester form</h2>
                <p>From a blank page to a live form in a couple of minutes.</p>
              </div>
              <div class="fpl-steps">
                <div class="fpl-step">
                  <div class="fpl-step-img">
                    <img src="/plugins/wordpress/steps/step1.svg" alt="Install the Formester plugin" />
                  </div>
                  <div class="fpl-step-body">
                    <span class="fpl-num">1</span>
                    <h3>Install the Formester plugin</h3>
                    <p>
                      Visit WordPress.org or WordPress.com to install the Formester plugin. Log in to your WordPress
                      account and activate the plugin after installation.
                    </p>
                  </div>
                </div>
                <div class="fpl-step">
                  <div class="fpl-step-img">
                    <img src="/plugins/wordpress/steps/step2.svg" alt="Add the Formester block" />
                  </div>
                  <div class="fpl-step-body">
                    <span class="fpl-num">2</span>
                    <h3>Add the Formester block</h3>
                    <p>
                      Locate and select the Formester Block in your WordPress editor. Click on it to launch the plugin
                      and easily integrate a Formester form into your page.
                    </p>
                  </div>
                </div>
                <div class="fpl-step">
                  <div class="fpl-step-img"><img src="/plugins/wordpress/steps/step3.svg" alt="Embed your form" /></div>
                  <div class="fpl-step-body">
                    <span class="fpl-num">3</span>
                    <h3>Embed your form</h3>
                    <p>
                      You can also embed a form by pasting your form's shared URL into the WordPress editor. Ensure that
                      your contact form is published before embedding in the WordPress site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="fpl">
          <section class="fpl-section">
            <div class="fpl-container">
              <div class="fpl-split fpl-split--rev">
                <div class="fpl-split-media">
                  <img src="/plugins/wordpress/wordpress-website-illustration.svg" alt="A WordPress website" />
                </div>
                <div class="fpl-split-body">
                  <span class="fpl-eyebrow">The platform</span>
                  <h2>What is WordPress?</h2>
                  <p>
                    WordPress is a widely used CMS that allows people to build, host and manage websites or blogs.
                    WordPress users can manage their website content and integrate WordPress with other tools or
                    applications to streamline their workflow. All websites often need a contact, survey or feedback
                    form to collect important information.
                  </p>
                  <p>
                    Integrating Formester forms with WordPress enables the users to interact with your website, upload
                    media, submit feedback or provide personal details through contact form.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="fpl">
          <section class="fpl-section fpl-section--grey">
            <div class="fpl-container">
              <div class="fpl-head">
                <span class="fpl-eyebrow">Use cases</span>
                <h2>What WordPress teams build with Formester</h2>
                <p>Replace clunky form plugins and manual data wrangling with one embeddable builder.</p>
              </div>
              <div class="fpl-grid">
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" /></svg
                  ></span>
                  <h4>Contact &amp; support</h4>
                  <p>Let visitors reach you from any page. Route submissions to the right inbox automatically.</p>
                  <div class="fpl-tags">
                    <span class="fpl-tag">Contact</span><span class="fpl-tag">Support</span
                    ><span class="fpl-tag">Get a quote</span>
                  </div>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                      <path d="M6 3H3v7a9 9 0 0 0 18 0V3h-3" /></svg
                  ></span>
                  <h4>Lead capture</h4>
                  <p>Turn blog traffic into leads with embedded sign-up and gated-content forms.</p>
                  <div class="fpl-tags">
                    <span class="fpl-tag">Newsletter</span><span class="fpl-tag">Demo request</span
                    ><span class="fpl-tag">Waitlist</span>
                  </div>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path
                        d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"
                      /></svg
                  ></span>
                  <h4>Feedback &amp; surveys</h4>
                  <p>Collect feedback, run surveys and measure satisfaction without leaving WordPress.</p>
                  <div class="fpl-tags">
                    <span class="fpl-tag">NPS</span><span class="fpl-tag">Survey</span
                    ><span class="fpl-tag">Feedback</span>
                  </div>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" /></svg
                  ></span>
                  <h4>Registrations &amp; payments</h4>
                  <p>Take event sign-ups, bookings and payments with native Stripe &amp; PayPal.</p>
                  <div class="fpl-tags">
                    <span class="fpl-tag">Event</span><span class="fpl-tag">Booking</span
                    ><span class="fpl-tag">Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
        <div class="fpl">
          <section class="fpl-section">
            <div class="fpl-container">
              <div class="fpl-head">
                <span class="fpl-eyebrow">Features of Formester</span>
                <h2>Everything you need to collect data on WordPress</h2>
              </div>
              <div class="fpl-grid fpl-grid--3">
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <circle cx="9" cy="6" r="1" />
                      <circle cx="9" cy="12" r="1" />
                      <circle cx="9" cy="18" r="1" />
                      <circle cx="15" cy="6" r="1" />
                      <circle cx="15" cy="12" r="1" />
                      <circle cx="15" cy="18" r="1" /></svg
                  ></span>
                  <h4>Drag &amp; drop builder</h4>
                  <p>
                    Build and brand your form on Formester's editor, then embed it with one block — no PHP, no
                    shortcodes to memorise.
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" /></svg
                  ></span>
                  <h4>Template library</h4>
                  <p>
                    Start from contact, feedback, lead-gen, registration or payment templates and customise to match
                    your site.
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
                  ></span>
                  <h4>AI spam protection</h4>
                  <p>Keep junk submissions out automatically, so your inbox and database stay clean.</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" /></svg
                  ></span>
                  <h4>Built-in analytics</h4>
                  <p>See views, submissions and conversion rates for every form, right out of the box.</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" /></svg
                  ></span>
                  <h4>Payments</h4>
                  <p>Collect one-off or recurring payments with native Stripe &amp; PayPal, securely encrypted.</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg
                  ></span>
                  <h4>Autoresponders</h4>
                  <p>Send instant confirmation emails and route notifications to your team on every submission.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TestimonialWall
      description="Real reviews from teams using Formester to collect data across their websites and apps."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c7_title"
      :pickedReviews="c7_pickedReviews"
      :excludedReviews="c7_excludedReviews"
      class="page-component-item"
    />

    <IntegrationsGrid title="Explore more plugins" :integrations="c8_integrations" class="page-component-item" />

    <FaqSection centered :title="c9_title" :faqList="c9_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Add Formester to WordPress today"
      description="Install the plugin, embed your first form, and start collecting responses on the free plan."
      :buttons="c10_buttons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid.vue'
import TestimonialWall from '@/components/v2/TestimonialWall.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Add a contact, feedback, lead-capture or payment form to any WordPress page or post in minutes — no code, no database wiring. Build it on Formester, drop in the block, publish.'
const c0_mockupHtml =
  '<img src="/plugins/wordpress/formester-plus-wordpress.svg" alt="Formester forms inside WordPress" style="width:100%;max-width:480px;height:auto;display:block;margin:0 auto"/>'
const c0_title = [
  {
    id: 5312,
    text: 'Embed beautiful forms on your ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5311,
    text: 'WordPress',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5313,
    text: ' site',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1885,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get started free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1884,
    link: '#how',
    text: 'See how it works',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 189,
  text: 'WordPress',
  tag: 'Plugins',
  link: '/plugins/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c7_title = [
  {
    id: 5308,
    text: 'Teams ship forms faster ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5307,
    text: 'with Formester',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c7_pickedReviews = []
const c7_excludedReviews = []
const c8_integrations = [
  {
    id: 337,
    name: 'Webflow',
    description: 'Embed forms on your Webflow site',
    link: '/plugins/webflow/',
  },
  {
    id: 336,
    name: 'Shopify',
    description: 'Add forms to your Shopify store',
    link: '/plugins/shopify-form-builder/',
  },
  {
    id: 338,
    name: 'Wix',
    description: 'Put forms on your Wix site',
    link: '/plugins/wix-forms/',
  },
]
const c9_title = [
  {
    id: 5310,
    text: 'WordPress plugin ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5309,
    text: 'FAQs',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c9_faqList = [
  {
    id: 2869,
    header: 'How can I integrate Formester forms with my WordPress website or blog?',
    body: 'Integrating Formester forms with WordPress is quick and easy. Use our WordPress plugin to embed a Contact Form, Feedback Form, or Lead Generation Form on your WordPress site without any coding skills. Simply create a new form on Formester or customize a pre-designed template using the intuitive drag and drop form builder.',
    body_markdown:
      'Integrating Formester forms with WordPress is quick and easy. Use our WordPress plugin to embed a Contact Form, Feedback Form, or Lead Generation Form on your WordPress site without any coding skills. Simply create a new form on Formester or customize a pre-designed template using the intuitive drag and drop form builder.',
    list: [],
  },
  {
    id: 2867,
    header: 'What types of forms can I add to my WordPress blog or site with Formester?',
    body: 'Formester offers a versatile template library, allowing you to add various forms like Contact Forms, Feedback Forms, or Lead Generation Forms to your WordPress blog or site. Choose from our pre-designed templates and customize them to suit your needs.',
    body_markdown:
      'Formester offers a versatile template library, allowing you to add various forms like Contact Forms, Feedback Forms, or Lead Generation Forms to your WordPress blog or site. Choose from our pre-designed templates and customize them to suit your needs.',
    list: [],
  },
  {
    id: 2868,
    header: 'Why should I integrate Formester forms with my WordPress site?',
    body: 'Integrating Formester forms with WordPress enhances user interaction on your website. Users can upload media, submit feedback, or provide personal details through contact forms. This integration streamlines data collection and improves user engagement.',
    body_markdown:
      'Integrating Formester forms with WordPress enhances user interaction on your website. Users can upload media, submit feedback, or provide personal details through contact forms. This integration streamlines data collection and improves user engagement.',
    list: [],
  },
  {
    id: 2870,
    header: 'How can Formester and WordPress work together to improve my website workflow?',
    body: 'WordPress users can leverage Formester to streamline their workflow by managing website content effectively and integrating powerful forms seamlessly. Collecting payments, preventing spam, and analysing form submissions become hassle-free with this integration.',
    body_markdown:
      'WordPress users can leverage Formester to streamline their workflow by managing website content effectively and integrating powerful forms seamlessly. Collecting payments, preventing spam, and analysing form submissions become hassle-free with this integration.',
    list: [],
  },
]
const c10_buttons = [
  {
    id: 1883,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1882,
    link: '/pricing/',
    text: 'See pricing',
    type: 'Secondary',
    showArrow: false,
  },
]

useHead({
  title: 'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/plugins/wordpress/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-17T07:14:04.418Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Create & add stunning forms in minutes with Formester's intuitive builder & WordPress plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/plugins/wordpress/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Create & add stunning forms in minutes with Formester's intuitive builder & WordPress plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester WordPress plugin',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/plugins/wordpress/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Create & add stunning forms in minutes with Formester's intuitive builder & WordPress plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester WordPress plugin',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: 'Formester',
    },
    {
      hid: 'image',
      name: 'image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: [
        'Formester',
        'WordPress plugin',
        'contact form',
        'lead generation form',
        'online form builder',
        'drag & drop',
        'no-code forms',
        'WordPress forms',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How can I integrate Formester forms with my WordPress website or blog?", "acceptedAnswer": {"@type": "Answer", "text": "Integrating Formester forms with WordPress is quick and easy. Use our WordPress plugin to embed a Contact Form, Feedback Form, or Lead Generation Form on your WordPress site without any coding skills. Simply create a new form on Formester or customize a pre-designed template using the intuitive drag and drop form builder."}}, {"@type": "Question", "name": "What types of forms can I add to my WordPress blog or site with Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester offers a versatile template library, allowing you to add various forms like Contact Forms, Feedback Forms, or Lead Generation Forms to your WordPress blog or site. Choose from our pre-designed templates and customize them to suit your needs."}}, {"@type": "Question", "name": "Why should I integrate Formester forms with my WordPress site?", "acceptedAnswer": {"@type": "Answer", "text": "Integrating Formester forms with WordPress enhances user interaction on your website. Users can upload media, submit feedback, or provide personal details through contact forms. This integration streamlines data collection and improves user engagement."}}, {"@type": "Question", "name": "How can Formester and WordPress work together to improve my website workflow?", "acceptedAnswer": {"@type": "Answer", "text": "WordPress users can leverage Formester to streamline their workflow by managing website content effectively and integrating powerful forms seamlessly. Collecting payments, preventing spam, and analysing form submissions become hassle-free with this integration."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Plugins", "item": "https://formester.com/plugins/"}, {"@type": "ListItem", "position": 2, "name": "WordPress", "item": "https://formester.com/plugins/wordpress/"}]}',
  },
])
</script>

<style scoped>
.fpl {
  --fpl-font: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --fpl-fg1: #101828;
  --fpl-fg2: #475467;
  --fpl-fg3: #697586;
  --fpl-bg: #fff;
  --fpl-grey25: #fcfcfd;
  --fpl-grey50: #f9fafb;
  --fpl-grey100: #f2f4f7;
  --fpl-violet25: #f7f3ff;
  --fpl-violet50: #f0ebfa;
  --fpl-violet100: #f4ebff;
  --fpl-violet500: #7f56d9;
  --fpl-violet600: #6434d0;
  --fpl-violet700: #53389e;
  --fpl-border: #eaecf0;
  --fpl-border-dk: #d0d5dd;
  --fpl-r: 8px;
  --fpl-r-lg: 12px;
  --fpl-r-xl: 16px;
  --fpl-r-full: 9999px;
  --fpl-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  --fpl-shadow-lg: 0 8px 24px -4px rgba(16, 24, 40, 0.08), 0 4px 8px -2px rgba(16, 24, 40, 0.04);
  --fpl-accent: #21759b;
}
.fpl,
.fpl * {
  box-sizing: border-box;
}
.fpl {
  font-family: var(--fpl-font);
  color: var(--fpl-fg1);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.fpl h1,
.fpl h2,
.fpl h3,
.fpl h4 {
  color: var(--fpl-fg1);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
  font-weight: 600;
  line-height: 1.2;
}
.fpl h2 {
  font-size: clamp(26px, 3.2vw, 34px);
}
.fpl h3 {
  font-size: 20px;
}
.fpl h4 {
  font-size: 17px;
}
.fpl p {
  color: var(--fpl-fg2);
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.7;
}
.fpl a {
  color: var(--fpl-violet600);
  text-decoration: none;
}
.fpl a:hover {
  color: var(--fpl-violet700);
}
.fpl-container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
}
.fpl-section {
  padding: 72px 0;
}
.fpl-section--grey {
  background: var(--fpl-grey50);
  border-top: 1px solid var(--fpl-border);
  border-bottom: 1px solid var(--fpl-border);
}
.fpl-head {
  max-width: 680px;
  margin: 0 auto 44px;
  text-align: center;
}
.fpl-head p {
  font-size: 17px;
}
.fpl-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fpl-violet600);
  margin-bottom: 14px;
}
.fpl-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 22px;
  border-radius: var(--fpl-r);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.14s ease;
}
.fpl-btn--primary {
  background: var(--fpl-violet600);
  color: #fff;
}
.fpl-btn--primary:hover {
  background: var(--fpl-violet700);
  color: #fff;
}
.fpl-btn--secondary {
  background: #fff;
  color: var(--fpl-fg1);
  border-color: var(--fpl-border-dk);
  box-shadow: var(--fpl-shadow-xs);
}
.fpl-btn--secondary:hover {
  background: var(--fpl-grey50);
}
/* hero */
.fpl-hero {
  position: relative;
  overflow: hidden;
  padding: 80px 0 56px;
}
.fpl-hero::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 560px;
  background:
    radial-gradient(ellipse 680px 320px at 82% 8%, rgba(33, 117, 155, 0.07), transparent 70%),
    linear-gradient(180deg, var(--fpl-violet25), rgba(247, 243, 255, 0));
  pointer-events: none;
}
.fpl-hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 52px;
  align-items: center;
}
.fpl-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid var(--fpl-border);
  box-shadow: var(--fpl-shadow-xs);
  border-radius: var(--fpl-r-full);
  padding: 5px 14px 5px 6px;
  font-size: 13px;
  font-weight: 500;
  color: #344054;
  margin-bottom: 20px;
}
.fpl-pill img {
  width: 18px;
  height: 18px;
}
.fpl-hero h1 {
  font-size: clamp(36px, 4.6vw, 52px);
  line-height: 1.08;
  margin-bottom: 18px;
  text-wrap: balance;
}
.fpl-hero h1 i {
  font-style: normal;
  color: var(--fpl-violet600);
}
.fpl-lede {
  font-size: 18px;
  line-height: 1.6;
  color: var(--fpl-fg2);
  margin-bottom: 26px;
  max-width: 540px;
}
.fpl-hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 22px;
}
.fpl-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  color: var(--fpl-fg3);
}
.fpl-hero-meta strong {
  color: var(--fpl-fg1);
}
.fpl-hero-art {
  display: flex;
  justify-content: center;
}
.fpl-hero-art img {
  width: 100%;
  max-width: 440px;
  height: auto;
}
/* split content rows */
.fpl-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.fpl-split--rev .fpl-split-media {
  order: 2;
}
.fpl-split-media img {
  width: 100%;
  max-width: 460px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.fpl-split-body h2 {
  margin-bottom: 16px;
}
/* steps */
.fpl-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.fpl-step {
  background: #fff;
  border: 1px solid var(--fpl-border);
  border-radius: var(--fpl-r-xl);
  overflow: hidden;
  box-shadow: var(--fpl-shadow-xs);
}
.fpl-step-img {
  background: var(--fpl-grey50);
  border-bottom: 1px solid var(--fpl-border);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}
.fpl-step-img img {
  max-width: 100%;
  max-height: 150px;
  height: auto;
}
.fpl-step-body {
  padding: 20px 22px 24px;
}
.fpl-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--fpl-violet50);
  color: var(--fpl-violet600);
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 12px;
}
/* card grids */
.fpl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.fpl-grid--3 {
  grid-template-columns: repeat(3, 1fr);
}
.fpl-card {
  background: #fff;
  border: 1px solid var(--fpl-border);
  border-radius: var(--fpl-r-xl);
  padding: 24px;
}
.fpl-ic {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--fpl-violet50);
  color: var(--fpl-violet600);
  margin-bottom: 14px;
}
.fpl-ic svg {
  width: 22px;
  height: 22px;
}
.fpl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}
.fpl-tag {
  font-size: 12px;
  font-weight: 600;
  color: var(--fpl-violet700);
  background: var(--fpl-violet50);
  border-radius: var(--fpl-r-full);
  padding: 3px 10px;
}
@media (max-width: 860px) {
  .fpl-hero-inner,
  .fpl-split {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .fpl-hero-art {
    order: -1;
  }
  .fpl-split--rev .fpl-split-media {
    order: -1;
  }
  .fpl-steps,
  .fpl-grid,
  .fpl-grid--3 {
    grid-template-columns: 1fr;
  }
  .fpl-section {
    padding: 52px 0;
  }
  .fpl-hero {
    padding: 48px 0 36px;
  }
}
</style>
