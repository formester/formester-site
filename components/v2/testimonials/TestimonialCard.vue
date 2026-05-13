<template>
  <div class="testimonial__card">
    <div class="testimonial__content">
      <nuxt-img
        src="/UI Block/quotation.svg"
        class="quotation-marks mb-2"
        alt="Quotation marks"
        width="30"
        height="30"
        loading="lazy"
      />
      <p class="mt-1">{{ testimonial.comment }}</p>
    </div>
    <div class="d-flex">
      <nuxt-img
        v-if="profileImg.src"
        :src="profileImg.src"
        :alt="profileImg.alt || 'User profile'"
        :width="profileImg.width || 48"
        :height="profileImg.height || 48"
        class="img-fluid testimonial__user"
        loading="lazy"
      />
      <div
        v-else
        class="testimonial__avatar"
        :style="{ backgroundColor: avatarColor.bg, color: avatarColor.text }"
        aria-hidden="true"
      >{{ initials }}</div>
      <div class="d-flex flex-column ms-3">
        <span class="testimonial__user-text">{{ testimonial.name }}</span>
        <span class="testimonial__user-degn">
          {{ testimonial.position }} at
          <span class="testimonial__user-company">{{ testimonial.organization }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getStrapiImage } from '@/utils/strapiImage'

const props = defineProps({
  testimonial: { type: Object, required: true },
})

const profileImg = computed(() => getStrapiImage(props.testimonial?.profileImage))

const initials = computed(() => {
  const name = (props.testimonial?.name || '').trim()
  const parts = name.split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
})

const avatarColor = computed(() => {
  const palette = [
    { bg: '#f4ebff', text: '#6434d0' },
    { bg: '#eff8ff', text: '#1570ef' },
    { bg: '#ecfdf3', text: '#027a48' },
    { bg: '#fff6ed', text: '#c4320a' },
    { bg: '#fdf2fa', text: '#c11574' },
    { bg: '#f0fdf9', text: '#107569' },
  ]
  const name = props.testimonial?.name || ''
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return palette[Math.abs(hash) % palette.length]
})
</script>

<style scoped>
.testimonial__card {
  padding: 36px;
  flex: 0 0 calc(33.33% - 16px);
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(16, 24, 40, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px;
}
.testimonial__card:hover {
  box-shadow:0 2px 8px 0 rgba(16, 24, 40, 0.12);
  background-color: #FCFCFD;
  transition: all 0.3s ease-in;
}

.testimonial__content {
  margin-bottom: 24px;
}

.testimonial__user {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.testimonial__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.testimonial__user-text {
  font-weight: 500;
  line-height: 24px;
}

.testimonial__user-degn {
  font-size: 14px;
  line-height: 20px;
  color: #42526b;
}

.testimonial__user-company {
  color: #7534ff;
  font-weight: 500;
}

.quotation-marks {
  height: 30px;
  width: 30px;
}

@media screen and (max-width: 1200px) {
  .testimonial__card {
    flex: 0 0 calc(50% - 16px);
  }
}

@media screen and (max-width: 768px) {
  .testimonial__card {
    flex: 0 0 100%;
    min-width: calc(100% - 32px);
    margin: 0 auto;
    padding: 24px;
  }
}
</style>
