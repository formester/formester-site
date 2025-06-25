<template>
  <div class="container">
    <div class="upper-margin">
    <h1>Security</h1>
    <p>
      As a form builder and management service, we recognize the importance of
      excellent security practices for such critical infrastructure. While we
      are a small team, we take security very seriously.
    </p>

    <h2>General security practices</h2>
    <ul>
      <li>
        Access to servers, datastores, source code, and third-party tools are
        secured with strong non-SMS two-factor authentication when possible.
      </li>
      <li>
        We use strong, randomly-generated passwords that are never re-used.
      </li>
      <li>We have strong 2FA policies for all Formester personnel</li>
      <li>
        All Formester personnel are required to use 2FA on all first- and
        third-party services when possible
      </li>
      <li>
        Employees and the contractors we hire are given the lowest level of
        access that allows them to get their work done
      </li>
      <li>
        We use automatic security vulnerability detection tools to alert us when
        our dependencies have known security issues
      </li>
      <li>
        We regularly perform internal and external vulnerability scans and
        application penetration tests
      </li>
      <li>
        We prefer third-party tools with strong privacy and security postures
        that align with our goals
      </li>
      <li>
        We have strong rate-limiting measures in place to reduce API abuse
      </li>
      <li>We have extensive integration test coverage on our API code base</li>
      <li>We never copy production data to external devices</li>
    </ul>

    <h2>Infrastructure</h2>
    <p>
      Our servers are hosted by Heroku. Heroku uses Amazon Web Services (AWS)
      for their infrastructure, meaning all of our servers and datastores are
      hosted on AWS infrastructure, managed by Heroku. We also utilize
      Cloudflare for content delivery and security.
    </p>

    <h2>Authentication</h2>
    <p>
      At sign-up, each admin sets up a new profile with their email and
      password. Passwords are securely hashed using industry-standard bcrypt,
      and all secrets are securely encrypted in-transit and at-rest. We never
      store passwords or secrets as plain text.
    </p>

    <h2>Encryption</h2>
    <p>
      All communication between the Formester service and our backend service is
      encrypted with TLS. We use Automated Certificate Management provided by
      Let's Encrypt and Cloudflare. User data is stored in Heroku PostgreSQL and
      details of their implementation can be found on the Security page at
      Heroku.
    </p>

    <h2>Payments</h2>
    <p>
      Credit card and bank information is encrypted, stored, and processed by
      Stripe with AES-256 encryption. Formester stores a transient token
      provided by Stripe to reference a customer's credit card through the
      Stripe API. Credit cards are not stored on Formester servers.
    </p>

    <h2>Backups and recovery</h2>
    <p>
      Heroku Postgres provides continuous protection by persisting snapshots,
      base backups, and WAL files to AWS S3. This secure storage allows for
      complete database recovery in case of hardware failures, data corruption,
      or significant service interruptions.
    </p>

    <h2>FAQs</h2>

    <h3>What user data do you collect?</h3>
    <p>
      We're not in the business of making money off of data. However, we do
      collect information about how who is interacting with the system so we can
      monitor and improve the product, and provide faster, more effective
      support when issues arise. These events include API requests, sign-ins,
      sign-outs, etc. More information on the type of data we collect can be
      found in our <a href="/privacy/">privacy policy</a>.
    </p>

    <h3>How long is data retained and can I have it removed?</h3>
    <p>
      Server and application logs are retained for a maximum of 30 days, after
      which they are permanently deleted. Retention of account analytics can
      span up to 90 days, but can be permanently deleted on request. On request for account deletion, we delete all the data for the user and it is irrecoverable.
    </p>


    <h3>Will you fill out our security questionnaire?</h3>
    <p>
      Due to our small team size, we do not have the bandwidth to fill out
      security questionnaires for customers on our standard tiers. Please
      <a href="mailto:support@formester.com">email us</a> if you do not see one of
      your specific questions answered on this page and we can add it. For
      customers on an Enterprise tier, we do make an exception.
    </p>

    <h3>
      Do you maintain any security certifications such as SOC 2, ISO 27001,
      HIPAA or BAA?
    </h3>
    <p>
      While we'd eventually love to achieve these certifications, we don't hold
      them at this time. Please
      <a href="mailto:support@formester.com">email us</a> if you'd like discuss
      working with us to get these certifications.
    </p>

    <h3>Is your system HA?</h3>
    <p>
      Yes, our infrastructure and datastores are highly available (HA). For
      infrastructure, we have auto scaling and health checks in place. For
      datastores, we have primary standbys in place with automatic failover.
      Standbys are always hosted in a different availability zone (AZ).
    </p>

    <h3>How do I report a potential vulnerability or security concern?</h3>
    <p>
      Please email us at
      <a href="mailto:support@formester.com">support@formester.com</a>, which will
      notify, and we'll get back to you ASAP. If you have a discovery, please
      discretely reach out to a member of the team via email for verification,
      vulnerability acceptance, and remediation timeline. We believe in — and
      participate in — responsible disclosure. At this time we do not have a
      bug-bounty program in place, but would like one in the future.
    </p>

    <h3>Any further questions?</h3>
    <p>
      Please <a href="mailto:support@formester.com">email us</a> and we'll happily
      update this doc.
    </p>
    </div>
  </div>
</template>

<script></script>

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

.upper-margin {
  margin-top: 8rem;
}

@media (max-width: 992px) {
  .upper-margin {
    margin-top: 8rem;
  }
}
</style>
