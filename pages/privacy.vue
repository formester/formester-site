<template>
  <div class="container">
    <h1>Privacy Policy</h1>
    <h3 class="mt-3"><strong>General Information</strong></h3>
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
    <h3 class="mt-3"><strong>Data Storage </strong></h3>
    <p>
      Formester uses third party vendors and hosting partners to provide the
      necessary hardware, software, networking, storage, and related technology
      required to run Formester. Although Formester owns the code, databases,
      and all rights to the Formester application, you retain all rights to your
      data.
    </p>
    <h3 class="mt-3"><strong>Disclosure</strong></h3>
    <p>
      Formester may disclose personally identifiable information under special
      circumstances, such as to comply with subpoenas or when your actions
      violate the Terms of Service.
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
        url: 'https://formester.com/privacy',
        title: 'Privacy Policy | Formester',
        description:
          'Formester uses collected information for the following general purposes: products and services provision, billing, identification and authentication, services improvement, contact, and research.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with privacy page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with privacy page image alt
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
          href: 'https://formester.com/privacy',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
