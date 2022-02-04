<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
.message-block {
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
.message {
  color: var(--clr-primary);
  font-family: Fredoka One;
  font-style: normal;
  font-weight: normal;
  font-size: 172px;
  line-height: 208px;
  letter-spacing: 0.04em;
}
.message-detail {
  color: var(--clr-primary);
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
}
.navigate-btn {
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
@media only screen and (max-width: 992px) {
  .message {
    font-size: 128px;
    line-height: 160px;
  }
  .message-detail {
    font-size: 32px;
    line-height: 28px;
  }
  .navigate-btn {
    width: 94px;
    height: 45px;
    margin: 24px 0px;
  }
  .navigate-btn {
    padding: 12px 28px;
    width: 84px;
    height: 40px;
    margin: 20px 0px;
  }
  .corner-design {
    width: 768px;
  }
}
@media only screen and (max-width: 768px) {
  .message {
    font-size: 96px;
    line-height: 128px;
  }
  .message-detail {
    font-size: 24px;
    line-height: 32px;
  }
  .navigate-btn {
    padding: 8px 24px;
    width: 84px;
    height: 40px;
    margin: 20px 0px;
  }
  .corner-design {
    width: 576px;
  }
}
@media only screen and (max-width: 576px) {
  .message {
    font-size: 64px;
    line-height: 96px;
  }
  .message-detail {
    font-size: 20px;
    line-height: 28px;
  }
  .navigate-btn {
    padding: 4px 20px;
    width: 74px;
    height: 35px;
    margin: 12px 0px;
  }
  .corner-design {
    width: 300px;
  }
}
</style>