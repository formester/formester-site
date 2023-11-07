<template>
  <div class="container-lg main-container my-5 py-5">
    <div class="content-container d-flex flex-column align-items-center">
      <h2 class="section__heading">Seamless Integration</h2>
      <p class="sub-heading">
        Collecting data is one battle won. Formester integrates with tools like
        Slack, Google Sheets and Salesforce. Send data anywhere you like.
        Getting started just takes few minutes with our pre-build templates.
      </p>
      <a
        href="https://app.formester.com/users/sign_up"
        class="btn button section__button mt-4 mb-4 mb-lg-0 mx-auto"
        >Create Form</a
      >
    </div>
    <!-- Icons For Large Devices -->
    <div class="row sub-container d-none d-lg-flex justify-content-between">
      <div
        class="space-container d-flex justify-content-between"
        v-for="(icon, index) in iconsForLargeScreen"
        :key="index"
      >
        <div
          class="d-flex justify-content-center align-items-start"
          :class="{ 'align-items-end': isOdd(index) }"
        >
          <div class="icon-container">
            <nuxt-img :src="icon.src" :alt="icon.alt" class="icon" />
          </div>
        </div>
      </div>
    </div>

    <!-- Icons For Small Devices -->
    <div class="row sub-container d-flex d-lg-none justify-content-between">
      <div
        class="space-container d-flex justify-content-between"
        v-for="(icon, index) in iconsForSmallScreen"
        :key="index"
      >
        <div
          class="d-flex justify-content-center align-items-start"
          :class="{ 'align-items-end': !isOdd(index) }"
        >
          <div class="icon-container">
            <nuxt-img :src="icon.src" :alt="icon.alt" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const iconsForLargeScreen = [
      {
        src: '/hr-solution/SeamlessIntegration/salesforce.png',
        alt: 'salesforce',
      },
      {
        src: '/hr-solution/SeamlessIntegration/slack.png',
        alt: 'slack',
      },
      {
        src: '/hr-solution/SeamlessIntegration/notion.png',
        alt: 'slack',
      },
      {
        src: '/hr-solution/SeamlessIntegration/hubspot.png',
        alt: 'hubspot',
      },
      {
        src: '/hr-solution/SeamlessIntegration/calendar.png',
        alt: 'calendar',
      },
      {
        src: '/hr-solution/SeamlessIntegration/g-sheet.png',
        alt: 'g-sheet',
      },
      {
        src: '/hr-solution/SeamlessIntegration/calendly.png',
        alt: 'calendy',
      },
      {
        src: '/hr-solution/SeamlessIntegration/g-drive.png',
        alt: 'g-drive',
      },
      {
        src: '/hr-solution/SeamlessIntegration/discord.png',
        alt: 'discord',
      },
      // ...more icons
    ]
    return {
      iconsForLargeScreen: iconsForLargeScreen,
      iconsForSmallScreen: iconsForLargeScreen.slice(0, 4),
    }
  },
  methods: {
    isOdd(index) {
      return index % 2 !== 0
    },
  },
}
</script>

<style scoped>
.main-container {
  border-radius: 24px;
  border: 1px solid rgba(79, 56, 149, 0.3);
  background: #fbfaff;
}
.content-container {
  padding: 2rem 0 4rem;
}
.section__button {
  border-radius: 8px;
  background: var(--primary, #4f3895);
  padding: 16px 24px;
  color: var(--mds-light-goten, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.sub-container {
  min-height: 12rem;
}
.space-container {
  width: fit-content;
}
.icon-container {
  padding: 15px;
  border-radius: 7.486px;
  background: #fff;
  box-shadow: 0px 3.73615px 5.94735px 0px rgba(55, 0, 108, 0.02),
    0px 17.66181px 23.24871px 0px rgba(55, 0, 108, 0.02),
    0px 45.85278px 72.99015px 0px rgba(55, 0, 108, 0.04);
}
.icon {
  width: 3rem;
}
.sub-heading {
  color: var(--neutral-600, #525252);
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

@media (max-width: 1200px) {
  .icon {
    width: 2.5rem;
  }
}
@media (max-width: 992px) {
  .main-container {
    border-radius: 0;
    border: none;
    padding-right: 0;
    padding-left: 0;
    overflow: hidden;
    margin-left: 0;
    margin-right: 0;
  }
  .content-container {
    padding-right: 1em;
    padding-left: 1em;
  }
  .sub-heading {
    font-size: 1rem;
    line-height: 24px;
  }
  .space-container {
    padding: 0;
  }
}
</style>
