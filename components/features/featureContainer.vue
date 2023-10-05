<template>
  <div class="py-3" :class="{ bgPink: feature.bgPink }">
    <div class="container py-5">
      <h2 class="feature__heading text-center">{{ feature.heading }}</h2>
      <p class="text-center mt-3">
        {{ feature.description }}
      </p>
      <div class="row flex justify-content-between mt-40px">
        <div class="col-xl-6 flex flex-column">
          <div
            class="feature__contentCard"
            :class="{ active1: activeCard === 1 }"
            @click="setActiveCard(1)"
          >
            <h3>{{ feature.contents[0].title }}</h3>
            <p>{{ feature.contents[0].description }}</p>
          </div>
          <div
            class="feature__contentCard mt-4"
            :class="{ active2: activeCard === 2 }"
            @click="setActiveCard(2)"
          >
            <h3>{{ feature.contents[1].title }}</h3>
            <p>{{ feature.contents[1].description }}</p>
          </div>
          <div
            class="feature__contentCard mt-4"
            :class="{ active3: activeCard === 3 }"
            @click="setActiveCard(3)"
          >
            <h3>{{ feature.contents[2].title }}</h3>
            <p>{{ feature.contents[2].description }}</p>
          </div>
          <NuxtLink
            :to="`/features/${feature.link}/`"
            class="feature__link d-flex align-items-center mt-4"
          >
            <span class="d-block">View More</span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3 17.6237C13.1 17.4237 13.004 17.182 13.012 16.8987C13.02 16.6153 13.1243 16.3737 13.325 16.1737L16.15 13.3487H5C4.71667 13.3487 4.479 13.2527 4.287 13.0607C4.095 12.8687 3.99934 12.6313 4 12.3487C4 12.0653 4.096 11.8277 4.288 11.6357C4.48 11.4437 4.71734 11.348 5 11.3487H16.15L13.3 8.49868C13.1 8.29868 13 8.06101 13 7.78568C13 7.51035 13.1 7.27301 13.3 7.07368C13.5 6.87368 13.7377 6.77368 14.013 6.77368C14.2883 6.77368 14.5257 6.87368 14.725 7.07368L19.3 11.6487C19.4 11.7487 19.471 11.857 19.513 11.9737C19.555 12.0903 19.5757 12.2153 19.575 12.3487C19.575 12.482 19.554 12.607 19.512 12.7237C19.47 12.8403 19.3993 12.9487 19.3 13.0487L14.7 17.6487C14.5167 17.832 14.2877 17.9237 14.013 17.9237C13.7383 17.9237 13.5007 17.8237 13.3 17.6237Z"
                fill="#4F3895"
              />
            </svg>
          </NuxtLink>
        </div>
        <div
          class="col-xl-5 position-relative d-flex align-items-center justify-content-center"
        >
          <nuxt-img
            v-show="activeCard === 0"
            :src="`/features/${feature.img}.svg`"
            class="feature__img img-fluid"
            loading="lazy"
            sizes="40vw"
          />
          <nuxt-img
            v-show="activeCard !== 0 && !feature.bgPink"
            src="/features/blob.png"
            class="blob img-fluid"
            loading="lazy"
            sizes="40vw"
          />
          <nuxt-img
            v-show="activeCard !== 0 && feature.bgPink"
            src="/features/blob-2.png"
            class="blob img-fluid"
            loading="lazy"
            sizes="40vw"
          />
          <nuxt-img
            :style="illus1Style"
            :src="`/features/contents/${feature.contents[0].img}.svg`"
            class="illus1 img-fluid"
            loading="lazy"
            sizes="40vw"
          />
          <nuxt-img
            :style="illus2Style"
            :src="`/features/contents/${feature.contents[1].img}.svg`"
            class="illus2 img-fluid"
            loading="lazy"
            sizes="40vw"
          />
          <nuxt-img
            :style="illus3Style"
            :src="`/features/contents/${feature.contents[2].img}.svg`"
            class="illus3 img-fluid"
            loading="lazy"
            sizes="40vw"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feature'],
  data() {
    return {
      activeCard: 0,
    }
  },
  computed: {
    illus1Style() {
      if (this.activeCard === 1) {
        return {
          transform: 'scale(1.2)',
          left: '3%',
          display: 'inline',
          zIndex: '100',
        }
      }
      return this.activeCard !== 0 ? {} : { display: 'none' }
    },
    illus2Style() {
      if (this.activeCard === 2) {
        return {
          transform: 'scale(1.2)',
          display: 'inline',
          right: '5%',
          zIndex: '100',
        }
      }
      return this.activeCard !== 0 ? {} : { display: 'none' }
    },
    illus3Style() {
      if (this.activeCard === 3) {
        return {
          transform: 'scale(1.2)',
          display: 'inline',
          zIndex: '100',
        }
      }
      return this.activeCard !== 0 ? {} : { display: 'none' }
    },
  },
  methods: {
    setActiveCard(cardNumber) {
      this.activeCard = cardNumber
    },
  },
}
</script>

<style scoped>
.mt-40px {
  margin-top: 2.5rem;
}

.bgPink {
  background: #f7f5ff;
}

.feature__heading {
  font-size: 2.25rem;
  line-height: 2.75rem;
  font-weight: bold;
}

.feature__contentCard {
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.feature__contentCard:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.feature__contentCard h3 {
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.feature__contentCard p {
  font-size: 0.875rem;
  line-height: 1.375rem;
}

.feature__link {
  font-size: 16px;
  color: var(--clr-primary);
  cursor: pointer;
}

.feature__link span {
  margin-right: 4px;
  transition: all ease-in-out 300ms;
}

.feature__link:hover span {
  margin-right: 8px;
}

.active1.feature__contentCard,
.active2.feature__contentCard,
.active3.feature__contentCard {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.illus1 {
  position: absolute;
  top: 3%;
  left: 0;
  transition: all ease-in-out 300ms;
}

.illus2 {
  position: absolute;
  top: 36%;
  right: 0;
  transition: all ease-in-out 300ms;
}

.illus3 {
  position: absolute;
  bottom: 5%;
  left: 10%;
  transition: all ease-in-out 300ms;
}
</style>
