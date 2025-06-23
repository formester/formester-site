<template>
  <div class="container">
    <div class="upper-margin">
    <h1>Privacy Policy</h1>
    <p>Last Updated: 22nd January, 2025</p>

    <h2>1. Introduction</h2>
    <p>Formester ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By accessing or using Formester, you agree to the terms of this Privacy Policy.</p>

    <h2>2. Information We Collect</h2>
    <p><strong>Personal Data:</strong> When you register for Formester, we collect personal information such as your name, email address, and, for paid accounts, credit card information. Free account members are not required to provide a name or credit card.</p>
    <p><strong>Survey Data:</strong> We collect any information you provide as part of survey responses.</p>
    <p><strong>Cookies:</strong> We use cookies to record current session information. Cookies are required to use the Formester service. You are required to re-login to your account after a certain period to protect against unauthorized access.</p>

    <h2>3. How We Use Your Information</h2>
    <p>We use the collected information for the following purposes:</p>
    <ul>
      <li>To provide and maintain our services</li>
      <li>To process transactions and billing</li>
      <li>To identify and authenticate users</li>
      <li>To improve our services</li>
      <li>To communicate with you, including responding to inquiries and providing updates</li>
      <li>To conduct research and analysis</li>
    </ul>

    <h2>4. Legal Basis for Processing Personal Data (GDPR Compliance)</h2>
    <p>We process your personal data based on the following legal grounds:</p>
    <p><strong>Performance of a Contract:</strong> To provide you with our services as requested.</p>
    <p><strong>Legitimate Interests:</strong> To improve our services and ensure security.</p>
    <p><strong>Consent:</strong> For any specific purposes where you have provided consent.</p>

    <h2>5. Data Retention</h2>
    <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When we no longer need your personal data, we will securely delete or anonymize it.</p>

    <h2>6. Data Sharing and Disclosure</h2>
    <p>We do not share or sell your personal information to other organizations for commercial purposes, except under the following circumstances:</p>
    <ul>
      <li>To provide products or services you've requested</li>
      <li>With your consent</li>
      <li>To comply with legal obligations</li>
      <li>To protect and defend our rights and property</li>
      <li>To prevent or investigate possible wrongdoing in connection with our services</li>
    </ul>

    <h2>7. Third-Party Service Providers</h2>
    <p>We use third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run Formester. These third parties may have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

    <h2>8. Security Measures</h2>
    <p>We take appropriate measures to ensure that personal data is kept secure, including:</p>
    <ul>
      <li>Using encryption and secure servers</li>
      <li>Implementing strong, randomly-generated passwords</li>
      <li>Enforcing two-factor authentication (2FA) for all personnel</li>
      <li>Conducting regular vulnerability scans and security assessments</li>
    </ul>

    <h2>9. Your Rights</h2>
    <p>You have the following rights regarding your personal data:</p>
    <ul>
      <li>The right to access the personal data we hold about you</li>
      <li>The right to request correction or deletion of your personal data</li>
      <li>The right to object to the processing of your personal data</li>
      <li>The right to request the transfer of your personal data to another organization</li>
    </ul>
    <p>To exercise these rights, please contact us at <a href="mailto:support@formester.com">support@formester.com</a>. We will respond to your request within a reasonable timeframe.</p>

    <h2>10. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you about significant changes by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>

    <h2>11. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us:</p>
    <p>Email: <a href="mailto:support@formester.com">support@formester.com</a></p>

    <h2>12. Compliance with Google API Services User Data Policy</h2>
    <p>Our app complies with the Google API Services User Data Policy, including the Limited Use requirements. This means that we only use the data we collect for providing our app's features and functionality, and we do not share this data with any third parties.</p>

    <h2>13. Google Workspace API & AI Use</h2>
    <p>We do not use any data obtained through Google Workspace APIs to develop, improve, or train generalized artificial intelligence (AI) or machine learning (ML) models.</p>
  </div>
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '../utils/getSiteMeta'

export default {
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/privacy/',
        title: 'Privacy Policy | Formester',
        description:
          'Formester uses collected information for the following general purposes: products and services provision, billing, identification and authentication, services improvement, contact, and research.',
        mainImage:
          'https://formester.com/formester-logo-meta-image.png', 
        mainImageAlt: 'Formester Logo', 
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Privacy Policy | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/privacy/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebApplication',
      name: 'Privacy Policy | Formester',
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delaware',
        addressCountry: 'United States',
      },
      creator: {
        '@type': 'Organization',
        '@id': '#organization',
        url: 'https://formester.com/',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      }
    }
  },
}
</script>

<style scoped>
.upper-margin {
  margin-top: 8rem;
}

@media (max-width: 992px) {
  .upper-margin {
    margin-top: 8rem;
  }
}
.container {
  margin-top: 24px;
  margin-bottom: 64px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
    color: #6434d0;
}

h1 {
  font-weight: bold;
  margin-bottom: 24px;
}

h2 {
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: 600;
}

h3 {
    margin-top: 24px;
    margin-bottom: 12px;
}
</style>
