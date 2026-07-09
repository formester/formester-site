<template>
  <div class="container">
    <div class="upper-margin">
    <h1>Cookie Policy</h1>

    <br />
    <h2>Overview</h2>
    <p>
      This Cookie Policy explains how Formester ("Formester", "we", "us") uses
      cookies and similar technologies when you visit formester.com or use the
      Formester application and services (together, the "Service"). It should
      be read alongside our <nuxt-link to="/privacy/">Privacy Policy</nuxt-link>
      and <nuxt-link to="/terms-of-service/">Terms of Service</nuxt-link>.
    </p>
    <p>
      A cookie is a small text file that a website stores on your device. Cookies
      are widely used to make websites work, work more efficiently, and to
      provide information to the owners of a site.
    </p>

    <h2>Types of Cookies We Use</h2>
    <p>
      <strong>Strictly necessary cookies.</strong> These cookies are required for
      the Service to function and cannot be switched off. They include cookies
      that keep you signed in to your account and maintain the security of your
      session. Because they are essential, these cookies are set without
      requesting consent.
    </p>
    <p>
      <strong>Analytics and performance cookies.</strong> These cookies help us
      understand how visitors use our site and application, so we can measure
      and improve performance. We use tools such as Google Analytics, Google Tag
      Manager, and Microsoft Clarity for this purpose.
    </p>
    <p>
      <strong>Functional and support cookies.</strong> These cookies enable
      features like live chat support so we can respond to questions about the
      Service.
    </p>
    <p>
      We do not use cookies to track you across unrelated third-party websites
      for advertising purposes.
    </p>

    <h2>Consent</h2>
    <p>
      Where required by applicable law, we ask for your consent before setting
      analytics or non-essential cookies. On formester.com, a cookie banner lets
      you accept or reject these cookies; strictly necessary cookies are set
      regardless, as they are required for the Service to operate. You can
      change your choice at any time by clearing your browser's cookies for this
      site, which will cause the banner to appear again.
    </p>

    <h2>Third-Party Cookies</h2>
    <p>
      Some cookies are placed by third-party services that appear on our pages,
      such as analytics providers and support chat tools. We do not control
      these third parties' cookies directly; please refer to their own privacy
      and cookie policies for more information.
    </p>

    <h2>Managing Cookies</h2>
    <p>
      Most browsers let you refuse or delete cookies through their settings.
      Refusing non-essential cookies should not affect your ability to use the
      core Service, but may affect certain analytics-driven improvements. Refer
      to your browser's help documentation for instructions.
    </p>

    <h2>Changes to This Policy</h2>
    <p>
      We may update this Cookie Policy from time to time to reflect changes in
      the cookies we use or for legal or regulatory reasons. Continued use of
      the Service after any such changes constitutes your acceptance of the
      updated policy.
    </p>

    <h2>Contact</h2>
    <p>
      Questions about this Cookie Policy should be sent to
      support@formester.com.
    </p>
    </div>
  </div>
</template>

<script setup>
import getSiteMeta from '../utils/getSiteMeta'

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/cookie-policy/',
    title: 'Cookie Policy | Formester',
    description: 'Formester cookie policy. Learn what cookies we use and how to manage them.',
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
  }
  return getSiteMeta(metaData)
})

useHead({
  title: 'Cookie Policy | Formester',
  meta: [...meta.value],
  link: [
    {
      rel: 'canonical',
      href: 'https://formester.com/cookie-policy/',
    },
  ],
})

useJsonld([{
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Cookie Policy | Formester',
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
      },
    }])
</script>

<style scoped>
.upper-margin {
  margin: 8rem auto 0;
  max-width: 900px;
  font-size: 17px;
  line-height: 1.75;
  color: #344054;
}

a {
  color: #6434d0;
  text-decoration: underline;
  text-underline-offset: 2px;
}

h1 { font-weight: 700; font-size: 34px; line-height: 1.2; margin-bottom: 20px; color: #101828; }
h2 { font-weight: 700; font-size: 26px; line-height: 1.3; margin-top: 36px; margin-bottom: 14px; color: #101828; }
h3 { font-weight: 600; font-size: 20px; line-height: 1.35; margin-top: 26px; margin-bottom: 10px; color: #101828; }

p { margin: 0 0 1.15em; }
ul, ol { margin: 0 0 1.15em; padding-left: 1.5em; }
li { margin: 0.4em 0; }

@media (max-width: 992px) {
  .upper-margin {
    margin-top: 6rem;
  }
}
</style>
