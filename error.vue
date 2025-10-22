<template>
  <div>
    <Navbar />
    <div class="message-block">
      <h1 class="message">Oops</h1>
      <h4 class="message-detail">{{ error?.statusCode || 404 }}, {{ error?.statusCode === 404 ? "you seems to be lost" : "something went wrong" }}</h4>
      <button class="navigate-btn" @click="handleError">Home</button>
      <nuxt-img
        class="abs corner-design"
        src="/error/design-404.png"
        alt=""
      />
      <nuxt-img class="abs q1" src="/error/q-mark-1.png" alt="" />
      <nuxt-img class="abs q2" src="/error/q-mark-2.png" alt="" />
      <nuxt-img class="abs q3" src="/error/q-mark-3.png" alt="" />
      <nuxt-img class="abs q4" src="/error/q-mark-4.png" alt="" />
      <nuxt-img class="abs q5" src="/error/q-mark-5.png" alt="" />
      <nuxt-img class="abs q6" src="/error/q-mark-6.png" alt="" />
      <nuxt-img class="abs q7" src="/error/q-mark-7.png" alt="" />
      <nuxt-img class="abs q8" src="/error/q-mark-8.png" alt="" />
      <nuxt-img class="abs q9" src="/error/q-mark-9.png" alt="" />
      <nuxt-img class="abs q10" src="/error/q-mark-10.png" alt="" />
      <nuxt-img class="abs q11" src="/error/q-mark-11.png" alt="" />
      <nuxt-img class="abs q12" src="/error/q-mark-12.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/nav/Navbar.vue'

const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.message-block {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f9fafb 0%, #f0ebfa 100%);
  padding: 2rem;
}

.message {
  font-size: 72px;
  font-weight: 700;
  color: var(--clr-primary);
  margin-bottom: 16px;
  z-index: 10;
  position: relative;
}

.message-detail {
  font-size: 24px;
  font-weight: 500;
  color: var(--clr-text-secondary);
  margin-bottom: 32px;
  z-index: 10;
  position: relative;
}

.navigate-btn {
  background: var(--clr-primary);
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  position: relative;
  box-shadow: 0 4px 12px rgba(100, 52, 208, 0.2);
}

.navigate-btn:hover {
  background: var(--clr-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(100, 52, 208, 0.3);
}

.abs {
  position: absolute;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.corner-design {
  top: 0;
  right: 0;
  width: 200px;
  height: auto;
  opacity: 0.4;
}

@media (max-width: 768px) {
  .message {
    font-size: 48px;
  }
  
  .message-detail {
    font-size: 18px;
    text-align: center;
  }
  
  .navigate-btn {
    padding: 14px 28px;
    font-size: 15px;
  }
  
  .corner-design {
    width: 120px;
  }
}

.q1 {
  right: 366px;
  top: 100px;
}
.q2 {
  right: 356px;
  top: 352px;
}
.q3 {
  left: 350px;
  top: 150px;
}
.q4 {
  left: 440px;
  top: 280px;
}
.q5 {
  left: 119px;
  top: 70px;
}
.q6 {
  left: 727px;
  top: 100px;
}
.q7 {
  left: 12px;
  top: 270px;
}
.q8 {
  left: 560px;
  top: 180px;
}
.q9 {
  right: 118px;
  top: 250px;
}
.q10 {
  left: 285px;
  top: 626px;
}
.q11 {
  left: 767px;
  bottom: 60px;
}
.q12 {
  right: 132px;
  bottom: 80px;
}
@media only screen and (max-width: 1350px) {
  .q1 {
    right: 250px;
  }
  .q2 {
    right: 120px;
    top: 400px;
  }
  .q3 {
    left: 220px;
  }
  .q4 {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  .q1 {
    right: 110px;
  }
  .q2 {
    right: 100px;
    top: 450px;
  }
  .q3 {
    top: 120px;
    left: 200px;
  }
  .q9 {
    right: 100px;
    top: 300px;
  }
}
@media only screen and (max-width: 992px) {
  .q6 {
    display: none;
  }
  .q11 {
    left: 500px;
  }
}
@media only screen and (max-width: 768px) {
  .q1 {
    display: none;
  }
  .q3 {
    top: 120px;
    left: 150px;
  }
  .q5 {
    top: 50px;
    left: 100px;
  }
  .q11 {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .q2 {
    right: 60px;
    top: 500px;
  }
  .q8 {
    display: none;
  }
  .q9 {
    right: 20px;
    top: 260px;
  }
  .q10 {
    left: 85px;
  }
  .q12 {
    bottom: 50px;
  }
}
</style>
