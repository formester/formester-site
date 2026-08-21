<template>
  <div>
    <HeroV2
      description="Add online forms to your Webflow website with Formester."
      trustText="✓ Free plan · ✓ No code required · ✓ Works on any Webflow site"
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
                <span class="fpl-eyebrow">Forms in Webflow</span>
                <h2>Formester Forms in Webflow</h2>
              </div>
              <div class="fpl-prose">
                <p>
                  Use Formester to add personalized forms to Webflow with our form builder plugin. Choose from our
                  professionally designed template library and add any online form, survey, poll or quiz to webflow.
                  Improve user experience and simplify data collection.
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
                <h2>3 simple steps to integrate Formester in Webflow</h2>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">1</span>
                  <p>
                    Sign up to a Formester account for free and build an online form you want to integrate. You can also
                    select any pre-designed template from our template library. Once your online form is ready, click on
                    the "Embed" tab and copy the provided embed code.
                  </p>
                </div>
                <div class="fpl-fs-media"><img src="/plugins/webflow/steps/step1.svg" alt="Step 1" /></div>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">2</span>
                  <p>
                    Open your Webflow project, locate the 'Embed' element and drag it onto the desired spot on your
                    webflow site. Once the element is in place, access its settings and paste the copied embed code from
                    Formester into the designated field.
                  </p>
                </div>
                <div class="fpl-fs-media"><img src="/plugins/webflow/steps/step2.svg" alt="Step 2" /></div>
              </div>
              <div class="fpl-fs-row">
                <div class="fpl-fs-body">
                  <span class="fpl-num">3</span>
                  <p>
                    Save the changes in Webflow and publish your website to make the form live. Start collecting leads
                    and engaging visitors with beautiful online forms from Formester!
                  </p>
                </div>
                <div class="fpl-fs-media"><img src="/plugins/webflow/steps/step3.svg" alt="Step 3" /></div>
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
                  <img src="/plugins/webflow/webflow-website-illustration.svg" alt="A Webflow website" />
                </div>
                <div class="fpl-split-body">
                  <span class="fpl-eyebrow">The platform</span>
                  <h2>What is Webflow?</h2>
                  <p>
                    Webflow is a No-Code tool that lets you build, customize and host websites without any requirement
                    of coding knowledge. It's a powerful platform that lets you create custom websites with
                    pixel-perfect design and animations. Webflow also has a Content Management System (CMS), so you can
                    easily manage your website content.
                  </p>
                  <p>
                    Effortlessly collect feedback, personal details, media uploads, or generate leads through intuitive
                    forms that blend into your website's experience.
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
                <span class="fpl-eyebrow">Features of Formester</span>
                <h2>Everything you need to collect data on Webflow</h2>
              </div>
              <div class="fpl-grid fpl-grid--3">
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" /></svg
                  ></span>
                  <h4>Order Processing</h4>
                  <p>Effortless process orders and accept payments with multiple integrations.</p>
                </div>
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
                  <h4>White Labeling</h4>
                  <p>Customize all elements of the form to match your company branding.</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
                  ></span>
                  <h4>AI Powered Spam Protection</h4>
                  <p>Secure comments and online forms with AI Spam Protection</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" /></svg
                  ></span>
                  <h4>HTML Form Backend</h4>
                  <p>Manipulate the HTML backend for complete control over your web forms.</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg
                  ></span>
                  <h4>Conditional Auto-Responder</h4>
                  <p>Set multiple autoresponders for a personalized user experience.</p>
                </div>
                <div class="fpl-card">
                  <span class="fpl-ic"
                    ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" /></svg
                  ></span>
                  <h4>Form Analytics</h4>
                  <p>Collect powerful form analytics for actionable insights.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <TestimonialWall
      description="Real reviews from teams using Formester to collect data across their sites and apps."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c6_title"
      :pickedReviews="c6_pickedReviews"
      :excludedReviews="c6_excludedReviews"
      class="page-component-item"
    />

    <IntegrationsGrid title="Explore more plugins" :integrations="c7_integrations" class="page-component-item" />

    <FaqSection centered :title="c8_title" :faqList="c8_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Add Formester to your Webflow site today"
      description="Build your first form, embed it on your Webflow site, and start collecting leads on the free plan."
      :buttons="c9_buttons"
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

const c0_mockupHtml =
  '<img src="/plugins/webflow/formester-plus-webflow.svg" alt="Formester forms inside Webflow" style="width:100%;max-width:460px;height:auto;display:block;margin:0 auto"/>'
