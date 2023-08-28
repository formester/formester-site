import { allTestimonials } from '@/constants/testimonials'

export async function fetchRandomTestimonials() {
  const allTestimonialsData = await allTestimonials
  const randIndex = Math.floor(Math.random() * (allTestimonialsData.length - 2))
  const randomTestimonials = allTestimonialsData.slice(randIndex, randIndex + 2)
  return randomTestimonials
}
