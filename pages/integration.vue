<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="
              col-lg-5
              d-flex
              flex-column
              justify-content-center
              align-items-lg-start align-items-center
              text-center text-lg-start
              mt-xl-0 mt-md-5
            "
          >
            <h1 class="section__heading">Integration</h1>
            <p class="hero__subheading mt-3">
              Collecting data is one battle won. Formester integrates with tools
              like Slack, Google Sheets and Salesforce. Send data anywhere you
              like. Getting started just takes few minutes with our pre-build
              templates.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Create Your Form</a
            >
          </div>
          <div
            class="
              col-lg-7
              d-flex
              align-items-center
              justify-content-center
              mt-lg-0 mt-5
            "
          >
            <img
              src="@/assets/images/integration-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="subheading my-5">Most Popular</h2>
      <div class="row py-5">
        <IntegrationCard
          :app="app"
          class="col-md-4 my-3"
          v-for="app in apps"
          :key="app.title"
        />
      </div>
    </div>
    <CallToActionSection />
  </div>
</template>

<script>
import IntegrationCard from '../components/integration/IntegrationCard.vue'
export default {
  components: {
    IntegrationCard,
  },
  data() {
    return {
      apps: [
        {
          name: 'Slack',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'slack.svg',
        },
        {
          name: 'Discord',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'discord.svg',
        },
        {
          name: 'Salesforce',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'salesforce.svg',
        },
        {
          name: 'Calendy',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'calendly.svg',
        },
        {
          name: 'Google Sheets',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'google-sheets.svg',
        },
        {
          name: 'Hotspot',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'hubspot.svg',
        },
        {
          name: 'Gdrive',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'gdrive.svg',
        },
        {
          name: 'Notion',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tristique facilisis erat magna cras leo. Aliquam nec in in dui tincidunt.',
          img: 'notion.svg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}

.subheading {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 36px;
}
</style>
