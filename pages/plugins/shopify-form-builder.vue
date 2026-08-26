<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="✓ Free plan available · ✓ Higher submission limits · ✓ Fast and lightweight · ✓ Works smoothly with Shopify"
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
                <span class="fpl-eyebrow">Why Formester for Shopify</span>
                <h2>Benefits That Make Formester the Best Shopify Form Builder</h2>
                <p>
                  Build, customize, and manage Shopify forms with ease. Collect responses, accept payments, and connect
                  with your tools in one simple form builder.
                </p>
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
                  <h4>No Coding Needed</h4>
                  <p>
                    Create custom Shopify forms with your logo, colors, and fonts. Build order, contact, or registration
                    forms that match your store’s branding.
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
                  <h4>Ready-Made Templates</h4>
                  <p>
                    Choose from pre-built form templates for orders, registrations, surveys, and more, customize and
                    launch in minutes!
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" /></svg
                  ></span>
                  <h4>Easily Embed</h4>
                  <p>
                    Copy and paste the embed code into any page. Works with all Shopify themes, start collecting
                    customer responses instantly!
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" /></svg
                  ></span>
                  <h4>Accept secure payments</h4>
                  <p>
                    Formester integrates with PayPal & Stripe, letting you collect payments for orders, pre-orders, and
                    donations with ease.
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" /></svg
                  ></span>
                  <h4>Easily Integrate With 3rd-Party Apps</h4>
                  <p>
                    Connect with Google Sheets, Mailchimp & Salesforce to organize orders, manage leads, and send
                    automated customer updates.
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
                  ></span>
                  <h4>Spam-free & GDPR-compliant</h4>
                  <p>
                    Protect customer data and prevent fake submissions with built-in spam filters & Turnstile, ensuring
                    secure and valid responses.
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
          <section class="fpl-section fpl-section--grey" id="how">
            <div class="fpl-container">
              <div class="fpl-head">
                <span class="fpl-eyebrow">How it works</span>
                <h2>How to Install and Embed Shopify Forms with Formester</h2>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">1</span>
                  <h3>Install Formester from the Shopify App Store</h3>
                  <ul>
                    <li>Log in to your <strong>Shopify Admin Dashboard</strong>.</li>
                    <li>
                      Click <strong>Apps</strong> in the left sidebar and go to the
                      <strong
                        ><a
                          href="https://apps.shopify.com/collections/online-store-2?locale=en&amp;sort_by=installed"
                          target="_blank"
                          rel="noopener"
                          >Shopify App Store</a
                        ></strong
                      >.
                    </li>
                    <li>Search for <strong>Formester - Form Builder</strong> and select it.</li>
                    <li>Then <strong>"Install App"</strong> to complete the setup.</li>
                  </ul>
                </div>
                <div class="fpl-fs-media">
                  <img
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_formester_in_shopify_app_store_0dc449f8fc.svg"
                    alt="Install Formester from the Shopify App Store"
                  />
                </div>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">2</span>
                  <h3>Create and Manage Your Shopify Forms</h3>
                  <ul>
                    <li>Open Formester from your Shopify apps.</li>
                    <li>View all your existing Shopify forms in the dashboard.</li>
                    <li>Create a new form in just a few clicks.</li>
                  </ul>
                  <p>Click the three dots on any form to:</p>
                  <ul>
                    <li>Edit the form</li>
                    <li>View submissions</li>
                    <li>Adjust form settings</li>
                    <li>
                      Manage notifications and
                      <strong><a href="/features/autoresponder-email/">Email autoresponders</a></strong>
                    </li>
                    <li>Access integrations</li>
                  </ul>
                  <p><strong>Note:</strong> Advanced editing and settings may open in the main Formester platform.</p>
                </div>
                <div class="fpl-fs-media">
                  <img
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/1_2_9b4b790d49.svg"
                    alt="Create and Manage Your Shopify Forms"
                  />
                </div>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">3</span>
                  <h3>Embed Your Form</h3>
                  <ul>
                    <li>Click Add to Store to access embedding options.</li>
                    <li>
                      <strong>Form ID Embed:</strong> Copy the form ID, open Shopify’s Theme Editor → Apps → Formester,
                      and paste the ID. Customize display mode, width, and auto height.
                    </li>
                    <li>
                      <strong>Manual Embed:</strong> Copy the HTML code, add a Custom Liquid section in Shopify, and
                      paste it. Adjust colors, width, padding, and CSS as needed.
                    </li>
                    <li>
                      <strong>Hosted Link:</strong> Use a dedicated Formester page with a custom domain. Redirect users
                      to this page for standalone landing pages, external campaigns, or forms outside Shopify. Fully
                      customizable and mobile-ready.
                    </li>
                  </ul>
                </div>
                <div class="fpl-fs-media">
                  <img
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/2_72cb9a7e8a.svg"
                    alt="Embed Your Form"
                  />
                </div>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">4</span>
                  <h3>Manage and Analyze Responses</h3>
                  <ul>
                    <li>Your form is now live and ready to collect submissions.</li>
                  </ul>
                  <p><strong>Use Formester’s analytics tools to track:</strong></p>
                  <ul>
                    <li>Completion rates,</li>
                    <li>Drop-offs,</li>
                    <li>User interactions,</li>
                    <li>Optimize your forms based on these insights to increase engagement and conversions.</li>
                  </ul>
                </div>
                <div class="fpl-fs-media">
                  <img
                    src="https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_1036_9479ac6ada.svg"
                    alt="Manage and Analyze Responses"
                  />
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
                <span class="fpl-eyebrow">Advanced</span>
                <h2>Advanced Features for Shopify Forms</h2>
              </div>
              <div class="fpl-grid fpl-grid--3">
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path
                        d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"
                      /></svg
                  ></span>
                  <h4>AI Multi Lingual Translations</h4>
                  <p>
                    Formester makes reaching a global audience easier. With the
                    <strong><a href="/ai-powered-multilingual-forms/">AI multi-language translation</a></strong>
                    feature, you can create forms in multiple languages and cater to diverse customers. Perfect for
                    international businesses, e-commerce, or customer support teams.
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" /></svg
                  ></span>
                  <h4>Auto Unique ID</h4>
                  <p>
                    Automatically generate <strong><a href="/features/auto-unique-id/">unique IDs</a></strong> for each
                    form submission, improving your order management and helping you track responses with ease.
                  </p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
                  ></span>
                  <h4>Spam Protection</h4>
                  <p>
                    Formester offers numerous spam protection options such as Turnstile, invisible reCAPTCHA, and
                    AI-powered spam detection to make sure only the legitimate submissions are collected.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TestimonialWall
      description="Real reviews from teams using Formester to collect data across their stores and sites."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c5_title"
      :pickedReviews="c5_pickedReviews"
      :excludedReviews="c5_excludedReviews"
      class="page-component-item"
    />

    <IntegrationsGrid title="Explore more plugins" :integrations="c6_integrations" class="page-component-item" />

    <FaqSection centered :title="c7_title" :faqList="c7_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Add Formester to your Shopify store today"
      description="Install from the Shopify App Store, embed your first form, and start collecting orders and leads on the free plan."
      :buttons="c8_buttons"
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
  'Create custom Shopify forms in minutes without coding. Collect leads, order details, registrations, and payments easily with a fast and lightweight Shopify form builder built for growing stores.'
