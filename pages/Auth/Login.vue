<template>
  <AuthContainer>
    <h4 class="auth__title mb-4">Login</h4>
    <div class="mb-3 text-start">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control auth__inputField"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3 text-start">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control auth__inputField"
        id="password"
      />
    </div>
    <button type="submit" class="button auth__button mt-4">Submit</button>
    <div class="mt-3 text-center auth__bottom">
      Don’t have an account?
      <nuxt-link to="/auth/register">Sign up here</nuxt-link>
    </div>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../../components/auth/AuthContainer.vue'

export default {
  components: { AuthContainer },
}
</script>

<style scoped>

</style>
