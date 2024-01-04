<template>
  <section class="container text-center">
    <h2 class="section__heading">{{ heading }}</h2>
    <p class="section__subtitle">
      {{ description }}
    </p>
    <div class="table-responsive">
      <table class="table text-start comparision__table mx-auto">
        <thead class="bg__light-primary">
          <tr>
            <th scope="col">Features</th>
            <th
              scope="col"
              v-for="header in headers"
              :key="header"
              class="text-center"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c of comparisions" :key="c.title">
            <td style="font-weight: 600" v-html="c.title"></td>
            <td class="text-center">
              <template v-if="c.formester === 'Yes'">
                <nuxt-img src="check-green.svg" />
              </template>
              <template v-else-if="c.formester === 'No'">
                <nuxt-img src="red-cross.svg" />
              </template>
              <template v-else>
                {{ c.formester }}
              </template>
            </td>
            <td class="text-center">
              <template v-if="c.otherForm === 'Yes'">
                <nuxt-img src="check-green.svg" />
              </template>
              <template v-else-if="c.otherForm === 'No'">
                <nuxt-img src="red-cross.svg" />
              </template>
              <template v-else>
                {{ c.otherForm }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    comparisions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.comparision__table {
  margin-top: 3.5rem;
  max-width: 60rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}

.table > :not(caption) > * > * {
  padding: 1rem;
}

thead th {
  border: none;
}

@media only screen and (max-width: 992px) {
  .comparision__table {
    max-width: 45rem;
  }
}
@media only screen and (max-width: 768px) {
  .comparision__table {
    max-width: 32rem;
  }
}
@media only screen and (max-width: 576px) {
  .comparision__table {
    max-width: 20rem;
  }
}

@media only screen and (max-width: 500px) {
  .comparision__table {
    font-size: 12px;
    line-height: 20px;
    max-width: 20rem;
  }
  .comparision__table td {
    padding: 0.5em;
  }
}
</style>
