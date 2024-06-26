<template>
  <div class="faq__container mx-auto text-start">
    <h2 class="text-center faq__heading">Frequently Asked Questions</h2>
    <div class="accordion accordion-flush my-5" id="accordionFlushExample">
      <FaqAccordionItem
        v-for="(item, index) in FaqAccordionItems"
        :key="index"
        :title="item.title"
        :headingId="`flush-heading-${index + 1}`"
        :collapseId="`flush-collapse-${index + 1}`"
      >
        {{ item.content }}
      </FaqAccordionItem>
    </div>
  </div>
</template>

<script>
import FaqAccordionItem from '@/components/FaqAccordionItem.vue'

export default {
  components: {
    FaqAccordionItem,
  },
  data() {
    return {
      FaqAccordionItems: [
        {
          title: 'Can I try before I buy?',
          content:
            "It's free to set up an account and create a campaign. But to get more than 100 submissions, you'll need to choose a plan.",
        },
        {
          title: 'Can I change plans at anytime?',
          content:
            'Yes. Formester is a pay-as-you-go service and you can upgrade, downgrade or cancel at any time. You can upgrade anytime right from your account page.',
        },
        {
          title: "What happens if I don't like the service?",
          content:
            "Don't worry, if you are ever unhappy with our service and wish to cancel, we'll happily reimburse your last month -- no questions asked.",
        },
        {
          title: 'Do I get a discount on yearly plan?',
          content:
            'You do, If you buy yearly plan you only have to pay for 11 months and you get 1 month free.',
        },
        {
          title: 'Is there an referral/affiliate program?',
          content:
            "Yes we do. It's an invite only program. If you need access to this please reach out to our support.",
        },
        {
          title: 'Do you offer discount for NGO and School?',
          content: "Yes. Get in touch and we'll help you out.",
        },
        {
          title: 'What if I want a reseller account?',
          content:
            'We do support resellers. Please reach out to us at support@formester.com and we will love to help you.',
        },
        {
          title: 'I have more questions',
          content:
            "No problem! Contact us and we'll get in touch with you shortly :)",
        },
      ],
    }
  },
}
</script>

<style scoped>
.faq__container {
  max-width: 900px;
  margin-top: 3em;
}
.faq__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
}
</style>
