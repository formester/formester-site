<template>
  <div>
    <RichText :code="c0_code" :cardUI="false" class="page-component-item" />
  </div>
</template>

<script setup>
import RichText from '@/components/strapi/RichText.vue'

const c0_code =
  '<br />\n<br />\n<br />\n\n# Privacy Policy\n\n**Last Updated**: 22nd January, 2025\n\n### 1. Introduction\n\nFormester ("we," "our," or "us") is committed to protecting your privacy and keeping your information secure. This Privacy Policy explains what data we collect, how we use it, and under what circumstances it may be shared. By using Formester, you agree to this Privacy Policy.\n\n### 2. Information We Collect\n\n**Personal Data:** When you sign up, we may collect your name, email, and for paid accounts, billing details such as credit card information. Free accounts do not require a name or card details.\n\n**Survey Data:** Any responses you submit or collect through surveys and forms.\n\n**Cookies:** Cookies are used to keep your session secure and functional. You may need to log in again after a period of inactivity for your protection.\n\n### 3. How We Use Your Information\n\nWe only use your data to:\n\n- Provide and maintain our services\n\n- Process payments and billing\n\n- Authenticate and identify users\n\n- Improve our platform and features\n\n- Communicate with you about updates or support requests\n\n- Conduct research and analysis to improve usability\n\n**Important:** We never use, share, or sell your personal data or survey responses for advertising, marketing, or other commercial purposes.\n\n### 4. Legal Basis for Processing (GDPR Compliance)\n\n**Performance of a Contract:** To deliver the services you requested.\n\n**Legitimate Interests:** To keep our services secure and improve user experience.\n\n**Consent:** For any additional purposes where you give explicit consent.\n\n### 5. Data Retention\n\nWe only keep personal data for as long as needed to provide our services. Once no longer necessary, data is securely deleted or anonymized.\n\n### 6. Data Sharing and Disclosure\n\nWe **do not share or sell your data** for commercial gain. Your data is only shared in these limited cases:\n\n- To provide the services you request\n\n- With your consent\n\n- To meet legal obligations\n\n- To protect our rights and property\n\n- To prevent or investigate misuse of our services\n\n### 7. Third-Party Service Providers\n\nWe rely on trusted third-party vendors to provide our services, including:\n\n- **Payment processing:** Stripe (and, where applicable, PayPal or Authorize.Net) to process payments and subscription billing.\n\n- **Hosting and storage:** Amazon Web Services (AWS S3) for file and data storage.\n\n- **Analytics and product monitoring:** PostHog and Google Analytics to understand usage and improve our platform; Sentry and Scout APM to monitor application performance and diagnose errors; BetterStack to monitor service uptime.\n\n- **AI processing:** OpenRouter, which routes requests to underlying AI models (such as Google Gemini), to power AI-assisted form creation and spam/phishing detection features.\n\n- **Security and fraud prevention:** Google reCAPTCHA and Cloudflare Turnstile for bot and spam protection; Let\'s Encrypt for TLS certificate issuance on custom domains; Bouncify for email address validation.\n\n- **Communications:** Twilio for SMS verification codes; your connected email provider (e.g. Gmail or Outlook) when you choose to send notifications through your own account.\n\n- **Optional integrations you enable:** If you choose to connect Formester to third-party platforms such as Google Sheets, Google Drive, Google Calendar, Slack, Notion, HubSpot, Zapier, Make.com, Shopify, Wix, Canva, Monday.com, or Databricks, or to add tracking scripts (such as Facebook Pixel or TrustedForm) to your forms, or to send data to a webhook you configure, data is shared with those services solely to perform the integration you requested.\n\nThese providers only access your data to perform specific tasks on our behalf and cannot use it for any other purpose.\n\n\n### 8. Security Measures\n\nWe use industry-standard safeguards to protect your data, including:\n\n- Encryption and secure servers\n\n- Strong, randomly-generated passwords\n\n- Two-factor authentication for our personnel\n\n- Regular vulnerability scans and security assessments\n\n### 9. Breach Response Plan\n\nIf a data breach occurs, we follow a structured response plan:\n\n**Detection:** Immediately investigate and confirm the breach.\n\n**Containment:** Secure systems to prevent further impact.\n\n**Assessment:** Determine the scope and type of data involved.\n\n**Notification:** Inform affected users and relevant authorities within required timeframes.\n\n**Resolution:** Fix vulnerabilities, restore services, and take steps to prevent future incidents.\n\n### 10. Your Rights\n\nYou have the right to:\n\n- Access the data we hold about you\n\n- Request correction or deletion of your data\n\n- Object to how we process your data\n\n- Ask us to transfer your data to another service\n\nContact us at support@formester.com to exercise these rights.\n\n### 11. Changes to This Privacy Policy\n\nWe may update this policy occasionally. If major changes are made, we will notify you by email or a notice on our site. Please check this page regularly to stay informed.\n\n### 12. Compliance with Google API Services User Data Policy\n\nFormester complies with the Google API Services User Data Policy, including Limited Use requirements. Data obtained through Google APIs is only used to provide our services and is never shared with third parties.\n\n### 13. Mobile Information and SMS Privacy\n\nWhen you provide your mobile phone number for form verification purposes, Formester may send you a one-time verification code via SMS to confirm your phone number. By providing your mobile number, you consent to receiving these transactional SMS messages.\n\n**Formester will not sell, rent, or share your mobile phone number or any opt-in data (including consent records) with third parties for marketing or promotional purposes.** Mobile numbers collected for verification are used solely for the purpose of sending one-time verification codes and are not shared with or sold to third parties.\n\nMessage and data rates may apply. Message frequency is limited to user-initiated verification requests. You may opt out of SMS messages at any time by replying STOP. For assistance, reply HELP or contact support@formester.com.\n\n### 14. Google Workspace API & AI Use\n\nFormester does not use Google Workspace API data to build, train, or improve artificial intelligence or machine learning models.\n\n### 15. Contact Us\n\nIf you have any questions about this Privacy Policy, contact us at:\n\n**Email:** support@formester.com'

