<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <img src="@/assets/images/logo.svg" alt="Fromester" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul> -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item me-3">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Features
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NuxtLink class="dropdown-item" to="/features/auto-responder"
                  >Auto Responder</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/features/easy-web-forms"
                  >Easy Web Forms</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/features/spam-protection"
                  >Spam Protection</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/features/integration"
                  >Integration</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item me-3">
            <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
          </li>
          <!-- <li class="nav-item">Contact us</li> -->
          <li class="nav-item me-3">
            <NuxtLink to="/auth/login">
              <button class="btn nav__button">Sign In</button>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  components: {
    NavItem,
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  font-weight: 700;
}

.nav__button {
  background-color: var(--clr-primary);
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
}
</style>