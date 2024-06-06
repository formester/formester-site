<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      Most Used&nbsp;<span class="hglight">Features</span>
    </h2>
    <!-- Desktop -->
    <div class="feature__desktop d-none d-lg-flex row mt-5">
      <ul class="feature__content-wrapper col-6">
        <li
          v-for="(feature, index) in features"
          :key="feature.title"
          :class="[
            'feature__item',
            'd-flex',
            'align-items-start',
            'p-4',
            { active: activeIndex === index },
          ]"
          @click="handleFeatureClick(index)"
        >
          <div
            class="feature__icon-wrapper d-flex align-items-center justify-content-center"
          >
            <nuxt-img :src="feature.icon" loading="lazy" />
          </div>
          <div class="ms-3 mt-1">
            <h3 class="feature__title">{{ feature.title }}</h3>
            <p v-if="activeIndex === index" class="feature__desc mt-2 mb-0">
              {{ feature.description }}
            </p>
          </div>
        </li>
      </ul>
      <div class="col-6 d-flex align-items-center">
        <transition name="fade" mode="out-in">
          <nuxt-img
            class="feature__img img-fluid"
            :src="features[activeIndex].image"
            :key="features[activeIndex].image"
          />
        </transition>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-lg-none">
      <div v-for="feature in features" :key="feature.title" class="mt-5">
        <nuxt-img :src="feature.image" class="mb-4 img-fluid" loading="lazy" />
        <div class="d-flex align-items-start mt-2">
          <div
            class="feature__icon-wrapper d-flex align-items-center justify-content-center"
          >
            <nuxt-img :src="feature.icon" loading="lazy" />
          </div>
          <div class="ms-3 mt-1">
            <h3 class="feature__title">{{ feature.title }}</h3>
            <p class="feature__desc mt-2 mb-0">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'home/most-used-features/mail-02.svg',
          title: 'Notification and Responses',
          description:
            'Creating HTML web forms has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          image: 'home/most-used-features/notification-and-responses.svg',
          alt: 'ui of autoresponder and email notification',
        },
        {
          icon: 'home/most-used-features/bar-chart-07.svg',
          title: 'Response Analytics',
          description:
            'Understand how users interact with your web form. Get insights on ways to improve engagement and increase conversion. Our web form builder can help you identify trends to see where users are dropping off and what works for you.',
          image: 'home/most-used-features/response-analytics.svg',
          alt: 'ui of analytics page',
        },
        {
          icon: 'home/most-used-features/alert-octagon.svg',
          title: 'Spam Protection',
          description:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          image: 'home/most-used-features/spam-protection.svg',
          alt: 'ui of a login form with recaptcha',
        },
        {
          icon: 'home/most-used-features/code-browser.svg',
          title: '1000+ Integration',
          description:
            'Connect your form with Slack, Google Sheets, Salesforce or anything else with our Zapier integration. Use our webhooks to notify any other app when a submission arrives. Create flows that solve your business needs.',
          image: 'home/most-used-features/integrations.svg',
          alt: 'illustration showing logo of application supporting formester integration',
        },
        {
          icon: 'home/most-used-features/users-plus.svg',
          title: 'Invite Team Members',
          description:
            "Form sharing for effective collaboration and efficient team-work! Unite your team, gather valuable feedback, and unlock the true potential of web form building with Formester's powerful in-built Collaboration/Add Collaborators feature!",
          image: 'home/most-used-features/team-members.svg',
          alt: 'ui of collaboration page',
        },
        {
          icon: 'home/most-used-features/pen-tool-02.svg',
          title: 'Electronic Signature',
          description:
            'Add e-sign to your online form easily using formester. Digital signatures have become increasingly popular in recent years as they offer a convenient and efficient way to sign documents.',
          image: 'home/most-used-features/e-signature.svg',
          alt: 'ui of form with electronic signature',
        },
        {
          icon: 'home/most-used-features/bank-note-01.svg',
          title: 'Online Payments',
          description:
            'Formester’s online forms with payment integration make receiving payments more convenient than ever with secure PCI compliance, responsive interface, and no additional charges.',
          image: 'home/most-used-features/payments.svg',
          alt: 'illustration showing formester supporting various payment integrations like stripe, paypal etc.',
        },
      ],
      activeIndex: 0,
    }
  },
  methods: {
    handleFeatureClick(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style scoped>
.feature__content-wrapper {
  /* prevent jumping of image */
  min-height: 784px;
}

.feature__icon-wrapper {
  border-radius: 50%;
  border: 4px solid #f7f3ff;
  background: #f7f3ff;
  width: 40px;
  height: 40px;
  padding: 4px;
}

.feature__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 0;
}

.feature__desc {
  color: #475467;
  font-size: 16px;
  line-height: 24px;
}

.feature__item {
  border-left: 4px solid #f2f4f7;
  cursor: pointer;
}

.feature__item.active {
  border-left-color: #7f56d9;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.002);
}

.feature__img {
  transition: all 0.2s ease-in-out;
}
</style>