const c0_mockupHtml =
  '<img src="https://formester-strapi.s3.ap-south-1.amazonaws.com/an_illustration_of_formester_shopify_form_embedding_1353a43fdb.svg" alt="Formester forms embedded in a Shopify store" style="width:100%;max-width:480px;height:auto;display:block;margin:0 auto"/>'
const c0_title = [
  {
    id: 5290,
    text: 'Create Easy ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5291,
    text: 'Shopify Form Builder',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5292,
    text: ' for Your Shopify Store',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1872,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get started free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1873,
    link: '#how',
    text: 'See how it works',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 186,
  text: 'Shopify',
  tag: 'Plugins',
  link: '/plugins/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c5_title = [
  {
    id: 5287,
    text: 'Loved by Shopify ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5286,
    text: 'merchants',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c5_pickedReviews = []
const c5_excludedReviews = []
const c6_integrations = [
  {
    id: 329,
    name: 'WordPress',
    description: 'Embed forms on your WordPress site',
    link: '/plugins/wordpress/',
  },
  {
    id: 327,
    name: 'Wix',
    description: 'Put forms on your Wix site',
    link: '/plugins/wix-forms/',
  },
  {
    id: 328,
    name: 'Webflow',
    description: 'Embed forms on your Webflow site',
    link: '/plugins/webflow/',
  },
]
const c7_title = [
  {
    id: 5288,
    text: 'Shopify form builder ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5289,
    text: 'FAQs',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c7_faqList = [
  {
    id: 2852,
    header: 'What is the best form builder app for Shopify?',
    body: 'Formester is one of the best form builder apps for Shopify to create custom forms without coding. You can build contact forms, order forms, registration forms, and payment forms easily and manage all submissions in one place.',
    body_markdown:
      'Formester is one of the best form builder apps for Shopify to create custom forms without coding. You can build contact forms, order forms, registration forms, and payment forms easily and manage all submissions in one place.',
    list: [],
  },
  {
    id: 2849,
    header: 'Does Shopify have a built-in form builder?',
    body: 'Yes, Shopify has a basic form builder for simple contact forms. But for advanced features like custom fields, payments, integrations, and automation, many store owners use Formester to create more flexible Shopify forms.',
    body_markdown:
      'Yes, Shopify has a basic form builder for simple contact forms. But for advanced features like custom fields, payments, integrations, and automation, many store owners use Formester to create more flexible Shopify forms.',
    list: [],
  },
  {
    id: 2853,
    header: 'Why use Formester instead of Shopify’s default form builder?',
    body: 'Formester offers more customization, integrations, payment collection, conditional logic, and automation compared to Shopify’s default form builder. It gives you full control to create forms that match your store’s needs.',
    body_markdown:
      'Formester offers more customization, integrations, payment collection, conditional logic, and automation compared to Shopify’s default form builder. It gives you full control to create forms that match your store’s needs.',
    list: [],
  },
  {
    id: 2850,
    header: 'Do I need coding skills to create Shopify forms with Formester?',
    body: 'No. Formester is a no-code Shopify form builder. You can create and customize forms using a simple drag and drop builder without any technical skills.',
    body_markdown:
      'No. Formester is a no-code Shopify form builder. You can create and customize forms using a simple drag and drop builder without any technical skills.',
    list: [],
  },
  {
    id: 2854,
    header: 'Can I create different types of Shopify forms?',
    body: 'Yes. You can create contact forms, order forms, registration forms, payment forms, feedback forms, and more using Formester. All forms can be customized based on your store’s needs.',
    body_markdown:
      'Yes. You can create contact forms, order forms, registration forms, payment forms, feedback forms, and more using Formester. All forms can be customized based on your store’s needs.',
    list: [],
  },
  {
    id: 2851,
    header: 'Can I collect payments through Shopify forms?',
    body: 'Yes. Formester allows you to collect payments directly through Shopify forms using secure integrations like Stripe and PayPal. You can create order forms, booking forms, or donation forms easily.',
    body_markdown:
      'Yes. Formester allows you to collect payments directly through Shopify forms using secure integrations like Stripe and PayPal. You can create order forms, booking forms, or donation forms easily.',
    list: [],
  },
  {
    id: 2855,
    header: 'Are Shopify forms created with Formester secure?',
    body: 'Yes. Formester uses SSL encryption, spam protection, and GDPR compliance to keep your Shopify form data safe and secure.',
    body_markdown:
      'Yes. Formester uses SSL encryption, spam protection, and GDPR compliance to keep your Shopify form data safe and secure.',
    list: [],
  },
]
const c8_buttons = [
  {
    id: 1870,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1871,
    link: '/pricing/',
    text: 'See pricing',
    type: 'Secondary',
    showArrow: false,
  },
]

useHead({
  title: 'Create Shopify Forms Easily with the Best Shopify Form Builder | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/plugins/shopify-form-builder/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-17T07:13:46.504Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Create custom Shopify forms in minutes with the best Shopify form builder. Collect leads, order details, and payments easily. Fast, lightweight, and free to start.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Create Shopify Forms Easily with the Best Shopify Form Builder | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/plugins/shopify-form-builder/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Create Shopify Forms Easily with the Best Shopify Form Builder | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Create custom Shopify forms in minutes with the best Shopify form builder. Collect leads, order details, and payments easily. Fast, lightweight, and free to start.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Shopify form builder',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/plugins/shopify-form-builder/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Create Shopify Forms Easily with the Best Shopify Form Builder | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Create custom Shopify forms in minutes with the best Shopify form builder. Collect leads, order details, and payments easily. Fast, lightweight, and free to start.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Shopify form builder',
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
        'Shopify form builder',
        'Shopify forms',
        'Shopify contact form',
        'order form',
        'no-code forms',
        'Shopify app',
        'embed forms Shopify',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the best form builder app for Shopify?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is one of the best form builder apps for Shopify to create custom forms without coding. You can build contact forms, order forms, registration forms, and payment forms easily and manage all submissions in one place."}}, {"@type": "Question", "name": "Does Shopify have a built-in form builder?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Shopify has a basic form builder for simple contact forms. But for advanced features like custom fields, payments, integrations, and automation, many store owners use Formester to create more flexible Shopify forms."}}, {"@type": "Question", "name": "Why use Formester instead of Shopify\\u2019s default form builder?", "acceptedAnswer": {"@type": "Answer", "text": "Formester offers more customization, integrations, payment collection, conditional logic, and automation compared to Shopify\\u2019s default form builder. It gives you full control to create forms that match your store\\u2019s needs."}}, {"@type": "Question", "name": "Do I need coding skills to create Shopify forms with Formester?", "acceptedAnswer": {"@type": "Answer", "text": "No. Formester is a no-code Shopify form builder. You can create and customize forms using a simple drag and drop builder without any technical skills."}}, {"@type": "Question", "name": "Can I create different types of Shopify forms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can create contact forms, order forms, registration forms, payment forms, feedback forms, and more using Formester. All forms can be customized based on your store\\u2019s needs."}}, {"@type": "Question", "name": "Can I collect payments through Shopify forms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Formester allows you to collect payments directly through Shopify forms using secure integrations like Stripe and PayPal. You can create order forms, booking forms, or donation forms easily."}}, {"@type": "Question", "name": "Are Shopify forms created with Formester secure?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Formester uses SSL encryption, spam protection, and GDPR compliance to keep your Shopify form data safe and secure."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Plugins", "item": "https://formester.com/plugins/"}, {"@type": "ListItem", "position": 2, "name": "Shopify", "item": "https://formester.com/plugins/shopify-form-builder/"}]}',
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

.fpl-fs-row {
  display: grid;
  grid-template-columns: 1fr minmax(0, 40%);
  gap: 36px;
  align-items: center;
  background: #fff;
  border: 1px solid var(--fpl-border);
  border-radius: var(--fpl-r-xl);
  padding: 28px 30px;
  margin-bottom: 20px;
  box-shadow: var(--fpl-shadow-xs);
}
.fpl-fs-row:last-child {
  margin-bottom: 0;
}
.fpl-fs-media {
  background: var(--fpl-grey50);
  border: 1px solid var(--fpl-border);
  border-radius: var(--fpl-r-lg);
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 170px;
}
.fpl-fs-media img {
  max-width: 100%;
  max-height: 180px;
  height: auto;
}
.fpl-fs-body h3 {
  margin: 6px 0 6px;
}
.fpl-fs-body ul {
  margin: 10px 0 0;
  padding-left: 18px;
}
.fpl-fs-body li {
  margin: 6px 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--fpl-fg2);
}
.fpl-fs-body > p {
  margin: 14px 0 2px;
  font-size: 15px;
  color: var(--fpl-fg1);
}
@media (max-width: 860px) {
  .fpl-fs-row {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 22px;
  }
  .fpl-fs-media {
    order: -1;
  }
}
</style>
