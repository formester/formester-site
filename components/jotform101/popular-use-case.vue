<template>
  <div class="container py-5">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">Popular Use-Cases of Jotform</h2>
      </div>

      <div class="row">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="col-lg-4 col-md-6 mt-5"
        >
          <div class="p-3 d-flex flex-column align-items-center">
            <nuxt-img
              :src="`/jotform101/popular-use-case/${feature.img}.svg`"
              class="img-fluid"
              :alt="feature.altText"
              loading="lazy"
            />
            <div class="text-start">
              <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
              <p class="subheading__text">{{ feature.description }}</p>
              <ul>
                <li v-for="fp in features.points" :key="fp">
                  {{ fp }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Event Registration',
          description:
            "Simplify event planning and streamline the registration process with Jotform's user-friendly forms.",
          points: [
            'Capture attendee information',
            'Manage RSVPs',
            'Event Feedbacks',
          ],
          img: 'event-registration',
        },
        {
          title: 'Surveys and Feedback',
          description:
            "Gather valuable insights and feedback from your audience using Jotform's customizable survey forms.",
          points: [
            'Create Engaging Questionnaires',
            'Analyse Responses',
            'Make Data-driven Decisions',
          ],
          img: 'surveys-and-feedbacks',
        },
        {
          title: 'Employment & Hiring',
          description:
            "Streamline the hiring process with Jotform's intuitive employment forms.",
          points: [
            'Collecting Applicant Details & Resumes',
            'Onboarding Forms',
            'Engagement Surveys',
          ],
          img: 'employment-and-hiring',
        },
        {
          title: 'Online Orders and Payments',
          description:
            "Simplify event planning and streamline the registration process with Jotform's user-friendly forms.",
          points: [
            'Set up Order Forms ',
            'Manage Product Catalogues',
            'Process Payments Securely',
          ],
          img: 'online-orders-and-payments',
        },
        {
          title: 'Jotform in Education and Training',
          description:
            "Enhance the learning experience with Jotform's educational forms.",
          points: [
            'Create quizzes',
            'Course Evaluations',
            'Registration Forms',
          ],
          img: 'jotform-in-education-and-training',
        },
        {
          title: 'Healthcare and Medical Forms',
          description:
            'Ensure compliance with data privacy regulations while efficiently managing patient information.',
          points: [
            'Patient Registration',
            'Appointment Scheduling',
            'Medical History Collection',
          ],
          img: 'healthcare-and-medical-forms',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
