<template>
  <div class="container">
    <h1>Privacy Policy</h1>
    <h2 class="mt-3"><strong>General Information</strong></h2>
    <p>
      We collect the e-mail addresses of those who communicate with us via
      e-mail, aggregate information on what pages consumers access or visit, and
      information volunteered by the consumer (such as survey information and/or
      site registrations). The information we collect is used to improve the
      content of our Web pages and the quality of our service, and is not shared
      with or sold to other organizations for commercial purposes, except to
      provide products or services you’ve requested, when we have your
      permission, or under the following circumstances:
    </p>
    <p>
      It is necessary to share information in order to investigate, prevent, or
      take action regarding illegal activities, suspected fraud, situations
      involving potential threats to the physical safety of any person,
      violations of Terms of Service, or as otherwise required by law. We
      transfer information about you if Formester or Formester is acquired by or
      merged with another company. In this event, Formester will notify you
      before information about you is transferred and becomes subject to a
      different privacy policy. Information Gathering and Usage
    </p>
    <p>
      When you register for Formester we ask for information such as your name,
      email address, and credit card information. Members who sign up for the
      free account are not required to enter a name or credit card.
    </p>
    <p>
      Formester uses collected information for the following general purposes:
      products and services provision, billing, identification and
      authentication, services improvement, contact, and research.
    </p>

    <h3 class="mt-3"><strong>Cookies</strong></h3>
    <p>
      A cookie is a small amount of data, which often includes an anonymous
      unique identifier, that is sent to your browser from a web site’s
      computers and stored on your computer’s hard drive.
    </p>
    <p>
      Cookies are required to use the Formester service. We use cookies to
      record current session information, but do not use permanent cookies. You
      are required to re-login to your Formester account after a certain period
      of time has elapsed to protect you against others accidentally accessing
      your account contents.
    </p>

    <h3 class="mt-3"><strong>Data Collection</strong></h3>
    <p>
      Formester collects personal data from users and customers only when
      necessary for the provision of our services. Our services include creating
      and delivering surveys, analysis of survey results, and providing customer
      support. The personal data we collect includes: 
      <ul>
        <li>Name </li>
        <li>Contact information, such as email address and telephone number </li>
        <li>Any information provided as part of survey responses</li>
      </ul>
    </p>

    <h3 class="mt-3"><strong>Data Use</strong></h3>
    <p>
      We use the personal data we collect for the following purposes:
      <ul>
        <li>To create and deliver surveys</li>
        <li>To analyze survey results</li>
        <li>To provide customer support</li>
        <li>To improve our services</li>
      </ul>
    </p>

    <h3 class="mt-3"><strong>Data Protection</strong></h3>
    <p>
      We take appropriate measures to ensure that personal data is kept secure, including the use of encryption and secure servers. We also limit access to personal data to only those employees who require it to perform their job duties.
    </p>

    <h3 class="mt-3"><strong>Data Storage </strong></h3>
    <p>
      Formester uses third party vendors and hosting partners to provide the
      necessary hardware, software, networking, storage, and related technology
      required to run Formester. Although Formester owns the code, databases,
      and all rights to the Formester application, you retain all rights to your
      data.
    </p>


    <h3 class="mt-3"><strong>User and Customer Rights</strong></h3>
    <p>
      Users and customers have the following rights with regard to their personal data:
      <ul>
        <li>The right to request access to their personal data</li>
        <li>The right to request correction or deletion of their personal data</li>
        <li>The right to object to the processing of their personal data</li>
        <li>The right to request that their personal data be transferred to another organization</li>
        <li>Users and customers can exercise their rights by contacting us at support@formester.com.</li>
      </ul>
    </p>

    <h3 class="mt-3"><strong>Disclosure</strong></h3>
    <p>
      Formester may disclose personally identifiable information under special
      circumstances, such as to comply with subpoenas or when your actions
      violate the Terms of Service.
    </p>

    <p>
      Our app comply with the 
      <a class="text-decoration-underline" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank">Google API Services User Data Policy</a>,
      including the Limited Use requirements. This means that we only use the data we collect for the purposes of providing our app's features and functionality, 
      and we do not share this data with any third parties. 
    </p>

    <h3 class="mt-3"><strong>Changes</strong></h3>
    <p>
      Formester may periodically update this policy. We will notify you about
      significant changes in the way we treat personal information by sending a
      notice to the primary email address specified in your Formester primary
      account holder account or by placing a prominent notice on our site.
    </p>
    <p>
      Any questions about this Privacy Policy should be addressed to
      <a class="text-decoration-underline" href="mailto:support@formester.com">
        support@formester.com
      </a>
      .
    </p>
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
}

h3 {
    margin-top: 24px;
    margin-bottom: 12px;
}
</style>
