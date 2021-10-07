<template>
  <li>
    <a class="nav__link" :class="{ active: isActive }">
      {{ navName }}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 152.9 43.4"
        style="enable-background: new 0 0 152.9 43.4"
        xml:space="preserve"
      >
        <path
          d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"
        /></svg
    ></a>
  </li>
</template>

<script>
export default {
  props: {
    navName: String,
    isActive: Boolean,
  },
}
</script>

<style>
.nav__link {
  font-weight: 500;
  position: relative;
  display: block;
  padding: 7px;
  position: relative;
}

.nav__link.active {
  font-weight: 600;
}

.nav__link svg {
  fill: none;
  stroke: hsla(277, 100%, 83%, 1);
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke-dasharray: 338;
  stroke-dashoffset: 338;
  stroke-linecap: round;
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 25px);
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
  z-index: -1;
}

.nav__link.active svg {
  stroke: var(--clr-primary);
  stroke-dashoffset: 0;
  opacity: 1;
  transition: opacity 0s,
    stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* NAV HOVER */

.nav__link:hover svg {
  stroke-dashoffset: 0;
  opacity: 1;
  transition: opacity 0s,
    stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media (max-width: 991px) {
  .nav__link {
    display: block;
    padding: 1em 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .nav__link:hover {
    background-color: var(--clr-dark);
    color: var(--clr-primary-light);
  }

  .nav__link:hover:after {
    width: 0%;
  }

  .nav__link.active svg {
    opacity: 0;
  }

  .nav__link:hover svg {
    opacity: 0;
  }
}
</style>
