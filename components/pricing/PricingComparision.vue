<template>
  <div class="ftcmp mx-auto mt-5">
    <h5 class="ftcmp__heading">Feature Comparision</h5>
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
            <th scope="row">Price</th>
            <td><img src="~/assets/images/cross.svg" alt="NA" /></td>
            <td>$13/mo</td>
            <td>$49/mo</td>
          </tr>
          <tr>
            <th scope="row">No. of forms</th>
            <td>3</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">No. of submissions per month</th>
            <td>100</td>
            <td>5000</td>
            <td>15000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
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
