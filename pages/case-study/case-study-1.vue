<template>
  <div>
    <div class="feature__hero position-relative">
      <div class="container">
        <div
          class="d-flex flex-column justify-content-center align-items-center text-center mt-5"
        >
          <h1 class="hero__heading pt-3">
            Uncovering Formester's Potential for
            <span class="hglt">Lead Generation</span> Success
          </h1>
          <p class="hero__subheading mt-3">
            Effective data collection and management for businesses and
            individuals alike. Transform your data-collection process & derive
            valuable insights!
          </p>
          <a
            href="https://app.formester.com/users/sign_up"
            class="btn button hero__button mt-4 mb-4 mb-lg-0"
            >Create Form for Free</a
          >
        </div>
      </div>
      <!-- <img
        src="@/assets/images/case-study/case-study-hero-bg.svg"
        alt="background showing few of the ui elements of formester"
        class="hero__background position-absolute"
      /> -->
    </div>

    <CaseStudyOneBackground />
    <SmallIconsFeatureSection :featureData="challenges" />
    <SmallIconsFeatureSection :featureData="solutions" />
    <Results />
    <Conclusion />
  </div>
</template>

<script>
import CaseStudyOneBackground from '@/components/case-study/CaseStudyOneBackground.vue'
import SmallIconsFeatureSection from '@/components/SmallIconsFeatureSection.vue'
import Results from '@/components/case-study/Results.vue'
import Conclusion from '@/components/case-study/Conclusion.vue'

