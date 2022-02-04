<template>
  <div class="error-block">
    <h1 class="error">Oops</h1>
    <h4 class="error-detail">404, you seems to be lost</h4>
    <button class="home-btn" @click="$router.push('/')">Home</button>
    <img class="abs corner-design" src="../assets/images/error/design-404.png" alt="">
    <img class="abs q1" src="../assets/images/error/q-mark-1.png" alt="">
    <img class="abs q2" src="../assets/images/error/q-mark-2.png" alt="">
    <img class="abs q3" src="../assets/images/error/q-mark-3.png" alt="">
    <img class="abs q4" src="../assets/images/error/q-mark-4.png" alt="">
    <img class="abs q5" src="../assets/images/error/q-mark-5.png" alt="">
    <img class="abs q6" src="../assets/images/error/q-mark-6.png" alt="">
    <img class="abs q7" src="../assets/images/error/q-mark-7.png" alt="">
    <img class="abs q8" src="../assets/images/error/q-mark-8.png" alt="">
    <img class="abs q9" src="../assets/images/error/q-mark-9.png" alt="">
    <img class="abs q10" src="../assets/images/error/q-mark-10.png" alt="">
    <img class="abs q11" src="../assets/images/error/q-mark-11.png" alt="">
    <img class="abs q12" src="../assets/images/error/q-mark-12.png" alt="">
  </div>
</template>

<script>
export default {
  layout: 'message'
}
</script>

<style>
.error-block {
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.error {
  color: var(--clr-primary);
  font-family: Fredoka One;
  font-style: normal;
  font-weight: normal;
  font-size: 172px;
  line-height: 208px;
  letter-spacing: 0.04em;
}
.error-detail {
  color: var(--clr-primary);
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
}
.home-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 114px;
  height: 55px;

  /* primary */

  border: 1px solid var(--clr-primary);
  box-sizing: border-box;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 32px 0px;
  background: white;  
  color: var(--clr-primary);
  font-family: Nunito;
  cursor: pointer;
}
.abs {
  position: absolute;
}
.corner-design {
  bottom: 0;
  left: 0;
  z-index: -1;
}
.q1 {
  left: 1074px;
  top: 100px;
}
.q2 {
  left: 1084px;
  top: 352px;
}
.q3 {
  left: 350px;
  top: 150px;
}
.q4{
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
  left: 1322px;
  top: 250px;
}
.q10 {
  left: 285px;
  top: 660px;
}
.q11 {
  left: 767px;
  top: 680px;
}
.q12 {
  left: 1308px;
  top: 660px;
}
</style>