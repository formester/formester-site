<template>
  <section class="how-it-works container">
    <div class="text-center">
      <h3 class="section__heading">How it <span>works</span></h3>
      <div class="row text-start mt-5">
        <div
          v-for="step in steps"
          :key="step.step"
          class="
            col-lg-3
            mx-auto
            howitworks__card
            position-relative
          "
          :class="stepNumberClass(step)"
        >
          <h6>{{ step.heading }}</h6>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          step: 1,
          heading: 'Create a form',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis sapiente sunt ullam omnis esse, repudiandae ipsum voluptatibus cumque excepturi nulla ut, deserunt consequuntur optio soluta voluptatem minima. Ab, possimus?'
        },
        {
          step: 2,
          heading: 'Share it',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis sapiente sunt ullam omnis esse, repudiandae ipsum voluptatibus cumque excepturi nulla ut, deserunt consequuntur optio soluta voluptatem minima. Ab, possimus?'
        },
        {
          step: 3,
          heading: 'See results',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis sapiente sunt ullam omnis esse, repudiandae ipsum voluptatibus cumque excepturi nulla ut, deserunt consequuntur optio soluta voluptatem minima. Ab, possimus?'
        }
      ]
    }
  },
  methods: {
    stepNumberClass(step) {
      return `howitworks__card--` + step.step;
    }
  }
}
</script>

<style scoped>
.how-it-works {
  margin-top: 5em;
}

.howitworks__card::before {
  position: absolute;
  left: -12%;
  background-color: var(--clr-primary-light);
  width: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
}

.howitworks__card--1::before {
  content: '1';
}
.howitworks__card--2::before {
  content: '2';
}
.howitworks__card--3::before {
  content: '3';
}

.howitworks__card h6 {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  color: var(--clr-primary);
}
.howitworks__card p {
  font-size: var(--ft-small-body);
}
</style>
