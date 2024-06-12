<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">
              Add Collaborators: Share and Edit Your Forms with Multiple Users
            </h1>
            <p class="hero__subheading mt-3">
              Form sharing for effective collaboration and efficient team-work!
              Unite your team, gather valuable feedback, and unlock the true
              potential of form building with Formester's built-in Team
              Collaboration feature.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Get Started - it's Free</a
            >
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <nuxt-img
              src="/features/collaboration/collaboration.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
              style="z-index: 2"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div
          class="feature__heading d-flex align-items-center justify-content-center"
        >
          <h2 class="section__heading">
            How does online form collaboration help?
          </h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
          <h2 class="section__heading">
            Discover the Benefits of Form Collaboration on Forms
          </h2>
        </div>

        <div class="templates mt-md-5">
          <div v-for="(benefit, idx) in benefits" :key="idx">
            <div
              class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
            >
              <nuxt-img
                :src="`/icons/${benefit.imageSrc}`"
                class="img-fluid"
                style="width: 69px"
                :alt="benefit.altText"
                loading="lazy"
              />
              <h4 class="sub__section-heading mt-4">{{ benefit.title }}</h4>
              <p class="subheading__text">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SimpleStepsCreate
      heading="How to collaborate effectively in 2 simple steps"
      :steps="steps"
      :stepCount="steps.length"
    />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
    <FAQwithCategories :faqQuestions="categories" />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '@/components/TemplateSection.vue'
import FAQwithCategories from '@/components/FAQwithCategories.vue'

