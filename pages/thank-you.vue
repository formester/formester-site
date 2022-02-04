<template>
  <div class="message-block">
    <h1 class="message-thank-you">Thank You</h1>
    <h4 class="message-detail">for choosing Formester</h4>
    <button class="navigate-btn" @click="$router.push('/')">Home</button>
    <img class="abs corner-design" src="../assets/images/leaf/corner-design.png" alt="">
    <img class="abs l1" src="../assets/images/leaf/leaf-1.png" alt="">
    <img class="abs l2" src="../assets/images/leaf/leaf-2.png" alt="">
    <img class="abs l3" src="../assets/images/leaf/leaf-3.png" alt="">
    <img class="abs l4" src="../assets/images/leaf/leaf-4.png" alt="">
    <img class="abs l5" src="../assets/images/leaf/leaf-5.png" alt="">
    <img class="abs l6" src="../assets/images/leaf/leaf-6.png" alt="">
    <img class="abs l7" src="../assets/images/leaf/leaf-7.png" alt="">
    <img class="abs l8" src="../assets/images/leaf/leaf-8.png" alt="">
    <img class="abs l9" src="../assets/images/leaf/leaf-9.png" alt="">
    <img class="abs l10" src="../assets/images/leaf/leaf-10.png" alt="">
    <img class="abs l11" src="../assets/images/leaf/leaf-11.png" alt="">
    <img class="abs l12" src="../assets/images/leaf/leaf-12.png" alt="">
    <img class="abs l13" src="../assets/images/leaf/leaf-13.png" alt="">
    <img class="abs l14" src="../assets/images/leaf/leaf-14.png" alt="">
  </div>
</template>

<script>
export default {
  layout: 'message'
}
</script>

<style>
.message-thank-you {
  color: var(--clr-primary);
  font-family: Fredoka One;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 116px;
  letter-spacing: 0.04em;
}
.l1 {
  right: 200px;
  bottom: 100px;
}
.l2 {
  left: 682px;
  bottom: 120px;
}
.l3 {
  left: 348px;
  bottom: 140px;
}
.l4 {
  right: 150px;
  top: 350px;
}
.l5 {
  left: 509px;
  top: 200px;
}
.l6 {
  right: 750px;
  top: 100px;
}
.l7 {
  top: 120px;
  right: 150px;
}
.l8 {
  left: 576px;
  top: 60px;
}
.l9 {
  left: 416px;
  top: 170px;
}
.l10 {
  right: 400px;
  top: 100px;
}
.l11 {
  left: 252px;
  top: 400px;
}
.l12 {
  right: 250px;
  top: 200px;
}
.l13 {
  left: 344.39px;
  top: 120px;
}
.l14 {
  left: 231px;
  top: 210px;
}
@media only screen and (max-width: 1350px) {
  
}
@media only screen and (max-width: 1200px) {
  
}
@media only screen and (max-width: 992px) {
  .message-thank-you {
    font-size: 72px;
    line-height: 88px;
  }
  .l2 {
    left: 400px;
    bottom: 120px;
  }
  .l3 {
    left: 200px;
    bottom: 140px;
  }
  .l5 {
    left: 450px;
  }
  .l6{
    display: none;
  }
  .l11 {
    left: 150px;
    top: 400px;
  }
  .l13 {
    left: 250px;
    top: 120px;
  }
  .l14 {
    left: 130px;
    top: 210px;
  }
}
@media only screen and (max-width: 768px) {
  .message-thank-you {
    font-size: 48px;
    line-height: 56px;
  }
  .l2 {
    left: 360px;
    bottom: 140px;
  }
  .l3 {
    left: 100px;
  }
  .l4 {
    right: 50px;
    top: 350px;
  }
  .l5 {
    display: none;
  }
  .l8 {
    display: none;
  }
  .l10 {
    right: 320px;
  }
  .l11 {
    left: 80px;
  }
  .l13 {
    left: 180px;
    top: 80px;
  }
  .l14 {
    left: 60px;
  }
}
@media only screen and (max-width: 576px) {
  .message-thank-you {
    font-size: 32px;
    line-height: 40px;
  }
  .l2 {
    left: 260px;
  }
  .l4 {
    top: 400px;
    right: 30px;
  }
  .l7 {
    right: 60px;
  }
  .l9 {
    display: none;
  }
  .l10 {
    right: 250px;
  }
  .l11 {
    left: 30px;
  }
  .l12 {
    display: none;
  }
  .l13 {
    top: 40px;
  }
}
</style>