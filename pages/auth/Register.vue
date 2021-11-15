<template>
  <AuthContainer>
    <h4 class="auth__title mb-4">Register</h4>
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
    <div class="mb-3 text-start">
      <label for="confirmpassword" class="form-label">Confirm Password</label>
      <input
        type="password"
        class="form-control auth__inputField"
        id="confirmpassword"
      />
    </div>
    <button type="submit" class="button auth__button mt-4">Submit</button>
    <div class="mt-3 text-center auth__bottom">
      Already have an account?
      <nuxt-link to="/auth/login">Sign in here</nuxt-link>
    </div>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../../components/auth/AuthContainer.vue'

export default {
  layout: 'auth',
  components: { AuthContainer },
}
</script>

<style scoped></style>
