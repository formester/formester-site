<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="row py-5">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
          >
            <h1 class="hero__heading">
              Create Fun and Engaging <span class="hglight">Quiz</span> in
              Minutes
            </h1>
            <p class="hero__subheading mt-3">
              Build a Quiz to engage students, generate leads or test knowledge
              and competency with Formester’s Online Quiz maker
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="btn button hero__button mt-4 mb-4 mb-lg-0"
              >Create Form for Free</a
            >
          </div>
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center mt-4 mt-lg-0"
          >
            <nuxt-img
              src="/use-case/quiz/quiz-hero.svg"
              alt="Quiz Hero image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
    <ProcessSteps
      heading="Create your Free Online Quiz in 3 Simple Steps"
      :steps="quizSteps"
    />
    <UseCaseFeatureShowcase
      heading="Why do you need an Online Quiz?"
      :features="whyNeedQuiz"
    />
    <LargeIconFeatureSection
      heading="Make the most of Online Quizzes"
      :features="makeMostOfOnlineQuizzes"
    />
    <TemplateSection heading="Popular Online Quiz Templates" slug="quizzes" />
    <CallToActionSection
      :content="{
        heading: 'Ready to dive in?',
        subHeading: 'Register with us Now.',
        btnPrimary: 'Signup',
      }"
    />
    <TemplateFaq :faqs="faqs" />
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/solutions/quiz/',
        title: 'Free Online Quiz Maker | Formester',
        description:
          "Build engaging quizzes with Formester's Online Quiz maker. Perfect solution to streamline education, training, and recruitment.",
        keywords: [
          'quiz form builder',
          'quiz form templates',
          'Formester',
          'quiz solutions',
          'quiz form creation',
          'Form creation',
          'quiz automation',
          'quiz software',
          'Online quiz',
          'quiz efficiency',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Free Online Quiz Maker | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/solutions/quiz/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Free Online Quiz Maker | Formester',
          description:
            "Build engaging quizzes with Formester's Online Quiz maker. Perfect solution to streamline education, training, and recruitment.",
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Formester',
              item: 'https://formester.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Create Fun and Engaging Quiz in Minutes',
              item: 'https://formester.com/solutions/quiz/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      quizSteps: [
        {
          description: 'Sign Up for a free account on Formester.',
          imageSrc: 'use-case/quiz/steps/step1.svg',
          imageAlt:
            'Illustration of signing up for a free account on Formester.',
        },
        {
          description:
            'Build your own quiz or select one from our pre-designed templates.',
          imageSrc: 'use-case/quiz/steps/step2.svg',
          imageAlt:
            'Graphic showing the process of using templates to create a quiz instantly on Formester.',
        },
        {
          description:
            'Share the Quiz and instantly provide scores when someone completes the Quiz.',
          imageSrc: 'use-case/quiz/steps/step3.svg',
          imageAlt:
            'Image depicting the instant display of quiz scores upon completion on the Formester platform.',
        },
      ],
      whyNeedQuiz: [
        {
          heading: 'Educational Institutions',
          description:
            'Craft engaging assessments, grade with ease, and gain insightful learning analytics. Build online quizzes and exams in minutes, with diverse question types and instant feedback. Track individual and class progress, identify knowledge gaps, and personalize learning strategies.',
          imgUrl: 'use-case/quiz/educational-institutions.png',
        },
        {
          heading: 'Corporate Training',
          description:
            'Optimize employee development with interactive training modules. Design impactful compliance quizzes, monitor knowledge retention, and ensure adherence to regulations. Gamified quizzes spark engagement, while detailed reports empower data-driven learning decisions.',
          imgUrl: 'use-case/quiz/corporate-training.png',
        },
        {
          heading: 'Certification Courses and E-learning Platforms',
          description:
            'Provide the learners with self-assessment tools and track progress towards mastery of a topic. Generate personalized quizzes that adapt to individual strengths and weaknesses. Measure learning outcomes, incentivize knowledge acquisition, and deliver a superior e-learning experience.',
          imgUrl: 'use-case/quiz/certification-courses.png',
        },
        {
          heading: 'Healthcare Training',
          description:
            'Facilitate high-quality medical education and ensure continual skill development. Create scenario-based quizzes to test clinical decision-making and knowledge application. Track learning paths and maintain professional competency with ease.',
          imgUrl: 'use-case/quiz/healthcare-training.png',
        },
        {
          heading: 'Recruitment',
          description:
            'Eliminate guesswork with objective pre-employment tests. Design skill-specific quizzes to assess potential, test knowledge and identify ideal candidates. Streamline the hiring process, save time, and make data-driven recruitment decisions with confidence.',
          imgUrl: 'use-case/quiz/recruitment.png',
        },
      ],
      makeMostOfOnlineQuizzes: [
        {
          title: 'Gamify with Leaderboard',
          description:
            'Gamify your quizzes with live leaderboards and increase engagement',
          img: 'use-case/quiz/icons/gamify-with-leaderboard.svg',
        },
        {
          title: 'Generate Leads for Business',
          description:
            'Generate qualified leads for your business by creating interesting quizzes',
          img: 'use-case/quiz/icons/generate-leads-for-business.svg',
        },
        {
          title: 'Promote your Brand',
          description: 'Promote your brand by creating quizzes that go viral',
          img: 'use-case/quiz/icons/promote-your-brand.svg',
        },
        {
          title: 'Secure with AI Spam Protection',
          description:
            'Secure submissions and comments with AI powered Spam Protection',
          img: 'use-case/quiz/icons/secure-with-ai-spam-protection.svg',
        },
        {
          title: 'Customized Experience',
          description:
            'Customize all elements of the Quiz from questions to images and themes',
          img: 'use-case/quiz/icons/customized-experience.svg',
        },
        {
          title: 'Auto Graded Quizzes',
          description:
            'Create auto graded quizzes that provide a score after submission in real time',
          img: 'use-case/quiz/icons/auto-graded-quizzes.svg',
        },
      ],
      faqs: [
        {
          question: 'How easy is it to create an online quiz with Formester?',
          answer:
            "No coding required! Our drag-and-drop interface lets you build beautiful quizzes in minutes, even if you're a tech newbie. Choose from various question types, customize designs, and personalize settings without breaking a sweat.",
        },
        {
          question: 'Can I make fun and engaging quizzes with Formester?',
          answer:
            "Absolutely! Add images, videos, GIFs, and branching logic to create interactive quizzes that capture attention and keep users hooked. Surprise them with personalized feedback and stunning results pages they'll love to share.",
        },
        {
          question: 'What type of quizzes can I create with Formester?',
          answer:
            'The possibilities are endless! From personality tests and trivia games to lead generation surveys and educational assessments, Formester empowers you to build quizzes for any purpose and audience.',
        },
        {
          question: 'How do I share my quizzes and collect responses?',
          answer:
            "Share your creations via social media, embed them on your website, or send custom email invitations. Track responses in real-time, analyze data, and export results for further analysis – all within Formester's intuitive platform.",
        },
        {
          question: 'Is Formester affordable?',
          answer:
            'We offer flexible plans for individuals and businesses, starting with a free trial to explore our features. Choose the one that best fits your needs and enjoy seamless quiz creation without breaking the bank.',
        },
      ],
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

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

@media (max-width: 500px) {
  .hero {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .hero__heading {
    line-height: 48px;
    font-size: 2.5rem;
  }
}
</style>