const c0_title = [
  {
    id: 5299,
    text: 'Formester and ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5297,
    text: 'Webflow',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5298,
    text: ' Integration',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1876,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get started free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1877,
    link: '#how',
    text: 'See how it works',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 187,
  text: 'Webflow',
  tag: 'Plugins',
  link: '/plugins/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c6_title = [
  {
    id: 5294,
    text: 'Loved by Webflow ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5293,
    text: 'designers',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c6_pickedReviews = []
const c6_excludedReviews = []
const c7_integrations = [
  {
    id: 330,
    name: 'WordPress',
    description: 'Embed forms on your WordPress site',
    link: '/plugins/wordpress/',
  },
  {
    id: 331,
    name: 'Shopify',
    description: 'Add forms to your Shopify store',
    link: '/plugins/shopify-form-builder/',
  },
  {
    id: 332,
    name: 'Wix',
    description: 'Put forms on your Wix site',
    link: '/plugins/wix-forms/',
  },
]
const c8_title = [
  {
    id: 5295,
    text: 'Webflow plugin ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5296,
    text: 'FAQs',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c8_faqList = [
  {
    id: 2856,
    header: 'How can I integrate Formester forms with my Webflow website or blog?',
    body: 'You can add any Formester form in your Webflow sites by copying the embed code and pasting it to any web page in Webflow. The form integrates seamlessly into the website. You can add any type of online form for data collection, for ex: Contact Form, Feedback Form, Etc.',
    body_markdown:
      'You can add any Formester form in your Webflow sites by copying the embed code and pasting it to any web page in Webflow. The form integrates seamlessly into the website. You can add any type of online form for data collection, for ex: Contact Form, Feedback Form, Etc.',
    list: [],
  },
  {
    id: 2858,
    header: 'What types of forms can I add to my Webflow site with Formester?',
    body: 'Formester boasts a vast form toolbox for your Webflow site, letting you build anything from simple contact forms and newsletter signups to complex multi-step surveys, payment forms, and even quizzes. You can customize field types, design them beautifully, and connect them to various integrations, all without touching code.',
    body_markdown:
      'Formester boasts a vast form toolbox for your Webflow site, letting you build anything from simple contact forms and newsletter signups to complex multi-step surveys, payment forms, and even quizzes. You can customize field types, design them beautifully, and connect them to various integrations, all without touching code.',
    list: [],
  },
  {
    id: 2857,
    header: 'Why should I integrate Formester forms with my Webflow website?',
    body: 'Integrating Formester forms with Webflow helps you save valuable time and resources that can be invested somewhere else. You can create a form with our No-Code Form Builder and directly embed it in your Webflow site to optimize user experience.',
    body_markdown:
      'Integrating Formester forms with Webflow helps you save valuable time and resources that can be invested somewhere else. You can create a form with our No-Code Form Builder and directly embed it in your Webflow site to optimize user experience.',
    list: [],
  },
  {
    id: 2859,
    header: 'How can Formester and Webflow work together to improve my website workflow?',
    body: 'Embedding formster forms in Webflow helps you automate data collection without having to worry about maintaining a backend database. Apart from that, Formester has advanced spam protection powered by AI that secures your form submissions and adapts itself based on the submissions.',
    body_markdown:
      'Embedding formster forms in Webflow helps you automate data collection without having to worry about maintaining a backend database. Apart from that, Formester has advanced spam protection powered by AI that secures your form submissions and adapts itself based on the submissions.',
    list: [],
  },
]
const c9_buttons = [
  {
    id: 1875,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1874,
    link: '/pricing/',
    text: 'See pricing',
    type: 'Secondary',
    showArrow: false,
  },
]

useHead({
  title: 'Craft Engaging Online Forms for Webflow | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/plugins/webflow/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-17T07:14:04.105Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Integrate Formester into Webflow in three simple steps. Effortlessly create, customize, and publish beautiful web forms on your webflow sites.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Craft Engaging Online Forms for Webflow | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/plugins/webflow/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Craft Engaging Online Forms for Webflow | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Integrate Formester into Webflow in three simple steps. Effortlessly create, customize, and publish beautiful web forms on your webflow sites.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Webflow plugin',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/plugins/webflow/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Craft Engaging Online Forms for Webflow | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Integrate Formester into Webflow in three simple steps. Effortlessly create, customize, and publish beautiful web forms on your webflow sites.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Webflow plugin',
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
        'Webflow plugin',
        'contact form',
        'online form builder',
        'no-code forms',
        'embed forms Webflow',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How can I integrate Formester forms with my Webflow website or blog?", "acceptedAnswer": {"@type": "Answer", "text": "You can add any Formester form in your Webflow sites by copying the embed code and pasting it to any web page in Webflow. The form integrates seamlessly into the website. You can add any type of online form for data collection, for ex: Contact Form, Feedback Form, Etc."}}, {"@type": "Question", "name": "What types of forms can I add to my Webflow site with Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester boasts a vast form toolbox for your Webflow site, letting you build anything from simple contact forms and newsletter signups to complex multi-step surveys, payment forms, and even quizzes. You can customize field types, design them beautifully, and connect them to various integrations, all without touching code."}}, {"@type": "Question", "name": "Why should I integrate Formester forms with my Webflow website?", "acceptedAnswer": {"@type": "Answer", "text": "Integrating Formester forms with Webflow helps you save valuable time and resources that can be invested somewhere else. You can create a form with our No-Code Form Builder and directly embed it in your Webflow site to optimize user experience."}}, {"@type": "Question", "name": "How can Formester and Webflow work together to improve my website workflow?", "acceptedAnswer": {"@type": "Answer", "text": "Embedding formster forms in Webflow helps you automate data collection without having to worry about maintaining a backend database. Apart from that, Formester has advanced spam protection powered by AI that secures your form submissions and adapts itself based on the submissions."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Plugins", "item": "https://formester.com/plugins/"}, {"@type": "ListItem", "position": 2, "name": "Webflow", "item": "https://formester.com/plugins/webflow/"}]}',
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
  grid-template-columns: 1fr minmax(0, 42%);
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
  min-height: 180px;
}
.fpl-fs-media img {
  max-width: 100%;
  max-height: 200px;
  height: auto;
}
.fpl-fs-body p {
  margin: 0;
  font-size: 15.5px;
  line-height: 1.7;
}
.fpl-prose {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
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