export default {
  components: {
    CaseStudyOneBackground,
    SmallIconsFeatureSection,
    Results,
    Conclusion,
  },
  data() {
    return {
      challenges: {
        heading: 'The Complexities of Modern Lead Generation',
        description:
          "Lead generation is an intricate process, comprising several stages that demand careful attention and strategy. These multifaceted challenges underscore the importance of not only creating lead-generation forms but also optimizing them to overcome these obstacles. To better understand the significance of these challenges, let's delve into some of the commonly faced key problems with regard to lead generation.",
        subtext: 'Challenges',
        imgBaseSrc: 'case-study-1/challenges',
        features: [
          {
            title: 'Subpar Conversion Rates on Existing Forms',
            description:
              'One of the foremost challenges in lead generation is achieving satisfactory conversion rates on existing lead generation forms. Many businesses find themselves struggling with forms that fail to effectively convert website visitors into leads. This often results from issues such as unclear calls-to-action, uninspiring visuals, or confusing form structures.',
          },
          {
            title: 'Limited Capabilities for Lead Nurturing',
            description:
              'One of the foremost challenges in lead generation is achieving satisfactory conversion rates on existing lead generation forms. Many businesses find themselves struggling with forms that fail to effectively convert website visitors into leads. This often results from issues such as unclear calls-to-action, uninspiring visuals, or confusing form structures.',
          },
          {
            title: 'Lengthy and Discouraging Form Structures',
            description:
              'Lengthy and complex form structures are another significant hurdle in the lead generation process. When potential leads encounter forms that appear daunting or require extensive information input, they may become discouraged and abandon the form. This leads to missed opportunities to capture valuable leads.',
          },
          {
            title: 'Data Management and Segmentation',
            description:
              'Managing and effectively segmenting the leads generated can be a daunting task. Without the right tools and processes in place, businesses may struggle to categorize leads based on their interests, preferences, or stage in the buying journey. This can result in sending generic or irrelevant content to leads, diminishing their engagement and trust.',
          },
          {
            title: 'Integration Challenges',
            description:
              'Many businesses operate within a tech ecosystem where various tools and platforms are used for different functions. Integrating lead generation forms seamlessly with existing systems, such as CRM software, email marketing platforms, or analytics tools, can be a complex and time-consuming endeavor. Incomplete or inefficient integrations may lead to data silos and missed opportunities for personalized lead nurturing.',
          },
          {
            title: 'Mobile Responsiveness',
            description:
              'In an era where mobile devices are ubiquitous, lead generation forms must be fully responsive and user-friendly on all screen sizes. Creating forms that provide an optimal experience on mobile devices can be a challenge, especially if the chosen form-building solution lacks robust mobile optimization features.',
          },
          {
            title: 'Data-Driven Refinement',
            description:
              "The process of lead-generation doesn't end with the initial form creation. It involves continuous improvement based on data and insights. By analysing form performance and user behaviour, businesses can refine and fine-tune their forms to achieve even better results over time. Businesses may find it hard to run, manage and track the performance of each form.",
          },
        ],
      },
      solutions: {
        heading:
          "Overcoming Lead Generation Challenges with Formester's Lead-Generation Web Forms",
        description:
          "By leveraging Formester's comprehensive set of features, your B2B company can overcome these lead generation challenges, resulting in improved conversion rates, more efficient lead nurturing, and enhanced overall lead management. Formester's capabilities ensure that your lead generation forms become powerful tools in capturing and converting leads effectively.",
        subtext: 'Solutions',
        imgBaseSrc: 'case-study-1/solutions',
        features: [
          {
            title: 'Enhanced Conversion Rate Optimization',
            description:
              "Formester's user-friendly interface empowers businesses to create lead generation forms that are not only visually appealing but also optimized for higher conversion rates. Clear and compelling calls-to-action, visually engaging designs, and streamlined form structures are easily achievable with Formester, ensuring that website visitors are more likely to become leads.",
          },
          {
            title: 'Simplified Form Structures',
            description:
              'Formester understands the importance of user experience in lead generation. It offers intuitive tools to create forms with user-friendly, concise structures. By eliminating unnecessary fields and using conditional logic, businesses can create forms that feel effortless to complete. This significantly reduces form abandonment rates and enhances lead capture.',
          },
          {
            title: 'Robust Lead Nurturing Capabilities',
            description:
              'Beyond just collecting contact information, Formester equips businesses with the tools needed for effective lead nurturing. With seamless integrations with CRM systems and email marketing platforms, businesses can automate lead engagement, provide personalized content, and guide leads through the conversion journey. This ensures that leads are nurtured effectively, increasing the chances of conversion.',
          },
          {
            title: 'Enhanced Lead Generation Quality & Efficiency',
            description:
              "Formester's Information Recall Feature optimizes lead generation by pre-filling known user data, streamlining the process, and fostering personalized engagement. This leads to higher-quality leads and improved conversion rates.",
          },
          {
            title: 'Dynamic Forms',
            description:
              "Formester's Conditional Logic Feature empowers the creation of dynamic forms that adjust based on user inputs. This dynamic functionality enhances user experience by displaying or hiding specific fields or sections, resulting in tailored and user-friendly forms that drive higher lead conversion rates.",
          },
          {
            title: 'Safe & Secure Lead Generation',
            description:
              "Formester's Spam Protection Feature acts as a shield against unwanted submissions, ensuring that your lead generation efforts are focused on genuine prospects. This safeguard results in cleaner data and more efficient lead nurturing, ultimately enhancing your conversion rates.",
          },
          {
            title: 'Instant Engagement',
            description:
              "Formester's Auto-responder Feature enables immediate interaction with leads, acknowledging their actions and providing relevant information. This swift engagement not only enhances customer satisfaction but also nurtures leads effectively, increasing the chances of conversion.",
          },
          {
            title: 'Consistent Branding',
            description:
              "Formester's Branding Kit Feature allows you to maintain a consistent brand identity across your lead generation forms. Customize forms with your logo, colors, and fonts to ensure they align seamlessly with your brand's aesthetics. This branding cohesion enhances brand recognition and trust among your potential leads.",
          },
          {
            title: 'Efficient Teamwork',
            description:
              "Formester's Collaboration Feature fosters efficient teamwork by allowing team members to collaborate seamlessly on form creation and management. With assigned roles and permissions, your team can work together smoothly, ensuring that lead generation forms are optimized effectively and in a timely manner.",
          },
          {
            title: 'Seamless Integrations',
            description:
              'Formester excels in addressing integration challenges. It seamlessly integrates with various systems, including CRM software, email marketing platforms, and analytics tools. This ensures that lead data flows effortlessly across the tech ecosystem, preventing data silos and enabling personalized lead nurturing.',
          },
          {
            title: 'Mobile Optimization',
            description:
              'Formester recognizes the importance of mobile responsiveness. All forms created with Formester are fully responsive, offering an optimal experience on all screen sizes. This ensures that leads can engage with forms comfortably on any device, increasing the chances of capturing leads, even on mobile.',
          },
          {
            title: 'Effortless Form Management',
            description:
              'Formester simplifies form management with an intuitive dashboard that allows businesses to easily track and monitor the performance of each form. It provides insights into submission rates, engagement metrics, user behaviour and conversion data, enabling businesses to continually improve their forms, making them even more effective over time, taking informed decisions and refine their lead generation strategy.',
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 700;
  line-height: 72px;
}

@media screen and (max-width: 600px) {
  .hero__heading {
    font-size: 36px;
    line-height: 48px;
  }
}
</style>