useHead({
  title: 'Formester Privacy Policy',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/privacy/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-09T14:51:26.364Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'We protect your privacy with encryption, transparency, and respect. You control your data. Learn how we keep it secure.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Formester Privacy Policy',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/privacy/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Formester Privacy Policy',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'We protect your privacy with encryption, transparency, and respect. You control your data. Learn how we keep it secure.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/privacy/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Formester Privacy Policy',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'We protect your privacy with encryption, transparency, and respect. You control your data. Learn how we keep it secure.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Logo',
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
      content: ['formester privacy', 'formester privacy policy'],
    },
  ],
})
useJsonld([
  {
    '@graph': [
      {
        '@id': 'https://formester.com/privacy/#webpage',
        url: 'https://formester.com/privacy/',
        name: 'Formester Privacy Policy',
        '@type': 'WebPage',
        about: {
          name: 'Formester Privacy Policy',
          '@type': 'PrivacyPolicy',
          description:
            'Learn how Formester collects, uses, and protects your personal data with encryption, transparency, and respect for your privacy rights.',
        },
        isPartOf: {
          '@id': 'https://formester.com/#organization',
        },
        description:
          'We protect your privacy with encryption, transparency, and respect. You control your data. Learn how we keep it secure.',
      },
      {
        '@id': 'https://formester.com/#organization',
        url: 'https://formester.com/',
        logo: 'https://formester.com/logo.svg',
        name: 'Formester',
        '@type': 'Organization',
        sameAs: [
          'https://www.linkedin.com/company/formester-inc/',
          'https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ',
          'https://www.instagram.com/_formester_',
          'https://www.facebook.com/formester',
          'https://x.com/_Formester_',
        ],
        address: [
          {
            '@type': 'PostalAddress',
            addressRegion: 'Delaware',
            streetAddress: '2035 Sunset Lake',
            addressCountry: 'USA',
          },
        ],
        contactPoint: {
          url: 'https://formester.com/contact',
          '@type': 'ContactPoint',
          email: 'support@formester.com',
          contactType: 'customer support',
        },
      },
    ],
    '@context': 'https://schema.org',
  },
])
</script>