// MetaTags
import getSiteMeta from '@/utils/getSiteMeta'
import ApplicationOfWebForms from '@/components/ApplicationOfWebForms.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate'
import { fetchRandomTestimonials } from '@/utils/getTestimonials.js'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    ApplicationOfWebForms,
    FAQwithCategories,
    SimpleStepsCreate,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/team-collaboration/',
        title:
          'Simplify Collaboration on Online Forms and Surveys - Team Collaboration allows you to regulate Form Access for Multiple Users, Members or Clients!',
        description:
          "Formester's collaborative form sharing will boost teamwork! Gather input, unite your team, and easily uncover form-building potential.",
        mainImage: 'https://formester.com/formester-logo-meta-image.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with collaboration feature',
          'formester web form features collboration',
          'collboration',
          'Web forms collboration',
          'collboration for web forms',
          'collboration web forms',
          'collboration feature for web forms',
          'web forms for customer support',
          'Best Collaboration Software in 2023',
          'Collaboration software solutions to implement for your own business',
          'web forms productivity',
          'How to add Collaborators to your Web Forms',
          'automate your workflow',
          'customized notifications',
          'form builder',
          'formester',
          'online forms',
          'online web forms',
          'formester web forms',
          'form creator',
          'form generator',
          'online form',
          'web form',
          'online forms',
          'web forms',
          'create form',
          'create forms',
          'frequently asked questions',
          'FAQ',
          'instant reply',
          'customized reply',
          'personalized emails',
          'personalized instant emails',
          'instant pre-written reply',
          'send a copy of responses to submitters',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title:
        'Simplify Collaboration on Online Forms and Surveys - Team Collaboration allows you to regulate Form Access for Multiple Users, Members or Clients!',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/team-collaboration/',
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
          name: 'Simplified Collaboration: Form Access with Multiple Members & Clients!',
          description:
            "Formester's collaborative form sharing will boost teamwork! Gather input, unite your team, and easily uncover form-building potential.",
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
              name: 'Features',
              item: 'https://formester.com/features',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Auto Responder',
              item: 'https://formester.com/features/team-collaboration/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Collaborative forms with Multiple User',
          description:
            'With Formester’s in-built Collaboration feature, you can Invite multiple team members, colleagues, and clients to collaborate and work as a team on your forms. Boost productivity, efficiency and bring your team together to let the creativity flow!',
          src: 'collaboration/collaborate-effortlessly.svg',
          alt: 'add multiple collaboration',
        },
        {
          title: 'Control Form Access and Permissions',
          description:
            'Grant access to who can edit, view, and share your form. Formester’s form collaboration permissions put you in control, ensuring your precious work stays in the right hands. Assign specific roles and permissions for enhanced security and control.',
          src: 'collaboration/form-permissions.svg',
          alt: 'control the level of access to the forms',
        },
        {
          title: 'Real-time Collaboration on Online Forms and Surveys',
          description:
            'Collaborate in real-time with your team members on the same form. Experience live communication and instant updates, ensuring everyone stays on the same page and make your form-building process a breeze.',
          src: 'collaboration/realtime-collaboration.svg',
          alt: 'collaboration real time',
        },
        {
          title: 'Revoke Access with Ease',
          description:
            "Team Collaboration feature provides full access control to your online forms. Easily revoke access for specific collaborators, be it a past team member or a client no longer needing access. Ensure your form data's security and privacy with just a few clicks.",
          src: 'collaboration/access-revoked.svg',
          alt: 'remove the access of any user once their task is completed',
        },
        {
          title: 'Track and Analyze Collaborator Contributions',
          description:
            "With Formester's Collaboration feature, you can monitor and analyze each collaborator's contributions to your forms. Easily track who made changes, the kind of changes, collected responses, and accessed the form at any given time. Gain valuable insights into team performance and form activity to optimize collaboration efficiency.",
          src: 'collaboration/form-collaboration-analytics.svg',
          alt: 'form collaboration analytics',
        },
      ],
      benefits: [
        {
          title: 'Enhanced Efficiency',
          description:
            'Collaborate in real-time, speeding up form creation and data analysis with your team. Work together seamlessly, reducing time spent on back-and-forth communications and accelerating project completion.',
          imageSrc: 'enhanced-efficiency.jpg',
          altText: 'icon displaying Enhanced Efficiency',
        },
        {
          title: 'Improved Communication',
          description:
            'Seamlessly share forms and submissions with stakeholders, ensuring everyone is on the same page. Foster effective communication and collaboration among team members, colleagues and clients.',
          imageSrc: 'improved-communication.jpg',
          altText: 'icon showing Improved Communication',
        },
        {
          title: 'Real-Time Suggestions and Edits',
          description:
            'Receive real-time feedback, suggestions and insights from collaborators, enabling continuous improvements and iterations. With instant feedback, you can make necessary adjustments, enhancing the quality and effectiveness of your forms.',
          imageSrc: 'realtime-suggestions-and-edits.jpg',
          altText: 'icon showing real-time suggestions and edits',
        },
        {
          title: 'Transparent Progress Tracking',
          description:
            "Keep track of each team member's contributions and progress throughout the form-building process. Transparency in work ensures accountability and enables better project management.",
          imageSrc: 'transparent-progress-tracking.jpg',
          altText: 'icon showing transparent progress tracking',
        },
        {
          title: 'Cross-Platform Compatibility',
          description:
            "Formester's collaboration feature works seamlessly across various devices and platforms. Collaborators can access and interact with forms from their desktops, tablets, or mobile devices, ensuring flexibility and convenience.",
          imageSrc: 'cross-platform-compatibility.jpg',
          altText: 'icon showing cross platorm compatibility',
        },
        {
          title: 'Secure Sharing',
          description:
            "Formester's collaboration tools ensure secure sharing of forms and data. You can control access permissions, limiting sensitive information only to authorized users, ensuring data privacy and confidentiality.",
          imageSrc: 'secure-sharing.jpg',
          altText: 'icon showing secure sharing',
        },
        {
          title: 'Enhanced Productivity',
          description:
            'Collaborative efforts lead to increased productivity as team members can work concurrently on different aspects of the form. Distributing tasks and responsibilities efficiently ensures a more streamlined workflow and faster form development.',
          imageSrc: 'enhanced-productivity.jpg',
          altText: 'icon showing enhanced productivity',
        },
        {
          title: 'Team Morale',
          description:
            'Collaborative form-building fosters a sense of unity and cohesion among team members. By working together towards a common goal, team members feel more engaged, motivated, and invested in the success of the project.',
          imageSrc: 'team-cohesion.jpg',
          altText: 'icon showing team cohesion',
        },
      ],
      categories: [
        {
          title: 'General',
          faqs: [
            {
              question: "What is Formester's Collaboration feature?",
              answer:
                "Formester's Collaboration feature allows you to invite multiple team members, colleagues, and clients to collaborate on your forms. It enables real-time collaboration, enhancing form creation and data analysis with your team.",
            },
            {
              question:
                'How can I invite team members and clients to collaborate on my forms?',
              answer:
                "To invite collaborators, simply access your Formester dashboard, click on the Collaborators Tab, and add the required person's email address. Once invited, they will receive an email with a link to collaborate.",
            },
            {
              question:
                'How do I ensure data security and control when collaborating on forms?',
              answer:
                "You can maintain control over your form's sensitive data by setting permissions and restricting access to confidential information.",
            },
          ],
        },
        {
          title: 'Access and Permissions',
          faqs: [
            {
              question:
                'Can I limit access to sensitive or confidential form data?',
              answer:
                'Yes, you can assign permissions to control access to specific form data, ensuring it remains accessible only to authorized team members.',
            },
            {
              question: 'Can collaborators view form responses and analytics?',
              answer:
                'Yes, collaborators with appropriate permissions can access form responses and analytics to gain valuable insights.',
            },
            {
              question:
                'Is there a limit to the number of collaborators I can add to a form?',
              answer:
                'Formester allows you to add multiple collaborators as needed, ensuring flexible and efficient collaboration.',
            },
            {
              question:
                'Can I remove access for a collaborator if they are no longer part of the team?',
              answer:
                'Yes, as the form owner, you have the ability to remove access for collaborators at any time.',
            },
            {
              question:
                'Can collaborators from different locations or time zones work together on forms?',
              answer:
                "Yes, Formester's online platform allows collaborators from different locations and time zones to work together seamlessly.",
            },
          ],
        },
        {
          title: 'Real-time Collaboration',
          faqs: [
            {
              question:
                'Can multiple team members work on form design simultaneously?',
              answer:
                'Yes, with real-time collaboration, multiple team members can work on form design simultaneously.',
            },
            {
              question:
                'What happens if two collaborators try to edit the same form simultaneously?',
              answer:
                "Formester's real-time collaboration ensures that changes are synchronized and conflict resolution is managed seamlessly.",
            },
          ],
        },
        {
          title: 'Others',
          faqs: [
            {
              question: 'What types of forms are suitable for collaboration?',
              answer:
                "Formester's Collaboration feature is suitable for all types of forms, from surveys and feedback forms to registration and order forms.",
            },
            {
              question:
                'Can collaborators work on forms offline and then sync changes later?',
              answer:
                "Formester's real-time collaboration requires an internet connection for simultaneous work. However, collaborators can save drafts offline and sync changes when online.",
            },
          ],
        },
      ],
      steps: [
        {
          title: 'Add Collaborators by Sending An Invite',
          description:
            'Access your Formester dashboard, click on the Collaborators Tab. In the Add Collaborator field, add the required person’s email address and click invite!.',
          imgSrc:
            '/features/collaboration/add-collaborators-by-sending-an-invite.svg',
          imgAlt: 'Add Collaborators by Sending An Invite',
        },
        {
          title: 'Assign Permissions',
          description:
            'Efficiently manage form collaboration with Formester\'s role designation and permission settings. Choose from a range of roles like "Editor" for content changes and "Viewer" for read-only access. Maintain data security, preserve integrity, and enjoy the flexibility to adjust permissions as your project evolves. Assign appropriate roles to maintain control over permissions and collaborate seamlessly.',
          imgSrc: '/features/collaboration/assign-permissions.svg',
          imgAlt: 'Assign Permissions',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await fetchRandomTestimonials()
    return { randomTestimonials }
  },
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
  position: relative;
}

.hero__image {
  height: 100%;
}

.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}

.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
