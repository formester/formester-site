<template>
  <div class="ftcmp mx-auto mt-5">
    <h3 class="ftcmp__heading">Feature Comparison</h3>
    <div class="table-responsive mt-4">
      <table class="table text-start">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Free</th>
            <th scope="col">Personal</th>
            <th scope="col">Business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{{ amount[0] }}</th>
            <td> {{showPrice(amount[1])}}</td>
            <td> {{showPrice(amount[2])}}</td>
            <td> {{showPrice(amount[3])}}</td>
          </tr>
          <tr v-for="p of pricing" :key="p[0]">
            <th scope="row">{{ p[0] }}</th>
            <td>{{ p[1] }}</td>
            <td>{{ p[2] }}</td>
            <td>{{ p[3] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isYearly: Boolean,
  },
  data() {
    return {
      amount: ['Price', 0, 13, 49],
      pricing: [
        ['No. of submissions per month', '100', '1,000', '15,000'],
        ['Form builder', 'Yes', 'Yes', 'Yes'],
        ['Question Branching & Logic Jumps', 'Yes', 'Yes', 'Yes'],
        ['Self email notification', 'Yes', 'Yes', 'Yes'],
        ['Respondent email notification', 'Yes', 'Yes', 'Yes'],
        ['Spam protection', 'Yes', 'Yes', 'Yes'],
        ['API integration', 'Yes', 'Yes', 'Yes'],
        ['Zapier connectors', 'Yes', 'Yes', 'Yes'],
        ['Analytics', 'Yes', 'Yes', 'Yes'],
        ['File uploads', '-', '1 GB', '5 GB'],
        ['White Label', '-', '-', 'Yes'],
      ]
    } 
  },
  methods: {
    showPrice(amount){
      if(this.isYearly){
        return `${amount * 11} / year`;
      }

      return `${amount} / month`;
    }
  }
}
</script>

<style scoped>
.ftcmp {
  max-width: 900px;
}

.ftcmp__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
}
thead th {
  border: none;
}
</style>
