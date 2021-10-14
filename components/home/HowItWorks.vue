<template>
  <section class="how-it-works container">
    <div class="text-center">
      <h3 class="section__heading">How it <span>works</span></h3>
      <div class="row text-start mt-5">
        <div
          class="
            col-md-3
            mx-auto
            howitworks__card howitworks__card--1
            position-relative
          "
        >
          <h6>Create a form</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            quis sapiente sunt ullam omnis esse, repudiandae ipsum voluptatibus
            cumque excepturi nulla ut, deserunt consequuntur optio soluta
            voluptatem minima. Ab, possimus?
          </p>
        </div>
        <div
          class="
            col-md-3
            mx-auto
            howitworks__card howitworks__card--2
            position-relative
          "
        >
          <h6>Share it</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            nesciunt facilis voluptates rem corrupti maiores, fuga error iure
            magnam, consequuntur pariatur odio aliquam! Magnam voluptate
            quisquam nostrum quos unde iusto?
          </p>
        </div>
        <div
          class="
            col-md-3
            mx-auto
            howitworks__card howitworks__card--3
            position-relative
          "
        >
          <h6>See results</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae
            at optio doloribus suscipit! Sed architecto quidem, obcaecati ea
            earum saepe, nulla voluptatibus aspernatur laborum vel accusantium
            itaque aut quisquam!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
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
