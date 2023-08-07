<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Collaboration</h1>
            <p class="hero__subheading mt-3">
              Form sharing for effective collaboration and efficient team-work!
              Unite your team, gather valuable feedback, and unlock the true
              potential of form building with Formester's powerful in-built
              Collaboration/Add Collaborators feature!
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
            <nuxt-img
              src="/features/brand-kit/blob.png"
              alt=""
              class="img-fluid blob"
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
          <h2 class="section__heading">How does Collaboration help?</h2>
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
            Discover the Benefits of Form Collaboration
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

    <ThreeStepsCreateForm />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '../../components/TemplateSection.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import ApplicationOfWebForms from '../../components/ApplicationOfWebForms.vue'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    ApplicationOfWebForms,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/collaboration/',
        title:
          'Form Collaboration Made Easy: Add Multiple Team Members and Clients to View, Edit and Share Forms!',
        description:
          "Form sharing for effective collaboration and efficient team-work! Unite your team, gather valuable feedback, and unlock the true potential of form building with Formester's powerful in-built Collaboration/Add Collaborators feature!",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with autoresponder feature',
          'formester web forms with autorespond feature',
          'formester web form features autorespond',
          'Autoresponder',
          'Web forms Autoresponder',
          'Autoresponder for web forms',
          'Autoresponder web forms',
          'Autoresponder feature for web forms',
          'Autorespond feature for web forms',
          'Automate SMS after each form submission',
          'Automate emails after each form submission',
          'Automate email',
          'Automate SMS',
          'web forms for customer support',
          'Best Autoresponder Software in 2023',
          'autoresponder software solutions to implement for your own business',
          'web forms productivity',
          'How to add Autoresponder Web Forms to your website',
          'How to add Autoresponder to your Web Forms',
          'best way to create an auto responder when someone completes a web form',
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
        'Form Collaboration Made Easy: Add Multiple Team Members and Clients to View, Edit and Share Forms!',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/collaboration/',
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
          name: 'Email Autoresponder Message | Personalised Email Responder - Formester',
          description:
            'Boost your email marketing with a personalised email autoresponder message. Try Formester and engage your subscribers today! Sign up now.',
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
              item: 'https://formester.com/features/collaboration/',
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
          title: 'Collaborate Effortlessly: Add Multiple Collaborators',
          description:
            'With Formester’s in-built Collaboration feature, you can Invite multiple team members, colleagues, and clients to collaborate and work as a team on your forms. Boost productivity, efficiency and bring your team together to let the creativity flow!',
          src: 'collaboration/collaborate-effortlessly.svg',
          alt: 'add multiple collaboration',
        },
        {
          title: 'Form Permissions: Control at Your Fingertips',
          description:
            "You're the master of permissions! Decide who can edit, who can view, and who can spread the edit your form further. Formester’s form collaboration permissions put you in control, ensuring your precious work stays in the right hands. Assign specific roles and permissions for enhanced security and control.",
          src: 'collaboration/form-permissions.svg',
          alt: 'control the level of access to the forms',
        },
        {
          title:
            'Real-time Collaboration: Suggest and Make Form Edits Simultaneously',
          description:
            'Collaborate in real-time with your team members on the same form. Experience seamless communication and instant updates, ensuring everyone stays on the same page and make your form-building process a breeze.',
          src: 'collaboration/realtime-collaboration.svg',
          alt: 'collaboration real time',
        },
        {
          title: 'Access Revoked: Remove Access with Ease',
          description:
            "Formester's Collaboration feature empowers you with complete control over access to your forms. If you need to revoke access for a particular collaborator, you can do so effortlessly. Whether it's a team member who has completed their task or a client who no longer requires access, you can remove their permissions with a few simple clicks, ensuring the security and privacy of your form data.",
          src: 'collaboration/access-revoked.svg',
          alt: 'remove the access of any user once their task is completed',
        },
        {
          title:
            'Form Collaboration Analytics: Track Collaborator Contributions',
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
          title: 'Team Cohesion',
          description:
            'Collaborative form-building fosters a sense of unity and cohesion among team members. By working together towards a common goal, team members feel more engaged, motivated, and invested in the success of the project.',
          imageSrc: 'team-cohesion.jpg',
          altText: 'icon showing team cohesion',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(
      Math.random() * (randomTestimonials.length - 2)
    )
    randomTestimonials = randomTestimonials.slice(randIndex, randIndex + 2)
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

.blob {
  position: absolute;
  right: 0;
  top: 0;
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
