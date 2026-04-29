<template>
  <div class="test-page" style="background-color: #f8fafc; min-height: 100vh;">
    <div class="container py-5">
      <h1 class="mb-4 text-center">MultiColumnCards Component Test</h1>
      <p class="text-center mb-5">Testing the hardcoded component independently from Strapi.</p>

      <div class="mb-5">
        <MultiColumnCards
          title="Who this is for"
          description="Every test has a job to do. Below is how Formester fits the six jobs we see most."
          :columns="2"
          :cards="mockCards"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MultiColumnCards from '@/components/features/MultiColumnCards.vue'

const mockCards = [
  {
    title: 'Teachers and professors',
    description: "Drop in the chapter you just taught. Walk out with a twenty-question midterm, Bloom's tagged and tied back to the page numbers you uploaded. Export to Google Forms, Canvas, or Moodle before the bell rings.",
    linkText: 'Browse quiz templates',
    linkUrl: '#'
  },
  {
    title: 'Corporate L&D and trainers',
    description: "Upload the forty-page anti-harassment policy nobody reads. Get a fifteen-question compliance test that's actually written from the policy, not a generic template. Branch by job family, auto-score, and push the pass or fail straight into your LMS.",
    linkText: 'See training templates',
    linkUrl: '#'
  },
  {
    title: 'Certification bodies',
    description: "Proctored exams with time limits, randomized question pools, shuffled answer order, IP lock, and webcam verification. Export to QTI 2.1 for your certification platform, or run the whole thing inside Formester with anti-cheating settings on by default.",
  },
  {
    title: 'Recruiters and hiring teams',
    description: "Screen candidates with a role-specific skill test built from your JD or interview rubric. Grade short answers with AI-assisted review. Shortlist in one view.",
    linkText: 'Skills assessment template',
    linkUrl: '#'
  },
  {
    title: 'Coaches and bootcamp operators',
    description: "Drop the week's session notes. Get a ten-question check for understanding, shareable on Slack or WhatsApp, completion tracked live. You'll catch the two people who missed the same concept before next week's drill.",
  },
  {
    title: 'Students and self-learners',
    description: "Paste a week of lecture notes. Get a practice test with explanations you can re-take, shuffle, and mark the questions you still miss. Free forever on the basic plan.",
  }
]
</script>
